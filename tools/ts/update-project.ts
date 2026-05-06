#!/usr/bin/env node
import * as fs from 'fs'
import * as path from 'path'
import { cmd } from './utils/CmdUtils'
import { printStep } from './utils/consoleUtils'
import { copyFile, createDir, rmFile } from './utils/FileUtils'
import { _projectRootPath, _projectType, _seed_project_gits } from './utils/projectUtils'

const tmpDir: string = path.join(__dirname, '../tmpForUpdate').replace(/\\/g, '/')
let needInstallNew: boolean = false
let _step: number = 1


function update(): void {
    rmFile(tmpDir)
    cmd(`git clone ${_seed_project_gits[_projectType]} ${tmpDir}`, (): void => {
        try {
            updateTools()
            updateHoPlugin()
            initPublishConfigLaya()
            initPublishCreator()
            updatePackage()
            updatePackageLock()
        } catch (e) {
            console.error(e)
        } finally {
            rmFile(tmpDir)
            if (needInstallNew) {
                printStep(_step++, '更新之后有新的依赖需要安装')
                cmd(`npm install`)
            }
        }
    })
}

function updateTools(): void {
    printStep(_step++, '更新tools目录')
    copyFile(path.join(tmpDir, 'tools'), __dirname)
    // rmFile(path.join(__dirname, 'ts'))
}

function updateHoPlugin(): void {
    const folderSeedProject: string = '.hoplugin-seed-project'
    printStep(_step++, `更新${folderSeedProject}目录`)
    copyFile(path.join(tmpDir, folderSeedProject), path.join(__dirname, '../' + folderSeedProject))
    const folderGame: string = '.hoplugin-game'
    if (!fs.existsSync(path.join(__dirname, `../${folderGame}`)) || fs.readdirSync(path.join(__dirname, `../${folderGame}`)).length === 0) {
        copyFile(path.join(tmpDir, folderGame), path.join(__dirname, `../${folderGame}`))
        rmFile(path.join(__dirname, '../.hoplugin'))
    }
}

function updatePackage(): void {
    printStep(_step++, '更新package.json')
    let localPath: string = path.join(__dirname, '../package.json')
    let tmpPath: string = path.join(tmpDir, 'package.json')
    if (fs.existsSync(tmpPath)) {
        if (fs.existsSync(localPath)) {
            let localContent: Object = JSON.parse(fs.readFileSync(localPath, { encoding: 'utf8' }))
            let tmpContent: Object = JSON.parse(fs.readFileSync(tmpPath, { encoding: 'utf8' }))
            if (localContent['devDependencies']) {
                for (let sub in tmpContent['devDependencies']) {
                    if (localContent['devDependencies'][sub] == null) {
                        localContent['devDependencies'][sub] = tmpContent['devDependencies'][sub]
                        needInstallNew = true
                    }
                }
            } else {
                localContent['devDependencies'] = tmpContent['devDependencies']
                needInstallNew = true
            }
            if (needInstallNew === true) {
                fs.writeFileSync(localPath, JSON.stringify(localContent, null, '    '), { encoding: 'utf8' })
            }
        } else {
            fs.copyFileSync(localPath, tmpPath)
        }
    }
}

function updatePackageLock(): void {
    printStep(_step++, '更新package-lock.json')
    let localPath: string = path.join(__dirname, '../package-lock.json')
    let tmpPath: string = path.join(tmpDir, 'package-lock.json')
    if (fs.existsSync(tmpPath)) {
        if (fs.existsSync(localPath)) {
            let localContent: Object = JSON.parse(fs.readFileSync(localPath, { encoding: 'utf8' }))
            let tmpContent: Object = JSON.parse(fs.readFileSync(tmpPath, { encoding: 'utf8' }))
            if (localContent['dependencies']) {
                for (let sub in tmpContent['dependencies']) {
                    if (localContent['dependencies'][sub] == null) {
                        localContent['dependencies'][sub] = tmpContent['dependencies'][sub]
                        needInstallNew = true
                    }
                }
            } else {
                localContent['dependencies'] = tmpContent['dependencies']
                needInstallNew = true
            }
            if (needInstallNew === true) {
                fs.writeFileSync(localPath, JSON.stringify(localContent, null, '    '), { encoding: 'utf8' })
            }
        } else {
            fs.copyFileSync(localPath, tmpPath)
        }
    }
}

function initPublishConfigLaya(): void {
    if (_projectType === 'laya') {
        const publishFileName: string = 'ho.publish.config.js'
        if (!fs.existsSync(path.join(_projectRootPath, publishFileName))) {
            copyFile(path.join(tmpDir, publishFileName), path.join(_projectRootPath, publishFileName))
        }
    }
}

function initPublishCreator(): void {
    if (_projectType === 'creator') {
        const publishDir: string = path.join(_projectRootPath, 'packages/publish')
        if (!fs.existsSync(publishDir)) {
            createDir(publishDir)
            copyFile(path.join(tmpDir, 'packages/publish'), publishDir)
        }
    }
}

if (process.argv[1] === __filename) {
    update()
}
