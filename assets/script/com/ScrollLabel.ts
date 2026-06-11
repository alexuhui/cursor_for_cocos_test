const { ccclass, property } = cc._decorator

@ccclass
export default class ScrollLabel extends cc.Component {
    @property(cc.Label)
    label: cc.Label = null

    @property
    duration: number = 1000

    @property
    comma: boolean = false

    private _coinTweenTarget = { coin: 0, percent: 0 }
    private _initPosX = 0

    onLoad() {
        if (!this.label) {
            this.label = this.getComponent(cc.Label)
        }
        this._initPosX = this.label.node.x
    }

    reset(coin: number) {
        this.clearTween()
        this._coinTweenTarget.coin = coin
        // this.label.string = `${coin}`
        this.toThousands(coin)
    }

    playCoinTween(coin: number) {
        this.clearTween()
        let index = 0
        this._coinTweenTarget.percent = 0
        gea.tween
            .to(this._coinTweenTarget, this.duration, { coin: coin, percent: 1 })
            .appendCallbackUpdate((tweener: gea.interfaces.tween.ITweener): void => {
                // this.label.string = Math.floor(tweener.target.coin) + ""
                this.toThousands(Math.floor(tweener.target.coin))
                const secondFrame = index % 2 === 0
                this.label.node.x = secondFrame ? this._initPosX : this._initPosX - 6
                this.label.node.scale = tweener.target.percent * 0.4 + 1
                index++
            })
            .appendCallbackComplete((): void => {
                // this.label.string = `${coin}`
                this.toThousands(coin)
                gea.tween.to(this.label.node, 5000 / 30, { scale: 0.8 }).to(5000 / 30, { scale: 1 })
            })
    }

    private clearTween() {
        gea.tween.kill(this._coinTweenTarget)
        if (this.label) {
            gea.tween.kill(this.label.node)
            this.label.node.scale = 1
            this.label.node.x = this._initPosX
        }
    }

    private toThousands(num: number) {
        if (this.label) {
            if (this.comma) {
                this.label.string = (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
            } else {
                this.label.string = `${num}`
            }
        }
    }
}
