(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 41567, (e, t, a) => {
    "use strict";
    function r({widthInt: e, heightInt: t, blurWidth: a, blurHeight: r, blurDataURL: o, objectFit: s}) {
        let i = a ? 40 * a : e
          , l = r ? 40 * r : t
          , n = i && l ? `viewBox='0 0 ${i} ${l}'` : "";
        return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${n}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${n ? "none" : "contain" === s ? "xMidYMid" : "cover" === s ? "xMidYMid slice" : "none"}' style='filter: url(%23b);' href='${o}'/%3E%3C/svg%3E`
    }
    Object.defineProperty(a, "__esModule", {
        value: !0
    }),
    Object.defineProperty(a, "getImageBlurSvg", {
        enumerable: !0,
        get: function() {
            return r
        }
    })
}
, 9560, (e, t, a) => {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var r = {
        VALID_LOADERS: function() {
            return s
        },
        imageConfigDefault: function() {
            return i
        }
    };
    for (var o in r)
        Object.defineProperty(a, o, {
            enumerable: !0,
            get: r[o]
        });
    let s = ["default", "imgix", "cloudinary", "akamai", "custom"]
      , i = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        path: "/_next/image",
        loader: "default",
        loaderFile: "",
        domains: [],
        disableStaticImages: !1,
        minimumCacheTTL: 14400,
        formats: ["image/webp"],
        maximumRedirects: 3,
        maximumResponseBody: 5e7,
        dangerouslyAllowLocalIP: !1,
        dangerouslyAllowSVG: !1,
        contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
        contentDispositionType: "attachment",
        localPatterns: void 0,
        remotePatterns: [],
        qualities: [75],
        unoptimized: !1
    }
}
, 35070, (e, t, a) => {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }),
    Object.defineProperty(a, "getImgProps", {
        enumerable: !0,
        get: function() {
            return d
        }
    }),
    e.r(45694);
    let r = e.r(75527)
      , o = e.r(41567)
      , s = e.r(9560)
      , i = ["-moz-initial", "fill", "none", "scale-down", void 0];
    function l(e) {
        return void 0 !== e.default
    }
    function n(e) {
        return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
    }
    function d({src: e, sizes: t, unoptimized: a=!1, priority: d=!1, preload: c=!1, loading: m, className: u, quality: x, width: h, height: p, fill: f=!1, style: g, overrideSrc: b, onLoad: j, onLoadingComplete: v, placeholder: N="empty", blurDataURL: y, fetchPriority: w, decoding: C="async", layout: P, objectFit: k, objectPosition: S, lazyBoundary: R, lazyRoot: O, ...M}, $) {
        var E;
        let A, _, F, {imgConf: I, showAltText: D, blurComplete: z, defaultLoader: T} = $, L = I || s.imageConfigDefault;
        if ("allSizes"in L)
            A = L;
        else {
            let e = [...L.deviceSizes, ...L.imageSizes].sort( (e, t) => e - t)
              , t = L.deviceSizes.sort( (e, t) => e - t)
              , a = L.qualities?.sort( (e, t) => e - t);
            A = {
                ...L,
                allSizes: e,
                deviceSizes: t,
                qualities: a
            }
        }
        if (void 0 === T)
            throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"), "__NEXT_ERROR_CODE", {
                value: "E163",
                enumerable: !1,
                configurable: !0
            });
        let q = M.loader || T;
        delete M.loader,
        delete M.srcSet;
        let B = "__next_img_default"in q;
        if (B) {
            if ("custom" === A.loader)
                throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`), "__NEXT_ERROR_CODE", {
                    value: "E252",
                    enumerable: !1,
                    configurable: !0
                })
        } else {
            let e = q;
            q = t => {
                let {config: a, ...r} = t;
                return e(r)
            }
        }
        if (P) {
            "fill" === P && (f = !0);
            let e = {
                intrinsic: {
                    maxWidth: "100%",
                    height: "auto"
                },
                responsive: {
                    width: "100%",
                    height: "auto"
                }
            }[P];
            e && (g = {
                ...g,
                ...e
            });
            let a = {
                responsive: "100vw",
                fill: "100vw"
            }[P];
            a && !t && (t = a)
        }
        let V = ""
          , G = n(h)
          , W = n(p);
        if ((E = e) && "object" == typeof E && (l(E) || void 0 !== E.src)) {
            let t = l(e) ? e.default : e;
            if (!t.src)
                throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`), "__NEXT_ERROR_CODE", {
                    value: "E460",
                    enumerable: !1,
                    configurable: !0
                });
            if (!t.height || !t.width)
                throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`), "__NEXT_ERROR_CODE", {
                    value: "E48",
                    enumerable: !1,
                    configurable: !0
                });
            if (_ = t.blurWidth,
            F = t.blurHeight,
            y = y || t.blurDataURL,
            V = t.src,
            !f)
                if (G || W) {
                    if (G && !W) {
                        let e = G / t.width;
                        W = Math.round(t.height * e)
                    } else if (!G && W) {
                        let e = W / t.height;
                        G = Math.round(t.width * e)
                    }
                } else
                    G = t.width,
                    W = t.height
        }
        let U = !d && !c && ("lazy" === m || void 0 === m);
        (!(e = "string" == typeof e ? e : V) || e.startsWith("data:") || e.startsWith("blob:")) && (a = !0,
        U = !1),
        A.unoptimized && (a = !0),
        B && !A.dangerouslyAllowSVG && e.split("?", 1)[0].endsWith(".svg") && (a = !0);
        let X = n(x)
          , H = Object.assign(f ? {
            position: "absolute",
            height: "100%",
            width: "100%",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            objectFit: k,
            objectPosition: S
        } : {}, D ? {} : {
            color: "transparent"
        }, g)
          , J = z || "empty" === N ? null : "blur" === N ? `url("data:image/svg+xml;charset=utf-8,${(0,
        o.getImageBlurSvg)({
            widthInt: G,
            heightInt: W,
            blurWidth: _,
            blurHeight: F,
            blurDataURL: y || "",
            objectFit: H.objectFit
        })}")` : `url("${N}")`
          , Q = i.includes(H.objectFit) ? "fill" === H.objectFit ? "100% 100%" : "cover" : H.objectFit
          , K = J ? {
            backgroundSize: Q,
            backgroundPosition: H.objectPosition || "50% 50%",
            backgroundRepeat: "no-repeat",
            backgroundImage: J
        } : {}
          , Y = function({config: e, src: t, unoptimized: a, width: o, quality: s, sizes: i, loader: l}) {
            if (a) {
                let e = (0,
                r.getDeploymentId)();
                if (t.startsWith("/") && !t.startsWith("//") && e) {
                    let a = t.includes("?") ? "&" : "?";
                    t = `${t}${a}dpl=${e}`
                }
                return {
                    src: t,
                    srcSet: void 0,
                    sizes: void 0
                }
            }
            let {widths: n, kind: d} = function({deviceSizes: e, allSizes: t}, a, r) {
                if (r) {
                    let a = /(^|\s)(1?\d?\d)vw/g
                      , o = [];
                    for (let e; e = a.exec(r); )
                        o.push(parseInt(e[2]));
                    if (o.length) {
                        let a = .01 * Math.min(...o);
                        return {
                            widths: t.filter(t => t >= e[0] * a),
                            kind: "w"
                        }
                    }
                    return {
                        widths: t,
                        kind: "w"
                    }
                }
                return "number" != typeof a ? {
                    widths: e,
                    kind: "w"
                } : {
                    widths: [...new Set([a, 2 * a].map(e => t.find(t => t >= e) || t[t.length - 1]))],
                    kind: "x"
                }
            }(e, o, i)
              , c = n.length - 1;
            return {
                sizes: i || "w" !== d ? i : "100vw",
                srcSet: n.map( (a, r) => `${l({
                    config: e,
                    src: t,
                    quality: s,
                    width: a
                })} ${"w" === d ? a : r + 1}${d}`).join(", "),
                src: l({
                    config: e,
                    src: t,
                    quality: s,
                    width: n[c]
                })
            }
        }({
            config: A,
            src: e,
            unoptimized: a,
            width: G,
            quality: X,
            sizes: t,
            loader: q
        })
          , Z = U ? "lazy" : m;
        return {
            props: {
                ...M,
                loading: Z,
                fetchPriority: w,
                width: G,
                height: W,
                decoding: C,
                className: u,
                style: {
                    ...H,
                    ...K
                },
                sizes: Y.sizes,
                srcSet: Y.srcSet,
                src: b || Y.src
            },
            meta: {
                unoptimized: a,
                preload: c || d,
                placeholder: N,
                fill: f
            }
        }
    }
}
, 34038, (e, t, a) => {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }),
    Object.defineProperty(a, "default", {
        enumerable: !0,
        get: function() {
            return l
        }
    });
    let r = e.r(44440)
      , o = "u" < typeof window
      , s = o ? () => {}
    : r.useLayoutEffect
      , i = o ? () => {}
    : r.useEffect;
    function l(e) {
        let {headManager: t, reduceComponentsToState: a} = e;
        function l() {
            if (t && t.mountedInstances) {
                let e = r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                t.updateHead(a(e))
            }
        }
        return o && (t?.mountedInstances?.add(e.children),
        l()),
        s( () => (t?.mountedInstances?.add(e.children),
        () => {
            t?.mountedInstances?.delete(e.children)
        }
        )),
        s( () => (t && (t._pendingUpdate = l),
        () => {
            t && (t._pendingUpdate = l)
        }
        )),
        i( () => (t && t._pendingUpdate && (t._pendingUpdate(),
        t._pendingUpdate = null),
        () => {
            t && t._pendingUpdate && (t._pendingUpdate(),
            t._pendingUpdate = null)
        }
        )),
        null
    }
}
, 90080, (e, t, a) => {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var r = {
        default: function() {
            return p
        },
        defaultHead: function() {
            return m
        }
    };
    for (var o in r)
        Object.defineProperty(a, o, {
            enumerable: !0,
            get: r[o]
        });
    let s = e.r(81258)
      , i = e.r(44066)
      , l = e.r(87433)
      , n = i._(e.r(44440))
      , d = s._(e.r(34038))
      , c = e.r(75648);
    function m() {
        return [(0,
        l.jsx)("meta", {
            charSet: "utf-8"
        }, "charset"), (0,
        l.jsx)("meta", {
            name: "viewport",
            content: "width=device-width"
        }, "viewport")]
    }
    function u(e, t) {
        return "string" == typeof t || "number" == typeof t ? e : t.type === n.default.Fragment ? e.concat(n.default.Children.toArray(t.props.children).reduce( (e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
    }
    e.r(45694);
    let x = ["name", "httpEquiv", "charSet", "itemProp"];
    function h(e) {
        let t, a, r, o;
        return e.reduce(u, []).reverse().concat(m().reverse()).filter((t = new Set,
        a = new Set,
        r = new Set,
        o = {},
        e => {
            let s = !0
              , i = !1;
            if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
                i = !0;
                let a = e.key.slice(e.key.indexOf("$") + 1);
                t.has(a) ? s = !1 : t.add(a)
            }
            switch (e.type) {
            case "title":
            case "base":
                a.has(e.type) ? s = !1 : a.add(e.type);
                break;
            case "meta":
                for (let t = 0, a = x.length; t < a; t++) {
                    let a = x[t];
                    if (e.props.hasOwnProperty(a))
                        if ("charSet" === a)
                            r.has(a) ? s = !1 : r.add(a);
                        else {
                            let t = e.props[a]
                              , r = o[a] || new Set;
                            ("name" !== a || !i) && r.has(t) ? s = !1 : (r.add(t),
                            o[a] = r)
                        }
                }
            }
            return s
        }
        )).reverse().map( (e, t) => {
            let a = e.key || t;
            return n.default.cloneElement(e, {
                key: a
            })
        }
        )
    }
    let p = function({children: e}) {
        let t = (0,
        n.useContext)(c.HeadManagerContext);
        return (0,
        l.jsx)(d.default, {
            reduceComponentsToState: h,
            headManager: t,
            children: e
        })
    };
    ("function" == typeof a.default || "object" == typeof a.default && null !== a.default) && void 0 === a.default.__esModule && (Object.defineProperty(a.default, "__esModule", {
        value: !0
    }),
    Object.assign(a.default, a),
    t.exports = a.default)
}
, 19335, (e, t, a) => {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }),
    Object.defineProperty(a, "ImageConfigContext", {
        enumerable: !0,
        get: function() {
            return s
        }
    });
    let r = e.r(81258)._(e.r(44440))
      , o = e.r(9560)
      , s = r.default.createContext(o.imageConfigDefault)
}
, 96318, (e, t, a) => {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }),
    Object.defineProperty(a, "RouterContext", {
        enumerable: !0,
        get: function() {
            return r
        }
    });
    let r = e.r(81258)._(e.r(44440)).default.createContext(null)
}
, 886, (e, t, a) => {
    "use strict";
    function r(e, t) {
        let a = e || 75;
        return t?.qualities?.length ? t.qualities.reduce( (e, t) => Math.abs(t - a) < Math.abs(e - a) ? t : e, 0) : a
    }
    Object.defineProperty(a, "__esModule", {
        value: !0
    }),
    Object.defineProperty(a, "findClosestQuality", {
        enumerable: !0,
        get: function() {
            return r
        }
    })
}
, 97689, (e, t, a) => {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }),
    Object.defineProperty(a, "default", {
        enumerable: !0,
        get: function() {
            return i
        }
    });
    let r = e.r(886)
      , o = e.r(75527);
    function s({config: e, src: t, width: a, quality: s}) {
        if (t.startsWith("/") && t.includes("?") && e.localPatterns?.length === 1 && "**" === e.localPatterns[0].pathname && "" === e.localPatterns[0].search)
            throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`), "__NEXT_ERROR_CODE", {
                value: "E871",
                enumerable: !1,
                configurable: !0
            });
        let i = (0,
        r.findClosestQuality)(s, e)
          , l = (0,
        o.getDeploymentId)();
        return `${e.path}?url=${encodeURIComponent(t)}&w=${a}&q=${i}${t.startsWith("/") && l ? `&dpl=${l}` : ""}`
    }
    s.__next_img_default = !0;
    let i = s
}
, 36770, (e, t, a) => {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }),
    Object.defineProperty(a, "useMergedRef", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    let r = e.r(44440);
    function o(e, t) {
        let a = (0,
        r.useRef)(null)
          , o = (0,
        r.useRef)(null);
        return (0,
        r.useCallback)(r => {
            if (null === r) {
                let e = a.current;
                e && (a.current = null,
                e());
                let t = o.current;
                t && (o.current = null,
                t())
            } else
                e && (a.current = s(e, r)),
                t && (o.current = s(t, r))
        }
        , [e, t])
    }
    function s(e, t) {
        if ("function" != typeof e)
            return e.current = t,
            () => {
                e.current = null
            }
            ;
        {
            let a = e(t);
            return "function" == typeof a ? a : () => e(null)
        }
    }
    ("function" == typeof a.default || "object" == typeof a.default && null !== a.default) && void 0 === a.default.__esModule && (Object.defineProperty(a.default, "__esModule", {
        value: !0
    }),
    Object.assign(a.default, a),
    t.exports = a.default)
}
, 89315, (e, t, a) => {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }),
    Object.defineProperty(a, "Image", {
        enumerable: !0,
        get: function() {
            return v
        }
    });
    let r = e.r(81258)
      , o = e.r(44066)
      , s = e.r(87433)
      , i = o._(e.r(44440))
      , l = r._(e.r(65596))
      , n = r._(e.r(90080))
      , d = e.r(35070)
      , c = e.r(9560)
      , m = e.r(19335);
    e.r(45694);
    let u = e.r(96318)
      , x = r._(e.r(97689))
      , h = e.r(36770)
      , p = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        qualities: [75],
        path: "/_next/image",
        loader: "default",
        dangerouslyAllowSVG: !1,
        unoptimized: !0
    };
    function f(e, t, a, r, o, s, i) {
        let l = e?.src;
        e && e["data-loaded-src"] !== l && (e["data-loaded-src"] = l,
        ("decode"in e ? e.decode() : Promise.resolve()).catch( () => {}
        ).then( () => {
            if (e.parentElement && e.isConnected) {
                if ("empty" !== t && o(!0),
                a?.current) {
                    let t = new Event("load");
                    Object.defineProperty(t, "target", {
                        writable: !1,
                        value: e
                    });
                    let r = !1
                      , o = !1;
                    a.current({
                        ...t,
                        nativeEvent: t,
                        currentTarget: e,
                        target: e,
                        isDefaultPrevented: () => r,
                        isPropagationStopped: () => o,
                        persist: () => {}
                        ,
                        preventDefault: () => {
                            r = !0,
                            t.preventDefault()
                        }
                        ,
                        stopPropagation: () => {
                            o = !0,
                            t.stopPropagation()
                        }
                    })
                }
                r?.current && r.current(e)
            }
        }
        ))
    }
    function g(e) {
        return i.use ? {
            fetchPriority: e
        } : {
            fetchpriority: e
        }
    }
    "u" < typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
    let b = (0,
    i.forwardRef)( ({src: e, srcSet: t, sizes: a, height: r, width: o, decoding: l, className: n, style: d, fetchPriority: c, placeholder: m, loading: u, unoptimized: x, fill: p, onLoadRef: b, onLoadingCompleteRef: j, setBlurComplete: v, setShowAltText: N, sizesInput: y, onLoad: w, onError: C, ...P}, k) => {
        let S = (0,
        i.useCallback)(e => {
            e && (C && (e.src = e.src),
            e.complete && f(e, m, b, j, v, x, y))
        }
        , [e, m, b, j, v, C, x, y])
          , R = (0,
        h.useMergedRef)(k, S);
        return (0,
        s.jsx)("img", {
            ...P,
            ...g(c),
            loading: u,
            width: o,
            height: r,
            decoding: l,
            "data-nimg": p ? "fill" : "1",
            className: n,
            style: d,
            sizes: a,
            srcSet: t,
            src: e,
            ref: R,
            onLoad: e => {
                f(e.currentTarget, m, b, j, v, x, y)
            }
            ,
            onError: e => {
                N(!0),
                "empty" !== m && v(!0),
                C && C(e)
            }
        })
    }
    );
    function j({isAppRouter: e, imgAttributes: t}) {
        let a = {
            as: "image",
            imageSrcSet: t.srcSet,
            imageSizes: t.sizes,
            crossOrigin: t.crossOrigin,
            referrerPolicy: t.referrerPolicy,
            ...g(t.fetchPriority)
        };
        return e && l.default.preload ? (l.default.preload(t.src, a),
        null) : (0,
        s.jsx)(n.default, {
            children: (0,
            s.jsx)("link", {
                rel: "preload",
                href: t.srcSet ? void 0 : t.src,
                ...a
            }, "__nimg-" + t.src + t.srcSet + t.sizes)
        })
    }
    let v = (0,
    i.forwardRef)( (e, t) => {
        let a = (0,
        i.useContext)(u.RouterContext)
          , r = (0,
        i.useContext)(m.ImageConfigContext)
          , o = (0,
        i.useMemo)( () => {
            let e = p || r || c.imageConfigDefault
              , t = [...e.deviceSizes, ...e.imageSizes].sort( (e, t) => e - t)
              , a = e.deviceSizes.sort( (e, t) => e - t)
              , o = e.qualities?.sort( (e, t) => e - t);
            return {
                ...e,
                allSizes: t,
                deviceSizes: a,
                qualities: o,
                localPatterns: "u" < typeof window ? r?.localPatterns : e.localPatterns
            }
        }
        , [r])
          , {onLoad: l, onLoadingComplete: n} = e
          , h = (0,
        i.useRef)(l);
        (0,
        i.useEffect)( () => {
            h.current = l
        }
        , [l]);
        let f = (0,
        i.useRef)(n);
        (0,
        i.useEffect)( () => {
            f.current = n
        }
        , [n]);
        let[g,v] = (0,
        i.useState)(!1)
          , [N,y] = (0,
        i.useState)(!1)
          , {props: w, meta: C} = (0,
        d.getImgProps)(e, {
            defaultLoader: x.default,
            imgConf: o,
            blurComplete: g,
            showAltText: N
        });
        return (0,
        s.jsxs)(s.Fragment, {
            children: [(0,
            s.jsx)(b, {
                ...w,
                unoptimized: C.unoptimized,
                placeholder: C.placeholder,
                fill: C.fill,
                onLoadRef: h,
                onLoadingCompleteRef: f,
                setBlurComplete: v,
                setShowAltText: y,
                sizesInput: e.sizes,
                ref: t
            }), C.preload ? (0,
            s.jsx)(j, {
                isAppRouter: !a,
                imgAttributes: w
            }) : null]
        })
    }
    );
    ("function" == typeof a.default || "object" == typeof a.default && null !== a.default) && void 0 === a.default.__esModule && (Object.defineProperty(a.default, "__esModule", {
        value: !0
    }),
    Object.assign(a.default, a),
    t.exports = a.default)
}
, 32419, (e, t, a) => {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var r = {
        default: function() {
            return c
        },
        getImageProps: function() {
            return d
        }
    };
    for (var o in r)
        Object.defineProperty(a, o, {
            enumerable: !0,
            get: r[o]
        });
    let s = e.r(81258)
      , i = e.r(35070)
      , l = e.r(89315)
      , n = s._(e.r(97689));
    function d(e) {
        let {props: t} = (0,
        i.getImgProps)(e, {
            defaultLoader: n.default,
            imgConf: {
                deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                imageSizes: [32, 48, 64, 96, 128, 256, 384],
                qualities: [75],
                path: "/_next/image",
                loader: "default",
                dangerouslyAllowSVG: !1,
                unoptimized: !0
            }
        });
        for (let[e,a] of Object.entries(t))
            void 0 === a && delete t[e];
        return {
            props: t
        }
    }
    let c = l.Image
}
, 96027, (e, t, a) => {
    t.exports = e.r(32419)
}
, 31713, e => {
    "use strict";
    var t = e.i(87433)
      , a = e.i(44440);
    function r({unlocked: e=!1}) {
        return (0,
        t.jsx)("div", {
            className: "bg-primary text-primary-foreground text-center py-2 px-4 text-xs md:text-sm font-medium",
            children: e ? (0,
            t.jsxs)(t.Fragment, {
                children: [(0,
                t.jsx)("span", {
                    className: "text-accent",
                    children: "🔥"
                }), " Desconto exclusivo de 90% desbloqueado ", (0,
                t.jsx)("span", {
                    children: "•"
                }), " Valido por tempo limitado"]
            }) : (0,
            t.jsxs)(t.Fragment, {
                children: [(0,
                t.jsx)("span", {
                    className: "text-accent",
                    children: "🎉"
                }), " Campanha Especial de Pascoa 2026 ", (0,
                t.jsx)("span", {
                    className: "hidden sm:inline",
                    children: "•"
                }), " Promocao por tempo limitado"]
            })
        })
    }
    function o() {
        return (0,
        t.jsx)("header", {
            className: "bg-background border-b border-border",
            children: (0,
            t.jsx)("div", {
                className: "max-w-5xl mx-auto flex items-center justify-center py-4 px-4",
                children: (0,
                t.jsx)("div", {
                    className: "flex items-center gap-2",
                    children: (0,
                    t.jsx)(s, {})
                })
            })
        })
    }
    function s() {
        return (0,
        t.jsxs)("div", {
            className: "flex items-center gap-2",
            children: [(0,
            t.jsx)("div", {
                className: "w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center",
                children: (0,
                t.jsx)("span", {
                    className: "text-primary font-serif font-bold text-lg",
                    children: "CS"
                })
            }), (0,
            t.jsxs)("div", {
                className: "flex flex-col",
                children: [(0,
                t.jsx)("span", {
                    className: "font-serif text-primary text-xl md:text-2xl font-bold tracking-wide italic",
                    children: "CacauShow"
                }), (0,
                t.jsx)("div", {
                    className: "flex gap-0.5 justify-center",
                    children: [...Array(7)].map( (e, a) => (0,
                    t.jsx)("span", {
                        className: "text-accent text-[8px]",
                        children: "★"
                    }, a))
                })]
            })]
        })
    }
    var i = e.i(31763);
    let l = (0,
    i.default)("x", [["path", {
        d: "M18 6 6 18",
        key: "1bl5f8"
    }], ["path", {
        d: "m6 6 12 12",
        key: "d8bk6v"
    }]]);
    function n({onStart: e, onClose: a}) {
        return (0,
        t.jsxs)("div", {
            className: "fixed inset-0 z-50 flex sm:items-center sm:justify-center",
            children: [(0,
            t.jsx)("div", {
                className: "absolute inset-0 bg-foreground/60 backdrop-blur-sm",
                onClick: a
            }), (0,
            t.jsxs)("div", {
                className: "relative z-10 w-full h-full sm:h-auto sm:max-w-md sm:mx-4 sm:rounded-2xl bg-background overflow-y-auto overscroll-contain animate-in fade-in sm:zoom-in-95 slide-in-from-bottom-4 duration-300",
                children: [(0,
                t.jsx)("div", {
                    className: "sticky top-0 z-20 flex justify-end p-3 sm:absolute sm:top-0 sm:right-0 sm:p-3",
                    children: (0,
                    t.jsx)("button", {
                        onClick: a,
                        className: "text-muted-foreground hover:text-foreground transition-colors bg-background/90 backdrop-blur-sm rounded-full p-1.5 shadow-sm border border-border",
                        "aria-label": "Fechar",
                        children: (0,
                        t.jsx)(l, {
                            className: "w-5 h-5"
                        })
                    })
                }), (0,
                t.jsxs)("div", {
                    className: "flex flex-col items-center text-center px-6 pb-8 pt-2 sm:pt-4 sm:px-8 sm:pb-8 gap-4",
                    children: [(0,
                    t.jsx)("div", {
                        className: "w-14 h-14 rounded-xl border-2 border-border flex items-center justify-center bg-card shrink-0",
                        children: (0,
                        t.jsxs)("div", {
                            className: "flex flex-col items-center",
                            children: [(0,
                            t.jsxs)("div", {
                                className: "flex items-center gap-0.5",
                                children: [(0,
                                t.jsx)("div", {
                                    className: "w-5 h-5 rounded-full border border-primary flex items-center justify-center",
                                    children: (0,
                                    t.jsx)("span", {
                                        className: "text-primary font-serif font-bold text-[8px]",
                                        children: "CS"
                                    })
                                }), (0,
                                t.jsx)("span", {
                                    className: "font-serif text-primary text-[8px] font-bold italic",
                                    children: "CacauShow"
                                })]
                            }), (0,
                            t.jsx)("div", {
                                className: "flex gap-[1px]",
                                children: [...Array(7)].map( (e, a) => (0,
                                t.jsx)("span", {
                                    className: "text-accent text-[5px]",
                                    children: "★"
                                }, a))
                            })]
                        })
                    }), (0,
                    t.jsxs)("div", {
                        children: [(0,
                        t.jsxs)("div", {
                            className: "flex items-center justify-center gap-1",
                            children: [(0,
                            t.jsx)("span", {
                                className: "font-bold text-foreground text-lg",
                                children: "Cacau Show"
                            }), (0,
                            t.jsx)("svg", {
                                className: "w-4 h-4 text-[#1DA1F2]",
                                viewBox: "0 0 24 24",
                                fill: "currentColor",
                                children: (0,
                                t.jsx)("path", {
                                    d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                                })
                            })]
                        }), (0,
                        t.jsx)("p", {
                            className: "text-muted-foreground text-sm",
                            children: "Loja Oficial"
                        })]
                    }), (0,
                    t.jsx)("p", {
                        className: "text-xs tracking-[0.2em] text-muted-foreground font-semibold uppercase",
                        children: "Oferta Exclusiva"
                    }), (0,
                    t.jsx)("h2", {
                        className: "text-xl font-bold text-foreground",
                        children: "Voce foi selecionado"
                    }), (0,
                    t.jsx)("div", {
                        className: "bg-primary text-primary-foreground rounded-2xl w-full py-8",
                        children: (0,
                        t.jsxs)("p", {
                            className: "text-5xl font-black leading-tight",
                            children: ["ATE 90%", (0,
                            t.jsx)("br", {}), "OFF"]
                        })
                    }), (0,
                    t.jsx)("p", {
                        className: "text-sm text-muted-foreground leading-relaxed",
                        children: "Complete o desafio de desenho corretamente para desbloquear seu cupom de desconto"
                    }), (0,
                    t.jsxs)("div", {
                        className: "bg-card rounded-xl p-4 w-full text-sm",
                        children: [(0,
                        t.jsx)("p", {
                            className: "font-bold text-foreground mb-2 text-sm",
                            children: "Como funciona:"
                        }), (0,
                        t.jsxs)("ol", {
                            className: "text-muted-foreground space-y-1 text-xs",
                            children: [(0,
                            t.jsx)("li", {
                                children: "1. Desenhe o ovo de Pascoa no quadro"
                            }), (0,
                            t.jsx)("li", {
                                children: "2. Nosso sistema valida seu desenho"
                            }), (0,
                            t.jsx)("li", {
                                children: "3. Se aprovado, voce libera o desconto"
                            })]
                        })]
                    }), (0,
                    t.jsx)("button", {
                        onClick: e,
                        className: "bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm uppercase tracking-wider w-full py-4 rounded-xl transition-all duration-200 hover:shadow-lg active:scale-[0.98]",
                        children: "PARTICIPAR DO DESAFIO"
                    }), (0,
                    t.jsxs)("div", {
                        className: "flex items-center gap-2 text-xs text-muted-foreground pb-2",
                        children: [(0,
                        t.jsx)("span", {
                            className: "w-2 h-2 rounded-full bg-[#2d9b3a] animate-pulse"
                        }), "Oferta por tempo limitado"]
                    })]
                })]
            })]
        })
    }
    let d = ["Desenhe", "Analise", "Resultado", "Premio"];
    function c({currentStep: e}) {
        return (0,
        t.jsx)("div", {
            className: "flex items-center justify-center gap-2 py-6",
            children: d.map( (a, r) => (0,
            t.jsx)("div", {
                className: "flex items-center gap-2",
                children: (0,
                t.jsxs)("div", {
                    className: "flex flex-col items-center gap-1",
                    children: [(0,
                    t.jsx)("div", {
                        className: `h-1 w-16 md:w-20 rounded-full transition-colors duration-500 ${r <= e ? "bg-accent" : "bg-border"}`
                    }), (0,
                    t.jsx)("span", {
                        className: `text-xs font-medium transition-colors duration-500 ${r <= e ? "text-foreground" : "text-muted-foreground"}`,
                        children: a
                    })]
                })
            }, a))
        })
    }
    function m({initialMinutes: e=30, initialSeconds: r=0}) {
        let[o,s] = (0,
        a.useState)(60 * e + r);
        (0,
        a.useEffect)( () => {
            let e = setInterval( () => {
                s(e => e > 0 ? e - 1 : 0)
            }
            , 1e3);
            return () => clearInterval(e)
        }
        , []);
        let i = Math.floor(o / 60);
        return (0,
        t.jsxs)("div", {
            className: "flex items-center gap-2 bg-card border border-border rounded-xl px-5 py-3 shadow-sm",
            children: [(0,
            t.jsx)("span", {
                className: "text-destructive text-sm font-medium",
                children: "⏳ EXPIRA EM"
            }), (0,
            t.jsxs)("div", {
                className: "flex items-center gap-1",
                children: [(0,
                t.jsx)("div", {
                    className: "bg-primary text-primary-foreground rounded-lg px-3 py-1.5 font-bold text-lg tabular-nums min-w-[44px] text-center",
                    children: String(i).padStart(2, "0")
                }), (0,
                t.jsx)("span", {
                    className: "text-foreground font-bold text-lg",
                    children: ":"
                }), (0,
                t.jsx)("div", {
                    className: "bg-primary text-primary-foreground rounded-lg px-3 py-1.5 font-bold text-lg tabular-nums min-w-[44px] text-center",
                    children: String(o % 60).padStart(2, "0")
                })]
            }), (0,
            t.jsxs)("div", {
                className: "flex gap-4 text-[10px] text-muted-foreground -mt-1",
                children: [(0,
                t.jsx)("span", {
                    className: "ml-1",
                    children: "Min"
                }), (0,
                t.jsx)("span", {
                    className: "ml-2",
                    children: "Seg"
                })]
            })]
        })
    }
    let u = [{
        name: "Marrom",
        value: "#5a3825"
    }, {
        name: "Chocolate",
        value: "#8B4513"
    }, {
        name: "Dourado",
        value: "#d4a04a"
    }, {
        name: "Vermelho",
        value: "#e53935"
    }, {
        name: "Laranja",
        value: "#FF6F00"
    }, {
        name: "Amarelo",
        value: "#FFD600"
    }, {
        name: "Verde",
        value: "#2d9b3a"
    }, {
        name: "Azul",
        value: "#1976D2"
    }, {
        name: "Rosa",
        value: "#E91E7D"
    }, {
        name: "Roxo",
        value: "#7B1FA2"
    }, {
        name: "Branco",
        value: "#FFFFFF"
    }, {
        name: "Preto",
        value: "#212121"
    }]
      , x = [{
        label: "P",
        size: 2
    }, {
        label: "M",
        size: 5
    }, {
        label: "G",
        size: 10
    }];
    function h({onSubmit: e}) {
        let r = (0,
        a.useRef)(null)
          , o = (0,
        a.useRef)(null)
          , [s,i] = (0,
        a.useState)(!1)
          , [l,n] = (0,
        a.useState)(!1)
          , [d,h] = (0,
        a.useState)("#5a3825")
          , [p,f] = (0,
        a.useState)(5)
          , [g,b] = (0,
        a.useState)({
            width: 400,
            height: 450
        })
          , [j,v] = (0,
        a.useState)(!1)
          , [N,y] = (0,
        a.useState)("");
        (0,
        a.useEffect)( () => {
            let e = () => {
                let e = Math.min(window.innerWidth - 32, 500)
                  , t = window.innerWidth >= 640 ? Math.min(e, 420) : e;
                b({
                    width: t,
                    height: Math.round(1.12 * t)
                })
            }
            ;
            return e(),
            window.addEventListener("resize", e),
            () => window.removeEventListener("resize", e)
        }
        , []),
        (0,
        a.useEffect)( () => {
            let e = o.current;
            if (!e)
                return;
            let t = e.getContext("2d");
            if (!t)
                return;
            t.clearRect(0, 0, e.width, e.height),
            t.save(),
            t.setLineDash([8, 6]),
            t.strokeStyle = "#c4b4a4",
            t.lineWidth = 2.5;
            let a = e.width / 2
              , r = e.height / 2 + .02 * e.height
              , s = .3 * e.width
              , i = .4 * e.height;
            t.beginPath();
            for (let e = 0; e < 2 * Math.PI; e += .005) {
                let o = 1 - .22 * Math.cos(e)
                  , l = a + s * Math.sin(e) * o
                  , n = r - i * Math.cos(e);
                0 === e ? t.moveTo(l, n) : t.lineTo(l, n)
            }
            t.closePath(),
            t.stroke(),
            [-.12, .1].forEach(e => {
                let o = r + i * e
                  , l = s * (1 - .22 * Math.sin(Math.acos(e)));
                t.beginPath(),
                t.moveTo(a - .85 * l, o),
                t.quadraticCurveTo(a, o - 5, a + .85 * l, o),
                t.stroke()
            }
            ),
            t.restore(),
            l || (t.fillStyle = "#b0a090",
            t.font = "14px sans-serif",
            t.textAlign = "center",
            t.fillText("Desenhe o ovo aqui", a, r + 5))
        }
        , [g, l]);
        let w = (0,
        a.useCallback)(e => {
            let t = r.current;
            if (!t)
                return {
                    x: 0,
                    y: 0
                };
            let a = t.getBoundingClientRect();
            return "touches"in e ? {
                x: (e.touches[0].clientX - a.left) / a.width * t.width,
                y: (e.touches[0].clientY - a.top) / a.height * t.height
            } : {
                x: (e.clientX - a.left) / a.width * t.width,
                y: (e.clientY - a.top) / a.height * t.height
            }
        }
        , [])
          , C = (0,
        a.useCallback)(e => {
            e.preventDefault(),
            i(!0),
            n(!0);
            let t = r.current;
            if (!t)
                return;
            let a = t.getContext("2d");
            if (!a)
                return;
            let o = w(e);
            a.beginPath(),
            a.moveTo(o.x, o.y),
            a.strokeStyle = d,
            a.lineWidth = p,
            a.lineCap = "round",
            a.lineJoin = "round",
            a.setLineDash([])
        }
        , [w, d, p])
          , P = (0,
        a.useCallback)(e => {
            if (e.preventDefault(),
            !s)
                return;
            let t = r.current;
            if (!t)
                return;
            let a = t.getContext("2d");
            if (!a)
                return;
            let o = w(e);
            a.lineTo(o.x, o.y),
            a.stroke()
        }
        , [s, w])
          , k = (0,
        a.useCallback)( () => {
            i(!1)
        }
        , [])
          , S = (0,
        a.useCallback)( () => {
            let e = r.current;
            if (!e)
                return;
            let t = e.getContext("2d");
            t && (t.clearRect(0, 0, e.width, e.height),
            n(!1))
        }
        , [])
          , R = (0,
        a.useCallback)( () => {
            let e = r.current
              , t = o.current;
            if (!e || !t)
                return;
            let a = document.createElement("canvas");
            a.width = e.width,
            a.height = e.height;
            let s = a.getContext("2d");
            s && (s.fillStyle = "#ffffff",
            s.fillRect(0, 0, a.width, a.height),
            s.drawImage(t, 0, 0),
            s.drawImage(e, 0, 0),
            y(a.toDataURL("image/png")),
            v(!0))
        }
        , [])
          , O = (0,
        a.useCallback)( () => {
            v(!1),
            e()
        }
        , [e]);
        return (0,
        t.jsxs)("div", {
            className: "flex flex-col items-center pb-8",
            children: [(0,
            t.jsx)(c, {
                currentStep: 0
            }), (0,
            t.jsxs)("div", {
                className: "text-center mb-6 px-4",
                children: [(0,
                t.jsxs)("h1", {
                    className: "text-2xl md:text-3xl font-serif text-foreground",
                    children: ["Desenhe e ", (0,
                    t.jsx)("span", {
                        className: "text-accent font-bold italic",
                        children: "Ganhe!"
                    })]
                }), (0,
                t.jsx)("p", {
                    className: "text-muted-foreground text-sm mt-2 max-w-md mx-auto",
                    children: "Desenhe um ovo de Pascoa no quadro abaixo e desbloqueie seu presente"
                })]
            }), (0,
            t.jsxs)("div", {
                className: "flex flex-col sm:flex-row items-start justify-center gap-4 px-4 w-full max-w-3xl mx-auto",
                children: [(0,
                t.jsx)("div", {
                    className: "bg-card rounded-2xl shadow-lg border border-border p-3 flex-shrink-0",
                    children: (0,
                    t.jsxs)("div", {
                        className: "relative",
                        style: {
                            width: g.width,
                            height: g.height
                        },
                        children: [(0,
                        t.jsx)("canvas", {
                            ref: o,
                            width: g.width,
                            height: g.height,
                            className: "absolute inset-0 rounded-xl bg-background pointer-events-none",
                            style: {
                                width: g.width,
                                height: g.height
                            }
                        }), (0,
                        t.jsx)("canvas", {
                            ref: r,
                            width: g.width,
                            height: g.height,
                            className: "absolute inset-0 rounded-xl cursor-crosshair touch-none",
                            style: {
                                width: g.width,
                                height: g.height
                            },
                            onMouseDown: C,
                            onMouseMove: P,
                            onMouseUp: k,
                            onMouseLeave: k,
                            onTouchStart: C,
                            onTouchMove: P,
                            onTouchEnd: k
                        })]
                    })
                }), (0,
                t.jsxs)("div", {
                    className: "bg-card rounded-2xl shadow-lg border border-border p-4 sm:p-3 w-full sm:w-auto flex flex-col gap-4",
                    children: [(0,
                    t.jsxs)("div", {
                        children: [(0,
                        t.jsx)("p", {
                            className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2",
                            children: "Cores"
                        }), (0,
                        t.jsx)("div", {
                            className: "grid grid-cols-6 sm:grid-cols-2 gap-2",
                            children: u.map(e => (0,
                            t.jsx)("button", {
                                onClick: () => h(e.value),
                                title: e.name,
                                className: `w-9 h-9 rounded-lg border-2 transition-all duration-150 hover:scale-110 ${d === e.value ? "border-foreground ring-2 ring-accent/50 scale-110" : "border-border"}`,
                                style: {
                                    backgroundColor: e.value
                                },
                                "aria-label": `Cor ${e.name}`
                            }, e.value))
                        })]
                    }), (0,
                    t.jsxs)("div", {
                        children: [(0,
                        t.jsx)("p", {
                            className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2",
                            children: "Pincel"
                        }), (0,
                        t.jsx)("div", {
                            className: "flex sm:flex-col gap-2",
                            children: x.map(e => (0,
                            t.jsx)("button", {
                                onClick: () => f(e.size),
                                className: `flex items-center justify-center w-9 h-9 rounded-lg border-2 transition-all text-xs font-bold ${p === e.size ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background text-foreground hover:bg-secondary"}`,
                                "aria-label": `Tamanho do pincel ${e.label}`,
                                children: e.label
                            }, e.label))
                        })]
                    }), (0,
                    t.jsxs)("div", {
                        className: "flex sm:flex-col gap-2",
                        children: [(0,
                        t.jsxs)("button", {
                            onClick: () => h("#FFFFFF"),
                            className: `flex-1 sm:flex-none flex items-center justify-center gap-1 px-3 py-2 rounded-lg border-2 text-xs font-semibold transition-all ${"#FFFFFF" === d ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground hover:bg-secondary"}`,
                            "aria-label": "Borracha",
                            children: [(0,
                            t.jsx)("svg", {
                                className: "w-4 h-4",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                strokeWidth: 2,
                                children: (0,
                                t.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M6 18L18 6M6 6l12 12"
                                })
                            }), "Borracha"]
                        }), (0,
                        t.jsxs)("button", {
                            onClick: S,
                            className: "flex-1 sm:flex-none flex items-center justify-center gap-1 px-3 py-2 rounded-lg border-2 border-destructive/30 text-destructive text-xs font-semibold hover:bg-destructive/10 transition-all",
                            "aria-label": "Limpar tudo",
                            children: [(0,
                            t.jsx)("svg", {
                                className: "w-4 h-4",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                strokeWidth: 2,
                                children: (0,
                                t.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                })
                            }), "Limpar"]
                        })]
                    })]
                })]
            }), (0,
            t.jsxs)("div", {
                className: "flex flex-col items-center gap-4 mt-6 px-4 w-full max-w-md",
                children: [(0,
                t.jsx)("button", {
                    onClick: R,
                    disabled: !l,
                    className: "bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm uppercase tracking-wider w-full py-4 rounded-xl transition-all duration-200 hover:shadow-lg active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed",
                    children: "ENVIAR DESENHO"
                }), (0,
                t.jsx)(m, {
                    initialMinutes: 30,
                    initialSeconds: 0
                })]
            }), j && (0,
            t.jsx)("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4",
                children: (0,
                t.jsxs)("div", {
                    className: "bg-background rounded-2xl shadow-2xl max-w-sm w-full overflow-hidden animate-in fade-in zoom-in-95 duration-300",
                    children: [(0,
                    t.jsxs)("div", {
                        className: "bg-primary px-5 py-4",
                        children: [(0,
                        t.jsx)("h2", {
                            className: "text-primary-foreground font-serif text-lg font-bold text-center text-balance",
                            children: "Seu desenho esta correto?"
                        }), (0,
                        t.jsx)("p", {
                            className: "text-primary-foreground/80 text-xs text-center mt-1",
                            children: "Nao tem algo para mudar?"
                        })]
                    }), (0,
                    t.jsxs)("div", {
                        className: "p-5",
                        children: [(0,
                        t.jsx)("div", {
                            className: "rounded-xl border-2 border-border overflow-hidden shadow-sm",
                            children: (0,
                            t.jsx)("img", {
                                src: N,
                                alt: "Seu desenho",
                                className: "w-full h-auto"
                            })
                        }), (0,
                        t.jsx)("div", {
                            className: "mt-4 bg-accent/10 border border-accent/30 rounded-lg p-3",
                            children: (0,
                            t.jsxs)("p", {
                                className: "text-xs text-center text-foreground font-medium",
                                children: ["Atencao: voce so tem ", (0,
                                t.jsx)("span", {
                                    className: "font-bold text-destructive",
                                    children: "uma chance"
                                }), " de desenho para garantir o premio."]
                            })
                        }), (0,
                        t.jsxs)("div", {
                            className: "mt-4 flex gap-3",
                            children: [(0,
                            t.jsx)("button", {
                                onClick: () => v(!1),
                                className: "flex-1 py-3 px-4 rounded-xl border-2 border-border text-foreground font-semibold text-sm hover:bg-secondary transition-all",
                                children: "Voltar e editar"
                            }), (0,
                            t.jsx)("button", {
                                onClick: O,
                                className: "flex-1 py-3 px-4 rounded-xl bg-[#2d9b3a] hover:bg-[#248a30] text-white font-bold text-sm transition-all shadow-md hover:shadow-lg active:scale-[0.98]",
                                children: "Confirmar envio"
                            })]
                        })]
                    })]
                })
            })]
        })
    }
    function p({onComplete: e}) {
        let[r,o] = (0,
        a.useState)(0)
          , [s,i] = (0,
        a.useState)("Recebendo desenho...");
        return (0,
        a.useEffect)( () => {
            let t = [{
                at: 15,
                text: "Analisando tracos..."
            }, {
                at: 40,
                text: "Verificando proporcoes..."
            }, {
                at: 65,
                text: "Comparando com modelo..."
            }, {
                at: 85,
                text: "Validando resultado..."
            }, {
                at: 95,
                text: "Aprovando participacao..."
            }]
              , a = setInterval( () => {
                o(r => {
                    let o = r + 1
                      , s = t.find(e => e.at === o);
                    return s && i(s.text),
                    o >= 100 && (clearInterval(a),
                    setTimeout(e, 500)),
                    o
                }
                )
            }
            , 40);
            return () => clearInterval(a)
        }
        , [e]),
        (0,
        t.jsxs)("div", {
            className: "flex flex-col items-center py-12 px-4",
            children: [(0,
            t.jsx)(c, {
                currentStep: 1
            }), (0,
            t.jsxs)("div", {
                className: "mt-8 flex flex-col items-center gap-6 max-w-md w-full",
                children: [(0,
                t.jsxs)("div", {
                    className: "relative w-24 h-24",
                    children: [(0,
                    t.jsx)("div", {
                        className: "absolute inset-0 rounded-full border-4 border-border"
                    }), (0,
                    t.jsx)("div", {
                        className: "absolute inset-0 rounded-full border-4 border-accent border-t-transparent animate-spin",
                        style: {
                            animationDuration: "1s"
                        }
                    }), (0,
                    t.jsx)("div", {
                        className: "absolute inset-0 flex items-center justify-center",
                        children: (0,
                        t.jsx)("svg", {
                            className: "w-10 h-10 text-accent",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            children: (0,
                            t.jsx)("path", {
                                d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            })
                        })
                    })]
                }), (0,
                t.jsxs)("div", {
                    className: "text-center",
                    children: [(0,
                    t.jsx)("h2", {
                        className: "text-xl font-serif text-foreground font-bold",
                        children: "Analisando seu desenho"
                    }), (0,
                    t.jsx)("p", {
                        className: "text-muted-foreground text-sm mt-1",
                        children: s
                    })]
                }), (0,
                t.jsx)("div", {
                    className: "w-full bg-border rounded-full h-3 overflow-hidden",
                    children: (0,
                    t.jsx)("div", {
                        className: "bg-accent h-full rounded-full transition-all duration-200",
                        style: {
                            width: `${r}%`
                        }
                    })
                }), (0,
                t.jsxs)("p", {
                    className: "text-xs text-muted-foreground",
                    children: [r, "% concluido"]
                })]
            })]
        })
    }
    function f({onViewProducts: e}) {
        let r = (0,
        a.useRef)(null);
        return (0,
        a.useEffect)( () => {
            let e, t = r.current;
            if (!t)
                return;
            let a = t.getContext("2d");
            if (!a)
                return;
            t.width = window.innerWidth,
            t.height = window.innerHeight;
            let o = []
              , s = ["#5a3825", "#d4a04a", "#e53935", "#2d9b3a", "#f5ede4", "#8a7262", "#ff9800", "#ff5722"];
            for (let e = 0; e < 150; e++)
                o.push({
                    x: Math.random() * t.width,
                    y: Math.random() * t.height - t.height,
                    w: 8 * Math.random() + 4,
                    h: 4 * Math.random() + 2,
                    color: s[Math.floor(Math.random() * s.length)],
                    angle: Math.random() * Math.PI * 2,
                    speed: 3 * Math.random() + 1.5,
                    rotSpeed: (Math.random() - .5) * .1,
                    drift: (Math.random() - .5) * 1.5
                });
            let i = () => {
                a.clearRect(0, 0, t.width, t.height);
                let r = !0;
                for (let e of o)
                    e.y += e.speed,
                    e.x += e.drift,
                    e.angle += e.rotSpeed,
                    e.y < t.height + 20 && (r = !1),
                    a.save(),
                    a.translate(e.x, e.y),
                    a.rotate(e.angle),
                    a.fillStyle = e.color,
                    a.fillRect(-e.w / 2, -e.h / 2, e.w, e.h),
                    a.restore();
                r || (e = requestAnimationFrame(i))
            }
            ;
            return i(),
            () => cancelAnimationFrame(e)
        }
        , []),
        (0,
        t.jsxs)("div", {
            className: "relative min-h-[70vh] flex flex-col items-center",
            children: [(0,
            t.jsx)("canvas", {
                ref: r,
                className: "absolute inset-0 pointer-events-none z-10",
                style: {
                    width: "100%",
                    height: "100%"
                }
            }), (0,
            t.jsxs)("div", {
                className: "relative z-20 flex flex-col items-center px-4 w-full max-w-lg",
                children: [(0,
                t.jsx)(c, {
                    currentStep: 3
                }), (0,
                t.jsx)("div", {
                    className: "mt-8 w-20 h-20 rounded-full border-4 border-[#2d9b3a] flex items-center justify-center animate-in zoom-in duration-500",
                    children: (0,
                    t.jsx)("svg", {
                        className: "w-10 h-10 text-[#2d9b3a]",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "3",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: (0,
                        t.jsx)("path", {
                            d: "M20 6L9 17l-5-5"
                        })
                    })
                }), (0,
                t.jsx)("h1", {
                    className: "mt-6 text-2xl md:text-3xl font-serif text-foreground text-center italic",
                    children: "Participacao Aprovada com Sucesso"
                }), (0,
                t.jsx)("p", {
                    className: "mt-4 text-muted-foreground text-center text-sm max-w-sm",
                    children: "Seu desenho foi aprovado! Voce desbloqueou acesso exclusivo a nossa loja de Pascoa."
                }), (0,
                t.jsxs)("p", {
                    className: "mt-3 text-center text-sm",
                    children: ["Ovos de Pascoa com ate ", (0,
                    t.jsx)("span", {
                        className: "text-[#2d9b3a] font-bold",
                        children: "90% de desconto"
                    }), " esperando por voce! 🎁"]
                }), (0,
                t.jsxs)("button", {
                    onClick: e,
                    className: "mt-8 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm w-full max-w-sm py-4 rounded-xl transition-all duration-200 hover:shadow-lg active:scale-[0.98] flex items-center justify-center gap-2",
                    children: [(0,
                    t.jsx)("span", {
                        children: "🎁"
                    }), "Ver ovos com 90% OFF"]
                }), (0,
                t.jsxs)("p", {
                    className: "mt-4 text-xs text-muted-foreground flex items-center gap-1.5",
                    children: [(0,
                    t.jsx)("span", {
                        children: "⏳"
                    }), " Desconto valido por tempo limitado"]
                })]
            })]
        })
    }
    var g = e.i(96027);
    let b = (0,
    i.default)("shopping-cart", [["circle", {
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
    function j({name: e, originalPrice: a, salePrice: r, discount: o, image: s, onBuy: i}) {
        return (0,
        t.jsxs)("div", {
            className: "bg-card rounded-2xl border border-border p-4 flex flex-col items-center gap-3 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5",
            children: [(0,
            t.jsxs)("div", {
                className: "relative w-full aspect-square flex items-center justify-center",
                children: [(0,
                t.jsx)(g.default, {
                    src: s,
                    alt: e,
                    width: 200,
                    height: 200,
                    className: "object-contain w-full h-full rounded-lg"
                }), (0,
                t.jsx)("span", {
                    className: "absolute top-2 right-2 bg-destructive text-destructive-foreground text-xs font-bold px-2 py-1 rounded-full",
                    children: o
                })]
            }), (0,
            t.jsxs)("div", {
                className: "w-full text-left",
                children: [(0,
                t.jsx)("h3", {
                    className: "text-[13px] font-medium text-foreground line-clamp-2 leading-snug min-h-[2.5rem] tracking-tight",
                    children: e
                }), (0,
                t.jsx)("p", {
                    className: "text-xs text-muted-foreground line-through mt-1.5",
                    children: a
                }), (0,
                t.jsxs)("p", {
                    className: "text-lg font-bold text-[#2d9b3a] tracking-tight",
                    children: [r, (0,
                    t.jsx)("span", {
                        className: "text-xs font-normal text-muted-foreground ml-1",
                        children: "/un"
                    })]
                })]
            }), (0,
            t.jsxs)("button", {
                onClick: i,
                className: "bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-semibold w-full py-2.5 rounded-lg transition-all duration-200 hover:shadow-md active:scale-[0.98] flex items-center justify-center gap-2",
                children: [(0,
                t.jsx)(b, {
                    className: "w-4 h-4"
                }), "COMPRAR"]
            })]
        })
    }
    let v = [{
        src: "/images/banners/p1.jpg",
        alt: "Pascoa Cacau Show - A maior Pascoa do Brasil. Aproveite!"
    }, {
        src: "/images/banners/p2.jpg",
        alt: "Pascoa Cacau Show Pre-venda - A epoca mais gostosa do ano chegou mais cedo. Compre ja!"
    }, {
        src: "/images/banners/p3.jpg",
        alt: "The Powerpuff Girls - Bolsinhas das Meninas Superpoderosas. Garanta o seu!"
    }];
    function N() {
        let[e,r] = (0,
        a.useState)(0)
          , [o,s] = (0,
        a.useState)(!1)
          , i = (0,
        a.useCallback)(e => {
            o || (s(!0),
            r(e),
            setTimeout( () => s(!1), 500))
        }
        , [o])
          , l = (0,
        a.useCallback)( () => {
            i((e + 1) % v.length)
        }
        , [e, i])
          , n = (0,
        a.useCallback)( () => {
            i((e - 1 + v.length) % v.length)
        }
        , [e, i]);
        return (0,
        a.useEffect)( () => {
            let e = setInterval(l, 4e3);
            return () => clearInterval(e)
        }
        , [l]),
        (0,
        t.jsxs)("div", {
            className: "relative w-full overflow-hidden rounded-2xl shadow-lg border border-border bg-card",
            children: [(0,
            t.jsx)("div", {
                className: "flex transition-transform duration-500 ease-in-out",
                style: {
                    transform: `translateX(-${100 * e}%)`
                },
                children: v.map( (e, a) => (0,
                t.jsx)("div", {
                    className: "min-w-full relative aspect-[2.5/1]",
                    children: (0,
                    t.jsx)(g.default, {
                        src: e.src,
                        alt: e.alt,
                        fill: !0,
                        className: "object-cover",
                        sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px",
                        priority: 0 === a
                    })
                }, a))
            }), (0,
            t.jsx)("button", {
                onClick: n,
                className: "absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-background transition-colors shadow-md",
                "aria-label": "Banner anterior",
                children: (0,
                t.jsx)("svg", {
                    className: "w-5 h-5",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    strokeWidth: 2,
                    children: (0,
                    t.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M15 19l-7-7 7-7"
                    })
                })
            }), (0,
            t.jsx)("button", {
                onClick: l,
                className: "absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-background transition-colors shadow-md",
                "aria-label": "Proximo banner",
                children: (0,
                t.jsx)("svg", {
                    className: "w-5 h-5",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    strokeWidth: 2,
                    children: (0,
                    t.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M9 5l7 7-7 7"
                    })
                })
            }), (0,
            t.jsx)("div", {
                className: "absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2",
                children: v.map( (a, r) => (0,
                t.jsx)("button", {
                    onClick: () => i(r),
                    className: `w-2.5 h-2.5 rounded-full transition-all duration-300 ${r === e ? "bg-foreground w-6" : "bg-foreground/40 hover:bg-foreground/60"}`,
                    "aria-label": `Ir para banner ${r + 1}`
                }, r))
            })]
        })
    }
    let y = [{
        name: "Ovo de Pascoa de Colher Duo Do Chef 300g",
        originalPrice: "R$ 239,90",
        salePrice: "R$ 25,90",
        discount: "-89%",
        image: "/images/products/ovo-colher-chef.png",
        sku: "1003511",
        description: "Ovo de colher com duas camadas de recheio cremoso assinado pelo Chef. Para saborear de colher. Apresentado em caixa premium preta com acabamento sofisticado. Cada metade traz um sabor unico e irresistivel.",
        reviews: [{
            name: "Ricardo A.",
            initial: "R",
            color: "#d4a04a",
            rating: 5,
            date: "18/03/2026",
            text: "O melhor ovo de colher que ja provei! Os dois sabores sao espetaculares e o chocolate e premium."
        }, {
            name: "Vanessa T.",
            initial: "V",
            color: "#5a3825",
            rating: 5,
            date: "16/03/2026",
            text: "Presenteei meu marido e ele amou! A caixa e sofisticada e o sabor e incrivel."
        }, {
            name: "Eduardo S.",
            initial: "E",
            color: "#d4a04a",
            rating: 5,
            date: "14/03/2026",
            text: "Qualidade de chocolateria fina! O recheio duo e uma experiencia unica. Vale cada centavo."
        }, {
            name: "Simone B.",
            initial: "S",
            color: "#5a3825",
            rating: 5,
            date: "11/03/2026",
            text: "Caixa linda, chocolate divino. Vai ser meu presente de Pascoa todo ano!"
        }, {
            name: "Gabriel N.",
            initial: "G",
            color: "#d4a04a",
            rating: 4,
            date: "08/03/2026",
            text: "Embalagem premium e sabor incrivel. Superou todas as expectativas."
        }]
    }, {
        name: "Ovo de Pascoa Estojo Scooby-Doo 170g",
        originalPrice: "R$ 119,99",
        salePrice: "R$ 27,99",
        discount: "-77%",
        image: "/images/products/ovo-scooby-doo.webp",
        sku: "1003934",
        description: "O Ovo de Pascoa Estojo Scooby-Doo e feito com o delicioso chocolate ao leite e drageados, acompanhado de um estojo pelucia exclusivo do Scooby-Doo. Perfeito para criancas e fas do personagem.",
        reviews: [{
            name: "Paula M.",
            initial: "P",
            color: "#5a3825",
            rating: 5,
            date: "17/03/2026",
            text: "Meu filho pirou com a pelucia do Scooby! O chocolate e delicioso e o estojo e lindo demais."
        }, {
            name: "Fernanda R.",
            initial: "F",
            color: "#d4a04a",
            rating: 5,
            date: "15/03/2026",
            text: "Presente perfeito! A pelucia e de otima qualidade e o chocolate ao leite e maravilhoso."
        }, {
            name: "Carlos T.",
            initial: "C",
            color: "#5a3825",
            rating: 5,
            date: "12/03/2026",
            text: "Comprei para minha sobrinha e ela amou. A pelucia do Scooby e muito fofa e bem feita."
        }, {
            name: "Juliana S.",
            initial: "J",
            color: "#d4a04a",
            rating: 4,
            date: "09/03/2026",
            text: "Otimo custo-beneficio! Pelucia linda e chocolate gostoso. Recomendo!"
        }]
    }, {
        name: "Ovo De Pascoa Brasil Copa Do Mundo CBF Joga Bola Lancamento 2026 170g",
        originalPrice: "R$ 249,90",
        salePrice: "R$ 25,90",
        discount: "-90%",
        image: "/images/products/ovo-copa.jpg",
        sku: "1003940",
        description: "Edicao limitada! Ovo de chocolate ao leite com a tematica da Selecao Brasileira e Copa do Mundo 2026, acompanhado de uma bola de futebol exclusiva. Chocolate cremoso e de alta qualidade, com embalagem colecionavel nas cores verde e amarelo. Perfeito para presentear fas de futebol e amantes de chocolate. Peso: 170g.",
        reviews: [{
            name: "Joao P.",
            initial: "J",
            color: "#5a3825",
            rating: 5,
            date: "15/03/2026",
            text: "Meu filho pirou com a bola da CBF! O ovo e delicioso e a embalagem e colecionavel. Melhor presente de Pascoa!"
        }, {
            name: "Marcelo R.",
            initial: "M",
            color: "#5a3825",
            rating: 5,
            date: "13/03/2026",
            text: "Edicao limitada incrivel! A bola e de otima qualidade e o chocolate ao leite e perfeito. Ja comprei mais dois pra dar de presente."
        }, {
            name: "Camila T.",
            initial: "C",
            color: "#d4a04a",
            rating: 5,
            date: "10/03/2026",
            text: "Comprei pro meu sobrinho que e fanatico por futebol. Ele amou! A embalagem verde e amarela e linda demais."
        }, {
            name: "Anderson S.",
            initial: "A",
            color: "#d4a04a",
            rating: 4,
            date: "07/03/2026",
            text: "Produto top! A bola de futebol e um brinde sensacional. Chocolate gostoso como sempre. So queria que fosse maior!"
        }, {
            name: "Luciana M.",
            initial: "L",
            color: "#5a3825",
            rating: 5,
            date: "04/03/2026",
            text: "Lancamento perfeito pra Copa 2026! Meus filhos disputaram a bola. Vou ter que comprar outro! Chocolate ao leite impecavel."
        }]
    }, {
        name: "Ovo de Pascoa ao Leite Pelucia Snoopy 170g",
        originalPrice: "R$ 169,90",
        salePrice: "R$ 25,90",
        discount: "-85%",
        image: "/images/products/ovo-snoopy.jpg",
        sku: "1003941",
        description: "Ovo de Pascoa de chocolate ao leite acompanhado de uma adoravel pelucia do Snoopy. Perfeito para criancas e fas do personagem. Chocolate cremoso e suave, com embalagem colorida e divertida.",
        reviews: [{
            name: "Ana C.",
            initial: "A",
            color: "#d4a04a",
            rating: 5,
            date: "14/03/2026",
            text: "Minha filha amou a pelucia do Snoopy! Chocolate delicioso e a embalagem e muito fofa."
        }, {
            name: "Roberto S.",
            initial: "R",
            color: "#5a3825",
            rating: 5,
            date: "12/03/2026",
            text: "Presente perfeito de Pascoa! A pelucia e de otima qualidade e o chocolate e maravilhoso."
        }, {
            name: "Marina L.",
            initial: "M",
            color: "#d4a04a",
            rating: 4,
            date: "08/03/2026",
            text: "Muito bonito o conjunto. Chocolate gostoso, pelucia fofa. So acho que poderia ser um pouco maior."
        }, {
            name: "Pedro H.",
            initial: "P",
            color: "#5a3825",
            rating: 5,
            date: "05/03/2026",
            text: "Comprei para minha sobrinha e ela ficou encantada com o Snoopy. Chocolate de primeira!"
        }]
    }, {
        name: "Ovo de Pascoa ao Leite Meninas Superpoderosas Florzinha 150g",
        originalPrice: "R$ 149,90",
        salePrice: "R$ 25,90",
        discount: "-83%",
        image: "/images/products/ovo-ppg-1.jpg",
        sku: "1003942",
        description: "Ovo de chocolate ao leite tematico das Meninas Superpoderosas, edicao Florzinha. Embalagem especial com bolsinha colecionavel. Chocolate cremoso e saboroso para os fas do desenho.",
        reviews: [{
            name: "Fernanda A.",
            initial: "F",
            color: "#d4a04a",
            rating: 5,
            date: "16/03/2026",
            text: "Minha filha ama as Meninas Superpoderosas! A bolsinha e linda e o chocolate e delicioso."
        }, {
            name: "Juliana R.",
            initial: "J",
            color: "#5a3825",
            rating: 5,
            date: "11/03/2026",
            text: "Produto lindo! A embalagem e impecavel e o chocolate ao leite muito gostoso."
        }, {
            name: "Carlos M.",
            initial: "C",
            color: "#d4a04a",
            rating: 4,
            date: "06/03/2026",
            text: "Comprei as tres versoes para minha neta. Ela adorou colecionar as bolsinhas!"
        }]
    }, {
        name: "Ovo de Pascoa ao Leite Meninas Superpoderosas Lindinha 150g",
        originalPrice: "R$ 159,90",
        salePrice: "R$ 25,90",
        discount: "-84%",
        image: "/images/products/ovo-ppg-2.jpg",
        sku: "1003943",
        description: "Ovo de chocolate ao leite tematico das Meninas Superpoderosas, edicao Lindinha. Acompanha bolsinha exclusiva colecionavel. Ideal para presentear os fas do desenho animado.",
        reviews: [{
            name: "Patricia V.",
            initial: "P",
            color: "#5a3825",
            rating: 5,
            date: "15/03/2026",
            text: "A Lindinha e a favorita da minha filha! O ovo e lindo e o chocolate muito bom."
        }, {
            name: "Sandra M.",
            initial: "S",
            color: "#d4a04a",
            rating: 5,
            date: "09/03/2026",
            text: "Embalagem perfeita! A bolsinha e colecionavel e vem com otima qualidade."
        }, {
            name: "Diego F.",
            initial: "D",
            color: "#5a3825",
            rating: 4,
            date: "03/03/2026",
            text: "Presente otimo pra Pascoa. Chocolate ao leite gostoso e embalagem caprichada."
        }]
    }, {
        name: "Ovo de Pascoa ao Leite Meninas Superpoderosas Docinho 150g",
        originalPrice: "R$ 139,90",
        salePrice: "R$ 25,90",
        discount: "-81%",
        image: "/images/products/ovo-ppg-3.jpg",
        sku: "1003944",
        description: "Ovo de chocolate ao leite tematico das Meninas Superpoderosas, edicao Docinho. Acompanha bolsinha exclusiva. Chocolate de qualidade premium perfeito para a Pascoa.",
        reviews: [{
            name: "Leticia B.",
            initial: "L",
            color: "#d4a04a",
            rating: 5,
            date: "14/03/2026",
            text: "A Docinho e a mais fofa! Bolsinha verde linda e chocolate maravilhoso."
        }, {
            name: "Marcos T.",
            initial: "M",
            color: "#5a3825",
            rating: 5,
            date: "10/03/2026",
            text: "Minha neta coleciona as tres! Esse da Docinho e o favorito dela."
        }, {
            name: "Amanda R.",
            initial: "A",
            color: "#d4a04a",
            rating: 4,
            date: "07/03/2026",
            text: "Produto bonito e saboroso. A bolsinha e de boa qualidade."
        }]
    }, {
        name: "Ovo de Pascoa Classicos ao Leite com Bombons Sortidos 250g",
        originalPrice: "R$ 179,90",
        salePrice: "R$ 25,90",
        discount: "-86%",
        image: "/images/products/ovo-classico.jpg",
        sku: "1003945",
        description: "Ovo de Pascoa classico de chocolate ao leite acompanhado de bombons sortidos. Uma selecao especial dos melhores sabores da Cacau Show. Embalagem elegante em vermelho e dourado.",
        reviews: [{
            name: "Regina C.",
            initial: "R",
            color: "#5a3825",
            rating: 5,
            date: "16/03/2026",
            text: "Os bombons sortidos sao incriveis! Cada um com sabor diferente e todos deliciosos."
        }, {
            name: "Gustavo H.",
            initial: "G",
            color: "#d4a04a",
            rating: 5,
            date: "13/03/2026",
            text: "Classico e sofisticado. Perfeito para presentear. Embalagem impecavel."
        }, {
            name: "Beatriz S.",
            initial: "B",
            color: "#5a3825",
            rating: 5,
            date: "08/03/2026",
            text: "Melhor ovo de Pascoa que ja comprei! Os bombons sao de outro nivel."
        }, {
            name: "Felipe N.",
            initial: "F",
            color: "#d4a04a",
            rating: 4,
            date: "04/03/2026",
            text: "Chocolate muito bom, bombons variados e gostosos. Recomendo!"
        }]
    }, {
        name: "Ovo de Pascoa Dreams Merengue de Morango 200g",
        originalPrice: "R$ 199,90",
        salePrice: "R$ 25,90",
        discount: "-87%",
        image: "/images/products/ovo-dreams.jpg",
        sku: "1003946",
        description: "Ovo de chocolate recheado com creme de merengue de morango. Uma combinacao irresistivel de chocolate ao leite com recheio cremoso e frutado. Embalagem premium vermelha com detalhes dourados.",
        reviews: [{
            name: "Isabela F.",
            initial: "I",
            color: "#d4a04a",
            rating: 5,
            date: "15/03/2026",
            text: "O recheio de merengue de morango e divino! Melhor combinacao que ja provei."
        }, {
            name: "Thiago M.",
            initial: "T",
            color: "#5a3825",
            rating: 5,
            date: "12/03/2026",
            text: "Surpreendente! O recheio e cremoso e o sabor de morango e perfeito."
        }, {
            name: "Laura P.",
            initial: "L",
            color: "#d4a04a",
            rating: 5,
            date: "09/03/2026",
            text: "Meu ovo favorito da Cacau Show! O merengue de morango e irresistivel."
        }, {
            name: "Andre K.",
            initial: "A",
            color: "#5a3825",
            rating: 4,
            date: "05/03/2026",
            text: "Muito gostoso! Recheio abundante e chocolate de qualidade."
        }]
    }, {
        name: "Ovo de Pascoa laCreme ao Leite Zero Adicao de Acucares 160g",
        originalPrice: "R$ 169,90",
        salePrice: "R$ 25,90",
        discount: "-85%",
        image: "/images/products/ovo-lacreme.jpg",
        sku: "1003947",
        description: "Ovo de Pascoa da linha laCreme, feito com chocolate ao leite zero adicao de acucares. Ideal para quem busca uma opcao mais saudavel sem abrir mao do sabor. Embalagem sofisticada.",
        reviews: [{
            name: "Claudia R.",
            initial: "C",
            color: "#5a3825",
            rating: 5,
            date: "16/03/2026",
            text: "Finalmente um ovo zero acucar que e realmente gostoso! Textura incrivel."
        }, {
            name: "Paulo G.",
            initial: "P",
            color: "#d4a04a",
            rating: 5,
            date: "11/03/2026",
            text: "Sou diabetico e adorei! Sabor excelente, nao parece zero acucar."
        }, {
            name: "Marcia L.",
            initial: "M",
            color: "#5a3825",
            rating: 4,
            date: "06/03/2026",
            text: "Otima opcao para quem cuida da saude. Chocolate cremoso e saboroso."
        }]
    }, {
        name: "Ovo de Pascoa de Colher Duo Do Chef 300g",
        originalPrice: "R$ 239,90",
        salePrice: "R$ 25,90",
        discount: "-89%",
        image: "/images/products/ovo-chef.jpg",
        sku: "1003948",
        description: "Ovo de Pascoa gourmet de colher com dois sabores exclusivos do Chef. Apresentado em caixa premium preta com detalhes dourados. O recheio e ultra cremoso e feito para ser degustado com colher. Peso: 300g.",
        reviews: [{
            name: "Ricardo A.",
            initial: "R",
            color: "#d4a04a",
            rating: 5,
            date: "15/03/2026",
            text: "O melhor ovo de colher que ja provei! Os dois sabores sao espetaculares."
        }, {
            name: "Vanessa T.",
            initial: "V",
            color: "#5a3825",
            rating: 5,
            date: "13/03/2026",
            text: "Presenteei meu marido e ele amou! A caixa e sofisticada e o sabor e premium."
        }, {
            name: "Eduardo S.",
            initial: "E",
            color: "#d4a04a",
            rating: 5,
            date: "10/03/2026",
            text: "Qualidade de chocolateria fina! O recheio duo e uma experiencia unica."
        }, {
            name: "Simone B.",
            initial: "S",
            color: "#5a3825",
            rating: 5,
            date: "07/03/2026",
            text: "Caixa linda, chocolate divino. Vai ser meu presente de Pascoa todo ano!"
        }, {
            name: "Gabriel N.",
            initial: "G",
            color: "#d4a04a",
            rating: 4,
            date: "03/03/2026",
            text: "Embalagem premium e sabor incrivel. So queria que viesse com mais recheio."
        }]
    }, {
        name: "Ovo de Pascoa Classicos laCreme ao Leite com Bombons 220g",
        originalPrice: "R$ 200,90",
        salePrice: "R$ 25,90",
        discount: "-91%",
        image: "/images/products/ovo-lacreme-classico.jpg",
        sku: "1003949",
        description: "Ovo de Pascoa da linha laCreme classico em chocolate ao leite, acompanhado de bombons sortidos premium. Combinacao perfeita de suavidade e sabor. Embalagem em vermelho vibrante com acabamento dourado.",
        reviews: [{
            name: "Daniela M.",
            initial: "D",
            color: "#5a3825",
            rating: 5,
            date: "16/03/2026",
            text: "A linha laCreme e a melhor! Chocolate ultra cremoso e bombons incriveis."
        }, {
            name: "Henrique P.",
            initial: "H",
            color: "#d4a04a",
            rating: 5,
            date: "14/03/2026",
            text: "91% de desconto nessa qualidade? Comprei cinco! Chocolate excepcional."
        }, {
            name: "Renata F.",
            initial: "R",
            color: "#5a3825",
            rating: 5,
            date: "11/03/2026",
            text: "O melhor custo-beneficio! Ovo lindo, cremoso e os bombons sao otimos."
        }, {
            name: "Marcos V.",
            initial: "M",
            color: "#d4a04a",
            rating: 5,
            date: "08/03/2026",
            text: "Embalagem elegante, chocolate divino. Presente perfeito de Pascoa!"
        }, {
            name: "Carolina S.",
            initial: "C",
            color: "#5a3825",
            rating: 4,
            date: "04/03/2026",
            text: "Muito bom! A embalagem vermelha e lindissima e o sabor nao decepciona."
        }]
    }];
    function w({onSelectProduct: e}) {
        return (0,
        t.jsxs)("div", {
            className: "px-4 py-8 max-w-5xl mx-auto",
            children: [(0,
            t.jsx)("div", {
                className: "bg-destructive/10 border border-destructive/20 rounded-xl p-3 mb-6 text-center",
                children: (0,
                t.jsx)("p", {
                    className: "text-sm text-destructive font-semibold",
                    children: "Desconto exclusivo de 90% desbloqueado - Valido por tempo limitado"
                })
            }), (0,
            t.jsx)("div", {
                className: "mb-6",
                children: (0,
                t.jsx)(N, {})
            }), (0,
            t.jsxs)("div", {
                className: "relative mb-6",
                children: [(0,
                t.jsx)("input", {
                    type: "text",
                    placeholder: "Buscar Produto",
                    className: "w-full bg-card border border-border rounded-xl py-3 px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                }), (0,
                t.jsx)("svg", {
                    className: "absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    strokeWidth: 2,
                    children: (0,
                    t.jsx)("path", {
                        d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    })
                })]
            }), (0,
            t.jsx)("h2", {
                className: "text-2xl md:text-3xl font-serif text-foreground text-center mb-8 italic tracking-tight",
                children: "Promocao de Pascoa"
            }), (0,
            t.jsx)("div", {
                className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
                children: y.map( (a, r) => (0,
                t.jsx)(j, {
                    name: a.name,
                    originalPrice: a.originalPrice,
                    salePrice: a.salePrice,
                    discount: a.discount,
                    image: a.image,
                    onBuy: () => e?.(a)
                }, r))
            }), (0,
            t.jsx)("div", {
                className: "mt-8 text-center",
                children: (0,
                t.jsx)("p", {
                    className: "text-xs text-muted-foreground",
                    children: "* Precos e disponibilidade sujeitos a alteracao. Promocao por tempo limitado."
                })
            })]
        })
    }
    let C = (0,
    i.default)("arrow-left", [["path", {
        d: "m12 19-7-7 7-7",
        key: "1l729n"
    }], ["path", {
        d: "M19 12H5",
        key: "x3x0zl"
    }]])
      , P = (0,
    i.default)("heart", [["path", {
        d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
        key: "mvr1a0"
    }]])
      , k = (0,
    i.default)("star", [["path", {
        d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
        key: "r04s7s"
    }]])
      , S = (0,
    i.default)("chevron-down", [["path", {
        d: "m6 9 6 6 6-6",
        key: "qrunsl"
    }]])
      , R = (0,
    i.default)("chevron-up", [["path", {
        d: "m18 15-6-6-6 6",
        key: "153udz"
    }]])
      , O = [{
        name: "Tablete laCreme de Chocolate Branco com Pistache 100g",
        image: "/images/tabletes/pistache.png",
        price: 10
    }, {
        name: "Tablete de Chocolate ao Leite Morango 100g",
        image: "/images/tabletes/morango.png",
        price: 10
    }, {
        name: "Tablete laCreme de Chocolate ao Leite 100g",
        image: "/images/tabletes/chltleite.png",
        price: 10
    }];
    function M({product: e, onBack: r, onCheckout: o}) {
        let[s,i] = (0,
        a.useState)(!1)
          , [l,n] = (0,
        a.useState)(!1)
          , [d,c] = (0,
        a.useState)([!1, !1, !1])
          , m = d.some(Boolean)
          , u = d.filter(Boolean).length
          , x = 10 * u
          , h = 25.9 + x
          , p = e.reviews.length > 0 ? (e.reviews.reduce( (e, t) => e + t.rating, 0) / e.reviews.length).toFixed(1) : "0";
        return (0,
        t.jsxs)("div", {
            className: "max-w-3xl mx-auto px-4 py-4",
            children: [(0,
            t.jsxs)("div", {
                className: "flex items-center gap-2 text-xs text-muted-foreground mb-4",
                children: [(0,
                t.jsxs)("button", {
                    onClick: r,
                    className: "flex items-center gap-1 text-primary font-medium hover:underline",
                    children: [(0,
                    t.jsx)(C, {
                        className: "w-3.5 h-3.5"
                    }), "HOME"]
                }), (0,
                t.jsx)("span", {
                    children: ">"
                }), (0,
                t.jsx)("span", {
                    children: "PASCOA"
                }), (0,
                t.jsx)("span", {
                    children: ">"
                }), (0,
                t.jsx)("span", {
                    children: "OVO DE PASCOA"
                })]
            }), (0,
            t.jsx)("h3", {
                className: "text-primary font-semibold text-sm mb-4",
                children: "OVO DE PASCOA"
            }), (0,
            t.jsxs)("div", {
                className: "relative bg-card rounded-2xl border border-border p-4 mb-6",
                children: [(0,
                t.jsx)("button", {
                    onClick: () => i(!s),
                    className: "absolute top-4 right-4 z-10 w-9 h-9 rounded-full border border-border bg-background flex items-center justify-center transition-colors",
                    "aria-label": "Favoritar",
                    children: (0,
                    t.jsx)(P, {
                        className: `w-5 h-5 transition-colors ${s ? "fill-destructive text-destructive" : "text-muted-foreground"}`
                    })
                }), (0,
                t.jsx)("div", {
                    className: "w-full aspect-square flex items-center justify-center max-w-xs mx-auto",
                    children: (0,
                    t.jsx)(g.default, {
                        src: e.image,
                        alt: e.name,
                        width: 400,
                        height: 400,
                        className: "object-contain w-full h-full"
                    })
                }), (0,
                t.jsx)("div", {
                    className: "flex justify-center mt-3 gap-2",
                    children: (0,
                    t.jsx)("span", {
                        className: "w-2 h-2 rounded-full bg-muted-foreground"
                    })
                })]
            }), (0,
            t.jsx)("h1", {
                className: "text-xl sm:text-2xl font-semibold text-foreground leading-tight mb-2 text-balance tracking-tight",
                children: e.name
            }), (0,
            t.jsxs)("p", {
                className: "text-xs text-muted-foreground mb-3",
                children: ["SKU # ", e.sku]
            }), (0,
            t.jsxs)("div", {
                className: "mb-4",
                children: [(0,
                t.jsx)("p", {
                    className: `text-sm text-muted-foreground leading-relaxed ${!l ? "line-clamp-2" : ""}`,
                    children: e.description
                }), (0,
                t.jsx)("button", {
                    onClick: () => n(!l),
                    className: "text-primary text-sm font-semibold mt-1 flex items-center gap-0.5 hover:underline",
                    children: l ? (0,
                    t.jsxs)(t.Fragment, {
                        children: ["VER MENOS ", (0,
                        t.jsx)(R, {
                            className: "w-3.5 h-3.5"
                        })]
                    }) : (0,
                    t.jsxs)(t.Fragment, {
                        children: ["VER MAIS ", (0,
                        t.jsx)(S, {
                            className: "w-3.5 h-3.5"
                        })]
                    })
                })]
            }), (0,
            t.jsxs)("div", {
                className: "mb-2",
                children: [(0,
                t.jsx)("p", {
                    className: "text-sm text-muted-foreground line-through",
                    children: e.originalPrice
                }), (0,
                t.jsxs)("div", {
                    className: "flex items-baseline gap-2",
                    children: [(0,
                    t.jsx)("span", {
                        className: "text-xs text-foreground",
                        children: "R$"
                    }), (0,
                    t.jsx)("span", {
                        className: "text-4xl font-bold text-foreground",
                        children: e.salePrice.replace("R$ ", "")
                    }), (0,
                    t.jsx)("span", {
                        className: "text-sm text-muted-foreground",
                        children: "/un"
                    })]
                }), (0,
                t.jsx)("span", {
                    className: "inline-block mt-1 bg-primary text-primary-foreground text-xs font-bold px-2.5 py-1 rounded-full",
                    children: e.discount
                })]
            }), (0,
            t.jsx)("div", {
                className: "bg-primary text-primary-foreground rounded-t-xl px-4 py-3 mt-6",
                children: (0,
                t.jsx)("p", {
                    className: "text-xs sm:text-sm font-bold uppercase text-center leading-snug",
                    children: "APROVEITE! ADICIONE TABLETES POR APENAS +R$10,00 CADA"
                })
            }), (0,
            t.jsx)("div", {
                className: "border border-border border-t-0 rounded-b-xl mb-6 divide-y divide-border",
                children: O.map( (e, a) => (0,
                t.jsxs)("label", {
                    className: "flex items-center gap-3 p-3 cursor-pointer hover:bg-card transition-colors",
                    children: [(0,
                    t.jsx)("input", {
                        type: "checkbox",
                        checked: d[a],
                        onChange: () => {
                            c(e => {
                                let t = [...e];
                                return t[a] = !t[a],
                                t
                            }
                            )
                        }
                        ,
                        className: "w-4 h-4 rounded border-border text-primary focus:ring-primary shrink-0"
                    }), (0,
                    t.jsx)("div", {
                        className: "w-10 h-10 rounded-md overflow-hidden bg-card shrink-0",
                        children: (0,
                        t.jsx)(g.default, {
                            src: e.image,
                            alt: e.name,
                            width: 40,
                            height: 40,
                            className: "object-cover w-full h-full"
                        })
                    }), (0,
                    t.jsx)("span", {
                        className: "text-sm text-foreground truncate",
                        children: e.name
                    })]
                }, a))
            }), (0,
            t.jsxs)("div", {
                className: "bg-card border border-border rounded-xl p-4 mb-4",
                children: [(0,
                t.jsxs)("div", {
                    className: "flex items-center justify-between mb-1",
                    children: [(0,
                    t.jsx)("span", {
                        className: "text-sm text-muted-foreground",
                        children: "Ovo de Pascoa"
                    }), (0,
                    t.jsx)("span", {
                        className: "text-sm text-foreground font-medium",
                        children: "R$ 25,90"
                    })]
                }), m && (0,
                t.jsxs)("div", {
                    className: "flex items-center justify-between mb-1",
                    children: [(0,
                    t.jsx)("span", {
                        className: "text-sm text-muted-foreground",
                        children: `+ ${u} Tablete${u > 1 ? "s" : ""} (R$ 10,00 cada)`
                    }), (0,
                    t.jsx)("span", {
                        className: "text-sm text-foreground font-medium",
                        children: `R$ ${x.toFixed(2).replace(".", ",")}`
                    })]
                }), (0,
                t.jsxs)("div", {
                    className: "border-t border-border mt-2 pt-2 flex items-center justify-between",
                    children: [(0,
                    t.jsx)("span", {
                        className: "text-base font-bold text-foreground",
                        children: "Total"
                    }), (0,
                    t.jsx)("span", {
                        className: "text-xl font-bold text-[#2d9b3a]",
                        children: `R$ ${h.toFixed(2).replace(".", ",")}`
                    })]
                })]
            }), (0,
            t.jsxs)("button", {
                onClick: () => {
                    let e = O.filter( (e, t) => d[t]).map(e => ({
                        name: e.name,
                        image: e.image,
                        price: e.price
                    }));
                    o?.(e)
                }
                ,
                className: "w-full py-4 rounded-xl text-sm sm:text-base font-bold uppercase tracking-wide flex items-center justify-center gap-2 transition-all duration-200 bg-[#2d9b3a] hover:bg-[#248a30] text-white shadow-lg hover:shadow-xl active:scale-[0.98]",
                children: [(0,
                t.jsx)(b, {
                    className: "w-5 h-5"
                }), "ADICIONAR AO CARRINHO"]
            }), (0,
            t.jsxs)("div", {
                className: "mt-10",
                children: [(0,
                t.jsxs)("div", {
                    className: "flex items-center gap-3 mb-6",
                    children: [(0,
                    t.jsx)("h2", {
                        className: "text-xl sm:text-2xl font-serif italic text-foreground",
                        children: "Avaliacoes"
                    }), (0,
                    t.jsxs)("div", {
                        className: "flex items-center gap-1.5",
                        children: [(0,
                        t.jsx)("div", {
                            className: "flex",
                            children: [1, 2, 3, 4, 5].map(e => (0,
                            t.jsx)(k, {
                                className: `w-4 h-4 ${e <= Math.round(Number(p)) ? "fill-accent text-accent" : "text-border"}`
                            }, e))
                        }), (0,
                        t.jsxs)("span", {
                            className: "text-sm font-semibold text-foreground",
                            children: [p, " de 5"]
                        }), (0,
                        t.jsxs)("span", {
                            className: "text-xs text-muted-foreground",
                            children: ["(", e.reviews.length, " avaliacoes)"]
                        })]
                    })]
                }), (0,
                t.jsx)("div", {
                    className: "space-y-4",
                    children: e.reviews.map( (e, a) => (0,
                    t.jsxs)("div", {
                        className: "bg-card border border-border rounded-xl p-4",
                        children: [(0,
                        t.jsxs)("div", {
                            className: "flex items-center justify-between mb-2",
                            children: [(0,
                            t.jsxs)("div", {
                                className: "flex items-center gap-2.5",
                                children: [(0,
                                t.jsx)("div", {
                                    className: "w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0",
                                    style: {
                                        backgroundColor: e.color
                                    },
                                    children: e.initial
                                }), (0,
                                t.jsx)("span", {
                                    className: "font-semibold text-sm text-foreground",
                                    children: e.name
                                })]
                            }), (0,
                            t.jsx)("span", {
                                className: "text-xs text-muted-foreground",
                                children: e.date
                            })]
                        }), (0,
                        t.jsx)("div", {
                            className: "flex mb-2",
                            children: [1, 2, 3, 4, 5].map(a => (0,
                            t.jsx)(k, {
                                className: `w-3.5 h-3.5 ${a <= e.rating ? "fill-accent text-accent" : "text-border"}`
                            }, a))
                        }), (0,
                        t.jsx)("p", {
                            className: "text-sm text-muted-foreground leading-relaxed",
                            children: e.text
                        })]
                    }, a))
                })]
            })]
        })
    }
    let $ = (0,
    i.default)("check", [["path", {
        d: "M20 6 9 17l-5-5",
        key: "1gmf2c"
    }]])
      , E = (0,
    i.default)("clock", [["path", {
        d: "M12 6v6l4 2",
        key: "mmk7yg"
    }], ["circle", {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
    }]])
      , A = (0,
    i.default)("copy", [["rect", {
        width: "14",
        height: "14",
        x: "8",
        y: "8",
        rx: "2",
        ry: "2",
        key: "17jyea"
    }], ["path", {
        d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
        key: "zix9uf"
    }]])
      , _ = (0,
    i.default)("circle-check", [["circle", {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
    }], ["path", {
        d: "m9 12 2 2 4-4",
        key: "dzmm74"
    }]]);
    var F = e.i(93296);
    function I({pixCode: e, qrCodeBase64: r, totalValue: o, transactionHash: s, onClose: i}) {
        let n, [d,c] = (0,
        a.useState)(!1), [m,u] = (0,
        a.useState)(1800), [x,h] = (0,
        a.useState)(""), [p,f] = (0,
        a.useState)(!1);
        (0,
        a.useEffect)( () => {
            e ? (h(`https://api.qrserver.com/v1/create-qr-code/?size=300x300&format=png&data=${encodeURIComponent(e)}`),
            f(!1)) : r && (h(r.startsWith("data:") || r.startsWith("http") ? r : `data:image/png;base64,${r}`),
            f(!1))
        }
        , [e, r]),
        (0,
        a.useEffect)( () => {
            let e = setInterval( () => {
                u(t => t <= 0 ? (clearInterval(e),
                0) : t - 1)
            }
            , 1e3);
            return () => clearInterval(e)
        }
        , []);
        let g = (0,
        a.useCallback)(async () => {
            try {
                await navigator.clipboard.writeText(e),
                c(!0),
                setTimeout( () => c(!1), 3e3)
            } catch {
                let t = document.createElement("textarea");
                t.value = e,
                document.body.appendChild(t),
                t.select(),
                document.execCommand("copy"),
                document.body.removeChild(t),
                c(!0),
                setTimeout( () => c(!1), 3e3)
            }
        }
        , [e]);
        return (0,
        t.jsx)("div", {
            className: "fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center",
            children: (0,
            t.jsxs)("div", {
                className: "bg-background rounded-t-2xl sm:rounded-2xl w-full sm:max-w-md max-h-[95vh] overflow-y-auto overscroll-contain shadow-2xl",
                children: [(0,
                t.jsxs)("div", {
                    className: "sticky top-0 bg-background z-10 flex items-center justify-between p-4 border-b border-border",
                    children: [(0,
                    t.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [(0,
                        t.jsx)("div", {
                            className: "w-2 h-2 rounded-full bg-[#2d9b3a] animate-pulse"
                        }), (0,
                        t.jsxs)("span", {
                            className: "text-xs text-muted-foreground",
                            children: ["Expira em ", (0,
                            t.jsx)("span", {
                                className: "font-bold text-foreground",
                                children: (n = Math.floor(m / 60),
                                `${n.toString().padStart(2, "0")}:${(m % 60).toString().padStart(2, "0")}`)
                            })]
                        })]
                    }), (0,
                    t.jsx)("button", {
                        onClick: i,
                        className: "w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors",
                        "aria-label": "Fechar",
                        children: (0,
                        t.jsx)(l, {
                            className: "w-4 h-4 text-foreground"
                        })
                    })]
                }), (0,
                t.jsxs)("div", {
                    className: "p-5 space-y-6",
                    children: [(0,
                    t.jsx)("h2", {
                        className: "text-xl font-bold text-foreground leading-tight",
                        children: "Escaneie o QR-code ou copie o codigo."
                    }), (0,
                    t.jsx)("div", {
                        className: "flex justify-center",
                        children: (0,
                        t.jsx)("div", {
                            className: "bg-white p-4 rounded-xl shadow-sm border border-border",
                            children: x && !p ? (0,
                            t.jsx)("img", {
                                src: x,
                                alt: "QR Code PIX",
                                width: 200,
                                height: 200,
                                className: "w-48 h-48 object-contain",
                                crossOrigin: "anonymous",
                                onError: () => {
                                    e && !x.includes("qrserver.com") ? h(`https://api.qrserver.com/v1/create-qr-code/?size=300x300&format=png&data=${encodeURIComponent(e)}`) : f(!0)
                                }
                            }) : p ? (0,
                            t.jsx)("div", {
                                className: "w-48 h-48 bg-muted rounded-lg flex items-center justify-center p-4",
                                children: (0,
                                t.jsx)("p", {
                                    className: "text-xs text-center text-muted-foreground",
                                    children: "Nao foi possivel gerar o QR Code. Use o botao abaixo para copiar o codigo PIX."
                                })
                            }) : (0,
                            t.jsx)("div", {
                                className: "w-48 h-48 bg-muted rounded-lg flex items-center justify-center",
                                children: (0,
                                t.jsxs)("div", {
                                    className: "text-center",
                                    children: [(0,
                                    t.jsx)("div", {
                                        className: "w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-2"
                                    }), (0,
                                    t.jsx)("p", {
                                        className: "text-xs text-muted-foreground",
                                        children: "Gerando QR Code..."
                                    })]
                                })
                            })
                        })
                    }), (0,
                    t.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [(0,
                        t.jsx)("span", {
                            className: "text-sm font-medium text-foreground",
                            children: "Valor PIX:"
                        }), (0,
                        t.jsx)("span", {
                            className: "text-lg font-bold text-[#2d9b3a]",
                            children: `R$ ${o.toFixed(2).replace(".", ",")}`
                        })]
                    }), e && (0,
                    t.jsxs)("div", {
                        children: [(0,
                        t.jsx)("p", {
                            className: "text-xs text-muted-foreground mb-2 break-all font-mono leading-relaxed",
                            children: e.length > 60 ? `${e.substring(0, 60)}...` : e
                        }), (0,
                        t.jsx)("button", {
                            onClick: g,
                            className: `w-full py-3.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all duration-200 ${d ? "bg-[#2d9b3a] text-white" : "bg-foreground text-background hover:opacity-90"}`,
                            children: d ? (0,
                            t.jsxs)(t.Fragment, {
                                children: [(0,
                                t.jsx)(_, {
                                    className: "w-4 h-4"
                                }), "Codigo copiado!"]
                            }) : (0,
                            t.jsxs)(t.Fragment, {
                                children: [(0,
                                t.jsx)(A, {
                                    className: "w-4 h-4"
                                }), "Copiar PIX"]
                            })
                        })]
                    }), (0,
                    t.jsxs)("div", {
                        children: [(0,
                        t.jsx)("h3", {
                            className: "text-sm font-bold text-foreground mb-3",
                            children: "Como pagar:"
                        }), (0,
                        t.jsx)("div", {
                            className: "space-y-3",
                            children: ["Abra o aplicativo do seu banco e selecione a opcao de pagamento PIX", "Escolha pagar usando o codigo QR ou copie o codigo PIX acima", "Confirme os detalhes do pagamento e o destinatario", "Conclua o pagamento e guarde o comprovante (voce sera redirecionado automaticamente apos o pagamento)"].map( (e, a) => (0,
                            t.jsxs)("div", {
                                className: "flex gap-3",
                                children: [(0,
                                t.jsx)("div", {
                                    className: "w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 text-xs font-bold",
                                    children: a + 1
                                }), (0,
                                t.jsx)("p", {
                                    className: "text-sm text-foreground leading-relaxed",
                                    children: e
                                })]
                            }, a))
                        })]
                    }), (0,
                    t.jsxs)("div", {
                        className: "bg-card border border-border rounded-xl p-4 space-y-3",
                        children: [(0,
                        t.jsx)("p", {
                            className: "text-sm text-foreground leading-relaxed",
                            children: "Seus dados serao armazenados conosco de maneira completamente segura, sendo utilizados apenas para:"
                        }), (0,
                        t.jsx)("div", {
                            className: "space-y-2",
                            children: ["Envio de comprovante;", "Garantia de devolucao em caso de insatisfacao;", "Acompanhar o processo de sua compra;"].map( (e, a) => (0,
                            t.jsxs)("div", {
                                className: "flex items-center gap-2.5",
                                children: [(0,
                                t.jsx)(_, {
                                    className: "w-5 h-5 text-[#3b82f6] shrink-0"
                                }), (0,
                                t.jsx)("span", {
                                    className: "text-sm text-foreground",
                                    children: e
                                })]
                            }, a))
                        }), (0,
                        t.jsx)("div", {
                            className: "flex justify-center pt-2",
                            children: (0,
                            t.jsx)(F.Shield, {
                                className: "w-8 h-8 text-[#2d9b3a]"
                            })
                        }), (0,
                        t.jsx)("p", {
                            className: "text-xs text-center text-muted-foreground leading-relaxed",
                            children: "Ao finalizar o pagamento voce concorda com nossos termos de uso e privacidade."
                        })]
                    }), s && (0,
                    t.jsx)("p", {
                        className: "text-[10px] text-muted-foreground text-center",
                        children: `ID: ${s}`
                    })]
                })]
            })
        })
    }
    let D = [{
        name: "Tablete laCreme Chocolate Branco com Pistache 100g",
        image: "/images/tabletes/pistache.png",
        price: 10
    }, {
        name: "Tablete de Chocolate ao Leite Morango 100g",
        image: "/images/tabletes/morango.png",
        price: 10
    }, {
        name: "Tablete laCreme de Chocolate ao Leite 100g",
        image: "/images/tabletes/chltleite.png",
        price: 10
    }];
    function z(e) {
        let t = e.replace(/\D/g, "");
        if (11 !== t.length || /^(\d)\1{10}$/.test(t))
            return !1;
        let a = 0;
        for (let e = 0; e < 9; e++)
            a += parseInt(t.charAt(e)) * (10 - e);
        let r = 11 - a % 11;
        if ((10 === r || 11 === r) && (r = 0),
        r !== parseInt(t.charAt(9)))
            return !1;
        a = 0;
        for (let e = 0; e < 10; e++)
            a += parseInt(t.charAt(e)) * (11 - e);
        return (10 == (r = 11 - a % 11) || 11 === r) && (r = 0),
        r === parseInt(t.charAt(10))
    }
    function T({product: e, selectedTablets: r, onBack: o}) {
        let[s,i] = (0,
        a.useState)("")
          , [l,n] = (0,
        a.useState)("")
          , [d,c] = (0,
        a.useState)("")
          , [m,u] = (0,
        a.useState)("")
          , [x,h] = (0,
        a.useState)("")
          , [p,f] = (0,
        a.useState)(!1)
          , [b,j] = (0,
        a.useState)({
            rua: "",
            bairro: "",
            cidade: "",
            estado: "",
            numero: "",
            complemento: ""
        })
          , [v,N] = (0,
        a.useState)(!1)
          , [y,w] = (0,
        a.useState)([!1, !1, !1])
          , [P,k] = (0,
        a.useState)("free")
          , [S,R] = (0,
        a.useState)({})
          , [O,M] = (0,
        a.useState)(!1)
          , [A,_] = (0,
        a.useState)(null)
          , F = 10 * r.length
          , T = y.filter(Boolean).length
          , L = 10 * T
          , q = "pac" === P ? 15.9 : 12.5 * ("jadlog" === P)
          , B = 25.9 + F + L + q
          , V = (0,
        a.useCallback)(async e => {
            let t = e.replace(/\D/g, "");
            if (8 === t.length) {
                f(!0);
                try {
                    let e = await fetch(`https://viacep.com.br/ws/${t}/json/`)
                      , a = await e.json();
                    a.erro ? N(!1) : (j({
                        rua: a.logradouro || "",
                        bairro: a.bairro || "",
                        cidade: a.localidade || "",
                        estado: a.uf || "",
                        numero: "",
                        complemento: a.complemento || ""
                    }),
                    N(!0))
                } catch {
                    N(!1)
                } finally {
                    f(!1)
                }
            }
        }
        , [])
          , G = async () => {
            let t = {};
            if (s.trim() || (t.nome = "Informe seu nome completo"),
            11 !== l.replace(/\D/g, "").length ? t.cpf = "Informe um CPF valido" : z(l) || (t.cpf = "CPF invalido"),
            m.replace(/\D/g, "").length < 10 && (t.telefone = "Informe um telefone valido"),
            v || (t.cep = "Informe um CEP valido"),
            b.numero.trim() || (t.numero = "Informe o numero"),
            R(t),
            !(Object.keys(t).length > 0)) {
                M(!0);
                try {
                    [e.name, ...r.map(e => ({
                        title: e.name,
                        price: e.price,
                        quantity: 1
                    }))];
                    let t = D.filter( (e, t) => y[t]).map(e => e.name)
                      , a = [e.name, ...r.map(e => e.name), ...t].join(" + ")
                      , o = await fetch("/api/create-pix", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            amount: B,
                            customerName: s.trim(),
                            customerEmail: "",
                            customerPhone: m,
                            customerDocument: l,
                            description: a
                        })
                    })
                      , i = await o.json();
                    if (!o.ok) {
                        let e = i.error || "Erro ao gerar PIX. Tente novamente.";
                        alert(e),
                        M(!1);
                        return
                    }
                    console.log("[v0] PIX response data:", JSON.stringify(i)),
                    _({
                        pixCode: i.qr_code || "",
                        qrCodeBase64: i.qr_code_base64 || "",
                        transactionHash: String(i.transaction_id || "")
                    })
                } catch (e) {
                    console.error("[v0] Checkout error:", e),
                    alert("Erro de conexao. Verifique sua internet e tente novamente.")
                } finally {
                    M(!1)
                }
            }
        }
        ;
        return (0,
        t.jsxs)("div", {
            className: "max-w-2xl mx-auto px-4 py-4 pb-8",
            children: [(0,
            t.jsxs)("button", {
                onClick: o,
                className: "flex items-center gap-1.5 text-primary text-sm font-medium mb-6 hover:underline",
                children: [(0,
                t.jsx)(C, {
                    className: "w-4 h-4"
                }), "Voltar ao produto"]
            }), (0,
            t.jsx)("h1", {
                className: "text-2xl sm:text-3xl font-serif italic text-foreground mb-6",
                children: "Finalizar Compra"
            }), (0,
            t.jsx)("div", {
                className: "bg-card border border-border rounded-xl p-4 mb-4",
                children: (0,
                t.jsxs)("div", {
                    className: "flex items-center gap-4",
                    children: [(0,
                    t.jsx)("div", {
                        className: "w-16 h-16 rounded-lg overflow-hidden bg-background shrink-0",
                        children: (0,
                        t.jsx)(g.default, {
                            src: e.image,
                            alt: e.name,
                            width: 64,
                            height: 64,
                            className: "object-contain w-full h-full"
                        })
                    }), (0,
                    t.jsxs)("div", {
                        className: "flex-1 min-w-0",
                        children: [(0,
                        t.jsx)("p", {
                            className: "text-sm font-semibold text-foreground truncate",
                            children: e.name
                        }), (0,
                        t.jsxs)("div", {
                            className: "flex items-center gap-2 mt-1",
                            children: [(0,
                            t.jsx)("span", {
                                className: "text-xs text-muted-foreground line-through",
                                children: e.originalPrice
                            }), (0,
                            t.jsx)("span", {
                                className: "text-base font-bold text-foreground",
                                children: e.salePrice
                            }), (0,
                            t.jsx)("span", {
                                className: "text-xs font-bold text-white bg-destructive px-1.5 py-0.5 rounded-full",
                                children: e.discount
                            })]
                        })]
                    })]
                })
            }), r.length > 0 && (0,
            t.jsxs)("div", {
                className: "bg-card border border-border rounded-xl mb-6 overflow-hidden",
                children: [(0,
                t.jsx)("div", {
                    className: "bg-primary/10 px-4 py-2.5",
                    children: (0,
                    t.jsxs)("p", {
                        className: "text-xs font-bold text-primary uppercase",
                        children: ["INCLUSOS NA SUA COMPRA — ", `${r.length} TABLETE${r.length > 1 ? "S" : ""} POR +R$${(10 * r.length).toFixed(2).replace(".", ",")}`]
                    })
                }), (0,
                t.jsx)("div", {
                    className: "divide-y divide-border",
                    children: r.map( (e, a) => (0,
                    t.jsxs)("div", {
                        className: "flex items-center gap-3 p-3",
                        children: [(0,
                        t.jsx)("div", {
                            className: "w-5 h-5 rounded-full bg-[#2d9b3a] flex items-center justify-center shrink-0",
                            children: (0,
                            t.jsx)($, {
                                className: "w-3 h-3 text-white"
                            })
                        }), (0,
                        t.jsx)("div", {
                            className: "w-10 h-10 rounded-md overflow-hidden bg-background shrink-0",
                            children: (0,
                            t.jsx)(g.default, {
                                src: e.image,
                                alt: e.name,
                                width: 40,
                                height: 40,
                                className: "object-cover w-full h-full"
                            })
                        }), (0,
                        t.jsx)("span", {
                            className: "text-sm text-foreground truncate",
                            children: e.name
                        })]
                    }, a))
                })]
            }), (0,
            t.jsxs)("div", {
                className: "bg-accent/10 border-2 border-dashed border-accent rounded-xl p-4 mb-6",
                children: [(0,
                t.jsxs)("div", {
                    className: "flex items-center gap-2 mb-3",
                    children: [(0,
                    t.jsx)("span", {
                        className: "text-accent text-lg",
                        children: "*"
                    }), (0,
                    t.jsx)("p", {
                        className: "text-sm font-bold text-foreground",
                        children: "ESPERE! Adicione tabletes por apenas +R$10,00 cada"
                    })]
                }), (0,
                t.jsx)("p", {
                    className: "text-xs text-muted-foreground mb-3",
                    children: "Aproveite o frete e leve tabletes premium com desconto exclusivo!"
                }), (0,
                t.jsx)("div", {
                    className: "space-y-2",
                    children: D.map( (e, a) => r.some(t => t.name === e.name) ? null : (0,
                    t.jsxs)("label", {
                        className: `flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${y[a] ? "border-accent bg-accent/5" : "border-border bg-card hover:bg-card/80"}`,
                        children: [(0,
                        t.jsx)("input", {
                            type: "checkbox",
                            checked: y[a],
                            onChange: () => {
                                w(e => {
                                    let t = [...e];
                                    return t[a] = !t[a],
                                    t
                                }
                                )
                            }
                            ,
                            className: "w-4 h-4 rounded border-border text-accent focus:ring-accent shrink-0"
                        }), (0,
                        t.jsx)("div", {
                            className: "w-10 h-10 rounded-md overflow-hidden bg-background shrink-0",
                            children: (0,
                            t.jsx)(g.default, {
                                src: e.image,
                                alt: e.name,
                                width: 40,
                                height: 40,
                                className: "object-cover w-full h-full"
                            })
                        }), (0,
                        t.jsxs)("div", {
                            className: "flex-1 min-w-0",
                            children: [(0,
                            t.jsx)("span", {
                                className: "text-sm text-foreground line-clamp-1",
                                children: e.name
                            }), (0,
                            t.jsx)("span", {
                                className: "text-xs font-bold text-accent",
                                children: "+R$ 10,00"
                            })]
                        }), y[a] && (0,
                        t.jsx)($, {
                            className: "w-4 h-4 text-accent shrink-0"
                        })]
                    }, a))
                })]
            }), (0,
            t.jsx)("h2", {
                className: "text-lg font-serif italic text-foreground mb-4",
                children: "Dados Pessoais"
            }), (0,
            t.jsxs)("div", {
                className: "space-y-4 mb-8",
                children: [(0,
                t.jsxs)("div", {
                    children: [(0,
                    t.jsx)("label", {
                        className: "block text-xs text-muted-foreground mb-1.5",
                        children: "Nome completo"
                    }), (0,
                    t.jsx)("input", {
                        type: "text",
                        value: s,
                        onChange: e => i(e.target.value),
                        placeholder: "Seu nome completo",
                        className: "w-full bg-card border border-border rounded-xl py-3 px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    }), S.nome && (0,
                    t.jsx)("p", {
                        className: "text-xs text-destructive mt-1",
                        children: S.nome
                    })]
                }), (0,
                t.jsxs)("div", {
                    children: [(0,
                    t.jsx)("label", {
                        className: "block text-xs text-muted-foreground mb-1.5",
                        children: "CPF"
                    }), (0,
                    t.jsx)("input", {
                        type: "text",
                        value: l,
                        onChange: e => {
                            let t;
                            n((t = e.target.value.replace(/\D/g, "").slice(0, 11)).length <= 3 ? t : t.length <= 6 ? `${t.slice(0, 3)}.${t.slice(3)}` : t.length <= 9 ? `${t.slice(0, 3)}.${t.slice(3, 6)}.${t.slice(6)}` : `${t.slice(0, 3)}.${t.slice(3, 6)}.${t.slice(6, 9)}-${t.slice(9)}`),
                            c("")
                        }
                        ,
                        onBlur: () => {
                            11 !== l.replace(/\D/g, "").length || z(l) || c("CPF invalido. Verifique e tente novamente.")
                        }
                        ,
                        placeholder: "000.000.000-00",
                        className: `w-full bg-card border rounded-xl py-3 px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent ${d || S.cpf ? "border-destructive" : "border-border"}`
                    }), (d || S.cpf) && (0,
                    t.jsx)("p", {
                        className: "text-xs text-destructive mt-1",
                        children: d || S.cpf
                    })]
                }), (0,
                t.jsxs)("div", {
                    children: [(0,
                    t.jsx)("label", {
                        className: "block text-xs text-muted-foreground mb-1.5",
                        children: "Telefone"
                    }), (0,
                    t.jsx)("input", {
                        type: "text",
                        value: m,
                        onChange: e => {
                            let t;
                            return u((t = e.target.value.replace(/\D/g, "").slice(0, 11)).length <= 2 ? t.length ? `(${t}` : "" : t.length <= 7 ? `(${t.slice(0, 2)}) ${t.slice(2)}` : `(${t.slice(0, 2)}) ${t.slice(2, 7)}-${t.slice(7)}`)
                        }
                        ,
                        placeholder: "(00) 00000-0000",
                        className: "w-full bg-card border border-border rounded-xl py-3 px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    }), S.telefone && (0,
                    t.jsx)("p", {
                        className: "text-xs text-destructive mt-1",
                        children: S.telefone
                    })]
                })]
            }), (0,
            t.jsx)("h2", {
                className: "text-lg font-serif italic text-foreground mb-4",
                children: "Endereço de Entrega"
            }), (0,
            t.jsxs)("div", {
                className: "space-y-4 mb-8",
                children: [(0,
                t.jsxs)("div", {
                    children: [(0,
                    t.jsx)("label", {
                        className: "block text-xs text-muted-foreground mb-1.5",
                        children: "CEP"
                    }), (0,
                    t.jsxs)("div", {
                        className: "relative",
                        children: [(0,
                        t.jsx)("input", {
                            type: "text",
                            value: x,
                            onChange: e => {
                                var t;
                                let a, r;
                                return h((a = (t = e.target.value).replace(/\D/g, "").slice(0, 8)).length <= 5 ? a : `${a.slice(0, 5)}-${a.slice(5)}`),
                                void (8 === (r = t.replace(/\D/g, "")).length ? V(r) : N(!1))
                            }
                            ,
                            placeholder: "00000-000",
                            className: "w-full bg-card border border-border rounded-xl py-3 px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                        }), p && (0,
                        t.jsx)("div", {
                            className: "absolute right-4 top-1/2 -translate-y-1/2",
                            children: (0,
                            t.jsx)("div", {
                                className: "w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"
                            })
                        })]
                    }), S.cep && (0,
                    t.jsx)("p", {
                        className: "text-xs text-destructive mt-1",
                        children: S.cep
                    })]
                }), v && (0,
                t.jsxs)(t.Fragment, {
                    children: [(0,
                    t.jsxs)("div", {
                        children: [(0,
                        t.jsx)("label", {
                            className: "block text-xs text-muted-foreground mb-1.5",
                            children: "Rua"
                        }), (0,
                        t.jsx)("input", {
                            type: "text",
                            value: b.rua,
                            readOnly: !0,
                            className: "w-full bg-muted border border-border rounded-xl py-3 px-4 text-sm text-foreground"
                        })]
                    }), (0,
                    t.jsxs)("div", {
                        className: "grid grid-cols-3 gap-3",
                        children: [(0,
                        t.jsxs)("div", {
                            children: [(0,
                            t.jsx)("label", {
                                className: "block text-xs text-muted-foreground mb-1.5",
                                children: "Número"
                            }), (0,
                            t.jsx)("input", {
                                type: "text",
                                value: b.numero,
                                onChange: e => j(t => ({
                                    ...t,
                                    numero: e.target.value
                                })),
                                placeholder: "N.",
                                className: "w-full bg-card border border-border rounded-xl py-3 px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                            }), S.numero && (0,
                            t.jsx)("p", {
                                className: "text-xs text-destructive mt-1",
                                children: S.numero
                            })]
                        }), (0,
                        t.jsxs)("div", {
                            className: "col-span-2",
                            children: [(0,
                            t.jsx)("label", {
                                className: "block text-xs text-muted-foreground mb-1.5",
                                children: "Complemento"
                            }), (0,
                            t.jsx)("input", {
                                type: "text",
                                value: b.complemento,
                                onChange: e => j(t => ({
                                    ...t,
                                    complemento: e.target.value
                                })),
                                placeholder: "Apto, Bloco...",
                                className: "w-full bg-card border border-border rounded-xl py-3 px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                            })]
                        })]
                    }), (0,
                    t.jsxs)("div", {
                        children: [(0,
                        t.jsx)("label", {
                            className: "block text-xs text-muted-foreground mb-1.5",
                            children: "Bairro"
                        }), (0,
                        t.jsx)("input", {
                            type: "text",
                            value: b.bairro,
                            readOnly: !0,
                            className: "w-full bg-muted border border-border rounded-xl py-3 px-4 text-sm text-foreground"
                        })]
                    }), (0,
                    t.jsxs)("div", {
                        className: "grid grid-cols-2 gap-3",
                        children: [(0,
                        t.jsxs)("div", {
                            children: [(0,
                            t.jsx)("label", {
                                className: "block text-xs text-muted-foreground mb-1.5",
                                children: "Cidade"
                            }), (0,
                            t.jsx)("input", {
                                type: "text",
                                value: b.cidade,
                                readOnly: !0,
                                className: "w-full bg-muted border border-border rounded-xl py-3 px-4 text-sm text-foreground"
                            })]
                        }), (0,
                        t.jsxs)("div", {
                            children: [(0,
                            t.jsx)("label", {
                                className: "block text-xs text-muted-foreground mb-1.5",
                                children: "Estado"
                            }), (0,
                            t.jsx)("input", {
                                type: "text",
                                value: b.estado,
                                readOnly: !0,
                                className: "w-full bg-muted border border-border rounded-xl py-3 px-4 text-sm text-foreground"
                            })]
                        })]
                    })]
                })]
            }), (0,
            t.jsx)("h2", {
                className: "text-lg font-serif italic text-foreground mb-4",
                children: "Frete"
            }), (0,
            t.jsxs)("div", {
                className: "space-y-3 mb-8",
                children: [(0,
                t.jsxs)("label", {
                    className: `flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-colors ${"pac" === P ? "border-primary bg-primary/5" : "border-border bg-card"}`,
                    children: [(0,
                    t.jsx)("input", {
                        type: "radio",
                        name: "shipping",
                        value: "pac",
                        checked: "pac" === P,
                        onChange: () => k("pac"),
                        className: "sr-only"
                    }), (0,
                    t.jsx)("div", {
                        className: `w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${"pac" === P ? "border-primary" : "border-border"}`,
                        children: "pac" === P && (0,
                        t.jsx)("div", {
                            className: "w-2.5 h-2.5 rounded-full bg-primary"
                        })
                    }), (0,
                    t.jsxs)("div", {
                        className: "flex items-center gap-2.5 flex-1",
                        children: [(0,
                        t.jsx)(g.default, {
                            src: "/images/correios.png",
                            alt: "Correios",
                            width: 32,
                            height: 32,
                            className: "w-8 h-8 object-contain shrink-0"
                        }), (0,
                        t.jsxs)("div", {
                            children: [(0,
                            t.jsx)("p", {
                                className: "text-sm font-semibold text-foreground",
                                children: "Correios (PAC)"
                            }), (0,
                            t.jsx)("p", {
                                className: "text-xs text-muted-foreground",
                                children: "2-5 dias uteis"
                            })]
                        })]
                    }), (0,
                    t.jsx)("span", {
                        className: "text-sm font-bold text-foreground",
                        children: "R$ 15,90"
                    })]
                }), (0,
                t.jsxs)("label", {
                    className: `flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-colors ${"jadlog" === P ? "border-primary bg-primary/5" : "border-border bg-card"}`,
                    children: [(0,
                    t.jsx)("input", {
                        type: "radio",
                        name: "shipping",
                        value: "jadlog",
                        checked: "jadlog" === P,
                        onChange: () => k("jadlog"),
                        className: "sr-only"
                    }), (0,
                    t.jsx)("div", {
                        className: `w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${"jadlog" === P ? "border-primary" : "border-border"}`,
                        children: "jadlog" === P && (0,
                        t.jsx)("div", {
                            className: "w-2.5 h-2.5 rounded-full bg-primary"
                        })
                    }), (0,
                    t.jsxs)("div", {
                        className: "flex items-center gap-2.5 flex-1",
                        children: [(0,
                        t.jsx)(g.default, {
                            src: "/images/jadlog.png",
                            alt: "Jadlog",
                            width: 32,
                            height: 32,
                            className: "w-8 h-8 object-contain shrink-0"
                        }), (0,
                        t.jsxs)("div", {
                            children: [(0,
                            t.jsx)("p", {
                                className: "text-sm font-semibold text-foreground",
                                children: "Jadlog"
                            }), (0,
                            t.jsx)("p", {
                                className: "text-xs text-muted-foreground",
                                children: "5-8 dias uteis"
                            })]
                        })]
                    }), (0,
                    t.jsx)("span", {
                        className: "text-sm font-bold text-foreground",
                        children: "R$ 12,50"
                    })]
                }), (0,
                t.jsxs)("label", {
                    className: `flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-colors ${"free" === P ? "border-[#2d9b3a] bg-[#2d9b3a]/5" : "border-border bg-card"}`,
                    children: [(0,
                    t.jsx)("input", {
                        type: "radio",
                        name: "shipping",
                        value: "free",
                        checked: "free" === P,
                        onChange: () => k("free"),
                        className: "sr-only"
                    }), (0,
                    t.jsx)("div", {
                        className: `w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${"free" === P ? "border-[#2d9b3a]" : "border-border"}`,
                        children: "free" === P && (0,
                        t.jsx)("div", {
                            className: "w-2.5 h-2.5 rounded-full bg-[#2d9b3a]"
                        })
                    }), (0,
                    t.jsxs)("div", {
                        className: "flex items-center gap-2.5 flex-1",
                        children: [(0,
                        t.jsx)(E, {
                            className: "w-5 h-5 text-muted-foreground shrink-0"
                        }), (0,
                        t.jsxs)("div", {
                            children: [(0,
                            t.jsx)("p", {
                                className: "text-sm font-semibold text-foreground",
                                children: "Frete Grátis"
                            }), (0,
                            t.jsx)("p", {
                                className: "text-xs text-muted-foreground",
                                children: "10-15 dias uteis"
                            })]
                        })]
                    }), (0,
                    t.jsx)("span", {
                        className: "text-sm font-bold text-[#2d9b3a]",
                        children: "Grátis"
                    })]
                })]
            }), (0,
            t.jsx)("h2", {
                className: "text-lg font-serif italic text-foreground mb-4",
                children: "Pagamento"
            }), (0,
            t.jsxs)("div", {
                className: "border border-[#2d9b3a] bg-[#2d9b3a]/5 rounded-xl p-4 mb-6 flex items-center gap-3",
                children: [(0,
                t.jsx)("div", {
                    className: "w-10 h-10 rounded-lg bg-[#2d9b3a]/10 flex items-center justify-center shrink-0",
                    children: (0,
                    t.jsxs)("svg", {
                        viewBox: "0 0 24 24",
                        className: "w-6 h-6 text-[#2d9b3a]",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: 1.5,
                        children: [(0,
                        t.jsx)("rect", {
                            x: "3",
                            y: "3",
                            width: "7",
                            height: "7",
                            rx: "1"
                        }), (0,
                        t.jsx)("rect", {
                            x: "14",
                            y: "3",
                            width: "7",
                            height: "7",
                            rx: "1"
                        }), (0,
                        t.jsx)("rect", {
                            x: "3",
                            y: "14",
                            width: "7",
                            height: "7",
                            rx: "1"
                        }), (0,
                        t.jsx)("rect", {
                            x: "14",
                            y: "14",
                            width: "3",
                            height: "3",
                            rx: "0.5"
                        }), (0,
                        t.jsx)("rect", {
                            x: "18",
                            y: "14",
                            width: "3",
                            height: "3",
                            rx: "0.5"
                        }), (0,
                        t.jsx)("rect", {
                            x: "14",
                            y: "18",
                            width: "3",
                            height: "3",
                            rx: "0.5"
                        }), (0,
                        t.jsx)("rect", {
                            x: "18",
                            y: "18",
                            width: "3",
                            height: "3",
                            rx: "0.5"
                        })]
                    })
                }), (0,
                t.jsxs)("div", {
                    className: "flex-1",
                    children: [(0,
                    t.jsx)("p", {
                        className: "text-sm font-bold text-foreground",
                        children: "PIX"
                    }), (0,
                    t.jsx)("p", {
                        className: "text-xs text-muted-foreground",
                        children: "Pagamento instantâneo com desconto"
                    })]
                }), (0,
                t.jsx)($, {
                    className: "w-5 h-5 text-[#2d9b3a]"
                })]
            }), (0,
            t.jsxs)("div", {
                className: "bg-card border border-border rounded-xl p-4 mb-6",
                children: [(0,
                t.jsxs)("div", {
                    className: "flex items-center justify-between mb-1",
                    children: [(0,
                    t.jsx)("span", {
                        className: "text-sm text-muted-foreground",
                        children: "Ovo de Pascoa"
                    }), (0,
                    t.jsx)("span", {
                        className: "text-sm text-foreground",
                        children: "R$ 25,90"
                    })]
                }), r.length > 0 && (0,
                t.jsxs)("div", {
                    className: "flex items-center justify-between mb-1",
                    children: [(0,
                    t.jsx)("span", {
                        className: "text-sm text-muted-foreground",
                        children: `${r.length} Tablete${r.length > 1 ? "s" : ""}`
                    }), (0,
                    t.jsx)("span", {
                        className: "text-sm text-foreground",
                        children: `R$ ${F.toFixed(2).replace(".", ",")}`
                    })]
                }), T > 0 && (0,
                t.jsxs)("div", {
                    className: "flex items-center justify-between mb-1",
                    children: [(0,
                    t.jsx)("span", {
                        className: "text-sm text-muted-foreground",
                        children: `+ ${T} Tablete${T > 1 ? "s" : ""} extra`
                    }), (0,
                    t.jsx)("span", {
                        className: "text-sm text-foreground",
                        children: `R$ ${L.toFixed(2).replace(".", ",")}`
                    })]
                }), q > 0 && (0,
                t.jsxs)("div", {
                    className: "flex items-center justify-between mb-1",
                    children: [(0,
                    t.jsx)("span", {
                        className: "text-sm text-muted-foreground",
                        children: "Frete"
                    }), (0,
                    t.jsx)("span", {
                        className: "text-sm text-foreground",
                        children: `R$ ${q.toFixed(2).replace(".", ",")}`
                    })]
                }), 0 === q && (0,
                t.jsxs)("div", {
                    className: "flex items-center justify-between mb-1",
                    children: [(0,
                    t.jsx)("span", {
                        className: "text-sm text-muted-foreground",
                        children: "Frete"
                    }), (0,
                    t.jsx)("span", {
                        className: "text-sm font-medium text-[#2d9b3a]",
                        children: "Grátis"
                    })]
                }), (0,
                t.jsxs)("div", {
                    className: "border-t border-border mt-2 pt-2 flex items-center justify-between",
                    children: [(0,
                    t.jsx)("span", {
                        className: "text-base font-bold text-foreground",
                        children: "Total"
                    }), (0,
                    t.jsx)("span", {
                        className: "text-2xl font-bold text-[#2d9b3a]",
                        children: `R$ ${B.toFixed(2).replace(".", ",")}`
                    })]
                })]
            }), (0,
            t.jsx)("button", {
                onClick: G,
                disabled: O,
                className: `w-full py-4 rounded-xl text-base font-bold uppercase tracking-wide flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-200 ${O ? "bg-[#7dd4a0]/70 text-white/80 cursor-not-allowed" : "bg-[#7dd4a0] hover:bg-[#6cc490] text-white active:scale-[0.98]"}`,
                children: O ? (0,
                t.jsxs)(t.Fragment, {
                    children: [(0,
                    t.jsx)("div", {
                        className: "w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin"
                    }), "GERANDO PIX..."]
                }) : "GERAR PIX"
            }), A && (0,
            t.jsx)(I, {
                pixCode: A.pixCode,
                qrCodeBase64: A.qrCodeBase64,
                totalValue: B,
                transactionHash: A.transactionHash,
                onClose: () => _(null)
            })]
        })
    }
    function L() {
        return (0,
        t.jsx)("footer", {
            className: "bg-primary text-primary-foreground py-8 px-4",
            children: (0,
            t.jsxs)("div", {
                className: "max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6",
                children: [(0,
                t.jsxs)("div", {
                    className: "text-center md:text-left space-y-1",
                    children: [(0,
                    t.jsx)("p", {
                        className: "font-semibold text-sm",
                        children: "© 2026 Cacau Show • Todos os direitos reservados"
                    }), (0,
                    t.jsx)("p", {
                        className: "text-xs opacity-70",
                        children: "CNPJ: 03.816.961/0001-40 — Cacau Show Ltda."
                    }), (0,
                    t.jsx)("p", {
                        className: "text-xs opacity-70",
                        children: "Loja Cacau Show licenciada pela empresa TikTok"
                    })]
                }), (0,
                t.jsx)("div", {
                    className: "shrink-0",
                    children: (0,
                    t.jsx)("img", {
                        src: "/images/certificado-ra1000.png",
                        alt: "Certificado RA1000 Reclame Aqui",
                        style: {
                            width: 120,
                            height: "auto"
                        }
                    })
                })]
            })
        })
    }
    function q() {
        let[e,s] = (0,
        a.useState)("modal")
          , [i,l] = (0,
        a.useState)(!0)
          , [d,c] = (0,
        a.useState)(null)
          , [m,u] = (0,
        a.useState)([]);
        return (0,
        t.jsxs)("div", {
            className: "min-h-screen flex flex-col bg-background",
            children: [(0,
            t.jsx)(r, {
                unlocked: "store" === e || "product-detail" === e || "checkout" === e
            }), (0,
            t.jsx)(o, {}), (0,
            t.jsxs)("main", {
                className: "flex-1",
                children: ["modal" === e && i && (0,
                t.jsx)(n, {
                    onStart: () => {
                        l(!1),
                        s("drawing")
                    }
                    ,
                    onClose: () => {
                        l(!1),
                        s("drawing")
                    }
                }), "drawing" === e && (0,
                t.jsx)(h, {
                    onSubmit: () => s("analysis")
                }), "analysis" === e && (0,
                t.jsx)(p, {
                    onComplete: () => s("success")
                }), "success" === e && (0,
                t.jsx)(f, {
                    onViewProducts: () => s("store")
                }), "store" === e && (0,
                t.jsx)(w, {
                    onSelectProduct: e => {
                        c(e),
                        s("product-detail"),
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        })
                    }
                }), "product-detail" === e && d && (0,
                t.jsx)(M, {
                    product: d,
                    onBack: () => {
                        c(null),
                        s("store"),
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        })
                    }
                    ,
                    onCheckout: e => {
                        u(e),
                        s("checkout"),
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        })
                    }
                }), "checkout" === e && d && (0,
                t.jsx)(T, {
                    product: d,
                    selectedTablets: m,
                    onBack: () => {
                        s("product-detail"),
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        })
                    }
                }), "modal" === e && (0,
                t.jsx)("div", {
                    className: "opacity-30 pointer-events-none",
                    children: (0,
                    t.jsx)(h, {
                        onSubmit: () => {}
                    })
                })]
            }), (0,
            t.jsx)(L, {})]
        })
    }
    e.s(["default", () => q], 31713)
}
]);
