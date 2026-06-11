import { ExllangTableProvider } from '../../hogame/excelData/ExllangTable';

namespace Language {
    /** 多语言表加载完成后 dispatch，供 LangTranStr 等刷新 */
    export const EVENT_LOAD_SUCCESS = 'Language.loadSuccess';
    let _language: string;
    let _voiceLang: string;
    /**
     * 获取语言码
     * @param debugLanguage 调试时候设置的语言，app上不会用到
     * @param defaultLang 默认语言,当获取到的语言码在`filters`中不存在时返回
     * @param filters 指定游戏支持的多语言列表  , 'id', 'hi', 'vi'
     */
    export function getLanguage(
        debugLanguage: string = 'en-us',
        defaultLang: string = 'en-us',
        supports: string[] = ['ar', 'en-us', 'hi', 'id', 'pt-br', 'th', 'vi'],
    ): string {
        if (_language) {
            return _language;
        }
        if (window.hg) {
            defaultLang = hg.getSystemInfoSync().language;
            _language = defaultLang;
        } else {
            defaultLang = debugLanguage;
        }

        if (supports.indexOf(defaultLang) !== -1) {
            return defaultLang;
        } else {
            gea.warn(`${defaultLang}'不受当前游戏支持，将使用'en-us'做为语言码返回`);
            if (_language) {
                _language = 'en-us';
            }
            return 'en-us';
        }
    }

    export function getLanguageWithAlias() {
        let lang = getLanguage();

        if (lang === 'en-us') {
            return 'en';
        }

        if (lang === 'pt-br') {
            return 'pt';
        }

        return lang;
    }

    export function tran(key: string, ...args) {
        if (!ExllangTableProvider.getById(key)) {
            return key;
        }
        let hago_lang: string = getLanguage();
        hago_lang = hago_lang.replace(/-/g, '_');
        let method: Function = ExllangTableProvider[hago_lang];
        if (method == null) {
            method = ExllangTableProvider.en_us;
        }
        let str = method(key);
        // 如果当前语言没有翻译，尝试使用en-us
        if (!str || str === '') {
            str = ExllangTableProvider.en_us(key);
        }

        let formatStr: string = str;
        args.forEach((str: string, index: number): void => {
            formatStr = formatStr.replace('{' + index + '}', str);
        });
        formatStr = formatStr.replace(/\\n/g, '\n');
        return formatStr;
    }

    export function tranPicTxt(picName: string, sp: cc.Node, callBack: Function = null) {
        const hago_lang: string = getLanguage(); // this.hago_sysInfo ? this.hago_sysInfo.language : 'id'
        const url = 'local/' + hago_lang + '/' + picName;
        cc.loader.loadRes(url, cc.SpriteFrame, (error, asset) => {
            if (error) {
                return;
            }
            if (sp) {
                sp.getComponent(cc.Sprite).spriteFrame = asset;
                if (callBack) {
                    callBack();
                }
            }
        });
    }

    export function tranStringTxt(keyName: string, sp: cc.Node, ...args) {
        sp.getComponent(cc.Label).string = Language.tran(keyName, args);
    }
    export function tranStringRicTxt(keyName: string, sp: cc.Node, ...args) {
        sp.getComponent(cc.RichText).string = Language.tran(keyName, args);
    }

    export function tranStringTxtToUpperCase(keyName: string, sp: cc.Node, ...args) {
        sp.getComponent(cc.Label).string = Language.tran(keyName, args).toLocaleUpperCase();
    }
    export function tranStringRicTxtToUpperCase(keyName: string, sp: cc.Node, ...args) {
        sp.getComponent(cc.RichText).string = Language.tran(keyName, args).toLocaleUpperCase();
    }

    // 是否阿拉伯语
    export function isAR() {
        return getLanguage() === 'ar';
    }

    // 获取语音音效
    export function getVoiceLanguage(
        debugLanguage: string = 'en-us',
        defaultLang: string = 'en-us',
        supports: string[] = ['en-us', 'ru', 'hi', 'pt-br', 'ar'],
    ): string {
        if (_voiceLang) {
            return _voiceLang;
        }
        if (window.hg) {
            defaultLang = hg.getSystemInfoSync().language;
            _voiceLang = defaultLang;
        } else {
            defaultLang = debugLanguage;
        }

        if (supports.indexOf(defaultLang) !== -1) {
            return defaultLang;
        } else {
            gea.warn(`${defaultLang}'不受当前游戏支持，将使用'en-us'做为语言码返回`);
            if (_voiceLang) {
                _voiceLang = 'en-us';
            }
            return 'en-us';
        }
    }

    export function getItemName(multi_name: string) {
        let name = '';
        if (multi_name !== '') {
            const multiName = JSON.parse(multi_name);

            let hago_lang: string = getLanguage();
            if (hago_lang === 'en-us') {
                hago_lang = 'en';
            } else if (hago_lang === 'pt-br') {
                hago_lang = 'pt';
            }
            name = (multiName && multiName[hago_lang]) || multiName['en'];
        }

        name = name || '';

        return name;
    }
}

export default Language;
