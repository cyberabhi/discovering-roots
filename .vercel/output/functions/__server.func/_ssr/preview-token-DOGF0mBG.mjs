import { r as __exportAll } from "../_runtime.mjs";
import { t as __exportAll$1 } from "./rolldown-runtime-D7D4PA-g.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/preview-token-DOGF0mBG.js
var preview_token_DOGF0mBG_exports = /* @__PURE__ */ __exportAll({
	a: () => verifyPreviewToken,
	i: () => readCookie,
	n: () => previewCookieHeader,
	r: () => preview_token_exports,
	t: () => PREVIEW_COOKIE
});
var preview_token_exports = /* @__PURE__ */ __exportAll$1({
	PREVIEW_COOKIE: () => PREVIEW_COOKIE,
	PREVIEW_MAX_AGE_SECONDS: () => PREVIEW_MAX_AGE_SECONDS,
	previewCookieHeader: () => previewCookieHeader,
	readCookie: () => readCookie,
	signPreviewToken: () => signPreviewToken,
	verifyPreviewToken: () => verifyPreviewToken
});
/**
* Signed, expiring preview-session cookie (HMAC-SHA256, Web Crypto — works on
* Workers, Node and edge runtimes). The cookie carries no draft data and no
* Sanity token; it only proves the browser passed Studio's preview handshake.
*/
var PREVIEW_COOKIE = "dr_preview";
var PREVIEW_MAX_AGE_SECONDS = 3600;
var enc = new TextEncoder();
async function hmac(secret, message) {
	const key = await crypto.subtle.importKey("raw", enc.encode(secret), {
		name: "HMAC",
		hash: "SHA-256"
	}, false, ["sign"]);
	const sig = await crypto.subtle.sign("HMAC", key, enc.encode(message));
	return Array.from(new Uint8Array(sig), (b) => b.toString(16).padStart(2, "0")).join("");
}
async function signPreviewToken(secret, expiresAtMs) {
	const exp = String(Math.floor(expiresAtMs));
	return `${exp}.${await hmac(secret, `preview:${exp}`)}`;
}
async function verifyPreviewToken(secret, token, nowMs = Date.now()) {
	if (!secret || !token) return false;
	const parts = token.split(".");
	if (parts.length !== 2) return false;
	const [exp, sig] = parts;
	if (!exp || !sig || !/^\d+$/.test(exp) || !/^[0-9a-f]{64}$/.test(sig)) return false;
	const expiresAtMs = Number(exp);
	if (!Number.isSafeInteger(expiresAtMs) || expiresAtMs <= nowMs || expiresAtMs > nowMs + 36e5) return false;
	const expected = await hmac(secret, `preview:${exp}`);
	if (expected.length !== sig.length) return false;
	let diff = 0;
	for (let i = 0; i < expected.length; i++) diff |= expected.charCodeAt(i) ^ sig.charCodeAt(i);
	return diff === 0;
}
function readCookie(header, name) {
	if (!header) return void 0;
	for (const part of header.split(";")) {
		const [k, ...v] = part.trim().split("=");
		if (k === name) try {
			return decodeURIComponent(v.join("="));
		} catch {
			return;
		}
	}
}
function previewCookieHeader(value, maxAge) {
	return `${PREVIEW_COOKIE}=${encodeURIComponent(value)}; Path=/; HttpOnly; Secure; SameSite=None; Partitioned; Max-Age=${maxAge}`;
}
//#endregion
export { verifyPreviewToken as a, readCookie as i, previewCookieHeader as n, preview_token_DOGF0mBG_exports as r, PREVIEW_COOKIE as t };
