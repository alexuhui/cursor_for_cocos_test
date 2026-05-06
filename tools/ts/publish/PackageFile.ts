import * as archiver from 'archiver'
import * as fs from 'fs'
import * as path from 'path'
import { formatConsole, printStep } from '../utils/consoleUtils'
import { rmFile } from '../utils/FileUtils'
import { _projectRootPath } from '../utils/projectUtils'
import { IPublishConfig, parsePublishConfig, parsePublishConfigLaya } from './ConfigPublish'
import { _pathPublish } from './publish-project'
// 计算顺序为:js资源->json资源->ttf(对应的json文件已在上一步计算)->plist文件(仅plist文件不包含对应的png)->png/自动图集。同一个资源类型优先排入体积大的资源
const listFiles: string[] = []
let maxSize: number = 8 * 1024 * 1024


let _file_load_sequence: string
let _totalZipSize: number = 0
let _config: IPublishConfig
let _listAllFiles: string[] = []
let _listPackageExlude: string[]

export function packageFiles(step: number, callback: () => void): void {
    printStep(step, '开始统计首包资源')
    _config = parsePublishConfig()
    maxSize = _config.package.maxSize
    _listPackageExlude = _config.package.exclude.png.concat(_config.package.exclude.autoAlats)
    _file_load_sequence = path.join(_pathPublish, 'file-load-sequence.json')
    arrangeAllFiles(_pathPublish)
    packageRootFiles()
    const srcPath: string = path.join(_pathPublish, 'src')
    packageSrcFiles(srcPath)
    let resPath: string = path.join(_pathPublish, 'res')
    if (!fs.existsSync(resPath)) {
        resPath = path.join(_pathPublish, 'assets')
    }
    packageJsonFiles(resPath)
    packagePriorRes()
    packageIncludeRes()
    caculateZipSize((appendAble: boolean): void => {
        if (appendAble) {
            packageTTFAndPlistFiles(resPath)
            caculateZipSize((): void => {
                generateLoadSequenceFile()
                callback()
            })
        } else {
            generateLoadSequenceFile()
            callback()
        }
    })
}

export function zipPackage(step: number): void {
    printStep(step++, '生成压缩包')
    const output: fs.WriteStream = fs.createWriteStream(path.join(_projectRootPath, 'release.zip'))
    const archive = archiver('zip', { zlib: { level: 9 } })
    archive.pipe(output)
    archive.directory(_pathPublish, false)
    archive.finalize()
    output.on('close', (): void => {
        console.log(path.join(_projectRootPath, 'release.zip'), (archive.pointer() / 1024 / 1024).toFixed(2) + 'M(' + (archive.pointer() / 1024).toFixed(2) + 'KB)')
        caculateZipSize((): void => {
        })
    })
}

function generateLoadSequenceFile(): void {
    rmFile(path.join(_pathPublish, 'firstPackage.zip'))
    const list: string[] = listFiles.map((value: string): string => {
        return path.relative(_pathPublish, value).replace(/\\/g, '/')
    })
    fs.writeFileSync(_file_load_sequence, JSON.stringify(list).replace(/\//g, '\\/'), { encoding: 'utf-8' })
}

function arrangeAllFiles(filePath: string): void {
    if (fs.statSync(filePath).isDirectory()) {
        fs.readdirSync(filePath).forEach((value: string): void => {
            arrangeAllFiles(path.join(filePath, value))
        })
    } else {
        _listAllFiles.push(filePath)
    }
}

function appendFile(filePath: string): void {
    if (!_listPackageExlude.some((value: string): boolean => {
        return filePath.includes(value)
    })) {
        if (listFiles.indexOf(filePath) === -1) {
            listFiles.push(filePath)
        }
    }
}

function caculateZipSize(callback: (appendAble: boolean) => void, appendAble: boolean = true): void {
    rmFile(path.join(_pathPublish, 'firstPackage.zip'))
    const output: fs.WriteStream = fs.createWriteStream(path.join(_pathPublish, 'firstPackage.zip'))
    const archive = archiver('zip', { zlib: { level: 9 } })
    archive.pipe(output)
    // archive.directory(_pathPublish, false)
    listFiles.forEach((value: string): void => {
        archive.append(fs.createReadStream(value), { name: path.relative(_pathPublish, value) })
    })
    archive.finalize()
    output.on('close', (): void => {
        if (archive.pointer() > maxSize) {
            console.log(formatConsole(['首包资源', (archive.pointer() / 1024 / 1024).toFixed(1) + 'M(' + archive.pointer() + ')', `大于${(maxSize / 1024 / 1024).toFixed(1)}M(` + maxSize + ')', '删减资源', listFiles.pop(), '重新统计'], 'grey'))
            caculateZipSize(callback, false)
        } else {
            console.log(path.join(_pathPublish, 'firstPackage.zip'), (archive.pointer() / 1024 / 1024).toFixed(2) + 'M(' + (archive.pointer() / 1024).toFixed(2) + 'KB)')
            callback(appendAble)
        }
    })
}

/**
 * 打包根目录下的文件
 */
function packageRootFiles(): void {
    fs.readdirSync(_pathPublish).forEach((value: string): void => {
        if (fs.statSync(path.join(_pathPublish, value)).isFile()) {
            appendFile(path.join(_pathPublish, value))
        }
    })
}

/**
 * 打包src目录下的文件
 */
function packageSrcFiles(dir: string): void {
    fs.readdirSync(dir).forEach((value: string): void => {
        const filePath: string = path.join(dir, value)
        if (fs.statSync(filePath).isDirectory()) {
            packageSrcFiles(filePath)
        } else {
            appendFile(filePath)
        }
    })
}

/**
 * 打包prefab依赖的资源
 */
function packagePriorRes(): void {
    _config.package.prior.prefab.concat(_config.package.prior.png, _config.package.prior.autoAlats).forEach((prefabRes: string): void => {
        _listAllFiles.some((value: string): boolean => {
            if (value.includes(prefabRes)) {
                appendFile(value)
            }
            return false
        })
    })
}

function packageIncludeRes(): void {
    _config.package.include.prefab.concat(_config.package.include.png, _config.package.include.autoAlats).forEach((includeRes: string): void => {
        _listAllFiles.some((value: string): boolean => {
            if (value.includes(includeRes)) {
                appendFile(value)
            }
            return false
        })
    })
    // const config: IPublishConfig = parsePublishConfig()
    // config.package.include.autoAlats
}

/**
 * 打包json文件
 * @param dir
 */
function packageJsonFiles(dir: string): void {
    fs.readdirSync(dir).forEach((value: string): void => {
        const filePath: string = path.join(dir, value)
        if (fs.statSync(filePath).isDirectory()) {
            packageJsonFiles(filePath)
        } else if (path.extname(filePath) === '.json') {
            appendFile(filePath)
        }
    })
}

/**
 * 打包ttf和plist文件
 * @param dir
 */
function packageTTFAndPlistFiles(dir: string): void {
    fs.readdirSync(dir).forEach((value: string): void => {
        const filePath: string = path.join(dir, value)
        if (fs.statSync(filePath).isDirectory()) {
            packageTTFAndPlistFiles(filePath)
        } else if (path.extname(filePath) === '.ttf' || path.extname(filePath) === '.plist') {
            appendFile(filePath)
        }
    })
}

/****************************************** laya ******************************************/

export function packageFilesLaya(step: number, callback: () => void): void {
    maxSize = parsePublishConfigLaya().package.maxSize
    printStep(step, '开始统计首包资源')
    _listPackageExlude = parsePublishConfigLaya().package.exclude
    _file_load_sequence = path.join(_pathPublish, 'file-load-sequence.json')
    arrangeAllFiles(_pathPublish)
    parsePublishConfigLaya().package.prior.forEach((value: string): void => {
        appendFile(value)
    })
    caculateZipSize((appendAble: boolean): void => {
        if (appendAble) {
            parsePublishConfigLaya().package.include.forEach((value: string): void => {
                appendFile(value)
            })
            caculateZipSize((): void => {
                generateLoadSequenceFile()
                callback()
            })
        } else {
            generateLoadSequenceFile()
            callback()
        }
    })
}

/****************************************** layaEnd ******************************************/
