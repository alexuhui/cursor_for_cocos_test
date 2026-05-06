import * as $protobuf from "protobufjs";
/** Namespace pbm. */
export namespace pbm {

    /** RoomStatus enum. */
    enum RoomStatus {
        ROOM_STATUS_INITIAL = 0,
        ROOM_STATUS_LOAD = 1,
        ROOM_STATUS_PLAYING = 2,
        ROOM_STATUS_FINISHED = 3
    }

    /** Properties of a LoadProgressReq. */
    interface ILoadProgressReq {

        /** LoadProgressReq uid */
        uid?: (string|null);

        /** LoadProgressReq progress */
        progress?: (number|null);
    }

    /** Represents a LoadProgressReq. */
    class LoadProgressReq implements ILoadProgressReq {

        /**
         * Constructs a new LoadProgressReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.ILoadProgressReq);

        /** LoadProgressReq uid. */
        public uid: string;

        /** LoadProgressReq progress. */
        public progress: number;

        /**
         * Creates a new LoadProgressReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoadProgressReq instance
         */
        public static create(properties?: pbm.ILoadProgressReq): pbm.LoadProgressReq;

        /**
         * Encodes the specified LoadProgressReq message. Does not implicitly {@link pbm.LoadProgressReq.verify|verify} messages.
         * @param message LoadProgressReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.ILoadProgressReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoadProgressReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoadProgressReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.LoadProgressReq;
    }

    /** Properties of a LoadProgressRes. */
    interface ILoadProgressRes {

        /** LoadProgressRes code */
        code?: (number|null);

        /** LoadProgressRes msg */
        msg?: (string|null);

        /** LoadProgressRes uid */
        uid?: (string|null);

        /** LoadProgressRes progress */
        progress?: (number|null);
    }

    /** Represents a LoadProgressRes. */
    class LoadProgressRes implements ILoadProgressRes {

        /**
         * Constructs a new LoadProgressRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.ILoadProgressRes);

        /** LoadProgressRes code. */
        public code: number;

        /** LoadProgressRes msg. */
        public msg: string;

        /** LoadProgressRes uid. */
        public uid: string;

        /** LoadProgressRes progress. */
        public progress: number;

        /**
         * Creates a new LoadProgressRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoadProgressRes instance
         */
        public static create(properties?: pbm.ILoadProgressRes): pbm.LoadProgressRes;

        /**
         * Encodes the specified LoadProgressRes message. Does not implicitly {@link pbm.LoadProgressRes.verify|verify} messages.
         * @param message LoadProgressRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.ILoadProgressRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoadProgressRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoadProgressRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.LoadProgressRes;
    }

    /** Properties of a ForceExitReq. */
    interface IForceExitReq {
    }

    /** Represents a ForceExitReq. */
    class ForceExitReq implements IForceExitReq {

        /**
         * Constructs a new ForceExitReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.IForceExitReq);

        /**
         * Creates a new ForceExitReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ForceExitReq instance
         */
        public static create(properties?: pbm.IForceExitReq): pbm.ForceExitReq;

        /**
         * Encodes the specified ForceExitReq message. Does not implicitly {@link pbm.ForceExitReq.verify|verify} messages.
         * @param message ForceExitReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.IForceExitReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ForceExitReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ForceExitReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.ForceExitReq;
    }

    /** Properties of a ForceExitRes. */
    interface IForceExitRes {

        /** ForceExitRes code */
        code?: (number|null);

        /** ForceExitRes msg */
        msg?: (string|null);

        /** ForceExitRes uid */
        uid?: (string|null);
    }

    /** Represents a ForceExitRes. */
    class ForceExitRes implements IForceExitRes {

        /**
         * Constructs a new ForceExitRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.IForceExitRes);

        /** ForceExitRes code. */
        public code: number;

        /** ForceExitRes msg. */
        public msg: string;

        /** ForceExitRes uid. */
        public uid: string;

        /**
         * Creates a new ForceExitRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ForceExitRes instance
         */
        public static create(properties?: pbm.IForceExitRes): pbm.ForceExitRes;

        /**
         * Encodes the specified ForceExitRes message. Does not implicitly {@link pbm.ForceExitRes.verify|verify} messages.
         * @param message ForceExitRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.IForceExitRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ForceExitRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ForceExitRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.ForceExitRes;
    }

    /** Properties of a GiveUpReq. */
    interface IGiveUpReq {
    }

    /** Represents a GiveUpReq. */
    class GiveUpReq implements IGiveUpReq {

        /**
         * Constructs a new GiveUpReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.IGiveUpReq);

        /**
         * Creates a new GiveUpReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GiveUpReq instance
         */
        public static create(properties?: pbm.IGiveUpReq): pbm.GiveUpReq;

        /**
         * Encodes the specified GiveUpReq message. Does not implicitly {@link pbm.GiveUpReq.verify|verify} messages.
         * @param message GiveUpReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.IGiveUpReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GiveUpReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GiveUpReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.GiveUpReq;
    }

    /** Properties of a GiveUpRes. */
    interface IGiveUpRes {

        /** GiveUpRes code */
        code?: (number|null);

        /** GiveUpRes msg */
        msg?: (string|null);

        /** GiveUpRes uid */
        uid?: (string|null);
    }

    /** Represents a GiveUpRes. */
    class GiveUpRes implements IGiveUpRes {

        /**
         * Constructs a new GiveUpRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.IGiveUpRes);

        /** GiveUpRes code. */
        public code: number;

        /** GiveUpRes msg. */
        public msg: string;

        /** GiveUpRes uid. */
        public uid: string;

        /**
         * Creates a new GiveUpRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GiveUpRes instance
         */
        public static create(properties?: pbm.IGiveUpRes): pbm.GiveUpRes;

        /**
         * Encodes the specified GiveUpRes message. Does not implicitly {@link pbm.GiveUpRes.verify|verify} messages.
         * @param message GiveUpRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.IGiveUpRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GiveUpRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GiveUpRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.GiveUpRes;
    }

    /** ERetCode enum. */
    enum ERetCode {
        ERetCodeSuccess = 0,
        ERetSystem = 999,
        ERetInvalidPlayer = 1000,
        ERetTooFrequent = 1001,
        ERetInvalidParams = 1002,
        ERetBlock = 10001,
        ERetVipNotEnough = 10002,
        ERetInsufficientBalance = 10003,
        ERetFreezeAccount = 22,
        ERetAlreadyAutoBet = 10004,
        ERetMaintain = 10005,
        ERetNotRecoveryPhase = 11001,
        ERetAlreadyRecovery = 11002
    }

    /** Properties of a LoginGameRes. */
    interface ILoginGameRes {

        /** LoginGameRes result */
        result?: (common.IResult|null);

        /** LoginGameRes vip_level */
        vip_level?: (number|null);

        /** LoginGameRes need_vip */
        need_vip?: (number|null);

        /** LoginGameRes guided */
        guided?: (number|null);

        /** LoginGameRes missions */
        missions?: (pbm.IMission[]|null);

        /** LoginGameRes is_show_white */
        is_show_white?: (boolean|null);

        /** LoginGameRes has_red_diamond_entry */
        has_red_diamond_entry?: (boolean|null);

        /** LoginGameRes red_diamond_switch */
        red_diamond_switch?: (number|null);
    }

    /** Represents a LoginGameRes. */
    class LoginGameRes implements ILoginGameRes {

        /**
         * Constructs a new LoginGameRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.ILoginGameRes);

        /** LoginGameRes result. */
        public result?: (common.IResult|null);

        /** LoginGameRes vip_level. */
        public vip_level: number;

        /** LoginGameRes need_vip. */
        public need_vip: number;

        /** LoginGameRes guided. */
        public guided: number;

        /** LoginGameRes missions. */
        public missions: pbm.IMission[];

        /** LoginGameRes is_show_white. */
        public is_show_white: boolean;

        /** LoginGameRes has_red_diamond_entry. */
        public has_red_diamond_entry: boolean;

        /** LoginGameRes red_diamond_switch. */
        public red_diamond_switch: number;

        /**
         * Creates a new LoginGameRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginGameRes instance
         */
        public static create(properties?: pbm.ILoginGameRes): pbm.LoginGameRes;

        /**
         * Encodes the specified LoginGameRes message. Does not implicitly {@link pbm.LoginGameRes.verify|verify} messages.
         * @param message LoginGameRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.ILoginGameRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginGameRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginGameRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.LoginGameRes;
    }

    /** Properties of a Mission. */
    interface IMission {

        /** Mission id */
        id?: (number|null);

        /** Mission type */
        type?: (number|null);

        /** Mission param */
        param?: (string|null);

        /** Mission goal */
        goal?: (number|null);

        /** Mission score */
        score?: (number|null);

        /** Mission reward_quality */
        reward_quality?: (number|null);

        /** Mission status */
        status?: (number|null);
    }

    /** Represents a Mission. */
    class Mission implements IMission {

        /**
         * Constructs a new Mission.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.IMission);

        /** Mission id. */
        public id: number;

        /** Mission type. */
        public type: number;

        /** Mission param. */
        public param: string;

        /** Mission goal. */
        public goal: number;

        /** Mission score. */
        public score: number;

        /** Mission reward_quality. */
        public reward_quality: number;

        /** Mission status. */
        public status: number;

        /**
         * Creates a new Mission instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Mission instance
         */
        public static create(properties?: pbm.IMission): pbm.Mission;

        /**
         * Encodes the specified Mission message. Does not implicitly {@link pbm.Mission.verify|verify} messages.
         * @param message Mission message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.IMission, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Mission message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Mission
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.Mission;
    }

    /** EMissionType enum. */
    enum EMissionType {
        EMissionTypeNone = 0,
        EMTDailyConsume = 1,
        EMTDailyRecover = 2
    }

    /** EMissionStatus enum. */
    enum EMissionStatus {
        EMissionStatusNone = 0,
        EMSUnclaimable = 1,
        EMSClaimable = 2,
        EMSClaimed = 3
    }

    /** ERewardQuality enum. */
    enum ERewardQuality {
        ERewardQualityNone = 0,
        ERQNormal = 1,
        ERQGood = 2,
        ERQSuperior = 3,
        ERQInfinity = 100
    }

    /** Properties of a MissionInfoRes. */
    interface IMissionInfoRes {

        /** MissionInfoRes missions */
        missions?: (pbm.IMission[]|null);
    }

    /** Represents a MissionInfoRes. */
    class MissionInfoRes implements IMissionInfoRes {

        /**
         * Constructs a new MissionInfoRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.IMissionInfoRes);

        /** MissionInfoRes missions. */
        public missions: pbm.IMission[];

        /**
         * Creates a new MissionInfoRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MissionInfoRes instance
         */
        public static create(properties?: pbm.IMissionInfoRes): pbm.MissionInfoRes;

        /**
         * Encodes the specified MissionInfoRes message. Does not implicitly {@link pbm.MissionInfoRes.verify|verify} messages.
         * @param message MissionInfoRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.IMissionInfoRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MissionInfoRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MissionInfoRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.MissionInfoRes;
    }

    /** Properties of a MissionRewardReq. */
    interface IMissionRewardReq {

        /** MissionRewardReq id */
        id?: (number|null);
    }

    /** Represents a MissionRewardReq. */
    class MissionRewardReq implements IMissionRewardReq {

        /**
         * Constructs a new MissionRewardReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.IMissionRewardReq);

        /** MissionRewardReq id. */
        public id: number;

        /**
         * Creates a new MissionRewardReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MissionRewardReq instance
         */
        public static create(properties?: pbm.IMissionRewardReq): pbm.MissionRewardReq;

        /**
         * Encodes the specified MissionRewardReq message. Does not implicitly {@link pbm.MissionRewardReq.verify|verify} messages.
         * @param message MissionRewardReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.IMissionRewardReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MissionRewardReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MissionRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.MissionRewardReq;
    }

    /** Properties of a MissionRewardRes. */
    interface IMissionRewardRes {

        /** MissionRewardRes result */
        result?: (common.IResult|null);

        /** MissionRewardRes rewards */
        rewards?: (commodity.ICommodityReward|null);

        /** MissionRewardRes others */
        others?: (commodity.ICommodityReward[]|null);

        /** MissionRewardRes id */
        id?: (number|null);
    }

    /** Represents a MissionRewardRes. */
    class MissionRewardRes implements IMissionRewardRes {

        /**
         * Constructs a new MissionRewardRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.IMissionRewardRes);

        /** MissionRewardRes result. */
        public result?: (common.IResult|null);

        /** MissionRewardRes rewards. */
        public rewards?: (commodity.ICommodityReward|null);

        /** MissionRewardRes others. */
        public others: commodity.ICommodityReward[];

        /** MissionRewardRes id. */
        public id: number;

        /**
         * Creates a new MissionRewardRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MissionRewardRes instance
         */
        public static create(properties?: pbm.IMissionRewardRes): pbm.MissionRewardRes;

        /**
         * Encodes the specified MissionRewardRes message. Does not implicitly {@link pbm.MissionRewardRes.verify|verify} messages.
         * @param message MissionRewardRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.IMissionRewardRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MissionRewardRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MissionRewardRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.MissionRewardRes;
    }

    /** Properties of a GetTaskEntranceReq. */
    interface IGetTaskEntranceReq {
    }

    /** Represents a GetTaskEntranceReq. */
    class GetTaskEntranceReq implements IGetTaskEntranceReq {

        /**
         * Constructs a new GetTaskEntranceReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.IGetTaskEntranceReq);

        /**
         * Creates a new GetTaskEntranceReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetTaskEntranceReq instance
         */
        public static create(properties?: pbm.IGetTaskEntranceReq): pbm.GetTaskEntranceReq;

        /**
         * Encodes the specified GetTaskEntranceReq message. Does not implicitly {@link pbm.GetTaskEntranceReq.verify|verify} messages.
         * @param message GetTaskEntranceReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.IGetTaskEntranceReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetTaskEntranceReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetTaskEntranceReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.GetTaskEntranceReq;
    }

    /** Properties of a GetTaskEntranceRes. */
    interface IGetTaskEntranceRes {

        /** GetTaskEntranceRes code */
        code?: (number|null);

        /** GetTaskEntranceRes msg */
        msg?: (string|null);

        /** GetTaskEntranceRes sequence */
        sequence?: (number|null);

        /** GetTaskEntranceRes userType */
        userType?: (number|null);

        /** GetTaskEntranceRes taskStatus */
        taskStatus?: (number|null);

        /** GetTaskEntranceRes leftTime */
        leftTime?: (number|null);

        /** GetTaskEntranceRes hasUnclaimedReward */
        hasUnclaimedReward?: (boolean|null);
    }

    /** Represents a GetTaskEntranceRes. */
    class GetTaskEntranceRes implements IGetTaskEntranceRes {

        /**
         * Constructs a new GetTaskEntranceRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.IGetTaskEntranceRes);

        /** GetTaskEntranceRes code. */
        public code: number;

        /** GetTaskEntranceRes msg. */
        public msg: string;

        /** GetTaskEntranceRes sequence. */
        public sequence: number;

        /** GetTaskEntranceRes userType. */
        public userType: number;

        /** GetTaskEntranceRes taskStatus. */
        public taskStatus: number;

        /** GetTaskEntranceRes leftTime. */
        public leftTime: number;

        /** GetTaskEntranceRes hasUnclaimedReward. */
        public hasUnclaimedReward: boolean;

        /**
         * Creates a new GetTaskEntranceRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetTaskEntranceRes instance
         */
        public static create(properties?: pbm.IGetTaskEntranceRes): pbm.GetTaskEntranceRes;

        /**
         * Encodes the specified GetTaskEntranceRes message. Does not implicitly {@link pbm.GetTaskEntranceRes.verify|verify} messages.
         * @param message GetTaskEntranceRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.IGetTaskEntranceRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetTaskEntranceRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetTaskEntranceRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.GetTaskEntranceRes;
    }

    /** Properties of a GetGameConfigReq. */
    interface IGetGameConfigReq {
    }

    /** Represents a GetGameConfigReq. */
    class GetGameConfigReq implements IGetGameConfigReq {

        /**
         * Constructs a new GetGameConfigReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.IGetGameConfigReq);

        /**
         * Creates a new GetGameConfigReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetGameConfigReq instance
         */
        public static create(properties?: pbm.IGetGameConfigReq): pbm.GetGameConfigReq;

        /**
         * Encodes the specified GetGameConfigReq message. Does not implicitly {@link pbm.GetGameConfigReq.verify|verify} messages.
         * @param message GetGameConfigReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.IGetGameConfigReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetGameConfigReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetGameConfigReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.GetGameConfigReq;
    }

    /** Properties of a Gear. */
    interface IGear {

        /** Gear amount */
        amount?: (number|null);
    }

    /** Represents a Gear. */
    class Gear implements IGear {

        /**
         * Constructs a new Gear.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.IGear);

        /** Gear amount. */
        public amount: number;

        /**
         * Creates a new Gear instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Gear instance
         */
        public static create(properties?: pbm.IGear): pbm.Gear;

        /**
         * Encodes the specified Gear message. Does not implicitly {@link pbm.Gear.verify|verify} messages.
         * @param message Gear message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.IGear, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Gear message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Gear
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.Gear;
    }

    /** Properties of a BetConfig. */
    interface IBetConfig {

        /** BetConfig gears */
        gears?: (pbm.IGear[]|null);

        /** BetConfig auto_rounds */
        auto_rounds?: (number[]|null);

        /** BetConfig max_bet_amount */
        max_bet_amount?: (number|null);

        /** BetConfig min_bet_amount */
        min_bet_amount?: (number|null);
    }

    /** Represents a BetConfig. */
    class BetConfig implements IBetConfig {

        /**
         * Constructs a new BetConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.IBetConfig);

        /** BetConfig gears. */
        public gears: pbm.IGear[];

        /** BetConfig auto_rounds. */
        public auto_rounds: number[];

        /** BetConfig max_bet_amount. */
        public max_bet_amount: number;

        /** BetConfig min_bet_amount. */
        public min_bet_amount: number;

        /**
         * Creates a new BetConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BetConfig instance
         */
        public static create(properties?: pbm.IBetConfig): pbm.BetConfig;

        /**
         * Encodes the specified BetConfig message. Does not implicitly {@link pbm.BetConfig.verify|verify} messages.
         * @param message BetConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.IBetConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BetConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BetConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.BetConfig;
    }

    /** Properties of a Speed. */
    interface ISpeed {

        /** Speed begin */
        begin?: (number|null);

        /** Speed end */
        end?: (number|null);

        /** Speed mill_sec */
        mill_sec?: (number|null);
    }

    /** Represents a Speed. */
    class Speed implements ISpeed {

        /**
         * Constructs a new Speed.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.ISpeed);

        /** Speed begin. */
        public begin: number;

        /** Speed end. */
        public end: number;

        /** Speed mill_sec. */
        public mill_sec: number;

        /**
         * Creates a new Speed instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Speed instance
         */
        public static create(properties?: pbm.ISpeed): pbm.Speed;

        /**
         * Encodes the specified Speed message. Does not implicitly {@link pbm.Speed.verify|verify} messages.
         * @param message Speed message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.ISpeed, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Speed message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Speed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.Speed;
    }

    /** Properties of a RocketConfig. */
    interface IRocketConfig {

        /** RocketConfig speeds */
        speeds?: (pbm.ISpeed[]|null);

        /** RocketConfig max_multiple */
        max_multiple?: (number|null);

        /** RocketConfig choose_sec */
        choose_sec?: (number|null);

        /** RocketConfig prepare_sec */
        prepare_sec?: (number|null);

        /** RocketConfig bomb_sec */
        bomb_sec?: (number|null);
    }

    /** Represents a RocketConfig. */
    class RocketConfig implements IRocketConfig {

        /**
         * Constructs a new RocketConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.IRocketConfig);

        /** RocketConfig speeds. */
        public speeds: pbm.ISpeed[];

        /** RocketConfig max_multiple. */
        public max_multiple: number;

        /** RocketConfig choose_sec. */
        public choose_sec: number;

        /** RocketConfig prepare_sec. */
        public prepare_sec: number;

        /** RocketConfig bomb_sec. */
        public bomb_sec: number;

        /**
         * Creates a new RocketConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RocketConfig instance
         */
        public static create(properties?: pbm.IRocketConfig): pbm.RocketConfig;

        /**
         * Encodes the specified RocketConfig message. Does not implicitly {@link pbm.RocketConfig.verify|verify} messages.
         * @param message RocketConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.IRocketConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RocketConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RocketConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.RocketConfig;
    }

    /** Properties of a RankRewardConfig. */
    interface IRankRewardConfig {

        /** RankRewardConfig rank */
        rank?: (number|null);

        /** RankRewardConfig reward */
        reward?: (commodity.ICommodityReward|null);
    }

    /** Represents a RankRewardConfig. */
    class RankRewardConfig implements IRankRewardConfig {

        /**
         * Constructs a new RankRewardConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.IRankRewardConfig);

        /** RankRewardConfig rank. */
        public rank: number;

        /** RankRewardConfig reward. */
        public reward?: (commodity.ICommodityReward|null);

        /**
         * Creates a new RankRewardConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RankRewardConfig instance
         */
        public static create(properties?: pbm.IRankRewardConfig): pbm.RankRewardConfig;

        /**
         * Encodes the specified RankRewardConfig message. Does not implicitly {@link pbm.RankRewardConfig.verify|verify} messages.
         * @param message RankRewardConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.IRankRewardConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RankRewardConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RankRewardConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.RankRewardConfig;
    }

    /** Properties of a GetGameConfigRes. */
    interface IGetGameConfigRes {

        /** GetGameConfigRes result */
        result?: (common.IResult|null);

        /** GetGameConfigRes bet */
        bet?: (pbm.IBetConfig|null);

        /** GetGameConfigRes rocket */
        rocket?: (pbm.IRocketConfig|null);

        /** GetGameConfigRes preload_rewards */
        preload_rewards?: (net.ihago.money.api.metadata.ICommoditySpecified[]|null);

        /** GetGameConfigRes rank_rewards */
        rank_rewards?: (pbm.IRankRewardConfig[]|null);
    }

    /** Represents a GetGameConfigRes. */
    class GetGameConfigRes implements IGetGameConfigRes {

        /**
         * Constructs a new GetGameConfigRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.IGetGameConfigRes);

        /** GetGameConfigRes result. */
        public result?: (common.IResult|null);

        /** GetGameConfigRes bet. */
        public bet?: (pbm.IBetConfig|null);

        /** GetGameConfigRes rocket. */
        public rocket?: (pbm.IRocketConfig|null);

        /** GetGameConfigRes preload_rewards. */
        public preload_rewards: net.ihago.money.api.metadata.ICommoditySpecified[];

        /** GetGameConfigRes rank_rewards. */
        public rank_rewards: pbm.IRankRewardConfig[];

        /**
         * Creates a new GetGameConfigRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetGameConfigRes instance
         */
        public static create(properties?: pbm.IGetGameConfigRes): pbm.GetGameConfigRes;

        /**
         * Encodes the specified GetGameConfigRes message. Does not implicitly {@link pbm.GetGameConfigRes.verify|verify} messages.
         * @param message GetGameConfigRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.IGetGameConfigRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetGameConfigRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetGameConfigRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.GetGameConfigRes;
    }

    /** Properties of a FinishGuideReq. */
    interface IFinishGuideReq {

        /** FinishGuideReq guide */
        guide?: (number|null);
    }

    /** Represents a FinishGuideReq. */
    class FinishGuideReq implements IFinishGuideReq {

        /**
         * Constructs a new FinishGuideReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.IFinishGuideReq);

        /** FinishGuideReq guide. */
        public guide: number;

        /**
         * Creates a new FinishGuideReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FinishGuideReq instance
         */
        public static create(properties?: pbm.IFinishGuideReq): pbm.FinishGuideReq;

        /**
         * Encodes the specified FinishGuideReq message. Does not implicitly {@link pbm.FinishGuideReq.verify|verify} messages.
         * @param message FinishGuideReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.IFinishGuideReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FinishGuideReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FinishGuideReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.FinishGuideReq;
    }

    /** Properties of a GetCoinReq. */
    interface IGetCoinReq {
    }

    /** Represents a GetCoinReq. */
    class GetCoinReq implements IGetCoinReq {

        /**
         * Constructs a new GetCoinReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.IGetCoinReq);

        /**
         * Creates a new GetCoinReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetCoinReq instance
         */
        public static create(properties?: pbm.IGetCoinReq): pbm.GetCoinReq;

        /**
         * Encodes the specified GetCoinReq message. Does not implicitly {@link pbm.GetCoinReq.verify|verify} messages.
         * @param message GetCoinReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.IGetCoinReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetCoinReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetCoinReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.GetCoinReq;
    }

    /** Properties of a GetCoinRes. */
    interface IGetCoinRes {

        /** GetCoinRes result */
        result?: (common.IResult|null);

        /** GetCoinRes diamond */
        diamond?: (number|null);
    }

    /** Represents a GetCoinRes. */
    class GetCoinRes implements IGetCoinRes {

        /**
         * Constructs a new GetCoinRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.IGetCoinRes);

        /** GetCoinRes result. */
        public result?: (common.IResult|null);

        /** GetCoinRes diamond. */
        public diamond: number;

        /**
         * Creates a new GetCoinRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetCoinRes instance
         */
        public static create(properties?: pbm.IGetCoinRes): pbm.GetCoinRes;

        /**
         * Encodes the specified GetCoinRes message. Does not implicitly {@link pbm.GetCoinRes.verify|verify} messages.
         * @param message GetCoinRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.IGetCoinRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetCoinRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetCoinRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.GetCoinRes;
    }

    /** Properties of a GetVipLevelReq. */
    interface IGetVipLevelReq {
    }

    /** Represents a GetVipLevelReq. */
    class GetVipLevelReq implements IGetVipLevelReq {

        /**
         * Constructs a new GetVipLevelReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.IGetVipLevelReq);

        /**
         * Creates a new GetVipLevelReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetVipLevelReq instance
         */
        public static create(properties?: pbm.IGetVipLevelReq): pbm.GetVipLevelReq;

        /**
         * Encodes the specified GetVipLevelReq message. Does not implicitly {@link pbm.GetVipLevelReq.verify|verify} messages.
         * @param message GetVipLevelReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.IGetVipLevelReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetVipLevelReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetVipLevelReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.GetVipLevelReq;
    }

    /** Properties of a GetVipLevelRes. */
    interface IGetVipLevelRes {

        /** GetVipLevelRes result */
        result?: (common.IResult|null);

        /** GetVipLevelRes vip_level */
        vip_level?: (number|null);

        /** GetVipLevelRes need_vip_level */
        need_vip_level?: (number|null);

        /** GetVipLevelRes freeze */
        freeze?: (boolean|null);
    }

    /** Represents a GetVipLevelRes. */
    class GetVipLevelRes implements IGetVipLevelRes {

        /**
         * Constructs a new GetVipLevelRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.IGetVipLevelRes);

        /** GetVipLevelRes result. */
        public result?: (common.IResult|null);

        /** GetVipLevelRes vip_level. */
        public vip_level: number;

        /** GetVipLevelRes need_vip_level. */
        public need_vip_level: number;

        /** GetVipLevelRes freeze. */
        public freeze: boolean;

        /**
         * Creates a new GetVipLevelRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetVipLevelRes instance
         */
        public static create(properties?: pbm.IGetVipLevelRes): pbm.GetVipLevelRes;

        /**
         * Encodes the specified GetVipLevelRes message. Does not implicitly {@link pbm.GetVipLevelRes.verify|verify} messages.
         * @param message GetVipLevelRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.IGetVipLevelRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetVipLevelRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetVipLevelRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.GetVipLevelRes;
    }

    /** Properties of a GetTodayIncomeReq. */
    interface IGetTodayIncomeReq {
    }

    /** Represents a GetTodayIncomeReq. */
    class GetTodayIncomeReq implements IGetTodayIncomeReq {

        /**
         * Constructs a new GetTodayIncomeReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.IGetTodayIncomeReq);

        /**
         * Creates a new GetTodayIncomeReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetTodayIncomeReq instance
         */
        public static create(properties?: pbm.IGetTodayIncomeReq): pbm.GetTodayIncomeReq;

        /**
         * Encodes the specified GetTodayIncomeReq message. Does not implicitly {@link pbm.GetTodayIncomeReq.verify|verify} messages.
         * @param message GetTodayIncomeReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.IGetTodayIncomeReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetTodayIncomeReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetTodayIncomeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.GetTodayIncomeReq;
    }

    /** Properties of a GetTodayIncomeRes. */
    interface IGetTodayIncomeRes {

        /** GetTodayIncomeRes result */
        result?: (common.IResult|null);

        /** GetTodayIncomeRes value */
        value?: (number|null);
    }

    /** Represents a GetTodayIncomeRes. */
    class GetTodayIncomeRes implements IGetTodayIncomeRes {

        /**
         * Constructs a new GetTodayIncomeRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.IGetTodayIncomeRes);

        /** GetTodayIncomeRes result. */
        public result?: (common.IResult|null);

        /** GetTodayIncomeRes value. */
        public value: number;

        /**
         * Creates a new GetTodayIncomeRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetTodayIncomeRes instance
         */
        public static create(properties?: pbm.IGetTodayIncomeRes): pbm.GetTodayIncomeRes;

        /**
         * Encodes the specified GetTodayIncomeRes message. Does not implicitly {@link pbm.GetTodayIncomeRes.verify|verify} messages.
         * @param message GetTodayIncomeRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.IGetTodayIncomeRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetTodayIncomeRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetTodayIncomeRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.GetTodayIncomeRes;
    }

    /** Properties of a GetRocketRecordsReq. */
    interface IGetRocketRecordsReq {
    }

    /** Represents a GetRocketRecordsReq. */
    class GetRocketRecordsReq implements IGetRocketRecordsReq {

        /**
         * Constructs a new GetRocketRecordsReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.IGetRocketRecordsReq);

        /**
         * Creates a new GetRocketRecordsReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetRocketRecordsReq instance
         */
        public static create(properties?: pbm.IGetRocketRecordsReq): pbm.GetRocketRecordsReq;

        /**
         * Encodes the specified GetRocketRecordsReq message. Does not implicitly {@link pbm.GetRocketRecordsReq.verify|verify} messages.
         * @param message GetRocketRecordsReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.IGetRocketRecordsReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetRocketRecordsReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetRocketRecordsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.GetRocketRecordsReq;
    }

    /** Properties of a RocketRecord. */
    interface IRocketRecord {

        /** RocketRecord round */
        round?: (string|null);

        /** RocketRecord multiple */
        multiple?: (number|null);
    }

    /** Represents a RocketRecord. */
    class RocketRecord implements IRocketRecord {

        /**
         * Constructs a new RocketRecord.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.IRocketRecord);

        /** RocketRecord round. */
        public round: string;

        /** RocketRecord multiple. */
        public multiple: number;

        /**
         * Creates a new RocketRecord instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RocketRecord instance
         */
        public static create(properties?: pbm.IRocketRecord): pbm.RocketRecord;

        /**
         * Encodes the specified RocketRecord message. Does not implicitly {@link pbm.RocketRecord.verify|verify} messages.
         * @param message RocketRecord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.IRocketRecord, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RocketRecord message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RocketRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.RocketRecord;
    }

    /** Properties of a GetRocketRecordsRes. */
    interface IGetRocketRecordsRes {

        /** GetRocketRecordsRes result */
        result?: (common.IResult|null);

        /** GetRocketRecordsRes records */
        records?: (pbm.IRocketRecord[]|null);
    }

    /** Represents a GetRocketRecordsRes. */
    class GetRocketRecordsRes implements IGetRocketRecordsRes {

        /**
         * Constructs a new GetRocketRecordsRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.IGetRocketRecordsRes);

        /** GetRocketRecordsRes result. */
        public result?: (common.IResult|null);

        /** GetRocketRecordsRes records. */
        public records: pbm.IRocketRecord[];

        /**
         * Creates a new GetRocketRecordsRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetRocketRecordsRes instance
         */
        public static create(properties?: pbm.IGetRocketRecordsRes): pbm.GetRocketRecordsRes;

        /**
         * Encodes the specified GetRocketRecordsRes message. Does not implicitly {@link pbm.GetRocketRecordsRes.verify|verify} messages.
         * @param message GetRocketRecordsRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.IGetRocketRecordsRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetRocketRecordsRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetRocketRecordsRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.GetRocketRecordsRes;
    }

    /** Properties of a GetRoundRankReq. */
    interface IGetRoundRankReq {

        /** GetRoundRankReq cid */
        cid?: (string|null);

        /** GetRoundRankReq only_amount */
        only_amount?: (boolean|null);
    }

    /** Represents a GetRoundRankReq. */
    class GetRoundRankReq implements IGetRoundRankReq {

        /**
         * Constructs a new GetRoundRankReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.IGetRoundRankReq);

        /** GetRoundRankReq cid. */
        public cid: string;

        /** GetRoundRankReq only_amount. */
        public only_amount: boolean;

        /**
         * Creates a new GetRoundRankReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetRoundRankReq instance
         */
        public static create(properties?: pbm.IGetRoundRankReq): pbm.GetRoundRankReq;

        /**
         * Encodes the specified GetRoundRankReq message. Does not implicitly {@link pbm.GetRoundRankReq.verify|verify} messages.
         * @param message GetRoundRankReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.IGetRoundRankReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetRoundRankReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetRoundRankReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.GetRoundRankReq;
    }

    /** Properties of a RoundRankItem. */
    interface IRoundRankItem {

        /** RoundRankItem uid */
        uid?: (string|null);

        /** RoundRankItem rank */
        rank?: (number|null);

        /** RoundRankItem amount */
        amount?: (number|null);

        /** RoundRankItem multiple */
        multiple?: (number|null);

        /** RoundRankItem nick */
        nick?: (string|null);

        /** RoundRankItem avatar */
        avatar?: (string|null);
    }

    /** Represents a RoundRankItem. */
    class RoundRankItem implements IRoundRankItem {

        /**
         * Constructs a new RoundRankItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.IRoundRankItem);

        /** RoundRankItem uid. */
        public uid: string;

        /** RoundRankItem rank. */
        public rank: number;

        /** RoundRankItem amount. */
        public amount: number;

        /** RoundRankItem multiple. */
        public multiple: number;

        /** RoundRankItem nick. */
        public nick: string;

        /** RoundRankItem avatar. */
        public avatar: string;

        /**
         * Creates a new RoundRankItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoundRankItem instance
         */
        public static create(properties?: pbm.IRoundRankItem): pbm.RoundRankItem;

        /**
         * Encodes the specified RoundRankItem message. Does not implicitly {@link pbm.RoundRankItem.verify|verify} messages.
         * @param message RoundRankItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.IRoundRankItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoundRankItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoundRankItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.RoundRankItem;
    }

    /** Properties of a GetRoundRankRes. */
    interface IGetRoundRankRes {

        /** GetRoundRankRes result */
        result?: (common.IResult|null);

        /** GetRoundRankRes cid */
        cid?: (string|null);

        /** GetRoundRankRes round */
        round?: (string|null);

        /** GetRoundRankRes round_bet */
        round_bet?: (number|null);

        /** GetRoundRankRes round_users */
        round_users?: (number|null);

        /** GetRoundRankRes list */
        list?: (pbm.IRoundRankItem[]|null);
    }

    /** Represents a GetRoundRankRes. */
    class GetRoundRankRes implements IGetRoundRankRes {

        /**
         * Constructs a new GetRoundRankRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.IGetRoundRankRes);

        /** GetRoundRankRes result. */
        public result?: (common.IResult|null);

        /** GetRoundRankRes cid. */
        public cid: string;

        /** GetRoundRankRes round. */
        public round: string;

        /** GetRoundRankRes round_bet. */
        public round_bet: number;

        /** GetRoundRankRes round_users. */
        public round_users: number;

        /** GetRoundRankRes list. */
        public list: pbm.IRoundRankItem[];

        /**
         * Creates a new GetRoundRankRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetRoundRankRes instance
         */
        public static create(properties?: pbm.IGetRoundRankRes): pbm.GetRoundRankRes;

        /**
         * Encodes the specified GetRoundRankRes message. Does not implicitly {@link pbm.GetRoundRankRes.verify|verify} messages.
         * @param message GetRoundRankRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.IGetRoundRankRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetRoundRankRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetRoundRankRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.GetRoundRankRes;
    }

    /** Properties of a GetCurrentRoundReq. */
    interface IGetCurrentRoundReq {
    }

    /** Represents a GetCurrentRoundReq. */
    class GetCurrentRoundReq implements IGetCurrentRoundReq {

        /**
         * Constructs a new GetCurrentRoundReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.IGetCurrentRoundReq);

        /**
         * Creates a new GetCurrentRoundReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetCurrentRoundReq instance
         */
        public static create(properties?: pbm.IGetCurrentRoundReq): pbm.GetCurrentRoundReq;

        /**
         * Encodes the specified GetCurrentRoundReq message. Does not implicitly {@link pbm.GetCurrentRoundReq.verify|verify} messages.
         * @param message GetCurrentRoundReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.IGetCurrentRoundReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetCurrentRoundReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetCurrentRoundReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.GetCurrentRoundReq;
    }

    /** EPhase enum. */
    enum EPhase {
        EPhaseNone = 0,
        EPBet = 1,
        EPPrepare = 2,
        EPRush = 3,
        EPBomb = 4
    }

    /** Properties of a RoundInfo. */
    interface IRoundInfo {

        /** RoundInfo round */
        round?: (string|null);

        /** RoundInfo phase */
        phase?: (pbm.EPhase|null);

        /** RoundInfo phase_ts */
        phase_ts?: (number|null);

        /** RoundInfo multiple */
        multiple?: (number|null);

        /** RoundInfo phase_begin_ts */
        phase_begin_ts?: (number|null);
    }

    /** Represents a RoundInfo. */
    class RoundInfo implements IRoundInfo {

        /**
         * Constructs a new RoundInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.IRoundInfo);

        /** RoundInfo round. */
        public round: string;

        /** RoundInfo phase. */
        public phase: pbm.EPhase;

        /** RoundInfo phase_ts. */
        public phase_ts: number;

        /** RoundInfo multiple. */
        public multiple: number;

        /** RoundInfo phase_begin_ts. */
        public phase_begin_ts: number;

        /**
         * Creates a new RoundInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoundInfo instance
         */
        public static create(properties?: pbm.IRoundInfo): pbm.RoundInfo;

        /**
         * Encodes the specified RoundInfo message. Does not implicitly {@link pbm.RoundInfo.verify|verify} messages.
         * @param message RoundInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.IRoundInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoundInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoundInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.RoundInfo;
    }

    /** Properties of a GetCurrentRoundRes. */
    interface IGetCurrentRoundRes {

        /** GetCurrentRoundRes result */
        result?: (common.IResult|null);

        /** GetCurrentRoundRes choose_amount */
        choose_amount?: (number|null);

        /** GetCurrentRoundRes auto_multiple */
        auto_multiple?: (number|null);

        /** GetCurrentRoundRes multiple */
        multiple?: (number|null);

        /** GetCurrentRoundRes info */
        info?: (pbm.IRoundInfo|null);

        /** GetCurrentRoundRes auto_info */
        auto_info?: (pbm.IAutoInfo|null);

        /** GetCurrentRoundRes ticket_amount */
        ticket_amount?: (number|null);

        /** GetCurrentRoundRes next_round */
        next_round?: (string|null);

        /** GetCurrentRoundRes srv_ts */
        srv_ts?: (number|null);

        /** GetCurrentRoundRes next_choose_amount */
        next_choose_amount?: (number|null);

        /** GetCurrentRoundRes next_auto_multiple */
        next_auto_multiple?: (number|null);

        /** GetCurrentRoundRes next_ticket_amount */
        next_ticket_amount?: (number|null);
    }

    /** Represents a GetCurrentRoundRes. */
    class GetCurrentRoundRes implements IGetCurrentRoundRes {

        /**
         * Constructs a new GetCurrentRoundRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.IGetCurrentRoundRes);

        /** GetCurrentRoundRes result. */
        public result?: (common.IResult|null);

        /** GetCurrentRoundRes choose_amount. */
        public choose_amount: number;

        /** GetCurrentRoundRes auto_multiple. */
        public auto_multiple: number;

        /** GetCurrentRoundRes multiple. */
        public multiple: number;

        /** GetCurrentRoundRes info. */
        public info?: (pbm.IRoundInfo|null);

        /** GetCurrentRoundRes auto_info. */
        public auto_info?: (pbm.IAutoInfo|null);

        /** GetCurrentRoundRes ticket_amount. */
        public ticket_amount: number;

        /** GetCurrentRoundRes next_round. */
        public next_round: string;

        /** GetCurrentRoundRes srv_ts. */
        public srv_ts: number;

        /** GetCurrentRoundRes next_choose_amount. */
        public next_choose_amount: number;

        /** GetCurrentRoundRes next_auto_multiple. */
        public next_auto_multiple: number;

        /** GetCurrentRoundRes next_ticket_amount. */
        public next_ticket_amount: number;

        /**
         * Creates a new GetCurrentRoundRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetCurrentRoundRes instance
         */
        public static create(properties?: pbm.IGetCurrentRoundRes): pbm.GetCurrentRoundRes;

        /**
         * Encodes the specified GetCurrentRoundRes message. Does not implicitly {@link pbm.GetCurrentRoundRes.verify|verify} messages.
         * @param message GetCurrentRoundRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.IGetCurrentRoundRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetCurrentRoundRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetCurrentRoundRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.GetCurrentRoundRes;
    }

    /** Properties of a CurrentRoundRes. */
    interface ICurrentRoundRes {

        /** CurrentRoundRes info */
        info?: (pbm.IRoundInfo|null);

        /** CurrentRoundRes next_round */
        next_round?: (string|null);

        /** CurrentRoundRes srv_ts */
        srv_ts?: (number|null);

        /** CurrentRoundRes rocket */
        rocket?: (pbm.IRocketConfig|null);
    }

    /** Represents a CurrentRoundRes. */
    class CurrentRoundRes implements ICurrentRoundRes {

        /**
         * Constructs a new CurrentRoundRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.ICurrentRoundRes);

        /** CurrentRoundRes info. */
        public info?: (pbm.IRoundInfo|null);

        /** CurrentRoundRes next_round. */
        public next_round: string;

        /** CurrentRoundRes srv_ts. */
        public srv_ts: number;

        /** CurrentRoundRes rocket. */
        public rocket?: (pbm.IRocketConfig|null);

        /**
         * Creates a new CurrentRoundRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CurrentRoundRes instance
         */
        public static create(properties?: pbm.ICurrentRoundRes): pbm.CurrentRoundRes;

        /**
         * Encodes the specified CurrentRoundRes message. Does not implicitly {@link pbm.CurrentRoundRes.verify|verify} messages.
         * @param message CurrentRoundRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.ICurrentRoundRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CurrentRoundRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CurrentRoundRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.CurrentRoundRes;
    }

    /** Properties of a RocketMultipleRes. */
    interface IRocketMultipleRes {

        /** RocketMultipleRes round */
        round?: (string|null);

        /** RocketMultipleRes multiple */
        multiple?: (number|null);

        /** RocketMultipleRes sequence */
        sequence?: (number|null);
    }

    /** Represents a RocketMultipleRes. */
    class RocketMultipleRes implements IRocketMultipleRes {

        /**
         * Constructs a new RocketMultipleRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.IRocketMultipleRes);

        /** RocketMultipleRes round. */
        public round: string;

        /** RocketMultipleRes multiple. */
        public multiple: number;

        /** RocketMultipleRes sequence. */
        public sequence: number;

        /**
         * Creates a new RocketMultipleRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RocketMultipleRes instance
         */
        public static create(properties?: pbm.IRocketMultipleRes): pbm.RocketMultipleRes;

        /**
         * Encodes the specified RocketMultipleRes message. Does not implicitly {@link pbm.RocketMultipleRes.verify|verify} messages.
         * @param message RocketMultipleRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.IRocketMultipleRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RocketMultipleRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RocketMultipleRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.RocketMultipleRes;
    }

    /** Properties of a RecoveryUserRes. */
    interface IRecoveryUserRes {

        /** RecoveryUserRes round */
        round?: (string|null);

        /** RecoveryUserRes uid */
        uid?: (string|null);

        /** RecoveryUserRes multiple */
        multiple?: (number|null);

        /** RecoveryUserRes avatar */
        avatar?: (string|null);
    }

    /** Represents a RecoveryUserRes. */
    class RecoveryUserRes implements IRecoveryUserRes {

        /**
         * Constructs a new RecoveryUserRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.IRecoveryUserRes);

        /** RecoveryUserRes round. */
        public round: string;

        /** RecoveryUserRes uid. */
        public uid: string;

        /** RecoveryUserRes multiple. */
        public multiple: number;

        /** RecoveryUserRes avatar. */
        public avatar: string;

        /**
         * Creates a new RecoveryUserRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RecoveryUserRes instance
         */
        public static create(properties?: pbm.IRecoveryUserRes): pbm.RecoveryUserRes;

        /**
         * Encodes the specified RecoveryUserRes message. Does not implicitly {@link pbm.RecoveryUserRes.verify|verify} messages.
         * @param message RecoveryUserRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.IRecoveryUserRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RecoveryUserRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RecoveryUserRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.RecoveryUserRes;
    }

    /** ECurrencyType enum. */
    enum ECurrencyType {
        ECurrencyTypeNone = 0,
        ECTDiamond = 1805,
        ECTNewDiamond = 1835,
        ECTVoucher = 50044
    }

    /** Properties of a BetTicket. */
    interface IBetTicket {

        /** BetTicket id */
        id?: (number|null);

        /** BetTicket num */
        num?: (number|null);

        /** BetTicket amount */
        amount?: (number|null);
    }

    /** Represents a BetTicket. */
    class BetTicket implements IBetTicket {

        /**
         * Constructs a new BetTicket.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.IBetTicket);

        /** BetTicket id. */
        public id: number;

        /** BetTicket num. */
        public num: number;

        /** BetTicket amount. */
        public amount: number;

        /**
         * Creates a new BetTicket instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BetTicket instance
         */
        public static create(properties?: pbm.IBetTicket): pbm.BetTicket;

        /**
         * Encodes the specified BetTicket message. Does not implicitly {@link pbm.BetTicket.verify|verify} messages.
         * @param message BetTicket message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.IBetTicket, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BetTicket message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BetTicket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.BetTicket;
    }

    /** Properties of a BetReq. */
    interface IBetReq {

        /** BetReq sequence */
        sequence?: (number|null);

        /** BetReq round */
        round?: (string|null);

        /** BetReq currency_type */
        currency_type?: (number|null);

        /** BetReq amount */
        amount?: (number|null);

        /** BetReq auto_multiple */
        auto_multiple?: (number|null);

        /** BetReq cid */
        cid?: (string|null);

        /** BetReq ticket_id */
        ticket_id?: (number|null);
    }

    /** Represents a BetReq. */
    class BetReq implements IBetReq {

        /**
         * Constructs a new BetReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.IBetReq);

        /** BetReq sequence. */
        public sequence: number;

        /** BetReq round. */
        public round: string;

        /** BetReq currency_type. */
        public currency_type: number;

        /** BetReq amount. */
        public amount: number;

        /** BetReq auto_multiple. */
        public auto_multiple: number;

        /** BetReq cid. */
        public cid: string;

        /** BetReq ticket_id. */
        public ticket_id: number;

        /**
         * Creates a new BetReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BetReq instance
         */
        public static create(properties?: pbm.IBetReq): pbm.BetReq;

        /**
         * Encodes the specified BetReq message. Does not implicitly {@link pbm.BetReq.verify|verify} messages.
         * @param message BetReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.IBetReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BetReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BetReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.BetReq;
    }

    /** Properties of a BetRes. */
    interface IBetRes {

        /** BetRes result */
        result?: (common.IResult|null);

        /** BetRes round */
        round?: (string|null);

        /** BetRes total_amount */
        total_amount?: (number|null);

        /** BetRes auto_multiple */
        auto_multiple?: (number|null);

        /** BetRes ticket_amount */
        ticket_amount?: (number|null);

        /** BetRes diamond_amount */
        diamond_amount?: (number|null);
    }

    /** Represents a BetRes. */
    class BetRes implements IBetRes {

        /**
         * Constructs a new BetRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.IBetRes);

        /** BetRes result. */
        public result?: (common.IResult|null);

        /** BetRes round. */
        public round: string;

        /** BetRes total_amount. */
        public total_amount: number;

        /** BetRes auto_multiple. */
        public auto_multiple: number;

        /** BetRes ticket_amount. */
        public ticket_amount: number;

        /** BetRes diamond_amount. */
        public diamond_amount: number;

        /**
         * Creates a new BetRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BetRes instance
         */
        public static create(properties?: pbm.IBetRes): pbm.BetRes;

        /**
         * Encodes the specified BetRes message. Does not implicitly {@link pbm.BetRes.verify|verify} messages.
         * @param message BetRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.IBetRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BetRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BetRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.BetRes;
    }

    /** Properties of an AutoRecoveryReq. */
    interface IAutoRecoveryReq {

        /** AutoRecoveryReq sequence */
        sequence?: (number|null);

        /** AutoRecoveryReq round */
        round?: (string|null);

        /** AutoRecoveryReq auto_multiple */
        auto_multiple?: (number|null);
    }

    /** Represents an AutoRecoveryReq. */
    class AutoRecoveryReq implements IAutoRecoveryReq {

        /**
         * Constructs a new AutoRecoveryReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.IAutoRecoveryReq);

        /** AutoRecoveryReq sequence. */
        public sequence: number;

        /** AutoRecoveryReq round. */
        public round: string;

        /** AutoRecoveryReq auto_multiple. */
        public auto_multiple: number;

        /**
         * Creates a new AutoRecoveryReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AutoRecoveryReq instance
         */
        public static create(properties?: pbm.IAutoRecoveryReq): pbm.AutoRecoveryReq;

        /**
         * Encodes the specified AutoRecoveryReq message. Does not implicitly {@link pbm.AutoRecoveryReq.verify|verify} messages.
         * @param message AutoRecoveryReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.IAutoRecoveryReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AutoRecoveryReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AutoRecoveryReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.AutoRecoveryReq;
    }

    /** Properties of an AutoRecoveryRes. */
    interface IAutoRecoveryRes {

        /** AutoRecoveryRes result */
        result?: (common.IResult|null);

        /** AutoRecoveryRes round */
        round?: (string|null);

        /** AutoRecoveryRes total_amount */
        total_amount?: (number|null);

        /** AutoRecoveryRes auto_multiple */
        auto_multiple?: (number|null);
    }

    /** Represents an AutoRecoveryRes. */
    class AutoRecoveryRes implements IAutoRecoveryRes {

        /**
         * Constructs a new AutoRecoveryRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.IAutoRecoveryRes);

        /** AutoRecoveryRes result. */
        public result?: (common.IResult|null);

        /** AutoRecoveryRes round. */
        public round: string;

        /** AutoRecoveryRes total_amount. */
        public total_amount: number;

        /** AutoRecoveryRes auto_multiple. */
        public auto_multiple: number;

        /**
         * Creates a new AutoRecoveryRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AutoRecoveryRes instance
         */
        public static create(properties?: pbm.IAutoRecoveryRes): pbm.AutoRecoveryRes;

        /**
         * Encodes the specified AutoRecoveryRes message. Does not implicitly {@link pbm.AutoRecoveryRes.verify|verify} messages.
         * @param message AutoRecoveryRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.IAutoRecoveryRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AutoRecoveryRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AutoRecoveryRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.AutoRecoveryRes;
    }

    /** Properties of a RecoveryReq. */
    interface IRecoveryReq {

        /** RecoveryReq round */
        round?: (string|null);
    }

    /** Represents a RecoveryReq. */
    class RecoveryReq implements IRecoveryReq {

        /**
         * Constructs a new RecoveryReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.IRecoveryReq);

        /** RecoveryReq round. */
        public round: string;

        /**
         * Creates a new RecoveryReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RecoveryReq instance
         */
        public static create(properties?: pbm.IRecoveryReq): pbm.RecoveryReq;

        /**
         * Encodes the specified RecoveryReq message. Does not implicitly {@link pbm.RecoveryReq.verify|verify} messages.
         * @param message RecoveryReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.IRecoveryReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RecoveryReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RecoveryReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.RecoveryReq;
    }

    /** Properties of a RecoveryRes. */
    interface IRecoveryRes {

        /** RecoveryRes result */
        result?: (common.IResult|null);

        /** RecoveryRes round */
        round?: (string|null);

        /** RecoveryRes bet_amount */
        bet_amount?: (number|null);

        /** RecoveryRes win_amount */
        win_amount?: (number|null);

        /** RecoveryRes multiple */
        multiple?: (number|null);

        /** RecoveryRes ticket_num */
        ticket_num?: (number|null);

        /** RecoveryRes tickets */
        tickets?: (pbm.IBetTicket[]|null);
    }

    /** Represents a RecoveryRes. */
    class RecoveryRes implements IRecoveryRes {

        /**
         * Constructs a new RecoveryRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.IRecoveryRes);

        /** RecoveryRes result. */
        public result?: (common.IResult|null);

        /** RecoveryRes round. */
        public round: string;

        /** RecoveryRes bet_amount. */
        public bet_amount: number;

        /** RecoveryRes win_amount. */
        public win_amount: number;

        /** RecoveryRes multiple. */
        public multiple: number;

        /** RecoveryRes ticket_num. */
        public ticket_num: number;

        /** RecoveryRes tickets. */
        public tickets: pbm.IBetTicket[];

        /**
         * Creates a new RecoveryRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RecoveryRes instance
         */
        public static create(properties?: pbm.IRecoveryRes): pbm.RecoveryRes;

        /**
         * Encodes the specified RecoveryRes message. Does not implicitly {@link pbm.RecoveryRes.verify|verify} messages.
         * @param message RecoveryRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.IRecoveryRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RecoveryRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RecoveryRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.RecoveryRes;
    }

    /** Properties of a GetRecordsReq. */
    interface IGetRecordsReq {

        /** GetRecordsReq page */
        page?: (common.IPage|null);
    }

    /** Represents a GetRecordsReq. */
    class GetRecordsReq implements IGetRecordsReq {

        /**
         * Constructs a new GetRecordsReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.IGetRecordsReq);

        /** GetRecordsReq page. */
        public page?: (common.IPage|null);

        /**
         * Creates a new GetRecordsReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetRecordsReq instance
         */
        public static create(properties?: pbm.IGetRecordsReq): pbm.GetRecordsReq;

        /**
         * Encodes the specified GetRecordsReq message. Does not implicitly {@link pbm.GetRecordsReq.verify|verify} messages.
         * @param message GetRecordsReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.IGetRecordsReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetRecordsReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetRecordsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.GetRecordsReq;
    }

    /** Properties of a UserRecord. */
    interface IUserRecord {

        /** UserRecord ts */
        ts?: (number|null);

        /** UserRecord round */
        round?: (string|null);

        /** UserRecord win_amount */
        win_amount?: (number|null);

        /** UserRecord win_multiple */
        win_multiple?: (number|null);

        /** UserRecord bomb_multiple */
        bomb_multiple?: (number|null);

        /** UserRecord tickets */
        tickets?: (pbm.IBetTicket[]|null);
    }

    /** Represents a UserRecord. */
    class UserRecord implements IUserRecord {

        /**
         * Constructs a new UserRecord.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.IUserRecord);

        /** UserRecord ts. */
        public ts: number;

        /** UserRecord round. */
        public round: string;

        /** UserRecord win_amount. */
        public win_amount: number;

        /** UserRecord win_multiple. */
        public win_multiple: number;

        /** UserRecord bomb_multiple. */
        public bomb_multiple: number;

        /** UserRecord tickets. */
        public tickets: pbm.IBetTicket[];

        /**
         * Creates a new UserRecord instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserRecord instance
         */
        public static create(properties?: pbm.IUserRecord): pbm.UserRecord;

        /**
         * Encodes the specified UserRecord message. Does not implicitly {@link pbm.UserRecord.verify|verify} messages.
         * @param message UserRecord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.IUserRecord, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserRecord message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.UserRecord;
    }

    /** Properties of a GetRecordsRes. */
    interface IGetRecordsRes {

        /** GetRecordsRes result */
        result?: (common.IResult|null);

        /** GetRecordsRes has_more */
        has_more?: (boolean|null);

        /** GetRecordsRes page */
        page?: (common.IPage|null);

        /** GetRecordsRes today_income */
        today_income?: (number|null);

        /** GetRecordsRes month_income */
        month_income?: (number|null);

        /** GetRecordsRes records */
        records?: (pbm.IUserRecord[]|null);

        /** GetRecordsRes today_ticket_value */
        today_ticket_value?: (number|null);
    }

    /** Represents a GetRecordsRes. */
    class GetRecordsRes implements IGetRecordsRes {

        /**
         * Constructs a new GetRecordsRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.IGetRecordsRes);

        /** GetRecordsRes result. */
        public result?: (common.IResult|null);

        /** GetRecordsRes has_more. */
        public has_more: boolean;

        /** GetRecordsRes page. */
        public page?: (common.IPage|null);

        /** GetRecordsRes today_income. */
        public today_income: number;

        /** GetRecordsRes month_income. */
        public month_income: number;

        /** GetRecordsRes records. */
        public records: pbm.IUserRecord[];

        /** GetRecordsRes today_ticket_value. */
        public today_ticket_value: number;

        /**
         * Creates a new GetRecordsRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetRecordsRes instance
         */
        public static create(properties?: pbm.IGetRecordsRes): pbm.GetRecordsRes;

        /**
         * Encodes the specified GetRecordsRes message. Does not implicitly {@link pbm.GetRecordsRes.verify|verify} messages.
         * @param message GetRecordsRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.IGetRecordsRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetRecordsRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetRecordsRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.GetRecordsRes;
    }

    /** Properties of an AutoBetReq. */
    interface IAutoBetReq {

        /** AutoBetReq currency_type */
        currency_type?: (number|null);

        /** AutoBetReq amount */
        amount?: (number|null);

        /** AutoBetReq rounds */
        rounds?: (number|null);

        /** AutoBetReq auto_multiple */
        auto_multiple?: (number|null);
    }

    /** Represents an AutoBetReq. */
    class AutoBetReq implements IAutoBetReq {

        /**
         * Constructs a new AutoBetReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.IAutoBetReq);

        /** AutoBetReq currency_type. */
        public currency_type: number;

        /** AutoBetReq amount. */
        public amount: number;

        /** AutoBetReq rounds. */
        public rounds: number;

        /** AutoBetReq auto_multiple. */
        public auto_multiple: number;

        /**
         * Creates a new AutoBetReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AutoBetReq instance
         */
        public static create(properties?: pbm.IAutoBetReq): pbm.AutoBetReq;

        /**
         * Encodes the specified AutoBetReq message. Does not implicitly {@link pbm.AutoBetReq.verify|verify} messages.
         * @param message AutoBetReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.IAutoBetReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AutoBetReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AutoBetReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.AutoBetReq;
    }

    /** Properties of an AutoBetRes. */
    interface IAutoBetRes {

        /** AutoBetRes result */
        result?: (common.IResult|null);
    }

    /** Represents an AutoBetRes. */
    class AutoBetRes implements IAutoBetRes {

        /**
         * Constructs a new AutoBetRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.IAutoBetRes);

        /** AutoBetRes result. */
        public result?: (common.IResult|null);

        /**
         * Creates a new AutoBetRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AutoBetRes instance
         */
        public static create(properties?: pbm.IAutoBetRes): pbm.AutoBetRes;

        /**
         * Encodes the specified AutoBetRes message. Does not implicitly {@link pbm.AutoBetRes.verify|verify} messages.
         * @param message AutoBetRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.IAutoBetRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AutoBetRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AutoBetRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.AutoBetRes;
    }

    /** EAutoStatus enum. */
    enum EAutoStatus {
        EAutoStatusNone = 0,
        EASNotStart = 1,
        EASOngoing = 2,
        EASEnd = 3
    }

    /** EAutoReason enum. */
    enum EAutoReason {
        EAutoReasonNone = 0,
        EARHand = 1,
        EARBalance = 2,
        EARServerError = 3,
        EARFinish = 4,
        EARMaintain = 5
    }

    /** Properties of an AutoInfo. */
    interface IAutoInfo {

        /** AutoInfo status */
        status?: (pbm.EAutoStatus|null);

        /** AutoInfo auto_rounds */
        auto_rounds?: (number|null);

        /** AutoInfo ran_rounds */
        ran_rounds?: (number|null);

        /** AutoInfo round_amount */
        round_amount?: (number|null);

        /** AutoInfo total_consume */
        total_consume?: (number|null);

        /** AutoInfo total_earn */
        total_earn?: (number|null);

        /** AutoInfo reason */
        reason?: (pbm.EAutoReason|null);

        /** AutoInfo id */
        id?: (string|null);
    }

    /** Represents an AutoInfo. */
    class AutoInfo implements IAutoInfo {

        /**
         * Constructs a new AutoInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.IAutoInfo);

        /** AutoInfo status. */
        public status: pbm.EAutoStatus;

        /** AutoInfo auto_rounds. */
        public auto_rounds: number;

        /** AutoInfo ran_rounds. */
        public ran_rounds: number;

        /** AutoInfo round_amount. */
        public round_amount: number;

        /** AutoInfo total_consume. */
        public total_consume: number;

        /** AutoInfo total_earn. */
        public total_earn: number;

        /** AutoInfo reason. */
        public reason: pbm.EAutoReason;

        /** AutoInfo id. */
        public id: string;

        /**
         * Creates a new AutoInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AutoInfo instance
         */
        public static create(properties?: pbm.IAutoInfo): pbm.AutoInfo;

        /**
         * Encodes the specified AutoInfo message. Does not implicitly {@link pbm.AutoInfo.verify|verify} messages.
         * @param message AutoInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.IAutoInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AutoInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AutoInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.AutoInfo;
    }

    /** Properties of a CancelAutoReq. */
    interface ICancelAutoReq {
    }

    /** Represents a CancelAutoReq. */
    class CancelAutoReq implements ICancelAutoReq {

        /**
         * Constructs a new CancelAutoReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.ICancelAutoReq);

        /**
         * Creates a new CancelAutoReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CancelAutoReq instance
         */
        public static create(properties?: pbm.ICancelAutoReq): pbm.CancelAutoReq;

        /**
         * Encodes the specified CancelAutoReq message. Does not implicitly {@link pbm.CancelAutoReq.verify|verify} messages.
         * @param message CancelAutoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.ICancelAutoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CancelAutoReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CancelAutoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.CancelAutoReq;
    }

    /** Properties of a CancelAutoRes. */
    interface ICancelAutoRes {

        /** CancelAutoRes result */
        result?: (common.IResult|null);
    }

    /** Represents a CancelAutoRes. */
    class CancelAutoRes implements ICancelAutoRes {

        /**
         * Constructs a new CancelAutoRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.ICancelAutoRes);

        /** CancelAutoRes result. */
        public result?: (common.IResult|null);

        /**
         * Creates a new CancelAutoRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CancelAutoRes instance
         */
        public static create(properties?: pbm.ICancelAutoRes): pbm.CancelAutoRes;

        /**
         * Encodes the specified CancelAutoRes message. Does not implicitly {@link pbm.CancelAutoRes.verify|verify} messages.
         * @param message CancelAutoRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.ICancelAutoRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CancelAutoRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CancelAutoRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.CancelAutoRes;
    }

    /** Properties of a GetRankReq. */
    interface IGetRankReq {

        /** GetRankReq day_offset */
        day_offset?: (number|null);
    }

    /** Represents a GetRankReq. */
    class GetRankReq implements IGetRankReq {

        /**
         * Constructs a new GetRankReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.IGetRankReq);

        /** GetRankReq day_offset. */
        public day_offset: number;

        /**
         * Creates a new GetRankReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetRankReq instance
         */
        public static create(properties?: pbm.IGetRankReq): pbm.GetRankReq;

        /**
         * Encodes the specified GetRankReq message. Does not implicitly {@link pbm.GetRankReq.verify|verify} messages.
         * @param message GetRankReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.IGetRankReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetRankReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetRankReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.GetRankReq;
    }

    /** Properties of a GetRankRes. */
    interface IGetRankRes {

        /** GetRankRes result */
        result?: (common.IResult|null);

        /** GetRankRes day_offset */
        day_offset?: (number|null);

        /** GetRankRes rank_list */
        rank_list?: (pbm.IRoleRankData[]|null);

        /** GetRankRes my_rank */
        my_rank?: (pbm.IRoleRankData|null);

        /** GetRankRes remain_seconds */
        remain_seconds?: (number|null);

        /** GetRankRes yesterday_top_rank */
        yesterday_top_rank?: (pbm.IRoleRankData|null);

        /** GetRankRes cumulative_number */
        cumulative_number?: (number|null);
    }

    /** Represents a GetRankRes. */
    class GetRankRes implements IGetRankRes {

        /**
         * Constructs a new GetRankRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.IGetRankRes);

        /** GetRankRes result. */
        public result?: (common.IResult|null);

        /** GetRankRes day_offset. */
        public day_offset: number;

        /** GetRankRes rank_list. */
        public rank_list: pbm.IRoleRankData[];

        /** GetRankRes my_rank. */
        public my_rank?: (pbm.IRoleRankData|null);

        /** GetRankRes remain_seconds. */
        public remain_seconds: number;

        /** GetRankRes yesterday_top_rank. */
        public yesterday_top_rank?: (pbm.IRoleRankData|null);

        /** GetRankRes cumulative_number. */
        public cumulative_number: number;

        /**
         * Creates a new GetRankRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetRankRes instance
         */
        public static create(properties?: pbm.IGetRankRes): pbm.GetRankRes;

        /**
         * Encodes the specified GetRankRes message. Does not implicitly {@link pbm.GetRankRes.verify|verify} messages.
         * @param message GetRankRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.IGetRankRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetRankRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetRankRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.GetRankRes;
    }

    /** Properties of a RankRewardNotifyRes. */
    interface IRankRewardNotifyRes {

        /** RankRewardNotifyRes result */
        result?: (common.IResult|null);

        /** RankRewardNotifyRes rank_date */
        rank_date?: (string|null);

        /** RankRewardNotifyRes rank */
        rank?: (number|null);

        /** RankRewardNotifyRes uid */
        uid?: (string|null);

        /** RankRewardNotifyRes reward */
        reward?: (commodity.ICommodityReward|null);
    }

    /** Represents a RankRewardNotifyRes. */
    class RankRewardNotifyRes implements IRankRewardNotifyRes {

        /**
         * Constructs a new RankRewardNotifyRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.IRankRewardNotifyRes);

        /** RankRewardNotifyRes result. */
        public result?: (common.IResult|null);

        /** RankRewardNotifyRes rank_date. */
        public rank_date: string;

        /** RankRewardNotifyRes rank. */
        public rank: number;

        /** RankRewardNotifyRes uid. */
        public uid: string;

        /** RankRewardNotifyRes reward. */
        public reward?: (commodity.ICommodityReward|null);

        /**
         * Creates a new RankRewardNotifyRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RankRewardNotifyRes instance
         */
        public static create(properties?: pbm.IRankRewardNotifyRes): pbm.RankRewardNotifyRes;

        /**
         * Encodes the specified RankRewardNotifyRes message. Does not implicitly {@link pbm.RankRewardNotifyRes.verify|verify} messages.
         * @param message RankRewardNotifyRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.IRankRewardNotifyRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RankRewardNotifyRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RankRewardNotifyRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.RankRewardNotifyRes;
    }

    /** Properties of a RoleRankData. */
    interface IRoleRankData {

        /** RoleRankData uid */
        uid?: (string|null);

        /** RoleRankData score */
        score?: (number|null);

        /** RoleRankData rank */
        rank?: (number|null);

        /** RoleRankData avatar */
        avatar?: (string|null);

        /** RoleRankData avatar_frame */
        avatar_frame?: (string|null);

        /** RoleRankData nick */
        nick?: (string|null);

        /** RoleRankData noble_icon */
        noble_icon?: (pbm.INobleIcon|null);

        /** RoleRankData vip_info */
        vip_info?: (pbm.IVipInfo|null);
    }

    /** Represents a RoleRankData. */
    class RoleRankData implements IRoleRankData {

        /**
         * Constructs a new RoleRankData.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.IRoleRankData);

        /** RoleRankData uid. */
        public uid: string;

        /** RoleRankData score. */
        public score: number;

        /** RoleRankData rank. */
        public rank: number;

        /** RoleRankData avatar. */
        public avatar: string;

        /** RoleRankData avatar_frame. */
        public avatar_frame: string;

        /** RoleRankData nick. */
        public nick: string;

        /** RoleRankData noble_icon. */
        public noble_icon?: (pbm.INobleIcon|null);

        /** RoleRankData vip_info. */
        public vip_info?: (pbm.IVipInfo|null);

        /**
         * Creates a new RoleRankData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoleRankData instance
         */
        public static create(properties?: pbm.IRoleRankData): pbm.RoleRankData;

        /**
         * Encodes the specified RoleRankData message. Does not implicitly {@link pbm.RoleRankData.verify|verify} messages.
         * @param message RoleRankData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.IRoleRankData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoleRankData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoleRankData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.RoleRankData;
    }

    /** Properties of a NobleIcon. */
    interface INobleIcon {

        /** NobleIcon bg_icon */
        bg_icon?: (string|null);

        /** NobleIcon brand_icon */
        brand_icon?: (string|null);

        /** NobleIcon big_brand_icon */
        big_brand_icon?: (string|null);

        /** NobleIcon icon_id */
        icon_id?: (number|null);
    }

    /** Represents a NobleIcon. */
    class NobleIcon implements INobleIcon {

        /**
         * Constructs a new NobleIcon.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.INobleIcon);

        /** NobleIcon bg_icon. */
        public bg_icon: string;

        /** NobleIcon brand_icon. */
        public brand_icon: string;

        /** NobleIcon big_brand_icon. */
        public big_brand_icon: string;

        /** NobleIcon icon_id. */
        public icon_id: number;

        /**
         * Creates a new NobleIcon instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NobleIcon instance
         */
        public static create(properties?: pbm.INobleIcon): pbm.NobleIcon;

        /**
         * Encodes the specified NobleIcon message. Does not implicitly {@link pbm.NobleIcon.verify|verify} messages.
         * @param message NobleIcon message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.INobleIcon, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NobleIcon message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NobleIcon
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.NobleIcon;
    }

    /** Properties of a VipInfo. */
    interface IVipInfo {

        /** VipInfo bg_icon */
        bg_icon?: (string|null);

        /** VipInfo brand_icon */
        brand_icon?: (string|null);

        /** VipInfo frozen_bg_icon */
        frozen_bg_icon?: (string|null);

        /** VipInfo frozen_brand_icon */
        frozen_brand_icon?: (string|null);

        /** VipInfo vip_level */
        vip_level?: (number|null);

        /** VipInfo sub_type */
        sub_type?: (string|null);
    }

    /** Represents a VipInfo. */
    class VipInfo implements IVipInfo {

        /**
         * Constructs a new VipInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.IVipInfo);

        /** VipInfo bg_icon. */
        public bg_icon: string;

        /** VipInfo brand_icon. */
        public brand_icon: string;

        /** VipInfo frozen_bg_icon. */
        public frozen_bg_icon: string;

        /** VipInfo frozen_brand_icon. */
        public frozen_brand_icon: string;

        /** VipInfo vip_level. */
        public vip_level: number;

        /** VipInfo sub_type. */
        public sub_type: string;

        /**
         * Creates a new VipInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VipInfo instance
         */
        public static create(properties?: pbm.IVipInfo): pbm.VipInfo;

        /**
         * Encodes the specified VipInfo message. Does not implicitly {@link pbm.VipInfo.verify|verify} messages.
         * @param message VipInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.IVipInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VipInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VipInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.VipInfo;
    }

    /** Properties of a TestCmdReq. */
    interface ITestCmdReq {

        /** TestCmdReq cmd */
        cmd?: (number|null);

        /** TestCmdReq param */
        param?: (number|null);
    }

    /** Represents a TestCmdReq. */
    class TestCmdReq implements ITestCmdReq {

        /**
         * Constructs a new TestCmdReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.ITestCmdReq);

        /** TestCmdReq cmd. */
        public cmd: number;

        /** TestCmdReq param. */
        public param: number;

        /**
         * Creates a new TestCmdReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TestCmdReq instance
         */
        public static create(properties?: pbm.ITestCmdReq): pbm.TestCmdReq;

        /**
         * Encodes the specified TestCmdReq message. Does not implicitly {@link pbm.TestCmdReq.verify|verify} messages.
         * @param message TestCmdReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.ITestCmdReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TestCmdReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TestCmdReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.TestCmdReq;
    }

    /** Properties of a TestCmdRes. */
    interface ITestCmdRes {

        /** TestCmdRes result */
        result?: (common.IResult|null);
    }

    /** Represents a TestCmdRes. */
    class TestCmdRes implements ITestCmdRes {

        /**
         * Constructs a new TestCmdRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.ITestCmdRes);

        /** TestCmdRes result. */
        public result?: (common.IResult|null);

        /**
         * Creates a new TestCmdRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TestCmdRes instance
         */
        public static create(properties?: pbm.ITestCmdRes): pbm.TestCmdRes;

        /**
         * Encodes the specified TestCmdRes message. Does not implicitly {@link pbm.TestCmdRes.verify|verify} messages.
         * @param message TestCmdRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.ITestCmdRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TestCmdRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TestCmdRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.TestCmdRes;
    }

    /** Properties of a ReportReq. */
    interface IReportReq {

        /** ReportReq os */
        os?: (string|null);

        /** ReportReq client_version */
        client_version?: (string|null);

        /** ReportReq client_name */
        client_name?: (string|null);
    }

    /** Represents a ReportReq. */
    class ReportReq implements IReportReq {

        /**
         * Constructs a new ReportReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.IReportReq);

        /** ReportReq os. */
        public os: string;

        /** ReportReq client_version. */
        public client_version: string;

        /** ReportReq client_name. */
        public client_name: string;

        /**
         * Creates a new ReportReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReportReq instance
         */
        public static create(properties?: pbm.IReportReq): pbm.ReportReq;

        /**
         * Encodes the specified ReportReq message. Does not implicitly {@link pbm.ReportReq.verify|verify} messages.
         * @param message ReportReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.IReportReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReportReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReportReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.ReportReq;
    }

    /** Properties of a ReportRes. */
    interface IReportRes {

        /** ReportRes result */
        result?: (common.IResult|null);
    }

    /** Represents a ReportRes. */
    class ReportRes implements IReportRes {

        /**
         * Constructs a new ReportRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.IReportRes);

        /** ReportRes result. */
        public result?: (common.IResult|null);

        /**
         * Creates a new ReportRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReportRes instance
         */
        public static create(properties?: pbm.IReportRes): pbm.ReportRes;

        /**
         * Encodes the specified ReportRes message. Does not implicitly {@link pbm.ReportRes.verify|verify} messages.
         * @param message ReportRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.IReportRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReportRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReportRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.ReportRes;
    }

    /** Properties of a CidReq. */
    interface ICidReq {

        /** CidReq cid */
        cid?: (string|null);

        /** CidReq openScene */
        openScene?: (number|null);

        /** CidReq from */
        from?: (string|null);

        /** CidReq voiceRoomData */
        voiceRoomData?: (string|null);
    }

    /** Represents a CidReq. */
    class CidReq implements ICidReq {

        /**
         * Constructs a new CidReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.ICidReq);

        /** CidReq cid. */
        public cid: string;

        /** CidReq openScene. */
        public openScene: number;

        /** CidReq from. */
        public from: string;

        /** CidReq voiceRoomData. */
        public voiceRoomData: string;

        /**
         * Creates a new CidReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CidReq instance
         */
        public static create(properties?: pbm.ICidReq): pbm.CidReq;

        /**
         * Encodes the specified CidReq message. Does not implicitly {@link pbm.CidReq.verify|verify} messages.
         * @param message CidReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.ICidReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CidReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CidReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.CidReq;
    }

    /** Properties of a CidRes. */
    interface ICidRes {

        /** CidRes result */
        result?: (common.IResult|null);
    }

    /** Represents a CidRes. */
    class CidRes implements ICidRes {

        /**
         * Constructs a new CidRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.ICidRes);

        /** CidRes result. */
        public result?: (common.IResult|null);

        /**
         * Creates a new CidRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CidRes instance
         */
        public static create(properties?: pbm.ICidRes): pbm.CidRes;

        /**
         * Encodes the specified CidRes message. Does not implicitly {@link pbm.CidRes.verify|verify} messages.
         * @param message CidRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.ICidRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CidRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CidRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.CidRes;
    }

    /** Properties of a CommoditySpecified. */
    interface ICommoditySpecified {

        /** CommoditySpecified commodity_type */
        commodity_type?: (commodity.CommodityType|null);

        /** CommoditySpecified commodity_id */
        commodity_id?: (number|null);

        /** CommoditySpecified version */
        version?: (number|null);
    }

    /** Represents a CommoditySpecified. */
    class CommoditySpecified implements ICommoditySpecified {

        /**
         * Constructs a new CommoditySpecified.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.ICommoditySpecified);

        /** CommoditySpecified commodity_type. */
        public commodity_type: commodity.CommodityType;

        /** CommoditySpecified commodity_id. */
        public commodity_id: number;

        /** CommoditySpecified version. */
        public version: number;

        /**
         * Creates a new CommoditySpecified instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CommoditySpecified instance
         */
        public static create(properties?: pbm.ICommoditySpecified): pbm.CommoditySpecified;

        /**
         * Encodes the specified CommoditySpecified message. Does not implicitly {@link pbm.CommoditySpecified.verify|verify} messages.
         * @param message CommoditySpecified message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.ICommoditySpecified, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CommoditySpecified message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CommoditySpecified
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.CommoditySpecified;
    }

    /** Properties of a CommodityFilter. */
    interface ICommodityFilter {

        /** CommodityFilter language */
        language?: (string|null);
    }

    /** Represents a CommodityFilter. */
    class CommodityFilter implements ICommodityFilter {

        /**
         * Constructs a new CommodityFilter.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.ICommodityFilter);

        /** CommodityFilter language. */
        public language: string;

        /**
         * Creates a new CommodityFilter instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CommodityFilter instance
         */
        public static create(properties?: pbm.ICommodityFilter): pbm.CommodityFilter;

        /**
         * Encodes the specified CommodityFilter message. Does not implicitly {@link pbm.CommodityFilter.verify|verify} messages.
         * @param message CommodityFilter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.ICommodityFilter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CommodityFilter message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CommodityFilter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.CommodityFilter;
    }

    /** Properties of a BatchGetCommoditiesReq. */
    interface IBatchGetCommoditiesReq {

        /** BatchGetCommoditiesReq commodities */
        commodities?: (pbm.ICommoditySpecified[]|null);

        /** BatchGetCommoditiesReq filter */
        filter?: (pbm.ICommodityFilter|null);
    }

    /** Represents a BatchGetCommoditiesReq. */
    class BatchGetCommoditiesReq implements IBatchGetCommoditiesReq {

        /**
         * Constructs a new BatchGetCommoditiesReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.IBatchGetCommoditiesReq);

        /** BatchGetCommoditiesReq commodities. */
        public commodities: pbm.ICommoditySpecified[];

        /** BatchGetCommoditiesReq filter. */
        public filter?: (pbm.ICommodityFilter|null);

        /**
         * Creates a new BatchGetCommoditiesReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BatchGetCommoditiesReq instance
         */
        public static create(properties?: pbm.IBatchGetCommoditiesReq): pbm.BatchGetCommoditiesReq;

        /**
         * Encodes the specified BatchGetCommoditiesReq message. Does not implicitly {@link pbm.BatchGetCommoditiesReq.verify|verify} messages.
         * @param message BatchGetCommoditiesReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.IBatchGetCommoditiesReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BatchGetCommoditiesReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BatchGetCommoditiesReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.BatchGetCommoditiesReq;
    }

    /** ResourceType enum. */
    enum ResourceType {
        ResourceTypeNone = 0,
        ResourceTypeSvga = 1,
        ResourceTypePng = 2,
        ResourceTypeJpg = 3,
        ResourceTypeWebp = 4,
        ResourceTypeMp4 = 5,
        ResourceTypeZip = 6
    }

    /** Properties of a Resource. */
    interface IResource {

        /** Resource resource_url */
        resource_url?: (string|null);

        /** Resource resource_type */
        resource_type?: (pbm.ResourceType|null);

        /** Resource resource_md5 */
        resource_md5?: (string|null);
    }

    /** Represents a Resource. */
    class Resource implements IResource {

        /**
         * Constructs a new Resource.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.IResource);

        /** Resource resource_url. */
        public resource_url: string;

        /** Resource resource_type. */
        public resource_type: pbm.ResourceType;

        /** Resource resource_md5. */
        public resource_md5: string;

        /**
         * Creates a new Resource instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resource instance
         */
        public static create(properties?: pbm.IResource): pbm.Resource;

        /**
         * Encodes the specified Resource message. Does not implicitly {@link pbm.Resource.verify|verify} messages.
         * @param message Resource message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.IResource, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resource message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Resource
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.Resource;
    }

    /** Properties of a Commodity. */
    interface ICommodity {

        /** Commodity commodity_id */
        commodity_id?: (number|null);

        /** Commodity commodity_type */
        commodity_type?: (commodity.CommodityType|null);

        /** Commodity languages */
        languages?: ({ [k: string]: string }|null);

        /** Commodity icon */
        icon?: (pbm.IResource|null);

        /** Commodity h5_icon */
        h5_icon?: (pbm.IResource|null);
    }

    /** Represents a Commodity. */
    class Commodity implements ICommodity {

        /**
         * Constructs a new Commodity.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.ICommodity);

        /** Commodity commodity_id. */
        public commodity_id: number;

        /** Commodity commodity_type. */
        public commodity_type: commodity.CommodityType;

        /** Commodity languages. */
        public languages: { [k: string]: string };

        /** Commodity icon. */
        public icon?: (pbm.IResource|null);

        /** Commodity h5_icon. */
        public h5_icon?: (pbm.IResource|null);

        /**
         * Creates a new Commodity instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Commodity instance
         */
        public static create(properties?: pbm.ICommodity): pbm.Commodity;

        /**
         * Encodes the specified Commodity message. Does not implicitly {@link pbm.Commodity.verify|verify} messages.
         * @param message Commodity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.ICommodity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Commodity message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Commodity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.Commodity;
    }

    /** Properties of a BatchGetCommoditiesRes. */
    interface IBatchGetCommoditiesRes {

        /** BatchGetCommoditiesRes result */
        result?: (common.IResult|null);

        /** BatchGetCommoditiesRes commodities */
        commodities?: (pbm.ICommodity[]|null);

        /** BatchGetCommoditiesRes cached_commodities */
        cached_commodities?: (pbm.ICommoditySpecified[]|null);
    }

    /** Represents a BatchGetCommoditiesRes. */
    class BatchGetCommoditiesRes implements IBatchGetCommoditiesRes {

        /**
         * Constructs a new BatchGetCommoditiesRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.IBatchGetCommoditiesRes);

        /** BatchGetCommoditiesRes result. */
        public result?: (common.IResult|null);

        /** BatchGetCommoditiesRes commodities. */
        public commodities: pbm.ICommodity[];

        /** BatchGetCommoditiesRes cached_commodities. */
        public cached_commodities: pbm.ICommoditySpecified[];

        /**
         * Creates a new BatchGetCommoditiesRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BatchGetCommoditiesRes instance
         */
        public static create(properties?: pbm.IBatchGetCommoditiesRes): pbm.BatchGetCommoditiesRes;

        /**
         * Encodes the specified BatchGetCommoditiesRes message. Does not implicitly {@link pbm.BatchGetCommoditiesRes.verify|verify} messages.
         * @param message BatchGetCommoditiesRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.IBatchGetCommoditiesRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BatchGetCommoditiesRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BatchGetCommoditiesRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.BatchGetCommoditiesRes;
    }

    /** Properties of a GameConfigChangeRes. */
    interface IGameConfigChangeRes {

        /** GameConfigChangeRes result */
        result?: (common.IResult|null);
    }

    /** Represents a GameConfigChangeRes. */
    class GameConfigChangeRes implements IGameConfigChangeRes {

        /**
         * Constructs a new GameConfigChangeRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.IGameConfigChangeRes);

        /** GameConfigChangeRes result. */
        public result?: (common.IResult|null);

        /**
         * Creates a new GameConfigChangeRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameConfigChangeRes instance
         */
        public static create(properties?: pbm.IGameConfigChangeRes): pbm.GameConfigChangeRes;

        /**
         * Encodes the specified GameConfigChangeRes message. Does not implicitly {@link pbm.GameConfigChangeRes.verify|verify} messages.
         * @param message GameConfigChangeRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.IGameConfigChangeRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameConfigChangeRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameConfigChangeRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.GameConfigChangeRes;
    }

    /** Properties of a SetRedDiamondSwitchReq. */
    interface ISetRedDiamondSwitchReq {

        /** SetRedDiamondSwitchReq red_diamond_switch */
        red_diamond_switch?: (number|null);
    }

    /** Represents a SetRedDiamondSwitchReq. */
    class SetRedDiamondSwitchReq implements ISetRedDiamondSwitchReq {

        /**
         * Constructs a new SetRedDiamondSwitchReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.ISetRedDiamondSwitchReq);

        /** SetRedDiamondSwitchReq red_diamond_switch. */
        public red_diamond_switch: number;

        /**
         * Creates a new SetRedDiamondSwitchReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetRedDiamondSwitchReq instance
         */
        public static create(properties?: pbm.ISetRedDiamondSwitchReq): pbm.SetRedDiamondSwitchReq;

        /**
         * Encodes the specified SetRedDiamondSwitchReq message. Does not implicitly {@link pbm.SetRedDiamondSwitchReq.verify|verify} messages.
         * @param message SetRedDiamondSwitchReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.ISetRedDiamondSwitchReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetRedDiamondSwitchReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetRedDiamondSwitchReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.SetRedDiamondSwitchReq;
    }

    /** Properties of a SetRedDiamondSwitchRes. */
    interface ISetRedDiamondSwitchRes {

        /** SetRedDiamondSwitchRes result */
        result?: (common.IResult|null);
    }

    /** Represents a SetRedDiamondSwitchRes. */
    class SetRedDiamondSwitchRes implements ISetRedDiamondSwitchRes {

        /**
         * Constructs a new SetRedDiamondSwitchRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.ISetRedDiamondSwitchRes);

        /** SetRedDiamondSwitchRes result. */
        public result?: (common.IResult|null);

        /**
         * Creates a new SetRedDiamondSwitchRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetRedDiamondSwitchRes instance
         */
        public static create(properties?: pbm.ISetRedDiamondSwitchRes): pbm.SetRedDiamondSwitchRes;

        /**
         * Encodes the specified SetRedDiamondSwitchRes message. Does not implicitly {@link pbm.SetRedDiamondSwitchRes.verify|verify} messages.
         * @param message SetRedDiamondSwitchRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.ISetRedDiamondSwitchRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetRedDiamondSwitchRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetRedDiamondSwitchRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.SetRedDiamondSwitchRes;
    }

    /** Properties of an Upstream. */
    interface IUpstream {

        /** Upstream path */
        path?: (string|null);

        /** Upstream seq */
        seq?: (number|null);

        /** Upstream conn_id */
        conn_id?: (string|null);

        /** Upstream uid */
        uid?: (string|null);

        /** Upstream room_id */
        room_id?: (string|null);

        /** Upstream header */
        header?: ({ [k: string]: string }|null);

        /** Upstream content_type */
        content_type?: (string|null);

        /** Upstream body_name */
        body_name?: (string|null);

        /** Upstream body */
        body?: (Uint8Array|null);
    }

    /** Represents an Upstream. */
    class Upstream implements IUpstream {

        /**
         * Constructs a new Upstream.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.IUpstream);

        /** Upstream path. */
        public path: string;

        /** Upstream seq. */
        public seq: number;

        /** Upstream conn_id. */
        public conn_id: string;

        /** Upstream uid. */
        public uid: string;

        /** Upstream room_id. */
        public room_id: string;

        /** Upstream header. */
        public header: { [k: string]: string };

        /** Upstream content_type. */
        public content_type: string;

        /** Upstream body_name. */
        public body_name: string;

        /** Upstream body. */
        public body: Uint8Array;

        /**
         * Creates a new Upstream instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Upstream instance
         */
        public static create(properties?: pbm.IUpstream): pbm.Upstream;

        /**
         * Encodes the specified Upstream message. Does not implicitly {@link pbm.Upstream.verify|verify} messages.
         * @param message Upstream message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.IUpstream, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Upstream message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Upstream
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.Upstream;
    }

    /** Properties of a Downstream. */
    interface IDownstream {

        /** Downstream path */
        path?: (string|null);

        /** Downstream seq */
        seq?: (number|null);

        /** Downstream conn_id */
        conn_id?: (string|null);

        /** Downstream room_id */
        room_id?: (string|null);

        /** Downstream status_code */
        status_code?: (number|null);

        /** Downstream header */
        header?: ({ [k: string]: string }|null);

        /** Downstream content_type */
        content_type?: (string|null);

        /** Downstream body_name */
        body_name?: (string|null);

        /** Downstream body */
        body?: (Uint8Array|null);
    }

    /** Represents a Downstream. */
    class Downstream implements IDownstream {

        /**
         * Constructs a new Downstream.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.IDownstream);

        /** Downstream path. */
        public path: string;

        /** Downstream seq. */
        public seq: number;

        /** Downstream conn_id. */
        public conn_id: string;

        /** Downstream room_id. */
        public room_id: string;

        /** Downstream status_code. */
        public status_code: number;

        /** Downstream header. */
        public header: { [k: string]: string };

        /** Downstream content_type. */
        public content_type: string;

        /** Downstream body_name. */
        public body_name: string;

        /** Downstream body. */
        public body: Uint8Array;

        /**
         * Creates a new Downstream instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Downstream instance
         */
        public static create(properties?: pbm.IDownstream): pbm.Downstream;

        /**
         * Encodes the specified Downstream message. Does not implicitly {@link pbm.Downstream.verify|verify} messages.
         * @param message Downstream message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.IDownstream, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Downstream message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Downstream
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.Downstream;
    }

    /** Properties of a GMEInternalEnterRoom. */
    interface IGMEInternalEnterRoom {

        /** GMEInternalEnterRoom uid */
        uid?: (string|null);

        /** GMEInternalEnterRoom user_data */
        user_data?: (Uint8Array|null);
    }

    /** Represents a GMEInternalEnterRoom. */
    class GMEInternalEnterRoom implements IGMEInternalEnterRoom {

        /**
         * Constructs a new GMEInternalEnterRoom.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.IGMEInternalEnterRoom);

        /** GMEInternalEnterRoom uid. */
        public uid: string;

        /** GMEInternalEnterRoom user_data. */
        public user_data: Uint8Array;

        /**
         * Creates a new GMEInternalEnterRoom instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GMEInternalEnterRoom instance
         */
        public static create(properties?: pbm.IGMEInternalEnterRoom): pbm.GMEInternalEnterRoom;

        /**
         * Encodes the specified GMEInternalEnterRoom message. Does not implicitly {@link pbm.GMEInternalEnterRoom.verify|verify} messages.
         * @param message GMEInternalEnterRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.IGMEInternalEnterRoom, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GMEInternalEnterRoom message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GMEInternalEnterRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.GMEInternalEnterRoom;
    }

    /** LeaveRoomReason enum. */
    enum LeaveRoomReason {
        ClientExit = 0,
        Kick = 1,
        ClientConnectionLost = 2,
        ServerConnectionLost = 3
    }

    /** Properties of a GMEInternalLeaveRoom. */
    interface IGMEInternalLeaveRoom {

        /** GMEInternalLeaveRoom uid */
        uid?: (string|null);

        /** GMEInternalLeaveRoom user_data */
        user_data?: (Uint8Array|null);

        /** GMEInternalLeaveRoom reason */
        reason?: (pbm.LeaveRoomReason|null);
    }

    /** Represents a GMEInternalLeaveRoom. */
    class GMEInternalLeaveRoom implements IGMEInternalLeaveRoom {

        /**
         * Constructs a new GMEInternalLeaveRoom.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.IGMEInternalLeaveRoom);

        /** GMEInternalLeaveRoom uid. */
        public uid: string;

        /** GMEInternalLeaveRoom user_data. */
        public user_data: Uint8Array;

        /** GMEInternalLeaveRoom reason. */
        public reason: pbm.LeaveRoomReason;

        /**
         * Creates a new GMEInternalLeaveRoom instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GMEInternalLeaveRoom instance
         */
        public static create(properties?: pbm.IGMEInternalLeaveRoom): pbm.GMEInternalLeaveRoom;

        /**
         * Encodes the specified GMEInternalLeaveRoom message. Does not implicitly {@link pbm.GMEInternalLeaveRoom.verify|verify} messages.
         * @param message GMEInternalLeaveRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.IGMEInternalLeaveRoom, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GMEInternalLeaveRoom message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GMEInternalLeaveRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.GMEInternalLeaveRoom;
    }

    /** Properties of a GMEHeartBeatReq. */
    interface IGMEHeartBeatReq {
    }

    /** Represents a GMEHeartBeatReq. */
    class GMEHeartBeatReq implements IGMEHeartBeatReq {

        /**
         * Constructs a new GMEHeartBeatReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.IGMEHeartBeatReq);

        /**
         * Creates a new GMEHeartBeatReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GMEHeartBeatReq instance
         */
        public static create(properties?: pbm.IGMEHeartBeatReq): pbm.GMEHeartBeatReq;

        /**
         * Encodes the specified GMEHeartBeatReq message. Does not implicitly {@link pbm.GMEHeartBeatReq.verify|verify} messages.
         * @param message GMEHeartBeatReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.IGMEHeartBeatReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GMEHeartBeatReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GMEHeartBeatReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.GMEHeartBeatReq;
    }

    /** Properties of a GMEHeartBeatRes. */
    interface IGMEHeartBeatRes {
    }

    /** Represents a GMEHeartBeatRes. */
    class GMEHeartBeatRes implements IGMEHeartBeatRes {

        /**
         * Constructs a new GMEHeartBeatRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.IGMEHeartBeatRes);

        /**
         * Creates a new GMEHeartBeatRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GMEHeartBeatRes instance
         */
        public static create(properties?: pbm.IGMEHeartBeatRes): pbm.GMEHeartBeatRes;

        /**
         * Encodes the specified GMEHeartBeatRes message. Does not implicitly {@link pbm.GMEHeartBeatRes.verify|verify} messages.
         * @param message GMEHeartBeatRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.IGMEHeartBeatRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GMEHeartBeatRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GMEHeartBeatRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.GMEHeartBeatRes;
    }

    /** Represents a Gateway */
    class Gateway extends $protobuf.rpc.Service {

        /**
         * Constructs a new Gateway service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Gateway service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Gateway;

        /**
         * Calls StreamingChannel.
         * @param request Upstream message or plain object
         * @param callback Node-style callback called with the error, if any, and Downstream
         */
        public streamingChannel(request: pbm.IUpstream, callback: pbm.Gateway.StreamingChannelCallback): void;

        /**
         * Calls StreamingChannel.
         * @param request Upstream message or plain object
         * @returns Promise
         */
        public streamingChannel(request: pbm.IUpstream): Promise<pbm.Downstream>;
    }

    namespace Gateway {

        /**
         * Callback as used by {@link pbm.Gateway#streamingChannel}.
         * @param error Error, if any
         * @param [response] Downstream
         */
        type StreamingChannelCallback = (error: (Error|null), response?: pbm.Downstream) => void;
    }

    /** ECode enum. */
    enum ECode {
        ECodeOk = 0,
        ECodeFrequenceError = 101
    }

    /** Properties of a TransRequest. */
    interface ITransRequest {

        /** TransRequest sname */
        sname?: (string|null);

        /** TransRequest method */
        method?: (string|null);

        /** TransRequest req */
        req?: (Uint8Array|null);
    }

    /** Represents a TransRequest. */
    class TransRequest implements ITransRequest {

        /**
         * Constructs a new TransRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.ITransRequest);

        /** TransRequest sname. */
        public sname: string;

        /** TransRequest method. */
        public method: string;

        /** TransRequest req. */
        public req: Uint8Array;

        /**
         * Creates a new TransRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TransRequest instance
         */
        public static create(properties?: pbm.ITransRequest): pbm.TransRequest;

        /**
         * Encodes the specified TransRequest message. Does not implicitly {@link pbm.TransRequest.verify|verify} messages.
         * @param message TransRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.ITransRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TransRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TransRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.TransRequest;
    }

    /** Properties of an AggregateGetReq. */
    interface IAggregateGetReq {

        /** AggregateGetReq sequence */
        sequence?: (number|null);

        /** AggregateGetReq requests */
        requests?: (pbm.ITransRequest[]|null);
    }

    /** Represents an AggregateGetReq. */
    class AggregateGetReq implements IAggregateGetReq {

        /**
         * Constructs a new AggregateGetReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.IAggregateGetReq);

        /** AggregateGetReq sequence. */
        public sequence: number;

        /** AggregateGetReq requests. */
        public requests: pbm.ITransRequest[];

        /**
         * Creates a new AggregateGetReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AggregateGetReq instance
         */
        public static create(properties?: pbm.IAggregateGetReq): pbm.AggregateGetReq;

        /**
         * Encodes the specified AggregateGetReq message. Does not implicitly {@link pbm.AggregateGetReq.verify|verify} messages.
         * @param message AggregateGetReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.IAggregateGetReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AggregateGetReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AggregateGetReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.AggregateGetReq;
    }

    /** Properties of a TransResponse. */
    interface ITransResponse {

        /** TransResponse sname */
        sname?: (string|null);

        /** TransResponse method */
        method?: (string|null);

        /** TransResponse rsp */
        rsp?: (Uint8Array|null);
    }

    /** Represents a TransResponse. */
    class TransResponse implements ITransResponse {

        /**
         * Constructs a new TransResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.ITransResponse);

        /** TransResponse sname. */
        public sname: string;

        /** TransResponse method. */
        public method: string;

        /** TransResponse rsp. */
        public rsp: Uint8Array;

        /**
         * Creates a new TransResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TransResponse instance
         */
        public static create(properties?: pbm.ITransResponse): pbm.TransResponse;

        /**
         * Encodes the specified TransResponse message. Does not implicitly {@link pbm.TransResponse.verify|verify} messages.
         * @param message TransResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.ITransResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TransResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TransResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.TransResponse;
    }

    /** Properties of an AggregateGetRes. */
    interface IAggregateGetRes {

        /** AggregateGetRes result */
        result?: (common.IResult|null);

        /** AggregateGetRes sequence */
        sequence?: (number|null);

        /** AggregateGetRes responses */
        responses?: (pbm.ITransResponse[]|null);
    }

    /** Represents an AggregateGetRes. */
    class AggregateGetRes implements IAggregateGetRes {

        /**
         * Constructs a new AggregateGetRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbm.IAggregateGetRes);

        /** AggregateGetRes result. */
        public result?: (common.IResult|null);

        /** AggregateGetRes sequence. */
        public sequence: number;

        /** AggregateGetRes responses. */
        public responses: pbm.ITransResponse[];

        /**
         * Creates a new AggregateGetRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AggregateGetRes instance
         */
        public static create(properties?: pbm.IAggregateGetRes): pbm.AggregateGetRes;

        /**
         * Encodes the specified AggregateGetRes message. Does not implicitly {@link pbm.AggregateGetRes.verify|verify} messages.
         * @param message AggregateGetRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbm.IAggregateGetRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AggregateGetRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AggregateGetRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbm.AggregateGetRes;
    }
}

/** Namespace commodity. */
export namespace commodity {

    /** CommodityType enum. */
    enum CommodityType {
        CommodityTypeNone = 0,
        CommodityTypeCrystal = 1,
        CommodityTypeGameCurrency = 2,
        CommodityTypeChatCurrency = 3,
        CommodityTypeCurrency = 6,
        CommodityTypeProp = 100,
        CommodityTypeHMRevenueProp = 101,
        CommodityTypePersonalDecorate = 500,
        CommodityTypeSceneDecorate = 501,
        CommodityTypeGeneralProp = 502,
        CommodityTypeMount = 503,
        CommodityTypeMakeUp = 504,
        CommodityTypeMotion = 505,
        CommodityTypeScene = 506,
        CommodityTypeFurnitureCoupon = 507,
        CommodityTypeMembershipPack = 508,
        CommodityTypeMallCoupon = 509,
        CommodityTypeCustomFace = 510,
        CommodityTypeRoomSeat = 511,
        CommodityTypeCoinMallCurrency = 512,
        CommodityTypeHMProp = 513,
        CommodityTypeRoomPermission = 514,
        CommodityTypeAIPropTime = 515,
        CommodityTypeGameProp = 517,
        CommodityTypeGamePropTime = 518,
        CommodityTypeGameGrowthSysExp = 519,
        CommodityTypeCustom = 2500,
        CommodityTypeCustomTime = 2501,
        CommodityTypeEmpty = 2600,
        CommodityTypeLabel = 3000,
        CommodityTypePalette = 3001,
        CommodityTypeGamePropLudo = 8001,
        CommodityTypeGamePropLudoTime = 8002,
        CommodityTypeAstroMembership = 11000,
        CommodityTypeAstroPowerPoint = 11001,
        CommodityTypeAstroLuckCrystal = 11002,
        CommodityTypeAstroCurrency = 11003,
        CommodityTypeAstroConsultCoupon = 11004,
        CommodityTypeInfunRoomLabel = 12000,
        CommodityTypeInfunCurrency = 12001,
        CommodityTypeInfunHeadIcon = 12002,
        CommodityTypeInfunInShow = 12003,
        CommodityTypeInfunChatBubble = 12004,
        CommodityTypeInfunRoomBgPic = 12005,
        CommodityTypeInfunBigEmoji = 12006,
        CommodityTypeInfunMicWave = 12007,
        CommodityTypeInfunMemberExp = 12008,
        CommodityTypeInfunRoomScore = 12009,
        CommodityTypeInfunGift = 12010,
        CommodityTypeInfunActiveGift = 12011,
        CommodityTypeInfunGameplayPrivilege = 12012,
        CommodityTypeInfunRoomCover = 12013,
        CommodityTypeInfunRoomFrame = 12014,
        CommodityTypeInfunRoomContentLabel = 12015,
        CommodityTypeInfunRelationInShow = 12016,
        CommodityTypeInfunUserLabel = 12017,
        CommodityTypeInfunGameVoucher = 12035,
        CommodityTypeInfunGameBonusCoupon = 12036,
        CommodityTypeInfunCustom = 12901,
        CommodityTypeInfunCustomTime = 12902,
        CommodityTypeInfunEmpty = 12999,
        CommodityTypeVideoGPTCurrency = 13000,
        CommodityTypeVideoGPTCoupon = 13001,
        CommodityType2DHeadIcon = 50001,
        CommodityType2DMedal = 50002,
        CommodityType2DInShow = 50003,
        CommodityType2DPrivilegePack = 50004,
        CommodityType2DGift = 50005,
        CommodityType2DLuckyCard = 50006,
        CommodityType2DDiamond = 50007,
        CommodityType2DHagoGold = 50008,
        CommodityType2DRoomBgPic = 50009,
        CommodityType2DBigEmoji = 50010,
        CommodityType2DCoupon = 50011,
        CommodityType2DChatBubble = 50012,
        CommodityType2DMask = 50013,
        CommodityType2DHammer = 50014,
        CommodityType2DPrivilegeMallTicket = 50015,
        CommodityType2DPayLevelScore = 50016,
        CommodityType2DSVIPScore = 50017,
        CommodityType2DRedPacket = 50018,
        CommodityType2DGameCoin = 50019,
        CommodityType2DDailyDrawCoupon = 50020,
        CommodityType2DPayLevelPower = 50021,
        CommodityType2DSvipvnScore = 50022,
        CommodityType2DDiyPush = 50023,
        CommodityType2DPackage = 50024,
        CommodityType2DUserCardBg = 50025,
        CommodityType2DShout = 50026,
        CommodityType2DCoffersDiamond = 50027,
        CommodityType2DNobleExpCard = 50028,
        CommodityType2DLevelQuickenCard = 50029,
        CommodityType2DEmojiGashaponTicket = 50030,
        CommodityType2DUserLevelScore = 50031,
        CommodityType2DFamilyReward = 50032,
        CommodityType2DGiftEffect = 50033,
        CommodityType2DHat = 50034,
        CommodityType2DRechargePoint = 50035,
        CommodityType2DWheat = 50036,
        CommodityType2DLiveCoverLabel = 50037,
        CommodityType2DThemeRoomCard = 50038,
        CommodityType2DMicDynamic = 50039,
        CommodityType2DMicIDMark = 50040,
        CommodityType2DConsumeCoupon = 50041,
        CommodityType2DRoomCoverFrame = 50042,
        CommodityType2DEmpty = 50100,
        CommodityType2DHeadIconPiece = 50101,
        CommodityType2DMedalPiece = 50102,
        CommodityType2DInshowPiece = 50103,
        CommodityType2DRoomBGPiece = 50109,
        CommodityType2DBigEmojiPiece = 50110,
        CommodityType2DChatBubblePiece = 50112,
        CommodityType2DMaskPiece = 50113,
        CommodityType2DWheatFrame = 50114,
        CommodityType2DCustom = 51000,
        CommodityType2DCustomTime = 51001
    }

    /** Properties of a CommodityReward. */
    interface ICommodityReward {

        /** CommodityReward commodity_type */
        commodity_type?: (commodity.CommodityType|null);

        /** CommodityReward commodity_id */
        commodity_id?: (number|null);

        /** CommodityReward count */
        count?: (number|null);

        /** CommodityReward expire_second */
        expire_second?: (number|null);
    }

    /** Represents a CommodityReward. */
    class CommodityReward implements ICommodityReward {

        /**
         * Constructs a new CommodityReward.
         * @param [properties] Properties to set
         */
        constructor(properties?: commodity.ICommodityReward);

        /** CommodityReward commodity_type. */
        public commodity_type: commodity.CommodityType;

        /** CommodityReward commodity_id. */
        public commodity_id: number;

        /** CommodityReward count. */
        public count: number;

        /** CommodityReward expire_second. */
        public expire_second: number;

        /**
         * Creates a new CommodityReward instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CommodityReward instance
         */
        public static create(properties?: commodity.ICommodityReward): commodity.CommodityReward;

        /**
         * Encodes the specified CommodityReward message. Does not implicitly {@link commodity.CommodityReward.verify|verify} messages.
         * @param message CommodityReward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: commodity.ICommodityReward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CommodityReward message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CommodityReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): commodity.CommodityReward;
    }
}

/** Namespace net. */
export namespace net {

    /** Namespace ihago. */
    namespace ihago {

        /** Namespace money. */
        namespace money {

            /** Namespace api. */
            namespace api {

                /** Namespace globalmetadata. */
                namespace globalmetadata {

                    /** Properties of a CommodityExtend. */
                    interface ICommodityExtend {

                        /** CommodityExtend infun_game_vocher_extend */
                        infun_game_vocher_extend?: (net.ihago.money.api.globalmetadata.IInfunGameCouponExtend|null);

                        /** CommodityExtend infun_game_bonus_coupon_extend */
                        infun_game_bonus_coupon_extend?: (net.ihago.money.api.globalmetadata.IInfunGameCouponExtend|null);
                    }

                    /** Represents a CommodityExtend. */
                    class CommodityExtend implements ICommodityExtend {

                        /**
                         * Constructs a new CommodityExtend.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: net.ihago.money.api.globalmetadata.ICommodityExtend);

                        /** CommodityExtend infun_game_vocher_extend. */
                        public infun_game_vocher_extend?: (net.ihago.money.api.globalmetadata.IInfunGameCouponExtend|null);

                        /** CommodityExtend infun_game_bonus_coupon_extend. */
                        public infun_game_bonus_coupon_extend?: (net.ihago.money.api.globalmetadata.IInfunGameCouponExtend|null);

                        /**
                         * Creates a new CommodityExtend instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CommodityExtend instance
                         */
                        public static create(properties?: net.ihago.money.api.globalmetadata.ICommodityExtend): net.ihago.money.api.globalmetadata.CommodityExtend;

                        /**
                         * Encodes the specified CommodityExtend message. Does not implicitly {@link net.ihago.money.api.globalmetadata.CommodityExtend.verify|verify} messages.
                         * @param message CommodityExtend message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: net.ihago.money.api.globalmetadata.ICommodityExtend, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CommodityExtend message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CommodityExtend
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): net.ihago.money.api.globalmetadata.CommodityExtend;
                    }

                    /** Properties of an InfunGameCouponExtend. */
                    interface IInfunGameCouponExtend {

                        /** InfunGameCouponExtend valid_days */
                        valid_days?: (number|null);

                        /** InfunGameCouponExtend addition_rate */
                        addition_rate?: (number|null);

                        /** InfunGameCouponExtend addition_limit */
                        addition_limit?: (number|null);

                        /** InfunGameCouponExtend stock_limit */
                        stock_limit?: (number|null);

                        /** InfunGameCouponExtend deduct_amount */
                        deduct_amount?: (number|null);
                    }

                    /** Represents an InfunGameCouponExtend. */
                    class InfunGameCouponExtend implements IInfunGameCouponExtend {

                        /**
                         * Constructs a new InfunGameCouponExtend.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: net.ihago.money.api.globalmetadata.IInfunGameCouponExtend);

                        /** InfunGameCouponExtend valid_days. */
                        public valid_days: number;

                        /** InfunGameCouponExtend addition_rate. */
                        public addition_rate: number;

                        /** InfunGameCouponExtend addition_limit. */
                        public addition_limit: number;

                        /** InfunGameCouponExtend stock_limit. */
                        public stock_limit: number;

                        /** InfunGameCouponExtend deduct_amount. */
                        public deduct_amount: number;

                        /**
                         * Creates a new InfunGameCouponExtend instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns InfunGameCouponExtend instance
                         */
                        public static create(properties?: net.ihago.money.api.globalmetadata.IInfunGameCouponExtend): net.ihago.money.api.globalmetadata.InfunGameCouponExtend;

                        /**
                         * Encodes the specified InfunGameCouponExtend message. Does not implicitly {@link net.ihago.money.api.globalmetadata.InfunGameCouponExtend.verify|verify} messages.
                         * @param message InfunGameCouponExtend message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: net.ihago.money.api.globalmetadata.IInfunGameCouponExtend, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an InfunGameCouponExtend message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns InfunGameCouponExtend
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): net.ihago.money.api.globalmetadata.InfunGameCouponExtend;
                    }

                    /** ResourceType enum. */
                    enum ResourceType {
                        ResourceTypeNone = 0,
                        ResourceTypeSvga = 1,
                        ResourceTypePng = 2,
                        ResourceTypeJpg = 3,
                        ResourceTypeWebp = 4,
                        ResourceTypeMp4 = 5,
                        ResourceTypeZip = 6
                    }

                    /** Properties of a Resource. */
                    interface IResource {

                        /** Resource resource_url */
                        resource_url?: (string|null);

                        /** Resource resource_type */
                        resource_type?: (net.ihago.money.api.globalmetadata.ResourceType|null);

                        /** Resource resource_md5 */
                        resource_md5?: (string|null);
                    }

                    /** Represents a Resource. */
                    class Resource implements IResource {

                        /**
                         * Constructs a new Resource.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: net.ihago.money.api.globalmetadata.IResource);

                        /** Resource resource_url. */
                        public resource_url: string;

                        /** Resource resource_type. */
                        public resource_type: net.ihago.money.api.globalmetadata.ResourceType;

                        /** Resource resource_md5. */
                        public resource_md5: string;

                        /**
                         * Creates a new Resource instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Resource instance
                         */
                        public static create(properties?: net.ihago.money.api.globalmetadata.IResource): net.ihago.money.api.globalmetadata.Resource;

                        /**
                         * Encodes the specified Resource message. Does not implicitly {@link net.ihago.money.api.globalmetadata.Resource.verify|verify} messages.
                         * @param message Resource message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: net.ihago.money.api.globalmetadata.IResource, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Resource message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Resource
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): net.ihago.money.api.globalmetadata.Resource;
                    }

                    /** Properties of a Commodity. */
                    interface ICommodity {

                        /** Commodity commodity_id */
                        commodity_id?: (number|null);

                        /** Commodity commodity_type */
                        commodity_type?: (commodity.CommodityType|null);

                        /** Commodity value */
                        value?: (number|null);

                        /** Commodity adj_value */
                        adj_value?: (number|null);

                        /** Commodity name */
                        name?: (string|null);

                        /** Commodity unit_seconds */
                        unit_seconds?: (number|null);

                        /** Commodity languages */
                        languages?: ({ [k: string]: string }|null);

                        /** Commodity description */
                        description?: (string|null);

                        /** Commodity icon */
                        icon?: (net.ihago.money.api.globalmetadata.IResource|null);

                        /** Commodity h5_icon */
                        h5_icon?: (net.ihago.money.api.globalmetadata.IResource|null);

                        /** Commodity create_time */
                        create_time?: (number|null);

                        /** Commodity update_time */
                        update_time?: (number|null);

                        /** Commodity operator */
                        operator?: (string|null);

                        /** Commodity creator */
                        creator?: (string|null);

                        /** Commodity tab_id */
                        tab_id?: (number|null);

                        /** Commodity unit_value */
                        unit_value?: (number|null);

                        /** Commodity resource */
                        resource?: (net.ihago.money.api.globalmetadata.IResource|null);

                        /** Commodity commodity_extend */
                        commodity_extend?: (net.ihago.money.api.globalmetadata.ICommodityExtend|null);

                        /** Commodity version */
                        version?: (number|null);

                        /** Commodity descriptions */
                        descriptions?: ({ [k: string]: string }|null);
                    }

                    /** Represents a Commodity. */
                    class Commodity implements ICommodity {

                        /**
                         * Constructs a new Commodity.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: net.ihago.money.api.globalmetadata.ICommodity);

                        /** Commodity commodity_id. */
                        public commodity_id: number;

                        /** Commodity commodity_type. */
                        public commodity_type: commodity.CommodityType;

                        /** Commodity value. */
                        public value: number;

                        /** Commodity adj_value. */
                        public adj_value: number;

                        /** Commodity name. */
                        public name: string;

                        /** Commodity unit_seconds. */
                        public unit_seconds: number;

                        /** Commodity languages. */
                        public languages: { [k: string]: string };

                        /** Commodity description. */
                        public description: string;

                        /** Commodity icon. */
                        public icon?: (net.ihago.money.api.globalmetadata.IResource|null);

                        /** Commodity h5_icon. */
                        public h5_icon?: (net.ihago.money.api.globalmetadata.IResource|null);

                        /** Commodity create_time. */
                        public create_time: number;

                        /** Commodity update_time. */
                        public update_time: number;

                        /** Commodity operator. */
                        public operator: string;

                        /** Commodity creator. */
                        public creator: string;

                        /** Commodity tab_id. */
                        public tab_id: number;

                        /** Commodity unit_value. */
                        public unit_value: number;

                        /** Commodity resource. */
                        public resource?: (net.ihago.money.api.globalmetadata.IResource|null);

                        /** Commodity commodity_extend. */
                        public commodity_extend?: (net.ihago.money.api.globalmetadata.ICommodityExtend|null);

                        /** Commodity version. */
                        public version: number;

                        /** Commodity descriptions. */
                        public descriptions: { [k: string]: string };

                        /**
                         * Creates a new Commodity instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Commodity instance
                         */
                        public static create(properties?: net.ihago.money.api.globalmetadata.ICommodity): net.ihago.money.api.globalmetadata.Commodity;

                        /**
                         * Encodes the specified Commodity message. Does not implicitly {@link net.ihago.money.api.globalmetadata.Commodity.verify|verify} messages.
                         * @param message Commodity message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: net.ihago.money.api.globalmetadata.ICommodity, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Commodity message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Commodity
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): net.ihago.money.api.globalmetadata.Commodity;
                    }
                }

                /** Namespace metadata. */
                namespace metadata {

                    /** Represents a CommodityApi */
                    class CommodityApi extends $protobuf.rpc.Service {

                        /**
                         * Constructs a new CommodityApi service.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         */
                        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                        /**
                         * Creates new CommodityApi service using the specified rpc implementation.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         * @returns RPC service. Useful where requests and/or responses are streamed.
                         */
                        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): CommodityApi;

                        /**
                         * Calls BatchGetCommodities.
                         * @param request BatchGetCommoditiesReq message or plain object
                         * @param callback Node-style callback called with the error, if any, and BatchGetCommoditiesRes
                         */
                        public batchGetCommodities(request: net.ihago.money.api.metadata.IBatchGetCommoditiesReq, callback: net.ihago.money.api.metadata.CommodityApi.BatchGetCommoditiesCallback): void;

                        /**
                         * Calls BatchGetCommodities.
                         * @param request BatchGetCommoditiesReq message or plain object
                         * @returns Promise
                         */
                        public batchGetCommodities(request: net.ihago.money.api.metadata.IBatchGetCommoditiesReq): Promise<net.ihago.money.api.metadata.BatchGetCommoditiesRes>;

                        /**
                         * Calls GetCommodity.
                         * @param request GetCommodityReq message or plain object
                         * @param callback Node-style callback called with the error, if any, and GetCommodityRes
                         */
                        public getCommodity(request: net.ihago.money.api.metadata.IGetCommodityReq, callback: net.ihago.money.api.metadata.CommodityApi.GetCommodityCallback): void;

                        /**
                         * Calls GetCommodity.
                         * @param request GetCommodityReq message or plain object
                         * @returns Promise
                         */
                        public getCommodity(request: net.ihago.money.api.metadata.IGetCommodityReq): Promise<net.ihago.money.api.metadata.GetCommodityRes>;
                    }

                    namespace CommodityApi {

                        /**
                         * Callback as used by {@link net.ihago.money.api.metadata.CommodityApi#batchGetCommodities}.
                         * @param error Error, if any
                         * @param [response] BatchGetCommoditiesRes
                         */
                        type BatchGetCommoditiesCallback = (error: (Error|null), response?: net.ihago.money.api.metadata.BatchGetCommoditiesRes) => void;

                        /**
                         * Callback as used by {@link net.ihago.money.api.metadata.CommodityApi#getCommodity}.
                         * @param error Error, if any
                         * @param [response] GetCommodityRes
                         */
                        type GetCommodityCallback = (error: (Error|null), response?: net.ihago.money.api.metadata.GetCommodityRes) => void;
                    }

                    /** Properties of a CommoditySpecified. */
                    interface ICommoditySpecified {

                        /** CommoditySpecified commodity_type */
                        commodity_type?: (commodity.CommodityType|null);

                        /** CommoditySpecified commodity_id */
                        commodity_id?: (number|null);

                        /** CommoditySpecified version */
                        version?: (number|null);
                    }

                    /** Represents a CommoditySpecified. */
                    class CommoditySpecified implements ICommoditySpecified {

                        /**
                         * Constructs a new CommoditySpecified.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: net.ihago.money.api.metadata.ICommoditySpecified);

                        /** CommoditySpecified commodity_type. */
                        public commodity_type: commodity.CommodityType;

                        /** CommoditySpecified commodity_id. */
                        public commodity_id: number;

                        /** CommoditySpecified version. */
                        public version: number;

                        /**
                         * Creates a new CommoditySpecified instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CommoditySpecified instance
                         */
                        public static create(properties?: net.ihago.money.api.metadata.ICommoditySpecified): net.ihago.money.api.metadata.CommoditySpecified;

                        /**
                         * Encodes the specified CommoditySpecified message. Does not implicitly {@link net.ihago.money.api.metadata.CommoditySpecified.verify|verify} messages.
                         * @param message CommoditySpecified message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: net.ihago.money.api.metadata.ICommoditySpecified, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CommoditySpecified message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CommoditySpecified
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): net.ihago.money.api.metadata.CommoditySpecified;
                    }

                    /** Properties of a CommodityFilter. */
                    interface ICommodityFilter {

                        /** CommodityFilter language */
                        language?: (string|null);
                    }

                    /** Represents a CommodityFilter. */
                    class CommodityFilter implements ICommodityFilter {

                        /**
                         * Constructs a new CommodityFilter.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: net.ihago.money.api.metadata.ICommodityFilter);

                        /** CommodityFilter language. */
                        public language: string;

                        /**
                         * Creates a new CommodityFilter instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CommodityFilter instance
                         */
                        public static create(properties?: net.ihago.money.api.metadata.ICommodityFilter): net.ihago.money.api.metadata.CommodityFilter;

                        /**
                         * Encodes the specified CommodityFilter message. Does not implicitly {@link net.ihago.money.api.metadata.CommodityFilter.verify|verify} messages.
                         * @param message CommodityFilter message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: net.ihago.money.api.metadata.ICommodityFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CommodityFilter message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CommodityFilter
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): net.ihago.money.api.metadata.CommodityFilter;
                    }

                    /** Properties of a BatchGetCommoditiesReq. */
                    interface IBatchGetCommoditiesReq {

                        /** BatchGetCommoditiesReq commodities */
                        commodities?: (net.ihago.money.api.metadata.ICommoditySpecified[]|null);

                        /** BatchGetCommoditiesReq filter */
                        filter?: (net.ihago.money.api.metadata.ICommodityFilter|null);

                        /** BatchGetCommoditiesReq is_simplify */
                        is_simplify?: (boolean|null);

                        /** BatchGetCommoditiesReq use_extend */
                        use_extend?: (boolean|null);
                    }

                    /** Represents a BatchGetCommoditiesReq. */
                    class BatchGetCommoditiesReq implements IBatchGetCommoditiesReq {

                        /**
                         * Constructs a new BatchGetCommoditiesReq.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: net.ihago.money.api.metadata.IBatchGetCommoditiesReq);

                        /** BatchGetCommoditiesReq commodities. */
                        public commodities: net.ihago.money.api.metadata.ICommoditySpecified[];

                        /** BatchGetCommoditiesReq filter. */
                        public filter?: (net.ihago.money.api.metadata.ICommodityFilter|null);

                        /** BatchGetCommoditiesReq is_simplify. */
                        public is_simplify: boolean;

                        /** BatchGetCommoditiesReq use_extend. */
                        public use_extend: boolean;

                        /**
                         * Creates a new BatchGetCommoditiesReq instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns BatchGetCommoditiesReq instance
                         */
                        public static create(properties?: net.ihago.money.api.metadata.IBatchGetCommoditiesReq): net.ihago.money.api.metadata.BatchGetCommoditiesReq;

                        /**
                         * Encodes the specified BatchGetCommoditiesReq message. Does not implicitly {@link net.ihago.money.api.metadata.BatchGetCommoditiesReq.verify|verify} messages.
                         * @param message BatchGetCommoditiesReq message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: net.ihago.money.api.metadata.IBatchGetCommoditiesReq, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a BatchGetCommoditiesReq message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns BatchGetCommoditiesReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): net.ihago.money.api.metadata.BatchGetCommoditiesReq;
                    }

                    /** Properties of a BatchGetCommoditiesRes. */
                    interface IBatchGetCommoditiesRes {

                        /** BatchGetCommoditiesRes result */
                        result?: (common.IResult|null);

                        /** BatchGetCommoditiesRes commodities */
                        commodities?: (net.ihago.money.api.globalmetadata.ICommodity[]|null);

                        /** BatchGetCommoditiesRes cached_commodities */
                        cached_commodities?: (net.ihago.money.api.metadata.ICommoditySpecified[]|null);
                    }

                    /** Represents a BatchGetCommoditiesRes. */
                    class BatchGetCommoditiesRes implements IBatchGetCommoditiesRes {

                        /**
                         * Constructs a new BatchGetCommoditiesRes.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: net.ihago.money.api.metadata.IBatchGetCommoditiesRes);

                        /** BatchGetCommoditiesRes result. */
                        public result?: (common.IResult|null);

                        /** BatchGetCommoditiesRes commodities. */
                        public commodities: net.ihago.money.api.globalmetadata.ICommodity[];

                        /** BatchGetCommoditiesRes cached_commodities. */
                        public cached_commodities: net.ihago.money.api.metadata.ICommoditySpecified[];

                        /**
                         * Creates a new BatchGetCommoditiesRes instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns BatchGetCommoditiesRes instance
                         */
                        public static create(properties?: net.ihago.money.api.metadata.IBatchGetCommoditiesRes): net.ihago.money.api.metadata.BatchGetCommoditiesRes;

                        /**
                         * Encodes the specified BatchGetCommoditiesRes message. Does not implicitly {@link net.ihago.money.api.metadata.BatchGetCommoditiesRes.verify|verify} messages.
                         * @param message BatchGetCommoditiesRes message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: net.ihago.money.api.metadata.IBatchGetCommoditiesRes, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a BatchGetCommoditiesRes message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns BatchGetCommoditiesRes
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): net.ihago.money.api.metadata.BatchGetCommoditiesRes;
                    }

                    /** Properties of a BatchGetCommoditySimplifyInfoReq. */
                    interface IBatchGetCommoditySimplifyInfoReq {

                        /** BatchGetCommoditySimplifyInfoReq commodities */
                        commodities?: (net.ihago.money.api.metadata.ICommoditySpecified[]|null);

                        /** BatchGetCommoditySimplifyInfoReq filter */
                        filter?: (net.ihago.money.api.metadata.ICommodityFilter|null);

                        /** BatchGetCommoditySimplifyInfoReq use_extend */
                        use_extend?: (boolean|null);
                    }

                    /** Represents a BatchGetCommoditySimplifyInfoReq. */
                    class BatchGetCommoditySimplifyInfoReq implements IBatchGetCommoditySimplifyInfoReq {

                        /**
                         * Constructs a new BatchGetCommoditySimplifyInfoReq.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: net.ihago.money.api.metadata.IBatchGetCommoditySimplifyInfoReq);

                        /** BatchGetCommoditySimplifyInfoReq commodities. */
                        public commodities: net.ihago.money.api.metadata.ICommoditySpecified[];

                        /** BatchGetCommoditySimplifyInfoReq filter. */
                        public filter?: (net.ihago.money.api.metadata.ICommodityFilter|null);

                        /** BatchGetCommoditySimplifyInfoReq use_extend. */
                        public use_extend: boolean;

                        /**
                         * Creates a new BatchGetCommoditySimplifyInfoReq instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns BatchGetCommoditySimplifyInfoReq instance
                         */
                        public static create(properties?: net.ihago.money.api.metadata.IBatchGetCommoditySimplifyInfoReq): net.ihago.money.api.metadata.BatchGetCommoditySimplifyInfoReq;

                        /**
                         * Encodes the specified BatchGetCommoditySimplifyInfoReq message. Does not implicitly {@link net.ihago.money.api.metadata.BatchGetCommoditySimplifyInfoReq.verify|verify} messages.
                         * @param message BatchGetCommoditySimplifyInfoReq message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: net.ihago.money.api.metadata.IBatchGetCommoditySimplifyInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a BatchGetCommoditySimplifyInfoReq message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns BatchGetCommoditySimplifyInfoReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): net.ihago.money.api.metadata.BatchGetCommoditySimplifyInfoReq;
                    }

                    /** Properties of a GetCommodityReq. */
                    interface IGetCommodityReq {

                        /** GetCommodityReq commodity_type */
                        commodity_type?: (commodity.CommodityType|null);

                        /** GetCommodityReq commodity_id */
                        commodity_id?: (number|null);

                        /** GetCommodityReq filter */
                        filter?: (net.ihago.money.api.metadata.ICommodityFilter|null);
                    }

                    /** Represents a GetCommodityReq. */
                    class GetCommodityReq implements IGetCommodityReq {

                        /**
                         * Constructs a new GetCommodityReq.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: net.ihago.money.api.metadata.IGetCommodityReq);

                        /** GetCommodityReq commodity_type. */
                        public commodity_type: commodity.CommodityType;

                        /** GetCommodityReq commodity_id. */
                        public commodity_id: number;

                        /** GetCommodityReq filter. */
                        public filter?: (net.ihago.money.api.metadata.ICommodityFilter|null);

                        /**
                         * Creates a new GetCommodityReq instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetCommodityReq instance
                         */
                        public static create(properties?: net.ihago.money.api.metadata.IGetCommodityReq): net.ihago.money.api.metadata.GetCommodityReq;

                        /**
                         * Encodes the specified GetCommodityReq message. Does not implicitly {@link net.ihago.money.api.metadata.GetCommodityReq.verify|verify} messages.
                         * @param message GetCommodityReq message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: net.ihago.money.api.metadata.IGetCommodityReq, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetCommodityReq message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetCommodityReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): net.ihago.money.api.metadata.GetCommodityReq;
                    }

                    /** Properties of a GetCommodityRes. */
                    interface IGetCommodityRes {

                        /** GetCommodityRes result */
                        result?: (common.IResult|null);

                        /** GetCommodityRes commodity */
                        commodity?: (net.ihago.money.api.globalmetadata.ICommodity|null);
                    }

                    /** Represents a GetCommodityRes. */
                    class GetCommodityRes implements IGetCommodityRes {

                        /**
                         * Constructs a new GetCommodityRes.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: net.ihago.money.api.metadata.IGetCommodityRes);

                        /** GetCommodityRes result. */
                        public result?: (common.IResult|null);

                        /** GetCommodityRes commodity. */
                        public commodity?: (net.ihago.money.api.globalmetadata.ICommodity|null);

                        /**
                         * Creates a new GetCommodityRes instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetCommodityRes instance
                         */
                        public static create(properties?: net.ihago.money.api.metadata.IGetCommodityRes): net.ihago.money.api.metadata.GetCommodityRes;

                        /**
                         * Encodes the specified GetCommodityRes message. Does not implicitly {@link net.ihago.money.api.metadata.GetCommodityRes.verify|verify} messages.
                         * @param message GetCommodityRes message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: net.ihago.money.api.metadata.IGetCommodityRes, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetCommodityRes message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetCommodityRes
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): net.ihago.money.api.metadata.GetCommodityRes;
                    }
                }

                /** Namespace gamepointsmall. */
                namespace gamepointsmall {

                    /** Represents a Gamepointsmall */
                    class Gamepointsmall extends $protobuf.rpc.Service {

                        /**
                         * Constructs a new Gamepointsmall service.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         */
                        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                        /**
                         * Creates new Gamepointsmall service using the specified rpc implementation.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         * @returns RPC service. Useful where requests and/or responses are streamed.
                         */
                        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Gamepointsmall;

                        /**
                         * Calls GetPoints.
                         * @param request GetPointsReq message or plain object
                         * @param callback Node-style callback called with the error, if any, and GetPointsRes
                         */
                        public getPoints(request: net.ihago.money.api.gamepointsmall.IGetPointsReq, callback: net.ihago.money.api.gamepointsmall.Gamepointsmall.GetPointsCallback): void;

                        /**
                         * Calls GetPoints.
                         * @param request GetPointsReq message or plain object
                         * @returns Promise
                         */
                        public getPoints(request: net.ihago.money.api.gamepointsmall.IGetPointsReq): Promise<net.ihago.money.api.gamepointsmall.GetPointsRes>;
                    }

                    namespace Gamepointsmall {

                        /**
                         * Callback as used by {@link net.ihago.money.api.gamepointsmall.Gamepointsmall#getPoints}.
                         * @param error Error, if any
                         * @param [response] GetPointsRes
                         */
                        type GetPointsCallback = (error: (Error|null), response?: net.ihago.money.api.gamepointsmall.GetPointsRes) => void;
                    }

                    /** ECode enum. */
                    enum ECode {
                        OK = 0,
                        SRV_ERR = 1000,
                        PARAM_ERR = 1001,
                        UNAUTHORIZED = 1002,
                        FORBIDDEN = 1003,
                        FREQUENTLY = 1004,
                        INVALID_USER = 1005,
                        NOT_IN_ACT_TIME = 2000,
                        EXCHANGE_NUM_NOT_ENOUGH = 2005
                    }

                    /** Properties of a GetPointsReq. */
                    interface IGetPointsReq {
                    }

                    /** Represents a GetPointsReq. */
                    class GetPointsReq implements IGetPointsReq {

                        /**
                         * Constructs a new GetPointsReq.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: net.ihago.money.api.gamepointsmall.IGetPointsReq);

                        /**
                         * Creates a new GetPointsReq instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetPointsReq instance
                         */
                        public static create(properties?: net.ihago.money.api.gamepointsmall.IGetPointsReq): net.ihago.money.api.gamepointsmall.GetPointsReq;

                        /**
                         * Encodes the specified GetPointsReq message. Does not implicitly {@link net.ihago.money.api.gamepointsmall.GetPointsReq.verify|verify} messages.
                         * @param message GetPointsReq message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: net.ihago.money.api.gamepointsmall.IGetPointsReq, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetPointsReq message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetPointsReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): net.ihago.money.api.gamepointsmall.GetPointsReq;
                    }

                    /** Properties of a GetPointsRes. */
                    interface IGetPointsRes {

                        /** GetPointsRes result */
                        result?: (common.IResult|null);

                        /** GetPointsRes points */
                        points?: (number|null);

                        /** GetPointsRes expire_time */
                        expire_time?: (number|null);

                        /** GetPointsRes is_show */
                        is_show?: (boolean|null);
                    }

                    /** Represents a GetPointsRes. */
                    class GetPointsRes implements IGetPointsRes {

                        /**
                         * Constructs a new GetPointsRes.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: net.ihago.money.api.gamepointsmall.IGetPointsRes);

                        /** GetPointsRes result. */
                        public result?: (common.IResult|null);

                        /** GetPointsRes points. */
                        public points: number;

                        /** GetPointsRes expire_time. */
                        public expire_time: number;

                        /** GetPointsRes is_show. */
                        public is_show: boolean;

                        /**
                         * Creates a new GetPointsRes instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetPointsRes instance
                         */
                        public static create(properties?: net.ihago.money.api.gamepointsmall.IGetPointsRes): net.ihago.money.api.gamepointsmall.GetPointsRes;

                        /**
                         * Encodes the specified GetPointsRes message. Does not implicitly {@link net.ihago.money.api.gamepointsmall.GetPointsRes.verify|verify} messages.
                         * @param message GetPointsRes message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: net.ihago.money.api.gamepointsmall.IGetPointsRes, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetPointsRes message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetPointsRes
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): net.ihago.money.api.gamepointsmall.GetPointsRes;
                    }
                }

                /** Namespace gameuser. */
                namespace gameuser {

                    /** Represents a Gameuser */
                    class Gameuser extends $protobuf.rpc.Service {

                        /**
                         * Constructs a new Gameuser service.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         */
                        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                        /**
                         * Creates new Gameuser service using the specified rpc implementation.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         * @returns RPC service. Useful where requests and/or responses are streamed.
                         */
                        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Gameuser;

                        /**
                         * Calls GetGameInfo.
                         * @param request GetGameInfoReq message or plain object
                         * @param callback Node-style callback called with the error, if any, and GetGameInfoRes
                         */
                        public getGameInfo(request: net.ihago.money.api.gameuser.IGetGameInfoReq, callback: net.ihago.money.api.gameuser.Gameuser.GetGameInfoCallback): void;

                        /**
                         * Calls GetGameInfo.
                         * @param request GetGameInfoReq message or plain object
                         * @returns Promise
                         */
                        public getGameInfo(request: net.ihago.money.api.gameuser.IGetGameInfoReq): Promise<net.ihago.money.api.gameuser.GetGameInfoRes>;

                        /**
                         * Calls GetGameBanner.
                         * @param request GetGameBannerReq message or plain object
                         * @param callback Node-style callback called with the error, if any, and GetGameBannerRes
                         */
                        public getGameBanner(request: net.ihago.money.api.gameuser.IGetGameBannerReq, callback: net.ihago.money.api.gameuser.Gameuser.GetGameBannerCallback): void;

                        /**
                         * Calls GetGameBanner.
                         * @param request GetGameBannerReq message or plain object
                         * @returns Promise
                         */
                        public getGameBanner(request: net.ihago.money.api.gameuser.IGetGameBannerReq): Promise<net.ihago.money.api.gameuser.GetGameBannerRes>;

                        /**
                         * Calls IsGameUser.
                         * @param request IsGameUserReq message or plain object
                         * @param callback Node-style callback called with the error, if any, and IsGameUserRes
                         */
                        public isGameUser(request: net.ihago.money.api.gameuser.IIsGameUserReq, callback: net.ihago.money.api.gameuser.Gameuser.IsGameUserCallback): void;

                        /**
                         * Calls IsGameUser.
                         * @param request IsGameUserReq message or plain object
                         * @returns Promise
                         */
                        public isGameUser(request: net.ihago.money.api.gameuser.IIsGameUserReq): Promise<net.ihago.money.api.gameuser.IsGameUserRes>;
                    }

                    namespace Gameuser {

                        /**
                         * Callback as used by {@link net.ihago.money.api.gameuser.Gameuser#getGameInfo}.
                         * @param error Error, if any
                         * @param [response] GetGameInfoRes
                         */
                        type GetGameInfoCallback = (error: (Error|null), response?: net.ihago.money.api.gameuser.GetGameInfoRes) => void;

                        /**
                         * Callback as used by {@link net.ihago.money.api.gameuser.Gameuser#getGameBanner}.
                         * @param error Error, if any
                         * @param [response] GetGameBannerRes
                         */
                        type GetGameBannerCallback = (error: (Error|null), response?: net.ihago.money.api.gameuser.GetGameBannerRes) => void;

                        /**
                         * Callback as used by {@link net.ihago.money.api.gameuser.Gameuser#isGameUser}.
                         * @param error Error, if any
                         * @param [response] IsGameUserRes
                         */
                        type IsGameUserCallback = (error: (Error|null), response?: net.ihago.money.api.gameuser.IsGameUserRes) => void;
                    }

                    /** GameuserUri enum. */
                    enum GameuserUri {
                        kUriNone = 0,
                        kUriToast = 1,
                        kUriPlayStart = 2,
                        kUriPlayEnd = 3
                    }

                    /** Properties of a GameuserNotify. */
                    interface IGameuserNotify {

                        /** GameuserNotify header */
                        header?: (common.IHeader|null);

                        /** GameuserNotify uri */
                        uri?: (number|null);

                        /** GameuserNotify toast_msg */
                        toast_msg?: (net.ihago.money.api.gameuser.IToastMsg|null);

                        /** GameuserNotify play_start_msg */
                        play_start_msg?: (net.ihago.money.api.gameuser.IPlayStartMsg|null);

                        /** GameuserNotify play_end_msg */
                        play_end_msg?: (net.ihago.money.api.gameuser.IPlayEndMsg|null);
                    }

                    /** Represents a GameuserNotify. */
                    class GameuserNotify implements IGameuserNotify {

                        /**
                         * Constructs a new GameuserNotify.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: net.ihago.money.api.gameuser.IGameuserNotify);

                        /** GameuserNotify header. */
                        public header?: (common.IHeader|null);

                        /** GameuserNotify uri. */
                        public uri: number;

                        /** GameuserNotify toast_msg. */
                        public toast_msg?: (net.ihago.money.api.gameuser.IToastMsg|null);

                        /** GameuserNotify play_start_msg. */
                        public play_start_msg?: (net.ihago.money.api.gameuser.IPlayStartMsg|null);

                        /** GameuserNotify play_end_msg. */
                        public play_end_msg?: (net.ihago.money.api.gameuser.IPlayEndMsg|null);

                        /**
                         * Creates a new GameuserNotify instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GameuserNotify instance
                         */
                        public static create(properties?: net.ihago.money.api.gameuser.IGameuserNotify): net.ihago.money.api.gameuser.GameuserNotify;

                        /**
                         * Encodes the specified GameuserNotify message. Does not implicitly {@link net.ihago.money.api.gameuser.GameuserNotify.verify|verify} messages.
                         * @param message GameuserNotify message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: net.ihago.money.api.gameuser.IGameuserNotify, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GameuserNotify message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GameuserNotify
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): net.ihago.money.api.gameuser.GameuserNotify;
                    }

                    /** Properties of a ToastMsg. */
                    interface IToastMsg {

                        /** ToastMsg left_icon */
                        left_icon?: (string|null);

                        /** ToastMsg msg */
                        msg?: (string|null);
                    }

                    /** Represents a ToastMsg. */
                    class ToastMsg implements IToastMsg {

                        /**
                         * Constructs a new ToastMsg.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: net.ihago.money.api.gameuser.IToastMsg);

                        /** ToastMsg left_icon. */
                        public left_icon: string;

                        /** ToastMsg msg. */
                        public msg: string;

                        /**
                         * Creates a new ToastMsg instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ToastMsg instance
                         */
                        public static create(properties?: net.ihago.money.api.gameuser.IToastMsg): net.ihago.money.api.gameuser.ToastMsg;

                        /**
                         * Encodes the specified ToastMsg message. Does not implicitly {@link net.ihago.money.api.gameuser.ToastMsg.verify|verify} messages.
                         * @param message ToastMsg message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: net.ihago.money.api.gameuser.IToastMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ToastMsg message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ToastMsg
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): net.ihago.money.api.gameuser.ToastMsg;
                    }

                    /** Properties of a PlayStartMsg. */
                    interface IPlayStartMsg {
                    }

                    /** Represents a PlayStartMsg. */
                    class PlayStartMsg implements IPlayStartMsg {

                        /**
                         * Constructs a new PlayStartMsg.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: net.ihago.money.api.gameuser.IPlayStartMsg);

                        /**
                         * Creates a new PlayStartMsg instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PlayStartMsg instance
                         */
                        public static create(properties?: net.ihago.money.api.gameuser.IPlayStartMsg): net.ihago.money.api.gameuser.PlayStartMsg;

                        /**
                         * Encodes the specified PlayStartMsg message. Does not implicitly {@link net.ihago.money.api.gameuser.PlayStartMsg.verify|verify} messages.
                         * @param message PlayStartMsg message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: net.ihago.money.api.gameuser.IPlayStartMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PlayStartMsg message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PlayStartMsg
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): net.ihago.money.api.gameuser.PlayStartMsg;
                    }

                    /** Properties of a PlayEndMsg. */
                    interface IPlayEndMsg {
                    }

                    /** Represents a PlayEndMsg. */
                    class PlayEndMsg implements IPlayEndMsg {

                        /**
                         * Constructs a new PlayEndMsg.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: net.ihago.money.api.gameuser.IPlayEndMsg);

                        /**
                         * Creates a new PlayEndMsg instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PlayEndMsg instance
                         */
                        public static create(properties?: net.ihago.money.api.gameuser.IPlayEndMsg): net.ihago.money.api.gameuser.PlayEndMsg;

                        /**
                         * Encodes the specified PlayEndMsg message. Does not implicitly {@link net.ihago.money.api.gameuser.PlayEndMsg.verify|verify} messages.
                         * @param message PlayEndMsg message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: net.ihago.money.api.gameuser.IPlayEndMsg, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PlayEndMsg message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PlayEndMsg
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): net.ihago.money.api.gameuser.PlayEndMsg;
                    }

                    /** Properties of a GetGameInfoReq. */
                    interface IGetGameInfoReq {

                        /** GetGameInfoReq game_id */
                        game_id?: (string[]|null);
                    }

                    /** Represents a GetGameInfoReq. */
                    class GetGameInfoReq implements IGetGameInfoReq {

                        /**
                         * Constructs a new GetGameInfoReq.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: net.ihago.money.api.gameuser.IGetGameInfoReq);

                        /** GetGameInfoReq game_id. */
                        public game_id: string[];

                        /**
                         * Creates a new GetGameInfoReq instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetGameInfoReq instance
                         */
                        public static create(properties?: net.ihago.money.api.gameuser.IGetGameInfoReq): net.ihago.money.api.gameuser.GetGameInfoReq;

                        /**
                         * Encodes the specified GetGameInfoReq message. Does not implicitly {@link net.ihago.money.api.gameuser.GetGameInfoReq.verify|verify} messages.
                         * @param message GetGameInfoReq message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: net.ihago.money.api.gameuser.IGetGameInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetGameInfoReq message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetGameInfoReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): net.ihago.money.api.gameuser.GetGameInfoReq;
                    }

                    /** Properties of a GetGameInfoRes. */
                    interface IGetGameInfoRes {

                        /** GetGameInfoRes result */
                        result?: (common.IResult|null);

                        /** GetGameInfoRes game_label */
                        game_label?: ({ [k: string]: string }|null);
                    }

                    /** Represents a GetGameInfoRes. */
                    class GetGameInfoRes implements IGetGameInfoRes {

                        /**
                         * Constructs a new GetGameInfoRes.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: net.ihago.money.api.gameuser.IGetGameInfoRes);

                        /** GetGameInfoRes result. */
                        public result?: (common.IResult|null);

                        /** GetGameInfoRes game_label. */
                        public game_label: { [k: string]: string };

                        /**
                         * Creates a new GetGameInfoRes instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetGameInfoRes instance
                         */
                        public static create(properties?: net.ihago.money.api.gameuser.IGetGameInfoRes): net.ihago.money.api.gameuser.GetGameInfoRes;

                        /**
                         * Encodes the specified GetGameInfoRes message. Does not implicitly {@link net.ihago.money.api.gameuser.GetGameInfoRes.verify|verify} messages.
                         * @param message GetGameInfoRes message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: net.ihago.money.api.gameuser.IGetGameInfoRes, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetGameInfoRes message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetGameInfoRes
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): net.ihago.money.api.gameuser.GetGameInfoRes;
                    }

                    /** Properties of an IsGameUserReq. */
                    interface IIsGameUserReq {

                        /** IsGameUserReq uid */
                        uid?: (number|null);

                        /** IsGameUserReq is_logingame */
                        is_logingame?: (boolean|null);
                    }

                    /** Represents an IsGameUserReq. */
                    class IsGameUserReq implements IIsGameUserReq {

                        /**
                         * Constructs a new IsGameUserReq.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: net.ihago.money.api.gameuser.IIsGameUserReq);

                        /** IsGameUserReq uid. */
                        public uid: number;

                        /** IsGameUserReq is_logingame. */
                        public is_logingame: boolean;

                        /**
                         * Creates a new IsGameUserReq instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns IsGameUserReq instance
                         */
                        public static create(properties?: net.ihago.money.api.gameuser.IIsGameUserReq): net.ihago.money.api.gameuser.IsGameUserReq;

                        /**
                         * Encodes the specified IsGameUserReq message. Does not implicitly {@link net.ihago.money.api.gameuser.IsGameUserReq.verify|verify} messages.
                         * @param message IsGameUserReq message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: net.ihago.money.api.gameuser.IIsGameUserReq, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an IsGameUserReq message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns IsGameUserReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): net.ihago.money.api.gameuser.IsGameUserReq;
                    }

                    /** Properties of an IsGameUserRes. */
                    interface IIsGameUserRes {

                        /** IsGameUserRes result */
                        result?: (common.IResult|null);

                        /** IsGameUserRes is_gameuser */
                        is_gameuser?: (boolean|null);
                    }

                    /** Represents an IsGameUserRes. */
                    class IsGameUserRes implements IIsGameUserRes {

                        /**
                         * Constructs a new IsGameUserRes.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: net.ihago.money.api.gameuser.IIsGameUserRes);

                        /** IsGameUserRes result. */
                        public result?: (common.IResult|null);

                        /** IsGameUserRes is_gameuser. */
                        public is_gameuser: boolean;

                        /**
                         * Creates a new IsGameUserRes instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns IsGameUserRes instance
                         */
                        public static create(properties?: net.ihago.money.api.gameuser.IIsGameUserRes): net.ihago.money.api.gameuser.IsGameUserRes;

                        /**
                         * Encodes the specified IsGameUserRes message. Does not implicitly {@link net.ihago.money.api.gameuser.IsGameUserRes.verify|verify} messages.
                         * @param message IsGameUserRes message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: net.ihago.money.api.gameuser.IIsGameUserRes, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an IsGameUserRes message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns IsGameUserRes
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): net.ihago.money.api.gameuser.IsGameUserRes;
                    }

                    /** Properties of a GetGameBannerReq. */
                    interface IGetGameBannerReq {
                    }

                    /** Represents a GetGameBannerReq. */
                    class GetGameBannerReq implements IGetGameBannerReq {

                        /**
                         * Constructs a new GetGameBannerReq.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: net.ihago.money.api.gameuser.IGetGameBannerReq);

                        /**
                         * Creates a new GetGameBannerReq instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetGameBannerReq instance
                         */
                        public static create(properties?: net.ihago.money.api.gameuser.IGetGameBannerReq): net.ihago.money.api.gameuser.GetGameBannerReq;

                        /**
                         * Encodes the specified GetGameBannerReq message. Does not implicitly {@link net.ihago.money.api.gameuser.GetGameBannerReq.verify|verify} messages.
                         * @param message GetGameBannerReq message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: net.ihago.money.api.gameuser.IGetGameBannerReq, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetGameBannerReq message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetGameBannerReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): net.ihago.money.api.gameuser.GetGameBannerReq;
                    }

                    /** Properties of a GetGameBannerRes. */
                    interface IGetGameBannerRes {

                        /** GetGameBannerRes result */
                        result?: (common.IResult|null);

                        /** GetGameBannerRes game_banner */
                        game_banner?: (net.ihago.money.api.gameuser.IGameBanner|null);
                    }

                    /** Represents a GetGameBannerRes. */
                    class GetGameBannerRes implements IGetGameBannerRes {

                        /**
                         * Constructs a new GetGameBannerRes.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: net.ihago.money.api.gameuser.IGetGameBannerRes);

                        /** GetGameBannerRes result. */
                        public result?: (common.IResult|null);

                        /** GetGameBannerRes game_banner. */
                        public game_banner?: (net.ihago.money.api.gameuser.IGameBanner|null);

                        /**
                         * Creates a new GetGameBannerRes instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetGameBannerRes instance
                         */
                        public static create(properties?: net.ihago.money.api.gameuser.IGetGameBannerRes): net.ihago.money.api.gameuser.GetGameBannerRes;

                        /**
                         * Encodes the specified GetGameBannerRes message. Does not implicitly {@link net.ihago.money.api.gameuser.GetGameBannerRes.verify|verify} messages.
                         * @param message GetGameBannerRes message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: net.ihago.money.api.gameuser.IGetGameBannerRes, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetGameBannerRes message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetGameBannerRes
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): net.ihago.money.api.gameuser.GetGameBannerRes;
                    }

                    /** TaskStage enum. */
                    enum TaskStage {
                        kStageNone = 0,
                        kStageTryPlay = 1,
                        kStageMonthTask = 2,
                        kStagePlayEnd = 3
                    }

                    /** Properties of a GameBanner. */
                    interface IGameBanner {

                        /** GameBanner stage */
                        stage?: (number|null);

                        /** GameBanner count_down */
                        count_down?: (number|null);

                        /** GameBanner cur */
                        cur?: (number|null);

                        /** GameBanner target */
                        target?: (number|null);

                        /** GameBanner is_flush */
                        is_flush?: (boolean|null);
                    }

                    /** Represents a GameBanner. */
                    class GameBanner implements IGameBanner {

                        /**
                         * Constructs a new GameBanner.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: net.ihago.money.api.gameuser.IGameBanner);

                        /** GameBanner stage. */
                        public stage: number;

                        /** GameBanner count_down. */
                        public count_down: number;

                        /** GameBanner cur. */
                        public cur: number;

                        /** GameBanner target. */
                        public target: number;

                        /** GameBanner is_flush. */
                        public is_flush: boolean;

                        /**
                         * Creates a new GameBanner instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GameBanner instance
                         */
                        public static create(properties?: net.ihago.money.api.gameuser.IGameBanner): net.ihago.money.api.gameuser.GameBanner;

                        /**
                         * Encodes the specified GameBanner message. Does not implicitly {@link net.ihago.money.api.gameuser.GameBanner.verify|verify} messages.
                         * @param message GameBanner message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: net.ihago.money.api.gameuser.IGameBanner, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GameBanner message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GameBanner
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): net.ihago.money.api.gameuser.GameBanner;
                    }
                }
            }
        }

        /** Namespace game. */
        namespace game {

            /** Namespace api. */
            namespace api {

                /** Namespace notify. */
                namespace notify {

                    /** Represents a GameNotify */
                    class GameNotify extends $protobuf.rpc.Service {

                        /**
                         * Constructs a new GameNotify service.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         */
                        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                        /**
                         * Creates new GameNotify service using the specified rpc implementation.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         * @returns RPC service. Useful where requests and/or responses are streamed.
                         */
                        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): GameNotify;

                        /**
                         * Calls GetGrandPrizeBanner.
                         * @param request GetGrandPrizeBannerReq message or plain object
                         * @param callback Node-style callback called with the error, if any, and GetGrandPrizeBannerRes
                         */
                        public getGrandPrizeBanner(request: net.ihago.game.api.notify.IGetGrandPrizeBannerReq, callback: net.ihago.game.api.notify.GameNotify.GetGrandPrizeBannerCallback): void;

                        /**
                         * Calls GetGrandPrizeBanner.
                         * @param request GetGrandPrizeBannerReq message or plain object
                         * @returns Promise
                         */
                        public getGrandPrizeBanner(request: net.ihago.game.api.notify.IGetGrandPrizeBannerReq): Promise<net.ihago.game.api.notify.GetGrandPrizeBannerRes>;

                        /**
                         * Calls Like.
                         * @param request LikeReq message or plain object
                         * @param callback Node-style callback called with the error, if any, and LikeRes
                         */
                        public like(request: net.ihago.game.api.notify.ILikeReq, callback: net.ihago.game.api.notify.GameNotify.LikeCallback): void;

                        /**
                         * Calls Like.
                         * @param request LikeReq message or plain object
                         * @returns Promise
                         */
                        public like(request: net.ihago.game.api.notify.ILikeReq): Promise<net.ihago.game.api.notify.LikeRes>;
                    }

                    namespace GameNotify {

                        /**
                         * Callback as used by {@link net.ihago.game.api.notify.GameNotify#getGrandPrizeBanner}.
                         * @param error Error, if any
                         * @param [response] GetGrandPrizeBannerRes
                         */
                        type GetGrandPrizeBannerCallback = (error: (Error|null), response?: net.ihago.game.api.notify.GetGrandPrizeBannerRes) => void;

                        /**
                         * Callback as used by {@link net.ihago.game.api.notify.GameNotify#like}.
                         * @param error Error, if any
                         * @param [response] LikeRes
                         */
                        type LikeCallback = (error: (Error|null), response?: net.ihago.game.api.notify.LikeRes) => void;
                    }

                    /** ERetCode enum. */
                    enum ERetCode {
                        RET_NONE = 0,
                        ERC_NotInRoom = 10000
                    }

                    /** Properties of a GetGrandPrizeBannerReq. */
                    interface IGetGrandPrizeBannerReq {

                        /** GetGrandPrizeBannerReq game_id */
                        game_id?: (string|null);

                        /** GetGrandPrizeBannerReq user_id */
                        user_id?: (number|null);
                    }

                    /** Represents a GetGrandPrizeBannerReq. */
                    class GetGrandPrizeBannerReq implements IGetGrandPrizeBannerReq {

                        /**
                         * Constructs a new GetGrandPrizeBannerReq.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: net.ihago.game.api.notify.IGetGrandPrizeBannerReq);

                        /** GetGrandPrizeBannerReq game_id. */
                        public game_id: string;

                        /** GetGrandPrizeBannerReq user_id. */
                        public user_id: number;

                        /**
                         * Creates a new GetGrandPrizeBannerReq instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetGrandPrizeBannerReq instance
                         */
                        public static create(properties?: net.ihago.game.api.notify.IGetGrandPrizeBannerReq): net.ihago.game.api.notify.GetGrandPrizeBannerReq;

                        /**
                         * Encodes the specified GetGrandPrizeBannerReq message. Does not implicitly {@link net.ihago.game.api.notify.GetGrandPrizeBannerReq.verify|verify} messages.
                         * @param message GetGrandPrizeBannerReq message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: net.ihago.game.api.notify.IGetGrandPrizeBannerReq, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetGrandPrizeBannerReq message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetGrandPrizeBannerReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): net.ihago.game.api.notify.GetGrandPrizeBannerReq;
                    }

                    /** Properties of a GrandPrizeBanner. */
                    interface IGrandPrizeBanner {

                        /** GrandPrizeBanner user_img */
                        user_img?: (string|null);

                        /** GrandPrizeBanner user_name */
                        user_name?: (string|null);

                        /** GrandPrizeBanner reward_prize */
                        reward_prize?: (number|null);

                        /** GrandPrizeBanner banner_id */
                        banner_id?: (string|null);

                        /** GrandPrizeBanner like_count */
                        like_count?: (number|null);

                        /** GrandPrizeBanner liked */
                        liked?: (boolean|null);

                        /** GrandPrizeBanner my_like_count */
                        my_like_count?: (number|null);

                        /** GrandPrizeBanner user_like_limit */
                        user_like_limit?: (number|null);
                    }

                    /** Represents a GrandPrizeBanner. */
                    class GrandPrizeBanner implements IGrandPrizeBanner {

                        /**
                         * Constructs a new GrandPrizeBanner.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: net.ihago.game.api.notify.IGrandPrizeBanner);

                        /** GrandPrizeBanner user_img. */
                        public user_img: string;

                        /** GrandPrizeBanner user_name. */
                        public user_name: string;

                        /** GrandPrizeBanner reward_prize. */
                        public reward_prize: number;

                        /** GrandPrizeBanner banner_id. */
                        public banner_id: string;

                        /** GrandPrizeBanner like_count. */
                        public like_count: number;

                        /** GrandPrizeBanner liked. */
                        public liked: boolean;

                        /** GrandPrizeBanner my_like_count. */
                        public my_like_count: number;

                        /** GrandPrizeBanner user_like_limit. */
                        public user_like_limit: number;

                        /**
                         * Creates a new GrandPrizeBanner instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GrandPrizeBanner instance
                         */
                        public static create(properties?: net.ihago.game.api.notify.IGrandPrizeBanner): net.ihago.game.api.notify.GrandPrizeBanner;

                        /**
                         * Encodes the specified GrandPrizeBanner message. Does not implicitly {@link net.ihago.game.api.notify.GrandPrizeBanner.verify|verify} messages.
                         * @param message GrandPrizeBanner message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: net.ihago.game.api.notify.IGrandPrizeBanner, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GrandPrizeBanner message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GrandPrizeBanner
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): net.ihago.game.api.notify.GrandPrizeBanner;
                    }

                    /** Properties of a GetGrandPrizeBannerRes. */
                    interface IGetGrandPrizeBannerRes {

                        /** GetGrandPrizeBannerRes result */
                        result?: (common.IResult|null);

                        /** GetGrandPrizeBannerRes game_id */
                        game_id?: (string|null);

                        /** GetGrandPrizeBannerRes grand_prize_banner */
                        grand_prize_banner?: (net.ihago.game.api.notify.IGrandPrizeBanner|null);

                        /** GetGrandPrizeBannerRes next_refresh_time */
                        next_refresh_time?: (number|null);
                    }

                    /** Represents a GetGrandPrizeBannerRes. */
                    class GetGrandPrizeBannerRes implements IGetGrandPrizeBannerRes {

                        /**
                         * Constructs a new GetGrandPrizeBannerRes.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: net.ihago.game.api.notify.IGetGrandPrizeBannerRes);

                        /** GetGrandPrizeBannerRes result. */
                        public result?: (common.IResult|null);

                        /** GetGrandPrizeBannerRes game_id. */
                        public game_id: string;

                        /** GetGrandPrizeBannerRes grand_prize_banner. */
                        public grand_prize_banner?: (net.ihago.game.api.notify.IGrandPrizeBanner|null);

                        /** GetGrandPrizeBannerRes next_refresh_time. */
                        public next_refresh_time: number;

                        /**
                         * Creates a new GetGrandPrizeBannerRes instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetGrandPrizeBannerRes instance
                         */
                        public static create(properties?: net.ihago.game.api.notify.IGetGrandPrizeBannerRes): net.ihago.game.api.notify.GetGrandPrizeBannerRes;

                        /**
                         * Encodes the specified GetGrandPrizeBannerRes message. Does not implicitly {@link net.ihago.game.api.notify.GetGrandPrizeBannerRes.verify|verify} messages.
                         * @param message GetGrandPrizeBannerRes message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: net.ihago.game.api.notify.IGetGrandPrizeBannerRes, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetGrandPrizeBannerRes message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetGrandPrizeBannerRes
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): net.ihago.game.api.notify.GetGrandPrizeBannerRes;
                    }

                    /** Properties of a LikeReq. */
                    interface ILikeReq {

                        /** LikeReq user_id */
                        user_id?: (number|null);

                        /** LikeReq game_id */
                        game_id?: (string|null);

                        /** LikeReq banner_id */
                        banner_id?: (string|null);

                        /** LikeReq cid */
                        cid?: (string|null);

                        /** LikeReq game_ver */
                        game_ver?: (string|null);
                    }

                    /** Represents a LikeReq. */
                    class LikeReq implements ILikeReq {

                        /**
                         * Constructs a new LikeReq.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: net.ihago.game.api.notify.ILikeReq);

                        /** LikeReq user_id. */
                        public user_id: number;

                        /** LikeReq game_id. */
                        public game_id: string;

                        /** LikeReq banner_id. */
                        public banner_id: string;

                        /** LikeReq cid. */
                        public cid: string;

                        /** LikeReq game_ver. */
                        public game_ver: string;

                        /**
                         * Creates a new LikeReq instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns LikeReq instance
                         */
                        public static create(properties?: net.ihago.game.api.notify.ILikeReq): net.ihago.game.api.notify.LikeReq;

                        /**
                         * Encodes the specified LikeReq message. Does not implicitly {@link net.ihago.game.api.notify.LikeReq.verify|verify} messages.
                         * @param message LikeReq message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: net.ihago.game.api.notify.ILikeReq, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a LikeReq message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns LikeReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): net.ihago.game.api.notify.LikeReq;
                    }

                    /** Properties of a LikeRes. */
                    interface ILikeRes {

                        /** LikeRes result */
                        result?: (common.IResult|null);

                        /** LikeRes banner_id */
                        banner_id?: (string|null);

                        /** LikeRes like_count */
                        like_count?: (number|null);

                        /** LikeRes my_like_count */
                        my_like_count?: (number|null);

                        /** LikeRes user_like_limit */
                        user_like_limit?: (number|null);

                        /** LikeRes reward */
                        reward?: (commodity.ICommodityReward|null);

                        /** LikeRes rewarded_cnt */
                        rewarded_cnt?: (number|null);
                    }

                    /** Represents a LikeRes. */
                    class LikeRes implements ILikeRes {

                        /**
                         * Constructs a new LikeRes.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: net.ihago.game.api.notify.ILikeRes);

                        /** LikeRes result. */
                        public result?: (common.IResult|null);

                        /** LikeRes banner_id. */
                        public banner_id: string;

                        /** LikeRes like_count. */
                        public like_count: number;

                        /** LikeRes my_like_count. */
                        public my_like_count: number;

                        /** LikeRes user_like_limit. */
                        public user_like_limit: number;

                        /** LikeRes reward. */
                        public reward?: (commodity.ICommodityReward|null);

                        /** LikeRes rewarded_cnt. */
                        public rewarded_cnt: number;

                        /**
                         * Creates a new LikeRes instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns LikeRes instance
                         */
                        public static create(properties?: net.ihago.game.api.notify.ILikeRes): net.ihago.game.api.notify.LikeRes;

                        /**
                         * Encodes the specified LikeRes message. Does not implicitly {@link net.ihago.game.api.notify.LikeRes.verify|verify} messages.
                         * @param message LikeRes message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: net.ihago.game.api.notify.ILikeRes, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a LikeRes message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns LikeRes
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): net.ihago.game.api.notify.LikeRes;
                    }
                }
            }
        }

        /** Namespace ymicro. */
        namespace ymicro {

            /** Namespace api. */
            namespace api {

                /** Namespace revenue. */
                namespace revenue {

                    /** Represents a Turnover */
                    class Turnover extends $protobuf.rpc.Service {

                        /**
                         * Constructs a new Turnover service.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         */
                        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                        /**
                         * Creates new Turnover service using the specified rpc implementation.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         * @returns RPC service. Useful where requests and/or responses are streamed.
                         */
                        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Turnover;

                        /**
                         * Calls QueryCouponSummary.
                         * @param request QueryCouponSummaryReq message or plain object
                         * @param callback Node-style callback called with the error, if any, and QueryCouponSummaryRes
                         */
                        public queryCouponSummary(request: net.ihago.ymicro.api.revenue.IQueryCouponSummaryReq, callback: net.ihago.ymicro.api.revenue.Turnover.QueryCouponSummaryCallback): void;

                        /**
                         * Calls QueryCouponSummary.
                         * @param request QueryCouponSummaryReq message or plain object
                         * @returns Promise
                         */
                        public queryCouponSummary(request: net.ihago.ymicro.api.revenue.IQueryCouponSummaryReq): Promise<net.ihago.ymicro.api.revenue.QueryCouponSummaryRes>;

                        /**
                         * Calls ReadMessage.
                         * @param request ReadMessageReq message or plain object
                         * @param callback Node-style callback called with the error, if any, and ReadMessageRes
                         */
                        public readMessage(request: net.ihago.ymicro.api.revenue.IReadMessageReq, callback: net.ihago.ymicro.api.revenue.Turnover.ReadMessageCallback): void;

                        /**
                         * Calls ReadMessage.
                         * @param request ReadMessageReq message or plain object
                         * @returns Promise
                         */
                        public readMessage(request: net.ihago.ymicro.api.revenue.IReadMessageReq): Promise<net.ihago.ymicro.api.revenue.ReadMessageRes>;
                    }

                    namespace Turnover {

                        /**
                         * Callback as used by {@link net.ihago.ymicro.api.revenue.Turnover#queryCouponSummary}.
                         * @param error Error, if any
                         * @param [response] QueryCouponSummaryRes
                         */
                        type QueryCouponSummaryCallback = (error: (Error|null), response?: net.ihago.ymicro.api.revenue.QueryCouponSummaryRes) => void;

                        /**
                         * Callback as used by {@link net.ihago.ymicro.api.revenue.Turnover#readMessage}.
                         * @param error Error, if any
                         * @param [response] ReadMessageRes
                         */
                        type ReadMessageCallback = (error: (Error|null), response?: net.ihago.ymicro.api.revenue.ReadMessageRes) => void;
                    }

                    /** RetCode enum. */
                    enum RetCode {
                        kRetCodeOk = 0,
                        kTokenUidNotExist = 1001,
                        kParamError = 1002,
                        kParamSnameError = 1003,
                        kParamSeqIdError = 1004,
                        kBatchGetOverLimit = 1005,
                        kServerDenied = 1006,
                        kMySqlExecError = 2001,
                        kRedisError = 2002,
                        kMoneyTurnOverError = 3000,
                        kInvokingThriftError = 3001,
                        kAddPropsActivityLimit = 3002,
                        kAddPropsActivityRepeated = 3003,
                        kAddPropsConcurrentUpdateErr = 3004,
                        kIssueCurrencyNewExpire = 3010,
                        kIssueCurrencyNewTotalLimit = 3011,
                        kIssueCurrencyNewUserLimit = 3012,
                        kIssueCurrencyRepeated = 3013,
                        kIssueCurrencyConcurrentUpdateErr = 3014,
                        KIssueInnerAccount = 3015,
                        kIssueCouponLimit = 3020,
                        kIssueCouponRepeated = 3021,
                        kPayProductParamError = 3030,
                        kPayProductLimit = 3031,
                        kPayProductOrderError = 3032,
                        kPayProductOrderFaild = 3033,
                        kPayProductWaitePay = 3034,
                        kPayProductOrderRepeat = 3035,
                        kPayProductOrderClose = 3036,
                        kPayProductBalanceNoEnough = 3037,
                        kPayProductOrderException = 3038,
                        kPayProductFreeze = 3039,
                        kPayProductGoldToDiamondRateNotMatch = 3040,
                        kPayProductOrderAlreadyDeduct = 3041,
                        kConsumePayNotBuy = 3200,
                        kConsumePayNotDiamond = 3201,
                        kConsumePayParamErr = 3202,
                        kConsumePayRepeated = 3203,
                        kConsumePayServerErr = 3204,
                        kConsumePayConcurrentErr = 3205,
                        kConsumePayFreeze = 3206,
                        kBatchConsumeAccountNotExist = 3250,
                        KBatchConsumeConcurrentErr = 3251,
                        kBatchConsumeFrozenAccount = 3252,
                        kBatchConsumeNotEnough = 3253,
                        kBatchConsumeParamErr = 3254,
                        kBatchConsumeSeqRepeat = 3255,
                        kBatchConsumeServerErr = 3256,
                        kOverIssuedCurrencyAndProps = 3300,
                        kExchangePropLimited = 3400,
                        kExchangePropConfigError = 3401,
                        kExchangePropNotEnough = 3402,
                        kExchangePropSeqRepeated = 3403,
                        kExchangePropParamErr = 3404,
                        kExchangePropServerErr = 3405,
                        kExchangePropNotExists = 3406,
                        kRiskSnameError = 4000,
                        kRiskActivityIdError = 4001,
                        kRiskUIDError = 4002,
                        kRiskSnameActivityIdUIDError = 4003,
                        kRiskSignError = 4004
                    }

                    /** Properties of a QueryCouponSummaryReq. */
                    interface IQueryCouponSummaryReq {

                        /** QueryCouponSummaryReq commodity_type */
                        commodity_type?: (number|null);

                        /** QueryCouponSummaryReq need_msg_id */
                        need_msg_id?: (boolean|null);

                        /** QueryCouponSummaryReq game_id */
                        game_id?: (string|null);

                        /** QueryCouponSummaryReq lang */
                        lang?: (string|null);
                    }

                    /** Represents a QueryCouponSummaryReq. */
                    class QueryCouponSummaryReq implements IQueryCouponSummaryReq {

                        /**
                         * Constructs a new QueryCouponSummaryReq.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: net.ihago.ymicro.api.revenue.IQueryCouponSummaryReq);

                        /** QueryCouponSummaryReq commodity_type. */
                        public commodity_type: number;

                        /** QueryCouponSummaryReq need_msg_id. */
                        public need_msg_id: boolean;

                        /** QueryCouponSummaryReq game_id. */
                        public game_id: string;

                        /** QueryCouponSummaryReq lang. */
                        public lang: string;

                        /**
                         * Creates a new QueryCouponSummaryReq instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns QueryCouponSummaryReq instance
                         */
                        public static create(properties?: net.ihago.ymicro.api.revenue.IQueryCouponSummaryReq): net.ihago.ymicro.api.revenue.QueryCouponSummaryReq;

                        /**
                         * Encodes the specified QueryCouponSummaryReq message. Does not implicitly {@link net.ihago.ymicro.api.revenue.QueryCouponSummaryReq.verify|verify} messages.
                         * @param message QueryCouponSummaryReq message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: net.ihago.ymicro.api.revenue.IQueryCouponSummaryReq, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a QueryCouponSummaryReq message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns QueryCouponSummaryReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): net.ihago.ymicro.api.revenue.QueryCouponSummaryReq;
                    }

                    /** Properties of a CouponSummaryItem. */
                    interface ICouponSummaryItem {

                        /** CouponSummaryItem coupon_id */
                        coupon_id?: (number|null);

                        /** CouponSummaryItem count */
                        count?: (number|null);

                        /** CouponSummaryItem coupon_id_list */
                        coupon_id_list?: (number[]|null);

                        /** CouponSummaryItem msg_id_list */
                        msg_id_list?: (number[]|null);

                        /** CouponSummaryItem nearest_expire_at */
                        nearest_expire_at?: (number|null);

                        /** CouponSummaryItem redDot */
                        redDot?: (boolean|null);

                        /** CouponSummaryItem newTag */
                        newTag?: (boolean|null);
                    }

                    /** Represents a CouponSummaryItem. */
                    class CouponSummaryItem implements ICouponSummaryItem {

                        /**
                         * Constructs a new CouponSummaryItem.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: net.ihago.ymicro.api.revenue.ICouponSummaryItem);

                        /** CouponSummaryItem coupon_id. */
                        public coupon_id: number;

                        /** CouponSummaryItem count. */
                        public count: number;

                        /** CouponSummaryItem coupon_id_list. */
                        public coupon_id_list: number[];

                        /** CouponSummaryItem msg_id_list. */
                        public msg_id_list: number[];

                        /** CouponSummaryItem nearest_expire_at. */
                        public nearest_expire_at: number;

                        /** CouponSummaryItem redDot. */
                        public redDot: boolean;

                        /** CouponSummaryItem newTag. */
                        public newTag: boolean;

                        /**
                         * Creates a new CouponSummaryItem instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CouponSummaryItem instance
                         */
                        public static create(properties?: net.ihago.ymicro.api.revenue.ICouponSummaryItem): net.ihago.ymicro.api.revenue.CouponSummaryItem;

                        /**
                         * Encodes the specified CouponSummaryItem message. Does not implicitly {@link net.ihago.ymicro.api.revenue.CouponSummaryItem.verify|verify} messages.
                         * @param message CouponSummaryItem message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: net.ihago.ymicro.api.revenue.ICouponSummaryItem, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CouponSummaryItem message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CouponSummaryItem
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): net.ihago.ymicro.api.revenue.CouponSummaryItem;
                    }

                    /** Properties of a QueryCouponSummaryRes. */
                    interface IQueryCouponSummaryRes {

                        /** QueryCouponSummaryRes result */
                        result?: (common.IResult|null);

                        /** QueryCouponSummaryRes msg_notification */
                        msg_notification?: (boolean|null);

                        /** QueryCouponSummaryRes items */
                        items?: (net.ihago.ymicro.api.revenue.ICouponSummaryItem[]|null);

                        /** QueryCouponSummaryRes gameTips */
                        gameTips?: (string|null);
                    }

                    /** Represents a QueryCouponSummaryRes. */
                    class QueryCouponSummaryRes implements IQueryCouponSummaryRes {

                        /**
                         * Constructs a new QueryCouponSummaryRes.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: net.ihago.ymicro.api.revenue.IQueryCouponSummaryRes);

                        /** QueryCouponSummaryRes result. */
                        public result?: (common.IResult|null);

                        /** QueryCouponSummaryRes msg_notification. */
                        public msg_notification: boolean;

                        /** QueryCouponSummaryRes items. */
                        public items: net.ihago.ymicro.api.revenue.ICouponSummaryItem[];

                        /** QueryCouponSummaryRes gameTips. */
                        public gameTips: string;

                        /**
                         * Creates a new QueryCouponSummaryRes instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns QueryCouponSummaryRes instance
                         */
                        public static create(properties?: net.ihago.ymicro.api.revenue.IQueryCouponSummaryRes): net.ihago.ymicro.api.revenue.QueryCouponSummaryRes;

                        /**
                         * Encodes the specified QueryCouponSummaryRes message. Does not implicitly {@link net.ihago.ymicro.api.revenue.QueryCouponSummaryRes.verify|verify} messages.
                         * @param message QueryCouponSummaryRes message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: net.ihago.ymicro.api.revenue.IQueryCouponSummaryRes, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a QueryCouponSummaryRes message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns QueryCouponSummaryRes
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): net.ihago.ymicro.api.revenue.QueryCouponSummaryRes;
                    }

                    /** Properties of a ReadMessageReq. */
                    interface IReadMessageReq {

                        /** ReadMessageReq commodity_type */
                        commodity_type?: (number|null);

                        /** ReadMessageReq coupon_id_list */
                        coupon_id_list?: (number[]|null);

                        /** ReadMessageReq msg_id_list */
                        msg_id_list?: (number[]|null);
                    }

                    /** Represents a ReadMessageReq. */
                    class ReadMessageReq implements IReadMessageReq {

                        /**
                         * Constructs a new ReadMessageReq.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: net.ihago.ymicro.api.revenue.IReadMessageReq);

                        /** ReadMessageReq commodity_type. */
                        public commodity_type: number;

                        /** ReadMessageReq coupon_id_list. */
                        public coupon_id_list: number[];

                        /** ReadMessageReq msg_id_list. */
                        public msg_id_list: number[];

                        /**
                         * Creates a new ReadMessageReq instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ReadMessageReq instance
                         */
                        public static create(properties?: net.ihago.ymicro.api.revenue.IReadMessageReq): net.ihago.ymicro.api.revenue.ReadMessageReq;

                        /**
                         * Encodes the specified ReadMessageReq message. Does not implicitly {@link net.ihago.ymicro.api.revenue.ReadMessageReq.verify|verify} messages.
                         * @param message ReadMessageReq message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: net.ihago.ymicro.api.revenue.IReadMessageReq, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ReadMessageReq message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ReadMessageReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): net.ihago.ymicro.api.revenue.ReadMessageReq;
                    }

                    /** Properties of a ReadMessageRes. */
                    interface IReadMessageRes {

                        /** ReadMessageRes result */
                        result?: (common.IResult|null);
                    }

                    /** Represents a ReadMessageRes. */
                    class ReadMessageRes implements IReadMessageRes {

                        /**
                         * Constructs a new ReadMessageRes.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: net.ihago.ymicro.api.revenue.IReadMessageRes);

                        /** ReadMessageRes result. */
                        public result?: (common.IResult|null);

                        /**
                         * Creates a new ReadMessageRes instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ReadMessageRes instance
                         */
                        public static create(properties?: net.ihago.ymicro.api.revenue.IReadMessageRes): net.ihago.ymicro.api.revenue.ReadMessageRes;

                        /**
                         * Encodes the specified ReadMessageRes message. Does not implicitly {@link net.ihago.ymicro.api.revenue.ReadMessageRes.verify|verify} messages.
                         * @param message ReadMessageRes message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: net.ihago.ymicro.api.revenue.IReadMessageRes, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ReadMessageRes message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ReadMessageRes
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): net.ihago.ymicro.api.revenue.ReadMessageRes;
                    }
                }
            }
        }
    }
}

/** Namespace common. */
export namespace common {

    /** Properties of a Header. */
    interface IHeader {

        /** Header sname */
        sname?: (string|null);

        /** Header seqid */
        seqid?: (number|null);

        /** Header code */
        code?: (number|null);

        /** Header lang */
        lang?: (string|null);

        /** Header tid */
        tid?: (string|null);

        /** Header roomid */
        roomid?: (string|null);

        /** Header method */
        method?: (string|null);

        /** Header version */
        version?: (string|null);

        /** Header msgtype */
        msgtype?: (common.Header.MSGTYPE|null);

        /** Header back_ground */
        back_ground?: (boolean|null);

        /** Header biz */
        biz?: (Uint8Array|null);

        /** Header extend */
        extend?: ({ [k: string]: Uint8Array }|null);

        /** Header routing_key */
        routing_key?: (Uint8Array|null);

        /** Header gameid */
        gameid?: (string|null);
    }

    /** Represents a Header. */
    class Header implements IHeader {

        /**
         * Constructs a new Header.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IHeader);

        /** Header sname. */
        public sname: string;

        /** Header seqid. */
        public seqid: number;

        /** Header code. */
        public code: number;

        /** Header lang. */
        public lang: string;

        /** Header tid. */
        public tid: string;

        /** Header roomid. */
        public roomid: string;

        /** Header method. */
        public method: string;

        /** Header version. */
        public version: string;

        /** Header msgtype. */
        public msgtype: common.Header.MSGTYPE;

        /** Header back_ground. */
        public back_ground: boolean;

        /** Header biz. */
        public biz: Uint8Array;

        /** Header extend. */
        public extend: { [k: string]: Uint8Array };

        /** Header routing_key. */
        public routing_key: Uint8Array;

        /** Header gameid. */
        public gameid: string;

        /**
         * Creates a new Header instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Header instance
         */
        public static create(properties?: common.IHeader): common.Header;

        /**
         * Encodes the specified Header message. Does not implicitly {@link common.Header.verify|verify} messages.
         * @param message Header message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IHeader, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Header message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Header
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.Header;
    }

    namespace Header {

        /** MSGTYPE enum. */
        enum MSGTYPE {
            MSGTYPE_UNKNOWN = 0,
            MSGTYPE_REQ = 1,
            MSGTYPE_RESP = 2,
            MSGTYPE_NOTICE = 3
        }
    }

    /** ERet enum. */
    enum ERet {
        kRetSuccess = 0,
        kRetErrParameter = 1,
        kRetErrCookie = 2,
        kRetErrUnauthorized = 3,
        kRetErrUnknowUri = 4,
        kRetErrVersion = 5,
        kRetErrBanned = 6,
        kRetErrBusy = 7,
        kRetErrNotFound = 8,
        kRetErrAlreadyExists = 9,
        kRetErrPermissionDenied = 10,
        kRetErrIncompatibleVersion = 11,
        kRetErrNotBegin = 12,
        kRetErrAlreadyEnd = 13,
        kRetErrBlackUser = 14,
        kRetErrGlobalGateWay = 21,
        kRetErrDiamondFrozen = 22,
        kRetErrGuestForbidden = 23,
        kRetErrBatchSizeLimit = 100,
        kRetErrSystem = 999,
        kRetErrGameIdNotExist = 1001,
        kRetErrImPkRepeatedInvite = 1002,
        kRetErrImPkInviteOutOfDate = 1003,
        kRetErrGenPkGameUrlFailed = 1004,
        kRetErrS2SAddrlistFriendsFailed = 1005,
        kRetErrS2SFbFriendsFailed = 1006,
        kRetErrS2SGetFriendListFailed = 1007,
        kRetErrS2SGetUserStatusFailed = 1008,
        kRetErrS2SGetUsersInfoFailed = 1009,
        kRetErrGameMaintain = 1010,
        kRetErrGameFull = 1011,
        kRetErrImPkInviteAccepted = 1012,
        kRetErrIdInvalid = 1013,
        kRetErrPowerLow = 1014,
        kRetErrMoneyLow = 1015,
        kRetErrSource = 1016,
        kRetErrRecommendDailyLimit = 1051,
        kRetErrRecommendNearbyNone = 1052,
        kRetErrTeamFull = 2000,
        kRetErrTeamInvalid = 2001,
        kRetErrGameHasBegun = 2002,
        kRetErrGameing = 2003,
        kRetErrInviteLeaved = 2004,
        KRetErrBelongTeam = 2005,
        kRetErrGetGameInfoErr = 2006,
        kRetErrNoInMatch = 2007,
        kRetErrCancelMatchErr = 2008,
        kRetErrUserNotInRoom = 2009,
        kRetErrTeamMatching = 2010,
        kRetErrImTeamCreating = 2011,
        kRetErrChangeTemplate = 2012,
        kRetErrVoiceChatSelfBusy = 2101,
        kRetErrVoiceChatOtherBusy = 2102,
        kRetErrVoiceChatCallTimeout = 2103,
        kRetErrVoiceChatUserNotBeCall = 2104,
        kRetErrVoiceChatHadStarted = 2105,
        kRetErrVoiceChatHadStop = 2106,
        kRetErrVoiceChatOffLine = 2107
    }

    /** ESex enum. */
    enum ESex {
        kSexFemale = 0,
        kSexMale = 1,
        kSexAll = 2
    }

    /** YMicroRet enum. */
    enum YMicroRet {
        YMicroRetSuccess = 0,
        YMicroRetBadRequest = 400,
        YMicroRetUnauthorized = 401,
        YMicroRetForbidden = 403,
        YMicroRetNotFound = 404,
        YMicroRetMethodNotAllowed = 405,
        YMicroRetTimeout = 408,
        YMicroRetConflict = 409,
        YMicroRetTooManyRequests = 429,
        YMicroRetInternalServerError = 500
    }

    /** Properties of a Result. */
    interface IResult {

        /** Result errcode */
        errcode?: (number|null);

        /** Result errmsg */
        errmsg?: (string|null);

        /** Result magic */
        magic?: (number|null);

        /** Result details */
        details?: (common.IDetail[]|null);
    }

    /** Represents a Result. */
    class Result implements IResult {

        /**
         * Constructs a new Result.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IResult);

        /** Result errcode. */
        public errcode: number;

        /** Result errmsg. */
        public errmsg: string;

        /** Result magic. */
        public magic: number;

        /** Result details. */
        public details: common.IDetail[];

        /**
         * Creates a new Result instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Result instance
         */
        public static create(properties?: common.IResult): common.Result;

        /**
         * Encodes the specified Result message. Does not implicitly {@link common.Result.verify|verify} messages.
         * @param message Result message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Result message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Result
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.Result;
    }

    /** Properties of a Response. */
    interface IResponse {

        /** Response result */
        result?: (common.IResult|null);
    }

    /** Represents a Response. */
    class Response implements IResponse {

        /**
         * Constructs a new Response.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IResponse);

        /** Response result. */
        public result?: (common.IResult|null);

        /**
         * Creates a new Response instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Response instance
         */
        public static create(properties?: common.IResponse): common.Response;

        /**
         * Encodes the specified Response message. Does not implicitly {@link common.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.Response;
    }

    /** EBizAction enum. */
    enum EBizAction {
        BizActionNone = 0,
        BizActionAdd = 1,
        BizActionDel = 2
    }

    /** Properties of a BizAction. */
    interface IBizAction {

        /** BizAction action */
        action?: (number|null);

        /** BizAction sname */
        sname?: (string|null);

        /** BizAction key */
        key?: (string|null);

        /** BizAction value */
        value?: (Uint8Array|null);

        /** BizAction valid_time */
        valid_time?: (number|null);
    }

    /** Represents a BizAction. */
    class BizAction implements IBizAction {

        /**
         * Constructs a new BizAction.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IBizAction);

        /** BizAction action. */
        public action: number;

        /** BizAction sname. */
        public sname: string;

        /** BizAction key. */
        public key: string;

        /** BizAction value. */
        public value: Uint8Array;

        /** BizAction valid_time. */
        public valid_time: number;

        /**
         * Creates a new BizAction instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BizAction instance
         */
        public static create(properties?: common.IBizAction): common.BizAction;

        /**
         * Encodes the specified BizAction message. Does not implicitly {@link common.BizAction.verify|verify} messages.
         * @param message BizAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IBizAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BizAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BizAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.BizAction;
    }

    /** EBizType enum. */
    enum EBizType {
        EBizTypeNone = 0,
        EBizTypeAction = 10,
        EBizTypeInfos = 11,
        EBizTypeExt = 12
    }

    /** Properties of a Biz. */
    interface IBiz {

        /** Biz types */
        types?: (number[]|null);

        /** Biz biz_actions */
        biz_actions?: (common.IBizAction[]|null);

        /** Biz biz_infos */
        biz_infos?: ({ [k: string]: Uint8Array }|null);

        /** Biz biz_ext */
        biz_ext?: ({ [k: string]: Uint8Array }|null);
    }

    /** Represents a Biz. */
    class Biz implements IBiz {

        /**
         * Constructs a new Biz.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IBiz);

        /** Biz types. */
        public types: number[];

        /** Biz biz_actions. */
        public biz_actions: common.IBizAction[];

        /** Biz biz_infos. */
        public biz_infos: { [k: string]: Uint8Array };

        /** Biz biz_ext. */
        public biz_ext: { [k: string]: Uint8Array };

        /**
         * Creates a new Biz instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Biz instance
         */
        public static create(properties?: common.IBiz): common.Biz;

        /**
         * Encodes the specified Biz message. Does not implicitly {@link common.Biz.verify|verify} messages.
         * @param message Biz message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IBiz, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Biz message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Biz
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.Biz;
    }

    /** Properties of a Page. */
    interface IPage {

        /** Page snap */
        snap?: (number|null);

        /** Page offset */
        offset?: (number|null);

        /** Page limit */
        limit?: (number|null);

        /** Page total */
        total?: (number|null);
    }

    /** Represents a Page. */
    class Page implements IPage {

        /**
         * Constructs a new Page.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IPage);

        /** Page snap. */
        public snap: number;

        /** Page offset. */
        public offset: number;

        /** Page limit. */
        public limit: number;

        /** Page total. */
        public total: number;

        /**
         * Creates a new Page instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Page instance
         */
        public static create(properties?: common.IPage): common.Page;

        /**
         * Encodes the specified Page message. Does not implicitly {@link common.Page.verify|verify} messages.
         * @param message Page message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IPage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Page message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Page
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.Page;
    }

    /** Properties of a LocalizedMessage. */
    interface ILocalizedMessage {

        /** LocalizedMessage locale */
        locale?: (string|null);

        /** LocalizedMessage message */
        message?: (string|null);
    }

    /** Represents a LocalizedMessage. */
    class LocalizedMessage implements ILocalizedMessage {

        /**
         * Constructs a new LocalizedMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.ILocalizedMessage);

        /** LocalizedMessage locale. */
        public locale: string;

        /** LocalizedMessage message. */
        public message: string;

        /**
         * Creates a new LocalizedMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LocalizedMessage instance
         */
        public static create(properties?: common.ILocalizedMessage): common.LocalizedMessage;

        /**
         * Encodes the specified LocalizedMessage message. Does not implicitly {@link common.LocalizedMessage.verify|verify} messages.
         * @param message LocalizedMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.ILocalizedMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LocalizedMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LocalizedMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.LocalizedMessage;
    }

    /** Detail//////////////////////////////// */
    enum DetailTypeURI {
        DETAIL_TYPE_URI_UNSPECIFIED = 0,
        DETAIL_TYPE_URI_LOCALIZE_MESSAGE = 1
    }

    /** Properties of a Detail. */
    interface IDetail {

        /** Detail type_uri */
        type_uri?: (number|null);

        /** Detail localize_message */
        localize_message?: (common.ILocalizedMessage|null);
    }

    /** Represents a Detail. */
    class Detail implements IDetail {

        /**
         * Constructs a new Detail.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IDetail);

        /** Detail type_uri. */
        public type_uri: number;

        /** Detail localize_message. */
        public localize_message?: (common.ILocalizedMessage|null);

        /**
         * Creates a new Detail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Detail instance
         */
        public static create(properties?: common.IDetail): common.Detail;

        /**
         * Encodes the specified Detail message. Does not implicitly {@link common.Detail.verify|verify} messages.
         * @param message Detail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IDetail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Detail message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Detail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.Detail;
    }
}
