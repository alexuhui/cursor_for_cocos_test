"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var CmdUtils_1 = require("./utils/CmdUtils");
var FileUtils_1 = require("./utils/FileUtils");
var projectUtils_1 = require("./utils/projectUtils");
var tmpDir = path.join(__dirname, '../tmpForUpdate').replace(/\\/g, '/');
function update() {
    FileUtils_1.rmFile(tmpDir);
    CmdUtils_1.cmd("git clone " + projectUtils_1._seed_project_gits[projectUtils_1._projectType] + " " + tmpDir, function () {
        switch (projectUtils_1._projectType) {
            case 'creator':
                updateCreator();
                break;
            case 'laya':
                updateLaya();
                break;
            default:
                console.error(projectUtils_1._projectType + ' is undefinded');
                break;
        }
        FileUtils_1.rmFile(tmpDir);
    });
}
function updateCreator() {
    var fileRelativePathes = [
        'assets/hogame/libs/gea-hogame-hg-creator.min.js',
        'assets/hogame/libs/gea-hogame-hg-creator.min.js.map',
        'gea-hogame-hg-creator.d.ts',
    ];
    var root = path.join(__dirname, '..');
    fileRelativePathes.forEach(function (file) {
        FileUtils_1.copyFile(path.join(tmpDir, file), path.join(root, file));
    });
}
function updateLaya() {
    var fileRelativePathes = [
        'bin/libs/gea.hogame.hg.laya.min.js',
        'bin/libs/gea.hogame.hg.laya.min.js.map',
        'libs/gea.hogame.hg.laya.d.ts',
    ];
    var root = path.join(__dirname, '..');
    fileRelativePathes.forEach(function (file) {
        FileUtils_1.copyFile(path.join(tmpDir, file), path.join(root, file));
    });
}
if (process.argv[1] === __filename) {
    update();
}
