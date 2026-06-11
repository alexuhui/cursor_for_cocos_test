export class HiddoMgr {
    public static reportHiddo(hiddoEventMap: object, eventId: string) {
        if (!window['hg'] || !hg['reportHiddo']) {
            return;
        }

        if (!hiddoEventMap) {
            return;
        }

        // ------公共字段------

        // room_id
        hiddoEventMap['room_id'] = HiddoMgr.getRoomID();
        // gid
        hiddoEventMap['gid'] = hogame.config.gameId;
        // gid_ver
        hiddoEventMap['gid_ver'] = hg.getSystemInfoSync().gameVersion || '';
        // session_id
        hiddoEventMap['session_id'] = hg.getSystemInfoSync().session_id || '';
        // time
        hiddoEventMap['time'] = `${Date.now() / 1000}`;
        // uid
        hiddoEventMap['uid'] = hogame.config.uid;

        hg['reportHiddo']({ eventId: eventId, hiidoEventMap: hiddoEventMap });
    }

    static getRoomID() {
        let room_id = '';

        const uri = gea.net['_uri'];
        if (uri && uri !== '') {
            const strArray = uri.split(hogame.config.gameId + '/');
            if (strArray[1]) {
                room_id = strArray[1].split('/')[0];
            }
        }

        return room_id || '';
    }

    // public static taskEntryClick() {
    //     const hiddoEventMap = {
    //         'function_id': 'task_click'
    //     }

    //     HiddoMgr.reportHiddo(hiddoEventMap, "60133520")
    // }

    // public static pointsMallEntryClick() {
    //     const hiddoEventMap = {
    //         'function_id': 'mall_click'
    //     }

    //     this.reportHiddo(hiddoEventMap, "60133520")
    // }

    // public static game_click_entrance() {
    //     if (!window['hg']) {
    //         return
    //     }

    //     const hiddoEventMap = {
    //         'function_id': 'game_click_entrance',
    //         'nation': hg.getSystemInfoSync().countryCode || "",
    //         'game_entrance': hogame.config.gameId
    //     }

    //     HiddoMgr.reportHiddo(hiddoEventMap, "60133520")
    // }

    public static click_client_game_rule_page() {
        if (!window['hg']) {
            return;
        }

        const hiddoEventMap = {
            function_id: 'click_client_game_rule_page',
        };

        HiddoMgr.reportHiddo(hiddoEventMap, '60133520');
    }

    public static click_client_game_record() {
        if (!window['hg']) {
            return;
        }

        const hiddoEventMap = {
            function_id: 'click_client_game_record',
        };

        HiddoMgr.reportHiddo(hiddoEventMap, '60133520');
    }

    public static click_client_game_ranking() {
        if (!window['hg']) {
            return;
        }
        const hiddoEventMap = {
            function_id: 'click_client_game_ranking',
        };
        HiddoMgr.reportHiddo(hiddoEventMap, '60133520');
    }

    // public static click_client_game_recharge_coin() {
    //     if (!window['hg']) {
    //         return
    //     }

    //     const hiddoEventMap = {
    //         'function_id': 'click_client_game_recharge_coin',
    //     }

    //     HiddoMgr.reportHiddo(hiddoEventMap, "60133520")
    // }

    public static click_client_game_sound() {
        if (!window['hg']) {
            return;
        }

        const hiddoEventMap = {
            function_id: 'click_client_game_sound',
        };

        HiddoMgr.reportHiddo(hiddoEventMap, '60133520');
    }

    public static show_client_game_homepage() {
        if (!window['hg']) {
            return;
        }

        const hiddoEventMap = {
            function_id: 'show_client_game_homepage',
        };

        HiddoMgr.reportHiddo(hiddoEventMap, '60133520');
    }

    // public static click_client_game_close() {
    //     if (!window['hg']) {
    //         return
    //     }

    //     const hiddoEventMap = {
    //         'function_id': 'click_client_game_close',
    //     }

    //     HiddoMgr.reportHiddo(hiddoEventMap, "60133520")
    // }

    public static change_mode(isRed: boolean) {
        const hiddoEventMap = {
            function_id: 'change_mode',
            mode_now: isRed ? 1 : 0,
        };
        HiddoMgr.reportHiddo(hiddoEventMap, '60133520');
    }

    public static click_client_game_recharge_diamond() {
        if (!window['hg']) {
            return;
        }
        const hiddoEventMap = {
            function_id: 'click_client_game_recharge_diamond',
        };
        HiddoMgr.reportHiddo(hiddoEventMap, '60133520');
    }
}
