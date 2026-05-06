import * as fs from 'fs'
import * as path from 'path'
import { _projectRootPath } from '../utils/projectUtils'
import { IProtoInfo } from './interfaces'

let listContent: string[] = [
    '/** generate by parseMessage.py, do not moidfy */',
    'export abstract class PBEnums {',
]
const tab1: string = ' '.repeat(4)
const tab2: string = ' '.repeat(8)
export function generatePBEnums(mapProtoInfo: Map<string, IProtoInfo[]>, pbEnumsPath: string): void {
    const listMapping: string[] = []
    const listPath: string[] = []
    const setPakcageName: Set<string> = new Set()
    const setRoom: Set<string> = new Set()
    // req/res枚举
    const repeatMapping: Map<string, boolean> = new Map()
    mapProtoInfo.forEach((listProtoInfo: IProtoInfo[], protoFilePath: string): void => {
        listContent.push(`${tab1}/** ${path.relative(_projectRootPath, protoFilePath).replace(/\\/g, '/')} */`)
        listProtoInfo.forEach(protoInfo => {
            if (protoInfo.path && protoInfo.path !== 'reserved.gateway.ping' && protoInfo.path !== 'reserved.gateway.pong') {
                setRoom.add(protoInfo.path)
            }
            setPakcageName.add(protoInfo.packageName)
            if (protoInfo.pbEnumName) {
                listContent.push(`${tab1}static readonly ${protoInfo.pbEnumName}: string = '${protoInfo.messageName}'`)
            }
            if (!repeatMapping.has(protoInfo.messageName)) {
                repeatMapping.set(protoInfo.messageName, true)
                listMapping.push(`${tab2}'${protoInfo.messageName}': { parser: ${protoInfo.packageName}.${protoInfo.encoderDcoderName}, path: '${protoInfo.path || ''}' },`)
                if (protoInfo.path) {
                    listPath.push(`${tab2}'${protoInfo.messageName}': '${protoInfo.path}',`)
                }
            }
        })
    })
    setPakcageName.forEach(value => {
        listContent.splice(1, 0, `import { ${value} } from './pb'`)
    })
    // room
    listContent.push(
        `${tab1}// room,加入房间的时候用，这里以Room_开始列出所有用到room`,
        `${tab1}static readonly Room = {`,
    )
    setRoom.forEach(value => {
        listContent.push(`${tab2}'${value}': '${value}',`)
    })
    listContent.push(`${tab1}}`)
    // Mappiing
    listContent.push(
        `${tab1}// mapping`,
        `${tab1}static readonly Mapping = {`,
        ...listMapping,
        `${tab1}}`,
    )
    // Path
    // listContent.push(
    //     `${tab1}// path`,
    //     `${tab1}static readonly Path = {`,
    //     ...listPath,
    //     `${tab1}}`,
    // )

    // end
    listContent.push(
        `}`,
        '',
    )
    fs.writeFileSync(pbEnumsPath, listContent.join('\n'), { encoding: 'utf-8' })
}
