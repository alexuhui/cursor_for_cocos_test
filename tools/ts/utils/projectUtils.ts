import * as fs from 'fs'
import * as path from 'path'
export type ProjectType = 'creator' | 'laya'
export let _projectType: ProjectType
export const _seed_project_gits: { [key in ProjectType]: string } = {
    'creator': 'https://git.duowan.com/games/haiou/js/seed-project-creator.git',
    'laya': 'https://git.duowan.com/games/haiou/js/seed-project-laya.git',
}
// creator项目
if (fs.existsSync(path.join(__dirname, '../../creator.d.ts'))) {
    _projectType = 'creator'
} else if (fs.existsSync(path.join(__dirname, '../../libs/LayaAir.d.ts'))) {
    _projectType = 'laya'
} else {
    throw new Error('未适配到 项目类型 -> ' + _projectType)
}

export const _projectRootPath: string = path.join(__dirname, '../..')
