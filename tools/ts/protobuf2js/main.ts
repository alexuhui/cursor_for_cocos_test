import * as fs from 'fs'
import * as path from 'path'
import { cmd } from '../utils/CmdUtils'
import { _projectRootPath, _projectType } from '../utils/projectUtils'
import { IProtoInfo } from './interfaces'
import { generatePBEnums } from './PBEnumsGenerater'
import { parseProto } from './ProtoParser'
const _dir_proto = path.join(_projectRootPath, 'proto')
let _dir_pb: string

const mapProtoInfo: Map<string, IProtoInfo[]> = parseProto(_dir_proto)
if (mapProtoInfo != null) {
    console.log('生成PBEnums.ts...')
    switch (_projectType) {
        case 'creator':
            _dir_pb = path.join(_projectRootPath, 'assets/hogame/proto')
            generatePBEnums(mapProtoInfo, path.join(_projectRootPath, 'assets/hogame/proto/PBEnums.ts'))
            break
        case 'laya':
            _dir_pb = path.join(_projectRootPath, 'src/hogame/proto')
            generatePBEnums(mapProtoInfo, path.join(_projectRootPath, 'src/hogame/proto/PBEnums.ts'))
            break
    }
    console.log('生成pb.js,pb.d.ts')
    const pbTarget: string = _projectType === 'laya' ? 'es6' : 'commonjs'
    cmd(
        `pbjs${process.platform === 'win32' ? '.cmd' : ''} --keep-case --force-number --no-convert --no-delimited --no-verify -r protobuf -t static-module -w ${pbTarget} -o ${_dir_pb}/pb.js ${_dir_proto}/*.proto`,
        `pbts${process.platform === 'win32' ? '.cmd' : ''} -o ${_dir_pb}/pb.d.ts ${_dir_pb}/pb.js`,
        (): void => {
            if (_projectType === 'laya') {
                const pbjsContent: string = fs.readFileSync(`${_dir_pb}/pb.js`, { encoding: 'utf-8' }).replace(/\$protobuf/g, 'protobuf')
                fs.writeFileSync(`${_dir_pb}/pb.js`, pbjsContent, { encoding: 'utf-8' })
            }
        },
    )
}

