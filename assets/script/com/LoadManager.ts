export const atlasList: { [key: string]: cc.SpriteAtlas } = {}
export const loadCallBackMap: object = {}
export const loadSpriteFrameMap: object = {}
export const spriteFrameMap: object = {}
export const skeletonMap: object = {}
export const prefabMap: object = {}
export const HorseFrameNum: any = { idle: 21, run: 19, wait: 33 }

export namespace LoadManager {
    let preLoadResLenMax = 0
    let preCount = 0
    let progressCallbackFun: Function
    let progressCallbackObj: any
    export function initPreLoadResLen(len) {
        preLoadResLenMax = len
    }
    export function setProgressCallback(callbackFun, callbackObj) {
        progressCallbackFun = callbackFun
        progressCallbackObj = callbackObj
    }
    export function hoLoadRes(url, resType, callbackFun, callbackObj) {
        cc.loader.loadRes(url, resType, (error, asset) => {
            if (error) {
                gea.error('preLoad res error', url, error)
            }
            preCount++
            if (callbackFun && callbackObj) {
                callbackFun.call(callbackObj, url, asset)
            }
            progressCallbackFun.call(progressCallbackObj, preLoadResLenMax === 0 ? 100 : Math.floor((preCount / preLoadResLenMax) * 100))
        })
    }
    export function loadAtlas(lst: any = null, completeCallBakc: Function = null, completeOneCallBack: Function = null): void {
        // if (lst == null) {
        //     lst = loadAtlasList
        // }
        if (lst && lst.length > 0) {
            // 开始加载
            const needs = []
            for (let i = 0; i < lst.length; i++) {
                if (atlasIsLoad(lst[i]) !== true) {
                    needs.push(lst[i])
                }
            }
            lst = needs
            if (lst.length <= 0) {
                if (completeCallBakc != null) {
                    completeCallBakc()
                }
                return
            }

            // 保存相同加载的回调。避免重复加载 -- 只处理1个加载内容的
            if (lst.len === 1) {
                const arr: any[] = loadCallBackMap[lst[0]]
                if (arr && arr.length > 0) {
                    if (arr.indexOf(completeCallBakc) < 0) {
                        arr.push(completeCallBakc)
                    }
                    return
                } else {
                    loadCallBackMap[lst[0]] = [completeCallBakc]
                }
            }

            cc.loader.loadResArray(
                lst,
                <any>cc.SpriteAtlas,
                (completedCount, totalCount, item) => {
                    // progress(completedCount, totalCount, item)
                    if (completeOneCallBack) {
                        completeCallBakc(item)
                    }
                    // atlasList.push(<cc.SpriteAtlas>item);
                },
                (errors, results) => {
                    let hasCallBack = false
                    for (const i in results) {
                        const item = results[i]
                        const key = item.name.replace('.plist', '')
                        atlasList[key] = item

                        const arr: any[] = loadCallBackMap[key]
                        if (arr && arr.length > 0) {
                            for (let j = 0; j < arr.length; j++) {
                                arr[j](errors, results)
                                if (arr[j] === completeCallBakc) {
                                    hasCallBack = true
                                }
                            }
                        }
                        delete loadCallBackMap[key]
                    }
                    if (completeCallBakc != null && !hasCallBack) {
                        completeCallBakc(errors, results)
                    }
                    // complete(errors, results)
                    // atlasList = results;
                }
            )
        }
    }
    /** 是否加载了 */
    export function atlasIsLoad(url: string): boolean {
        const index = url.lastIndexOf('/')
        let key = url
        if (index > 0) {
            key = url.slice(index + 1)
        }
        return atlasList[key] != null
    }
    export function getHorseFrameNum(ani: string) {
        return HorseFrameNum[ani]
    }
    export function getAtlas(url) {
        return atlasList[url]
    }

    const spritePathMap: {} = {}
    export function setSpriteFrame(sprite: cc.Sprite, patch: string) {
        spritePathMap[sprite.node.uuid] = patch
        if (spriteFrameMap[patch]) {
            sprite.spriteFrame = spriteFrameMap[patch]
            return
        } else {
            const arr: any[] = loadSpriteFrameMap[patch]
            if (arr && arr.length > 0) {
                if (arr.indexOf(sprite) < 0) {
                    arr.push(sprite)
                }
                return
            } else {
                loadSpriteFrameMap[patch] = [sprite]
            }

            cc.loader.loadRes(patch, cc.SpriteFrame, (error: Error, res: cc.SpriteFrame): void => {
                if (!error) {
                    spriteFrameMap[patch] = res
                    if (isValid(sprite) && spritePathMap[sprite.node.uuid] === patch) {
                        sprite.spriteFrame = spriteFrameMap[patch]
                    }
                    const arr: any[] = loadSpriteFrameMap[patch]
                    if (arr && arr.length > 0) {
                        for (let j = 0; j < arr.length; j++) {
                            if (isValid(arr[j])) {
                                arr[j].spriteFrame = spriteFrameMap[patch]
                            }
                        }
                    }

                    delete loadSpriteFrameMap[patch]
                }
            })
        }
    }

    export function setSpriteFrameRemote(sprite: cc.Sprite, patch: string) {
        spritePathMap[sprite.node.uuid] = patch
        if (spriteFrameMap[patch]) {
            sprite.spriteFrame = spriteFrameMap[patch]
            // // @ts-ignore 私有方法
            // sprite._applySpriteFrame()
            return
        } else {
            const arr: any[] = loadSpriteFrameMap[patch]
            if (arr && arr.length > 0) {
                if (arr.indexOf(sprite) < 0) {
                    arr.push(sprite)
                }
                return
            } else {
                loadSpriteFrameMap[patch] = [sprite]
            }
        }

        hogame.utils.res.getFrameFromRemote(
            patch,
            (texture: cc.Texture2D, originUrl: string): void => {
                if (isValid(sprite) && originUrl === patch) {
                    spriteFrameMap[patch] = new cc.SpriteFrame(texture)
                    if (spritePathMap[sprite.node.uuid] === patch) {
                        sprite.spriteFrame = spriteFrameMap[patch]
                    }
                    const arr: any[] = loadSpriteFrameMap[patch]
                    if (arr && arr.length > 0) {
                        for (let j = 0; j < arr.length; j++) {
                            if (isValid(arr[j])) {
                                arr[j].spriteFrame = spriteFrameMap[patch]
                            }
                        }
                    }

                    delete loadSpriteFrameMap[patch]
                }
            },
            this,
            sprite.node.width,
            sprite.node.height
        )
    }

    export function isValid(sprite: cc.Sprite): boolean {
        if (sprite) {
            if (cc.isValid(sprite, true)) {
                return true
            }
        }
        return false
    }

    export function removeSpriteSet(sprite: cc.Sprite, patch: string) {
        const arr: any[] = loadSpriteFrameMap[patch]
        if (arr && arr.length > 0) {
            if (arr.indexOf(sprite) >= 0) {
                arr.splice(arr.indexOf(sprite), 1)
            }
        }
        spritePathMap[sprite.node.uuid] = null
    }

    const spinePathMap: {} = {}
    export function loadSkeleton(path: string, spineNode: cc.Node, complete: Function) {
        spinePathMap[spineNode.uuid] = path
        if (skeletonMap[path]) {
            if (complete) {
                complete(skeletonMap[path])
            }
        } else {
            cc.loader.loadRes(path, sp.SkeletonData, (error: Error, resource: sp.SkeletonData): void => {
                if (error) {
                    gea.error(error.stack)
                } else {
                    skeletonMap[path] = resource

                    if (spineNode.uuid != null) {
                        if (spinePathMap[spineNode.uuid] === path) {
                            if (complete) {
                                complete(resource)
                            }
                        }
                    }
                }
            })
        }
    }

    export function checkPrefab(path) {
        return prefabMap[path] && prefabMap[path] != null
    }
    export function loadPrefab(path, complete = null) {
        // 预加载
        if (prefabMap[path]) {
            if (complete) {
                complete(prefabMap[path])
            }
            return
        }
        cc.loader.loadRes(
            path,
            cc.Prefab,
            (completeCount: number, totalCount: number, item: cc.Asset): void => {
                prefabMap[path] = item
                if (complete) {
                    complete(item)
                }
            },
            (_error: Error): void => { }
        )
    }
    // -------------------------------------------------------
}
