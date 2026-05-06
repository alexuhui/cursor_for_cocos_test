"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
function copyFile(fileOrDir, dest) {
    if (fs.existsSync(fileOrDir)) {
        if (fs.statSync(fileOrDir).isDirectory()) {
            if (fs.existsSync(dest)) {
                var absPath_1;
                fs.readdirSync(fileOrDir).forEach(function (fileName) {
                    absPath_1 = path.join(fileOrDir, fileName);
                    if (fs.statSync(absPath_1).isFile()) {
                        fs.copyFileSync(absPath_1, path.join(dest, fileName));
                    }
                    else if (fs.statSync(absPath_1).isDirectory()) {
                        if (!fs.existsSync(path.join(dest, fileName))) {
                            fs.mkdirSync(path.join(dest, fileName));
                        }
                        copyFile(absPath_1, path.join(dest, fileName));
                    }
                });
            }
            else {
                fs.mkdirSync(dest);
                copyFile(fileOrDir, dest);
            }
        }
        else {
            if (!fs.statSync(path.dirname(dest))) {
                fs.mkdirSync(path.dirname(dest));
            }
            fs.copyFileSync(fileOrDir, dest);
        }
    }
    else {
        console.warn('源文件/目录', fileOrDir, '不存在');
    }
}
exports.copyFile = copyFile;
function rmFile(fileOrDir) {
    if (fs.existsSync(fileOrDir)) {
        if (fs.statSync(fileOrDir).isFile()) {
            fs.unlinkSync(fileOrDir);
        }
        else {
            fs.readdirSync(fileOrDir).forEach(function (fileName) {
                rmFile(path.join(fileOrDir, fileName));
            });
            fs.rmdirSync(fileOrDir);
        }
    }
}
exports.rmFile = rmFile;
function createDir(dir) {
    var listPath = [];
    while (!fs.existsSync(dir)) {
        listPath.unshift(dir);
        dir = path.dirname(dir);
        if (dir === '') {
            listPath.length = 0;
            break;
        }
    }
    listPath.forEach(function (dir) {
        fs.mkdirSync(dir);
    });
}
exports.createDir = createDir;
