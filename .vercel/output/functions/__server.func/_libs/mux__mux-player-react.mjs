import { o as __toESM } from "../_runtime.mjs";
import { i as require_react } from "./dnd-kit__accessibility+react.mjs";
import { t as uo } from "./@mux/mux-player+[...].mjs";
//#region node_modules/@mux/mux-player-react/dist/index.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var d = parseInt("19.3.1") >= 19;
var M = {
	className: "class",
	classname: "class",
	htmlFor: "for",
	crossOrigin: "crossorigin",
	viewBox: "viewBox",
	playsInline: "playsinline",
	autoPlay: "autoplay",
	playbackRate: "playbackrate"
};
var ee = (e) => e == null;
var te = (e, t) => ee(t) ? !1 : e in t;
var ne = (e) => e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
var ae = (e, t) => {
	if (!(!d && typeof t == "boolean" && !t)) {
		if (te(e, M)) return M[e];
		if (typeof t != "undefined") return /[A-Z]/.test(e) ? ne(e) : e;
	}
};
var re = (e, t) => !d && typeof e == "boolean" ? "" : e;
var P = (e = {}) => {
	let { ref: t, ...n } = e;
	return Object.entries(n).reduce((o, [a, l]) => {
		let i = ae(a, l);
		if (!i) return o;
		return o[i] = re(l, a), o;
	}, {});
};
function x(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
function le(...e) {
	return (t) => {
		let n = !1, o = e.map((a) => {
			let l = x(a, t);
			return !n && typeof l == "function" && (n = !0), l;
		});
		if (n) return () => {
			for (let a = 0; a < o.length; a++) {
				let l = o[a];
				typeof l == "function" ? l() : x(e[a], null);
			}
		};
	};
}
function g(...e) {
	return import_react.useCallback(le(...e), e);
}
var ue = Object.prototype.hasOwnProperty;
var se = (e, t) => {
	if (Object.is(e, t)) return !0;
	if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
	if (Array.isArray(e)) return !Array.isArray(t) || e.length !== t.length ? !1 : e.some((a, l) => t[l] === a);
	let n = Object.keys(e), o = Object.keys(t);
	if (n.length !== o.length) return !1;
	for (let a = 0; a < n.length; a++) if (!ue.call(t, n[a]) || !Object.is(e[n[a]], t[n[a]])) return !1;
	return !0;
};
var p = (e, t, n) => !se(t, e[n]);
var ie = (e, t, n) => {
	e[n] = t;
};
var ye = (e, t, n, o = ie, a = p) => (0, import_react.useEffect)(() => {
	let l = n == null ? void 0 : n.current;
	l && a(l, t, e) && o(l, t, e);
}, [n == null ? void 0 : n.current, t]);
var u = ye;
var me = () => {
	try {
		return "3.14.1";
	} catch {}
	return "UNKNOWN";
};
var ce = me();
var v = () => ce;
var r = (e, t, n) => (0, import_react.useEffect)(() => {
	let o = t == null ? void 0 : t.current;
	if (!o || !n) return;
	let a = e, l = n;
	return o.addEventListener(a, l), () => {
		o.removeEventListener(a, l);
	};
}, [
	t == null ? void 0 : t.current,
	n,
	e
]);
var Pe = import_react.forwardRef(({ children: e, ...t }, n) => import_react.createElement("mux-player", {
	suppressHydrationWarning: !0,
	...P(t),
	ref: n
}, e));
var xe = (e, t) => {
	var E;
	let { onAbort: n, onCanPlay: o, onCanPlayThrough: a, onEmptied: l, onLoadStart: i, onLoadedData: c, onLoadedMetadata: R, onProgress: T, onDurationChange: b, onVolumeChange: h, onRateChange: C, onResize: k, onWaiting: O, onPlay: S, onPlaying: w, onTimeUpdate: N, onPause: L, onSeeking: A, onSeeked: I, onStalled: _, onSuspend: K, onEnded: H, onError: D, onCuePointChange: V, onChapterChange: W, metadata: U, tokens: z, paused: F, playbackId: G, playbackRates: Z, currentTime: j, themeProps: q, extraSourceParams: J, castCustomData: Y, _hlsConfig: $, ...Q } = t;
	return u("tokens", z, e), u("playbackId", G, e), u("playbackRates", Z, e), u("metadata", U, e), u("disableCookies", (E = t.disableCookies) != null ? E : !1, e), u("extraSourceParams", J, e), u("_hlsConfig", $, e), u("themeProps", q, e), u("castCustomData", Y, e), u("paused", F, e, (s, y) => {
		y != null && (y ? s.pause() : s.play());
	}, (s, y, X) => s.hasAttribute("autoplay") && !s.hasPlayed ? !1 : p(s, y, X)), u("currentTime", j, e, (s, y) => {
		y != null && (s.currentTime = y);
	}), r("abort", e, n), r("canplay", e, o), r("canplaythrough", e, a), r("emptied", e, l), r("loadstart", e, i), r("loadeddata", e, c), r("loadedmetadata", e, R), r("progress", e, T), r("durationchange", e, b), r("volumechange", e, h), r("ratechange", e, C), r("resize", e, k), r("waiting", e, O), r("play", e, S), r("playing", e, w), r("timeupdate", e, N), r("pause", e, L), r("seeking", e, A), r("seeked", e, I), r("stalled", e, _), r("suspend", e, K), r("ended", e, H), r("error", e, D), r("cuepointchange", e, V), r("chapterchange", e, W), [Q];
};
var fe = v();
var ge = "mux-player-react";
var Fe = import_react.forwardRef((e, t) => {
	var i;
	let n = (0, import_react.useRef)(null), o = g(n, t), [a] = xe(n, e), [l] = (0, import_react.useState)((i = e.playerInitTime) != null ? i : uo());
	return import_react.createElement(Pe, {
		ref: o,
		defaultHiddenCaptions: e.defaultHiddenCaptions,
		playerSoftwareName: ge,
		playerSoftwareVersion: fe,
		playerInitTime: l,
		...a
	});
});
//#endregion
export { Fe as t };
