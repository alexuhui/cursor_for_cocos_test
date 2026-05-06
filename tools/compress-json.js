#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var consoleUtils_1 = require("./utils/consoleUtils");
var _listJsonFile = [];
function arrangeJsonFiles(fileName) {
    if (fs.statSync(fileName).isDirectory()) {
        fs.readdirSync(fileName).forEach(function (value) {
            arrangeJsonFiles(path.join(fileName, value));
        });
    }
    else if (path.extname(fileName) === '.json') {
        _listJsonFile.push(fileName);
    }
}
function compressNext() {
    var file = _listJsonFile.pop();
    if (file != null) {
        var content = fs.readFileSync(file, { encoding: 'utf-8' });
        try {
            var obj = JSON.parse(content);
            if (obj['skeletonJsonStr'] != null) {
                delete obj['skeletonJsonStr'];
            }
            content = JSON.stringify(obj);
            fs.writeFileSync(file, content, { encoding: 'utf-8' });
        }
        catch (e) {
            console.log(consoleUtils_1.formatConsole([file + " \u538B\u7F29\u5931\u8D25"], 'red'));
        }
        finally {
            compressNext();
        }
    }
    else {
        console.log(consoleUtils_1.formatConsole(["\u538B\u7F29\u7ED3\u675F"], 'green'));
    }
}
if (process.argv[1] === __filename) {
    var fileName = process.argv[2];
    if (fileName == null) {
        console.log(consoleUtils_1.formatConsole(['请传入需要要锁的json文件路径或者文件夹路径'], 'red'));
    }
    else {
        if (fs.existsSync(fileName)) {
            arrangeJsonFiles(fileName);
            compressNext();
        }
        else {
            console.log(consoleUtils_1.formatConsole(["\u8DEF\u5F84" + fileName + "\u4E0D\u5B58\u5728"], 'red'));
        }
    }
}
