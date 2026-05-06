var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
window.__extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
window.__decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var hago;
(function (hago) {
    var enums;
    (function (enums) {
        var sex;
        (function (sex) {
            sex[sex["female"] = 0] = "female";
            sex[sex["male"] = 1] = "male";
        })(sex = enums.sex || (enums.sex = {}));
        var constellation;
        (function (constellation) {
            constellation[constellation["capricorn"] = 0] = "capricorn";
            constellation[constellation["aquarius"] = 1] = "aquarius";
            constellation[constellation["pisces"] = 2] = "pisces";
            constellation[constellation["aries"] = 3] = "aries";
            constellation[constellation["taurus"] = 4] = "taurus";
            constellation[constellation["gemini"] = 5] = "gemini";
            constellation[constellation["cancer"] = 6] = "cancer";
            constellation[constellation["leo"] = 7] = "leo";
            constellation[constellation["virgo"] = 8] = "virgo";
            constellation[constellation["libra"] = 9] = "libra";
            constellation[constellation["scorpio"] = 10] = "scorpio";
            constellation[constellation["sagittarius"] = 11] = "sagittarius";
        })(constellation = enums.constellation || (enums.constellation = {}));
        var onlineStatus;
        (function (onlineStatus) {
            onlineStatus[onlineStatus["onLine"] = 1] = "onLine";
            onlineStatus[onlineStatus["offLine"] = 0] = "offLine";
        })(onlineStatus = enums.onlineStatus || (enums.onlineStatus = {}));
        var friendType;
        (function (friendType) {
            friendType[friendType["faceBook"] = 0] = "faceBook";
            friendType[friendType["mailList"] = 1] = "mailList";
            friendType[friendType["nearby"] = 2] = "nearby";
            friendType[friendType["hago"] = 3] = "hago";
            friendType[friendType["topPlayer"] = 4] = "topPlayer";
            friendType[friendType["inviter"] = 5] = "inviter";
            friendType[friendType["invitee"] = 6] = "invitee";
        })(friendType = enums.friendType || (enums.friendType = {}));
        var rankType;
        (function (rankType) {
            rankType[rankType["total"] = 0] = "total";
            rankType[rankType["daily"] = 1] = "daily";
        })(rankType = enums.rankType || (enums.rankType = {}));
        var subscribe;
        (function (subscribe) {
            subscribe[subscribe["code_0"] = 0] = "code_0";
            subscribe[subscribe["code_negative1"] = -1] = "code_negative1";
            subscribe[subscribe["code_1000"] = 1000] = "code_1000";
            subscribe[subscribe["code_1001"] = 1001] = "code_1001";
            subscribe[subscribe["code_1002"] = 1002] = "code_1002";
            subscribe[subscribe["code_1003"] = 1003] = "code_1003";
        })(subscribe = enums.subscribe || (enums.subscribe = {}));
        var userInfoType;
        (function (userInfoType) {
            userInfoType["debug"] = "debug";
            userInfoType["valid"] = "valid";
            userInfoType["unknow"] = "unknow";
        })(userInfoType = enums.userInfoType || (enums.userInfoType = {}));
    })(enums = hago.enums || (hago.enums = {}));
})(hago || (hago = {}));
window.gea = window.gea || {};
(function (gea) {
    var _prefix;
    function log() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        _prefix == null ? console.log.apply(console, __spread(args)) : console.log.apply(console, __spread([_prefix], args));
    }
    gea.log = log;
    function info() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        _prefix == null ? console.info.apply(console, __spread(args)) : console.info.apply(console, __spread([_prefix], args));
    }
    gea.info = info;
    function warn() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        _prefix == null ? console.warn.apply(console, __spread(args)) : console.warn.apply(console, __spread([_prefix], args));
    }
    gea.warn = warn;
    function error() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        _prefix == null ? console.error.apply(console, __spread(args)) : console.error.apply(console, __spread([_prefix], args));
    }
    gea.error = error;
    function setLogPrefix(prefix) {
        _prefix = prefix;
    }
    gea.setLogPrefix = setLogPrefix;
})(gea || (gea = {}));

(function (gea) {
    var events;
    (function (events) {
        var base;
        (function (base) {
            base["localtime_reduced"] = "gea.events.base.localtime_reduced";
            base["enter_background"] = "gea.events.base.enter_background";
            base["enter_foreground"] = "gea.events.base.enter_foreground";
            base["room_unavailable"] = "gea.events.base.room_unavailable";
        })(base = events.base || (events.base = {}));
    })(events = gea.events || (gea.events = {}));
})(gea || (gea = {}));

(function (gea) {
    var discriminator;
    (function (discriminator) {
        var interfaces;
        (function (interfaces) {
            interfaces["callback"] = "gea.interfaces.base.ICallback";
        })(interfaces = discriminator.interfaces || (discriminator.interfaces = {}));
    })(discriminator = gea.discriminator || (gea.discriminator = {}));
})(gea || (gea = {}));

(function (gea) {
    var PoolManager = (function () {
        function PoolManager() {
            this._mapPool = new Map;
        }
        PoolManager.prototype.borrow = function (poolClass) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var uuid = gea.uuid(poolClass);
            var pool = this._mapPool.get(uuid);
            if (pool == null) {
                pool = new Set();
                this._mapPool.set(uuid, pool);
            }
            var next = pool.values().next();
            var ins = next.value;
            if (ins != null) {
                pool.delete(ins);
            }
            else {
                ins = new poolClass();
            }
            if (ins.callbackAfterBorrow) {
                ins.callbackAfterBorrow.apply(ins, __spread(args));
            }
            return ins;
        };
        PoolManager.prototype.restore = function (ins) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            if (!ins) {
                gea.error("restore element is null, check your logic!");
                return;
            }
            if (!ins.callbackBeforeRestore || ins.callbackBeforeRestore.apply(ins, __spread(args))) {
                var pool_1 = this._mapPool.get(gea.uuid(ins.constructor));
                if (pool_1 != null) {
                    if (!pool_1.has(ins)) {
                        pool_1.add(ins);
                    }
                    else {
                        gea.error('pool restore repeated, please check your logic!', JSON.stringify(ins));
                    }
                }
                else {
                    pool_1 = new Set();
                    this._mapPool.set(gea.uuid(ins.constructor), pool_1);
                    pool_1.add(ins);
                }
            }
        };
        return PoolManager;
    }());
    gea.pool = new PoolManager();
})(gea || (gea = {}));

(function (gea) {
    var UUID = 0;
    function uuid(target, scope) {
        if (target == null) {
            throw new Error('target is null');
        }
        if (target.constructor === String || target.constructor === Number) {
            return target;
        }
        if (target['gea.uuid'] == null) {
            UUID++;
            Object.defineProperty(target, 'gea.uuid', {
                value: 'gea.uuid' + UUID,
                writable: false,
                configurable: false,
                enumerable: false,
            });
        }
        if (scope != null && scope.constructor !== String && scope.constructor !== Number) {
            if (scope['gea.uuid'] == null) {
                UUID++;
                Object.defineProperty(scope, 'gea.uuid', {
                    value: 'gea.uuid' + UUID,
                    writable: false,
                    configurable: false,
                    enumerable: false,
                });
            }
            return scope['gea.uuid'] + '_' + target['gea.uuid'];
        }
        return target['gea.uuid'];
    }
    gea.uuid = uuid;
})(gea || (gea = {}));

(function (gea) {
    var Callback = (function () {
        function Callback() {
            this._mustRestoreAfterExcute = false;
            this._excuting = false;
        }
        Object.defineProperty(Callback.prototype, "discriminator", {
            get: function () {
                return gea.discriminator.interfaces.callback;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Callback.prototype, "lastTime", {
            get: function () {
                return this._callbackLimite || Infinity;
            },
            enumerable: false,
            configurable: true
        });
        Callback.prototype.callbackLimite = function (value) {
            if (value == null) {
                return this._callbackLimite;
            }
            if (isNaN(value)) {
                gea.warn('value must be a number');
                return this;
            }
            else if (value <= 0) {
                value = Infinity;
            }
            if (this._mustRestoreAfterExcute) {
                this._mustRestoreAfterExcute = false;
                this._callbackLimite += value;
            }
            else if (this._excuting) {
                this._callbackLimite = value + 1;
            }
            else {
                this._callbackLimite = value;
            }
            return this;
        };
        Callback.prototype.args = function () {
            var callbackArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                callbackArgs[_i] = arguments[_i];
            }
            this._callbackArgs = callbackArgs;
            return this;
        };
        Callback.prototype.excute = function () {
            var _a;
            var extraArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                extraArgs[_i] = arguments[_i];
            }
            if (this._callback != null) {
                this._excuting = true;
                if (--this._callbackLimite === 0) {
                    this._mustRestoreAfterExcute = true;
                }
                (_a = this._callback).call.apply(_a, __spread([this._scope], this._callbackArgs, extraArgs));
                this._excuting = false;
                if (this._mustRestoreAfterExcute) {
                    this._mustRestoreAfterExcute = false;
                    gea.pool.restore(this);
                }
            }
            else {
                gea.error('callback is null, but some where excute again!');
            }
            return this;
        };
        Callback.prototype.restore = function () {
            gea.log('callback restore', gea.uuid(this));
        };
        Callback.prototype.callbackAfterBorrow = function (callback, scope) {
            if (callback == null) {
                throw new Error("$'callback' can't be null!");
            }
            this._callback = callback;
            this._scope = scope;
            this._callbackLimite = 0;
        };
        Callback.prototype.callbackBeforeRestore = function () {
            if (!this._mustRestoreAfterExcute && !this._excuting) {
                this._callback = null;
                this._scope = null;
                this._callbackArgs = null;
                return true;
            }
            return false;
        };
        Callback.prototype.destroy = function () {
            var _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (this._callback != null) {
                (_a = gea.pool).restore.apply(_a, __spread([this], args));
            }
        };
        return Callback;
    }());
    function callback(callback, scope) {
        var _a;
        var callbackArgs = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            callbackArgs[_i - 2] = arguments[_i];
        }
        return (_a = gea.pool.borrow(Callback, callback, scope)).args.apply(_a, __spread(callbackArgs));
    }
    gea.callback = callback;
})(gea || (gea = {}));

(function (gea) {
    var utility;
    (function (utility) {
        var dispatcher;
        (function (dispatcher_1) {
            var Dispatcher = (function () {
                function Dispatcher() {
                    this._mapCallbacksByTag = new Map();
                    this._mapCallbacksByScope = new Map();
                }
                Dispatcher.prototype.callbackAfterBorrow = function () {
                    return this;
                };
                Dispatcher.prototype.callbackBeforeRestore = function () {
                    return true;
                };
                Dispatcher.prototype.once = function (tag, callback, scope) {
                    var callbackArgs = [];
                    for (var _i = 3; _i < arguments.length; _i++) {
                        callbackArgs[_i - 3] = arguments[_i];
                    }
                    this.register.apply(this, __spread([false, tag, 1, callback, scope], callbackArgs));
                    return this;
                };
                Dispatcher.prototype.oncePrior = function (tag, callback, scope) {
                    var callbackArgs = [];
                    for (var _i = 3; _i < arguments.length; _i++) {
                        callbackArgs[_i - 3] = arguments[_i];
                    }
                    this.register.apply(this, __spread([true, tag, 1, callback, scope], callbackArgs));
                    return this;
                };
                Dispatcher.prototype.on = function (tag, callbackLimite, callback, scope) {
                    var callbackArgs = [];
                    for (var _i = 4; _i < arguments.length; _i++) {
                        callbackArgs[_i - 4] = arguments[_i];
                    }
                    this.register.apply(this, __spread([false, tag, callbackLimite, callback, scope], callbackArgs));
                    return this;
                };
                Dispatcher.prototype.onPrior = function (tag, callbackLimite, callback, scope) {
                    var callbackArgs = [];
                    for (var _i = 4; _i < arguments.length; _i++) {
                        callbackArgs[_i - 4] = arguments[_i];
                    }
                    this.register.apply(this, __spread([true, tag, callbackLimite, callback, scope], callbackArgs));
                    return this;
                };
                Dispatcher.prototype.off = function (tag, callback, scope) {
                    this.deRegister(false, tag, callback, scope).deRegister(true, tag, callback, scope);
                    return this;
                };
                Dispatcher.prototype.offByScope = function (scope) {
                    var _this = this;
                    var uuidScope = gea.uuid(scope);
                    var mapScope = this._mapCallbacksByScope.get(uuidScope);
                    if (mapScope) {
                        mapScope.forEach(function (setCallback, uuidTag) {
                            setCallback.forEach(function (uuidCallback) {
                                _this.deRegisterByUuid(uuidTag, uuidCallback, uuidScope);
                            });
                        });
                    }
                    return this;
                };
                Dispatcher.prototype.dispatch = function (tag) {
                    var _a;
                    var args = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        args[_i - 1] = arguments[_i];
                    }
                    var uuidTag = gea.uuid(tag);
                    (_a = this.dispatchDetail.apply(this, __spread(["prior_" + uuidTag], args))).dispatchDetail.apply(_a, __spread([uuidTag], args));
                    return this;
                };
                Dispatcher.prototype.dispatchDetail = function (uuidTag) {
                    var _this = this;
                    var args = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        args[_i - 1] = arguments[_i];
                    }
                    var mapTag = this._mapCallbacksByTag.get(uuidTag);
                    if (mapTag !== undefined) {
                        mapTag.forEach(function (callback, uuidCallback) {
                            callback.excute.apply(callback, __spread(args));
                            if (callback.callbackLimite() === 0) {
                                _this.deRegisterByUuid(uuidTag, uuidCallback, uuidCallback.split('_')[0]);
                            }
                        });
                    }
                    return this;
                };
                Dispatcher.prototype.register = function (prior, tag, callbackLimite, callback, scope) {
                    var callbackArgs = [];
                    for (var _i = 5; _i < arguments.length; _i++) {
                        callbackArgs[_i - 5] = arguments[_i];
                    }
                    if (callbackLimite.constructor !== Number) {
                        if (scope != null || callbackArgs.length > 0) {
                            callbackArgs.unshift(scope);
                        }
                        scope = callback;
                        callback = callbackLimite;
                        callbackLimite = 0;
                    }
                    var uuidTag = prior ? "prior_" + gea.uuid(tag) : gea.uuid(tag);
                    var mapTag = this._mapCallbacksByTag.get(uuidTag);
                    if (mapTag === undefined) {
                        mapTag = new Map();
                        this._mapCallbacksByTag.set(uuidTag, mapTag);
                    }
                    var uuidCallback = gea.uuid(callback, scope);
                    if (scope != null) {
                        var uuidScope = gea.uuid(scope);
                        var mapScope = this._mapCallbacksByScope.get(uuidScope);
                        if (mapScope === undefined) {
                            mapScope = new Map();
                            this._mapCallbacksByScope.set(uuidScope, mapScope);
                        }
                        var setCallback = mapScope.get(uuidTag);
                        if (setCallback === undefined) {
                            setCallback = new Set();
                            mapScope.set(uuidTag, setCallback);
                        }
                        setCallback.add(uuidCallback);
                    }
                    var callbackTmp = mapTag.get(uuidCallback);
                    if (callbackTmp === undefined) {
                        callbackTmp = gea.callback.apply(gea, __spread([callback, scope], callbackArgs)).callbackLimite(callbackLimite);
                        mapTag.set(uuidCallback, callbackTmp);
                    }
                    else {
                        callbackTmp.args.apply(callbackTmp, __spread(callbackArgs)).callbackLimite(callbackLimite);
                    }
                    return this;
                };
                Dispatcher.prototype.deRegister = function (prior, tag, callback, scope) {
                    this.deRegisterByUuid(prior ? "prior_" + gea.uuid(tag) : gea.uuid(tag), gea.uuid(callback, scope), gea.uuid(scope));
                    return this;
                };
                Dispatcher.prototype.deRegisterByUuid = function (uuidTag, uuidCallback, uuidScope) {
                    var mapTag = this._mapCallbacksByTag.get(uuidTag);
                    if (mapTag !== undefined) {
                        var callbackTmp = mapTag.get(uuidCallback);
                        if (callbackTmp !== undefined) {
                            mapTag.delete(uuidCallback);
                            callbackTmp.destroy();
                            if (mapTag.size === 0) {
                                this._mapCallbacksByTag.delete(uuidTag);
                            }
                        }
                    }
                    var mapScope = this._mapCallbacksByScope.get(uuidScope);
                    if (mapScope !== undefined) {
                        var setCallback = mapScope.get(uuidTag);
                        if (setCallback && setCallback.delete(uuidCallback)) {
                            if (setCallback.size === 0) {
                                mapScope.delete(uuidTag);
                                if (mapScope.size === 0) {
                                    this._mapCallbacksByScope.delete(uuidScope);
                                }
                            }
                        }
                    }
                };
                return Dispatcher;
            }());
            var mapDispatcher = new Map();
            function callDispatcher(instance, method) {
                var _a, _b;
                var args = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    args[_i - 2] = arguments[_i];
                }
                var disPatcher = mapDispatcher.get(gea.uuid(instance));
                if (disPatcher !== undefined) {
                    (_a = disPatcher[method]).call.apply(_a, __spread([disPatcher], args));
                }
                else {
                    disPatcher = gea.pool.borrow(Dispatcher);
                    mapDispatcher.set(gea.uuid(instance), disPatcher);
                    (_b = disPatcher[method]).call.apply(_b, __spread([disPatcher], args));
                }
            }
            function once(dispatcher, tag, callback, scope) {
                var callbackArgs = [];
                for (var _i = 4; _i < arguments.length; _i++) {
                    callbackArgs[_i - 4] = arguments[_i];
                }
                callDispatcher.apply(void 0, __spread([dispatcher, 'once', tag, callback, scope], callbackArgs));
            }
            dispatcher_1.once = once;
            function oncePrior(dispatcher, tag, callback, scope) {
                var callbackArgs = [];
                for (var _i = 4; _i < arguments.length; _i++) {
                    callbackArgs[_i - 4] = arguments[_i];
                }
                callDispatcher.apply(void 0, __spread([dispatcher, 'oncePrior', tag, callback, scope], callbackArgs));
            }
            dispatcher_1.oncePrior = oncePrior;
            function on(dispatcher, tag, callbackLimite, callback, scope) {
                var callbackArgs = [];
                for (var _i = 5; _i < arguments.length; _i++) {
                    callbackArgs[_i - 5] = arguments[_i];
                }
                callDispatcher.apply(void 0, __spread([dispatcher, 'on', tag, callbackLimite, callback, scope], callbackArgs));
            }
            dispatcher_1.on = on;
            function onPrior(dispatcher, tag, callbackLimite, callback, scope) {
                var callbackArgs = [];
                for (var _i = 5; _i < arguments.length; _i++) {
                    callbackArgs[_i - 5] = arguments[_i];
                }
                callDispatcher.apply(void 0, __spread([dispatcher, 'onPrior', tag, callbackLimite, callback, scope], callbackArgs));
            }
            dispatcher_1.onPrior = onPrior;
            function off(dispatcher, tag, callback, scope) {
                callDispatcher(dispatcher, 'off', tag, callback, scope);
            }
            dispatcher_1.off = off;
            function offByScope(scope, dispatcher) {
                if (dispatcher != null) {
                    callDispatcher(dispatcher, 'offByScope', scope);
                }
                else {
                    mapDispatcher.forEach(function (dispatcher) {
                        callDispatcher(dispatcher, 'offByScope', scope);
                    });
                }
            }
            dispatcher_1.offByScope = offByScope;
            function dispatch(dispatcher, tag) {
                var args = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    args[_i - 2] = arguments[_i];
                }
                callDispatcher.apply(void 0, __spread([dispatcher, 'dispatch', tag], args));
            }
            dispatcher_1.dispatch = dispatch;
        })(dispatcher = utility.dispatcher || (utility.dispatcher = {}));
    })(utility = gea.utility || (gea.utility = {}));
})(gea || (gea = {}));

(function (gea) {
    var decorators;
    (function (decorators) {
        var base;
        (function (base) {
            var mapSingleton = new Map();
            function singleton(singletonConstructor) {
                return (function (_super) {
                    __extends(class_1, _super);
                    function class_1() {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        var _this = _super.apply(this, __spread(args)) || this;
                        var uuid = gea.uuid(singletonConstructor);
                        if (mapSingleton.has(uuid)) {
                            throw new Error(singletonConstructor.name + " is a singleton class, please don't duplicate instantiate it");
                        }
                        else {
                            mapSingleton.set(uuid, true);
                        }
                        return _this;
                    }
                    return class_1;
                }(singletonConstructor));
            }
            base.singleton = singleton;
        })(base = decorators.base || (decorators.base = {}));
    })(decorators = gea.decorators || (gea.decorators = {}));
})(gea || (gea = {}));

(function (gea) {
    var PAST_TIME = 0;
    var PREV_TIME = Date.now();
    var PAST_TIME_OBJ = window.performance || {
        now: function () {
            var now = Date.now();
            if (now < PREV_TIME) {
                PAST_TIME += 16;
            }
            else {
                PAST_TIME += now - PREV_TIME;
            }
            PREV_TIME = now;
            return PAST_TIME;
        },
    };
    var START_TIME = Math.round(window.performance && window.performance.timing && window.performance.timing.navigationStart || (Date.now() - PAST_TIME_OBJ.now()));
    var Gea = (function () {
        function Gea() {
            var _this = this;
            this._paused = false;
            if (document != null) {
                document.addEventListener('visibilitychange', function (event) {
                    gea.info('visibilitychange', 'hidden = ' + (event['hidden'] || document.hidden));
                    if (document.hidden || event['hidden']) {
                        _this.dispatch(gea.events.base.enter_background);
                    }
                    else {
                        _this.dispatch(gea.events.base.enter_foreground);
                    }
                });
            }
        }
        Object.defineProperty(Gea.prototype, "paused", {
            get: function () {
                return this._paused;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Gea.prototype, "localTime", {
            get: function () {
                return START_TIME + this.pastTime;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Gea.prototype, "pastTime", {
            get: function () {
                return Math.floor(PAST_TIME_OBJ.now());
            },
            enumerable: false,
            configurable: true
        });
        Gea.prototype.pause = function () {
            if (this._paused === false) {
                this._paused = true;
            }
        };
        Gea.prototype.resume = function () {
            if (this._paused === true) {
                this._paused = false;
            }
        };
        Gea.prototype.once = function (tag, callback, scope) {
            var _a;
            var callbackArgs = [];
            for (var _i = 3; _i < arguments.length; _i++) {
                callbackArgs[_i - 3] = arguments[_i];
            }
            (_a = gea.utility.dispatcher).once.apply(_a, __spread([this, tag, callback, scope], callbackArgs));
            return this;
        };
        Gea.prototype.oncePrior = function (tag, callback, scope) {
            var _a;
            var callbackArgs = [];
            for (var _i = 3; _i < arguments.length; _i++) {
                callbackArgs[_i - 3] = arguments[_i];
            }
            (_a = gea.utility.dispatcher).oncePrior.apply(_a, __spread([this, tag, callback, scope], callbackArgs));
            return this;
        };
        Gea.prototype.on = function (tag, callbackLimit, callback, scope) {
            var _a;
            var callbackArgs = [];
            for (var _i = 4; _i < arguments.length; _i++) {
                callbackArgs[_i - 4] = arguments[_i];
            }
            (_a = gea.utility.dispatcher).on.apply(_a, __spread([this, tag, callbackLimit, callback, scope], callbackArgs));
            return this;
        };
        Gea.prototype.onPrior = function (tag, callbackLimit, callback, scope) {
            var _a;
            var callbackArgs = [];
            for (var _i = 4; _i < arguments.length; _i++) {
                callbackArgs[_i - 4] = arguments[_i];
            }
            (_a = gea.utility.dispatcher).onPrior.apply(_a, __spread([this, tag, callbackLimit, callback, scope], callbackArgs));
            return this;
        };
        Gea.prototype.off = function (tag, callback, scope) {
            gea.utility.dispatcher.off(this, tag, callback, scope);
            return this;
        };
        Gea.prototype.offByScope = function (scope) {
            gea.utility.dispatcher.offByScope(scope, this);
            return this;
        };
        Gea.prototype.dispatch = function (tag) {
            var _a;
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            (_a = gea.utility.dispatcher).dispatch.apply(_a, __spread([this, tag], args));
            return this;
        };
        Gea = __decorate([
            gea.decorators.base.singleton,
            __metadata("design:paramtypes", [])
        ], Gea);
        return Gea;
    }());
    gea.instance = new Gea();
})(gea || (gea = {}));

(function (gea) {
    var Polling = (function () {
        function Polling() {
            this._framRate = NaN;
            this._timerCostPerFrame = 1000 / this._framRate;
            this._prevAnimationTime = 0;
            this._requestAniFrame = null;
            this._animationCallback = null;
            this._animationCallback = this.animationFrameCallback.bind(this);
            this.frameRate = 60;
        }
        Object.defineProperty(Polling.prototype, "frameRate", {
            get: function () {
                return this._framRate;
            },
            set: function (value) {
                if (value !== this._framRate) {
                    this._framRate = value;
                    this._timerCostPerFrame = Math.floor(1000 / this._framRate);
                    this.frameRateChanged();
                }
            },
            enumerable: false,
            configurable: true
        });
        Polling.prototype.once = function (callback, scope) {
            var _a;
            var callbackArgs = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                callbackArgs[_i - 2] = arguments[_i];
            }
            (_a = gea.utility.dispatcher).once.apply(_a, __spread([this, 'gea.adapter.polling', callback, scope], callbackArgs));
            return this;
        };
        Polling.prototype.on = function (callbackLimite, callback, scope) {
            var _a;
            var callbackArgs = [];
            for (var _i = 3; _i < arguments.length; _i++) {
                callbackArgs[_i - 3] = arguments[_i];
            }
            (_a = gea.utility.dispatcher).on.apply(_a, __spread([this, 'gea.adapter.polling', callbackLimite, callback, scope], callbackArgs));
            return this;
        };
        Polling.prototype.off = function (callback, scope) {
            gea.utility.dispatcher.off(this, 'gea.adapter.polling', callback, scope);
            return this;
        };
        Polling.prototype.oncePrior = function (callback, scope) {
            var _a;
            var callbackArgs = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                callbackArgs[_i - 2] = arguments[_i];
            }
            (_a = gea.utility.dispatcher).oncePrior.apply(_a, __spread([this, 'gea.adapter.polling', callback, scope], callbackArgs));
            return this;
        };
        Polling.prototype.onPrior = function (callbackLimite, callback, scope) {
            var _a;
            var callbackArgs = [];
            for (var _i = 3; _i < arguments.length; _i++) {
                callbackArgs[_i - 3] = arguments[_i];
            }
            (_a = gea.utility.dispatcher).onPrior.apply(_a, __spread([this, 'gea.adapter.polling', callbackLimite, callback, scope], callbackArgs));
            return this;
        };
        Polling.prototype.offByScope = function (scope) {
            gea.utility.dispatcher.offByScope(scope, this);
            return this;
        };
        Polling.prototype.animationFrameCallback = function () {
            var curTime = gea.instance.pastTime;
            var pastTime = curTime - this._prevAnimationTime;
            this._prevAnimationTime = curTime;
            if (!gea.instance.paused) {
                gea.utility.dispatcher.dispatch(this, 'gea.adapter.polling', pastTime);
            }
            this._requestAniFrame(this._animationCallback);
        };
        Polling.prototype.requestAnimationFrame = function () {
            var _this = this;
            var curTime = gea.instance.pastTime;
            var pastTime = curTime - this._prevAnimationTime;
            var delayTime = Math.max(this._timerCostPerFrame - pastTime);
            window.setTimeout(function () {
                _this.animationFrameCallback();
            }, delayTime);
            this._prevAnimationTime = curTime + delayTime;
        };
        Polling.prototype.frameRateChanged = function () {
            if (60 % this._framRate !== 0) {
                this._requestAniFrame = this.requestAnimationFrame;
            }
            else {
                this._requestAniFrame = window.requestAnimationFrame.bind(window) ||
                    window.webkitRequestAnimationFrame.bind(window) ||
                    window['mozRequestAnimationFrame'].bind(window) ||
                    window['oRequestAnimationFrame'].bind(window) ||
                    window['msRequestAnimationFrame'].bind(window) ||
                    this.requestAnimationFrame;
            }
            this._prevAnimationTime = gea.instance.pastTime;
            this.animationFrameCallback();
        };
        return Polling;
    }());
    gea.polling = new Polling();
})(gea || (gea = {}));

(function (gea) {
    var _nowTimestamp = gea.instance.pastTime;
    var _prevTimestamp = _nowTimestamp;
    var _dicTimerCallback = {};
    var TimerCallback = (function () {
        function TimerCallback() {
        }
        Object.defineProperty(TimerCallback.prototype, "callback", {
            get: function () {
                return this._callback;
            },
            enumerable: false,
            configurable: true
        });
        TimerCallback.prototype.excute = function (uuid) {
            var diff = _nowTimestamp - this._nextCallbackTime;
            if (diff >= 0) {
                this._callback.excute();
                if (this._callback != null) {
                    if (this._callback.callbackLimite() > 0) {
                        this._nextCallbackTime = Math.max(this._callbackRate + _nowTimestamp - diff, _nowTimestamp);
                    }
                    else {
                        this._callback = null;
                        delete _dicTimerCallback[uuid];
                        gea.pool.restore(this);
                    }
                }
                else {
                    delete _dicTimerCallback[uuid];
                }
            }
        };
        TimerCallback.prototype.resetNextCallbackTime = function () {
            this._nextCallbackTime = gea.instance.pastTime + this._callbackRate;
        };
        TimerCallback.prototype.callbackAfterBorrow = function (interval, callback) {
            this._callback = callback;
            this._callbackRate = interval;
            this._nextCallbackTime = gea.instance.pastTime + interval;
        };
        TimerCallback.prototype.callbackBeforeRestore = function () {
            if (this._callback !== null) {
                this._callback.destroy();
            }
            this._callback = null;
            return true;
        };
        return TimerCallback;
    }());
    var Timer = (function () {
        function Timer() {
            gea.polling.on(this.enterFrame, this);
        }
        Timer.prototype.once = function (interval, callback, scope) {
            var _a;
            var callbackArgs = [];
            for (var _i = 3; _i < arguments.length; _i++) {
                callbackArgs[_i - 3] = arguments[_i];
            }
            var uuid = gea.uuid(callback, scope);
            var timerCallback = _dicTimerCallback[uuid];
            if (timerCallback == null) {
                timerCallback = gea.pool.borrow(TimerCallback, interval, gea.callback.apply(gea, __spread([callback, scope], callbackArgs)).callbackLimite(1));
                _dicTimerCallback[uuid] = timerCallback;
            }
            else {
                (_a = timerCallback.callback).args.apply(_a, __spread(callbackArgs)).callbackLimite(1);
            }
            return this;
        };
        Timer.prototype.on = function (interval, callbackLimite, callback, scope) {
            var _a;
            var callbackArgs = [];
            for (var _i = 4; _i < arguments.length; _i++) {
                callbackArgs[_i - 4] = arguments[_i];
            }
            if (callbackLimite.constructor !== Number) {
                if (scope != null || callbackArgs.length > 0) {
                    callbackArgs.unshift(scope);
                }
                scope = callback;
                callback = callbackLimite;
                callbackLimite = 0;
            }
            var uuid = gea.uuid(callback, scope);
            var timerCallback = _dicTimerCallback[uuid];
            if (timerCallback == null) {
                timerCallback = gea.pool.borrow(TimerCallback, interval, gea.callback.apply(gea, [callback, scope].concat(callbackArgs)).callbackLimite(callbackLimite));
                _dicTimerCallback[uuid] = timerCallback;
            }
            else {
                (_a = timerCallback.callback).args.apply(_a, __spread(callbackArgs)).callbackLimite(callbackLimite);
            }
            return this;
        };
        Timer.prototype.off = function (callback, scope) {
            var uuid = gea.uuid(callback, scope);
            var timerCallback = _dicTimerCallback[uuid];
            if (timerCallback != null) {
                gea.pool.restore(timerCallback);
                delete _dicTimerCallback[uuid];
            }
            return this;
        };
        Timer.prototype.offByScope = function (scope) {
            var uuid = gea.uuid(scope);
            Object.keys(_dicTimerCallback).forEach(function (key) {
                if (key.split('_')[0] === uuid) {
                    gea.pool.restore(_dicTimerCallback[key]);
                    delete _dicTimerCallback[key];
                }
            });
            return this;
        };
        Timer.prototype.enterFrame = function () {
            _nowTimestamp = gea.instance.pastTime;
            var diffTime = _nowTimestamp - _prevTimestamp;
            _prevTimestamp = _nowTimestamp;
            if (diffTime > 0) {
                var uuid_1;
                var timerCallback = void 0;
                for (uuid_1 in _dicTimerCallback) {
                    timerCallback = _dicTimerCallback[uuid_1];
                    timerCallback.excute(uuid_1);
                }
            }
            else if (diffTime < 0) {
                gea.error('localTime reduced!', diffTime);
                var uuid_2;
                var timerCallback = void 0;
                for (uuid_2 in _dicTimerCallback) {
                    timerCallback = _dicTimerCallback[uuid_2];
                    timerCallback.resetNextCallbackTime();
                }
                gea.instance.dispatch(gea.events.base.localtime_reduced, diffTime);
            }
        };
        return Timer;
    }());
    gea.timer = new Timer();
})(gea || (gea = {}));
var hago;
(function (hago) {
    var report;
    (function (report) {
        var MAP_REPORT_DATA = new Map();
        var EVENT_ID = '20190429';
        function eventid(value) {
            EVENT_ID = value;
        }
        report.eventid = eventid;
        function reportData() {
            var _this = this;
            var datas = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                datas[_i] = arguments[_i];
            }
            if (window['hg']) {
                if (hg.reportData) {
                    var data_1 = {
                        eventid: EVENT_ID, datas: datas,
                        success: function () {
                            MAP_REPORT_DATA.delete(data_1);
                        },
                        fail: function (res) {
                            gea.warn("hg.reportData failed! reason: " + JSON.stringify(res || {}));
                            gea.timer.once(500, function () {
                                gea.info("hg.reportData retry: " + JSON.stringify(data_1));
                                hg.reportData(data_1);
                            }, _this);
                        },
                    };
                    MAP_REPORT_DATA.set(data_1, data_1);
                    hg.reportData(data_1);
                }
                else {
                    gea.warn('当前版本不支持 上报自定义数据接口');
                }
            }
            else {
                gea.info("hg.reportData: " + JSON.stringify(datas));
            }
        }
        report.reportData = reportData;
    })(report = hago.report || (hago.report = {}));
})(hago || (hago = {}));
var hago;
(function (hago) {
    var friend;
    (function (friend) {
        var DIC_ADDED = {};
        function addFriend(uid, callback) {
            if (window['hg']) {
                if (hg.addFriend) {
                    var addedCode = DIC_ADDED[uid];
                    if (!addedCode) {
                        hg.addFriend({
                            uid: Number(uid),
                            success: function (res) {
                                DIC_ADDED[uid] = res.code;
                                callback(uid, true, res.code);
                            },
                            fail: function (res) {
                                callback(uid, false, res.code);
                            },
                        });
                    }
                    else {
                        callback(uid, true, addedCode);
                    }
                }
            }
            else {
                gea.info("hg.addFriend: " + uid);
                if (Math.random() > 0.5) {
                    callback(uid, true, 1);
                }
                else {
                    callback(uid, false, 321);
                }
            }
        }
        friend.addFriend = addFriend;
    })(friend = hago.friend || (hago.friend = {}));
})(hago || (hago = {}));

(function (gea) {
    var decorators;
    (function (decorators) {
        var base;
        (function (base) {
            function finallyInvoke(callback, scope) {
                return function (target, methodName, desc) {
                    var oMethod = desc.value;
                    desc.value = function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        oMethod.apply(this, args);
                        callback.call(scope || this);
                    };
                };
            }
            base.finallyInvoke = finallyInvoke;
        })(base = decorators.base || (decorators.base = {}));
    })(decorators = gea.decorators || (gea.decorators = {}));
})(gea || (gea = {}));

(function (gea) {
    var utility;
    (function (utility) {
        var entity;
        (function (entity_1) {
            var mapEntities = new Map();
            function addComponent(entity, component) {
                if (entity) {
                    var uuidEntity = gea.uuid(entity);
                    var uuidComponent = gea.uuid(component.constructor);
                    var mapComponents = mapEntities.get(uuidEntity);
                    if (mapComponents === undefined) {
                        mapComponents = new Map();
                        mapEntities.set(uuidEntity, mapComponents);
                    }
                    if (!mapComponents.has(uuidComponent)) {
                        mapComponents.set(uuidComponent, component);
                    }
                    else {
                        gea.warn("a same component should only add once on the same entity");
                    }
                }
                else {
                    gea.warn("entity is empty, addComponent failed!");
                }
                return component;
            }
            entity_1.addComponent = addComponent;
            function getComponent(entity, compClass, matchPrototype) {
                var e_1, _a;
                if (entity) {
                    var uuidEntity = gea.uuid(entity);
                    var mapComponents = mapEntities.get(uuidEntity);
                    if (mapComponents !== undefined) {
                        var uuidComponent = gea.uuid(compClass);
                        var result = mapComponents.get(uuidComponent);
                        if (result === undefined && matchPrototype) {
                            try {
                                for (var _b = __values(mapComponents.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                                    var comp = _c.value;
                                    if (comp instanceof compClass) {
                                        result = comp;
                                        break;
                                    }
                                }
                            }
                            catch (e_1_1) { e_1 = { error: e_1_1 }; }
                            finally {
                                try {
                                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                                }
                                finally { if (e_1) throw e_1.error; }
                            }
                        }
                        return result;
                    }
                }
                else {
                    gea.warn("entity is empty, getComponent failed!");
                }
                return undefined;
            }
            entity_1.getComponent = getComponent;
            function removeComponent(entity, compClass, matchPrototype) {
                var e_2, _a;
                if (entity) {
                    var uuidEntity = gea.uuid(entity);
                    var mapComponents = mapEntities.get(uuidEntity);
                    if (mapComponents !== undefined) {
                        var uuidComponent = gea.uuid(compClass);
                        var result = mapComponents.get(uuidComponent);
                        if (result === undefined && matchPrototype) {
                            try {
                                for (var _b = __values(mapComponents.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                                    var comp = _c.value;
                                    if (comp instanceof compClass) {
                                        result = comp;
                                        break;
                                    }
                                }
                            }
                            catch (e_2_1) { e_2 = { error: e_2_1 }; }
                            finally {
                                try {
                                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                                }
                                finally { if (e_2) throw e_2.error; }
                            }
                        }
                        return result;
                    }
                }
                else {
                    gea.warn("entity is empty, removeComponent failed");
                }
                return undefined;
            }
            entity_1.removeComponent = removeComponent;
        })(entity = utility.entity || (utility.entity = {}));
    })(utility = gea.utility || (gea.utility = {}));
})(gea || (gea = {}));

(function (gea) {
    var utility;
    (function (utility) {
        var interfaces;
        (function (interfaces) {
            function discriminate(target, discriminator) {
                var targetDiscriminator = target.discriminator;
                if (typeof targetDiscriminator === 'string') {
                    return targetDiscriminator === discriminator;
                }
                else {
                    return targetDiscriminator.indexOf(discriminator) !== -1;
                }
            }
            interfaces.discriminate = discriminate;
        })(interfaces = utility.interfaces || (utility.interfaces = {}));
    })(utility = gea.utility || (gea.utility = {}));
})(gea || (gea = {}));

(function (gea) {
    var enums;
    (function (enums) {
        var ui;
        (function (ui) {
            var ui_type;
            (function (ui_type) {
                ui_type[ui_type["view"] = 0] = "view";
                ui_type[ui_type["panel"] = 1] = "panel";
                ui_type[ui_type["window"] = 2] = "window";
                ui_type[ui_type["under_modal"] = 3] = "under_modal";
                ui_type[ui_type["modal"] = 4] = "modal";
                ui_type[ui_type["over_modal"] = 5] = "over_modal";
            })(ui_type = ui.ui_type || (ui.ui_type = {}));
            var layer_type;
            (function (layer_type) {
                layer_type[layer_type["view"] = 0] = "view";
                layer_type[layer_type["panel"] = 1] = "panel";
                layer_type[layer_type["window"] = 2] = "window";
                layer_type[layer_type["under_modal"] = 3] = "under_modal";
                layer_type[layer_type["modal"] = 4] = "modal";
                layer_type[layer_type["over_modal"] = 5] = "over_modal";
            })(layer_type = ui.layer_type || (ui.layer_type = {}));
        })(ui = enums.ui || (enums.ui = {}));
    })(enums = gea.enums || (gea.enums = {}));
})(gea || (gea = {}));

(function (gea) {
    var events;
    (function (events) {
        var ui;
        (function (ui) {
            ui["load_start"] = "gea.events.ui.load_start";
            ui["load_progress"] = "gea.events.ui.load_progress";
            ui["load_complete"] = "gea.events.ui.load_complete";
            ui["load_failed"] = "gea.events.ui.load_failed";
        })(ui = events.ui || (events.ui = {}));
    })(events = gea.events || (gea.events = {}));
})(gea || (gea = {}));

(function (gea) {
    var enums;
    (function (enums) {
        var tween;
        (function (tween) {
            var ease;
            (function (ease) {
                ease[ease["Linear"] = 0] = "Linear";
                ease[ease["SineIn"] = 1] = "SineIn";
                ease[ease["SineOut"] = 2] = "SineOut";
                ease[ease["SineInOut"] = 3] = "SineInOut";
                ease[ease["QuadIn"] = 4] = "QuadIn";
                ease[ease["QuadOut"] = 5] = "QuadOut";
                ease[ease["QuadInOut"] = 6] = "QuadInOut";
                ease[ease["CubicIn"] = 7] = "CubicIn";
                ease[ease["CubicOut"] = 8] = "CubicOut";
                ease[ease["CubicInOut"] = 9] = "CubicInOut";
                ease[ease["QuartIn"] = 10] = "QuartIn";
                ease[ease["QuartOut"] = 11] = "QuartOut";
                ease[ease["QuartInOut"] = 12] = "QuartInOut";
                ease[ease["QuintIn"] = 13] = "QuintIn";
                ease[ease["QuintOut"] = 14] = "QuintOut";
                ease[ease["QuintInOut"] = 15] = "QuintInOut";
                ease[ease["ExpoIn"] = 16] = "ExpoIn";
                ease[ease["ExpoOut"] = 17] = "ExpoOut";
                ease[ease["ExpoInOut"] = 18] = "ExpoInOut";
                ease[ease["CircIn"] = 19] = "CircIn";
                ease[ease["CircOut"] = 20] = "CircOut";
                ease[ease["CircInOut"] = 21] = "CircInOut";
                ease[ease["ElasticIn"] = 22] = "ElasticIn";
                ease[ease["ElasticOut"] = 23] = "ElasticOut";
                ease[ease["ElasticInOut"] = 24] = "ElasticInOut";
                ease[ease["BackIn"] = 25] = "BackIn";
                ease[ease["BackOut"] = 26] = "BackOut";
                ease[ease["BackInOut"] = 27] = "BackInOut";
                ease[ease["BounceIn"] = 28] = "BounceIn";
                ease[ease["BounceOut"] = 29] = "BounceOut";
                ease[ease["BounceInOut"] = 30] = "BounceInOut";
                ease[ease["EaseInOut"] = 31] = "EaseInOut";
            })(ease = tween.ease || (tween.ease = {}));
        })(tween = enums.tween || (enums.tween = {}));
    })(enums = gea.enums || (gea.enums = {}));
})(gea || (gea = {}));

(function (gea) {
    var discriminator;
    (function (discriminator) {
        var interfaces;
        (function (interfaces) {
            interfaces["tweener"] = "gea.interfaces.tween.ITweener";
        })(interfaces = discriminator.interfaces || (discriminator.interfaces = {}));
    })(discriminator = gea.discriminator || (gea.discriminator = {}));
})(gea || (gea = {}));

(function (gea) {
    var tween;
    (function (tween) {
        var ease;
        (function (ease) {
            var _PiOver2 = Math.PI * 0.5;
            var _TwoPi = Math.PI * 2;
            var Bounce;
            (function (Bounce) {
                function easeIn(time, duration) {
                    return 1 - easeOut(duration - time, duration);
                }
                Bounce.easeIn = easeIn;
                function easeOut(time, duration) {
                    if ((time /= duration) < (1 / 2.75)) {
                        return (7.5625 * time * time);
                    }
                    if (time < (2 / 2.75)) {
                        return (7.5625 * (time -= (1.5 / 2.75)) * time + 0.75);
                    }
                    if (time < (2.5 / 2.75)) {
                        return (7.5625 * (time -= (2.25 / 2.75)) * time + 0.9375);
                    }
                    return (7.5625 * (time -= (2.625 / 2.75)) * time + 0.984375);
                }
                Bounce.easeOut = easeOut;
                function easeInOut(time, duration) {
                    if (time < duration * 0.5) {
                        return easeIn(time * 2, duration) * 0.5;
                    }
                    return easeOut(time * 2 - duration, duration) * 0.5 + 0.5;
                }
                Bounce.easeInOut = easeInOut;
            })(Bounce || (Bounce = {}));
            function evaluate(easeType, time, duration, overshootOrAmplitude, period) {
                switch (easeType) {
                    case gea.enums.tween.ease.Linear:
                        return time / duration;
                    case gea.enums.tween.ease.EaseInOut:
                        var dt = time / duration * 2;
                        return dt < 1 ? (0.5 * Math.pow(dt, 1)) : (1 - 0.5 * Math.pow(2 - dt, 1));
                    case gea.enums.tween.ease.SineIn:
                        return -Math.cos(time / duration * _PiOver2) + 1;
                    case gea.enums.tween.ease.SineOut:
                        return Math.sin(time / duration * _PiOver2);
                    case gea.enums.tween.ease.SineInOut:
                        return -0.5 * (Math.cos(Math.PI * time / duration) - 1);
                    case gea.enums.tween.ease.QuadIn:
                        return (time /= duration) * time;
                    case gea.enums.tween.ease.QuadOut:
                        return -(time /= duration) * (time - 2);
                    case gea.enums.tween.ease.QuadInOut:
                        if ((time /= duration * 0.5) < 1) {
                            return 0.5 * time * time;
                        }
                        return -0.5 * ((--time) * (time - 2) - 1);
                    case gea.enums.tween.ease.CubicIn:
                        return (time /= duration) * time * time;
                    case gea.enums.tween.ease.CubicOut:
                        return ((time = time / duration - 1) * time * time + 1);
                    case gea.enums.tween.ease.CubicInOut:
                        if ((time /= duration * 0.5) < 1) {
                            return 0.5 * time * time * time;
                        }
                        return 0.5 * ((time -= 2) * time * time + 2);
                    case gea.enums.tween.ease.QuartIn:
                        return (time /= duration) * time * time * time;
                    case gea.enums.tween.ease.QuartOut:
                        return -((time = time / duration - 1) * time * time * time - 1);
                    case gea.enums.tween.ease.QuartInOut:
                        if ((time /= duration * 0.5) < 1) {
                            return 0.5 * time * time * time * time;
                        }
                        return -0.5 * ((time -= 2) * time * time * time - 2);
                    case gea.enums.tween.ease.QuintIn:
                        return (time /= duration) * time * time * time * time;
                    case gea.enums.tween.ease.QuintOut:
                        return ((time = time / duration - 1) * time * time * time * time + 1);
                    case gea.enums.tween.ease.QuintInOut:
                        if ((time /= duration * 0.5) < 1) {
                            return 0.5 * time * time * time * time * time;
                        }
                        return 0.5 * ((time -= 2) * time * time * time * time + 2);
                    case gea.enums.tween.ease.ExpoIn:
                        return (time === 0) ? 0 : Math.pow(2, 10 * (time / duration - 1));
                    case gea.enums.tween.ease.ExpoOut:
                        if (time === duration) {
                            return 1;
                        }
                        return (-Math.pow(2, -10 * time / duration) + 1);
                    case gea.enums.tween.ease.ExpoInOut:
                        if (time === 0) {
                            return 0;
                        }
                        if (time === duration) {
                            return 1;
                        }
                        if ((time /= duration * 0.5) < 1) {
                            return 0.5 * Math.pow(2, 10 * (time - 1));
                        }
                        return 0.5 * (-Math.pow(2, -10 * --time) + 2);
                    case gea.enums.tween.ease.CircIn:
                        return -(Math.sqrt(1 - (time /= duration) * time) - 1);
                    case gea.enums.tween.ease.CircOut:
                        return Math.sqrt(1 - (time = time / duration - 1) * time);
                    case gea.enums.tween.ease.CircInOut:
                        if ((time /= duration * 0.5) < 1) {
                            return -0.5 * (Math.sqrt(1 - time * time) - 1);
                        }
                        return 0.5 * (Math.sqrt(1 - (time -= 2) * time) + 1);
                    case gea.enums.tween.ease.ElasticIn:
                        var s0 = void 0;
                        if (time === 0) {
                            return 0;
                        }
                        if ((time /= duration) === 1) {
                            return 1;
                        }
                        if (period === 0) {
                            period = duration * 0.3;
                        }
                        if (overshootOrAmplitude < 1) {
                            overshootOrAmplitude = 1;
                            s0 = period / 4;
                        }
                        else {
                            s0 = period / _TwoPi * Math.asin(1 / overshootOrAmplitude);
                        }
                        return -(overshootOrAmplitude * Math.pow(2, 10 * (time -= 1)) * Math.sin((time * duration - s0) * _TwoPi / period));
                    case gea.enums.tween.ease.ElasticOut:
                        var s1 = void 0;
                        if (time === 0) {
                            return 0;
                        }
                        if ((time /= duration) === 1) {
                            return 1;
                        }
                        if (period === 0) {
                            period = duration * 0.3;
                        }
                        if (overshootOrAmplitude < 1) {
                            overshootOrAmplitude = 1;
                            s1 = period / 4;
                        }
                        else {
                            s1 = period / _TwoPi * Math.asin(1 / overshootOrAmplitude);
                        }
                        return (overshootOrAmplitude * Math.pow(2, -10 * time) * Math.sin((time * duration - s1) * _TwoPi / period) + 1);
                    case gea.enums.tween.ease.ElasticInOut:
                        var s = void 0;
                        if (time === 0) {
                            return 0;
                        }
                        if ((time /= duration * 0.5) === 2) {
                            return 1;
                        }
                        if (period === 0) {
                            period = duration * (0.3 * 1.5);
                        }
                        if (overshootOrAmplitude < 1) {
                            overshootOrAmplitude = 1;
                            s = period / 4;
                        }
                        else {
                            s = period / _TwoPi * Math.asin(1 / overshootOrAmplitude);
                        }
                        if (time < 1) {
                            return -0.5 * (overshootOrAmplitude * Math.pow(2, 10 * (time -= 1)) * Math.sin((time * duration - s) * _TwoPi / period));
                        }
                        return overshootOrAmplitude * Math.pow(2, -10 * (time -= 1)) * Math.sin((time * duration - s) * _TwoPi / period) * 0.5 + 1;
                    case gea.enums.tween.ease.BackIn:
                        return (time /= duration) * time * ((overshootOrAmplitude + 1) * time - overshootOrAmplitude);
                    case gea.enums.tween.ease.BackOut:
                        return ((time = time / duration - 1) * time * ((overshootOrAmplitude + 1) * time + overshootOrAmplitude) + 1);
                    case gea.enums.tween.ease.BackInOut:
                        if ((time /= duration * 0.5) < 1) {
                            return 0.5 * (time * time * (((overshootOrAmplitude *= (1.525)) + 1) * time - overshootOrAmplitude));
                        }
                        return 0.5 * ((time -= 2) * time * (((overshootOrAmplitude *= (1.525)) + 1) * time + overshootOrAmplitude) + 2);
                    case gea.enums.tween.ease.BounceIn:
                        return Bounce.easeIn(time, duration);
                    case gea.enums.tween.ease.BounceOut:
                        return Bounce.easeOut(time, duration);
                    case gea.enums.tween.ease.BounceInOut:
                        return Bounce.easeInOut(time, duration);
                    default:
                        return -(time /= duration) * (time - 2);
                }
            }
            ease.evaluate = evaluate;
        })(ease = tween.ease || (tween.ease = {}));
    })(tween = gea.tween || (gea.tween = {}));
})(gea || (gea = {}));

(function (gea) {
    var tween;
    (function (tween) {
        var _mapTweener = new Map();
        var easeOvershootOrAmplitude = 1.70158;
        var easePeriod = 0;
        var TweenInfo = (function () {
            function TweenInfo() {
                this._startCount = 0;
                this._completeCount = 0;
                this._reverse = false;
                this._delay = 0;
                this._delayFinishTime = 0;
                this._repeatCount = 0;
                this._repeatInterval = 0;
                this._yoyo = false;
                this._yoyoDelay = 0;
                this._yoyoing = false;
                this._propertyInited = false;
                this._startCallbackInvoked = false;
            }
            Object.defineProperty(TweenInfo.prototype, "duration", {
                get: function () {
                    return this._duration;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(TweenInfo.prototype, "totalDuration", {
                get: function () {
                    return this._totalDuration;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(TweenInfo.prototype, "delay", {
                get: function () {
                    return this._delay;
                },
                enumerable: false,
                configurable: true
            });
            TweenInfo.prototype.callbackAfterBorrow = function (tweener, duration, propertyFrom, propertyTo, option) {
                this._tweener = tweener;
                this._from = propertyFrom || {};
                this._to = propertyTo || {};
                this._duration = duration;
                this._propertyInited = this._startCallbackInvoked = false;
                option = option || {};
                this._easeType = option.easeType || gea.enums.tween.ease.Linear;
                this._delay = option.delay || 0;
                this._yoyo = option.yoyo || false;
                this._yoyoDelay = option.yoyoDelay || 0;
                this._yoyoing = false;
                this._reverse = false;
                if (option.repeatCount == null) {
                    this._repeatCount = 0;
                }
                else {
                    if (option.repeatCount < 0) {
                        this._repeatCount = Infinity;
                    }
                    else {
                        this._repeatCount = option.repeatCount;
                    }
                    this._repeatInterval = option.repeatInterval || 0;
                }
                var durationOnce = this._duration + (this._yoyo ? this._yoyoDelay + this._duration : 0);
                this._totalDuration = durationOnce + (this._repeatInterval + durationOnce) * this._repeatCount;
                if (option.callbackStart) {
                    this._callbackStart = option.callbackStart;
                    this._callbackStartScope = option.callbackStartScope;
                    this._callbackStartArgs = option.callbackStartArgs || [];
                }
                if (option.callbackCompolete) {
                    this._callbackComplete = option.callbackCompolete;
                    this._callbackCompleteScope = option.callbackCompleteScope;
                    this._callbackCompleteArgs = option.callbackCompleteArgs || [];
                }
            };
            TweenInfo.prototype.callbackBeforeRestore = function () {
                this._tweener = this._from = this._to =
                    this._callbackStart = this._callbackStartScope = this._callbackStartArgs =
                        this._callbackComplete = this._callbackCompleteScope = this._callbackCompleteArgs = null;
                if (this._listProperty) {
                    this._listProperty.length = 0;
                }
                return true;
            };
            TweenInfo.prototype.destroy = function () {
                gea.pool.restore(this);
            };
            TweenInfo.prototype.start = function (reverse) {
                this.initProperty();
                this._startCount = this._completeCount = this._delayFinishTime = 0;
                this._reverse = reverse;
                this._startCallbackInvoked = false;
            };
            TweenInfo.prototype.update = function () {
                if (gea.instance.pastTime < this._delayFinishTime) {
                    return false;
                }
                this.startCallback();
                var pastTime = gea.instance.pastTime - this._startTime;
                var key;
                if (pastTime < this._duration) {
                    var normalizedTime = gea.tween.ease.evaluate(this._easeType, pastTime, this._duration, easeOvershootOrAmplitude, easePeriod);
                    var from_1;
                    var to_1;
                    for (var i = 0; i < this._listProperty.length; i++) {
                        key = this._listProperty[i];
                        from_1 = this._from[key];
                        to_1 = this._to[key];
                        this._tweener.target[key] = (this._yoyoing || (this._reverse && !this._yoyo)) ? (to_1 + (from_1 - to_1) * normalizedTime) : (from_1 + (to_1 - from_1) * normalizedTime);
                    }
                }
                else {
                    for (var i = 0; i < this._listProperty.length; i++) {
                        key = this._listProperty[i];
                        this._tweener.target[key] = (this._yoyoing || (this._reverse && !this._yoyo)) ? this._from[key] : this._to[key];
                    }
                    this.complete();
                    return this._completeCount > this._repeatCount;
                }
                return false;
            };
            TweenInfo.prototype.forceComplete = function () {
                var key;
                for (var i = 0; i < this._listProperty.length; i++) {
                    key = this._listProperty[i];
                    this._tweener.target[key] = (this._yoyoing || (this._reverse && !this._yoyo)) ? this._from[key] : this._to[key];
                }
            };
            TweenInfo.prototype.initProperty = function () {
                var _this = this;
                if (!this._propertyInited) {
                    this._propertyInited = true;
                    var target_1 = this._tweener.target;
                    Object.keys(this._from).forEach(function (property) {
                        if (_this._to[property] == null) {
                            _this._to[property] = target_1[property];
                        }
                    });
                    this._listProperty = Object.keys(this._to);
                    this._listProperty.forEach(function (property) {
                        if (_this._from[property] == null) {
                            _this._from[property] = target_1[property];
                        }
                    });
                }
            };
            TweenInfo.prototype.complete = function () {
                this.completeCallback();
                if (this._yoyo) {
                    this._yoyoing = !this._yoyoing;
                    this._yoyoing && (this._delayFinishTime = gea.instance.pastTime + this._yoyoDelay);
                }
            };
            TweenInfo.prototype.startCallback = function () {
                var _a;
                if (this._startCallbackInvoked) {
                    return;
                }
                this._startCallbackInvoked = true;
                this._startCount++;
                if (this._callbackStart && !this._reverse && (!this._yoyo || !this._yoyoing)) {
                    (_a = this._callbackStart).call.apply(_a, __spread([this._callbackStartScope, this._tweener, this._startCount, this._repeatCount], this._callbackStartArgs));
                }
                this._startTime = gea.instance.pastTime;
            };
            TweenInfo.prototype.completeCallback = function () {
                var _a;
                this._startCallbackInvoked = false;
                if (this._yoyo && !this._yoyoing) {
                    return;
                }
                this._delayFinishTime = gea.instance.pastTime + this._repeatInterval;
                this._completeCount++;
                if (this._callbackComplete && !this._reverse) {
                    (_a = this._callbackComplete).call.apply(_a, __spread([this._callbackCompleteScope, this._tweener, this._completeCount, this._repeatCount], this._callbackCompleteArgs));
                }
            };
            return TweenInfo;
        }());
        var Tweener = (function () {
            function Tweener() {
                this._totalDuration = 0;
                this._autoDestory = true;
                this._running = false;
                this._startCount = 0;
                this._completeCount = 0;
                this._repeatCount = 0;
                this._repeatInterval = 0;
                this._yoyo = false;
                this._yoyoDelay = 0;
                this._listTweenInfo = [];
                this._tweenIndex = -1;
                this._tweenStep = 1;
            }
            Object.defineProperty(Tweener.prototype, "discriminator", {
                get: function () {
                    return gea.discriminator.interfaces.tweener;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(Tweener.prototype, "totalDuration", {
                get: function () {
                    return this._totalDuration;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(Tweener.prototype, "target", {
                get: function () {
                    return this._target;
                },
                enumerable: false,
                configurable: true
            });
            Tweener.prototype.destroy = function (forceComplete) {
                if (forceComplete === void 0) { forceComplete = false; }
                if (forceComplete) {
                    this.forceComplete();
                }
                gea.pool.restore(this);
            };
            Tweener.prototype.delay = function (value) {
                this._listTweenInfo.push(value);
                return this;
            };
            Tweener.prototype.callback = function (callback, scope) {
                var args = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    args[_i - 2] = arguments[_i];
                }
                this._listTweenInfo.push(gea.callback.apply(gea, __spread([callback, scope], args)));
                return this;
            };
            Tweener.prototype.repeatCount = function (value) {
                if (value < 0) {
                    this._repeatCount = Infinity;
                }
                else {
                    this._repeatCount = value;
                }
                return this;
            };
            Tweener.prototype.repeatInterval = function (value) {
                this._repeatInterval = value;
                return this;
            };
            Tweener.prototype.yoyo = function (value) {
                this._yoyo = !!value;
                return this;
            };
            Tweener.prototype.yoyoDelay = function (value) {
                this._yoyoDelay = value;
                return this;
            };
            Tweener.prototype.start = function () {
                if (!this._running) {
                    this._running = true;
                    this._tweenIndex = -1;
                    this._tweenStep = 1;
                    this._startCount = this._completeCount = 0;
                    this.handleNext();
                }
                return this;
            };
            Tweener.prototype.pause = function () {
                gea.warn("not support yet!");
                return this;
            };
            Tweener.prototype.resume = function () {
                gea.warn("not support yet!");
                return this;
            };
            Tweener.prototype.stop = function () {
                gea.warn("not support yet!");
                return this;
            };
            Tweener.prototype.reStart = function () {
                gea.warn("not support yet!");
                return this;
            };
            Tweener.prototype.from = function (duration, property, option) {
                this.appendTweenInfo(duration, property, null, option);
                return this;
            };
            Tweener.prototype.to = function (duration, property, option) {
                this.appendTweenInfo(duration, null, property, option);
                return this;
            };
            Tweener.prototype.fromTo = function (duration, propertyFrom, propertyTo, option) {
                this.appendTweenInfo(duration, propertyFrom, propertyTo, option);
                return this;
            };
            Tweener.prototype.appendCallbackStart = function (callback, scope) {
                var callbackArgs = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    callbackArgs[_i - 2] = arguments[_i];
                }
                this._listCallbackStart.push({
                    callback: callback,
                    scope: scope,
                    args: callbackArgs,
                });
                return this;
            };
            Tweener.prototype.appendCallbackUpdate = function (callback, scope) {
                var callbackArgs = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    callbackArgs[_i - 2] = arguments[_i];
                }
                this._listCallbackUpdate.push({
                    callback: callback,
                    scope: scope,
                    args: callbackArgs,
                });
                return this;
            };
            Tweener.prototype.appendCallbackComplete = function (callback, scope) {
                var callbackArgs = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    callbackArgs[_i - 2] = arguments[_i];
                }
                this._listCallbackComplete.push({
                    callback: callback,
                    scope: scope,
                    args: callbackArgs,
                });
                return this;
            };
            Tweener.prototype.callbackAfterBorrow = function (target, autoDestroy) {
                this._totalDuration = 0;
                this._target = target;
                this._autoDestory = autoDestroy;
                this._repeatCount = this._repeatInterval = 0;
                this._yoyo = false;
                this._listCallbackStart = [];
                this._listCallbackUpdate = [];
                this._listCallbackComplete = [];
                _mapTweener.set(gea.uuid(target), this);
            };
            Tweener.prototype.callbackBeforeRestore = function () {
                _mapTweener.delete(gea.uuid(this._target));
                gea.polling.off(this.tweening, this);
                gea.timer.offByScope(this);
                this._running = false;
                this._listCallbackStart = this._listCallbackUpdate = this._listCallbackComplete = [];
                this._target = this._tweeningInfo = null;
                this._listTweenInfo.forEach(function (tweenInfo) {
                    if (tweenInfo instanceof TweenInfo) {
                        tweenInfo.destroy();
                    }
                    else if (typeof tweenInfo !== 'number') {
                        gea.pool.restore(tweenInfo);
                    }
                });
                this._listTweenInfo.length = 0;
                return true;
            };
            Tweener.prototype.forceComplete = function () {
                var tweenInfo;
                var tweenInfoIndex = this._listTweenInfo.length - 1;
                var tweenInfoSearchStep = -1;
                if (this._yoyo) {
                    tweenInfoIndex = 0;
                    tweenInfoSearchStep = 1;
                }
                tweenInfo = this._listTweenInfo[tweenInfoIndex];
                while (tweenInfo && !(tweenInfo instanceof TweenInfo)) {
                    tweenInfoIndex += tweenInfoSearchStep;
                    tweenInfo = this._listTweenInfo[tweenInfoIndex];
                }
                if (tweenInfo) {
                    tweenInfo.forceComplete();
                }
                return this;
            };
            Tweener.prototype.appendTweenInfo = function (duration, from, to, option) {
                var tweenInfo = gea.pool.borrow(TweenInfo, this, duration, from, to, option);
                this._totalDuration += tweenInfo.duration;
                this._listTweenInfo.push(tweenInfo);
            };
            Tweener.prototype.handleNext = function () {
                gea.polling.off(this.tweening, this);
                if (this._tweenStep === -1 && this._tweeningInfo && this._tweeningInfo.delay > 0) {
                    gea.timer.once(this._tweeningInfo.delay, this.handleNext, this);
                    this._tweeningInfo = null;
                    return;
                }
                this._tweenIndex += this._tweenStep;
                var tweenInfo = this._listTweenInfo[this._tweenIndex];
                if (tweenInfo == null) {
                    this.tweenComplete();
                }
                else {
                    if (typeof tweenInfo === 'number') {
                        this._tweeningInfo = null;
                        gea.timer.once(tweenInfo, this.handleNext, this);
                    }
                    else if (tweenInfo instanceof TweenInfo) {
                        this._tweeningInfo = tweenInfo;
                        (this._tweeningInfo.delay > 0 && this._tweenStep === 1) ? gea.timer.once(this._tweeningInfo.delay, this.tweenNext, this) : this.tweenNext();
                    }
                    else {
                        tweenInfo.excute(this);
                        this.handleNext();
                    }
                }
            };
            Tweener.prototype.tweenNext = function () {
                var _this = this;
                this._tweenStep === 1 && ++this._startCount && this._tweenIndex === 0 && this._listCallbackStart.forEach(function (callbackInfo) {
                    var _a;
                    (_a = callbackInfo.callback).call.apply(_a, __spread([callbackInfo.scope, _this, _this._startCount, _this._repeatCount], callbackInfo.args));
                });
                this._tweeningInfo.start(this._tweenStep === -1);
                gea.polling.on(this.tweening, this);
                this.tweening();
            };
            Tweener.prototype.tweenComplete = function () {
                this.completeCallback();
                if (this._completeCount > this._repeatCount) {
                    this._autoDestory && gea.pool.restore(this);
                }
                else {
                    this._tweeningInfo = null;
                    this._yoyo ? (this._tweenStep *= -1) : (this._tweenIndex = -1);
                    if (this._tweenStep === 1) {
                        this._repeatInterval > 0 ? gea.timer.once(this._repeatInterval, this.handleNext, this) : this.handleNext();
                    }
                    else {
                        this._yoyoDelay > 0 ? gea.timer.once(this._yoyoDelay, this.handleNext, this) : this.handleNext();
                    }
                }
            };
            Tweener.prototype.completeCallback = function () {
                var _this = this;
                if (this._yoyo && this._tweenStep === 1) {
                    return;
                }
                this._completeCount++;
                this._listCallbackComplete.forEach(function (callbackInfo) {
                    var _a;
                    (_a = callbackInfo.callback).call.apply(_a, __spread([callbackInfo.scope, _this, _this._completeCount, _this._repeatCount], callbackInfo.args));
                });
            };
            Tweener.prototype.tweening = function () {
                var _a;
                var finished = this._tweeningInfo.update();
                var callbackInfo;
                for (var i = 0; i < this._listCallbackUpdate.length; i++) {
                    callbackInfo = this._listCallbackUpdate[i];
                    (_a = callbackInfo.callback).call.apply(_a, __spread([callbackInfo.scope, this], callbackInfo.args));
                }
                if (finished) {
                    this.handleNext();
                }
            };
            return Tweener;
        }());
        function from(target, duration, property, option) {
            kill(target);
            return gea.pool.borrow(Tweener, target, true).from(duration, property, option).start();
        }
        tween.from = from;
        function to(target, duration, property, option) {
            kill(target);
            return gea.pool.borrow(Tweener, target, true).to(duration, property, option).start();
        }
        tween.to = to;
        function fromTo(target, duration, propertyFrom, propertyTo, option) {
            kill(target);
            return gea.pool.borrow(Tweener, target, true).fromTo(duration, propertyFrom, propertyTo, option).start();
        }
        tween.fromTo = fromTo;
        function kill(target, forceComplete) {
            if (forceComplete === void 0) { forceComplete = false; }
            var uuid = gea.uuid(target);
            if (_mapTweener.has(uuid)) {
                _mapTweener.get(uuid).destroy(forceComplete);
                _mapTweener.delete(uuid);
            }
        }
        tween.kill = kill;
    })(tween = gea.tween || (gea.tween = {}));
})(gea || (gea = {}));

(function (gea) {
    var adapters;
    (function (adapters) {
        var abstracts;
        (function (abstracts) {
            var ui;
            (function (ui) {
                var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
                var UIBase = (function (_super) {
                    __extends(UIBase, _super);
                    function UIBase() {
                        var _this = _super.call(this) || this;
                        _this.preAssets = [];
                        _this._nodePreventTapClose = null;
                        _this._autoRelease = true;
                        _this._autoReleaseDelayTime = 0;
                        _this._blockEvents = false;
                        _this._multiInstance = false;
                        if (!CC_EDITOR) {
                            cc.director.once(cc.Director.EVENT_AFTER_UPDATE, function () {
                                if (_this.node && _this._nodePreventTapClose) {
                                    var worldPos = _this._nodePreventTapClose.parent.convertToWorldSpaceAR(_this._nodePreventTapClose.getPosition());
                                    var left_1 = worldPos.x - _this._nodePreventTapClose.width * _this._nodePreventTapClose.anchorX;
                                    var top_1 = worldPos.y + _this.nodePreventTapClose.height * _this._nodePreventTapClose.anchorY;
                                    var right_1 = left_1 + _this._nodePreventTapClose.width;
                                    var bottom_1 = top_1 - _this._nodePreventTapClose.height;
                                    _this.node.on(cc.Node.EventType.TOUCH_END, function (e) {
                                        var touchX = e.touch.getLocationX();
                                        var touchY = e.touch.getLocationY();
                                        if (touchX < left_1 || touchX > right_1 || touchY < bottom_1 || touchY > top_1) {
                                            gea.ui.hide(_this.constructor);
                                        }
                                    });
                                }
                            });
                        }
                        return _this;
                    }
                    UIBase_1 = UIBase;
                    Object.defineProperty(UIBase, "modal", {
                        get: function () {
                            return this.DEFAULT_SETUP.modal;
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(UIBase, "prefabUrl", {
                        get: function () {
                            throw new Error('please override in subclass!');
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(UIBase, "uiType", {
                        get: function () {
                            throw new Error('please override in subClass!');
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(UIBase.prototype, "customTweenShow", {
                        get: function () {
                            return undefined;
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(UIBase.prototype, "customTweenHide", {
                        get: function () {
                            return undefined;
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(UIBase, "runTimeDynamicAsset", {
                        get: function () {
                            var listruntimeDynamicAsset = this._mapRuntimeDynamicAsset.get(this.prefabUrl);
                            if (listruntimeDynamicAsset == null) {
                                listruntimeDynamicAsset = [];
                                this._mapRuntimeDynamicAsset.set(this.prefabUrl, listruntimeDynamicAsset);
                            }
                            return listruntimeDynamicAsset;
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(UIBase.prototype, "nodePreventTapClose", {
                        get: function () {
                            return this._nodePreventTapClose;
                        },
                        set: function (value) {
                            this._nodePreventTapClose = value;
                            if (CC_EDITOR) {
                                if (this.getComponent(cc.Widget) == null) {
                                    var widget = this.addComponent(cc.Widget);
                                    widget.isAlignLeft = widget.isAlignTop = widget.isAlignRight = widget.isAlignBottom = true;
                                    widget.alignMode = cc.Widget.AlignMode.ON_WINDOW_RESIZE;
                                    widget.left = widget.top = widget.right = widget.bottom = 0;
                                }
                            }
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(UIBase.prototype, "autoRelease", {
                        get: function () {
                            return this._autoRelease || this._multiInstance;
                        },
                        set: function (value) {
                            this._autoRelease = value;
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(UIBase.prototype, "autoReleaseDelayTime", {
                        get: function () {
                            return this._autoReleaseDelayTime;
                        },
                        set: function (value) {
                            this._autoReleaseDelayTime = value;
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(UIBase.prototype, "blockEvents", {
                        get: function () {
                            return this._blockEvents;
                        },
                        set: function (value) {
                            if (value) {
                                if (this.node.getComponent(cc.BlockInputEvents) == null) {
                                    this.node.addComponent(cc.BlockInputEvents);
                                }
                            }
                            else {
                                this.node.removeComponent(cc.BlockInputEvents);
                            }
                            this._blockEvents = value;
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(UIBase.prototype, "multiInstance", {
                        get: function () {
                            return this._multiInstance;
                        },
                        set: function (value) {
                            this._multiInstance = value;
                        },
                        enumerable: false,
                        configurable: true
                    });
                    UIBase.appendRunTimeDynamicAsset = function () {
                        var _this = this;
                        var assets = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            assets[_i] = arguments[_i];
                        }
                        assets.forEach(function (value) {
                            if (!cc.resources.get(value.url, value.type)) {
                                var listruntimeDynamicAsset = _this._mapRuntimeDynamicAsset.get(_this.prefabUrl);
                                if (listruntimeDynamicAsset == null) {
                                    listruntimeDynamicAsset = [];
                                    _this._mapRuntimeDynamicAsset.set(_this.prefabUrl, listruntimeDynamicAsset);
                                }
                                listruntimeDynamicAsset.push(value);
                            }
                        });
                    };
                    UIBase.clearRunTimeDynamicAsset = function () {
                        var listruntimeDynamicAsset = this._mapRuntimeDynamicAsset.get(this.prefabUrl);
                        if (listruntimeDynamicAsset) {
                            listruntimeDynamicAsset.length = 0;
                        }
                    };
                    UIBase.setup = function (value) {
                        this.DEFAULT_SETUP.modal = value.modal;
                    };
                    UIBase.prototype.callbackBeforeShow = function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                    };
                    UIBase.prototype.callbackAfterShow = function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                    };
                    UIBase.prototype.callbackBeforeHide = function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                    };
                    UIBase.prototype.callbackAfterHide = function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                    };
                    var UIBase_1;
                    UIBase.DEFAULT_SETUP = {};
                    UIBase._mapRuntimeDynamicAsset = new Map();
                    __decorate([
                        property({ type: cc.Node, tooltip: '阻止点击自动关闭的节点\n点击此节点范围以外的区域自动关闭UI\n若未设置，则该ui没有点击时自动关闭的逻辑' }),
                        __metadata("design:type", cc.Node),
                        __metadata("design:paramtypes", [cc.Node])
                    ], UIBase.prototype, "nodePreventTapClose", null);
                    __decorate([
                        property({
                            displayName: '自动释放UI资源',
                            tooltip: "1.callbackAfterHide\u56DE\u8C03\u540E\u81EA\u52A8\u91CA\u653Eui\u81EA\u8EAB\u4EE5\u53CA\u5F15\u7528\u7684\u8D44\u6E90\n                2.\u9ED8\u8BA4\u5728\u5173\u95ED\u540E\u4F1A\u6839\u636E[\u91CA\u653E\u5EF6\u8FDF]\u81EA\u52A8\u91CA\u653E\u5176\u5F15\u7528\u7684\u8D44\u6E90\n                ",
                        }),
                        __metadata("design:type", Boolean),
                        __metadata("design:paramtypes", [Boolean])
                    ], UIBase.prototype, "autoRelease", null);
                    __decorate([
                        property({
                            type: cc.Float,
                            displayName: '延迟释放时间(单位:秒)', visible: function () { return this._autoRelease; },
                            tooltip: "1.callbackAfterHide\u56DE\u8C03\u540E\u5F00\u59CB\u8BA1\u65F6\n                2.\u5982\u679C\u5728\u5EF6\u8FDF\u65F6\u95F4\u5185\u53C8\u5C55\u793A\u4E86UI,\u5219\u53D6\u6D88\u91CA\u653E\n                3.\u9ED8\u8BA4\u4E3A0\u79D2,\u7ACB\u5373\u91CA\u653E",
                        }),
                        __metadata("design:type", Number),
                        __metadata("design:paramtypes", [Number])
                    ], UIBase.prototype, "autoReleaseDelayTime", null);
                    __decorate([
                        property({
                            displayName: '阻止穿透',
                            tooltip: "\n            1.\u6B64node\u7684width\u548Cheight\u8303\u56F4\u7684\u70B9\u51FB\u4E8B\u4EF6\u5C06\u88AB\u62E6\u622A\u4E0D\u4F1A\u7A7F\u900F\u5230\u4E0B\u5C42\n            2.\u5982\u679C\u60F3\u963B\u6B62\u5168\u5C4F\u7A7F\u900F,\u5219\u7ED9\u6B64ui\u52A0\u4E00\u4E2Awediget\u5E76\u4E14\u9002\u914D\u5230\u5168\u5C4F\u5373\u53EF\n            ",
                        }),
                        __metadata("design:type", Boolean),
                        __metadata("design:paramtypes", [Boolean])
                    ], UIBase.prototype, "blockEvents", null);
                    __decorate([
                        property({
                            displayName: '多实例UI',
                            tooltip: "\n            1.\u591A\u5B9E\u4F8BUI\u8868\u793A\u663E\u793A\u7684\u65F6\u5019\u6BCF\u6B21\u90FD\u91CD\u65B0\u521B\u5EFA\u4E00\u4E2A,\n            2.\u591A\u5B9E\u4F8BUI\u4F1A\u9ED8\u8BA4\u4E3A\u81EA\u52A8\u91CA\u653E\n            3.\u591A\u5B9E\u4F8BUI\u5728\u5173\u95ED\u65F6\u4F20\u5165\u8981\u5173\u95ED\u7684UI\u5B9E\u4F8B: gea.ui.hide(this, ...)\n            ",
                        }),
                        __metadata("design:type", Boolean),
                        __metadata("design:paramtypes", [Boolean])
                    ], UIBase.prototype, "multiInstance", null);
                    __decorate([
                        property({
                            type: cc.Asset, displayName: '依赖的资源列表',
                            tooltip: "1.\u8BE5\u5217\u8868\u5185\u7684\u8D44\u6E90\u4F1A\u968F\u7740\u6B64ui\u4E00\u8D77\u88AB\u52A0\u8F7D\n                2.\u5E76\u975E\u4F9D\u8D56\u8D44\u6E90,\u4F46\u5E0C\u671B\u968F\u6B64ui\u4E00\u8D77\u52A0\u8F7D\u7684\u8D44\u6E90\u4E5F\u53EF\u4EE5\u62D6\u5230\u8FD9\u4E2A\u5217\u8868",
                        }),
                        __metadata("design:type", Array)
                    ], UIBase.prototype, "preAssets", void 0);
                    __decorate([
                        property({ type: cc.Node }),
                        __metadata("design:type", cc.Node)
                    ], UIBase.prototype, "_nodePreventTapClose", void 0);
                    __decorate([
                        property,
                        __metadata("design:type", Boolean)
                    ], UIBase.prototype, "_autoRelease", void 0);
                    __decorate([
                        property,
                        __metadata("design:type", Number)
                    ], UIBase.prototype, "_autoReleaseDelayTime", void 0);
                    __decorate([
                        property,
                        __metadata("design:type", Boolean)
                    ], UIBase.prototype, "_blockEvents", void 0);
                    __decorate([
                        property,
                        __metadata("design:type", Boolean)
                    ], UIBase.prototype, "_multiInstance", void 0);
                    UIBase = UIBase_1 = __decorate([
                        ccclass,
                        __metadata("design:paramtypes", [])
                    ], UIBase);
                    return UIBase;
                }(cc.Component));
                ui.UIBase = UIBase;
            })(ui = abstracts.ui || (abstracts.ui = {}));
        })(abstracts = adapters.abstracts || (adapters.abstracts = {}));
    })(adapters = gea.adapters || (gea.adapters = {}));
})(gea || (gea = {}));

(function (gea) {
    var adapters;
    (function (adapters) {
        var ui;
        (function (ui_1) {
            var UIManager = (function () {
                function UIManager() {
                    this._viewPort = { width: 0, height: 0, halfWidth: 0, halfHeight: 0 };
                    this._mapUI = new Map();
                    this._mapUINodeBeforeDraw = new Map();
                    this._mapUIShowOption = new Map();
                    this._dicUiWidget = {};
                    this._mapOpeningUI = new Map();
                    this._mapUUIDToUIClass = new Map();
                    this._listLayer = [];
                    this._modalCount = 0;
                    this._mapUIAssets = new Map();
                    this._setup = {};
                    cc.director.on(cc.Director.EVENT_AFTER_SCENE_LAUNCH, this.afterSceneLaunch, this);
                }
                Object.defineProperty(UIManager.prototype, "viewPort", {
                    get: function () {
                        return this._viewPort;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(UIManager.prototype, "nodeModal", {
                    get: function () {
                        return this._viewModal;
                    },
                    enumerable: false,
                    configurable: true
                });
                UIManager.prototype.isShowing = function (uiClass) {
                    return this._mapOpeningUI.has(gea.uuid(uiClass));
                };
                UIManager.prototype.once = function (tag, callback, scope) {
                    var _a;
                    var callbackArgs = [];
                    for (var _i = 3; _i < arguments.length; _i++) {
                        callbackArgs[_i - 3] = arguments[_i];
                    }
                    (_a = gea.utility.dispatcher).once.apply(_a, __spread([this, tag, callback, scope], callbackArgs));
                    return this;
                };
                UIManager.prototype.on = function (tag, callbackLimit, callback, scope) {
                    var _a;
                    var callbackArgs = [];
                    for (var _i = 4; _i < arguments.length; _i++) {
                        callbackArgs[_i - 4] = arguments[_i];
                    }
                    (_a = gea.utility.dispatcher).on.apply(_a, __spread([this, tag, callbackLimit, callback, scope], callbackArgs));
                    return this;
                };
                UIManager.prototype.off = function (tag, callback, scope) {
                    gea.utility.dispatcher.off(this, tag, callback, scope);
                    return this;
                };
                UIManager.prototype.offByScope = function (scope) {
                    gea.utility.dispatcher.offByScope(scope, this);
                    return this;
                };
                UIManager.prototype.show = function (uiClass, option) {
                    var uuid = gea.uuid(uiClass);
                    option && this._mapUIShowOption.set(uuid, option || this._mapUIShowOption.get(uuid));
                    if (!this._mapOpeningUI.has(uuid)) {
                        this._mapOpeningUI.set(uuid, true);
                        this._mapUUIDToUIClass.set(uuid, uiClass);
                        var ui_2 = this._mapUI.get(uuid);
                        if (ui_2 !== 'loading') {
                            gea.timer.off(this.delayToReleaseUI, ui_2);
                            if (uiClass.modal || uiClass.uiType === gea.enums.ui.ui_type.modal) {
                                this.countModal(1);
                            }
                            this.loadUIAssets(ui_2, uiClass, uuid);
                        }
                    }
                    else {
                        var ui_3 = this._mapUI.get(uuid);
                        if (ui_3 && ui_3 !== 'loading') {
                            ui_3.callbackBeforeShow.apply(ui_3, option && option.args);
                            ui_3.callbackAfterShow.apply(ui_3, option && option.args);
                        }
                    }
                    return this;
                };
                UIManager.prototype.hide = function (uiClass, option) {
                    var _this = this;
                    var uuid = gea.uuid(uiClass);
                    this._mapUIShowOption.delete(uuid);
                    if (this._mapOpeningUI.delete(uuid)) {
                        if (uiClass.modal || uiClass.uiType === gea.enums.ui.ui_type.modal) {
                            this.countModal(-1);
                        }
                        var ui_4 = this._mapUI.get(uuid);
                        if (ui_4 && ui_4 === 'loading') {
                            this._mapUI.delete(uuid);
                        }
                        if (ui_4 && ui_4 !== 'loading') {
                            var args_1 = (option && option.args) || [];
                            ui_4.callbackBeforeHide.apply(ui_4, args_1);
                            if (option && option.tween) {
                                this.refreshModal(-1, gea.tween.fromTo(ui_4.node, option.tween.duration, option.tween.from, option.tween.to, option.tween.option).appendCallbackComplete(function () {
                                    _this.afterHideUI(ui_4, uiClass, uuid, args_1);
                                }).totalDuration);
                            }
                            else {
                                var tween_1 = ui_4.customTweenHide;
                                if (tween_1) {
                                    if (tween_1 instanceof Array) {
                                        var total_1 = tween_1.length;
                                        var maxDuration_1 = 0;
                                        tween_1.forEach(function (tweener) {
                                            maxDuration_1 = Math.max(tweener.appendCallbackComplete(function () {
                                                --total_1 === 0 && _this.afterHideUI(ui_4, uiClass, uuid, args_1);
                                            }).totalDuration, maxDuration_1);
                                        });
                                        this.refreshModal(-1, maxDuration_1);
                                    }
                                    else {
                                        this.refreshModal(-1, tween_1.appendCallbackComplete(function () {
                                            _this.afterHideUI(ui_4, uiClass, uuid, args_1);
                                        }).totalDuration);
                                    }
                                }
                                else {
                                    this.afterHideUI(ui_4, uiClass, uuid, args_1);
                                }
                            }
                        }
                        else if (uiClass.modal || uiClass.uiType === gea.enums.ui.ui_type.modal) {
                            this.refreshModal(-1);
                        }
                    }
                    return this;
                };
                UIManager.prototype.hideAll = function (excludeUIClass) {
                    var _this = this;
                    if (excludeUIClass === void 0) { excludeUIClass = []; }
                    this._mapOpeningUI.forEach(function (value, key) {
                        var uiClass = _this._mapUUIDToUIClass.get(key);
                        if (uiClass && excludeUIClass.indexOf(uiClass) == -1) {
                            _this.hide(uiClass);
                        }
                    });
                    return this;
                };
                UIManager.prototype.setup = function (option) {
                    this._setup = option;
                    return this;
                };
                UIManager.prototype.loadUIAssets = function (ui, uiClass, uuid) {
                    var _a = this.getUnLoadedUIAssets(uiClass, uuid), listUrl = _a.listUrl, listType = _a.listType;
                    if (listUrl.length > 0) {
                        this._mapUI.set(uuid, 'loading');
                        gea.utility.dispatcher.dispatch(this, gea.events.ui.load_start, uiClass);
                        this.startLoadUIAssets(ui, uiClass, uuid, listUrl, listType);
                    }
                    else if (ui === undefined) {
                        this.showUI(uuid, uiClass);
                    }
                    else {
                        this.addUIImmediately(ui, uiClass, uuid);
                    }
                };
                UIManager.prototype.startLoadUIAssets = function (ui, uiClass, uuid, listUrl, listType) {
                    var _this = this;
                    cc.resources.load(listUrl, function (completeCount, totalCount, item) {
                        gea.utility.dispatcher.dispatch(_this, gea.events.ui.load_progress, completeCount, totalCount, item);
                    }, function (error, resource) {
                        if (!error) {
                            var setAssets = _this._mapUIAssets.get(uuid);
                            if (setAssets == null) {
                                setAssets = new Set();
                                _this._mapUIAssets.set(uuid, setAssets);
                            }
                            uiClass.clearRunTimeDynamicAsset();
                            _this.showUI(uuid, uiClass);
                            gea.utility.dispatcher.dispatch(_this, gea.events.ui.load_complete, uiClass, cc.resources.get(uiClass.prefabUrl, cc.Prefab));
                        }
                        else {
                            gea.warn("<UIManager> " + uiClass.prefabUrl + " load failed!\n" + (error.stack || JSON.stringify(error)));
                            _this.hide(uiClass);
                            gea.utility.dispatcher.dispatch(_this, gea.events.ui.load_failed, uiClass);
                        }
                    });
                    return null;
                };
                UIManager.prototype.getUnLoadedUIAssets = function (uiClass, uuid) {
                    var listAsset = uiClass.runTimeDynamicAsset.concat([{ url: uiClass.prefabUrl, type: cc.Prefab }]);
                    var listUrl = [];
                    var listType = [];
                    listAsset.forEach(function (value) {
                        if (!cc.resources.get(value.url, value.type)) {
                            listUrl.push(value.url);
                            listType.push(value.type || cc.Asset);
                        }
                        return false;
                    });
                    return { listUrl: listUrl, listType: listType };
                };
                UIManager.prototype.countModal = function (changeNum) {
                    this._modalCount += changeNum;
                    if (changeNum > 0) {
                        this.refreshModal(changeNum);
                    }
                };
                UIManager.prototype.refreshModal = function (changeNum, duration) {
                    var _this = this;
                    if (duration === void 0) { duration = 0; }
                    if (this._modalCount > 0) {
                        if (this._modalCount === changeNum) {
                            this._layerModal.active = true;
                            if (this._setup.modal && this._setup.modal.tweenShow) {
                                if (this._setup.modal.tweenShow instanceof Array) {
                                    var tweener_1;
                                    this._setup.modal.tweenShow.forEach(function (value, index) {
                                        if (index === 0) {
                                            tweener_1 = gea.tween.fromTo(_this._viewModal, value.duration, value.from, value.to, value.option);
                                        }
                                        else {
                                            tweener_1.fromTo(value.duration, value.from, value.to, value.option);
                                        }
                                    });
                                    tweener_1.appendCallbackUpdate(this.reDrawModal, this);
                                }
                                else {
                                    gea.tween.fromTo(this._viewModal, this._setup.modal.tweenShow.duration, this._setup.modal.tweenShow.from, this._setup.modal.tweenShow.to, this._setup.modal.tweenShow.option).appendCallbackUpdate(this.reDrawModal, this);
                                }
                            }
                        }
                        this._viewModal.zIndex = this._modalCount * 2 - 2;
                    }
                    else {
                        if (this._setup.modal && this._setup.modal.tweenHide) {
                            if (this._setup.modal.tweenHide instanceof Array) {
                                var tweener_2;
                                this._setup.modal.tweenHide.forEach(function (value, index) {
                                    if (index === 0) {
                                        tweener_2 = gea.tween.fromTo(_this._viewModal, value.duration, value.from, value.to, value.option);
                                    }
                                    else {
                                        tweener_2.fromTo(value.duration, value.from, value.to, value.option);
                                    }
                                });
                                tweener_2
                                    .appendCallbackUpdate(this.reDrawModal, this)
                                    .appendCallbackComplete(function () {
                                    _this._layerModal.active = false;
                                });
                            }
                            else {
                                gea.tween.fromTo(this._viewModal, duration || this._setup.modal.tweenHide.duration, this._setup.modal.tweenHide.from, this._setup.modal.tweenHide.to, this._setup.modal.tweenHide.option)
                                    .appendCallbackUpdate(this.reDrawModal, this)
                                    .appendCallbackComplete(function () {
                                    _this._layerModal.active = false;
                                });
                            }
                        }
                        else {
                            this._layerModal.active = false;
                        }
                    }
                };
                UIManager.prototype.reDrawModal = function () {
                    if (this._graphicsModal) {
                        this._graphicsModal.clear(true);
                        this._graphicsModal.fillColor = cc.color(0, 0, 0, this._viewModal.opacity);
                        this._graphicsModal.fillRect(-this._viewPort.halfWidth, -this._viewPort.halfHeight, this._viewPort.width, this._viewPort.height);
                    }
                };
                UIManager.prototype.releaseUI = function (ins, uiClass, uuid) {
                    if (ins.autoReleaseDelayTime > 0) {
                        gea.timer.once(ins.autoReleaseDelayTime * 1000, this.delayToReleaseUI, ins, this, ins, uuid);
                    }
                    else {
                        this.delayToReleaseUI(this, ins, uuid);
                    }
                };
                UIManager.prototype.delayToReleaseUI = function (uiManager, ins, uuid) {
                    uiManager._mapUINodeBeforeDraw.delete(uuid);
                    uiManager._mapUI.delete(uuid);
                    if (uiManager._mapUIAssets.has(uuid)) {
                        uiManager._mapUIAssets.get(uuid).forEach(function (value) {
                        });
                        uiManager._mapUIAssets.delete(uuid);
                    }
                    ins.destroy();
                };
                UIManager.prototype.showUI = function (uuid, uiClass) {
                    var _this = this;
                    if (this._mapOpeningUI.has(uuid)) {
                        if (!this._mapUINodeBeforeDraw.has(uuid)) {
                            var prefab = cc.resources.get(uiClass.prefabUrl, cc.Prefab);
                            var node = cc.instantiate(prefab);
                            this._mapUINodeBeforeDraw.set(uuid, node);
                        }
                        cc.director.once(cc.Director.EVENT_BEFORE_UPDATE, function () {
                            var node = _this._mapUINodeBeforeDraw.get(uuid);
                            if (!node || !node.isValid) {
                                return
                            }
                            var ui = node.getComponent(uiClass);
                            if (!ui) {
                                return;
                            }
                            if (ui.blockEvents && ui.getComponent(cc.BlockInputEvents) == null) {
                                ui.addComponent(cc.BlockInputEvents);
                            }
                            if (_this._mapOpeningUI.has(uuid)) {
                                var widget = ui.getComponent(cc.Widget);
                                if (widget) {
                                    if (widget.alignMode === cc.Widget.AlignMode.ON_WINDOW_RESIZE) {
                                        _this._dicUiWidget[uuid] = widget;
                                    }
                                }
                                node.parent = _this._listLayer[uiClass.uiType];
                                _this.addUIBeforeDraw(uuid, ui, uiClass);
                            }
                            else if (ui.autoRelease) {
                                _this.releaseUI(ui, uiClass, uuid);
                            }
                        });
                    }
                    else if (this._mapUI.get(uuid) === 'loading') {
                        this._mapUI.delete(uuid);
                    }
                };
                UIManager.prototype.addUIBeforeDraw = function (uuid, ui, uiClass) {
                    var _this = this;
                    cc.director.once(cc.Director.EVENT_BEFORE_DRAW, function () {
                        if (_this._mapOpeningUI.has(uuid)) {
                            _this._mapUINodeBeforeDraw.delete(uuid);
                            _this._mapUI.set(uuid, ui);
                            _this.addUIImmediately(ui, uiClass, uuid);
                        }
                        else {
                            if (ui && cc.isValid(ui) && ui.node && cc.isValid(ui.node)) {
                                ui.node.parent = null;
                            }
                            if (ui.autoRelease) {
                                _this.releaseUI(ui, uiClass, uuid);
                            }
                        }
                    });
                };
                UIManager.prototype.addUIImmediately = function (ui, uiClass, uuid) {
                    var _this = this;
                    if (uiClass.modal || uiClass.uiType === gea.enums.ui.ui_type.modal) {
                        ui.node.parent = this._layerModal;
                        ui.node.zIndex = (this._layerModal.childrenCount - 1) * 2 - 1;
                    }
                    else {
                        ui.node.parent = this._listLayer[uiClass.uiType];
                    }
                    var option = this._mapUIShowOption.get(uuid);
                    this._mapUIShowOption.delete(uuid);
                    var args = option && option.args || [];
                    ui.callbackBeforeShow.apply(ui, args || []);
                    if (option && option.tween) {
                        gea.tween.fromTo(ui.node, option.tween.duration, option.tween.from, option.tween.to, option.tween.option).appendCallbackComplete(function () {
                            _this.afterShowUI(ui, uuid, args);
                        });
                    }
                    else {
                        var tween_2 = ui.customTweenShow;
                        if (tween_2) {
                            if (tween_2 instanceof Array) {
                                var total_2 = tween_2.length;
                                var _loop_1 = function (i) {
                                    tween_2[i].appendCallbackComplete(function () {
                                        i + 1 === total_2 && _this.afterShowUI(ui, uuid, args);
                                    });
                                };
                                for (var i = 0; i < total_2; i++) {
                                    _loop_1(i);
                                }
                            }
                            else {
                                tween_2.appendCallbackComplete(function () {
                                    _this.afterShowUI(ui, uuid, args);
                                });
                            }
                        }
                        else {
                            cc.director.once(cc.Director.EVENT_AFTER_DRAW, function () {
                                _this.afterShowUI(ui, uuid, args);
                            });
                        }
                    }
                };
                UIManager.prototype.afterShowUI = function (ui, uuid, args) {
                    if (this._mapOpeningUI.has(uuid)) {
                        ui.callbackAfterShow.apply(ui, args);
                    }
                };
                UIManager.prototype.afterHideUI = function (ui, uiClass, uuid, args) {
                    ui.node.parent = null;
                    ui.callbackAfterHide.apply(ui, args);
                    if (uiClass.modal || uiClass.uiType === gea.enums.ui.ui_type.modal) {
                        this.refreshModal(-1);
                    }
                    if (ui.autoRelease) {
                        this.releaseUI(ui, uiClass, uuid);
                    }
                };
                UIManager.prototype.afterSceneLaunch = function () {
                    var _this = this;
                    if (!CC_EDITOR) {
                        if (cc.Canvas.instance.designResolution.width > cc.Canvas.instance.designResolution.height) {
                            cc.Canvas.instance.fitWidth = false;
                            cc.Canvas.instance.fitHeight = true;
                        }
                        else {
                            cc.Canvas.instance.fitWidth = true;
                            cc.Canvas.instance.fitHeight = false;
                        }
                        var widget = cc.Canvas.instance.getComponent(cc.Widget);
                        if (widget === null) {
                            widget = cc.Canvas.instance.addComponent(cc.Widget);
                        }
                        this.applyWidget(widget);
                        this._listLayer = [];
                        var layer = void 0;
                        for (var index = 0; index <= gea.enums.ui.layer_type.over_modal; index++) {
                            layer = new cc.Node('gea.ui.layer.' + gea.enums.ui.layer_type[index]);
                            widget = layer.addComponent(cc.Widget);
                            this.applyWidget(widget);
                            cc.Canvas.instance.node.addChild(layer);
                            this._listLayer.push(layer);
                        }
                        this._layerModal = layer = this._listLayer[gea.enums.ui.layer_type.modal];
                        layer.active = false;
                        layer.addComponent(cc.BlockInputEvents);
                        this._viewModal = new cc.Node('gea.ui.layer.modal.mask');
                        this._viewModal.addComponent(cc.BlockInputEvents);
                        this._viewModal.opacity = 0;
                        widget = this._viewModal.addComponent(cc.Widget);
                        this.applyWidget(widget);
                        layer.addChild(this._viewModal);
                        cc.view.setResizeCallback(function () {
                            _this.onStageResize();
                        });
                        this.onStageResize();
                    }
                };
                UIManager.prototype.applyWidget = function (widget) {
                    widget.left = widget.top = widget.right = widget.bottom = 0;
                    widget.isAlignLeft = widget.isAlignTop = widget.isAlignRight = widget.isAlignBottom = true;
                    widget.alignMode = cc.Widget.AlignMode.ON_WINDOW_RESIZE;
                };
                UIManager.prototype.onStageResize = function () {
                    var size = cc.view.getVisibleSize();
                    this._viewPort.width = Math.ceil(size.width);
                    this._viewPort.height = Math.ceil(size.height);
                    this._viewPort.halfWidth = this._viewPort.width * 0.5;
                    this._viewPort.halfHeight = this._viewPort.height * 0.5;
                    if (this._viewModal != null) {
                        this._graphicsModal = this._viewModal.getComponent(cc.Graphics);
                        if (this._graphicsModal !== null) {
                            this._graphicsModal.clear();
                        }
                        else {
                            this._graphicsModal = this._viewModal.addComponent(cc.Graphics);
                        }
                        this._graphicsModal.fillColor = cc.color(0, 0, 0, 255);
                        this._graphicsModal.fillRect(-this._viewPort.halfWidth, -this._viewPort.halfHeight, this._viewPort.width, this._viewPort.height);
                    }
                };
                return UIManager;
            }());
            ui_1.UIManager = UIManager;
            ui_1.manager = new UIManager();
        })(ui = adapters.ui || (adapters.ui = {}));
    })(adapters = gea.adapters || (gea.adapters = {}));
})(gea || (gea = {}));

(function (gea) {
    gea.ui = gea.adapters.ui.manager;
})(gea || (gea = {}));
var hogame;
(function (hogame) {
    var utils;
    (function (utils) {
        var DIC_REATRY_COUNT = {};
        var DIC_URL_RESIZE_INFO = {};
        var DIC_LOADING_CALLBCK = {};
        var WEBP_URLS = [];
        var MAX_RETRY_COUNT = 2;
        var RETRY_DURATION = 1000;
        var PNG_URL_SUFFIX = "/format,png"
        function getResizedUrl(originUrl, limitWidth, limitHeight) {
            var result;
            if (limitWidth > 0 && limitHeight > 0) {
                var list = DIC_URL_RESIZE_INFO[originUrl];
                if (list != null) {
                    list.some(function (value) {
                        if (value.limitWidth >= limitWidth - 100 && value.limitHeight >= limitHeight - 100) {
                            result = value.resizeUrl;
                            return true;
                        }
                        return false;
                    });
                }
                if (result == null) {
                    result = originUrl + ("?x-oss-process=image/resize,h_" + limitWidth + ",w_" + limitHeight);
                    cacheResizedUrl(originUrl, limitWidth, limitHeight, result);
                }
            }
            else {
                result = originUrl;
            }
            return result;
        }
        function cacheResizedUrl(originUrl, limitWidth, limitHeight, resizeUrl) {
            var list = DIC_URL_RESIZE_INFO[originUrl];
            if (list == null) {
                list = [];
                DIC_URL_RESIZE_INFO[originUrl] = list;
            }
            list.push({ limitWidth: limitWidth, limitHeight: limitHeight, resizeUrl: resizeUrl });
        }
        var Res = (function () {
            function Res() {
            }
            Res.prototype.retryCount = function (value) {
                MAX_RETRY_COUNT = value;
                return this;
            };
            Res.prototype.retryDuration = function (value) {
                RETRY_DURATION = value;
                return this;
            };
            Res.prototype.getFrameFromRemote = function (url, callback, scope, limitWidth, limitHeight) {
                limitWidth = limitWidth || 0;
                limitHeight = limitHeight || limitWidth;
                var resizeUrl = getResizedUrl(url, limitWidth, limitHeight);
                var texture = cc.resources.get(resizeUrl, cc.Texture2D);
                if (texture) {
                    callback.call(scope, texture, url);
                }
                else {
                    var listCallback = DIC_LOADING_CALLBCK[resizeUrl];
                    if (listCallback == null) {
                        listCallback = [];
                        DIC_LOADING_CALLBCK[resizeUrl] = listCallback;
                        this.load(resizeUrl, url, false);
                    }
                    listCallback.push(gea.callback(callback, scope).callbackLimite(1));
                }
            };
            Res.prototype.load = function (resizeUrl, originUrl, forcePng) {
                var _this = this;

                var realLoadUrl = ((WEBP_URLS.indexOf(originUrl) >= 0 || forcePng)
                    && !resizeUrl.endsWith(PNG_URL_SUFFIX)) ? (resizeUrl + PNG_URL_SUFFIX) : resizeUrl;

                cc.assetManager.loadRemote(realLoadUrl, function (error, texture) {
                    if (error || texture == null || texture.nativeUrl == null) {
                        var retryCount_1 = DIC_REATRY_COUNT[resizeUrl];
                        if (isNaN(retryCount_1)) {
                            DIC_REATRY_COUNT[resizeUrl] = retryCount_1 = 0;
                        }
                        else if (retryCount_1 >= MAX_RETRY_COUNT) {
                            var listCallback = DIC_LOADING_CALLBCK[resizeUrl];
                            if (listCallback) {
                                delete DIC_LOADING_CALLBCK[resizeUrl];
                                listCallback.forEach(function (value) {
                                    gea.pool.restore(value);
                                });
                            }
                            _this.loadFailed(originUrl, resizeUrl);
                            return;
                        }
                        gea.timer.once(RETRY_DURATION, function () {
                            DIC_REATRY_COUNT[resizeUrl] = ++retryCount_1;
                            gea.warn("retry to loadTexture " + retryCount_1 + ": " + resizeUrl);
                            _this.load(resizeUrl, originUrl, true);
                        }, _this);
                    }
                    else {
                        texture.packable = false;
                        delete DIC_REATRY_COUNT[resizeUrl];
                        var listCallback = DIC_LOADING_CALLBCK[resizeUrl];
                        if (listCallback) {
                            delete DIC_LOADING_CALLBCK[resizeUrl];
                            listCallback.forEach(function (value) {
                                value.excute(texture, originUrl);
                            });
                        }

                        if (realLoadUrl.endsWith(PNG_URL_SUFFIX) && WEBP_URLS.indexOf(originUrl) < 0) {
                            WEBP_URLS.push(originUrl);

                            if (WEBP_URLS.length >= 300) {
                                WEBP_URLS.splice(0, 100);
                            }
                        }
                    }
                });
            };
            Res.prototype.loadFailed = function (originUrl, resizeUrl) {
                delete DIC_REATRY_COUNT[resizeUrl];
                gea.error("texture load failed after retry " + MAX_RETRY_COUNT + " times: " + resizeUrl);
            };
            return Res;
        }());
        utils.res = new Res();
    })(utils = hogame.utils || (hogame.utils = {}));
})(hogame || (hogame = {}));

(function (gea) {
    var utils;
    (function (utils) {
        var StringUtils = (function () {
            function StringUtils() {
            }
            StringUtils.prototype.subUtf8 = function (str, len, tailSymbol) {
                if (tailSymbol === void 0) { tailSymbol = '...'; }
                var strArray = __spread(str);
                if (strArray.length > len) {
                    return strArray.slice(0, len).join('') + tailSymbol;
                }
                return str;
            };
            StringUtils.prototype.utf8len = function (str) {
                return __spread(str).length;
            };
            return StringUtils;
        }());
        utils.str = new StringUtils();
    })(utils = gea.utils || (gea.utils = {}));
})(gea || (gea = {}));
var hogame;
(function (hogame) {
    var utils;
    (function (utils) {
        var DIC_USER_MORE_INFO = {};
        var DIC_FAILED_USER_MORE_INFO = {};
        var DIC_LOADING_RECORD = {};
        var DIC_CALLBACK_INFO = {};
        var LIST_REQ = [];
        var DEFAULT_USER_MORE_INFO = { 'avatar': 'https://o-hk.ihago.net/ikxd/6727a572442261d5daa8ca3e012b441f/guest_1.png', 'birthday': '2000-01-01', 'nick': '\\br>😂😂😂😂test', 'sex': 1, 'uid': 101436495, 'zodiac': 0, city: 'Guangzhou', locationTude: '', personalType: hago.enums.userInfoType.debug };
        var defaultCount = 0;
        var delayReqTime = 0;
        var delayForEver = false;
        var asyncTime = 1000;
        var UserDataCallbackInfo = (function () {
            function UserDataCallbackInfo() {
                this._listCallbackInfo = [];
                this._dicIndexRecord = {};
            }
            UserDataCallbackInfo.prototype.callbackBeforeRestore = function () {
                this._callback = null;
                this._callbackScope = null;
                if (this._callbackArgs != null) {
                    this._callbackArgs.length = 0;
                    this._callbackArgs = null;
                }
                this._listCallbackInfo.length = 0;
                return true;
            };
            UserDataCallbackInfo.prototype.checkProgress = function (info) {
                var index = this._dicIndexRecord[info.uid];
                if (index != null) {
                    delete this._dicIndexRecord[info.uid];
                    this._listCallbackInfo[index] = info;
                    if (++this._progress === this._total) {
                        delete DIC_CALLBACK_INFO[gea.uuid(this)];
                        this._callback.apply(this._callbackScope, this._callbackArgs.concat(this._listCallbackInfo));
                        gea.pool.restore(this);
                    }
                }
            };
            UserDataCallbackInfo.prototype.callbackAfterBorrow = function (listUid, callback, callbackScope, callbackArgs) {
                var _this = this;
                var listReq = [];
                this._progress = 0;
                var oldInfo;
                listUid.forEach(function (value, index) {
                    oldInfo = DIC_USER_MORE_INFO[value];
                    if (oldInfo != null) {
                        _this._listCallbackInfo[index] = oldInfo;
                        _this._progress++;
                    }
                    else {
                        if (window['hg']) {
                            value = Number(value) || 0;
                        }
                        else {
                            value = Number(value) || value;
                        }
                        _this._dicIndexRecord[value] = index;
                        if (!DIC_LOADING_RECORD[value]) {
                            listReq.push(value);
                            DIC_LOADING_RECORD[value] = true;
                        }
                    }
                });
                this._total = listUid.length;
                if (this._progress === this._total) {
                    callback.apply(callbackScope, callbackArgs.concat(this._listCallbackInfo));
                    gea.pool.restore(this);
                }
                else {
                    DIC_CALLBACK_INFO[gea.uuid(this)] = this;
                    this._callback = callback;
                    this._callbackScope = callbackScope;
                    this._callbackArgs = callbackArgs;
                    if (listReq.length > 0) {
                        if (window['hg']) {
                            if (LIST_REQ.length === 0) {
                                if (delayReqTime > 0) {
                                    gea.timer.once(delayReqTime, getUserInfoFromApp, this);
                                }
                                else {
                                    gea.polling.once(getUserInfoFromApp, this);
                                }
                            }
                            LIST_REQ.push.apply(LIST_REQ, listReq);
                        }
                        else {
                            getUserInfoFromLocal(listReq);
                        }
                    }
                }
            };
            return UserDataCallbackInfo;
        }());
        var UserInfoManager = (function () {
            function UserInfoManager() {
            }
            UserInfoManager.prototype.default = function (info) {
                if (info != null) {
                    DEFAULT_USER_MORE_INFO = info;
                }
                else {
                    return DEFAULT_USER_MORE_INFO;
                }
                return this;
            };
            UserInfoManager.prototype.delayTime = function (time, forever) {
                if (time === void 0) { time = 200; }
                if (forever === void 0) { forever = false; }
                delayReqTime = time;
                delayForEver = forever;
                return this;
            };
            UserInfoManager.prototype.get = function (uid, callback, callbackScope) {
                var callbackArgs = [];
                for (var _i = 3; _i < arguments.length; _i++) {
                    callbackArgs[_i - 3] = arguments[_i];
                }
                if (uid instanceof Array) {
                    if (uid.length > 0) {
                        gea.pool.borrow(UserDataCallbackInfo, Array.from(new Set(uid)), callback, callbackScope, callbackArgs);
                    }
                }
                else if (uid) {
                    gea.pool.borrow(UserDataCallbackInfo, [uid], callback, callbackScope, callbackArgs);
                }
                return this;
            };
            UserInfoManager.prototype.asyncTime = function (value) {
                asyncTime = Math.max(value, 500);
                return this;
            };
            return UserInfoManager;
        }());
        function userInfoGeted(info) {
            delete DIC_LOADING_RECORD[info.uid];
            DIC_USER_MORE_INFO[info.uid] = info;
            for (var uuid in DIC_CALLBACK_INFO) {
                DIC_CALLBACK_INFO[uuid].checkProgress(info);
            }
        }
        function userInfoFailed(uid) {
            delete DIC_LOADING_RECORD[uid];
            var failedInfo = DIC_FAILED_USER_MORE_INFO[uid];
            if (failedInfo == null) {
                failedInfo = {
                    uid: uid,
                    avatar: DEFAULT_USER_MORE_INFO.avatar,
                    birthday: DEFAULT_USER_MORE_INFO.birthday,
                    nick: 'unknown',
                    sex: hago.enums.sex.female,
                    zodiac: hago.enums.constellation.aquarius,
                    locationTude: DEFAULT_USER_MORE_INFO.locationTude,
                    city: DEFAULT_USER_MORE_INFO.city,
                    personalType: hago.enums.userInfoType.unknow,
                };
                DIC_FAILED_USER_MORE_INFO[uid] = failedInfo;
            }
            for (var uuid in DIC_CALLBACK_INFO) {
                DIC_CALLBACK_INFO[uuid].checkProgress(failedInfo);
            }
        }
        function getUserInfoFromLocal(listReq) {
            gea.timer.once(asyncTime, function () {
                var info;
                listReq.forEach(function (value) {
                    info = {
                        avatar: DEFAULT_USER_MORE_INFO.avatar,
                        birthday: DEFAULT_USER_MORE_INFO.birthday,
                        nick: (defaultCount++) + DEFAULT_USER_MORE_INFO.nick,
                        sex: Math.random() > 0.5 ? 0 : 1,
                        uid: value,
                        zodiac: 0,
                        city: 'Guangzhou',
                        locationTude: '',
                        personalType: hago.enums.userInfoType.debug,
                    };
                    userInfoGeted(info);
                });
            }, this);
        }
        function getUserInfoFromApp() {
            if (!delayForEver) {
                delayReqTime = 0;
            }
            var listReq = LIST_REQ.concat();
            LIST_REQ.length = 0;
            hg.getUserInfoByUids({
                uids: listReq,
                success: function (res) {
                    res.forEach(function (value) {
                        value.personalType = hago.enums.userInfoType.valid;
                        userInfoGeted(value);
                        listReq.splice(listReq.indexOf(value.uid), 1);
                    });
                    if (listReq.length > 0) {
                        gea.error("hg.getUserInfoByUids failed uids: [" + listReq.join(', ') + "], will use unknown info to callback");
                        listReq.forEach(function (uid) {
                            userInfoFailed(uid);
                        });
                    }
                },
                fail: function (res) {
                    gea.error('hg.getUserInfoByUids failed! errMsg:', JSON.stringify(res || {}), "listReq: [" + listReq.join(',') + "], will use unknown infos to callback");
                    listReq.forEach(function (value) {
                        userInfoFailed(value);
                    });
                },
            });
        }
        utils.userInfo = new UserInfoManager();
    })(utils = hogame.utils || (hogame.utils = {}));
})(hogame || (hogame = {}));
var hogame;
(function (hogame) {
    var utils;
    (function (utils) {
        var UserHeadInfo = (function () {
            function UserHeadInfo() {
                this._uid = '';
                this._avatar = '';
            }
            Object.defineProperty(UserHeadInfo.prototype, "uid", {
                get: function () {
                    return this._uid;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(UserHeadInfo.prototype, "avatar", {
                get: function () {
                    return this._avatar;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(UserHeadInfo.prototype, "valid", {
                get: function () {
                    if (this._sprite) {
                        if (cc.isValid(this._sprite, true)) {
                            return true;
                        }
                        this.restore();
                    }
                    return false;
                },
                enumerable: false,
                configurable: true
            });
            UserHeadInfo.prototype.updateUid = function (uid) {
                if (this.valid) {
                    if (window['hg']) {
                        uid = Number(uid) || 0;
                    }
                    else {
                        uid = Number(uid) || uid;
                    }
                    if (this._uid !== uid) {
                        this._uid = uid;
                        return true;
                    }
                }
                return false;
            };
            UserHeadInfo.prototype.updateAvatar = function (avatar) {
                if (this.valid) {
                    this._avatar = avatar;
                }
                return this;
            };
            UserHeadInfo.prototype.updateTexture = function (texture) {
                if (this.valid) {
                    texture = texture || this._defaultTexture;
                    this._sprite.spriteFrame.setTexture(texture);
                    this._sprite._applySpriteFrame();
                }
                else if (texture) {
                }
            };
            UserHeadInfo.prototype.restore = function () {
                if (this._sprite && delete utils.userRender._dicHeadInfo[this._sprite.uuid]) {
                    gea.pool.restore(this);
                }
            };
            UserHeadInfo.prototype.callbackAfterBorrow = function (sprite) {
                this._sprite = sprite;
                this._defaultTexture = this._sprite.spriteFrame && this._sprite.spriteFrame.getTexture();
                if (this._defaultTexture != null) {
                    this._defaultTexture.packable = false;
                }
                this._sprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;
                this._sprite.spriteFrame = new cc.SpriteFrame(this._defaultTexture);
            };
            UserHeadInfo.prototype.callbackBeforeRestore = function () {
                this._sprite = this._uid = this._avatar = this._defaultTexture = undefined;
                return true;
            };
            return UserHeadInfo;
        }());
        var UserNameInfo = (function () {
            function UserNameInfo() {
            }
            Object.defineProperty(UserNameInfo.prototype, "uid", {
                get: function () {
                    return this._uid;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(UserNameInfo.prototype, "valid", {
                get: function () {
                    if (this._label) {
                        if (cc.isValid(this._label, true)) {
                            return true;
                        }
                        this.restore();
                    }
                    return false;
                },
                enumerable: false,
                configurable: true
            });
            UserNameInfo.prototype.updateUid = function (uid) {
                if (this.valid) {
                    if (window['hg']) {
                        uid = Number(uid) || 0;
                    }
                    else {
                        uid = Number(uid) || uid;
                    }
                    if (this._uid !== uid) {
                        this._label.string = '';
                        this._uid = uid;
                        return true;
                    }
                }
                return false;
            };
            UserNameInfo.prototype.restore = function () {
                if (this._label && delete utils.userRender._dicNameInfo[this._label.uuid]) {
                    gea.pool.restore(this);
                }
            };
            UserNameInfo.prototype.callbackAfterBorrow = function (label) {
                this._label = label;
            };
            UserNameInfo.prototype.callbackBeforeRestore = function () {
                this._label = this._uid = undefined;
                return true;
            };
            return UserNameInfo;
        }());
        var UserSexInfo = (function () {
            function UserSexInfo() {
            }
            Object.defineProperty(UserSexInfo.prototype, "uid", {
                get: function () {
                    return this._uid;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(UserSexInfo.prototype, "sprite", {
                get: function () {
                    return this._sprite;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(UserSexInfo.prototype, "valid", {
                get: function () {
                    if (this._sprite) {
                        if (cc.isValid(this._sprite, true)) {
                            return true;
                        }
                        this.restore();
                    }
                    return false;
                },
                enumerable: false,
                configurable: true
            });
            UserSexInfo.prototype.updateUid = function (uid) {
                if (this.valid) {
                    if (this._uid !== uid) {
                        this._uid = uid;
                        return true;
                    }
                }
                return false;
            };
            UserSexInfo.prototype.restore = function () {
                if (this._sprite && delete utils.userRender._dicSexInfo[this._sprite.uuid]) {
                    gea.pool.restore(this);
                }
            };
            UserSexInfo.prototype.callbackAfterBorrow = function (sprite) {
                this._sprite = sprite;
            };
            UserSexInfo.prototype.callbackBeforeRestore = function () {
                this._sprite = this._uid = undefined;
                return true;
            };
            return UserSexInfo;
        }());
        var UserRender = (function () {
            function UserRender() {
                this._dicHeadInfo = {};
                this._dicNameInfo = {};
                this._dicSexInfo = {};
            }
            UserRender.prototype.head = function (uid, sprite, opts) {
                var _this = this;
                var userHeadInfo = this._dicHeadInfo[sprite.uuid];
                if (userHeadInfo == null) {
                    userHeadInfo = gea.pool.borrow(UserHeadInfo, sprite);
                    this._dicHeadInfo[sprite.uuid] = userHeadInfo;
                }
                if (userHeadInfo.updateUid(uid)) {
                    userHeadInfo.updateAvatar('').updateTexture(opts && opts.defaultTexture);
                    hogame.utils.userInfo.get(uid, function (info) {
                        if (userHeadInfo.valid) {
                            if (info.uid.toString() === userHeadInfo.uid.toString()) {
                                userHeadInfo.updateAvatar(info.avatar);
                                hogame.utils.res.getFrameFromRemote(info.avatar, function (texture, originUrl) {
                                    if (userHeadInfo.valid && originUrl === userHeadInfo.avatar) {
                                        userHeadInfo.updateTexture(texture);
                                        userHeadInfo.restore();
                                    }
                                }, _this, sprite.node.width, sprite.node.height);
                            }
                        }
                    });
                }
                return this;
            };
            UserRender.prototype.name = function (uid, lable, maxLen, maxWidth) {
                var userNameInfo = this._dicNameInfo[lable.uuid];
                if (userNameInfo == null) {
                    userNameInfo = gea.pool.borrow(UserNameInfo, lable);
                    this._dicNameInfo[lable.uuid] = userNameInfo;
                }
                if (userNameInfo.updateUid(uid)) {
                    if (userNameInfo.valid) {
                        hogame.utils.userInfo.get(uid, function (info) {
                            if (userNameInfo.valid && info.uid.toString() === userNameInfo.uid.toString()) {
                                renderLimitLable(info.nick, lable, maxLen, maxWidth);
                                userNameInfo.restore();
                            }
                        });
                    }
                }
                return this;
            };
            UserRender.prototype.sex = function (uid, sprite, maleUrl, femaleUrl) {
                var _this = this;
                maleUrl = maleUrl || this._defaultMaleUrl;
                femaleUrl = femaleUrl || this._defaultFeMaleUrl;
                if (maleUrl && femaleUrl) {
                    var userSexInfo_1 = this._dicSexInfo[sprite.uuid];
                    if (userSexInfo_1 == null) {
                        userSexInfo_1 = gea.pool.borrow(UserSexInfo, sprite);
                        this._dicSexInfo[sprite.uuid] = userSexInfo_1;
                    }
                    if (userSexInfo_1.updateUid(uid)) {
                        hogame.utils.userInfo.get(uid, function (info) {
                            if (userSexInfo_1.valid && info.uid.toString() === userSexInfo_1.uid.toString()) {
                                var sexUrl_1 = info.sex === hago.enums.sex.female ? femaleUrl : maleUrl;
                                cc.resources.load(sexUrl_1, cc.SpriteFrame, function (error, frame) {
                                    if (error) {
                                        gea.warn("userRender.sex failed! " + sexUrl_1 + " load failed! stack: \n" + error.stack);
                                    }
                                    else if (userSexInfo_1.valid) {
                                        sprite.spriteFrame = frame;
                                    }
                                    else {
                                        gea.warn("sex render failed, sprite or spriteFrame is destoryed");
                                    }
                                    userSexInfo_1.restore();
                                });
                            }
                            else {
                                if (_this._dicSexInfo[sprite.uuid]) {
                                    gea.pool.restore(userSexInfo_1);
                                }
                            }
                        });
                    }
                }
                else {
                    gea.warn("userRender.sex failed! neither 'maleUrl' nor 'femaleUrl' can be empty. maleUrl: '" + maleUrl + "', femaleUrl: '" + femaleUrl + "'");
                }
                return this;
            };
            UserRender.prototype.sexDefault = function (maleUrl, femaleUlr) {
                this._defaultMaleUrl = maleUrl;
                this._defaultFeMaleUrl = femaleUlr;
                return this;
            };
            UserRender.prototype.few = function (uid, opts) {
                if (opts.head) {
                    this.head(uid, opts.head.sprite, opts.head.opts);
                }
                if (opts.name) {
                    this.name(uid, opts.name.label, opts.name.maxUtf8Len, opts.name.maxWidth);
                }
                if (opts.sex) {
                    this.sex(uid, opts.sex.sprite, opts.sex.maleUrl, opts.sex.femaleUrl);
                }
                return this;
            };
            return UserRender;
        }());
        function renderLimitLable(content, lable, maxLen, maxWidth) {
            if (!cc.isValid(lable, true)) {
                return;
            }
            maxWidth = maxWidth || 0;
            maxLen = maxLen || content.length;
            content = content.replace(/\\t|\t/g, '＼t').replace(/\\n|\n/g, '＼n');
            var tempNick = (maxLen <= 0 ? content : gea.utils.str.subUtf8(content, maxLen));
            if (maxWidth > 0) {
                lable.overflow = cc.Label.Overflow.NONE;
                do {
                    lable.string = tempNick;
                    if (lable['_updateRenderData']) {
                        lable['_updateRenderData'](true);
                    }
                    else if (lable['_forceUpdateRenderData']) {
                        lable['_forceUpdateRenderData']();
                    }
                    tempNick = gea.utils.str.subUtf8(tempNick, --maxLen);
                } while (lable.node.width > maxWidth && maxLen > 0);
            }
            else {
                lable.string = tempNick;
            }
        }
        utils.renderLimitLable = renderLimitLable;
        utils.userRender = new UserRender();
    })(utils = hogame.utils || (hogame.utils = {}));
})(hogame || (hogame = {}));

(function (gea) {
    var abstracts;
    (function (abstracts) {
        var ui;
        (function (ui) {
            var ModalBase = (function (_super) {
                __extends(ModalBase, _super);
                function ModalBase() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                Object.defineProperty(ModalBase, "uiType", {
                    get: function () {
                        return gea.enums.ui.ui_type.modal;
                    },
                    enumerable: false,
                    configurable: true
                });
                ModalBase.DEFAULT_SETUP = {};
                return ModalBase;
            }(gea.adapters.abstracts.ui.UIBase));
            ui.ModalBase = ModalBase;
        })(ui = abstracts.ui || (abstracts.ui = {}));
    })(abstracts = gea.abstracts || (gea.abstracts = {}));
})(gea || (gea = {}));

(function (gea) {
    var abstracts;
    (function (abstracts) {
        var ui;
        (function (ui) {
            var OverModalBase = (function (_super) {
                __extends(OverModalBase, _super);
                function OverModalBase() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                Object.defineProperty(OverModalBase, "uiType", {
                    get: function () {
                        return gea.enums.ui.ui_type.over_modal;
                    },
                    enumerable: false,
                    configurable: true
                });
                OverModalBase.DEFAULT_SETUP = {};
                return OverModalBase;
            }(gea.adapters.abstracts.ui.UIBase));
            ui.OverModalBase = OverModalBase;
        })(ui = abstracts.ui || (abstracts.ui = {}));
    })(abstracts = gea.abstracts || (gea.abstracts = {}));
})(gea || (gea = {}));

(function (gea) {
    var abstracts;
    (function (abstracts) {
        var ui;
        (function (ui) {
            var PanelBase = (function (_super) {
                __extends(PanelBase, _super);
                function PanelBase() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                Object.defineProperty(PanelBase, "uiType", {
                    get: function () {
                        return gea.enums.ui.ui_type.panel;
                    },
                    enumerable: false,
                    configurable: true
                });
                PanelBase.DEFAULT_SETUP = {};
                return PanelBase;
            }(gea.adapters.abstracts.ui.UIBase));
            ui.PanelBase = PanelBase;
        })(ui = abstracts.ui || (abstracts.ui = {}));
    })(abstracts = gea.abstracts || (gea.abstracts = {}));
})(gea || (gea = {}));

(function (gea) {
    var abstracts;
    (function (abstracts) {
        var ui;
        (function (ui) {
            var UnderModalBase = (function (_super) {
                __extends(UnderModalBase, _super);
                function UnderModalBase() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                Object.defineProperty(UnderModalBase, "uiType", {
                    get: function () {
                        return gea.enums.ui.ui_type.under_modal;
                    },
                    enumerable: false,
                    configurable: true
                });
                UnderModalBase.DEFAULT_SETUP = {};
                return UnderModalBase;
            }(gea.adapters.abstracts.ui.UIBase));
            ui.UnderModalBase = UnderModalBase;
        })(ui = abstracts.ui || (abstracts.ui = {}));
    })(abstracts = gea.abstracts || (gea.abstracts = {}));
})(gea || (gea = {}));

(function (gea) {
    var abstracts;
    (function (abstracts) {
        var ui;
        (function (ui) {
            var ViewBase = (function (_super) {
                __extends(ViewBase, _super);
                function ViewBase() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                Object.defineProperty(ViewBase, "uiType", {
                    get: function () {
                        return gea.enums.ui.ui_type.view;
                    },
                    enumerable: false,
                    configurable: true
                });
                ViewBase.DEFAULT_SETUP = {};
                return ViewBase;
            }(gea.adapters.abstracts.ui.UIBase));
            ui.ViewBase = ViewBase;
        })(ui = abstracts.ui || (abstracts.ui = {}));
    })(abstracts = gea.abstracts || (gea.abstracts = {}));
})(gea || (gea = {}));

(function (gea) {
    var abstracts;
    (function (abstracts) {
        var ui;
        (function (ui) {
            var WindowBase = (function (_super) {
                __extends(WindowBase, _super);
                function WindowBase() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                Object.defineProperty(WindowBase, "uiType", {
                    get: function () {
                        return gea.enums.ui.ui_type.window;
                    },
                    enumerable: false,
                    configurable: true
                });
                WindowBase.DEFAULT_SETUP = {};
                return WindowBase;
            }(gea.adapters.abstracts.ui.UIBase));
            ui.WindowBase = WindowBase;
        })(ui = abstracts.ui || (abstracts.ui = {}));
    })(abstracts = gea.abstracts || (gea.abstracts = {}));
})(gea || (gea = {}));
var hogame;
(function (hogame) {
    var Config = (function () {
        function Config() {
        }
        Object.defineProperty(Config.prototype, "url", {
            get: function () {
                return this._url;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Config.prototype, "gameId", {
            get: function () {
                return this._gameId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Config.prototype, "uid", {
            get: function () {
                return this._uid;
            },
            enumerable: false,
            configurable: true
        });
        Config.prototype.setup = function (config) {
            var _this = this;
            Object.keys(config).forEach(function (key) {
                if (_this['_' + key] == null) {
                    _this['_' + key] = config[key];
                    if (key === 'uid') {
                        var uidCount = hogame.config.uid.length;
                        var uid2Number = '';
                        for (var i = 0; i < uidCount; i++) {
                            if (isNaN(parseInt(hogame.config.uid.charAt(i)))) {
                                uid2Number += hogame.config.uid.charCodeAt(i);
                            }
                            else {
                                uid2Number += hogame.config.uid.charAt(i);
                            }
                        }
                        _this._uid = uid2Number;
                    }
                }
            });
            if (config.gameId != null) {
                gea.setLogPrefix("[hogame][" + config.gameId + "]");
            }
        };
        return Config;
    }());
    hogame.config = new Config();
})(hogame || (hogame = {}));
if (window['hg']) {
    hogame.config._uid = hg.getUid().toString();
}

(function (gea) {
    var events;
    (function (events) {
        var net;
        (function (net) {
            net["connect"] = "gea.events.net.connect";
            net["connect_fail"] = "gea.events.net.connect_fail";
            net["disconnect"] = "gea.events.net.disconnect";
            net["reconnect"] = "gea.events.net.reconnect";
            net["disconnect_self"] = "gea.events.net.disconnect_self";
            net["error"] = "gea.events.net.error";
            net["heart_beat_timeout"] = "gea.events.net.heart_beat_timeout";
        })(net = events.net || (events.net = {}));
    })(events = gea.events || (gea.events = {}));
})(gea || (gea = {}));

(function (gea) {
    var abstracts;
    (function (abstracts) {
        var net;
        (function (net) {
            var _netCount = -1;
            var NetBase = (function () {
                function NetBase() {
                    this._reqForbiddenAll = false;
                    this._dicReqForbidden = {};
                    this._resForbiddenAll = false;
                    this._dicResForbidden = {};
                    this._name = 'NET';
                    this._prevSyncTime = 0;
                    this._serverTime = NaN;
                    this._delayTime = 0;
                }
                Object.defineProperty(NetBase.prototype, "parser", {
                    get: function () {
                        throw new Error("please override in subClass, and don't call 'super.parser'");
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(NetBase.prototype, "serverTime", {
                    get: function () {
                        this.syncServerTime();
                        return this._serverTime || gea.instance.localTime;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(NetBase.prototype, "delayTime", {
                    get: function () {
                        return this._delayTime;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(NetBase.prototype, "connected", {
                    get: function () {
                        throw new Error('please override in subclass!');
                    },
                    enumerable: false,
                    configurable: true
                });
                NetBase.prototype.createNew = function (name) {
                    throw new Error('please override in subclass!');
                };
                NetBase.prototype.connect = function (uri, opts) {
                    throw new Error('please override in subclass!');
                };
                NetBase.prototype.disconnect = function () {
                    this.onNetEvent(gea.events.net.disconnect_self);
                };
                NetBase.prototype.send = function (netTag, data) {
                    var args = [];
                    for (var _i = 2; _i < arguments.length; _i++) {
                        args[_i - 2] = arguments[_i];
                    }
                    throw new Error('please override in subclass!');
                };
                NetBase.prototype.updateServerTime = function (serverTime, delayTime, log) {
                    if (log === void 0) { log = false; }
                    if (isNaN(delayTime) || delayTime < 0) {
                        delayTime = 0;
                    }
                    this._delayTime = delayTime;
                    if (!isNaN(this._serverTime)) {
                        var diffTime = this.serverTime - serverTime;
                        if (diffTime > delayTime || diffTime < -delayTime) {
                            this._prevSyncTime = gea.instance.pastTime;
                            this._serverTime = serverTime + delayTime;
                        }
                        if (log) {
                            gea.info('[gea.net.updateServerTime] diffServerTime:', diffTime, 'delayTime:', delayTime);
                        }
                    }
                    else {
                        this._prevSyncTime = gea.instance.pastTime;
                        this._serverTime = serverTime + delayTime;
                        if (log) {
                            gea.info('[gea.net.updateServerTime] init:', this._serverTime, 'delayTime:', delayTime);
                        }
                    }
                };
                NetBase.prototype.once = function (netTag, callback, scope) {
                    var _a;
                    var callbackArgs = [];
                    for (var _i = 3; _i < arguments.length; _i++) {
                        callbackArgs[_i - 3] = arguments[_i];
                    }
                    (_a = gea.utility.dispatcher).once.apply(_a, __spread([this, netTag, callback, scope], callbackArgs));
                    return this;
                };
                NetBase.prototype.on = function (netTag, callbackLimite, callback, scope) {
                    var _a;
                    var callbackArgs = [];
                    for (var _i = 4; _i < arguments.length; _i++) {
                        callbackArgs[_i - 4] = arguments[_i];
                    }
                    (_a = gea.utility.dispatcher).on.apply(_a, __spread([this, netTag, callbackLimite, callback, scope], callbackArgs));
                    return this;
                };
                NetBase.prototype.off = function (netTag, callback, scope) {
                    gea.utility.dispatcher.off(this, netTag, callback, scope);
                    return this;
                };
                NetBase.prototype.oncePrior = function (netTag, callback, scope) {
                    var _a;
                    var callbackArgs = [];
                    for (var _i = 3; _i < arguments.length; _i++) {
                        callbackArgs[_i - 3] = arguments[_i];
                    }
                    (_a = gea.utility.dispatcher).oncePrior.apply(_a, __spread([this, netTag, callback, scope], callbackArgs));
                    return this;
                };
                NetBase.prototype.onPrior = function (netTag, callbackLimite, callback, scope) {
                    var _a;
                    var callbackArgs = [];
                    for (var _i = 4; _i < arguments.length; _i++) {
                        callbackArgs[_i - 4] = arguments[_i];
                    }
                    (_a = gea.utility.dispatcher).onPrior.apply(_a, __spread([this, netTag, callbackLimite, callback, scope], callbackArgs));
                    return this;
                };
                NetBase.prototype.offByScope = function (scope) {
                    gea.utility.dispatcher.offByScope(scope, this);
                    return this;
                };
                NetBase.prototype.dispatch = function (tag) {
                    var _a;
                    var args = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        args[_i - 1] = arguments[_i];
                    }
                    (_a = gea.utility.dispatcher).dispatch.apply(_a, __spread([this, tag], args));
                    return this;
                };
                NetBase.prototype.forbidReqLog = function () {
                    var _this = this;
                    var netTags = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        netTags[_i] = arguments[_i];
                    }
                    if (netTags.length > 0) {
                        this._reqForbiddenAll = false;
                        netTags.forEach(function (netTag) {
                            _this._dicReqForbidden[netTag] = true;
                        });
                    }
                    else {
                        this._reqForbiddenAll = true;
                    }
                    return this;
                };
                NetBase.prototype.forbidResLog = function () {
                    var _this = this;
                    var netTags = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        netTags[_i] = arguments[_i];
                    }
                    if (netTags.length > 0) {
                        this._resForbiddenAll = false;
                        netTags.forEach(function (netTag) {
                            _this._dicResForbidden[netTag] = true;
                        });
                    }
                    else {
                        this._resForbiddenAll = true;
                    }
                    return this;
                };
                NetBase.prototype.destroy = function () {
                    gea.pool.restore(this);
                };
                NetBase.prototype.callbackAfterBorrow = function (name) {
                    if (name == null) {
                        name = "NET" + (++_netCount > 0 ? _netCount : '');
                    }
                    this._name = name;
                    gea.instance.dispatch('gea.events.net.callbackAfterBorrow', this);
                };
                NetBase.prototype.callbackBeforeRestore = function () {
                    this.disconnect();
                    gea.instance.dispatch('gea.events.net.callbackBeforeRestore', this);
                    return true;
                };
                NetBase.prototype.decode = function (data) {
                    var result;
                    try {
                        result = this.parser.decode(data);
                    }
                    catch (e) {
                        gea.error('netParser decode error!', '\ndata:' + JSON.stringify(data), '\n' + e.stack);
                        return;
                    }
                    if (result) {
                        if (result.log) {
                            this.logRes(result.msg, result.log);
                        }
                        this.dispatch.apply(this, __spread([result.msg, result.data], result.args));
                    }
                };
                NetBase.prototype.encode = function (netTag, data) {
                    var _a;
                    var args = [];
                    for (var _i = 2; _i < arguments.length; _i++) {
                        args[_i - 2] = arguments[_i];
                    }
                    var result;
                    try {
                        result = (_a = this.parser).encode.apply(_a, __spread([netTag, data], args));
                    }
                    catch (e) {
                        gea.error('netParser encode error', netTag, JSON.stringify(data));
                        return { sendAble: false, msg: netTag, data: undefined, log: '' };
                    }
                    if (result.log) {
                        this.logReq(netTag, result.log);
                    }
                    return result;
                };
                NetBase.prototype.onNetEvent = function (event) {
                    var args = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        args[_i - 1] = arguments[_i];
                    }
                    gea.info.apply(gea, __spread(['[gea.net]' + event], args));
                    this.dispatch.apply(this, __spread([event], args));
                };
                NetBase.prototype.onIoEvent = function (event, param) {
                    gea.info('[socket.io]' + event, param ? 'param:' + JSON.stringify(param) : '');
                };
                NetBase.prototype.onWsEvent = function (event, param) {
                    gea.info('[gea.ws]' + event, param ? 'param:' + JSON.stringify(param) : '');
                };
                NetBase.prototype.syncServerTime = function () {
                    var nowTime = gea.instance.pastTime;
                    if (nowTime > this._prevSyncTime) {
                        this._serverTime += nowTime - this._prevSyncTime;
                        this._prevSyncTime = nowTime;
                    }
                };
                NetBase.prototype.logRes = function (netTag, content) {
                    if (this._dicResForbidden[netTag] == null && !this._resForbiddenAll) {
                        gea.info(this._name, 'res', content);
                    }
                };
                NetBase.prototype.logReq = function (netTag, content) {
                    if (this._dicReqForbidden[netTag] == null && !this._reqForbiddenAll) {
                        gea.info(this._name, 'req', content);
                    }
                };
                return NetBase;
            }());
            net.NetBase = NetBase;
        })(net = abstracts.net || (abstracts.net = {}));
    })(abstracts = gea.abstracts || (gea.abstracts = {}));
})(gea || (gea = {}));

(function (gea) {
    var abstracts;
    (function (abstracts) {
        var net;
        (function (net) {
            var NetParserBase = (function () {
                function NetParserBase() {
                }
                NetParserBase.prototype.encode = function (netTag, sendData) {
                    var args = [];
                    for (var _i = 2; _i < arguments.length; _i++) {
                        args[_i - 2] = arguments[_i];
                    }
                    throw new Error('please override in subClass!');
                };
                NetParserBase.prototype.decode = function (recieveData) {
                    throw new Error('please override in subClass!');
                };
                NetParserBase.prototype.setMapping = function (mapping) {
                    this._mapping = mapping;
                    return this;
                };
                NetParserBase.prototype.setEncodeLogGenerator = function (callback) {
                    this._encodeLogGenerator = callback;
                    return this;
                };
                NetParserBase.prototype.setDecodeLogGenerator = function (callback) {
                    this._decodeLogGenerator = callback;
                    return this;
                };
                NetParserBase.prototype.destroy = function () {
                    this._entity = undefined;
                    this._mapping = undefined;
                    this._encodeLogGenerator = undefined;
                    this._decodeLogGenerator = undefined;
                };
                return NetParserBase;
            }());
            net.NetParserBase = NetParserBase;
        })(net = abstracts.net || (abstracts.net = {}));
    })(abstracts = gea.abstracts || (gea.abstracts = {}));
})(gea || (gea = {}));

(function (gea) {
    var CONN_ID = 0;
    var MESSAGE_ENTER_ROOM = 'net.ihago.gme.srv.sidecar_gateway.GMEInternalEnterRoom';
    var MESSAGE_LEAVE_ROOM = 'net.ihago.gme.srv.sidecar_gateway.GMEInternalLeaveRoom';
    var MESSAGE_PING = 'reserved.gateway.ping';
    var NetParser = (function (_super) {
        __extends(NetParser, _super);
        function NetParser() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._mapRoomId = new Map();
            return _this;
        }
        NetParser.prototype.encode = function (messageName, sendData, path, roomId) {
            var resultBody = this._mapping[messageName].parser.encode(sendData).finish();
            var bufferBody = resultBody.buffer.slice(resultBody.byteOffset, resultBody.byteOffset + resultBody.byteLength);
            path = path || this._mapping[messageName].path;
            if (messageName !== MESSAGE_ENTER_ROOM) {
                roomId = roomId || this._mapRoomId.get(path) || (messageName === MESSAGE_PING && '');
            }
            else {
                roomId = roomId || this.commonRoomId;
                this._mapRoomId.set(path, roomId);
            }
            this._upStream.path = path;
            this._upStream.body_name = messageName;
            this._upStream.body = new Uint8Array(bufferBody);
            this._upStream.seq++;
            this._upStream.uid = this._entity.uid;
            this._upStream.room_id = roomId;
            var resultUpStream = this._mapping.Upstream.parser.encode(this._upStream).finish();
            var bufferUpStream = resultUpStream.buffer.slice(resultUpStream.byteOffset, resultUpStream.byteOffset + resultUpStream.byteLength);
            var sendAble = roomId === '' || !!roomId;
            var encodeResult = {
                sendAble: sendAble,
                msg: messageName,
                data: bufferUpStream,
                log: messageName + " " + sendData + " " + JSON.stringify(this._upStream, function (key, value) {
                    if (key === 'body') {
                        return null;
                    }
                    return value;
                }),
            };
            if (!sendAble) {
                gea.error("\u6D88\u606F" + messageName + "\u5C5E\u4E8E'" + path + "'\u6A21\u5757,\u5F53\u524D\u672A\u52A0\u5165\u8BE5\u6A21\u5757,\u8BF7\u8C03\u7528\u7F51\u7EDC\u5B9E\u4F8B\u7684'enterRoom\u65B9\u6CD5'\u52A0\u5165\u8BE5\u6A21\u5757\u540E\u624D\u80FD\u6210\u529F\u53D1\u9001\u8BE5\u6D88\u606F\u5230\u670D\u52A1\u5668");
                encodeResult.log = null;
            }
            else {
                if (this._encodeLogGenerator) {
                    encodeResult.log = this._encodeLogGenerator({
                        msg: messageName,
                        body: sendData,
                        upStream: JSON.parse(JSON.stringify(this._upStream, function (key, value) {
                            if (key !== 'body') {
                                return value;
                            }
                        })),
                    });
                }
                else if (!window['hg']) {
                    encodeResult.log = {
                        msg: messageName,
                        body: sendData,
                        upStream: JSON.parse(JSON.stringify(this._upStream, function (key, value) {
                            if (key !== 'body') {
                                return value;
                            }
                        })),
                    };
                }
            }
            return encodeResult;
        };
        NetParser.prototype.decode = function (recieveData) {
            var startTime = gea.instance.pastTime;
            this._downStream = this._mapping.Downstream.parser.decode(new Uint8Array(recieveData));
            var msgKey = this._downStream.body_name || this._downStream.path;
            if (this._mapping[msgKey]) {
                var decodeedData = this._mapping[msgKey].parser.decode(this._downStream.body);
                var costTime = gea.instance.pastTime - startTime;
                var decodeResult = {
                    decodeTime: costTime,
                    msg: msgKey,
                    data: decodeedData,
                    log: msgKey + " decodeTime: " + costTime + ", " + JSON.stringify(decodeedData) + " " + JSON.stringify(this._downStream, function (key, value) {
                        if (key === 'body') {
                            return null;
                        }
                        return value;
                    }),
                    args: [this._downStream],
                };
                if (msgKey === MESSAGE_LEAVE_ROOM) {
                    if (decodeedData.uid) {
                        if (decodeedData.uid === hogame.config.uid) {
                            this._mapRoomId.delete(this._downStream.path);
                        }
                    }
                }
                else if (msgKey === MESSAGE_ENTER_ROOM) {
                    this._mapRoomId.set(this._downStream.path, this._downStream.room_id);
                }
                if (this._decodeLogGenerator) {
                    decodeResult.log = this._decodeLogGenerator({
                        msg: msgKey,
                        decodeTime: costTime,
                        body: decodeedData,
                        downStream: this._downStream,
                    });
                }
                else if (!window['hg']) {
                    decodeResult.log = {
                        msg: msgKey,
                        decodeTime: costTime,
                        body: decodeedData,
                        downStream: JSON.parse(JSON.stringify(this._downStream, function (key, value) {
                            if (key !== 'body') {
                                return value;
                            }
                        })),
                    };
                }
                return decodeResult;
            }

            if (msgKey == 'reserved.gateway.body_name.fail') {
                gea.instance.dispatch(gea.events.base.room_unavailable);
            }

            gea.warn(msgKey + "\u627E\u4E0D\u5230\u5BF9\u5E94\u7684\u89E3\u6790\u51FD\u6570,\u8BF7\u786E\u8BA4\u524D\u540E\u7AEFproto\u6587\u4EF6\u662F\u5426\u4E00\u81F4", JSON.stringify(this._downStream));
            return null;
        };
        NetParser.prototype.callbackAfterBorrow = function (net) {
            this._entity = net;
            this._upStream = { content_type: 'application/protobuf', seq: 0, conn_id: (++CONN_ID).toString() };
            this._downStream = {};
        };
        NetParser.prototype.callbackBeforeRestore = function () {
            this._commonRoomId = undefined;
            this._upStream = undefined;
            this._downStream = undefined;
            this._mapRoomId.clear();
            return true;
        };
        NetParser.prototype.destroy = function () {
            _super.prototype.destroy.call(this);
            gea.pool.restore(this);
        };
        Object.defineProperty(NetParser.prototype, "commonRoomId", {
            get: function () {
                if (this._commonRoomId === undefined) {
                    this._commonRoomId = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
                        return v.toString(16);
                    }) + this._entity.uid;
                }
                return this._commonRoomId;
            },
            enumerable: false,
            configurable: true
        });
        return NetParser;
    }(gea.abstracts.net.NetParserBase));
    gea.instance
        .on('gea.events.net.callbackAfterBorrow', function (net) {
        gea.utility.entity.addComponent(net, gea.pool.borrow(NetParser, net));
    }, window)
        .on('gea.events.net.callbackBeforeRestore', function (net) {
        gea.utility.entity.removeComponent(net, NetParser).destroy();
    }, window);
    if (gea.net) {
        gea.utility.entity.addComponent(gea.net, gea.pool.borrow(NetParser, gea.net));
    }
})(gea || (gea = {}));

(function (gea) {
    var abstracts;
    (function (abstracts) {
        var net;
        (function (net) {
            var NetHeartBeatBase = (function () {
                function NetHeartBeatBase() {
                    this._timeoutCountLimit = Infinity;
                    this._pingRate = 5000;
                    this._pingStartEvent = '';
                    this._listHeartBeatClientTime = [];
                    this._printserverDiffTime = false;
                    this._running = false;
                    this._timeoutCount = 0;
                }
                NetHeartBeatBase.prototype.timeoutCountLimit = function (value) {
                    if (value && !isNaN(value)) {
                        if (this._timeoutCountLimit !== value) {
                            this._timeoutCountLimit = value;
                        }
                        return this;
                    }
                    return this._timeoutCountLimit;
                };
                NetHeartBeatBase.prototype.interval = function (value) {
                    if (value && !isNaN(value)) {
                        if (this._pingRate !== value) {
                            this._pingRate = value;
                            if (this._running) {
                                this.stopPing();
                                this.startPing();
                            }
                        }
                        return this;
                    }
                    return this._pingRate;
                };
                NetHeartBeatBase.prototype.startupEvent = function (value, immediately) {
                    if (immediately === void 0) { immediately = false; }
                    if (value !== this._pingStartEvent) {
                        if (this._pingStartEvent) {
                            this._entity.off(this._pingStartEvent, this.startPing, this);
                        }
                        this._pingStartEvent = value;
                        this._entity.on(this._pingStartEvent, this.startPing, this);
                        if (immediately) {
                            this.startPing();
                        }
                    }
                    return this;
                };
                NetHeartBeatBase.prototype.printServerDiffTime = function (value) {
                    this._printserverDiffTime = value;
                    return this;
                };
                NetHeartBeatBase.prototype.destroy = function () {
                    this.stopPing();
                    this._listHeartBeatClientTime.length = 0;
                    if (this._entity !== undefined) {
                        this._entity.offByScope(this);
                        this._entity = undefined;
                    }
                };
                NetHeartBeatBase.prototype.ping = function () {
                    throw new Error('please override in subClass');
                };
                NetHeartBeatBase.prototype.pong = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    this._timeoutCount = 0;
                };
                NetHeartBeatBase.prototype.startPing = function () {
                    this._listHeartBeatClientTime.length = 0;
                    this._timeoutCount = 0;
                    if (!this._running) {
                        this._running = true;
                        gea.timer.off(this.pingCount, this);
                        gea.timer.on(this._pingRate, this.pingCount, this);
                        this.pingCount();
                    }
                };
                NetHeartBeatBase.prototype.stopPing = function () {
                    this._running = false;
                    gea.timer.off(this.pingCount, this);
                };
                NetHeartBeatBase.prototype.pingCount = function () {
                    if (++this._timeoutCount <= this._timeoutCountLimit) {
                        this._listHeartBeatClientTime.push(gea.instance.pastTime);
                        this.ping();
                    }
                    else {
                        this.stopPing();
                        this._entity.dispatch(gea.events.net.heart_beat_timeout);
                    }
                };
                return NetHeartBeatBase;
            }());
            net.NetHeartBeatBase = NetHeartBeatBase;
        })(net = abstracts.net || (abstracts.net = {}));
    })(abstracts = gea.abstracts || (gea.abstracts = {}));
})(gea || (gea = {}));

(function (gea) {
    var MESSAGE_PING = 'reserved.gateway.ping';
    var MESSAGE_PONG = 'reserved.gateway.pong';
    var NetHeartBeat = (function (_super) {
        __extends(NetHeartBeat, _super);
        function NetHeartBeat() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        NetHeartBeat.prototype.callbackAfterBorrow = function (net) {
            this._entity = net;
            this._entity.on(MESSAGE_PONG, this.pong, this);
            this.startupEvent(gea.events.net.connect);
        };
        NetHeartBeat.prototype.destroy = function () {
            _super.prototype.destroy.call(this);
            gea.pool.restore(this);
        };
        NetHeartBeat.prototype.ping = function () {
            this._entity.send(MESSAGE_PING, null, MESSAGE_PING, '');
        };
        NetHeartBeat.prototype.pong = function (res, downStream) {
            _super.prototype.pong.call(this);
            this._entity.updateServerTime(Number(downStream.header.timestamp), (gea.instance.pastTime - this._listHeartBeatClientTime.shift()) * 0.5, this._printserverDiffTime);
        };
        return NetHeartBeat;
    }(gea.abstracts.net.NetHeartBeatBase));
    gea.instance
        .on('gea.events.net.callbackAfterBorrow', function (net) {
        gea.utility.entity.addComponent(net, gea.pool.borrow(NetHeartBeat, net));
    }, window)
        .on('gea.events.net.callbackBeforeRestore', function (net) {
        gea.utility.entity.removeComponent(net, NetHeartBeat).destroy();
    }, window);
    if (gea.net) {
        gea.utility.entity.addComponent(gea.net, gea.pool.borrow(NetHeartBeat, gea.net));
    }
})(gea || (gea = {}));

(function (gea) {
    var GmeNet = (function (_super) {
        __extends(GmeNet, _super);
        function GmeNet() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._opts = {
                binaryType: 'arraybuffer',
                reconnection: true,
                reconnectionAttempts: Infinity,
                reconnectionDelay: 1000,
                reconnectionDelayMax: 5000,
                timeout: 10000,
            };
            _this._reconnectAttempts = 0;
            _this._reconnectionDealy = 0;
            return _this;
        }
        Object.defineProperty(GmeNet.prototype, "uid", {
            get: function () {
                return this._uid;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GmeNet.prototype, "parser", {
            get: function () {
                return this._netParser || (this._netParser = gea.utility.entity.getComponent(this, gea.abstracts.net.NetParserBase, true));
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GmeNet.prototype, "heartBeat", {
            get: function () {
                return this._heartBeat || (this._heartBeat = gea.utility.entity.getComponent(this, gea.abstracts.net.NetHeartBeatBase, true));
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GmeNet.prototype, "connected", {
            get: function () {
                return this._socket && this._socket.readyState === WebSocket.OPEN;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(GmeNet.prototype, "uri", {
            get: function () {
                return this._uri;
            },
            enumerable: false,
            configurable: true
        });
        GmeNet.prototype.setup = function (uid, opts) {
            var _this = this;
            this._uid = uid;
            if (opts) {
                Object.keys(opts).forEach(function (key) {
                    if (_this._opts[key] != null) {
                        _this._opts[key] = opts[key];
                    }
                });
            }
            return this;
        };
        GmeNet.prototype.connect = function (uri, opts) {
            var _this = this;
            this.disconnect();
            this._uri = uri;
            if (opts != null) {
                Object.keys(opts).forEach(function (key) {
                    if (_this._opts[key] != null) {
                        _this._opts[key] = opts[key];
                    }
                });
                this._opts.reconnectionDelayMax = Math.max(this._opts.reconnectionDelay, this._opts.reconnectionDelayMax);
                this._uri += opts.path ? opts.path : '';
                if (opts.query != null) {
                    var queryContent_1 = '';
                    Object.keys(opts.query).forEach(function (key) {
                        if (queryContent_1 !== '') {
                            queryContent_1 += '&' + key + '=' + opts.query[key];
                        }
                        else {
                            queryContent_1 += key + '=' + opts.query[key];
                        }
                    });
                    if (queryContent_1 !== '') {
                        this._uri += '?' + queryContent_1;
                    }
                }
            }
            this.doConnect();
        };
        GmeNet.prototype.disconnect = function () {
            if (this._socket != null) {
                this.deRegisterWsEvent();
                if (this._socket.readyState !== WebSocket.CLOSING && this._socket.readyState !== WebSocket.CLOSED) {
                    this._socket.close();
                }
                this._socket = null;
                _super.prototype.disconnect.call(this);
            }
        };
        GmeNet.prototype.send = function (netTag, data, path, roomId) {
            data = data || {};
            var result = this.encode(netTag, data, path, roomId);
            if (this._socket != null) {
                if (this.connected) {
                    if (result.sendAble) {
                        this._socket.send(result.data);
                    }
                }
                else {
                    gea.error('socket unconnected, sending -> ', netTag, JSON.stringify(data));
                }
            }
            else {
                gea.error('soket is null, sending -> ', netTag, JSON.stringify(data));
            }
            return this;
        };
        GmeNet.prototype.enterRoom = function (path, roomId, msg) {
            gea.net.send('net.ihago.gme.srv.sidecar_gateway.GMEInternalEnterRoom', msg, path, roomId);
        };
        GmeNet.prototype.leaveRoom = function (path, msg) {
            gea.net.send('net.ihago.gme.srv.sidecar_gateway.GMEInternalLeaveRoom', msg, path);
        };
        GmeNet.prototype.createNew = function (name) {
            return gea.pool.borrow(GmeNet, name);
        };
        GmeNet.prototype.callbackBeforeRestore = function () {
            _super.prototype.callbackBeforeRestore.call(this);
            this._opts.binaryType = 'arraybuffer';
            this._opts.protocols = null;
            this._opts.reconnection = true;
            this._opts.reconnectionAttempts = Infinity;
            this._opts.reconnectionDealyFunc = null;
            this._opts.reconnectionDelay = 1000;
            this._opts.reconnectionDelayMax = 5000;
            this._opts.timeout = 10000;
            this._socket = null;
            this._netParser = null;
            this._heartBeat = null;
            return true;
        };
        GmeNet.prototype.connectTimeout = function () {
            this.onWsEvent('conect timeout');
            this.attemptReconnect();
        };
        GmeNet.prototype.attemptReconnect = function () {
            this.disconnect();
            if (this._opts.reconnection && (this._reconnectAttempts < this._opts.reconnectionAttempts)) {
                if (this._reconnectionDealy < this._opts.reconnectionDelayMax) {
                    if (this._opts.reconnectionDealyFunc != null) {
                        this._reconnectionDealy = Math.max(Math.min(this._opts.reconnectionDealyFunc(this._reconnectAttempts++, this._opts.reconnectionDelay, this._opts.reconnectionDelayMax), this._opts.reconnectionDelayMax), 0);
                    }
                    else {
                        this._reconnectionDealy = Math.min(500 + this._reconnectionDealy, this._opts.reconnectionDelayMax);
                    }
                }
                if (this._reconnectionDealy > 0) {
                    gea.timer.once(this._reconnectionDealy, this.doReconnect, this);
                }
                else {
                    this.doReconnect();
                }
            }
            else {
                this.onNetEvent(gea.events.net.connect_fail);
            }
        };
        GmeNet.prototype.doReconnect = function () {
            this.onWsEvent('attemptReconnect', this._reconnectAttempts);
            this.doConnect();
        };
        GmeNet.prototype.doConnect = function () {
            this.onWsEvent('connect server ' + this._uri);
            if (this._opts != null) {
                this._socket = new WebSocket(this._uri, this._opts.protocols);
                this._socket.binaryType = this._opts.binaryType || 'arraybuffer';
            }
            else {
                this._socket = new WebSocket(this._uri);
                this._socket.binaryType = 'arraybuffer';
            }
            this.registerWsEvent();
            if (this._opts.timeout > 0) {
                gea.timer.once(this._opts.timeout, this.connectTimeout, this);
            }
        };
        GmeNet.prototype.deRegisterWsEvent = function () {
            this._socket.onopen = null;
            this._socket.onerror = null;
            this._socket.onclose = null;
            this._socket.onmessage = null;
            gea.timer.off(this.connectTimeout, this);
            gea.timer.off(this.doReconnect, this);
        };
        GmeNet.prototype.registerWsEvent = function () {
            var _this = this;
            this._socket.onopen = function (e) {
                gea.timer.off(_this.connectTimeout, _this);
                _this.onWsEvent('open', e);
                if (_this._reconnectAttempts > 0) {
                    _this.onNetEvent(gea.events.net.reconnect, _this._reconnectAttempts);
                }
                _this._reconnectAttempts = 0;
                _this.onNetEvent(gea.events.net.connect);
            };
            this._socket.onerror = function (e) {
                gea.timer.off(_this.connectTimeout, _this);
                _this.onWsEvent('error', e);
                _this.onNetEvent(gea.events.net.disconnect);
                _this.attemptReconnect();
            };
            this._socket.onclose = function (e) {
                gea.timer.off(_this.connectTimeout, _this);
                _this.onWsEvent('close', e);
                _this.onNetEvent(gea.events.net.disconnect);
                _this.attemptReconnect();
            };
            this._socket.onmessage = function (e) {
                _this.decode(e.data);
            };
        };
        return GmeNet;
    }(gea.abstracts.net.NetBase));
    gea.net = gea.pool.borrow(GmeNet);
})(gea || (gea = {}));
var hogame;
(function (hogame) {
    function login(net, invokeGameLoadResult, query) {
        if (invokeGameLoadResult === void 0) { invokeGameLoadResult = true; }
        if (query === void 0) { query = {}; }
        query.uid = net.uid;
        query.pingInterval = net.heartBeat.interval() / 1000;
        query.pingTimeout = net.heartBeat.timeoutCountLimit() * query.pingInterval;
        if (query.code) {
            gea.warn("query\u5185\u7684code\u5B57\u6BB5\u7528\u4E8E\u672C\u5730\u767B\u5F55\u65F6\u4F5C\u9A8C\u8BC1\u7528\u7684\uFF0C\u4E00\u822C\u4E0D\u8981\u81EA\u5DF1\u4F20\u5165\uFF0C\u9664\u975E\u4F60\u786E\u5B9A\u4F20\u5165\u7684\u662F\u6B63\u786E\u7684\u503C\uFF0C\u4E0D\u7136\u8FDE\u63A5\u4E0D\u4E86\u670D\u52A1\u5668");
            connectServer(net, query);
        }
        else {
            if (window['hg']) {
                if (invokeGameLoadResult) {
                    hg.gameLoadResult({ code: 0 });
                }
                hg.login({
                    success: function (res) {
                        query.code = res.code;
                        connectServer(net, query);
                    },
                    fail: function () {
                        gea.error('hg.login 获取code失败，退出游戏');
                        hg.exitMiniProgram({});
                    },
                });
            }
            else {
                reqHagoCode("http://access-api-test-id.ihago.net/jssdk/hagoToken2code?token=" + hogame.config.uid + "&gameid=" + hogame.config.gameId, net, query);
            }
        }
    }
    hogame.login = login;
    function reqHagoCode(url, net, query) {
        gea.info("\u5F00\u59CB\u8BF7\u6C42code: " + url);
        var xhr = new XMLHttpRequest();
        xhr.open('get', url);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status >= 200 && xhr.status <= 299) {
                    var result = void 0;
                    try {
                        result = JSON.parse(xhr.responseText);
                        if (result.errcode !== 0) {
                            gea.warn("reqHagoCode result:" + xhr.responseText);
                            gea.error("code\u8BF7\u6C42\u7ED3\u679C\u6709\u8BEF,\u8BF7\u5C06'uid'\u6539\u77ED\u4E00\u70B9\uFF0C\u4E14\u4FDD\u8BC1'uid'\u8F6C\u6210\u6570\u5B57\u540E\u4E0D\u4E3A'0'");
                            return;
                        }
                    }
                    catch (e) {
                        gea.error("code\u8BF7\u6C42\u7ED3\u679C\u53D1\u751F\u9519\u8BEF: " + xhr.responseText);
                        return;
                    }
                    query.code = result.code;
                    connectServer(net, query);
                }
            }
        };
        xhr.onerror = function () {
            gea.error("code\u8BF7\u6C42\u53D1\u751F\u9519\u8BEF,\u8BF7\u5237\u65B0\u91CD\u8BD5");
        };
        xhr.ontimeout = function () {
            gea.error("code\u8BF7\u6C42\u8D85\u65F6,\u5F00\u59CB\u91CD\u8BD5");
            reqHagoCode(url, net, query);
        };
        xhr.send();
    }
    function connectServer(net, query) {
        query.uid = net.uid;
        if (window['hg']) {
            var appName = hg.getSystemInfoSync().appId

            if (appName && appName !== "") {
                query.appName = appName;
            }

            var gameVersion = hg.getSystemInfoSync().gameVersion

            if (gameVersion && gameVersion !== "") {
                query.gameVersion = gameVersion;
            }

            var appVersion = hg.getSystemInfoSync().hagoVersion

            if (appVersion && appVersion !== "") {
                query.appVersion = appVersion;
            }

            var gameSession = hg.getSystemInfoSync().session_id

            if (gameSession && gameSession !== "") {
                query.gameSession = gameSession;
            }

            var subModuleUrl = hg.getSubModuleUrlSync({ id: 0 }).url;
            gea.info("\u5B50\u6A21\u5757url: " + subModuleUrl);
            if (!subModuleUrl) {
                gea.warn("\u5B50\u6A21\u5757url\u83B7\u53D6\u5931\u8D25\uFF0C\u8BF7\u8054\u7CFB\u670D\u52A1\u5668\u6216\u8005\u5E73\u53F0\uFF0C\u786E\u8BA4\u662F\u5426\u5DF2\u7ECF\u53D1\u5E03\u5230\u5F53\u524D\u73AF\u5883");
                return;
            }
            var splitIndex = subModuleUrl.lastIndexOf('/');
            if (splitIndex === subModuleUrl.length - 1) {
                subModuleUrl = subModuleUrl.slice(0, splitIndex);
                splitIndex = subModuleUrl.lastIndexOf('/');
            }
            if (window.__appointUrl__) {
                console.log(' window.__appointUrl__:', window.__appointUrl__, subModuleUrl);
            }
            hogame.config._url = window.__appointUrl__ || subModuleUrl.slice(0, splitIndex);
        }
        net.connect(hogame.config.url, {
            path: "/" + hogame.config.gameId + "/" + (gea.instance.localTime.toString(16) + '_' + hogame.config.uid) + "/",
            query: query,
        });
    }
})(hogame || (hogame = {}));
var hogame;
(function (hogame) {
    var Md5;
    (function (Md5) {
        var hexcase = 0;
        var b64pad = '';
        var chrsz = 8;
        function hex_md5(s) { return binl2hex(core_md5(str2binl(s), s.length * chrsz)); }
        Md5.hex_md5 = hex_md5;
        function b64_md5(s) { return binl2b64(core_md5(str2binl(s), s.length * chrsz)); }
        Md5.b64_md5 = b64_md5;
        function str_md5(s) { return binl2str(core_md5(str2binl(s), s.length * chrsz)); }
        Md5.str_md5 = str_md5;
        function hex_hmac_md5(key, data) { return binl2hex(core_hmac_md5(key, data)); }
        Md5.hex_hmac_md5 = hex_hmac_md5;
        function b64_hmac_md5(key, data) { return binl2b64(core_hmac_md5(key, data)); }
        Md5.b64_hmac_md5 = b64_hmac_md5;
        function str_hmac_md5(key, data) { return binl2str(core_hmac_md5(key, data)); }
        Md5.str_hmac_md5 = str_hmac_md5;
        function md5_vm_test() {
            return hex_md5('abc') === '900150983cd24fb0d6963f7d28e17f72';
        }
        function core_md5(x, len) {
            x[len >> 5] |= 0x80 << ((len) % 32);
            x[(((len + 64) >>> 9) << 4) + 14] = len;
            var a = 1732584193;
            var b = -271733879;
            var c = -1732584194;
            var d = 271733878;
            for (var i = 0; i < x.length; i += 16) {
                var olda = a;
                var oldb = b;
                var oldc = c;
                var oldd = d;
                a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
                d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
                c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
                b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
                a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
                d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
                c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
                b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
                a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
                d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
                c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
                b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
                a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
                d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
                c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
                b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);
                a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
                d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
                c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
                b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
                a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
                d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
                c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
                b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
                a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
                d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
                c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
                b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
                a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
                d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
                c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
                b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);
                a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
                d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
                c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
                b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
                a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
                d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
                c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
                b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
                a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
                d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
                c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
                b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
                a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
                d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
                c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
                b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);
                a = md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
                d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
                c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
                b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
                a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
                d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
                c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
                b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
                a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
                d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
                c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
                b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
                a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
                d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
                c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
                b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);
                a = safe_add(a, olda);
                b = safe_add(b, oldb);
                c = safe_add(c, oldc);
                d = safe_add(d, oldd);
            }
            return Array(a, b, c, d);
        }
        function md5_cmn(q, a, b, x, s, t) {
            return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
        }
        function md5_ff(a, b, c, d, x, s, t) {
            return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
        }
        function md5_gg(a, b, c, d, x, s, t) {
            return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
        }
        function md5_hh(a, b, c, d, x, s, t) {
            return md5_cmn(b ^ c ^ d, a, b, x, s, t);
        }
        function md5_ii(a, b, c, d, x, s, t) {
            return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
        }
        function core_hmac_md5(key, data) {
            var bkey = str2binl(key);
            if (bkey.length > 16) {
                bkey = core_md5(bkey, key.length * chrsz);
            }
            var ipad = Array(16), opad = Array(16);
            for (var i = 0; i < 16; i++) {
                ipad[i] = bkey[i] ^ 0x36363636;
                opad[i] = bkey[i] ^ 0x5C5C5C5C;
            }
            var hash = core_md5(ipad.concat(str2binl(data)), 512 + data.length * chrsz);
            return core_md5(opad.concat(hash), 512 + 128);
        }
        function safe_add(x, y) {
            var lsw = (x & 0xFFFF) + (y & 0xFFFF);
            var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
            return (msw << 16) | (lsw & 0xFFFF);
        }
        function bit_rol(num, cnt) {
            return (num << cnt) | (num >>> (32 - cnt));
        }
        function str2binl(str) {
            var bin = Array();
            var mask = (1 << chrsz) - 1;
            for (var i = 0; i < str.length * chrsz; i += chrsz) {
                bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << (i % 32);
            }
            return bin;
        }
        function binl2str(bin) {
            var str = '';
            var mask = (1 << chrsz) - 1;
            for (var i = 0; i < bin.length * 32; i += chrsz) {
                str += String.fromCharCode((bin[i >> 5] >>> (i % 32)) & mask);
            }
            return str;
        }
        function binl2hex(binarray) {
            var hex_tab = hexcase ? '0123456789ABCDEF' : '0123456789abcdef';
            var str = '';
            for (var i = 0; i < binarray.length * 4; i++) {
                str += hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8 + 4)) & 0xF) +
                    hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8)) & 0xF);
            }
            return str;
        }
        function binl2b64(binarray) {
            var tab = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
            var str = '';
            for (var i = 0; i < binarray.length * 4; i += 3) {
                var triplet = (((binarray[i >> 2] >> 8 * (i % 4)) & 0xFF) << 16)
                    | (((binarray[i + 1 >> 2] >> 8 * ((i + 1) % 4)) & 0xFF) << 8)
                    | ((binarray[i + 2 >> 2] >> 8 * ((i + 2) % 4)) & 0xFF);
                for (var j = 0; j < 4; j++) {
                    if (i * 8 + j * 6 > binarray.length * 32) {
                        str += b64pad;
                    }
                    else {
                        str += tab.charAt((triplet >> 6 * (3 - j)) & 0x3F);
                    }
                }
            }
            return str;
        }
    })(Md5 = hogame.Md5 || (hogame.Md5 = {}));
})(hogame || (hogame = {}));
var hogame;
(function (hogame) {
    var urlParam = {};
    var aiOpt;
    function pkLogin(net, post_data, invokeGameLoadResult) {
        if (invokeGameLoadResult === void 0) { invokeGameLoadResult = true; }
        var originPostData = '';
        if (window['hg'] == null) {
            urlParam.timestamp = gea.instance.localTime;
            urlParam.nonstr = 'gecgtt92-bmj7-kb1k-w0d3-agvpmegp347f';
            urlParam.sign = 'c77621d59935c9acd0fa27e3c8cb7d7898fa40e5';
            urlParam.post_data = {
                roomid: gea.instance.localTime.toString(16),
                channelid: 'yy_haiou',
                gameid: hogame.config.gameId,
                player: {
                    uid: hogame.config.uid,
                    name: 'randomName' + (Math.random() * 10).toFixed(2),
                    avatarurl: 'https://o-hk.ihago.net/ikxd/3a79d0c04940f026a4d9758bcd6e0ab6/guest_3.png',
                    teamid: 'teamId1',
                    kv_sign: '',
                    sex: 0,
                    opt: '',
                },
            };
            if (post_data) {
                post_data.roomid && (urlParam.post_data.roomid = post_data.roomid);
                post_data.channelid && (urlParam.post_data.channelid = post_data.channelid);
                var playerInfo = post_data.player;
                if (playerInfo) {
                    playerInfo.name && (urlParam.post_data.player.name = playerInfo.name);
                    playerInfo.avatarUrl && (urlParam.post_data.player.avatarurl = playerInfo.avatarUrl);
                    playerInfo.teamid && (urlParam.post_data.player.teamid = playerInfo.teamid);
                    playerInfo.kv_sign && (urlParam.post_data.player.kv_sign = playerInfo.kv_sign);
                    playerInfo.sex && (urlParam.post_data.player.sex = playerInfo.sex);
                    playerInfo.opt && (urlParam.post_data.player.opt = JSON.stringify(playerInfo.opt));
                }
            }
            originPostData = JSON.stringify(urlParam.post_data);
            reqHagoCode("http://access-api-test-id.ihago.net/jssdk/hagoToken2code?token=" + hogame.config.uid + "&gameid=" + hogame.config.gameId, function (code) {
                connectServer(net, originPostData, code);
            });
        }
        else {
            if (invokeGameLoadResult) {
                hg.gameLoadResult({ code: 0 });
            }
            var matchupUrl = hg.getMatchupUrl();
            var matchupInfo = hg.getMatchupInfo();
            var listUrlSplit = matchupUrl.split('?');
            var listParam = listUrlSplit[1].split('&');
            var listParamValue_1;
            listParam.forEach(function (value) {
                listParamValue_1 = value.split('=');
                if (listParamValue_1[0] === 'post_data') {
                    originPostData = listParamValue_1[1];
                    urlParam[listParamValue_1[0]] = JSON.parse(decodeURIComponent(listParamValue_1[1]));
                }
                else {
                    urlParam[listParamValue_1[0]] = decodeURIComponent(listParamValue_1[1]);
                }
            });
            gea.info('matchupUrl:', matchupUrl);
            gea.info('matchupInfo:', JSON.stringify(matchupInfo));
            hogame.config['_url'] = listUrlSplit[0].split("/" + matchupInfo.gameid)[0];
            hg.login({
                success: function (res) {
                    connectServer(net, originPostData, res.code);
                },
                fail: function () {
                    gea.error('hg.login 获取code失败，退出游戏');
                    hg.exitMiniProgram({});
                },
            });
        }
        hogame.config._roomId = urlParam.post_data.roomid;
        if (urlParam.post_data.player.opt) {
            urlParam.post_data.player.opt = JSON.parse(urlParam.post_data.player.opt);
        }
        else {
            urlParam.post_data.player.opt = {};
        }
        return urlParam.post_data;
    }
    hogame.pkLogin = pkLogin;
    function reqHagoCode(url, callback) {
        gea.info("\u5F00\u59CB\u8BF7\u6C42code: " + url);
        var xhr = new XMLHttpRequest();
        xhr.open('get', url);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status >= 200 && xhr.status <= 299) {
                    var result = void 0;
                    try {
                        result = JSON.parse(xhr.responseText);
                        if (result.errcode !== 0) {
                            gea.warn("reqHagoCode result:" + xhr.responseText);
                            gea.error("code\u8BF7\u6C42\u7ED3\u679C\u6709\u8BEF,\u8BF7\u5C06'uid'\u6539\u77ED\u4E00\u70B9\uFF0C\u4E14\u4FDD\u8BC1'uid'\u8F6C\u6210\u6570\u5B57\u540E\u4E0D\u4E3A'0'");
                            return;
                        }
                    }
                    catch (e) {
                        gea.error("code\u8BF7\u6C42\u7ED3\u679C\u53D1\u751F\u9519\u8BEF: " + xhr.responseText);
                        return;
                    }
                    callback(result.code);
                }
            }
        };
        xhr.onerror = function () {
            gea.error("code\u8BF7\u6C42\u53D1\u751F\u9519\u8BEF,\u8BF7\u5237\u65B0\u91CD\u8BD5");
        };
        xhr.ontimeout = function () {
            gea.error("code\u8BF7\u6C42\u8D85\u65F6,\u5F00\u59CB\u91CD\u8BD5");
            reqHagoCode(url, callback);
        };
        xhr.send();
    }
    function connectServer(net, originPostData, code) {
        net.connect(hogame.config.url, {
            path: '/' + urlParam.post_data.gameid + '/' + urlParam.post_data.roomid + '/',
            query: {
                post_data: originPostData,
                timestamp: urlParam.timestamp,
                nonstr: urlParam.nonstr,
                sign: urlParam.sign,
                code: code,
                pingInterval: net.heartBeat.interval() / 1000,
                pingTimeout: net.heartBeat.timeoutCountLimit() * (net.heartBeat.interval() / 1000),
            },
        });
    }
})(hogame || (hogame = {}));
var hogame;
(function (hogame) {
    var utils;
    (function (utils) {
        var FriendInfoManager = (function () {
            function FriendInfoManager() {
                this._dicFriendInfo = {};
                this._listAllCallbackSuccess = [];
                this._dicAllCallbackSuccessRecord = {};
                this._listAllCallbackFailed = [];
                this._dicAllCallbackFailedRecord = {};
                this._asyncTime = 1000;
                this._retryCount = 3;
                this._retryDelay = 1000;
                this._gettingCount = 0;
            }
            FriendInfoManager.prototype.default = function () {
                var _this = this;
                var friendInfos = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    friendInfos[_i] = arguments[_i];
                }
                if (!window['hg']) {
                    this._listFriendInfo = [];
                    friendInfos.forEach(function (info, index) {
                        _this._listFriendInfo[index] = _this.defaultInfo(info);
                        _this._dicFriendInfo[info.uid] = info;
                    });
                }
                return this;
            };
            FriendInfoManager.prototype.retryCount = function (value) {
                this._retryCount = Math.max(0, value);
                return this;
            };
            FriendInfoManager.prototype.retryDelay = function (value) {
                this._retryDelay = Math.max(0, value);
                return this;
            };
            FriendInfoManager.prototype.asyncTime = function (value) {
                this._asyncTime = Math.max(500, value);
                return this;
            };
            FriendInfoManager.prototype.get = function (callbackSuccess, callbackScopeWhileSuccess, callbackFailed, callbackScopeWhileFailed) {
                var _this = this;
                if (window['hg']) {
                    if (this._listFriendInfo != null) {
                        if (callbackSuccess) {
                            callbackSuccess.call.apply(callbackSuccess, __spread([callbackScopeWhileSuccess], this._listFriendInfo));
                        }
                    }
                    else {
                        var uuid = void 0;
                        if (callbackSuccess) {
                            uuid = gea.uuid(callbackSuccess, callbackScopeWhileSuccess);
                            if (!this._dicAllCallbackSuccessRecord[uuid]) {
                                this._dicAllCallbackSuccessRecord[uuid] = true;
                                this._listAllCallbackSuccess.push(gea.callback(callbackSuccess, callbackScopeWhileSuccess).callbackLimite(1));
                            }
                        }
                        if (callbackFailed) {
                            uuid = gea.uuid(callbackFailed, callbackScopeWhileFailed);
                            if (!this._dicAllCallbackFailedRecord[uuid]) {
                                this._dicAllCallbackFailedRecord[uuid] = true;
                                this._listAllCallbackFailed.push(gea.callback(callbackFailed, callbackScopeWhileFailed).callbackLimite(1));
                            }
                        }
                        this.getFromApp();
                    }
                }
                else {
                    if (this._asyncTime > 0) {
                        gea.timer.once(this._asyncTime, function () {
                            _this._asyncTime = 0;
                            callbackSuccess.call.apply(callbackSuccess, __spread([callbackScopeWhileSuccess], _this._listFriendInfo));
                        }, this);
                    }
                    else {
                        callbackSuccess.call.apply(callbackSuccess, __spread([callbackScopeWhileSuccess], this._listFriendInfo));
                    }
                }
            };
            FriendInfoManager.prototype.getByUid = function (uid, callbackScuccess, callbackScopeWhileSuccess, callbackFailed, callbackScopeWhileFailed) {
                var _this = this;
                this.get(function () {
                    callbackScuccess.call(callbackScopeWhileSuccess, _this._dicFriendInfo[uid]);
                }, this, callbackFailed, callbackScopeWhileFailed);
            };
            FriendInfoManager.prototype.getFromApp = function () {
                if (this._gettingCount === 0) {
                    this.retryGetFromApp();
                }
            };
            FriendInfoManager.prototype.retryGetFromApp = function (friendError) {
                var _this = this;
                if (this._gettingCount <= this._retryCount) {
                    this._gettingCount++;
                    hg.getFriendInfos({
                        uids: Number(hogame.config.uid),
                        success: function (res) {
                            _this._listFriendInfo = [];
                            _this._gettingCount = 0;
                            res.forEach(function (value) {
                                _this._dicFriendInfo[value.uid] = value;
                                _this._listFriendInfo.push(value);
                            });
                            _this._listAllCallbackSuccess.forEach(function (value) {
                                value.excute.apply(value, __spread(_this._listFriendInfo));
                            });
                            _this.clearDics(_this._dicAllCallbackSuccessRecord, _this._dicAllCallbackFailedRecord);
                            _this._listAllCallbackSuccess.length = _this._listAllCallbackFailed.length = 0;
                        },
                        fail: function (res) {
                            if (_this._retryDelay > 0) {
                                gea.timer.once(_this._retryDelay, _this.retryGetFromApp, _this, res);
                            }
                            else {
                                _this.retryGetFromApp(res);
                            }
                        },
                    });
                }
                else {
                    gea.warn("hg.getFriendInfos failed after " + this._gettingCount + " times, failedCode: " + friendError.errCode + ".");
                    this._gettingCount = 0;
                    this._listAllCallbackFailed.forEach(function (value) {
                        value.excute(friendError);
                    });
                    this._listAllCallbackFailed.length = this._listAllCallbackSuccess.length = 0;
                }
            };
            FriendInfoManager.prototype.clearDics = function () {
                var dics = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    dics[_i] = arguments[_i];
                }
                dics.forEach(function (dic) {
                    Object.keys(dic).forEach(function (uuid) {
                        delete dic[uuid];
                    });
                });
            };
            FriendInfoManager.prototype.defaultInfo = function (_a) {
                var uid = _a.uid, _b = _a.nick, nick = _b === void 0 ? uid : _b, _c = _a.avatar, avatar = _c === void 0 ? 'https://o-hk.ihago.net/ikxd/6727a572442261d5daa8ca3e012b441f/guest_1.png' : _c, _d = _a.type, type = _d === void 0 ? hago.enums.friendType.hago : _d, _e = _a.dist, dist = _e === void 0 ? 0 : _e, _f = _a.onlineStatus, onlineStatus = _f === void 0 ? Math.random() > 0.5 ? hago.enums.onlineStatus.offLine : hago.enums.onlineStatus.onLine : _f, _g = _a.sex, sex = _g === void 0 ? Math.random() > 0.5 ? hago.enums.sex.female : hago.enums.sex.male : _g, _h = _a.alias, alias = _h === void 0 ? hago.enums.constellation.aquarius : _h;
                return {
                    uid: uid,
                    nick: nick,
                    avatar: avatar,
                    type: type,
                    dist: dist,
                    onlineStatus: onlineStatus,
                    sex: sex,
                    alias: alias,
                };
            };
            return FriendInfoManager;
        }());
        utils.friendInfo = new FriendInfoManager();
    })(utils = hogame.utils || (hogame.utils = {}));
})(hogame || (hogame = {}));

//# sourceMappingURL=gea-hogame-hg-creator.js.map
