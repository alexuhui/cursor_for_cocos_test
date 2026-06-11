import Language from './Language';

const { ccclass } = cc._decorator;

@ccclass
export default class ComFun {
    static unitNames = ['', 'K', 'M', 'B', 'T', 'Q'];

    /**
     * 格式化数字为带单位字符串，如100000000 -> 100M
     * @param num 数字
     * @param bDot 小数点前保留位数
     * @param fDot 小数点后保留位数
     * @param strLenMax 最大长度
     * @param effectiveMin 有效最小值
     * @param removeTrailingZeros 是否移除末尾的0
     * @returns 带单位字符串
     */
    static getUnitedNumStr(
        num: number,
        bDot: number = 3,
        fDot: number = 2,
        strLenMax: number = -1,
        effectiveMin: number = 100000000,
        removeTrailingZeros: boolean = false,
    ): string {
        let s = num.toString();
        if (effectiveMin === -1 || Math.floor(num) < effectiveMin) {
            return this.formatNumWithComma(num);
        }
        const eIndex = s.indexOf('e');
        let dotIndex = s.indexOf('.');
        let unit = ComFun.unitNames[0];
        let unitIndex = 0;
        let eAddUintIndex = 0;
        if (eIndex !== -1) {
            // 科学计数法表示的数字
            const eNum = parseInt(s.slice(eIndex + 2, s.length)) - (bDot + fDot - 1);
            eAddUintIndex = Math.floor(eNum / 3);
            s = s.slice(0, eIndex);
            num = parseFloat(s) * Math.pow(10, bDot + fDot - 1 + (eNum % 3));
            s = num.toString();
            dotIndex = s.indexOf('.');
            s = s.slice(0, dotIndex); // 删除小数点后数字
        } else if (dotIndex !== -1) {
            // 有小数点
            s = s.slice(0, dotIndex); // 删除小数点后数字
        }
        const s_len = s.length;
        if (s_len > 3) {
            const i = Math.floor((s_len - 1 - (bDot - 3)) / 3); // 小数点前最多保留bDot位【bDot>=3】
            unitIndex = i;
            const f_dot = s.slice(0, s_len - unitIndex * 3);
            let b_dot = s.slice(s_len - unitIndex * 3, s_len - unitIndex * 3 + fDot); // 小数点后fDot位
            if (removeTrailingZeros) {
                b_dot = b_dot.replace(/0+$/, '');
            }
            s = b_dot === '' ? f_dot : f_dot + '.' + b_dot;
        }
        if (s === '') {
            s = '0';
        }
        unit = ComFun.unitNames[unitIndex + eAddUintIndex];
        let unitedStr = s + unit;
        if (strLenMax !== -1 && unitedStr.length > strLenMax) {
            s = s.slice(0, strLenMax - unit.length);
            if (s.indexOf('.') === s.length - 1) {
                // 截断后，小数点在最后一位，则再多截一位
                s = s.slice(0, s.length - 1);
            }
            unitedStr = s + unit;
        }
        return unitedStr;
    }

    static formatTimeStr(time): string {
        // time(s)
        const h = Math.floor(time / 3600);
        const m = Math.floor((time - 3600 * h) / 60);
        const s = time - 3600 * h - 60 * m;
        const str = (h <= 9 ? '0' + h : h) + ':' + (m <= 9 ? '0' + m : m) + ':' + (s <= 9 ? '0' + s : s);
        return str;
    }

    static formatTimeStr2(time): string {
        // time(s)
        const str = new Date(time * 1000).toLocaleString().replace(/:\d{1,2}$/, ' ');
        return str;
    }

    static add0(m) {
        return m < 10 ? '0' + m : m;
    }

    static formatTimeStr3(time) {
        // time(s)
        const date = new Date(time * 1000);
        const y = date.getFullYear();
        const m = date.getMonth() + 1;
        const d = date.getDate();
        const h = date.getHours();
        const mm = date.getMinutes();
        const s = date.getSeconds();
        return y + '-' + this.add0(m) + '-' + this.add0(d) + ' ' + this.add0(h) + ':' + this.add0(mm) + ':' + this.add0(s);
    }

    static toUnixSeconds(time: number | { toNumber?: () => number; low?: number; high?: number }) {
        if (time == null) {
            return 0
        }
        let ts = typeof time === 'number' ? time : Number(time)
        if (typeof time === 'object' && time != null) {
            if (typeof time.toNumber === 'function') {
                ts = time.toNumber()
            } else if (time.low != null) {
                ts = (time.high || 0) * 0x100000000 + (time.low >>> 0)
            }
        }
        if (ts > 9999999999) {
            ts = Math.floor(ts / 1000)
        }
        return ts
    }

    static formatTimeStrRecord(time: number | { toNumber?: () => number; low?: number; high?: number }) {
        const date = new Date(this.toUnixSeconds(time) * 1000)
        const y = date.getFullYear()
        const m = date.getMonth() + 1
        const d = date.getDate()
        const h = date.getHours()
        const mm = date.getMinutes()
        const s = date.getSeconds()
        return y + '.' + this.add0(m) + '.' + this.add0(d) + '     ' + this.add0(h) + ':' + this.add0(mm) + ':' + this.add0(s)
    }

    static getRemainSecondOfToday(time: number) {
        return new Date(time).setHours(23, 59, 59, 999);
    }

    static formatTimeStr4(time: number, needS: boolean = true): string {
        // time(s)
        const d = Math.floor(time / 86400);
        const h = Math.floor((time - 86400 * d) / 3600);
        const m = Math.floor((time - 86400 * d - 3600 * h) / 60);
        const s = time - 86400 * d - 3600 * h - 60 * m;
        let str = h + ' ' + Language.tran('hours') + ' ' + m + ' ' + Language.tran('min');
        if (needS) {
            str = str + ' ' + s + ' ' + 's';
        }
        if (d > 0) {
            str = d + ' ' + Language.tran('days') + ' ' + str;
        }
        return str;
    }

    // 截取字符串宽度
    static utfSubLen(str: string, maxWid) {
        if (!str) {
            return '';
        }
        let subStr = str;
        const strLen = str.length;
        let wid = 0;
        for (let i = 0; i < strLen; i++) {
            const charCode = str.charCodeAt(i);
            if (charCode <= 0x7f) {
                wid += 1;
            } else if (charCode >= 0xd800 && charCode <= 0xdbff) {
                wid += 2;
                i += 1;
            } else {
                wid += 2;
            }
            if (wid >= maxWid - 2) {
                subStr = str.slice(0, i + 1) + '...';
                break;
            }
        }

        subStr = subStr.replace(/\\n|\n/g, '＼n');
        subStr = subStr.replace(/\\t|\t/g, '＼t');
        return subStr;
    }

    // static utfSubLen2(str: string, maxWid: number) {
    //     let strArray = [...str]
    //     let len = strArray.length
    //     if (len > maxWid) {
    //         strArray = strArray.slice(0, maxWid)
    //         return strArray.join('') + '...'
    //     }
    //     return str
    // }

    static disorderArray(arr: number[]) {
        const len = arr.length;
        for (let i = 0; i < len; i++) {
            const rand = Math.floor(Math.random() * len);
            [arr[i], arr[rand]] = [arr[rand], arr[i]];
        }
    }

    /** 格式化字符串,逗号分隔 */
    static formatNumWithComma(num: number): string {
        const list: string[] = num.toString().split('');
        const len: number = list.length - 3;
        for (let i: number = len; i > 0; i -= 3) {
            list.splice(i, 0, ',');
        }
        return list.join('');
    }

    static dateFormatByDateline(dateline, fmt = '') {
        const date: Date = new Date(dateline);
        const year = String(date.getFullYear());
        fmt = fmt || 'YYYY/MM/DD';
        const _complete = function (n) {
            return n > 9 ? String(n) : '0' + n;
        };

        const month = _complete(date.getUTCMonth() + 1);
        const day = _complete(date.getDate());

        let result = String(fmt);
        result = result.replace('YYYY', year);
        result = result.replace('MM', month);
        result = result.replace('DD', day);
        return result;
    }

    static getLocalStorageData(key: string) {
        let allData = [];
        try {
            const str = cc.sys.localStorage.getItem(key);
            gea.info('getLocalStorageData', str);
            allData = JSON.parse(str) || [];
        } catch (e) {
            gea.error('popWind decode error!', '\ndata:' + JSON.stringify(cc.sys.localStorage.getItem(key)), '\n' + e.stack);
        }

        let uid_data = [];
        for (let i = 0; i < allData.length; i++) {
            if (allData[i] && allData[i].uid == hogame.config.uid) {
                uid_data = allData[i].data;
                break;
            }
        }

        gea.info('getLocalStorageData', key, allData, uid_data);
        return uid_data;
    }

    static setLocalStorageData(key: string, uid_data: any) {
        let allData = [];
        try {
            allData = JSON.parse(cc.sys.localStorage.getItem(key)) || [];
        } catch (e) {
            gea.error('popWind decode error!', '\ndata:' + JSON.stringify(cc.sys.localStorage.getItem(key)), '\n' + e.stack);
        }

        let isUpdate = false;
        for (let i = 0; i < allData.length; i++) {
            if (allData[i] && allData[i].uid == hogame.config.uid) {
                isUpdate = true;
                allData[i] = { uid: hogame.config.uid, data: uid_data };
                break;
            }
        }

        if (!isUpdate) {
            allData.push({ uid: hogame.config.uid, data: uid_data });
        }

        gea.info('setLocalStorageData', key, allData, uid_data);
        cc.sys.localStorage.setItem(key, JSON.stringify(allData));
    }

    static ToBase64(u8) {
        return btoa(String.fromCharCode.apply(null, u8));
    }

    static FromBase64(str) {
        return atob(str)
            .split('')
            .map(function (c) {
                return c.charCodeAt(0);
            });
    }

    static decodeBizWebNotify(data: string = '', decoder: any) {
        const buffer = ComFun.FromBase64(data);
        const decode = decoder.decode(buffer);
        return decode;
    }

    static forceUpdateLabel(lable: cc.Label) {
        if (!lable) {
            return;
        }
        if (lable['_updateRenderData']) {
            lable['_updateRenderData'](true);
        } else if (lable['_forceUpdateRenderData']) {
            lable['_forceUpdateRenderData']();
        }
    }

    static limitLabelWidth(label: cc.Label, content: string, maxWidth: number) {
        if (!label) {
            return;
        }
        label.overflow = cc.Label.Overflow.NONE;
        label.string = content;
        ComFun.forceUpdateLabel(label);
        if (label.node.width > maxWidth) {
            label.node.width = maxWidth;
            label.overflow = cc.Label.Overflow.SHRINK;
        }
    }

    static limitLabelMinWidth(label: cc.Label, content: string, minWidth: number) {
        if (!label) {
            return;
        }
        label.overflow = cc.Label.Overflow.NONE;
        label.string = content;
        ComFun.forceUpdateLabel(label);
        if (label.node.width < minWidth) {
            label.node.width = minWidth;
            label.overflow = cc.Label.Overflow.SHRINK;
        }
    }
}
