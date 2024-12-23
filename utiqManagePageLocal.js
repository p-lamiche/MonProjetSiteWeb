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
    e.r(t), e.d(t, {
        hasBrowserEnv: () => pe,
        hasStandardBrowserEnv: () => ge,
        hasStandardBrowserWebWorkerEnv: () => ye,
        navigator: () => me,
        origin: () => we
    });
    const n = new class {
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
        o = (e, t, o) => {
            var r, i, s;
            if (e) return n.logDebug(`Custom Utiq host config entry detected. Utiq host: ${e}`), e;
            let a = "utiq";
            t ? a = "utiq-test" : (null === (r = window.IDCONNECT_CONFIG) || void 0 === r ? void 0 : r.IDCONNECT_API_HOST) && "string" == typeof(null === (i = window.IDCONNECT_CONFIG) || void 0 === i ? void 0 : i.IDCONNECT_API_HOST) && 0 === (null === (s = window.IDCONNECT_CONFIG) || void 0 === s ? void 0 : s.IDCONNECT_API_HOST.indexOf("https://tmi.")) && (a = "tmi");
            const c = `https://${a}.${o}`;
            return n.logDebug(`Extracted Utiq host: ${c}`), c
        },
        r = () => {
            const e = window.location.origin.includes("http://") && window.location.origin.includes(":8080");
            n.logDebug(`Is this a local environment origin: ${e}`);
            const t = window.location.origin.includes("//utiq-test.") || e;
            n.logDebug(`Is this a local or UAT environment the origin: ${t}`);
            const r = new URLSearchParams(window.location.search).get("host");
            n.logDebug(`URL parameter host: ${r}`);
            const i = (e => {
                    var t, n;
                    const o = null === (n = null === (t = window.Utiq) || void 0 === t ? void 0 : t.config) || void 0 === n ? void 0 : n[{
                        Utiq: "customUtiqHost"
                    } [e]];
                    return null != o && "" !== o ? o : null
                })("Utiq"),
                s = (e => {
                    const t = "base_domain_verifier_cookie=cookie",
                        o = e.split(".");
                    let r = "";
                    for (let e = o.length - 1; e >= 0; e--)
                        if (r = o.slice(e).join("."), document.cookie = `${t};domain=.${r};`, document.cookie.indexOf(t) > -1) return document.cookie = `${t.split("=")[0]}=;domain=.${r};expires=Thu, 01 Jan 1970 00:00:01 GMT;`, r;
                    return n.logDebug(`Not able to get the base domain of the provided URL: ${e} relatively to the current host`), e.replace("https://utiq.", "").replace("https://", "").replace("https://utiq-test.", "")
                })(i || window.location.hostname),
                a = t && r ? r : s;
            return n.logDebug(`Extracted host: ${a}`), {
                host: a,
                isLocalEnvironment: e,
                isLocalOrUatEnvironment: t,
                utiqHost: o(i, t, s)
            }
        };

    function i(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }
    const {
        toString: s
    } = Object.prototype, {
        getPrototypeOf: a
    } = Object, c = (l = Object.create(null), e => {
        const t = s.call(e);
        return l[t] || (l[t] = t.slice(8, -1).toLowerCase())
    });
    var l;
    const u = e => (e = e.toLowerCase(), t => c(t) === e),
        d = e => t => typeof t === e,
        {
            isArray: f
        } = Array,
        h = d("undefined"),
        p = u("ArrayBuffer"),
        m = d("string"),
        g = d("function"),
        y = d("number"),
        w = e => null !== e && "object" == typeof e,
        b = e => {
            if ("object" !== c(e)) return !1;
            const t = a(e);
            return !(null !== t && t !== Object.prototype && null !== Object.getPrototypeOf(t) || Symbol.toStringTag in e || Symbol.iterator in e)
        },
        v = u("Date"),
        E = u("File"),
        O = u("Blob"),
        S = u("FileList"),
        R = u("URLSearchParams"),
        [T, A, C, L] = ["ReadableStream", "Request", "Response", "Headers"].map(u);

    function x(e, t, {
        allOwnKeys: n = !1
    } = {}) {
        if (null == e) return;
        let o, r;
        if ("object" != typeof e && (e = [e]), f(e))
            for (o = 0, r = e.length; o < r; o++) t.call(null, e[o], o, e);
        else {
            const r = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
                i = r.length;
            let s;
            for (o = 0; o < i; o++) s = r[o], t.call(null, e[s], s, e)
        }
    }

    function N(e, t) {
        t = t.toLowerCase();
        const n = Object.keys(e);
        let o, r = n.length;
        for (; r-- > 0;)
            if (o = n[r], t === o.toLowerCase()) return o;
        return null
    }
    const U = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : global,
        j = e => !h(e) && e !== U,
        P = (_ = "undefined" != typeof Uint8Array && a(Uint8Array), e => _ && e instanceof _);
    var _;
    const D = u("HTMLFormElement"),
        q = (({
            hasOwnProperty: e
        }) => (t, n) => e.call(t, n))(Object.prototype),
        F = u("RegExp"),
        B = (e, t) => {
            const n = Object.getOwnPropertyDescriptors(e),
                o = {};
            x(n, ((n, r) => {
                let i;
                !1 !== (i = t(n, r, e)) && (o[r] = i || n)
            })), Object.defineProperties(e, o)
        },
        k = "abcdefghijklmnopqrstuvwxyz",
        I = "0123456789",
        M = {
            DIGIT: I,
            ALPHA: k,
            ALPHA_DIGIT: k + k.toUpperCase() + I
        },
        $ = u("AsyncFunction"),
        z = (H = "function" == typeof setImmediate, J = g(U.postMessage), H ? setImmediate : J ? (W = `axios@${Math.random()}`, K = [], U.addEventListener("message", (({
            source: e,
            data: t
        }) => {
            e === U && t === W && K.length && K.shift()()
        }), !1), e => {
            K.push(e), U.postMessage(W, "*")
        }) : e => setTimeout(e));
    var H, J, W, K;
    const V = "undefined" != typeof queueMicrotask ? queueMicrotask.bind(U) : "undefined" != typeof process && process.nextTick || z,
        G = {
            isArray: f,
            isArrayBuffer: p,
            isBuffer: function(e) {
                return null !== e && !h(e) && null !== e.constructor && !h(e.constructor) && g(e.constructor.isBuffer) && e.constructor.isBuffer(e)
            },
            isFormData: e => {
                let t;
                return e && ("function" == typeof FormData && e instanceof FormData || g(e.append) && ("formdata" === (t = c(e)) || "object" === t && g(e.toString) && "[object FormData]" === e.toString()))
            },
            isArrayBufferView: function(e) {
                let t;
                return t = "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && p(e.buffer), t
            },
            isString: m,
            isNumber: y,
            isBoolean: e => !0 === e || !1 === e,
            isObject: w,
            isPlainObject: b,
            isReadableStream: T,
            isRequest: A,
            isResponse: C,
            isHeaders: L,
            isUndefined: h,
            isDate: v,
            isFile: E,
            isBlob: O,
            isRegExp: F,
            isFunction: g,
            isStream: e => w(e) && g(e.pipe),
            isURLSearchParams: R,
            isTypedArray: P,
            isFileList: S,
            forEach: x,
            merge: function e() {
                const {
                    caseless: t
                } = j(this) && this || {}, n = {}, o = (o, r) => {
                    const i = t && N(n, r) || r;
                    b(n[i]) && b(o) ? n[i] = e(n[i], o) : b(o) ? n[i] = e({}, o) : f(o) ? n[i] = o.slice() : n[i] = o
                };
                for (let e = 0, t = arguments.length; e < t; e++) arguments[e] && x(arguments[e], o);
                return n
            },
            extend: (e, t, n, {
                allOwnKeys: o
            } = {}) => (x(t, ((t, o) => {
                n && g(t) ? e[o] = i(t, n) : e[o] = t
            }), {
                allOwnKeys: o
            }), e),
            trim: e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
            stripBOM: e => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
            inherits: (e, t, n, o) => {
                e.prototype = Object.create(t.prototype, o), e.prototype.constructor = e, Object.defineProperty(e, "super", {
                    value: t.prototype
                }), n && Object.assign(e.prototype, n)
            },
            toFlatObject: (e, t, n, o) => {
                let r, i, s;
                const c = {};
                if (t = t || {}, null == e) return t;
                do {
                    for (r = Object.getOwnPropertyNames(e), i = r.length; i-- > 0;) s = r[i], o && !o(s, e, t) || c[s] || (t[s] = e[s], c[s] = !0);
                    e = !1 !== n && a(e)
                } while (e && (!n || n(e, t)) && e !== Object.prototype);
                return t
            },
            kindOf: c,
            kindOfTest: u,
            endsWith: (e, t, n) => {
                e = String(e), (void 0 === n || n > e.length) && (n = e.length), n -= t.length;
                const o = e.indexOf(t, n);
                return -1 !== o && o === n
            },
            toArray: e => {
                if (!e) return null;
                if (f(e)) return e;
                let t = e.length;
                if (!y(t)) return null;
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
            isHTMLForm: D,
            hasOwnProperty: q,
            hasOwnProp: q,
            reduceDescriptors: B,
            freezeMethods: e => {
                B(e, ((t, n) => {
                    if (g(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n)) return !1;
                    const o = e[n];
                    g(o) && (t.enumerable = !1, "writable" in t ? t.writable = !1 : t.set || (t.set = () => {
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
                return f(e) ? o(e) : o(String(e).split(t)), n
            },
            toCamelCase: e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, (function(e, t, n) {
                return t.toUpperCase() + n
            })),
            noop: () => {},
            toFiniteNumber: (e, t) => null != e && Number.isFinite(e = +e) ? e : t,
            findKey: N,
            global: U,
            isContextDefined: j,
            ALPHABET: M,
            generateString: (e = 16, t = M.ALPHA_DIGIT) => {
                let n = "";
                const {
                    length: o
                } = t;
                for (; e--;) n += t[Math.random() * o | 0];
                return n
            },
            isSpecCompliantForm: function(e) {
                return !!(e && g(e.append) && "FormData" === e[Symbol.toStringTag] && e[Symbol.iterator])
            },
            toJSONObject: e => {
                const t = new Array(10),
                    n = (e, o) => {
                        if (w(e)) {
                            if (t.indexOf(e) >= 0) return;
                            if (!("toJSON" in e)) {
                                t[o] = e;
                                const r = f(e) ? [] : {};
                                return x(e, ((e, t) => {
                                    const i = n(e, o + 1);
                                    !h(i) && (r[t] = i)
                                })), t[o] = void 0, r
                            }
                        }
                        return e
                    };
                return n(e, 0)
            },
            isAsyncFn: $,
            isThenable: e => e && (w(e) || g(e)) && g(e.then) && g(e.catch),
            setImmediate: z,
            asap: V
        };

    function X(e, t, n, o, r) {
        Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = (new Error).stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), o && (this.request = o), r && (this.response = r, this.status = r.status ? r.status : null)
    }
    G.inherits(X, Error, {
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
                config: G.toJSONObject(this.config),
                code: this.code,
                status: this.status
            }
        }
    });
    const Q = X.prototype,
        Y = {};
    ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach((e => {
        Y[e] = {
            value: e
        }
    })), Object.defineProperties(X, Y), Object.defineProperty(Q, "isAxiosError", {
        value: !0
    }), X.from = (e, t, n, o, r, i) => {
        const s = Object.create(Q);
        return G.toFlatObject(e, s, (function(e) {
            return e !== Error.prototype
        }), (e => "isAxiosError" !== e)), X.call(s, e.message, t, n, o, r), s.cause = e, s.name = e.name, i && Object.assign(s, i), s
    };
    const Z = X;

    function ee(e) {
        return G.isPlainObject(e) || G.isArray(e)
    }

    function te(e) {
        return G.endsWith(e, "[]") ? e.slice(0, -2) : e
    }

    function ne(e, t, n) {
        return e ? e.concat(t).map((function(e, t) {
            return e = te(e), !n && t ? "[" + e + "]" : e
        })).join(n ? "." : "") : t
    }
    const oe = G.toFlatObject(G, {}, null, (function(e) {
            return /^is[A-Z]/.test(e)
        })),
        re = function(e, t, n) {
            if (!G.isObject(e)) throw new TypeError("target must be an object");
            t = t || new FormData;
            const o = (n = G.toFlatObject(n, {
                    metaTokens: !0,
                    dots: !1,
                    indexes: !1
                }, !1, (function(e, t) {
                    return !G.isUndefined(t[e])
                }))).metaTokens,
                r = n.visitor || l,
                i = n.dots,
                s = n.indexes,
                a = (n.Blob || "undefined" != typeof Blob && Blob) && G.isSpecCompliantForm(t);
            if (!G.isFunction(r)) throw new TypeError("visitor must be a function");

            function c(e) {
                if (null === e) return "";
                if (G.isDate(e)) return e.toISOString();
                if (!a && G.isBlob(e)) throw new Z("Blob is not supported. Use a Buffer instead.");
                return G.isArrayBuffer(e) || G.isTypedArray(e) ? a && "function" == typeof Blob ? new Blob([e]) : Buffer.from(e) : e
            }

            function l(e, n, r) {
                let a = e;
                if (e && !r && "object" == typeof e)
                    if (G.endsWith(n, "{}")) n = o ? n : n.slice(0, -2), e = JSON.stringify(e);
                    else if (G.isArray(e) && function(e) {
                        return G.isArray(e) && !e.some(ee)
                    }(e) || (G.isFileList(e) || G.endsWith(n, "[]")) && (a = G.toArray(e))) return n = te(n), a.forEach((function(e, o) {
                    !G.isUndefined(e) && null !== e && t.append(!0 === s ? ne([n], o, i) : null === s ? n : n + "[]", c(e))
                })), !1;
                return !!ee(e) || (t.append(ne(r, n, i), c(e)), !1)
            }
            const u = [],
                d = Object.assign(oe, {
                    defaultVisitor: l,
                    convertValue: c,
                    isVisitable: ee
                });
            if (!G.isObject(e)) throw new TypeError("data must be an object");
            return function e(n, o) {
                if (!G.isUndefined(n)) {
                    if (-1 !== u.indexOf(n)) throw Error("Circular reference detected in " + o.join("."));
                    u.push(n), G.forEach(n, (function(n, i) {
                        !0 === (!(G.isUndefined(n) || null === n) && r.call(t, n, G.isString(i) ? i.trim() : i, o, d)) && e(n, o ? o.concat(i) : [i])
                    })), u.pop()
                }
            }(e), t
        };

    function ie(e) {
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

    function se(e, t) {
        this._pairs = [], e && re(e, this, t)
    }
    const ae = se.prototype;
    ae.append = function(e, t) {
        this._pairs.push([e, t])
    }, ae.toString = function(e) {
        const t = e ? function(t) {
            return e.call(this, t, ie)
        } : ie;
        return this._pairs.map((function(e) {
            return t(e[0]) + "=" + t(e[1])
        }), "").join("&")
    };
    const ce = se;

    function le(e) {
        return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }

    function ue(e, t, n) {
        if (!t) return e;
        const o = n && n.encode || le,
            r = n && n.serialize;
        let i;
        if (i = r ? r(t, n) : G.isURLSearchParams(t) ? t.toString() : new ce(t, n).toString(o), i) {
            const t = e.indexOf("#"); - 1 !== t && (e = e.slice(0, t)), e += (-1 === e.indexOf("?") ? "?" : "&") + i
        }
        return e
    }
    const de = class {
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
                G.forEach(this.handlers, (function(t) {
                    null !== t && e(t)
                }))
            }
        },
        fe = {
            silentJSONParsing: !0,
            forcedJSONParsing: !0,
            clarifyTimeoutError: !1
        },
        he = {
            isBrowser: !0,
            classes: {
                URLSearchParams: "undefined" != typeof URLSearchParams ? URLSearchParams : ce,
                FormData: "undefined" != typeof FormData ? FormData : null,
                Blob: "undefined" != typeof Blob ? Blob : null
            },
            protocols: ["http", "https", "file", "blob", "url", "data"]
        },
        pe = "undefined" != typeof window && "undefined" != typeof document,
        me = "object" == typeof navigator && navigator || void 0,
        ge = pe && (!me || ["ReactNative", "NativeScript", "NS"].indexOf(me.product) < 0),
        ye = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && "function" == typeof self.importScripts,
        we = pe && window.location.href || "http://localhost",
        be = {
            ...t,
            ...he
        },
        ve = function(e) {
            function t(e, n, o, r) {
                let i = e[r++];
                if ("__proto__" === i) return !0;
                const s = Number.isFinite(+i),
                    a = r >= e.length;
                return i = !i && G.isArray(o) ? o.length : i, a ? (G.hasOwnProp(o, i) ? o[i] = [o[i], n] : o[i] = n, !s) : (o[i] && G.isObject(o[i]) || (o[i] = []), t(e, n, o[i], r) && G.isArray(o[i]) && (o[i] = function(e) {
                    const t = {},
                        n = Object.keys(e);
                    let o;
                    const r = n.length;
                    let i;
                    for (o = 0; o < r; o++) i = n[o], t[i] = e[i];
                    return t
                }(o[i])), !s)
            }
            if (G.isFormData(e) && G.isFunction(e.entries)) {
                const n = {};
                return G.forEachEntry(e, ((e, o) => {
                    t(function(e) {
                        return G.matchAll(/\w+|\[(\w*)]/g, e).map((e => "[]" === e[0] ? "" : e[1] || e[0]))
                    }(e), o, n, 0)
                })), n
            }
            return null
        },
        Ee = {
            transitional: fe,
            adapter: ["xhr", "http", "fetch"],
            transformRequest: [function(e, t) {
                const n = t.getContentType() || "",
                    o = n.indexOf("application/json") > -1,
                    r = G.isObject(e);
                if (r && G.isHTMLForm(e) && (e = new FormData(e)), G.isFormData(e)) return o ? JSON.stringify(ve(e)) : e;
                if (G.isArrayBuffer(e) || G.isBuffer(e) || G.isStream(e) || G.isFile(e) || G.isBlob(e) || G.isReadableStream(e)) return e;
                if (G.isArrayBufferView(e)) return e.buffer;
                if (G.isURLSearchParams(e)) return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
                let i;
                if (r) {
                    if (n.indexOf("application/x-www-form-urlencoded") > -1) return function(e, t) {
                        return re(e, new be.classes.URLSearchParams, Object.assign({
                            visitor: function(e, t, n, o) {
                                return be.isNode && G.isBuffer(e) ? (this.append(t, e.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments)
                            }
                        }, t))
                    }(e, this.formSerializer).toString();
                    if ((i = G.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
                        const t = this.env && this.env.FormData;
                        return re(i ? {
                            "files[]": e
                        } : e, t && new t, this.formSerializer)
                    }
                }
                return r || o ? (t.setContentType("application/json", !1), function(e, t, n) {
                    if (G.isString(e)) try {
                        return (0, JSON.parse)(e), G.trim(e)
                    } catch (e) {
                        if ("SyntaxError" !== e.name) throw e
                    }
                    return (0, JSON.stringify)(e)
                }(e)) : e
            }],
            transformResponse: [function(e) {
                const t = this.transitional || Ee.transitional,
                    n = t && t.forcedJSONParsing,
                    o = "json" === this.responseType;
                if (G.isResponse(e) || G.isReadableStream(e)) return e;
                if (e && G.isString(e) && (n && !this.responseType || o)) {
                    const n = !(t && t.silentJSONParsing) && o;
                    try {
                        return JSON.parse(e)
                    } catch (e) {
                        if (n) {
                            if ("SyntaxError" === e.name) throw Z.from(e, Z.ERR_BAD_RESPONSE, this, null, this.response);
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
                FormData: be.classes.FormData,
                Blob: be.classes.Blob
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
    G.forEach(["delete", "get", "head", "post", "put", "patch"], (e => {
        Ee.headers[e] = {}
    }));
    const Oe = Ee,
        Se = G.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
        Re = Symbol("internals");

    function Te(e) {
        return e && String(e).trim().toLowerCase()
    }

    function Ae(e) {
        return !1 === e || null == e ? e : G.isArray(e) ? e.map(Ae) : String(e)
    }

    function Ce(e, t, n, o, r) {
        return G.isFunction(o) ? o.call(this, t, n) : (r && (t = n), G.isString(t) ? G.isString(o) ? -1 !== t.indexOf(o) : G.isRegExp(o) ? o.test(t) : void 0 : void 0)
    }
    class Le {
        constructor(e) {
            e && this.set(e)
        }
        set(e, t, n) {
            const o = this;

            function r(e, t, n) {
                const r = Te(t);
                if (!r) throw new Error("header name must be a non-empty string");
                const i = G.findKey(o, r);
                (!i || void 0 === o[i] || !0 === n || void 0 === n && !1 !== o[i]) && (o[i || t] = Ae(e))
            }
            const i = (e, t) => G.forEach(e, ((e, n) => r(e, n, t)));
            if (G.isPlainObject(e) || e instanceof this.constructor) i(e, t);
            else if (G.isString(e) && (e = e.trim()) && !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())) i((e => {
                const t = {};
                let n, o, r;
                return e && e.split("\n").forEach((function(e) {
                    r = e.indexOf(":"), n = e.substring(0, r).trim().toLowerCase(), o = e.substring(r + 1).trim(), !n || t[n] && Se[n] || ("set-cookie" === n ? t[n] ? t[n].push(o) : t[n] = [o] : t[n] = t[n] ? t[n] + ", " + o : o)
                })), t
            })(e), t);
            else if (G.isHeaders(e))
                for (const [t, o] of e.entries()) r(o, t, n);
            else null != e && r(t, e, n);
            return this
        }
        get(e, t) {
            if (e = Te(e)) {
                const n = G.findKey(this, e);
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
                    if (G.isFunction(t)) return t.call(this, e, n);
                    if (G.isRegExp(t)) return t.exec(e);
                    throw new TypeError("parser must be boolean|regexp|function")
                }
            }
        }
        has(e, t) {
            if (e = Te(e)) {
                const n = G.findKey(this, e);
                return !(!n || void 0 === this[n] || t && !Ce(0, this[n], n, t))
            }
            return !1
        }
        delete(e, t) {
            const n = this;
            let o = !1;

            function r(e) {
                if (e = Te(e)) {
                    const r = G.findKey(n, e);
                    !r || t && !Ce(0, n[r], r, t) || (delete n[r], o = !0)
                }
            }
            return G.isArray(e) ? e.forEach(r) : r(e), o
        }
        clear(e) {
            const t = Object.keys(this);
            let n = t.length,
                o = !1;
            for (; n--;) {
                const r = t[n];
                e && !Ce(0, this[r], r, e, !0) || (delete this[r], o = !0)
            }
            return o
        }
        normalize(e) {
            const t = this,
                n = {};
            return G.forEach(this, ((o, r) => {
                const i = G.findKey(n, r);
                if (i) return t[i] = Ae(o), void delete t[r];
                const s = e ? function(e) {
                    return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, ((e, t, n) => t.toUpperCase() + n))
                }(r) : String(r).trim();
                s !== r && delete t[r], t[s] = Ae(o), n[s] = !0
            })), this
        }
        concat(...e) {
            return this.constructor.concat(this, ...e)
        }
        toJSON(e) {
            const t = Object.create(null);
            return G.forEach(this, ((n, o) => {
                null != n && !1 !== n && (t[o] = e && G.isArray(n) ? n.join(", ") : n)
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
            const t = (this[Re] = this[Re] = {
                    accessors: {}
                }).accessors,
                n = this.prototype;

            function o(e) {
                const o = Te(e);
                t[o] || (function(e, t) {
                    const n = G.toCamelCase(" " + t);
                    ["get", "set", "has"].forEach((o => {
                        Object.defineProperty(e, o + n, {
                            value: function(e, n, r) {
                                return this[o].call(this, t, e, n, r)
                            },
                            configurable: !0
                        })
                    }))
                }(n, e), t[o] = !0)
            }
            return G.isArray(e) ? e.forEach(o) : o(e), this
        }
    }
    Le.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), G.reduceDescriptors(Le.prototype, (({
        value: e
    }, t) => {
        let n = t[0].toUpperCase() + t.slice(1);
        return {
            get: () => e,
            set(e) {
                this[n] = e
            }
        }
    })), G.freezeMethods(Le);
    const xe = Le;

    function Ne(e, t) {
        const n = this || Oe,
            o = t || n,
            r = xe.from(o.headers);
        let i = o.data;
        return G.forEach(e, (function(e) {
            i = e.call(n, i, r.normalize(), t ? t.status : void 0)
        })), r.normalize(), i
    }

    function Ue(e) {
        return !(!e || !e.__CANCEL__)
    }

    function je(e, t, n) {
        Z.call(this, null == e ? "canceled" : e, Z.ERR_CANCELED, t, n), this.name = "CanceledError"
    }
    G.inherits(je, Z, {
        __CANCEL__: !0
    });
    const Pe = je;

    function _e(e, t, n) {
        const o = n.config.validateStatus;
        n.status && o && !o(n.status) ? t(new Z("Request failed with status code " + n.status, [Z.ERR_BAD_REQUEST, Z.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n)) : e(n)
    }
    const De = (e, t, n = 3) => {
            let o = 0;
            const r = function(e, t) {
                e = e || 10;
                const n = new Array(e),
                    o = new Array(e);
                let r, i = 0,
                    s = 0;
                return t = void 0 !== t ? t : 1e3,
                    function(a) {
                        const c = Date.now(),
                            l = o[s];
                        r || (r = c), n[i] = a, o[i] = c;
                        let u = s,
                            d = 0;
                        for (; u !== i;) d += n[u++], u %= e;
                        if (i = (i + 1) % e, i === s && (s = (s + 1) % e), c - r < t) return;
                        const f = l && c - l;
                        return f ? Math.round(1e3 * d / f) : void 0
                    }
            }(50, 250);
            return function(e, t) {
                let n, o, r = 0,
                    i = 1e3 / t;
                const s = (t, i = Date.now()) => {
                    r = i, n = null, o && (clearTimeout(o), o = null), e.apply(null, t)
                };
                return [(...e) => {
                    const t = Date.now(),
                        a = t - r;
                    a >= i ? s(e, t) : (n = e, o || (o = setTimeout((() => {
                        o = null, s(n)
                    }), i - a)))
                }, () => n && s(n)]
            }((n => {
                const i = n.loaded,
                    s = n.lengthComputable ? n.total : void 0,
                    a = i - o,
                    c = r(a);
                o = i, e({
                    loaded: i,
                    total: s,
                    progress: s ? i / s : void 0,
                    bytes: a,
                    rate: c || void 0,
                    estimated: c && s && i <= s ? (s - i) / c : void 0,
                    event: n,
                    lengthComputable: null != s,
                    [t ? "download" : "upload"]: !0
                })
            }), n)
        },
        qe = (e, t) => {
            const n = null != e;
            return [o => t[0]({
                lengthComputable: n,
                total: e,
                loaded: o
            }), t[1]]
        },
        Fe = e => (...t) => G.asap((() => e(...t))),
        Be = be.hasStandardBrowserEnv ? function() {
            const e = be.navigator && /(msie|trident)/i.test(be.navigator.userAgent),
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
                    const t = G.isString(e) ? o(e) : e;
                    return t.protocol === n.protocol && t.host === n.host
                }
        }() : function() {
            return !0
        },
        ke = be.hasStandardBrowserEnv ? {
            write(e, t, n, o, r, i) {
                const s = [e + "=" + encodeURIComponent(t)];
                G.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), G.isString(o) && s.push("path=" + o), G.isString(r) && s.push("domain=" + r), !0 === i && s.push("secure"), document.cookie = s.join("; ")
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

    function Ie(e, t) {
        return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t) ? function(e, t) {
            return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e
        }(e, t) : t
    }
    const Me = e => e instanceof xe ? {
        ...e
    } : e;

    function $e(e, t) {
        t = t || {};
        const n = {};

        function o(e, t, n) {
            return G.isPlainObject(e) && G.isPlainObject(t) ? G.merge.call({
                caseless: n
            }, e, t) : G.isPlainObject(t) ? G.merge({}, t) : G.isArray(t) ? t.slice() : t
        }

        function r(e, t, n) {
            return G.isUndefined(t) ? G.isUndefined(e) ? void 0 : o(void 0, e, n) : o(e, t, n)
        }

        function i(e, t) {
            if (!G.isUndefined(t)) return o(void 0, t)
        }

        function s(e, t) {
            return G.isUndefined(t) ? G.isUndefined(e) ? void 0 : o(void 0, e) : o(void 0, t)
        }

        function a(n, r, i) {
            return i in t ? o(n, r) : i in e ? o(void 0, n) : void 0
        }
        const c = {
            url: i,
            method: i,
            data: i,
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
            headers: (e, t) => r(Me(e), Me(t), !0)
        };
        return G.forEach(Object.keys(Object.assign({}, e, t)), (function(o) {
            const i = c[o] || r,
                s = i(e[o], t[o], o);
            G.isUndefined(s) && i !== a || (n[o] = s)
        })), n
    }
    const ze = e => {
            const t = $e({}, e);
            let n, {
                data: o,
                withXSRFToken: r,
                xsrfHeaderName: i,
                xsrfCookieName: s,
                headers: a,
                auth: c
            } = t;
            if (t.headers = a = xe.from(a), t.url = ue(Ie(t.baseURL, t.url), e.params, e.paramsSerializer), c && a.set("Authorization", "Basic " + btoa((c.username || "") + ":" + (c.password ? unescape(encodeURIComponent(c.password)) : ""))), G.isFormData(o))
                if (be.hasStandardBrowserEnv || be.hasStandardBrowserWebWorkerEnv) a.setContentType(void 0);
                else if (!1 !== (n = a.getContentType())) {
                const [e, ...t] = n ? n.split(";").map((e => e.trim())).filter(Boolean) : [];
                a.setContentType([e || "multipart/form-data", ...t].join("; "))
            }
            if (be.hasStandardBrowserEnv && (r && G.isFunction(r) && (r = r(t)), r || !1 !== r && Be(t.url))) {
                const e = i && s && ke.read(s);
                e && a.set(i, e)
            }
            return t
        },
        He = "undefined" != typeof XMLHttpRequest && function(e) {
            return new Promise((function(t, n) {
                const o = ze(e);
                let r = o.data;
                const i = xe.from(o.headers).normalize();
                let s, a, c, l, u, {
                    responseType: d,
                    onUploadProgress: f,
                    onDownloadProgress: h
                } = o;

                function p() {
                    l && l(), u && u(), o.cancelToken && o.cancelToken.unsubscribe(s), o.signal && o.signal.removeEventListener("abort", s)
                }
                let m = new XMLHttpRequest;

                function g() {
                    if (!m) return;
                    const o = xe.from("getAllResponseHeaders" in m && m.getAllResponseHeaders());
                    _e((function(e) {
                        t(e), p()
                    }), (function(e) {
                        n(e), p()
                    }), {
                        data: d && "text" !== d && "json" !== d ? m.response : m.responseText,
                        status: m.status,
                        statusText: m.statusText,
                        headers: o,
                        config: e,
                        request: m
                    }), m = null
                }
                m.open(o.method.toUpperCase(), o.url, !0), m.timeout = o.timeout, "onloadend" in m ? m.onloadend = g : m.onreadystatechange = function() {
                    m && 4 === m.readyState && (0 !== m.status || m.responseURL && 0 === m.responseURL.indexOf("file:")) && setTimeout(g)
                }, m.onabort = function() {
                    m && (n(new Z("Request aborted", Z.ECONNABORTED, e, m)), m = null)
                }, m.onerror = function() {
                    n(new Z("Network Error", Z.ERR_NETWORK, e, m)), m = null
                }, m.ontimeout = function() {
                    let t = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
                    const r = o.transitional || fe;
                    o.timeoutErrorMessage && (t = o.timeoutErrorMessage), n(new Z(t, r.clarifyTimeoutError ? Z.ETIMEDOUT : Z.ECONNABORTED, e, m)), m = null
                }, void 0 === r && i.setContentType(null), "setRequestHeader" in m && G.forEach(i.toJSON(), (function(e, t) {
                    m.setRequestHeader(t, e)
                })), G.isUndefined(o.withCredentials) || (m.withCredentials = !!o.withCredentials), d && "json" !== d && (m.responseType = o.responseType), h && ([c, u] = De(h, !0), m.addEventListener("progress", c)), f && m.upload && ([a, l] = De(f), m.upload.addEventListener("progress", a), m.upload.addEventListener("loadend", l)), (o.cancelToken || o.signal) && (s = t => {
                    m && (n(!t || t.type ? new Pe(null, e, m) : t), m.abort(), m = null)
                }, o.cancelToken && o.cancelToken.subscribe(s), o.signal && (o.signal.aborted ? s() : o.signal.addEventListener("abort", s)));
                const y = function(e) {
                    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                    return t && t[1] || ""
                }(o.url);
                y && -1 === be.protocols.indexOf(y) ? n(new Z("Unsupported protocol " + y + ":", Z.ERR_BAD_REQUEST, e)) : m.send(r || null)
            }))
        },
        Je = (e, t) => {
            const {
                length: n
            } = e = e ? e.filter(Boolean) : [];
            if (t || n) {
                let n, o = new AbortController;
                const r = function(e) {
                    if (!n) {
                        n = !0, s();
                        const t = e instanceof Error ? e : this.reason;
                        o.abort(t instanceof Z ? t : new Pe(t instanceof Error ? t.message : t))
                    }
                };
                let i = t && setTimeout((() => {
                    i = null, r(new Z(`timeout ${t} of ms exceeded`, Z.ETIMEDOUT))
                }), t);
                const s = () => {
                    e && (i && clearTimeout(i), i = null, e.forEach((e => {
                        e.unsubscribe ? e.unsubscribe(r) : e.removeEventListener("abort", r)
                    })), e = null)
                };
                e.forEach((e => e.addEventListener("abort", r)));
                const {
                    signal: a
                } = o;
                return a.unsubscribe = () => G.asap(s), a
            }
        },
        We = function*(e, t) {
            let n = e.byteLength;
            if (!t || n < t) return void(yield e);
            let o, r = 0;
            for (; r < n;) o = r + t, yield e.slice(r, o), r = o
        },
        Ke = (e, t, n, o) => {
            const r = async function*(e, t) {
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
                }(e)) yield* We(n, t)
            }(e, t);
            let i, s = 0,
                a = e => {
                    i || (i = !0, o && o(e))
                };
            return new ReadableStream({
                async pull(e) {
                    try {
                        const {
                            done: t,
                            value: o
                        } = await r.next();
                        if (t) return a(), void e.close();
                        let i = o.byteLength;
                        if (n) {
                            let e = s += i;
                            n(e)
                        }
                        e.enqueue(new Uint8Array(o))
                    } catch (e) {
                        throw a(e), e
                    }
                },
                cancel: e => (a(e), r.return())
            }, {
                highWaterMark: 2
            })
        },
        Ve = "function" == typeof fetch && "function" == typeof Request && "function" == typeof Response,
        Ge = Ve && "function" == typeof ReadableStream,
        Xe = Ve && ("function" == typeof TextEncoder ? (Qe = new TextEncoder, e => Qe.encode(e)) : async e => new Uint8Array(await new Response(e).arrayBuffer()));
    var Qe;
    const Ye = (e, ...t) => {
            try {
                return !!e(...t)
            } catch (e) {
                return !1
            }
        },
        Ze = Ge && Ye((() => {
            let e = !1;
            const t = new Request(be.origin, {
                body: new ReadableStream,
                method: "POST",
                get duplex() {
                    return e = !0, "half"
                }
            }).headers.has("Content-Type");
            return e && !t
        })),
        et = Ge && Ye((() => G.isReadableStream(new Response("").body))),
        tt = {
            stream: et && (e => e.body)
        };
    var nt;
    Ve && (nt = new Response, ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e => {
        !tt[e] && (tt[e] = G.isFunction(nt[e]) ? t => t[e]() : (t, n) => {
            throw new Z(`Response type '${e}' is not supported`, Z.ERR_NOT_SUPPORT, n)
        })
    })));
    const ot = {
        http: null,
        xhr: He,
        fetch: Ve && (async e => {
            let {
                url: t,
                method: n,
                data: o,
                signal: r,
                cancelToken: i,
                timeout: s,
                onDownloadProgress: a,
                onUploadProgress: c,
                responseType: l,
                headers: u,
                withCredentials: d = "same-origin",
                fetchOptions: f
            } = ze(e);
            l = l ? (l + "").toLowerCase() : "text";
            let h, p = Je([r, i && i.toAbortSignal()], s);
            const m = p && p.unsubscribe && (() => {
                p.unsubscribe()
            });
            let g;
            try {
                if (c && Ze && "get" !== n && "head" !== n && 0 !== (g = await (async (e, t) => {
                        const n = G.toFiniteNumber(e.getContentLength());
                        return null == n ? (async e => {
                            if (null == e) return 0;
                            if (G.isBlob(e)) return e.size;
                            if (G.isSpecCompliantForm(e)) {
                                const t = new Request(be.origin, {
                                    method: "POST",
                                    body: e
                                });
                                return (await t.arrayBuffer()).byteLength
                            }
                            return G.isArrayBufferView(e) || G.isArrayBuffer(e) ? e.byteLength : (G.isURLSearchParams(e) && (e += ""), G.isString(e) ? (await Xe(e)).byteLength : void 0)
                        })(t) : n
                    })(u, o))) {
                    let e, n = new Request(t, {
                        method: "POST",
                        body: o,
                        duplex: "half"
                    });
                    if (G.isFormData(o) && (e = n.headers.get("content-type")) && u.setContentType(e), n.body) {
                        const [e, t] = qe(g, De(Fe(c)));
                        o = Ke(n.body, 65536, e, t)
                    }
                }
                G.isString(d) || (d = d ? "include" : "omit");
                const r = "credentials" in Request.prototype;
                h = new Request(t, {
                    ...f,
                    signal: p,
                    method: n.toUpperCase(),
                    headers: u.normalize().toJSON(),
                    body: o,
                    duplex: "half",
                    credentials: r ? d : void 0
                });
                let i = await fetch(h);
                const s = et && ("stream" === l || "response" === l);
                if (et && (a || s && m)) {
                    const e = {};
                    ["status", "statusText", "headers"].forEach((t => {
                        e[t] = i[t]
                    }));
                    const t = G.toFiniteNumber(i.headers.get("content-length")),
                        [n, o] = a && qe(t, De(Fe(a), !0)) || [];
                    i = new Response(Ke(i.body, 65536, n, (() => {
                        o && o(), m && m()
                    })), e)
                }
                l = l || "text";
                let y = await tt[G.findKey(tt, l) || "text"](i, e);
                return !s && m && m(), await new Promise(((t, n) => {
                    _e(t, n, {
                        data: y,
                        headers: xe.from(i.headers),
                        status: i.status,
                        statusText: i.statusText,
                        config: e,
                        request: h
                    })
                }))
            } catch (t) {
                if (m && m(), t && "TypeError" === t.name && /fetch/i.test(t.message)) throw Object.assign(new Z("Network Error", Z.ERR_NETWORK, e, h), {
                    cause: t.cause || t
                });
                throw Z.from(t, t && t.code, e, h)
            }
        })
    };
    G.forEach(ot, ((e, t) => {
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
    const rt = e => `- ${e}`,
        it = e => G.isFunction(e) || null === e || !1 === e,
        st = e => {
            e = G.isArray(e) ? e : [e];
            const {
                length: t
            } = e;
            let n, o;
            const r = {};
            for (let i = 0; i < t; i++) {
                let t;
                if (n = e[i], o = n, !it(n) && (o = ot[(t = String(n)).toLowerCase()], void 0 === o)) throw new Z(`Unknown adapter '${t}'`);
                if (o) break;
                r[t || "#" + i] = o
            }
            if (!o) {
                const e = Object.entries(r).map((([e, t]) => `adapter ${e} ` + (!1 === t ? "is not supported by the environment" : "is not available in the build")));
                let n = t ? e.length > 1 ? "since :\n" + e.map(rt).join("\n") : " " + rt(e[0]) : "as no adapter specified";
                throw new Z("There is no suitable adapter to dispatch the request " + n, "ERR_NOT_SUPPORT")
            }
            return o
        };

    function at(e) {
        if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new Pe(null, e)
    }

    function ct(e) {
        return at(e), e.headers = xe.from(e.headers), e.data = Ne.call(e, e.transformRequest), -1 !== ["post", "put", "patch"].indexOf(e.method) && e.headers.setContentType("application/x-www-form-urlencoded", !1), st(e.adapter || Oe.adapter)(e).then((function(t) {
            return at(e), t.data = Ne.call(e, e.transformResponse, t), t.headers = xe.from(t.headers), t
        }), (function(t) {
            return Ue(t) || (at(e), t && t.response && (t.response.data = Ne.call(e, e.transformResponse, t.response), t.response.headers = xe.from(t.response.headers))), Promise.reject(t)
        }))
    }
    const lt = {};
    ["object", "boolean", "number", "function", "string", "symbol"].forEach(((e, t) => {
        lt[e] = function(n) {
            return typeof n === e || "a" + (t < 1 ? "n " : " ") + e
        }
    }));
    const ut = {};
    lt.transitional = function(e, t, n) {
        function o(e, t) {
            return "[Axios v1.7.7] Transitional option '" + e + "'" + t + (n ? ". " + n : "")
        }
        return (n, r, i) => {
            if (!1 === e) throw new Z(o(r, " has been removed" + (t ? " in " + t : "")), Z.ERR_DEPRECATED);
            return t && !ut[r] && (ut[r] = !0, console.warn(o(r, " has been deprecated since v" + t + " and will be removed in the near future"))), !e || e(n, r, i)
        }
    };
    const dt = {
            assertOptions: function(e, t, n) {
                if ("object" != typeof e) throw new Z("options must be an object", Z.ERR_BAD_OPTION_VALUE);
                const o = Object.keys(e);
                let r = o.length;
                for (; r-- > 0;) {
                    const i = o[r],
                        s = t[i];
                    if (s) {
                        const t = e[i],
                            n = void 0 === t || s(t, i, e);
                        if (!0 !== n) throw new Z("option " + i + " must be " + n, Z.ERR_BAD_OPTION_VALUE)
                    } else if (!0 !== n) throw new Z("Unknown option " + i, Z.ERR_BAD_OPTION)
                }
            },
            validators: lt
        },
        ft = dt.validators;
    class ht {
        constructor(e) {
            this.defaults = e, this.interceptors = {
                request: new de,
                response: new de
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
            "string" == typeof e ? (t = t || {}).url = e : t = e || {}, t = $e(this.defaults, t);
            const {
                transitional: n,
                paramsSerializer: o,
                headers: r
            } = t;
            void 0 !== n && dt.assertOptions(n, {
                silentJSONParsing: ft.transitional(ft.boolean),
                forcedJSONParsing: ft.transitional(ft.boolean),
                clarifyTimeoutError: ft.transitional(ft.boolean)
            }, !1), null != o && (G.isFunction(o) ? t.paramsSerializer = {
                serialize: o
            } : dt.assertOptions(o, {
                encode: ft.function,
                serialize: ft.function
            }, !0)), t.method = (t.method || this.defaults.method || "get").toLowerCase();
            let i = r && G.merge(r.common, r[t.method]);
            r && G.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (e => {
                delete r[e]
            })), t.headers = xe.concat(i, r);
            const s = [];
            let a = !0;
            this.interceptors.request.forEach((function(e) {
                "function" == typeof e.runWhen && !1 === e.runWhen(t) || (a = a && e.synchronous, s.unshift(e.fulfilled, e.rejected))
            }));
            const c = [];
            let l;
            this.interceptors.response.forEach((function(e) {
                c.push(e.fulfilled, e.rejected)
            }));
            let u, d = 0;
            if (!a) {
                const e = [ct.bind(this), void 0];
                for (e.unshift.apply(e, s), e.push.apply(e, c), u = e.length, l = Promise.resolve(t); d < u;) l = l.then(e[d++], e[d++]);
                return l
            }
            u = s.length;
            let f = t;
            for (d = 0; d < u;) {
                const e = s[d++],
                    t = s[d++];
                try {
                    f = e(f)
                } catch (e) {
                    t.call(this, e);
                    break
                }
            }
            try {
                l = ct.call(this, f)
            } catch (e) {
                return Promise.reject(e)
            }
            for (d = 0, u = c.length; d < u;) l = l.then(c[d++], c[d++]);
            return l
        }
        getUri(e) {
            return ue(Ie((e = $e(this.defaults, e)).baseURL, e.url), e.params, e.paramsSerializer)
        }
    }
    G.forEach(["delete", "get", "head", "options"], (function(e) {
        ht.prototype[e] = function(t, n) {
            return this.request($e(n || {}, {
                method: e,
                url: t,
                data: (n || {}).data
            }))
        }
    })), G.forEach(["post", "put", "patch"], (function(e) {
        function t(t) {
            return function(n, o, r) {
                return this.request($e(r || {}, {
                    method: e,
                    headers: t ? {
                        "Content-Type": "multipart/form-data"
                    } : {},
                    url: n,
                    data: o
                }))
            }
        }
        ht.prototype[e] = t(), ht.prototype[e + "Form"] = t(!0)
    }));
    const pt = ht;
    class mt {
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
            }, e((function(e, o, r) {
                n.reason || (n.reason = new Pe(e, o, r), t(n.reason))
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
                token: new mt((function(t) {
                    e = t
                })),
                cancel: e
            }
        }
    }
    const gt = mt,
        yt = {
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
    Object.entries(yt).forEach((([e, t]) => {
        yt[t] = e
    }));
    const wt = yt,
        bt = function e(t) {
            const n = new pt(t),
                o = i(pt.prototype.request, n);
            return G.extend(o, pt.prototype, n, {
                allOwnKeys: !0
            }), G.extend(o, n, null, {
                allOwnKeys: !0
            }), o.create = function(n) {
                return e($e(t, n))
            }, o
        }(Oe);
    bt.Axios = pt, bt.CanceledError = Pe, bt.CancelToken = gt, bt.isCancel = Ue, bt.VERSION = "1.7.7", bt.toFormData = re, bt.AxiosError = Z, bt.Cancel = bt.CanceledError, bt.all = function(e) {
        return Promise.all(e)
    }, bt.spread = function(e) {
        return function(t) {
            return e.apply(null, t)
        }
    }, bt.isAxiosError = function(e) {
        return G.isObject(e) && !0 === e.isAxiosError
    }, bt.mergeConfig = $e, bt.AxiosHeaders = xe, bt.formToJSON = e => ve(G.isHTMLForm(e) ? new FormData(e) : e), bt.getAdapter = st, bt.HttpStatusCode = wt, bt.default = bt;
    const vt = bt;
    const Et = (e, t) => {
            return o = void 0, r = void 0, s = function*() {
                const o = (window.location.origin.includes("http://") && window.location.origin.includes(":8080") ? window.location.origin : e) + (e => {
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
                    return (yield vt.get(o, {
                        method: "get",
                        url: o,
                        timeout: 4e3
                    })).data
                } catch (e) {
                    n.logError("Error occurred on content request: ", e)
                }
                return null
            }, new((i = void 0) || (i = Promise))((function(e, t) {
                function n(e) {
                    try {
                        c(s.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function a(e) {
                    try {
                        c(s.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function c(t) {
                    var o;
                    t.done ? e(t.value) : (o = t.value, o instanceof i ? o : new i((function(e) {
                        e(o)
                    }))).then(n, a)
                }
                c((s = s.apply(o, r || [])).next())
            }));
            var o, r, i, s
        },
        Ot = e => e ? "https://utiq-http-resources.test.utiq-aws.net" : "https://utiqcontent.com";
    const St = () => {
            var e, t, n;
            const o = document.getElementById(window.location.hash.slice(1));
            if (o) {
                const r = o.getBoundingClientRect(),
                    i = r.top - ((null === (n = null === (t = null === (e = window.Utiq) || void 0 === e ? void 0 : e.config) || void 0 === t ? void 0 : t.customizationOptions) || void 0 === n ? void 0 : n.domainListAnchorMargin) || 0);
                window.scrollTo(r.left, i)
            }
        },
        Rt = (e, t) => {
            const n = document.getElementById(e);
            n && (n.innerHTML = t)
        };
    const Tt = ["de", "en", "fr", "es", "it"],
        At = (e, t) => (e => Tt.includes(e))(e) ? e : (e => e.defaultCountryCode ? e.defaultCountryCode : "en")(t);
    var Ct, Lt;
    Lt = function*() {
        var e, t, o;
        const {
            host: i,
            isLocalOrUatEnvironment: s
        } = r(), a = yield(e => {
            return t = void 0, o = [e], i = function*({
                host: e,
                isLocalOrUatEnvironment: t
            }) {
                var o, r, i, s, a;
                if ("object" == typeof(null === (r = null === (o = null === window || void 0 === window ? void 0 : window.Utiq) || void 0 === o ? void 0 : o.data) || void 0 === r ? void 0 : r.popupContent) && (null === (s = null === (i = null === window || void 0 === window ? void 0 : window.Utiq) || void 0 === i ? void 0 : i.data) || void 0 === s ? void 0 : s.popupContent.length) > 0) return window.Utiq.data.popupContent;
                const c = Ot(t),
                    l = {
                        type: "templates",
                        filename: "templateData.json",
                        host: e
                    },
                    u = yield Et(c, l);
                if (window.Utiq || (window.Utiq = {}), (a = window.Utiq).data || (a.data = {}), u) window.Utiq.data.popupContent = u;
                else {
                    n.logInfo("Template not found. Requesting the default Utiq consent manager template...");
                    const e = {
                            type: "templates",
                            filename: "templateData.json",
                            host: "default"
                        },
                        t = yield Et(c, e);
                    t ? window.Utiq.data.popupContent = t : (n.logInfo("Default template not found. Setting the placeholder Utiq consent manager template..."), window.Utiq.data.popupContent = {
                        websiteLogoFilename: "",
                        defaultCountryCode: "en",
                        website: "[INSERT WEBSITE]",
                        groupCompanyName: "[INSERT GROUP COMPANY NAME]",
                        colorTheme: "default"
                    })
                }
                return window.Utiq.data.popupContent
            }, new((r = void 0) || (r = Promise))((function(e, n) {
                function s(e) {
                    try {
                        c(i.next(e))
                    } catch (e) {
                        n(e)
                    }
                }

                function a(e) {
                    try {
                        c(i.throw(e))
                    } catch (e) {
                        n(e)
                    }
                }

                function c(t) {
                    var n;
                    t.done ? e(t.value) : (n = t.value, n instanceof r ? n : new r((function(e) {
                        e(n)
                    }))).then(s, a)
                }
                c((i = i.apply(t, o || [])).next())
            }));
            var t, o, r, i
        })({
            host: i,
            isLocalOrUatEnvironment: s
        }), c = yield(e => {
            return t = void 0, n = [e], r = function*({
                isLocalOrUatEnvironment: e,
                pageLanguageCode: t,
                listOfKeywords: n,
                pageVersion: o,
                contentDataFilename: r
            }) {
                const i = Ot(e),
                    s = {
                        type: "pages",
                        version: o,
                        language: t,
                        filename: `${r}.html`
                    };
                let a = yield Et(i, s);
                const c = a.match(/\{\{.*?\}\}/gu);
                return c && n && c.forEach((e => {
                    const t = e.replace(/^\{\{|\}\}$/gu, "");
                    Object.entries(n).forEach((([n, o]) => {
                        if (t === n)
                            if (Array.isArray(o)) {
                                const t = o.reduce(((e, t) => `${e}<li>${t}</li>`), "");
                                a = a.replaceAll(e, `<ul>${t}</ul>`)
                            } else {
                                const t = String(o);
                                a = JSON.parse(JSON.stringify(a).replaceAll(e, t))
                            }
                    }))
                })), a || ""
            }, new((o = void 0) || (o = Promise))((function(e, i) {
                function s(e) {
                    try {
                        c(r.next(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function a(e) {
                    try {
                        c(r.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function c(t) {
                    var n;
                    t.done ? e(t.value) : (n = t.value, n instanceof o ? n : new o((function(e) {
                        e(n)
                    }))).then(s, a)
                }
                c((r = r.apply(t, n || [])).next())
            }));
            var t, n, o, r
        })({
            isLocalOrUatEnvironment: s,
            pageLanguageCode: At(null === (o = null === (t = null === (e = window.Utiq) || void 0 === e ? void 0 : e.config) || void 0 === t ? void 0 : t.customizationOptions) || void 0 === o ? void 0 : o.language, a),
            listOfKeywords: a.listOfManageUtiqKeywords,
            pageVersion: a.versionManageUtiq,
            contentDataFilename: "manage-utiq"
        });
        ((e, t) => {
            "loading" !== document.readyState ? (Rt(e, t), St()) : document.addEventListener("DOMContentLoaded", (() => {
                Rt(e, t), St()
            }))
        })("utiq-manage-page", c)
    }, new((Ct = void 0) || (Ct = Promise))((function(e, t) {
        function n(e) {
            try {
                r(Lt.next(e))
            } catch (e) {
                t(e)
            }
        }

        function o(e) {
            try {
                r(Lt.throw(e))
            } catch (e) {
                t(e)
            }
        }

        function r(t) {
            var r;
            t.done ? e(t.value) : (r = t.value, r instanceof Ct ? r : new Ct((function(e) {
                e(r)
            }))).then(n, o)
        }
        r((Lt = Lt.apply(void 0, [])).next())
    }))
})();