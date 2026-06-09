import RankSettlementView from './RankSettlementView';

const { ccclass, property } = cc._decorator;

@ccclass
export default class RankSettlement extends cc.Component {

    @property(RankSettlementView)
    view: RankSettlementView = null;

    @property
    targetReward: number = 88888;

    @property
    rollDuration: number = 1.5;

    private _rollElapsed: number = 0;
    private _rolling: boolean = false;

    onLoad() {
        if (!this.view) {
            this.view = this.getComponent(RankSettlementView);
        }
    }

    start() {
        this.startRoll();
    }

    /** 从 0 滚动到目标奖励值 */
    startRoll(): void {
        this._rollElapsed = 0;
        this._rolling = true;
        this.updateRewardText(0);
    }

    update(dt: number) {
        if (!this._rolling) {
            return;
        }
        this._rollElapsed += dt;
        const t = Math.min(this._rollElapsed / this.rollDuration, 1);
        const eased = 1 - (1 - t) * (1 - t);
        const val = Math.floor(this.targetReward * eased);
        this.updateRewardText(val);
        if (t >= 1) {
            this._rolling = false;
            this.updateRewardText(this.targetReward);
        }
    }

    private updateRewardText(value: number): void {
        if (!this.view || !this.view.rewardLabel) {
            return;
        }
        this.view.rewardLabel.string = '+' + this.formatNumber(value);
    }

    private formatNumber(num: number): string {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    /** 点击 OK 关闭弹窗（预制体 Button 点击回调） */
    onOkClick(): void {
        this.node.destroy();
    }
}
