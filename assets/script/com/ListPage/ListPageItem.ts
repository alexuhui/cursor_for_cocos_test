const { ccclass } = cc._decorator;

@ccclass
export default class ListPageItem extends cc.Component {
    listId: number = -1;
    listPageView: any = null;

    /** 子类重写：根据 index 与 data 刷新 UI */
    onRefresh(index: number, data: any): void {
    }

    /** 由 ListPageView 调用 */
    refresh(index: number, data: any): void {
        this.listId = index;
        this.onRefresh(index, data);
    }
}
