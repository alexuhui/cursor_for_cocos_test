import ListPageView from '../com/ListPage/ListPageView';
import ListPageMockService from './ListPageMockService';
import { IWinRecordMock } from './ListPageMockTypes';

const { ccclass, property } = cc._decorator;

@ccclass
export default class ListPageTestPanel extends cc.Component {

    @property(ListPageView)
    listPageView: ListPageView = null;

    @property(cc.Label)
    statusLabel: cc.Label = null;

    private mockService: ListPageMockService = new ListPageMockService(10, 5);
    private currentPage: number = 1;
    private isRequest: boolean = false;
    /** 重刷/翻页请求序号，用于丢弃过期的异步回调 */
    private fetchToken: number = 0;

    start() {
        this.reloadFromScratch();
    }

    /** 按钮：重刷数据（reset + 从第 1 页重新拉取） */
    onClickRefresh(): void {
        this.reloadFromScratch();
    }

    /** 按钮：在中间插入模拟数据 */
    onClickInsert(): void {
        if (this.listPageView.dataList.length === 0) {
            this.setStatus('列表为空，请先重刷');
            return;
        }
        const mid = Math.floor(this.listPageView.dataList.length / 2);
        const baseTime = this.listPageView.dataList[mid]?.win_time || Math.floor(Date.now() / 1000);
        this.setStatus('插入请求中...');
        this.mockService.fetchInsertBatch(baseTime, 5).then((batch) => {
            this.listPageView.insertData(mid, batch);
            this.setStatus(`已插入 ${batch.length} 条 @ index ${mid}，总数 ${this.listPageView.dataList.length}`);
        });
    }

    onLoadMore(): void {
        this.requestNextPage(this.fetchToken);
    }

    onListRender(_node: cc.Node, _index: number, _data: IWinRecordMock): void {
    }

    private reloadFromScratch(): void {
        this.fetchToken++;
        const token = this.fetchToken;
        this.currentPage = 1;
        this.isRequest = false;
        this.mockService.resetForRefresh();
        this.listPageView.reset();
        this.listPageView.isLoading = true;
        this.setStatus('重刷：清空列表，从第 1 页重新拉取...');
        this.requestNextPage(token);
    }

    private requestNextPage(token: number = this.fetchToken): void {
        if (!this.listPageView.hasMore || this.isRequest) {
            this.listPageView.finishLoad();
            return;
        }
        this.isRequest = true;
        const reqPage = this.currentPage;
        this.setStatus(`请求第 ${reqPage} 页...`);
        this.mockService.fetchPage(reqPage).then((res) => {
            if (token !== this.fetchToken) {
                return;
            }
            this.isRequest = false;
            const pageRecords = res.records || [];
            if (pageRecords.length === 0) {
                this.listPageView.setHasMore(false);
                this.listPageView.finishLoad();
                this.setStatus('没有更多数据');
                return;
            }
            if (reqPage === 1 || this.listPageView.dataList.length === 0) {
                this.listPageView.setData(pageRecords, res.has_more || false);
            } else {
                this.listPageView.appendData(pageRecords, res.has_more || false);
            }
            this.currentPage = (Number(res.page) || reqPage) + 1;
            this.setStatus(`已加载 ${this.listPageView.dataList.length} 条，hasMore=${res.has_more}，下次 page=${this.currentPage}`);
        });
    }

    private setStatus(text: string): void {
        if (this.statusLabel) {
            this.statusLabel.string = text;
        }
        gea.log('[ListPageTest]', text);
    }
}
