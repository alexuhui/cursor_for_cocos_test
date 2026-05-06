/** generate by parseMessage.py, do not moidfy */
import { net } from './pb'
import { pbm } from './pb'
export abstract class PBEnums {
    /** proto/base.proto */
    static readonly Req_LoadProgress: string = 'pbm.LoadProgressReq'
    static readonly Res_LoadProgress: string = 'pbm.LoadProgressRes'
    static readonly Req_ForceExit: string = 'pbm.ForceExitReq'
    static readonly Res_ForceExit: string = 'pbm.ForceExitRes'
    static readonly Req_GiveUp: string = 'pbm.GiveUpReq'
    static readonly Res_GiveUp: string = 'pbm.GiveUpRes'
    /** proto/game.proto */
    static readonly Res_LoginGame: string = 'pbm.LoginGameRes'
    static readonly Res_MissionInfo: string = 'pbm.MissionInfoRes'
    static readonly Req_MissionReward: string = 'pbm.MissionRewardReq'
    static readonly Res_MissionReward: string = 'pbm.MissionRewardRes'
    static readonly Req_GetTaskEntrance: string = 'pbm.GetTaskEntranceReq'
    static readonly Res_GetTaskEntrance: string = 'pbm.GetTaskEntranceRes'
    static readonly Req_GetGameConfig: string = 'pbm.GetGameConfigReq'
    static readonly Res_GetGameConfig: string = 'pbm.GetGameConfigRes'
    static readonly Req_FinishGuide: string = 'pbm.FinishGuideReq'
    static readonly Req_GetCoin: string = 'pbm.GetCoinReq'
    static readonly Res_GetCoin: string = 'pbm.GetCoinRes'
    static readonly Req_GetVipLevel: string = 'pbm.GetVipLevelReq'
    static readonly Res_GetVipLevel: string = 'pbm.GetVipLevelRes'
    static readonly Req_GetTodayIncome: string = 'pbm.GetTodayIncomeReq'
    static readonly Res_GetTodayIncome: string = 'pbm.GetTodayIncomeRes'
    static readonly Req_GetRocketRecords: string = 'pbm.GetRocketRecordsReq'
    static readonly Res_GetRocketRecords: string = 'pbm.GetRocketRecordsRes'
    static readonly Req_GetRoundRank: string = 'pbm.GetRoundRankReq'
    static readonly Res_GetRoundRank: string = 'pbm.GetRoundRankRes'
    static readonly Req_GetCurrentRound: string = 'pbm.GetCurrentRoundReq'
    static readonly Res_GetCurrentRound: string = 'pbm.GetCurrentRoundRes'
    static readonly Res_CurrentRound: string = 'pbm.CurrentRoundRes'
    static readonly Res_RocketMultiple: string = 'pbm.RocketMultipleRes'
    static readonly Res_RecoveryUser: string = 'pbm.RecoveryUserRes'
    static readonly Req_Bet: string = 'pbm.BetReq'
    static readonly Res_Bet: string = 'pbm.BetRes'
    static readonly Req_AutoRecovery: string = 'pbm.AutoRecoveryReq'
    static readonly Res_AutoRecovery: string = 'pbm.AutoRecoveryRes'
    static readonly Req_Recovery: string = 'pbm.RecoveryReq'
    static readonly Res_Recovery: string = 'pbm.RecoveryRes'
    static readonly Req_GetRecords: string = 'pbm.GetRecordsReq'
    static readonly Res_GetRecords: string = 'pbm.GetRecordsRes'
    static readonly Req_AutoBet: string = 'pbm.AutoBetReq'
    static readonly Res_AutoBet: string = 'pbm.AutoBetRes'
    static readonly Req_CancelAuto: string = 'pbm.CancelAutoReq'
    static readonly Res_CancelAuto: string = 'pbm.CancelAutoRes'
    static readonly Req_GetRank: string = 'pbm.GetRankReq'
    static readonly Res_GetRank: string = 'pbm.GetRankRes'
    static readonly Res_RankRewardNotify: string = 'pbm.RankRewardNotifyRes'
    static readonly Req_TestCmd: string = 'pbm.TestCmdReq'
    static readonly Res_TestCmd: string = 'pbm.TestCmdRes'
    static readonly Req_Report: string = 'pbm.ReportReq'
    static readonly Res_Report: string = 'pbm.ReportRes'
    static readonly Req_Cid: string = 'pbm.CidReq'
    static readonly Res_Cid: string = 'pbm.CidRes'
    static readonly Req_BatchGetCommodities: string = 'pbm.BatchGetCommoditiesReq'
    static readonly Res_BatchGetCommodities: string = 'pbm.BatchGetCommoditiesRes'
    static readonly Res_GameConfigChange: string = 'pbm.GameConfigChangeRes'
    static readonly Req_SetRedDiamondSwitch: string = 'pbm.SetRedDiamondSwitchReq'
    static readonly Res_SetRedDiamondSwitch: string = 'pbm.SetRedDiamondSwitchRes'
    /** proto/gameapinotify.proto */
    static readonly Req_GetGrandPrizeBanner: string = 'net.ihago.game.api.notify.GetGrandPrizeBannerReq'
    static readonly Res_GetGrandPrizeBanner: string = 'net.ihago.game.api.notify.GetGrandPrizeBannerRes'
    static readonly Req_Like: string = 'net.ihago.game.api.notify.LikeReq'
    static readonly Res_Like: string = 'net.ihago.game.api.notify.LikeRes'
    /** proto/gateway.proto */
    static readonly Req_GMEHeartBeat: string = 'reserved.gateway.ping'
    static readonly Res_GMEHeartBeat: string = 'reserved.gateway.pong'
    static readonly Req_GMEInternalEnterRoom: string = 'net.ihago.gme.srv.sidecar_gateway.GMEInternalEnterRoom'
    static readonly Res_GMEInternalEnterRoom: string = 'net.ihago.gme.srv.sidecar_gateway.GMEInternalEnterRoom'
    static readonly Req_GMEInternalLeaveRoom: string = 'net.ihago.gme.srv.sidecar_gateway.GMEInternalLeaveRoom'
    static readonly Res_GMEInternalLeaveRoom: string = 'net.ihago.gme.srv.sidecar_gateway.GMEInternalLeaveRoom'
    /** proto/metadata_commodity.proto */
    static readonly Req_BatchGetCommoditySimplifyInfo: string = 'net.ihago.money.api.metadata.BatchGetCommoditySimplifyInfoReq'
    static readonly Req_GetCommodity: string = 'net.ihago.money.api.metadata.GetCommodityReq'
    static readonly Res_GetCommodity: string = 'net.ihago.money.api.metadata.GetCommodityRes'
    /** proto/moneyapigamepointsmall.proto */
    static readonly Req_GetPoints: string = 'net.ihago.money.api.gamepointsmall.GetPointsReq'
    static readonly Res_GetPoints: string = 'net.ihago.money.api.gamepointsmall.GetPointsRes'
    /** proto/moneyapigameuser.proto */
    static readonly Req_GetGameInfo: string = 'net.ihago.money.api.gameuser.GetGameInfoReq'
    static readonly Res_GetGameInfo: string = 'net.ihago.money.api.gameuser.GetGameInfoRes'
    static readonly Req_IsGameUser: string = 'net.ihago.money.api.gameuser.IsGameUserReq'
    static readonly Res_IsGameUser: string = 'net.ihago.money.api.gameuser.IsGameUserRes'
    static readonly Req_GetGameBanner: string = 'net.ihago.money.api.gameuser.GetGameBannerReq'
    static readonly Res_GetGameBanner: string = 'net.ihago.money.api.gameuser.GetGameBannerRes'
    /** proto/trans.proto */
    static readonly Req_AggregateGet: string = 'pbm.AggregateGetReq'
    static readonly Res_AggregateGet: string = 'pbm.AggregateGetRes'
    /** proto/ymicroapirevenue.proto */
    static readonly Req_QueryCouponSummary: string = 'net.ihago.ymicro.api.revenue.QueryCouponSummaryReq'
    static readonly Res_QueryCouponSummary: string = 'net.ihago.ymicro.api.revenue.QueryCouponSummaryRes'
    static readonly Req_ReadMessage: string = 'net.ihago.ymicro.api.revenue.ReadMessageReq'
    static readonly Res_ReadMessage: string = 'net.ihago.ymicro.api.revenue.ReadMessageRes'
    // room,加入房间的时候用，这里以Room_开始列出所有用到room
    static readonly Room = {
        'game': 'game',
    }
    // mapping
    static readonly Mapping = {
        'pbm.LoadProgressReq': { parser: pbm.LoadProgressReq, path: 'game' },
        'pbm.LoadProgressRes': { parser: pbm.LoadProgressRes, path: 'game' },
        'pbm.ForceExitReq': { parser: pbm.ForceExitReq, path: 'game' },
        'pbm.ForceExitRes': { parser: pbm.ForceExitRes, path: 'game' },
        'pbm.GiveUpReq': { parser: pbm.GiveUpReq, path: 'game' },
        'pbm.GiveUpRes': { parser: pbm.GiveUpRes, path: 'game' },
        'pbm.LoginGameRes': { parser: pbm.LoginGameRes, path: 'game' },
        'pbm.MissionInfoRes': { parser: pbm.MissionInfoRes, path: 'game' },
        'pbm.MissionRewardReq': { parser: pbm.MissionRewardReq, path: 'game' },
        'pbm.MissionRewardRes': { parser: pbm.MissionRewardRes, path: 'game' },
        'pbm.GetTaskEntranceReq': { parser: pbm.GetTaskEntranceReq, path: 'game' },
        'pbm.GetTaskEntranceRes': { parser: pbm.GetTaskEntranceRes, path: 'game' },
        'pbm.GetGameConfigReq': { parser: pbm.GetGameConfigReq, path: 'game' },
        'pbm.GetGameConfigRes': { parser: pbm.GetGameConfigRes, path: 'game' },
        'pbm.FinishGuideReq': { parser: pbm.FinishGuideReq, path: 'game' },
        'pbm.GetCoinReq': { parser: pbm.GetCoinReq, path: 'game' },
        'pbm.GetCoinRes': { parser: pbm.GetCoinRes, path: 'game' },
        'pbm.GetVipLevelReq': { parser: pbm.GetVipLevelReq, path: 'game' },
        'pbm.GetVipLevelRes': { parser: pbm.GetVipLevelRes, path: 'game' },
        'pbm.GetTodayIncomeReq': { parser: pbm.GetTodayIncomeReq, path: 'game' },
        'pbm.GetTodayIncomeRes': { parser: pbm.GetTodayIncomeRes, path: 'game' },
        'pbm.GetRocketRecordsReq': { parser: pbm.GetRocketRecordsReq, path: 'game' },
        'pbm.GetRocketRecordsRes': { parser: pbm.GetRocketRecordsRes, path: 'game' },
        'pbm.GetRoundRankReq': { parser: pbm.GetRoundRankReq, path: 'game' },
        'pbm.GetRoundRankRes': { parser: pbm.GetRoundRankRes, path: 'game' },
        'pbm.GetCurrentRoundReq': { parser: pbm.GetCurrentRoundReq, path: 'game' },
        'pbm.GetCurrentRoundRes': { parser: pbm.GetCurrentRoundRes, path: 'game' },
        'pbm.CurrentRoundRes': { parser: pbm.CurrentRoundRes, path: 'game' },
        'pbm.RocketMultipleRes': { parser: pbm.RocketMultipleRes, path: 'game' },
        'pbm.RecoveryUserRes': { parser: pbm.RecoveryUserRes, path: 'game' },
        'pbm.BetReq': { parser: pbm.BetReq, path: 'game' },
        'pbm.BetRes': { parser: pbm.BetRes, path: 'game' },
        'pbm.AutoRecoveryReq': { parser: pbm.AutoRecoveryReq, path: 'game' },
        'pbm.AutoRecoveryRes': { parser: pbm.AutoRecoveryRes, path: 'game' },
        'pbm.RecoveryReq': { parser: pbm.RecoveryReq, path: 'game' },
        'pbm.RecoveryRes': { parser: pbm.RecoveryRes, path: 'game' },
        'pbm.GetRecordsReq': { parser: pbm.GetRecordsReq, path: 'game' },
        'pbm.GetRecordsRes': { parser: pbm.GetRecordsRes, path: 'game' },
        'pbm.AutoBetReq': { parser: pbm.AutoBetReq, path: 'game' },
        'pbm.AutoBetRes': { parser: pbm.AutoBetRes, path: 'game' },
        'pbm.CancelAutoReq': { parser: pbm.CancelAutoReq, path: 'game' },
        'pbm.CancelAutoRes': { parser: pbm.CancelAutoRes, path: 'game' },
        'pbm.GetRankReq': { parser: pbm.GetRankReq, path: 'game' },
        'pbm.GetRankRes': { parser: pbm.GetRankRes, path: 'game' },
        'pbm.RankRewardNotifyRes': { parser: pbm.RankRewardNotifyRes, path: 'game' },
        'pbm.TestCmdReq': { parser: pbm.TestCmdReq, path: 'game' },
        'pbm.TestCmdRes': { parser: pbm.TestCmdRes, path: 'game' },
        'pbm.ReportReq': { parser: pbm.ReportReq, path: 'game' },
        'pbm.ReportRes': { parser: pbm.ReportRes, path: 'game' },
        'pbm.CidReq': { parser: pbm.CidReq, path: 'game' },
        'pbm.CidRes': { parser: pbm.CidRes, path: 'game' },
        'pbm.BatchGetCommoditiesReq': { parser: pbm.BatchGetCommoditiesReq, path: 'game' },
        'pbm.BatchGetCommoditiesRes': { parser: pbm.BatchGetCommoditiesRes, path: 'game' },
        'pbm.GameConfigChangeRes': { parser: pbm.GameConfigChangeRes, path: 'game' },
        'pbm.SetRedDiamondSwitchReq': { parser: pbm.SetRedDiamondSwitchReq, path: 'game' },
        'pbm.SetRedDiamondSwitchRes': { parser: pbm.SetRedDiamondSwitchRes, path: 'game' },
        'net.ihago.game.api.notify.GetGrandPrizeBannerReq': { parser: net.ihago.game.api.notify.GetGrandPrizeBannerReq, path: 'game' },
        'net.ihago.game.api.notify.GetGrandPrizeBannerRes': { parser: net.ihago.game.api.notify.GetGrandPrizeBannerRes, path: 'game' },
        'net.ihago.game.api.notify.LikeReq': { parser: net.ihago.game.api.notify.LikeReq, path: 'game' },
        'net.ihago.game.api.notify.LikeRes': { parser: net.ihago.game.api.notify.LikeRes, path: 'game' },
        'reserved.gateway.ping': { parser: pbm.GMEHeartBeatReq, path: 'reserved.gateway.ping' },
        'reserved.gateway.pong': { parser: pbm.GMEHeartBeatRes, path: 'reserved.gateway.pong' },
        'net.ihago.gme.srv.sidecar_gateway.GMEInternalEnterRoom': { parser: pbm.GMEInternalEnterRoom, path: '' },
        'net.ihago.gme.srv.sidecar_gateway.GMEInternalLeaveRoom': { parser: pbm.GMEInternalLeaveRoom, path: '' },
        'Upstream': { parser: pbm.Upstream, path: '' },
        'Downstream': { parser: pbm.Downstream, path: '' },
        'net.ihago.money.api.metadata.BatchGetCommoditySimplifyInfoReq': { parser: net.ihago.money.api.metadata.BatchGetCommoditySimplifyInfoReq, path: '' },
        'net.ihago.money.api.metadata.GetCommodityReq': { parser: net.ihago.money.api.metadata.GetCommodityReq, path: '' },
        'net.ihago.money.api.metadata.GetCommodityRes': { parser: net.ihago.money.api.metadata.GetCommodityRes, path: '' },
        'net.ihago.money.api.gamepointsmall.GetPointsReq': { parser: net.ihago.money.api.gamepointsmall.GetPointsReq, path: '' },
        'net.ihago.money.api.gamepointsmall.GetPointsRes': { parser: net.ihago.money.api.gamepointsmall.GetPointsRes, path: '' },
        'net.ihago.money.api.gameuser.GetGameInfoReq': { parser: net.ihago.money.api.gameuser.GetGameInfoReq, path: '' },
        'net.ihago.money.api.gameuser.GetGameInfoRes': { parser: net.ihago.money.api.gameuser.GetGameInfoRes, path: '' },
        'net.ihago.money.api.gameuser.IsGameUserReq': { parser: net.ihago.money.api.gameuser.IsGameUserReq, path: '' },
        'net.ihago.money.api.gameuser.IsGameUserRes': { parser: net.ihago.money.api.gameuser.IsGameUserRes, path: '' },
        'net.ihago.money.api.gameuser.GetGameBannerReq': { parser: net.ihago.money.api.gameuser.GetGameBannerReq, path: '' },
        'net.ihago.money.api.gameuser.GetGameBannerRes': { parser: net.ihago.money.api.gameuser.GetGameBannerRes, path: '' },
        'pbm.AggregateGetReq': { parser: pbm.AggregateGetReq, path: 'game' },
        'pbm.AggregateGetRes': { parser: pbm.AggregateGetRes, path: 'game' },
        'net.ihago.ymicro.api.revenue.QueryCouponSummaryReq': { parser: net.ihago.ymicro.api.revenue.QueryCouponSummaryReq, path: '' },
        'net.ihago.ymicro.api.revenue.QueryCouponSummaryRes': { parser: net.ihago.ymicro.api.revenue.QueryCouponSummaryRes, path: '' },
        'net.ihago.ymicro.api.revenue.ReadMessageReq': { parser: net.ihago.ymicro.api.revenue.ReadMessageReq, path: '' },
        'net.ihago.ymicro.api.revenue.ReadMessageRes': { parser: net.ihago.ymicro.api.revenue.ReadMessageRes, path: '' },
    }
}
