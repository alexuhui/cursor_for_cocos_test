import ListPageItem from './ListPageItem';
import { ListPageLayout } from './ListPageTypes';

const { ccclass, property, disallowMultiple, menu, requireComponent } = cc._decorator;

@ccclass
@disallowMultiple()
@menu('自定义组件/ListPageView')
@requireComponent(cc.ScrollView)
export default class ListPageView extends cc.Component {
    @property({ type: cc.Prefab, tooltip: 'Item 模板（须挂 ListPageItem）' })
    tmpPrefab: cc.Prefab = null;
    @property({ type: cc.Enum(ListPageLayout), tooltip: '布局模式' })
    layout: ListPageLayout = ListPageLayout.VERTICAL;
    @property({ tooltip: '网格列数（GRID 有效）' })
    gridColumnCount: number = 3;
    @property({ tooltip: '水平间距' })
    spacingX: number = 8;
    @property({ tooltip: '垂直间距' })
    spacingY: number = 8;
    @property paddingTop: number = 8;
    @property paddingBottom: number = 8;
    @property paddingLeft: number = 8;
    @property paddingRight: number = 8;
    @property({ tooltip: '可见区外缓冲行/列数' })
    bufferCount: number = 2;
    @property({ tooltip: '距滚动末端多少 px 触发加载' })
    loadMoreThreshold: number = 80;
    @property({ type: cc.Component.EventHandler, tooltip: '渲染 Item：参数 (itemNode, index)' })
    renderEvent: cc.Component.EventHandler = new cc.Component.EventHandler();
    @property({ type: cc.Component.EventHandler, tooltip: '需要加载下一页' })
    loadMoreEvent: cc.Component.EventHandler = new cc.Component.EventHandler();

    dataList: any[] = [];
    hasMore: boolean = true;
    isLoading: boolean = false;

    private scrollView: cc.ScrollView = null;
    private content: cc.Node = null;
    private pool: cc.Node[] = [];
    private cellWidth: number = 0;
    private cellHeight: number = 0;
    private updateTimer: number = 0;
    private updateInterval: number = 0.05;
    private _isScrolling: boolean = false;
    private _inited: boolean = false;
    private _firstVisibleIndex: number = 0;

    onLoad() {
        this.scrollView = this.getComponent(cc.ScrollView);
        this.content = this.scrollView.content;
        if (!this.tmpPrefab) {
            cc.error('[ListPageView] tmpPrefab is required');
            return;
        }
        this.cellWidth = this.tmpPrefab.data.width;
        this.cellHeight = this.tmpPrefab.data.height;
        this.applyScrollDirection();
        this.scrollView.node.on('scrolling', this.onScrolling, this);
        this.scrollView.node.on('scroll-ended', this.onScrollEnded, this);
        this._inited = true;
    }

    onDestroy() {
        if (this.scrollView && this.scrollView.node) {
            this.scrollView.node.off('scrolling', this.onScrolling, this);
            this.scrollView.node.off('scroll-ended', this.onScrollEnded, this);
        }
    }

    /** 清空数据并回到起点 */
    reset(): void {
        this.dataList = [];
        this.hasMore = true;
        this.isLoading = false;
        this._firstVisibleIndex = 0;
        this._isScrolling = false;
        this.resizeContent();
        this.scrollToStart();
        this.syncVisibleItems();
    }

    /** 首屏或全量重刷 */
    setData(list: any[], hasMore: boolean = false): void {
        this.dataList = (list || []).slice();
        this.hasMore = hasMore;
        this.isLoading = false;
        this._firstVisibleIndex = 0;
        this._isScrolling = false;
        this.resizeContent();
        this.scrollToStart();
        this.syncVisibleItems();
    }

    /** 尾部追加（分页） */
    appendData(list: any[], hasMore: boolean = false): void {
        if (!list || list.length === 0) {
            this.hasMore = hasMore;
            this.isLoading = false;
            return;
        }
        this.dataList.push(...list);
        this.hasMore = hasMore;
        this.isLoading = false;
        this.resizeContent();
        this.syncVisibleItems();
    }

    /** 中间插入；insertIndex 处插入 list，并保持当前可见区域稳定 */
    insertData(insertIndex: number, list: any[]): void {
        if (!list || list.length === 0) {
            return;
        }
        insertIndex = Math.max(0, Math.min(insertIndex, this.dataList.length));
        const range = this.getVisibleIndexRange();
        const anchorIndex = range.start;
        const delta = this.calcInsertScrollDelta(insertIndex, list.length, anchorIndex);
        this.dataList.splice(insertIndex, 0, ...list);
        this.resizeContent();
        if (delta !== 0) {
            this.applyScrollDelta(delta);
        }
        this.syncVisibleItems();
    }

    finishLoad(): void {
        this.isLoading = false;
    }

    setHasMore(v: boolean): void {
        this.hasMore = v;
    }

    scrollToIndex(index: number): void {
        if (!this._inited || index < 0 || index >= this.dataList.length) {
            return;
        }
        const pos = this.calcItemPosition(index);
        if (this.layout === ListPageLayout.HORIZONTAL) {
            const targetX = Math.max(0, pos.x - this.paddingLeft);
            this.scrollView.scrollToOffset(cc.v2(targetX, 0), 0.2);
        } else {
            const targetY = Math.max(0, -pos.y - this.paddingTop - this.cellHeight * 0.5);
            this.scrollView.scrollToOffset(cc.v2(0, targetY), 0.2);
        }
    }

    getItemNode(index: number): cc.Node | null {
        for (let i = 0; i < this.pool.length; i++) {
            const node = this.pool[i];
            if (!node.active) {
                continue;
            }
            const item = node.getComponent(ListPageItem);
            if (item && item.listId === index) {
                return node;
            }
        }
        return null;
    }

    update(dt: number): void {
        if (!this._isScrolling) {
            return;
        }
        this.updateTimer += dt;
        if (this.updateTimer < this.updateInterval) {
            return;
        }
        this.updateTimer = 0;
        this.syncVisibleItems();
        this.checkLoadMore();
    }

    private applyScrollDirection(): void {
        if (this.layout === ListPageLayout.HORIZONTAL) {
            this.scrollView.horizontal = true;
            this.scrollView.vertical = false;
            this.content.anchorX = 0;
            this.content.anchorY = 0.5;
        } else {
            this.scrollView.horizontal = false;
            this.scrollView.vertical = true;
            this.content.anchorX = 0.5;
            this.content.anchorY = 1;
        }
    }

    /** 立即滚到列表起点（须在 syncVisibleItems 之前调用） */
    private scrollToStart(): void {
        if (!this.scrollView) {
            return;
        }
        this.scrollView.stopAutoScroll();
        if (this.layout === ListPageLayout.HORIZONTAL) {
            this.scrollView.scrollToLeft(0);
            this.scrollView.scrollToOffset(cc.v2(0, 0), 0);
        } else {
            this.scrollView.scrollToTop(0);
            this.scrollView.scrollToOffset(cc.v2(0, 0), 0);
        }
    }

    private getLayoutColCount(): number {
        if (this.layout === ListPageLayout.GRID) {
            return Math.max(1, this.gridColumnCount);
        }
        if (this.layout === ListPageLayout.HORIZONTAL) {
            return 1;
        }
        return 1;
    }

    private getRowCount(): number {
        const total = this.dataList.length;
        if (total === 0) {
            return 0;
        }
        const col = this.getLayoutColCount();
        return Math.ceil(total / col);
    }

    private calcItemPosition(index: number): cc.Vec2 {
        const colCount = this.getLayoutColCount();
        const row = Math.floor(index / colCount);
        const col = index % colCount;
        const strideX = this.cellWidth + this.spacingX;
        const strideY = this.cellHeight + this.spacingY;
        if (this.layout === ListPageLayout.HORIZONTAL) {
            const x = this.paddingLeft + index * strideX + this.cellWidth * 0.5;
            return cc.v2(x, 0);
        }
        if (this.layout === ListPageLayout.GRID) {
            const gridW = colCount * this.cellWidth + (colCount - 1) * this.spacingX;
            const startX = -gridW * 0.5 + this.cellWidth * 0.5;
            const x = startX + col * strideX;
            const y = -this.paddingTop - row * strideY - this.cellHeight * 0.5;
            return cc.v2(x, y);
        }
        const y = -this.paddingTop - index * strideY - this.cellHeight * 0.5;
        return cc.v2(0, y);
    }

    private calcContentSize(): cc.Size {
        const rowCount = this.getRowCount();
        const strideX = this.cellWidth + this.spacingX;
        const strideY = this.cellHeight + this.spacingY;
        if (this.layout === ListPageLayout.HORIZONTAL) {
            const w = this.paddingLeft + this.paddingRight + Math.max(0, this.dataList.length) * strideX - (this.dataList.length > 0 ? this.spacingX : 0);
            return cc.size(Math.max(w, this.scrollView.node.width), this.scrollView.node.height);
        }
        const colCount = this.getLayoutColCount();
        const gridW = colCount * this.cellWidth + (colCount - 1) * this.spacingX;
        const w = this.layout === ListPageLayout.GRID ? gridW + this.paddingLeft + this.paddingRight : this.scrollView.node.width;
        const h = this.paddingTop + this.paddingBottom + Math.max(0, rowCount) * strideY - (rowCount > 0 ? this.spacingY : 0);
        return cc.size(Math.max(w, this.scrollView.node.width), Math.max(h, this.scrollView.node.height));
    }

    private resizeContent(): void {
        const size = this.calcContentSize();
        this.content.setContentSize(size);
    }

    private getVisibleIndexRange(): { start: number, end: number } {
        const total = this.dataList.length;
        if (total === 0) {
            return { start: 0, end: -1 };
        }
        const col = this.getLayoutColCount();
        const strideY = this.cellHeight + this.spacingY;
        const strideX = this.cellWidth + this.spacingX;
        if (this.layout === ListPageLayout.HORIZONTAL) {
            const viewW = this.scrollView.node.width;
            const offsetX = this.scrollView.getScrollOffset().x;
            const scrollX = Math.max(0, -offsetX);
            const start = Math.max(0, Math.floor((scrollX - this.paddingLeft) / strideX) - this.bufferCount);
            const end = Math.min(total - 1, Math.ceil((scrollX + viewW - this.paddingLeft) / strideX) + this.bufferCount);
            return { start, end };
        }
        const viewH = this.scrollView.node.height;
        const offsetY = this.scrollView.getScrollOffset().y;
        const startRow = Math.max(0, Math.floor((offsetY - this.paddingTop) / strideY) - this.bufferCount);
        const endRow = Math.min(this.getRowCount() - 1, Math.ceil((offsetY + viewH - this.paddingTop) / strideY) + this.bufferCount);
        const start = Math.max(0, startRow * col);
        const end = Math.min(total - 1, (endRow + 1) * col - 1);
        return { start, end };
    }

    private ensurePoolSize(need: number): void {
        while (this.pool.length < need) {
            const node = cc.instantiate(this.tmpPrefab);
            node.parent = this.content;
            const item = node.getComponent(ListPageItem);
            if (item) {
                item.listPageView = this;
            }
            this.pool.push(node);
        }
    }

    private syncVisibleItems(): void {
        if (!this._inited) {
            return;
        }
        const range = this.getVisibleIndexRange();
        this._firstVisibleIndex = range.start;
        if (range.end < range.start) {
            for (let i = 0; i < this.pool.length; i++) {
                this.pool[i].active = false;
            }
            return;
        }
        const need = range.end - range.start + 1;
        this.ensurePoolSize(need);
        for (let i = 0; i < this.pool.length; i++) {
            const node = this.pool[i];
            if (i < need) {
                const dataIndex = range.start + i;
                node.active = true;
                node.setPosition(this.calcItemPosition(dataIndex));
                this.bindItem(node, dataIndex);
            } else {
                node.active = false;
            }
        }
    }

    private bindItem(node: cc.Node, index: number): void {
        const data = this.dataList[index];
        let item = node.getComponent(ListPageItem);
        if (!item) {
            const comps = node.getComponents(cc.Component);
            for (let i = 0; i < comps.length; i++) {
                const comp = comps[i] as ListPageItem;
                if (comp && typeof comp.refresh === 'function') {
                    item = comp;
                    break;
                }
            }
        }
        if (item) {
            item.refresh(index, data);
        }
        if (this.renderEvent && this.renderEvent.handler) {
            cc.Component.EventHandler.emitEvents([this.renderEvent], node, index, data);
        }
    }

    private calcInsertScrollDelta(insertIndex: number, insertCount: number, anchorIndex: number): number {
        if (insertIndex > anchorIndex || insertCount <= 0) {
            return 0;
        }
        const col = this.getLayoutColCount();
        const rowStride = this.cellHeight + this.spacingY;
        const colStride = this.cellWidth + this.spacingX;
        if (this.layout === ListPageLayout.HORIZONTAL) {
            return insertCount * colStride;
        }
        const oldRow = Math.floor(anchorIndex / col);
        const newAnchor = anchorIndex + insertCount;
        const newRow = Math.floor(newAnchor / col);
        return (newRow - oldRow) * rowStride;
    }

    private applyScrollDelta(delta: number): void {
        if (delta === 0) {
            return;
        }
        const off = this.scrollView.getScrollOffset();
        if (this.layout === ListPageLayout.HORIZONTAL) {
            this.scrollView.scrollToOffset(cc.v2(off.x + delta, off.y), 0);
        } else {
            this.scrollView.scrollToOffset(cc.v2(off.x, off.y + delta), 0);
        }
    }

    private onScrolling(): void {
        this._isScrolling = true;
    }

    private onScrollEnded(): void {
        this._isScrolling = false;
        this.syncVisibleItems();
        this.checkLoadMore();
    }

    /** 接近列表末端时触发 loadMoreEvent */
    private checkLoadMore(): void {
        if (!this.hasMore || this.isLoading || this.dataList.length === 0) {
            return;
        }
        const max = this.scrollView.getMaxScrollOffset();
        const cur = this.scrollView.getScrollOffset();
        let nearEnd = false;
        if (this.layout === ListPageLayout.HORIZONTAL) {
            nearEnd = Math.abs(cur.x) >= Math.abs(max.x) - this.loadMoreThreshold;
        } else {
            nearEnd = cur.y >= max.y - this.loadMoreThreshold;
        }
        if (nearEnd) {
            this.isLoading = true;
            cc.Component.EventHandler.emitEvents([this.loadMoreEvent], this);
        }
    }
}
