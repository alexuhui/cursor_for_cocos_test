#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var xlsx = require("node-xlsx");
var path = require("path");

var rootPath = path.join(__dirname, '../../')
var listExcelPath = process.argv.slice(2);

var srcLangPath = path.join(rootPath, 'assets', 'resources', 'excelData', 'langTable.json')

let outPutFilePath = listExcelPath[0]

if (!fs.existsSync(path.dirname(outPutFilePath))) {
    fs.mkdirSync(path.dirname(outPutFilePath), { recursive: true });
}

let langArray = ['zh', 'en_us', 'hi', 'id', 'pt_br', 'es', 'ar', 'th', 'vi', 'ur']

let data = [
    ["", "描述key"],
    ["CLIENT", "key"],
    ["", "string",],
    ["SERVER", "", "", ""]
]

langArray.forEach(lang => {
    data[0].push(lang)
    data[1].push(lang)
    data[2].push('string')
});

let outPutContent = [
    {
        name: 'langTable',
        data: data
    }
]

try {
    const srcLangFileData = fs.readFileSync(srcLangPath, 'utf8');
    const srcLang = JSON.parse(srcLangFileData);

    //fs.writeFileSync(srcLangPath, JSON.stringify(srcLang, null, 4), { encoding: 'utf8' });

    srcLang.root.forEach(langConfig => {
        let newRow = ['']
        newRow.push(langConfig['key'])

        langArray.forEach(lang => {
            if (langConfig.hasOwnProperty(lang)) {
                const langValue = langConfig[lang];
                newRow.push(langValue)
            }
        });

        data.push(newRow)
    });

    fs.writeFileSync(outPutFilePath, Buffer.from(xlsx.build(outPutContent)), { encoding: 'utf8' });
} catch (err) {
    console.error('Error reading or parsing file:', err);
}




