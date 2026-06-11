import Language from './Language';

const { ccclass, property } = cc._decorator;
/** 自动转换多语言图片 */
@ccclass
export default class LangTranPic extends cc.Component {

    @property
    picNameTxt: string = '';

    @property
    themeName: string = '';

    start() {
        this.node.getComponent(cc.Sprite).spriteFrame = null;
        if (this.picNameTxt == null || this.picNameTxt === '') {
            this.picNameTxt = this.node.name;
        }
        Language.tranPicTxt(this.picNameTxt, this.node);
    }
}
