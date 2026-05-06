"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

var fs = require("fs");
var path = require("path");
var CmdUtils_1 = require("../utils/CmdUtils");
var projectUtils_1 = require("../utils/projectUtils");
var PBEnumsGenerater_1 = require("./PBEnumsGenerater");
var ProtoParser_1 = require("./ProtoParser");
var _dir_proto = path.join(projectUtils_1._projectRootPath, 'proto');
var _dir_pb;
var mapProtoInfo = ProtoParser_1.parseProto(_dir_proto);

if (mapProtoInfo != null) {
    console.log('生成PBEnums.ts...');
    switch (projectUtils_1._projectType) {
        case 'creator':
            _dir_pb = path.join(projectUtils_1._projectRootPath, 'assets/hogame/proto');
            PBEnumsGenerater_1.generatePBEnums(mapProtoInfo, path.join(projectUtils_1._projectRootPath, 'assets/hogame/proto/PBEnums.ts'));
            break;
        case 'laya':
            _dir_pb = path.join(projectUtils_1._projectRootPath, 'src/hogame/proto');
            PBEnumsGenerater_1.generatePBEnums(mapProtoInfo, path.join(projectUtils_1._projectRootPath, 'src/hogame/proto/PBEnums.ts'));
            break;
    }
    console.log('生成pb.js,pb.d.ts');

    var pbTarget = projectUtils_1._projectType === 'laya' ? 'es6' : 'commonjs';
    CmdUtils_1.cmd("pbjs" + (process.platform === 'win32' ? '.cmd' : '') + " --keep-case --force-number --no-convert --no-delimited --no-verify -r protobuf -t static-module -w " + pbTarget + " -o " + _dir_pb + "/pb.js " + _dir_proto + "/*.proto", "pbts" + (process.platform === 'win32' ? '.cmd' : '') + " -o " + _dir_pb + "/pb.d.ts " + _dir_pb + "/pb.js", function () {
        if (projectUtils_1._projectType === 'laya') {
            var pbjsContent = fs.readFileSync(_dir_pb + "/pb.js", { encoding: 'utf-8' }).replace(/\$protobuf/g, 'protobuf');
            fs.writeFileSync(_dir_pb + "/pb.js", pbjsContent, { encoding: 'utf-8' });
        }
    });
}
