const { ccclass, property } = cc._decorator;

@ccclass
export default class SequenceAnimation extends cc.Component {

    @property([cc.SpriteFrame])
    spriteFrames: cc.SpriteFrame[] = []

    @property(cc.Float)
    frameTime: number = 0.1

    @property(cc.Boolean)
    loop: boolean = false

    @property(cc.Boolean)
    autoPlay: boolean = false

    sprite: cc.Sprite = null
    currentFrame: number = 0
    isPlaying: boolean = false
    animationEndCallback: Function = null

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {

    }

    // update (dt) {}
    onLoad() {
        this.sprite = this.getComponent(cc.Sprite)
        this.currentFrame = 0
        this.isPlaying = false
        this.animationEndCallback = null

        if (this.autoPlay) {
            this.play()
        }
    }

    play() {
        if (this.spriteFrames.length === 0) {
            cc.warn("没有设置序列帧图片")
            return;
        }

        this.isPlaying = true
        this.currentFrame = 0
        this._updateFrame()
    }

    stop() {
        this.isPlaying = false
        this.unschedule(this._updateFrame)
    }

    setEndCallback(callback: Function) {
        this.animationEndCallback = callback
    }

    _updateFrame() {
        if (!this.isPlaying)
            return

        this.sprite.spriteFrame = this.spriteFrames[this.currentFrame]
        this.currentFrame++

        if (this.currentFrame >= this.spriteFrames.length) {
            if (this.loop) {
                this.currentFrame = 0
            } else {
                this.stop()
                if (this.animationEndCallback) {
                    this.animationEndCallback()
                }
                return
            }
        }

        this.scheduleOnce(() => {
            this._updateFrame()
        }, this.frameTime)
    }
}
