import '../../script/svga/proto'
import { PBEnums } from '../proto/PBEnums'
import ease = gea.enums.tween.ease;

if (!CC_EDITOR) {
    const uidMatch: RegExpMatchArray = window.location.href.match(/(\?|&)uid=[^&]+/)
    let uid: string
    if (uidMatch) {
        uid = uidMatch[0].replace(/([?&])uid=/, '')
    }
    uid = '101286522'
    uid = '107200106'
    hogame.config.setup({
        url: 'wss://xyx-dk-test-id-954.ihago.net',
        gameId: 'crashrocket',
        uid: uid
    })
    // 网络实例所属的uid
    gea.net.setup(hogame.config.uid)
    // 网络实例心跳的相关设置
    gea.net.heartBeat.interval(5000).timeoutCountLimit(3)
    // 网络实例解析器的相关设置
    gea.net.parser.setMapping(PBEnums.Mapping)
    // 自定义发送给服务器的数据打印
    gea.net.parser.setEncodeLogGenerator((opt): any => {
        return `${opt.msg} ${JSON.stringify(opt.body)}` // 返回字符串
    })
    // 自定义服务器发送给客户端的数据打印
    gea.net.parser.setDecodeLogGenerator((opt): any => {
        return `${opt.msg} ${JSON.stringify(opt.body)}` // 返回字符串
    })
    // 屏蔽消息打印
    gea.net.forbidReqLog(PBEnums.Req_GMEHeartBeat)
        .forbidResLog(PBEnums.Res_GMEHeartBeat)
        .forbidResLog(PBEnums.Res_RocketMultiple)
        .forbidResLog(PBEnums.Res_GetRoundRank)
        .forbidReqLog(PBEnums.Req_GetRoundRank)
    // 设置所有ViewBase的默认弹出和关闭动画
    Object.defineProperties(gea.abstracts.ui.ViewBase.prototype, {
        customTweenShow: {
            get: function (): gea.interfaces.tween.ITweener {
                return gea.tween.fromTo(this.node, 200, { y: -1080 }, { y: 0 }, { easeType: ease.SineIn })
            }
        },
        customTweenHide: {
            get: function (): gea.interfaces.tween.ITweener {
                return gea.tween.fromTo(this.node, 200, { y: 0 }, { y: -1080 }, { easeType: ease.SineOut })
            }
        }
    })
    // 设置所有window的默认弹出和关闭动画
    Object.defineProperties(gea.abstracts.ui.WindowBase.prototype, {
        customTweenShow: {
            get: function (): gea.interfaces.tween.ITweener {
                return gea.tween.fromTo(this.node, 250, { scale: 0 }, { scale: 1 }, { easeType: gea.enums.tween.ease.BackOut })
            }
        },
        customTweenHide: {
            get: function (): gea.interfaces.tween.ITweener {
                gea.log('duration', this.node.scale * 250)
                return gea.tween.to(this.node, this.node.scale * 250, { scale: 0 })
            }
        }
    })
    // 设置所有window为模态窗口
    gea.abstracts.ui.WindowBase.setup({ modal: true })
    // 设置模态层的动画
    gea.ui.setup({
        modal: {
            tweenShow: [
                {
                    duration: 450,
                    from: { opacity: 0 },
                    to: { opacity: 255 * 0.8 },
                    option: { easeType: gea.enums.tween.ease.SineInOut }
                }
            ],
            tweenHide: { duration: 100, to: { opacity: 0 } }
        }
    })
    // 设置同时最大加载数量为了避免加载导致的卡顿
    cc.assetManager.downloader.maxRequestsPerFrame = 4
    cc.assetManager.downloader.maxConcurrency = 4
    gea.log('hogame startup success!')

    if (cc.sys.os === cc.sys.OS_WINDOWS || cc.sys.os === cc.sys.OS_ANDROID) {
        cc.assetManager.downloader.maxConcurrency = 2
    }

    cc.assetManager.downloader.register(".svga", (url, options, callback) => {
        let downloadFileFunction = cc.assetManager.downloader['downloadFile']

        options.responseType = 'arraybuffer'

        downloadFileFunction(url, options, callback)
    })

    cc.assetManager.parser.register(".svga", (file, options, onComplete) => {
        onComplete(null, file)
    })
}
