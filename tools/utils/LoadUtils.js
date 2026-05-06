"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var request = require("request");
var progress = require("request-progress");
function load(url, savePath, callbackFinish, callbackProgress) {
    progress(request(url))
        .on('progress', function (state) {
        if (callbackProgress != null) {
            callbackProgress(state);
        }
        else {
            process.stdout.write("\rprogress:" + state.size.transferred + "/" + state.size.total + "  speed:" + (state.speed || 0).toFixed(2) + "kb/s  costTime:" + state.time.elapsed + "s  lastTime:" + state.time.remaining + "s");
        }
    })
        .on('error', function (err) {
        console.log(JSON.stringify(err));
        if (callbackFinish != null) {
            callbackFinish(false, url, savePath);
        }
    })
        .on('end', function () {
        if (callbackProgress == null) {
            console.log('');
        }
        if (callbackFinish != null) {
            callbackFinish(true, url, savePath);
        }
    })
        .pipe(fs.createWriteStream(savePath));
}
exports.load = load;
