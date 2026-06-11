const { ccclass, property } = cc._decorator;

@ccclass
export default class Main extends cc.Component {

    onLoad() {
        cc.resources.load('prefab/ListPageView/ListPageTestPanel', cc.Prefab, (err, prefab: cc.Prefab) => {
            if (err) {
                cc.error('Load ListPageTestPanel failed:', err);
                return;
            }
            const node = cc.instantiate(prefab);
            node.parent = this.node;
        });
    }
}
