import { LoadManager } from './LoadManager'

export const itemMapPool: cc.NodePool = new cc.NodePool()
export namespace FlyGemStone {
    export function flyGemStone(url, initPos, midPos, endPos, parent) {
        const item: cc.Node = getGemSton(url, parent)
        LoadManager.setSpriteFrame(item.getComponent(cc.Sprite), url)

        const points = [
            cc.v2(initPos.x, initPos.y),
            cc.v2(midPos.x, midPos.y),
            // cc.v2(initPos.x - (300 + Math.random() * 100), initPos.y + 300 + Math.random() * 100),
            cc.v2(endPos.x, endPos.y)
        ]
        const action = cc.bezierTo(0.5, points) // .easing(cc.easeIn(1.2))
        item.scale = 1
        item.setPosition(points[0])
        item.stopAllActions()
        item.runAction(
            cc.sequence(
                cc.spawn(cc.rotateBy(0.5, -360), action),
                cc.callFunc(() => {
                    // this.coins.put(coin)
                    // item.parent = null
                    itemMapPool.put(item)
                }, this)
            )
        )
    }

    export function getGemSton(url, parent) {
        let item: cc.Node
        if (itemMapPool.size() > 0) {
            item = itemMapPool.get()
            LoadManager.setSpriteFrame(item.getComponent(cc.Sprite), url)
            return item
        }

        item = new cc.Node()
        item.addComponent(cc.Sprite)
        parent.addChild(item)
        LoadManager.setSpriteFrame(item.getComponent(cc.Sprite), url)
        return item
    }
}
