(() => {
    "use strict";
    var e = {
            d: (t, n) => {
                for (var o in n) e.o(n, o) && !e.o(t, o) && Object.defineProperty(t, o, {
                    enumerable: !0,
                    get: n[o]
                })
            },
            o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
            r: e => {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }
        },
        t = {};

    function n(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }
    e.r(t), e.d(t, {
        hasBrowserEnv: () => ue,
        hasStandardBrowserEnv: () => pe,
        hasStandardBrowserWebWorkerEnv: () => fe,
        navigator: () => ge,
        origin: () => me
    });
    const {
        toString: o
    } = Object.prototype, {
        getPrototypeOf: i
    } = Object, r = (s = Object.create(null), e => {
        const t = o.call(e);
        return s[t] || (s[t] = t.slice(8, -1).toLowerCase())
    });
    var s;
    const a = e => (e = e.toLowerCase(), t => r(t) === e),
        l = e => t => typeof t === e,
        {
            isArray: c
        } = Array,
        d = l("undefined"),
        u = a("ArrayBuffer"),
        g = l("string"),
        p = l("function"),
        f = l("number"),
        m = e => null !== e && "object" == typeof e,
        h = e => {
            if ("object" !== r(e)) return !1;
            const t = i(e);
            return !(null !== t && t !== Object.prototype && null !== Object.getPrototypeOf(t) || Symbol.toStringTag in e || Symbol.iterator in e)
        },
        w = a("Date"),
        v = a("File"),
        C = a("Blob"),
        y = a("FileList"),
        b = a("URLSearchParams"),
        [O, E, I, T] = ["ReadableStream", "Request", "Response", "Headers"].map(a);

    function D(e, t, {
        allOwnKeys: n = !1
    } = {}) {
        if (null == e) return;
        let o, i;
        if ("object" != typeof e && (e = [e]), c(e))
            for (o = 0, i = e.length; o < i; o++) t.call(null, e[o], o, e);
        else {
            const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
                r = i.length;
            let s;
            for (o = 0; o < r; o++) s = i[o], t.call(null, e[s], s, e)
        }
    }

    function S(e, t) {
        t = t.toLowerCase();
        const n = Object.keys(e);
        let o, i = n.length;
        for (; i-- > 0;)
            if (o = n[i], t === o.toLowerCase()) return o;
        return null
    }
    const U = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : global,
        q = e => !d(e) && e !== U,
        N = (A = "undefined" != typeof Uint8Array && i(Uint8Array), e => A && e instanceof A);
    var A;
    const k = a("HTMLFormElement"),
        P = (({
            hasOwnProperty: e
        }) => (t, n) => e.call(t, n))(Object.prototype),
        R = a("RegExp"),
        _ = (e, t) => {
            const n = Object.getOwnPropertyDescriptors(e),
                o = {};
            D(n, ((n, i) => {
                let r;
                !1 !== (r = t(n, i, e)) && (o[i] = r || n)
            })), Object.defineProperties(e, o)
        },
        $ = "abcdefghijklmnopqrstuvwxyz",
        L = "0123456789",
        j = {
            DIGIT: L,
            ALPHA: $,
            ALPHA_DIGIT: $ + $.toUpperCase() + L
        },
        x = a("AsyncFunction"),
        F = (V = "function" == typeof setImmediate, G = p(U.postMessage), V ? setImmediate : G ? (M = `axios@${Math.random()}`, B = [], U.addEventListener("message", (({
            source: e,
            data: t
        }) => {
            e === U && t === M && B.length && B.shift()()
        }), !1), e => {
            B.push(e), U.postMessage(M, "*")
        }) : e => setTimeout(e));
    var V, G, M, B;
    const H = "undefined" != typeof queueMicrotask ? queueMicrotask.bind(U) : "undefined" != typeof process && process.nextTick || F,
        z = {
            isArray: c,
            isArrayBuffer: u,
            isBuffer: function(e) {
                return null !== e && !d(e) && null !== e.constructor && !d(e.constructor) && p(e.constructor.isBuffer) && e.constructor.isBuffer(e)
            },
            isFormData: e => {
                let t;
                return e && ("function" == typeof FormData && e instanceof FormData || p(e.append) && ("formdata" === (t = r(e)) || "object" === t && p(e.toString) && "[object FormData]" === e.toString()))
            },
            isArrayBufferView: function(e) {
                let t;
                return t = "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && u(e.buffer), t
            },
            isString: g,
            isNumber: f,
            isBoolean: e => !0 === e || !1 === e,
            isObject: m,
            isPlainObject: h,
            isReadableStream: O,
            isRequest: E,
            isResponse: I,
            isHeaders: T,
            isUndefined: d,
            isDate: w,
            isFile: v,
            isBlob: C,
            isRegExp: R,
            isFunction: p,
            isStream: e => m(e) && p(e.pipe),
            isURLSearchParams: b,
            isTypedArray: N,
            isFileList: y,
            forEach: D,
            merge: function e() {
                const {
                    caseless: t
                } = q(this) && this || {}, n = {}, o = (o, i) => {
                    const r = t && S(n, i) || i;
                    h(n[r]) && h(o) ? n[r] = e(n[r], o) : h(o) ? n[r] = e({}, o) : c(o) ? n[r] = o.slice() : n[r] = o
                };
                for (let e = 0, t = arguments.length; e < t; e++) arguments[e] && D(arguments[e], o);
                return n
            },
            extend: (e, t, o, {
                allOwnKeys: i
            } = {}) => (D(t, ((t, i) => {
                o && p(t) ? e[i] = n(t, o) : e[i] = t
            }), {
                allOwnKeys: i
            }), e),
            trim: e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
            stripBOM: e => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
            inherits: (e, t, n, o) => {
                e.prototype = Object.create(t.prototype, o), e.prototype.constructor = e, Object.defineProperty(e, "super", {
                    value: t.prototype
                }), n && Object.assign(e.prototype, n)
            },
            toFlatObject: (e, t, n, o) => {
                let r, s, a;
                const l = {};
                if (t = t || {}, null == e) return t;
                do {
                    for (r = Object.getOwnPropertyNames(e), s = r.length; s-- > 0;) a = r[s], o && !o(a, e, t) || l[a] || (t[a] = e[a], l[a] = !0);
                    e = !1 !== n && i(e)
                } while (e && (!n || n(e, t)) && e !== Object.prototype);
                return t
            },
            kindOf: r,
            kindOfTest: a,
            endsWith: (e, t, n) => {
                e = String(e), (void 0 === n || n > e.length) && (n = e.length), n -= t.length;
                const o = e.indexOf(t, n);
                return -1 !== o && o === n
            },
            toArray: e => {
                if (!e) return null;
                if (c(e)) return e;
                let t = e.length;
                if (!f(t)) return null;
                const n = new Array(t);
                for (; t-- > 0;) n[t] = e[t];
                return n
            },
            forEachEntry: (e, t) => {
                const n = (e && e[Symbol.iterator]).call(e);
                let o;
                for (;
                    (o = n.next()) && !o.done;) {
                    const n = o.value;
                    t.call(e, n[0], n[1])
                }
            },
            matchAll: (e, t) => {
                let n;
                const o = [];
                for (; null !== (n = e.exec(t));) o.push(n);
                return o
            },
            isHTMLForm: k,
            hasOwnProperty: P,
            hasOwnProp: P,
            reduceDescriptors: _,
            freezeMethods: e => {
                _(e, ((t, n) => {
                    if (p(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n)) return !1;
                    const o = e[n];
                    p(o) && (t.enumerable = !1, "writable" in t ? t.writable = !1 : t.set || (t.set = () => {
                        throw Error("Can not rewrite read-only method '" + n + "'")
                    }))
                }))
            },
            toObjectSet: (e, t) => {
                const n = {},
                    o = e => {
                        e.forEach((e => {
                            n[e] = !0
                        }))
                    };
                return c(e) ? o(e) : o(String(e).split(t)), n
            },
            toCamelCase: e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, (function(e, t, n) {
                return t.toUpperCase() + n
            })),
            noop: () => {},
            toFiniteNumber: (e, t) => null != e && Number.isFinite(e = +e) ? e : t,
            findKey: S,
            global: U,
            isContextDefined: q,
            ALPHABET: j,
            generateString: (e = 16, t = j.ALPHA_DIGIT) => {
                let n = "";
                const {
                    length: o
                } = t;
                for (; e--;) n += t[Math.random() * o | 0];
                return n
            },
            isSpecCompliantForm: function(e) {
                return !!(e && p(e.append) && "FormData" === e[Symbol.toStringTag] && e[Symbol.iterator])
            },
            toJSONObject: e => {
                const t = new Array(10),
                    n = (e, o) => {
                        if (m(e)) {
                            if (t.indexOf(e) >= 0) return;
                            if (!("toJSON" in e)) {
                                t[o] = e;
                                const i = c(e) ? [] : {};
                                return D(e, ((e, t) => {
                                    const r = n(e, o + 1);
                                    !d(r) && (i[t] = r)
                                })), t[o] = void 0, i
                            }
                        }
                        return e
                    };
                return n(e, 0)
            },
            isAsyncFn: x,
            isThenable: e => e && (m(e) || p(e)) && p(e.then) && p(e.catch),
            setImmediate: F,
            asap: H
        };

    function J(e, t, n, o, i) {
        Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = (new Error).stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), o && (this.request = o), i && (this.response = i, this.status = i.status ? i.status : null)
    }
    z.inherits(J, Error, {
        toJSON: function() {
            return {
                message: this.message,
                name: this.name,
                description: this.description,
                number: this.number,
                fileName: this.fileName,
                lineNumber: this.lineNumber,
                columnNumber: this.columnNumber,
                stack: this.stack,
                config: z.toJSONObject(this.config),
                code: this.code,
                status: this.status
            }
        }
    });
    const W = J.prototype,
        K = {};
    ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach((e => {
        K[e] = {
            value: e
        }
    })), Object.defineProperties(J, K), Object.defineProperty(W, "isAxiosError", {
        value: !0
    }), J.from = (e, t, n, o, i, r) => {
        const s = Object.create(W);
        return z.toFlatObject(e, s, (function(e) {
            return e !== Error.prototype
        }), (e => "isAxiosError" !== e)), J.call(s, e.message, t, n, o, i), s.cause = e, s.name = e.name, r && Object.assign(s, r), s
    };
    const Y = J;

    function X(e) {
        return z.isPlainObject(e) || z.isArray(e)
    }

    function Q(e) {
        return z.endsWith(e, "[]") ? e.slice(0, -2) : e
    }

    function Z(e, t, n) {
        return e ? e.concat(t).map((function(e, t) {
            return e = Q(e), !n && t ? "[" + e + "]" : e
        })).join(n ? "." : "") : t
    }
    const ee = z.toFlatObject(z, {}, null, (function(e) {
            return /^is[A-Z]/.test(e)
        })),
        te = function(e, t, n) {
            if (!z.isObject(e)) throw new TypeError("target must be an object");
            t = t || new FormData;
            const o = (n = z.toFlatObject(n, {
                    metaTokens: !0,
                    dots: !1,
                    indexes: !1
                }, !1, (function(e, t) {
                    return !z.isUndefined(t[e])
                }))).metaTokens,
                i = n.visitor || c,
                r = n.dots,
                s = n.indexes,
                a = (n.Blob || "undefined" != typeof Blob && Blob) && z.isSpecCompliantForm(t);
            if (!z.isFunction(i)) throw new TypeError("visitor must be a function");

            function l(e) {
                if (null === e) return "";
                if (z.isDate(e)) return e.toISOString();
                if (!a && z.isBlob(e)) throw new Y("Blob is not supported. Use a Buffer instead.");
                return z.isArrayBuffer(e) || z.isTypedArray(e) ? a && "function" == typeof Blob ? new Blob([e]) : Buffer.from(e) : e
            }

            function c(e, n, i) {
                let a = e;
                if (e && !i && "object" == typeof e)
                    if (z.endsWith(n, "{}")) n = o ? n : n.slice(0, -2), e = JSON.stringify(e);
                    else if (z.isArray(e) && function(e) {
                        return z.isArray(e) && !e.some(X)
                    }(e) || (z.isFileList(e) || z.endsWith(n, "[]")) && (a = z.toArray(e))) return n = Q(n), a.forEach((function(e, o) {
                    !z.isUndefined(e) && null !== e && t.append(!0 === s ? Z([n], o, r) : null === s ? n : n + "[]", l(e))
                })), !1;
                return !!X(e) || (t.append(Z(i, n, r), l(e)), !1)
            }
            const d = [],
                u = Object.assign(ee, {
                    defaultVisitor: c,
                    convertValue: l,
                    isVisitable: X
                });
            if (!z.isObject(e)) throw new TypeError("data must be an object");
            return function e(n, o) {
                if (!z.isUndefined(n)) {
                    if (-1 !== d.indexOf(n)) throw Error("Circular reference detected in " + o.join("."));
                    d.push(n), z.forEach(n, (function(n, r) {
                        !0 === (!(z.isUndefined(n) || null === n) && i.call(t, n, z.isString(r) ? r.trim() : r, o, u)) && e(n, o ? o.concat(r) : [r])
                    })), d.pop()
                }
            }(e), t
        };

    function ne(e) {
        const t = {
            "!": "%21",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "~": "%7E",
            "%20": "+",
            "%00": "\0"
        };
        return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, (function(e) {
            return t[e]
        }))
    }

    function oe(e, t) {
        this._pairs = [], e && te(e, this, t)
    }
    const ie = oe.prototype;
    ie.append = function(e, t) {
        this._pairs.push([e, t])
    }, ie.toString = function(e) {
        const t = e ? function(t) {
            return e.call(this, t, ne)
        } : ne;
        return this._pairs.map((function(e) {
            return t(e[0]) + "=" + t(e[1])
        }), "").join("&")
    };
    const re = oe;

    function se(e) {
        return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }

    function ae(e, t, n) {
        if (!t) return e;
        const o = n && n.encode || se,
            i = n && n.serialize;
        let r;
        if (r = i ? i(t, n) : z.isURLSearchParams(t) ? t.toString() : new re(t, n).toString(o), r) {
            const t = e.indexOf("#"); - 1 !== t && (e = e.slice(0, t)), e += (-1 === e.indexOf("?") ? "?" : "&") + r
        }
        return e
    }
    const le = class {
            constructor() {
                this.handlers = []
            }
            use(e, t, n) {
                return this.handlers.push({
                    fulfilled: e,
                    rejected: t,
                    synchronous: !!n && n.synchronous,
                    runWhen: n ? n.runWhen : null
                }), this.handlers.length - 1
            }
            eject(e) {
                this.handlers[e] && (this.handlers[e] = null)
            }
            clear() {
                this.handlers && (this.handlers = [])
            }
            forEach(e) {
                z.forEach(this.handlers, (function(t) {
                    null !== t && e(t)
                }))
            }
        },
        ce = {
            silentJSONParsing: !0,
            forcedJSONParsing: !0,
            clarifyTimeoutError: !1
        },
        de = {
            isBrowser: !0,
            classes: {
                URLSearchParams: "undefined" != typeof URLSearchParams ? URLSearchParams : re,
                FormData: "undefined" != typeof FormData ? FormData : null,
                Blob: "undefined" != typeof Blob ? Blob : null
            },
            protocols: ["http", "https", "file", "blob", "url", "data"]
        },
        ue = "undefined" != typeof window && "undefined" != typeof document,
        ge = "object" == typeof navigator && navigator || void 0,
        pe = ue && (!ge || ["ReactNative", "NativeScript", "NS"].indexOf(ge.product) < 0),
        fe = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && "function" == typeof self.importScripts,
        me = ue && window.location.href || "http://localhost",
        he = {
            ...t,
            ...de
        },
        we = function(e) {
            function t(e, n, o, i) {
                let r = e[i++];
                if ("__proto__" === r) return !0;
                const s = Number.isFinite(+r),
                    a = i >= e.length;
                return r = !r && z.isArray(o) ? o.length : r, a ? (z.hasOwnProp(o, r) ? o[r] = [o[r], n] : o[r] = n, !s) : (o[r] && z.isObject(o[r]) || (o[r] = []), t(e, n, o[r], i) && z.isArray(o[r]) && (o[r] = function(e) {
                    const t = {},
                        n = Object.keys(e);
                    let o;
                    const i = n.length;
                    let r;
                    for (o = 0; o < i; o++) r = n[o], t[r] = e[r];
                    return t
                }(o[r])), !s)
            }
            if (z.isFormData(e) && z.isFunction(e.entries)) {
                const n = {};
                return z.forEachEntry(e, ((e, o) => {
                    t(function(e) {
                        return z.matchAll(/\w+|\[(\w*)]/g, e).map((e => "[]" === e[0] ? "" : e[1] || e[0]))
                    }(e), o, n, 0)
                })), n
            }
            return null
        },
        ve = {
            transitional: ce,
            adapter: ["xhr", "http", "fetch"],
            transformRequest: [function(e, t) {
                const n = t.getContentType() || "",
                    o = n.indexOf("application/json") > -1,
                    i = z.isObject(e);
                if (i && z.isHTMLForm(e) && (e = new FormData(e)), z.isFormData(e)) return o ? JSON.stringify(we(e)) : e;
                if (z.isArrayBuffer(e) || z.isBuffer(e) || z.isStream(e) || z.isFile(e) || z.isBlob(e) || z.isReadableStream(e)) return e;
                if (z.isArrayBufferView(e)) return e.buffer;
                if (z.isURLSearchParams(e)) return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
                let r;
                if (i) {
                    if (n.indexOf("application/x-www-form-urlencoded") > -1) return function(e, t) {
                        return te(e, new he.classes.URLSearchParams, Object.assign({
                            visitor: function(e, t, n, o) {
                                return he.isNode && z.isBuffer(e) ? (this.append(t, e.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments)
                            }
                        }, t))
                    }(e, this.formSerializer).toString();
                    if ((r = z.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
                        const t = this.env && this.env.FormData;
                        return te(r ? {
                            "files[]": e
                        } : e, t && new t, this.formSerializer)
                    }
                }
                return i || o ? (t.setContentType("application/json", !1), function(e, t, n) {
                    if (z.isString(e)) try {
                        return (0, JSON.parse)(e), z.trim(e)
                    } catch (e) {
                        if ("SyntaxError" !== e.name) throw e
                    }
                    return (0, JSON.stringify)(e)
                }(e)) : e
            }],
            transformResponse: [function(e) {
                const t = this.transitional || ve.transitional,
                    n = t && t.forcedJSONParsing,
                    o = "json" === this.responseType;
                if (z.isResponse(e) || z.isReadableStream(e)) return e;
                if (e && z.isString(e) && (n && !this.responseType || o)) {
                    const n = !(t && t.silentJSONParsing) && o;
                    try {
                        return JSON.parse(e)
                    } catch (e) {
                        if (n) {
                            if ("SyntaxError" === e.name) throw Y.from(e, Y.ERR_BAD_RESPONSE, this, null, this.response);
                            throw e
                        }
                    }
                }
                return e
            }],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            maxBodyLength: -1,
            env: {
                FormData: he.classes.FormData,
                Blob: he.classes.Blob
            },
            validateStatus: function(e) {
                return e >= 200 && e < 300
            },
            headers: {
                common: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": void 0
                }
            }
        };
    z.forEach(["delete", "get", "head", "post", "put", "patch"], (e => {
        ve.headers[e] = {}
    }));
    const Ce = ve,
        ye = z.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
        be = Symbol("internals");

    function Oe(e) {
        return e && String(e).trim().toLowerCase()
    }

    function Ee(e) {
        return !1 === e || null == e ? e : z.isArray(e) ? e.map(Ee) : String(e)
    }

    function Ie(e, t, n, o, i) {
        return z.isFunction(o) ? o.call(this, t, n) : (i && (t = n), z.isString(t) ? z.isString(o) ? -1 !== t.indexOf(o) : z.isRegExp(o) ? o.test(t) : void 0 : void 0)
    }
    class Te {
        constructor(e) {
            e && this.set(e)
        }
        set(e, t, n) {
            const o = this;

            function i(e, t, n) {
                const i = Oe(t);
                if (!i) throw new Error("header name must be a non-empty string");
                const r = z.findKey(o, i);
                (!r || void 0 === o[r] || !0 === n || void 0 === n && !1 !== o[r]) && (o[r || t] = Ee(e))
            }
            const r = (e, t) => z.forEach(e, ((e, n) => i(e, n, t)));
            if (z.isPlainObject(e) || e instanceof this.constructor) r(e, t);
            else if (z.isString(e) && (e = e.trim()) && !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())) r((e => {
                const t = {};
                let n, o, i;
                return e && e.split("\n").forEach((function(e) {
                    i = e.indexOf(":"), n = e.substring(0, i).trim().toLowerCase(), o = e.substring(i + 1).trim(), !n || t[n] && ye[n] || ("set-cookie" === n ? t[n] ? t[n].push(o) : t[n] = [o] : t[n] = t[n] ? t[n] + ", " + o : o)
                })), t
            })(e), t);
            else if (z.isHeaders(e))
                for (const [t, o] of e.entries()) i(o, t, n);
            else null != e && i(t, e, n);
            return this
        }
        get(e, t) {
            if (e = Oe(e)) {
                const n = z.findKey(this, e);
                if (n) {
                    const e = this[n];
                    if (!t) return e;
                    if (!0 === t) return function(e) {
                        const t = Object.create(null),
                            n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                        let o;
                        for (; o = n.exec(e);) t[o[1]] = o[2];
                        return t
                    }(e);
                    if (z.isFunction(t)) return t.call(this, e, n);
                    if (z.isRegExp(t)) return t.exec(e);
                    throw new TypeError("parser must be boolean|regexp|function")
                }
            }
        }
        has(e, t) {
            if (e = Oe(e)) {
                const n = z.findKey(this, e);
                return !(!n || void 0 === this[n] || t && !Ie(0, this[n], n, t))
            }
            return !1
        }
        delete(e, t) {
            const n = this;
            let o = !1;

            function i(e) {
                if (e = Oe(e)) {
                    const i = z.findKey(n, e);
                    !i || t && !Ie(0, n[i], i, t) || (delete n[i], o = !0)
                }
            }
            return z.isArray(e) ? e.forEach(i) : i(e), o
        }
        clear(e) {
            const t = Object.keys(this);
            let n = t.length,
                o = !1;
            for (; n--;) {
                const i = t[n];
                e && !Ie(0, this[i], i, e, !0) || (delete this[i], o = !0)
            }
            return o
        }
        normalize(e) {
            const t = this,
                n = {};
            return z.forEach(this, ((o, i) => {
                const r = z.findKey(n, i);
                if (r) return t[r] = Ee(o), void delete t[i];
                const s = e ? function(e) {
                    return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, ((e, t, n) => t.toUpperCase() + n))
                }(i) : String(i).trim();
                s !== i && delete t[i], t[s] = Ee(o), n[s] = !0
            })), this
        }
        concat(...e) {
            return this.constructor.concat(this, ...e)
        }
        toJSON(e) {
            const t = Object.create(null);
            return z.forEach(this, ((n, o) => {
                null != n && !1 !== n && (t[o] = e && z.isArray(n) ? n.join(", ") : n)
            })), t
        } [Symbol.iterator]() {
            return Object.entries(this.toJSON())[Symbol.iterator]()
        }
        toString() {
            return Object.entries(this.toJSON()).map((([e, t]) => e + ": " + t)).join("\n")
        }
        get[Symbol.toStringTag]() {
            return "AxiosHeaders"
        }
        static from(e) {
            return e instanceof this ? e : new this(e)
        }
        static concat(e, ...t) {
            const n = new this(e);
            return t.forEach((e => n.set(e))), n
        }
        static accessor(e) {
            const t = (this[be] = this[be] = {
                    accessors: {}
                }).accessors,
                n = this.prototype;

            function o(e) {
                const o = Oe(e);
                t[o] || (function(e, t) {
                    const n = z.toCamelCase(" " + t);
                    ["get", "set", "has"].forEach((o => {
                        Object.defineProperty(e, o + n, {
                            value: function(e, n, i) {
                                return this[o].call(this, t, e, n, i)
                            },
                            configurable: !0
                        })
                    }))
                }(n, e), t[o] = !0)
            }
            return z.isArray(e) ? e.forEach(o) : o(e), this
        }
    }
    Te.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), z.reduceDescriptors(Te.prototype, (({
        value: e
    }, t) => {
        let n = t[0].toUpperCase() + t.slice(1);
        return {
            get: () => e,
            set(e) {
                this[n] = e
            }
        }
    })), z.freezeMethods(Te);
    const De = Te;

    function Se(e, t) {
        const n = this || Ce,
            o = t || n,
            i = De.from(o.headers);
        let r = o.data;
        return z.forEach(e, (function(e) {
            r = e.call(n, r, i.normalize(), t ? t.status : void 0)
        })), i.normalize(), r
    }

    function Ue(e) {
        return !(!e || !e.__CANCEL__)
    }

    function qe(e, t, n) {
        Y.call(this, null == e ? "canceled" : e, Y.ERR_CANCELED, t, n), this.name = "CanceledError"
    }
    z.inherits(qe, Y, {
        __CANCEL__: !0
    });
    const Ne = qe;

    function Ae(e, t, n) {
        const o = n.config.validateStatus;
        n.status && o && !o(n.status) ? t(new Y("Request failed with status code " + n.status, [Y.ERR_BAD_REQUEST, Y.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n)) : e(n)
    }
    const ke = (e, t, n = 3) => {
            let o = 0;
            const i = function(e, t) {
                e = e || 10;
                const n = new Array(e),
                    o = new Array(e);
                let i, r = 0,
                    s = 0;
                return t = void 0 !== t ? t : 1e3,
                    function(a) {
                        const l = Date.now(),
                            c = o[s];
                        i || (i = l), n[r] = a, o[r] = l;
                        let d = s,
                            u = 0;
                        for (; d !== r;) u += n[d++], d %= e;
                        if (r = (r + 1) % e, r === s && (s = (s + 1) % e), l - i < t) return;
                        const g = c && l - c;
                        return g ? Math.round(1e3 * u / g) : void 0
                    }
            }(50, 250);
            return function(e, t) {
                let n, o, i = 0,
                    r = 1e3 / t;
                const s = (t, r = Date.now()) => {
                    i = r, n = null, o && (clearTimeout(o), o = null), e.apply(null, t)
                };
                return [(...e) => {
                    const t = Date.now(),
                        a = t - i;
                    a >= r ? s(e, t) : (n = e, o || (o = setTimeout((() => {
                        o = null, s(n)
                    }), r - a)))
                }, () => n && s(n)]
            }((n => {
                const r = n.loaded,
                    s = n.lengthComputable ? n.total : void 0,
                    a = r - o,
                    l = i(a);
                o = r, e({
                    loaded: r,
                    total: s,
                    progress: s ? r / s : void 0,
                    bytes: a,
                    rate: l || void 0,
                    estimated: l && s && r <= s ? (s - r) / l : void 0,
                    event: n,
                    lengthComputable: null != s,
                    [t ? "download" : "upload"]: !0
                })
            }), n)
        },
        Pe = (e, t) => {
            const n = null != e;
            return [o => t[0]({
                lengthComputable: n,
                total: e,
                loaded: o
            }), t[1]]
        },
        Re = e => (...t) => z.asap((() => e(...t))),
        _e = he.hasStandardBrowserEnv ? function() {
            const e = he.navigator && /(msie|trident)/i.test(he.navigator.userAgent),
                t = document.createElement("a");
            let n;

            function o(n) {
                let o = n;
                return e && (t.setAttribute("href", o), o = t.href), t.setAttribute("href", o), {
                    href: t.href,
                    protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
                    host: t.host,
                    search: t.search ? t.search.replace(/^\?/, "") : "",
                    hash: t.hash ? t.hash.replace(/^#/, "") : "",
                    hostname: t.hostname,
                    port: t.port,
                    pathname: "/" === t.pathname.charAt(0) ? t.pathname : "/" + t.pathname
                }
            }
            return n = o(window.location.href),
                function(e) {
                    const t = z.isString(e) ? o(e) : e;
                    return t.protocol === n.protocol && t.host === n.host
                }
        }() : function() {
            return !0
        },
        $e = he.hasStandardBrowserEnv ? {
            write(e, t, n, o, i, r) {
                const s = [e + "=" + encodeURIComponent(t)];
                z.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), z.isString(o) && s.push("path=" + o), z.isString(i) && s.push("domain=" + i), !0 === r && s.push("secure"), document.cookie = s.join("; ")
            },
            read(e) {
                const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                return t ? decodeURIComponent(t[3]) : null
            },
            remove(e) {
                this.write(e, "", Date.now() - 864e5)
            }
        } : {
            write() {},
            read: () => null,
            remove() {}
        };

    function Le(e, t) {
        return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t) ? function(e, t) {
            return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e
        }(e, t) : t
    }
    const je = e => e instanceof De ? {
        ...e
    } : e;

    function xe(e, t) {
        t = t || {};
        const n = {};

        function o(e, t, n) {
            return z.isPlainObject(e) && z.isPlainObject(t) ? z.merge.call({
                caseless: n
            }, e, t) : z.isPlainObject(t) ? z.merge({}, t) : z.isArray(t) ? t.slice() : t
        }

        function i(e, t, n) {
            return z.isUndefined(t) ? z.isUndefined(e) ? void 0 : o(void 0, e, n) : o(e, t, n)
        }

        function r(e, t) {
            if (!z.isUndefined(t)) return o(void 0, t)
        }

        function s(e, t) {
            return z.isUndefined(t) ? z.isUndefined(e) ? void 0 : o(void 0, e) : o(void 0, t)
        }

        function a(n, i, r) {
            return r in t ? o(n, i) : r in e ? o(void 0, n) : void 0
        }
        const l = {
            url: r,
            method: r,
            data: r,
            baseURL: s,
            transformRequest: s,
            transformResponse: s,
            paramsSerializer: s,
            timeout: s,
            timeoutMessage: s,
            withCredentials: s,
            withXSRFToken: s,
            adapter: s,
            responseType: s,
            xsrfCookieName: s,
            xsrfHeaderName: s,
            onUploadProgress: s,
            onDownloadProgress: s,
            decompress: s,
            maxContentLength: s,
            maxBodyLength: s,
            beforeRedirect: s,
            transport: s,
            httpAgent: s,
            httpsAgent: s,
            cancelToken: s,
            socketPath: s,
            responseEncoding: s,
            validateStatus: a,
            headers: (e, t) => i(je(e), je(t), !0)
        };
        return z.forEach(Object.keys(Object.assign({}, e, t)), (function(o) {
            const r = l[o] || i,
                s = r(e[o], t[o], o);
            z.isUndefined(s) && r !== a || (n[o] = s)
        })), n
    }
    const Fe = e => {
            const t = xe({}, e);
            let n, {
                data: o,
                withXSRFToken: i,
                xsrfHeaderName: r,
                xsrfCookieName: s,
                headers: a,
                auth: l
            } = t;
            if (t.headers = a = De.from(a), t.url = ae(Le(t.baseURL, t.url), e.params, e.paramsSerializer), l && a.set("Authorization", "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))), z.isFormData(o))
                if (he.hasStandardBrowserEnv || he.hasStandardBrowserWebWorkerEnv) a.setContentType(void 0);
                else if (!1 !== (n = a.getContentType())) {
                const [e, ...t] = n ? n.split(";").map((e => e.trim())).filter(Boolean) : [];
                a.setContentType([e || "multipart/form-data", ...t].join("; "))
            }
            if (he.hasStandardBrowserEnv && (i && z.isFunction(i) && (i = i(t)), i || !1 !== i && _e(t.url))) {
                const e = r && s && $e.read(s);
                e && a.set(r, e)
            }
            return t
        },
        Ve = "undefined" != typeof XMLHttpRequest && function(e) {
            return new Promise((function(t, n) {
                const o = Fe(e);
                let i = o.data;
                const r = De.from(o.headers).normalize();
                let s, a, l, c, d, {
                    responseType: u,
                    onUploadProgress: g,
                    onDownloadProgress: p
                } = o;

                function f() {
                    c && c(), d && d(), o.cancelToken && o.cancelToken.unsubscribe(s), o.signal && o.signal.removeEventListener("abort", s)
                }
                let m = new XMLHttpRequest;

                function h() {
                    if (!m) return;
                    const o = De.from("getAllResponseHeaders" in m && m.getAllResponseHeaders());
                    Ae((function(e) {
                        t(e), f()
                    }), (function(e) {
                        n(e), f()
                    }), {
                        data: u && "text" !== u && "json" !== u ? m.response : m.responseText,
                        status: m.status,
                        statusText: m.statusText,
                        headers: o,
                        config: e,
                        request: m
                    }), m = null
                }
                m.open(o.method.toUpperCase(), o.url, !0), m.timeout = o.timeout, "onloadend" in m ? m.onloadend = h : m.onreadystatechange = function() {
                    m && 4 === m.readyState && (0 !== m.status || m.responseURL && 0 === m.responseURL.indexOf("file:")) && setTimeout(h)
                }, m.onabort = function() {
                    m && (n(new Y("Request aborted", Y.ECONNABORTED, e, m)), m = null)
                }, m.onerror = function() {
                    n(new Y("Network Error", Y.ERR_NETWORK, e, m)), m = null
                }, m.ontimeout = function() {
                    let t = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
                    const i = o.transitional || ce;
                    o.timeoutErrorMessage && (t = o.timeoutErrorMessage), n(new Y(t, i.clarifyTimeoutError ? Y.ETIMEDOUT : Y.ECONNABORTED, e, m)), m = null
                }, void 0 === i && r.setContentType(null), "setRequestHeader" in m && z.forEach(r.toJSON(), (function(e, t) {
                    m.setRequestHeader(t, e)
                })), z.isUndefined(o.withCredentials) || (m.withCredentials = !!o.withCredentials), u && "json" !== u && (m.responseType = o.responseType), p && ([l, d] = ke(p, !0), m.addEventListener("progress", l)), g && m.upload && ([a, c] = ke(g), m.upload.addEventListener("progress", a), m.upload.addEventListener("loadend", c)), (o.cancelToken || o.signal) && (s = t => {
                    m && (n(!t || t.type ? new Ne(null, e, m) : t), m.abort(), m = null)
                }, o.cancelToken && o.cancelToken.subscribe(s), o.signal && (o.signal.aborted ? s() : o.signal.addEventListener("abort", s)));
                const w = function(e) {
                    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                    return t && t[1] || ""
                }(o.url);
                w && -1 === he.protocols.indexOf(w) ? n(new Y("Unsupported protocol " + w + ":", Y.ERR_BAD_REQUEST, e)) : m.send(i || null)
            }))
        },
        Ge = (e, t) => {
            const {
                length: n
            } = e = e ? e.filter(Boolean) : [];
            if (t || n) {
                let n, o = new AbortController;
                const i = function(e) {
                    if (!n) {
                        n = !0, s();
                        const t = e instanceof Error ? e : this.reason;
                        o.abort(t instanceof Y ? t : new Ne(t instanceof Error ? t.message : t))
                    }
                };
                let r = t && setTimeout((() => {
                    r = null, i(new Y(`timeout ${t} of ms exceeded`, Y.ETIMEDOUT))
                }), t);
                const s = () => {
                    e && (r && clearTimeout(r), r = null, e.forEach((e => {
                        e.unsubscribe ? e.unsubscribe(i) : e.removeEventListener("abort", i)
                    })), e = null)
                };
                e.forEach((e => e.addEventListener("abort", i)));
                const {
                    signal: a
                } = o;
                return a.unsubscribe = () => z.asap(s), a
            }
        },
        Me = function*(e, t) {
            let n = e.byteLength;
            if (!t || n < t) return void(yield e);
            let o, i = 0;
            for (; i < n;) o = i + t, yield e.slice(i, o), i = o
        },
        Be = (e, t, n, o) => {
            const i = async function*(e, t) {
                for await (const n of async function*(e) {
                    if (e[Symbol.asyncIterator]) return void(yield* e);
                    const t = e.getReader();
                    try {
                        for (;;) {
                            const {
                                done: e,
                                value: n
                            } = await t.read();
                            if (e) break;
                            yield n
                        }
                    } finally {
                        await t.cancel()
                    }
                }(e)) yield* Me(n, t)
            }(e, t);
            let r, s = 0,
                a = e => {
                    r || (r = !0, o && o(e))
                };
            return new ReadableStream({
                async pull(e) {
                    try {
                        const {
                            done: t,
                            value: o
                        } = await i.next();
                        if (t) return a(), void e.close();
                        let r = o.byteLength;
                        if (n) {
                            let e = s += r;
                            n(e)
                        }
                        e.enqueue(new Uint8Array(o))
                    } catch (e) {
                        throw a(e), e
                    }
                },
                cancel: e => (a(e), i.return())
            }, {
                highWaterMark: 2
            })
        },
        He = "function" == typeof fetch && "function" == typeof Request && "function" == typeof Response,
        ze = He && "function" == typeof ReadableStream,
        Je = He && ("function" == typeof TextEncoder ? (We = new TextEncoder, e => We.encode(e)) : async e => new Uint8Array(await new Response(e).arrayBuffer()));
    var We;
    const Ke = (e, ...t) => {
            try {
                return !!e(...t)
            } catch (e) {
                return !1
            }
        },
        Ye = ze && Ke((() => {
            let e = !1;
            const t = new Request(he.origin, {
                body: new ReadableStream,
                method: "POST",
                get duplex() {
                    return e = !0, "half"
                }
            }).headers.has("Content-Type");
            return e && !t
        })),
        Xe = ze && Ke((() => z.isReadableStream(new Response("").body))),
        Qe = {
            stream: Xe && (e => e.body)
        };
    var Ze;
    He && (Ze = new Response, ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e => {
        !Qe[e] && (Qe[e] = z.isFunction(Ze[e]) ? t => t[e]() : (t, n) => {
            throw new Y(`Response type '${e}' is not supported`, Y.ERR_NOT_SUPPORT, n)
        })
    })));
    const et = {
        http: null,
        xhr: Ve,
        fetch: He && (async e => {
            let {
                url: t,
                method: n,
                data: o,
                signal: i,
                cancelToken: r,
                timeout: s,
                onDownloadProgress: a,
                onUploadProgress: l,
                responseType: c,
                headers: d,
                withCredentials: u = "same-origin",
                fetchOptions: g
            } = Fe(e);
            c = c ? (c + "").toLowerCase() : "text";
            let p, f = Ge([i, r && r.toAbortSignal()], s);
            const m = f && f.unsubscribe && (() => {
                f.unsubscribe()
            });
            let h;
            try {
                if (l && Ye && "get" !== n && "head" !== n && 0 !== (h = await (async (e, t) => {
                        const n = z.toFiniteNumber(e.getContentLength());
                        return null == n ? (async e => {
                            if (null == e) return 0;
                            if (z.isBlob(e)) return e.size;
                            if (z.isSpecCompliantForm(e)) {
                                const t = new Request(he.origin, {
                                    method: "POST",
                                    body: e
                                });
                                return (await t.arrayBuffer()).byteLength
                            }
                            return z.isArrayBufferView(e) || z.isArrayBuffer(e) ? e.byteLength : (z.isURLSearchParams(e) && (e += ""), z.isString(e) ? (await Je(e)).byteLength : void 0)
                        })(t) : n
                    })(d, o))) {
                    let e, n = new Request(t, {
                        method: "POST",
                        body: o,
                        duplex: "half"
                    });
                    if (z.isFormData(o) && (e = n.headers.get("content-type")) && d.setContentType(e), n.body) {
                        const [e, t] = Pe(h, ke(Re(l)));
                        o = Be(n.body, 65536, e, t)
                    }
                }
                z.isString(u) || (u = u ? "include" : "omit");
                const i = "credentials" in Request.prototype;
                p = new Request(t, {
                    ...g,
                    signal: f,
                    method: n.toUpperCase(),
                    headers: d.normalize().toJSON(),
                    body: o,
                    duplex: "half",
                    credentials: i ? u : void 0
                });
                let r = await fetch(p);
                const s = Xe && ("stream" === c || "response" === c);
                if (Xe && (a || s && m)) {
                    const e = {};
                    ["status", "statusText", "headers"].forEach((t => {
                        e[t] = r[t]
                    }));
                    const t = z.toFiniteNumber(r.headers.get("content-length")),
                        [n, o] = a && Pe(t, ke(Re(a), !0)) || [];
                    r = new Response(Be(r.body, 65536, n, (() => {
                        o && o(), m && m()
                    })), e)
                }
                c = c || "text";
                let w = await Qe[z.findKey(Qe, c) || "text"](r, e);
                return !s && m && m(), await new Promise(((t, n) => {
                    Ae(t, n, {
                        data: w,
                        headers: De.from(r.headers),
                        status: r.status,
                        statusText: r.statusText,
                        config: e,
                        request: p
                    })
                }))
            } catch (t) {
                if (m && m(), t && "TypeError" === t.name && /fetch/i.test(t.message)) throw Object.assign(new Y("Network Error", Y.ERR_NETWORK, e, p), {
                    cause: t.cause || t
                });
                throw Y.from(t, t && t.code, e, p)
            }
        })
    };
    z.forEach(et, ((e, t) => {
        if (e) {
            try {
                Object.defineProperty(e, "name", {
                    value: t
                })
            } catch (e) {}
            Object.defineProperty(e, "adapterName", {
                value: t
            })
        }
    }));
    const tt = e => `- ${e}`,
        nt = e => z.isFunction(e) || null === e || !1 === e,
        ot = e => {
            e = z.isArray(e) ? e : [e];
            const {
                length: t
            } = e;
            let n, o;
            const i = {};
            for (let r = 0; r < t; r++) {
                let t;
                if (n = e[r], o = n, !nt(n) && (o = et[(t = String(n)).toLowerCase()], void 0 === o)) throw new Y(`Unknown adapter '${t}'`);
                if (o) break;
                i[t || "#" + r] = o
            }
            if (!o) {
                const e = Object.entries(i).map((([e, t]) => `adapter ${e} ` + (!1 === t ? "is not supported by the environment" : "is not available in the build")));
                let n = t ? e.length > 1 ? "since :\n" + e.map(tt).join("\n") : " " + tt(e[0]) : "as no adapter specified";
                throw new Y("There is no suitable adapter to dispatch the request " + n, "ERR_NOT_SUPPORT")
            }
            return o
        };

    function it(e) {
        if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new Ne(null, e)
    }

    function rt(e) {
        return it(e), e.headers = De.from(e.headers), e.data = Se.call(e, e.transformRequest), -1 !== ["post", "put", "patch"].indexOf(e.method) && e.headers.setContentType("application/x-www-form-urlencoded", !1), ot(e.adapter || Ce.adapter)(e).then((function(t) {
            return it(e), t.data = Se.call(e, e.transformResponse, t), t.headers = De.from(t.headers), t
        }), (function(t) {
            return Ue(t) || (it(e), t && t.response && (t.response.data = Se.call(e, e.transformResponse, t.response), t.response.headers = De.from(t.response.headers))), Promise.reject(t)
        }))
    }
    const st = {};
    ["object", "boolean", "number", "function", "string", "symbol"].forEach(((e, t) => {
        st[e] = function(n) {
            return typeof n === e || "a" + (t < 1 ? "n " : " ") + e
        }
    }));
    const at = {};
    st.transitional = function(e, t, n) {
        function o(e, t) {
            return "[Axios v1.7.7] Transitional option '" + e + "'" + t + (n ? ". " + n : "")
        }
        return (n, i, r) => {
            if (!1 === e) throw new Y(o(i, " has been removed" + (t ? " in " + t : "")), Y.ERR_DEPRECATED);
            return t && !at[i] && (at[i] = !0, console.warn(o(i, " has been deprecated since v" + t + " and will be removed in the near future"))), !e || e(n, i, r)
        }
    };
    const lt = {
            assertOptions: function(e, t, n) {
                if ("object" != typeof e) throw new Y("options must be an object", Y.ERR_BAD_OPTION_VALUE);
                const o = Object.keys(e);
                let i = o.length;
                for (; i-- > 0;) {
                    const r = o[i],
                        s = t[r];
                    if (s) {
                        const t = e[r],
                            n = void 0 === t || s(t, r, e);
                        if (!0 !== n) throw new Y("option " + r + " must be " + n, Y.ERR_BAD_OPTION_VALUE)
                    } else if (!0 !== n) throw new Y("Unknown option " + r, Y.ERR_BAD_OPTION)
                }
            },
            validators: st
        },
        ct = lt.validators;
    class dt {
        constructor(e) {
            this.defaults = e, this.interceptors = {
                request: new le,
                response: new le
            }
        }
        async request(e, t) {
            try {
                return await this._request(e, t)
            } catch (e) {
                if (e instanceof Error) {
                    let t;
                    Error.captureStackTrace ? Error.captureStackTrace(t = {}) : t = new Error;
                    const n = t.stack ? t.stack.replace(/^.+\n/, "") : "";
                    try {
                        e.stack ? n && !String(e.stack).endsWith(n.replace(/^.+\n.+\n/, "")) && (e.stack += "\n" + n) : e.stack = n
                    } catch (e) {}
                }
                throw e
            }
        }
        _request(e, t) {
            "string" == typeof e ? (t = t || {}).url = e : t = e || {}, t = xe(this.defaults, t);
            const {
                transitional: n,
                paramsSerializer: o,
                headers: i
            } = t;
            void 0 !== n && lt.assertOptions(n, {
                silentJSONParsing: ct.transitional(ct.boolean),
                forcedJSONParsing: ct.transitional(ct.boolean),
                clarifyTimeoutError: ct.transitional(ct.boolean)
            }, !1), null != o && (z.isFunction(o) ? t.paramsSerializer = {
                serialize: o
            } : lt.assertOptions(o, {
                encode: ct.function,
                serialize: ct.function
            }, !0)), t.method = (t.method || this.defaults.method || "get").toLowerCase();
            let r = i && z.merge(i.common, i[t.method]);
            i && z.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (e => {
                delete i[e]
            })), t.headers = De.concat(r, i);
            const s = [];
            let a = !0;
            this.interceptors.request.forEach((function(e) {
                "function" == typeof e.runWhen && !1 === e.runWhen(t) || (a = a && e.synchronous, s.unshift(e.fulfilled, e.rejected))
            }));
            const l = [];
            let c;
            this.interceptors.response.forEach((function(e) {
                l.push(e.fulfilled, e.rejected)
            }));
            let d, u = 0;
            if (!a) {
                const e = [rt.bind(this), void 0];
                for (e.unshift.apply(e, s), e.push.apply(e, l), d = e.length, c = Promise.resolve(t); u < d;) c = c.then(e[u++], e[u++]);
                return c
            }
            d = s.length;
            let g = t;
            for (u = 0; u < d;) {
                const e = s[u++],
                    t = s[u++];
                try {
                    g = e(g)
                } catch (e) {
                    t.call(this, e);
                    break
                }
            }
            try {
                c = rt.call(this, g)
            } catch (e) {
                return Promise.reject(e)
            }
            for (u = 0, d = l.length; u < d;) c = c.then(l[u++], l[u++]);
            return c
        }
        getUri(e) {
            return ae(Le((e = xe(this.defaults, e)).baseURL, e.url), e.params, e.paramsSerializer)
        }
    }
    z.forEach(["delete", "get", "head", "options"], (function(e) {
        dt.prototype[e] = function(t, n) {
            return this.request(xe(n || {}, {
                method: e,
                url: t,
                data: (n || {}).data
            }))
        }
    })), z.forEach(["post", "put", "patch"], (function(e) {
        function t(t) {
            return function(n, o, i) {
                return this.request(xe(i || {}, {
                    method: e,
                    headers: t ? {
                        "Content-Type": "multipart/form-data"
                    } : {},
                    url: n,
                    data: o
                }))
            }
        }
        dt.prototype[e] = t(), dt.prototype[e + "Form"] = t(!0)
    }));
    const ut = dt;
    class gt {
        constructor(e) {
            if ("function" != typeof e) throw new TypeError("executor must be a function.");
            let t;
            this.promise = new Promise((function(e) {
                t = e
            }));
            const n = this;
            this.promise.then((e => {
                if (!n._listeners) return;
                let t = n._listeners.length;
                for (; t-- > 0;) n._listeners[t](e);
                n._listeners = null
            })), this.promise.then = e => {
                let t;
                const o = new Promise((e => {
                    n.subscribe(e), t = e
                })).then(e);
                return o.cancel = function() {
                    n.unsubscribe(t)
                }, o
            }, e((function(e, o, i) {
                n.reason || (n.reason = new Ne(e, o, i), t(n.reason))
            }))
        }
        throwIfRequested() {
            if (this.reason) throw this.reason
        }
        subscribe(e) {
            this.reason ? e(this.reason) : this._listeners ? this._listeners.push(e) : this._listeners = [e]
        }
        unsubscribe(e) {
            if (!this._listeners) return;
            const t = this._listeners.indexOf(e); - 1 !== t && this._listeners.splice(t, 1)
        }
        toAbortSignal() {
            const e = new AbortController,
                t = t => {
                    e.abort(t)
                };
            return this.subscribe(t), e.signal.unsubscribe = () => this.unsubscribe(t), e.signal
        }
        static source() {
            let e;
            return {
                token: new gt((function(t) {
                    e = t
                })),
                cancel: e
            }
        }
    }
    const pt = gt,
        ft = {
            Continue: 100,
            SwitchingProtocols: 101,
            Processing: 102,
            EarlyHints: 103,
            Ok: 200,
            Created: 201,
            Accepted: 202,
            NonAuthoritativeInformation: 203,
            NoContent: 204,
            ResetContent: 205,
            PartialContent: 206,
            MultiStatus: 207,
            AlreadyReported: 208,
            ImUsed: 226,
            MultipleChoices: 300,
            MovedPermanently: 301,
            Found: 302,
            SeeOther: 303,
            NotModified: 304,
            UseProxy: 305,
            Unused: 306,
            TemporaryRedirect: 307,
            PermanentRedirect: 308,
            BadRequest: 400,
            Unauthorized: 401,
            PaymentRequired: 402,
            Forbidden: 403,
            NotFound: 404,
            MethodNotAllowed: 405,
            NotAcceptable: 406,
            ProxyAuthenticationRequired: 407,
            RequestTimeout: 408,
            Conflict: 409,
            Gone: 410,
            LengthRequired: 411,
            PreconditionFailed: 412,
            PayloadTooLarge: 413,
            UriTooLong: 414,
            UnsupportedMediaType: 415,
            RangeNotSatisfiable: 416,
            ExpectationFailed: 417,
            ImATeapot: 418,
            MisdirectedRequest: 421,
            UnprocessableEntity: 422,
            Locked: 423,
            FailedDependency: 424,
            TooEarly: 425,
            UpgradeRequired: 426,
            PreconditionRequired: 428,
            TooManyRequests: 429,
            RequestHeaderFieldsTooLarge: 431,
            UnavailableForLegalReasons: 451,
            InternalServerError: 500,
            NotImplemented: 501,
            BadGateway: 502,
            ServiceUnavailable: 503,
            GatewayTimeout: 504,
            HttpVersionNotSupported: 505,
            VariantAlsoNegotiates: 506,
            InsufficientStorage: 507,
            LoopDetected: 508,
            NotExtended: 510,
            NetworkAuthenticationRequired: 511
        };
    Object.entries(ft).forEach((([e, t]) => {
        ft[t] = e
    }));
    const mt = ft,
        ht = function e(t) {
            const o = new ut(t),
                i = n(ut.prototype.request, o);
            return z.extend(i, ut.prototype, o, {
                allOwnKeys: !0
            }), z.extend(i, o, null, {
                allOwnKeys: !0
            }), i.create = function(n) {
                return e(xe(t, n))
            }, i
        }(Ce);
    ht.Axios = ut, ht.CanceledError = Ne, ht.CancelToken = pt, ht.isCancel = Ue, ht.VERSION = "1.7.7", ht.toFormData = te, ht.AxiosError = Y, ht.Cancel = ht.CanceledError, ht.all = function(e) {
        return Promise.all(e)
    }, ht.spread = function(e) {
        return function(t) {
            return e.apply(null, t)
        }
    }, ht.isAxiosError = function(e) {
        return z.isObject(e) && !0 === e.isAxiosError
    }, ht.mergeConfig = xe, ht.AxiosHeaders = De, ht.formToJSON = e => we(z.isHTMLForm(e) ? new FormData(e) : e), ht.getAdapter = ot, ht.HttpStatusCode = mt, ht.default = ht;
    const wt = ht,
        vt = new class {
            #e = "[-]";
            #t = {
                error: "error",
                warn: "warn",
                info: "info",
                verbose: "verbose"
            };
            #n = "info";
            get logLevel() {
                return this.#n
            }
            get logLevels() {
                return this.#t
            }
            setLogLevel(e) {
                Object.hasOwn(this.#t, e) && (this.#n = e)
            }
            initialize(e, t) {
                this.#e = `[${e}]:`, t && "verbose" === t && (this.#n = this.#t.verbose)
            }
            logError(...e) {
                console.error(this.#e, ...e)
            }
            logWarn(...e) {
                this.#n !== this.#t.warn && this.#n !== this.#t.info && this.#n !== this.#t.verbose || console.warn(this.#e, ...e)
            }
            logInfo(...e) {
                this.#n !== this.#t.info && this.#n !== this.#t.verbose || console.info(this.#e, "[INFO]", ...e)
            }
            logDebug(...e) {
                this.#n === this.#t.verbose && console.info(this.#e, "[DEBUG]", ...e)
            }
            logTrace(...e) {
                this.#n === this.#t.verbose && console.info(this.#e, "[TRACE]", ...e)
            }
        },
        Ct = () => localStorage.getItem("utiqStub"),
        yt = e => {
            try {
                return atob(e)
            } catch (t) {
                throw t instanceof DOMException && "InvalidCharacterError" === t.name ? (vt.logError(`Value "${e}" is not valid base64`), t) : (vt.logError(`An error occured when decoding "${e}"`), t)
            }
        },
        bt = ({
            name: e,
            value: t,
            days: n = 90,
            path: o = "/",
            domain: i = ""
        }) => {
            if (!e || null == t || "" === t) return "";
            const r = new Date;
            r.setTime(r.getTime() + 24 * n * 60 * 60 * 1e3);
            const s = `${e}=${t}; expires=${r.toUTCString()};${o?` path=${o};`:""}${i?` domain=${i};`:""}`;
            return vt.logDebug(`Returning new cookie value: ${s}`), s
        },
        Ot = (e, t) => {
            const n = `${t}=`,
                o = e.split(";");
            for (const e of o) try {
                let o = decodeURIComponent(e);
                if (o && o.includes(n)) {
                    for (;
                        " " === o.charAt(0);) o = e.substring(1);
                    if (0 === o.indexOf(n)) {
                        const e = o.substring(n.length, o.length);
                        return vt.logDebug(`Cookie ${t} found. Value ${e}.`), e
                    }
                    return vt.logDebug(`Cookie ${t} found, but the value has not been found. Decoded cookie string: ${JSON.stringify(o)}.`), ""
                }
            } catch (t) {
                e.includes(n) && vt.logDebug(`Cookie can't be decoded string: ${JSON.stringify(e)} throws the error: ${t}`)
            }
            return vt.logDebug(`Decoded cookies string: ${JSON.stringify(o)} does not include ${t} cookie. Returning...`), ""
        },
        Et = (e, t) => {
            try {
                const n = Ot(e, t);
                return yt(n)
            } catch (e) {
                if (e instanceof DOMException && "InvalidCharacterError" === e.name) return vt.logInfo(`Invalid cookie "${t}" is being cleared...`), document.cookie = bt({
                    name: t,
                    value: "none",
                    days: 0
                }), vt.logInfo(`Cookie "${t}" has been cleared.`), "";
                throw e
            }
        };
    var It, Tt = new Uint8Array(16);

    function Dt() {
        if (!It && !(It = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return It(Tt)
    }
    const St = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
    for (var Ut = [], qt = 0; qt < 256; ++qt) Ut.push((qt + 256).toString(16).substr(1));
    const Nt = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                n = (Ut[e[t + 0]] + Ut[e[t + 1]] + Ut[e[t + 2]] + Ut[e[t + 3]] + "-" + Ut[e[t + 4]] + Ut[e[t + 5]] + "-" + Ut[e[t + 6]] + Ut[e[t + 7]] + "-" + Ut[e[t + 8]] + Ut[e[t + 9]] + "-" + Ut[e[t + 10]] + Ut[e[t + 11]] + Ut[e[t + 12]] + Ut[e[t + 13]] + Ut[e[t + 14]] + Ut[e[t + 15]]).toLowerCase();
            if (! function(e) {
                    return "string" == typeof e && St.test(e)
                }(n)) throw TypeError("Stringified UUID is invalid");
            return n
        },
        At = function(e, t, n) {
            var o = (e = e || {}).random || (e.rng || Dt)();
            if (o[6] = 15 & o[6] | 64, o[8] = 63 & o[8] | 128, t) {
                n = n || 0;
                for (var i = 0; i < 16; ++i) t[n + i] = o[i];
                return t
            }
            return Nt(o)
        },
        kt = "utiq_consent_status",
        Pt = "utiq_consent_version",
        Rt = "utiq_consent_version_previous",
        _t = "utiqEligibility",
        $t = e => "string" != typeof e || "" === e ? null : `${e}_logging_level`,
        Lt = {
            Utiq: "Utiq"
        },
        jt = {
            onIdsAvailable: {
                name: "onIdsAvailable",
                fieldsTemplate: [{
                    key: "mtid",
                    isOptional: !1,
                    type: "string"
                }, {
                    key: "atid",
                    isOptional: !1,
                    type: "string"
                }, {
                    key: "attrid",
                    isOptional: !0,
                    type: "string"
                }, {
                    key: "category",
                    isOptional: !1,
                    type: "string"
                }]
            },
            onConsentUpdateFinished: {
                name: "onConsentUpdateFinished",
                fieldsTemplate: [{
                    key: "isConsentGranted",
                    isOptional: !1,
                    type: "boolean"
                }]
            },
            onConsentChanging: {
                name: "onConsentChanging",
                fieldsTemplate: [{
                    key: "isConsentGranted",
                    isOptional: !1,
                    type: "boolean"
                }]
            },
            onInitialised: {
                name: "onInitialised",
                fieldsTemplate: []
            },
            onEligibilityChecked: {
                name: "onEligibilityChecked",
                fieldsTemplate: [{
                    key: "isEligible",
                    isOptional: !1,
                    type: "boolean"
                }]
            },
            onDidomiConsentChanged: {
                name: "onDidomiConsentChanged",
                fieldsTemplate: []
            },
            onConsentManagerStatusChanged: {
                name: "onConsentManagerStatusChanged",
                fieldsTemplate: [{
                    key: "status",
                    isOptional: !1,
                    type: "string"
                }]
            },
            onFlowCompleted: {
                name: "onFlowCompleted",
                fieldsTemplate: [{
                    key: "status",
                    isOptional: !0,
                    type: "string"
                }]
            }
        },
        xt = ({
            fieldsTemplate: e = [],
            validationTargetObject: t,
            logIdentificator: n
        }) => {
            if (!n) return vt.logError("Missing log identificator"), {
                isValid: !1
            };
            if (!t) return vt.logError(`Missing validation target for ${n}`), {
                isValid: !1
            };
            if ("object" != typeof t) return vt.logError(`Wrong type for ${t}`), {
                isValid: !1
            };
            if (null === e) return vt.logError(`Fields template were set to ${e} for ${n} and cannot be validated. Returning with negative validation result...`), {
                isValid: !1
            };
            0 === e.length && vt.logDebug(`No fields template provided for ${n}. Continuing without fields validation...`);
            const o = Object.keys(t),
                i = e.map((e => e.key));
            if (!o.every((e => i.includes(e)))) return vt.logError(`Validation target has more fields than present in ${n} fields template.`), vt.logWarn("Validation target keys:", o), vt.logWarn("Fields template keys:", i), {
                isValid: !1
            };
            const r = [];
            try {
                e.forEach((e => {
                    if ("string" != typeof e.key || "boolean" != typeof e.isOptional || "string" != typeof e.type) return void r.push(`Field template ${JSON.stringify(e)} is of incorrect format for ${n}`);
                    const o = e.key,
                        i = t[o];
                    null != i ? ("array" === e.type ? Array.isArray(i) : typeof i === e.type && !Array.isArray(i)) || r.push(`Field ${e.key} expected type ${e.type}, but got ${typeof t[o]} for ${n}`) : e.isOptional || r.push(`Field ${e.key} is missing for ${n}`)
                }))
            } catch (e) {
                r.push(e.message)
            }
            return r.forEach((e => {
                vt.logError(e)
            })), {
                isValid: 0 === r.length
            }
        },
        Ft = (e, t, n = {}) => {
            const o = ((e, t) => {
                    try {
                        return e === Lt.Utiq ? jt[t].fieldsTemplate : (vt.logError(`Unrecognized environment ${e} for event ${t}`), null)
                    } catch (e) {
                        return vt.logError(`Event ${t} is not defined. Make sure that the event name is correct or create a new event with this name`), null
                    }
                })(t, e),
                {
                    isValid: i
                } = xt({
                    fieldsTemplate: o,
                    validationTargetObject: n,
                    logIdentificator: e
                });
            if (i) {
                const o = window.Utiq?.listeners?.[e] || [];
                if (!Array.isArray(o)) return void vt.logDebug(`Listeners for ${e} in the ${t} environment are not an array. Cannot publish the event...`);
                try {
                    o.forEach((e => {
                        e(n, t)
                    }))
                } catch (n) {
                    vt.logDebug(`Error occurred when processing ${e} listeners in the ${t} environment. Description: ${n}.`)
                }
            }
        };
    let Vt = !1;
    const Gt = (e, t) => {
            var n, o, i;
            const r = {
                Utiq: jt
            };
            if (Array.isArray(e) && (null === (n = null == e ? void 0 : e[0]) || void 0 === n ? void 0 : n.mtid) && (null === (o = null == e ? void 0 : e[0]) || void 0 === o ? void 0 : o.atid)) {
                const {
                    mtid: n,
                    atid: o,
                    attrid: s,
                    category: a
                } = e[0];
                vt.logDebug("Dispatching onIdsAvailable event:", JSON.stringify({
                    mtid: n,
                    atid: o,
                    attrid: s,
                    category: a
                })), vt.logInfo("If you are running the Utiq Web SDK from iOS webview, soon ATT will be required to acquire the atid"), Ft(r[t].onIdsAvailable.name, t, {
                    mtid: n,
                    atid: o,
                    attrid: s,
                    category: a
                }), window.Utiq || (window.Utiq = {}), (i = window.Utiq).data || (i.data = {}), window.Utiq.data.wereIdsDispatched = !0, Vt || (Vt = !0, Ft(r[t].onFlowCompleted.name, t))
            }
        },
        Mt = e => "string" == typeof e && "localStorage" === e ? "localStorage" : "sessionStorage",
        Bt = e => (t, n) => window[Mt(e)].setItem(t, JSON.stringify(n)),
        Ht = e => t => JSON.parse(window[Mt(e)].getItem(t)),
        zt = e => t => window[Mt(e)].removeItem(t),
        Jt = e => ({
            set: Bt(e),
            get: Ht(e),
            remove: zt(e)
        }),
        Wt = e => {
            var t;
            const n = Jt(e.IDCONNECT_STORAGE_TYPE).get(e.IDCONNECT_DATA_STORAGE);
            return null != n ? null === (t = null == n ? void 0 : n.connectId) || void 0 === t ? void 0 : t.idGraph : null
        },
        Kt = (e, t) => {
            const n = () => ((e, t) => {
                const n = document.createElement("script");
                n.setAttribute("id", "utiq__consent-manager"), vt.logTrace(`Calling for consent manager origin with params isLocalEnvironment: ${e} and utiqHost: ${t}...`);
                const o = ((e, t) => e ? window.location.origin : window.Utiq?.config?.consentManagerOrigin ? window.Utiq?.config?.consentManagerOrigin : t)(e, t);
                vt.logDebug(`Setting consent manager from origin ${o}...`), n.src = `${o}/utiqConsentManager.js`, document.head.appendChild(n), vt.logDebug("Consent manager appended to the document head")
            })(e, t);
            (e => {
                var t;
                window.Utiq || (window.Utiq = {}), (t = window.Utiq).API || (t.API = {}), window.Utiq.API.showConsentManager = e
            })(n);
            const o = Et(document.cookie, kt),
                i = null !== sessionStorage.getItem("utiq_ask_me_later") && JSON.parse(sessionStorage.getItem("utiq_ask_me_later"));
            o || i || (vt.logInfo("No consent status cookie found. Showing consent manager popup..."), n())
        };
    const Yt = "utiqDataCallTimestamp",
        Xt = "utiq_consent_shown",
        Qt = () => {
            var e, t;
            let n = localStorage;
            "string" == typeof(null === (e = window.IDCONNECT_CONFIG) || void 0 === e ? void 0 : e.IDCONNECT_STORAGE_TYPE) && "sessionStorage" === window.IDCONNECT_CONFIG.IDCONNECT_STORAGE_TYPE && (n = sessionStorage);
            const o = (null === (t = window.IDCONNECT_CONFIG) || void 0 === t ? void 0 : t.IDCONNECT_DATA_STORAGE) ? window.IDCONNECT_CONFIG.IDCONNECT_DATA_STORAGE : "utiqPass";
            "string" == typeof o && null !== n.getItem(o) && n.removeItem(o), null !== localStorage.getItem(_t) && localStorage.removeItem(_t), null !== localStorage.getItem(Yt) && localStorage.removeItem(Yt), null !== sessionStorage.getItem(Xt) && sessionStorage.removeItem(Xt), vt.logDebug("Cleared IDConnect data from storage")
        },
        Zt = e => {
            try {
                return btoa(e)
            } catch (t) {
                throw t instanceof DOMException && "InvalidCharacterError" === t.name ? (vt.logError(`The value ${e} contained a character that could not be encoded`), t) : (vt.logError(`An error occured when decoding "${e}"`), t)
            }
        },
        en = e => {
            const t = "base_domain_verifier_cookie=cookie",
                n = e.split(".");
            let o = "";
            for (let e = n.length - 1; e >= 0; e--)
                if (o = n.slice(e).join("."), document.cookie = `${t};domain=.${o};`, document.cookie.indexOf(t) > -1) return document.cookie = `${t.split("=")[0]}=;domain=.${o};expires=Thu, 01 Jan 1970 00:00:01 GMT;`, o;
            return vt.logDebug(`Not able to get the base domain of the provided URL: ${e} relatively to the current host`), e.replace("https://utiq.", "").replace("https://", "").replace("https://utiq-test.", "")
        },
        tn = e => {
            vt.logInfo("Data clear request made. Clearing the Utiq data...");
            const t = Et(document.cookie, kt);
            !!t && "false" === t || (document.cookie = bt({
                name: kt,
                value: Zt(!1),
                days: 180,
                domain: en(window.location.hostname)
            }), Ft(jt.onConsentUpdateFinished.name, Lt.Utiq, {
                isConsentGranted: !1
            })), document.cookie = bt({
                name: Pt,
                value: Zt(!1),
                days: 0,
                domain: en(window.location.hostname)
            }), document.cookie = bt({
                name: Rt,
                value: Zt(!1),
                days: 0,
                domain: en(window.location.hostname)
            }), Qt();
            const n = $t(e.toLowerCase()),
                o = Et(document.cookie, n);
            o && "verbose" === o && (document.cookie = bt({
                name: n,
                value: Zt("info"),
                days: 0
            }))
        },
        nn = [{
            key: "listeners",
            isOptional: !0,
            type: "object"
        }, {
            key: "customUtiqHost",
            isOptional: !0,
            type: "string"
        }, {
            key: "consentManagerOrigin",
            isOptional: !0,
            type: "string"
        }, {
            key: "oncePerTimeInterval",
            isOptional: !0,
            type: "number"
        }, {
            key: "customizationOptions",
            isOptional: !0,
            type: "object"
        }, {
            key: "getNewConsentBeforeExpiry",
            isOptional: !0,
            type: "boolean"
        }],
        on = [{
            key: "utiqHost",
            isOptional: !1,
            type: "string"
        }, {
            key: "apiPath",
            isOptional: !1,
            type: "string"
        }, {
            key: "oncePerSession",
            isOptional: !1,
            type: "boolean"
        }],
        rn = {
            name: "Optanon",
            fieldsTemplate: [{
                key: "CMP",
                isOptional: !1,
                type: "string"
            }, {
                key: "useGroups",
                isOptional: !0,
                type: "boolean"
            }, {
                key: "OptanonDelay",
                isOptional: !1,
                type: "number"
            }, {
                key: "cmpUtiqPurposeId",
                isOptional: !1,
                type: "string"
            }, {
                key: "cmpUtiqVendorId",
                isOptional: !1,
                type: "string"
            }, ...on, ...nn],
            groupsString: "groups",
            vendorsString: "genVendors",
            cookieName: "OptanonConsent"
        },
        sn = {
            name: "Didomi",
            fieldsTemplate: [{
                key: "CMP",
                isOptional: !1,
                type: "string"
            }, {
                key: "didomiUtiqPurposeId",
                isOptional: !1,
                type: "string"
            }, {
                key: "didomiUtiqVendorId",
                isOptional: !1,
                type: "string"
            }, ...on, ...nn]
        },
        an = {
            name: "Custom",
            fieldsTemplate: [{
                key: "CMP",
                isOptional: !0,
                type: "string"
            }, {
                key: "consentManagerDataLayer",
                isOptional: !0,
                type: "boolean"
            }, ...on, ...nn]
        },
        ln = "accepted",
        cn = "rejected",
        dn = e => {
            const t = -1 !== e.lastIndexOf(".") ? e.lastIndexOf(".") : e.length,
                n = Number(e.substring(e.indexOf("v") + 1, t)) || null,
                o = Number(e.split(".")[1]) || null;
            return null === n && vt.logDebug("Major version cannot be read from version string:", e), null === o && vt.logDebug("Minor version cannot be read from version string:", e), {
                majorVersion: n,
                minorVersion: o
            }
        },
        un = [1, 2, 3],
        gn = (e, t) => {
            let n;
            if ("" === e || "null" === e || "undefined" === e) {
                if ("string" != typeof t) return;
                t && (n = dn(t).majorVersion)
            } else {
                if (!un.includes(Number(e))) return;
                n = Number(e)
            }
            return n
        },
        pn = ({
            hostname: e,
            processConsentChange: t,
            isConsentGranted: n,
            getValidatedBase64Cookie: o
        }) => {
            if ("boolean" != typeof n) return void vt.logError("Custom CMP - Consent value dispatched with custom CMP event is not a boolean value");
            const i = o(document.cookie, Pt),
                r = o(document.cookie, Rt);
            vt.logDebug(`Processing custom consent value of ${n}...`), vt.logDebug(`Value of consentVersionCookie is ${i}.`), vt.logDebug(`Value of consentVersionPreviousCookie is ${r}.`);
            const s = gn(i, window.Utiq?.data?.popupContent?.version),
                a = gn(r, window.Utiq?.data?.popupContent?.versionPrevious);
            t(n, {
                [e]: {
                    name: "customConsent",
                    value: "utiqConsent",
                    consentParsed: n ? "general:1" : "general:0",
                    consentState: n ? ln : cn,
                    consentVersion: s,
                    consentVersionPrevious: a
                }
            })
        },
        fn = ({
            hostname: e,
            processConsentChange: t,
            config: n,
            consentVersion: o,
            consentVersionPrevious: i
        }) => {
            window.didomiOnReady || (window.didomiOnReady = []), window.didomiOnReady.push((r => {
                const s = r.getUserConsentStatusForPurpose(n.didomiUtiqPurposeId),
                    a = r.getUserConsentStatusForVendor(n.didomiUtiqVendorId),
                    l = Boolean(s && a);
                vt.logDebug(`Processing Didomi consent value of ${l}...`), t(l, {
                    [e]: {
                        name: "didomiConsent",
                        value: `purposeConsent=${s};vendorConsent=${a}`,
                        consentParsed: l ? "true" : "false",
                        consentState: l ? ln : cn,
                        consentVersion: o,
                        consentVersionPrevious: i
                    }
                })
            })), vt.logDebug("Consent processing attached to Didomi SDK didomiOnReady function...")
        },
        mn = (e, t, n) => {
            window.didomiOnReady = window.didomiOnReady || [], window.didomiOnReady.push((function(o) {
                const i = o.openTransaction();
                e ? (i.enablePurpose(t), i.enableVendor(n)) : (i.disablePurpose(t), i.disableVendor(n)), i.commit()
            }))
        },
        hn = () => {
            var e, t, n;
            const o = null === (n = null === (t = null === (e = window.Optanon) || void 0 === e ? void 0 : e.GetDomainData) || void 0 === t ? void 0 : t.call(e)) || void 0 === n ? void 0 : n.GeneralVendors;
            return Array.isArray(o) && o.length > 0
        },
        wn = ({
            cookie: e,
            purposeId: t,
            vendorId: n
        }) => {
            const o = (() => {
                const n = new URLSearchParams(e).get(rn.groupsString);
                return !!(null == n ? void 0 : n.includes(`${t}:1`)) || !(null == n ? void 0 : n.includes(`${t}:0`)) && null
            })();
            vt.logDebug("Purpose consent status:", o);
            const i = (() => {
                if (!hn()) return vt.logDebug("Vendors are disabled. Vendor consent is being defaulted to accepted state..."), !0;
                const t = new URLSearchParams(e).get(rn.vendorsString);
                return !!(null == t ? void 0 : t.includes(`${n}:1`)) || !(null == t ? void 0 : t.includes(`${n}:0`)) && null
            })();
            vt.logDebug("Vendor consent status:", i);
            const r = null === o || null === i ? null : o && i;
            return vt.logDebug("Computed consent status:", r), {
                isConsentGranted: r
            }
        },
        vn = ({
            hostname: e,
            readCookie: t,
            processConsentChange: n,
            config: o,
            consentVersion: i,
            consentVersionPrevious: r
        }) => {
            const s = t(document.cookie, rn.cookieName);
            vt.logInfo("Processing OptanonConsent cookie with value: ", {
                cookie: s
            });
            const a = window.Optanon ? 0 : 200;
            setTimeout((() => {
                const {
                    isConsentGranted: t
                } = s ? wn({
                    cookie: s,
                    purposeId: o.cmpUtiqPurposeId,
                    vendorId: o.cmpUtiqVendorId
                }) : {
                    isConsentGranted: !1
                };
                n(t, {
                    [e]: {
                        name: "optanonConsent",
                        value: `optanonConsent=${t}`,
                        consentParsed: t ? `${o.cmpUtiqPurposeId}:1` : `${o.cmpUtiqPurposeId}:0`,
                        consentState: t ? ln : cn,
                        consentVersion: i,
                        consentVersionPrevious: r
                    }
                })
            }), a)
        },
        Cn = "consent.onetrust",
        yn = (e = !1) => {
            if (!0 === e) return 0;
            const t = window.Utiq?.config?.connectionEligibilityRetryInterval;
            return 6e4 * (Number.isInteger(t) && t >= 0 ? t : 2)
        },
        bn = e => {
            var t;
            const n = null === (t = window.Utiq) || void 0 === t ? void 0 : t.transactionId;
            if (n) {
                const t = e.includes("?") ? "&" : "?";
                return `${e}${t}transactionId=${n}${(()=>{const e=Ct();return e?`&x-cryptip=${e}`:""})()}`
            }
            return vt.logDebug("No transactionId found in Utiq namespace. Returning original URL..."), e
        };
    const On = e => {
            return t = void 0, n = [e], i = function*({
                utiqHost: e,
                retryInterval: t,
                ignoreInterval: n = !1,
                eligibilityCheckTrigger: o = "unspecified"
            }) {
                var i;
                let r = JSON.parse(localStorage.getItem(_t));
                const s = null == r ? void 0 : r.retryEligibilityCheckTime;
                if (n || !r || "number" == typeof s && s < Date.now()) {
                    const {
                        protocol: n,
                        domain: s,
                        path: a
                    } = (e => {
                        const t = e.split("://");
                        if (!Array.isArray(t) || 2 !== t.length) return vt.logError(`Incorrect URI provided: ${e}`), {
                            protocol: null,
                            domain: null,
                            path: null
                        };
                        const [n] = t, o = t[1].split("/");
                        if (!Array.isArray(o) || "" === o[0]) return vt.logError(`Incorrect URI provided: ${e}`), {
                            protocol: n,
                            domain: null,
                            path: null
                        };
                        const [i] = o;
                        return {
                            protocol: n,
                            domain: i,
                            path: o[1] ? o.slice(1).join("/") : null
                        }
                    })(`${e}/op/idconnect`), l = r ? "" : "&initial=true";
                    if (!n || !s || !a) return vt.logError(`Data missing from Utiq host - protocol: ${n}, domain: ${s}, path: ${a}`), r;
                    let c = !1;
                    const d = bn(`${n}://${s}/${a}/mno-precheck?type=${o}${l}`);
                    try {
                        const e = yield wt({
                            method: "get",
                            url: d,
                            timeout: 4e3
                        });
                        200 === (null == e ? void 0 : e.status) && "ok" === (null === (i = null == e ? void 0 : e.data) || void 0 === i ? void 0 : i.status) && (c = !0)
                    } catch (e) {
                        vt.logError(e)
                    } finally {
                        vt.logInfo(c ? "Successful mno-precheck call for an eligible connection..." : "Failed mno-precheck call for not eligible connection...");
                        const e = Number.isInteger(t) && t >= 0 ? t : 12e4;
                        r = {
                            isEligible: c,
                            eligibilityCheckTime: Date.now(),
                            retryEligibilityCheckTime: c ? null : Date.now() + e
                        }
                    }
                }
                return r
            }, new((o = void 0) || (o = Promise))((function(e, r) {
                function s(e) {
                    try {
                        l(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function a(e) {
                    try {
                        l(i.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function l(t) {
                    var n;
                    t.done ? e(t.value) : (n = t.value, n instanceof o ? n : new o((function(e) {
                        e(n)
                    }))).then(s, a)
                }
                l((i = i.apply(t, n || [])).next())
            }));
            var t, n, o, i
        },
        En = ({
            connectionEligibilityData: e,
            onEligibilityCheckedCallback: t
        }) => {
            "object" == typeof e && 0 !== Object.keys(e).length && "boolean" == typeof e.isEligible && (localStorage.setItem(_t, JSON.stringify(e)), vt.logInfo(`Written new ${_t} local storage entry: ${JSON.stringify(e)}`), "function" == typeof t && t(e.isEligible))
        },
        In = async ({
            utiqHost: e,
            onEligibilityCheckedCallback: t,
            eligibilityCheckTrigger: n = "unspecified",
            ignoreInterval: o = !1
        }) => {
            const i = await On({
                    utiqHost: e,
                    retryInterval: yn(o),
                    ignoreInterval: o,
                    eligibilityCheckTrigger: n
                }),
                r = Boolean(i?.isEligible);
            return vt.logDebug(`Eligibility check done. Connection eligible: ${r}`), En({
                connectionEligibilityData: i,
                onEligibilityCheckedCallback: t
            }), r
        }, Tn = ({
            payload: e,
            config: t,
            environment: n
        }) => {
            Object.keys(e).forEach((t => {
                void 0 !== e[t].value && e[t].value || delete e[t]
            })), Object.keys(e).length < 1 ? vt.logError("Consent payload had no defined entries. Consent call will not be made.") : (async ({
                consentUrl: e,
                payload: t
            }) => {
                await wt({
                    method: "post",
                    url: e,
                    data: t,
                    withCredentials: !0,
                    headers: {
                        "Content-Type": "application/json"
                    },
                    timeout: 4e3
                }).catch((e => {
                    vt.logError("Error occurred on idConnect consent call")
                }))
            })({
                consentUrl: bn(`${t.utiqHost}${t.apiPath}`),
                payload: e
            }).then((() => {
                "false" === Et(document.cookie, kt) && (async e => {
                    const t = bn(`${e}/op/idconnect/data`);
                    return (await wt({
                        method: "get",
                        url: t,
                        withCredentials: !0,
                        timeout: 4e3
                    }).catch((e => {
                        vt.logError("Error occurred on data call: ", e)
                    }))).status
                })(t.utiqHost).then((e => {
                    if (204 === e) try {
                        vt.logInfo("Received clear signal from the API call. Clearing the Utiq data..."), tn(n)
                    } catch (e) {
                        vt.logError(`Clearing Utiq data failed. Reason: ${e.message}`)
                    }
                }))
            }))
        }, Dn = e => {
            const t = e.split("://"),
                n = t[0] || null,
                o = t[1] ? t[1].split("/") : null;
            return {
                protocol: n,
                domain: o[0] || null,
                path: o[1] ? o.slice(1).join("/") : null
            }
        }, Sn = (e, t) => {
            "function" == typeof e && e(t)
        }, Un = {}, qn = ({
            iFrameUrl: e,
            iFrameId: t = "GENERIC",
            isSrcDocUsed: n = !1,
            suppressTransactionId: o = !1
        }) => {
            if (!e) return void vt.logError(`Missing iframe URL. Unable to create iFrame for ID ${t}`);
            const i = o ? e : bn(e),
                r = n ? "src" : "srcdoc",
                s = t;
            Un[s] ? (n ? Un[s].srcdoc = e : Un[s].src = i, Un[s].removeAttribute(r)) : Un[s] = ((e, t, n) => {
                if (document.body) {
                    const o = document.body.appendChild(document.createElement("div"));
                    o.style.position = "absolute", o.style.top = "0", o.style.left = "0", o.style.width = "1px", o.style.height = "1px", o.style.display = "none";
                    const i = ((e, t, n) => {
                        const o = document.createElement("iframe");
                        return o.setAttribute("id", t), n ? o.setAttribute("srcdoc", `${e}`) : o.setAttribute("src", `${e}`), o.setAttribute("frameborder", "0"), o.setAttribute("height", "1"), o.setAttribute("width", "1"), o
                    })(e, t, n);
                    return o.appendChild(i), i
                }
            })(n ? e : i, t, n)
        }, Nn = () => {
            const e = {
                isEligible: !1,
                eligibilityCheckTime: Date.now(),
                retryEligibilityCheckTime: Date.now() + 6048e5
            };
            En({
                connectionEligibilityData: e,
                onEligibilityCheckedCallback: e => Ft(jt.onEligibilityChecked.name, Lt.Utiq, {
                    isEligible: e
                })
            }), vt.logError("Telco identification call failed. Identification will be checked again in 7 days...")
        }, An = () => {
            const e = ["https://service.test.utiq-aws.net", "https://service.utiq.com"].includes(window.Utiq.config.customUtiqHost),
                {
                    path: t
                } = Dn(window.location.href);
            return e && "pages/troubleshooting" === t
        }, kn = (e, t) => !!(null == e ? void 0 : e.isTroubleShooting) && (vt.logDebug(`troubleshooting flow detected on template handler ${t}, no data will be returned`), Ft(jt.onFlowCompleted.name, Lt.Utiq, {
            status: t
        }), !0), Pn = e => {
            var t, n;
            const o = null === (n = null === (t = window.Utiq) || void 0 === t ? void 0 : t.config) || void 0 === n ? void 0 : n[{
                Utiq: "customUtiqHost"
            } [e]];
            return null != o && "" !== o ? o : null
        }, Rn = (e, t, n) => {
            var o, i, r;
            if (e) return vt.logDebug(`Custom Utiq host config entry detected. Utiq host: ${e}`), e;
            let s = "utiq";
            t ? s = "utiq-test" : (null === (o = window.IDCONNECT_CONFIG) || void 0 === o ? void 0 : o.IDCONNECT_API_HOST) && "string" == typeof(null === (i = window.IDCONNECT_CONFIG) || void 0 === i ? void 0 : i.IDCONNECT_API_HOST) && 0 === (null === (r = window.IDCONNECT_CONFIG) || void 0 === r ? void 0 : r.IDCONNECT_API_HOST.indexOf("https://tmi.")) && (s = "tmi");
            const a = `https://${s}.${n}`;
            return vt.logDebug(`Extracted Utiq host: ${a}`), a
        }, _n = () => {
            const e = window.location.origin.includes("http://") && window.location.origin.includes(":8080");
            vt.logDebug(`Is this a local environment origin: ${e}`);
            const t = window.location.origin.includes("//utiq-test.") || e;
            vt.logDebug(`Is this a local or UAT environment the origin: ${t}`);
            const n = new URLSearchParams(window.location.search).get("host");
            vt.logDebug(`URL parameter host: ${n}`);
            const o = Pn(Lt.Utiq),
                i = en(o || window.location.hostname),
                r = t && n ? n : i;
            return vt.logDebug(`Extracted host: ${r}`), {
                host: r,
                isLocalEnvironment: e,
                isLocalOrUatEnvironment: t,
                utiqHost: Rn(o, t, i)
            }
        };
    const $n = (e, t) => {
        return n = void 0, o = void 0, r = function*() {
            const n = (window.location.origin.includes("http://") && window.location.origin.includes(":8080") ? window.location.origin : e) + (e => {
                const t = `/${e.type}`,
                    n = `/${e.filename}`;
                switch (e.type) {
                    case "translations": {
                        const o = "v1";
                        return t + `/${e.version?e.version:o}` + `/${e.language}` + n
                    }
                    case "templates":
                        return `/domains/${e.host.replaceAll(".","-")}` + n;
                    case "pages": {
                        const o = "v1";
                        return t + `/${e.version?e.version:o}` + `/${e.language}` + n
                    }
                    default:
                        return t + n
                }
            })(t);
            try {
                return (yield wt.get(n, {
                    method: "get",
                    url: n,
                    timeout: 4e3
                })).data
            } catch (e) {
                vt.logError("Error occurred on content request: ", e)
            }
            return null
        }, new((i = void 0) || (i = Promise))((function(e, t) {
            function s(e) {
                try {
                    l(r.next(e))
                } catch (e) {
                    t(e)
                }
            }

            function a(e) {
                try {
                    l(r.throw(e))
                } catch (e) {
                    t(e)
                }
            }

            function l(t) {
                var n;
                t.done ? e(t.value) : (n = t.value, n instanceof i ? n : new i((function(e) {
                    e(n)
                }))).then(s, a)
            }
            l((r = r.apply(n, o || [])).next())
        }));
        var n, o, i, r
    };
    const Ln = e => {
        return t = void 0, n = [e], i = function*({
            host: e,
            isLocalOrUatEnvironment: t
        }) {
            var n, o, i, r, s;
            if ("object" == typeof(null === (o = null === (n = null === window || void 0 === window ? void 0 : window.Utiq) || void 0 === n ? void 0 : n.data) || void 0 === o ? void 0 : o.popupContent) && (null === (r = null === (i = null === window || void 0 === window ? void 0 : window.Utiq) || void 0 === i ? void 0 : i.data) || void 0 === r ? void 0 : r.popupContent.length) > 0) return window.Utiq.data.popupContent;
            const a = (e => e ? "https://utiq-http-resources.test.utiq-aws.net" : "https://utiqcontent.com")(t),
                l = {
                    type: "templates",
                    filename: "templateData.json",
                    host: e
                },
                c = yield $n(a, l);
            if (window.Utiq || (window.Utiq = {}), (s = window.Utiq).data || (s.data = {}), c) window.Utiq.data.popupContent = c;
            else {
                vt.logInfo("Template not found. Requesting the default Utiq consent manager template...");
                const e = {
                        type: "templates",
                        filename: "templateData.json",
                        host: "default"
                    },
                    t = yield $n(a, e);
                t ? window.Utiq.data.popupContent = t : (vt.logInfo("Default template not found. Setting the placeholder Utiq consent manager template..."), window.Utiq.data.popupContent = {
                    websiteLogoFilename: "",
                    defaultCountryCode: "en",
                    website: "[INSERT WEBSITE]",
                    groupCompanyName: "[INSERT GROUP COMPANY NAME]",
                    colorTheme: "default"
                })
            }
            return window.Utiq.data.popupContent
        }, new((o = void 0) || (o = Promise))((function(e, r) {
            function s(e) {
                try {
                    l(i.next(e))
                } catch (e) {
                    r(e)
                }
            }

            function a(e) {
                try {
                    l(i.throw(e))
                } catch (e) {
                    r(e)
                }
            }

            function l(t) {
                var n;
                t.done ? e(t.value) : (n = t.value, n instanceof o ? n : new o((function(e) {
                    e(n)
                }))).then(s, a)
            }
            l((i = i.apply(t, n || [])).next())
        }));
        var t, n, o, i
    };
    const jn = e => {
            return t = void 0, n = [e], i = function*({
                idConnectConfig: e,
                msg: t,
                idConnectConfiguration: n,
                environment: o
            }) {
                var i, r, s;
                if (vt.logDebug(`Received Utiq data call message with ${JSON.stringify(t)}`), "DONE" !== t.status) return vt.logDebug(`Message status different than DONE. Status: ${t.status}`), void vt.logDebug("Stopping the calls flow...");
                const {
                    body: a
                } = t;
                if (!a) return void vt.logDebug("Message body is not present. Terminating the flow...");
                const {
                    data: l
                } = a;
                e.connectId = l;
                const {
                    shouldStopFlow: c
                } = yield((e, t) => {
                    return n = void 0, o = void 0, r = function*() {
                        var n, o, i, r, s, a, l, c, d, u, g, p;
                        if (vt.logDebug("Config entry getNewConsentBeforeExpiry set to:", null === (o = null === (n = null === window || void 0 === window ? void 0 : window.Utiq) || void 0 === n ? void 0 : n.config) || void 0 === o ? void 0 : o.getNewConsentBeforeExpiry), !1 === (null === (r = null === (i = null === window || void 0 === window ? void 0 : window.Utiq) || void 0 === i ? void 0 : i.config) || void 0 === r ? void 0 : r.getNewConsentBeforeExpiry)) return {
                            shouldStopFlow: !1
                        };
                        if (Array.isArray(null == e ? void 0 : e.idGraph)) return vt.logDebug("idGraph present. No reprompt will be issued"), {
                            shouldStopFlow: !1
                        };
                        const f = Jt(t.IDCONNECT_STORAGE_TYPE).get(t.IDCONNECT_DATA_STORAGE);
                        if (f && f.connectId && Array.isArray(f.connectId.idGraph) && f.connectId.idGraph.length > 0 && "mobile" === f.connectId.idGraph[0].category) {
                            vt.logDebug("idGraph is not present in the response connectId and the current idGraph has mobile category. Proceeding with further checks...");
                            const e = Et(document.cookie, "utiq_consent_version");
                            if ("" === e) {
                                const {
                                    host: e,
                                    isLocalOrUatEnvironment: t
                                } = _n(), n = yield Ln({
                                    host: e,
                                    isLocalOrUatEnvironment: t
                                });
                                return "number" == typeof Number(n.versionPrevious) && Number(n.versionPrevious) >= 3 ? (vt.logDebug(`Consent version cookie is not present, but the template data versionPrevious is ${n.versionPrevious}. Continuing the flow without the reprompt...`), {
                                    shouldStopFlow: !1
                                }) : (vt.logDebug(`No consent version cookie present with versionPrevious ${n.versionPrevious}. Clearing the data and showing the consent manager...`), "function" == typeof(null === (a = null === (s = window.Utiq) || void 0 === s ? void 0 : s.API) || void 0 === a ? void 0 : a.handleDataClear) && window.Utiq.API.handleDataClear(), "function" == typeof(null === (c = null === (l = window.Utiq) || void 0 === l ? void 0 : l.API) || void 0 === c ? void 0 : c.showConsentManager) && window.Utiq.API.showConsentManager(), {
                                    shouldStopFlow: !0
                                })
                            }
                            return "number" == typeof Number(e) && Number(e) >= 3 ? {
                                shouldStopFlow: !1
                            } : (vt.logDebug("Consent version cookie is v1 or v2. Clearing the data and showing the consent manager..."), "function" == typeof(null === (u = null === (d = window.Utiq) || void 0 === d ? void 0 : d.API) || void 0 === u ? void 0 : u.handleDataClear) && window.Utiq.API.handleDataClear(), "function" == typeof(null === (p = null === (g = window.Utiq) || void 0 === g ? void 0 : g.API) || void 0 === p ? void 0 : p.showConsentManager) && window.Utiq.API.showConsentManager(), {
                                shouldStopFlow: !0
                            })
                        }
                        return vt.logDebug("Current utiqPass data is not suitable for consent reprompt. Continuing with the flow..."), {
                            shouldStopFlow: !1
                        }
                    }, new((i = void 0) || (i = Promise))((function(e, t) {
                        function s(e) {
                            try {
                                l(r.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function a(e) {
                            try {
                                l(r.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function l(t) {
                            var n;
                            t.done ? e(t.value) : (n = t.value, n instanceof i ? n : new i((function(e) {
                                e(n)
                            }))).then(s, a)
                        }
                        l((r = r.apply(n, o || [])).next())
                    }));
                    var n, o, i, r
                })(l, n);
                if (!c)
                    if (l && !((e, t) => {
                            if (Array.isArray(null == e ? void 0 : e.consents)) return !0;
                            const n = Jt(t.IDCONNECT_STORAGE_TYPE).get(t.IDCONNECT_DATA_STORAGE);
                            return Boolean(n && n.connectId && Array.isArray(n.connectId.consents) && n.connectId.consents.length > 0 && n.connectId.consents[0].domain && n.connectId.consents[0].name && n.connectId.consents[0].value)
                        })(l, n) && "function" == typeof(null === (r = null === (i = window.Utiq) || void 0 === i ? void 0 : i.functions) || void 0 === r ? void 0 : r.dispatchConsentCall) && window.Utiq.functions.dispatchConsentCall(), e.connectId.value || vt.logDebug("connectId value is not present for data message handler..."), l && !(e => {
                            var t;
                            return !(!Array.isArray(null == e ? void 0 : e.idGraph) || !Boolean(null === (t = null == e ? void 0 : e.idGraph[0]) || void 0 === t ? void 0 : t.mtid))
                        })(l) && (null === (s = e.connectId) || void 0 === s ? void 0 : s.value)) {
                        vt.logDebug("data call returns no martechpass, deleting utiqPass from local storage"), Jt(n.IDCONNECT_STORAGE_TYPE).remove(n.IDCONNECT_DATA_STORAGE);
                        const t = (() => {
                                const e = An();
                                return e && vt.logDebug("troubleshooting service url detected, no data will be returned"), e ? "&diagnostic=true" : ""
                            })(),
                            i = `${e.protocol}://${e.domain}/${e.path}/mno-selector?d=${new URL(n.IDCONNECT_API_HOST).hostname}${t}`;
                        qn({
                            iFrameUrl: i,
                            iFrameId: "MNOSELECTOR",
                            environment: o
                        })
                    } else(e => {
                        const t = {
                            connectId: e.connectId,
                            ids: {
                                source: {
                                    connectId: e.connectId,
                                    domain: e.domain,
                                    umdid: e.umdid,
                                    originalUmdidCookie: e.originalUmdidCookie,
                                    dataOriginalUmdidCookie: e.dataOriginalUmdidCookie
                                },
                                target: {
                                    connectId: null,
                                    domain: null,
                                    umdid: null,
                                    umdidCookie: null
                                }
                            }
                        };
                        if (Array.isArray(e.connectId.idGraph))
                            for (const n of e.connectId.idGraph) void 0 !== n.mtid && (t.connectStatus = "OK");
                        Sn(e.callbackSuccess, t)
                    })(e)
            }, new((o = void 0) || (o = Promise))((function(e, r) {
                function s(e) {
                    try {
                        l(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function a(e) {
                    try {
                        l(i.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function l(t) {
                    var n;
                    t.done ? e(t.value) : (n = t.value, n instanceof o ? n : new o((function(e) {
                        e(n)
                    }))).then(s, a)
                }
                l((i = i.apply(t, n || [])).next())
            }));
            var t, n, o, i
        },
        xn = Object.freeze({
            OK: 200,
            Found: 302,
            TemporaryRedirect: 307
        }),
        Fn = Object.freeze({
            Stub: "stub",
            MspProxy: "mspProxy",
            UtiqCrossDomain: "utiqCrossDomain",
            Token: "token",
            Saml: "saml"
        }),
        Vn = "Verify origin:",
        Gn = ({
            idConnectConfig: e,
            environment: t,
            callbackSuccess: n,
            idConnectConfiguration: o
        }) => {
            (e => {
                var t, n;
                const o = Jt(e.IDCONNECT_STORAGE_TYPE).get(e.IDCONNECT_DATA_STORAGE),
                    i = Jt(e.IDCONNECT_STORAGE_TYPE).get(e.IDCONNECT_DATA_STORAGE);
                return (null == i ? void 0 : i.umid) && (null === (n = null === (t = null == o ? void 0 : o.ids) || void 0 === t ? void 0 : t.target) || void 0 === n ? void 0 : n.umdid) ? Zt(`${o.ids.target.umdid}|${i.umid}|1`) : null
            })(o) || (vt.logDebug("Setting initial ID Connect callbacks, listeners and data call"), e.callbackSuccess = n, void 0 !== window.Utiq.idConnectMessageListener && (vt.logDebug("IDconnect data call listener already defined. Removing the listener..."), window.removeEventListener("message", window.Utiq.idConnectMessageListener)), "Utiq" === t && "utiq" === o.IDCONNECT_TYPE && (vt.logDebug("Recreating IDconnect data call listener..."), window.Utiq.idConnectMessageListener = (({
                idConnectConfig: e,
                idConnectConfiguration: t,
                environment: n
            }) => o => {
                vt.logDebug("Message is being handled");
                const i = t.IDCONNECT_DOMAIN_STORAGE_TRANSLATION && t.IDCONNECT_DOMAIN_STORAGE_TRANSLATION[e.mnoSelectorDomain] ? t.IDCONNECT_DOMAIN_STORAGE_TRANSLATION[e.mnoSelectorDomain] : e.mnoSelectorDomain;
                if (!(({
                        origin: e,
                        domain: t,
                        mnoSelectorDomain: n,
                        protocol: o
                    }) => {
                        const i = Boolean(e),
                            r = window.location.origin === e,
                            s = !!t && `${o}://${t}` === e,
                            a = !!n && `${o}://${n}` === e;
                        vt.logDebug(Vn, `Origin ${e} is defined -> ${i}`), vt.logDebug(Vn, `Current domain to verify: ${window.location.origin} -> ${r}`), vt.logDebug(Vn, `IdConnect domain to verify: ${t} -> ${s}`), vt.logDebug(Vn, `MNO domain to verify: ${n} -> ${a}`);
                        const l = i && (r || s || a);
                        return vt.logDebug(`Origin is verified - ${l}`), l
                    })({
                        origin: o.origin,
                        domain: e.domain,
                        mnoSelectorDomain: i,
                        protocol: e.protocol
                    })) return void vt.logDebug("Origin does not include current or next best domain. Protocol:", e.protocol, "; domain:", e.domain, "Event origin:", o.origin);
                if (!(null == o ? void 0 : o.data)) return void vt.logDebug("Message event had no data");
                let r;
                try {
                    r = JSON.parse(o.data)
                } catch (e) {
                    return void vt.logDebug(`Error when parsing event message: ${e}`)
                }
                if (r.msgType) switch (r.msgType) {
                    case "GETDATA":
                        (({
                            idConnectConfig: e,
                            msg: t,
                            idConnectConfiguration: n,
                            environment: o
                        }) => {
                            vt.logDebug(`Received data call message with ${JSON.stringify(t)}`), "utiq" === n.IDCONNECT_TYPE ? jn({
                                idConnectConfig: e,
                                msg: t,
                                idConnectConfiguration: n,
                                environment: o
                            }) : vt.logWarn(`Cannot call getDataMessageUtiq due to environment ${o} and IDCONNECT_TYPE ${n.IDCONNECT_TYPE} `)
                        })({
                            idConnectConfig: e,
                            msg: r,
                            idConnectConfiguration: t,
                            environment: n
                        });
                        break;
                    case "CONNECT":
                        (({
                            idConnectConfig: e,
                            msg: t,
                            event: n,
                            idConnectConfiguration: o,
                            environment: i
                        }) => {
                            var r, s;
                            switch (vt.logDebug(`Received connect call message with ${JSON.stringify(t)}`), t.status) {
                                case "SEND": {
                                    const t = {
                                        msgType: "CONNECT",
                                        status: "EXCHANGE",
                                        data: {
                                            transactionId: e.transactionId,
                                            connectId: e.connectId.value,
                                            connectDomain: e.connectId.domain,
                                            umdid: e.umdid
                                        }
                                    };
                                    n.source.postMessage(JSON.stringify(t), "*");
                                    break
                                }
                                case "NOUMDID": {
                                    const t = {
                                        connectId: e.connectId,
                                        ids: {
                                            source: {
                                                connectId: e.connectId,
                                                domain: e.domain,
                                                umdid: e.umdid,
                                                originalUmdidCookie: e.originalUmdidCookie,
                                                dataOriginalUmdidCookie: e.dataOriginalUmdidCookie
                                            },
                                            target: {
                                                connectId: null,
                                                domain: null,
                                                umdid: null,
                                                umdidCookie: null
                                            }
                                        },
                                        connectStatus: "NOUMDID"
                                    };
                                    Sn(e.callbackSuccess, t);
                                    break
                                }
                                case "DONE": {
                                    if (i === Lt.Utiq && "NotCreated" === (null === (s = null === (r = null == t ? void 0 : t.body) || void 0 === r ? void 0 : r.status) || void 0 === s ? void 0 : s.StatusC1)) {
                                        if (kn(t, "error")) return;
                                        return void Nn()
                                    }
                                    if (o.IDCONNECT_ALLOW_TOKEN_DATA_CALL && o.IDCONNECT_ALLOW_TOKEN_DATA_CALL_COUNTER && e.dataCallCounter <= o.IDCONNECT_ALLOW_TOKEN_DATA_CALL_COUNTER) {
                                        e.dataCallCounter++;
                                        const t = `${e.protocol}://${e.domain}/${e.path}/data`;
                                        qn({
                                            iFrameUrl: t,
                                            iFrameId: "GETDATA",
                                            environment: i
                                        })
                                    }
                                    t.body.ids.source.originalUmdidCookie = e.originalUmdidCookie;
                                    const n = {
                                        connectId: e.connectId,
                                        ids: t.body.ids,
                                        connectStatus: t.body.status.StatusC1
                                    };
                                    Sn(e.callbackSuccess, n);
                                    break
                                }
                                case "ERROR":
                                    if (i === Lt.Utiq) {
                                        if (kn(t, "error")) return;
                                        Nn()
                                    }
                                    break;
                                case "NOLOCALSTORAGEACCESS":
                                    return;
                                default:
                                    vt.logError(`Unsupported connect message status: ${t.status}. Stopping the flow...`)
                            }
                        })({
                            idConnectConfig: e,
                            msg: r,
                            event: o,
                            idConnectConfiguration: t,
                            environment: n
                        });
                        break;
                    case "MNOSELECTOR":
                        ((e, t, n, o) => {
                            var i;
                            if (t.body)
                                if (Array.isArray(n.IDCONNECT_ALLOWED_USE_CASES))
                                    if (n.IDCONNECT_ALLOWED_USE_CASES.includes(t.body.useCase))
                                        if (t.body.url)
                                            if (null === (i = e.connectId) || void 0 === i ? void 0 : i.value) switch (e.useCase = t.body.useCase, e.mnoSelectorDomain = t.body.url.split("/")[2], e.useCase) {
                                                case Fn.Stub:
                                                    wt({
                                                        method: "get",
                                                        url: t.body.url,
                                                        timeout: 4e3
                                                    }).then((t => {
                                                        if ([xn.OK, xn.Found, xn.TemporaryRedirect].includes(t.status)) {
                                                            e.token = t.data.token;
                                                            const n = An() ? "&diagnostic=true" : "",
                                                                i = `${e.protocol}://${e.mnoSelectorDomain}/${e.path}/tmi-stub?c=${e.connectId.value}&token=${e.token}&d=${e.domain}${n}`;
                                                            qn({
                                                                iFrameUrl: i,
                                                                iFrameId: "UTIQSTUB",
                                                                environment: o
                                                            })
                                                        }
                                                    })).catch((e => {
                                                        vt.logError("Error occurred on idConnect consent call")
                                                    }));
                                                    break;
                                                case Fn.MspProxy:
                                                case Fn.Saml:
                                                case Fn.UtiqCrossDomain:
                                                    qn({
                                                        iFrameUrl: t.body.url,
                                                        environment: o
                                                    });
                                                    break;
                                                case Fn.Token:
                                                    qn({
                                                        iFrameUrl: t.body.url,
                                                        iFrameId: "IDENT",
                                                        environment: o
                                                    });
                                                    break;
                                                default:
                                                    vt.logError(`Unsupported idConnect ${e.useCase} use case provided`)
                                            } else vt.logDebug("No connectId cookie value found on mno selector message handler. Terminating the flow...");
                                            else vt.logDebug("No URL in message body. Terminating the flow...");
                            else vt.logDebug(`MNO Use Case ${t.body.useCase} not defined in IDCONNECT_ALLOWED_USE_CASES. Terminating the flow...`);
                            else vt.logDebug("IDCONNECT_ALLOWED_USE_CASES is not an array of strings. Terminating the flow...");
                            else vt.logDebug("Message body is not present. Terminating the flow...")
                        })(e, r, t, n);
                        break;
                    case "SETCOOKIEDOMAIN":
                        if (kn(r, "setCookieDomain")) return;
                        ((e, t) => {
                            void 0 !== e.SetCookieDomain && "" !== e.SetCookieDomain && qn({
                                iFrameUrl: yt(e.SetCookieDomain),
                                iFrameId: "SetCookieDomain",
                                environment: t
                            })
                        })(r, n);
                        break;
                    default:
                        vt.logWarn(`Received unsupported message type ${r.msgType}`)
                } else vt.logDebug(`Caught and discarded message with data, but empty message type: ${r.msgType}.`)
            })({
                idConnectConfig: e,
                idConnectConfiguration: o,
                environment: t
            }), vt.logDebug("IDconnect data call listener recreated.")), (() => {
                var e, t, n, o, i, r;
                vt.logDebug("Checking if data call should be made...");
                const s = null === (r = null === (i = null === (o = null === (n = null === (t = null === (e = window.Utiq) || void 0 === e ? void 0 : e.data) || void 0 === t ? void 0 : t.clientConfig) || void 0 === n ? void 0 : n.CALLS_CONFIG) || void 0 === o ? void 0 : o.conditions) || void 0 === i ? void 0 : i.timeConditions) || void 0 === r ? void 0 : r.oncePerTimeInterval;
                if (!s) return vt.logDebug("Interval setting is not present. Removing utiqDataCallTimestamp and making data call..."), localStorage.removeItem("utiqDataCallTimestamp"), !0;
                const a = Date.now(),
                    l = JSON.parse(localStorage.getItem("utiqDataCallTimestamp"));
                return l ? l && l + parseInt(String(s), 10) < a ? (vt.logDebug("Time interval passed. It should invoke data call and update utiqDataCallTimestamp time..."), !0) : (vt.logDebug("Local Storage timestamp found. Data call will not be made."), !1) : (vt.logDebug("Local Storage utiqDataCallTimestamp not found. Invoking data call..."), !0)
            })() && (e.dataCallCounter++, vt.logDebug("Adding IDconnect data call listener..."), window.addEventListener("message", window.Utiq.idConnectMessageListener, !1), vt.logDebug("Making IDconnect data call..."), ((e, t) => {
                const n = `${e.protocol}://${e.domain}/${e.path}/data`;
                wt({
                    method: "get",
                    url: bn(n),
                    withCredentials: !0,
                    timeout: 4e3
                }).then((e => {
                    if (200 === e.status) qn({
                        iFrameUrl: e.data,
                        iFrameId: "GETDATA",
                        isSrcDocUsed: !0,
                        environment: t
                    });
                    else if (204 === e.status) try {
                        An() && (vt.logDebug("troubleshooting flow detected on template handler, should reload the flow"), Ft(jt.onFlowCompleted.name, Lt.Utiq, {
                            status: "reload"
                        })), window.Utiq.API.handleDataClear()
                    } catch (e) {
                        vt.logError(`handleDataClear API call failed. Reason: ${e.message}`)
                    } else vt.logError(`Unrecognised data response status ${e.status}`)
                })).catch((e => {
                    vt.logError("Error occurred on data call: ", e)
                }))
            })(e, t)))
        },
        Mn = ({
            idConnectConfig: e,
            idConnectConfiguration: t,
            environment: n
        }) => {
            var o, i;
            if (!(null === (i = null === (o = window.Utiq) || void 0 === o ? void 0 : o.data) || void 0 === i ? void 0 : i.wereIdsDispatched)) {
                const e = Wt(t);
                Gt(e, n)
            }
            vt.logDebug("Initializing IDconnect promise handler...");
            const r = Pn(n);
            return r && (t.IDCONNECT_API_HOST = `${r}/op/idconnect`), (e => {
                window.Utiq ||= {}, window.Utiq.API ||= {}, window.Utiq.API.getIdGraphEntry = t => ((e, t) => {
                    const n = ((e, t) => {
                        var n;
                        if (!e) return {
                            isSuccessful: !1,
                            errorMessage: "Entry key (string) parameter is missing"
                        };
                        if (!t || 0 === Object.keys(t).length) return {
                            isSuccessful: !1,
                            errorMessage: "No configuration set up"
                        };
                        const o = Jt(t.IDCONNECT_STORAGE_TYPE).get(t.IDCONNECT_DATA_STORAGE);
                        if (!Array.isArray(null === (n = null == o ? void 0 : o.connectId) || void 0 === n ? void 0 : n.idGraph)) return {
                            isSuccessful: !1,
                            errorMessage: "No required IDC data present. Cannot extract the ID graph entry"
                        };
                        const [i] = o.connectId.idGraph;
                        return i && i[e] ? ("atid" === e && vt.logInfo("If you are running the Utiq Web SDK from iOS webview, soon ATT will be required to acquire the atid"), {
                            isSuccessful: !0,
                            data: i[e]
                        }) : {
                            isSuccessful: !1,
                            errorMessage: `Could not find an entry for provided entry name: ${e}`
                        }
                    })(e, t);
                    return n.isSuccessful ? n.data : n.errorMessage
                })(t, e), vt.logDebug("ID Connect API functions initialized...")
            })(t), new Promise((o => {
                const i = t.IDCONNECT_API_HOST,
                    r = Dn(i);
                e.dataCallCounter = 0, e.protocol = r.protocol, e.domain = r.domain, e.path = r.path, vt.logDebug("Initializing IDconnect callback success logic..."), vt.logDebug("Calling ID Connect callbacks, listeners and data call initialization..."), Gn({
                    idConnectConfig: e,
                    environment: n,
                    callbackSuccess: e => {
                        const i = (({
                            data: e,
                            idConnectConfiguration: t,
                            environment: n
                        }) => {
                            var o, i, r, s, a, l, c, d, u, g, p, f, m, h, w, v;
                            const C = Wt(t),
                                y = {
                                    connectId: {
                                        domain: e.connectId.domain,
                                        id: e.connectId.id,
                                        idGraph: e.connectId.idGraph || [],
                                        value: e.connectId.value,
                                        consents: e.connectId.consents || []
                                    },
                                    connectStatus: e.connectStatus,
                                    ids: e.ids
                                },
                                {
                                    IDCONNECT_DATA_STORAGE: b
                                } = t;
                            if (vt.logDebug("Updating graph data..."), Jt(t.IDCONNECT_STORAGE_TYPE).set(b, y), vt.logDebug(`Set idConnect data under ${b} at exact time of ${Date.now()}.`), (null === (o = null == C ? void 0 : C[0]) || void 0 === o ? void 0 : o.mtid) !== (null === (s = null === (r = null === (i = null == e ? void 0 : e.connectId) || void 0 === i ? void 0 : i.idGraph) || void 0 === r ? void 0 : r[0]) || void 0 === s ? void 0 : s.mtid) && Gt(e.connectId.idGraph, n), (null === (c = null === (l = null === (a = null == e ? void 0 : e.connectId) || void 0 === a ? void 0 : a.idGraph) || void 0 === l ? void 0 : l[0]) || void 0 === c ? void 0 : c.mtid) && (null === (g = null === (u = null === (d = null == e ? void 0 : e.connectId) || void 0 === d ? void 0 : d.idGraph) || void 0 === u ? void 0 : u[0]) || void 0 === g ? void 0 : g.atid)) {
                                const e = JSON.parse(localStorage.getItem("utiqDataCallTimestamp")),
                                    t = null === (v = null === (w = null === (h = null === (m = null === (f = null === (p = window.Utiq) || void 0 === p ? void 0 : p.data) || void 0 === f ? void 0 : f.clientConfig) || void 0 === m ? void 0 : m.CALLS_CONFIG) || void 0 === h ? void 0 : h.conditions) || void 0 === w ? void 0 : w.timeConditions) || void 0 === v ? void 0 : v.oncePerTimeInterval,
                                    n = Date.now();
                                e ? e && e + parseInt(String(t), 10) < n ? (localStorage.setItem("utiqDataCallTimestamp", String(n)), vt.logDebug(`Time interval passed. Updated utiqDataCallTimestamp time to ${n}. Exact time of localStorage entry creation: ${Date.now()}`)) : vt.logDebug(`Local Storage utiqDataCallTimestamp found in localStorage with value ${e}`) : (localStorage.setItem("utiqDataCallTimestamp", String(n)), vt.logDebug(`Local Storage utiqDataCallTimestamp not found. Created new timestamp as ${n}. Exact time of localStorage entry creation: ${Date.now()}`))
                            }
                            return !0
                        })({
                            data: e,
                            idConnectConfiguration: t,
                            environment: n
                        });
                        o(i)
                    },
                    idConnectConfiguration: t
                })
            }))
        },
        Bn = {
            domain: null,
            path: null,
            protocol: null,
            callbackSuccess: null,
            connectId: null,
            umdid: null,
            originalUmdidCookie: null,
            dataUmdidCookie: null,
            token: null,
            net: null,
            dataCallCounter: 0,
            version: "1.0.1"
        };
    const Hn = (e, t) => (n, o) => {
        return i = void 0, r = void 0, a = function*() {
            var i, r, s, a, l, c, d, u, g, p, f, m;
            vt.logDebug("Consent is granted: ", n);
            const h = Et(document.cookie, kt),
                w = !h || n !== ("true" === h),
                {
                    config: v
                } = e;
            n && w && !(yield In({
                utiqHost: v.utiqHost,
                onEligibilityCheckedCallback: e => {
                    Ft(jt.onEligibilityChecked.name, Lt.Utiq, {
                        isEligible: e
                    }), e || Ft(jt.onFlowCompleted.name, Lt.Utiq)
                },
                eligibilityCheckTrigger: "consent_granted",
                ignoreInterval: !0
            })) ? vt.logWarn("Consent was granted, but service eligibility check failed for current connection type. Service will not be loaded.") : (w && (document.cookie = bt({
                name: kt,
                value: Zt(n),
                days: 180,
                domain: en(window.location.hostname)
            })), (({
                payload: e,
                config: t,
                environment: n
            }) => {
                try {
                    window.Utiq = window.Utiq || {}, window.Utiq.functions = window.Utiq.functions || {}, window.Utiq.functions.dispatchConsentCall = () => {
                        vt.logTrace(`Calling consent change with payload ${JSON.stringify(e)}`), Tn({
                            payload: e,
                            config: t,
                            environment: n
                        })
                    }
                } catch (e) {
                    vt.logWarn(`Error when calling consent listener callback: ${e}`)
                }
            })({
                payload: o,
                config: v,
                environment: t
            }), n ? ((null === (s = null === (r = null === (i = window.Utiq) || void 0 === i ? void 0 : i.data) || void 0 === r ? void 0 : r.popupContent) || void 0 === s ? void 0 : s.version) && (document.cookie = bt({
                name: Pt,
                value: Zt(dn(null === (c = null === (l = null === (a = window.Utiq) || void 0 === a ? void 0 : a.data) || void 0 === l ? void 0 : l.popupContent) || void 0 === c ? void 0 : c.version).majorVersion),
                days: 180,
                domain: en(window.location.hostname)
            })), (null === (g = null === (u = null === (d = window.Utiq) || void 0 === d ? void 0 : d.data) || void 0 === u ? void 0 : u.popupContent) || void 0 === g ? void 0 : g.versionPrevious) && (document.cookie = bt({
                name: Rt,
                value: Zt(dn(null === (m = null === (f = null === (p = window.Utiq) || void 0 === p ? void 0 : p.data) || void 0 === f ? void 0 : f.popupContent) || void 0 === m ? void 0 : m.versionPrevious).majorVersion),
                days: 180,
                domain: en(window.location.hostname)
            })), (e => {
                const {
                    CALLS_CONFIG: t,
                    IDCONNECT_CONFIG: n
                } = window.Utiq?.data?.clientConfig || {};
                if ("object" == typeof t && 0 !== Object.keys(t).length && "object" == typeof n && 0 !== Object.keys(n).length) vt.logInfo("Client configuration detected in data layer. Loading the detected configuration..."), vt.logDebug(`Client calls configuration from data layer: ${JSON.stringify(t)}`), vt.logDebug(`Client fc configuration from data layer: ${JSON.stringify(n)}`);
                else {
                    const t = {
                            IDCONNECT_API_HOST: `${e}/op/idconnect`,
                            IDCONNECT_DATA_STORAGE: "utiqPass",
                            IDCONNECT_DOMAIN_STORAGE_TRANSLATION: {
                                "mobile-token.telekom.de": "tmi.telekom.de"
                            },
                            IDCONNECT_STORAGE_TYPE: "localStorage",
                            IDCONNECT_TYPE: "utiq",
                            IDCONNECT_ALLOWED_USE_CASES: ["token", "stub", "utiqCrossDomain", "mspProxy", "saml"],
                            IDCONNECT_ALLOW_TOKEN_DATA_CALL: !0,
                            IDCONNECT_ALLOW_TOKEN_DATA_CALL_COUNTER: 1
                        },
                        n = {
                            intervalId: null,
                            conditions: {
                                timeConditions: {
                                    oncePerSession: !1,
                                    oncePerTimeInterval: 6e5
                                },
                                oncePerPage: !1,
                                urls: null
                            },
                            callsToMake: {
                                idConnect: !0
                            },
                            callsPerPage: {
                                idConnect: !1
                            }
                        };
                    window.Utiq ||= {}, window.Utiq.data ||= {}, window.Utiq.data.clientConfig = {
                        CALLS_CONFIG: n,
                        IDCONNECT_CONFIG: t
                    }, window.IDCONNECT_CONFIG = t, vt.logDebug(`Loaded new client configuration: ${JSON.stringify(t)}`)
                }
            })(v.utiqHost), function(e) {
                var t, n, o, i;
                t = this, n = arguments, i = function*({
                    idConnectConfiguration: e,
                    environment: t
                }) {
                    yield(({
                        idConnectConfiguration: e,
                        environment: t
                    }) => Mn({
                        idConnectConfig: Bn,
                        idConnectConfiguration: e,
                        environment: t
                    }))({
                        idConnectConfiguration: e,
                        environment: t
                    })
                }, new((o = void 0) || (o = Promise))((function(e, r) {
                    function s(e) {
                        try {
                            l(i.next(e))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function a(e) {
                        try {
                            l(i.throw(e))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function l(t) {
                        var n;
                        t.done ? e(t.value) : (n = t.value, n instanceof o ? n : new o((function(e) {
                            e(n)
                        }))).then(s, a)
                    }
                    l((i = i.apply(t, n || [])).next())
                }))
            }({
                idConnectConfiguration: e.data.clientConfig.IDCONNECT_CONFIG,
                environment: t
            }), w || vt.logDebug("No change with consent. Stopping the flow..."), window.Utiq.data.alreadyRevoked && (window.Utiq.data.alreadyRevoked = !1)) : (vt.logInfo("Consent is currently rejected. Clearing the Utiq data..."), Qt(), w ? e.isInitialPageLoad || (vt.logTrace(`Calling consent change with payload ${JSON.stringify(o)}`), Tn({
                payload: o,
                config: v,
                environment: t
            })) : vt.logDebug("No change with consent. Stopping the flow..."), Ft(jt.onFlowCompleted.name, Lt.Utiq)), w && Ft(jt.onConsentUpdateFinished.name, Lt.Utiq, {
                isConsentGranted: n
            }), e.isInitialPageLoad && (e.isInitialPageLoad = !1))
        }, new((s = void 0) || (s = Promise))((function(e, t) {
            function n(e) {
                try {
                    l(a.next(e))
                } catch (e) {
                    t(e)
                }
            }

            function o(e) {
                try {
                    l(a.throw(e))
                } catch (e) {
                    t(e)
                }
            }

            function l(t) {
                var i;
                t.done ? e(t.value) : (i = t.value, i instanceof s ? i : new s((function(e) {
                    e(i)
                }))).then(n, o)
            }
            l((a = a.apply(i, r || [])).next())
        }));
        var i, r, s, a
    };
    const zn = e => {
            return t = void 0, n = [e], i = function*({
                utiqConsentStatusCookie: e,
                environment: t
            }) {
                var n, o;
                const i = window.location.origin.includes("http://") && window.location.origin.includes(":8080"),
                    r = Pn(Lt.Utiq),
                    s = ((e, t) => {
                        if (t) return vt.logDebug(`Returning utiqHost from the customUtiqHost config entry: ${t}...`), t;
                        const n = window.location.host.split(".");
                        n.length > 2 && n.shift(), window.location.origin.includes("//utiq-test.") || e ? n.unshift("utiq-test") : window.IDCONNECT_CONFIG?.IDCONNECT_API_HOST && "string" == typeof window.IDCONNECT_CONFIG?.IDCONNECT_API_HOST && 0 === window.IDCONNECT_CONFIG?.IDCONNECT_API_HOST.indexOf("https://tmi.") ? n.unshift("tmi") : n.unshift("utiq");
                        const o = `https://${n.join(".").replace(":8080","")}`;
                        return vt.logDebug(`Returning utiqHost ${o}...`), o
                    })(i, r);
                if ("false" === e) tn(t);
                else if (!(yield In({
                        utiqHost: s,
                        onEligibilityCheckedCallback: e => {
                            Ft(jt.onEligibilityChecked.name, Lt.Utiq, {
                                isEligible: e
                            }), e || Ft(jt.onFlowCompleted.name, Lt.Utiq)
                        },
                        eligibilityCheckTrigger: "load"
                    }))) return;
                const a = (() => {
                    window.Utiq = window.Utiq || {};
                    const {
                        Utiq: e
                    } = window;
                    return e.functions = e.functions || {}, e.config = e.config || {}, e.isInitialPageLoad = !0, e
                })();
                (({
                    isOtherConsentManagementPlatformSet: e,
                    isLocalEnvironment: t,
                    utiqHost: n
                }) => {
                    e || (document.getElementById("utiq__consent-manager") ? vt.logDebug("Utiq consent manager is already loaded on the page. Proceeding...") : Kt(t, n))
                })({
                    isOtherConsentManagementPlatformSet: Boolean(a.config.CMP),
                    isLocalEnvironment: i,
                    utiqHost: s
                }), ((e, t) => {
                    const n = {
                            utiqHost: e,
                            apiPath: "/op/idconnect/consent",
                            oncePerSession: !1,
                            oncePerTimeInterval: null
                        },
                        o = t.config,
                        {
                            listeners: i
                        } = o,
                        r = function(e, t) {
                            var n = {};
                            for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
                            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                                var i = 0;
                                for (o = Object.getOwnPropertySymbols(e); i < o.length; i++) t.indexOf(o[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[i]) && (n[o[i]] = e[o[i]])
                            }
                            return n
                        }(o, ["listeners"]),
                        s = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, r.customUtiqHost && {
                            customUtiqHost: r.customUtiqHost
                        }), r.CMP && {
                            CMP: r.CMP
                        }), r.customizationOptions && {
                            customizationOptions: r.customizationOptions
                        }), r.language && {
                            language: r.language
                        }), r.getNewConsentBeforeExpiry && {
                            getNewConsentBeforeExpiry: r.getNewConsentBeforeExpiry
                        }), r.consentManagerOrigin && {
                            consentManagerOrigin: r.consentManagerOrigin
                        }), r.consentManagerDataLayer && {
                            consentManagerDataLayer: r.consentManagerDataLayer
                        }), r.OptanonDelay && {
                            OptanonDelay: r.OptanonDelay
                        }), r.cmpUtiqPurposeId && {
                            cmpUtiqPurposeId: r.cmpUtiqPurposeId
                        }), r.cmpUtiqVendorId && {
                            cmpUtiqVendorId: r.cmpUtiqVendorId
                        }), r.didomiUtiqPurposeId && {
                            didomiUtiqPurposeId: r.didomiUtiqPurposeId
                        }), r.didomiUtiqVendorId && {
                            didomiUtiqVendorId: r.didomiUtiqVendorId
                        });
                    t.config = Object.assign(Object.assign({}, n), s), t.config.oncePerTimeInterval = "number" == typeof t.config.oncePerTimeInterval ? t.config.oncePerTimeInterval : 0
                })(s, a), ((e, t) => {
                    window.Utiq ||= {}, window.Utiq.API ||= {}, window.Utiq.API.handleConsentChange = e => {
                        "boolean" == typeof e ? Ft(jt.onConsentChanging.name, Lt.Utiq, {
                            isConsentGranted: e
                        }) : vt.logError(`Incorrect consent value provided for Utiq handleConsentChange: ${e}`)
                    }, window.Utiq.API.handleDataClear = () => {
                        tn(e)
                    }, window.Utiq.API.getUtiqConsentStatus = () => {
                        const e = Et(document.cookie, kt);
                        if (e) return "true" === e
                    }, window.Utiq.API.revokeConsentWithPopup = () => {
                        const e = t,
                            n = Et(document.cookie, kt);
                        if (n && "false" !== n) {
                            const t = ({
                                isConsentGranted: n
                            }) => {
                                n ? vt.logDebug("Consent was revoked, but consent update event finished with consent granted. Revocation popup showing is being stopped...") : e(), window.Utiq?.listeners?.onConsentUpdateFinished && (window.Utiq.listeners.onConsentUpdateFinished = window.Utiq.listeners.onConsentUpdateFinished.filter((e => e !== t)))
                            };
                            window.Utiq ||= {}, window.Utiq.listeners ||= {}, window.Utiq.listeners.onConsentUpdateFinished ||= [], window.Utiq.listeners.onConsentUpdateFinished.push(t), Ft(jt.onConsentChanging.name, Lt.Utiq, {
                                isConsentGranted: !1
                            })
                        } else window.Utiq.data.alreadyRevoked || (window.Utiq.data.alreadyRevoked = !0), e()
                    }, vt.logDebug("Utiq functions initialized...")
                })(t, (() => ((e, t) => {
                    if (document.getElementById("utiq__revocation-popup") && "function" == typeof window.Utiq.API.showRevocationPopupWindow) return vt.logDebug("Utiq revocation popup is already loaded on the page. Proceeding..."), void window.Utiq.API.showRevocationPopupWindow();
                    const n = document.createElement("script");
                    n.setAttribute("id", "utiq__revocation-popup"), vt.logTrace(`Calling for consent manager origin with params isLocalEnvironment: ${e} and utiqHost: ${t}...`);
                    const o = e ? window.location.origin : t;
                    vt.logDebug(`Setting revocation popup from origin ${o}...`), n.src = `${o}/revocationPopup.js`, document.head.appendChild(n), vt.logDebug("Revocation popup appended to the document head")
                })(i, s)));
                const l = ((e, t) => {
                        if (t) {
                            const [, e] = t.split("://");
                            if (e) return vt.logDebug(`Returning hostname from the customUtiqHost config entry: ${e}...`), e
                        }
                        const n = e ? `utiq-test.${window.location.hostname}` : window.location.hostname;
                        return vt.logDebug(`Returning extracted hostname: ${n}...`), n
                    })(i, r),
                    c = Et(document.cookie, Pt),
                    d = Et(document.cookie, Rt),
                    {
                        host: u,
                        isLocalOrUatEnvironment: g
                    } = _n();
                let p;
                (null === (o = null === (n = window.Utiq) || void 0 === n ? void 0 : n.data) || void 0 === o ? void 0 : o.popupContent) || c || (p = yield Ln({
                    host: u,
                    isLocalOrUatEnvironment: g
                }));
                const f = gn(c, null == p ? void 0 : p.version);
                if (void 0 === f) return void vt.logError('"version" attribute is missing from templateData.json so cannot proceed');
                const m = gn(d, null == p ? void 0 : p.versionPrevious);
                (({
                    hostname: e,
                    processConsentChange: t,
                    readCookie: n,
                    config: o,
                    consentVersion: i,
                    consentVersionPrevious: r
                }) => {
                    if (o) switch (o.CMP) {
                        case rn.name:
                            const {
                                isValid: s
                            } = xt({
                                fieldsTemplate: rn.fieldsTemplate,
                                validationTargetObject: o,
                                logIdentificator: rn.name
                            });
                            s && (({
                                hostname: e,
                                readCookie: t,
                                processConsentChange: n,
                                config: o,
                                getValidatedBase64Cookie: i,
                                consentVersion: r,
                                consentVersionPrevious: s
                            }) => {
                                var a, l, c;
                                vn({
                                    hostname: e,
                                    readCookie: t,
                                    processConsentChange: n,
                                    config: o,
                                    consentVersion: r,
                                    consentVersionPrevious: s
                                }), window.addEventListener(Cn, (() => {
                                    vt.logDebug(`${Cn} was dispatched`);
                                    const a = t(document.cookie, rn.cookieName),
                                        l = window.Optanon ? 0 : 200;
                                    setTimeout((() => {
                                        const {
                                            isConsentGranted: l
                                        } = a ? wn({
                                            cookie: a,
                                            purposeId: o.cmpUtiqPurposeId,
                                            vendorId: o.cmpUtiqVendorId
                                        }) : {
                                            isConsentGranted: null
                                        }, c = "true" === i(document.cookie, kt);
                                        vt.logDebug("Current Utiq consent status:", c), vt.logDebug("Current Optanon consent status:", l), l !== c && (vt.logDebug("Consent statuses differ, processing the consent for synchronization..."), vn({
                                            hostname: e,
                                            readCookie: t,
                                            processConsentChange: n,
                                            config: o,
                                            consentVersion: r,
                                            consentVersionPrevious: s
                                        }))
                                    }), l)
                                })), window.Utiq || (window.Utiq = {}), (a = window.Utiq).listeners || (a.listeners = {}), (l = window.Utiq.listeners).onConsentChanging || (l.onConsentChanging = []), window.Utiq.listeners.onConsentChanging.push((({
                                    isConsentGranted: i
                                }) => {
                                    vt.logDebug("Synchronizing Optanon consent with consent value:", i);
                                    const a = window.Optanon ? 0 : 200;
                                    setTimeout((() => {
                                        var a;
                                        (null === (a = window.Optanon) || void 0 === a ? void 0 : a.UpdateConsent) && (i ? window.Optanon.UpdateConsent("Category", `${o.cmpUtiqPurposeId}:1`) : window.Optanon.UpdateConsent("Category", `${o.cmpUtiqPurposeId}:0`)), vt.logDebug("Processing consent from onConsentChanging event with consent value:", i), vn({
                                            hostname: e,
                                            readCookie: t,
                                            processConsentChange: n,
                                            config: o,
                                            consentVersion: r,
                                            consentVersionPrevious: s
                                        })
                                    }), a)
                                })), (c = window.Utiq.listeners).onConsentUpdateFinished || (c.onConsentUpdateFinished = []), window.Utiq.listeners.onConsentUpdateFinished.push((({
                                    isConsentGranted: e
                                }) => {
                                    vt.logDebug("Synchronizing Optanon consent with consent value:", e);
                                    const t = window.Optanon ? 0 : 200;
                                    setTimeout((() => {
                                        var t;
                                        (null === (t = window.Optanon) || void 0 === t ? void 0 : t.UpdateConsent) && (e ? (window.Optanon.UpdateConsent("Category", `${o.cmpUtiqPurposeId}:1`), hn() && window.Optanon.UpdateConsent("General Vendor", `${o.cmpUtiqVendorId}:1`)) : (window.Optanon.UpdateConsent("Category", `${o.cmpUtiqPurposeId}:0`), hn() && window.Optanon.UpdateConsent("General Vendor", `${o.cmpUtiqVendorId}:0`)))
                                    }), t)
                                }))
                            })({
                                hostname: e,
                                processConsentChange: t,
                                readCookie: n,
                                config: o,
                                getValidatedBase64Cookie: Et,
                                consentVersion: i,
                                consentVersionPrevious: r
                            });
                            break;
                        case sn.name:
                            const {
                                isValid: a
                            } = xt({
                                fieldsTemplate: sn.fieldsTemplate,
                                validationTargetObject: o,
                                logIdentificator: sn.name
                            });
                            a && (({
                                hostname: e,
                                processConsentChange: t,
                                config: n,
                                consentVersion: o,
                                consentVersionPrevious: i
                            }) => {
                                fn({
                                    hostname: e,
                                    processConsentChange: t,
                                    config: n,
                                    consentVersion: o,
                                    consentVersionPrevious: i
                                }), window.didomiEventListeners || (window.didomiEventListeners = []), window.didomiEventListeners.push({
                                    event: "consent.changed",
                                    listener: function(r) {
                                        "click" === (null == r ? void 0 : r.action) && (vt.logDebug("Processing consent from Didomi consent change event"), fn({
                                            hostname: e,
                                            processConsentChange: t,
                                            config: n,
                                            consentVersion: o,
                                            consentVersionPrevious: i
                                        }))
                                    }
                                }), window.Utiq = window.Utiq || {}, window.Utiq.listeners = window.Utiq.listeners || {}, window.Utiq.listeners.onConsentChanging = window.Utiq.listeners.onConsentChanging || [], window.Utiq.listeners.onConsentChanging.push((({
                                    isConsentGranted: r
                                }) => {
                                    vt.logDebug("Synchronizing Didomi consent with consent value:", r), mn(r, n.didomiUtiqPurposeId, n.didomiUtiqVendorId), vt.logDebug("Processing consent from onConsentChanging event with consent value:", r), fn({
                                        hostname: e,
                                        processConsentChange: t,
                                        config: n,
                                        consentVersion: o,
                                        consentVersionPrevious: i
                                    })
                                })), window.Utiq.listeners.onConsentUpdateFinished = window.Utiq.listeners.onConsentUpdateFinished || [], window.Utiq.listeners.onConsentUpdateFinished.push((({
                                    isConsentGranted: e
                                }) => {
                                    vt.logDebug("Synchronizing Didomi consent with consent value:", e), mn(e, n.didomiUtiqPurposeId, n.didomiUtiqVendorId)
                                }))
                            })({
                                hostname: e,
                                processConsentChange: t,
                                config: o,
                                readCookie: n,
                                consentVersion: i,
                                consentVersionPrevious: r
                            });
                            break;
                        default:
                            const {
                                isValid: l
                            } = xt({
                                fieldsTemplate: an.fieldsTemplate,
                                validationTargetObject: o,
                                logIdentificator: an.name
                            });
                            l && (({
                                hostname: e,
                                processConsentChange: t,
                                getValidatedBase64Cookie: n
                            }) => {
                                window.Utiq ||= {}, window.Utiq.listeners ||= {}, window.Utiq.listeners.onConsentChanging ||= [], window.Utiq.listeners.onConsentChanging.push((({
                                    isConsentGranted: o
                                }) => {
                                    pn({
                                        hostname: e,
                                        processConsentChange: t,
                                        isConsentGranted: o,
                                        getValidatedBase64Cookie: n
                                    })
                                }));
                                const o = n(document.cookie, kt);
                                o && pn({
                                    hostname: e,
                                    processConsentChange: t,
                                    isConsentGranted: "true" === o,
                                    getValidatedBase64Cookie: n
                                })
                            })({
                                hostname: e,
                                processConsentChange: t,
                                getValidatedBase64Cookie: Et
                            })
                    } else vt.logError("No config provided in Utiq loader object")
                })({
                    hostname: l,
                    processConsentChange: Hn(a, t),
                    readCookie: Ot,
                    config: a.config,
                    consentVersion: f,
                    consentVersionPrevious: m
                }), Ft(jt.onInitialised.name, Lt.Utiq), vt.logInfo("Utiq library loaded...")
            }, new((o = void 0) || (o = Promise))((function(e, r) {
                function s(e) {
                    try {
                        l(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function a(e) {
                    try {
                        l(i.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }

                function l(t) {
                    var n;
                    t.done ? e(t.value) : (n = t.value, n instanceof o ? n : new o((function(e) {
                        e(n)
                    }))).then(s, a)
                }
                l((i = i.apply(t, n || [])).next())
            }));
            var t, n, o, i
        },
        Jn = (e, t) => {
            var n, o;
            const i = e.getUserConsentStatusForPurpose(null === (n = null == t ? void 0 : t.config) || void 0 === n ? void 0 : n.didomiUtiqPurposeId),
                r = e.getUserConsentStatusForVendor(null === (o = null == t ? void 0 : t.config) || void 0 === o ? void 0 : o.didomiUtiqVendorId);
            return !1 === i || !1 === r ? {
                shouldRunDataClear: !0
            } : !0 === i && !0 === r ? {
                shouldInitializeUtiqFlow: !0
            } : {}
        },
        Wn = (e, t) => {
            var n, o;
            return t ? wn({
                cookie: t,
                purposeId: null === (n = null == e ? void 0 : e.config) || void 0 === n ? void 0 : n.cmpUtiqPurposeId,
                vendorId: null === (o = null == e ? void 0 : e.config) || void 0 === o ? void 0 : o.cmpUtiqVendorId
            }).isConsentGranted : null
        };
    (async () => {
        const e = Lt.Utiq;
        vt.initialize(e, Et(document.cookie, $t(e.toLowerCase()))), (e => {
            const t = $t(e.toLowerCase());
            window.Utiq ||= {}, window.Utiq.API ||= {}, window.Utiq.API.setVerboseLoggingLevel = () => {
                const e = Et(document.cookie, t);
                !!e && "verbose" === e || (document.cookie = bt({
                    name: t,
                    value: Zt("verbose"),
                    days: 90
                })), vt.logInfo("Verbose logging level has been set"), vt.setLogLevel(vt.logLevels.verbose)
            }, window.Utiq.API.resetLoggingLevel = () => {
                const e = Et(document.cookie, t);
                !!e && "verbose" === e && (document.cookie = bt({
                    name: t,
                    value: Zt("info"),
                    days: 0
                })), vt.setLogLevel(vt.logLevels.info), vt.logInfo("Logging level has been reset to info level")
            }, vt.logDebug(`${e} logging API functions initialized...`)
        })(e), (() => {
            const e = new URLSearchParams(window.location.search).get("utiq_stub");
            e && ("false" === e ? localStorage.removeItem("utiqStub") : localStorage.setItem("utiqStub", e)), (e || Ct()) && localStorage.removeItem("utiqEligibility")
        })(), vt.logDebug("Setting Axios calls interceptors..."), wt.interceptors.request.use((e => (vt.logTrace(`Calling url ${e.url} with data:`, e.data), e)), (e => (vt.logError("Error occurred when setting up a request:", e.message), Promise.reject(e)))), wt.interceptors.response.use((e => (vt.logTrace(`Response from ${e.config.url} with data:`, e.data, "and status", e.status), e)), (e => (e.response ? vt.logTrace("Call for", e.response.config.url, "failed with response status", e.response.status, "and reason:", e.response.data) : e.request ? vt.logError("No response received for a call: ", e.request) : vt.logError("General error occurred: ", e.message), Promise.reject(e)))), vt.logDebug("Finished setting Axios calls interceptors.");
        const t = Et(document.cookie, kt),
            n = window.Utiq?.config?.listeners;
        ((e, t) => {
            if ("string" != typeof e || !Object.keys(Lt).includes(e)) return void vt.logDebug(`No environment with a name "${e}" found. Cannot register event listeners for it.`);
            if (!t || "object" != typeof t || 0 === Object.keys(t).length) return void vt.logDebug(`No listeners to register for listeners object: ${t}`);
            window.Utiq ||= {}, window.Utiq.listeners ||= {};
            const n = jt;
            Object.entries(t).forEach((([e, t]) => {
                Object.keys(n).includes(e) ? "function" == typeof t ? (window.Utiq.listeners[n[e].name] ||= [], window.Utiq.listeners[n[e].name].push(t)) : Array.isArray(t) ? t.forEach((t => {
                    "function" == typeof t ? (window.Utiq.listeners[n[e].name] ||= [], window.Utiq.listeners[n[e].name].push(t)) : vt.logWarn(`Listener callback from provided callbacks array for event with name ${e} was not a function. Cannot register this listener. Skipping...`)
                })) : vt.logWarn(`Listener for event with name ${e} was not a function, nor an array of functions. Cannot register this listener. Skipping...`) : vt.logInfo(`Event with name ${e} was not recognized. Cannot register this listener. Skipping...`)
            }))
        })(Lt.Utiq, n), ((e, t) => {
            if ("true" === e) {
                const e = JSON.parse(localStorage.getItem("utiqDataCallTimestamp"));
                if (e && e + 6e5 > Date.now()) {
                    const e = Wt({
                        IDCONNECT_STORAGE_TYPE: "localStorage",
                        IDCONNECT_DATA_STORAGE: "utiqPass"
                    });
                    Gt(e, t)
                }
            }
        })(t, e), (() => {
            window.Utiq ||= {};
            let e = window.Utiq?.transactionId;
            e || (vt.logDebug("No transaction ID present. Creating"), e = At(), vt.logDebug(`New transactionId: ${e}`)), window.Utiq ||= {}, window.Utiq.transactionId = e
        })();
        const o = "Didomi" === window.Utiq?.config?.CMP,
            i = "Optanon" === window.Utiq?.config?.CMP,
            r = () => tn(e),
            s = () => zn({
                utiqConsentStatusCookie: t,
                environment: e
            });
        "" === t ? i ? ((e, t, n) => {
            let o = Ot(document.cookie, rn.cookieName),
                i = window.Optanon ? 0 : 200;
            setTimeout((() => {
                const r = Wn(e, o);
                if (!0 === r) n();
                else {
                    !1 === r && t();
                    const s = () => {
                        vt.logDebug("Optanon.OnConsentChanged was dispatched"), o = Ot(document.cookie, rn.cookieName), i = window.Optanon ? 0 : 200, setTimeout((() => {
                            const i = Wn(e, o);
                            "true" === Et(document.cookie, kt) !== i && (!1 === i ? t() : !0 === i && n()), window.removeEventListener(Cn, s)
                        }), i)
                    };
                    window.addEventListener(Cn, s)
                }
            }), i)
        })(window.Utiq, r, s) : o ? ((e, t, n) => {
            window.didomiOnReady || (window.didomiOnReady = []), window.didomiOnReady.push((o => {
                const i = Jn(o, e);
                let r = Boolean(i.shouldInitializeUtiqFlow);
                r ? n() : (i.shouldRunDataClear && t(), window.didomiEventListeners || (window.didomiEventListeners = []), window.didomiEventListeners.push({
                    event: "consent.changed",
                    listener(i) {
                        if ("click" === (null == i ? void 0 : i.action) && !r) {
                            vt.logDebug("Main Didomi consent processing from consent change event started...");
                            const i = Jn(o, e);
                            r = Boolean(i.shouldInitializeUtiqFlow), r ? n() : i.shouldRunDataClear && t()
                        }
                    }
                }))
            }))
        })(window.Utiq, r, s) : await s() : await s()
    })()
})();