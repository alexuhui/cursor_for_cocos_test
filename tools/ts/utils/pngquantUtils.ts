#!/usr/bin/env node
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

import * as fs from 'fs'
import * as path from 'path'
import { exec, ExecException } from 'child_process'
import { formatConsole } from './consoleUtils'
import { load } from './LoadUtils'
import * as unzip from 'unzip'
import { rmFile } from './FileUtils'
import { cmd } from './CmdUtils'

/**
 * 单张图片压缩完成的回调信息
 */
interface IPngquantProgressInfo {
    /**当前图片原始尺寸 byte*/
    inputSize: number
    /**当前图片压缩后的尺寸 byte*/
    outputSize: number
    /**压缩比(inputSize / outputSize) */
    ratioSize: number
    /**尺寸差值(inputSize - outputSize) */
    diffSize: number
    /**当前进度(从1开始) */
    progress: number
    /**图片总数 */
    total: number
    /**进度比(progress / totoal) */
    ratioProgress: number
}

/**
 * 所有图片压缩完成的回调信息
 */
interface IpngquantCompleteInfo {
    /**所有图片原始尺寸 */
    inputSize: number
    /**所有图片压缩后的尺寸 */
    outputSize: number
    /**压缩比(inputSize / outputSize) */
    ratioSize: number
    /**所有图片的尺寸差值(inputSize - outputSize) */
    diffSize: number
}

let _pngquantPath: string
let _silence: boolean = false
let _exclude: string[]

let _callbackProgress: (opt: IPngquantProgressInfo) => void
let _callbackComplete: (opt: IpngquantCompleteInfo) => void
let _listPngPath: string[] = []
let _progressInfo: IPngquantProgressInfo = { inputSize: 0, outputSize: 0, ratioSize: 0, diffSize: 0, progress: 0, total: 0, ratioProgress: 0 }
let _completeInfo: IpngquantCompleteInfo = { inputSize: 0, outputSize: 0, ratioSize: 0, diffSize: 0 }

export function pngquant(filePathes: string[], opt?: {
    /**是否静默压缩 */
    silence?: boolean,
    /**要排除的关键字列表 */
    exclude?: string[],
    /**进度回调函数 */
    progress?: (opt: IPngquantProgressInfo) => void,
    /**完成回调函数 */
    complete?: (opt: IpngquantCompleteInfo) => void,
    /**pngquant的压缩参数 */
    quantOpt?: string,
}): void {
    opt = opt || {}
    _silence = opt.silence || false
    _exclude = opt.exclude || []
    _callbackProgress = opt.progress
    _callbackComplete = opt.complete
    if (_exclude.length > 0) {
        console.log('不压缩的文件:', _exclude.toString())
    }
    switch (process.platform) {
        case 'win32':
            exec('where node', (error: ExecException, stdout: string): void => {
                loadPngoo(stdout.split('node.exe')[0], filePathes, 'https://pngquant.org/pngquant-windows.zip')
            })
            break
        case 'darwin':
            exec('which node', (error: ExecException, stdout: string): void => {
                loadPngoo(stdout.split('node')[0], filePathes, 'https://pngquant.org/pngquant.tar.bz2', 'tar.bz2')
            })
            break
        default:
            throw new Error(`未匹配到合适的系统：${process.platform}`)
    }

}

function compress(filePathes: string[]): void {
    filePathes.forEach((filePath: string): void => {
        if (fs.existsSync(filePath)) {
            arrangePng(filePath)
            _progressInfo.total = _listPngPath.length
            compressNext()
        } else {
            console.log(formatConsole([filePath, '找不到文件/文件夹'], 'red'))
        }
    })
}

function loadPngoo(dirSave: string, filePathes: string[], pngooUrl: string, saveExtName: string = 'zip'): void {
    const savePath: string = path.join(dirSave, `pngquant.${saveExtName}`)
    const unzipPath: string = path.join(dirSave, 'tools')
    switch (process.platform) {
        case 'win32': _pngquantPath = path.join(unzipPath, 'pngquant/pngquant.exe')
            break
        case 'darwin': _pngquantPath = path.join(dirSave, 'pngquant/pngquant')
            break
    }
    if (fs.existsSync(_pngquantPath)) {
        compress(filePathes)
    } else {
        load(pngooUrl, savePath, (success: boolean, url: string, savePath: string): void => {
            if (success) {
                switch (process.platform) {
                    case 'win32':
                        fs.createReadStream(savePath).pipe(unzip.Extract({ path: unzipPath }))
                        loadPngooSuccess(savePath, filePathes)
                        break
                    case 'darwin':
                        cmd(`open ${savePath}`, (): void => {
                            setTimeout(() => {
                                loadPngooSuccess(savePath, filePathes)
                            }, 1000)
                        })
                        break
                }
            } else {
                console.log(formatConsole(['pngoo下载失败'], 'red'))
                if (_callbackComplete != null) {
                    _callbackComplete(_completeInfo)
                }
            }
        })
    }
}

function loadPngooSuccess(savePath: string, filePathes: string[]): void {
    rmFile(savePath)
    compress(filePathes)
}

function arrangePng(filePath: string): void {
    if (fs.statSync(filePath).isDirectory()) {
        fs.readdirSync(filePath).forEach((subPath: string): void => {
            arrangePng(path.join(filePath, subPath))
        })
    } else if (path.extname(filePath) === '.png') {
        if (!_exclude.some((value: string): boolean => {
            return filePath.includes(value)
        })) {
            _listPngPath.push(filePath)
        }
    }
}

function compressNext(): void {
    const pathPng: string = _listPngPath.shift()
    if (pathPng != null) {
        const inputSize: number = fs.readFileSync(pathPng).byteLength
        _progressInfo.progress++
        _progressInfo.inputSize = inputSize
        _completeInfo.inputSize += inputSize
        if (!_silence) {
            console.log(formatConsole([`[${_progressInfo.progress}/${_progressInfo.total}]${pathPng}`], 'grey'))
        }
        let [cmd, cwd] = [path.basename(_pngquantPath), path.dirname(_pngquantPath)]
        if (process.platform === 'darwin') {
            cmd = './' + cmd
        }
        exec(`${cmd} --force --strip --speed 1 --skip-if-larger -o "${pathPng}" "${pathPng}"`, { cwd: cwd }, (err: ExecException, stdout: string, stderr: string): void => {
            if (err && err.code !== 98) {
                console.log(formatConsole([err.stack], 'red'))
            }
            const outputSize: number = fs.readFileSync(pathPng).byteLength
            _progressInfo.outputSize = outputSize
            _progressInfo.ratioSize = outputSize / inputSize
            _progressInfo.diffSize = inputSize - outputSize
            _progressInfo.ratioProgress = _progressInfo.progress / _progressInfo.total
            _completeInfo.outputSize += outputSize
            if (!_silence) {
                process.stdout.write(formatConsole([`-${(_progressInfo.diffSize / 1024).toFixed(1)}KB(${((1 - _progressInfo.ratioSize) * 100).toFixed(2)}%)`.padStart(50, ' ')], outputSize < inputSize ? 'green' : 'grey'))
                process.stdout.write(formatConsole([`\r${(inputSize / 1024).toFixed(1)}KB-->${(outputSize / 1024).toFixed(1)}KB`], outputSize < inputSize ? 'green' : (outputSize > inputSize ? 'red' : 'grey')))
                console.log('')
            }
            if (_callbackProgress != null) {
                _callbackProgress(_progressInfo)
            }
            compressNext()
        })
    } else {
        if (!_silence) {
            console.log('总压缩率:')
            _completeInfo.ratioSize = _completeInfo.outputSize / _completeInfo.inputSize
            _completeInfo.diffSize = _completeInfo.inputSize - _completeInfo.outputSize
            process.stdout.write(formatConsole([`-${(_completeInfo.diffSize / 1024).toFixed(1)}KB(${((1 - _completeInfo.ratioSize) * 100).toFixed(2)}%)`.padStart(50, ' ')], _completeInfo.outputSize < _completeInfo.inputSize ? 'green' : (_completeInfo.outputSize > _completeInfo.inputSize ? 'red' : 'grey')))
            process.stdout.write(formatConsole([`\r${(_completeInfo.inputSize / 1024).toFixed(1)}KB-->${(_completeInfo.outputSize / 1024).toFixed(1)}KB`], _completeInfo.outputSize < _completeInfo.inputSize ? 'green' : _completeInfo.outputSize > _completeInfo.inputSize ? 'red' : 'grey'))
            console.log('')
        }

        if (_callbackComplete != null) {
            _callbackComplete(_completeInfo)
        }
    }
}


if (process.argv[1] === __filename) {
    pngquant(process.argv.slice(2))
}
