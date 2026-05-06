import * as path from 'path'
import { cmd } from './utils/CmdUtils'
import { copyFile, rmFile } from './utils/FileUtils'
import { _projectType, _seed_project_gits } from './utils/projectUtils'
const tmpDir: string = path.join(__dirname, '../tmpForUpdate').replace(/\\/g, '/')
function update(): void {
    rmFile(tmpDir)
    cmd(`git clone ${_seed_project_gits[_projectType]} ${tmpDir}`, (): void => {
        switch (_projectType) {
            case 'creator': updateCreator(); break
            case 'laya': updateLaya(); break
            default: console.error(_projectType + ' is undefinded'); break
        }
        rmFile(tmpDir)
    })
}

function updateCreator(): void {
    const fileRelativePathes: string[] = [
        'assets/hogame/libs/gea-hogame-hg-creator.min.js',
        'assets/hogame/libs/gea-hogame-hg-creator.min.js.map',
        'gea-hogame-hg-creator.d.ts',
    ]
    const root: string = path.join(__dirname, '..')
    fileRelativePathes.forEach((file: string): void => {
        copyFile(path.join(tmpDir, file), path.join(root, file))
    })
}

function updateLaya(): void {
    const fileRelativePathes: string[] = [
        'bin/libs/gea.hogame.hg.laya.min.js',
        'bin/libs/gea.hogame.hg.laya.min.js.map',
        'libs/gea.hogame.hg.laya.d.ts',
    ]
    const root: string = path.join(__dirname, '..')
    fileRelativePathes.forEach((file: string): void => {
        copyFile(path.join(tmpDir, file), path.join(root, file))
    })
}

if (process.argv[1] === __filename) {
    update()
}
