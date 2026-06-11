import Language from './Language'

const { ccclass } = cc._decorator
@ccclass
export default class Audios {
    static relativePath: string = ''
    static isMute: boolean = false

    static init(relativePath) {
        Audios.relativePath = relativePath
    }

    static play(audioName, isLoop = false, volume = 1) {
        if (Audios.isMute) {
            return
        }
        cc.loader.loadRes(Audios.relativePath + audioName, cc.AudioClip, function (err, clip) {
            if (err) {
                return
            }
            if (Audios.isMute) {
                return
            }
            cc.audioEngine.play(clip, isLoop, volume)
        })
    }

    static play2(audioName, callbackFun: Function, callbackObj: any, isLoop = false, volume = 1) {
        if (Audios.isMute) {
            return
        }
        cc.loader.loadRes(Audios.relativePath + audioName, cc.AudioClip, function (err, clip) {
            if (err) {
                return
            }
            if (Audios.isMute) {
                return
            }
            const audioID = cc.audioEngine.play(clip, isLoop, volume)
            callbackFun.call(callbackObj, audioID)
        })
    }

    static stop(audioID: number): void {
        cc.audioEngine.stop(audioID)
    }

    static playVoice(audioName, isLoop = false, volume = 3) {
        if (Audios.isMute) {
            return
        }
        cc.loader.loadRes(Audios.relativePath + Language.getVoiceLanguage() + '/' + audioName, cc.AudioClip, function (err, clip) {
            if (err) {
                return
            }
            if (Audios.isMute) {
                return
            }
            cc.audioEngine.play(clip, isLoop, volume)
        })
    }
}
