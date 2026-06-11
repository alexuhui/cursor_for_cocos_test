const { ccclass, property } = cc._decorator;

/** 父节点尺寸跟随指定子节点变化，四边独立 padding，其它兄弟节点不影响 */
@ccclass
export default class FitToChild extends cc.Component {
    @property(cc.Node)
    targetNode: cc.Node = null;
    @property
    paddingTop: number = 0;
    @property
    paddingBottom: number = 0;
    @property
    paddingLeft: number = 0;
    @property
    paddingRight: number = 0;

    onLoad(): void {
        if (!this.targetNode) {
            return;
        }
        this.targetNode.on(cc.Node.EventType.SIZE_CHANGED, this.syncSize, this);
        this.syncSize();
    }

    onDestroy(): void {
        if (this.targetNode) {
            this.targetNode.off(cc.Node.EventType.SIZE_CHANGED, this.syncSize, this);
        }
    }

    /** 子节点尺寸变更后未触发 SIZE_CHANGED 时可手动调用（如 Label 改字） */
    syncSize(): void {
        if (!this.targetNode) {
            return;
        }
        this.node.width = this.targetNode.width + this.paddingLeft + this.paddingRight;
        this.node.height = this.targetNode.height + this.paddingTop + this.paddingBottom;
    }
}
