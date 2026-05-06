#!/usr/bin/env node
"use strict";
/**
    # pngquant, 2.12.0 (January 2018), by Kornel Lesinski, Greg Roelofs.
    # Color profiles are supported via Little CMS. Using libpng 1.6.35.

    # usage:  pngquant[options][ncolors] - - pngfile[pngfile ...]
    # pngquant[options][ncolors] - >stdout < stdin

    # options:
    #   --force           overwrite existing output files(synonym: -f)
    #   --skip-if-larger  only save converted files if they're smaller than original
    #   --output file     destination file path to use instead of - -ext(synonym: -o)
    #   --ext new.png     set custom suffix/extension for output filenames
    #   --quality min-max don't save below min, use fewer colors below max(0-100)
    #   --speed N         speed/quality trade-off. 1 = slow, 3 = default, 11 = fast & rough
    #   --nofs            disable Floyd-Steinberg dithering
    #   --posterize N     output lower-precision color(e.g. for ARGB4444 output)
    #   --strip           remove optional metadata(default on Mac)
    #   --verbose print status messages(synonym: -v)

    #   --silence  是否静默压缩
*/
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var child_process_1 = require("child_process");
var consoleUtils_1 = require("./consoleUtils");
var LoadUtils_1 = require("./LoadUtils");
var unzip = require("unzip");
var FileUtils_1 = require("./FileUtils");
var CmdUtils_1 = require("./CmdUtils");
var _pngquantPath;
var _silence = false;
var _exclude;
var _callbackProgress;
var _callbackComplete;
var _listPngPath = [];
var _progressInfo = { inputSize: 0, outputSize: 0, ratioSize: 0, diffSize: 0, progress: 0, total: 0, ratioProgress: 0 };
var _completeInfo = { inputSize: 0, outputSize: 0, ratioSize: 0, diffSize: 0 };
function pngquant(filePathes, opt) {
    opt = opt || {};
    _silence = opt.silence || false;
    _exclude = opt.exclude || [];
    _callbackProgress = opt.progress;
    _callbackComplete = opt.complete;
    if (_exclude.length > 0) {
        console.log('不压缩的文件:', _exclude.toString());
    }
    switch (process.platform) {
        case 'win32':
            child_process_1.exec('where node', function (error, stdout) {
                loadPngoo(stdout.split('node.exe')[0], filePathes, 'https://pngquant.org/pngquant-windows.zip');
            });
            break;
        case 'darwin':
            child_process_1.exec('which node', function (error, stdout) {
                loadPngoo(stdout.split('node')[0], filePathes, 'https://pngquant.org/pngquant.tar.bz2', 'tar.bz2');
            });
            break;
        default:
            throw new Error("\u672A\u5339\u914D\u5230\u5408\u9002\u7684\u7CFB\u7EDF\uFF1A" + process.platform);
    }
}
exports.pngquant = pngquant;
function compress(filePathes) {
    filePathes.forEach(function (filePath) {
        if (fs.existsSync(filePath)) {
            arrangePng(filePath);
            _progressInfo.total = _listPngPath.length;
            compressNext();
        }
        else {
            console.log(consoleUtils_1.formatConsole([filePath, '找不到文件/文件夹'], 'red'));
        }
    });
}
function loadPngoo(dirSave, filePathes, pngooUrl, saveExtName) {
    if (saveExtName === void 0) { saveExtName = 'zip'; }
    var savePath = path.join(dirSave, "pngquant." + saveExtName);
    var unzipPath = path.join(dirSave, 'tools');
    switch (process.platform) {
        case 'win32':
            _pngquantPath = path.join(unzipPath, 'pngquant/pngquant.exe');
            break;
        case 'darwin':
            _pngquantPath = path.join(dirSave, 'pngquant/pngquant');
            break;
    }
    if (fs.existsSync(_pngquantPath)) {
        compress(filePathes);
    }
    else {
        LoadUtils_1.load(pngooUrl, savePath, function (success, url, savePath) {
            if (success) {
                switch (process.platform) {
                    case 'win32':
                        fs.createReadStream(savePath).pipe(unzip.Extract({ path: unzipPath }));
                        loadPngooSuccess(savePath, filePathes);
                        break;
                    case 'darwin':
                        CmdUtils_1.cmd("open " + savePath, function () {
                            setTimeout(function () {
                                loadPngooSuccess(savePath, filePathes);
                            }, 1000);
                        });
                        break;
                }
            }
            else {
                console.log(consoleUtils_1.formatConsole(['pngoo下载失败'], 'red'));
                if (_callbackComplete != null) {
                    _callbackComplete(_completeInfo);
                }
            }
        });
    }
}
function loadPngooSuccess(savePath, filePathes) {
    FileUtils_1.rmFile(savePath);
    compress(filePathes);
}
function arrangePng(filePath) {
    if (fs.statSync(filePath).isDirectory()) {
        fs.readdirSync(filePath).forEach(function (subPath) {
            arrangePng(path.join(filePath, subPath));
        });
    }
    else if (path.extname(filePath) === '.png') {
        if (!_exclude.some(function (value) {
            return filePath.includes(value);
        })) {
            _listPngPath.push(filePath);
        }
    }
}
function compressNext() {
    var pathPng = _listPngPath.shift();
    if (pathPng != null) {
        var inputSize_1 = fs.readFileSync(pathPng).byteLength;
        _progressInfo.progress++;
        _progressInfo.inputSize = inputSize_1;
        _completeInfo.inputSize += inputSize_1;
        if (!_silence) {
            console.log(consoleUtils_1.formatConsole(["[" + _progressInfo.progress + "/" + _progressInfo.total + "]" + pathPng], 'grey'));
        }
        var _a = [path.basename(_pngquantPath), path.dirname(_pngquantPath)], cmd_1 = _a[0], cwd = _a[1];
        if (process.platform === 'darwin') {
            cmd_1 = './' + cmd_1;
        }
        child_process_1.exec(cmd_1 + " --force --strip --speed 1 --skip-if-larger -o \"" + pathPng + "\" \"" + pathPng + "\"", { cwd: cwd }, function (err, stdout, stderr) {
            if (err && err.code !== 98) {
                console.log(consoleUtils_1.formatConsole([err.stack], 'red'));
            }
            var outputSize = fs.readFileSync(pathPng).byteLength;
            _progressInfo.outputSize = outputSize;
            _progressInfo.ratioSize = outputSize / inputSize_1;
            _progressInfo.diffSize = inputSize_1 - outputSize;
            _progressInfo.ratioProgress = _progressInfo.progress / _progressInfo.total;
            _completeInfo.outputSize += outputSize;
            if (!_silence) {
                process.stdout.write(consoleUtils_1.formatConsole([("-" + (_progressInfo.diffSize / 1024).toFixed(1) + "KB(" + ((1 - _progressInfo.ratioSize) * 100).toFixed(2) + "%)").padStart(50, ' ')], outputSize < inputSize_1 ? 'green' : 'grey'));
                process.stdout.write(consoleUtils_1.formatConsole(["\r" + (inputSize_1 / 1024).toFixed(1) + "KB-->" + (outputSize / 1024).toFixed(1) + "KB"], outputSize < inputSize_1 ? 'green' : (outputSize > inputSize_1 ? 'red' : 'grey')));
                console.log('');
            }
            if (_callbackProgress != null) {
                _callbackProgress(_progressInfo);
            }
            compressNext();
        });
    }
    else {
        if (!_silence) {
            console.log('总压缩率:');
            _completeInfo.ratioSize = _completeInfo.outputSize / _completeInfo.inputSize;
            _completeInfo.diffSize = _completeInfo.inputSize - _completeInfo.outputSize;
            process.stdout.write(consoleUtils_1.formatConsole([("-" + (_completeInfo.diffSize / 1024).toFixed(1) + "KB(" + ((1 - _completeInfo.ratioSize) * 100).toFixed(2) + "%)").padStart(50, ' ')], _completeInfo.outputSize < _completeInfo.inputSize ? 'green' : (_completeInfo.outputSize > _completeInfo.inputSize ? 'red' : 'grey')));
            process.stdout.write(consoleUtils_1.formatConsole(["\r" + (_completeInfo.inputSize / 1024).toFixed(1) + "KB-->" + (_completeInfo.outputSize / 1024).toFixed(1) + "KB"], _completeInfo.outputSize < _completeInfo.inputSize ? 'green' : _completeInfo.outputSize > _completeInfo.inputSize ? 'red' : 'grey'));
            console.log('');
        }
        if (_callbackComplete != null) {
            _callbackComplete(_completeInfo);
        }
    }
}
if (process.argv[1] === __filename) {
    pngquant(process.argv.slice(2));
}
