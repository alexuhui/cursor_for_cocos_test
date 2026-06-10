const { ccclass, property } = cc._decorator;

@ccclass
export default class RankSettlementView extends cc.Component {

    @property(cc.Node)
    titleLabelNode: cc.Node = null;

    @property(cc.Node)
    rewardLabelNode: cc.Node = null;

    @property(cc.Node)
    okBtn: cc.Node = null;

    @property(cc.Node)
    bgPanel: cc.Node = null;

    @property(cc.Node)
    rankLabelNode: cc.Node = null;

    @property(cc.Node)
    dateLabelNode: cc.Node = null;

    @property(sp.Skeleton)
    diamondSpine: sp.Skeleton = null;

    titleLabel: cc.Label = null;
    rankLabel: cc.Label = null;
    dateLabel: cc.Label = null;
    rewardLabel: cc.Label = null;

    private readonly diamondAnim = 'result_diamond_yellow';

    onLoad() {
        if (this.titleLabelNode) {
            this.titleLabel = this.titleLabelNode.getComponent(cc.Label);
        }
        if (this.rankLabelNode) {
            this.rankLabel = this.rankLabelNode.getComponent(cc.Label);
        }
        if (this.dateLabelNode) {
            this.dateLabel = this.dateLabelNode.getComponent(cc.Label);
        }
        if (this.rewardLabelNode) {
            this.rewardLabel = this.rewardLabelNode.getComponent(cc.Label);
        }
        this.diamondSpine.setCompleteListener((entry) => {
            if (entry.animation.name === this.diamondAnim) {
                // 动画播完，可按需追加逻辑
            }
        });
    }

    onEnable() {
        this.diamondSpine.setAnimation(0, this.diamondAnim, false);
    }

    protected onDestroy(): void {
        this.diamondSpine.setCompleteListener(null);
    }
}
