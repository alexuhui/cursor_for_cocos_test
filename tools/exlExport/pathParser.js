"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var projectUtils_1 = require("../utils/projectUtils");
exports.CODE_FILE_PREFIX = 'Exl';
exports._jsonOutputDir = '';
exports._codeOutputDir = '';
exports._sourceDir = 'excelData';
exports._exlLoaderOutputPath = '';
// creator项目
if (projectUtils_1._projectType === 'creator') {
    exports._jsonOutputDir = path.join(__dirname, '../../assets/resources', exports._sourceDir);
    exports._codeOutputDir = path.join(__dirname, '../../assets/hogame/excelData');
    exports._exlLoaderOutputPath = path.join(__dirname, '../../assets/hogame/adapters/ExlLoader.ts');
}
else if (projectUtils_1._projectType === 'laya') {
    exports._jsonOutputDir = path.join(__dirname, '../../bin/res/', exports._sourceDir);
    exports._codeOutputDir = path.join(__dirname, '../../src/hogame/excelData');
    exports._exlLoaderOutputPath = path.join(__dirname, '../../src/hogame/adapters/ExlLoader.ts');
}
