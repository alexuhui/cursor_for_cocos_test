#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var projectUtils_1 = require("../utils/projectUtils");
var fs = require("fs");
var path = require("path");
var consoleUtils_1 = require("../utils/consoleUtils");
var CmdUtils_1 = require("../utils/CmdUtils");
var FileUtils_1 = require("../utils/FileUtils");
var compressSpineJson_1 = require("./compressSpineJson");
var compressPng_1 = require("./compressPng");
var PackageFile_1 = require("./PackageFile");
var _step = 1;
function publish() {
    var cmdContent = '';
    var afterPublish;
    switch (projectUtils_1._projectType) {
        case 'creator':
            exports._pathPublish = path.join(projectUtils_1._projectRootPath, './web-mobile');
            var listPath = process.argv.slice(2);
            if (!listPath.some(function (value) {
                if (fs.existsSync(value)) {
                    if ((process.platform === 'darwin' && value.endsWith('CocosCreator')) ||
                        process.platform === 'win32' && value.endsWith('.exe')) {
                        cmdContent = [value, '--path', projectUtils_1._projectRootPath, '--build platform=web-mobile;buildPath=' + projectUtils_1._projectRootPath].join(' ');
                    }
                    return true;
                }
                return false;
            })) {
                console.log('creator命令行文件找不到,请在', consoleUtils_1.formatConsole([path.join(projectUtils_1._projectRootPath, '.hoplugin-game/publish.ho.json')], 'yellow'), '添加路径');
                return;
            }
            afterPublish = afterPublish_creator;
            break;
        case 'laya':
            exports._pathPublish = path.join(projectUtils_1._projectRootPath, './release/web');
            if (process.platform === 'win32') {
                cmdContent = 'layaair2-cmd.cmd publish -c web -w ' + projectUtils_1._projectRootPath.replace(/\\/g, '/');
            }
            else {
                cmdContent = 'layaair2-cmd publish -c web -w ' + projectUtils_1._projectRootPath.replace(/\\/g, '/');
            }
            afterPublish = afterPublish_laya;
            break;
        default:
            console.log(consoleUtils_1.formatConsole(['发布失败,未找到匹配的项目'], 'red'));
            return;
    }
    FileUtils_1.createDir(exports._pathPublish);
    consoleUtils_1.printStep(_step++, '开始发布项目');
    CmdUtils_1.cmd(cmdContent, function () {
        afterPublish();
    });
}
function afterPublish_creator() {
    fs.readdirSync(exports._pathPublish).forEach(function (value) {
        if (value.startsWith('splash') || value.startsWith('style-desktop')) {
            FileUtils_1.rmFile(path.join(exports._pathPublish, value));
        }
    });
    compressSpineJson_1.compressSpineJson(_step++, function () {
        compressPng_1.compressPng(_step++, function () {
            PackageFile_1.packageFiles(_step++, function () {
                PackageFile_1.zipPackage(_step++);
            });
        });
    });
}
function afterPublish_laya() {
    var pathSrc = path.join(exports._pathPublish, 'src');
    if (!fs.existsSync(pathSrc)) {
        fs.mkdirSync(pathSrc);
        fs.writeFileSync(path.join(exports._pathPublish, 'src/for_boss_page.empty'), '', { encoding: 'utf-8' });
    }
    else if (fs.readdirSync(pathSrc).length === 0) {
        fs.writeFileSync(path.join(exports._pathPublish, 'src/for_boss_page.empty'), '', { encoding: 'utf-8' });
    }
    compressPng_1.compressPng(_step++, function () {
        PackageFile_1.packageFilesLaya(_step++, function () {
            PackageFile_1.zipPackage(_step++);
        });
    });
}
if (process.argv[1] === __filename) {
    publish();
}
