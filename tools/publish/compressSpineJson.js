"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var publish_project_1 = require("./publish-project");
var consoleUtils_1 = require("../utils/consoleUtils");
var _listJsonPath = [];
var _a = [0, 0], _sizeInput = _a[0], _sizeOutput = _a[1];
function compressSpineJson(step, callback) {
    consoleUtils_1.printStep(step, '压缩spine动画的json文件');
    arrangeSpineJson(publish_project_1._pathPublish);
    compress(callback);
}
exports.compressSpineJson = compressSpineJson;
function arrangeSpineJson(filePath) {
    if (fs.statSync(filePath).isDirectory()) {
        fs.readdirSync(filePath).forEach(function (value) {
            arrangeSpineJson(path.join(filePath, value));
        });
    }
    else if (path.extname(filePath) === '.json') {
        try {
            var obj = JSON.parse(fs.readFileSync(filePath, { encoding: 'utf-8' }));
            if (obj['skeletonJsonStr'] != null) {
                _listJsonPath.push(filePath);
            }
        }
        catch (e) {
            console.log(consoleUtils_1.formatConsole([e.stack || JSON.stringify(e)], 'red'));
        }
    }
}
function compress(callback) {
    var total = _listJsonPath.length;
    if (total > 0) {
        _sizeInput = _sizeOutput = 0;
        var sizeOrigin_1;
        var sizeAfter_1;
        _listJsonPath.forEach(function (value, index) {
            try {
                console.log("[" + (index + 1) + "/" + total + "]" + value);
                sizeOrigin_1 = fs.readFileSync(value).byteLength;
                var obj = JSON.parse(fs.readFileSync(value, { encoding: 'utf-8' }));
                delete obj['skeletonJsonStr'];
                fs.writeFileSync(value, JSON.stringify(obj));
                sizeAfter_1 = fs.readFileSync(value).byteLength;
                process.stdout.write(consoleUtils_1.formatConsole([("-" + ((sizeOrigin_1 - sizeAfter_1) / 1024).toFixed(1) + "KB(" + ((1 - sizeAfter_1 / sizeOrigin_1) * 100).toFixed(2) + "%)").padStart(50, ' ')], sizeAfter_1 < sizeOrigin_1 ? 'green' : 'grey'));
                process.stdout.write(consoleUtils_1.formatConsole(["\r" + (sizeOrigin_1 / 1024).toFixed(1) + "KB-->" + (sizeAfter_1 / 1024).toFixed(1) + "KB"], sizeAfter_1 < sizeOrigin_1 ? 'green' : 'grey'));
                console.log('');
                _sizeInput += sizeOrigin_1;
                _sizeOutput += sizeAfter_1;
            }
            catch (e) {
                console.log(consoleUtils_1.formatConsole([e.stack], 'red'));
            }
        });
        console.log('总压缩率:');
        process.stdout.write(consoleUtils_1.formatConsole([("-" + ((_sizeInput - _sizeOutput) / 1024).toFixed(1) + "KB(" + ((1 - _sizeOutput / _sizeInput) * 100).toFixed(2) + "%)").padStart(50, ' ')], _sizeOutput < _sizeInput ? 'green' : 'grey'));
        process.stdout.write(consoleUtils_1.formatConsole(["\r" + (_sizeInput / 1024).toFixed(1) + "KB-->" + (_sizeOutput / 1024).toFixed(1) + "KB"], _sizeOutput < _sizeInput ? 'green' : 'grey'));
        console.log('');
        callback();
    }
    else {
        callback();
    }
}
