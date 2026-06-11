export default class ImageLoader {
    private static readonly TAG = 'ImageLoader';

    /**
     * 加载本地图片
     * @param path 注意路径里面不要包含图片后缀，如：texture/ui/btn_off.png 需要改成 texture/ui/btn_off
     * @param sprite
     * @param onComplete
     */
    public static loadLocal(path: string, sprite: cc.Sprite, onComplete?: (success: boolean) => void) {
        ImageLoader.loadAsset<cc.SpriteFrame>(path, cc.SpriteFrame, (error, asset) => {
            if (error) {
                onComplete?.(false);
                return;
            }

            if (this.isValid(sprite)) {
                sprite.spriteFrame = asset;
                onComplete?.(true);
            } else {
                onComplete?.(false);
            }
        });
    }

    static loadAsset<T extends cc.Asset>(path: string, type: typeof cc.Asset, onComplete: (error: Error, asset: T) => void): void {
        if (this.isNullOrEmpty(path)) {
            onComplete(new Error('Path is invalid.'), null);
            return;
        }

        cc.resources.load(path, type, onComplete);
    }

    /**
     * 加载远程图片
     * @param url
     * @param sprite
     * @param onComplete
     */
    public static loadRemote(url: string, sprite: cc.Sprite, onComplete?: (success: boolean) => void) {
        if (this.isNullOrEmpty(url)) {
            onComplete?.(false);
            return;
        }

        if (!this.isValid(sprite)) {
            onComplete?.(false);
            return;
        }

        const originWidth = sprite.node.width;
        const originHeight = sprite.node.height;

        hogame.utils.res.getFrameFromRemote(
            url,
            (texture, originUrl) => {
                if (url === originUrl && texture != null) {
                    if (!this.isValid(sprite)) {
                        onComplete?.(false);
                        return;
                    }
                    const spriteFrame = new cc.SpriteFrame(texture);
                    const size = spriteFrame.getOriginalSize();
                    sprite.spriteFrame = spriteFrame;

                    const assetWidth = size.width;
                    const assetHeight = size.height;

                    if (assetWidth == 0 || assetHeight == 0) {
                        gea.error(`${ImageLoader.TAG} loadRemote asset size is 0, url: ${url}, size: ${size}`);
                        onComplete?.(false);
                        return;
                    }

                    const scale = Math.min(originWidth / assetWidth, originHeight / assetHeight);

                    sprite.node.width = Math.floor(assetWidth * scale);
                    sprite.node.height = Math.floor(assetHeight * scale);
                    onComplete?.(true);
                } else {
                    onComplete?.(false);
                }
            },
            this,
            originWidth,
            originHeight,
        );
    }

    private static isValid(sprite: cc.Sprite): boolean {
        return sprite && cc.isValid(sprite, true);
    }

    private static isNullOrEmpty(value: string | any[]): boolean {
        return value == null || value.length === 0;
    }
}
