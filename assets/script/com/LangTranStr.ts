import { ExllangTableProvider } from '../../hogame/excelData/ExllangTable'
import Language from './Language'

const { ccclass, property } = cc._decorator
// 自动转换多语言文本
@ccclass
export default class LangTranStr extends cc.Component {
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    @property
    keyName: string = ''
    @property
    toUpperCase: boolean = false

    @property
    hideWhenNotFoundLanguage: boolean = false

    onLoad() {
        gea.instance.on(Language.EVENT_LOAD_SUCCESS, this.refreshLanguage, this)
    }

    start() {
        this.refreshLanguage()
    }

    refreshLanguage(): void {
        if (this.keyName == null || this.keyName === '') {
            this.keyName = this.node.name
        }

        if (this.hideWhenNotFoundLanguage) {
            if (!ExllangTableProvider.getById(this.keyName)) {
                this.node.opacity = 0
            } else {
                this.node.opacity = 255
            }
        }

        // console.log('picNameTxt', this.picNameTxt)
        if (this.node.getComponent(cc.Label)) {
            if (this.toUpperCase) {
                Language.tranStringTxtToUpperCase(this.keyName, this.node)
            } else {
                Language.tranStringTxt(this.keyName, this.node)
            }
        } else if (this.node.getComponent(cc.RichText)) {
            if (this.toUpperCase) {
                Language.tranStringRicTxtToUpperCase(this.keyName, this.node)
            } else {
                Language.tranStringRicTxt(this.keyName, this.node)
            }
        } else {
            gea.error(`LangTranStr, no component found, keyName: ${this.keyName}, node: ${this.node.parent?.name}.${this.node.name}`)
        }
    }

    protected onDestroy(): void {
        gea.instance.offByScope(this)
    }

    // update (dt) {}
}
