
import * as path from 'path'
import { _projectType } from '../utils/projectUtils'
export const CODE_FILE_PREFIX: string = 'Exl'
export let _jsonOutputDir: string = ''
export let _codeOutputDir: string = ''
export let _sourceDir: string = 'excelData'
export let _exlLoaderOutputPath: string = ''

// creator项目
if (_projectType === 'creator') {
    _jsonOutputDir = path.join(__dirname, '../../assets/resources', _sourceDir)
    _codeOutputDir = path.join(__dirname, '../../assets/hogame/excelData')
    _exlLoaderOutputPath = path.join(__dirname, '../../assets/hogame/adapters/ExlLoader.ts')
} else if (_projectType === 'laya') {
    _jsonOutputDir = path.join(__dirname, '../../bin/res/', _sourceDir)
    _codeOutputDir = path.join(__dirname, '../../src/hogame/excelData')
    _exlLoaderOutputPath = path.join(__dirname, '../../src/hogame/adapters/ExlLoader.ts')
}
