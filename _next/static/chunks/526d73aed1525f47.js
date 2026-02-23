(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 93296, 31763, e => {
    "use strict";
    var t = e.i(44440);
    let r = (...e) => e.filter( (e, t, r) => !!e && "" !== e.trim() && r.indexOf(e) === t).join(" ").trim()
      , a = e => {
        let t = e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, r) => r ? r.toUpperCase() : t.toLowerCase());
        return t.charAt(0).toUpperCase() + t.slice(1)
    }
    ;
    var o = {
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
    let i = (0,
    t.forwardRef)( ({color: e="currentColor", size: a=24, strokeWidth: i=2, absoluteStrokeWidth: n, className: s="", children: d, iconNode: l, ...c}, u) => (0,
    t.createElement)("svg", {
        ref: u,
        ...o,
        width: a,
        height: a,
        stroke: e,
        strokeWidth: n ? 24 * Number(i) / Number(a) : i,
        className: r("lucide", s),
        ...!d && !(e => {
            for (let t in e)
                if (t.startsWith("aria-") || "role" === t || "title" === t)
                    return !0;
            return !1
        }
        )(c) && {
            "aria-hidden": "true"
        },
        ...c
    }, [...l.map( ([e,r]) => (0,
    t.createElement)(e, r)), ...Array.isArray(d) ? d : [d]]))
      , n = (e, o) => {
        let n = (0,
        t.forwardRef)( ({className: n, ...s}, d) => (0,
        t.createElement)(i, {
            ref: d,
            iconNode: o,
            className: r(`lucide-${a(e).replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()}`, `lucide-${e}`, n),
            ...s
        }));
        return n.displayName = a(e),
        n
    }
    ;
    e.s(["default", () => n], 31763);
    let s = n("shield", [["path", {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y"
    }]]);
    e.s(["Shield", () => s], 93296)
}
, 62924, (e, t, r) => {
    t.exports = e.r(37109)
}
, 99956, e => {
    "use strict";
    var t = e.i(17141)
      , r = e.i(44440)
      , a = e.i(62924);
    function o() {
        return "u" > typeof window
    }
    function i() {
        return "production"
    }
    function n() {
        return "development" === ((o() ? window.vam : i()) || "production")
    }
    function s(e) {
        return RegExp(`/${e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?=[/?#]|$)`)
    }
    function d(e) {
        return (0,
        r.useEffect)( () => {
            var t;
            e.beforeSend && (null == (t = window.va) || t.call(window, "beforeSend", e.beforeSend))
        }
        , [e.beforeSend]),
        (0,
        r.useEffect)( () => {
            !function(e={
                debug: !0
            }) {
                var t;
                if (!o())
                    return;
                !function(e="auto") {
                    if ("auto" === e) {
                        window.vam = i();
                        return
                    }
                    window.vam = e
                }(e.mode),
                window.va || (window.va = function(...e) {
                    (window.vaq = window.vaq || []).push(e)
                }
                ),
                e.beforeSend && (null == (t = window.va) || t.call(window, "beforeSend", e.beforeSend));
                let r = e.scriptSrc ? e.scriptSrc : n() ? "https://va.vercel-scripts.com/v1/script.debug.js" : e.basePath ? `${e.basePath}/insights/script.js` : "/_vercel/insights/script.js";
                if (document.head.querySelector(`script[src*="${r}"]`))
                    return;
                let a = document.createElement("script");
                a.src = r,
                a.defer = !0,
                a.dataset.sdkn = "@vercel/analytics" + (e.framework ? `/${e.framework}` : ""),
                a.dataset.sdkv = "1.6.1",
                e.disableAutoTrack && (a.dataset.disableAutoTrack = "1"),
                e.endpoint ? a.dataset.endpoint = e.endpoint : e.basePath && (a.dataset.endpoint = `${e.basePath}/insights`),
                e.dsn && (a.dataset.dsn = e.dsn),
                a.onerror = () => {
                    let e = n() ? "Please check if any ad blockers are enabled and try again." : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
                    console.log(`[Vercel Web Analytics] Failed to load script from ${r}. ${e}`)
                }
                ,
                n() && !1 === e.debug && (a.dataset.debug = "false"),
                document.head.appendChild(a)
            }({
                framework: e.framework || "react",
                basePath: e.basePath ?? function() {
                    if (void 0 !== t.default && void 0 !== t.default.env)
                        return t.default.env.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH
                }(),
                ...void 0 !== e.route && {
                    disableAutoTrack: !0
                },
                ...e
            })
        }
        , []),
        (0,
        r.useEffect)( () => {
            e.route && e.path && function({route: e, path: t}) {
                var r;
                null == (r = window.va) || r.call(window, "pageview", {
                    route: e,
                    path: t
                })
            }({
                route: e.route,
                path: e.path
            })
        }
        , [e.route, e.path]),
        null
    }
    function l(e) {
        let o, i, n, {route: l, path: c} = (o = (0,
        a.useParams)(),
        i = (0,
        a.useSearchParams)(),
        n = (0,
        a.usePathname)(),
        o ? {
            route: function(e, t) {
                if (!e || !t)
                    return e;
                let r = e;
                try {
                    let e = Object.entries(t);
                    for (let[t,a] of e)
                        if (!Array.isArray(a)) {
                            let e = s(a);
                            e.test(r) && (r = r.replace(e, `/[${t}]`))
                        }
                    for (let[t,a] of e)
                        if (Array.isArray(a)) {
                            let e = s(a.join("/"));
                            e.test(r) && (r = r.replace(e, `/[...${t}]`))
                        }
                    return r
                } catch (t) {
                    return e
                }
            }(n, Object.keys(o).length ? o : Object.fromEntries(i.entries())),
            path: n
        } : {
            route: null,
            path: n
        });
        return r.default.createElement(d, {
            path: c,
            route: l,
            ...e,
            basePath: function() {
                if (void 0 !== t.default && void 0 !== t.default.env)
                    return t.default.env.NEXT_PUBLIC_VERCEL_OBSERVABILITY_BASEPATH
            }(),
            framework: "next"
        })
    }
    function c(e) {
        return r.default.createElement(r.Suspense, {
            fallback: null
        }, r.default.createElement(l, {
            ...e
        }))
    }
    e.s(["Analytics", () => c])
}
, 42048, e => {
    "use strict";
    var t = e.i(87433)
      , r = e.i(44440)
      , a = e.i(93296);
    let o = [{
        id: "necessary",
        label: "Cookies Necessarios",
        description: "Essenciais para o funcionamento do site. Nao podem ser desativados.",
        required: !0,
        defaultChecked: !0
    }, {
        id: "analytics",
        label: "Cookies de Analise",
        description: "Nos ajudam a entender como voce usa o site para melhorar a experiencia.",
        required: !1,
        defaultChecked: !0
    }, {
        id: "marketing",
        label: "Cookies de Marketing",
        description: "Utilizados para exibir anuncios relevantes e medir o desempenho de campanhas.",
        required: !1,
        defaultChecked: !0
    }, {
        id: "social",
        label: "Cookies de Redes Sociais",
        description: "Permitem integracao com redes sociais como TikTok, Instagram e Facebook.",
        required: !1,
        defaultChecked: !0
    }];
    function i(e, t, r) {
        let a = new Date(Date.now() + 864e5 * r).toUTCString();
        document.cookie = `${e}=${encodeURIComponent(t)}; expires=${a}; path=/; SameSite=Lax; Secure`
    }
    function n() {
        let[e,n] = (0,
        r.useState)(!1)
          , [s,d] = (0,
        r.useState)(!1)
          , [l,c] = (0,
        r.useState)(Object.fromEntries(o.map(e => [e.id, e.defaultChecked])));
        (0,
        r.useEffect)( () => {
            let e;
            if (!(e = document.cookie.match(RegExp("(^| )cacau_cookie_consent=([^;]+)"))) || !decodeURIComponent(e[2])) {
                let e = setTimeout( () => n(!0), 800);
                return () => clearTimeout(e)
            }
        }
        , []);
        let u = e => {
            i("cacau_cookie_consent", JSON.stringify(e), 365),
            i("cacau_cookie_consent_date", new Date().toISOString(), 365),
            n(!1)
        }
        ;
        return e ? (0,
        t.jsxs)("div", {
            className: "fixed inset-0 z-[9999] flex items-end justify-center p-0 sm:p-4",
            children: [(0,
            t.jsx)("div", {
                className: "absolute inset-0 bg-black/40"
            }), (0,
            t.jsxs)("div", {
                className: "relative w-full max-w-lg bg-background border-t sm:border border-border sm:rounded-2xl shadow-2xl animate-in slide-in-from-bottom duration-500 overflow-hidden",
                children: [(0,
                t.jsxs)("div", {
                    className: "bg-primary px-4 py-3 flex items-center gap-2",
                    children: [(0,
                    t.jsx)(a.Shield, {
                        className: "w-5 h-5 text-primary-foreground"
                    }), (0,
                    t.jsx)("h3", {
                        className: "text-sm font-bold text-primary-foreground",
                        children: "Sua privacidade e importante"
                    })]
                }), (0,
                t.jsxs)("div", {
                    className: "p-4 max-h-[70vh] overflow-y-auto",
                    children: [(0,
                    t.jsxs)("p", {
                        className: "text-sm text-muted-foreground leading-relaxed mb-4",
                        children: ["Utilizamos cookies e tecnologias semelhantes para melhorar sua experiencia, personalizar conteudo e anuncios, e analisar o trafego do site. Ao clicar em", ' "Aceitar todos"', ", voce concorda com o uso de todos os cookies."]
                    }), (0,
                    t.jsx)("button", {
                        onClick: () => d(!s),
                        className: "text-sm font-semibold text-primary underline underline-offset-2 mb-3 hover:opacity-80 transition-opacity",
                        children: s ? "Ocultar detalhes" : "Gerenciar preferencias"
                    }), s && (0,
                    t.jsx)("div", {
                        className: "space-y-3 mb-4",
                        children: o.map(e => (0,
                        t.jsxs)("div", {
                            className: "flex items-start gap-3 p-3 rounded-xl bg-card border border-border",
                            children: [(0,
                            t.jsx)("button", {
                                type: "button",
                                role: "switch",
                                "aria-checked": l[e.id],
                                "aria-label": e.label,
                                disabled: e.required,
                                onClick: () => {
                                    var t;
                                    let r;
                                    return t = e.id,
                                    r = o.find(e => e.id === t),
                                    void (!r?.required && c(e => ({
                                        ...e,
                                        [t]: !e[t]
                                    })))
                                }
                                ,
                                className: `mt-0.5 relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full transition-colors duration-200 ${l[e.id] ? "bg-[#2d9b3a]" : "bg-muted"} ${e.required ? "opacity-60 cursor-not-allowed" : ""}`,
                                children: (0,
                                t.jsx)("span", {
                                    className: `inline-block h-4 w-4 rounded-full bg-white shadow-sm transform transition-transform duration-200 mt-0.5 ${l[e.id] ? "translate-x-4 ml-0.5" : "translate-x-0.5"}`
                                })
                            }), (0,
                            t.jsxs)("div", {
                                className: "flex-1 min-w-0",
                                children: [(0,
                                t.jsxs)("p", {
                                    className: "text-sm font-semibold text-foreground flex items-center gap-1.5",
                                    children: [e.label, e.required && (0,
                                    t.jsx)("span", {
                                        className: "text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded-full font-medium",
                                        children: "Obrigatorio"
                                    })]
                                }), (0,
                                t.jsx)("p", {
                                    className: "text-xs text-muted-foreground mt-0.5 leading-relaxed",
                                    children: e.description
                                })]
                            })]
                        }, e.id))
                    }), (0,
                    t.jsxs)("div", {
                        className: "flex flex-col gap-2",
                        children: [(0,
                        t.jsx)("button", {
                            onClick: () => {
                                let e = Object.fromEntries(o.map(e => [e.id, !0]));
                                c(e),
                                u(e)
                            }
                            ,
                            className: "w-full py-3 rounded-xl bg-[#2d9b3a] hover:bg-[#248a30] text-white text-sm font-bold uppercase tracking-wide transition-all duration-200 active:scale-[0.98]",
                            children: "Aceitar todos"
                        }), s && (0,
                        t.jsx)("button", {
                            onClick: () => {
                                u(l)
                            }
                            ,
                            className: "w-full py-3 rounded-xl bg-card border border-border text-foreground text-sm font-semibold hover:bg-muted transition-all duration-200 active:scale-[0.98]",
                            children: "Aceitar selecionados"
                        })]
                    }), (0,
                    t.jsx)("p", {
                        className: "text-[10px] text-muted-foreground text-center mt-3 leading-relaxed",
                        children: "Em conformidade com a LGPD (Lei Geral de Protecao de Dados) e politicas de publicidade do TikTok Ads."
                    })]
                })]
            })]
        }) : null
    }
    e.s(["CookieConsent", () => n])
}
]);
