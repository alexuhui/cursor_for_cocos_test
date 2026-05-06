#!/usr/bin/env node
import * as fs from 'fs'
import * as xlsx from 'node-xlsx'
import * as path from 'path'
import { formatConsole } from '../utils/consoleUtils'
import { generateTs } from './generateTs'
import { generateTsManager } from './generateTsManager'
import { IElsxContent, IFormatTypeStr, IResult, ISheetContent, ISupportType } from './interfaces'
import { CODE_FILE_PREFIX, _codeOutputDir, _jsonOutputDir } from './pathParser'

/**正式数据开始的行数,从0开始计数 */
const DATA_START_ROW: number = 4
/**id所在的列,从0开始计数 */
const COL_OF_ID: number = 1
/**字段名所在的行数,若不为空则需要导出,从0开始计数 */
const ROW_OF_FIELD_NAME: number = 1
/**字段类型所在的行数,从0开始计数 */
const ROW_OF_FIELD_TYPE: number = 2

/**要导出的列 */
const _listExportCols: number[] = []
const _listFiledName: string[] = []
/**要导出的列的描述 */
const _listDesc: string[] = []
/**要导出的列的类型 */
const _listType: IFormatTypeStr[] = []
/**存储每张表的解析结果 */
const _listResult: IResult[] = []

let listExcelPath: string[] | undefined = process.argv.slice(2)
if (listExcelPath !== undefined && listExcelPath.length > 0) {
    listExcelPath.forEach((filePath: string): void => {
        if (process.platform === 'darwin') {
            filePath = '/' + filePath
        }
        console.log(formatConsole(['start parse excel:', filePath], 'cyan', 'bold'))
        let elsxContent: IElsxContent = xlsx.parse(<any>fs.readFileSync(filePath))
        let matchResult: RegExpMatchArray
        elsxContent.forEach((sheetContent: ISheetContent): void => {
            matchResult = sheetContent.name.match(/[a-z _ A-Z]/g)
            if (matchResult && matchResult.length === sheetContent.name.length) {
                parseSheet(filePath, sheetContent)
            } else {
                console.log('\tsheet->' + formatConsole([sheetContent.name], 'red'), formatConsole(['sheet 名字必须全部由a-z _ A-Z组成'], 'blue'))
            }
        })
    })

    _listResult.forEach((result: IResult): void => {
        if (!fs.existsSync(path.dirname(result.json.outputFile))) {
            fs.mkdirSync(path.dirname(result.json.outputFile))
        }
        fs.writeFileSync(result.json.outputFile, JSON.stringify(result.json.content), { encoding: 'utf8' })
        if (!fs.existsSync(path.dirname(result.code.outputFile))) {
            fs.mkdirSync(path.dirname(result.code.outputFile))
        }
        fs.writeFileSync(result.code.outputFile, result.code.content, { encoding: 'utf8' })
    })
    if (_listResult.length > 0) {
        generateTsManager.generateCode()
    }
}

function parseSheet(filePath: string, content: ISheetContent): void {
    console.log('\tsheet->' + formatConsole([content.name], 'green'))
    _listExportCols.length = 0
    _listDesc.length = 0
    _listType.length = 0
    _listFiledName.length = 0
    let type: string
    // 判断id所在的列是否已经设置字段名

    // 第二行为标记是否需要为客户端导出
    if (content.data[ROW_OF_FIELD_NAME]) {
        content.data[ROW_OF_FIELD_NAME].forEach((fieldName: string, index: number): void => {
            // 第一列为CLIENT
            if (index > 0 && fieldName !== undefined) {
                _listExportCols.push(index)
                _listDesc.push(content.data[0][index] || fieldName)
                _listFiledName.push(fieldName.replace(/^\s+|\s+$/g, '').replace(/^[^a-z A-Z _]/, '_').replace(/[^a-z A-Z _ 0-9]/g, '_').replace(/\s+/g, '_'))
                type = content.data[ROW_OF_FIELD_TYPE][index]
                if (type === undefined) {
                    console.log('\t\t' + formatConsole(['字段\'' + fieldName + '\'未定义类型', '将被转为any类型'], 'grey'))
                    type = 'any'
                }
                _listType.push(converTypeToTypeScript(type.toLocaleLowerCase()))
            }
        })
    }
    if (_listExportCols.length > 1) {
        if (content.data[ROW_OF_FIELD_NAME] && content.data[ROW_OF_FIELD_NAME][COL_OF_ID] !== undefined) {
            const result: IResult = {
                excel: {
                    inputFile: filePath,
                    fileName: path.basename(filePath),
                    sheetName: content.name,
                    idField: content.data[ROW_OF_FIELD_NAME][COL_OF_ID],
                },
                json: {
                    outputFile: path.join(_jsonOutputDir, content.name + '.json'),
                    fileName: content.name + '.json',
                    content: { root: [] },
                },
                code: {
                    outputFile: path.join(_codeOutputDir, CODE_FILE_PREFIX + content.name + '.ts'),
                    fileName: CODE_FILE_PREFIX + content.name + '.ts',
                    className: CODE_FILE_PREFIX + content.name,
                    content: '',
                },
            }
            let totalRow: number = content.data.length
            let listData: any[]
            let jsonObject: { [key: string]: ISupportType }
            let filedValue: ISupportType
            let id: number | string
            let fieldName: string
            let col: number
            let totalExportCol: number = _listExportCols.length
            for (let row: number = DATA_START_ROW; row < totalRow; row++) {
                listData = content.data[row]
                if (listData.length > 0) {
                    id = listData[1]
                    if (id !== undefined) {
                        for (let index: number = 0; index < totalExportCol; index++) {
                            col = _listExportCols[index]
                            fieldName = _listFiledName[index]
                            jsonObject = result.json.content.root[row - DATA_START_ROW] || {}
                            filedValue = formatValue(listData[col], _listType[index], id, fieldName, row)
                            jsonObject[fieldName] = filedValue
                            result.json.content.root[row - DATA_START_ROW] = jsonObject
                        }
                    } else {
                        // console.log('\t\t' + formatConsole(['excel表第' + (row + 1) + '行数据不会导出, 因为id字段没有值'], 'red', 'bold', 'whiteBG'))
                        // break
                        content.data.splice(row, 1)
                        totalRow--
                        row--
                    }
                } else {
                    content.data.splice(row, 1)
                    totalRow--
                    row--
                }
            }
            result.code.content = generateTs.generateCode(result, _listFiledName, _listDesc, _listType)
            _listResult.push(result)
        } else {
            console.log('\t\t' + formatConsole(['id所在的列没有设置字段名,该表不会导出'], 'red', 'bold', 'whiteBG'))
        }
    } else {
        console.log('\t\t' + formatConsole(['no data need export'], 'grey'))
    }
}


function converTypeToTypeScript(type: string): IFormatTypeStr {
    switch (type) {
        case 'int':
        case 'number':
        case 'float':
        case 'short':
        case 'byte':
            return 'number'
        case 'bool':
        case 'boolean':
            return 'boolean'
        case 'str':
        case 'string':
            return 'string'
        case 'any':
            return 'any'
        default:
            console.log('\t\t' + formatConsole(['未找到适合的类型\'' + type + '\'', '将转为any类型'], 'grey'))
            return 'any'
    }
}



function formatValue(value: string | undefined, type: IFormatTypeStr, id: number | string, filedName: string, row: number): ISupportType {
    row++
    if (value !== undefined) {
        switch (type) {
            case 'number':
                if (isNaN(Number(value))) {
                    console.log('\t\t' + formatConsole(['excel表第' + row + '行', 'id:' + id, '字段:' + filedName, '不是一个数字，将被转为0'], 'red'))
                    return 0
                }
                return Number(value)
            case 'boolean':
                return !!value
            case 'string':
                return value.toString()
            default:
                break
        }
    } else {
        switch (type) {
            case 'number':
                // console.log('\t\t' + formatConsole(['excel表第' + row + '行', 'id:' + id, '字段:' + filedName, '没有填值', '将被转为默认值0'], 'red'))
                return 0
            case 'boolean':
                // console.log('\t\t' + formatConsole(['excel表第' + row + '行', 'id:' + id, '字段:' + filedName, '没有填值', '将被转为默认值false'], 'red'))
                return false
        }
        return ''
    }
    return value
}
