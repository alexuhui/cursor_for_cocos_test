#!/usr/bin/env node
import { cmd } from './utils/CmdUtils'
import { _projectType } from './utils/projectUtils'

function initProject(): void {
    cmd('npm install', 'npm install protobufjs -g', 'git config --global core.autocrlf false')
    if (_projectType === 'laya') {
        cmd('npm install layaair2-cmd@1.3.0 -g')
    }
}
if (process.argv[1] === __filename) {
    initProject()
}
