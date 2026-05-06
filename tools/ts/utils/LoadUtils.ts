import * as fs from 'fs'
import * as request from 'request'
import * as progress from 'request-progress'

export interface IRequestProgress {
    /** Overall percent (between 0 to 1) */
    percent: number,
    /** The download speed in bytes/sec */
    speed: number,
    size: {
        /** The total payload size in bytes */
        total: number,
        /** The transferred payload size in bytes */
        transferred: number,
    },
    time: {
        /** The total elapsed seconds since the start (3 decimals) */
        elapsed: number,
        /** The remaining seconds to finish (3 decimals) */
        remaining: number,
    },
}

export function load(
    url: string,
    savePath: string,
    callbackFinish?: (success: boolean, url: string, savePath: string) => void,
    callbackProgress?: (progress: IRequestProgress) => void,
): void {
    progress(request(url))
        .on('progress', (
            state: IRequestProgress): void => {
            if (callbackProgress != null) {
                callbackProgress(state)
            } else {
                process.stdout.write(`\rprogress:${state.size.transferred}/${state.size.total}  speed:${(state.speed || 0).toFixed(2)}kb/s  costTime:${state.time.elapsed}s  lastTime:${state.time.remaining}s`)
            }
        })
        .on('error', (err: any): void => {
            console.log(JSON.stringify(err))
            if (callbackFinish != null) {
                callbackFinish(false, url, savePath)
            }
        })
        .on('end', (): void => {
            if (callbackProgress == null) {
                console.log('')
            }
            if (callbackFinish != null) {
                callbackFinish(true, url, savePath)
            }
        })
        .pipe(fs.createWriteStream(savePath))
}
