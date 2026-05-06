"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var projectUtils_1 = require("../utils/projectUtils");
var fs = require("fs");
var path = require("path");
var consoleUtils_1 = require("../utils/consoleUtils");
var publish_project_1 = require("./publish-project");
var _config;
function parsePublishConfig() {
    var configPath = path.join(projectUtils_1._projectRootPath, 'packages/publish/configPublish.json');
    if (!fs.existsSync(configPath)) {
        console.log(consoleUtils_1.formatConsole([configPath, '不存在'], 'red'));
        _config = {
            net: 'ws',
            package: { maxSize: 4 * 1024 * 1024, exclude: { png: [], autoAlats: [] }, prior: { prefab: [], png: [], autoAlats: [] }, include: { prefab: [], png: [], autoAlats: [] } },
            compress: { exclude: { png: [], autoAlats: [] } },
        };
    }
    else {
        try {
            _config = JSON.parse(fs.readFileSync(configPath, { encoding: 'utf-8' }));
            _config.package.maxSize = _config.package.maxSize || 4 * 1024 * 1024;
        }
        catch (e) {
            console.log(consoleUtils_1.formatConsole([e.stack || JSON.stringify(e)], 'red'));
            _config = {
                net: 'ws',
                package: { maxSize: 4 * 1024 * 1024, exclude: { png: [], autoAlats: [] }, prior: { prefab: [], png: [], autoAlats: [] }, include: { prefab: [], png: [], autoAlats: [] } },
                compress: { exclude: { png: [], autoAlats: [] } },
            };
        }
    }
    return _config;
}

// 优先加载文件列表
function parseIncludeFilesConfig() {
    let configPath = path.join(projectUtils_1._projectRootPath, 'packages/publish/includeFiles.json');
    let config = []
    if (!fs.existsSync(configPath)) {
        console.log(consoleUtils_1.formatConsole([configPath, '不存在'], 'red'));
    }
    else {
        try {
            config = JSON.parse(fs.readFileSync(configPath, { encoding: 'utf-8' }));
        }
        catch (e) {
            console.log(consoleUtils_1.formatConsole([e.stack || JSON.stringify(e)], 'red'));
            config = []
        }
    }
    return config;
}


exports.parsePublishConfig = parsePublishConfig;
exports.parseIncludeFilesConfig = parseIncludeFilesConfig;
/****************************************** laya ******************************************/
var _versionControl = {};
var _configLaya;
function parsePublishConfigLaya() {
    if (_configLaya == null) {
        _configLaya = {
            root: publish_project_1._pathPublish,
            package: {
                maxSize: 4 * 1024,
                exclude: [],
                prior: [],
                include: [],
            },
            compress: {
                exclude: [],
            },
        };
        var configPath = path.join(projectUtils_1._projectRootPath, 'ho.publish.config.js');
        if (!fs.existsSync(configPath)) {
            console.log(consoleUtils_1.formatConsole([configPath, '不存在'], 'red'));
        }
        else {
            var configTemp = void 0;
            try {
                // 解析version.json文件
                if (fs.existsSync(path.join(publish_project_1._pathPublish, 'version.json'))) {
                    _versionControl = JSON.parse(fs.readFileSync(path.join(publish_project_1._pathPublish, 'version.json'), { encoding: 'utf-8' }));
                }
                // tslint:disable
                configTemp = JSON.parse(eval(fs.readFileSync(configPath, { encoding: 'utf-8' })));
                parseConfigList(configTemp.package.exclude);
                parseConfigList(configTemp.package.include);
                parseConfigList(configTemp.package.prior);
                parseConfigList(configTemp.compress.exclude, ['.png']);
                _configLaya.package.maxSize = configTemp.package.maxSize;
                _configLaya.package.exclude = configTemp.package.exclude;
                _configLaya.package.include = configTemp.package.include;
                _configLaya.package.prior = configTemp.package.prior;
                _configLaya.compress.exclude = configTemp.compress.exclude;
            }
            catch (e) {
                console.log(consoleUtils_1.formatConsole([e.stack || JSON.stringify(e)], 'red'));
            }
        }
    }
    return _configLaya;
}
exports.parsePublishConfigLaya = parsePublishConfigLaya;
function parseConfigList(configList, ext) {
    var listTemp = [];
    var configPath;
    var extname;
    var reg;
    configList.forEach(function (value) {
        configPath = null;
        if (typeof value === 'string') {
            configPath = path.join(publish_project_1._pathPublish, value);
            extname = ext;
        }
        else {
            configPath = path.join(publish_project_1._pathPublish, value.path);
            extname = value.ext;
            reg = new RegExp(value.reg);
        }
        if (fs.existsSync(configPath)) {
            if (extname && extname.length > 0) {
                extname.forEach(function (value, index) {
                    if (!value.startsWith('.')) {
                        extname[index] = '.' + value;
                    }
                });
            }
            deepAdd(listTemp, configPath, extname, reg);
        }
        else {
            console.log(consoleUtils_1.formatConsole(["\u914D\u7F6E [" + configPath + "] \u8DEF\u5F84\u4E0D\u5B58\u5728"], 'red'));
        }
    });
    configList.length = 0;
    configList.push.apply(configList, listTemp);
}
function deepAdd(list, deepPath, ext, reg) {
    if (fs.statSync(deepPath).isDirectory()) {
        fs.readdirSync(deepPath).forEach(function (value) {
            deepAdd(list, path.join(deepPath, value), ext, reg);
        });
    }
    else {
        if (ext && ext.length) {
            if (ext.includes(path.extname(deepPath))) {
                if (reg == null || reg.test(deepPath)) {
                    list.push(convertPathByVersionControl(deepPath));
                }
            }
        }
        else if (reg) {
            if (reg.test(deepPath)) {
                list.push(convertPathByVersionControl(deepPath));
            }
        }
        else {
            list.push(convertPathByVersionControl(deepPath));
        }
    }
}
function convertPathByVersionControl(filePath) {
    var relativePath = path.relative(publish_project_1._pathPublish, filePath);
    var versionPath = _versionControl[relativePath];
    if (versionPath != null) {
        return path.join(publish_project_1._pathPublish, _versionControl[relativePath]);
    }
    else {
        return filePath;
    }
}
/****************************************** layaEnd ******************************************/
