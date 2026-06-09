const { ccclass, property } = cc._decorator;

@ccclass
export default class SwitchBtn extends cc.Component {

    @property(cc.Node)
    redNode: cc.Node = null;

    @property(cc.Node)
    yellowNode: cc.Node = null;

    private _fading: boolean = false;
    private _fadeElapsed: number = 0;
    private _waiting: boolean = false;
    private _waitElapsed: number = 0;
    private _showRed: boolean = true;

    private readonly FADE_DURATION: number = 0.5;
    private readonly WAIT_DURATION: number = 1.0;

    onLoad() {
        if (!this.redNode) this.redNode = this.node.getChildByName('bg_btn_bet_red');
        if (!this.yellowNode) this.yellowNode = this.node.getChildByName('bg_btn_bet_yellow');

        if (this.redNode) this.redNode.opacity = 255;
        if (this.yellowNode) this.yellowNode.opacity = 0;
    }

    update(dt: number) {
        if (this._waiting) {
            this._waitElapsed += dt;
            if (this._waitElapsed >= this.WAIT_DURATION) {
                this._waiting = false;
                this._waitElapsed = 0;
                this._fading = true;
                this._fadeElapsed = 0;
            }
            return;
        }

        if (!this._fading) {
            this._waiting = true;
            this._waitElapsed = 0;
            return;
        }

        this._fadeElapsed += dt;
        const t = Math.min(this._fadeElapsed / this.FADE_DURATION, 1);

        if (this._showRed) {
            if (this.redNode) this.redNode.opacity = Math.round(255 * (1 - t));
            if (this.yellowNode) this.yellowNode.opacity = Math.round(255 * t);
        } else {
            if (this.yellowNode) this.yellowNode.opacity = Math.round(255 * (1 - t));
            if (this.redNode) this.redNode.opacity = Math.round(255 * t);
        }

        if (t >= 1) {
            this._fading = false;
            this._showRed = !this._showRed;
        }
    }
}
