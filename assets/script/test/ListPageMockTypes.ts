/** 仿 pbm.IWinRecord 的测试数据结构 */
export interface IWinRecordMock {
    win_time?: number;
    win_amount?: number;
    cell_items?: number[];
}

/** 仿 pbm.IGetWinRecordsRes */
export interface IGetWinRecordsMockRes {
    records?: IWinRecordMock[];
    has_more?: boolean;
    page?: number;
}
