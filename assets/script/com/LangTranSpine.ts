import Language from './Language'
import { LoadManager } from './LoadManager'

const { ccclass, property } = cc._decorator
// 自动转换多语言图片
@ccclass
export default class LangTranSpine extends cc.Component {
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    @property
    spineame: string = ''

    start() {
        // this.node.getComponent(cc.Sprite).spriteFrame = null
        if (this.spineame == null || this.spineame === '') {
            this.spineame = this.node.name
        }
        // console.log('picNameTxt', this.picNameTxt)
        let hago_lang: string = Language.getLanguage()
        if (hago_lang === 'en-us') {
            hago_lang = 'en'
        } else if (hago_lang === 'pt-br') {
            hago_lang = 'pr'
        }
        hago_lang = this.spineame + '_' + hago_lang
        const url = 'spine/title/' + hago_lang

        const spine: sp.Skeleton = this.node.getComponent(sp.Skeleton)
        LoadManager.loadSkeleton(url, spine.node, function (resource) {
            spine.skeletonData = resource
            spine.setAnimation(0, hago_lang, true)
        })
    }

    // update (dt) {}
}
