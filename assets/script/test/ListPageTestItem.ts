import ComFun from '../com/ComFun';
import { formatNumberShort } from '../com/FormatNumgerShort';
import ListPageItem from '../com/ListPage/ListPageItem';
import { IWinRecordMock } from './ListPageMockTypes';

const { ccclass, property } = cc._decorator;

@ccclass
export default class ListPageTestItem extends ListPageItem {

    @property(cc.Label)
    timeTxt: cc.Label = null;

    @property(cc.Label)
    incomeTxt: cc.Label = null;

    @property(cc.Label)
    indexTxt: cc.Label = null;

    onLoad() {
        this.timeTxt = this.ensureLabel(this.timeTxt, 'timeTxt');
        this.incomeTxt = this.ensureLabel(this.incomeTxt, 'incomeTxt');
        this.indexTxt = this.ensureLabel(this.indexTxt, 'indexTxt');
    }

    onRefresh(index: number, data: IWinRecordMock): void {
        if (this.indexTxt) {
            this.indexTxt.string = '#' + index;
        }
        if (!data) {
            return;
        }
        if (this.timeTxt) {
            this.timeTxt.string = ComFun.formatTimeStrRecord(data.win_time || 0);
        }
        if (this.incomeTxt) {
            this.incomeTxt.string = '+' + formatNumberShort(Number(data.win_amount) || 0, 2, false, false);
        }
    }

    /** 预制体生成时可能绑到 Node，运行时解析为 cc.Label */
    private ensureLabel(ref: cc.Label | cc.Node, childName: string): cc.Label {
        if (ref instanceof cc.Label) {
            return ref;
        }
        if (ref instanceof cc.Node) {
            return ref.getComponent(cc.Label);
        }
        const child = this.node.getChildByName(childName);
        return child ? child.getComponent(cc.Label) : null;
    }
}
