"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var consoleUtils_1 = require("../utils/consoleUtils");
var listProto = [];
var mapProtoInfo = new Map();
var setRoom = new Set();
function parseProto(dirProto) {
    if (fs.existsSync(dirProto)) {
        if (fs.statSync(dirProto).isDirectory()) {
            arrangeProtos(dirProto);
            parseNextProto();
            return mapProtoInfo;
        }
        else {
            console.log(consoleUtils_1.formatConsole([dirProto + "\u4E0D\u662F\u4E00\u4E2A\u76EE\u5F55\uFF0C\u8BF7\u4F20\u5165\u76EE\u5F55"]));
        }
    }
    else {
        console.log(consoleUtils_1.formatConsole(["\u627E\u4E0D\u5230\u6587\u4EF6/\u6587\u4EF6\u5939:" + dirProto]));
    }
    return null;
}
exports.parseProto = parseProto;
function arrangeProtos(dirProto) {
    var filePath;
    fs.readdirSync(dirProto).forEach(function (fileName) {
        filePath = path.join(dirProto, fileName);
        if (fs.statSync(filePath).isDirectory()) {
            arrangeProtos(filePath);
        }
        else if (path.extname(filePath) === '.proto') {
            listProto.push(filePath);
        }
    });
}
function parseNextProto() {
    var filePath = listProto.shift();
    if (filePath != null) {
        var listProtoInfo_1 = [];
        mapProtoInfo.set(filePath, listProtoInfo_1);
        var fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' });
        // var packageName_1 = fileContent.match(/package [^=]+;/)[0].replace('package', '').replace(';', '').trim();
        var packageName_1 = fileContent.match(/package [^=\n]+;/)[0].replace('package', '').replace(';', '').trim();
        if (path.basename(filePath) === 'gateway.proto') {
            listProtoInfo_1.push({
                messageName: 'reserved.gateway.ping',
                pbEnumName: 'Req_GMEHeartBeat',
                encoderDcoderName: 'GMEHeartBeatReq',
                path: 'reserved.gateway.ping',
                packageName: packageName_1,
            }, {
                messageName: 'reserved.gateway.pong',
                pbEnumName: 'Res_GMEHeartBeat',
                encoderDcoderName: 'GMEHeartBeatRes',
                path: 'reserved.gateway.pong',
                packageName: packageName_1,
            }, {
                messageName: 'net.ihago.gme.srv.sidecar_gateway.GMEInternalEnterRoom',
                pbEnumName: 'Req_GMEInternalEnterRoom',
                encoderDcoderName: 'GMEInternalEnterRoom',
                packageName: packageName_1,
            }, {
                messageName: 'net.ihago.gme.srv.sidecar_gateway.GMEInternalEnterRoom',
                pbEnumName: 'Res_GMEInternalEnterRoom',
                encoderDcoderName: 'GMEInternalEnterRoom',
                packageName: packageName_1,
            }, {
                messageName: 'net.ihago.gme.srv.sidecar_gateway.GMEInternalLeaveRoom',
                pbEnumName: 'Req_GMEInternalLeaveRoom',
                encoderDcoderName: 'GMEInternalLeaveRoom',
                packageName: packageName_1,
            }, {
                messageName: 'net.ihago.gme.srv.sidecar_gateway.GMEInternalLeaveRoom',
                pbEnumName: 'Res_GMEInternalLeaveRoom',
                encoderDcoderName: 'GMEInternalLeaveRoom',
                packageName: packageName_1,
            }, {
                messageName: 'Upstream',
                pbEnumName: '',
                encoderDcoderName: 'Upstream',
                packageName: packageName_1,
            }, {
                messageName: 'Downstream',
                pbEnumName: '',
                encoderDcoderName: 'Downstream',
                packageName: packageName_1,
            });
        }
        else {
            // 支持格式: a-z A-Z _ - .
            var matchResult_1 = matchPath(fileContent);
            var spacePath_1 = matchResult_1 && matchResult_1.index === 0 && matchResult_1.path;
            var messageTitle_1;
            var listMatch = fileContent.match(/message [a-z A-Z]+(Res|Req)\s*{[^{]*}/gm);
            if (listMatch && listMatch.length > 0) {
                listMatch.forEach(function (messageContent, index) {
                    matchResult_1 = matchPath(messageContent);
                    messageTitle_1 = messageContent.split('{')[0].replace('message', '').trim();
                    var path = matchResult_1 && matchResult_1.path || spacePath_1 || '';
                    listProtoInfo_1.push({
                        messageName: packageName_1 + "." + messageTitle_1,
                        pbEnumName: messageTitle_1.replace(/.*/, function (subString) {
                            if (subString.endsWith('Res')) {
                                return 'Res_' + subString.replace(/(Res)$/, '');
                            }
                            else if (subString.endsWith('Req')) {
                                return 'Req_' + subString.replace(/(Req)$/, '');
                            }
                        }),
                        encoderDcoderName: messageTitle_1,
                        path: path,
                        packageName: packageName_1,
                    });
                    setRoom.add(path);
                });
            }
        }
        parseNextProto();
    }
}
function matchPath(content) {
    var modulePathMatch = content.match(/\/\/.*path\s*=\s*[\w ' " . -]+/);
    if (modulePathMatch) {
        return { path: modulePathMatch[0].replace(/\s/g, '').split('path=')[1].replace(/[^\w.]/g, ''), index: modulePathMatch.index };
    }
    return null;
}
