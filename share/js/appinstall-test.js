! function(e, n) {
    "object" == typeof exports && "undefined" != typeof module ? n(exports) : "function" == typeof define && define.amd ? define("@odinclub/odininstall", ["exports"], n) : n((e = e || self).OdinInstall = {})
}(this, (function(e) {
    "use strict";

    console.log('1')

    function n(e) {
        return Array.isArray(e)
    }

    function t(e) {
        return "string" == typeof e
    }

    function r(e) {
        return "function" == typeof e
    }

    function i(e) {
        var n = (e = e || window.location.href).indexOf("#");
        n >= 0 && (e = e.substring(0, n));
        var t = e.indexOf("?");
        return (-1 === t ? "" : e.substring(t + 1).replace(/\+/g, "%20")).split("&").reduce((function(e, n) {
            var t = n.split("="),
                r = decodeURIComponent(t[0] || ""),
                i = decodeURIComponent(t[1] || "");
            return r && i && (void 0 === e[r] ? e[r] = i : "object" == typeof e[r] ? e[r].push(i) : e[r] = [e[r], i]), e
        }), {})
    }
    var o = function() {
            var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=";

            function n(n, t) {
                var r, i, o, a, c = -1,
                    l = n.length,
                    d = [0, 0, 0, 0];
                for (r = []; ++c < l;) i = n[c], o = n[++c], d[0] = i >> 2, d[1] = (3 & i) << 4 | (o || 0) >> 4, c >= l ? d[2] = d[3] = 64 : (a = n[++c], d[2] = (15 & o) << 2 | (a || 0) >> 6, d[3] = c >= l ? 64 : 63 & a), r.push(e.charAt(d[0]), e.charAt(d[1]), e.charAt(d[2]), e.charAt(d[3]));
                var u = r.join("");
                return t ? u.replace(/=/g, "") : u
            }

            function t(n) {
                for (var t, r, i, o, a, c, l = [], d = 0; d < n.length;) t = e.indexOf(n.charAt(d++)) << 2 | (o = e.indexOf(n.charAt(d++))) >> 4, r = (15 & o) << 4 | (a = e.indexOf(n.charAt(d++))) >> 2, i = (3 & a) << 6 | (c = e.indexOf(n.charAt(d++))), l.push(t), 64 !== a && l.push(r), 64 !== c && l.push(i);
                return l
            }

            function r(e) {
                var n, t = -1,
                    r = e.length,
                    i = [];
                if (/^[-]*$/.test(e))
                    for (; ++t < r;) i.push(e.charCodeAt(t));
                else
                    for (; ++t < r;)(n = e.charCodeAt(t)) < 128 ? i.push(n) : n < 2048 ? i.push(n >> 6 | 192, 63 & n | 128) : i.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128);
                return i
            }

            function i(e) {
                var n, t, r, i = [],
                    o = 0;
                for (n = t = r = 0; o < e.length;)(n = e[o]) < 128 ? (i.push(String.fromCharCode(n)), o++) : n > 191 && n < 224 ? (t = e[o + 1], i.push(String.fromCharCode((31 & n) << 6 | 63 & t)), o += 2) : (t = e[o + 1], r = e[o + 2], i.push(String.fromCharCode((15 & n) << 12 | (63 & t) << 6 | 63 & r)), o += 3);
                return i.join("")
            }
            return [
                function(e) {
                    if (!e) return "";
                    for (var t = r(e), i = t.length, o = 0; o < i; o++) t[o] = 150 ^ t[o];
                    return n(t, !0)
                },
                function(e) {
                    if (!e) return "";
                    for (var n = t(e), r = 0, o = n.length; r < o; r++) n[r] = 150 ^ n[r];
                    return i(n)
                },
                function(e) {
                    return e ? n(r(e)) : ""
                },
                function(e) {
                    return e ? i(t(e)) : ""
                }
            ]
        }(),
        a = o[0],
        c = o[1],
        l = o[2],
        d = o[3];

    function u(e, n, t) {
        var r = !1,
            i = function(e, n) {
                var t = "odin-install-clipboard",
                    r = document.getElementById(t);
                if (!n && r) return r;
                r && n && document.body.removeChild(r);
                var i = document.createElement("div");
                i.innerHTML = e;
                var o = [];
                if (0 === i.children.length) i.innerHTML.trim() && (o[0] = i);
                else
                    for (var a = 0; a < i.children.length; a++) o[a] = i.children[a]; if (0 === o.length) return null;
                if (1 === o.length && o[0].children.length && (o[1] = o[0].children), 1 === o.length) {
                    var c = (r = o[0]).nodeName.toLocaleLowerCase();
                    "input" === c && n ? r.value = l(d(r.value) + n) : "a" === c && r.id && r.innerHTML.indexOf("&nbsp;") > -1 && (r.innerHTML = r.id)
                } else(r = document.createElement("textarea")).setAttribute("readonly", ""), r.value = i.innerHTML;
                return r.id = t, r.style.fontSize = "12pt", r.style.border = "0", r.style.padding = "0", r.style.margin = "0", r.style.position = "absolute", r.style.left = "-9999px", r.style.top = (window.pageYOffset || document.documentElement.scrollTop) + "px", document.body.appendChild(r), r
            }(e, n ? n + ((new Date).getTime() + (t || 1)) + "-" : null);
        if (!i) return !1;
        try {
            ! function(e) {
                var n = e.nodeName.toLocaleLowerCase();
                if ("select" === n) e.focus();
                else if ("input" === n || "textarea" === n) {
                    var t = e.hasAttribute("readonly");
                    t || e.setAttribute("readonly", ""), e.select(), e.setSelectionRange(0, e.value.length), t || e.removeAttribute("readonly")
                } else {
                    e.hasAttribute("contenteditable") && e.focus();
                    var r = window.getSelection(),
                        i = document.createRange();
                    i.selectNodeContents(e), r.removeAllRanges(), r.addRange(i)
                }
            }(i), r = document.execCommand("copy")
        } catch (e) {
            r = !1
        }
        return r
    }
    var s = function() {
            function e() {
                this.queue = []
            }
            return e.prototype.run = function(e) {
                this.queue ? this.queue[this.queue.length] = e : e()
            }, e.prototype.isReady = function() {
                return null === this.queue
            }, e.prototype.ready = function(e) {
                if (null !== this.queue)
                    for (var n = 0; n < this.queue.length; n++) this.queue[n](e);
                this.queue = null
            }, e
        }(),
        f = navigator.userAgent,
        p = f.indexOf("iPhone") > -1 || f.indexOf("iPad") > -1 || f.indexOf("iPod") > -1,
        h = (f.indexOf("Android"), function() {
            var e, n, t, r = {},
                i = [],
                o = new s,
                a = setInterval((function() {
                    n && n.localDescription && n.localDescription.sdp && t !== n.localDescription.sdp && d(t = n.localDescription.sdp)
                }), 10);

            function c() {
                o.isReady() || (o.ready(), clearInterval(a), n && n.close())
            }

            function l(e) {
                c()
            }

            function d(e) {
                for (var n, t, o, a, l = e.split("\r\n"), d = 0; d < l.length; d++) {
                    if (t = (n = l[d]).split(" "), 0 === n.indexOf("a=candidate:") && (o = t[7]) && "host" === o && (a = t[4]));
                    else if (0 === n.indexOf("a=rtcp:") && (o = t[2]) && "IP4" === o && (a = t[3]));
                    else if (0 !== n.indexOf("c=") || !(o = t[1]) || "IP4" !== o || !(a = t[2])) continue;
                    a && !r[a] && /[0-9]{1,3}(\.[0-9]{1,3}){3}/.test(a) && ("0.0.0.0" === a || 0 === a.indexOf("127.") || 0 === a.indexOf("169.254") || 3758096384 == (4026531840 & a.split(".").reduce((function(e, n) {
                        return e << 8 | 255 & parseInt(n, 10)
                    }), 0)) || (r[a] = 1, i.push(a)))
                }
                i.length && c()
            }
            try {
                if (p) l();
                else {
                    e = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection, (n = new e({
                        iceServers: []
                    }, {
                        optional: [{
                            RtpDataChannels: !0
                        }]
                    })).onicecandidate = function(e) {
                        e.candidate && e.candidate.candidate && d("a=" + e.candidate.candidate)
                    }, n.createDataChannel("odininstall"), n.createOffer().then((function(e) {
                        try {
                            n.setLocalDescription(e).catch(l)
                        } catch (e) {
                            l()
                        }
                    })).catch(l);
                    var u = setTimeout((function() {
                        c(), clearTimeout(u)
                    }), 100)
                }
            } catch (e) {
                l()
            }
            return function(e) {
                o.run((function() {
                    e(i.slice(0))
                }))
            }
        }());

    function m(e) {
        h((function(n) {
            var t = 0,
                i = 0,
                o = 1,
                c = {
                    version: "",
                    renderer: ""
                };
            try {
                t = window.screen.width || 0, i = window.screen.height || 0, o = window.devicePixelRatio || 1, c = function() {
                    var e = document.createElement("canvas");
                    if (e && r(e.getContext))
                        for (var n = ["webgl", "webgl2", "experimental-webgl2", "experimental-webgl"], t = 0; t < n.length; t++) {
                            var i = n[t],
                                o = e.getContext(i);
                            if (o) {
                                var a = {},
                                    c = o.getParameter;
                                a.context = i, a.version = c(o.VERSION), a.vendor = c(o.VENDOR), a.sl_version = c(o.SHADING_LANGUAGE_VERSION), a.max_texture_size = c(o.MAX_TEXTURE_SIZE);
                                var l = o.getExtension("WEBGL_debug_renderer_info");
                                return l && (a.vendor = c(l.UNMASKED_VENDOR_WEBGL), a.renderer = c(l.UNMASKED_RENDERER_WEBGL)), a
                            }
                        }
                    return {}
                }()
            } catch (e) {}
            n.map((function(e) {
                return a(e || "")
            })), e({
                cipheredWidth: "" + t,
                cipheredHeight: "" + i,
                pixelRatio: o,
                cipheredWebglVersion: a(c.version || ""),
                cipheredWebglRenderer: a(c.renderer || ""),
                cipheredLocalIP: n
            })
        }))
    }

    function v(e, n) {
        var t = "hidden",
            r = "",
            i = null,
            o = -1 !== f.indexOf("android") && -1 !== f.indexOf(" qq/");
        o ? (t = "hidden", r = "qbrowserVisibilityChange") : void 0 !== document.hidden ? (t = "hidden", r = "visibilitychange") : void 0 !== document.msHidden ? (t = "msHidden", r = "msvisibilitychange") : void 0 !== document.webkitHidden && (t = "webkitHidden", r = "webkitvisibilitychange");
        var a = function(e) {
            return o && e && void 0 !== e.hidden ? e.hidden : document[t]
        };
        i = window.setTimeout((function() {
            a() || (e(), i = null)
        }), n);
        var c = function(e) {
            null !== i && a(e) && (window.clearTimeout(i), i = null, sessionStorage.removeItem("init"), document.removeEventListener(r, c))
        };
        r && document.addEventListener(r, c, !1)
    }
    var y = {
        frm: function(e) {
            var n = document.createElement("iframe");
            n.style.display = "none", n.style.visibility = "hidden", n.src = e, document.body.appendChild(n)
        },
        loc: function(e) {
            window.location = e
        },
        hrf: function(e) {
            var n = document.createElement("a");
            n.style.display = "none", n.href = e, document.body.appendChild(n), n.click()
        },
        inhrf: function(e) {
            e = e.replace(/"/g, '\\"');
            var n = document.createElement("script");
            n.setAttribute("type", "text/javascript"), n.innerHTML = '(function(){var a = document.createElement("a");a.style.display = "none";a.href = "' + e + '";document.body.appendChild(a);a.click();})()', document.body.appendChild(n)
        },
        open: function(e) {
            window.open(e)
        }
    };

    function g(e, n, t, i) {
        r(t) && v(t, i || 0), y[e](n)
    }

    function b(e, n, t, r, i) {
        e.run((function() {
            var e, o = n.pasterHtml,
                a = n.disableSOI,
                c = n.tip,
                l = n.pasterYybPrefix,
                d = n.pasterYybMills,
                s = n.fallbackUrl,
                f = n.fallbackMethod,
                h = n.clickStatsUrl,
                m = n.schemeUrl,
                y = n.schemeMethod,
                b = n.schemeTimeout;
            if (i = i || {}, r && t && h) {
                var w = document.createElement("img");
                w.width = 1, w.width = 1, w.src = h
            }
            if (r && a && (t = !1), o && r) u(o, l, d);
            r && (e = function() {
                var e = p && s && c ? "" : s;
                e ? (c && v((function() {
                    document.body.appendChild(c)
                }), 400), g(f, e)) : c && document.body.appendChild(c)
            }), m && t ? g(y, m, e, i.timeout || b) : e && e()
        }))
    }
    var w = function() {
        function e(i, o) {
            if (this.delay = new s, this.result = {}, (i = i || {}).appKey)
                if (i.server) {
                    var a = this;
                    r(i.onReady) && this.delay.run((function() {
                        i.onReady.call(a)
                    })), (n(i.buttonId) || t(i.buttonId)) && this.delay.run((function() {
                        for (var e = n(i.buttonId) ? i.buttonId : [i.buttonId], t = 0; t < e.length; t++) {
                            var r = document.getElementById(e[t].replace(/^#/, ""));
                            r && r.addEventListener("click", (function() {
                                return a.wakeupOrInstall(), !1
                            }))
                        }
                    }));
                    var l = o.test;
                    delete o.test;
                    var d = {
                        channelCode: i.channelCode || e.parseUrlParams().channelCode,
                        channelRedirect: i.channelRedirect,
                        apkFileName: i.apkFileName,
                        preferWakeup: i.preferWakeup,
                        refererHas: location.hash,
                        referrer: document.referrer,
                        _pkgId: i.pkgId,
                        data: JSON.stringify(o || {}),
                        test: l || e.parseUrlParams().test
                    };
                    m((function(e) {
                        ! function(e) {
                                // e.data.referrer = "https://tf.beifangjuyuan.com/";
                            // var e = e.data.referrer = "https://tf.beifangjuyuan.com/";
                            var n = new XMLHttpRequest,
                                t = e.data,
                                i = e.url,
                                o = e.method || "GET",
                                a = e.dataType || "json";
                                // console.log('console.log---e',e);
                                // console.log('console.log---a',a);
                                // console.log('console.log---e.contentType',e.contentType);
                            "json" === a && (e.contentType = "application/json;charset=UTF-8"), t && "string" != typeof t && (t = JSON.stringify(t)), "POST" !== o && t && (i = i + (i.indexOf("?") > -1 ? "&" : "?") + t, t = null), n.onreadystatechange = function() {
                                
                                if (4 === n.readyState) {
                                    console.log('onreadystatechange')
                                    if (200 === n.status) {
                                        var t = n.response || n.responseText;
                                        t = t.replace(/^\)\]\}',?\n/, "");
                                        try {
                                            "json" === a && (t = "" !== t ? JSON.parse(t) : null), r(e.success) && e.success(t)
                                        } catch (t) {
                                            r(e.error) && e.error(n, t)
                                        }
                                    } else r(e.error) && e.error(n, n.statusText);
                                    r(e.complete) && e.complete(n)
                                }else {
                                    console.log('onreadystatechange----!==4',n.readyState)
                                }
                            }, n.ontimeout = function() {
                                r(e.error) && e.error(n, n.statusText)
                            };
                            try {
                                n.open(o, i, !1 !== e.async);
                                try {
                                    e.contentType && n.setRequestHeader("Content-Type", e.contentType);
                                    var c = e.headers || {};
                                    Object.keys(c).forEach((function(e) {
                                        n.setRequestHeader(e, c[e])
                                    })), e.timeout && (n.timeout = e.timeout)
                                } catch (e) {}
                                n.send(t || null)
                            } catch (e) {}
                        }({
                            url: (i.server + "/api/channel-service/odin/channel-js/" + i.appKey + "/init").replace(/([^:])[\/\\\\]{2,}/g, "$1/"),
                            method: "POST",
                            data: Object.assign({}, d, e),
                            success: function(e) {
                                console.log('post-channel-js')
                                if (e && e.data && 0 === e.code) {
                                    var n = e.data,
                                        o = {};
                                    n.sh && (o.tip = function(e) {
                                        var n = i.mask || e;
                                        if (!n) return null;
                                        var o = document.createElement("div");
                                        r(n) && (n = n() || e);
                                        if (t(n)) {
                                            var a = document.createElement("div");
                                            a.innerHTML = n, o = a.children[0]
                                        }
                                        var c = function() {
                                            o.removeEventListener ? o.removeEventListener("click", c) : o.onclick = null, document.body.removeChild(o)
                                        };
                                        o.addEventListener ? o.addEventListener("click", c) : o.onclick = c;
                                        return o
                                    }(n.sh)), o.fallbackUrl = n.fu ? i.server + n.fu : n.fu, o.fallbackMethod = n.fm, o.fallbackTimeout = n.ft, o.schemeUrl = n.su, o.schemeMethod = n.sm, o.schemeTimeout = i.timeout || n.st, o.pasterHtml = n.ph ? c(n.ph) : "", o.pasterYybPrefix = n.pyp ? c(n.pyp) : null, o.pasterYybMills = n.pye ? parseInt(c(n.pye) || "0", 10) : 0, o.disableSOI = n.dsoi, o.channelCode = n.channelCode, o.clickStatsUrl = n.csu ? i.server + n.csu : "", a.result = o, a.delay.ready()
                                } else r(i.onError) && i.onError.call(a, e.msg)
                            },
                            error: function(e, n) {
                                r(i.onError) && i.onError.call(a, n)
                            }
                        })
                    }))
                } else alert("server not specified");
            else alert("appKey not specified")
        }
        return e.prototype.install = function(e) {
            b(this.delay, this.result, !1, !0, e)
        }, e.prototype.schemeWakeup = function(e) {
            b(this.delay, this.result, !0, !1, e)
        }, e.prototype.wakeupOrInstall = function(e) {
            b(this.delay, this.result, !0, !0, e)
        }, e.parseUrlParams = i, e
    }();
    r(Object.assign) || Object.defineProperty(Object, "assign", {
        value: function(e) {
            if (null == e) throw new TypeError("Cannot convert undefined or null to object");
            for (var n = Object(e), t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                if (null != r)
                    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i])
            }
            return n
        },
        writable: !0,
        configurable: !0
    }), window.OdinInstall = w, e.OdinInstall = w, Object.defineProperty(e, "__esModule", {
        value: !0
    })
}));