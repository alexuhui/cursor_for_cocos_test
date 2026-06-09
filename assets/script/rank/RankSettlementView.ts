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

    titleLabel: cc.Label = null;
    rewardLabel: cc.Label = null;

    onLoad() {
        if (this.titleLabelNode) {
            this.titleLabel = this.titleLabelNode.getComponent(cc.Label);
        }
        if (this.rewardLabelNode) {
            this.rewardLabel = this.rewardLabelNode.getComponent(cc.Label);
        }
    }
}
