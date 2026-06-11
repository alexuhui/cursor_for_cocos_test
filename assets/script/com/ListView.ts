import ListViewItem from './ListViewItem';

const { ccclass, property } = cc._decorator;

/**
 * 实现scrollview item循环滚动 ,目前只支持垂直
 */

/**
 * count: length of listview
 * listViewData: data of listview
 */
type ListViewData = {
    count: number;
    listViewData: any;
};

@ccclass
export default class ListView extends cc.Component {
    // @property(cc.Label)
    // itemCountLabel: cc.Label = null;

    @property({
        type: cc.Prefab,
        tooltip: 'listview单元格，仅支持大小相等的单元格',
    })
    prefabCell: cc.Prefab = null; // listview单元格，仅支持大小相等的单元格

    @property({
        type: cc.ScrollView,
        tooltip: '找到scrollview的控件',
    })
    scrollView: cc.ScrollView = null; // 找到scrollview的控件

    @property(cc.Integer)
    spacing: number = 0; // listview单元格间距

    // @property(cc.String)
    // cellScriptName: string = "";

    @property({
        type: cc.Node,
        tooltip: '找到scrollview的content',
    })
    content: cc.Node = null; // 找到scrollview的content, 搭配scrollview使用

    @property({
        type: cc.Integer,
        tooltip: '缓冲区总个数，即上下缓冲区分别bufferZoneCount / 2',
    })
    bufferZoneCount: number = 4; // 缓冲区总个数，即上下缓冲区分别bufferZoneCount / 2

    items: cc.Node[] = [];

    itemCount: number = 0;
    prefabCellHeight: number = 0;
    prefabCellWidth: number = 0;

    updateTimer: number = 0;
    updateInterval: number = 0.1;

    lastContentPosX: number = 0;
    lastContentPosY: number = 0;

    _bufferZone: number = 0; // when item is away from bufferZone, we relocate it
    _spawnCount: number = 0; // how many items we actually spawn
    _totalCount: number = 0; // how many items we need for the whole list
    _isUpdate: boolean = false;
    _itemData: any;
    // _listViewItem: ListViewItem = new ListViewItem();

    onLoad() {
        this.content.anchorX = 0.5;
        this.content.anchorY = 1;

        this.prefabCellHeight = this.prefabCell.data.height;
        this.prefabCellWidth = this.prefabCell.data.width;
        this.scrollView.node.on('scrolling', this.scrolling.bind(this), this);
        this.scrollView.node.on('scroll-ended', this.scrollEnded.bind(this), this);
        // this.init({count: 20, listViewData: null});

        this.scheduleOnce(() => {
            this.refreshSize();
        }, 0.032);
    }

    refreshSize(): void {
        this._bufferZone = this.scrollView.node.height;
        if (this.scrollView.horizontal) {
            this._bufferZone = this.scrollView.node.width;
            this.content.anchorX = 0;
            this.content.anchorY = 0.5;
        }
    }

    /**
     * 初始化ListView组件
     * @param listViewData ListViewData
     */
    init(listViewData: ListViewData, y?: number) {
        this.content.destroyAllChildren();
        this.items = [];
        this.lastContentPosY = 0;
        this.lastContentPosX = 0;
        this.itemCount = listViewData.count;
        this._itemData = listViewData.listViewData;

        if (this.scrollView.vertical && this.scrollView.horizontal) {
            return;
        }

        this._totalCount = this.itemCount;
        this._spawnCount = Math.floor(this._bufferZone / (this.prefabCellHeight + this.spacing)) + this.bufferZoneCount;
        if (this.scrollView.horizontal) {
            this._spawnCount = Math.floor(this._bufferZone / (this.prefabCellWidth + this.spacing)) + this.bufferZoneCount;
        }

        if (this._spawnCount > this._totalCount) {
            this._spawnCount = this._totalCount;
        }

        if (this.scrollView.vertical) {
            this.scrollView.scrollToTop();
            this.content.height = this._totalCount * (this.prefabCellHeight + this.spacing) + this.spacing; // get total content height
            this.content.height = this._totalCount * (this.prefabCellHeight + this.spacing); // get total content height
        } else if (this.scrollView.horizontal) {
            this.scrollView.scrollToLeft();
            this.content.width = this._totalCount * (this.prefabCellWidth + this.spacing) + this.spacing; // get total content width
        }
        for (let i = 0; i < this._spawnCount; ++i) {
            // spawn items, we only need to do this once
            const item = cc.instantiate(this.prefabCell);
            this.content.addChild(item);
            item.getComponent(ListViewItem).initData(i, this._itemData);

            if (this.scrollView.vertical) {
                item.setPosition(0, -item.height * (0.5 + i) - this.spacing * (i + 1) + (y || 0));
            } else if (this.scrollView.horizontal) {
                item.setPosition(item.width * (i + 0.5) + this.spacing * (i + 1), 0);
            }
            this.items.push(item);
        }
    }

    update(dt) {
        // this.itemCountLabel.string = (this.content.childrenCount).toString();

        // scrolling excute or don't excute
        if (!this._isUpdate) {
            return;
        }

        this.updateTimer += dt;
        if (this.updateTimer < this.updateInterval) {
            return;
        } // we don't need to do the math every frame
        this.updateTimer = 0;
        this.updateList();
    }

    updateList() {
        const items = this.items;
        const buffer = this._bufferZone;
        if (this.scrollView.vertical) {
            const isDown = this.scrollView.content.y < this.lastContentPosY; // scrolling direction
            const offset = (this.prefabCellHeight + this.spacing) * items.length;

            for (let i = 0; i < items.length; ++i) {
                const viewPos = this.getPositionInView(items[i]);
                const item = items[i].getComponent(ListViewItem);

                // content往下滚动
                if (isDown) {
                    // if away from buffer zone and not reaching top of content
                    if (viewPos.y < -buffer && items[i].y + offset < 0) {
                        // console.log('view pos is jjjjjjjjjjjj xxxxxxxxxxxxxxxxxx', item.itemId2, viewPos.y, -buffer, -this.scrollView.node.height)
                        items[i].y = items[i].y + offset;
                        items[i].getComponent(ListViewItem).initData(item.itemId - items.length, this._itemData);
                    }
                } else {
                    // content往上滚动
                    // if away from buffer zone and not reaching bottom of content
                    // if (viewPos.y > (buffer / 2 + (this.prefabCellHeight + this.spacing) / 2) && items[i].y - offset > -this.content.height) {
                    //    items[i].y = items[i].y - offset
                    //    items[i].getComponent(ListViewItem).initData(item.itemId + items.length, this._itemData)
                    // }

                    if (viewPos.y > (this.prefabCellHeight + this.spacing) / 2 && items[i].y - offset > -this.content.height) {
                        items[i].y = items[i].y - offset;
                        items[i].getComponent(ListViewItem).initData(item.itemId + items.length, this._itemData);
                    }
                }
            }
            // update lastContentPosY
            this.lastContentPosY = this.scrollView.content.y;
        } else if (this.scrollView.horizontal) {
            const isRight = this.scrollView.content.x > this.lastContentPosX; // scrolling direction
            const offset = (this.prefabCellWidth + this.spacing) * items.length;
            for (let i = 0; i < items.length; ++i) {
                const viewPos = this.getPositionInView(items[i]);
                const item = items[i].getComponent(ListViewItem);

                if (isRight) {
                    // if away from buffer zone and not reaching top of content
                    if (viewPos.x > buffer / 2 + (this.prefabCellWidth + this.spacing) / 2 && items[i].x - offset > 0) {
                        items[i].x = items[i].x - offset;
                        items[i].getComponent(ListViewItem).initData(item.itemId - items.length, this._itemData);
                    }
                } else {
                    // if away from buffer zone and not reaching bottom of content
                    if (viewPos.x < -buffer / 2 - (this.prefabCellWidth + this.spacing) / 2 && items[i].x + offset < this.content.width) {
                        items[i].x = items[i].x + offset;
                        items[i].getComponent(ListViewItem).initData(item.itemId + items.length, this._itemData);
                    }
                }
            }
            // update lastContentPosX
            this.lastContentPosX = this.scrollView.content.x;
        }
    }

    /**
     * 获取item在scrollview中的位置
     * @param item item位置
     */
    private getPositionInView(item: cc.Node) {
        // get item position in scrollview's node space
        const worldPos = item.parent.convertToWorldSpaceAR(item.position);
        const viewPos = this.scrollView.node.convertToNodeSpaceAR(worldPos);
        return viewPos;
    }

    scrollTo(index: number) {
        // gea.info('scroll to index', index)
        if (this.scrollView.vertical) {
            const offset = (this.prefabCellHeight + this.spacing) * this.items.length;
            const target = -index * (this.prefabCellHeight + this.spacing);
            let cur = this.scrollView.getScrollOffset().y; // y为正数
            let move = Math.abs(target - cur);
            if (target > cur) {
                // 由于list刷新是渐进式的，只能一个一个offset迭代滚动到目标item
                while (move > 0 && offset > 0) {
                    const step = Math.min(move, offset / 2); // 保险起见，每次移动一半吧
                    this.scrollView.scrollToOffset(new cc.Vec2(0, cur + step));
                    cur = this.scrollView.getScrollOffset().y;
                    move -= step;
                    this.updateList();
                }
            } else {
                // 由于list刷新是渐进式的，只能一个一个offset迭代滚动到目标item
                while (move > 0 && offset > 0) {
                    const step = Math.min(move, offset / 2); // 保险起见，每次移动一半吧
                    this.scrollView.scrollToOffset(new cc.Vec2(0, cur - step));
                    cur = this.scrollView.getScrollOffset().y;
                    move -= step;
                    this.updateList();
                }
            }
        } else if (this.scrollView.horizontal) {
            const offset = (this.prefabCellWidth + this.spacing) * this.items.length;
            const target = index * (this.prefabCellWidth + this.spacing);
            let cur = this.scrollView.getScrollOffset().x; // x为负数
            let move = Math.abs(target + cur);
            if (target > cur) {
                // 由于list刷新是渐进式的，只能一个一个offset迭代滚动到目标item
                while (move > 0 && offset > 0) {
                    const step = Math.min(move, offset / 2); // 保险起见，每次移动一半吧
                    this.scrollView.scrollToOffset(new cc.Vec2(-cur + step, 0));
                    cur = this.scrollView.getScrollOffset().x;
                    move -= step;
                    this.updateList();
                }
            } else {
                // 由于list刷新是渐进式的，只能一个一个offset迭代滚动到目标item
                while (move > 0 && offset > 0) {
                    const step = Math.min(move, offset / 2); // 保险起见，每次移动一半吧
                    this.scrollView.scrollToOffset(new cc.Vec2(-cur - step, 0));
                    cur = this.scrollView.getScrollOffset().x;
                    move -= step;
                    this.updateList();
                }
            }
        }
    }

    /**
     * 监听：滚动时更新
     */
    private scrolling() {
        this._isUpdate = true;
    }

    /**
     * 监听：滚动停止时不执行逻辑
     */
    private scrollEnded() {
        this._isUpdate = false;
    }
}
