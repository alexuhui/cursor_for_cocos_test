#!/usr/bin/env node
import * as fs from 'fs'
import * as path from 'path'
import { formatConsole } from './utils/consoleUtils'

const _listJsonFile: string[] = []

function arrangeJsonFiles(fileName: string): void {
    if (fs.statSync(fileName).isDirectory()) {
        fs.readdirSync(fileName).forEach((value: string): void => {
            arrangeJsonFiles(path.join(fileName, value))
        })
    } else if (path.extname(fileName) === '.json') {
        _listJsonFile.push(fileName)
    }
}

function compressNext(): void {
    const file: string = _listJsonFile.pop()
    if (file != null) {
        let content: string = fs.readFileSync(file, { encoding: 'utf-8' })
        try {
            const obj: any = JSON.parse(content)
            if (obj['skeletonJsonStr'] != null) {
                delete obj['skeletonJsonStr']
            }
            content = JSON.stringify(obj)
            fs.writeFileSync(file, content, { encoding: 'utf-8' })
        } catch (e) {
            console.log(formatConsole([`${file} 压缩失败`], 'red'))
        } finally {
            compressNext()
        }
    } else {
        console.log(formatConsole([`压缩结束`], 'green'))
    }
}

if (process.argv[1] === __filename) {
    const fileName: string = process.argv[2]
    if (fileName == null) {
        console.log(formatConsole(['请传入需要要锁的json文件路径或者文件夹路径'], 'red'))
    } else {
        if (fs.existsSync(fileName)) {
            arrangeJsonFiles(fileName)
            compressNext()
        } else {
            console.log(formatConsole([`路径${fileName}不存在`], 'red'))
        }
    }
}
