const { ccclass } = cc._decorator

@ccclass
export default class ListViewItem extends cc.Component {
    // @property(cc.Label)
    // index: cc.Label = null
    itemId: number = 0

    onLoad() {}

    initData(index: number, data: any) {
        this.itemId = index
        this.init(index, data)
    }

    init(index: number, data: any) {
        // this.index.string = index.toString()
    }
}
