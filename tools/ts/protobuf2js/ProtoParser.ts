import * as fs from 'fs'
import * as path from 'path'
import { formatConsole } from '../utils/consoleUtils'
import { IProtoInfo } from './interfaces'

const listProto: string[] = []
const mapProtoInfo: Map<string, IProtoInfo[]> = new Map()
const setRoom: Set<string> = new Set()

export function parseProto(dirProto: string): Map<string, IProtoInfo[]> {
    if (fs.existsSync(dirProto)) {
        if (fs.statSync(dirProto).isDirectory()) {
            arrangeProtos(dirProto)
            parseNextProto()
            return mapProtoInfo
        } else {
            console.log(formatConsole([`${dirProto}不是一个目录，请传入目录`]))
        }
    } else {
        console.log(formatConsole([`找不到文件/文件夹:${dirProto}`]))
    }
    return null
}

function arrangeProtos(dirProto: string): void {
    let filePath: string
    fs.readdirSync(dirProto).forEach(fileName => {
        filePath = path.join(dirProto, fileName)
        if (fs.statSync(filePath).isDirectory()) {
            arrangeProtos(filePath)
        } else if (path.extname(filePath) === '.proto') {
            listProto.push(filePath)
        }
    })
}

function parseNextProto(): void {
    const filePath: string = listProto.shift()
    if (filePath != null) {
        const listProtoInfo: IProtoInfo[] = []
        mapProtoInfo.set(filePath, listProtoInfo)
        const fileContent: string = fs.readFileSync(filePath, { encoding: 'utf-8' })
        const packageName: string = fileContent.match(/package [^=]+;/)[0].replace('package', '').replace(';', '').trim()
        if (path.basename(filePath) === 'gateway.proto') {
            listProtoInfo.push(
                {
                    messageName: 'reserved.gateway.ping',
                    pbEnumName: 'Req_GMEHeartBeat',
                    encoderDcoderName: 'GMEHeartBeatReq',
                    path: 'reserved.gateway.ping',
                    packageName: packageName,
                },
                {
                    messageName: 'reserved.gateway.pong',
                    pbEnumName: 'Res_GMEHeartBeat',
                    encoderDcoderName: 'GMEHeartBeatRes',
                    path: 'reserved.gateway.pong',
                    packageName: packageName,
                },
                {
                    messageName: 'net.ihago.gme.srv.sidecar_gateway.GMEInternalEnterRoom',
                    pbEnumName: 'Req_GMEInternalEnterRoom',
                    encoderDcoderName: 'GMEInternalEnterRoom',
                    packageName: packageName,
                },
                {
                    messageName: 'net.ihago.gme.srv.sidecar_gateway.GMEInternalEnterRoom',
                    pbEnumName: 'Res_GMEInternalEnterRoom',
                    encoderDcoderName: 'GMEInternalEnterRoom',
                    packageName: packageName,
                },
                {
                    messageName: 'net.ihago.gme.srv.sidecar_gateway.GMEInternalLeaveRoom',
                    pbEnumName: 'Req_GMEInternalLeaveRoom',
                    encoderDcoderName: 'GMEInternalLeaveRoom',
                    packageName: packageName,
                },
                {
                    messageName: 'net.ihago.gme.srv.sidecar_gateway.GMEInternalLeaveRoom',
                    pbEnumName: 'Res_GMEInternalLeaveRoom',
                    encoderDcoderName: 'GMEInternalLeaveRoom',
                    packageName: packageName,
                },
                {
                    messageName: 'Upstream',
                    pbEnumName: '',
                    encoderDcoderName: 'Upstream',
                    packageName: packageName,
                },
                {
                    messageName: 'Downstream',
                    pbEnumName: '',
                    encoderDcoderName: 'Downstream',
                    packageName: packageName,
                },
            )
        } else {
            // 支持格式: a-z A-Z _ - .
            let matchResult: { path: string, index: number } = matchPath(fileContent)
            const spacePath: string = matchResult && matchResult.index === 0 && matchResult.path
            let messageTitle: string
            const listMatch: RegExpMatchArray = fileContent.match(/message [a-z A-Z]+(Res|Req)\s*{[^{]*}/gm)
            if (listMatch && listMatch.length > 0) {
                listMatch.forEach((messageContent, index) => {
                    matchResult = matchPath(messageContent)
                    messageTitle = messageContent.split('{')[0].replace('message', '').trim()
                    const path: string = matchResult && matchResult.path || spacePath || ''
                    listProtoInfo.push(
                        {
                            messageName: `${packageName}.${messageTitle}`,
                            pbEnumName: messageTitle.replace(/.*/, (subString: string): string => {
                                if (subString.endsWith('Res')) {
                                    return 'Res_' + subString.replace(/(Res)$/, '')
                                } else if (subString.endsWith('Req')) {
                                    return 'Req_' + subString.replace(/(Req)$/, '')
                                }
                            }),
                            encoderDcoderName: messageTitle,
                            path: path,
                            packageName: packageName,
                        },
                    )
                    setRoom.add(path)
                })
            }
        }
        parseNextProto()
    }
}


function matchPath(content: string): { path: string, index: number } {
    const modulePathMatch: RegExpMatchArray = content.match(/\/\/.*path\s*=\s*[\w ' " . -]+/)
    if (modulePathMatch) {
        return { path: modulePathMatch[0].replace(/\s/g, '').split('path=')[1].replace(/[^\w.]/g, ''), index: modulePathMatch.index }
    }
    return null
}
