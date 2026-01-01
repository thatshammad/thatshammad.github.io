var nd = e => {
    throw TypeError(e)
}
;
var za = (e, t, n) => t.has(e) || nd("Cannot " + n);
var N = (e, t, n) => (za(e, t, "read from private field"),
n ? n.call(e) : t.get(e))
  , Z = (e, t, n) => t.has(e) ? nd("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n)
  , W = (e, t, n, r) => (za(e, t, "write to private field"),
r ? r.call(e, n) : t.set(e, n),
n)
  , Pe = (e, t, n) => (za(e, t, "access private method"),
n);
var Ri = (e, t, n, r) => ({
    set _(o) {
        W(e, t, o, n)
    },
    get _() {
        return N(e, t, r)
    }
});
function c0(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const i = Object.getOwnPropertyDescriptor(r, o);
                    i && Object.defineProperty(e, o, i.get ? i : {
                        enumerable: !0,
                        get: () => r[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        r(o);
    new MutationObserver(o => {
        for (const i of o)
            if (i.type === "childList")
                for (const s of i.addedNodes)
                    s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(o) {
        const i = {};
        return o.integrity && (i.integrity = o.integrity),
        o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
        i
    }
    function r(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const i = n(o);
        fetch(o.href, i)
    }
}
)();
function vp(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var yp = {
    exports: {}
}
  , Zs = {}
  , xp = {
    exports: {}
}
  , G = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vi = Symbol.for("react.element")
  , u0 = Symbol.for("react.portal")
  , d0 = Symbol.for("react.fragment")
  , f0 = Symbol.for("react.strict_mode")
  , p0 = Symbol.for("react.profiler")
  , m0 = Symbol.for("react.provider")
  , h0 = Symbol.for("react.context")
  , g0 = Symbol.for("react.forward_ref")
  , v0 = Symbol.for("react.suspense")
  , y0 = Symbol.for("react.memo")
  , x0 = Symbol.for("react.lazy")
  , rd = Symbol.iterator;
function w0(e) {
    return e === null || typeof e != "object" ? null : (e = rd && e[rd] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var wp = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Sp = Object.assign
  , bp = {};
function po(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = bp,
    this.updater = n || wp
}
po.prototype.isReactComponent = {};
po.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
po.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Cp() {}
Cp.prototype = po.prototype;
function Ac(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = bp,
    this.updater = n || wp
}
var Lc = Ac.prototype = new Cp;
Lc.constructor = Ac;
Sp(Lc, po.prototype);
Lc.isPureReactComponent = !0;
var od = Array.isArray
  , Ep = Object.prototype.hasOwnProperty
  , zc = {
    current: null
}
  , kp = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Np(e, t, n) {
    var r, o = {}, i = null, s = null;
    if (t != null)
        for (r in t.ref !== void 0 && (s = t.ref),
        t.key !== void 0 && (i = "" + t.key),
        t)
            Ep.call(t, r) && !kp.hasOwnProperty(r) && (o[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1)
        o.children = n;
    else if (1 < a) {
        for (var l = Array(a), u = 0; u < a; u++)
            l[u] = arguments[u + 2];
        o.children = l
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps,
        a)
            o[r] === void 0 && (o[r] = a[r]);
    return {
        $$typeof: vi,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: zc.current
    }
}
function S0(e, t) {
    return {
        $$typeof: vi,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function Oc(e) {
    return typeof e == "object" && e !== null && e.$$typeof === vi
}
function b0(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var id = /\/+/g;
function Oa(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? b0("" + e.key) : t.toString(36)
}
function ns(e, t, n, r, o) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var s = !1;
    if (e === null)
        s = !0;
    else
        switch (i) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case vi:
            case u0:
                s = !0
            }
        }
    if (s)
        return s = e,
        o = o(s),
        e = r === "" ? "." + Oa(s, 0) : r,
        od(o) ? (n = "",
        e != null && (n = e.replace(id, "$&/") + "/"),
        ns(o, t, n, "", function(u) {
            return u
        })) : o != null && (Oc(o) && (o = S0(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(id, "$&/") + "/") + e)),
        t.push(o)),
        1;
    if (s = 0,
    r = r === "" ? "." : r + ":",
    od(e))
        for (var a = 0; a < e.length; a++) {
            i = e[a];
            var l = r + Oa(i, a);
            s += ns(i, t, n, l, o)
        }
    else if (l = w0(e),
    typeof l == "function")
        for (e = l.call(e),
        a = 0; !(i = e.next()).done; )
            i = i.value,
            l = r + Oa(i, a++),
            s += ns(i, t, n, l, o);
    else if (i === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}
function Ti(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , o = 0;
    return ns(e, r, "", "", function(i) {
        return t.call(n, i, o++)
    }),
    r
}
function C0(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var Fe = {
    current: null
}
  , rs = {
    transition: null
}
  , E0 = {
    ReactCurrentDispatcher: Fe,
    ReactCurrentBatchConfig: rs,
    ReactCurrentOwner: zc
};
function Pp() {
    throw Error("act(...) is not supported in production builds of React.")
}
G.Children = {
    map: Ti,
    forEach: function(e, t, n) {
        Ti(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return Ti(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return Ti(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Oc(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
G.Component = po;
G.Fragment = d0;
G.Profiler = p0;
G.PureComponent = Ac;
G.StrictMode = f0;
G.Suspense = v0;
G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = E0;
G.act = Pp;
G.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Sp({}, e.props)
      , o = e.key
      , i = e.ref
      , s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref,
        s = zc.current),
        t.key !== void 0 && (o = "" + t.key),
        e.type && e.type.defaultProps)
            var a = e.type.defaultProps;
        for (l in t)
            Ep.call(t, l) && !kp.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1)
        r.children = n;
    else if (1 < l) {
        a = Array(l);
        for (var u = 0; u < l; u++)
            a[u] = arguments[u + 2];
        r.children = a
    }
    return {
        $$typeof: vi,
        type: e.type,
        key: o,
        ref: i,
        props: r,
        _owner: s
    }
}
;
G.createContext = function(e) {
    return e = {
        $$typeof: h0,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: m0,
        _context: e
    },
    e.Consumer = e
}
;
G.createElement = Np;
G.createFactory = function(e) {
    var t = Np.bind(null, e);
    return t.type = e,
    t
}
;
G.createRef = function() {
    return {
        current: null
    }
}
;
G.forwardRef = function(e) {
    return {
        $$typeof: g0,
        render: e
    }
}
;
G.isValidElement = Oc;
G.lazy = function(e) {
    return {
        $$typeof: x0,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: C0
    }
}
;
G.memo = function(e, t) {
    return {
        $$typeof: y0,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
G.startTransition = function(e) {
    var t = rs.transition;
    rs.transition = {};
    try {
        e()
    } finally {
        rs.transition = t
    }
}
;
G.unstable_act = Pp;
G.useCallback = function(e, t) {
    return Fe.current.useCallback(e, t)
}
;
G.useContext = function(e) {
    return Fe.current.useContext(e)
}
;
G.useDebugValue = function() {}
;
G.useDeferredValue = function(e) {
    return Fe.current.useDeferredValue(e)
}
;
G.useEffect = function(e, t) {
    return Fe.current.useEffect(e, t)
}
;
G.useId = function() {
    return Fe.current.useId()
}
;
G.useImperativeHandle = function(e, t, n) {
    return Fe.current.useImperativeHandle(e, t, n)
}
;
G.useInsertionEffect = function(e, t) {
    return Fe.current.useInsertionEffect(e, t)
}
;
G.useLayoutEffect = function(e, t) {
    return Fe.current.useLayoutEffect(e, t)
}
;
G.useMemo = function(e, t) {
    return Fe.current.useMemo(e, t)
}
;
G.useReducer = function(e, t, n) {
    return Fe.current.useReducer(e, t, n)
}
;
G.useRef = function(e) {
    return Fe.current.useRef(e)
}
;
G.useState = function(e) {
    return Fe.current.useState(e)
}
;
G.useSyncExternalStore = function(e, t, n) {
    return Fe.current.useSyncExternalStore(e, t, n)
}
;
G.useTransition = function() {
    return Fe.current.useTransition()
}
;
G.version = "18.3.1";
xp.exports = G;
var y = xp.exports;
const A = vp(y)
  , Dc = c0({
    __proto__: null,
    default: A
}, [y]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var k0 = y
  , N0 = Symbol.for("react.element")
  , P0 = Symbol.for("react.fragment")
  , j0 = Object.prototype.hasOwnProperty
  , R0 = k0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , T0 = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function jp(e, t, n) {
    var r, o = {}, i = null, s = null;
    n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
    for (r in t)
        j0.call(t, r) && !T0.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: N0,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: R0.current
    }
}
Zs.Fragment = P0;
Zs.jsx = jp;
Zs.jsxs = jp;
yp.exports = Zs;
var c = yp.exports
  , Rp = {
    exports: {}
}
  , et = {}
  , Tp = {
    exports: {}
}
  , Ap = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(P, j) {
        var D = P.length;
        P.push(j);
        e: for (; 0 < D; ) {
            var V = D - 1 >>> 1
              , I = P[V];
            if (0 < o(I, j))
                P[V] = j,
                P[D] = I,
                D = V;
            else
                break e
        }
    }
    function n(P) {
        return P.length === 0 ? null : P[0]
    }
    function r(P) {
        if (P.length === 0)
            return null;
        var j = P[0]
          , D = P.pop();
        if (D !== j) {
            P[0] = D;
            e: for (var V = 0, I = P.length, Q = I >>> 1; V < Q; ) {
                var X = 2 * (V + 1) - 1
                  , he = P[X]
                  , Ne = X + 1
                  , J = P[Ne];
                if (0 > o(he, D))
                    Ne < I && 0 > o(J, he) ? (P[V] = J,
                    P[Ne] = D,
                    V = Ne) : (P[V] = he,
                    P[X] = D,
                    V = X);
                else if (Ne < I && 0 > o(J, D))
                    P[V] = J,
                    P[Ne] = D,
                    V = Ne;
                else
                    break e
            }
        }
        return j
    }
    function o(P, j) {
        var D = P.sortIndex - j.sortIndex;
        return D !== 0 ? D : P.id - j.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var s = Date
          , a = s.now();
        e.unstable_now = function() {
            return s.now() - a
        }
    }
    var l = []
      , u = []
      , d = 1
      , f = null
      , g = 3
      , p = !1
      , S = !1
      , m = !1
      , w = typeof setTimeout == "function" ? setTimeout : null
      , v = typeof clearTimeout == "function" ? clearTimeout : null
      , h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function x(P) {
        for (var j = n(u); j !== null; ) {
            if (j.callback === null)
                r(u);
            else if (j.startTime <= P)
                r(u),
                j.sortIndex = j.expirationTime,
                t(l, j);
            else
                break;
            j = n(u)
        }
    }
    function b(P) {
        if (m = !1,
        x(P),
        !S)
            if (n(l) !== null)
                S = !0,
                $(C);
            else {
                var j = n(u);
                j !== null && U(b, j.startTime - P)
            }
    }
    function C(P, j) {
        S = !1,
        m && (m = !1,
        v(R),
        R = -1),
        p = !0;
        var D = g;
        try {
            for (x(j),
            f = n(l); f !== null && (!(f.expirationTime > j) || P && !F()); ) {
                var V = f.callback;
                if (typeof V == "function") {
                    f.callback = null,
                    g = f.priorityLevel;
                    var I = V(f.expirationTime <= j);
                    j = e.unstable_now(),
                    typeof I == "function" ? f.callback = I : f === n(l) && r(l),
                    x(j)
                } else
                    r(l);
                f = n(l)
            }
            if (f !== null)
                var Q = !0;
            else {
                var X = n(u);
                X !== null && U(b, X.startTime - j),
                Q = !1
            }
            return Q
        } finally {
            f = null,
            g = D,
            p = !1
        }
    }
    var E = !1
      , k = null
      , R = -1
      , z = 5
      , L = -1;
    function F() {
        return !(e.unstable_now() - L < z)
    }
    function _() {
        if (k !== null) {
            var P = e.unstable_now();
            L = P;
            var j = !0;
            try {
                j = k(!0, P)
            } finally {
                j ? K() : (E = !1,
                k = null)
            }
        } else
            E = !1
    }
    var K;
    if (typeof h == "function")
        K = function() {
            h(_)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var O = new MessageChannel
          , Y = O.port2;
        O.port1.onmessage = _,
        K = function() {
            Y.postMessage(null)
        }
    } else
        K = function() {
            w(_, 0)
        }
        ;
    function $(P) {
        k = P,
        E || (E = !0,
        K())
    }
    function U(P, j) {
        R = w(function() {
            P(e.unstable_now())
        }, j)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(P) {
        P.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        S || p || (S = !0,
        $(C))
    }
    ,
    e.unstable_forceFrameRate = function(P) {
        0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : z = 0 < P ? Math.floor(1e3 / P) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return g
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(l)
    }
    ,
    e.unstable_next = function(P) {
        switch (g) {
        case 1:
        case 2:
        case 3:
            var j = 3;
            break;
        default:
            j = g
        }
        var D = g;
        g = j;
        try {
            return P()
        } finally {
            g = D
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(P, j) {
        switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            P = 3
        }
        var D = g;
        g = P;
        try {
            return j()
        } finally {
            g = D
        }
    }
    ,
    e.unstable_scheduleCallback = function(P, j, D) {
        var V = e.unstable_now();
        switch (typeof D == "object" && D !== null ? (D = D.delay,
        D = typeof D == "number" && 0 < D ? V + D : V) : D = V,
        P) {
        case 1:
            var I = -1;
            break;
        case 2:
            I = 250;
            break;
        case 5:
            I = 1073741823;
            break;
        case 4:
            I = 1e4;
            break;
        default:
            I = 5e3
        }
        return I = D + I,
        P = {
            id: d++,
            callback: j,
            priorityLevel: P,
            startTime: D,
            expirationTime: I,
            sortIndex: -1
        },
        D > V ? (P.sortIndex = D,
        t(u, P),
        n(l) === null && P === n(u) && (m ? (v(R),
        R = -1) : m = !0,
        U(b, D - V))) : (P.sortIndex = I,
        t(l, P),
        S || p || (S = !0,
        $(C))),
        P
    }
    ,
    e.unstable_shouldYield = F,
    e.unstable_wrapCallback = function(P) {
        var j = g;
        return function() {
            var D = g;
            g = j;
            try {
                return P.apply(this, arguments)
            } finally {
                g = D
            }
        }
    }
}
)(Ap);
Tp.exports = Ap;
var A0 = Tp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var L0 = y
  , Je = A0;
function T(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Lp = new Set
  , Qo = {};
function hr(e, t) {
    ro(e, t),
    ro(e + "Capture", t)
}
function ro(e, t) {
    for (Qo[e] = t,
    e = 0; e < t.length; e++)
        Lp.add(t[e])
}
var qt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , bl = Object.prototype.hasOwnProperty
  , z0 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , sd = {}
  , ad = {};
function O0(e) {
    return bl.call(ad, e) ? !0 : bl.call(sd, e) ? !1 : z0.test(e) ? ad[e] = !0 : (sd[e] = !0,
    !1)
}
function D0(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function M0(e, t, n, r) {
    if (t === null || typeof t > "u" || D0(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function $e(e, t, n, r, o, i, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = o,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = i,
    this.removeEmptyString = s
}
var ke = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    ke[e] = new $e(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    ke[t] = new $e(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    ke[e] = new $e(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    ke[e] = new $e(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    ke[e] = new $e(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    ke[e] = new $e(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    ke[e] = new $e(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    ke[e] = new $e(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    ke[e] = new $e(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var Mc = /[\-:]([a-z])/g;
function _c(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Mc, _c);
    ke[t] = new $e(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Mc, _c);
    ke[t] = new $e(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Mc, _c);
    ke[t] = new $e(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    ke[e] = new $e(e,1,!1,e.toLowerCase(),null,!1,!1)
});
ke.xlinkHref = new $e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    ke[e] = new $e(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function Ic(e, t, n, r) {
    var o = ke.hasOwnProperty(t) ? ke[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (M0(t, n, o, r) && (n = null),
    r || o === null ? O0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName,
    r = o.attributeNamespace,
    n === null ? e.removeAttribute(t) : (o = o.type,
    n = o === 3 || o === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var on = L0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , Ai = Symbol.for("react.element")
  , Pr = Symbol.for("react.portal")
  , jr = Symbol.for("react.fragment")
  , Fc = Symbol.for("react.strict_mode")
  , Cl = Symbol.for("react.profiler")
  , zp = Symbol.for("react.provider")
  , Op = Symbol.for("react.context")
  , $c = Symbol.for("react.forward_ref")
  , El = Symbol.for("react.suspense")
  , kl = Symbol.for("react.suspense_list")
  , Bc = Symbol.for("react.memo")
  , yn = Symbol.for("react.lazy")
  , Dp = Symbol.for("react.offscreen")
  , ld = Symbol.iterator;
function Co(e) {
    return e === null || typeof e != "object" ? null : (e = ld && e[ld] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var de = Object.assign, Da;
function zo(e) {
    if (Da === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Da = t && t[1] || ""
        }
    return `
` + Da + e
}
var Ma = !1;
function _a(e, t) {
    if (!e || Ma)
        return "";
    Ma = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var o = u.stack.split(`
`), i = r.stack.split(`
`), s = o.length - 1, a = i.length - 1; 1 <= s && 0 <= a && o[s] !== i[a]; )
                a--;
            for (; 1 <= s && 0 <= a; s--,
            a--)
                if (o[s] !== i[a]) {
                    if (s !== 1 || a !== 1)
                        do
                            if (s--,
                            a--,
                            0 > a || o[s] !== i[a]) {
                                var l = `
` + o[s].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)),
                                l
                            }
                        while (1 <= s && 0 <= a);
                    break
                }
        }
    } finally {
        Ma = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? zo(e) : ""
}
function _0(e) {
    switch (e.tag) {
    case 5:
        return zo(e.type);
    case 16:
        return zo("Lazy");
    case 13:
        return zo("Suspense");
    case 19:
        return zo("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = _a(e.type, !1),
        e;
    case 11:
        return e = _a(e.type.render, !1),
        e;
    case 1:
        return e = _a(e.type, !0),
        e;
    default:
        return ""
    }
}
function Nl(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case jr:
        return "Fragment";
    case Pr:
        return "Portal";
    case Cl:
        return "Profiler";
    case Fc:
        return "StrictMode";
    case El:
        return "Suspense";
    case kl:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Op:
            return (e.displayName || "Context") + ".Consumer";
        case zp:
            return (e._context.displayName || "Context") + ".Provider";
        case $c:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case Bc:
            return t = e.displayName || null,
            t !== null ? t : Nl(e.type) || "Memo";
        case yn:
            t = e._payload,
            e = e._init;
            try {
                return Nl(e(t))
            } catch {}
        }
    return null
}
function I0(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return Nl(t);
    case 8:
        return t === Fc ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function In(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function Mp(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function F0(e) {
    var t = Mp(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get
          , i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return o.call(this)
            },
            set: function(s) {
                r = "" + s,
                i.call(this, s)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(s) {
                r = "" + s
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function Li(e) {
    e._valueTracker || (e._valueTracker = F0(e))
}
function _p(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = Mp(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function ws(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function Pl(e, t) {
    var n = t.checked;
    return de({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function cd(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = In(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function Ip(e, t) {
    t = t.checked,
    t != null && Ic(e, "checked", t, !1)
}
function jl(e, t) {
    Ip(e, t);
    var n = In(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Rl(e, t.type, n) : t.hasOwnProperty("defaultValue") && Rl(e, t.type, In(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function ud(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function Rl(e, t, n) {
    (t !== "number" || ws(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Oo = Array.isArray;
function Fr(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var o = 0; o < n.length; o++)
            t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++)
            o = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== o && (e[n].selected = o),
            o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + In(n),
        t = null,
        o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                e[o].selected = !0,
                r && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}
function Tl(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(T(91));
    return de({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function dd(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(T(92));
            if (Oo(n)) {
                if (1 < n.length)
                    throw Error(T(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: In(n)
    }
}
function Fp(e, t) {
    var n = In(t.value)
      , r = In(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function fd(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function $p(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function Al(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? $p(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var zi, Bp = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, o)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (zi = zi || document.createElement("div"),
        zi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = zi.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Go(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var _o = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , $0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(_o).forEach(function(e) {
    $0.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        _o[t] = _o[e]
    })
});
function Wp(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || _o.hasOwnProperty(e) && _o[e] ? ("" + t).trim() : t + "px"
}
function Up(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , o = Wp(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, o) : e[n] = o
        }
}
var B0 = de({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function Ll(e, t) {
    if (t) {
        if (B0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(T(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(T(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(T(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(T(62))
    }
}
function zl(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var Ol = null;
function Wc(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var Dl = null
  , $r = null
  , Br = null;
function pd(e) {
    if (e = wi(e)) {
        if (typeof Dl != "function")
            throw Error(T(280));
        var t = e.stateNode;
        t && (t = ra(t),
        Dl(e.stateNode, e.type, t))
    }
}
function Vp(e) {
    $r ? Br ? Br.push(e) : Br = [e] : $r = e
}
function Hp() {
    if ($r) {
        var e = $r
          , t = Br;
        if (Br = $r = null,
        pd(e),
        t)
            for (e = 0; e < t.length; e++)
                pd(t[e])
    }
}
function Kp(e, t) {
    return e(t)
}
function Qp() {}
var Ia = !1;
function Gp(e, t, n) {
    if (Ia)
        return e(t, n);
    Ia = !0;
    try {
        return Kp(e, t, n)
    } finally {
        Ia = !1,
        ($r !== null || Br !== null) && (Qp(),
        Hp())
    }
}
function Yo(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = ra(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(T(231, t, typeof n));
    return n
}
var Ml = !1;
if (qt)
    try {
        var Eo = {};
        Object.defineProperty(Eo, "passive", {
            get: function() {
                Ml = !0
            }
        }),
        window.addEventListener("test", Eo, Eo),
        window.removeEventListener("test", Eo, Eo)
    } catch {
        Ml = !1
    }
function W0(e, t, n, r, o, i, s, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (d) {
        this.onError(d)
    }
}
var Io = !1
  , Ss = null
  , bs = !1
  , _l = null
  , U0 = {
    onError: function(e) {
        Io = !0,
        Ss = e
    }
};
function V0(e, t, n, r, o, i, s, a, l) {
    Io = !1,
    Ss = null,
    W0.apply(U0, arguments)
}
function H0(e, t, n, r, o, i, s, a, l) {
    if (V0.apply(this, arguments),
    Io) {
        if (Io) {
            var u = Ss;
            Io = !1,
            Ss = null
        } else
            throw Error(T(198));
        bs || (bs = !0,
        _l = u)
    }
}
function gr(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function Yp(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function md(e) {
    if (gr(e) !== e)
        throw Error(T(188))
}
function K0(e) {
    var t = e.alternate;
    if (!t) {
        if (t = gr(e),
        t === null)
            throw Error(T(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var o = n.return;
        if (o === null)
            break;
        var i = o.alternate;
        if (i === null) {
            if (r = o.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (o.child === i.child) {
            for (i = o.child; i; ) {
                if (i === n)
                    return md(o),
                    e;
                if (i === r)
                    return md(o),
                    t;
                i = i.sibling
            }
            throw Error(T(188))
        }
        if (n.return !== r.return)
            n = o,
            r = i;
        else {
            for (var s = !1, a = o.child; a; ) {
                if (a === n) {
                    s = !0,
                    n = o,
                    r = i;
                    break
                }
                if (a === r) {
                    s = !0,
                    r = o,
                    n = i;
                    break
                }
                a = a.sibling
            }
            if (!s) {
                for (a = i.child; a; ) {
                    if (a === n) {
                        s = !0,
                        n = i,
                        r = o;
                        break
                    }
                    if (a === r) {
                        s = !0,
                        r = i,
                        n = o;
                        break
                    }
                    a = a.sibling
                }
                if (!s)
                    throw Error(T(189))
            }
        }
        if (n.alternate !== r)
            throw Error(T(190))
    }
    if (n.tag !== 3)
        throw Error(T(188));
    return n.stateNode.current === n ? e : t
}
function Xp(e) {
    return e = K0(e),
    e !== null ? qp(e) : null
}
function qp(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = qp(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var Zp = Je.unstable_scheduleCallback
  , hd = Je.unstable_cancelCallback
  , Q0 = Je.unstable_shouldYield
  , G0 = Je.unstable_requestPaint
  , me = Je.unstable_now
  , Y0 = Je.unstable_getCurrentPriorityLevel
  , Uc = Je.unstable_ImmediatePriority
  , Jp = Je.unstable_UserBlockingPriority
  , Cs = Je.unstable_NormalPriority
  , X0 = Je.unstable_LowPriority
  , em = Je.unstable_IdlePriority
  , Js = null
  , Mt = null;
function q0(e) {
    if (Mt && typeof Mt.onCommitFiberRoot == "function")
        try {
            Mt.onCommitFiberRoot(Js, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var bt = Math.clz32 ? Math.clz32 : ey
  , Z0 = Math.log
  , J0 = Math.LN2;
function ey(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (Z0(e) / J0 | 0) | 0
}
var Oi = 64
  , Di = 4194304;
function Do(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function Es(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , o = e.suspendedLanes
      , i = e.pingedLanes
      , s = n & 268435455;
    if (s !== 0) {
        var a = s & ~o;
        a !== 0 ? r = Do(a) : (i &= s,
        i !== 0 && (r = Do(i)))
    } else
        s = n & ~o,
        s !== 0 ? r = Do(s) : i !== 0 && (r = Do(i));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & o) && (o = r & -r,
    i = t & -t,
    o >= i || o === 16 && (i & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - bt(t),
            o = 1 << n,
            r |= e[n],
            t &= ~o;
    return r
}
function ty(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function ny(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
        var s = 31 - bt(i)
          , a = 1 << s
          , l = o[s];
        l === -1 ? (!(a & n) || a & r) && (o[s] = ty(a, t)) : l <= t && (e.expiredLanes |= a),
        i &= ~a
    }
}
function Il(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function tm() {
    var e = Oi;
    return Oi <<= 1,
    !(Oi & 4194240) && (Oi = 64),
    e
}
function Fa(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function yi(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - bt(t),
    e[t] = n
}
function ry(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var o = 31 - bt(n)
          , i = 1 << o;
        t[o] = 0,
        r[o] = -1,
        e[o] = -1,
        n &= ~i
    }
}
function Vc(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - bt(n)
          , o = 1 << r;
        o & t | e[r] & t && (e[r] |= t),
        n &= ~o
    }
}
var ee = 0;
function nm(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var rm, Hc, om, im, sm, Fl = !1, Mi = [], Tn = null, An = null, Ln = null, Xo = new Map, qo = new Map, wn = [], oy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function gd(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        Tn = null;
        break;
    case "dragenter":
    case "dragleave":
        An = null;
        break;
    case "mouseover":
    case "mouseout":
        Ln = null;
        break;
    case "pointerover":
    case "pointerout":
        Xo.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        qo.delete(t.pointerId)
    }
}
function ko(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o]
    },
    t !== null && (t = wi(t),
    t !== null && Hc(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    o !== null && t.indexOf(o) === -1 && t.push(o),
    e)
}
function iy(e, t, n, r, o) {
    switch (t) {
    case "focusin":
        return Tn = ko(Tn, e, t, n, r, o),
        !0;
    case "dragenter":
        return An = ko(An, e, t, n, r, o),
        !0;
    case "mouseover":
        return Ln = ko(Ln, e, t, n, r, o),
        !0;
    case "pointerover":
        var i = o.pointerId;
        return Xo.set(i, ko(Xo.get(i) || null, e, t, n, r, o)),
        !0;
    case "gotpointercapture":
        return i = o.pointerId,
        qo.set(i, ko(qo.get(i) || null, e, t, n, r, o)),
        !0
    }
    return !1
}
function am(e) {
    var t = Xn(e.target);
    if (t !== null) {
        var n = gr(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = Yp(n),
                t !== null) {
                    e.blockedOn = t,
                    sm(e.priority, function() {
                        om(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function os(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = $l(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            Ol = r,
            n.target.dispatchEvent(r),
            Ol = null
        } else
            return t = wi(n),
            t !== null && Hc(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function vd(e, t, n) {
    os(e) && n.delete(t)
}
function sy() {
    Fl = !1,
    Tn !== null && os(Tn) && (Tn = null),
    An !== null && os(An) && (An = null),
    Ln !== null && os(Ln) && (Ln = null),
    Xo.forEach(vd),
    qo.forEach(vd)
}
function No(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    Fl || (Fl = !0,
    Je.unstable_scheduleCallback(Je.unstable_NormalPriority, sy)))
}
function Zo(e) {
    function t(o) {
        return No(o, e)
    }
    if (0 < Mi.length) {
        No(Mi[0], e);
        for (var n = 1; n < Mi.length; n++) {
            var r = Mi[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Tn !== null && No(Tn, e),
    An !== null && No(An, e),
    Ln !== null && No(Ln, e),
    Xo.forEach(t),
    qo.forEach(t),
    n = 0; n < wn.length; n++)
        r = wn[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < wn.length && (n = wn[0],
    n.blockedOn === null); )
        am(n),
        n.blockedOn === null && wn.shift()
}
var Wr = on.ReactCurrentBatchConfig
  , ks = !0;
function ay(e, t, n, r) {
    var o = ee
      , i = Wr.transition;
    Wr.transition = null;
    try {
        ee = 1,
        Kc(e, t, n, r)
    } finally {
        ee = o,
        Wr.transition = i
    }
}
function ly(e, t, n, r) {
    var o = ee
      , i = Wr.transition;
    Wr.transition = null;
    try {
        ee = 4,
        Kc(e, t, n, r)
    } finally {
        ee = o,
        Wr.transition = i
    }
}
function Kc(e, t, n, r) {
    if (ks) {
        var o = $l(e, t, n, r);
        if (o === null)
            Ya(e, t, r, Ns, n),
            gd(e, r);
        else if (iy(o, e, t, n, r))
            r.stopPropagation();
        else if (gd(e, r),
        t & 4 && -1 < oy.indexOf(e)) {
            for (; o !== null; ) {
                var i = wi(o);
                if (i !== null && rm(i),
                i = $l(e, t, n, r),
                i === null && Ya(e, t, r, Ns, n),
                i === o)
                    break;
                o = i
            }
            o !== null && r.stopPropagation()
        } else
            Ya(e, t, r, null, n)
    }
}
var Ns = null;
function $l(e, t, n, r) {
    if (Ns = null,
    e = Wc(r),
    e = Xn(e),
    e !== null)
        if (t = gr(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = Yp(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return Ns = e,
    null
}
function lm(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (Y0()) {
        case Uc:
            return 1;
        case Jp:
            return 4;
        case Cs:
        case X0:
            return 16;
        case em:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var Pn = null
  , Qc = null
  , is = null;
function cm() {
    if (is)
        return is;
    var e, t = Qc, n = t.length, r, o = "value"in Pn ? Pn.value : Pn.textContent, i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++)
        ;
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === o[i - r]; r++)
        ;
    return is = o.slice(e, 1 < r ? 1 - r : void 0)
}
function ss(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function _i() {
    return !0
}
function yd() {
    return !1
}
function tt(e) {
    function t(n, r, o, i, s) {
        this._reactName = n,
        this._targetInst = o,
        this.type = r,
        this.nativeEvent = i,
        this.target = s,
        this.currentTarget = null;
        for (var a in e)
            e.hasOwnProperty(a) && (n = e[a],
            this[a] = n ? n(i) : i[a]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? _i : yd,
        this.isPropagationStopped = yd,
        this
    }
    return de(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = _i)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = _i)
        },
        persist: function() {},
        isPersistent: _i
    }),
    t
}
var mo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, Gc = tt(mo), xi = de({}, mo, {
    view: 0,
    detail: 0
}), cy = tt(xi), $a, Ba, Po, ea = de({}, xi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Yc,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== Po && (Po && e.type === "mousemove" ? ($a = e.screenX - Po.screenX,
        Ba = e.screenY - Po.screenY) : Ba = $a = 0,
        Po = e),
        $a)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : Ba
    }
}), xd = tt(ea), uy = de({}, ea, {
    dataTransfer: 0
}), dy = tt(uy), fy = de({}, xi, {
    relatedTarget: 0
}), Wa = tt(fy), py = de({}, mo, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), my = tt(py), hy = de({}, mo, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), gy = tt(hy), vy = de({}, mo, {
    data: 0
}), wd = tt(vy), yy = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, xy = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, wy = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function Sy(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = wy[e]) ? !!t[e] : !1
}
function Yc() {
    return Sy
}
var by = de({}, xi, {
    key: function(e) {
        if (e.key) {
            var t = yy[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = ss(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? xy[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Yc,
    charCode: function(e) {
        return e.type === "keypress" ? ss(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? ss(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , Cy = tt(by)
  , Ey = de({}, ea, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , Sd = tt(Ey)
  , ky = de({}, xi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Yc
})
  , Ny = tt(ky)
  , Py = de({}, mo, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , jy = tt(Py)
  , Ry = de({}, ea, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , Ty = tt(Ry)
  , Ay = [9, 13, 27, 32]
  , Xc = qt && "CompositionEvent"in window
  , Fo = null;
qt && "documentMode"in document && (Fo = document.documentMode);
var Ly = qt && "TextEvent"in window && !Fo
  , um = qt && (!Xc || Fo && 8 < Fo && 11 >= Fo)
  , bd = " "
  , Cd = !1;
function dm(e, t) {
    switch (e) {
    case "keyup":
        return Ay.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function fm(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var Rr = !1;
function zy(e, t) {
    switch (e) {
    case "compositionend":
        return fm(t);
    case "keypress":
        return t.which !== 32 ? null : (Cd = !0,
        bd);
    case "textInput":
        return e = t.data,
        e === bd && Cd ? null : e;
    default:
        return null
    }
}
function Oy(e, t) {
    if (Rr)
        return e === "compositionend" || !Xc && dm(e, t) ? (e = cm(),
        is = Qc = Pn = null,
        Rr = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return um && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var Dy = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function Ed(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Dy[e.type] : t === "textarea"
}
function pm(e, t, n, r) {
    Vp(r),
    t = Ps(t, "onChange"),
    0 < t.length && (n = new Gc("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var $o = null
  , Jo = null;
function My(e) {
    Em(e, 0)
}
function ta(e) {
    var t = Lr(e);
    if (_p(t))
        return e
}
function _y(e, t) {
    if (e === "change")
        return t
}
var mm = !1;
if (qt) {
    var Ua;
    if (qt) {
        var Va = "oninput"in document;
        if (!Va) {
            var kd = document.createElement("div");
            kd.setAttribute("oninput", "return;"),
            Va = typeof kd.oninput == "function"
        }
        Ua = Va
    } else
        Ua = !1;
    mm = Ua && (!document.documentMode || 9 < document.documentMode)
}
function Nd() {
    $o && ($o.detachEvent("onpropertychange", hm),
    Jo = $o = null)
}
function hm(e) {
    if (e.propertyName === "value" && ta(Jo)) {
        var t = [];
        pm(t, Jo, e, Wc(e)),
        Gp(My, t)
    }
}
function Iy(e, t, n) {
    e === "focusin" ? (Nd(),
    $o = t,
    Jo = n,
    $o.attachEvent("onpropertychange", hm)) : e === "focusout" && Nd()
}
function Fy(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return ta(Jo)
}
function $y(e, t) {
    if (e === "click")
        return ta(t)
}
function By(e, t) {
    if (e === "input" || e === "change")
        return ta(t)
}
function Wy(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Et = typeof Object.is == "function" ? Object.is : Wy;
function ei(e, t) {
    if (Et(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!bl.call(t, o) || !Et(e[o], t[o]))
            return !1
    }
    return !0
}
function Pd(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function jd(e, t) {
    var n = Pd(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Pd(n)
    }
}
function gm(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? gm(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function vm() {
    for (var e = window, t = ws(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = ws(e.document)
    }
    return t
}
function qc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function Uy(e) {
    var t = vm()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && gm(n.ownerDocument.documentElement, n)) {
        if (r !== null && qc(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var o = n.textContent.length
                  , i = Math.min(r.start, o);
                r = r.end === void 0 ? i : Math.min(r.end, o),
                !e.extend && i > r && (o = r,
                r = i,
                i = o),
                o = jd(n, i);
                var s = jd(n, r);
                o && s && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(),
                t.setStart(o.node, o.offset),
                e.removeAllRanges(),
                i > r ? (e.addRange(t),
                e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var Vy = qt && "documentMode"in document && 11 >= document.documentMode
  , Tr = null
  , Bl = null
  , Bo = null
  , Wl = !1;
function Rd(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Wl || Tr == null || Tr !== ws(r) || (r = Tr,
    "selectionStart"in r && qc(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    Bo && ei(Bo, r) || (Bo = r,
    r = Ps(Bl, "onSelect"),
    0 < r.length && (t = new Gc("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = Tr)))
}
function Ii(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var Ar = {
    animationend: Ii("Animation", "AnimationEnd"),
    animationiteration: Ii("Animation", "AnimationIteration"),
    animationstart: Ii("Animation", "AnimationStart"),
    transitionend: Ii("Transition", "TransitionEnd")
}
  , Ha = {}
  , ym = {};
qt && (ym = document.createElement("div").style,
"AnimationEvent"in window || (delete Ar.animationend.animation,
delete Ar.animationiteration.animation,
delete Ar.animationstart.animation),
"TransitionEvent"in window || delete Ar.transitionend.transition);
function na(e) {
    if (Ha[e])
        return Ha[e];
    if (!Ar[e])
        return e;
    var t = Ar[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in ym)
            return Ha[e] = t[n];
    return e
}
var xm = na("animationend")
  , wm = na("animationiteration")
  , Sm = na("animationstart")
  , bm = na("transitionend")
  , Cm = new Map
  , Td = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Wn(e, t) {
    Cm.set(e, t),
    hr(t, [e])
}
for (var Ka = 0; Ka < Td.length; Ka++) {
    var Qa = Td[Ka]
      , Hy = Qa.toLowerCase()
      , Ky = Qa[0].toUpperCase() + Qa.slice(1);
    Wn(Hy, "on" + Ky)
}
Wn(xm, "onAnimationEnd");
Wn(wm, "onAnimationIteration");
Wn(Sm, "onAnimationStart");
Wn("dblclick", "onDoubleClick");
Wn("focusin", "onFocus");
Wn("focusout", "onBlur");
Wn(bm, "onTransitionEnd");
ro("onMouseEnter", ["mouseout", "mouseover"]);
ro("onMouseLeave", ["mouseout", "mouseover"]);
ro("onPointerEnter", ["pointerout", "pointerover"]);
ro("onPointerLeave", ["pointerout", "pointerover"]);
hr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
hr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
hr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
hr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
hr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
hr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Mo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , Qy = new Set("cancel close invalid load scroll toggle".split(" ").concat(Mo));
function Ad(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    H0(r, t, void 0, e),
    e.currentTarget = null
}
function Em(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , o = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var a = r[s]
                      , l = a.instance
                      , u = a.currentTarget;
                    if (a = a.listener,
                    l !== i && o.isPropagationStopped())
                        break e;
                    Ad(o, a, u),
                    i = l
                }
            else
                for (s = 0; s < r.length; s++) {
                    if (a = r[s],
                    l = a.instance,
                    u = a.currentTarget,
                    a = a.listener,
                    l !== i && o.isPropagationStopped())
                        break e;
                    Ad(o, a, u),
                    i = l
                }
        }
    }
    if (bs)
        throw e = _l,
        bs = !1,
        _l = null,
        e
}
function oe(e, t) {
    var n = t[Ql];
    n === void 0 && (n = t[Ql] = new Set);
    var r = e + "__bubble";
    n.has(r) || (km(t, e, 2, !1),
    n.add(r))
}
function Ga(e, t, n) {
    var r = 0;
    t && (r |= 4),
    km(n, e, r, t)
}
var Fi = "_reactListening" + Math.random().toString(36).slice(2);
function ti(e) {
    if (!e[Fi]) {
        e[Fi] = !0,
        Lp.forEach(function(n) {
            n !== "selectionchange" && (Qy.has(n) || Ga(n, !1, e),
            Ga(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Fi] || (t[Fi] = !0,
        Ga("selectionchange", !1, t))
    }
}
function km(e, t, n, r) {
    switch (lm(t)) {
    case 1:
        var o = ay;
        break;
    case 4:
        o = ly;
        break;
    default:
        o = Kc
    }
    n = o.bind(null, t, n, e),
    o = void 0,
    !Ml || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0),
    r ? o !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
        passive: o
    }) : e.addEventListener(t, n, !1)
}
function Ya(e, t, n, r, o) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var s = r.tag;
            if (s === 3 || s === 4) {
                var a = r.stateNode.containerInfo;
                if (a === o || a.nodeType === 8 && a.parentNode === o)
                    break;
                if (s === 4)
                    for (s = r.return; s !== null; ) {
                        var l = s.tag;
                        if ((l === 3 || l === 4) && (l = s.stateNode.containerInfo,
                        l === o || l.nodeType === 8 && l.parentNode === o))
                            return;
                        s = s.return
                    }
                for (; a !== null; ) {
                    if (s = Xn(a),
                    s === null)
                        return;
                    if (l = s.tag,
                    l === 5 || l === 6) {
                        r = i = s;
                        continue e
                    }
                    a = a.parentNode
                }
            }
            r = r.return
        }
    Gp(function() {
        var u = i
          , d = Wc(n)
          , f = [];
        e: {
            var g = Cm.get(e);
            if (g !== void 0) {
                var p = Gc
                  , S = e;
                switch (e) {
                case "keypress":
                    if (ss(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    p = Cy;
                    break;
                case "focusin":
                    S = "focus",
                    p = Wa;
                    break;
                case "focusout":
                    S = "blur",
                    p = Wa;
                    break;
                case "beforeblur":
                case "afterblur":
                    p = Wa;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    p = xd;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    p = dy;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    p = Ny;
                    break;
                case xm:
                case wm:
                case Sm:
                    p = my;
                    break;
                case bm:
                    p = jy;
                    break;
                case "scroll":
                    p = cy;
                    break;
                case "wheel":
                    p = Ty;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    p = gy;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    p = Sd
                }
                var m = (t & 4) !== 0
                  , w = !m && e === "scroll"
                  , v = m ? g !== null ? g + "Capture" : null : g;
                m = [];
                for (var h = u, x; h !== null; ) {
                    x = h;
                    var b = x.stateNode;
                    if (x.tag === 5 && b !== null && (x = b,
                    v !== null && (b = Yo(h, v),
                    b != null && m.push(ni(h, b, x)))),
                    w)
                        break;
                    h = h.return
                }
                0 < m.length && (g = new p(g,S,null,n,d),
                f.push({
                    event: g,
                    listeners: m
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (g = e === "mouseover" || e === "pointerover",
                p = e === "mouseout" || e === "pointerout",
                g && n !== Ol && (S = n.relatedTarget || n.fromElement) && (Xn(S) || S[Zt]))
                    break e;
                if ((p || g) && (g = d.window === d ? d : (g = d.ownerDocument) ? g.defaultView || g.parentWindow : window,
                p ? (S = n.relatedTarget || n.toElement,
                p = u,
                S = S ? Xn(S) : null,
                S !== null && (w = gr(S),
                S !== w || S.tag !== 5 && S.tag !== 6) && (S = null)) : (p = null,
                S = u),
                p !== S)) {
                    if (m = xd,
                    b = "onMouseLeave",
                    v = "onMouseEnter",
                    h = "mouse",
                    (e === "pointerout" || e === "pointerover") && (m = Sd,
                    b = "onPointerLeave",
                    v = "onPointerEnter",
                    h = "pointer"),
                    w = p == null ? g : Lr(p),
                    x = S == null ? g : Lr(S),
                    g = new m(b,h + "leave",p,n,d),
                    g.target = w,
                    g.relatedTarget = x,
                    b = null,
                    Xn(d) === u && (m = new m(v,h + "enter",S,n,d),
                    m.target = x,
                    m.relatedTarget = w,
                    b = m),
                    w = b,
                    p && S)
                        t: {
                            for (m = p,
                            v = S,
                            h = 0,
                            x = m; x; x = Cr(x))
                                h++;
                            for (x = 0,
                            b = v; b; b = Cr(b))
                                x++;
                            for (; 0 < h - x; )
                                m = Cr(m),
                                h--;
                            for (; 0 < x - h; )
                                v = Cr(v),
                                x--;
                            for (; h--; ) {
                                if (m === v || v !== null && m === v.alternate)
                                    break t;
                                m = Cr(m),
                                v = Cr(v)
                            }
                            m = null
                        }
                    else
                        m = null;
                    p !== null && Ld(f, g, p, m, !1),
                    S !== null && w !== null && Ld(f, w, S, m, !0)
                }
            }
            e: {
                if (g = u ? Lr(u) : window,
                p = g.nodeName && g.nodeName.toLowerCase(),
                p === "select" || p === "input" && g.type === "file")
                    var C = _y;
                else if (Ed(g))
                    if (mm)
                        C = By;
                    else {
                        C = Fy;
                        var E = Iy
                    }
                else
                    (p = g.nodeName) && p.toLowerCase() === "input" && (g.type === "checkbox" || g.type === "radio") && (C = $y);
                if (C && (C = C(e, u))) {
                    pm(f, C, n, d);
                    break e
                }
                E && E(e, g, u),
                e === "focusout" && (E = g._wrapperState) && E.controlled && g.type === "number" && Rl(g, "number", g.value)
            }
            switch (E = u ? Lr(u) : window,
            e) {
            case "focusin":
                (Ed(E) || E.contentEditable === "true") && (Tr = E,
                Bl = u,
                Bo = null);
                break;
            case "focusout":
                Bo = Bl = Tr = null;
                break;
            case "mousedown":
                Wl = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                Wl = !1,
                Rd(f, n, d);
                break;
            case "selectionchange":
                if (Vy)
                    break;
            case "keydown":
            case "keyup":
                Rd(f, n, d)
            }
            var k;
            if (Xc)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var R = "onCompositionStart";
                        break e;
                    case "compositionend":
                        R = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        R = "onCompositionUpdate";
                        break e
                    }
                    R = void 0
                }
            else
                Rr ? dm(e, n) && (R = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
            R && (um && n.locale !== "ko" && (Rr || R !== "onCompositionStart" ? R === "onCompositionEnd" && Rr && (k = cm()) : (Pn = d,
            Qc = "value"in Pn ? Pn.value : Pn.textContent,
            Rr = !0)),
            E = Ps(u, R),
            0 < E.length && (R = new wd(R,e,null,n,d),
            f.push({
                event: R,
                listeners: E
            }),
            k ? R.data = k : (k = fm(n),
            k !== null && (R.data = k)))),
            (k = Ly ? zy(e, n) : Oy(e, n)) && (u = Ps(u, "onBeforeInput"),
            0 < u.length && (d = new wd("onBeforeInput","beforeinput",null,n,d),
            f.push({
                event: d,
                listeners: u
            }),
            d.data = k))
        }
        Em(f, t)
    })
}
function ni(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function Ps(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var o = e
          , i = o.stateNode;
        o.tag === 5 && i !== null && (o = i,
        i = Yo(e, n),
        i != null && r.unshift(ni(e, i, o)),
        i = Yo(e, t),
        i != null && r.push(ni(e, i, o))),
        e = e.return
    }
    return r
}
function Cr(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function Ld(e, t, n, r, o) {
    for (var i = t._reactName, s = []; n !== null && n !== r; ) {
        var a = n
          , l = a.alternate
          , u = a.stateNode;
        if (l !== null && l === r)
            break;
        a.tag === 5 && u !== null && (a = u,
        o ? (l = Yo(n, i),
        l != null && s.unshift(ni(n, l, a))) : o || (l = Yo(n, i),
        l != null && s.push(ni(n, l, a)))),
        n = n.return
    }
    s.length !== 0 && e.push({
        event: t,
        listeners: s
    })
}
var Gy = /\r\n?/g
  , Yy = /\u0000|\uFFFD/g;
function zd(e) {
    return (typeof e == "string" ? e : "" + e).replace(Gy, `
`).replace(Yy, "")
}
function $i(e, t, n) {
    if (t = zd(t),
    zd(e) !== t && n)
        throw Error(T(425))
}
function js() {}
var Ul = null
  , Vl = null;
function Hl(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Kl = typeof setTimeout == "function" ? setTimeout : void 0
  , Xy = typeof clearTimeout == "function" ? clearTimeout : void 0
  , Od = typeof Promise == "function" ? Promise : void 0
  , qy = typeof queueMicrotask == "function" ? queueMicrotask : typeof Od < "u" ? function(e) {
    return Od.resolve(null).then(e).catch(Zy)
}
: Kl;
function Zy(e) {
    setTimeout(function() {
        throw e
    })
}
function Xa(e, t) {
    var n = t
      , r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n),
        o && o.nodeType === 8)
            if (n = o.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(o),
                    Zo(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = o
    } while (n);
    Zo(t)
}
function zn(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function Dd(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var ho = Math.random().toString(36).slice(2)
  , zt = "__reactFiber$" + ho
  , ri = "__reactProps$" + ho
  , Zt = "__reactContainer$" + ho
  , Ql = "__reactEvents$" + ho
  , Jy = "__reactListeners$" + ho
  , ex = "__reactHandles$" + ho;
function Xn(e) {
    var t = e[zt];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[Zt] || n[zt]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = Dd(e); e !== null; ) {
                    if (n = e[zt])
                        return n;
                    e = Dd(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function wi(e) {
    return e = e[zt] || e[Zt],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function Lr(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(T(33))
}
function ra(e) {
    return e[ri] || null
}
var Gl = []
  , zr = -1;
function Un(e) {
    return {
        current: e
    }
}
function ie(e) {
    0 > zr || (e.current = Gl[zr],
    Gl[zr] = null,
    zr--)
}
function ne(e, t) {
    zr++,
    Gl[zr] = e.current,
    e.current = t
}
var Fn = {}
  , Le = Un(Fn)
  , Ve = Un(!1)
  , ar = Fn;
function oo(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return Fn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var o = {}, i;
    for (i in n)
        o[i] = t[i];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = o),
    o
}
function He(e) {
    return e = e.childContextTypes,
    e != null
}
function Rs() {
    ie(Ve),
    ie(Le)
}
function Md(e, t, n) {
    if (Le.current !== Fn)
        throw Error(T(168));
    ne(Le, t),
    ne(Ve, n)
}
function Nm(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var o in r)
        if (!(o in t))
            throw Error(T(108, I0(e) || "Unknown", o));
    return de({}, n, r)
}
function Ts(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Fn,
    ar = Le.current,
    ne(Le, e),
    ne(Ve, Ve.current),
    !0
}
function _d(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(T(169));
    n ? (e = Nm(e, t, ar),
    r.__reactInternalMemoizedMergedChildContext = e,
    ie(Ve),
    ie(Le),
    ne(Le, e)) : ie(Ve),
    ne(Ve, n)
}
var Kt = null
  , oa = !1
  , qa = !1;
function Pm(e) {
    Kt === null ? Kt = [e] : Kt.push(e)
}
function tx(e) {
    oa = !0,
    Pm(e)
}
function Vn() {
    if (!qa && Kt !== null) {
        qa = !0;
        var e = 0
          , t = ee;
        try {
            var n = Kt;
            for (ee = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            Kt = null,
            oa = !1
        } catch (o) {
            throw Kt !== null && (Kt = Kt.slice(e + 1)),
            Zp(Uc, Vn),
            o
        } finally {
            ee = t,
            qa = !1
        }
    }
    return null
}
var Or = []
  , Dr = 0
  , As = null
  , Ls = 0
  , ot = []
  , it = 0
  , lr = null
  , Gt = 1
  , Yt = "";
function Gn(e, t) {
    Or[Dr++] = Ls,
    Or[Dr++] = As,
    As = e,
    Ls = t
}
function jm(e, t, n) {
    ot[it++] = Gt,
    ot[it++] = Yt,
    ot[it++] = lr,
    lr = e;
    var r = Gt;
    e = Yt;
    var o = 32 - bt(r) - 1;
    r &= ~(1 << o),
    n += 1;
    var i = 32 - bt(t) + o;
    if (30 < i) {
        var s = o - o % 5;
        i = (r & (1 << s) - 1).toString(32),
        r >>= s,
        o -= s,
        Gt = 1 << 32 - bt(t) + o | n << o | r,
        Yt = i + e
    } else
        Gt = 1 << i | n << o | r,
        Yt = e
}
function Zc(e) {
    e.return !== null && (Gn(e, 1),
    jm(e, 1, 0))
}
function Jc(e) {
    for (; e === As; )
        As = Or[--Dr],
        Or[Dr] = null,
        Ls = Or[--Dr],
        Or[Dr] = null;
    for (; e === lr; )
        lr = ot[--it],
        ot[it] = null,
        Yt = ot[--it],
        ot[it] = null,
        Gt = ot[--it],
        ot[it] = null
}
var qe = null
  , Xe = null
  , ae = !1
  , St = null;
function Rm(e, t) {
    var n = st(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function Id(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        qe = e,
        Xe = zn(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        qe = e,
        Xe = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = lr !== null ? {
            id: Gt,
            overflow: Yt
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = st(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        qe = e,
        Xe = null,
        !0) : !1;
    default:
        return !1
    }
}
function Yl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Xl(e) {
    if (ae) {
        var t = Xe;
        if (t) {
            var n = t;
            if (!Id(e, t)) {
                if (Yl(e))
                    throw Error(T(418));
                t = zn(n.nextSibling);
                var r = qe;
                t && Id(e, t) ? Rm(r, n) : (e.flags = e.flags & -4097 | 2,
                ae = !1,
                qe = e)
            }
        } else {
            if (Yl(e))
                throw Error(T(418));
            e.flags = e.flags & -4097 | 2,
            ae = !1,
            qe = e
        }
    }
}
function Fd(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    qe = e
}
function Bi(e) {
    if (e !== qe)
        return !1;
    if (!ae)
        return Fd(e),
        ae = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !Hl(e.type, e.memoizedProps)),
    t && (t = Xe)) {
        if (Yl(e))
            throw Tm(),
            Error(T(418));
        for (; t; )
            Rm(e, t),
            t = zn(t.nextSibling)
    }
    if (Fd(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(T(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Xe = zn(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Xe = null
        }
    } else
        Xe = qe ? zn(e.stateNode.nextSibling) : null;
    return !0
}
function Tm() {
    for (var e = Xe; e; )
        e = zn(e.nextSibling)
}
function io() {
    Xe = qe = null,
    ae = !1
}
function eu(e) {
    St === null ? St = [e] : St.push(e)
}
var nx = on.ReactCurrentBatchConfig;
function jo(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(T(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(T(147, e));
            var o = r
              , i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
                var a = o.refs;
                s === null ? delete a[i] : a[i] = s
            }
            ,
            t._stringRef = i,
            t)
        }
        if (typeof e != "string")
            throw Error(T(284));
        if (!n._owner)
            throw Error(T(290, e))
    }
    return e
}
function Wi(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(T(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function $d(e) {
    var t = e._init;
    return t(e._payload)
}
function Am(e) {
    function t(v, h) {
        if (e) {
            var x = v.deletions;
            x === null ? (v.deletions = [h],
            v.flags |= 16) : x.push(h)
        }
    }
    function n(v, h) {
        if (!e)
            return null;
        for (; h !== null; )
            t(v, h),
            h = h.sibling;
        return null
    }
    function r(v, h) {
        for (v = new Map; h !== null; )
            h.key !== null ? v.set(h.key, h) : v.set(h.index, h),
            h = h.sibling;
        return v
    }
    function o(v, h) {
        return v = _n(v, h),
        v.index = 0,
        v.sibling = null,
        v
    }
    function i(v, h, x) {
        return v.index = x,
        e ? (x = v.alternate,
        x !== null ? (x = x.index,
        x < h ? (v.flags |= 2,
        h) : x) : (v.flags |= 2,
        h)) : (v.flags |= 1048576,
        h)
    }
    function s(v) {
        return e && v.alternate === null && (v.flags |= 2),
        v
    }
    function a(v, h, x, b) {
        return h === null || h.tag !== 6 ? (h = ol(x, v.mode, b),
        h.return = v,
        h) : (h = o(h, x),
        h.return = v,
        h)
    }
    function l(v, h, x, b) {
        var C = x.type;
        return C === jr ? d(v, h, x.props.children, b, x.key) : h !== null && (h.elementType === C || typeof C == "object" && C !== null && C.$$typeof === yn && $d(C) === h.type) ? (b = o(h, x.props),
        b.ref = jo(v, h, x),
        b.return = v,
        b) : (b = ps(x.type, x.key, x.props, null, v.mode, b),
        b.ref = jo(v, h, x),
        b.return = v,
        b)
    }
    function u(v, h, x, b) {
        return h === null || h.tag !== 4 || h.stateNode.containerInfo !== x.containerInfo || h.stateNode.implementation !== x.implementation ? (h = il(x, v.mode, b),
        h.return = v,
        h) : (h = o(h, x.children || []),
        h.return = v,
        h)
    }
    function d(v, h, x, b, C) {
        return h === null || h.tag !== 7 ? (h = sr(x, v.mode, b, C),
        h.return = v,
        h) : (h = o(h, x),
        h.return = v,
        h)
    }
    function f(v, h, x) {
        if (typeof h == "string" && h !== "" || typeof h == "number")
            return h = ol("" + h, v.mode, x),
            h.return = v,
            h;
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
            case Ai:
                return x = ps(h.type, h.key, h.props, null, v.mode, x),
                x.ref = jo(v, null, h),
                x.return = v,
                x;
            case Pr:
                return h = il(h, v.mode, x),
                h.return = v,
                h;
            case yn:
                var b = h._init;
                return f(v, b(h._payload), x)
            }
            if (Oo(h) || Co(h))
                return h = sr(h, v.mode, x, null),
                h.return = v,
                h;
            Wi(v, h)
        }
        return null
    }
    function g(v, h, x, b) {
        var C = h !== null ? h.key : null;
        if (typeof x == "string" && x !== "" || typeof x == "number")
            return C !== null ? null : a(v, h, "" + x, b);
        if (typeof x == "object" && x !== null) {
            switch (x.$$typeof) {
            case Ai:
                return x.key === C ? l(v, h, x, b) : null;
            case Pr:
                return x.key === C ? u(v, h, x, b) : null;
            case yn:
                return C = x._init,
                g(v, h, C(x._payload), b)
            }
            if (Oo(x) || Co(x))
                return C !== null ? null : d(v, h, x, b, null);
            Wi(v, x)
        }
        return null
    }
    function p(v, h, x, b, C) {
        if (typeof b == "string" && b !== "" || typeof b == "number")
            return v = v.get(x) || null,
            a(h, v, "" + b, C);
        if (typeof b == "object" && b !== null) {
            switch (b.$$typeof) {
            case Ai:
                return v = v.get(b.key === null ? x : b.key) || null,
                l(h, v, b, C);
            case Pr:
                return v = v.get(b.key === null ? x : b.key) || null,
                u(h, v, b, C);
            case yn:
                var E = b._init;
                return p(v, h, x, E(b._payload), C)
            }
            if (Oo(b) || Co(b))
                return v = v.get(x) || null,
                d(h, v, b, C, null);
            Wi(h, b)
        }
        return null
    }
    function S(v, h, x, b) {
        for (var C = null, E = null, k = h, R = h = 0, z = null; k !== null && R < x.length; R++) {
            k.index > R ? (z = k,
            k = null) : z = k.sibling;
            var L = g(v, k, x[R], b);
            if (L === null) {
                k === null && (k = z);
                break
            }
            e && k && L.alternate === null && t(v, k),
            h = i(L, h, R),
            E === null ? C = L : E.sibling = L,
            E = L,
            k = z
        }
        if (R === x.length)
            return n(v, k),
            ae && Gn(v, R),
            C;
        if (k === null) {
            for (; R < x.length; R++)
                k = f(v, x[R], b),
                k !== null && (h = i(k, h, R),
                E === null ? C = k : E.sibling = k,
                E = k);
            return ae && Gn(v, R),
            C
        }
        for (k = r(v, k); R < x.length; R++)
            z = p(k, v, R, x[R], b),
            z !== null && (e && z.alternate !== null && k.delete(z.key === null ? R : z.key),
            h = i(z, h, R),
            E === null ? C = z : E.sibling = z,
            E = z);
        return e && k.forEach(function(F) {
            return t(v, F)
        }),
        ae && Gn(v, R),
        C
    }
    function m(v, h, x, b) {
        var C = Co(x);
        if (typeof C != "function")
            throw Error(T(150));
        if (x = C.call(x),
        x == null)
            throw Error(T(151));
        for (var E = C = null, k = h, R = h = 0, z = null, L = x.next(); k !== null && !L.done; R++,
        L = x.next()) {
            k.index > R ? (z = k,
            k = null) : z = k.sibling;
            var F = g(v, k, L.value, b);
            if (F === null) {
                k === null && (k = z);
                break
            }
            e && k && F.alternate === null && t(v, k),
            h = i(F, h, R),
            E === null ? C = F : E.sibling = F,
            E = F,
            k = z
        }
        if (L.done)
            return n(v, k),
            ae && Gn(v, R),
            C;
        if (k === null) {
            for (; !L.done; R++,
            L = x.next())
                L = f(v, L.value, b),
                L !== null && (h = i(L, h, R),
                E === null ? C = L : E.sibling = L,
                E = L);
            return ae && Gn(v, R),
            C
        }
        for (k = r(v, k); !L.done; R++,
        L = x.next())
            L = p(k, v, R, L.value, b),
            L !== null && (e && L.alternate !== null && k.delete(L.key === null ? R : L.key),
            h = i(L, h, R),
            E === null ? C = L : E.sibling = L,
            E = L);
        return e && k.forEach(function(_) {
            return t(v, _)
        }),
        ae && Gn(v, R),
        C
    }
    function w(v, h, x, b) {
        if (typeof x == "object" && x !== null && x.type === jr && x.key === null && (x = x.props.children),
        typeof x == "object" && x !== null) {
            switch (x.$$typeof) {
            case Ai:
                e: {
                    for (var C = x.key, E = h; E !== null; ) {
                        if (E.key === C) {
                            if (C = x.type,
                            C === jr) {
                                if (E.tag === 7) {
                                    n(v, E.sibling),
                                    h = o(E, x.props.children),
                                    h.return = v,
                                    v = h;
                                    break e
                                }
                            } else if (E.elementType === C || typeof C == "object" && C !== null && C.$$typeof === yn && $d(C) === E.type) {
                                n(v, E.sibling),
                                h = o(E, x.props),
                                h.ref = jo(v, E, x),
                                h.return = v,
                                v = h;
                                break e
                            }
                            n(v, E);
                            break
                        } else
                            t(v, E);
                        E = E.sibling
                    }
                    x.type === jr ? (h = sr(x.props.children, v.mode, b, x.key),
                    h.return = v,
                    v = h) : (b = ps(x.type, x.key, x.props, null, v.mode, b),
                    b.ref = jo(v, h, x),
                    b.return = v,
                    v = b)
                }
                return s(v);
            case Pr:
                e: {
                    for (E = x.key; h !== null; ) {
                        if (h.key === E)
                            if (h.tag === 4 && h.stateNode.containerInfo === x.containerInfo && h.stateNode.implementation === x.implementation) {
                                n(v, h.sibling),
                                h = o(h, x.children || []),
                                h.return = v,
                                v = h;
                                break e
                            } else {
                                n(v, h);
                                break
                            }
                        else
                            t(v, h);
                        h = h.sibling
                    }
                    h = il(x, v.mode, b),
                    h.return = v,
                    v = h
                }
                return s(v);
            case yn:
                return E = x._init,
                w(v, h, E(x._payload), b)
            }
            if (Oo(x))
                return S(v, h, x, b);
            if (Co(x))
                return m(v, h, x, b);
            Wi(v, x)
        }
        return typeof x == "string" && x !== "" || typeof x == "number" ? (x = "" + x,
        h !== null && h.tag === 6 ? (n(v, h.sibling),
        h = o(h, x),
        h.return = v,
        v = h) : (n(v, h),
        h = ol(x, v.mode, b),
        h.return = v,
        v = h),
        s(v)) : n(v, h)
    }
    return w
}
var so = Am(!0)
  , Lm = Am(!1)
  , zs = Un(null)
  , Os = null
  , Mr = null
  , tu = null;
function nu() {
    tu = Mr = Os = null
}
function ru(e) {
    var t = zs.current;
    ie(zs),
    e._currentValue = t
}
function ql(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function Ur(e, t) {
    Os = e,
    tu = Mr = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (Ue = !0),
    e.firstContext = null)
}
function ct(e) {
    var t = e._currentValue;
    if (tu !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Mr === null) {
            if (Os === null)
                throw Error(T(308));
            Mr = e,
            Os.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Mr = Mr.next = e;
    return t
}
var qn = null;
function ou(e) {
    qn === null ? qn = [e] : qn.push(e)
}
function zm(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n,
    ou(t)) : (n.next = o.next,
    o.next = n),
    t.interleaved = n,
    Jt(e, r)
}
function Jt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var xn = !1;
function iu(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Om(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function Xt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function On(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    q & 2) {
        var o = r.pending;
        return o === null ? t.next = t : (t.next = o.next,
        o.next = t),
        r.pending = t,
        Jt(e, n)
    }
    return o = r.interleaved,
    o === null ? (t.next = t,
    ou(r)) : (t.next = o.next,
    o.next = t),
    r.interleaved = t,
    Jt(e, n)
}
function as(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Vc(e, n)
    }
}
function Bd(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var o = null
          , i = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? o = i = s : i = i.next = s,
                n = n.next
            } while (n !== null);
            i === null ? o = i = t : i = i.next = t
        } else
            o = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function Ds(e, t, n, r) {
    var o = e.updateQueue;
    xn = !1;
    var i = o.firstBaseUpdate
      , s = o.lastBaseUpdate
      , a = o.shared.pending;
    if (a !== null) {
        o.shared.pending = null;
        var l = a
          , u = l.next;
        l.next = null,
        s === null ? i = u : s.next = u,
        s = l;
        var d = e.alternate;
        d !== null && (d = d.updateQueue,
        a = d.lastBaseUpdate,
        a !== s && (a === null ? d.firstBaseUpdate = u : a.next = u,
        d.lastBaseUpdate = l))
    }
    if (i !== null) {
        var f = o.baseState;
        s = 0,
        d = u = l = null,
        a = i;
        do {
            var g = a.lane
              , p = a.eventTime;
            if ((r & g) === g) {
                d !== null && (d = d.next = {
                    eventTime: p,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var S = e
                      , m = a;
                    switch (g = t,
                    p = n,
                    m.tag) {
                    case 1:
                        if (S = m.payload,
                        typeof S == "function") {
                            f = S.call(p, f, g);
                            break e
                        }
                        f = S;
                        break e;
                    case 3:
                        S.flags = S.flags & -65537 | 128;
                    case 0:
                        if (S = m.payload,
                        g = typeof S == "function" ? S.call(p, f, g) : S,
                        g == null)
                            break e;
                        f = de({}, f, g);
                        break e;
                    case 2:
                        xn = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64,
                g = o.effects,
                g === null ? o.effects = [a] : g.push(a))
            } else
                p = {
                    eventTime: p,
                    lane: g,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                },
                d === null ? (u = d = p,
                l = f) : d = d.next = p,
                s |= g;
            if (a = a.next,
            a === null) {
                if (a = o.shared.pending,
                a === null)
                    break;
                g = a,
                a = g.next,
                g.next = null,
                o.lastBaseUpdate = g,
                o.shared.pending = null
            }
        } while (!0);
        if (d === null && (l = f),
        o.baseState = l,
        o.firstBaseUpdate = u,
        o.lastBaseUpdate = d,
        t = o.shared.interleaved,
        t !== null) {
            o = t;
            do
                s |= o.lane,
                o = o.next;
            while (o !== t)
        } else
            i === null && (o.shared.lanes = 0);
        ur |= s,
        e.lanes = s,
        e.memoizedState = f
    }
}
function Wd(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , o = r.callback;
            if (o !== null) {
                if (r.callback = null,
                r = n,
                typeof o != "function")
                    throw Error(T(191, o));
                o.call(r)
            }
        }
}
var Si = {}
  , _t = Un(Si)
  , oi = Un(Si)
  , ii = Un(Si);
function Zn(e) {
    if (e === Si)
        throw Error(T(174));
    return e
}
function su(e, t) {
    switch (ne(ii, t),
    ne(oi, e),
    ne(_t, Si),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Al(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = Al(t, e)
    }
    ie(_t),
    ne(_t, t)
}
function ao() {
    ie(_t),
    ie(oi),
    ie(ii)
}
function Dm(e) {
    Zn(ii.current);
    var t = Zn(_t.current)
      , n = Al(t, e.type);
    t !== n && (ne(oi, e),
    ne(_t, n))
}
function au(e) {
    oi.current === e && (ie(_t),
    ie(oi))
}
var ce = Un(0);
function Ms(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var Za = [];
function lu() {
    for (var e = 0; e < Za.length; e++)
        Za[e]._workInProgressVersionPrimary = null;
    Za.length = 0
}
var ls = on.ReactCurrentDispatcher
  , Ja = on.ReactCurrentBatchConfig
  , cr = 0
  , ue = null
  , xe = null
  , Se = null
  , _s = !1
  , Wo = !1
  , si = 0
  , rx = 0;
function je() {
    throw Error(T(321))
}
function cu(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Et(e[n], t[n]))
            return !1;
    return !0
}
function uu(e, t, n, r, o, i) {
    if (cr = i,
    ue = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    ls.current = e === null || e.memoizedState === null ? ax : lx,
    e = n(r, o),
    Wo) {
        i = 0;
        do {
            if (Wo = !1,
            si = 0,
            25 <= i)
                throw Error(T(301));
            i += 1,
            Se = xe = null,
            t.updateQueue = null,
            ls.current = cx,
            e = n(r, o)
        } while (Wo)
    }
    if (ls.current = Is,
    t = xe !== null && xe.next !== null,
    cr = 0,
    Se = xe = ue = null,
    _s = !1,
    t)
        throw Error(T(300));
    return e
}
function du() {
    var e = si !== 0;
    return si = 0,
    e
}
function Rt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Se === null ? ue.memoizedState = Se = e : Se = Se.next = e,
    Se
}
function ut() {
    if (xe === null) {
        var e = ue.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = xe.next;
    var t = Se === null ? ue.memoizedState : Se.next;
    if (t !== null)
        Se = t,
        xe = e;
    else {
        if (e === null)
            throw Error(T(310));
        xe = e,
        e = {
            memoizedState: xe.memoizedState,
            baseState: xe.baseState,
            baseQueue: xe.baseQueue,
            queue: xe.queue,
            next: null
        },
        Se === null ? ue.memoizedState = Se = e : Se = Se.next = e
    }
    return Se
}
function ai(e, t) {
    return typeof t == "function" ? t(e) : t
}
function el(e) {
    var t = ut()
      , n = t.queue;
    if (n === null)
        throw Error(T(311));
    n.lastRenderedReducer = e;
    var r = xe
      , o = r.baseQueue
      , i = n.pending;
    if (i !== null) {
        if (o !== null) {
            var s = o.next;
            o.next = i.next,
            i.next = s
        }
        r.baseQueue = o = i,
        n.pending = null
    }
    if (o !== null) {
        i = o.next,
        r = r.baseState;
        var a = s = null
          , l = null
          , u = i;
        do {
            var d = u.lane;
            if ((cr & d) === d)
                l !== null && (l = l.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var f = {
                    lane: d,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                l === null ? (a = l = f,
                s = r) : l = l.next = f,
                ue.lanes |= d,
                ur |= d
            }
            u = u.next
        } while (u !== null && u !== i);
        l === null ? s = r : l.next = a,
        Et(r, t.memoizedState) || (Ue = !0),
        t.memoizedState = r,
        t.baseState = s,
        t.baseQueue = l,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        o = e;
        do
            i = o.lane,
            ue.lanes |= i,
            ur |= i,
            o = o.next;
        while (o !== e)
    } else
        o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function tl(e) {
    var t = ut()
      , n = t.queue;
    if (n === null)
        throw Error(T(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , o = n.pending
      , i = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var s = o = o.next;
        do
            i = e(i, s.action),
            s = s.next;
        while (s !== o);
        Et(i, t.memoizedState) || (Ue = !0),
        t.memoizedState = i,
        t.baseQueue === null && (t.baseState = i),
        n.lastRenderedState = i
    }
    return [i, r]
}
function Mm() {}
function _m(e, t) {
    var n = ue
      , r = ut()
      , o = t()
      , i = !Et(r.memoizedState, o);
    if (i && (r.memoizedState = o,
    Ue = !0),
    r = r.queue,
    fu($m.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || Se !== null && Se.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        li(9, Fm.bind(null, n, r, o, t), void 0, null),
        be === null)
            throw Error(T(349));
        cr & 30 || Im(n, t, o)
    }
    return o
}
function Im(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = ue.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    ue.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function Fm(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    Bm(t) && Wm(e)
}
function $m(e, t, n) {
    return n(function() {
        Bm(t) && Wm(e)
    })
}
function Bm(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Et(e, n)
    } catch {
        return !0
    }
}
function Wm(e) {
    var t = Jt(e, 1);
    t !== null && Ct(t, e, 1, -1)
}
function Ud(e) {
    var t = Rt();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ai,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = sx.bind(null, ue, e),
    [t.memoizedState, e]
}
function li(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = ue.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    ue.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function Um() {
    return ut().memoizedState
}
function cs(e, t, n, r) {
    var o = Rt();
    ue.flags |= e,
    o.memoizedState = li(1 | t, n, void 0, r === void 0 ? null : r)
}
function ia(e, t, n, r) {
    var o = ut();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (xe !== null) {
        var s = xe.memoizedState;
        if (i = s.destroy,
        r !== null && cu(r, s.deps)) {
            o.memoizedState = li(t, n, i, r);
            return
        }
    }
    ue.flags |= e,
    o.memoizedState = li(1 | t, n, i, r)
}
function Vd(e, t) {
    return cs(8390656, 8, e, t)
}
function fu(e, t) {
    return ia(2048, 8, e, t)
}
function Vm(e, t) {
    return ia(4, 2, e, t)
}
function Hm(e, t) {
    return ia(4, 4, e, t)
}
function Km(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function Qm(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    ia(4, 4, Km.bind(null, t, e), n)
}
function pu() {}
function Gm(e, t) {
    var n = ut();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && cu(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function Ym(e, t) {
    var n = ut();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && cu(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function Xm(e, t, n) {
    return cr & 21 ? (Et(n, t) || (n = tm(),
    ue.lanes |= n,
    ur |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    Ue = !0),
    e.memoizedState = n)
}
function ox(e, t) {
    var n = ee;
    ee = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = Ja.transition;
    Ja.transition = {};
    try {
        e(!1),
        t()
    } finally {
        ee = n,
        Ja.transition = r
    }
}
function qm() {
    return ut().memoizedState
}
function ix(e, t, n) {
    var r = Mn(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    Zm(e))
        Jm(t, n);
    else if (n = zm(e, t, n, r),
    n !== null) {
        var o = _e();
        Ct(n, e, r, o),
        eh(n, t, r)
    }
}
function sx(e, t, n) {
    var r = Mn(e)
      , o = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (Zm(e))
        Jm(t, o);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer,
        i !== null))
            try {
                var s = t.lastRenderedState
                  , a = i(s, n);
                if (o.hasEagerState = !0,
                o.eagerState = a,
                Et(a, s)) {
                    var l = t.interleaved;
                    l === null ? (o.next = o,
                    ou(t)) : (o.next = l.next,
                    l.next = o),
                    t.interleaved = o;
                    return
                }
            } catch {} finally {}
        n = zm(e, t, o, r),
        n !== null && (o = _e(),
        Ct(n, e, r, o),
        eh(n, t, r))
    }
}
function Zm(e) {
    var t = e.alternate;
    return e === ue || t !== null && t === ue
}
function Jm(e, t) {
    Wo = _s = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function eh(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Vc(e, n)
    }
}
var Is = {
    readContext: ct,
    useCallback: je,
    useContext: je,
    useEffect: je,
    useImperativeHandle: je,
    useInsertionEffect: je,
    useLayoutEffect: je,
    useMemo: je,
    useReducer: je,
    useRef: je,
    useState: je,
    useDebugValue: je,
    useDeferredValue: je,
    useTransition: je,
    useMutableSource: je,
    useSyncExternalStore: je,
    useId: je,
    unstable_isNewReconciler: !1
}
  , ax = {
    readContext: ct,
    useCallback: function(e, t) {
        return Rt().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: ct,
    useEffect: Vd,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        cs(4194308, 4, Km.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return cs(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return cs(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = Rt();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = Rt();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = ix.bind(null, ue, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = Rt();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: Ud,
    useDebugValue: pu,
    useDeferredValue: function(e) {
        return Rt().memoizedState = e
    },
    useTransition: function() {
        var e = Ud(!1)
          , t = e[0];
        return e = ox.bind(null, e[1]),
        Rt().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = ue
          , o = Rt();
        if (ae) {
            if (n === void 0)
                throw Error(T(407));
            n = n()
        } else {
            if (n = t(),
            be === null)
                throw Error(T(349));
            cr & 30 || Im(r, t, n)
        }
        o.memoizedState = n;
        var i = {
            value: n,
            getSnapshot: t
        };
        return o.queue = i,
        Vd($m.bind(null, r, i, e), [e]),
        r.flags |= 2048,
        li(9, Fm.bind(null, r, i, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = Rt()
          , t = be.identifierPrefix;
        if (ae) {
            var n = Yt
              , r = Gt;
            n = (r & ~(1 << 32 - bt(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = si++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = rx++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , lx = {
    readContext: ct,
    useCallback: Gm,
    useContext: ct,
    useEffect: fu,
    useImperativeHandle: Qm,
    useInsertionEffect: Vm,
    useLayoutEffect: Hm,
    useMemo: Ym,
    useReducer: el,
    useRef: Um,
    useState: function() {
        return el(ai)
    },
    useDebugValue: pu,
    useDeferredValue: function(e) {
        var t = ut();
        return Xm(t, xe.memoizedState, e)
    },
    useTransition: function() {
        var e = el(ai)[0]
          , t = ut().memoizedState;
        return [e, t]
    },
    useMutableSource: Mm,
    useSyncExternalStore: _m,
    useId: qm,
    unstable_isNewReconciler: !1
}
  , cx = {
    readContext: ct,
    useCallback: Gm,
    useContext: ct,
    useEffect: fu,
    useImperativeHandle: Qm,
    useInsertionEffect: Vm,
    useLayoutEffect: Hm,
    useMemo: Ym,
    useReducer: tl,
    useRef: Um,
    useState: function() {
        return tl(ai)
    },
    useDebugValue: pu,
    useDeferredValue: function(e) {
        var t = ut();
        return xe === null ? t.memoizedState = e : Xm(t, xe.memoizedState, e)
    },
    useTransition: function() {
        var e = tl(ai)[0]
          , t = ut().memoizedState;
        return [e, t]
    },
    useMutableSource: Mm,
    useSyncExternalStore: _m,
    useId: qm,
    unstable_isNewReconciler: !1
};
function gt(e, t) {
    if (e && e.defaultProps) {
        t = de({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function Zl(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : de({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var sa = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? gr(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = _e()
          , o = Mn(e)
          , i = Xt(r, o);
        i.payload = t,
        n != null && (i.callback = n),
        t = On(e, i, o),
        t !== null && (Ct(t, e, o, r),
        as(t, e, o))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = _e()
          , o = Mn(e)
          , i = Xt(r, o);
        i.tag = 1,
        i.payload = t,
        n != null && (i.callback = n),
        t = On(e, i, o),
        t !== null && (Ct(t, e, o, r),
        as(t, e, o))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = _e()
          , r = Mn(e)
          , o = Xt(n, r);
        o.tag = 2,
        t != null && (o.callback = t),
        t = On(e, o, r),
        t !== null && (Ct(t, e, r, n),
        as(t, e, r))
    }
};
function Hd(e, t, n, r, o, i, s) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !ei(n, r) || !ei(o, i) : !0
}
function th(e, t, n) {
    var r = !1
      , o = Fn
      , i = t.contextType;
    return typeof i == "object" && i !== null ? i = ct(i) : (o = He(t) ? ar : Le.current,
    r = t.contextTypes,
    i = (r = r != null) ? oo(e, o) : Fn),
    t = new t(n,i),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = sa,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = o,
    e.__reactInternalMemoizedMaskedChildContext = i),
    t
}
function Kd(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && sa.enqueueReplaceState(t, t.state, null)
}
function Jl(e, t, n, r) {
    var o = e.stateNode;
    o.props = n,
    o.state = e.memoizedState,
    o.refs = {},
    iu(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? o.context = ct(i) : (i = He(t) ? ar : Le.current,
    o.context = oo(e, i)),
    o.state = e.memoizedState,
    i = t.getDerivedStateFromProps,
    typeof i == "function" && (Zl(e, t, i, n),
    o.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state,
    typeof o.componentWillMount == "function" && o.componentWillMount(),
    typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
    t !== o.state && sa.enqueueReplaceState(o, o.state, null),
    Ds(e, n, o, r),
    o.state = e.memoizedState),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}
function lo(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += _0(r),
            r = r.return;
        while (r);
        var o = n
    } catch (i) {
        o = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}
function nl(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function ec(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var ux = typeof WeakMap == "function" ? WeakMap : Map;
function nh(e, t, n) {
    n = Xt(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        $s || ($s = !0,
        uc = r),
        ec(e, t)
    }
    ,
    n
}
function rh(e, t, n) {
    n = Xt(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        n.payload = function() {
            return r(o)
        }
        ,
        n.callback = function() {
            ec(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
        ec(e, t),
        typeof r != "function" && (Dn === null ? Dn = new Set([this]) : Dn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : ""
        })
    }
    ),
    n
}
function Qd(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new ux;
        var o = new Set;
        r.set(t, o)
    } else
        o = r.get(t),
        o === void 0 && (o = new Set,
        r.set(t, o));
    o.has(n) || (o.add(n),
    e = Ex.bind(null, e, t, n),
    t.then(e, e))
}
function Gd(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function Yd(e, t, n, r, o) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = o,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Xt(-1, 1),
    t.tag = 2,
    On(n, t, 1))),
    n.lanes |= 1),
    e)
}
var dx = on.ReactCurrentOwner
  , Ue = !1;
function Oe(e, t, n, r) {
    t.child = e === null ? Lm(t, null, n, r) : so(t, e.child, n, r)
}
function Xd(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return Ur(t, o),
    r = uu(e, t, n, r, i, o),
    n = du(),
    e !== null && !Ue ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    en(e, t, o)) : (ae && n && Zc(t),
    t.flags |= 1,
    Oe(e, t, r, o),
    t.child)
}
function qd(e, t, n, r, o) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !Su(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = i,
        oh(e, t, i, r, o)) : (e = ps(n.type, null, r, t, t.mode, o),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (i = e.child,
    !(e.lanes & o)) {
        var s = i.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : ei,
        n(s, r) && e.ref === t.ref)
            return en(e, t, o)
    }
    return t.flags |= 1,
    e = _n(i, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function oh(e, t, n, r, o) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (ei(i, r) && e.ref === t.ref)
            if (Ue = !1,
            t.pendingProps = r = i,
            (e.lanes & o) !== 0)
                e.flags & 131072 && (Ue = !0);
            else
                return t.lanes = e.lanes,
                en(e, t, o)
    }
    return tc(e, t, n, r, o)
}
function ih(e, t, n) {
    var r = t.pendingProps
      , o = r.children
      , i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            ne(Ir, Ge),
            Ge |= n;
        else {
            if (!(n & 1073741824))
                return e = i !== null ? i.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                ne(Ir, Ge),
                Ge |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = i !== null ? i.baseLanes : n,
            ne(Ir, Ge),
            Ge |= r
        }
    else
        i !== null ? (r = i.baseLanes | n,
        t.memoizedState = null) : r = n,
        ne(Ir, Ge),
        Ge |= r;
    return Oe(e, t, o, n),
    t.child
}
function sh(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function tc(e, t, n, r, o) {
    var i = He(n) ? ar : Le.current;
    return i = oo(t, i),
    Ur(t, o),
    n = uu(e, t, n, r, i, o),
    r = du(),
    e !== null && !Ue ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    en(e, t, o)) : (ae && r && Zc(t),
    t.flags |= 1,
    Oe(e, t, n, o),
    t.child)
}
function Zd(e, t, n, r, o) {
    if (He(n)) {
        var i = !0;
        Ts(t)
    } else
        i = !1;
    if (Ur(t, o),
    t.stateNode === null)
        us(e, t),
        th(t, n, r),
        Jl(t, n, r, o),
        r = !0;
    else if (e === null) {
        var s = t.stateNode
          , a = t.memoizedProps;
        s.props = a;
        var l = s.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = ct(u) : (u = He(n) ? ar : Le.current,
        u = oo(t, u));
        var d = n.getDerivedStateFromProps
          , f = typeof d == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        f || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || l !== u) && Kd(t, s, r, u),
        xn = !1;
        var g = t.memoizedState;
        s.state = g,
        Ds(t, r, s, o),
        l = t.memoizedState,
        a !== r || g !== l || Ve.current || xn ? (typeof d == "function" && (Zl(t, n, d, r),
        l = t.memoizedState),
        (a = xn || Hd(t, n, a, r, g, l, u)) ? (f || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(),
        typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
        typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = l),
        s.props = r,
        s.state = l,
        s.context = u,
        r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        s = t.stateNode,
        Om(e, t),
        a = t.memoizedProps,
        u = t.type === t.elementType ? a : gt(t.type, a),
        s.props = u,
        f = t.pendingProps,
        g = s.context,
        l = n.contextType,
        typeof l == "object" && l !== null ? l = ct(l) : (l = He(n) ? ar : Le.current,
        l = oo(t, l));
        var p = n.getDerivedStateFromProps;
        (d = typeof p == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== f || g !== l) && Kd(t, s, r, l),
        xn = !1,
        g = t.memoizedState,
        s.state = g,
        Ds(t, r, s, o);
        var S = t.memoizedState;
        a !== f || g !== S || Ve.current || xn ? (typeof p == "function" && (Zl(t, n, p, r),
        S = t.memoizedState),
        (u = xn || Hd(t, n, u, r, g, S, l) || !1) ? (d || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, S, l),
        typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, S, l)),
        typeof s.componentDidUpdate == "function" && (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && g === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = S),
        s.props = r,
        s.state = S,
        s.context = l,
        r = u) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && g === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return nc(e, t, n, r, i, o)
}
function nc(e, t, n, r, o, i) {
    sh(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s)
        return o && _d(t, n, !1),
        en(e, t, i);
    r = t.stateNode,
    dx.current = t;
    var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && s ? (t.child = so(t, e.child, null, i),
    t.child = so(t, null, a, i)) : Oe(e, t, a, i),
    t.memoizedState = r.state,
    o && _d(t, n, !0),
    t.child
}
function ah(e) {
    var t = e.stateNode;
    t.pendingContext ? Md(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Md(e, t.context, !1),
    su(e, t.containerInfo)
}
function Jd(e, t, n, r, o) {
    return io(),
    eu(o),
    t.flags |= 256,
    Oe(e, t, n, r),
    t.child
}
var rc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function oc(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function lh(e, t, n) {
    var r = t.pendingProps, o = ce.current, i = !1, s = (t.flags & 128) !== 0, a;
    if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a ? (i = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1),
    ne(ce, o & 1),
    e === null)
        return Xl(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (s = r.children,
        e = r.fallback,
        i ? (r = t.mode,
        i = t.child,
        s = {
            mode: "hidden",
            children: s
        },
        !(r & 1) && i !== null ? (i.childLanes = 0,
        i.pendingProps = s) : i = ca(s, r, 0, null),
        e = sr(e, r, n, null),
        i.return = t,
        e.return = t,
        i.sibling = e,
        t.child = i,
        t.child.memoizedState = oc(n),
        t.memoizedState = rc,
        e) : mu(t, s));
    if (o = e.memoizedState,
    o !== null && (a = o.dehydrated,
    a !== null))
        return fx(e, t, s, r, a, o, n);
    if (i) {
        i = r.fallback,
        s = t.mode,
        o = e.child,
        a = o.sibling;
        var l = {
            mode: "hidden",
            children: r.children
        };
        return !(s & 1) && t.child !== o ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = l,
        t.deletions = null) : (r = _n(o, l),
        r.subtreeFlags = o.subtreeFlags & 14680064),
        a !== null ? i = _n(a, i) : (i = sr(i, s, n, null),
        i.flags |= 2),
        i.return = t,
        r.return = t,
        r.sibling = i,
        t.child = r,
        r = i,
        i = t.child,
        s = e.child.memoizedState,
        s = s === null ? oc(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
        },
        i.memoizedState = s,
        i.childLanes = e.childLanes & ~n,
        t.memoizedState = rc,
        r
    }
    return i = e.child,
    e = i.sibling,
    r = _n(i, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function mu(e, t) {
    return t = ca({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function Ui(e, t, n, r) {
    return r !== null && eu(r),
    so(t, e.child, null, n),
    e = mu(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function fx(e, t, n, r, o, i, s) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = nl(Error(T(422))),
        Ui(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (i = r.fallback,
        o = t.mode,
        r = ca({
            mode: "visible",
            children: r.children
        }, o, 0, null),
        i = sr(i, o, s, null),
        i.flags |= 2,
        r.return = t,
        i.return = t,
        r.sibling = i,
        t.child = r,
        t.mode & 1 && so(t, e.child, null, s),
        t.child.memoizedState = oc(s),
        t.memoizedState = rc,
        i);
    if (!(t.mode & 1))
        return Ui(e, t, s, null);
    if (o.data === "$!") {
        if (r = o.nextSibling && o.nextSibling.dataset,
        r)
            var a = r.dgst;
        return r = a,
        i = Error(T(419)),
        r = nl(i, r, void 0),
        Ui(e, t, s, r)
    }
    if (a = (s & e.childLanes) !== 0,
    Ue || a) {
        if (r = be,
        r !== null) {
            switch (s & -s) {
            case 4:
                o = 2;
                break;
            case 16:
                o = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                o = 32;
                break;
            case 536870912:
                o = 268435456;
                break;
            default:
                o = 0
            }
            o = o & (r.suspendedLanes | s) ? 0 : o,
            o !== 0 && o !== i.retryLane && (i.retryLane = o,
            Jt(e, o),
            Ct(r, e, o, -1))
        }
        return wu(),
        r = nl(Error(T(421))),
        Ui(e, t, s, r)
    }
    return o.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = kx.bind(null, e),
    o._reactRetry = t,
    null) : (e = i.treeContext,
    Xe = zn(o.nextSibling),
    qe = t,
    ae = !0,
    St = null,
    e !== null && (ot[it++] = Gt,
    ot[it++] = Yt,
    ot[it++] = lr,
    Gt = e.id,
    Yt = e.overflow,
    lr = t),
    t = mu(t, r.children),
    t.flags |= 4096,
    t)
}
function ef(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    ql(e.return, t, n)
}
function rl(e, t, n, r, o) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
    } : (i.isBackwards = t,
    i.rendering = null,
    i.renderingStartTime = 0,
    i.last = r,
    i.tail = n,
    i.tailMode = o)
}
function ch(e, t, n) {
    var r = t.pendingProps
      , o = r.revealOrder
      , i = r.tail;
    if (Oe(e, t, r.children, n),
    r = ce.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && ef(e, n, t);
                else if (e.tag === 19)
                    ef(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (ne(ce, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (o) {
        case "forwards":
            for (n = t.child,
            o = null; n !== null; )
                e = n.alternate,
                e !== null && Ms(e) === null && (o = n),
                n = n.sibling;
            n = o,
            n === null ? (o = t.child,
            t.child = null) : (o = n.sibling,
            n.sibling = null),
            rl(t, !1, o, n, i);
            break;
        case "backwards":
            for (n = null,
            o = t.child,
            t.child = null; o !== null; ) {
                if (e = o.alternate,
                e !== null && Ms(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling,
                o.sibling = n,
                n = o,
                o = e
            }
            rl(t, !0, n, null, i);
            break;
        case "together":
            rl(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function us(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function en(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    ur |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(T(153));
    if (t.child !== null) {
        for (e = t.child,
        n = _n(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = _n(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function px(e, t, n) {
    switch (t.tag) {
    case 3:
        ah(t),
        io();
        break;
    case 5:
        Dm(t);
        break;
    case 1:
        He(t.type) && Ts(t);
        break;
    case 4:
        su(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , o = t.memoizedProps.value;
        ne(zs, r._currentValue),
        r._currentValue = o;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (ne(ce, ce.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? lh(e, t, n) : (ne(ce, ce.current & 1),
            e = en(e, t, n),
            e !== null ? e.sibling : null);
        ne(ce, ce.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return ch(e, t, n);
            t.flags |= 128
        }
        if (o = t.memoizedState,
        o !== null && (o.rendering = null,
        o.tail = null,
        o.lastEffect = null),
        ne(ce, ce.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        ih(e, t, n)
    }
    return en(e, t, n)
}
var uh, ic, dh, fh;
uh = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
ic = function() {}
;
dh = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode,
        Zn(_t.current);
        var i = null;
        switch (n) {
        case "input":
            o = Pl(e, o),
            r = Pl(e, r),
            i = [];
            break;
        case "select":
            o = de({}, o, {
                value: void 0
            }),
            r = de({}, r, {
                value: void 0
            }),
            i = [];
            break;
        case "textarea":
            o = Tl(e, o),
            r = Tl(e, r),
            i = [];
            break;
        default:
            typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = js)
        }
        Ll(n, r);
        var s;
        n = null;
        for (u in o)
            if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                if (u === "style") {
                    var a = o[u];
                    for (s in a)
                        a.hasOwnProperty(s) && (n || (n = {}),
                        n[s] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Qo.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
        for (u in r) {
            var l = r[u];
            if (a = o != null ? o[u] : void 0,
            r.hasOwnProperty(u) && l !== a && (l != null || a != null))
                if (u === "style")
                    if (a) {
                        for (s in a)
                            !a.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}),
                            n[s] = "");
                        for (s in l)
                            l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}),
                            n[s] = l[s])
                    } else
                        n || (i || (i = []),
                        i.push(u, n)),
                        n = l;
                else
                    u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                    a = a ? a.__html : void 0,
                    l != null && a !== l && (i = i || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Qo.hasOwnProperty(u) ? (l != null && u === "onScroll" && oe("scroll", e),
                    i || a === l || (i = [])) : (i = i || []).push(u, l))
        }
        n && (i = i || []).push("style", n);
        var u = i;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
fh = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function Ro(e, t) {
    if (!ae)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function Re(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags & 14680064,
            r |= o.flags & 14680064,
            o.return = e,
            o = o.sibling;
    else
        for (o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags,
            r |= o.flags,
            o.return = e,
            o = o.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function mx(e, t, n) {
    var r = t.pendingProps;
    switch (Jc(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return Re(t),
        null;
    case 1:
        return He(t.type) && Rs(),
        Re(t),
        null;
    case 3:
        return r = t.stateNode,
        ao(),
        ie(Ve),
        ie(Le),
        lu(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (Bi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        St !== null && (pc(St),
        St = null))),
        ic(e, t),
        Re(t),
        null;
    case 5:
        au(t);
        var o = Zn(ii.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            dh(e, t, n, r, o),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(T(166));
                return Re(t),
                null
            }
            if (e = Zn(_t.current),
            Bi(t)) {
                r = t.stateNode,
                n = t.type;
                var i = t.memoizedProps;
                switch (r[zt] = t,
                r[ri] = i,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    oe("cancel", r),
                    oe("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    oe("load", r);
                    break;
                case "video":
                case "audio":
                    for (o = 0; o < Mo.length; o++)
                        oe(Mo[o], r);
                    break;
                case "source":
                    oe("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    oe("error", r),
                    oe("load", r);
                    break;
                case "details":
                    oe("toggle", r);
                    break;
                case "input":
                    cd(r, i),
                    oe("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!i.multiple
                    },
                    oe("invalid", r);
                    break;
                case "textarea":
                    dd(r, i),
                    oe("invalid", r)
                }
                Ll(n, i),
                o = null;
                for (var s in i)
                    if (i.hasOwnProperty(s)) {
                        var a = i[s];
                        s === "children" ? typeof a == "string" ? r.textContent !== a && (i.suppressHydrationWarning !== !0 && $i(r.textContent, a, e),
                        o = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && $i(r.textContent, a, e),
                        o = ["children", "" + a]) : Qo.hasOwnProperty(s) && a != null && s === "onScroll" && oe("scroll", r)
                    }
                switch (n) {
                case "input":
                    Li(r),
                    ud(r, i, !0);
                    break;
                case "textarea":
                    Li(r),
                    fd(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof i.onClick == "function" && (r.onclick = js)
                }
                r = o,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                s = o.nodeType === 9 ? o : o.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = $p(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
                    is: r.is
                }) : (e = s.createElement(n),
                n === "select" && (s = e,
                r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n),
                e[zt] = t,
                e[ri] = r,
                uh(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (s = zl(n, r),
                    n) {
                    case "dialog":
                        oe("cancel", e),
                        oe("close", e),
                        o = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        oe("load", e),
                        o = r;
                        break;
                    case "video":
                    case "audio":
                        for (o = 0; o < Mo.length; o++)
                            oe(Mo[o], e);
                        o = r;
                        break;
                    case "source":
                        oe("error", e),
                        o = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        oe("error", e),
                        oe("load", e),
                        o = r;
                        break;
                    case "details":
                        oe("toggle", e),
                        o = r;
                        break;
                    case "input":
                        cd(e, r),
                        o = Pl(e, r),
                        oe("invalid", e);
                        break;
                    case "option":
                        o = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        o = de({}, r, {
                            value: void 0
                        }),
                        oe("invalid", e);
                        break;
                    case "textarea":
                        dd(e, r),
                        o = Tl(e, r),
                        oe("invalid", e);
                        break;
                    default:
                        o = r
                    }
                    Ll(n, o),
                    a = o;
                    for (i in a)
                        if (a.hasOwnProperty(i)) {
                            var l = a[i];
                            i === "style" ? Up(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                            l != null && Bp(e, l)) : i === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Go(e, l) : typeof l == "number" && Go(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Qo.hasOwnProperty(i) ? l != null && i === "onScroll" && oe("scroll", e) : l != null && Ic(e, i, l, s))
                        }
                    switch (n) {
                    case "input":
                        Li(e),
                        ud(e, r, !1);
                        break;
                    case "textarea":
                        Li(e),
                        fd(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + In(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        i = r.value,
                        i != null ? Fr(e, !!r.multiple, i, !1) : r.defaultValue != null && Fr(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof o.onClick == "function" && (e.onclick = js)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return Re(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            fh(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(T(166));
            if (n = Zn(ii.current),
            Zn(_t.current),
            Bi(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[zt] = t,
                (i = r.nodeValue !== n) && (e = qe,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        $i(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && $i(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                i && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[zt] = t,
                t.stateNode = r
        }
        return Re(t),
        null;
    case 13:
        if (ie(ce),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (ae && Xe !== null && t.mode & 1 && !(t.flags & 128))
                Tm(),
                io(),
                t.flags |= 98560,
                i = !1;
            else if (i = Bi(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!i)
                        throw Error(T(318));
                    if (i = t.memoizedState,
                    i = i !== null ? i.dehydrated : null,
                    !i)
                        throw Error(T(317));
                    i[zt] = t
                } else
                    io(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                Re(t),
                i = !1
            } else
                St !== null && (pc(St),
                St = null),
                i = !0;
            if (!i)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || ce.current & 1 ? we === 0 && (we = 3) : wu())),
        t.updateQueue !== null && (t.flags |= 4),
        Re(t),
        null);
    case 4:
        return ao(),
        ic(e, t),
        e === null && ti(t.stateNode.containerInfo),
        Re(t),
        null;
    case 10:
        return ru(t.type._context),
        Re(t),
        null;
    case 17:
        return He(t.type) && Rs(),
        Re(t),
        null;
    case 19:
        if (ie(ce),
        i = t.memoizedState,
        i === null)
            return Re(t),
            null;
        if (r = (t.flags & 128) !== 0,
        s = i.rendering,
        s === null)
            if (r)
                Ro(i, !1);
            else {
                if (we !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (s = Ms(e),
                        s !== null) {
                            for (t.flags |= 128,
                            Ro(i, !1),
                            r = s.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                i = n,
                                e = r,
                                i.flags &= 14680066,
                                s = i.alternate,
                                s === null ? (i.childLanes = 0,
                                i.lanes = e,
                                i.child = null,
                                i.subtreeFlags = 0,
                                i.memoizedProps = null,
                                i.memoizedState = null,
                                i.updateQueue = null,
                                i.dependencies = null,
                                i.stateNode = null) : (i.childLanes = s.childLanes,
                                i.lanes = s.lanes,
                                i.child = s.child,
                                i.subtreeFlags = 0,
                                i.deletions = null,
                                i.memoizedProps = s.memoizedProps,
                                i.memoizedState = s.memoizedState,
                                i.updateQueue = s.updateQueue,
                                i.type = s.type,
                                e = s.dependencies,
                                i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return ne(ce, ce.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                i.tail !== null && me() > co && (t.flags |= 128,
                r = !0,
                Ro(i, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = Ms(s),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    Ro(i, !0),
                    i.tail === null && i.tailMode === "hidden" && !s.alternate && !ae)
                        return Re(t),
                        null
                } else
                    2 * me() - i.renderingStartTime > co && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    Ro(i, !1),
                    t.lanes = 4194304);
            i.isBackwards ? (s.sibling = t.child,
            t.child = s) : (n = i.last,
            n !== null ? n.sibling = s : t.child = s,
            i.last = s)
        }
        return i.tail !== null ? (t = i.tail,
        i.rendering = t,
        i.tail = t.sibling,
        i.renderingStartTime = me(),
        t.sibling = null,
        n = ce.current,
        ne(ce, r ? n & 1 | 2 : n & 1),
        t) : (Re(t),
        null);
    case 22:
    case 23:
        return xu(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? Ge & 1073741824 && (Re(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : Re(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(T(156, t.tag))
}
function hx(e, t) {
    switch (Jc(t),
    t.tag) {
    case 1:
        return He(t.type) && Rs(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return ao(),
        ie(Ve),
        ie(Le),
        lu(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return au(t),
        null;
    case 13:
        if (ie(ce),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(T(340));
            io()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return ie(ce),
        null;
    case 4:
        return ao(),
        null;
    case 10:
        return ru(t.type._context),
        null;
    case 22:
    case 23:
        return xu(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Vi = !1
  , Ae = !1
  , gx = typeof WeakSet == "function" ? WeakSet : Set
  , M = null;
function _r(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                pe(e, t, r)
            }
        else
            n.current = null
}
function sc(e, t, n) {
    try {
        n()
    } catch (r) {
        pe(e, t, r)
    }
}
var tf = !1;
function vx(e, t) {
    if (Ul = ks,
    e = vm(),
    qc(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var o = r.anchorOffset
                      , i = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        i.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var s = 0
                      , a = -1
                      , l = -1
                      , u = 0
                      , d = 0
                      , f = e
                      , g = null;
                    t: for (; ; ) {
                        for (var p; f !== n || o !== 0 && f.nodeType !== 3 || (a = s + o),
                        f !== i || r !== 0 && f.nodeType !== 3 || (l = s + r),
                        f.nodeType === 3 && (s += f.nodeValue.length),
                        (p = f.firstChild) !== null; )
                            g = f,
                            f = p;
                        for (; ; ) {
                            if (f === e)
                                break t;
                            if (g === n && ++u === o && (a = s),
                            g === i && ++d === r && (l = s),
                            (p = f.nextSibling) !== null)
                                break;
                            f = g,
                            g = f.parentNode
                        }
                        f = p
                    }
                    n = a === -1 || l === -1 ? null : {
                        start: a,
                        end: l
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (Vl = {
        focusedElem: e,
        selectionRange: n
    },
    ks = !1,
    M = t; M !== null; )
        if (t = M,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            M = e;
        else
            for (; M !== null; ) {
                t = M;
                try {
                    var S = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (S !== null) {
                                var m = S.memoizedProps
                                  , w = S.memoizedState
                                  , v = t.stateNode
                                  , h = v.getSnapshotBeforeUpdate(t.elementType === t.type ? m : gt(t.type, m), w);
                                v.__reactInternalSnapshotBeforeUpdate = h
                            }
                            break;
                        case 3:
                            var x = t.stateNode.containerInfo;
                            x.nodeType === 1 ? x.textContent = "" : x.nodeType === 9 && x.documentElement && x.removeChild(x.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(T(163))
                        }
                } catch (b) {
                    pe(t, t.return, b)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    M = e;
                    break
                }
                M = t.return
            }
    return S = tf,
    tf = !1,
    S
}
function Uo(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var i = o.destroy;
                o.destroy = void 0,
                i !== void 0 && sc(t, n, i)
            }
            o = o.next
        } while (o !== r)
    }
}
function aa(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function ac(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function ph(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    ph(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[zt],
    delete t[ri],
    delete t[Ql],
    delete t[Jy],
    delete t[ex])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function mh(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function nf(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || mh(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function lc(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = js));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (lc(e, t, n),
        e = e.sibling; e !== null; )
            lc(e, t, n),
            e = e.sibling
}
function cc(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (cc(e, t, n),
        e = e.sibling; e !== null; )
            cc(e, t, n),
            e = e.sibling
}
var Ce = null
  , wt = !1;
function fn(e, t, n) {
    for (n = n.child; n !== null; )
        hh(e, t, n),
        n = n.sibling
}
function hh(e, t, n) {
    if (Mt && typeof Mt.onCommitFiberUnmount == "function")
        try {
            Mt.onCommitFiberUnmount(Js, n)
        } catch {}
    switch (n.tag) {
    case 5:
        Ae || _r(n, t);
    case 6:
        var r = Ce
          , o = wt;
        Ce = null,
        fn(e, t, n),
        Ce = r,
        wt = o,
        Ce !== null && (wt ? (e = Ce,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ce.removeChild(n.stateNode));
        break;
    case 18:
        Ce !== null && (wt ? (e = Ce,
        n = n.stateNode,
        e.nodeType === 8 ? Xa(e.parentNode, n) : e.nodeType === 1 && Xa(e, n),
        Zo(e)) : Xa(Ce, n.stateNode));
        break;
    case 4:
        r = Ce,
        o = wt,
        Ce = n.stateNode.containerInfo,
        wt = !0,
        fn(e, t, n),
        Ce = r,
        wt = o;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!Ae && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            o = r = r.next;
            do {
                var i = o
                  , s = i.destroy;
                i = i.tag,
                s !== void 0 && (i & 2 || i & 4) && sc(n, t, s),
                o = o.next
            } while (o !== r)
        }
        fn(e, t, n);
        break;
    case 1:
        if (!Ae && (_r(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (a) {
                pe(n, t, a)
            }
        fn(e, t, n);
        break;
    case 21:
        fn(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (Ae = (r = Ae) || n.memoizedState !== null,
        fn(e, t, n),
        Ae = r) : fn(e, t, n);
        break;
    default:
        fn(e, t, n)
    }
}
function rf(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new gx),
        t.forEach(function(r) {
            var o = Nx.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(o, o))
        })
    }
}
function mt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var i = e
                  , s = t
                  , a = s;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                    case 5:
                        Ce = a.stateNode,
                        wt = !1;
                        break e;
                    case 3:
                        Ce = a.stateNode.containerInfo,
                        wt = !0;
                        break e;
                    case 4:
                        Ce = a.stateNode.containerInfo,
                        wt = !0;
                        break e
                    }
                    a = a.return
                }
                if (Ce === null)
                    throw Error(T(160));
                hh(i, s, o),
                Ce = null,
                wt = !1;
                var l = o.alternate;
                l !== null && (l.return = null),
                o.return = null
            } catch (u) {
                pe(o, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            gh(t, e),
            t = t.sibling
}
function gh(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (mt(t, e),
        jt(e),
        r & 4) {
            try {
                Uo(3, e, e.return),
                aa(3, e)
            } catch (m) {
                pe(e, e.return, m)
            }
            try {
                Uo(5, e, e.return)
            } catch (m) {
                pe(e, e.return, m)
            }
        }
        break;
    case 1:
        mt(t, e),
        jt(e),
        r & 512 && n !== null && _r(n, n.return);
        break;
    case 5:
        if (mt(t, e),
        jt(e),
        r & 512 && n !== null && _r(n, n.return),
        e.flags & 32) {
            var o = e.stateNode;
            try {
                Go(o, "")
            } catch (m) {
                pe(e, e.return, m)
            }
        }
        if (r & 4 && (o = e.stateNode,
        o != null)) {
            var i = e.memoizedProps
              , s = n !== null ? n.memoizedProps : i
              , a = e.type
              , l = e.updateQueue;
            if (e.updateQueue = null,
            l !== null)
                try {
                    a === "input" && i.type === "radio" && i.name != null && Ip(o, i),
                    zl(a, s);
                    var u = zl(a, i);
                    for (s = 0; s < l.length; s += 2) {
                        var d = l[s]
                          , f = l[s + 1];
                        d === "style" ? Up(o, f) : d === "dangerouslySetInnerHTML" ? Bp(o, f) : d === "children" ? Go(o, f) : Ic(o, d, f, u)
                    }
                    switch (a) {
                    case "input":
                        jl(o, i);
                        break;
                    case "textarea":
                        Fp(o, i);
                        break;
                    case "select":
                        var g = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!i.multiple;
                        var p = i.value;
                        p != null ? Fr(o, !!i.multiple, p, !1) : g !== !!i.multiple && (i.defaultValue != null ? Fr(o, !!i.multiple, i.defaultValue, !0) : Fr(o, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    o[ri] = i
                } catch (m) {
                    pe(e, e.return, m)
                }
        }
        break;
    case 6:
        if (mt(t, e),
        jt(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(T(162));
            o = e.stateNode,
            i = e.memoizedProps;
            try {
                o.nodeValue = i
            } catch (m) {
                pe(e, e.return, m)
            }
        }
        break;
    case 3:
        if (mt(t, e),
        jt(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                Zo(t.containerInfo)
            } catch (m) {
                pe(e, e.return, m)
            }
        break;
    case 4:
        mt(t, e),
        jt(e);
        break;
    case 13:
        mt(t, e),
        jt(e),
        o = e.child,
        o.flags & 8192 && (i = o.memoizedState !== null,
        o.stateNode.isHidden = i,
        !i || o.alternate !== null && o.alternate.memoizedState !== null || (vu = me())),
        r & 4 && rf(e);
        break;
    case 22:
        if (d = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (Ae = (u = Ae) || d,
        mt(t, e),
        Ae = u) : mt(t, e),
        jt(e),
        r & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !d && e.mode & 1)
                for (M = e,
                d = e.child; d !== null; ) {
                    for (f = M = d; M !== null; ) {
                        switch (g = M,
                        p = g.child,
                        g.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Uo(4, g, g.return);
                            break;
                        case 1:
                            _r(g, g.return);
                            var S = g.stateNode;
                            if (typeof S.componentWillUnmount == "function") {
                                r = g,
                                n = g.return;
                                try {
                                    t = r,
                                    S.props = t.memoizedProps,
                                    S.state = t.memoizedState,
                                    S.componentWillUnmount()
                                } catch (m) {
                                    pe(r, n, m)
                                }
                            }
                            break;
                        case 5:
                            _r(g, g.return);
                            break;
                        case 22:
                            if (g.memoizedState !== null) {
                                sf(f);
                                continue
                            }
                        }
                        p !== null ? (p.return = g,
                        M = p) : sf(f)
                    }
                    d = d.sibling
                }
            e: for (d = null,
            f = e; ; ) {
                if (f.tag === 5) {
                    if (d === null) {
                        d = f;
                        try {
                            o = f.stateNode,
                            u ? (i = o.style,
                            typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (a = f.stateNode,
                            l = f.memoizedProps.style,
                            s = l != null && l.hasOwnProperty("display") ? l.display : null,
                            a.style.display = Wp("display", s))
                        } catch (m) {
                            pe(e, e.return, m)
                        }
                    }
                } else if (f.tag === 6) {
                    if (d === null)
                        try {
                            f.stateNode.nodeValue = u ? "" : f.memoizedProps
                        } catch (m) {
                            pe(e, e.return, m)
                        }
                } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                    f.child.return = f,
                    f = f.child;
                    continue
                }
                if (f === e)
                    break e;
                for (; f.sibling === null; ) {
                    if (f.return === null || f.return === e)
                        break e;
                    d === f && (d = null),
                    f = f.return
                }
                d === f && (d = null),
                f.sibling.return = f.return,
                f = f.sibling
            }
        }
        break;
    case 19:
        mt(t, e),
        jt(e),
        r & 4 && rf(e);
        break;
    case 21:
        break;
    default:
        mt(t, e),
        jt(e)
    }
}
function jt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (mh(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(T(160))
            }
            switch (r.tag) {
            case 5:
                var o = r.stateNode;
                r.flags & 32 && (Go(o, ""),
                r.flags &= -33);
                var i = nf(e);
                cc(e, i, o);
                break;
            case 3:
            case 4:
                var s = r.stateNode.containerInfo
                  , a = nf(e);
                lc(e, a, s);
                break;
            default:
                throw Error(T(161))
            }
        } catch (l) {
            pe(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function yx(e, t, n) {
    M = e,
    vh(e)
}
function vh(e, t, n) {
    for (var r = (e.mode & 1) !== 0; M !== null; ) {
        var o = M
          , i = o.child;
        if (o.tag === 22 && r) {
            var s = o.memoizedState !== null || Vi;
            if (!s) {
                var a = o.alternate
                  , l = a !== null && a.memoizedState !== null || Ae;
                a = Vi;
                var u = Ae;
                if (Vi = s,
                (Ae = l) && !u)
                    for (M = o; M !== null; )
                        s = M,
                        l = s.child,
                        s.tag === 22 && s.memoizedState !== null ? af(o) : l !== null ? (l.return = s,
                        M = l) : af(o);
                for (; i !== null; )
                    M = i,
                    vh(i),
                    i = i.sibling;
                M = o,
                Vi = a,
                Ae = u
            }
            of(e)
        } else
            o.subtreeFlags & 8772 && i !== null ? (i.return = o,
            M = i) : of(e)
    }
}
function of(e) {
    for (; M !== null; ) {
        var t = M;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Ae || aa(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Ae)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : gt(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = t.updateQueue;
                        i !== null && Wd(t, i, r);
                        break;
                    case 3:
                        var s = t.updateQueue;
                        if (s !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            Wd(t, s, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var l = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                l.autoFocus && n.focus();
                                break;
                            case "img":
                                l.src && (n.src = l.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var d = u.memoizedState;
                                if (d !== null) {
                                    var f = d.dehydrated;
                                    f !== null && Zo(f)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(T(163))
                    }
                Ae || t.flags & 512 && ac(t)
            } catch (g) {
                pe(t, t.return, g)
            }
        }
        if (t === e) {
            M = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            M = n;
            break
        }
        M = t.return
    }
}
function sf(e) {
    for (; M !== null; ) {
        var t = M;
        if (t === e) {
            M = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            M = n;
            break
        }
        M = t.return
    }
}
function af(e) {
    for (; M !== null; ) {
        var t = M;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    aa(4, t)
                } catch (l) {
                    pe(t, n, l)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var o = t.return;
                    try {
                        r.componentDidMount()
                    } catch (l) {
                        pe(t, o, l)
                    }
                }
                var i = t.return;
                try {
                    ac(t)
                } catch (l) {
                    pe(t, i, l)
                }
                break;
            case 5:
                var s = t.return;
                try {
                    ac(t)
                } catch (l) {
                    pe(t, s, l)
                }
            }
        } catch (l) {
            pe(t, t.return, l)
        }
        if (t === e) {
            M = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return,
            M = a;
            break
        }
        M = t.return
    }
}
var xx = Math.ceil
  , Fs = on.ReactCurrentDispatcher
  , hu = on.ReactCurrentOwner
  , at = on.ReactCurrentBatchConfig
  , q = 0
  , be = null
  , ge = null
  , Ee = 0
  , Ge = 0
  , Ir = Un(0)
  , we = 0
  , ci = null
  , ur = 0
  , la = 0
  , gu = 0
  , Vo = null
  , We = null
  , vu = 0
  , co = 1 / 0
  , Ht = null
  , $s = !1
  , uc = null
  , Dn = null
  , Hi = !1
  , jn = null
  , Bs = 0
  , Ho = 0
  , dc = null
  , ds = -1
  , fs = 0;
function _e() {
    return q & 6 ? me() : ds !== -1 ? ds : ds = me()
}
function Mn(e) {
    return e.mode & 1 ? q & 2 && Ee !== 0 ? Ee & -Ee : nx.transition !== null ? (fs === 0 && (fs = tm()),
    fs) : (e = ee,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : lm(e.type)),
    e) : 1
}
function Ct(e, t, n, r) {
    if (50 < Ho)
        throw Ho = 0,
        dc = null,
        Error(T(185));
    yi(e, n, r),
    (!(q & 2) || e !== be) && (e === be && (!(q & 2) && (la |= n),
    we === 4 && Sn(e, Ee)),
    Ke(e, r),
    n === 1 && q === 0 && !(t.mode & 1) && (co = me() + 500,
    oa && Vn()))
}
function Ke(e, t) {
    var n = e.callbackNode;
    ny(e, t);
    var r = Es(e, e === be ? Ee : 0);
    if (r === 0)
        n !== null && hd(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && hd(n),
        t === 1)
            e.tag === 0 ? tx(lf.bind(null, e)) : Pm(lf.bind(null, e)),
            qy(function() {
                !(q & 6) && Vn()
            }),
            n = null;
        else {
            switch (nm(r)) {
            case 1:
                n = Uc;
                break;
            case 4:
                n = Jp;
                break;
            case 16:
                n = Cs;
                break;
            case 536870912:
                n = em;
                break;
            default:
                n = Cs
            }
            n = kh(n, yh.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function yh(e, t) {
    if (ds = -1,
    fs = 0,
    q & 6)
        throw Error(T(327));
    var n = e.callbackNode;
    if (Vr() && e.callbackNode !== n)
        return null;
    var r = Es(e, e === be ? Ee : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = Ws(e, r);
    else {
        t = r;
        var o = q;
        q |= 2;
        var i = wh();
        (be !== e || Ee !== t) && (Ht = null,
        co = me() + 500,
        ir(e, t));
        do
            try {
                bx();
                break
            } catch (a) {
                xh(e, a)
            }
        while (!0);
        nu(),
        Fs.current = i,
        q = o,
        ge !== null ? t = 0 : (be = null,
        Ee = 0,
        t = we)
    }
    if (t !== 0) {
        if (t === 2 && (o = Il(e),
        o !== 0 && (r = o,
        t = fc(e, o))),
        t === 1)
            throw n = ci,
            ir(e, 0),
            Sn(e, r),
            Ke(e, me()),
            n;
        if (t === 6)
            Sn(e, r);
        else {
            if (o = e.current.alternate,
            !(r & 30) && !wx(o) && (t = Ws(e, r),
            t === 2 && (i = Il(e),
            i !== 0 && (r = i,
            t = fc(e, i))),
            t === 1))
                throw n = ci,
                ir(e, 0),
                Sn(e, r),
                Ke(e, me()),
                n;
            switch (e.finishedWork = o,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(T(345));
            case 2:
                Yn(e, We, Ht);
                break;
            case 3:
                if (Sn(e, r),
                (r & 130023424) === r && (t = vu + 500 - me(),
                10 < t)) {
                    if (Es(e, 0) !== 0)
                        break;
                    if (o = e.suspendedLanes,
                    (o & r) !== r) {
                        _e(),
                        e.pingedLanes |= e.suspendedLanes & o;
                        break
                    }
                    e.timeoutHandle = Kl(Yn.bind(null, e, We, Ht), t);
                    break
                }
                Yn(e, We, Ht);
                break;
            case 4:
                if (Sn(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                o = -1; 0 < r; ) {
                    var s = 31 - bt(r);
                    i = 1 << s,
                    s = t[s],
                    s > o && (o = s),
                    r &= ~i
                }
                if (r = o,
                r = me() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * xx(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = Kl(Yn.bind(null, e, We, Ht), r);
                    break
                }
                Yn(e, We, Ht);
                break;
            case 5:
                Yn(e, We, Ht);
                break;
            default:
                throw Error(T(329))
            }
        }
    }
    return Ke(e, me()),
    e.callbackNode === n ? yh.bind(null, e) : null
}
function fc(e, t) {
    var n = Vo;
    return e.current.memoizedState.isDehydrated && (ir(e, t).flags |= 256),
    e = Ws(e, t),
    e !== 2 && (t = We,
    We = n,
    t !== null && pc(t)),
    e
}
function pc(e) {
    We === null ? We = e : We.push.apply(We, e)
}
function wx(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r]
                      , i = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!Et(i(), o))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function Sn(e, t) {
    for (t &= ~gu,
    t &= ~la,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - bt(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function lf(e) {
    if (q & 6)
        throw Error(T(327));
    Vr();
    var t = Es(e, 0);
    if (!(t & 1))
        return Ke(e, me()),
        null;
    var n = Ws(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Il(e);
        r !== 0 && (t = r,
        n = fc(e, r))
    }
    if (n === 1)
        throw n = ci,
        ir(e, 0),
        Sn(e, t),
        Ke(e, me()),
        n;
    if (n === 6)
        throw Error(T(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    Yn(e, We, Ht),
    Ke(e, me()),
    null
}
function yu(e, t) {
    var n = q;
    q |= 1;
    try {
        return e(t)
    } finally {
        q = n,
        q === 0 && (co = me() + 500,
        oa && Vn())
    }
}
function dr(e) {
    jn !== null && jn.tag === 0 && !(q & 6) && Vr();
    var t = q;
    q |= 1;
    var n = at.transition
      , r = ee;
    try {
        if (at.transition = null,
        ee = 1,
        e)
            return e()
    } finally {
        ee = r,
        at.transition = n,
        q = t,
        !(q & 6) && Vn()
    }
}
function xu() {
    Ge = Ir.current,
    ie(Ir)
}
function ir(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    Xy(n)),
    ge !== null)
        for (n = ge.return; n !== null; ) {
            var r = n;
            switch (Jc(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && Rs();
                break;
            case 3:
                ao(),
                ie(Ve),
                ie(Le),
                lu();
                break;
            case 5:
                au(r);
                break;
            case 4:
                ao();
                break;
            case 13:
                ie(ce);
                break;
            case 19:
                ie(ce);
                break;
            case 10:
                ru(r.type._context);
                break;
            case 22:
            case 23:
                xu()
            }
            n = n.return
        }
    if (be = e,
    ge = e = _n(e.current, null),
    Ee = Ge = t,
    we = 0,
    ci = null,
    gu = la = ur = 0,
    We = Vo = null,
    qn !== null) {
        for (t = 0; t < qn.length; t++)
            if (n = qn[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var o = r.next
                  , i = n.pending;
                if (i !== null) {
                    var s = i.next;
                    i.next = o,
                    r.next = s
                }
                n.pending = r
            }
        qn = null
    }
    return e
}
function xh(e, t) {
    do {
        var n = ge;
        try {
            if (nu(),
            ls.current = Is,
            _s) {
                for (var r = ue.memoizedState; r !== null; ) {
                    var o = r.queue;
                    o !== null && (o.pending = null),
                    r = r.next
                }
                _s = !1
            }
            if (cr = 0,
            Se = xe = ue = null,
            Wo = !1,
            si = 0,
            hu.current = null,
            n === null || n.return === null) {
                we = 1,
                ci = t,
                ge = null;
                break
            }
            e: {
                var i = e
                  , s = n.return
                  , a = n
                  , l = t;
                if (t = Ee,
                a.flags |= 32768,
                l !== null && typeof l == "object" && typeof l.then == "function") {
                    var u = l
                      , d = a
                      , f = d.tag;
                    if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var g = d.alternate;
                        g ? (d.updateQueue = g.updateQueue,
                        d.memoizedState = g.memoizedState,
                        d.lanes = g.lanes) : (d.updateQueue = null,
                        d.memoizedState = null)
                    }
                    var p = Gd(s);
                    if (p !== null) {
                        p.flags &= -257,
                        Yd(p, s, a, i, t),
                        p.mode & 1 && Qd(i, u, t),
                        t = p,
                        l = u;
                        var S = t.updateQueue;
                        if (S === null) {
                            var m = new Set;
                            m.add(l),
                            t.updateQueue = m
                        } else
                            S.add(l);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Qd(i, u, t),
                            wu();
                            break e
                        }
                        l = Error(T(426))
                    }
                } else if (ae && a.mode & 1) {
                    var w = Gd(s);
                    if (w !== null) {
                        !(w.flags & 65536) && (w.flags |= 256),
                        Yd(w, s, a, i, t),
                        eu(lo(l, a));
                        break e
                    }
                }
                i = l = lo(l, a),
                we !== 4 && (we = 2),
                Vo === null ? Vo = [i] : Vo.push(i),
                i = s;
                do {
                    switch (i.tag) {
                    case 3:
                        i.flags |= 65536,
                        t &= -t,
                        i.lanes |= t;
                        var v = nh(i, l, t);
                        Bd(i, v);
                        break e;
                    case 1:
                        a = l;
                        var h = i.type
                          , x = i.stateNode;
                        if (!(i.flags & 128) && (typeof h.getDerivedStateFromError == "function" || x !== null && typeof x.componentDidCatch == "function" && (Dn === null || !Dn.has(x)))) {
                            i.flags |= 65536,
                            t &= -t,
                            i.lanes |= t;
                            var b = rh(i, a, t);
                            Bd(i, b);
                            break e
                        }
                    }
                    i = i.return
                } while (i !== null)
            }
            bh(n)
        } catch (C) {
            t = C,
            ge === n && n !== null && (ge = n = n.return);
            continue
        }
        break
    } while (!0)
}
function wh() {
    var e = Fs.current;
    return Fs.current = Is,
    e === null ? Is : e
}
function wu() {
    (we === 0 || we === 3 || we === 2) && (we = 4),
    be === null || !(ur & 268435455) && !(la & 268435455) || Sn(be, Ee)
}
function Ws(e, t) {
    var n = q;
    q |= 2;
    var r = wh();
    (be !== e || Ee !== t) && (Ht = null,
    ir(e, t));
    do
        try {
            Sx();
            break
        } catch (o) {
            xh(e, o)
        }
    while (!0);
    if (nu(),
    q = n,
    Fs.current = r,
    ge !== null)
        throw Error(T(261));
    return be = null,
    Ee = 0,
    we
}
function Sx() {
    for (; ge !== null; )
        Sh(ge)
}
function bx() {
    for (; ge !== null && !Q0(); )
        Sh(ge)
}
function Sh(e) {
    var t = Eh(e.alternate, e, Ge);
    e.memoizedProps = e.pendingProps,
    t === null ? bh(e) : ge = t,
    hu.current = null
}
function bh(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = hx(n, t),
            n !== null) {
                n.flags &= 32767,
                ge = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                we = 6,
                ge = null;
                return
            }
        } else if (n = mx(n, t, Ge),
        n !== null) {
            ge = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            ge = t;
            return
        }
        ge = t = e
    } while (t !== null);
    we === 0 && (we = 5)
}
function Yn(e, t, n) {
    var r = ee
      , o = at.transition;
    try {
        at.transition = null,
        ee = 1,
        Cx(e, t, n, r)
    } finally {
        at.transition = o,
        ee = r
    }
    return null
}
function Cx(e, t, n, r) {
    do
        Vr();
    while (jn !== null);
    if (q & 6)
        throw Error(T(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(T(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (ry(e, i),
    e === be && (ge = be = null,
    Ee = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Hi || (Hi = !0,
    kh(Cs, function() {
        return Vr(),
        null
    })),
    i = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || i) {
        i = at.transition,
        at.transition = null;
        var s = ee;
        ee = 1;
        var a = q;
        q |= 4,
        hu.current = null,
        vx(e, n),
        gh(n, e),
        Uy(Vl),
        ks = !!Ul,
        Vl = Ul = null,
        e.current = n,
        yx(n),
        G0(),
        q = a,
        ee = s,
        at.transition = i
    } else
        e.current = n;
    if (Hi && (Hi = !1,
    jn = e,
    Bs = o),
    i = e.pendingLanes,
    i === 0 && (Dn = null),
    q0(n.stateNode),
    Ke(e, me()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            o = t[n],
            r(o.value, {
                componentStack: o.stack,
                digest: o.digest
            });
    if ($s)
        throw $s = !1,
        e = uc,
        uc = null,
        e;
    return Bs & 1 && e.tag !== 0 && Vr(),
    i = e.pendingLanes,
    i & 1 ? e === dc ? Ho++ : (Ho = 0,
    dc = e) : Ho = 0,
    Vn(),
    null
}
function Vr() {
    if (jn !== null) {
        var e = nm(Bs)
          , t = at.transition
          , n = ee;
        try {
            if (at.transition = null,
            ee = 16 > e ? 16 : e,
            jn === null)
                var r = !1;
            else {
                if (e = jn,
                jn = null,
                Bs = 0,
                q & 6)
                    throw Error(T(331));
                var o = q;
                for (q |= 4,
                M = e.current; M !== null; ) {
                    var i = M
                      , s = i.child;
                    if (M.flags & 16) {
                        var a = i.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var u = a[l];
                                for (M = u; M !== null; ) {
                                    var d = M;
                                    switch (d.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Uo(8, d, i)
                                    }
                                    var f = d.child;
                                    if (f !== null)
                                        f.return = d,
                                        M = f;
                                    else
                                        for (; M !== null; ) {
                                            d = M;
                                            var g = d.sibling
                                              , p = d.return;
                                            if (ph(d),
                                            d === u) {
                                                M = null;
                                                break
                                            }
                                            if (g !== null) {
                                                g.return = p,
                                                M = g;
                                                break
                                            }
                                            M = p
                                        }
                                }
                            }
                            var S = i.alternate;
                            if (S !== null) {
                                var m = S.child;
                                if (m !== null) {
                                    S.child = null;
                                    do {
                                        var w = m.sibling;
                                        m.sibling = null,
                                        m = w
                                    } while (m !== null)
                                }
                            }
                            M = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && s !== null)
                        s.return = i,
                        M = s;
                    else
                        e: for (; M !== null; ) {
                            if (i = M,
                            i.flags & 2048)
                                switch (i.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Uo(9, i, i.return)
                                }
                            var v = i.sibling;
                            if (v !== null) {
                                v.return = i.return,
                                M = v;
                                break e
                            }
                            M = i.return
                        }
                }
                var h = e.current;
                for (M = h; M !== null; ) {
                    s = M;
                    var x = s.child;
                    if (s.subtreeFlags & 2064 && x !== null)
                        x.return = s,
                        M = x;
                    else
                        e: for (s = h; M !== null; ) {
                            if (a = M,
                            a.flags & 2048)
                                try {
                                    switch (a.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        aa(9, a)
                                    }
                                } catch (C) {
                                    pe(a, a.return, C)
                                }
                            if (a === s) {
                                M = null;
                                break e
                            }
                            var b = a.sibling;
                            if (b !== null) {
                                b.return = a.return,
                                M = b;
                                break e
                            }
                            M = a.return
                        }
                }
                if (q = o,
                Vn(),
                Mt && typeof Mt.onPostCommitFiberRoot == "function")
                    try {
                        Mt.onPostCommitFiberRoot(Js, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            ee = n,
            at.transition = t
        }
    }
    return !1
}
function cf(e, t, n) {
    t = lo(n, t),
    t = nh(e, t, 1),
    e = On(e, t, 1),
    t = _e(),
    e !== null && (yi(e, 1, t),
    Ke(e, t))
}
function pe(e, t, n) {
    if (e.tag === 3)
        cf(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                cf(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Dn === null || !Dn.has(r))) {
                    e = lo(n, e),
                    e = rh(t, e, 1),
                    t = On(t, e, 1),
                    e = _e(),
                    t !== null && (yi(t, 1, e),
                    Ke(t, e));
                    break
                }
            }
            t = t.return
        }
}
function Ex(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = _e(),
    e.pingedLanes |= e.suspendedLanes & n,
    be === e && (Ee & n) === n && (we === 4 || we === 3 && (Ee & 130023424) === Ee && 500 > me() - vu ? ir(e, 0) : gu |= n),
    Ke(e, t)
}
function Ch(e, t) {
    t === 0 && (e.mode & 1 ? (t = Di,
    Di <<= 1,
    !(Di & 130023424) && (Di = 4194304)) : t = 1);
    var n = _e();
    e = Jt(e, t),
    e !== null && (yi(e, t, n),
    Ke(e, n))
}
function kx(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    Ch(e, n)
}
function Nx(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(T(314))
    }
    r !== null && r.delete(t),
    Ch(e, n)
}
var Eh;
Eh = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Ve.current)
            Ue = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return Ue = !1,
                px(e, t, n);
            Ue = !!(e.flags & 131072)
        }
    else
        Ue = !1,
        ae && t.flags & 1048576 && jm(t, Ls, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        us(e, t),
        e = t.pendingProps;
        var o = oo(t, Le.current);
        Ur(t, n),
        o = uu(null, t, r, e, o, n);
        var i = du();
        return t.flags |= 1,
        typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        He(r) ? (i = !0,
        Ts(t)) : i = !1,
        t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null,
        iu(t),
        o.updater = sa,
        t.stateNode = o,
        o._reactInternals = t,
        Jl(t, r, e, n),
        t = nc(null, t, r, !0, i, n)) : (t.tag = 0,
        ae && i && Zc(t),
        Oe(null, t, o, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (us(e, t),
            e = t.pendingProps,
            o = r._init,
            r = o(r._payload),
            t.type = r,
            o = t.tag = jx(r),
            e = gt(r, e),
            o) {
            case 0:
                t = tc(null, t, r, e, n);
                break e;
            case 1:
                t = Zd(null, t, r, e, n);
                break e;
            case 11:
                t = Xd(null, t, r, e, n);
                break e;
            case 14:
                t = qd(null, t, r, gt(r.type, e), n);
                break e
            }
            throw Error(T(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : gt(r, o),
        tc(e, t, r, o, n);
    case 1:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : gt(r, o),
        Zd(e, t, r, o, n);
    case 3:
        e: {
            if (ah(t),
            e === null)
                throw Error(T(387));
            r = t.pendingProps,
            i = t.memoizedState,
            o = i.element,
            Om(e, t),
            Ds(t, r, null, n);
            var s = t.memoizedState;
            if (r = s.element,
            i.isDehydrated)
                if (i = {
                    element: r,
                    isDehydrated: !1,
                    cache: s.cache,
                    pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                    transitions: s.transitions
                },
                t.updateQueue.baseState = i,
                t.memoizedState = i,
                t.flags & 256) {
                    o = lo(Error(T(423)), t),
                    t = Jd(e, t, r, n, o);
                    break e
                } else if (r !== o) {
                    o = lo(Error(T(424)), t),
                    t = Jd(e, t, r, n, o);
                    break e
                } else
                    for (Xe = zn(t.stateNode.containerInfo.firstChild),
                    qe = t,
                    ae = !0,
                    St = null,
                    n = Lm(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (io(),
                r === o) {
                    t = en(e, t, n);
                    break e
                }
                Oe(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return Dm(t),
        e === null && Xl(t),
        r = t.type,
        o = t.pendingProps,
        i = e !== null ? e.memoizedProps : null,
        s = o.children,
        Hl(r, o) ? s = null : i !== null && Hl(r, i) && (t.flags |= 32),
        sh(e, t),
        Oe(e, t, s, n),
        t.child;
    case 6:
        return e === null && Xl(t),
        null;
    case 13:
        return lh(e, t, n);
    case 4:
        return su(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = so(t, null, r, n) : Oe(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : gt(r, o),
        Xd(e, t, r, o, n);
    case 7:
        return Oe(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return Oe(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return Oe(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            o = t.pendingProps,
            i = t.memoizedProps,
            s = o.value,
            ne(zs, r._currentValue),
            r._currentValue = s,
            i !== null)
                if (Et(i.value, s)) {
                    if (i.children === o.children && !Ve.current) {
                        t = en(e, t, n);
                        break e
                    }
                } else
                    for (i = t.child,
                    i !== null && (i.return = t); i !== null; ) {
                        var a = i.dependencies;
                        if (a !== null) {
                            s = i.child;
                            for (var l = a.firstContext; l !== null; ) {
                                if (l.context === r) {
                                    if (i.tag === 1) {
                                        l = Xt(-1, n & -n),
                                        l.tag = 2;
                                        var u = i.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var d = u.pending;
                                            d === null ? l.next = l : (l.next = d.next,
                                            d.next = l),
                                            u.pending = l
                                        }
                                    }
                                    i.lanes |= n,
                                    l = i.alternate,
                                    l !== null && (l.lanes |= n),
                                    ql(i.return, n, t),
                                    a.lanes |= n;
                                    break
                                }
                                l = l.next
                            }
                        } else if (i.tag === 10)
                            s = i.type === t.type ? null : i.child;
                        else if (i.tag === 18) {
                            if (s = i.return,
                            s === null)
                                throw Error(T(341));
                            s.lanes |= n,
                            a = s.alternate,
                            a !== null && (a.lanes |= n),
                            ql(s, n, t),
                            s = i.sibling
                        } else
                            s = i.child;
                        if (s !== null)
                            s.return = i;
                        else
                            for (s = i; s !== null; ) {
                                if (s === t) {
                                    s = null;
                                    break
                                }
                                if (i = s.sibling,
                                i !== null) {
                                    i.return = s.return,
                                    s = i;
                                    break
                                }
                                s = s.return
                            }
                        i = s
                    }
            Oe(e, t, o.children, n),
            t = t.child
        }
        return t;
    case 9:
        return o = t.type,
        r = t.pendingProps.children,
        Ur(t, n),
        o = ct(o),
        r = r(o),
        t.flags |= 1,
        Oe(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        o = gt(r, t.pendingProps),
        o = gt(r.type, o),
        qd(e, t, r, o, n);
    case 15:
        return oh(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : gt(r, o),
        us(e, t),
        t.tag = 1,
        He(r) ? (e = !0,
        Ts(t)) : e = !1,
        Ur(t, n),
        th(t, r, o),
        Jl(t, r, o, n),
        nc(null, t, r, !0, e, n);
    case 19:
        return ch(e, t, n);
    case 22:
        return ih(e, t, n)
    }
    throw Error(T(156, t.tag))
}
;
function kh(e, t) {
    return Zp(e, t)
}
function Px(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function st(e, t, n, r) {
    return new Px(e,t,n,r)
}
function Su(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function jx(e) {
    if (typeof e == "function")
        return Su(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === $c)
            return 11;
        if (e === Bc)
            return 14
    }
    return 2
}
function _n(e, t) {
    var n = e.alternate;
    return n === null ? (n = st(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function ps(e, t, n, r, o, i) {
    var s = 2;
    if (r = e,
    typeof e == "function")
        Su(e) && (s = 1);
    else if (typeof e == "string")
        s = 5;
    else
        e: switch (e) {
        case jr:
            return sr(n.children, o, i, t);
        case Fc:
            s = 8,
            o |= 8;
            break;
        case Cl:
            return e = st(12, n, t, o | 2),
            e.elementType = Cl,
            e.lanes = i,
            e;
        case El:
            return e = st(13, n, t, o),
            e.elementType = El,
            e.lanes = i,
            e;
        case kl:
            return e = st(19, n, t, o),
            e.elementType = kl,
            e.lanes = i,
            e;
        case Dp:
            return ca(n, o, i, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case zp:
                    s = 10;
                    break e;
                case Op:
                    s = 9;
                    break e;
                case $c:
                    s = 11;
                    break e;
                case Bc:
                    s = 14;
                    break e;
                case yn:
                    s = 16,
                    r = null;
                    break e
                }
            throw Error(T(130, e == null ? e : typeof e, ""))
        }
    return t = st(s, n, t, o),
    t.elementType = e,
    t.type = r,
    t.lanes = i,
    t
}
function sr(e, t, n, r) {
    return e = st(7, e, r, t),
    e.lanes = n,
    e
}
function ca(e, t, n, r) {
    return e = st(22, e, r, t),
    e.elementType = Dp,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function ol(e, t, n) {
    return e = st(6, e, null, t),
    e.lanes = n,
    e
}
function il(e, t, n) {
    return t = st(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function Rx(e, t, n, r, o) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = Fa(0),
    this.expirationTimes = Fa(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = Fa(0),
    this.identifierPrefix = r,
    this.onRecoverableError = o,
    this.mutableSourceEagerHydrationData = null
}
function bu(e, t, n, r, o, i, s, a, l) {
    return e = new Rx(e,t,n,a,l),
    t === 1 ? (t = 1,
    i === !0 && (t |= 8)) : t = 0,
    i = st(3, null, null, t),
    e.current = i,
    i.stateNode = e,
    i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    iu(i),
    e
}
function Tx(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Pr,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function Nh(e) {
    if (!e)
        return Fn;
    e = e._reactInternals;
    e: {
        if (gr(e) !== e || e.tag !== 1)
            throw Error(T(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (He(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(T(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (He(n))
            return Nm(e, n, t)
    }
    return t
}
function Ph(e, t, n, r, o, i, s, a, l) {
    return e = bu(n, r, !0, e, o, i, s, a, l),
    e.context = Nh(null),
    n = e.current,
    r = _e(),
    o = Mn(n),
    i = Xt(r, o),
    i.callback = t ?? null,
    On(n, i, o),
    e.current.lanes = o,
    yi(e, o, r),
    Ke(e, r),
    e
}
function ua(e, t, n, r) {
    var o = t.current
      , i = _e()
      , s = Mn(o);
    return n = Nh(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = Xt(i, s),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = On(o, t, s),
    e !== null && (Ct(e, o, s, i),
    as(e, o, s)),
    s
}
function Us(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function uf(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Cu(e, t) {
    uf(e, t),
    (e = e.alternate) && uf(e, t)
}
function Ax() {
    return null
}
var jh = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Eu(e) {
    this._internalRoot = e
}
da.prototype.render = Eu.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(T(409));
    ua(e, t, null, null)
}
;
da.prototype.unmount = Eu.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        dr(function() {
            ua(null, e, null, null)
        }),
        t[Zt] = null
    }
}
;
function da(e) {
    this._internalRoot = e
}
da.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = im();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < wn.length && t !== 0 && t < wn[n].priority; n++)
            ;
        wn.splice(n, 0, e),
        n === 0 && am(e)
    }
}
;
function ku(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function fa(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function df() {}
function Lx(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var u = Us(s);
                i.call(u)
            }
        }
        var s = Ph(t, r, e, 0, null, !1, !1, "", df);
        return e._reactRootContainer = s,
        e[Zt] = s.current,
        ti(e.nodeType === 8 ? e.parentNode : e),
        dr(),
        s
    }
    for (; o = e.lastChild; )
        e.removeChild(o);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var u = Us(l);
            a.call(u)
        }
    }
    var l = bu(e, 0, !1, null, null, !1, !1, "", df);
    return e._reactRootContainer = l,
    e[Zt] = l.current,
    ti(e.nodeType === 8 ? e.parentNode : e),
    dr(function() {
        ua(t, l, n, r)
    }),
    l
}
function pa(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
        var s = i;
        if (typeof o == "function") {
            var a = o;
            o = function() {
                var l = Us(s);
                a.call(l)
            }
        }
        ua(t, s, e, o)
    } else
        s = Lx(n, t, e, o, r);
    return Us(s)
}
rm = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = Do(t.pendingLanes);
            n !== 0 && (Vc(t, n | 1),
            Ke(t, me()),
            !(q & 6) && (co = me() + 500,
            Vn()))
        }
        break;
    case 13:
        dr(function() {
            var r = Jt(e, 1);
            if (r !== null) {
                var o = _e();
                Ct(r, e, 1, o)
            }
        }),
        Cu(e, 1)
    }
}
;
Hc = function(e) {
    if (e.tag === 13) {
        var t = Jt(e, 134217728);
        if (t !== null) {
            var n = _e();
            Ct(t, e, 134217728, n)
        }
        Cu(e, 134217728)
    }
}
;
om = function(e) {
    if (e.tag === 13) {
        var t = Mn(e)
          , n = Jt(e, t);
        if (n !== null) {
            var r = _e();
            Ct(n, e, t, r)
        }
        Cu(e, t)
    }
}
;
im = function() {
    return ee
}
;
sm = function(e, t) {
    var n = ee;
    try {
        return ee = e,
        t()
    } finally {
        ee = n
    }
}
;
Dl = function(e, t, n) {
    switch (t) {
    case "input":
        if (jl(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var o = ra(r);
                    if (!o)
                        throw Error(T(90));
                    _p(r),
                    jl(r, o)
                }
            }
        }
        break;
    case "textarea":
        Fp(e, n);
        break;
    case "select":
        t = n.value,
        t != null && Fr(e, !!n.multiple, t, !1)
    }
}
;
Kp = yu;
Qp = dr;
var zx = {
    usingClientEntryPoint: !1,
    Events: [wi, Lr, ra, Vp, Hp, yu]
}
  , To = {
    findFiberByHostInstance: Xn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , Ox = {
    bundleType: To.bundleType,
    version: To.version,
    rendererPackageName: To.rendererPackageName,
    rendererConfig: To.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: on.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = Xp(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: To.findFiberByHostInstance || Ax,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ki = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ki.isDisabled && Ki.supportsFiber)
        try {
            Js = Ki.inject(Ox),
            Mt = Ki
        } catch {}
}
et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zx;
et.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ku(t))
        throw Error(T(200));
    return Tx(e, t, null, n)
}
;
et.createRoot = function(e, t) {
    if (!ku(e))
        throw Error(T(299));
    var n = !1
      , r = ""
      , o = jh;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    t = bu(e, 1, !1, null, null, n, !1, r, o),
    e[Zt] = t.current,
    ti(e.nodeType === 8 ? e.parentNode : e),
    new Eu(t)
}
;
et.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(T(188)) : (e = Object.keys(e).join(","),
        Error(T(268, e)));
    return e = Xp(t),
    e = e === null ? null : e.stateNode,
    e
}
;
et.flushSync = function(e) {
    return dr(e)
}
;
et.hydrate = function(e, t, n) {
    if (!fa(t))
        throw Error(T(200));
    return pa(null, e, t, !0, n)
}
;
et.hydrateRoot = function(e, t, n) {
    if (!ku(e))
        throw Error(T(405));
    var r = n != null && n.hydratedSources || null
      , o = !1
      , i = ""
      , s = jh;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0),
    n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    t = Ph(t, null, e, 1, n ?? null, o, !1, i, s),
    e[Zt] = t.current,
    ti(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            o = n._getVersion,
            o = o(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new da(t)
}
;
et.render = function(e, t, n) {
    if (!fa(t))
        throw Error(T(200));
    return pa(null, e, t, !1, n)
}
;
et.unmountComponentAtNode = function(e) {
    if (!fa(e))
        throw Error(T(40));
    return e._reactRootContainer ? (dr(function() {
        pa(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[Zt] = null
        })
    }),
    !0) : !1
}
;
et.unstable_batchedUpdates = yu;
et.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!fa(n))
        throw Error(T(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(T(38));
    return pa(e, t, n, !1, r)
}
;
et.version = "18.3.1-next-f1338f8080-20240426";
function Rh() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rh)
        } catch (e) {
            console.error(e)
        }
}
Rh(),
Rp.exports = et;
var bi = Rp.exports;
const Th = vp(bi);
var Ah, ff = bi;
Ah = ff.createRoot,
ff.hydrateRoot;
const Dx = 1
  , Mx = 1e6;
let sl = 0;
function _x() {
    return sl = (sl + 1) % Number.MAX_SAFE_INTEGER,
    sl.toString()
}
const al = new Map
  , pf = e => {
    if (al.has(e))
        return;
    const t = setTimeout( () => {
        al.delete(e),
        Ko({
            type: "REMOVE_TOAST",
            toastId: e
        })
    }
    , Mx);
    al.set(e, t)
}
  , Ix = (e, t) => {
    switch (t.type) {
    case "ADD_TOAST":
        return {
            ...e,
            toasts: [t.toast, ...e.toasts].slice(0, Dx)
        };
    case "UPDATE_TOAST":
        return {
            ...e,
            toasts: e.toasts.map(n => n.id === t.toast.id ? {
                ...n,
                ...t.toast
            } : n)
        };
    case "DISMISS_TOAST":
        {
            const {toastId: n} = t;
            return n ? pf(n) : e.toasts.forEach(r => {
                pf(r.id)
            }
            ),
            {
                ...e,
                toasts: e.toasts.map(r => r.id === n || n === void 0 ? {
                    ...r,
                    open: !1
                } : r)
            }
        }
    case "REMOVE_TOAST":
        return t.toastId === void 0 ? {
            ...e,
            toasts: []
        } : {
            ...e,
            toasts: e.toasts.filter(n => n.id !== t.toastId)
        }
    }
}
  , ms = [];
let hs = {
    toasts: []
};
function Ko(e) {
    hs = Ix(hs, e),
    ms.forEach(t => {
        t(hs)
    }
    )
}
function lt({...e}) {
    const t = _x()
      , n = o => Ko({
        type: "UPDATE_TOAST",
        toast: {
            ...o,
            id: t
        }
    })
      , r = () => Ko({
        type: "DISMISS_TOAST",
        toastId: t
    });
    return Ko({
        type: "ADD_TOAST",
        toast: {
            ...e,
            id: t,
            open: !0,
            onOpenChange: o => {
                o || r()
            }
        }
    }),
    {
        id: t,
        dismiss: r,
        update: n
    }
}
function Fx() {
    const [e,t] = y.useState(hs);
    return y.useEffect( () => (ms.push(t),
    () => {
        const n = ms.indexOf(t);
        n > -1 && ms.splice(n, 1)
    }
    ), [e]),
    {
        ...e,
        toast: lt,
        dismiss: n => Ko({
            type: "DISMISS_TOAST",
            toastId: n
        })
    }
}
function le(e, t, {checkForDefaultPrevented: n=!0}={}) {
    return function(o) {
        if (e == null || e(o),
        n === !1 || !o.defaultPrevented)
            return t == null ? void 0 : t(o)
    }
}
function mf(e, t) {
    if (typeof e == "function")
        return e(t);
    e != null && (e.current = t)
}
function Lh(...e) {
    return t => {
        let n = !1;
        const r = e.map(o => {
            const i = mf(o, t);
            return !n && typeof i == "function" && (n = !0),
            i
        }
        );
        if (n)
            return () => {
                for (let o = 0; o < r.length; o++) {
                    const i = r[o];
                    typeof i == "function" ? i() : mf(e[o], null)
                }
            }
    }
}
function Ie(...e) {
    return y.useCallback(Lh(...e), e)
}
function $x(e, t) {
    const n = y.createContext(t)
      , r = i => {
        const {children: s, ...a} = i
          , l = y.useMemo( () => a, Object.values(a));
        return c.jsx(n.Provider, {
            value: l,
            children: s
        })
    }
    ;
    r.displayName = e + "Provider";
    function o(i) {
        const s = y.useContext(n);
        if (s)
            return s;
        if (t !== void 0)
            return t;
        throw new Error(`\`${i}\` must be used within \`${e}\``)
    }
    return [r, o]
}
function Ci(e, t=[]) {
    let n = [];
    function r(i, s) {
        const a = y.createContext(s)
          , l = n.length;
        n = [...n, s];
        const u = f => {
            var v;
            const {scope: g, children: p, ...S} = f
              , m = ((v = g == null ? void 0 : g[e]) == null ? void 0 : v[l]) || a
              , w = y.useMemo( () => S, Object.values(S));
            return c.jsx(m.Provider, {
                value: w,
                children: p
            })
        }
        ;
        u.displayName = i + "Provider";
        function d(f, g) {
            var m;
            const p = ((m = g == null ? void 0 : g[e]) == null ? void 0 : m[l]) || a
              , S = y.useContext(p);
            if (S)
                return S;
            if (s !== void 0)
                return s;
            throw new Error(`\`${f}\` must be used within \`${i}\``)
        }
        return [u, d]
    }
    const o = () => {
        const i = n.map(s => y.createContext(s));
        return function(a) {
            const l = (a == null ? void 0 : a[e]) || i;
            return y.useMemo( () => ({
                [`__scope${e}`]: {
                    ...a,
                    [e]: l
                }
            }), [a, l])
        }
    }
    ;
    return o.scopeName = e,
    [r, Bx(o, ...t)]
}
function Bx(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(i) {
            const s = r.reduce( (a, {useScope: l, scopeName: u}) => {
                const f = l(i)[`__scope${u}`];
                return {
                    ...a,
                    ...f
                }
            }
            , {});
            return y.useMemo( () => ({
                [`__scope${t.scopeName}`]: s
            }), [s])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
function ui(e) {
    const t = Ux(e)
      , n = y.forwardRef( (r, o) => {
        const {children: i, ...s} = r
          , a = y.Children.toArray(i)
          , l = a.find(Hx);
        if (l) {
            const u = l.props.children
              , d = a.map(f => f === l ? y.Children.count(u) > 1 ? y.Children.only(null) : y.isValidElement(u) ? u.props.children : null : f);
            return c.jsx(t, {
                ...s,
                ref: o,
                children: y.isValidElement(u) ? y.cloneElement(u, void 0, d) : null
            })
        }
        return c.jsx(t, {
            ...s,
            ref: o,
            children: i
        })
    }
    );
    return n.displayName = `${e}.Slot`,
    n
}
var Wx = ui("Slot");
function Ux(e) {
    const t = y.forwardRef( (n, r) => {
        const {children: o, ...i} = n;
        if (y.isValidElement(o)) {
            const s = Qx(o)
              , a = Kx(i, o.props);
            return o.type !== y.Fragment && (a.ref = r ? Lh(r, s) : s),
            y.cloneElement(o, a)
        }
        return y.Children.count(o) > 1 ? y.Children.only(null) : null
    }
    );
    return t.displayName = `${e}.SlotClone`,
    t
}
var zh = Symbol("radix.slottable");
function Vx(e) {
    const t = ({children: n}) => c.jsx(c.Fragment, {
        children: n
    });
    return t.displayName = `${e}.Slottable`,
    t.__radixId = zh,
    t
}
function Hx(e) {
    return y.isValidElement(e) && typeof e.type == "function" && "__radixId"in e.type && e.type.__radixId === zh
}
function Kx(e, t) {
    const n = {
        ...t
    };
    for (const r in t) {
        const o = e[r]
          , i = t[r];
        /^on[A-Z]/.test(r) ? o && i ? n[r] = (...a) => {
            const l = i(...a);
            return o(...a),
            l
        }
        : o && (n[r] = o) : r === "style" ? n[r] = {
            ...o,
            ...i
        } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...n
    }
}
function Qx(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
function Gx(e) {
    const t = e + "CollectionProvider"
      , [n,r] = Ci(t)
      , [o,i] = n(t, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , s = m => {
        const {scope: w, children: v} = m
          , h = A.useRef(null)
          , x = A.useRef(new Map).current;
        return c.jsx(o, {
            scope: w,
            itemMap: x,
            collectionRef: h,
            children: v
        })
    }
    ;
    s.displayName = t;
    const a = e + "CollectionSlot"
      , l = ui(a)
      , u = A.forwardRef( (m, w) => {
        const {scope: v, children: h} = m
          , x = i(a, v)
          , b = Ie(w, x.collectionRef);
        return c.jsx(l, {
            ref: b,
            children: h
        })
    }
    );
    u.displayName = a;
    const d = e + "CollectionItemSlot"
      , f = "data-radix-collection-item"
      , g = ui(d)
      , p = A.forwardRef( (m, w) => {
        const {scope: v, children: h, ...x} = m
          , b = A.useRef(null)
          , C = Ie(w, b)
          , E = i(d, v);
        return A.useEffect( () => (E.itemMap.set(b, {
            ref: b,
            ...x
        }),
        () => void E.itemMap.delete(b))),
        c.jsx(g, {
            [f]: "",
            ref: C,
            children: h
        })
    }
    );
    p.displayName = d;
    function S(m) {
        const w = i(e + "CollectionConsumer", m);
        return A.useCallback( () => {
            const h = w.collectionRef.current;
            if (!h)
                return [];
            const x = Array.from(h.querySelectorAll(`[${f}]`));
            return Array.from(w.itemMap.values()).sort( (E, k) => x.indexOf(E.ref.current) - x.indexOf(k.ref.current))
        }
        , [w.collectionRef, w.itemMap])
    }
    return [{
        Provider: s,
        Slot: u,
        ItemSlot: p
    }, S, r]
}
var Yx = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"]
  , ve = Yx.reduce( (e, t) => {
    const n = ui(`Primitive.${t}`)
      , r = y.forwardRef( (o, i) => {
        const {asChild: s, ...a} = o
          , l = s ? n : t;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        c.jsx(l, {
            ...a,
            ref: i
        })
    }
    );
    return r.displayName = `Primitive.${t}`,
    {
        ...e,
        [t]: r
    }
}
, {});
function Oh(e, t) {
    e && bi.flushSync( () => e.dispatchEvent(t))
}
function Ft(e) {
    const t = y.useRef(e);
    return y.useEffect( () => {
        t.current = e
    }
    ),
    y.useMemo( () => (...n) => {
        var r;
        return (r = t.current) == null ? void 0 : r.call(t, ...n)
    }
    , [])
}
function Xx(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = Ft(e);
    y.useEffect( () => {
        const r = o => {
            o.key === "Escape" && n(o)
        }
        ;
        return t.addEventListener("keydown", r, {
            capture: !0
        }),
        () => t.removeEventListener("keydown", r, {
            capture: !0
        })
    }
    , [n, t])
}
var qx = "DismissableLayer", mc = "dismissableLayer.update", Zx = "dismissableLayer.pointerDownOutside", Jx = "dismissableLayer.focusOutside", hf, Dh = y.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), ma = y.forwardRef( (e, t) => {
    const {disableOutsidePointerEvents: n=!1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: i, onInteractOutside: s, onDismiss: a, ...l} = e
      , u = y.useContext(Dh)
      , [d,f] = y.useState(null)
      , g = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document)
      , [,p] = y.useState({})
      , S = Ie(t, k => f(k))
      , m = Array.from(u.layers)
      , [w] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1)
      , v = m.indexOf(w)
      , h = d ? m.indexOf(d) : -1
      , x = u.layersWithOutsidePointerEventsDisabled.size > 0
      , b = h >= v
      , C = tw(k => {
        const R = k.target
          , z = [...u.branches].some(L => L.contains(R));
        !b || z || (o == null || o(k),
        s == null || s(k),
        k.defaultPrevented || a == null || a())
    }
    , g)
      , E = nw(k => {
        const R = k.target;
        [...u.branches].some(L => L.contains(R)) || (i == null || i(k),
        s == null || s(k),
        k.defaultPrevented || a == null || a())
    }
    , g);
    return Xx(k => {
        h === u.layers.size - 1 && (r == null || r(k),
        !k.defaultPrevented && a && (k.preventDefault(),
        a()))
    }
    , g),
    y.useEffect( () => {
        if (d)
            return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (hf = g.body.style.pointerEvents,
            g.body.style.pointerEvents = "none"),
            u.layersWithOutsidePointerEventsDisabled.add(d)),
            u.layers.add(d),
            gf(),
            () => {
                n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (g.body.style.pointerEvents = hf)
            }
    }
    , [d, g, n, u]),
    y.useEffect( () => () => {
        d && (u.layers.delete(d),
        u.layersWithOutsidePointerEventsDisabled.delete(d),
        gf())
    }
    , [d, u]),
    y.useEffect( () => {
        const k = () => p({});
        return document.addEventListener(mc, k),
        () => document.removeEventListener(mc, k)
    }
    , []),
    c.jsx(ve.div, {
        ...l,
        ref: S,
        style: {
            pointerEvents: x ? b ? "auto" : "none" : void 0,
            ...e.style
        },
        onFocusCapture: le(e.onFocusCapture, E.onFocusCapture),
        onBlurCapture: le(e.onBlurCapture, E.onBlurCapture),
        onPointerDownCapture: le(e.onPointerDownCapture, C.onPointerDownCapture)
    })
}
);
ma.displayName = qx;
var ew = "DismissableLayerBranch"
  , Mh = y.forwardRef( (e, t) => {
    const n = y.useContext(Dh)
      , r = y.useRef(null)
      , o = Ie(t, r);
    return y.useEffect( () => {
        const i = r.current;
        if (i)
            return n.branches.add(i),
            () => {
                n.branches.delete(i)
            }
    }
    , [n.branches]),
    c.jsx(ve.div, {
        ...e,
        ref: o
    })
}
);
Mh.displayName = ew;
function tw(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = Ft(e)
      , r = y.useRef(!1)
      , o = y.useRef( () => {}
    );
    return y.useEffect( () => {
        const i = a => {
            if (a.target && !r.current) {
                let l = function() {
                    _h(Zx, n, u, {
                        discrete: !0
                    })
                };
                const u = {
                    originalEvent: a
                };
                a.pointerType === "touch" ? (t.removeEventListener("click", o.current),
                o.current = l,
                t.addEventListener("click", o.current, {
                    once: !0
                })) : l()
            } else
                t.removeEventListener("click", o.current);
            r.current = !1
        }
          , s = window.setTimeout( () => {
            t.addEventListener("pointerdown", i)
        }
        , 0);
        return () => {
            window.clearTimeout(s),
            t.removeEventListener("pointerdown", i),
            t.removeEventListener("click", o.current)
        }
    }
    , [t, n]),
    {
        onPointerDownCapture: () => r.current = !0
    }
}
function nw(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = Ft(e)
      , r = y.useRef(!1);
    return y.useEffect( () => {
        const o = i => {
            i.target && !r.current && _h(Jx, n, {
                originalEvent: i
            }, {
                discrete: !1
            })
        }
        ;
        return t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
    }
    , [t, n]),
    {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}
function gf() {
    const e = new CustomEvent(mc);
    document.dispatchEvent(e)
}
function _h(e, t, n, {discrete: r}) {
    const o = n.originalEvent.target
      , i = new CustomEvent(e,{
        bubbles: !1,
        cancelable: !0,
        detail: n
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    r ? Oh(o, i) : o.dispatchEvent(i)
}
var rw = ma
  , ow = Mh
  , tn = globalThis != null && globalThis.document ? y.useLayoutEffect : () => {}
  , iw = "Portal"
  , Nu = y.forwardRef( (e, t) => {
    var a;
    const {container: n, ...r} = e
      , [o,i] = y.useState(!1);
    tn( () => i(!0), []);
    const s = n || o && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
    return s ? Th.createPortal(c.jsx(ve.div, {
        ...r,
        ref: t
    }), s) : null
}
);
Nu.displayName = iw;
function sw(e, t) {
    return y.useReducer( (n, r) => t[n][r] ?? n, e)
}
var go = e => {
    const {present: t, children: n} = e
      , r = aw(t)
      , o = typeof n == "function" ? n({
        present: r.isPresent
    }) : y.Children.only(n)
      , i = Ie(r.ref, lw(o));
    return typeof n == "function" || r.isPresent ? y.cloneElement(o, {
        ref: i
    }) : null
}
;
go.displayName = "Presence";
function aw(e) {
    const [t,n] = y.useState()
      , r = y.useRef(null)
      , o = y.useRef(e)
      , i = y.useRef("none")
      , s = e ? "mounted" : "unmounted"
      , [a,l] = sw(s, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return y.useEffect( () => {
        const u = Qi(r.current);
        i.current = a === "mounted" ? u : "none"
    }
    , [a]),
    tn( () => {
        const u = r.current
          , d = o.current;
        if (d !== e) {
            const g = i.current
              , p = Qi(u);
            e ? l("MOUNT") : p === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(d && g !== p ? "ANIMATION_OUT" : "UNMOUNT"),
            o.current = e
        }
    }
    , [e, l]),
    tn( () => {
        if (t) {
            let u;
            const d = t.ownerDocument.defaultView ?? window
              , f = p => {
                const m = Qi(r.current).includes(p.animationName);
                if (p.target === t && m && (l("ANIMATION_END"),
                !o.current)) {
                    const w = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards",
                    u = d.setTimeout( () => {
                        t.style.animationFillMode === "forwards" && (t.style.animationFillMode = w)
                    }
                    )
                }
            }
              , g = p => {
                p.target === t && (i.current = Qi(r.current))
            }
            ;
            return t.addEventListener("animationstart", g),
            t.addEventListener("animationcancel", f),
            t.addEventListener("animationend", f),
            () => {
                d.clearTimeout(u),
                t.removeEventListener("animationstart", g),
                t.removeEventListener("animationcancel", f),
                t.removeEventListener("animationend", f)
            }
        } else
            l("ANIMATION_END")
    }
    , [t, l]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(a),
        ref: y.useCallback(u => {
            r.current = u ? getComputedStyle(u) : null,
            n(u)
        }
        , [])
    }
}
function Qi(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}
function lw(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
var cw = Dc[" useInsertionEffect ".trim().toString()] || tn;
function Ih({prop: e, defaultProp: t, onChange: n= () => {}
, caller: r}) {
    const [o,i,s] = uw({
        defaultProp: t,
        onChange: n
    })
      , a = e !== void 0
      , l = a ? e : o;
    {
        const d = y.useRef(e !== void 0);
        y.useEffect( () => {
            const f = d.current;
            f !== a && console.warn(`${r} is changing from ${f ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),
            d.current = a
        }
        , [a, r])
    }
    const u = y.useCallback(d => {
        var f;
        if (a) {
            const g = dw(d) ? d(e) : d;
            g !== e && ((f = s.current) == null || f.call(s, g))
        } else
            i(d)
    }
    , [a, e, i, s]);
    return [l, u]
}
function uw({defaultProp: e, onChange: t}) {
    const [n,r] = y.useState(e)
      , o = y.useRef(n)
      , i = y.useRef(t);
    return cw( () => {
        i.current = t
    }
    , [t]),
    y.useEffect( () => {
        var s;
        o.current !== n && ((s = i.current) == null || s.call(i, n),
        o.current = n)
    }
    , [n, o]),
    [n, r, i]
}
function dw(e) {
    return typeof e == "function"
}
var fw = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal"
})
  , pw = "VisuallyHidden"
  , ha = y.forwardRef( (e, t) => c.jsx(ve.span, {
    ...e,
    ref: t,
    style: {
        ...fw,
        ...e.style
    }
}));
ha.displayName = pw;
var mw = ha
  , Pu = "ToastProvider"
  , [ju,hw,gw] = Gx("Toast")
  , [Fh,AN] = Ci("Toast", [gw])
  , [vw,ga] = Fh(Pu)
  , $h = e => {
    const {__scopeToast: t, label: n="Notification", duration: r=5e3, swipeDirection: o="right", swipeThreshold: i=50, children: s} = e
      , [a,l] = y.useState(null)
      , [u,d] = y.useState(0)
      , f = y.useRef(!1)
      , g = y.useRef(!1);
    return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${Pu}\`. Expected non-empty \`string\`.`),
    c.jsx(ju.Provider, {
        scope: t,
        children: c.jsx(vw, {
            scope: t,
            label: n,
            duration: r,
            swipeDirection: o,
            swipeThreshold: i,
            toastCount: u,
            viewport: a,
            onViewportChange: l,
            onToastAdd: y.useCallback( () => d(p => p + 1), []),
            onToastRemove: y.useCallback( () => d(p => p - 1), []),
            isFocusedToastEscapeKeyDownRef: f,
            isClosePausedRef: g,
            children: s
        })
    })
}
;
$h.displayName = Pu;
var Bh = "ToastViewport"
  , yw = ["F8"]
  , hc = "toast.viewportPause"
  , gc = "toast.viewportResume"
  , Wh = y.forwardRef( (e, t) => {
    const {__scopeToast: n, hotkey: r=yw, label: o="Notifications ({hotkey})", ...i} = e
      , s = ga(Bh, n)
      , a = hw(n)
      , l = y.useRef(null)
      , u = y.useRef(null)
      , d = y.useRef(null)
      , f = y.useRef(null)
      , g = Ie(t, f, s.onViewportChange)
      , p = r.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , S = s.toastCount > 0;
    y.useEffect( () => {
        const w = v => {
            var x;
            r.length !== 0 && r.every(b => v[b] || v.code === b) && ((x = f.current) == null || x.focus())
        }
        ;
        return document.addEventListener("keydown", w),
        () => document.removeEventListener("keydown", w)
    }
    , [r]),
    y.useEffect( () => {
        const w = l.current
          , v = f.current;
        if (S && w && v) {
            const h = () => {
                if (!s.isClosePausedRef.current) {
                    const E = new CustomEvent(hc);
                    v.dispatchEvent(E),
                    s.isClosePausedRef.current = !0
                }
            }
              , x = () => {
                if (s.isClosePausedRef.current) {
                    const E = new CustomEvent(gc);
                    v.dispatchEvent(E),
                    s.isClosePausedRef.current = !1
                }
            }
              , b = E => {
                !w.contains(E.relatedTarget) && x()
            }
              , C = () => {
                w.contains(document.activeElement) || x()
            }
            ;
            return w.addEventListener("focusin", h),
            w.addEventListener("focusout", b),
            w.addEventListener("pointermove", h),
            w.addEventListener("pointerleave", C),
            window.addEventListener("blur", h),
            window.addEventListener("focus", x),
            () => {
                w.removeEventListener("focusin", h),
                w.removeEventListener("focusout", b),
                w.removeEventListener("pointermove", h),
                w.removeEventListener("pointerleave", C),
                window.removeEventListener("blur", h),
                window.removeEventListener("focus", x)
            }
        }
    }
    , [S, s.isClosePausedRef]);
    const m = y.useCallback( ({tabbingDirection: w}) => {
        const h = a().map(x => {
            const b = x.ref.current
              , C = [b, ...Aw(b)];
            return w === "forwards" ? C : C.reverse()
        }
        );
        return (w === "forwards" ? h.reverse() : h).flat()
    }
    , [a]);
    return y.useEffect( () => {
        const w = f.current;
        if (w) {
            const v = h => {
                var C, E, k;
                const x = h.altKey || h.ctrlKey || h.metaKey;
                if (h.key === "Tab" && !x) {
                    const R = document.activeElement
                      , z = h.shiftKey;
                    if (h.target === w && z) {
                        (C = u.current) == null || C.focus();
                        return
                    }
                    const _ = m({
                        tabbingDirection: z ? "backwards" : "forwards"
                    })
                      , K = _.findIndex(O => O === R);
                    ll(_.slice(K + 1)) ? h.preventDefault() : z ? (E = u.current) == null || E.focus() : (k = d.current) == null || k.focus()
                }
            }
            ;
            return w.addEventListener("keydown", v),
            () => w.removeEventListener("keydown", v)
        }
    }
    , [a, m]),
    c.jsxs(ow, {
        ref: l,
        role: "region",
        "aria-label": o.replace("{hotkey}", p),
        tabIndex: -1,
        style: {
            pointerEvents: S ? void 0 : "none"
        },
        children: [S && c.jsx(vc, {
            ref: u,
            onFocusFromOutsideViewport: () => {
                const w = m({
                    tabbingDirection: "forwards"
                });
                ll(w)
            }
        }), c.jsx(ju.Slot, {
            scope: n,
            children: c.jsx(ve.ol, {
                tabIndex: -1,
                ...i,
                ref: g
            })
        }), S && c.jsx(vc, {
            ref: d,
            onFocusFromOutsideViewport: () => {
                const w = m({
                    tabbingDirection: "backwards"
                });
                ll(w)
            }
        })]
    })
}
);
Wh.displayName = Bh;
var Uh = "ToastFocusProxy"
  , vc = y.forwardRef( (e, t) => {
    const {__scopeToast: n, onFocusFromOutsideViewport: r, ...o} = e
      , i = ga(Uh, n);
    return c.jsx(ha, {
        "aria-hidden": !0,
        tabIndex: 0,
        ...o,
        ref: t,
        style: {
            position: "fixed"
        },
        onFocus: s => {
            var u;
            const a = s.relatedTarget;
            !((u = i.viewport) != null && u.contains(a)) && r()
        }
    })
}
);
vc.displayName = Uh;
var Ei = "Toast"
  , xw = "toast.swipeStart"
  , ww = "toast.swipeMove"
  , Sw = "toast.swipeCancel"
  , bw = "toast.swipeEnd"
  , Vh = y.forwardRef( (e, t) => {
    const {forceMount: n, open: r, defaultOpen: o, onOpenChange: i, ...s} = e
      , [a,l] = Ih({
        prop: r,
        defaultProp: o ?? !0,
        onChange: i,
        caller: Ei
    });
    return c.jsx(go, {
        present: n || a,
        children: c.jsx(kw, {
            open: a,
            ...s,
            ref: t,
            onClose: () => l(!1),
            onPause: Ft(e.onPause),
            onResume: Ft(e.onResume),
            onSwipeStart: le(e.onSwipeStart, u => {
                u.currentTarget.setAttribute("data-swipe", "start")
            }
            ),
            onSwipeMove: le(e.onSwipeMove, u => {
                const {x: d, y: f} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "move"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${d}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${f}px`)
            }
            ),
            onSwipeCancel: le(e.onSwipeCancel, u => {
                u.currentTarget.setAttribute("data-swipe", "cancel"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
            }
            ),
            onSwipeEnd: le(e.onSwipeEnd, u => {
                const {x: d, y: f} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "end"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${d}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${f}px`),
                l(!1)
            }
            )
        })
    })
}
);
Vh.displayName = Ei;
var [Cw,Ew] = Fh(Ei, {
    onClose() {}
})
  , kw = y.forwardRef( (e, t) => {
    const {__scopeToast: n, type: r="foreground", duration: o, open: i, onClose: s, onEscapeKeyDown: a, onPause: l, onResume: u, onSwipeStart: d, onSwipeMove: f, onSwipeCancel: g, onSwipeEnd: p, ...S} = e
      , m = ga(Ei, n)
      , [w,v] = y.useState(null)
      , h = Ie(t, O => v(O))
      , x = y.useRef(null)
      , b = y.useRef(null)
      , C = o || m.duration
      , E = y.useRef(0)
      , k = y.useRef(C)
      , R = y.useRef(0)
      , {onToastAdd: z, onToastRemove: L} = m
      , F = Ft( () => {
        var Y;
        (w == null ? void 0 : w.contains(document.activeElement)) && ((Y = m.viewport) == null || Y.focus()),
        s()
    }
    )
      , _ = y.useCallback(O => {
        !O || O === 1 / 0 || (window.clearTimeout(R.current),
        E.current = new Date().getTime(),
        R.current = window.setTimeout(F, O))
    }
    , [F]);
    y.useEffect( () => {
        const O = m.viewport;
        if (O) {
            const Y = () => {
                _(k.current),
                u == null || u()
            }
              , $ = () => {
                const U = new Date().getTime() - E.current;
                k.current = k.current - U,
                window.clearTimeout(R.current),
                l == null || l()
            }
            ;
            return O.addEventListener(hc, $),
            O.addEventListener(gc, Y),
            () => {
                O.removeEventListener(hc, $),
                O.removeEventListener(gc, Y)
            }
        }
    }
    , [m.viewport, C, l, u, _]),
    y.useEffect( () => {
        i && !m.isClosePausedRef.current && _(C)
    }
    , [i, C, m.isClosePausedRef, _]),
    y.useEffect( () => (z(),
    () => L()), [z, L]);
    const K = y.useMemo( () => w ? qh(w) : null, [w]);
    return m.viewport ? c.jsxs(c.Fragment, {
        children: [K && c.jsx(Nw, {
            __scopeToast: n,
            role: "status",
            "aria-live": r === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: K
        }), c.jsx(Cw, {
            scope: n,
            onClose: F,
            children: bi.createPortal(c.jsx(ju.ItemSlot, {
                scope: n,
                children: c.jsx(rw, {
                    asChild: !0,
                    onEscapeKeyDown: le(a, () => {
                        m.isFocusedToastEscapeKeyDownRef.current || F(),
                        m.isFocusedToastEscapeKeyDownRef.current = !1
                    }
                    ),
                    children: c.jsx(ve.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": i ? "open" : "closed",
                        "data-swipe-direction": m.swipeDirection,
                        ...S,
                        ref: h,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: le(e.onKeyDown, O => {
                            O.key === "Escape" && (a == null || a(O.nativeEvent),
                            O.nativeEvent.defaultPrevented || (m.isFocusedToastEscapeKeyDownRef.current = !0,
                            F()))
                        }
                        ),
                        onPointerDown: le(e.onPointerDown, O => {
                            O.button === 0 && (x.current = {
                                x: O.clientX,
                                y: O.clientY
                            })
                        }
                        ),
                        onPointerMove: le(e.onPointerMove, O => {
                            if (!x.current)
                                return;
                            const Y = O.clientX - x.current.x
                              , $ = O.clientY - x.current.y
                              , U = !!b.current
                              , P = ["left", "right"].includes(m.swipeDirection)
                              , j = ["left", "up"].includes(m.swipeDirection) ? Math.min : Math.max
                              , D = P ? j(0, Y) : 0
                              , V = P ? 0 : j(0, $)
                              , I = O.pointerType === "touch" ? 10 : 2
                              , Q = {
                                x: D,
                                y: V
                            }
                              , X = {
                                originalEvent: O,
                                delta: Q
                            };
                            U ? (b.current = Q,
                            Gi(ww, f, X, {
                                discrete: !1
                            })) : vf(Q, m.swipeDirection, I) ? (b.current = Q,
                            Gi(xw, d, X, {
                                discrete: !1
                            }),
                            O.target.setPointerCapture(O.pointerId)) : (Math.abs(Y) > I || Math.abs($) > I) && (x.current = null)
                        }
                        ),
                        onPointerUp: le(e.onPointerUp, O => {
                            const Y = b.current
                              , $ = O.target;
                            if ($.hasPointerCapture(O.pointerId) && $.releasePointerCapture(O.pointerId),
                            b.current = null,
                            x.current = null,
                            Y) {
                                const U = O.currentTarget
                                  , P = {
                                    originalEvent: O,
                                    delta: Y
                                };
                                vf(Y, m.swipeDirection, m.swipeThreshold) ? Gi(bw, p, P, {
                                    discrete: !0
                                }) : Gi(Sw, g, P, {
                                    discrete: !0
                                }),
                                U.addEventListener("click", j => j.preventDefault(), {
                                    once: !0
                                })
                            }
                        }
                        )
                    })
                })
            }), m.viewport)
        })]
    }) : null
}
)
  , Nw = e => {
    const {__scopeToast: t, children: n, ...r} = e
      , o = ga(Ei, t)
      , [i,s] = y.useState(!1)
      , [a,l] = y.useState(!1);
    return Rw( () => s(!0)),
    y.useEffect( () => {
        const u = window.setTimeout( () => l(!0), 1e3);
        return () => window.clearTimeout(u)
    }
    , []),
    a ? null : c.jsx(Nu, {
        asChild: !0,
        children: c.jsx(ha, {
            ...r,
            children: i && c.jsxs(c.Fragment, {
                children: [o.label, " ", n]
            })
        })
    })
}
  , Pw = "ToastTitle"
  , Hh = y.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return c.jsx(ve.div, {
        ...r,
        ref: t
    })
}
);
Hh.displayName = Pw;
var jw = "ToastDescription"
  , Kh = y.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return c.jsx(ve.div, {
        ...r,
        ref: t
    })
}
);
Kh.displayName = jw;
var Qh = "ToastAction"
  , Gh = y.forwardRef( (e, t) => {
    const {altText: n, ...r} = e;
    return n.trim() ? c.jsx(Xh, {
        altText: n,
        asChild: !0,
        children: c.jsx(Ru, {
            ...r,
            ref: t
        })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${Qh}\`. Expected non-empty \`string\`.`),
    null)
}
);
Gh.displayName = Qh;
var Yh = "ToastClose"
  , Ru = y.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e
      , o = Ew(Yh, n);
    return c.jsx(Xh, {
        asChild: !0,
        children: c.jsx(ve.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: le(e.onClick, o.onClose)
        })
    })
}
);
Ru.displayName = Yh;
var Xh = y.forwardRef( (e, t) => {
    const {__scopeToast: n, altText: r, ...o} = e;
    return c.jsx(ve.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...o,
        ref: t
    })
}
);
function qh(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(r => {
        if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        Tw(r)) {
            const o = r.ariaHidden || r.hidden || r.style.display === "none"
              , i = r.dataset.radixToastAnnounceExclude === "";
            if (!o)
                if (i) {
                    const s = r.dataset.radixToastAnnounceAlt;
                    s && t.push(s)
                } else
                    t.push(...qh(r))
        }
    }
    ),
    t
}
function Gi(e, t, n, {discrete: r}) {
    const o = n.originalEvent.currentTarget
      , i = new CustomEvent(e,{
        bubbles: !0,
        cancelable: !0,
        detail: n
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    r ? Oh(o, i) : o.dispatchEvent(i)
}
var vf = (e, t, n=0) => {
    const r = Math.abs(e.x)
      , o = Math.abs(e.y)
      , i = r > o;
    return t === "left" || t === "right" ? i && r > n : !i && o > n
}
;
function Rw(e= () => {}
) {
    const t = Ft(e);
    tn( () => {
        let n = 0
          , r = 0;
        return n = window.requestAnimationFrame( () => r = window.requestAnimationFrame(t)),
        () => {
            window.cancelAnimationFrame(n),
            window.cancelAnimationFrame(r)
        }
    }
    , [t])
}
function Tw(e) {
    return e.nodeType === e.ELEMENT_NODE
}
function Aw(e) {
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: r => {
            const o = r.tagName === "INPUT" && r.type === "hidden";
            return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
function ll(e) {
    const t = document.activeElement;
    return e.some(n => n === t ? !0 : (n.focus(),
    document.activeElement !== t))
}
var Lw = $h
  , Zh = Wh
  , Jh = Vh
  , eg = Hh
  , tg = Kh
  , ng = Gh
  , rg = Ru;
function og(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number")
        r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++)
                e[t] && (n = og(e[t])) && (r && (r += " "),
                r += n)
        } else
            for (n in e)
                e[n] && (r && (r += " "),
                r += n);
    return r
}
function ig() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
        (e = arguments[n]) && (t = og(e)) && (r && (r += " "),
        r += t);
    return r
}
const yf = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e
  , xf = ig
  , sg = (e, t) => n => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
        return xf(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    const {variants: o, defaultVariants: i} = t
      , s = Object.keys(o).map(u => {
        const d = n == null ? void 0 : n[u]
          , f = i == null ? void 0 : i[u];
        if (d === null)
            return null;
        const g = yf(d) || yf(f);
        return o[u][g]
    }
    )
      , a = n && Object.entries(n).reduce( (u, d) => {
        let[f,g] = d;
        return g === void 0 || (u[f] = g),
        u
    }
    , {})
      , l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce( (u, d) => {
        let {class: f, className: g, ...p} = d;
        return Object.entries(p).every(S => {
            let[m,w] = S;
            return Array.isArray(w) ? w.includes({
                ...i,
                ...a
            }[m]) : {
                ...i,
                ...a
            }[m] === w
        }
        ) ? [...u, f, g] : u
    }
    , []);
    return xf(e, s, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zw = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , ag = (...e) => e.filter( (t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ow = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dw = y.forwardRef( ({color: e="currentColor", size: t=24, strokeWidth: n=2, absoluteStrokeWidth: r, className: o="", children: i, iconNode: s, ...a}, l) => y.createElement("svg", {
    ref: l,
    ...Ow,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? Number(n) * 24 / Number(t) : n,
    className: ag("lucide", o),
    ...a
}, [...s.map( ([u,d]) => y.createElement(u, d)), ...Array.isArray(i) ? i : [i]]));
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bt = (e, t) => {
    const n = y.forwardRef( ({className: r, ...o}, i) => y.createElement(Dw, {
        ref: i,
        iconNode: t,
        className: ag(`lucide-${zw(e)}`, r),
        ...o
    }));
    return n.displayName = `${e}`,
    n
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wf = Bt("ChevronRight", [["path", {
    d: "m9 18 6-6-6-6",
    key: "mthhwq"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lg = Bt("Clock", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["polyline", {
    points: "12 6 12 12 16 14",
    key: "68esgv"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mw = Bt("Mail", [["rect", {
    width: "20",
    height: "16",
    x: "2",
    y: "4",
    rx: "2",
    key: "18n3k1"
}], ["path", {
    d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
    key: "1ocrg3"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tu = Bt("MapPin", [["path", {
    d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
    key: "1r0f0z"
}], ["circle", {
    cx: "12",
    cy: "10",
    r: "3",
    key: "ilqhr7"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gs = Bt("Phone", [["path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
    key: "foiqr5"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _w = Bt("Search", [["circle", {
    cx: "11",
    cy: "11",
    r: "8",
    key: "4ej97u"
}], ["path", {
    d: "m21 21-4.3-4.3",
    key: "1qie3q"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Iw = Bt("ShoppingBag", [["path", {
    d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",
    key: "hou9p0"
}], ["path", {
    d: "M3 6h18",
    key: "d0wm0j"
}], ["path", {
    d: "M16 10a4 4 0 0 1-8 0",
    key: "1ltviw"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fw = Bt("ShoppingCart", [["circle", {
    cx: "8",
    cy: "21",
    r: "1",
    key: "jimo8o"
}], ["circle", {
    cx: "19",
    cy: "21",
    r: "1",
    key: "13723u"
}], ["path", {
    d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
    key: "9zh506"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $w = Bt("UtensilsCrossed", [["path", {
    d: "m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8",
    key: "n7qcjb"
}], ["path", {
    d: "M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7",
    key: "d0u48b"
}], ["path", {
    d: "m2.1 21.8 6.4-6.3",
    key: "yn04lh"
}], ["path", {
    d: "m19 5-7 7",
    key: "194lzd"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cg = Bt("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]])
  , Au = "-"
  , Bw = e => {
    const t = Uw(e)
      , {conflictingClassGroups: n, conflictingClassGroupModifiers: r} = e;
    return {
        getClassGroupId: s => {
            const a = s.split(Au);
            return a[0] === "" && a.length !== 1 && a.shift(),
            ug(a, t) || Ww(s)
        }
        ,
        getConflictingClassGroupIds: (s, a) => {
            const l = n[s] || [];
            return a && r[s] ? [...l, ...r[s]] : l
        }
    }
}
  , ug = (e, t) => {
    var s;
    if (e.length === 0)
        return t.classGroupId;
    const n = e[0]
      , r = t.nextPart.get(n)
      , o = r ? ug(e.slice(1), r) : void 0;
    if (o)
        return o;
    if (t.validators.length === 0)
        return;
    const i = e.join(Au);
    return (s = t.validators.find( ({validator: a}) => a(i))) == null ? void 0 : s.classGroupId
}
  , Sf = /^\[(.+)\]$/
  , Ww = e => {
    if (Sf.test(e)) {
        const t = Sf.exec(e)[1]
          , n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
        if (n)
            return "arbitrary.." + n
    }
}
  , Uw = e => {
    const {theme: t, prefix: n} = e
      , r = {
        nextPart: new Map,
        validators: []
    };
    return Hw(Object.entries(e.classGroups), n).forEach( ([i,s]) => {
        yc(s, r, i, t)
    }
    ),
    r
}
  , yc = (e, t, n, r) => {
    e.forEach(o => {
        if (typeof o == "string") {
            const i = o === "" ? t : bf(t, o);
            i.classGroupId = n;
            return
        }
        if (typeof o == "function") {
            if (Vw(o)) {
                yc(o(r), t, n, r);
                return
            }
            t.validators.push({
                validator: o,
                classGroupId: n
            });
            return
        }
        Object.entries(o).forEach( ([i,s]) => {
            yc(s, bf(t, i), n, r)
        }
        )
    }
    )
}
  , bf = (e, t) => {
    let n = e;
    return t.split(Au).forEach(r => {
        n.nextPart.has(r) || n.nextPart.set(r, {
            nextPart: new Map,
            validators: []
        }),
        n = n.nextPart.get(r)
    }
    ),
    n
}
  , Vw = e => e.isThemeGetter
  , Hw = (e, t) => t ? e.map( ([n,r]) => {
    const o = r.map(i => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map( ([s,a]) => [t + s, a])) : i);
    return [n, o]
}
) : e
  , Kw = e => {
    if (e < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let t = 0
      , n = new Map
      , r = new Map;
    const o = (i, s) => {
        n.set(i, s),
        t++,
        t > e && (t = 0,
        r = n,
        n = new Map)
    }
    ;
    return {
        get(i) {
            let s = n.get(i);
            if (s !== void 0)
                return s;
            if ((s = r.get(i)) !== void 0)
                return o(i, s),
                s
        },
        set(i, s) {
            n.has(i) ? n.set(i, s) : o(i, s)
        }
    }
}
  , dg = "!"
  , Qw = e => {
    const {separator: t, experimentalParseClassName: n} = e
      , r = t.length === 1
      , o = t[0]
      , i = t.length
      , s = a => {
        const l = [];
        let u = 0, d = 0, f;
        for (let w = 0; w < a.length; w++) {
            let v = a[w];
            if (u === 0) {
                if (v === o && (r || a.slice(w, w + i) === t)) {
                    l.push(a.slice(d, w)),
                    d = w + i;
                    continue
                }
                if (v === "/") {
                    f = w;
                    continue
                }
            }
            v === "[" ? u++ : v === "]" && u--
        }
        const g = l.length === 0 ? a : a.substring(d)
          , p = g.startsWith(dg)
          , S = p ? g.substring(1) : g
          , m = f && f > d ? f - d : void 0;
        return {
            modifiers: l,
            hasImportantModifier: p,
            baseClassName: S,
            maybePostfixModifierPosition: m
        }
    }
    ;
    return n ? a => n({
        className: a,
        parseClassName: s
    }) : s
}
  , Gw = e => {
    if (e.length <= 1)
        return e;
    const t = [];
    let n = [];
    return e.forEach(r => {
        r[0] === "[" ? (t.push(...n.sort(), r),
        n = []) : n.push(r)
    }
    ),
    t.push(...n.sort()),
    t
}
  , Yw = e => ({
    cache: Kw(e.cacheSize),
    parseClassName: Qw(e),
    ...Bw(e)
})
  , Xw = /\s+/
  , qw = (e, t) => {
    const {parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: o} = t
      , i = []
      , s = e.trim().split(Xw);
    let a = "";
    for (let l = s.length - 1; l >= 0; l -= 1) {
        const u = s[l]
          , {modifiers: d, hasImportantModifier: f, baseClassName: g, maybePostfixModifierPosition: p} = n(u);
        let S = !!p
          , m = r(S ? g.substring(0, p) : g);
        if (!m) {
            if (!S) {
                a = u + (a.length > 0 ? " " + a : a);
                continue
            }
            if (m = r(g),
            !m) {
                a = u + (a.length > 0 ? " " + a : a);
                continue
            }
            S = !1
        }
        const w = Gw(d).join(":")
          , v = f ? w + dg : w
          , h = v + m;
        if (i.includes(h))
            continue;
        i.push(h);
        const x = o(m, S);
        for (let b = 0; b < x.length; ++b) {
            const C = x[b];
            i.push(v + C)
        }
        a = u + (a.length > 0 ? " " + a : a)
    }
    return a
}
;
function Zw() {
    let e = 0, t, n, r = "";
    for (; e < arguments.length; )
        (t = arguments[e++]) && (n = fg(t)) && (r && (r += " "),
        r += n);
    return r
}
const fg = e => {
    if (typeof e == "string")
        return e;
    let t, n = "";
    for (let r = 0; r < e.length; r++)
        e[r] && (t = fg(e[r])) && (n && (n += " "),
        n += t);
    return n
}
;
function Jw(e, ...t) {
    let n, r, o, i = s;
    function s(l) {
        const u = t.reduce( (d, f) => f(d), e());
        return n = Yw(u),
        r = n.cache.get,
        o = n.cache.set,
        i = a,
        a(l)
    }
    function a(l) {
        const u = r(l);
        if (u)
            return u;
        const d = qw(l, n);
        return o(l, d),
        d
    }
    return function() {
        return i(Zw.apply(null, arguments))
    }
}
const re = e => {
    const t = n => n[e] || [];
    return t.isThemeGetter = !0,
    t
}
  , pg = /^\[(?:([a-z-]+):)?(.+)\]$/i
  , e1 = /^\d+\/\d+$/
  , t1 = new Set(["px", "full", "screen"])
  , n1 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , r1 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , o1 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
  , i1 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , s1 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , Ut = e => Hr(e) || t1.has(e) || e1.test(e)
  , pn = e => vo(e, "length", m1)
  , Hr = e => !!e && !Number.isNaN(Number(e))
  , cl = e => vo(e, "number", Hr)
  , Ao = e => !!e && Number.isInteger(Number(e))
  , a1 = e => e.endsWith("%") && Hr(e.slice(0, -1))
  , H = e => pg.test(e)
  , mn = e => n1.test(e)
  , l1 = new Set(["length", "size", "percentage"])
  , c1 = e => vo(e, l1, mg)
  , u1 = e => vo(e, "position", mg)
  , d1 = new Set(["image", "url"])
  , f1 = e => vo(e, d1, g1)
  , p1 = e => vo(e, "", h1)
  , Lo = () => !0
  , vo = (e, t, n) => {
    const r = pg.exec(e);
    return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1
}
  , m1 = e => r1.test(e) && !o1.test(e)
  , mg = () => !1
  , h1 = e => i1.test(e)
  , g1 = e => s1.test(e)
  , v1 = () => {
    const e = re("colors")
      , t = re("spacing")
      , n = re("blur")
      , r = re("brightness")
      , o = re("borderColor")
      , i = re("borderRadius")
      , s = re("borderSpacing")
      , a = re("borderWidth")
      , l = re("contrast")
      , u = re("grayscale")
      , d = re("hueRotate")
      , f = re("invert")
      , g = re("gap")
      , p = re("gradientColorStops")
      , S = re("gradientColorStopPositions")
      , m = re("inset")
      , w = re("margin")
      , v = re("opacity")
      , h = re("padding")
      , x = re("saturate")
      , b = re("scale")
      , C = re("sepia")
      , E = re("skew")
      , k = re("space")
      , R = re("translate")
      , z = () => ["auto", "contain", "none"]
      , L = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , F = () => ["auto", H, t]
      , _ = () => [H, t]
      , K = () => ["", Ut, pn]
      , O = () => ["auto", Hr, H]
      , Y = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
      , $ = () => ["solid", "dashed", "dotted", "double", "none"]
      , U = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , P = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
      , j = () => ["", "0", H]
      , D = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , V = () => [Hr, H];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [Lo],
            spacing: [Ut, pn],
            blur: ["none", "", mn, H],
            brightness: V(),
            borderColor: [e],
            borderRadius: ["none", "", "full", mn, H],
            borderSpacing: _(),
            borderWidth: K(),
            contrast: V(),
            grayscale: j(),
            hueRotate: V(),
            invert: j(),
            gap: _(),
            gradientColorStops: [e],
            gradientColorStopPositions: [a1, pn],
            inset: F(),
            margin: F(),
            opacity: V(),
            padding: _(),
            saturate: V(),
            scale: V(),
            sepia: j(),
            skew: V(),
            space: _(),
            translate: _()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", H]
            }],
            container: ["container"],
            columns: [{
                columns: [mn]
            }],
            "break-after": [{
                "break-after": D()
            }],
            "break-before": [{
                "break-before": D()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [...Y(), H]
            }],
            overflow: [{
                overflow: L()
            }],
            "overflow-x": [{
                "overflow-x": L()
            }],
            "overflow-y": [{
                "overflow-y": L()
            }],
            overscroll: [{
                overscroll: z()
            }],
            "overscroll-x": [{
                "overscroll-x": z()
            }],
            "overscroll-y": [{
                "overscroll-y": z()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [m]
            }],
            "inset-x": [{
                "inset-x": [m]
            }],
            "inset-y": [{
                "inset-y": [m]
            }],
            start: [{
                start: [m]
            }],
            end: [{
                end: [m]
            }],
            top: [{
                top: [m]
            }],
            right: [{
                right: [m]
            }],
            bottom: [{
                bottom: [m]
            }],
            left: [{
                left: [m]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", Ao, H]
            }],
            basis: [{
                basis: F()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", H]
            }],
            grow: [{
                grow: j()
            }],
            shrink: [{
                shrink: j()
            }],
            order: [{
                order: ["first", "last", "none", Ao, H]
            }],
            "grid-cols": [{
                "grid-cols": [Lo]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", Ao, H]
                }, H]
            }],
            "col-start": [{
                "col-start": O()
            }],
            "col-end": [{
                "col-end": O()
            }],
            "grid-rows": [{
                "grid-rows": [Lo]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [Ao, H]
                }, H]
            }],
            "row-start": [{
                "row-start": O()
            }],
            "row-end": [{
                "row-end": O()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", H]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", H]
            }],
            gap: [{
                gap: [g]
            }],
            "gap-x": [{
                "gap-x": [g]
            }],
            "gap-y": [{
                "gap-y": [g]
            }],
            "justify-content": [{
                justify: ["normal", ...P()]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", ...P(), "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [...P(), "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [h]
            }],
            px: [{
                px: [h]
            }],
            py: [{
                py: [h]
            }],
            ps: [{
                ps: [h]
            }],
            pe: [{
                pe: [h]
            }],
            pt: [{
                pt: [h]
            }],
            pr: [{
                pr: [h]
            }],
            pb: [{
                pb: [h]
            }],
            pl: [{
                pl: [h]
            }],
            m: [{
                m: [w]
            }],
            mx: [{
                mx: [w]
            }],
            my: [{
                my: [w]
            }],
            ms: [{
                ms: [w]
            }],
            me: [{
                me: [w]
            }],
            mt: [{
                mt: [w]
            }],
            mr: [{
                mr: [w]
            }],
            mb: [{
                mb: [w]
            }],
            ml: [{
                ml: [w]
            }],
            "space-x": [{
                "space-x": [k]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [k]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", H, t]
            }],
            "min-w": [{
                "min-w": [H, t, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [H, t, "none", "full", "min", "max", "fit", "prose", {
                    screen: [mn]
                }, mn]
            }],
            h: [{
                h: [H, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [H, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [H, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [H, t, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", mn, pn]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", cl]
            }],
            "font-family": [{
                font: [Lo]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", H]
            }],
            "line-clamp": [{
                "line-clamp": ["none", Hr, cl]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Ut, H]
            }],
            "list-image": [{
                "list-image": ["none", H]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", H]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [e]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [v]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [e]
            }],
            "text-opacity": [{
                "text-opacity": [v]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...$(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", Ut, pn]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", Ut, H]
            }],
            "text-decoration-color": [{
                decoration: [e]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: _()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", H]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", H]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [v]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [...Y(), u1]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", c1]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, f1]
            }],
            "bg-color": [{
                bg: [e]
            }],
            "gradient-from-pos": [{
                from: [S]
            }],
            "gradient-via-pos": [{
                via: [S]
            }],
            "gradient-to-pos": [{
                to: [S]
            }],
            "gradient-from": [{
                from: [p]
            }],
            "gradient-via": [{
                via: [p]
            }],
            "gradient-to": [{
                to: [p]
            }],
            rounded: [{
                rounded: [i]
            }],
            "rounded-s": [{
                "rounded-s": [i]
            }],
            "rounded-e": [{
                "rounded-e": [i]
            }],
            "rounded-t": [{
                "rounded-t": [i]
            }],
            "rounded-r": [{
                "rounded-r": [i]
            }],
            "rounded-b": [{
                "rounded-b": [i]
            }],
            "rounded-l": [{
                "rounded-l": [i]
            }],
            "rounded-ss": [{
                "rounded-ss": [i]
            }],
            "rounded-se": [{
                "rounded-se": [i]
            }],
            "rounded-ee": [{
                "rounded-ee": [i]
            }],
            "rounded-es": [{
                "rounded-es": [i]
            }],
            "rounded-tl": [{
                "rounded-tl": [i]
            }],
            "rounded-tr": [{
                "rounded-tr": [i]
            }],
            "rounded-br": [{
                "rounded-br": [i]
            }],
            "rounded-bl": [{
                "rounded-bl": [i]
            }],
            "border-w": [{
                border: [a]
            }],
            "border-w-x": [{
                "border-x": [a]
            }],
            "border-w-y": [{
                "border-y": [a]
            }],
            "border-w-s": [{
                "border-s": [a]
            }],
            "border-w-e": [{
                "border-e": [a]
            }],
            "border-w-t": [{
                "border-t": [a]
            }],
            "border-w-r": [{
                "border-r": [a]
            }],
            "border-w-b": [{
                "border-b": [a]
            }],
            "border-w-l": [{
                "border-l": [a]
            }],
            "border-opacity": [{
                "border-opacity": [v]
            }],
            "border-style": [{
                border: [...$(), "hidden"]
            }],
            "divide-x": [{
                "divide-x": [a]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [a]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [v]
            }],
            "divide-style": [{
                divide: $()
            }],
            "border-color": [{
                border: [o]
            }],
            "border-color-x": [{
                "border-x": [o]
            }],
            "border-color-y": [{
                "border-y": [o]
            }],
            "border-color-s": [{
                "border-s": [o]
            }],
            "border-color-e": [{
                "border-e": [o]
            }],
            "border-color-t": [{
                "border-t": [o]
            }],
            "border-color-r": [{
                "border-r": [o]
            }],
            "border-color-b": [{
                "border-b": [o]
            }],
            "border-color-l": [{
                "border-l": [o]
            }],
            "divide-color": [{
                divide: [o]
            }],
            "outline-style": [{
                outline: ["", ...$()]
            }],
            "outline-offset": [{
                "outline-offset": [Ut, H]
            }],
            "outline-w": [{
                outline: [Ut, pn]
            }],
            "outline-color": [{
                outline: [e]
            }],
            "ring-w": [{
                ring: K()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [e]
            }],
            "ring-opacity": [{
                "ring-opacity": [v]
            }],
            "ring-offset-w": [{
                "ring-offset": [Ut, pn]
            }],
            "ring-offset-color": [{
                "ring-offset": [e]
            }],
            shadow: [{
                shadow: ["", "inner", "none", mn, p1]
            }],
            "shadow-color": [{
                shadow: [Lo]
            }],
            opacity: [{
                opacity: [v]
            }],
            "mix-blend": [{
                "mix-blend": [...U(), "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
                "bg-blend": U()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [n]
            }],
            brightness: [{
                brightness: [r]
            }],
            contrast: [{
                contrast: [l]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", mn, H]
            }],
            grayscale: [{
                grayscale: [u]
            }],
            "hue-rotate": [{
                "hue-rotate": [d]
            }],
            invert: [{
                invert: [f]
            }],
            saturate: [{
                saturate: [x]
            }],
            sepia: [{
                sepia: [C]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [n]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [r]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [l]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [u]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [d]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [f]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [v]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [x]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [C]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [s]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [s]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [s]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", H]
            }],
            duration: [{
                duration: V()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", H]
            }],
            delay: [{
                delay: V()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", H]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [b]
            }],
            "scale-x": [{
                "scale-x": [b]
            }],
            "scale-y": [{
                "scale-y": [b]
            }],
            rotate: [{
                rotate: [Ao, H]
            }],
            "translate-x": [{
                "translate-x": [R]
            }],
            "translate-y": [{
                "translate-y": [R]
            }],
            "skew-x": [{
                "skew-x": [E]
            }],
            "skew-y": [{
                "skew-y": [E]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", H]
            }],
            accent: [{
                accent: ["auto", e]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", H]
            }],
            "caret-color": [{
                caret: [e]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": _()
            }],
            "scroll-mx": [{
                "scroll-mx": _()
            }],
            "scroll-my": [{
                "scroll-my": _()
            }],
            "scroll-ms": [{
                "scroll-ms": _()
            }],
            "scroll-me": [{
                "scroll-me": _()
            }],
            "scroll-mt": [{
                "scroll-mt": _()
            }],
            "scroll-mr": [{
                "scroll-mr": _()
            }],
            "scroll-mb": [{
                "scroll-mb": _()
            }],
            "scroll-ml": [{
                "scroll-ml": _()
            }],
            "scroll-p": [{
                "scroll-p": _()
            }],
            "scroll-px": [{
                "scroll-px": _()
            }],
            "scroll-py": [{
                "scroll-py": _()
            }],
            "scroll-ps": [{
                "scroll-ps": _()
            }],
            "scroll-pe": [{
                "scroll-pe": _()
            }],
            "scroll-pt": [{
                "scroll-pt": _()
            }],
            "scroll-pr": [{
                "scroll-pr": _()
            }],
            "scroll-pb": [{
                "scroll-pb": _()
            }],
            "scroll-pl": [{
                "scroll-pl": _()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", H]
            }],
            fill: [{
                fill: [e, "none"]
            }],
            "stroke-w": [{
                stroke: [Ut, pn, cl]
            }],
            stroke: [{
                stroke: [e, "none"]
            }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
  , y1 = Jw(v1);
function ye(...e) {
    return y1(ig(e))
}
const x1 = Lw
  , hg = y.forwardRef( ({className: e, ...t}, n) => c.jsx(Zh, {
    ref: n,
    className: ye("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
    ...t
}));
hg.displayName = Zh.displayName;
const w1 = sg("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , gg = y.forwardRef( ({className: e, variant: t, ...n}, r) => c.jsx(Jh, {
    ref: r,
    className: ye(w1({
        variant: t
    }), e),
    ...n
}));
gg.displayName = Jh.displayName;
const S1 = y.forwardRef( ({className: e, ...t}, n) => c.jsx(ng, {
    ref: n,
    className: ye("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50", e),
    ...t
}));
S1.displayName = ng.displayName;
const vg = y.forwardRef( ({className: e, ...t}, n) => c.jsx(rg, {
    ref: n,
    className: ye("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: c.jsx(cg, {
        className: "h-4 w-4"
    })
}));
vg.displayName = rg.displayName;
const yg = y.forwardRef( ({className: e, ...t}, n) => c.jsx(eg, {
    ref: n,
    className: ye("text-sm font-semibold", e),
    ...t
}));
yg.displayName = eg.displayName;
const xg = y.forwardRef( ({className: e, ...t}, n) => c.jsx(tg, {
    ref: n,
    className: ye("text-sm opacity-90", e),
    ...t
}));
xg.displayName = tg.displayName;
function b1() {
    const {toasts: e} = Fx();
    return c.jsxs(x1, {
        children: [e.map(function({id: t, title: n, description: r, action: o, ...i}) {
            return c.jsxs(gg, {
                ...i,
                children: [c.jsxs("div", {
                    className: "grid gap-1",
                    children: [n && c.jsx(yg, {
                        children: n
                    }), r && c.jsx(xg, {
                        children: r
                    })]
                }), o, c.jsx(vg, {})]
            }, t)
        }), c.jsx(hg, {})]
    })
}
var Cf = ["light", "dark"]
  , C1 = "(prefers-color-scheme: dark)"
  , E1 = y.createContext(void 0)
  , k1 = {
    setTheme: e => {}
    ,
    themes: []
}
  , N1 = () => {
    var e;
    return (e = y.useContext(E1)) != null ? e : k1
}
;
y.memo( ({forcedTheme: e, storageKey: t, attribute: n, enableSystem: r, enableColorScheme: o, defaultTheme: i, value: s, attrs: a, nonce: l}) => {
    let u = i === "system"
      , d = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${a.map(S => `'${S}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`
      , f = o ? Cf.includes(i) && i ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : ""
      , g = (S, m=!1, w=!0) => {
        let v = s ? s[S] : S
          , h = m ? S + "|| ''" : `'${v}'`
          , x = "";
        return o && w && !m && Cf.includes(S) && (x += `d.style.colorScheme = '${S}';`),
        n === "class" ? m || v ? x += `c.add(${h})` : x += "null" : v && (x += `d[s](n,${h})`),
        x
    }
      , p = e ? `!function(){${d}${g(e)}}()` : r ? `!function(){try{${d}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${C1}',m=window.matchMedia(t);if(m.media!==t||m.matches){${g("dark")}}else{${g("light")}}}else if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${g(s ? "x[e]" : "e", !0)}}${u ? "" : "else{" + g(i, !1, !1) + "}"}${f}}catch(e){}}()` : `!function(){try{${d}var e=localStorage.getItem('${t}');if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${g(s ? "x[e]" : "e", !0)}}else{${g(i, !1, !1)};}${f}}catch(t){}}();`;
    return y.createElement("script", {
        nonce: l,
        dangerouslySetInnerHTML: {
            __html: p
        }
    })
}
);
var P1 = e => {
    switch (e) {
    case "success":
        return T1;
    case "info":
        return L1;
    case "warning":
        return A1;
    case "error":
        return z1;
    default:
        return null
    }
}
  , j1 = Array(12).fill(0)
  , R1 = ({visible: e, className: t}) => A.createElement("div", {
    className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
    "data-visible": e
}, A.createElement("div", {
    className: "sonner-spinner"
}, j1.map( (n, r) => A.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${r}`
}))))
  , T1 = A.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, A.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
}))
  , A1 = A.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
}, A.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
}))
  , L1 = A.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, A.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
}))
  , z1 = A.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, A.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
}))
  , O1 = A.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
}, A.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
}), A.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
}))
  , D1 = () => {
    let[e,t] = A.useState(document.hidden);
    return A.useEffect( () => {
        let n = () => {
            t(document.hidden)
        }
        ;
        return document.addEventListener("visibilitychange", n),
        () => window.removeEventListener("visibilitychange", n)
    }
    , []),
    e
}
  , xc = 1
  , M1 = class {
    constructor() {
        this.subscribe = e => (this.subscribers.push(e),
        () => {
            let t = this.subscribers.indexOf(e);
            this.subscribers.splice(t, 1)
        }
        ),
        this.publish = e => {
            this.subscribers.forEach(t => t(e))
        }
        ,
        this.addToast = e => {
            this.publish(e),
            this.toasts = [...this.toasts, e]
        }
        ,
        this.create = e => {
            var t;
            let {message: n, ...r} = e
              , o = typeof (e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : xc++
              , i = this.toasts.find(a => a.id === o)
              , s = e.dismissible === void 0 ? !0 : e.dismissible;
            return this.dismissedToasts.has(o) && this.dismissedToasts.delete(o),
            i ? this.toasts = this.toasts.map(a => a.id === o ? (this.publish({
                ...a,
                ...e,
                id: o,
                title: n
            }),
            {
                ...a,
                ...e,
                id: o,
                dismissible: s,
                title: n
            }) : a) : this.addToast({
                title: n,
                ...r,
                dismissible: s,
                id: o
            }),
            o
        }
        ,
        this.dismiss = e => (this.dismissedToasts.add(e),
        e || this.toasts.forEach(t => {
            this.subscribers.forEach(n => n({
                id: t.id,
                dismiss: !0
            }))
        }
        ),
        this.subscribers.forEach(t => t({
            id: e,
            dismiss: !0
        })),
        e),
        this.message = (e, t) => this.create({
            ...t,
            message: e
        }),
        this.error = (e, t) => this.create({
            ...t,
            message: e,
            type: "error"
        }),
        this.success = (e, t) => this.create({
            ...t,
            type: "success",
            message: e
        }),
        this.info = (e, t) => this.create({
            ...t,
            type: "info",
            message: e
        }),
        this.warning = (e, t) => this.create({
            ...t,
            type: "warning",
            message: e
        }),
        this.loading = (e, t) => this.create({
            ...t,
            type: "loading",
            message: e
        }),
        this.promise = (e, t) => {
            if (!t)
                return;
            let n;
            t.loading !== void 0 && (n = this.create({
                ...t,
                promise: e,
                type: "loading",
                message: t.loading,
                description: typeof t.description != "function" ? t.description : void 0
            }));
            let r = e instanceof Promise ? e : e(), o = n !== void 0, i, s = r.then(async l => {
                if (i = ["resolve", l],
                A.isValidElement(l))
                    o = !1,
                    this.create({
                        id: n,
                        type: "default",
                        message: l
                    });
                else if (I1(l) && !l.ok) {
                    o = !1;
                    let u = typeof t.error == "function" ? await t.error(`HTTP error! status: ${l.status}`) : t.error
                      , d = typeof t.description == "function" ? await t.description(`HTTP error! status: ${l.status}`) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: u,
                        description: d
                    })
                } else if (t.success !== void 0) {
                    o = !1;
                    let u = typeof t.success == "function" ? await t.success(l) : t.success
                      , d = typeof t.description == "function" ? await t.description(l) : t.description;
                    this.create({
                        id: n,
                        type: "success",
                        message: u,
                        description: d
                    })
                }
            }
            ).catch(async l => {
                if (i = ["reject", l],
                t.error !== void 0) {
                    o = !1;
                    let u = typeof t.error == "function" ? await t.error(l) : t.error
                      , d = typeof t.description == "function" ? await t.description(l) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: u,
                        description: d
                    })
                }
            }
            ).finally( () => {
                var l;
                o && (this.dismiss(n),
                n = void 0),
                (l = t.finally) == null || l.call(t)
            }
            ), a = () => new Promise( (l, u) => s.then( () => i[0] === "reject" ? u(i[1]) : l(i[1])).catch(u));
            return typeof n != "string" && typeof n != "number" ? {
                unwrap: a
            } : Object.assign(n, {
                unwrap: a
            })
        }
        ,
        this.custom = (e, t) => {
            let n = (t == null ? void 0 : t.id) || xc++;
            return this.create({
                jsx: e(n),
                id: n,
                ...t
            }),
            n
        }
        ,
        this.getActiveToasts = () => this.toasts.filter(e => !this.dismissedToasts.has(e.id)),
        this.subscribers = [],
        this.toasts = [],
        this.dismissedToasts = new Set
    }
}
  , Be = new M1
  , _1 = (e, t) => {
    let n = (t == null ? void 0 : t.id) || xc++;
    return Be.addToast({
        title: e,
        ...t,
        id: n
    }),
    n
}
  , I1 = e => e && typeof e == "object" && "ok"in e && typeof e.ok == "boolean" && "status"in e && typeof e.status == "number"
  , F1 = _1
  , $1 = () => Be.toasts
  , B1 = () => Be.getActiveToasts();
Object.assign(F1, {
    success: Be.success,
    info: Be.info,
    warning: Be.warning,
    error: Be.error,
    custom: Be.custom,
    message: Be.message,
    promise: Be.promise,
    dismiss: Be.dismiss,
    loading: Be.loading
}, {
    getHistory: $1,
    getToasts: B1
});
function W1(e, {insertAt: t}={}) {
    if (typeof document > "u")
        return;
    let n = document.head || document.getElementsByTagName("head")[0]
      , r = document.createElement("style");
    r.type = "text/css",
    t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r),
    r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e))
}
W1(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Yi(e) {
    return e.label !== void 0
}
var U1 = 3
  , V1 = "32px"
  , H1 = "16px"
  , Ef = 4e3
  , K1 = 356
  , Q1 = 14
  , G1 = 20
  , Y1 = 200;
function ht(...e) {
    return e.filter(Boolean).join(" ")
}
function X1(e) {
    let[t,n] = e.split("-")
      , r = [];
    return t && r.push(t),
    n && r.push(n),
    r
}
var q1 = e => {
    var t, n, r, o, i, s, a, l, u, d, f;
    let {invert: g, toast: p, unstyled: S, interacting: m, setHeights: w, visibleToasts: v, heights: h, index: x, toasts: b, expanded: C, removeToast: E, defaultRichColors: k, closeButton: R, style: z, cancelButtonStyle: L, actionButtonStyle: F, className: _="", descriptionClassName: K="", duration: O, position: Y, gap: $, loadingIcon: U, expandByDefault: P, classNames: j, icons: D, closeButtonAriaLabel: V="Close toast", pauseWhenPageIsHidden: I} = e
      , [Q,X] = A.useState(null)
      , [he,Ne] = A.useState(null)
      , [J,vr] = A.useState(!1)
      , [sn,Hn] = A.useState(!1)
      , [an,yr] = A.useState(!1)
      , [ln,Ni] = A.useState(!1)
      , [Ra,Pi] = A.useState(!1)
      , [Ta,So] = A.useState(0)
      , [xr,Xu] = A.useState(0)
      , bo = A.useRef(p.duration || O || Ef)
      , qu = A.useRef(null)
      , Kn = A.useRef(null)
      , e0 = x === 0
      , t0 = x + 1 <= v
      , nt = p.type
      , wr = p.dismissible !== !1
      , n0 = p.className || ""
      , r0 = p.descriptionClassName || ""
      , ji = A.useMemo( () => h.findIndex(B => B.toastId === p.id) || 0, [h, p.id])
      , o0 = A.useMemo( () => {
        var B;
        return (B = p.closeButton) != null ? B : R
    }
    , [p.closeButton, R])
      , Zu = A.useMemo( () => p.duration || O || Ef, [p.duration, O])
      , Aa = A.useRef(0)
      , Sr = A.useRef(0)
      , Ju = A.useRef(0)
      , br = A.useRef(null)
      , [i0,s0] = Y.split("-")
      , ed = A.useMemo( () => h.reduce( (B, te, se) => se >= ji ? B : B + te.height, 0), [h, ji])
      , td = D1()
      , a0 = p.invert || g
      , La = nt === "loading";
    Sr.current = A.useMemo( () => ji * $ + ed, [ji, ed]),
    A.useEffect( () => {
        bo.current = Zu
    }
    , [Zu]),
    A.useEffect( () => {
        vr(!0)
    }
    , []),
    A.useEffect( () => {
        let B = Kn.current;
        if (B) {
            let te = B.getBoundingClientRect().height;
            return Xu(te),
            w(se => [{
                toastId: p.id,
                height: te,
                position: p.position
            }, ...se]),
            () => w(se => se.filter(dt => dt.toastId !== p.id))
        }
    }
    , [w, p.id]),
    A.useLayoutEffect( () => {
        if (!J)
            return;
        let B = Kn.current
          , te = B.style.height;
        B.style.height = "auto";
        let se = B.getBoundingClientRect().height;
        B.style.height = te,
        Xu(se),
        w(dt => dt.find(ft => ft.toastId === p.id) ? dt.map(ft => ft.toastId === p.id ? {
            ...ft,
            height: se
        } : ft) : [{
            toastId: p.id,
            height: se,
            position: p.position
        }, ...dt])
    }
    , [J, p.title, p.description, w, p.id]);
    let cn = A.useCallback( () => {
        Hn(!0),
        So(Sr.current),
        w(B => B.filter(te => te.toastId !== p.id)),
        setTimeout( () => {
            E(p)
        }
        , Y1)
    }
    , [p, E, w, Sr]);
    A.useEffect( () => {
        if (p.promise && nt === "loading" || p.duration === 1 / 0 || p.type === "loading")
            return;
        let B;
        return C || m || I && td ? ( () => {
            if (Ju.current < Aa.current) {
                let te = new Date().getTime() - Aa.current;
                bo.current = bo.current - te
            }
            Ju.current = new Date().getTime()
        }
        )() : bo.current !== 1 / 0 && (Aa.current = new Date().getTime(),
        B = setTimeout( () => {
            var te;
            (te = p.onAutoClose) == null || te.call(p, p),
            cn()
        }
        , bo.current)),
        () => clearTimeout(B)
    }
    , [C, m, p, nt, I, td, cn]),
    A.useEffect( () => {
        p.delete && cn()
    }
    , [cn, p.delete]);
    function l0() {
        var B, te, se;
        return D != null && D.loading ? A.createElement("div", {
            className: ht(j == null ? void 0 : j.loader, (B = p == null ? void 0 : p.classNames) == null ? void 0 : B.loader, "sonner-loader"),
            "data-visible": nt === "loading"
        }, D.loading) : U ? A.createElement("div", {
            className: ht(j == null ? void 0 : j.loader, (te = p == null ? void 0 : p.classNames) == null ? void 0 : te.loader, "sonner-loader"),
            "data-visible": nt === "loading"
        }, U) : A.createElement(R1, {
            className: ht(j == null ? void 0 : j.loader, (se = p == null ? void 0 : p.classNames) == null ? void 0 : se.loader),
            visible: nt === "loading"
        })
    }
    return A.createElement("li", {
        tabIndex: 0,
        ref: Kn,
        className: ht(_, n0, j == null ? void 0 : j.toast, (t = p == null ? void 0 : p.classNames) == null ? void 0 : t.toast, j == null ? void 0 : j.default, j == null ? void 0 : j[nt], (n = p == null ? void 0 : p.classNames) == null ? void 0 : n[nt]),
        "data-sonner-toast": "",
        "data-rich-colors": (r = p.richColors) != null ? r : k,
        "data-styled": !(p.jsx || p.unstyled || S),
        "data-mounted": J,
        "data-promise": !!p.promise,
        "data-swiped": Ra,
        "data-removed": sn,
        "data-visible": t0,
        "data-y-position": i0,
        "data-x-position": s0,
        "data-index": x,
        "data-front": e0,
        "data-swiping": an,
        "data-dismissible": wr,
        "data-type": nt,
        "data-invert": a0,
        "data-swipe-out": ln,
        "data-swipe-direction": he,
        "data-expanded": !!(C || P && J),
        style: {
            "--index": x,
            "--toasts-before": x,
            "--z-index": b.length - x,
            "--offset": `${sn ? Ta : Sr.current}px`,
            "--initial-height": P ? "auto" : `${xr}px`,
            ...z,
            ...p.style
        },
        onDragEnd: () => {
            yr(!1),
            X(null),
            br.current = null
        }
        ,
        onPointerDown: B => {
            La || !wr || (qu.current = new Date,
            So(Sr.current),
            B.target.setPointerCapture(B.pointerId),
            B.target.tagName !== "BUTTON" && (yr(!0),
            br.current = {
                x: B.clientX,
                y: B.clientY
            }))
        }
        ,
        onPointerUp: () => {
            var B, te, se, dt;
            if (ln || !wr)
                return;
            br.current = null;
            let ft = Number(((B = Kn.current) == null ? void 0 : B.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0)
              , un = Number(((te = Kn.current) == null ? void 0 : te.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0)
              , Qn = new Date().getTime() - ((se = qu.current) == null ? void 0 : se.getTime())
              , pt = Q === "x" ? ft : un
              , dn = Math.abs(pt) / Qn;
            if (Math.abs(pt) >= G1 || dn > .11) {
                So(Sr.current),
                (dt = p.onDismiss) == null || dt.call(p, p),
                Ne(Q === "x" ? ft > 0 ? "right" : "left" : un > 0 ? "down" : "up"),
                cn(),
                Ni(!0),
                Pi(!1);
                return
            }
            yr(!1),
            X(null)
        }
        ,
        onPointerMove: B => {
            var te, se, dt, ft;
            if (!br.current || !wr || ((te = window.getSelection()) == null ? void 0 : te.toString().length) > 0)
                return;
            let un = B.clientY - br.current.y
              , Qn = B.clientX - br.current.x
              , pt = (se = e.swipeDirections) != null ? se : X1(Y);
            !Q && (Math.abs(Qn) > 1 || Math.abs(un) > 1) && X(Math.abs(Qn) > Math.abs(un) ? "x" : "y");
            let dn = {
                x: 0,
                y: 0
            };
            Q === "y" ? (pt.includes("top") || pt.includes("bottom")) && (pt.includes("top") && un < 0 || pt.includes("bottom") && un > 0) && (dn.y = un) : Q === "x" && (pt.includes("left") || pt.includes("right")) && (pt.includes("left") && Qn < 0 || pt.includes("right") && Qn > 0) && (dn.x = Qn),
            (Math.abs(dn.x) > 0 || Math.abs(dn.y) > 0) && Pi(!0),
            (dt = Kn.current) == null || dt.style.setProperty("--swipe-amount-x", `${dn.x}px`),
            (ft = Kn.current) == null || ft.style.setProperty("--swipe-amount-y", `${dn.y}px`)
        }
    }, o0 && !p.jsx ? A.createElement("button", {
        "aria-label": V,
        "data-disabled": La,
        "data-close-button": !0,
        onClick: La || !wr ? () => {}
        : () => {
            var B;
            cn(),
            (B = p.onDismiss) == null || B.call(p, p)
        }
        ,
        className: ht(j == null ? void 0 : j.closeButton, (o = p == null ? void 0 : p.classNames) == null ? void 0 : o.closeButton)
    }, (i = D == null ? void 0 : D.close) != null ? i : O1) : null, p.jsx || y.isValidElement(p.title) ? p.jsx ? p.jsx : typeof p.title == "function" ? p.title() : p.title : A.createElement(A.Fragment, null, nt || p.icon || p.promise ? A.createElement("div", {
        "data-icon": "",
        className: ht(j == null ? void 0 : j.icon, (s = p == null ? void 0 : p.classNames) == null ? void 0 : s.icon)
    }, p.promise || p.type === "loading" && !p.icon ? p.icon || l0() : null, p.type !== "loading" ? p.icon || (D == null ? void 0 : D[nt]) || P1(nt) : null) : null, A.createElement("div", {
        "data-content": "",
        className: ht(j == null ? void 0 : j.content, (a = p == null ? void 0 : p.classNames) == null ? void 0 : a.content)
    }, A.createElement("div", {
        "data-title": "",
        className: ht(j == null ? void 0 : j.title, (l = p == null ? void 0 : p.classNames) == null ? void 0 : l.title)
    }, typeof p.title == "function" ? p.title() : p.title), p.description ? A.createElement("div", {
        "data-description": "",
        className: ht(K, r0, j == null ? void 0 : j.description, (u = p == null ? void 0 : p.classNames) == null ? void 0 : u.description)
    }, typeof p.description == "function" ? p.description() : p.description) : null), y.isValidElement(p.cancel) ? p.cancel : p.cancel && Yi(p.cancel) ? A.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: p.cancelButtonStyle || L,
        onClick: B => {
            var te, se;
            Yi(p.cancel) && wr && ((se = (te = p.cancel).onClick) == null || se.call(te, B),
            cn())
        }
        ,
        className: ht(j == null ? void 0 : j.cancelButton, (d = p == null ? void 0 : p.classNames) == null ? void 0 : d.cancelButton)
    }, p.cancel.label) : null, y.isValidElement(p.action) ? p.action : p.action && Yi(p.action) ? A.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: p.actionButtonStyle || F,
        onClick: B => {
            var te, se;
            Yi(p.action) && ((se = (te = p.action).onClick) == null || se.call(te, B),
            !B.defaultPrevented && cn())
        }
        ,
        className: ht(j == null ? void 0 : j.actionButton, (f = p == null ? void 0 : p.classNames) == null ? void 0 : f.actionButton)
    }, p.action.label) : null))
}
;
function kf() {
    if (typeof window > "u" || typeof document > "u")
        return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e
}
function Z1(e, t) {
    let n = {};
    return [e, t].forEach( (r, o) => {
        let i = o === 1
          , s = i ? "--mobile-offset" : "--offset"
          , a = i ? H1 : V1;
        function l(u) {
            ["top", "right", "bottom", "left"].forEach(d => {
                n[`${s}-${d}`] = typeof u == "number" ? `${u}px` : u
            }
            )
        }
        typeof r == "number" || typeof r == "string" ? l(r) : typeof r == "object" ? ["top", "right", "bottom", "left"].forEach(u => {
            r[u] === void 0 ? n[`${s}-${u}`] = a : n[`${s}-${u}`] = typeof r[u] == "number" ? `${r[u]}px` : r[u]
        }
        ) : l(a)
    }
    ),
    n
}
var J1 = y.forwardRef(function(e, t) {
    let {invert: n, position: r="bottom-right", hotkey: o=["altKey", "KeyT"], expand: i, closeButton: s, className: a, offset: l, mobileOffset: u, theme: d="light", richColors: f, duration: g, style: p, visibleToasts: S=U1, toastOptions: m, dir: w=kf(), gap: v=Q1, loadingIcon: h, icons: x, containerAriaLabel: b="Notifications", pauseWhenPageIsHidden: C} = e
      , [E,k] = A.useState([])
      , R = A.useMemo( () => Array.from(new Set([r].concat(E.filter(I => I.position).map(I => I.position)))), [E, r])
      , [z,L] = A.useState([])
      , [F,_] = A.useState(!1)
      , [K,O] = A.useState(!1)
      , [Y,$] = A.useState(d !== "system" ? d : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      , U = A.useRef(null)
      , P = o.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , j = A.useRef(null)
      , D = A.useRef(!1)
      , V = A.useCallback(I => {
        k(Q => {
            var X;
            return (X = Q.find(he => he.id === I.id)) != null && X.delete || Be.dismiss(I.id),
            Q.filter( ({id: he}) => he !== I.id)
        }
        )
    }
    , []);
    return A.useEffect( () => Be.subscribe(I => {
        if (I.dismiss) {
            k(Q => Q.map(X => X.id === I.id ? {
                ...X,
                delete: !0
            } : X));
            return
        }
        setTimeout( () => {
            Th.flushSync( () => {
                k(Q => {
                    let X = Q.findIndex(he => he.id === I.id);
                    return X !== -1 ? [...Q.slice(0, X), {
                        ...Q[X],
                        ...I
                    }, ...Q.slice(X + 1)] : [I, ...Q]
                }
                )
            }
            )
        }
        )
    }
    ), []),
    A.useEffect( () => {
        if (d !== "system") {
            $(d);
            return
        }
        if (d === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? $("dark") : $("light")),
        typeof window > "u")
            return;
        let I = window.matchMedia("(prefers-color-scheme: dark)");
        try {
            I.addEventListener("change", ({matches: Q}) => {
                $(Q ? "dark" : "light")
            }
            )
        } catch {
            I.addListener( ({matches: X}) => {
                try {
                    $(X ? "dark" : "light")
                } catch (he) {
                    console.error(he)
                }
            }
            )
        }
    }
    , [d]),
    A.useEffect( () => {
        E.length <= 1 && _(!1)
    }
    , [E]),
    A.useEffect( () => {
        let I = Q => {
            var X, he;
            o.every(Ne => Q[Ne] || Q.code === Ne) && (_(!0),
            (X = U.current) == null || X.focus()),
            Q.code === "Escape" && (document.activeElement === U.current || (he = U.current) != null && he.contains(document.activeElement)) && _(!1)
        }
        ;
        return document.addEventListener("keydown", I),
        () => document.removeEventListener("keydown", I)
    }
    , [o]),
    A.useEffect( () => {
        if (U.current)
            return () => {
                j.current && (j.current.focus({
                    preventScroll: !0
                }),
                j.current = null,
                D.current = !1)
            }
    }
    , [U.current]),
    A.createElement("section", {
        ref: t,
        "aria-label": `${b} ${P}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0
    }, R.map( (I, Q) => {
        var X;
        let[he,Ne] = I.split("-");
        return E.length ? A.createElement("ol", {
            key: I,
            dir: w === "auto" ? kf() : w,
            tabIndex: -1,
            ref: U,
            className: a,
            "data-sonner-toaster": !0,
            "data-theme": Y,
            "data-y-position": he,
            "data-lifted": F && E.length > 1 && !i,
            "data-x-position": Ne,
            style: {
                "--front-toast-height": `${((X = z[0]) == null ? void 0 : X.height) || 0}px`,
                "--width": `${K1}px`,
                "--gap": `${v}px`,
                ...p,
                ...Z1(l, u)
            },
            onBlur: J => {
                D.current && !J.currentTarget.contains(J.relatedTarget) && (D.current = !1,
                j.current && (j.current.focus({
                    preventScroll: !0
                }),
                j.current = null))
            }
            ,
            onFocus: J => {
                J.target instanceof HTMLElement && J.target.dataset.dismissible === "false" || D.current || (D.current = !0,
                j.current = J.relatedTarget)
            }
            ,
            onMouseEnter: () => _(!0),
            onMouseMove: () => _(!0),
            onMouseLeave: () => {
                K || _(!1)
            }
            ,
            onDragEnd: () => _(!1),
            onPointerDown: J => {
                J.target instanceof HTMLElement && J.target.dataset.dismissible === "false" || O(!0)
            }
            ,
            onPointerUp: () => O(!1)
        }, E.filter(J => !J.position && Q === 0 || J.position === I).map( (J, vr) => {
            var sn, Hn;
            return A.createElement(q1, {
                key: J.id,
                icons: x,
                index: vr,
                toast: J,
                defaultRichColors: f,
                duration: (sn = m == null ? void 0 : m.duration) != null ? sn : g,
                className: m == null ? void 0 : m.className,
                descriptionClassName: m == null ? void 0 : m.descriptionClassName,
                invert: n,
                visibleToasts: S,
                closeButton: (Hn = m == null ? void 0 : m.closeButton) != null ? Hn : s,
                interacting: K,
                position: I,
                style: m == null ? void 0 : m.style,
                unstyled: m == null ? void 0 : m.unstyled,
                classNames: m == null ? void 0 : m.classNames,
                cancelButtonStyle: m == null ? void 0 : m.cancelButtonStyle,
                actionButtonStyle: m == null ? void 0 : m.actionButtonStyle,
                removeToast: V,
                toasts: E.filter(an => an.position == J.position),
                heights: z.filter(an => an.position == J.position),
                setHeights: L,
                expandByDefault: i,
                gap: v,
                loadingIcon: h,
                expanded: F,
                pauseWhenPageIsHidden: C,
                swipeDirections: e.swipeDirections
            })
        }
        )) : null
    }
    ))
});
const eS = ({...e}) => {
    const {theme: t="system"} = N1();
    return c.jsx(J1, {
        theme: t,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
            }
        },
        ...e
    })
}
;
var tS = Dc[" useId ".trim().toString()] || ( () => {}
)
  , nS = 0;
function ul(e) {
    const [t,n] = y.useState(tS());
    return tn( () => {
        e || n(r => r ?? String(nS++))
    }
    , [e]),
    e || (t ? `radix-${t}` : "")
}
const rS = ["top", "right", "bottom", "left"]
  , $n = Math.min
  , Ye = Math.max
  , Vs = Math.round
  , Xi = Math.floor
  , It = e => ({
    x: e,
    y: e
})
  , oS = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , iS = {
    start: "end",
    end: "start"
};
function wc(e, t, n) {
    return Ye(e, $n(t, n))
}
function nn(e, t) {
    return typeof e == "function" ? e(t) : e
}
function rn(e) {
    return e.split("-")[0]
}
function yo(e) {
    return e.split("-")[1]
}
function Lu(e) {
    return e === "x" ? "y" : "x"
}
function zu(e) {
    return e === "y" ? "height" : "width"
}
const sS = new Set(["top", "bottom"]);
function Dt(e) {
    return sS.has(rn(e)) ? "y" : "x"
}
function Ou(e) {
    return Lu(Dt(e))
}
function aS(e, t, n) {
    n === void 0 && (n = !1);
    const r = yo(e)
      , o = Ou(e)
      , i = zu(o);
    let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[i] > t.floating[i] && (s = Hs(s)),
    [s, Hs(s)]
}
function lS(e) {
    const t = Hs(e);
    return [Sc(e), t, Sc(t)]
}
function Sc(e) {
    return e.replace(/start|end/g, t => iS[t])
}
const Nf = ["left", "right"]
  , Pf = ["right", "left"]
  , cS = ["top", "bottom"]
  , uS = ["bottom", "top"];
function dS(e, t, n) {
    switch (e) {
    case "top":
    case "bottom":
        return n ? t ? Pf : Nf : t ? Nf : Pf;
    case "left":
    case "right":
        return t ? cS : uS;
    default:
        return []
    }
}
function fS(e, t, n, r) {
    const o = yo(e);
    let i = dS(rn(e), n === "start", r);
    return o && (i = i.map(s => s + "-" + o),
    t && (i = i.concat(i.map(Sc)))),
    i
}
function Hs(e) {
    return e.replace(/left|right|bottom|top/g, t => oS[t])
}
function pS(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}
function wg(e) {
    return typeof e != "number" ? pS(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function Ks(e) {
    const {x: t, y: n, width: r, height: o} = e;
    return {
        width: r,
        height: o,
        top: n,
        left: t,
        right: t + r,
        bottom: n + o,
        x: t,
        y: n
    }
}
function jf(e, t, n) {
    let {reference: r, floating: o} = e;
    const i = Dt(t)
      , s = Ou(t)
      , a = zu(s)
      , l = rn(t)
      , u = i === "y"
      , d = r.x + r.width / 2 - o.width / 2
      , f = r.y + r.height / 2 - o.height / 2
      , g = r[a] / 2 - o[a] / 2;
    let p;
    switch (l) {
    case "top":
        p = {
            x: d,
            y: r.y - o.height
        };
        break;
    case "bottom":
        p = {
            x: d,
            y: r.y + r.height
        };
        break;
    case "right":
        p = {
            x: r.x + r.width,
            y: f
        };
        break;
    case "left":
        p = {
            x: r.x - o.width,
            y: f
        };
        break;
    default:
        p = {
            x: r.x,
            y: r.y
        }
    }
    switch (yo(t)) {
    case "start":
        p[s] -= g * (n && u ? -1 : 1);
        break;
    case "end":
        p[s] += g * (n && u ? -1 : 1);
        break
    }
    return p
}
const mS = async (e, t, n) => {
    const {placement: r="bottom", strategy: o="absolute", middleware: i=[], platform: s} = n
      , a = i.filter(Boolean)
      , l = await (s.isRTL == null ? void 0 : s.isRTL(t));
    let u = await s.getElementRects({
        reference: e,
        floating: t,
        strategy: o
    })
      , {x: d, y: f} = jf(u, r, l)
      , g = r
      , p = {}
      , S = 0;
    for (let m = 0; m < a.length; m++) {
        const {name: w, fn: v} = a[m]
          , {x: h, y: x, data: b, reset: C} = await v({
            x: d,
            y: f,
            initialPlacement: r,
            placement: g,
            strategy: o,
            middlewareData: p,
            rects: u,
            platform: s,
            elements: {
                reference: e,
                floating: t
            }
        });
        d = h ?? d,
        f = x ?? f,
        p = {
            ...p,
            [w]: {
                ...p[w],
                ...b
            }
        },
        C && S <= 50 && (S++,
        typeof C == "object" && (C.placement && (g = C.placement),
        C.rects && (u = C.rects === !0 ? await s.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }) : C.rects),
        {x: d, y: f} = jf(u, g, l)),
        m = -1)
    }
    return {
        x: d,
        y: f,
        placement: g,
        strategy: o,
        middlewareData: p
    }
}
;
async function di(e, t) {
    var n;
    t === void 0 && (t = {});
    const {x: r, y: o, platform: i, rects: s, elements: a, strategy: l} = e
      , {boundary: u="clippingAncestors", rootBoundary: d="viewport", elementContext: f="floating", altBoundary: g=!1, padding: p=0} = nn(t, e)
      , S = wg(p)
      , w = a[g ? f === "floating" ? "reference" : "floating" : f]
      , v = Ks(await i.getClippingRect({
        element: (n = await (i.isElement == null ? void 0 : i.isElement(w))) == null || n ? w : w.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
        boundary: u,
        rootBoundary: d,
        strategy: l
    }))
      , h = f === "floating" ? {
        x: r,
        y: o,
        width: s.floating.width,
        height: s.floating.height
    } : s.reference
      , x = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating))
      , b = await (i.isElement == null ? void 0 : i.isElement(x)) ? await (i.getScale == null ? void 0 : i.getScale(x)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , C = Ks(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: a,
        rect: h,
        offsetParent: x,
        strategy: l
    }) : h);
    return {
        top: (v.top - C.top + S.top) / b.y,
        bottom: (C.bottom - v.bottom + S.bottom) / b.y,
        left: (v.left - C.left + S.left) / b.x,
        right: (C.right - v.right + S.right) / b.x
    }
}
const hS = e => ({
    name: "arrow",
    options: e,
    async fn(t) {
        const {x: n, y: r, placement: o, rects: i, platform: s, elements: a, middlewareData: l} = t
          , {element: u, padding: d=0} = nn(e, t) || {};
        if (u == null)
            return {};
        const f = wg(d)
          , g = {
            x: n,
            y: r
        }
          , p = Ou(o)
          , S = zu(p)
          , m = await s.getDimensions(u)
          , w = p === "y"
          , v = w ? "top" : "left"
          , h = w ? "bottom" : "right"
          , x = w ? "clientHeight" : "clientWidth"
          , b = i.reference[S] + i.reference[p] - g[p] - i.floating[S]
          , C = g[p] - i.reference[p]
          , E = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
        let k = E ? E[x] : 0;
        (!k || !await (s.isElement == null ? void 0 : s.isElement(E))) && (k = a.floating[x] || i.floating[S]);
        const R = b / 2 - C / 2
          , z = k / 2 - m[S] / 2 - 1
          , L = $n(f[v], z)
          , F = $n(f[h], z)
          , _ = L
          , K = k - m[S] - F
          , O = k / 2 - m[S] / 2 + R
          , Y = wc(_, O, K)
          , $ = !l.arrow && yo(o) != null && O !== Y && i.reference[S] / 2 - (O < _ ? L : F) - m[S] / 2 < 0
          , U = $ ? O < _ ? O - _ : O - K : 0;
        return {
            [p]: g[p] + U,
            data: {
                [p]: Y,
                centerOffset: O - Y - U,
                ...$ && {
                    alignmentOffset: U
                }
            },
            reset: $
        }
    }
})
  , gS = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "flip",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: o, middlewareData: i, rects: s, initialPlacement: a, platform: l, elements: u} = t
              , {mainAxis: d=!0, crossAxis: f=!0, fallbackPlacements: g, fallbackStrategy: p="bestFit", fallbackAxisSideDirection: S="none", flipAlignment: m=!0, ...w} = nn(e, t);
            if ((n = i.arrow) != null && n.alignmentOffset)
                return {};
            const v = rn(o)
              , h = Dt(a)
              , x = rn(a) === a
              , b = await (l.isRTL == null ? void 0 : l.isRTL(u.floating))
              , C = g || (x || !m ? [Hs(a)] : lS(a))
              , E = S !== "none";
            !g && E && C.push(...fS(a, m, S, b));
            const k = [a, ...C]
              , R = await di(t, w)
              , z = [];
            let L = ((r = i.flip) == null ? void 0 : r.overflows) || [];
            if (d && z.push(R[v]),
            f) {
                const O = aS(o, s, b);
                z.push(R[O[0]], R[O[1]])
            }
            if (L = [...L, {
                placement: o,
                overflows: z
            }],
            !z.every(O => O <= 0)) {
                var F, _;
                const O = (((F = i.flip) == null ? void 0 : F.index) || 0) + 1
                  , Y = k[O];
                if (Y && (!(f === "alignment" ? h !== Dt(Y) : !1) || L.every(P => P.overflows[0] > 0 && Dt(P.placement) === h)))
                    return {
                        data: {
                            index: O,
                            overflows: L
                        },
                        reset: {
                            placement: Y
                        }
                    };
                let $ = (_ = L.filter(U => U.overflows[0] <= 0).sort( (U, P) => U.overflows[1] - P.overflows[1])[0]) == null ? void 0 : _.placement;
                if (!$)
                    switch (p) {
                    case "bestFit":
                        {
                            var K;
                            const U = (K = L.filter(P => {
                                if (E) {
                                    const j = Dt(P.placement);
                                    return j === h || j === "y"
                                }
                                return !0
                            }
                            ).map(P => [P.placement, P.overflows.filter(j => j > 0).reduce( (j, D) => j + D, 0)]).sort( (P, j) => P[1] - j[1])[0]) == null ? void 0 : K[0];
                            U && ($ = U);
                            break
                        }
                    case "initialPlacement":
                        $ = a;
                        break
                    }
                if (o !== $)
                    return {
                        reset: {
                            placement: $
                        }
                    }
            }
            return {}
        }
    }
};
function Rf(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}
function Tf(e) {
    return rS.some(t => e[t] >= 0)
}
const vS = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "hide",
        options: e,
        async fn(t) {
            const {rects: n} = t
              , {strategy: r="referenceHidden", ...o} = nn(e, t);
            switch (r) {
            case "referenceHidden":
                {
                    const i = await di(t, {
                        ...o,
                        elementContext: "reference"
                    })
                      , s = Rf(i, n.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: s,
                            referenceHidden: Tf(s)
                        }
                    }
                }
            case "escaped":
                {
                    const i = await di(t, {
                        ...o,
                        altBoundary: !0
                    })
                      , s = Rf(i, n.floating);
                    return {
                        data: {
                            escapedOffsets: s,
                            escaped: Tf(s)
                        }
                    }
                }
            default:
                return {}
            }
        }
    }
}
  , Sg = new Set(["left", "top"]);
async function yS(e, t) {
    const {placement: n, platform: r, elements: o} = e
      , i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating))
      , s = rn(n)
      , a = yo(n)
      , l = Dt(n) === "y"
      , u = Sg.has(s) ? -1 : 1
      , d = i && l ? -1 : 1
      , f = nn(t, e);
    let {mainAxis: g, crossAxis: p, alignmentAxis: S} = typeof f == "number" ? {
        mainAxis: f,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: f.mainAxis || 0,
        crossAxis: f.crossAxis || 0,
        alignmentAxis: f.alignmentAxis
    };
    return a && typeof S == "number" && (p = a === "end" ? S * -1 : S),
    l ? {
        x: p * d,
        y: g * u
    } : {
        x: g * u,
        y: p * d
    }
}
const xS = function(e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(t) {
            var n, r;
            const {x: o, y: i, placement: s, middlewareData: a} = t
              , l = await yS(t, e);
            return s === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
                x: o + l.x,
                y: i + l.y,
                data: {
                    ...l,
                    placement: s
                }
            }
        }
    }
}
  , wS = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "shift",
        options: e,
        async fn(t) {
            const {x: n, y: r, placement: o} = t
              , {mainAxis: i=!0, crossAxis: s=!1, limiter: a={
                fn: w => {
                    let {x: v, y: h} = w;
                    return {
                        x: v,
                        y: h
                    }
                }
            }, ...l} = nn(e, t)
              , u = {
                x: n,
                y: r
            }
              , d = await di(t, l)
              , f = Dt(rn(o))
              , g = Lu(f);
            let p = u[g]
              , S = u[f];
            if (i) {
                const w = g === "y" ? "top" : "left"
                  , v = g === "y" ? "bottom" : "right"
                  , h = p + d[w]
                  , x = p - d[v];
                p = wc(h, p, x)
            }
            if (s) {
                const w = f === "y" ? "top" : "left"
                  , v = f === "y" ? "bottom" : "right"
                  , h = S + d[w]
                  , x = S - d[v];
                S = wc(h, S, x)
            }
            const m = a.fn({
                ...t,
                [g]: p,
                [f]: S
            });
            return {
                ...m,
                data: {
                    x: m.x - n,
                    y: m.y - r,
                    enabled: {
                        [g]: i,
                        [f]: s
                    }
                }
            }
        }
    }
}
  , SS = function(e) {
    return e === void 0 && (e = {}),
    {
        options: e,
        fn(t) {
            const {x: n, y: r, placement: o, rects: i, middlewareData: s} = t
              , {offset: a=0, mainAxis: l=!0, crossAxis: u=!0} = nn(e, t)
              , d = {
                x: n,
                y: r
            }
              , f = Dt(o)
              , g = Lu(f);
            let p = d[g]
              , S = d[f];
            const m = nn(a, t)
              , w = typeof m == "number" ? {
                mainAxis: m,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...m
            };
            if (l) {
                const x = g === "y" ? "height" : "width"
                  , b = i.reference[g] - i.floating[x] + w.mainAxis
                  , C = i.reference[g] + i.reference[x] - w.mainAxis;
                p < b ? p = b : p > C && (p = C)
            }
            if (u) {
                var v, h;
                const x = g === "y" ? "width" : "height"
                  , b = Sg.has(rn(o))
                  , C = i.reference[f] - i.floating[x] + (b && ((v = s.offset) == null ? void 0 : v[f]) || 0) + (b ? 0 : w.crossAxis)
                  , E = i.reference[f] + i.reference[x] + (b ? 0 : ((h = s.offset) == null ? void 0 : h[f]) || 0) - (b ? w.crossAxis : 0);
                S < C ? S = C : S > E && (S = E)
            }
            return {
                [g]: p,
                [f]: S
            }
        }
    }
}
  , bS = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "size",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: o, rects: i, platform: s, elements: a} = t
              , {apply: l= () => {}
            , ...u} = nn(e, t)
              , d = await di(t, u)
              , f = rn(o)
              , g = yo(o)
              , p = Dt(o) === "y"
              , {width: S, height: m} = i.floating;
            let w, v;
            f === "top" || f === "bottom" ? (w = f,
            v = g === (await (s.isRTL == null ? void 0 : s.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (v = f,
            w = g === "end" ? "top" : "bottom");
            const h = m - d.top - d.bottom
              , x = S - d.left - d.right
              , b = $n(m - d[w], h)
              , C = $n(S - d[v], x)
              , E = !t.middlewareData.shift;
            let k = b
              , R = C;
            if ((n = t.middlewareData.shift) != null && n.enabled.x && (R = x),
            (r = t.middlewareData.shift) != null && r.enabled.y && (k = h),
            E && !g) {
                const L = Ye(d.left, 0)
                  , F = Ye(d.right, 0)
                  , _ = Ye(d.top, 0)
                  , K = Ye(d.bottom, 0);
                p ? R = S - 2 * (L !== 0 || F !== 0 ? L + F : Ye(d.left, d.right)) : k = m - 2 * (_ !== 0 || K !== 0 ? _ + K : Ye(d.top, d.bottom))
            }
            await l({
                ...t,
                availableWidth: R,
                availableHeight: k
            });
            const z = await s.getDimensions(a.floating);
            return S !== z.width || m !== z.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function va() {
    return typeof window < "u"
}
function xo(e) {
    return bg(e) ? (e.nodeName || "").toLowerCase() : "#document"
}
function Ze(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function Wt(e) {
    var t;
    return (t = (bg(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}
function bg(e) {
    return va() ? e instanceof Node || e instanceof Ze(e).Node : !1
}
function kt(e) {
    return va() ? e instanceof Element || e instanceof Ze(e).Element : !1
}
function $t(e) {
    return va() ? e instanceof HTMLElement || e instanceof Ze(e).HTMLElement : !1
}
function Af(e) {
    return !va() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ze(e).ShadowRoot
}
const CS = new Set(["inline", "contents"]);
function ki(e) {
    const {overflow: t, overflowX: n, overflowY: r, display: o} = Nt(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !CS.has(o)
}
const ES = new Set(["table", "td", "th"]);
function kS(e) {
    return ES.has(xo(e))
}
const NS = [":popover-open", ":modal"];
function ya(e) {
    return NS.some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    }
    )
}
const PS = ["transform", "translate", "scale", "rotate", "perspective"]
  , jS = ["transform", "translate", "scale", "rotate", "perspective", "filter"]
  , RS = ["paint", "layout", "strict", "content"];
function Du(e) {
    const t = Mu()
      , n = kt(e) ? Nt(e) : e;
    return PS.some(r => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || jS.some(r => (n.willChange || "").includes(r)) || RS.some(r => (n.contain || "").includes(r))
}
function TS(e) {
    let t = Bn(e);
    for (; $t(t) && !uo(t); ) {
        if (Du(t))
            return t;
        if (ya(t))
            return null;
        t = Bn(t)
    }
    return null
}
function Mu() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
const AS = new Set(["html", "body", "#document"]);
function uo(e) {
    return AS.has(xo(e))
}
function Nt(e) {
    return Ze(e).getComputedStyle(e)
}
function xa(e) {
    return kt(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}
function Bn(e) {
    if (xo(e) === "html")
        return e;
    const t = e.assignedSlot || e.parentNode || Af(e) && e.host || Wt(e);
    return Af(t) ? t.host : t
}
function Cg(e) {
    const t = Bn(e);
    return uo(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : $t(t) && ki(t) ? t : Cg(t)
}
function fi(e, t, n) {
    var r;
    t === void 0 && (t = []),
    n === void 0 && (n = !0);
    const o = Cg(e)
      , i = o === ((r = e.ownerDocument) == null ? void 0 : r.body)
      , s = Ze(o);
    if (i) {
        const a = bc(s);
        return t.concat(s, s.visualViewport || [], ki(o) ? o : [], a && n ? fi(a) : [])
    }
    return t.concat(o, fi(o, [], n))
}
function bc(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function Eg(e) {
    const t = Nt(e);
    let n = parseFloat(t.width) || 0
      , r = parseFloat(t.height) || 0;
    const o = $t(e)
      , i = o ? e.offsetWidth : n
      , s = o ? e.offsetHeight : r
      , a = Vs(n) !== i || Vs(r) !== s;
    return a && (n = i,
    r = s),
    {
        width: n,
        height: r,
        $: a
    }
}
function _u(e) {
    return kt(e) ? e : e.contextElement
}
function Kr(e) {
    const t = _u(e);
    if (!$t(t))
        return It(1);
    const n = t.getBoundingClientRect()
      , {width: r, height: o, $: i} = Eg(t);
    let s = (i ? Vs(n.width) : n.width) / r
      , a = (i ? Vs(n.height) : n.height) / o;
    return (!s || !Number.isFinite(s)) && (s = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    {
        x: s,
        y: a
    }
}
const LS = It(0);
function kg(e) {
    const t = Ze(e);
    return !Mu() || !t.visualViewport ? LS : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}
function zS(e, t, n) {
    return t === void 0 && (t = !1),
    !n || t && n !== Ze(e) ? !1 : t
}
function fr(e, t, n, r) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !1);
    const o = e.getBoundingClientRect()
      , i = _u(e);
    let s = It(1);
    t && (r ? kt(r) && (s = Kr(r)) : s = Kr(e));
    const a = zS(i, n, r) ? kg(i) : It(0);
    let l = (o.left + a.x) / s.x
      , u = (o.top + a.y) / s.y
      , d = o.width / s.x
      , f = o.height / s.y;
    if (i) {
        const g = Ze(i)
          , p = r && kt(r) ? Ze(r) : r;
        let S = g
          , m = bc(S);
        for (; m && r && p !== S; ) {
            const w = Kr(m)
              , v = m.getBoundingClientRect()
              , h = Nt(m)
              , x = v.left + (m.clientLeft + parseFloat(h.paddingLeft)) * w.x
              , b = v.top + (m.clientTop + parseFloat(h.paddingTop)) * w.y;
            l *= w.x,
            u *= w.y,
            d *= w.x,
            f *= w.y,
            l += x,
            u += b,
            S = Ze(m),
            m = bc(S)
        }
    }
    return Ks({
        width: d,
        height: f,
        x: l,
        y: u
    })
}
function Iu(e, t) {
    const n = xa(e).scrollLeft;
    return t ? t.left + n : fr(Wt(e)).left + n
}
function Ng(e, t, n) {
    n === void 0 && (n = !1);
    const r = e.getBoundingClientRect()
      , o = r.left + t.scrollLeft - (n ? 0 : Iu(e, r))
      , i = r.top + t.scrollTop;
    return {
        x: o,
        y: i
    }
}
function OS(e) {
    let {elements: t, rect: n, offsetParent: r, strategy: o} = e;
    const i = o === "fixed"
      , s = Wt(r)
      , a = t ? ya(t.floating) : !1;
    if (r === s || a && i)
        return n;
    let l = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , u = It(1);
    const d = It(0)
      , f = $t(r);
    if ((f || !f && !i) && ((xo(r) !== "body" || ki(s)) && (l = xa(r)),
    $t(r))) {
        const p = fr(r);
        u = Kr(r),
        d.x = p.x + r.clientLeft,
        d.y = p.y + r.clientTop
    }
    const g = s && !f && !i ? Ng(s, l, !0) : It(0);
    return {
        width: n.width * u.x,
        height: n.height * u.y,
        x: n.x * u.x - l.scrollLeft * u.x + d.x + g.x,
        y: n.y * u.y - l.scrollTop * u.y + d.y + g.y
    }
}
function DS(e) {
    return Array.from(e.getClientRects())
}
function MS(e) {
    const t = Wt(e)
      , n = xa(e)
      , r = e.ownerDocument.body
      , o = Ye(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth)
      , i = Ye(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let s = -n.scrollLeft + Iu(e);
    const a = -n.scrollTop;
    return Nt(r).direction === "rtl" && (s += Ye(t.clientWidth, r.clientWidth) - o),
    {
        width: o,
        height: i,
        x: s,
        y: a
    }
}
function _S(e, t) {
    const n = Ze(e)
      , r = Wt(e)
      , o = n.visualViewport;
    let i = r.clientWidth
      , s = r.clientHeight
      , a = 0
      , l = 0;
    if (o) {
        i = o.width,
        s = o.height;
        const u = Mu();
        (!u || u && t === "fixed") && (a = o.offsetLeft,
        l = o.offsetTop)
    }
    return {
        width: i,
        height: s,
        x: a,
        y: l
    }
}
const IS = new Set(["absolute", "fixed"]);
function FS(e, t) {
    const n = fr(e, !0, t === "fixed")
      , r = n.top + e.clientTop
      , o = n.left + e.clientLeft
      , i = $t(e) ? Kr(e) : It(1)
      , s = e.clientWidth * i.x
      , a = e.clientHeight * i.y
      , l = o * i.x
      , u = r * i.y;
    return {
        width: s,
        height: a,
        x: l,
        y: u
    }
}
function Lf(e, t, n) {
    let r;
    if (t === "viewport")
        r = _S(e, n);
    else if (t === "document")
        r = MS(Wt(e));
    else if (kt(t))
        r = FS(t, n);
    else {
        const o = kg(e);
        r = {
            x: t.x - o.x,
            y: t.y - o.y,
            width: t.width,
            height: t.height
        }
    }
    return Ks(r)
}
function Pg(e, t) {
    const n = Bn(e);
    return n === t || !kt(n) || uo(n) ? !1 : Nt(n).position === "fixed" || Pg(n, t)
}
function $S(e, t) {
    const n = t.get(e);
    if (n)
        return n;
    let r = fi(e, [], !1).filter(a => kt(a) && xo(a) !== "body")
      , o = null;
    const i = Nt(e).position === "fixed";
    let s = i ? Bn(e) : e;
    for (; kt(s) && !uo(s); ) {
        const a = Nt(s)
          , l = Du(s);
        !l && a.position === "fixed" && (o = null),
        (i ? !l && !o : !l && a.position === "static" && !!o && IS.has(o.position) || ki(s) && !l && Pg(e, s)) ? r = r.filter(d => d !== s) : o = a,
        s = Bn(s)
    }
    return t.set(e, r),
    r
}
function BS(e) {
    let {element: t, boundary: n, rootBoundary: r, strategy: o} = e;
    const s = [...n === "clippingAncestors" ? ya(t) ? [] : $S(t, this._c) : [].concat(n), r]
      , a = s[0]
      , l = s.reduce( (u, d) => {
        const f = Lf(t, d, o);
        return u.top = Ye(f.top, u.top),
        u.right = $n(f.right, u.right),
        u.bottom = $n(f.bottom, u.bottom),
        u.left = Ye(f.left, u.left),
        u
    }
    , Lf(t, a, o));
    return {
        width: l.right - l.left,
        height: l.bottom - l.top,
        x: l.left,
        y: l.top
    }
}
function WS(e) {
    const {width: t, height: n} = Eg(e);
    return {
        width: t,
        height: n
    }
}
function US(e, t, n) {
    const r = $t(t)
      , o = Wt(t)
      , i = n === "fixed"
      , s = fr(e, !0, i, t);
    let a = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const l = It(0);
    function u() {
        l.x = Iu(o)
    }
    if (r || !r && !i)
        if ((xo(t) !== "body" || ki(o)) && (a = xa(t)),
        r) {
            const p = fr(t, !0, i, t);
            l.x = p.x + t.clientLeft,
            l.y = p.y + t.clientTop
        } else
            o && u();
    i && !r && o && u();
    const d = o && !r && !i ? Ng(o, a) : It(0)
      , f = s.left + a.scrollLeft - l.x - d.x
      , g = s.top + a.scrollTop - l.y - d.y;
    return {
        x: f,
        y: g,
        width: s.width,
        height: s.height
    }
}
function dl(e) {
    return Nt(e).position === "static"
}
function zf(e, t) {
    if (!$t(e) || Nt(e).position === "fixed")
        return null;
    if (t)
        return t(e);
    let n = e.offsetParent;
    return Wt(e) === n && (n = n.ownerDocument.body),
    n
}
function jg(e, t) {
    const n = Ze(e);
    if (ya(e))
        return n;
    if (!$t(e)) {
        let o = Bn(e);
        for (; o && !uo(o); ) {
            if (kt(o) && !dl(o))
                return o;
            o = Bn(o)
        }
        return n
    }
    let r = zf(e, t);
    for (; r && kS(r) && dl(r); )
        r = zf(r, t);
    return r && uo(r) && dl(r) && !Du(r) ? n : r || TS(e) || n
}
const VS = async function(e) {
    const t = this.getOffsetParent || jg
      , n = this.getDimensions
      , r = await n(e.floating);
    return {
        reference: US(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};
function HS(e) {
    return Nt(e).direction === "rtl"
}
const KS = {
    convertOffsetParentRelativeRectToViewportRelativeRect: OS,
    getDocumentElement: Wt,
    getClippingRect: BS,
    getOffsetParent: jg,
    getElementRects: VS,
    getClientRects: DS,
    getDimensions: WS,
    getScale: Kr,
    isElement: kt,
    isRTL: HS
};
function Rg(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
}
function QS(e, t) {
    let n = null, r;
    const o = Wt(e);
    function i() {
        var a;
        clearTimeout(r),
        (a = n) == null || a.disconnect(),
        n = null
    }
    function s(a, l) {
        a === void 0 && (a = !1),
        l === void 0 && (l = 1),
        i();
        const u = e.getBoundingClientRect()
          , {left: d, top: f, width: g, height: p} = u;
        if (a || t(),
        !g || !p)
            return;
        const S = Xi(f)
          , m = Xi(o.clientWidth - (d + g))
          , w = Xi(o.clientHeight - (f + p))
          , v = Xi(d)
          , x = {
            rootMargin: -S + "px " + -m + "px " + -w + "px " + -v + "px",
            threshold: Ye(0, $n(1, l)) || 1
        };
        let b = !0;
        function C(E) {
            const k = E[0].intersectionRatio;
            if (k !== l) {
                if (!b)
                    return s();
                k ? s(!1, k) : r = setTimeout( () => {
                    s(!1, 1e-7)
                }
                , 1e3)
            }
            k === 1 && !Rg(u, e.getBoundingClientRect()) && s(),
            b = !1
        }
        try {
            n = new IntersectionObserver(C,{
                ...x,
                root: o.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(C,x)
        }
        n.observe(e)
    }
    return s(!0),
    i
}
function GS(e, t, n, r) {
    r === void 0 && (r = {});
    const {ancestorScroll: o=!0, ancestorResize: i=!0, elementResize: s=typeof ResizeObserver == "function", layoutShift: a=typeof IntersectionObserver == "function", animationFrame: l=!1} = r
      , u = _u(e)
      , d = o || i ? [...u ? fi(u) : [], ...fi(t)] : [];
    d.forEach(v => {
        o && v.addEventListener("scroll", n, {
            passive: !0
        }),
        i && v.addEventListener("resize", n)
    }
    );
    const f = u && a ? QS(u, n) : null;
    let g = -1
      , p = null;
    s && (p = new ResizeObserver(v => {
        let[h] = v;
        h && h.target === u && p && (p.unobserve(t),
        cancelAnimationFrame(g),
        g = requestAnimationFrame( () => {
            var x;
            (x = p) == null || x.observe(t)
        }
        )),
        n()
    }
    ),
    u && !l && p.observe(u),
    p.observe(t));
    let S, m = l ? fr(e) : null;
    l && w();
    function w() {
        const v = fr(e);
        m && !Rg(m, v) && n(),
        m = v,
        S = requestAnimationFrame(w)
    }
    return n(),
    () => {
        var v;
        d.forEach(h => {
            o && h.removeEventListener("scroll", n),
            i && h.removeEventListener("resize", n)
        }
        ),
        f == null || f(),
        (v = p) == null || v.disconnect(),
        p = null,
        l && cancelAnimationFrame(S)
    }
}
const YS = xS
  , XS = wS
  , qS = gS
  , ZS = bS
  , JS = vS
  , Of = hS
  , eb = SS
  , tb = (e, t, n) => {
    const r = new Map
      , o = {
        platform: KS,
        ...n
    }
      , i = {
        ...o.platform,
        _c: r
    };
    return mS(e, t, {
        ...o,
        platform: i
    })
}
;
var nb = typeof document < "u"
  , rb = function() {}
  , vs = nb ? y.useLayoutEffect : rb;
function Qs(e, t) {
    if (e === t)
        return !0;
    if (typeof e != typeof t)
        return !1;
    if (typeof e == "function" && e.toString() === t.toString())
        return !0;
    let n, r, o;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length,
            n !== t.length)
                return !1;
            for (r = n; r-- !== 0; )
                if (!Qs(e[r], t[r]))
                    return !1;
            return !0
        }
        if (o = Object.keys(e),
        n = o.length,
        n !== Object.keys(t).length)
            return !1;
        for (r = n; r-- !== 0; )
            if (!{}.hasOwnProperty.call(t, o[r]))
                return !1;
        for (r = n; r-- !== 0; ) {
            const i = o[r];
            if (!(i === "_owner" && e.$$typeof) && !Qs(e[i], t[i]))
                return !1
        }
        return !0
    }
    return e !== e && t !== t
}
function Tg(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function Df(e, t) {
    const n = Tg(e);
    return Math.round(t * n) / n
}
function fl(e) {
    const t = y.useRef(e);
    return vs( () => {
        t.current = e
    }
    ),
    t
}
function ob(e) {
    e === void 0 && (e = {});
    const {placement: t="bottom", strategy: n="absolute", middleware: r=[], platform: o, elements: {reference: i, floating: s}={}, transform: a=!0, whileElementsMounted: l, open: u} = e
      , [d,f] = y.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    })
      , [g,p] = y.useState(r);
    Qs(g, r) || p(r);
    const [S,m] = y.useState(null)
      , [w,v] = y.useState(null)
      , h = y.useCallback(P => {
        P !== E.current && (E.current = P,
        m(P))
    }
    , [])
      , x = y.useCallback(P => {
        P !== k.current && (k.current = P,
        v(P))
    }
    , [])
      , b = i || S
      , C = s || w
      , E = y.useRef(null)
      , k = y.useRef(null)
      , R = y.useRef(d)
      , z = l != null
      , L = fl(l)
      , F = fl(o)
      , _ = fl(u)
      , K = y.useCallback( () => {
        if (!E.current || !k.current)
            return;
        const P = {
            placement: t,
            strategy: n,
            middleware: g
        };
        F.current && (P.platform = F.current),
        tb(E.current, k.current, P).then(j => {
            const D = {
                ...j,
                isPositioned: _.current !== !1
            };
            O.current && !Qs(R.current, D) && (R.current = D,
            bi.flushSync( () => {
                f(D)
            }
            ))
        }
        )
    }
    , [g, t, n, F, _]);
    vs( () => {
        u === !1 && R.current.isPositioned && (R.current.isPositioned = !1,
        f(P => ({
            ...P,
            isPositioned: !1
        })))
    }
    , [u]);
    const O = y.useRef(!1);
    vs( () => (O.current = !0,
    () => {
        O.current = !1
    }
    ), []),
    vs( () => {
        if (b && (E.current = b),
        C && (k.current = C),
        b && C) {
            if (L.current)
                return L.current(b, C, K);
            K()
        }
    }
    , [b, C, K, L, z]);
    const Y = y.useMemo( () => ({
        reference: E,
        floating: k,
        setReference: h,
        setFloating: x
    }), [h, x])
      , $ = y.useMemo( () => ({
        reference: b,
        floating: C
    }), [b, C])
      , U = y.useMemo( () => {
        const P = {
            position: n,
            left: 0,
            top: 0
        };
        if (!$.floating)
            return P;
        const j = Df($.floating, d.x)
          , D = Df($.floating, d.y);
        return a ? {
            ...P,
            transform: "translate(" + j + "px, " + D + "px)",
            ...Tg($.floating) >= 1.5 && {
                willChange: "transform"
            }
        } : {
            position: n,
            left: j,
            top: D
        }
    }
    , [n, a, $.floating, d.x, d.y]);
    return y.useMemo( () => ({
        ...d,
        update: K,
        refs: Y,
        elements: $,
        floatingStyles: U
    }), [d, K, Y, $, U])
}
const ib = e => {
    function t(n) {
        return {}.hasOwnProperty.call(n, "current")
    }
    return {
        name: "arrow",
        options: e,
        fn(n) {
            const {element: r, padding: o} = typeof e == "function" ? e(n) : e;
            return r && t(r) ? r.current != null ? Of({
                element: r.current,
                padding: o
            }).fn(n) : {} : r ? Of({
                element: r,
                padding: o
            }).fn(n) : {}
        }
    }
}
  , sb = (e, t) => ({
    ...YS(e),
    options: [e, t]
})
  , ab = (e, t) => ({
    ...XS(e),
    options: [e, t]
})
  , lb = (e, t) => ({
    ...eb(e),
    options: [e, t]
})
  , cb = (e, t) => ({
    ...qS(e),
    options: [e, t]
})
  , ub = (e, t) => ({
    ...ZS(e),
    options: [e, t]
})
  , db = (e, t) => ({
    ...JS(e),
    options: [e, t]
})
  , fb = (e, t) => ({
    ...ib(e),
    options: [e, t]
});
var pb = "Arrow"
  , Ag = y.forwardRef( (e, t) => {
    const {children: n, width: r=10, height: o=5, ...i} = e;
    return c.jsx(ve.svg, {
        ...i,
        ref: t,
        width: r,
        height: o,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: e.asChild ? n : c.jsx("polygon", {
            points: "0,0 30,0 15,10"
        })
    })
}
);
Ag.displayName = pb;
var mb = Ag;
function hb(e) {
    const [t,n] = y.useState(void 0);
    return tn( () => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const r = new ResizeObserver(o => {
                if (!Array.isArray(o) || !o.length)
                    return;
                const i = o[0];
                let s, a;
                if ("borderBoxSize"in i) {
                    const l = i.borderBoxSize
                      , u = Array.isArray(l) ? l[0] : l;
                    s = u.inlineSize,
                    a = u.blockSize
                } else
                    s = e.offsetWidth,
                    a = e.offsetHeight;
                n({
                    width: s,
                    height: a
                })
            }
            );
            return r.observe(e, {
                box: "border-box"
            }),
            () => r.unobserve(e)
        } else
            n(void 0)
    }
    , [e]),
    t
}
var Lg = "Popper"
  , [zg,Og] = Ci(Lg)
  , [LN,Dg] = zg(Lg)
  , Mg = "PopperAnchor"
  , _g = y.forwardRef( (e, t) => {
    const {__scopePopper: n, virtualRef: r, ...o} = e
      , i = Dg(Mg, n)
      , s = y.useRef(null)
      , a = Ie(t, s);
    return y.useEffect( () => {
        i.onAnchorChange((r == null ? void 0 : r.current) || s.current)
    }
    ),
    r ? null : c.jsx(ve.div, {
        ...o,
        ref: a
    })
}
);
_g.displayName = Mg;
var Fu = "PopperContent"
  , [gb,vb] = zg(Fu)
  , Ig = y.forwardRef( (e, t) => {
    var J, vr, sn, Hn, an, yr;
    const {__scopePopper: n, side: r="bottom", sideOffset: o=0, align: i="center", alignOffset: s=0, arrowPadding: a=0, avoidCollisions: l=!0, collisionBoundary: u=[], collisionPadding: d=0, sticky: f="partial", hideWhenDetached: g=!1, updatePositionStrategy: p="optimized", onPlaced: S, ...m} = e
      , w = Dg(Fu, n)
      , [v,h] = y.useState(null)
      , x = Ie(t, ln => h(ln))
      , [b,C] = y.useState(null)
      , E = hb(b)
      , k = (E == null ? void 0 : E.width) ?? 0
      , R = (E == null ? void 0 : E.height) ?? 0
      , z = r + (i !== "center" ? "-" + i : "")
      , L = typeof d == "number" ? d : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...d
    }
      , F = Array.isArray(u) ? u : [u]
      , _ = F.length > 0
      , K = {
        padding: L,
        boundary: F.filter(xb),
        altBoundary: _
    }
      , {refs: O, floatingStyles: Y, placement: $, isPositioned: U, middlewareData: P} = ob({
        strategy: "fixed",
        placement: z,
        whileElementsMounted: (...ln) => GS(...ln, {
            animationFrame: p === "always"
        }),
        elements: {
            reference: w.anchor
        },
        middleware: [sb({
            mainAxis: o + R,
            alignmentAxis: s
        }), l && ab({
            mainAxis: !0,
            crossAxis: !1,
            limiter: f === "partial" ? lb() : void 0,
            ...K
        }), l && cb({
            ...K
        }), ub({
            ...K,
            apply: ({elements: ln, rects: Ni, availableWidth: Ra, availableHeight: Pi}) => {
                const {width: Ta, height: So} = Ni.reference
                  , xr = ln.floating.style;
                xr.setProperty("--radix-popper-available-width", `${Ra}px`),
                xr.setProperty("--radix-popper-available-height", `${Pi}px`),
                xr.setProperty("--radix-popper-anchor-width", `${Ta}px`),
                xr.setProperty("--radix-popper-anchor-height", `${So}px`)
            }
        }), b && fb({
            element: b,
            padding: a
        }), wb({
            arrowWidth: k,
            arrowHeight: R
        }), g && db({
            strategy: "referenceHidden",
            ...K
        })]
    })
      , [j,D] = Bg($)
      , V = Ft(S);
    tn( () => {
        U && (V == null || V())
    }
    , [U, V]);
    const I = (J = P.arrow) == null ? void 0 : J.x
      , Q = (vr = P.arrow) == null ? void 0 : vr.y
      , X = ((sn = P.arrow) == null ? void 0 : sn.centerOffset) !== 0
      , [he,Ne] = y.useState();
    return tn( () => {
        v && Ne(window.getComputedStyle(v).zIndex)
    }
    , [v]),
    c.jsx("div", {
        ref: O.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...Y,
            transform: U ? Y.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: he,
            "--radix-popper-transform-origin": [(Hn = P.transformOrigin) == null ? void 0 : Hn.x, (an = P.transformOrigin) == null ? void 0 : an.y].join(" "),
            ...((yr = P.hide) == null ? void 0 : yr.referenceHidden) && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: e.dir,
        children: c.jsx(gb, {
            scope: n,
            placedSide: j,
            onArrowChange: C,
            arrowX: I,
            arrowY: Q,
            shouldHideArrow: X,
            children: c.jsx(ve.div, {
                "data-side": j,
                "data-align": D,
                ...m,
                ref: x,
                style: {
                    ...m.style,
                    animation: U ? void 0 : "none"
                }
            })
        })
    })
}
);
Ig.displayName = Fu;
var Fg = "PopperArrow"
  , yb = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
}
  , $g = y.forwardRef(function(t, n) {
    const {__scopePopper: r, ...o} = t
      , i = vb(Fg, r)
      , s = yb[i.placedSide];
    return c.jsx("span", {
        ref: i.onArrowChange,
        style: {
            position: "absolute",
            left: i.arrowX,
            top: i.arrowY,
            [s]: 0,
            transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
            }[i.placedSide],
            transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[i.placedSide],
            visibility: i.shouldHideArrow ? "hidden" : void 0
        },
        children: c.jsx(mb, {
            ...o,
            ref: n,
            style: {
                ...o.style,
                display: "block"
            }
        })
    })
});
$g.displayName = Fg;
function xb(e) {
    return e !== null
}
var wb = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var w, v, h;
        const {placement: n, rects: r, middlewareData: o} = t
          , s = ((w = o.arrow) == null ? void 0 : w.centerOffset) !== 0
          , a = s ? 0 : e.arrowWidth
          , l = s ? 0 : e.arrowHeight
          , [u,d] = Bg(n)
          , f = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[d]
          , g = (((v = o.arrow) == null ? void 0 : v.x) ?? 0) + a / 2
          , p = (((h = o.arrow) == null ? void 0 : h.y) ?? 0) + l / 2;
        let S = ""
          , m = "";
        return u === "bottom" ? (S = s ? f : `${g}px`,
        m = `${-l}px`) : u === "top" ? (S = s ? f : `${g}px`,
        m = `${r.floating.height + l}px`) : u === "right" ? (S = `${-l}px`,
        m = s ? f : `${p}px`) : u === "left" && (S = `${r.floating.width + l}px`,
        m = s ? f : `${p}px`),
        {
            data: {
                x: S,
                y: m
            }
        }
    }
});
function Bg(e) {
    const [t,n="center"] = e.split("-");
    return [t, n]
}
var Sb = _g
  , bb = Ig
  , Cb = $g
  , [wa,zN] = Ci("Tooltip", [Og])
  , $u = Og()
  , Wg = "TooltipProvider"
  , Eb = 700
  , Mf = "tooltip.open"
  , [kb,Ug] = wa(Wg)
  , Vg = e => {
    const {__scopeTooltip: t, delayDuration: n=Eb, skipDelayDuration: r=300, disableHoverableContent: o=!1, children: i} = e
      , s = y.useRef(!0)
      , a = y.useRef(!1)
      , l = y.useRef(0);
    return y.useEffect( () => {
        const u = l.current;
        return () => window.clearTimeout(u)
    }
    , []),
    c.jsx(kb, {
        scope: t,
        isOpenDelayedRef: s,
        delayDuration: n,
        onOpen: y.useCallback( () => {
            window.clearTimeout(l.current),
            s.current = !1
        }
        , []),
        onClose: y.useCallback( () => {
            window.clearTimeout(l.current),
            l.current = window.setTimeout( () => s.current = !0, r)
        }
        , [r]),
        isPointerInTransitRef: a,
        onPointerInTransitChange: y.useCallback(u => {
            a.current = u
        }
        , []),
        disableHoverableContent: o,
        children: i
    })
}
;
Vg.displayName = Wg;
var Hg = "Tooltip"
  , [ON,Sa] = wa(Hg)
  , Cc = "TooltipTrigger"
  , Nb = y.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , o = Sa(Cc, n)
      , i = Ug(Cc, n)
      , s = $u(n)
      , a = y.useRef(null)
      , l = Ie(t, a, o.onTriggerChange)
      , u = y.useRef(!1)
      , d = y.useRef(!1)
      , f = y.useCallback( () => u.current = !1, []);
    return y.useEffect( () => () => document.removeEventListener("pointerup", f), [f]),
    c.jsx(Sb, {
        asChild: !0,
        ...s,
        children: c.jsx(ve.button, {
            "aria-describedby": o.open ? o.contentId : void 0,
            "data-state": o.stateAttribute,
            ...r,
            ref: l,
            onPointerMove: le(e.onPointerMove, g => {
                g.pointerType !== "touch" && !d.current && !i.isPointerInTransitRef.current && (o.onTriggerEnter(),
                d.current = !0)
            }
            ),
            onPointerLeave: le(e.onPointerLeave, () => {
                o.onTriggerLeave(),
                d.current = !1
            }
            ),
            onPointerDown: le(e.onPointerDown, () => {
                o.open && o.onClose(),
                u.current = !0,
                document.addEventListener("pointerup", f, {
                    once: !0
                })
            }
            ),
            onFocus: le(e.onFocus, () => {
                u.current || o.onOpen()
            }
            ),
            onBlur: le(e.onBlur, o.onClose),
            onClick: le(e.onClick, o.onClose)
        })
    })
}
);
Nb.displayName = Cc;
var Pb = "TooltipPortal"
  , [DN,jb] = wa(Pb, {
    forceMount: void 0
})
  , fo = "TooltipContent"
  , Kg = y.forwardRef( (e, t) => {
    const n = jb(fo, e.__scopeTooltip)
      , {forceMount: r=n.forceMount, side: o="top", ...i} = e
      , s = Sa(fo, e.__scopeTooltip);
    return c.jsx(go, {
        present: r || s.open,
        children: s.disableHoverableContent ? c.jsx(Qg, {
            side: o,
            ...i,
            ref: t
        }) : c.jsx(Rb, {
            side: o,
            ...i,
            ref: t
        })
    })
}
)
  , Rb = y.forwardRef( (e, t) => {
    const n = Sa(fo, e.__scopeTooltip)
      , r = Ug(fo, e.__scopeTooltip)
      , o = y.useRef(null)
      , i = Ie(t, o)
      , [s,a] = y.useState(null)
      , {trigger: l, onClose: u} = n
      , d = o.current
      , {onPointerInTransitChange: f} = r
      , g = y.useCallback( () => {
        a(null),
        f(!1)
    }
    , [f])
      , p = y.useCallback( (S, m) => {
        const w = S.currentTarget
          , v = {
            x: S.clientX,
            y: S.clientY
        }
          , h = Ob(v, w.getBoundingClientRect())
          , x = Db(v, h)
          , b = Mb(m.getBoundingClientRect())
          , C = Ib([...x, ...b]);
        a(C),
        f(!0)
    }
    , [f]);
    return y.useEffect( () => () => g(), [g]),
    y.useEffect( () => {
        if (l && d) {
            const S = w => p(w, d)
              , m = w => p(w, l);
            return l.addEventListener("pointerleave", S),
            d.addEventListener("pointerleave", m),
            () => {
                l.removeEventListener("pointerleave", S),
                d.removeEventListener("pointerleave", m)
            }
        }
    }
    , [l, d, p, g]),
    y.useEffect( () => {
        if (s) {
            const S = m => {
                const w = m.target
                  , v = {
                    x: m.clientX,
                    y: m.clientY
                }
                  , h = (l == null ? void 0 : l.contains(w)) || (d == null ? void 0 : d.contains(w))
                  , x = !_b(v, s);
                h ? g() : x && (g(),
                u())
            }
            ;
            return document.addEventListener("pointermove", S),
            () => document.removeEventListener("pointermove", S)
        }
    }
    , [l, d, s, u, g]),
    c.jsx(Qg, {
        ...e,
        ref: i
    })
}
)
  , [Tb,Ab] = wa(Hg, {
    isInside: !1
})
  , Lb = Vx("TooltipContent")
  , Qg = y.forwardRef( (e, t) => {
    const {__scopeTooltip: n, children: r, "aria-label": o, onEscapeKeyDown: i, onPointerDownOutside: s, ...a} = e
      , l = Sa(fo, n)
      , u = $u(n)
      , {onClose: d} = l;
    return y.useEffect( () => (document.addEventListener(Mf, d),
    () => document.removeEventListener(Mf, d)), [d]),
    y.useEffect( () => {
        if (l.trigger) {
            const f = g => {
                const p = g.target;
                p != null && p.contains(l.trigger) && d()
            }
            ;
            return window.addEventListener("scroll", f, {
                capture: !0
            }),
            () => window.removeEventListener("scroll", f, {
                capture: !0
            })
        }
    }
    , [l.trigger, d]),
    c.jsx(ma, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        onFocusOutside: f => f.preventDefault(),
        onDismiss: d,
        children: c.jsxs(bb, {
            "data-state": l.stateAttribute,
            ...u,
            ...a,
            ref: t,
            style: {
                ...a.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [c.jsx(Lb, {
                children: r
            }), c.jsx(Tb, {
                scope: n,
                isInside: !0,
                children: c.jsx(mw, {
                    id: l.contentId,
                    role: "tooltip",
                    children: o || r
                })
            })]
        })
    })
}
);
Kg.displayName = fo;
var Gg = "TooltipArrow"
  , zb = y.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , o = $u(n);
    return Ab(Gg, n).isInside ? null : c.jsx(Cb, {
        ...o,
        ...r,
        ref: t
    })
}
);
zb.displayName = Gg;
function Ob(e, t) {
    const n = Math.abs(t.top - e.y)
      , r = Math.abs(t.bottom - e.y)
      , o = Math.abs(t.right - e.x)
      , i = Math.abs(t.left - e.x);
    switch (Math.min(n, r, o, i)) {
    case i:
        return "left";
    case o:
        return "right";
    case n:
        return "top";
    case r:
        return "bottom";
    default:
        throw new Error("unreachable")
    }
}
function Db(e, t, n=5) {
    const r = [];
    switch (t) {
    case "top":
        r.push({
            x: e.x - n,
            y: e.y + n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "bottom":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y - n
        });
        break;
    case "left":
        r.push({
            x: e.x + n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "right":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x - n,
            y: e.y + n
        });
        break
    }
    return r
}
function Mb(e) {
    const {top: t, right: n, bottom: r, left: o} = e;
    return [{
        x: o,
        y: t
    }, {
        x: n,
        y: t
    }, {
        x: n,
        y: r
    }, {
        x: o,
        y: r
    }]
}
function _b(e, t) {
    const {x: n, y: r} = e;
    let o = !1;
    for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
        const a = t[i]
          , l = t[s]
          , u = a.x
          , d = a.y
          , f = l.x
          , g = l.y;
        d > r != g > r && n < (f - u) * (r - d) / (g - d) + u && (o = !o)
    }
    return o
}
function Ib(e) {
    const t = e.slice();
    return t.sort( (n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0),
    Fb(t)
}
function Fb(e) {
    if (e.length <= 1)
        return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
        const o = e[r];
        for (; t.length >= 2; ) {
            const i = t[t.length - 1]
              , s = t[t.length - 2];
            if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x))
                t.pop();
            else
                break
        }
        t.push(o)
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const o = e[r];
        for (; n.length >= 2; ) {
            const i = n[n.length - 1]
              , s = n[n.length - 2];
            if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x))
                n.pop();
            else
                break
        }
        n.push(o)
    }
    return n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
}
var $b = Vg
  , Yg = Kg;
const Bb = $b
  , Wb = y.forwardRef( ({className: e, sideOffset: t=4, ...n}, r) => c.jsx(Yg, {
    ref: r,
    sideOffset: t,
    className: ye("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
    ...n
}));
Wb.displayName = Yg.displayName;
var ba = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(e) {
        return this.listeners.add(e),
        this.onSubscribe(),
        () => {
            this.listeners.delete(e),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
  , Ca = typeof window > "u" || "Deno"in globalThis;
function vt() {}
function Ub(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Vb(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}
function Hb(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}
function Ec(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Kb(e, t) {
    return typeof e == "function" ? e(t) : e
}
function _f(e, t) {
    const {type: n="all", exact: r, fetchStatus: o, predicate: i, queryKey: s, stale: a} = e;
    if (s) {
        if (r) {
            if (t.queryHash !== Bu(s, t.options))
                return !1
        } else if (!mi(t.queryKey, s))
            return !1
    }
    if (n !== "all") {
        const l = t.isActive();
        if (n === "active" && !l || n === "inactive" && l)
            return !1
    }
    return !(typeof a == "boolean" && t.isStale() !== a || o && o !== t.state.fetchStatus || i && !i(t))
}
function If(e, t) {
    const {exact: n, status: r, predicate: o, mutationKey: i} = e;
    if (i) {
        if (!t.options.mutationKey)
            return !1;
        if (n) {
            if (pi(t.options.mutationKey) !== pi(i))
                return !1
        } else if (!mi(t.options.mutationKey, i))
            return !1
    }
    return !(r && t.state.status !== r || o && !o(t))
}
function Bu(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || pi)(e)
}
function pi(e) {
    return JSON.stringify(e, (t, n) => kc(n) ? Object.keys(n).sort().reduce( (r, o) => (r[o] = n[o],
    r), {}) : n)
}
function mi(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? Object.keys(t).every(n => mi(e[n], t[n])) : !1
}
function Xg(e, t) {
    if (e === t)
        return e;
    const n = Ff(e) && Ff(t);
    if (n || kc(e) && kc(t)) {
        const r = n ? e : Object.keys(e)
          , o = r.length
          , i = n ? t : Object.keys(t)
          , s = i.length
          , a = n ? [] : {}
          , l = new Set(r);
        let u = 0;
        for (let d = 0; d < s; d++) {
            const f = n ? d : i[d];
            (!n && l.has(f) || n) && e[f] === void 0 && t[f] === void 0 ? (a[f] = void 0,
            u++) : (a[f] = Xg(e[f], t[f]),
            a[f] === e[f] && e[f] !== void 0 && u++)
        }
        return o === s && u === o ? e : a
    }
    return t
}
function Ff(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}
function kc(e) {
    if (!$f(e))
        return !1;
    const t = e.constructor;
    if (t === void 0)
        return !0;
    const n = t.prototype;
    return !(!$f(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}
function $f(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}
function Qb(e) {
    return new Promise(t => {
        setTimeout(t, e)
    }
    )
}
function Gb(e, t, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? Xg(e, t) : t
}
function Yb(e, t, n=0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r
}
function Xb(e, t, n=0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r
}
var Wu = Symbol();
function qg(e, t) {
    return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === Wu ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var Jn, bn, Yr, cp, qb = (cp = class extends ba {
    constructor() {
        super();
        Z(this, Jn);
        Z(this, bn);
        Z(this, Yr);
        W(this, Yr, t => {
            if (!Ca && window.addEventListener) {
                const n = () => t();
                return window.addEventListener("visibilitychange", n, !1),
                () => {
                    window.removeEventListener("visibilitychange", n)
                }
            }
        }
        )
    }
    onSubscribe() {
        N(this, bn) || this.setEventListener(N(this, Yr))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = N(this, bn)) == null || t.call(this),
        W(this, bn, void 0))
    }
    setEventListener(t) {
        var n;
        W(this, Yr, t),
        (n = N(this, bn)) == null || n.call(this),
        W(this, bn, t(r => {
            typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
        }
        ))
    }
    setFocused(t) {
        N(this, Jn) !== t && (W(this, Jn, t),
        this.onFocus())
    }
    onFocus() {
        const t = this.isFocused();
        this.listeners.forEach(n => {
            n(t)
        }
        )
    }
    isFocused() {
        var t;
        return typeof N(this, Jn) == "boolean" ? N(this, Jn) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
    }
}
,
Jn = new WeakMap,
bn = new WeakMap,
Yr = new WeakMap,
cp), Zg = new qb, Xr, Cn, qr, up, Zb = (up = class extends ba {
    constructor() {
        super();
        Z(this, Xr, !0);
        Z(this, Cn);
        Z(this, qr);
        W(this, qr, t => {
            if (!Ca && window.addEventListener) {
                const n = () => t(!0)
                  , r = () => t(!1);
                return window.addEventListener("online", n, !1),
                window.addEventListener("offline", r, !1),
                () => {
                    window.removeEventListener("online", n),
                    window.removeEventListener("offline", r)
                }
            }
        }
        )
    }
    onSubscribe() {
        N(this, Cn) || this.setEventListener(N(this, qr))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = N(this, Cn)) == null || t.call(this),
        W(this, Cn, void 0))
    }
    setEventListener(t) {
        var n;
        W(this, qr, t),
        (n = N(this, Cn)) == null || n.call(this),
        W(this, Cn, t(this.setOnline.bind(this)))
    }
    setOnline(t) {
        N(this, Xr) !== t && (W(this, Xr, t),
        this.listeners.forEach(r => {
            r(t)
        }
        ))
    }
    isOnline() {
        return N(this, Xr)
    }
}
,
Xr = new WeakMap,
Cn = new WeakMap,
qr = new WeakMap,
up), Gs = new Zb;
function Jb() {
    let e, t;
    const n = new Promise( (o, i) => {
        e = o,
        t = i
    }
    );
    n.status = "pending",
    n.catch( () => {}
    );
    function r(o) {
        Object.assign(n, o),
        delete n.resolve,
        delete n.reject
    }
    return n.resolve = o => {
        r({
            status: "fulfilled",
            value: o
        }),
        e(o)
    }
    ,
    n.reject = o => {
        r({
            status: "rejected",
            reason: o
        }),
        t(o)
    }
    ,
    n
}
function eC(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}
function Jg(e) {
    return (e ?? "online") === "online" ? Gs.isOnline() : !0
}
var ev = class extends Error {
    constructor(e) {
        super("CancelledError"),
        this.revert = e == null ? void 0 : e.revert,
        this.silent = e == null ? void 0 : e.silent
    }
}
;
function pl(e) {
    return e instanceof ev
}
function tv(e) {
    let t = !1, n = 0, r = !1, o;
    const i = Jb()
      , s = m => {
        var w;
        r || (g(new ev(m)),
        (w = e.abort) == null || w.call(e))
    }
      , a = () => {
        t = !0
    }
      , l = () => {
        t = !1
    }
      , u = () => Zg.isFocused() && (e.networkMode === "always" || Gs.isOnline()) && e.canRun()
      , d = () => Jg(e.networkMode) && e.canRun()
      , f = m => {
        var w;
        r || (r = !0,
        (w = e.onSuccess) == null || w.call(e, m),
        o == null || o(),
        i.resolve(m))
    }
      , g = m => {
        var w;
        r || (r = !0,
        (w = e.onError) == null || w.call(e, m),
        o == null || o(),
        i.reject(m))
    }
      , p = () => new Promise(m => {
        var w;
        o = v => {
            (r || u()) && m(v)
        }
        ,
        (w = e.onPause) == null || w.call(e)
    }
    ).then( () => {
        var m;
        o = void 0,
        r || (m = e.onContinue) == null || m.call(e)
    }
    )
      , S = () => {
        if (r)
            return;
        let m;
        const w = n === 0 ? e.initialPromise : void 0;
        try {
            m = w ?? e.fn()
        } catch (v) {
            m = Promise.reject(v)
        }
        Promise.resolve(m).then(f).catch(v => {
            var E;
            if (r)
                return;
            const h = e.retry ?? (Ca ? 0 : 3)
              , x = e.retryDelay ?? eC
              , b = typeof x == "function" ? x(n, v) : x
              , C = h === !0 || typeof h == "number" && n < h || typeof h == "function" && h(n, v);
            if (t || !C) {
                g(v);
                return
            }
            n++,
            (E = e.onFail) == null || E.call(e, n, v),
            Qb(b).then( () => u() ? void 0 : p()).then( () => {
                t ? g(v) : S()
            }
            )
        }
        )
    }
    ;
    return {
        promise: i,
        cancel: s,
        continue: () => (o == null || o(),
        i),
        cancelRetry: a,
        continueRetry: l,
        canStart: d,
        start: () => (d() ? S() : p().then(S),
        i)
    }
}
var tC = e => setTimeout(e, 0);
function nC() {
    let e = []
      , t = 0
      , n = a => {
        a()
    }
      , r = a => {
        a()
    }
      , o = tC;
    const i = a => {
        t ? e.push(a) : o( () => {
            n(a)
        }
        )
    }
      , s = () => {
        const a = e;
        e = [],
        a.length && o( () => {
            r( () => {
                a.forEach(l => {
                    n(l)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: a => {
            let l;
            t++;
            try {
                l = a()
            } finally {
                t--,
                t || s()
            }
            return l
        }
        ,
        batchCalls: a => (...l) => {
            i( () => {
                a(...l)
            }
            )
        }
        ,
        schedule: i,
        setNotifyFunction: a => {
            n = a
        }
        ,
        setBatchNotifyFunction: a => {
            r = a
        }
        ,
        setScheduler: a => {
            o = a
        }
    }
}
var De = nC(), er, dp, nv = (dp = class {
    constructor() {
        Z(this, er)
    }
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        Vb(this.gcTime) && W(this, er, setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? (Ca ? 1 / 0 : 5 * 60 * 1e3))
    }
    clearGcTimeout() {
        N(this, er) && (clearTimeout(N(this, er)),
        W(this, er, void 0))
    }
}
,
er = new WeakMap,
dp), Zr, tr, rt, nr, Te, hi, rr, yt, Vt, fp, rC = (fp = class extends nv {
    constructor(t) {
        super();
        Z(this, yt);
        Z(this, Zr);
        Z(this, tr);
        Z(this, rt);
        Z(this, nr);
        Z(this, Te);
        Z(this, hi);
        Z(this, rr);
        W(this, rr, !1),
        W(this, hi, t.defaultOptions),
        this.setOptions(t.options),
        this.observers = [],
        W(this, nr, t.client),
        W(this, rt, N(this, nr).getQueryCache()),
        this.queryKey = t.queryKey,
        this.queryHash = t.queryHash,
        W(this, Zr, iC(this.options)),
        this.state = t.state ?? N(this, Zr),
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        var t;
        return (t = N(this, Te)) == null ? void 0 : t.promise
    }
    setOptions(t) {
        this.options = {
            ...N(this, hi),
            ...t
        },
        this.updateGcTime(this.options.gcTime)
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && N(this, rt).remove(this)
    }
    setData(t, n) {
        const r = Gb(this.state.data, t, this.options);
        return Pe(this, yt, Vt).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual
        }),
        r
    }
    setState(t, n) {
        Pe(this, yt, Vt).call(this, {
            type: "setState",
            state: t,
            setStateOptions: n
        })
    }
    cancel(t) {
        var r, o;
        const n = (r = N(this, Te)) == null ? void 0 : r.promise;
        return (o = N(this, Te)) == null || o.cancel(t),
        n ? n.then(vt).catch(vt) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(N(this, Zr))
    }
    isActive() {
        return this.observers.some(t => Kb(t.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Wu || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStatic() {
        return this.getObserversCount() > 0 ? this.observers.some(t => Ec(t.options.staleTime, this) === "static") : !1
    }
    isStale() {
        return this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
    }
    isStaleByTime(t=0) {
        return this.state.data === void 0 ? !0 : t === "static" ? !1 : this.state.isInvalidated ? !0 : !Hb(this.state.dataUpdatedAt, t)
    }
    onFocus() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = N(this, Te)) == null || n.continue()
    }
    onOnline() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnReconnect());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = N(this, Te)) == null || n.continue()
    }
    addObserver(t) {
        this.observers.includes(t) || (this.observers.push(t),
        this.clearGcTimeout(),
        N(this, rt).notify({
            type: "observerAdded",
            query: this,
            observer: t
        }))
    }
    removeObserver(t) {
        this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t),
        this.observers.length || (N(this, Te) && (N(this, rr) ? N(this, Te).cancel({
            revert: !0
        }) : N(this, Te).cancelRetry()),
        this.scheduleGc()),
        N(this, rt).notify({
            type: "observerRemoved",
            query: this,
            observer: t
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || Pe(this, yt, Vt).call(this, {
            type: "invalidate"
        })
    }
    fetch(t, n) {
        var u, d, f;
        if (this.state.fetchStatus !== "idle") {
            if (this.state.data !== void 0 && (n != null && n.cancelRefetch))
                this.cancel({
                    silent: !0
                });
            else if (N(this, Te))
                return N(this, Te).continueRetry(),
                N(this, Te).promise
        }
        if (t && this.setOptions(t),
        !this.options.queryFn) {
            const g = this.observers.find(p => p.options.queryFn);
            g && this.setOptions(g.options)
        }
        const r = new AbortController
          , o = g => {
            Object.defineProperty(g, "signal", {
                enumerable: !0,
                get: () => (W(this, rr, !0),
                r.signal)
            })
        }
          , i = () => {
            const g = qg(this.options, n)
              , S = ( () => {
                const m = {
                    client: N(this, nr),
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                return o(m),
                m
            }
            )();
            return W(this, rr, !1),
            this.options.persister ? this.options.persister(g, S, this) : g(S)
        }
          , a = ( () => {
            const g = {
                fetchOptions: n,
                options: this.options,
                queryKey: this.queryKey,
                client: N(this, nr),
                state: this.state,
                fetchFn: i
            };
            return o(g),
            g
        }
        )();
        (u = this.options.behavior) == null || u.onFetch(a, this),
        W(this, tr, this.state),
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((d = a.fetchOptions) == null ? void 0 : d.meta)) && Pe(this, yt, Vt).call(this, {
            type: "fetch",
            meta: (f = a.fetchOptions) == null ? void 0 : f.meta
        });
        const l = g => {
            var p, S, m, w;
            pl(g) && g.silent || Pe(this, yt, Vt).call(this, {
                type: "error",
                error: g
            }),
            pl(g) || ((S = (p = N(this, rt).config).onError) == null || S.call(p, g, this),
            (w = (m = N(this, rt).config).onSettled) == null || w.call(m, this.state.data, g, this)),
            this.scheduleGc()
        }
        ;
        return W(this, Te, tv({
            initialPromise: n == null ? void 0 : n.initialPromise,
            fn: a.fetchFn,
            abort: r.abort.bind(r),
            onSuccess: g => {
                var p, S, m, w;
                if (g === void 0) {
                    l(new Error(`${this.queryHash} data is undefined`));
                    return
                }
                try {
                    this.setData(g)
                } catch (v) {
                    l(v);
                    return
                }
                (S = (p = N(this, rt).config).onSuccess) == null || S.call(p, g, this),
                (w = (m = N(this, rt).config).onSettled) == null || w.call(m, g, this.state.error, this),
                this.scheduleGc()
            }
            ,
            onError: l,
            onFail: (g, p) => {
                Pe(this, yt, Vt).call(this, {
                    type: "failed",
                    failureCount: g,
                    error: p
                })
            }
            ,
            onPause: () => {
                Pe(this, yt, Vt).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                Pe(this, yt, Vt).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: a.options.retry,
            retryDelay: a.options.retryDelay,
            networkMode: a.options.networkMode,
            canRun: () => !0
        })),
        N(this, Te).start()
    }
}
,
Zr = new WeakMap,
tr = new WeakMap,
rt = new WeakMap,
nr = new WeakMap,
Te = new WeakMap,
hi = new WeakMap,
rr = new WeakMap,
yt = new WeakSet,
Vt = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                fetchFailureCount: t.failureCount,
                fetchFailureReason: t.error
            };
        case "pause":
            return {
                ...r,
                fetchStatus: "paused"
            };
        case "continue":
            return {
                ...r,
                fetchStatus: "fetching"
            };
        case "fetch":
            return {
                ...r,
                ...oC(r.data, this.options),
                fetchMeta: t.meta ?? null
            };
        case "success":
            return W(this, tr, void 0),
            {
                ...r,
                data: t.data,
                dataUpdateCount: r.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...!t.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null
                }
            };
        case "error":
            const o = t.error;
            return pl(o) && o.revert && N(this, tr) ? {
                ...N(this, tr),
                fetchStatus: "idle"
            } : {
                ...r,
                error: o,
                errorUpdateCount: r.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: r.fetchFailureCount + 1,
                fetchFailureReason: o,
                fetchStatus: "idle",
                status: "error"
            };
        case "invalidate":
            return {
                ...r,
                isInvalidated: !0
            };
        case "setState":
            return {
                ...r,
                ...t.state
            }
        }
    }
    ;
    this.state = n(this.state),
    De.batch( () => {
        this.observers.forEach(r => {
            r.onQueryUpdate()
        }
        ),
        N(this, rt).notify({
            query: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
fp);
function oC(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: Jg(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function iC(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData
      , n = t !== void 0
      , r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? r ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var Tt, pp, sC = (pp = class extends ba {
    constructor(t={}) {
        super();
        Z(this, Tt);
        this.config = t,
        W(this, Tt, new Map)
    }
    build(t, n, r) {
        const o = n.queryKey
          , i = n.queryHash ?? Bu(o, n);
        let s = this.get(i);
        return s || (s = new rC({
            client: t,
            queryKey: o,
            queryHash: i,
            options: t.defaultQueryOptions(n),
            state: r,
            defaultOptions: t.getQueryDefaults(o)
        }),
        this.add(s)),
        s
    }
    add(t) {
        N(this, Tt).has(t.queryHash) || (N(this, Tt).set(t.queryHash, t),
        this.notify({
            type: "added",
            query: t
        }))
    }
    remove(t) {
        const n = N(this, Tt).get(t.queryHash);
        n && (t.destroy(),
        n === t && N(this, Tt).delete(t.queryHash),
        this.notify({
            type: "removed",
            query: t
        }))
    }
    clear() {
        De.batch( () => {
            this.getAll().forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    get(t) {
        return N(this, Tt).get(t)
    }
    getAll() {
        return [...N(this, Tt).values()]
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => _f(n, r))
    }
    findAll(t={}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter(r => _f(t, r)) : n
    }
    notify(t) {
        De.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    onFocus() {
        De.batch( () => {
            this.getAll().forEach(t => {
                t.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        De.batch( () => {
            this.getAll().forEach(t => {
                t.onOnline()
            }
            )
        }
        )
    }
}
,
Tt = new WeakMap,
pp), At, ze, or, Lt, gn, mp, aC = (mp = class extends nv {
    constructor(t) {
        super();
        Z(this, Lt);
        Z(this, At);
        Z(this, ze);
        Z(this, or);
        this.mutationId = t.mutationId,
        W(this, ze, t.mutationCache),
        W(this, At, []),
        this.state = t.state || lC(),
        this.setOptions(t.options),
        this.scheduleGc()
    }
    setOptions(t) {
        this.options = t,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(t) {
        N(this, At).includes(t) || (N(this, At).push(t),
        this.clearGcTimeout(),
        N(this, ze).notify({
            type: "observerAdded",
            mutation: this,
            observer: t
        }))
    }
    removeObserver(t) {
        W(this, At, N(this, At).filter(n => n !== t)),
        this.scheduleGc(),
        N(this, ze).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t
        })
    }
    optionalRemove() {
        N(this, At).length || (this.state.status === "pending" ? this.scheduleGc() : N(this, ze).remove(this))
    }
    continue() {
        var t;
        return ((t = N(this, or)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
    }
    async execute(t) {
        var i, s, a, l, u, d, f, g, p, S, m, w, v, h, x, b, C, E, k, R;
        const n = () => {
            Pe(this, Lt, gn).call(this, {
                type: "continue"
            })
        }
        ;
        W(this, or, tv({
            fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
            onFail: (z, L) => {
                Pe(this, Lt, gn).call(this, {
                    type: "failed",
                    failureCount: z,
                    error: L
                })
            }
            ,
            onPause: () => {
                Pe(this, Lt, gn).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => N(this, ze).canRun(this)
        }));
        const r = this.state.status === "pending"
          , o = !N(this, or).canStart();
        try {
            if (r)
                n();
            else {
                Pe(this, Lt, gn).call(this, {
                    type: "pending",
                    variables: t,
                    isPaused: o
                }),
                await ((s = (i = N(this, ze).config).onMutate) == null ? void 0 : s.call(i, t, this));
                const L = await ((l = (a = this.options).onMutate) == null ? void 0 : l.call(a, t));
                L !== this.state.context && Pe(this, Lt, gn).call(this, {
                    type: "pending",
                    context: L,
                    variables: t,
                    isPaused: o
                })
            }
            const z = await N(this, or).start();
            return await ((d = (u = N(this, ze).config).onSuccess) == null ? void 0 : d.call(u, z, t, this.state.context, this)),
            await ((g = (f = this.options).onSuccess) == null ? void 0 : g.call(f, z, t, this.state.context)),
            await ((S = (p = N(this, ze).config).onSettled) == null ? void 0 : S.call(p, z, null, this.state.variables, this.state.context, this)),
            await ((w = (m = this.options).onSettled) == null ? void 0 : w.call(m, z, null, t, this.state.context)),
            Pe(this, Lt, gn).call(this, {
                type: "success",
                data: z
            }),
            z
        } catch (z) {
            try {
                throw await ((h = (v = N(this, ze).config).onError) == null ? void 0 : h.call(v, z, t, this.state.context, this)),
                await ((b = (x = this.options).onError) == null ? void 0 : b.call(x, z, t, this.state.context)),
                await ((E = (C = N(this, ze).config).onSettled) == null ? void 0 : E.call(C, void 0, z, this.state.variables, this.state.context, this)),
                await ((R = (k = this.options).onSettled) == null ? void 0 : R.call(k, void 0, z, t, this.state.context)),
                z
            } finally {
                Pe(this, Lt, gn).call(this, {
                    type: "error",
                    error: z
                })
            }
        } finally {
            N(this, ze).runNext(this)
        }
    }
}
,
At = new WeakMap,
ze = new WeakMap,
or = new WeakMap,
Lt = new WeakSet,
gn = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                failureCount: t.failureCount,
                failureReason: t.error
            };
        case "pause":
            return {
                ...r,
                isPaused: !0
            };
        case "continue":
            return {
                ...r,
                isPaused: !1
            };
        case "pending":
            return {
                ...r,
                context: t.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: t.isPaused,
                status: "pending",
                variables: t.variables,
                submittedAt: Date.now()
            };
        case "success":
            return {
                ...r,
                data: t.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1
            };
        case "error":
            return {
                ...r,
                data: void 0,
                error: t.error,
                failureCount: r.failureCount + 1,
                failureReason: t.error,
                isPaused: !1,
                status: "error"
            }
        }
    }
    ;
    this.state = n(this.state),
    De.batch( () => {
        N(this, At).forEach(r => {
            r.onMutationUpdate(t)
        }
        ),
        N(this, ze).notify({
            mutation: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
mp);
function lC() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var Qt, xt, gi, hp, cC = (hp = class extends ba {
    constructor(t={}) {
        super();
        Z(this, Qt);
        Z(this, xt);
        Z(this, gi);
        this.config = t,
        W(this, Qt, new Set),
        W(this, xt, new Map),
        W(this, gi, 0)
    }
    build(t, n, r) {
        const o = new aC({
            mutationCache: this,
            mutationId: ++Ri(this, gi)._,
            options: t.defaultMutationOptions(n),
            state: r
        });
        return this.add(o),
        o
    }
    add(t) {
        N(this, Qt).add(t);
        const n = qi(t);
        if (typeof n == "string") {
            const r = N(this, xt).get(n);
            r ? r.push(t) : N(this, xt).set(n, [t])
        }
        this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        if (N(this, Qt).delete(t)) {
            const n = qi(t);
            if (typeof n == "string") {
                const r = N(this, xt).get(n);
                if (r)
                    if (r.length > 1) {
                        const o = r.indexOf(t);
                        o !== -1 && r.splice(o, 1)
                    } else
                        r[0] === t && N(this, xt).delete(n)
            }
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        const n = qi(t);
        if (typeof n == "string") {
            const r = N(this, xt).get(n)
              , o = r == null ? void 0 : r.find(i => i.state.status === "pending");
            return !o || o === t
        } else
            return !0
    }
    runNext(t) {
        var r;
        const n = qi(t);
        if (typeof n == "string") {
            const o = (r = N(this, xt).get(n)) == null ? void 0 : r.find(i => i !== t && i.state.isPaused);
            return (o == null ? void 0 : o.continue()) ?? Promise.resolve()
        } else
            return Promise.resolve()
    }
    clear() {
        De.batch( () => {
            N(this, Qt).forEach(t => {
                this.notify({
                    type: "removed",
                    mutation: t
                })
            }
            ),
            N(this, Qt).clear(),
            N(this, xt).clear()
        }
        )
    }
    getAll() {
        return Array.from(N(this, Qt))
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => If(n, r))
    }
    findAll(t={}) {
        return this.getAll().filter(n => If(t, n))
    }
    notify(t) {
        De.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const t = this.getAll().filter(n => n.state.isPaused);
        return De.batch( () => Promise.all(t.map(n => n.continue().catch(vt))))
    }
}
,
Qt = new WeakMap,
xt = new WeakMap,
gi = new WeakMap,
hp);
function qi(e) {
    var t;
    return (t = e.options.scope) == null ? void 0 : t.id
}
function Bf(e) {
    return {
        onFetch: (t, n) => {
            var d, f, g, p, S;
            const r = t.options
              , o = (g = (f = (d = t.fetchOptions) == null ? void 0 : d.meta) == null ? void 0 : f.fetchMore) == null ? void 0 : g.direction
              , i = ((p = t.state.data) == null ? void 0 : p.pages) || []
              , s = ((S = t.state.data) == null ? void 0 : S.pageParams) || [];
            let a = {
                pages: [],
                pageParams: []
            }
              , l = 0;
            const u = async () => {
                let m = !1;
                const w = x => {
                    Object.defineProperty(x, "signal", {
                        enumerable: !0,
                        get: () => (t.signal.aborted ? m = !0 : t.signal.addEventListener("abort", () => {
                            m = !0
                        }
                        ),
                        t.signal)
                    })
                }
                  , v = qg(t.options, t.fetchOptions)
                  , h = async (x, b, C) => {
                    if (m)
                        return Promise.reject();
                    if (b == null && x.pages.length)
                        return Promise.resolve(x);
                    const k = ( () => {
                        const F = {
                            client: t.client,
                            queryKey: t.queryKey,
                            pageParam: b,
                            direction: C ? "backward" : "forward",
                            meta: t.options.meta
                        };
                        return w(F),
                        F
                    }
                    )()
                      , R = await v(k)
                      , {maxPages: z} = t.options
                      , L = C ? Xb : Yb;
                    return {
                        pages: L(x.pages, R, z),
                        pageParams: L(x.pageParams, b, z)
                    }
                }
                ;
                if (o && i.length) {
                    const x = o === "backward"
                      , b = x ? uC : Wf
                      , C = {
                        pages: i,
                        pageParams: s
                    }
                      , E = b(r, C);
                    a = await h(C, E, x)
                } else {
                    const x = e ?? i.length;
                    do {
                        const b = l === 0 ? s[0] ?? r.initialPageParam : Wf(r, a);
                        if (l > 0 && b == null)
                            break;
                        a = await h(a, b),
                        l++
                    } while (l < x)
                }
                return a
            }
            ;
            t.options.persister ? t.fetchFn = () => {
                var m, w;
                return (w = (m = t.options).persister) == null ? void 0 : w.call(m, u, {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, n)
            }
            : t.fetchFn = u
        }
    }
}
function Wf(e, {pages: t, pageParams: n}) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0
}
function uC(e, {pages: t, pageParams: n}) {
    var r;
    return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0
}
var fe, En, kn, Jr, eo, Nn, to, no, gp, dC = (gp = class {
    constructor(e={}) {
        Z(this, fe);
        Z(this, En);
        Z(this, kn);
        Z(this, Jr);
        Z(this, eo);
        Z(this, Nn);
        Z(this, to);
        Z(this, no);
        W(this, fe, e.queryCache || new sC),
        W(this, En, e.mutationCache || new cC),
        W(this, kn, e.defaultOptions || {}),
        W(this, Jr, new Map),
        W(this, eo, new Map),
        W(this, Nn, 0)
    }
    mount() {
        Ri(this, Nn)._++,
        N(this, Nn) === 1 && (W(this, to, Zg.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            N(this, fe).onFocus())
        }
        )),
        W(this, no, Gs.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            N(this, fe).onOnline())
        }
        )))
    }
    unmount() {
        var e, t;
        Ri(this, Nn)._--,
        N(this, Nn) === 0 && ((e = N(this, to)) == null || e.call(this),
        W(this, to, void 0),
        (t = N(this, no)) == null || t.call(this),
        W(this, no, void 0))
    }
    isFetching(e) {
        return N(this, fe).findAll({
            ...e,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(e) {
        return N(this, En).findAll({
            ...e,
            status: "pending"
        }).length
    }
    getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = N(this, fe).get(t.queryHash)) == null ? void 0 : n.state.data
    }
    ensureQueryData(e) {
        const t = this.defaultQueryOptions(e)
          , n = N(this, fe).build(this, t)
          , r = n.state.data;
        return r === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && n.isStaleByTime(Ec(t.staleTime, n)) && this.prefetchQuery(t),
        Promise.resolve(r))
    }
    getQueriesData(e) {
        return N(this, fe).findAll(e).map( ({queryKey: t, state: n}) => {
            const r = n.data;
            return [t, r]
        }
        )
    }
    setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({
            queryKey: e
        })
          , o = N(this, fe).get(r.queryHash)
          , i = o == null ? void 0 : o.state.data
          , s = Ub(t, i);
        if (s !== void 0)
            return N(this, fe).build(this, r).setData(s, {
                ...n,
                manual: !0
            })
    }
    setQueriesData(e, t, n) {
        return De.batch( () => N(this, fe).findAll(e).map( ({queryKey: r}) => [r, this.setQueryData(r, t, n)]))
    }
    getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = N(this, fe).get(t.queryHash)) == null ? void 0 : n.state
    }
    removeQueries(e) {
        const t = N(this, fe);
        De.batch( () => {
            t.findAll(e).forEach(n => {
                t.remove(n)
            }
            )
        }
        )
    }
    resetQueries(e, t) {
        const n = N(this, fe);
        return De.batch( () => (n.findAll(e).forEach(r => {
            r.reset()
        }
        ),
        this.refetchQueries({
            type: "active",
            ...e
        }, t)))
    }
    cancelQueries(e, t={}) {
        const n = {
            revert: !0,
            ...t
        }
          , r = De.batch( () => N(this, fe).findAll(e).map(o => o.cancel(n)));
        return Promise.all(r).then(vt).catch(vt)
    }
    invalidateQueries(e, t={}) {
        return De.batch( () => (N(this, fe).findAll(e).forEach(n => {
            n.invalidate()
        }
        ),
        (e == null ? void 0 : e.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({
            ...e,
            type: (e == null ? void 0 : e.refetchType) ?? (e == null ? void 0 : e.type) ?? "active"
        }, t)))
    }
    refetchQueries(e, t={}) {
        const n = {
            ...t,
            cancelRefetch: t.cancelRefetch ?? !0
        }
          , r = De.batch( () => N(this, fe).findAll(e).filter(o => !o.isDisabled() && !o.isStatic()).map(o => {
            let i = o.fetch(void 0, n);
            return n.throwOnError || (i = i.catch(vt)),
            o.state.fetchStatus === "paused" ? Promise.resolve() : i
        }
        ));
        return Promise.all(r).then(vt)
    }
    fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = N(this, fe).build(this, t);
        return n.isStaleByTime(Ec(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
    }
    prefetchQuery(e) {
        return this.fetchQuery(e).then(vt).catch(vt)
    }
    fetchInfiniteQuery(e) {
        return e.behavior = Bf(e.pages),
        this.fetchQuery(e)
    }
    prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(vt).catch(vt)
    }
    ensureInfiniteQueryData(e) {
        return e.behavior = Bf(e.pages),
        this.ensureQueryData(e)
    }
    resumePausedMutations() {
        return Gs.isOnline() ? N(this, En).resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return N(this, fe)
    }
    getMutationCache() {
        return N(this, En)
    }
    getDefaultOptions() {
        return N(this, kn)
    }
    setDefaultOptions(e) {
        W(this, kn, e)
    }
    setQueryDefaults(e, t) {
        N(this, Jr).set(pi(e), {
            queryKey: e,
            defaultOptions: t
        })
    }
    getQueryDefaults(e) {
        const t = [...N(this, Jr).values()]
          , n = {};
        return t.forEach(r => {
            mi(e, r.queryKey) && Object.assign(n, r.defaultOptions)
        }
        ),
        n
    }
    setMutationDefaults(e, t) {
        N(this, eo).set(pi(e), {
            mutationKey: e,
            defaultOptions: t
        })
    }
    getMutationDefaults(e) {
        const t = [...N(this, eo).values()]
          , n = {};
        return t.forEach(r => {
            mi(e, r.mutationKey) && Object.assign(n, r.defaultOptions)
        }
        ),
        n
    }
    defaultQueryOptions(e) {
        if (e._defaulted)
            return e;
        const t = {
            ...N(this, kn).queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0
        };
        return t.queryHash || (t.queryHash = Bu(t.queryKey, t)),
        t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
        t.queryFn === Wu && (t.enabled = !1),
        t
    }
    defaultMutationOptions(e) {
        return e != null && e._defaulted ? e : {
            ...N(this, kn).mutations,
            ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
            ...e,
            _defaulted: !0
        }
    }
    clear() {
        N(this, fe).clear(),
        N(this, En).clear()
    }
}
,
fe = new WeakMap,
En = new WeakMap,
kn = new WeakMap,
Jr = new WeakMap,
eo = new WeakMap,
Nn = new WeakMap,
to = new WeakMap,
no = new WeakMap,
gp), fC = y.createContext(void 0), pC = ({client: e, children: t}) => (y.useEffect( () => (e.mount(),
() => {
    e.unmount()
}
), [e]),
c.jsx(fC.Provider, {
    value: e,
    children: t
}));
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ys() {
    return Ys = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Ys.apply(this, arguments)
}
var Rn;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(Rn || (Rn = {}));
const Uf = "popstate";
function mC(e) {
    e === void 0 && (e = {});
    function t(r, o) {
        let {pathname: i, search: s, hash: a} = r.location;
        return Nc("", {
            pathname: i,
            search: s,
            hash: a
        }, o.state && o.state.usr || null, o.state && o.state.key || "default")
    }
    function n(r, o) {
        return typeof o == "string" ? o : ov(o)
    }
    return gC(t, n, null, e)
}
function Qe(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function rv(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function hC() {
    return Math.random().toString(36).substr(2, 8)
}
function Vf(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function Nc(e, t, n, r) {
    return n === void 0 && (n = null),
    Ys({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? Ea(t) : t, {
        state: n,
        key: t && t.key || r || hC()
    })
}
function ov(e) {
    let {pathname: t="/", search: n="", hash: r=""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
}
function Ea(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
        e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r),
        e = e.substr(0, r)),
        e && (t.pathname = e)
    }
    return t
}
function gC(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: o=document.defaultView, v5Compat: i=!1} = r
      , s = o.history
      , a = Rn.Pop
      , l = null
      , u = d();
    u == null && (u = 0,
    s.replaceState(Ys({}, s.state, {
        idx: u
    }), ""));
    function d() {
        return (s.state || {
            idx: null
        }).idx
    }
    function f() {
        a = Rn.Pop;
        let w = d()
          , v = w == null ? null : w - u;
        u = w,
        l && l({
            action: a,
            location: m.location,
            delta: v
        })
    }
    function g(w, v) {
        a = Rn.Push;
        let h = Nc(m.location, w, v);
        u = d() + 1;
        let x = Vf(h, u)
          , b = m.createHref(h);
        try {
            s.pushState(x, "", b)
        } catch (C) {
            if (C instanceof DOMException && C.name === "DataCloneError")
                throw C;
            o.location.assign(b)
        }
        i && l && l({
            action: a,
            location: m.location,
            delta: 1
        })
    }
    function p(w, v) {
        a = Rn.Replace;
        let h = Nc(m.location, w, v);
        u = d();
        let x = Vf(h, u)
          , b = m.createHref(h);
        s.replaceState(x, "", b),
        i && l && l({
            action: a,
            location: m.location,
            delta: 0
        })
    }
    function S(w) {
        let v = o.location.origin !== "null" ? o.location.origin : o.location.href
          , h = typeof w == "string" ? w : ov(w);
        return h = h.replace(/ $/, "%20"),
        Qe(v, "No window.location.(origin|href) available to create URL for href: " + h),
        new URL(h,v)
    }
    let m = {
        get action() {
            return a
        },
        get location() {
            return e(o, s)
        },
        listen(w) {
            if (l)
                throw new Error("A history only accepts one active listener");
            return o.addEventListener(Uf, f),
            l = w,
            () => {
                o.removeEventListener(Uf, f),
                l = null
            }
        },
        createHref(w) {
            return t(o, w)
        },
        createURL: S,
        encodeLocation(w) {
            let v = S(w);
            return {
                pathname: v.pathname,
                search: v.search,
                hash: v.hash
            }
        },
        push: g,
        replace: p,
        go(w) {
            return s.go(w)
        }
    };
    return m
}
var Hf;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(Hf || (Hf = {}));
function vC(e, t, n) {
    return n === void 0 && (n = "/"),
    yC(e, t, n, !1)
}
function yC(e, t, n, r) {
    let o = typeof t == "string" ? Ea(t) : t
      , i = av(o.pathname || "/", n);
    if (i == null)
        return null;
    let s = iv(e);
    xC(s);
    let a = null;
    for (let l = 0; a == null && l < s.length; ++l) {
        let u = TC(i);
        a = jC(s[l], u, r)
    }
    return a
}
function iv(e, t, n, r) {
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = "");
    let o = (i, s, a) => {
        let l = {
            relativePath: a === void 0 ? i.path || "" : a,
            caseSensitive: i.caseSensitive === !0,
            childrenIndex: s,
            route: i
        };
        l.relativePath.startsWith("/") && (Qe(l.relativePath.startsWith(r), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        l.relativePath = l.relativePath.slice(r.length));
        let u = Qr([r, l.relativePath])
          , d = n.concat(l);
        i.children && i.children.length > 0 && (Qe(i.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')),
        iv(i.children, t, d, u)),
        !(i.path == null && !i.index) && t.push({
            path: u,
            score: NC(u, i.index),
            routesMeta: d
        })
    }
    ;
    return e.forEach( (i, s) => {
        var a;
        if (i.path === "" || !((a = i.path) != null && a.includes("?")))
            o(i, s);
        else
            for (let l of sv(i.path))
                o(i, s, l)
    }
    ),
    t
}
function sv(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...r] = t
      , o = n.endsWith("?")
      , i = n.replace(/\?$/, "");
    if (r.length === 0)
        return o ? [i, ""] : [i];
    let s = sv(r.join("/"))
      , a = [];
    return a.push(...s.map(l => l === "" ? i : [i, l].join("/"))),
    o && a.push(...s),
    a.map(l => e.startsWith("/") && l === "" ? "/" : l)
}
function xC(e) {
    e.sort( (t, n) => t.score !== n.score ? n.score - t.score : PC(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const wC = /^:[\w-]+$/
  , SC = 3
  , bC = 2
  , CC = 1
  , EC = 10
  , kC = -2
  , Kf = e => e === "*";
function NC(e, t) {
    let n = e.split("/")
      , r = n.length;
    return n.some(Kf) && (r += kC),
    t && (r += bC),
    n.filter(o => !Kf(o)).reduce( (o, i) => o + (wC.test(i) ? SC : i === "" ? CC : EC), r)
}
function PC(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function jC(e, t, n) {
    let {routesMeta: r} = e
      , o = {}
      , i = "/"
      , s = [];
    for (let a = 0; a < r.length; ++a) {
        let l = r[a]
          , u = a === r.length - 1
          , d = i === "/" ? t : t.slice(i.length) || "/"
          , f = Qf({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: u
        }, d)
          , g = l.route;
        if (!f && u && n && !r[r.length - 1].route.index && (f = Qf({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: !1
        }, d)),
        !f)
            return null;
        Object.assign(o, f.params),
        s.push({
            params: o,
            pathname: Qr([i, f.pathname]),
            pathnameBase: AC(Qr([i, f.pathnameBase])),
            route: g
        }),
        f.pathnameBase !== "/" && (i = Qr([i, f.pathnameBase]))
    }
    return s
}
function Qf(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = RC(e.path, e.caseSensitive, e.end)
      , o = t.match(n);
    if (!o)
        return null;
    let i = o[0]
      , s = i.replace(/(.)\/+$/, "$1")
      , a = o.slice(1);
    return {
        params: r.reduce( (u, d, f) => {
            let {paramName: g, isOptional: p} = d;
            if (g === "*") {
                let m = a[f] || "";
                s = i.slice(0, i.length - m.length).replace(/(.)\/+$/, "$1")
            }
            const S = a[f];
            return p && !S ? u[g] = void 0 : u[g] = (S || "").replace(/%2F/g, "/"),
            u
        }
        , {}),
        pathname: i,
        pathnameBase: s,
        pattern: e
    }
}
function RC(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    rv(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = []
      , o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (s, a, l) => (r.push({
        paramName: a,
        isOptional: l != null
    }),
    l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }),
    o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o,t ? void 0 : "i"), r]
}
function TC(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return rv(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function av(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
const Qr = e => e.join("/").replace(/\/\/+/g, "/")
  , AC = e => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function LC(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const lv = ["post", "put", "patch", "delete"];
new Set(lv);
const zC = ["get", ...lv];
new Set(zC);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Xs() {
    return Xs = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Xs.apply(this, arguments)
}
const OC = y.createContext(null)
  , DC = y.createContext(null)
  , cv = y.createContext(null)
  , ka = y.createContext(null)
  , Na = y.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , uv = y.createContext(null);
function Uu() {
    return y.useContext(ka) != null
}
function dv() {
    return Uu() || Qe(!1),
    y.useContext(ka).location
}
function MC(e, t) {
    return _C(e, t)
}
function _C(e, t, n, r) {
    Uu() || Qe(!1);
    let {navigator: o} = y.useContext(cv)
      , {matches: i} = y.useContext(Na)
      , s = i[i.length - 1]
      , a = s ? s.params : {};
    s && s.pathname;
    let l = s ? s.pathnameBase : "/";
    s && s.route;
    let u = dv(), d;
    if (t) {
        var f;
        let w = typeof t == "string" ? Ea(t) : t;
        l === "/" || (f = w.pathname) != null && f.startsWith(l) || Qe(!1),
        d = w
    } else
        d = u;
    let g = d.pathname || "/"
      , p = g;
    if (l !== "/") {
        let w = l.replace(/^\//, "").split("/");
        p = "/" + g.replace(/^\//, "").split("/").slice(w.length).join("/")
    }
    let S = vC(e, {
        pathname: p
    })
      , m = WC(S && S.map(w => Object.assign({}, w, {
        params: Object.assign({}, a, w.params),
        pathname: Qr([l, o.encodeLocation ? o.encodeLocation(w.pathname).pathname : w.pathname]),
        pathnameBase: w.pathnameBase === "/" ? l : Qr([l, o.encodeLocation ? o.encodeLocation(w.pathnameBase).pathname : w.pathnameBase])
    })), i, n, r);
    return t && m ? y.createElement(ka.Provider, {
        value: {
            location: Xs({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, d),
            navigationType: Rn.Pop
        }
    }, m) : m
}
function IC() {
    let e = KC()
      , t = LC(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , o = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return y.createElement(y.Fragment, null, y.createElement("h2", null, "Unexpected Application Error!"), y.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? y.createElement("pre", {
        style: o
    }, n) : null, null)
}
const FC = y.createElement(IC, null);
class $C extends y.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? y.createElement(Na.Provider, {
            value: this.props.routeContext
        }, y.createElement(uv.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function BC(e) {
    let {routeContext: t, match: n, children: r} = e
      , o = y.useContext(OC);
    return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    y.createElement(Na.Provider, {
        value: t
    }, r)
}
function WC(e, t, n, r) {
    var o;
    if (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null) {
        var i;
        if (!n)
            return null;
        if (n.errors)
            e = n.matches;
        else if ((i = r) != null && i.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else
            return null
    }
    let s = e
      , a = (o = n) == null ? void 0 : o.errors;
    if (a != null) {
        let d = s.findIndex(f => f.route.id && (a == null ? void 0 : a[f.route.id]) !== void 0);
        d >= 0 || Qe(!1),
        s = s.slice(0, Math.min(s.length, d + 1))
    }
    let l = !1
      , u = -1;
    if (n && r && r.v7_partialHydration)
        for (let d = 0; d < s.length; d++) {
            let f = s[d];
            if ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = d),
            f.route.id) {
                let {loaderData: g, errors: p} = n
                  , S = f.route.loader && g[f.route.id] === void 0 && (!p || p[f.route.id] === void 0);
                if (f.route.lazy || S) {
                    l = !0,
                    u >= 0 ? s = s.slice(0, u + 1) : s = [s[0]];
                    break
                }
            }
        }
    return s.reduceRight( (d, f, g) => {
        let p, S = !1, m = null, w = null;
        n && (p = a && f.route.id ? a[f.route.id] : void 0,
        m = f.route.errorElement || FC,
        l && (u < 0 && g === 0 ? (S = !0,
        w = null) : u === g && (S = !0,
        w = f.route.hydrateFallbackElement || null)));
        let v = t.concat(s.slice(0, g + 1))
          , h = () => {
            let x;
            return p ? x = m : S ? x = w : f.route.Component ? x = y.createElement(f.route.Component, null) : f.route.element ? x = f.route.element : x = d,
            y.createElement(BC, {
                match: f,
                routeContext: {
                    outlet: d,
                    matches: v,
                    isDataRoute: n != null
                },
                children: x
            })
        }
        ;
        return n && (f.route.ErrorBoundary || f.route.errorElement || g === 0) ? y.createElement($C, {
            location: n.location,
            revalidation: n.revalidation,
            component: m,
            error: p,
            children: h(),
            routeContext: {
                outlet: null,
                matches: v,
                isDataRoute: !0
            }
        }) : h()
    }
    , null)
}
var Pc = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}(Pc || {});
function UC(e) {
    let t = y.useContext(DC);
    return t || Qe(!1),
    t
}
function VC(e) {
    let t = y.useContext(Na);
    return t || Qe(!1),
    t
}
function HC(e) {
    let t = VC()
      , n = t.matches[t.matches.length - 1];
    return n.route.id || Qe(!1),
    n.route.id
}
function KC() {
    var e;
    let t = y.useContext(uv)
      , n = UC(Pc.UseRouteError)
      , r = HC(Pc.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function QC(e, t) {
    e == null || e.v7_startTransition,
    e == null || e.v7_relativeSplatPath
}
function jc(e) {
    Qe(!1)
}
function GC(e) {
    let {basename: t="/", children: n=null, location: r, navigationType: o=Rn.Pop, navigator: i, static: s=!1, future: a} = e;
    Uu() && Qe(!1);
    let l = t.replace(/^\/*/, "/")
      , u = y.useMemo( () => ({
        basename: l,
        navigator: i,
        static: s,
        future: Xs({
            v7_relativeSplatPath: !1
        }, a)
    }), [l, a, i, s]);
    typeof r == "string" && (r = Ea(r));
    let {pathname: d="/", search: f="", hash: g="", state: p=null, key: S="default"} = r
      , m = y.useMemo( () => {
        let w = av(d, l);
        return w == null ? null : {
            location: {
                pathname: w,
                search: f,
                hash: g,
                state: p,
                key: S
            },
            navigationType: o
        }
    }
    , [l, d, f, g, p, S, o]);
    return m == null ? null : y.createElement(cv.Provider, {
        value: u
    }, y.createElement(ka.Provider, {
        children: n,
        value: m
    }))
}
function YC(e) {
    let {children: t, location: n} = e;
    return MC(Rc(t), n)
}
new Promise( () => {}
);
function Rc(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return y.Children.forEach(e, (r, o) => {
        if (!y.isValidElement(r))
            return;
        let i = [...t, o];
        if (r.type === y.Fragment) {
            n.push.apply(n, Rc(r.props.children, i));
            return
        }
        r.type !== jc && Qe(!1),
        !r.props.index || !r.props.children || Qe(!1);
        let s = {
            id: r.props.id || i.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (s.children = Rc(r.props.children, i)),
        n.push(s)
    }
    ),
    n
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const XC = "6";
try {
    window.__reactRouterVersion = XC
} catch {}
const qC = "startTransition"
  , Gf = Dc[qC];
function ZC(e) {
    let {basename: t, children: n, future: r, window: o} = e
      , i = y.useRef();
    i.current == null && (i.current = mC({
        window: o,
        v5Compat: !0
    }));
    let s = i.current
      , [a,l] = y.useState({
        action: s.action,
        location: s.location
    })
      , {v7_startTransition: u} = r || {}
      , d = y.useCallback(f => {
        u && Gf ? Gf( () => l(f)) : l(f)
    }
    , [l, u]);
    return y.useLayoutEffect( () => s.listen(d), [s, d]),
    y.useEffect( () => QC(r), [r]),
    y.createElement(GC, {
        basename: t,
        children: n,
        location: a.location,
        navigationType: a.action,
        navigator: s,
        future: r
    })
}
var Yf;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher",
    e.useViewTransitionState = "useViewTransitionState"
}
)(Yf || (Yf = {}));
var Xf;
(function(e) {
    e.UseFetcher = "useFetcher",
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(Xf || (Xf = {}));
const JC = sg("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})
  , Vu = y.forwardRef( ({className: e, variant: t, size: n, asChild: r=!1, ...o}, i) => {
    const s = r ? Wx : "button";
    return c.jsx(s, {
        className: ye(JC({
            variant: t,
            size: n,
            className: e
        })),
        ref: i,
        ...o
    })
}
);
Vu.displayName = "Button";
const eE = "/assets/whatsapp-icon-Cko1obp_.png"
  , tE = ({width: e, height: t}={}) => c.jsxs("svg", {
    width: e || "100%",
    height: t || "100%",
    viewBox: "0 0 200 200",
    xmlns: "http://www.w3.org/2000/svg",
    style: {
        filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.2))"
    },
    children: [c.jsx("path", {
        d: "M 40 50 L 40 150 L 65 150 C 85 150 100 135 100 115 L 100 85 C 100 65 85 50 65 50 Z M 55 65 L 65 65 C 75 65 85 75 85 85 L 85 115 C 85 125 75 135 65 135 L 55 135 Z",
        fill: "#FFFFFF",
        stroke: "#FFFFFF",
        strokeWidth: "8",
        strokeLinejoin: "round"
    }), c.jsx("path", {
        d: "M 40 50 L 40 150 L 65 150 C 85 150 100 135 100 115 L 100 85 C 100 65 85 50 65 50 Z M 55 65 L 65 65 C 75 65 85 75 85 85 L 85 115 C 85 125 75 135 65 135 L 55 135 Z",
        fill: "#C41E3A"
    }), c.jsx("path", {
        d: "M 110 50 L 110 150 L 125 150 L 125 110 L 155 110 L 155 95 L 125 95 L 125 65 L 160 65 L 160 50 Z",
        fill: "#FFFFFF",
        stroke: "#FFFFFF",
        strokeWidth: "8",
        strokeLinejoin: "round"
    }), c.jsx("path", {
        d: "M 110 50 L 110 150 L 125 150 L 125 110 L 155 110 L 155 95 L 125 95 L 125 65 L 160 65 L 160 50 Z",
        fill: "#C41E3A"
    })]
})
  , fv = y.createContext(void 0)
  , nE = ({children: e}) => {
    const [t,n] = y.useState([])
      , r = l => {
        n(u => u.find(f => f.id === l.id) ? u.map(f => f.id === l.id ? {
            ...f,
            quantity: f.quantity + 1
        } : f) : [...u, {
            ...l,
            quantity: 1
        }])
    }
      , o = l => {
        n(u => u.filter(d => d.id !== l))
    }
      , i = () => {
        n([])
    }
      , s = t.reduce( (l, u) => l + u.quantity, 0)
      , a = () => {
        if (t.length === 0)
            return "Hello, I would like to order from DPF Decent Fast Food";
        let l = `Hello! I would like to order:

`;
        t.forEach(d => {
            l += `${d.quantity}x ${d.name} - Rs. ${d.price}
`
        }
        );
        const u = t.reduce( (d, f) => d + parseInt(f.price) * f.quantity, 0);
        return l += `
Total: Rs. ${u}

From: DPF Decent Fast Food - Khanqah Dogran Branch`,
        l
    }
    ;
    return c.jsx(fv.Provider, {
        value: {
            cartItems: t,
            cartCount: s,
            addToCart: r,
            removeFromCart: o,
            clearCart: i,
            getWhatsAppMessage: a
        },
        children: e
    })
}
  , wo = () => {
    const e = y.useContext(fv);
    if (!e)
        throw new Error("useCart must be used within CartProvider");
    return e
}
  , rE = {
    khanqah: {
        name: "khanqah",
        displayName: "Khanqah Dogran Branch",
        address: "Opposite New Gala Mandi, Lahore Road, Khanqah Dogran",
        phone1: "0333-2000825",
        phone2: "0321-0603333",
        complaintPhone: "0323-3333745",
        whatsappNumber: "923332000825"
    },
    safdarabad: {
        name: "safdarabad",
        displayName: "Safdarabad Branch",
        address: "Khanqah Road, Near Fossil Energy Petrol Pump, Safdarabad",
        phone1: "0328-6850000",
        phone2: "0315-9600777",
        complaintPhone: "0323-3333745",
        whatsappNumber: "923286850000"
    }
}
  , pv = y.createContext(void 0)
  , oE = ({children: e}) => {
    const [t,n] = y.useState("khanqah")
      , r = i => {
        n(i)
    }
      , o = rE[t];
    return c.jsx(pv.Provider, {
        value: {
            currentBranch: t,
            branchInfo: o,
            switchBranch: r
        },
        children: e
    })
}
  , Hu = () => {
    const e = y.useContext(pv);
    if (e === void 0)
        throw new Error("useBranch must be used within a BranchProvider");
    return e
}
  , iE = () => {
    const {cartCount: e, getWhatsAppMessage: t} = wo()
      , {currentBranch: n, branchInfo: r, switchBranch: o} = Hu()
      , i = () => {
        const s = encodeURIComponent(t())
          , a = r.whatsappNumber;
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? window.open(`https://wa.me/${a}?text=${s}`, "_blank") : window.open(`https://web.whatsapp.com/send?phone=${a}&text=${s}`, "_blank")
    }
    ;
    return c.jsx("header", {
        className: "sticky top-0 z-50 bg-white shadow-md",
        children: c.jsx("div", {
            className: "bg-gradient-to-r from-cyan-500 to-cyan-600 text-white",
            children: c.jsx("div", {
                className: "container mx-auto px-2 sm:px-4 py-2 sm:py-3",
                children: c.jsxs("div", {
                    className: "flex items-center justify-between gap-2",
                    children: [c.jsxs(Vu, {
                        variant: "destructive",
                        size: "sm",
                        onClick: () => o(n === "khanqah" ? "safdarabad" : "khanqah"),
                        className: "bg-primary hover:bg-primary/90 flex items-center gap-1 sm:gap-2 font-bold text-xs sm:text-sm px-2 sm:px-4 flex-shrink-0",
                        children: [c.jsx(Tu, {
                            className: "w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0"
                        }), c.jsxs("div", {
                            className: "text-left hidden md:block",
                            children: [c.jsx("div", {
                                className: "text-xs font-normal",
                                children: "Change Branch"
                            }), c.jsx("div", {
                                className: "text-sm",
                                children: r.displayName
                            })]
                        }), c.jsx("span", {
                            className: "md:hidden text-xs whitespace-nowrap",
                            children: n === "khanqah" ? "Khanqah D" : "Safdarabad"
                        })]
                    }), c.jsxs("div", {
                        className: "flex-shrink-0 flex items-center gap-2 sm:gap-3",
                        children: [c.jsx("div", {
                            className: "w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center",
                            children: c.jsx(tE, {})
                        }), c.jsxs("div", {
                            className: "hidden sm:block",
                            children: [c.jsx("div", {
                                className: "font-bebas text-xl sm:text-2xl md:text-3xl tracking-wider text-primary leading-none",
                                children: "DF DECENT"
                            }), c.jsx("div", {
                                className: "font-bebas text-sm sm:text-base md:text-lg tracking-widest text-gray-700 leading-none",
                                children: "FAST FOOD"
                            })]
                        })]
                    }), c.jsxs("div", {
                        className: "flex items-center gap-1.5 sm:gap-3 flex-shrink-0",
                        children: [c.jsxs("button", {
                            onClick: i,
                            className: "bg-[#25D366] hover:bg-[#20BA5A] text-white px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full flex items-center gap-1 sm:gap-1.5 transition-all hover:scale-105 shadow-md flex-shrink-0",
                            children: [c.jsx("img", {
                                src: eE,
                                alt: "WhatsApp",
                                className: "w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0"
                            }), c.jsx("span", {
                                className: "hidden sm:inline font-semibold text-xs md:text-sm whitespace-nowrap",
                                children: "Chat on WhatsApp"
                            })]
                        }), c.jsxs("button", {
                            className: "relative flex-shrink-0",
                            children: [c.jsx(Fw, {
                                className: "w-5 h-5 sm:w-6 sm:h-6"
                            }), e > 0 && c.jsx("span", {
                                className: "absolute -top-2 -right-2 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold",
                                children: e
                            })]
                        })]
                    })]
                })
            })
        })
    })
}
  , sE = "/assets/banner-wraps-D6lAEiEI.webp"
  , aE = "/assets/banner-burgers-fiU35ugS.webp"
  , lE = "/assets/banner-pizza-CPtjiEUa.webp"
  , ml = [{
    image: sE,
    alt: "High on Wraps"
}, {
    image: aE,
    alt: "High on Burgers"
}, {
    image: lE,
    alt: "High on Deliciousness"
}]
  , cE = () => {
    const [e,t] = y.useState(0);
    return y.useEffect( () => {
        const n = setInterval( () => {
            t(r => (r + 1) % ml.length)
        }
        , 4e3);
        return () => clearInterval(n)
    }
    , []),
    c.jsxs("div", {
        className: "relative w-full h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-b-3xl shadow-2xl",
        children: [ml.map( (n, r) => c.jsx("div", {
            className: `absolute inset-0 transition-opacity duration-1000 ${r === e ? "opacity-100 z-10" : "opacity-0 z-0"}`,
            children: c.jsx("img", {
                src: n.image,
                alt: n.alt,
                className: "w-full h-full object-contain sm:object-cover object-center bg-gradient-to-br from-red-600 to-red-700"
            })
        }, r)), c.jsx("div", {
            className: "absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-3",
            children: ml.map( (n, r) => c.jsx("button", {
                onClick: () => t(r),
                className: `w-3 h-3 rounded-full transition-all ${r === e ? "bg-white w-8" : "bg-white/50 hover:bg-white/80"}`,
                "aria-label": `Go to slide ${r + 1}`
            }, r))
        })]
    })
}
  , uE = () => c.jsx("div", {
    className: "relative w-full",
    children: c.jsx(cE, {})
})
  , dE = [{
    name: "DEALS RELOADED",
    id: "deals-reloaded"
}, {
    name: "SNACKS",
    id: "snacks"
}, {
    name: "ROLLS",
    id: "rolls"
}, {
    name: "PASTA",
    id: "pasta"
}, {
    name: "SANDWICH",
    id: "sandwich"
}, {
    name: "SHAWARMA",
    id: "shawarma"
}, {
    name: "WRAPS",
    id: "wraps"
}, {
    name: "SPECIAL BURGERS",
    id: "special-burgers"
}, {
    name: "BURGERS",
    id: "burgers"
}, {
    name: "PIZZA",
    id: "pizza"
}, {
    name: "CHICKEN PIECES",
    id: "chicken-pieces"
}, {
    name: "BIRTHDAY DEAL",
    id: "birthday-deal"
}, {
    name: "KIDS MEAL",
    id: "kids-meal"
}]
  , fE = () => {
    const e = y.useRef(null)
      , t = r => {
        e.current && e.current.scrollBy({
            left: r === "left" ? -300 : 300,
            behavior: "smooth"
        })
    }
      , n = r => {
        const o = document.getElementById(r);
        if (o) {
            const a = o.getBoundingClientRect().top + window.pageYOffset - 120;
            window.scrollTo({
                top: a,
                behavior: "smooth"
            })
        }
    }
    ;
    return c.jsxs("div", {
        className: "relative bg-gradient-to-r from-cyan-400 to-cyan-500 border-y border-cyan-600",
        children: [c.jsx("button", {
            onClick: () => t("left"),
            className: "absolute left-0 top-0 bottom-0 z-10 bg-gradient-to-r from-cyan-500 to-transparent px-2 hover:from-cyan-600",
            children: c.jsx(wf, {
                className: "w-6 h-6 text-white rotate-180"
            })
        }), c.jsx("div", {
            ref: e,
            className: "overflow-x-auto scrollbar-hide scroll-smooth",
            style: {
                scrollbarWidth: "none",
                msOverflowStyle: "none"
            },
            children: c.jsx("div", {
                className: "flex gap-1 px-12 py-3",
                children: dE.map( (r, o) => c.jsx("button", {
                    onClick: () => n(r.id),
                    className: "whitespace-nowrap px-6 py-2 text-white font-bold hover:bg-white/20 transition-smooth rounded-lg text-sm",
                    children: r.name
                }, o))
            })
        }), c.jsx("button", {
            onClick: () => t("right"),
            className: "absolute right-0 top-0 bottom-0 z-10 bg-gradient-to-l from-cyan-500 to-transparent px-2 hover:from-cyan-600",
            children: c.jsx(wf, {
                className: "w-6 h-6 text-white"
            })
        })]
    })
}
  , Ku = y.forwardRef( ({className: e, type: t, ...n}, r) => c.jsx("input", {
    type: t,
    className: ye("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", e),
    ref: r,
    ...n
}));
Ku.displayName = "Input";
const pE = () => {
    const [e,t] = y.useState("")
      , n = [{
        name: "Spin Roll",
        section: "rolls",
        id: "rolls"
    }, {
        name: "Full Creamy Roll",
        section: "rolls",
        id: "rolls"
    }, {
        name: "Zinger Paratha Roll",
        section: "rolls",
        id: "rolls"
    }, {
        name: "Chicken Paratha Roll",
        section: "rolls",
        id: "rolls"
    }, {
        name: "Decent Special Paratha Roll",
        section: "rolls",
        id: "rolls"
    }, {
        name: "Malai Boti Paratha Roll",
        section: "rolls",
        id: "rolls"
    }, {
        name: "Kebab Paratha Roll",
        section: "rolls",
        id: "rolls"
    }, {
        name: "Crunchy Pasta",
        section: "pasta",
        id: "pasta"
    }, {
        name: "Hot & Spicy Pasta",
        section: "pasta",
        id: "pasta"
    }, {
        name: "Full Creamy Pasta",
        section: "pasta",
        id: "pasta"
    }, {
        name: "Decent Special Pasta",
        section: "pasta",
        id: "pasta"
    }, {
        name: "Malai Boti Pizza",
        section: "pizza",
        id: "pizza"
    }, {
        name: "Behari Kabab Pizza",
        section: "pizza",
        id: "pizza"
    }, {
        name: "Decent Zinger Pizza",
        section: "pizza",
        id: "pizza"
    }, {
        name: "Square Pizza",
        section: "pizza",
        id: "pizza"
    }, {
        name: "Click On Pizza",
        section: "pizza",
        id: "pizza"
    }, {
        name: "Hot & Spicy Pizza",
        section: "pizza",
        id: "pizza"
    }, {
        name: "Bone Fire Pizza",
        section: "pizza",
        id: "pizza"
    }, {
        name: "Decent Special Pizza",
        section: "pizza",
        id: "pizza"
    }, {
        name: "Chicken Tikka Pizza",
        section: "pizza",
        id: "pizza"
    }, {
        name: "Chicken Fajita Pizza",
        section: "pizza",
        id: "pizza"
    }, {
        name: "Chicken Supreme Pizza",
        section: "pizza",
        id: "pizza"
    }, {
        name: "Vegetable Lover Pizza",
        section: "pizza",
        id: "pizza"
    }, {
        name: "Chicken Stuffer Pizza",
        section: "pizza",
        id: "pizza"
    }, {
        name: "Cheese Stuffer Pizza",
        section: "pizza",
        id: "pizza"
    }, {
        name: "Chicken Cheese Stuffer Pizza",
        section: "pizza",
        id: "pizza"
    }, {
        name: "Kabab Stuffer Pizza",
        section: "pizza",
        id: "pizza"
    }, {
        name: "Malai Boti Kabab Stuffer Pizza",
        section: "pizza",
        id: "pizza"
    }, {
        name: "Chicken Cheese Sticks",
        section: "pizza",
        id: "pizza"
    }, {
        name: "Chicken Shawarma",
        section: "shawarma",
        id: "shawarma"
    }, {
        name: "Hot & Spicy Shawarma",
        section: "shawarma",
        id: "shawarma"
    }, {
        name: "Zinger Shawarma",
        section: "shawarma",
        id: "shawarma"
    }, {
        name: "Kabab Shawarma",
        section: "shawarma",
        id: "shawarma"
    }, {
        name: "Malai Boti Shawarma",
        section: "shawarma",
        id: "shawarma"
    }, {
        name: "Crunchy Wrap",
        section: "wraps",
        id: "wraps"
    }, {
        name: "Mexican Wrap",
        section: "wraps",
        id: "wraps"
    }, {
        name: "Arabic Wrap",
        section: "wraps",
        id: "wraps"
    }, {
        name: "Shawarma Wrap",
        section: "wraps",
        id: "wraps"
    }, {
        name: "Decent Special Wrap",
        section: "wraps",
        id: "wraps"
    }, {
        name: "Chicken Sandwich",
        section: "sandwich",
        id: "sandwich"
    }, {
        name: "Club Sandwich",
        section: "sandwich",
        id: "sandwich"
    }, {
        name: "Decent Special Sandwich",
        section: "sandwich",
        id: "sandwich"
    }, {
        name: "Full Creamy Sandwich",
        section: "sandwich",
        id: "sandwich"
    }, {
        name: "Loaded Fries",
        section: "snacks",
        id: "snacks"
    }, {
        name: "Fries",
        section: "snacks",
        id: "snacks"
    }, {
        name: "Nuggets",
        section: "snacks",
        id: "snacks"
    }, {
        name: "Crispy Wings",
        section: "snacks",
        id: "snacks"
    }, {
        name: "Grilled Wings",
        section: "snacks",
        id: "snacks"
    }, {
        name: "Fried Fish",
        section: "snacks",
        id: "snacks"
    }, {
        name: "Molten Lava Burger",
        section: "special-burgers",
        id: "special-burgers"
    }, {
        name: "Thunder Burger",
        section: "special-burgers",
        id: "special-burgers"
    }, {
        name: "Zinger Stacker",
        section: "special-burgers",
        id: "special-burgers"
    }, {
        name: "Decent Special Beef Burger",
        section: "special-burgers",
        id: "special-burgers"
    }, {
        name: "Patty Burger",
        section: "burgers",
        id: "burgers"
    }, {
        name: "Tikka Burger",
        section: "burgers",
        id: "burgers"
    }, {
        name: "Crisper Burger",
        section: "burgers",
        id: "burgers"
    }, {
        name: "Jalapeno Burger",
        section: "burgers",
        id: "burgers"
    }, {
        name: "Zinger Burger",
        section: "burgers",
        id: "burgers"
    }, {
        name: "Fish Burger",
        section: "burgers",
        id: "burgers"
    }, {
        name: "Decent Tower",
        section: "burgers",
        id: "burgers"
    }, {
        name: "1 Piece",
        section: "chicken-pieces",
        id: "chicken-pieces"
    }, {
        name: "3 Pieces",
        section: "chicken-pieces",
        id: "chicken-pieces"
    }, {
        name: "9 Pieces",
        section: "chicken-pieces",
        id: "chicken-pieces"
    }, {
        name: "Birthday Deal",
        section: "birthday-deal",
        id: "birthday-deal"
    }, {
        name: "Kids Meal",
        section: "kids-meal",
        id: "kids-meal"
    }, {
        name: "Deal 1",
        section: "deals-reloaded",
        id: "deals-reloaded"
    }, {
        name: "Deal 2",
        section: "deals-reloaded",
        id: "deals-reloaded"
    }, {
        name: "Deal 3",
        section: "deals-reloaded",
        id: "deals-reloaded"
    }, {
        name: "Deal 4",
        section: "deals-reloaded",
        id: "deals-reloaded"
    }, {
        name: "Deal 5",
        section: "deals-reloaded",
        id: "deals-reloaded"
    }, {
        name: "Deal 6",
        section: "deals-reloaded",
        id: "deals-reloaded"
    }, {
        name: "Deal 7",
        section: "deals-reloaded",
        id: "deals-reloaded"
    }, {
        name: "Deal 8",
        section: "deals-reloaded",
        id: "deals-reloaded"
    }]
      , r = () => {
        if (!e.trim()) {
            lt({
                title: "Search Empty",
                description: "Please enter something to search"
            });
            return
        }
        const i = n.filter(s => s.name.toLowerCase().includes(e.toLowerCase()));
        if (i.length > 0) {
            const s = document.getElementById(i[0].id);
            if (s) {
                const u = s.getBoundingClientRect().top + window.pageYOffset - 120;
                window.scrollTo({
                    top: u,
                    behavior: "smooth"
                }),
                lt({
                    title: "Found!",
                    description: `Found ${i.length} result(s) for "${e}" in ${i[0].section}`
                })
            }
        } else
            lt({
                title: "No Results",
                description: `No items found for "${e}"`,
                variant: "destructive"
            })
    }
      , o = i => {
        i.key === "Enter" && r()
    }
    ;
    return c.jsx("div", {
        className: "bg-white py-4 shadow-sm sticky top-0 z-40",
        children: c.jsx("div", {
            className: "container mx-auto px-4",
            children: c.jsxs("div", {
                className: "max-w-3xl mx-auto relative",
                children: [c.jsx(Ku, {
                    type: "text",
                    placeholder: "Search for food...",
                    value: e,
                    onChange: i => t(i.target.value),
                    onKeyPress: o,
                    className: "w-full pl-4 pr-12 py-6 text-lg border-2 border-gray-200 rounded-full focus:border-primary transition-smooth"
                }), c.jsx("button", {
                    onClick: r,
                    className: "absolute right-2 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary/90 text-white p-3 rounded-full transition-smooth",
                    children: c.jsx(_w, {
                        className: "w-5 h-5"
                    })
                })]
            })
        })
    })
}
  , mE = () => {
    const {branchInfo: e} = Hu();
    return c.jsxs("div", {
        className: "relative overflow-hidden bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-500 py-20",
        children: [c.jsx("div", {
            className: "absolute top-0 right-0 w-96 h-96 bg-yellow-300 rounded-full opacity-30 blur-3xl -translate-y-1/2 translate-x-1/4"
        }), c.jsx("div", {
            className: "absolute bottom-0 left-0 w-96 h-96 bg-amber-400 rounded-full opacity-30 blur-3xl translate-y-1/2 -translate-x-1/4"
        }), c.jsxs("div", {
            className: "container mx-auto px-4 relative z-10",
            children: [c.jsxs("div", {
                className: "text-center mb-12",
                children: [c.jsx("h2", {
                    className: "font-bebas text-6xl md:text-7xl tracking-widest mb-4 text-white drop-shadow-lg",
                    children: "DF DECENT FAST FOOD"
                }), c.jsx("div", {
                    className: "inline-block bg-white/90 backdrop-blur-sm px-8 py-3 rounded-full shadow-lg",
                    children: c.jsx("p", {
                        className: "font-poppins text-xl md:text-2xl font-bold text-primary",
                        children: e.displayName
                    })
                }), c.jsx("p", {
                    className: "font-poppins text-2xl md:text-3xl font-bold text-white mt-6 drop-shadow-md",
                    children: "Grab Your Meal – Eat Well Feel Well"
                })]
            }), c.jsxs("div", {
                className: "grid md:grid-cols-3 gap-6 max-w-5xl mx-auto",
                children: [c.jsxs("div", {
                    className: "bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1",
                    children: [c.jsx("div", {
                        className: "w-16 h-16 bg-gradient-to-br from-primary to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg",
                        children: c.jsx(Tu, {
                            className: "w-8 h-8 text-white"
                        })
                    }), c.jsx("h3", {
                        className: "font-bebas text-3xl tracking-wider text-center mb-3 text-gray-900",
                        children: "LOCATION"
                    }), c.jsx("p", {
                        className: "font-poppins text-center text-gray-700 leading-relaxed font-medium",
                        children: e.address
                    })]
                }), c.jsxs("div", {
                    className: "bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1",
                    children: [c.jsx("div", {
                        className: "w-16 h-16 bg-gradient-to-br from-secondary to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg",
                        children: c.jsx(lg, {
                            className: "w-8 h-8 text-gray-900"
                        })
                    }), c.jsx("h3", {
                        className: "font-bebas text-3xl tracking-wider text-center mb-3 text-gray-900",
                        children: "OPENING HOURS"
                    }), c.jsx("p", {
                        className: "font-poppins text-center text-gray-900 text-xl font-bold",
                        children: "11:00 AM – 12:00 AM"
                    }), c.jsx("p", {
                        className: "font-poppins text-center text-gray-600 text-sm mt-1",
                        children: "Open Daily"
                    })]
                }), c.jsxs("div", {
                    className: "bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1",
                    children: [c.jsx("div", {
                        className: "w-16 h-16 bg-gradient-to-br from-primary to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg",
                        children: c.jsx(gs, {
                            className: "w-8 h-8 text-white"
                        })
                    }), c.jsx("h3", {
                        className: "font-bebas text-3xl tracking-wider text-center mb-3 text-gray-900",
                        children: "ORDER NOW"
                    }), c.jsxs("div", {
                        className: "space-y-2 text-center",
                        children: [c.jsx("a", {
                            href: `tel:${e.phone1.replace(/-/g, "")}`,
                            className: "block font-poppins font-bold text-lg text-primary hover:text-red-700 transition-colors",
                            children: e.phone1
                        }), c.jsx("a", {
                            href: `tel:${e.phone2.replace(/-/g, "")}`,
                            className: "block font-poppins font-bold text-lg text-primary hover:text-red-700 transition-colors",
                            children: e.phone2
                        }), c.jsxs("p", {
                            className: "font-poppins text-xs text-gray-600 mt-3",
                            children: ["Complaints: ", c.jsx("a", {
                                href: `tel:${e.complaintPhone.replace(/-/g, "")}`,
                                className: "text-primary hover:underline",
                                children: e.complaintPhone
                            })]
                        })]
                    })]
                })]
            }), c.jsx("div", {
                className: "text-center mt-12",
                children: c.jsx("div", {
                    className: "inline-block bg-white rounded-full px-8 py-4 shadow-xl",
                    children: c.jsxs("p", {
                        className: "font-bebas text-2xl tracking-wider text-gray-900",
                        children: ["SERVICE CHARGES: ", c.jsx("span", {
                            className: "text-primary",
                            children: "+5%"
                        })]
                    })
                })
            })]
        })]
    })
}
  , pr = y.forwardRef( ({className: e, ...t}, n) => c.jsx("div", {
    ref: n,
    className: ye("rounded-lg border bg-card text-card-foreground shadow-sm", e),
    ...t
}));
pr.displayName = "Card";
const hE = y.forwardRef( ({className: e, ...t}, n) => c.jsx("div", {
    ref: n,
    className: ye("flex flex-col space-y-1.5 p-6", e),
    ...t
}));
hE.displayName = "CardHeader";
const gE = y.forwardRef( ({className: e, ...t}, n) => c.jsx("h3", {
    ref: n,
    className: ye("text-2xl font-semibold leading-none tracking-tight", e),
    ...t
}));
gE.displayName = "CardTitle";
const vE = y.forwardRef( ({className: e, ...t}, n) => c.jsx("p", {
    ref: n,
    className: ye("text-sm text-muted-foreground", e),
    ...t
}));
vE.displayName = "CardDescription";
const yE = y.forwardRef( ({className: e, ...t}, n) => c.jsx("div", {
    ref: n,
    className: ye("p-6 pt-0", e),
    ...t
}));
yE.displayName = "CardContent";
const xE = y.forwardRef( ({className: e, ...t}, n) => c.jsx("div", {
    ref: n,
    className: ye("flex items-center p-6 pt-0", e),
    ...t
}));
xE.displayName = "CardFooter";
const hn = ({number: e, items: t, price: n, image: r}) => {
    const {addToCart: o} = wo()
      , i = () => {
        o({
            id: `deal-${e}`,
            name: `Deal #${e} (${t.join(", ")})`,
            price: n,
            type: "deal"
        }),
        lt({
            title: "Added to Cart!",
            description: `Deal #${e} - Rs. ${n}`
        })
    }
    ;
    return c.jsxs(pr, {
        className: "overflow-hidden group cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-0 flex flex-col",
        children: [c.jsx("div", {
            className: "relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200",
            children: c.jsx("img", {
                src: r,
                alt: `Deal #${e}`,
                className: "w-full h-full object-cover"
            })
        }), c.jsxs("div", {
            className: "p-5 flex-1 flex flex-col",
            children: [c.jsxs("h3", {
                className: "font-bebas text-3xl tracking-wider text-foreground mb-4 text-center",
                children: ["DEAL #", e]
            }), c.jsx("ul", {
                className: "space-y-2 mb-4 flex-1 text-center",
                children: t.map( (s, a) => c.jsx("li", {
                    className: "text-muted-foreground font-medium text-sm leading-relaxed",
                    children: s
                }, a))
            }), c.jsx("div", {
                className: "text-center mb-4",
                children: c.jsxs("p", {
                    className: "font-bebas text-2xl tracking-wide text-foreground",
                    children: ["Rs. ", n]
                })
            }), c.jsx("button", {
                onClick: i,
                className: "w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-full transition-colors uppercase tracking-wider text-sm",
                children: "ADD"
            })]
        })]
    })
}
  , wE = () => {
    const [e,t] = y.useState("")
      , {branchInfo: n} = Hu()
      , r = o => {
        o.preventDefault(),
        e && e.includes("@") ? (lt({
            title: "Subscribed Successfully!",
            description: "You'll receive our latest offers and updates."
        }),
        t("")) : lt({
            title: "Invalid Email",
            description: "Please enter a valid email address.",
            variant: "destructive"
        })
    }
    ;
    return c.jsxs("footer", {
        className: "bg-gradient-to-b from-gray-900 to-black text-white",
        children: [c.jsx("div", {
            className: "bg-gradient-to-r from-primary to-red-700 py-16",
            children: c.jsx("div", {
                className: "container mx-auto px-4",
                children: c.jsxs("div", {
                    className: "max-w-4xl mx-auto text-center",
                    children: [c.jsx("h3", {
                        className: "font-bebas text-5xl md:text-6xl tracking-widest mb-4 text-white",
                        children: "SPECIAL OFFERS & NEWS"
                    }), c.jsx("p", {
                        className: "font-poppins text-lg md:text-xl text-white/90 mb-8",
                        children: "Subscribe now for news, promotions and more delivered right to your inbox"
                    }), c.jsxs("form", {
                        onSubmit: r,
                        className: "flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto",
                        children: [c.jsx(Ku, {
                            type: "email",
                            placeholder: "Enter Email Address",
                            value: e,
                            onChange: o => t(o.target.value),
                            className: "flex-1 h-14 px-6 text-lg bg-white border-none rounded-full font-poppins"
                        }), c.jsx(Vu, {
                            type: "submit",
                            className: "h-14 px-10 bg-secondary hover:bg-yellow-500 text-gray-900 font-bebas text-2xl tracking-wider rounded-full shadow-lg hover:shadow-xl transition-all",
                            children: "SUBSCRIBE"
                        })]
                    })]
                })
            })
        }), c.jsxs("div", {
            className: "container mx-auto px-4 py-16",
            children: [c.jsxs("div", {
                className: "grid md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto",
                children: [c.jsxs("div", {
                    className: "text-center group",
                    children: [c.jsx("div", {
                        className: "w-20 h-20 bg-gradient-to-br from-primary to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all group-hover:scale-110",
                        children: c.jsx($w, {
                            className: "w-10 h-10"
                        })
                    }), c.jsx("div", {
                        className: "font-bebas text-2xl tracking-wider mb-2",
                        children: "DINE-IN"
                    }), c.jsx("div", {
                        className: "text-gray-400 font-poppins",
                        children: "Enjoy at our restaurant"
                    })]
                }), c.jsxs("div", {
                    className: "text-center group",
                    children: [c.jsx("div", {
                        className: "w-20 h-20 bg-gradient-to-br from-secondary to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all group-hover:scale-110",
                        children: c.jsx(Iw, {
                            className: "w-10 h-10 text-gray-900"
                        })
                    }), c.jsx("div", {
                        className: "font-bebas text-2xl tracking-wider mb-2",
                        children: "TAKEAWAY"
                    }), c.jsx("div", {
                        className: "text-gray-400 font-poppins",
                        children: "Quick pickup available"
                    })]
                }), c.jsxs("div", {
                    className: "text-center group",
                    children: [c.jsx("div", {
                        className: "w-20 h-20 bg-gradient-to-br from-primary to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all group-hover:scale-110",
                        children: c.jsx(gs, {
                            className: "w-10 h-10"
                        })
                    }), c.jsx("div", {
                        className: "font-bebas text-2xl tracking-wider mb-2",
                        children: "DELIVERY"
                    }), c.jsx("div", {
                        className: "text-gray-400 font-poppins",
                        children: "Fast home delivery"
                    })]
                })]
            }), c.jsxs("div", {
                className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 max-w-6xl mx-auto",
                children: [c.jsxs("div", {
                    className: "text-center md:text-left",
                    children: [c.jsx("div", {
                        className: "font-bebas text-4xl tracking-widest mb-4 gradient-red bg-clip-text text-transparent",
                        children: "DF DECENT FAST FOOD"
                    }), c.jsx("p", {
                        className: "text-gray-400 font-poppins mb-4",
                        children: "Serving delicious food with quality and care since day one."
                    }), c.jsxs("div", {
                        className: "flex items-center justify-center md:justify-start gap-2 text-gray-400 mb-2",
                        children: [c.jsx(Mw, {
                            className: "w-5 h-5 text-secondary"
                        }), c.jsx("span", {
                            className: "font-poppins",
                            children: "info@dpf.com"
                        })]
                    })]
                }), c.jsxs("div", {
                    className: "text-center",
                    children: [c.jsx("h4", {
                        className: "font-bebas text-2xl tracking-wider mb-4 text-white",
                        children: "CONTACT US"
                    }), c.jsxs("div", {
                        className: "space-y-3",
                        children: [c.jsxs("div", {
                            className: "flex items-center justify-center gap-2",
                            children: [c.jsx(gs, {
                                className: "w-5 h-5 text-secondary"
                            }), c.jsx("a", {
                                href: `tel:${n.phone1.replace(/-/g, "")}`,
                                className: "text-lg font-poppins font-semibold hover:text-primary transition-colors",
                                children: n.phone1
                            })]
                        }), c.jsxs("div", {
                            className: "flex items-center justify-center gap-2",
                            children: [c.jsx(gs, {
                                className: "w-5 h-5 text-secondary"
                            }), c.jsx("a", {
                                href: `tel:${n.phone2.replace(/-/g, "")}`,
                                className: "text-lg font-poppins font-semibold hover:text-primary transition-colors",
                                children: n.phone2
                            })]
                        }), c.jsxs("div", {
                            className: "text-sm text-gray-400 font-poppins mt-4",
                            children: ["Complaints: ", c.jsx("a", {
                                href: `tel:${n.complaintPhone.replace(/-/g, "")}`,
                                className: "text-primary hover:underline",
                                children: n.complaintPhone
                            })]
                        })]
                    })]
                }), c.jsxs("div", {
                    className: "text-center md:text-left",
                    children: [c.jsx("h4", {
                        className: "font-bebas text-2xl tracking-wider mb-4 text-white",
                        children: "VISIT US"
                    }), c.jsxs("div", {
                        className: "space-y-3",
                        children: [c.jsxs("div", {
                            className: "flex items-start justify-center md:justify-start gap-2 text-gray-400",
                            children: [c.jsx(Tu, {
                                className: "w-5 h-5 text-secondary mt-1 flex-shrink-0"
                            }), c.jsx("span", {
                                className: "font-poppins",
                                children: n.address
                            })]
                        }), c.jsxs("div", {
                            className: "flex items-center justify-center md:justify-start gap-2 text-gray-400",
                            children: [c.jsx(lg, {
                                className: "w-5 h-5 text-secondary"
                            }), c.jsx("span", {
                                className: "font-poppins font-semibold",
                                children: "11:00 AM – 12:00 AM"
                            })]
                        })]
                    })]
                })]
            }), c.jsxs("div", {
                className: "border-t border-gray-800 pt-8 mt-8 text-center",
                children: [c.jsxs("p", {
                    className: "text-gray-500 font-poppins text-sm mb-4",
                    children: ["© 2024 DF Decent Fast Food - ", n.displayName, ". All rights reserved."]
                }), c.jsx("div", {
                    className: "inline-block bg-gradient-to-r from-yellow-400 to-secondary px-6 py-2 rounded-full",
                    children: c.jsx("p", {
                        className: "font-bebas text-lg tracking-wider text-gray-900",
                        children: "SERVICE CHARGES: +5%"
                    })
                })]
            })]
        })]
    })
}
  , SE = "/assets/burger-CVd-FK-a.webp"
  , bE = "/assets/cheese-sticks-Ck7PoFxz.webp"
  , CE = "/assets/crispy-wings-CpVReCw5.webp"
  , EE = "/assets/fajita-pizza-uiPEdwre.webp"
  , mv = "/assets/spin-roll-Bvr9JLCT.jpg"
  , hv = "/assets/creamy-pasta-ZN41KEZW.jpg"
  , gv = "/assets/club-sandwich-Bd9JXi7k.jpg"
  , vv = "/assets/shawarma-KUhmy_JA.jpg"
  , kE = "/assets/loaded-fries-Cu3qgA48.jpg"
  , NE = "/assets/mexican-wrap-_L0L7U--.jpg"
  , yv = "/assets/zinger-stacker-BOB_FvC_.jpg"
  , PE = "/assets/chicken-pieces-DDrafiOW.jpg"
  , xv = "/assets/spicy-pizza-6BsQJGm3.jpg"
  , jE = "/assets/nuggets-D-4jkpuw.jpg"
  , Me = ({name: e, price: t, image: n, type: r="item"}) => {
    const {addToCart: o} = wo()
      , i = s => {
        s.stopPropagation(),
        o({
            id: `${r}-${e.toLowerCase().replace(/\s+/g, "-")}`,
            name: e,
            price: t,
            type: r
        }),
        lt({
            title: "Added to Cart!",
            description: `${e} - Rs. ${t}`
        })
    }
    ;
    return c.jsxs(pr, {
        className: "overflow-hidden group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-0 flex flex-col",
        children: [c.jsx("div", {
            className: "relative aspect-square overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200",
            children: c.jsx("img", {
                src: n,
                alt: e,
                className: "w-full h-full object-cover"
            })
        }), c.jsxs("div", {
            className: "p-4 flex-1 flex flex-col",
            children: [c.jsx("h3", {
                className: "font-bebas text-xl tracking-wider text-foreground mb-2 text-center",
                children: e
            }), c.jsx("div", {
                className: "text-center mb-3 flex-1 flex items-center justify-center",
                children: c.jsxs("p", {
                    className: "text-muted-foreground font-medium text-sm",
                    children: ["Rs. ", t]
                })
            }), c.jsx("button", {
                onClick: i,
                className: "w-full bg-primary hover:bg-primary/90 text-white font-bold py-2.5 px-4 rounded-full transition-colors uppercase tracking-wider text-sm",
                children: "ADD"
            })]
        })]
    })
}
  , RE = [{
    image: mv,
    name: "Spin Roll",
    price: "580"
}, {
    image: SE,
    name: "Zinger Burger",
    price: "470"
}, {
    image: hv,
    name: "Creamy Pasta",
    price: "530+"
}, {
    image: gv,
    name: "Club Sandwich",
    price: "420"
}, {
    image: vv,
    name: "Chicken Shawarma",
    price: "240"
}, {
    image: kE,
    name: "Loaded Fries",
    price: "680"
}, {
    image: NE,
    name: "Mexican Wrap",
    price: "550"
}, {
    image: yv,
    name: "Zinger Stacker",
    price: "750"
}, {
    image: PE,
    name: "Chicken Pieces",
    price: "260+"
}, {
    image: xv,
    name: "Hot & Spicy Pizza",
    price: "610+"
}, {
    image: bE,
    name: "Chicken Cheese Sticks",
    price: "740"
}, {
    image: CE,
    name: "Crispy Wings",
    price: "470-850"
}, {
    image: jE,
    name: "Nuggets",
    price: "370+"
}, {
    image: EE,
    name: "Chicken Fajita Pizza",
    price: "580+"
}]
  , TE = () => c.jsx("div", {
    className: "py-16 bg-gradient-to-b from-white to-gray-50",
    children: c.jsxs("div", {
        className: "container mx-auto px-4",
        children: [c.jsx("h2", {
            className: "section-title gradient-red bg-clip-text text-transparent",
            children: "FAN FAVORITES"
        }), c.jsx("div", {
            className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6",
            children: RE.map( (e, t) => c.jsx(Me, {
                name: e.name,
                price: e.price,
                image: e.image,
                type: "favorite"
            }, t))
        })]
    })
})
  , AE = [{
    title: "Rolls & Wraps",
    image: mv,
    description: "Crispy chicken wrapped in soft tortillas"
}, {
    title: "Pasta Perfection",
    image: hv,
    description: "Creamy and spicy pasta varieties"
}, {
    title: "Sandwiches",
    image: gv,
    description: "Loaded with layers of deliciousness"
}, {
    title: "Shawarma",
    image: vv,
    description: "Authentic Middle Eastern flavors"
}, {
    title: "Burgers",
    image: yv,
    description: "Stacked high with crispy patties"
}, {
    title: "Pizza Paradise",
    image: xv,
    description: "Hot, loaded, and stuffed varieties"
}]
  , LE = () => c.jsx("div", {
    className: "py-16 bg-white",
    children: c.jsxs("div", {
        className: "container mx-auto px-4",
        children: [c.jsx("h2", {
            className: "section-title",
            children: "EXPLORE OUR MENU"
        }), c.jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
            children: AE.map( (e, t) => c.jsxs("div", {
                className: "group relative overflow-hidden rounded-2xl shadow-card hover:shadow-xl transition-smooth cursor-pointer h-64",
                children: [c.jsxs("div", {
                    className: "absolute inset-0",
                    children: [c.jsx("img", {
                        src: e.image,
                        alt: e.title,
                        className: "w-full h-full object-cover group-hover:scale-110 transition-smooth"
                    }), c.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                    })]
                }), c.jsxs("div", {
                    className: "relative h-full flex flex-col justify-end p-6 text-white",
                    children: [c.jsx("h3", {
                        className: "font-bebas text-3xl tracking-wider mb-1",
                        children: e.title.toUpperCase()
                    }), c.jsx("p", {
                        className: "text-white/90 text-sm font-medium",
                        children: e.description
                    })]
                })]
            }, t))
        })]
    })
})
  , zE = "/assets/spin-roll-fixed-n5Be27qD.png"
  , OE = "/assets/full-creamy-roll-fixed-CzR701oz.png"
  , qf = "/assets/decent-special-paratha-roll-Dci8W_tg.jpg"
  , DE = "/assets/chicken-paratha-roll-lq5hgMjQ.jpg"
  , ME = "/assets/zinger-paratha-roll-YbVYoWtF.jpg"
  , _E = "/assets/malai-boti-paratha-roll-CVf1Te7T.jpg"
  , IE = "/assets/kebab-paratha-roll-Bbrrd4h6.jpg"
  , FE = () => {
    const e = [{
        name: "Spin Roll (4 Pcs)",
        price: "Rs. 580",
        image: zE
    }, {
        name: "Full Creamy Roll (4 Pcs)",
        price: "Rs. 580",
        image: OE
    }, {
        name: "Decent Special Roll (4 Pcs)",
        price: "Rs. 610",
        image: qf
    }, {
        name: "Chicken Paratha Roll",
        price: "Rs. 270",
        image: DE
    }, {
        name: "Zinger Paratha Roll",
        price: "Rs. 320",
        image: ME
    }, {
        name: "Malai Boti Paratha Roll",
        price: "Rs. 320",
        image: _E
    }, {
        name: "Decent Special Paratha Roll",
        price: "Rs. 340",
        image: qf
    }, {
        name: "Kabab Paratha Roll",
        price: "Rs. 300",
        image: IE
    }];
    return c.jsxs("section", {
        className: "container mx-auto px-4 py-12",
        children: [c.jsx("h2", {
            className: "text-4xl md:text-5xl font-black text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent",
            children: "SIGNATURE ROLLS"
        }), c.jsx("div", {
            className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6",
            children: e.map( (t, n) => c.jsx(Me, {
                name: t.name,
                price: t.price,
                image: t.image,
                type: "roll"
            }, n))
        })]
    })
}
  , $E = "/assets/crunchy-pasta-fixed-KGzingqX.jpg"
  , BE = "/assets/hot-spicy-pasta-fixed-DvPzW0zZ.jpg"
  , WE = "/assets/full-creamy-pasta-fixed-BLiB5EFU.jpg"
  , UE = "/assets/decent-special-pasta-fixed-CNx2MLa2.jpg"
  , VE = () => {
    const e = [{
        name: "Crunchy Pasta",
        price: "M: Rs. 450 / L: Rs. 680",
        image: $E
    }, {
        name: "Hot & Spicy Pasta",
        price: "M: Rs. 530 / L: Rs. 700",
        image: BE
    }, {
        name: "Full Creamy Pasta",
        price: "M: Rs. 530 / L: Rs. 720",
        image: WE
    }, {
        name: "Decent Special Pasta",
        price: "M: Rs. 530 / L: Rs. 900",
        image: UE
    }];
    return c.jsxs("section", {
        className: "container mx-auto px-4 py-12",
        children: [c.jsx("h2", {
            className: "text-4xl md:text-5xl font-black text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent",
            children: "PASTA"
        }), c.jsx("div", {
            className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6",
            children: e.map( (t, n) => c.jsx(Me, {
                name: t.name,
                price: t.price,
                image: t.image,
                type: "pasta"
            }, n))
        })]
    })
}
  , HE = "/assets/malai-boti-pizza-new-Dq0jabo9.jpg"
  , KE = "/assets/behari-kabab-pizza-new-DXUhRrq-.jpg"
  , QE = "/assets/decent-zinger-pizza-new-CPqJq_1Z.jpg"
  , GE = "/assets/square-pizza-new-CXOsDtvA.jpg"
  , YE = "/assets/click-on-pizza-new-CIxYfbqF.jpg"
  , XE = "/assets/hot-spicy-pizza-new-CGceaunT.jpg"
  , qE = "/assets/bone-fire-pizza-new-TSCiosmQ.jpg"
  , ZE = "/assets/decent-special-pizza-new-BQmWp6yP.jpg"
  , JE = "/assets/chicken-tikka-pizza-new-C94uEmXZ.jpg"
  , ek = "/assets/chicken-fajita-pizza-new-CECxliIu.jpg"
  , tk = "/assets/chicken-supreme-pizza-new-8_ym4HYA.jpg"
  , nk = "/assets/vegetable-lover-pizza-new-DOl3xfAa.jpg"
  , rk = "/assets/chicken-stuffer-pizza-new-ChQggjAh.jpg"
  , ok = "/assets/cheese-stuffer-pizza-new-DmS6rWfF.jpg"
  , ik = "/assets/chicken-cheese-stuffer-pizza-new-i8HoaGR5.jpg"
  , sk = "/assets/kabab-stuffer-pizza-new-D1MpTEf8.jpg"
  , ak = "/assets/malai-boti-kabab-stuffer-pizza-new-Du11ECLE.jpg"
  , lk = "/assets/chicken-cheese-sticks-new-CYk8XpiJ.jpg"
  , ck = () => {
    const e = [{
        name: "Malai Boti",
        price: "M 1420 / L 1730 / XL 2600",
        image: HE
    }, {
        name: "Behari Kabab",
        price: "M 1420 / L 1730 / XL 2600",
        image: KE
    }, {
        name: "Decent Zinger",
        price: "M 1420 / L 1730 / XL 2600",
        image: QE
    }, {
        name: "Square Pizza",
        price: "XL 2300 / XXL 3700",
        image: GE
    }]
      , t = [{
        name: "Click On Pizza",
        price: "M 1260 / L 1580 / XL 2600",
        image: YE
    }, {
        name: "Hot & Spicy Pizza",
        price: "S 610 / M 1260 / L 1580 / XL 2600",
        image: XE
    }, {
        name: "Bone Fire",
        price: "M 1260 / L 1580 / XL 2600",
        image: qE
    }, {
        name: "Decent Special",
        price: "M 1260 / L 1580 / XL 2600",
        image: ZE
    }]
      , n = [{
        name: "Chicken Tikka",
        price: "S 580 / M 1260 / L 1580 / XL 2600",
        image: JE
    }, {
        name: "Chicken Fajita",
        price: "S 580 / M 1260 / L 1580 / XL 2600",
        image: ek
    }, {
        name: "Chicken Supreme",
        price: "S 580 / M 1260 / L 1580 / XL 2600",
        image: tk
    }, {
        name: "Vegetable Lover",
        price: "S 580 / M 1260 / L 1580 / XL 2600",
        image: nk
    }]
      , r = [{
        name: "Chicken Stuffer",
        price: "M 1530 / L 1830 / XL 3600",
        image: rk
    }, {
        name: "Cheese Stuffer",
        price: "M 1530 / L 1940 / XL 3600",
        image: ok
    }, {
        name: "Chicken Cheese Stuffer",
        price: "M 1530 / L 1940 / XL 3600",
        image: ik
    }, {
        name: "Kabab Stuffer",
        price: "M 1630 / L 2000 / XL 3600",
        image: sk
    }, {
        name: "Malai Boti Kabab Stuffer",
        price: "M 1630 / L 2000 / XL 3600",
        image: ak
    }];
    return c.jsxs("section", {
        className: "container mx-auto px-4 py-12",
        children: [c.jsx("h2", {
            className: "section-title gradient-red bg-clip-text text-transparent",
            children: "PIZZA"
        }), c.jsxs("div", {
            className: "mb-12",
            children: [c.jsx("h3", {
                className: "font-bebas text-3xl tracking-wider text-primary mb-6",
                children: "DECENT NEW PIZZA ARRIVAL"
            }), c.jsx("div", {
                className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6",
                children: e.map( (o, i) => c.jsx(Me, {
                    name: o.name,
                    price: o.price,
                    image: o.image,
                    type: "pizza"
                }, i))
            })]
        }), c.jsxs("div", {
            className: "mb-12",
            children: [c.jsx("h3", {
                className: "font-bebas text-3xl tracking-wider text-secondary mb-6",
                children: "SPECIAL PIZZA"
            }), c.jsx("div", {
                className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6",
                children: t.map( (o, i) => c.jsx(Me, {
                    name: o.name,
                    price: o.price,
                    image: o.image,
                    type: "pizza"
                }, i))
            })]
        }), c.jsxs("div", {
            className: "mb-12",
            children: [c.jsx("h3", {
                className: "font-bebas text-3xl tracking-wider text-foreground mb-6",
                children: "REGULAR PIZZA"
            }), c.jsx("div", {
                className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6",
                children: n.map( (o, i) => c.jsx(Me, {
                    name: o.name,
                    price: o.price,
                    image: o.image,
                    type: "pizza"
                }, i))
            })]
        }), c.jsxs("div", {
            className: "mb-12",
            children: [c.jsx("h3", {
                className: "font-bebas text-3xl tracking-wider text-primary mb-6",
                children: "STUFFER PIZZA"
            }), c.jsx("div", {
                className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6",
                children: r.map( (o, i) => c.jsx(Me, {
                    name: o.name,
                    price: o.price,
                    image: o.image,
                    type: "pizza"
                }, i))
            })]
        }), c.jsxs("div", {
            className: "mb-12",
            children: [c.jsx("h3", {
                className: "font-bebas text-3xl tracking-wider text-secondary mb-6",
                children: "DECENT SPECIAL STICKS"
            }), c.jsx("div", {
                className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6",
                children: c.jsx(Me, {
                    name: "Chicken Cheese Sticks (4 Pcs)",
                    price: "740",
                    image: lk,
                    type: "pizza"
                })
            })]
        })]
    })
}
  , uk = "/assets/chicken-shawarma-CKu3JDmD.jpg"
  , dk = "/assets/zinger-shawarma-fixed-CiSGWnjK.jpg"
  , fk = "/assets/malai-boti-shawarma-DT_HTvC_.jpg"
  , pk = "/assets/hot-spicy-shawarma-BNjeV1bB.jpg"
  , mk = "/assets/kabab-shawarma-BPsAZEA_.jpg"
  , hk = () => {
    const e = [{
        name: "Chicken Shawarma",
        price: "Rs. 240",
        image: uk
    }, {
        name: "Zinger Shawarma",
        price: "Rs. 320",
        image: dk
    }, {
        name: "Malai Boti Shawarma",
        price: "Rs. 280",
        image: fk
    }, {
        name: "Hot & Spicy Shawarma",
        price: "Rs. 280",
        image: pk
    }, {
        name: "Kabab Shawarma",
        price: "Rs. 280",
        image: mk
    }];
    return c.jsxs("section", {
        className: "container mx-auto px-4 py-12",
        children: [c.jsx("h2", {
            className: "text-4xl md:text-5xl font-black text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent",
            children: "SHAWARMA"
        }), c.jsx("div", {
            className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6",
            children: e.map( (t, n) => c.jsx(Me, {
                name: t.name,
                price: t.price,
                image: t.image,
                type: "shawarma"
            }, n))
        })]
    })
}
  , gk = "/assets/crunchy-wrap-jvEd5mPW.jpg"
  , vk = "/assets/arabic-wrap-pBvXvjU9.jpg"
  , yk = "/assets/shawarma-wrap-BkXASOCx.jpg"
  , xk = "/assets/decent-special-wrap-BVL1EJJ7.jpg"
  , wk = "/assets/mexican-wrap-Dis4LjNx.jpg"
  , Sk = () => {
    const e = [{
        name: "Crunchy Wrap",
        price: "Rs. 500",
        image: gk
    }, {
        name: "Arabic Wrap",
        price: "Rs. 550",
        image: vk
    }, {
        name: "Shawarma Wrap",
        price: "Rs. 550",
        image: yk
    }, {
        name: "Decent Special Wrap",
        price: "Rs. 550",
        image: xk
    }, {
        name: "Mexican Wrap",
        price: "Rs. 550",
        image: wk
    }];
    return c.jsxs("section", {
        className: "container mx-auto px-4 py-12",
        children: [c.jsx("h2", {
            className: "text-4xl md:text-5xl font-black text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent",
            children: "WRAPS"
        }), c.jsx("div", {
            className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6",
            children: e.map( (t, n) => c.jsx(Me, {
                name: t.name,
                price: t.price,
                image: t.image,
                type: "wrap"
            }, n))
        })]
    })
}
  , bk = "/assets/chicken-sandwich-yrSUsXAu.jpg"
  , Ck = "/assets/club-sandwich-BzeLqpKb.jpg"
  , Ek = "/assets/full-creamy-sandwich-DJdcPLFW.jpg"
  , kk = "/assets/decent-special-sandwich-fixed-CgnaZI76.jpg"
  , Nk = () => {
    const e = [{
        name: "Chicken Sandwich",
        price: "Rs. 370",
        image: bk
    }, {
        name: "Club Sandwich",
        price: "Rs. 420",
        image: Ck
    }, {
        name: "Full Creamy Sandwich",
        price: "Rs. 420",
        image: Ek
    }, {
        name: "Decent Special Sandwich",
        price: "Rs. 470",
        image: kk
    }];
    return c.jsxs("section", {
        className: "container mx-auto px-4 py-12",
        children: [c.jsx("h2", {
            className: "text-4xl md:text-5xl font-black text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent",
            children: "SANDWICHES"
        }), c.jsx("div", {
            className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6",
            children: e.map( (t, n) => c.jsx(Me, {
                name: t.name,
                price: t.price,
                image: t.image,
                type: "sandwich"
            }, n))
        })]
    })
}
  , Pk = "/assets/fried-fish-6mjs936E.jpg"
  , jk = "/assets/loaded-fries-g_KbLR6v.jpg"
  , Rk = "/assets/fries-zlei9Zg4.jpg"
  , Zf = "/assets/nuggets-D9DPqVAD.jpg"
  , Tk = "/assets/crispy-wings-QnPTiznA.jpg"
  , Ak = "/assets/grilled-wings-g2g3bsn9.jpg"
  , Lk = () => {
    const e = [{
        name: "Fried Fish",
        price: "250g: Rs. 500 / 500g: Rs. 900",
        image: Pk
    }, {
        name: "Loaded Fries",
        price: "Rs. 680",
        image: jk
    }, {
        name: "Fries",
        price: "Regular: Rs. 260 / Family: Rs. 470",
        image: Rk
    }, {
        name: "Nuggets",
        price: "6pc: Rs. 370 / 12pc: Rs. 650",
        image: Zf
    }, {
        name: "Crispy Wings",
        price: "6pc: Rs. 470 / 12pc: Rs. 850",
        image: Tk
    }, {
        name: "Grilled Wings",
        price: "6pc: Rs. 470 / 12pc: Rs. 850",
        image: Ak
    }, {
        name: "Little Cut",
        price: "6pc: Rs. 320 / 12pc: Rs. 600",
        image: Zf
    }];
    return c.jsxs("section", {
        className: "container mx-auto px-4 py-12",
        children: [c.jsx("h2", {
            className: "text-4xl md:text-5xl font-black text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent",
            children: "SNACKS"
        }), c.jsx("div", {
            className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6",
            children: e.map( (t, n) => c.jsx(Me, {
                name: t.name,
                price: t.price,
                image: t.image,
                type: "snack"
            }, n))
        })]
    })
}
  , zk = "/assets/molten-lava-C53pKZbB.jpg"
  , Ok = "/assets/thunder-burger-BarJ0Ukp.jpg"
  , Dk = "/assets/zinger-stacker-BOEE_L6N.jpg"
  , Mk = "/assets/decent-special-beef-ZwrJqSGW.jpg"
  , _k = () => {
    const e = [{
        name: "Molten Lava",
        price: "750",
        image: zk
    }, {
        name: "Thunder Burger",
        price: "750",
        image: Ok
    }, {
        name: "Zinger Stacker",
        price: "750",
        image: Dk
    }, {
        name: "Decent Special Beef Burger",
        price: "750",
        image: Mk
    }];
    return c.jsxs("section", {
        className: "container mx-auto px-4 py-12",
        children: [c.jsx("h2", {
            className: "section-title gradient-red bg-clip-text text-transparent",
            children: "SPECIAL BURGERS"
        }), c.jsx("div", {
            className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6",
            children: e.map( (t, n) => c.jsx(Me, {
                name: t.name,
                price: t.price,
                image: t.image,
                type: "special-burger"
            }, n))
        })]
    })
}
  , Ik = "/assets/patty-burger-Bw1qFDaO.jpg"
  , Fk = "/assets/tikka-burger-DH64tnHi.jpg"
  , $k = "/assets/crisper-burger-BrZERGau.jpg"
  , Bk = "/assets/jalapeno-burger-xTcY9WSY.jpg"
  , Wk = "/assets/zinger-burger-0l4MsP3X.jpg"
  , Uk = "/assets/fish-burger-CmuStzxK.jpg"
  , Vk = "/assets/decent-tower-C-uXgYId.jpg"
  , Hk = () => {
    const e = [{
        name: "Patty Burger",
        price: "Rs. 300",
        image: Ik
    }, {
        name: "Tikka Burger",
        price: "Rs. 350",
        image: Fk
    }, {
        name: "Crisper Burger",
        price: "Rs. 370",
        image: $k
    }, {
        name: "Jalapeno Burger",
        price: "Rs. 370",
        image: Bk
    }, {
        name: "Zinger Burger",
        price: "Rs. 470",
        image: Wk
    }, {
        name: "Fish Burger",
        price: "Rs. 550",
        image: Uk
    }, {
        name: "Decent Tower",
        price: "Rs. 680",
        image: Vk
    }];
    return c.jsxs("section", {
        className: "container mx-auto px-4 py-12",
        children: [c.jsx("h2", {
            className: "section-title gradient-red bg-clip-text text-transparent",
            children: "BURGERS"
        }), c.jsx("div", {
            className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6",
            children: e.map( (t, n) => c.jsx(Me, {
                name: t.name,
                price: t.price,
                image: t.image,
                type: "burger"
            }, n))
        })]
    })
}
  , Kk = "/assets/1-piece-Bvep3nSj.jpg"
  , Qk = "/assets/3-pieces-CWuy-eDi.jpg"
  , Gk = "/assets/9-pieces-ZIB66Rwi.jpg"
  , Yk = () => {
    const e = [{
        name: "1 Piece",
        price: "260",
        image: Kk
    }, {
        name: "3 Pieces",
        price: "650",
        image: Qk
    }, {
        name: "9 Pieces",
        price: "1900",
        image: Gk
    }];
    return c.jsxs("section", {
        className: "container mx-auto px-4 py-12",
        children: [c.jsx("h2", {
            className: "section-title gradient-red bg-clip-text text-transparent",
            children: "CHICKEN PIECES"
        }), c.jsx("div", {
            className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6",
            children: e.map( (t, n) => c.jsx(Me, {
                name: t.name,
                price: t.price,
                image: t.image,
                type: "chicken-pieces"
            }, n))
        })]
    })
}
  , Xk = "/assets/vanilla-icecream-BxW3XDef.jpg"
  , qk = "/assets/chocolate-icecream-CLd5Mz01.jpg"
  , Zk = "/assets/strawberry-icecream-CGz2fxmJ.jpg"
  , Jk = "/assets/mango-icecream-DQahnl__.jpg"
  , e2 = "/assets/pistachio-icecream-xQU0xWYO.jpg"
  , t2 = "/assets/coffee-CKsgAq7f.jpg"
  , n2 = "/assets/tea-Ta-g_hQj.jpg";
var hl = "focusScope.autoFocusOnMount"
  , gl = "focusScope.autoFocusOnUnmount"
  , Jf = {
    bubbles: !1,
    cancelable: !0
}
  , r2 = "FocusScope"
  , wv = y.forwardRef( (e, t) => {
    const {loop: n=!1, trapped: r=!1, onMountAutoFocus: o, onUnmountAutoFocus: i, ...s} = e
      , [a,l] = y.useState(null)
      , u = Ft(o)
      , d = Ft(i)
      , f = y.useRef(null)
      , g = Ie(t, m => l(m))
      , p = y.useRef({
        paused: !1,
        pause() {
            this.paused = !0
        },
        resume() {
            this.paused = !1
        }
    }).current;
    y.useEffect( () => {
        if (r) {
            let m = function(x) {
                if (p.paused || !a)
                    return;
                const b = x.target;
                a.contains(b) ? f.current = b : vn(f.current, {
                    select: !0
                })
            }
              , w = function(x) {
                if (p.paused || !a)
                    return;
                const b = x.relatedTarget;
                b !== null && (a.contains(b) || vn(f.current, {
                    select: !0
                }))
            }
              , v = function(x) {
                if (document.activeElement === document.body)
                    for (const C of x)
                        C.removedNodes.length > 0 && vn(a)
            };
            document.addEventListener("focusin", m),
            document.addEventListener("focusout", w);
            const h = new MutationObserver(v);
            return a && h.observe(a, {
                childList: !0,
                subtree: !0
            }),
            () => {
                document.removeEventListener("focusin", m),
                document.removeEventListener("focusout", w),
                h.disconnect()
            }
        }
    }
    , [r, a, p.paused]),
    y.useEffect( () => {
        if (a) {
            tp.add(p);
            const m = document.activeElement;
            if (!a.contains(m)) {
                const v = new CustomEvent(hl,Jf);
                a.addEventListener(hl, u),
                a.dispatchEvent(v),
                v.defaultPrevented || (o2(c2(Sv(a)), {
                    select: !0
                }),
                document.activeElement === m && vn(a))
            }
            return () => {
                a.removeEventListener(hl, u),
                setTimeout( () => {
                    const v = new CustomEvent(gl,Jf);
                    a.addEventListener(gl, d),
                    a.dispatchEvent(v),
                    v.defaultPrevented || vn(m ?? document.body, {
                        select: !0
                    }),
                    a.removeEventListener(gl, d),
                    tp.remove(p)
                }
                , 0)
            }
        }
    }
    , [a, u, d, p]);
    const S = y.useCallback(m => {
        if (!n && !r || p.paused)
            return;
        const w = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey
          , v = document.activeElement;
        if (w && v) {
            const h = m.currentTarget
              , [x,b] = i2(h);
            x && b ? !m.shiftKey && v === b ? (m.preventDefault(),
            n && vn(x, {
                select: !0
            })) : m.shiftKey && v === x && (m.preventDefault(),
            n && vn(b, {
                select: !0
            })) : v === h && m.preventDefault()
        }
    }
    , [n, r, p.paused]);
    return c.jsx(ve.div, {
        tabIndex: -1,
        ...s,
        ref: g,
        onKeyDown: S
    })
}
);
wv.displayName = r2;
function o2(e, {select: t=!1}={}) {
    const n = document.activeElement;
    for (const r of e)
        if (vn(r, {
            select: t
        }),
        document.activeElement !== n)
            return
}
function i2(e) {
    const t = Sv(e)
      , n = ep(t, e)
      , r = ep(t.reverse(), e);
    return [n, r]
}
function Sv(e) {
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: r => {
            const o = r.tagName === "INPUT" && r.type === "hidden";
            return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
function ep(e, t) {
    for (const n of e)
        if (!s2(n, {
            upTo: t
        }))
            return n
}
function s2(e, {upTo: t}) {
    if (getComputedStyle(e).visibility === "hidden")
        return !0;
    for (; e; ) {
        if (t !== void 0 && e === t)
            return !1;
        if (getComputedStyle(e).display === "none")
            return !0;
        e = e.parentElement
    }
    return !1
}
function a2(e) {
    return e instanceof HTMLInputElement && "select"in e
}
function vn(e, {select: t=!1}={}) {
    if (e && e.focus) {
        const n = document.activeElement;
        e.focus({
            preventScroll: !0
        }),
        e !== n && a2(e) && t && e.select()
    }
}
var tp = l2();
function l2() {
    let e = [];
    return {
        add(t) {
            const n = e[0];
            t !== n && (n == null || n.pause()),
            e = np(e, t),
            e.unshift(t)
        },
        remove(t) {
            var n;
            e = np(e, t),
            (n = e[0]) == null || n.resume()
        }
    }
}
function np(e, t) {
    const n = [...e]
      , r = n.indexOf(t);
    return r !== -1 && n.splice(r, 1),
    n
}
function c2(e) {
    return e.filter(t => t.tagName !== "A")
}
var vl = 0;
function u2() {
    y.useEffect( () => {
        const e = document.querySelectorAll("[data-radix-focus-guard]");
        return document.body.insertAdjacentElement("afterbegin", e[0] ?? rp()),
        document.body.insertAdjacentElement("beforeend", e[1] ?? rp()),
        vl++,
        () => {
            vl === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(t => t.remove()),
            vl--
        }
    }
    , [])
}
function rp() {
    const e = document.createElement("span");
    return e.setAttribute("data-radix-focus-guard", ""),
    e.tabIndex = 0,
    e.style.outline = "none",
    e.style.opacity = "0",
    e.style.position = "fixed",
    e.style.pointerEvents = "none",
    e
}
var Ot = function() {
    return Ot = Object.assign || function(t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
        }
        return t
    }
    ,
    Ot.apply(this, arguments)
};
function bv(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
    return n
}
function d2(e, t, n) {
    if (n || arguments.length === 2)
        for (var r = 0, o = t.length, i; r < o; r++)
            (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)),
            i[r] = t[r]);
    return e.concat(i || Array.prototype.slice.call(t))
}
var ys = "right-scroll-bar-position"
  , xs = "width-before-scroll-bar"
  , f2 = "with-scroll-bars-hidden"
  , p2 = "--removed-body-scroll-bar-size";
function yl(e, t) {
    return typeof e == "function" ? e(t) : e && (e.current = t),
    e
}
function m2(e, t) {
    var n = y.useState(function() {
        return {
            value: e,
            callback: t,
            facade: {
                get current() {
                    return n.value
                },
                set current(r) {
                    var o = n.value;
                    o !== r && (n.value = r,
                    n.callback(r, o))
                }
            }
        }
    })[0];
    return n.callback = t,
    n.facade
}
var h2 = typeof window < "u" ? y.useLayoutEffect : y.useEffect
  , op = new WeakMap;
function g2(e, t) {
    var n = m2(null, function(r) {
        return e.forEach(function(o) {
            return yl(o, r)
        })
    });
    return h2(function() {
        var r = op.get(n);
        if (r) {
            var o = new Set(r)
              , i = new Set(e)
              , s = n.current;
            o.forEach(function(a) {
                i.has(a) || yl(a, null)
            }),
            i.forEach(function(a) {
                o.has(a) || yl(a, s)
            })
        }
        op.set(n, e)
    }, [e]),
    n
}
function v2(e) {
    return e
}
function y2(e, t) {
    t === void 0 && (t = v2);
    var n = []
      , r = !1
      , o = {
        read: function() {
            if (r)
                throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
            return n.length ? n[n.length - 1] : e
        },
        useMedium: function(i) {
            var s = t(i, r);
            return n.push(s),
            function() {
                n = n.filter(function(a) {
                    return a !== s
                })
            }
        },
        assignSyncMedium: function(i) {
            for (r = !0; n.length; ) {
                var s = n;
                n = [],
                s.forEach(i)
            }
            n = {
                push: function(a) {
                    return i(a)
                },
                filter: function() {
                    return n
                }
            }
        },
        assignMedium: function(i) {
            r = !0;
            var s = [];
            if (n.length) {
                var a = n;
                n = [],
                a.forEach(i),
                s = n
            }
            var l = function() {
                var d = s;
                s = [],
                d.forEach(i)
            }
              , u = function() {
                return Promise.resolve().then(l)
            };
            u(),
            n = {
                push: function(d) {
                    s.push(d),
                    u()
                },
                filter: function(d) {
                    return s = s.filter(d),
                    n
                }
            }
        }
    };
    return o
}
function x2(e) {
    e === void 0 && (e = {});
    var t = y2(null);
    return t.options = Ot({
        async: !0,
        ssr: !1
    }, e),
    t
}
var Cv = function(e) {
    var t = e.sideCar
      , n = bv(e, ["sideCar"]);
    if (!t)
        throw new Error("Sidecar: please provide `sideCar` property to import the right car");
    var r = t.read();
    if (!r)
        throw new Error("Sidecar medium not found");
    return y.createElement(r, Ot({}, n))
};
Cv.isSideCarExport = !0;
function w2(e, t) {
    return e.useMedium(t),
    Cv
}
var Ev = x2()
  , xl = function() {}
  , Pa = y.forwardRef(function(e, t) {
    var n = y.useRef(null)
      , r = y.useState({
        onScrollCapture: xl,
        onWheelCapture: xl,
        onTouchMoveCapture: xl
    })
      , o = r[0]
      , i = r[1]
      , s = e.forwardProps
      , a = e.children
      , l = e.className
      , u = e.removeScrollBar
      , d = e.enabled
      , f = e.shards
      , g = e.sideCar
      , p = e.noRelative
      , S = e.noIsolation
      , m = e.inert
      , w = e.allowPinchZoom
      , v = e.as
      , h = v === void 0 ? "div" : v
      , x = e.gapMode
      , b = bv(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"])
      , C = g
      , E = g2([n, t])
      , k = Ot(Ot({}, b), o);
    return y.createElement(y.Fragment, null, d && y.createElement(C, {
        sideCar: Ev,
        removeScrollBar: u,
        shards: f,
        noRelative: p,
        noIsolation: S,
        inert: m,
        setCallbacks: i,
        allowPinchZoom: !!w,
        lockRef: n,
        gapMode: x
    }), s ? y.cloneElement(y.Children.only(a), Ot(Ot({}, k), {
        ref: E
    })) : y.createElement(h, Ot({}, k, {
        className: l,
        ref: E
    }), a))
});
Pa.defaultProps = {
    enabled: !0,
    removeScrollBar: !0,
    inert: !1
};
Pa.classNames = {
    fullWidth: xs,
    zeroRight: ys
};
var S2 = function() {
    if (typeof __webpack_nonce__ < "u")
        return __webpack_nonce__
};
function b2() {
    if (!document)
        return null;
    var e = document.createElement("style");
    e.type = "text/css";
    var t = S2();
    return t && e.setAttribute("nonce", t),
    e
}
function C2(e, t) {
    e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t))
}
function E2(e) {
    var t = document.head || document.getElementsByTagName("head")[0];
    t.appendChild(e)
}
var k2 = function() {
    var e = 0
      , t = null;
    return {
        add: function(n) {
            e == 0 && (t = b2()) && (C2(t, n),
            E2(t)),
            e++
        },
        remove: function() {
            e--,
            !e && t && (t.parentNode && t.parentNode.removeChild(t),
            t = null)
        }
    }
}
  , N2 = function() {
    var e = k2();
    return function(t, n) {
        y.useEffect(function() {
            return e.add(t),
            function() {
                e.remove()
            }
        }, [t && n])
    }
}
  , kv = function() {
    var e = N2()
      , t = function(n) {
        var r = n.styles
          , o = n.dynamic;
        return e(r, o),
        null
    };
    return t
}
  , P2 = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0
}
  , wl = function(e) {
    return parseInt(e || "", 10) || 0
}
  , j2 = function(e) {
    var t = window.getComputedStyle(document.body)
      , n = t[e === "padding" ? "paddingLeft" : "marginLeft"]
      , r = t[e === "padding" ? "paddingTop" : "marginTop"]
      , o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [wl(n), wl(r), wl(o)]
}
  , R2 = function(e) {
    if (e === void 0 && (e = "margin"),
    typeof window > "u")
        return P2;
    var t = j2(e)
      , n = document.documentElement.clientWidth
      , r = window.innerWidth;
    return {
        left: t[0],
        top: t[1],
        right: t[2],
        gap: Math.max(0, r - n + t[2] - t[0])
    }
}
  , T2 = kv()
  , Gr = "data-scroll-locked"
  , A2 = function(e, t, n, r) {
    var o = e.left
      , i = e.top
      , s = e.right
      , a = e.gap;
    return n === void 0 && (n = "margin"),
    `
  .`.concat(f2, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(Gr, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([t && "position: relative ".concat(r, ";"), n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(s, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(r, `;
    `), n === "padding" && "padding-right: ".concat(a, "px ").concat(r, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(ys, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(xs, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(ys, " .").concat(ys, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(xs, " .").concat(xs, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Gr, `] {
    `).concat(p2, ": ").concat(a, `px;
  }
`)
}
  , ip = function() {
    var e = parseInt(document.body.getAttribute(Gr) || "0", 10);
    return isFinite(e) ? e : 0
}
  , L2 = function() {
    y.useEffect(function() {
        return document.body.setAttribute(Gr, (ip() + 1).toString()),
        function() {
            var e = ip() - 1;
            e <= 0 ? document.body.removeAttribute(Gr) : document.body.setAttribute(Gr, e.toString())
        }
    }, [])
}
  , z2 = function(e) {
    var t = e.noRelative
      , n = e.noImportant
      , r = e.gapMode
      , o = r === void 0 ? "margin" : r;
    L2();
    var i = y.useMemo(function() {
        return R2(o)
    }, [o]);
    return y.createElement(T2, {
        styles: A2(i, !t, o, n ? "" : "!important")
    })
}
  , Tc = !1;
if (typeof window < "u")
    try {
        var Zi = Object.defineProperty({}, "passive", {
            get: function() {
                return Tc = !0,
                !0
            }
        });
        window.addEventListener("test", Zi, Zi),
        window.removeEventListener("test", Zi, Zi)
    } catch {
        Tc = !1
    }
var Er = Tc ? {
    passive: !1
} : !1
  , O2 = function(e) {
    return e.tagName === "TEXTAREA"
}
  , Nv = function(e, t) {
    if (!(e instanceof Element))
        return !1;
    var n = window.getComputedStyle(e);
    return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !O2(e) && n[t] === "visible")
}
  , D2 = function(e) {
    return Nv(e, "overflowY")
}
  , M2 = function(e) {
    return Nv(e, "overflowX")
}
  , sp = function(e, t) {
    var n = t.ownerDocument
      , r = t;
    do {
        typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
        var o = Pv(e, r);
        if (o) {
            var i = jv(e, r)
              , s = i[1]
              , a = i[2];
            if (s > a)
                return !0
        }
        r = r.parentNode
    } while (r && r !== n.body);
    return !1
}
  , _2 = function(e) {
    var t = e.scrollTop
      , n = e.scrollHeight
      , r = e.clientHeight;
    return [t, n, r]
}
  , I2 = function(e) {
    var t = e.scrollLeft
      , n = e.scrollWidth
      , r = e.clientWidth;
    return [t, n, r]
}
  , Pv = function(e, t) {
    return e === "v" ? D2(t) : M2(t)
}
  , jv = function(e, t) {
    return e === "v" ? _2(t) : I2(t)
}
  , F2 = function(e, t) {
    return e === "h" && t === "rtl" ? -1 : 1
}
  , $2 = function(e, t, n, r, o) {
    var i = F2(e, window.getComputedStyle(t).direction)
      , s = i * r
      , a = n.target
      , l = t.contains(a)
      , u = !1
      , d = s > 0
      , f = 0
      , g = 0;
    do {
        if (!a)
            break;
        var p = jv(e, a)
          , S = p[0]
          , m = p[1]
          , w = p[2]
          , v = m - w - i * S;
        (S || v) && Pv(e, a) && (f += v,
        g += S);
        var h = a.parentNode;
        a = h && h.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? h.host : h
    } while (!l && a !== document.body || l && (t.contains(a) || t === a));
    return (d && (Math.abs(f) < 1 || !o) || !d && (Math.abs(g) < 1 || !o)) && (u = !0),
    u
}
  , Ji = function(e) {
    return "changedTouches"in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
}
  , ap = function(e) {
    return [e.deltaX, e.deltaY]
}
  , lp = function(e) {
    return e && "current"in e ? e.current : e
}
  , B2 = function(e, t) {
    return e[0] === t[0] && e[1] === t[1]
}
  , W2 = function(e) {
    return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`)
}
  , U2 = 0
  , kr = [];
function V2(e) {
    var t = y.useRef([])
      , n = y.useRef([0, 0])
      , r = y.useRef()
      , o = y.useState(U2++)[0]
      , i = y.useState(kv)[0]
      , s = y.useRef(e);
    y.useEffect(function() {
        s.current = e
    }, [e]),
    y.useEffect(function() {
        if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(o));
            var m = d2([e.lockRef.current], (e.shards || []).map(lp), !0).filter(Boolean);
            return m.forEach(function(w) {
                return w.classList.add("allow-interactivity-".concat(o))
            }),
            function() {
                document.body.classList.remove("block-interactivity-".concat(o)),
                m.forEach(function(w) {
                    return w.classList.remove("allow-interactivity-".concat(o))
                })
            }
        }
    }, [e.inert, e.lockRef.current, e.shards]);
    var a = y.useCallback(function(m, w) {
        if ("touches"in m && m.touches.length === 2 || m.type === "wheel" && m.ctrlKey)
            return !s.current.allowPinchZoom;
        var v = Ji(m), h = n.current, x = "deltaX"in m ? m.deltaX : h[0] - v[0], b = "deltaY"in m ? m.deltaY : h[1] - v[1], C, E = m.target, k = Math.abs(x) > Math.abs(b) ? "h" : "v";
        if ("touches"in m && k === "h" && E.type === "range")
            return !1;
        var R = sp(k, E);
        if (!R)
            return !0;
        if (R ? C = k : (C = k === "v" ? "h" : "v",
        R = sp(k, E)),
        !R)
            return !1;
        if (!r.current && "changedTouches"in m && (x || b) && (r.current = C),
        !C)
            return !0;
        var z = r.current || C;
        return $2(z, w, m, z === "h" ? x : b, !0)
    }, [])
      , l = y.useCallback(function(m) {
        var w = m;
        if (!(!kr.length || kr[kr.length - 1] !== i)) {
            var v = "deltaY"in w ? ap(w) : Ji(w)
              , h = t.current.filter(function(C) {
                return C.name === w.type && (C.target === w.target || w.target === C.shadowParent) && B2(C.delta, v)
            })[0];
            if (h && h.should) {
                w.cancelable && w.preventDefault();
                return
            }
            if (!h) {
                var x = (s.current.shards || []).map(lp).filter(Boolean).filter(function(C) {
                    return C.contains(w.target)
                })
                  , b = x.length > 0 ? a(w, x[0]) : !s.current.noIsolation;
                b && w.cancelable && w.preventDefault()
            }
        }
    }, [])
      , u = y.useCallback(function(m, w, v, h) {
        var x = {
            name: m,
            delta: w,
            target: v,
            should: h,
            shadowParent: H2(v)
        };
        t.current.push(x),
        setTimeout(function() {
            t.current = t.current.filter(function(b) {
                return b !== x
            })
        }, 1)
    }, [])
      , d = y.useCallback(function(m) {
        n.current = Ji(m),
        r.current = void 0
    }, [])
      , f = y.useCallback(function(m) {
        u(m.type, ap(m), m.target, a(m, e.lockRef.current))
    }, [])
      , g = y.useCallback(function(m) {
        u(m.type, Ji(m), m.target, a(m, e.lockRef.current))
    }, []);
    y.useEffect(function() {
        return kr.push(i),
        e.setCallbacks({
            onScrollCapture: f,
            onWheelCapture: f,
            onTouchMoveCapture: g
        }),
        document.addEventListener("wheel", l, Er),
        document.addEventListener("touchmove", l, Er),
        document.addEventListener("touchstart", d, Er),
        function() {
            kr = kr.filter(function(m) {
                return m !== i
            }),
            document.removeEventListener("wheel", l, Er),
            document.removeEventListener("touchmove", l, Er),
            document.removeEventListener("touchstart", d, Er)
        }
    }, []);
    var p = e.removeScrollBar
      , S = e.inert;
    return y.createElement(y.Fragment, null, S ? y.createElement(i, {
        styles: W2(o)
    }) : null, p ? y.createElement(z2, {
        noRelative: e.noRelative,
        gapMode: e.gapMode
    }) : null)
}
function H2(e) {
    for (var t = null; e !== null; )
        e instanceof ShadowRoot && (t = e.host,
        e = e.host),
        e = e.parentNode;
    return t
}
const K2 = w2(Ev, V2);
var Rv = y.forwardRef(function(e, t) {
    return y.createElement(Pa, Ot({}, e, {
        ref: t,
        sideCar: K2
    }))
});
Rv.classNames = Pa.classNames;
var Q2 = function(e) {
    if (typeof document > "u")
        return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body
}
  , Nr = new WeakMap
  , es = new WeakMap
  , ts = {}
  , Sl = 0
  , Tv = function(e) {
    return e && (e.host || Tv(e.parentNode))
}
  , G2 = function(e, t) {
    return t.map(function(n) {
        if (e.contains(n))
            return n;
        var r = Tv(n);
        return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"),
        null)
    }).filter(function(n) {
        return !!n
    })
}
  , Y2 = function(e, t, n, r) {
    var o = G2(t, Array.isArray(e) ? e : [e]);
    ts[n] || (ts[n] = new WeakMap);
    var i = ts[n]
      , s = []
      , a = new Set
      , l = new Set(o)
      , u = function(f) {
        !f || a.has(f) || (a.add(f),
        u(f.parentNode))
    };
    o.forEach(u);
    var d = function(f) {
        !f || l.has(f) || Array.prototype.forEach.call(f.children, function(g) {
            if (a.has(g))
                d(g);
            else
                try {
                    var p = g.getAttribute(r)
                      , S = p !== null && p !== "false"
                      , m = (Nr.get(g) || 0) + 1
                      , w = (i.get(g) || 0) + 1;
                    Nr.set(g, m),
                    i.set(g, w),
                    s.push(g),
                    m === 1 && S && es.set(g, !0),
                    w === 1 && g.setAttribute(n, "true"),
                    S || g.setAttribute(r, "true")
                } catch (v) {
                    console.error("aria-hidden: cannot operate on ", g, v)
                }
        })
    };
    return d(t),
    a.clear(),
    Sl++,
    function() {
        s.forEach(function(f) {
            var g = Nr.get(f) - 1
              , p = i.get(f) - 1;
            Nr.set(f, g),
            i.set(f, p),
            g || (es.has(f) || f.removeAttribute(r),
            es.delete(f)),
            p || f.removeAttribute(n)
        }),
        Sl--,
        Sl || (Nr = new WeakMap,
        Nr = new WeakMap,
        es = new WeakMap,
        ts = {})
    }
}
  , X2 = function(e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e])
      , o = Q2(e);
    return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
    Y2(r, o, n, "aria-hidden")) : function() {
        return null
    }
}
  , ja = "Dialog"
  , [Av,MN] = Ci(ja)
  , [q2,Pt] = Av(ja)
  , Lv = e => {
    const {__scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: i, modal: s=!0} = e
      , a = y.useRef(null)
      , l = y.useRef(null)
      , [u,d] = Ih({
        prop: r,
        defaultProp: o ?? !1,
        onChange: i,
        caller: ja
    });
    return c.jsx(q2, {
        scope: t,
        triggerRef: a,
        contentRef: l,
        contentId: ul(),
        titleId: ul(),
        descriptionId: ul(),
        open: u,
        onOpenChange: d,
        onOpenToggle: y.useCallback( () => d(f => !f), [d]),
        modal: s,
        children: n
    })
}
;
Lv.displayName = ja;
var zv = "DialogTrigger"
  , Z2 = y.forwardRef( (e, t) => {
    const {__scopeDialog: n, ...r} = e
      , o = Pt(zv, n)
      , i = Ie(t, o.triggerRef);
    return c.jsx(ve.button, {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Yu(o.open),
        ...r,
        ref: i,
        onClick: le(e.onClick, o.onOpenToggle)
    })
}
);
Z2.displayName = zv;
var Qu = "DialogPortal"
  , [J2,Ov] = Av(Qu, {
    forceMount: void 0
})
  , Dv = e => {
    const {__scopeDialog: t, forceMount: n, children: r, container: o} = e
      , i = Pt(Qu, t);
    return c.jsx(J2, {
        scope: t,
        forceMount: n,
        children: y.Children.map(r, s => c.jsx(go, {
            present: n || i.open,
            children: c.jsx(Nu, {
                asChild: !0,
                container: o,
                children: s
            })
        }))
    })
}
;
Dv.displayName = Qu;
var qs = "DialogOverlay"
  , Mv = y.forwardRef( (e, t) => {
    const n = Ov(qs, e.__scopeDialog)
      , {forceMount: r=n.forceMount, ...o} = e
      , i = Pt(qs, e.__scopeDialog);
    return i.modal ? c.jsx(go, {
        present: r || i.open,
        children: c.jsx(tN, {
            ...o,
            ref: t
        })
    }) : null
}
);
Mv.displayName = qs;
var eN = ui("DialogOverlay.RemoveScroll")
  , tN = y.forwardRef( (e, t) => {
    const {__scopeDialog: n, ...r} = e
      , o = Pt(qs, n);
    return c.jsx(Rv, {
        as: eN,
        allowPinchZoom: !0,
        shards: [o.contentRef],
        children: c.jsx(ve.div, {
            "data-state": Yu(o.open),
            ...r,
            ref: t,
            style: {
                pointerEvents: "auto",
                ...r.style
            }
        })
    })
}
)
  , mr = "DialogContent"
  , _v = y.forwardRef( (e, t) => {
    const n = Ov(mr, e.__scopeDialog)
      , {forceMount: r=n.forceMount, ...o} = e
      , i = Pt(mr, e.__scopeDialog);
    return c.jsx(go, {
        present: r || i.open,
        children: i.modal ? c.jsx(nN, {
            ...o,
            ref: t
        }) : c.jsx(rN, {
            ...o,
            ref: t
        })
    })
}
);
_v.displayName = mr;
var nN = y.forwardRef( (e, t) => {
    const n = Pt(mr, e.__scopeDialog)
      , r = y.useRef(null)
      , o = Ie(t, n.contentRef, r);
    return y.useEffect( () => {
        const i = r.current;
        if (i)
            return X2(i)
    }
    , []),
    c.jsx(Iv, {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: le(e.onCloseAutoFocus, i => {
            var s;
            i.preventDefault(),
            (s = n.triggerRef.current) == null || s.focus()
        }
        ),
        onPointerDownOutside: le(e.onPointerDownOutside, i => {
            const s = i.detail.originalEvent
              , a = s.button === 0 && s.ctrlKey === !0;
            (s.button === 2 || a) && i.preventDefault()
        }
        ),
        onFocusOutside: le(e.onFocusOutside, i => i.preventDefault())
    })
}
)
  , rN = y.forwardRef( (e, t) => {
    const n = Pt(mr, e.__scopeDialog)
      , r = y.useRef(!1)
      , o = y.useRef(!1);
    return c.jsx(Iv, {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: i => {
            var s, a;
            (s = e.onCloseAutoFocus) == null || s.call(e, i),
            i.defaultPrevented || (r.current || (a = n.triggerRef.current) == null || a.focus(),
            i.preventDefault()),
            r.current = !1,
            o.current = !1
        }
        ,
        onInteractOutside: i => {
            var l, u;
            (l = e.onInteractOutside) == null || l.call(e, i),
            i.defaultPrevented || (r.current = !0,
            i.detail.originalEvent.type === "pointerdown" && (o.current = !0));
            const s = i.target;
            ((u = n.triggerRef.current) == null ? void 0 : u.contains(s)) && i.preventDefault(),
            i.detail.originalEvent.type === "focusin" && o.current && i.preventDefault()
        }
    })
}
)
  , Iv = y.forwardRef( (e, t) => {
    const {__scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i, ...s} = e
      , a = Pt(mr, n)
      , l = y.useRef(null)
      , u = Ie(t, l);
    return u2(),
    c.jsxs(c.Fragment, {
        children: [c.jsx(wv, {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: o,
            onUnmountAutoFocus: i,
            children: c.jsx(ma, {
                role: "dialog",
                id: a.contentId,
                "aria-describedby": a.descriptionId,
                "aria-labelledby": a.titleId,
                "data-state": Yu(a.open),
                ...s,
                ref: u,
                onDismiss: () => a.onOpenChange(!1)
            })
        }), c.jsxs(c.Fragment, {
            children: [c.jsx(oN, {
                titleId: a.titleId
            }), c.jsx(sN, {
                contentRef: l,
                descriptionId: a.descriptionId
            })]
        })]
    })
}
)
  , Gu = "DialogTitle"
  , Fv = y.forwardRef( (e, t) => {
    const {__scopeDialog: n, ...r} = e
      , o = Pt(Gu, n);
    return c.jsx(ve.h2, {
        id: o.titleId,
        ...r,
        ref: t
    })
}
);
Fv.displayName = Gu;
var $v = "DialogDescription"
  , Bv = y.forwardRef( (e, t) => {
    const {__scopeDialog: n, ...r} = e
      , o = Pt($v, n);
    return c.jsx(ve.p, {
        id: o.descriptionId,
        ...r,
        ref: t
    })
}
);
Bv.displayName = $v;
var Wv = "DialogClose"
  , Uv = y.forwardRef( (e, t) => {
    const {__scopeDialog: n, ...r} = e
      , o = Pt(Wv, n);
    return c.jsx(ve.button, {
        type: "button",
        ...r,
        ref: t,
        onClick: le(e.onClick, () => o.onOpenChange(!1))
    })
}
);
Uv.displayName = Wv;
function Yu(e) {
    return e ? "open" : "closed"
}
var Vv = "DialogTitleWarning"
  , [_N,Hv] = $x(Vv, {
    contentName: mr,
    titleName: Gu,
    docsSlug: "dialog"
})
  , oN = ({titleId: e}) => {
    const t = Hv(Vv)
      , n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
    return y.useEffect( () => {
        e && (document.getElementById(e) || console.error(n))
    }
    , [n, e]),
    null
}
  , iN = "DialogDescriptionWarning"
  , sN = ({contentRef: e, descriptionId: t}) => {
    const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Hv(iN).contentName}}.`;
    return y.useEffect( () => {
        var i;
        const o = (i = e.current) == null ? void 0 : i.getAttribute("aria-describedby");
        t && o && (document.getElementById(t) || console.warn(r))
    }
    , [r, e, t]),
    null
}
  , aN = Lv
  , lN = Dv
  , Kv = Mv
  , Qv = _v
  , Gv = Fv
  , Yv = Bv
  , cN = Uv;
const uN = aN
  , dN = lN
  , Xv = y.forwardRef( ({className: e, ...t}, n) => c.jsx(Kv, {
    ref: n,
    className: ye("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e),
    ...t
}));
Xv.displayName = Kv.displayName;
const qv = y.forwardRef( ({className: e, children: t, ...n}, r) => c.jsxs(dN, {
    children: [c.jsx(Xv, {}), c.jsxs(Qv, {
        ref: r,
        className: ye("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", e),
        ...n,
        children: [t, c.jsxs(cN, {
            className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",
            children: [c.jsx(cg, {
                className: "h-4 w-4"
            }), c.jsx("span", {
                className: "sr-only",
                children: "Close"
            })]
        })]
    })]
}));
qv.displayName = Qv.displayName;
const Zv = ({className: e, ...t}) => c.jsx("div", {
    className: ye("flex flex-col space-y-1.5 text-center sm:text-left", e),
    ...t
});
Zv.displayName = "DialogHeader";
const Jv = y.forwardRef( ({className: e, ...t}, n) => c.jsx(Gv, {
    ref: n,
    className: ye("text-lg font-semibold leading-none tracking-tight", e),
    ...t
}));
Jv.displayName = Gv.displayName;
const fN = y.forwardRef( ({className: e, ...t}, n) => c.jsx(Yv, {
    ref: n,
    className: ye("text-sm text-muted-foreground", e),
    ...t
}));
fN.displayName = Yv.displayName;
const pN = () => {
    const [e,t] = y.useState(null)
      , [n,r] = y.useState("2")
      , [o,i] = y.useState([])
      , {addToCart: s} = wo()
      , a = [{
        name: "Vanilla Ice Cream",
        image: Xk,
        twoScoop: "150",
        threeScoop: "200"
    }, {
        name: "Chocolate Ice Cream",
        image: qk,
        twoScoop: "150",
        threeScoop: "200"
    }, {
        name: "Strawberry Ice Cream",
        image: Zk,
        twoScoop: "150",
        threeScoop: "200"
    }, {
        name: "Mango Ice Cream",
        image: Jk,
        twoScoop: "150",
        threeScoop: "200"
    }, {
        name: "Pistachio Ice Cream",
        image: e2,
        twoScoop: "150",
        threeScoop: "200"
    }]
      , l = [{
        name: "Chocolate Chips",
        price: 30
    }, {
        name: "Nuts",
        price: 40
    }, {
        name: "Caramel Sauce",
        price: 25
    }, {
        name: "Sprinkles",
        price: 20
    }, {
        name: "Whipped Cream",
        price: 30
    }]
      , u = [{
        name: "Coffee",
        price: "250",
        image: t2
    }, {
        name: "Tea",
        price: "200",
        image: n2
    }]
      , d = S => {
        t(S),
        r("2"),
        i([])
    }
      , f = S => {
        s({
            id: `beverage-${S.name.toLowerCase()}`,
            name: S.name,
            price: S.price,
            type: "beverage"
        }),
        lt({
            title: "Added to Cart!",
            description: `${S.name} - Rs. ${S.price}`
        })
    }
      , g = S => {
        i(m => m.includes(S) ? m.filter(w => w !== S) : [...m, S])
    }
      , p = () => {
        if (!e)
            return;
        const S = parseInt(n === "2" ? e.twoScoop : e.threeScoop)
          , m = o.reduce( (x, b) => {
            const C = l.find(E => E.name === b);
            return x + ((C == null ? void 0 : C.price) || 0)
        }
        , 0)
          , w = S + m
          , v = o.length > 0 ? ` with ${o.join(", ")}` : ""
          , h = `${e.name} (${n} Scoops)${v}`;
        s({
            id: `icecream-${e.name.toLowerCase()}-${Date.now()}`,
            name: h,
            price: w.toString(),
            type: "dessert"
        }),
        lt({
            title: "Added to Cart!",
            description: `${h} - Rs. ${w}`
        }),
        t(null)
    }
    ;
    return c.jsxs("section", {
        className: "container mx-auto px-4 py-12",
        children: [c.jsx("h2", {
            className: "section-title gradient-red bg-clip-text text-transparent",
            children: "DESSERTS & BEVERAGES"
        }), c.jsxs("div", {
            className: "mb-12",
            children: [c.jsx("h3", {
                className: "font-bebas text-3xl tracking-wider text-primary mb-6",
                children: "ICE CREAM"
            }), c.jsx("div", {
                className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6",
                children: a.map( (S, m) => c.jsxs(pr, {
                    onClick: () => d(S),
                    className: "overflow-hidden group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-0 flex flex-col cursor-pointer",
                    children: [c.jsx("div", {
                        className: "relative aspect-square overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200",
                        children: c.jsx("img", {
                            src: S.image,
                            alt: S.name,
                            className: "w-full h-full object-cover"
                        })
                    }), c.jsxs("div", {
                        className: "p-4 flex-1 flex flex-col",
                        children: [c.jsx("h3", {
                            className: "font-bebas text-lg tracking-wider text-foreground mb-2 text-center",
                            children: S.name
                        }), c.jsxs("div", {
                            className: "text-center mb-3 flex-1 flex flex-col items-center justify-center",
                            children: [c.jsxs("p", {
                                className: "text-muted-foreground font-medium text-xs",
                                children: ["2 Scoops: Rs. ", S.twoScoop]
                            }), c.jsxs("p", {
                                className: "text-muted-foreground font-medium text-xs",
                                children: ["3 Scoops: Rs. ", S.threeScoop]
                            })]
                        }), c.jsx("div", {
                            className: "w-full bg-primary hover:bg-primary/90 text-white font-bold py-2.5 px-4 rounded-full transition-colors uppercase tracking-wider text-sm text-center",
                            children: "CUSTOMIZE"
                        })]
                    })]
                }, m))
            })]
        }), c.jsxs("div", {
            children: [c.jsx("h3", {
                className: "font-bebas text-3xl tracking-wider text-secondary mb-6",
                children: "HOT BEVERAGES"
            }), c.jsx("div", {
                className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6",
                children: u.map( (S, m) => c.jsxs(pr, {
                    className: "overflow-hidden group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-0 flex flex-col",
                    children: [c.jsx("div", {
                        className: "relative aspect-square overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200",
                        children: c.jsx("img", {
                            src: S.image,
                            alt: S.name,
                            className: "w-full h-full object-cover"
                        })
                    }), c.jsxs("div", {
                        className: "p-4 flex-1 flex flex-col",
                        children: [c.jsx("h3", {
                            className: "font-bebas text-xl tracking-wider text-foreground mb-2 text-center",
                            children: S.name
                        }), c.jsx("div", {
                            className: "text-center mb-3 flex-1 flex items-center justify-center",
                            children: c.jsxs("p", {
                                className: "text-muted-foreground font-medium text-sm",
                                children: ["Rs. ", S.price]
                            })
                        }), c.jsx("button", {
                            onClick: () => f(S),
                            className: "w-full bg-primary hover:bg-primary/90 text-white font-bold py-2.5 px-4 rounded-full transition-colors uppercase tracking-wider text-sm",
                            children: "ADD"
                        })]
                    })]
                }, m))
            })]
        }), c.jsx(uN, {
            open: !!e,
            onOpenChange: S => !S && t(null),
            children: c.jsxs(qv, {
                className: "max-w-md",
                children: [c.jsx(Zv, {
                    children: c.jsx(Jv, {
                        className: "font-bebas text-2xl tracking-wider",
                        children: "Customize Your Ice Cream"
                    })
                }), e && c.jsxs("div", {
                    className: "space-y-6",
                    children: [c.jsxs("div", {
                        children: [c.jsx("img", {
                            src: e.image,
                            alt: e.name,
                            className: "w-full h-48 object-cover rounded-lg"
                        }), c.jsx("h3", {
                            className: "font-bebas text-xl tracking-wider mt-3 text-center",
                            children: e.name
                        })]
                    }), c.jsxs("div", {
                        children: [c.jsx("label", {
                            className: "font-semibold text-sm mb-2 block",
                            children: "Choose Scoops:"
                        }), c.jsxs("div", {
                            className: "flex gap-3",
                            children: [c.jsxs("button", {
                                onClick: () => r("2"),
                                className: `flex-1 py-3 px-4 rounded-lg font-medium transition-colors ${n === "2" ? "bg-primary text-white" : "bg-gray-100 text-foreground hover:bg-gray-200"}`,
                                children: ["2 Scoops - Rs. ", e.twoScoop]
                            }), c.jsxs("button", {
                                onClick: () => r("3"),
                                className: `flex-1 py-3 px-4 rounded-lg font-medium transition-colors ${n === "3" ? "bg-primary text-white" : "bg-gray-100 text-foreground hover:bg-gray-200"}`,
                                children: ["3 Scoops - Rs. ", e.threeScoop]
                            })]
                        })]
                    }), c.jsxs("div", {
                        children: [c.jsx("label", {
                            className: "font-semibold text-sm mb-2 block",
                            children: "Add Toppings (Optional):"
                        }), c.jsx("div", {
                            className: "space-y-2",
                            children: l.map(S => c.jsxs("button", {
                                onClick: () => g(S.name),
                                className: `w-full py-2 px-4 rounded-lg font-medium text-left transition-colors flex justify-between items-center ${o.includes(S.name) ? "bg-primary/10 border-2 border-primary text-primary" : "bg-gray-100 text-foreground hover:bg-gray-200 border-2 border-transparent"}`,
                                children: [c.jsx("span", {
                                    children: S.name
                                }), c.jsxs("span", {
                                    className: "font-bebas text-lg",
                                    children: ["+Rs. ", S.price]
                                })]
                            }, S.name))
                        })]
                    }), c.jsxs("div", {
                        className: "border-t pt-4",
                        children: [c.jsxs("div", {
                            className: "flex justify-between items-center mb-4",
                            children: [c.jsx("span", {
                                className: "font-semibold",
                                children: "Total:"
                            }), c.jsxs("span", {
                                className: "font-bebas text-2xl text-primary",
                                children: ["Rs. ", parseInt(n === "2" ? e.twoScoop : e.threeScoop) + o.reduce( (S, m) => {
                                    const w = l.find(v => v.name === m);
                                    return S + ((w == null ? void 0 : w.price) || 0)
                                }
                                , 0)]
                            })]
                        }), c.jsx("button", {
                            onClick: p,
                            className: "w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-full transition-colors uppercase tracking-wider",
                            children: "Add to Cart"
                        })]
                    })]
                })]
            })
        })]
    })
}
  , mN = "/assets/birthday-deal-updated-khxqULnB.jpg"
  , hN = () => {
    const {addToCart: e} = wo()
      , t = () => {
        e({
            id: "birthday-deal",
            name: "Birthday Deal (3 XL Pizza, 2 Large Crunchy Pasta, 12 Wings, 1 Family Fries, 2 1.5 litre Drinks)",
            price: "10000",
            type: "special"
        }),
        lt({
            title: "Added to Cart!",
            description: "Birthday Special - Rs. 10,000"
        })
    }
    ;
    return c.jsxs("section", {
        className: "container mx-auto px-4 py-12",
        children: [c.jsx("h2", {
            className: "section-title gradient-red bg-clip-text text-transparent",
            children: "BIRTHDAY SPECIAL"
        }), c.jsx("div", {
            className: "max-w-2xl mx-auto",
            children: c.jsxs(pr, {
                className: "overflow-hidden group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-0 flex flex-col",
                children: [c.jsx("div", {
                    className: "relative aspect-video overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200",
                    children: c.jsx("img", {
                        src: mN,
                        alt: "Birthday Deal",
                        className: "w-full h-full object-cover"
                    })
                }), c.jsxs("div", {
                    className: "p-6 flex-1 flex flex-col",
                    children: [c.jsx("h3", {
                        className: "font-bebas text-3xl tracking-wider text-foreground mb-2 text-center",
                        children: "BIRTHDAY DEAL"
                    }), c.jsxs("ul", {
                        className: "space-y-2 mb-4 text-center",
                        children: [c.jsx("li", {
                            className: "text-muted-foreground font-medium text-sm",
                            children: "3 XL Pizza"
                        }), c.jsx("li", {
                            className: "text-muted-foreground font-medium text-sm",
                            children: "2 Large Crunchy Pasta"
                        }), c.jsx("li", {
                            className: "text-muted-foreground font-medium text-sm",
                            children: "12 Wings"
                        }), c.jsx("li", {
                            className: "text-muted-foreground font-medium text-sm",
                            children: "1 Family Fries"
                        }), c.jsx("li", {
                            className: "text-muted-foreground font-medium text-sm",
                            children: "2 × 1.5 litre Drinks"
                        })]
                    }), c.jsx("div", {
                        className: "text-center mb-4",
                        children: c.jsx("p", {
                            className: "font-bebas text-2xl tracking-wide text-foreground",
                            children: "Rs. 10,000"
                        })
                    }), c.jsx("button", {
                        onClick: t,
                        className: "w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-full transition-colors uppercase tracking-wider text-sm",
                        children: "ADD"
                    })]
                })]
            })
        })]
    })
}
  , gN = "/assets/kids-meal-ltgi3z8J.jpg"
  , vN = () => {
    const {addToCart: e} = wo()
      , t = () => {
        e({
            id: "kids-meal",
            name: "Kids Meal (1 Patty Burger, 4 Nuggets, 1 Small Fries, 1 Juice)",
            price: "750",
            type: "special"
        }),
        lt({
            title: "Added to Cart!",
            description: "Kids Meal - Rs. 750"
        })
    }
    ;
    return c.jsxs("section", {
        className: "container mx-auto px-4 py-12",
        children: [c.jsx("h2", {
            className: "section-title gradient-red bg-clip-text text-transparent",
            children: "KIDS MEAL"
        }), c.jsx("div", {
            className: "max-w-2xl mx-auto",
            children: c.jsxs(pr, {
                className: "overflow-hidden group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-0 flex flex-col",
                children: [c.jsx("div", {
                    className: "relative aspect-video overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200",
                    children: c.jsx("img", {
                        src: gN,
                        alt: "Kids Meal",
                        className: "w-full h-full object-cover"
                    })
                }), c.jsxs("div", {
                    className: "p-6 flex-1 flex flex-col",
                    children: [c.jsx("h3", {
                        className: "font-bebas text-3xl tracking-wider text-foreground mb-2 text-center",
                        children: "KIDS MEAL"
                    }), c.jsxs("ul", {
                        className: "space-y-1 mb-4 text-center",
                        children: [c.jsx("li", {
                            className: "text-muted-foreground font-medium text-sm",
                            children: "1 Patty Burger"
                        }), c.jsx("li", {
                            className: "text-muted-foreground font-medium text-sm",
                            children: "4 Nuggets"
                        }), c.jsx("li", {
                            className: "text-muted-foreground font-medium text-sm",
                            children: "1 Small Fries"
                        }), c.jsx("li", {
                            className: "text-muted-foreground font-medium text-sm",
                            children: "1 Juice"
                        })]
                    }), c.jsx("div", {
                        className: "text-center mb-4",
                        children: c.jsx("p", {
                            className: "font-bebas text-2xl tracking-wide text-foreground",
                            children: "Rs. 750"
                        })
                    }), c.jsx("button", {
                        onClick: t,
                        className: "w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-full transition-colors uppercase tracking-wider text-sm",
                        children: "ADD"
                    })]
                })]
            })
        })]
    })
}
  , yN = "/assets/deal-1-resized-26_dM92h.jpg"
  , xN = "/assets/deal-2-resized-CsCz9sy3.jpg"
  , wN = "/assets/deal-3-resized-lYZ2edLr.jpg"
  , SN = "/assets/deal-4-resized-BmmrFkX5.jpg"
  , bN = "/assets/deal-5-resized-BEC8L6gZ.jpg"
  , CN = "/assets/deal-6-resized-B1-DlalO.jpg"
  , EN = "/assets/deal-7-resized-lzwjbT4K.jpg"
  , kN = "/assets/deal-8-resized-BM54CV7m.jpg"
  , NN = () => c.jsxs("div", {
    className: "min-h-screen",
    children: [c.jsx(iE, {}), c.jsx(uE, {}), c.jsx(fE, {}), c.jsx(pE, {}), c.jsx(TE, {}), c.jsx(LE, {}), c.jsx("div", {
        id: "rolls",
        children: c.jsx(FE, {})
    }), c.jsx("div", {
        id: "pasta",
        children: c.jsx(VE, {})
    }), c.jsx("div", {
        id: "pizza",
        children: c.jsx(ck, {})
    }), c.jsx("div", {
        id: "shawarma",
        children: c.jsx(hk, {})
    }), c.jsx("div", {
        id: "wraps",
        children: c.jsx(Sk, {})
    }), c.jsx("div", {
        id: "sandwich",
        children: c.jsx(Nk, {})
    }), c.jsx("div", {
        id: "snacks",
        children: c.jsx(Lk, {})
    }), c.jsx("div", {
        id: "special-burgers",
        children: c.jsx(_k, {})
    }), c.jsx("div", {
        id: "burgers",
        children: c.jsx(Hk, {})
    }), c.jsx("div", {
        id: "chicken-pieces",
        children: c.jsx(Yk, {})
    }), c.jsx("div", {
        id: "desserts",
        children: c.jsx(pN, {})
    }), c.jsx("div", {
        id: "birthday-deal",
        children: c.jsx(hN, {})
    }), c.jsx("div", {
        id: "kids-meal",
        children: c.jsx(vN, {})
    }), c.jsx("main", {
        className: "container mx-auto px-4 py-12",
        children: c.jsxs("div", {
            id: "deals-reloaded",
            className: "mb-12",
            children: [c.jsx("h2", {
                className: "section-title gradient-red bg-clip-text text-transparent",
                children: "COMBO DEALS"
            }), c.jsxs("div", {
                className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
                children: [c.jsx(hn, {
                    number: 1,
                    price: "2500",
                    image: yN,
                    items: ["1 DF Large Pizza", "1 DF Special Pasta", "1.5L Drink"]
                }), c.jsx(hn, {
                    number: 2,
                    price: "580",
                    image: xN,
                    items: ["1 Crisper Burger", "Regular Fries", "330ml Drink"]
                }), c.jsx(hn, {
                    number: 3,
                    price: "950",
                    image: wN,
                    items: ["2 Crisper Burgers", "1 Family Fries", "1.5L Drink"]
                }), c.jsx(hn, {
                    number: 4,
                    price: "2050",
                    image: SN,
                    items: ["4 Zinger Burgers", "1 Family Fries", "1.5L Drink"]
                }), c.jsx(hn, {
                    number: 5,
                    price: "1300",
                    image: bN,
                    items: ["1 Spin Roll (4pc)", "6 Wings", "6 Nuggets", "1.5L Drink"]
                }), c.jsx(hn, {
                    number: 6,
                    price: "3400",
                    image: CN,
                    items: ["2 DF Large Pizzas", "6pc Little Cut", "1.5L Drink"]
                }), c.jsx(hn, {
                    number: 7,
                    price: "4460",
                    image: EN,
                    items: ["3 Crisper Burgers", "1 Large Pizza", "12pc Little Cut", "6pc Crispy Wings", "1.5L Drink"]
                }), c.jsx(hn, {
                    number: 8,
                    price: "4520",
                    image: kN,
                    items: ["1 Large Pizza", "1 DF Large Pizza", "6pc Little Cut", "1 Decent Special Pasta", "1.5L Drink"]
                })]
            })]
        })
    }), c.jsx(mE, {}), c.jsx(wE, {})]
})
  , PN = () => {
    const e = dv();
    return y.useEffect( () => {
        console.error("404 Error: User attempted to access non-existent route:", e.pathname)
    }
    , [e.pathname]),
    c.jsx("div", {
        className: "flex min-h-screen items-center justify-center bg-gray-100",
        children: c.jsxs("div", {
            className: "text-center",
            children: [c.jsx("h1", {
                className: "mb-4 text-4xl font-bold",
                children: "404"
            }), c.jsx("p", {
                className: "mb-4 text-xl text-gray-600",
                children: "Oops! Page not found"
            }), c.jsx("a", {
                href: "/",
                className: "text-blue-500 underline hover:text-blue-700",
                children: "Return to Home"
            })]
        })
    })
}
  , jN = new dC
  , RN = () => c.jsx(pC, {
    client: jN,
    children: c.jsxs(Bb, {
        children: [c.jsx(b1, {}), c.jsx(eS, {}), c.jsx(ZC, {
            children: c.jsxs(YC, {
                children: [c.jsx(jc, {
                    path: "/",
                    element: c.jsx(NN, {})
                }), c.jsx(jc, {
                    path: "*",
                    element: c.jsx(PN, {})
                })]
            })
        })]
    })
});
Ah(document.getElementById("root")).render(c.jsx(oE, {
    children: c.jsx(nE, {
        children: c.jsx(RN, {})
    })
}));
