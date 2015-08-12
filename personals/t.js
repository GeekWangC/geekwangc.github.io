!function(t, e, i, n, a, l, o) {
    var c = {
        logId: '3634728553868621216',
        planId: 13926,
        siteId: '9b4c6a8576564e33da42ba78fb8219fe',
        settings: {
            "antipornLevel": 1,
            "contentType": 3,
            "css": {
                ".hm-t-container": {
                    "background-color": "#fff",
                    "border-color": "#f60",
                    "height": "297px",
                    "width": "239px"
                },
                ".hm-t-header": {
                    "background-color": "#f60",
                    "color": "#fff",
                    "font-family": "arial,SimSun,sans-serif",
                    "font-size": "14px",
                    "font-weight": "normal",
                    "height": "32px",
                    "line-height": "32px",
                    "width": "34px"
                },
                ".hm-t-hot-word": {
                    "background-color": "#f60",
                    "color": "#fcaa37"
                },
                ".hm-t-img-title": {
                    "line-height": "16px"
                },
                ".hm-t-img:hover": {
                    "border-color": "#f60"
                },
                ".hm-t-item": {
                    "list-style": "square inside"
                },
                ".hm-t-novel-attr": {
                    "font-weight": "normal"
                },
                ".hm-t-txt": {
                    "line-height": "22px"
                },
                ".hm-t-txt,.hm-t-img-title": {
                    "color": "#333",
                    "font-family": "arial,SimSun,sans-serif",
                    "font-size": "14px",
                    "font-weight": "normal",
                    "text-decoration": "none"
                },
                ".hm-t-txt:active,.hm-t-img-title:active": {
                    "color": "#f60",
                    "text-decoration": "none"
                },
                ".hm-t-txt:hover,.hm-t-img-title:hover": {
                    "color": "#f60",
                    "text-decoration": "underline"
                }
            },
            "enableSmart": 1,
            "foldStyle": {
                "goTop": 0,
                "type": "txt"
            },
            "highlight": {
                "max": 0,
                "value": [""]
            },
            "hotWord": 0,
            "imgColumn": 2,
            "imgHeight": 96,
            "imgRow": 1,
            "imgShowFields": [],
            "imgTextPos": "outside",
            "imgTextRow": 2,
            "imgWidth": 96,
            "linkType": 1,
            "pos": 0,
            "showType": 0,
            "switchMode": {
                "interval": 5,
                "text": "",
                "type": "single"
            },
            "textColumn": 1,
            "textRow": 5,
            "textShowFields": [],
            "tplType": "mix",
            "units": [{
                "column": 2,
                "imgColumn": 1,
                "imgRow": 1,
                "row": 1,
                "textColumn": 0,
                "textRow": 0
            },
            {
                "column": 1,
                "imgColumn": 0,
                "imgRow": 0,
                "row": 5,
                "textColumn": 1,
                "textRow": 1
            }],
            "windowName": "猜你喜欢"
        },
        txtResult: [{
            "title": "骑行湘湖、石岩山",
            "url": "http://www.baixiaoping.com/Recallview.asp?id=12"
        },
        {
            "title": "最好最全的配色方案图谱全集（104张配色图案）五",
            "url": "http://www.baixiaoping.com/Newsviwe.asp?id=166"
        },
        {
            "title": "我的西藏梦，催我远行！",
            "url": "http://www.baixiaoping.com/Newsviwe.asp?id=228"
        },
        {
            "title": "关于本站 / About this site",
            "url": "http://www.baixiaoping.com/Xiaobai.asp?id=1&wecha_id=oAPMBt5gSN7VeshbTzXomIYiG7N0"
        },
        {
            "title": "颜色原理",
            "url": "http://www.baixiaoping.com/Newsviwe.asp?id=123"
        }],
        imgResult: [{
            "img_height": 300,
            "img_url": "http://t10.baidu.com/it/u=2158830912,903329889&fm=72",
            "img_width": 225,
            "title": "对照片进行快速去斑",
            "url": "http://www.baixiaoping.com/Webdesignview.asp?id=10"
        },
        {
            "img_height": 112,
            "img_url": "http://t12.baidu.com/it/u=187466861,399382127&fm=72",
            "img_width": 140,
            "title": "细数被程序员吐糟的9大困难",
            "url": "http://www.baixiaoping.com/Newsviwe.asp?id=405"
        }],
        hotResult: {},
        hlWord: ''
    }
    var s;
    s = {};
    var r;
    s.browser = {},
    s.browser.ae = /msie (\d+\.\d+)/i.test(l.userAgent),
    s.browser.F = /webkit/i.test(l.userAgent),
    s.browser.xe = /gecko/i.test(l.userAgent) && !/like gecko/i.test(l.userAgent),
    s.browser.J = "CSS1Compat" == i.compatMode,
    r = s.browser;
    var m;
    s.cookie = {},
    s.cookie.set = function(t, e, n) {
        var a;
        n.expires && (a = new Date, a.setTime(a.getTime() + n.expires)),
        i.cookie = t + "=" + e + (n.domain ? "; domain=" + n.domain: "") + (n.path ? "; path=" + n.path: "") + (a ? "; expires=" + a.toGMTString() : "") + (n.secure ? "; secure": "")
    },
    s.cookie.get = function(t) {
        var e = new RegExp("(^| )" + t + "=([^;]*)(;|$)"),
        n = e.exec(i.cookie);
        return n ? n[2] : null
    },
    m = s.cookie;
    var g;
    s.lang = {},
    s.lang.A = function(t, e) {
        return "[object " + e + "]" === {}.toString.call(t)
    },
    g = s.lang;
    var h;
    s.dom = {},
    s.dom.j = function(t) {
        return s.lang.A(t, "String") && (t = i.getElementById(t)),
        t
    },
    s.dom.l = function(t, e) {
        if (e = e || i, e.getElementsByClassName) return Array.prototype.slice.call(e.getElementsByClassName(t));
        var n = [],
        a = e.getElementsByTagName("*");
        t = new RegExp("(^|\\s)" + t.replace(/\-/g, "\\-") + "(\\s|$)");
        for (var l = 0,
        o = a.length; o > l; l++) t.test(a[l].className) && n.push(a[l]);
        return n
    },
    h = s.dom;
    var p;
    s.C = {},
    s.C.S = function(t) {
        return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
    },
    s.C.ye = function(t) {
        var i = String(t).replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
        return i.replace(/&#([\d]+);/g,
        function(t, i) {
            return String.fromCharCode(e(i, 10))
        })
    },
    s.C.we = function(t) {
        return t.indexOf("-") < 0 && t.indexOf("_") < 0 ? t: t.replace(/[-_][^-_]/g,
        function(t) {
            return t.charAt(1).toUpperCase()
        })
    },
    p = s.C;
    var d;
    s.dom.O = function(t) {
        return t = s.dom.j(t),
        9 == t.nodeType ? t: t.ownerDocument || t.document
    },
    s.dom.getComputedStyle = function(t, e) {
        t = s.dom.j(t);
        var i, n = s.dom.O(t);
        return n.defaultView && n.defaultView.getComputedStyle && (i = n.defaultView.getComputedStyle(t, null)) ? i[e] || i.getPropertyValue(e) : ""
    },
    s.dom.q = s.dom.q || {},
    s.dom.D = s.dom.D || [],
    s.dom.D.filter = function(t, e, i) {
        for (var n, a = 0,
        l = s.dom.D; n = l[a]; a++)(n = n[i]) && (e = n(t, e));
        return e
    },
    s.dom.Y = function(t, e) {
        var i = s.dom;
        t = i.j(t),
        e = s.C.we(e);
        var n = t.style[e] || (t.currentStyle ? t.currentStyle[e] : "") || i.getComputedStyle(t, e);
        if (!n || "auto" == n) {
            var a = i.q[e];
            a && (n = a.get ? a.get(t, e, n) : s.dom.Y(t, a))
        }
        return (a = i.D) && (n = a.filter(e, n, "get")),
        n
    },
    s.dom.se = function(t) {
        t = s.dom.j(t);
        var i, a, l = s.dom.O(t),
        o = s.browser,
        r = s.dom.Y,
        m = (o.xe > 0 && l.Te && "absolute" == r(t, "position") && ("" === t.style.top || "" === t.style.left), {
            left: 0,
            top: 0
        }),
        g = o.ae && !o.J ? l.body: l.documentElement;
        if (t == g) return m;
        if (t.getBoundingClientRect) {
            a = t.getBoundingClientRect(),
            m.left = n.floor(a.left) + n.max(l.documentElement.scrollLeft, l.body.scrollLeft),
            m.top = n.floor(a.top) + n.max(l.documentElement.scrollTop, l.body.scrollTop),
            m.left -= l.documentElement.clientLeft,
            m.top -= l.documentElement.clientTop;
            var h = l.body,
            c = e(r(h, "borderLeftWidth"), 10),
            p = e(r(h, "borderTopWidth"), 10);
            o.ae && !o.J && (m.left -= isNaN(c) ? 2 : c, m.top -= isNaN(p) ? 2 : p)
        } else {
            i = t;
            do {
                if (m.left += i.offsetLeft, m.top += i.offsetTop, o.F > 0 && "fixed" == r(i, "position")) {
                    m.left += l.body.scrollLeft,
                    m.top += l.body.scrollTop;
                    break
                }
                i = i.offsetParent
            } while ( i && i != t );
            for (o.F > 0 && "absolute" == r(t, "position") && (m.top -= l.body.offsetTop), i = t.offsetParent; i && i != l.body;) m.left -= i.scrollLeft,
            m.top -= i.scrollTop,
            i = i.offsetParent
        }
        return m
    },
    d = s.dom;
    var u;
    s.event = {},
    s.event.i = function(t, e, i) {
        t.attachEvent ? t.attachEvent("on" + e,
        function(e) {
            i.call(t, e)
        }) : t.addEventListener && t.addEventListener(e, i, !1)
    },
    s.event.stopPropagation = function(t) {
        t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0
    },
    u = s.event;
    var x;
    s.U = {},
    s.U.log = function(e, i) {
        var a = new Image,
        l = "mini_tangram_log_" + n.floor(2147483648 * n.random()).toString(36);
        t[l] = a,
        a.onload = a.onerror = a.onabort = function() {
            a.onload = a.onerror = a.onabort = null,
            t[l] = null,
            a = null,
            i && i(e)
        },
        a.src = e
    },
    x = s.U;
    var I = function() {
        var t = function(t) {
            var e = [];
            return e.push("with(this){"),
            e.push(t.replace(/<(script|style)[^>]*>([\s\S]*?)<\/\1>/g,
            function(t, e, i) {
                return ["<", e, ">", '#{decodeURIComponent("', a(i), '")}', "</", e, ">"].join("")
            }).replace(/[\r\n]+/g, "\n").replace(/^\n+|\s+$/gm, "").replace(/((^\s*[#<].*$)\s?)+/gm,
            function(t) {
                return t = ['"', t.replace(/&none;/g, "").replace(/["'\\]/g, "\\$&").replace(/\n/g, "\\n").replace(/(!?#)\{(.*?)\}/g,
                function(t, e, i) {
                    i = i.replace(/\\n/g, "\n").replace(/\\([\\'"])/g, "$1");
                    var n = /^[a-z$][\w+$]+$/i.test(i) && !/^(true|false|NaN|null|this)$/.test(i);
                    return ['",', n ? ["typeof ", i, '=="undefined"?"":'].join("") : "", "String(" + i + ').replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/\'/g, "&#39;")', ',"'].join("")
                }), '"'].join("").replace(/^"",|,""$/g, ""),
                t ? ["_output_.push(", t, ");"].join("") : ""
            })),
            e.push("}"),
            new Function("_output_", "helper", e.join(""))
        },
        e = function(e) {
            var i = t(e);
            return function(t, e) {
                var n = [];
                return i.call(t, n, e),
                n.join("")
            }
        };
        return {
            format: function(t, i, n) {
                return t ? e(t)(i, n) : ""
            },
            je: e
        }
    } ();
    var f = function(t) {
        var e = {};
        return t.i = function(t, i) {
            e[t] = e[t] || [],
            e[t].push(i)
        },
        t.s = function(t) {
            for (var i = e[t] = e[t] || [], n = [].slice.call(arguments, 1), a = 0, l = i.length; l > a; a++) if (!1 === i[a].apply(null, n)) return ! 1
        },
        t
    };
    var w;
    w = f({});
    var y;
    y = function(t) {
        var e = function(t) {
            n = t,
            i = "fulfilled",
            setTimeout(function() {
                a.forEach(function(t) {
                    t(n)
                })
            },
            0)
        },
        i = "pending",
        n = null,
        a = [];
        this.then = function(t) {
            return "pending" === i ? (a.push(t), this) : (t(n), this)
        },
        t(e)
    };
    var v = {
        create: function() {
            var e = this,
            n = c.settings.contentTuid,
            a = c.settings.hotwordTuid;
            if (n || a) if (this.V(n), this.V(a), t.slotbydup) e.Z(n, 1),
            e.Z(a, 2);
            else {
                var l = i.createElement("script");
                l.src = "http://cpro.baidustatic.com/cpro/ui/br.js",
                l.onload = l.onreadystatechange = function() {
                    this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (e.Z(n, 1), e.Z(a, 2))
                };
                var o = i.getElementsByTagName("script")[0];
                o.parentNode.appendChild(l)
            }
        },
        Z: function(e, i) {
            if (e) {
                var n = this,
                a = ["callback_", +new Date].join(""),
                l = function(t, e) {
                    return t = e.concat(t),
                    t.length = t.length - e.length,
                    t
                };
                t[a] = function(o) {
                    if (o = n.de(o, e), 0 !== o.length) {
                        switch (i) {
                        case 2:
                            c.hotResult.word = l(c.hotResult.word, o);
                            break;
                        default:
                            c.txtResult = l(c.txtResult, o)
                        }
                        w.s("init"),
                        delete t[a]
                    }
                },
                (t.slotbydup = t.slotbydup || []).push({
                    id: e,
                    container: "cpro_" + e,
                    cpro_set_baiduRec_jsonpCb: a
                })
            }
        },
        de: function(t, e) {
            for (var i = [], n = t.slots, a = 0, l = n.length; l > a; a++) {
                var o = n[a];
                if (o.id === e) for (var s = 0,
                r = o.ads.length; r > s; s++) {
                    var m = o.ads[s].data.meta[0];
                    m.title && (i.push({
                        title: m.title,
                        url: m.curl
                    }), x.log(o.ads[s].data.noticeurl[0]))
                }
            }
            return i
        },
        V: function(t) {
            if (t) {
                var e = "cpro_" + t;
                if (!h.j(e)) {
                    var n = i.createElement("div");
                    n.id = e,
                    i.body.appendChild(n)
                }
            }
        }
    };
    v.create();
    var _ = {};
    _.extend = function(t, e) {
        for (var i in e)({}).hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t
    },
    _.iterate = function(t, e) {
        for (var i in t) if ({}.hasOwnProperty.call(t, i) && e.call(t, i, t[i]) === !1) return ! 1
    },
    _.fe = function(t) {
        var e = [];
        return _.iterate(t,
        function(t, i) {
            e.push(t + "{"),
            _.iterate(i,
            function(t, i) {
                e.push(t + ":" + i + ";")
            }),
            e.push("}")
        }),
        e.join("")
    },
    _.Ie = function() {
        return n.max(i.documentElement.scrollHeight, i.body.clientHeight)
    },
    _.te = function() {
        return n.max(i.documentElement.scrollTop, i.body.scrollTop)
    },
    _.ie = function() {
        return t.innerHeight || i.documentElement.clientHeight || i.body.clientHeight
    },
    _.ee = function(e) {
        return (t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame ||
        function(e) {
            t.setTimeout(e, 1e3 / 60)
        })(e)
    },
    _.Me = function(t, e, i, n) {
        n = n || 100,
        g.A(t, "Array") || g.A(t, "NodeList") || g.A(t, "HTMLCollection") || (t = [t]);
        for (var a = 0,
        l = t.length; l > a; a++) {
            if (t[a].style.visibility = "visible", "ellipsis" === t[a].getAttribute("data-overflow")) {
                var o = 0;
                for (t[a].offsetHeight > e && (t[a].innerHTML += "\u2026"); t[a].offsetHeight > e && o++<n;) {
                    var s = p.ye(t[a].innerHTML),
                    r = s.substring(0, s.length - 2) + "\u2026";
                    t[a].innerHTML = p.S(r)
                }
            }
            t[a].style.height = e + "px"
        }
        i && i()
    },
    _.log = function() {
        for (var t = [], e = 0, i = arguments.length; i > e; e++) t[e] = a(("" + arguments[e]).replace(/'/g, "'0").replace(/\*/g, "'1"));
        x.log(["http://hm.baidu.com/hm.gif?si=" + c.siteId, "st=4", "nv=0", "et=98", "ep=" + t.join("*"), "rnd=" + n.round(2147483647 * n.random())].join("&"))
    },
    _.Q = function(e) {
        var i, n = function() {
            "[object Object]" === Object.prototype.toString.call(t._hmt) && (clearInterval(i), e())
        };
        i = setInterval(n, 200)
    };
    var b;
    b = {
        get: function() {
            var t = m.get("hm_t_vis_" + c.planId) || c.settings.showType;
            return "0" != t
        },
        set: function(t) {
            m.set("hm_t_vis_" + c.planId, t ? "1": "0", {
                path: "/"
            })
        }
    };
    var L;
    L = {
        w: !1,
        N: !1
    };
    var j = function() {
        this.create(function(e) {
            w.s("shadowCreated", e);
            var i = e.wrap.style.position || "static",
            n = e.wrap.style.left;
            e.wrap.style.position = "absolute",
            e.wrap.style.left = "-99999px";
            var a = function() {
                return e && e.wrap ? (e.wrap.style.position = i, e.wrap.style.left = n, w.s("done", e), void("_bdhm_t" in t && t._bdhm_t.c && t._bdhm_t.c.oncreate && t._bdhm_t.c.oncreate())) : !1
            };
            e.wrap.offsetHeight ? setTimeout(a, 100) : t.onload = a
        })
    };
    j.init = function() {
        return new j
    },
    j.prototype.create = function(e) {
        for (var n, a = function() {
            var t = s.g = p.contentWindow.document;
            t.open(),
            t.write(I.format('<!doctype html><html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><style>\rhtml,body{margin:0;overflow:hidden;}\r</style></head><body></body></html>')),
            t.close(),
            s.me = !0,
            s.body = t.body;
            var i = s.I = t.createElement("style"),
            n = t.getElementsByTagName("head")[0];
            n.appendChild(i),
            s.K(p),
            e(s)
        },
        l = ["createShadowRoot", "webkitCreateShadowRoot"], o = 0; o < l.length; o++) if ("function" == typeof i.body[l[o]]) {
            n = l[o];
            break
        }
        var s = f(this),
        r = s.wrap = i.createElement("div");
        if (n) {
            var m = i.createElement("div");
            if (r.appendChild(m), w.s("shadowWrapCreate", s) === !1) return void s.u();
            var g = s.body = m[n](),
            h = s.g = g.ownerDocument,
            c = s.I = h.createElement("style");
            g.appendChild(c),
            s.K(m),
            e(s)
        } else {
            var p = i.createElement("iframe");
            if (p.scrolling = "no", p.frameBorder = 0, p.allowTransparency = !0, r.appendChild(p), w.s("shadowWrapCreate", s) === !1) return void s.u();
            try {
                p.contentWindow.document,
                a()
            } catch(d) {
                var u = i.getElementsByTagName("base");
                if (u && u.length > 0) for (var x = {},
                o = 0; o < u.length; o++) x[u[o]] = u[o].target,
                "_self" != u[o].target && (u[o].target = "_self");
                if (p.src = ["javascript:void((function(){", "document.open();", 'document.domain="' + i.domain + '";', "document.close();", "})())"].join(""), t.XMLHttpRequest ? a() : setTimeout(a, 0), u && u.length > 0) for (var o = 0; o < u.length; o++)"_self" == u[o].target && (u[o].target = x[u[o]])
            }
        }
    },
    j.prototype.K = function(t) {
        this.wrap.style.cssText = ["display:block", "margin:0", "padding:0", "float:none", "clear:none", "overflow:hidden", "position:relative", "border:0", "background:none", "max-width:none", "min-width:none", "max-height:none", "min-height:none", "border-radius:0", "box-shadow:none", "transition:none", "text-align:left", "box-sizing:content-box"].join(";"),
        t.style.cssText = this.wrap.style.cssText,
        t.style.width = "100%",
        t.style.height = "100%",
        this.info = {},
        this.h = L,
        this.I.W = [],
        this.I.G = [];
        var e = this._ = i.createElement("style");
        e.W = [],
        e.G = [];
        var n = i.getElementsByTagName("head")[0];
        n && n.appendChild(e),
        this.o = this.g.createElement("div"),
        this.o.className = "hm-t-container",
        this.body.appendChild(this.o)
    },
    j.prototype.u = function() {
        this.s("dispose");
        var t = this.wrap;
        t && t.parentNode && t.parentNode.removeChild(t),
        this.wrap = null,
        this.g = null,
        this.body = null,
        this.I = null;
        var e = this._;
        e && e.parentNode.removeChild(e),
        this._ = null
    },
    j.prototype.t = function(t, e) {
        var n = this.I,
        a = n.W,
        l = n.G;
        t && (a.push(t), l.push(e || "")),
        n.styleSheet ? n.styleSheet.cssText = a.join("") : (n.innerHTML = "", n.appendChild(i.createTextNode(a.join(""))))
    },
    j.prototype.B = function(t) {
        var e = this.I.W,
        i = this.I.G;
        if (t != o) for (var n = 0,
        a = i.length; a > n; n++) t === i[n] && (i[n] = "", e[n] = "");
        else e.length = 0,
        i.length = 0;
        this.t()
    },
    j.prototype.X = function(t, e) {
        this.t.call({
            I: this._
        },
        t, e)
    },
    j.prototype.Ne = function(t, e) {
        this.B.call({
            I: this._
        },
        e)
    },
    j.prototype.ve = function() {
        var e = this.wrap;
        try {
            var n = d.se(e).top,
            a = e.offsetHeight;
            0 >= a && (a = d.getComputedStyle(e, "elemHeight"), (0 > a || null == a) && (a = d.Y(e, "elemHeight"))),
            a = parseFloat(a) || 0;
            var l = t.pageYOffset || i.documentElement.scrollTop || i.body.scrollTop,
            o = ("BackCompat" === i.compatMode ? i.body: i.documentElement).clientHeight;
            return n + a > l && l + o > n
        } catch(s) {
            return ! 1
        }
    };
    var R = {
        name: "",
        init: function(t) {
            t.info.style = this.name,
            c.settings.linkTarget = c.settings.linkType ? "_blank": t.me ? "_parent": "_self",
            t.t(".hm-t-container,.hm-t-container *{box-sizing:content-box;margin:0;padding:0;float:none;clear:none;overflow:hidden;white-space:nowrap;word-wrap:normal;border:0;background:none;width:auto;height:auto;max-width:none;min-width:none;max-height:none;min-height:none;border-radius:0;box-shadow:none;transition:none;}a{display:inline-block;}.hm-t-header{position:relative;}.hm-t-list{position:relative;*zoom:1;}.hm-t-list-txt{padding:12px 12px 0 0;}.hm-t-item{position:relative;display:list-item;text-align:left;float:left;list-style:none!important;}.hm-t-item-img{margin-top:12px;}.hm-t-img,.hm-t-img-title{display:block;margin:auto;}.hm-t-img{border:1px solid #cedbeb;}.hm-t-img img{border:none;}.hm-t-img-title{white-space:normal;margin-top:6px;}.hm-t-txt-wrapper{padding-left:20px;background:url(http://ecma.bdimg.com/holmes/t-list-styles.png) no-repeat;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0cHgiIGhlaWdodD0iNTBweCIgdmlld0JveD0iMCAwIDQwIDUwMCI+PGcgZmlsbD0iIzAwNDA3YiI+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByPSI0NSIvPjxjaXJjbGUgY3g9IjIwIiBjeT0iNDgwIiByPSIyMCIvPjwvZz48L3N2Zz4=), none;}.hm-t-txt{white-space:normal;}.hm-t-footer{position:relative;height:22px;margin-top:5px;}.hm-t-footer a{position:absolute;top:0;right:5px;font-family:arial,sans-serif;font-size:12px;color:#aeaeae;text-decoration:none;line-height:22px;}"),
            this.create(t);
            var e = _.fe(c.settings.css);
            t.t(e),
            w.s("styleCreated", t)
        },
        create: function() {},
        P: function(t) {
            if (c.demo) {
                var e = h.j("hm_t_" + c.planId);
                return e && e.appendChild(t.wrap),
                !!e
            }
            i.body.appendChild(t.wrap),
            t.wrap.id = "hm_t_" + c.planId
        },
        T: function(t) {
            var e = t.info,
            i = t.o,
            n = h.l("hm-t-main", i)[0];
            e.width = n.offsetWidth,
            i.style.width = e.width + "px",
            e.height = n.offsetHeight - 2,
            i.offsetHeight > e.height && (e.height = i.offsetHeight - 2),
            i.style.height = e.height + "px",
            t.wrap.style.width = e.width + 2 + "px",
            t.wrap.style.height = e.height + 2 + "px";
            var a = c.settings.css[".hm-t-container"].width;
            "100%" === a && (t.wrap.style.width = a, i.style.width = "auto")
        },
        k: function(t) {
            var e = t.g.createElement("div");
            e.className = "hm-t-main",
            t.o.appendChild(e)
        },
        M: function() {},
        L: function(t) {
            var e = h.l("hm-t-main", t.o)[0],
            i = t.g.createElement("div");
            i.className = "hm-t-footer",
            e.appendChild(i),
            i.innerHTML = '<a href="http://tuijian.baidu.com/" target="_blank">\u767e\u5ea6\u63a8\u8350</a>'
        }
    };
    w.i("shadowCreated",
    function(t) {
        R.init(t)
    }),
    w.i("shadowWrapCreate",
    function(t) {
        return R.P(t)
    });
    var A = {
        tplStr: "",
        m: "",
        init: function(t) {
            t.t(this.m),
            this.p(t),
            this.pe(t),
            this.ce(t),
            this.he(t),
            this.create(t),
            w.s("tplCreated", t)
        },
        create: function(t) {
            var e = t.o,
            i = h.l("hm-t-main", e)[0],
            n = t.g.createElement("div");
            n.className = "hm-t-body",
            n.innerHTML = I.format(this.tplStr, c);
            var a = h.l("hm-t-header", i)[0];
            a ? i.insertBefore(n, a.nextSibling) : i.insertBefore(n, i.firstChild),
            this.v(t),
            this.re(n),
            this.le(n),
            this.ne(n),
            this.ue(n)
        },
        u: function(t) {
            var e = h.l("hm-t-body", t.o)[0];
            e && e.parentNode.removeChild(e),
            t.B("tpl")
        },
        p: function() {},
        v: function() {},
        pe: function(t) {
            var i = c.settings.css[".hm-t-item"]["list-style"],
            n = e(c.settings.css[".hm-t-txt"]["line-height"], 10);
            t.t(".hm-t-txt-wrapper{background-position:12px " + ("square inside" == i ? -2 + n / 2 : "disc inside" == i ? -48 + n / 2 : "99px;padding-left:10") + "px;height:" + n + "px}")
        },
        H: function() {
            return "undefined" != typeof t["_bdhm_t_tpl_" + c.planId] ? c.settings.units[0] : c.settings
        },
        ce: function(t) {
            var e = this.H(),
            i = 100 / e.imgColumn,
            n = 100 / e.textColumn;
            t.t([".hm-t-item-img{", "width:" + i + "%;", "*width:" + (i - .1) + "%", "}", ".hm-t-item-txt{", "width:" + n + "%;", "*width:" + (n - .1) + "%", "}"].join(""))
        },
        he: function(t) {
            var i = e(c.settings.css[".hm-t-container"].width, 10),
            a = this.H(),
            l = a.imgColumn,
            o = c.settings.imgWidth,
            s = c.settings.imgHeight,
            r = n.round((i - l * o) / (2 * l + 2));
            10 > r && (r = 10);
            var m = c.settings.imgTextPos,
            g = "outside" === m ? "width:" + o + "px": "display:none",
            h = e(c.settings.css[".hm-t-img-title"]["line-height"], 10),
            p = h * c.settings.imgTextRow;
            "inside" === m && (g = ["position:relative;", "width:" + (o - 10) + "px;", "padding:0 5px;", "margin-top:" + -p + "px;", "color:#fff;", "background:#000"].join("")),
            t.t([".hm-t-img{", "width:" + o + "px;", "height:" + s + "px", "}", ".hm-t-list-img{", "margin:0 " + r + "px", "}", ".hm-t-img-title{", g, "}"].join(""))
        },
        re: function(t) {
            for (var i = c.settings.imgWidth,
            a = c.settings.imgHeight,
            l = h.l("hm-t-img", t), o = 0, s = l.length; s > o; o++) {
                var r = l[o].getElementsByTagName("img")[0],
                m = e(r.style.width, 10),
                g = e(r.style.height, 10),
                p = m,
                d = g,
                u = n.max(i / m, a / g);
                1 > u && (r.style.width = (p = m * u) + "px", r.style.height = (d = g * u) + "px"),
                r.style.marginLeft = (i - p) / 2 + "px",
                a > d && (r.style.marginTop = (a - d) / 2 + "px")
            }
        },
        le: function(t) {
            var i = h.l("hm-t-img-title", t),
            n = e(c.settings.css[".hm-t-img-title"]["line-height"], 10);
            _.Me(i, n * c.settings.imgTextRow)
        },
        ne: function(e) {
            for (var i = e.getElementsByTagName("img"), n = 0, l = i.length; l > n; n++) {
                var o = i[n];
                o.onerror = function(e) {
                    e = e || t.event;
                    var i = e.target || e.srcElement;
                    i.onerror = null,
                    x.log("http://ers.baidu.com/crs.gif?type=deadthumb&src=" + a(i.src))
                }
            }
        },
        ue: function(t) {
            u.i(t, "click",
            function(e) {
                for (var i = e.target || e.srcElement;
                "a" !== i.tagName.toLowerCase() && i !== t;) i = i.parentNode;
                "a" === i.tagName.toLowerCase() && _.log(1, c.planId, c.logId, i.href, i.title)
            })
        }
    };
    w.i("styleCreated",
    function(t) {
        A.init(t)
    });
    R.name = "slide",
    R.create = function(e) {
        var i = c.settings.showType;
        e.h.w || (e.h.w = !0, _.log(0, c.planId, c.logId, 1 == i ? 1 : 0)),
        e.t("html{_background-image:url(about:blank);_background-attachment:fixed;}.hm-t-container{overflow:visible;position:relative;border:1px solid #ccc;}.hm-t-header{position:absolute;top:-1px;z-index:1;cursor:pointer;}.hm-t-header-txt,.hm-t-header-txt-wrapper{width:15px;height:auto!important;line-height:1!important;white-space:normal;text-align:center;}.hm-t-header-txt{padding:20px 0 5px 0;background:url(http://ecma.bdimg.com/holmes/t-slide-arrows.png) no-repeat;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MHB4IiBoZWlnaHQ9IjlweCIgdmlld0JveD0iMCAwIDUwMCA5MCI+PGcgZmlsbD0iI2ZmZiI+PHBhdGggZD0ibTAgMGw1MCA0NWwtNTAgNDVsMCAtMjhsMjAgLTE3bC0yMCAtMTd6Ii8+PHBhdGggZD0ibTUwMCAwbC01MCA0NWw1MCA0NWwwIC0yOGwtMjAgLTE3bDIwIC0xN3oiLz48L2c+PC9zdmc+), none;}.hm-t-header-txt-wrapper{margin:0 auto;}.hm-t-header-icon{width:44px;height:44px!important;background:url(http://ecma.bdimg.com/holmes/t-popup-icons.png) no-repeat 10px center;*background:url(http://ecma.bdimg.com/holmes/t-popup-icons-png8.png) no-repeat 10px center;}"),
        c.settings.css[".hm-t-header-simple"] = c.settings.css[".hm-t-header"];
        var n = e.wrap.style;
        c.demo ? _.extend(n, {
            position: "relative",
            margin: "0 auto"
        }) : (_.extend(n, {
            position: "fixed",
            bottom: "2px",
            zIndex: "99999"
        }), e.X("html{_background-image:url(about:blank);_background-attachment:fixed}"), /msie 6/i.test(l.userAgent) && (n.position = "absolute", n.oe("top", "eval(document.documentElement.scrollTop+document.documentElement.clientHeight-this.offsetHeight-(parseInt(this.currentStyle.marginTop,10)||0)-(parseInt(this.currentStyle.marginBottom,10)||0)-2)")), n[1 == c.settings.pos ? "right": "left"] = "2px"),
        1 == c.settings.pos && (e.o.style.marginLeft = "34px"),
        this.k(e),
        this.M(e),
        this.L(e);
        var a = _.Ie(),
        o = 2 == i ? a / 2 : 3 == i ? a / 3 : 100,
        s = function() {
            _.te() + _.ie() + o > a ? e.s("unfold", {
                isClick: !1
            }) : e.s("fold", {
                isClick: !1
            })
        };
        a > _.ie() + 100 && u.i(t, "scroll", s)
    },
    R.M = function(i) {
        var n = c.settings.foldStyle.type,
        a = i.o,
        l = h.l("hm-t-main", a)[0],
        o = i.wrap,
        s = i.g.createElement("div");
        s.className = "hm-t-header hm-t-header-" + n,
        a.insertBefore(s, l),
        "txt" === n && (s.innerHTML = ['<div class="hm-t-header-txt-wrapper">', p.S(c.settings.windowName), "</div>"].join("")),
        "icon" === n && (s.style.width = "44px", s.style.height = "44px", o.style.width = "46px", o.style.height = "46px");
        var r = e(c.settings.css[".hm-t-header"].width, 10) || s.offsetWidth,
        m = -36.5 + (r - 25) / 2,
        g = 10 + (r - 25) / 2;
        "txt" === n && (i.t([".hm-t-container .hm-t-header{", (1 == c.settings.pos ? "left": "right") + ":" + (0 - (r + 1)) + "px;", "}"].join("")), s.style.backgroundPosition = (1 == c.settings.pos ? g: m) + "px 7px"),
        "icon" === n && i.t([".hm-t-container .hm-t-header{", (1 == c.settings.pos ? "left": "right") + ":-45px;", "}"].join(""));
        var d = e(c.settings.css[".hm-t-container"].width, 10),
        x = null,
        I = function(t, e, i, n, a) {
            if (e == x) {
                var l = "unfold" == e ? 50 : -50,
                s = t.offsetWidth - n + l;
                if ("unfold" == e && s >= i || "fold" == e && i >= s) o.style.width = i + 34 + 2 + "px",
                t.style.width = i + "px",
                x = null,
                a && a();
                else {
                    o.style.width = s + 34 + 2 + "px",
                    t.style.width = s + "px";
                    var r = arguments;
                    _.ee(function() {
                        I.apply(null, r)
                    })
                }
            }
        },
        f = !1,
        y = !1;
        i.i("unfold",
        function(t) {
            t = t || {},
            i.h.N || (i.h.N = !0, _.log(2, c.planId, c.logId, 1), w.s("visible", i)),
            t.isClick && (f = !0, y = !1, s.R = !0),
            "unfold" === x || y || a.offsetWidth == d + 2 || (s.R = !0, x = "unfold", a.style.borderWidth = "1px", l.style.display = "block", I(a, "unfold", d, 2), "txt" === n && (s.style.backgroundPosition = (0 == c.settings.pos ? m: g) + "px 7px"))
        }),
        i.i("fold",
        function(t) {
            t = t || {},
            t.isClick && (f = !1, y = !0, s.R = !1),
            "fold" === x || f || 0 == a.offsetWidth || (s.R = !1, x = "fold", I(a, "fold", 0, 2,
            function() {
                a.style.borderWidth = 0,
                l.style.display = "none"
            }), "txt" === n && (s.style.backgroundPosition = (0 == c.settings.pos ? g: m) + "px 7px"))
        }),
        u.i(s, "click",
        function() {
            s.R ? i.s("fold", {
                isClick: !0
            }) : i.s("unfold", {
                isClick: !0
            })
        }),
        u.i(t, "scroll",
        function() {
            0 == _.te() && (y = !1)
        })
    },
    R.T = function(t) {
        var e = t.info,
        i = t.o,
        n = h.l("hm-t-main", i)[0];
        i.style.width = (e.width = n.offsetWidth) + "px",
        i.style.height = (e.height = n.offsetHeight) + "px",
        t.wrap.style.width = e.width + 34 + 2 + "px",
        t.wrap.style.height = e.height + 2 + "px"
    },
    w.i("done",
    function(t) {
        R.T(t);
        var e = c.settings.showType;
        1 == e ? t.s("unfold", {
            isClick: !0
        }) : (t.o.style.width = 0, t.s("fold", {
            isClick: !1
        }))
    });
    A.tplStr = 'var e=settings.linkTarget||(settings.linkType?"_blank":"_self"),t=Math.min(imgResult.length,settings.imgColumn*settings.imgRow),l=Math.min(txtResult.length,settings.textColumn*settings.textRow);if(t>0){\n<ul class="hm-t-list hm-t-list-img">\nfor(var g=0;t>g;g++){var a=imgResult[g]\n<li class="hm-t-item hm-t-item-img"><a class="hm-t-img" href="#{a.url}" target="#{e}" title="#{a.title}" data-pos="#{g}"><img src="#{a.img_url}" style="width:#{a.img_width}px;height:#{a.img_height}px" /></a><a class="hm-t-img-title" href="#{a.url}" target="#{e}" title="#{a.title}" data-pos="#{g}">#{a.title}</a></li>\n}\n</ul>\n}if(l>0){\n<ul class="hm-t-list hm-t-list-txt">\nfor(var g=0;l>g;g++){var a=txtResult[g]\n<li class="hm-t-item hm-t-item-txt"><div class="hm-t-txt-wrapper"><a class="hm-t-txt" href="#{a.url}" target="#{e}" title="#{a.title}" data-pos="#{g}">#{a.title}</a></div></li>\n}\n</ul>\n}';
    var C;
    if ("_bdhm_t" in t && t._bdhm_t.c && (c = _.extend(c, t._bdhm_t.c), c.demo && (t._bdhm_t = {
        c: c,
        t: {
            create: function() {
                C && C.u(),
                C = j.init()
            },
            dispose: function() {
                C.u(),
                C = null
            },
            fold: function() {
                C.s("fold")
            },
            unfold: function() {
                C.s("unfold")
            }
        }
    })), l && (l.userAgent || "").indexOf("MSIE 6") > -1) try {
        i.execCommand("BackgroundImageCache", !1, !0)
    } catch(D) {}
    w.i("init",
    function() {
        C && C.u(),
        C = j.init()
    }),
    w.s("init")
} (window, parseInt, document, Math, encodeURIComponent, navigator, void 0);