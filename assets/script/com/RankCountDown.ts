import ComFun from './ComFun'
import Language from './Language'

const { ccclass, property } = cc._decorator
// 自动转换多语言文本
@ccclass
export default class RankCountDown extends cc.Component {
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    @property
    keyName: string = ''

    start() {
        if (this.keyName == null || this.keyName === '') {
            this.keyName = this.node.name
        }

        this.schedule(this.refreshCD.bind(this), 0.3, cc.macro.REPEAT_FOREVER)
    }

    refreshCD() {
        let deltaTime: number = ComFun.getRemainSecondOfToday(gea.net.serverTime) - gea.net.serverTime
        let timeStr: string = ComFun.formatTimeStr(Math.floor(deltaTime / 1000))
        Language.tranStringRicTxt(this.keyName, this.node, timeStr)
    }

    // update(dt) {
    // }
}
