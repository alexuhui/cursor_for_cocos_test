"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
exports._seed_project_gits = {
    'creator': 'https://git.duowan.com/games/haiou/js/seed-project-creator.git',
    'laya': 'https://git.duowan.com/games/haiou/js/seed-project-laya.git',
};
// creator项目
if (fs.existsSync(path.join(__dirname, '../../creator.d.ts'))) {
    exports._projectType = 'creator';
}
else if (fs.existsSync(path.join(__dirname, '../../libs/LayaAir.d.ts'))) {
    exports._projectType = 'laya';
}
else {
    throw new Error('未适配到 项目类型 -> ' + exports._projectType);
}
exports._projectRootPath = path.join(__dirname, '../..');
