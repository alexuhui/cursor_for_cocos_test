"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var projectUtils_1 = require("../utils/projectUtils");
var listContent = [
    '/** generate by parseMessage.py, do not moidfy */',
    'export abstract class PBEnums {',
];
var tab1 = ' '.repeat(4);
var tab2 = ' '.repeat(8);
function generatePBEnums(mapProtoInfo, pbEnumsPath) {
    var listMapping = [];
    var listPath = [];
    var setPakcageName = new Set();
    var setRoom = new Set();
    // req/res枚举
    var repeatMapping = new Map();
    mapProtoInfo.forEach(function (listProtoInfo, protoFilePath) {
        if (!listProtoInfo || !listProtoInfo.length) {
            return;
        }
        listContent.push(tab1 + "/** " + path.relative(projectUtils_1._projectRootPath, protoFilePath).replace(/\\/g, '/') + " */");
        listProtoInfo.forEach(function (protoInfo) {
            if (protoInfo.messageName.includes('net.ihago.money.api.metadata.BatchGetCommodities')) {
                console.log(`skip ------------> ${protoInfo.messageName}`);
                return;
            }

            if (protoInfo.path && protoInfo.path !== 'reserved.gateway.ping' && protoInfo.path !== 'reserved.gateway.pong') {
                setRoom.add(protoInfo.path);
            }
            setPakcageName.add(protoInfo.packageName);
            if (protoInfo.pbEnumName) {
                listContent.push(tab1 + "static readonly " + protoInfo.pbEnumName + ": string = '" + protoInfo.messageName + "'");
            }
            if (!repeatMapping.has(protoInfo.messageName)) {
                repeatMapping.set(protoInfo.messageName, true);
                listMapping.push(tab2 + "'" + protoInfo.messageName + "': { parser: " + protoInfo.packageName + "." + protoInfo.encoderDcoderName + ", path: '" + (protoInfo.path || '') + "' },");
                if (protoInfo.path) {
                    listPath.push(tab2 + "'" + protoInfo.messageName + "': '" + protoInfo.path + "',");
                }
            }
        });
    });
    const topLevelPackages = new Set();
    setPakcageName.forEach(function (pkg) { topLevelPackages.add(pkg.match(/[^.]+/)[0]); });
    Array.from(topLevelPackages).sort().reverse().forEach(function (pkg) {
        listContent.splice(1, 0, "import { " + pkg + " } from './pb'");
    });
    // room
    listContent.push(tab1 + "// room,\u52A0\u5165\u623F\u95F4\u7684\u65F6\u5019\u7528\uFF0C\u8FD9\u91CC\u4EE5Room_\u5F00\u59CB\u5217\u51FA\u6240\u6709\u7528\u5230room", tab1 + "static readonly Room = {");
    setRoom.forEach(function (value) {
        listContent.push(tab2 + "'" + value + "': '" + value + "',");
    });
    listContent.push(tab1 + "}");
    // Mappiing
    listContent.push.apply(listContent, [tab1 + "// mapping",
    tab1 + "static readonly Mapping = {"].concat(listMapping, [tab1 + "}"]));
    // Path
    // listContent.push(
    //     `${tab1}// path`,
    //     `${tab1}static readonly Path = {`,
    //     ...listPath,
    //     `${tab1}}`,
    // )
    // end
    listContent.push("}", '');
    fs.writeFileSync(pbEnumsPath, listContent.join('\n'), { encoding: 'utf-8' });
}
exports.generatePBEnums = generatePBEnums;
