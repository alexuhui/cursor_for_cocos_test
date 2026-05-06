import { _projectType, _projectRootPath } from '../utils/projectUtils'
import * as fs from 'fs'
import * as path from 'path'
import { formatConsole } from '../utils/consoleUtils'
import { _pathPublish } from './publish-project'

export interface IPublishConfig {
    net: 'io' | 'ws',
    /**打到首包的配置 */
    package: {
        maxSize: number,
        /**不打到首包的资源 */
        exclude: {
            /**png资源 */
            png: string[],
            /**自动图集资源 */
            autoAlats: string[],
        },
        /**优先打到首包的资源 */
        prior: {
            prefab: string[],
            png: string[],
            autoAlats: string[],
        },
        /**打到首包的资源 */
        include: {
            prefab: string[],
            /**png资源 */
            png: string[],
            /**自动图集资源 */
            autoAlats: string[],
        },
    },
    /**图片压缩配置 */
    compress: {
        /**不压缩的资源 */
        exclude: {
            /**不压缩的png  */
            png: string[],
            /**不压缩的图集  */
            autoAlats: string[],
        },
    },
}

let _config: IPublishConfig

export function parsePublishConfig(): IPublishConfig {
    const configPath: string = path.join(_projectRootPath, 'packages/publish/configPublish.json')
    if (!fs.existsSync(configPath)) {
        console.log(formatConsole([configPath, '不存在'], 'red'))
        _config = {
            net: 'ws',
            package: { maxSize: 4 * 1024 * 1024, exclude: { png: [], autoAlats: [] }, prior: { prefab: [], png: [], autoAlats: [] }, include: { prefab: [], png: [], autoAlats: [] } },
            compress: { exclude: { png: [], autoAlats: [] } },
        }
    } else {
        try {
            _config = JSON.parse(fs.readFileSync(configPath, { encoding: 'utf-8' }))
            _config.package.maxSize = _config.package.maxSize || 4 * 1024 * 1024
        } catch (e) {
            console.log(formatConsole([e.stack || JSON.stringify(e)], 'red'))
            _config = {
                net: 'ws',
                package: { maxSize: 4 * 1024 * 1024, exclude: { png: [], autoAlats: [] }, prior: { prefab: [], png: [], autoAlats: [] }, include: { prefab: [], png: [], autoAlats: [] } },
                compress: { exclude: { png: [], autoAlats: [] } },
            }
        }
    }
    return _config
}

/****************************************** laya ******************************************/
let _versionControl: { [filePath: string]: string } = {}
let _configLaya: IPublishConfigLaya

interface IConfigFolder {
    path: string,
    ext: string[],
    reg: RegExp
}

interface IPublishConfigLayaInternal {
    /** 配置路径的根目录(一定是相对于项目根目录的路径) */
    root: string,
    /** 首包配置 */
    package: {
        /** 首包后的最大尺寸 */
        maxSize: number,
        /** 不加入首包的配置 */
        exclude: (string | IConfigFolder)[],
        /** 优先要加入首包的配置 */
        prior: (string | IConfigFolder)[],
        /** 若prior配置的文件还未超过maxSize大小时，继续加入首包的资源 */
        include: (string | IConfigFolder)[],
    },
    /** 图片压缩配置 */
    compress: {
        /** 不压缩的图片配置 */
        exclude: (string | IConfigFolder)[],
    }
}

/**
 * laya发布配置
 */
export interface IPublishConfigLaya {
    /** 配置路径的根目录(一定是相对于项目根目录的路径) */
    root: string,
    /** 首包配置 */
    package: {
        /** 首包后的最大尺寸 */
        maxSize: number,
        /** 不加入首包的配置 */
        exclude: string[],
        /** 优先要加入首包的配置 */
        prior: string[],
        /** 若prior配置的文件还未超过maxSize大小时，继续加入首包的资源 */
        include: string[],
    },
    /** 图片压缩配置 */
    compress: {
        /** 不压缩的图片配置 */
        exclude: string[],
    }
}

export function parsePublishConfigLaya(): IPublishConfigLaya {
    if (_configLaya == null) {
        _configLaya = {
            root: _pathPublish,
            package: {
                maxSize: 4 * 1024,
                exclude: [],
                prior: [],
                include: [],
            },
            compress: {
                exclude: [],
            },
        }
        const configPath: string = path.join(_projectRootPath, 'ho.publish.config.js')
        if (!fs.existsSync(configPath)) {
            console.log(formatConsole([configPath, '不存在'], 'red'))
        } else {
            let configTemp: IPublishConfigLayaInternal
            try {
                // 解析version.json文件
                if (fs.existsSync(path.join(_pathPublish, 'version.json'))) {
                    _versionControl = JSON.parse(fs.readFileSync(path.join(_pathPublish, 'version.json'), { encoding: 'utf-8' }))
                }
                // tslint:disable
                configTemp = JSON.parse(eval(fs.readFileSync(configPath, { encoding: 'utf-8' })))
                parseConfigList(configTemp.package.exclude)
                parseConfigList(configTemp.package.include)
                parseConfigList(configTemp.package.prior)
                parseConfigList(configTemp.compress.exclude, ['.png'])
                _configLaya.package.maxSize = configTemp.package.maxSize
                _configLaya.package.exclude = <string[]>configTemp.package.exclude
                _configLaya.package.include = <string[]>configTemp.package.include
                _configLaya.package.prior = <string[]>configTemp.package.prior
                _configLaya.compress.exclude = <string[]>configTemp.compress.exclude
            } catch (e) {
                console.log(formatConsole([e.stack || JSON.stringify(e)], 'red'))
            }
        }
    }
    return _configLaya
}

function parseConfigList(configList: (string | IConfigFolder)[], ext?: string[]): void {
    const listTemp: string[] = []
    let configPath: string
    let extname: string[]
    let reg: RegExp
    configList.forEach((value: string | IConfigFolder): void => {
        configPath = null
        if (typeof value === 'string') {
            configPath = path.join(_pathPublish, value)
            extname = ext
        } else {
            configPath = path.join(_pathPublish, value.path)
            extname = value.ext
            reg = new RegExp(value.reg)
        }
        if (fs.existsSync(configPath)) {
            if (extname && extname.length > 0) {
                extname.forEach((value: string, index: number): void => {
                    if (!value.startsWith('.')) {
                        extname[index] = '.' + value
                    }
                })
            }
            deepAdd(listTemp, configPath, extname, reg)
        } else {
            console.log(formatConsole([`配置 [${configPath}] 路径不存在`], 'red'))
        }
    })

    configList.length = 0
    configList.push.apply(configList, listTemp)
}

function deepAdd(list: string[], deepPath: string, ext?: string[], reg?: RegExp): void {
    if (fs.statSync(deepPath).isDirectory()) {
        fs.readdirSync(deepPath).forEach((value: string): void => {
            deepAdd(list, path.join(deepPath, value), ext, reg)
        })
    } else {
        if (ext && ext.length) {
            if (ext.includes(path.extname(deepPath))) {
                if (reg == null || reg.test(deepPath)) {
                    list.push(convertPathByVersionControl(deepPath))
                }
            }
        } else if (reg) {
            if (reg.test(deepPath)) {
                list.push(convertPathByVersionControl(deepPath))
            }
        } else {
            list.push(convertPathByVersionControl(deepPath))
        }
    }
}

function convertPathByVersionControl(filePath: string): string {
    const relativePath: string = path.relative(_pathPublish, filePath)
    const versionPath: string = _versionControl[relativePath]
    if (versionPath != null) {
        return path.join(_pathPublish, _versionControl[relativePath])
    } else {
        return filePath
    }
}

/****************************************** layaEnd ******************************************/
