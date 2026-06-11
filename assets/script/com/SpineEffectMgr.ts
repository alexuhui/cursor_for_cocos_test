import { LoadManager } from './LoadManager';

namespace SpineEffectMgr {
    export const BOOM_EF: string = 'spine/feedback_get_free_times';
    export const CLICK_EFF: string = 'spine/click';
    export const FRAME_EFF: string = 'spine/frame';
    export const LINE_EFF: string = 'spine/line';
    export const DIAMONDS: string = 'spine/diamonds';
    export const GET_DIAMONDS: string = 'spine/get_diamonds';
    export const ROLLER: string = 'spine/roller';
    export const FIVE_CONTINUS: string = 'spine/ui_5ofakind';

    /** 创建的所有spine 用于结束时候回收 */
    const allSpineList: sp.Skeleton[] = [];
    /** spine 对象池 */
    const spinePool: cc.NodePool = new cc.NodePool();

    /** 播放完成后立即回收 */
    const recycleOnCompleteList: sp.Skeleton[] = [];

    /** 播放完回调 */
    let completeCallBackMap: object = {};

    export function showLightEff(node: cc.Node, aniName: string, loop: boolean = false, pos: cc.Vec2 = null) {
        const spine: sp.Skeleton = getSpineNode(null);
        checkAndReMoveOld(node, aniName);
        spine.node.zIndex = 1000;
        node.addChild(spine.node);
        spine.node.name = aniName;
        LoadManager.loadSkeleton(CLICK_EFF, spine.node, function (resource) {
            if (!cc.isValid(spine.node)) {
                return;
            }

            spine.skeletonData = resource;
            if (pos) {
                spine.node.setPosition(pos);
            }
            spine.setAnimation(0, aniName, loop);
        });

        return spine;
    }

    // 线段动画
    export function showLineEff(node: cc.Node, aniName: string, loop: boolean = true, pos: cc.Vec2 = null) {
        const spine: sp.Skeleton = getSpineNode(null);
        spine.node.zIndex = 1000;
        node.addChild(spine.node);
        spine.node.name = aniName;
        LoadManager.loadSkeleton(LINE_EFF, spine.node, function (resource) {
            if (!cc.isValid(spine.node)) {
                return;
            }

            spine.skeletonData = resource;
            if (pos) {
                spine.node.setPosition(pos);
            }
            spine.setAnimation(0, aniName, loop);
        });

        return spine;
    }

    export function showFrameEff(node: cc.Node, aniName: string, loop: boolean = true, pos: cc.Vec2 = null) {
        const spine: sp.Skeleton = getSpineNode(null);
        spine.node.zIndex = 1000;
        spine.node.scale = 0.9;
        node.addChild(spine.node);
        spine.node.name = aniName;
        LoadManager.loadSkeleton(FRAME_EFF, spine.node, function (resource) {
            if (!cc.isValid(spine.node)) {
                return;
            }
            spine.skeletonData = resource;
            if (pos) {
                spine.node.setPosition(pos);
            }
            spine.setAnimation(0, aniName, loop);
        });

        return spine;
    }

    /** 在Node 上播放一个特效，播放完成自动移除 */
    export function showOneEff(
        node: cc.Node,
        spineUrl: string,
        aniName: string,
        loop: boolean = false,
        pos: cc.Vec2 = null,
        callBack: Function = null,
        notRecy: boolean = false,
        notCheckOld: boolean = false,
    ) {
        const spine: sp.Skeleton = getSpineNode(null);
        if (!notCheckOld) {
            checkAndReMoveOld(node, aniName);
        }
        spine.node.zIndex = 1000;
        node.addChild(spine.node);
        spine.node.name = aniName;
        LoadManager.loadSkeleton(spineUrl, spine.node, function (resource) {
            if (!cc.isValid(spine.node)) {
                return;
            }

            spine.skeletonData = resource;
            if (pos) {
                spine.node.setPosition(pos);
            }
            if (callBack) {
                completeCallBackMap[spine.uuid] = callBack;
            }
            // 不循环播放的自动移除
            if (!loop && !notRecy) {
                addToAutoRecycle(spine);
            }
            spine.setAnimation(0, aniName, loop);
        });

        return spine;
    }

    /** 在Node 上播放一个特效，播放完成自动移除 */
    export function showOneEff2(
        node: cc.Node,
        spineUrl: string,
        aniNames: string[],
        loadCallBack: Function = null,
        callBack: Function = null,
        pos: cc.Vec2 = null,
        spine: sp.Skeleton = null,
    ) {
        if (!spine) {
            spine = getSpineNode(null);
            spine.node.zIndex = 1000;
            node.addChild(spine.node);
            LoadManager.loadSkeleton(spineUrl, spine.node, (resource) => {
                if (!cc.isValid(spine.node)) {
                    return;
                }

                spine.skeletonData = resource;
                if (pos) {
                    spine.node.setPosition(pos);
                }
                if (loadCallBack) {
                    loadCallBack(spine);
                }
                SpineEffectMgr.showOneEff2(node, spineUrl, aniNames, null, callBack, pos, spine);
            });
            return spine;
        }
        const aniName = aniNames.shift();
        if (!aniName) {
            if (callBack) {
                callBack();
            }
            return spine;
        }
        spine.node.name = aniName;
        spine.setAnimation(0, aniName, false);
        spine.setCompleteListener(() => {
            SpineEffectMgr.showOneEff2(node, spineUrl, aniNames, null, callBack, pos, spine);
        });

        return spine;
    }

    export function checkAndReMoveOld(node: cc.Node, aniName: string) {
        const spineNode: cc.Node = node.getChildByName(aniName);
        if (spineNode) {
            const spine: sp.Skeleton = spineNode.getComponent(sp.Skeleton);
            if (spine) {
                completeCallBackMap[spine.uuid] = null;
                recycleSpine(spine);
            }
        }
    }

    /** 获取一个spine */
    export function getSpineNode(resource: sp.SkeletonData, autoRy: boolean = false): sp.Skeleton {
        let spine: sp.Skeleton;

        if (spinePool.size() > 1) {
            spine = spinePool.get().getComponent(sp.Skeleton);
            spine.skeletonData = resource;
            if (autoRy) {
                addToAutoRecycle(spine);
            }
            return spine;
        }
        spine = new cc.Node().addComponent(sp.Skeleton);

        allSpineList.push(spine);
        spine.premultipliedAlpha = false;
        spine.loop = false;
        // 播放完成监听
        spine.setCompleteListener(function () {
            // 播放完成回调-只回调一次
            if (completeCallBackMap[spine.uuid]) {
                completeCallBackMap[spine.uuid]();
                completeCallBackMap[spine.uuid] = null;
            }
            const index: number = recycleOnCompleteList.indexOf(spine);
            if (index >= 0) {
                recycleSpine(recycleOnCompleteList[index]);
                // recycleOnCompleteList.splice(index, 1)
            }
        });
        spine.skeletonData = resource;

        // spine.attachUtil.generateAllAttachedNodes()
        if (autoRy) {
            addToAutoRecycle(spine);
        }
        return spine;
    }

    export function addToAutoRecycle(spine: sp.Skeleton) {
        if (recycleOnCompleteList.indexOf(spine) < 0) {
            recycleOnCompleteList.push(spine);
        }
    }
    /** 回收进入对象池 */
    export function recycleSpine(spine: sp.Skeleton) {
        if (spine) {
            spine.node.name = '';
            spine.node.parent = null;
            completeCallBackMap[spine.uuid] = null;
            spine.node.setPosition(cc.v2(0, 0));
            spine.node.angle = 0;
            spine.node.scale = 1;
            spine.node.opacity = 255;
            spinePool.put(spine.node);

            const index: number = recycleOnCompleteList.indexOf(spine);
            if (index >= 0) {
                recycleOnCompleteList.splice(index, 1);
            }
        }
    }

    export function recycleNode(node: cc.Node) {
        if (node && node.getComponent(sp.Skeleton)) {
            recycleSpine(node.getComponent(sp.Skeleton));
        }
    }

    /** 清除回收 */
    export function recycleAll() {
        recycleOnCompleteList.length = 0;
        completeCallBackMap = {};
        for (let i = 0; i < allSpineList.length; i++) {
            if (allSpineList[i].node.parent) {
                recycleSpine(allSpineList[i]);
            }
        }
    }
}
export default SpineEffectMgr;
