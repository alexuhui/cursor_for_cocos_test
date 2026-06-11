import Audios from './Audios'
import SpineEffectMgr from './SpineEffectMgr'

namespace FlyItemEffMgr {
    let tuoweiPrefab: cc.Prefab
    export function onBombReward(parentNode: cc.Node, stPos: cc.Vec2, target: cc.Node, tuoweiFab: cc.Prefab, callBack: Function) {
        tuoweiPrefab = tuoweiFab
        const startPos: cc.Vec2 = parentNode.convertToNodeSpaceAR(stPos)

        const endPos: cc.Vec2 = parentNode.convertToNodeSpaceAR(target.convertToWorldSpaceAR(cc.v2(0, 0)))

        // let bzierConfig: cc.Vec2[]

        // if (Math.random() * 10 > 5) {
        const bzierConfig = [cc.v2(startPos.x, startPos.y), cc.v2(endPos.x, startPos.y + 500), endPos]
        // }
        // else {
        //     //右上曲线
        //     bzierConfig = [
        //         cc.v2(startPos.x + (endPos.x - startPos.x) / 5 * 3, startPos.y - (startPos.y - endPos.y) / 3),
        //         cc.v2(startPos.x + (endPos.x - startPos.x) / 5 * 4, startPos.y - (startPos.y - endPos.y) * 2 / 3),
        //         endPos,
        //     ]
        // }

        const moveTime: number = startPos.sub(endPos).mag() / 600
        const bezier: cc.ActionInterval = cc.bezierTo(moveTime, bzierConfig).easing(cc.easeSineInOut())
        // const bezier2: cc.ActionInterval = cc.bezierTo(moveTime, bzierConfig.concat()).easing(cc.easeSineInOut())

        const particle: cc.ParticleSystem = this.getTuoWeiParticle()
        parentNode.addChild(particle.node)
        particle.resetSystem()
        particle.node.setPosition(startPos)
        // skill = GameEnum.SKILL.double

        particle.node.runAction(
            cc.sequence(
                bezier,
                cc.callFunc(function () {
                    particle.stopSystem()
                    SpineEffectMgr.showOneEff(parentNode, SpineEffectMgr.BOOM_EF, 'feedback_get_free_times', false, endPos, null)
                    callBack()
                    Audios.play('slot_coin_2')
                    // }.bind(this), null, true)
                }),
                cc.delayTime(1),
                cc.callFunc(function () {
                    flyParticlePool.put(particle.node)
                })
            )
        )

        // //拖尾

        // let streak: cc.MotionStreak = this.getMotisonStreak()
        // streak.fadeTime = moveTime * 0.85
        // this.effectNode.addChild(streak.node)
        // streak.node.setPosition(startPos)
        // // streak.node.runAction(cc.sequence(cc.moveTo(moveTime, endPos).easing(cc.easeSineInOut()), cc.delayTime(1), cc.callFunc(function () {
        // streak.node.runAction(cc.sequence(bezier2, cc.delayTime(1), cc.callFunc(function () {
        //     this._motisonStreakPool.put(streak.node)
        // }.bind(this))))
    }

    const flyParticlePool: cc.NodePool = new cc.NodePool()
    export function getTuoWeiParticle(): cc.ParticleSystem {
        if (flyParticlePool.size() > 0) {
            const particle: cc.ParticleSystem = flyParticlePool.get().getComponent(cc.ParticleSystem)

            return particle
        }

        flyParticlePool.put(cc.instantiate(tuoweiPrefab))
        return flyParticlePool.get().getComponent(cc.ParticleSystem)
    }
    // let _motisonStreakPool: cc.NodePool = new cc.NodePool()
    // export function getMotisonStreak(): cc.MotionStreak {
    //     if (this._motisonStreakPool.size() > 0) {
    //         let particle: cc.MotionStreak = this._motisonStreakPool.get().getComponent(cc.MotionStreak)

    //         return particle
    //     }

    //     this._motisonStreakPool.put(cc.instantiate(this.tuoweiStreakPrefab))
    //     return this._motisonStreakPool.get().getComponent(cc.MotionStreak)
    // }
}

export default FlyItemEffMgr
