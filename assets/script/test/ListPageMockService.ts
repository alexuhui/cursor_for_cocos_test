import { IGetWinRecordsMockRes, IWinRecordMock } from './ListPageMockTypes';

/** 模拟 RecordView 分页接口：延迟返回 WinRecord 格式数据 */
export default class ListPageMockService {
    private static _seq: number = 0;
    private pageSize: number = 10;
    private maxPage: number = 5;
    private baseTime: number = Math.floor(Date.now() / 1000);

    constructor(pageSize: number = 10, maxPage: number = 5) {
        this.pageSize = pageSize;
        this.maxPage = maxPage;
    }

    /** 重刷时重置时间基准，使第 1 页数据与上次不同 */
    resetForRefresh(): void {
        this.baseTime = Math.floor(Date.now() / 1000);
    }

    /** 模拟 Req_GetWinRecords */
    fetchPage(page: number, delayMs: number = 300): Promise<IGetWinRecordsMockRes> {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (page > this.maxPage) {
                    resolve({ records: [], has_more: false, page: page - 1 });
                    return;
                }
                const records = this.buildPageRecords(page);
                resolve({
                    records,
                    has_more: page < this.maxPage,
                    page,
                });
            }, delayMs);
        });
    }

    /** 模拟中间插入一批较新的记录（win_time 更大） */
    fetchInsertBatch(baseTime: number, count: number = 5, delayMs: number = 200): Promise<IWinRecordMock[]> {
        return new Promise((resolve) => {
            setTimeout(() => {
                const list: IWinRecordMock[] = [];
                for (let i = 0; i < count; i++) {
                    list.push({
                        win_time: baseTime + i * 60 + 30,
                        win_amount: 1000 + ListPageMockService._seq++ * 17,
                        cell_items: [1, 2, 3].slice(0, (i % 3) + 1),
                    });
                }
                resolve(list);
            }, delayMs);
        });
    }

    private buildPageRecords(page: number): IWinRecordMock[] {
        const list: IWinRecordMock[] = [];
        for (let i = 0; i < this.pageSize; i++) {
            const idx = (page - 1) * this.pageSize + i;
            const rowInPage = i + 1;
            list.push({
                // 每条时间差 37 分钟，金额按全局序号阶梯递增，便于肉眼区分
                win_time: this.baseTime - idx * 2220 - rowInPage * 60,
                win_amount: 1000 * (idx + 1) + (page * 100) + rowInPage * 17,
                cell_items: [1, 2, 3, 4, 5].slice(0, (idx % 5) + 1),
            });
        }
        return list;
    }
}
