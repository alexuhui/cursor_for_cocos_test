#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CmdUtils_1 = require("./utils/CmdUtils");
var projectUtils_1 = require("./utils/projectUtils");
function initProject() {
    CmdUtils_1.cmd('npm install', 'npm install protobufjs@6.11.2 -g', 'git config --global core.autocrlf false');
    if (projectUtils_1._projectType === 'laya') {
        CmdUtils_1.cmd('npm install layaair2-cmd@1.3.0 -g');
    }
}
if (process.argv[1] === __filename) {
    initProject();
}
