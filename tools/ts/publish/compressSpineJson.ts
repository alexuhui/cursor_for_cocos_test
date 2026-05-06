import * as fs from 'fs'
import * as path from 'path'
import { _pathPublish } from './publish-project'
import { formatConsole, printStep } from '../utils/consoleUtils'

const _listJsonPath: string[] = []
let [_sizeInput, _sizeOutput] = [0, 0]
export function compressSpineJson(step: number, callback: () => void): void {
    printStep(step, '压缩spine动画的json文件')
    arrangeSpineJson(_pathPublish)
    compress(callback)
}

function arrangeSpineJson(filePath: string): void {
    if (fs.statSync(filePath).isDirectory()) {
        fs.readdirSync(filePath).forEach((value: string): void => {
            arrangeSpineJson(path.join(filePath, value))
        })
    } else if (path.extname(filePath) === '.json') {
        try {
            const obj: any = JSON.parse(fs.readFileSync(filePath, { encoding: 'utf-8' }))
            if (obj['skeletonJsonStr'] != null) {
                _listJsonPath.push(filePath)
            }
        } catch (e) {
            console.log(formatConsole([e.stack || JSON.stringify(e)], 'red'))
        }
    }
}

function compress(callback: () => void): void {
    const total: number = _listJsonPath.length
    if (total > 0) {
        _sizeInput = _sizeOutput = 0

        let sizeOrigin: number
        let sizeAfter: number
        _listJsonPath.forEach((value: string, index: number): void => {
            try {
                console.log(`[${index + 1}/${total}]${value}`)
                sizeOrigin = fs.readFileSync(value).byteLength
                const obj: any = JSON.parse(fs.readFileSync(value, { encoding: 'utf-8' }))
                delete obj['skeletonJsonStr']
                fs.writeFileSync(value, JSON.stringify(obj))
                sizeAfter = fs.readFileSync(value).byteLength
                process.stdout.write(formatConsole([`-${((sizeOrigin - sizeAfter) / 1024).toFixed(1)}KB(${((1 - sizeAfter / sizeOrigin) * 100).toFixed(2)}%)`.padStart(50, ' ')], sizeAfter < sizeOrigin ? 'green' : 'grey'))
                process.stdout.write(formatConsole([`\r${(sizeOrigin / 1024).toFixed(1)}KB-->${(sizeAfter / 1024).toFixed(1)}KB`], sizeAfter < sizeOrigin ? 'green' : 'grey'))
                console.log('')
                _sizeInput += sizeOrigin
                _sizeOutput += sizeAfter
            } catch (e) {
                console.log(formatConsole([e.stack], 'red'))
            }
        })
        console.log('总压缩率:')
        process.stdout.write(formatConsole([`-${((_sizeInput - _sizeOutput) / 1024).toFixed(1)}KB(${((1 - _sizeOutput / _sizeInput) * 100).toFixed(2)}%)`.padStart(50, ' ')], _sizeOutput < _sizeInput ? 'green' : 'grey'))
        process.stdout.write(formatConsole([`\r${(_sizeInput / 1024).toFixed(1)}KB-->${(_sizeOutput / 1024).toFixed(1)}KB`], _sizeOutput < _sizeInput ? 'green' : 'grey'))
        console.log('')
        callback()
    } else {
        callback()
    }
}
