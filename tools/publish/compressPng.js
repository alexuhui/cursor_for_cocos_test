"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pngquantUtils_1 = require("../utils/pngquantUtils");
var publish_project_1 = require("./publish-project");
var ConfigPublish_1 = require("./ConfigPublish");
var consoleUtils_1 = require("../utils/consoleUtils");
var projectUtils_1 = require("../utils/projectUtils");
function compressPng(step, callback) {
    consoleUtils_1.printStep(step, '开始压缩png图片');
    switch (projectUtils_1._projectType) {
        case 'creator':
            var configCreator = ConfigPublish_1.parsePublishConfig();
            pngquantUtils_1.pngquant([publish_project_1._pathPublish], {
                exclude: configCreator.compress.exclude.png.concat(configCreator.compress.exclude.autoAlats),
                complete: function () {
                    callback();
                },
            });
            break;
        case 'laya':
            var configLaya = ConfigPublish_1.parsePublishConfigLaya();
            pngquantUtils_1.pngquant([publish_project_1._pathPublish], {
                exclude: configLaya.compress.exclude,
                complete: function () {
                    callback();
                },
            });
            break;
    }
}
exports.compressPng = compressPng;
