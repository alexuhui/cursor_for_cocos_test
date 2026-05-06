#!/usr/bin/env node
import { _projectType, _projectRootPath } from '../utils/projectUtils'
import * as fs from 'fs'
import * as path from 'path'
import { formatConsole, printStep } from '../utils/consoleUtils'
import { cmd } from '../utils/CmdUtils'
import { rmFile, createDir } from '../utils/FileUtils'
import { compressSpineJson } from './compressSpineJson'
import { compressPng } from './compressPng'
import { packageFiles, zipPackage, packageFilesLaya } from './PackageFile'

export let _pathPublish: string
let _step: number = 1

function publish() {
    let cmdContent: string = ''
    let afterPublish: Function
    switch (_projectType) {
        case 'creator':
            _pathPublish = path.join(_projectRootPath, './web-mobile')
            const listPath: string[] = process.argv.slice(2)
            if (!listPath.some((value: string): boolean => {
                if (fs.existsSync(value)) {
                    if ((process.platform === 'darwin' && value.endsWith('CocosCreator')) ||
                        process.platform === 'win32' && value.endsWith('.exe')) {
                        cmdContent = [value, '--path', _projectRootPath, '--build platform=web-mobile;buildPath=' + _projectRootPath].join(' ')
                    }
                    return true
                }
                return false
            })) {
                console.log('creator命令行文件找不到,请在', formatConsole([path.join(_projectRootPath, '.hoplugin-game/publish.ho.json')], 'yellow'), '添加路径')
                return
            }
            afterPublish = afterPublish_creator
            break
        case 'laya':
            _pathPublish = path.join(_projectRootPath, './release/web')
            if (process.platform === 'win32') {
                cmdContent = 'layaair2-cmd.cmd publish -c web -w ' + _projectRootPath.replace(/\\/g, '/')
            } else {
                cmdContent = 'layaair2-cmd publish -c web -w ' + _projectRootPath.replace(/\\/g, '/')
            }
            afterPublish = afterPublish_laya
            break
        default: console.log(formatConsole(['发布失败,未找到匹配的项目'], 'red'))
            return
    }
    createDir(_pathPublish)
    printStep(_step++, '开始发布项目')
    cmd(cmdContent, (): void => {
        afterPublish()
    })
}

function afterPublish_creator(): void {
    fs.readdirSync(_pathPublish).forEach((value: string): void => {
        if (value.startsWith('splash') || value.startsWith('style-desktop')) {
            rmFile(path.join(_pathPublish, value))
        }
    })
    compressSpineJson(_step++, (): void => {
        compressPng(_step++, (): void => {
            packageFiles(_step++, (): void => {
                zipPackage(_step++)
            })
        })
    })
}

function afterPublish_laya(): void {
    const pathSrc: string = path.join(_pathPublish, 'src')
    if (!fs.existsSync(pathSrc)) {
        fs.mkdirSync(pathSrc)
        fs.writeFileSync(path.join(_pathPublish, 'src/for_boss_page.empty'), '', { encoding: 'utf-8' })
    } else if (fs.readdirSync(pathSrc).length === 0) {
        fs.writeFileSync(path.join(_pathPublish, 'src/for_boss_page.empty'), '', { encoding: 'utf-8' })
    }
    compressPng(_step++, (): void => {
        packageFilesLaya(_step++, (): void => {
            zipPackage(_step++)
        })
    })
}

if (process.argv[1] === __filename) {
    publish()
}
