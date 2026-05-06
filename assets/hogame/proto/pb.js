/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.protobuf || ($protobuf.roots.protobuf = {});

$root.pbm = (function() {

    /**
     * Namespace pbm.
     * @exports pbm
     * @namespace
     */
    var pbm = {};

    /**
     * RoomStatus enum.
     * @name pbm.RoomStatus
     * @enum {string}
     * @property {number} ROOM_STATUS_INITIAL=0 ROOM_STATUS_INITIAL value
     * @property {number} ROOM_STATUS_LOAD=1 ROOM_STATUS_LOAD value
     * @property {number} ROOM_STATUS_PLAYING=2 ROOM_STATUS_PLAYING value
     * @property {number} ROOM_STATUS_FINISHED=3 ROOM_STATUS_FINISHED value
     */
    pbm.RoomStatus = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ROOM_STATUS_INITIAL"] = 0;
        values[valuesById[1] = "ROOM_STATUS_LOAD"] = 1;
        values[valuesById[2] = "ROOM_STATUS_PLAYING"] = 2;
        values[valuesById[3] = "ROOM_STATUS_FINISHED"] = 3;
        return values;
    })();

    pbm.LoadProgressReq = (function() {

        /**
         * Properties of a LoadProgressReq.
         * @memberof pbm
         * @interface ILoadProgressReq
         * @property {string|null} [uid] LoadProgressReq uid
         * @property {number|null} [progress] LoadProgressReq progress
         */

        /**
         * Constructs a new LoadProgressReq.
         * @memberof pbm
         * @classdesc Represents a LoadProgressReq.
         * @implements ILoadProgressReq
         * @constructor
         * @param {pbm.ILoadProgressReq=} [properties] Properties to set
         */
        function LoadProgressReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoadProgressReq uid.
         * @member {string} uid
         * @memberof pbm.LoadProgressReq
         * @instance
         */
        LoadProgressReq.prototype.uid = "";

        /**
         * LoadProgressReq progress.
         * @member {number} progress
         * @memberof pbm.LoadProgressReq
         * @instance
         */
        LoadProgressReq.prototype.progress = 0;

        /**
         * Creates a new LoadProgressReq instance using the specified properties.
         * @function create
         * @memberof pbm.LoadProgressReq
         * @static
         * @param {pbm.ILoadProgressReq=} [properties] Properties to set
         * @returns {pbm.LoadProgressReq} LoadProgressReq instance
         */
        LoadProgressReq.create = function create(properties) {
            return new LoadProgressReq(properties);
        };

        /**
         * Encodes the specified LoadProgressReq message. Does not implicitly {@link pbm.LoadProgressReq.verify|verify} messages.
         * @function encode
         * @memberof pbm.LoadProgressReq
         * @static
         * @param {pbm.ILoadProgressReq} message LoadProgressReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoadProgressReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
            if (message.progress != null && message.hasOwnProperty("progress"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.progress);
            return writer;
        };

        /**
         * Decodes a LoadProgressReq message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.LoadProgressReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.LoadProgressReq} LoadProgressReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoadProgressReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.LoadProgressReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.string();
                    break;
                case 3:
                    message.progress = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return LoadProgressReq;
    })();

    pbm.LoadProgressRes = (function() {

        /**
         * Properties of a LoadProgressRes.
         * @memberof pbm
         * @interface ILoadProgressRes
         * @property {number|null} [code] LoadProgressRes code
         * @property {string|null} [msg] LoadProgressRes msg
         * @property {string|null} [uid] LoadProgressRes uid
         * @property {number|null} [progress] LoadProgressRes progress
         */

        /**
         * Constructs a new LoadProgressRes.
         * @memberof pbm
         * @classdesc Represents a LoadProgressRes.
         * @implements ILoadProgressRes
         * @constructor
         * @param {pbm.ILoadProgressRes=} [properties] Properties to set
         */
        function LoadProgressRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoadProgressRes code.
         * @member {number} code
         * @memberof pbm.LoadProgressRes
         * @instance
         */
        LoadProgressRes.prototype.code = 0;

        /**
         * LoadProgressRes msg.
         * @member {string} msg
         * @memberof pbm.LoadProgressRes
         * @instance
         */
        LoadProgressRes.prototype.msg = "";

        /**
         * LoadProgressRes uid.
         * @member {string} uid
         * @memberof pbm.LoadProgressRes
         * @instance
         */
        LoadProgressRes.prototype.uid = "";

        /**
         * LoadProgressRes progress.
         * @member {number} progress
         * @memberof pbm.LoadProgressRes
         * @instance
         */
        LoadProgressRes.prototype.progress = 0;

        /**
         * Creates a new LoadProgressRes instance using the specified properties.
         * @function create
         * @memberof pbm.LoadProgressRes
         * @static
         * @param {pbm.ILoadProgressRes=} [properties] Properties to set
         * @returns {pbm.LoadProgressRes} LoadProgressRes instance
         */
        LoadProgressRes.create = function create(properties) {
            return new LoadProgressRes(properties);
        };

        /**
         * Encodes the specified LoadProgressRes message. Does not implicitly {@link pbm.LoadProgressRes.verify|verify} messages.
         * @function encode
         * @memberof pbm.LoadProgressRes
         * @static
         * @param {pbm.ILoadProgressRes} message LoadProgressRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoadProgressRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
            if (message.progress != null && message.hasOwnProperty("progress"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.progress);
            if (message.code != null && message.hasOwnProperty("code"))
                writer.uint32(/* id 14, wireType 0 =*/112).int32(message.code);
            if (message.msg != null && message.hasOwnProperty("msg"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.msg);
            return writer;
        };

        /**
         * Decodes a LoadProgressRes message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.LoadProgressRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.LoadProgressRes} LoadProgressRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoadProgressRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.LoadProgressRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 14:
                    message.code = reader.int32();
                    break;
                case 15:
                    message.msg = reader.string();
                    break;
                case 1:
                    message.uid = reader.string();
                    break;
                case 2:
                    message.progress = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return LoadProgressRes;
    })();

    pbm.ForceExitReq = (function() {

        /**
         * Properties of a ForceExitReq.
         * @memberof pbm
         * @interface IForceExitReq
         */

        /**
         * Constructs a new ForceExitReq.
         * @memberof pbm
         * @classdesc Represents a ForceExitReq.
         * @implements IForceExitReq
         * @constructor
         * @param {pbm.IForceExitReq=} [properties] Properties to set
         */
        function ForceExitReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ForceExitReq instance using the specified properties.
         * @function create
         * @memberof pbm.ForceExitReq
         * @static
         * @param {pbm.IForceExitReq=} [properties] Properties to set
         * @returns {pbm.ForceExitReq} ForceExitReq instance
         */
        ForceExitReq.create = function create(properties) {
            return new ForceExitReq(properties);
        };

        /**
         * Encodes the specified ForceExitReq message. Does not implicitly {@link pbm.ForceExitReq.verify|verify} messages.
         * @function encode
         * @memberof pbm.ForceExitReq
         * @static
         * @param {pbm.IForceExitReq} message ForceExitReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ForceExitReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Decodes a ForceExitReq message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.ForceExitReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.ForceExitReq} ForceExitReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ForceExitReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.ForceExitReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ForceExitReq;
    })();

    pbm.ForceExitRes = (function() {

        /**
         * Properties of a ForceExitRes.
         * @memberof pbm
         * @interface IForceExitRes
         * @property {number|null} [code] ForceExitRes code
         * @property {string|null} [msg] ForceExitRes msg
         * @property {string|null} [uid] ForceExitRes uid
         */

        /**
         * Constructs a new ForceExitRes.
         * @memberof pbm
         * @classdesc Represents a ForceExitRes.
         * @implements IForceExitRes
         * @constructor
         * @param {pbm.IForceExitRes=} [properties] Properties to set
         */
        function ForceExitRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ForceExitRes code.
         * @member {number} code
         * @memberof pbm.ForceExitRes
         * @instance
         */
        ForceExitRes.prototype.code = 0;

        /**
         * ForceExitRes msg.
         * @member {string} msg
         * @memberof pbm.ForceExitRes
         * @instance
         */
        ForceExitRes.prototype.msg = "";

        /**
         * ForceExitRes uid.
         * @member {string} uid
         * @memberof pbm.ForceExitRes
         * @instance
         */
        ForceExitRes.prototype.uid = "";

        /**
         * Creates a new ForceExitRes instance using the specified properties.
         * @function create
         * @memberof pbm.ForceExitRes
         * @static
         * @param {pbm.IForceExitRes=} [properties] Properties to set
         * @returns {pbm.ForceExitRes} ForceExitRes instance
         */
        ForceExitRes.create = function create(properties) {
            return new ForceExitRes(properties);
        };

        /**
         * Encodes the specified ForceExitRes message. Does not implicitly {@link pbm.ForceExitRes.verify|verify} messages.
         * @function encode
         * @memberof pbm.ForceExitRes
         * @static
         * @param {pbm.IForceExitRes} message ForceExitRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ForceExitRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
            if (message.code != null && message.hasOwnProperty("code"))
                writer.uint32(/* id 14, wireType 0 =*/112).int32(message.code);
            if (message.msg != null && message.hasOwnProperty("msg"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.msg);
            return writer;
        };

        /**
         * Decodes a ForceExitRes message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.ForceExitRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.ForceExitRes} ForceExitRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ForceExitRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.ForceExitRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 14:
                    message.code = reader.int32();
                    break;
                case 15:
                    message.msg = reader.string();
                    break;
                case 1:
                    message.uid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ForceExitRes;
    })();

    pbm.GiveUpReq = (function() {

        /**
         * Properties of a GiveUpReq.
         * @memberof pbm
         * @interface IGiveUpReq
         */

        /**
         * Constructs a new GiveUpReq.
         * @memberof pbm
         * @classdesc Represents a GiveUpReq.
         * @implements IGiveUpReq
         * @constructor
         * @param {pbm.IGiveUpReq=} [properties] Properties to set
         */
        function GiveUpReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GiveUpReq instance using the specified properties.
         * @function create
         * @memberof pbm.GiveUpReq
         * @static
         * @param {pbm.IGiveUpReq=} [properties] Properties to set
         * @returns {pbm.GiveUpReq} GiveUpReq instance
         */
        GiveUpReq.create = function create(properties) {
            return new GiveUpReq(properties);
        };

        /**
         * Encodes the specified GiveUpReq message. Does not implicitly {@link pbm.GiveUpReq.verify|verify} messages.
         * @function encode
         * @memberof pbm.GiveUpReq
         * @static
         * @param {pbm.IGiveUpReq} message GiveUpReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GiveUpReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Decodes a GiveUpReq message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.GiveUpReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.GiveUpReq} GiveUpReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GiveUpReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.GiveUpReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return GiveUpReq;
    })();

    pbm.GiveUpRes = (function() {

        /**
         * Properties of a GiveUpRes.
         * @memberof pbm
         * @interface IGiveUpRes
         * @property {number|null} [code] GiveUpRes code
         * @property {string|null} [msg] GiveUpRes msg
         * @property {string|null} [uid] GiveUpRes uid
         */

        /**
         * Constructs a new GiveUpRes.
         * @memberof pbm
         * @classdesc Represents a GiveUpRes.
         * @implements IGiveUpRes
         * @constructor
         * @param {pbm.IGiveUpRes=} [properties] Properties to set
         */
        function GiveUpRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GiveUpRes code.
         * @member {number} code
         * @memberof pbm.GiveUpRes
         * @instance
         */
        GiveUpRes.prototype.code = 0;

        /**
         * GiveUpRes msg.
         * @member {string} msg
         * @memberof pbm.GiveUpRes
         * @instance
         */
        GiveUpRes.prototype.msg = "";

        /**
         * GiveUpRes uid.
         * @member {string} uid
         * @memberof pbm.GiveUpRes
         * @instance
         */
        GiveUpRes.prototype.uid = "";

        /**
         * Creates a new GiveUpRes instance using the specified properties.
         * @function create
         * @memberof pbm.GiveUpRes
         * @static
         * @param {pbm.IGiveUpRes=} [properties] Properties to set
         * @returns {pbm.GiveUpRes} GiveUpRes instance
         */
        GiveUpRes.create = function create(properties) {
            return new GiveUpRes(properties);
        };

        /**
         * Encodes the specified GiveUpRes message. Does not implicitly {@link pbm.GiveUpRes.verify|verify} messages.
         * @function encode
         * @memberof pbm.GiveUpRes
         * @static
         * @param {pbm.IGiveUpRes} message GiveUpRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GiveUpRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
            if (message.code != null && message.hasOwnProperty("code"))
                writer.uint32(/* id 14, wireType 0 =*/112).int32(message.code);
            if (message.msg != null && message.hasOwnProperty("msg"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.msg);
            return writer;
        };

        /**
         * Decodes a GiveUpRes message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.GiveUpRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.GiveUpRes} GiveUpRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GiveUpRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.GiveUpRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 14:
                    message.code = reader.int32();
                    break;
                case 15:
                    message.msg = reader.string();
                    break;
                case 1:
                    message.uid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return GiveUpRes;
    })();

    /**
     * ERetCode enum.
     * @name pbm.ERetCode
     * @enum {string}
     * @property {number} ERetCodeSuccess=0 ERetCodeSuccess value
     * @property {number} ERetSystem=999 ERetSystem value
     * @property {number} ERetInvalidPlayer=1000 ERetInvalidPlayer value
     * @property {number} ERetTooFrequent=1001 ERetTooFrequent value
     * @property {number} ERetInvalidParams=1002 ERetInvalidParams value
     * @property {number} ERetBlock=10001 ERetBlock value
     * @property {number} ERetVipNotEnough=10002 ERetVipNotEnough value
     * @property {number} ERetInsufficientBalance=10003 ERetInsufficientBalance value
     * @property {number} ERetFreezeAccount=22 ERetFreezeAccount value
     * @property {number} ERetAlreadyAutoBet=10004 ERetAlreadyAutoBet value
     * @property {number} ERetMaintain=10005 ERetMaintain value
     * @property {number} ERetNotRecoveryPhase=11001 ERetNotRecoveryPhase value
     * @property {number} ERetAlreadyRecovery=11002 ERetAlreadyRecovery value
     */
    pbm.ERetCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ERetCodeSuccess"] = 0;
        values[valuesById[999] = "ERetSystem"] = 999;
        values[valuesById[1000] = "ERetInvalidPlayer"] = 1000;
        values[valuesById[1001] = "ERetTooFrequent"] = 1001;
        values[valuesById[1002] = "ERetInvalidParams"] = 1002;
        values[valuesById[10001] = "ERetBlock"] = 10001;
        values[valuesById[10002] = "ERetVipNotEnough"] = 10002;
        values[valuesById[10003] = "ERetInsufficientBalance"] = 10003;
        values[valuesById[22] = "ERetFreezeAccount"] = 22;
        values[valuesById[10004] = "ERetAlreadyAutoBet"] = 10004;
        values[valuesById[10005] = "ERetMaintain"] = 10005;
        values[valuesById[11001] = "ERetNotRecoveryPhase"] = 11001;
        values[valuesById[11002] = "ERetAlreadyRecovery"] = 11002;
        return values;
    })();

    pbm.LoginGameRes = (function() {

        /**
         * Properties of a LoginGameRes.
         * @memberof pbm
         * @interface ILoginGameRes
         * @property {common.IResult|null} [result] LoginGameRes result
         * @property {number|null} [vip_level] LoginGameRes vip_level
         * @property {number|null} [need_vip] LoginGameRes need_vip
         * @property {number|null} [guided] LoginGameRes guided
         * @property {Array.<pbm.IMission>|null} [missions] LoginGameRes missions
         * @property {boolean|null} [is_show_white] LoginGameRes is_show_white
         * @property {boolean|null} [has_red_diamond_entry] LoginGameRes has_red_diamond_entry
         * @property {number|null} [red_diamond_switch] LoginGameRes red_diamond_switch
         */

        /**
         * Constructs a new LoginGameRes.
         * @memberof pbm
         * @classdesc Represents a LoginGameRes.
         * @implements ILoginGameRes
         * @constructor
         * @param {pbm.ILoginGameRes=} [properties] Properties to set
         */
        function LoginGameRes(properties) {
            this.missions = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginGameRes result.
         * @member {common.IResult|null|undefined} result
         * @memberof pbm.LoginGameRes
         * @instance
         */
        LoginGameRes.prototype.result = null;

        /**
         * LoginGameRes vip_level.
         * @member {number} vip_level
         * @memberof pbm.LoginGameRes
         * @instance
         */
        LoginGameRes.prototype.vip_level = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * LoginGameRes need_vip.
         * @member {number} need_vip
         * @memberof pbm.LoginGameRes
         * @instance
         */
        LoginGameRes.prototype.need_vip = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * LoginGameRes guided.
         * @member {number} guided
         * @memberof pbm.LoginGameRes
         * @instance
         */
        LoginGameRes.prototype.guided = 0;

        /**
         * LoginGameRes missions.
         * @member {Array.<pbm.IMission>} missions
         * @memberof pbm.LoginGameRes
         * @instance
         */
        LoginGameRes.prototype.missions = $util.emptyArray;

        /**
         * LoginGameRes is_show_white.
         * @member {boolean} is_show_white
         * @memberof pbm.LoginGameRes
         * @instance
         */
        LoginGameRes.prototype.is_show_white = false;

        /**
         * LoginGameRes has_red_diamond_entry.
         * @member {boolean} has_red_diamond_entry
         * @memberof pbm.LoginGameRes
         * @instance
         */
        LoginGameRes.prototype.has_red_diamond_entry = false;

        /**
         * LoginGameRes red_diamond_switch.
         * @member {number} red_diamond_switch
         * @memberof pbm.LoginGameRes
         * @instance
         */
        LoginGameRes.prototype.red_diamond_switch = 0;

        /**
         * Creates a new LoginGameRes instance using the specified properties.
         * @function create
         * @memberof pbm.LoginGameRes
         * @static
         * @param {pbm.ILoginGameRes=} [properties] Properties to set
         * @returns {pbm.LoginGameRes} LoginGameRes instance
         */
        LoginGameRes.create = function create(properties) {
            return new LoginGameRes(properties);
        };

        /**
         * Encodes the specified LoginGameRes message. Does not implicitly {@link pbm.LoginGameRes.verify|verify} messages.
         * @function encode
         * @memberof pbm.LoginGameRes
         * @static
         * @param {pbm.ILoginGameRes} message LoginGameRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginGameRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && message.hasOwnProperty("result"))
                $root.common.Result.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.vip_level != null && message.hasOwnProperty("vip_level"))
                writer.uint32(/* id 10, wireType 0 =*/80).int64(message.vip_level);
            if (message.need_vip != null && message.hasOwnProperty("need_vip"))
                writer.uint32(/* id 11, wireType 0 =*/88).int64(message.need_vip);
            if (message.guided != null && message.hasOwnProperty("guided"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.guided);
            if (message.missions != null && message.missions.length)
                for (var i = 0; i < message.missions.length; ++i)
                    $root.pbm.Mission.encode(message.missions[i], writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            if (message.is_show_white != null && message.hasOwnProperty("is_show_white"))
                writer.uint32(/* id 14, wireType 0 =*/112).bool(message.is_show_white);
            if (message.has_red_diamond_entry != null && message.hasOwnProperty("has_red_diamond_entry"))
                writer.uint32(/* id 15, wireType 0 =*/120).bool(message.has_red_diamond_entry);
            if (message.red_diamond_switch != null && message.hasOwnProperty("red_diamond_switch"))
                writer.uint32(/* id 16, wireType 0 =*/128).int32(message.red_diamond_switch);
            return writer;
        };

        /**
         * Decodes a LoginGameRes message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.LoginGameRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.LoginGameRes} LoginGameRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginGameRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.LoginGameRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = $root.common.Result.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.vip_level = reader.int64();
                    break;
                case 11:
                    message.need_vip = reader.int64();
                    break;
                case 12:
                    message.guided = reader.int32();
                    break;
                case 13:
                    if (!(message.missions && message.missions.length))
                        message.missions = [];
                    message.missions.push($root.pbm.Mission.decode(reader, reader.uint32()));
                    break;
                case 14:
                    message.is_show_white = reader.bool();
                    break;
                case 15:
                    message.has_red_diamond_entry = reader.bool();
                    break;
                case 16:
                    message.red_diamond_switch = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return LoginGameRes;
    })();

    pbm.Mission = (function() {

        /**
         * Properties of a Mission.
         * @memberof pbm
         * @interface IMission
         * @property {number|null} [id] Mission id
         * @property {number|null} [type] Mission type
         * @property {string|null} [param] Mission param
         * @property {number|null} [goal] Mission goal
         * @property {number|null} [score] Mission score
         * @property {number|null} [reward_quality] Mission reward_quality
         * @property {number|null} [status] Mission status
         */

        /**
         * Constructs a new Mission.
         * @memberof pbm
         * @classdesc Represents a Mission.
         * @implements IMission
         * @constructor
         * @param {pbm.IMission=} [properties] Properties to set
         */
        function Mission(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Mission id.
         * @member {number} id
         * @memberof pbm.Mission
         * @instance
         */
        Mission.prototype.id = 0;

        /**
         * Mission type.
         * @member {number} type
         * @memberof pbm.Mission
         * @instance
         */
        Mission.prototype.type = 0;

        /**
         * Mission param.
         * @member {string} param
         * @memberof pbm.Mission
         * @instance
         */
        Mission.prototype.param = "";

        /**
         * Mission goal.
         * @member {number} goal
         * @memberof pbm.Mission
         * @instance
         */
        Mission.prototype.goal = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Mission score.
         * @member {number} score
         * @memberof pbm.Mission
         * @instance
         */
        Mission.prototype.score = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Mission reward_quality.
         * @member {number} reward_quality
         * @memberof pbm.Mission
         * @instance
         */
        Mission.prototype.reward_quality = 0;

        /**
         * Mission status.
         * @member {number} status
         * @memberof pbm.Mission
         * @instance
         */
        Mission.prototype.status = 0;

        /**
         * Creates a new Mission instance using the specified properties.
         * @function create
         * @memberof pbm.Mission
         * @static
         * @param {pbm.IMission=} [properties] Properties to set
         * @returns {pbm.Mission} Mission instance
         */
        Mission.create = function create(properties) {
            return new Mission(properties);
        };

        /**
         * Encodes the specified Mission message. Does not implicitly {@link pbm.Mission.verify|verify} messages.
         * @function encode
         * @memberof pbm.Mission
         * @static
         * @param {pbm.IMission} message Mission message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Mission.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
            if (message.param != null && message.hasOwnProperty("param"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.param);
            if (message.goal != null && message.hasOwnProperty("goal"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.goal);
            if (message.score != null && message.hasOwnProperty("score"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.score);
            if (message.reward_quality != null && message.hasOwnProperty("reward_quality"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.reward_quality);
            if (message.status != null && message.hasOwnProperty("status"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.status);
            return writer;
        };

        /**
         * Decodes a Mission message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.Mission
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.Mission} Mission
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Mission.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.Mission();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    message.type = reader.int32();
                    break;
                case 3:
                    message.param = reader.string();
                    break;
                case 4:
                    message.goal = reader.int64();
                    break;
                case 5:
                    message.score = reader.int64();
                    break;
                case 6:
                    message.reward_quality = reader.int32();
                    break;
                case 7:
                    message.status = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return Mission;
    })();

    /**
     * EMissionType enum.
     * @name pbm.EMissionType
     * @enum {string}
     * @property {number} EMissionTypeNone=0 EMissionTypeNone value
     * @property {number} EMTDailyConsume=1 EMTDailyConsume value
     * @property {number} EMTDailyRecover=2 EMTDailyRecover value
     */
    pbm.EMissionType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "EMissionTypeNone"] = 0;
        values[valuesById[1] = "EMTDailyConsume"] = 1;
        values[valuesById[2] = "EMTDailyRecover"] = 2;
        return values;
    })();

    /**
     * EMissionStatus enum.
     * @name pbm.EMissionStatus
     * @enum {string}
     * @property {number} EMissionStatusNone=0 EMissionStatusNone value
     * @property {number} EMSUnclaimable=1 EMSUnclaimable value
     * @property {number} EMSClaimable=2 EMSClaimable value
     * @property {number} EMSClaimed=3 EMSClaimed value
     */
    pbm.EMissionStatus = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "EMissionStatusNone"] = 0;
        values[valuesById[1] = "EMSUnclaimable"] = 1;
        values[valuesById[2] = "EMSClaimable"] = 2;
        values[valuesById[3] = "EMSClaimed"] = 3;
        return values;
    })();

    /**
     * ERewardQuality enum.
     * @name pbm.ERewardQuality
     * @enum {string}
     * @property {number} ERewardQualityNone=0 ERewardQualityNone value
     * @property {number} ERQNormal=1 ERQNormal value
     * @property {number} ERQGood=2 ERQGood value
     * @property {number} ERQSuperior=3 ERQSuperior value
     * @property {number} ERQInfinity=100 ERQInfinity value
     */
    pbm.ERewardQuality = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ERewardQualityNone"] = 0;
        values[valuesById[1] = "ERQNormal"] = 1;
        values[valuesById[2] = "ERQGood"] = 2;
        values[valuesById[3] = "ERQSuperior"] = 3;
        values[valuesById[100] = "ERQInfinity"] = 100;
        return values;
    })();

    pbm.MissionInfoRes = (function() {

        /**
         * Properties of a MissionInfoRes.
         * @memberof pbm
         * @interface IMissionInfoRes
         * @property {Array.<pbm.IMission>|null} [missions] MissionInfoRes missions
         */

        /**
         * Constructs a new MissionInfoRes.
         * @memberof pbm
         * @classdesc Represents a MissionInfoRes.
         * @implements IMissionInfoRes
         * @constructor
         * @param {pbm.IMissionInfoRes=} [properties] Properties to set
         */
        function MissionInfoRes(properties) {
            this.missions = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MissionInfoRes missions.
         * @member {Array.<pbm.IMission>} missions
         * @memberof pbm.MissionInfoRes
         * @instance
         */
        MissionInfoRes.prototype.missions = $util.emptyArray;

        /**
         * Creates a new MissionInfoRes instance using the specified properties.
         * @function create
         * @memberof pbm.MissionInfoRes
         * @static
         * @param {pbm.IMissionInfoRes=} [properties] Properties to set
         * @returns {pbm.MissionInfoRes} MissionInfoRes instance
         */
        MissionInfoRes.create = function create(properties) {
            return new MissionInfoRes(properties);
        };

        /**
         * Encodes the specified MissionInfoRes message. Does not implicitly {@link pbm.MissionInfoRes.verify|verify} messages.
         * @function encode
         * @memberof pbm.MissionInfoRes
         * @static
         * @param {pbm.IMissionInfoRes} message MissionInfoRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MissionInfoRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.missions != null && message.missions.length)
                for (var i = 0; i < message.missions.length; ++i)
                    $root.pbm.Mission.encode(message.missions[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a MissionInfoRes message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.MissionInfoRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.MissionInfoRes} MissionInfoRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MissionInfoRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.MissionInfoRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.missions && message.missions.length))
                        message.missions = [];
                    message.missions.push($root.pbm.Mission.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return MissionInfoRes;
    })();

    pbm.MissionRewardReq = (function() {

        /**
         * Properties of a MissionRewardReq.
         * @memberof pbm
         * @interface IMissionRewardReq
         * @property {number|null} [id] MissionRewardReq id
         */

        /**
         * Constructs a new MissionRewardReq.
         * @memberof pbm
         * @classdesc Represents a MissionRewardReq.
         * @implements IMissionRewardReq
         * @constructor
         * @param {pbm.IMissionRewardReq=} [properties] Properties to set
         */
        function MissionRewardReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MissionRewardReq id.
         * @member {number} id
         * @memberof pbm.MissionRewardReq
         * @instance
         */
        MissionRewardReq.prototype.id = 0;

        /**
         * Creates a new MissionRewardReq instance using the specified properties.
         * @function create
         * @memberof pbm.MissionRewardReq
         * @static
         * @param {pbm.IMissionRewardReq=} [properties] Properties to set
         * @returns {pbm.MissionRewardReq} MissionRewardReq instance
         */
        MissionRewardReq.create = function create(properties) {
            return new MissionRewardReq(properties);
        };

        /**
         * Encodes the specified MissionRewardReq message. Does not implicitly {@link pbm.MissionRewardReq.verify|verify} messages.
         * @function encode
         * @memberof pbm.MissionRewardReq
         * @static
         * @param {pbm.IMissionRewardReq} message MissionRewardReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MissionRewardReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            return writer;
        };

        /**
         * Decodes a MissionRewardReq message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.MissionRewardReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.MissionRewardReq} MissionRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MissionRewardReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.MissionRewardReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return MissionRewardReq;
    })();

    pbm.MissionRewardRes = (function() {

        /**
         * Properties of a MissionRewardRes.
         * @memberof pbm
         * @interface IMissionRewardRes
         * @property {common.IResult|null} [result] MissionRewardRes result
         * @property {commodity.ICommodityReward|null} [rewards] MissionRewardRes rewards
         * @property {Array.<commodity.ICommodityReward>|null} [others] MissionRewardRes others
         * @property {number|null} [id] MissionRewardRes id
         */

        /**
         * Constructs a new MissionRewardRes.
         * @memberof pbm
         * @classdesc Represents a MissionRewardRes.
         * @implements IMissionRewardRes
         * @constructor
         * @param {pbm.IMissionRewardRes=} [properties] Properties to set
         */
        function MissionRewardRes(properties) {
            this.others = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MissionRewardRes result.
         * @member {common.IResult|null|undefined} result
         * @memberof pbm.MissionRewardRes
         * @instance
         */
        MissionRewardRes.prototype.result = null;

        /**
         * MissionRewardRes rewards.
         * @member {commodity.ICommodityReward|null|undefined} rewards
         * @memberof pbm.MissionRewardRes
         * @instance
         */
        MissionRewardRes.prototype.rewards = null;

        /**
         * MissionRewardRes others.
         * @member {Array.<commodity.ICommodityReward>} others
         * @memberof pbm.MissionRewardRes
         * @instance
         */
        MissionRewardRes.prototype.others = $util.emptyArray;

        /**
         * MissionRewardRes id.
         * @member {number} id
         * @memberof pbm.MissionRewardRes
         * @instance
         */
        MissionRewardRes.prototype.id = 0;

        /**
         * Creates a new MissionRewardRes instance using the specified properties.
         * @function create
         * @memberof pbm.MissionRewardRes
         * @static
         * @param {pbm.IMissionRewardRes=} [properties] Properties to set
         * @returns {pbm.MissionRewardRes} MissionRewardRes instance
         */
        MissionRewardRes.create = function create(properties) {
            return new MissionRewardRes(properties);
        };

        /**
         * Encodes the specified MissionRewardRes message. Does not implicitly {@link pbm.MissionRewardRes.verify|verify} messages.
         * @function encode
         * @memberof pbm.MissionRewardRes
         * @static
         * @param {pbm.IMissionRewardRes} message MissionRewardRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MissionRewardRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && message.hasOwnProperty("result"))
                $root.common.Result.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.rewards != null && message.hasOwnProperty("rewards"))
                $root.commodity.CommodityReward.encode(message.rewards, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.others != null && message.others.length)
                for (var i = 0; i < message.others.length; ++i)
                    $root.commodity.CommodityReward.encode(message.others[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.id);
            return writer;
        };

        /**
         * Decodes a MissionRewardRes message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.MissionRewardRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.MissionRewardRes} MissionRewardRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MissionRewardRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.MissionRewardRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = $root.common.Result.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.rewards = $root.commodity.CommodityReward.decode(reader, reader.uint32());
                    break;
                case 3:
                    if (!(message.others && message.others.length))
                        message.others = [];
                    message.others.push($root.commodity.CommodityReward.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.id = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return MissionRewardRes;
    })();

    pbm.GetTaskEntranceReq = (function() {

        /**
         * Properties of a GetTaskEntranceReq.
         * @memberof pbm
         * @interface IGetTaskEntranceReq
         */

        /**
         * Constructs a new GetTaskEntranceReq.
         * @memberof pbm
         * @classdesc Represents a GetTaskEntranceReq.
         * @implements IGetTaskEntranceReq
         * @constructor
         * @param {pbm.IGetTaskEntranceReq=} [properties] Properties to set
         */
        function GetTaskEntranceReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GetTaskEntranceReq instance using the specified properties.
         * @function create
         * @memberof pbm.GetTaskEntranceReq
         * @static
         * @param {pbm.IGetTaskEntranceReq=} [properties] Properties to set
         * @returns {pbm.GetTaskEntranceReq} GetTaskEntranceReq instance
         */
        GetTaskEntranceReq.create = function create(properties) {
            return new GetTaskEntranceReq(properties);
        };

        /**
         * Encodes the specified GetTaskEntranceReq message. Does not implicitly {@link pbm.GetTaskEntranceReq.verify|verify} messages.
         * @function encode
         * @memberof pbm.GetTaskEntranceReq
         * @static
         * @param {pbm.IGetTaskEntranceReq} message GetTaskEntranceReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetTaskEntranceReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Decodes a GetTaskEntranceReq message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.GetTaskEntranceReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.GetTaskEntranceReq} GetTaskEntranceReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetTaskEntranceReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.GetTaskEntranceReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return GetTaskEntranceReq;
    })();

    pbm.GetTaskEntranceRes = (function() {

        /**
         * Properties of a GetTaskEntranceRes.
         * @memberof pbm
         * @interface IGetTaskEntranceRes
         * @property {number|null} [code] GetTaskEntranceRes code
         * @property {string|null} [msg] GetTaskEntranceRes msg
         * @property {number|null} [sequence] GetTaskEntranceRes sequence
         * @property {number|null} [userType] GetTaskEntranceRes userType
         * @property {number|null} [taskStatus] GetTaskEntranceRes taskStatus
         * @property {number|null} [leftTime] GetTaskEntranceRes leftTime
         * @property {boolean|null} [hasUnclaimedReward] GetTaskEntranceRes hasUnclaimedReward
         */

        /**
         * Constructs a new GetTaskEntranceRes.
         * @memberof pbm
         * @classdesc Represents a GetTaskEntranceRes.
         * @implements IGetTaskEntranceRes
         * @constructor
         * @param {pbm.IGetTaskEntranceRes=} [properties] Properties to set
         */
        function GetTaskEntranceRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetTaskEntranceRes code.
         * @member {number} code
         * @memberof pbm.GetTaskEntranceRes
         * @instance
         */
        GetTaskEntranceRes.prototype.code = 0;

        /**
         * GetTaskEntranceRes msg.
         * @member {string} msg
         * @memberof pbm.GetTaskEntranceRes
         * @instance
         */
        GetTaskEntranceRes.prototype.msg = "";

        /**
         * GetTaskEntranceRes sequence.
         * @member {number} sequence
         * @memberof pbm.GetTaskEntranceRes
         * @instance
         */
        GetTaskEntranceRes.prototype.sequence = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GetTaskEntranceRes userType.
         * @member {number} userType
         * @memberof pbm.GetTaskEntranceRes
         * @instance
         */
        GetTaskEntranceRes.prototype.userType = 0;

        /**
         * GetTaskEntranceRes taskStatus.
         * @member {number} taskStatus
         * @memberof pbm.GetTaskEntranceRes
         * @instance
         */
        GetTaskEntranceRes.prototype.taskStatus = 0;

        /**
         * GetTaskEntranceRes leftTime.
         * @member {number} leftTime
         * @memberof pbm.GetTaskEntranceRes
         * @instance
         */
        GetTaskEntranceRes.prototype.leftTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GetTaskEntranceRes hasUnclaimedReward.
         * @member {boolean} hasUnclaimedReward
         * @memberof pbm.GetTaskEntranceRes
         * @instance
         */
        GetTaskEntranceRes.prototype.hasUnclaimedReward = false;

        /**
         * Creates a new GetTaskEntranceRes instance using the specified properties.
         * @function create
         * @memberof pbm.GetTaskEntranceRes
         * @static
         * @param {pbm.IGetTaskEntranceRes=} [properties] Properties to set
         * @returns {pbm.GetTaskEntranceRes} GetTaskEntranceRes instance
         */
        GetTaskEntranceRes.create = function create(properties) {
            return new GetTaskEntranceRes(properties);
        };

        /**
         * Encodes the specified GetTaskEntranceRes message. Does not implicitly {@link pbm.GetTaskEntranceRes.verify|verify} messages.
         * @function encode
         * @memberof pbm.GetTaskEntranceRes
         * @static
         * @param {pbm.IGetTaskEntranceRes} message GetTaskEntranceRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetTaskEntranceRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && message.hasOwnProperty("code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && message.hasOwnProperty("msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.sequence != null && message.hasOwnProperty("sequence"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.sequence);
            if (message.userType != null && message.hasOwnProperty("userType"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.userType);
            if (message.taskStatus != null && message.hasOwnProperty("taskStatus"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.taskStatus);
            if (message.leftTime != null && message.hasOwnProperty("leftTime"))
                writer.uint32(/* id 12, wireType 0 =*/96).int64(message.leftTime);
            if (message.hasUnclaimedReward != null && message.hasOwnProperty("hasUnclaimedReward"))
                writer.uint32(/* id 13, wireType 0 =*/104).bool(message.hasUnclaimedReward);
            return writer;
        };

        /**
         * Decodes a GetTaskEntranceRes message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.GetTaskEntranceRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.GetTaskEntranceRes} GetTaskEntranceRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetTaskEntranceRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.GetTaskEntranceRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.int32();
                    break;
                case 2:
                    message.msg = reader.string();
                    break;
                case 3:
                    message.sequence = reader.int64();
                    break;
                case 10:
                    message.userType = reader.int32();
                    break;
                case 11:
                    message.taskStatus = reader.int32();
                    break;
                case 12:
                    message.leftTime = reader.int64();
                    break;
                case 13:
                    message.hasUnclaimedReward = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return GetTaskEntranceRes;
    })();

    pbm.GetGameConfigReq = (function() {

        /**
         * Properties of a GetGameConfigReq.
         * @memberof pbm
         * @interface IGetGameConfigReq
         */

        /**
         * Constructs a new GetGameConfigReq.
         * @memberof pbm
         * @classdesc Represents a GetGameConfigReq.
         * @implements IGetGameConfigReq
         * @constructor
         * @param {pbm.IGetGameConfigReq=} [properties] Properties to set
         */
        function GetGameConfigReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GetGameConfigReq instance using the specified properties.
         * @function create
         * @memberof pbm.GetGameConfigReq
         * @static
         * @param {pbm.IGetGameConfigReq=} [properties] Properties to set
         * @returns {pbm.GetGameConfigReq} GetGameConfigReq instance
         */
        GetGameConfigReq.create = function create(properties) {
            return new GetGameConfigReq(properties);
        };

        /**
         * Encodes the specified GetGameConfigReq message. Does not implicitly {@link pbm.GetGameConfigReq.verify|verify} messages.
         * @function encode
         * @memberof pbm.GetGameConfigReq
         * @static
         * @param {pbm.IGetGameConfigReq} message GetGameConfigReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetGameConfigReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Decodes a GetGameConfigReq message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.GetGameConfigReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.GetGameConfigReq} GetGameConfigReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetGameConfigReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.GetGameConfigReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return GetGameConfigReq;
    })();

    pbm.Gear = (function() {

        /**
         * Properties of a Gear.
         * @memberof pbm
         * @interface IGear
         * @property {number|null} [amount] Gear amount
         */

        /**
         * Constructs a new Gear.
         * @memberof pbm
         * @classdesc Represents a Gear.
         * @implements IGear
         * @constructor
         * @param {pbm.IGear=} [properties] Properties to set
         */
        function Gear(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Gear amount.
         * @member {number} amount
         * @memberof pbm.Gear
         * @instance
         */
        Gear.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Gear instance using the specified properties.
         * @function create
         * @memberof pbm.Gear
         * @static
         * @param {pbm.IGear=} [properties] Properties to set
         * @returns {pbm.Gear} Gear instance
         */
        Gear.create = function create(properties) {
            return new Gear(properties);
        };

        /**
         * Encodes the specified Gear message. Does not implicitly {@link pbm.Gear.verify|verify} messages.
         * @function encode
         * @memberof pbm.Gear
         * @static
         * @param {pbm.IGear} message Gear message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Gear.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.amount != null && message.hasOwnProperty("amount"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.amount);
            return writer;
        };

        /**
         * Decodes a Gear message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.Gear
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.Gear} Gear
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Gear.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.Gear();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.amount = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return Gear;
    })();

    pbm.BetConfig = (function() {

        /**
         * Properties of a BetConfig.
         * @memberof pbm
         * @interface IBetConfig
         * @property {Array.<pbm.IGear>|null} [gears] BetConfig gears
         * @property {Array.<number>|null} [auto_rounds] BetConfig auto_rounds
         * @property {number|null} [max_bet_amount] BetConfig max_bet_amount
         * @property {number|null} [min_bet_amount] BetConfig min_bet_amount
         */

        /**
         * Constructs a new BetConfig.
         * @memberof pbm
         * @classdesc Represents a BetConfig.
         * @implements IBetConfig
         * @constructor
         * @param {pbm.IBetConfig=} [properties] Properties to set
         */
        function BetConfig(properties) {
            this.gears = [];
            this.auto_rounds = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BetConfig gears.
         * @member {Array.<pbm.IGear>} gears
         * @memberof pbm.BetConfig
         * @instance
         */
        BetConfig.prototype.gears = $util.emptyArray;

        /**
         * BetConfig auto_rounds.
         * @member {Array.<number>} auto_rounds
         * @memberof pbm.BetConfig
         * @instance
         */
        BetConfig.prototype.auto_rounds = $util.emptyArray;

        /**
         * BetConfig max_bet_amount.
         * @member {number} max_bet_amount
         * @memberof pbm.BetConfig
         * @instance
         */
        BetConfig.prototype.max_bet_amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BetConfig min_bet_amount.
         * @member {number} min_bet_amount
         * @memberof pbm.BetConfig
         * @instance
         */
        BetConfig.prototype.min_bet_amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new BetConfig instance using the specified properties.
         * @function create
         * @memberof pbm.BetConfig
         * @static
         * @param {pbm.IBetConfig=} [properties] Properties to set
         * @returns {pbm.BetConfig} BetConfig instance
         */
        BetConfig.create = function create(properties) {
            return new BetConfig(properties);
        };

        /**
         * Encodes the specified BetConfig message. Does not implicitly {@link pbm.BetConfig.verify|verify} messages.
         * @function encode
         * @memberof pbm.BetConfig
         * @static
         * @param {pbm.IBetConfig} message BetConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.gears != null && message.gears.length)
                for (var i = 0; i < message.gears.length; ++i)
                    $root.pbm.Gear.encode(message.gears[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.auto_rounds != null && message.auto_rounds.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (var i = 0; i < message.auto_rounds.length; ++i)
                    writer.int64(message.auto_rounds[i]);
                writer.ldelim();
            }
            if (message.max_bet_amount != null && message.hasOwnProperty("max_bet_amount"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.max_bet_amount);
            if (message.min_bet_amount != null && message.hasOwnProperty("min_bet_amount"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.min_bet_amount);
            return writer;
        };

        /**
         * Decodes a BetConfig message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.BetConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.BetConfig} BetConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetConfig.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.BetConfig();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.gears && message.gears.length))
                        message.gears = [];
                    message.gears.push($root.pbm.Gear.decode(reader, reader.uint32()));
                    break;
                case 2:
                    if (!(message.auto_rounds && message.auto_rounds.length))
                        message.auto_rounds = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.auto_rounds.push(reader.int64());
                    } else
                        message.auto_rounds.push(reader.int64());
                    break;
                case 3:
                    message.max_bet_amount = reader.int64();
                    break;
                case 4:
                    message.min_bet_amount = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return BetConfig;
    })();

    pbm.Speed = (function() {

        /**
         * Properties of a Speed.
         * @memberof pbm
         * @interface ISpeed
         * @property {number|null} [begin] Speed begin
         * @property {number|null} [end] Speed end
         * @property {number|null} [mill_sec] Speed mill_sec
         */

        /**
         * Constructs a new Speed.
         * @memberof pbm
         * @classdesc Represents a Speed.
         * @implements ISpeed
         * @constructor
         * @param {pbm.ISpeed=} [properties] Properties to set
         */
        function Speed(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Speed begin.
         * @member {number} begin
         * @memberof pbm.Speed
         * @instance
         */
        Speed.prototype.begin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Speed end.
         * @member {number} end
         * @memberof pbm.Speed
         * @instance
         */
        Speed.prototype.end = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Speed mill_sec.
         * @member {number} mill_sec
         * @memberof pbm.Speed
         * @instance
         */
        Speed.prototype.mill_sec = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Speed instance using the specified properties.
         * @function create
         * @memberof pbm.Speed
         * @static
         * @param {pbm.ISpeed=} [properties] Properties to set
         * @returns {pbm.Speed} Speed instance
         */
        Speed.create = function create(properties) {
            return new Speed(properties);
        };

        /**
         * Encodes the specified Speed message. Does not implicitly {@link pbm.Speed.verify|verify} messages.
         * @function encode
         * @memberof pbm.Speed
         * @static
         * @param {pbm.ISpeed} message Speed message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Speed.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.begin != null && message.hasOwnProperty("begin"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.begin);
            if (message.end != null && message.hasOwnProperty("end"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.end);
            if (message.mill_sec != null && message.hasOwnProperty("mill_sec"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.mill_sec);
            return writer;
        };

        /**
         * Decodes a Speed message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.Speed
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.Speed} Speed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Speed.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.Speed();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.begin = reader.int64();
                    break;
                case 2:
                    message.end = reader.int64();
                    break;
                case 3:
                    message.mill_sec = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return Speed;
    })();

    pbm.RocketConfig = (function() {

        /**
         * Properties of a RocketConfig.
         * @memberof pbm
         * @interface IRocketConfig
         * @property {Array.<pbm.ISpeed>|null} [speeds] RocketConfig speeds
         * @property {number|null} [max_multiple] RocketConfig max_multiple
         * @property {number|null} [choose_sec] RocketConfig choose_sec
         * @property {number|null} [prepare_sec] RocketConfig prepare_sec
         * @property {number|null} [bomb_sec] RocketConfig bomb_sec
         */

        /**
         * Constructs a new RocketConfig.
         * @memberof pbm
         * @classdesc Represents a RocketConfig.
         * @implements IRocketConfig
         * @constructor
         * @param {pbm.IRocketConfig=} [properties] Properties to set
         */
        function RocketConfig(properties) {
            this.speeds = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RocketConfig speeds.
         * @member {Array.<pbm.ISpeed>} speeds
         * @memberof pbm.RocketConfig
         * @instance
         */
        RocketConfig.prototype.speeds = $util.emptyArray;

        /**
         * RocketConfig max_multiple.
         * @member {number} max_multiple
         * @memberof pbm.RocketConfig
         * @instance
         */
        RocketConfig.prototype.max_multiple = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RocketConfig choose_sec.
         * @member {number} choose_sec
         * @memberof pbm.RocketConfig
         * @instance
         */
        RocketConfig.prototype.choose_sec = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RocketConfig prepare_sec.
         * @member {number} prepare_sec
         * @memberof pbm.RocketConfig
         * @instance
         */
        RocketConfig.prototype.prepare_sec = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RocketConfig bomb_sec.
         * @member {number} bomb_sec
         * @memberof pbm.RocketConfig
         * @instance
         */
        RocketConfig.prototype.bomb_sec = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new RocketConfig instance using the specified properties.
         * @function create
         * @memberof pbm.RocketConfig
         * @static
         * @param {pbm.IRocketConfig=} [properties] Properties to set
         * @returns {pbm.RocketConfig} RocketConfig instance
         */
        RocketConfig.create = function create(properties) {
            return new RocketConfig(properties);
        };

        /**
         * Encodes the specified RocketConfig message. Does not implicitly {@link pbm.RocketConfig.verify|verify} messages.
         * @function encode
         * @memberof pbm.RocketConfig
         * @static
         * @param {pbm.IRocketConfig} message RocketConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RocketConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.speeds != null && message.speeds.length)
                for (var i = 0; i < message.speeds.length; ++i)
                    $root.pbm.Speed.encode(message.speeds[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.max_multiple != null && message.hasOwnProperty("max_multiple"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.max_multiple);
            if (message.choose_sec != null && message.hasOwnProperty("choose_sec"))
                writer.uint32(/* id 10, wireType 0 =*/80).int64(message.choose_sec);
            if (message.prepare_sec != null && message.hasOwnProperty("prepare_sec"))
                writer.uint32(/* id 11, wireType 0 =*/88).int64(message.prepare_sec);
            if (message.bomb_sec != null && message.hasOwnProperty("bomb_sec"))
                writer.uint32(/* id 12, wireType 0 =*/96).int64(message.bomb_sec);
            return writer;
        };

        /**
         * Decodes a RocketConfig message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.RocketConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.RocketConfig} RocketConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RocketConfig.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.RocketConfig();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.speeds && message.speeds.length))
                        message.speeds = [];
                    message.speeds.push($root.pbm.Speed.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.max_multiple = reader.int64();
                    break;
                case 10:
                    message.choose_sec = reader.int64();
                    break;
                case 11:
                    message.prepare_sec = reader.int64();
                    break;
                case 12:
                    message.bomb_sec = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return RocketConfig;
    })();

    pbm.RankRewardConfig = (function() {

        /**
         * Properties of a RankRewardConfig.
         * @memberof pbm
         * @interface IRankRewardConfig
         * @property {number|null} [rank] RankRewardConfig rank
         * @property {commodity.ICommodityReward|null} [reward] RankRewardConfig reward
         */

        /**
         * Constructs a new RankRewardConfig.
         * @memberof pbm
         * @classdesc Represents a RankRewardConfig.
         * @implements IRankRewardConfig
         * @constructor
         * @param {pbm.IRankRewardConfig=} [properties] Properties to set
         */
        function RankRewardConfig(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RankRewardConfig rank.
         * @member {number} rank
         * @memberof pbm.RankRewardConfig
         * @instance
         */
        RankRewardConfig.prototype.rank = 0;

        /**
         * RankRewardConfig reward.
         * @member {commodity.ICommodityReward|null|undefined} reward
         * @memberof pbm.RankRewardConfig
         * @instance
         */
        RankRewardConfig.prototype.reward = null;

        /**
         * Creates a new RankRewardConfig instance using the specified properties.
         * @function create
         * @memberof pbm.RankRewardConfig
         * @static
         * @param {pbm.IRankRewardConfig=} [properties] Properties to set
         * @returns {pbm.RankRewardConfig} RankRewardConfig instance
         */
        RankRewardConfig.create = function create(properties) {
            return new RankRewardConfig(properties);
        };

        /**
         * Encodes the specified RankRewardConfig message. Does not implicitly {@link pbm.RankRewardConfig.verify|verify} messages.
         * @function encode
         * @memberof pbm.RankRewardConfig
         * @static
         * @param {pbm.IRankRewardConfig} message RankRewardConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RankRewardConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.rank != null && message.hasOwnProperty("rank"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.rank);
            if (message.reward != null && message.hasOwnProperty("reward"))
                $root.commodity.CommodityReward.encode(message.reward, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a RankRewardConfig message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.RankRewardConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.RankRewardConfig} RankRewardConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RankRewardConfig.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.RankRewardConfig();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.rank = reader.int32();
                    break;
                case 2:
                    message.reward = $root.commodity.CommodityReward.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return RankRewardConfig;
    })();

    pbm.GetGameConfigRes = (function() {

        /**
         * Properties of a GetGameConfigRes.
         * @memberof pbm
         * @interface IGetGameConfigRes
         * @property {common.IResult|null} [result] GetGameConfigRes result
         * @property {pbm.IBetConfig|null} [bet] GetGameConfigRes bet
         * @property {pbm.IRocketConfig|null} [rocket] GetGameConfigRes rocket
         * @property {Array.<net.ihago.money.api.metadata.ICommoditySpecified>|null} [preload_rewards] GetGameConfigRes preload_rewards
         * @property {Array.<pbm.IRankRewardConfig>|null} [rank_rewards] GetGameConfigRes rank_rewards
         */

        /**
         * Constructs a new GetGameConfigRes.
         * @memberof pbm
         * @classdesc Represents a GetGameConfigRes.
         * @implements IGetGameConfigRes
         * @constructor
         * @param {pbm.IGetGameConfigRes=} [properties] Properties to set
         */
        function GetGameConfigRes(properties) {
            this.preload_rewards = [];
            this.rank_rewards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetGameConfigRes result.
         * @member {common.IResult|null|undefined} result
         * @memberof pbm.GetGameConfigRes
         * @instance
         */
        GetGameConfigRes.prototype.result = null;

        /**
         * GetGameConfigRes bet.
         * @member {pbm.IBetConfig|null|undefined} bet
         * @memberof pbm.GetGameConfigRes
         * @instance
         */
        GetGameConfigRes.prototype.bet = null;

        /**
         * GetGameConfigRes rocket.
         * @member {pbm.IRocketConfig|null|undefined} rocket
         * @memberof pbm.GetGameConfigRes
         * @instance
         */
        GetGameConfigRes.prototype.rocket = null;

        /**
         * GetGameConfigRes preload_rewards.
         * @member {Array.<net.ihago.money.api.metadata.ICommoditySpecified>} preload_rewards
         * @memberof pbm.GetGameConfigRes
         * @instance
         */
        GetGameConfigRes.prototype.preload_rewards = $util.emptyArray;

        /**
         * GetGameConfigRes rank_rewards.
         * @member {Array.<pbm.IRankRewardConfig>} rank_rewards
         * @memberof pbm.GetGameConfigRes
         * @instance
         */
        GetGameConfigRes.prototype.rank_rewards = $util.emptyArray;

        /**
         * Creates a new GetGameConfigRes instance using the specified properties.
         * @function create
         * @memberof pbm.GetGameConfigRes
         * @static
         * @param {pbm.IGetGameConfigRes=} [properties] Properties to set
         * @returns {pbm.GetGameConfigRes} GetGameConfigRes instance
         */
        GetGameConfigRes.create = function create(properties) {
            return new GetGameConfigRes(properties);
        };

        /**
         * Encodes the specified GetGameConfigRes message. Does not implicitly {@link pbm.GetGameConfigRes.verify|verify} messages.
         * @function encode
         * @memberof pbm.GetGameConfigRes
         * @static
         * @param {pbm.IGetGameConfigRes} message GetGameConfigRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetGameConfigRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && message.hasOwnProperty("result"))
                $root.common.Result.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.bet != null && message.hasOwnProperty("bet"))
                $root.pbm.BetConfig.encode(message.bet, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.rocket != null && message.hasOwnProperty("rocket"))
                $root.pbm.RocketConfig.encode(message.rocket, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.preload_rewards != null && message.preload_rewards.length)
                for (var i = 0; i < message.preload_rewards.length; ++i)
                    $root.net.ihago.money.api.metadata.CommoditySpecified.encode(message.preload_rewards[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.rank_rewards != null && message.rank_rewards.length)
                for (var i = 0; i < message.rank_rewards.length; ++i)
                    $root.pbm.RankRewardConfig.encode(message.rank_rewards[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a GetGameConfigRes message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.GetGameConfigRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.GetGameConfigRes} GetGameConfigRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetGameConfigRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.GetGameConfigRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = $root.common.Result.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.bet = $root.pbm.BetConfig.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.rocket = $root.pbm.RocketConfig.decode(reader, reader.uint32());
                    break;
                case 10:
                    if (!(message.preload_rewards && message.preload_rewards.length))
                        message.preload_rewards = [];
                    message.preload_rewards.push($root.net.ihago.money.api.metadata.CommoditySpecified.decode(reader, reader.uint32()));
                    break;
                case 11:
                    if (!(message.rank_rewards && message.rank_rewards.length))
                        message.rank_rewards = [];
                    message.rank_rewards.push($root.pbm.RankRewardConfig.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return GetGameConfigRes;
    })();

    pbm.FinishGuideReq = (function() {

        /**
         * Properties of a FinishGuideReq.
         * @memberof pbm
         * @interface IFinishGuideReq
         * @property {number|null} [guide] FinishGuideReq guide
         */

        /**
         * Constructs a new FinishGuideReq.
         * @memberof pbm
         * @classdesc Represents a FinishGuideReq.
         * @implements IFinishGuideReq
         * @constructor
         * @param {pbm.IFinishGuideReq=} [properties] Properties to set
         */
        function FinishGuideReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FinishGuideReq guide.
         * @member {number} guide
         * @memberof pbm.FinishGuideReq
         * @instance
         */
        FinishGuideReq.prototype.guide = 0;

        /**
         * Creates a new FinishGuideReq instance using the specified properties.
         * @function create
         * @memberof pbm.FinishGuideReq
         * @static
         * @param {pbm.IFinishGuideReq=} [properties] Properties to set
         * @returns {pbm.FinishGuideReq} FinishGuideReq instance
         */
        FinishGuideReq.create = function create(properties) {
            return new FinishGuideReq(properties);
        };

        /**
         * Encodes the specified FinishGuideReq message. Does not implicitly {@link pbm.FinishGuideReq.verify|verify} messages.
         * @function encode
         * @memberof pbm.FinishGuideReq
         * @static
         * @param {pbm.IFinishGuideReq} message FinishGuideReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FinishGuideReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.guide != null && message.hasOwnProperty("guide"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.guide);
            return writer;
        };

        /**
         * Decodes a FinishGuideReq message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.FinishGuideReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.FinishGuideReq} FinishGuideReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FinishGuideReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.FinishGuideReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.guide = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return FinishGuideReq;
    })();

    pbm.GetCoinReq = (function() {

        /**
         * Properties of a GetCoinReq.
         * @memberof pbm
         * @interface IGetCoinReq
         */

        /**
         * Constructs a new GetCoinReq.
         * @memberof pbm
         * @classdesc Represents a GetCoinReq.
         * @implements IGetCoinReq
         * @constructor
         * @param {pbm.IGetCoinReq=} [properties] Properties to set
         */
        function GetCoinReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GetCoinReq instance using the specified properties.
         * @function create
         * @memberof pbm.GetCoinReq
         * @static
         * @param {pbm.IGetCoinReq=} [properties] Properties to set
         * @returns {pbm.GetCoinReq} GetCoinReq instance
         */
        GetCoinReq.create = function create(properties) {
            return new GetCoinReq(properties);
        };

        /**
         * Encodes the specified GetCoinReq message. Does not implicitly {@link pbm.GetCoinReq.verify|verify} messages.
         * @function encode
         * @memberof pbm.GetCoinReq
         * @static
         * @param {pbm.IGetCoinReq} message GetCoinReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetCoinReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Decodes a GetCoinReq message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.GetCoinReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.GetCoinReq} GetCoinReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetCoinReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.GetCoinReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return GetCoinReq;
    })();

    pbm.GetCoinRes = (function() {

        /**
         * Properties of a GetCoinRes.
         * @memberof pbm
         * @interface IGetCoinRes
         * @property {common.IResult|null} [result] GetCoinRes result
         * @property {number|null} [diamond] GetCoinRes diamond
         */

        /**
         * Constructs a new GetCoinRes.
         * @memberof pbm
         * @classdesc Represents a GetCoinRes.
         * @implements IGetCoinRes
         * @constructor
         * @param {pbm.IGetCoinRes=} [properties] Properties to set
         */
        function GetCoinRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetCoinRes result.
         * @member {common.IResult|null|undefined} result
         * @memberof pbm.GetCoinRes
         * @instance
         */
        GetCoinRes.prototype.result = null;

        /**
         * GetCoinRes diamond.
         * @member {number} diamond
         * @memberof pbm.GetCoinRes
         * @instance
         */
        GetCoinRes.prototype.diamond = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new GetCoinRes instance using the specified properties.
         * @function create
         * @memberof pbm.GetCoinRes
         * @static
         * @param {pbm.IGetCoinRes=} [properties] Properties to set
         * @returns {pbm.GetCoinRes} GetCoinRes instance
         */
        GetCoinRes.create = function create(properties) {
            return new GetCoinRes(properties);
        };

        /**
         * Encodes the specified GetCoinRes message. Does not implicitly {@link pbm.GetCoinRes.verify|verify} messages.
         * @function encode
         * @memberof pbm.GetCoinRes
         * @static
         * @param {pbm.IGetCoinRes} message GetCoinRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetCoinRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && message.hasOwnProperty("result"))
                $root.common.Result.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.diamond != null && message.hasOwnProperty("diamond"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.diamond);
            return writer;
        };

        /**
         * Decodes a GetCoinRes message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.GetCoinRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.GetCoinRes} GetCoinRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetCoinRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.GetCoinRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = $root.common.Result.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.diamond = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return GetCoinRes;
    })();

    pbm.GetVipLevelReq = (function() {

        /**
         * Properties of a GetVipLevelReq.
         * @memberof pbm
         * @interface IGetVipLevelReq
         */

        /**
         * Constructs a new GetVipLevelReq.
         * @memberof pbm
         * @classdesc Represents a GetVipLevelReq.
         * @implements IGetVipLevelReq
         * @constructor
         * @param {pbm.IGetVipLevelReq=} [properties] Properties to set
         */
        function GetVipLevelReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GetVipLevelReq instance using the specified properties.
         * @function create
         * @memberof pbm.GetVipLevelReq
         * @static
         * @param {pbm.IGetVipLevelReq=} [properties] Properties to set
         * @returns {pbm.GetVipLevelReq} GetVipLevelReq instance
         */
        GetVipLevelReq.create = function create(properties) {
            return new GetVipLevelReq(properties);
        };

        /**
         * Encodes the specified GetVipLevelReq message. Does not implicitly {@link pbm.GetVipLevelReq.verify|verify} messages.
         * @function encode
         * @memberof pbm.GetVipLevelReq
         * @static
         * @param {pbm.IGetVipLevelReq} message GetVipLevelReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetVipLevelReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Decodes a GetVipLevelReq message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.GetVipLevelReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.GetVipLevelReq} GetVipLevelReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetVipLevelReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.GetVipLevelReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return GetVipLevelReq;
    })();

    pbm.GetVipLevelRes = (function() {

        /**
         * Properties of a GetVipLevelRes.
         * @memberof pbm
         * @interface IGetVipLevelRes
         * @property {common.IResult|null} [result] GetVipLevelRes result
         * @property {number|null} [vip_level] GetVipLevelRes vip_level
         * @property {number|null} [need_vip_level] GetVipLevelRes need_vip_level
         * @property {boolean|null} [freeze] GetVipLevelRes freeze
         */

        /**
         * Constructs a new GetVipLevelRes.
         * @memberof pbm
         * @classdesc Represents a GetVipLevelRes.
         * @implements IGetVipLevelRes
         * @constructor
         * @param {pbm.IGetVipLevelRes=} [properties] Properties to set
         */
        function GetVipLevelRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetVipLevelRes result.
         * @member {common.IResult|null|undefined} result
         * @memberof pbm.GetVipLevelRes
         * @instance
         */
        GetVipLevelRes.prototype.result = null;

        /**
         * GetVipLevelRes vip_level.
         * @member {number} vip_level
         * @memberof pbm.GetVipLevelRes
         * @instance
         */
        GetVipLevelRes.prototype.vip_level = 0;

        /**
         * GetVipLevelRes need_vip_level.
         * @member {number} need_vip_level
         * @memberof pbm.GetVipLevelRes
         * @instance
         */
        GetVipLevelRes.prototype.need_vip_level = 0;

        /**
         * GetVipLevelRes freeze.
         * @member {boolean} freeze
         * @memberof pbm.GetVipLevelRes
         * @instance
         */
        GetVipLevelRes.prototype.freeze = false;

        /**
         * Creates a new GetVipLevelRes instance using the specified properties.
         * @function create
         * @memberof pbm.GetVipLevelRes
         * @static
         * @param {pbm.IGetVipLevelRes=} [properties] Properties to set
         * @returns {pbm.GetVipLevelRes} GetVipLevelRes instance
         */
        GetVipLevelRes.create = function create(properties) {
            return new GetVipLevelRes(properties);
        };

        /**
         * Encodes the specified GetVipLevelRes message. Does not implicitly {@link pbm.GetVipLevelRes.verify|verify} messages.
         * @function encode
         * @memberof pbm.GetVipLevelRes
         * @static
         * @param {pbm.IGetVipLevelRes} message GetVipLevelRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetVipLevelRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && message.hasOwnProperty("result"))
                $root.common.Result.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.vip_level != null && message.hasOwnProperty("vip_level"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.vip_level);
            if (message.need_vip_level != null && message.hasOwnProperty("need_vip_level"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.need_vip_level);
            if (message.freeze != null && message.hasOwnProperty("freeze"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.freeze);
            return writer;
        };

        /**
         * Decodes a GetVipLevelRes message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.GetVipLevelRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.GetVipLevelRes} GetVipLevelRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetVipLevelRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.GetVipLevelRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = $root.common.Result.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.vip_level = reader.int32();
                    break;
                case 3:
                    message.need_vip_level = reader.int32();
                    break;
                case 4:
                    message.freeze = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return GetVipLevelRes;
    })();

    pbm.GetTodayIncomeReq = (function() {

        /**
         * Properties of a GetTodayIncomeReq.
         * @memberof pbm
         * @interface IGetTodayIncomeReq
         */

        /**
         * Constructs a new GetTodayIncomeReq.
         * @memberof pbm
         * @classdesc Represents a GetTodayIncomeReq.
         * @implements IGetTodayIncomeReq
         * @constructor
         * @param {pbm.IGetTodayIncomeReq=} [properties] Properties to set
         */
        function GetTodayIncomeReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GetTodayIncomeReq instance using the specified properties.
         * @function create
         * @memberof pbm.GetTodayIncomeReq
         * @static
         * @param {pbm.IGetTodayIncomeReq=} [properties] Properties to set
         * @returns {pbm.GetTodayIncomeReq} GetTodayIncomeReq instance
         */
        GetTodayIncomeReq.create = function create(properties) {
            return new GetTodayIncomeReq(properties);
        };

        /**
         * Encodes the specified GetTodayIncomeReq message. Does not implicitly {@link pbm.GetTodayIncomeReq.verify|verify} messages.
         * @function encode
         * @memberof pbm.GetTodayIncomeReq
         * @static
         * @param {pbm.IGetTodayIncomeReq} message GetTodayIncomeReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetTodayIncomeReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Decodes a GetTodayIncomeReq message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.GetTodayIncomeReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.GetTodayIncomeReq} GetTodayIncomeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetTodayIncomeReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.GetTodayIncomeReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return GetTodayIncomeReq;
    })();

    pbm.GetTodayIncomeRes = (function() {

        /**
         * Properties of a GetTodayIncomeRes.
         * @memberof pbm
         * @interface IGetTodayIncomeRes
         * @property {common.IResult|null} [result] GetTodayIncomeRes result
         * @property {number|null} [value] GetTodayIncomeRes value
         */

        /**
         * Constructs a new GetTodayIncomeRes.
         * @memberof pbm
         * @classdesc Represents a GetTodayIncomeRes.
         * @implements IGetTodayIncomeRes
         * @constructor
         * @param {pbm.IGetTodayIncomeRes=} [properties] Properties to set
         */
        function GetTodayIncomeRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetTodayIncomeRes result.
         * @member {common.IResult|null|undefined} result
         * @memberof pbm.GetTodayIncomeRes
         * @instance
         */
        GetTodayIncomeRes.prototype.result = null;

        /**
         * GetTodayIncomeRes value.
         * @member {number} value
         * @memberof pbm.GetTodayIncomeRes
         * @instance
         */
        GetTodayIncomeRes.prototype.value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new GetTodayIncomeRes instance using the specified properties.
         * @function create
         * @memberof pbm.GetTodayIncomeRes
         * @static
         * @param {pbm.IGetTodayIncomeRes=} [properties] Properties to set
         * @returns {pbm.GetTodayIncomeRes} GetTodayIncomeRes instance
         */
        GetTodayIncomeRes.create = function create(properties) {
            return new GetTodayIncomeRes(properties);
        };

        /**
         * Encodes the specified GetTodayIncomeRes message. Does not implicitly {@link pbm.GetTodayIncomeRes.verify|verify} messages.
         * @function encode
         * @memberof pbm.GetTodayIncomeRes
         * @static
         * @param {pbm.IGetTodayIncomeRes} message GetTodayIncomeRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetTodayIncomeRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && message.hasOwnProperty("result"))
                $root.common.Result.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.value != null && message.hasOwnProperty("value"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.value);
            return writer;
        };

        /**
         * Decodes a GetTodayIncomeRes message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.GetTodayIncomeRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.GetTodayIncomeRes} GetTodayIncomeRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetTodayIncomeRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.GetTodayIncomeRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = $root.common.Result.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.value = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return GetTodayIncomeRes;
    })();

    pbm.GetRocketRecordsReq = (function() {

        /**
         * Properties of a GetRocketRecordsReq.
         * @memberof pbm
         * @interface IGetRocketRecordsReq
         */

        /**
         * Constructs a new GetRocketRecordsReq.
         * @memberof pbm
         * @classdesc Represents a GetRocketRecordsReq.
         * @implements IGetRocketRecordsReq
         * @constructor
         * @param {pbm.IGetRocketRecordsReq=} [properties] Properties to set
         */
        function GetRocketRecordsReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GetRocketRecordsReq instance using the specified properties.
         * @function create
         * @memberof pbm.GetRocketRecordsReq
         * @static
         * @param {pbm.IGetRocketRecordsReq=} [properties] Properties to set
         * @returns {pbm.GetRocketRecordsReq} GetRocketRecordsReq instance
         */
        GetRocketRecordsReq.create = function create(properties) {
            return new GetRocketRecordsReq(properties);
        };

        /**
         * Encodes the specified GetRocketRecordsReq message. Does not implicitly {@link pbm.GetRocketRecordsReq.verify|verify} messages.
         * @function encode
         * @memberof pbm.GetRocketRecordsReq
         * @static
         * @param {pbm.IGetRocketRecordsReq} message GetRocketRecordsReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRocketRecordsReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Decodes a GetRocketRecordsReq message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.GetRocketRecordsReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.GetRocketRecordsReq} GetRocketRecordsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRocketRecordsReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.GetRocketRecordsReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return GetRocketRecordsReq;
    })();

    pbm.RocketRecord = (function() {

        /**
         * Properties of a RocketRecord.
         * @memberof pbm
         * @interface IRocketRecord
         * @property {string|null} [round] RocketRecord round
         * @property {number|null} [multiple] RocketRecord multiple
         */

        /**
         * Constructs a new RocketRecord.
         * @memberof pbm
         * @classdesc Represents a RocketRecord.
         * @implements IRocketRecord
         * @constructor
         * @param {pbm.IRocketRecord=} [properties] Properties to set
         */
        function RocketRecord(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RocketRecord round.
         * @member {string} round
         * @memberof pbm.RocketRecord
         * @instance
         */
        RocketRecord.prototype.round = "";

        /**
         * RocketRecord multiple.
         * @member {number} multiple
         * @memberof pbm.RocketRecord
         * @instance
         */
        RocketRecord.prototype.multiple = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new RocketRecord instance using the specified properties.
         * @function create
         * @memberof pbm.RocketRecord
         * @static
         * @param {pbm.IRocketRecord=} [properties] Properties to set
         * @returns {pbm.RocketRecord} RocketRecord instance
         */
        RocketRecord.create = function create(properties) {
            return new RocketRecord(properties);
        };

        /**
         * Encodes the specified RocketRecord message. Does not implicitly {@link pbm.RocketRecord.verify|verify} messages.
         * @function encode
         * @memberof pbm.RocketRecord
         * @static
         * @param {pbm.IRocketRecord} message RocketRecord message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RocketRecord.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.round != null && message.hasOwnProperty("round"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.round);
            if (message.multiple != null && message.hasOwnProperty("multiple"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.multiple);
            return writer;
        };

        /**
         * Decodes a RocketRecord message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.RocketRecord
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.RocketRecord} RocketRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RocketRecord.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.RocketRecord();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.round = reader.string();
                    break;
                case 2:
                    message.multiple = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return RocketRecord;
    })();

    pbm.GetRocketRecordsRes = (function() {

        /**
         * Properties of a GetRocketRecordsRes.
         * @memberof pbm
         * @interface IGetRocketRecordsRes
         * @property {common.IResult|null} [result] GetRocketRecordsRes result
         * @property {Array.<pbm.IRocketRecord>|null} [records] GetRocketRecordsRes records
         */

        /**
         * Constructs a new GetRocketRecordsRes.
         * @memberof pbm
         * @classdesc Represents a GetRocketRecordsRes.
         * @implements IGetRocketRecordsRes
         * @constructor
         * @param {pbm.IGetRocketRecordsRes=} [properties] Properties to set
         */
        function GetRocketRecordsRes(properties) {
            this.records = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetRocketRecordsRes result.
         * @member {common.IResult|null|undefined} result
         * @memberof pbm.GetRocketRecordsRes
         * @instance
         */
        GetRocketRecordsRes.prototype.result = null;

        /**
         * GetRocketRecordsRes records.
         * @member {Array.<pbm.IRocketRecord>} records
         * @memberof pbm.GetRocketRecordsRes
         * @instance
         */
        GetRocketRecordsRes.prototype.records = $util.emptyArray;

        /**
         * Creates a new GetRocketRecordsRes instance using the specified properties.
         * @function create
         * @memberof pbm.GetRocketRecordsRes
         * @static
         * @param {pbm.IGetRocketRecordsRes=} [properties] Properties to set
         * @returns {pbm.GetRocketRecordsRes} GetRocketRecordsRes instance
         */
        GetRocketRecordsRes.create = function create(properties) {
            return new GetRocketRecordsRes(properties);
        };

        /**
         * Encodes the specified GetRocketRecordsRes message. Does not implicitly {@link pbm.GetRocketRecordsRes.verify|verify} messages.
         * @function encode
         * @memberof pbm.GetRocketRecordsRes
         * @static
         * @param {pbm.IGetRocketRecordsRes} message GetRocketRecordsRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRocketRecordsRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && message.hasOwnProperty("result"))
                $root.common.Result.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.records != null && message.records.length)
                for (var i = 0; i < message.records.length; ++i)
                    $root.pbm.RocketRecord.encode(message.records[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a GetRocketRecordsRes message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.GetRocketRecordsRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.GetRocketRecordsRes} GetRocketRecordsRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRocketRecordsRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.GetRocketRecordsRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = $root.common.Result.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.records && message.records.length))
                        message.records = [];
                    message.records.push($root.pbm.RocketRecord.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return GetRocketRecordsRes;
    })();

    pbm.GetRoundRankReq = (function() {

        /**
         * Properties of a GetRoundRankReq.
         * @memberof pbm
         * @interface IGetRoundRankReq
         * @property {string|null} [cid] GetRoundRankReq cid
         * @property {boolean|null} [only_amount] GetRoundRankReq only_amount
         */

        /**
         * Constructs a new GetRoundRankReq.
         * @memberof pbm
         * @classdesc Represents a GetRoundRankReq.
         * @implements IGetRoundRankReq
         * @constructor
         * @param {pbm.IGetRoundRankReq=} [properties] Properties to set
         */
        function GetRoundRankReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetRoundRankReq cid.
         * @member {string} cid
         * @memberof pbm.GetRoundRankReq
         * @instance
         */
        GetRoundRankReq.prototype.cid = "";

        /**
         * GetRoundRankReq only_amount.
         * @member {boolean} only_amount
         * @memberof pbm.GetRoundRankReq
         * @instance
         */
        GetRoundRankReq.prototype.only_amount = false;

        /**
         * Creates a new GetRoundRankReq instance using the specified properties.
         * @function create
         * @memberof pbm.GetRoundRankReq
         * @static
         * @param {pbm.IGetRoundRankReq=} [properties] Properties to set
         * @returns {pbm.GetRoundRankReq} GetRoundRankReq instance
         */
        GetRoundRankReq.create = function create(properties) {
            return new GetRoundRankReq(properties);
        };

        /**
         * Encodes the specified GetRoundRankReq message. Does not implicitly {@link pbm.GetRoundRankReq.verify|verify} messages.
         * @function encode
         * @memberof pbm.GetRoundRankReq
         * @static
         * @param {pbm.IGetRoundRankReq} message GetRoundRankReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRoundRankReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cid != null && message.hasOwnProperty("cid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.cid);
            if (message.only_amount != null && message.hasOwnProperty("only_amount"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.only_amount);
            return writer;
        };

        /**
         * Decodes a GetRoundRankReq message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.GetRoundRankReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.GetRoundRankReq} GetRoundRankReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRoundRankReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.GetRoundRankReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cid = reader.string();
                    break;
                case 2:
                    message.only_amount = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return GetRoundRankReq;
    })();

    pbm.RoundRankItem = (function() {

        /**
         * Properties of a RoundRankItem.
         * @memberof pbm
         * @interface IRoundRankItem
         * @property {string|null} [uid] RoundRankItem uid
         * @property {number|null} [rank] RoundRankItem rank
         * @property {number|null} [amount] RoundRankItem amount
         * @property {number|null} [multiple] RoundRankItem multiple
         * @property {string|null} [nick] RoundRankItem nick
         * @property {string|null} [avatar] RoundRankItem avatar
         */

        /**
         * Constructs a new RoundRankItem.
         * @memberof pbm
         * @classdesc Represents a RoundRankItem.
         * @implements IRoundRankItem
         * @constructor
         * @param {pbm.IRoundRankItem=} [properties] Properties to set
         */
        function RoundRankItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoundRankItem uid.
         * @member {string} uid
         * @memberof pbm.RoundRankItem
         * @instance
         */
        RoundRankItem.prototype.uid = "";

        /**
         * RoundRankItem rank.
         * @member {number} rank
         * @memberof pbm.RoundRankItem
         * @instance
         */
        RoundRankItem.prototype.rank = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RoundRankItem amount.
         * @member {number} amount
         * @memberof pbm.RoundRankItem
         * @instance
         */
        RoundRankItem.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RoundRankItem multiple.
         * @member {number} multiple
         * @memberof pbm.RoundRankItem
         * @instance
         */
        RoundRankItem.prototype.multiple = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RoundRankItem nick.
         * @member {string} nick
         * @memberof pbm.RoundRankItem
         * @instance
         */
        RoundRankItem.prototype.nick = "";

        /**
         * RoundRankItem avatar.
         * @member {string} avatar
         * @memberof pbm.RoundRankItem
         * @instance
         */
        RoundRankItem.prototype.avatar = "";

        /**
         * Creates a new RoundRankItem instance using the specified properties.
         * @function create
         * @memberof pbm.RoundRankItem
         * @static
         * @param {pbm.IRoundRankItem=} [properties] Properties to set
         * @returns {pbm.RoundRankItem} RoundRankItem instance
         */
        RoundRankItem.create = function create(properties) {
            return new RoundRankItem(properties);
        };

        /**
         * Encodes the specified RoundRankItem message. Does not implicitly {@link pbm.RoundRankItem.verify|verify} messages.
         * @function encode
         * @memberof pbm.RoundRankItem
         * @static
         * @param {pbm.IRoundRankItem} message RoundRankItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoundRankItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
            if (message.rank != null && message.hasOwnProperty("rank"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.rank);
            if (message.amount != null && message.hasOwnProperty("amount"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.amount);
            if (message.multiple != null && message.hasOwnProperty("multiple"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.multiple);
            if (message.nick != null && message.hasOwnProperty("nick"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.nick);
            if (message.avatar != null && message.hasOwnProperty("avatar"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.avatar);
            return writer;
        };

        /**
         * Decodes a RoundRankItem message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.RoundRankItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.RoundRankItem} RoundRankItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoundRankItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.RoundRankItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.string();
                    break;
                case 2:
                    message.rank = reader.int64();
                    break;
                case 3:
                    message.amount = reader.int64();
                    break;
                case 4:
                    message.multiple = reader.int64();
                    break;
                case 5:
                    message.nick = reader.string();
                    break;
                case 6:
                    message.avatar = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return RoundRankItem;
    })();

    pbm.GetRoundRankRes = (function() {

        /**
         * Properties of a GetRoundRankRes.
         * @memberof pbm
         * @interface IGetRoundRankRes
         * @property {common.IResult|null} [result] GetRoundRankRes result
         * @property {string|null} [cid] GetRoundRankRes cid
         * @property {string|null} [round] GetRoundRankRes round
         * @property {number|null} [round_bet] GetRoundRankRes round_bet
         * @property {number|null} [round_users] GetRoundRankRes round_users
         * @property {Array.<pbm.IRoundRankItem>|null} [list] GetRoundRankRes list
         */

        /**
         * Constructs a new GetRoundRankRes.
         * @memberof pbm
         * @classdesc Represents a GetRoundRankRes.
         * @implements IGetRoundRankRes
         * @constructor
         * @param {pbm.IGetRoundRankRes=} [properties] Properties to set
         */
        function GetRoundRankRes(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetRoundRankRes result.
         * @member {common.IResult|null|undefined} result
         * @memberof pbm.GetRoundRankRes
         * @instance
         */
        GetRoundRankRes.prototype.result = null;

        /**
         * GetRoundRankRes cid.
         * @member {string} cid
         * @memberof pbm.GetRoundRankRes
         * @instance
         */
        GetRoundRankRes.prototype.cid = "";

        /**
         * GetRoundRankRes round.
         * @member {string} round
         * @memberof pbm.GetRoundRankRes
         * @instance
         */
        GetRoundRankRes.prototype.round = "";

        /**
         * GetRoundRankRes round_bet.
         * @member {number} round_bet
         * @memberof pbm.GetRoundRankRes
         * @instance
         */
        GetRoundRankRes.prototype.round_bet = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GetRoundRankRes round_users.
         * @member {number} round_users
         * @memberof pbm.GetRoundRankRes
         * @instance
         */
        GetRoundRankRes.prototype.round_users = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GetRoundRankRes list.
         * @member {Array.<pbm.IRoundRankItem>} list
         * @memberof pbm.GetRoundRankRes
         * @instance
         */
        GetRoundRankRes.prototype.list = $util.emptyArray;

        /**
         * Creates a new GetRoundRankRes instance using the specified properties.
         * @function create
         * @memberof pbm.GetRoundRankRes
         * @static
         * @param {pbm.IGetRoundRankRes=} [properties] Properties to set
         * @returns {pbm.GetRoundRankRes} GetRoundRankRes instance
         */
        GetRoundRankRes.create = function create(properties) {
            return new GetRoundRankRes(properties);
        };

        /**
         * Encodes the specified GetRoundRankRes message. Does not implicitly {@link pbm.GetRoundRankRes.verify|verify} messages.
         * @function encode
         * @memberof pbm.GetRoundRankRes
         * @static
         * @param {pbm.IGetRoundRankRes} message GetRoundRankRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRoundRankRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && message.hasOwnProperty("result"))
                $root.common.Result.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.cid != null && message.hasOwnProperty("cid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.cid);
            if (message.round != null && message.hasOwnProperty("round"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.round);
            if (message.round_bet != null && message.hasOwnProperty("round_bet"))
                writer.uint32(/* id 11, wireType 0 =*/88).int64(message.round_bet);
            if (message.round_users != null && message.hasOwnProperty("round_users"))
                writer.uint32(/* id 12, wireType 0 =*/96).int64(message.round_users);
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.pbm.RoundRankItem.encode(message.list[i], writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a GetRoundRankRes message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.GetRoundRankRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.GetRoundRankRes} GetRoundRankRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRoundRankRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.GetRoundRankRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = $root.common.Result.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.cid = reader.string();
                    break;
                case 10:
                    message.round = reader.string();
                    break;
                case 11:
                    message.round_bet = reader.int64();
                    break;
                case 12:
                    message.round_users = reader.int64();
                    break;
                case 13:
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.pbm.RoundRankItem.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return GetRoundRankRes;
    })();

    pbm.GetCurrentRoundReq = (function() {

        /**
         * Properties of a GetCurrentRoundReq.
         * @memberof pbm
         * @interface IGetCurrentRoundReq
         */

        /**
         * Constructs a new GetCurrentRoundReq.
         * @memberof pbm
         * @classdesc Represents a GetCurrentRoundReq.
         * @implements IGetCurrentRoundReq
         * @constructor
         * @param {pbm.IGetCurrentRoundReq=} [properties] Properties to set
         */
        function GetCurrentRoundReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GetCurrentRoundReq instance using the specified properties.
         * @function create
         * @memberof pbm.GetCurrentRoundReq
         * @static
         * @param {pbm.IGetCurrentRoundReq=} [properties] Properties to set
         * @returns {pbm.GetCurrentRoundReq} GetCurrentRoundReq instance
         */
        GetCurrentRoundReq.create = function create(properties) {
            return new GetCurrentRoundReq(properties);
        };

        /**
         * Encodes the specified GetCurrentRoundReq message. Does not implicitly {@link pbm.GetCurrentRoundReq.verify|verify} messages.
         * @function encode
         * @memberof pbm.GetCurrentRoundReq
         * @static
         * @param {pbm.IGetCurrentRoundReq} message GetCurrentRoundReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetCurrentRoundReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Decodes a GetCurrentRoundReq message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.GetCurrentRoundReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.GetCurrentRoundReq} GetCurrentRoundReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetCurrentRoundReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.GetCurrentRoundReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return GetCurrentRoundReq;
    })();

    /**
     * EPhase enum.
     * @name pbm.EPhase
     * @enum {string}
     * @property {number} EPhaseNone=0 EPhaseNone value
     * @property {number} EPBet=1 EPBet value
     * @property {number} EPPrepare=2 EPPrepare value
     * @property {number} EPRush=3 EPRush value
     * @property {number} EPBomb=4 EPBomb value
     */
    pbm.EPhase = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "EPhaseNone"] = 0;
        values[valuesById[1] = "EPBet"] = 1;
        values[valuesById[2] = "EPPrepare"] = 2;
        values[valuesById[3] = "EPRush"] = 3;
        values[valuesById[4] = "EPBomb"] = 4;
        return values;
    })();

    pbm.RoundInfo = (function() {

        /**
         * Properties of a RoundInfo.
         * @memberof pbm
         * @interface IRoundInfo
         * @property {string|null} [round] RoundInfo round
         * @property {pbm.EPhase|null} [phase] RoundInfo phase
         * @property {number|null} [phase_ts] RoundInfo phase_ts
         * @property {number|null} [multiple] RoundInfo multiple
         * @property {number|null} [phase_begin_ts] RoundInfo phase_begin_ts
         */

        /**
         * Constructs a new RoundInfo.
         * @memberof pbm
         * @classdesc Represents a RoundInfo.
         * @implements IRoundInfo
         * @constructor
         * @param {pbm.IRoundInfo=} [properties] Properties to set
         */
        function RoundInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoundInfo round.
         * @member {string} round
         * @memberof pbm.RoundInfo
         * @instance
         */
        RoundInfo.prototype.round = "";

        /**
         * RoundInfo phase.
         * @member {pbm.EPhase} phase
         * @memberof pbm.RoundInfo
         * @instance
         */
        RoundInfo.prototype.phase = 0;

        /**
         * RoundInfo phase_ts.
         * @member {number} phase_ts
         * @memberof pbm.RoundInfo
         * @instance
         */
        RoundInfo.prototype.phase_ts = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RoundInfo multiple.
         * @member {number} multiple
         * @memberof pbm.RoundInfo
         * @instance
         */
        RoundInfo.prototype.multiple = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RoundInfo phase_begin_ts.
         * @member {number} phase_begin_ts
         * @memberof pbm.RoundInfo
         * @instance
         */
        RoundInfo.prototype.phase_begin_ts = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new RoundInfo instance using the specified properties.
         * @function create
         * @memberof pbm.RoundInfo
         * @static
         * @param {pbm.IRoundInfo=} [properties] Properties to set
         * @returns {pbm.RoundInfo} RoundInfo instance
         */
        RoundInfo.create = function create(properties) {
            return new RoundInfo(properties);
        };

        /**
         * Encodes the specified RoundInfo message. Does not implicitly {@link pbm.RoundInfo.verify|verify} messages.
         * @function encode
         * @memberof pbm.RoundInfo
         * @static
         * @param {pbm.IRoundInfo} message RoundInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoundInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.round != null && message.hasOwnProperty("round"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.round);
            if (message.phase != null && message.hasOwnProperty("phase"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.phase);
            if (message.phase_ts != null && message.hasOwnProperty("phase_ts"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.phase_ts);
            if (message.multiple != null && message.hasOwnProperty("multiple"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.multiple);
            if (message.phase_begin_ts != null && message.hasOwnProperty("phase_begin_ts"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.phase_begin_ts);
            return writer;
        };

        /**
         * Decodes a RoundInfo message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.RoundInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.RoundInfo} RoundInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoundInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.RoundInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.round = reader.string();
                    break;
                case 2:
                    message.phase = reader.int32();
                    break;
                case 3:
                    message.phase_ts = reader.int64();
                    break;
                case 4:
                    message.multiple = reader.int64();
                    break;
                case 5:
                    message.phase_begin_ts = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return RoundInfo;
    })();

    pbm.GetCurrentRoundRes = (function() {

        /**
         * Properties of a GetCurrentRoundRes.
         * @memberof pbm
         * @interface IGetCurrentRoundRes
         * @property {common.IResult|null} [result] GetCurrentRoundRes result
         * @property {number|null} [choose_amount] GetCurrentRoundRes choose_amount
         * @property {number|null} [auto_multiple] GetCurrentRoundRes auto_multiple
         * @property {number|null} [multiple] GetCurrentRoundRes multiple
         * @property {pbm.IRoundInfo|null} [info] GetCurrentRoundRes info
         * @property {pbm.IAutoInfo|null} [auto_info] GetCurrentRoundRes auto_info
         * @property {number|null} [ticket_amount] GetCurrentRoundRes ticket_amount
         * @property {string|null} [next_round] GetCurrentRoundRes next_round
         * @property {number|null} [srv_ts] GetCurrentRoundRes srv_ts
         * @property {number|null} [next_choose_amount] GetCurrentRoundRes next_choose_amount
         * @property {number|null} [next_auto_multiple] GetCurrentRoundRes next_auto_multiple
         * @property {number|null} [next_ticket_amount] GetCurrentRoundRes next_ticket_amount
         */

        /**
         * Constructs a new GetCurrentRoundRes.
         * @memberof pbm
         * @classdesc Represents a GetCurrentRoundRes.
         * @implements IGetCurrentRoundRes
         * @constructor
         * @param {pbm.IGetCurrentRoundRes=} [properties] Properties to set
         */
        function GetCurrentRoundRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetCurrentRoundRes result.
         * @member {common.IResult|null|undefined} result
         * @memberof pbm.GetCurrentRoundRes
         * @instance
         */
        GetCurrentRoundRes.prototype.result = null;

        /**
         * GetCurrentRoundRes choose_amount.
         * @member {number} choose_amount
         * @memberof pbm.GetCurrentRoundRes
         * @instance
         */
        GetCurrentRoundRes.prototype.choose_amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GetCurrentRoundRes auto_multiple.
         * @member {number} auto_multiple
         * @memberof pbm.GetCurrentRoundRes
         * @instance
         */
        GetCurrentRoundRes.prototype.auto_multiple = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GetCurrentRoundRes multiple.
         * @member {number} multiple
         * @memberof pbm.GetCurrentRoundRes
         * @instance
         */
        GetCurrentRoundRes.prototype.multiple = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GetCurrentRoundRes info.
         * @member {pbm.IRoundInfo|null|undefined} info
         * @memberof pbm.GetCurrentRoundRes
         * @instance
         */
        GetCurrentRoundRes.prototype.info = null;

        /**
         * GetCurrentRoundRes auto_info.
         * @member {pbm.IAutoInfo|null|undefined} auto_info
         * @memberof pbm.GetCurrentRoundRes
         * @instance
         */
        GetCurrentRoundRes.prototype.auto_info = null;

        /**
         * GetCurrentRoundRes ticket_amount.
         * @member {number} ticket_amount
         * @memberof pbm.GetCurrentRoundRes
         * @instance
         */
        GetCurrentRoundRes.prototype.ticket_amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GetCurrentRoundRes next_round.
         * @member {string} next_round
         * @memberof pbm.GetCurrentRoundRes
         * @instance
         */
        GetCurrentRoundRes.prototype.next_round = "";

        /**
         * GetCurrentRoundRes srv_ts.
         * @member {number} srv_ts
         * @memberof pbm.GetCurrentRoundRes
         * @instance
         */
        GetCurrentRoundRes.prototype.srv_ts = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GetCurrentRoundRes next_choose_amount.
         * @member {number} next_choose_amount
         * @memberof pbm.GetCurrentRoundRes
         * @instance
         */
        GetCurrentRoundRes.prototype.next_choose_amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GetCurrentRoundRes next_auto_multiple.
         * @member {number} next_auto_multiple
         * @memberof pbm.GetCurrentRoundRes
         * @instance
         */
        GetCurrentRoundRes.prototype.next_auto_multiple = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GetCurrentRoundRes next_ticket_amount.
         * @member {number} next_ticket_amount
         * @memberof pbm.GetCurrentRoundRes
         * @instance
         */
        GetCurrentRoundRes.prototype.next_ticket_amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new GetCurrentRoundRes instance using the specified properties.
         * @function create
         * @memberof pbm.GetCurrentRoundRes
         * @static
         * @param {pbm.IGetCurrentRoundRes=} [properties] Properties to set
         * @returns {pbm.GetCurrentRoundRes} GetCurrentRoundRes instance
         */
        GetCurrentRoundRes.create = function create(properties) {
            return new GetCurrentRoundRes(properties);
        };

        /**
         * Encodes the specified GetCurrentRoundRes message. Does not implicitly {@link pbm.GetCurrentRoundRes.verify|verify} messages.
         * @function encode
         * @memberof pbm.GetCurrentRoundRes
         * @static
         * @param {pbm.IGetCurrentRoundRes} message GetCurrentRoundRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetCurrentRoundRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && message.hasOwnProperty("result"))
                $root.common.Result.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.choose_amount != null && message.hasOwnProperty("choose_amount"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.choose_amount);
            if (message.auto_multiple != null && message.hasOwnProperty("auto_multiple"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.auto_multiple);
            if (message.multiple != null && message.hasOwnProperty("multiple"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.multiple);
            if (message.info != null && message.hasOwnProperty("info"))
                $root.pbm.RoundInfo.encode(message.info, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.auto_info != null && message.hasOwnProperty("auto_info"))
                $root.pbm.AutoInfo.encode(message.auto_info, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.ticket_amount != null && message.hasOwnProperty("ticket_amount"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.ticket_amount);
            if (message.next_round != null && message.hasOwnProperty("next_round"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.next_round);
            if (message.srv_ts != null && message.hasOwnProperty("srv_ts"))
                writer.uint32(/* id 11, wireType 0 =*/88).int64(message.srv_ts);
            if (message.next_choose_amount != null && message.hasOwnProperty("next_choose_amount"))
                writer.uint32(/* id 12, wireType 0 =*/96).int64(message.next_choose_amount);
            if (message.next_auto_multiple != null && message.hasOwnProperty("next_auto_multiple"))
                writer.uint32(/* id 13, wireType 0 =*/104).int64(message.next_auto_multiple);
            if (message.next_ticket_amount != null && message.hasOwnProperty("next_ticket_amount"))
                writer.uint32(/* id 14, wireType 0 =*/112).int64(message.next_ticket_amount);
            return writer;
        };

        /**
         * Decodes a GetCurrentRoundRes message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.GetCurrentRoundRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.GetCurrentRoundRes} GetCurrentRoundRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetCurrentRoundRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.GetCurrentRoundRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = $root.common.Result.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.choose_amount = reader.int64();
                    break;
                case 3:
                    message.auto_multiple = reader.int64();
                    break;
                case 4:
                    message.multiple = reader.int64();
                    break;
                case 5:
                    message.info = $root.pbm.RoundInfo.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.auto_info = $root.pbm.AutoInfo.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.ticket_amount = reader.int64();
                    break;
                case 10:
                    message.next_round = reader.string();
                    break;
                case 11:
                    message.srv_ts = reader.int64();
                    break;
                case 12:
                    message.next_choose_amount = reader.int64();
                    break;
                case 13:
                    message.next_auto_multiple = reader.int64();
                    break;
                case 14:
                    message.next_ticket_amount = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return GetCurrentRoundRes;
    })();

    pbm.CurrentRoundRes = (function() {

        /**
         * Properties of a CurrentRoundRes.
         * @memberof pbm
         * @interface ICurrentRoundRes
         * @property {pbm.IRoundInfo|null} [info] CurrentRoundRes info
         * @property {string|null} [next_round] CurrentRoundRes next_round
         * @property {number|null} [srv_ts] CurrentRoundRes srv_ts
         * @property {pbm.IRocketConfig|null} [rocket] CurrentRoundRes rocket
         */

        /**
         * Constructs a new CurrentRoundRes.
         * @memberof pbm
         * @classdesc Represents a CurrentRoundRes.
         * @implements ICurrentRoundRes
         * @constructor
         * @param {pbm.ICurrentRoundRes=} [properties] Properties to set
         */
        function CurrentRoundRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CurrentRoundRes info.
         * @member {pbm.IRoundInfo|null|undefined} info
         * @memberof pbm.CurrentRoundRes
         * @instance
         */
        CurrentRoundRes.prototype.info = null;

        /**
         * CurrentRoundRes next_round.
         * @member {string} next_round
         * @memberof pbm.CurrentRoundRes
         * @instance
         */
        CurrentRoundRes.prototype.next_round = "";

        /**
         * CurrentRoundRes srv_ts.
         * @member {number} srv_ts
         * @memberof pbm.CurrentRoundRes
         * @instance
         */
        CurrentRoundRes.prototype.srv_ts = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CurrentRoundRes rocket.
         * @member {pbm.IRocketConfig|null|undefined} rocket
         * @memberof pbm.CurrentRoundRes
         * @instance
         */
        CurrentRoundRes.prototype.rocket = null;

        /**
         * Creates a new CurrentRoundRes instance using the specified properties.
         * @function create
         * @memberof pbm.CurrentRoundRes
         * @static
         * @param {pbm.ICurrentRoundRes=} [properties] Properties to set
         * @returns {pbm.CurrentRoundRes} CurrentRoundRes instance
         */
        CurrentRoundRes.create = function create(properties) {
            return new CurrentRoundRes(properties);
        };

        /**
         * Encodes the specified CurrentRoundRes message. Does not implicitly {@link pbm.CurrentRoundRes.verify|verify} messages.
         * @function encode
         * @memberof pbm.CurrentRoundRes
         * @static
         * @param {pbm.ICurrentRoundRes} message CurrentRoundRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CurrentRoundRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.info != null && message.hasOwnProperty("info"))
                $root.pbm.RoundInfo.encode(message.info, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.next_round != null && message.hasOwnProperty("next_round"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.next_round);
            if (message.srv_ts != null && message.hasOwnProperty("srv_ts"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.srv_ts);
            if (message.rocket != null && message.hasOwnProperty("rocket"))
                $root.pbm.RocketConfig.encode(message.rocket, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a CurrentRoundRes message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.CurrentRoundRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.CurrentRoundRes} CurrentRoundRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CurrentRoundRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.CurrentRoundRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.info = $root.pbm.RoundInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.next_round = reader.string();
                    break;
                case 3:
                    message.srv_ts = reader.int64();
                    break;
                case 4:
                    message.rocket = $root.pbm.RocketConfig.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return CurrentRoundRes;
    })();

    pbm.RocketMultipleRes = (function() {

        /**
         * Properties of a RocketMultipleRes.
         * @memberof pbm
         * @interface IRocketMultipleRes
         * @property {string|null} [round] RocketMultipleRes round
         * @property {number|null} [multiple] RocketMultipleRes multiple
         * @property {number|null} [sequence] RocketMultipleRes sequence
         */

        /**
         * Constructs a new RocketMultipleRes.
         * @memberof pbm
         * @classdesc Represents a RocketMultipleRes.
         * @implements IRocketMultipleRes
         * @constructor
         * @param {pbm.IRocketMultipleRes=} [properties] Properties to set
         */
        function RocketMultipleRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RocketMultipleRes round.
         * @member {string} round
         * @memberof pbm.RocketMultipleRes
         * @instance
         */
        RocketMultipleRes.prototype.round = "";

        /**
         * RocketMultipleRes multiple.
         * @member {number} multiple
         * @memberof pbm.RocketMultipleRes
         * @instance
         */
        RocketMultipleRes.prototype.multiple = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RocketMultipleRes sequence.
         * @member {number} sequence
         * @memberof pbm.RocketMultipleRes
         * @instance
         */
        RocketMultipleRes.prototype.sequence = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new RocketMultipleRes instance using the specified properties.
         * @function create
         * @memberof pbm.RocketMultipleRes
         * @static
         * @param {pbm.IRocketMultipleRes=} [properties] Properties to set
         * @returns {pbm.RocketMultipleRes} RocketMultipleRes instance
         */
        RocketMultipleRes.create = function create(properties) {
            return new RocketMultipleRes(properties);
        };

        /**
         * Encodes the specified RocketMultipleRes message. Does not implicitly {@link pbm.RocketMultipleRes.verify|verify} messages.
         * @function encode
         * @memberof pbm.RocketMultipleRes
         * @static
         * @param {pbm.IRocketMultipleRes} message RocketMultipleRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RocketMultipleRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.round != null && message.hasOwnProperty("round"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.round);
            if (message.multiple != null && message.hasOwnProperty("multiple"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.multiple);
            if (message.sequence != null && message.hasOwnProperty("sequence"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.sequence);
            return writer;
        };

        /**
         * Decodes a RocketMultipleRes message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.RocketMultipleRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.RocketMultipleRes} RocketMultipleRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RocketMultipleRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.RocketMultipleRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.round = reader.string();
                    break;
                case 2:
                    message.multiple = reader.int64();
                    break;
                case 3:
                    message.sequence = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return RocketMultipleRes;
    })();

    pbm.RecoveryUserRes = (function() {

        /**
         * Properties of a RecoveryUserRes.
         * @memberof pbm
         * @interface IRecoveryUserRes
         * @property {string|null} [round] RecoveryUserRes round
         * @property {string|null} [uid] RecoveryUserRes uid
         * @property {number|null} [multiple] RecoveryUserRes multiple
         * @property {string|null} [avatar] RecoveryUserRes avatar
         */

        /**
         * Constructs a new RecoveryUserRes.
         * @memberof pbm
         * @classdesc Represents a RecoveryUserRes.
         * @implements IRecoveryUserRes
         * @constructor
         * @param {pbm.IRecoveryUserRes=} [properties] Properties to set
         */
        function RecoveryUserRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RecoveryUserRes round.
         * @member {string} round
         * @memberof pbm.RecoveryUserRes
         * @instance
         */
        RecoveryUserRes.prototype.round = "";

        /**
         * RecoveryUserRes uid.
         * @member {string} uid
         * @memberof pbm.RecoveryUserRes
         * @instance
         */
        RecoveryUserRes.prototype.uid = "";

        /**
         * RecoveryUserRes multiple.
         * @member {number} multiple
         * @memberof pbm.RecoveryUserRes
         * @instance
         */
        RecoveryUserRes.prototype.multiple = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RecoveryUserRes avatar.
         * @member {string} avatar
         * @memberof pbm.RecoveryUserRes
         * @instance
         */
        RecoveryUserRes.prototype.avatar = "";

        /**
         * Creates a new RecoveryUserRes instance using the specified properties.
         * @function create
         * @memberof pbm.RecoveryUserRes
         * @static
         * @param {pbm.IRecoveryUserRes=} [properties] Properties to set
         * @returns {pbm.RecoveryUserRes} RecoveryUserRes instance
         */
        RecoveryUserRes.create = function create(properties) {
            return new RecoveryUserRes(properties);
        };

        /**
         * Encodes the specified RecoveryUserRes message. Does not implicitly {@link pbm.RecoveryUserRes.verify|verify} messages.
         * @function encode
         * @memberof pbm.RecoveryUserRes
         * @static
         * @param {pbm.IRecoveryUserRes} message RecoveryUserRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RecoveryUserRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.round != null && message.hasOwnProperty("round"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.round);
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.uid);
            if (message.multiple != null && message.hasOwnProperty("multiple"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.multiple);
            if (message.avatar != null && message.hasOwnProperty("avatar"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.avatar);
            return writer;
        };

        /**
         * Decodes a RecoveryUserRes message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.RecoveryUserRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.RecoveryUserRes} RecoveryUserRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RecoveryUserRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.RecoveryUserRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.round = reader.string();
                    break;
                case 2:
                    message.uid = reader.string();
                    break;
                case 3:
                    message.multiple = reader.int64();
                    break;
                case 4:
                    message.avatar = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return RecoveryUserRes;
    })();

    /**
     * ECurrencyType enum.
     * @name pbm.ECurrencyType
     * @enum {string}
     * @property {number} ECurrencyTypeNone=0 ECurrencyTypeNone value
     * @property {number} ECTDiamond=1805 ECTDiamond value
     * @property {number} ECTNewDiamond=1835 ECTNewDiamond value
     * @property {number} ECTVoucher=50044 ECTVoucher value
     */
    pbm.ECurrencyType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ECurrencyTypeNone"] = 0;
        values[valuesById[1805] = "ECTDiamond"] = 1805;
        values[valuesById[1835] = "ECTNewDiamond"] = 1835;
        values[valuesById[50044] = "ECTVoucher"] = 50044;
        return values;
    })();

    pbm.BetTicket = (function() {

        /**
         * Properties of a BetTicket.
         * @memberof pbm
         * @interface IBetTicket
         * @property {number|null} [id] BetTicket id
         * @property {number|null} [num] BetTicket num
         * @property {number|null} [amount] BetTicket amount
         */

        /**
         * Constructs a new BetTicket.
         * @memberof pbm
         * @classdesc Represents a BetTicket.
         * @implements IBetTicket
         * @constructor
         * @param {pbm.IBetTicket=} [properties] Properties to set
         */
        function BetTicket(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BetTicket id.
         * @member {number} id
         * @memberof pbm.BetTicket
         * @instance
         */
        BetTicket.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BetTicket num.
         * @member {number} num
         * @memberof pbm.BetTicket
         * @instance
         */
        BetTicket.prototype.num = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BetTicket amount.
         * @member {number} amount
         * @memberof pbm.BetTicket
         * @instance
         */
        BetTicket.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new BetTicket instance using the specified properties.
         * @function create
         * @memberof pbm.BetTicket
         * @static
         * @param {pbm.IBetTicket=} [properties] Properties to set
         * @returns {pbm.BetTicket} BetTicket instance
         */
        BetTicket.create = function create(properties) {
            return new BetTicket(properties);
        };

        /**
         * Encodes the specified BetTicket message. Does not implicitly {@link pbm.BetTicket.verify|verify} messages.
         * @function encode
         * @memberof pbm.BetTicket
         * @static
         * @param {pbm.IBetTicket} message BetTicket message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetTicket.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            if (message.num != null && message.hasOwnProperty("num"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.num);
            if (message.amount != null && message.hasOwnProperty("amount"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.amount);
            return writer;
        };

        /**
         * Decodes a BetTicket message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.BetTicket
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.BetTicket} BetTicket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetTicket.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.BetTicket();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int64();
                    break;
                case 2:
                    message.num = reader.int64();
                    break;
                case 3:
                    message.amount = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return BetTicket;
    })();

    pbm.BetReq = (function() {

        /**
         * Properties of a BetReq.
         * @memberof pbm
         * @interface IBetReq
         * @property {number|null} [sequence] BetReq sequence
         * @property {string|null} [round] BetReq round
         * @property {number|null} [currency_type] BetReq currency_type
         * @property {number|null} [amount] BetReq amount
         * @property {number|null} [auto_multiple] BetReq auto_multiple
         * @property {string|null} [cid] BetReq cid
         * @property {number|null} [ticket_id] BetReq ticket_id
         */

        /**
         * Constructs a new BetReq.
         * @memberof pbm
         * @classdesc Represents a BetReq.
         * @implements IBetReq
         * @constructor
         * @param {pbm.IBetReq=} [properties] Properties to set
         */
        function BetReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BetReq sequence.
         * @member {number} sequence
         * @memberof pbm.BetReq
         * @instance
         */
        BetReq.prototype.sequence = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BetReq round.
         * @member {string} round
         * @memberof pbm.BetReq
         * @instance
         */
        BetReq.prototype.round = "";

        /**
         * BetReq currency_type.
         * @member {number} currency_type
         * @memberof pbm.BetReq
         * @instance
         */
        BetReq.prototype.currency_type = 0;

        /**
         * BetReq amount.
         * @member {number} amount
         * @memberof pbm.BetReq
         * @instance
         */
        BetReq.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BetReq auto_multiple.
         * @member {number} auto_multiple
         * @memberof pbm.BetReq
         * @instance
         */
        BetReq.prototype.auto_multiple = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BetReq cid.
         * @member {string} cid
         * @memberof pbm.BetReq
         * @instance
         */
        BetReq.prototype.cid = "";

        /**
         * BetReq ticket_id.
         * @member {number} ticket_id
         * @memberof pbm.BetReq
         * @instance
         */
        BetReq.prototype.ticket_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new BetReq instance using the specified properties.
         * @function create
         * @memberof pbm.BetReq
         * @static
         * @param {pbm.IBetReq=} [properties] Properties to set
         * @returns {pbm.BetReq} BetReq instance
         */
        BetReq.create = function create(properties) {
            return new BetReq(properties);
        };

        /**
         * Encodes the specified BetReq message. Does not implicitly {@link pbm.BetReq.verify|verify} messages.
         * @function encode
         * @memberof pbm.BetReq
         * @static
         * @param {pbm.IBetReq} message BetReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sequence != null && message.hasOwnProperty("sequence"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.sequence);
            if (message.round != null && message.hasOwnProperty("round"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.round);
            if (message.currency_type != null && message.hasOwnProperty("currency_type"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.currency_type);
            if (message.amount != null && message.hasOwnProperty("amount"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.amount);
            if (message.auto_multiple != null && message.hasOwnProperty("auto_multiple"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.auto_multiple);
            if (message.cid != null && message.hasOwnProperty("cid"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.cid);
            if (message.ticket_id != null && message.hasOwnProperty("ticket_id"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.ticket_id);
            return writer;
        };

        /**
         * Decodes a BetReq message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.BetReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.BetReq} BetReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.BetReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sequence = reader.int64();
                    break;
                case 2:
                    message.round = reader.string();
                    break;
                case 3:
                    message.currency_type = reader.int32();
                    break;
                case 4:
                    message.amount = reader.int64();
                    break;
                case 5:
                    message.auto_multiple = reader.int64();
                    break;
                case 6:
                    message.cid = reader.string();
                    break;
                case 7:
                    message.ticket_id = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return BetReq;
    })();

    pbm.BetRes = (function() {

        /**
         * Properties of a BetRes.
         * @memberof pbm
         * @interface IBetRes
         * @property {common.IResult|null} [result] BetRes result
         * @property {string|null} [round] BetRes round
         * @property {number|null} [total_amount] BetRes total_amount
         * @property {number|null} [auto_multiple] BetRes auto_multiple
         * @property {number|null} [ticket_amount] BetRes ticket_amount
         * @property {number|null} [diamond_amount] BetRes diamond_amount
         */

        /**
         * Constructs a new BetRes.
         * @memberof pbm
         * @classdesc Represents a BetRes.
         * @implements IBetRes
         * @constructor
         * @param {pbm.IBetRes=} [properties] Properties to set
         */
        function BetRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BetRes result.
         * @member {common.IResult|null|undefined} result
         * @memberof pbm.BetRes
         * @instance
         */
        BetRes.prototype.result = null;

        /**
         * BetRes round.
         * @member {string} round
         * @memberof pbm.BetRes
         * @instance
         */
        BetRes.prototype.round = "";

        /**
         * BetRes total_amount.
         * @member {number} total_amount
         * @memberof pbm.BetRes
         * @instance
         */
        BetRes.prototype.total_amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BetRes auto_multiple.
         * @member {number} auto_multiple
         * @memberof pbm.BetRes
         * @instance
         */
        BetRes.prototype.auto_multiple = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BetRes ticket_amount.
         * @member {number} ticket_amount
         * @memberof pbm.BetRes
         * @instance
         */
        BetRes.prototype.ticket_amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BetRes diamond_amount.
         * @member {number} diamond_amount
         * @memberof pbm.BetRes
         * @instance
         */
        BetRes.prototype.diamond_amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new BetRes instance using the specified properties.
         * @function create
         * @memberof pbm.BetRes
         * @static
         * @param {pbm.IBetRes=} [properties] Properties to set
         * @returns {pbm.BetRes} BetRes instance
         */
        BetRes.create = function create(properties) {
            return new BetRes(properties);
        };

        /**
         * Encodes the specified BetRes message. Does not implicitly {@link pbm.BetRes.verify|verify} messages.
         * @function encode
         * @memberof pbm.BetRes
         * @static
         * @param {pbm.IBetRes} message BetRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && message.hasOwnProperty("result"))
                $root.common.Result.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.round != null && message.hasOwnProperty("round"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.round);
            if (message.total_amount != null && message.hasOwnProperty("total_amount"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.total_amount);
            if (message.auto_multiple != null && message.hasOwnProperty("auto_multiple"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.auto_multiple);
            if (message.ticket_amount != null && message.hasOwnProperty("ticket_amount"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.ticket_amount);
            if (message.diamond_amount != null && message.hasOwnProperty("diamond_amount"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.diamond_amount);
            return writer;
        };

        /**
         * Decodes a BetRes message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.BetRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.BetRes} BetRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.BetRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = $root.common.Result.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.round = reader.string();
                    break;
                case 3:
                    message.total_amount = reader.int64();
                    break;
                case 4:
                    message.auto_multiple = reader.int64();
                    break;
                case 5:
                    message.ticket_amount = reader.int64();
                    break;
                case 6:
                    message.diamond_amount = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return BetRes;
    })();

    pbm.AutoRecoveryReq = (function() {

        /**
         * Properties of an AutoRecoveryReq.
         * @memberof pbm
         * @interface IAutoRecoveryReq
         * @property {number|null} [sequence] AutoRecoveryReq sequence
         * @property {string|null} [round] AutoRecoveryReq round
         * @property {number|null} [auto_multiple] AutoRecoveryReq auto_multiple
         */

        /**
         * Constructs a new AutoRecoveryReq.
         * @memberof pbm
         * @classdesc Represents an AutoRecoveryReq.
         * @implements IAutoRecoveryReq
         * @constructor
         * @param {pbm.IAutoRecoveryReq=} [properties] Properties to set
         */
        function AutoRecoveryReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AutoRecoveryReq sequence.
         * @member {number} sequence
         * @memberof pbm.AutoRecoveryReq
         * @instance
         */
        AutoRecoveryReq.prototype.sequence = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AutoRecoveryReq round.
         * @member {string} round
         * @memberof pbm.AutoRecoveryReq
         * @instance
         */
        AutoRecoveryReq.prototype.round = "";

        /**
         * AutoRecoveryReq auto_multiple.
         * @member {number} auto_multiple
         * @memberof pbm.AutoRecoveryReq
         * @instance
         */
        AutoRecoveryReq.prototype.auto_multiple = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new AutoRecoveryReq instance using the specified properties.
         * @function create
         * @memberof pbm.AutoRecoveryReq
         * @static
         * @param {pbm.IAutoRecoveryReq=} [properties] Properties to set
         * @returns {pbm.AutoRecoveryReq} AutoRecoveryReq instance
         */
        AutoRecoveryReq.create = function create(properties) {
            return new AutoRecoveryReq(properties);
        };

        /**
         * Encodes the specified AutoRecoveryReq message. Does not implicitly {@link pbm.AutoRecoveryReq.verify|verify} messages.
         * @function encode
         * @memberof pbm.AutoRecoveryReq
         * @static
         * @param {pbm.IAutoRecoveryReq} message AutoRecoveryReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AutoRecoveryReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sequence != null && message.hasOwnProperty("sequence"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.sequence);
            if (message.round != null && message.hasOwnProperty("round"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.round);
            if (message.auto_multiple != null && message.hasOwnProperty("auto_multiple"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.auto_multiple);
            return writer;
        };

        /**
         * Decodes an AutoRecoveryReq message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.AutoRecoveryReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.AutoRecoveryReq} AutoRecoveryReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AutoRecoveryReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.AutoRecoveryReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sequence = reader.int64();
                    break;
                case 2:
                    message.round = reader.string();
                    break;
                case 3:
                    message.auto_multiple = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return AutoRecoveryReq;
    })();

    pbm.AutoRecoveryRes = (function() {

        /**
         * Properties of an AutoRecoveryRes.
         * @memberof pbm
         * @interface IAutoRecoveryRes
         * @property {common.IResult|null} [result] AutoRecoveryRes result
         * @property {string|null} [round] AutoRecoveryRes round
         * @property {number|null} [total_amount] AutoRecoveryRes total_amount
         * @property {number|null} [auto_multiple] AutoRecoveryRes auto_multiple
         */

        /**
         * Constructs a new AutoRecoveryRes.
         * @memberof pbm
         * @classdesc Represents an AutoRecoveryRes.
         * @implements IAutoRecoveryRes
         * @constructor
         * @param {pbm.IAutoRecoveryRes=} [properties] Properties to set
         */
        function AutoRecoveryRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AutoRecoveryRes result.
         * @member {common.IResult|null|undefined} result
         * @memberof pbm.AutoRecoveryRes
         * @instance
         */
        AutoRecoveryRes.prototype.result = null;

        /**
         * AutoRecoveryRes round.
         * @member {string} round
         * @memberof pbm.AutoRecoveryRes
         * @instance
         */
        AutoRecoveryRes.prototype.round = "";

        /**
         * AutoRecoveryRes total_amount.
         * @member {number} total_amount
         * @memberof pbm.AutoRecoveryRes
         * @instance
         */
        AutoRecoveryRes.prototype.total_amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AutoRecoveryRes auto_multiple.
         * @member {number} auto_multiple
         * @memberof pbm.AutoRecoveryRes
         * @instance
         */
        AutoRecoveryRes.prototype.auto_multiple = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new AutoRecoveryRes instance using the specified properties.
         * @function create
         * @memberof pbm.AutoRecoveryRes
         * @static
         * @param {pbm.IAutoRecoveryRes=} [properties] Properties to set
         * @returns {pbm.AutoRecoveryRes} AutoRecoveryRes instance
         */
        AutoRecoveryRes.create = function create(properties) {
            return new AutoRecoveryRes(properties);
        };

        /**
         * Encodes the specified AutoRecoveryRes message. Does not implicitly {@link pbm.AutoRecoveryRes.verify|verify} messages.
         * @function encode
         * @memberof pbm.AutoRecoveryRes
         * @static
         * @param {pbm.IAutoRecoveryRes} message AutoRecoveryRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AutoRecoveryRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && message.hasOwnProperty("result"))
                $root.common.Result.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.round != null && message.hasOwnProperty("round"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.round);
            if (message.total_amount != null && message.hasOwnProperty("total_amount"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.total_amount);
            if (message.auto_multiple != null && message.hasOwnProperty("auto_multiple"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.auto_multiple);
            return writer;
        };

        /**
         * Decodes an AutoRecoveryRes message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.AutoRecoveryRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.AutoRecoveryRes} AutoRecoveryRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AutoRecoveryRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.AutoRecoveryRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = $root.common.Result.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.round = reader.string();
                    break;
                case 3:
                    message.total_amount = reader.int64();
                    break;
                case 4:
                    message.auto_multiple = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return AutoRecoveryRes;
    })();

    pbm.RecoveryReq = (function() {

        /**
         * Properties of a RecoveryReq.
         * @memberof pbm
         * @interface IRecoveryReq
         * @property {string|null} [round] RecoveryReq round
         */

        /**
         * Constructs a new RecoveryReq.
         * @memberof pbm
         * @classdesc Represents a RecoveryReq.
         * @implements IRecoveryReq
         * @constructor
         * @param {pbm.IRecoveryReq=} [properties] Properties to set
         */
        function RecoveryReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RecoveryReq round.
         * @member {string} round
         * @memberof pbm.RecoveryReq
         * @instance
         */
        RecoveryReq.prototype.round = "";

        /**
         * Creates a new RecoveryReq instance using the specified properties.
         * @function create
         * @memberof pbm.RecoveryReq
         * @static
         * @param {pbm.IRecoveryReq=} [properties] Properties to set
         * @returns {pbm.RecoveryReq} RecoveryReq instance
         */
        RecoveryReq.create = function create(properties) {
            return new RecoveryReq(properties);
        };

        /**
         * Encodes the specified RecoveryReq message. Does not implicitly {@link pbm.RecoveryReq.verify|verify} messages.
         * @function encode
         * @memberof pbm.RecoveryReq
         * @static
         * @param {pbm.IRecoveryReq} message RecoveryReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RecoveryReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.round != null && message.hasOwnProperty("round"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.round);
            return writer;
        };

        /**
         * Decodes a RecoveryReq message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.RecoveryReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.RecoveryReq} RecoveryReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RecoveryReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.RecoveryReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.round = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return RecoveryReq;
    })();

    pbm.RecoveryRes = (function() {

        /**
         * Properties of a RecoveryRes.
         * @memberof pbm
         * @interface IRecoveryRes
         * @property {common.IResult|null} [result] RecoveryRes result
         * @property {string|null} [round] RecoveryRes round
         * @property {number|null} [bet_amount] RecoveryRes bet_amount
         * @property {number|null} [win_amount] RecoveryRes win_amount
         * @property {number|null} [multiple] RecoveryRes multiple
         * @property {number|null} [ticket_num] RecoveryRes ticket_num
         * @property {Array.<pbm.IBetTicket>|null} [tickets] RecoveryRes tickets
         */

        /**
         * Constructs a new RecoveryRes.
         * @memberof pbm
         * @classdesc Represents a RecoveryRes.
         * @implements IRecoveryRes
         * @constructor
         * @param {pbm.IRecoveryRes=} [properties] Properties to set
         */
        function RecoveryRes(properties) {
            this.tickets = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RecoveryRes result.
         * @member {common.IResult|null|undefined} result
         * @memberof pbm.RecoveryRes
         * @instance
         */
        RecoveryRes.prototype.result = null;

        /**
         * RecoveryRes round.
         * @member {string} round
         * @memberof pbm.RecoveryRes
         * @instance
         */
        RecoveryRes.prototype.round = "";

        /**
         * RecoveryRes bet_amount.
         * @member {number} bet_amount
         * @memberof pbm.RecoveryRes
         * @instance
         */
        RecoveryRes.prototype.bet_amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RecoveryRes win_amount.
         * @member {number} win_amount
         * @memberof pbm.RecoveryRes
         * @instance
         */
        RecoveryRes.prototype.win_amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RecoveryRes multiple.
         * @member {number} multiple
         * @memberof pbm.RecoveryRes
         * @instance
         */
        RecoveryRes.prototype.multiple = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RecoveryRes ticket_num.
         * @member {number} ticket_num
         * @memberof pbm.RecoveryRes
         * @instance
         */
        RecoveryRes.prototype.ticket_num = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RecoveryRes tickets.
         * @member {Array.<pbm.IBetTicket>} tickets
         * @memberof pbm.RecoveryRes
         * @instance
         */
        RecoveryRes.prototype.tickets = $util.emptyArray;

        /**
         * Creates a new RecoveryRes instance using the specified properties.
         * @function create
         * @memberof pbm.RecoveryRes
         * @static
         * @param {pbm.IRecoveryRes=} [properties] Properties to set
         * @returns {pbm.RecoveryRes} RecoveryRes instance
         */
        RecoveryRes.create = function create(properties) {
            return new RecoveryRes(properties);
        };

        /**
         * Encodes the specified RecoveryRes message. Does not implicitly {@link pbm.RecoveryRes.verify|verify} messages.
         * @function encode
         * @memberof pbm.RecoveryRes
         * @static
         * @param {pbm.IRecoveryRes} message RecoveryRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RecoveryRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && message.hasOwnProperty("result"))
                $root.common.Result.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.round != null && message.hasOwnProperty("round"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.round);
            if (message.bet_amount != null && message.hasOwnProperty("bet_amount"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.bet_amount);
            if (message.win_amount != null && message.hasOwnProperty("win_amount"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.win_amount);
            if (message.multiple != null && message.hasOwnProperty("multiple"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.multiple);
            if (message.ticket_num != null && message.hasOwnProperty("ticket_num"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.ticket_num);
            if (message.tickets != null && message.tickets.length)
                for (var i = 0; i < message.tickets.length; ++i)
                    $root.pbm.BetTicket.encode(message.tickets[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a RecoveryRes message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.RecoveryRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.RecoveryRes} RecoveryRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RecoveryRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.RecoveryRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = $root.common.Result.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.round = reader.string();
                    break;
                case 3:
                    message.bet_amount = reader.int64();
                    break;
                case 4:
                    message.win_amount = reader.int64();
                    break;
                case 5:
                    message.multiple = reader.int64();
                    break;
                case 6:
                    message.ticket_num = reader.int64();
                    break;
                case 7:
                    if (!(message.tickets && message.tickets.length))
                        message.tickets = [];
                    message.tickets.push($root.pbm.BetTicket.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return RecoveryRes;
    })();

    pbm.GetRecordsReq = (function() {

        /**
         * Properties of a GetRecordsReq.
         * @memberof pbm
         * @interface IGetRecordsReq
         * @property {common.IPage|null} [page] GetRecordsReq page
         */

        /**
         * Constructs a new GetRecordsReq.
         * @memberof pbm
         * @classdesc Represents a GetRecordsReq.
         * @implements IGetRecordsReq
         * @constructor
         * @param {pbm.IGetRecordsReq=} [properties] Properties to set
         */
        function GetRecordsReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetRecordsReq page.
         * @member {common.IPage|null|undefined} page
         * @memberof pbm.GetRecordsReq
         * @instance
         */
        GetRecordsReq.prototype.page = null;

        /**
         * Creates a new GetRecordsReq instance using the specified properties.
         * @function create
         * @memberof pbm.GetRecordsReq
         * @static
         * @param {pbm.IGetRecordsReq=} [properties] Properties to set
         * @returns {pbm.GetRecordsReq} GetRecordsReq instance
         */
        GetRecordsReq.create = function create(properties) {
            return new GetRecordsReq(properties);
        };

        /**
         * Encodes the specified GetRecordsReq message. Does not implicitly {@link pbm.GetRecordsReq.verify|verify} messages.
         * @function encode
         * @memberof pbm.GetRecordsReq
         * @static
         * @param {pbm.IGetRecordsReq} message GetRecordsReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRecordsReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.page != null && message.hasOwnProperty("page"))
                $root.common.Page.encode(message.page, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a GetRecordsReq message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.GetRecordsReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.GetRecordsReq} GetRecordsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRecordsReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.GetRecordsReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.page = $root.common.Page.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return GetRecordsReq;
    })();

    pbm.UserRecord = (function() {

        /**
         * Properties of a UserRecord.
         * @memberof pbm
         * @interface IUserRecord
         * @property {number|null} [ts] UserRecord ts
         * @property {string|null} [round] UserRecord round
         * @property {number|null} [win_amount] UserRecord win_amount
         * @property {number|null} [win_multiple] UserRecord win_multiple
         * @property {number|null} [bomb_multiple] UserRecord bomb_multiple
         * @property {Array.<pbm.IBetTicket>|null} [tickets] UserRecord tickets
         */

        /**
         * Constructs a new UserRecord.
         * @memberof pbm
         * @classdesc Represents a UserRecord.
         * @implements IUserRecord
         * @constructor
         * @param {pbm.IUserRecord=} [properties] Properties to set
         */
        function UserRecord(properties) {
            this.tickets = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserRecord ts.
         * @member {number} ts
         * @memberof pbm.UserRecord
         * @instance
         */
        UserRecord.prototype.ts = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserRecord round.
         * @member {string} round
         * @memberof pbm.UserRecord
         * @instance
         */
        UserRecord.prototype.round = "";

        /**
         * UserRecord win_amount.
         * @member {number} win_amount
         * @memberof pbm.UserRecord
         * @instance
         */
        UserRecord.prototype.win_amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserRecord win_multiple.
         * @member {number} win_multiple
         * @memberof pbm.UserRecord
         * @instance
         */
        UserRecord.prototype.win_multiple = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserRecord bomb_multiple.
         * @member {number} bomb_multiple
         * @memberof pbm.UserRecord
         * @instance
         */
        UserRecord.prototype.bomb_multiple = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserRecord tickets.
         * @member {Array.<pbm.IBetTicket>} tickets
         * @memberof pbm.UserRecord
         * @instance
         */
        UserRecord.prototype.tickets = $util.emptyArray;

        /**
         * Creates a new UserRecord instance using the specified properties.
         * @function create
         * @memberof pbm.UserRecord
         * @static
         * @param {pbm.IUserRecord=} [properties] Properties to set
         * @returns {pbm.UserRecord} UserRecord instance
         */
        UserRecord.create = function create(properties) {
            return new UserRecord(properties);
        };

        /**
         * Encodes the specified UserRecord message. Does not implicitly {@link pbm.UserRecord.verify|verify} messages.
         * @function encode
         * @memberof pbm.UserRecord
         * @static
         * @param {pbm.IUserRecord} message UserRecord message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserRecord.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ts != null && message.hasOwnProperty("ts"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.ts);
            if (message.round != null && message.hasOwnProperty("round"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.round);
            if (message.win_amount != null && message.hasOwnProperty("win_amount"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.win_amount);
            if (message.win_multiple != null && message.hasOwnProperty("win_multiple"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.win_multiple);
            if (message.bomb_multiple != null && message.hasOwnProperty("bomb_multiple"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.bomb_multiple);
            if (message.tickets != null && message.tickets.length)
                for (var i = 0; i < message.tickets.length; ++i)
                    $root.pbm.BetTicket.encode(message.tickets[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a UserRecord message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.UserRecord
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.UserRecord} UserRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserRecord.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.UserRecord();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ts = reader.int64();
                    break;
                case 2:
                    message.round = reader.string();
                    break;
                case 3:
                    message.win_amount = reader.int64();
                    break;
                case 4:
                    message.win_multiple = reader.int64();
                    break;
                case 5:
                    message.bomb_multiple = reader.int64();
                    break;
                case 6:
                    if (!(message.tickets && message.tickets.length))
                        message.tickets = [];
                    message.tickets.push($root.pbm.BetTicket.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return UserRecord;
    })();

    pbm.GetRecordsRes = (function() {

        /**
         * Properties of a GetRecordsRes.
         * @memberof pbm
         * @interface IGetRecordsRes
         * @property {common.IResult|null} [result] GetRecordsRes result
         * @property {boolean|null} [has_more] GetRecordsRes has_more
         * @property {common.IPage|null} [page] GetRecordsRes page
         * @property {number|null} [today_income] GetRecordsRes today_income
         * @property {number|null} [month_income] GetRecordsRes month_income
         * @property {Array.<pbm.IUserRecord>|null} [records] GetRecordsRes records
         * @property {number|null} [today_ticket_value] GetRecordsRes today_ticket_value
         */

        /**
         * Constructs a new GetRecordsRes.
         * @memberof pbm
         * @classdesc Represents a GetRecordsRes.
         * @implements IGetRecordsRes
         * @constructor
         * @param {pbm.IGetRecordsRes=} [properties] Properties to set
         */
        function GetRecordsRes(properties) {
            this.records = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetRecordsRes result.
         * @member {common.IResult|null|undefined} result
         * @memberof pbm.GetRecordsRes
         * @instance
         */
        GetRecordsRes.prototype.result = null;

        /**
         * GetRecordsRes has_more.
         * @member {boolean} has_more
         * @memberof pbm.GetRecordsRes
         * @instance
         */
        GetRecordsRes.prototype.has_more = false;

        /**
         * GetRecordsRes page.
         * @member {common.IPage|null|undefined} page
         * @memberof pbm.GetRecordsRes
         * @instance
         */
        GetRecordsRes.prototype.page = null;

        /**
         * GetRecordsRes today_income.
         * @member {number} today_income
         * @memberof pbm.GetRecordsRes
         * @instance
         */
        GetRecordsRes.prototype.today_income = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GetRecordsRes month_income.
         * @member {number} month_income
         * @memberof pbm.GetRecordsRes
         * @instance
         */
        GetRecordsRes.prototype.month_income = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GetRecordsRes records.
         * @member {Array.<pbm.IUserRecord>} records
         * @memberof pbm.GetRecordsRes
         * @instance
         */
        GetRecordsRes.prototype.records = $util.emptyArray;

        /**
         * GetRecordsRes today_ticket_value.
         * @member {number} today_ticket_value
         * @memberof pbm.GetRecordsRes
         * @instance
         */
        GetRecordsRes.prototype.today_ticket_value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new GetRecordsRes instance using the specified properties.
         * @function create
         * @memberof pbm.GetRecordsRes
         * @static
         * @param {pbm.IGetRecordsRes=} [properties] Properties to set
         * @returns {pbm.GetRecordsRes} GetRecordsRes instance
         */
        GetRecordsRes.create = function create(properties) {
            return new GetRecordsRes(properties);
        };

        /**
         * Encodes the specified GetRecordsRes message. Does not implicitly {@link pbm.GetRecordsRes.verify|verify} messages.
         * @function encode
         * @memberof pbm.GetRecordsRes
         * @static
         * @param {pbm.IGetRecordsRes} message GetRecordsRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRecordsRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && message.hasOwnProperty("result"))
                $root.common.Result.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.has_more != null && message.hasOwnProperty("has_more"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.has_more);
            if (message.page != null && message.hasOwnProperty("page"))
                $root.common.Page.encode(message.page, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.today_income != null && message.hasOwnProperty("today_income"))
                writer.uint32(/* id 10, wireType 0 =*/80).int64(message.today_income);
            if (message.month_income != null && message.hasOwnProperty("month_income"))
                writer.uint32(/* id 11, wireType 0 =*/88).int64(message.month_income);
            if (message.records != null && message.records.length)
                for (var i = 0; i < message.records.length; ++i)
                    $root.pbm.UserRecord.encode(message.records[i], writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.today_ticket_value != null && message.hasOwnProperty("today_ticket_value"))
                writer.uint32(/* id 13, wireType 0 =*/104).int64(message.today_ticket_value);
            return writer;
        };

        /**
         * Decodes a GetRecordsRes message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.GetRecordsRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.GetRecordsRes} GetRecordsRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRecordsRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.GetRecordsRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = $root.common.Result.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.has_more = reader.bool();
                    break;
                case 3:
                    message.page = $root.common.Page.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.today_income = reader.int64();
                    break;
                case 11:
                    message.month_income = reader.int64();
                    break;
                case 12:
                    if (!(message.records && message.records.length))
                        message.records = [];
                    message.records.push($root.pbm.UserRecord.decode(reader, reader.uint32()));
                    break;
                case 13:
                    message.today_ticket_value = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return GetRecordsRes;
    })();

    pbm.AutoBetReq = (function() {

        /**
         * Properties of an AutoBetReq.
         * @memberof pbm
         * @interface IAutoBetReq
         * @property {number|null} [currency_type] AutoBetReq currency_type
         * @property {number|null} [amount] AutoBetReq amount
         * @property {number|null} [rounds] AutoBetReq rounds
         * @property {number|null} [auto_multiple] AutoBetReq auto_multiple
         */

        /**
         * Constructs a new AutoBetReq.
         * @memberof pbm
         * @classdesc Represents an AutoBetReq.
         * @implements IAutoBetReq
         * @constructor
         * @param {pbm.IAutoBetReq=} [properties] Properties to set
         */
        function AutoBetReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AutoBetReq currency_type.
         * @member {number} currency_type
         * @memberof pbm.AutoBetReq
         * @instance
         */
        AutoBetReq.prototype.currency_type = 0;

        /**
         * AutoBetReq amount.
         * @member {number} amount
         * @memberof pbm.AutoBetReq
         * @instance
         */
        AutoBetReq.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AutoBetReq rounds.
         * @member {number} rounds
         * @memberof pbm.AutoBetReq
         * @instance
         */
        AutoBetReq.prototype.rounds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AutoBetReq auto_multiple.
         * @member {number} auto_multiple
         * @memberof pbm.AutoBetReq
         * @instance
         */
        AutoBetReq.prototype.auto_multiple = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new AutoBetReq instance using the specified properties.
         * @function create
         * @memberof pbm.AutoBetReq
         * @static
         * @param {pbm.IAutoBetReq=} [properties] Properties to set
         * @returns {pbm.AutoBetReq} AutoBetReq instance
         */
        AutoBetReq.create = function create(properties) {
            return new AutoBetReq(properties);
        };

        /**
         * Encodes the specified AutoBetReq message. Does not implicitly {@link pbm.AutoBetReq.verify|verify} messages.
         * @function encode
         * @memberof pbm.AutoBetReq
         * @static
         * @param {pbm.IAutoBetReq} message AutoBetReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AutoBetReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.currency_type != null && message.hasOwnProperty("currency_type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.currency_type);
            if (message.amount != null && message.hasOwnProperty("amount"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.amount);
            if (message.rounds != null && message.hasOwnProperty("rounds"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.rounds);
            if (message.auto_multiple != null && message.hasOwnProperty("auto_multiple"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.auto_multiple);
            return writer;
        };

        /**
         * Decodes an AutoBetReq message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.AutoBetReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.AutoBetReq} AutoBetReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AutoBetReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.AutoBetReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.currency_type = reader.int32();
                    break;
                case 2:
                    message.amount = reader.int64();
                    break;
                case 3:
                    message.rounds = reader.int64();
                    break;
                case 4:
                    message.auto_multiple = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return AutoBetReq;
    })();

    pbm.AutoBetRes = (function() {

        /**
         * Properties of an AutoBetRes.
         * @memberof pbm
         * @interface IAutoBetRes
         * @property {common.IResult|null} [result] AutoBetRes result
         */

        /**
         * Constructs a new AutoBetRes.
         * @memberof pbm
         * @classdesc Represents an AutoBetRes.
         * @implements IAutoBetRes
         * @constructor
         * @param {pbm.IAutoBetRes=} [properties] Properties to set
         */
        function AutoBetRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AutoBetRes result.
         * @member {common.IResult|null|undefined} result
         * @memberof pbm.AutoBetRes
         * @instance
         */
        AutoBetRes.prototype.result = null;

        /**
         * Creates a new AutoBetRes instance using the specified properties.
         * @function create
         * @memberof pbm.AutoBetRes
         * @static
         * @param {pbm.IAutoBetRes=} [properties] Properties to set
         * @returns {pbm.AutoBetRes} AutoBetRes instance
         */
        AutoBetRes.create = function create(properties) {
            return new AutoBetRes(properties);
        };

        /**
         * Encodes the specified AutoBetRes message. Does not implicitly {@link pbm.AutoBetRes.verify|verify} messages.
         * @function encode
         * @memberof pbm.AutoBetRes
         * @static
         * @param {pbm.IAutoBetRes} message AutoBetRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AutoBetRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && message.hasOwnProperty("result"))
                $root.common.Result.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes an AutoBetRes message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.AutoBetRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.AutoBetRes} AutoBetRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AutoBetRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.AutoBetRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = $root.common.Result.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return AutoBetRes;
    })();

    /**
     * EAutoStatus enum.
     * @name pbm.EAutoStatus
     * @enum {string}
     * @property {number} EAutoStatusNone=0 EAutoStatusNone value
     * @property {number} EASNotStart=1 EASNotStart value
     * @property {number} EASOngoing=2 EASOngoing value
     * @property {number} EASEnd=3 EASEnd value
     */
    pbm.EAutoStatus = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "EAutoStatusNone"] = 0;
        values[valuesById[1] = "EASNotStart"] = 1;
        values[valuesById[2] = "EASOngoing"] = 2;
        values[valuesById[3] = "EASEnd"] = 3;
        return values;
    })();

    /**
     * EAutoReason enum.
     * @name pbm.EAutoReason
     * @enum {string}
     * @property {number} EAutoReasonNone=0 EAutoReasonNone value
     * @property {number} EARHand=1 EARHand value
     * @property {number} EARBalance=2 EARBalance value
     * @property {number} EARServerError=3 EARServerError value
     * @property {number} EARFinish=4 EARFinish value
     * @property {number} EARMaintain=5 EARMaintain value
     */
    pbm.EAutoReason = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "EAutoReasonNone"] = 0;
        values[valuesById[1] = "EARHand"] = 1;
        values[valuesById[2] = "EARBalance"] = 2;
        values[valuesById[3] = "EARServerError"] = 3;
        values[valuesById[4] = "EARFinish"] = 4;
        values[valuesById[5] = "EARMaintain"] = 5;
        return values;
    })();

    pbm.AutoInfo = (function() {

        /**
         * Properties of an AutoInfo.
         * @memberof pbm
         * @interface IAutoInfo
         * @property {pbm.EAutoStatus|null} [status] AutoInfo status
         * @property {number|null} [auto_rounds] AutoInfo auto_rounds
         * @property {number|null} [ran_rounds] AutoInfo ran_rounds
         * @property {number|null} [round_amount] AutoInfo round_amount
         * @property {number|null} [total_consume] AutoInfo total_consume
         * @property {number|null} [total_earn] AutoInfo total_earn
         * @property {pbm.EAutoReason|null} [reason] AutoInfo reason
         * @property {string|null} [id] AutoInfo id
         */

        /**
         * Constructs a new AutoInfo.
         * @memberof pbm
         * @classdesc Represents an AutoInfo.
         * @implements IAutoInfo
         * @constructor
         * @param {pbm.IAutoInfo=} [properties] Properties to set
         */
        function AutoInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AutoInfo status.
         * @member {pbm.EAutoStatus} status
         * @memberof pbm.AutoInfo
         * @instance
         */
        AutoInfo.prototype.status = 0;

        /**
         * AutoInfo auto_rounds.
         * @member {number} auto_rounds
         * @memberof pbm.AutoInfo
         * @instance
         */
        AutoInfo.prototype.auto_rounds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AutoInfo ran_rounds.
         * @member {number} ran_rounds
         * @memberof pbm.AutoInfo
         * @instance
         */
        AutoInfo.prototype.ran_rounds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AutoInfo round_amount.
         * @member {number} round_amount
         * @memberof pbm.AutoInfo
         * @instance
         */
        AutoInfo.prototype.round_amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AutoInfo total_consume.
         * @member {number} total_consume
         * @memberof pbm.AutoInfo
         * @instance
         */
        AutoInfo.prototype.total_consume = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AutoInfo total_earn.
         * @member {number} total_earn
         * @memberof pbm.AutoInfo
         * @instance
         */
        AutoInfo.prototype.total_earn = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AutoInfo reason.
         * @member {pbm.EAutoReason} reason
         * @memberof pbm.AutoInfo
         * @instance
         */
        AutoInfo.prototype.reason = 0;

        /**
         * AutoInfo id.
         * @member {string} id
         * @memberof pbm.AutoInfo
         * @instance
         */
        AutoInfo.prototype.id = "";

        /**
         * Creates a new AutoInfo instance using the specified properties.
         * @function create
         * @memberof pbm.AutoInfo
         * @static
         * @param {pbm.IAutoInfo=} [properties] Properties to set
         * @returns {pbm.AutoInfo} AutoInfo instance
         */
        AutoInfo.create = function create(properties) {
            return new AutoInfo(properties);
        };

        /**
         * Encodes the specified AutoInfo message. Does not implicitly {@link pbm.AutoInfo.verify|verify} messages.
         * @function encode
         * @memberof pbm.AutoInfo
         * @static
         * @param {pbm.IAutoInfo} message AutoInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AutoInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && message.hasOwnProperty("status"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
            if (message.auto_rounds != null && message.hasOwnProperty("auto_rounds"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.auto_rounds);
            if (message.ran_rounds != null && message.hasOwnProperty("ran_rounds"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.ran_rounds);
            if (message.round_amount != null && message.hasOwnProperty("round_amount"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.round_amount);
            if (message.total_consume != null && message.hasOwnProperty("total_consume"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.total_consume);
            if (message.total_earn != null && message.hasOwnProperty("total_earn"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.total_earn);
            if (message.reason != null && message.hasOwnProperty("reason"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.reason);
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.id);
            return writer;
        };

        /**
         * Decodes an AutoInfo message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.AutoInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.AutoInfo} AutoInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AutoInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.AutoInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32();
                    break;
                case 2:
                    message.auto_rounds = reader.int64();
                    break;
                case 3:
                    message.ran_rounds = reader.int64();
                    break;
                case 4:
                    message.round_amount = reader.int64();
                    break;
                case 5:
                    message.total_consume = reader.int64();
                    break;
                case 6:
                    message.total_earn = reader.int64();
                    break;
                case 7:
                    message.reason = reader.int32();
                    break;
                case 8:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return AutoInfo;
    })();

    pbm.CancelAutoReq = (function() {

        /**
         * Properties of a CancelAutoReq.
         * @memberof pbm
         * @interface ICancelAutoReq
         */

        /**
         * Constructs a new CancelAutoReq.
         * @memberof pbm
         * @classdesc Represents a CancelAutoReq.
         * @implements ICancelAutoReq
         * @constructor
         * @param {pbm.ICancelAutoReq=} [properties] Properties to set
         */
        function CancelAutoReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new CancelAutoReq instance using the specified properties.
         * @function create
         * @memberof pbm.CancelAutoReq
         * @static
         * @param {pbm.ICancelAutoReq=} [properties] Properties to set
         * @returns {pbm.CancelAutoReq} CancelAutoReq instance
         */
        CancelAutoReq.create = function create(properties) {
            return new CancelAutoReq(properties);
        };

        /**
         * Encodes the specified CancelAutoReq message. Does not implicitly {@link pbm.CancelAutoReq.verify|verify} messages.
         * @function encode
         * @memberof pbm.CancelAutoReq
         * @static
         * @param {pbm.ICancelAutoReq} message CancelAutoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CancelAutoReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Decodes a CancelAutoReq message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.CancelAutoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.CancelAutoReq} CancelAutoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CancelAutoReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.CancelAutoReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return CancelAutoReq;
    })();

    pbm.CancelAutoRes = (function() {

        /**
         * Properties of a CancelAutoRes.
         * @memberof pbm
         * @interface ICancelAutoRes
         * @property {common.IResult|null} [result] CancelAutoRes result
         */

        /**
         * Constructs a new CancelAutoRes.
         * @memberof pbm
         * @classdesc Represents a CancelAutoRes.
         * @implements ICancelAutoRes
         * @constructor
         * @param {pbm.ICancelAutoRes=} [properties] Properties to set
         */
        function CancelAutoRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CancelAutoRes result.
         * @member {common.IResult|null|undefined} result
         * @memberof pbm.CancelAutoRes
         * @instance
         */
        CancelAutoRes.prototype.result = null;

        /**
         * Creates a new CancelAutoRes instance using the specified properties.
         * @function create
         * @memberof pbm.CancelAutoRes
         * @static
         * @param {pbm.ICancelAutoRes=} [properties] Properties to set
         * @returns {pbm.CancelAutoRes} CancelAutoRes instance
         */
        CancelAutoRes.create = function create(properties) {
            return new CancelAutoRes(properties);
        };

        /**
         * Encodes the specified CancelAutoRes message. Does not implicitly {@link pbm.CancelAutoRes.verify|verify} messages.
         * @function encode
         * @memberof pbm.CancelAutoRes
         * @static
         * @param {pbm.ICancelAutoRes} message CancelAutoRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CancelAutoRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && message.hasOwnProperty("result"))
                $root.common.Result.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a CancelAutoRes message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.CancelAutoRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.CancelAutoRes} CancelAutoRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CancelAutoRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.CancelAutoRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = $root.common.Result.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return CancelAutoRes;
    })();

    pbm.GetRankReq = (function() {

        /**
         * Properties of a GetRankReq.
         * @memberof pbm
         * @interface IGetRankReq
         * @property {number|null} [day_offset] GetRankReq day_offset
         */

        /**
         * Constructs a new GetRankReq.
         * @memberof pbm
         * @classdesc Represents a GetRankReq.
         * @implements IGetRankReq
         * @constructor
         * @param {pbm.IGetRankReq=} [properties] Properties to set
         */
        function GetRankReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetRankReq day_offset.
         * @member {number} day_offset
         * @memberof pbm.GetRankReq
         * @instance
         */
        GetRankReq.prototype.day_offset = 0;

        /**
         * Creates a new GetRankReq instance using the specified properties.
         * @function create
         * @memberof pbm.GetRankReq
         * @static
         * @param {pbm.IGetRankReq=} [properties] Properties to set
         * @returns {pbm.GetRankReq} GetRankReq instance
         */
        GetRankReq.create = function create(properties) {
            return new GetRankReq(properties);
        };

        /**
         * Encodes the specified GetRankReq message. Does not implicitly {@link pbm.GetRankReq.verify|verify} messages.
         * @function encode
         * @memberof pbm.GetRankReq
         * @static
         * @param {pbm.IGetRankReq} message GetRankReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRankReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.day_offset != null && message.hasOwnProperty("day_offset"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.day_offset);
            return writer;
        };

        /**
         * Decodes a GetRankReq message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.GetRankReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.GetRankReq} GetRankReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRankReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.GetRankReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.day_offset = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return GetRankReq;
    })();

    pbm.GetRankRes = (function() {

        /**
         * Properties of a GetRankRes.
         * @memberof pbm
         * @interface IGetRankRes
         * @property {common.IResult|null} [result] GetRankRes result
         * @property {number|null} [day_offset] GetRankRes day_offset
         * @property {Array.<pbm.IRoleRankData>|null} [rank_list] GetRankRes rank_list
         * @property {pbm.IRoleRankData|null} [my_rank] GetRankRes my_rank
         * @property {number|null} [remain_seconds] GetRankRes remain_seconds
         * @property {pbm.IRoleRankData|null} [yesterday_top_rank] GetRankRes yesterday_top_rank
         * @property {number|null} [cumulative_number] GetRankRes cumulative_number
         */

        /**
         * Constructs a new GetRankRes.
         * @memberof pbm
         * @classdesc Represents a GetRankRes.
         * @implements IGetRankRes
         * @constructor
         * @param {pbm.IGetRankRes=} [properties] Properties to set
         */
        function GetRankRes(properties) {
            this.rank_list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetRankRes result.
         * @member {common.IResult|null|undefined} result
         * @memberof pbm.GetRankRes
         * @instance
         */
        GetRankRes.prototype.result = null;

        /**
         * GetRankRes day_offset.
         * @member {number} day_offset
         * @memberof pbm.GetRankRes
         * @instance
         */
        GetRankRes.prototype.day_offset = 0;

        /**
         * GetRankRes rank_list.
         * @member {Array.<pbm.IRoleRankData>} rank_list
         * @memberof pbm.GetRankRes
         * @instance
         */
        GetRankRes.prototype.rank_list = $util.emptyArray;

        /**
         * GetRankRes my_rank.
         * @member {pbm.IRoleRankData|null|undefined} my_rank
         * @memberof pbm.GetRankRes
         * @instance
         */
        GetRankRes.prototype.my_rank = null;

        /**
         * GetRankRes remain_seconds.
         * @member {number} remain_seconds
         * @memberof pbm.GetRankRes
         * @instance
         */
        GetRankRes.prototype.remain_seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GetRankRes yesterday_top_rank.
         * @member {pbm.IRoleRankData|null|undefined} yesterday_top_rank
         * @memberof pbm.GetRankRes
         * @instance
         */
        GetRankRes.prototype.yesterday_top_rank = null;

        /**
         * GetRankRes cumulative_number.
         * @member {number} cumulative_number
         * @memberof pbm.GetRankRes
         * @instance
         */
        GetRankRes.prototype.cumulative_number = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new GetRankRes instance using the specified properties.
         * @function create
         * @memberof pbm.GetRankRes
         * @static
         * @param {pbm.IGetRankRes=} [properties] Properties to set
         * @returns {pbm.GetRankRes} GetRankRes instance
         */
        GetRankRes.create = function create(properties) {
            return new GetRankRes(properties);
        };

        /**
         * Encodes the specified GetRankRes message. Does not implicitly {@link pbm.GetRankRes.verify|verify} messages.
         * @function encode
         * @memberof pbm.GetRankRes
         * @static
         * @param {pbm.IGetRankRes} message GetRankRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRankRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && message.hasOwnProperty("result"))
                $root.common.Result.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.day_offset != null && message.hasOwnProperty("day_offset"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.day_offset);
            if (message.rank_list != null && message.rank_list.length)
                for (var i = 0; i < message.rank_list.length; ++i)
                    $root.pbm.RoleRankData.encode(message.rank_list[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.my_rank != null && message.hasOwnProperty("my_rank"))
                $root.pbm.RoleRankData.encode(message.my_rank, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.remain_seconds != null && message.hasOwnProperty("remain_seconds"))
                writer.uint32(/* id 13, wireType 0 =*/104).int64(message.remain_seconds);
            if (message.yesterday_top_rank != null && message.hasOwnProperty("yesterday_top_rank"))
                $root.pbm.RoleRankData.encode(message.yesterday_top_rank, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
            if (message.cumulative_number != null && message.hasOwnProperty("cumulative_number"))
                writer.uint32(/* id 15, wireType 0 =*/120).int64(message.cumulative_number);
            return writer;
        };

        /**
         * Decodes a GetRankRes message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.GetRankRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.GetRankRes} GetRankRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRankRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.GetRankRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = $root.common.Result.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.day_offset = reader.int32();
                    break;
                case 11:
                    if (!(message.rank_list && message.rank_list.length))
                        message.rank_list = [];
                    message.rank_list.push($root.pbm.RoleRankData.decode(reader, reader.uint32()));
                    break;
                case 12:
                    message.my_rank = $root.pbm.RoleRankData.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.remain_seconds = reader.int64();
                    break;
                case 14:
                    message.yesterday_top_rank = $root.pbm.RoleRankData.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.cumulative_number = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return GetRankRes;
    })();

    pbm.RankRewardNotifyRes = (function() {

        /**
         * Properties of a RankRewardNotifyRes.
         * @memberof pbm
         * @interface IRankRewardNotifyRes
         * @property {common.IResult|null} [result] RankRewardNotifyRes result
         * @property {string|null} [rank_date] RankRewardNotifyRes rank_date
         * @property {number|null} [rank] RankRewardNotifyRes rank
         * @property {string|null} [uid] RankRewardNotifyRes uid
         * @property {commodity.ICommodityReward|null} [reward] RankRewardNotifyRes reward
         */

        /**
         * Constructs a new RankRewardNotifyRes.
         * @memberof pbm
         * @classdesc Represents a RankRewardNotifyRes.
         * @implements IRankRewardNotifyRes
         * @constructor
         * @param {pbm.IRankRewardNotifyRes=} [properties] Properties to set
         */
        function RankRewardNotifyRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RankRewardNotifyRes result.
         * @member {common.IResult|null|undefined} result
         * @memberof pbm.RankRewardNotifyRes
         * @instance
         */
        RankRewardNotifyRes.prototype.result = null;

        /**
         * RankRewardNotifyRes rank_date.
         * @member {string} rank_date
         * @memberof pbm.RankRewardNotifyRes
         * @instance
         */
        RankRewardNotifyRes.prototype.rank_date = "";

        /**
         * RankRewardNotifyRes rank.
         * @member {number} rank
         * @memberof pbm.RankRewardNotifyRes
         * @instance
         */
        RankRewardNotifyRes.prototype.rank = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RankRewardNotifyRes uid.
         * @member {string} uid
         * @memberof pbm.RankRewardNotifyRes
         * @instance
         */
        RankRewardNotifyRes.prototype.uid = "";

        /**
         * RankRewardNotifyRes reward.
         * @member {commodity.ICommodityReward|null|undefined} reward
         * @memberof pbm.RankRewardNotifyRes
         * @instance
         */
        RankRewardNotifyRes.prototype.reward = null;

        /**
         * Creates a new RankRewardNotifyRes instance using the specified properties.
         * @function create
         * @memberof pbm.RankRewardNotifyRes
         * @static
         * @param {pbm.IRankRewardNotifyRes=} [properties] Properties to set
         * @returns {pbm.RankRewardNotifyRes} RankRewardNotifyRes instance
         */
        RankRewardNotifyRes.create = function create(properties) {
            return new RankRewardNotifyRes(properties);
        };

        /**
         * Encodes the specified RankRewardNotifyRes message. Does not implicitly {@link pbm.RankRewardNotifyRes.verify|verify} messages.
         * @function encode
         * @memberof pbm.RankRewardNotifyRes
         * @static
         * @param {pbm.IRankRewardNotifyRes} message RankRewardNotifyRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RankRewardNotifyRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && message.hasOwnProperty("result"))
                $root.common.Result.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.rank_date != null && message.hasOwnProperty("rank_date"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.rank_date);
            if (message.rank != null && message.hasOwnProperty("rank"))
                writer.uint32(/* id 12, wireType 0 =*/96).int64(message.rank);
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.uid);
            if (message.reward != null && message.hasOwnProperty("reward"))
                $root.commodity.CommodityReward.encode(message.reward, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a RankRewardNotifyRes message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.RankRewardNotifyRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.RankRewardNotifyRes} RankRewardNotifyRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RankRewardNotifyRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.RankRewardNotifyRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = $root.common.Result.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.rank_date = reader.string();
                    break;
                case 12:
                    message.rank = reader.int64();
                    break;
                case 13:
                    message.uid = reader.string();
                    break;
                case 14:
                    message.reward = $root.commodity.CommodityReward.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return RankRewardNotifyRes;
    })();

    pbm.RoleRankData = (function() {

        /**
         * Properties of a RoleRankData.
         * @memberof pbm
         * @interface IRoleRankData
         * @property {string|null} [uid] RoleRankData uid
         * @property {number|null} [score] RoleRankData score
         * @property {number|null} [rank] RoleRankData rank
         * @property {string|null} [avatar] RoleRankData avatar
         * @property {string|null} [avatar_frame] RoleRankData avatar_frame
         * @property {string|null} [nick] RoleRankData nick
         * @property {pbm.INobleIcon|null} [noble_icon] RoleRankData noble_icon
         * @property {pbm.IVipInfo|null} [vip_info] RoleRankData vip_info
         */

        /**
         * Constructs a new RoleRankData.
         * @memberof pbm
         * @classdesc Represents a RoleRankData.
         * @implements IRoleRankData
         * @constructor
         * @param {pbm.IRoleRankData=} [properties] Properties to set
         */
        function RoleRankData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoleRankData uid.
         * @member {string} uid
         * @memberof pbm.RoleRankData
         * @instance
         */
        RoleRankData.prototype.uid = "";

        /**
         * RoleRankData score.
         * @member {number} score
         * @memberof pbm.RoleRankData
         * @instance
         */
        RoleRankData.prototype.score = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RoleRankData rank.
         * @member {number} rank
         * @memberof pbm.RoleRankData
         * @instance
         */
        RoleRankData.prototype.rank = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RoleRankData avatar.
         * @member {string} avatar
         * @memberof pbm.RoleRankData
         * @instance
         */
        RoleRankData.prototype.avatar = "";

        /**
         * RoleRankData avatar_frame.
         * @member {string} avatar_frame
         * @memberof pbm.RoleRankData
         * @instance
         */
        RoleRankData.prototype.avatar_frame = "";

        /**
         * RoleRankData nick.
         * @member {string} nick
         * @memberof pbm.RoleRankData
         * @instance
         */
        RoleRankData.prototype.nick = "";

        /**
         * RoleRankData noble_icon.
         * @member {pbm.INobleIcon|null|undefined} noble_icon
         * @memberof pbm.RoleRankData
         * @instance
         */
        RoleRankData.prototype.noble_icon = null;

        /**
         * RoleRankData vip_info.
         * @member {pbm.IVipInfo|null|undefined} vip_info
         * @memberof pbm.RoleRankData
         * @instance
         */
        RoleRankData.prototype.vip_info = null;

        /**
         * Creates a new RoleRankData instance using the specified properties.
         * @function create
         * @memberof pbm.RoleRankData
         * @static
         * @param {pbm.IRoleRankData=} [properties] Properties to set
         * @returns {pbm.RoleRankData} RoleRankData instance
         */
        RoleRankData.create = function create(properties) {
            return new RoleRankData(properties);
        };

        /**
         * Encodes the specified RoleRankData message. Does not implicitly {@link pbm.RoleRankData.verify|verify} messages.
         * @function encode
         * @memberof pbm.RoleRankData
         * @static
         * @param {pbm.IRoleRankData} message RoleRankData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoleRankData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
            if (message.score != null && message.hasOwnProperty("score"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.score);
            if (message.rank != null && message.hasOwnProperty("rank"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.rank);
            if (message.avatar != null && message.hasOwnProperty("avatar"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.avatar);
            if (message.avatar_frame != null && message.hasOwnProperty("avatar_frame"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.avatar_frame);
            if (message.nick != null && message.hasOwnProperty("nick"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.nick);
            if (message.noble_icon != null && message.hasOwnProperty("noble_icon"))
                $root.pbm.NobleIcon.encode(message.noble_icon, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.vip_info != null && message.hasOwnProperty("vip_info"))
                $root.pbm.VipInfo.encode(message.vip_info, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a RoleRankData message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.RoleRankData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.RoleRankData} RoleRankData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoleRankData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.RoleRankData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.string();
                    break;
                case 2:
                    message.score = reader.int64();
                    break;
                case 3:
                    message.rank = reader.int64();
                    break;
                case 4:
                    message.avatar = reader.string();
                    break;
                case 5:
                    message.avatar_frame = reader.string();
                    break;
                case 6:
                    message.nick = reader.string();
                    break;
                case 7:
                    message.noble_icon = $root.pbm.NobleIcon.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.vip_info = $root.pbm.VipInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return RoleRankData;
    })();

    pbm.NobleIcon = (function() {

        /**
         * Properties of a NobleIcon.
         * @memberof pbm
         * @interface INobleIcon
         * @property {string|null} [bg_icon] NobleIcon bg_icon
         * @property {string|null} [brand_icon] NobleIcon brand_icon
         * @property {string|null} [big_brand_icon] NobleIcon big_brand_icon
         * @property {number|null} [icon_id] NobleIcon icon_id
         */

        /**
         * Constructs a new NobleIcon.
         * @memberof pbm
         * @classdesc Represents a NobleIcon.
         * @implements INobleIcon
         * @constructor
         * @param {pbm.INobleIcon=} [properties] Properties to set
         */
        function NobleIcon(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NobleIcon bg_icon.
         * @member {string} bg_icon
         * @memberof pbm.NobleIcon
         * @instance
         */
        NobleIcon.prototype.bg_icon = "";

        /**
         * NobleIcon brand_icon.
         * @member {string} brand_icon
         * @memberof pbm.NobleIcon
         * @instance
         */
        NobleIcon.prototype.brand_icon = "";

        /**
         * NobleIcon big_brand_icon.
         * @member {string} big_brand_icon
         * @memberof pbm.NobleIcon
         * @instance
         */
        NobleIcon.prototype.big_brand_icon = "";

        /**
         * NobleIcon icon_id.
         * @member {number} icon_id
         * @memberof pbm.NobleIcon
         * @instance
         */
        NobleIcon.prototype.icon_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new NobleIcon instance using the specified properties.
         * @function create
         * @memberof pbm.NobleIcon
         * @static
         * @param {pbm.INobleIcon=} [properties] Properties to set
         * @returns {pbm.NobleIcon} NobleIcon instance
         */
        NobleIcon.create = function create(properties) {
            return new NobleIcon(properties);
        };

        /**
         * Encodes the specified NobleIcon message. Does not implicitly {@link pbm.NobleIcon.verify|verify} messages.
         * @function encode
         * @memberof pbm.NobleIcon
         * @static
         * @param {pbm.INobleIcon} message NobleIcon message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NobleIcon.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.bg_icon != null && message.hasOwnProperty("bg_icon"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.bg_icon);
            if (message.brand_icon != null && message.hasOwnProperty("brand_icon"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.brand_icon);
            if (message.big_brand_icon != null && message.hasOwnProperty("big_brand_icon"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.big_brand_icon);
            if (message.icon_id != null && message.hasOwnProperty("icon_id"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.icon_id);
            return writer;
        };

        /**
         * Decodes a NobleIcon message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.NobleIcon
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.NobleIcon} NobleIcon
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NobleIcon.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.NobleIcon();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.bg_icon = reader.string();
                    break;
                case 2:
                    message.brand_icon = reader.string();
                    break;
                case 3:
                    message.big_brand_icon = reader.string();
                    break;
                case 4:
                    message.icon_id = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return NobleIcon;
    })();

    pbm.VipInfo = (function() {

        /**
         * Properties of a VipInfo.
         * @memberof pbm
         * @interface IVipInfo
         * @property {string|null} [bg_icon] VipInfo bg_icon
         * @property {string|null} [brand_icon] VipInfo brand_icon
         * @property {string|null} [frozen_bg_icon] VipInfo frozen_bg_icon
         * @property {string|null} [frozen_brand_icon] VipInfo frozen_brand_icon
         * @property {number|null} [vip_level] VipInfo vip_level
         * @property {string|null} [sub_type] VipInfo sub_type
         */

        /**
         * Constructs a new VipInfo.
         * @memberof pbm
         * @classdesc Represents a VipInfo.
         * @implements IVipInfo
         * @constructor
         * @param {pbm.IVipInfo=} [properties] Properties to set
         */
        function VipInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VipInfo bg_icon.
         * @member {string} bg_icon
         * @memberof pbm.VipInfo
         * @instance
         */
        VipInfo.prototype.bg_icon = "";

        /**
         * VipInfo brand_icon.
         * @member {string} brand_icon
         * @memberof pbm.VipInfo
         * @instance
         */
        VipInfo.prototype.brand_icon = "";

        /**
         * VipInfo frozen_bg_icon.
         * @member {string} frozen_bg_icon
         * @memberof pbm.VipInfo
         * @instance
         */
        VipInfo.prototype.frozen_bg_icon = "";

        /**
         * VipInfo frozen_brand_icon.
         * @member {string} frozen_brand_icon
         * @memberof pbm.VipInfo
         * @instance
         */
        VipInfo.prototype.frozen_brand_icon = "";

        /**
         * VipInfo vip_level.
         * @member {number} vip_level
         * @memberof pbm.VipInfo
         * @instance
         */
        VipInfo.prototype.vip_level = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * VipInfo sub_type.
         * @member {string} sub_type
         * @memberof pbm.VipInfo
         * @instance
         */
        VipInfo.prototype.sub_type = "";

        /**
         * Creates a new VipInfo instance using the specified properties.
         * @function create
         * @memberof pbm.VipInfo
         * @static
         * @param {pbm.IVipInfo=} [properties] Properties to set
         * @returns {pbm.VipInfo} VipInfo instance
         */
        VipInfo.create = function create(properties) {
            return new VipInfo(properties);
        };

        /**
         * Encodes the specified VipInfo message. Does not implicitly {@link pbm.VipInfo.verify|verify} messages.
         * @function encode
         * @memberof pbm.VipInfo
         * @static
         * @param {pbm.IVipInfo} message VipInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VipInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.bg_icon != null && message.hasOwnProperty("bg_icon"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.bg_icon);
            if (message.brand_icon != null && message.hasOwnProperty("brand_icon"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.brand_icon);
            if (message.frozen_bg_icon != null && message.hasOwnProperty("frozen_bg_icon"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.frozen_bg_icon);
            if (message.frozen_brand_icon != null && message.hasOwnProperty("frozen_brand_icon"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.frozen_brand_icon);
            if (message.vip_level != null && message.hasOwnProperty("vip_level"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.vip_level);
            if (message.sub_type != null && message.hasOwnProperty("sub_type"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.sub_type);
            return writer;
        };

        /**
         * Decodes a VipInfo message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.VipInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.VipInfo} VipInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VipInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.VipInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.bg_icon = reader.string();
                    break;
                case 2:
                    message.brand_icon = reader.string();
                    break;
                case 3:
                    message.frozen_bg_icon = reader.string();
                    break;
                case 4:
                    message.frozen_brand_icon = reader.string();
                    break;
                case 5:
                    message.vip_level = reader.int64();
                    break;
                case 6:
                    message.sub_type = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return VipInfo;
    })();

    pbm.TestCmdReq = (function() {

        /**
         * Properties of a TestCmdReq.
         * @memberof pbm
         * @interface ITestCmdReq
         * @property {number|null} [cmd] TestCmdReq cmd
         * @property {number|null} [param] TestCmdReq param
         */

        /**
         * Constructs a new TestCmdReq.
         * @memberof pbm
         * @classdesc Represents a TestCmdReq.
         * @implements ITestCmdReq
         * @constructor
         * @param {pbm.ITestCmdReq=} [properties] Properties to set
         */
        function TestCmdReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TestCmdReq cmd.
         * @member {number} cmd
         * @memberof pbm.TestCmdReq
         * @instance
         */
        TestCmdReq.prototype.cmd = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * TestCmdReq param.
         * @member {number} param
         * @memberof pbm.TestCmdReq
         * @instance
         */
        TestCmdReq.prototype.param = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new TestCmdReq instance using the specified properties.
         * @function create
         * @memberof pbm.TestCmdReq
         * @static
         * @param {pbm.ITestCmdReq=} [properties] Properties to set
         * @returns {pbm.TestCmdReq} TestCmdReq instance
         */
        TestCmdReq.create = function create(properties) {
            return new TestCmdReq(properties);
        };

        /**
         * Encodes the specified TestCmdReq message. Does not implicitly {@link pbm.TestCmdReq.verify|verify} messages.
         * @function encode
         * @memberof pbm.TestCmdReq
         * @static
         * @param {pbm.ITestCmdReq} message TestCmdReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TestCmdReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.cmd);
            if (message.param != null && message.hasOwnProperty("param"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.param);
            return writer;
        };

        /**
         * Decodes a TestCmdReq message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.TestCmdReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.TestCmdReq} TestCmdReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TestCmdReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.TestCmdReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cmd = reader.int64();
                    break;
                case 2:
                    message.param = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return TestCmdReq;
    })();

    pbm.TestCmdRes = (function() {

        /**
         * Properties of a TestCmdRes.
         * @memberof pbm
         * @interface ITestCmdRes
         * @property {common.IResult|null} [result] TestCmdRes result
         */

        /**
         * Constructs a new TestCmdRes.
         * @memberof pbm
         * @classdesc Represents a TestCmdRes.
         * @implements ITestCmdRes
         * @constructor
         * @param {pbm.ITestCmdRes=} [properties] Properties to set
         */
        function TestCmdRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TestCmdRes result.
         * @member {common.IResult|null|undefined} result
         * @memberof pbm.TestCmdRes
         * @instance
         */
        TestCmdRes.prototype.result = null;

        /**
         * Creates a new TestCmdRes instance using the specified properties.
         * @function create
         * @memberof pbm.TestCmdRes
         * @static
         * @param {pbm.ITestCmdRes=} [properties] Properties to set
         * @returns {pbm.TestCmdRes} TestCmdRes instance
         */
        TestCmdRes.create = function create(properties) {
            return new TestCmdRes(properties);
        };

        /**
         * Encodes the specified TestCmdRes message. Does not implicitly {@link pbm.TestCmdRes.verify|verify} messages.
         * @function encode
         * @memberof pbm.TestCmdRes
         * @static
         * @param {pbm.ITestCmdRes} message TestCmdRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TestCmdRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && message.hasOwnProperty("result"))
                $root.common.Result.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a TestCmdRes message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.TestCmdRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.TestCmdRes} TestCmdRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TestCmdRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.TestCmdRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = $root.common.Result.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return TestCmdRes;
    })();

    pbm.ReportReq = (function() {

        /**
         * Properties of a ReportReq.
         * @memberof pbm
         * @interface IReportReq
         * @property {string|null} [os] ReportReq os
         * @property {string|null} [client_version] ReportReq client_version
         * @property {string|null} [client_name] ReportReq client_name
         */

        /**
         * Constructs a new ReportReq.
         * @memberof pbm
         * @classdesc Represents a ReportReq.
         * @implements IReportReq
         * @constructor
         * @param {pbm.IReportReq=} [properties] Properties to set
         */
        function ReportReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReportReq os.
         * @member {string} os
         * @memberof pbm.ReportReq
         * @instance
         */
        ReportReq.prototype.os = "";

        /**
         * ReportReq client_version.
         * @member {string} client_version
         * @memberof pbm.ReportReq
         * @instance
         */
        ReportReq.prototype.client_version = "";

        /**
         * ReportReq client_name.
         * @member {string} client_name
         * @memberof pbm.ReportReq
         * @instance
         */
        ReportReq.prototype.client_name = "";

        /**
         * Creates a new ReportReq instance using the specified properties.
         * @function create
         * @memberof pbm.ReportReq
         * @static
         * @param {pbm.IReportReq=} [properties] Properties to set
         * @returns {pbm.ReportReq} ReportReq instance
         */
        ReportReq.create = function create(properties) {
            return new ReportReq(properties);
        };

        /**
         * Encodes the specified ReportReq message. Does not implicitly {@link pbm.ReportReq.verify|verify} messages.
         * @function encode
         * @memberof pbm.ReportReq
         * @static
         * @param {pbm.IReportReq} message ReportReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReportReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.os != null && message.hasOwnProperty("os"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.os);
            if (message.client_version != null && message.hasOwnProperty("client_version"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.client_version);
            if (message.client_name != null && message.hasOwnProperty("client_name"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.client_name);
            return writer;
        };

        /**
         * Decodes a ReportReq message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.ReportReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.ReportReq} ReportReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReportReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.ReportReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.os = reader.string();
                    break;
                case 2:
                    message.client_version = reader.string();
                    break;
                case 3:
                    message.client_name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ReportReq;
    })();

    pbm.ReportRes = (function() {

        /**
         * Properties of a ReportRes.
         * @memberof pbm
         * @interface IReportRes
         * @property {common.IResult|null} [result] ReportRes result
         */

        /**
         * Constructs a new ReportRes.
         * @memberof pbm
         * @classdesc Represents a ReportRes.
         * @implements IReportRes
         * @constructor
         * @param {pbm.IReportRes=} [properties] Properties to set
         */
        function ReportRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReportRes result.
         * @member {common.IResult|null|undefined} result
         * @memberof pbm.ReportRes
         * @instance
         */
        ReportRes.prototype.result = null;

        /**
         * Creates a new ReportRes instance using the specified properties.
         * @function create
         * @memberof pbm.ReportRes
         * @static
         * @param {pbm.IReportRes=} [properties] Properties to set
         * @returns {pbm.ReportRes} ReportRes instance
         */
        ReportRes.create = function create(properties) {
            return new ReportRes(properties);
        };

        /**
         * Encodes the specified ReportRes message. Does not implicitly {@link pbm.ReportRes.verify|verify} messages.
         * @function encode
         * @memberof pbm.ReportRes
         * @static
         * @param {pbm.IReportRes} message ReportRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReportRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && message.hasOwnProperty("result"))
                $root.common.Result.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a ReportRes message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.ReportRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.ReportRes} ReportRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReportRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.ReportRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = $root.common.Result.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return ReportRes;
    })();

    pbm.CidReq = (function() {

        /**
         * Properties of a CidReq.
         * @memberof pbm
         * @interface ICidReq
         * @property {string|null} [cid] CidReq cid
         * @property {number|null} [openScene] CidReq openScene
         * @property {string|null} [from] CidReq from
         * @property {string|null} [voiceRoomData] CidReq voiceRoomData
         */

        /**
         * Constructs a new CidReq.
         * @memberof pbm
         * @classdesc Represents a CidReq.
         * @implements ICidReq
         * @constructor
         * @param {pbm.ICidReq=} [properties] Properties to set
         */
        function CidReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CidReq cid.
         * @member {string} cid
         * @memberof pbm.CidReq
         * @instance
         */
        CidReq.prototype.cid = "";

        /**
         * CidReq openScene.
         * @member {number} openScene
         * @memberof pbm.CidReq
         * @instance
         */
        CidReq.prototype.openScene = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CidReq from.
         * @member {string} from
         * @memberof pbm.CidReq
         * @instance
         */
        CidReq.prototype.from = "";

        /**
         * CidReq voiceRoomData.
         * @member {string} voiceRoomData
         * @memberof pbm.CidReq
         * @instance
         */
        CidReq.prototype.voiceRoomData = "";

        /**
         * Creates a new CidReq instance using the specified properties.
         * @function create
         * @memberof pbm.CidReq
         * @static
         * @param {pbm.ICidReq=} [properties] Properties to set
         * @returns {pbm.CidReq} CidReq instance
         */
        CidReq.create = function create(properties) {
            return new CidReq(properties);
        };

        /**
         * Encodes the specified CidReq message. Does not implicitly {@link pbm.CidReq.verify|verify} messages.
         * @function encode
         * @memberof pbm.CidReq
         * @static
         * @param {pbm.ICidReq} message CidReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CidReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cid != null && message.hasOwnProperty("cid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.cid);
            if (message.openScene != null && message.hasOwnProperty("openScene"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.openScene);
            if (message.from != null && message.hasOwnProperty("from"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.from);
            if (message.voiceRoomData != null && message.hasOwnProperty("voiceRoomData"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.voiceRoomData);
            return writer;
        };

        /**
         * Decodes a CidReq message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.CidReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.CidReq} CidReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CidReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.CidReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cid = reader.string();
                    break;
                case 2:
                    message.openScene = reader.int64();
                    break;
                case 3:
                    message.from = reader.string();
                    break;
                case 4:
                    message.voiceRoomData = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return CidReq;
    })();

    pbm.CidRes = (function() {

        /**
         * Properties of a CidRes.
         * @memberof pbm
         * @interface ICidRes
         * @property {common.IResult|null} [result] CidRes result
         */

        /**
         * Constructs a new CidRes.
         * @memberof pbm
         * @classdesc Represents a CidRes.
         * @implements ICidRes
         * @constructor
         * @param {pbm.ICidRes=} [properties] Properties to set
         */
        function CidRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CidRes result.
         * @member {common.IResult|null|undefined} result
         * @memberof pbm.CidRes
         * @instance
         */
        CidRes.prototype.result = null;

        /**
         * Creates a new CidRes instance using the specified properties.
         * @function create
         * @memberof pbm.CidRes
         * @static
         * @param {pbm.ICidRes=} [properties] Properties to set
         * @returns {pbm.CidRes} CidRes instance
         */
        CidRes.create = function create(properties) {
            return new CidRes(properties);
        };

        /**
         * Encodes the specified CidRes message. Does not implicitly {@link pbm.CidRes.verify|verify} messages.
         * @function encode
         * @memberof pbm.CidRes
         * @static
         * @param {pbm.ICidRes} message CidRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CidRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && message.hasOwnProperty("result"))
                $root.common.Result.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a CidRes message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.CidRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.CidRes} CidRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CidRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.CidRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = $root.common.Result.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return CidRes;
    })();

    pbm.CommoditySpecified = (function() {

        /**
         * Properties of a CommoditySpecified.
         * @memberof pbm
         * @interface ICommoditySpecified
         * @property {commodity.CommodityType|null} [commodity_type] CommoditySpecified commodity_type
         * @property {number|null} [commodity_id] CommoditySpecified commodity_id
         * @property {number|null} [version] CommoditySpecified version
         */

        /**
         * Constructs a new CommoditySpecified.
         * @memberof pbm
         * @classdesc Represents a CommoditySpecified.
         * @implements ICommoditySpecified
         * @constructor
         * @param {pbm.ICommoditySpecified=} [properties] Properties to set
         */
        function CommoditySpecified(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CommoditySpecified commodity_type.
         * @member {commodity.CommodityType} commodity_type
         * @memberof pbm.CommoditySpecified
         * @instance
         */
        CommoditySpecified.prototype.commodity_type = 0;

        /**
         * CommoditySpecified commodity_id.
         * @member {number} commodity_id
         * @memberof pbm.CommoditySpecified
         * @instance
         */
        CommoditySpecified.prototype.commodity_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CommoditySpecified version.
         * @member {number} version
         * @memberof pbm.CommoditySpecified
         * @instance
         */
        CommoditySpecified.prototype.version = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new CommoditySpecified instance using the specified properties.
         * @function create
         * @memberof pbm.CommoditySpecified
         * @static
         * @param {pbm.ICommoditySpecified=} [properties] Properties to set
         * @returns {pbm.CommoditySpecified} CommoditySpecified instance
         */
        CommoditySpecified.create = function create(properties) {
            return new CommoditySpecified(properties);
        };

        /**
         * Encodes the specified CommoditySpecified message. Does not implicitly {@link pbm.CommoditySpecified.verify|verify} messages.
         * @function encode
         * @memberof pbm.CommoditySpecified
         * @static
         * @param {pbm.ICommoditySpecified} message CommoditySpecified message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommoditySpecified.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.commodity_type != null && message.hasOwnProperty("commodity_type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.commodity_type);
            if (message.commodity_id != null && message.hasOwnProperty("commodity_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.commodity_id);
            if (message.version != null && message.hasOwnProperty("version"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.version);
            return writer;
        };

        /**
         * Decodes a CommoditySpecified message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.CommoditySpecified
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.CommoditySpecified} CommoditySpecified
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommoditySpecified.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.CommoditySpecified();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.commodity_type = reader.int32();
                    break;
                case 2:
                    message.commodity_id = reader.int64();
                    break;
                case 3:
                    message.version = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return CommoditySpecified;
    })();

    pbm.CommodityFilter = (function() {

        /**
         * Properties of a CommodityFilter.
         * @memberof pbm
         * @interface ICommodityFilter
         * @property {string|null} [language] CommodityFilter language
         */

        /**
         * Constructs a new CommodityFilter.
         * @memberof pbm
         * @classdesc Represents a CommodityFilter.
         * @implements ICommodityFilter
         * @constructor
         * @param {pbm.ICommodityFilter=} [properties] Properties to set
         */
        function CommodityFilter(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CommodityFilter language.
         * @member {string} language
         * @memberof pbm.CommodityFilter
         * @instance
         */
        CommodityFilter.prototype.language = "";

        /**
         * Creates a new CommodityFilter instance using the specified properties.
         * @function create
         * @memberof pbm.CommodityFilter
         * @static
         * @param {pbm.ICommodityFilter=} [properties] Properties to set
         * @returns {pbm.CommodityFilter} CommodityFilter instance
         */
        CommodityFilter.create = function create(properties) {
            return new CommodityFilter(properties);
        };

        /**
         * Encodes the specified CommodityFilter message. Does not implicitly {@link pbm.CommodityFilter.verify|verify} messages.
         * @function encode
         * @memberof pbm.CommodityFilter
         * @static
         * @param {pbm.ICommodityFilter} message CommodityFilter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommodityFilter.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.language != null && message.hasOwnProperty("language"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.language);
            return writer;
        };

        /**
         * Decodes a CommodityFilter message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.CommodityFilter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.CommodityFilter} CommodityFilter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommodityFilter.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.CommodityFilter();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.language = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return CommodityFilter;
    })();

    pbm.BatchGetCommoditiesReq = (function() {

        /**
         * Properties of a BatchGetCommoditiesReq.
         * @memberof pbm
         * @interface IBatchGetCommoditiesReq
         * @property {Array.<pbm.ICommoditySpecified>|null} [commodities] BatchGetCommoditiesReq commodities
         * @property {pbm.ICommodityFilter|null} [filter] BatchGetCommoditiesReq filter
         */

        /**
         * Constructs a new BatchGetCommoditiesReq.
         * @memberof pbm
         * @classdesc Represents a BatchGetCommoditiesReq.
         * @implements IBatchGetCommoditiesReq
         * @constructor
         * @param {pbm.IBatchGetCommoditiesReq=} [properties] Properties to set
         */
        function BatchGetCommoditiesReq(properties) {
            this.commodities = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BatchGetCommoditiesReq commodities.
         * @member {Array.<pbm.ICommoditySpecified>} commodities
         * @memberof pbm.BatchGetCommoditiesReq
         * @instance
         */
        BatchGetCommoditiesReq.prototype.commodities = $util.emptyArray;

        /**
         * BatchGetCommoditiesReq filter.
         * @member {pbm.ICommodityFilter|null|undefined} filter
         * @memberof pbm.BatchGetCommoditiesReq
         * @instance
         */
        BatchGetCommoditiesReq.prototype.filter = null;

        /**
         * Creates a new BatchGetCommoditiesReq instance using the specified properties.
         * @function create
         * @memberof pbm.BatchGetCommoditiesReq
         * @static
         * @param {pbm.IBatchGetCommoditiesReq=} [properties] Properties to set
         * @returns {pbm.BatchGetCommoditiesReq} BatchGetCommoditiesReq instance
         */
        BatchGetCommoditiesReq.create = function create(properties) {
            return new BatchGetCommoditiesReq(properties);
        };

        /**
         * Encodes the specified BatchGetCommoditiesReq message. Does not implicitly {@link pbm.BatchGetCommoditiesReq.verify|verify} messages.
         * @function encode
         * @memberof pbm.BatchGetCommoditiesReq
         * @static
         * @param {pbm.IBatchGetCommoditiesReq} message BatchGetCommoditiesReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BatchGetCommoditiesReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.commodities != null && message.commodities.length)
                for (var i = 0; i < message.commodities.length; ++i)
                    $root.pbm.CommoditySpecified.encode(message.commodities[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.filter != null && message.hasOwnProperty("filter"))
                $root.pbm.CommodityFilter.encode(message.filter, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a BatchGetCommoditiesReq message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.BatchGetCommoditiesReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.BatchGetCommoditiesReq} BatchGetCommoditiesReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BatchGetCommoditiesReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.BatchGetCommoditiesReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.commodities && message.commodities.length))
                        message.commodities = [];
                    message.commodities.push($root.pbm.CommoditySpecified.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.filter = $root.pbm.CommodityFilter.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return BatchGetCommoditiesReq;
    })();

    /**
     * ResourceType enum.
     * @name pbm.ResourceType
     * @enum {string}
     * @property {number} ResourceTypeNone=0 ResourceTypeNone value
     * @property {number} ResourceTypeSvga=1 ResourceTypeSvga value
     * @property {number} ResourceTypePng=2 ResourceTypePng value
     * @property {number} ResourceTypeJpg=3 ResourceTypeJpg value
     * @property {number} ResourceTypeWebp=4 ResourceTypeWebp value
     * @property {number} ResourceTypeMp4=5 ResourceTypeMp4 value
     * @property {number} ResourceTypeZip=6 ResourceTypeZip value
     */
    pbm.ResourceType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ResourceTypeNone"] = 0;
        values[valuesById[1] = "ResourceTypeSvga"] = 1;
        values[valuesById[2] = "ResourceTypePng"] = 2;
        values[valuesById[3] = "ResourceTypeJpg"] = 3;
        values[valuesById[4] = "ResourceTypeWebp"] = 4;
        values[valuesById[5] = "ResourceTypeMp4"] = 5;
        values[valuesById[6] = "ResourceTypeZip"] = 6;
        return values;
    })();

    pbm.Resource = (function() {

        /**
         * Properties of a Resource.
         * @memberof pbm
         * @interface IResource
         * @property {string|null} [resource_url] Resource resource_url
         * @property {pbm.ResourceType|null} [resource_type] Resource resource_type
         * @property {string|null} [resource_md5] Resource resource_md5
         */

        /**
         * Constructs a new Resource.
         * @memberof pbm
         * @classdesc Represents a Resource.
         * @implements IResource
         * @constructor
         * @param {pbm.IResource=} [properties] Properties to set
         */
        function Resource(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Resource resource_url.
         * @member {string} resource_url
         * @memberof pbm.Resource
         * @instance
         */
        Resource.prototype.resource_url = "";

        /**
         * Resource resource_type.
         * @member {pbm.ResourceType} resource_type
         * @memberof pbm.Resource
         * @instance
         */
        Resource.prototype.resource_type = 0;

        /**
         * Resource resource_md5.
         * @member {string} resource_md5
         * @memberof pbm.Resource
         * @instance
         */
        Resource.prototype.resource_md5 = "";

        /**
         * Creates a new Resource instance using the specified properties.
         * @function create
         * @memberof pbm.Resource
         * @static
         * @param {pbm.IResource=} [properties] Properties to set
         * @returns {pbm.Resource} Resource instance
         */
        Resource.create = function create(properties) {
            return new Resource(properties);
        };

        /**
         * Encodes the specified Resource message. Does not implicitly {@link pbm.Resource.verify|verify} messages.
         * @function encode
         * @memberof pbm.Resource
         * @static
         * @param {pbm.IResource} message Resource message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Resource.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.resource_url != null && message.hasOwnProperty("resource_url"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.resource_url);
            if (message.resource_type != null && message.hasOwnProperty("resource_type"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.resource_type);
            if (message.resource_md5 != null && message.hasOwnProperty("resource_md5"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.resource_md5);
            return writer;
        };

        /**
         * Decodes a Resource message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.Resource
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.Resource} Resource
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Resource.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.Resource();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.resource_url = reader.string();
                    break;
                case 2:
                    message.resource_type = reader.int32();
                    break;
                case 3:
                    message.resource_md5 = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return Resource;
    })();

    pbm.Commodity = (function() {

        /**
         * Properties of a Commodity.
         * @memberof pbm
         * @interface ICommodity
         * @property {number|null} [commodity_id] Commodity commodity_id
         * @property {commodity.CommodityType|null} [commodity_type] Commodity commodity_type
         * @property {Object.<string,string>|null} [languages] Commodity languages
         * @property {pbm.IResource|null} [icon] Commodity icon
         * @property {pbm.IResource|null} [h5_icon] Commodity h5_icon
         */

        /**
         * Constructs a new Commodity.
         * @memberof pbm
         * @classdesc Represents a Commodity.
         * @implements ICommodity
         * @constructor
         * @param {pbm.ICommodity=} [properties] Properties to set
         */
        function Commodity(properties) {
            this.languages = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Commodity commodity_id.
         * @member {number} commodity_id
         * @memberof pbm.Commodity
         * @instance
         */
        Commodity.prototype.commodity_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Commodity commodity_type.
         * @member {commodity.CommodityType} commodity_type
         * @memberof pbm.Commodity
         * @instance
         */
        Commodity.prototype.commodity_type = 0;

        /**
         * Commodity languages.
         * @member {Object.<string,string>} languages
         * @memberof pbm.Commodity
         * @instance
         */
        Commodity.prototype.languages = $util.emptyObject;

        /**
         * Commodity icon.
         * @member {pbm.IResource|null|undefined} icon
         * @memberof pbm.Commodity
         * @instance
         */
        Commodity.prototype.icon = null;

        /**
         * Commodity h5_icon.
         * @member {pbm.IResource|null|undefined} h5_icon
         * @memberof pbm.Commodity
         * @instance
         */
        Commodity.prototype.h5_icon = null;

        /**
         * Creates a new Commodity instance using the specified properties.
         * @function create
         * @memberof pbm.Commodity
         * @static
         * @param {pbm.ICommodity=} [properties] Properties to set
         * @returns {pbm.Commodity} Commodity instance
         */
        Commodity.create = function create(properties) {
            return new Commodity(properties);
        };

        /**
         * Encodes the specified Commodity message. Does not implicitly {@link pbm.Commodity.verify|verify} messages.
         * @function encode
         * @memberof pbm.Commodity
         * @static
         * @param {pbm.ICommodity} message Commodity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Commodity.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.commodity_id != null && message.hasOwnProperty("commodity_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.commodity_id);
            if (message.commodity_type != null && message.hasOwnProperty("commodity_type"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.commodity_type);
            if (message.languages != null && message.hasOwnProperty("languages"))
                for (var keys = Object.keys(message.languages), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 9, wireType 2 =*/74).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.languages[keys[i]]).ldelim();
            if (message.icon != null && message.hasOwnProperty("icon"))
                $root.pbm.Resource.encode(message.icon, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.h5_icon != null && message.hasOwnProperty("h5_icon"))
                $root.pbm.Resource.encode(message.h5_icon, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a Commodity message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.Commodity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.Commodity} Commodity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Commodity.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.Commodity(), key;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    message.commodity_id = reader.int64();
                    break;
                case 3:
                    message.commodity_type = reader.int32();
                    break;
                case 9:
                    reader.skip().pos++;
                    if (message.languages === $util.emptyObject)
                        message.languages = {};
                    key = reader.string();
                    reader.pos++;
                    message.languages[key] = reader.string();
                    break;
                case 11:
                    message.icon = $root.pbm.Resource.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.h5_icon = $root.pbm.Resource.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return Commodity;
    })();

    pbm.BatchGetCommoditiesRes = (function() {

        /**
         * Properties of a BatchGetCommoditiesRes.
         * @memberof pbm
         * @interface IBatchGetCommoditiesRes
         * @property {common.IResult|null} [result] BatchGetCommoditiesRes result
         * @property {Array.<pbm.ICommodity>|null} [commodities] BatchGetCommoditiesRes commodities
         * @property {Array.<pbm.ICommoditySpecified>|null} [cached_commodities] BatchGetCommoditiesRes cached_commodities
         */

        /**
         * Constructs a new BatchGetCommoditiesRes.
         * @memberof pbm
         * @classdesc Represents a BatchGetCommoditiesRes.
         * @implements IBatchGetCommoditiesRes
         * @constructor
         * @param {pbm.IBatchGetCommoditiesRes=} [properties] Properties to set
         */
        function BatchGetCommoditiesRes(properties) {
            this.commodities = [];
            this.cached_commodities = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BatchGetCommoditiesRes result.
         * @member {common.IResult|null|undefined} result
         * @memberof pbm.BatchGetCommoditiesRes
         * @instance
         */
        BatchGetCommoditiesRes.prototype.result = null;

        /**
         * BatchGetCommoditiesRes commodities.
         * @member {Array.<pbm.ICommodity>} commodities
         * @memberof pbm.BatchGetCommoditiesRes
         * @instance
         */
        BatchGetCommoditiesRes.prototype.commodities = $util.emptyArray;

        /**
         * BatchGetCommoditiesRes cached_commodities.
         * @member {Array.<pbm.ICommoditySpecified>} cached_commodities
         * @memberof pbm.BatchGetCommoditiesRes
         * @instance
         */
        BatchGetCommoditiesRes.prototype.cached_commodities = $util.emptyArray;

        /**
         * Creates a new BatchGetCommoditiesRes instance using the specified properties.
         * @function create
         * @memberof pbm.BatchGetCommoditiesRes
         * @static
         * @param {pbm.IBatchGetCommoditiesRes=} [properties] Properties to set
         * @returns {pbm.BatchGetCommoditiesRes} BatchGetCommoditiesRes instance
         */
        BatchGetCommoditiesRes.create = function create(properties) {
            return new BatchGetCommoditiesRes(properties);
        };

        /**
         * Encodes the specified BatchGetCommoditiesRes message. Does not implicitly {@link pbm.BatchGetCommoditiesRes.verify|verify} messages.
         * @function encode
         * @memberof pbm.BatchGetCommoditiesRes
         * @static
         * @param {pbm.IBatchGetCommoditiesRes} message BatchGetCommoditiesRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BatchGetCommoditiesRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && message.hasOwnProperty("result"))
                $root.common.Result.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.commodities != null && message.commodities.length)
                for (var i = 0; i < message.commodities.length; ++i)
                    $root.pbm.Commodity.encode(message.commodities[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.cached_commodities != null && message.cached_commodities.length)
                for (var i = 0; i < message.cached_commodities.length; ++i)
                    $root.pbm.CommoditySpecified.encode(message.cached_commodities[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a BatchGetCommoditiesRes message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.BatchGetCommoditiesRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.BatchGetCommoditiesRes} BatchGetCommoditiesRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BatchGetCommoditiesRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.BatchGetCommoditiesRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = $root.common.Result.decode(reader, reader.uint32());
                    break;
                case 10:
                    if (!(message.commodities && message.commodities.length))
                        message.commodities = [];
                    message.commodities.push($root.pbm.Commodity.decode(reader, reader.uint32()));
                    break;
                case 11:
                    if (!(message.cached_commodities && message.cached_commodities.length))
                        message.cached_commodities = [];
                    message.cached_commodities.push($root.pbm.CommoditySpecified.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return BatchGetCommoditiesRes;
    })();

    pbm.GameConfigChangeRes = (function() {

        /**
         * Properties of a GameConfigChangeRes.
         * @memberof pbm
         * @interface IGameConfigChangeRes
         * @property {common.IResult|null} [result] GameConfigChangeRes result
         */

        /**
         * Constructs a new GameConfigChangeRes.
         * @memberof pbm
         * @classdesc Represents a GameConfigChangeRes.
         * @implements IGameConfigChangeRes
         * @constructor
         * @param {pbm.IGameConfigChangeRes=} [properties] Properties to set
         */
        function GameConfigChangeRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameConfigChangeRes result.
         * @member {common.IResult|null|undefined} result
         * @memberof pbm.GameConfigChangeRes
         * @instance
         */
        GameConfigChangeRes.prototype.result = null;

        /**
         * Creates a new GameConfigChangeRes instance using the specified properties.
         * @function create
         * @memberof pbm.GameConfigChangeRes
         * @static
         * @param {pbm.IGameConfigChangeRes=} [properties] Properties to set
         * @returns {pbm.GameConfigChangeRes} GameConfigChangeRes instance
         */
        GameConfigChangeRes.create = function create(properties) {
            return new GameConfigChangeRes(properties);
        };

        /**
         * Encodes the specified GameConfigChangeRes message. Does not implicitly {@link pbm.GameConfigChangeRes.verify|verify} messages.
         * @function encode
         * @memberof pbm.GameConfigChangeRes
         * @static
         * @param {pbm.IGameConfigChangeRes} message GameConfigChangeRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameConfigChangeRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && message.hasOwnProperty("result"))
                $root.common.Result.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a GameConfigChangeRes message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.GameConfigChangeRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.GameConfigChangeRes} GameConfigChangeRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameConfigChangeRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.GameConfigChangeRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = $root.common.Result.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return GameConfigChangeRes;
    })();

    pbm.SetRedDiamondSwitchReq = (function() {

        /**
         * Properties of a SetRedDiamondSwitchReq.
         * @memberof pbm
         * @interface ISetRedDiamondSwitchReq
         * @property {number|null} [red_diamond_switch] SetRedDiamondSwitchReq red_diamond_switch
         */

        /**
         * Constructs a new SetRedDiamondSwitchReq.
         * @memberof pbm
         * @classdesc Represents a SetRedDiamondSwitchReq.
         * @implements ISetRedDiamondSwitchReq
         * @constructor
         * @param {pbm.ISetRedDiamondSwitchReq=} [properties] Properties to set
         */
        function SetRedDiamondSwitchReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SetRedDiamondSwitchReq red_diamond_switch.
         * @member {number} red_diamond_switch
         * @memberof pbm.SetRedDiamondSwitchReq
         * @instance
         */
        SetRedDiamondSwitchReq.prototype.red_diamond_switch = 0;

        /**
         * Creates a new SetRedDiamondSwitchReq instance using the specified properties.
         * @function create
         * @memberof pbm.SetRedDiamondSwitchReq
         * @static
         * @param {pbm.ISetRedDiamondSwitchReq=} [properties] Properties to set
         * @returns {pbm.SetRedDiamondSwitchReq} SetRedDiamondSwitchReq instance
         */
        SetRedDiamondSwitchReq.create = function create(properties) {
            return new SetRedDiamondSwitchReq(properties);
        };

        /**
         * Encodes the specified SetRedDiamondSwitchReq message. Does not implicitly {@link pbm.SetRedDiamondSwitchReq.verify|verify} messages.
         * @function encode
         * @memberof pbm.SetRedDiamondSwitchReq
         * @static
         * @param {pbm.ISetRedDiamondSwitchReq} message SetRedDiamondSwitchReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetRedDiamondSwitchReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.red_diamond_switch != null && message.hasOwnProperty("red_diamond_switch"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.red_diamond_switch);
            return writer;
        };

        /**
         * Decodes a SetRedDiamondSwitchReq message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.SetRedDiamondSwitchReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.SetRedDiamondSwitchReq} SetRedDiamondSwitchReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetRedDiamondSwitchReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.SetRedDiamondSwitchReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.red_diamond_switch = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return SetRedDiamondSwitchReq;
    })();

    pbm.SetRedDiamondSwitchRes = (function() {

        /**
         * Properties of a SetRedDiamondSwitchRes.
         * @memberof pbm
         * @interface ISetRedDiamondSwitchRes
         * @property {common.IResult|null} [result] SetRedDiamondSwitchRes result
         */

        /**
         * Constructs a new SetRedDiamondSwitchRes.
         * @memberof pbm
         * @classdesc Represents a SetRedDiamondSwitchRes.
         * @implements ISetRedDiamondSwitchRes
         * @constructor
         * @param {pbm.ISetRedDiamondSwitchRes=} [properties] Properties to set
         */
        function SetRedDiamondSwitchRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SetRedDiamondSwitchRes result.
         * @member {common.IResult|null|undefined} result
         * @memberof pbm.SetRedDiamondSwitchRes
         * @instance
         */
        SetRedDiamondSwitchRes.prototype.result = null;

        /**
         * Creates a new SetRedDiamondSwitchRes instance using the specified properties.
         * @function create
         * @memberof pbm.SetRedDiamondSwitchRes
         * @static
         * @param {pbm.ISetRedDiamondSwitchRes=} [properties] Properties to set
         * @returns {pbm.SetRedDiamondSwitchRes} SetRedDiamondSwitchRes instance
         */
        SetRedDiamondSwitchRes.create = function create(properties) {
            return new SetRedDiamondSwitchRes(properties);
        };

        /**
         * Encodes the specified SetRedDiamondSwitchRes message. Does not implicitly {@link pbm.SetRedDiamondSwitchRes.verify|verify} messages.
         * @function encode
         * @memberof pbm.SetRedDiamondSwitchRes
         * @static
         * @param {pbm.ISetRedDiamondSwitchRes} message SetRedDiamondSwitchRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetRedDiamondSwitchRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && message.hasOwnProperty("result"))
                $root.common.Result.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a SetRedDiamondSwitchRes message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.SetRedDiamondSwitchRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.SetRedDiamondSwitchRes} SetRedDiamondSwitchRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetRedDiamondSwitchRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.SetRedDiamondSwitchRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = $root.common.Result.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return SetRedDiamondSwitchRes;
    })();

    pbm.Upstream = (function() {

        /**
         * Properties of an Upstream.
         * @memberof pbm
         * @interface IUpstream
         * @property {string|null} [path] Upstream path
         * @property {number|null} [seq] Upstream seq
         * @property {string|null} [conn_id] Upstream conn_id
         * @property {string|null} [uid] Upstream uid
         * @property {string|null} [room_id] Upstream room_id
         * @property {Object.<string,string>|null} [header] Upstream header
         * @property {string|null} [content_type] Upstream content_type
         * @property {string|null} [body_name] Upstream body_name
         * @property {Uint8Array|null} [body] Upstream body
         */

        /**
         * Constructs a new Upstream.
         * @memberof pbm
         * @classdesc Represents an Upstream.
         * @implements IUpstream
         * @constructor
         * @param {pbm.IUpstream=} [properties] Properties to set
         */
        function Upstream(properties) {
            this.header = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Upstream path.
         * @member {string} path
         * @memberof pbm.Upstream
         * @instance
         */
        Upstream.prototype.path = "";

        /**
         * Upstream seq.
         * @member {number} seq
         * @memberof pbm.Upstream
         * @instance
         */
        Upstream.prototype.seq = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Upstream conn_id.
         * @member {string} conn_id
         * @memberof pbm.Upstream
         * @instance
         */
        Upstream.prototype.conn_id = "";

        /**
         * Upstream uid.
         * @member {string} uid
         * @memberof pbm.Upstream
         * @instance
         */
        Upstream.prototype.uid = "";

        /**
         * Upstream room_id.
         * @member {string} room_id
         * @memberof pbm.Upstream
         * @instance
         */
        Upstream.prototype.room_id = "";

        /**
         * Upstream header.
         * @member {Object.<string,string>} header
         * @memberof pbm.Upstream
         * @instance
         */
        Upstream.prototype.header = $util.emptyObject;

        /**
         * Upstream content_type.
         * @member {string} content_type
         * @memberof pbm.Upstream
         * @instance
         */
        Upstream.prototype.content_type = "";

        /**
         * Upstream body_name.
         * @member {string} body_name
         * @memberof pbm.Upstream
         * @instance
         */
        Upstream.prototype.body_name = "";

        /**
         * Upstream body.
         * @member {Uint8Array} body
         * @memberof pbm.Upstream
         * @instance
         */
        Upstream.prototype.body = $util.newBuffer([]);

        /**
         * Creates a new Upstream instance using the specified properties.
         * @function create
         * @memberof pbm.Upstream
         * @static
         * @param {pbm.IUpstream=} [properties] Properties to set
         * @returns {pbm.Upstream} Upstream instance
         */
        Upstream.create = function create(properties) {
            return new Upstream(properties);
        };

        /**
         * Encodes the specified Upstream message. Does not implicitly {@link pbm.Upstream.verify|verify} messages.
         * @function encode
         * @memberof pbm.Upstream
         * @static
         * @param {pbm.IUpstream} message Upstream message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Upstream.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.path != null && message.hasOwnProperty("path"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.path);
            if (message.seq != null && message.hasOwnProperty("seq"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.seq);
            if (message.conn_id != null && message.hasOwnProperty("conn_id"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.conn_id);
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.uid);
            if (message.room_id != null && message.hasOwnProperty("room_id"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.room_id);
            if (message.header != null && message.hasOwnProperty("header"))
                for (var keys = Object.keys(message.header), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 12, wireType 2 =*/98).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.header[keys[i]]).ldelim();
            if (message.content_type != null && message.hasOwnProperty("content_type"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.content_type);
            if (message.body_name != null && message.hasOwnProperty("body_name"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.body_name);
            if (message.body != null && message.hasOwnProperty("body"))
                writer.uint32(/* id 15, wireType 2 =*/122).bytes(message.body);
            return writer;
        };

        /**
         * Decodes an Upstream message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.Upstream
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.Upstream} Upstream
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Upstream.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.Upstream(), key;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.path = reader.string();
                    break;
                case 2:
                    message.seq = reader.int64();
                    break;
                case 3:
                    message.conn_id = reader.string();
                    break;
                case 4:
                    message.uid = reader.string();
                    break;
                case 5:
                    message.room_id = reader.string();
                    break;
                case 12:
                    reader.skip().pos++;
                    if (message.header === $util.emptyObject)
                        message.header = {};
                    key = reader.string();
                    reader.pos++;
                    message.header[key] = reader.string();
                    break;
                case 13:
                    message.content_type = reader.string();
                    break;
                case 14:
                    message.body_name = reader.string();
                    break;
                case 15:
                    message.body = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return Upstream;
    })();

    pbm.Downstream = (function() {

        /**
         * Properties of a Downstream.
         * @memberof pbm
         * @interface IDownstream
         * @property {string|null} [path] Downstream path
         * @property {number|null} [seq] Downstream seq
         * @property {string|null} [conn_id] Downstream conn_id
         * @property {string|null} [room_id] Downstream room_id
         * @property {number|null} [status_code] Downstream status_code
         * @property {Object.<string,string>|null} [header] Downstream header
         * @property {string|null} [content_type] Downstream content_type
         * @property {string|null} [body_name] Downstream body_name
         * @property {Uint8Array|null} [body] Downstream body
         */

        /**
         * Constructs a new Downstream.
         * @memberof pbm
         * @classdesc Represents a Downstream.
         * @implements IDownstream
         * @constructor
         * @param {pbm.IDownstream=} [properties] Properties to set
         */
        function Downstream(properties) {
            this.header = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Downstream path.
         * @member {string} path
         * @memberof pbm.Downstream
         * @instance
         */
        Downstream.prototype.path = "";

        /**
         * Downstream seq.
         * @member {number} seq
         * @memberof pbm.Downstream
         * @instance
         */
        Downstream.prototype.seq = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Downstream conn_id.
         * @member {string} conn_id
         * @memberof pbm.Downstream
         * @instance
         */
        Downstream.prototype.conn_id = "";

        /**
         * Downstream room_id.
         * @member {string} room_id
         * @memberof pbm.Downstream
         * @instance
         */
        Downstream.prototype.room_id = "";

        /**
         * Downstream status_code.
         * @member {number} status_code
         * @memberof pbm.Downstream
         * @instance
         */
        Downstream.prototype.status_code = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Downstream header.
         * @member {Object.<string,string>} header
         * @memberof pbm.Downstream
         * @instance
         */
        Downstream.prototype.header = $util.emptyObject;

        /**
         * Downstream content_type.
         * @member {string} content_type
         * @memberof pbm.Downstream
         * @instance
         */
        Downstream.prototype.content_type = "";

        /**
         * Downstream body_name.
         * @member {string} body_name
         * @memberof pbm.Downstream
         * @instance
         */
        Downstream.prototype.body_name = "";

        /**
         * Downstream body.
         * @member {Uint8Array} body
         * @memberof pbm.Downstream
         * @instance
         */
        Downstream.prototype.body = $util.newBuffer([]);

        /**
         * Creates a new Downstream instance using the specified properties.
         * @function create
         * @memberof pbm.Downstream
         * @static
         * @param {pbm.IDownstream=} [properties] Properties to set
         * @returns {pbm.Downstream} Downstream instance
         */
        Downstream.create = function create(properties) {
            return new Downstream(properties);
        };

        /**
         * Encodes the specified Downstream message. Does not implicitly {@link pbm.Downstream.verify|verify} messages.
         * @function encode
         * @memberof pbm.Downstream
         * @static
         * @param {pbm.IDownstream} message Downstream message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Downstream.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.path != null && message.hasOwnProperty("path"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.path);
            if (message.seq != null && message.hasOwnProperty("seq"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.seq);
            if (message.conn_id != null && message.hasOwnProperty("conn_id"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.conn_id);
            if (message.room_id != null && message.hasOwnProperty("room_id"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.room_id);
            if (message.status_code != null && message.hasOwnProperty("status_code"))
                writer.uint32(/* id 11, wireType 0 =*/88).int64(message.status_code);
            if (message.header != null && message.hasOwnProperty("header"))
                for (var keys = Object.keys(message.header), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 12, wireType 2 =*/98).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.header[keys[i]]).ldelim();
            if (message.content_type != null && message.hasOwnProperty("content_type"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.content_type);
            if (message.body_name != null && message.hasOwnProperty("body_name"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.body_name);
            if (message.body != null && message.hasOwnProperty("body"))
                writer.uint32(/* id 15, wireType 2 =*/122).bytes(message.body);
            return writer;
        };

        /**
         * Decodes a Downstream message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.Downstream
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.Downstream} Downstream
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Downstream.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.Downstream(), key;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.path = reader.string();
                    break;
                case 2:
                    message.seq = reader.int64();
                    break;
                case 3:
                    message.conn_id = reader.string();
                    break;
                case 5:
                    message.room_id = reader.string();
                    break;
                case 11:
                    message.status_code = reader.int64();
                    break;
                case 12:
                    reader.skip().pos++;
                    if (message.header === $util.emptyObject)
                        message.header = {};
                    key = reader.string();
                    reader.pos++;
                    message.header[key] = reader.string();
                    break;
                case 13:
                    message.content_type = reader.string();
                    break;
                case 14:
                    message.body_name = reader.string();
                    break;
                case 15:
                    message.body = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return Downstream;
    })();

    pbm.GMEInternalEnterRoom = (function() {

        /**
         * Properties of a GMEInternalEnterRoom.
         * @memberof pbm
         * @interface IGMEInternalEnterRoom
         * @property {string|null} [uid] GMEInternalEnterRoom uid
         * @property {Uint8Array|null} [user_data] GMEInternalEnterRoom user_data
         */

        /**
         * Constructs a new GMEInternalEnterRoom.
         * @memberof pbm
         * @classdesc Represents a GMEInternalEnterRoom.
         * @implements IGMEInternalEnterRoom
         * @constructor
         * @param {pbm.IGMEInternalEnterRoom=} [properties] Properties to set
         */
        function GMEInternalEnterRoom(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GMEInternalEnterRoom uid.
         * @member {string} uid
         * @memberof pbm.GMEInternalEnterRoom
         * @instance
         */
        GMEInternalEnterRoom.prototype.uid = "";

        /**
         * GMEInternalEnterRoom user_data.
         * @member {Uint8Array} user_data
         * @memberof pbm.GMEInternalEnterRoom
         * @instance
         */
        GMEInternalEnterRoom.prototype.user_data = $util.newBuffer([]);

        /**
         * Creates a new GMEInternalEnterRoom instance using the specified properties.
         * @function create
         * @memberof pbm.GMEInternalEnterRoom
         * @static
         * @param {pbm.IGMEInternalEnterRoom=} [properties] Properties to set
         * @returns {pbm.GMEInternalEnterRoom} GMEInternalEnterRoom instance
         */
        GMEInternalEnterRoom.create = function create(properties) {
            return new GMEInternalEnterRoom(properties);
        };

        /**
         * Encodes the specified GMEInternalEnterRoom message. Does not implicitly {@link pbm.GMEInternalEnterRoom.verify|verify} messages.
         * @function encode
         * @memberof pbm.GMEInternalEnterRoom
         * @static
         * @param {pbm.IGMEInternalEnterRoom} message GMEInternalEnterRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GMEInternalEnterRoom.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
            if (message.user_data != null && message.hasOwnProperty("user_data"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.user_data);
            return writer;
        };

        /**
         * Decodes a GMEInternalEnterRoom message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.GMEInternalEnterRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.GMEInternalEnterRoom} GMEInternalEnterRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GMEInternalEnterRoom.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.GMEInternalEnterRoom();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.string();
                    break;
                case 2:
                    message.user_data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return GMEInternalEnterRoom;
    })();

    /**
     * LeaveRoomReason enum.
     * @name pbm.LeaveRoomReason
     * @enum {string}
     * @property {number} ClientExit=0 ClientExit value
     * @property {number} Kick=1 Kick value
     * @property {number} ClientConnectionLost=2 ClientConnectionLost value
     * @property {number} ServerConnectionLost=3 ServerConnectionLost value
     */
    pbm.LeaveRoomReason = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ClientExit"] = 0;
        values[valuesById[1] = "Kick"] = 1;
        values[valuesById[2] = "ClientConnectionLost"] = 2;
        values[valuesById[3] = "ServerConnectionLost"] = 3;
        return values;
    })();

    pbm.GMEInternalLeaveRoom = (function() {

        /**
         * Properties of a GMEInternalLeaveRoom.
         * @memberof pbm
         * @interface IGMEInternalLeaveRoom
         * @property {string|null} [uid] GMEInternalLeaveRoom uid
         * @property {Uint8Array|null} [user_data] GMEInternalLeaveRoom user_data
         * @property {pbm.LeaveRoomReason|null} [reason] GMEInternalLeaveRoom reason
         */

        /**
         * Constructs a new GMEInternalLeaveRoom.
         * @memberof pbm
         * @classdesc Represents a GMEInternalLeaveRoom.
         * @implements IGMEInternalLeaveRoom
         * @constructor
         * @param {pbm.IGMEInternalLeaveRoom=} [properties] Properties to set
         */
        function GMEInternalLeaveRoom(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GMEInternalLeaveRoom uid.
         * @member {string} uid
         * @memberof pbm.GMEInternalLeaveRoom
         * @instance
         */
        GMEInternalLeaveRoom.prototype.uid = "";

        /**
         * GMEInternalLeaveRoom user_data.
         * @member {Uint8Array} user_data
         * @memberof pbm.GMEInternalLeaveRoom
         * @instance
         */
        GMEInternalLeaveRoom.prototype.user_data = $util.newBuffer([]);

        /**
         * GMEInternalLeaveRoom reason.
         * @member {pbm.LeaveRoomReason} reason
         * @memberof pbm.GMEInternalLeaveRoom
         * @instance
         */
        GMEInternalLeaveRoom.prototype.reason = 0;

        /**
         * Creates a new GMEInternalLeaveRoom instance using the specified properties.
         * @function create
         * @memberof pbm.GMEInternalLeaveRoom
         * @static
         * @param {pbm.IGMEInternalLeaveRoom=} [properties] Properties to set
         * @returns {pbm.GMEInternalLeaveRoom} GMEInternalLeaveRoom instance
         */
        GMEInternalLeaveRoom.create = function create(properties) {
            return new GMEInternalLeaveRoom(properties);
        };

        /**
         * Encodes the specified GMEInternalLeaveRoom message. Does not implicitly {@link pbm.GMEInternalLeaveRoom.verify|verify} messages.
         * @function encode
         * @memberof pbm.GMEInternalLeaveRoom
         * @static
         * @param {pbm.IGMEInternalLeaveRoom} message GMEInternalLeaveRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GMEInternalLeaveRoom.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
            if (message.user_data != null && message.hasOwnProperty("user_data"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.user_data);
            if (message.reason != null && message.hasOwnProperty("reason"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.reason);
            return writer;
        };

        /**
         * Decodes a GMEInternalLeaveRoom message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.GMEInternalLeaveRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.GMEInternalLeaveRoom} GMEInternalLeaveRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GMEInternalLeaveRoom.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.GMEInternalLeaveRoom();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.string();
                    break;
                case 2:
                    message.user_data = reader.bytes();
                    break;
                case 3:
                    message.reason = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return GMEInternalLeaveRoom;
    })();

    pbm.GMEHeartBeatReq = (function() {

        /**
         * Properties of a GMEHeartBeatReq.
         * @memberof pbm
         * @interface IGMEHeartBeatReq
         */

        /**
         * Constructs a new GMEHeartBeatReq.
         * @memberof pbm
         * @classdesc Represents a GMEHeartBeatReq.
         * @implements IGMEHeartBeatReq
         * @constructor
         * @param {pbm.IGMEHeartBeatReq=} [properties] Properties to set
         */
        function GMEHeartBeatReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GMEHeartBeatReq instance using the specified properties.
         * @function create
         * @memberof pbm.GMEHeartBeatReq
         * @static
         * @param {pbm.IGMEHeartBeatReq=} [properties] Properties to set
         * @returns {pbm.GMEHeartBeatReq} GMEHeartBeatReq instance
         */
        GMEHeartBeatReq.create = function create(properties) {
            return new GMEHeartBeatReq(properties);
        };

        /**
         * Encodes the specified GMEHeartBeatReq message. Does not implicitly {@link pbm.GMEHeartBeatReq.verify|verify} messages.
         * @function encode
         * @memberof pbm.GMEHeartBeatReq
         * @static
         * @param {pbm.IGMEHeartBeatReq} message GMEHeartBeatReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GMEHeartBeatReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Decodes a GMEHeartBeatReq message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.GMEHeartBeatReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.GMEHeartBeatReq} GMEHeartBeatReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GMEHeartBeatReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.GMEHeartBeatReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return GMEHeartBeatReq;
    })();

    pbm.GMEHeartBeatRes = (function() {

        /**
         * Properties of a GMEHeartBeatRes.
         * @memberof pbm
         * @interface IGMEHeartBeatRes
         */

        /**
         * Constructs a new GMEHeartBeatRes.
         * @memberof pbm
         * @classdesc Represents a GMEHeartBeatRes.
         * @implements IGMEHeartBeatRes
         * @constructor
         * @param {pbm.IGMEHeartBeatRes=} [properties] Properties to set
         */
        function GMEHeartBeatRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GMEHeartBeatRes instance using the specified properties.
         * @function create
         * @memberof pbm.GMEHeartBeatRes
         * @static
         * @param {pbm.IGMEHeartBeatRes=} [properties] Properties to set
         * @returns {pbm.GMEHeartBeatRes} GMEHeartBeatRes instance
         */
        GMEHeartBeatRes.create = function create(properties) {
            return new GMEHeartBeatRes(properties);
        };

        /**
         * Encodes the specified GMEHeartBeatRes message. Does not implicitly {@link pbm.GMEHeartBeatRes.verify|verify} messages.
         * @function encode
         * @memberof pbm.GMEHeartBeatRes
         * @static
         * @param {pbm.IGMEHeartBeatRes} message GMEHeartBeatRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GMEHeartBeatRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Decodes a GMEHeartBeatRes message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.GMEHeartBeatRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.GMEHeartBeatRes} GMEHeartBeatRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GMEHeartBeatRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.GMEHeartBeatRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return GMEHeartBeatRes;
    })();

    pbm.Gateway = (function() {

        /**
         * Constructs a new Gateway service.
         * @memberof pbm
         * @classdesc Represents a Gateway
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Gateway(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Gateway.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Gateway;

        /**
         * Creates new Gateway service using the specified rpc implementation.
         * @function create
         * @memberof pbm.Gateway
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Gateway} RPC service. Useful where requests and/or responses are streamed.
         */
        Gateway.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link pbm.Gateway#streamingChannel}.
         * @memberof pbm.Gateway
         * @typedef StreamingChannelCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbm.Downstream} [response] Downstream
         */

        /**
         * Calls StreamingChannel.
         * @function streamingChannel
         * @memberof pbm.Gateway
         * @instance
         * @param {pbm.IUpstream} request Upstream message or plain object
         * @param {pbm.Gateway.StreamingChannelCallback} callback Node-style callback called with the error, if any, and Downstream
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Gateway.prototype.streamingChannel = function streamingChannel(request, callback) {
            return this.rpcCall(streamingChannel, $root.pbm.Upstream, $root.pbm.Downstream, request, callback);
        }, "name", { value: "StreamingChannel" });

        /**
         * Calls StreamingChannel.
         * @function streamingChannel
         * @memberof pbm.Gateway
         * @instance
         * @param {pbm.IUpstream} request Upstream message or plain object
         * @returns {Promise<pbm.Downstream>} Promise
         * @variation 2
         */

        return Gateway;
    })();

    /**
     * ECode enum.
     * @name pbm.ECode
     * @enum {string}
     * @property {number} ECodeOk=0 ECodeOk value
     * @property {number} ECodeFrequenceError=101 ECodeFrequenceError value
     */
    pbm.ECode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ECodeOk"] = 0;
        values[valuesById[101] = "ECodeFrequenceError"] = 101;
        return values;
    })();

    pbm.TransRequest = (function() {

        /**
         * Properties of a TransRequest.
         * @memberof pbm
         * @interface ITransRequest
         * @property {string|null} [sname] TransRequest sname
         * @property {string|null} [method] TransRequest method
         * @property {Uint8Array|null} [req] TransRequest req
         */

        /**
         * Constructs a new TransRequest.
         * @memberof pbm
         * @classdesc Represents a TransRequest.
         * @implements ITransRequest
         * @constructor
         * @param {pbm.ITransRequest=} [properties] Properties to set
         */
        function TransRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TransRequest sname.
         * @member {string} sname
         * @memberof pbm.TransRequest
         * @instance
         */
        TransRequest.prototype.sname = "";

        /**
         * TransRequest method.
         * @member {string} method
         * @memberof pbm.TransRequest
         * @instance
         */
        TransRequest.prototype.method = "";

        /**
         * TransRequest req.
         * @member {Uint8Array} req
         * @memberof pbm.TransRequest
         * @instance
         */
        TransRequest.prototype.req = $util.newBuffer([]);

        /**
         * Creates a new TransRequest instance using the specified properties.
         * @function create
         * @memberof pbm.TransRequest
         * @static
         * @param {pbm.ITransRequest=} [properties] Properties to set
         * @returns {pbm.TransRequest} TransRequest instance
         */
        TransRequest.create = function create(properties) {
            return new TransRequest(properties);
        };

        /**
         * Encodes the specified TransRequest message. Does not implicitly {@link pbm.TransRequest.verify|verify} messages.
         * @function encode
         * @memberof pbm.TransRequest
         * @static
         * @param {pbm.ITransRequest} message TransRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TransRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sname != null && message.hasOwnProperty("sname"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.sname);
            if (message.method != null && message.hasOwnProperty("method"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.method);
            if (message.req != null && message.hasOwnProperty("req"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.req);
            return writer;
        };

        /**
         * Decodes a TransRequest message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.TransRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.TransRequest} TransRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TransRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.TransRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sname = reader.string();
                    break;
                case 2:
                    message.method = reader.string();
                    break;
                case 3:
                    message.req = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return TransRequest;
    })();

    pbm.AggregateGetReq = (function() {

        /**
         * Properties of an AggregateGetReq.
         * @memberof pbm
         * @interface IAggregateGetReq
         * @property {number|null} [sequence] AggregateGetReq sequence
         * @property {Array.<pbm.ITransRequest>|null} [requests] AggregateGetReq requests
         */

        /**
         * Constructs a new AggregateGetReq.
         * @memberof pbm
         * @classdesc Represents an AggregateGetReq.
         * @implements IAggregateGetReq
         * @constructor
         * @param {pbm.IAggregateGetReq=} [properties] Properties to set
         */
        function AggregateGetReq(properties) {
            this.requests = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AggregateGetReq sequence.
         * @member {number} sequence
         * @memberof pbm.AggregateGetReq
         * @instance
         */
        AggregateGetReq.prototype.sequence = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AggregateGetReq requests.
         * @member {Array.<pbm.ITransRequest>} requests
         * @memberof pbm.AggregateGetReq
         * @instance
         */
        AggregateGetReq.prototype.requests = $util.emptyArray;

        /**
         * Creates a new AggregateGetReq instance using the specified properties.
         * @function create
         * @memberof pbm.AggregateGetReq
         * @static
         * @param {pbm.IAggregateGetReq=} [properties] Properties to set
         * @returns {pbm.AggregateGetReq} AggregateGetReq instance
         */
        AggregateGetReq.create = function create(properties) {
            return new AggregateGetReq(properties);
        };

        /**
         * Encodes the specified AggregateGetReq message. Does not implicitly {@link pbm.AggregateGetReq.verify|verify} messages.
         * @function encode
         * @memberof pbm.AggregateGetReq
         * @static
         * @param {pbm.IAggregateGetReq} message AggregateGetReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AggregateGetReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sequence != null && message.hasOwnProperty("sequence"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.sequence);
            if (message.requests != null && message.requests.length)
                for (var i = 0; i < message.requests.length; ++i)
                    $root.pbm.TransRequest.encode(message.requests[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes an AggregateGetReq message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.AggregateGetReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.AggregateGetReq} AggregateGetReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AggregateGetReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.AggregateGetReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sequence = reader.int64();
                    break;
                case 2:
                    if (!(message.requests && message.requests.length))
                        message.requests = [];
                    message.requests.push($root.pbm.TransRequest.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return AggregateGetReq;
    })();

    pbm.TransResponse = (function() {

        /**
         * Properties of a TransResponse.
         * @memberof pbm
         * @interface ITransResponse
         * @property {string|null} [sname] TransResponse sname
         * @property {string|null} [method] TransResponse method
         * @property {Uint8Array|null} [rsp] TransResponse rsp
         */

        /**
         * Constructs a new TransResponse.
         * @memberof pbm
         * @classdesc Represents a TransResponse.
         * @implements ITransResponse
         * @constructor
         * @param {pbm.ITransResponse=} [properties] Properties to set
         */
        function TransResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TransResponse sname.
         * @member {string} sname
         * @memberof pbm.TransResponse
         * @instance
         */
        TransResponse.prototype.sname = "";

        /**
         * TransResponse method.
         * @member {string} method
         * @memberof pbm.TransResponse
         * @instance
         */
        TransResponse.prototype.method = "";

        /**
         * TransResponse rsp.
         * @member {Uint8Array} rsp
         * @memberof pbm.TransResponse
         * @instance
         */
        TransResponse.prototype.rsp = $util.newBuffer([]);

        /**
         * Creates a new TransResponse instance using the specified properties.
         * @function create
         * @memberof pbm.TransResponse
         * @static
         * @param {pbm.ITransResponse=} [properties] Properties to set
         * @returns {pbm.TransResponse} TransResponse instance
         */
        TransResponse.create = function create(properties) {
            return new TransResponse(properties);
        };

        /**
         * Encodes the specified TransResponse message. Does not implicitly {@link pbm.TransResponse.verify|verify} messages.
         * @function encode
         * @memberof pbm.TransResponse
         * @static
         * @param {pbm.ITransResponse} message TransResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TransResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sname != null && message.hasOwnProperty("sname"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.sname);
            if (message.method != null && message.hasOwnProperty("method"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.method);
            if (message.rsp != null && message.hasOwnProperty("rsp"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.rsp);
            return writer;
        };

        /**
         * Decodes a TransResponse message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.TransResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.TransResponse} TransResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TransResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.TransResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sname = reader.string();
                    break;
                case 2:
                    message.method = reader.string();
                    break;
                case 3:
                    message.rsp = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return TransResponse;
    })();

    pbm.AggregateGetRes = (function() {

        /**
         * Properties of an AggregateGetRes.
         * @memberof pbm
         * @interface IAggregateGetRes
         * @property {common.IResult|null} [result] AggregateGetRes result
         * @property {number|null} [sequence] AggregateGetRes sequence
         * @property {Array.<pbm.ITransResponse>|null} [responses] AggregateGetRes responses
         */

        /**
         * Constructs a new AggregateGetRes.
         * @memberof pbm
         * @classdesc Represents an AggregateGetRes.
         * @implements IAggregateGetRes
         * @constructor
         * @param {pbm.IAggregateGetRes=} [properties] Properties to set
         */
        function AggregateGetRes(properties) {
            this.responses = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AggregateGetRes result.
         * @member {common.IResult|null|undefined} result
         * @memberof pbm.AggregateGetRes
         * @instance
         */
        AggregateGetRes.prototype.result = null;

        /**
         * AggregateGetRes sequence.
         * @member {number} sequence
         * @memberof pbm.AggregateGetRes
         * @instance
         */
        AggregateGetRes.prototype.sequence = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AggregateGetRes responses.
         * @member {Array.<pbm.ITransResponse>} responses
         * @memberof pbm.AggregateGetRes
         * @instance
         */
        AggregateGetRes.prototype.responses = $util.emptyArray;

        /**
         * Creates a new AggregateGetRes instance using the specified properties.
         * @function create
         * @memberof pbm.AggregateGetRes
         * @static
         * @param {pbm.IAggregateGetRes=} [properties] Properties to set
         * @returns {pbm.AggregateGetRes} AggregateGetRes instance
         */
        AggregateGetRes.create = function create(properties) {
            return new AggregateGetRes(properties);
        };

        /**
         * Encodes the specified AggregateGetRes message. Does not implicitly {@link pbm.AggregateGetRes.verify|verify} messages.
         * @function encode
         * @memberof pbm.AggregateGetRes
         * @static
         * @param {pbm.IAggregateGetRes} message AggregateGetRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AggregateGetRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && message.hasOwnProperty("result"))
                $root.common.Result.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.sequence != null && message.hasOwnProperty("sequence"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.sequence);
            if (message.responses != null && message.responses.length)
                for (var i = 0; i < message.responses.length; ++i)
                    $root.pbm.TransResponse.encode(message.responses[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes an AggregateGetRes message from the specified reader or buffer.
         * @function decode
         * @memberof pbm.AggregateGetRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbm.AggregateGetRes} AggregateGetRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AggregateGetRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbm.AggregateGetRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = $root.common.Result.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.sequence = reader.int64();
                    break;
                case 3:
                    if (!(message.responses && message.responses.length))
                        message.responses = [];
                    message.responses.push($root.pbm.TransResponse.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return AggregateGetRes;
    })();

    return pbm;
})();

$root.commodity = (function() {

    /**
     * Namespace commodity.
     * @exports commodity
     * @namespace
     */
    var commodity = {};

    /**
     * CommodityType enum.
     * @name commodity.CommodityType
     * @enum {string}
     * @property {number} CommodityTypeNone=0 CommodityTypeNone value
     * @property {number} CommodityTypeCrystal=1 CommodityTypeCrystal value
     * @property {number} CommodityTypeGameCurrency=2 CommodityTypeGameCurrency value
     * @property {number} CommodityTypeChatCurrency=3 CommodityTypeChatCurrency value
     * @property {number} CommodityTypeCurrency=6 CommodityTypeCurrency value
     * @property {number} CommodityTypeProp=100 CommodityTypeProp value
     * @property {number} CommodityTypeHMRevenueProp=101 CommodityTypeHMRevenueProp value
     * @property {number} CommodityTypePersonalDecorate=500 CommodityTypePersonalDecorate value
     * @property {number} CommodityTypeSceneDecorate=501 CommodityTypeSceneDecorate value
     * @property {number} CommodityTypeGeneralProp=502 CommodityTypeGeneralProp value
     * @property {number} CommodityTypeMount=503 CommodityTypeMount value
     * @property {number} CommodityTypeMakeUp=504 CommodityTypeMakeUp value
     * @property {number} CommodityTypeMotion=505 CommodityTypeMotion value
     * @property {number} CommodityTypeScene=506 CommodityTypeScene value
     * @property {number} CommodityTypeFurnitureCoupon=507 CommodityTypeFurnitureCoupon value
     * @property {number} CommodityTypeMembershipPack=508 CommodityTypeMembershipPack value
     * @property {number} CommodityTypeMallCoupon=509 CommodityTypeMallCoupon value
     * @property {number} CommodityTypeCustomFace=510 CommodityTypeCustomFace value
     * @property {number} CommodityTypeRoomSeat=511 CommodityTypeRoomSeat value
     * @property {number} CommodityTypeCoinMallCurrency=512 CommodityTypeCoinMallCurrency value
     * @property {number} CommodityTypeHMProp=513 CommodityTypeHMProp value
     * @property {number} CommodityTypeRoomPermission=514 CommodityTypeRoomPermission value
     * @property {number} CommodityTypeAIPropTime=515 CommodityTypeAIPropTime value
     * @property {number} CommodityTypeGameProp=517 CommodityTypeGameProp value
     * @property {number} CommodityTypeGamePropTime=518 CommodityTypeGamePropTime value
     * @property {number} CommodityTypeGameGrowthSysExp=519 CommodityTypeGameGrowthSysExp value
     * @property {number} CommodityTypeCustom=2500 CommodityTypeCustom value
     * @property {number} CommodityTypeCustomTime=2501 CommodityTypeCustomTime value
     * @property {number} CommodityTypeEmpty=2600 CommodityTypeEmpty value
     * @property {number} CommodityTypeLabel=3000 CommodityTypeLabel value
     * @property {number} CommodityTypePalette=3001 CommodityTypePalette value
     * @property {number} CommodityTypeGamePropLudo=8001 CommodityTypeGamePropLudo value
     * @property {number} CommodityTypeGamePropLudoTime=8002 CommodityTypeGamePropLudoTime value
     * @property {number} CommodityTypeAstroMembership=11000 CommodityTypeAstroMembership value
     * @property {number} CommodityTypeAstroPowerPoint=11001 CommodityTypeAstroPowerPoint value
     * @property {number} CommodityTypeAstroLuckCrystal=11002 CommodityTypeAstroLuckCrystal value
     * @property {number} CommodityTypeAstroCurrency=11003 CommodityTypeAstroCurrency value
     * @property {number} CommodityTypeAstroConsultCoupon=11004 CommodityTypeAstroConsultCoupon value
     * @property {number} CommodityTypeInfunRoomLabel=12000 CommodityTypeInfunRoomLabel value
     * @property {number} CommodityTypeInfunCurrency=12001 CommodityTypeInfunCurrency value
     * @property {number} CommodityTypeInfunHeadIcon=12002 CommodityTypeInfunHeadIcon value
     * @property {number} CommodityTypeInfunInShow=12003 CommodityTypeInfunInShow value
     * @property {number} CommodityTypeInfunChatBubble=12004 CommodityTypeInfunChatBubble value
     * @property {number} CommodityTypeInfunRoomBgPic=12005 CommodityTypeInfunRoomBgPic value
     * @property {number} CommodityTypeInfunBigEmoji=12006 CommodityTypeInfunBigEmoji value
     * @property {number} CommodityTypeInfunMicWave=12007 CommodityTypeInfunMicWave value
     * @property {number} CommodityTypeInfunMemberExp=12008 CommodityTypeInfunMemberExp value
     * @property {number} CommodityTypeInfunRoomScore=12009 CommodityTypeInfunRoomScore value
     * @property {number} CommodityTypeInfunGift=12010 CommodityTypeInfunGift value
     * @property {number} CommodityTypeInfunActiveGift=12011 CommodityTypeInfunActiveGift value
     * @property {number} CommodityTypeInfunGameplayPrivilege=12012 CommodityTypeInfunGameplayPrivilege value
     * @property {number} CommodityTypeInfunRoomCover=12013 CommodityTypeInfunRoomCover value
     * @property {number} CommodityTypeInfunRoomFrame=12014 CommodityTypeInfunRoomFrame value
     * @property {number} CommodityTypeInfunRoomContentLabel=12015 CommodityTypeInfunRoomContentLabel value
     * @property {number} CommodityTypeInfunRelationInShow=12016 CommodityTypeInfunRelationInShow value
     * @property {number} CommodityTypeInfunUserLabel=12017 CommodityTypeInfunUserLabel value
     * @property {number} CommodityTypeInfunGameVoucher=12035 CommodityTypeInfunGameVoucher value
     * @property {number} CommodityTypeInfunGameBonusCoupon=12036 CommodityTypeInfunGameBonusCoupon value
     * @property {number} CommodityTypeInfunCustom=12901 CommodityTypeInfunCustom value
     * @property {number} CommodityTypeInfunCustomTime=12902 CommodityTypeInfunCustomTime value
     * @property {number} CommodityTypeInfunEmpty=12999 CommodityTypeInfunEmpty value
     * @property {number} CommodityTypeVideoGPTCurrency=13000 CommodityTypeVideoGPTCurrency value
     * @property {number} CommodityTypeVideoGPTCoupon=13001 CommodityTypeVideoGPTCoupon value
     * @property {number} CommodityType2DHeadIcon=50001 CommodityType2DHeadIcon value
     * @property {number} CommodityType2DMedal=50002 CommodityType2DMedal value
     * @property {number} CommodityType2DInShow=50003 CommodityType2DInShow value
     * @property {number} CommodityType2DPrivilegePack=50004 CommodityType2DPrivilegePack value
     * @property {number} CommodityType2DGift=50005 CommodityType2DGift value
     * @property {number} CommodityType2DLuckyCard=50006 CommodityType2DLuckyCard value
     * @property {number} CommodityType2DDiamond=50007 CommodityType2DDiamond value
     * @property {number} CommodityType2DHagoGold=50008 CommodityType2DHagoGold value
     * @property {number} CommodityType2DRoomBgPic=50009 CommodityType2DRoomBgPic value
     * @property {number} CommodityType2DBigEmoji=50010 CommodityType2DBigEmoji value
     * @property {number} CommodityType2DCoupon=50011 CommodityType2DCoupon value
     * @property {number} CommodityType2DChatBubble=50012 CommodityType2DChatBubble value
     * @property {number} CommodityType2DMask=50013 CommodityType2DMask value
     * @property {number} CommodityType2DHammer=50014 CommodityType2DHammer value
     * @property {number} CommodityType2DPrivilegeMallTicket=50015 CommodityType2DPrivilegeMallTicket value
     * @property {number} CommodityType2DPayLevelScore=50016 CommodityType2DPayLevelScore value
     * @property {number} CommodityType2DSVIPScore=50017 CommodityType2DSVIPScore value
     * @property {number} CommodityType2DRedPacket=50018 CommodityType2DRedPacket value
     * @property {number} CommodityType2DGameCoin=50019 CommodityType2DGameCoin value
     * @property {number} CommodityType2DDailyDrawCoupon=50020 CommodityType2DDailyDrawCoupon value
     * @property {number} CommodityType2DPayLevelPower=50021 CommodityType2DPayLevelPower value
     * @property {number} CommodityType2DSvipvnScore=50022 CommodityType2DSvipvnScore value
     * @property {number} CommodityType2DDiyPush=50023 CommodityType2DDiyPush value
     * @property {number} CommodityType2DPackage=50024 CommodityType2DPackage value
     * @property {number} CommodityType2DUserCardBg=50025 CommodityType2DUserCardBg value
     * @property {number} CommodityType2DShout=50026 CommodityType2DShout value
     * @property {number} CommodityType2DCoffersDiamond=50027 CommodityType2DCoffersDiamond value
     * @property {number} CommodityType2DNobleExpCard=50028 CommodityType2DNobleExpCard value
     * @property {number} CommodityType2DLevelQuickenCard=50029 CommodityType2DLevelQuickenCard value
     * @property {number} CommodityType2DEmojiGashaponTicket=50030 CommodityType2DEmojiGashaponTicket value
     * @property {number} CommodityType2DUserLevelScore=50031 CommodityType2DUserLevelScore value
     * @property {number} CommodityType2DFamilyReward=50032 CommodityType2DFamilyReward value
     * @property {number} CommodityType2DGiftEffect=50033 CommodityType2DGiftEffect value
     * @property {number} CommodityType2DHat=50034 CommodityType2DHat value
     * @property {number} CommodityType2DRechargePoint=50035 CommodityType2DRechargePoint value
     * @property {number} CommodityType2DWheat=50036 CommodityType2DWheat value
     * @property {number} CommodityType2DLiveCoverLabel=50037 CommodityType2DLiveCoverLabel value
     * @property {number} CommodityType2DThemeRoomCard=50038 CommodityType2DThemeRoomCard value
     * @property {number} CommodityType2DMicDynamic=50039 CommodityType2DMicDynamic value
     * @property {number} CommodityType2DMicIDMark=50040 CommodityType2DMicIDMark value
     * @property {number} CommodityType2DConsumeCoupon=50041 CommodityType2DConsumeCoupon value
     * @property {number} CommodityType2DRoomCoverFrame=50042 CommodityType2DRoomCoverFrame value
     * @property {number} CommodityType2DEmpty=50100 CommodityType2DEmpty value
     * @property {number} CommodityType2DHeadIconPiece=50101 CommodityType2DHeadIconPiece value
     * @property {number} CommodityType2DMedalPiece=50102 CommodityType2DMedalPiece value
     * @property {number} CommodityType2DInshowPiece=50103 CommodityType2DInshowPiece value
     * @property {number} CommodityType2DRoomBGPiece=50109 CommodityType2DRoomBGPiece value
     * @property {number} CommodityType2DBigEmojiPiece=50110 CommodityType2DBigEmojiPiece value
     * @property {number} CommodityType2DChatBubblePiece=50112 CommodityType2DChatBubblePiece value
     * @property {number} CommodityType2DMaskPiece=50113 CommodityType2DMaskPiece value
     * @property {number} CommodityType2DWheatFrame=50114 CommodityType2DWheatFrame value
     * @property {number} CommodityType2DCustom=51000 CommodityType2DCustom value
     * @property {number} CommodityType2DCustomTime=51001 CommodityType2DCustomTime value
     */
    commodity.CommodityType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "CommodityTypeNone"] = 0;
        values[valuesById[1] = "CommodityTypeCrystal"] = 1;
        values[valuesById[2] = "CommodityTypeGameCurrency"] = 2;
        values[valuesById[3] = "CommodityTypeChatCurrency"] = 3;
        values[valuesById[6] = "CommodityTypeCurrency"] = 6;
        values[valuesById[100] = "CommodityTypeProp"] = 100;
        values[valuesById[101] = "CommodityTypeHMRevenueProp"] = 101;
        values[valuesById[500] = "CommodityTypePersonalDecorate"] = 500;
        values[valuesById[501] = "CommodityTypeSceneDecorate"] = 501;
        values[valuesById[502] = "CommodityTypeGeneralProp"] = 502;
        values[valuesById[503] = "CommodityTypeMount"] = 503;
        values[valuesById[504] = "CommodityTypeMakeUp"] = 504;
        values[valuesById[505] = "CommodityTypeMotion"] = 505;
        values[valuesById[506] = "CommodityTypeScene"] = 506;
        values[valuesById[507] = "CommodityTypeFurnitureCoupon"] = 507;
        values[valuesById[508] = "CommodityTypeMembershipPack"] = 508;
        values[valuesById[509] = "CommodityTypeMallCoupon"] = 509;
        values[valuesById[510] = "CommodityTypeCustomFace"] = 510;
        values[valuesById[511] = "CommodityTypeRoomSeat"] = 511;
        values[valuesById[512] = "CommodityTypeCoinMallCurrency"] = 512;
        values[valuesById[513] = "CommodityTypeHMProp"] = 513;
        values[valuesById[514] = "CommodityTypeRoomPermission"] = 514;
        values[valuesById[515] = "CommodityTypeAIPropTime"] = 515;
        values[valuesById[517] = "CommodityTypeGameProp"] = 517;
        values[valuesById[518] = "CommodityTypeGamePropTime"] = 518;
        values[valuesById[519] = "CommodityTypeGameGrowthSysExp"] = 519;
        values[valuesById[2500] = "CommodityTypeCustom"] = 2500;
        values[valuesById[2501] = "CommodityTypeCustomTime"] = 2501;
        values[valuesById[2600] = "CommodityTypeEmpty"] = 2600;
        values[valuesById[3000] = "CommodityTypeLabel"] = 3000;
        values[valuesById[3001] = "CommodityTypePalette"] = 3001;
        values[valuesById[8001] = "CommodityTypeGamePropLudo"] = 8001;
        values[valuesById[8002] = "CommodityTypeGamePropLudoTime"] = 8002;
        values[valuesById[11000] = "CommodityTypeAstroMembership"] = 11000;
        values[valuesById[11001] = "CommodityTypeAstroPowerPoint"] = 11001;
        values[valuesById[11002] = "CommodityTypeAstroLuckCrystal"] = 11002;
        values[valuesById[11003] = "CommodityTypeAstroCurrency"] = 11003;
        values[valuesById[11004] = "CommodityTypeAstroConsultCoupon"] = 11004;
        values[valuesById[12000] = "CommodityTypeInfunRoomLabel"] = 12000;
        values[valuesById[12001] = "CommodityTypeInfunCurrency"] = 12001;
        values[valuesById[12002] = "CommodityTypeInfunHeadIcon"] = 12002;
        values[valuesById[12003] = "CommodityTypeInfunInShow"] = 12003;
        values[valuesById[12004] = "CommodityTypeInfunChatBubble"] = 12004;
        values[valuesById[12005] = "CommodityTypeInfunRoomBgPic"] = 12005;
        values[valuesById[12006] = "CommodityTypeInfunBigEmoji"] = 12006;
        values[valuesById[12007] = "CommodityTypeInfunMicWave"] = 12007;
        values[valuesById[12008] = "CommodityTypeInfunMemberExp"] = 12008;
        values[valuesById[12009] = "CommodityTypeInfunRoomScore"] = 12009;
        values[valuesById[12010] = "CommodityTypeInfunGift"] = 12010;
        values[valuesById[12011] = "CommodityTypeInfunActiveGift"] = 12011;
        values[valuesById[12012] = "CommodityTypeInfunGameplayPrivilege"] = 12012;
        values[valuesById[12013] = "CommodityTypeInfunRoomCover"] = 12013;
        values[valuesById[12014] = "CommodityTypeInfunRoomFrame"] = 12014;
        values[valuesById[12015] = "CommodityTypeInfunRoomContentLabel"] = 12015;
        values[valuesById[12016] = "CommodityTypeInfunRelationInShow"] = 12016;
        values[valuesById[12017] = "CommodityTypeInfunUserLabel"] = 12017;
        values[valuesById[12035] = "CommodityTypeInfunGameVoucher"] = 12035;
        values[valuesById[12036] = "CommodityTypeInfunGameBonusCoupon"] = 12036;
        values[valuesById[12901] = "CommodityTypeInfunCustom"] = 12901;
        values[valuesById[12902] = "CommodityTypeInfunCustomTime"] = 12902;
        values[valuesById[12999] = "CommodityTypeInfunEmpty"] = 12999;
        values[valuesById[13000] = "CommodityTypeVideoGPTCurrency"] = 13000;
        values[valuesById[13001] = "CommodityTypeVideoGPTCoupon"] = 13001;
        values[valuesById[50001] = "CommodityType2DHeadIcon"] = 50001;
        values[valuesById[50002] = "CommodityType2DMedal"] = 50002;
        values[valuesById[50003] = "CommodityType2DInShow"] = 50003;
        values[valuesById[50004] = "CommodityType2DPrivilegePack"] = 50004;
        values[valuesById[50005] = "CommodityType2DGift"] = 50005;
        values[valuesById[50006] = "CommodityType2DLuckyCard"] = 50006;
        values[valuesById[50007] = "CommodityType2DDiamond"] = 50007;
        values[valuesById[50008] = "CommodityType2DHagoGold"] = 50008;
        values[valuesById[50009] = "CommodityType2DRoomBgPic"] = 50009;
        values[valuesById[50010] = "CommodityType2DBigEmoji"] = 50010;
        values[valuesById[50011] = "CommodityType2DCoupon"] = 50011;
        values[valuesById[50012] = "CommodityType2DChatBubble"] = 50012;
        values[valuesById[50013] = "CommodityType2DMask"] = 50013;
        values[valuesById[50014] = "CommodityType2DHammer"] = 50014;
        values[valuesById[50015] = "CommodityType2DPrivilegeMallTicket"] = 50015;
        values[valuesById[50016] = "CommodityType2DPayLevelScore"] = 50016;
        values[valuesById[50017] = "CommodityType2DSVIPScore"] = 50017;
        values[valuesById[50018] = "CommodityType2DRedPacket"] = 50018;
        values[valuesById[50019] = "CommodityType2DGameCoin"] = 50019;
        values[valuesById[50020] = "CommodityType2DDailyDrawCoupon"] = 50020;
        values[valuesById[50021] = "CommodityType2DPayLevelPower"] = 50021;
        values[valuesById[50022] = "CommodityType2DSvipvnScore"] = 50022;
        values[valuesById[50023] = "CommodityType2DDiyPush"] = 50023;
        values[valuesById[50024] = "CommodityType2DPackage"] = 50024;
        values[valuesById[50025] = "CommodityType2DUserCardBg"] = 50025;
        values[valuesById[50026] = "CommodityType2DShout"] = 50026;
        values[valuesById[50027] = "CommodityType2DCoffersDiamond"] = 50027;
        values[valuesById[50028] = "CommodityType2DNobleExpCard"] = 50028;
        values[valuesById[50029] = "CommodityType2DLevelQuickenCard"] = 50029;
        values[valuesById[50030] = "CommodityType2DEmojiGashaponTicket"] = 50030;
        values[valuesById[50031] = "CommodityType2DUserLevelScore"] = 50031;
        values[valuesById[50032] = "CommodityType2DFamilyReward"] = 50032;
        values[valuesById[50033] = "CommodityType2DGiftEffect"] = 50033;
        values[valuesById[50034] = "CommodityType2DHat"] = 50034;
        values[valuesById[50035] = "CommodityType2DRechargePoint"] = 50035;
        values[valuesById[50036] = "CommodityType2DWheat"] = 50036;
        values[valuesById[50037] = "CommodityType2DLiveCoverLabel"] = 50037;
        values[valuesById[50038] = "CommodityType2DThemeRoomCard"] = 50038;
        values[valuesById[50039] = "CommodityType2DMicDynamic"] = 50039;
        values[valuesById[50040] = "CommodityType2DMicIDMark"] = 50040;
        values[valuesById[50041] = "CommodityType2DConsumeCoupon"] = 50041;
        values[valuesById[50042] = "CommodityType2DRoomCoverFrame"] = 50042;
        values[valuesById[50100] = "CommodityType2DEmpty"] = 50100;
        values[valuesById[50101] = "CommodityType2DHeadIconPiece"] = 50101;
        values[valuesById[50102] = "CommodityType2DMedalPiece"] = 50102;
        values[valuesById[50103] = "CommodityType2DInshowPiece"] = 50103;
        values[valuesById[50109] = "CommodityType2DRoomBGPiece"] = 50109;
        values[valuesById[50110] = "CommodityType2DBigEmojiPiece"] = 50110;
        values[valuesById[50112] = "CommodityType2DChatBubblePiece"] = 50112;
        values[valuesById[50113] = "CommodityType2DMaskPiece"] = 50113;
        values[valuesById[50114] = "CommodityType2DWheatFrame"] = 50114;
        values[valuesById[51000] = "CommodityType2DCustom"] = 51000;
        values[valuesById[51001] = "CommodityType2DCustomTime"] = 51001;
        return values;
    })();

    commodity.CommodityReward = (function() {

        /**
         * Properties of a CommodityReward.
         * @memberof commodity
         * @interface ICommodityReward
         * @property {commodity.CommodityType|null} [commodity_type] CommodityReward commodity_type
         * @property {number|null} [commodity_id] CommodityReward commodity_id
         * @property {number|null} [count] CommodityReward count
         * @property {number|null} [expire_second] CommodityReward expire_second
         */

        /**
         * Constructs a new CommodityReward.
         * @memberof commodity
         * @classdesc Represents a CommodityReward.
         * @implements ICommodityReward
         * @constructor
         * @param {commodity.ICommodityReward=} [properties] Properties to set
         */
        function CommodityReward(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CommodityReward commodity_type.
         * @member {commodity.CommodityType} commodity_type
         * @memberof commodity.CommodityReward
         * @instance
         */
        CommodityReward.prototype.commodity_type = 0;

        /**
         * CommodityReward commodity_id.
         * @member {number} commodity_id
         * @memberof commodity.CommodityReward
         * @instance
         */
        CommodityReward.prototype.commodity_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CommodityReward count.
         * @member {number} count
         * @memberof commodity.CommodityReward
         * @instance
         */
        CommodityReward.prototype.count = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CommodityReward expire_second.
         * @member {number} expire_second
         * @memberof commodity.CommodityReward
         * @instance
         */
        CommodityReward.prototype.expire_second = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new CommodityReward instance using the specified properties.
         * @function create
         * @memberof commodity.CommodityReward
         * @static
         * @param {commodity.ICommodityReward=} [properties] Properties to set
         * @returns {commodity.CommodityReward} CommodityReward instance
         */
        CommodityReward.create = function create(properties) {
            return new CommodityReward(properties);
        };

        /**
         * Encodes the specified CommodityReward message. Does not implicitly {@link commodity.CommodityReward.verify|verify} messages.
         * @function encode
         * @memberof commodity.CommodityReward
         * @static
         * @param {commodity.ICommodityReward} message CommodityReward message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommodityReward.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.commodity_type != null && message.hasOwnProperty("commodity_type"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.commodity_type);
            if (message.commodity_id != null && message.hasOwnProperty("commodity_id"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.commodity_id);
            if (message.count != null && message.hasOwnProperty("count"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.count);
            if (message.expire_second != null && message.hasOwnProperty("expire_second"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.expire_second);
            return writer;
        };

        /**
         * Decodes a CommodityReward message from the specified reader or buffer.
         * @function decode
         * @memberof commodity.CommodityReward
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {commodity.CommodityReward} CommodityReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommodityReward.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.commodity.CommodityReward();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    message.commodity_type = reader.int32();
                    break;
                case 3:
                    message.commodity_id = reader.int64();
                    break;
                case 4:
                    message.count = reader.int64();
                    break;
                case 5:
                    message.expire_second = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return CommodityReward;
    })();

    return commodity;
})();

$root.net = (function() {

    /**
     * Namespace net.
     * @exports net
     * @namespace
     */
    var net = {};

    net.ihago = (function() {

        /**
         * Namespace ihago.
         * @memberof net
         * @namespace
         */
        var ihago = {};

        ihago.money = (function() {

            /**
             * Namespace money.
             * @memberof net.ihago
             * @namespace
             */
            var money = {};

            money.api = (function() {

                /**
                 * Namespace api.
                 * @memberof net.ihago.money
                 * @namespace
                 */
                var api = {};

                api.globalmetadata = (function() {

                    /**
                     * Namespace globalmetadata.
                     * @memberof net.ihago.money.api
                     * @namespace
                     */
                    var globalmetadata = {};

                    globalmetadata.CommodityExtend = (function() {

                        /**
                         * Properties of a CommodityExtend.
                         * @memberof net.ihago.money.api.globalmetadata
                         * @interface ICommodityExtend
                         * @property {net.ihago.money.api.globalmetadata.IInfunGameCouponExtend|null} [infun_game_vocher_extend] CommodityExtend infun_game_vocher_extend
                         * @property {net.ihago.money.api.globalmetadata.IInfunGameCouponExtend|null} [infun_game_bonus_coupon_extend] CommodityExtend infun_game_bonus_coupon_extend
                         */

                        /**
                         * Constructs a new CommodityExtend.
                         * @memberof net.ihago.money.api.globalmetadata
                         * @classdesc Represents a CommodityExtend.
                         * @implements ICommodityExtend
                         * @constructor
                         * @param {net.ihago.money.api.globalmetadata.ICommodityExtend=} [properties] Properties to set
                         */
                        function CommodityExtend(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * CommodityExtend infun_game_vocher_extend.
                         * @member {net.ihago.money.api.globalmetadata.IInfunGameCouponExtend|null|undefined} infun_game_vocher_extend
                         * @memberof net.ihago.money.api.globalmetadata.CommodityExtend
                         * @instance
                         */
                        CommodityExtend.prototype.infun_game_vocher_extend = null;

                        /**
                         * CommodityExtend infun_game_bonus_coupon_extend.
                         * @member {net.ihago.money.api.globalmetadata.IInfunGameCouponExtend|null|undefined} infun_game_bonus_coupon_extend
                         * @memberof net.ihago.money.api.globalmetadata.CommodityExtend
                         * @instance
                         */
                        CommodityExtend.prototype.infun_game_bonus_coupon_extend = null;

                        /**
                         * Creates a new CommodityExtend instance using the specified properties.
                         * @function create
                         * @memberof net.ihago.money.api.globalmetadata.CommodityExtend
                         * @static
                         * @param {net.ihago.money.api.globalmetadata.ICommodityExtend=} [properties] Properties to set
                         * @returns {net.ihago.money.api.globalmetadata.CommodityExtend} CommodityExtend instance
                         */
                        CommodityExtend.create = function create(properties) {
                            return new CommodityExtend(properties);
                        };

                        /**
                         * Encodes the specified CommodityExtend message. Does not implicitly {@link net.ihago.money.api.globalmetadata.CommodityExtend.verify|verify} messages.
                         * @function encode
                         * @memberof net.ihago.money.api.globalmetadata.CommodityExtend
                         * @static
                         * @param {net.ihago.money.api.globalmetadata.ICommodityExtend} message CommodityExtend message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        CommodityExtend.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.infun_game_vocher_extend != null && message.hasOwnProperty("infun_game_vocher_extend"))
                                $root.net.ihago.money.api.globalmetadata.InfunGameCouponExtend.encode(message.infun_game_vocher_extend, writer.uint32(/* id 618, wireType 2 =*/4946).fork()).ldelim();
                            if (message.infun_game_bonus_coupon_extend != null && message.hasOwnProperty("infun_game_bonus_coupon_extend"))
                                $root.net.ihago.money.api.globalmetadata.InfunGameCouponExtend.encode(message.infun_game_bonus_coupon_extend, writer.uint32(/* id 619, wireType 2 =*/4954).fork()).ldelim();
                            return writer;
                        };

                        /**
                         * Decodes a CommodityExtend message from the specified reader or buffer.
                         * @function decode
                         * @memberof net.ihago.money.api.globalmetadata.CommodityExtend
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {net.ihago.money.api.globalmetadata.CommodityExtend} CommodityExtend
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        CommodityExtend.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.net.ihago.money.api.globalmetadata.CommodityExtend();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 618:
                                    message.infun_game_vocher_extend = $root.net.ihago.money.api.globalmetadata.InfunGameCouponExtend.decode(reader, reader.uint32());
                                    break;
                                case 619:
                                    message.infun_game_bonus_coupon_extend = $root.net.ihago.money.api.globalmetadata.InfunGameCouponExtend.decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        return CommodityExtend;
                    })();

                    globalmetadata.InfunGameCouponExtend = (function() {

                        /**
                         * Properties of an InfunGameCouponExtend.
                         * @memberof net.ihago.money.api.globalmetadata
                         * @interface IInfunGameCouponExtend
                         * @property {number|null} [valid_days] InfunGameCouponExtend valid_days
                         * @property {number|null} [addition_rate] InfunGameCouponExtend addition_rate
                         * @property {number|null} [addition_limit] InfunGameCouponExtend addition_limit
                         * @property {number|null} [stock_limit] InfunGameCouponExtend stock_limit
                         * @property {number|null} [deduct_amount] InfunGameCouponExtend deduct_amount
                         */

                        /**
                         * Constructs a new InfunGameCouponExtend.
                         * @memberof net.ihago.money.api.globalmetadata
                         * @classdesc Represents an InfunGameCouponExtend.
                         * @implements IInfunGameCouponExtend
                         * @constructor
                         * @param {net.ihago.money.api.globalmetadata.IInfunGameCouponExtend=} [properties] Properties to set
                         */
                        function InfunGameCouponExtend(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * InfunGameCouponExtend valid_days.
                         * @member {number} valid_days
                         * @memberof net.ihago.money.api.globalmetadata.InfunGameCouponExtend
                         * @instance
                         */
                        InfunGameCouponExtend.prototype.valid_days = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * InfunGameCouponExtend addition_rate.
                         * @member {number} addition_rate
                         * @memberof net.ihago.money.api.globalmetadata.InfunGameCouponExtend
                         * @instance
                         */
                        InfunGameCouponExtend.prototype.addition_rate = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * InfunGameCouponExtend addition_limit.
                         * @member {number} addition_limit
                         * @memberof net.ihago.money.api.globalmetadata.InfunGameCouponExtend
                         * @instance
                         */
                        InfunGameCouponExtend.prototype.addition_limit = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * InfunGameCouponExtend stock_limit.
                         * @member {number} stock_limit
                         * @memberof net.ihago.money.api.globalmetadata.InfunGameCouponExtend
                         * @instance
                         */
                        InfunGameCouponExtend.prototype.stock_limit = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * InfunGameCouponExtend deduct_amount.
                         * @member {number} deduct_amount
                         * @memberof net.ihago.money.api.globalmetadata.InfunGameCouponExtend
                         * @instance
                         */
                        InfunGameCouponExtend.prototype.deduct_amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * Creates a new InfunGameCouponExtend instance using the specified properties.
                         * @function create
                         * @memberof net.ihago.money.api.globalmetadata.InfunGameCouponExtend
                         * @static
                         * @param {net.ihago.money.api.globalmetadata.IInfunGameCouponExtend=} [properties] Properties to set
                         * @returns {net.ihago.money.api.globalmetadata.InfunGameCouponExtend} InfunGameCouponExtend instance
                         */
                        InfunGameCouponExtend.create = function create(properties) {
                            return new InfunGameCouponExtend(properties);
                        };

                        /**
                         * Encodes the specified InfunGameCouponExtend message. Does not implicitly {@link net.ihago.money.api.globalmetadata.InfunGameCouponExtend.verify|verify} messages.
                         * @function encode
                         * @memberof net.ihago.money.api.globalmetadata.InfunGameCouponExtend
                         * @static
                         * @param {net.ihago.money.api.globalmetadata.IInfunGameCouponExtend} message InfunGameCouponExtend message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        InfunGameCouponExtend.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.valid_days != null && message.hasOwnProperty("valid_days"))
                                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.valid_days);
                            if (message.addition_rate != null && message.hasOwnProperty("addition_rate"))
                                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.addition_rate);
                            if (message.addition_limit != null && message.hasOwnProperty("addition_limit"))
                                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.addition_limit);
                            if (message.stock_limit != null && message.hasOwnProperty("stock_limit"))
                                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.stock_limit);
                            if (message.deduct_amount != null && message.hasOwnProperty("deduct_amount"))
                                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.deduct_amount);
                            return writer;
                        };

                        /**
                         * Decodes an InfunGameCouponExtend message from the specified reader or buffer.
                         * @function decode
                         * @memberof net.ihago.money.api.globalmetadata.InfunGameCouponExtend
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {net.ihago.money.api.globalmetadata.InfunGameCouponExtend} InfunGameCouponExtend
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        InfunGameCouponExtend.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.net.ihago.money.api.globalmetadata.InfunGameCouponExtend();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.valid_days = reader.int64();
                                    break;
                                case 2:
                                    message.addition_rate = reader.int64();
                                    break;
                                case 3:
                                    message.addition_limit = reader.int64();
                                    break;
                                case 4:
                                    message.stock_limit = reader.int64();
                                    break;
                                case 5:
                                    message.deduct_amount = reader.int64();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        return InfunGameCouponExtend;
                    })();

                    /**
                     * ResourceType enum.
                     * @name net.ihago.money.api.globalmetadata.ResourceType
                     * @enum {string}
                     * @property {number} ResourceTypeNone=0 ResourceTypeNone value
                     * @property {number} ResourceTypeSvga=1 ResourceTypeSvga value
                     * @property {number} ResourceTypePng=2 ResourceTypePng value
                     * @property {number} ResourceTypeJpg=3 ResourceTypeJpg value
                     * @property {number} ResourceTypeWebp=4 ResourceTypeWebp value
                     * @property {number} ResourceTypeMp4=5 ResourceTypeMp4 value
                     * @property {number} ResourceTypeZip=6 ResourceTypeZip value
                     */
                    globalmetadata.ResourceType = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "ResourceTypeNone"] = 0;
                        values[valuesById[1] = "ResourceTypeSvga"] = 1;
                        values[valuesById[2] = "ResourceTypePng"] = 2;
                        values[valuesById[3] = "ResourceTypeJpg"] = 3;
                        values[valuesById[4] = "ResourceTypeWebp"] = 4;
                        values[valuesById[5] = "ResourceTypeMp4"] = 5;
                        values[valuesById[6] = "ResourceTypeZip"] = 6;
                        return values;
                    })();

                    globalmetadata.Resource = (function() {

                        /**
                         * Properties of a Resource.
                         * @memberof net.ihago.money.api.globalmetadata
                         * @interface IResource
                         * @property {string|null} [resource_url] Resource resource_url
                         * @property {net.ihago.money.api.globalmetadata.ResourceType|null} [resource_type] Resource resource_type
                         * @property {string|null} [resource_md5] Resource resource_md5
                         */

                        /**
                         * Constructs a new Resource.
                         * @memberof net.ihago.money.api.globalmetadata
                         * @classdesc Represents a Resource.
                         * @implements IResource
                         * @constructor
                         * @param {net.ihago.money.api.globalmetadata.IResource=} [properties] Properties to set
                         */
                        function Resource(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Resource resource_url.
                         * @member {string} resource_url
                         * @memberof net.ihago.money.api.globalmetadata.Resource
                         * @instance
                         */
                        Resource.prototype.resource_url = "";

                        /**
                         * Resource resource_type.
                         * @member {net.ihago.money.api.globalmetadata.ResourceType} resource_type
                         * @memberof net.ihago.money.api.globalmetadata.Resource
                         * @instance
                         */
                        Resource.prototype.resource_type = 0;

                        /**
                         * Resource resource_md5.
                         * @member {string} resource_md5
                         * @memberof net.ihago.money.api.globalmetadata.Resource
                         * @instance
                         */
                        Resource.prototype.resource_md5 = "";

                        /**
                         * Creates a new Resource instance using the specified properties.
                         * @function create
                         * @memberof net.ihago.money.api.globalmetadata.Resource
                         * @static
                         * @param {net.ihago.money.api.globalmetadata.IResource=} [properties] Properties to set
                         * @returns {net.ihago.money.api.globalmetadata.Resource} Resource instance
                         */
                        Resource.create = function create(properties) {
                            return new Resource(properties);
                        };

                        /**
                         * Encodes the specified Resource message. Does not implicitly {@link net.ihago.money.api.globalmetadata.Resource.verify|verify} messages.
                         * @function encode
                         * @memberof net.ihago.money.api.globalmetadata.Resource
                         * @static
                         * @param {net.ihago.money.api.globalmetadata.IResource} message Resource message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Resource.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.resource_url != null && message.hasOwnProperty("resource_url"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.resource_url);
                            if (message.resource_type != null && message.hasOwnProperty("resource_type"))
                                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.resource_type);
                            if (message.resource_md5 != null && message.hasOwnProperty("resource_md5"))
                                writer.uint32(/* id 3, wireType 2 =*/26).string(message.resource_md5);
                            return writer;
                        };

                        /**
                         * Decodes a Resource message from the specified reader or buffer.
                         * @function decode
                         * @memberof net.ihago.money.api.globalmetadata.Resource
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {net.ihago.money.api.globalmetadata.Resource} Resource
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Resource.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.net.ihago.money.api.globalmetadata.Resource();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.resource_url = reader.string();
                                    break;
                                case 2:
                                    message.resource_type = reader.int32();
                                    break;
                                case 3:
                                    message.resource_md5 = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        return Resource;
                    })();

                    globalmetadata.Commodity = (function() {

                        /**
                         * Properties of a Commodity.
                         * @memberof net.ihago.money.api.globalmetadata
                         * @interface ICommodity
                         * @property {number|null} [commodity_id] Commodity commodity_id
                         * @property {commodity.CommodityType|null} [commodity_type] Commodity commodity_type
                         * @property {number|null} [value] Commodity value
                         * @property {number|null} [adj_value] Commodity adj_value
                         * @property {string|null} [name] Commodity name
                         * @property {number|null} [unit_seconds] Commodity unit_seconds
                         * @property {Object.<string,string>|null} [languages] Commodity languages
                         * @property {string|null} [description] Commodity description
                         * @property {net.ihago.money.api.globalmetadata.IResource|null} [icon] Commodity icon
                         * @property {net.ihago.money.api.globalmetadata.IResource|null} [h5_icon] Commodity h5_icon
                         * @property {number|null} [create_time] Commodity create_time
                         * @property {number|null} [update_time] Commodity update_time
                         * @property {string|null} [operator] Commodity operator
                         * @property {string|null} [creator] Commodity creator
                         * @property {number|null} [tab_id] Commodity tab_id
                         * @property {number|null} [unit_value] Commodity unit_value
                         * @property {net.ihago.money.api.globalmetadata.IResource|null} [resource] Commodity resource
                         * @property {net.ihago.money.api.globalmetadata.ICommodityExtend|null} [commodity_extend] Commodity commodity_extend
                         * @property {number|null} [version] Commodity version
                         * @property {Object.<string,string>|null} [descriptions] Commodity descriptions
                         */

                        /**
                         * Constructs a new Commodity.
                         * @memberof net.ihago.money.api.globalmetadata
                         * @classdesc Represents a Commodity.
                         * @implements ICommodity
                         * @constructor
                         * @param {net.ihago.money.api.globalmetadata.ICommodity=} [properties] Properties to set
                         */
                        function Commodity(properties) {
                            this.languages = {};
                            this.descriptions = {};
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Commodity commodity_id.
                         * @member {number} commodity_id
                         * @memberof net.ihago.money.api.globalmetadata.Commodity
                         * @instance
                         */
                        Commodity.prototype.commodity_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * Commodity commodity_type.
                         * @member {commodity.CommodityType} commodity_type
                         * @memberof net.ihago.money.api.globalmetadata.Commodity
                         * @instance
                         */
                        Commodity.prototype.commodity_type = 0;

                        /**
                         * Commodity value.
                         * @member {number} value
                         * @memberof net.ihago.money.api.globalmetadata.Commodity
                         * @instance
                         */
                        Commodity.prototype.value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * Commodity adj_value.
                         * @member {number} adj_value
                         * @memberof net.ihago.money.api.globalmetadata.Commodity
                         * @instance
                         */
                        Commodity.prototype.adj_value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * Commodity name.
                         * @member {string} name
                         * @memberof net.ihago.money.api.globalmetadata.Commodity
                         * @instance
                         */
                        Commodity.prototype.name = "";

                        /**
                         * Commodity unit_seconds.
                         * @member {number} unit_seconds
                         * @memberof net.ihago.money.api.globalmetadata.Commodity
                         * @instance
                         */
                        Commodity.prototype.unit_seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * Commodity languages.
                         * @member {Object.<string,string>} languages
                         * @memberof net.ihago.money.api.globalmetadata.Commodity
                         * @instance
                         */
                        Commodity.prototype.languages = $util.emptyObject;

                        /**
                         * Commodity description.
                         * @member {string} description
                         * @memberof net.ihago.money.api.globalmetadata.Commodity
                         * @instance
                         */
                        Commodity.prototype.description = "";

                        /**
                         * Commodity icon.
                         * @member {net.ihago.money.api.globalmetadata.IResource|null|undefined} icon
                         * @memberof net.ihago.money.api.globalmetadata.Commodity
                         * @instance
                         */
                        Commodity.prototype.icon = null;

                        /**
                         * Commodity h5_icon.
                         * @member {net.ihago.money.api.globalmetadata.IResource|null|undefined} h5_icon
                         * @memberof net.ihago.money.api.globalmetadata.Commodity
                         * @instance
                         */
                        Commodity.prototype.h5_icon = null;

                        /**
                         * Commodity create_time.
                         * @member {number} create_time
                         * @memberof net.ihago.money.api.globalmetadata.Commodity
                         * @instance
                         */
                        Commodity.prototype.create_time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * Commodity update_time.
                         * @member {number} update_time
                         * @memberof net.ihago.money.api.globalmetadata.Commodity
                         * @instance
                         */
                        Commodity.prototype.update_time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * Commodity operator.
                         * @member {string} operator
                         * @memberof net.ihago.money.api.globalmetadata.Commodity
                         * @instance
                         */
                        Commodity.prototype.operator = "";

                        /**
                         * Commodity creator.
                         * @member {string} creator
                         * @memberof net.ihago.money.api.globalmetadata.Commodity
                         * @instance
                         */
                        Commodity.prototype.creator = "";

                        /**
                         * Commodity tab_id.
                         * @member {number} tab_id
                         * @memberof net.ihago.money.api.globalmetadata.Commodity
                         * @instance
                         */
                        Commodity.prototype.tab_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * Commodity unit_value.
                         * @member {number} unit_value
                         * @memberof net.ihago.money.api.globalmetadata.Commodity
                         * @instance
                         */
                        Commodity.prototype.unit_value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * Commodity resource.
                         * @member {net.ihago.money.api.globalmetadata.IResource|null|undefined} resource
                         * @memberof net.ihago.money.api.globalmetadata.Commodity
                         * @instance
                         */
                        Commodity.prototype.resource = null;

                        /**
                         * Commodity commodity_extend.
                         * @member {net.ihago.money.api.globalmetadata.ICommodityExtend|null|undefined} commodity_extend
                         * @memberof net.ihago.money.api.globalmetadata.Commodity
                         * @instance
                         */
                        Commodity.prototype.commodity_extend = null;

                        /**
                         * Commodity version.
                         * @member {number} version
                         * @memberof net.ihago.money.api.globalmetadata.Commodity
                         * @instance
                         */
                        Commodity.prototype.version = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * Commodity descriptions.
                         * @member {Object.<string,string>} descriptions
                         * @memberof net.ihago.money.api.globalmetadata.Commodity
                         * @instance
                         */
                        Commodity.prototype.descriptions = $util.emptyObject;

                        /**
                         * Creates a new Commodity instance using the specified properties.
                         * @function create
                         * @memberof net.ihago.money.api.globalmetadata.Commodity
                         * @static
                         * @param {net.ihago.money.api.globalmetadata.ICommodity=} [properties] Properties to set
                         * @returns {net.ihago.money.api.globalmetadata.Commodity} Commodity instance
                         */
                        Commodity.create = function create(properties) {
                            return new Commodity(properties);
                        };

                        /**
                         * Encodes the specified Commodity message. Does not implicitly {@link net.ihago.money.api.globalmetadata.Commodity.verify|verify} messages.
                         * @function encode
                         * @memberof net.ihago.money.api.globalmetadata.Commodity
                         * @static
                         * @param {net.ihago.money.api.globalmetadata.ICommodity} message Commodity message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Commodity.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.commodity_id != null && message.hasOwnProperty("commodity_id"))
                                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.commodity_id);
                            if (message.commodity_type != null && message.hasOwnProperty("commodity_type"))
                                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.commodity_type);
                            if (message.value != null && message.hasOwnProperty("value"))
                                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.value);
                            if (message.adj_value != null && message.hasOwnProperty("adj_value"))
                                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.adj_value);
                            if (message.name != null && message.hasOwnProperty("name"))
                                writer.uint32(/* id 6, wireType 2 =*/50).string(message.name);
                            if (message.unit_seconds != null && message.hasOwnProperty("unit_seconds"))
                                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.unit_seconds);
                            if (message.languages != null && message.hasOwnProperty("languages"))
                                for (var keys = Object.keys(message.languages), i = 0; i < keys.length; ++i)
                                    writer.uint32(/* id 9, wireType 2 =*/74).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.languages[keys[i]]).ldelim();
                            if (message.description != null && message.hasOwnProperty("description"))
                                writer.uint32(/* id 10, wireType 2 =*/82).string(message.description);
                            if (message.icon != null && message.hasOwnProperty("icon"))
                                $root.net.ihago.money.api.globalmetadata.Resource.encode(message.icon, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
                            if (message.h5_icon != null && message.hasOwnProperty("h5_icon"))
                                $root.net.ihago.money.api.globalmetadata.Resource.encode(message.h5_icon, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
                            if (message.create_time != null && message.hasOwnProperty("create_time"))
                                writer.uint32(/* id 14, wireType 0 =*/112).int64(message.create_time);
                            if (message.update_time != null && message.hasOwnProperty("update_time"))
                                writer.uint32(/* id 15, wireType 0 =*/120).int64(message.update_time);
                            if (message.operator != null && message.hasOwnProperty("operator"))
                                writer.uint32(/* id 16, wireType 2 =*/130).string(message.operator);
                            if (message.creator != null && message.hasOwnProperty("creator"))
                                writer.uint32(/* id 17, wireType 2 =*/138).string(message.creator);
                            if (message.tab_id != null && message.hasOwnProperty("tab_id"))
                                writer.uint32(/* id 18, wireType 0 =*/144).int64(message.tab_id);
                            if (message.unit_value != null && message.hasOwnProperty("unit_value"))
                                writer.uint32(/* id 19, wireType 0 =*/152).int64(message.unit_value);
                            if (message.resource != null && message.hasOwnProperty("resource"))
                                $root.net.ihago.money.api.globalmetadata.Resource.encode(message.resource, writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();
                            if (message.commodity_extend != null && message.hasOwnProperty("commodity_extend"))
                                $root.net.ihago.money.api.globalmetadata.CommodityExtend.encode(message.commodity_extend, writer.uint32(/* id 22, wireType 2 =*/178).fork()).ldelim();
                            if (message.version != null && message.hasOwnProperty("version"))
                                writer.uint32(/* id 23, wireType 0 =*/184).int64(message.version);
                            if (message.descriptions != null && message.hasOwnProperty("descriptions"))
                                for (var keys = Object.keys(message.descriptions), i = 0; i < keys.length; ++i)
                                    writer.uint32(/* id 26, wireType 2 =*/210).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.descriptions[keys[i]]).ldelim();
                            return writer;
                        };

                        /**
                         * Decodes a Commodity message from the specified reader or buffer.
                         * @function decode
                         * @memberof net.ihago.money.api.globalmetadata.Commodity
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {net.ihago.money.api.globalmetadata.Commodity} Commodity
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Commodity.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.net.ihago.money.api.globalmetadata.Commodity(), key;
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 2:
                                    message.commodity_id = reader.int64();
                                    break;
                                case 3:
                                    message.commodity_type = reader.int32();
                                    break;
                                case 4:
                                    message.value = reader.int64();
                                    break;
                                case 5:
                                    message.adj_value = reader.int64();
                                    break;
                                case 6:
                                    message.name = reader.string();
                                    break;
                                case 7:
                                    message.unit_seconds = reader.int64();
                                    break;
                                case 9:
                                    reader.skip().pos++;
                                    if (message.languages === $util.emptyObject)
                                        message.languages = {};
                                    key = reader.string();
                                    reader.pos++;
                                    message.languages[key] = reader.string();
                                    break;
                                case 10:
                                    message.description = reader.string();
                                    break;
                                case 11:
                                    message.icon = $root.net.ihago.money.api.globalmetadata.Resource.decode(reader, reader.uint32());
                                    break;
                                case 12:
                                    message.h5_icon = $root.net.ihago.money.api.globalmetadata.Resource.decode(reader, reader.uint32());
                                    break;
                                case 14:
                                    message.create_time = reader.int64();
                                    break;
                                case 15:
                                    message.update_time = reader.int64();
                                    break;
                                case 16:
                                    message.operator = reader.string();
                                    break;
                                case 17:
                                    message.creator = reader.string();
                                    break;
                                case 18:
                                    message.tab_id = reader.int64();
                                    break;
                                case 19:
                                    message.unit_value = reader.int64();
                                    break;
                                case 21:
                                    message.resource = $root.net.ihago.money.api.globalmetadata.Resource.decode(reader, reader.uint32());
                                    break;
                                case 22:
                                    message.commodity_extend = $root.net.ihago.money.api.globalmetadata.CommodityExtend.decode(reader, reader.uint32());
                                    break;
                                case 23:
                                    message.version = reader.int64();
                                    break;
                                case 26:
                                    reader.skip().pos++;
                                    if (message.descriptions === $util.emptyObject)
                                        message.descriptions = {};
                                    key = reader.string();
                                    reader.pos++;
                                    message.descriptions[key] = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        return Commodity;
                    })();

                    return globalmetadata;
                })();

                api.metadata = (function() {

                    /**
                     * Namespace metadata.
                     * @memberof net.ihago.money.api
                     * @namespace
                     */
                    var metadata = {};

                    metadata.CommodityApi = (function() {

                        /**
                         * Constructs a new CommodityApi service.
                         * @memberof net.ihago.money.api.metadata
                         * @classdesc Represents a CommodityApi
                         * @extends $protobuf.rpc.Service
                         * @constructor
                         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                         */
                        function CommodityApi(rpcImpl, requestDelimited, responseDelimited) {
                            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                        }

                        (CommodityApi.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = CommodityApi;

                        /**
                         * Creates new CommodityApi service using the specified rpc implementation.
                         * @function create
                         * @memberof net.ihago.money.api.metadata.CommodityApi
                         * @static
                         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                         * @returns {CommodityApi} RPC service. Useful where requests and/or responses are streamed.
                         */
                        CommodityApi.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                            return new this(rpcImpl, requestDelimited, responseDelimited);
                        };

                        /**
                         * Callback as used by {@link net.ihago.money.api.metadata.CommodityApi#batchGetCommodities}.
                         * @memberof net.ihago.money.api.metadata.CommodityApi
                         * @typedef BatchGetCommoditiesCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {net.ihago.money.api.metadata.BatchGetCommoditiesRes} [response] BatchGetCommoditiesRes
                         */

                        /**
                         * Calls BatchGetCommodities.
                         * @function batchGetCommodities
                         * @memberof net.ihago.money.api.metadata.CommodityApi
                         * @instance
                         * @param {net.ihago.money.api.metadata.IBatchGetCommoditiesReq} request BatchGetCommoditiesReq message or plain object
                         * @param {net.ihago.money.api.metadata.CommodityApi.BatchGetCommoditiesCallback} callback Node-style callback called with the error, if any, and BatchGetCommoditiesRes
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(CommodityApi.prototype.batchGetCommodities = function batchGetCommodities(request, callback) {
                            return this.rpcCall(batchGetCommodities, $root.net.ihago.money.api.metadata.BatchGetCommoditiesReq, $root.net.ihago.money.api.metadata.BatchGetCommoditiesRes, request, callback);
                        }, "name", { value: "BatchGetCommodities" });

                        /**
                         * Calls BatchGetCommodities.
                         * @function batchGetCommodities
                         * @memberof net.ihago.money.api.metadata.CommodityApi
                         * @instance
                         * @param {net.ihago.money.api.metadata.IBatchGetCommoditiesReq} request BatchGetCommoditiesReq message or plain object
                         * @returns {Promise<net.ihago.money.api.metadata.BatchGetCommoditiesRes>} Promise
                         * @variation 2
                         */

                        /**
                         * Callback as used by {@link net.ihago.money.api.metadata.CommodityApi#getCommodity}.
                         * @memberof net.ihago.money.api.metadata.CommodityApi
                         * @typedef GetCommodityCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {net.ihago.money.api.metadata.GetCommodityRes} [response] GetCommodityRes
                         */

                        /**
                         * Calls GetCommodity.
                         * @function getCommodity
                         * @memberof net.ihago.money.api.metadata.CommodityApi
                         * @instance
                         * @param {net.ihago.money.api.metadata.IGetCommodityReq} request GetCommodityReq message or plain object
                         * @param {net.ihago.money.api.metadata.CommodityApi.GetCommodityCallback} callback Node-style callback called with the error, if any, and GetCommodityRes
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(CommodityApi.prototype.getCommodity = function getCommodity(request, callback) {
                            return this.rpcCall(getCommodity, $root.net.ihago.money.api.metadata.GetCommodityReq, $root.net.ihago.money.api.metadata.GetCommodityRes, request, callback);
                        }, "name", { value: "GetCommodity" });

                        /**
                         * Calls GetCommodity.
                         * @function getCommodity
                         * @memberof net.ihago.money.api.metadata.CommodityApi
                         * @instance
                         * @param {net.ihago.money.api.metadata.IGetCommodityReq} request GetCommodityReq message or plain object
                         * @returns {Promise<net.ihago.money.api.metadata.GetCommodityRes>} Promise
                         * @variation 2
                         */

                        return CommodityApi;
                    })();

                    metadata.CommoditySpecified = (function() {

                        /**
                         * Properties of a CommoditySpecified.
                         * @memberof net.ihago.money.api.metadata
                         * @interface ICommoditySpecified
                         * @property {commodity.CommodityType|null} [commodity_type] CommoditySpecified commodity_type
                         * @property {number|null} [commodity_id] CommoditySpecified commodity_id
                         * @property {number|null} [version] CommoditySpecified version
                         */

                        /**
                         * Constructs a new CommoditySpecified.
                         * @memberof net.ihago.money.api.metadata
                         * @classdesc Represents a CommoditySpecified.
                         * @implements ICommoditySpecified
                         * @constructor
                         * @param {net.ihago.money.api.metadata.ICommoditySpecified=} [properties] Properties to set
                         */
                        function CommoditySpecified(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * CommoditySpecified commodity_type.
                         * @member {commodity.CommodityType} commodity_type
                         * @memberof net.ihago.money.api.metadata.CommoditySpecified
                         * @instance
                         */
                        CommoditySpecified.prototype.commodity_type = 0;

                        /**
                         * CommoditySpecified commodity_id.
                         * @member {number} commodity_id
                         * @memberof net.ihago.money.api.metadata.CommoditySpecified
                         * @instance
                         */
                        CommoditySpecified.prototype.commodity_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * CommoditySpecified version.
                         * @member {number} version
                         * @memberof net.ihago.money.api.metadata.CommoditySpecified
                         * @instance
                         */
                        CommoditySpecified.prototype.version = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * Creates a new CommoditySpecified instance using the specified properties.
                         * @function create
                         * @memberof net.ihago.money.api.metadata.CommoditySpecified
                         * @static
                         * @param {net.ihago.money.api.metadata.ICommoditySpecified=} [properties] Properties to set
                         * @returns {net.ihago.money.api.metadata.CommoditySpecified} CommoditySpecified instance
                         */
                        CommoditySpecified.create = function create(properties) {
                            return new CommoditySpecified(properties);
                        };

                        /**
                         * Encodes the specified CommoditySpecified message. Does not implicitly {@link net.ihago.money.api.metadata.CommoditySpecified.verify|verify} messages.
                         * @function encode
                         * @memberof net.ihago.money.api.metadata.CommoditySpecified
                         * @static
                         * @param {net.ihago.money.api.metadata.ICommoditySpecified} message CommoditySpecified message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        CommoditySpecified.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.commodity_type != null && message.hasOwnProperty("commodity_type"))
                                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.commodity_type);
                            if (message.commodity_id != null && message.hasOwnProperty("commodity_id"))
                                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.commodity_id);
                            if (message.version != null && message.hasOwnProperty("version"))
                                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.version);
                            return writer;
                        };

                        /**
                         * Decodes a CommoditySpecified message from the specified reader or buffer.
                         * @function decode
                         * @memberof net.ihago.money.api.metadata.CommoditySpecified
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {net.ihago.money.api.metadata.CommoditySpecified} CommoditySpecified
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        CommoditySpecified.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.net.ihago.money.api.metadata.CommoditySpecified();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.commodity_type = reader.int32();
                                    break;
                                case 2:
                                    message.commodity_id = reader.int64();
                                    break;
                                case 3:
                                    message.version = reader.int64();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        return CommoditySpecified;
                    })();

                    metadata.CommodityFilter = (function() {

                        /**
                         * Properties of a CommodityFilter.
                         * @memberof net.ihago.money.api.metadata
                         * @interface ICommodityFilter
                         * @property {string|null} [language] CommodityFilter language
                         */

                        /**
                         * Constructs a new CommodityFilter.
                         * @memberof net.ihago.money.api.metadata
                         * @classdesc Represents a CommodityFilter.
                         * @implements ICommodityFilter
                         * @constructor
                         * @param {net.ihago.money.api.metadata.ICommodityFilter=} [properties] Properties to set
                         */
                        function CommodityFilter(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * CommodityFilter language.
                         * @member {string} language
                         * @memberof net.ihago.money.api.metadata.CommodityFilter
                         * @instance
                         */
                        CommodityFilter.prototype.language = "";

                        /**
                         * Creates a new CommodityFilter instance using the specified properties.
                         * @function create
                         * @memberof net.ihago.money.api.metadata.CommodityFilter
                         * @static
                         * @param {net.ihago.money.api.metadata.ICommodityFilter=} [properties] Properties to set
                         * @returns {net.ihago.money.api.metadata.CommodityFilter} CommodityFilter instance
                         */
                        CommodityFilter.create = function create(properties) {
                            return new CommodityFilter(properties);
                        };

                        /**
                         * Encodes the specified CommodityFilter message. Does not implicitly {@link net.ihago.money.api.metadata.CommodityFilter.verify|verify} messages.
                         * @function encode
                         * @memberof net.ihago.money.api.metadata.CommodityFilter
                         * @static
                         * @param {net.ihago.money.api.metadata.ICommodityFilter} message CommodityFilter message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        CommodityFilter.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.language != null && message.hasOwnProperty("language"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.language);
                            return writer;
                        };

                        /**
                         * Decodes a CommodityFilter message from the specified reader or buffer.
                         * @function decode
                         * @memberof net.ihago.money.api.metadata.CommodityFilter
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {net.ihago.money.api.metadata.CommodityFilter} CommodityFilter
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        CommodityFilter.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.net.ihago.money.api.metadata.CommodityFilter();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.language = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        return CommodityFilter;
                    })();

                    metadata.BatchGetCommoditiesReq = (function() {

                        /**
                         * Properties of a BatchGetCommoditiesReq.
                         * @memberof net.ihago.money.api.metadata
                         * @interface IBatchGetCommoditiesReq
                         * @property {Array.<net.ihago.money.api.metadata.ICommoditySpecified>|null} [commodities] BatchGetCommoditiesReq commodities
                         * @property {net.ihago.money.api.metadata.ICommodityFilter|null} [filter] BatchGetCommoditiesReq filter
                         * @property {boolean|null} [is_simplify] BatchGetCommoditiesReq is_simplify
                         * @property {boolean|null} [use_extend] BatchGetCommoditiesReq use_extend
                         */

                        /**
                         * Constructs a new BatchGetCommoditiesReq.
                         * @memberof net.ihago.money.api.metadata
                         * @classdesc Represents a BatchGetCommoditiesReq.
                         * @implements IBatchGetCommoditiesReq
                         * @constructor
                         * @param {net.ihago.money.api.metadata.IBatchGetCommoditiesReq=} [properties] Properties to set
                         */
                        function BatchGetCommoditiesReq(properties) {
                            this.commodities = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * BatchGetCommoditiesReq commodities.
                         * @member {Array.<net.ihago.money.api.metadata.ICommoditySpecified>} commodities
                         * @memberof net.ihago.money.api.metadata.BatchGetCommoditiesReq
                         * @instance
                         */
                        BatchGetCommoditiesReq.prototype.commodities = $util.emptyArray;

                        /**
                         * BatchGetCommoditiesReq filter.
                         * @member {net.ihago.money.api.metadata.ICommodityFilter|null|undefined} filter
                         * @memberof net.ihago.money.api.metadata.BatchGetCommoditiesReq
                         * @instance
                         */
                        BatchGetCommoditiesReq.prototype.filter = null;

                        /**
                         * BatchGetCommoditiesReq is_simplify.
                         * @member {boolean} is_simplify
                         * @memberof net.ihago.money.api.metadata.BatchGetCommoditiesReq
                         * @instance
                         */
                        BatchGetCommoditiesReq.prototype.is_simplify = false;

                        /**
                         * BatchGetCommoditiesReq use_extend.
                         * @member {boolean} use_extend
                         * @memberof net.ihago.money.api.metadata.BatchGetCommoditiesReq
                         * @instance
                         */
                        BatchGetCommoditiesReq.prototype.use_extend = false;

                        /**
                         * Creates a new BatchGetCommoditiesReq instance using the specified properties.
                         * @function create
                         * @memberof net.ihago.money.api.metadata.BatchGetCommoditiesReq
                         * @static
                         * @param {net.ihago.money.api.metadata.IBatchGetCommoditiesReq=} [properties] Properties to set
                         * @returns {net.ihago.money.api.metadata.BatchGetCommoditiesReq} BatchGetCommoditiesReq instance
                         */
                        BatchGetCommoditiesReq.create = function create(properties) {
                            return new BatchGetCommoditiesReq(properties);
                        };

                        /**
                         * Encodes the specified BatchGetCommoditiesReq message. Does not implicitly {@link net.ihago.money.api.metadata.BatchGetCommoditiesReq.verify|verify} messages.
                         * @function encode
                         * @memberof net.ihago.money.api.metadata.BatchGetCommoditiesReq
                         * @static
                         * @param {net.ihago.money.api.metadata.IBatchGetCommoditiesReq} message BatchGetCommoditiesReq message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        BatchGetCommoditiesReq.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.commodities != null && message.commodities.length)
                                for (var i = 0; i < message.commodities.length; ++i)
                                    $root.net.ihago.money.api.metadata.CommoditySpecified.encode(message.commodities[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.filter != null && message.hasOwnProperty("filter"))
                                $root.net.ihago.money.api.metadata.CommodityFilter.encode(message.filter, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                            if (message.is_simplify != null && message.hasOwnProperty("is_simplify"))
                                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.is_simplify);
                            if (message.use_extend != null && message.hasOwnProperty("use_extend"))
                                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.use_extend);
                            return writer;
                        };

                        /**
                         * Decodes a BatchGetCommoditiesReq message from the specified reader or buffer.
                         * @function decode
                         * @memberof net.ihago.money.api.metadata.BatchGetCommoditiesReq
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {net.ihago.money.api.metadata.BatchGetCommoditiesReq} BatchGetCommoditiesReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        BatchGetCommoditiesReq.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.net.ihago.money.api.metadata.BatchGetCommoditiesReq();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    if (!(message.commodities && message.commodities.length))
                                        message.commodities = [];
                                    message.commodities.push($root.net.ihago.money.api.metadata.CommoditySpecified.decode(reader, reader.uint32()));
                                    break;
                                case 2:
                                    message.filter = $root.net.ihago.money.api.metadata.CommodityFilter.decode(reader, reader.uint32());
                                    break;
                                case 3:
                                    message.is_simplify = reader.bool();
                                    break;
                                case 4:
                                    message.use_extend = reader.bool();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        return BatchGetCommoditiesReq;
                    })();

                    metadata.BatchGetCommoditiesRes = (function() {

                        /**
                         * Properties of a BatchGetCommoditiesRes.
                         * @memberof net.ihago.money.api.metadata
                         * @interface IBatchGetCommoditiesRes
                         * @property {common.IResult|null} [result] BatchGetCommoditiesRes result
                         * @property {Array.<net.ihago.money.api.globalmetadata.ICommodity>|null} [commodities] BatchGetCommoditiesRes commodities
                         * @property {Array.<net.ihago.money.api.metadata.ICommoditySpecified>|null} [cached_commodities] BatchGetCommoditiesRes cached_commodities
                         */

                        /**
                         * Constructs a new BatchGetCommoditiesRes.
                         * @memberof net.ihago.money.api.metadata
                         * @classdesc Represents a BatchGetCommoditiesRes.
                         * @implements IBatchGetCommoditiesRes
                         * @constructor
                         * @param {net.ihago.money.api.metadata.IBatchGetCommoditiesRes=} [properties] Properties to set
                         */
                        function BatchGetCommoditiesRes(properties) {
                            this.commodities = [];
                            this.cached_commodities = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * BatchGetCommoditiesRes result.
                         * @member {common.IResult|null|undefined} result
                         * @memberof net.ihago.money.api.metadata.BatchGetCommoditiesRes
                         * @instance
                         */
                        BatchGetCommoditiesRes.prototype.result = null;

                        /**
                         * BatchGetCommoditiesRes commodities.
                         * @member {Array.<net.ihago.money.api.globalmetadata.ICommodity>} commodities
                         * @memberof net.ihago.money.api.metadata.BatchGetCommoditiesRes
                         * @instance
                         */
                        BatchGetCommoditiesRes.prototype.commodities = $util.emptyArray;

                        /**
                         * BatchGetCommoditiesRes cached_commodities.
                         * @member {Array.<net.ihago.money.api.metadata.ICommoditySpecified>} cached_commodities
                         * @memberof net.ihago.money.api.metadata.BatchGetCommoditiesRes
                         * @instance
                         */
                        BatchGetCommoditiesRes.prototype.cached_commodities = $util.emptyArray;

                        /**
                         * Creates a new BatchGetCommoditiesRes instance using the specified properties.
                         * @function create
                         * @memberof net.ihago.money.api.metadata.BatchGetCommoditiesRes
                         * @static
                         * @param {net.ihago.money.api.metadata.IBatchGetCommoditiesRes=} [properties] Properties to set
                         * @returns {net.ihago.money.api.metadata.BatchGetCommoditiesRes} BatchGetCommoditiesRes instance
                         */
                        BatchGetCommoditiesRes.create = function create(properties) {
                            return new BatchGetCommoditiesRes(properties);
                        };

                        /**
                         * Encodes the specified BatchGetCommoditiesRes message. Does not implicitly {@link net.ihago.money.api.metadata.BatchGetCommoditiesRes.verify|verify} messages.
                         * @function encode
                         * @memberof net.ihago.money.api.metadata.BatchGetCommoditiesRes
                         * @static
                         * @param {net.ihago.money.api.metadata.IBatchGetCommoditiesRes} message BatchGetCommoditiesRes message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        BatchGetCommoditiesRes.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.result != null && message.hasOwnProperty("result"))
                                $root.common.Result.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.commodities != null && message.commodities.length)
                                for (var i = 0; i < message.commodities.length; ++i)
                                    $root.net.ihago.money.api.globalmetadata.Commodity.encode(message.commodities[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
                            if (message.cached_commodities != null && message.cached_commodities.length)
                                for (var i = 0; i < message.cached_commodities.length; ++i)
                                    $root.net.ihago.money.api.metadata.CommoditySpecified.encode(message.cached_commodities[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
                            return writer;
                        };

                        /**
                         * Decodes a BatchGetCommoditiesRes message from the specified reader or buffer.
                         * @function decode
                         * @memberof net.ihago.money.api.metadata.BatchGetCommoditiesRes
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {net.ihago.money.api.metadata.BatchGetCommoditiesRes} BatchGetCommoditiesRes
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        BatchGetCommoditiesRes.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.net.ihago.money.api.metadata.BatchGetCommoditiesRes();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.result = $root.common.Result.decode(reader, reader.uint32());
                                    break;
                                case 10:
                                    if (!(message.commodities && message.commodities.length))
                                        message.commodities = [];
                                    message.commodities.push($root.net.ihago.money.api.globalmetadata.Commodity.decode(reader, reader.uint32()));
                                    break;
                                case 11:
                                    if (!(message.cached_commodities && message.cached_commodities.length))
                                        message.cached_commodities = [];
                                    message.cached_commodities.push($root.net.ihago.money.api.metadata.CommoditySpecified.decode(reader, reader.uint32()));
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        return BatchGetCommoditiesRes;
                    })();

                    metadata.BatchGetCommoditySimplifyInfoReq = (function() {

                        /**
                         * Properties of a BatchGetCommoditySimplifyInfoReq.
                         * @memberof net.ihago.money.api.metadata
                         * @interface IBatchGetCommoditySimplifyInfoReq
                         * @property {Array.<net.ihago.money.api.metadata.ICommoditySpecified>|null} [commodities] BatchGetCommoditySimplifyInfoReq commodities
                         * @property {net.ihago.money.api.metadata.ICommodityFilter|null} [filter] BatchGetCommoditySimplifyInfoReq filter
                         * @property {boolean|null} [use_extend] BatchGetCommoditySimplifyInfoReq use_extend
                         */

                        /**
                         * Constructs a new BatchGetCommoditySimplifyInfoReq.
                         * @memberof net.ihago.money.api.metadata
                         * @classdesc Represents a BatchGetCommoditySimplifyInfoReq.
                         * @implements IBatchGetCommoditySimplifyInfoReq
                         * @constructor
                         * @param {net.ihago.money.api.metadata.IBatchGetCommoditySimplifyInfoReq=} [properties] Properties to set
                         */
                        function BatchGetCommoditySimplifyInfoReq(properties) {
                            this.commodities = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * BatchGetCommoditySimplifyInfoReq commodities.
                         * @member {Array.<net.ihago.money.api.metadata.ICommoditySpecified>} commodities
                         * @memberof net.ihago.money.api.metadata.BatchGetCommoditySimplifyInfoReq
                         * @instance
                         */
                        BatchGetCommoditySimplifyInfoReq.prototype.commodities = $util.emptyArray;

                        /**
                         * BatchGetCommoditySimplifyInfoReq filter.
                         * @member {net.ihago.money.api.metadata.ICommodityFilter|null|undefined} filter
                         * @memberof net.ihago.money.api.metadata.BatchGetCommoditySimplifyInfoReq
                         * @instance
                         */
                        BatchGetCommoditySimplifyInfoReq.prototype.filter = null;

                        /**
                         * BatchGetCommoditySimplifyInfoReq use_extend.
                         * @member {boolean} use_extend
                         * @memberof net.ihago.money.api.metadata.BatchGetCommoditySimplifyInfoReq
                         * @instance
                         */
                        BatchGetCommoditySimplifyInfoReq.prototype.use_extend = false;

                        /**
                         * Creates a new BatchGetCommoditySimplifyInfoReq instance using the specified properties.
                         * @function create
                         * @memberof net.ihago.money.api.metadata.BatchGetCommoditySimplifyInfoReq
                         * @static
                         * @param {net.ihago.money.api.metadata.IBatchGetCommoditySimplifyInfoReq=} [properties] Properties to set
                         * @returns {net.ihago.money.api.metadata.BatchGetCommoditySimplifyInfoReq} BatchGetCommoditySimplifyInfoReq instance
                         */
                        BatchGetCommoditySimplifyInfoReq.create = function create(properties) {
                            return new BatchGetCommoditySimplifyInfoReq(properties);
                        };

                        /**
                         * Encodes the specified BatchGetCommoditySimplifyInfoReq message. Does not implicitly {@link net.ihago.money.api.metadata.BatchGetCommoditySimplifyInfoReq.verify|verify} messages.
                         * @function encode
                         * @memberof net.ihago.money.api.metadata.BatchGetCommoditySimplifyInfoReq
                         * @static
                         * @param {net.ihago.money.api.metadata.IBatchGetCommoditySimplifyInfoReq} message BatchGetCommoditySimplifyInfoReq message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        BatchGetCommoditySimplifyInfoReq.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.commodities != null && message.commodities.length)
                                for (var i = 0; i < message.commodities.length; ++i)
                                    $root.net.ihago.money.api.metadata.CommoditySpecified.encode(message.commodities[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.filter != null && message.hasOwnProperty("filter"))
                                $root.net.ihago.money.api.metadata.CommodityFilter.encode(message.filter, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                            if (message.use_extend != null && message.hasOwnProperty("use_extend"))
                                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.use_extend);
                            return writer;
                        };

                        /**
                         * Decodes a BatchGetCommoditySimplifyInfoReq message from the specified reader or buffer.
                         * @function decode
                         * @memberof net.ihago.money.api.metadata.BatchGetCommoditySimplifyInfoReq
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {net.ihago.money.api.metadata.BatchGetCommoditySimplifyInfoReq} BatchGetCommoditySimplifyInfoReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        BatchGetCommoditySimplifyInfoReq.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.net.ihago.money.api.metadata.BatchGetCommoditySimplifyInfoReq();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    if (!(message.commodities && message.commodities.length))
                                        message.commodities = [];
                                    message.commodities.push($root.net.ihago.money.api.metadata.CommoditySpecified.decode(reader, reader.uint32()));
                                    break;
                                case 2:
                                    message.filter = $root.net.ihago.money.api.metadata.CommodityFilter.decode(reader, reader.uint32());
                                    break;
                                case 3:
                                    message.use_extend = reader.bool();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        return BatchGetCommoditySimplifyInfoReq;
                    })();

                    metadata.GetCommodityReq = (function() {

                        /**
                         * Properties of a GetCommodityReq.
                         * @memberof net.ihago.money.api.metadata
                         * @interface IGetCommodityReq
                         * @property {commodity.CommodityType|null} [commodity_type] GetCommodityReq commodity_type
                         * @property {number|null} [commodity_id] GetCommodityReq commodity_id
                         * @property {net.ihago.money.api.metadata.ICommodityFilter|null} [filter] GetCommodityReq filter
                         */

                        /**
                         * Constructs a new GetCommodityReq.
                         * @memberof net.ihago.money.api.metadata
                         * @classdesc Represents a GetCommodityReq.
                         * @implements IGetCommodityReq
                         * @constructor
                         * @param {net.ihago.money.api.metadata.IGetCommodityReq=} [properties] Properties to set
                         */
                        function GetCommodityReq(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * GetCommodityReq commodity_type.
                         * @member {commodity.CommodityType} commodity_type
                         * @memberof net.ihago.money.api.metadata.GetCommodityReq
                         * @instance
                         */
                        GetCommodityReq.prototype.commodity_type = 0;

                        /**
                         * GetCommodityReq commodity_id.
                         * @member {number} commodity_id
                         * @memberof net.ihago.money.api.metadata.GetCommodityReq
                         * @instance
                         */
                        GetCommodityReq.prototype.commodity_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * GetCommodityReq filter.
                         * @member {net.ihago.money.api.metadata.ICommodityFilter|null|undefined} filter
                         * @memberof net.ihago.money.api.metadata.GetCommodityReq
                         * @instance
                         */
                        GetCommodityReq.prototype.filter = null;

                        /**
                         * Creates a new GetCommodityReq instance using the specified properties.
                         * @function create
                         * @memberof net.ihago.money.api.metadata.GetCommodityReq
                         * @static
                         * @param {net.ihago.money.api.metadata.IGetCommodityReq=} [properties] Properties to set
                         * @returns {net.ihago.money.api.metadata.GetCommodityReq} GetCommodityReq instance
                         */
                        GetCommodityReq.create = function create(properties) {
                            return new GetCommodityReq(properties);
                        };

                        /**
                         * Encodes the specified GetCommodityReq message. Does not implicitly {@link net.ihago.money.api.metadata.GetCommodityReq.verify|verify} messages.
                         * @function encode
                         * @memberof net.ihago.money.api.metadata.GetCommodityReq
                         * @static
                         * @param {net.ihago.money.api.metadata.IGetCommodityReq} message GetCommodityReq message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        GetCommodityReq.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.commodity_type != null && message.hasOwnProperty("commodity_type"))
                                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.commodity_type);
                            if (message.commodity_id != null && message.hasOwnProperty("commodity_id"))
                                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.commodity_id);
                            if (message.filter != null && message.hasOwnProperty("filter"))
                                $root.net.ihago.money.api.metadata.CommodityFilter.encode(message.filter, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                            return writer;
                        };

                        /**
                         * Decodes a GetCommodityReq message from the specified reader or buffer.
                         * @function decode
                         * @memberof net.ihago.money.api.metadata.GetCommodityReq
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {net.ihago.money.api.metadata.GetCommodityReq} GetCommodityReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        GetCommodityReq.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.net.ihago.money.api.metadata.GetCommodityReq();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.commodity_type = reader.int32();
                                    break;
                                case 2:
                                    message.commodity_id = reader.int64();
                                    break;
                                case 3:
                                    message.filter = $root.net.ihago.money.api.metadata.CommodityFilter.decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        return GetCommodityReq;
                    })();

                    metadata.GetCommodityRes = (function() {

                        /**
                         * Properties of a GetCommodityRes.
                         * @memberof net.ihago.money.api.metadata
                         * @interface IGetCommodityRes
                         * @property {common.IResult|null} [result] GetCommodityRes result
                         * @property {net.ihago.money.api.globalmetadata.ICommodity|null} [commodity] GetCommodityRes commodity
                         */

                        /**
                         * Constructs a new GetCommodityRes.
                         * @memberof net.ihago.money.api.metadata
                         * @classdesc Represents a GetCommodityRes.
                         * @implements IGetCommodityRes
                         * @constructor
                         * @param {net.ihago.money.api.metadata.IGetCommodityRes=} [properties] Properties to set
                         */
                        function GetCommodityRes(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * GetCommodityRes result.
                         * @member {common.IResult|null|undefined} result
                         * @memberof net.ihago.money.api.metadata.GetCommodityRes
                         * @instance
                         */
                        GetCommodityRes.prototype.result = null;

                        /**
                         * GetCommodityRes commodity.
                         * @member {net.ihago.money.api.globalmetadata.ICommodity|null|undefined} commodity
                         * @memberof net.ihago.money.api.metadata.GetCommodityRes
                         * @instance
                         */
                        GetCommodityRes.prototype.commodity = null;

                        /**
                         * Creates a new GetCommodityRes instance using the specified properties.
                         * @function create
                         * @memberof net.ihago.money.api.metadata.GetCommodityRes
                         * @static
                         * @param {net.ihago.money.api.metadata.IGetCommodityRes=} [properties] Properties to set
                         * @returns {net.ihago.money.api.metadata.GetCommodityRes} GetCommodityRes instance
                         */
                        GetCommodityRes.create = function create(properties) {
                            return new GetCommodityRes(properties);
                        };

                        /**
                         * Encodes the specified GetCommodityRes message. Does not implicitly {@link net.ihago.money.api.metadata.GetCommodityRes.verify|verify} messages.
                         * @function encode
                         * @memberof net.ihago.money.api.metadata.GetCommodityRes
                         * @static
                         * @param {net.ihago.money.api.metadata.IGetCommodityRes} message GetCommodityRes message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        GetCommodityRes.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.result != null && message.hasOwnProperty("result"))
                                $root.common.Result.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.commodity != null && message.hasOwnProperty("commodity"))
                                $root.net.ihago.money.api.globalmetadata.Commodity.encode(message.commodity, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
                            return writer;
                        };

                        /**
                         * Decodes a GetCommodityRes message from the specified reader or buffer.
                         * @function decode
                         * @memberof net.ihago.money.api.metadata.GetCommodityRes
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {net.ihago.money.api.metadata.GetCommodityRes} GetCommodityRes
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        GetCommodityRes.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.net.ihago.money.api.metadata.GetCommodityRes();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.result = $root.common.Result.decode(reader, reader.uint32());
                                    break;
                                case 10:
                                    message.commodity = $root.net.ihago.money.api.globalmetadata.Commodity.decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        return GetCommodityRes;
                    })();

                    return metadata;
                })();

                api.gamepointsmall = (function() {

                    /**
                     * Namespace gamepointsmall.
                     * @memberof net.ihago.money.api
                     * @namespace
                     */
                    var gamepointsmall = {};

                    gamepointsmall.Gamepointsmall = (function() {

                        /**
                         * Constructs a new Gamepointsmall service.
                         * @memberof net.ihago.money.api.gamepointsmall
                         * @classdesc Represents a Gamepointsmall
                         * @extends $protobuf.rpc.Service
                         * @constructor
                         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                         */
                        function Gamepointsmall(rpcImpl, requestDelimited, responseDelimited) {
                            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                        }

                        (Gamepointsmall.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Gamepointsmall;

                        /**
                         * Creates new Gamepointsmall service using the specified rpc implementation.
                         * @function create
                         * @memberof net.ihago.money.api.gamepointsmall.Gamepointsmall
                         * @static
                         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                         * @returns {Gamepointsmall} RPC service. Useful where requests and/or responses are streamed.
                         */
                        Gamepointsmall.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                            return new this(rpcImpl, requestDelimited, responseDelimited);
                        };

                        /**
                         * Callback as used by {@link net.ihago.money.api.gamepointsmall.Gamepointsmall#getPoints}.
                         * @memberof net.ihago.money.api.gamepointsmall.Gamepointsmall
                         * @typedef GetPointsCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {net.ihago.money.api.gamepointsmall.GetPointsRes} [response] GetPointsRes
                         */

                        /**
                         * Calls GetPoints.
                         * @function getPoints
                         * @memberof net.ihago.money.api.gamepointsmall.Gamepointsmall
                         * @instance
                         * @param {net.ihago.money.api.gamepointsmall.IGetPointsReq} request GetPointsReq message or plain object
                         * @param {net.ihago.money.api.gamepointsmall.Gamepointsmall.GetPointsCallback} callback Node-style callback called with the error, if any, and GetPointsRes
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(Gamepointsmall.prototype.getPoints = function getPoints(request, callback) {
                            return this.rpcCall(getPoints, $root.net.ihago.money.api.gamepointsmall.GetPointsReq, $root.net.ihago.money.api.gamepointsmall.GetPointsRes, request, callback);
                        }, "name", { value: "GetPoints" });

                        /**
                         * Calls GetPoints.
                         * @function getPoints
                         * @memberof net.ihago.money.api.gamepointsmall.Gamepointsmall
                         * @instance
                         * @param {net.ihago.money.api.gamepointsmall.IGetPointsReq} request GetPointsReq message or plain object
                         * @returns {Promise<net.ihago.money.api.gamepointsmall.GetPointsRes>} Promise
                         * @variation 2
                         */

                        return Gamepointsmall;
                    })();

                    /**
                     * ECode enum.
                     * @name net.ihago.money.api.gamepointsmall.ECode
                     * @enum {string}
                     * @property {number} OK=0 OK value
                     * @property {number} SRV_ERR=1000 SRV_ERR value
                     * @property {number} PARAM_ERR=1001 PARAM_ERR value
                     * @property {number} UNAUTHORIZED=1002 UNAUTHORIZED value
                     * @property {number} FORBIDDEN=1003 FORBIDDEN value
                     * @property {number} FREQUENTLY=1004 FREQUENTLY value
                     * @property {number} INVALID_USER=1005 INVALID_USER value
                     * @property {number} NOT_IN_ACT_TIME=2000 NOT_IN_ACT_TIME value
                     * @property {number} EXCHANGE_NUM_NOT_ENOUGH=2005 EXCHANGE_NUM_NOT_ENOUGH value
                     */
                    gamepointsmall.ECode = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "OK"] = 0;
                        values[valuesById[1000] = "SRV_ERR"] = 1000;
                        values[valuesById[1001] = "PARAM_ERR"] = 1001;
                        values[valuesById[1002] = "UNAUTHORIZED"] = 1002;
                        values[valuesById[1003] = "FORBIDDEN"] = 1003;
                        values[valuesById[1004] = "FREQUENTLY"] = 1004;
                        values[valuesById[1005] = "INVALID_USER"] = 1005;
                        values[valuesById[2000] = "NOT_IN_ACT_TIME"] = 2000;
                        values[valuesById[2005] = "EXCHANGE_NUM_NOT_ENOUGH"] = 2005;
                        return values;
                    })();

                    gamepointsmall.GetPointsReq = (function() {

                        /**
                         * Properties of a GetPointsReq.
                         * @memberof net.ihago.money.api.gamepointsmall
                         * @interface IGetPointsReq
                         */

                        /**
                         * Constructs a new GetPointsReq.
                         * @memberof net.ihago.money.api.gamepointsmall
                         * @classdesc Represents a GetPointsReq.
                         * @implements IGetPointsReq
                         * @constructor
                         * @param {net.ihago.money.api.gamepointsmall.IGetPointsReq=} [properties] Properties to set
                         */
                        function GetPointsReq(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Creates a new GetPointsReq instance using the specified properties.
                         * @function create
                         * @memberof net.ihago.money.api.gamepointsmall.GetPointsReq
                         * @static
                         * @param {net.ihago.money.api.gamepointsmall.IGetPointsReq=} [properties] Properties to set
                         * @returns {net.ihago.money.api.gamepointsmall.GetPointsReq} GetPointsReq instance
                         */
                        GetPointsReq.create = function create(properties) {
                            return new GetPointsReq(properties);
                        };

                        /**
                         * Encodes the specified GetPointsReq message. Does not implicitly {@link net.ihago.money.api.gamepointsmall.GetPointsReq.verify|verify} messages.
                         * @function encode
                         * @memberof net.ihago.money.api.gamepointsmall.GetPointsReq
                         * @static
                         * @param {net.ihago.money.api.gamepointsmall.IGetPointsReq} message GetPointsReq message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        GetPointsReq.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            return writer;
                        };

                        /**
                         * Decodes a GetPointsReq message from the specified reader or buffer.
                         * @function decode
                         * @memberof net.ihago.money.api.gamepointsmall.GetPointsReq
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {net.ihago.money.api.gamepointsmall.GetPointsReq} GetPointsReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        GetPointsReq.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.net.ihago.money.api.gamepointsmall.GetPointsReq();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        return GetPointsReq;
                    })();

                    gamepointsmall.GetPointsRes = (function() {

                        /**
                         * Properties of a GetPointsRes.
                         * @memberof net.ihago.money.api.gamepointsmall
                         * @interface IGetPointsRes
                         * @property {common.IResult|null} [result] GetPointsRes result
                         * @property {number|null} [points] GetPointsRes points
                         * @property {number|null} [expire_time] GetPointsRes expire_time
                         * @property {boolean|null} [is_show] GetPointsRes is_show
                         */

                        /**
                         * Constructs a new GetPointsRes.
                         * @memberof net.ihago.money.api.gamepointsmall
                         * @classdesc Represents a GetPointsRes.
                         * @implements IGetPointsRes
                         * @constructor
                         * @param {net.ihago.money.api.gamepointsmall.IGetPointsRes=} [properties] Properties to set
                         */
                        function GetPointsRes(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * GetPointsRes result.
                         * @member {common.IResult|null|undefined} result
                         * @memberof net.ihago.money.api.gamepointsmall.GetPointsRes
                         * @instance
                         */
                        GetPointsRes.prototype.result = null;

                        /**
                         * GetPointsRes points.
                         * @member {number} points
                         * @memberof net.ihago.money.api.gamepointsmall.GetPointsRes
                         * @instance
                         */
                        GetPointsRes.prototype.points = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * GetPointsRes expire_time.
                         * @member {number} expire_time
                         * @memberof net.ihago.money.api.gamepointsmall.GetPointsRes
                         * @instance
                         */
                        GetPointsRes.prototype.expire_time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * GetPointsRes is_show.
                         * @member {boolean} is_show
                         * @memberof net.ihago.money.api.gamepointsmall.GetPointsRes
                         * @instance
                         */
                        GetPointsRes.prototype.is_show = false;

                        /**
                         * Creates a new GetPointsRes instance using the specified properties.
                         * @function create
                         * @memberof net.ihago.money.api.gamepointsmall.GetPointsRes
                         * @static
                         * @param {net.ihago.money.api.gamepointsmall.IGetPointsRes=} [properties] Properties to set
                         * @returns {net.ihago.money.api.gamepointsmall.GetPointsRes} GetPointsRes instance
                         */
                        GetPointsRes.create = function create(properties) {
                            return new GetPointsRes(properties);
                        };

                        /**
                         * Encodes the specified GetPointsRes message. Does not implicitly {@link net.ihago.money.api.gamepointsmall.GetPointsRes.verify|verify} messages.
                         * @function encode
                         * @memberof net.ihago.money.api.gamepointsmall.GetPointsRes
                         * @static
                         * @param {net.ihago.money.api.gamepointsmall.IGetPointsRes} message GetPointsRes message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        GetPointsRes.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.result != null && message.hasOwnProperty("result"))
                                $root.common.Result.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.points != null && message.hasOwnProperty("points"))
                                writer.uint32(/* id 10, wireType 0 =*/80).int64(message.points);
                            if (message.expire_time != null && message.hasOwnProperty("expire_time"))
                                writer.uint32(/* id 11, wireType 0 =*/88).int64(message.expire_time);
                            if (message.is_show != null && message.hasOwnProperty("is_show"))
                                writer.uint32(/* id 12, wireType 0 =*/96).bool(message.is_show);
                            return writer;
                        };

                        /**
                         * Decodes a GetPointsRes message from the specified reader or buffer.
                         * @function decode
                         * @memberof net.ihago.money.api.gamepointsmall.GetPointsRes
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {net.ihago.money.api.gamepointsmall.GetPointsRes} GetPointsRes
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        GetPointsRes.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.net.ihago.money.api.gamepointsmall.GetPointsRes();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.result = $root.common.Result.decode(reader, reader.uint32());
                                    break;
                                case 10:
                                    message.points = reader.int64();
                                    break;
                                case 11:
                                    message.expire_time = reader.int64();
                                    break;
                                case 12:
                                    message.is_show = reader.bool();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        return GetPointsRes;
                    })();

                    return gamepointsmall;
                })();

                api.gameuser = (function() {

                    /**
                     * Namespace gameuser.
                     * @memberof net.ihago.money.api
                     * @namespace
                     */
                    var gameuser = {};

                    gameuser.Gameuser = (function() {

                        /**
                         * Constructs a new Gameuser service.
                         * @memberof net.ihago.money.api.gameuser
                         * @classdesc Represents a Gameuser
                         * @extends $protobuf.rpc.Service
                         * @constructor
                         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                         */
                        function Gameuser(rpcImpl, requestDelimited, responseDelimited) {
                            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                        }

                        (Gameuser.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Gameuser;

                        /**
                         * Creates new Gameuser service using the specified rpc implementation.
                         * @function create
                         * @memberof net.ihago.money.api.gameuser.Gameuser
                         * @static
                         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                         * @returns {Gameuser} RPC service. Useful where requests and/or responses are streamed.
                         */
                        Gameuser.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                            return new this(rpcImpl, requestDelimited, responseDelimited);
                        };

                        /**
                         * Callback as used by {@link net.ihago.money.api.gameuser.Gameuser#getGameInfo}.
                         * @memberof net.ihago.money.api.gameuser.Gameuser
                         * @typedef GetGameInfoCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {net.ihago.money.api.gameuser.GetGameInfoRes} [response] GetGameInfoRes
                         */

                        /**
                         * Calls GetGameInfo.
                         * @function getGameInfo
                         * @memberof net.ihago.money.api.gameuser.Gameuser
                         * @instance
                         * @param {net.ihago.money.api.gameuser.IGetGameInfoReq} request GetGameInfoReq message or plain object
                         * @param {net.ihago.money.api.gameuser.Gameuser.GetGameInfoCallback} callback Node-style callback called with the error, if any, and GetGameInfoRes
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(Gameuser.prototype.getGameInfo = function getGameInfo(request, callback) {
                            return this.rpcCall(getGameInfo, $root.net.ihago.money.api.gameuser.GetGameInfoReq, $root.net.ihago.money.api.gameuser.GetGameInfoRes, request, callback);
                        }, "name", { value: "GetGameInfo" });

                        /**
                         * Calls GetGameInfo.
                         * @function getGameInfo
                         * @memberof net.ihago.money.api.gameuser.Gameuser
                         * @instance
                         * @param {net.ihago.money.api.gameuser.IGetGameInfoReq} request GetGameInfoReq message or plain object
                         * @returns {Promise<net.ihago.money.api.gameuser.GetGameInfoRes>} Promise
                         * @variation 2
                         */

                        /**
                         * Callback as used by {@link net.ihago.money.api.gameuser.Gameuser#getGameBanner}.
                         * @memberof net.ihago.money.api.gameuser.Gameuser
                         * @typedef GetGameBannerCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {net.ihago.money.api.gameuser.GetGameBannerRes} [response] GetGameBannerRes
                         */

                        /**
                         * Calls GetGameBanner.
                         * @function getGameBanner
                         * @memberof net.ihago.money.api.gameuser.Gameuser
                         * @instance
                         * @param {net.ihago.money.api.gameuser.IGetGameBannerReq} request GetGameBannerReq message or plain object
                         * @param {net.ihago.money.api.gameuser.Gameuser.GetGameBannerCallback} callback Node-style callback called with the error, if any, and GetGameBannerRes
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(Gameuser.prototype.getGameBanner = function getGameBanner(request, callback) {
                            return this.rpcCall(getGameBanner, $root.net.ihago.money.api.gameuser.GetGameBannerReq, $root.net.ihago.money.api.gameuser.GetGameBannerRes, request, callback);
                        }, "name", { value: "GetGameBanner" });

                        /**
                         * Calls GetGameBanner.
                         * @function getGameBanner
                         * @memberof net.ihago.money.api.gameuser.Gameuser
                         * @instance
                         * @param {net.ihago.money.api.gameuser.IGetGameBannerReq} request GetGameBannerReq message or plain object
                         * @returns {Promise<net.ihago.money.api.gameuser.GetGameBannerRes>} Promise
                         * @variation 2
                         */

                        /**
                         * Callback as used by {@link net.ihago.money.api.gameuser.Gameuser#isGameUser}.
                         * @memberof net.ihago.money.api.gameuser.Gameuser
                         * @typedef IsGameUserCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {net.ihago.money.api.gameuser.IsGameUserRes} [response] IsGameUserRes
                         */

                        /**
                         * Calls IsGameUser.
                         * @function isGameUser
                         * @memberof net.ihago.money.api.gameuser.Gameuser
                         * @instance
                         * @param {net.ihago.money.api.gameuser.IIsGameUserReq} request IsGameUserReq message or plain object
                         * @param {net.ihago.money.api.gameuser.Gameuser.IsGameUserCallback} callback Node-style callback called with the error, if any, and IsGameUserRes
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(Gameuser.prototype.isGameUser = function isGameUser(request, callback) {
                            return this.rpcCall(isGameUser, $root.net.ihago.money.api.gameuser.IsGameUserReq, $root.net.ihago.money.api.gameuser.IsGameUserRes, request, callback);
                        }, "name", { value: "IsGameUser" });

                        /**
                         * Calls IsGameUser.
                         * @function isGameUser
                         * @memberof net.ihago.money.api.gameuser.Gameuser
                         * @instance
                         * @param {net.ihago.money.api.gameuser.IIsGameUserReq} request IsGameUserReq message or plain object
                         * @returns {Promise<net.ihago.money.api.gameuser.IsGameUserRes>} Promise
                         * @variation 2
                         */

                        return Gameuser;
                    })();

                    /**
                     * GameuserUri enum.
                     * @name net.ihago.money.api.gameuser.GameuserUri
                     * @enum {string}
                     * @property {number} kUriNone=0 kUriNone value
                     * @property {number} kUriToast=1 kUriToast value
                     * @property {number} kUriPlayStart=2 kUriPlayStart value
                     * @property {number} kUriPlayEnd=3 kUriPlayEnd value
                     */
                    gameuser.GameuserUri = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "kUriNone"] = 0;
                        values[valuesById[1] = "kUriToast"] = 1;
                        values[valuesById[2] = "kUriPlayStart"] = 2;
                        values[valuesById[3] = "kUriPlayEnd"] = 3;
                        return values;
                    })();

                    gameuser.GameuserNotify = (function() {

                        /**
                         * Properties of a GameuserNotify.
                         * @memberof net.ihago.money.api.gameuser
                         * @interface IGameuserNotify
                         * @property {common.IHeader|null} [header] GameuserNotify header
                         * @property {number|null} [uri] GameuserNotify uri
                         * @property {net.ihago.money.api.gameuser.IToastMsg|null} [toast_msg] GameuserNotify toast_msg
                         * @property {net.ihago.money.api.gameuser.IPlayStartMsg|null} [play_start_msg] GameuserNotify play_start_msg
                         * @property {net.ihago.money.api.gameuser.IPlayEndMsg|null} [play_end_msg] GameuserNotify play_end_msg
                         */

                        /**
                         * Constructs a new GameuserNotify.
                         * @memberof net.ihago.money.api.gameuser
                         * @classdesc Represents a GameuserNotify.
                         * @implements IGameuserNotify
                         * @constructor
                         * @param {net.ihago.money.api.gameuser.IGameuserNotify=} [properties] Properties to set
                         */
                        function GameuserNotify(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * GameuserNotify header.
                         * @member {common.IHeader|null|undefined} header
                         * @memberof net.ihago.money.api.gameuser.GameuserNotify
                         * @instance
                         */
                        GameuserNotify.prototype.header = null;

                        /**
                         * GameuserNotify uri.
                         * @member {number} uri
                         * @memberof net.ihago.money.api.gameuser.GameuserNotify
                         * @instance
                         */
                        GameuserNotify.prototype.uri = 0;

                        /**
                         * GameuserNotify toast_msg.
                         * @member {net.ihago.money.api.gameuser.IToastMsg|null|undefined} toast_msg
                         * @memberof net.ihago.money.api.gameuser.GameuserNotify
                         * @instance
                         */
                        GameuserNotify.prototype.toast_msg = null;

                        /**
                         * GameuserNotify play_start_msg.
                         * @member {net.ihago.money.api.gameuser.IPlayStartMsg|null|undefined} play_start_msg
                         * @memberof net.ihago.money.api.gameuser.GameuserNotify
                         * @instance
                         */
                        GameuserNotify.prototype.play_start_msg = null;

                        /**
                         * GameuserNotify play_end_msg.
                         * @member {net.ihago.money.api.gameuser.IPlayEndMsg|null|undefined} play_end_msg
                         * @memberof net.ihago.money.api.gameuser.GameuserNotify
                         * @instance
                         */
                        GameuserNotify.prototype.play_end_msg = null;

                        /**
                         * Creates a new GameuserNotify instance using the specified properties.
                         * @function create
                         * @memberof net.ihago.money.api.gameuser.GameuserNotify
                         * @static
                         * @param {net.ihago.money.api.gameuser.IGameuserNotify=} [properties] Properties to set
                         * @returns {net.ihago.money.api.gameuser.GameuserNotify} GameuserNotify instance
                         */
                        GameuserNotify.create = function create(properties) {
                            return new GameuserNotify(properties);
                        };

                        /**
                         * Encodes the specified GameuserNotify message. Does not implicitly {@link net.ihago.money.api.gameuser.GameuserNotify.verify|verify} messages.
                         * @function encode
                         * @memberof net.ihago.money.api.gameuser.GameuserNotify
                         * @static
                         * @param {net.ihago.money.api.gameuser.IGameuserNotify} message GameuserNotify message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        GameuserNotify.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.header != null && message.hasOwnProperty("header"))
                                $root.common.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.uri != null && message.hasOwnProperty("uri"))
                                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.uri);
                            if (message.toast_msg != null && message.hasOwnProperty("toast_msg"))
                                $root.net.ihago.money.api.gameuser.ToastMsg.encode(message.toast_msg, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
                            if (message.play_start_msg != null && message.hasOwnProperty("play_start_msg"))
                                $root.net.ihago.money.api.gameuser.PlayStartMsg.encode(message.play_start_msg, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
                            if (message.play_end_msg != null && message.hasOwnProperty("play_end_msg"))
                                $root.net.ihago.money.api.gameuser.PlayEndMsg.encode(message.play_end_msg, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
                            return writer;
                        };

                        /**
                         * Decodes a GameuserNotify message from the specified reader or buffer.
                         * @function decode
                         * @memberof net.ihago.money.api.gameuser.GameuserNotify
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {net.ihago.money.api.gameuser.GameuserNotify} GameuserNotify
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        GameuserNotify.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.net.ihago.money.api.gameuser.GameuserNotify();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.header = $root.common.Header.decode(reader, reader.uint32());
                                    break;
                                case 2:
                                    message.uri = reader.int32();
                                    break;
                                case 11:
                                    message.toast_msg = $root.net.ihago.money.api.gameuser.ToastMsg.decode(reader, reader.uint32());
                                    break;
                                case 12:
                                    message.play_start_msg = $root.net.ihago.money.api.gameuser.PlayStartMsg.decode(reader, reader.uint32());
                                    break;
                                case 13:
                                    message.play_end_msg = $root.net.ihago.money.api.gameuser.PlayEndMsg.decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        return GameuserNotify;
                    })();

                    gameuser.ToastMsg = (function() {

                        /**
                         * Properties of a ToastMsg.
                         * @memberof net.ihago.money.api.gameuser
                         * @interface IToastMsg
                         * @property {string|null} [left_icon] ToastMsg left_icon
                         * @property {string|null} [msg] ToastMsg msg
                         */

                        /**
                         * Constructs a new ToastMsg.
                         * @memberof net.ihago.money.api.gameuser
                         * @classdesc Represents a ToastMsg.
                         * @implements IToastMsg
                         * @constructor
                         * @param {net.ihago.money.api.gameuser.IToastMsg=} [properties] Properties to set
                         */
                        function ToastMsg(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * ToastMsg left_icon.
                         * @member {string} left_icon
                         * @memberof net.ihago.money.api.gameuser.ToastMsg
                         * @instance
                         */
                        ToastMsg.prototype.left_icon = "";

                        /**
                         * ToastMsg msg.
                         * @member {string} msg
                         * @memberof net.ihago.money.api.gameuser.ToastMsg
                         * @instance
                         */
                        ToastMsg.prototype.msg = "";

                        /**
                         * Creates a new ToastMsg instance using the specified properties.
                         * @function create
                         * @memberof net.ihago.money.api.gameuser.ToastMsg
                         * @static
                         * @param {net.ihago.money.api.gameuser.IToastMsg=} [properties] Properties to set
                         * @returns {net.ihago.money.api.gameuser.ToastMsg} ToastMsg instance
                         */
                        ToastMsg.create = function create(properties) {
                            return new ToastMsg(properties);
                        };

                        /**
                         * Encodes the specified ToastMsg message. Does not implicitly {@link net.ihago.money.api.gameuser.ToastMsg.verify|verify} messages.
                         * @function encode
                         * @memberof net.ihago.money.api.gameuser.ToastMsg
                         * @static
                         * @param {net.ihago.money.api.gameuser.IToastMsg} message ToastMsg message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ToastMsg.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.left_icon != null && message.hasOwnProperty("left_icon"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.left_icon);
                            if (message.msg != null && message.hasOwnProperty("msg"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
                            return writer;
                        };

                        /**
                         * Decodes a ToastMsg message from the specified reader or buffer.
                         * @function decode
                         * @memberof net.ihago.money.api.gameuser.ToastMsg
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {net.ihago.money.api.gameuser.ToastMsg} ToastMsg
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ToastMsg.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.net.ihago.money.api.gameuser.ToastMsg();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.left_icon = reader.string();
                                    break;
                                case 2:
                                    message.msg = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        return ToastMsg;
                    })();

                    gameuser.PlayStartMsg = (function() {

                        /**
                         * Properties of a PlayStartMsg.
                         * @memberof net.ihago.money.api.gameuser
                         * @interface IPlayStartMsg
                         */

                        /**
                         * Constructs a new PlayStartMsg.
                         * @memberof net.ihago.money.api.gameuser
                         * @classdesc Represents a PlayStartMsg.
                         * @implements IPlayStartMsg
                         * @constructor
                         * @param {net.ihago.money.api.gameuser.IPlayStartMsg=} [properties] Properties to set
                         */
                        function PlayStartMsg(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Creates a new PlayStartMsg instance using the specified properties.
                         * @function create
                         * @memberof net.ihago.money.api.gameuser.PlayStartMsg
                         * @static
                         * @param {net.ihago.money.api.gameuser.IPlayStartMsg=} [properties] Properties to set
                         * @returns {net.ihago.money.api.gameuser.PlayStartMsg} PlayStartMsg instance
                         */
                        PlayStartMsg.create = function create(properties) {
                            return new PlayStartMsg(properties);
                        };

                        /**
                         * Encodes the specified PlayStartMsg message. Does not implicitly {@link net.ihago.money.api.gameuser.PlayStartMsg.verify|verify} messages.
                         * @function encode
                         * @memberof net.ihago.money.api.gameuser.PlayStartMsg
                         * @static
                         * @param {net.ihago.money.api.gameuser.IPlayStartMsg} message PlayStartMsg message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        PlayStartMsg.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            return writer;
                        };

                        /**
                         * Decodes a PlayStartMsg message from the specified reader or buffer.
                         * @function decode
                         * @memberof net.ihago.money.api.gameuser.PlayStartMsg
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {net.ihago.money.api.gameuser.PlayStartMsg} PlayStartMsg
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        PlayStartMsg.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.net.ihago.money.api.gameuser.PlayStartMsg();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        return PlayStartMsg;
                    })();

                    gameuser.PlayEndMsg = (function() {

                        /**
                         * Properties of a PlayEndMsg.
                         * @memberof net.ihago.money.api.gameuser
                         * @interface IPlayEndMsg
                         */

                        /**
                         * Constructs a new PlayEndMsg.
                         * @memberof net.ihago.money.api.gameuser
                         * @classdesc Represents a PlayEndMsg.
                         * @implements IPlayEndMsg
                         * @constructor
                         * @param {net.ihago.money.api.gameuser.IPlayEndMsg=} [properties] Properties to set
                         */
                        function PlayEndMsg(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Creates a new PlayEndMsg instance using the specified properties.
                         * @function create
                         * @memberof net.ihago.money.api.gameuser.PlayEndMsg
                         * @static
                         * @param {net.ihago.money.api.gameuser.IPlayEndMsg=} [properties] Properties to set
                         * @returns {net.ihago.money.api.gameuser.PlayEndMsg} PlayEndMsg instance
                         */
                        PlayEndMsg.create = function create(properties) {
                            return new PlayEndMsg(properties);
                        };

                        /**
                         * Encodes the specified PlayEndMsg message. Does not implicitly {@link net.ihago.money.api.gameuser.PlayEndMsg.verify|verify} messages.
                         * @function encode
                         * @memberof net.ihago.money.api.gameuser.PlayEndMsg
                         * @static
                         * @param {net.ihago.money.api.gameuser.IPlayEndMsg} message PlayEndMsg message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        PlayEndMsg.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            return writer;
                        };

                        /**
                         * Decodes a PlayEndMsg message from the specified reader or buffer.
                         * @function decode
                         * @memberof net.ihago.money.api.gameuser.PlayEndMsg
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {net.ihago.money.api.gameuser.PlayEndMsg} PlayEndMsg
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        PlayEndMsg.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.net.ihago.money.api.gameuser.PlayEndMsg();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        return PlayEndMsg;
                    })();

                    gameuser.GetGameInfoReq = (function() {

                        /**
                         * Properties of a GetGameInfoReq.
                         * @memberof net.ihago.money.api.gameuser
                         * @interface IGetGameInfoReq
                         * @property {Array.<string>|null} [game_id] GetGameInfoReq game_id
                         */

                        /**
                         * Constructs a new GetGameInfoReq.
                         * @memberof net.ihago.money.api.gameuser
                         * @classdesc Represents a GetGameInfoReq.
                         * @implements IGetGameInfoReq
                         * @constructor
                         * @param {net.ihago.money.api.gameuser.IGetGameInfoReq=} [properties] Properties to set
                         */
                        function GetGameInfoReq(properties) {
                            this.game_id = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * GetGameInfoReq game_id.
                         * @member {Array.<string>} game_id
                         * @memberof net.ihago.money.api.gameuser.GetGameInfoReq
                         * @instance
                         */
                        GetGameInfoReq.prototype.game_id = $util.emptyArray;

                        /**
                         * Creates a new GetGameInfoReq instance using the specified properties.
                         * @function create
                         * @memberof net.ihago.money.api.gameuser.GetGameInfoReq
                         * @static
                         * @param {net.ihago.money.api.gameuser.IGetGameInfoReq=} [properties] Properties to set
                         * @returns {net.ihago.money.api.gameuser.GetGameInfoReq} GetGameInfoReq instance
                         */
                        GetGameInfoReq.create = function create(properties) {
                            return new GetGameInfoReq(properties);
                        };

                        /**
                         * Encodes the specified GetGameInfoReq message. Does not implicitly {@link net.ihago.money.api.gameuser.GetGameInfoReq.verify|verify} messages.
                         * @function encode
                         * @memberof net.ihago.money.api.gameuser.GetGameInfoReq
                         * @static
                         * @param {net.ihago.money.api.gameuser.IGetGameInfoReq} message GetGameInfoReq message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        GetGameInfoReq.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.game_id != null && message.game_id.length)
                                for (var i = 0; i < message.game_id.length; ++i)
                                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.game_id[i]);
                            return writer;
                        };

                        /**
                         * Decodes a GetGameInfoReq message from the specified reader or buffer.
                         * @function decode
                         * @memberof net.ihago.money.api.gameuser.GetGameInfoReq
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {net.ihago.money.api.gameuser.GetGameInfoReq} GetGameInfoReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        GetGameInfoReq.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.net.ihago.money.api.gameuser.GetGameInfoReq();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    if (!(message.game_id && message.game_id.length))
                                        message.game_id = [];
                                    message.game_id.push(reader.string());
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        return GetGameInfoReq;
                    })();

                    gameuser.GetGameInfoRes = (function() {

                        /**
                         * Properties of a GetGameInfoRes.
                         * @memberof net.ihago.money.api.gameuser
                         * @interface IGetGameInfoRes
                         * @property {common.IResult|null} [result] GetGameInfoRes result
                         * @property {Object.<string,string>|null} [game_label] GetGameInfoRes game_label
                         */

                        /**
                         * Constructs a new GetGameInfoRes.
                         * @memberof net.ihago.money.api.gameuser
                         * @classdesc Represents a GetGameInfoRes.
                         * @implements IGetGameInfoRes
                         * @constructor
                         * @param {net.ihago.money.api.gameuser.IGetGameInfoRes=} [properties] Properties to set
                         */
                        function GetGameInfoRes(properties) {
                            this.game_label = {};
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * GetGameInfoRes result.
                         * @member {common.IResult|null|undefined} result
                         * @memberof net.ihago.money.api.gameuser.GetGameInfoRes
                         * @instance
                         */
                        GetGameInfoRes.prototype.result = null;

                        /**
                         * GetGameInfoRes game_label.
                         * @member {Object.<string,string>} game_label
                         * @memberof net.ihago.money.api.gameuser.GetGameInfoRes
                         * @instance
                         */
                        GetGameInfoRes.prototype.game_label = $util.emptyObject;

                        /**
                         * Creates a new GetGameInfoRes instance using the specified properties.
                         * @function create
                         * @memberof net.ihago.money.api.gameuser.GetGameInfoRes
                         * @static
                         * @param {net.ihago.money.api.gameuser.IGetGameInfoRes=} [properties] Properties to set
                         * @returns {net.ihago.money.api.gameuser.GetGameInfoRes} GetGameInfoRes instance
                         */
                        GetGameInfoRes.create = function create(properties) {
                            return new GetGameInfoRes(properties);
                        };

                        /**
                         * Encodes the specified GetGameInfoRes message. Does not implicitly {@link net.ihago.money.api.gameuser.GetGameInfoRes.verify|verify} messages.
                         * @function encode
                         * @memberof net.ihago.money.api.gameuser.GetGameInfoRes
                         * @static
                         * @param {net.ihago.money.api.gameuser.IGetGameInfoRes} message GetGameInfoRes message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        GetGameInfoRes.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.result != null && message.hasOwnProperty("result"))
                                $root.common.Result.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.game_label != null && message.hasOwnProperty("game_label"))
                                for (var keys = Object.keys(message.game_label), i = 0; i < keys.length; ++i)
                                    writer.uint32(/* id 10, wireType 2 =*/82).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.game_label[keys[i]]).ldelim();
                            return writer;
                        };

                        /**
                         * Decodes a GetGameInfoRes message from the specified reader or buffer.
                         * @function decode
                         * @memberof net.ihago.money.api.gameuser.GetGameInfoRes
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {net.ihago.money.api.gameuser.GetGameInfoRes} GetGameInfoRes
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        GetGameInfoRes.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.net.ihago.money.api.gameuser.GetGameInfoRes(), key;
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.result = $root.common.Result.decode(reader, reader.uint32());
                                    break;
                                case 10:
                                    reader.skip().pos++;
                                    if (message.game_label === $util.emptyObject)
                                        message.game_label = {};
                                    key = reader.string();
                                    reader.pos++;
                                    message.game_label[key] = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        return GetGameInfoRes;
                    })();

                    gameuser.IsGameUserReq = (function() {

                        /**
                         * Properties of an IsGameUserReq.
                         * @memberof net.ihago.money.api.gameuser
                         * @interface IIsGameUserReq
                         * @property {number|null} [uid] IsGameUserReq uid
                         * @property {boolean|null} [is_logingame] IsGameUserReq is_logingame
                         */

                        /**
                         * Constructs a new IsGameUserReq.
                         * @memberof net.ihago.money.api.gameuser
                         * @classdesc Represents an IsGameUserReq.
                         * @implements IIsGameUserReq
                         * @constructor
                         * @param {net.ihago.money.api.gameuser.IIsGameUserReq=} [properties] Properties to set
                         */
                        function IsGameUserReq(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * IsGameUserReq uid.
                         * @member {number} uid
                         * @memberof net.ihago.money.api.gameuser.IsGameUserReq
                         * @instance
                         */
                        IsGameUserReq.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * IsGameUserReq is_logingame.
                         * @member {boolean} is_logingame
                         * @memberof net.ihago.money.api.gameuser.IsGameUserReq
                         * @instance
                         */
                        IsGameUserReq.prototype.is_logingame = false;

                        /**
                         * Creates a new IsGameUserReq instance using the specified properties.
                         * @function create
                         * @memberof net.ihago.money.api.gameuser.IsGameUserReq
                         * @static
                         * @param {net.ihago.money.api.gameuser.IIsGameUserReq=} [properties] Properties to set
                         * @returns {net.ihago.money.api.gameuser.IsGameUserReq} IsGameUserReq instance
                         */
                        IsGameUserReq.create = function create(properties) {
                            return new IsGameUserReq(properties);
                        };

                        /**
                         * Encodes the specified IsGameUserReq message. Does not implicitly {@link net.ihago.money.api.gameuser.IsGameUserReq.verify|verify} messages.
                         * @function encode
                         * @memberof net.ihago.money.api.gameuser.IsGameUserReq
                         * @static
                         * @param {net.ihago.money.api.gameuser.IIsGameUserReq} message IsGameUserReq message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        IsGameUserReq.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.uid != null && message.hasOwnProperty("uid"))
                                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
                            if (message.is_logingame != null && message.hasOwnProperty("is_logingame"))
                                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.is_logingame);
                            return writer;
                        };

                        /**
                         * Decodes an IsGameUserReq message from the specified reader or buffer.
                         * @function decode
                         * @memberof net.ihago.money.api.gameuser.IsGameUserReq
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {net.ihago.money.api.gameuser.IsGameUserReq} IsGameUserReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        IsGameUserReq.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.net.ihago.money.api.gameuser.IsGameUserReq();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.uid = reader.int64();
                                    break;
                                case 2:
                                    message.is_logingame = reader.bool();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        return IsGameUserReq;
                    })();

                    gameuser.IsGameUserRes = (function() {

                        /**
                         * Properties of an IsGameUserRes.
                         * @memberof net.ihago.money.api.gameuser
                         * @interface IIsGameUserRes
                         * @property {common.IResult|null} [result] IsGameUserRes result
                         * @property {boolean|null} [is_gameuser] IsGameUserRes is_gameuser
                         */

                        /**
                         * Constructs a new IsGameUserRes.
                         * @memberof net.ihago.money.api.gameuser
                         * @classdesc Represents an IsGameUserRes.
                         * @implements IIsGameUserRes
                         * @constructor
                         * @param {net.ihago.money.api.gameuser.IIsGameUserRes=} [properties] Properties to set
                         */
                        function IsGameUserRes(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * IsGameUserRes result.
                         * @member {common.IResult|null|undefined} result
                         * @memberof net.ihago.money.api.gameuser.IsGameUserRes
                         * @instance
                         */
                        IsGameUserRes.prototype.result = null;

                        /**
                         * IsGameUserRes is_gameuser.
                         * @member {boolean} is_gameuser
                         * @memberof net.ihago.money.api.gameuser.IsGameUserRes
                         * @instance
                         */
                        IsGameUserRes.prototype.is_gameuser = false;

                        /**
                         * Creates a new IsGameUserRes instance using the specified properties.
                         * @function create
                         * @memberof net.ihago.money.api.gameuser.IsGameUserRes
                         * @static
                         * @param {net.ihago.money.api.gameuser.IIsGameUserRes=} [properties] Properties to set
                         * @returns {net.ihago.money.api.gameuser.IsGameUserRes} IsGameUserRes instance
                         */
                        IsGameUserRes.create = function create(properties) {
                            return new IsGameUserRes(properties);
                        };

                        /**
                         * Encodes the specified IsGameUserRes message. Does not implicitly {@link net.ihago.money.api.gameuser.IsGameUserRes.verify|verify} messages.
                         * @function encode
                         * @memberof net.ihago.money.api.gameuser.IsGameUserRes
                         * @static
                         * @param {net.ihago.money.api.gameuser.IIsGameUserRes} message IsGameUserRes message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        IsGameUserRes.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.result != null && message.hasOwnProperty("result"))
                                $root.common.Result.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.is_gameuser != null && message.hasOwnProperty("is_gameuser"))
                                writer.uint32(/* id 10, wireType 0 =*/80).bool(message.is_gameuser);
                            return writer;
                        };

                        /**
                         * Decodes an IsGameUserRes message from the specified reader or buffer.
                         * @function decode
                         * @memberof net.ihago.money.api.gameuser.IsGameUserRes
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {net.ihago.money.api.gameuser.IsGameUserRes} IsGameUserRes
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        IsGameUserRes.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.net.ihago.money.api.gameuser.IsGameUserRes();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.result = $root.common.Result.decode(reader, reader.uint32());
                                    break;
                                case 10:
                                    message.is_gameuser = reader.bool();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        return IsGameUserRes;
                    })();

                    gameuser.GetGameBannerReq = (function() {

                        /**
                         * Properties of a GetGameBannerReq.
                         * @memberof net.ihago.money.api.gameuser
                         * @interface IGetGameBannerReq
                         */

                        /**
                         * Constructs a new GetGameBannerReq.
                         * @memberof net.ihago.money.api.gameuser
                         * @classdesc Represents a GetGameBannerReq.
                         * @implements IGetGameBannerReq
                         * @constructor
                         * @param {net.ihago.money.api.gameuser.IGetGameBannerReq=} [properties] Properties to set
                         */
                        function GetGameBannerReq(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Creates a new GetGameBannerReq instance using the specified properties.
                         * @function create
                         * @memberof net.ihago.money.api.gameuser.GetGameBannerReq
                         * @static
                         * @param {net.ihago.money.api.gameuser.IGetGameBannerReq=} [properties] Properties to set
                         * @returns {net.ihago.money.api.gameuser.GetGameBannerReq} GetGameBannerReq instance
                         */
                        GetGameBannerReq.create = function create(properties) {
                            return new GetGameBannerReq(properties);
                        };

                        /**
                         * Encodes the specified GetGameBannerReq message. Does not implicitly {@link net.ihago.money.api.gameuser.GetGameBannerReq.verify|verify} messages.
                         * @function encode
                         * @memberof net.ihago.money.api.gameuser.GetGameBannerReq
                         * @static
                         * @param {net.ihago.money.api.gameuser.IGetGameBannerReq} message GetGameBannerReq message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        GetGameBannerReq.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            return writer;
                        };

                        /**
                         * Decodes a GetGameBannerReq message from the specified reader or buffer.
                         * @function decode
                         * @memberof net.ihago.money.api.gameuser.GetGameBannerReq
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {net.ihago.money.api.gameuser.GetGameBannerReq} GetGameBannerReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        GetGameBannerReq.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.net.ihago.money.api.gameuser.GetGameBannerReq();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        return GetGameBannerReq;
                    })();

                    gameuser.GetGameBannerRes = (function() {

                        /**
                         * Properties of a GetGameBannerRes.
                         * @memberof net.ihago.money.api.gameuser
                         * @interface IGetGameBannerRes
                         * @property {common.IResult|null} [result] GetGameBannerRes result
                         * @property {net.ihago.money.api.gameuser.IGameBanner|null} [game_banner] GetGameBannerRes game_banner
                         */

                        /**
                         * Constructs a new GetGameBannerRes.
                         * @memberof net.ihago.money.api.gameuser
                         * @classdesc Represents a GetGameBannerRes.
                         * @implements IGetGameBannerRes
                         * @constructor
                         * @param {net.ihago.money.api.gameuser.IGetGameBannerRes=} [properties] Properties to set
                         */
                        function GetGameBannerRes(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * GetGameBannerRes result.
                         * @member {common.IResult|null|undefined} result
                         * @memberof net.ihago.money.api.gameuser.GetGameBannerRes
                         * @instance
                         */
                        GetGameBannerRes.prototype.result = null;

                        /**
                         * GetGameBannerRes game_banner.
                         * @member {net.ihago.money.api.gameuser.IGameBanner|null|undefined} game_banner
                         * @memberof net.ihago.money.api.gameuser.GetGameBannerRes
                         * @instance
                         */
                        GetGameBannerRes.prototype.game_banner = null;

                        /**
                         * Creates a new GetGameBannerRes instance using the specified properties.
                         * @function create
                         * @memberof net.ihago.money.api.gameuser.GetGameBannerRes
                         * @static
                         * @param {net.ihago.money.api.gameuser.IGetGameBannerRes=} [properties] Properties to set
                         * @returns {net.ihago.money.api.gameuser.GetGameBannerRes} GetGameBannerRes instance
                         */
                        GetGameBannerRes.create = function create(properties) {
                            return new GetGameBannerRes(properties);
                        };

                        /**
                         * Encodes the specified GetGameBannerRes message. Does not implicitly {@link net.ihago.money.api.gameuser.GetGameBannerRes.verify|verify} messages.
                         * @function encode
                         * @memberof net.ihago.money.api.gameuser.GetGameBannerRes
                         * @static
                         * @param {net.ihago.money.api.gameuser.IGetGameBannerRes} message GetGameBannerRes message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        GetGameBannerRes.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.result != null && message.hasOwnProperty("result"))
                                $root.common.Result.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.game_banner != null && message.hasOwnProperty("game_banner"))
                                $root.net.ihago.money.api.gameuser.GameBanner.encode(message.game_banner, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
                            return writer;
                        };

                        /**
                         * Decodes a GetGameBannerRes message from the specified reader or buffer.
                         * @function decode
                         * @memberof net.ihago.money.api.gameuser.GetGameBannerRes
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {net.ihago.money.api.gameuser.GetGameBannerRes} GetGameBannerRes
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        GetGameBannerRes.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.net.ihago.money.api.gameuser.GetGameBannerRes();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.result = $root.common.Result.decode(reader, reader.uint32());
                                    break;
                                case 10:
                                    message.game_banner = $root.net.ihago.money.api.gameuser.GameBanner.decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        return GetGameBannerRes;
                    })();

                    /**
                     * TaskStage enum.
                     * @name net.ihago.money.api.gameuser.TaskStage
                     * @enum {string}
                     * @property {number} kStageNone=0 kStageNone value
                     * @property {number} kStageTryPlay=1 kStageTryPlay value
                     * @property {number} kStageMonthTask=2 kStageMonthTask value
                     * @property {number} kStagePlayEnd=3 kStagePlayEnd value
                     */
                    gameuser.TaskStage = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "kStageNone"] = 0;
                        values[valuesById[1] = "kStageTryPlay"] = 1;
                        values[valuesById[2] = "kStageMonthTask"] = 2;
                        values[valuesById[3] = "kStagePlayEnd"] = 3;
                        return values;
                    })();

                    gameuser.GameBanner = (function() {

                        /**
                         * Properties of a GameBanner.
                         * @memberof net.ihago.money.api.gameuser
                         * @interface IGameBanner
                         * @property {number|null} [stage] GameBanner stage
                         * @property {number|null} [count_down] GameBanner count_down
                         * @property {number|null} [cur] GameBanner cur
                         * @property {number|null} [target] GameBanner target
                         * @property {boolean|null} [is_flush] GameBanner is_flush
                         */

                        /**
                         * Constructs a new GameBanner.
                         * @memberof net.ihago.money.api.gameuser
                         * @classdesc Represents a GameBanner.
                         * @implements IGameBanner
                         * @constructor
                         * @param {net.ihago.money.api.gameuser.IGameBanner=} [properties] Properties to set
                         */
                        function GameBanner(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * GameBanner stage.
                         * @member {number} stage
                         * @memberof net.ihago.money.api.gameuser.GameBanner
                         * @instance
                         */
                        GameBanner.prototype.stage = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * GameBanner count_down.
                         * @member {number} count_down
                         * @memberof net.ihago.money.api.gameuser.GameBanner
                         * @instance
                         */
                        GameBanner.prototype.count_down = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * GameBanner cur.
                         * @member {number} cur
                         * @memberof net.ihago.money.api.gameuser.GameBanner
                         * @instance
                         */
                        GameBanner.prototype.cur = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * GameBanner target.
                         * @member {number} target
                         * @memberof net.ihago.money.api.gameuser.GameBanner
                         * @instance
                         */
                        GameBanner.prototype.target = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * GameBanner is_flush.
                         * @member {boolean} is_flush
                         * @memberof net.ihago.money.api.gameuser.GameBanner
                         * @instance
                         */
                        GameBanner.prototype.is_flush = false;

                        /**
                         * Creates a new GameBanner instance using the specified properties.
                         * @function create
                         * @memberof net.ihago.money.api.gameuser.GameBanner
                         * @static
                         * @param {net.ihago.money.api.gameuser.IGameBanner=} [properties] Properties to set
                         * @returns {net.ihago.money.api.gameuser.GameBanner} GameBanner instance
                         */
                        GameBanner.create = function create(properties) {
                            return new GameBanner(properties);
                        };

                        /**
                         * Encodes the specified GameBanner message. Does not implicitly {@link net.ihago.money.api.gameuser.GameBanner.verify|verify} messages.
                         * @function encode
                         * @memberof net.ihago.money.api.gameuser.GameBanner
                         * @static
                         * @param {net.ihago.money.api.gameuser.IGameBanner} message GameBanner message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        GameBanner.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.stage != null && message.hasOwnProperty("stage"))
                                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.stage);
                            if (message.count_down != null && message.hasOwnProperty("count_down"))
                                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.count_down);
                            if (message.cur != null && message.hasOwnProperty("cur"))
                                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.cur);
                            if (message.target != null && message.hasOwnProperty("target"))
                                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.target);
                            if (message.is_flush != null && message.hasOwnProperty("is_flush"))
                                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.is_flush);
                            return writer;
                        };

                        /**
                         * Decodes a GameBanner message from the specified reader or buffer.
                         * @function decode
                         * @memberof net.ihago.money.api.gameuser.GameBanner
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {net.ihago.money.api.gameuser.GameBanner} GameBanner
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        GameBanner.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.net.ihago.money.api.gameuser.GameBanner();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.stage = reader.int64();
                                    break;
                                case 2:
                                    message.count_down = reader.int64();
                                    break;
                                case 3:
                                    message.cur = reader.int64();
                                    break;
                                case 4:
                                    message.target = reader.int64();
                                    break;
                                case 5:
                                    message.is_flush = reader.bool();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        return GameBanner;
                    })();

                    return gameuser;
                })();

                return api;
            })();

            return money;
        })();

        ihago.game = (function() {

            /**
             * Namespace game.
             * @memberof net.ihago
             * @namespace
             */
            var game = {};

            game.api = (function() {

                /**
                 * Namespace api.
                 * @memberof net.ihago.game
                 * @namespace
                 */
                var api = {};

                api.notify = (function() {

                    /**
                     * Namespace notify.
                     * @memberof net.ihago.game.api
                     * @namespace
                     */
                    var notify = {};

                    notify.GameNotify = (function() {

                        /**
                         * Constructs a new GameNotify service.
                         * @memberof net.ihago.game.api.notify
                         * @classdesc Represents a GameNotify
                         * @extends $protobuf.rpc.Service
                         * @constructor
                         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                         */
                        function GameNotify(rpcImpl, requestDelimited, responseDelimited) {
                            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                        }

                        (GameNotify.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = GameNotify;

                        /**
                         * Creates new GameNotify service using the specified rpc implementation.
                         * @function create
                         * @memberof net.ihago.game.api.notify.GameNotify
                         * @static
                         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                         * @returns {GameNotify} RPC service. Useful where requests and/or responses are streamed.
                         */
                        GameNotify.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                            return new this(rpcImpl, requestDelimited, responseDelimited);
                        };

                        /**
                         * Callback as used by {@link net.ihago.game.api.notify.GameNotify#getGrandPrizeBanner}.
                         * @memberof net.ihago.game.api.notify.GameNotify
                         * @typedef GetGrandPrizeBannerCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {net.ihago.game.api.notify.GetGrandPrizeBannerRes} [response] GetGrandPrizeBannerRes
                         */

                        /**
                         * Calls GetGrandPrizeBanner.
                         * @function getGrandPrizeBanner
                         * @memberof net.ihago.game.api.notify.GameNotify
                         * @instance
                         * @param {net.ihago.game.api.notify.IGetGrandPrizeBannerReq} request GetGrandPrizeBannerReq message or plain object
                         * @param {net.ihago.game.api.notify.GameNotify.GetGrandPrizeBannerCallback} callback Node-style callback called with the error, if any, and GetGrandPrizeBannerRes
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(GameNotify.prototype.getGrandPrizeBanner = function getGrandPrizeBanner(request, callback) {
                            return this.rpcCall(getGrandPrizeBanner, $root.net.ihago.game.api.notify.GetGrandPrizeBannerReq, $root.net.ihago.game.api.notify.GetGrandPrizeBannerRes, request, callback);
                        }, "name", { value: "GetGrandPrizeBanner" });

                        /**
                         * Calls GetGrandPrizeBanner.
                         * @function getGrandPrizeBanner
                         * @memberof net.ihago.game.api.notify.GameNotify
                         * @instance
                         * @param {net.ihago.game.api.notify.IGetGrandPrizeBannerReq} request GetGrandPrizeBannerReq message or plain object
                         * @returns {Promise<net.ihago.game.api.notify.GetGrandPrizeBannerRes>} Promise
                         * @variation 2
                         */

                        /**
                         * Callback as used by {@link net.ihago.game.api.notify.GameNotify#like}.
                         * @memberof net.ihago.game.api.notify.GameNotify
                         * @typedef LikeCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {net.ihago.game.api.notify.LikeRes} [response] LikeRes
                         */

                        /**
                         * Calls Like.
                         * @function like
                         * @memberof net.ihago.game.api.notify.GameNotify
                         * @instance
                         * @param {net.ihago.game.api.notify.ILikeReq} request LikeReq message or plain object
                         * @param {net.ihago.game.api.notify.GameNotify.LikeCallback} callback Node-style callback called with the error, if any, and LikeRes
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(GameNotify.prototype.like = function like(request, callback) {
                            return this.rpcCall(like, $root.net.ihago.game.api.notify.LikeReq, $root.net.ihago.game.api.notify.LikeRes, request, callback);
                        }, "name", { value: "Like" });

                        /**
                         * Calls Like.
                         * @function like
                         * @memberof net.ihago.game.api.notify.GameNotify
                         * @instance
                         * @param {net.ihago.game.api.notify.ILikeReq} request LikeReq message or plain object
                         * @returns {Promise<net.ihago.game.api.notify.LikeRes>} Promise
                         * @variation 2
                         */

                        return GameNotify;
                    })();

                    /**
                     * ERetCode enum.
                     * @name net.ihago.game.api.notify.ERetCode
                     * @enum {string}
                     * @property {number} RET_NONE=0 RET_NONE value
                     * @property {number} ERC_NotInRoom=10000 ERC_NotInRoom value
                     */
                    notify.ERetCode = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "RET_NONE"] = 0;
                        values[valuesById[10000] = "ERC_NotInRoom"] = 10000;
                        return values;
                    })();

                    notify.GetGrandPrizeBannerReq = (function() {

                        /**
                         * Properties of a GetGrandPrizeBannerReq.
                         * @memberof net.ihago.game.api.notify
                         * @interface IGetGrandPrizeBannerReq
                         * @property {string|null} [game_id] GetGrandPrizeBannerReq game_id
                         * @property {number|null} [user_id] GetGrandPrizeBannerReq user_id
                         */

                        /**
                         * Constructs a new GetGrandPrizeBannerReq.
                         * @memberof net.ihago.game.api.notify
                         * @classdesc Represents a GetGrandPrizeBannerReq.
                         * @implements IGetGrandPrizeBannerReq
                         * @constructor
                         * @param {net.ihago.game.api.notify.IGetGrandPrizeBannerReq=} [properties] Properties to set
                         */
                        function GetGrandPrizeBannerReq(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * GetGrandPrizeBannerReq game_id.
                         * @member {string} game_id
                         * @memberof net.ihago.game.api.notify.GetGrandPrizeBannerReq
                         * @instance
                         */
                        GetGrandPrizeBannerReq.prototype.game_id = "";

                        /**
                         * GetGrandPrizeBannerReq user_id.
                         * @member {number} user_id
                         * @memberof net.ihago.game.api.notify.GetGrandPrizeBannerReq
                         * @instance
                         */
                        GetGrandPrizeBannerReq.prototype.user_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * Creates a new GetGrandPrizeBannerReq instance using the specified properties.
                         * @function create
                         * @memberof net.ihago.game.api.notify.GetGrandPrizeBannerReq
                         * @static
                         * @param {net.ihago.game.api.notify.IGetGrandPrizeBannerReq=} [properties] Properties to set
                         * @returns {net.ihago.game.api.notify.GetGrandPrizeBannerReq} GetGrandPrizeBannerReq instance
                         */
                        GetGrandPrizeBannerReq.create = function create(properties) {
                            return new GetGrandPrizeBannerReq(properties);
                        };

                        /**
                         * Encodes the specified GetGrandPrizeBannerReq message. Does not implicitly {@link net.ihago.game.api.notify.GetGrandPrizeBannerReq.verify|verify} messages.
                         * @function encode
                         * @memberof net.ihago.game.api.notify.GetGrandPrizeBannerReq
                         * @static
                         * @param {net.ihago.game.api.notify.IGetGrandPrizeBannerReq} message GetGrandPrizeBannerReq message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        GetGrandPrizeBannerReq.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.game_id != null && message.hasOwnProperty("game_id"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.game_id);
                            if (message.user_id != null && message.hasOwnProperty("user_id"))
                                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.user_id);
                            return writer;
                        };

                        /**
                         * Decodes a GetGrandPrizeBannerReq message from the specified reader or buffer.
                         * @function decode
                         * @memberof net.ihago.game.api.notify.GetGrandPrizeBannerReq
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {net.ihago.game.api.notify.GetGrandPrizeBannerReq} GetGrandPrizeBannerReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        GetGrandPrizeBannerReq.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.net.ihago.game.api.notify.GetGrandPrizeBannerReq();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.game_id = reader.string();
                                    break;
                                case 2:
                                    message.user_id = reader.int64();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        return GetGrandPrizeBannerReq;
                    })();

                    notify.GrandPrizeBanner = (function() {

                        /**
                         * Properties of a GrandPrizeBanner.
                         * @memberof net.ihago.game.api.notify
                         * @interface IGrandPrizeBanner
                         * @property {string|null} [user_img] GrandPrizeBanner user_img
                         * @property {string|null} [user_name] GrandPrizeBanner user_name
                         * @property {number|null} [reward_prize] GrandPrizeBanner reward_prize
                         * @property {string|null} [banner_id] GrandPrizeBanner banner_id
                         * @property {number|null} [like_count] GrandPrizeBanner like_count
                         * @property {boolean|null} [liked] GrandPrizeBanner liked
                         * @property {number|null} [my_like_count] GrandPrizeBanner my_like_count
                         * @property {number|null} [user_like_limit] GrandPrizeBanner user_like_limit
                         */

                        /**
                         * Constructs a new GrandPrizeBanner.
                         * @memberof net.ihago.game.api.notify
                         * @classdesc Represents a GrandPrizeBanner.
                         * @implements IGrandPrizeBanner
                         * @constructor
                         * @param {net.ihago.game.api.notify.IGrandPrizeBanner=} [properties] Properties to set
                         */
                        function GrandPrizeBanner(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * GrandPrizeBanner user_img.
                         * @member {string} user_img
                         * @memberof net.ihago.game.api.notify.GrandPrizeBanner
                         * @instance
                         */
                        GrandPrizeBanner.prototype.user_img = "";

                        /**
                         * GrandPrizeBanner user_name.
                         * @member {string} user_name
                         * @memberof net.ihago.game.api.notify.GrandPrizeBanner
                         * @instance
                         */
                        GrandPrizeBanner.prototype.user_name = "";

                        /**
                         * GrandPrizeBanner reward_prize.
                         * @member {number} reward_prize
                         * @memberof net.ihago.game.api.notify.GrandPrizeBanner
                         * @instance
                         */
                        GrandPrizeBanner.prototype.reward_prize = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * GrandPrizeBanner banner_id.
                         * @member {string} banner_id
                         * @memberof net.ihago.game.api.notify.GrandPrizeBanner
                         * @instance
                         */
                        GrandPrizeBanner.prototype.banner_id = "";

                        /**
                         * GrandPrizeBanner like_count.
                         * @member {number} like_count
                         * @memberof net.ihago.game.api.notify.GrandPrizeBanner
                         * @instance
                         */
                        GrandPrizeBanner.prototype.like_count = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * GrandPrizeBanner liked.
                         * @member {boolean} liked
                         * @memberof net.ihago.game.api.notify.GrandPrizeBanner
                         * @instance
                         */
                        GrandPrizeBanner.prototype.liked = false;

                        /**
                         * GrandPrizeBanner my_like_count.
                         * @member {number} my_like_count
                         * @memberof net.ihago.game.api.notify.GrandPrizeBanner
                         * @instance
                         */
                        GrandPrizeBanner.prototype.my_like_count = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * GrandPrizeBanner user_like_limit.
                         * @member {number} user_like_limit
                         * @memberof net.ihago.game.api.notify.GrandPrizeBanner
                         * @instance
                         */
                        GrandPrizeBanner.prototype.user_like_limit = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * Creates a new GrandPrizeBanner instance using the specified properties.
                         * @function create
                         * @memberof net.ihago.game.api.notify.GrandPrizeBanner
                         * @static
                         * @param {net.ihago.game.api.notify.IGrandPrizeBanner=} [properties] Properties to set
                         * @returns {net.ihago.game.api.notify.GrandPrizeBanner} GrandPrizeBanner instance
                         */
                        GrandPrizeBanner.create = function create(properties) {
                            return new GrandPrizeBanner(properties);
                        };

                        /**
                         * Encodes the specified GrandPrizeBanner message. Does not implicitly {@link net.ihago.game.api.notify.GrandPrizeBanner.verify|verify} messages.
                         * @function encode
                         * @memberof net.ihago.game.api.notify.GrandPrizeBanner
                         * @static
                         * @param {net.ihago.game.api.notify.IGrandPrizeBanner} message GrandPrizeBanner message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        GrandPrizeBanner.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.user_img != null && message.hasOwnProperty("user_img"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.user_img);
                            if (message.user_name != null && message.hasOwnProperty("user_name"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.user_name);
                            if (message.reward_prize != null && message.hasOwnProperty("reward_prize"))
                                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.reward_prize);
                            if (message.banner_id != null && message.hasOwnProperty("banner_id"))
                                writer.uint32(/* id 5, wireType 2 =*/42).string(message.banner_id);
                            if (message.like_count != null && message.hasOwnProperty("like_count"))
                                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.like_count);
                            if (message.liked != null && message.hasOwnProperty("liked"))
                                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.liked);
                            if (message.my_like_count != null && message.hasOwnProperty("my_like_count"))
                                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.my_like_count);
                            if (message.user_like_limit != null && message.hasOwnProperty("user_like_limit"))
                                writer.uint32(/* id 9, wireType 0 =*/72).int64(message.user_like_limit);
                            return writer;
                        };

                        /**
                         * Decodes a GrandPrizeBanner message from the specified reader or buffer.
                         * @function decode
                         * @memberof net.ihago.game.api.notify.GrandPrizeBanner
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {net.ihago.game.api.notify.GrandPrizeBanner} GrandPrizeBanner
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        GrandPrizeBanner.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.net.ihago.game.api.notify.GrandPrizeBanner();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.user_img = reader.string();
                                    break;
                                case 2:
                                    message.user_name = reader.string();
                                    break;
                                case 4:
                                    message.reward_prize = reader.int64();
                                    break;
                                case 5:
                                    message.banner_id = reader.string();
                                    break;
                                case 6:
                                    message.like_count = reader.int64();
                                    break;
                                case 7:
                                    message.liked = reader.bool();
                                    break;
                                case 8:
                                    message.my_like_count = reader.int64();
                                    break;
                                case 9:
                                    message.user_like_limit = reader.int64();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        return GrandPrizeBanner;
                    })();

                    notify.GetGrandPrizeBannerRes = (function() {

                        /**
                         * Properties of a GetGrandPrizeBannerRes.
                         * @memberof net.ihago.game.api.notify
                         * @interface IGetGrandPrizeBannerRes
                         * @property {common.IResult|null} [result] GetGrandPrizeBannerRes result
                         * @property {string|null} [game_id] GetGrandPrizeBannerRes game_id
                         * @property {net.ihago.game.api.notify.IGrandPrizeBanner|null} [grand_prize_banner] GetGrandPrizeBannerRes grand_prize_banner
                         * @property {number|null} [next_refresh_time] GetGrandPrizeBannerRes next_refresh_time
                         */

                        /**
                         * Constructs a new GetGrandPrizeBannerRes.
                         * @memberof net.ihago.game.api.notify
                         * @classdesc Represents a GetGrandPrizeBannerRes.
                         * @implements IGetGrandPrizeBannerRes
                         * @constructor
                         * @param {net.ihago.game.api.notify.IGetGrandPrizeBannerRes=} [properties] Properties to set
                         */
                        function GetGrandPrizeBannerRes(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * GetGrandPrizeBannerRes result.
                         * @member {common.IResult|null|undefined} result
                         * @memberof net.ihago.game.api.notify.GetGrandPrizeBannerRes
                         * @instance
                         */
                        GetGrandPrizeBannerRes.prototype.result = null;

                        /**
                         * GetGrandPrizeBannerRes game_id.
                         * @member {string} game_id
                         * @memberof net.ihago.game.api.notify.GetGrandPrizeBannerRes
                         * @instance
                         */
                        GetGrandPrizeBannerRes.prototype.game_id = "";

                        /**
                         * GetGrandPrizeBannerRes grand_prize_banner.
                         * @member {net.ihago.game.api.notify.IGrandPrizeBanner|null|undefined} grand_prize_banner
                         * @memberof net.ihago.game.api.notify.GetGrandPrizeBannerRes
                         * @instance
                         */
                        GetGrandPrizeBannerRes.prototype.grand_prize_banner = null;

                        /**
                         * GetGrandPrizeBannerRes next_refresh_time.
                         * @member {number} next_refresh_time
                         * @memberof net.ihago.game.api.notify.GetGrandPrizeBannerRes
                         * @instance
                         */
                        GetGrandPrizeBannerRes.prototype.next_refresh_time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * Creates a new GetGrandPrizeBannerRes instance using the specified properties.
                         * @function create
                         * @memberof net.ihago.game.api.notify.GetGrandPrizeBannerRes
                         * @static
                         * @param {net.ihago.game.api.notify.IGetGrandPrizeBannerRes=} [properties] Properties to set
                         * @returns {net.ihago.game.api.notify.GetGrandPrizeBannerRes} GetGrandPrizeBannerRes instance
                         */
                        GetGrandPrizeBannerRes.create = function create(properties) {
                            return new GetGrandPrizeBannerRes(properties);
                        };

                        /**
                         * Encodes the specified GetGrandPrizeBannerRes message. Does not implicitly {@link net.ihago.game.api.notify.GetGrandPrizeBannerRes.verify|verify} messages.
                         * @function encode
                         * @memberof net.ihago.game.api.notify.GetGrandPrizeBannerRes
                         * @static
                         * @param {net.ihago.game.api.notify.IGetGrandPrizeBannerRes} message GetGrandPrizeBannerRes message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        GetGrandPrizeBannerRes.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.result != null && message.hasOwnProperty("result"))
                                $root.common.Result.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.game_id != null && message.hasOwnProperty("game_id"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.game_id);
                            if (message.grand_prize_banner != null && message.hasOwnProperty("grand_prize_banner"))
                                $root.net.ihago.game.api.notify.GrandPrizeBanner.encode(message.grand_prize_banner, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                            if (message.next_refresh_time != null && message.hasOwnProperty("next_refresh_time"))
                                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.next_refresh_time);
                            return writer;
                        };

                        /**
                         * Decodes a GetGrandPrizeBannerRes message from the specified reader or buffer.
                         * @function decode
                         * @memberof net.ihago.game.api.notify.GetGrandPrizeBannerRes
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {net.ihago.game.api.notify.GetGrandPrizeBannerRes} GetGrandPrizeBannerRes
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        GetGrandPrizeBannerRes.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.net.ihago.game.api.notify.GetGrandPrizeBannerRes();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.result = $root.common.Result.decode(reader, reader.uint32());
                                    break;
                                case 2:
                                    message.game_id = reader.string();
                                    break;
                                case 3:
                                    message.grand_prize_banner = $root.net.ihago.game.api.notify.GrandPrizeBanner.decode(reader, reader.uint32());
                                    break;
                                case 4:
                                    message.next_refresh_time = reader.int64();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        return GetGrandPrizeBannerRes;
                    })();

                    notify.LikeReq = (function() {

                        /**
                         * Properties of a LikeReq.
                         * @memberof net.ihago.game.api.notify
                         * @interface ILikeReq
                         * @property {number|null} [user_id] LikeReq user_id
                         * @property {string|null} [game_id] LikeReq game_id
                         * @property {string|null} [banner_id] LikeReq banner_id
                         * @property {string|null} [cid] LikeReq cid
                         * @property {string|null} [game_ver] LikeReq game_ver
                         */

                        /**
                         * Constructs a new LikeReq.
                         * @memberof net.ihago.game.api.notify
                         * @classdesc Represents a LikeReq.
                         * @implements ILikeReq
                         * @constructor
                         * @param {net.ihago.game.api.notify.ILikeReq=} [properties] Properties to set
                         */
                        function LikeReq(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * LikeReq user_id.
                         * @member {number} user_id
                         * @memberof net.ihago.game.api.notify.LikeReq
                         * @instance
                         */
                        LikeReq.prototype.user_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * LikeReq game_id.
                         * @member {string} game_id
                         * @memberof net.ihago.game.api.notify.LikeReq
                         * @instance
                         */
                        LikeReq.prototype.game_id = "";

                        /**
                         * LikeReq banner_id.
                         * @member {string} banner_id
                         * @memberof net.ihago.game.api.notify.LikeReq
                         * @instance
                         */
                        LikeReq.prototype.banner_id = "";

                        /**
                         * LikeReq cid.
                         * @member {string} cid
                         * @memberof net.ihago.game.api.notify.LikeReq
                         * @instance
                         */
                        LikeReq.prototype.cid = "";

                        /**
                         * LikeReq game_ver.
                         * @member {string} game_ver
                         * @memberof net.ihago.game.api.notify.LikeReq
                         * @instance
                         */
                        LikeReq.prototype.game_ver = "";

                        /**
                         * Creates a new LikeReq instance using the specified properties.
                         * @function create
                         * @memberof net.ihago.game.api.notify.LikeReq
                         * @static
                         * @param {net.ihago.game.api.notify.ILikeReq=} [properties] Properties to set
                         * @returns {net.ihago.game.api.notify.LikeReq} LikeReq instance
                         */
                        LikeReq.create = function create(properties) {
                            return new LikeReq(properties);
                        };

                        /**
                         * Encodes the specified LikeReq message. Does not implicitly {@link net.ihago.game.api.notify.LikeReq.verify|verify} messages.
                         * @function encode
                         * @memberof net.ihago.game.api.notify.LikeReq
                         * @static
                         * @param {net.ihago.game.api.notify.ILikeReq} message LikeReq message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        LikeReq.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.user_id != null && message.hasOwnProperty("user_id"))
                                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.user_id);
                            if (message.game_id != null && message.hasOwnProperty("game_id"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.game_id);
                            if (message.banner_id != null && message.hasOwnProperty("banner_id"))
                                writer.uint32(/* id 3, wireType 2 =*/26).string(message.banner_id);
                            if (message.cid != null && message.hasOwnProperty("cid"))
                                writer.uint32(/* id 4, wireType 2 =*/34).string(message.cid);
                            if (message.game_ver != null && message.hasOwnProperty("game_ver"))
                                writer.uint32(/* id 5, wireType 2 =*/42).string(message.game_ver);
                            return writer;
                        };

                        /**
                         * Decodes a LikeReq message from the specified reader or buffer.
                         * @function decode
                         * @memberof net.ihago.game.api.notify.LikeReq
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {net.ihago.game.api.notify.LikeReq} LikeReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        LikeReq.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.net.ihago.game.api.notify.LikeReq();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.user_id = reader.int64();
                                    break;
                                case 2:
                                    message.game_id = reader.string();
                                    break;
                                case 3:
                                    message.banner_id = reader.string();
                                    break;
                                case 4:
                                    message.cid = reader.string();
                                    break;
                                case 5:
                                    message.game_ver = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        return LikeReq;
                    })();

                    notify.LikeRes = (function() {

                        /**
                         * Properties of a LikeRes.
                         * @memberof net.ihago.game.api.notify
                         * @interface ILikeRes
                         * @property {common.IResult|null} [result] LikeRes result
                         * @property {string|null} [banner_id] LikeRes banner_id
                         * @property {number|null} [like_count] LikeRes like_count
                         * @property {number|null} [my_like_count] LikeRes my_like_count
                         * @property {number|null} [user_like_limit] LikeRes user_like_limit
                         * @property {commodity.ICommodityReward|null} [reward] LikeRes reward
                         * @property {number|null} [rewarded_cnt] LikeRes rewarded_cnt
                         */

                        /**
                         * Constructs a new LikeRes.
                         * @memberof net.ihago.game.api.notify
                         * @classdesc Represents a LikeRes.
                         * @implements ILikeRes
                         * @constructor
                         * @param {net.ihago.game.api.notify.ILikeRes=} [properties] Properties to set
                         */
                        function LikeRes(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * LikeRes result.
                         * @member {common.IResult|null|undefined} result
                         * @memberof net.ihago.game.api.notify.LikeRes
                         * @instance
                         */
                        LikeRes.prototype.result = null;

                        /**
                         * LikeRes banner_id.
                         * @member {string} banner_id
                         * @memberof net.ihago.game.api.notify.LikeRes
                         * @instance
                         */
                        LikeRes.prototype.banner_id = "";

                        /**
                         * LikeRes like_count.
                         * @member {number} like_count
                         * @memberof net.ihago.game.api.notify.LikeRes
                         * @instance
                         */
                        LikeRes.prototype.like_count = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * LikeRes my_like_count.
                         * @member {number} my_like_count
                         * @memberof net.ihago.game.api.notify.LikeRes
                         * @instance
                         */
                        LikeRes.prototype.my_like_count = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * LikeRes user_like_limit.
                         * @member {number} user_like_limit
                         * @memberof net.ihago.game.api.notify.LikeRes
                         * @instance
                         */
                        LikeRes.prototype.user_like_limit = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * LikeRes reward.
                         * @member {commodity.ICommodityReward|null|undefined} reward
                         * @memberof net.ihago.game.api.notify.LikeRes
                         * @instance
                         */
                        LikeRes.prototype.reward = null;

                        /**
                         * LikeRes rewarded_cnt.
                         * @member {number} rewarded_cnt
                         * @memberof net.ihago.game.api.notify.LikeRes
                         * @instance
                         */
                        LikeRes.prototype.rewarded_cnt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * Creates a new LikeRes instance using the specified properties.
                         * @function create
                         * @memberof net.ihago.game.api.notify.LikeRes
                         * @static
                         * @param {net.ihago.game.api.notify.ILikeRes=} [properties] Properties to set
                         * @returns {net.ihago.game.api.notify.LikeRes} LikeRes instance
                         */
                        LikeRes.create = function create(properties) {
                            return new LikeRes(properties);
                        };

                        /**
                         * Encodes the specified LikeRes message. Does not implicitly {@link net.ihago.game.api.notify.LikeRes.verify|verify} messages.
                         * @function encode
                         * @memberof net.ihago.game.api.notify.LikeRes
                         * @static
                         * @param {net.ihago.game.api.notify.ILikeRes} message LikeRes message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        LikeRes.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.result != null && message.hasOwnProperty("result"))
                                $root.common.Result.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.banner_id != null && message.hasOwnProperty("banner_id"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.banner_id);
                            if (message.like_count != null && message.hasOwnProperty("like_count"))
                                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.like_count);
                            if (message.my_like_count != null && message.hasOwnProperty("my_like_count"))
                                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.my_like_count);
                            if (message.user_like_limit != null && message.hasOwnProperty("user_like_limit"))
                                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.user_like_limit);
                            if (message.reward != null && message.hasOwnProperty("reward"))
                                $root.commodity.CommodityReward.encode(message.reward, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                            if (message.rewarded_cnt != null && message.hasOwnProperty("rewarded_cnt"))
                                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.rewarded_cnt);
                            return writer;
                        };

                        /**
                         * Decodes a LikeRes message from the specified reader or buffer.
                         * @function decode
                         * @memberof net.ihago.game.api.notify.LikeRes
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {net.ihago.game.api.notify.LikeRes} LikeRes
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        LikeRes.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.net.ihago.game.api.notify.LikeRes();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.result = $root.common.Result.decode(reader, reader.uint32());
                                    break;
                                case 2:
                                    message.banner_id = reader.string();
                                    break;
                                case 3:
                                    message.like_count = reader.int64();
                                    break;
                                case 4:
                                    message.my_like_count = reader.int64();
                                    break;
                                case 5:
                                    message.user_like_limit = reader.int64();
                                    break;
                                case 6:
                                    message.reward = $root.commodity.CommodityReward.decode(reader, reader.uint32());
                                    break;
                                case 7:
                                    message.rewarded_cnt = reader.int64();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        return LikeRes;
                    })();

                    return notify;
                })();

                return api;
            })();

            return game;
        })();

        ihago.ymicro = (function() {

            /**
             * Namespace ymicro.
             * @memberof net.ihago
             * @namespace
             */
            var ymicro = {};

            ymicro.api = (function() {

                /**
                 * Namespace api.
                 * @memberof net.ihago.ymicro
                 * @namespace
                 */
                var api = {};

                api.revenue = (function() {

                    /**
                     * Namespace revenue.
                     * @memberof net.ihago.ymicro.api
                     * @namespace
                     */
                    var revenue = {};

                    revenue.Turnover = (function() {

                        /**
                         * Constructs a new Turnover service.
                         * @memberof net.ihago.ymicro.api.revenue
                         * @classdesc Represents a Turnover
                         * @extends $protobuf.rpc.Service
                         * @constructor
                         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                         */
                        function Turnover(rpcImpl, requestDelimited, responseDelimited) {
                            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                        }

                        (Turnover.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Turnover;

                        /**
                         * Creates new Turnover service using the specified rpc implementation.
                         * @function create
                         * @memberof net.ihago.ymicro.api.revenue.Turnover
                         * @static
                         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                         * @returns {Turnover} RPC service. Useful where requests and/or responses are streamed.
                         */
                        Turnover.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                            return new this(rpcImpl, requestDelimited, responseDelimited);
                        };

                        /**
                         * Callback as used by {@link net.ihago.ymicro.api.revenue.Turnover#queryCouponSummary}.
                         * @memberof net.ihago.ymicro.api.revenue.Turnover
                         * @typedef QueryCouponSummaryCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {net.ihago.ymicro.api.revenue.QueryCouponSummaryRes} [response] QueryCouponSummaryRes
                         */

                        /**
                         * Calls QueryCouponSummary.
                         * @function queryCouponSummary
                         * @memberof net.ihago.ymicro.api.revenue.Turnover
                         * @instance
                         * @param {net.ihago.ymicro.api.revenue.IQueryCouponSummaryReq} request QueryCouponSummaryReq message or plain object
                         * @param {net.ihago.ymicro.api.revenue.Turnover.QueryCouponSummaryCallback} callback Node-style callback called with the error, if any, and QueryCouponSummaryRes
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(Turnover.prototype.queryCouponSummary = function queryCouponSummary(request, callback) {
                            return this.rpcCall(queryCouponSummary, $root.net.ihago.ymicro.api.revenue.QueryCouponSummaryReq, $root.net.ihago.ymicro.api.revenue.QueryCouponSummaryRes, request, callback);
                        }, "name", { value: "QueryCouponSummary" });

                        /**
                         * Calls QueryCouponSummary.
                         * @function queryCouponSummary
                         * @memberof net.ihago.ymicro.api.revenue.Turnover
                         * @instance
                         * @param {net.ihago.ymicro.api.revenue.IQueryCouponSummaryReq} request QueryCouponSummaryReq message or plain object
                         * @returns {Promise<net.ihago.ymicro.api.revenue.QueryCouponSummaryRes>} Promise
                         * @variation 2
                         */

                        /**
                         * Callback as used by {@link net.ihago.ymicro.api.revenue.Turnover#readMessage}.
                         * @memberof net.ihago.ymicro.api.revenue.Turnover
                         * @typedef ReadMessageCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {net.ihago.ymicro.api.revenue.ReadMessageRes} [response] ReadMessageRes
                         */

                        /**
                         * Calls ReadMessage.
                         * @function readMessage
                         * @memberof net.ihago.ymicro.api.revenue.Turnover
                         * @instance
                         * @param {net.ihago.ymicro.api.revenue.IReadMessageReq} request ReadMessageReq message or plain object
                         * @param {net.ihago.ymicro.api.revenue.Turnover.ReadMessageCallback} callback Node-style callback called with the error, if any, and ReadMessageRes
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(Turnover.prototype.readMessage = function readMessage(request, callback) {
                            return this.rpcCall(readMessage, $root.net.ihago.ymicro.api.revenue.ReadMessageReq, $root.net.ihago.ymicro.api.revenue.ReadMessageRes, request, callback);
                        }, "name", { value: "ReadMessage" });

                        /**
                         * Calls ReadMessage.
                         * @function readMessage
                         * @memberof net.ihago.ymicro.api.revenue.Turnover
                         * @instance
                         * @param {net.ihago.ymicro.api.revenue.IReadMessageReq} request ReadMessageReq message or plain object
                         * @returns {Promise<net.ihago.ymicro.api.revenue.ReadMessageRes>} Promise
                         * @variation 2
                         */

                        return Turnover;
                    })();

                    /**
                     * RetCode enum.
                     * @name net.ihago.ymicro.api.revenue.RetCode
                     * @enum {string}
                     * @property {number} kRetCodeOk=0 kRetCodeOk value
                     * @property {number} kTokenUidNotExist=1001 kTokenUidNotExist value
                     * @property {number} kParamError=1002 kParamError value
                     * @property {number} kParamSnameError=1003 kParamSnameError value
                     * @property {number} kParamSeqIdError=1004 kParamSeqIdError value
                     * @property {number} kBatchGetOverLimit=1005 kBatchGetOverLimit value
                     * @property {number} kServerDenied=1006 kServerDenied value
                     * @property {number} kMySqlExecError=2001 kMySqlExecError value
                     * @property {number} kRedisError=2002 kRedisError value
                     * @property {number} kMoneyTurnOverError=3000 kMoneyTurnOverError value
                     * @property {number} kInvokingThriftError=3001 kInvokingThriftError value
                     * @property {number} kAddPropsActivityLimit=3002 kAddPropsActivityLimit value
                     * @property {number} kAddPropsActivityRepeated=3003 kAddPropsActivityRepeated value
                     * @property {number} kAddPropsConcurrentUpdateErr=3004 kAddPropsConcurrentUpdateErr value
                     * @property {number} kIssueCurrencyNewExpire=3010 kIssueCurrencyNewExpire value
                     * @property {number} kIssueCurrencyNewTotalLimit=3011 kIssueCurrencyNewTotalLimit value
                     * @property {number} kIssueCurrencyNewUserLimit=3012 kIssueCurrencyNewUserLimit value
                     * @property {number} kIssueCurrencyRepeated=3013 kIssueCurrencyRepeated value
                     * @property {number} kIssueCurrencyConcurrentUpdateErr=3014 kIssueCurrencyConcurrentUpdateErr value
                     * @property {number} KIssueInnerAccount=3015 KIssueInnerAccount value
                     * @property {number} kIssueCouponLimit=3020 kIssueCouponLimit value
                     * @property {number} kIssueCouponRepeated=3021 kIssueCouponRepeated value
                     * @property {number} kPayProductParamError=3030 kPayProductParamError value
                     * @property {number} kPayProductLimit=3031 kPayProductLimit value
                     * @property {number} kPayProductOrderError=3032 kPayProductOrderError value
                     * @property {number} kPayProductOrderFaild=3033 kPayProductOrderFaild value
                     * @property {number} kPayProductWaitePay=3034 kPayProductWaitePay value
                     * @property {number} kPayProductOrderRepeat=3035 kPayProductOrderRepeat value
                     * @property {number} kPayProductOrderClose=3036 kPayProductOrderClose value
                     * @property {number} kPayProductBalanceNoEnough=3037 kPayProductBalanceNoEnough value
                     * @property {number} kPayProductOrderException=3038 kPayProductOrderException value
                     * @property {number} kPayProductFreeze=3039 kPayProductFreeze value
                     * @property {number} kPayProductGoldToDiamondRateNotMatch=3040 kPayProductGoldToDiamondRateNotMatch value
                     * @property {number} kPayProductOrderAlreadyDeduct=3041 kPayProductOrderAlreadyDeduct value
                     * @property {number} kConsumePayNotBuy=3200 kConsumePayNotBuy value
                     * @property {number} kConsumePayNotDiamond=3201 kConsumePayNotDiamond value
                     * @property {number} kConsumePayParamErr=3202 kConsumePayParamErr value
                     * @property {number} kConsumePayRepeated=3203 kConsumePayRepeated value
                     * @property {number} kConsumePayServerErr=3204 kConsumePayServerErr value
                     * @property {number} kConsumePayConcurrentErr=3205 kConsumePayConcurrentErr value
                     * @property {number} kConsumePayFreeze=3206 kConsumePayFreeze value
                     * @property {number} kBatchConsumeAccountNotExist=3250 kBatchConsumeAccountNotExist value
                     * @property {number} KBatchConsumeConcurrentErr=3251 KBatchConsumeConcurrentErr value
                     * @property {number} kBatchConsumeFrozenAccount=3252 kBatchConsumeFrozenAccount value
                     * @property {number} kBatchConsumeNotEnough=3253 kBatchConsumeNotEnough value
                     * @property {number} kBatchConsumeParamErr=3254 kBatchConsumeParamErr value
                     * @property {number} kBatchConsumeSeqRepeat=3255 kBatchConsumeSeqRepeat value
                     * @property {number} kBatchConsumeServerErr=3256 kBatchConsumeServerErr value
                     * @property {number} kOverIssuedCurrencyAndProps=3300 kOverIssuedCurrencyAndProps value
                     * @property {number} kExchangePropLimited=3400 kExchangePropLimited value
                     * @property {number} kExchangePropConfigError=3401 kExchangePropConfigError value
                     * @property {number} kExchangePropNotEnough=3402 kExchangePropNotEnough value
                     * @property {number} kExchangePropSeqRepeated=3403 kExchangePropSeqRepeated value
                     * @property {number} kExchangePropParamErr=3404 kExchangePropParamErr value
                     * @property {number} kExchangePropServerErr=3405 kExchangePropServerErr value
                     * @property {number} kExchangePropNotExists=3406 kExchangePropNotExists value
                     * @property {number} kRiskSnameError=4000 kRiskSnameError value
                     * @property {number} kRiskActivityIdError=4001 kRiskActivityIdError value
                     * @property {number} kRiskUIDError=4002 kRiskUIDError value
                     * @property {number} kRiskSnameActivityIdUIDError=4003 kRiskSnameActivityIdUIDError value
                     * @property {number} kRiskSignError=4004 kRiskSignError value
                     */
                    revenue.RetCode = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "kRetCodeOk"] = 0;
                        values[valuesById[1001] = "kTokenUidNotExist"] = 1001;
                        values[valuesById[1002] = "kParamError"] = 1002;
                        values[valuesById[1003] = "kParamSnameError"] = 1003;
                        values[valuesById[1004] = "kParamSeqIdError"] = 1004;
                        values[valuesById[1005] = "kBatchGetOverLimit"] = 1005;
                        values[valuesById[1006] = "kServerDenied"] = 1006;
                        values[valuesById[2001] = "kMySqlExecError"] = 2001;
                        values[valuesById[2002] = "kRedisError"] = 2002;
                        values[valuesById[3000] = "kMoneyTurnOverError"] = 3000;
                        values[valuesById[3001] = "kInvokingThriftError"] = 3001;
                        values[valuesById[3002] = "kAddPropsActivityLimit"] = 3002;
                        values[valuesById[3003] = "kAddPropsActivityRepeated"] = 3003;
                        values[valuesById[3004] = "kAddPropsConcurrentUpdateErr"] = 3004;
                        values[valuesById[3010] = "kIssueCurrencyNewExpire"] = 3010;
                        values[valuesById[3011] = "kIssueCurrencyNewTotalLimit"] = 3011;
                        values[valuesById[3012] = "kIssueCurrencyNewUserLimit"] = 3012;
                        values[valuesById[3013] = "kIssueCurrencyRepeated"] = 3013;
                        values[valuesById[3014] = "kIssueCurrencyConcurrentUpdateErr"] = 3014;
                        values[valuesById[3015] = "KIssueInnerAccount"] = 3015;
                        values[valuesById[3020] = "kIssueCouponLimit"] = 3020;
                        values[valuesById[3021] = "kIssueCouponRepeated"] = 3021;
                        values[valuesById[3030] = "kPayProductParamError"] = 3030;
                        values[valuesById[3031] = "kPayProductLimit"] = 3031;
                        values[valuesById[3032] = "kPayProductOrderError"] = 3032;
                        values[valuesById[3033] = "kPayProductOrderFaild"] = 3033;
                        values[valuesById[3034] = "kPayProductWaitePay"] = 3034;
                        values[valuesById[3035] = "kPayProductOrderRepeat"] = 3035;
                        values[valuesById[3036] = "kPayProductOrderClose"] = 3036;
                        values[valuesById[3037] = "kPayProductBalanceNoEnough"] = 3037;
                        values[valuesById[3038] = "kPayProductOrderException"] = 3038;
                        values[valuesById[3039] = "kPayProductFreeze"] = 3039;
                        values[valuesById[3040] = "kPayProductGoldToDiamondRateNotMatch"] = 3040;
                        values[valuesById[3041] = "kPayProductOrderAlreadyDeduct"] = 3041;
                        values[valuesById[3200] = "kConsumePayNotBuy"] = 3200;
                        values[valuesById[3201] = "kConsumePayNotDiamond"] = 3201;
                        values[valuesById[3202] = "kConsumePayParamErr"] = 3202;
                        values[valuesById[3203] = "kConsumePayRepeated"] = 3203;
                        values[valuesById[3204] = "kConsumePayServerErr"] = 3204;
                        values[valuesById[3205] = "kConsumePayConcurrentErr"] = 3205;
                        values[valuesById[3206] = "kConsumePayFreeze"] = 3206;
                        values[valuesById[3250] = "kBatchConsumeAccountNotExist"] = 3250;
                        values[valuesById[3251] = "KBatchConsumeConcurrentErr"] = 3251;
                        values[valuesById[3252] = "kBatchConsumeFrozenAccount"] = 3252;
                        values[valuesById[3253] = "kBatchConsumeNotEnough"] = 3253;
                        values[valuesById[3254] = "kBatchConsumeParamErr"] = 3254;
                        values[valuesById[3255] = "kBatchConsumeSeqRepeat"] = 3255;
                        values[valuesById[3256] = "kBatchConsumeServerErr"] = 3256;
                        values[valuesById[3300] = "kOverIssuedCurrencyAndProps"] = 3300;
                        values[valuesById[3400] = "kExchangePropLimited"] = 3400;
                        values[valuesById[3401] = "kExchangePropConfigError"] = 3401;
                        values[valuesById[3402] = "kExchangePropNotEnough"] = 3402;
                        values[valuesById[3403] = "kExchangePropSeqRepeated"] = 3403;
                        values[valuesById[3404] = "kExchangePropParamErr"] = 3404;
                        values[valuesById[3405] = "kExchangePropServerErr"] = 3405;
                        values[valuesById[3406] = "kExchangePropNotExists"] = 3406;
                        values[valuesById[4000] = "kRiskSnameError"] = 4000;
                        values[valuesById[4001] = "kRiskActivityIdError"] = 4001;
                        values[valuesById[4002] = "kRiskUIDError"] = 4002;
                        values[valuesById[4003] = "kRiskSnameActivityIdUIDError"] = 4003;
                        values[valuesById[4004] = "kRiskSignError"] = 4004;
                        return values;
                    })();

                    revenue.QueryCouponSummaryReq = (function() {

                        /**
                         * Properties of a QueryCouponSummaryReq.
                         * @memberof net.ihago.ymicro.api.revenue
                         * @interface IQueryCouponSummaryReq
                         * @property {number|null} [commodity_type] QueryCouponSummaryReq commodity_type
                         * @property {boolean|null} [need_msg_id] QueryCouponSummaryReq need_msg_id
                         * @property {string|null} [game_id] QueryCouponSummaryReq game_id
                         * @property {string|null} [lang] QueryCouponSummaryReq lang
                         */

                        /**
                         * Constructs a new QueryCouponSummaryReq.
                         * @memberof net.ihago.ymicro.api.revenue
                         * @classdesc Represents a QueryCouponSummaryReq.
                         * @implements IQueryCouponSummaryReq
                         * @constructor
                         * @param {net.ihago.ymicro.api.revenue.IQueryCouponSummaryReq=} [properties] Properties to set
                         */
                        function QueryCouponSummaryReq(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * QueryCouponSummaryReq commodity_type.
                         * @member {number} commodity_type
                         * @memberof net.ihago.ymicro.api.revenue.QueryCouponSummaryReq
                         * @instance
                         */
                        QueryCouponSummaryReq.prototype.commodity_type = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * QueryCouponSummaryReq need_msg_id.
                         * @member {boolean} need_msg_id
                         * @memberof net.ihago.ymicro.api.revenue.QueryCouponSummaryReq
                         * @instance
                         */
                        QueryCouponSummaryReq.prototype.need_msg_id = false;

                        /**
                         * QueryCouponSummaryReq game_id.
                         * @member {string} game_id
                         * @memberof net.ihago.ymicro.api.revenue.QueryCouponSummaryReq
                         * @instance
                         */
                        QueryCouponSummaryReq.prototype.game_id = "";

                        /**
                         * QueryCouponSummaryReq lang.
                         * @member {string} lang
                         * @memberof net.ihago.ymicro.api.revenue.QueryCouponSummaryReq
                         * @instance
                         */
                        QueryCouponSummaryReq.prototype.lang = "";

                        /**
                         * Creates a new QueryCouponSummaryReq instance using the specified properties.
                         * @function create
                         * @memberof net.ihago.ymicro.api.revenue.QueryCouponSummaryReq
                         * @static
                         * @param {net.ihago.ymicro.api.revenue.IQueryCouponSummaryReq=} [properties] Properties to set
                         * @returns {net.ihago.ymicro.api.revenue.QueryCouponSummaryReq} QueryCouponSummaryReq instance
                         */
                        QueryCouponSummaryReq.create = function create(properties) {
                            return new QueryCouponSummaryReq(properties);
                        };

                        /**
                         * Encodes the specified QueryCouponSummaryReq message. Does not implicitly {@link net.ihago.ymicro.api.revenue.QueryCouponSummaryReq.verify|verify} messages.
                         * @function encode
                         * @memberof net.ihago.ymicro.api.revenue.QueryCouponSummaryReq
                         * @static
                         * @param {net.ihago.ymicro.api.revenue.IQueryCouponSummaryReq} message QueryCouponSummaryReq message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        QueryCouponSummaryReq.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.commodity_type != null && message.hasOwnProperty("commodity_type"))
                                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.commodity_type);
                            if (message.need_msg_id != null && message.hasOwnProperty("need_msg_id"))
                                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.need_msg_id);
                            if (message.game_id != null && message.hasOwnProperty("game_id"))
                                writer.uint32(/* id 3, wireType 2 =*/26).string(message.game_id);
                            if (message.lang != null && message.hasOwnProperty("lang"))
                                writer.uint32(/* id 4, wireType 2 =*/34).string(message.lang);
                            return writer;
                        };

                        /**
                         * Decodes a QueryCouponSummaryReq message from the specified reader or buffer.
                         * @function decode
                         * @memberof net.ihago.ymicro.api.revenue.QueryCouponSummaryReq
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {net.ihago.ymicro.api.revenue.QueryCouponSummaryReq} QueryCouponSummaryReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        QueryCouponSummaryReq.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.net.ihago.ymicro.api.revenue.QueryCouponSummaryReq();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.commodity_type = reader.int64();
                                    break;
                                case 2:
                                    message.need_msg_id = reader.bool();
                                    break;
                                case 3:
                                    message.game_id = reader.string();
                                    break;
                                case 4:
                                    message.lang = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        return QueryCouponSummaryReq;
                    })();

                    revenue.CouponSummaryItem = (function() {

                        /**
                         * Properties of a CouponSummaryItem.
                         * @memberof net.ihago.ymicro.api.revenue
                         * @interface ICouponSummaryItem
                         * @property {number|null} [coupon_id] CouponSummaryItem coupon_id
                         * @property {number|null} [count] CouponSummaryItem count
                         * @property {Array.<number>|null} [coupon_id_list] CouponSummaryItem coupon_id_list
                         * @property {Array.<number>|null} [msg_id_list] CouponSummaryItem msg_id_list
                         * @property {number|null} [nearest_expire_at] CouponSummaryItem nearest_expire_at
                         * @property {boolean|null} [redDot] CouponSummaryItem redDot
                         * @property {boolean|null} [newTag] CouponSummaryItem newTag
                         */

                        /**
                         * Constructs a new CouponSummaryItem.
                         * @memberof net.ihago.ymicro.api.revenue
                         * @classdesc Represents a CouponSummaryItem.
                         * @implements ICouponSummaryItem
                         * @constructor
                         * @param {net.ihago.ymicro.api.revenue.ICouponSummaryItem=} [properties] Properties to set
                         */
                        function CouponSummaryItem(properties) {
                            this.coupon_id_list = [];
                            this.msg_id_list = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * CouponSummaryItem coupon_id.
                         * @member {number} coupon_id
                         * @memberof net.ihago.ymicro.api.revenue.CouponSummaryItem
                         * @instance
                         */
                        CouponSummaryItem.prototype.coupon_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * CouponSummaryItem count.
                         * @member {number} count
                         * @memberof net.ihago.ymicro.api.revenue.CouponSummaryItem
                         * @instance
                         */
                        CouponSummaryItem.prototype.count = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * CouponSummaryItem coupon_id_list.
                         * @member {Array.<number>} coupon_id_list
                         * @memberof net.ihago.ymicro.api.revenue.CouponSummaryItem
                         * @instance
                         */
                        CouponSummaryItem.prototype.coupon_id_list = $util.emptyArray;

                        /**
                         * CouponSummaryItem msg_id_list.
                         * @member {Array.<number>} msg_id_list
                         * @memberof net.ihago.ymicro.api.revenue.CouponSummaryItem
                         * @instance
                         */
                        CouponSummaryItem.prototype.msg_id_list = $util.emptyArray;

                        /**
                         * CouponSummaryItem nearest_expire_at.
                         * @member {number} nearest_expire_at
                         * @memberof net.ihago.ymicro.api.revenue.CouponSummaryItem
                         * @instance
                         */
                        CouponSummaryItem.prototype.nearest_expire_at = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * CouponSummaryItem redDot.
                         * @member {boolean} redDot
                         * @memberof net.ihago.ymicro.api.revenue.CouponSummaryItem
                         * @instance
                         */
                        CouponSummaryItem.prototype.redDot = false;

                        /**
                         * CouponSummaryItem newTag.
                         * @member {boolean} newTag
                         * @memberof net.ihago.ymicro.api.revenue.CouponSummaryItem
                         * @instance
                         */
                        CouponSummaryItem.prototype.newTag = false;

                        /**
                         * Creates a new CouponSummaryItem instance using the specified properties.
                         * @function create
                         * @memberof net.ihago.ymicro.api.revenue.CouponSummaryItem
                         * @static
                         * @param {net.ihago.ymicro.api.revenue.ICouponSummaryItem=} [properties] Properties to set
                         * @returns {net.ihago.ymicro.api.revenue.CouponSummaryItem} CouponSummaryItem instance
                         */
                        CouponSummaryItem.create = function create(properties) {
                            return new CouponSummaryItem(properties);
                        };

                        /**
                         * Encodes the specified CouponSummaryItem message. Does not implicitly {@link net.ihago.ymicro.api.revenue.CouponSummaryItem.verify|verify} messages.
                         * @function encode
                         * @memberof net.ihago.ymicro.api.revenue.CouponSummaryItem
                         * @static
                         * @param {net.ihago.ymicro.api.revenue.ICouponSummaryItem} message CouponSummaryItem message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        CouponSummaryItem.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.coupon_id != null && message.hasOwnProperty("coupon_id"))
                                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.coupon_id);
                            if (message.count != null && message.hasOwnProperty("count"))
                                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.count);
                            if (message.coupon_id_list != null && message.coupon_id_list.length) {
                                writer.uint32(/* id 4, wireType 2 =*/34).fork();
                                for (var i = 0; i < message.coupon_id_list.length; ++i)
                                    writer.int64(message.coupon_id_list[i]);
                                writer.ldelim();
                            }
                            if (message.msg_id_list != null && message.msg_id_list.length) {
                                writer.uint32(/* id 5, wireType 2 =*/42).fork();
                                for (var i = 0; i < message.msg_id_list.length; ++i)
                                    writer.int64(message.msg_id_list[i]);
                                writer.ldelim();
                            }
                            if (message.nearest_expire_at != null && message.hasOwnProperty("nearest_expire_at"))
                                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.nearest_expire_at);
                            if (message.redDot != null && message.hasOwnProperty("redDot"))
                                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.redDot);
                            if (message.newTag != null && message.hasOwnProperty("newTag"))
                                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.newTag);
                            return writer;
                        };

                        /**
                         * Decodes a CouponSummaryItem message from the specified reader or buffer.
                         * @function decode
                         * @memberof net.ihago.ymicro.api.revenue.CouponSummaryItem
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {net.ihago.ymicro.api.revenue.CouponSummaryItem} CouponSummaryItem
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        CouponSummaryItem.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.net.ihago.ymicro.api.revenue.CouponSummaryItem();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.coupon_id = reader.int64();
                                    break;
                                case 2:
                                    message.count = reader.int64();
                                    break;
                                case 4:
                                    if (!(message.coupon_id_list && message.coupon_id_list.length))
                                        message.coupon_id_list = [];
                                    if ((tag & 7) === 2) {
                                        var end2 = reader.uint32() + reader.pos;
                                        while (reader.pos < end2)
                                            message.coupon_id_list.push(reader.int64());
                                    } else
                                        message.coupon_id_list.push(reader.int64());
                                    break;
                                case 5:
                                    if (!(message.msg_id_list && message.msg_id_list.length))
                                        message.msg_id_list = [];
                                    if ((tag & 7) === 2) {
                                        var end2 = reader.uint32() + reader.pos;
                                        while (reader.pos < end2)
                                            message.msg_id_list.push(reader.int64());
                                    } else
                                        message.msg_id_list.push(reader.int64());
                                    break;
                                case 6:
                                    message.nearest_expire_at = reader.int64();
                                    break;
                                case 7:
                                    message.redDot = reader.bool();
                                    break;
                                case 8:
                                    message.newTag = reader.bool();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        return CouponSummaryItem;
                    })();

                    revenue.QueryCouponSummaryRes = (function() {

                        /**
                         * Properties of a QueryCouponSummaryRes.
                         * @memberof net.ihago.ymicro.api.revenue
                         * @interface IQueryCouponSummaryRes
                         * @property {common.IResult|null} [result] QueryCouponSummaryRes result
                         * @property {boolean|null} [msg_notification] QueryCouponSummaryRes msg_notification
                         * @property {Array.<net.ihago.ymicro.api.revenue.ICouponSummaryItem>|null} [items] QueryCouponSummaryRes items
                         * @property {string|null} [gameTips] QueryCouponSummaryRes gameTips
                         */

                        /**
                         * Constructs a new QueryCouponSummaryRes.
                         * @memberof net.ihago.ymicro.api.revenue
                         * @classdesc Represents a QueryCouponSummaryRes.
                         * @implements IQueryCouponSummaryRes
                         * @constructor
                         * @param {net.ihago.ymicro.api.revenue.IQueryCouponSummaryRes=} [properties] Properties to set
                         */
                        function QueryCouponSummaryRes(properties) {
                            this.items = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * QueryCouponSummaryRes result.
                         * @member {common.IResult|null|undefined} result
                         * @memberof net.ihago.ymicro.api.revenue.QueryCouponSummaryRes
                         * @instance
                         */
                        QueryCouponSummaryRes.prototype.result = null;

                        /**
                         * QueryCouponSummaryRes msg_notification.
                         * @member {boolean} msg_notification
                         * @memberof net.ihago.ymicro.api.revenue.QueryCouponSummaryRes
                         * @instance
                         */
                        QueryCouponSummaryRes.prototype.msg_notification = false;

                        /**
                         * QueryCouponSummaryRes items.
                         * @member {Array.<net.ihago.ymicro.api.revenue.ICouponSummaryItem>} items
                         * @memberof net.ihago.ymicro.api.revenue.QueryCouponSummaryRes
                         * @instance
                         */
                        QueryCouponSummaryRes.prototype.items = $util.emptyArray;

                        /**
                         * QueryCouponSummaryRes gameTips.
                         * @member {string} gameTips
                         * @memberof net.ihago.ymicro.api.revenue.QueryCouponSummaryRes
                         * @instance
                         */
                        QueryCouponSummaryRes.prototype.gameTips = "";

                        /**
                         * Creates a new QueryCouponSummaryRes instance using the specified properties.
                         * @function create
                         * @memberof net.ihago.ymicro.api.revenue.QueryCouponSummaryRes
                         * @static
                         * @param {net.ihago.ymicro.api.revenue.IQueryCouponSummaryRes=} [properties] Properties to set
                         * @returns {net.ihago.ymicro.api.revenue.QueryCouponSummaryRes} QueryCouponSummaryRes instance
                         */
                        QueryCouponSummaryRes.create = function create(properties) {
                            return new QueryCouponSummaryRes(properties);
                        };

                        /**
                         * Encodes the specified QueryCouponSummaryRes message. Does not implicitly {@link net.ihago.ymicro.api.revenue.QueryCouponSummaryRes.verify|verify} messages.
                         * @function encode
                         * @memberof net.ihago.ymicro.api.revenue.QueryCouponSummaryRes
                         * @static
                         * @param {net.ihago.ymicro.api.revenue.IQueryCouponSummaryRes} message QueryCouponSummaryRes message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        QueryCouponSummaryRes.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.result != null && message.hasOwnProperty("result"))
                                $root.common.Result.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.msg_notification != null && message.hasOwnProperty("msg_notification"))
                                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.msg_notification);
                            if (message.items != null && message.items.length)
                                for (var i = 0; i < message.items.length; ++i)
                                    $root.net.ihago.ymicro.api.revenue.CouponSummaryItem.encode(message.items[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                            if (message.gameTips != null && message.hasOwnProperty("gameTips"))
                                writer.uint32(/* id 4, wireType 2 =*/34).string(message.gameTips);
                            return writer;
                        };

                        /**
                         * Decodes a QueryCouponSummaryRes message from the specified reader or buffer.
                         * @function decode
                         * @memberof net.ihago.ymicro.api.revenue.QueryCouponSummaryRes
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {net.ihago.ymicro.api.revenue.QueryCouponSummaryRes} QueryCouponSummaryRes
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        QueryCouponSummaryRes.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.net.ihago.ymicro.api.revenue.QueryCouponSummaryRes();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.result = $root.common.Result.decode(reader, reader.uint32());
                                    break;
                                case 2:
                                    message.msg_notification = reader.bool();
                                    break;
                                case 3:
                                    if (!(message.items && message.items.length))
                                        message.items = [];
                                    message.items.push($root.net.ihago.ymicro.api.revenue.CouponSummaryItem.decode(reader, reader.uint32()));
                                    break;
                                case 4:
                                    message.gameTips = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        return QueryCouponSummaryRes;
                    })();

                    revenue.ReadMessageReq = (function() {

                        /**
                         * Properties of a ReadMessageReq.
                         * @memberof net.ihago.ymicro.api.revenue
                         * @interface IReadMessageReq
                         * @property {number|null} [commodity_type] ReadMessageReq commodity_type
                         * @property {Array.<number>|null} [coupon_id_list] ReadMessageReq coupon_id_list
                         * @property {Array.<number>|null} [msg_id_list] ReadMessageReq msg_id_list
                         */

                        /**
                         * Constructs a new ReadMessageReq.
                         * @memberof net.ihago.ymicro.api.revenue
                         * @classdesc Represents a ReadMessageReq.
                         * @implements IReadMessageReq
                         * @constructor
                         * @param {net.ihago.ymicro.api.revenue.IReadMessageReq=} [properties] Properties to set
                         */
                        function ReadMessageReq(properties) {
                            this.coupon_id_list = [];
                            this.msg_id_list = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * ReadMessageReq commodity_type.
                         * @member {number} commodity_type
                         * @memberof net.ihago.ymicro.api.revenue.ReadMessageReq
                         * @instance
                         */
                        ReadMessageReq.prototype.commodity_type = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * ReadMessageReq coupon_id_list.
                         * @member {Array.<number>} coupon_id_list
                         * @memberof net.ihago.ymicro.api.revenue.ReadMessageReq
                         * @instance
                         */
                        ReadMessageReq.prototype.coupon_id_list = $util.emptyArray;

                        /**
                         * ReadMessageReq msg_id_list.
                         * @member {Array.<number>} msg_id_list
                         * @memberof net.ihago.ymicro.api.revenue.ReadMessageReq
                         * @instance
                         */
                        ReadMessageReq.prototype.msg_id_list = $util.emptyArray;

                        /**
                         * Creates a new ReadMessageReq instance using the specified properties.
                         * @function create
                         * @memberof net.ihago.ymicro.api.revenue.ReadMessageReq
                         * @static
                         * @param {net.ihago.ymicro.api.revenue.IReadMessageReq=} [properties] Properties to set
                         * @returns {net.ihago.ymicro.api.revenue.ReadMessageReq} ReadMessageReq instance
                         */
                        ReadMessageReq.create = function create(properties) {
                            return new ReadMessageReq(properties);
                        };

                        /**
                         * Encodes the specified ReadMessageReq message. Does not implicitly {@link net.ihago.ymicro.api.revenue.ReadMessageReq.verify|verify} messages.
                         * @function encode
                         * @memberof net.ihago.ymicro.api.revenue.ReadMessageReq
                         * @static
                         * @param {net.ihago.ymicro.api.revenue.IReadMessageReq} message ReadMessageReq message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ReadMessageReq.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.commodity_type != null && message.hasOwnProperty("commodity_type"))
                                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.commodity_type);
                            if (message.coupon_id_list != null && message.coupon_id_list.length) {
                                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                                for (var i = 0; i < message.coupon_id_list.length; ++i)
                                    writer.int64(message.coupon_id_list[i]);
                                writer.ldelim();
                            }
                            if (message.msg_id_list != null && message.msg_id_list.length) {
                                writer.uint32(/* id 3, wireType 2 =*/26).fork();
                                for (var i = 0; i < message.msg_id_list.length; ++i)
                                    writer.int64(message.msg_id_list[i]);
                                writer.ldelim();
                            }
                            return writer;
                        };

                        /**
                         * Decodes a ReadMessageReq message from the specified reader or buffer.
                         * @function decode
                         * @memberof net.ihago.ymicro.api.revenue.ReadMessageReq
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {net.ihago.ymicro.api.revenue.ReadMessageReq} ReadMessageReq
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ReadMessageReq.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.net.ihago.ymicro.api.revenue.ReadMessageReq();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.commodity_type = reader.int64();
                                    break;
                                case 2:
                                    if (!(message.coupon_id_list && message.coupon_id_list.length))
                                        message.coupon_id_list = [];
                                    if ((tag & 7) === 2) {
                                        var end2 = reader.uint32() + reader.pos;
                                        while (reader.pos < end2)
                                            message.coupon_id_list.push(reader.int64());
                                    } else
                                        message.coupon_id_list.push(reader.int64());
                                    break;
                                case 3:
                                    if (!(message.msg_id_list && message.msg_id_list.length))
                                        message.msg_id_list = [];
                                    if ((tag & 7) === 2) {
                                        var end2 = reader.uint32() + reader.pos;
                                        while (reader.pos < end2)
                                            message.msg_id_list.push(reader.int64());
                                    } else
                                        message.msg_id_list.push(reader.int64());
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        return ReadMessageReq;
                    })();

                    revenue.ReadMessageRes = (function() {

                        /**
                         * Properties of a ReadMessageRes.
                         * @memberof net.ihago.ymicro.api.revenue
                         * @interface IReadMessageRes
                         * @property {common.IResult|null} [result] ReadMessageRes result
                         */

                        /**
                         * Constructs a new ReadMessageRes.
                         * @memberof net.ihago.ymicro.api.revenue
                         * @classdesc Represents a ReadMessageRes.
                         * @implements IReadMessageRes
                         * @constructor
                         * @param {net.ihago.ymicro.api.revenue.IReadMessageRes=} [properties] Properties to set
                         */
                        function ReadMessageRes(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * ReadMessageRes result.
                         * @member {common.IResult|null|undefined} result
                         * @memberof net.ihago.ymicro.api.revenue.ReadMessageRes
                         * @instance
                         */
                        ReadMessageRes.prototype.result = null;

                        /**
                         * Creates a new ReadMessageRes instance using the specified properties.
                         * @function create
                         * @memberof net.ihago.ymicro.api.revenue.ReadMessageRes
                         * @static
                         * @param {net.ihago.ymicro.api.revenue.IReadMessageRes=} [properties] Properties to set
                         * @returns {net.ihago.ymicro.api.revenue.ReadMessageRes} ReadMessageRes instance
                         */
                        ReadMessageRes.create = function create(properties) {
                            return new ReadMessageRes(properties);
                        };

                        /**
                         * Encodes the specified ReadMessageRes message. Does not implicitly {@link net.ihago.ymicro.api.revenue.ReadMessageRes.verify|verify} messages.
                         * @function encode
                         * @memberof net.ihago.ymicro.api.revenue.ReadMessageRes
                         * @static
                         * @param {net.ihago.ymicro.api.revenue.IReadMessageRes} message ReadMessageRes message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ReadMessageRes.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.result != null && message.hasOwnProperty("result"))
                                $root.common.Result.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            return writer;
                        };

                        /**
                         * Decodes a ReadMessageRes message from the specified reader or buffer.
                         * @function decode
                         * @memberof net.ihago.ymicro.api.revenue.ReadMessageRes
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {net.ihago.ymicro.api.revenue.ReadMessageRes} ReadMessageRes
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ReadMessageRes.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.net.ihago.ymicro.api.revenue.ReadMessageRes();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.result = $root.common.Result.decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        return ReadMessageRes;
                    })();

                    return revenue;
                })();

                return api;
            })();

            return ymicro;
        })();

        return ihago;
    })();

    return net;
})();

$root.common = (function() {

    /**
     * Namespace common.
     * @exports common
     * @namespace
     */
    var common = {};

    common.Header = (function() {

        /**
         * Properties of a Header.
         * @memberof common
         * @interface IHeader
         * @property {string|null} [sname] Header sname
         * @property {number|null} [seqid] Header seqid
         * @property {number|null} [code] Header code
         * @property {string|null} [lang] Header lang
         * @property {string|null} [tid] Header tid
         * @property {string|null} [roomid] Header roomid
         * @property {string|null} [method] Header method
         * @property {string|null} [version] Header version
         * @property {common.Header.MSGTYPE|null} [msgtype] Header msgtype
         * @property {boolean|null} [back_ground] Header back_ground
         * @property {Uint8Array|null} [biz] Header biz
         * @property {Object.<string,Uint8Array>|null} [extend] Header extend
         * @property {Uint8Array|null} [routing_key] Header routing_key
         * @property {string|null} [gameid] Header gameid
         */

        /**
         * Constructs a new Header.
         * @memberof common
         * @classdesc Represents a Header.
         * @implements IHeader
         * @constructor
         * @param {common.IHeader=} [properties] Properties to set
         */
        function Header(properties) {
            this.extend = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Header sname.
         * @member {string} sname
         * @memberof common.Header
         * @instance
         */
        Header.prototype.sname = "";

        /**
         * Header seqid.
         * @member {number} seqid
         * @memberof common.Header
         * @instance
         */
        Header.prototype.seqid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Header code.
         * @member {number} code
         * @memberof common.Header
         * @instance
         */
        Header.prototype.code = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Header lang.
         * @member {string} lang
         * @memberof common.Header
         * @instance
         */
        Header.prototype.lang = "";

        /**
         * Header tid.
         * @member {string} tid
         * @memberof common.Header
         * @instance
         */
        Header.prototype.tid = "";

        /**
         * Header roomid.
         * @member {string} roomid
         * @memberof common.Header
         * @instance
         */
        Header.prototype.roomid = "";

        /**
         * Header method.
         * @member {string} method
         * @memberof common.Header
         * @instance
         */
        Header.prototype.method = "";

        /**
         * Header version.
         * @member {string} version
         * @memberof common.Header
         * @instance
         */
        Header.prototype.version = "";

        /**
         * Header msgtype.
         * @member {common.Header.MSGTYPE} msgtype
         * @memberof common.Header
         * @instance
         */
        Header.prototype.msgtype = 0;

        /**
         * Header back_ground.
         * @member {boolean} back_ground
         * @memberof common.Header
         * @instance
         */
        Header.prototype.back_ground = false;

        /**
         * Header biz.
         * @member {Uint8Array} biz
         * @memberof common.Header
         * @instance
         */
        Header.prototype.biz = $util.newBuffer([]);

        /**
         * Header extend.
         * @member {Object.<string,Uint8Array>} extend
         * @memberof common.Header
         * @instance
         */
        Header.prototype.extend = $util.emptyObject;

        /**
         * Header routing_key.
         * @member {Uint8Array} routing_key
         * @memberof common.Header
         * @instance
         */
        Header.prototype.routing_key = $util.newBuffer([]);

        /**
         * Header gameid.
         * @member {string} gameid
         * @memberof common.Header
         * @instance
         */
        Header.prototype.gameid = "";

        /**
         * Creates a new Header instance using the specified properties.
         * @function create
         * @memberof common.Header
         * @static
         * @param {common.IHeader=} [properties] Properties to set
         * @returns {common.Header} Header instance
         */
        Header.create = function create(properties) {
            return new Header(properties);
        };

        /**
         * Encodes the specified Header message. Does not implicitly {@link common.Header.verify|verify} messages.
         * @function encode
         * @memberof common.Header
         * @static
         * @param {common.IHeader} message Header message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Header.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sname != null && message.hasOwnProperty("sname"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.sname);
            if (message.seqid != null && message.hasOwnProperty("seqid"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.seqid);
            if (message.code != null && message.hasOwnProperty("code"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.code);
            if (message.lang != null && message.hasOwnProperty("lang"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.lang);
            if (message.tid != null && message.hasOwnProperty("tid"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.tid);
            if (message.roomid != null && message.hasOwnProperty("roomid"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.roomid);
            if (message.method != null && message.hasOwnProperty("method"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.method);
            if (message.version != null && message.hasOwnProperty("version"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.version);
            if (message.msgtype != null && message.hasOwnProperty("msgtype"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.msgtype);
            if (message.back_ground != null && message.hasOwnProperty("back_ground"))
                writer.uint32(/* id 10, wireType 0 =*/80).bool(message.back_ground);
            if (message.biz != null && message.hasOwnProperty("biz"))
                writer.uint32(/* id 11, wireType 2 =*/90).bytes(message.biz);
            if (message.extend != null && message.hasOwnProperty("extend"))
                for (var keys = Object.keys(message.extend), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 12, wireType 2 =*/98).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).bytes(message.extend[keys[i]]).ldelim();
            if (message.routing_key != null && message.hasOwnProperty("routing_key"))
                writer.uint32(/* id 13, wireType 2 =*/106).bytes(message.routing_key);
            if (message.gameid != null && message.hasOwnProperty("gameid"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.gameid);
            return writer;
        };

        /**
         * Decodes a Header message from the specified reader or buffer.
         * @function decode
         * @memberof common.Header
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.Header} Header
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Header.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.Header(), key;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sname = reader.string();
                    break;
                case 2:
                    message.seqid = reader.int64();
                    break;
                case 3:
                    message.code = reader.int64();
                    break;
                case 4:
                    message.lang = reader.string();
                    break;
                case 5:
                    message.tid = reader.string();
                    break;
                case 6:
                    message.roomid = reader.string();
                    break;
                case 7:
                    message.method = reader.string();
                    break;
                case 8:
                    message.version = reader.string();
                    break;
                case 9:
                    message.msgtype = reader.int32();
                    break;
                case 10:
                    message.back_ground = reader.bool();
                    break;
                case 11:
                    message.biz = reader.bytes();
                    break;
                case 12:
                    reader.skip().pos++;
                    if (message.extend === $util.emptyObject)
                        message.extend = {};
                    key = reader.string();
                    reader.pos++;
                    message.extend[key] = reader.bytes();
                    break;
                case 13:
                    message.routing_key = reader.bytes();
                    break;
                case 14:
                    message.gameid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * MSGTYPE enum.
         * @name common.Header.MSGTYPE
         * @enum {string}
         * @property {number} MSGTYPE_UNKNOWN=0 MSGTYPE_UNKNOWN value
         * @property {number} MSGTYPE_REQ=1 MSGTYPE_REQ value
         * @property {number} MSGTYPE_RESP=2 MSGTYPE_RESP value
         * @property {number} MSGTYPE_NOTICE=3 MSGTYPE_NOTICE value
         */
        Header.MSGTYPE = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "MSGTYPE_UNKNOWN"] = 0;
            values[valuesById[1] = "MSGTYPE_REQ"] = 1;
            values[valuesById[2] = "MSGTYPE_RESP"] = 2;
            values[valuesById[3] = "MSGTYPE_NOTICE"] = 3;
            return values;
        })();

        return Header;
    })();

    /**
     * ERet enum.
     * @name common.ERet
     * @enum {string}
     * @property {number} kRetSuccess=0 kRetSuccess value
     * @property {number} kRetErrParameter=1 kRetErrParameter value
     * @property {number} kRetErrCookie=2 kRetErrCookie value
     * @property {number} kRetErrUnauthorized=3 kRetErrUnauthorized value
     * @property {number} kRetErrUnknowUri=4 kRetErrUnknowUri value
     * @property {number} kRetErrVersion=5 kRetErrVersion value
     * @property {number} kRetErrBanned=6 kRetErrBanned value
     * @property {number} kRetErrBusy=7 kRetErrBusy value
     * @property {number} kRetErrNotFound=8 kRetErrNotFound value
     * @property {number} kRetErrAlreadyExists=9 kRetErrAlreadyExists value
     * @property {number} kRetErrPermissionDenied=10 kRetErrPermissionDenied value
     * @property {number} kRetErrIncompatibleVersion=11 kRetErrIncompatibleVersion value
     * @property {number} kRetErrNotBegin=12 kRetErrNotBegin value
     * @property {number} kRetErrAlreadyEnd=13 kRetErrAlreadyEnd value
     * @property {number} kRetErrBlackUser=14 kRetErrBlackUser value
     * @property {number} kRetErrGlobalGateWay=21 kRetErrGlobalGateWay value
     * @property {number} kRetErrDiamondFrozen=22 kRetErrDiamondFrozen value
     * @property {number} kRetErrGuestForbidden=23 kRetErrGuestForbidden value
     * @property {number} kRetErrBatchSizeLimit=100 kRetErrBatchSizeLimit value
     * @property {number} kRetErrSystem=999 kRetErrSystem value
     * @property {number} kRetErrGameIdNotExist=1001 kRetErrGameIdNotExist value
     * @property {number} kRetErrImPkRepeatedInvite=1002 kRetErrImPkRepeatedInvite value
     * @property {number} kRetErrImPkInviteOutOfDate=1003 kRetErrImPkInviteOutOfDate value
     * @property {number} kRetErrGenPkGameUrlFailed=1004 kRetErrGenPkGameUrlFailed value
     * @property {number} kRetErrS2SAddrlistFriendsFailed=1005 kRetErrS2SAddrlistFriendsFailed value
     * @property {number} kRetErrS2SFbFriendsFailed=1006 kRetErrS2SFbFriendsFailed value
     * @property {number} kRetErrS2SGetFriendListFailed=1007 kRetErrS2SGetFriendListFailed value
     * @property {number} kRetErrS2SGetUserStatusFailed=1008 kRetErrS2SGetUserStatusFailed value
     * @property {number} kRetErrS2SGetUsersInfoFailed=1009 kRetErrS2SGetUsersInfoFailed value
     * @property {number} kRetErrGameMaintain=1010 kRetErrGameMaintain value
     * @property {number} kRetErrGameFull=1011 kRetErrGameFull value
     * @property {number} kRetErrImPkInviteAccepted=1012 kRetErrImPkInviteAccepted value
     * @property {number} kRetErrIdInvalid=1013 kRetErrIdInvalid value
     * @property {number} kRetErrPowerLow=1014 kRetErrPowerLow value
     * @property {number} kRetErrMoneyLow=1015 kRetErrMoneyLow value
     * @property {number} kRetErrSource=1016 kRetErrSource value
     * @property {number} kRetErrRecommendDailyLimit=1051 kRetErrRecommendDailyLimit value
     * @property {number} kRetErrRecommendNearbyNone=1052 kRetErrRecommendNearbyNone value
     * @property {number} kRetErrTeamFull=2000 kRetErrTeamFull value
     * @property {number} kRetErrTeamInvalid=2001 kRetErrTeamInvalid value
     * @property {number} kRetErrGameHasBegun=2002 kRetErrGameHasBegun value
     * @property {number} kRetErrGameing=2003 kRetErrGameing value
     * @property {number} kRetErrInviteLeaved=2004 kRetErrInviteLeaved value
     * @property {number} KRetErrBelongTeam=2005 KRetErrBelongTeam value
     * @property {number} kRetErrGetGameInfoErr=2006 kRetErrGetGameInfoErr value
     * @property {number} kRetErrNoInMatch=2007 kRetErrNoInMatch value
     * @property {number} kRetErrCancelMatchErr=2008 kRetErrCancelMatchErr value
     * @property {number} kRetErrUserNotInRoom=2009 kRetErrUserNotInRoom value
     * @property {number} kRetErrTeamMatching=2010 kRetErrTeamMatching value
     * @property {number} kRetErrImTeamCreating=2011 kRetErrImTeamCreating value
     * @property {number} kRetErrChangeTemplate=2012 kRetErrChangeTemplate value
     * @property {number} kRetErrVoiceChatSelfBusy=2101 kRetErrVoiceChatSelfBusy value
     * @property {number} kRetErrVoiceChatOtherBusy=2102 kRetErrVoiceChatOtherBusy value
     * @property {number} kRetErrVoiceChatCallTimeout=2103 kRetErrVoiceChatCallTimeout value
     * @property {number} kRetErrVoiceChatUserNotBeCall=2104 kRetErrVoiceChatUserNotBeCall value
     * @property {number} kRetErrVoiceChatHadStarted=2105 kRetErrVoiceChatHadStarted value
     * @property {number} kRetErrVoiceChatHadStop=2106 kRetErrVoiceChatHadStop value
     * @property {number} kRetErrVoiceChatOffLine=2107 kRetErrVoiceChatOffLine value
     */
    common.ERet = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "kRetSuccess"] = 0;
        values[valuesById[1] = "kRetErrParameter"] = 1;
        values[valuesById[2] = "kRetErrCookie"] = 2;
        values[valuesById[3] = "kRetErrUnauthorized"] = 3;
        values[valuesById[4] = "kRetErrUnknowUri"] = 4;
        values[valuesById[5] = "kRetErrVersion"] = 5;
        values[valuesById[6] = "kRetErrBanned"] = 6;
        values[valuesById[7] = "kRetErrBusy"] = 7;
        values[valuesById[8] = "kRetErrNotFound"] = 8;
        values[valuesById[9] = "kRetErrAlreadyExists"] = 9;
        values[valuesById[10] = "kRetErrPermissionDenied"] = 10;
        values[valuesById[11] = "kRetErrIncompatibleVersion"] = 11;
        values[valuesById[12] = "kRetErrNotBegin"] = 12;
        values[valuesById[13] = "kRetErrAlreadyEnd"] = 13;
        values[valuesById[14] = "kRetErrBlackUser"] = 14;
        values[valuesById[21] = "kRetErrGlobalGateWay"] = 21;
        values[valuesById[22] = "kRetErrDiamondFrozen"] = 22;
        values[valuesById[23] = "kRetErrGuestForbidden"] = 23;
        values[valuesById[100] = "kRetErrBatchSizeLimit"] = 100;
        values[valuesById[999] = "kRetErrSystem"] = 999;
        values[valuesById[1001] = "kRetErrGameIdNotExist"] = 1001;
        values[valuesById[1002] = "kRetErrImPkRepeatedInvite"] = 1002;
        values[valuesById[1003] = "kRetErrImPkInviteOutOfDate"] = 1003;
        values[valuesById[1004] = "kRetErrGenPkGameUrlFailed"] = 1004;
        values[valuesById[1005] = "kRetErrS2SAddrlistFriendsFailed"] = 1005;
        values[valuesById[1006] = "kRetErrS2SFbFriendsFailed"] = 1006;
        values[valuesById[1007] = "kRetErrS2SGetFriendListFailed"] = 1007;
        values[valuesById[1008] = "kRetErrS2SGetUserStatusFailed"] = 1008;
        values[valuesById[1009] = "kRetErrS2SGetUsersInfoFailed"] = 1009;
        values[valuesById[1010] = "kRetErrGameMaintain"] = 1010;
        values[valuesById[1011] = "kRetErrGameFull"] = 1011;
        values[valuesById[1012] = "kRetErrImPkInviteAccepted"] = 1012;
        values[valuesById[1013] = "kRetErrIdInvalid"] = 1013;
        values[valuesById[1014] = "kRetErrPowerLow"] = 1014;
        values[valuesById[1015] = "kRetErrMoneyLow"] = 1015;
        values[valuesById[1016] = "kRetErrSource"] = 1016;
        values[valuesById[1051] = "kRetErrRecommendDailyLimit"] = 1051;
        values[valuesById[1052] = "kRetErrRecommendNearbyNone"] = 1052;
        values[valuesById[2000] = "kRetErrTeamFull"] = 2000;
        values[valuesById[2001] = "kRetErrTeamInvalid"] = 2001;
        values[valuesById[2002] = "kRetErrGameHasBegun"] = 2002;
        values[valuesById[2003] = "kRetErrGameing"] = 2003;
        values[valuesById[2004] = "kRetErrInviteLeaved"] = 2004;
        values[valuesById[2005] = "KRetErrBelongTeam"] = 2005;
        values[valuesById[2006] = "kRetErrGetGameInfoErr"] = 2006;
        values[valuesById[2007] = "kRetErrNoInMatch"] = 2007;
        values[valuesById[2008] = "kRetErrCancelMatchErr"] = 2008;
        values[valuesById[2009] = "kRetErrUserNotInRoom"] = 2009;
        values[valuesById[2010] = "kRetErrTeamMatching"] = 2010;
        values[valuesById[2011] = "kRetErrImTeamCreating"] = 2011;
        values[valuesById[2012] = "kRetErrChangeTemplate"] = 2012;
        values[valuesById[2101] = "kRetErrVoiceChatSelfBusy"] = 2101;
        values[valuesById[2102] = "kRetErrVoiceChatOtherBusy"] = 2102;
        values[valuesById[2103] = "kRetErrVoiceChatCallTimeout"] = 2103;
        values[valuesById[2104] = "kRetErrVoiceChatUserNotBeCall"] = 2104;
        values[valuesById[2105] = "kRetErrVoiceChatHadStarted"] = 2105;
        values[valuesById[2106] = "kRetErrVoiceChatHadStop"] = 2106;
        values[valuesById[2107] = "kRetErrVoiceChatOffLine"] = 2107;
        return values;
    })();

    /**
     * ESex enum.
     * @name common.ESex
     * @enum {string}
     * @property {number} kSexFemale=0 kSexFemale value
     * @property {number} kSexMale=1 kSexMale value
     * @property {number} kSexAll=2 kSexAll value
     */
    common.ESex = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "kSexFemale"] = 0;
        values[valuesById[1] = "kSexMale"] = 1;
        values[valuesById[2] = "kSexAll"] = 2;
        return values;
    })();

    /**
     * YMicroRet enum.
     * @name common.YMicroRet
     * @enum {string}
     * @property {number} YMicroRetSuccess=0 YMicroRetSuccess value
     * @property {number} YMicroRetBadRequest=400 YMicroRetBadRequest value
     * @property {number} YMicroRetUnauthorized=401 YMicroRetUnauthorized value
     * @property {number} YMicroRetForbidden=403 YMicroRetForbidden value
     * @property {number} YMicroRetNotFound=404 YMicroRetNotFound value
     * @property {number} YMicroRetMethodNotAllowed=405 YMicroRetMethodNotAllowed value
     * @property {number} YMicroRetTimeout=408 YMicroRetTimeout value
     * @property {number} YMicroRetConflict=409 YMicroRetConflict value
     * @property {number} YMicroRetTooManyRequests=429 YMicroRetTooManyRequests value
     * @property {number} YMicroRetInternalServerError=500 YMicroRetInternalServerError value
     */
    common.YMicroRet = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "YMicroRetSuccess"] = 0;
        values[valuesById[400] = "YMicroRetBadRequest"] = 400;
        values[valuesById[401] = "YMicroRetUnauthorized"] = 401;
        values[valuesById[403] = "YMicroRetForbidden"] = 403;
        values[valuesById[404] = "YMicroRetNotFound"] = 404;
        values[valuesById[405] = "YMicroRetMethodNotAllowed"] = 405;
        values[valuesById[408] = "YMicroRetTimeout"] = 408;
        values[valuesById[409] = "YMicroRetConflict"] = 409;
        values[valuesById[429] = "YMicroRetTooManyRequests"] = 429;
        values[valuesById[500] = "YMicroRetInternalServerError"] = 500;
        return values;
    })();

    common.Result = (function() {

        /**
         * Properties of a Result.
         * @memberof common
         * @interface IResult
         * @property {number|null} [errcode] Result errcode
         * @property {string|null} [errmsg] Result errmsg
         * @property {number|null} [magic] Result magic
         * @property {Array.<common.IDetail>|null} [details] Result details
         */

        /**
         * Constructs a new Result.
         * @memberof common
         * @classdesc Represents a Result.
         * @implements IResult
         * @constructor
         * @param {common.IResult=} [properties] Properties to set
         */
        function Result(properties) {
            this.details = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Result errcode.
         * @member {number} errcode
         * @memberof common.Result
         * @instance
         */
        Result.prototype.errcode = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Result errmsg.
         * @member {string} errmsg
         * @memberof common.Result
         * @instance
         */
        Result.prototype.errmsg = "";

        /**
         * Result magic.
         * @member {number} magic
         * @memberof common.Result
         * @instance
         */
        Result.prototype.magic = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Result details.
         * @member {Array.<common.IDetail>} details
         * @memberof common.Result
         * @instance
         */
        Result.prototype.details = $util.emptyArray;

        /**
         * Creates a new Result instance using the specified properties.
         * @function create
         * @memberof common.Result
         * @static
         * @param {common.IResult=} [properties] Properties to set
         * @returns {common.Result} Result instance
         */
        Result.create = function create(properties) {
            return new Result(properties);
        };

        /**
         * Encodes the specified Result message. Does not implicitly {@link common.Result.verify|verify} messages.
         * @function encode
         * @memberof common.Result
         * @static
         * @param {common.IResult} message Result message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Result.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errcode != null && message.hasOwnProperty("errcode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.errcode);
            if (message.errmsg != null && message.hasOwnProperty("errmsg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errmsg);
            if (message.magic != null && message.hasOwnProperty("magic"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.magic);
            if (message.details != null && message.details.length)
                for (var i = 0; i < message.details.length; ++i)
                    $root.common.Detail.encode(message.details[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a Result message from the specified reader or buffer.
         * @function decode
         * @memberof common.Result
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.Result} Result
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Result.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.Result();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.errcode = reader.int64();
                    break;
                case 2:
                    message.errmsg = reader.string();
                    break;
                case 3:
                    message.magic = reader.int64();
                    break;
                case 10:
                    if (!(message.details && message.details.length))
                        message.details = [];
                    message.details.push($root.common.Detail.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return Result;
    })();

    common.Response = (function() {

        /**
         * Properties of a Response.
         * @memberof common
         * @interface IResponse
         * @property {common.IResult|null} [result] Response result
         */

        /**
         * Constructs a new Response.
         * @memberof common
         * @classdesc Represents a Response.
         * @implements IResponse
         * @constructor
         * @param {common.IResponse=} [properties] Properties to set
         */
        function Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Response result.
         * @member {common.IResult|null|undefined} result
         * @memberof common.Response
         * @instance
         */
        Response.prototype.result = null;

        /**
         * Creates a new Response instance using the specified properties.
         * @function create
         * @memberof common.Response
         * @static
         * @param {common.IResponse=} [properties] Properties to set
         * @returns {common.Response} Response instance
         */
        Response.create = function create(properties) {
            return new Response(properties);
        };

        /**
         * Encodes the specified Response message. Does not implicitly {@link common.Response.verify|verify} messages.
         * @function encode
         * @memberof common.Response
         * @static
         * @param {common.IResponse} message Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && message.hasOwnProperty("result"))
                $root.common.Result.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @function decode
         * @memberof common.Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.Response} Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = $root.common.Result.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return Response;
    })();

    /**
     * EBizAction enum.
     * @name common.EBizAction
     * @enum {string}
     * @property {number} BizActionNone=0 BizActionNone value
     * @property {number} BizActionAdd=1 BizActionAdd value
     * @property {number} BizActionDel=2 BizActionDel value
     */
    common.EBizAction = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "BizActionNone"] = 0;
        values[valuesById[1] = "BizActionAdd"] = 1;
        values[valuesById[2] = "BizActionDel"] = 2;
        return values;
    })();

    common.BizAction = (function() {

        /**
         * Properties of a BizAction.
         * @memberof common
         * @interface IBizAction
         * @property {number|null} [action] BizAction action
         * @property {string|null} [sname] BizAction sname
         * @property {string|null} [key] BizAction key
         * @property {Uint8Array|null} [value] BizAction value
         * @property {number|null} [valid_time] BizAction valid_time
         */

        /**
         * Constructs a new BizAction.
         * @memberof common
         * @classdesc Represents a BizAction.
         * @implements IBizAction
         * @constructor
         * @param {common.IBizAction=} [properties] Properties to set
         */
        function BizAction(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BizAction action.
         * @member {number} action
         * @memberof common.BizAction
         * @instance
         */
        BizAction.prototype.action = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BizAction sname.
         * @member {string} sname
         * @memberof common.BizAction
         * @instance
         */
        BizAction.prototype.sname = "";

        /**
         * BizAction key.
         * @member {string} key
         * @memberof common.BizAction
         * @instance
         */
        BizAction.prototype.key = "";

        /**
         * BizAction value.
         * @member {Uint8Array} value
         * @memberof common.BizAction
         * @instance
         */
        BizAction.prototype.value = $util.newBuffer([]);

        /**
         * BizAction valid_time.
         * @member {number} valid_time
         * @memberof common.BizAction
         * @instance
         */
        BizAction.prototype.valid_time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new BizAction instance using the specified properties.
         * @function create
         * @memberof common.BizAction
         * @static
         * @param {common.IBizAction=} [properties] Properties to set
         * @returns {common.BizAction} BizAction instance
         */
        BizAction.create = function create(properties) {
            return new BizAction(properties);
        };

        /**
         * Encodes the specified BizAction message. Does not implicitly {@link common.BizAction.verify|verify} messages.
         * @function encode
         * @memberof common.BizAction
         * @static
         * @param {common.IBizAction} message BizAction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BizAction.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.action != null && message.hasOwnProperty("action"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.action);
            if (message.sname != null && message.hasOwnProperty("sname"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.sname);
            if (message.key != null && message.hasOwnProperty("key"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.key);
            if (message.value != null && message.hasOwnProperty("value"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.value);
            if (message.valid_time != null && message.hasOwnProperty("valid_time"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.valid_time);
            return writer;
        };

        /**
         * Decodes a BizAction message from the specified reader or buffer.
         * @function decode
         * @memberof common.BizAction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.BizAction} BizAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BizAction.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.BizAction();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.action = reader.int64();
                    break;
                case 2:
                    message.sname = reader.string();
                    break;
                case 3:
                    message.key = reader.string();
                    break;
                case 4:
                    message.value = reader.bytes();
                    break;
                case 5:
                    message.valid_time = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return BizAction;
    })();

    /**
     * EBizType enum.
     * @name common.EBizType
     * @enum {string}
     * @property {number} EBizTypeNone=0 EBizTypeNone value
     * @property {number} EBizTypeAction=10 EBizTypeAction value
     * @property {number} EBizTypeInfos=11 EBizTypeInfos value
     * @property {number} EBizTypeExt=12 EBizTypeExt value
     */
    common.EBizType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "EBizTypeNone"] = 0;
        values[valuesById[10] = "EBizTypeAction"] = 10;
        values[valuesById[11] = "EBizTypeInfos"] = 11;
        values[valuesById[12] = "EBizTypeExt"] = 12;
        return values;
    })();

    common.Biz = (function() {

        /**
         * Properties of a Biz.
         * @memberof common
         * @interface IBiz
         * @property {Array.<number>|null} [types] Biz types
         * @property {Array.<common.IBizAction>|null} [biz_actions] Biz biz_actions
         * @property {Object.<string,Uint8Array>|null} [biz_infos] Biz biz_infos
         * @property {Object.<string,Uint8Array>|null} [biz_ext] Biz biz_ext
         */

        /**
         * Constructs a new Biz.
         * @memberof common
         * @classdesc Represents a Biz.
         * @implements IBiz
         * @constructor
         * @param {common.IBiz=} [properties] Properties to set
         */
        function Biz(properties) {
            this.types = [];
            this.biz_actions = [];
            this.biz_infos = {};
            this.biz_ext = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Biz types.
         * @member {Array.<number>} types
         * @memberof common.Biz
         * @instance
         */
        Biz.prototype.types = $util.emptyArray;

        /**
         * Biz biz_actions.
         * @member {Array.<common.IBizAction>} biz_actions
         * @memberof common.Biz
         * @instance
         */
        Biz.prototype.biz_actions = $util.emptyArray;

        /**
         * Biz biz_infos.
         * @member {Object.<string,Uint8Array>} biz_infos
         * @memberof common.Biz
         * @instance
         */
        Biz.prototype.biz_infos = $util.emptyObject;

        /**
         * Biz biz_ext.
         * @member {Object.<string,Uint8Array>} biz_ext
         * @memberof common.Biz
         * @instance
         */
        Biz.prototype.biz_ext = $util.emptyObject;

        /**
         * Creates a new Biz instance using the specified properties.
         * @function create
         * @memberof common.Biz
         * @static
         * @param {common.IBiz=} [properties] Properties to set
         * @returns {common.Biz} Biz instance
         */
        Biz.create = function create(properties) {
            return new Biz(properties);
        };

        /**
         * Encodes the specified Biz message. Does not implicitly {@link common.Biz.verify|verify} messages.
         * @function encode
         * @memberof common.Biz
         * @static
         * @param {common.IBiz} message Biz message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Biz.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.types != null && message.types.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.types.length; ++i)
                    writer.int64(message.types[i]);
                writer.ldelim();
            }
            if (message.biz_actions != null && message.biz_actions.length)
                for (var i = 0; i < message.biz_actions.length; ++i)
                    $root.common.BizAction.encode(message.biz_actions[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.biz_infos != null && message.hasOwnProperty("biz_infos"))
                for (var keys = Object.keys(message.biz_infos), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 11, wireType 2 =*/90).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).bytes(message.biz_infos[keys[i]]).ldelim();
            if (message.biz_ext != null && message.hasOwnProperty("biz_ext"))
                for (var keys = Object.keys(message.biz_ext), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 12, wireType 2 =*/98).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).bytes(message.biz_ext[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Decodes a Biz message from the specified reader or buffer.
         * @function decode
         * @memberof common.Biz
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.Biz} Biz
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Biz.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.Biz(), key;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.types && message.types.length))
                        message.types = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.types.push(reader.int64());
                    } else
                        message.types.push(reader.int64());
                    break;
                case 10:
                    if (!(message.biz_actions && message.biz_actions.length))
                        message.biz_actions = [];
                    message.biz_actions.push($root.common.BizAction.decode(reader, reader.uint32()));
                    break;
                case 11:
                    reader.skip().pos++;
                    if (message.biz_infos === $util.emptyObject)
                        message.biz_infos = {};
                    key = reader.string();
                    reader.pos++;
                    message.biz_infos[key] = reader.bytes();
                    break;
                case 12:
                    reader.skip().pos++;
                    if (message.biz_ext === $util.emptyObject)
                        message.biz_ext = {};
                    key = reader.string();
                    reader.pos++;
                    message.biz_ext[key] = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return Biz;
    })();

    common.Page = (function() {

        /**
         * Properties of a Page.
         * @memberof common
         * @interface IPage
         * @property {number|null} [snap] Page snap
         * @property {number|null} [offset] Page offset
         * @property {number|null} [limit] Page limit
         * @property {number|null} [total] Page total
         */

        /**
         * Constructs a new Page.
         * @memberof common
         * @classdesc Represents a Page.
         * @implements IPage
         * @constructor
         * @param {common.IPage=} [properties] Properties to set
         */
        function Page(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Page snap.
         * @member {number} snap
         * @memberof common.Page
         * @instance
         */
        Page.prototype.snap = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Page offset.
         * @member {number} offset
         * @memberof common.Page
         * @instance
         */
        Page.prototype.offset = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Page limit.
         * @member {number} limit
         * @memberof common.Page
         * @instance
         */
        Page.prototype.limit = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Page total.
         * @member {number} total
         * @memberof common.Page
         * @instance
         */
        Page.prototype.total = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Page instance using the specified properties.
         * @function create
         * @memberof common.Page
         * @static
         * @param {common.IPage=} [properties] Properties to set
         * @returns {common.Page} Page instance
         */
        Page.create = function create(properties) {
            return new Page(properties);
        };

        /**
         * Encodes the specified Page message. Does not implicitly {@link common.Page.verify|verify} messages.
         * @function encode
         * @memberof common.Page
         * @static
         * @param {common.IPage} message Page message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Page.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.snap != null && message.hasOwnProperty("snap"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.snap);
            if (message.offset != null && message.hasOwnProperty("offset"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.offset);
            if (message.limit != null && message.hasOwnProperty("limit"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.limit);
            if (message.total != null && message.hasOwnProperty("total"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.total);
            return writer;
        };

        /**
         * Decodes a Page message from the specified reader or buffer.
         * @function decode
         * @memberof common.Page
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.Page} Page
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Page.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.Page();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.snap = reader.int64();
                    break;
                case 2:
                    message.offset = reader.int64();
                    break;
                case 3:
                    message.limit = reader.int64();
                    break;
                case 4:
                    message.total = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return Page;
    })();

    common.LocalizedMessage = (function() {

        /**
         * Properties of a LocalizedMessage.
         * @memberof common
         * @interface ILocalizedMessage
         * @property {string|null} [locale] LocalizedMessage locale
         * @property {string|null} [message] LocalizedMessage message
         */

        /**
         * Constructs a new LocalizedMessage.
         * @memberof common
         * @classdesc Represents a LocalizedMessage.
         * @implements ILocalizedMessage
         * @constructor
         * @param {common.ILocalizedMessage=} [properties] Properties to set
         */
        function LocalizedMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LocalizedMessage locale.
         * @member {string} locale
         * @memberof common.LocalizedMessage
         * @instance
         */
        LocalizedMessage.prototype.locale = "";

        /**
         * LocalizedMessage message.
         * @member {string} message
         * @memberof common.LocalizedMessage
         * @instance
         */
        LocalizedMessage.prototype.message = "";

        /**
         * Creates a new LocalizedMessage instance using the specified properties.
         * @function create
         * @memberof common.LocalizedMessage
         * @static
         * @param {common.ILocalizedMessage=} [properties] Properties to set
         * @returns {common.LocalizedMessage} LocalizedMessage instance
         */
        LocalizedMessage.create = function create(properties) {
            return new LocalizedMessage(properties);
        };

        /**
         * Encodes the specified LocalizedMessage message. Does not implicitly {@link common.LocalizedMessage.verify|verify} messages.
         * @function encode
         * @memberof common.LocalizedMessage
         * @static
         * @param {common.ILocalizedMessage} message LocalizedMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LocalizedMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.locale != null && message.hasOwnProperty("locale"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.locale);
            if (message.message != null && message.hasOwnProperty("message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
            return writer;
        };

        /**
         * Decodes a LocalizedMessage message from the specified reader or buffer.
         * @function decode
         * @memberof common.LocalizedMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.LocalizedMessage} LocalizedMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LocalizedMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.LocalizedMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.locale = reader.string();
                    break;
                case 2:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return LocalizedMessage;
    })();

    /**
     * Detail////////////////////////////////
     * @name common.DetailTypeURI
     * @enum {string}
     * @property {number} DETAIL_TYPE_URI_UNSPECIFIED=0 DETAIL_TYPE_URI_UNSPECIFIED value
     * @property {number} DETAIL_TYPE_URI_LOCALIZE_MESSAGE=1 DETAIL_TYPE_URI_LOCALIZE_MESSAGE value
     */
    common.DetailTypeURI = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "DETAIL_TYPE_URI_UNSPECIFIED"] = 0;
        values[valuesById[1] = "DETAIL_TYPE_URI_LOCALIZE_MESSAGE"] = 1;
        return values;
    })();

    common.Detail = (function() {

        /**
         * Properties of a Detail.
         * @memberof common
         * @interface IDetail
         * @property {number|null} [type_uri] Detail type_uri
         * @property {common.ILocalizedMessage|null} [localize_message] Detail localize_message
         */

        /**
         * Constructs a new Detail.
         * @memberof common
         * @classdesc Represents a Detail.
         * @implements IDetail
         * @constructor
         * @param {common.IDetail=} [properties] Properties to set
         */
        function Detail(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Detail type_uri.
         * @member {number} type_uri
         * @memberof common.Detail
         * @instance
         */
        Detail.prototype.type_uri = 0;

        /**
         * Detail localize_message.
         * @member {common.ILocalizedMessage|null|undefined} localize_message
         * @memberof common.Detail
         * @instance
         */
        Detail.prototype.localize_message = null;

        /**
         * Creates a new Detail instance using the specified properties.
         * @function create
         * @memberof common.Detail
         * @static
         * @param {common.IDetail=} [properties] Properties to set
         * @returns {common.Detail} Detail instance
         */
        Detail.create = function create(properties) {
            return new Detail(properties);
        };

        /**
         * Encodes the specified Detail message. Does not implicitly {@link common.Detail.verify|verify} messages.
         * @function encode
         * @memberof common.Detail
         * @static
         * @param {common.IDetail} message Detail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Detail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type_uri != null && message.hasOwnProperty("type_uri"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type_uri);
            if (message.localize_message != null && message.hasOwnProperty("localize_message"))
                $root.common.LocalizedMessage.encode(message.localize_message, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a Detail message from the specified reader or buffer.
         * @function decode
         * @memberof common.Detail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.Detail} Detail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Detail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.Detail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type_uri = reader.int32();
                    break;
                case 10:
                    message.localize_message = $root.common.LocalizedMessage.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        return Detail;
    })();

    return common;
})();

module.exports = $root;
