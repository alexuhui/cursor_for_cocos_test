export const atlasList: { [key: string]: cc.SpriteAtlas } = {}
export let preLoadList = []
export const isOnLoad = false
export namespace HorseFrameManager {
    export function toPreLoad(list) {
        preLoadList = list
    }
}
