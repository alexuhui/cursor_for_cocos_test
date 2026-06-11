import ComFun from "./ComFun";

const { ccclass, property } = cc._decorator;

/** 可加速数值滚动 Label：挂载在与 Label 同一节点上，支持 accelerate() 缩短剩余滚动时间 */
@ccclass
export default class AcceleratableScrollLabel extends cc.Component {
    @property
    durationMs: number = 1000;
    @property
    maxWidth: number = 0;
    @property
    accelerateFactor: number = 0.2;

    private _label: cc.Label = null;
    private _targetValue = 0;
    private _scrollDone = true;
    private _tweenTarget = { value: 0 };
    private _scrollEndTime = 0;
    private _formatter: (value: number) => string = null;
    private _isTweening = false;

    get label(): cc.Label {
        return this._label;
    }

    get scrollDone(): boolean {
        return this._scrollDone;
    }

    onLoad(): void {
        this._label = this.getComponent(cc.Label);
        if (!this._label) {
            gea.warn(`AcceleratableScrollLabel onLoad, cc.Label is null on node=${this.node.name}`);
        }
    }

    onDestroy(): void {
        this.stopScroll();
    }

    private isAlive(): boolean {
        return cc.isValid(this) && cc.isValid(this.node);
    }

    /** 设置数值→文案转换（如红钻换算）；不设则 `${Math.floor(value)}` */
    setFormatter(formatter: (value: number) => string): void {
        this._formatter = formatter;
    }

    /** 立即显示文案，不滚动 */
    set string(text: string) {
        this.stopScroll();
        this.applyText(text);
    }

    /** 从 0 滚动到目标数值 */
    scrollTo(targetValue: number): void {
        if (!this._label) {
            return;
        }
        this.stopScroll();
        this._scrollDone = false;
        this._targetValue = Math.max(0, Math.floor(targetValue));
        this._tweenTarget.value = 0;
        this._scrollEndTime = Date.now() + this.durationMs;
        this.refreshByValue(0);
        this.playScrollTween(this.durationMs);
    }

    /** 点击加速：剩余时间 × accelerateFactor */
    accelerate(): void {
        if (this._scrollDone || !this._label || !this._isTweening) {
            return;
        }
        this.killTween();
        const remainingMs = Math.max(0, this._scrollEndTime - Date.now()) * this.accelerateFactor;
        this._scrollEndTime = Date.now() + remainingMs;
        this.playScrollTween(remainingMs);
    }

    stopScroll(): void {
        this._scrollDone = true;
        this.killTween();
    }

    private killTween(): void {
        if (!this._isTweening) {
            return;
        }
        this._isTweening = false;
        gea.tween.kill(this._tweenTarget);
    }

    private playScrollTween(durationMs: number): void {
        this.killTween();
        if (!this.isAlive()) {
            return;
        }
        this._isTweening = true;
        gea.tween
            .to(this._tweenTarget, durationMs, { value: this._targetValue })
            .appendCallbackUpdate((tweener: gea.interfaces.tween.ITweener) => {
                if (!this.isAlive()) {
                    return;
                }
                this.refreshByValue(Math.floor(tweener.target.value));
            })
            .appendCallbackComplete(() => {
                this._isTweening = false;
                if (!this.isAlive()) {
                    return;
                }
                this._scrollDone = true;
                this.refreshByValue(this._targetValue);
            });
    }

    private refreshByValue(value: number): void {
        const text = this._formatter ? this._formatter(value) : `${value}`;
        this.applyText(text);
    }

    private applyText(text: string): void {
        if (!this._label || !cc.isValid(this._label)) {
            return;
        }
        if (this.maxWidth > 0) {
            ComFun.limitLabelWidth(this._label, text, this.maxWidth);
        } else {
            this._label.string = text;
        }
    }
}
