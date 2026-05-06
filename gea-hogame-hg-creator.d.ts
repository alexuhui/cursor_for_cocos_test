declare namespace hago.enums {
    /**性别 */
    enum sex {
        /**女性 */
        female = 0,
        /**男性 */
        male = 1
    }
    /**星座 */
    enum constellation {
        /**摩羯 */
        capricorn = 0,
        /**水瓶座 */
        aquarius = 1,
        /**双鱼座 */
        pisces = 2,
        /**白羊座 */
        aries = 3,
        /**金牛座 */
        taurus = 4,
        /**双子座 */
        gemini = 5,
        /**巨蟹座 */
        cancer = 6,
        /**狮子座 */
        leo = 7,
        /**处女座 */
        virgo = 8,
        /**天秤座 */
        libra = 9,
        /**天蝎座 */
        scorpio = 10,
        /**射手座 */
        sagittarius = 11
    }
    /**在线状态 */
    enum onlineStatus {
        /**在线 */
        onLine = 1,
        /**离线 */
        offLine = 0
    }
    /**好友类型 */
    enum friendType {
        /**faceBook */
        faceBook = 0,
        /**通讯录 */
        mailList = 1,
        /**附近的人 */
        nearby = 2,
        /**hago */
        hago = 3,
        /**游戏大神 */
        topPlayer = 4,
        /**邀请者 */
        inviter = 5,
        /**被邀请者 */
        invitee = 6
    }
    /**排行榜类型 */
    enum rankType {
        /**总榜 */
        total = 0,
        /**日榜 */
        daily = 1
    }
    /**
     * 订阅code
     * 只有code_1000可以订阅
     */
    enum subscribe {
        /**成功 */
        code_0 = 0,
        /**未知错误 */
        code_negative1 = -1,
        /**未订阅 */
        code_1000 = 1000,
        /**被封禁 */
        code_1001 = 1001,
        /**不存在 */
        code_1002 = 1002,
        /**已经订阅 */
        code_1003 = 1003
    }
    enum userInfoType {
        /**本地调试时的用户数据 */
        debug = "debug",
        /**在hago的app上返回的有效用户数据 */
        valid = "valid",
        /**在hago的app上获取用户数据失败时，返回的模拟用户数据 */
        unknow = "unknow"
    }
}
declare namespace hg {
    /**
     * 激励视频广告组件，hago平台为每个游戏提供一个广告ID。hago APP提供广告预加载能力，调用RewardedVideoAd.show()可显示广告，使用方式见例子
     *
     * 1.显示广告必备条件：需要安装谷歌套件，facebook，手机翻墙。 广告组件默认是隐藏的
     *
     * 2.广告需要游戏做广告loading界面，2次获取广告时间不小于10秒，避免用户重复点击广告导致广告获取失败
     *
     * 3.每个游戏一个广告ID，测试环境可使用9999进行测试；正式广告ID由平台分配
     *
     * 4.每天显示广告次数不限，游戏可以在多个功能中使用同一个广告ID
     *
     * 5.hago目前只支持全屏视频广告
     *
     * 6.接口参数 adUnitId 属性对应多值是int型，请勿写成string型
     *
     * @see http://kxd_3rd.kxd-pages.yy.com/kxd_3rd_ly/zh/advertisement/createRewardedVideoAd.html
     * @example
     * var rewardedVideoAd = hg.createRewardedVideoAd({
     *   adUnitId: 9999 //测试使用9999，上线前必须申请独立的，否则无法分成!   注意：要下载最新的app测试版本9999才能生效。
     * });
     *
     *
     * //res.isEnded == true的时候，用户观看完整广告并已经关闭广告窗口
     * rewardedVideoAd.onClose = function(res) {
     *   tips.string = "hg.rewardedVideoAd.onClose res.isEnded:" + res.isEnded;
     * }
     *
     *
     * rewardedVideoAd.show().then(function() {
     *  tips.string = "Success hg.rewardedVideoAd.show";//成功展示广告
     * }, function(err) {
     *  tips.string = "error hg.rewardedVideoAd.rejected " + JSON.stringify(err);//出错或者用户提前关闭广告
     * })
     */
    function createRewardedVideoAd(opt: {
        adUnitId: number;
    }): {
        show: () => Promise<any>;
        onClose: (res: {
            isEnded: boolean;
        }) => void;
    };
}
declare namespace hg {
    interface IKVData {
        readonly key: string;
        readonly value: string;
    }
    interface IUserGameData {
        readonly openid: string;
        readonly nickname: string;
        readonly avatarUrl: string;
        readonly KVDataList: Array<IKVData>;
    }
    interface IAIUser {
        readonly openid: string;
        readonly sex: hago.enums.sex;
        readonly nickName: string;
        readonly avatarUrl: string;
    }
    /**
     * 拉取当前用户所有同玩好友的托管数据
     * @see http://kxd_3rd.kxd-pages.yy.com/kxd_3rd_ly/zh/opendata/getFriendCloudStorage.html
     */
    function getFriendCloudStorage(opt: {
        keyList: Array<string>;
        success?: (res: {
            data: Array<hg.IUserGameData>;
        }) => void;
        fail?: () => void;
        complete?: () => void;
    }): void;
    /**
     * 取当前用户托管数据当中对应 key 的数据
     * @see http://kxd_3rd.kxd-pages.yy.com/kxd_3rd_ly/zh/opendata/getUserCloudStorage.html
     */
    function getUserCloudStorage(opt: {
        keyList: Array<string>;
        success?: (res: {
            KVDataList: Array<IKVData>;
        }) => void;
        fail?: () => void;
        complete?: () => void;
    }): void;
    /**
     * 删除用户托管数据当中对应 key 的数据
     * @see http://kxd_3rd.kxd-pages.yy.com/kxd_3rd_ly/zh/opendata/removeUserCloudStorage.html
     */
    function removeUserCloudStorage(opt: {
        keyList: Array<string>;
        success?: (jsonStr: string) => void;
        fail?: () => void;
        complete?: () => void;
    }): void;
    /**
     * 对用户托管数据进行写数据操作。允许同时写多组 KV 数据
     *
     * 1.每个openid所标识的用户在每个游戏上托管的数据不能超过128个key-value对
     *
     * 2.上报的key-value列表当中每一项的key+value长度都不能超过1K(1024)字节
     *
     * 3.上报的key-value列表当中每一个key长度都不能超过128字节
     * @see http://kxd_3rd.kxd-pages.yy.com/kxd_3rd_ly/zh/opendata/setUserCloudStorage.html
     */
    function setUserCloudStorage(opt: {
        KVDataList: Array<{
            key: string;
            vlaue: string;
        }>;
        success?: (jsonStr: string) => void;
        fail?: () => void;
        complete?: () => void;
    }): void;
    /**
     * 获取AI用户信息列表
     * @see http://kxd_3rd.kxd-pages.yy.com/kxd_3rd_ly/zh/opendata/getAIUser.html
     */
    function getAIUser(opt: {
        num: number;
        success?: (jsonStr: string) => void;
        fail?: () => void;
        complete?: () => void;
    }): void;
}
declare namespace hg {
    /**
     * 需要初始化成功回调以后才能调用sdk的api
     * @see http://kxd_3rd.kxd-pages.yy.com/kxd_3rd_ly/zh/new_user/webdebug.html
     */
    function initWebDebug(opt: {
        gameId: string;
        user: number;
        env: string;
        countryCode: string;
        language: string;
        success: (res?: any) => void;
        fail: (res?: any) => void;
    }): void;
}
declare namespace hg {
    /**用户信息 */
    interface IFriendInfo {
        /**唯一标识 */
        readonly uid: number;
        /**昵称 */
        readonly nick: string;
        /**头像 */
        readonly avatar: string;
        /**0:fb好友；1:通讯录好友; 2:附近的人; 3：hago 好友;4:游戏大神; 5:邀请者;6:被邀请这; */
        readonly type: hago.enums.friendType;
        /**距离 */
        readonly dist: number;
        /**在线状态， 0-离线， 1-在线 */
        readonly onlineStatus: hago.enums.onlineStatus;
        /**性别 */
        readonly sex: hago.enums.sex;
        /**星座 */
        readonly alias: hago.enums.constellation;
    }
    interface IFriendError {
        /** 错误码 */
        errCode: string;
    }
    /**
     * 获取好友列表
     * @see http://kxd_3rd.kxd-pages.yy.com/hago_doc/zh/internal/getFriendInfos.html
     */
    function getFriendInfos(opt: {
        uids: number;
        success?: (res: hg.IFriendInfo[]) => void;
        fail?: (res: hg.IFriendError) => void;
    }): void;
    /**
     * 加好友
     * @see http://kxd_3rd.kxd-pages.yy.com/hago_doc/zh/internal/addFriend.html
     */
    function addFriend(opt: {
        uid: number;
        success: (res: {
            uid: number;
            code: number;
        }) => void;
        fail: (res: {
            uid: number;
            code: number;
        }) => void;
    }): void;
}
declare namespace hg {
    /**
     * 发送im邀请
     * @param opt
     * @see https://open.ihago.net/resourceCenter?page=intermodalGames&path=zh%2Finternal%2FsendMsgInGame.html
     */
    function sendMsgInGame(opt: {
        toUid: number;
        content: string;
        infoPayload: string;
    }): void;
    /**
     * 获取邀请信息
     * @returns 邀请方发送的infoPayload信息，进入游戏可以拿到
     * @see https://open.ihago.net/resourceCenter?page=intermodalGames&path=zh%2Finternal%2FsendMsgInGame.html
     */
    function getGameInviteInfo(): string;
}
declare namespace hg {
    /**
     * 游戏加载完成，用户可以进行游戏时，上报游戏加载结果, 用于统计游戏质量和查错，游戏必须调用，否则无法上前端传包
     * @see http://kxd_3rd.kxd-pages.yy.com/kxd_3rd_ly/zh/life/gameLoadResult.html
     */
    function gameLoadResult(opt: {
        code: number;
    }): void;
    /**
     * 退出当前游戏
     * @see http://kxd_3rd.kxd-pages.yy.com/kxd_3rd_ly/zh/life/exitMiniProgram.html
     */
    function exitMiniProgram(opt: {
        exitConfirm?: boolean;
        success?: () => void;
        fail?: () => void;
        complete?: () => void;
    }): void;
    /**
     * 隐藏或显示Hago的游戏关闭按钮，移动关闭按钮的位置
     * @see http://kxd_3rd.kxd-pages.yy.com/kxd_3rd_ly/zh/life/updateCloseView.html
     */
    function updateCloseView(opt: {
        show?: boolean;
        position?: number;
    }): void;
}
declare namespace hg {
    /**登录成功的数据结构 */
    interface ILoginSuccess {
        readonly code: string;
    }
    /**
     * 获取登录凭证
     * @see http://kxd_3rd.kxd-pages.yy.com/kxd_3rd_ly/zh/login/hg.login.html
     */
    function login(opt: {
        success?: (res: hg.ILoginSuccess) => void;
        fail?: () => void;
        complete?: () => void;
    }): void;
}
declare namespace hg {
    /**
     * 通过google play发起支付
     * @see http://kxd_3rd.kxd-pages.yy.com/kxd_3rd_ly/zh/payment/requestPayment.html
     */
    function requestPayment(opt: {
        item_id: number;
        transaction_id: string;
        subject: string;
        success: () => void;
        fail: (res: {
            errMsg: string;
            errCode: number;
        }) => void;
        complete: () => void;
    }): void;
}
declare namespace hg {
    /**
     * PK的匹配信息
     * @example
     *{
     *  "channelid":"yy",
     *   "gameid":"lianyun",
     *   "roomid":"6ae9d9b1-19be-4e3e-b78b-56bfcd928de6", // roomid 匹配一起的玩家相同
     *   "player":{
     *       "uid":"101001267",
     *       "name":"nnnnhj",
     *       "avatarurl":"http://kaixindou.kaixindou.net/user_album/101001267_1523530030489.jpg",
     *       "opt":"{\"ai\":1,\"level\":4,\"ai_info\":{\"uid\":\"900001341\",\"nick\":\"Budy Sugandi (Budy Sugandi)\",\"sex\":1}}", // 字符串类型，ai信息
     *       "teamid":"",
     *       "sex":0,
     *       "kv_sign":"a8AO3oIBUJXdbFLAO8MjVB9cRljiv6Wk"
     *   }
     *}
     */
    interface IMatchupInfo {
        channelid: string;
        gameid: string;
        roomid: string;
        player: {
            uid: string;
            name: string;
            avatarurl: string;
            opt: string;
            teamid: '';
            sex: number;
            kv_sign: string;
        };
    }
    /**
     * pk结果
     * @example
     *var result =
     *   {
     *       "timestamp":1562035432, //秒时间戳
     *       "nonstr":"d90b0dca-05c7-4632-bf43-7bcf5f8f63d7",
     *       "sign":"2d237fbf3c1edcd5b7345b5b5db9e1675391b289",
     *       "result":{
     *           "gameid":"feidao_yn",
     *           "roomid":"0388575d-ebcb-4679-b0e0-a9ef838c750c",
     *           "channelid":"yy",
     *           "resulttype":"not_draw",
     *           "users":[
     *               "162439353",   //字符串
     *               "162389842"    //字符串
     *           ],
     *           "winners":[
     *               "162439353"    //字符串
     *           ]
     *       }
     *   }
     *hg.pkFinish(result); //游戏结束显示结果
     */
    interface IPkResult {
        timestamp?: number;
        nonstr?: string;
        sign?: string;
        gametype?: string;
        result?: {
            gameid?: string;
            roomid?: string;
            channelid?: string;
            resulttype?: string;
            users?: string[];
            winners?: string[];
            jifen?: string[];
            gametime?: number[];
            winteam?: string[];
        };
        resultrawdata?: string;
    }
    /**
     * 同步接口，返回PK的连接服务器的url，匹配在一起的玩家会通过url连接同一个后端进程
     * @see https://open.ihago.net/resourceCenter?path=zh%2Fmatchup%2FgetMatchupUrl.html
     */
    function getMatchupUrl(): string;
    /**
     * 同步接口，返回PK的匹配信息
     * @see https://open.ihago.net/resourceCenter?path=zh%2Fmatchup%2FgetMatchupInfo.html
     */
    function getMatchupInfo(): IMatchupInfo;
    /**
     * 当所有玩家都连接到服务器时调用，开始游戏，如有无法连接服务器或者超时，需要调用hg.pkFinishError
     * @see https://open.ihago.net/resourceCenter?path=zh%2Fmatchup%2FpkStart.html
     */
    function pkStart(): void;
    /**
     * 游戏结束是调用，弹出pk结算页
     * @see https://open.ihago.net/resourceCenter?path=zh%2Fmatchup%2FpkFinish.html
     */
    function pkFinish(result: IPkResult): void;
    /**
     * 游戏异常结束，调用后会退出游戏
     * @param opt 参数
     * @see https://open.ihago.net/resourceCenter?path=zh%2Fmatchup%2FpkFinishError.html
     */
    function pkFinishError(opt: {
        message: string;
        code: string;
    }): void;
    /**
     * 上报PK结果，不结束游戏，参数同hg.pkFinish()。结束游戏时还需要调用 hg.pkFinish()
     * @param result
     * @see https://open.ihago.net/resourceCenter?path=zh%2Fmatchup%2FpkResult.html
     */
    function pkResult(result: IPkResult): void;
    /**
     * 监听用户点击强制退出游戏事件，游戏有最多3秒时间处理，比如通知服务器用户强制退出
     * @param callback
     * @see https://open.ihago.net/resourceCenter?path=zh%2Fmatchup%2FlistenPkExit.html
     */
    function listenPkExit(callback: () => void): void;
}
declare namespace hg {
    /**
     * 单个排行数据
     */
    interface IRankInfoSingle {
        readonly openid: string;
        readonly rank: number;
        readonly score: number;
        readonly avatarUrl: string;
        readonly name: string;
    }
    /**
     * 排行数据
     */
    interface IRankInfo {
        /**自己的排行数据 */
        readonly selfRank: IRankInfoSingle;
        /**这次返回的排行数据列表 */
        readonly ranks: IRankInfoSingle[];
        /**该榜单一共有多少人 */
        readonly allSize: number;
    }
    /**
     * 上报用户分数
     * @see http://kxd_3rd.kxd-pages.yy.com/kxd_3rd_ly/zh/rank/setRank.html
     */
    function setRank(opt: {
        type: number;
        bigFirst: boolean;
        score: number;
        name?: string;
        success?: () => void;
        fail?: () => void;
    }): void;
    /**
     * 查询排行榜，返回数据中，allSize表示该榜单总共有多少人,最多支持前500名
     * @see http://kxd_3rd.kxd-pages.yy.com/kxd_3rd_ly/zh/rank/getRank.html
     */
    function getRank(opt: {
        type: number;
        page?: number;
        size: number;
        name?: string;
        success: (res: IRankInfo) => void;
        fail: () => void;
    }): void;
}
declare namespace hg {
    function reportData(data: {
        /**事件ID，每个事件ID唯一 */
        eventid: string;
        /**上报的自定义数据 */
        datas: {
            /**事件ID，每个事件ID唯一 */
            eventid: string;
            /**其他自定义参数 */
            [key: string]: number | string;
        }[];
        /**上报成功回调 */
        success: (res: {
            code: number;
            msg: string;
        }) => void;
        /**上报失败回调 */
        fail: (res: {
            code: number;
            msg: string;
        }) => void;
    }): any;
}
declare namespace hg {
    /**
     * 显示当前页面的转发按钮, 分享没有成功回调通知，如果是奖励类型，建议使用视频广告。 分享出去是引导用户下载hago，并不能直接邀请好友进游戏
     * @see http://kxd_3rd.kxd-pages.yy.com/kxd_3rd_ly/zh/share/showShareMenu.html
     */
    function showShareMenu(opt: {
        title: string;
        content: string;
        imageUrl: string;
        goToUrl: 'https://go.onelink.me/7pHf/7dc6e868';
    }): void;
    /**
     * 隐藏转发按钮
     * @see http://kxd_3rd.kxd-pages.yy.com/kxd_3rd_ly/zh/share/hideShareMenu.html
     */
    function hideShareMenu(opt: {
        success?: () => void;
        fail?: () => void;
        complete?: () => void;
    }): void;
}
declare namespace hg {
    interface ISubModuleUrl {
        url: string;
    }
    /**
     * 子模块url获取接口,联运游戏前端调用该接口可以拿到对应子模块服务器的访问域名。 默认请求参数为{id：0}， 参数里面的id 对应一套游戏服务器
     * @see http://kxd_3rd.kxd-pages.yy.com/kxd_3rd_ly/zh/server/getSubModule.html
     */
    function getSubModuleUrlSync(opt: {
        id: number;
    }): ISubModuleUrl;
}
declare namespace hg {
    /**
     * 获取订阅状态,1000 的情况下才可订阅
     * code = 0 成功
     * code = -1 未知错误
     * code = 1000 未订阅
     * code = 1001 被封禁
     * code = 1002 不存在
     * code = 1003 已经订阅
     * @example
     * hg.subscribeGame({
     *  triggerType:1 //1:用户主动订阅；2:游戏引导；3:被动触发
     *  fail:function(code, msg) {
     *      console.log("subscribeGame fail " + code + " " + msg)
     *  },
     *  success:function(code, msg) {
     *      console.log("subscribeGame success " + code + " " + msg)
     *  }
     * })
     * @see https://open.ihago.net/resourceCenter?path=zh%2FgamePublic%2FsubscribeGame.html
     */
    function subscribeGame(opt: {
        triggerType: number;
        fail?: (code: number, msg: string) => void;
        success?: (code: number, msg: string) => void;
    }): void;
    /**
     * 取消订阅游戏
     * code = 0 成功
     * code = -1 未知错误
     * code = 1000 未订阅
     * code = 1001 被封禁
     * code = 1002 不存在
     * code = 1003 已经订阅
     * @example
     * hg.unsubscribeGame({
     *  fail:function(code, msg) {
     *      console.log("subscribeGame fail " + code + " " + msg)
     *  },
     *  success:function(code, msg) {
     *      console.log("subscribeGame success" + code + " " + msg)
     *  }
     * })
     */
    function unsubscribeGame(opt: {
        fail: (code: number, msg: string) => void;
        success: (code: number, msg: string) => void;
    }): void;
    /**
     * 获取订阅状态,1000 的情况下才可订阅
     * code = -1 未知错误
     * code = 1000 未订阅
     * code = 1001 被封禁
     * code = 1002 不存在
     * code = 1003 已经订阅
     * @example
     * hg.getGameSubscribeStatus({
     *  success:function(code) {
     *      console.log("getGameSubscribeStatus code " + code)
     *  }
     * })
     * @see https://open.ihago.net/resourceCenter?path=zh%2FgamePublic%2FsubscribeGame.html
     */
    function getGameSubscribeStatus(opt: {
        success: (code: number) => void;
    }): void;
    /**
     * 获取游戏打开场景回调
     * @param opt
     */
    function getOpenScene(opt: {
        callback?: (data: {
            openScene: number;
            from: string;
        }) => void;
    }): void;
}
declare namespace hg {
    /**系统信息 */
    interface ISystemInfo {
        /**手机品牌 */
        readonly brand: string;
        /**手机型号 */
        readonly model: string;
        /**设备像素比 */
        readonly pixelRatio: number;
        /**屏幕宽度 */
        readonly screenWidth: number;
        /**屏幕高度 */
        readonly screenHeight: number;
        /**可使用窗口宽度 */
        readonly windowWidth: number;
        /**可使用窗口高度 */
        readonly windowHeight: number;
        /**状态栏的高度 */
        readonly statusBarHeight: number;
        /**hago设置的语言 @see http://kxd_3rd.kxd-pages.yy.com/kxd_3rd_ly/zh/system/getSystemInfoSync.html */
        readonly language: string;
        /**hago客户端版本 */
        readonly hagoVersion: string;
        /**接入SDK版本 */
        readonly SDKVersion: string;
        /**用户当前国家码，用于区分访问后台服务使用， SDKVersion >= 280支持 */
        readonly countryCode: string;
        /**用户当前环境，Test(测试环境),Product(正式环境)， SDKVersion >= 280支持 */
        readonly env: 'Test' | 'Product';
        /**用户手机类型，1 - 超低端机 (系统5.0以下或者内存小于1.0G)，2 - 低端机 (系统5.0以下或者内存小于1.5G)，3 - 中端机（内存小于3G或者系统版本为5.0）, 4 - 高端机，SDKVersion>=292支持 */
        readonly phoneType: number;
        /**app名字 */
        readonly appId: string;
        /**游戏版本号 */
        readonly gameVersion: string;
        /**游戏sessionId，上报用的 */
        readonly session_id: string;
    }
    /**
     * @see http://kxd_3rd.kxd-pages.yy.com/kxd_3rd_ly/zh/system/getSystemInfoSync.html
     */
    function getSystemInfoSync(): hg.ISystemInfo;
}
declare namespace hg {
    /**自己的用户信息 */
    interface IUserInfo {
        /**昵称 */
        readonly nickName: string;
        /**头像 */
        readonly avatarUrl: string;
        /**性别 */
        readonly gender: number;
    }
    interface IUserMoreInfo {
        /**城市 */
        readonly city: string;
        /**性别 */
        readonly sex: hago.enums.sex;
        /**玩家uid */
        readonly uid: number;
        /**生日 格式:1980-01-01 */
        readonly birthday: string;
        /**星座序号，0~11，按月份排序，第1个为摩羯 */
        readonly zodiac: hago.enums.constellation;
        /**头像Url */
        readonly avatar: string;
        /**昵称 */
        readonly nick: string;
        /**格式"经度_纬度"的字符串 */
        readonly locationTude: string;
        /**自定义的用户数据类型 */
        readonly personalType: hago.enums.userInfoType;
    }
    /**
     * 获取自己的用户信息
     * @see http://kxd_3rd.kxd-pages.yy.com/kxd_3rd_ly/zh/userInfo/hg.getUserInfo.html
     */
    function getUserInfo(opt: {
        success: (res: {
            userInfo: hg.IUserInfo;
        }) => void;
    }): void;
    /**
     * 获取用户信息
     * @see http://kxd_3rd.kxd-pages.yy.com/kxd_3rd_ly/zh/internal/getUserInfoByUids.html
     */
    function getUserInfoByUids(opt: {
        uids: number[];
        success?: (res: IUserMoreInfo[]) => void;
        fail?: (res: {
            errCode: number;
        }) => void;
    }): void;
    /**
     * 读取自己的uid
     * @see http://kxd_3rd.kxd-pages.yy.com/kxd_3rd_ly/zh/internal/getMyUid.html
     */
    function getUid(): number;
    /**
     * 显示资料卡, 不支持显示自己的
     * @see http://kxd_3rd.kxd-pages.yy.com/hago_doc/zh/internal/showUserCard.html
     */
    function showUserCard(opt: {
        uid: number;
    }): void;
}
declare namespace hg {
    /**
    * 最小化语音房游戏
    * @see http://kxd_3rd.kxd-pages.yy.com/kxd_3rd_ly/zh/life/miniMizeWindow.html
    */
    function miniMizeWindow(): void;
    /**
      * 打开礼物面板
      * @see https://kxd-gitlab.yy.com/kxd_3rd/hago_doc/blob/master/zh/room/room.md
      */
    function roomOpenPresentPanel(): void;
    /**
    * 发送本地公屏消息   本地公屏，没有发出去，频道内其他人看不到. uid(发送者uid)=0,使用系统消息
    * @see https://kxd-gitlab.yy.com/kxd_3rd/hago_doc/blob/master/zh/room/room.md
    */
    function roomSendChat(opt: {
        uid?: number;
        content?: string;
    }): void;
    /**
     * 游戏通知金币变化
     * @param callback
     * @see https://kxd-gitlab.yy.com/kxd_3rd/hago_doc/blob/master/zh/room/room.md
     */
    function roomListenCoinChange(callback: () => void): void;
    /**
     * 打开一个URL
     * @param opt
     * @see https://git.yy.com/midwares/gameplatform/hago-game-sdk/blob/master/sdk-hago%E6%8E%A5%E5%8F%A3.md
     */
    function roomOpenUrl(opt: {
        url?: string;
    }): void;
    /**
     * 客户端发送协议
     */
    function sendYmicroProto(opt: {
        sname: string,   // 协议服务名
        method: string,  // 协议方法名
        content: string, // req消息体通过pb encode后，再base64一下；
        callback?: (data: {
            code: number,
            sname: string,   // 协议服务名
            method: string,  // 协议方法名
            content: string, // res消息体通过pb encode后，再base64一下，游戏需要decode
        }) => void;
    }): void;
    /**
     * 存储一个全局数据在客户端
     * @param opt
     */
    function saveGameGlobalStorage(opt: {
        key: string;
        value: string;
    }): void;
    /**
     * 获取客户端全局数据
     */
    function getGameGlobalStorage(opt: {
        key: string,
        callback?: (data: {
            key: string,
            value: string,
        }) => void;
    }): void;
    /**
     * 给H5发消息
     * @param opt
     */
    function sendMsgFromGameToH5(opt: {
        param: string;
    }): void;
    /**
     * 打开一个deeplink的URL
     * @param opt
     */
    function jumpUri(opt: {
        uri?: string;
        exitGame?: boolean;
    }): void;
    /**
     * 是否正在自动下注
     * @param opt
     */
    function gameAutoStatusChange(opt: {
        gid: string;
        isAuto: boolean;
    }): void;
    /**
     * 注册app通知
     * @param notify hg.xxx
     * @param callback
     */
    function registerNotify(notify: string, callback: (res: any) => void): void;
    /**
     * 显示/隐藏悬浮窗拖动区域
     * @see https://git.yy.com/midwares/gameplatform/hago-game-sdk/blob/master/sdk-hago%E6%8E%A5%E5%8F%A3.md
     * @param opt
     */
    function showMoveWindow(opt: {
        show?: boolean;
        x?: number;
        y?: number;
        width?: number;
        height?: number;
        rtl?: boolean;
    }): void;
    /**
     * Hago 5.35加入的，任务入口转换坐标弹出H5弹窗
     * @param opt
     */
    function convertPos(opt: {
        x?: number;
        y?: number;
        rtl?: boolean;
        callback?: (data: {
            x: number;
            y: number;
            centerX: number;
            centerY: number;
            rtl: boolean;
        }) => void;
    }): void;
    /** 模式切换 */
    function gameExpModeChange(param:{
        mode: number,
        remainTime: number,
        gid: string
    })
    /**
     * 打开hago的通用分享面板  分享到bbs
     * @see https://kxd-gitlab.yy.com/kxd_3rd/hago_doc/blob/master/zh/internal/arShare.md#hagoShareObject
     * @param opt
     */
    function showSharePanel(opt: {
        innerShare: string;
        outerShare: String;
    }): void;
    /**
     * 获取进入游戏时的拓展数据
     * @param opt
     */
    function getJumpGameExtend(opt: {
        success?: (extend: string) => void;
    }): void;
    /**
     * 获取频道语音房信息
     * roomId: string, //当前房间Id
     * ownerId: number, //当前房主ID
     * vId: string,     //显示给用户的房间ID
     *  roomName: string  //房间名
     * @see https://git.yy.com/midwares/gameplatform/hago-game-sdk/blob/master/sdk-hago%E6%8E%A5%E5%8F%A3.md
     * @param opt
     */
    function getCurVoiceRoomData(opt: {
        callback?: (data: {
            roomId: string;
            ownerId: number;
            vId: string;
            roomName: string;
        }) => void;
    }): void;
    /**
     * 打开h5页面
     * url  h5链接（必填）
     * title  网页标题
     * orientation  横竖屏（ 0为竖屏，1为横屏）
     * backgroundColor  H5页面背景色，例如#ff000000
     * @see https://git.yy.com/midwares/gameplatform/hago-game-sdk/blob/master/sdk-hago%E6%8E%A5%E5%8F%A3.md
     */
    function showWebPage(opt: {
        url: string;
        orientation?: number;
        title?: string;
        backgroundColor?: string;
        isFullScreen?: boolean;
    }): void;
    /**
     * 打开充值弹窗  3.42 以上版本
     * @see https://git.yy.com/midwares/gameplatform/hago-game-sdk/blob/master/sdk-hago%E6%8E%A5%E5%8F%A3.md
     */
    function recharge(opt: {
        callback?: (data: {
            gameId: string;
            amount: number;
            currencyType: number;
            currencyAmount: number;
            orderId: string;
            code: number;
            msg: string;
        }) => void;
    }): void;
    /**
     * 获取体验模式的总钻石数量，infun 1.10
     */
    function gameExpTotalAmount(opt: {
        callback?: (data: {
            expTotalAmount: number;
        }) => void;
    }): void;
    /**
     * 透传平台业务广播
     */
    function registerBizWebNotify(notify: {
        sName: string;
        onNotify: (data: {
            sName: string;
            data: string;
        }) => void;
    }): void;
    function unRegisterBizWebNotify(notify: {
        sName: string;
        onNotify: (data: {
            sName: string;
            data: string;
        }) => void;
    }): void;
}
declare namespace gea {
    function log(...args: any[]): void;
    function info(...args: any[]): void;
    function warn(...args: any[]): void;
    function error(...args: any[]): void;
    /**
     * 设置Log前缀
     * @param prefix
     */
    function setLogPrefix(prefix: string): void;
}
declare namespace gea.interfaces.base {
    interface ITimer {
        /**
        * 新增一个定时回调,执行一次后关闭,或者off显式关闭
        * @param interval 回调频率,设置多少ms触发一次
        * @param callback 回调函数
        * @param scope 作用域
        * @param callbackArgs 回调函数参数
        */
        once(interval: number, callback: Function, scope: any, ...callbackArgs: any[]): ITimer;
        /**
         * 新增一个定时回调
         * @param interval 回调频率,设置多少ms触发一次
         * @param callbackLimite 回调次数限制,小于等于0表示不限制回调次数,default = 0,如果此参数不是一个数字,那么将把此参数作为callback参数的值使用
         * @param callback 回调函数
         * @param scope 作用域
         * @param callbackArgs 回调函数参数
         */
        on(interval: number, callback: Function, scope: any, ...callbackArgs: any[]): ITimer;
        on(interval: number, callbackLimite: number, callback: Function, scope: any, ...callbackArgs: any[]): ITimer;
        /**
         * 关闭一个定时回调
         * @param callback 回调函数
         * @param scope 回调函数作用域
         */
        off(callback: Function, scope: any): ITimer;
        /**
         * 移除实例相关的所有定时回调
         * @param scope 实例本身(this)
         */
        offByScope(scope: any): ITimer;
    }
}
declare namespace gea.interfaces.base {
    interface IPoolObject {
        /**
         * 借用后的回调函数
         * @param args 可选参数
         * @example
         * gea.pool.borrow(poolClass)
         */
        callbackAfterBorrow?(...args: any[]): void;
        /**
         * 归还前的回调函数,如果返回true，则表示可以立即还入对象池
         * @param args 可选参数
         * @example
         * gea.pool.restore(poolObject)
         */
        callbackBeforeRestore?(...args: any[]): boolean;
    }
}
declare namespace gea.interfaces.base {
    /**
     * Gea
     */
    interface IGea {
        /**
         * 是否已暂停
         */
        readonly paused: boolean;
        /**
         * 本地时间
         */
        readonly localTime: number;
        /**
         * 获取运行经过的时间
         */
        readonly pastTime: number;
        /**
         * 暂停Polling,Timer
         */
        pause(): void;
        /**
         * 唤醒Polling,Timer
         */
        resume(): void;
        /**
         * 针对某tag新增一个订阅者,订阅执行一次后关闭,或者off显式关闭
         * @param tag 标记
         * @param callback 回调函数--订阅者
         * @param scope 回调函数作用域
         * @param callbackArgs 回调参数
         */
        once(tag: any, callback: Function, scope: any, ...callbackArgs: any[]): IGea;
        /**
         * 针对某tag新增一个优先订阅者,订阅执行一次后关闭,或者off显式关闭
         * @param tag 标记
         * @param callback 回调函数--订阅者
         * @param scope 回调函数作用域
         * @param callbackArgs 回调参数
         */
        oncePrior(tag: any, callback: Function, scope: any, ...callbackArgs: any[]): IGea;
        /**
         * 针对某tag新增一个订阅者
         * @param tag 标记
         * @param callback 回调函数--订阅者
         * @param scope 回调函数作用域
         * @param callbackArgs 回调参数
         */
        on(tag: any, callback: Function, scope: any, ...callbackArgs: any[]): IGea;
        /**
         * 针对某tag新增一个优先订阅者
         * @param tag 标记
         * @param callbackLimite 回调次数限制,小于等于0表示不限制回调次数,default = 0,如果此参数不是一个数字,那么将把此参数作为callback参数的值使用
         * @param callback 回调函数--订阅者
         * @param scope 回调函数作用域
         * @param callbackArgs 回调参数
         */
        on(tag: any, callbackLimite: number, callback: Function, scope: any, ...callbackArgs: any[]): IGea;
        /**
         * 针对某tag新增一个订阅者
         * @param tag 标记
         * @param callback 回调函数--订阅者
         * @param scope 回调函数作用域
         * @param callbackArgs 回调参数
         */
        onPrior(tag: any, callback: Function, scope: any, ...callbackArgs: any[]): IGea;
        /**
         * 针对某tag新增一个优先订阅者
         * @param tag 标记
         * @param callbackLimite 回调次数限制,小于等于0表示不限制回调次数,default = 0,如果此参数不是一个数字,那么将把此参数作为callback参数的值使用
         * @param callback 回调函数--订阅者
         * @param scope 回调函数作用域
         * @param callbackArgs 回调参数
         */
        onPrior(tag: any, callbackLimite: number, callback: Function, scope: any, ...callbackArgs: any[]): IGea;
        /**
         * 移除一个订阅者
         * @param tag 标记
         * @param callback 回调函数
         * @param scope 回调函数作用域
         */
        off(tag: any, callback: Function, scope: any): IGea;
        /**
         * 触发一个tag,通知所有的tag订阅者(执行回调函数)
         * @param tag 标记
         * @param args 附加回调参数
         */
        /**
         * 移除实例相关的所有订阅者
         * @param scope 实例本身(this)
         */
        offByScope(scope: any): IGea;
        /**
         * 发布一个通知
         * @param tag 通知
         * @param args 通知携带的额外参数
         */
        dispatch(tag: any, ...args: any[]): IGea;
    }
}
declare namespace gea.events {
    enum base {
        /**本地时间被回拨 */
        localtime_reduced = "gea.events.base.localtime_reduced",
        /**系统切到后台 */
        enter_background = "gea.events.base.enter_background",
        /**系统切回前台 */
        enter_foreground = "gea.events.base.enter_foreground",
        /**后端发版 房间不可用 */
        room_unavailable = 'gea.events.base.room_unavailable'
    }
}
declare namespace gea.interfaces.base {
    interface IDestroyAble {
        /**
         * 销毁
         */
        destroy(...args: any[]): void;
    }
}
declare namespace gea.discriminator {
    enum interfaces {
        callback = "gea.interfaces.base.ICallback"
    }
}
declare namespace gea.interfaces.base {
    interface IInterfaceDiscriminator {
        /**
         * 接口的辨别器
         * + 实现一个接口时，直接返回对应接口的字符串定义就可以
         * + 实现多个接口时，返回一个数组，包含多个接口的字符串定义
         * @see gea.discriminator.interfaces
         */
        readonly discriminator: string[] | string;
    }
}
declare namespace gea.interfaces.base {
    interface ICallback extends IDestroyAble, IInterfaceDiscriminator {
        readonly discriminator: gea.discriminator.interfaces.callback;
        /**
         * 获取剩余回调次数
         */
        callbackLimite(): number;
        /**
         * @param value 设置回调次数上限,小于等于0表示无穷大
         */
        callbackLimite(value: number): ICallback;
        /**
         * 回调设置
         * @param args 回调参数
         */
        args(...args: any[]): ICallback;
        /**
         * 执行一次回调
         * @param extraArgs 额外的回调参数
         */
        excute(...extraArgs: any[]): ICallback;
    }
}
declare namespace gea.interfaces.base {
    /**
     * 对象池管理中心
     */
    interface IPoolManager {
        /**
         * 从对象池获取一个实例
         * @param poolClass 继承自对象池基类的class
         * @param args 初始化参数
         */
        borrow<T extends IPoolObject>(poolClass: {
            prototype: T;
            new (): T;
        }, ...args: any[]): T;
        /**
         * 回收一个实例到对象池
         * @param ins 继承自对象池的实例对象
         * @param args 回收时附带的参数
         */
        restore(ins: IPoolObject, ...args: any[]): void;
    }
}
declare namespace gea {
    const pool: interfaces.base.IPoolManager;
}
declare namespace gea {
    /**
     * 获取一个对象的uuid
     * @params target 任意对象,若为数字或者字符串则直接返回字符串格式
     * @params scope 作用域,若为数字或者字符串则忽略
     */
    function uuid(target: any, scope?: any): string;
}
declare namespace gea {
    /**
     * 获取一个经过封装的回调函数
     * @param callback 回调函数
     * @param scope 回调函数作用于
     * @param callbackLimite 回调函数回调次数限制,0为不限制回调次数
     * @param callbackArgs 回调函数参数
     * @see gea.interfaces.base.ICallback
     */
    function callback(callback: Function, scope: any, ...callbackArgs: any[]): interfaces.base.ICallback;
}
declare namespace gea.utility.dispatcher {
    function once(dispatcher: any, tag: any, callback: Function, scope: any, ...callbackArgs: any[]): void;
    function oncePrior(dispatcher: any, tag: any, callback: Function, scope: any, ...callbackArgs: any[]): void;
    function on(dispatcher: any, tag: any, callbackLimite: number | Function, callback: Function, scope: any, ...callbackArgs: any[]): void;
    function onPrior(dispatcher: any, tag: any, callbackLimite: number | Function, callback: Function, scope: any, ...callbackArgs: any[]): void;
    function off(dispatcher: any, tag: any, callback: Function, scope: any): void;
    /**
     * 移除`scope`下的所有订阅者
     * @param scope 指定作用域
     * @param dispatcher 指定的dispatcher实例，如果这个值为空，则表示移除调所有dispather下的订阅者
     */
    function offByScope(scope: any, dispatcher?: any): void;
    function dispatch(dispatcher: any, tag: any, ...args: any[]): void;
}
declare namespace gea.decorators.base {
    /**
     * 单例模式装饰器
     * @param constructor
     */
    function singleton<T extends {
        new (...args: any[]): {};
    }>(singletonConstructor: T): T;
}
declare namespace gea {
    /**
     * @see gea.interfaces.base.IGea
     */
    const instance: interfaces.base.IGea;
}
declare namespace gea.interfaces.base {
    interface IPolling {
        /**轮询帧频 */
        frameRate: number;
        /**
         * 开启一个轮询回调,轮询回调一次后关闭,或者off显式关闭
         * @param callback 回调函数
         * @param scope 回调函数作用域
         * @param callbackArgs 回调参数
         */
        once(callback: Function, scope: any, ...callbackArgs: any[]): IPolling;
        /**
         * 开启一个轮询回调
         * @param callback 回调函数
         * @param scope 回调函数作用域
         * @param callbackArgs 回调参数
         */
        on(callback: Function, scope: any, ...callbackArgs: any[]): IPolling;
        /**
         * 开启一个轮询回调
         * @param callbackLimite 回调次数限制,小于等于0表示不限制回调次数,default = 0,如果此参数不是一个数字,那么将把此参数作为callback参数的值使用
         * @param callback 回调函数
         * @param scope 回调函数作用域
         * @param callbackArgs 回调参数
         */
        on(callbackLimite: number, callback: Function, scope: any, ...callbackArgs: any[]): IPolling;
        /**
         * 移除一个轮询回调
         * @param callback 回调函数
         * @param scope 回调函数作用域
         */
        off(callback: Function, scope: any): IPolling;
        /**
        * 开启一个优先的轮询回调,轮询回调一次后关闭,或者offPrior显式关闭
        * @param callback 回调函数--订阅者
        * @param scope 回调函数作用域
        * @param callbackArgs 回调参数
        */
        oncePrior(callback: Function, scope: any, ...callbackArgs: any[]): IPolling;
        /**
         * 开启一个优先的轮询回调
         * @param callback 回调函数
         * @param scope 回调函数作用域
         * @param callbackArgs 回调参数
         */
        onPrior(callback: Function, scope: any, ...callbackArgs: any[]): IPolling;
        /**
         * 开启一个优先的轮询回调
         * @param callbackLimite 回调次数限制,小于等于0表示不限制回调次数,default = 0,如果此参数不是一个数字,那么将把此参数作为callback参数的值使用
         * @param callback 回调函数
         * @param scope 回调函数作用域
         * @param callbackArgs 回调参数
         */
        onPrior(callbackLimite: number, callback: Function, scope: any, ...callbackArgs: any[]): IPolling;
        /**
         * 移除实例相关的所有轮询回调
         * @param scope 实例本身(this)
         */
        offByScope(scope: any): IPolling;
    }
}
declare namespace gea {
    const polling: interfaces.base.IPolling;
}
declare namespace gea {
    const timer: interfaces.base.ITimer;
}
declare namespace hago.report {
    /**
     * 设置时间ID，默认事件ID：'20190429'
     * @param value
     */
    function eventid(value: string): void;
    /**
     * 上报自定义数据，失败之后会延迟500ms继续上报，尽量保证上报成功
     * @param datas
     */
    function reportData(...datas: {
        eventid: string;
        [key: string]: number | string;
    }[]): void;
}
declare namespace hago.friend {
    /**
     * 添加好友
     * @param uid 要添加的玩家uid
     * @param callbackSuccess 成功回调 本地调试时有50%几率成功
     * @param callbackFailed 失败回调 本地调试时有50%几率失败
     */
    function addFriend(uid: string | number, callback?: (uid: string | number, success: boolean, code: number) => void): void;
}
declare namespace gea.decorators.base {
    function finallyInvoke(callback: Function, scope?: any): Function;
}
declare namespace gea.interfaces.base {
    /**
     * 日志模型
     */
    interface ILog {
        log(...args: any[]): ILog;
        info(...args: any[]): ILog;
        warn(...args: any[]): ILog;
        error(...args: any[]): ILog;
        setPrefix(prefix: string): void;
    }
}
declare namespace gea.utility.entity {
    /**
     * 添加一个组件依附于当前实体
     * + 同一个类型的组件只能在同一个实体上添加一个
     * @param entity 实体
     * @param component 组件实例
     */
    function addComponent<T>(entity: any, component: T): T;
    /**
     * 获取当前实体上的某个组件
     * @param compClass 组件class
     * @param matchPrototype 当通过`compClass`找不到组件时，是否按原型链匹配的方式查找
     * + 当实体上有多个组件的原型与传入的`compClass`相匹配时，始终返回第一个匹配到的值
     * @example
     * class BaseComponent {}
     * class SubComponent extends BaseComponent{}
     * const comp = new SubComponent()
     * gea.utility.base.entiry.addComponent('testEntity', comp)
     * gea.utility.base.entiry.getComponent('testEntity', SubComponent);       //通过子类型自身获取:comp
     * gea.utility.base.entiry.getComponent('testEntity', BaseComponent);      //通过父类型获取，不匹配原型链:undefined
     * gea.utility.base.entiry.getComponent('testEntity', BaseClass, true);    //通过父类型获取，匹配原型链:comp
     */
    function getComponent<T>(entity: any, compClass: {
        prototype: T;
    }, matchPrototype?: boolean): T;
    /**
     * 移除当前实体上的某个组件
     * @param compClass 组件class
     * @param matchPrototype 当通过`compClass`找不到组件时，是否按原型链匹配的方式查找
     * + 当实体上有多个组件的原型与传入的`compClass`相匹配时，始终返回第一个匹配到的值
     * @example
     * class BaseComponent {}
     * class SubComponent extends BaseComponent{}
     * const comp = new SubComponent()
     * gea.utility.base.entiry.addComponent('testEntity', comp)
     * gea.utility.base.entiry.removeComponent('testEntity', SubComponent);       //通过子类型自身删除:comp
     * gea.utility.base.entiry.removeComponent('testEntity', BaseComponent);      //通过父类型删除，不匹配原型链:undefined
     * gea.utility.base.entiry.removeComponent('testEntity', BaseClass, true);    //通过父类型删除，匹配原型链:comp
     */
    function removeComponent<T>(entity: any, compClass: {
        prototype: T;
        new (): T;
    }, matchPrototype?: boolean): T;
}
declare namespace gea.utility.interfaces {
    /**
     * 辨别一个对象是否实现了某个接口
     * @param target 被判断的对象
     * @param discriminator 接口的discriminator定义
     */
    function discriminate<T extends gea.interfaces.base.IInterfaceDiscriminator>(target: T, discriminator: string): boolean;
}
declare namespace gea.enums.ui {
    /**ui类型 */
    enum ui_type {
        /**一般是全屏ui，添加到view层-->gea.ui.abstracts.ViewBase */
        'view' = 0,
        /**一般是挂靠在屏幕四周的块区域ui，添加到panel层-->gea.ui.abstracts.PanelBase */
        'panel' = 1,
        /**一般是弹出的窗口ui，添加到window层-->gea.ui.abstracts.WindowBase */
        'window' = 2,
        /**处于以上三种ui的上一层，模态窗口的下一层ui，添加到under_modal层-->gea.ui.abstracts.UnderModalBase */
        'under_modal' = 3,
        /**模态窗口，添加到modal层-->gea.ui.abstracts.ModalBase */
        'modal' = 4,
        /**处于以上所有ui的上一层，添加到over_modal层-->gea.ui.abstracts.OverModalBase */
        'over_modal' = 5
    }
    /**ui层类型 */
    enum layer_type {
        /**view类型ui的容器，第底层 */
        'view' = 0,
        /**panel类型ui的容器，view层上一层 */
        'panel' = 1,
        /**window类型ui的容器，panel层的上一层 */
        'window' = 2,
        /**under_modal类型ui容器，window层的上一层 */
        'under_modal' = 3,
        /**modal类型ui容器，under_modal层的上一层 */
        'modal' = 4,
        /**over_modal类型ui容器，modal层的上一层 */
        'over_modal' = 5
    }
}
declare namespace gea.events {
    enum ui {
        /**开始加载ui */
        load_start = "gea.events.ui.load_start",
        /**ui加载进度通知 */
        load_progress = "gea.events.ui.load_progress",
        /**ui加载完成通知 */
        load_complete = "gea.events.ui.load_complete",
        /**ui加载失败通知 */
        load_failed = "gea.events.ui.load_failed"
    }
}
declare namespace gea.enums.tween {
    /**ease类型 */
    enum ease {
        Linear = 0,
        SineIn = 1,
        SineOut = 2,
        SineInOut = 3,
        QuadIn = 4,
        QuadOut = 5,
        QuadInOut = 6,
        CubicIn = 7,
        CubicOut = 8,
        CubicInOut = 9,
        QuartIn = 10,
        QuartOut = 11,
        QuartInOut = 12,
        QuintIn = 13,
        QuintOut = 14,
        QuintInOut = 15,
        ExpoIn = 16,
        ExpoOut = 17,
        ExpoInOut = 18,
        CircIn = 19,
        CircOut = 20,
        CircInOut = 21,
        ElasticIn = 22,
        ElasticOut = 23,
        ElasticInOut = 24,
        BackIn = 25,
        BackOut = 26,
        BackInOut = 27,
        BounceIn = 28,
        BounceOut = 29,
        BounceInOut = 30,
        EaseInOut = 31
    }
}
declare namespace gea.discriminator {
    enum interfaces {
        tweener = "gea.interfaces.tween.ITweener"
    }
}
declare namespace gea.interfaces.tween {
    interface ITweenOption {
        easeType?: gea.enums.tween.ease;
        delay?: number;
        repeatCount?: number;
        repeatInterval?: number;
        yoyo?: boolean;
        yoyoDelay?: number;
        callbackStart?: (tweener: ITweener, startCount: number, ...args: any[]) => void;
        callbackStartScope?: any;
        callbackStartArgs?: any[];
        callbackCompolete?: (tweener: ITweener, completeCount: number, ...args: any[]) => void;
        callbackCompleteScope?: any;
        callbackCompleteArgs?: any[];
    }
    interface ITweener extends gea.interfaces.base.IInterfaceDiscriminator {
        /**
         * 标记为ITweener接口
         */
        readonly discriminator: gea.discriminator.interfaces.tweener;
        /**
         * 缓动对象
         */
        readonly target: any;
        /**
         * 缓动总时长
         */
        readonly totalDuration: number;
        /**
         * 开始
         */
        start(): ITweener;
        /**
         * 暂停
         */
        pause(): ITweener;
        /**
         * 从pause恢复继续运行
         */
        resume(): ITweener;
        /**
         * 停止缓动
         * @param forceComplete 是否强制设置为完成状态
         */
        stop(forceComplete: boolean): ITweener;
        /**
         * 重新开始
         * + `startCount`和`completeCount`都会重新计数
         * + `gea.tween.create`时需指定不自动释放，否则会在运行`finish`或者`stop`的时候自动释放
         */
        reStart(): ITweener;
        /**
         * 追加一个延迟
         * @param value 延迟时间，单位:`ms`
         */
        delay(value: number): ITweener;
        /**
         * 追加一个回调
         * @param callback 回调函数
         * @param scope 回调函数作用域
         * @param args 回调参数
         */
        callback(callback: (...args: any[]) => void, scope?: any, ...args: any): ITweener;
        /**
         * @param value 重复次数
         * + 默认值为0，表示不重复。<0表示无限重复
         */
        repeatCount(value: number): ITweener;
        /**
         * 设置重复间隔
         * @param value 间隔时间
         * + 单位ms
         */
        repeatInterval(value: number): ITweener;
        /**
         * repeatCount不为0时有效
         * @param value
         * + false表示直接从起始值开始重复
         * + true表示先从最终值按照缓动路径回到起始值再开始重复
         * + 默认为false
         */
        yoyo(value: boolean): ITweener;
        /**
         * 设置yoyo动作延迟时间
         * @param value
         */
        yoyoDelay(value: number): ITweener;
        /**
         * 追加一个from缓动
         * @param duration 缓动总时长，单位:`ms`
         * @param property 缓动属性的起始值，目标值为当前值
         * @param option 额外参数
         * + easeType 缓动类型 @see gea.enums.tween.ease
         * + delay 缓动开始前的延迟时间，单位:`ms`
         * + repeatCount 重复次数，默认值为0，表示不重复。<0表示无限重复
         * + repeatInterval 重复间隔，单位:`ms`
         * + yoyo 是否回到缓动开始的位置
         * + yoyoDelay yoyo延迟时间，单位:`ms`
         * + callbackStart 缓动开始的回调
         * + callbackStartScope callbackStart作用域
         * + callbackStartArgs callbackStart额外参数
         * + callbackComplete 此条缓动结束的回调
         * + callbackCompleteScope callbackComplete作用域
         * + callbackCompleteArgs callbackComplete 额外参数
         */
        from(duration: number, property: {
            [key: string]: number;
        }, option?: {
            easeType?: gea.enums.tween.ease;
            delay?: number;
            repeatCount?: number;
            repeatInterval?: number;
            yoyo?: boolean;
            yoyoDelay?: number;
            callbackStart?: (tweener: ITweener, startCount: number, repeatCount: number, ...args: any[]) => void;
            callbackStartScope?: any;
            callbackStartArgs?: any[];
            callbackCompolete?: (tweener: ITweener, completeCount: number, repeatCount: number, ...args: any[]) => void;
            callbackCompleteScope?: any;
            callbackCompleteArgs?: any[];
        }): ITweener;
        /**
         * 追加一个to缓动
         * @param duration 缓动总时长，单位:`ms`
         * @param property 缓动属性的目标值，起始值为当前值
         * @param option 额外参数
         * + easeType 缓动类型 @see gea.enums.tween.ease
         * + delay 缓动开始前的延迟时间,单位:`ms`
         * + repeatCount 重复次数，默认值为0，表示不重复。<0表示无限重复
         * + repeatInterval 重复间隔，单位:`ms`
         * + yoyo 是否回到缓动开始的位置
         * + yoyoDelay yoyo延迟时间，单位:`ms`
         * + callbackStart 缓动开始的回调
         * + callbackStartScope callbackStart作用域
         * + callbackStartArgs callbackStart额外参数
         * + callbackComplete 此条缓动结束的回调
         * + callbackCompleteScope callbackComplete作用域
         * + callbackCompleteArgs callbackComplete 额外参数
         */
        to(duration: number, property: {
            [key: string]: number;
        }, option?: {
            easeType?: gea.enums.tween.ease;
            delay?: number;
            repeatCount?: number;
            repeatInterval?: number;
            yoyo?: boolean;
            yoyoDelay?: number;
            callbackStart?: (tweener: ITweener, startCount: number, repeatCount: number, ...args: any[]) => void;
            callbackStartScope?: any;
            callbackStartArgs?: any[];
            callbackCompolete?: (tweener: ITweener, completeCount: number, repeatCount: number, ...args: any[]) => void;
            callbackCompleteScope?: any;
            callbackCompleteArgs?: any[];
        }): ITweener;
        /**
         * 追加一个fromTo缓动
         * @param duration 缓动总时长，单位:`ms`
         * @param propertyFrom 缓动的起始属性值
         * @param propertyTo 缓动的目标属性值
         * @param option 额外参数
         * + easeType 缓动类型 @see gea.enums.tween.ease
         * + delay 缓动开始前的延迟时间,单位:`ms`
         * + repeatCount 重复次数，默认值为0，表示不重复。<0表示无限重复
         * + repeatInterval 重复间隔，单位:`ms`
         * + yoyo 是否回到缓动开始的位置
         * + yoyoDelay yoyo延迟时间，单位:`ms`
         * + callbackStart 缓动开始的回调
         * + callbackStartScope callbackStart作用域
         * + callbackStartArgs callbackStart额外参数
         * + callbackComplete 此条缓动结束的回调
         * + callbackCompleteScope callbackComplete作用域
         * + callbackCompleteArgs callbackComplete 额外参数
         */
        fromTo(duration: number, propertyFrom: {
            [key: string]: number;
        }, propertyTo: {
            [key: string]: number;
        }, option?: {
            easeType?: gea.enums.tween.ease;
            delay?: number;
            repeatCount?: number;
            repeatInterval?: number;
            yoyo?: boolean;
            yoyoDelay?: number;
            callbackStart?: (tweener: ITweener, startCount: number, repeatCount: number, ...args: any[]) => void;
            callbackStartScope?: any;
            callbackStartArgs?: any[];
            callbackCompolete?: (tweener: ITweener, completeCount: number, repeatCount: number, ...args: any[]) => void;
            callbackCompleteScope?: any;
            callbackCompleteArgs?: any[];
        }): ITweener;
        /**
         * 开始缓动回调
         * @param callback
         * @param scope
         * @param callbackArgs
         */
        appendCallbackStart(callback: (tweener: ITweener, startCount: number, repeatCount: number, ...args: any[]) => void, scope?: any, ...callbackArgs: any[]): ITweener;
        /**
         * 整个缓动过程中的属性变化回调
         * @param callback
         * @param scope
         * @param callbackArgs
         */
        appendCallbackUpdate(callback: (tweener: ITweener, ...args: any[]) => void, scope?: any, ...callbackArgs: any[]): ITweener;
        /**
         * 整个缓动过程每次完成时都回调
         * @param callback
         * @param scope
         * @param callbackArgs
         */
        appendCallbackComplete(callback: (tweener: ITweener, completeCount: number, repeatCount: number, ...args: any[]) => void, scope?: any, ...callbackArgs: any[]): ITweener;
    }
}
declare namespace gea.tween.ease {
    function evaluate(easeType: gea.enums.tween.ease, time: number, duration: number, overshootOrAmplitude: number, period: number): number;
}
declare namespace gea.tween {
    /**
     * 追加一个from缓动
     * @param target 被缓动对象
     * @param duration 缓动总时长，单位:`ms`
     * @param property 缓动属性的起始值，目标值为当前值
     * @param option 额外参数
     * + easeType 缓动类型 @see gea.enums.tween.ease
     * + delay 缓动开始前的延迟时间，单位:`ms`
     * + repeatCount 重复次数，默认值为0，表示不重复。<0表示无限重复
     * + repeatInterval 重复间隔，单位:`ms`
     * + yoyo 是否回到缓动开始的位置
     * + yoyoDelay yoyo延迟时间，单位:`ms`
     * + callbackStart 缓动开始的回调
     * + callbackStartScope callbackStart作用域
     * + callbackStartArgs callbackStart额外参数
     * + callbackComplete 此条缓动结束的回调
     * + callbackCompleteScope callbackComplete作用域
     * + callbackCompleteArgs callbackComplete 额外参数
     */
    function from(target: {
        [key: string]: any;
    }, duration: number, property: {
        [key: string]: number;
    }, option?: interfaces.tween.ITweenOption): interfaces.tween.ITweener;
    /**
     * 追加一个to缓动
     * @param target 被缓动对象
     * @param duration 缓动总时长，单位:`ms`
     * @param property 缓动属性的目标值，起始值为当前值
     * @param option 额外参数
     * + easeType 缓动类型 @see gea.enums.tween.ease
     * + delay 缓动开始前的延迟时间,单位:`ms`
     * + repeatCount 重复次数，默认值为0，表示不重复。<0表示无限重复
     * + repeatInterval 重复间隔，单位:`ms`
     * + yoyo 是否回到缓动开始的位置
     * + yoyoDelay yoyo延迟时间，单位:`ms`
     * + callbackStart 缓动开始的回调
     * + callbackStartScope callbackStart作用域
     * + callbackStartArgs callbackStart额外参数
     * + callbackComplete 此条缓动结束的回调
     * + callbackCompleteScope callbackComplete作用域
     * + callbackCompleteArgs callbackComplete 额外参数
     */
    function to(target: {
        [key: string]: any;
    }, duration: number, property: {
        [key: string]: number;
    }, option?: interfaces.tween.ITweenOption): interfaces.tween.ITweener;
    /**
     * 追加一个fromTo缓动
     * @target 被缓动对象
     * @param duration 缓动总时长，单位:`ms`
     * @param propertyFrom 缓动的起始属性值
     * @param propertyTo 缓动的目标属性值
     * @param option 额外参数
     * + easeType 缓动类型 @see gea.enums.tween.ease
     * + delay 缓动开始前的延迟时间,单位:`ms`
     * + repeatCount 重复次数，默认值为0，表示不重复。<0表示无限重复
     * + repeatInterval 重复间隔，单位:`ms`
     * + yoyo 是否回到缓动开始的位置
     * + yoyoDelay yoyo延迟时间，单位:`ms`
     * + callbackStart 缓动开始的回调
     * + callbackStartScope callbackStart作用域
     * + callbackStartArgs callbackStart额外参数
     * + callbackComplete 此条缓动结束的回调
     * + callbackCompleteScope callbackComplete作用域
     * + callbackCompleteArgs callbackComplete 额外参数
     */
    function fromTo(target: {
        [key: string]: any;
    }, duration: number, propertyFrom: {
        [key: string]: number;
    }, propertyTo: {
        [key: string]: number;
    }, option?: interfaces.tween.ITweenOption): interfaces.tween.ITweener;
    /**
     * 立即停止一个缓动
     * @param target 被缓动的对象
     * @param forceComplete 是否强制到结束值
     */
    function kill(target: any, forceComplete?: boolean): void;
}
declare namespace gea.adapters.abstracts.ui {
    abstract class UIBase extends cc.Component implements gea.interfaces.ui.IUI {
        /**
         * 模态UI
         */
        static get modal(): boolean;
        /**
         * 获取prefabUrl
         */
        static get prefabUrl(): string;
        /**ui类型 */
        static get uiType(): gea.enums.ui.ui_type;
        get customTweenShow(): gea.interfaces.tween.ITweener | Array<gea.interfaces.tween.ITweener> | undefined;
        get customTweenHide(): gea.interfaces.tween.ITweener | Array<gea.interfaces.tween.ITweener> | undefined;
        static get runTimeDynamicAsset(): {
            url: string;
            type?: typeof cc.Asset;
        }[];
        get nodePreventTapClose(): cc.Node;
        set nodePreventTapClose(value: cc.Node);
        set autoRelease(value: boolean);
        get autoRelease(): boolean;
        set autoReleaseDelayTime(value: number);
        get autoReleaseDelayTime(): number;
        set blockEvents(value: boolean);
        get blockEvents(): boolean;
        set multiInstance(value: boolean);
        get multiInstance(): boolean;
        /**默认配置信息 */
        protected static DEFAULT_SETUP: {
            modal?: boolean;
        };
        private static _mapRuntimeDynamicAsset;
        preAssets: cc.Asset[];
        _nodePreventTapClose: cc.Node;
        _autoRelease: boolean;
        _autoReleaseDelayTime: number;
        _blockEvents: boolean;
        _multiInstance: boolean;
        constructor();
        static appendRunTimeDynamicAsset(...assets: {
            url: string;
            type?: typeof cc.Asset;
        }[]): void;
        static clearRunTimeDynamicAsset(): void;
        /**
         * 设置
         * @param value
         */
        static setup(value: {
            modal?: boolean;
        }): void;
        /**
         * 添加到舞台前的回调/UI已经在显示中,再次调用show,也会回调
         * @param args
         */
        callbackBeforeShow(...args: any[]): void;
        /**
         * 添加到舞台后的回调//UI已经在显示中,再次调用show,也会回调
         * @param args
         */
        callbackAfterShow(...args: any[]): void;
        /**
         * 从舞台移除前的回调
         * @param args
         */
        callbackBeforeHide(...args: any[]): void;
        /**
         * 从舞台移除后的回调
         * @param args
         */
        callbackAfterHide(...args: any[]): void;
    }
}
declare namespace gea.interfaces.ui {
    type IUIClass = typeof adapters.abstracts.ui.UIBase;
    interface IUI {
        /**
         * 自定义实例的展示动画
         */
        readonly customTweenShow: gea.interfaces.tween.ITweener | Array<gea.interfaces.tween.ITweener> | undefined;
        /**
         * 自定义实例的移除动画
         */
        readonly customTweenHide: gea.interfaces.tween.ITweener | Array<gea.interfaces.tween.ITweener> | undefined;
        /**
         * 添加到舞台前的回调/UI已经在显示中,再次调用show,也会回调
         * @param args
         */
        callbackBeforeShow(...args: any[]): void;
        /**
         * 添加到舞台后的回调/UI已经在显示中,再次调用show,也会回调
         * @param args
         */
        callbackAfterShow(...args: any[]): void;
        /**
         * 从舞台移除前的回调
         * @param args
         */
        callbackBeforeHide(...args: any[]): void;
        /**
         * 从舞台移除后的回调
         * @param args
         */
        callbackAfterHide(...args: any[]): void;
    }
}
declare namespace gea.adapters.interfaces.ui {
    interface IUIManager {
        /**
         * 视窗大小，游戏视图窗口
         */
        readonly viewPort: {
            width: number;
            height: number;
            halfWidth: number;
            halfHeight: number;
        };
        /**
         * 模态ui遮罩
         */
        readonly nodeModal: cc.Node;
        /**
         * 显示一个ui
         * @param uiClass 要显示的ui的class
         * @param option  额外参数
         * + tweener: 通过gea.tween.create创建
         * + args: 额外参数，会携带在callbackBeforeShow、callbackAfterShow中
         */
        show(uiClass: gea.interfaces.ui.IUIClass, option?: {
            tween?: {
                duration: number;
                from?: {
                    [key: string]: number;
                };
                to?: {
                    [key: string]: number;
                };
                option?: gea.interfaces.tween.ITweenOption;
            };
            args?: any[];
        }): IUIManager;
        /**
         * 隐藏一个ui
         * @param uiClass 要显示的ui的class或者ui实例
         * @param option  额外参数
         * + tweener: 通过gea.tween.create创建
         * + args: 额外参数，会携带在callbackBeforeShow、callbackAfterShow中
         */
        hide(uiClass: gea.interfaces.ui.IUIClass | gea.adapters.abstracts.ui.UIBase, option?: {
            tween?: {
                duration: number;
                from?: {
                    [key: string]: number;
                };
                to?: {
                    [key: string]: number;
                };
                option?: gea.interfaces.tween.ITweenOption;
            };
            args?: any[];
        }): IUIManager;
        /**
         * 隐藏所有ui
         */
        hideAll(excludeUIClass: gea.interfaces.ui.IUIClass[]): IUIManager;
        /**
         * 判断某个ui是否正在显示
         * @param uiClass
         */
        isShowing(uiClass: gea.interfaces.ui.IUIClass): boolean;
        /**
         * ui设置
         * @param config 设置
         * + modal，模态窗口黑色遮罩的设置
         */
        setup(config: {
            modal?: {
                tweenShow?: {
                    duration: number;
                    from?: {
                        opacity: number;
                    };
                    to?: {
                        opacity: number;
                    };
                    option?: gea.interfaces.tween.ITweenOption;
                } | {
                    duration: number;
                    from?: {
                        opacity: number;
                    };
                    to?: {
                        opacity: number;
                    };
                    option?: gea.interfaces.tween.ITweenOption;
                }[];
                tweenHide?: {
                    duration: number;
                    from?: {
                        opacity: number;
                    };
                    to?: {
                        opacity: number;
                    };
                    option?: gea.interfaces.tween.ITweenOption;
                } | {
                    duration: number;
                    from?: {
                        opacity: number;
                    };
                    to?: {
                        opacity: number;
                    };
                    option?: gea.interfaces.tween.ITweenOption;
                }[];
            };
        }): IUIManager;
        /**
         * 针对某ui事件新增一个订阅者,订阅执行一次后关闭,或者off显式关闭
         * @param tag 标记
         * @param callback 回调函数--订阅者
         * @param scope 回调函数作用域
         * @param callbackArgs 回调参数
         * @see gea.events.ui
         */
        once(tag: any, callback: Function, scope: any, ...callbackArgs: any[]): IUIManager;
        /**
         * 针对某ui事件新增一个订阅者
         * @param tag 标记
         * @param callback 回调函数--订阅者
         * @param scope 回调函数作用域
         * @param callbackArgs 回调参数
         * @see gea.events.ui
         */
        on(tag: any, callback: Function, scope: any, ...callbackArgs: any[]): IUIManager;
        /**
         * 针对某ui事件新增一个订阅者
         * @param tag 标记
         * @param callbackLimite 回调次数限制,小于等于0表示不限制回调次数,default = 0,如果此参数不是一个数字,那么将把此参数作为callback参数的值使用
         * @param callback 回调函数--订阅者
         * @param scope 回调函数作用域
         * @param callbackArgs 回调参数
         * @see gea.events.ui
         */
        on(tag: any, callbackLimite: number, callback: Function, scope: any, ...callbackArgs: any[]): IUIManager;
        /**
         * 移除一个订阅者
         * @param tag 标记
         * @param callback 回调函数
         * @param scope 回调函数作用域
         */
        off(tag: any, callback: Function, scope: any): IUIManager;
        /**
         * 触发一个tag,通知所有的tag订阅者(执行回调函数)
         * @param tag 标记
         * @param args 附加回调参数
         */
        /**
         * 移除实例相关的所有订阅者
         * @param scope 实例本身(this)
         */
        offByScope(scope: any): IUIManager;
    }
}
declare namespace gea.adapters.ui {
    class UIManager implements adapters.interfaces.ui.IUIManager {
        get viewPort(): {
            width: number;
            height: number;
            halfWidth: number;
            halfHeight: number;
        };
        get nodeModal(): cc.Node;
        private _viewPort;
        /** 已创建的/正在加载中的ui字典 */
        private _mapUI;
        /** 已经实例化，但是还未进入到_dicUi的ui节点 */
        private _mapUINodeBeforeDraw;
        /** ui显示参数 */
        private _mapUIShowOption;
        /**
         * ui的Widget组件字典
         * 只有widget的alignMode为cc.Widget.AlignMode.ON_WINDOW_RESIZE时会存在_dicUiWidget
         */
        private _dicUiWidget;
        /** 已经显示到舞台的ui */
        private _mapOpeningUI;
        /** uuid to uiClass*/
        private _mapUUIDToUIClass;
        /**  ui容器列表 */
        private _listLayer;
        /** 正在显示的模态UI数量 */
        private _modalCount;
        /**模态层 */
        private _layerModal;
        /**模态蒙层对象 */
        private _viewModal;
        private _graphicsModal;
        private _mapUIAssets;
        private _setup;
        constructor();
        isShowing(uiClass: gea.interfaces.ui.IUIClass): boolean;
        once(tag: any, callback: Function, scope: any, ...callbackArgs: any[]): interfaces.ui.IUIManager;
        on(tag: any, callbackLimit: number | Function, callback: Function, scope: any, ...callbackArgs: any[]): interfaces.ui.IUIManager;
        off(tag: any, callback: Function, scope: any): interfaces.ui.IUIManager;
        offByScope(scope: any): interfaces.ui.IUIManager;
        show(uiClass: gea.interfaces.ui.IUIClass, option?: {
            tween?: {
                duration: number;
                from: {
                    [key: string]: number;
                };
                to: {
                    [key: string]: number;
                };
                option: gea.interfaces.tween.ITweenOption;
            };
            args: any[];
        }): UIManager;
        hide(uiClass: gea.interfaces.ui.IUIClass, option?: {
            tween?: {
                duration: number;
                from: {
                    [key: string]: number;
                };
                to: {
                    [key: string]: number;
                };
                option: gea.interfaces.tween.ITweenOption;
            };
            args: any[];
        }): UIManager;
        hideAll(excludeUIClass?: gea.interfaces.ui.IUIClass[]): this;
        setup(option: {
            modal?: {
                tweenShow: {
                    duration: number;
                    from?: {
                        opacity: number;
                    };
                    to?: {
                        opacity: number;
                    };
                    option?: gea.interfaces.tween.ITweenOption;
                } | {
                    duration: number;
                    from?: {
                        opacity: number;
                    };
                    to?: {
                        opacity: number;
                    };
                    option?: gea.interfaces.tween.ITweenOption;
                }[];
                tweenHide: {
                    duration: number;
                    from?: {
                        opacity: number;
                    };
                    to?: {
                        opacity: number;
                    };
                    option?: gea.interfaces.tween.ITweenOption;
                } | {
                    duration: number;
                    from?: {
                        opacity: number;
                    };
                    to?: {
                        opacity: number;
                    };
                    option?: gea.interfaces.tween.ITweenOption;
                }[];
            };
        }): UIManager;
        private loadUIAssets;
        private startLoadUIAssets;
        private getUnLoadedUIAssets;
        private countModal;
        private refreshModal;
        private reDrawModal;
        private releaseUI;
        private delayToReleaseUI;
        private showUI;
        private addUIBeforeDraw;
        private addUIImmediately;
        private afterShowUI;
        private afterHideUI;
        /**
        * 场景运行后,初始化UI容器,ui容器为空节点,高宽为屏幕高宽,配有widgt,位置在Canvas(0,0)
        */
        private afterSceneLaunch;
        private applyWidget;
        private onStageResize;
    }
    const manager: UIManager;
}
declare namespace gea {
    const ui: adapters.interfaces.ui.IUIManager;
}
declare namespace hogame.interfaces.utils {
    interface IResControl {
        /**
         * 设置加载失败时重试次数，默认值5
         * @param value
         */
        retryCount(value: number): IResControl;
        /**
         * 设置加载失败时重试的间隔，单位ms，默认值2000
         * @param value
         */
        retryDuration(value: number): IResControl;
        /**
         * 从远程获取一张图片
         * @param url 远程图片地址
         * @param callback 图片加载完的回调函数
         * @param callbackScope 回调函数的作用域
         */
        getFrameFromRemote(url: string, callback: (texture: cc.Texture2D, originUrl?: string) => void, callbackScope?: any, limitWidth?: number, limitHeight?: number): void;
    }
}
declare namespace hogame.interfaces.utils {
    interface IRenderHeadOpt {
        /**默认资源,在加载真实头像的时候使用的资源,如果为空，则用sprite的默认资源 */
        defaultTexture?: cc.Texture2D;
        /**清楚标记 */
        clearTag?: string | number;
    }
    interface IUserRender {
        /**
         * 根据uid，目标Sprite渲染玩家头像
         * @param uid
         */
        head(uid: string | number, sprite: cc.Sprite, opts?: IRenderHeadOpt): IUserRender;
        /**
         * 根据uid，目标文本渲染玩家名字
         * @param uid
         * @param lable
         * @param maxLen 最大字数，表情/中文/英文都按一个字数计算
         * @param maxWidth 最大宽度，文本`node`的宽度，如果`maxLen`字数渲染出的文本节点宽度依然大于`maxWidth`，则继续截断
         */
        name(uid: string | number, label: cc.Label, maxUtf8Len?: number, maxWidth?: number): IUserRender;
        /**
         * 根据uid，目标Sprite渲染玩家性别
         * @param uid 用户uid
         * @param sprite 性别sprite
         * @param maleUrl 男性默认图标路径，会覆盖[sexDefault](#)接口设置的默认图标(暂不支持网络图标，请设置相对于项目`resource`目录的路径)
         * @param femaleUrl 女性默认图标路径会覆盖[sexDefault](#)接口设置的默认图标(暂不支持网络图标，请设置相对于项目`resource`目录的路径)
         */
        sex(uid: string | number, sprite: cc.Sprite, maleUrl?: string, femaleUrl?: string): IUserRender;
        /**
         * 设置男性&女性默认图标路径，设置默认图标之后就不需要每次调用[sex](#)接口的时候设置路径了
         * @param maleUrl 男性默认图标路径(暂不支持网络图标，请设置相对于项目`resource`目录的路径)
         * @param femaleUrl 女性默认图标路径(暂不支持网络图标，请设置相对于项目`resource`目录的路径)
         */
        sexDefault(maleUrl: string, femaleUrl: string): IUserRender;
        /**
         * 渲染多个/全部玩家相关UI,参数参考 `head` `name` `sex` 接口
         * @param uid
         * @param opt
         */
        few(uid: string | number, opt: {
            head?: {
                sprite: cc.Sprite;
                opts?: IRenderHeadOpt;
            };
            name?: {
                label: cc.Label;
                maxUtf8Len?: number;
                maxWidth?: number;
            };
            sex?: {
                sprite: cc.Sprite;
                maleUrl?: string;
                femaleUrl?: string;
            };
        }): IUserRender;
    }
}
declare namespace hogame.utils {
    const res: hogame.interfaces.utils.IResControl;
}
declare namespace gea.interfaces.utils {
    /**
     * 字符串相关接口
     * @see unicode编码 https://www.freebuf.com/articles/web/25623.html
     * @see unicode编码 https://blog.csdn.net/hezh1994/article/details/78899683
     */
    interface IStringUtils {
        /**
         * 按utf8长度截取字符串
         * @param str 原始字符串
         * @param len 要截取的长度
         * @param tailSymbol 超过len长度时，要追加的字符,默认值:'...'
         */
        subUtf8(str: string, len: number, tailSymbol?: string): string;
        /**
         * 获取字符串的utf8格式长度
         * @param str
         */
        utf8len(str: string): number;
    }
}
declare namespace gea.utils {
    const str: gea.interfaces.utils.IStringUtils;
}
declare namespace hogame.interfaces.utils {
    interface IUserInfoManager {
        /**
         * 设置默认玩家信息,在pc上由于不能通过hg获取玩家信息,所以可以自行设置默认的玩家信息
         * 参数为空时，获取默认信息
         * @param info
         */
        default(info?: hg.IUserMoreInfo): IUserInfoManager | hg.IUserMoreInfo;
        /**
         * 设置请求用户数据时的延迟信息
         *
         * 当延迟时间未设置或者<=0时，默认在下一帧请求用户数据，以优化在for循环里循环请求数据的情况
         * @param time 延迟时间 单位ms default=200ms
         * @param forever 是否为以后的每次请求都设置延迟 default=false
         */
        delayTime(time?: number, forever?: boolean): IUserInfoManager;
        /**
         * 获取玩家信息
         * @param uid 单个uid或者一个uid数组
         * @param callback 回调函数
         * @param callbackScope 回调函数作用域
         * @param callbackArgs 回调函数参数,在用户数据之前
         */
        get(uid: (string | number) | (string | number)[], callback: (...infos: hg.IUserMoreInfo[]) => void, callbackScope?: any, ...callbackArgs: any[]): IUserInfoManager;
        /**
         * 异步延迟，模拟app获取用户数据的延迟，单位ms，默认1000ms，最小值限制为500，必须验证一下延迟的情况，仅在本地调试时生效
         * @param value
         */
        asyncTime(value: number): IUserInfoManager;
    }
}
declare namespace hogame.utils {
    const userInfo: hogame.interfaces.utils.IUserInfoManager;
}
declare namespace hogame.utils {
    /**
     * 根据文本内容，目标文本渲染玩家名字
     * @param content 文本内容
     * @param lable
     * @param maxLen 最大字数，表情/中文/英文都按一个字数计算
     * @param maxWidth 最大宽度，文本node的宽度，如果maxLen字数渲染出的文本节点宽度依然大于maxWidth，则继续截断
     */
    function renderLimitLable(content: string, lable: cc.Label, maxLen?: number, maxWidth?: number): void;
    const userRender: hogame.interfaces.utils.IUserRender;
}
declare namespace gea.abstracts.ui {
    abstract class ModalBase extends gea.adapters.abstracts.ui.UIBase {
        /**默认配置信息 */
        protected static DEFAULT_SETUP: {
            modal?: boolean;
        };
        static get uiType(): gea.enums.ui.ui_type;
    }
}
declare namespace gea.abstracts.ui {
    abstract class OverModalBase extends gea.adapters.abstracts.ui.UIBase {
        /**默认配置信息 */
        protected static DEFAULT_SETUP: {
            modal?: boolean;
        };
        static get uiType(): gea.enums.ui.ui_type;
    }
}
declare namespace gea.abstracts.ui {
    abstract class PanelBase extends gea.adapters.abstracts.ui.UIBase {
        /**默认配置信息 */
        protected static DEFAULT_SETUP: {
            modal?: boolean;
        };
        /**默认配置信息 */
        static get uiType(): gea.enums.ui.ui_type;
    }
}
declare namespace gea.abstracts.ui {
    abstract class UnderModalBase extends gea.adapters.abstracts.ui.UIBase {
        /**默认配置信息 */
        protected static DEFAULT_SETUP: {
            modal?: boolean;
        };
        static get uiType(): gea.enums.ui.ui_type;
    }
}
declare namespace gea.abstracts.ui {
    abstract class ViewBase extends gea.adapters.abstracts.ui.UIBase {
        /**默认配置信息 */
        protected static DEFAULT_SETUP: {
            modal?: boolean;
        };
        static get uiType(): gea.enums.ui.ui_type;
    }
}
declare namespace gea.abstracts.ui {
    abstract class WindowBase extends gea.adapters.abstracts.ui.UIBase {
        /**默认配置信息 */
        protected static DEFAULT_SETUP: {
            modal?: boolean;
        };
        static get uiType(): gea.enums.ui.ui_type;
    }
}
declare namespace hogame.interfaces {
    interface IConfigData {
        _uid?: string;
        _url?: string;
        /**服务器地址 */
        url: string;
        /**游戏ID */
        readonly gameId: string;
        /**uid */
        uid: string;
    }
    interface IConfig extends IConfigData {
        setup(config: {
            /**服务器地址 */
            url?: string;
            /**游戏ID */
            gameId?: string;
            /**uid */
            uid?: string;
        }): void;
    }
}
declare namespace hogame {
    const config: interfaces.IConfig;
}
declare namespace gea.interfaces.net {
    /**
     * 网络解析器编码结果
     */
    interface INetParserEncodeResult {
        /**是否可以发送消息 */
        sendAble: boolean;
        /**消息key */
        msg: string | number;
        /**发送给服务器的数据 */
        data: any;
        /**
         * 默认日志
         * + 网络实例会在发送消息前将日志打印出来
         * + 如果这个值是空的，则不打印
         */
        log: any;
    }
    /**
     * 网络解析器解码结果
     */
    interface INetParserDecodeResult {
        /**消息解析耗时 */
        decodeTime: number;
        /**消息key */
        msg: string | number;
        /**
         * 收到的服务器返回的数据
         * + 解析后的`js对象`
         * + 网络实例会把这个`js对象`发布出去，监听了`msg`的地方会收到
         */
        data: any;
        /**
         * 默认日志
         * + 网络实例在消息解析后会将日志打印出来
         * + 如果这个值是空的，则不打印
         */
        log: any;
        /**额外发布的通知数据，服务器返回的当前消息内容会首先包含在数据中 */
        args: any[];
    }
    /**
     * 网络解析器
     */
    interface INetParser {
        /**
         * 编码函数
         * @param netTag 编码tag,一般用作关系映射
         * @param sendData 被编码对象
         * @param type
         * @returns INetParserEncodeResult
         */
        encode(netTag: string | number, sendData: any, ...args: any[]): INetParserEncodeResult;
        /**
         * 解码函数
         * @param recieveData
         * @param type
         * @returns INetParserDecodeResult
         */
        decode(recieveData: any, ...args: any[]): INetParserDecodeResult;
        /**
         * 设置消息编码解码和路径映射
         * @param mapping
         * @ignore
         */
        setMapping(mapping: any): INetParser;
        /**
         * 设置自定义encode日志回调
         * @param callback
         */
        setEncodeLogGenerator?(callback: (opt: any) => any): INetParser;
        /**
         * 设置自定义decode日志回调
         * @param callback
         */
        setDecodeLogGenerator?(callback: (opt: any) => any): INetParser;
    }
}
declare namespace gea.interfaces.net {
    interface INet extends interfaces.base.IDestroyAble {
        /**
         * 网络数据编码解码组件
         */
        readonly parser: interfaces.net.INetParser;
        /**
         * 服务器时间
         */
        readonly serverTime: number;
        /**
         * 网络延迟时间
         */
        readonly delayTime: number;
        /**
         * 是否已连接
         */
        readonly connected: boolean;
        /**
         * 更新服务器时间
         * @param serverTime 服务器时间
         * @param delayTime 网络延迟
         * @param log 是否打印服务器时间差以及网络延迟,一般调试才用,default=false
         */
        updateServerTime(serverTime: number, delayTime: number, log?: boolean): void;
        /**
         * 连接服务器
         * @param url 连接地址
         * @param option 连接参数
         */
        connect(url: string, ...options: any[]): void;
        /**
         * 断开连接
         */
        disconnect(): void;
        /**
         * 发送消息
         * @param netTag
         * @param data
         */
        send(netTag: string | number, data?: any, ...args: any[]): INet;
        /**
         * 新增一个Net相关的消息接收者,接收一次后关闭,或者off显式关闭
         * @param netTag 消息tag
         * @param callback 回调函数
         * @param scope 回调函数作用域
         * @param callbackArgs 回调参数
         */
        once(netTag: string | number, callback: Function, scope?: any, ...callbackArgs: any[]): INet;
        /**
        * 新增一个Net相关的消息接收者
        * @param netTag 消息tag
        * @param callback 回调函数
        * @param scope 作用域
        * @param args 回调函数参数
        */
        on(netTag: string | number, callback: Function, scope?: any, ...callbackArgs: any[]): INet;
        /**
        * 新增一个Net相关的消息接收者
        * @param netTag 消息tag
        * @param callbackLimite 回调次数限制,小于等于0表示不限制回调次数,default = 0,如果此参数不是一个数字,那么将把此参数作为callback参数的值使用
        * @param callback 回调函数
        * @param scope 作用域
        * @param args 回调函数参数
        */
        on(netTag: string | number, callbackLimite: number, callback: Function, scope?: any, ...callbackArgs: any[]): INet;
        /**
         * 新增一个优先的Net相关的消息接收者,接收一次后关闭,或者offPrior显式关闭
         * @param netTag 消息tag
         * @param callback 回调函数--订阅者
         * @param scope 回调函数作用域
         * @param callbackArgs 回调参数
         */
        oncePrior(netTag: string | number, callback: Function, scope?: any, ...callbackArgs: any[]): INet;
        /**
         * 新增一个优先的Net相关的消息接收者
         * @param netTag 消息tag
         * @param callback 回调函数
         * @param scope 作用域
         * @param callbackLimite 回调次数限制,为0表示不限制回调次数,default=0
         * @param args 回调函数参数
         */
        onPrior(netTag: string | number, callback: Function, scope?: any, ...callbackArgs: any[]): INet;
        /**
         * 新增一个优先的Net相关的消息接收者
         * @param netTag 消息tag
         * @param callbackLimite 回调次数限制,小于等于0表示不限制回调次数,default = 0,如果此参数不是一个数字,那么将把此参数作为callback参数的值使用
         * @param callback 回调函数
         * @param scope 作用域
         * @param callbackLimite 回调次数限制,为0表示不限制回调次数,default=0
         * @param args 回调函数参数
         */
        onPrior(netTag: string | number, callbackLimite: number, callback: Function, scope?: any, ...callbackArgs: any[]): INet;
        /**
         * 去掉一个Net相关的消息接收者
         * @param netTag 消息tag
         * @param callback 回调函数
         * @param scope 作用域
         */
        off(netTag: string | number, callback: Function, scope?: any): INet;
        /**
         * 移除实例相关的所有网络事件监听
         * @param scope 实例本身(this)
         */
        offByScope(scope: any): INet;
        /**
         * 发布一个网络实例通知
         * @param tag 通知
         * @param args 通知携带的额外参数
         */
        dispatch(tag: any, ...args: any[]): INet;
        /**
         * 禁止req消息log，如果参数传空，则不打印发送的客户端消息
         * @param netTags
         */
        forbidReqLog(...netTags: (string | number)[]): INet;
        /**
         * 禁止res消息log，如果参数传空，则不打印收到的服务器消息
         * @param netTags
         */
        forbidResLog(...netTags: (string | number)[]): INet;
        /**
         * 新建一个网络实例
         * @param 实例的名字，默认为NET,NET1,NET2...
         */
        createNew(name?: string, ...args: any[]): INet;
    }
}
declare namespace gea.events {
    /**网络交互中发生的事件 */
    enum net {
        /**服务器连接成功 */
        connect = "gea.events.net.connect",
        /**
         * 服务器连接失败
         * + 重连次数达到上限时，仍未连上服务器
         */
        connect_fail = "gea.events.net.connect_fail",
        /**服务器连接断开 */
        disconnect = "gea.events.net.disconnect",
        /**重连成功 */
        reconnect = "gea.events.net.reconnect",
        /**
         * 主动断开连接
         * + 手动调用disconnect时触发
         * + 此事件发生时，不会触发disconnect事件
         */
        disconnect_self = "gea.events.net.disconnect_self",
        /**消息错误,具体什么时机抛出根据业务决定 */
        error = "gea.events.net.error",
        /**心跳超时事件 */
        heart_beat_timeout = "gea.events.net.heart_beat_timeout"
    }
}
declare namespace gea.abstracts.net {
    abstract class NetBase implements interfaces.net.INet {
        get parser(): interfaces.net.INetParser;
        get serverTime(): number;
        get delayTime(): number;
        get connected(): boolean;
        protected _reqForbiddenAll: boolean;
        protected _dicReqForbidden: {
            [netTag: string]: boolean;
        };
        protected _resForbiddenAll: boolean;
        protected _dicResForbidden: {
            [netTag: string]: boolean;
        };
        protected _name: string;
        private _prevSyncTime;
        private _serverTime;
        private _delayTime;
        createNew(name?: string): NetBase;
        connect(uri: string, opts?: any): void;
        disconnect(): void;
        send(netTag: string | number, data?: any, ...args: any[]): NetBase;
        updateServerTime(serverTime: number, delayTime: number, log?: boolean): void;
        once(netTag: string | number, callback: Function, scope?: any, ...callbackArgs: any[]): NetBase;
        on(netTag: string | number, callbackLimite: number | Function, callback: Function, scope?: any, ...callbackArgs: any[]): NetBase;
        off(netTag: string | number, callback: Function, scope?: any): NetBase;
        oncePrior(netTag: string | number, callback: Function, scope?: any, ...callbackArgs: any[]): NetBase;
        onPrior(netTag: string | number, callbackLimite: number | Function, callback: Function, scope?: any, ...callbackArgs: any[]): NetBase;
        offByScope(scope: any): NetBase;
        dispatch(tag: any, ...args: any[]): NetBase;
        forbidReqLog(...netTags: (string | number)[]): NetBase;
        forbidResLog(...netTags: (string | number)[]): NetBase;
        destroy(): void;
        callbackAfterBorrow(name?: string): void;
        callbackBeforeRestore(): boolean;
        protected decode(data: any): void;
        protected encode(netTag: string | number, data: any, ...args: any[]): gea.interfaces.net.INetParserEncodeResult;
        protected onNetEvent(event: events.net, ...args: any[]): void;
        protected onIoEvent(event: string, param?: any): void;
        protected onWsEvent(event: string, param?: any): void;
        private syncServerTime;
        private logRes;
        private logReq;
    }
}
declare namespace gea.interfaces.net {
    interface IWsConnectOption {
        binaryType?: 'blob' | 'arraybuffer';
        protocols?: string | string[];
        /**
         * Should we allow reconnections?
         * @default true
         */
        reconnection?: boolean;
        /**
         * How many reconnection attempts should we try?
         * @default Infinity
         */
        reconnectionAttempts?: number;
        /**
         * The time delay in milliseconds between reconnection attempts
         * @default 1000
         */
        reconnectionDelay?: number;
        /**
         * The max time delay in milliseconds between reconnection attempts
         * @default 5000
         */
        reconnectionDelayMax?: number;
        /**
         * 计算重连延迟的函数
         */
        reconnectionDealyFunc?: (/**当前重连次数 */ reconnectionAttempts: number, /**重连最小延迟 */ reconnectionDelay: number, /**重连最大延迟 */ reconnectionDelayMax: number) => number;
        /**
         * The timeout in milliseconds for our connection attempt
         * @default 20000
         */
        timeout?: number;
        path?: string;
        query?: {};
    }
}
declare namespace gea.interfaces.net {
    type UpStream = {
        path?: string;
        seq?: number;
        conn_id?: string;
        uid?: string;
        room_id?: string;
        header?: ({
            [k: string]: string;
        } | null);
        content_type?: string;
        body_name?: string;
        body?: Uint8Array | null;
    };
    type DownStream = {
        path?: string;
        seq?: number;
        conn_id?: string;
        uid?: string;
        room_id?: string;
        status_code?: number;
        header?: ({
            [k: string]: string;
        } | null);
        content_type?: string;
        body_name?: string;
        body?: Uint8Array | null;
    };
    interface IGmeNetParser extends interfaces.net.INetParser {
        /**
         * 设置消息编码解码和路径映射
         * @param mapping
         * @ignore
         */
        setMapping(mapping: {
            [msgName: string]: {
                parser: Function;
                path: string;
            };
        }): IGmeNetParser;
        /**
         * 设置自定义encode日志回调
         * @param callback
         */
        setEncodeLogGenerator(callback: (opt: {
            msg: string;
            body: Object;
            upStream: UpStream;
        }) => any): IGmeNetParser;
        /**
         * 设置自定义decode日志回调
         * @param callback
         */
        setDecodeLogGenerator(callback: (opt: {
            msg: string;
            body: Object;
            downStream: DownStream;
        }) => any): IGmeNetParser;
    }
}
declare namespace gea.interfaces.net {
    interface IGmeNet extends gea.interfaces.net.INet {
        /**
         * 网络数据编码解码组件
         */
        readonly parser: IGmeNetParser;
        /**
         * 心跳组件
         */
        readonly heartBeat: INetHeartBeat;
        /**
         * 持有此网络实例的uid
         */
        readonly uid: string | number;
        /**
         * 链接的url
         */
        readonly uri: string;
        /**
         * 连接服务器
         * @param url 连接地址
         * @param option 连接参数
         */
        connect(url: string, option: IWsConnectOption): void;
        attemptReconnect(): void;
        /**
         * 设置网络实例的一些信息
         * @param uid
         */
        setup(uid: string | number, opt?: {
            /**
             * 是否自动重连
             * @default true
             */
            reconnection?: boolean;
            /**
             * 自动重连次数上限
             * @default Infinity
             */
            reconnectionAttempts?: number;
            /**
             * 自动重连延迟(毫秒)
             * @default 1000
             */
            reconnectionDelay?: number;
            /**
             * 自动重连最大延迟(毫秒)
             * @default 5000
             */
            reconnectionDelayMax?: number;
            /**自定义自动重连延迟计算函数 */
            reconnectionDealyFunc?: (reconnectionAttempts: number, reconnectionDelay: number, reconnectionDelayMax: number) => number;
            /**
             * 连接超时时间(毫秒)
             * @default 10000
             */
            timeout?: number;
        }): IGmeNet;
        /**
         * 发送消息
         * @param netTag
         * @param data
         * @param path
         * @param roomId
         */
        send(netTag: string | number, data?: any, path?: string, roomId?: string): IGmeNet;
        /**
         * 加入房间
         * @param path 要加入的房间`path`
         * @param roomId 房间id,有的模块会由服务器指定房间id或者不同的客户端根据某个相同的值进入同一房间,默认为根据用户的`uid`生成一个房间id
         * @param msg 如果有额外的信息传递则用`pb.IGMEInternalEnterRoom`包装一下
         */
        enterRoom(path: string, roomId?: string, msg?: any): void;
        /**
         * 离开房间
         * @param path 要离开的房间`path`
         * @param msg 如果有额外的信息传递则用这个`pb.IGMEInternalLeaveRoom`报装一下
         */
        leaveRoom(path: string, msg?: any): void;
    }
}
declare namespace gea.abstracts.net {
    abstract class NetParserBase implements interfaces.net.INetParser {
        protected _entity: gea.interfaces.net.INet | undefined;
        protected _mapping: {
            [msgName: string]: {
                parser: any;
                [key: string]: any;
            };
        } | undefined;
        protected _encodeLogGenerator: ((opt: any) => any) | undefined;
        protected _decodeLogGenerator: ((opt: any) => any) | undefined;
        encode(netTag: string | number, sendData: any, ...args: any[]): interfaces.net.INetParserEncodeResult;
        decode(recieveData: ArrayBuffer | Array<string | ArrayBuffer>): interfaces.net.INetParserDecodeResult;
        setMapping(mapping: any): NetParserBase;
        setEncodeLogGenerator(callback: (opt: any) => any): NetParserBase;
        setDecodeLogGenerator(callback: (opt: any) => any): NetParserBase;
        destroy(): void;
    }
}
declare namespace gea {
}
declare namespace gea.interfaces.net {
    interface INetHeartBeat {
        /**
         * 获取超时次数上限
         */
        timeoutCountLimit(): number;
        /**
         * 设置超时次数上限
         * + 每次ping的时候超时次数+1
         * + 当超时次数达到设定的值时,网络实例会抛出一个`gea.events.net.heart_beat_timeout`事件
         * + 默认值为 `Infinity`，表示永远不会超时
         */
        timeoutCountLimit(value: number): INetHeartBeat;
        /**
         * 获取发送`ping`的频率，单位是毫秒
         */
        interval(): number;
        /**
         * 设置发送`ping`的频率，单位是毫秒
         * + 默认值为5000毫秒
         */
        interval(value: number): INetHeartBeat;
        /**
         * 设置启动心跳的事件
         * @param value 具体事件
         * + 心跳组件依附的网络实例会监听这个事件，在这个事件之后启动`ping`
         * + 心跳超时后会停止`ping`，再次启动`ping`的时候也是依赖这个事件
         * + 默认值为 `gea.events.net.coonnect`，表示网络连上之后立即启动`ping`
         * @param immediately 是否在设置事件的时候就立即启动`ping`
         */
        startupEvent(value: string | number, immediately?: boolean): INetHeartBeat;
        /**
         * 是否打印服务器时间差
         * @param value
         * + 本地会自己计算一个服务器时间
         * + 每次更新服务器时间的时候根据这个方法设置的值决定是否打印
         * + 默认不打印
         */
        printServerDiffTime(value: boolean): INetHeartBeat;
    }
}
declare namespace gea.abstracts.net {
    abstract class NetHeartBeatBase implements interfaces.net.INetHeartBeat {
        protected _entity: interfaces.net.INet | undefined;
        protected _timeoutCountLimit: number;
        protected _pingRate: number;
        protected _pingStartEvent: string | number;
        protected _listHeartBeatClientTime: number[];
        protected _printserverDiffTime: boolean;
        private _running;
        private _timeoutCount;
        timeoutCountLimit(): number;
        timeoutCountLimit(value: number): interfaces.net.INetHeartBeat;
        interval(): number;
        interval(value: number): interfaces.net.INetHeartBeat;
        startupEvent(value: string | number, immediately?: boolean): interfaces.net.INetHeartBeat;
        printServerDiffTime(value: boolean): interfaces.net.INetHeartBeat;
        destroy(): void;
        protected ping(): void;
        protected pong(...args: any[]): void;
        /**
         * 启动ping
         */
        private startPing;
        private stopPing;
        /**
         * ping计数
         */
        private pingCount;
    }
}
declare namespace gea {
}
declare namespace gea {
    /**
     * 玩家网络实例
     */
    const net: interfaces.net.IGmeNet;
}
declare namespace hogame {
    /**
     * 登录游戏
     * @param net 要登录的网络实例
     * @param invokeGameLoadResult 是否调用`hg.gameLoadResult`
     * @param query query参数，默认为空
     */
    function login(net: gea.interfaces.net.IGmeNet, invokeGameLoadResult?: boolean, query?: {
        [key: string]: string | number;
    }): void;
}
declare namespace hogame.Md5 {
    function hex_md5(s: any): string;
    function b64_md5(s: any): string;
    function str_md5(s: any): string;
    function hex_hmac_md5(key: any, data: any): string;
    function b64_hmac_md5(key: any, data: any): string;
    function str_hmac_md5(key: any, data: any): string;
}
declare namespace hogame {
    function pkLogin(net: gea.interfaces.net.IGmeNet, post_data?: {
        channelid?: string;
        roomid?: string;
        player?: {
            name?: string;
            avatarUrl?: string;
            teamid?: string;
            sex?: 0 | 1;
            kv_sign?: string;
            opt?: {
                ai?: 1 | 0;
                level?: number;
                ai_info?: {
                    uid?: string;
                    nick?: string;
                    sex?: 0 | 1;
                };
            };
        };
    }, invokeGameLoadResult?: boolean): {
        channelid?: string;
        roomid?: string;
        player?: {
            name?: string;
            avatarUrl?: string;
            teamid?: string;
            sex?: 0 | 1;
            kv_sign?: string;
            opt?: {
                ai?: 1 | 0;
                level?: number;
                ai_info?: {
                    uid?: string;
                    nick?: string;
                    sex?: 0 | 1;
                };
            };
        };
    };
}
declare namespace hogame.utils {
    interface IFriendInfoManager {
        /**
         * 设置默认的好友列表，本地调试的时候不能从hagoApp获取好友列表，可以用来设置默认好友自己本地调试
         * @param friendInfos 好友列表
         */
        default(...friendInfos: {
            uid: string | number;
            sex?: hago.enums.sex;
            nick?: string;
            avatar?: string;
            type?: hago.enums.friendType;
            dist?: number;
            onlineStatus?: hago.enums.onlineStatus;
            alias?: hago.enums.constellation;
        }[]): IFriendInfoManager;
        /**
         * 获取整个好友列表，只能异步获取，失败后默认重试3次，可通过接口`retryCount`设置重试次数
         * @param callbackSuccess 获取好友数据成功回调
         * @param callbackScopeWhileSuccess 获取好友数据成功回调的作用域
         * @param callbackFailed 获取好友数据失败回调
         * @param callbackScopeWhileFailed 获取好友数据失败回调的作用域
         */
        get(callbackSuccess: (...friendInfos: hg.IFriendInfo[]) => void, callbackScopeWhileSuccess?: any, callbackFailed?: () => void, callbackScopeWhileFailed?: any): void;
        /**
         * 异步判断指定uid是否是自己的hago好友
         * @param uid
          * @param callbackSuccess 获取好友数据成功回调
         * @param callbackScopeWhileSuccess 获取好友数据成功回调的作用域
         * @param callbackFailed 获取好友数据失败回调
         * @param callbackScopeWhileFailed 获取好友数据失败回调的作用域
         */
        getByUid(uid: string | number, callbackScuccess: (friendInfo: hg.IFriendInfo) => void, callbackScopeWhileSuccess?: any, callbackFailed?: () => void, callbackScopeWhileFailed?: any): void;
        /**
         * 设置获取失败后的重试次数，默认重试3次
         * @param value
         */
        retryCount(value: number): IFriendInfoManager;
        /**
         * 重试前的延迟，单位ms，默认1000ms
         * @param value
         */
        retryDelay(value: number): IFriendInfoManager;
        /**
         * 异步延迟，模拟app获取好友数据的延迟，单位ms，默认1000ms，最小值限制为500，必须验证一下延迟的情况，仅在本地调试时生效
         * @param value
         */
        asyncTime(value: number): IFriendInfoManager;
    }
}
declare namespace hogame.utils {
    const friendInfo: hogame.utils.IFriendInfoManager;
}
