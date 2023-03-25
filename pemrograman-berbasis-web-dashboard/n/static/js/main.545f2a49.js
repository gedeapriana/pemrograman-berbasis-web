/*! For license information please see main.545f2a49.js.LICENSE.txt */
!(function () {
  var e = {
      694: function (e, t) {
        var r;
        !(function () {
          "use strict";
          var n = {}.hasOwnProperty;
          function a() {
            for (var e = [], t = 0; t < arguments.length; t++) {
              var r = arguments[t];
              if (r) {
                var o = typeof r;
                if ("string" === o || "number" === o) e.push(r);
                else if (Array.isArray(r)) {
                  if (r.length) {
                    var l = a.apply(null, r);
                    l && e.push(l);
                  }
                } else if ("object" === o) {
                  if (
                    r.toString !== Object.prototype.toString &&
                    !r.toString.toString().includes("[native code]")
                  ) {
                    e.push(r.toString());
                    continue;
                  }
                  for (var i in r) n.call(r, i) && r[i] && e.push(i);
                }
              }
            }
            return e.join(" ");
          }
          e.exports
            ? ((a.default = a), (e.exports = a))
            : void 0 ===
                (r = function () {
                  return a;
                }.apply(t, [])) || (e.exports = r);
        })();
      },
      463: function (e, t, r) {
        "use strict";
        var n = r(791),
          a = r(296);
        function o(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              r = 1;
            r < arguments.length;
            r++
          )
            t += "&args[]=" + encodeURIComponent(arguments[r]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var l = new Set(),
          i = {};
        function s(e, t) {
          u(e, t), u(e + "Capture", t);
        }
        function u(e, t) {
          for (i[e] = t, e = 0; e < t.length; e++) l.add(t[e]);
        }
        var c = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          d = Object.prototype.hasOwnProperty,
          f =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          g = {};
        function h(e, t, r, n, a, o, l) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = n),
            (this.attributeNamespace = a),
            (this.mustUseProperty = r),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = o),
            (this.removeEmptyString = l);
        }
        var m = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            m[e] = new h(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            m[t] = new h(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              m[e] = new h(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            m[e] = new h(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              m[e] = new h(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            m[e] = new h(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            m[e] = new h(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            m[e] = new h(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            m[e] = new h(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var b = /[\-:]([a-z])/g;
        function v(e) {
          return e[1].toUpperCase();
        }
        function y(e, t, r, n) {
          var a = m.hasOwnProperty(t) ? m[t] : null;
          (null !== a
            ? 0 !== a.type
            : n ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, r, n) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, r, n) {
                  if (null !== r && 0 === r.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !n &&
                        (null !== r
                          ? !r.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, r, n)
              )
                return !0;
              if (n) return !1;
              if (null !== r)
                switch (r.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, r, a, n) && (r = null),
            n || null === a
              ? (function (e) {
                  return (
                    !!d.call(g, e) ||
                    (!d.call(p, e) &&
                      (f.test(e) ? (g[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === r ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === r ? 3 !== a.type && "" : r)
              : ((t = a.attributeName),
                (n = a.attributeNamespace),
                null === r
                  ? e.removeAttribute(t)
                  : ((r =
                      3 === (a = a.type) || (4 === a && !0 === r)
                        ? ""
                        : "" + r),
                    n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(b, v);
            m[t] = new h(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(b, v);
              m[t] = new h(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(b, v);
            m[t] = new h(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            m[e] = new h(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (m.xlinkHref = new h(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            m[e] = new h(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var x = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          k = Symbol.for("react.element"),
          w = Symbol.for("react.portal"),
          N = Symbol.for("react.fragment"),
          S = Symbol.for("react.strict_mode"),
          j = Symbol.for("react.profiler"),
          C = Symbol.for("react.provider"),
          E = Symbol.for("react.context"),
          P = Symbol.for("react.forward_ref"),
          _ = Symbol.for("react.suspense"),
          z = Symbol.for("react.suspense_list"),
          T = Symbol.for("react.memo"),
          L = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var M = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var O = Symbol.iterator;
        function R(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (O && e[O]) || e["@@iterator"])
            ? e
            : null;
        }
        var I,
          D = Object.assign;
        function F(e) {
          if (void 0 === I)
            try {
              throw Error();
            } catch (r) {
              var t = r.stack.trim().match(/\n( *(at )?)/);
              I = (t && t[1]) || "";
            }
          return "\n" + I + e;
        }
        var A = !1;
        function B(e, t) {
          if (!e || A) return "";
          A = !0;
          var r = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (u) {
                  var n = u;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (u) {
                  n = u;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (u) {
                n = u;
              }
              e();
            }
          } catch (u) {
            if (u && n && "string" === typeof u.stack) {
              for (
                var a = u.stack.split("\n"),
                  o = n.stack.split("\n"),
                  l = a.length - 1,
                  i = o.length - 1;
                1 <= l && 0 <= i && a[l] !== o[i];

              )
                i--;
              for (; 1 <= l && 0 <= i; l--, i--)
                if (a[l] !== o[i]) {
                  if (1 !== l || 1 !== i)
                    do {
                      if ((l--, 0 > --i || a[l] !== o[i])) {
                        var s = "\n" + a[l].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            s.includes("<anonymous>") &&
                            (s = s.replace("<anonymous>", e.displayName)),
                          s
                        );
                      }
                    } while (1 <= l && 0 <= i);
                  break;
                }
            }
          } finally {
            (A = !1), (Error.prepareStackTrace = r);
          }
          return (e = e ? e.displayName || e.name : "") ? F(e) : "";
        }
        function H(e) {
          switch (e.tag) {
            case 5:
              return F(e.type);
            case 16:
              return F("Lazy");
            case 13:
              return F("Suspense");
            case 19:
              return F("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = B(e.type, !1));
            case 11:
              return (e = B(e.type.render, !1));
            case 1:
              return (e = B(e.type, !0));
            default:
              return "";
          }
        }
        function U(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case N:
              return "Fragment";
            case w:
              return "Portal";
            case j:
              return "Profiler";
            case S:
              return "StrictMode";
            case _:
              return "Suspense";
            case z:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case E:
                return (e.displayName || "Context") + ".Consumer";
              case C:
                return (e._context.displayName || "Context") + ".Provider";
              case P:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case T:
                return null !== (t = e.displayName || null)
                  ? t
                  : U(e.type) || "Memo";
              case L:
                (t = e._payload), (e = e._init);
                try {
                  return U(e(t));
                } catch (r) {}
            }
          return null;
        }
        function V(e) {
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
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
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
              return U(t);
            case 8:
              return t === S ? "StrictMode" : "Mode";
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
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function W(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function $(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function K(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = $(e) ? "checked" : "value",
                r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                n = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof r &&
                "function" === typeof r.get &&
                "function" === typeof r.set
              ) {
                var a = r.get,
                  o = r.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (n = "" + e), o.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: r.enumerable }),
                  {
                    getValue: function () {
                      return n;
                    },
                    setValue: function (e) {
                      n = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function Q(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var r = t.getValue(),
            n = "";
          return (
            e && (n = $(e) ? (e.checked ? "true" : "false") : e.value),
            (e = n) !== r && (t.setValue(e), !0)
          );
        }
        function q(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function G(e, t) {
          var r = t.checked;
          return D({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != r ? r : e._wrapperState.initialChecked,
          });
        }
        function Y(e, t) {
          var r = null == t.defaultValue ? "" : t.defaultValue,
            n = null != t.checked ? t.checked : t.defaultChecked;
          (r = W(null != t.value ? t.value : r)),
            (e._wrapperState = {
              initialChecked: n,
              initialValue: r,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function X(e, t) {
          null != (t = t.checked) && y(e, "checked", t, !1);
        }
        function J(e, t) {
          X(e, t);
          var r = W(t.value),
            n = t.type;
          if (null != r)
            "number" === n
              ? ((0 === r && "" === e.value) || e.value != r) &&
                (e.value = "" + r)
              : e.value !== "" + r && (e.value = "" + r);
          else if ("submit" === n || "reset" === n)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, r)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, W(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function Z(e, t, r) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var n = t.type;
            if (
              !(
                ("submit" !== n && "reset" !== n) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              r || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (r = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== r && (e.name = r);
        }
        function ee(e, t, r) {
          ("number" === t && q(e.ownerDocument) === e) ||
            (null == r
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
        }
        var te = Array.isArray;
        function re(e, t, r, n) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < r.length; a++) t["$" + r[a]] = !0;
            for (r = 0; r < e.length; r++)
              (a = t.hasOwnProperty("$" + e[r].value)),
                e[r].selected !== a && (e[r].selected = a),
                a && n && (e[r].defaultSelected = !0);
          } else {
            for (r = "" + W(r), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === r)
                return (
                  (e[a].selected = !0), void (n && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function ne(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
          return D({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var r = t.value;
          if (null == r) {
            if (((r = t.children), (t = t.defaultValue), null != r)) {
              if (null != t) throw Error(o(92));
              if (te(r)) {
                if (1 < r.length) throw Error(o(93));
                r = r[0];
              }
              t = r;
            }
            null == t && (t = ""), (r = t);
          }
          e._wrapperState = { initialValue: W(r) };
        }
        function oe(e, t) {
          var r = W(t.value),
            n = W(t.defaultValue);
          null != r &&
            ((r = "" + r) !== e.value && (e.value = r),
            null == t.defaultValue &&
              e.defaultValue !== r &&
              (e.defaultValue = r)),
            null != n && (e.defaultValue = "" + n);
        }
        function le(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function ie(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function se(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? ie(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var ue,
          ce,
          de =
            ((ce = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ue = ue || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ue.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, r, n) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function fe(e, t) {
          if (t) {
            var r = e.firstChild;
            if (r && r === e.lastChild && 3 === r.nodeType)
              return void (r.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
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
            strokeWidth: !0,
          },
          ge = ["Webkit", "ms", "Moz", "O"];
        function he(e, t, r) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : r ||
              "number" !== typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function me(e, t) {
          for (var r in ((e = e.style), t))
            if (t.hasOwnProperty(r)) {
              var n = 0 === r.indexOf("--"),
                a = he(r, t[r], n);
              "float" === r && (r = "cssFloat"),
                n ? e.setProperty(r, a) : (e[r] = a);
            }
        }
        Object.keys(pe).forEach(function (e) {
          ge.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var be = D(
          { menuitem: !0 },
          {
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
            wbr: !0,
          }
        );
        function ve(e, t) {
          if (t) {
            if (
              be[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(o(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(o(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(o(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(o(62));
          }
        }
        function ye(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
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
              return !0;
          }
        }
        var xe = null;
        function ke(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var we = null,
          Ne = null,
          Se = null;
        function je(e) {
          if ((e = ya(e))) {
            if ("function" !== typeof we) throw Error(o(280));
            var t = e.stateNode;
            t && ((t = ka(t)), we(e.stateNode, e.type, t));
          }
        }
        function Ce(e) {
          Ne ? (Se ? Se.push(e) : (Se = [e])) : (Ne = e);
        }
        function Ee() {
          if (Ne) {
            var e = Ne,
              t = Se;
            if (((Se = Ne = null), je(e), t))
              for (e = 0; e < t.length; e++) je(t[e]);
          }
        }
        function Pe(e, t) {
          return e(t);
        }
        function _e() {}
        var ze = !1;
        function Te(e, t, r) {
          if (ze) return e(t, r);
          ze = !0;
          try {
            return Pe(e, t, r);
          } finally {
            (ze = !1), (null !== Ne || null !== Se) && (_e(), Ee());
          }
        }
        function Le(e, t) {
          var r = e.stateNode;
          if (null === r) return null;
          var n = ka(r);
          if (null === n) return null;
          r = n[t];
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
              (n = !n.disabled) ||
                (n = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !n);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (r && "function" !== typeof r) throw Error(o(231, t, typeof r));
          return r;
        }
        var Me = !1;
        if (c)
          try {
            var Oe = {};
            Object.defineProperty(Oe, "passive", {
              get: function () {
                Me = !0;
              },
            }),
              window.addEventListener("test", Oe, Oe),
              window.removeEventListener("test", Oe, Oe);
          } catch (ce) {
            Me = !1;
          }
        function Re(e, t, r, n, a, o, l, i, s) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(r, u);
          } catch (c) {
            this.onError(c);
          }
        }
        var Ie = !1,
          De = null,
          Fe = !1,
          Ae = null,
          Be = {
            onError: function (e) {
              (Ie = !0), (De = e);
            },
          };
        function He(e, t, r, n, a, o, l, i, s) {
          (Ie = !1), (De = null), Re.apply(Be, arguments);
        }
        function Ue(e) {
          var t = e,
            r = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (r = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? r : null;
        }
        function Ve(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function We(e) {
          if (Ue(e) !== e) throw Error(o(188));
        }
        function $e(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Ue(e))) throw Error(o(188));
                return t !== e ? null : e;
              }
              for (var r = e, n = t; ; ) {
                var a = r.return;
                if (null === a) break;
                var l = a.alternate;
                if (null === l) {
                  if (null !== (n = a.return)) {
                    r = n;
                    continue;
                  }
                  break;
                }
                if (a.child === l.child) {
                  for (l = a.child; l; ) {
                    if (l === r) return We(a), e;
                    if (l === n) return We(a), t;
                    l = l.sibling;
                  }
                  throw Error(o(188));
                }
                if (r.return !== n.return) (r = a), (n = l);
                else {
                  for (var i = !1, s = a.child; s; ) {
                    if (s === r) {
                      (i = !0), (r = a), (n = l);
                      break;
                    }
                    if (s === n) {
                      (i = !0), (n = a), (r = l);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!i) {
                    for (s = l.child; s; ) {
                      if (s === r) {
                        (i = !0), (r = l), (n = a);
                        break;
                      }
                      if (s === n) {
                        (i = !0), (n = l), (r = a);
                        break;
                      }
                      s = s.sibling;
                    }
                    if (!i) throw Error(o(189));
                  }
                }
                if (r.alternate !== n) throw Error(o(190));
              }
              if (3 !== r.tag) throw Error(o(188));
              return r.stateNode.current === r ? e : t;
            })(e))
            ? Ke(e)
            : null;
        }
        function Ke(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Ke(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var Qe = a.unstable_scheduleCallback,
          qe = a.unstable_cancelCallback,
          Ge = a.unstable_shouldYield,
          Ye = a.unstable_requestPaint,
          Xe = a.unstable_now,
          Je = a.unstable_getCurrentPriorityLevel,
          Ze = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          rt = a.unstable_LowPriority,
          nt = a.unstable_IdlePriority,
          at = null,
          ot = null;
        var lt = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((it(e) / st) | 0)) | 0;
              },
          it = Math.log,
          st = Math.LN2;
        var ut = 64,
          ct = 4194304;
        function dt(e) {
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
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function ft(e, t) {
          var r = e.pendingLanes;
          if (0 === r) return 0;
          var n = 0,
            a = e.suspendedLanes,
            o = e.pingedLanes,
            l = 268435455 & r;
          if (0 !== l) {
            var i = l & ~a;
            0 !== i ? (n = dt(i)) : 0 !== (o &= l) && (n = dt(o));
          } else 0 !== (l = r & ~a) ? (n = dt(l)) : 0 !== o && (n = dt(o));
          if (0 === n) return 0;
          if (
            0 !== t &&
            t !== n &&
            0 === (t & a) &&
            ((a = n & -n) >= (o = t & -t) || (16 === a && 0 !== (4194240 & o)))
          )
            return t;
          if ((0 !== (4 & n) && (n |= 16 & r), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= n; 0 < t; )
              (a = 1 << (r = 31 - lt(t))), (n |= e[r]), (t &= ~a);
          return n;
        }
        function pt(e, t) {
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
            default:
              return -1;
          }
        }
        function gt(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function ht() {
          var e = ut;
          return 0 === (4194240 & (ut <<= 1)) && (ut = 64), e;
        }
        function mt(e) {
          for (var t = [], r = 0; 31 > r; r++) t.push(e);
          return t;
        }
        function bt(e, t, r) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - lt(t))] = r);
        }
        function vt(e, t) {
          var r = (e.entangledLanes |= t);
          for (e = e.entanglements; r; ) {
            var n = 31 - lt(r),
              a = 1 << n;
            (a & t) | (e[n] & t) && (e[n] |= t), (r &= ~a);
          }
        }
        var yt = 0;
        function xt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var kt,
          wt,
          Nt,
          St,
          jt,
          Ct = !1,
          Et = [],
          Pt = null,
          _t = null,
          zt = null,
          Tt = new Map(),
          Lt = new Map(),
          Mt = [],
          Ot =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function Rt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Pt = null;
              break;
            case "dragenter":
            case "dragleave":
              _t = null;
              break;
            case "mouseover":
            case "mouseout":
              zt = null;
              break;
            case "pointerover":
            case "pointerout":
              Tt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Lt.delete(t.pointerId);
          }
        }
        function It(e, t, r, n, a, o) {
          return null === e || e.nativeEvent !== o
            ? ((e = {
                blockedOn: t,
                domEventName: r,
                eventSystemFlags: n,
                nativeEvent: o,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ya(t)) && wt(t),
              e)
            : ((e.eventSystemFlags |= n),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function Dt(e) {
          var t = va(e.target);
          if (null !== t) {
            var r = Ue(t);
            if (null !== r)
              if (13 === (t = r.tag)) {
                if (null !== (t = Ve(r)))
                  return (
                    (e.blockedOn = t),
                    void jt(e.priority, function () {
                      Nt(r);
                    })
                  );
              } else if (
                3 === t &&
                r.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === r.tag ? r.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Ft(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var r = Gt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== r)
              return null !== (t = ya(r)) && wt(t), (e.blockedOn = r), !1;
            var n = new (r = e.nativeEvent).constructor(r.type, r);
            (xe = n), r.target.dispatchEvent(n), (xe = null), t.shift();
          }
          return !0;
        }
        function At(e, t, r) {
          Ft(e) && r.delete(t);
        }
        function Bt() {
          (Ct = !1),
            null !== Pt && Ft(Pt) && (Pt = null),
            null !== _t && Ft(_t) && (_t = null),
            null !== zt && Ft(zt) && (zt = null),
            Tt.forEach(At),
            Lt.forEach(At);
        }
        function Ht(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Ct ||
              ((Ct = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, Bt)));
        }
        function Ut(e) {
          function t(t) {
            return Ht(t, e);
          }
          if (0 < Et.length) {
            Ht(Et[0], e);
            for (var r = 1; r < Et.length; r++) {
              var n = Et[r];
              n.blockedOn === e && (n.blockedOn = null);
            }
          }
          for (
            null !== Pt && Ht(Pt, e),
              null !== _t && Ht(_t, e),
              null !== zt && Ht(zt, e),
              Tt.forEach(t),
              Lt.forEach(t),
              r = 0;
            r < Mt.length;
            r++
          )
            (n = Mt[r]).blockedOn === e && (n.blockedOn = null);
          for (; 0 < Mt.length && null === (r = Mt[0]).blockedOn; )
            Dt(r), null === r.blockedOn && Mt.shift();
        }
        var Vt = x.ReactCurrentBatchConfig,
          Wt = !0;
        function $t(e, t, r, n) {
          var a = yt,
            o = Vt.transition;
          Vt.transition = null;
          try {
            (yt = 1), Qt(e, t, r, n);
          } finally {
            (yt = a), (Vt.transition = o);
          }
        }
        function Kt(e, t, r, n) {
          var a = yt,
            o = Vt.transition;
          Vt.transition = null;
          try {
            (yt = 4), Qt(e, t, r, n);
          } finally {
            (yt = a), (Vt.transition = o);
          }
        }
        function Qt(e, t, r, n) {
          if (Wt) {
            var a = Gt(e, t, r, n);
            if (null === a) Wn(e, t, n, qt, r), Rt(e, n);
            else if (
              (function (e, t, r, n, a) {
                switch (t) {
                  case "focusin":
                    return (Pt = It(Pt, e, t, r, n, a)), !0;
                  case "dragenter":
                    return (_t = It(_t, e, t, r, n, a)), !0;
                  case "mouseover":
                    return (zt = It(zt, e, t, r, n, a)), !0;
                  case "pointerover":
                    var o = a.pointerId;
                    return Tt.set(o, It(Tt.get(o) || null, e, t, r, n, a)), !0;
                  case "gotpointercapture":
                    return (
                      (o = a.pointerId),
                      Lt.set(o, It(Lt.get(o) || null, e, t, r, n, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, r, n)
            )
              n.stopPropagation();
            else if ((Rt(e, n), 4 & t && -1 < Ot.indexOf(e))) {
              for (; null !== a; ) {
                var o = ya(a);
                if (
                  (null !== o && kt(o),
                  null === (o = Gt(e, t, r, n)) && Wn(e, t, n, qt, r),
                  o === a)
                )
                  break;
                a = o;
              }
              null !== a && n.stopPropagation();
            } else Wn(e, t, n, null, r);
          }
        }
        var qt = null;
        function Gt(e, t, r, n) {
          if (((qt = null), null !== (e = va((e = ke(n))))))
            if (null === (t = Ue(e))) e = null;
            else if (13 === (r = t.tag)) {
              if (null !== (e = Ve(t))) return e;
              e = null;
            } else if (3 === r) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (qt = e), null;
        }
        function Yt(e) {
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
              switch (Je()) {
                case Ze:
                  return 1;
                case et:
                  return 4;
                case tt:
                case rt:
                  return 16;
                case nt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Xt = null,
          Jt = null,
          Zt = null;
        function er() {
          if (Zt) return Zt;
          var e,
            t,
            r = Jt,
            n = r.length,
            a = "value" in Xt ? Xt.value : Xt.textContent,
            o = a.length;
          for (e = 0; e < n && r[e] === a[e]; e++);
          var l = n - e;
          for (t = 1; t <= l && r[n - t] === a[o - t]; t++);
          return (Zt = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tr(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function rr() {
          return !0;
        }
        function nr() {
          return !1;
        }
        function ar(e) {
          function t(t, r, n, a, o) {
            for (var l in ((this._reactName = t),
            (this._targetInst = n),
            (this.type = r),
            (this.nativeEvent = a),
            (this.target = o),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(l) && ((t = e[l]), (this[l] = t ? t(a) : a[l]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? rr
                : nr),
              (this.isPropagationStopped = nr),
              this
            );
          }
          return (
            D(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = rr));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = rr));
              },
              persist: function () {},
              isPersistent: rr,
            }),
            t
          );
        }
        var or,
          lr,
          ir,
          sr = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          ur = ar(sr),
          cr = D({}, sr, { view: 0, detail: 0 }),
          dr = ar(cr),
          fr = D({}, cr, {
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
            getModifierState: Sr,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== ir &&
                    (ir && "mousemove" === e.type
                      ? ((or = e.screenX - ir.screenX),
                        (lr = e.screenY - ir.screenY))
                      : (lr = or = 0),
                    (ir = e)),
                  or);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : lr;
            },
          }),
          pr = ar(fr),
          gr = ar(D({}, fr, { dataTransfer: 0 })),
          hr = ar(D({}, cr, { relatedTarget: 0 })),
          mr = ar(
            D({}, sr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          br = D({}, sr, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          vr = ar(br),
          yr = ar(D({}, sr, { data: 0 })),
          xr = {
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
            MozPrintableKey: "Unidentified",
          },
          kr = {
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
            224: "Meta",
          },
          wr = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function Nr(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = wr[e]) && !!t[e];
        }
        function Sr() {
          return Nr;
        }
        var jr = D({}, cr, {
            key: function (e) {
              if (e.key) {
                var t = xr[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tr(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? kr[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Sr,
            charCode: function (e) {
              return "keypress" === e.type ? tr(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tr(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Cr = ar(jr),
          Er = ar(
            D({}, fr, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          Pr = ar(
            D({}, cr, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Sr,
            })
          ),
          _r = ar(
            D({}, sr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          zr = D({}, fr, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Tr = ar(zr),
          Lr = [9, 13, 27, 32],
          Mr = c && "CompositionEvent" in window,
          Or = null;
        c && "documentMode" in document && (Or = document.documentMode);
        var Rr = c && "TextEvent" in window && !Or,
          Ir = c && (!Mr || (Or && 8 < Or && 11 >= Or)),
          Dr = String.fromCharCode(32),
          Fr = !1;
        function Ar(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Lr.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Br(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Hr = !1;
        var Ur = {
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
          week: !0,
        };
        function Vr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Ur[e.type] : "textarea" === t;
        }
        function Wr(e, t, r, n) {
          Ce(n),
            0 < (t = Kn(t, "onChange")).length &&
              ((r = new ur("onChange", "change", null, r, n)),
              e.push({ event: r, listeners: t }));
        }
        var $r = null,
          Kr = null;
        function Qr(e) {
          Fn(e, 0);
        }
        function qr(e) {
          if (Q(xa(e))) return e;
        }
        function Gr(e, t) {
          if ("change" === e) return t;
        }
        var Yr = !1;
        if (c) {
          var Xr;
          if (c) {
            var Jr = "oninput" in document;
            if (!Jr) {
              var Zr = document.createElement("div");
              Zr.setAttribute("oninput", "return;"),
                (Jr = "function" === typeof Zr.oninput);
            }
            Xr = Jr;
          } else Xr = !1;
          Yr = Xr && (!document.documentMode || 9 < document.documentMode);
        }
        function en() {
          $r && ($r.detachEvent("onpropertychange", tn), (Kr = $r = null));
        }
        function tn(e) {
          if ("value" === e.propertyName && qr(Kr)) {
            var t = [];
            Wr(t, Kr, e, ke(e)), Te(Qr, t);
          }
        }
        function rn(e, t, r) {
          "focusin" === e
            ? (en(), (Kr = r), ($r = t).attachEvent("onpropertychange", tn))
            : "focusout" === e && en();
        }
        function nn(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return qr(Kr);
        }
        function an(e, t) {
          if ("click" === e) return qr(t);
        }
        function on(e, t) {
          if ("input" === e || "change" === e) return qr(t);
        }
        var ln =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function sn(e, t) {
          if (ln(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var r = Object.keys(e),
            n = Object.keys(t);
          if (r.length !== n.length) return !1;
          for (n = 0; n < r.length; n++) {
            var a = r[n];
            if (!d.call(t, a) || !ln(e[a], t[a])) return !1;
          }
          return !0;
        }
        function un(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cn(e, t) {
          var r,
            n = un(e);
          for (e = 0; n; ) {
            if (3 === n.nodeType) {
              if (((r = e + n.textContent.length), e <= t && r >= t))
                return { node: n, offset: t - e };
              e = r;
            }
            e: {
              for (; n; ) {
                if (n.nextSibling) {
                  n = n.nextSibling;
                  break e;
                }
                n = n.parentNode;
              }
              n = void 0;
            }
            n = un(n);
          }
        }
        function dn(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? dn(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function fn() {
          for (var e = window, t = q(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var r = "string" === typeof t.contentWindow.location.href;
            } catch (n) {
              r = !1;
            }
            if (!r) break;
            t = q((e = t.contentWindow).document);
          }
          return t;
        }
        function pn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function gn(e) {
          var t = fn(),
            r = e.focusedElem,
            n = e.selectionRange;
          if (
            t !== r &&
            r &&
            r.ownerDocument &&
            dn(r.ownerDocument.documentElement, r)
          ) {
            if (null !== n && pn(r))
              if (
                ((t = n.start),
                void 0 === (e = n.end) && (e = t),
                "selectionStart" in r)
              )
                (r.selectionStart = t),
                  (r.selectionEnd = Math.min(e, r.value.length));
              else if (
                (e =
                  ((t = r.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var a = r.textContent.length,
                  o = Math.min(n.start, a);
                (n = void 0 === n.end ? o : Math.min(n.end, a)),
                  !e.extend && o > n && ((a = n), (n = o), (o = a)),
                  (a = cn(r, o));
                var l = cn(r, n);
                a &&
                  l &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== l.node ||
                    e.focusOffset !== l.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  o > n
                    ? (e.addRange(t), e.extend(l.node, l.offset))
                    : (t.setEnd(l.node, l.offset), e.addRange(t)));
              }
            for (t = [], e = r; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof r.focus && r.focus(), r = 0;
              r < t.length;
              r++
            )
              ((e = t[r]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var hn = c && "documentMode" in document && 11 >= document.documentMode,
          mn = null,
          bn = null,
          vn = null,
          yn = !1;
        function xn(e, t, r) {
          var n =
            r.window === r
              ? r.document
              : 9 === r.nodeType
              ? r
              : r.ownerDocument;
          yn ||
            null == mn ||
            mn !== q(n) ||
            ("selectionStart" in (n = mn) && pn(n)
              ? (n = { start: n.selectionStart, end: n.selectionEnd })
              : (n = {
                  anchorNode: (n = (
                    (n.ownerDocument && n.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: n.anchorOffset,
                  focusNode: n.focusNode,
                  focusOffset: n.focusOffset,
                }),
            (vn && sn(vn, n)) ||
              ((vn = n),
              0 < (n = Kn(bn, "onSelect")).length &&
                ((t = new ur("onSelect", "select", null, t, r)),
                e.push({ event: t, listeners: n }),
                (t.target = mn))));
        }
        function kn(e, t) {
          var r = {};
          return (
            (r[e.toLowerCase()] = t.toLowerCase()),
            (r["Webkit" + e] = "webkit" + t),
            (r["Moz" + e] = "moz" + t),
            r
          );
        }
        var wn = {
            animationend: kn("Animation", "AnimationEnd"),
            animationiteration: kn("Animation", "AnimationIteration"),
            animationstart: kn("Animation", "AnimationStart"),
            transitionend: kn("Transition", "TransitionEnd"),
          },
          Nn = {},
          Sn = {};
        function jn(e) {
          if (Nn[e]) return Nn[e];
          if (!wn[e]) return e;
          var t,
            r = wn[e];
          for (t in r)
            if (r.hasOwnProperty(t) && t in Sn) return (Nn[e] = r[t]);
          return e;
        }
        c &&
          ((Sn = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete wn.animationend.animation,
            delete wn.animationiteration.animation,
            delete wn.animationstart.animation),
          "TransitionEvent" in window || delete wn.transitionend.transition);
        var Cn = jn("animationend"),
          En = jn("animationiteration"),
          Pn = jn("animationstart"),
          _n = jn("transitionend"),
          zn = new Map(),
          Tn =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Ln(e, t) {
          zn.set(e, t), s(t, [e]);
        }
        for (var Mn = 0; Mn < Tn.length; Mn++) {
          var On = Tn[Mn];
          Ln(On.toLowerCase(), "on" + (On[0].toUpperCase() + On.slice(1)));
        }
        Ln(Cn, "onAnimationEnd"),
          Ln(En, "onAnimationIteration"),
          Ln(Pn, "onAnimationStart"),
          Ln("dblclick", "onDoubleClick"),
          Ln("focusin", "onFocus"),
          Ln("focusout", "onBlur"),
          Ln(_n, "onTransitionEnd"),
          u("onMouseEnter", ["mouseout", "mouseover"]),
          u("onMouseLeave", ["mouseout", "mouseover"]),
          u("onPointerEnter", ["pointerout", "pointerover"]),
          u("onPointerLeave", ["pointerout", "pointerover"]),
          s(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          s(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          s("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          s(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Rn =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          In = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Rn)
          );
        function Dn(e, t, r) {
          var n = e.type || "unknown-event";
          (e.currentTarget = r),
            (function (e, t, r, n, a, l, i, s, u) {
              if ((He.apply(this, arguments), Ie)) {
                if (!Ie) throw Error(o(198));
                var c = De;
                (Ie = !1), (De = null), Fe || ((Fe = !0), (Ae = c));
              }
            })(n, t, void 0, e),
            (e.currentTarget = null);
        }
        function Fn(e, t) {
          t = 0 !== (4 & t);
          for (var r = 0; r < e.length; r++) {
            var n = e[r],
              a = n.event;
            n = n.listeners;
            e: {
              var o = void 0;
              if (t)
                for (var l = n.length - 1; 0 <= l; l--) {
                  var i = n[l],
                    s = i.instance,
                    u = i.currentTarget;
                  if (((i = i.listener), s !== o && a.isPropagationStopped()))
                    break e;
                  Dn(a, i, u), (o = s);
                }
              else
                for (l = 0; l < n.length; l++) {
                  if (
                    ((s = (i = n[l]).instance),
                    (u = i.currentTarget),
                    (i = i.listener),
                    s !== o && a.isPropagationStopped())
                  )
                    break e;
                  Dn(a, i, u), (o = s);
                }
            }
          }
          if (Fe) throw ((e = Ae), (Fe = !1), (Ae = null), e);
        }
        function An(e, t) {
          var r = t[ha];
          void 0 === r && (r = t[ha] = new Set());
          var n = e + "__bubble";
          r.has(n) || (Vn(t, e, 2, !1), r.add(n));
        }
        function Bn(e, t, r) {
          var n = 0;
          t && (n |= 4), Vn(r, e, n, t);
        }
        var Hn = "_reactListening" + Math.random().toString(36).slice(2);
        function Un(e) {
          if (!e[Hn]) {
            (e[Hn] = !0),
              l.forEach(function (t) {
                "selectionchange" !== t &&
                  (In.has(t) || Bn(t, !1, e), Bn(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Hn] || ((t[Hn] = !0), Bn("selectionchange", !1, t));
          }
        }
        function Vn(e, t, r, n) {
          switch (Yt(t)) {
            case 1:
              var a = $t;
              break;
            case 4:
              a = Kt;
              break;
            default:
              a = Qt;
          }
          (r = a.bind(null, t, r, e)),
            (a = void 0),
            !Me ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            n
              ? void 0 !== a
                ? e.addEventListener(t, r, { capture: !0, passive: a })
                : e.addEventListener(t, r, !0)
              : void 0 !== a
              ? e.addEventListener(t, r, { passive: a })
              : e.addEventListener(t, r, !1);
        }
        function Wn(e, t, r, n, a) {
          var o = n;
          if (0 === (1 & t) && 0 === (2 & t) && null !== n)
            e: for (;;) {
              if (null === n) return;
              var l = n.tag;
              if (3 === l || 4 === l) {
                var i = n.stateNode.containerInfo;
                if (i === a || (8 === i.nodeType && i.parentNode === a)) break;
                if (4 === l)
                  for (l = n.return; null !== l; ) {
                    var s = l.tag;
                    if (
                      (3 === s || 4 === s) &&
                      ((s = l.stateNode.containerInfo) === a ||
                        (8 === s.nodeType && s.parentNode === a))
                    )
                      return;
                    l = l.return;
                  }
                for (; null !== i; ) {
                  if (null === (l = va(i))) return;
                  if (5 === (s = l.tag) || 6 === s) {
                    n = o = l;
                    continue e;
                  }
                  i = i.parentNode;
                }
              }
              n = n.return;
            }
          Te(function () {
            var n = o,
              a = ke(r),
              l = [];
            e: {
              var i = zn.get(e);
              if (void 0 !== i) {
                var s = ur,
                  u = e;
                switch (e) {
                  case "keypress":
                    if (0 === tr(r)) break e;
                  case "keydown":
                  case "keyup":
                    s = Cr;
                    break;
                  case "focusin":
                    (u = "focus"), (s = hr);
                    break;
                  case "focusout":
                    (u = "blur"), (s = hr);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    s = hr;
                    break;
                  case "click":
                    if (2 === r.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    s = pr;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    s = gr;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    s = Pr;
                    break;
                  case Cn:
                  case En:
                  case Pn:
                    s = mr;
                    break;
                  case _n:
                    s = _r;
                    break;
                  case "scroll":
                    s = dr;
                    break;
                  case "wheel":
                    s = Tr;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    s = vr;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    s = Er;
                }
                var c = 0 !== (4 & t),
                  d = !c && "scroll" === e,
                  f = c ? (null !== i ? i + "Capture" : null) : i;
                c = [];
                for (var p, g = n; null !== g; ) {
                  var h = (p = g).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== h &&
                      ((p = h),
                      null !== f &&
                        null != (h = Le(g, f)) &&
                        c.push($n(g, h, p))),
                    d)
                  )
                    break;
                  g = g.return;
                }
                0 < c.length &&
                  ((i = new s(i, u, null, r, a)),
                  l.push({ event: i, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((s = "mouseout" === e || "pointerout" === e),
                (!(i = "mouseover" === e || "pointerover" === e) ||
                  r === xe ||
                  !(u = r.relatedTarget || r.fromElement) ||
                  (!va(u) && !u[ga])) &&
                  (s || i) &&
                  ((i =
                    a.window === a
                      ? a
                      : (i = a.ownerDocument)
                      ? i.defaultView || i.parentWindow
                      : window),
                  s
                    ? ((s = n),
                      null !==
                        (u = (u = r.relatedTarget || r.toElement)
                          ? va(u)
                          : null) &&
                        (u !== (d = Ue(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                        (u = null))
                    : ((s = null), (u = n)),
                  s !== u))
              ) {
                if (
                  ((c = pr),
                  (h = "onMouseLeave"),
                  (f = "onMouseEnter"),
                  (g = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = Er),
                    (h = "onPointerLeave"),
                    (f = "onPointerEnter"),
                    (g = "pointer")),
                  (d = null == s ? i : xa(s)),
                  (p = null == u ? i : xa(u)),
                  ((i = new c(h, g + "leave", s, r, a)).target = d),
                  (i.relatedTarget = p),
                  (h = null),
                  va(a) === n &&
                    (((c = new c(f, g + "enter", u, r, a)).target = p),
                    (c.relatedTarget = d),
                    (h = c)),
                  (d = h),
                  s && u)
                )
                  e: {
                    for (f = u, g = 0, p = c = s; p; p = Qn(p)) g++;
                    for (p = 0, h = f; h; h = Qn(h)) p++;
                    for (; 0 < g - p; ) (c = Qn(c)), g--;
                    for (; 0 < p - g; ) (f = Qn(f)), p--;
                    for (; g--; ) {
                      if (c === f || (null !== f && c === f.alternate)) break e;
                      (c = Qn(c)), (f = Qn(f));
                    }
                    c = null;
                  }
                else c = null;
                null !== s && qn(l, i, s, c, !1),
                  null !== u && null !== d && qn(l, d, u, c, !0);
              }
              if (
                "select" ===
                  (s =
                    (i = n ? xa(n) : window).nodeName &&
                    i.nodeName.toLowerCase()) ||
                ("input" === s && "file" === i.type)
              )
                var m = Gr;
              else if (Vr(i))
                if (Yr) m = on;
                else {
                  m = nn;
                  var b = rn;
                }
              else
                (s = i.nodeName) &&
                  "input" === s.toLowerCase() &&
                  ("checkbox" === i.type || "radio" === i.type) &&
                  (m = an);
              switch (
                (m && (m = m(e, n))
                  ? Wr(l, m, r, a)
                  : (b && b(e, i, n),
                    "focusout" === e &&
                      (b = i._wrapperState) &&
                      b.controlled &&
                      "number" === i.type &&
                      ee(i, "number", i.value)),
                (b = n ? xa(n) : window),
                e)
              ) {
                case "focusin":
                  (Vr(b) || "true" === b.contentEditable) &&
                    ((mn = b), (bn = n), (vn = null));
                  break;
                case "focusout":
                  vn = bn = mn = null;
                  break;
                case "mousedown":
                  yn = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (yn = !1), xn(l, r, a);
                  break;
                case "selectionchange":
                  if (hn) break;
                case "keydown":
                case "keyup":
                  xn(l, r, a);
              }
              var v;
              if (Mr)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var y = "onCompositionStart";
                      break e;
                    case "compositionend":
                      y = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      y = "onCompositionUpdate";
                      break e;
                  }
                  y = void 0;
                }
              else
                Hr
                  ? Ar(e, r) && (y = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === r.keyCode &&
                    (y = "onCompositionStart");
              y &&
                (Ir &&
                  "ko" !== r.locale &&
                  (Hr || "onCompositionStart" !== y
                    ? "onCompositionEnd" === y && Hr && (v = er())
                    : ((Jt = "value" in (Xt = a) ? Xt.value : Xt.textContent),
                      (Hr = !0))),
                0 < (b = Kn(n, y)).length &&
                  ((y = new yr(y, e, null, r, a)),
                  l.push({ event: y, listeners: b }),
                  v ? (y.data = v) : null !== (v = Br(r)) && (y.data = v))),
                (v = Rr
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Br(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Fr = !0), Dr);
                        case "textInput":
                          return (e = t.data) === Dr && Fr ? null : e;
                        default:
                          return null;
                      }
                    })(e, r)
                  : (function (e, t) {
                      if (Hr)
                        return "compositionend" === e || (!Mr && Ar(e, t))
                          ? ((e = er()), (Zt = Jt = Xt = null), (Hr = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Ir && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, r)) &&
                  0 < (n = Kn(n, "onBeforeInput")).length &&
                  ((a = new yr("onBeforeInput", "beforeinput", null, r, a)),
                  l.push({ event: a, listeners: n }),
                  (a.data = v));
            }
            Fn(l, t);
          });
        }
        function $n(e, t, r) {
          return { instance: e, listener: t, currentTarget: r };
        }
        function Kn(e, t) {
          for (var r = t + "Capture", n = []; null !== e; ) {
            var a = e,
              o = a.stateNode;
            5 === a.tag &&
              null !== o &&
              ((a = o),
              null != (o = Le(e, r)) && n.unshift($n(e, o, a)),
              null != (o = Le(e, t)) && n.push($n(e, o, a))),
              (e = e.return);
          }
          return n;
        }
        function Qn(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function qn(e, t, r, n, a) {
          for (var o = t._reactName, l = []; null !== r && r !== n; ) {
            var i = r,
              s = i.alternate,
              u = i.stateNode;
            if (null !== s && s === n) break;
            5 === i.tag &&
              null !== u &&
              ((i = u),
              a
                ? null != (s = Le(r, o)) && l.unshift($n(r, s, i))
                : a || (null != (s = Le(r, o)) && l.push($n(r, s, i)))),
              (r = r.return);
          }
          0 !== l.length && e.push({ event: t, listeners: l });
        }
        var Gn = /\r\n?/g,
          Yn = /\u0000|\uFFFD/g;
        function Xn(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Gn, "\n")
            .replace(Yn, "");
        }
        function Jn(e, t, r) {
          if (((t = Xn(t)), Xn(e) !== t && r)) throw Error(o(425));
        }
        function Zn() {}
        var ea = null,
          ta = null;
        function ra(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var na = "function" === typeof setTimeout ? setTimeout : void 0,
          aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
          oa = "function" === typeof Promise ? Promise : void 0,
          la =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof oa
              ? function (e) {
                  return oa.resolve(null).then(e).catch(ia);
                }
              : na;
        function ia(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function sa(e, t) {
          var r = t,
            n = 0;
          do {
            var a = r.nextSibling;
            if ((e.removeChild(r), a && 8 === a.nodeType))
              if ("/$" === (r = a.data)) {
                if (0 === n) return e.removeChild(a), void Ut(t);
                n--;
              } else ("$" !== r && "$?" !== r && "$!" !== r) || n++;
            r = a;
          } while (r);
          Ut(t);
        }
        function ua(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ca(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var r = e.data;
              if ("$" === r || "$!" === r || "$?" === r) {
                if (0 === t) return e;
                t--;
              } else "/$" === r && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var da = Math.random().toString(36).slice(2),
          fa = "__reactFiber$" + da,
          pa = "__reactProps$" + da,
          ga = "__reactContainer$" + da,
          ha = "__reactEvents$" + da,
          ma = "__reactListeners$" + da,
          ba = "__reactHandles$" + da;
        function va(e) {
          var t = e[fa];
          if (t) return t;
          for (var r = e.parentNode; r; ) {
            if ((t = r[ga] || r[fa])) {
              if (
                ((r = t.alternate),
                null !== t.child || (null !== r && null !== r.child))
              )
                for (e = ca(e); null !== e; ) {
                  if ((r = e[fa])) return r;
                  e = ca(e);
                }
              return t;
            }
            r = (e = r).parentNode;
          }
          return null;
        }
        function ya(e) {
          return !(e = e[fa] || e[ga]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function xa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(o(33));
        }
        function ka(e) {
          return e[pa] || null;
        }
        var wa = [],
          Na = -1;
        function Sa(e) {
          return { current: e };
        }
        function ja(e) {
          0 > Na || ((e.current = wa[Na]), (wa[Na] = null), Na--);
        }
        function Ca(e, t) {
          Na++, (wa[Na] = e.current), (e.current = t);
        }
        var Ea = {},
          Pa = Sa(Ea),
          _a = Sa(!1),
          za = Ea;
        function Ta(e, t) {
          var r = e.type.contextTypes;
          if (!r) return Ea;
          var n = e.stateNode;
          if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
            return n.__reactInternalMemoizedMaskedChildContext;
          var a,
            o = {};
          for (a in r) o[a] = t[a];
          return (
            n &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            o
          );
        }
        function La(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Ma() {
          ja(_a), ja(Pa);
        }
        function Oa(e, t, r) {
          if (Pa.current !== Ea) throw Error(o(168));
          Ca(Pa, t), Ca(_a, r);
        }
        function Ra(e, t, r) {
          var n = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof n.getChildContext)
          )
            return r;
          for (var a in (n = n.getChildContext()))
            if (!(a in t)) throw Error(o(108, V(e) || "Unknown", a));
          return D({}, r, n);
        }
        function Ia(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Ea),
            (za = Pa.current),
            Ca(Pa, e),
            Ca(_a, _a.current),
            !0
          );
        }
        function Da(e, t, r) {
          var n = e.stateNode;
          if (!n) throw Error(o(169));
          r
            ? ((e = Ra(e, t, za)),
              (n.__reactInternalMemoizedMergedChildContext = e),
              ja(_a),
              ja(Pa),
              Ca(Pa, e))
            : ja(_a),
            Ca(_a, r);
        }
        var Fa = null,
          Aa = !1,
          Ba = !1;
        function Ha(e) {
          null === Fa ? (Fa = [e]) : Fa.push(e);
        }
        function Ua() {
          if (!Ba && null !== Fa) {
            Ba = !0;
            var e = 0,
              t = yt;
            try {
              var r = Fa;
              for (yt = 1; e < r.length; e++) {
                var n = r[e];
                do {
                  n = n(!0);
                } while (null !== n);
              }
              (Fa = null), (Aa = !1);
            } catch (a) {
              throw (null !== Fa && (Fa = Fa.slice(e + 1)), Qe(Ze, Ua), a);
            } finally {
              (yt = t), (Ba = !1);
            }
          }
          return null;
        }
        var Va = [],
          Wa = 0,
          $a = null,
          Ka = 0,
          Qa = [],
          qa = 0,
          Ga = null,
          Ya = 1,
          Xa = "";
        function Ja(e, t) {
          (Va[Wa++] = Ka), (Va[Wa++] = $a), ($a = e), (Ka = t);
        }
        function Za(e, t, r) {
          (Qa[qa++] = Ya), (Qa[qa++] = Xa), (Qa[qa++] = Ga), (Ga = e);
          var n = Ya;
          e = Xa;
          var a = 32 - lt(n) - 1;
          (n &= ~(1 << a)), (r += 1);
          var o = 32 - lt(t) + a;
          if (30 < o) {
            var l = a - (a % 5);
            (o = (n & ((1 << l) - 1)).toString(32)),
              (n >>= l),
              (a -= l),
              (Ya = (1 << (32 - lt(t) + a)) | (r << a) | n),
              (Xa = o + e);
          } else (Ya = (1 << o) | (r << a) | n), (Xa = e);
        }
        function eo(e) {
          null !== e.return && (Ja(e, 1), Za(e, 1, 0));
        }
        function to(e) {
          for (; e === $a; )
            ($a = Va[--Wa]), (Va[Wa] = null), (Ka = Va[--Wa]), (Va[Wa] = null);
          for (; e === Ga; )
            (Ga = Qa[--qa]),
              (Qa[qa] = null),
              (Xa = Qa[--qa]),
              (Qa[qa] = null),
              (Ya = Qa[--qa]),
              (Qa[qa] = null);
        }
        var ro = null,
          no = null,
          ao = !1,
          oo = null;
        function lo(e, t) {
          var r = Lu(5, null, null, 0);
          (r.elementType = "DELETED"),
            (r.stateNode = t),
            (r.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [r]), (e.flags |= 16))
              : t.push(r);
        }
        function io(e, t) {
          switch (e.tag) {
            case 5:
              var r = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    r.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (ro = e), (no = ua(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (ro = e), (no = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((r = null !== Ga ? { id: Ya, overflow: Xa } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: r,
                  retryLane: 1073741824,
                }),
                ((r = Lu(18, null, null, 0)).stateNode = t),
                (r.return = e),
                (e.child = r),
                (ro = e),
                (no = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function so(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function uo(e) {
          if (ao) {
            var t = no;
            if (t) {
              var r = t;
              if (!io(e, t)) {
                if (so(e)) throw Error(o(418));
                t = ua(r.nextSibling);
                var n = ro;
                t && io(e, t)
                  ? lo(n, r)
                  : ((e.flags = (-4097 & e.flags) | 2), (ao = !1), (ro = e));
              }
            } else {
              if (so(e)) throw Error(o(418));
              (e.flags = (-4097 & e.flags) | 2), (ao = !1), (ro = e);
            }
          }
        }
        function co(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          ro = e;
        }
        function fo(e) {
          if (e !== ro) return !1;
          if (!ao) return co(e), (ao = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !ra(e.type, e.memoizedProps)),
            t && (t = no))
          ) {
            if (so(e)) throw (po(), Error(o(418)));
            for (; t; ) lo(e, t), (t = ua(t.nextSibling));
          }
          if ((co(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(o(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var r = e.data;
                  if ("/$" === r) {
                    if (0 === t) {
                      no = ua(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== r && "$!" !== r && "$?" !== r) || t++;
                }
                e = e.nextSibling;
              }
              no = null;
            }
          } else no = ro ? ua(e.stateNode.nextSibling) : null;
          return !0;
        }
        function po() {
          for (var e = no; e; ) e = ua(e.nextSibling);
        }
        function go() {
          (no = ro = null), (ao = !1);
        }
        function ho(e) {
          null === oo ? (oo = [e]) : oo.push(e);
        }
        var mo = x.ReactCurrentBatchConfig;
        function bo(e, t) {
          if (e && e.defaultProps) {
            for (var r in ((t = D({}, t)), (e = e.defaultProps)))
              void 0 === t[r] && (t[r] = e[r]);
            return t;
          }
          return t;
        }
        var vo = Sa(null),
          yo = null,
          xo = null,
          ko = null;
        function wo() {
          ko = xo = yo = null;
        }
        function No(e) {
          var t = vo.current;
          ja(vo), (e._currentValue = t);
        }
        function So(e, t, r) {
          for (; null !== e; ) {
            var n = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== n && (n.childLanes |= t))
                : null !== n && (n.childLanes & t) !== t && (n.childLanes |= t),
              e === r)
            )
              break;
            e = e.return;
          }
        }
        function jo(e, t) {
          (yo = e),
            (ko = xo = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (xi = !0), (e.firstContext = null));
        }
        function Co(e) {
          var t = e._currentValue;
          if (ko !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === xo)
            ) {
              if (null === yo) throw Error(o(308));
              (xo = e), (yo.dependencies = { lanes: 0, firstContext: e });
            } else xo = xo.next = e;
          return t;
        }
        var Eo = null;
        function Po(e) {
          null === Eo ? (Eo = [e]) : Eo.push(e);
        }
        function _o(e, t, r, n) {
          var a = t.interleaved;
          return (
            null === a
              ? ((r.next = r), Po(t))
              : ((r.next = a.next), (a.next = r)),
            (t.interleaved = r),
            zo(e, n)
          );
        }
        function zo(e, t) {
          e.lanes |= t;
          var r = e.alternate;
          for (null !== r && (r.lanes |= t), r = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (r = e.alternate) && (r.childLanes |= t),
              (r = e),
              (e = e.return);
          return 3 === r.tag ? r.stateNode : null;
        }
        var To = !1;
        function Lo(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Mo(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Oo(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Ro(e, t, r) {
          var n = e.updateQueue;
          if (null === n) return null;
          if (((n = n.shared), 0 !== (2 & _s))) {
            var a = n.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (n.pending = t),
              zo(e, r)
            );
          }
          return (
            null === (a = n.interleaved)
              ? ((t.next = t), Po(n))
              : ((t.next = a.next), (a.next = t)),
            (n.interleaved = t),
            zo(e, r)
          );
        }
        function Io(e, t, r) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & r))
          ) {
            var n = t.lanes;
            (r |= n &= e.pendingLanes), (t.lanes = r), vt(e, r);
          }
        }
        function Do(e, t) {
          var r = e.updateQueue,
            n = e.alternate;
          if (null !== n && r === (n = n.updateQueue)) {
            var a = null,
              o = null;
            if (null !== (r = r.firstBaseUpdate)) {
              do {
                var l = {
                  eventTime: r.eventTime,
                  lane: r.lane,
                  tag: r.tag,
                  payload: r.payload,
                  callback: r.callback,
                  next: null,
                };
                null === o ? (a = o = l) : (o = o.next = l), (r = r.next);
              } while (null !== r);
              null === o ? (a = o = t) : (o = o.next = t);
            } else a = o = t;
            return (
              (r = {
                baseState: n.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: o,
                shared: n.shared,
                effects: n.effects,
              }),
              void (e.updateQueue = r)
            );
          }
          null === (e = r.lastBaseUpdate)
            ? (r.firstBaseUpdate = t)
            : (e.next = t),
            (r.lastBaseUpdate = t);
        }
        function Fo(e, t, r, n) {
          var a = e.updateQueue;
          To = !1;
          var o = a.firstBaseUpdate,
            l = a.lastBaseUpdate,
            i = a.shared.pending;
          if (null !== i) {
            a.shared.pending = null;
            var s = i,
              u = s.next;
            (s.next = null), null === l ? (o = u) : (l.next = u), (l = s);
            var c = e.alternate;
            null !== c &&
              (i = (c = c.updateQueue).lastBaseUpdate) !== l &&
              (null === i ? (c.firstBaseUpdate = u) : (i.next = u),
              (c.lastBaseUpdate = s));
          }
          if (null !== o) {
            var d = a.baseState;
            for (l = 0, c = u = s = null, i = o; ; ) {
              var f = i.lane,
                p = i.eventTime;
              if ((n & f) === f) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: i.tag,
                      payload: i.payload,
                      callback: i.callback,
                      next: null,
                    });
                e: {
                  var g = e,
                    h = i;
                  switch (((f = t), (p = r), h.tag)) {
                    case 1:
                      if ("function" === typeof (g = h.payload)) {
                        d = g.call(p, d, f);
                        break e;
                      }
                      d = g;
                      break e;
                    case 3:
                      g.flags = (-65537 & g.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (f =
                            "function" === typeof (g = h.payload)
                              ? g.call(p, d, f)
                              : g) ||
                        void 0 === f
                      )
                        break e;
                      d = D({}, d, f);
                      break e;
                    case 2:
                      To = !0;
                  }
                }
                null !== i.callback &&
                  0 !== i.lane &&
                  ((e.flags |= 64),
                  null === (f = a.effects) ? (a.effects = [i]) : f.push(i));
              } else
                (p = {
                  eventTime: p,
                  lane: f,
                  tag: i.tag,
                  payload: i.payload,
                  callback: i.callback,
                  next: null,
                }),
                  null === c ? ((u = c = p), (s = d)) : (c = c.next = p),
                  (l |= f);
              if (null === (i = i.next)) {
                if (null === (i = a.shared.pending)) break;
                (i = (f = i).next),
                  (f.next = null),
                  (a.lastBaseUpdate = f),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === c && (s = d),
              (a.baseState = s),
              (a.firstBaseUpdate = u),
              (a.lastBaseUpdate = c),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (l |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === o && (a.shared.lanes = 0);
            (Ds |= l), (e.lanes = l), (e.memoizedState = d);
          }
        }
        function Ao(e, t, r) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var n = e[t],
                a = n.callback;
              if (null !== a) {
                if (((n.callback = null), (n = r), "function" !== typeof a))
                  throw Error(o(191, a));
                a.call(n);
              }
            }
        }
        var Bo = new n.Component().refs;
        function Ho(e, t, r, n) {
          (r =
            null === (r = r(n, (t = e.memoizedState))) || void 0 === r
              ? t
              : D({}, t, r)),
            (e.memoizedState = r),
            0 === e.lanes && (e.updateQueue.baseState = r);
        }
        var Uo = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Ue(e) === e;
          },
          enqueueSetState: function (e, t, r) {
            e = e._reactInternals;
            var n = tu(),
              a = ru(e),
              o = Oo(n, a);
            (o.payload = t),
              void 0 !== r && null !== r && (o.callback = r),
              null !== (t = Ro(e, o, a)) && (nu(t, e, a, n), Io(t, e, a));
          },
          enqueueReplaceState: function (e, t, r) {
            e = e._reactInternals;
            var n = tu(),
              a = ru(e),
              o = Oo(n, a);
            (o.tag = 1),
              (o.payload = t),
              void 0 !== r && null !== r && (o.callback = r),
              null !== (t = Ro(e, o, a)) && (nu(t, e, a, n), Io(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var r = tu(),
              n = ru(e),
              a = Oo(r, n);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = Ro(e, a, n)) && (nu(t, e, n, r), Io(t, e, n));
          },
        };
        function Vo(e, t, r, n, a, o, l) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(n, o, l)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !sn(r, n) ||
                !sn(a, o);
        }
        function Wo(e, t, r) {
          var n = !1,
            a = Ea,
            o = t.contextType;
          return (
            "object" === typeof o && null !== o
              ? (o = Co(o))
              : ((a = La(t) ? za : Pa.current),
                (o = (n = null !== (n = t.contextTypes) && void 0 !== n)
                  ? Ta(e, a)
                  : Ea)),
            (t = new t(r, o)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Uo),
            (e.stateNode = t),
            (t._reactInternals = e),
            n &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            t
          );
        }
        function $o(e, t, r, n) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(r, n),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(r, n),
            t.state !== e && Uo.enqueueReplaceState(t, t.state, null);
        }
        function Ko(e, t, r, n) {
          var a = e.stateNode;
          (a.props = r), (a.state = e.memoizedState), (a.refs = Bo), Lo(e);
          var o = t.contextType;
          "object" === typeof o && null !== o
            ? (a.context = Co(o))
            : ((o = La(t) ? za : Pa.current), (a.context = Ta(e, o))),
            (a.state = e.memoizedState),
            "function" === typeof (o = t.getDerivedStateFromProps) &&
              (Ho(e, t, o, r), (a.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((t = a.state),
              "function" === typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && Uo.enqueueReplaceState(a, a.state, null),
              Fo(e, r, a, n),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function Qo(e, t, r) {
          if (
            null !== (e = r.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (r._owner) {
              if ((r = r._owner)) {
                if (1 !== r.tag) throw Error(o(309));
                var n = r.stateNode;
              }
              if (!n) throw Error(o(147, e));
              var a = n,
                l = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === l
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    t === Bo && (t = a.refs = {}),
                      null === e ? delete t[l] : (t[l] = e);
                  }),
                  (t._stringRef = l),
                  t);
            }
            if ("string" !== typeof e) throw Error(o(284));
            if (!r._owner) throw Error(o(290, e));
          }
          return e;
        }
        function qo(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              o(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function Go(e) {
          return (0, e._init)(e._payload);
        }
        function Yo(e) {
          function t(t, r) {
            if (e) {
              var n = t.deletions;
              null === n ? ((t.deletions = [r]), (t.flags |= 16)) : n.push(r);
            }
          }
          function r(r, n) {
            if (!e) return null;
            for (; null !== n; ) t(r, n), (n = n.sibling);
            return null;
          }
          function n(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = Ou(e, t)).index = 0), (e.sibling = null), e;
          }
          function l(t, r, n) {
            return (
              (t.index = n),
              e
                ? null !== (n = t.alternate)
                  ? (n = n.index) < r
                    ? ((t.flags |= 2), r)
                    : n
                  : ((t.flags |= 2), r)
                : ((t.flags |= 1048576), r)
            );
          }
          function i(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function s(e, t, r, n) {
            return null === t || 6 !== t.tag
              ? (((t = Fu(r, e.mode, n)).return = e), t)
              : (((t = a(t, r)).return = e), t);
          }
          function u(e, t, r, n) {
            var o = r.type;
            return o === N
              ? d(e, t, r.props.children, n, r.key)
              : null !== t &&
                (t.elementType === o ||
                  ("object" === typeof o &&
                    null !== o &&
                    o.$$typeof === L &&
                    Go(o) === t.type))
              ? (((n = a(t, r.props)).ref = Qo(e, t, r)), (n.return = e), n)
              : (((n = Ru(r.type, r.key, r.props, null, e.mode, n)).ref = Qo(
                  e,
                  t,
                  r
                )),
                (n.return = e),
                n);
          }
          function c(e, t, r, n) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== r.containerInfo ||
              t.stateNode.implementation !== r.implementation
              ? (((t = Au(r, e.mode, n)).return = e), t)
              : (((t = a(t, r.children || [])).return = e), t);
          }
          function d(e, t, r, n, o) {
            return null === t || 7 !== t.tag
              ? (((t = Iu(r, e.mode, n, o)).return = e), t)
              : (((t = a(t, r)).return = e), t);
          }
          function f(e, t, r) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Fu("" + t, e.mode, r)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case k:
                  return (
                    ((r = Ru(t.type, t.key, t.props, null, e.mode, r)).ref = Qo(
                      e,
                      null,
                      t
                    )),
                    (r.return = e),
                    r
                  );
                case w:
                  return ((t = Au(t, e.mode, r)).return = e), t;
                case L:
                  return f(e, (0, t._init)(t._payload), r);
              }
              if (te(t) || R(t))
                return ((t = Iu(t, e.mode, r, null)).return = e), t;
              qo(e, t);
            }
            return null;
          }
          function p(e, t, r, n) {
            var a = null !== t ? t.key : null;
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return null !== a ? null : s(e, t, "" + r, n);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case k:
                  return r.key === a ? u(e, t, r, n) : null;
                case w:
                  return r.key === a ? c(e, t, r, n) : null;
                case L:
                  return p(e, t, (a = r._init)(r._payload), n);
              }
              if (te(r) || R(r)) return null !== a ? null : d(e, t, r, n, null);
              qo(e, r);
            }
            return null;
          }
          function g(e, t, r, n, a) {
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return s(t, (e = e.get(r) || null), "" + n, a);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case k:
                  return u(
                    t,
                    (e = e.get(null === n.key ? r : n.key) || null),
                    n,
                    a
                  );
                case w:
                  return c(
                    t,
                    (e = e.get(null === n.key ? r : n.key) || null),
                    n,
                    a
                  );
                case L:
                  return g(e, t, r, (0, n._init)(n._payload), a);
              }
              if (te(n) || R(n))
                return d(t, (e = e.get(r) || null), n, a, null);
              qo(t, n);
            }
            return null;
          }
          function h(a, o, i, s) {
            for (
              var u = null, c = null, d = o, h = (o = 0), m = null;
              null !== d && h < i.length;
              h++
            ) {
              d.index > h ? ((m = d), (d = null)) : (m = d.sibling);
              var b = p(a, d, i[h], s);
              if (null === b) {
                null === d && (d = m);
                break;
              }
              e && d && null === b.alternate && t(a, d),
                (o = l(b, o, h)),
                null === c ? (u = b) : (c.sibling = b),
                (c = b),
                (d = m);
            }
            if (h === i.length) return r(a, d), ao && Ja(a, h), u;
            if (null === d) {
              for (; h < i.length; h++)
                null !== (d = f(a, i[h], s)) &&
                  ((o = l(d, o, h)),
                  null === c ? (u = d) : (c.sibling = d),
                  (c = d));
              return ao && Ja(a, h), u;
            }
            for (d = n(a, d); h < i.length; h++)
              null !== (m = g(d, a, h, i[h], s)) &&
                (e &&
                  null !== m.alternate &&
                  d.delete(null === m.key ? h : m.key),
                (o = l(m, o, h)),
                null === c ? (u = m) : (c.sibling = m),
                (c = m));
            return (
              e &&
                d.forEach(function (e) {
                  return t(a, e);
                }),
              ao && Ja(a, h),
              u
            );
          }
          function m(a, i, s, u) {
            var c = R(s);
            if ("function" !== typeof c) throw Error(o(150));
            if (null == (s = c.call(s))) throw Error(o(151));
            for (
              var d = (c = null), h = i, m = (i = 0), b = null, v = s.next();
              null !== h && !v.done;
              m++, v = s.next()
            ) {
              h.index > m ? ((b = h), (h = null)) : (b = h.sibling);
              var y = p(a, h, v.value, u);
              if (null === y) {
                null === h && (h = b);
                break;
              }
              e && h && null === y.alternate && t(a, h),
                (i = l(y, i, m)),
                null === d ? (c = y) : (d.sibling = y),
                (d = y),
                (h = b);
            }
            if (v.done) return r(a, h), ao && Ja(a, m), c;
            if (null === h) {
              for (; !v.done; m++, v = s.next())
                null !== (v = f(a, v.value, u)) &&
                  ((i = l(v, i, m)),
                  null === d ? (c = v) : (d.sibling = v),
                  (d = v));
              return ao && Ja(a, m), c;
            }
            for (h = n(a, h); !v.done; m++, v = s.next())
              null !== (v = g(h, a, m, v.value, u)) &&
                (e &&
                  null !== v.alternate &&
                  h.delete(null === v.key ? m : v.key),
                (i = l(v, i, m)),
                null === d ? (c = v) : (d.sibling = v),
                (d = v));
            return (
              e &&
                h.forEach(function (e) {
                  return t(a, e);
                }),
              ao && Ja(a, m),
              c
            );
          }
          return function e(n, o, l, s) {
            if (
              ("object" === typeof l &&
                null !== l &&
                l.type === N &&
                null === l.key &&
                (l = l.props.children),
              "object" === typeof l && null !== l)
            ) {
              switch (l.$$typeof) {
                case k:
                  e: {
                    for (var u = l.key, c = o; null !== c; ) {
                      if (c.key === u) {
                        if ((u = l.type) === N) {
                          if (7 === c.tag) {
                            r(n, c.sibling),
                              ((o = a(c, l.props.children)).return = n),
                              (n = o);
                            break e;
                          }
                        } else if (
                          c.elementType === u ||
                          ("object" === typeof u &&
                            null !== u &&
                            u.$$typeof === L &&
                            Go(u) === c.type)
                        ) {
                          r(n, c.sibling),
                            ((o = a(c, l.props)).ref = Qo(n, c, l)),
                            (o.return = n),
                            (n = o);
                          break e;
                        }
                        r(n, c);
                        break;
                      }
                      t(n, c), (c = c.sibling);
                    }
                    l.type === N
                      ? (((o = Iu(l.props.children, n.mode, s, l.key)).return =
                          n),
                        (n = o))
                      : (((s = Ru(
                          l.type,
                          l.key,
                          l.props,
                          null,
                          n.mode,
                          s
                        )).ref = Qo(n, o, l)),
                        (s.return = n),
                        (n = s));
                  }
                  return i(n);
                case w:
                  e: {
                    for (c = l.key; null !== o; ) {
                      if (o.key === c) {
                        if (
                          4 === o.tag &&
                          o.stateNode.containerInfo === l.containerInfo &&
                          o.stateNode.implementation === l.implementation
                        ) {
                          r(n, o.sibling),
                            ((o = a(o, l.children || [])).return = n),
                            (n = o);
                          break e;
                        }
                        r(n, o);
                        break;
                      }
                      t(n, o), (o = o.sibling);
                    }
                    ((o = Au(l, n.mode, s)).return = n), (n = o);
                  }
                  return i(n);
                case L:
                  return e(n, o, (c = l._init)(l._payload), s);
              }
              if (te(l)) return h(n, o, l, s);
              if (R(l)) return m(n, o, l, s);
              qo(n, l);
            }
            return ("string" === typeof l && "" !== l) || "number" === typeof l
              ? ((l = "" + l),
                null !== o && 6 === o.tag
                  ? (r(n, o.sibling), ((o = a(o, l)).return = n), (n = o))
                  : (r(n, o), ((o = Fu(l, n.mode, s)).return = n), (n = o)),
                i(n))
              : r(n, o);
          };
        }
        var Xo = Yo(!0),
          Jo = Yo(!1),
          Zo = {},
          el = Sa(Zo),
          tl = Sa(Zo),
          rl = Sa(Zo);
        function nl(e) {
          if (e === Zo) throw Error(o(174));
          return e;
        }
        function al(e, t) {
          switch ((Ca(rl, t), Ca(tl, e), Ca(el, Zo), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : se(null, "");
              break;
            default:
              t = se(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          ja(el), Ca(el, t);
        }
        function ol() {
          ja(el), ja(tl), ja(rl);
        }
        function ll(e) {
          nl(rl.current);
          var t = nl(el.current),
            r = se(t, e.type);
          t !== r && (Ca(tl, e), Ca(el, r));
        }
        function il(e) {
          tl.current === e && (ja(el), ja(tl));
        }
        var sl = Sa(0);
        function ul(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var r = t.memoizedState;
              if (
                null !== r &&
                (null === (r = r.dehydrated) ||
                  "$?" === r.data ||
                  "$!" === r.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var cl = [];
        function dl() {
          for (var e = 0; e < cl.length; e++)
            cl[e]._workInProgressVersionPrimary = null;
          cl.length = 0;
        }
        var fl = x.ReactCurrentDispatcher,
          pl = x.ReactCurrentBatchConfig,
          gl = 0,
          hl = null,
          ml = null,
          bl = null,
          vl = !1,
          yl = !1,
          xl = 0,
          kl = 0;
        function wl() {
          throw Error(o(321));
        }
        function Nl(e, t) {
          if (null === t) return !1;
          for (var r = 0; r < t.length && r < e.length; r++)
            if (!ln(e[r], t[r])) return !1;
          return !0;
        }
        function Sl(e, t, r, n, a, l) {
          if (
            ((gl = l),
            (hl = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (fl.current = null === e || null === e.memoizedState ? ii : si),
            (e = r(n, a)),
            yl)
          ) {
            l = 0;
            do {
              if (((yl = !1), (xl = 0), 25 <= l)) throw Error(o(301));
              (l += 1),
                (bl = ml = null),
                (t.updateQueue = null),
                (fl.current = ui),
                (e = r(n, a));
            } while (yl);
          }
          if (
            ((fl.current = li),
            (t = null !== ml && null !== ml.next),
            (gl = 0),
            (bl = ml = hl = null),
            (vl = !1),
            t)
          )
            throw Error(o(300));
          return e;
        }
        function jl() {
          var e = 0 !== xl;
          return (xl = 0), e;
        }
        function Cl() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === bl ? (hl.memoizedState = bl = e) : (bl = bl.next = e), bl
          );
        }
        function El() {
          if (null === ml) {
            var e = hl.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = ml.next;
          var t = null === bl ? hl.memoizedState : bl.next;
          if (null !== t) (bl = t), (ml = e);
          else {
            if (null === e) throw Error(o(310));
            (e = {
              memoizedState: (ml = e).memoizedState,
              baseState: ml.baseState,
              baseQueue: ml.baseQueue,
              queue: ml.queue,
              next: null,
            }),
              null === bl ? (hl.memoizedState = bl = e) : (bl = bl.next = e);
          }
          return bl;
        }
        function Pl(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function _l(e) {
          var t = El(),
            r = t.queue;
          if (null === r) throw Error(o(311));
          r.lastRenderedReducer = e;
          var n = ml,
            a = n.baseQueue,
            l = r.pending;
          if (null !== l) {
            if (null !== a) {
              var i = a.next;
              (a.next = l.next), (l.next = i);
            }
            (n.baseQueue = a = l), (r.pending = null);
          }
          if (null !== a) {
            (l = a.next), (n = n.baseState);
            var s = (i = null),
              u = null,
              c = l;
            do {
              var d = c.lane;
              if ((gl & d) === d)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (n = c.hasEagerState ? c.eagerState : e(n, c.action));
              else {
                var f = {
                  lane: d,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === u ? ((s = u = f), (i = n)) : (u = u.next = f),
                  (hl.lanes |= d),
                  (Ds |= d);
              }
              c = c.next;
            } while (null !== c && c !== l);
            null === u ? (i = n) : (u.next = s),
              ln(n, t.memoizedState) || (xi = !0),
              (t.memoizedState = n),
              (t.baseState = i),
              (t.baseQueue = u),
              (r.lastRenderedState = n);
          }
          if (null !== (e = r.interleaved)) {
            a = e;
            do {
              (l = a.lane), (hl.lanes |= l), (Ds |= l), (a = a.next);
            } while (a !== e);
          } else null === a && (r.lanes = 0);
          return [t.memoizedState, r.dispatch];
        }
        function zl(e) {
          var t = El(),
            r = t.queue;
          if (null === r) throw Error(o(311));
          r.lastRenderedReducer = e;
          var n = r.dispatch,
            a = r.pending,
            l = t.memoizedState;
          if (null !== a) {
            r.pending = null;
            var i = (a = a.next);
            do {
              (l = e(l, i.action)), (i = i.next);
            } while (i !== a);
            ln(l, t.memoizedState) || (xi = !0),
              (t.memoizedState = l),
              null === t.baseQueue && (t.baseState = l),
              (r.lastRenderedState = l);
          }
          return [l, n];
        }
        function Tl() {}
        function Ll(e, t) {
          var r = hl,
            n = El(),
            a = t(),
            l = !ln(n.memoizedState, a);
          if (
            (l && ((n.memoizedState = a), (xi = !0)),
            (n = n.queue),
            Wl(Rl.bind(null, r, n, e), [e]),
            n.getSnapshot !== t ||
              l ||
              (null !== bl && 1 & bl.memoizedState.tag))
          ) {
            if (
              ((r.flags |= 2048),
              Al(9, Ol.bind(null, r, n, a, t), void 0, null),
              null === zs)
            )
              throw Error(o(349));
            0 !== (30 & gl) || Ml(r, t, a);
          }
          return a;
        }
        function Ml(e, t, r) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: r }),
            null === (t = hl.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (hl.updateQueue = t),
                (t.stores = [e]))
              : null === (r = t.stores)
              ? (t.stores = [e])
              : r.push(e);
        }
        function Ol(e, t, r, n) {
          (t.value = r), (t.getSnapshot = n), Il(t) && Dl(e);
        }
        function Rl(e, t, r) {
          return r(function () {
            Il(t) && Dl(e);
          });
        }
        function Il(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var r = t();
            return !ln(e, r);
          } catch (n) {
            return !0;
          }
        }
        function Dl(e) {
          var t = zo(e, 1);
          null !== t && nu(t, e, 1, -1);
        }
        function Fl(e) {
          var t = Cl();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Pl,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = ri.bind(null, hl, e)),
            [t.memoizedState, e]
          );
        }
        function Al(e, t, r, n) {
          return (
            (e = { tag: e, create: t, destroy: r, deps: n, next: null }),
            null === (t = hl.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (hl.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (r = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e)),
            e
          );
        }
        function Bl() {
          return El().memoizedState;
        }
        function Hl(e, t, r, n) {
          var a = Cl();
          (hl.flags |= e),
            (a.memoizedState = Al(1 | t, r, void 0, void 0 === n ? null : n));
        }
        function Ul(e, t, r, n) {
          var a = El();
          n = void 0 === n ? null : n;
          var o = void 0;
          if (null !== ml) {
            var l = ml.memoizedState;
            if (((o = l.destroy), null !== n && Nl(n, l.deps)))
              return void (a.memoizedState = Al(t, r, o, n));
          }
          (hl.flags |= e), (a.memoizedState = Al(1 | t, r, o, n));
        }
        function Vl(e, t) {
          return Hl(8390656, 8, e, t);
        }
        function Wl(e, t) {
          return Ul(2048, 8, e, t);
        }
        function $l(e, t) {
          return Ul(4, 2, e, t);
        }
        function Kl(e, t) {
          return Ul(4, 4, e, t);
        }
        function Ql(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function ql(e, t, r) {
          return (
            (r = null !== r && void 0 !== r ? r.concat([e]) : null),
            Ul(4, 4, Ql.bind(null, t, e), r)
          );
        }
        function Gl() {}
        function Yl(e, t) {
          var r = El();
          t = void 0 === t ? null : t;
          var n = r.memoizedState;
          return null !== n && null !== t && Nl(t, n[1])
            ? n[0]
            : ((r.memoizedState = [e, t]), e);
        }
        function Xl(e, t) {
          var r = El();
          t = void 0 === t ? null : t;
          var n = r.memoizedState;
          return null !== n && null !== t && Nl(t, n[1])
            ? n[0]
            : ((e = e()), (r.memoizedState = [e, t]), e);
        }
        function Jl(e, t, r) {
          return 0 === (21 & gl)
            ? (e.baseState && ((e.baseState = !1), (xi = !0)),
              (e.memoizedState = r))
            : (ln(r, t) ||
                ((r = ht()), (hl.lanes |= r), (Ds |= r), (e.baseState = !0)),
              t);
        }
        function Zl(e, t) {
          var r = yt;
          (yt = 0 !== r && 4 > r ? r : 4), e(!0);
          var n = pl.transition;
          pl.transition = {};
          try {
            e(!1), t();
          } finally {
            (yt = r), (pl.transition = n);
          }
        }
        function ei() {
          return El().memoizedState;
        }
        function ti(e, t, r) {
          var n = ru(e);
          if (
            ((r = {
              lane: n,
              action: r,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            ni(e))
          )
            ai(t, r);
          else if (null !== (r = _o(e, t, r, n))) {
            nu(r, e, n, tu()), oi(r, t, n);
          }
        }
        function ri(e, t, r) {
          var n = ru(e),
            a = {
              lane: n,
              action: r,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (ni(e)) ai(t, a);
          else {
            var o = e.alternate;
            if (
              0 === e.lanes &&
              (null === o || 0 === o.lanes) &&
              null !== (o = t.lastRenderedReducer)
            )
              try {
                var l = t.lastRenderedState,
                  i = o(l, r);
                if (((a.hasEagerState = !0), (a.eagerState = i), ln(i, l))) {
                  var s = t.interleaved;
                  return (
                    null === s
                      ? ((a.next = a), Po(t))
                      : ((a.next = s.next), (s.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (u) {}
            null !== (r = _o(e, t, a, n)) &&
              (nu(r, e, n, (a = tu())), oi(r, t, n));
          }
        }
        function ni(e) {
          var t = e.alternate;
          return e === hl || (null !== t && t === hl);
        }
        function ai(e, t) {
          yl = vl = !0;
          var r = e.pending;
          null === r ? (t.next = t) : ((t.next = r.next), (r.next = t)),
            (e.pending = t);
        }
        function oi(e, t, r) {
          if (0 !== (4194240 & r)) {
            var n = t.lanes;
            (r |= n &= e.pendingLanes), (t.lanes = r), vt(e, r);
          }
        }
        var li = {
            readContext: Co,
            useCallback: wl,
            useContext: wl,
            useEffect: wl,
            useImperativeHandle: wl,
            useInsertionEffect: wl,
            useLayoutEffect: wl,
            useMemo: wl,
            useReducer: wl,
            useRef: wl,
            useState: wl,
            useDebugValue: wl,
            useDeferredValue: wl,
            useTransition: wl,
            useMutableSource: wl,
            useSyncExternalStore: wl,
            useId: wl,
            unstable_isNewReconciler: !1,
          },
          ii = {
            readContext: Co,
            useCallback: function (e, t) {
              return (Cl().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Co,
            useEffect: Vl,
            useImperativeHandle: function (e, t, r) {
              return (
                (r = null !== r && void 0 !== r ? r.concat([e]) : null),
                Hl(4194308, 4, Ql.bind(null, t, e), r)
              );
            },
            useLayoutEffect: function (e, t) {
              return Hl(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Hl(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var r = Cl();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (r.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, r) {
              var n = Cl();
              return (
                (t = void 0 !== r ? r(t) : t),
                (n.memoizedState = n.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (n.queue = e),
                (e = e.dispatch = ti.bind(null, hl, e)),
                [n.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Cl().memoizedState = e);
            },
            useState: Fl,
            useDebugValue: Gl,
            useDeferredValue: function (e) {
              return (Cl().memoizedState = e);
            },
            useTransition: function () {
              var e = Fl(!1),
                t = e[0];
              return (
                (e = Zl.bind(null, e[1])), (Cl().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, r) {
              var n = hl,
                a = Cl();
              if (ao) {
                if (void 0 === r) throw Error(o(407));
                r = r();
              } else {
                if (((r = t()), null === zs)) throw Error(o(349));
                0 !== (30 & gl) || Ml(n, t, r);
              }
              a.memoizedState = r;
              var l = { value: r, getSnapshot: t };
              return (
                (a.queue = l),
                Vl(Rl.bind(null, n, l, e), [e]),
                (n.flags |= 2048),
                Al(9, Ol.bind(null, n, l, r, t), void 0, null),
                r
              );
            },
            useId: function () {
              var e = Cl(),
                t = zs.identifierPrefix;
              if (ao) {
                var r = Xa;
                (t =
                  ":" +
                  t +
                  "R" +
                  (r = (Ya & ~(1 << (32 - lt(Ya) - 1))).toString(32) + r)),
                  0 < (r = xl++) && (t += "H" + r.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (r = kl++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          si = {
            readContext: Co,
            useCallback: Yl,
            useContext: Co,
            useEffect: Wl,
            useImperativeHandle: ql,
            useInsertionEffect: $l,
            useLayoutEffect: Kl,
            useMemo: Xl,
            useReducer: _l,
            useRef: Bl,
            useState: function () {
              return _l(Pl);
            },
            useDebugValue: Gl,
            useDeferredValue: function (e) {
              return Jl(El(), ml.memoizedState, e);
            },
            useTransition: function () {
              return [_l(Pl)[0], El().memoizedState];
            },
            useMutableSource: Tl,
            useSyncExternalStore: Ll,
            useId: ei,
            unstable_isNewReconciler: !1,
          },
          ui = {
            readContext: Co,
            useCallback: Yl,
            useContext: Co,
            useEffect: Wl,
            useImperativeHandle: ql,
            useInsertionEffect: $l,
            useLayoutEffect: Kl,
            useMemo: Xl,
            useReducer: zl,
            useRef: Bl,
            useState: function () {
              return zl(Pl);
            },
            useDebugValue: Gl,
            useDeferredValue: function (e) {
              var t = El();
              return null === ml
                ? (t.memoizedState = e)
                : Jl(t, ml.memoizedState, e);
            },
            useTransition: function () {
              return [zl(Pl)[0], El().memoizedState];
            },
            useMutableSource: Tl,
            useSyncExternalStore: Ll,
            useId: ei,
            unstable_isNewReconciler: !1,
          };
        function ci(e, t) {
          try {
            var r = "",
              n = t;
            do {
              (r += H(n)), (n = n.return);
            } while (n);
            var a = r;
          } catch (o) {
            a = "\nError generating stack: " + o.message + "\n" + o.stack;
          }
          return { value: e, source: t, stack: a, digest: null };
        }
        function di(e, t, r) {
          return {
            value: e,
            source: null,
            stack: null != r ? r : null,
            digest: null != t ? t : null,
          };
        }
        function fi(e, t) {
          try {
            console.error(t.value);
          } catch (r) {
            setTimeout(function () {
              throw r;
            });
          }
        }
        var pi = "function" === typeof WeakMap ? WeakMap : Map;
        function gi(e, t, r) {
          ((r = Oo(-1, r)).tag = 3), (r.payload = { element: null });
          var n = t.value;
          return (
            (r.callback = function () {
              $s || (($s = !0), (Ks = n)), fi(0, t);
            }),
            r
          );
        }
        function hi(e, t, r) {
          (r = Oo(-1, r)).tag = 3;
          var n = e.type.getDerivedStateFromError;
          if ("function" === typeof n) {
            var a = t.value;
            (r.payload = function () {
              return n(a);
            }),
              (r.callback = function () {
                fi(0, t);
              });
          }
          var o = e.stateNode;
          return (
            null !== o &&
              "function" === typeof o.componentDidCatch &&
              (r.callback = function () {
                fi(0, t),
                  "function" !== typeof n &&
                    (null === Qs ? (Qs = new Set([this])) : Qs.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            r
          );
        }
        function mi(e, t, r) {
          var n = e.pingCache;
          if (null === n) {
            n = e.pingCache = new pi();
            var a = new Set();
            n.set(t, a);
          } else void 0 === (a = n.get(t)) && ((a = new Set()), n.set(t, a));
          a.has(r) || (a.add(r), (e = Cu.bind(null, e, t, r)), t.then(e, e));
        }
        function bi(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function vi(e, t, r, n, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (r.flags |= 131072),
                  (r.flags &= -52805),
                  1 === r.tag &&
                    (null === r.alternate
                      ? (r.tag = 17)
                      : (((t = Oo(-1, 1)).tag = 2), Ro(r, t, 1))),
                  (r.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var yi = x.ReactCurrentOwner,
          xi = !1;
        function ki(e, t, r, n) {
          t.child = null === e ? Jo(t, null, r, n) : Xo(t, e.child, r, n);
        }
        function wi(e, t, r, n, a) {
          r = r.render;
          var o = t.ref;
          return (
            jo(t, a),
            (n = Sl(e, t, r, n, o, a)),
            (r = jl()),
            null === e || xi
              ? (ao && r && eo(t), (t.flags |= 1), ki(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                $i(e, t, a))
          );
        }
        function Ni(e, t, r, n, a) {
          if (null === e) {
            var o = r.type;
            return "function" !== typeof o ||
              Mu(o) ||
              void 0 !== o.defaultProps ||
              null !== r.compare ||
              void 0 !== r.defaultProps
              ? (((e = Ru(r.type, null, n, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = o), Si(e, t, o, n, a));
          }
          if (((o = e.child), 0 === (e.lanes & a))) {
            var l = o.memoizedProps;
            if (
              (r = null !== (r = r.compare) ? r : sn)(l, n) &&
              e.ref === t.ref
            )
              return $i(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = Ou(o, n)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function Si(e, t, r, n, a) {
          if (null !== e) {
            var o = e.memoizedProps;
            if (sn(o, n) && e.ref === t.ref) {
              if (((xi = !1), (t.pendingProps = n = o), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), $i(e, t, a);
              0 !== (131072 & e.flags) && (xi = !0);
            }
          }
          return Ei(e, t, r, n, a);
        }
        function ji(e, t, r) {
          var n = t.pendingProps,
            a = n.children,
            o = null !== e ? e.memoizedState : null;
          if ("hidden" === n.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Ca(Os, Ms),
                (Ms |= r);
            else {
              if (0 === (1073741824 & r))
                return (
                  (e = null !== o ? o.baseLanes | r : r),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Ca(Os, Ms),
                  (Ms |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (n = null !== o ? o.baseLanes : r),
                Ca(Os, Ms),
                (Ms |= n);
            }
          else
            null !== o
              ? ((n = o.baseLanes | r), (t.memoizedState = null))
              : (n = r),
              Ca(Os, Ms),
              (Ms |= n);
          return ki(e, t, a, r), t.child;
        }
        function Ci(e, t) {
          var r = t.ref;
          ((null === e && null !== r) || (null !== e && e.ref !== r)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Ei(e, t, r, n, a) {
          var o = La(r) ? za : Pa.current;
          return (
            (o = Ta(t, o)),
            jo(t, a),
            (r = Sl(e, t, r, n, o, a)),
            (n = jl()),
            null === e || xi
              ? (ao && n && eo(t), (t.flags |= 1), ki(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                $i(e, t, a))
          );
        }
        function Pi(e, t, r, n, a) {
          if (La(r)) {
            var o = !0;
            Ia(t);
          } else o = !1;
          if ((jo(t, a), null === t.stateNode))
            Wi(e, t), Wo(t, r, n), Ko(t, r, n, a), (n = !0);
          else if (null === e) {
            var l = t.stateNode,
              i = t.memoizedProps;
            l.props = i;
            var s = l.context,
              u = r.contextType;
            "object" === typeof u && null !== u
              ? (u = Co(u))
              : (u = Ta(t, (u = La(r) ? za : Pa.current)));
            var c = r.getDerivedStateFromProps,
              d =
                "function" === typeof c ||
                "function" === typeof l.getSnapshotBeforeUpdate;
            d ||
              ("function" !== typeof l.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof l.componentWillReceiveProps) ||
              ((i !== n || s !== u) && $o(t, l, n, u)),
              (To = !1);
            var f = t.memoizedState;
            (l.state = f),
              Fo(t, n, l, a),
              (s = t.memoizedState),
              i !== n || f !== s || _a.current || To
                ? ("function" === typeof c &&
                    (Ho(t, r, c, n), (s = t.memoizedState)),
                  (i = To || Vo(t, r, i, n, f, s, u))
                    ? (d ||
                        ("function" !== typeof l.UNSAFE_componentWillMount &&
                          "function" !== typeof l.componentWillMount) ||
                        ("function" === typeof l.componentWillMount &&
                          l.componentWillMount(),
                        "function" === typeof l.UNSAFE_componentWillMount &&
                          l.UNSAFE_componentWillMount()),
                      "function" === typeof l.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof l.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = n),
                      (t.memoizedState = s)),
                  (l.props = n),
                  (l.state = s),
                  (l.context = u),
                  (n = i))
                : ("function" === typeof l.componentDidMount &&
                    (t.flags |= 4194308),
                  (n = !1));
          } else {
            (l = t.stateNode),
              Mo(e, t),
              (i = t.memoizedProps),
              (u = t.type === t.elementType ? i : bo(t.type, i)),
              (l.props = u),
              (d = t.pendingProps),
              (f = l.context),
              "object" === typeof (s = r.contextType) && null !== s
                ? (s = Co(s))
                : (s = Ta(t, (s = La(r) ? za : Pa.current)));
            var p = r.getDerivedStateFromProps;
            (c =
              "function" === typeof p ||
              "function" === typeof l.getSnapshotBeforeUpdate) ||
              ("function" !== typeof l.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof l.componentWillReceiveProps) ||
              ((i !== d || f !== s) && $o(t, l, n, s)),
              (To = !1),
              (f = t.memoizedState),
              (l.state = f),
              Fo(t, n, l, a);
            var g = t.memoizedState;
            i !== d || f !== g || _a.current || To
              ? ("function" === typeof p &&
                  (Ho(t, r, p, n), (g = t.memoizedState)),
                (u = To || Vo(t, r, u, n, f, g, s) || !1)
                  ? (c ||
                      ("function" !== typeof l.UNSAFE_componentWillUpdate &&
                        "function" !== typeof l.componentWillUpdate) ||
                      ("function" === typeof l.componentWillUpdate &&
                        l.componentWillUpdate(n, g, s),
                      "function" === typeof l.UNSAFE_componentWillUpdate &&
                        l.UNSAFE_componentWillUpdate(n, g, s)),
                    "function" === typeof l.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof l.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof l.componentDidUpdate ||
                      (i === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof l.getSnapshotBeforeUpdate ||
                      (i === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = n),
                    (t.memoizedState = g)),
                (l.props = n),
                (l.state = g),
                (l.context = s),
                (n = u))
              : ("function" !== typeof l.componentDidUpdate ||
                  (i === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof l.getSnapshotBeforeUpdate ||
                  (i === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (n = !1));
          }
          return _i(e, t, r, n, o, a);
        }
        function _i(e, t, r, n, a, o) {
          Ci(e, t);
          var l = 0 !== (128 & t.flags);
          if (!n && !l) return a && Da(t, r, !1), $i(e, t, o);
          (n = t.stateNode), (yi.current = t);
          var i =
            l && "function" !== typeof r.getDerivedStateFromError
              ? null
              : n.render();
          return (
            (t.flags |= 1),
            null !== e && l
              ? ((t.child = Xo(t, e.child, null, o)),
                (t.child = Xo(t, null, i, o)))
              : ki(e, t, i, o),
            (t.memoizedState = n.state),
            a && Da(t, r, !0),
            t.child
          );
        }
        function zi(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Oa(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Oa(0, t.context, !1),
            al(e, t.containerInfo);
        }
        function Ti(e, t, r, n, a) {
          return go(), ho(a), (t.flags |= 256), ki(e, t, r, n), t.child;
        }
        var Li,
          Mi,
          Oi,
          Ri,
          Ii = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Di(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Fi(e, t, r) {
          var n,
            a = t.pendingProps,
            l = sl.current,
            i = !1,
            s = 0 !== (128 & t.flags);
          if (
            ((n = s) ||
              (n = (null === e || null !== e.memoizedState) && 0 !== (2 & l)),
            n
              ? ((i = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (l |= 1),
            Ca(sl, 1 & l),
            null === e)
          )
            return (
              uo(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((s = a.children),
                  (e = a.fallback),
                  i
                    ? ((a = t.mode),
                      (i = t.child),
                      (s = { mode: "hidden", children: s }),
                      0 === (1 & a) && null !== i
                        ? ((i.childLanes = 0), (i.pendingProps = s))
                        : (i = Du(s, a, 0, null)),
                      (e = Iu(e, a, r, null)),
                      (i.return = t),
                      (e.return = t),
                      (i.sibling = e),
                      (t.child = i),
                      (t.child.memoizedState = Di(r)),
                      (t.memoizedState = Ii),
                      e)
                    : Ai(t, s))
            );
          if (null !== (l = e.memoizedState) && null !== (n = l.dehydrated))
            return (function (e, t, r, n, a, l, i) {
              if (r)
                return 256 & t.flags
                  ? ((t.flags &= -257), Bi(e, t, i, (n = di(Error(o(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((l = n.fallback),
                    (a = t.mode),
                    (n = Du(
                      { mode: "visible", children: n.children },
                      a,
                      0,
                      null
                    )),
                    ((l = Iu(l, a, i, null)).flags |= 2),
                    (n.return = t),
                    (l.return = t),
                    (n.sibling = l),
                    (t.child = n),
                    0 !== (1 & t.mode) && Xo(t, e.child, null, i),
                    (t.child.memoizedState = Di(i)),
                    (t.memoizedState = Ii),
                    l);
              if (0 === (1 & t.mode)) return Bi(e, t, i, null);
              if ("$!" === a.data) {
                if ((n = a.nextSibling && a.nextSibling.dataset))
                  var s = n.dgst;
                return (
                  (n = s), Bi(e, t, i, (n = di((l = Error(o(419))), n, void 0)))
                );
              }
              if (((s = 0 !== (i & e.childLanes)), xi || s)) {
                if (null !== (n = zs)) {
                  switch (i & -i) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
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
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (n.suspendedLanes | i)) ? 0 : a) &&
                    a !== l.retryLane &&
                    ((l.retryLane = a), zo(e, a), nu(n, e, a, -1));
                }
                return mu(), Bi(e, t, i, (n = di(Error(o(421)))));
              }
              return "$?" === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Pu.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = l.treeContext),
                  (no = ua(a.nextSibling)),
                  (ro = t),
                  (ao = !0),
                  (oo = null),
                  null !== e &&
                    ((Qa[qa++] = Ya),
                    (Qa[qa++] = Xa),
                    (Qa[qa++] = Ga),
                    (Ya = e.id),
                    (Xa = e.overflow),
                    (Ga = t)),
                  (t = Ai(t, n.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, s, a, n, l, r);
          if (i) {
            (i = a.fallback), (s = t.mode), (n = (l = e.child).sibling);
            var u = { mode: "hidden", children: a.children };
            return (
              0 === (1 & s) && t.child !== l
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = u),
                  (t.deletions = null))
                : ((a = Ou(l, u)).subtreeFlags = 14680064 & l.subtreeFlags),
              null !== n
                ? (i = Ou(n, i))
                : ((i = Iu(i, s, r, null)).flags |= 2),
              (i.return = t),
              (a.return = t),
              (a.sibling = i),
              (t.child = a),
              (a = i),
              (i = t.child),
              (s =
                null === (s = e.child.memoizedState)
                  ? Di(r)
                  : {
                      baseLanes: s.baseLanes | r,
                      cachePool: null,
                      transitions: s.transitions,
                    }),
              (i.memoizedState = s),
              (i.childLanes = e.childLanes & ~r),
              (t.memoizedState = Ii),
              a
            );
          }
          return (
            (e = (i = e.child).sibling),
            (a = Ou(i, { mode: "visible", children: a.children })),
            0 === (1 & t.mode) && (a.lanes = r),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (r = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : r.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          );
        }
        function Ai(e, t) {
          return (
            ((t = Du(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Bi(e, t, r, n) {
          return (
            null !== n && ho(n),
            Xo(t, e.child, null, r),
            ((e = Ai(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Hi(e, t, r) {
          e.lanes |= t;
          var n = e.alternate;
          null !== n && (n.lanes |= t), So(e.return, t, r);
        }
        function Ui(e, t, r, n, a) {
          var o = e.memoizedState;
          null === o
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: n,
                tail: r,
                tailMode: a,
              })
            : ((o.isBackwards = t),
              (o.rendering = null),
              (o.renderingStartTime = 0),
              (o.last = n),
              (o.tail = r),
              (o.tailMode = a));
        }
        function Vi(e, t, r) {
          var n = t.pendingProps,
            a = n.revealOrder,
            o = n.tail;
          if ((ki(e, t, n.children, r), 0 !== (2 & (n = sl.current))))
            (n = (1 & n) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Hi(e, r, t);
                else if (19 === e.tag) Hi(e, r, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            n &= 1;
          }
          if ((Ca(sl, n), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (r = t.child, a = null; null !== r; )
                  null !== (e = r.alternate) && null === ul(e) && (a = r),
                    (r = r.sibling);
                null === (r = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = r.sibling), (r.sibling = null)),
                  Ui(t, !1, a, r, o);
                break;
              case "backwards":
                for (r = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === ul(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = r), (r = a), (a = e);
                }
                Ui(t, !0, r, null, o);
                break;
              case "together":
                Ui(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Wi(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function $i(e, t, r) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Ds |= t.lanes),
            0 === (r & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(o(153));
          if (null !== t.child) {
            for (
              r = Ou((e = t.child), e.pendingProps), t.child = r, r.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((r = r.sibling = Ou(e, e.pendingProps)).return = t);
            r.sibling = null;
          }
          return t.child;
        }
        function Ki(e, t) {
          if (!ao)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var r = null; null !== t; )
                  null !== t.alternate && (r = t), (t = t.sibling);
                null === r ? (e.tail = null) : (r.sibling = null);
                break;
              case "collapsed":
                r = e.tail;
                for (var n = null; null !== r; )
                  null !== r.alternate && (n = r), (r = r.sibling);
                null === n
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (n.sibling = null);
            }
        }
        function Qi(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            r = 0,
            n = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (r |= a.lanes | a.childLanes),
                (n |= 14680064 & a.subtreeFlags),
                (n |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (r |= a.lanes | a.childLanes),
                (n |= a.subtreeFlags),
                (n |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= n), (e.childLanes = r), t;
        }
        function qi(e, t, r) {
          var n = t.pendingProps;
          switch ((to(t), t.tag)) {
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
              return Qi(t), null;
            case 1:
            case 17:
              return La(t.type) && Ma(), Qi(t), null;
            case 3:
              return (
                (n = t.stateNode),
                ol(),
                ja(_a),
                ja(Pa),
                dl(),
                n.pendingContext &&
                  ((n.context = n.pendingContext), (n.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fo(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== oo && (iu(oo), (oo = null)))),
                Mi(e, t),
                Qi(t),
                null
              );
            case 5:
              il(t);
              var a = nl(rl.current);
              if (((r = t.type), null !== e && null != t.stateNode))
                Oi(e, t, r, n, a),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!n) {
                  if (null === t.stateNode) throw Error(o(166));
                  return Qi(t), null;
                }
                if (((e = nl(el.current)), fo(t))) {
                  (n = t.stateNode), (r = t.type);
                  var l = t.memoizedProps;
                  switch (
                    ((n[fa] = t), (n[pa] = l), (e = 0 !== (1 & t.mode)), r)
                  ) {
                    case "dialog":
                      An("cancel", n), An("close", n);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      An("load", n);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < Rn.length; a++) An(Rn[a], n);
                      break;
                    case "source":
                      An("error", n);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      An("error", n), An("load", n);
                      break;
                    case "details":
                      An("toggle", n);
                      break;
                    case "input":
                      Y(n, l), An("invalid", n);
                      break;
                    case "select":
                      (n._wrapperState = { wasMultiple: !!l.multiple }),
                        An("invalid", n);
                      break;
                    case "textarea":
                      ae(n, l), An("invalid", n);
                  }
                  for (var s in (ve(r, l), (a = null), l))
                    if (l.hasOwnProperty(s)) {
                      var u = l[s];
                      "children" === s
                        ? "string" === typeof u
                          ? n.textContent !== u &&
                            (!0 !== l.suppressHydrationWarning &&
                              Jn(n.textContent, u, e),
                            (a = ["children", u]))
                          : "number" === typeof u &&
                            n.textContent !== "" + u &&
                            (!0 !== l.suppressHydrationWarning &&
                              Jn(n.textContent, u, e),
                            (a = ["children", "" + u]))
                        : i.hasOwnProperty(s) &&
                          null != u &&
                          "onScroll" === s &&
                          An("scroll", n);
                    }
                  switch (r) {
                    case "input":
                      K(n), Z(n, l, !0);
                      break;
                    case "textarea":
                      K(n), le(n);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof l.onClick && (n.onclick = Zn);
                  }
                  (n = a), (t.updateQueue = n), null !== n && (t.flags |= 4);
                } else {
                  (s = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = ie(r)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === r
                        ? (((e = s.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof n.is
                        ? (e = s.createElement(r, { is: n.is }))
                        : ((e = s.createElement(r)),
                          "select" === r &&
                            ((s = e),
                            n.multiple
                              ? (s.multiple = !0)
                              : n.size && (s.size = n.size)))
                      : (e = s.createElementNS(e, r)),
                    (e[fa] = t),
                    (e[pa] = n),
                    Li(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((s = ye(r, n)), r)) {
                      case "dialog":
                        An("cancel", e), An("close", e), (a = n);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        An("load", e), (a = n);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < Rn.length; a++) An(Rn[a], e);
                        a = n;
                        break;
                      case "source":
                        An("error", e), (a = n);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        An("error", e), An("load", e), (a = n);
                        break;
                      case "details":
                        An("toggle", e), (a = n);
                        break;
                      case "input":
                        Y(e, n), (a = G(e, n)), An("invalid", e);
                        break;
                      case "option":
                      default:
                        a = n;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!n.multiple }),
                          (a = D({}, n, { value: void 0 })),
                          An("invalid", e);
                        break;
                      case "textarea":
                        ae(e, n), (a = ne(e, n)), An("invalid", e);
                    }
                    for (l in (ve(r, a), (u = a)))
                      if (u.hasOwnProperty(l)) {
                        var c = u[l];
                        "style" === l
                          ? me(e, c)
                          : "dangerouslySetInnerHTML" === l
                          ? null != (c = c ? c.__html : void 0) && de(e, c)
                          : "children" === l
                          ? "string" === typeof c
                            ? ("textarea" !== r || "" !== c) && fe(e, c)
                            : "number" === typeof c && fe(e, "" + c)
                          : "suppressContentEditableWarning" !== l &&
                            "suppressHydrationWarning" !== l &&
                            "autoFocus" !== l &&
                            (i.hasOwnProperty(l)
                              ? null != c && "onScroll" === l && An("scroll", e)
                              : null != c && y(e, l, c, s));
                      }
                    switch (r) {
                      case "input":
                        K(e), Z(e, n, !1);
                        break;
                      case "textarea":
                        K(e), le(e);
                        break;
                      case "option":
                        null != n.value &&
                          e.setAttribute("value", "" + W(n.value));
                        break;
                      case "select":
                        (e.multiple = !!n.multiple),
                          null != (l = n.value)
                            ? re(e, !!n.multiple, l, !1)
                            : null != n.defaultValue &&
                              re(e, !!n.multiple, n.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof a.onClick && (e.onclick = Zn);
                    }
                    switch (r) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        n = !!n.autoFocus;
                        break e;
                      case "img":
                        n = !0;
                        break e;
                      default:
                        n = !1;
                    }
                  }
                  n && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return Qi(t), null;
            case 6:
              if (e && null != t.stateNode) Ri(e, t, e.memoizedProps, n);
              else {
                if ("string" !== typeof n && null === t.stateNode)
                  throw Error(o(166));
                if (((r = nl(rl.current)), nl(el.current), fo(t))) {
                  if (
                    ((n = t.stateNode),
                    (r = t.memoizedProps),
                    (n[fa] = t),
                    (l = n.nodeValue !== r) && null !== (e = ro))
                  )
                    switch (e.tag) {
                      case 3:
                        Jn(n.nodeValue, r, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Jn(n.nodeValue, r, 0 !== (1 & e.mode));
                    }
                  l && (t.flags |= 4);
                } else
                  ((n = (9 === r.nodeType ? r : r.ownerDocument).createTextNode(
                    n
                  ))[fa] = t),
                    (t.stateNode = n);
              }
              return Qi(t), null;
            case 13:
              if (
                (ja(sl),
                (n = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  ao &&
                  null !== no &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  po(), go(), (t.flags |= 98560), (l = !1);
                else if (((l = fo(t)), null !== n && null !== n.dehydrated)) {
                  if (null === e) {
                    if (!l) throw Error(o(318));
                    if (
                      !(l =
                        null !== (l = t.memoizedState) ? l.dehydrated : null)
                    )
                      throw Error(o(317));
                    l[fa] = t;
                  } else
                    go(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Qi(t), (l = !1);
                } else null !== oo && (iu(oo), (oo = null)), (l = !0);
                if (!l) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = r), t)
                : ((n = null !== n) !==
                    (null !== e && null !== e.memoizedState) &&
                    n &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & sl.current)
                        ? 0 === Rs && (Rs = 3)
                        : mu())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Qi(t),
                  null);
            case 4:
              return (
                ol(),
                Mi(e, t),
                null === e && Un(t.stateNode.containerInfo),
                Qi(t),
                null
              );
            case 10:
              return No(t.type._context), Qi(t), null;
            case 19:
              if ((ja(sl), null === (l = t.memoizedState))) return Qi(t), null;
              if (((n = 0 !== (128 & t.flags)), null === (s = l.rendering)))
                if (n) Ki(l, !1);
                else {
                  if (0 !== Rs || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (s = ul(e))) {
                        for (
                          t.flags |= 128,
                            Ki(l, !1),
                            null !== (n = s.updateQueue) &&
                              ((t.updateQueue = n), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            n = r,
                            r = t.child;
                          null !== r;

                        )
                          (e = n),
                            ((l = r).flags &= 14680066),
                            null === (s = l.alternate)
                              ? ((l.childLanes = 0),
                                (l.lanes = e),
                                (l.child = null),
                                (l.subtreeFlags = 0),
                                (l.memoizedProps = null),
                                (l.memoizedState = null),
                                (l.updateQueue = null),
                                (l.dependencies = null),
                                (l.stateNode = null))
                              : ((l.childLanes = s.childLanes),
                                (l.lanes = s.lanes),
                                (l.child = s.child),
                                (l.subtreeFlags = 0),
                                (l.deletions = null),
                                (l.memoizedProps = s.memoizedProps),
                                (l.memoizedState = s.memoizedState),
                                (l.updateQueue = s.updateQueue),
                                (l.type = s.type),
                                (e = s.dependencies),
                                (l.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (r = r.sibling);
                        return Ca(sl, (1 & sl.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== l.tail &&
                    Xe() > Vs &&
                    ((t.flags |= 128),
                    (n = !0),
                    Ki(l, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!n)
                  if (null !== (e = ul(s))) {
                    if (
                      ((t.flags |= 128),
                      (n = !0),
                      null !== (r = e.updateQueue) &&
                        ((t.updateQueue = r), (t.flags |= 4)),
                      Ki(l, !0),
                      null === l.tail &&
                        "hidden" === l.tailMode &&
                        !s.alternate &&
                        !ao)
                    )
                      return Qi(t), null;
                  } else
                    2 * Xe() - l.renderingStartTime > Vs &&
                      1073741824 !== r &&
                      ((t.flags |= 128),
                      (n = !0),
                      Ki(l, !1),
                      (t.lanes = 4194304));
                l.isBackwards
                  ? ((s.sibling = t.child), (t.child = s))
                  : (null !== (r = l.last) ? (r.sibling = s) : (t.child = s),
                    (l.last = s));
              }
              return null !== l.tail
                ? ((t = l.tail),
                  (l.rendering = t),
                  (l.tail = t.sibling),
                  (l.renderingStartTime = Xe()),
                  (t.sibling = null),
                  (r = sl.current),
                  Ca(sl, n ? (1 & r) | 2 : 1 & r),
                  t)
                : (Qi(t), null);
            case 22:
            case 23:
              return (
                fu(),
                (n = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== n &&
                  (t.flags |= 8192),
                n && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Ms) &&
                    (Qi(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Qi(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(o(156, t.tag));
        }
        function Gi(e, t) {
          switch ((to(t), t.tag)) {
            case 1:
              return (
                La(t.type) && Ma(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                ol(),
                ja(_a),
                ja(Pa),
                dl(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return il(t), null;
            case 13:
              if (
                (ja(sl),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(o(340));
                go();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return ja(sl), null;
            case 4:
              return ol(), null;
            case 10:
              return No(t.type._context), null;
            case 22:
            case 23:
              return fu(), null;
            default:
              return null;
          }
        }
        (Li = function (e, t) {
          for (var r = t.child; null !== r; ) {
            if (5 === r.tag || 6 === r.tag) e.appendChild(r.stateNode);
            else if (4 !== r.tag && null !== r.child) {
              (r.child.return = r), (r = r.child);
              continue;
            }
            if (r === t) break;
            for (; null === r.sibling; ) {
              if (null === r.return || r.return === t) return;
              r = r.return;
            }
            (r.sibling.return = r.return), (r = r.sibling);
          }
        }),
          (Mi = function () {}),
          (Oi = function (e, t, r, n) {
            var a = e.memoizedProps;
            if (a !== n) {
              (e = t.stateNode), nl(el.current);
              var o,
                l = null;
              switch (r) {
                case "input":
                  (a = G(e, a)), (n = G(e, n)), (l = []);
                  break;
                case "select":
                  (a = D({}, a, { value: void 0 })),
                    (n = D({}, n, { value: void 0 })),
                    (l = []);
                  break;
                case "textarea":
                  (a = ne(e, a)), (n = ne(e, n)), (l = []);
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof n.onClick &&
                    (e.onclick = Zn);
              }
              for (c in (ve(r, n), (r = null), a))
                if (!n.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                  if ("style" === c) {
                    var s = a[c];
                    for (o in s)
                      s.hasOwnProperty(o) && (r || (r = {}), (r[o] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (i.hasOwnProperty(c)
                        ? l || (l = [])
                        : (l = l || []).push(c, null));
              for (c in n) {
                var u = n[c];
                if (
                  ((s = null != a ? a[c] : void 0),
                  n.hasOwnProperty(c) && u !== s && (null != u || null != s))
                )
                  if ("style" === c)
                    if (s) {
                      for (o in s)
                        !s.hasOwnProperty(o) ||
                          (u && u.hasOwnProperty(o)) ||
                          (r || (r = {}), (r[o] = ""));
                      for (o in u)
                        u.hasOwnProperty(o) &&
                          s[o] !== u[o] &&
                          (r || (r = {}), (r[o] = u[o]));
                    } else r || (l || (l = []), l.push(c, r)), (r = u);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((u = u ? u.__html : void 0),
                        (s = s ? s.__html : void 0),
                        null != u && s !== u && (l = l || []).push(c, u))
                      : "children" === c
                      ? ("string" !== typeof u && "number" !== typeof u) ||
                        (l = l || []).push(c, "" + u)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (i.hasOwnProperty(c)
                          ? (null != u && "onScroll" === c && An("scroll", e),
                            l || s === u || (l = []))
                          : (l = l || []).push(c, u));
              }
              r && (l = l || []).push("style", r);
              var c = l;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (Ri = function (e, t, r, n) {
            r !== n && (t.flags |= 4);
          });
        var Yi = !1,
          Xi = !1,
          Ji = "function" === typeof WeakSet ? WeakSet : Set,
          Zi = null;
        function es(e, t) {
          var r = e.ref;
          if (null !== r)
            if ("function" === typeof r)
              try {
                r(null);
              } catch (n) {
                ju(e, t, n);
              }
            else r.current = null;
        }
        function ts(e, t, r) {
          try {
            r();
          } catch (n) {
            ju(e, t, n);
          }
        }
        var rs = !1;
        function ns(e, t, r) {
          var n = t.updateQueue;
          if (null !== (n = null !== n ? n.lastEffect : null)) {
            var a = (n = n.next);
            do {
              if ((a.tag & e) === e) {
                var o = a.destroy;
                (a.destroy = void 0), void 0 !== o && ts(t, r, o);
              }
              a = a.next;
            } while (a !== n);
          }
        }
        function as(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var r = (t = t.next);
            do {
              if ((r.tag & e) === e) {
                var n = r.create;
                r.destroy = n();
              }
              r = r.next;
            } while (r !== t);
          }
        }
        function os(e) {
          var t = e.ref;
          if (null !== t) {
            var r = e.stateNode;
            e.tag, (e = r), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function ls(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), ls(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[fa],
              delete t[pa],
              delete t[ha],
              delete t[ma],
              delete t[ba]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function is(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function ss(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || is(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function us(e, t, r) {
          var n = e.tag;
          if (5 === n || 6 === n)
            (e = e.stateNode),
              t
                ? 8 === r.nodeType
                  ? r.parentNode.insertBefore(e, t)
                  : r.insertBefore(e, t)
                : (8 === r.nodeType
                    ? (t = r.parentNode).insertBefore(e, r)
                    : (t = r).appendChild(e),
                  (null !== (r = r._reactRootContainer) && void 0 !== r) ||
                    null !== t.onclick ||
                    (t.onclick = Zn));
          else if (4 !== n && null !== (e = e.child))
            for (us(e, t, r), e = e.sibling; null !== e; )
              us(e, t, r), (e = e.sibling);
        }
        function cs(e, t, r) {
          var n = e.tag;
          if (5 === n || 6 === n)
            (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
          else if (4 !== n && null !== (e = e.child))
            for (cs(e, t, r), e = e.sibling; null !== e; )
              cs(e, t, r), (e = e.sibling);
        }
        var ds = null,
          fs = !1;
        function ps(e, t, r) {
          for (r = r.child; null !== r; ) gs(e, t, r), (r = r.sibling);
        }
        function gs(e, t, r) {
          if (ot && "function" === typeof ot.onCommitFiberUnmount)
            try {
              ot.onCommitFiberUnmount(at, r);
            } catch (i) {}
          switch (r.tag) {
            case 5:
              Xi || es(r, t);
            case 6:
              var n = ds,
                a = fs;
              (ds = null),
                ps(e, t, r),
                (fs = a),
                null !== (ds = n) &&
                  (fs
                    ? ((e = ds),
                      (r = r.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(r)
                        : e.removeChild(r))
                    : ds.removeChild(r.stateNode));
              break;
            case 18:
              null !== ds &&
                (fs
                  ? ((e = ds),
                    (r = r.stateNode),
                    8 === e.nodeType
                      ? sa(e.parentNode, r)
                      : 1 === e.nodeType && sa(e, r),
                    Ut(e))
                  : sa(ds, r.stateNode));
              break;
            case 4:
              (n = ds),
                (a = fs),
                (ds = r.stateNode.containerInfo),
                (fs = !0),
                ps(e, t, r),
                (ds = n),
                (fs = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Xi &&
                null !== (n = r.updateQueue) &&
                null !== (n = n.lastEffect)
              ) {
                a = n = n.next;
                do {
                  var o = a,
                    l = o.destroy;
                  (o = o.tag),
                    void 0 !== l &&
                      (0 !== (2 & o) || 0 !== (4 & o)) &&
                      ts(r, t, l),
                    (a = a.next);
                } while (a !== n);
              }
              ps(e, t, r);
              break;
            case 1:
              if (
                !Xi &&
                (es(r, t),
                "function" === typeof (n = r.stateNode).componentWillUnmount)
              )
                try {
                  (n.props = r.memoizedProps),
                    (n.state = r.memoizedState),
                    n.componentWillUnmount();
                } catch (i) {
                  ju(r, t, i);
                }
              ps(e, t, r);
              break;
            case 21:
              ps(e, t, r);
              break;
            case 22:
              1 & r.mode
                ? ((Xi = (n = Xi) || null !== r.memoizedState),
                  ps(e, t, r),
                  (Xi = n))
                : ps(e, t, r);
              break;
            default:
              ps(e, t, r);
          }
        }
        function hs(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var r = e.stateNode;
            null === r && (r = e.stateNode = new Ji()),
              t.forEach(function (t) {
                var n = _u.bind(null, e, t);
                r.has(t) || (r.add(t), t.then(n, n));
              });
          }
        }
        function ms(e, t) {
          var r = t.deletions;
          if (null !== r)
            for (var n = 0; n < r.length; n++) {
              var a = r[n];
              try {
                var l = e,
                  i = t,
                  s = i;
                e: for (; null !== s; ) {
                  switch (s.tag) {
                    case 5:
                      (ds = s.stateNode), (fs = !1);
                      break e;
                    case 3:
                    case 4:
                      (ds = s.stateNode.containerInfo), (fs = !0);
                      break e;
                  }
                  s = s.return;
                }
                if (null === ds) throw Error(o(160));
                gs(l, i, a), (ds = null), (fs = !1);
                var u = a.alternate;
                null !== u && (u.return = null), (a.return = null);
              } catch (c) {
                ju(a, t, c);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) bs(t, e), (t = t.sibling);
        }
        function bs(e, t) {
          var r = e.alternate,
            n = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((ms(t, e), vs(e), 4 & n)) {
                try {
                  ns(3, e, e.return), as(3, e);
                } catch (m) {
                  ju(e, e.return, m);
                }
                try {
                  ns(5, e, e.return);
                } catch (m) {
                  ju(e, e.return, m);
                }
              }
              break;
            case 1:
              ms(t, e), vs(e), 512 & n && null !== r && es(r, r.return);
              break;
            case 5:
              if (
                (ms(t, e),
                vs(e),
                512 & n && null !== r && es(r, r.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  fe(a, "");
                } catch (m) {
                  ju(e, e.return, m);
                }
              }
              if (4 & n && null != (a = e.stateNode)) {
                var l = e.memoizedProps,
                  i = null !== r ? r.memoizedProps : l,
                  s = e.type,
                  u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                  try {
                    "input" === s &&
                      "radio" === l.type &&
                      null != l.name &&
                      X(a, l),
                      ye(s, i);
                    var c = ye(s, l);
                    for (i = 0; i < u.length; i += 2) {
                      var d = u[i],
                        f = u[i + 1];
                      "style" === d
                        ? me(a, f)
                        : "dangerouslySetInnerHTML" === d
                        ? de(a, f)
                        : "children" === d
                        ? fe(a, f)
                        : y(a, d, f, c);
                    }
                    switch (s) {
                      case "input":
                        J(a, l);
                        break;
                      case "textarea":
                        oe(a, l);
                        break;
                      case "select":
                        var p = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!l.multiple;
                        var g = l.value;
                        null != g
                          ? re(a, !!l.multiple, g, !1)
                          : p !== !!l.multiple &&
                            (null != l.defaultValue
                              ? re(a, !!l.multiple, l.defaultValue, !0)
                              : re(a, !!l.multiple, l.multiple ? [] : "", !1));
                    }
                    a[pa] = l;
                  } catch (m) {
                    ju(e, e.return, m);
                  }
              }
              break;
            case 6:
              if ((ms(t, e), vs(e), 4 & n)) {
                if (null === e.stateNode) throw Error(o(162));
                (a = e.stateNode), (l = e.memoizedProps);
                try {
                  a.nodeValue = l;
                } catch (m) {
                  ju(e, e.return, m);
                }
              }
              break;
            case 3:
              if (
                (ms(t, e),
                vs(e),
                4 & n && null !== r && r.memoizedState.isDehydrated)
              )
                try {
                  Ut(t.containerInfo);
                } catch (m) {
                  ju(e, e.return, m);
                }
              break;
            case 4:
            default:
              ms(t, e), vs(e);
              break;
            case 13:
              ms(t, e),
                vs(e),
                8192 & (a = e.child).flags &&
                  ((l = null !== a.memoizedState),
                  (a.stateNode.isHidden = l),
                  !l ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    (Us = Xe())),
                4 & n && hs(e);
              break;
            case 22:
              if (
                ((d = null !== r && null !== r.memoizedState),
                1 & e.mode
                  ? ((Xi = (c = Xi) || d), ms(t, e), (Xi = c))
                  : ms(t, e),
                vs(e),
                8192 & n)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !d && 0 !== (1 & e.mode))
                )
                  for (Zi = e, d = e.child; null !== d; ) {
                    for (f = Zi = d; null !== Zi; ) {
                      switch (((g = (p = Zi).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          ns(4, p, p.return);
                          break;
                        case 1:
                          es(p, p.return);
                          var h = p.stateNode;
                          if ("function" === typeof h.componentWillUnmount) {
                            (n = p), (r = p.return);
                            try {
                              (t = n),
                                (h.props = t.memoizedProps),
                                (h.state = t.memoizedState),
                                h.componentWillUnmount();
                            } catch (m) {
                              ju(n, r, m);
                            }
                          }
                          break;
                        case 5:
                          es(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            ws(f);
                            continue;
                          }
                      }
                      null !== g ? ((g.return = p), (Zi = g)) : ws(f);
                    }
                    d = d.sibling;
                  }
                e: for (d = null, f = e; ; ) {
                  if (5 === f.tag) {
                    if (null === d) {
                      d = f;
                      try {
                        (a = f.stateNode),
                          c
                            ? "function" === typeof (l = a.style).setProperty
                              ? l.setProperty("display", "none", "important")
                              : (l.display = "none")
                            : ((s = f.stateNode),
                              (i =
                                void 0 !== (u = f.memoizedProps.style) &&
                                null !== u &&
                                u.hasOwnProperty("display")
                                  ? u.display
                                  : null),
                              (s.style.display = he("display", i)));
                      } catch (m) {
                        ju(e, e.return, m);
                      }
                    }
                  } else if (6 === f.tag) {
                    if (null === d)
                      try {
                        f.stateNode.nodeValue = c ? "" : f.memoizedProps;
                      } catch (m) {
                        ju(e, e.return, m);
                      }
                  } else if (
                    ((22 !== f.tag && 23 !== f.tag) ||
                      null === f.memoizedState ||
                      f === e) &&
                    null !== f.child
                  ) {
                    (f.child.return = f), (f = f.child);
                    continue;
                  }
                  if (f === e) break e;
                  for (; null === f.sibling; ) {
                    if (null === f.return || f.return === e) break e;
                    d === f && (d = null), (f = f.return);
                  }
                  d === f && (d = null),
                    (f.sibling.return = f.return),
                    (f = f.sibling);
                }
              }
              break;
            case 19:
              ms(t, e), vs(e), 4 & n && hs(e);
            case 21:
          }
        }
        function vs(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var r = e.return; null !== r; ) {
                  if (is(r)) {
                    var n = r;
                    break e;
                  }
                  r = r.return;
                }
                throw Error(o(160));
              }
              switch (n.tag) {
                case 5:
                  var a = n.stateNode;
                  32 & n.flags && (fe(a, ""), (n.flags &= -33)),
                    cs(e, ss(e), a);
                  break;
                case 3:
                case 4:
                  var l = n.stateNode.containerInfo;
                  us(e, ss(e), l);
                  break;
                default:
                  throw Error(o(161));
              }
            } catch (i) {
              ju(e, e.return, i);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function ys(e, t, r) {
          (Zi = e), xs(e, t, r);
        }
        function xs(e, t, r) {
          for (var n = 0 !== (1 & e.mode); null !== Zi; ) {
            var a = Zi,
              o = a.child;
            if (22 === a.tag && n) {
              var l = null !== a.memoizedState || Yi;
              if (!l) {
                var i = a.alternate,
                  s = (null !== i && null !== i.memoizedState) || Xi;
                i = Yi;
                var u = Xi;
                if (((Yi = l), (Xi = s) && !u))
                  for (Zi = a; null !== Zi; )
                    (s = (l = Zi).child),
                      22 === l.tag && null !== l.memoizedState
                        ? Ns(a)
                        : null !== s
                        ? ((s.return = l), (Zi = s))
                        : Ns(a);
                for (; null !== o; ) (Zi = o), xs(o, t, r), (o = o.sibling);
                (Zi = a), (Yi = i), (Xi = u);
              }
              ks(e);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== o
                ? ((o.return = a), (Zi = o))
                : ks(e);
          }
        }
        function ks(e) {
          for (; null !== Zi; ) {
            var t = Zi;
            if (0 !== (8772 & t.flags)) {
              var r = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Xi || as(5, t);
                      break;
                    case 1:
                      var n = t.stateNode;
                      if (4 & t.flags && !Xi)
                        if (null === r) n.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? r.memoizedProps
                              : bo(t.type, r.memoizedProps);
                          n.componentDidUpdate(
                            a,
                            r.memoizedState,
                            n.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var l = t.updateQueue;
                      null !== l && Ao(t, l, n);
                      break;
                    case 3:
                      var i = t.updateQueue;
                      if (null !== i) {
                        if (((r = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              r = t.child.stateNode;
                          }
                        Ao(t, i, r);
                      }
                      break;
                    case 5:
                      var s = t.stateNode;
                      if (null === r && 4 & t.flags) {
                        r = s;
                        var u = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            u.autoFocus && r.focus();
                            break;
                          case "img":
                            u.src && (r.src = u.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var d = c.memoizedState;
                          if (null !== d) {
                            var f = d.dehydrated;
                            null !== f && Ut(f);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(o(163));
                  }
                Xi || (512 & t.flags && os(t));
              } catch (p) {
                ju(t, t.return, p);
              }
            }
            if (t === e) {
              Zi = null;
              break;
            }
            if (null !== (r = t.sibling)) {
              (r.return = t.return), (Zi = r);
              break;
            }
            Zi = t.return;
          }
        }
        function ws(e) {
          for (; null !== Zi; ) {
            var t = Zi;
            if (t === e) {
              Zi = null;
              break;
            }
            var r = t.sibling;
            if (null !== r) {
              (r.return = t.return), (Zi = r);
              break;
            }
            Zi = t.return;
          }
        }
        function Ns(e) {
          for (; null !== Zi; ) {
            var t = Zi;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var r = t.return;
                  try {
                    as(4, t);
                  } catch (s) {
                    ju(t, r, s);
                  }
                  break;
                case 1:
                  var n = t.stateNode;
                  if ("function" === typeof n.componentDidMount) {
                    var a = t.return;
                    try {
                      n.componentDidMount();
                    } catch (s) {
                      ju(t, a, s);
                    }
                  }
                  var o = t.return;
                  try {
                    os(t);
                  } catch (s) {
                    ju(t, o, s);
                  }
                  break;
                case 5:
                  var l = t.return;
                  try {
                    os(t);
                  } catch (s) {
                    ju(t, l, s);
                  }
              }
            } catch (s) {
              ju(t, t.return, s);
            }
            if (t === e) {
              Zi = null;
              break;
            }
            var i = t.sibling;
            if (null !== i) {
              (i.return = t.return), (Zi = i);
              break;
            }
            Zi = t.return;
          }
        }
        var Ss,
          js = Math.ceil,
          Cs = x.ReactCurrentDispatcher,
          Es = x.ReactCurrentOwner,
          Ps = x.ReactCurrentBatchConfig,
          _s = 0,
          zs = null,
          Ts = null,
          Ls = 0,
          Ms = 0,
          Os = Sa(0),
          Rs = 0,
          Is = null,
          Ds = 0,
          Fs = 0,
          As = 0,
          Bs = null,
          Hs = null,
          Us = 0,
          Vs = 1 / 0,
          Ws = null,
          $s = !1,
          Ks = null,
          Qs = null,
          qs = !1,
          Gs = null,
          Ys = 0,
          Xs = 0,
          Js = null,
          Zs = -1,
          eu = 0;
        function tu() {
          return 0 !== (6 & _s) ? Xe() : -1 !== Zs ? Zs : (Zs = Xe());
        }
        function ru(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & _s) && 0 !== Ls
            ? Ls & -Ls
            : null !== mo.transition
            ? (0 === eu && (eu = ht()), eu)
            : 0 !== (e = yt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Yt(e.type));
        }
        function nu(e, t, r, n) {
          if (50 < Xs) throw ((Xs = 0), (Js = null), Error(o(185)));
          bt(e, r, n),
            (0 !== (2 & _s) && e === zs) ||
              (e === zs && (0 === (2 & _s) && (Fs |= r), 4 === Rs && su(e, Ls)),
              au(e, n),
              1 === r &&
                0 === _s &&
                0 === (1 & t.mode) &&
                ((Vs = Xe() + 500), Aa && Ua()));
        }
        function au(e, t) {
          var r = e.callbackNode;
          !(function (e, t) {
            for (
              var r = e.suspendedLanes,
                n = e.pingedLanes,
                a = e.expirationTimes,
                o = e.pendingLanes;
              0 < o;

            ) {
              var l = 31 - lt(o),
                i = 1 << l,
                s = a[l];
              -1 === s
                ? (0 !== (i & r) && 0 === (i & n)) || (a[l] = pt(i, t))
                : s <= t && (e.expiredLanes |= i),
                (o &= ~i);
            }
          })(e, t);
          var n = ft(e, e === zs ? Ls : 0);
          if (0 === n)
            null !== r && qe(r),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = n & -n), e.callbackPriority !== t)) {
            if ((null != r && qe(r), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Aa = !0), Ha(e);
                  })(uu.bind(null, e))
                : Ha(uu.bind(null, e)),
                la(function () {
                  0 === (6 & _s) && Ua();
                }),
                (r = null);
            else {
              switch (xt(n)) {
                case 1:
                  r = Ze;
                  break;
                case 4:
                  r = et;
                  break;
                case 16:
                default:
                  r = tt;
                  break;
                case 536870912:
                  r = nt;
              }
              r = zu(r, ou.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = r);
          }
        }
        function ou(e, t) {
          if (((Zs = -1), (eu = 0), 0 !== (6 & _s))) throw Error(o(327));
          var r = e.callbackNode;
          if (Nu() && e.callbackNode !== r) return null;
          var n = ft(e, e === zs ? Ls : 0);
          if (0 === n) return null;
          if (0 !== (30 & n) || 0 !== (n & e.expiredLanes) || t) t = bu(e, n);
          else {
            t = n;
            var a = _s;
            _s |= 2;
            var l = hu();
            for (
              (zs === e && Ls === t) ||
              ((Ws = null), (Vs = Xe() + 500), pu(e, t));
              ;

            )
              try {
                yu();
                break;
              } catch (s) {
                gu(e, s);
              }
            wo(),
              (Cs.current = l),
              (_s = a),
              null !== Ts ? (t = 0) : ((zs = null), (Ls = 0), (t = Rs));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = gt(e)) && ((n = a), (t = lu(e, a))),
              1 === t)
            )
              throw ((r = Is), pu(e, 0), su(e, n), au(e, Xe()), r);
            if (6 === t) su(e, n);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & n) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var r = t.updateQueue;
                        if (null !== r && null !== (r = r.stores))
                          for (var n = 0; n < r.length; n++) {
                            var a = r[n],
                              o = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!ln(o(), a)) return !1;
                            } catch (i) {
                              return !1;
                            }
                          }
                      }
                      if (((r = t.child), 16384 & t.subtreeFlags && null !== r))
                        (r.return = t), (t = r);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = bu(e, n)) &&
                    0 !== (l = gt(e)) &&
                    ((n = l), (t = lu(e, l))),
                  1 === t))
              )
                throw ((r = Is), pu(e, 0), su(e, n), au(e, Xe()), r);
              switch (((e.finishedWork = a), (e.finishedLanes = n), t)) {
                case 0:
                case 1:
                  throw Error(o(345));
                case 2:
                case 5:
                  wu(e, Hs, Ws);
                  break;
                case 3:
                  if (
                    (su(e, n),
                    (130023424 & n) === n && 10 < (t = Us + 500 - Xe()))
                  ) {
                    if (0 !== ft(e, 0)) break;
                    if (((a = e.suspendedLanes) & n) !== n) {
                      tu(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = na(wu.bind(null, e, Hs, Ws), t);
                    break;
                  }
                  wu(e, Hs, Ws);
                  break;
                case 4:
                  if ((su(e, n), (4194240 & n) === n)) break;
                  for (t = e.eventTimes, a = -1; 0 < n; ) {
                    var i = 31 - lt(n);
                    (l = 1 << i), (i = t[i]) > a && (a = i), (n &= ~l);
                  }
                  if (
                    ((n = a),
                    10 <
                      (n =
                        (120 > (n = Xe() - n)
                          ? 120
                          : 480 > n
                          ? 480
                          : 1080 > n
                          ? 1080
                          : 1920 > n
                          ? 1920
                          : 3e3 > n
                          ? 3e3
                          : 4320 > n
                          ? 4320
                          : 1960 * js(n / 1960)) - n))
                  ) {
                    e.timeoutHandle = na(wu.bind(null, e, Hs, Ws), n);
                    break;
                  }
                  wu(e, Hs, Ws);
                  break;
                default:
                  throw Error(o(329));
              }
            }
          }
          return au(e, Xe()), e.callbackNode === r ? ou.bind(null, e) : null;
        }
        function lu(e, t) {
          var r = Bs;
          return (
            e.current.memoizedState.isDehydrated && (pu(e, t).flags |= 256),
            2 !== (e = bu(e, t)) && ((t = Hs), (Hs = r), null !== t && iu(t)),
            e
          );
        }
        function iu(e) {
          null === Hs ? (Hs = e) : Hs.push.apply(Hs, e);
        }
        function su(e, t) {
          for (
            t &= ~As,
              t &= ~Fs,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var r = 31 - lt(t),
              n = 1 << r;
            (e[r] = -1), (t &= ~n);
          }
        }
        function uu(e) {
          if (0 !== (6 & _s)) throw Error(o(327));
          Nu();
          var t = ft(e, 0);
          if (0 === (1 & t)) return au(e, Xe()), null;
          var r = bu(e, t);
          if (0 !== e.tag && 2 === r) {
            var n = gt(e);
            0 !== n && ((t = n), (r = lu(e, n)));
          }
          if (1 === r) throw ((r = Is), pu(e, 0), su(e, t), au(e, Xe()), r);
          if (6 === r) throw Error(o(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            wu(e, Hs, Ws),
            au(e, Xe()),
            null
          );
        }
        function cu(e, t) {
          var r = _s;
          _s |= 1;
          try {
            return e(t);
          } finally {
            0 === (_s = r) && ((Vs = Xe() + 500), Aa && Ua());
          }
        }
        function du(e) {
          null !== Gs && 0 === Gs.tag && 0 === (6 & _s) && Nu();
          var t = _s;
          _s |= 1;
          var r = Ps.transition,
            n = yt;
          try {
            if (((Ps.transition = null), (yt = 1), e)) return e();
          } finally {
            (yt = n), (Ps.transition = r), 0 === (6 & (_s = t)) && Ua();
          }
        }
        function fu() {
          (Ms = Os.current), ja(Os);
        }
        function pu(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var r = e.timeoutHandle;
          if ((-1 !== r && ((e.timeoutHandle = -1), aa(r)), null !== Ts))
            for (r = Ts.return; null !== r; ) {
              var n = r;
              switch ((to(n), n.tag)) {
                case 1:
                  null !== (n = n.type.childContextTypes) &&
                    void 0 !== n &&
                    Ma();
                  break;
                case 3:
                  ol(), ja(_a), ja(Pa), dl();
                  break;
                case 5:
                  il(n);
                  break;
                case 4:
                  ol();
                  break;
                case 13:
                case 19:
                  ja(sl);
                  break;
                case 10:
                  No(n.type._context);
                  break;
                case 22:
                case 23:
                  fu();
              }
              r = r.return;
            }
          if (
            ((zs = e),
            (Ts = e = Ou(e.current, null)),
            (Ls = Ms = t),
            (Rs = 0),
            (Is = null),
            (As = Fs = Ds = 0),
            (Hs = Bs = null),
            null !== Eo)
          ) {
            for (t = 0; t < Eo.length; t++)
              if (null !== (n = (r = Eo[t]).interleaved)) {
                r.interleaved = null;
                var a = n.next,
                  o = r.pending;
                if (null !== o) {
                  var l = o.next;
                  (o.next = a), (n.next = l);
                }
                r.pending = n;
              }
            Eo = null;
          }
          return e;
        }
        function gu(e, t) {
          for (;;) {
            var r = Ts;
            try {
              if ((wo(), (fl.current = li), vl)) {
                for (var n = hl.memoizedState; null !== n; ) {
                  var a = n.queue;
                  null !== a && (a.pending = null), (n = n.next);
                }
                vl = !1;
              }
              if (
                ((gl = 0),
                (bl = ml = hl = null),
                (yl = !1),
                (xl = 0),
                (Es.current = null),
                null === r || null === r.return)
              ) {
                (Rs = 1), (Is = t), (Ts = null);
                break;
              }
              e: {
                var l = e,
                  i = r.return,
                  s = r,
                  u = t;
                if (
                  ((t = Ls),
                  (s.flags |= 32768),
                  null !== u &&
                    "object" === typeof u &&
                    "function" === typeof u.then)
                ) {
                  var c = u,
                    d = s,
                    f = d.tag;
                  if (0 === (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                    var p = d.alternate;
                    p
                      ? ((d.updateQueue = p.updateQueue),
                        (d.memoizedState = p.memoizedState),
                        (d.lanes = p.lanes))
                      : ((d.updateQueue = null), (d.memoizedState = null));
                  }
                  var g = bi(i);
                  if (null !== g) {
                    (g.flags &= -257),
                      vi(g, i, s, 0, t),
                      1 & g.mode && mi(l, c, t),
                      (u = c);
                    var h = (t = g).updateQueue;
                    if (null === h) {
                      var m = new Set();
                      m.add(u), (t.updateQueue = m);
                    } else h.add(u);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    mi(l, c, t), mu();
                    break e;
                  }
                  u = Error(o(426));
                } else if (ao && 1 & s.mode) {
                  var b = bi(i);
                  if (null !== b) {
                    0 === (65536 & b.flags) && (b.flags |= 256),
                      vi(b, i, s, 0, t),
                      ho(ci(u, s));
                    break e;
                  }
                }
                (l = u = ci(u, s)),
                  4 !== Rs && (Rs = 2),
                  null === Bs ? (Bs = [l]) : Bs.push(l),
                  (l = i);
                do {
                  switch (l.tag) {
                    case 3:
                      (l.flags |= 65536),
                        (t &= -t),
                        (l.lanes |= t),
                        Do(l, gi(0, u, t));
                      break e;
                    case 1:
                      s = u;
                      var v = l.type,
                        y = l.stateNode;
                      if (
                        0 === (128 & l.flags) &&
                        ("function" === typeof v.getDerivedStateFromError ||
                          (null !== y &&
                            "function" === typeof y.componentDidCatch &&
                            (null === Qs || !Qs.has(y))))
                      ) {
                        (l.flags |= 65536),
                          (t &= -t),
                          (l.lanes |= t),
                          Do(l, hi(l, s, t));
                        break e;
                      }
                  }
                  l = l.return;
                } while (null !== l);
              }
              ku(r);
            } catch (x) {
              (t = x), Ts === r && null !== r && (Ts = r = r.return);
              continue;
            }
            break;
          }
        }
        function hu() {
          var e = Cs.current;
          return (Cs.current = li), null === e ? li : e;
        }
        function mu() {
          (0 !== Rs && 3 !== Rs && 2 !== Rs) || (Rs = 4),
            null === zs ||
              (0 === (268435455 & Ds) && 0 === (268435455 & Fs)) ||
              su(zs, Ls);
        }
        function bu(e, t) {
          var r = _s;
          _s |= 2;
          var n = hu();
          for ((zs === e && Ls === t) || ((Ws = null), pu(e, t)); ; )
            try {
              vu();
              break;
            } catch (a) {
              gu(e, a);
            }
          if ((wo(), (_s = r), (Cs.current = n), null !== Ts))
            throw Error(o(261));
          return (zs = null), (Ls = 0), Rs;
        }
        function vu() {
          for (; null !== Ts; ) xu(Ts);
        }
        function yu() {
          for (; null !== Ts && !Ge(); ) xu(Ts);
        }
        function xu(e) {
          var t = Ss(e.alternate, e, Ms);
          (e.memoizedProps = e.pendingProps),
            null === t ? ku(e) : (Ts = t),
            (Es.current = null);
        }
        function ku(e) {
          var t = e;
          do {
            var r = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (r = qi(r, t, Ms))) return void (Ts = r);
            } else {
              if (null !== (r = Gi(r, t)))
                return (r.flags &= 32767), void (Ts = r);
              if (null === e) return (Rs = 6), void (Ts = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Ts = t);
            Ts = t = e;
          } while (null !== t);
          0 === Rs && (Rs = 5);
        }
        function wu(e, t, r) {
          var n = yt,
            a = Ps.transition;
          try {
            (Ps.transition = null),
              (yt = 1),
              (function (e, t, r, n) {
                do {
                  Nu();
                } while (null !== Gs);
                if (0 !== (6 & _s)) throw Error(o(327));
                r = e.finishedWork;
                var a = e.finishedLanes;
                if (null === r) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  r === e.current)
                )
                  throw Error(o(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var l = r.lanes | r.childLanes;
                if (
                  ((function (e, t) {
                    var r = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var n = e.eventTimes;
                    for (e = e.expirationTimes; 0 < r; ) {
                      var a = 31 - lt(r),
                        o = 1 << a;
                      (t[a] = 0), (n[a] = -1), (e[a] = -1), (r &= ~o);
                    }
                  })(e, l),
                  e === zs && ((Ts = zs = null), (Ls = 0)),
                  (0 === (2064 & r.subtreeFlags) && 0 === (2064 & r.flags)) ||
                    qs ||
                    ((qs = !0),
                    zu(tt, function () {
                      return Nu(), null;
                    })),
                  (l = 0 !== (15990 & r.flags)),
                  0 !== (15990 & r.subtreeFlags) || l)
                ) {
                  (l = Ps.transition), (Ps.transition = null);
                  var i = yt;
                  yt = 1;
                  var s = _s;
                  (_s |= 4),
                    (Es.current = null),
                    (function (e, t) {
                      if (((ea = Wt), pn((e = fn())))) {
                        if ("selectionStart" in e)
                          var r = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var n =
                              (r =
                                ((r = e.ownerDocument) && r.defaultView) ||
                                window).getSelection && r.getSelection();
                            if (n && 0 !== n.rangeCount) {
                              r = n.anchorNode;
                              var a = n.anchorOffset,
                                l = n.focusNode;
                              n = n.focusOffset;
                              try {
                                r.nodeType, l.nodeType;
                              } catch (k) {
                                r = null;
                                break e;
                              }
                              var i = 0,
                                s = -1,
                                u = -1,
                                c = 0,
                                d = 0,
                                f = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var g;
                                  f !== r ||
                                    (0 !== a && 3 !== f.nodeType) ||
                                    (s = i + a),
                                    f !== l ||
                                      (0 !== n && 3 !== f.nodeType) ||
                                      (u = i + n),
                                    3 === f.nodeType &&
                                      (i += f.nodeValue.length),
                                    null !== (g = f.firstChild);

                                )
                                  (p = f), (f = g);
                                for (;;) {
                                  if (f === e) break t;
                                  if (
                                    (p === r && ++c === a && (s = i),
                                    p === l && ++d === n && (u = i),
                                    null !== (g = f.nextSibling))
                                  )
                                    break;
                                  p = (f = p).parentNode;
                                }
                                f = g;
                              }
                              r =
                                -1 === s || -1 === u
                                  ? null
                                  : { start: s, end: u };
                            } else r = null;
                          }
                        r = r || { start: 0, end: 0 };
                      } else r = null;
                      for (
                        ta = { focusedElem: e, selectionRange: r },
                          Wt = !1,
                          Zi = t;
                        null !== Zi;

                      )
                        if (
                          ((e = (t = Zi).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Zi = e);
                        else
                          for (; null !== Zi; ) {
                            t = Zi;
                            try {
                              var h = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== h) {
                                      var m = h.memoizedProps,
                                        b = h.memoizedState,
                                        v = t.stateNode,
                                        y = v.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? m
                                            : bo(t.type, m),
                                          b
                                        );
                                      v.__reactInternalSnapshotBeforeUpdate = y;
                                    }
                                    break;
                                  case 3:
                                    var x = t.stateNode.containerInfo;
                                    1 === x.nodeType
                                      ? (x.textContent = "")
                                      : 9 === x.nodeType &&
                                        x.documentElement &&
                                        x.removeChild(x.documentElement);
                                    break;
                                  default:
                                    throw Error(o(163));
                                }
                            } catch (k) {
                              ju(t, t.return, k);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Zi = e);
                              break;
                            }
                            Zi = t.return;
                          }
                      (h = rs), (rs = !1);
                    })(e, r),
                    bs(r, e),
                    gn(ta),
                    (Wt = !!ea),
                    (ta = ea = null),
                    (e.current = r),
                    ys(r, e, a),
                    Ye(),
                    (_s = s),
                    (yt = i),
                    (Ps.transition = l);
                } else e.current = r;
                if (
                  (qs && ((qs = !1), (Gs = e), (Ys = a)),
                  (l = e.pendingLanes),
                  0 === l && (Qs = null),
                  (function (e) {
                    if (ot && "function" === typeof ot.onCommitFiberRoot)
                      try {
                        ot.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(r.stateNode),
                  au(e, Xe()),
                  null !== t)
                )
                  for (n = e.onRecoverableError, r = 0; r < t.length; r++)
                    (a = t[r]),
                      n(a.value, { componentStack: a.stack, digest: a.digest });
                if ($s) throw (($s = !1), (e = Ks), (Ks = null), e);
                0 !== (1 & Ys) && 0 !== e.tag && Nu(),
                  (l = e.pendingLanes),
                  0 !== (1 & l)
                    ? e === Js
                      ? Xs++
                      : ((Xs = 0), (Js = e))
                    : (Xs = 0),
                  Ua();
              })(e, t, r, n);
          } finally {
            (Ps.transition = a), (yt = n);
          }
          return null;
        }
        function Nu() {
          if (null !== Gs) {
            var e = xt(Ys),
              t = Ps.transition,
              r = yt;
            try {
              if (((Ps.transition = null), (yt = 16 > e ? 16 : e), null === Gs))
                var n = !1;
              else {
                if (((e = Gs), (Gs = null), (Ys = 0), 0 !== (6 & _s)))
                  throw Error(o(331));
                var a = _s;
                for (_s |= 4, Zi = e.current; null !== Zi; ) {
                  var l = Zi,
                    i = l.child;
                  if (0 !== (16 & Zi.flags)) {
                    var s = l.deletions;
                    if (null !== s) {
                      for (var u = 0; u < s.length; u++) {
                        var c = s[u];
                        for (Zi = c; null !== Zi; ) {
                          var d = Zi;
                          switch (d.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ns(8, d, l);
                          }
                          var f = d.child;
                          if (null !== f) (f.return = d), (Zi = f);
                          else
                            for (; null !== Zi; ) {
                              var p = (d = Zi).sibling,
                                g = d.return;
                              if ((ls(d), d === c)) {
                                Zi = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = g), (Zi = p);
                                break;
                              }
                              Zi = g;
                            }
                        }
                      }
                      var h = l.alternate;
                      if (null !== h) {
                        var m = h.child;
                        if (null !== m) {
                          h.child = null;
                          do {
                            var b = m.sibling;
                            (m.sibling = null), (m = b);
                          } while (null !== m);
                        }
                      }
                      Zi = l;
                    }
                  }
                  if (0 !== (2064 & l.subtreeFlags) && null !== i)
                    (i.return = l), (Zi = i);
                  else
                    e: for (; null !== Zi; ) {
                      if (0 !== (2048 & (l = Zi).flags))
                        switch (l.tag) {
                          case 0:
                          case 11:
                          case 15:
                            ns(9, l, l.return);
                        }
                      var v = l.sibling;
                      if (null !== v) {
                        (v.return = l.return), (Zi = v);
                        break e;
                      }
                      Zi = l.return;
                    }
                }
                var y = e.current;
                for (Zi = y; null !== Zi; ) {
                  var x = (i = Zi).child;
                  if (0 !== (2064 & i.subtreeFlags) && null !== x)
                    (x.return = i), (Zi = x);
                  else
                    e: for (i = y; null !== Zi; ) {
                      if (0 !== (2048 & (s = Zi).flags))
                        try {
                          switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                              as(9, s);
                          }
                        } catch (w) {
                          ju(s, s.return, w);
                        }
                      if (s === i) {
                        Zi = null;
                        break e;
                      }
                      var k = s.sibling;
                      if (null !== k) {
                        (k.return = s.return), (Zi = k);
                        break e;
                      }
                      Zi = s.return;
                    }
                }
                if (
                  ((_s = a),
                  Ua(),
                  ot && "function" === typeof ot.onPostCommitFiberRoot)
                )
                  try {
                    ot.onPostCommitFiberRoot(at, e);
                  } catch (w) {}
                n = !0;
              }
              return n;
            } finally {
              (yt = r), (Ps.transition = t);
            }
          }
          return !1;
        }
        function Su(e, t, r) {
          (e = Ro(e, (t = gi(0, (t = ci(r, t)), 1)), 1)),
            (t = tu()),
            null !== e && (bt(e, 1, t), au(e, t));
        }
        function ju(e, t, r) {
          if (3 === e.tag) Su(e, e, r);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Su(t, e, r);
                break;
              }
              if (1 === t.tag) {
                var n = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof n.componentDidCatch &&
                    (null === Qs || !Qs.has(n)))
                ) {
                  (t = Ro(t, (e = hi(t, (e = ci(r, e)), 1)), 1)),
                    (e = tu()),
                    null !== t && (bt(t, 1, e), au(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Cu(e, t, r) {
          var n = e.pingCache;
          null !== n && n.delete(t),
            (t = tu()),
            (e.pingedLanes |= e.suspendedLanes & r),
            zs === e &&
              (Ls & r) === r &&
              (4 === Rs ||
              (3 === Rs && (130023424 & Ls) === Ls && 500 > Xe() - Us)
                ? pu(e, 0)
                : (As |= r)),
            au(e, t);
        }
        function Eu(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var r = tu();
          null !== (e = zo(e, t)) && (bt(e, t, r), au(e, r));
        }
        function Pu(e) {
          var t = e.memoizedState,
            r = 0;
          null !== t && (r = t.retryLane), Eu(e, r);
        }
        function _u(e, t) {
          var r = 0;
          switch (e.tag) {
            case 13:
              var n = e.stateNode,
                a = e.memoizedState;
              null !== a && (r = a.retryLane);
              break;
            case 19:
              n = e.stateNode;
              break;
            default:
              throw Error(o(314));
          }
          null !== n && n.delete(t), Eu(e, r);
        }
        function zu(e, t) {
          return Qe(e, t);
        }
        function Tu(e, t, r, n) {
          (this.tag = e),
            (this.key = r),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = n),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Lu(e, t, r, n) {
          return new Tu(e, t, r, n);
        }
        function Mu(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Ou(e, t) {
          var r = e.alternate;
          return (
            null === r
              ? (((r = Lu(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (r.type = e.type),
                (r.stateNode = e.stateNode),
                (r.alternate = e),
                (e.alternate = r))
              : ((r.pendingProps = t),
                (r.type = e.type),
                (r.flags = 0),
                (r.subtreeFlags = 0),
                (r.deletions = null)),
            (r.flags = 14680064 & e.flags),
            (r.childLanes = e.childLanes),
            (r.lanes = e.lanes),
            (r.child = e.child),
            (r.memoizedProps = e.memoizedProps),
            (r.memoizedState = e.memoizedState),
            (r.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (r.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (r.sibling = e.sibling),
            (r.index = e.index),
            (r.ref = e.ref),
            r
          );
        }
        function Ru(e, t, r, n, a, l) {
          var i = 2;
          if (((n = e), "function" === typeof e)) Mu(e) && (i = 1);
          else if ("string" === typeof e) i = 5;
          else
            e: switch (e) {
              case N:
                return Iu(r.children, a, l, t);
              case S:
                (i = 8), (a |= 8);
                break;
              case j:
                return (
                  ((e = Lu(12, r, t, 2 | a)).elementType = j), (e.lanes = l), e
                );
              case _:
                return (
                  ((e = Lu(13, r, t, a)).elementType = _), (e.lanes = l), e
                );
              case z:
                return (
                  ((e = Lu(19, r, t, a)).elementType = z), (e.lanes = l), e
                );
              case M:
                return Du(r, a, l, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case C:
                      i = 10;
                      break e;
                    case E:
                      i = 9;
                      break e;
                    case P:
                      i = 11;
                      break e;
                    case T:
                      i = 14;
                      break e;
                    case L:
                      (i = 16), (n = null);
                      break e;
                  }
                throw Error(o(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Lu(i, r, t, a)).elementType = e),
            (t.type = n),
            (t.lanes = l),
            t
          );
        }
        function Iu(e, t, r, n) {
          return ((e = Lu(7, e, n, t)).lanes = r), e;
        }
        function Du(e, t, r, n) {
          return (
            ((e = Lu(22, e, n, t)).elementType = M),
            (e.lanes = r),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Fu(e, t, r) {
          return ((e = Lu(6, e, null, t)).lanes = r), e;
        }
        function Au(e, t, r) {
          return (
            ((t = Lu(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = r),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Bu(e, t, r, n, a) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = mt(0)),
            (this.expirationTimes = mt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = mt(0)),
            (this.identifierPrefix = n),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Hu(e, t, r, n, a, o, l, i, s) {
          return (
            (e = new Bu(e, t, r, i, s)),
            1 === t ? ((t = 1), !0 === o && (t |= 8)) : (t = 0),
            (o = Lu(3, null, null, t)),
            (e.current = o),
            (o.stateNode = e),
            (o.memoizedState = {
              element: n,
              isDehydrated: r,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Lo(o),
            e
          );
        }
        function Uu(e) {
          if (!e) return Ea;
          e: {
            if (Ue((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(o(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (La(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(o(171));
          }
          if (1 === e.tag) {
            var r = e.type;
            if (La(r)) return Ra(e, r, t);
          }
          return t;
        }
        function Vu(e, t, r, n, a, o, l, i, s) {
          return (
            ((e = Hu(r, n, !0, e, 0, o, 0, i, s)).context = Uu(null)),
            (r = e.current),
            ((o = Oo((n = tu()), (a = ru(r)))).callback =
              void 0 !== t && null !== t ? t : null),
            Ro(r, o, a),
            (e.current.lanes = a),
            bt(e, a, n),
            au(e, n),
            e
          );
        }
        function Wu(e, t, r, n) {
          var a = t.current,
            o = tu(),
            l = ru(a);
          return (
            (r = Uu(r)),
            null === t.context ? (t.context = r) : (t.pendingContext = r),
            ((t = Oo(o, l)).payload = { element: e }),
            null !== (n = void 0 === n ? null : n) && (t.callback = n),
            null !== (e = Ro(a, t, l)) && (nu(e, a, l, o), Io(e, a, l)),
            l
          );
        }
        function $u(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Ku(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var r = e.retryLane;
            e.retryLane = 0 !== r && r < t ? r : t;
          }
        }
        function Qu(e, t) {
          Ku(e, t), (e = e.alternate) && Ku(e, t);
        }
        Ss = function (e, t, r) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || _a.current) xi = !0;
            else {
              if (0 === (e.lanes & r) && 0 === (128 & t.flags))
                return (
                  (xi = !1),
                  (function (e, t, r) {
                    switch (t.tag) {
                      case 3:
                        zi(t), go();
                        break;
                      case 5:
                        ll(t);
                        break;
                      case 1:
                        La(t.type) && Ia(t);
                        break;
                      case 4:
                        al(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var n = t.type._context,
                          a = t.memoizedProps.value;
                        Ca(vo, n._currentValue), (n._currentValue = a);
                        break;
                      case 13:
                        if (null !== (n = t.memoizedState))
                          return null !== n.dehydrated
                            ? (Ca(sl, 1 & sl.current), (t.flags |= 128), null)
                            : 0 !== (r & t.child.childLanes)
                            ? Fi(e, t, r)
                            : (Ca(sl, 1 & sl.current),
                              null !== (e = $i(e, t, r)) ? e.sibling : null);
                        Ca(sl, 1 & sl.current);
                        break;
                      case 19:
                        if (
                          ((n = 0 !== (r & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (n) return Vi(e, t, r);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          Ca(sl, sl.current),
                          n)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), ji(e, t, r);
                    }
                    return $i(e, t, r);
                  })(e, t, r)
                );
              xi = 0 !== (131072 & e.flags);
            }
          else (xi = !1), ao && 0 !== (1048576 & t.flags) && Za(t, Ka, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var n = t.type;
              Wi(e, t), (e = t.pendingProps);
              var a = Ta(t, Pa.current);
              jo(t, r), (a = Sl(null, t, n, e, a, r));
              var l = jl();
              return (
                (t.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    La(n) ? ((l = !0), Ia(t)) : (l = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    Lo(t),
                    (a.updater = Uo),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    Ko(t, n, e, r),
                    (t = _i(null, t, n, !0, l, r)))
                  : ((t.tag = 0),
                    ao && l && eo(t),
                    ki(null, t, a, r),
                    (t = t.child)),
                t
              );
            case 16:
              n = t.elementType;
              e: {
                switch (
                  (Wi(e, t),
                  (e = t.pendingProps),
                  (n = (a = n._init)(n._payload)),
                  (t.type = n),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Mu(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === P) return 11;
                        if (e === T) return 14;
                      }
                      return 2;
                    })(n)),
                  (e = bo(n, e)),
                  a)
                ) {
                  case 0:
                    t = Ei(null, t, n, e, r);
                    break e;
                  case 1:
                    t = Pi(null, t, n, e, r);
                    break e;
                  case 11:
                    t = wi(null, t, n, e, r);
                    break e;
                  case 14:
                    t = Ni(null, t, n, bo(n.type, e), r);
                    break e;
                }
                throw Error(o(306, n, ""));
              }
              return t;
            case 0:
              return (
                (n = t.type),
                (a = t.pendingProps),
                Ei(e, t, n, (a = t.elementType === n ? a : bo(n, a)), r)
              );
            case 1:
              return (
                (n = t.type),
                (a = t.pendingProps),
                Pi(e, t, n, (a = t.elementType === n ? a : bo(n, a)), r)
              );
            case 3:
              e: {
                if ((zi(t), null === e)) throw Error(o(387));
                (n = t.pendingProps),
                  (a = (l = t.memoizedState).element),
                  Mo(e, t),
                  Fo(t, n, null, r);
                var i = t.memoizedState;
                if (((n = i.element), l.isDehydrated)) {
                  if (
                    ((l = {
                      element: n,
                      isDehydrated: !1,
                      cache: i.cache,
                      pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                      transitions: i.transitions,
                    }),
                    (t.updateQueue.baseState = l),
                    (t.memoizedState = l),
                    256 & t.flags)
                  ) {
                    t = Ti(e, t, n, r, (a = ci(Error(o(423)), t)));
                    break e;
                  }
                  if (n !== a) {
                    t = Ti(e, t, n, r, (a = ci(Error(o(424)), t)));
                    break e;
                  }
                  for (
                    no = ua(t.stateNode.containerInfo.firstChild),
                      ro = t,
                      ao = !0,
                      oo = null,
                      r = Jo(t, null, n, r),
                      t.child = r;
                    r;

                  )
                    (r.flags = (-3 & r.flags) | 4096), (r = r.sibling);
                } else {
                  if ((go(), n === a)) {
                    t = $i(e, t, r);
                    break e;
                  }
                  ki(e, t, n, r);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                ll(t),
                null === e && uo(t),
                (n = t.type),
                (a = t.pendingProps),
                (l = null !== e ? e.memoizedProps : null),
                (i = a.children),
                ra(n, a)
                  ? (i = null)
                  : null !== l && ra(n, l) && (t.flags |= 32),
                Ci(e, t),
                ki(e, t, i, r),
                t.child
              );
            case 6:
              return null === e && uo(t), null;
            case 13:
              return Fi(e, t, r);
            case 4:
              return (
                al(t, t.stateNode.containerInfo),
                (n = t.pendingProps),
                null === e ? (t.child = Xo(t, null, n, r)) : ki(e, t, n, r),
                t.child
              );
            case 11:
              return (
                (n = t.type),
                (a = t.pendingProps),
                wi(e, t, n, (a = t.elementType === n ? a : bo(n, a)), r)
              );
            case 7:
              return ki(e, t, t.pendingProps, r), t.child;
            case 8:
            case 12:
              return ki(e, t, t.pendingProps.children, r), t.child;
            case 10:
              e: {
                if (
                  ((n = t.type._context),
                  (a = t.pendingProps),
                  (l = t.memoizedProps),
                  (i = a.value),
                  Ca(vo, n._currentValue),
                  (n._currentValue = i),
                  null !== l)
                )
                  if (ln(l.value, i)) {
                    if (l.children === a.children && !_a.current) {
                      t = $i(e, t, r);
                      break e;
                    }
                  } else
                    for (
                      null !== (l = t.child) && (l.return = t);
                      null !== l;

                    ) {
                      var s = l.dependencies;
                      if (null !== s) {
                        i = l.child;
                        for (var u = s.firstContext; null !== u; ) {
                          if (u.context === n) {
                            if (1 === l.tag) {
                              (u = Oo(-1, r & -r)).tag = 2;
                              var c = l.updateQueue;
                              if (null !== c) {
                                var d = (c = c.shared).pending;
                                null === d
                                  ? (u.next = u)
                                  : ((u.next = d.next), (d.next = u)),
                                  (c.pending = u);
                              }
                            }
                            (l.lanes |= r),
                              null !== (u = l.alternate) && (u.lanes |= r),
                              So(l.return, r, t),
                              (s.lanes |= r);
                            break;
                          }
                          u = u.next;
                        }
                      } else if (10 === l.tag)
                        i = l.type === t.type ? null : l.child;
                      else if (18 === l.tag) {
                        if (null === (i = l.return)) throw Error(o(341));
                        (i.lanes |= r),
                          null !== (s = i.alternate) && (s.lanes |= r),
                          So(i, r, t),
                          (i = l.sibling);
                      } else i = l.child;
                      if (null !== i) i.return = l;
                      else
                        for (i = l; null !== i; ) {
                          if (i === t) {
                            i = null;
                            break;
                          }
                          if (null !== (l = i.sibling)) {
                            (l.return = i.return), (i = l);
                            break;
                          }
                          i = i.return;
                        }
                      l = i;
                    }
                ki(e, t, a.children, r), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (n = t.pendingProps.children),
                jo(t, r),
                (n = n((a = Co(a)))),
                (t.flags |= 1),
                ki(e, t, n, r),
                t.child
              );
            case 14:
              return (
                (a = bo((n = t.type), t.pendingProps)),
                Ni(e, t, n, (a = bo(n.type, a)), r)
              );
            case 15:
              return Si(e, t, t.type, t.pendingProps, r);
            case 17:
              return (
                (n = t.type),
                (a = t.pendingProps),
                (a = t.elementType === n ? a : bo(n, a)),
                Wi(e, t),
                (t.tag = 1),
                La(n) ? ((e = !0), Ia(t)) : (e = !1),
                jo(t, r),
                Wo(t, n, a),
                Ko(t, n, a, r),
                _i(null, t, n, !0, e, r)
              );
            case 19:
              return Vi(e, t, r);
            case 22:
              return ji(e, t, r);
          }
          throw Error(o(156, t.tag));
        };
        var qu =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Gu(e) {
          this._internalRoot = e;
        }
        function Yu(e) {
          this._internalRoot = e;
        }
        function Xu(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Ju(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Zu() {}
        function ec(e, t, r, n, a) {
          var o = r._reactRootContainer;
          if (o) {
            var l = o;
            if ("function" === typeof a) {
              var i = a;
              a = function () {
                var e = $u(l);
                i.call(e);
              };
            }
            Wu(t, l, e, a);
          } else
            l = (function (e, t, r, n, a) {
              if (a) {
                if ("function" === typeof n) {
                  var o = n;
                  n = function () {
                    var e = $u(l);
                    o.call(e);
                  };
                }
                var l = Vu(t, n, e, 0, null, !1, 0, "", Zu);
                return (
                  (e._reactRootContainer = l),
                  (e[ga] = l.current),
                  Un(8 === e.nodeType ? e.parentNode : e),
                  du(),
                  l
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof n) {
                var i = n;
                n = function () {
                  var e = $u(s);
                  i.call(e);
                };
              }
              var s = Hu(e, 0, !1, null, 0, !1, 0, "", Zu);
              return (
                (e._reactRootContainer = s),
                (e[ga] = s.current),
                Un(8 === e.nodeType ? e.parentNode : e),
                du(function () {
                  Wu(t, s, r, n);
                }),
                s
              );
            })(r, t, e, a, n);
          return $u(l);
        }
        (Yu.prototype.render = Gu.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(o(409));
            Wu(e, t, null, null);
          }),
          (Yu.prototype.unmount = Gu.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                du(function () {
                  Wu(null, e, null, null);
                }),
                  (t[ga] = null);
              }
            }),
          (Yu.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = St();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var r = 0;
                r < Mt.length && 0 !== t && t < Mt[r].priority;
                r++
              );
              Mt.splice(r, 0, e), 0 === r && Dt(e);
            }
          }),
          (kt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var r = dt(t.pendingLanes);
                  0 !== r &&
                    (vt(t, 1 | r),
                    au(t, Xe()),
                    0 === (6 & _s) && ((Vs = Xe() + 500), Ua()));
                }
                break;
              case 13:
                du(function () {
                  var t = zo(e, 1);
                  if (null !== t) {
                    var r = tu();
                    nu(t, e, 1, r);
                  }
                }),
                  Qu(e, 1);
            }
          }),
          (wt = function (e) {
            if (13 === e.tag) {
              var t = zo(e, 134217728);
              if (null !== t) nu(t, e, 134217728, tu());
              Qu(e, 134217728);
            }
          }),
          (Nt = function (e) {
            if (13 === e.tag) {
              var t = ru(e),
                r = zo(e, t);
              if (null !== r) nu(r, e, t, tu());
              Qu(e, t);
            }
          }),
          (St = function () {
            return yt;
          }),
          (jt = function (e, t) {
            var r = yt;
            try {
              return (yt = e), t();
            } finally {
              yt = r;
            }
          }),
          (we = function (e, t, r) {
            switch (t) {
              case "input":
                if ((J(e, r), (t = r.name), "radio" === r.type && null != t)) {
                  for (r = e; r.parentNode; ) r = r.parentNode;
                  for (
                    r = r.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < r.length;
                    t++
                  ) {
                    var n = r[t];
                    if (n !== e && n.form === e.form) {
                      var a = ka(n);
                      if (!a) throw Error(o(90));
                      Q(n), J(n, a);
                    }
                  }
                }
                break;
              case "textarea":
                oe(e, r);
                break;
              case "select":
                null != (t = r.value) && re(e, !!r.multiple, t, !1);
            }
          }),
          (Pe = cu),
          (_e = du);
        var tc = {
            usingClientEntryPoint: !1,
            Events: [ya, xa, ka, Ce, Ee, cu],
          },
          rc = {
            findFiberByHostInstance: va,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          nc = {
            bundleType: rc.bundleType,
            version: rc.version,
            rendererPackageName: rc.rendererPackageName,
            rendererConfig: rc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: x.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = $e(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              rc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ac = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ac.isDisabled && ac.supportsFiber)
            try {
              (at = ac.inject(nc)), (ot = ac);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
          (t.createPortal = function (e, t) {
            var r =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Xu(t)) throw Error(o(200));
            return (function (e, t, r) {
              var n =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: w,
                key: null == n ? null : "" + n,
                children: e,
                containerInfo: t,
                implementation: r,
              };
            })(e, t, null, r);
          }),
          (t.createRoot = function (e, t) {
            if (!Xu(e)) throw Error(o(299));
            var r = !1,
              n = "",
              a = qu;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (r = !0),
                void 0 !== t.identifierPrefix && (n = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = Hu(e, 1, !1, null, 0, r, 0, n, a)),
              (e[ga] = t.current),
              Un(8 === e.nodeType ? e.parentNode : e),
              new Gu(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(o(188));
              throw ((e = Object.keys(e).join(",")), Error(o(268, e)));
            }
            return (e = null === (e = $e(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return du(e);
          }),
          (t.hydrate = function (e, t, r) {
            if (!Ju(t)) throw Error(o(200));
            return ec(null, e, t, !0, r);
          }),
          (t.hydrateRoot = function (e, t, r) {
            if (!Xu(e)) throw Error(o(405));
            var n = (null != r && r.hydratedSources) || null,
              a = !1,
              l = "",
              i = qu;
            if (
              (null !== r &&
                void 0 !== r &&
                (!0 === r.unstable_strictMode && (a = !0),
                void 0 !== r.identifierPrefix && (l = r.identifierPrefix),
                void 0 !== r.onRecoverableError && (i = r.onRecoverableError)),
              (t = Vu(t, null, e, 1, null != r ? r : null, a, 0, l, i)),
              (e[ga] = t.current),
              Un(e),
              n)
            )
              for (e = 0; e < n.length; e++)
                (a = (a = (r = n[e])._getVersion)(r._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [r, a])
                    : t.mutableSourceEagerHydrationData.push(r, a);
            return new Yu(t);
          }),
          (t.render = function (e, t, r) {
            if (!Ju(t)) throw Error(o(200));
            return ec(null, e, t, !1, r);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Ju(e)) throw Error(o(40));
            return (
              !!e._reactRootContainer &&
              (du(function () {
                ec(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ga] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = cu),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
            if (!Ju(r)) throw Error(o(200));
            if (null == e || void 0 === e._reactInternals) throw Error(o(38));
            return ec(e, t, r, !1, n);
          }),
          (t.version = "18.2.0-next-9e3b772b8-20220608");
      },
      250: function (e, t, r) {
        "use strict";
        var n = r(164);
        (t.createRoot = n.createRoot), (t.hydrateRoot = n.hydrateRoot);
      },
      164: function (e, t, r) {
        "use strict";
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = r(463));
      },
      374: function (e, t, r) {
        "use strict";
        var n = r(791),
          a = Symbol.for("react.element"),
          o = Symbol.for("react.fragment"),
          l = Object.prototype.hasOwnProperty,
          i =
            n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          s = { key: !0, ref: !0, __self: !0, __source: !0 };
        function u(e, t, r) {
          var n,
            o = {},
            u = null,
            c = null;
          for (n in (void 0 !== r && (u = "" + r),
          void 0 !== t.key && (u = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            l.call(t, n) && !s.hasOwnProperty(n) && (o[n] = t[n]);
          if (e && e.defaultProps)
            for (n in (t = e.defaultProps)) void 0 === o[n] && (o[n] = t[n]);
          return {
            $$typeof: a,
            type: e,
            key: u,
            ref: c,
            props: o,
            _owner: i.current,
          };
        }
        (t.Fragment = o), (t.jsx = u), (t.jsxs = u);
      },
      117: function (e, t) {
        "use strict";
        var r = Symbol.for("react.element"),
          n = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          o = Symbol.for("react.strict_mode"),
          l = Symbol.for("react.profiler"),
          i = Symbol.for("react.provider"),
          s = Symbol.for("react.context"),
          u = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          f = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var g = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          h = Object.assign,
          m = {};
        function b(e, t, r) {
          (this.props = e),
            (this.context = t),
            (this.refs = m),
            (this.updater = r || g);
        }
        function v() {}
        function y(e, t, r) {
          (this.props = e),
            (this.context = t),
            (this.refs = m),
            (this.updater = r || g);
        }
        (b.prototype.isReactComponent = {}),
          (b.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (b.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (v.prototype = b.prototype);
        var x = (y.prototype = new v());
        (x.constructor = y), h(x, b.prototype), (x.isPureReactComponent = !0);
        var k = Array.isArray,
          w = Object.prototype.hasOwnProperty,
          N = { current: null },
          S = { key: !0, ref: !0, __self: !0, __source: !0 };
        function j(e, t, n) {
          var a,
            o = {},
            l = null,
            i = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (i = t.ref),
            void 0 !== t.key && (l = "" + t.key),
            t))
              w.call(t, a) && !S.hasOwnProperty(a) && (o[a] = t[a]);
          var s = arguments.length - 2;
          if (1 === s) o.children = n;
          else if (1 < s) {
            for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
            o.children = u;
          }
          if (e && e.defaultProps)
            for (a in (s = e.defaultProps)) void 0 === o[a] && (o[a] = s[a]);
          return {
            $$typeof: r,
            type: e,
            key: l,
            ref: i,
            props: o,
            _owner: N.current,
          };
        }
        function C(e) {
          return "object" === typeof e && null !== e && e.$$typeof === r;
        }
        var E = /\/+/g;
        function P(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function _(e, t, a, o, l) {
          var i = typeof e;
          ("undefined" !== i && "boolean" !== i) || (e = null);
          var s = !1;
          if (null === e) s = !0;
          else
            switch (i) {
              case "string":
              case "number":
                s = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case r:
                  case n:
                    s = !0;
                }
            }
          if (s)
            return (
              (l = l((s = e))),
              (e = "" === o ? "." + P(s, 0) : o),
              k(l)
                ? ((a = ""),
                  null != e && (a = e.replace(E, "$&/") + "/"),
                  _(l, t, a, "", function (e) {
                    return e;
                  }))
                : null != l &&
                  (C(l) &&
                    (l = (function (e, t) {
                      return {
                        $$typeof: r,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      l,
                      a +
                        (!l.key || (s && s.key === l.key)
                          ? ""
                          : ("" + l.key).replace(E, "$&/") + "/") +
                        e
                    )),
                  t.push(l)),
              1
            );
          if (((s = 0), (o = "" === o ? "." : o + ":"), k(e)))
            for (var u = 0; u < e.length; u++) {
              var c = o + P((i = e[u]), u);
              s += _(i, t, a, c, l);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), u = 0; !(i = e.next()).done; )
              s += _((i = i.value), t, a, (c = o + P(i, u++)), l);
          else if ("object" === i)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return s;
        }
        function z(e, t, r) {
          if (null == e) return e;
          var n = [],
            a = 0;
          return (
            _(e, n, "", "", function (e) {
              return t.call(r, e, a++);
            }),
            n
          );
        }
        function T(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var L = { current: null },
          M = { transition: null },
          O = {
            ReactCurrentDispatcher: L,
            ReactCurrentBatchConfig: M,
            ReactCurrentOwner: N,
          };
        (t.Children = {
          map: z,
          forEach: function (e, t, r) {
            z(
              e,
              function () {
                t.apply(this, arguments);
              },
              r
            );
          },
          count: function (e) {
            var t = 0;
            return (
              z(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              z(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!C(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = b),
          (t.Fragment = a),
          (t.Profiler = l),
          (t.PureComponent = y),
          (t.StrictMode = o),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = O),
          (t.cloneElement = function (e, t, n) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var a = h({}, e.props),
              o = e.key,
              l = e.ref,
              i = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((l = t.ref), (i = N.current)),
                void 0 !== t.key && (o = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var s = e.type.defaultProps;
              for (u in t)
                w.call(t, u) &&
                  !S.hasOwnProperty(u) &&
                  (a[u] = void 0 === t[u] && void 0 !== s ? s[u] : t[u]);
            }
            var u = arguments.length - 2;
            if (1 === u) a.children = n;
            else if (1 < u) {
              s = Array(u);
              for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
              a.children = s;
            }
            return {
              $$typeof: r,
              type: e.type,
              key: o,
              ref: l,
              props: a,
              _owner: i,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: s,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: i, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = j),
          (t.createFactory = function (e) {
            var t = j.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = C),
          (t.lazy = function (e) {
            return {
              $$typeof: f,
              _payload: { _status: -1, _result: e },
              _init: T,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = M.transition;
            M.transition = {};
            try {
              e();
            } finally {
              M.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.useCallback = function (e, t) {
            return L.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return L.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return L.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return L.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return L.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, r) {
            return L.current.useImperativeHandle(e, t, r);
          }),
          (t.useInsertionEffect = function (e, t) {
            return L.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return L.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return L.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, r) {
            return L.current.useReducer(e, t, r);
          }),
          (t.useRef = function (e) {
            return L.current.useRef(e);
          }),
          (t.useState = function (e) {
            return L.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, r) {
            return L.current.useSyncExternalStore(e, t, r);
          }),
          (t.useTransition = function () {
            return L.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      791: function (e, t, r) {
        "use strict";
        e.exports = r(117);
      },
      184: function (e, t, r) {
        "use strict";
        e.exports = r(374);
      },
      813: function (e, t) {
        "use strict";
        function r(e, t) {
          var r = e.length;
          e.push(t);
          e: for (; 0 < r; ) {
            var n = (r - 1) >>> 1,
              a = e[n];
            if (!(0 < o(a, t))) break e;
            (e[n] = t), (e[r] = a), (r = n);
          }
        }
        function n(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            r = e.pop();
          if (r !== t) {
            e[0] = r;
            e: for (var n = 0, a = e.length, l = a >>> 1; n < l; ) {
              var i = 2 * (n + 1) - 1,
                s = e[i],
                u = i + 1,
                c = e[u];
              if (0 > o(s, r))
                u < a && 0 > o(c, s)
                  ? ((e[n] = c), (e[u] = r), (n = u))
                  : ((e[n] = s), (e[i] = r), (n = i));
              else {
                if (!(u < a && 0 > o(c, r))) break e;
                (e[n] = c), (e[u] = r), (n = u);
              }
            }
          }
          return t;
        }
        function o(e, t) {
          var r = e.sortIndex - t.sortIndex;
          return 0 !== r ? r : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var l = performance;
          t.unstable_now = function () {
            return l.now();
          };
        } else {
          var i = Date,
            s = i.now();
          t.unstable_now = function () {
            return i.now() - s;
          };
        }
        var u = [],
          c = [],
          d = 1,
          f = null,
          p = 3,
          g = !1,
          h = !1,
          m = !1,
          b = "function" === typeof setTimeout ? setTimeout : null,
          v = "function" === typeof clearTimeout ? clearTimeout : null,
          y = "undefined" !== typeof setImmediate ? setImmediate : null;
        function x(e) {
          for (var t = n(c); null !== t; ) {
            if (null === t.callback) a(c);
            else {
              if (!(t.startTime <= e)) break;
              a(c), (t.sortIndex = t.expirationTime), r(u, t);
            }
            t = n(c);
          }
        }
        function k(e) {
          if (((m = !1), x(e), !h))
            if (null !== n(u)) (h = !0), M(w);
            else {
              var t = n(c);
              null !== t && O(k, t.startTime - e);
            }
        }
        function w(e, r) {
          (h = !1), m && ((m = !1), v(C), (C = -1)), (g = !0);
          var o = p;
          try {
            for (
              x(r), f = n(u);
              null !== f && (!(f.expirationTime > r) || (e && !_()));

            ) {
              var l = f.callback;
              if ("function" === typeof l) {
                (f.callback = null), (p = f.priorityLevel);
                var i = l(f.expirationTime <= r);
                (r = t.unstable_now()),
                  "function" === typeof i
                    ? (f.callback = i)
                    : f === n(u) && a(u),
                  x(r);
              } else a(u);
              f = n(u);
            }
            if (null !== f) var s = !0;
            else {
              var d = n(c);
              null !== d && O(k, d.startTime - r), (s = !1);
            }
            return s;
          } finally {
            (f = null), (p = o), (g = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var N,
          S = !1,
          j = null,
          C = -1,
          E = 5,
          P = -1;
        function _() {
          return !(t.unstable_now() - P < E);
        }
        function z() {
          if (null !== j) {
            var e = t.unstable_now();
            P = e;
            var r = !0;
            try {
              r = j(!0, e);
            } finally {
              r ? N() : ((S = !1), (j = null));
            }
          } else S = !1;
        }
        if ("function" === typeof y)
          N = function () {
            y(z);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var T = new MessageChannel(),
            L = T.port2;
          (T.port1.onmessage = z),
            (N = function () {
              L.postMessage(null);
            });
        } else
          N = function () {
            b(z, 0);
          };
        function M(e) {
          (j = e), S || ((S = !0), N());
        }
        function O(e, r) {
          C = b(function () {
            e(t.unstable_now());
          }, r);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            h || g || ((h = !0), M(w));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (E = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return n(u);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var r = p;
            p = t;
            try {
              return e();
            } finally {
              p = r;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var r = p;
            p = e;
            try {
              return t();
            } finally {
              p = r;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, o) {
            var l = t.unstable_now();
            switch (
              ("object" === typeof o && null !== o
                ? (o = "number" === typeof (o = o.delay) && 0 < o ? l + o : l)
                : (o = l),
              e)
            ) {
              case 1:
                var i = -1;
                break;
              case 2:
                i = 250;
                break;
              case 5:
                i = 1073741823;
                break;
              case 4:
                i = 1e4;
                break;
              default:
                i = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: a,
                priorityLevel: e,
                startTime: o,
                expirationTime: (i = o + i),
                sortIndex: -1,
              }),
              o > l
                ? ((e.sortIndex = o),
                  r(c, e),
                  null === n(u) &&
                    e === n(c) &&
                    (m ? (v(C), (C = -1)) : (m = !0), O(k, o - l)))
                : ((e.sortIndex = i), r(u, e), h || g || ((h = !0), M(w))),
              e
            );
          }),
          (t.unstable_shouldYield = _),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var r = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = r;
              }
            };
          });
      },
      296: function (e, t, r) {
        "use strict";
        e.exports = r(813);
      },
    },
    t = {};
  function r(n) {
    var a = t[n];
    if (void 0 !== a) return a.exports;
    var o = (t[n] = { exports: {} });
    return e[n](o, o.exports, r), o.exports;
  }
  (r.n = function (e) {
    var t =
      e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
    return r.d(t, { a: t }), t;
  }),
    (function () {
      var e,
        t = Object.getPrototypeOf
          ? function (e) {
              return Object.getPrototypeOf(e);
            }
          : function (e) {
              return e.__proto__;
            };
      r.t = function (n, a) {
        if ((1 & a && (n = this(n)), 8 & a)) return n;
        if ("object" === typeof n && n) {
          if (4 & a && n.__esModule) return n;
          if (16 & a && "function" === typeof n.then) return n;
        }
        var o = Object.create(null);
        r.r(o);
        var l = {};
        e = e || [null, t({}), t([]), t(t)];
        for (
          var i = 2 & a && n;
          "object" == typeof i && !~e.indexOf(i);
          i = t(i)
        )
          Object.getOwnPropertyNames(i).forEach(function (e) {
            l[e] = function () {
              return n[e];
            };
          });
        return (
          (l.default = function () {
            return n;
          }),
          r.d(o, l),
          o
        );
      };
    })(),
    (r.d = function (e, t) {
      for (var n in t)
        r.o(t, n) &&
          !r.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.p = "/"),
    (function () {
      "use strict";
      var e = r(791),
        t = r.t(e, 2),
        n = r(250);
      function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function o(e, t) {
        if (e) {
          if ("string" === typeof e) return a(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === r && e.constructor && (r = e.constructor.name),
            "Map" === r || "Set" === r
              ? Array.from(e)
              : "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? a(e, t)
              : void 0
          );
        }
      }
      function l(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != r) {
              var n,
                a,
                o,
                l,
                i = [],
                s = !0,
                u = !1;
              try {
                if (((o = (r = r.call(e)).next), 0 === t)) {
                  if (Object(r) !== r) return;
                  s = !1;
                } else
                  for (
                    ;
                    !(s = (n = o.call(r)).done) &&
                    (i.push(n.value), i.length !== t);
                    s = !0
                  );
              } catch (c) {
                (u = !0), (a = c);
              } finally {
                try {
                  if (
                    !s &&
                    null != r.return &&
                    ((l = r.return()), Object(l) !== l)
                  )
                    return;
                } finally {
                  if (u) throw a;
                }
              }
              return i;
            }
          })(e, t) ||
          o(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var i = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        s = e.createContext && e.createContext(i),
        u = function () {
          return (
            (u =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var a in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e;
              }),
            u.apply(this, arguments)
          );
        },
        c = function (e, t) {
          var r = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              t.indexOf(n) < 0 &&
              (r[n] = e[n]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (n = Object.getOwnPropertySymbols(e); a < n.length; a++)
              t.indexOf(n[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
                (r[n[a]] = e[n[a]]);
          }
          return r;
        };
      function d(t) {
        return (
          t &&
          t.map(function (t, r) {
            return e.createElement(t.tag, u({ key: r }, t.attr), d(t.child));
          })
        );
      }
      function f(t) {
        return function (r) {
          return e.createElement(p, u({ attr: u({}, t.attr) }, r), d(t.child));
        };
      }
      function p(t) {
        var r = function (r) {
          var n,
            a = t.attr,
            o = t.size,
            l = t.title,
            i = c(t, ["attr", "size", "title"]),
            s = o || r.size || "1em";
          return (
            r.className && (n = r.className),
            t.className && (n = (n ? n + " " : "") + t.className),
            e.createElement(
              "svg",
              u(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                r.attr,
                a,
                i,
                {
                  className: n,
                  style: u(u({ color: t.color || r.color }, r.style), t.style),
                  height: s,
                  width: s,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              l && e.createElement("title", null, l),
              t.children
            )
          );
        };
        return void 0 !== s
          ? e.createElement(s.Consumer, null, function (e) {
              return r(e);
            })
          : r(i);
      }
      function g(e) {
        return f({
          tag: "svg",
          attr: { viewBox: "0 0 512 512" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z",
              },
            },
          ],
        })(e);
      }
      function h(e) {
        return f({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            {
              tag: "path",
              attr: { d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" },
            },
            { tag: "polyline", attr: { points: "9 22 9 12 15 12 15 22" } },
          ],
        })(e);
      }
      function m(e) {
        return f({
          tag: "svg",
          attr: { viewBox: "0 0 24 24" },
          child: [
            { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
            {
              tag: "path",
              attr: {
                d: "M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87zM15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24a5.98 5.98 0 010 7.52c.42.14.86.24 1.33.24zM9 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM9 13c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6 5H3v-.99C3.2 16.29 6.3 15 9 15s5.8 1.29 6 2v1z",
              },
            },
          ],
        })(e);
      }
      function b(e) {
        return f({
          tag: "svg",
          attr: { viewBox: "0 0 24 24" },
          child: [
            { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
            {
              tag: "path",
              attr: {
                d: "M7.03 4.95L3.49 8.49c-3.32 3.32-3.32 8.7 0 12.02s8.7 3.32 12.02 0l6.01-6.01a2.517 2.517 0 00-.39-3.86l.39-.39c.97-.97.97-2.56 0-3.54-.16-.16-.35-.3-.54-.41a2.497 2.497 0 00-3.72-3.05 2.517 2.517 0 00-3.88-.42l-2.51 2.51a2.493 2.493 0 00-3.84-.39zm1.41 1.42c.2-.2.51-.2.71 0 .2.2.2.51 0 .71l-3.18 3.18a3 3 0 010 4.24l1.41 1.41a5.004 5.004 0 001.12-5.36l6.3-6.3c.2-.2.51-.2.71 0s.2.51 0 .71l-4.6 4.6 1.41 1.41 6.01-6.01c.2-.2.51-.2.71 0 .2.2.2.51 0 .71l-6.01 6.01 1.41 1.41 4.95-4.95c.2-.2.51-.2.71 0 .2.2.2.51 0 .71l-5.66 5.66 1.41 1.41 3.54-3.54c.2-.2.51-.2.71 0 .2.2.2.51 0 .71l-6 6.01c-2.54 2.54-6.65 2.54-9.19 0s-2.54-6.65 0-9.19l3.53-3.54zM23 17c0 3.31-2.69 6-6 6v-1.5c2.48 0 4.5-2.02 4.5-4.5H23zM1 7c0-3.31 2.69-6 6-6v1.5C4.52 2.5 2.5 4.52 2.5 7H1z",
              },
            },
          ],
        })(e);
      }
      function v(e) {
        return f({
          tag: "svg",
          attr: { viewBox: "0 0 24 24" },
          child: [
            { tag: "path", attr: { d: "m12 16 5-6H7z" } },
            {
              tag: "path",
              attr: {
                d: "M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z",
              },
            },
          ],
        })(e);
      }
      function y(e) {
        return f({
          tag: "svg",
          attr: { viewBox: "0 0 24 24" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M5 22h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2h-2a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1H5c-1.103 0-2 .897-2 2v15c0 1.103.897 2 2 2zM5 5h2v2h10V5h2v15H5V5z",
              },
            },
            {
              tag: "path",
              attr: {
                d: "m11 13.586-1.793-1.793-1.414 1.414L11 16.414l5.207-5.207-1.414-1.414z",
              },
            },
          ],
        })(e);
      }
      function x(e) {
        return f({
          tag: "svg",
          attr: { viewBox: "0 0 24 24" },
          child: [
            {
              tag: "path",
              attr: {
                d: "m20.145 8.27 1.563-1.563-1.414-1.414L18.586 7c-1.05-.63-2.274-1-3.586-1-3.859 0-7 3.14-7 7s3.141 7 7 7 7-3.14 7-7a6.966 6.966 0 0 0-1.855-4.73zM15 18c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z",
              },
            },
            {
              tag: "path",
              attr: {
                d: "M14 10h2v4h-2zm-1-7h4v2h-4zM3 8h4v2H3zm0 8h4v2H3zm-1-4h3.99v2H2z",
              },
            },
          ],
        })(e);
      }
      function k(e) {
        return f({
          tag: "svg",
          attr: { fill: "currentColor", viewBox: "0 0 16 16" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z",
              },
            },
          ],
        })(e);
      }
      function w(e) {
        return f({
          tag: "svg",
          attr: { fill: "currentColor", viewBox: "0 0 16 16" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z",
              },
            },
            {
              tag: "path",
              attr: {
                fillRule: "evenodd",
                d: "M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z",
              },
            },
          ],
        })(e);
      }
      function N(e) {
        return f({
          tag: "svg",
          attr: { fill: "currentColor", viewBox: "0 0 16 16" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z",
              },
            },
          ],
        })(e);
      }
      function S(e) {
        return f({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            strokeWidth: "2",
            stroke: "currentColor",
            fill: "none",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            {
              tag: "path",
              attr: { stroke: "none", d: "M0 0h24v24H0z", fill: "none" },
            },
            {
              tag: "path",
              attr: {
                d: "M12 20l-3 -3h-2a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-2l-3 3",
              },
            },
            { tag: "path", attr: { d: "M8 9l8 0" } },
            { tag: "path", attr: { d: "M8 13l6 0" } },
          ],
        })(e);
      }
      function j(e) {
        return f({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            strokeWidth: "2",
            stroke: "currentColor",
            fill: "none",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            {
              tag: "path",
              attr: { stroke: "none", d: "M0 0h24v24H0z", fill: "none" },
            },
            {
              tag: "path",
              attr: {
                d: "M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9z",
              },
            },
            {
              tag: "path",
              attr: { d: "M12 12m-4.5 0a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0 -9 0" },
            },
          ],
        })(e);
      }
      var C = r(184),
        E = function () {
          var t = document.querySelector("html"),
            r = l((0, e.useState)(!1), 2),
            n = r[0],
            a = r[1],
            o = l((0, e.useState)(!1), 2),
            i = o[0],
            s = o[1],
            u = l((0, e.useState)(!1), 2),
            c = u[0],
            d = u[1];
          return (
            window.addEventListener("scroll", function () {
              this.scrollY > 0 ? s(!0) : s(!1);
            }),
            (0, C.jsx)(C.Fragment, {
              children: (0, C.jsx)("nav", {
                id: "navbar-root",
                className:
                  !0 === i
                    ? "w-full z-10 fixed border-b dark:border-b-slate-800 bg-white dark:bg-slate-800 h-20 lg:h-16 flex justify-center items-center"
                    : "w-full fixed z-10 dark:border-b-slate-800 bg-white dark:bg-slate-800 h-20 lg:h-16 flex justify-center items-center",
                children: (0, C.jsxs)("section", {
                  id: "navbar-wrapper",
                  className:
                    "h-full w-11/12 lg:w-9/12 xl:w-8/12 flex justify-between items-center",
                  children: [
                    (0, C.jsx)("div", {
                      id: "__header-logo-brand",
                      children: (0, C.jsx)("p", {
                        className:
                          "font-mono font-extrabold text-lg lg:text-xl text-violet-500",
                        children: "PBW",
                      }),
                    }),
                    (0, C.jsx)("div", {
                      id: "__headerhamburger-menu",
                      className: "md:hidden ml-auto cursor-pointer",
                      children: (0, C.jsx)(g, {
                        size: 40,
                        onClick: function () {
                          d(!c);
                        },
                        className: "text-violet-400",
                      }),
                    }),
                    c
                      ? (0, C.jsx)("nav", {
                          className:
                            "absolute overflow-hidden m-3 right-0 top-20",
                          children: (0, C.jsxs)("div", {
                            class:
                              "w-48 text-sm overflow-hidden font-medium md:hidden text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-slate-800 dark:border-gray-600 dark:text-white",
                            children: [
                              (0, C.jsx)("a", {
                                href: "#",
                                class:
                                  "block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white",
                                children: "Beranda",
                              }),
                              (0, C.jsx)("a", {
                                href: "#__member-root",
                                class:
                                  "block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white",
                                children: "Anggota",
                              }),
                              (0, C.jsx)("a", {
                                href: "#__task-root",
                                class:
                                  "block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white",
                                children: "Tugas",
                              }),
                              (0, C.jsx)("a", {
                                href: "#__contact-root",
                                class:
                                  "block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white",
                                children: "Kontak",
                              }),
                            ],
                          }),
                        })
                      : "",
                    (0, C.jsx)("div", {
                      id: "__header-list-menu",
                      className: "hidden md:flex",
                      children: (0, C.jsxs)("ul", {
                        className: "flex gap-7",
                        children: [
                          (0, C.jsx)("li", {
                            children: (0, C.jsxs)("a", {
                              href: "#",
                              className: "font-bold",
                              children: [(0, C.jsx)(h, {}), "Beranda"],
                            }),
                          }),
                          (0, C.jsx)("li", {
                            children: (0, C.jsxs)("a", {
                              href: "#__member-root",
                              className: "font-bold",
                              children: [(0, C.jsx)(m, {}), "Anggota"],
                            }),
                          }),
                          (0, C.jsx)("li", {
                            children: (0, C.jsxs)("a", {
                              href: "#__task-root",
                              className: "font-bold",
                              children: [(0, C.jsx)(y, {}), "Tugas"],
                            }),
                          }),
                          (0, C.jsx)("li", {
                            children: (0, C.jsxs)("a", {
                              href: "#__contact-root",
                              className: "font-bold",
                              children: [(0, C.jsx)(S, {}), "Kontak"],
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, C.jsx)("div", {
                      onClick: function () {
                        a(!n), t.classList.toggle("dark");
                      },
                      id: "__header-dark-toggle",
                      className:
                        "p-3 ml-5 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg",
                      children:
                        !0 === n
                          ? (0, C.jsx)(N, {
                              className:
                                "text-slate-700 dark:text-slate-100 text-xl",
                            })
                          : (0, C.jsx)(k, {
                              className:
                                "text-slate-700 dark:text-slate-100 text-xl",
                            }),
                    }),
                  ],
                }),
              }),
            })
          );
        },
        P = r.p + "static/media/3d-note.82a5e7c2d9ba1a4b0b47.png";
      function _() {
        return (
          (_ = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          _.apply(this, arguments)
        );
      }
      var z = {
          strings: [
            "These are the default values...",
            "You know what you should do?",
            "Use your own!",
            "Have a great day!",
          ],
          stringsElement: null,
          typeSpeed: 0,
          startDelay: 0,
          backSpeed: 0,
          smartBackspace: !0,
          shuffle: !1,
          backDelay: 700,
          fadeOut: !1,
          fadeOutClass: "typed-fade-out",
          fadeOutDelay: 500,
          loop: !1,
          loopCount: 1 / 0,
          showCursor: !0,
          cursorChar: "|",
          autoInsertCss: !0,
          attr: null,
          bindInputFocusEvents: !1,
          contentType: "html",
          onBegin: function (e) {},
          onComplete: function (e) {},
          preStringTyped: function (e, t) {},
          onStringTyped: function (e, t) {},
          onLastStringBackspaced: function (e) {},
          onTypingPaused: function (e, t) {},
          onTypingResumed: function (e, t) {},
          onReset: function (e) {},
          onStop: function (e, t) {},
          onStart: function (e, t) {},
          onDestroy: function (e) {},
        },
        T = new ((function () {
          function e() {}
          var t = e.prototype;
          return (
            (t.load = function (e, t, r) {
              if (
                ((e.el = "string" == typeof r ? document.querySelector(r) : r),
                (e.options = _({}, z, t)),
                (e.isInput = "input" === e.el.tagName.toLowerCase()),
                (e.attr = e.options.attr),
                (e.bindInputFocusEvents = e.options.bindInputFocusEvents),
                (e.showCursor = !e.isInput && e.options.showCursor),
                (e.cursorChar = e.options.cursorChar),
                (e.cursorBlinking = !0),
                (e.elContent = e.attr
                  ? e.el.getAttribute(e.attr)
                  : e.el.textContent),
                (e.contentType = e.options.contentType),
                (e.typeSpeed = e.options.typeSpeed),
                (e.startDelay = e.options.startDelay),
                (e.backSpeed = e.options.backSpeed),
                (e.smartBackspace = e.options.smartBackspace),
                (e.backDelay = e.options.backDelay),
                (e.fadeOut = e.options.fadeOut),
                (e.fadeOutClass = e.options.fadeOutClass),
                (e.fadeOutDelay = e.options.fadeOutDelay),
                (e.isPaused = !1),
                (e.strings = e.options.strings.map(function (e) {
                  return e.trim();
                })),
                (e.stringsElement =
                  "string" == typeof e.options.stringsElement
                    ? document.querySelector(e.options.stringsElement)
                    : e.options.stringsElement),
                e.stringsElement)
              ) {
                (e.strings = []),
                  (e.stringsElement.style.cssText =
                    "clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;");
                var n = Array.prototype.slice.apply(e.stringsElement.children),
                  a = n.length;
                if (a)
                  for (var o = 0; o < a; o += 1)
                    e.strings.push(n[o].innerHTML.trim());
              }
              for (var l in ((e.strPos = 0),
              (e.arrayPos = 0),
              (e.stopNum = 0),
              (e.loop = e.options.loop),
              (e.loopCount = e.options.loopCount),
              (e.curLoop = 0),
              (e.shuffle = e.options.shuffle),
              (e.sequence = []),
              (e.pause = {
                status: !1,
                typewrite: !0,
                curString: "",
                curStrPos: 0,
              }),
              (e.typingComplete = !1),
              e.strings))
                e.sequence[l] = l;
              (e.currentElContent = this.getCurrentElContent(e)),
                (e.autoInsertCss = e.options.autoInsertCss),
                this.appendAnimationCss(e);
            }),
            (t.getCurrentElContent = function (e) {
              return e.attr
                ? e.el.getAttribute(e.attr)
                : e.isInput
                ? e.el.value
                : "html" === e.contentType
                ? e.el.innerHTML
                : e.el.textContent;
            }),
            (t.appendAnimationCss = function (e) {
              var t = "data-typed-js-css";
              if (
                e.autoInsertCss &&
                (e.showCursor || e.fadeOut) &&
                !document.querySelector("[" + t + "]")
              ) {
                var r = document.createElement("style");
                (r.type = "text/css"), r.setAttribute(t, !0);
                var n = "";
                e.showCursor &&
                  (n +=
                    "\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),
                  e.fadeOut &&
                    (n +=
                      "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),
                  0 !== r.length &&
                    ((r.innerHTML = n), document.body.appendChild(r));
              }
            }),
            e
          );
        })())(),
        L = new ((function () {
          function e() {}
          var t = e.prototype;
          return (
            (t.typeHtmlChars = function (e, t, r) {
              if ("html" !== r.contentType) return t;
              var n = e.substr(t).charAt(0);
              if ("<" === n || "&" === n) {
                var a;
                for (
                  a = "<" === n ? ">" : ";";
                  e.substr(t + 1).charAt(0) !== a && !(1 + ++t > e.length);

                );
                t++;
              }
              return t;
            }),
            (t.backSpaceHtmlChars = function (e, t, r) {
              if ("html" !== r.contentType) return t;
              var n = e.substr(t).charAt(0);
              if (">" === n || ";" === n) {
                var a;
                for (
                  a = ">" === n ? "<" : "&";
                  e.substr(t - 1).charAt(0) !== a && !(--t < 0);

                );
                t--;
              }
              return t;
            }),
            e
          );
        })())(),
        M = (function () {
          function e(e, t) {
            T.load(this, t, e), this.begin();
          }
          var t = e.prototype;
          return (
            (t.toggle = function () {
              this.pause.status ? this.start() : this.stop();
            }),
            (t.stop = function () {
              this.typingComplete ||
                this.pause.status ||
                (this.toggleBlinking(!0),
                (this.pause.status = !0),
                this.options.onStop(this.arrayPos, this));
            }),
            (t.start = function () {
              this.typingComplete ||
                (this.pause.status &&
                  ((this.pause.status = !1),
                  this.pause.typewrite
                    ? this.typewrite(this.pause.curString, this.pause.curStrPos)
                    : this.backspace(
                        this.pause.curString,
                        this.pause.curStrPos
                      ),
                  this.options.onStart(this.arrayPos, this)));
            }),
            (t.destroy = function () {
              this.reset(!1), this.options.onDestroy(this);
            }),
            (t.reset = function (e) {
              void 0 === e && (e = !0),
                clearInterval(this.timeout),
                this.replaceText(""),
                this.cursor &&
                  this.cursor.parentNode &&
                  (this.cursor.parentNode.removeChild(this.cursor),
                  (this.cursor = null)),
                (this.strPos = 0),
                (this.arrayPos = 0),
                (this.curLoop = 0),
                e &&
                  (this.insertCursor(),
                  this.options.onReset(this),
                  this.begin());
            }),
            (t.begin = function () {
              var e = this;
              this.options.onBegin(this),
                (this.typingComplete = !1),
                this.shuffleStringsIfNeeded(this),
                this.insertCursor(),
                this.bindInputFocusEvents && this.bindFocusEvents(),
                (this.timeout = setTimeout(function () {
                  e.currentElContent && 0 !== e.currentElContent.length
                    ? e.backspace(e.currentElContent, e.currentElContent.length)
                    : e.typewrite(e.strings[e.sequence[e.arrayPos]], e.strPos);
                }, this.startDelay));
            }),
            (t.typewrite = function (e, t) {
              var r = this;
              this.fadeOut &&
                this.el.classList.contains(this.fadeOutClass) &&
                (this.el.classList.remove(this.fadeOutClass),
                this.cursor && this.cursor.classList.remove(this.fadeOutClass));
              var n = this.humanizer(this.typeSpeed),
                a = 1;
              !0 !== this.pause.status
                ? (this.timeout = setTimeout(function () {
                    t = L.typeHtmlChars(e, t, r);
                    var n = 0,
                      o = e.substr(t);
                    if ("^" === o.charAt(0) && /^\^\d+/.test(o)) {
                      var l = 1;
                      (l += (o = /\d+/.exec(o)[0]).length),
                        (n = parseInt(o)),
                        (r.temporaryPause = !0),
                        r.options.onTypingPaused(r.arrayPos, r),
                        (e = e.substring(0, t) + e.substring(t + l)),
                        r.toggleBlinking(!0);
                    }
                    if ("`" === o.charAt(0)) {
                      for (
                        ;
                        "`" !== e.substr(t + a).charAt(0) &&
                        (a++, !(t + a > e.length));

                      );
                      var i = e.substring(0, t),
                        s = e.substring(i.length + 1, t + a),
                        u = e.substring(t + a + 1);
                      (e = i + s + u), a--;
                    }
                    r.timeout = setTimeout(function () {
                      r.toggleBlinking(!1),
                        t >= e.length
                          ? r.doneTyping(e, t)
                          : r.keepTyping(e, t, a),
                        r.temporaryPause &&
                          ((r.temporaryPause = !1),
                          r.options.onTypingResumed(r.arrayPos, r));
                    }, n);
                  }, n))
                : this.setPauseStatus(e, t, !0);
            }),
            (t.keepTyping = function (e, t, r) {
              0 === t &&
                (this.toggleBlinking(!1),
                this.options.preStringTyped(this.arrayPos, this));
              var n = e.substr(0, (t += r));
              this.replaceText(n), this.typewrite(e, t);
            }),
            (t.doneTyping = function (e, t) {
              var r = this;
              this.options.onStringTyped(this.arrayPos, this),
                this.toggleBlinking(!0),
                (this.arrayPos === this.strings.length - 1 &&
                  (this.complete(),
                  !1 === this.loop || this.curLoop === this.loopCount)) ||
                  (this.timeout = setTimeout(function () {
                    r.backspace(e, t);
                  }, this.backDelay));
            }),
            (t.backspace = function (e, t) {
              var r = this;
              if (!0 !== this.pause.status) {
                if (this.fadeOut) return this.initFadeOut();
                this.toggleBlinking(!1);
                var n = this.humanizer(this.backSpeed);
                this.timeout = setTimeout(function () {
                  t = L.backSpaceHtmlChars(e, t, r);
                  var n = e.substr(0, t);
                  if ((r.replaceText(n), r.smartBackspace)) {
                    var a = r.strings[r.arrayPos + 1];
                    r.stopNum = a && n === a.substr(0, t) ? t : 0;
                  }
                  t > r.stopNum
                    ? (t--, r.backspace(e, t))
                    : t <= r.stopNum &&
                      (r.arrayPos++,
                      r.arrayPos === r.strings.length
                        ? ((r.arrayPos = 0),
                          r.options.onLastStringBackspaced(),
                          r.shuffleStringsIfNeeded(),
                          r.begin())
                        : r.typewrite(r.strings[r.sequence[r.arrayPos]], t));
                }, n);
              } else this.setPauseStatus(e, t, !1);
            }),
            (t.complete = function () {
              this.options.onComplete(this),
                this.loop ? this.curLoop++ : (this.typingComplete = !0);
            }),
            (t.setPauseStatus = function (e, t, r) {
              (this.pause.typewrite = r),
                (this.pause.curString = e),
                (this.pause.curStrPos = t);
            }),
            (t.toggleBlinking = function (e) {
              this.cursor &&
                (this.pause.status ||
                  (this.cursorBlinking !== e &&
                    ((this.cursorBlinking = e),
                    e
                      ? this.cursor.classList.add("typed-cursor--blink")
                      : this.cursor.classList.remove("typed-cursor--blink"))));
            }),
            (t.humanizer = function (e) {
              return Math.round((Math.random() * e) / 2) + e;
            }),
            (t.shuffleStringsIfNeeded = function () {
              this.shuffle &&
                (this.sequence = this.sequence.sort(function () {
                  return Math.random() - 0.5;
                }));
            }),
            (t.initFadeOut = function () {
              var e = this;
              return (
                (this.el.className += " " + this.fadeOutClass),
                this.cursor &&
                  (this.cursor.className += " " + this.fadeOutClass),
                setTimeout(function () {
                  e.arrayPos++,
                    e.replaceText(""),
                    e.strings.length > e.arrayPos
                      ? e.typewrite(e.strings[e.sequence[e.arrayPos]], 0)
                      : (e.typewrite(e.strings[0], 0), (e.arrayPos = 0));
                }, this.fadeOutDelay)
              );
            }),
            (t.replaceText = function (e) {
              this.attr
                ? this.el.setAttribute(this.attr, e)
                : this.isInput
                ? (this.el.value = e)
                : "html" === this.contentType
                ? (this.el.innerHTML = e)
                : (this.el.textContent = e);
            }),
            (t.bindFocusEvents = function () {
              var e = this;
              this.isInput &&
                (this.el.addEventListener("focus", function (t) {
                  e.stop();
                }),
                this.el.addEventListener("blur", function (t) {
                  (e.el.value && 0 !== e.el.value.length) || e.start();
                }));
            }),
            (t.insertCursor = function () {
              this.showCursor &&
                (this.cursor ||
                  ((this.cursor = document.createElement("span")),
                  (this.cursor.className = "typed-cursor"),
                  this.cursor.setAttribute("aria-hidden", !0),
                  (this.cursor.innerHTML = this.cursorChar),
                  this.el.parentNode &&
                    this.el.parentNode.insertBefore(
                      this.cursor,
                      this.el.nextSibling
                    )));
            }),
            e
          );
        })();
      function O(e) {
        return f({
          tag: "svg",
          attr: {
            viewBox: "0 0 20 20",
            fill: "currentColor",
            "aria-hidden": "true",
          },
          child: [
            {
              tag: "path",
              attr: {
                fillRule: "evenodd",
                d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                clipRule: "evenodd",
              },
            },
          ],
        })(e);
      }
      function R(e) {
        return f({
          tag: "svg",
          attr: {
            viewBox: "0 0 20 20",
            fill: "currentColor",
            "aria-hidden": "true",
          },
          child: [
            {
              tag: "path",
              attr: {
                fillRule: "evenodd",
                d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
                clipRule: "evenodd",
              },
            },
          ],
        })(e);
      }
      function I(e) {
        return f({
          tag: "svg",
          attr: {
            viewBox: "0 0 20 20",
            fill: "currentColor",
            "aria-hidden": "true",
          },
          child: [
            {
              tag: "path",
              attr: {
                fillRule: "evenodd",
                d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                clipRule: "evenodd",
              },
            },
          ],
        })(e);
      }
      function D(e) {
        return f({
          tag: "svg",
          attr: {
            viewBox: "0 0 20 20",
            fill: "currentColor",
            "aria-hidden": "true",
          },
          child: [
            {
              tag: "path",
              attr: {
                d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z",
              },
            },
          ],
        })(e);
      }
      function F(e) {
        return f({
          tag: "svg",
          attr: {
            viewBox: "0 0 20 20",
            fill: "currentColor",
            "aria-hidden": "true",
          },
          child: [
            {
              tag: "path",
              attr: {
                fillRule: "evenodd",
                d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                clipRule: "evenodd",
              },
            },
          ],
        })(e);
      }
      function A(e) {
        return f({
          tag: "svg",
          attr: {
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: "2",
            stroke: "currentColor",
            "aria-hidden": "true",
          },
          child: [
            {
              tag: "path",
              attr: {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M19 9l-7 7-7-7",
              },
            },
          ],
        })(e);
      }
      function B(e) {
        return f({
          tag: "svg",
          attr: {
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: "2",
            stroke: "currentColor",
            "aria-hidden": "true",
          },
          child: [
            {
              tag: "path",
              attr: {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M9 5l7 7-7 7",
              },
            },
          ],
        })(e);
      }
      function H(e) {
        return f({
          tag: "svg",
          attr: {
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: "2",
            stroke: "currentColor",
            "aria-hidden": "true",
          },
          child: [
            {
              tag: "path",
              attr: {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
              },
            },
          ],
        })(e);
      }
      function U(e) {
        return f({
          tag: "svg",
          attr: {
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: "2",
            stroke: "currentColor",
            "aria-hidden": "true",
          },
          child: [
            {
              tag: "path",
              attr: {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M6 18L18 6M6 6l12 12",
              },
            },
          ],
        })(e);
      }
      var V = function () {
        var t = e.useRef(null),
          r = e.useRef(null);
        return (
          (0, e.useEffect)(function () {
            return (
              (r.current = new M(t.current, {
                strings: ["Kelas E", "Pemrograman Berbasis Web"],
                typeSpeed: 50,
                backSpeed: 50,
                loop: !0,
                cursorChar: " | ",
              })),
              function () {
                r.current.destroy();
              }
            );
          }, []),
          (0, C.jsx)(C.Fragment, {
            children: (0, C.jsx)("main", {
              id: "__main-root",
              className: "flex dark:bg-slate-700 items-center justify-center",
              children: (0, C.jsxs)("section", {
                id: "__main-wrapper",
                className:
                  "h-full gap-5 mt-52 mb-40 md:mt-48 w-11/12 lg:w-9/12 xl:w-8/12 flex flex-col md:flex-row",
                children: [
                  (0, C.jsx)("div", {
                    className:
                      "__main-logo w-full md:w-5/12 overflow-hidden flex justify-center items-center",
                    children: (0, C.jsx)("img", {
                      src: P,
                      alt: "",
                      className: "w-1/2 md:w-6/12",
                    }),
                  }),
                  (0, C.jsxs)("div", {
                    className:
                      "__main-content w-full md:w-7/12  flex flex-col justify-center items-center md:items-start",
                    children: [
                      (0, C.jsxs)("h1", {
                        style: { fontWeight: 700 },
                        className:
                          "text-xl dark:text-slate-100 font-bold md:text-2xl text-slate-700",
                        children: [
                          (0, C.jsx)(b, { className: "inline" }),
                          " Selamat datang di",
                        ],
                      }),
                      (0, C.jsxs)("h1", {
                        style: { fontWeight: 700 },
                        className:
                          "text-3xl flex flex-col items-center justify-center md:items-start w-full py-4 font-bold md:text-4xl text-violet-400",
                        children: [
                          (0, C.jsx)("span", {
                            className:
                              "bg-violet-100 text-violet-600 px-3 py-2 rounded-xl dark:bg-violet-900 dark:text-violet-300",
                            children: "KELOMPOK 2",
                          }),
                          (0, C.jsx)("p", {
                            className: "py-3 text-lg lg:text-2xl",
                            children: (0, C.jsx)("span", { ref: t }),
                          }),
                        ],
                      }),
                      (0, C.jsxs)("div", {
                        className:
                          "__main-submenu py-5 w-full flex flex-col lg:flex-row lg:items-start gap-3 justify-center items-center",
                        children: [
                          (0, C.jsxs)("div", {
                            class:
                              "w-full p-6 bg-white border border-gray-200 rounded-2xl shadow dark:bg-slate-800 dark:border-gray-700",
                            children: [
                              " ",
                              (0, C.jsx)(H, {
                                className: "text-4xl my-3 text-violet-500",
                              }),
                              (0, C.jsx)("a", {
                                href: "#",
                                children: (0, C.jsx)("h5", {
                                  class:
                                    "mb-2 text-lg font-semibold tracking-tight text-violet-500 dark:text-white",
                                  children: "Anggota",
                                }),
                              }),
                              (0, C.jsx)("p", {
                                style: { lineHeight: "1.2rem" },
                                className: "text-xs text-slate-500",
                                children:
                                  "List daftar anggota pada kelompok ini",
                              }),
                              (0, C.jsxs)("a", {
                                href: "#",
                                class: "py-3 flex items-center text-violet-600",
                                children: [
                                  "Scroll down ",
                                  (0, C.jsx)(v, { className: "mx-1" }),
                                ],
                              }),
                            ],
                          }),
                          (0, C.jsxs)("div", {
                            class:
                              "w-full p-6 bg-white border border-gray-200 rounded-2xl shadow dark:bg-slate-800 dark:border-gray-700",
                            children: [
                              " ",
                              (0, C.jsx)(y, {
                                className: "text-4xl my-3 text-violet-500",
                              }),
                              (0, C.jsx)("a", {
                                href: "#",
                                children: (0, C.jsx)("h5", {
                                  class:
                                    "mb-2 text-lg font-semibold tracking-tight text-violet-500 dark:text-white",
                                  children: "Tugas",
                                }),
                              }),
                              (0, C.jsx)("p", {
                                style: { lineHeight: "1.2rem" },
                                className: "text-xs text-slate-500",
                                children:
                                  "List daftar tugas yang sudah, belum, atau sedang dikerjakan",
                              }),
                              (0, C.jsxs)("a", {
                                href: "#",
                                class: "py-3 flex items-center text-violet-600",
                                children: [
                                  "Scroll down ",
                                  (0, C.jsx)(v, { className: "mx-1" }),
                                ],
                              }),
                            ],
                          }),
                          (0, C.jsxs)("div", {
                            class:
                              "w-full p-6 bg-white border border-gray-200 rounded-2xl shadow dark:bg-slate-800 dark:border-gray-700",
                            children: [
                              " ",
                              (0, C.jsx)(S, {
                                className: "text-4xl my-3 text-violet-500",
                              }),
                              (0, C.jsx)("a", {
                                href: "#",
                                children: (0, C.jsx)("h5", {
                                  class:
                                    "mb-2 text-lg font-semibold tracking-tight text-violet-500 dark:text-white",
                                  children: "Saran & Feedback",
                                }),
                              }),
                              (0, C.jsx)("p", {
                                style: { lineHeight: "1.2rem" },
                                className: "text-xs text-slate-500",
                                children:
                                  "Kritik, saran, atau Bug? Beritahu kami :)",
                              }),
                              (0, C.jsxs)("a", {
                                href: "#",
                                class: "py-3 flex items-center text-violet-600",
                                children: [
                                  "Scroll down ",
                                  (0, C.jsx)(v, { className: "mx-1" }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          })
        );
      };
      function W(e) {
        return f({
          tag: "svg",
          attr: { role: "img", viewBox: "0 0 24 24" },
          child: [
            { tag: "title", attr: {}, child: [] },
            {
              tag: "path",
              attr: {
                d: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z",
              },
            },
          ],
        })(e);
      }
      function $(e) {
        return f({
          tag: "svg",
          attr: { role: "img", viewBox: "0 0 24 24" },
          child: [
            { tag: "title", attr: {}, child: [] },
            {
              tag: "path",
              attr: {
                d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z",
              },
            },
          ],
        })(e);
      }
      var K = function (e) {
          return (0, C.jsx)(C.Fragment, {
            children: (0, C.jsxs)("section", {
              className:
                "flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-700 p-8 w-full sm:w-auto rounded-3xl gap-2",
              children: [
                (0, C.jsx)("div", {
                  className:
                    "__card-profile w-full flex items-center justify-center",
                  children: (0, C.jsx)("div", {
                    className: "__img w-20 h-20 rounded-full bg-violet-400",
                  }),
                }),
                (0, C.jsxs)("div", {
                  className:
                    "__card-desc w-full flex justify-center items-center flex-col",
                  children: [
                    (0, C.jsx)("p", {
                      className: "__name text-violet-400 text-lg lg:text-xl",
                      children: e.Name,
                    }),
                    (0, C.jsx)("p", {
                      className: "__name text-slate-400 text-xm lg:text-sm",
                      style: { fontFamily: "qsand" },
                      children: e.FullName,
                    }),
                    (0, C.jsx)("span", {
                      className:
                        "bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300 m-3",
                      children: e.Nim,
                    }),
                  ],
                }),
                (0, C.jsxs)("div", {
                  className: "__card-social flex gap-2",
                  children: [
                    (0, C.jsx)("a", {
                      href: "",
                      children: (0, C.jsx)($, { className: "text-violet-400" }),
                    }),
                    (0, C.jsx)("a", {
                      href: "",
                      children: (0, C.jsx)(W, { className: "text-violet-400" }),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        Q = function () {
          return (0, C.jsx)(C.Fragment, {
            children: (0, C.jsx)("section", {
              id: "__member-root",
              className:
                "bg-violet-400 dark:bg-slate-800 py-24 w-full flex items-center justify-center",
              children: (0, C.jsxs)("section", {
                id: "__member-wrapper",
                className:
                  "h-full text-slate-50 w-11/12 flex flex-col items-center justify-center lg:w-9/12 xl:w-8/12",
                children: [
                  (0, C.jsxs)("p", {
                    id: "__member-header",
                    className:
                      "text-xl lg:text-3xl pb-8 flex items-center justify-center gap-2",
                    children: [
                      (0, C.jsx)(H, { className: "inline" }),
                      "Anggota Kelompok",
                    ],
                  }),
                  (0, C.jsxs)("div", {
                    id: "__member-cards",
                    className:
                      "flex gap-5 lg:py-5 flex-wrap items-center justify-center",
                    children: [
                      (0, C.jsx)(K, {
                        Name: "Kenny",
                        FullName: "Kenny Belle Lesmana",
                        Nim: "2108561031",
                      }),
                      (0, C.jsx)(K, {
                        Name: "Apriana",
                        FullName: "I Komang Gede Apriana",
                        Nim: "2108561031",
                      }),
                      (0, C.jsx)(K, {
                        Name: "Albert",
                        FullName: "Albert Okario",
                        Nim: "2108561031",
                      }),
                      (0, C.jsx)(K, {
                        Name: "Wisnu",
                        FullName: "I Gusti Putu Wisu Wardhana",
                        Nim: "2108561031",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        };
      function q(e) {
        return (
          (q =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          q(e)
        );
      }
      function G(e) {
        var t = (function (e, t) {
          if ("object" !== q(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== q(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === q(t) ? t : String(t);
      }
      function Y(e, t, r) {
        return (
          (t = G(t)) in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function X(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function J(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? X(Object(r), !0).forEach(function (t) {
                Y(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : X(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function Z(e, t) {
        if (null == e) return {};
        var r,
          n,
          a = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              a = {},
              o = Object.keys(e);
            for (n = 0; n < o.length; n++)
              (r = o[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (n = 0; n < o.length; n++)
            (r = o[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (a[r] = e[r]));
        }
        return a;
      }
      var ee = r(694),
        te = r.n(ee);
      function re(e) {
        return null !== e && "object" === typeof e && e.constructor === Object;
      }
      function ne(e) {
        if (!re(e)) return e;
        var t = J({}, e);
        return (
          Object.keys(e).forEach(function (r) {
            t[r] = ne(e[r]);
          }),
          t
        );
      }
      function ae(e, t) {
        if (re(t) && 0 === Object.keys(t).length) return ne(J(J({}, e), t));
        var r = J(J({}, e), t);
        return (
          re(t) &&
            re(e) &&
            Object.keys(t).forEach(function (n) {
              re(t[n]) && n in e && re(e[n])
                ? (r[n] = ae(e[n], t[n]))
                : (r[n] = re(t[n]) ? ne(t[n]) : t[n]);
            }),
          r
        );
      }
      var oe = {
          accordion: {
            root: {
              base: "divide-y divide-gray-200 border-gray-200 dark:divide-gray-700 dark:border-gray-700",
              flush: { off: "rounded-lg border", on: "border-b" },
            },
            content: {
              base: "py-5 px-5 last:rounded-b-lg dark:bg-gray-900 first:rounded-t-lg",
            },
            title: {
              arrow: {
                base: "h-6 w-6 shrink-0",
                open: { off: "", on: "rotate-180" },
              },
              base: "flex w-full items-center justify-between first:rounded-t-lg last:rounded-b-lg py-5 px-5 text-left font-medium text-gray-500 dark:text-gray-400",
              flush: {
                off: "hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800",
                on: "!bg-transparent dark:!bg-transparent",
              },
              heading: "",
              open: {
                off: "",
                on: "text-gray-900 bg-gray-100 dark:bg-gray-800 dark:text-white",
              },
            },
          },
          alert: {
            base: "flex flex-col gap-2 p-4 text-sm",
            borderAccent: "border-t-4",
            closeButton: {
              base: "-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg p-1.5 focus:ring-2",
              icon: "w-5 h-5",
              color: {
                info: "bg-blue-100 text-blue-500 hover:bg-blue-200 focus:ring-blue-400 dark:bg-blue-200 dark:text-blue-600 dark:hover:bg-blue-300",
                gray: "bg-gray-100 text-gray-500 hover:bg-gray-200 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white",
                failure:
                  "bg-red-100 text-red-500 hover:bg-red-200 focus:ring-red-400 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300",
                success:
                  "bg-green-100 text-green-500 hover:bg-green-200 focus:ring-green-400 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300",
                warning:
                  "bg-yellow-100 text-yellow-500 hover:bg-yellow-200 focus:ring-yellow-400 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300",
                red: "bg-red-100 text-red-500 hover:bg-red-200 focus:ring-red-400 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300",
                green:
                  "bg-green-100 text-green-500 hover:bg-green-200 focus:ring-green-400 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300",
                yellow:
                  "bg-yellow-100 text-yellow-500 hover:bg-yellow-200 focus:ring-yellow-400 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300",
                blue: "bg-blue-100 text-blue-500 hover:bg-blue-200 focus:ring-blue-400 dark:bg-blue-200 dark:text-blue-600 dark:hover:bg-blue-300",
                cyan: "bg-cyan-100 text-cyan-500 hover:bg-cyan-200 focus:ring-cyan-400 dark:bg-cyan-200 dark:text-cyan-600 dark:hover:bg-cyan-300",
                pink: "bg-pink-100 text-pink-500 hover:bg-pink-200 focus:ring-pink-400 dark:bg-pink-200 dark:text-pink-600 dark:hover:bg-pink-300",
                lime: "bg-lime-100 text-lime-500 hover:bg-lime-200 focus:ring-lime-400 dark:bg-lime-200 dark:text-lime-600 dark:hover:bg-lime-300",
                dark: "bg-gray-100 text-gray-500 hover:bg-gray-200 focus:ring-gray-400 dark:bg-gray-200 dark:text-gray-600 dark:hover:bg-gray-300",
                indigo:
                  "bg-indigo-100 text-indigo-500 hover:bg-indigo-200 focus:ring-indigo-400 dark:bg-indigo-200 dark:text-indigo-600 dark:hover:bg-indigo-300",
                purple:
                  "bg-purple-100 text-purple-500 hover:bg-purple-200 focus:ring-purple-400 dark:bg-purple-200 dark:text-purple-600 dark:hover:bg-purple-300",
                teal: "bg-teal-100 text-teal-500 hover:bg-teal-200 focus:ring-teal-400 dark:bg-teal-200 dark:text-teal-600 dark:hover:bg-teal-300",
                light:
                  "bg-gray-50 text-gray-500 hover:bg-gray-100 focus:ring-gray-200 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white",
              },
            },
            color: {
              info: "text-blue-700 bg-blue-100 border-blue-500 dark:bg-blue-200 dark:text-blue-800",
              gray: "text-gray-700 bg-gray-100 border-gray-500 dark:bg-gray-700 dark:text-gray-300",
              failure:
                "text-red-700 bg-red-100 border-red-500 dark:bg-red-200 dark:text-red-800",
              success:
                "text-green-700 bg-green-100 border-green-500 dark:bg-green-200 dark:text-green-800",
              warning:
                "text-yellow-700 bg-yellow-100 border-yellow-500 dark:bg-yellow-200 dark:text-yellow-800",
              red: "text-red-700 bg-red-100 border-red-500 dark:bg-red-200 dark:text-red-800",
              green:
                "text-green-700 bg-green-100 border-green-500 dark:bg-green-200 dark:text-green-800",
              yellow:
                "text-yellow-700 bg-yellow-100 border-yellow-500 dark:bg-yellow-200 dark:text-yellow-800",
              blue: "text-blue-700 bg-blue-100 border-blue-500 dark:bg-blue-200 dark:text-blue-800",
              cyan: "text-cyan-700 bg-cyan-100 border-cyan-500 dark:bg-cyan-200 dark:text-cyan-800",
              pink: "text-pink-700 bg-pink-100 border-pink-500 dark:bg-pink-200 dark:text-pink-800",
              lime: "text-lime-700 bg-lime-100 border-lime-500 dark:bg-lime-200 dark:text-lime-800",
              dark: "text-gray-200 bg-gray-800 border-gray-600 dark:bg-gray-900 dark:text-gray-300",
              indigo:
                "text-indigo-700 bg-indigo-100 border-indigo-500 dark:bg-indigo-200 dark:text-indigo-800",
              purple:
                "text-purple-700 bg-purple-100 border-purple-500 dark:bg-purple-200 dark:text-purple-800",
              teal: "text-teal-700 bg-teal-100 border-teal-500 dark:bg-teal-200 dark:text-teal-800",
              light:
                "text-gray-600 bg-gray-50 border-gray-400 dark:bg-gray-500 dark:text-gray-200",
            },
            icon: "mr-3 inline h-5 w-5 flex-shrink-0",
            rounded: "rounded-lg",
            wrapper: "flex items-center",
          },
          avatar: {
            root: {
              base: "flex justify-center items-center space-x-4",
              bordered: "p-1 ring-2",
              rounded: "!rounded-full",
              color: {
                dark: "ring-gray-800 dark:ring-gray-800",
                failure: "ring-red-500 dark:ring-red-700",
                gray: "ring-gray-500 dark:ring-gray-400",
                info: "ring-blue-400 dark:ring-blue-800",
                light: "ring-gray-300 dark:ring-gray-500",
                purple: "ring-purple-500 dark:ring-purple-600",
                success: "ring-green-500 dark:ring-green-500",
                warning: "ring-yellow-300 dark:ring-yellow-500",
                pink: "ring-pink-500 dark:ring-pink-500",
              },
              img: {
                off: "rounded relative overflow-hidden bg-gray-100 dark:bg-gray-600",
                on: "rounded",
                placeholder: "absolute w-auto h-auto text-gray-400 -bottom-1",
              },
              size: {
                xs: "w-6 h-6",
                sm: "w-8 h-8",
                md: "w-10 h-10",
                lg: "w-20 h-20",
                xl: "w-36 h-36",
              },
              stacked: "ring-2 ring-gray-300 dark:ring-gray-500",
              statusPosition: {
                "bottom-left": "-bottom-1 -left-1",
                "bottom-center": "-botton-1 center",
                "bottom-right": "-bottom-1 -right-1",
                "top-left": "-top-1 -left-1",
                "top-center": "-top-1 center",
                "top-right": "-top-1 -right-1",
                "center-right": "center -right-1",
                center: "center center",
                "center-left": "center -left-1",
              },
              status: {
                away: "bg-yellow-400",
                base: "absolute h-3.5 w-3.5 rounded-full border-2 border-white dark:border-gray-800",
                busy: "bg-red-400",
                offline: "bg-gray-400",
                online: "bg-green-400",
              },
              initials: {
                text: "font-medium text-gray-600 dark:text-gray-300",
                base: "inline-flex overflow-hidden relative justify-center items-center bg-gray-100 dark:bg-gray-600",
              },
            },
            group: { base: "flex -space-x-4" },
            groupCounter: {
              base: "relative flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 rounded-full ring-2 ring-gray-300 hover:bg-gray-600 dark:ring-gray-500",
            },
          },
          badge: {
            root: {
              base: "flex h-fit items-center gap-1 font-semibold",
              color: {
                info: "bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800 group-hover:bg-blue-200 dark:group-hover:bg-blue-300",
                gray: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 group-hover:bg-gray-200 dark:group-hover:bg-gray-600",
                failure:
                  "bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900 group-hover:bg-red-200 dark:group-hover:bg-red-300",
                success:
                  "bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900 group-hover:bg-green-200 dark:group-hover:bg-green-300",
                warning:
                  "bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-300",
                indigo:
                  "bg-indigo-100 text-indigo-800 dark:bg-indigo-200 dark:text-indigo-900 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-300",
                purple:
                  "bg-purple-100 text-purple-800 dark:bg-purple-200 dark:text-purple-900 group-hover:bg-purple-200 dark:group-hover:bg-purple-300",
                pink: "bg-pink-100 text-pink-800 dark:bg-pink-200 dark:text-pink-900 group-hover:bg-pink-200 dark:group-hover:bg-pink-300",
                blue: "bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-900 group-hover:bg-blue-200 dark:group-hover:bg-blue-300",
                cyan: "bg-cyan-100 text-cyan-800 dark:bg-cyan-200 dark:text-cyan-900 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-300",
                dark: "bg-gray-600 text-gray-100 dark:bg-gray-900 dark:text-gray-200 group-hover:bg-gray-500 dark:group-hover:bg-gray-700",
                light:
                  "bg-gray-200 text-gray-800 dark:bg-gray-400 dark:text-gray-900 group-hover:bg-gray-300 dark:group-hover:bg-gray-500",
                green:
                  "bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900 group-hover:bg-green-200 dark:group-hover:bg-green-300",
                lime: "bg-lime-100 text-lime-800 dark:bg-lime-200 dark:text-lime-900 group-hover:bg-lime-200 dark:group-hover:bg-lime-300",
                red: "bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900 group-hover:bg-red-200 dark:group-hover:bg-red-300",
                teal: "bg-teal-100 text-teal-800 dark:bg-teal-200 dark:text-teal-900 group-hover:bg-teal-200 dark:group-hover:bg-teal-300",
                yellow:
                  "bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-300",
              },
              href: "group",
              size: { xs: "p-1 text-xs", sm: "p-1.5 text-sm" },
            },
            icon: {
              off: "rounded px-2 py-0.5",
              on: "rounded-full p-1.5",
              size: { xs: "w-3 h-3", sm: "w-3.5 h-3.5" },
            },
          },
          breadcrumb: {
            root: { base: "", list: "flex items-center" },
            item: {
              base: "group flex items-center",
              chevron: "mx-1 h-6 w-6 text-gray-400 group-first:hidden md:mx-2",
              href: {
                off: "flex items-center text-sm font-medium text-gray-500 dark:text-gray-400",
                on: "flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white",
              },
              icon: "mr-2 h-4 w-4",
            },
          },
          button: {
            base: "group flex h-min items-center justify-center p-0.5 text-center font-medium focus:z-10",
            fullSized: "w-full",
            color: {
              dark: "text-white bg-gray-800 border border-transparent hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 disabled:hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700 dark:disabled:hover:bg-gray-800",
              failure:
                "text-white bg-red-700 border border-transparent hover:bg-red-800 focus:ring-4 focus:ring-red-300 disabled:hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 dark:disabled:hover:bg-red-600",
              gray: "text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 disabled:hover:bg-white focus:ring-blue-700 focus:text-blue-700 dark:bg-transparent dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-2 dark:disabled:hover:bg-gray-800",
              info: "text-white bg-blue-700 border border-transparent hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 disabled:hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:disabled:hover:bg-blue-600",
              light:
                "text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 disabled:hover:bg-white dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700",
              purple:
                "text-white bg-purple-700 border border-transparent hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 disabled:hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 dark:disabled:hover:bg-purple-600",
              success:
                "text-white bg-green-700 border border-transparent hover:bg-green-800 focus:ring-4 focus:ring-green-300 disabled:hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 dark:disabled:hover:bg-green-600",
              warning:
                "text-white bg-yellow-400 border border-transparent hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 disabled:hover:bg-yellow-400 dark:focus:ring-yellow-900 dark:disabled:hover:bg-yellow-400",
              blue: "text-blue-900 bg-white border border-blue-300 hover:bg-blue-100 focus:ring-4 focus:ring-blue-300 disabled:hover:bg-white dark:bg-blue-600 dark:text-white dark:border-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:focus:ring-blue-700",
              cyan: "text-cyan-900 bg-white border border-cyan-300 hover:bg-cyan-100 focus:ring-4 focus:ring-cyan-300 disabled:hover:bg-white dark:bg-cyan-600 dark:text-white dark:border-cyan-600 dark:hover:bg-cyan-700 dark:hover:border-cyan-700 dark:focus:ring-cyan-700",
              green:
                "text-green-900 bg-white border border-green-300 hover:bg-green-100 focus:ring-4 focus:ring-green-300 disabled:hover:bg-white dark:bg-green-600 dark:text-white dark:border-green-600 dark:hover:bg-green-700 dark:hover:border-green-700 dark:focus:ring-green-700",
              indigo:
                "text-indigo-900 bg-white border border-indigo-300 hover:bg-indigo-100 focus:ring-4 focus:ring-indigo-300 disabled:hover:bg-white dark:bg-indigo-600 dark:text-white dark:border-indigo-600 dark:hover:bg-indigo-700 dark:hover:border-indigo-700 dark:focus:ring-indigo-700",
              lime: "text-lime-900 bg-white border border-lime-300 hover:bg-lime-100 focus:ring-4 focus:ring-lime-300 disabled:hover:bg-white dark:bg-lime-600 dark:text-white dark:border-lime-600 dark:hover:bg-lime-700 dark:hover:border-lime-700 dark:focus:ring-lime-700",
              pink: "text-pink-900 bg-white border border-pink-300 hover:bg-pink-100 focus:ring-4 focus:ring-pink-300 disabled:hover:bg-white dark:bg-pink-600 dark:text-white dark:border-pink-600 dark:hover:bg-pink-700 dark:hover:border-pink-700 dark:focus:ring-pink-700",
              red: "text-red-900 bg-white border border-red-300 hover:bg-red-100 focus:ring-4 focus:ring-red-300 disabled:hover:bg-white dark:bg-red-600 dark:text-white dark:border-red-600 dark:hover:bg-red-700 dark:hover:border-red-700 dark:focus:ring-red-700",
              teal: "text-teal-900 bg-white border border-teal-300 hover:bg-teal-100 focus:ring-4 focus:ring-teal-300 disabled:hover:bg-white dark:bg-teal-600 dark:text-white dark:border-teal-600 dark:hover:bg-teal-700 dark:hover:border-teal-700 dark:focus:ring-teal-700",
              yellow:
                "text-yellow-900 bg-white border border-yellow-300 hover:bg-yellow-100 focus:ring-4 focus:ring-yellow-300 disabled:hover:bg-white dark:bg-yellow-600 dark:text-white dark:border-yellow-600 dark:hover:bg-yellow-700 dark:hover:border-yellow-700 dark:focus:ring-yellow-700",
            },
            disabled: "cursor-not-allowed opacity-50",
            gradient: {
              cyan: "text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800",
              failure:
                "text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800",
              info: "text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 ",
              lime: "text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:ring-lime-300 dark:focus:ring-lime-800",
              pink: "text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-800",
              purple:
                "text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800",
              success:
                "text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800",
              teal: "text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-800",
            },
            gradientDuoTone: {
              cyanToBlue:
                "text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800",
              greenToBlue:
                "text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800",
              pinkToOrange:
                "text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800",
              purpleToBlue:
                "text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800",
              purpleToPink:
                "text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800",
              redToYellow:
                "text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:ring-red-100 dark:focus:ring-red-400",
              tealToLime:
                "text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 hover:!text-gray-900 focus:ring-4 focus:ring-lime-200 dark:focus:ring-teal-700",
            },
            inner: {
              base: "flex items-center",
              position: {
                none: "",
                start: "rounded-r-none",
                middle: "!rounded-none",
                end: "rounded-l-none",
              },
              outline: "border border-transparent",
            },
            label:
              "ml-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-blue-200 text-xs font-semibold text-blue-800",
            outline: {
              color: {
                gray: "border border-gray-900 dark:border-white",
                default: "border-0",
                light: "",
              },
              off: "",
              on: "flex justify-center bg-white text-gray-900 transition-all duration-75 ease-in group-hover:bg-opacity-0 group-hover:text-inherit dark:bg-gray-900 dark:text-white w-full",
              pill: { off: "rounded-md", on: "rounded-full" },
            },
            pill: { off: "rounded-lg", on: "rounded-full" },
            size: {
              xs: "text-xs px-2 py-1",
              sm: "text-sm px-3 py-1.5",
              md: "text-sm px-4 py-2",
              lg: "text-base px-5 py-2.5",
              xl: "text-base px-6 py-3",
            },
          },
          buttonGroup: {
            base: "inline-flex",
            position: {
              none: "focus:!ring-2",
              start: "rounded-r-none",
              middle: "!rounded-none border-l-0 pl-0",
              end: "rounded-l-none border-l-0 pl-0",
            },
          },
          card: {
            root: {
              base: "flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800",
              children: "flex h-full flex-col justify-center gap-4 p-6",
              horizontal: {
                off: "flex-col",
                on: "flex-col md:max-w-xl md:flex-row",
              },
              href: "hover:bg-gray-100 dark:hover:bg-gray-700",
            },
            img: {
              base: "",
              horizontal: {
                off: "rounded-t-lg",
                on: "h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg",
              },
            },
          },
          carousel: {
            root: {
              base: "relative h-full w-full",
              leftControl:
                "absolute top-0 left-0 flex h-full items-center justify-center px-4 focus:outline-none",
              rightControl:
                "absolute top-0 right-0 flex h-full items-center justify-center px-4 focus:outline-none",
            },
            indicators: {
              active: {
                off: "bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
                on: "bg-white dark:bg-gray-800",
              },
              base: "h-3 w-3 rounded-full",
              wrapper:
                "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3",
            },
            item: {
              base: "absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
              wrapper: "w-full flex-shrink-0 transform cursor-grab snap-center",
            },
            control: {
              base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
              icon: "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6",
            },
            scrollContainer: {
              base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
              snap: "snap-x",
            },
          },
          checkbox: {
            root: {
              base: "h-4 w-4 rounded border border-gray-300 bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600",
            },
          },
          darkThemeToggle: {
            root: {
              base: "rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700",
              icon: "h-5 w-5",
            },
          },
          dropdown: {
            arrowIcon: "ml-2 h-4 w-4",
            content: "py-1",
            floating: {
              animation: "transition-opacity",
              arrow: {
                base: "absolute z-10 h-2 w-2 rotate-45",
                style: {
                  dark: "bg-gray-900 dark:bg-gray-700",
                  light: "bg-white",
                  auto: "bg-white dark:bg-gray-700",
                },
                placement: "-4px",
              },
              base: "z-10 w-fit rounded divide-y divide-gray-100 shadow",
              content: "py-1 text-sm text-gray-700 dark:text-gray-200",
              divider: "my-1 h-px bg-gray-100 dark:bg-gray-600",
              header:
                "block py-2 px-4 text-sm text-gray-700 dark:text-gray-200",
              hidden: "invisible opacity-0",
              item: {
                base: "flex items-center justify-start py-2 px-4 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white",
                icon: "mr-2 h-4 w-4",
              },
              style: {
                dark: "bg-gray-900 text-white dark:bg-gray-700",
                light: "border border-gray-200 bg-white text-gray-900",
                auto: "border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white",
              },
              target: "w-fit",
            },
            inlineWrapper: "flex items-center",
          },
          fileInput: {
            root: { base: "flex" },
            field: {
              base: "relative w-full",
              input: {
                base: "rounded-lg overflow-hidden block w-full border disabled:cursor-not-allowed disabled:opacity-50",
                sizes: { sm: "sm:text-xs", md: "text-sm", lg: "sm:text-md" },
                colors: {
                  gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",
                  info: "border-blue-500 bg-blue-50 text-blue-900 placeholder-blue-700 focus:border-blue-500 focus:ring-blue-500 dark:border-blue-400 dark:bg-blue-100 dark:focus:border-blue-500 dark:focus:ring-blue-500",
                  failure:
                    "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
                  warning:
                    "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
                  success:
                    "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500",
                },
              },
            },
          },
          footer: {
            root: {
              base: "w-full rounded-lg bg-white shadow dark:bg-gray-800 md:flex md:items-center md:justify-between",
              container: "w-full p-6",
              bgDark: "bg-gray-800",
            },
            groupLink: {
              base: "flex flex-wrap text-sm text-gray-500 dark:text-white",
              link: { base: "last:mr-0 md:mr-6", href: "hover:underline" },
              col: "flex-col space-y-4",
            },
            icon: {
              base: "text-gray-500 dark:hover:text-white",
              size: "h-5 w-5",
            },
            title: {
              base: "mb-6 text-sm font-semibold uppercase text-gray-500 dark:text-white",
            },
            divider: {
              base: "w-full my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8",
            },
            copyright: {
              base: "text-sm text-gray-500 dark:text-gray-400 sm:text-center",
              href: "ml-1 hover:underline",
              span: "ml-1",
            },
            brand: {
              base: "mb-4 flex items-center sm:mb-0",
              img: "mr-3 h-8",
              span: "self-center whitespace-nowrap text-2xl font-semibold text-gray-800 dark:text-white",
            },
          },
          helperText: {
            root: {
              base: "mt-2 text-sm",
              colors: {
                gray: "text-gray-500 dark:text-gray-400",
                info: "text-blue-700 dark:text-blue-800",
                success: "text-green-600 dark:text-green-500",
                failure: "text-red-600 dark:text-red-500",
                warning: "text-yellow-500 dark:text-yellow-600",
              },
            },
          },
          label: {
            root: {
              base: "text-sm font-medium",
              disabled: "opacity-50",
              colors: {
                default: "text-gray-900 dark:text-gray-300",
                info: "text-blue-500 dark:text-blue-600",
                failure: "text-red-700 dark:text-red-500",
                warning: "text-yellow-500 dark:text-yellow-600",
                success: "text-green-700 dark:text-green-500",
              },
            },
          },
          listGroup: {
            root: {
              base: "list-none rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white",
            },
            item: {
              base: "flex w-full cursor-pointer border-b border-gray-200 py-2 px-4 first:rounded-t-lg last:rounded-b-lg last:border-b-0 dark:border-gray-600",
              link: {
                base: "",
                active: {
                  off: "hover:bg-gray-100 hover:text-blue-700 focus:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-gray-500",
                  on: "bg-blue-700 text-white dark:bg-gray-800",
                },
                href: { off: "", on: "" },
                icon: "mr-2 h-4 w-4 fill-current",
              },
            },
          },
          modal: {
            root: {
              base: "fixed top-0 right-0 left-0 z-50 h-modal overflow-y-auto overflow-x-hidden md:inset-0 md:h-full",
              show: {
                on: "flex bg-gray-900 bg-opacity-50 dark:bg-opacity-80",
                off: "hidden",
              },
              sizes: {
                sm: "max-w-sm",
                md: "max-w-md",
                lg: "max-w-lg",
                xl: "max-w-xl",
                "2xl": "max-w-2xl",
                "3xl": "max-w-3xl",
                "4xl": "max-w-4xl",
                "5xl": "max-w-5xl",
                "6xl": "max-w-6xl",
                "7xl": "max-w-7xl",
              },
              positions: {
                "top-left": "items-start justify-start",
                "top-center": "items-start justify-center",
                "top-right": "items-start justify-end",
                "center-left": "items-center justify-start",
                center: "items-center justify-center",
                "center-right": "items-center justify-end",
                "bottom-right": "items-end justify-end",
                "bottom-center": "items-end justify-center",
                "bottom-left": "items-end justify-start",
              },
            },
            content: {
              base: "relative h-full w-full p-4 md:h-auto",
              inner: "relative rounded-lg bg-white shadow dark:bg-gray-700",
            },
            body: { base: "p-6", popup: "pt-0" },
            header: {
              base: "flex items-start justify-between rounded-t dark:border-gray-600 border-b p-5",
              popup: "!p-2 !border-b-0",
              title: "text-xl font-medium text-gray-900 dark:text-white",
              close: {
                base: "ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white",
                icon: "h-5 w-5",
              },
            },
            footer: {
              base: "flex items-center space-x-2 rounded-b border-gray-200 p-6 dark:border-gray-600",
              popup: "border-t",
            },
          },
          navbar: {
            root: {
              base: "border-gray-200 bg-white px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4",
              rounded: { on: "rounded", off: "" },
              bordered: { on: "border", off: "" },
              inner: {
                base: "mx-auto flex flex-wrap items-center justify-between",
                fluid: { on: "", off: "container" },
              },
            },
            brand: { base: "flex items-center" },
            collapse: {
              base: "w-full md:block md:w-auto",
              list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
              hidden: { on: "hidden", off: "" },
            },
            link: {
              base: "block py-2 pr-4 pl-3 md:p-0",
              active: {
                on: "bg-blue-700 text-white dark:text-white md:bg-transparent md:text-blue-700",
                off: "border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white",
              },
              disabled: {
                on: "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
                off: "",
              },
            },
            toggle: {
              base: "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden",
              icon: "h-6 w-6 shrink-0",
            },
          },
          pagination: {
            base: "",
            layout: {
              table: {
                base: "text-sm text-gray-700 dark:text-gray-400",
                span: "font-semibold text-gray-900 dark:text-white",
              },
            },
            pages: {
              base: "xs:mt-0 mt-2 inline-flex items-center -space-x-px",
              showIcon: "inline-flex",
              previous: {
                base: "ml-0 rounded-l-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
                icon: "h-5 w-5",
              },
              next: {
                base: "rounded-r-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
                icon: "h-5 w-5",
              },
              selector: {
                base: "w-12 border border-gray-300 bg-white py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
                active:
                  "bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white",
              },
            },
          },
          progress: {
            base: "w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700",
            label: "mb-1 flex justify-between font-medium dark:text-white",
            bar: "flex items-center justify-center rounded-full text-center font-medium leading-none text-blue-100 space-x-2",
            color: {
              dark: "bg-gray-600 dark:bg-gray-300",
              blue: "bg-blue-600",
              red: "bg-red-600 dark:bg-red-500",
              green: "bg-green-600 dark:bg-green-500",
              yellow: "bg-yellow-400",
              indigo: "bg-indigo-600 dark:bg-indigo-500",
              purple: "bg-purple-600 dark:bg-purple-500",
            },
            size: { sm: "h-1.5", md: "h-2.5", lg: "h-4", xl: "h-6" },
          },
          radio: {
            root: {
              base: "h-4 w-4 border border-gray-300 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:bg-blue-600 dark:focus:ring-blue-600",
            },
          },
          rangeSlider: {
            root: { base: "flex" },
            field: {
              base: "relative w-full",
              input: {
                base: "w-full bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700",
                sizes: { sm: "h-1 range-sm", md: "h-2", lg: "h-3 range-lg" },
              },
            },
          },
          rating: {
            root: { base: "flex items-center" },
            advanced: {
              base: "flex items-center",
              label: "text-sm font-medium text-blue-600 dark:text-blue-500",
              progress: {
                base: "mx-4 h-5 w-2/4 rounded bg-gray-200 dark:bg-gray-700",
                fill: "h-5 rounded bg-yellow-400",
                label: "text-sm font-medium text-blue-600 dark:text-blue-500",
              },
            },
            star: {
              empty: "text-gray-300 dark:text-gray-500",
              filled: "text-yellow-400",
              sizes: { sm: "w-5 h-5", md: "w-7 h-7", lg: "w-10 h-10" },
            },
          },
          select: {
            base: "flex",
            addon:
              "inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400",
            field: {
              base: "relative w-full",
              icon: {
                base: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
                svg: "h-5 w-5 text-gray-500 dark:text-gray-400",
              },
              select: {
                base: "block w-full border disabled:cursor-not-allowed disabled:opacity-50",
                withIcon: { on: "pl-10", off: "" },
                withAddon: { on: "rounded-r-lg", off: "rounded-lg" },
                withShadow: { on: "shadow-sm dark:shadow-sm-light", off: "" },
                sizes: {
                  sm: "p-2 sm:text-xs",
                  md: "p-2.5 text-sm",
                  lg: "sm:text-md p-4",
                },
                colors: {
                  gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",
                  info: "border-blue-500 bg-blue-50 text-blue-900 placeholder-blue-700 focus:border-blue-500 focus:ring-blue-500 dark:border-blue-400 dark:bg-blue-100 dark:focus:border-blue-500 dark:focus:ring-blue-500",
                  failure:
                    "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
                  warning:
                    "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
                  success:
                    "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500",
                },
              },
            },
          },
          textInput: {
            base: "flex",
            addon:
              "inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400",
            field: {
              base: "relative w-full",
              icon: {
                base: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
                svg: "h-5 w-5 text-gray-500 dark:text-gray-400",
              },
              rightIcon: {
                base: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3",
                svg: "h-5 w-5 text-gray-500 dark:text-gray-400",
              },
              input: {
                base: "block w-full border disabled:cursor-not-allowed disabled:opacity-50",
                sizes: {
                  sm: "p-2 sm:text-xs",
                  md: "p-2.5 text-sm",
                  lg: "sm:text-md p-4",
                },
                colors: {
                  gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",
                  info: "border-blue-500 bg-blue-50 text-blue-900 placeholder-blue-700 focus:border-blue-500 focus:ring-blue-500 dark:border-blue-400 dark:bg-blue-100 dark:focus:border-blue-500 dark:focus:ring-blue-500",
                  failure:
                    "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
                  warning:
                    "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
                  success:
                    "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500",
                },
                withRightIcon: { on: "pr-10", off: "" },
                withIcon: { on: "pl-10", off: "" },
                withAddon: { on: "rounded-r-lg", off: "rounded-lg" },
                withShadow: { on: "shadow-sm dark:shadow-sm-light", off: "" },
              },
            },
          },
          textarea: {
            base: "block w-full rounded-lg border disabled:cursor-not-allowed disabled:opacity-50",
            colors: {
              gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",
              info: "border-blue-500 bg-blue-50 text-blue-900 placeholder-blue-700 focus:border-blue-500 focus:ring-blue-500 dark:border-blue-400 dark:bg-blue-100 dark:focus:border-blue-500 dark:focus:ring-blue-500",
              failure:
                "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
              warning:
                "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
              success:
                "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500",
            },
            withShadow: { on: "shadow-sm dark:shadow-sm-light", off: "" },
          },
          toggleSwitch: {
            root: {
              base: "group relative flex items-center rounded-lg focus:outline-none",
              active: {
                on: "cursor-pointer",
                off: "cursor-not-allowed opacity-50",
              },
              label:
                "ml-3 text-sm font-medium text-gray-900 dark:text-gray-300",
            },
            toggle: {
              base: "toggle-bg h-6 w-11 rounded-full border group-focus:ring-4 group-focus:ring-blue-500/25",
              checked: {
                on: "after:translate-x-full after:border-white",
                off: "border-gray-200 bg-gray-200 dark:border-gray-600 dark:bg-gray-700",
                color: {
                  blue: " bg-blue-700 border-blue-700",
                  dark: "bg-dark-700 border-dark-900",
                  failure: "bg-red-700 border-red-900",
                  gray: "bg-gray-500 border-gray-600",
                  green: "bg-green-600 border-green-700",
                  light: "bg-light-700 border-light-900",
                  red: "bg-red-700 border-red-900",
                  purple: "bg-purple-700 border-purple-900",
                  success: "bg-green-500 border-green-500",
                  yellow: "bg-yellow-400 border-yellow-400",
                  warning: "bg-yellow-600 border-yellow-600",
                  cyan: "bg-cyan-500 border-cyan-500",
                  lime: "bg-lime-400 border-lime-400",
                  indigo: "bg-indigo-400 border-indigo-400",
                  teal: "bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4",
                  info: "bg-blue-600 border-blue-600",
                  pink: "bg-pink-600 border-pink-600",
                },
              },
            },
          },
          sidebar: {
            root: {
              base: "h-full",
              collapsed: { on: "w-16", off: "w-64" },
              inner:
                "h-full overflow-y-auto overflow-x-hidden rounded bg-white py-4 px-3 dark:bg-gray-800",
            },
            collapse: {
              button:
                "group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
              icon: {
                base: "h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",
                open: { off: "", on: "text-gray-900" },
              },
              label: {
                base: "ml-3 flex-1 whitespace-nowrap text-left",
                icon: "h-6 w-6",
              },
              list: "space-y-2 py-2",
            },
            cta: {
              base: "mt-6 rounded-lg p-4",
              color: {
                blue: "bg-blue-50 dark:bg-blue-900",
                dark: "bg-dark-50 dark:bg-dark-900",
                failure: "bg-red-50 dark:bg-red-900",
                gray: "bg-alternative-50 dark:bg-alternative-900",
                green: "bg-green-50 dark:bg-green-900",
                light: "bg-light-50 dark:bg-light-900",
                red: "bg-red-50 dark:bg-red-900",
                purple: "bg-purple-50 dark:bg-purple-900",
                success: "bg-green-50 dark:bg-green-900",
                yellow: "bg-yellow-50 dark:bg-yellow-900",
                warning: "bg-yellow-50 dark:bg-yellow-900",
              },
            },
            item: {
              base: "flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
              active: "bg-gray-100 dark:bg-gray-700",
              collapsed: {
                insideCollapse: "group w-full pl-8 transition duration-75",
                noIcon: "font-bold",
              },
              content: { base: "px-3 flex-1 whitespace-nowrap" },
              icon: {
                base: "h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",
                active: "text-gray-700 dark:text-gray-100",
              },
              label: "",
            },
            items: "",
            itemGroup:
              "mt-4 space-y-2 border-t border-gray-200 pt-4 first:mt-0 first:border-t-0 first:pt-0 dark:border-gray-700",
            logo: {
              base: "mb-5 flex items-center pl-2.5",
              collapsed: {
                on: "hidden",
                off: "self-center whitespace-nowrap text-xl font-semibold dark:text-white",
              },
              img: "mr-3 h-6 sm:h-7",
            },
          },
          spinner: {
            base: "inline animate-spin text-gray-200",
            color: {
              failure: "fill-red-600",
              gray: "fill-gray-600",
              info: "fill-blue-600",
              pink: "fill-pink-600",
              purple: "fill-purple-600",
              success: "fill-green-500",
              warning: "fill-yellow-400",
            },
            light: {
              off: {
                base: "dark:text-gray-600",
                color: {
                  failure: "",
                  gray: "dark:fill-gray-300",
                  info: "",
                  pink: "",
                  purple: "",
                  success: "",
                  warning: "",
                },
              },
              on: {
                base: "",
                color: {
                  failure: "",
                  gray: "",
                  info: "",
                  pink: "",
                  purple: "",
                  success: "",
                  warning: "",
                },
              },
            },
            size: {
              xs: "w-3 h-3",
              sm: "w-4 h-4",
              md: "w-6 h-6",
              lg: "w-8 h-8",
              xl: "w-10 h-10",
            },
          },
          tab: {
            base: "flex flex-col gap-2",
            tablist: {
              base: "flex text-center",
              styles: {
                default:
                  "flex-wrap border-b border-gray-200 dark:border-gray-700",
                underline:
                  "flex-wrap -mb-px border-b border-gray-200 dark:border-gray-700",
                pills:
                  "flex-wrap font-medium text-sm text-gray-500 dark:text-gray-400",
                fullWidth:
                  "hidden text-sm font-medium rounded-lg divide-x divide-gray-200 shadow sm:flex dark:divide-gray-700 dark:text-gray-400",
              },
              tabitem: {
                base: "flex items-center justify-center p-4 text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500",
                styles: {
                  default: {
                    base: "rounded-t-lg",
                    active: {
                      on: "bg-gray-100 text-blue-600 dark:bg-gray-800 dark:text-blue-500",
                      off: "text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800  dark:hover:text-gray-300",
                    },
                  },
                  underline: {
                    base: "rounded-t-lg",
                    active: {
                      on: "text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500",
                      off: "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300",
                    },
                  },
                  pills: {
                    base: "",
                    active: {
                      on: "rounded-lg bg-blue-600 text-white",
                      off: "rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white",
                    },
                  },
                  fullWidth: {
                    base: "ml-2 first:ml-0 w-full first:rounded-l-lg last:rounded-r-lg",
                    active: {
                      on: "inline-block p-4 w-full text-gray-900 bg-gray-100 focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white",
                      off: "bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700",
                    },
                  },
                },
                icon: "mr-2 h-5 w-5",
              },
            },
            tabpanel: "p-4",
          },
          table: {
            root: {
              base: "w-full text-left text-sm text-gray-500 dark:text-gray-400",
              wrapper: "relative overflow-x-auto shadow-md sm:rounded-lg",
            },
            cell: { base: "px-6 py-4" },
            head: {
              base: "bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400",
              cell: { base: "px-6 py-3" },
            },
            row: {
              hovered: "hover:bg-gray-50 dark:hover:bg-gray-600",
              striped:
                "odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700",
            },
          },
          timeline: {
            root: {
              direction: {
                horizontal: "items-base sm:flex",
                vertical:
                  "relative border-l border-gray-200 dark:border-gray-700",
              },
            },
            item: {
              root: {
                horizontal: "relative mb-6 sm:mb-0",
                vertical: "mb-10 ml-6",
              },
              content: {
                root: { base: "mt-3 sm:pr-8" },
                body: "mb-4 text-base font-normal text-gray-500 dark:text-gray-400",
                time: "mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500",
                title: "text-lg font-semibold text-gray-900 dark:text-white",
              },
              point: {
                horizontal: "flex items-center",
                line: "hidden h-0.5 w-full bg-gray-200 dark:bg-gray-700 sm:flex",
                marker: {
                  base: {
                    horizontal:
                      "absolute -left-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700",
                    vertical:
                      "absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700",
                  },
                  icon: {
                    base: "h-3 w-3 text-blue-600 dark:text-blue-300",
                    wrapper:
                      "absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900",
                  },
                },
                vertical: "",
              },
            },
          },
          toast: {
            root: {
              base: "flex w-full max-w-xs items-center rounded-lg bg-white p-4 text-gray-500 shadow dark:bg-gray-800 dark:text-gray-400",
              closed: "opacity-0 ease-out",
              removed: "hidden",
            },
            toggle: {
              base: "-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white",
              icon: "h-5 w-5 shrink-0",
            },
          },
          tooltip: {
            target: "w-fit",
            animation: "transition-opacity",
            arrow: {
              base: "absolute z-10 h-2 w-2 rotate-45",
              style: {
                dark: "bg-gray-900 dark:bg-gray-700",
                light: "bg-white",
                auto: "bg-white dark:bg-gray-700",
              },
              placement: "-4px",
            },
            base: "absolute inline-block z-10 rounded-lg py-2 px-3 text-sm font-medium shadow-sm",
            hidden: "invisible opacity-0",
            style: {
              dark: "bg-gray-900 text-white dark:bg-gray-700",
              light: "border border-gray-200 bg-white text-gray-900",
              auto: "border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white",
            },
            content: "relative z-20",
          },
        },
        le = (0, e.createContext)({ theme: oe });
      function ie() {
        return (0, e.useContext)(le);
      }
      var se = (0, e.createContext)(void 0);
      function ue() {
        var t = (0, e.useContext)(se);
        if (!t)
          throw new Error(
            "useAccordionContext should be used within the AccordionPanelContext provider!"
          );
        return t;
      }
      var ce = ["children", "className", "theme"],
        de = function (e) {
          var t = e.children,
            r = e.className,
            n = e.theme,
            a = void 0 === n ? {} : n,
            o = Z(e, ce),
            l = ue().isOpen,
            i = ae(ie().theme.accordion.content, a);
          return (0, C.jsx)(
            "div",
            J(
              J(
                {
                  className: te()(i.base, r),
                  "data-testid": "flowbite-accordion-content",
                  hidden: !l,
                },
                o
              ),
              {},
              { children: t }
            )
          );
        },
        fe = ["children"],
        pe = function (t) {
          var r = t.children,
            n = Z(t, fe),
            a = n.alwaysOpen,
            o = l((0, e.useState)(n.isOpen), 2),
            i = o[0],
            s = o[1],
            u = a
              ? J(
                  J({}, n),
                  {},
                  {
                    isOpen: i,
                    setOpen: function () {
                      return s(!i);
                    },
                  }
                )
              : n;
          return (0, C.jsx)(se.Provider, { value: u, children: r });
        },
        ge = ["as", "children", "className", "theme"],
        he = function (e) {
          var t = e.as,
            r = void 0 === t ? "h2" : t,
            n = e.children,
            a = e.className,
            o = e.theme,
            l = void 0 === o ? {} : o,
            i = Z(e, ge),
            s = ue(),
            u = s.arrowIcon,
            c = s.flush,
            d = s.isOpen,
            f = s.setOpen,
            p = ae(ie().theme.accordion.title, l);
          return (0, C.jsxs)(
            "button",
            J(
              J(
                {
                  className: te()(
                    p.base,
                    p.flush[c ? "on" : "off"],
                    p.open[d ? "on" : "off"],
                    a
                  ),
                  onClick: function () {
                    return "undefined" !== typeof f && f();
                  },
                  type: "button",
                },
                i
              ),
              {},
              {
                children: [
                  (0, C.jsx)(r, {
                    className: p.heading,
                    "data-testid": "flowbite-accordion-heading",
                    children: n,
                  }),
                  u &&
                    (0, C.jsx)(u, {
                      "aria-hidden": !0,
                      className: te()(
                        p.arrow.base,
                        p.arrow.open[d ? "on" : "off"]
                      ),
                      "data-testid": "flowbite-accordion-arrow",
                    }),
                ],
              }
            )
          );
        },
        me = [
          "alwaysOpen",
          "arrowIcon",
          "children",
          "flush",
          "collapseAll",
          "className",
          "theme",
        ],
        be = function (t) {
          var r = t.alwaysOpen,
            n = void 0 !== r && r,
            a = t.arrowIcon,
            o = void 0 === a ? O : a,
            i = t.children,
            s = t.flush,
            u = void 0 !== s && s,
            c = t.collapseAll,
            d = void 0 !== c && c,
            f = t.className,
            p = t.theme,
            g = void 0 === p ? {} : p,
            h = Z(t, me),
            m = l((0, e.useState)(d ? -1 : 0), 2),
            b = m[0],
            v = m[1],
            y = (0, e.useMemo)(
              function () {
                return e.Children.map(i, function (t, r) {
                  return (0, e.cloneElement)(t, {
                    alwaysOpen: n,
                    arrowIcon: o,
                    flush: u,
                    isOpen: b === r,
                    setOpen: function () {
                      return v(r);
                    },
                  });
                });
              },
              [n, o, i, u, b]
            ),
            x = ae(ie().theme.accordion.root, g);
          return (0, C.jsx)(
            "div",
            J(
              J(
                {
                  className: te()(x.base, x.flush[u ? "on" : "off"], f),
                  "data-testid": "flowbite-accordion",
                },
                h
              ),
              {},
              { children: y }
            )
          );
        };
      (be.displayName = "Accordion"),
        (pe.displayName = "Accordion.Panel"),
        (he.displayName = "Accordion.Title"),
        (de.displayName = "Accordion.Content");
      var ve = Object.assign(be, { Panel: pe, Title: he, Content: de }),
        ye = ["children", "className", "theme"],
        xe = function (e) {
          var t = e.children,
            r = e.className,
            n = e.theme,
            a = void 0 === n ? {} : n,
            o = Z(e, ye),
            l = ae(ie().theme.avatar.group, a);
          return (0, C.jsx)(
            "div",
            J(
              J(
                {
                  "data-testid": "avatar-group-element",
                  className: te()(l.base, r),
                },
                o
              ),
              {},
              { children: t }
            )
          );
        };
      xe.displayName = "Avatar.Group";
      var ke = xe,
        we = ["className", "href", "theme", "total"],
        Ne = function (e) {
          var t = e.className,
            r = e.href,
            n = e.theme,
            a = void 0 === n ? {} : n,
            o = e.total,
            l = Z(e, we),
            i = ae(ie().theme.avatar.groupCounter, a);
          return (0, C.jsxs)(
            "a",
            J(
              J({ href: r, className: te()(i.base, t) }, l),
              {},
              { children: ["+", o] }
            )
          );
        };
      Ne.displayName = "Avatar.GroupCounter";
      var Se = Ne,
        je = [
          "alt",
          "bordered",
          "children",
          "className",
          "color",
          "img",
          "placeholderInitials",
          "rounded",
          "size",
          "stacked",
          "status",
          "statusPosition",
          "theme",
        ],
        Ce = function (e) {
          var t = e.alt,
            r = void 0 === t ? "" : t,
            n = e.bordered,
            a = void 0 !== n && n,
            o = e.children,
            l = e.className,
            i = e.color,
            s = void 0 === i ? "light" : i,
            u = e.img,
            c = e.placeholderInitials,
            d = void 0 === c ? "" : c,
            f = e.rounded,
            p = void 0 !== f && f,
            g = e.size,
            h = void 0 === g ? "md" : g,
            m = e.stacked,
            b = void 0 !== m && m,
            v = e.status,
            y = e.statusPosition,
            x = void 0 === y ? "top-left" : y,
            k = e.theme,
            w = void 0 === k ? {} : k,
            N = Z(e, je),
            S = ae(ie().theme.avatar, w),
            j = te()(
              a && S.root.bordered,
              a && S.root.color[s],
              p && S.root.rounded,
              b && S.root.stacked,
              S.root.img.on,
              S.root.size[h]
            ),
            E = {
              alt: r,
              className: te()(j, S.root.img.on),
              "data-testid": "flowbite-avatar-img",
            };
          return (0, C.jsxs)(
            "div",
            J(
              J(
                {
                  className: te()(S.root.base, l),
                  "data-testid": "flowbite-avatar",
                },
                N
              ),
              {},
              {
                children: [
                  (0, C.jsxs)("div", {
                    className: "relative",
                    children: [
                      u
                        ? "string" === typeof u
                          ? (0, C.jsx)("img", J(J({}, E), {}, { src: u }))
                          : u(E)
                        : d
                        ? (0, C.jsx)("div", {
                            className: te()(
                              S.root.img.off,
                              S.root.initials.base,
                              p && S.root.rounded,
                              b && S.root.stacked,
                              a && S.root.bordered,
                              a && S.root.color[s],
                              S.root.size[h]
                            ),
                            "data-testid":
                              "flowbite-avatar-initials-placeholder",
                            children: (0, C.jsx)("span", {
                              className: te()(S.root.initials.text),
                              "data-testid":
                                "flowbite-avatar-initials-placeholder-text",
                              children: d,
                            }),
                          })
                        : (0, C.jsx)("div", {
                            className: te()(j, S.root.img.off),
                            "data-testid": "flowbite-avatar-img",
                            children: (0, C.jsx)("svg", {
                              className: S.root.img.placeholder,
                              fill: "currentColor",
                              viewBox: "0 0 20 20",
                              xmlns: "http://www.w3.org/2000/svg",
                              children: (0, C.jsx)("path", {
                                fillRule: "evenodd",
                                d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",
                                clipRule: "evenodd",
                              }),
                            }),
                          }),
                      v &&
                        (0, C.jsx)("span", {
                          "data-testid": "flowbite-avatar-status",
                          className: te()(
                            S.root.status.base,
                            S.root.status[v],
                            S.root.statusPosition[x]
                          ),
                        }),
                    ],
                  }),
                  o && (0, C.jsx)("div", { children: o }),
                ],
              }
            )
          );
        };
      Ce.displayName = "Avatar";
      Object.assign(Ce, { Group: ke, Counter: Se });
      var Ee = [
          "children",
          "color",
          "href",
          "icon",
          "size",
          "className",
          "theme",
        ],
        Pe = function (e) {
          var t = e.children,
            r = e.color,
            n = void 0 === r ? "info" : r,
            a = e.href,
            o = e.icon,
            l = e.size,
            i = void 0 === l ? "xs" : l,
            s = e.className,
            u = e.theme,
            c = void 0 === u ? {} : u,
            d = Z(e, Ee),
            f = ae(ie().theme.badge, c),
            p = function () {
              return (0, C.jsxs)(
                "span",
                J(
                  J(
                    {
                      className: te()(
                        f.root.base,
                        f.root.color[n],
                        f.icon[o ? "on" : "off"],
                        f.root.size[i],
                        s
                      ),
                      "data-testid": "flowbite-badge",
                    },
                    d
                  ),
                  {},
                  {
                    children: [
                      o &&
                        (0, C.jsx)(o, {
                          "aria-hidden": !0,
                          className: f.icon.size[i],
                          "data-testid": "flowbite-badge-icon",
                        }),
                      t && (0, C.jsx)("span", { children: t }),
                    ],
                  }
                )
              );
            };
          return a
            ? (0, C.jsx)("a", {
                className: f.root.href,
                href: a,
                children: (0, C.jsx)(p, {}),
              })
            : (0, C.jsx)(p, {});
        },
        _e = ["children", "className", "href", "icon", "theme"],
        ze = (0, e.forwardRef)(function (e, t) {
          var r = e.children,
            n = e.className,
            a = e.href,
            o = e.icon,
            l = e.theme,
            i = void 0 === l ? {} : l,
            s = Z(e, _e),
            u = "undefined" !== typeof a,
            c = u ? "a" : "span",
            d = ae(ie().theme.breadcrumb.item, i);
          return (0,
          C.jsxs)("li", J(J({ className: te()(d.base, n) }, s), {}, { children: [(0, C.jsx)(B, { "aria-hidden": !0, className: d.chevron, "data-testid": "flowbite-breadcrumb-separator" }), (0, C.jsxs)(c, { ref: t, className: d.href[u ? "on" : "off"], "data-testid": "flowbite-breadcrumb-item", href: a, children: [o && (0, C.jsx)(o, { "aria-hidden": !0, className: d.icon }), r] })] }));
        });
      ze.displayName = "Breadcrumb.Item";
      var Te = ze,
        Le = ["children", "className", "theme"],
        Me = function (e) {
          var t = e.children,
            r = e.className,
            n = e.theme,
            a = void 0 === n ? {} : n,
            o = Z(e, Le),
            l = ae(ie().theme.breadcrumb.root, a);
          return (0, C.jsx)(
            "nav",
            J(
              J({ "aria-label": "Breadcrumb", className: te()(l.base, r) }, o),
              {},
              { children: (0, C.jsx)("ol", { className: l.list, children: t }) }
            )
          );
        };
      Me.displayName = "Breadcrumb";
      Object.assign(Me, { Item: Te });
      var Oe = ["children", "className", "outline", "pill", "theme"],
        Re = function (t) {
          var r = t.children,
            n = t.className,
            a = t.outline,
            o = t.pill,
            l = t.theme,
            i = void 0 === l ? {} : l,
            s = Z(t, Oe),
            u = (0, e.useMemo)(
              function () {
                return e.Children.map(r, function (t, n) {
                  return (0,
                  e.cloneElement)(t, { outline: a, pill: o, positionInGroup: 0 === n ? "start" : n === r.length - 1 ? "end" : "middle" });
                });
              },
              [r, a, o]
            ),
            c = ae(ie().theme.buttonGroup, i);
          return (0, C.jsx)(
            "div",
            J(
              J({ className: te()(c.base, n), role: "group" }, s),
              {},
              { children: u }
            )
          );
        };
      Re.displayName = "Button.Group";
      var Ie = Re,
        De = [
          "children",
          "className",
          "color",
          "disabled",
          "fullSized",
          "gradientDuoTone",
          "gradientMonochrome",
          "href",
          "label",
          "outline",
          "pill",
          "positionInGroup",
          "size",
          "theme",
        ],
        Fe = (0, e.forwardRef)(function (e, t) {
          var r,
            n = e.children,
            a = e.className,
            o = e.color,
            l = void 0 === o ? "info" : o,
            i = e.disabled,
            s = void 0 !== i && i,
            u = e.fullSized,
            c = e.gradientDuoTone,
            d = e.gradientMonochrome,
            f = e.href,
            p = e.label,
            g = e.outline,
            h = void 0 !== g && g,
            m = e.pill,
            b = void 0 !== m && m,
            v = e.positionInGroup,
            y = void 0 === v ? "none" : v,
            x = e.size,
            k = void 0 === x ? "md" : x,
            w = e.theme,
            N = void 0 === w ? {} : w,
            S = Z(e, De),
            j = ae(ie().theme, N),
            E = j.buttonGroup,
            P = j.button,
            _ = "undefined" !== typeof f,
            z = _ ? "a" : "button",
            T = S;
          return (0,
          C.jsx)(z, J(J({ disabled: s, href: f, type: _ ? void 0 : "button", ref: t, className: te()(s && P.disabled, !c && !d && P.color[l], c && !d && P.gradientDuoTone[c], !c && d && P.gradient[d], E.position[y], h && (null !== (r = P.outline.color[l]) && void 0 !== r ? r : P.outline.color.default), P.base, P.pill[b ? "on" : "off"], u && P.fullSized, a) }, T), {}, { children: (0, C.jsx)("span", { className: te()(P.inner.base, P.inner.position[y], P.outline[h ? "on" : "off"], P.outline.pill[h && b ? "on" : "off"], P.size[k], h && !P.outline.color[l] && P.inner.outline), children: (0, C.jsxs)(C.Fragment, { children: ["undefined" !== typeof n && n, "undefined" !== typeof p && (0, C.jsx)("span", { "data-testid": "flowbite-button-label", className: P.label, children: p })] }) }) }));
        });
      Fe.displayName = "Button";
      var Ae,
        Be = Object.assign(Fe, { Group: Ie }),
        He = function (e, t) {
          return (He =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        },
        Ue =
          ((function (e) {
            !(function () {
              var t = {}.hasOwnProperty;
              function r() {
                for (var e = [], n = 0; n < arguments.length; n++) {
                  var a = arguments[n];
                  if (a) {
                    var o = typeof a;
                    if ("string" === o || "number" === o) e.push(a);
                    else if (Array.isArray(a) && a.length) {
                      var l = r.apply(null, a);
                      l && e.push(l);
                    } else if ("object" === o)
                      for (var i in a) t.call(a, i) && a[i] && e.push(i);
                  }
                }
                return e.join(" ");
              }
              e.exports
                ? ((r.default = r), (e.exports = r))
                : (window.classNames = r);
            })();
          })(
            (Ae = {
              path: undefined,
              exports: {},
              require: function (e, t) {
                return (function () {
                  throw new Error(
                    "Dynamic requires are not currently supported by @rollup/plugin-commonjs"
                  );
                })(null == t && Ae.path);
              },
            }),
            Ae.exports
          ),
          Ae.exports);
      function Ve(e, t, r) {
        var n, a, o, l, i;
        function s() {
          var u = Date.now() - l;
          u < t && u >= 0
            ? (n = setTimeout(s, t - u))
            : ((n = null), r || ((i = e.apply(o, a)), (o = a = null)));
        }
        null == t && (t = 100);
        var u = function () {
          (o = this), (a = arguments), (l = Date.now());
          var u = r && !n;
          return (
            n || (n = setTimeout(s, t)),
            u && ((i = e.apply(o, a)), (o = a = null)),
            i
          );
        };
        return (
          (u.clear = function () {
            n && (clearTimeout(n), (n = null));
          }),
          (u.flush = function () {
            n &&
              ((i = e.apply(o, a)),
              (o = a = null),
              clearTimeout(n),
              (n = null));
          }),
          u
        );
      }
      Ve.debounce = Ve;
      var We = Ve;
      !(function (e, t) {
        void 0 === t && (t = {});
        var r = t.insertAt;
        if (e && "undefined" != typeof document) {
          var n = document.head || document.getElementsByTagName("head")[0],
            a = document.createElement("style");
          (a.type = "text/css"),
            "top" === r && n.firstChild
              ? n.insertBefore(a, n.firstChild)
              : n.appendChild(a),
            a.styleSheet
              ? (a.styleSheet.cssText = e)
              : a.appendChild(document.createTextNode(e));
        }
      })(
        ".indiana-scroll-container {\n  overflow: auto; }\n  .indiana-scroll-container--dragging {\n    scroll-behavior: auto !important; }\n    .indiana-scroll-container--dragging > * {\n      pointer-events: none;\n      cursor: -webkit-grab;\n      cursor: grab; }\n  .indiana-scroll-container--hide-scrollbars {\n    overflow: hidden;\n    overflow: -moz-scrollbars-none;\n    -ms-overflow-style: none;\n    scrollbar-width: none; }\n    .indiana-scroll-container--hide-scrollbars::-webkit-scrollbar {\n      display: none !important;\n      height: 0 !important;\n      width: 0 !important;\n      background: transparent !important;\n      -webkit-appearance: none !important; }\n  .indiana-scroll-container--native-scroll {\n    overflow: auto; }\n\n.indiana-dragging {\n  cursor: -webkit-grab;\n  cursor: grab; }\n"
      );
      var $e,
        Ke =
          (($e = "indiana-scroll-container"),
          function (e, t) {
            if (!e) return $e;
            var r;
            "string" == typeof e ? (r = e) : (t = e);
            var n = $e;
            return (
              r && (n += "__" + r),
              n +
                (t
                  ? Object.keys(t).reduce(function (e, r) {
                      var a = t[r];
                      return (
                        a &&
                          (e +=
                            " " +
                            ("boolean" == typeof a
                              ? n + "--" + r
                              : n + "--" + r + "_" + a)),
                        e
                      );
                    }, "")
                  : "")
            );
          }),
        Qe =
          ((function (t) {
            function r(r) {
              var n = t.call(this, r) || this;
              return (
                (n.onEndScroll = function () {
                  (n.scrolling = !1), !n.pressed && n.started && n.processEnd();
                }),
                (n.onScroll = function (e) {
                  var t = n.container.current;
                  (t.scrollLeft === n.scrollLeft &&
                    t.scrollTop === n.scrollTop) ||
                    ((n.scrolling = !0), n.processScroll(e), n.onEndScroll());
                }),
                (n.onTouchStart = function (e) {
                  var t = n.props.nativeMobileScroll;
                  if (n.isDraggable(e.target))
                    if (((n.internal = !0), t && n.scrolling)) n.pressed = !0;
                    else {
                      var r = e.touches[0];
                      n.processClick(e, r.clientX, r.clientY),
                        !t && n.props.stopPropagation && e.stopPropagation();
                    }
                }),
                (n.onTouchEnd = function (e) {
                  var t = n.props.nativeMobileScroll;
                  n.pressed &&
                    (!n.started || (n.scrolling && t)
                      ? (n.pressed = !1)
                      : n.processEnd(),
                    n.forceUpdate());
                }),
                (n.onTouchMove = function (e) {
                  var t = n.props.nativeMobileScroll;
                  if (n.pressed && (!t || !n.isMobile)) {
                    var r = e.touches[0];
                    r && n.processMove(e, r.clientX, r.clientY),
                      e.preventDefault(),
                      n.props.stopPropagation && e.stopPropagation();
                  }
                }),
                (n.onMouseDown = function (e) {
                  n.isDraggable(e.target) &&
                    n.isScrollable() &&
                    ((n.internal = !0),
                    -1 !== n.props.buttons.indexOf(e.button) &&
                      (n.processClick(e, e.clientX, e.clientY),
                      e.preventDefault(),
                      n.props.stopPropagation && e.stopPropagation()));
                }),
                (n.onMouseMove = function (e) {
                  n.pressed &&
                    (n.processMove(e, e.clientX, e.clientY),
                    e.preventDefault(),
                    n.props.stopPropagation && e.stopPropagation());
                }),
                (n.onMouseUp = function (e) {
                  n.pressed &&
                    (n.started
                      ? n.processEnd()
                      : ((n.internal = !1),
                        (n.pressed = !1),
                        n.forceUpdate(),
                        n.props.onClick && n.props.onClick(e)),
                    e.preventDefault(),
                    n.props.stopPropagation && e.stopPropagation());
                }),
                (n.container = e.createRef()),
                (n.onEndScroll = We(n.onEndScroll, 300)),
                (n.scrolling = !1),
                (n.started = !1),
                (n.pressed = !1),
                (n.internal = !1),
                (n.getRef = n.getRef.bind(n)),
                n
              );
            }
            (function (e, t) {
              function r() {
                this.constructor = e;
              }
              He(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((r.prototype = t.prototype), new r()));
            })(r, t),
              (r.prototype.componentDidMount = function () {
                var e = this.props.nativeMobileScroll,
                  t = this.container.current;
                window.addEventListener("mouseup", this.onMouseUp),
                  window.addEventListener("mousemove", this.onMouseMove),
                  window.addEventListener("touchmove", this.onTouchMove, {
                    passive: !1,
                  }),
                  window.addEventListener("touchend", this.onTouchEnd),
                  t.addEventListener("touchstart", this.onTouchStart, {
                    passive: !1,
                  }),
                  t.addEventListener("mousedown", this.onMouseDown, {
                    passive: !1,
                  }),
                  e &&
                    ((this.isMobile = this.isMobileDevice()),
                    this.isMobile && this.forceUpdate());
              }),
              (r.prototype.componentWillUnmount = function () {
                window.removeEventListener("mouseup", this.onMouseUp),
                  window.removeEventListener("mousemove", this.onMouseMove),
                  window.removeEventListener("touchmove", this.onTouchMove),
                  window.removeEventListener("touchend", this.onTouchEnd);
              }),
              (r.prototype.getElement = function () {
                return this.container.current;
              }),
              (r.prototype.isMobileDevice = function () {
                return (
                  void 0 !== window.orientation ||
                  -1 !== navigator.userAgent.indexOf("IEMobile")
                );
              }),
              (r.prototype.isDraggable = function (e) {
                var t = this.props.ignoreElements;
                if (t) {
                  var r = e.closest(t);
                  return null === r || r.contains(this.getElement());
                }
                return !0;
              }),
              (r.prototype.isScrollable = function () {
                var e = this.container.current;
                return (
                  e &&
                  (e.scrollWidth > e.clientWidth ||
                    e.scrollHeight > e.clientHeight)
                );
              }),
              (r.prototype.processClick = function (e, t, r) {
                var n = this.container.current;
                (this.scrollLeft = n.scrollLeft),
                  (this.scrollTop = n.scrollTop),
                  (this.clientX = t),
                  (this.clientY = r),
                  (this.pressed = !0);
              }),
              (r.prototype.processStart = function (e) {
                void 0 === e && (e = !0);
                var t = this.props.onStartScroll;
                (this.started = !0),
                  e && document.body.classList.add("indiana-dragging"),
                  t && t({ external: !this.internal }),
                  this.forceUpdate();
              }),
              (r.prototype.processScroll = function (e) {
                if (this.started) {
                  var t = this.props.onScroll;
                  t && t({ external: !this.internal });
                } else this.processStart(!1);
              }),
              (r.prototype.processMove = function (e, t, r) {
                var n = this.props,
                  a = n.horizontal,
                  o = n.vertical,
                  l = n.activationDistance,
                  i = n.onScroll,
                  s = this.container.current;
                this.started
                  ? (a && (s.scrollLeft -= t - this.clientX),
                    o && (s.scrollTop -= r - this.clientY),
                    i && i({ external: !this.internal }),
                    (this.clientX = t),
                    (this.clientY = r),
                    (this.scrollLeft = s.scrollLeft),
                    (this.scrollTop = s.scrollTop))
                  : ((a && Math.abs(t - this.clientX) > l) ||
                      (o && Math.abs(r - this.clientY) > l)) &&
                    ((this.clientX = t),
                    (this.clientY = r),
                    this.processStart());
              }),
              (r.prototype.processEnd = function () {
                var e = this.props.onEndScroll;
                this.container.current && e && e({ external: !this.internal }),
                  (this.pressed = !1),
                  (this.started = !1),
                  (this.scrolling = !1),
                  (this.internal = !1),
                  document.body.classList.remove("indiana-dragging"),
                  this.forceUpdate();
              }),
              (r.prototype.getRef = function (e) {
                [this.container, this.props.innerRef].forEach(function (t) {
                  t && ("function" == typeof t ? t(e) : (t.current = e));
                });
              }),
              (r.prototype.render = function () {
                var t = this.props,
                  r = t.children,
                  n = t.draggingClassName,
                  a = t.className,
                  o = t.style,
                  l = t.hideScrollbars,
                  i = t.component;
                return e.createElement(
                  i,
                  {
                    className: Ue(
                      a,
                      this.pressed && n,
                      Ke({
                        dragging: this.pressed,
                        "hide-scrollbars": l,
                        "native-scroll": this.isMobile,
                      })
                    ),
                    style: o,
                    ref: this.getRef,
                    onScroll: this.onScroll,
                  },
                  r
                );
              }),
              (r.defaultProps = {
                nativeMobileScroll: !0,
                hideScrollbars: !0,
                activationDistance: 10,
                vertical: !0,
                horizontal: !0,
                stopPropagation: !1,
                style: {},
                component: "div",
                buttons: [0],
              });
          })(e.PureComponent),
          ["className", "theme"]),
        qe = (0, e.forwardRef)(function (e, t) {
          var r = e.className,
            n = e.theme,
            a = void 0 === n ? {} : n,
            o = Z(e, Qe),
            l = ae(ie().theme.checkbox, a);
          return (0,
          C.jsx)("input", J({ ref: t, type: "checkbox", className: te()(l.root.base, r) }, o));
        });
      qe.displayName = "Checkbox";
      function Ge(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return a(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          o(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function Ye() {
        Ye = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (e, t, r) {
              e[t] = r.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          o = a.iterator || "@@iterator",
          l = a.asyncIterator || "@@asyncIterator",
          i = a.toStringTag || "@@toStringTag";
        function s(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          s({}, "");
        } catch (P) {
          s = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function u(e, t, r, a) {
          var o = t && t.prototype instanceof f ? t : f,
            l = Object.create(o.prototype),
            i = new j(a || []);
          return n(l, "_invoke", { value: k(e, r, i) }), l;
        }
        function c(e, t, r) {
          try {
            return { type: "normal", arg: e.call(t, r) };
          } catch (P) {
            return { type: "throw", arg: P };
          }
        }
        e.wrap = u;
        var d = {};
        function f() {}
        function p() {}
        function g() {}
        var h = {};
        s(h, o, function () {
          return this;
        });
        var m = Object.getPrototypeOf,
          b = m && m(m(C([])));
        b && b !== t && r.call(b, o) && (h = b);
        var v = (g.prototype = f.prototype = Object.create(h));
        function y(e) {
          ["next", "throw", "return"].forEach(function (t) {
            s(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function x(e, t) {
          function a(n, o, l, i) {
            var s = c(e[n], e, o);
            if ("throw" !== s.type) {
              var u = s.arg,
                d = u.value;
              return d && "object" == q(d) && r.call(d, "__await")
                ? t.resolve(d.__await).then(
                    function (e) {
                      a("next", e, l, i);
                    },
                    function (e) {
                      a("throw", e, l, i);
                    }
                  )
                : t.resolve(d).then(
                    function (e) {
                      (u.value = e), l(u);
                    },
                    function (e) {
                      return a("throw", e, l, i);
                    }
                  );
            }
            i(s.arg);
          }
          var o;
          n(this, "_invoke", {
            value: function (e, r) {
              function n() {
                return new t(function (t, n) {
                  a(e, r, t, n);
                });
              }
              return (o = o ? o.then(n, n) : n());
            },
          });
        }
        function k(e, t, r) {
          var n = "suspendedStart";
          return function (a, o) {
            if ("executing" === n)
              throw new Error("Generator is already running");
            if ("completed" === n) {
              if ("throw" === a) throw o;
              return E();
            }
            for (r.method = a, r.arg = o; ; ) {
              var l = r.delegate;
              if (l) {
                var i = w(l, r);
                if (i) {
                  if (i === d) continue;
                  return i;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if ("suspendedStart" === n) throw ((n = "completed"), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              n = "executing";
              var s = c(e, t, r);
              if ("normal" === s.type) {
                if (
                  ((n = r.done ? "completed" : "suspendedYield"), s.arg === d)
                )
                  continue;
                return { value: s.arg, done: r.done };
              }
              "throw" === s.type &&
                ((n = "completed"), (r.method = "throw"), (r.arg = s.arg));
            }
          };
        }
        function w(e, t) {
          var r = t.method,
            n = e.iterator[r];
          if (void 0 === n)
            return (
              (t.delegate = null),
              ("throw" === r &&
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                w(e, t),
                "throw" === t.method)) ||
                ("return" !== r &&
                  ((t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              d
            );
          var a = c(n, e.iterator, t.arg);
          if ("throw" === a.type)
            return (
              (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), d
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                d)
              : o
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              d);
        }
        function N(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function S(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function j(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(N, this),
            this.reset(!0);
        }
        function C(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                a = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: E };
        }
        function E() {
          return { value: void 0, done: !0 };
        }
        return (
          (p.prototype = g),
          n(v, "constructor", { value: g, configurable: !0 }),
          n(g, "constructor", { value: p, configurable: !0 }),
          (p.displayName = s(g, i, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === p || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, g)
                : ((e.__proto__ = g), s(e, i, "GeneratorFunction")),
              (e.prototype = Object.create(v)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          y(x.prototype),
          s(x.prototype, l, function () {
            return this;
          }),
          (e.AsyncIterator = x),
          (e.async = function (t, r, n, a, o) {
            void 0 === o && (o = Promise);
            var l = new x(u(t, r, n, a), o);
            return e.isGeneratorFunction(r)
              ? l
              : l.next().then(function (e) {
                  return e.done ? e.value : l.next();
                });
          }),
          y(v),
          s(v, i, "Generator"),
          s(v, o, function () {
            return this;
          }),
          s(v, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = Object(e),
              r = [];
            for (var n in t) r.push(n);
            return (
              r.reverse(),
              function e() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in t) return (e.value = n), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = C),
          (j.prototype = {
            constructor: j,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(S),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function n(r, n) {
                return (
                  (l.type = "throw"),
                  (l.arg = e),
                  (t.next = r),
                  n && ((t.method = "next"), (t.arg = void 0)),
                  !!n
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  l = o.completion;
                if ("root" === o.tryLoc) return n("end");
                if (o.tryLoc <= this.prev) {
                  var i = r.call(o, "catchLoc"),
                    s = r.call(o, "finallyLoc");
                  if (i && s) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (i) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!s)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var l = o ? o.completion : {};
              return (
                (l.type = e),
                (l.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), d)
                  : this.complete(l)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                d
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), S(r), d;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var a = n.arg;
                    S(r);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: C(e), resultName: t, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                d
              );
            },
          }),
          e
        );
      }
      function Xe(e, t, r, n, a, o, l) {
        try {
          var i = e[o](l),
            s = i.value;
        } catch (u) {
          return void r(u);
        }
        i.done ? t(s) : Promise.resolve(s).then(n, a);
      }
      function Je(e) {
        return function () {
          var t = this,
            r = arguments;
          return new Promise(function (n, a) {
            var o = e.apply(t, r);
            function l(e) {
              Xe(o, n, a, l, i, "next", e);
            }
            function i(e) {
              Xe(o, n, a, l, i, "throw", e);
            }
            l(void 0);
          });
        };
      }
      var Ze = ["crossAxis", "alignment", "allowedPlacements", "autoAlignment"],
        et = [
          "mainAxis",
          "crossAxis",
          "fallbackPlacements",
          "fallbackStrategy",
          "fallbackAxisSideDirection",
          "flipAlignment",
        ],
        tt = ["mainAxis", "crossAxis", "limiter"];
      function rt(e) {
        return e.split("-")[1];
      }
      function nt(e) {
        return "y" === e ? "height" : "width";
      }
      function at(e) {
        return e.split("-")[0];
      }
      function ot(e) {
        return ["top", "bottom"].includes(at(e)) ? "x" : "y";
      }
      function lt(e, t, r) {
        var n,
          a = e.reference,
          o = e.floating,
          l = a.x + a.width / 2 - o.width / 2,
          i = a.y + a.height / 2 - o.height / 2,
          s = ot(t),
          u = nt(s),
          c = a[u] / 2 - o[u] / 2,
          d = "x" === s;
        switch (at(t)) {
          case "top":
            n = { x: l, y: a.y - o.height };
            break;
          case "bottom":
            n = { x: l, y: a.y + a.height };
            break;
          case "right":
            n = { x: a.x + a.width, y: i };
            break;
          case "left":
            n = { x: a.x - o.width, y: i };
            break;
          default:
            n = { x: a.x, y: a.y };
        }
        switch (rt(t)) {
          case "start":
            n[s] -= c * (r && d ? -1 : 1);
            break;
          case "end":
            n[s] += c * (r && d ? -1 : 1);
        }
        return n;
      }
      var it = (function () {
        var e = Je(
          Ye().mark(function e(t, r, n) {
            var a,
              o,
              l,
              i,
              s,
              u,
              c,
              d,
              f,
              p,
              g,
              h,
              m,
              b,
              v,
              y,
              x,
              k,
              w,
              N,
              S,
              j,
              C,
              E,
              P,
              _;
            return Ye().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (a = n.placement),
                      (o = void 0 === a ? "bottom" : a),
                      (l = n.strategy),
                      (i = void 0 === l ? "absolute" : l),
                      (s = n.middleware),
                      (u = void 0 === s ? [] : s),
                      (c = n.platform),
                      (d = u.filter(Boolean)),
                      (e.next = 10),
                      null == c.isRTL ? void 0 : c.isRTL(r)
                    );
                  case 10:
                    return (
                      (f = e.sent),
                      (e.next = 13),
                      c.getElementRects({
                        reference: t,
                        floating: r,
                        strategy: i,
                      })
                    );
                  case 13:
                    (p = e.sent),
                      (g = lt(p, o, f)),
                      (h = g.x),
                      (m = g.y),
                      (b = o),
                      (v = {}),
                      (y = 0),
                      (x = 0);
                  case 21:
                    if (!(x < d.length)) {
                      e.next = 56;
                      break;
                    }
                    return (
                      (w = d[x]),
                      (N = w.name),
                      (S = w.fn),
                      (e.next = 27),
                      S({
                        x: h,
                        y: m,
                        initialPlacement: o,
                        placement: b,
                        strategy: i,
                        middlewareData: v,
                        rects: p,
                        platform: c,
                        elements: { reference: t, floating: r },
                      })
                    );
                  case 27:
                    if (
                      ((j = e.sent),
                      (C = j.x),
                      (E = j.y),
                      (P = j.data),
                      (_ = j.reset),
                      (h = null != C ? C : h),
                      (m = null != E ? E : m),
                      (v = J(J({}, v), {}, Y({}, N, J(J({}, v[N]), P)))),
                      (e.t0 = _ && y <= 50),
                      !e.t0)
                    ) {
                      e.next = 53;
                      break;
                    }
                    if ((y++, (e.t1 = "object" == typeof _), !e.t1)) {
                      e.next = 52;
                      break;
                    }
                    if (
                      (_.placement && (b = _.placement),
                      (e.t2 = _.rects),
                      !e.t2)
                    ) {
                      e.next = 51;
                      break;
                    }
                    if (!0 !== _.rects) {
                      e.next = 49;
                      break;
                    }
                    return (
                      (e.next = 46),
                      c.getElementRects({
                        reference: t,
                        floating: r,
                        strategy: i,
                      })
                    );
                  case 46:
                    (e.t3 = e.sent), (e.next = 50);
                    break;
                  case 49:
                    e.t3 = _.rects;
                  case 50:
                    p = e.t3;
                  case 51:
                    (k = lt(p, b, f)), (h = k.x), (m = k.y);
                  case 52:
                    x = -1;
                  case 53:
                    x++, (e.next = 21);
                    break;
                  case 56:
                    return e.abrupt("return", {
                      x: h,
                      y: m,
                      placement: b,
                      strategy: i,
                      middlewareData: v,
                    });
                  case 57:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t, r, n) {
          return e.apply(this, arguments);
        };
      })();
      function st(e) {
        return "number" != typeof e
          ? (function (e) {
              return J({ top: 0, right: 0, bottom: 0, left: 0 }, e);
            })(e)
          : { top: e, right: e, bottom: e, left: e };
      }
      function ut(e) {
        return J(
          J({}, e),
          {},
          { top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height }
        );
      }
      function ct(e, t) {
        return dt.apply(this, arguments);
      }
      function dt() {
        return (
          (dt = Je(
            Ye().mark(function e(t, r) {
              var n,
                a,
                o,
                l,
                i,
                s,
                u,
                c,
                d,
                f,
                p,
                g,
                h,
                m,
                b,
                v,
                y,
                x,
                k,
                w,
                N,
                S,
                j,
                C;
              return Ye().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        void 0 === r && (r = {}),
                        (a = t.x),
                        (o = t.y),
                        (l = t.platform),
                        (i = t.rects),
                        (s = t.elements),
                        (u = t.strategy),
                        (d = (c = r).boundary),
                        (f = void 0 === d ? "clippingAncestors" : d),
                        (p = c.rootBoundary),
                        (g = void 0 === p ? "viewport" : p),
                        (h = c.elementContext),
                        (m = void 0 === h ? "floating" : h),
                        (b = c.altBoundary),
                        (v = void 0 !== b && b),
                        (y = c.padding),
                        (x = st(void 0 === y ? 0 : y)),
                        (k =
                          s[
                            v
                              ? "floating" === m
                                ? "reference"
                                : "floating"
                              : m
                          ]),
                        (e.t0 = ut),
                        (e.t1 = l),
                        (e.next = 24),
                        null == l.isElement ? void 0 : l.isElement(k)
                      );
                    case 24:
                      if (((e.t3 = n = e.sent), (e.t2 = null == e.t3), e.t2)) {
                        e.next = 28;
                        break;
                      }
                      e.t2 = n;
                    case 28:
                      if (!e.t2) {
                        e.next = 32;
                        break;
                      }
                      (e.t4 = k), (e.next = 38);
                      break;
                    case 32:
                      if (((e.t5 = k.contextElement), e.t5)) {
                        e.next = 37;
                        break;
                      }
                      return (
                        (e.next = 36),
                        null == l.getDocumentElement
                          ? void 0
                          : l.getDocumentElement(s.floating)
                      );
                    case 36:
                      e.t5 = e.sent;
                    case 37:
                      e.t4 = e.t5;
                    case 38:
                      return (
                        (e.t6 = e.t4),
                        (e.t7 = f),
                        (e.t8 = g),
                        (e.t9 = u),
                        (e.t10 = {
                          element: e.t6,
                          boundary: e.t7,
                          rootBoundary: e.t8,
                          strategy: e.t9,
                        }),
                        (e.next = 45),
                        e.t1.getClippingRect.call(e.t1, e.t10)
                      );
                    case 45:
                      return (
                        (e.t11 = e.sent),
                        (w = (0, e.t0)(e.t11)),
                        (N =
                          "floating" === m
                            ? J(J({}, i.floating), {}, { x: a, y: o })
                            : i.reference),
                        (e.next = 50),
                        null == l.getOffsetParent
                          ? void 0
                          : l.getOffsetParent(s.floating)
                      );
                    case 50:
                      return (
                        (S = e.sent),
                        (e.next = 53),
                        null == l.isElement ? void 0 : l.isElement(S)
                      );
                    case 53:
                      if (((e.t13 = e.sent), !e.t13)) {
                        e.next = 58;
                        break;
                      }
                      return (
                        (e.next = 57),
                        null == l.getScale ? void 0 : l.getScale(S)
                      );
                    case 57:
                      e.t13 = e.sent;
                    case 58:
                      if (((e.t12 = e.t13), e.t12)) {
                        e.next = 61;
                        break;
                      }
                      e.t12 = { x: 1, y: 1 };
                    case 61:
                      if (
                        ((j = e.t12),
                        (e.t14 = ut),
                        !l.convertOffsetParentRelativeRectToViewportRelativeRect)
                      ) {
                        e.next = 69;
                        break;
                      }
                      return (
                        (e.next = 66),
                        l.convertOffsetParentRelativeRectToViewportRelativeRect(
                          { rect: N, offsetParent: S, strategy: u }
                        )
                      );
                    case 66:
                      (e.t15 = e.sent), (e.next = 70);
                      break;
                    case 69:
                      e.t15 = N;
                    case 70:
                      return (
                        (e.t16 = e.t15),
                        (C = (0, e.t14)(e.t16)),
                        e.abrupt("return", {
                          top: (w.top - C.top + x.top) / j.y,
                          bottom: (C.bottom - w.bottom + x.bottom) / j.y,
                          left: (w.left - C.left + x.left) / j.x,
                          right: (C.right - w.right + x.right) / j.x,
                        })
                      );
                    case 73:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )),
          dt.apply(this, arguments)
        );
      }
      var ft = Math.min,
        pt = Math.max;
      function gt(e, t, r) {
        return pt(e, ft(t, r));
      }
      var ht = function (e) {
          return {
            name: "arrow",
            options: e,
            fn: function (t) {
              return Je(
                Ye().mark(function r() {
                  var n,
                    a,
                    o,
                    l,
                    i,
                    s,
                    u,
                    c,
                    d,
                    f,
                    p,
                    g,
                    h,
                    m,
                    b,
                    v,
                    y,
                    x,
                    k,
                    w,
                    N,
                    S,
                    j,
                    C,
                    E,
                    P,
                    _,
                    z,
                    T,
                    L,
                    M;
                  return Ye().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          if (
                            ((l = (o = e || {}).element),
                            (i = o.padding),
                            (s = void 0 === i ? 0 : i),
                            (u = t.x),
                            (c = t.y),
                            (d = t.placement),
                            (f = t.rects),
                            (p = t.platform),
                            (g = t.elements),
                            null != l)
                          ) {
                            r.next = 3;
                            break;
                          }
                          return r.abrupt("return", {});
                        case 3:
                          return (
                            (h = st(s)),
                            (m = { x: u, y: c }),
                            (b = ot(d)),
                            (v = nt(b)),
                            (r.next = 9),
                            p.getDimensions(l)
                          );
                        case 9:
                          return (
                            (y = r.sent),
                            (k = (x = "y" === b) ? "top" : "left"),
                            (w = x ? "bottom" : "right"),
                            (N = x ? "clientHeight" : "clientWidth"),
                            (S =
                              f.reference[v] +
                              f.reference[b] -
                              m[b] -
                              f.floating[v]),
                            (j = m[b] - f.reference[b]),
                            (r.next = 18),
                            null == p.getOffsetParent
                              ? void 0
                              : p.getOffsetParent(l)
                          );
                        case 18:
                          if (
                            ((C = r.sent),
                            (E = C ? C[N] : 0),
                            (r.t0 = E),
                            !r.t0)
                          ) {
                            r.next = 25;
                            break;
                          }
                          return (
                            (r.next = 24),
                            null == p.isElement ? void 0 : p.isElement(C)
                          );
                        case 24:
                          r.t0 = r.sent;
                        case 25:
                          if (((r.t1 = r.t0), r.t1)) {
                            r.next = 28;
                            break;
                          }
                          E = g.floating[N] || f.floating[v];
                        case 28:
                          return (
                            (P = S / 2 - j / 2),
                            (_ = h[k]),
                            (z = E - y[v] - h[w]),
                            (T = E / 2 - y[v] / 2 + P),
                            (L = gt(_, T, z)),
                            (M =
                              null != rt(d) &&
                              T != L &&
                              f.reference[v] / 2 -
                                (T < _ ? h[k] : h[w]) -
                                y[v] / 2 <
                                0),
                            r.abrupt(
                              "return",
                              (Y(
                                (a = {}),
                                b,
                                m[b] - (M ? (T < _ ? _ - T : z - T) : 0)
                              ),
                              Y(
                                a,
                                "data",
                                (Y((n = {}), b, L),
                                Y(n, "centerOffset", T - L),
                                n)
                              ),
                              a)
                            )
                          );
                        case 30:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                })
              )();
            },
          };
        },
        mt = ["top", "right", "bottom", "left"],
        bt = mt.reduce(function (e, t) {
          return e.concat(t, t + "-start", t + "-end");
        }, []),
        vt = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function yt(e) {
        return e.replace(/left|right|bottom|top/g, function (e) {
          return vt[e];
        });
      }
      function xt(e, t, r) {
        void 0 === r && (r = !1);
        var n = rt(e),
          a = ot(e),
          o = nt(a),
          l =
            "x" === a
              ? n === (r ? "end" : "start")
                ? "right"
                : "left"
              : "start" === n
              ? "bottom"
              : "top";
        return (
          t.reference[o] > t.floating[o] && (l = yt(l)),
          { main: l, cross: yt(l) }
        );
      }
      var kt = { start: "end", end: "start" };
      function wt(e) {
        return e.replace(/start|end/g, function (e) {
          return kt[e];
        });
      }
      function Nt(e) {
        return "x" === e ? "y" : "x";
      }
      var St;
      function jt(e) {
        var t;
        return (
          (null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
        );
      }
      function Ct(e) {
        return jt(e).getComputedStyle(e);
      }
      function Et(e) {
        return e instanceof jt(e).Node;
      }
      function Pt(e) {
        return Et(e) ? (e.nodeName || "").toLowerCase() : "";
      }
      function _t() {
        if (St) return St;
        var e = navigator.userAgentData;
        return e && Array.isArray(e.brands)
          ? (St = e.brands
              .map(function (e) {
                return e.brand + "/" + e.version;
              })
              .join(" "))
          : navigator.userAgent;
      }
      function zt(e) {
        return e instanceof jt(e).HTMLElement;
      }
      function Tt(e) {
        return e instanceof jt(e).Element;
      }
      function Lt(e) {
        return (
          "undefined" != typeof ShadowRoot &&
          (e instanceof jt(e).ShadowRoot || e instanceof ShadowRoot)
        );
      }
      function Mt(e) {
        var t = Ct(e),
          r = t.overflow,
          n = t.overflowX,
          a = t.overflowY,
          o = t.display;
        return (
          /auto|scroll|overlay|hidden|clip/.test(r + a + n) &&
          !["inline", "contents"].includes(o)
        );
      }
      function Ot(e) {
        return ["table", "td", "th"].includes(Pt(e));
      }
      function Rt(e) {
        var t = /firefox/i.test(_t()),
          r = Ct(e),
          n = r.backdropFilter || r.WebkitBackdropFilter;
        return (
          "none" !== r.transform ||
          "none" !== r.perspective ||
          (!!n && "none" !== n) ||
          (t && "filter" === r.willChange) ||
          (t && !!r.filter && "none" !== r.filter) ||
          ["transform", "perspective"].some(function (e) {
            return r.willChange.includes(e);
          }) ||
          ["paint", "layout", "strict", "content"].some(function (e) {
            var t = r.contain;
            return null != t && t.includes(e);
          })
        );
      }
      function It() {
        return /^((?!chrome|android).)*safari/i.test(_t());
      }
      function Dt(e) {
        return ["html", "body", "#document"].includes(Pt(e));
      }
      var Ft = Math.min,
        At = Math.max,
        Bt = Math.round;
      function Ht(e) {
        var t = Ct(e),
          r = parseFloat(t.width),
          n = parseFloat(t.height),
          a = zt(e),
          o = a ? e.offsetWidth : r,
          l = a ? e.offsetHeight : n,
          i = Bt(r) !== o || Bt(n) !== l;
        return i && ((r = o), (n = l)), { width: r, height: n, fallback: i };
      }
      function Ut(e) {
        return Tt(e) ? e : e.contextElement;
      }
      var Vt = { x: 1, y: 1 };
      function Wt(e) {
        var t = Ut(e);
        if (!zt(t)) return Vt;
        var r = t.getBoundingClientRect(),
          n = Ht(t),
          a = n.width,
          o = n.height,
          l = n.fallback,
          i = (l ? Bt(r.width) : r.width) / a,
          s = (l ? Bt(r.height) : r.height) / o;
        return (
          (i && Number.isFinite(i)) || (i = 1),
          (s && Number.isFinite(s)) || (s = 1),
          { x: i, y: s }
        );
      }
      function $t(e, t, r, n) {
        var a, o;
        void 0 === t && (t = !1), void 0 === r && (r = !1);
        var l = e.getBoundingClientRect(),
          i = Ut(e),
          s = Vt;
        t && (n ? Tt(n) && (s = Wt(n)) : (s = Wt(e)));
        var u = i ? jt(i) : window,
          c = It() && r,
          d =
            (l.left +
              ((c &&
                (null == (a = u.visualViewport) ? void 0 : a.offsetLeft)) ||
                0)) /
            s.x,
          f =
            (l.top +
              ((c && (null == (o = u.visualViewport) ? void 0 : o.offsetTop)) ||
                0)) /
            s.y,
          p = l.width / s.x,
          g = l.height / s.y;
        if (i)
          for (
            var h = jt(i), m = n && Tt(n) ? jt(n) : n, b = h.frameElement;
            b && n && m !== h;

          ) {
            var v = Wt(b),
              y = b.getBoundingClientRect(),
              x = getComputedStyle(b);
            (y.x += (b.clientLeft + parseFloat(x.paddingLeft)) * v.x),
              (y.y += (b.clientTop + parseFloat(x.paddingTop)) * v.y),
              (d *= v.x),
              (f *= v.y),
              (p *= v.x),
              (g *= v.y),
              (d += y.x),
              (f += y.y),
              (b = jt(b).frameElement);
          }
        return ut({ width: p, height: g, x: d, y: f });
      }
      function Kt(e) {
        return ((Et(e) ? e.ownerDocument : e.document) || window.document)
          .documentElement;
      }
      function Qt(e) {
        return Tt(e)
          ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
          : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
      }
      function qt(e) {
        return $t(Kt(e)).left + Qt(e).scrollLeft;
      }
      function Gt(e) {
        if ("html" === Pt(e)) return e;
        var t = e.assignedSlot || e.parentNode || (Lt(e) && e.host) || Kt(e);
        return Lt(t) ? t.host : t;
      }
      function Yt(e) {
        var t = Gt(e);
        return Dt(t) ? t.ownerDocument.body : zt(t) && Mt(t) ? t : Yt(t);
      }
      function Xt(e, t) {
        var r;
        void 0 === t && (t = []);
        var n = Yt(e),
          a = n === (null == (r = e.ownerDocument) ? void 0 : r.body),
          o = jt(n);
        return a
          ? t.concat(o, o.visualViewport || [], Mt(n) ? n : [])
          : t.concat(n, Xt(n));
      }
      function Jt(e, t, r) {
        var n;
        if ("viewport" === t)
          n = (function (e, t) {
            var r = jt(e),
              n = Kt(e),
              a = r.visualViewport,
              o = n.clientWidth,
              l = n.clientHeight,
              i = 0,
              s = 0;
            if (a) {
              (o = a.width), (l = a.height);
              var u = It();
              (!u || (u && "fixed" === t)) &&
                ((i = a.offsetLeft), (s = a.offsetTop));
            }
            return { width: o, height: l, x: i, y: s };
          })(e, r);
        else if ("document" === t)
          n = (function (e) {
            var t = Kt(e),
              r = Qt(e),
              n = e.ownerDocument.body,
              a = At(
                t.scrollWidth,
                t.clientWidth,
                n.scrollWidth,
                n.clientWidth
              ),
              o = At(
                t.scrollHeight,
                t.clientHeight,
                n.scrollHeight,
                n.clientHeight
              ),
              l = -r.scrollLeft + qt(e),
              i = -r.scrollTop;
            return (
              "rtl" === Ct(n).direction &&
                (l += At(t.clientWidth, n.clientWidth) - a),
              { width: a, height: o, x: l, y: i }
            );
          })(Kt(e));
        else if (Tt(t))
          n = (function (e, t) {
            var r = $t(e, !0, "fixed" === t),
              n = r.top + e.clientTop,
              a = r.left + e.clientLeft,
              o = zt(e) ? Wt(e) : { x: 1, y: 1 };
            return {
              width: e.clientWidth * o.x,
              height: e.clientHeight * o.y,
              x: a * o.x,
              y: n * o.y,
            };
          })(t, r);
        else {
          var a = J({}, t);
          if (It()) {
            var o,
              l,
              i = jt(e);
            (a.x -=
              (null == (o = i.visualViewport) ? void 0 : o.offsetLeft) || 0),
              (a.y -=
                (null == (l = i.visualViewport) ? void 0 : l.offsetTop) || 0);
          }
          n = a;
        }
        return ut(n);
      }
      function Zt(e, t) {
        return zt(e) && "fixed" !== Ct(e).position
          ? t
            ? t(e)
            : e.offsetParent
          : null;
      }
      function er(e, t) {
        var r = jt(e);
        if (!zt(e)) return r;
        for (var n = Zt(e, t); n && Ot(n) && "static" === Ct(n).position; )
          n = Zt(n, t);
        return n &&
          ("html" === Pt(n) ||
            ("body" === Pt(n) && "static" === Ct(n).position && !Rt(n)))
          ? r
          : n ||
              (function (e) {
                for (var t = Gt(e); zt(t) && !Dt(t); ) {
                  if (Rt(t)) return t;
                  t = Gt(t);
                }
                return null;
              })(e) ||
              r;
      }
      function tr(e, t, r) {
        var n = zt(t),
          a = Kt(t),
          o = $t(e, !0, "fixed" === r, t),
          l = { scrollLeft: 0, scrollTop: 0 },
          i = { x: 0, y: 0 };
        if (n || (!n && "fixed" !== r))
          if ((("body" !== Pt(t) || Mt(a)) && (l = Qt(t)), zt(t))) {
            var s = $t(t, !0);
            (i.x = s.x + t.clientLeft), (i.y = s.y + t.clientTop);
          } else a && (i.x = qt(a));
        return {
          x: o.left + l.scrollLeft - i.x,
          y: o.top + l.scrollTop - i.y,
          width: o.width,
          height: o.height,
        };
      }
      var rr = {
        getClippingRect: function (e) {
          var t = e.element,
            r = e.boundary,
            n = e.rootBoundary,
            a = e.strategy,
            o =
              "clippingAncestors" === r
                ? (function (e, t) {
                    var r = t.get(e);
                    if (r) return r;
                    for (
                      var n = Xt(e).filter(function (e) {
                          return Tt(e) && "body" !== Pt(e);
                        }),
                        a = null,
                        o = "fixed" === Ct(e).position,
                        l = o ? Gt(e) : e;
                      Tt(l) && !Dt(l);

                    ) {
                      var i = Ct(l),
                        s = Rt(l);
                      "fixed" === i.position
                        ? (a = null)
                        : (
                            o
                              ? s || a
                              : s ||
                                "static" !== i.position ||
                                !a ||
                                !["absolute", "fixed"].includes(a.position)
                          )
                        ? (a = i)
                        : (n = n.filter(function (e) {
                            return e !== l;
                          })),
                        (l = Gt(l));
                    }
                    return t.set(e, n), n;
                  })(t, this._c)
                : [].concat(r),
            l = [].concat(Ge(o), [n]),
            i = l[0],
            s = l.reduce(function (e, r) {
              var n = Jt(t, r, a);
              return (
                (e.top = At(n.top, e.top)),
                (e.right = Ft(n.right, e.right)),
                (e.bottom = Ft(n.bottom, e.bottom)),
                (e.left = At(n.left, e.left)),
                e
              );
            }, Jt(t, i, a));
          return {
            width: s.right - s.left,
            height: s.bottom - s.top,
            x: s.left,
            y: s.top,
          };
        },
        convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
          var t = e.rect,
            r = e.offsetParent,
            n = e.strategy,
            a = zt(r),
            o = Kt(r);
          if (r === o) return t;
          var l = { scrollLeft: 0, scrollTop: 0 },
            i = { x: 1, y: 1 },
            s = { x: 0, y: 0 };
          if (
            (a || (!a && "fixed" !== n)) &&
            (("body" !== Pt(r) || Mt(o)) && (l = Qt(r)), zt(r))
          ) {
            var u = $t(r);
            (i = Wt(r)), (s.x = u.x + r.clientLeft), (s.y = u.y + r.clientTop);
          }
          return {
            width: t.width * i.x,
            height: t.height * i.y,
            x: t.x * i.x - l.scrollLeft * i.x + s.x,
            y: t.y * i.y - l.scrollTop * i.y + s.y,
          };
        },
        isElement: Tt,
        getDimensions: function (e) {
          return Ht(e);
        },
        getOffsetParent: er,
        getDocumentElement: Kt,
        getScale: Wt,
        getElementRects: function (e) {
          var t = this;
          return Je(
            Ye().mark(function r() {
              var n, a, o, l, i;
              return Ye().wrap(function (r) {
                for (;;)
                  switch ((r.prev = r.next)) {
                    case 0:
                      return (
                        (n = e.reference),
                        (a = e.floating),
                        (o = e.strategy),
                        (l = t.getOffsetParent || er),
                        (i = t.getDimensions),
                        (r.t0 = tr),
                        (r.t1 = n),
                        (r.next = 6),
                        l(a)
                      );
                    case 6:
                      return (
                        (r.t2 = r.sent),
                        (r.t3 = o),
                        (r.t4 = (0, r.t0)(r.t1, r.t2, r.t3)),
                        (r.t5 = J),
                        (r.t6 = { x: 0, y: 0 }),
                        (r.next = 13),
                        i(a)
                      );
                    case 13:
                      return (
                        (r.t7 = r.sent),
                        (r.t8 = (0, r.t5)(r.t6, r.t7)),
                        r.abrupt("return", { reference: r.t4, floating: r.t8 })
                      );
                    case 16:
                    case "end":
                      return r.stop();
                  }
              }, r);
            })
          )();
        },
        getClientRects: function (e) {
          return Array.from(e.getClientRects());
        },
        isRTL: function (e) {
          return "rtl" === Ct(e).direction;
        },
      };
      var nr = function (e, t, r) {
          var n = new Map(),
            a = J({ platform: rr }, r),
            o = J(J({}, a.platform), {}, { _c: n });
          return it(e, t, J(J({}, a), {}, { platform: o }));
        },
        ar = r(164),
        or = function (e) {
          var t = e.element,
            r = e.padding;
          return {
            name: "arrow",
            options: e,
            fn: function (e) {
              return (
                (n = t),
                Object.prototype.hasOwnProperty.call(n, "current")
                  ? null != t.current
                    ? ht({ element: t.current, padding: r }).fn(e)
                    : {}
                  : t
                  ? ht({ element: t, padding: r }).fn(e)
                  : {}
              );
              var n;
            },
          };
        },
        lr = "undefined" !== typeof document ? e.useLayoutEffect : e.useEffect;
      function ir(e, t) {
        if (e === t) return !0;
        if (typeof e !== typeof t) return !1;
        if ("function" === typeof e && e.toString() === t.toString()) return !0;
        var r, n, a;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if ((r = e.length) != t.length) return !1;
            for (n = r; 0 !== n--; ) if (!ir(e[n], t[n])) return !1;
            return !0;
          }
          if ((r = (a = Object.keys(e)).length) !== Object.keys(t).length)
            return !1;
          for (n = r; 0 !== n--; )
            if (!Object.prototype.hasOwnProperty.call(t, a[n])) return !1;
          for (n = r; 0 !== n--; ) {
            var o = a[n];
            if (("_owner" !== o || !e.$$typeof) && !ir(e[o], t[o])) return !1;
          }
          return !0;
        }
        return e !== e && t !== t;
      }
      function sr(t) {
        var r = e.useRef(t);
        return (
          lr(function () {
            r.current = t;
          }),
          r
        );
      }
      var ur =
          "undefined" !== typeof document ? e.useLayoutEffect : e.useEffect,
        cr = !1,
        dr = 0,
        fr = function () {
          return "floating-ui-" + dr++;
        };
      var pr =
        t["useId".toString()] ||
        function () {
          var t = l(
              e.useState(function () {
                return cr ? fr() : void 0;
              }),
              2
            ),
            r = t[0],
            n = t[1];
          return (
            ur(function () {
              null == r && n(fr());
            }, []),
            e.useEffect(function () {
              cr || (cr = !0);
            }, []),
            r
          );
        };
      function gr() {
        var e = new Map();
        return {
          emit: function (t, r) {
            var n;
            null == (n = e.get(t)) ||
              n.forEach(function (e) {
                return e(r);
              });
          },
          on: function (t, r) {
            e.set(t, [].concat(Ge(e.get(t) || []), [r]));
          },
          off: function (t, r) {
            e.set(
              t,
              (e.get(t) || []).filter(function (e) {
                return e !== r;
              })
            );
          },
        };
      }
      var hr = e.createContext(null),
        mr = e.createContext(null),
        br = function () {
          var t;
          return (null == (t = e.useContext(hr)) ? void 0 : t.id) || null;
        },
        vr = function () {
          return e.useContext(mr);
        };
      function yr(e) {
        return (null == e ? void 0 : e.ownerDocument) || document;
      }
      function xr(e) {
        return yr(e).defaultView || window;
      }
      function kr(e) {
        return !!e && e instanceof xr(e).Element;
      }
      function wr(e) {
        return !!e && e instanceof xr(e).HTMLElement;
      }
      function Nr(e, t) {
        var r = ["mouse", "pen"];
        return t || r.push("", void 0), r.includes(e);
      }
      function Sr(t) {
        var r = (0, e.useRef)(t);
        return (
          ur(function () {
            r.current = t;
          }),
          r
        );
      }
      var jr = "data-floating-ui-safe-polygon";
      function Cr(e, t, r) {
        return r && !Nr(r)
          ? 0
          : "number" === typeof e
          ? e
          : null == e
          ? void 0
          : e[t];
      }
      var Er = function (t, r) {
        var n = void 0 === r ? {} : r,
          a = n.enabled,
          o = void 0 === a || a,
          l = n.delay,
          i = void 0 === l ? 0 : l,
          s = n.handleClose,
          u = void 0 === s ? null : s,
          c = n.mouseOnly,
          d = void 0 !== c && c,
          f = n.restMs,
          p = void 0 === f ? 0 : f,
          g = n.move,
          h = void 0 === g || g,
          m = t.open,
          b = t.onOpenChange,
          v = t.dataRef,
          y = t.events,
          x = t.elements,
          k = x.domReference,
          w = x.floating,
          N = t.refs,
          S = vr(),
          j = br(),
          C = Sr(u),
          E = Sr(i),
          P = e.useRef(),
          _ = e.useRef(),
          z = e.useRef(),
          T = e.useRef(),
          L = e.useRef(!0),
          M = e.useRef(!1),
          O = e.useRef(function () {}),
          R = e.useCallback(
            function () {
              var e,
                t = null == (e = v.current.openEvent) ? void 0 : e.type;
              return (
                (null == t ? void 0 : t.includes("mouse")) && "mousedown" !== t
              );
            },
            [v]
          );
        e.useEffect(
          function () {
            if (o)
              return (
                y.on("dismiss", e),
                function () {
                  y.off("dismiss", e);
                }
              );
            function e() {
              clearTimeout(_.current),
                clearTimeout(T.current),
                (L.current = !0);
            }
          },
          [o, y]
        ),
          e.useEffect(
            function () {
              if (o && C.current && m) {
                var e = yr(w).documentElement;
                return (
                  e.addEventListener("mouseleave", t),
                  function () {
                    e.removeEventListener("mouseleave", t);
                  }
                );
              }
              function t() {
                R() && b(!1);
              }
            },
            [w, m, b, o, C, v, R]
          );
        var I = e.useCallback(
            function (e) {
              void 0 === e && (e = !0);
              var t = Cr(E.current, "close", P.current);
              t && !z.current
                ? (clearTimeout(_.current),
                  (_.current = setTimeout(function () {
                    return b(!1);
                  }, t)))
                : e && (clearTimeout(_.current), b(!1));
            },
            [E, b]
          ),
          D = e.useCallback(function () {
            O.current(), (z.current = void 0);
          }, []),
          F = e.useCallback(
            function () {
              if (M.current) {
                var e = yr(N.floating.current).body;
                (e.style.pointerEvents = ""),
                  e.removeAttribute(jr),
                  (M.current = !1);
              }
            },
            [N]
          );
        return (
          e.useEffect(
            function () {
              if (o && kr(k)) {
                var e = k;
                return (
                  m && e.addEventListener("mouseleave", l),
                  null == w || w.addEventListener("mouseleave", l),
                  h && e.addEventListener("mousemove", n, { once: !0 }),
                  e.addEventListener("mouseenter", n),
                  e.addEventListener("mouseleave", a),
                  function () {
                    m && e.removeEventListener("mouseleave", l),
                      null == w || w.removeEventListener("mouseleave", l),
                      h && e.removeEventListener("mousemove", n),
                      e.removeEventListener("mouseenter", n),
                      e.removeEventListener("mouseleave", a);
                  }
                );
              }
              function r() {
                return (
                  !!v.current.openEvent &&
                  ["click", "mousedown"].includes(v.current.openEvent.type)
                );
              }
              function n(e) {
                if (
                  (clearTimeout(_.current),
                  (L.current = !1),
                  !(
                    (d && !Nr(P.current)) ||
                    (p > 0 && 0 === Cr(E.current, "open"))
                  ))
                ) {
                  v.current.openEvent = e;
                  var t = Cr(E.current, "open", P.current);
                  t
                    ? (_.current = setTimeout(function () {
                        b(!0);
                      }, t))
                    : b(!0);
                }
              }
              function a(e) {
                if (!r()) {
                  O.current();
                  var n = yr(w);
                  if ((clearTimeout(T.current), C.current)) {
                    m || clearTimeout(_.current),
                      (z.current = C.current(
                        J(
                          J({}, t),
                          {},
                          {
                            tree: S,
                            x: e.clientX,
                            y: e.clientY,
                            onClose: function () {
                              F(), D(), I();
                            },
                          }
                        )
                      ));
                    var a = z.current;
                    return (
                      n.addEventListener("mousemove", a),
                      void (O.current = function () {
                        n.removeEventListener("mousemove", a);
                      })
                    );
                  }
                  I();
                }
              }
              function l(e) {
                r() ||
                  null == C.current ||
                  C.current(
                    J(
                      J({}, t),
                      {},
                      {
                        tree: S,
                        x: e.clientX,
                        y: e.clientY,
                        onClose: function () {
                          F(), D(), I();
                        },
                      }
                    )
                  )(e);
              }
            },
            [k, w, o, t, d, p, h, I, D, F, b, m, S, E, C, v]
          ),
          ur(
            function () {
              var e;
              if (
                o &&
                m &&
                null != (e = C.current) &&
                e.__options.blockPointerEvents &&
                R()
              ) {
                var t = yr(w).body;
                if (
                  (t.setAttribute(jr, ""),
                  (t.style.pointerEvents = "none"),
                  (M.current = !0),
                  kr(k) && w)
                ) {
                  var r,
                    n,
                    a = k,
                    l =
                      null == S ||
                      null ==
                        (r = S.nodesRef.current.find(function (e) {
                          return e.id === j;
                        })) ||
                      null == (n = r.context)
                        ? void 0
                        : n.elements.floating;
                  return (
                    l && (l.style.pointerEvents = ""),
                    (a.style.pointerEvents = "auto"),
                    (w.style.pointerEvents = "auto"),
                    function () {
                      (a.style.pointerEvents = ""),
                        (w.style.pointerEvents = "");
                    }
                  );
                }
              }
            },
            [o, m, j, w, k, S, C, v, R]
          ),
          ur(
            function () {
              m || ((P.current = void 0), D(), F());
            },
            [m, D, F]
          ),
          e.useEffect(
            function () {
              return function () {
                D(), clearTimeout(_.current), clearTimeout(T.current), F();
              };
            },
            [o, D, F]
          ),
          e.useMemo(
            function () {
              if (!o) return {};
              function e(e) {
                P.current = e.pointerType;
              }
              return {
                reference: {
                  onPointerDown: e,
                  onPointerEnter: e,
                  onMouseMove: function () {
                    m ||
                      0 === p ||
                      (clearTimeout(T.current),
                      (T.current = setTimeout(function () {
                        L.current || b(!0);
                      }, p)));
                  },
                },
                floating: {
                  onMouseEnter: function () {
                    clearTimeout(_.current);
                  },
                  onMouseLeave: function () {
                    y.emit("dismiss", {
                      type: "mouseLeave",
                      data: { returnFocus: !1 },
                    }),
                      I(!1);
                  },
                },
              };
            },
            [y, o, p, m, b, I]
          )
        );
      };
      function Pr(e) {
        for (
          var t = e.activeElement;
          null !=
          (null == (r = t) || null == (n = r.shadowRoot)
            ? void 0
            : n.activeElement);

        ) {
          var r, n;
          t = t.shadowRoot.activeElement;
        }
        return t;
      }
      function _r(e, t) {
        if (!e || !t) return !1;
        var r,
          n = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (
          n &&
          ((r = n),
          "undefined" !== typeof ShadowRoot &&
            (r instanceof xr(r).ShadowRoot || r instanceof ShadowRoot))
        ) {
          var a = t;
          do {
            if (a && e === a) return !0;
            a = a.parentNode || a.host;
          } while (a);
        }
        return !1;
      }
      function zr(e, t) {
        for (
          var r =
              e.filter(function (e) {
                var r;
                return (
                  e.parentId === t &&
                  (null == (r = e.context) ? void 0 : r.open)
                );
              }) || [],
            n = r;
          n.length;

        )
          (n =
            e.filter(function (e) {
              var t;
              return null == (t = n)
                ? void 0
                : t.some(function (t) {
                    var r;
                    return (
                      e.parentId === t.id &&
                      (null == (r = e.context) ? void 0 : r.open)
                    );
                  });
            }) || []),
            (r = r.concat(n));
        return r;
      }
      function Tr(e) {
        return "composedPath" in e ? e.composedPath()[0] : e.target;
      }
      var Lr =
        "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
      function Mr(e) {
        return wr(e) && e.matches(Lr);
      }
      var Or =
        t["useInsertionEffect".toString()] ||
        function (e) {
          return e();
        };
      function Rr(t) {
        var r = e.useRef(function () {
          0;
        });
        return (
          Or(function () {
            r.current = t;
          }),
          e.useCallback(function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return null == r.current ? void 0 : r.current.apply(r, t);
          }, [])
        );
      }
      function Ir(e) {
        return wr(e.target) && "BUTTON" === e.target.tagName;
      }
      function Dr(e) {
        return Mr(e);
      }
      var Fr = function (t, r) {
        var n = t.open,
          a = t.onOpenChange,
          o = t.dataRef,
          l = t.elements.domReference,
          i = void 0 === r ? {} : r,
          s = i.enabled,
          u = void 0 === s || s,
          c = i.event,
          d = void 0 === c ? "click" : c,
          f = i.toggle,
          p = void 0 === f || f,
          g = i.ignoreMouse,
          h = void 0 !== g && g,
          m = i.keyboardHandlers,
          b = void 0 === m || m,
          v = e.useRef();
        return e.useMemo(
          function () {
            return u
              ? {
                  reference: {
                    onPointerDown: function (e) {
                      v.current = e.pointerType;
                    },
                    onMouseDown: function (e) {
                      0 === e.button &&
                        ((Nr(v.current, !0) && h) ||
                          ("click" !== d &&
                            (n
                              ? !p ||
                                (o.current.openEvent &&
                                  "mousedown" !== o.current.openEvent.type) ||
                                a(!1)
                              : (e.preventDefault(), a(!0)),
                            (o.current.openEvent = e.nativeEvent))));
                    },
                    onClick: function (e) {
                      o.current.__syncReturnFocus ||
                        ("mousedown" === d && v.current
                          ? (v.current = void 0)
                          : (Nr(v.current, !0) && h) ||
                            (n
                              ? !p ||
                                (o.current.openEvent &&
                                  "click" !== o.current.openEvent.type) ||
                                a(!1)
                              : a(!0),
                            (o.current.openEvent = e.nativeEvent)));
                    },
                    onKeyDown: function (e) {
                      (v.current = void 0),
                        b &&
                          (Ir(e) ||
                            (" " !== e.key || Dr(l) || e.preventDefault(),
                            "Enter" === e.key && (n ? p && a(!1) : a(!0))));
                    },
                    onKeyUp: function (e) {
                      b &&
                        (Ir(e) ||
                          Dr(l) ||
                          (" " === e.key && (n ? p && a(!1) : a(!0))));
                    },
                  },
                }
              : {};
          },
          [u, o, d, h, b, l, p, n, a]
        );
      };
      function Ar(e, t) {
        if (null == t) return !1;
        if ("composedPath" in e) return e.composedPath().includes(t);
        var r = e;
        return null != r.target && t.contains(r.target);
      }
      var Br = function (t, r) {
        var n = t.open,
          a = t.onOpenChange,
          o = t.dataRef,
          l = t.events,
          i = t.refs,
          s = t.elements,
          u = s.floating,
          c = s.domReference,
          d = void 0 === r ? {} : r,
          f = d.enabled,
          p = void 0 === f || f,
          g = d.keyboardOnly,
          h = void 0 === g || g,
          m = e.useRef(""),
          b = e.useRef(!1),
          v = e.useRef();
        return (
          e.useEffect(
            function () {
              if (p) {
                var e = yr(u).defaultView || window;
                return (
                  e.addEventListener("blur", t),
                  function () {
                    e.removeEventListener("blur", t);
                  }
                );
              }
              function t() {
                !n && wr(c) && c === Pr(yr(c)) && (b.current = !0);
              }
            },
            [u, c, n, p]
          ),
          e.useEffect(
            function () {
              if (p)
                return (
                  l.on("dismiss", e),
                  function () {
                    l.off("dismiss", e);
                  }
                );
              function e(e) {
                ("referencePress" !== e.type && "escapeKey" !== e.type) ||
                  (b.current = !0);
              }
            },
            [l, p]
          ),
          e.useEffect(function () {
            return function () {
              clearTimeout(v.current);
            };
          }, []),
          e.useMemo(
            function () {
              return p
                ? {
                    reference: {
                      onPointerDown: function (e) {
                        var t = e.pointerType;
                        (m.current = t), (b.current = !(!t || !h));
                      },
                      onMouseLeave: function () {
                        b.current = !1;
                      },
                      onFocus: function (e) {
                        var t;
                        b.current ||
                          ("focus" === e.type &&
                            "mousedown" ===
                              (null == (t = o.current.openEvent)
                                ? void 0
                                : t.type) &&
                            o.current.openEvent &&
                            Ar(o.current.openEvent, c)) ||
                          ((o.current.openEvent = e.nativeEvent), a(!0));
                      },
                      onBlur: function (e) {
                        b.current = !1;
                        var t = e.relatedTarget,
                          r =
                            kr(t) &&
                            t.hasAttribute("data-floating-ui-focus-guard") &&
                            "outside" === t.getAttribute("data-type");
                        v.current = setTimeout(function () {
                          _r(i.floating.current, t) || _r(c, t) || r || a(!1);
                        });
                      },
                    },
                  }
                : {};
            },
            [p, h, c, i, o, a]
          )
        );
      };
      var Hr = function (t, r) {
        var n = t.open,
          a = void 0 === r ? {} : r,
          o = a.enabled,
          l = void 0 === o || o,
          i = a.role,
          s = void 0 === i ? "dialog" : i,
          u = pr(),
          c = pr();
        return e.useMemo(
          function () {
            var e = { id: u, role: s };
            return l
              ? "tooltip" === s
                ? {
                    reference: { "aria-describedby": n ? u : void 0 },
                    floating: e,
                  }
                : {
                    reference: J(
                      J(
                        {
                          "aria-expanded": n ? "true" : "false",
                          "aria-haspopup": "alertdialog" === s ? "dialog" : s,
                          "aria-controls": n ? u : void 0,
                        },
                        "listbox" === s && { role: "combobox" }
                      ),
                      "menu" === s && { id: c }
                    ),
                    floating: J(
                      J({}, e),
                      "menu" === s && { "aria-labelledby": c }
                    ),
                  }
              : {};
          },
          [l, s, n, u, c]
        );
      };
      function Ur(e) {
        var t,
          r = void 0 === e ? {} : e,
          n = r.restMs,
          a = void 0 === n ? 0 : n,
          o = r.buffer,
          i = void 0 === o ? 0.5 : o,
          s = r.blockPointerEvents,
          u = !1,
          c = !1,
          d = function (e) {
            var r = e.x,
              n = e.y,
              o = e.placement,
              s = e.elements,
              d = e.onClose,
              f = e.nodeId,
              p = e.tree;
            return function (e) {
              function g() {
                clearTimeout(t), d();
              }
              if (
                (clearTimeout(t),
                s.domReference &&
                  s.floating &&
                  null != o &&
                  null != r &&
                  null != n)
              ) {
                var h = e.clientX,
                  m = e.clientY,
                  b = [h, m],
                  v = Tr(e),
                  y = "mouseleave" === e.type,
                  x = _r(s.floating, v),
                  k = _r(s.domReference, v),
                  w = s.domReference.getBoundingClientRect(),
                  N = s.floating.getBoundingClientRect(),
                  S = o.split("-")[0],
                  j = r > N.right - N.width / 2,
                  C = n > N.bottom - N.height / 2,
                  E = (function (e, t) {
                    return (
                      e[0] >= t.x &&
                      e[0] <= t.x + t.width &&
                      e[1] >= t.y &&
                      e[1] <= t.y + t.height
                    );
                  })(b, w);
                if (!x || ((c = !0), y))
                  if ((k && (c = !1), !k || y)) {
                    if (
                      !(
                        y &&
                        kr(e.relatedTarget) &&
                        _r(s.floating, e.relatedTarget)
                      ) &&
                      (!p ||
                        !zr(p.nodesRef.current, f).some(function (e) {
                          var t = e.context;
                          return null == t ? void 0 : t.open;
                        }))
                    ) {
                      if (
                        ("top" === S && n >= w.bottom - 1) ||
                        ("bottom" === S && n <= w.top + 1) ||
                        ("left" === S && r >= w.right - 1) ||
                        ("right" === S && r <= w.left + 1)
                      )
                        return g();
                      var P = [];
                      switch (S) {
                        case "top":
                          (P = [
                            [N.left, w.top + 1],
                            [N.left, N.bottom - 1],
                            [N.right, N.bottom - 1],
                            [N.right, w.top + 1],
                          ]),
                            (u =
                              h >= N.left &&
                              h <= N.right &&
                              m >= N.top &&
                              m <= w.top + 1);
                          break;
                        case "bottom":
                          (P = [
                            [N.left, N.top + 1],
                            [N.left, w.bottom - 1],
                            [N.right, w.bottom - 1],
                            [N.right, N.top + 1],
                          ]),
                            (u =
                              h >= N.left &&
                              h <= N.right &&
                              m >= w.bottom - 1 &&
                              m <= N.bottom);
                          break;
                        case "left":
                          (P = [
                            [N.right - 1, N.bottom],
                            [N.right - 1, N.top],
                            [w.left + 1, N.top],
                            [w.left + 1, N.bottom],
                          ]),
                            (u =
                              h >= N.left &&
                              h <= w.left + 1 &&
                              m >= N.top &&
                              m <= N.bottom);
                          break;
                        case "right":
                          (P = [
                            [w.right - 1, N.bottom],
                            [w.right - 1, N.top],
                            [N.left + 1, N.top],
                            [N.left + 1, N.bottom],
                          ]),
                            (u =
                              h >= w.right - 1 &&
                              h <= N.right &&
                              m >= N.top &&
                              m <= N.bottom);
                      }
                      var _ = u
                        ? P
                        : (function (e) {
                            var t = l(e, 2),
                              r = t[0],
                              n = t[1],
                              a = N.width > w.width,
                              o = N.height > w.height;
                            switch (S) {
                              case "top":
                                var s = [
                                    a ? r + i / 2 : j ? r + 4 * i : r - 4 * i,
                                    n + i + 1,
                                  ],
                                  u = [
                                    a ? r - i / 2 : j ? r + 4 * i : r - 4 * i,
                                    n + i + 1,
                                  ],
                                  c = [
                                    [N.left, j || a ? N.bottom - i : N.top],
                                    [
                                      N.right,
                                      j
                                        ? a
                                          ? N.bottom - i
                                          : N.top
                                        : N.bottom - i,
                                    ],
                                  ];
                                return [s, u].concat(c);
                              case "bottom":
                                var d = [
                                    a ? r + i / 2 : j ? r + 4 * i : r - 4 * i,
                                    n - i,
                                  ],
                                  f = [
                                    a ? r - i / 2 : j ? r + 4 * i : r - 4 * i,
                                    n - i,
                                  ],
                                  p = [
                                    [N.left, j || a ? N.top + i : N.bottom],
                                    [
                                      N.right,
                                      j
                                        ? a
                                          ? N.top + i
                                          : N.bottom
                                        : N.top + i,
                                    ],
                                  ];
                                return [d, f].concat(p);
                              case "left":
                                var g = [
                                    r + i + 1,
                                    o ? n + i / 2 : C ? n + 4 * i : n - 4 * i,
                                  ],
                                  h = [
                                    r + i + 1,
                                    o ? n - i / 2 : C ? n + 4 * i : n - 4 * i,
                                  ],
                                  m = [
                                    [C || o ? N.right - i : N.left, N.top],
                                    [
                                      C
                                        ? o
                                          ? N.right - i
                                          : N.left
                                        : N.right - i,
                                      N.bottom,
                                    ],
                                  ];
                                return [].concat(m, [g, h]);
                              case "right":
                                var b = [
                                    r - i,
                                    o ? n + i / 2 : C ? n + 4 * i : n - 4 * i,
                                  ],
                                  v = [
                                    r - i,
                                    o ? n - i / 2 : C ? n + 4 * i : n - 4 * i,
                                  ],
                                  y = [
                                    [C || o ? N.left + i : N.right, N.top],
                                    [
                                      C
                                        ? o
                                          ? N.left + i
                                          : N.right
                                        : N.left + i,
                                      N.bottom,
                                    ],
                                  ];
                                return [b, v].concat(y);
                            }
                          })([r, n]);
                      if (!u)
                        return c && !E
                          ? g()
                          : void (!(function (e, t) {
                              for (
                                var r = l(e, 2),
                                  n = r[0],
                                  a = r[1],
                                  o = !1,
                                  i = t.length,
                                  s = 0,
                                  u = i - 1;
                                s < i;
                                u = s++
                              ) {
                                var c = l(t[s] || [0, 0], 2),
                                  d = c[0],
                                  f = c[1],
                                  p = l(t[u] || [0, 0], 2),
                                  g = p[0],
                                  h = p[1];
                                f >= a !== h >= a &&
                                  n <= ((g - d) * (a - f)) / (h - f) + d &&
                                  (o = !o);
                              }
                              return o;
                            })([h, m], _)
                              ? g()
                              : a && !c && (t = setTimeout(g, a)));
                    }
                  } else c = !0;
              }
            };
          };
        return (d.__options = { blockPointerEvents: void 0 !== s && s }), d;
      }
      function Vr(t) {
        void 0 === t && (t = {});
        var r = t,
          n = r.open,
          a = void 0 !== n && n,
          o = r.onOpenChange,
          i = r.nodeId,
          s = (function (t) {
            void 0 === t && (t = {});
            var r = t,
              n = r.placement,
              a = void 0 === n ? "bottom" : n,
              o = r.strategy,
              i = void 0 === o ? "absolute" : o,
              s = r.middleware,
              u = void 0 === s ? [] : s,
              c = r.platform,
              d = r.whileElementsMounted,
              f = r.open,
              p = l(
                e.useState({
                  x: null,
                  y: null,
                  strategy: i,
                  placement: a,
                  middlewareData: {},
                  isPositioned: !1,
                }),
                2
              ),
              g = p[0],
              h = p[1],
              m = l(e.useState(u), 2),
              b = m[0],
              v = m[1];
            ir(b, u) || v(u);
            var y = e.useRef(null),
              x = e.useRef(null),
              k = e.useRef(g),
              w = sr(d),
              N = sr(c),
              S = l(e.useState(null), 2),
              j = S[0],
              C = S[1],
              E = l(e.useState(null), 2),
              P = E[0],
              _ = E[1],
              z = e.useCallback(function (e) {
                y.current !== e && ((y.current = e), C(e));
              }, []),
              T = e.useCallback(function (e) {
                x.current !== e && ((x.current = e), _(e));
              }, []),
              L = e.useCallback(
                function () {
                  if (y.current && x.current) {
                    var e = { placement: a, strategy: i, middleware: b };
                    N.current && (e.platform = N.current),
                      nr(y.current, x.current, e).then(function (e) {
                        var t = J(J({}, e), {}, { isPositioned: !0 });
                        M.current &&
                          !ir(k.current, t) &&
                          ((k.current = t),
                          ar.flushSync(function () {
                            h(t);
                          }));
                      });
                  }
                },
                [b, a, i, N]
              );
            lr(
              function () {
                !1 === f &&
                  k.current.isPositioned &&
                  ((k.current.isPositioned = !1),
                  h(function (e) {
                    return J(J({}, e), {}, { isPositioned: !1 });
                  }));
              },
              [f]
            );
            var M = e.useRef(!1);
            lr(function () {
              return (
                (M.current = !0),
                function () {
                  M.current = !1;
                }
              );
            }, []),
              lr(
                function () {
                  if (j && P) {
                    if (w.current) return w.current(j, P, L);
                    L();
                  }
                },
                [j, P, L, w]
              );
            var O = e.useMemo(
                function () {
                  return {
                    reference: y,
                    floating: x,
                    setReference: z,
                    setFloating: T,
                  };
                },
                [z, T]
              ),
              R = e.useMemo(
                function () {
                  return { reference: j, floating: P };
                },
                [j, P]
              );
            return e.useMemo(
              function () {
                return J(
                  J({}, g),
                  {},
                  { update: L, refs: O, elements: R, reference: z, floating: T }
                );
              },
              [g, L, O, R, z, T]
            );
          })(t),
          u = vr(),
          c = e.useRef(null),
          d = e.useRef({}),
          f = e.useState(function () {
            return gr();
          })[0],
          p = l(e.useState(null), 2),
          g = p[0],
          h = p[1],
          m = e.useCallback(
            function (e) {
              var t = kr(e)
                ? {
                    getBoundingClientRect: function () {
                      return e.getBoundingClientRect();
                    },
                    contextElement: e,
                  }
                : e;
              s.refs.setReference(t);
            },
            [s.refs]
          ),
          b = e.useCallback(
            function (e) {
              (kr(e) || null === e) && ((c.current = e), h(e)),
                (kr(s.refs.reference.current) ||
                  null === s.refs.reference.current ||
                  (null !== e && !kr(e))) &&
                  s.refs.setReference(e);
            },
            [s.refs]
          ),
          v = e.useMemo(
            function () {
              return J(
                J({}, s.refs),
                {},
                { setReference: b, setPositionReference: m, domReference: c }
              );
            },
            [s.refs, b, m]
          ),
          y = e.useMemo(
            function () {
              return J(J({}, s.elements), {}, { domReference: g });
            },
            [s.elements, g]
          ),
          x = Rr(o),
          k = e.useMemo(
            function () {
              return J(
                J({}, s),
                {},
                {
                  refs: v,
                  elements: y,
                  dataRef: d,
                  nodeId: i,
                  events: f,
                  open: a,
                  onOpenChange: x,
                }
              );
            },
            [s, i, f, a, x, v, y]
          );
        return (
          ur(function () {
            var e =
              null == u
                ? void 0
                : u.nodesRef.current.find(function (e) {
                    return e.id === i;
                  });
            e && (e.context = k);
          }),
          e.useMemo(
            function () {
              return J(
                J({}, s),
                {},
                { context: k, refs: v, reference: b, positionReference: m }
              );
            },
            [s, v, k, b, m]
          )
        );
      }
      function Wr(e, t, r) {
        var n = new Map();
        return J(
          J(J({}, "floating" === r && { tabIndex: -1 }), e),
          t
            .map(function (e) {
              return e ? e[r] : null;
            })
            .concat(e)
            .reduce(function (e, t) {
              return t
                ? (Object.entries(t).forEach(function (t) {
                    var r,
                      a = l(t, 2),
                      o = a[0],
                      i = a[1];
                    0 === o.indexOf("on")
                      ? (n.has(o) || n.set(o, []),
                        "function" === typeof i &&
                          (null == (r = n.get(o)) || r.push(i),
                          (e[o] = function () {
                            for (
                              var e,
                                t = arguments.length,
                                r = new Array(t),
                                a = 0;
                              a < t;
                              a++
                            )
                              r[a] = arguments[a];
                            null == (e = n.get(o)) ||
                              e.forEach(function (e) {
                                return e.apply(void 0, r);
                              });
                          })))
                      : (e[o] = i);
                  }),
                  e)
                : e;
            }, {})
        );
      }
      var $r = function (e) {
          var t = e.arrowRef,
            r = e.placement,
            n = [];
          return (
            n.push(
              (function (e) {
                return (
                  void 0 === e && (e = 0),
                  {
                    name: "offset",
                    options: e,
                    fn: function (t) {
                      return Je(
                        Ye().mark(function r() {
                          var n, a, o;
                          return Ye().wrap(function (r) {
                            for (;;)
                              switch ((r.prev = r.next)) {
                                case 0:
                                  return (
                                    (n = t.x),
                                    (a = t.y),
                                    (r.next = 4),
                                    (function () {
                                      var e = Je(
                                        Ye().mark(function e(t, r) {
                                          var n,
                                            a,
                                            o,
                                            l,
                                            i,
                                            s,
                                            u,
                                            c,
                                            d,
                                            f,
                                            p,
                                            g,
                                            h,
                                            m;
                                          return Ye().wrap(function (e) {
                                            for (;;)
                                              switch ((e.prev = e.next)) {
                                                case 0:
                                                  return (
                                                    (n = t.placement),
                                                    (a = t.platform),
                                                    (o = t.elements),
                                                    (e.next = 5),
                                                    null == a.isRTL
                                                      ? void 0
                                                      : a.isRTL(o.floating)
                                                  );
                                                case 5:
                                                  return (
                                                    (l = e.sent),
                                                    (i = at(n)),
                                                    (s = rt(n)),
                                                    (u = "x" === ot(n)),
                                                    (c = [
                                                      "left",
                                                      "top",
                                                    ].includes(i)
                                                      ? -1
                                                      : 1),
                                                    (d = l && u ? -1 : 1),
                                                    (f =
                                                      "function" == typeof r
                                                        ? r(t)
                                                        : r),
                                                    (p =
                                                      "number" == typeof f
                                                        ? {
                                                            mainAxis: f,
                                                            crossAxis: 0,
                                                            alignmentAxis: null,
                                                          }
                                                        : J(
                                                            {
                                                              mainAxis: 0,
                                                              crossAxis: 0,
                                                              alignmentAxis:
                                                                null,
                                                            },
                                                            f
                                                          )),
                                                    (g = p.mainAxis),
                                                    (h = p.crossAxis),
                                                    (m = p.alignmentAxis),
                                                    e.abrupt(
                                                      "return",
                                                      (s &&
                                                        "number" == typeof m &&
                                                        (h =
                                                          "end" === s
                                                            ? -1 * m
                                                            : m),
                                                      u
                                                        ? { x: h * d, y: g * c }
                                                        : {
                                                            x: g * c,
                                                            y: h * d,
                                                          })
                                                    )
                                                  );
                                                case 14:
                                                case "end":
                                                  return e.stop();
                                              }
                                          }, e);
                                        })
                                      );
                                      return function (t, r) {
                                        return e.apply(this, arguments);
                                      };
                                    })()(t, e)
                                  );
                                case 4:
                                  return (
                                    (o = r.sent),
                                    r.abrupt("return", {
                                      x: n + o.x,
                                      y: a + o.y,
                                      data: o,
                                    })
                                  );
                                case 6:
                                case "end":
                                  return r.stop();
                              }
                          }, r);
                        })
                      )();
                    },
                  }
                );
              })(8)
            ),
            n.push(
              "auto" === r
                ? (function (e) {
                    return (
                      void 0 === e && (e = {}),
                      {
                        name: "autoPlacement",
                        options: e,
                        fn: function (t) {
                          return Je(
                            Ye().mark(function r() {
                              var n,
                                a,
                                o,
                                l,
                                i,
                                s,
                                u,
                                c,
                                d,
                                f,
                                p,
                                g,
                                h,
                                m,
                                b,
                                v,
                                y,
                                x,
                                k,
                                w,
                                N,
                                S,
                                j,
                                C,
                                E,
                                P,
                                _,
                                z,
                                T;
                              return Ye().wrap(function (r) {
                                for (;;)
                                  switch ((r.prev = r.next)) {
                                    case 0:
                                      return (
                                        (l = t.rects),
                                        (i = t.middlewareData),
                                        (s = t.placement),
                                        (u = t.platform),
                                        (c = t.elements),
                                        (f = (d = e).crossAxis),
                                        (p = void 0 !== f && f),
                                        (g = d.alignment),
                                        (h = d.allowedPlacements),
                                        (m = void 0 === h ? bt : h),
                                        (b = d.autoAlignment),
                                        (v = void 0 === b || b),
                                        (y = Z(d, Ze)),
                                        (x =
                                          void 0 !== g || m === bt
                                            ? (function (e, t, r) {
                                                return (
                                                  e
                                                    ? [].concat(
                                                        Ge(
                                                          r.filter(function (
                                                            t
                                                          ) {
                                                            return rt(t) === e;
                                                          })
                                                        ),
                                                        Ge(
                                                          r.filter(function (
                                                            t
                                                          ) {
                                                            return rt(t) !== e;
                                                          })
                                                        )
                                                      )
                                                    : r.filter(function (e) {
                                                        return at(e) === e;
                                                      })
                                                ).filter(function (r) {
                                                  return (
                                                    !e ||
                                                    rt(r) === e ||
                                                    (!!t && wt(r) !== r)
                                                  );
                                                });
                                              })(g || null, v, m)
                                            : m),
                                        (r.next = 17),
                                        ct(t, y)
                                      );
                                    case 17:
                                      if (
                                        ((k = r.sent),
                                        (w =
                                          (null == (n = i.autoPlacement)
                                            ? void 0
                                            : n.index) || 0),
                                        null != (N = x[w]))
                                      ) {
                                        r.next = 22;
                                        break;
                                      }
                                      return r.abrupt("return", {});
                                    case 22:
                                      return (
                                        (r.t0 = xt),
                                        (r.t1 = N),
                                        (r.t2 = l),
                                        (r.next = 27),
                                        null == u.isRTL
                                          ? void 0
                                          : u.isRTL(c.floating)
                                      );
                                    case 27:
                                      if (
                                        ((r.t3 = r.sent),
                                        (S = (0, r.t0)(r.t1, r.t2, r.t3)),
                                        (j = S.main),
                                        (C = S.cross),
                                        s === N)
                                      ) {
                                        r.next = 33;
                                        break;
                                      }
                                      return r.abrupt("return", {
                                        reset: { placement: x[0] },
                                      });
                                    case 33:
                                      if (
                                        ((E = [k[at(N)], k[j], k[C]]),
                                        (P = [].concat(
                                          Ge(
                                            (null == (a = i.autoPlacement)
                                              ? void 0
                                              : a.overflows) || []
                                          ),
                                          [{ placement: N, overflows: E }]
                                        )),
                                        !(_ = x[w + 1]))
                                      ) {
                                        r.next = 36;
                                        break;
                                      }
                                      return r.abrupt("return", {
                                        data: { index: w + 1, overflows: P },
                                        reset: { placement: _ },
                                      });
                                    case 36:
                                      return (
                                        (z = P.map(function (e) {
                                          var t = rt(e.placement);
                                          return [
                                            e.placement,
                                            t && p
                                              ? e.overflows
                                                  .slice(0, 2)
                                                  .reduce(function (e, t) {
                                                    return e + t;
                                                  }, 0)
                                              : e.overflows[0],
                                            e.overflows,
                                          ];
                                        }).sort(function (e, t) {
                                          return e[1] - t[1];
                                        })),
                                        (T =
                                          (null ==
                                          (o = z.filter(function (e) {
                                            return e[2]
                                              .slice(0, rt(e[0]) ? 2 : 3)
                                              .every(function (e) {
                                                return e <= 0;
                                              });
                                          })[0])
                                            ? void 0
                                            : o[0]) || z[0][0]),
                                        r.abrupt(
                                          "return",
                                          T !== s
                                            ? {
                                                data: {
                                                  index: w + 1,
                                                  overflows: P,
                                                },
                                                reset: { placement: T },
                                              }
                                            : {}
                                        )
                                      );
                                    case 38:
                                    case "end":
                                      return r.stop();
                                  }
                              }, r);
                            })
                          )();
                        },
                      }
                    );
                  })()
                : (function (e) {
                    return (
                      void 0 === e && (e = {}),
                      {
                        name: "flip",
                        options: e,
                        fn: function (t) {
                          return Je(
                            Ye().mark(function r() {
                              var n,
                                a,
                                o,
                                l,
                                i,
                                s,
                                u,
                                c,
                                d,
                                f,
                                p,
                                g,
                                h,
                                m,
                                b,
                                v,
                                y,
                                x,
                                k,
                                w,
                                N,
                                S,
                                j,
                                C,
                                E,
                                P,
                                _,
                                z,
                                T,
                                L,
                                M,
                                O,
                                R,
                                I,
                                D,
                                F,
                                A,
                                B;
                              return Ye().wrap(function (r) {
                                for (;;)
                                  switch ((r.prev = r.next)) {
                                    case 0:
                                      return (
                                        (a = t.placement),
                                        (o = t.middlewareData),
                                        (l = t.rects),
                                        (i = t.initialPlacement),
                                        (s = t.platform),
                                        (u = t.elements),
                                        (d = (c = e).mainAxis),
                                        (f = void 0 === d || d),
                                        (p = c.crossAxis),
                                        (g = void 0 === p || p),
                                        (h = c.fallbackPlacements),
                                        (m = c.fallbackStrategy),
                                        (b = void 0 === m ? "bestFit" : m),
                                        (v = c.fallbackAxisSideDirection),
                                        (y = void 0 === v ? "none" : v),
                                        (x = c.flipAlignment),
                                        (k = void 0 === x || x),
                                        (w = Z(c, et)),
                                        (N = at(a)),
                                        (S = at(i) === i),
                                        (r.next = 23),
                                        null == s.isRTL
                                          ? void 0
                                          : s.isRTL(u.floating)
                                      );
                                    case 23:
                                      return (
                                        (j = r.sent),
                                        (C =
                                          h ||
                                          (S || !k
                                            ? [yt(i)]
                                            : (function (e) {
                                                var t = yt(e);
                                                return [wt(e), t, wt(t)];
                                              })(i))),
                                        h ||
                                          "none" === y ||
                                          C.push.apply(
                                            C,
                                            Ge(
                                              (function (e, t, r, n) {
                                                var a = rt(e),
                                                  o = (function (e, t, r) {
                                                    var n = ["left", "right"],
                                                      a = ["right", "left"];
                                                    switch (e) {
                                                      case "top":
                                                      case "bottom":
                                                        return r
                                                          ? t
                                                            ? a
                                                            : n
                                                          : t
                                                          ? n
                                                          : a;
                                                      case "left":
                                                      case "right":
                                                        return t
                                                          ? ["top", "bottom"]
                                                          : ["bottom", "top"];
                                                      default:
                                                        return [];
                                                    }
                                                  })(at(e), "start" === r, n);
                                                return (
                                                  a &&
                                                    ((o = o.map(function (e) {
                                                      return e + "-" + a;
                                                    })),
                                                    t &&
                                                      (o = o.concat(
                                                        o.map(wt)
                                                      ))),
                                                  o
                                                );
                                              })(i, k, y, j)
                                            )
                                          ),
                                        (E = [i].concat(Ge(C))),
                                        (r.next = 29),
                                        ct(t, w)
                                      );
                                    case 29:
                                      if (
                                        ((P = r.sent),
                                        (_ = []),
                                        (z =
                                          (null == (n = o.flip)
                                            ? void 0
                                            : n.overflows) || []),
                                        f && _.push(P[N]),
                                        g &&
                                          ((T = xt(a, l, j)),
                                          (L = T.main),
                                          (M = T.cross),
                                          _.push(P[L], P[M])),
                                        (z = [].concat(Ge(z), [
                                          { placement: a, overflows: _ },
                                        ])),
                                        _.every(function (e) {
                                          return e <= 0;
                                        }))
                                      ) {
                                        r.next = 48;
                                        break;
                                      }
                                      if (
                                        ((I =
                                          ((null == (O = o.flip)
                                            ? void 0
                                            : O.index) || 0) + 1),
                                        !(D = E[I]))
                                      ) {
                                        r.next = 37;
                                        break;
                                      }
                                      return r.abrupt("return", {
                                        data: { index: I, overflows: z },
                                        reset: { placement: D },
                                      });
                                    case 37:
                                      if (
                                        ((F =
                                          null ==
                                          (R = z
                                            .filter(function (e) {
                                              return e.overflows[0] <= 0;
                                            })
                                            .sort(function (e, t) {
                                              return (
                                                e.overflows[1] - t.overflows[1]
                                              );
                                            })[0])
                                            ? void 0
                                            : R.placement),
                                        F)
                                      ) {
                                        r.next = 46;
                                        break;
                                      }
                                      (r.t0 = b),
                                        (r.next =
                                          "bestFit" === r.t0
                                            ? 42
                                            : "initialPlacement" === r.t0
                                            ? 45
                                            : 46);
                                      break;
                                    case 42:
                                      return (
                                        (B =
                                          null ==
                                          (A = z
                                            .map(function (e) {
                                              return [
                                                e.placement,
                                                e.overflows
                                                  .filter(function (e) {
                                                    return e > 0;
                                                  })
                                                  .reduce(function (e, t) {
                                                    return e + t;
                                                  }, 0),
                                              ];
                                            })
                                            .sort(function (e, t) {
                                              return e[1] - t[1];
                                            })[0])
                                            ? void 0
                                            : A[0]),
                                        B && (F = B),
                                        r.abrupt("break", 46)
                                      );
                                    case 45:
                                      F = i;
                                    case 46:
                                      if (a === F) {
                                        r.next = 48;
                                        break;
                                      }
                                      return r.abrupt("return", {
                                        reset: { placement: F },
                                      });
                                    case 48:
                                      return r.abrupt("return", {});
                                    case 49:
                                    case "end":
                                      return r.stop();
                                  }
                              }, r);
                            })
                          )();
                        },
                      }
                    );
                  })()
            ),
            n.push(
              (function (e) {
                return (
                  void 0 === e && (e = {}),
                  {
                    name: "shift",
                    options: e,
                    fn: function (t) {
                      return Je(
                        Ye().mark(function r() {
                          var n,
                            a,
                            o,
                            l,
                            i,
                            s,
                            u,
                            c,
                            d,
                            f,
                            p,
                            g,
                            h,
                            m,
                            b,
                            v,
                            y,
                            x,
                            k,
                            w,
                            N;
                          return Ye().wrap(function (r) {
                            for (;;)
                              switch ((r.prev = r.next)) {
                                case 0:
                                  return (
                                    (a = t.x),
                                    (o = t.y),
                                    (l = t.placement),
                                    (s = (i = e).mainAxis),
                                    (u = void 0 === s || s),
                                    (c = i.crossAxis),
                                    (d = void 0 !== c && c),
                                    (f = i.limiter),
                                    (p =
                                      void 0 === f
                                        ? {
                                            fn: function (e) {
                                              return { x: e.x, y: e.y };
                                            },
                                          }
                                        : f),
                                    (g = Z(i, tt)),
                                    (h = { x: a, y: o }),
                                    (r.next = 14),
                                    ct(t, g)
                                  );
                                case 14:
                                  return (
                                    (m = r.sent),
                                    (b = ot(at(l))),
                                    (v = Nt(b)),
                                    (y = h[b]),
                                    (x = h[v]),
                                    u &&
                                      ((k = "y" === b ? "bottom" : "right"),
                                      (y = gt(
                                        y + m["y" === b ? "top" : "left"],
                                        y,
                                        y - m[k]
                                      ))),
                                    d &&
                                      ((w = "y" === v ? "bottom" : "right"),
                                      (x = gt(
                                        x + m["y" === v ? "top" : "left"],
                                        x,
                                        x - m[w]
                                      ))),
                                    (N = p.fn(
                                      J(
                                        J({}, t),
                                        {},
                                        (Y((n = {}), b, y), Y(n, v, x), n)
                                      )
                                    )),
                                    r.abrupt(
                                      "return",
                                      J(
                                        J({}, N),
                                        {},
                                        { data: { x: N.x - a, y: N.y - o } }
                                      )
                                    )
                                  );
                                case 22:
                                case "end":
                                  return r.stop();
                              }
                          }, r);
                        })
                      )();
                    },
                  }
                );
              })({ padding: 8 })
            ),
            t.current && n.push(or({ element: t.current })),
            n
          );
        },
        Kr = function (e) {
          var t = e.placement;
          return "auto" === t ? void 0 : t;
        },
        Qr = [
          "animation",
          "arrow",
          "children",
          "className",
          "closeRequestKey",
          "content",
          "placement",
          "style",
          "theme",
          "trigger",
        ],
        qr = function (t) {
          var r,
            n,
            a = t.animation,
            o = void 0 === a ? "duration-300" : a,
            i = t.arrow,
            s = void 0 === i || i,
            u = t.children,
            c = t.className,
            d = t.closeRequestKey,
            f = t.content,
            p = t.placement,
            g = void 0 === p ? "top" : p,
            h = t.style,
            m = void 0 === h ? "dark" : h,
            b = t.theme,
            v = t.trigger,
            y = void 0 === v ? "hover" : v,
            x = Z(t, Qr),
            k = (0, e.useRef)(null),
            w = l((0, e.useState)(!1), 2),
            N = w[0],
            S = w[1],
            j = Vr({
              middleware: $r({ arrowRef: k, placement: g }),
              onOpenChange: S,
              open: N,
              placement: Kr({ placement: g }),
            }),
            E = j.context,
            P = j.floating,
            _ = j.middlewareData.arrow,
            z = void 0 === _ ? {} : _,
            T = z.x,
            L = z.y,
            M = j.reference,
            O = j.refs,
            R = j.strategy,
            I = j.update,
            D = j.x,
            F = j.y,
            A = (function (t) {
              void 0 === t && (t = []);
              var r = t,
                n = e.useCallback(function (e) {
                  return Wr(e, t, "reference");
                }, r),
                a = e.useCallback(function (e) {
                  return Wr(e, t, "floating");
                }, r),
                o = e.useCallback(
                  function (e) {
                    return Wr(e, t, "item");
                  },
                  t.map(function (e) {
                    return null == e ? void 0 : e.item;
                  })
                );
              return e.useMemo(
                function () {
                  return {
                    getReferenceProps: n,
                    getFloatingProps: a,
                    getItemProps: o,
                  };
                },
                [n, a, o]
              );
            })([
              Fr(E, { enabled: "click" === y }),
              Br(E),
              Er(E, { enabled: "hover" === y, handleClose: Ur() }),
              Hr(E, { role: "tooltip" }),
            ]),
            B = A.getFloatingProps,
            H = A.getReferenceProps;
          return (
            (0, e.useEffect)(
              function () {
                if (O.reference.current && O.floating.current && N)
                  return (function (e, t, r, n) {
                    void 0 === n && (n = {});
                    var a = n,
                      o = a.ancestorScroll,
                      l = void 0 === o || o,
                      i = a.ancestorResize,
                      s = void 0 === i || i,
                      u = a.elementResize,
                      c = void 0 === u || u,
                      d = a.animationFrame,
                      f = void 0 !== d && d,
                      p = l && !f,
                      g =
                        p || s
                          ? [].concat(
                              Ge(
                                Tt(e)
                                  ? Xt(e)
                                  : e.contextElement
                                  ? Xt(e.contextElement)
                                  : []
                              ),
                              Ge(Xt(t))
                            )
                          : [];
                    g.forEach(function (e) {
                      p && e.addEventListener("scroll", r, { passive: !0 }),
                        s && e.addEventListener("resize", r);
                    });
                    var h,
                      m = null;
                    c &&
                      ((m = new ResizeObserver(function () {
                        r();
                      })),
                      Tt(e) && !f && m.observe(e),
                      Tt(e) ||
                        !e.contextElement ||
                        f ||
                        m.observe(e.contextElement),
                      m.observe(t));
                    var b = f ? $t(e) : null;
                    return (
                      f &&
                        (function t() {
                          var n = $t(e);
                          !b ||
                            (n.x === b.x &&
                              n.y === b.y &&
                              n.width === b.width &&
                              n.height === b.height) ||
                            r(),
                            (b = n),
                            (h = requestAnimationFrame(t));
                        })(),
                      r(),
                      function () {
                        var e;
                        g.forEach(function (e) {
                          p && e.removeEventListener("scroll", r),
                            s && e.removeEventListener("resize", r);
                        }),
                          null == (e = m) || e.disconnect(),
                          (m = null),
                          f && cancelAnimationFrame(h);
                      }
                    );
                  })(O.reference.current, O.floating.current, I);
              },
              [N, O.floating, O.reference, I]
            ),
            (0, e.useEffect)(
              function () {
                void 0 !== d && S(!1);
              },
              [d]
            ),
            (0, C.jsxs)(C.Fragment, {
              children: [
                (0, C.jsx)(
                  "div",
                  J(
                    J({ className: b.target }, H({ ref: M })),
                    {},
                    { "data-testid": "flowbite-tooltip-target", children: u }
                  )
                ),
                (0, C.jsxs)(
                  "div",
                  J(
                    J(
                      { "data-testid": "flowbite-tooltip" },
                      B(
                        J(
                          {
                            className: te()(
                              b.base,
                              o && "".concat(b.animation, " ").concat(o),
                              !N && b.hidden,
                              b.style[m],
                              c
                            ),
                            ref: P,
                            style: {
                              position: R,
                              top: null !== F && void 0 !== F ? F : " ",
                              left: null !== D && void 0 !== D ? D : " ",
                            },
                          },
                          x
                        )
                      )
                    ),
                    {},
                    {
                      children: [
                        (0, C.jsx)("div", {
                          className: b.content,
                          children: f,
                        }),
                        s &&
                          (0, C.jsx)("div", {
                            className: te()(
                              b.arrow.base,
                              ((r = {}),
                              Y(r, b.arrow.style.dark, "dark" === m),
                              Y(r, b.arrow.style.light, "light" === m),
                              Y(r, b.arrow.style.auto, "auto" === m),
                              r)
                            ),
                            "data-testid": "flowbite-tooltip-arrow",
                            ref: k,
                            style: Y(
                              {
                                top: null !== L && void 0 !== L ? L : " ",
                                left: null !== T && void 0 !== T ? T : " ",
                                right: " ",
                                bottom: " ",
                              },
                              ((n = { placement: j.placement }),
                              {
                                top: "bottom",
                                right: "left",
                                bottom: "top",
                                left: "right",
                              }[n.placement.split("-")[0]]),
                              b.arrow.placement
                            ),
                            children: "\xa0",
                          }),
                      ],
                    }
                  )
                ),
              ],
            })
          );
        },
        Gr = ["className"],
        Yr = function (e) {
          var t = e.className,
            r = Z(e, Gr),
            n = ie().theme.dropdown.floating.divider;
          return (0, C.jsx)("div", J({ className: te()(n, t) }, r));
        },
        Xr = ["children", "className"],
        Jr = function (e) {
          var t = e.children,
            r = e.className,
            n = Z(e, Xr),
            a = ie().theme.dropdown.floating.header;
          return (0, C.jsxs)(C.Fragment, {
            children: [
              (0, C.jsx)(
                "div",
                J(J({ className: te()(a, r) }, n), {}, { children: t })
              ),
              (0, C.jsx)(Yr, {}),
            ],
          });
        },
        Zr = ["children", "className", "icon", "onClick", "theme"],
        en = function (e) {
          var t = e.children,
            r = e.className,
            n = e.icon,
            a = e.onClick,
            o = e.theme,
            l = void 0 === o ? {} : o,
            i = Z(e, Zr),
            s = ae(ie().theme.dropdown.floating.item, l);
          return (0, C.jsxs)(
            "li",
            J(
              J({ className: te()(s.base, r), onClick: a }, i),
              {},
              { children: [n && (0, C.jsx)(n, { className: s.icon }), t] }
            )
          );
        },
        tn = ["children", "className", "dismissOnClick", "theme"],
        rn = [
          "placement",
          "trigger",
          "label",
          "inline",
          "floatingArrow",
          "arrowIcon",
        ],
        nn = {
          top: function (e) {
            return f({
              tag: "svg",
              attr: {
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: "2",
                stroke: "currentColor",
                "aria-hidden": "true",
              },
              child: [
                {
                  tag: "path",
                  attr: {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M5 15l7-7 7 7",
                  },
                },
              ],
            })(e);
          },
          right: B,
          bottom: A,
          left: function (e) {
            return f({
              tag: "svg",
              attr: {
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: "2",
                stroke: "currentColor",
                "aria-hidden": "true",
              },
              child: [
                {
                  tag: "path",
                  attr: {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M15 19l-7-7 7-7",
                  },
                },
              ],
            })(e);
          },
        },
        an = function (t) {
          var r = t.children,
            n = t.className,
            a = t.dismissOnClick,
            o = void 0 === a || a,
            i = t.theme,
            s = void 0 === i ? {} : i,
            u = Z(t, tn),
            c = ae(ie().theme.dropdown, s),
            d = u,
            f = d.placement,
            p = void 0 === f ? (u.inline ? "bottom-start" : "bottom") : f,
            g = d.trigger,
            h = void 0 === g ? "click" : g,
            m = d.label,
            b = d.inline,
            v = d.floatingArrow,
            y = void 0 !== v && v,
            x = d.arrowIcon,
            k = void 0 === x || x,
            w = Z(d, rn),
            N = (0, e.useMemo)(
              function () {
                var e,
                  t = l(p.split("-"), 1)[0];
                return null !== (e = nn[t]) && void 0 !== e ? e : A;
              },
              [p]
            ),
            S = l((0, e.useState)(void 0), 2),
            j = S[0],
            E = S[1],
            P = (0, e.useCallback)(
              function (t) {
                return e.isValidElement(t)
                  ? t.type === en
                    ? e.cloneElement(t, {
                        onClick: function () {
                          var e, r;
                          null === (e = (r = t.props).onClick) ||
                            void 0 === e ||
                            e.call(r),
                            o &&
                              E(
                                "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
                                  /[xy]/g,
                                  function (e) {
                                    var t = (16 * Math.random()) | 0;
                                    return (
                                      "x" == e ? t : (3 & t) | 8
                                    ).toString(16);
                                  }
                                )
                              );
                        },
                      })
                    : t.props.children && "object" === typeof t.props.children
                    ? e.cloneElement(t, {
                        children: e.Children.map(t.props.children, P),
                      })
                    : t
                  : t;
              },
              [o]
            ),
            _ = (0, e.useMemo)(
              function () {
                return (0, C.jsx)("ul", {
                  className: c.content,
                  children: e.Children.map(r, P),
                });
              },
              [P, r, c.content]
            );
          return (0, C.jsx)(qr, {
            content: _,
            style: "auto",
            animation: "duration-100",
            placement: p,
            arrow: y,
            trigger: h,
            theme: c.floating,
            closeRequestKey: j,
            className: n,
            children: (0, C.jsxs)(
              function (e) {
                var t = e.children;
                return b
                  ? (0, C.jsx)("button", {
                      className: c.inlineWrapper,
                      children: t,
                    })
                  : (0, C.jsx)(Be, J(J({}, w), {}, { children: t }));
              },
              { children: [m, k && (0, C.jsx)(N, { className: c.arrowIcon })] }
            ),
          });
        };
      (an.displayName = "Dropdown"),
        (en.displayName = "Dropdown.Item"),
        (Jr.displayName = "Dropdown.Header"),
        (Yr.displayName = "Dropdown.Divider");
      var on = Object.assign(an, { Item: en, Header: Jr, Divider: Yr }),
        ln = ["children", "className", "color", "theme", "value"],
        sn = function (e) {
          var t,
            r = e.children,
            n = e.className,
            a = e.color,
            o = void 0 === a ? "default" : a,
            l = e.theme,
            i = void 0 === l ? {} : l,
            s = e.value,
            u = Z(e, ln),
            c = ae(ie().theme.helperText, i);
          return (0, C.jsx)(
            "p",
            J(
              J({ className: te()(c.root.base, c.root.colors[o], n) }, u),
              {},
              {
                children:
                  null !== (t = null !== s && void 0 !== s ? s : r) &&
                  void 0 !== t
                    ? t
                    : "",
              }
            )
          );
        },
        un = ["className", "color", "helperText", "sizing", "theme"],
        cn = (0, e.forwardRef)(function (e, t) {
          var r = e.className,
            n = e.color,
            a = void 0 === n ? "gray" : n,
            o = e.helperText,
            l = e.sizing,
            i = void 0 === l ? "md" : l,
            s = e.theme,
            u = void 0 === s ? {} : s,
            c = Z(e, un),
            d = ae(ie().theme.fileInput, u);
          return (0,
          C.jsxs)(C.Fragment, { children: [(0, C.jsx)("div", { className: te()(d.root.base, r), children: (0, C.jsx)("div", { className: d.field.base, children: (0, C.jsx)("input", J(J({ className: te()(d.field.input.base, d.field.input.colors[a], d.field.input.sizes[i]) }, c), {}, { type: "file", ref: t })) }) }), o && (0, C.jsx)(sn, { color: a, children: o })] });
        });
      cn.displayName = "FileInput";
      var dn = ["alt", "className", "children", "href", "name", "src", "theme"],
        fn = function (e) {
          var t = e.alt,
            r = e.className,
            n = e.children,
            a = e.href,
            o = e.name,
            l = e.src,
            i = e.theme,
            s = void 0 === i ? {} : i,
            u = Z(e, dn),
            c = ae(ie().theme.footer.brand, s);
          return (0, C.jsx)("div", {
            children: a
              ? (0, C.jsxs)(
                  "a",
                  J(
                    J(
                      {
                        "data-testid": "flowbite-footer-brand",
                        href: a,
                        className: te()(c.base, r),
                      },
                      u
                    ),
                    {},
                    {
                      children: [
                        (0, C.jsx)("img", { alt: t, src: l, className: c.img }),
                        (0, C.jsx)("span", {
                          "data-testid": "flowbite-footer-brand-span",
                          className: c.span,
                          children: o,
                        }),
                        n,
                      ],
                    }
                  )
                )
              : (0, C.jsx)(
                  "img",
                  J(
                    {
                      alt: t,
                      "data-testid": "flowbite-footer-brand",
                      src: l,
                      className: te()(c.img, r),
                    },
                    u
                  )
                ),
          });
        },
        pn = ["by", "className", "href", "theme", "year"],
        gn = function (e) {
          var t = e.by,
            r = e.className,
            n = e.href,
            a = e.theme,
            o = void 0 === a ? {} : a,
            l = e.year,
            i = Z(e, pn),
            s = ae(ie().theme.footer.copyright, o);
          return (0, C.jsxs)(
            "div",
            J(
              J(
                {
                  "data-testid": "flowbite-footer-copyright",
                  className: te()(s.base, r),
                },
                i
              ),
              {},
              {
                children: [
                  "\xa9 ",
                  l,
                  n
                    ? (0, C.jsx)("a", {
                        href: n,
                        className: s.href,
                        children: t,
                      })
                    : (0, C.jsx)("span", {
                        "data-testid": "flowbite-footer-copyright-span",
                        className: s.span,
                        children: t,
                      }),
                ],
              }
            )
          );
        },
        hn = ["className", "theme"],
        mn = function (e) {
          var t = e.className,
            r = e.theme,
            n = void 0 === r ? {} : r,
            a = Z(e, hn),
            o = ae(ie().theme.footer.divider, n);
          return (0, C.jsx)(
            "hr",
            J(
              { "data-testid": "footer-divider", className: te()(o.base, t) },
              a
            )
          );
        },
        bn = ["ariaLabel", "className", "href", "icon", "theme"],
        vn = function (e) {
          var t = e.ariaLabel,
            r = e.className,
            n = e.href,
            a = e.icon,
            o = e.theme,
            l = void 0 === o ? {} : o,
            i = Z(e, bn),
            s = ae(ie().theme.footer.icon, l);
          return (0, C.jsx)("div", {
            children: n
              ? (0, C.jsx)(
                  "a",
                  J(
                    J(
                      {
                        "aria-label": t,
                        "data-testid": "flowbite-footer-icon",
                        href: n,
                        className: te()(s.base, r),
                      },
                      i
                    ),
                    {},
                    { children: (0, C.jsx)(a, { className: s.size }) }
                  )
                )
              : (0, C.jsx)(
                  a,
                  J(
                    {
                      "data-testid": "flowbite-footer-icon",
                      className: s.size,
                    },
                    i
                  )
                ),
          });
        },
        yn = ["as", "children", "className", "href", "theme"],
        xn = function (e) {
          var t = e.as,
            r = void 0 === t ? "a" : t,
            n = e.children,
            a = e.className,
            o = e.href,
            l = e.theme,
            i = void 0 === l ? {} : l,
            s = Z(e, yn),
            u = ae(ie().theme.footer.groupLink.link, i);
          return (0, C.jsx)("li", {
            className: te()(u.base, a),
            children: (0, C.jsx)(
              r,
              J(J({ href: o, className: u.href }, s), {}, { children: n })
            ),
          });
        },
        kn = ["children", "className", "col", "theme"],
        wn = function (e) {
          var t = e.children,
            r = e.className,
            n = e.col,
            a = void 0 !== n && n,
            o = e.theme,
            l = void 0 === o ? {} : o,
            i = Z(e, kn),
            s = ae(ie().theme.footer.groupLink, l);
          return (0, C.jsx)(
            "ul",
            J(
              J(
                {
                  "data-testid": "footer-groupLink",
                  className: te()(s.base, a && s.col, r),
                },
                i
              ),
              {},
              { children: t }
            )
          );
        },
        Nn = ["as", "className", "theme", "title"],
        Sn = function (e) {
          var t = e.as,
            r = void 0 === t ? "h2" : t,
            n = e.className,
            a = e.theme,
            o = void 0 === a ? {} : a,
            l = e.title,
            i = Z(e, Nn),
            s = ae(ie().theme.footer.title, o);
          return (0, C.jsx)(
            r,
            J(
              J(
                {
                  "data-testid": "flowbite-footer-title",
                  className: te()(s.base, n),
                },
                i
              ),
              {},
              { children: l }
            )
          );
        },
        jn = ["bgDark", "children", "className", "container", "theme"],
        Cn = function (e) {
          var t = e.bgDark,
            r = void 0 !== t && t,
            n = e.children,
            a = e.className,
            o = e.container,
            l = void 0 !== o && o,
            i = e.theme,
            s = void 0 === i ? {} : i,
            u = Z(e, jn),
            c = ae(ie().theme.footer, s);
          return (0, C.jsx)(
            "footer",
            J(
              J(
                {
                  "data-testid": "flowbite-footer",
                  className: te()(
                    c.root.base,
                    r && c.root.bgDark,
                    l && c.root.container,
                    a
                  ),
                },
                u
              ),
              {},
              { children: n }
            )
          );
        };
      (Cn.displayName = "Footer"),
        (gn.displayName = "Footer.Copyright"),
        (xn.displayName = "Footer.Link"),
        (fn.displayName = "Footer.Brand"),
        (wn.displayName = "Footer.LinkGroup"),
        (vn.displayName = "Footer.Icon"),
        (Sn.displayName = "Footer.Title"),
        (mn.displayName = "Footer.Divider");
      Object.assign(Cn, {
        Copyright: gn,
        Link: xn,
        LinkGroup: wn,
        Brand: fn,
        Icon: vn,
        Title: Sn,
        Divider: mn,
      });
      var En = [
          "active",
          "children",
          "className",
          "href",
          "icon",
          "onClick",
          "theme",
        ],
        Pn = function (e) {
          var t = e.active,
            r = e.children,
            n = e.className,
            a = e.href,
            o = e.icon,
            l = e.onClick,
            i = e.theme,
            s = void 0 === i ? {} : i,
            u = Z(e, En),
            c = ae(ie().theme.listGroup.item, s),
            d = "undefined" !== typeof a,
            f = d ? "a" : "button";
          return (0, C.jsx)("li", {
            className: te()(c.base, n),
            children: (0, C.jsxs)(
              f,
              J(
                J(
                  {
                    href: a,
                    onClick: l,
                    type: d ? void 0 : "button",
                    className: te()(
                      c.link.active[t ? "on" : "off"],
                      c.link.base,
                      c.link.href[d ? "on" : "off"]
                    ),
                  },
                  u
                ),
                {},
                {
                  children: [
                    o &&
                      (0, C.jsx)(o, {
                        "aria-hidden": !0,
                        "data-testid": "flowbite-list-group-item-icon",
                        className: c.link.icon,
                      }),
                    r,
                  ],
                }
              )
            ),
          });
        },
        _n = ["children", "className", "theme"],
        zn = function (e) {
          var t = e.children,
            r = e.className,
            n = e.theme,
            a = void 0 === n ? {} : n,
            o = Z(e, _n),
            l = ae(ie().theme.listGroup, a);
          return (0, C.jsx)(
            "ul",
            J(J({ className: te()(l.root.base, r) }, o), {}, { children: t })
          );
        };
      (zn.displayName = "ListGroup"), (Pn.displayName = "ListGroup.Item");
      Object.assign(zn, { Item: Pn });
      var Tn = function (t, r) {
          (0, e.useEffect)(
            function () {
              var e = function (e) {
                e.key === t && r();
              };
              return (
                document.addEventListener("keydown", e),
                function () {
                  document.removeEventListener("keydown", e);
                }
              );
            },
            [t, r]
          );
        },
        Ln = (0, e.createContext)(void 0);
      function Mn() {
        var t = (0, e.useContext)(Ln);
        if (!t)
          throw new Error(
            "useModalContext should be used within the ModalContext provider!"
          );
        return t;
      }
      var On = ["children", "className", "theme"],
        Rn = function (e) {
          var t = e.children,
            r = e.className,
            n = e.theme,
            a = void 0 === n ? {} : n,
            o = Z(e, On),
            l = ae(ie().theme.modal.body, a),
            i = Mn().popup;
          return (0, C.jsx)(
            "div",
            J(
              J({ className: te()(l.base, Y({}, l.popup, i), r) }, o),
              {},
              { children: t }
            )
          );
        },
        In = ["children", "className", "theme"],
        Dn = function (e) {
          var t = e.children,
            r = e.className,
            n = e.theme,
            a = void 0 === n ? {} : n,
            o = Z(e, In),
            l = ae(ie().theme.modal.footer, a),
            i = Mn().popup;
          return (0, C.jsx)(
            "div",
            J(
              J({ className: te()(l.base, Y({}, l.popup, !i), r) }, o),
              {},
              { children: t }
            )
          );
        },
        Fn = ["as", "children", "className", "theme"],
        An = function (e) {
          var t = e.as,
            r = void 0 === t ? "h3" : t,
            n = e.children,
            a = e.className,
            o = e.theme,
            l = void 0 === o ? {} : o,
            i = Z(e, Fn),
            s = ae(ie().theme.modal.header, l),
            u = Mn(),
            c = u.popup,
            d = u.onClose;
          return (0, C.jsxs)(
            "div",
            J(
              J({ className: te()(s.base, Y({}, s.popup, c), a) }, i),
              {},
              {
                children: [
                  (0, C.jsx)(r, { className: s.title, children: n }),
                  (0, C.jsx)("button", {
                    "aria-label": "Close",
                    className: s.close.base,
                    type: "button",
                    onClick: d,
                    children: (0, C.jsx)(U, {
                      "aria-hidden": !0,
                      className: s.close.icon,
                    }),
                  }),
                ],
              }
            )
          );
        },
        Bn = [
          "children",
          "className",
          "dismissible",
          "onClose",
          "popup",
          "position",
          "root",
          "show",
          "size",
          "theme",
        ],
        Hn = function (t) {
          var r = t.children,
            n = t.className,
            a = t.dismissible,
            o = void 0 !== a && a,
            l = t.onClose,
            i = t.popup,
            s = t.position,
            u = void 0 === s ? "center" : s,
            c = t.root,
            d = t.show,
            f = t.size,
            p = void 0 === f ? "2xl" : f,
            g = t.theme,
            h = void 0 === g ? {} : g,
            m = Z(t, Bn),
            b = ae(ie().theme.modal, h),
            v = (0, e.useRef)(null);
          v.current || (v.current = document.createElement("div")),
            v.current.parentNode !== c &&
              "undefined" !== typeof window &&
              (c = c || document.body).appendChild(v.current),
            (0, e.useEffect)(function () {
              return function () {
                var e,
                  t = v.current;
                t &&
                  (null === (e = t.parentNode) ||
                    void 0 === e ||
                    e.removeChild(t),
                  (v.current = null));
              };
            }, []),
            Tn("Escape", function () {
              o && l && l();
            });
          return (0, ar.createPortal)(
            (0, C.jsx)(Ln.Provider, {
              value: { popup: i, onClose: l },
              children: (0, C.jsx)(
                "div",
                J(
                  J(
                    {
                      "aria-hidden": !d,
                      "data-testid": "modal",
                      onClick: function (e) {
                        o && e.target === e.currentTarget && l && l();
                      },
                      role: "dialog",
                      className: te()(
                        b.root.base,
                        b.root.positions[u],
                        d ? b.root.show.on : b.root.show.off,
                        n
                      ),
                    },
                    m
                  ),
                  {},
                  {
                    children: (0, C.jsx)("div", {
                      className: te()(b.content.base, b.root.sizes[p]),
                      children: (0, C.jsx)("div", {
                        className: b.content.inner,
                        children: r,
                      }),
                    }),
                  }
                )
              ),
            }),
            v.current
          );
        };
      (Hn.displayName = "Modal"),
        (An.displayName = "Modal.Header"),
        (Rn.displayName = "Modal.Body"),
        (Dn.displayName = "Modal.Footer");
      Object.assign(Hn, { Header: An, Body: Rn, Footer: Dn });
      var Un = ["as", "children", "className", "theme"],
        Vn = function (e) {
          var t = e.as,
            r = void 0 === t ? "a" : t,
            n = e.children,
            a = e.className,
            o = e.theme,
            l = void 0 === o ? {} : o,
            i = Z(e, Un),
            s = ae(ie().theme.navbar.brand, l);
          return (0, C.jsx)(
            r,
            J(J({ className: te()(s.base, a) }, i), {}, { children: n })
          );
        },
        Wn = (0, e.createContext)(void 0);
      function $n() {
        var t = (0, e.useContext)(Wn);
        if (!t)
          throw new Error(
            "useNavBarContext should be used within the NavbarContext provider!"
          );
        return t;
      }
      var Kn = ["children", "className", "theme"],
        Qn = function (e) {
          var t = e.children,
            r = e.className,
            n = e.theme,
            a = void 0 === n ? {} : n,
            o = Z(e, Kn),
            l = $n().isOpen,
            i = ae(ie().theme.navbar.collapse, a);
          return (0, C.jsx)(
            "div",
            J(
              J(
                {
                  "data-testid": "flowbite-navbar-collapse",
                  className: te()(i.base, i.hidden[l ? "off" : "on"], r),
                },
                o
              ),
              {},
              { children: (0, C.jsx)("ul", { className: i.list, children: t }) }
            )
          );
        },
        qn = ["active", "as", "disabled", "children", "className", "theme"],
        Gn = function (e) {
          var t,
            r = e.active,
            n = e.as,
            a = void 0 === n ? "a" : n,
            o = e.disabled,
            l = e.children,
            i = e.className,
            s = e.theme,
            u = void 0 === s ? {} : s,
            c = Z(e, qn),
            d = ae(ie().theme.navbar.link, u);
          return (0, C.jsx)("li", {
            children: (0, C.jsx)(
              a,
              J(
                J(
                  {
                    className: te()(
                      d.base,
                      ((t = {}),
                      Y(t, d.active.on, r),
                      Y(t, d.active.off, !r && !o),
                      t),
                      d.disabled[o ? "on" : "off"],
                      i
                    ),
                  },
                  c
                ),
                {},
                { children: l }
              )
            ),
          });
        };
      function Yn(e) {
        return f({
          tag: "svg",
          attr: { viewBox: "0 0 12 16" },
          child: [
            {
              tag: "path",
              attr: {
                fillRule: "evenodd",
                d: "M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z",
              },
            },
          ],
        })(e);
      }
      var Xn = ["barIcon", "className", "theme"],
        Jn = function (e) {
          var t = e.barIcon,
            r = void 0 === t ? Yn : t,
            n = e.className,
            a = e.theme,
            o = void 0 === a ? {} : a,
            l = Z(e, Xn),
            i = $n(),
            s = i.isOpen,
            u = i.setIsOpen,
            c = ae(ie().theme.navbar.toggle, o);
          return (0, C.jsxs)(
            "button",
            J(
              J(
                {
                  "data-testid": "flowbite-navbar-toggle",
                  onClick: function () {
                    u(!s);
                  },
                  className: te()(c.base, n),
                },
                l
              ),
              {},
              {
                children: [
                  (0, C.jsx)("span", {
                    className: "sr-only",
                    children: "Open main menu",
                  }),
                  (0, C.jsx)(r, { "aria-hidden": !0, className: c.icon }),
                ],
              }
            )
          );
        },
        Zn = [
          "border",
          "children",
          "className",
          "fluid",
          "menuOpen",
          "rounded",
          "theme",
        ],
        ea = function (t) {
          var r = t.border,
            n = t.children,
            a = t.className,
            o = t.fluid,
            i = void 0 !== o && o,
            s = t.menuOpen,
            u = t.rounded,
            c = t.theme,
            d = void 0 === c ? {} : c,
            f = Z(t, Zn),
            p = l((0, e.useState)(s), 2),
            g = p[0],
            h = p[1],
            m = ae(ie().theme.navbar.root, d);
          return (0, C.jsx)(Wn.Provider, {
            value: { isOpen: g, setIsOpen: h },
            children: (0, C.jsx)(
              "nav",
              J(
                J(
                  {
                    className: te()(
                      m.base,
                      m.bordered[r ? "on" : "off"],
                      m.rounded[u ? "on" : "off"],
                      a
                    ),
                  },
                  f
                ),
                {},
                {
                  children: (0, C.jsx)("div", {
                    className: te()(
                      m.inner.base,
                      m.inner.fluid[i ? "on" : "off"]
                    ),
                    children: n,
                  }),
                }
              )
            ),
          });
        };
      (ea.displayName = "Navbar"),
        (Vn.displayName = "Navbar.Brand"),
        (Qn.displayName = "Navbar.Collapse"),
        (Gn.displayName = "Navbar.Link"),
        (Jn.displayName = "Navbar.Toggle");
      Object.assign(ea, { Brand: Vn, Collapse: Qn, Link: Gn, Toggle: Jn });
      var ta = ["active", "children", "className", "onClick", "theme"],
        ra = function (e) {
          var t = e.active,
            r = e.children,
            n = e.className,
            a = e.onClick,
            o = e.theme,
            l = void 0 === o ? {} : o,
            i = Z(e, ta),
            s = ae(ie().theme.pagination, l);
          return (0, C.jsx)(
            "button",
            J(
              J(
                {
                  className: te()(Y({}, s.pages.selector.active, t), n),
                  onClick: a,
                },
                i
              ),
              {},
              { children: r }
            )
          );
        };
      ra.displayName = "Pagination.Button";
      var na = ra,
        aa = [
          "className",
          "currentPage",
          "layout",
          "nextLabel",
          "onPageChange",
          "previousLabel",
          "renderPaginationButton",
          "showIcons",
          "theme",
          "totalPages",
        ],
        oa = function (e) {
          var t,
            r,
            n = e.className,
            a = e.currentPage,
            o = e.layout,
            l = void 0 === o ? "pagination" : o,
            i = e.nextLabel,
            s = void 0 === i ? "Next" : i,
            u = e.onPageChange,
            c = e.previousLabel,
            d = void 0 === c ? "Previous" : c,
            f = e.renderPaginationButton,
            p =
              void 0 === f
                ? function (e) {
                    return (0, C.jsx)(na, J({}, e));
                  }
                : f,
            g = e.showIcons,
            h = void 0 !== g && g,
            m = e.theme,
            b = void 0 === m ? {} : m,
            v = e.totalPages,
            y = Z(e, aa),
            x = ae(ie().theme.pagination, b),
            k = Math.max(1, a - 3),
            w = Math.min(a + 3, v);
          return (0, C.jsxs)(
            "nav",
            J(
              J({ className: te()(x.base, n) }, y),
              {},
              {
                children: [
                  "table" === l &&
                    (0, C.jsxs)("div", {
                      className: x.layout.table.base,
                      children: [
                        "Showing ",
                        (0, C.jsx)("span", {
                          className: x.layout.table.span,
                          children: k,
                        }),
                        " to\xa0",
                        (0, C.jsx)("span", {
                          className: x.layout.table.span,
                          children: w,
                        }),
                        " of\xa0",
                        (0, C.jsx)("span", {
                          className: x.layout.table.span,
                          children: v,
                        }),
                        " Entries",
                      ],
                    }),
                  (0, C.jsxs)("ul", {
                    className: x.pages.base,
                    children: [
                      (0, C.jsx)("li", {
                        children: p({
                          className: te()(
                            te()(x.pages.previous.base, h && x.pages.showIcon)
                          ),
                          onClick: function () {
                            u(Math.max(a - 1, 1));
                          },
                          children: (0, C.jsxs)(C.Fragment, {
                            children: [
                              h &&
                                (0, C.jsx)(R, {
                                  "aria-hidden": !0,
                                  className: x.pages.previous.icon,
                                }),
                              d,
                            ],
                          }),
                        }),
                      }),
                      "pagination" === l &&
                        ((t = k),
                        (r = w),
                        t >= r
                          ? []
                          : Ge(Array(r - t + 1).keys()).map(function (e) {
                              return e + t;
                            })).map(function (e) {
                          return (0, C.jsx)(
                            "li",
                            {
                              "aria-current": e === a ? "page" : void 0,
                              children: p({
                                className: te()(
                                  x.pages.selector.base,
                                  Y({}, x.pages.selector.active, a === e)
                                ),
                                active: e === a,
                                onClick: function () {
                                  return u(e);
                                },
                                children: e,
                              }),
                            },
                            e
                          );
                        }),
                      (0, C.jsx)("li", {
                        children: p({
                          className: te()(
                            x.pages.next.base,
                            h && x.pages.showIcon
                          ),
                          onClick: function () {
                            u(Math.min(a + 1, v));
                          },
                          children: (0, C.jsxs)(C.Fragment, {
                            children: [
                              s,
                              h &&
                                (0, C.jsx)(I, {
                                  "aria-hidden": !0,
                                  className: x.pages.next.icon,
                                }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }
            )
          );
        };
      oa.displayName = "Pagination";
      Object.assign(oa, { Button: na });
      var la = ["className", "theme"],
        ia = (0, e.forwardRef)(function (e, t) {
          var r = e.className,
            n = e.theme,
            a = void 0 === n ? {} : n,
            o = Z(e, la),
            l = ae(ie().theme.radio, a);
          return (0,
          C.jsx)("input", J({ ref: t, type: "radio", className: te()(l.root.base, r) }, o));
        });
      ia.displayName = "Radio";
      var sa = ["className", "sizing", "theme"],
        ua = (0, e.forwardRef)(function (e, t) {
          var r = e.className,
            n = e.sizing,
            a = void 0 === n ? "md" : n,
            o = e.theme,
            l = void 0 === o ? {} : o,
            i = Z(e, sa),
            s = ae(ie().theme.rangeSlider, l);
          return (0,
          C.jsx)(C.Fragment, { children: (0, C.jsx)("div", { "data-testid": "flowbite-range-slider", className: te()(s.root.base, r), children: (0, C.jsx)("div", { className: s.field.base, children: (0, C.jsx)("input", J({ ref: t, type: "range", className: te()(s.field.input.base, s.field.input.sizes[a]) }, i)) }) }) });
        });
      ua.displayName = "RangeSlider";
      var ca = ["children", "className", "percentFilled", "theme"],
        da = function (e) {
          var t = e.children,
            r = e.className,
            n = e.percentFilled,
            a = void 0 === n ? 0 : n,
            o = e.theme,
            l = void 0 === o ? {} : o,
            i = Z(e, ca),
            s = ae(ie().theme.rating.advanced, l);
          return (0, C.jsxs)(
            "div",
            J(
              J({ className: te()(s.base, r) }, i),
              {},
              {
                children: [
                  (0, C.jsx)("span", { className: s.label, children: t }),
                  (0, C.jsx)("div", {
                    className: s.progress.base,
                    children: (0, C.jsx)("div", {
                      className: s.progress.fill,
                      "data-testid": "flowbite-rating-fill",
                      style: { width: "".concat(a, "%") },
                    }),
                  }),
                  (0, C.jsx)("span", {
                    className: s.progress.label,
                    children: "".concat(a, "%"),
                  }),
                ],
              }
            )
          );
        },
        fa = (0, e.createContext)(void 0);
      var pa = ["className", "filled", "starIcon", "theme"],
        ga = function (t) {
          var r = t.className,
            n = t.filled,
            a = void 0 === n || n,
            o = t.starIcon,
            l = void 0 === o ? D : o,
            i = t.theme,
            s = void 0 === i ? {} : i,
            u = Z(t, pa),
            c = (function () {
              var t = (0, e.useContext)(fa);
              if (!t)
                throw new Error(
                  "useRatingContext should be used within the RatingContext provider!"
                );
              return t;
            })().size,
            d = void 0 === c ? "sm" : c,
            f = ae(ie().theme.rating.star, s);
          return (0, C.jsx)(
            l,
            J(
              {
                "data-testid": "flowbite-rating-star",
                className: te()(f.sizes[d], f[a ? "filled" : "empty"], r),
              },
              u
            )
          );
        },
        ha = ["children", "className", "size", "theme"],
        ma = function (e) {
          var t = e.children,
            r = e.className,
            n = e.size,
            a = void 0 === n ? "sm" : n,
            o = e.theme,
            l = void 0 === o ? {} : o,
            i = Z(e, ha),
            s = ae(ie().theme.rating, l);
          return (0, C.jsx)(fa.Provider, {
            value: { size: a },
            children: (0, C.jsx)(
              "div",
              J(J({ className: te()(s.root.base, r) }, i), {}, { children: t })
            ),
          });
        };
      (ma.displayName = "Rating"),
        (ga.displayName = "Rating.Star"),
        (da.displayName = "Rating.Advanced");
      Object.assign(ma, { Star: ga, Advanced: da });
      var ba = [
          "addon",
          "children",
          "className",
          "color",
          "helperText",
          "icon",
          "shadow",
          "sizing",
          "theme",
        ],
        va = (0, e.forwardRef)(function (e, t) {
          var r = e.addon,
            n = e.children,
            a = e.className,
            o = e.color,
            l = void 0 === o ? "gray" : o,
            i = e.helperText,
            s = e.icon,
            u = e.shadow,
            c = e.sizing,
            d = void 0 === c ? "md" : c,
            f = e.theme,
            p = void 0 === f ? {} : f,
            g = Z(e, ba),
            h = ae(ie().theme.select, p);
          return (0,
          C.jsxs)("div", { className: te()(h.base, a), children: [r && (0, C.jsx)("span", { className: h.addon, children: r }), (0, C.jsxs)("div", { className: h.field.base, children: [s && (0, C.jsx)("div", { className: h.field.icon.base, children: (0, C.jsx)(s, { className: h.field.icon.svg }) }), (0, C.jsx)("select", J(J({ className: te()(h.field.select.base, h.field.select.colors[l], h.field.select.withIcon[s ? "on" : "off"], h.field.select.withAddon[r ? "on" : "off"], h.field.select.withShadow[u ? "on" : "off"], h.field.select.sizes[d]) }, g), {}, { ref: t, children: n })), i && (0, C.jsx)(sn, { color: l, children: i })] })] });
        });
      va.displayName = "Select";
      var ya = [
          "animation",
          "arrow",
          "children",
          "className",
          "content",
          "placement",
          "style",
          "theme",
          "trigger",
        ],
        xa = function (e) {
          var t = e.animation,
            r = void 0 === t ? "duration-300" : t,
            n = e.arrow,
            a = void 0 === n || n,
            o = e.children,
            l = e.className,
            i = e.content,
            s = e.placement,
            u = void 0 === s ? "top" : s,
            c = e.style,
            d = void 0 === c ? "dark" : c,
            f = e.theme,
            p = void 0 === f ? {} : f,
            g = e.trigger,
            h = void 0 === g ? "hover" : g,
            m = Z(e, ya),
            b = ae(ie().theme.tooltip, p);
          return (0, C.jsx)(
            qr,
            J(
              J(
                {
                  animation: r,
                  arrow: a,
                  content: i,
                  placement: u,
                  style: d,
                  theme: b,
                  trigger: h,
                  className: l,
                },
                m
              ),
              {},
              { children: o }
            )
          );
        },
        ka = (0, e.createContext)(void 0);
      function wa() {
        var t = (0, e.useContext)(ka);
        if (!t)
          throw new Error(
            "useSidebarContext should be used within the SidebarContext provider!"
          );
        return t;
      }
      var Na = (0, e.createContext)(void 0);
      var Sa = ["children", "className", "icon", "label", "open", "theme"],
        ja = function (t) {
          var r = t.children,
            n = t.className,
            a = t.icon,
            o = t.label,
            i = t.open,
            s = void 0 !== i && i,
            u = t.theme,
            c = void 0 === u ? {} : u,
            d = Z(t, Sa),
            f = (0, e.useId)(),
            p = wa().isCollapsed,
            g = l((0, e.useState)(s), 2),
            h = g[0],
            m = g[1],
            b = ae(ie().theme.sidebar.collapse, c);
          (0, e.useEffect)(
            function () {
              return m(s);
            },
            [s]
          );
          return (0, C.jsxs)(
            function (e) {
              var t = e.children;
              return (0, C.jsx)("li", {
                children:
                  p && !h
                    ? (0, C.jsx)(xa, {
                        content: o,
                        placement: "right",
                        children: t,
                      })
                    : t,
              });
            },
            {
              children: [
                (0, C.jsxs)(
                  "button",
                  J(
                    J(
                      {
                        id: "flowbite-sidebar-collapse-".concat(f),
                        onClick: function () {
                          return m(!h);
                        },
                        title: o,
                        type: "button",
                        className: te()(b.button, n),
                      },
                      d
                    ),
                    {},
                    {
                      children: [
                        a &&
                          (0, C.jsx)(a, {
                            "aria-hidden": !0,
                            "data-testid": "flowbite-sidebar-collapse-icon",
                            className: te()(
                              b.icon.base,
                              b.icon.open[h ? "on" : "off"]
                            ),
                          }),
                        p
                          ? (0, C.jsx)("span", {
                              className: "sr-only",
                              children: o,
                            })
                          : (0, C.jsxs)(C.Fragment, {
                              children: [
                                (0, C.jsx)("span", {
                                  "data-testid":
                                    "flowbite-sidebar-collapse-label",
                                  className: b.label.base,
                                  children: o,
                                }),
                                (0, C.jsx)(O, {
                                  "aria-hidden": !0,
                                  className: b.label.icon,
                                }),
                              ],
                            }),
                      ],
                    }
                  )
                ),
                (0, C.jsx)("ul", {
                  "aria-labelledby": "flowbite-sidebar-collapse-".concat(f),
                  hidden: !h,
                  className: b.list,
                  children: (0, C.jsx)(Na.Provider, {
                    value: { isInsideCollapse: !0 },
                    children: r,
                  }),
                }),
              ],
            }
          );
        };
      ja.displayName = "Sidebar.Collapse";
      var Ca = ja,
        Ea = ["children", "color", "className", "theme"],
        Pa = function (e) {
          var t = e.children,
            r = e.color,
            n = void 0 === r ? "info" : r,
            a = e.className,
            o = e.theme,
            l = void 0 === o ? {} : o,
            i = Z(e, Ea),
            s = wa().isCollapsed,
            u = ae(ie().theme.sidebar.cta, l);
          return (0, C.jsx)(
            "div",
            J(
              J(
                {
                  "data-testid": "sidebar-cta",
                  hidden: s,
                  className: te()(u.base, u.color[n], a),
                },
                i
              ),
              {},
              { children: t }
            )
          );
        };
      Pa.displayName = "Sidebar.CTA";
      var _a = Pa,
        za = [
          "active",
          "as",
          "children",
          "className",
          "icon",
          "label",
          "labelColor",
          "theme",
        ],
        Ta = function (e) {
          var t = e.id,
            r = e.isCollapsed,
            n = e.tooltipChildren,
            a = e.children;
          return (0, C.jsx)("li", {
            children: r
              ? (0, C.jsx)(xa, {
                  content: (0, C.jsx)(La, { id: t, children: n }),
                  placement: "right",
                  children: a,
                })
              : a,
          });
        },
        La = function (e) {
          var t = e.id,
            r = e.children;
          return (0, C.jsx)(Ma, { id: t, children: r });
        },
        Ma = function (e) {
          var t = e.id,
            r = e.children,
            n = ie().theme.sidebar.item;
          return (0, C.jsx)("span", {
            "data-testid": "flowbite-sidebar-item-content",
            id: "flowbite-sidebar-item-".concat(t),
            className: te()(n.content.base),
            children: r,
          });
        },
        Oa = (0, e.forwardRef)(function (t, r) {
          var n,
            a,
            o,
            l,
            i,
            s = t.active,
            u = t.as,
            c = void 0 === u ? "a" : u,
            d = t.children,
            f = t.className,
            p = t.icon,
            g = t.label,
            h = t.labelColor,
            m = void 0 === h ? "info" : h,
            b = t.theme,
            v = void 0 === b ? {} : b,
            y = Z(t, za),
            x = (0, e.useId)(),
            k = wa().isCollapsed,
            w = (function () {
              var t = (0, e.useContext)(Na);
              if (!t)
                throw new Error(
                  "useSidebarItemContext should be used within the SidebarItemContext provider!"
                );
              return t;
            })().isInsideCollapse,
            N = ae(ie().theme.sidebar.item, v);
          return (0,
          C.jsx)(Ta, { id: x, isCollapsed: k, tooltipChildren: d, children: (0, C.jsxs)(c, J(J({ "aria-labelledby": "flowbite-sidebar-item-".concat(x), ref: r, className: te()(N.base, s && N.active, !k && w && (null === (n = N.collapsed) || void 0 === n ? void 0 : n.insideCollapse), f) }, y), {}, { children: [p && (0, C.jsx)(p, { "aria-hidden": !0, "data-testid": "flowbite-sidebar-item-icon", className: te()(null === (a = N.icon) || void 0 === a ? void 0 : a.base, s && (null === (o = N.icon) || void 0 === o ? void 0 : o.active)) }), k && !p && (0, C.jsx)("span", { className: null === (l = N.collapsed) || void 0 === l ? void 0 : l.noIcon, children: null !== (i = d.charAt(0).toLocaleUpperCase()) && void 0 !== i ? i : "?" }), !k && (0, C.jsx)(Ma, { id: x, children: d }), !k && g && (0, C.jsx)(Pe, { color: m, "data-testid": "flowbite-sidebar-label", hidden: k, className: N.label, children: g })] })) });
        });
      Oa.displayName = "Sidebar.Item";
      var Ra = Oa,
        Ia = ["children", "className"],
        Da = function (e) {
          var t = e.children,
            r = e.className,
            n = Z(e, Ia),
            a = ie().theme.sidebar.itemGroup;
          return (0, C.jsx)(
            "ul",
            J(
              J(
                {
                  "data-testid": "flowbite-sidebar-item-group",
                  className: te()(a, r),
                },
                n
              ),
              {},
              {
                children: (0, C.jsx)(Na.Provider, {
                  value: { isInsideCollapse: !1 },
                  children: t,
                }),
              }
            )
          );
        };
      Da.displayName = "Sidebar.ItemGroup";
      var Fa = Da,
        Aa = ["children", "className"],
        Ba = function (e) {
          var t = e.children,
            r = e.className,
            n = Z(e, Aa),
            a = ie().theme.sidebar.items;
          return (0, C.jsx)(
            "div",
            J(
              J(
                {
                  className: te()(a, r),
                  "data-testid": "flowbite-sidebar-items",
                },
                n
              ),
              {},
              { children: t }
            )
          );
        };
      Ba.displayName = "Sidebar.Items";
      var Ha = Ba,
        Ua = ["children", "className", "href", "img", "imgAlt", "theme"],
        Va = function (t) {
          var r = t.children,
            n = t.className,
            a = t.href,
            o = t.img,
            l = t.imgAlt,
            i = void 0 === l ? "" : l,
            s = t.theme,
            u = void 0 === s ? {} : s,
            c = Z(t, Ua),
            d = (0, e.useId)(),
            f = wa().isCollapsed,
            p = ae(ie().theme.sidebar.logo, u);
          return (0, C.jsxs)(
            "a",
            J(
              J(
                {
                  "aria-labelledby": "flowbite-sidebar-logo-".concat(d),
                  href: a,
                  className: te()(p.base, n),
                },
                c
              ),
              {},
              {
                children: [
                  (0, C.jsx)("img", { alt: i, src: o, className: p.img }),
                  (0, C.jsx)("span", {
                    className: p.collapsed[f ? "on" : "off"],
                    id: "flowbite-sidebar-logo-".concat(d),
                    children: r,
                  }),
                ],
              }
            )
          );
        };
      Va.displayName = "Sidebar.Logo";
      var Wa = Va,
        $a = [
          "children",
          "collapseBehavior",
          "collapsed",
          "theme",
          "className",
        ],
        Ka = function (e) {
          var t = e.children,
            r = e.collapseBehavior,
            n = void 0 === r ? "collapse" : r,
            a = e.collapsed,
            o = void 0 !== a && a,
            l = e.theme,
            i = void 0 === l ? {} : l,
            s = e.className,
            u = Z(e, $a),
            c = ae(ie().theme.sidebar, i);
          return (0, C.jsx)(ka.Provider, {
            value: { isCollapsed: o },
            children: (0, C.jsx)(
              "aside",
              J(
                J(
                  {
                    "aria-label": "Sidebar",
                    hidden: o && "hide" === n,
                    className: te()(
                      c.root.base,
                      c.root.collapsed[o ? "on" : "off"],
                      s
                    ),
                  },
                  u
                ),
                {},
                {
                  children: (0, C.jsx)("div", {
                    className: c.root.inner,
                    children: t,
                  }),
                }
              )
            ),
          });
        };
      Ka.displayName = "Sidebar";
      Object.assign(Ka, {
        Collapse: Ca,
        CTA: _a,
        Item: Ra,
        Items: Ha,
        ItemGroup: Fa,
        Logo: Wa,
      });
      var Qa = function (e) {
        var t = e.children,
          r = e.className;
        return (0, C.jsx)("div", { className: r, children: t });
      };
      Qa.displayName = "Tabs.Item";
      var qa = ["children", "className", "onActiveTabChange", "style", "theme"],
        Ga = (0, e.forwardRef)(function (t, r) {
          var n = t.children,
            a = t.className,
            o = t.onActiveTabChange,
            i = t.style,
            s = void 0 === i ? "default" : i,
            u = t.theme,
            c = void 0 === u ? {} : u,
            d = Z(t, qa),
            f = ae(ie().theme.tab, c),
            p = (0, e.useId)(),
            g = (0, e.useMemo)(
              function () {
                return e.Children.map(n, function (e) {
                  return e.props;
                });
              },
              [n]
            ),
            h = (0, e.useRef)([]),
            m = l(
              (0, e.useState)(
                Math.max(
                  0,
                  g.findIndex(function (e) {
                    return e.active;
                  })
                )
              ),
              2
            ),
            b = m[0],
            v = m[1],
            y = l(
              (0, e.useState)(
                Math.max(
                  0,
                  g.findIndex(function (e) {
                    return e.active;
                  })
                )
              ),
              2
            ),
            x = y[0],
            k = y[1],
            w = function (e) {
              v(e), o && o(e);
            },
            N = f.tablist.tabitem.styles[s];
          return (
            (0, e.useEffect)(
              function () {
                var e;
                null === (e = h.current[x]) || void 0 === e || e.focus();
              },
              [x]
            ),
            (0, e.useImperativeHandle)(r, function () {
              return { setActiveTab: w };
            }),
            (0, C.jsxs)("div", {
              className: te()(f.base, a),
              children: [
                (0, C.jsx)(
                  "div",
                  J(
                    J(
                      {
                        "aria-label": "Tabs",
                        role: "tablist",
                        className: te()(f.tablist.base, f.tablist.styles[s], a),
                      },
                      d
                    ),
                    {},
                    {
                      children: g.map(function (e, t) {
                        var r;
                        return (0, C.jsxs)(
                          "button",
                          {
                            type: "button",
                            "aria-controls": ""
                              .concat(p, "-tabpanel-")
                              .concat(t),
                            "aria-selected": t === b,
                            className: te()(
                              f.tablist.tabitem.base,
                              J({}, N),
                              ((r = {}),
                              Y(r, N.active.on, t === b),
                              Y(r, N.active.off, t !== b && !e.disabled),
                              r)
                            ),
                            disabled: e.disabled,
                            id: "".concat(p, "-tab-").concat(t),
                            onClick: function () {
                              return (function (e) {
                                var t = e.target;
                                w(t), k(t);
                              })({ target: t });
                            },
                            onKeyDown: function (e) {
                              return (function (e) {
                                var t = e.event,
                                  r = e.target;
                                "ArrowLeft" === t.key && k(Math.max(0, x - 1)),
                                  "ArrowRight" === t.key &&
                                    k(Math.min(g.length - 1, x + 1)),
                                  "Enter" === t.key && (w(r), k(r));
                              })({ event: e, target: t });
                            },
                            ref: function (e) {
                              return (h.current[t] = e);
                            },
                            role: "tab",
                            tabIndex: t === x ? 0 : -1,
                            children: [
                              e.icon &&
                                (0, C.jsx)(e.icon, {
                                  className: f.tablist.tabitem.icon,
                                }),
                              e.title,
                            ],
                          },
                          t
                        );
                      }),
                    }
                  )
                ),
                (0, C.jsx)("div", {
                  children: g.map(function (e, t) {
                    return (0,
                    C.jsx)("div", { "aria-labelledby": "".concat(p, "-tab-").concat(t), className: f.tabpanel, hidden: t !== b, id: "".concat(p, "-tabpanel-").concat(t), role: "tabpanel", tabIndex: 0, children: e.children }, t);
                  }),
                }),
              ],
            })
          );
        });
      Ga.displayName = "Tabs.Group";
      var Ya = ["children"],
        Xa = function (e) {
          var t = e.children,
            r = Z(e, Ya);
          return (0, C.jsx)("tbody", J(J({}, r), {}, { children: t }));
        },
        Ja = ["children", "className", "theme"],
        Za = function (e) {
          var t = e.children,
            r = e.className,
            n = e.theme,
            a = void 0 === n ? {} : n,
            o = Z(e, Ja),
            l = ae(ie().theme.table.cell, a);
          return (0, C.jsx)(
            "td",
            J(J({ className: te()(l.base, r) }, o), {}, { children: t })
          );
        },
        eo = (0, e.createContext)(void 0);
      var to = ["children", "className", "theme"],
        ro = function (e) {
          var t = e.children,
            r = e.className,
            n = e.theme,
            a = void 0 === n ? {} : n,
            o = Z(e, to),
            l = ae(ie().theme.table, a);
          return (0, C.jsx)(
            "thead",
            J(
              J({ className: te()(l.head.base, r) }, o),
              {},
              { children: (0, C.jsx)("tr", { children: t }) }
            )
          );
        },
        no = ["children", "className", "theme"],
        ao = function (e) {
          var t = e.children,
            r = e.className,
            n = e.theme,
            a = void 0 === n ? {} : n,
            o = Z(e, no),
            l = ae(ie().theme.table.head.cell, a);
          return (0, C.jsx)(
            "th",
            J(J({ className: te()(l.base, r) }, o), {}, { children: t })
          );
        },
        oo = ["children", "className", "theme"],
        lo = function (t) {
          var r = t.children,
            n = t.className,
            a = t.theme,
            o = void 0 === a ? {} : a,
            l = Z(t, oo),
            i = (function () {
              var t = (0, e.useContext)(eo);
              if (!t)
                throw new Error(
                  "useTableContext should be used within the TableContext provider!"
                );
              return t;
            })(),
            s = i.hoverable,
            u = i.striped,
            c = ae(ie().theme.table.row, o);
          return (0, C.jsx)(
            "tr",
            J(
              J(
                {
                  "data-testid": "table-row-element",
                  className: te()(u && c.striped, s && c.hovered, n),
                },
                l
              ),
              {},
              { children: r }
            )
          );
        },
        io = ["children", "className", "hoverable", "striped", "theme"],
        so = function (e) {
          var t = e.children,
            r = e.className,
            n = e.hoverable,
            a = e.striped,
            o = e.theme,
            l = void 0 === o ? {} : o,
            i = Z(e, io),
            s = ae(ie().theme.table, l);
          return (0, C.jsx)("div", {
            "data-testid": "table-element",
            className: te()(s.root.wrapper),
            children: (0, C.jsx)(eo.Provider, {
              value: { striped: a, hoverable: n },
              children: (0, C.jsx)(
                "table",
                J(
                  J({ className: te()(s.root.base, r) }, i),
                  {},
                  { children: t }
                )
              ),
            }),
          });
        };
      (so.displayName = "Table"),
        (ro.displayName = "Table.Head"),
        (Xa.displayName = "Table.Body"),
        (lo.displayName = "Table.Row"),
        (Za.displayName = "Table.Cell"),
        (ao.displayName = "Table.HeadCell");
      Object.assign(so, {
        Head: ro,
        Body: Xa,
        Row: lo,
        Cell: Za,
        HeadCell: ao,
      });
      var uo = ["className", "color", "helperText", "shadow", "theme"],
        co = (0, e.forwardRef)(function (e, t) {
          var r = e.className,
            n = e.color,
            a = void 0 === n ? "gray" : n,
            o = e.helperText,
            l = e.shadow,
            i = e.theme,
            s = void 0 === i ? {} : i,
            u = Z(e, uo),
            c = ae(ie().theme.textarea, s);
          return (0,
          C.jsxs)(C.Fragment, { children: [(0, C.jsx)("textarea", J({ ref: t, className: te()(c.base, c.colors[a], c.withShadow[l ? "on" : "off"], r) }, u)), o && (0, C.jsx)(sn, { color: a, children: o })] });
        });
      co.displayName = "Textarea";
      var fo = [
          "addon",
          "className",
          "color",
          "helperText",
          "icon",
          "rightIcon",
          "shadow",
          "sizing",
          "theme",
        ],
        po = (0, e.forwardRef)(function (e, t) {
          var r = e.addon,
            n = e.className,
            a = e.color,
            o = void 0 === a ? "gray" : a,
            l = e.helperText,
            i = e.icon,
            s = e.rightIcon,
            u = e.shadow,
            c = e.sizing,
            d = void 0 === c ? "md" : c,
            f = e.theme,
            p = void 0 === f ? {} : f,
            g = Z(e, fo),
            h = ae(ie().theme.textInput, p);
          return (0,
          C.jsxs)(C.Fragment, { children: [(0, C.jsxs)("div", { className: te()(h.base, n), children: [r && (0, C.jsx)("span", { className: h.addon, children: r }), (0, C.jsxs)("div", { className: h.field.base, children: [i && (0, C.jsx)("div", { className: h.field.icon.base, children: (0, C.jsx)(i, { className: h.field.icon.svg }) }), s && (0, C.jsx)("div", { "data-testid": "right-icon", className: h.field.rightIcon.base, children: (0, C.jsx)(s, { className: h.field.rightIcon.svg }) }), (0, C.jsx)("input", J(J({ className: te()(h.field.input.base, h.field.input.colors[o], h.field.input.withIcon[i ? "on" : "off"], h.field.input.withAddon[r ? "on" : "off"], h.field.input.withShadow[u ? "on" : "off"], h.field.input.sizes[d]) }, g), {}, { ref: t }))] })] }), l && (0, C.jsx)(sn, { color: o, children: l })] });
        });
      po.displayName = "TextInput";
      var go = ["children", "className", "theme"],
        ho = function (e) {
          var t = e.children,
            r = e.className,
            n = e.theme,
            a = void 0 === n ? {} : n,
            o = Z(e, go),
            l = ae(ie().theme.timeline.item.content, a).body;
          return (0, C.jsx)(
            "div",
            J(J({ className: te()(l, r) }, o), {}, { children: t })
          );
        },
        mo = (0, e.createContext)(void 0);
      function bo() {
        var t = (0, e.useContext)(mo);
        if (!t)
          throw new Error(
            "useTimelineContext should be used within the TimelineContext providor!"
          );
        return t;
      }
      var vo = ["children", "className", "theme"],
        yo = function (e) {
          var t = e.children,
            r = e.className,
            n = e.theme,
            a = void 0 === n ? {} : n,
            o = Z(e, vo),
            l = ae(ie().theme.timeline.item.content, a),
            i = bo().horizontal;
          return (0, C.jsx)(
            "div",
            J(
              J(
                {
                  "data-testid": "timeline-content",
                  className: te()(i && l.root.base, r),
                },
                o
              ),
              {},
              { children: t }
            )
          );
        },
        xo = ["children", "className", "theme"],
        ko = function (e) {
          var t = e.children,
            r = e.className,
            n = e.theme,
            a = void 0 === n ? {} : n,
            o = Z(e, xo),
            l = ae(ie().theme.timeline.item, a),
            i = bo().horizontal;
          return (0, C.jsx)(
            "li",
            J(
              J(
                {
                  "data-testid": "timeline-item",
                  className: te()(
                    i && l.root.horizontal,
                    !i && l.root.vertical,
                    r
                  ),
                },
                o
              ),
              {},
              { children: t }
            )
          );
        },
        wo = ["children", "className", "icon", "theme"],
        No = function (e) {
          var t = e.children,
            r = e.className,
            n = e.icon,
            a = e.theme,
            o = void 0 === a ? {} : a,
            l = Z(e, wo),
            i = ae(ie().theme.timeline.item.point, o),
            s = bo().horizontal;
          return (0, C.jsxs)(
            "div",
            J(
              J(
                {
                  "data-testid": "timeline-point",
                  className: te()(s && i.horizontal, !s && i.vertical, r),
                },
                l
              ),
              {},
              {
                children: [
                  t,
                  n
                    ? (0, C.jsx)("span", {
                        className: te()(i.marker.icon.wrapper),
                        children: (0, C.jsx)(n, {
                          "aria-hidden": !0,
                          className: te()(i.marker.icon.base),
                        }),
                      })
                    : (0, C.jsx)("div", {
                        className: te()(
                          s && i.marker.base.horizontal,
                          !s && i.marker.base.vertical
                        ),
                      }),
                  s && (0, C.jsx)("div", { className: te()(i.line) }),
                ],
              }
            )
          );
        },
        So = ["children", "className", "theme"],
        jo = function (e) {
          var t = e.children,
            r = e.className,
            n = e.theme,
            a = void 0 === n ? {} : n,
            o = Z(e, So),
            l = ae(ie().theme.timeline.item.content, a).time;
          return (0, C.jsx)(
            "time",
            J(J({ className: te()(l, r) }, o), {}, { children: t })
          );
        },
        Co = ["as", "children", "className", "theme"],
        Eo = function (e) {
          var t = e.as,
            r = void 0 === t ? "h3" : t,
            n = e.children,
            a = e.className,
            o = e.theme,
            l = void 0 === o ? {} : o,
            i = Z(e, Co),
            s = ae(ie().theme.timeline.item.content, l).title;
          return (0, C.jsx)(
            r,
            J(J({ className: te()(s, a) }, i), {}, { children: n })
          );
        },
        Po = ["children", "className", "horizontal", "theme"],
        _o = function (e) {
          var t = e.children,
            r = e.className,
            n = e.horizontal,
            a = e.theme,
            o = void 0 === a ? {} : a,
            l = Z(e, Po),
            i = ae(ie().theme.timeline, o);
          return (0, C.jsx)(mo.Provider, {
            value: { horizontal: n },
            children: (0, C.jsx)(
              "ol",
              J(
                J(
                  {
                    "data-testid": "timeline-component",
                    className: te()(
                      n && i.root.direction.horizontal,
                      !n && i.root.direction.vertical,
                      r
                    ),
                  },
                  l
                ),
                {},
                { children: t }
              )
            ),
          });
        };
      (_o.displayName = "Timeline"),
        (ko.displayName = "Timeline.Item"),
        (No.displayName = "Timeline.Point"),
        (yo.displayName = "Timeline.Content"),
        (jo.displayName = "Timeline.Time"),
        (Eo.displayName = "Timeline.Title"),
        (ho.displayName = "Timeline.Body");
      Object.assign(_o, {
        Item: ko,
        Point: No,
        Content: yo,
        Time: jo,
        Title: Eo,
        Body: ho,
      });
      var zo = (0, e.createContext)(void 0);
      var To = ["className", "theme", "xIcon"],
        Lo = function (t) {
          var r = t.className,
            n = t.theme,
            a = void 0 === n ? {} : n,
            o = t.xIcon,
            l = void 0 === o ? F : o,
            i = Z(t, To),
            s = ae(ie().theme.toast.toggle, a),
            u = (function () {
              var t = (0, e.useContext)(zo);
              if (!t)
                throw new Error(
                  "useToastContext should be used within the ToastContext provider!"
                );
              return t;
            })(),
            c = u.duration,
            d = u.isClosed,
            f = u.isRemoved,
            p = u.setIsClosed,
            g = u.setIsRemoved;
          return (0, C.jsx)(
            "button",
            J(
              J(
                {
                  "aria-label": "Close",
                  onClick: function () {
                    p(!d),
                      setTimeout(function () {
                        return g(!f);
                      }, c);
                  },
                  type: "button",
                  className: te()(s.base, r),
                },
                i
              ),
              {},
              {
                children: (0, C.jsx)(l, {
                  "aria-hidden": !0,
                  className: s.icon,
                }),
              }
            )
          );
        },
        Mo = ["children", "className", "duration", "theme"],
        Oo = {
          75: "duration-75",
          100: "duration-100",
          150: "duration-150",
          200: "duration-200",
          300: "duration-300",
          500: "duration-500",
          700: "duration-700",
          1e3: "duration-1000",
        },
        Ro = function (t) {
          var r = t.children,
            n = t.className,
            a = t.duration,
            o = void 0 === a ? 300 : a,
            i = t.theme,
            s = void 0 === i ? {} : i,
            u = Z(t, Mo),
            c = l((0, e.useState)(!1), 2),
            d = c[0],
            f = c[1],
            p = l((0, e.useState)(!1), 2),
            g = p[0],
            h = p[1],
            m = ae(ie().theme.toast, s);
          return (0, C.jsx)(zo.Provider, {
            value: {
              duration: o,
              isClosed: d,
              isRemoved: g,
              setIsClosed: f,
              setIsRemoved: h,
            },
            children: (0, C.jsx)(
              "div",
              J(
                J(
                  {
                    "data-testid": "flowbite-toast",
                    className: te()(
                      m.root.base,
                      Oo[o],
                      Y({}, m.root.closed, d),
                      Y({}, m.root.removed, g),
                      n
                    ),
                  },
                  u
                ),
                {},
                { children: r }
              )
            ),
          });
        };
      (Ro.displayName = "Toast"), (Lo.displayName = "Toast.Toggle");
      Object.assign(Ro, { Toggle: Lo });
      var Io = JSON.parse(
        '[{"id":"1","title":"Konsep Dasar Web, Arsitektur Web, Server dan Client Side Scripting","pertemuan":"Pertama","description":{"detail":"Tugas-1: Menyusun ringkasan dalam bentuk makalah tentang topik - topik utama pada pemrograman web","ketentuan":["Laporan (5 - 10 Halaman)"]},"deadline":"Kamis, 30 Maret 2023, 12:00","link":{"pengumpulan":"https://oase.unud.ac.id/mod/assign/view.php?id=346958","template tugas":"https://oase.unud.ac.id/mod/resource/view.php?id=346959"},"status":"Proses","result":""},{"id":"2","title":"HTML (Hipertext Markup Language), tag-tag dasar HTML, tabel, form, frame pada html","pertemuan":"Kedua, Ketiga","description":{"detail":"Tugas 2. Membuat halaman index dengan HTML","ketentuan":["Laporan (5 - 10 Halaman)","Link Website"]},"deadline":"Jumat, 16 Juni 2023, 12:00","link":{"pengumpulan":"","template tugas":""},"status":"Belum Dikerjakan"},{"id":"3","title":"CSS (Cascading Style Sheet) dan Java Script (JS)","pertemuan":"Keempat, Kelima","description":{"detail":"","ketentuan":["hehe","haha","hehe","haha","hehe","haha","hehe","haha"]},"deadline date":"","link":{"pengumpulan":"","template tugas":""},"status":"Belum Dikerjakan"},{"id":"4","title":"Bahasa Pemrograman Berbasis web PHP (PHP Hypertext Processor)","pertemuan":"Keenam, Ketujuh","description":{"detail":"","ketentuan":""},"deadline date":"","link":{"pengumpulan":"","template tugas":""},"status":"Belum Dikerjakan"},{"id":"5","title":"Ulangan Tengah Semester","pertemuan":"Kedelapan","description":{"detail":"","ketentuan":""},"deadline date":"","link":{"pengumpulan":"","template tugas":""},"status":"Belum Dikerjakan"},{"id":"6","title":"Penanganan Form dengan HTML dan PHP (POST/GET)","pertemuan":"Kesebilan, Kesepuluh","description":{"detail":"","ketentuan":""},"deadline date":"","link":{"pengumpulan":"","template tugas":""},"status":"Belum Dikerjakan"},{"id":"7","title":"Konsep Session dan Cookies Pada PHP","pertemuan":"Kesebelas","description":{"detail":"","ketentuan":""},"deadline date":"","link":{"pengumpulan":"","template tugas":""},"status":"Belum Dikerjakan"},{"id":"8","title":"Konsep Basis data dalam Pemrograman web dengan PHP dan MySql","pertemuan":"Duabelas","description":{"detail":"","ketentuan":""},"deadline date":"","link":{"pengumpulan":"","template tugas":""},"status":"Belum Dikerjakan"},{"id":"9","title":"Studi Kasus Aplikasi berbasis web","pertemuan":"Tigabelas","description":{"detail":"","ketentuan":""},"deadline date":"","link":{"pengumpulan":"","template tugas":""},"status":"Belum Dikerjakan"},{"id":"10","title":"Project","pertemuan":"Empatbelas, Limabelas","description":{"detail":"","ketentuan":""},"deadline date":"","link":{"pengumpulan":"","template tugas":""},"status":"Belum Dikerjakan"},{"id":"11","title":"Ulangan Akhir Semester","pertemuan":"Enambelas","description":{"detail":"","ketentuan":""},"deadline date":"","link":{"pengumpulan":"","template tugas":""},"status":"Belum Dikerjakan"}]'
      );
      function Do(e) {
        return f({
          tag: "svg",
          attr: { viewBox: "0 0 1024 1024" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z",
              },
            },
            {
              tag: "path",
              attr: {
                d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z",
              },
            },
          ],
        })(e);
      }
      function Fo(e) {
        return f({
          tag: "svg",
          attr: { viewBox: "0 0 1024 1024" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0 0 42 42h216v494zM528.1 472h-32.2c-5.5 0-10.3 3.7-11.6 9.1L434.6 680l-46.1-198.7c-1.3-5.4-6.1-9.3-11.7-9.3h-35.4a12.02 12.02 0 0 0-11.6 15.1l74.2 276c1.4 5.2 6.2 8.9 11.6 8.9h32c5.4 0 10.2-3.6 11.6-8.9l52.8-197 52.8 197c1.4 5.2 6.2 8.9 11.6 8.9h31.8c5.4 0 10.2-3.6 11.6-8.9l74.4-276a12.04 12.04 0 0 0-11.6-15.1H647c-5.6 0-10.4 3.9-11.7 9.3l-45.8 199.1-49.8-199.3c-1.3-5.4-6.1-9.1-11.6-9.1z",
              },
            },
          ],
        })(e);
      }
      function Ao(e) {
        return f({
          tag: "svg",
          attr: { viewBox: "0 0 1024 1024" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M574 665.4a8.03 8.03 0 0 0-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 0 0-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 0 0 0 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 0 0 0 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 0 0-11.3 0L372.3 598.7a8.03 8.03 0 0 0 0 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z",
              },
            },
          ],
        })(e);
      }
      function Bo(e) {
        return f({
          tag: "svg",
          attr: { viewBox: "0 0 1024 1024" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M464 512a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm200 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm-400 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 0 0-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 0 0-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 0 0 112 714v152a46 46 0 0 0 46 46h152.1A449.4 449.4 0 0 0 510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 0 0 142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z",
              },
            },
          ],
        })(e);
      }
      var Ho = function () {
          return (0, C.jsx)(C.Fragment, {
            children: (0, C.jsx)(ve, {
              class: "w-full",
              alwaysOpen: !0,
              flush: !1,
              children: Io.map(function (e) {
                return (0, C.jsxs)(ve.Panel, {
                  children: [
                    (0, C.jsx)(ve.Title, { children: e.title }),
                    (0, C.jsxs)(ve.Content, {
                      children: [
                        (0, C.jsxs)("section", {
                          className:
                            "flex items-center justify-start gap-3 flex-wrap",
                          children: [
                            "Proses" === e.status
                              ? (0, C.jsx)("div", {
                                  className: "flex flex-wrap gap-2",
                                  children: (0, C.jsxs)(Pe, {
                                    color: "warning",
                                    children: [
                                      (0, C.jsx)(j, {
                                        className: "text-sm inline",
                                      }),
                                      " ",
                                      "Status ",
                                      e.status,
                                    ],
                                  }),
                                })
                              : "Selesai" === e.status
                              ? (0, C.jsx)("div", {
                                  className: "flex flex-wrap gap-2",
                                  children: (0, C.jsxs)(Pe, {
                                    color: "success",
                                    children: [
                                      (0, C.jsx)(j, {
                                        className: "text-sm inline",
                                      }),
                                      " ",
                                      "Status ",
                                      e.status,
                                    ],
                                  }),
                                })
                              : (0, C.jsx)("div", {
                                  className: "flex flex-wrap gap-2",
                                  children: (0, C.jsxs)(Pe, {
                                    color: "failure",
                                    children: [
                                      (0, C.jsx)(j, {
                                        className: "text-sm inline",
                                      }),
                                      " ",
                                      "Status ",
                                      e.status,
                                    ],
                                  }),
                                }),
                            "" !== e.deadline
                              ? (0, C.jsx)("div", {
                                  className: "flex flex-wrap gap-2",
                                  children: (0, C.jsxs)(Pe, {
                                    color: "failure",
                                    children: [
                                      (0, C.jsx)(x, {
                                        className: "inline text-lg",
                                      }),
                                      " Deadline",
                                      " ",
                                      e.deadline,
                                    ],
                                  }),
                                })
                              : "",
                          ],
                        }),
                        (0, C.jsxs)("section", {
                          className:
                            "w-full p-3 bg-violet-100 dark:bg-slate-800 my-3 rounded-lg",
                          children: [
                            (0, C.jsx)("p", {
                              className: "text-violet-500 text-xs",
                              children: "Detail tugas",
                            }),
                            (0, C.jsx)("p", {
                              className:
                                "text-sm dark:text-slate-50 text-slate-700 pt-3 py-1",
                              children: e.description.detail,
                            }),
                            "" !== e.description.ketentuan
                              ? (0, C.jsx)("ul", {
                                  className:
                                    "list-disc mx-5 text-xs text-slate-700 dark:text-slate-300",
                                  children: e.description.ketentuan.map(
                                    function (e) {
                                      return (0, C.jsx)("li", {
                                        style: { fontFamily: "qsand" },
                                        children: e,
                                      });
                                    }
                                  ),
                                })
                              : "",
                          ],
                        }),
                        (0, C.jsxs)("section", {
                          className:
                            "w-full flex gap-5 justify-start items-center flex-wrap",
                          children: [
                            (0, C.jsxs)(Be.Group, {
                              children: [
                                (0, C.jsxs)(Be, {
                                  color: "gray",
                                  href: e.link.pengumpulan,
                                  target: "_blank",
                                  children: [
                                    (0, C.jsx)(Ao, { className: "mr-1" }),
                                    "Link Pengumpulan",
                                  ],
                                }),
                                (0, C.jsxs)(Be, {
                                  color: "gray",
                                  href: e.link["template tugas"],
                                  target: "_blank",
                                  children: [
                                    (0, C.jsx)(Fo, { className: "mr-1" }),
                                    "Template Laporan",
                                  ],
                                }),
                              ],
                            }),
                            "Selesai" === e.status
                              ? (0, C.jsx)("a", {
                                  href: e.result,
                                  target: "_blank",
                                  children: (0, C.jsxs)(Be, {
                                    class:
                                      "bg-violet-400 text-slate-100 rounded-lg",
                                    children: [
                                      (0, C.jsx)(Do, { className: "lg:mr-1" }),
                                      " Download atau lihat hasil disini",
                                    ],
                                  }),
                                })
                              : "",
                          ],
                        }),
                      ],
                    }),
                  ],
                });
              }),
            }),
          });
        },
        Uo = function () {
          return (0, C.jsx)("section", {
            id: "__task-root",
            className:
              "w-full dark:bg-slate-700 py-24 flex justify-center items-center",
            children: (0, C.jsxs)("section", {
              id: "__task-wrapper",
              className:
                "h-full w-11/12 flex flex-col items-center justify-center lg:w-9/12 xl:w-8/12",
              children: [
                (0, C.jsxs)("p", {
                  id: "__task-header",
                  className:
                    "text-xl lg:text-3xl pb-8 text-violet-500 dark:text-slate-50 flex items-center justify-center gap-2",
                  children: [
                    (0, C.jsx)(y, { className: "inline" }),
                    "Daftar Tugas",
                  ],
                }),
                (0, C.jsxs)(on, {
                  label: "Tampilkan dalam bentuk",
                  dismissOnClick: !1,
                  class: "bg-violet-500 text-slate-50 rounded-xl",
                  children: [
                    (0, C.jsx)(on.Item, {
                      onClick: function () {
                        alert("Hehe");
                      },
                      children: "Accordion",
                    }),
                    (0, C.jsx)(on.Item, { children: "Kartu" }),
                    (0, C.jsx)(on.Item, { children: "Tabel" }),
                  ],
                }),
                (0, C.jsx)("section", {
                  id: "__task-data",
                  className: "w-full p-10 lg:p-16",
                  children: (0, C.jsx)(Ho, {}),
                }),
              ],
            }),
          });
        };
      function Vo(e) {
        return f({
          tag: "svg",
          attr: { viewBox: "0 0 24 24" },
          child: [
            {
              tag: "g",
              attr: {},
              child: [
                { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
                {
                  tag: "path",
                  attr: {
                    d: "M22 20.007a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V19h18V7.3l-8 7.2-10-9V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16.007zM4.434 5L12 11.81 19.566 5H4.434zM0 15h8v2H0v-2zm0-5h5v2H0v-2z",
                  },
                },
              ],
            },
          ],
        })(e);
      }
      var Wo = r.p + "static/media/3d-message.d650c372ebcb5723d1a0.png",
        $o = function () {
          return (0, C.jsx)(C.Fragment, {
            children: (0, C.jsx)("section", {
              id: "__contact-root",
              className:
                "bg-violet-400 dark:bg-slate-800 py-24 w-full flex items-center justify-center",
              children: (0, C.jsxs)("section", {
                id: "__contact-wrapper",
                className:
                  "h-full text-slate-50 w-11/12 flex flex-col-reverse lg:px-20 lg:flex-row items-center justify-center lg:w-9/12 xl:w-8/12",
                children: [
                  (0, C.jsx)("div", {
                    className: "form w-full lg:w-1/2 h-auto lg:h-full",
                    children: (0, C.jsxs)("form", {
                      children: [
                        (0, C.jsxs)("div", {
                          class: "mb-6",
                          children: [
                            (0, C.jsx)("label", {
                              for: "email-address-icon",
                              class:
                                "block mb-2 text-sm font-medium text-slate-50 dark:text-white",
                              children: "Nama Lengkap",
                            }),
                            (0, C.jsxs)("div", {
                              class: "relative",
                              children: [
                                (0, C.jsx)("div", {
                                  class:
                                    "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",
                                  children: (0, C.jsx)(w, {
                                    className: "text-slate-500",
                                  }),
                                }),
                                (0, C.jsx)("input", {
                                  type: "text",
                                  id: "email-address-icon",
                                  class:
                                    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500",
                                  placeholder: "Masukkan Nama lengkap",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, C.jsxs)("div", {
                          class: "mb-6",
                          children: [
                            (0, C.jsx)("label", {
                              for: "email-address-icon",
                              class:
                                "block mb-2 text-sm font-medium text-slate-50 dark:text-white",
                              children: "Email",
                            }),
                            (0, C.jsxs)("div", {
                              class: "relative",
                              children: [
                                (0, C.jsx)("div", {
                                  class:
                                    "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",
                                  children: (0, C.jsxs)("svg", {
                                    "aria-hidden": "true",
                                    class:
                                      "w-5 h-5 text-gray-500 dark:text-gray-400",
                                    fill: "currentColor",
                                    viewBox: "0 0 20 20",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [
                                      (0, C.jsx)("path", {
                                        d: "M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z",
                                      }),
                                      (0, C.jsx)("path", {
                                        d: "M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, C.jsx)("input", {
                                  type: "email",
                                  id: "email-address-icon",
                                  class:
                                    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500",
                                  placeholder: "name@mail.com",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, C.jsxs)("div", {
                          class: "mb-6",
                          children: [
                            (0, C.jsx)("label", {
                              for: "message",
                              class:
                                "block mb-2 text-sm font-medium text-slate-50 dark:text-white",
                              children: "Pesan",
                            }),
                            (0, C.jsx)("textarea", {
                              id: "message",
                              rows: "4",
                              class:
                                "block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-violet-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500",
                              placeholder: "Tulis pesan disini",
                            }),
                          ],
                        }),
                        (0, C.jsxs)("button", {
                          type: "submit",
                          class:
                            "text-violet-500 bg-slate-50 hover:bg-violet-500 hover:text-slate-50 flex items-center justify-center gap-1 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-violet-500 dark:text-slate-50 dark:hover:bg-slate-50 dark:hover:text-slate-700 dark:focus:ring-blue-800",
                          children: [(0, C.jsx)(Vo, {}), " Kirim"],
                        }),
                      ],
                    }),
                  }),
                  (0, C.jsxs)("div", {
                    className:
                      "logo w-full lg:w-1/2 h-auto flex flex-col justify-center items-center lg:h-full",
                    children: [
                      (0, C.jsxs)("p", {
                        id: "__member-header",
                        className:
                          "text-xl lg:text-3xl pb-8 flex items-center justify-center gap-2",
                        children: [
                          (0, C.jsx)(Bo, { className: "inline" }),
                          "Hubungi Kami",
                        ],
                      }),
                      (0, C.jsx)("img", {
                        src: Wo,
                        alt: "",
                        className: "w-9/12 md:w-4/12 lg:w-7/12",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        Ko = function () {
          return (0, C.jsx)(C.Fragment, {
            children: (0, C.jsx)("section", {
              id: "__footer-root",
              className:
                "bg-violet-400 dark:bg-slate-800 py-10 w-full flex items-center justify-center",
              children: (0, C.jsx)("section", {
                id: "__member-wrapper",
                className:
                  "h-full text-slate-50 w-11/12 flex flex-col items-center justify-center lg:w-9/12 xl:w-8/12",
                children: (0, C.jsx)("footer", {
                  class: "bg-transparent w-full",
                  children: (0, C.jsxs)("div", {
                    class: "mx-auto w-full container p-4 sm:p-6",
                    children: [
                      (0, C.jsxs)("div", {
                        class: "md:flex md:justify-between",
                        children: [
                          (0, C.jsx)("div", {
                            class: "mb-6 md:mb-0",
                            children: (0, C.jsxs)("a", {
                              href: "https://flowbite.com/",
                              class: "flex items-center",
                              children: [
                                (0, C.jsx)("img", {
                                  src: "https://flowbite.com/docs/images/logo.svg",
                                  class: "h-8 mr-3",
                                  alt: "FlowBite Logo",
                                }),
                                (0, C.jsx)("span", {
                                  class:
                                    "self-center text-2xl font-semibold whitespace-nowrap dark:text-white",
                                  children: "Flowbite",
                                }),
                              ],
                            }),
                          }),
                          (0, C.jsxs)("div", {
                            class:
                              "grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3",
                            children: [
                              (0, C.jsxs)("div", {
                                children: [
                                  (0, C.jsx)("h2", {
                                    class:
                                      "mb-6 text-sm font-semibold text-slate-50 uppercase dark:text-white",
                                    children: "Resources",
                                  }),
                                  (0, C.jsxs)("ul", {
                                    class: "text-gray-600 dark:text-gray-400",
                                    children: [
                                      (0, C.jsx)("li", {
                                        class: "mb-4",
                                        children: (0, C.jsx)("a", {
                                          href: "https://flowbite.com/",
                                          class:
                                            "hover:underline text-slate-200",
                                          children: "Flowbite",
                                        }),
                                      }),
                                      (0, C.jsx)("li", {
                                        children: (0, C.jsx)("a", {
                                          href: "https://tailwindcss.com/",
                                          class:
                                            "hover:underline text-slate-200",
                                          children: "Tailwind CSS",
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, C.jsxs)("div", {
                                children: [
                                  (0, C.jsx)("h2", {
                                    class:
                                      "mb-6 text-sm font-semibold text-slate-50 uppercase dark:text-white",
                                    children: "Follow us",
                                  }),
                                  (0, C.jsxs)("ul", {
                                    class: "text-gray-600 dark:text-gray-400",
                                    children: [
                                      (0, C.jsx)("li", {
                                        class: "mb-4",
                                        children: (0, C.jsx)("a", {
                                          href: "https://github.com/themesberg/flowbite",
                                          class:
                                            "hover:underline text-slate-100",
                                          children: "Github",
                                        }),
                                      }),
                                      (0, C.jsx)("li", {
                                        children: (0, C.jsx)("a", {
                                          href: "https://discord.gg/4eeurUVvTy",
                                          class:
                                            "hover:underline text-slate-100",
                                          children: "Discord",
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, C.jsxs)("div", {
                                children: [
                                  (0, C.jsx)("h2", {
                                    class:
                                      "mb-6 text-sm font-semibold text-slate-50 uppercase dark:text-white",
                                    children: "Legal",
                                  }),
                                  (0, C.jsxs)("ul", {
                                    class: "text-gray-600 dark:text-gray-400",
                                    children: [
                                      (0, C.jsx)("li", {
                                        class: "mb-4",
                                        children: (0, C.jsx)("a", {
                                          href: "#",
                                          class:
                                            "hover:underline text-slate-100",
                                          children: "Privacy Policy",
                                        }),
                                      }),
                                      (0, C.jsx)("li", {
                                        children: (0, C.jsx)("a", {
                                          href: "#",
                                          class:
                                            "hover:underline text-slate-100",
                                          children: "Terms & Conditions",
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, C.jsx)("hr", {
                        class:
                          "my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8",
                      }),
                      (0, C.jsxs)("div", {
                        class: "sm:flex sm:items-center sm:justify-between",
                        children: [
                          (0, C.jsxs)("span", {
                            class:
                              "text-sm text-slate-100 sm:text-center dark:text-slate-400",
                            children: [
                              "\xa9 2023",
                              " ",
                              (0, C.jsx)("a", {
                                href: "https://flowbite.com/",
                                class: "hover:underline",
                                children: "Flowbite\u2122",
                              }),
                              ". All Rights Reserved.",
                            ],
                          }),
                          (0, C.jsxs)("div", {
                            class:
                              "flex mt-4 space-x-6 sm:justify-center sm:mt-0",
                            children: [
                              (0, C.jsxs)("a", {
                                href: "#",
                                class:
                                  "text-gray-500 hover:text-gray-900 dark:hover:text-white",
                                children: [
                                  (0, C.jsx)("svg", {
                                    class: "w-5 h-5",
                                    fill: "currentColor",
                                    viewBox: "0 0 24 24",
                                    "aria-hidden": "true",
                                    children: (0, C.jsx)("path", {
                                      "fill-rule": "evenodd",
                                      d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
                                      "clip-rule": "evenodd",
                                    }),
                                  }),
                                  (0, C.jsx)("span", {
                                    class: "sr-only",
                                    children: "Facebook page",
                                  }),
                                ],
                              }),
                              (0, C.jsxs)("a", {
                                href: "#",
                                class:
                                  "text-gray-500 hover:text-gray-900 dark:hover:text-white",
                                children: [
                                  (0, C.jsx)("svg", {
                                    class: "w-5 h-5",
                                    fill: "currentColor",
                                    viewBox: "0 0 24 24",
                                    "aria-hidden": "true",
                                    children: (0, C.jsx)("path", {
                                      "fill-rule": "evenodd",
                                      d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
                                      "clip-rule": "evenodd",
                                    }),
                                  }),
                                  (0, C.jsx)("span", {
                                    class: "sr-only",
                                    children: "Instagram page",
                                  }),
                                ],
                              }),
                              (0, C.jsxs)("a", {
                                href: "#",
                                class:
                                  "text-gray-500 hover:text-gray-900 dark:hover:text-white",
                                children: [
                                  (0, C.jsx)("svg", {
                                    class: "w-5 h-5",
                                    fill: "currentColor",
                                    viewBox: "0 0 24 24",
                                    "aria-hidden": "true",
                                    children: (0, C.jsx)("path", {
                                      d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84",
                                    }),
                                  }),
                                  (0, C.jsx)("span", {
                                    class: "sr-only",
                                    children: "Twitter page",
                                  }),
                                ],
                              }),
                              (0, C.jsxs)("a", {
                                href: "#",
                                class:
                                  "text-gray-500 hover:text-gray-900 dark:hover:text-white",
                                children: [
                                  (0, C.jsx)("svg", {
                                    class: "w-5 h-5",
                                    fill: "currentColor",
                                    viewBox: "0 0 24 24",
                                    "aria-hidden": "true",
                                    children: (0, C.jsx)("path", {
                                      "fill-rule": "evenodd",
                                      d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
                                      "clip-rule": "evenodd",
                                    }),
                                  }),
                                  (0, C.jsx)("span", {
                                    class: "sr-only",
                                    children: "GitHub account",
                                  }),
                                ],
                              }),
                              (0, C.jsxs)("a", {
                                href: "#",
                                class:
                                  "text-gray-500 hover:text-gray-900 dark:hover:text-white",
                                children: [
                                  (0, C.jsx)("svg", {
                                    class: "w-5 h-5",
                                    fill: "currentColor",
                                    viewBox: "0 0 24 24",
                                    "aria-hidden": "true",
                                    children: (0, C.jsx)("path", {
                                      "fill-rule": "evenodd",
                                      d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z",
                                      "clip-rule": "evenodd",
                                    }),
                                  }),
                                  (0, C.jsx)("span", {
                                    class: "sr-only",
                                    children: "Dribbble account",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        };
      var Qo = function () {
        return (0, C.jsxs)(C.Fragment, {
          children: [
            (0, C.jsx)(E, {}),
            (0, C.jsx)(V, {}),
            (0, C.jsx)(Q, {}),
            (0, C.jsx)(Uo, {}),
            (0, C.jsx)($o, {}),
            (0, C.jsx)(Ko, {}),
          ],
        });
      };
      n.createRoot(document.getElementById("root")).render(
        (0, C.jsx)(e.StrictMode, { children: (0, C.jsx)(Qo, {}) })
      );
    })();
})();
//# sourceMappingURL=main.545f2a49.js.map
