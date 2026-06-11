/* eslint-disable no-unused-vars */

import { PBEnums } from '../../hogame/proto/PBEnums'

export enum ReportKey {
    BetCode = 'betCode',
    BetResultError = 'betResultError',
    Rank = 'rank',
    Record = 'record'
}

export enum ReportCode {
    Code0 = 0, // 成功或常规错误(如不在下注阶段，货币不足等)（后端列出code）
    Code1 = 1, // 其他异常
    Code2 = 2 // 未收到返回包(后端配置时长)
}

export default class Report {
    /**
     * 鹰眼上报
     * @param event
     * @param value
     */
    static ReportEvent(event: string, code: number = 0, time: number = 0, currency: number = 0, param: string = '') {
        //gea.net.send(PBEnums.Req_ReportMetrics, { event: event, code: code, time: time, currency: currency, param: param, sequence: Date.now() })
    }

    /**
     * 语音房，来源上报
     */
    static ReportCid() {
        const reportFunc = (cid: string, voiceRoomData: string) => {
            if (window.hg && hg.getOpenScene) {
                hg.getOpenScene({
                    callback: function (data) {
                        let openScene = 0
                        let from = ''
                        if (data) {
                            openScene = data.openScene
                            from = data.from
                            gea.log('getOpenScene:', data.openScene, data.from)
                        }
                        //gea.net.send(PBEnums.Req_Cid, { cid: cid, voiceRoomData: voiceRoomData, openScene: openScene, from: from, sequence: Date.now() })
                    }
                })
            } else {
                //gea.net.send(PBEnums.Req_Cid, { cid: cid, voiceRoomData: voiceRoomData, openScene: 0, from: '', sequence: Date.now() })
            }
        }

        // 语音房上报
        if (window.hg && window.hg.getCurVoiceRoomData) {
            hg.getCurVoiceRoomData({
                callback: function (data) {
                    let curCid: string = ''
                    let voiceRoomData: string = ''
                    if (data && data.roomId && data.roomId !== '') {
                        curCid = data.roomId
                        voiceRoomData = JSON.stringify(data)
                    }
                    reportFunc(curCid, voiceRoomData)
                }
            })
        } else {
            reportFunc('', '')
        }
    }
}
