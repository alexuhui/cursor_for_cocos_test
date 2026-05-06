import { pngquant } from '../utils/pngquantUtils'
import { _pathPublish } from './publish-project'
import { IPublishConfig, parsePublishConfig, IPublishConfigLaya, parsePublishConfigLaya } from './ConfigPublish'
import { printStep } from '../utils/consoleUtils'
import { _projectType } from '../utils/projectUtils'

export function compressPng(step: number, callback: () => void): void {
    printStep(step, '开始压缩png图片')

    switch (_projectType) {
        case 'creator':
            const configCreator: IPublishConfig = parsePublishConfig()
            pngquant([_pathPublish],
                {
                    exclude: configCreator.compress.exclude.png.concat(configCreator.compress.exclude.autoAlats),
                    complete: (): void => {
                        callback()
                    },
                },
            )
            break
        case 'laya':
            const configLaya: IPublishConfigLaya = parsePublishConfigLaya()
            pngquant(
                [_pathPublish],
                {
                    exclude: configLaya.compress.exclude,
                    complete: (): void => {
                        callback()
                    },
                },
            )
            break
    }

}
