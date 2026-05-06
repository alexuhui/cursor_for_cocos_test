#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var CmdUtils_1 = require("./utils/CmdUtils");
var consoleUtils_1 = require("./utils/consoleUtils");
var FileUtils_1 = require("./utils/FileUtils");
var projectUtils_1 = require("./utils/projectUtils");
var tmpDir = path.join(__dirname, '../tmpForUpdate').replace(/\\/g, '/');
var needInstallNew = false;
var _step = 1;
function update() {
    FileUtils_1.rmFile(tmpDir);
    CmdUtils_1.cmd("git clone " + projectUtils_1._seed_project_gits[projectUtils_1._projectType] + " " + tmpDir, function () {
        try {
            updateTools();
            updateHoPlugin();
            initPublishConfigLaya();
            initPublishCreator();
            updatePackage();
            updatePackageLock();
        }
        catch (e) {
            console.error(e);
        }
        finally {
            FileUtils_1.rmFile(tmpDir);
            if (needInstallNew) {
                consoleUtils_1.printStep(_step++, '更新之后有新的依赖需要安装');
                CmdUtils_1.cmd("npm install");
            }
        }
    });
}
function updateTools() {
    consoleUtils_1.printStep(_step++, '更新tools目录');
    FileUtils_1.copyFile(path.join(tmpDir, 'tools'), __dirname);
    // rmFile(path.join(__dirname, 'ts'))
}
function updateHoPlugin() {
    var folderSeedProject = '.hoplugin-seed-project';
    consoleUtils_1.printStep(_step++, "\u66F4\u65B0" + folderSeedProject + "\u76EE\u5F55");
    FileUtils_1.copyFile(path.join(tmpDir, folderSeedProject), path.join(__dirname, '../' + folderSeedProject));
    var folderGame = '.hoplugin-game';
    if (!fs.existsSync(path.join(__dirname, "../" + folderGame)) || fs.readdirSync(path.join(__dirname, "../" + folderGame)).length === 0) {
        FileUtils_1.copyFile(path.join(tmpDir, folderGame), path.join(__dirname, "../" + folderGame));
        FileUtils_1.rmFile(path.join(__dirname, '../.hoplugin'));
    }
}
function updatePackage() {
    consoleUtils_1.printStep(_step++, '更新package.json');
    var localPath = path.join(__dirname, '../package.json');
    var tmpPath = path.join(tmpDir, 'package.json');
    if (fs.existsSync(tmpPath)) {
        if (fs.existsSync(localPath)) {
            var localContent = JSON.parse(fs.readFileSync(localPath, { encoding: 'utf8' }));
            var tmpContent = JSON.parse(fs.readFileSync(tmpPath, { encoding: 'utf8' }));
            if (localContent['devDependencies']) {
                for (var sub in tmpContent['devDependencies']) {
                    if (localContent['devDependencies'][sub] == null) {
                        localContent['devDependencies'][sub] = tmpContent['devDependencies'][sub];
                        needInstallNew = true;
                    }
                }
            }
            else {
                localContent['devDependencies'] = tmpContent['devDependencies'];
                needInstallNew = true;
            }
            if (needInstallNew === true) {
                fs.writeFileSync(localPath, JSON.stringify(localContent, null, '    '), { encoding: 'utf8' });
            }
        }
        else {
            fs.copyFileSync(localPath, tmpPath);
        }
    }
}
function updatePackageLock() {
    consoleUtils_1.printStep(_step++, '更新package-lock.json');
    var localPath = path.join(__dirname, '../package-lock.json');
    var tmpPath = path.join(tmpDir, 'package-lock.json');
    if (fs.existsSync(tmpPath)) {
        if (fs.existsSync(localPath)) {
            var localContent = JSON.parse(fs.readFileSync(localPath, { encoding: 'utf8' }));
            var tmpContent = JSON.parse(fs.readFileSync(tmpPath, { encoding: 'utf8' }));
            if (localContent['dependencies']) {
                for (var sub in tmpContent['dependencies']) {
                    if (localContent['dependencies'][sub] == null) {
                        localContent['dependencies'][sub] = tmpContent['dependencies'][sub];
                        needInstallNew = true;
                    }
                }
            }
            else {
                localContent['dependencies'] = tmpContent['dependencies'];
                needInstallNew = true;
            }
            if (needInstallNew === true) {
                fs.writeFileSync(localPath, JSON.stringify(localContent, null, '    '), { encoding: 'utf8' });
            }
        }
        else {
            fs.copyFileSync(localPath, tmpPath);
        }
    }
}
function initPublishConfigLaya() {
    if (projectUtils_1._projectType === 'laya') {
        var publishFileName = 'ho.publish.config.js';
        if (!fs.existsSync(path.join(projectUtils_1._projectRootPath, publishFileName))) {
            FileUtils_1.copyFile(path.join(tmpDir, publishFileName), path.join(projectUtils_1._projectRootPath, publishFileName));
        }
    }
}
function initPublishCreator() {
    if (projectUtils_1._projectType === 'creator') {
        var publishDir = path.join(projectUtils_1._projectRootPath, 'packages/publish');
        if (!fs.existsSync(publishDir)) {
            FileUtils_1.createDir(publishDir);
            FileUtils_1.copyFile(path.join(tmpDir, 'packages/publish'), publishDir);
        }
    }
}
if (process.argv[1] === __filename) {
    update();
}
