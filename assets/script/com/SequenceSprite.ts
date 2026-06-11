import SequenceAnimation from "./SequenceAnimation";

const { ccclass, property } = cc._decorator;

@ccclass
export default class SequenceSprite extends cc.Component {

    @property(cc.Node)
    sequenceAnim: cc.Node = null;

    @property(cc.String)
    resourcePath: string = '';

    // LIFE-CYCLE CALLBACKS:
    start() {

    }

    onLoad() {
        this._loadSequenceFrames();
    }

    _loadSequenceFrames() {
        cc.resources.loadDir(this.resourcePath, cc.SpriteFrame, (err, assets: cc.SpriteFrame[]) => {
            if (err) {
                cc.error("加载序列帧失败:", err)
                return
            }

            assets.sort((a, b) => {
                return a.name.localeCompare(b.name)
            });

            const animComp = this.sequenceAnim.getComponent(SequenceAnimation)
            animComp.spriteFrames = assets

            animComp.setEndCallback(() => {
                cc.log("序列帧动画播放完成")
            })

            animComp.play()
        })
    }

    // update (dt) {}
}
