import { pbm } from '../../hogame/proto/pb';

export default class Utils {
    /**
     * @param minWidth 若纹理宽度小于该值，则将节点等比缩放到该宽度（仅当传入时生效）
     */
    static loadLevelRewardTexture(url: string, sprite: cc.Sprite, minWidth?: number): void {
        if (url && cc.isValid(sprite)) {
            Utils.loadSpriteFrameRemote(url, sprite, minWidth);
        }
    }

    static loadSpriteFrameRemote(url: string, sprite: cc.Sprite, minWidth?: number) {
        hogame.utils.res.getFrameFromRemote(
            url,
            (texture: cc.Texture2D, originUrl: string): void => {
                if (cc.isValid(sprite) && originUrl === url) {
                    sprite.spriteFrame = new cc.SpriteFrame(texture);
                    Utils.applySpriteMinWidthIfNeeded(sprite, texture, minWidth);
                }
            },
            this,
            sprite.node.width,
            sprite.node.height,
        );
    }

    /** 宽度小于 minWidth 时等比放大至宽度为 minWidth；否则恢复为 scale 1（仅在与 minWidth 配合使用时调用） */
    private static applySpriteMinWidthIfNeeded(sprite: cc.Sprite, texture: cc.Texture2D, minWidth: number | undefined): void {
        if (minWidth == null || minWidth <= 0 || !cc.isValid(sprite)) {
            return;
        }
        const w = texture.width;
        if (w <= 0) {
            return;
        }
        if (w < minWidth) {
            const s = minWidth / w;
            sprite.node.scaleX = s;
            sprite.node.scaleY = s;
        } else {
            sprite.node.scaleX = 1;
            sprite.node.scaleY = 1;
        }
    }

    static isResourceValid(resource: pbm.IResource): boolean {
        return resource.url && resource.url.length > 0 && resource.url.endsWith('.png');
    }
}
