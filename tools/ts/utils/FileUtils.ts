import * as fs from 'fs'
import * as path from 'path'
export function copyFile(fileOrDir: string, dest: string): void {
    if (fs.existsSync(fileOrDir)) {
        if (fs.statSync(fileOrDir).isDirectory()) {
            if (fs.existsSync(dest)) {
                let absPath: string
                fs.readdirSync(fileOrDir).forEach((fileName: string): void => {
                    absPath = path.join(fileOrDir, fileName)
                    if (fs.statSync(absPath).isFile()) {
                        fs.copyFileSync(absPath, path.join(dest, fileName))
                    } else if (fs.statSync(absPath).isDirectory()) {
                        if (!fs.existsSync(path.join(dest, fileName))) {
                            fs.mkdirSync(path.join(dest, fileName))
                        }
                        copyFile(absPath, path.join(dest, fileName))
                    }
                })
            } else {
                fs.mkdirSync(dest)
                copyFile(fileOrDir, dest)
            }
        } else {
            if (!fs.statSync(path.dirname(dest))) {
                fs.mkdirSync(path.dirname(dest))
            }
            fs.copyFileSync(fileOrDir, dest)
        }
    } else {
        console.warn('源文件/目录', fileOrDir, '不存在')
    }
}

export function rmFile(fileOrDir: string): void {
    if (fs.existsSync(fileOrDir)) {
        if (fs.statSync(fileOrDir).isFile()) {
            fs.unlinkSync(fileOrDir)
        } else {
            fs.readdirSync(fileOrDir).forEach((fileName: string): void => {
                rmFile(path.join(fileOrDir, fileName))
            })
            fs.rmdirSync(fileOrDir)
        }
    }
}

export function createDir(dir: string): void {
    const listPath: string[] = []
    while (!fs.existsSync(dir)) {
        listPath.unshift(dir)
        dir = path.dirname(dir)
        if (dir === '') {
            listPath.length = 0
            break
        }
    }

    listPath.forEach(dir => {
        fs.mkdirSync(dir)
    })
}
