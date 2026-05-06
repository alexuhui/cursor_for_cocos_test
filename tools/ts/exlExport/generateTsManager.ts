import * as fs from 'fs'
import * as path from 'path'
import { formatConsole } from '../utils/consoleUtils'
import { rmFile } from '../utils/FileUtils'
import { _projectType } from '../utils/projectUtils'
import { CODE_FILE_PREFIX, _codeOutputDir, _exlLoaderOutputPath, _jsonOutputDir, _sourceDir } from './pathParser'

export namespace generateTsManager {
    const _jsonFileNames: string[] = []
    const _classNames: string[] = []
    export function generateCode(): void {
        arrangeJsonFileNames()
        delUselessTs()
        let code: string
        if (_classNames.length > 0) {
            code = `/** auto generate by exlExport.js, do not modify! */
${generateImports()}
export class ${CODE_FILE_PREFIX || 'Exl'}Loader {
    ${generateLoadAll()}
    ${generateLoadFew()}
    ${generateLoader()}
}
`
            if (!fs.existsSync(path.dirname(_exlLoaderOutputPath))) {
                fs.mkdirSync(path.dirname(_exlLoaderOutputPath))
            }
            fs.writeFileSync(_exlLoaderOutputPath, code, { encoding: 'utf8' })
        } else {
            if (fs.existsSync(_exlLoaderOutputPath)) {
                console.log(formatConsole([_jsonOutputDir, '不存在json数据文件', _exlLoaderOutputPath + '将被删除！'], 'red'))
            }
            rmFile(_exlLoaderOutputPath)
        }
    }

    function generateImports(): string {
        const imports: string[] = []
        _classNames.forEach((className: string): void => {
            imports.push(`import { ${className} } from \'${path.relative(path.dirname(_exlLoaderOutputPath), _codeOutputDir).replace(/\\/g, '/')}/${className}\'`)
        })
        return imports.join('\n')
    }

    function generateLoadAll(): string {
        const doc: string = `/**
     * 加载所有excel导出的数据文件
     * @param option 用于指定加载进度回调和加载完成回调
     */`
        if (_projectType === 'laya') {
            return `${doc}
    static loadAll(option: { complete: (success: boolean) => void, completeScope?: any, progress?: (progress: number) => void, progressScope?: any }): void {
        this.load([\'${_jsonFileNames.join('\', \'')}\'], option)
    }`
        } else if (_projectType === 'creator') {
            return `${doc}
    static loadAll(option: { complete: (error: Error, resource: cc.JsonAsset[]) => void, completeScope?: any, progress?: (completeCount: number, totalCount: number, item: cc.AssetManager.RequestItem) => void, progressScope?: any }): void {
        this.load([\'${_jsonFileNames.join('\', \'')}\'], option)
    }`
        }
    }

    function generateLoadFew(): string {
        const doc: string = `/**
     * 加载自定义的excel导出的数据文件
     * @param jsonFileNames 要加载的数据文件名列表,根据代码提示填写即可
     * @param option 用于指定加载进度回调和加载完成回调
     */`
        if (_projectType === 'laya') {
            return `${doc}
    static loadFew(jsonFileNames: (\'${_jsonFileNames.join('\' | \'')}\')[], option: { complete: (success: boolean) => void, completeScope?: any, progress?: (progress: number) => void, progressScope?: any }): void {
        this.load(jsonFileNames, option)
    }`
        } else if (_projectType === 'creator') {
            return `${doc}
    static loadFew(jsonFileNames: (\'${_jsonFileNames.join('\' | \'')}\')[], option: { complete: (error: Error, resource: cc.JsonAsset[]) => void, completeScope?: any, progress?: (completeCount: number, totalCount: number, item: cc.AssetManager.RequestItem) => void, progressScope?: any }): void {
        this.load(jsonFileNames, option)
    }`
        }
    }

    function generateLoader(): string {
        const doc: string = `/**
     * 加载指定excel导出的数据文件
     * @param jsonFileNames 指定的数据文件列表
     * @param option 用于指定加载进度回调和加载完成回调
     */`
        const switchs: string[] = []
        _jsonFileNames.forEach((fileName: string): void => {
            if (_projectType === 'laya') {
                switchs.push(`case \'${fileName}\': res.root.forEach((value: any): void => { ${CODE_FILE_PREFIX + fileName}.append(value) }); break`)
            } else if (_projectType === 'creator') {
                switchs.push(`case \'${fileName}\': res.json.root.forEach((value: any): void => { ${CODE_FILE_PREFIX + fileName}.append(value) }); break`)
            }
        })
        const tab = ' '.repeat(4)
        const tab5 = tab.repeat(5)
        const tab6 = tab.repeat(6)
        const tab7 = tab.repeat(7)
        const tab8 = tab.repeat(8)
        if (_projectType === 'laya') {
            return `${doc}
    private static load(jsonFileNames: string[], option: { complete: (success: boolean) => void, completeScope?: any, progress?: (progress: number) => void, progressScope?: any }): void {
        Laya.loader.create(jsonFileNames.map((fileName: string): string => { return 'res/${_sourceDir}/' + fileName + '.json' }),
            Laya.Handler.create(null, (success: boolean): void => {
                if (success) {
                    let res: any
                    jsonFileNames.forEach((fileName: string): void => {
                        res = Laya.loader.getRes('res/${_sourceDir}/' + fileName + '.json')
                        switch (fileName) {
                            ${switchs.join('\n' + tab7)}
                        }
                    })
                    if (option.complete) {
                        option.complete.call(option.completeScope, success)
                    }
                }
            }),
            Laya.Handler.create(null, (progress: number): void => {
                if (option.progress) {
                    option.progress.call(option.progressScope, progress)
                }
            }),
        )
    }`
        } else if (_projectType === 'creator') {
            return `${doc}
    private static load(jsonFileNames: string[], option: { complete: (error: Error, resource: cc.JsonAsset[]) => void, completeScope?: any, progress?: (completeCount: number, totalCount: number, item: cc.AssetManager.RequestItem) => void, progressScope?: any }): void {
        cc.resources.load(jsonFileNames.map((fileName: string): string => { return '${_sourceDir}/' + fileName }), cc.JsonAsset,
            (completeCount: number, totalCount: number, item: cc.AssetManager.RequestItem): void => {
                if (option.progress) {
                    option.progress.call(option.progressScope, completeCount, totalCount, item)
                }
            },
            (error: Error, resource: cc.JsonAsset | cc.JsonAsset[]): void => {
                let result: cc.JsonAsset[] = resource && (resource instanceof Array ? resource : [resource])
                if (error) {
                    console.error(error)
                } else if (result) {
                    result.forEach(res => {
                        switch (res.name) {
                            ${switchs.join('\n' + tab7)}
                        }
                    })
                }
                if (option.complete) {
                    option.complete.call(option.completeScope, error, result)
                }
            },
        )
    }`
        }
    }

    function arrangeJsonFileNames(): void {
        _jsonFileNames.length = 0
        if (fs.existsSync(_jsonOutputDir)) {
            fs.readdirSync(_jsonOutputDir, { encoding: 'utf8' }).forEach((value: string): void => {
                if (path.extname(value) === '.json') {
                    _jsonFileNames.push(value.replace('.json', ''))
                }
            })
        }
        if (_jsonFileNames.length === 0) {
            rmFile(_jsonOutputDir)
        }
    }

    function delUselessTs(): void {
        _classNames.length = 0
        if (_jsonFileNames.length > 0) {
            if (fs.existsSync(_codeOutputDir)) {
                let useleessFile: string
                fs.readdirSync(_codeOutputDir, { encoding: 'utf8' }).forEach((value: string): void => {
                    if (path.extname(value) === '.ts') {
                        if (_jsonFileNames.indexOf(value.replace(CODE_FILE_PREFIX, '').replace(path.extname(value), '')) === -1) {
                            useleessFile = path.join(_codeOutputDir, value)
                            rmFile(useleessFile)
                            console.log(formatConsole([useleessFile], 'white', 'strikethrough') + formatConsole(['清理成功!'], 'green'))
                        } else {
                            _classNames.push(value.replace(path.extname(value), ''))
                        }
                    }
                })
            }
        } else {
            rmFile(_codeOutputDir)
        }
    }
}
if (process.argv[1] === __filename) {
    generateTsManager.generateCode()
}
