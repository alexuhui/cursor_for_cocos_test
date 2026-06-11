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
}
