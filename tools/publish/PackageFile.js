"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var archiver = require("archiver");
var fs = require("fs");
var path = require("path");
var consoleUtils_1 = require("../utils/consoleUtils");
var FileUtils_1 = require("../utils/FileUtils");
var projectUtils_1 = require("../utils/projectUtils");
var ConfigPublish_1 = require("./ConfigPublish");
var publish_project_1 = require("./publish-project");
// 计算顺序为:js资源->json资源->ttf(对应的json文件已在上一步计算)->plist文件(仅plist文件不包含对应的png)->png/自动图集。同一个资源类型优先排入体积大的资源
var listFiles = [];
var maxSize = 8 * 1024 * 1024;
var _file_load_sequence;
var _totalZipSize = 0;
var _config;
var _includeFiles;
var _listAllFiles = [];
var _listPackageExlude;
function packageFiles(step, callback) {
    consoleUtils_1.printStep(step, '开始统计首包资源');
    _config = ConfigPublish_1.parsePublishConfig();
    _includeFiles = ConfigPublish_1.parseIncludeFilesConfig();
    maxSize = _config.package.maxSize;
    _listPackageExlude = _config.package.exclude.png.concat(_config.package.exclude.autoAlats);
    _file_load_sequence = path.join(publish_project_1._pathPublish, 'file-load-sequence.json');
    arrangeAllFiles(publish_project_1._pathPublish);
    packageRootFiles();
    var srcPath = path.join(publish_project_1._pathPublish, 'src');
    packageSrcFiles(srcPath);
    var resPath = path.join(publish_project_1._pathPublish, 'res');
    if (!fs.existsSync(resPath)) {
        resPath = path.join(publish_project_1._pathPublish, 'assets');
    }
    packageIncludeFiles(resPath);
    packageJsonFiles(resPath);
    packagePriorRes();
    packageIncludeRes();
    caculateZipSize(function (appendAble) {
        if (appendAble) {
            packageTTFAndPlistFiles(resPath);
            caculateZipSize(function () {
                generateLoadSequenceFile();
                callback();
            });
        }
        else {
            generateLoadSequenceFile();
            callback();
        }
    });
}
exports.packageFiles = packageFiles;
function zipPackage(step) {
    consoleUtils_1.printStep(step++, '生成压缩包');
    var output = fs.createWriteStream(path.join(projectUtils_1._projectRootPath, 'release.zip'));
    var archive = archiver('zip', { zlib: { level: 9 } });
    archive.pipe(output);
    archive.directory(publish_project_1._pathPublish, false);
    archive.finalize();
    output.on('close', function () {
        console.log(path.join(projectUtils_1._projectRootPath, 'release.zip'), (archive.pointer() / 1024 / 1024).toFixed(2) + 'M(' + (archive.pointer() / 1024).toFixed(2) + 'KB)');
        caculateZipSize(function () {
        });
    });
}
exports.zipPackage = zipPackage;
function generateLoadSequenceFile() {
    FileUtils_1.rmFile(path.join(publish_project_1._pathPublish, 'firstPackage.zip'));
    var list = listFiles.map(function (value) {
        return path.relative(publish_project_1._pathPublish, value).replace(/\\/g, '/');
    });
    fs.writeFileSync(_file_load_sequence, JSON.stringify(list).replace(/\//g, '\\/'), { encoding: 'utf-8' });
}
function arrangeAllFiles(filePath) {
    if (fs.statSync(filePath).isDirectory()) {
        fs.readdirSync(filePath).forEach(function (value) {
            arrangeAllFiles(path.join(filePath, value));
        });
    }
    else {
        _listAllFiles.push(filePath);
    }
}
function appendFile(filePath) {
    if (!_listPackageExlude.some(function (value) {
        return filePath.includes(value);
    })) {
        if (listFiles.indexOf(filePath) === -1) {
            listFiles.push(filePath);
        }
    }
}
function caculateZipSize(callback, appendAble) {
    if (appendAble === void 0) { appendAble = true; }
    FileUtils_1.rmFile(path.join(publish_project_1._pathPublish, 'firstPackage.zip'));
    var output = fs.createWriteStream(path.join(publish_project_1._pathPublish, 'firstPackage.zip'));
    var archive = archiver('zip', { zlib: { level: 9 } });
    archive.pipe(output);
    // archive.directory(_pathPublish, false)
    listFiles.forEach(function (value) {
        archive.append(fs.createReadStream(value), { name: path.relative(publish_project_1._pathPublish, value) });
    });
    archive.finalize();
    output.on('close', function () {
        if (archive.pointer() > maxSize) {
            let filePath = listFiles.pop()
            console.log(consoleUtils_1.formatConsole(['首包资源', (archive.pointer() / 1024 / 1024).toFixed(1) + 'M(' + archive.pointer() + ')', "\u5927\u4E8E" + (maxSize / 1024 / 1024).toFixed(1) + "M(" + maxSize + ')', '删减资源', filePath, '重新统计'], 'grey'));

            // if(
            //     _includeFiles.some(function (value) {
            //         return filePath.includes(value);
            //     })
            // ){
            //     console.log('delete include file: ', filePath);
            // }

            caculateZipSize(callback, false);
        }
        else {
            console.log(path.join(publish_project_1._pathPublish, 'firstPackage.zip'), (archive.pointer() / 1024 / 1024).toFixed(2) + 'M(' + (archive.pointer() / 1024).toFixed(2) + 'KB)');
            callback(appendAble);
        }
    });
}
/**
 * 打包根目录下的文件
 */
function packageRootFiles() {
    fs.readdirSync(publish_project_1._pathPublish).forEach(function (value) {
        if (fs.statSync(path.join(publish_project_1._pathPublish, value)).isFile()) {
            appendFile(path.join(publish_project_1._pathPublish, value));
        }
    });
}
/**
 * 打包src目录下的文件
 */
function packageSrcFiles(dir) {
    fs.readdirSync(dir).forEach(function (value) {
        var filePath = path.join(dir, value);
        if (fs.statSync(filePath).isDirectory()) {
            packageSrcFiles(filePath);
        }
        else {
            appendFile(filePath);
        }
    });
}
/**
 * 打包prefab依赖的资源
 */
function packagePriorRes() {
    _config.package.prior.prefab.concat(_config.package.prior.png, _config.package.prior.autoAlats).forEach(function (prefabRes) {
        _listAllFiles.some(function (value) {
            if (value.includes(prefabRes)) {
                appendFile(value);
            }
            return false;
        });
    });
}
function packageIncludeRes() {
    _config.package.include.prefab.concat(_config.package.include.png, _config.package.include.autoAlats).forEach(function (includeRes) {
        _listAllFiles.some(function (value) {
            if (value.includes(includeRes)) {
                appendFile(value);
            }
            return false;
        });
    });
    // const config: IPublishConfig = parsePublishConfig()
    // config.package.include.autoAlats
}
/**
 * 打包json文件
 * @param dir
 */
function packageJsonFiles(dir) {
    fs.readdirSync(dir).forEach(function (value) {
        var filePath = path.join(dir, value);
        if (fs.statSync(filePath).isDirectory()) {
            packageJsonFiles(filePath);
        }
        else if (path.extname(filePath) === '.json' || path.extname(filePath) === '.js' || filePath.includes('internal') || filePath.includes('main')) {
            appendFile(filePath);
        }
    });
}

/**
 * 打包优先加入文件
 * @param dir
 */
function packageIncludeFiles(dir) {
    fs.readdirSync(dir).forEach(function (value) {
        var filePath = path.join(dir, value);

        if (fs.statSync(filePath).isDirectory()) {
            packageIncludeFiles(filePath);
        }
        // 优先加入
        else if (
            _includeFiles.some(function (value) {
                return filePath.includes(value);
            })
        ) {
            appendFile(filePath);
        }
    });
}


/**
 * 打包ttf和plist文件
 * @param dir
 */
function packageTTFAndPlistFiles(dir) {
    fs.readdirSync(dir).forEach(function (value) {
        var filePath = path.join(dir, value);
        if (fs.statSync(filePath).isDirectory()) {
            packageTTFAndPlistFiles(filePath);
        }
        else if (path.extname(filePath) === '.ttf' || path.extname(filePath) === '.plist') {
            appendFile(filePath);
        }
    });
}
/****************************************** laya ******************************************/
function packageFilesLaya(step, callback) {
    maxSize = ConfigPublish_1.parsePublishConfigLaya().package.maxSize;
    consoleUtils_1.printStep(step, '开始统计首包资源');
    _listPackageExlude = ConfigPublish_1.parsePublishConfigLaya().package.exclude;
    _file_load_sequence = path.join(publish_project_1._pathPublish, 'file-load-sequence.json');
    arrangeAllFiles(publish_project_1._pathPublish);
    ConfigPublish_1.parsePublishConfigLaya().package.prior.forEach(function (value) {
        appendFile(value);
    });
    caculateZipSize(function (appendAble) {
        if (appendAble) {
            ConfigPublish_1.parsePublishConfigLaya().package.include.forEach(function (value) {
                appendFile(value);
            });
            caculateZipSize(function () {
                generateLoadSequenceFile();
                callback();
            });
        }
        else {
            generateLoadSequenceFile();
            callback();
        }
    });
}
exports.packageFilesLaya = packageFilesLaya;
/****************************************** layaEnd ******************************************/
