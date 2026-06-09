const { ccclass, property } = cc._decorator;

@ccclass
export default class Main extends cc.Component {

    onLoad() {
        cc.resources.load('prefab/rank/RankSettlementPopup', cc.Prefab, (err, prefab: cc.Prefab) => {
            if (err) {
                cc.error('Load RankSettlementPopup failed:', err);
                return;
            }
            const node = cc.instantiate(prefab);
            node.parent = this.node;
        });
    }
}
