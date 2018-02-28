/**
 * Created by zouyi on 2017/7/2.
 */
!function (e, t) {
    function n(e) {
        return H.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }

    function r(e) {
        if (!yt[e]) {
            var t = F.body, n = H("<" + e + ">").appendTo(t), r = n.css("display");
            n.remove(), "none" !== r && "" !== r || (pt || (pt = F.createElement("iframe"), pt.frameBorder = pt.width = pt.height = 0), t.appendChild(pt), ht && pt.createElement || (ht = (pt.contentWindow || pt.contentDocument).document, ht.write((H.support.boxModel ? "<!doctype html>" : "") + "<html><body>"), ht.close()), n = ht.createElement(e), ht.body.appendChild(n), r = H.css(n, "display"), t.removeChild(pt)), yt[e] = r
        }
        return yt[e]
    }

    function i(e, t) {
        var n = {};
        return H.each(xt.concat.apply([], xt.slice(0, t)), function () {
            n[this] = e
        }), n
    }

    function o() {
        gt = t
    }

    function a() {
        return setTimeout(o, 0), gt = H.now()
    }

    function s() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {
        }
    }

    function l() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {
        }
    }

    function u(e, n) {
        e.dataFilter && (n = e.dataFilter(n, e.dataType));
        var r, i, o, a, s, l, u, c, f = e.dataTypes, d = {}, p = f.length, h = f[0];
        for (r = 1; r < p; r++) {
            if (1 === r)for (i in e.converters)"string" == typeof i && (d[i.toLowerCase()] = e.converters[i]);
            if (a = h, h = f[r], "*" === h)h = a; else if ("*" !== a && a !== h) {
                if (s = a + " " + h, l = d[s] || d["* " + h], !l) {
                    c = t;
                    for (u in d)if (o = u.split(" "), (o[0] === a || "*" === o[0]) && (c = d[o[1] + " " + h])) {
                        u = d[u], u === !0 ? l = c : c === !0 && (l = u);
                        break
                    }
                }
                !l && !c && H.error("No conversion from " + s.replace(" ", " to ")), l !== !0 && (n = l ? l(n) : c(u(n)))
            }
        }
        return n
    }

    function c(e, n, r) {
        var i, o, a, s, l = e.contents, u = e.dataTypes, c = e.responseFields;
        for (o in c)o in r && (n[c[o]] = r[o]);
        for (; "*" === u[0];)u.shift(), i === t && (i = e.mimeType || n.getResponseHeader("content-type"));
        if (i)for (o in l)if (l[o] && l[o].test(i)) {
            u.unshift(o);
            break
        }
        if (u[0] in r)a = u[0]; else {
            for (o in r) {
                if (!u[0] || e.converters[o + " " + u[0]]) {
                    a = o;
                    break
                }
                s || (s = o)
            }
            a = a || s
        }
        if (a)return a !== u[0] && u.unshift(a), r[a]
    }

    function f(e, t, n, r) {
        if (H.isArray(t))H.each(t, function (t, i) {
            n || Xe.test(e) ? r(e, i) : f(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        }); else if (n || "object" !== H.type(t))r(e, t); else for (var i in t)f(e + "[" + i + "]", t[i], n, r)
    }

    function d(e, n) {
        var r, i, o = H.ajaxSettings.flatOptions || {};
        for (r in n)n[r] !== t && ((o[r] ? e : i || (i = {}))[r] = n[r]);
        i && H.extend(!0, e, i)
    }

    function p(e, n, r, i, o, a) {
        o = o || n.dataTypes[0], a = a || {}, a[o] = !0;
        for (var s, l = e[o], u = 0, c = l ? l.length : 0, f = e === ot; u < c && (f || !s); u++)s = l[u](n, r, i), "string" == typeof s && (!f || a[s] ? s = t : (n.dataTypes.unshift(s), s = p(e, n, r, i, s, a)));
        return (f || !s) && !a["*"] && (s = p(e, n, r, i, "*", a)), s
    }

    function h(e) {
        return function (t, n) {
            if ("string" != typeof t && (n = t, t = "*"), H.isFunction(n))for (var r, i, o, a = t.toLowerCase().split(tt), s = 0, l = a.length; s < l; s++)r = a[s], o = /^\+/.test(r), o && (r = r.substr(1) || "*"), i = e[r] = e[r] || [], i[o ? "unshift" : "push"](n)
        }
    }

    function m(e, t, n) {
        var r = "width" === t ? e.offsetWidth : e.offsetHeight, i = "width" === t ? 1 : 0, o = 4;
        if (r > 0) {
            if ("border" !== n)for (; i < o; i += 2)n || (r -= parseFloat(H.css(e, "padding" + We[i])) || 0), "margin" === n ? r += parseFloat(H.css(e, n + We[i])) || 0 : r -= parseFloat(H.css(e, "border" + We[i] + "Width")) || 0;
            return r + "px"
        }
        if (r = Le(e, t), (r < 0 || null == r) && (r = e.style[t]), Oe.test(r))return r;
        if (r = parseFloat(r) || 0, n)for (; i < o; i += 2)r += parseFloat(H.css(e, "padding" + We[i])) || 0, "padding" !== n && (r += parseFloat(H.css(e, "border" + We[i] + "Width")) || 0), "margin" === n && (r += parseFloat(H.css(e, n + We[i])) || 0);
        return r + "px"
    }

    function g(e) {
        var t = F.createElement("div");
        return Ae.appendChild(t), t.innerHTML = e.outerHTML, t.firstChild
    }

    function y(e) {
        var t = (e.nodeName || "").toLowerCase();
        "input" === t ? v(e) : "script" !== t && "undefined" != typeof e.getElementsByTagName && H.grep(e.getElementsByTagName("input"), v)
    }

    function v(e) {
        "checkbox" !== e.type && "radio" !== e.type || (e.defaultChecked = e.checked)
    }

    function b(e) {
        return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName("*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll("*") : []
    }

    function x(e, t) {
        var n;
        1 === t.nodeType && (t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), n = t.nodeName.toLowerCase(), "object" === n ? t.outerHTML = e.outerHTML : "input" !== n || "checkbox" !== e.type && "radio" !== e.type ? "option" === n ? t.selected = e.defaultSelected : "input" === n || "textarea" === n ? t.defaultValue = e.defaultValue : "script" === n && t.text !== e.text && (t.text = e.text) : (e.checked && (t.defaultChecked = t.checked = e.checked), t.value !== e.value && (t.value = e.value)), t.removeAttribute(H.expando), t.removeAttribute("_submit_attached"), t.removeAttribute("_change_attached"))
    }

    function T(e, t) {
        if (1 === t.nodeType && H.hasData(e)) {
            var n, r, i, o = H._data(e), a = H._data(t, o), s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)for (r = 0, i = s[n].length; r < i; r++)H.event.add(t, n, s[n][r])
            }
            a.data && (a.data = H.extend({}, a.data))
        }
    }

    function w(e, t) {
        return H.nodeName(e, "table") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function N(e) {
        var t = he.split("|"), n = e.createDocumentFragment();
        if (n.createElement)for (; t.length;)n.createElement(t.pop());
        return n
    }

    function C(e, t, n) {
        if (t = t || 0, H.isFunction(t))return H.grep(e, function (e, r) {
            var i = !!t.call(e, r, e);
            return i === n
        });
        if (t.nodeType)return H.grep(e, function (e, r) {
            return e === t === n
        });
        if ("string" == typeof t) {
            var r = H.grep(e, function (e) {
                return 1 === e.nodeType
            });
            if (ce.test(t))return H.filter(t, r, !n);
            t = H.filter(t, r)
        }
        return H.grep(e, function (e, r) {
            return H.inArray(e, t) >= 0 === n
        })
    }

    function E(e) {
        return !e || !e.parentNode || 11 === e.parentNode.nodeType
    }

    function k() {
        return !0
    }

    function S() {
        return !1
    }

    function A(e, t, n) {
        var r = t + "defer", i = t + "queue", o = t + "mark", a = H._data(e, r);
        a && ("queue" === n || !H._data(e, i)) && ("mark" === n || !H._data(e, o)) && setTimeout(function () {
            !H._data(e, i) && !H._data(e, o) && (H.removeData(e, r, !0), a.fire())
        }, 0)
    }

    function L(e) {
        for (var t in e)if (("data" !== t || !H.isEmptyObject(e[t])) && "toJSON" !== t)return !1;
        return !0
    }

    function D(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(q, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r || "false" !== r && ("null" === r ? null : H.isNumeric(r) ? +r : P.test(r) ? H.parseJSON(r) : r)
                } catch (e) {
                }
                H.data(e, n, r)
            } else r = t
        }
        return r
    }

    function j(e) {
        var t, n, r = O[e] = {};
        for (e = e.split(/\s+/), t = 0, n = e.length; t < n; t++)r[e[t]] = !0;
        return r
    }

    var F = e.document, M = e.navigator, _ = e.location, H = function () {
        function n() {
            if (!s.isReady) {
                try {
                    F.documentElement.doScroll("left")
                } catch (e) {
                    return void setTimeout(n, 1)
                }
                s.ready()
            }
        }

        var r, i, o, a, s = function (e, t) {
            return new s.fn.init(e, t, r)
        }, l = e.jQuery, u = e.$, c = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, f = /\S/, d = /^\s+/, p = /\s+$/, h = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, m = /^[\],:{}\s]*$/, g = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, y = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, v = /(?:^|:|,)(?:\s*\[)+/g, b = /(webkit)[ \/]([\w.]+)/, x = /(opera)(?:.*version)?[ \/]([\w.]+)/, T = /(msie) ([\w.]+)/, w = /(mozilla)(?:.*? rv:([\w.]+))?/, N = /-([a-z]|[0-9])/gi, C = /^-ms-/, E = function (e, t) {
            return (t + "").toUpperCase()
        }, k = M.userAgent, S = Object.prototype.toString, A = Object.prototype.hasOwnProperty, L = Array.prototype.push, D = Array.prototype.slice, j = String.prototype.trim, _ = Array.prototype.indexOf, H = {};
        return s.fn = s.prototype = {
            constructor: s, init: function (e, n, r) {
                var i, o, a, l;
                if (!e)return this;
                if (e.nodeType)return this.context = this[0] = e, this.length = 1, this;
                if ("body" === e && !n && F.body)return this.context = F, this[0] = F.body, this.selector = e, this.length = 1, this;
                if ("string" == typeof e) {
                    if (i = "<" !== e.charAt(0) || ">" !== e.charAt(e.length - 1) || e.length < 3 ? c.exec(e) : [null, e, null], i && (i[1] || !n)) {
                        if (i[1])return n = n instanceof s ? n[0] : n, l = n ? n.ownerDocument || n : F, a = h.exec(e), a ? s.isPlainObject(n) ? (e = [F.createElement(a[1])], s.fn.attr.call(e, n, !0)) : e = [l.createElement(a[1])] : (a = s.buildFragment([i[1]], [l]), e = (a.cacheable ? s.clone(a.fragment) : a.fragment).childNodes), s.merge(this, e);
                        if (o = F.getElementById(i[2]), o && o.parentNode) {
                            if (o.id !== i[2])return r.find(e);
                            this.length = 1, this[0] = o
                        }
                        return this.context = F, this.selector = e, this
                    }
                    return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e)
                }
                return s.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), s.makeArray(e, this))
            }, selector: "", jquery: "1.7.2", length: 0, size: function () {
                return this.length
            }, toArray: function () {
                return D.call(this, 0)
            }, get: function (e) {
                return null == e ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
            }, pushStack: function (e, t, n) {
                var r = this.constructor();
                return s.isArray(e) ? L.apply(r, e) : s.merge(r, e), r.prevObject = this, r.context = this.context, "find" === t ? r.selector = this.selector + (this.selector ? " " : "") + n : t && (r.selector = this.selector + "." + t + "(" + n + ")"), r
            }, each: function (e, t) {
                return s.each(this, e, t)
            }, ready: function (e) {
                return s.bindReady(), o.add(e), this
            }, eq: function (e) {
                return e = +e, e === -1 ? this.slice(e) : this.slice(e, e + 1)
            }, first: function () {
                return this.eq(0)
            }, last: function () {
                return this.eq(-1)
            }, slice: function () {
                return this.pushStack(D.apply(this, arguments), "slice", D.call(arguments).join(","))
            }, map: function (e) {
                return this.pushStack(s.map(this, function (t, n) {
                    return e.call(t, n, t)
                }))
            }, end: function () {
                return this.prevObject || this.constructor(null)
            }, push: L, sort: [].sort, splice: [].splice
        }, s.fn.init.prototype = s.fn, s.extend = s.fn.extend = function () {
            var e, n, r, i, o, a, l = arguments[0] || {}, u = 1, c = arguments.length, f = !1;
            for ("boolean" == typeof l && (f = l, l = arguments[1] || {}, u = 2), "object" != typeof l && !s.isFunction(l) && (l = {}), c === u && (l = this, --u); u < c; u++)if (null != (e = arguments[u]))for (n in e)r = l[n], i = e[n], l !== i && (f && i && (s.isPlainObject(i) || (o = s.isArray(i))) ? (o ? (o = !1, a = r && s.isArray(r) ? r : []) : a = r && s.isPlainObject(r) ? r : {}, l[n] = s.extend(f, a, i)) : i !== t && (l[n] = i));
            return l
        }, s.extend({
            noConflict: function (t) {
                return e.$ === s && (e.$ = u), t && e.jQuery === s && (e.jQuery = l), s
            }, isReady: !1, readyWait: 1, holdReady: function (e) {
                e ? s.readyWait++ : s.ready(!0)
            }, ready: function (e) {
                if (e === !0 && !--s.readyWait || e !== !0 && !s.isReady) {
                    if (!F.body)return setTimeout(s.ready, 1);
                    if (s.isReady = !0, e !== !0 && --s.readyWait > 0)return;
                    o.fireWith(F, [s]), s.fn.trigger && s(F).trigger("ready").off("ready")
                }
            }, bindReady: function () {
                if (!o) {
                    if (o = s.Callbacks("once memory"), "complete" === F.readyState)return setTimeout(s.ready, 1);
                    if (F.addEventListener)F.addEventListener("DOMContentLoaded", a, !1), e.addEventListener("load", s.ready, !1); else if (F.attachEvent) {
                        F.attachEvent("onreadystatechange", a), e.attachEvent("onload", s.ready);
                        var t = !1;
                        try {
                            t = null == e.frameElement
                        } catch (e) {
                        }
                        F.documentElement.doScroll && t && n()
                    }
                }
            }, isFunction: function (e) {
                return "function" === s.type(e)
            }, isArray: Array.isArray || function (e) {
                return "array" === s.type(e)
            }, isWindow: function (e) {
                return null != e && e == e.window
            }, isNumeric: function (e) {
                return !isNaN(parseFloat(e)) && isFinite(e)
            }, type: function (e) {
                return null == e ? String(e) : H[S.call(e)] || "object"
            }, isPlainObject: function (e) {
                if (!e || "object" !== s.type(e) || e.nodeType || s.isWindow(e))return !1;
                try {
                    if (e.constructor && !A.call(e, "constructor") && !A.call(e.constructor.prototype, "isPrototypeOf"))return !1
                } catch (e) {
                    return !1
                }
                var n;
                for (n in e);
                return n === t || A.call(e, n)
            }, isEmptyObject: function (e) {
                for (var t in e)return !1;
                return !0
            }, error: function (e) {
                throw new Error(e)
            }, parseJSON: function (t) {
                return "string" == typeof t && t ? (t = s.trim(t), e.JSON && e.JSON.parse ? e.JSON.parse(t) : m.test(t.replace(g, "@").replace(y, "]").replace(v, "")) ? new Function("return " + t)() : void s.error("Invalid JSON: " + t)) : null
            }, parseXML: function (n) {
                if ("string" != typeof n || !n)return null;
                var r, i;
                try {
                    e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
                } catch (e) {
                    r = t
                }
                return (!r || !r.documentElement || r.getElementsByTagName("parsererror").length) && s.error("Invalid XML: " + n), r
            }, noop: function () {
            }, globalEval: function (t) {
                t && f.test(t) && (e.execScript || function (t) {
                    e.eval.call(e, t)
                })(t)
            }, camelCase: function (e) {
                return e.replace(C, "ms-").replace(N, E)
            }, nodeName: function (e, t) {
                return e.nodeName && e.nodeName.toUpperCase() === t.toUpperCase()
            }, each: function (e, n, r) {
                var i, o = 0, a = e.length, l = a === t || s.isFunction(e);
                if (r)if (l) {
                    for (i in e)if (n.apply(e[i], r) === !1)break
                } else for (; o < a && n.apply(e[o++], r) !== !1;); else if (l) {
                    for (i in e)if (n.call(e[i], i, e[i]) === !1)break
                } else for (; o < a && n.call(e[o], o, e[o++]) !== !1;);
                return e
            }, trim: j ? function (e) {
                return null == e ? "" : j.call(e)
            } : function (e) {
                return null == e ? "" : (e + "").replace(d, "").replace(p, "")
            }, makeArray: function (e, t) {
                var n = t || [];
                if (null != e) {
                    var r = s.type(e);
                    null == e.length || "string" === r || "function" === r || "regexp" === r || s.isWindow(e) ? L.call(n, e) : s.merge(n, e)
                }
                return n
            }, inArray: function (e, t, n) {
                var r;
                if (t) {
                    if (_)return _.call(t, e, n);
                    for (r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0; n < r; n++)if (n in t && t[n] === e)return n
                }
                return -1
            }, merge: function (e, n) {
                var r = e.length, i = 0;
                if ("number" == typeof n.length)for (var o = n.length; i < o; i++)e[r++] = n[i]; else for (; n[i] !== t;)e[r++] = n[i++];
                return e.length = r, e
            }, grep: function (e, t, n) {
                var r, i = [];
                n = !!n;
                for (var o = 0, a = e.length; o < a; o++)r = !!t(e[o], o), n !== r && i.push(e[o]);
                return i
            }, map: function (e, n, r) {
                var i, o, a = [], l = 0, u = e.length, c = e instanceof s || u !== t && "number" == typeof u && (u > 0 && e[0] && e[u - 1] || 0 === u || s.isArray(e));
                if (c)for (; l < u; l++)i = n(e[l], l, r), null != i && (a[a.length] = i); else for (o in e)i = n(e[o], o, r), null != i && (a[a.length] = i);
                return a.concat.apply([], a)
            }, guid: 1, proxy: function (e, n) {
                if ("string" == typeof n) {
                    var r = e[n];
                    n = e, e = r
                }
                if (!s.isFunction(e))return t;
                var i = D.call(arguments, 2), o = function () {
                    return e.apply(n, i.concat(D.call(arguments)))
                };
                return o.guid = e.guid = e.guid || o.guid || s.guid++, o
            }, access: function (e, n, r, i, o, a, l) {
                var u, c = null == r, f = 0, d = e.length;
                if (r && "object" == typeof r) {
                    for (f in r)s.access(e, n, f, r[f], 1, a, i);
                    o = 1
                } else if (i !== t) {
                    if (u = l === t && s.isFunction(i), c && (u ? (u = n, n = function (e, t, n) {
                            return u.call(s(e), n)
                        }) : (n.call(e, i), n = null)), n)for (; f < d; f++)n(e[f], r, u ? i.call(e[f], f, n(e[f], r)) : i, l);
                    o = 1
                }
                return o ? e : c ? n.call(e) : d ? n(e[0], r) : a
            }, now: function () {
                return (new Date).getTime()
            }, uaMatch: function (e) {
                e = e.toLowerCase();
                var t = b.exec(e) || x.exec(e) || T.exec(e) || e.indexOf("compatible") < 0 && w.exec(e) || [];
                return {browser: t[1] || "", version: t[2] || "0"}
            }, sub: function () {
                function e(t, n) {
                    return new e.fn.init(t, n)
                }

                s.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function (n, r) {
                    return r && r instanceof s && !(r instanceof e) && (r = e(r)), s.fn.init.call(this, n, r, t)
                }, e.fn.init.prototype = e.fn;
                var t = e(F);
                return e
            }, browser: {}
        }), s.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (e, t) {
            H["[object " + t + "]"] = t.toLowerCase()
        }), i = s.uaMatch(k), i.browser && (s.browser[i.browser] = !0, s.browser.version = i.version), s.browser.webkit && (s.browser.safari = !0), f.test("聽") && (d = /^[\s\xA0]+/, p = /[\s\xA0]+$/), r = s(F), F.addEventListener ? a = function () {
            F.removeEventListener("DOMContentLoaded", a, !1), s.ready()
        } : F.attachEvent && (a = function () {
            "complete" === F.readyState && (F.detachEvent("onreadystatechange", a), s.ready())
        }), s
    }(), O = {};
    H.Callbacks = function (e) {
        e = e ? O[e] || j(e) : {};
        var n, r, i, o, a, s, l = [], u = [], c = function (t) {
            var n, r, i, o;
            for (n = 0, r = t.length; n < r; n++)i = t[n], o = H.type(i), "array" === o ? c(i) : "function" === o && (!e.unique || !d.has(i)) && l.push(i)
        }, f = function (t, c) {
            for (c = c || [], n = !e.memory || [t, c], r = !0, i = !0, s = o || 0, o = 0, a = l.length; l && s < a; s++)if (l[s].apply(t, c) === !1 && e.stopOnFalse) {
                n = !0;
                break
            }
            i = !1, l && (e.once ? n === !0 ? d.disable() : l = [] : u && u.length && (n = u.shift(), d.fireWith(n[0], n[1])))
        }, d = {
            add: function () {
                if (l) {
                    var e = l.length;
                    c(arguments), i ? a = l.length : n && n !== !0 && (o = e, f(n[0], n[1]))
                }
                return this
            }, remove: function () {
                if (l)for (var t = arguments, n = 0, r = t.length; n < r; n++)for (var o = 0; o < l.length && (t[n] !== l[o] || (i && o <= a && (a--, o <= s && s--), l.splice(o--, 1), !e.unique)); o++);
                return this
            }, has: function (e) {
                if (l)for (var t = 0, n = l.length; t < n; t++)if (e === l[t])return !0;
                return !1
            }, empty: function () {
                return l = [], this
            }, disable: function () {
                return l = u = n = t, this
            }, disabled: function () {
                return !l
            }, lock: function () {
                return u = t, (!n || n === !0) && d.disable(), this
            }, locked: function () {
                return !u
            }, fireWith: function (t, r) {
                return u && (i ? e.once || u.push([t, r]) : (!e.once || !n) && f(t, r)), this
            }, fire: function () {
                return d.fireWith(this, arguments), this
            }, fired: function () {
                return !!r
            }
        };
        return d
    };
    var B = [].slice;
    H.extend({
        Deferred: function (e) {
            var t, n = H.Callbacks("once memory"), r = H.Callbacks("once memory"), i = H.Callbacks("memory"), o = "pending", a = {
                resolve: n,
                reject: r,
                notify: i
            }, s = {
                done: n.add, fail: r.add, progress: i.add, state: function () {
                    return o
                }, isResolved: n.fired, isRejected: r.fired, then: function (e, t, n) {
                    return l.done(e).fail(t).progress(n), this
                }, always: function () {
                    return l.done.apply(l, arguments).fail.apply(l, arguments), this
                }, pipe: function (e, t, n) {
                    return H.Deferred(function (r) {
                        H.each({done: [e, "resolve"], fail: [t, "reject"], progress: [n, "notify"]}, function (e, t) {
                            var n, i = t[0], o = t[1];
                            H.isFunction(i) ? l[e](function () {
                                n = i.apply(this, arguments), n && H.isFunction(n.promise) ? n.promise().then(r.resolve, r.reject, r.notify) : r[o + "With"](this === l ? r : this, [n])
                            }) : l[e](r[o])
                        })
                    }).promise()
                }, promise: function (e) {
                    if (null == e)e = s; else for (var t in s)e[t] = s[t];
                    return e
                }
            }, l = s.promise({});
            for (t in a)l[t] = a[t].fire, l[t + "With"] = a[t].fireWith;
            return l.done(function () {
                o = "resolved"
            }, r.disable, i.lock).fail(function () {
                o = "rejected"
            }, n.disable, i.lock), e && e.call(l, l), l
        }, when: function (e) {
            function t(e) {
                return function (t) {
                    a[e] = arguments.length > 1 ? B.call(arguments, 0) : t, l.notifyWith(u, a)
                }
            }

            function n(e) {
                return function (t) {
                    r[e] = arguments.length > 1 ? B.call(arguments, 0) : t, --s || l.resolveWith(l, r)
                }
            }

            var r = B.call(arguments, 0), i = 0, o = r.length, a = Array(o), s = o, l = o <= 1 && e && H.isFunction(e.promise) ? e : H.Deferred(), u = l.promise();
            if (o > 1) {
                for (; i < o; i++)r[i] && r[i].promise && H.isFunction(r[i].promise) ? r[i].promise().then(n(i), l.reject, t(i)) : --s;
                s || l.resolveWith(l, r)
            } else l !== e && l.resolveWith(l, o ? [e] : []);
            return u
        }
    }), H.support = function () {
        var t, n, r, i, o, a, s, l, u, c, f, d = F.createElement("div");
        F.documentElement;
        if (d.setAttribute("className", "t"), d.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*"), r = d.getElementsByTagName("a")[0], !n || !n.length || !r)return {};
        i = F.createElement("select"), o = i.appendChild(F.createElement("option")), a = d.getElementsByTagName("input")[0], t = {
            leadingWhitespace: 3 === d.firstChild.nodeType,
            tbody: !d.getElementsByTagName("tbody").length,
            htmlSerialize: !!d.getElementsByTagName("link").length,
            style: /top/.test(r.getAttribute("style")),
            hrefNormalized: "/a" === r.getAttribute("href"),
            opacity: /^0.55/.test(r.style.opacity),
            cssFloat: !!r.style.cssFloat,
            checkOn: "on" === a.value,
            optSelected: o.selected,
            getSetAttribute: "t" !== d.className,
            enctype: !!F.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== F.createElement("nav").cloneNode(!0).outerHTML,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            pixelMargin: !0
        }, H.boxModel = t.boxModel = "CSS1Compat" === F.compatMode, a.checked = !0, t.noCloneChecked = a.cloneNode(!0).checked, i.disabled = !0, t.optDisabled = !o.disabled;
        try {
            delete d.test
        } catch (e) {
            t.deleteExpando = !1
        }
        if (!d.addEventListener && d.attachEvent && d.fireEvent && (d.attachEvent("onclick", function () {
                t.noCloneEvent = !1
            }), d.cloneNode(!0).fireEvent("onclick")), a = F.createElement("input"), a.value = "t", a.setAttribute("type", "radio"), t.radioValue = "t" === a.value, a.setAttribute("checked", "checked"), a.setAttribute("name", "t"), d.appendChild(a), s = F.createDocumentFragment(), s.appendChild(d.lastChild), t.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked, t.appendChecked = a.checked, s.removeChild(a), s.appendChild(d), d.attachEvent)for (c in{
            submit: 1,
            change: 1,
            focusin: 1
        })u = "on" + c, f = u in d, f || (d.setAttribute(u, "return;"), f = "function" == typeof d[u]), t[c + "Bubbles"] = f;
        return s.removeChild(d), s = i = o = d = a = null, H(function () {
            var n, r, i, o, a, s, u, c, p, h, m, g, y = F.getElementsByTagName("body")[0];
            !y || (u = 1, g = "padding:0;margin:0;border:", h = "position:absolute;top:0;left:0;width:1px;height:1px;", m = g + "0;visibility:hidden;", c = "style='" + h + g + "5px solid #000;", p = "<div " + c + "display:block;'><div style='" + g + "0;display:block;overflow:hidden;'></div></div><table " + c + "' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>", n = F.createElement("div"), n.style.cssText = m + "width:0;height:0;position:static;top:0;margin-top:" + u + "px", y.insertBefore(n, y.firstChild), d = F.createElement("div"), n.appendChild(d), d.innerHTML = "<table><tr><td style='" + g + "0;display:none'></td><td>t</td></tr></table>", l = d.getElementsByTagName("td"), f = 0 === l[0].offsetHeight, l[0].style.display = "", l[1].style.display = "none", t.reliableHiddenOffsets = f && 0 === l[0].offsetHeight, e.getComputedStyle && (d.innerHTML = "", s = F.createElement("div"), s.style.width = "0", s.style.marginRight = "0", d.style.width = "2px", d.appendChild(s), t.reliableMarginRight = 0 === (parseInt((e.getComputedStyle(s, null) || {marginRight: 0}).marginRight, 10) || 0)), "undefined" != typeof d.style.zoom && (d.innerHTML = "", d.style.width = d.style.padding = "1px", d.style.border = 0, d.style.overflow = "hidden", d.style.display = "inline", d.style.zoom = 1, t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.style.overflow = "visible", d.innerHTML = "<div style='width:5px;'></div>", t.shrinkWrapBlocks = 3 !== d.offsetWidth), d.style.cssText = h + m, d.innerHTML = p, r = d.firstChild, i = r.firstChild, o = r.nextSibling.firstChild.firstChild, a = {
                doesNotAddBorder: 5 !== i.offsetTop,
                doesAddBorderForTableAndCells: 5 === o.offsetTop
            }, i.style.position = "fixed", i.style.top = "20px", a.fixedPosition = 20 === i.offsetTop || 15 === i.offsetTop, i.style.position = i.style.top = "", r.style.overflow = "hidden", r.style.position = "relative", a.subtractsBorderForOverflowNotVisible = i.offsetTop === -5, a.doesNotIncludeMarginInBodyOffset = y.offsetTop !== u, e.getComputedStyle && (d.style.marginTop = "1%", t.pixelMargin = "1%" !== (e.getComputedStyle(d, null) || {marginTop: 0}).marginTop), "undefined" != typeof n.style.zoom && (n.style.zoom = 1), y.removeChild(n), s = d = n = null, H.extend(t, a))
        }), t
    }();
    var P = /^(?:\{.*\}|\[.*\])$/, q = /([A-Z])/g;
    H.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (H.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0},
        hasData: function (e) {
            return e = e.nodeType ? H.cache[e[H.expando]] : e[H.expando], !!e && !L(e)
        },
        data: function (e, n, r, i) {
            if (H.acceptData(e)) {
                var o, a, s, l = H.expando, u = "string" == typeof n, c = e.nodeType, f = c ? H.cache : e, d = c ? e[l] : e[l] && l, p = "events" === n;
                if ((!d || !f[d] || !p && !i && !f[d].data) && u && r === t)return;
                return d || (c ? e[l] = d = ++H.uuid : d = l), f[d] || (f[d] = {}, c || (f[d].toJSON = H.noop)), "object" != typeof n && "function" != typeof n || (i ? f[d] = H.extend(f[d], n) : f[d].data = H.extend(f[d].data, n)), o = a = f[d], i || (a.data || (a.data = {}), a = a.data), r !== t && (a[H.camelCase(n)] = r), p && !a[n] ? o.events : (u ? (s = a[n], null == s && (s = a[H.camelCase(n)])) : s = a, s)
            }
        },
        removeData: function (e, t, n) {
            if (H.acceptData(e)) {
                var r, i, o, a = H.expando, s = e.nodeType, l = s ? H.cache : e, u = s ? e[a] : a;
                if (!l[u])return;
                if (t && (r = n ? l[u] : l[u].data)) {
                    H.isArray(t) || (t in r ? t = [t] : (t = H.camelCase(t), t = t in r ? [t] : t.split(" ")));
                    for (i = 0, o = t.length; i < o; i++)delete r[t[i]];
                    if (!(n ? L : H.isEmptyObject)(r))return
                }
                if (!n && (delete l[u].data, !L(l[u])))return;
                H.support.deleteExpando || !l.setInterval ? delete l[u] : l[u] = null, s && (H.support.deleteExpando ? delete e[a] : e.removeAttribute ? e.removeAttribute(a) : e[a] = null)
            }
        },
        _data: function (e, t, n) {
            return H.data(e, t, n, !0)
        },
        acceptData: function (e) {
            if (e.nodeName) {
                var t = H.noData[e.nodeName.toLowerCase()];
                if (t)return t !== !0 && e.getAttribute("classid") === t
            }
            return !0
        }
    }), H.fn.extend({
        data: function (e, n) {
            var r, i, o, a, s, l = this[0], u = 0, c = null;
            if (e === t) {
                if (this.length && (c = H.data(l), 1 === l.nodeType && !H._data(l, "parsedAttrs"))) {
                    for (o = l.attributes, s = o.length; u < s; u++)a = o[u].name, 0 === a.indexOf("data-") && (a = H.camelCase(a.substring(5)), D(l, a, c[a]));
                    H._data(l, "parsedAttrs", !0)
                }
                return c
            }
            return "object" == typeof e ? this.each(function () {
                H.data(this, e)
            }) : (r = e.split(".", 2), r[1] = r[1] ? "." + r[1] : "", i = r[1] + "!", H.access(this, function (n) {
                return n === t ? (c = this.triggerHandler("getData" + i, [r[0]]), c === t && l && (c = H.data(l, e), c = D(l, e, c)), c === t && r[1] ? this.data(r[0]) : c) : (r[1] = n, void this.each(function () {
                    var t = H(this);
                    t.triggerHandler("setData" + i, r), H.data(this, e, n), t.triggerHandler("changeData" + i, r)
                }))
            }, null, n, arguments.length > 1, null, !1))
        }, removeData: function (e) {
            return this.each(function () {
                H.removeData(this, e)
            })
        }
    }), H.extend({
        _mark: function (e, t) {
            e && (t = (t || "fx") + "mark", H._data(e, t, (H._data(e, t) || 0) + 1))
        }, _unmark: function (e, t, n) {
            if (e !== !0 && (n = t, t = e, e = !1), t) {
                n = n || "fx";
                var r = n + "mark", i = e ? 0 : (H._data(t, r) || 1) - 1;
                i ? H._data(t, r, i) : (H.removeData(t, r, !0), A(t, n, "mark"))
            }
        }, queue: function (e, t, n) {
            var r;
            if (e)return t = (t || "fx") + "queue", r = H._data(e, t), n && (!r || H.isArray(n) ? r = H._data(e, t, H.makeArray(n)) : r.push(n)), r || []
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = H.queue(e, t), r = n.shift(), i = {};
            "inprogress" === r && (r = n.shift()), r && ("fx" === t && n.unshift("inprogress"), H._data(e, t + ".run", i), r.call(e, function () {
                H.dequeue(e, t)
            }, i)), n.length || (H.removeData(e, t + "queue " + t + ".run", !0), A(e, t, "queue"))
        }
    }), H.fn.extend({
        queue: function (e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), arguments.length < r ? H.queue(this[0], e) : n === t ? this : this.each(function () {
                var t = H.queue(this, e, n);
                "fx" === e && "inprogress" !== t[0] && H.dequeue(this, e)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                H.dequeue(this, e)
            })
        }, delay: function (e, t) {
            return e = H.fx ? H.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                var r = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(r)
                }
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, n) {
            function r() {
                --l || o.resolveWith(a, [a])
            }

            "string" != typeof e && (n = e, e = t), e = e || "fx";
            for (var i, o = H.Deferred(), a = this, s = a.length, l = 1, u = e + "defer", c = e + "queue", f = e + "mark"; s--;)(i = H.data(a[s], u, t, !0) || (H.data(a[s], c, t, !0) || H.data(a[s], f, t, !0)) && H.data(a[s], u, H.Callbacks("once memory"), !0)) && (l++, i.add(r));
            return r(), o.promise(n)
        }
    });
    var W, I, $, R = /[\n\t\r]/g, X = /\s+/, z = /\r/g, V = /^(?:button|input)$/i, U = /^(?:button|input|object|select|textarea)$/i, G = /^a(?:rea)?$/i, Y = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, J = H.support.getSetAttribute;
    H.fn.extend({
        attr: function (e, t) {
            return H.access(this, H.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                H.removeAttr(this, e)
            })
        }, prop: function (e, t) {
            return H.access(this, H.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
            return e = H.propFix[e] || e, this.each(function () {
                try {
                    this[e] = t, delete this[e]
                } catch (e) {
                }
            })
        }, addClass: function (e) {
            var t, n, r, i, o, a, s;
            if (H.isFunction(e))return this.each(function (t) {
                H(this).addClass(e.call(this, t, this.className))
            });
            if (e && "string" == typeof e)for (t = e.split(X), n = 0, r = this.length; n < r; n++)if (i = this[n], 1 === i.nodeType)if (i.className || 1 !== t.length) {
                for (o = " " + i.className + " ", a = 0, s = t.length; a < s; a++)~o.indexOf(" " + t[a] + " ") || (o += t[a] + " ");
                i.className = H.trim(o)
            } else i.className = e;
            return this
        }, removeClass: function (e) {
            var n, r, i, o, a, s, l;
            if (H.isFunction(e))return this.each(function (t) {
                H(this).removeClass(e.call(this, t, this.className))
            });
            if (e && "string" == typeof e || e === t)for (n = (e || "").split(X), r = 0, i = this.length; r < i; r++)if (o = this[r], 1 === o.nodeType && o.className)if (e) {
                for (a = (" " + o.className + " ").replace(R, " "), s = 0, l = n.length; s < l; s++)a = a.replace(" " + n[s] + " ", " ");
                o.className = H.trim(a)
            } else o.className = "";
            return this
        }, toggleClass: function (e, t) {
            var n = typeof e, r = "boolean" == typeof t;
            return H.isFunction(e) ? this.each(function (n) {
                H(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function () {
                if ("string" === n)for (var i, o = 0, a = H(this), s = t, l = e.split(X); i = l[o++];)s = r ? s : !a.hasClass(i), a[s ? "addClass" : "removeClass"](i); else"undefined" !== n && "boolean" !== n || (this.className && H._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : H._data(this, "__className__") || "")
            })
        }, hasClass: function (e) {
            for (var t = " " + e + " ", n = 0, r = this.length; n < r; n++)if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(R, " ").indexOf(t) > -1)return !0;
            return !1
        }, val: function (e) {
            var n, r, i, o = this[0];
            return arguments.length ? (i = H.isFunction(e), this.each(function (r) {
                var o, a = H(this);
                1 === this.nodeType && (o = i ? e.call(this, r, a.val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : H.isArray(o) && (o = H.map(o, function (e) {
                    return null == e ? "" : e + ""
                })), n = H.valHooks[this.type] || H.valHooks[this.nodeName.toLowerCase()], n && "set" in n && n.set(this, o, "value") !== t || (this.value = o))
            })) : o ? (n = H.valHooks[o.type] || H.valHooks[o.nodeName.toLowerCase()], n && "get" in n && (r = n.get(o, "value")) !== t ? r : (r = o.value, "string" == typeof r ? r.replace(z, "") : null == r ? "" : r)) : void 0
        }
    }), H.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            }, select: {
                get: function (e) {
                    var t, n, r, i, o = e.selectedIndex, a = [], s = e.options, l = "select-one" === e.type;
                    if (o < 0)return null;
                    for (n = l ? o : 0, r = l ? o + 1 : s.length; n < r; n++)if (i = s[n], i.selected && (H.support.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !H.nodeName(i.parentNode, "optgroup"))) {
                        if (t = H(i).val(), l)return t;
                        a.push(t)
                    }
                    return l && !a.length && s.length ? H(s[o]).val() : a
                }, set: function (e, t) {
                    var n = H.makeArray(t);
                    return H(e).find("option").each(function () {
                        this.selected = H.inArray(H(this).val(), n) >= 0
                    }), n.length || (e.selectedIndex = -1), n
                }
            }
        },
        attrFn: {val: !0, css: !0, html: !0, text: !0, data: !0, width: !0, height: !0, offset: !0},
        attr: function (e, n, r, i) {
            var o, a, s, l = e.nodeType;
            if (e && 3 !== l && 8 !== l && 2 !== l)return i && n in H.attrFn ? H(e)[n](r) : "undefined" == typeof e.getAttribute ? H.prop(e, n, r) : (s = 1 !== l || !H.isXMLDoc(e), s && (n = n.toLowerCase(), a = H.attrHooks[n] || (Y.test(n) ? I : W)), r !== t ? null === r ? void H.removeAttr(e, n) : a && "set" in a && s && (o = a.set(e, r, n)) !== t ? o : (e.setAttribute(n, "" + r), r) : a && "get" in a && s && null !== (o = a.get(e, n)) ? o : (o = e.getAttribute(n), null === o ? t : o))
        },
        removeAttr: function (e, t) {
            var n, r, i, o, a, s = 0;
            if (t && 1 === e.nodeType)for (r = t.toLowerCase().split(X), o = r.length; s < o; s++)i = r[s], i && (n = H.propFix[i] || i, a = Y.test(i), a || H.attr(e, i, ""), e.removeAttribute(J ? i : n), a && n in e && (e[n] = !1))
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (V.test(e.nodeName) && e.parentNode)H.error("type property can't be changed"); else if (!H.support.radioValue && "radio" === t && H.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }, value: {
                get: function (e, t) {
                    return W && H.nodeName(e, "button") ? W.get(e, t) : t in e ? e.value : null
                }, set: function (e, t, n) {
                    return W && H.nodeName(e, "button") ? W.set(e, t, n) : void(e.value = t)
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            for: "htmlFor",
            class: "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (e, n, r) {
            var i, o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s)return a = 1 !== s || !H.isXMLDoc(e), a && (n = H.propFix[n] || n, o = H.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : U.test(e.nodeName) || G.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }), H.attrHooks.tabindex = H.propHooks.tabIndex, I = {
        get: function (e, n) {
            var r, i = H.prop(e, n);
            return i === !0 || "boolean" != typeof i && (r = e.getAttributeNode(n)) && r.nodeValue !== !1 ? n.toLowerCase() : t
        }, set: function (e, t, n) {
            var r;
            return t === !1 ? H.removeAttr(e, n) : (r = H.propFix[n] || n, r in e && (e[r] = !0), e.setAttribute(n, n.toLowerCase())), n
        }
    }, J || ($ = {name: !0, id: !0, coords: !0}, W = H.valHooks.button = {
        get: function (e, n) {
            var r;
            return r = e.getAttributeNode(n), r && ($[n] ? "" !== r.nodeValue : r.specified) ? r.nodeValue : t
        }, set: function (e, t, n) {
            var r = e.getAttributeNode(n);
            return r || (r = F.createAttribute(n), e.setAttributeNode(r)), r.nodeValue = t + ""
        }
    }, H.attrHooks.tabindex.set = W.set, H.each(["width", "height"], function (e, t) {
        H.attrHooks[t] = H.extend(H.attrHooks[t], {
            set: function (e, n) {
                if ("" === n)return e.setAttribute(t, "auto"), n
            }
        })
    }), H.attrHooks.contenteditable = {
        get: W.get, set: function (e, t, n) {
            "" === t && (t = "false"), W.set(e, t, n)
        }
    }), H.support.hrefNormalized || H.each(["href", "src", "width", "height"], function (e, n) {
        H.attrHooks[n] = H.extend(H.attrHooks[n], {
            get: function (e) {
                var r = e.getAttribute(n, 2);
                return null === r ? t : r
            }
        })
    }), H.support.style || (H.attrHooks.style = {
        get: function (e) {
            return e.style.cssText.toLowerCase() || t
        }, set: function (e, t) {
            return e.style.cssText = "" + t
        }
    }), H.support.optSelected || (H.propHooks.selected = H.extend(H.propHooks.selected, {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    })), H.support.enctype || (H.propFix.enctype = "encoding"), H.support.checkOn || H.each(["radio", "checkbox"], function () {
        H.valHooks[this] = {
            get: function (e) {
                return null === e.getAttribute("value") ? "on" : e.value
            }
        }
    }), H.each(["radio", "checkbox"], function () {
        H.valHooks[this] = H.extend(H.valHooks[this], {
            set: function (e, t) {
                if (H.isArray(t))return e.checked = H.inArray(H(e).val(), t) >= 0
            }
        })
    });
    var Q = /^(?:textarea|input|select)$/i, K = /^([^\.]*)?(?:\.(.+))?$/, Z = /(?:^|\s)hover(\.\S+)?\b/, ee = /^key/, te = /^(?:mouse|contextmenu)|click/, ne = /^(?:focusinfocus|focusoutblur)$/, re = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/, ie = function (e) {
        var t = re.exec(e);
        return t && (t[1] = (t[1] || "").toLowerCase(), t[3] = t[3] && new RegExp("(?:^|\\s)" + t[3] + "(?:\\s|$)")), t
    }, oe = function (e, t) {
        var n = e.attributes || {};
        return (!t[1] || e.nodeName.toLowerCase() === t[1]) && (!t[2] || (n.id || {}).value === t[2]) && (!t[3] || t[3].test((n.class || {}).value))
    }, ae = function (e) {
        return H.event.special.hover ? e : e.replace(Z, "mouseenter$1 mouseleave$1")
    };
    H.event = {
        add: function (e, n, r, i, o) {
            var a, s, l, u, c, f, d, p, h, m, g;
            if (3 !== e.nodeType && 8 !== e.nodeType && n && r && (a = H._data(e))) {
                for (r.handler && (h = r, r = h.handler, o = h.selector), r.guid || (r.guid = H.guid++), l = a.events, l || (a.events = l = {}), s = a.handle, s || (a.handle = s = function (e) {
                    return "undefined" == typeof H || e && H.event.triggered === e.type ? t : H.event.dispatch.apply(s.elem, arguments)
                }, s.elem = e), n = H.trim(ae(n)).split(" "), u = 0; u < n.length; u++)c = K.exec(n[u]) || [], f = c[1], d = (c[2] || "").split(".").sort(), g = H.event.special[f] || {}, f = (o ? g.delegateType : g.bindType) || f, g = H.event.special[f] || {}, p = H.extend({
                    type: f,
                    origType: c[1],
                    data: i,
                    handler: r,
                    guid: r.guid,
                    selector: o,
                    quick: o && ie(o),
                    namespace: d.join(".")
                }, h), m = l[f], m || (m = l[f] = [], m.delegateCount = 0, g.setup && g.setup.call(e, i, d, s) !== !1 || (e.addEventListener ? e.addEventListener(f, s, !1) : e.attachEvent && e.attachEvent("on" + f, s))), g.add && (g.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), o ? m.splice(m.delegateCount++, 0, p) : m.push(p), H.event.global[f] = !0;
                e = null
            }
        },
        global: {},
        remove: function (e, t, n, r, i) {
            var o, a, s, l, u, c, f, d, p, h, m, g, y = H.hasData(e) && H._data(e);
            if (y && (d = y.events)) {
                for (t = H.trim(ae(t || "")).split(" "), o = 0; o < t.length; o++)if (a = K.exec(t[o]) || [], s = l = a[1], u = a[2], s) {
                    for (p = H.event.special[s] || {}, s = (r ? p.delegateType : p.bindType) || s, m = d[s] || [], c = m.length, u = u ? new RegExp("(^|\\.)" + u.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null, f = 0; f < m.length; f++)g = m[f], (i || l === g.origType) && (!n || n.guid === g.guid) && (!u || u.test(g.namespace)) && (!r || r === g.selector || "**" === r && g.selector) && (m.splice(f--, 1), g.selector && m.delegateCount--, p.remove && p.remove.call(e, g));
                    0 === m.length && c !== m.length && ((!p.teardown || p.teardown.call(e, u) === !1) && H.removeEvent(e, s, y.handle), delete d[s])
                } else for (s in d)H.event.remove(e, s + t[o], n, r, !0);
                H.isEmptyObject(d) && (h = y.handle, h && (h.elem = null), H.removeData(e, ["events", "handle"], !0))
            }
        },
        customEvent: {getData: !0, setData: !0, changeData: !0},
        trigger: function (n, r, i, o) {
            if (!i || 3 !== i.nodeType && 8 !== i.nodeType) {
                var a, s, l, u, c, f, d, p, h, m, g = n.type || n, y = [];
                if (ne.test(g + H.event.triggered))return;
                if (g.indexOf("!") >= 0 && (g = g.slice(0, -1), s = !0), g.indexOf(".") >= 0 && (y = g.split("."), g = y.shift(), y.sort()), (!i || H.event.customEvent[g]) && !H.event.global[g])return;
                if (n = "object" == typeof n ? n[H.expando] ? n : new H.Event(g, n) : new H.Event(g), n.type = g, n.isTrigger = !0, n.exclusive = s, n.namespace = y.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, f = g.indexOf(":") < 0 ? "on" + g : "", !i) {
                    a = H.cache;
                    for (l in a)a[l].events && a[l].events[g] && H.event.trigger(n, r, a[l].handle.elem, !0);
                    return
                }
                if (n.result = t, n.target || (n.target = i), r = null != r ? H.makeArray(r) : [], r.unshift(n), d = H.event.special[g] || {}, d.trigger && d.trigger.apply(i, r) === !1)return;
                if (h = [[i, d.bindType || g]], !o && !d.noBubble && !H.isWindow(i)) {
                    for (m = d.delegateType || g, u = ne.test(m + g) ? i : i.parentNode, c = null; u; u = u.parentNode)h.push([u, m]), c = u;
                    c && c === i.ownerDocument && h.push([c.defaultView || c.parentWindow || e, m])
                }
                for (l = 0; l < h.length && !n.isPropagationStopped(); l++)u = h[l][0], n.type = h[l][1], p = (H._data(u, "events") || {})[n.type] && H._data(u, "handle"), p && p.apply(u, r), p = f && u[f], p && H.acceptData(u) && p.apply(u, r) === !1 && n.preventDefault();
                return n.type = g, !o && !n.isDefaultPrevented() && (!d._default || d._default.apply(i.ownerDocument, r) === !1) && ("click" !== g || !H.nodeName(i, "a")) && H.acceptData(i) && f && i[g] && ("focus" !== g && "blur" !== g || 0 !== n.target.offsetWidth) && !H.isWindow(i) && (c = i[f], c && (i[f] = null), H.event.triggered = g, i[g](), H.event.triggered = t, c && (i[f] = c)), n.result
            }
        },
        dispatch: function (n) {
            n = H.event.fix(n || e.event);
            var r, i, o, a, s, l, u, c, f, d, p = (H._data(this, "events") || {})[n.type] || [], h = p.delegateCount, m = [].slice.call(arguments, 0), g = !n.exclusive && !n.namespace, y = H.event.special[n.type] || {}, v = [];
            if (m[0] = n, n.delegateTarget = this, !y.preDispatch || y.preDispatch.call(this, n) !== !1) {
                if (h && (!n.button || "click" !== n.type))for (a = H(this), a.context = this.ownerDocument || this, o = n.target; o != this; o = o.parentNode || this)if (o.disabled !== !0) {
                    for (l = {}, c = [], a[0] = o, r = 0; r < h; r++)f = p[r], d = f.selector, l[d] === t && (l[d] = f.quick ? oe(o, f.quick) : a.is(d)), l[d] && c.push(f);
                    c.length && v.push({elem: o, matches: c})
                }
                for (p.length > h && v.push({
                    elem: this,
                    matches: p.slice(h)
                }), r = 0; r < v.length && !n.isPropagationStopped(); r++)for (u = v[r], n.currentTarget = u.elem, i = 0; i < u.matches.length && !n.isImmediatePropagationStopped(); i++)f = u.matches[i], (g || !n.namespace && !f.namespace || n.namespace_re && n.namespace_re.test(f.namespace)) && (n.data = f.data, n.handleObj = f, s = ((H.event.special[f.origType] || {}).handle || f.handler).apply(u.elem, m), s !== t && (n.result = s, s === !1 && (n.preventDefault(), n.stopPropagation())));
                return y.postDispatch && y.postDispatch.call(this, n), n.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, n) {
                var r, i, o, a = n.button, s = n.fromElement;
                return null == e.pageX && null != n.clientX && (r = e.target.ownerDocument || F, i = r.documentElement, o = r.body, e.pageX = n.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), e.pageY = n.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement : s), !e.which && a !== t && (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
            }
        },
        fix: function (e) {
            if (e[H.expando])return e;
            var n, r, i = e, o = H.event.fixHooks[e.type] || {}, a = o.props ? this.props.concat(o.props) : this.props;
            for (e = H.Event(i), n = a.length; n;)r = a[--n], e[r] = i[r];
            return e.target || (e.target = i.srcElement || F), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey === t && (e.metaKey = e.ctrlKey), o.filter ? o.filter(e, i) : e
        },
        special: {
            ready: {setup: H.bindReady},
            load: {noBubble: !0},
            focus: {delegateType: "focusin"},
            blur: {delegateType: "focusout"},
            beforeunload: {
                setup: function (e, t, n) {
                    H.isWindow(this) && (this.onbeforeunload = n)
                }, teardown: function (e, t) {
                    this.onbeforeunload === t && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function (e, t, n, r) {
            var i = H.extend(new H.Event, n, {type: e, isSimulated: !0, originalEvent: {}});
            r ? H.event.trigger(i, null, t) : H.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, H.event.handle = H.event.dispatch, H.removeEvent = F.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function (e, t, n) {
        e.detachEvent && e.detachEvent("on" + t, n)
    }, H.Event = function (e, t) {
        return this instanceof H.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? k : S) : this.type = e, t && H.extend(this, t), this.timeStamp = e && e.timeStamp || H.now(), this[H.expando] = !0, void 0) : new H.Event(e, t)
    }, H.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = k;
            var e = this.originalEvent;
            !e || (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        }, stopPropagation: function () {
            this.isPropagationStopped = k;
            var e = this.originalEvent;
            !e || (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        }, stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = k, this.stopPropagation()
        }, isDefaultPrevented: S, isPropagationStopped: S, isImmediatePropagationStopped: S
    }, H.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (e, t) {
        H.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                o.selector;
                return i && (i === r || H.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), H.support.submitBubbles || (H.event.special.submit = {
        setup: function () {
            return !H.nodeName(this, "form") && void H.event.add(this, "click._submit keypress._submit", function (e) {
                    var n = e.target, r = H.nodeName(n, "input") || H.nodeName(n, "button") ? n.form : t;
                    r && !r._submit_attached && (H.event.add(r, "submit._submit", function (e) {
                        e._submit_bubble = !0
                    }), r._submit_attached = !0)
                })
        }, postDispatch: function (e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && H.event.simulate("submit", this.parentNode, e, !0))
        }, teardown: function () {
            return !H.nodeName(this, "form") && void H.event.remove(this, "._submit")
        }
    }), H.support.changeBubbles || (H.event.special.change = {
        setup: function () {
            return Q.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (H.event.add(this, "propertychange._change", function (e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), H.event.add(this, "click._change", function (e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1, H.event.simulate("change", this, e, !0))
            })), !1) : void H.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                Q.test(t.nodeName) && !t._change_attached && (H.event.add(t, "change._change", function (e) {
                    this.parentNode && !e.isSimulated && !e.isTrigger && H.event.simulate("change", this.parentNode, e, !0)
                }), t._change_attached = !0)
            })
        }, handle: function (e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type)return e.handleObj.handler.apply(this, arguments)
        }, teardown: function () {
            return H.event.remove(this, "._change"), Q.test(this.nodeName)
        }
    }), H.support.focusinBubbles || H.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var n = 0, r = function (e) {
            H.event.simulate(t, e.target, H.event.fix(e), !0)
        };
        H.event.special[t] = {
            setup: function () {
                0 === n++ && F.addEventListener(e, r, !0)
            }, teardown: function () {
                0 === --n && F.removeEventListener(e, r, !0)
            }
        }
    }), H.fn.extend({
        on: function (e, n, r, i, o) {
            var a, s;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = t);
                for (s in e)this.on(s, n, r, e[s], o);
                return this
            }
            if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1)i = S; else if (!i)return this;
            return 1 === o && (a = i, i = function (e) {
                return H().off(e), a.apply(this, arguments)
            }, i.guid = a.guid || (a.guid = H.guid++)), this.each(function () {
                H.event.add(this, e, i, r, n)
            })
        }, one: function (e, t, n, r) {
            return this.on(e, t, n, r, 1)
        }, off: function (e, n, r) {
            if (e && e.preventDefault && e.handleObj) {
                var i = e.handleObj;
                return H(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this
            }
            if ("object" == typeof e) {
                for (var o in e)this.off(o, n, e[o]);
                return this
            }
            return n !== !1 && "function" != typeof n || (r = n, n = t), r === !1 && (r = S), this.each(function () {
                H.event.remove(this, e, r, n)
            })
        }, bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, live: function (e, t, n) {
            return H(this.context).on(e, this.selector, t, n), this
        }, die: function (e, t) {
            return H(this.context).off(e, this.selector || "**", t), this
        }, delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        }, undelegate: function (e, t, n) {
            return 1 == arguments.length ? this.off(e, "**") : this.off(t, e, n)
        }, trigger: function (e, t) {
            return this.each(function () {
                H.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            if (this[0])return H.event.trigger(e, t, this[0], !0)
        }, toggle: function (e) {
            var t = arguments, n = e.guid || H.guid++, r = 0, i = function (n) {
                var i = (H._data(this, "lastToggle" + e.guid) || 0) % r;
                return H._data(this, "lastToggle" + e.guid, i + 1), n.preventDefault(), t[i].apply(this, arguments) || !1
            };
            for (i.guid = n; r < t.length;)t[r++].guid = n;
            return this.click(i)
        }, hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), H.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        H.fn[t] = function (e, n) {
            return null == n && (n = e, e = null), arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }, H.attrFn && (H.attrFn[t] = !0), ee.test(t) && (H.event.fixHooks[t] = H.event.keyHooks), te.test(t) && (H.event.fixHooks[t] = H.event.mouseHooks)
    }), function () {
        function e(e, t, n, r, o, a) {
            for (var s = 0, l = r.length; s < l; s++) {
                var u = r[s];
                if (u) {
                    var c = !1;
                    for (u = u[e]; u;) {
                        if (u[i] === n) {
                            c = r[u.sizset];
                            break
                        }
                        if (1 === u.nodeType)if (a || (u[i] = n, u.sizset = s), "string" != typeof t) {
                            if (u === t) {
                                c = !0;
                                break
                            }
                        } else if (d.filter(t, [u]).length > 0) {
                            c = u;
                            break
                        }
                        u = u[e]
                    }
                    r[s] = c
                }
            }
        }

        function n(e, t, n, r, o, a) {
            for (var s = 0, l = r.length; s < l; s++) {
                var u = r[s];
                if (u) {
                    var c = !1;
                    for (u = u[e]; u;) {
                        if (u[i] === n) {
                            c = r[u.sizset];
                            break
                        }
                        if (1 === u.nodeType && !a && (u[i] = n, u.sizset = s), u.nodeName.toLowerCase() === t) {
                            c = u;
                            break
                        }
                        u = u[e]
                    }
                    r[s] = c
                }
            }
        }

        var r = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g, i = "sizcache" + (Math.random() + "").replace(".", ""), o = 0, a = Object.prototype.toString, s = !1, l = !0, u = /\\/g, c = /\r\n/g, f = /\W/;
        [0, 0].sort(function () {
            return l = !1, 0
        });
        var d = function (e, t, n, i) {
            n = n || [], t = t || F;
            var o = t;
            if (1 !== t.nodeType && 9 !== t.nodeType)return [];
            if (!e || "string" != typeof e)return n;
            var s, l, u, c, f, p, g, y, b = !0, x = d.isXML(t), w = [], N = e;
            do if (r.exec(""), s = r.exec(N), s && (N = s[3], w.push(s[1]), s[2])) {
                c = s[3];
                break
            } while (s);
            if (w.length > 1 && m.exec(e))if (2 === w.length && h.relative[w[0]])l = T(w[0] + w[1], t, i); else for (l = h.relative[w[0]] ? [t] : d(w.shift(), t); w.length;)e = w.shift(), h.relative[e] && (e += w.shift()), l = T(e, l, i); else if (!i && w.length > 1 && 9 === t.nodeType && !x && h.match.ID.test(w[0]) && !h.match.ID.test(w[w.length - 1]) && (f = d.find(w.shift(), t, x), t = f.expr ? d.filter(f.expr, f.set)[0] : f.set[0]), t)for (f = i ? {
                expr: w.pop(),
                set: v(i)
            } : d.find(w.pop(), 1 !== w.length || "~" !== w[0] && "+" !== w[0] || !t.parentNode ? t : t.parentNode, x), l = f.expr ? d.filter(f.expr, f.set) : f.set, w.length > 0 ? u = v(l) : b = !1; w.length;)p = w.pop(), g = p, h.relative[p] ? g = w.pop() : p = "", null == g && (g = t), h.relative[p](u, g, x); else u = w = [];
            if (u || (u = l), u || d.error(p || e), "[object Array]" === a.call(u))if (b)if (t && 1 === t.nodeType)for (y = 0; null != u[y]; y++)u[y] && (u[y] === !0 || 1 === u[y].nodeType && d.contains(t, u[y])) && n.push(l[y]); else for (y = 0; null != u[y]; y++)u[y] && 1 === u[y].nodeType && n.push(l[y]); else n.push.apply(n, u); else v(u, n);
            return c && (d(c, o, n, i), d.uniqueSort(n)), n
        };
        d.uniqueSort = function (e) {
            if (b && (s = l, e.sort(b), s))for (var t = 1; t < e.length; t++)e[t] === e[t - 1] && e.splice(t--, 1);
            return e
        }, d.matches = function (e, t) {
            return d(e, null, null, t)
        }, d.matchesSelector = function (e, t) {
            return d(t, null, null, [e]).length > 0
        }, d.find = function (e, t, n) {
            var r, i, o, a, s, l;
            if (!e)return [];
            for (i = 0, o = h.order.length; i < o; i++)if (s = h.order[i], (a = h.leftMatch[s].exec(e)) && (l = a[1], a.splice(1, 1), "\\" !== l.substr(l.length - 1) && (a[1] = (a[1] || "").replace(u, ""), r = h.find[s](a, t, n), null != r))) {
                e = e.replace(h.match[s], "");
                break
            }
            return r || (r = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName("*") : []), {
                set: r,
                expr: e
            }
        }, d.filter = function (e, n, r, i) {
            for (var o, a, s, l, u, c, f, p, m, g = e, y = [], v = n, b = n && n[0] && d.isXML(n[0]); e && n.length;) {
                for (s in h.filter)if (null != (o = h.leftMatch[s].exec(e)) && o[2]) {
                    if (c = h.filter[s], f = o[1], a = !1, o.splice(1, 1), "\\" === f.substr(f.length - 1))continue;
                    if (v === y && (y = []), h.preFilter[s])if (o = h.preFilter[s](o, v, r, y, i, b)) {
                        if (o === !0)continue
                    } else a = l = !0;
                    if (o)for (p = 0; null != (u = v[p]); p++)u && (l = c(u, o, p, v), m = i ^ l, r && null != l ? m ? a = !0 : v[p] = !1 : m && (y.push(u), a = !0));
                    if (l !== t) {
                        if (r || (v = y), e = e.replace(h.match[s], ""), !a)return [];
                        break
                    }
                }
                if (e === g) {
                    if (null != a)break;
                    d.error(e)
                }
                g = e
            }
            return v
        }, d.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        };
        var p = d.getText = function (e) {
            var t, n, r = e.nodeType, i = "";
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent)return e.textContent;
                    if ("string" == typeof e.innerText)return e.innerText.replace(c, "");
                    for (e = e.firstChild; e; e = e.nextSibling)i += p(e)
                } else if (3 === r || 4 === r)return e.nodeValue
            } else for (t = 0; n = e[t]; t++)8 !== n.nodeType && (i += p(n));
            return i
        }, h = d.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },
            leftMatch: {},
            attrMap: {class: "className", for: "htmlFor"},
            attrHandle: {
                href: function (e) {
                    return e.getAttribute("href")
                }, type: function (e) {
                    return e.getAttribute("type")
                }
            },
            relative: {
                "+": function (e, t) {
                    var n = "string" == typeof t, r = n && !f.test(t), i = n && !r;
                    r && (t = t.toLowerCase());
                    for (var o, a = 0, s = e.length; a < s; a++)if (o = e[a]) {
                        for (; (o = o.previousSibling) && 1 !== o.nodeType;);
                        e[a] = i || o && o.nodeName.toLowerCase() === t ? o || !1 : o === t
                    }
                    i && d.filter(t, e, !0)
                }, ">": function (e, t) {
                    var n, r = "string" == typeof t, i = 0, o = e.length;
                    if (r && !f.test(t)) {
                        for (t = t.toLowerCase(); i < o; i++)if (n = e[i]) {
                            var a = n.parentNode;
                            e[i] = a.nodeName.toLowerCase() === t && a
                        }
                    } else {
                        for (; i < o; i++)n = e[i], n && (e[i] = r ? n.parentNode : n.parentNode === t);
                        r && d.filter(t, e, !0)
                    }
                }, "": function (t, r, i) {
                    var a, s = o++, l = e;
                    "string" == typeof r && !f.test(r) && (r = r.toLowerCase(), a = r, l = n), l("parentNode", r, s, t, a, i)
                }, "~": function (t, r, i) {
                    var a, s = o++, l = e;
                    "string" == typeof r && !f.test(r) && (r = r.toLowerCase(), a = r, l = n), l("previousSibling", r, s, t, a, i)
                }
            },
            find: {
                ID: function (e, t, n) {
                    if ("undefined" != typeof t.getElementById && !n) {
                        var r = t.getElementById(e[1]);
                        return r && r.parentNode ? [r] : []
                    }
                }, NAME: function (e, t) {
                    if ("undefined" != typeof t.getElementsByName) {
                        for (var n = [], r = t.getElementsByName(e[1]), i = 0, o = r.length; i < o; i++)r[i].getAttribute("name") === e[1] && n.push(r[i]);
                        return 0 === n.length ? null : n
                    }
                }, TAG: function (e, t) {
                    if ("undefined" != typeof t.getElementsByTagName)return t.getElementsByTagName(e[1])
                }
            },
            preFilter: {
                CLASS: function (e, t, n, r, i, o) {
                    if (e = " " + e[1].replace(u, "") + " ", o)return e;
                    for (var a, s = 0; null != (a = t[s]); s++)a && (i ^ (a.className && (" " + a.className + " ").replace(/[\t\n\r]/g, " ").indexOf(e) >= 0) ? n || r.push(a) : n && (t[s] = !1));
                    return !1
                }, ID: function (e) {
                    return e[1].replace(u, "")
                }, TAG: function (e, t) {
                    return e[1].replace(u, "").toLowerCase()
                }, CHILD: function (e) {
                    if ("nth" === e[1]) {
                        e[2] || d.error(e[0]), e[2] = e[2].replace(/^\+|\s*/g, "");
                        var t = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec("even" === e[2] && "2n" || "odd" === e[2] && "2n+1" || !/\D/.test(e[2]) && "0n+" + e[2] || e[2]);
                        e[2] = t[1] + (t[2] || 1) - 0, e[3] = t[3] - 0
                    } else e[2] && d.error(e[0]);
                    return e[0] = o++, e
                }, ATTR: function (e, t, n, r, i, o) {
                    var a = e[1] = e[1].replace(u, "");
                    return !o && h.attrMap[a] && (e[1] = h.attrMap[a]), e[4] = (e[4] || e[5] || "").replace(u, ""), "~=" === e[2] && (e[4] = " " + e[4] + " "), e
                }, PSEUDO: function (e, t, n, i, o) {
                    if ("not" === e[1]) {
                        if (!((r.exec(e[3]) || "").length > 1 || /^\w/.test(e[3]))) {
                            var a = d.filter(e[3], t, n, !0 ^ o);
                            return n || i.push.apply(i, a), !1
                        }
                        e[3] = d(e[3], null, null, t)
                    } else if (h.match.POS.test(e[0]) || h.match.CHILD.test(e[0]))return !0;
                    return e
                }, POS: function (e) {
                    return e.unshift(!0), e
                }
            },
            filters: {
                enabled: function (e) {
                    return e.disabled === !1 && "hidden" !== e.type
                }, disabled: function (e) {
                    return e.disabled === !0
                }, checked: function (e) {
                    return e.checked === !0
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                }, parent: function (e) {
                    return !!e.firstChild
                }, empty: function (e) {
                    return !e.firstChild
                }, has: function (e, t, n) {
                    return !!d(n[3], e).length
                }, header: function (e) {
                    return /h\d/i.test(e.nodeName)
                }, text: function (e) {
                    var t = e.getAttribute("type"), n = e.type;
                    return "input" === e.nodeName.toLowerCase() && "text" === n && (t === n || null === t)
                }, radio: function (e) {
                    return "input" === e.nodeName.toLowerCase() && "radio" === e.type
                }, checkbox: function (e) {
                    return "input" === e.nodeName.toLowerCase() && "checkbox" === e.type
                }, file: function (e) {
                    return "input" === e.nodeName.toLowerCase() && "file" === e.type
                }, password: function (e) {
                    return "input" === e.nodeName.toLowerCase() && "password" === e.type
                }, submit: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t || "button" === t) && "submit" === e.type
                }, image: function (e) {
                    return "input" === e.nodeName.toLowerCase() && "image" === e.type
                }, reset: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t || "button" === t) && "reset" === e.type
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, input: function (e) {
                    return /input|select|textarea|button/i.test(e.nodeName)
                }, focus: function (e) {
                    return e === e.ownerDocument.activeElement
                }
            },
            setFilters: {
                first: function (e, t) {
                    return 0 === t
                }, last: function (e, t, n, r) {
                    return t === r.length - 1
                }, even: function (e, t) {
                    return t % 2 === 0
                }, odd: function (e, t) {
                    return t % 2 === 1
                }, lt: function (e, t, n) {
                    return t < n[3] - 0
                }, gt: function (e, t, n) {
                    return t > n[3] - 0
                }, nth: function (e, t, n) {
                    return n[3] - 0 === t
                }, eq: function (e, t, n) {
                    return n[3] - 0 === t
                }
            },
            filter: {
                PSEUDO: function (e, t, n, r) {
                    var i = t[1], o = h.filters[i];
                    if (o)return o(e, n, t, r);
                    if ("contains" === i)return (e.textContent || e.innerText || p([e]) || "").indexOf(t[3]) >= 0;
                    if ("not" === i) {
                        for (var a = t[3], s = 0, l = a.length; s < l; s++)if (a[s] === e)return !1;
                        return !0
                    }
                    d.error(i)
                }, CHILD: function (e, t) {
                    var n, r, o, a, s, l, u = t[1], c = e;
                    switch (u) {
                        case"only":
                        case"first":
                            for (; c = c.previousSibling;)if (1 === c.nodeType)return !1;
                            if ("first" === u)return !0;
                            c = e;
                        case"last":
                            for (; c = c.nextSibling;)if (1 === c.nodeType)return !1;
                            return !0;
                        case"nth":
                            if (n = t[2], r = t[3], 1 === n && 0 === r)return !0;
                            if (o = t[0], a = e.parentNode, a && (a[i] !== o || !e.nodeIndex)) {
                                for (s = 0, c = a.firstChild; c; c = c.nextSibling)1 === c.nodeType && (c.nodeIndex = ++s);
                                a[i] = o
                            }
                            return l = e.nodeIndex - r, 0 === n ? 0 === l : l % n === 0 && l / n >= 0
                    }
                }, ID: function (e, t) {
                    return 1 === e.nodeType && e.getAttribute("id") === t
                }, TAG: function (e, t) {
                    return "*" === t && 1 === e.nodeType || !!e.nodeName && e.nodeName.toLowerCase() === t
                }, CLASS: function (e, t) {
                    return (" " + (e.className || e.getAttribute("class")) + " ").indexOf(t) > -1
                }, ATTR: function (e, t) {
                    var n = t[1], r = d.attr ? d.attr(e, n) : h.attrHandle[n] ? h.attrHandle[n](e) : null != e[n] ? e[n] : e.getAttribute(n), i = r + "", o = t[2], a = t[4];
                    return null == r ? "!=" === o : !o && d.attr ? null != r : "=" === o ? i === a : "*=" === o ? i.indexOf(a) >= 0 : "~=" === o ? (" " + i + " ").indexOf(a) >= 0 : a ? "!=" === o ? i !== a : "^=" === o ? 0 === i.indexOf(a) : "$=" === o ? i.substr(i.length - a.length) === a : "|=" === o && (i === a || i.substr(0, a.length + 1) === a + "-") : i && r !== !1
                }, POS: function (e, t, n, r) {
                    var i = t[2], o = h.setFilters[i];
                    if (o)return o(e, n, t, r)
                }
            }
        }, m = h.match.POS, g = function (e, t) {
            return "\\" + (t - 0 + 1)
        };
        for (var y in h.match)h.match[y] = new RegExp(h.match[y].source + /(?![^\[]*\])(?![^\(]*\))/.source), h.leftMatch[y] = new RegExp(/(^(?:.|\r|\n)*?)/.source + h.match[y].source.replace(/\\(\d+)/g, g));
        h.match.globalPOS = m;
        var v = function (e, t) {
            return e = Array.prototype.slice.call(e, 0), t ? (t.push.apply(t, e), t) : e
        };
        try {
            Array.prototype.slice.call(F.documentElement.childNodes, 0)[0].nodeType
        } catch (e) {
            v = function (e, t) {
                var n = 0, r = t || [];
                if ("[object Array]" === a.call(e))Array.prototype.push.apply(r, e); else if ("number" == typeof e.length)for (var i = e.length; n < i; n++)r.push(e[n]); else for (; e[n]; n++)r.push(e[n]);
                return r
            }
        }
        var b, x;
        F.documentElement.compareDocumentPosition ? b = function (e, t) {
            return e === t ? (s = !0, 0) : e.compareDocumentPosition && t.compareDocumentPosition ? 4 & e.compareDocumentPosition(t) ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
        } : (b = function (e, t) {
            if (e === t)return s = !0, 0;
            if (e.sourceIndex && t.sourceIndex)return e.sourceIndex - t.sourceIndex;
            var n, r, i = [], o = [], a = e.parentNode, l = t.parentNode, u = a;
            if (a === l)return x(e, t);
            if (!a)return -1;
            if (!l)return 1;
            for (; u;)i.unshift(u), u = u.parentNode;
            for (u = l; u;)o.unshift(u), u = u.parentNode;
            n = i.length, r = o.length;
            for (var c = 0; c < n && c < r; c++)if (i[c] !== o[c])return x(i[c], o[c]);
            return c === n ? x(e, o[c], -1) : x(i[c], t, 1)
        }, x = function (e, t, n) {
            if (e === t)return n;
            for (var r = e.nextSibling; r;) {
                if (r === t)return -1;
                r = r.nextSibling
            }
            return 1
        }), function () {
            var e = F.createElement("div"), n = "script" + (new Date).getTime(), r = F.documentElement;
            e.innerHTML = "<a name='" + n + "'/>", r.insertBefore(e, r.firstChild), F.getElementById(n) && (h.find.ID = function (e, n, r) {
                if ("undefined" != typeof n.getElementById && !r) {
                    var i = n.getElementById(e[1]);
                    return i ? i.id === e[1] || "undefined" != typeof i.getAttributeNode && i.getAttributeNode("id").nodeValue === e[1] ? [i] : t : []
                }
            }, h.filter.ID = function (e, t) {
                var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                return 1 === e.nodeType && n && n.nodeValue === t
            }), r.removeChild(e), r = e = null
        }(), function () {
            var e = F.createElement("div");
            e.appendChild(F.createComment("")), e.getElementsByTagName("*").length > 0 && (h.find.TAG = function (e, t) {
                var n = t.getElementsByTagName(e[1]);
                if ("*" === e[1]) {
                    for (var r = [], i = 0; n[i]; i++)1 === n[i].nodeType && r.push(n[i]);
                    n = r
                }
                return n
            }), e.innerHTML = "<a href='#'></a>", e.firstChild && "undefined" != typeof e.firstChild.getAttribute && "#" !== e.firstChild.getAttribute("href") && (h.attrHandle.href = function (e) {
                return e.getAttribute("href", 2)
            }), e = null
        }(), F.querySelectorAll && function () {
            var e = d, t = F.createElement("div"), n = "__sizzle__";
            if (t.innerHTML = "<p class='TEST'></p>", !t.querySelectorAll || 0 !== t.querySelectorAll(".TEST").length) {
                d = function (t, r, i, o) {
                    if (r = r || F, !o && !d.isXML(r)) {
                        var a = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(t);
                        if (a && (1 === r.nodeType || 9 === r.nodeType)) {
                            if (a[1])return v(r.getElementsByTagName(t), i);
                            if (a[2] && h.find.CLASS && r.getElementsByClassName)return v(r.getElementsByClassName(a[2]), i)
                        }
                        if (9 === r.nodeType) {
                            if ("body" === t && r.body)return v([r.body], i);
                            if (a && a[3]) {
                                var s = r.getElementById(a[3]);
                                if (!s || !s.parentNode)return v([], i);
                                if (s.id === a[3])return v([s], i)
                            }
                            try {
                                return v(r.querySelectorAll(t), i)
                            } catch (e) {
                            }
                        } else if (1 === r.nodeType && "object" !== r.nodeName.toLowerCase()) {
                            var l = r, u = r.getAttribute("id"), c = u || n, f = r.parentNode, p = /^\s*[+~]/.test(t);
                            u ? c = c.replace(/'/g, "\\$&") : r.setAttribute("id", c), p && f && (r = r.parentNode);
                            try {
                                if (!p || f)return v(r.querySelectorAll("[id='" + c + "'] " + t), i)
                            } catch (e) {
                            } finally {
                                u || l.removeAttribute("id")
                            }
                        }
                    }
                    return e(t, r, i, o)
                };
                for (var r in e)d[r] = e[r];
                t = null
            }
        }(), function () {
            var e = F.documentElement, t = e.matchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.msMatchesSelector;
            if (t) {
                var n = !t.call(F.createElement("div"), "div"), r = !1;
                try {
                    t.call(F.documentElement, "[test!='']:sizzle")
                } catch (e) {
                    r = !0
                }
                d.matchesSelector = function (e, i) {
                    if (i = i.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']"), !d.isXML(e))try {
                        if (r || !h.match.PSEUDO.test(i) && !/!=/.test(i)) {
                            var o = t.call(e, i);
                            if (o || !n || e.document && 11 !== e.document.nodeType)return o
                        }
                    } catch (e) {
                    }
                    return d(i, null, null, [e]).length > 0
                }
            }
        }(), function () {
            var e = F.createElement("div");
            if (e.innerHTML = "<div class='test e'></div><div class='test'></div>", e.getElementsByClassName && 0 !== e.getElementsByClassName("e").length) {
                if (e.lastChild.className = "e", 1 === e.getElementsByClassName("e").length)return;
                h.order.splice(1, 0, "CLASS"), h.find.CLASS = function (e, t, n) {
                    if ("undefined" != typeof t.getElementsByClassName && !n)return t.getElementsByClassName(e[1])
                }, e = null
            }
        }(), F.documentElement.contains ? d.contains = function (e, t) {
            return e !== t && (!e.contains || e.contains(t))
        } : F.documentElement.compareDocumentPosition ? d.contains = function (e, t) {
            return !!(16 & e.compareDocumentPosition(t))
        } : d.contains = function () {
            return !1
        }, d.isXML = function (e) {
            var t = (e ? e.ownerDocument || e : 0).documentElement;
            return !!t && "HTML" !== t.nodeName
        };
        var T = function (e, t, n) {
            for (var r, i = [], o = "", a = t.nodeType ? [t] : t; r = h.match.PSEUDO.exec(e);)o += r[0], e = e.replace(h.match.PSEUDO, "");
            e = h.relative[e] ? e + "*" : e;
            for (var s = 0, l = a.length; s < l; s++)d(e, a[s], i, n);
            return d.filter(o, i)
        };
        d.attr = H.attr, d.selectors.attrMap = {}, H.find = d, H.expr = d.selectors, H.expr[":"] = H.expr.filters, H.unique = d.uniqueSort, H.text = d.getText, H.isXMLDoc = d.isXML, H.contains = d.contains
    }();
    var se = /Until$/, le = /^(?:parents|prevUntil|prevAll)/, ue = /,/, ce = /^.[^:#\[\.,]*$/, fe = Array.prototype.slice, de = H.expr.match.globalPOS, pe = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    H.fn.extend({
        find: function (e) {
            var t, n, r = this;
            if ("string" != typeof e)return H(e).filter(function () {
                for (t = 0, n = r.length; t < n; t++)if (H.contains(r[t], this))return !0
            });
            var i, o, a, s = this.pushStack("", "find", e);
            for (t = 0, n = this.length; t < n; t++)if (i = s.length, H.find(e, this[t], s), t > 0)for (o = i; o < s.length; o++)for (a = 0; a < i; a++)if (s[a] === s[o]) {
                s.splice(o--, 1);
                break
            }
            return s
        }, has: function (e) {
            var t = H(e);
            return this.filter(function () {
                for (var e = 0, n = t.length; e < n; e++)if (H.contains(this, t[e]))return !0
            })
        }, not: function (e) {
            return this.pushStack(C(this, e, !1), "not", e)
        }, filter: function (e) {
            return this.pushStack(C(this, e, !0), "filter", e)
        }, is: function (e) {
            return !!e && ("string" == typeof e ? de.test(e) ? H(e, this.context).index(this[0]) >= 0 : H.filter(e, this).length > 0 : this.filter(e).length > 0)
        }, closest: function (e, t) {
            var n, r, i = [], o = this[0];
            if (H.isArray(e)) {
                for (var a = 1; o && o.ownerDocument && o !== t;) {
                    for (n = 0; n < e.length; n++)H(o).is(e[n]) && i.push({selector: e[n], elem: o, level: a});
                    o = o.parentNode, a++
                }
                return i
            }
            var s = de.test(e) || "string" != typeof e ? H(e, t || this.context) : 0;
            for (n = 0, r = this.length; n < r; n++)for (o = this[n]; o;) {
                if (s ? s.index(o) > -1 : H.find.matchesSelector(o, e)) {
                    i.push(o);
                    break
                }
                if (o = o.parentNode, !o || !o.ownerDocument || o === t || 11 === o.nodeType)break
            }
            return i = i.length > 1 ? H.unique(i) : i, this.pushStack(i, "closest", e)
        }, index: function (e) {
            return e ? "string" == typeof e ? H.inArray(this[0], H(e)) : H.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        }, add: function (e, t) {
            var n = "string" == typeof e ? H(e, t) : H.makeArray(e && e.nodeType ? [e] : e), r = H.merge(this.get(), n);
            return this.pushStack(E(n[0]) || E(r[0]) ? r : H.unique(r))
        }, andSelf: function () {
            return this.add(this.prevObject)
        }
    }), H.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return H.dir(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return H.dir(e, "parentNode", n)
        }, next: function (e) {
            return H.nth(e, 2, "nextSibling")
        }, prev: function (e) {
            return H.nth(e, 2, "previousSibling")
        }, nextAll: function (e) {
            return H.dir(e, "nextSibling")
        }, prevAll: function (e) {
            return H.dir(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return H.dir(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return H.dir(e, "previousSibling", n)
        }, siblings: function (e) {
            return H.sibling((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return H.sibling(e.firstChild)
        }, contents: function (e) {
            return H.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : H.makeArray(e.childNodes)
        }
    }, function (e, t) {
        H.fn[e] = function (n, r) {
            var i = H.map(this, t, n);
            return se.test(e) || (r = n), r && "string" == typeof r && (i = H.filter(r, i)), i = this.length > 1 && !pe[e] ? H.unique(i) : i, (this.length > 1 || ue.test(r)) && le.test(e) && (i = i.reverse()), this.pushStack(i, e, fe.call(arguments).join(","))
        }
    }), H.extend({
        filter: function (e, t, n) {
            return n && (e = ":not(" + e + ")"), 1 === t.length ? H.find.matchesSelector(t[0], e) ? [t[0]] : [] : H.find.matches(e, t)
        }, dir: function (e, n, r) {
            for (var i = [], o = e[n]; o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !H(o).is(r));)1 === o.nodeType && i.push(o), o = o[n];
            return i
        }, nth: function (e, t, n, r) {
            t = t || 1;
            for (var i = 0; e && (1 !== e.nodeType || ++i !== t); e = e[n]);
            return e
        }, sibling: function (e, t) {
            for (var n = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });
    var he = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", me = / jQuery\d+="(?:\d+|null)"/g, ge = /^\s+/, ye = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, ve = /<([\w:]+)/, be = /<tbody/i, xe = /<|&#?\w+;/, Te = /<(?:script|style)/i, we = /<(?:script|object|embed|option|style)/i, Ne = new RegExp("<(?:" + he + ")[\\s/>]", "i"), Ce = /checked\s*(?:[^=]|=\s*.checked.)/i, Ee = /\/(java|ecma)script/i, ke = /^\s*<!(?:\[CDATA\[|\-\-)/, Se = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        area: [1, "<map>", "</map>"],
        _default: [0, "", ""]
    }, Ae = N(F);
    Se.optgroup = Se.option, Se.tbody = Se.tfoot = Se.colgroup = Se.caption = Se.thead, Se.th = Se.td, H.support.htmlSerialize || (Se._default = [1, "div<div>", "</div>"]), H.fn.extend({
        text: function (e) {
            return H.access(this, function (e) {
                return e === t ? H.text(this) : this.empty().append((this[0] && this[0].ownerDocument || F).createTextNode(e))
            }, null, e, arguments.length)
        }, wrapAll: function (e) {
            if (H.isFunction(e))return this.each(function (t) {
                H(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = H(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;)e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        }, wrapInner: function (e) {
            return H.isFunction(e) ? this.each(function (t) {
                H(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = H(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            });
        }, wrap: function (e) {
            var t = H.isFunction(e);
            return this.each(function (n) {
                H(this).wrapAll(t ? e.call(this, n) : e)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                H.nodeName(this, "body") || H(this).replaceWith(this.childNodes)
            }).end()
        }, append: function () {
            return this.domManip(arguments, !0, function (e) {
                1 === this.nodeType && this.appendChild(e)
            })
        }, prepend: function () {
            return this.domManip(arguments, !0, function (e) {
                1 === this.nodeType && this.insertBefore(e, this.firstChild)
            })
        }, before: function () {
            if (this[0] && this[0].parentNode)return this.domManip(arguments, !1, function (e) {
                this.parentNode.insertBefore(e, this)
            });
            if (arguments.length) {
                var e = H.clean(arguments);
                return e.push.apply(e, this.toArray()), this.pushStack(e, "before", arguments)
            }
        }, after: function () {
            if (this[0] && this[0].parentNode)return this.domManip(arguments, !1, function (e) {
                this.parentNode.insertBefore(e, this.nextSibling)
            });
            if (arguments.length) {
                var e = this.pushStack(this, "after", arguments);
                return e.push.apply(e, H.clean(arguments)), e
            }
        }, remove: function (e, t) {
            for (var n, r = 0; null != (n = this[r]); r++)e && !H.filter(e, [n]).length || (!t && 1 === n.nodeType && (H.cleanData(n.getElementsByTagName("*")), H.cleanData([n])), n.parentNode && n.parentNode.removeChild(n));
            return this
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++)for (1 === e.nodeType && H.cleanData(e.getElementsByTagName("*")); e.firstChild;)e.removeChild(e.firstChild);
            return this
        }, clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return H.clone(this, e, t)
            })
        }, html: function (e) {
            return H.access(this, function (e) {
                var n = this[0] || {}, r = 0, i = this.length;
                if (e === t)return 1 === n.nodeType ? n.innerHTML.replace(me, "") : null;
                if ("string" == typeof e && !Te.test(e) && (H.support.leadingWhitespace || !ge.test(e)) && !Se[(ve.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(ye, "<$1></$2>");
                    try {
                        for (; r < i; r++)n = this[r] || {}, 1 === n.nodeType && (H.cleanData(n.getElementsByTagName("*")), n.innerHTML = e);
                        n = 0
                    } catch (e) {
                    }
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function (e) {
            return this[0] && this[0].parentNode ? H.isFunction(e) ? this.each(function (t) {
                var n = H(this), r = n.html();
                n.replaceWith(e.call(this, t, r))
            }) : ("string" != typeof e && (e = H(e).detach()), this.each(function () {
                var t = this.nextSibling, n = this.parentNode;
                H(this).remove(), t ? H(t).before(e) : H(n).append(e)
            })) : this.length ? this.pushStack(H(H.isFunction(e) ? e() : e), "replaceWith", e) : this
        }, detach: function (e) {
            return this.remove(e, !0)
        }, domManip: function (e, n, r) {
            var i, o, a, s, l = e[0], u = [];
            if (!H.support.checkClone && 3 === arguments.length && "string" == typeof l && Ce.test(l))return this.each(function () {
                H(this).domManip(e, n, r, !0)
            });
            if (H.isFunction(l))return this.each(function (i) {
                var o = H(this);
                e[0] = l.call(this, i, n ? o.html() : t), o.domManip(e, n, r)
            });
            if (this[0]) {
                if (s = l && l.parentNode, i = H.support.parentNode && s && 11 === s.nodeType && s.childNodes.length === this.length ? {fragment: s} : H.buildFragment(e, this, u), a = i.fragment, o = 1 === a.childNodes.length ? a = a.firstChild : a.firstChild, o) {
                    n = n && H.nodeName(o, "tr");
                    for (var c = 0, f = this.length, d = f - 1; c < f; c++)r.call(n ? w(this[c], o) : this[c], i.cacheable || f > 1 && c < d ? H.clone(a, !0, !0) : a)
                }
                u.length && H.each(u, function (e, t) {
                    t.src ? H.ajax({
                        type: "GET",
                        global: !1,
                        url: t.src,
                        async: !1,
                        dataType: "script"
                    }) : H.globalEval((t.text || t.textContent || t.innerHTML || "").replace(ke, "/*$0*/")), t.parentNode && t.parentNode.removeChild(t)
                })
            }
            return this
        }
    }), H.buildFragment = function (e, t, n) {
        var r, i, o, a, s = e[0];
        return t && t[0] && (a = t[0].ownerDocument || t[0]), a.createDocumentFragment || (a = F), 1 === e.length && "string" == typeof s && s.length < 512 && a === F && "<" === s.charAt(0) && !we.test(s) && (H.support.checkClone || !Ce.test(s)) && (H.support.html5Clone || !Ne.test(s)) && (i = !0, o = H.fragments[s], o && 1 !== o && (r = o)), r || (r = a.createDocumentFragment(), H.clean(e, a, r, n)), i && (H.fragments[s] = o ? r : 1), {
            fragment: r,
            cacheable: i
        }
    }, H.fragments = {}, H.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        H.fn[e] = function (n) {
            var r = [], i = H(n), o = 1 === this.length && this[0].parentNode;
            if (o && 11 === o.nodeType && 1 === o.childNodes.length && 1 === i.length)return i[t](this[0]), this;
            for (var a = 0, s = i.length; a < s; a++) {
                var l = (a > 0 ? this.clone(!0) : this).get();
                H(i[a])[t](l), r = r.concat(l)
            }
            return this.pushStack(r, e, i.selector)
        }
    }), H.extend({
        clone: function (e, t, n) {
            var r, i, o, a = H.support.html5Clone || H.isXMLDoc(e) || !Ne.test("<" + e.nodeName + ">") ? e.cloneNode(!0) : g(e);
            if (!(H.support.noCloneEvent && H.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || H.isXMLDoc(e)))for (x(e, a), r = b(e), i = b(a), o = 0; r[o]; ++o)i[o] && x(r[o], i[o]);
            if (t && (T(e, a), n))for (r = b(e), i = b(a), o = 0; r[o]; ++o)T(r[o], i[o]);
            return r = i = null, a
        }, clean: function (e, t, n, r) {
            var i, o, a, s = [];
            t = t || F, "undefined" == typeof t.createElement && (t = t.ownerDocument || t[0] && t[0].ownerDocument || F);
            for (var l, u = 0; null != (l = e[u]); u++)if ("number" == typeof l && (l += ""), l) {
                if ("string" == typeof l)if (xe.test(l)) {
                    l = l.replace(ye, "<$1></$2>");
                    var c, f = (ve.exec(l) || ["", ""])[1].toLowerCase(), d = Se[f] || Se._default, p = d[0], h = t.createElement("div"), m = Ae.childNodes;
                    for (t === F ? Ae.appendChild(h) : N(t).appendChild(h), h.innerHTML = d[1] + l + d[2]; p--;)h = h.lastChild;
                    if (!H.support.tbody) {
                        var g = be.test(l), v = "table" !== f || g ? "<table>" !== d[1] || g ? [] : h.childNodes : h.firstChild && h.firstChild.childNodes;
                        for (a = v.length - 1; a >= 0; --a)H.nodeName(v[a], "tbody") && !v[a].childNodes.length && v[a].parentNode.removeChild(v[a])
                    }
                    !H.support.leadingWhitespace && ge.test(l) && h.insertBefore(t.createTextNode(ge.exec(l)[0]), h.firstChild), l = h.childNodes, h && (h.parentNode.removeChild(h), m.length > 0 && (c = m[m.length - 1], c && c.parentNode && c.parentNode.removeChild(c)))
                } else l = t.createTextNode(l);
                var b;
                if (!H.support.appendChecked)if (l[0] && "number" == typeof(b = l.length))for (a = 0; a < b; a++)y(l[a]); else y(l);
                l.nodeType ? s.push(l) : s = H.merge(s, l)
            }
            if (n)for (i = function (e) {
                return !e.type || Ee.test(e.type)
            }, u = 0; s[u]; u++)if (o = s[u], r && H.nodeName(o, "script") && (!o.type || Ee.test(o.type)))r.push(o.parentNode ? o.parentNode.removeChild(o) : o); else {
                if (1 === o.nodeType) {
                    var x = H.grep(o.getElementsByTagName("script"), i);
                    s.splice.apply(s, [u + 1, 0].concat(x))
                }
                n.appendChild(o)
            }
            return s
        }, cleanData: function (e) {
            for (var t, n, r, i = H.cache, o = H.event.special, a = H.support.deleteExpando, s = 0; null != (r = e[s]); s++)if ((!r.nodeName || !H.noData[r.nodeName.toLowerCase()]) && (n = r[H.expando])) {
                if (t = i[n], t && t.events) {
                    for (var l in t.events)o[l] ? H.event.remove(r, l) : H.removeEvent(r, l, t.handle);
                    t.handle && (t.handle.elem = null)
                }
                a ? delete r[H.expando] : r.removeAttribute && r.removeAttribute(H.expando), delete i[n]
            }
        }
    });
    var Le, De, je, Fe = /alpha\([^)]*\)/i, Me = /opacity=([^)]*)/, _e = /([A-Z]|^ms)/g, He = /^[\-+]?(?:\d*\.)?\d+$/i, Oe = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i, Be = /^([\-+])=([\-+.\de]+)/, Pe = /^margin/, qe = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, We = ["Top", "Right", "Bottom", "Left"];
    H.fn.css = function (e, n) {
        return H.access(this, function (e, n, r) {
            return r !== t ? H.style(e, n, r) : H.css(e, n)
        }, e, n, arguments.length > 1)
    }, H.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Le(e, "opacity");
                        return "" === n ? "1" : n
                    }
                    return e.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {float: H.support.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s = H.camelCase(n), l = e.style, u = H.cssHooks[s];
                if (n = H.cssProps[s] || s, r === t)return u && "get" in u && (o = u.get(e, !1, i)) !== t ? o : l[n];
                if (a = typeof r, "string" === a && (o = Be.exec(r)) && (r = +(o[1] + 1) * +o[2] + parseFloat(H.css(e, n)), a = "number"), null == r || "number" === a && isNaN(r))return;
                if ("number" === a && !H.cssNumber[s] && (r += "px"), !(u && "set" in u && (r = u.set(e, r)) === t))try {
                    l[n] = r
                } catch (e) {
                }
            }
        },
        css: function (e, n, r) {
            var i, o;
            return n = H.camelCase(n), o = H.cssHooks[n], n = H.cssProps[n] || n, "cssFloat" === n && (n = "float"), o && "get" in o && (i = o.get(e, !0, r)) !== t ? i : Le ? Le(e, n) : void 0
        },
        swap: function (e, t, n) {
            var r, i, o = {};
            for (i in t)o[i] = e.style[i], e.style[i] = t[i];
            r = n.call(e);
            for (i in t)e.style[i] = o[i];
            return r
        }
    }), H.curCSS = H.css, F.defaultView && F.defaultView.getComputedStyle && (De = function (e, t) {
        var n, r, i, o, a = e.style;
        return t = t.replace(_e, "-$1").toLowerCase(), (r = e.ownerDocument.defaultView) && (i = r.getComputedStyle(e, null)) && (n = i.getPropertyValue(t), "" === n && !H.contains(e.ownerDocument.documentElement, e) && (n = H.style(e, t))), !H.support.pixelMargin && i && Pe.test(t) && Oe.test(n) && (o = a.width, a.width = n, n = i.width, a.width = o), n
    }), F.documentElement.currentStyle && (je = function (e, t) {
        var n, r, i, o = e.currentStyle && e.currentStyle[t], a = e.style;
        return null == o && a && (i = a[t]) && (o = i), Oe.test(o) && (n = a.left, r = e.runtimeStyle && e.runtimeStyle.left, r && (e.runtimeStyle.left = e.currentStyle.left), a.left = "fontSize" === t ? "1em" : o, o = a.pixelLeft + "px", a.left = n, r && (e.runtimeStyle.left = r)), "" === o ? "auto" : o
    }), Le = De || je, H.each(["height", "width"], function (e, t) {
        H.cssHooks[t] = {
            get: function (e, n, r) {
                if (n)return 0 !== e.offsetWidth ? m(e, t, r) : H.swap(e, qe, function () {
                    return m(e, t, r)
                })
            }, set: function (e, t) {
                return He.test(t) ? t + "px" : t
            }
        }
    }), H.support.opacity || (H.cssHooks.opacity = {
        get: function (e, t) {
            return Me.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : t ? "1" : ""
        }, set: function (e, t) {
            var n = e.style, r = e.currentStyle, i = H.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", o = r && r.filter || n.filter || "";
            n.zoom = 1, t >= 1 && "" === H.trim(o.replace(Fe, "")) && (n.removeAttribute("filter"), r && !r.filter) || (n.filter = Fe.test(o) ? o.replace(Fe, i) : o + " " + i)
        }
    }), H(function () {
        H.support.reliableMarginRight || (H.cssHooks.marginRight = {
            get: function (e, t) {
                return H.swap(e, {display: "inline-block"}, function () {
                    return t ? Le(e, "margin-right") : e.style.marginRight
                })
            }
        })
    }), H.expr && H.expr.filters && (H.expr.filters.hidden = function (e) {
        var t = e.offsetWidth, n = e.offsetHeight;
        return 0 === t && 0 === n || !H.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || H.css(e, "display"))
    }, H.expr.filters.visible = function (e) {
        return !H.expr.filters.hidden(e)
    }), H.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        H.cssHooks[e + t] = {
            expand: function (n) {
                var r, i = "string" == typeof n ? n.split(" ") : [n], o = {};
                for (r = 0; r < 4; r++)o[e + We[r] + t] = i[r] || i[r - 2] || i[0];
                return o
            }
        }
    });
    var Ie, $e, Re = /%20/g, Xe = /\[\]$/, ze = /\r?\n/g, Ve = /#.*$/, Ue = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Ge = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, Ye = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, Je = /^(?:GET|HEAD)$/, Qe = /^\/\//, Ke = /\?/, Ze = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, et = /^(?:select|textarea)/i, tt = /\s+/, nt = /([?&])_=[^&]*/, rt = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/, it = H.fn.load, ot = {}, at = {}, st = ["*/"] + ["*"];
    try {
        Ie = _.href
    } catch (e) {
        Ie = F.createElement("a"), Ie.href = "", Ie = Ie.href
    }
    $e = rt.exec(Ie.toLowerCase()) || [], H.fn.extend({
        load: function (e, n, r) {
            if ("string" != typeof e && it)return it.apply(this, arguments);
            if (!this.length)return this;
            var i = e.indexOf(" ");
            if (i >= 0) {
                var o = e.slice(i, e.length);
                e = e.slice(0, i)
            }
            var a = "GET";
            n && (H.isFunction(n) ? (r = n, n = t) : "object" == typeof n && (n = H.param(n, H.ajaxSettings.traditional), a = "POST"));
            var s = this;
            return H.ajax({
                url: e, type: a, dataType: "html", data: n, complete: function (e, t, n) {
                    n = e.responseText, e.isResolved() && (e.done(function (e) {
                        n = e
                    }), s.html(o ? H("<div>").append(n.replace(Ze, "")).find(o) : n)), r && s.each(r, [n, t, e])
                }
            }), this
        }, serialize: function () {
            return H.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                return this.elements ? H.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || et.test(this.nodeName) || Ge.test(this.type))
            }).map(function (e, t) {
                var n = H(this).val();
                return null == n ? null : H.isArray(n) ? H.map(n, function (e, n) {
                    return {name: t.name, value: e.replace(ze, "\r\n")}
                }) : {name: t.name, value: n.replace(ze, "\r\n")}
            }).get()
        }
    }), H.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (e, t) {
        H.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), H.each(["get", "post"], function (e, n) {
        H[n] = function (e, r, i, o) {
            return H.isFunction(r) && (o = o || i, i = r, r = t), H.ajax({
                type: n,
                url: e,
                data: r,
                success: i,
                dataType: o
            })
        }
    }), H.extend({
        getScript: function (e, n) {
            return H.get(e, t, n, "script")
        },
        getJSON: function (e, t, n) {
            return H.get(e, t, n, "json")
        },
        ajaxSetup: function (e, t) {
            return t ? d(e, H.ajaxSettings) : (t = e, e = H.ajaxSettings), d(e, t), e
        },
        ajaxSettings: {
            url: Ie,
            isLocal: Ye.test($e[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": st
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText"},
            converters: {"* text": e.String, "text html": !0, "text json": H.parseJSON, "text xml": H.parseXML},
            flatOptions: {context: !0, url: !0}
        },
        ajaxPrefilter: h(ot),
        ajaxTransport: h(at),
        ajax: function (e, n) {
            function r(e, n, r, a) {
                if (2 !== N) {
                    N = 2, l && clearTimeout(l), s = t, o = a || "", C.readyState = e > 0 ? 4 : 0;
                    var f, p, h, T, w, E = n, k = r ? c(m, C, r) : t;
                    if (e >= 200 && e < 300 || 304 === e)if (m.ifModified && ((T = C.getResponseHeader("Last-Modified")) && (H.lastModified[i] = T), (w = C.getResponseHeader("Etag")) && (H.etag[i] = w)), 304 === e)E = "notmodified", f = !0; else try {
                        p = u(m, k), E = "success", f = !0
                    } catch (e) {
                        E = "parsererror", h = e
                    } else h = E, E && !e || (E = "error", e < 0 && (e = 0));
                    C.status = e, C.statusText = "" + (n || E), f ? v.resolveWith(g, [p, E, C]) : v.rejectWith(g, [C, E, h]), C.statusCode(x), x = t, d && y.trigger("ajax" + (f ? "Success" : "Error"), [C, m, f ? p : h]), b.fireWith(g, [C, E]), d && (y.trigger("ajaxComplete", [C, m]), --H.active || H.event.trigger("ajaxStop"))
                }
            }

            "object" == typeof e && (n = e, e = t), n = n || {};
            var i, o, a, s, l, f, d, h, m = H.ajaxSetup({}, n), g = m.context || m, y = g !== m && (g.nodeType || g instanceof H) ? H(g) : H.event, v = H.Deferred(), b = H.Callbacks("once memory"), x = m.statusCode || {}, T = {}, w = {}, N = 0, C = {
                readyState: 0,
                setRequestHeader: function (e, t) {
                    if (!N) {
                        var n = e.toLowerCase();
                        e = w[n] = w[n] || e, T[e] = t
                    }
                    return this
                },
                getAllResponseHeaders: function () {
                    return 2 === N ? o : null
                },
                getResponseHeader: function (e) {
                    var n;
                    if (2 === N) {
                        if (!a)for (a = {}; n = Ue.exec(o);)a[n[1].toLowerCase()] = n[2];
                        n = a[e.toLowerCase()]
                    }
                    return n === t ? null : n
                },
                overrideMimeType: function (e) {
                    return N || (m.mimeType = e), this
                },
                abort: function (e) {
                    return e = e || "abort", s && s.abort(e), r(0, e), this
                }
            };
            if (v.promise(C), C.success = C.done, C.error = C.fail, C.complete = b.add, C.statusCode = function (e) {
                    if (e) {
                        var t;
                        if (N < 2)for (t in e)x[t] = [x[t], e[t]]; else t = e[C.status], C.then(t, t)
                    }
                    return this
                }, m.url = ((e || m.url) + "").replace(Ve, "").replace(Qe, $e[1] + "//"), m.dataTypes = H.trim(m.dataType || "*").toLowerCase().split(tt), null == m.crossDomain && (f = rt.exec(m.url.toLowerCase()), m.crossDomain = !(!f || f[1] == $e[1] && f[2] == $e[2] && (f[3] || ("http:" === f[1] ? 80 : 443)) == ($e[3] || ("http:" === $e[1] ? 80 : 443)))), m.data && m.processData && "string" != typeof m.data && (m.data = H.param(m.data, m.traditional)), p(ot, m, n, C), 2 === N)return !1;
            if (d = m.global, m.type = m.type.toUpperCase(), m.hasContent = !Je.test(m.type), d && 0 === H.active++ && H.event.trigger("ajaxStart"), !m.hasContent && (m.data && (m.url += (Ke.test(m.url) ? "&" : "?") + m.data, delete m.data), i = m.url, m.cache === !1)) {
                var E = H.now(), k = m.url.replace(nt, "$1_=" + E);
                m.url = k + (k === m.url ? (Ke.test(m.url) ? "&" : "?") + "_=" + E : "")
            }
            (m.data && m.hasContent && m.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", m.contentType), m.ifModified && (i = i || m.url, H.lastModified[i] && C.setRequestHeader("If-Modified-Since", H.lastModified[i]), H.etag[i] && C.setRequestHeader("If-None-Match", H.etag[i])), C.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + st + "; q=0.01" : "") : m.accepts["*"]);
            for (h in m.headers)C.setRequestHeader(h, m.headers[h]);
            if (m.beforeSend && (m.beforeSend.call(g, C, m) === !1 || 2 === N))return C.abort(), !1;
            for (h in{success: 1, error: 1, complete: 1})C[h](m[h]);
            if (s = p(at, m, n, C)) {
                C.readyState = 1, d && y.trigger("ajaxSend", [C, m]), m.async && m.timeout > 0 && (l = setTimeout(function () {
                    C.abort("timeout")
                }, m.timeout));
                try {
                    N = 1, s.send(T, r)
                } catch (e) {
                    if (!(N < 2))throw e;
                    r(-1, e)
                }
            } else r(-1, "No Transport");
            return C
        },
        param: function (e, n) {
            var r = [], i = function (e, t) {
                t = H.isFunction(t) ? t() : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
            if (n === t && (n = H.ajaxSettings.traditional), H.isArray(e) || e.jquery && !H.isPlainObject(e))H.each(e, function () {
                i(this.name, this.value)
            }); else for (var o in e)f(o, e[o], n, i);
            return r.join("&").replace(Re, "+")
        }
    }), H.extend({active: 0, lastModified: {}, etag: {}});
    var lt = H.now(), ut = /(\=)\?(&|$)|\?\?/i;
    H.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            return H.expando + "_" + lt++
        }
    }), H.ajaxPrefilter("json jsonp", function (t, n, r) {
        var i = "string" == typeof t.data && /^application\/x\-www\-form\-urlencoded/.test(t.contentType);
        if ("jsonp" === t.dataTypes[0] || t.jsonp !== !1 && (ut.test(t.url) || i && ut.test(t.data))) {
            var o, a = t.jsonpCallback = H.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s = e[a], l = t.url, u = t.data, c = "$1" + a + "$2";
            return t.jsonp !== !1 && (l = l.replace(ut, c), t.url === l && (i && (u = u.replace(ut, c)), t.data === u && (l += (/\?/.test(l) ? "&" : "?") + t.jsonp + "=" + a))), t.url = l, t.data = u, e[a] = function (e) {
                o = [e]
            }, r.always(function () {
                e[a] = s, o && H.isFunction(s) && e[a](o[0])
            }), t.converters["script json"] = function () {
                return o || H.error(a + " was not called"), o[0]
            }, t.dataTypes[0] = "json", "script"
        }
    }), H.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /javascript|ecmascript/},
        converters: {
            "text script": function (e) {
                return H.globalEval(e), e
            }
        }
    }), H.ajaxPrefilter("script", function (e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), H.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var n, r = F.head || F.getElementsByTagName("head")[0] || F.documentElement;
            return {
                send: function (i, o) {
                    n = F.createElement("script"), n.async = "async", e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, i) {
                        (i || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, r && n.parentNode && r.removeChild(n), n = t, i || o(200, "success"))
                    }, r.insertBefore(n, r.firstChild)
                }, abort: function () {
                    n && n.onload(0, 1)
                }
            }
        }
    });
    var ct, ft = !!e.ActiveXObject && function () {
            for (var e in ct)ct[e](0, 1)
        }, dt = 0;
    H.ajaxSettings.xhr = e.ActiveXObject ? function () {
        return !this.isLocal && l() || s()
    } : l, function (e) {
        H.extend(H.support, {ajax: !!e, cors: !!e && "withCredentials" in e})
    }(H.ajaxSettings.xhr()), H.support.ajax && H.ajaxTransport(function (n) {
        if (!n.crossDomain || H.support.cors) {
            var r;
            return {
                send: function (i, o) {
                    var a, s, l = n.xhr();
                    if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)for (s in n.xhrFields)l[s] = n.xhrFields[s];
                    n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), !n.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in i)l.setRequestHeader(s, i[s])
                    } catch (e) {
                    }
                    l.send(n.hasContent && n.data || null), r = function (e, i) {
                        var s, u, c, f, d;
                        try {
                            if (r && (i || 4 === l.readyState))if (r = t, a && (l.onreadystatechange = H.noop, ft && delete ct[a]), i)4 !== l.readyState && l.abort(); else {
                                s = l.status, c = l.getAllResponseHeaders(), f = {}, d = l.responseXML, d && d.documentElement && (f.xml = d);
                                try {
                                    f.text = l.responseText
                                } catch (e) {
                                }
                                try {
                                    u = l.statusText
                                } catch (e) {
                                    u = ""
                                }
                                s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = f.text ? 200 : 404
                            }
                        } catch (e) {
                            i || o(-1, e)
                        }
                        f && o(s, u, f, c)
                    }, n.async && 4 !== l.readyState ? (a = ++dt, ft && (ct || (ct = {}, H(e).unload(ft)), ct[a] = r), l.onreadystatechange = r) : r()
                }, abort: function () {
                    r && r(0, 1)
                }
            }
        }
    });
    var pt, ht, mt, gt, yt = {}, vt = /^(?:toggle|show|hide)$/, bt = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i, xt = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]];
    H.fn.extend({
        show: function (e, t, n) {
            var o, a;
            if (e || 0 === e)return this.animate(i("show", 3), e, t, n);
            for (var s = 0, l = this.length; s < l; s++)o = this[s], o.style && (a = o.style.display, !H._data(o, "olddisplay") && "none" === a && (a = o.style.display = ""), ("" === a && "none" === H.css(o, "display") || !H.contains(o.ownerDocument.documentElement, o)) && H._data(o, "olddisplay", r(o.nodeName)));
            for (s = 0; s < l; s++)o = this[s], o.style && (a = o.style.display, "" !== a && "none" !== a || (o.style.display = H._data(o, "olddisplay") || ""));
            return this
        }, hide: function (e, t, n) {
            if (e || 0 === e)return this.animate(i("hide", 3), e, t, n);
            for (var r, o, a = 0, s = this.length; a < s; a++)r = this[a], r.style && (o = H.css(r, "display"), "none" !== o && !H._data(r, "olddisplay") && H._data(r, "olddisplay", o));
            for (a = 0; a < s; a++)this[a].style && (this[a].style.display = "none");
            return this
        }, _toggle: H.fn.toggle, toggle: function (e, t, n) {
            var r = "boolean" == typeof e;
            return H.isFunction(e) && H.isFunction(t) ? this._toggle.apply(this, arguments) : null == e || r ? this.each(function () {
                var t = r ? e : H(this).is(":hidden");
                H(this)[t ? "show" : "hide"]()
            }) : this.animate(i("toggle", 3), e, t, n), this
        }, fadeTo: function (e, t, n, r) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
        }, animate: function (e, t, n, i) {
            function o() {
                a.queue === !1 && H._mark(this);
                var t, n, i, o, s, l, u, c, f, d, p, h = H.extend({}, a), m = 1 === this.nodeType, g = m && H(this).is(":hidden");
                h.animatedProperties = {};
                for (i in e)if (t = H.camelCase(i), i !== t && (e[t] = e[i], delete e[i]), (s = H.cssHooks[t]) && "expand" in s) {
                    l = s.expand(e[t]), delete e[t];
                    for (i in l)i in e || (e[i] = l[i])
                }
                for (t in e) {
                    if (n = e[t], H.isArray(n) ? (h.animatedProperties[t] = n[1], n = e[t] = n[0]) : h.animatedProperties[t] = h.specialEasing && h.specialEasing[t] || h.easing || "swing", "hide" === n && g || "show" === n && !g)return h.complete.call(this);
                    m && ("height" === t || "width" === t) && (h.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], "inline" === H.css(this, "display") && "none" === H.css(this, "float") && (H.support.inlineBlockNeedsLayout && "inline" !== r(this.nodeName) ? this.style.zoom = 1 : this.style.display = "inline-block"))
                }
                null != h.overflow && (this.style.overflow = "hidden");
                for (i in e)o = new H.fx(this, h, i), n = e[i], vt.test(n) ? (p = H._data(this, "toggle" + i) || ("toggle" === n ? g ? "show" : "hide" : 0), p ? (H._data(this, "toggle" + i, "show" === p ? "hide" : "show"), o[p]()) : o[n]()) : (u = bt.exec(n), c = o.cur(), u ? (f = parseFloat(u[2]), d = u[3] || (H.cssNumber[i] ? "" : "px"), "px" !== d && (H.style(this, i, (f || 1) + d), c = (f || 1) / o.cur() * c, H.style(this, i, c + d)), u[1] && (f = ("-=" === u[1] ? -1 : 1) * f + c), o.custom(c, f, d)) : o.custom(c, n, ""));
                return !0
            }

            var a = H.speed(t, n, i);
            return H.isEmptyObject(e) ? this.each(a.complete, [!1]) : (e = H.extend({}, e), a.queue === !1 ? this.each(o) : this.queue(a.queue, o))
        }, stop: function (e, n, r) {
            return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                function t(e, t, n) {
                    var i = t[n];
                    H.removeData(e, n, !0), i.stop(r)
                }

                var n, i = !1, o = H.timers, a = H._data(this);
                if (r || H._unmark(!0, this), null == e)for (n in a)a[n] && a[n].stop && n.indexOf(".run") === n.length - 4 && t(this, a, n); else a[n = e + ".run"] && a[n].stop && t(this, a, n);
                for (n = o.length; n--;)o[n].elem === this && (null == e || o[n].queue === e) && (r ? o[n](!0) : o[n].saveState(), i = !0, o.splice(n, 1));
                (!r || !i) && H.dequeue(this, e)
            })
        }
    }), H.each({
        slideDown: i("show", 1),
        slideUp: i("hide", 1),
        slideToggle: i("toggle", 1),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
        H.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), H.extend({
        speed: function (e, t, n) {
            var r = e && "object" == typeof e ? H.extend({}, e) : {
                complete: n || !n && t || H.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !H.isFunction(t) && t
            };
            return r.duration = H.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in H.fx.speeds ? H.fx.speeds[r.duration] : H.fx.speeds._default, null != r.queue && r.queue !== !0 || (r.queue = "fx"), r.old = r.complete, r.complete = function (e) {
                H.isFunction(r.old) && r.old.call(this), r.queue ? H.dequeue(this, r.queue) : e !== !1 && H._unmark(this)
            }, r
        }, easing: {
            linear: function (e) {
                return e
            }, swing: function (e) {
                return -Math.cos(e * Math.PI) / 2 + .5
            }
        }, timers: [], fx: function (e, t, n) {
            this.options = t, this.elem = e, this.prop = n, t.orig = t.orig || {}
        }
    }), H.fx.prototype = {
        update: function () {
            this.options.step && this.options.step.call(this.elem, this.now, this), (H.fx.step[this.prop] || H.fx.step._default)(this)
        }, cur: function () {
            if (null != this.elem[this.prop] && (!this.elem.style || null == this.elem.style[this.prop]))return this.elem[this.prop];
            var e, t = H.css(this.elem, this.prop);
            return isNaN(e = parseFloat(t)) ? t && "auto" !== t ? t : 0 : e
        }, custom: function (e, n, r) {
            function i(e) {
                return o.step(e)
            }

            var o = this, s = H.fx;
            this.startTime = gt || a(), this.end = n, this.now = this.start = e, this.pos = this.state = 0, this.unit = r || this.unit || (H.cssNumber[this.prop] ? "" : "px"), i.queue = this.options.queue, i.elem = this.elem, i.saveState = function () {
                H._data(o.elem, "fxshow" + o.prop) === t && (o.options.hide ? H._data(o.elem, "fxshow" + o.prop, o.start) : o.options.show && H._data(o.elem, "fxshow" + o.prop, o.end))
            }, i() && H.timers.push(i) && !mt && (mt = setInterval(s.tick, s.interval))
        }, show: function () {
            var e = H._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = e || H.style(this.elem, this.prop), this.options.show = !0, e !== t ? this.custom(this.cur(), e) : this.custom("width" === this.prop || "height" === this.prop ? 1 : 0, this.cur()), H(this.elem).show()
        }, hide: function () {
            this.options.orig[this.prop] = H._data(this.elem, "fxshow" + this.prop) || H.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
        }, step: function (e) {
            var t, n, r, i = gt || a(), o = !0, s = this.elem, l = this.options;
            if (e || i >= l.duration + this.startTime) {
                this.now = this.end, this.pos = this.state = 1, this.update(), l.animatedProperties[this.prop] = !0;
                for (t in l.animatedProperties)l.animatedProperties[t] !== !0 && (o = !1);
                if (o) {
                    if (null != l.overflow && !H.support.shrinkWrapBlocks && H.each(["", "X", "Y"], function (e, t) {
                            s.style["overflow" + t] = l.overflow[e]
                        }), l.hide && H(s).hide(), l.hide || l.show)for (t in l.animatedProperties)H.style(s, t, l.orig[t]), H.removeData(s, "fxshow" + t, !0), H.removeData(s, "toggle" + t, !0);
                    r = l.complete, r && (l.complete = !1, r.call(s))
                }
                return !1
            }
            return l.duration == 1 / 0 ? this.now = i : (n = i - this.startTime, this.state = n / l.duration, this.pos = H.easing[l.animatedProperties[this.prop]](this.state, n, 0, 1, l.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update(), !0
        }
    }, H.extend(H.fx, {
        tick: function () {
            for (var e, t = H.timers, n = 0; n < t.length; n++)e = t[n], !e() && t[n] === e && t.splice(n--, 1);
            t.length || H.fx.stop()
        }, interval: 13, stop: function () {
            clearInterval(mt), mt = null
        }, speeds: {slow: 600, fast: 200, _default: 400}, step: {
            opacity: function (e) {
                H.style(e.elem, "opacity", e.now)
            }, _default: function (e) {
                e.elem.style && null != e.elem.style[e.prop] ? e.elem.style[e.prop] = e.now + e.unit : e.elem[e.prop] = e.now
            }
        }
    }), H.each(xt.concat.apply([], xt), function (e, t) {
        t.indexOf("margin") && (H.fx.step[t] = function (e) {
            H.style(e.elem, t, Math.max(0, e.now) + e.unit)
        })
    }), H.expr && H.expr.filters && (H.expr.filters.animated = function (e) {
        return H.grep(H.timers, function (t) {
            return e === t.elem
        }).length
    });
    var Tt, wt = /^t(?:able|d|h)$/i, Nt = /^(?:body|html)$/i;
    Tt = "getBoundingClientRect" in F.documentElement ? function (e, t, r, i) {
        try {
            i = e.getBoundingClientRect()
        } catch (e) {
        }
        if (!i || !H.contains(r, e))return i ? {top: i.top, left: i.left} : {top: 0, left: 0};
        var o = t.body, a = n(t), s = r.clientTop || o.clientTop || 0, l = r.clientLeft || o.clientLeft || 0, u = a.pageYOffset || H.support.boxModel && r.scrollTop || o.scrollTop, c = a.pageXOffset || H.support.boxModel && r.scrollLeft || o.scrollLeft, f = i.top + u - s, d = i.left + c - l;
        return {top: f, left: d}
    } : function (e, t, n) {
        for (var r, i = e.offsetParent, o = e, a = t.body, s = t.defaultView, l = s ? s.getComputedStyle(e, null) : e.currentStyle, u = e.offsetTop, c = e.offsetLeft; (e = e.parentNode) && e !== a && e !== n && (!H.support.fixedPosition || "fixed" !== l.position);)r = s ? s.getComputedStyle(e, null) : e.currentStyle, u -= e.scrollTop, c -= e.scrollLeft, e === i && (u += e.offsetTop, c += e.offsetLeft, H.support.doesNotAddBorder && (!H.support.doesAddBorderForTableAndCells || !wt.test(e.nodeName)) && (u += parseFloat(r.borderTopWidth) || 0, c += parseFloat(r.borderLeftWidth) || 0), o = i, i = e.offsetParent), H.support.subtractsBorderForOverflowNotVisible && "visible" !== r.overflow && (u += parseFloat(r.borderTopWidth) || 0, c += parseFloat(r.borderLeftWidth) || 0), l = r;
        return "relative" !== l.position && "static" !== l.position || (u += a.offsetTop, c += a.offsetLeft), H.support.fixedPosition && "fixed" === l.position && (u += Math.max(n.scrollTop, a.scrollTop), c += Math.max(n.scrollLeft, a.scrollLeft)), {
            top: u,
            left: c
        }
    }, H.fn.offset = function (e) {
        if (arguments.length)return e === t ? this : this.each(function (t) {
            H.offset.setOffset(this, e, t)
        });
        var n = this[0], r = n && n.ownerDocument;
        return r ? n === r.body ? H.offset.bodyOffset(n) : Tt(n, r, r.documentElement) : null
    }, H.offset = {
        bodyOffset: function (e) {
            var t = e.offsetTop, n = e.offsetLeft;
            return H.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(H.css(e, "marginTop")) || 0, n += parseFloat(H.css(e, "marginLeft")) || 0), {
                top: t,
                left: n
            }
        }, setOffset: function (e, t, n) {
            var r = H.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i, o, a = H(e), s = a.offset(), l = H.css(e, "top"), u = H.css(e, "left"), c = ("absolute" === r || "fixed" === r) && H.inArray("auto", [l, u]) > -1, f = {}, d = {};
            c ? (d = a.position(), i = d.top, o = d.left) : (i = parseFloat(l) || 0, o = parseFloat(u) || 0), H.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + i), null != t.left && (f.left = t.left - s.left + o), "using" in t ? t.using.call(e, f) : a.css(f)
        }
    }, H.fn.extend({
        position: function () {
            if (!this[0])return null;
            var e = this[0], t = this.offsetParent(), n = this.offset(), r = Nt.test(t[0].nodeName) ? {
                top: 0,
                left: 0
            } : t.offset();
            return n.top -= parseFloat(H.css(e, "marginTop")) || 0, n.left -= parseFloat(H.css(e, "marginLeft")) || 0, r.top += parseFloat(H.css(t[0], "borderTopWidth")) || 0, r.left += parseFloat(H.css(t[0], "borderLeftWidth")) || 0, {
                top: n.top - r.top,
                left: n.left - r.left
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent || F.body; e && !Nt.test(e.nodeName) && "static" === H.css(e, "position");)e = e.offsetParent;
                return e
            })
        }
    }), H.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, r) {
        var i = /Y/.test(r);
        H.fn[e] = function (o) {
            return H.access(this, function (e, o, a) {
                var s = n(e);
                return a === t ? s ? r in s ? s[r] : H.support.boxModel && s.document.documentElement[o] || s.document.body[o] : e[o] : void(s ? s.scrollTo(i ? H(s).scrollLeft() : a, i ? a : H(s).scrollTop()) : e[o] = a)
            }, e, o, arguments.length, null)
        }
    }), H.each({Height: "height", Width: "width"}, function (e, n) {
        var r = "client" + e, i = "scroll" + e, o = "offset" + e;
        H.fn["inner" + e] = function () {
            var e = this[0];
            return e ? e.style ? parseFloat(H.css(e, n, "padding")) : this[n]() : null
        }, H.fn["outer" + e] = function (e) {
            var t = this[0];
            return t ? t.style ? parseFloat(H.css(t, n, e ? "margin" : "border")) : this[n]() : null
        }, H.fn[n] = function (e) {
            return H.access(this, function (e, n, a) {
                var s, l, u, c;
                return H.isWindow(e) ? (s = e.document, l = s.documentElement[r], H.support.boxModel && l || s.body && s.body[r] || l) : 9 === e.nodeType ? (s = e.documentElement, s[r] >= s[i] ? s[r] : Math.max(e.body[i], s[i], e.body[o], s[o])) : a === t ? (u = H.css(e, n), c = parseFloat(u), H.isNumeric(c) ? c : u) : void H(e).css(n, a)
            }, n, e, arguments.length, null)
        }
    }), e.jQuery = e.$ = H, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return H
    })
}(window);
