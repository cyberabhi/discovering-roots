import { i as __require, o as __toESM, r as __exportAll, t as __commonJSMin } from "../../_runtime.mjs";
//#region node_modules/sanity/node_modules/@sanity/uuid/node_modules/uuid/dist/rng.js
var require_rng = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = rng;
	var _crypto$2 = _interopRequireDefault(__require("crypto"));
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}
	var rnds8Pool = /* @__PURE__ */ new Uint8Array(256);
	var poolPtr = rnds8Pool.length;
	function rng() {
		if (poolPtr > rnds8Pool.length - 16) {
			_crypto$2.default.randomFillSync(rnds8Pool);
			poolPtr = 0;
		}
		return rnds8Pool.slice(poolPtr, poolPtr += 16);
	}
}));
//#endregion
//#region node_modules/sanity/node_modules/@sanity/uuid/node_modules/uuid/dist/regex.js
var require_regex = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = void 0;
	exports.default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
}));
//#endregion
//#region node_modules/sanity/node_modules/@sanity/uuid/node_modules/uuid/dist/validate.js
var require_validate = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = void 0;
	var _regex = _interopRequireDefault(require_regex());
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}
	function validate(uuid) {
		return typeof uuid === "string" && _regex.default.test(uuid);
	}
	exports.default = validate;
}));
//#endregion
//#region node_modules/sanity/node_modules/@sanity/uuid/node_modules/uuid/dist/stringify.js
var require_stringify = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = void 0;
	var _validate = _interopRequireDefault(require_validate());
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}
	/**
	* Convert array of 16 byte values to UUID string format of the form:
	* XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
	*/
	var byteToHex = [];
	for (let i = 0; i < 256; ++i) byteToHex.push((i + 256).toString(16).substr(1));
	function stringify(arr, offset = 0) {
		const uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
		if (!(0, _validate.default)(uuid)) throw TypeError("Stringified UUID is invalid");
		return uuid;
	}
	exports.default = stringify;
}));
//#endregion
//#region node_modules/sanity/node_modules/@sanity/uuid/node_modules/uuid/dist/v1.js
var require_v1 = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = void 0;
	var _rng = _interopRequireDefault(require_rng());
	var _stringify = _interopRequireDefault(require_stringify());
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}
	var _nodeId;
	var _clockseq;
	var _lastMSecs = 0;
	var _lastNSecs = 0;
	function v1(options, buf, offset) {
		let i = buf && offset || 0;
		const b = buf || new Array(16);
		options = options || {};
		let node = options.node || _nodeId;
		let clockseq = options.clockseq !== void 0 ? options.clockseq : _clockseq;
		if (node == null || clockseq == null) {
			const seedBytes = options.random || (options.rng || _rng.default)();
			if (node == null) node = _nodeId = [
				seedBytes[0] | 1,
				seedBytes[1],
				seedBytes[2],
				seedBytes[3],
				seedBytes[4],
				seedBytes[5]
			];
			if (clockseq == null) clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 16383;
		}
		let msecs = options.msecs !== void 0 ? options.msecs : Date.now();
		let nsecs = options.nsecs !== void 0 ? options.nsecs : _lastNSecs + 1;
		const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 1e4;
		if (dt < 0 && options.clockseq === void 0) clockseq = clockseq + 1 & 16383;
		if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === void 0) nsecs = 0;
		if (nsecs >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
		_lastMSecs = msecs;
		_lastNSecs = nsecs;
		_clockseq = clockseq;
		msecs += 0xb1d069b5400;
		const tl = ((msecs & 268435455) * 1e4 + nsecs) % 4294967296;
		b[i++] = tl >>> 24 & 255;
		b[i++] = tl >>> 16 & 255;
		b[i++] = tl >>> 8 & 255;
		b[i++] = tl & 255;
		const tmh = msecs / 4294967296 * 1e4 & 268435455;
		b[i++] = tmh >>> 8 & 255;
		b[i++] = tmh & 255;
		b[i++] = tmh >>> 24 & 15 | 16;
		b[i++] = tmh >>> 16 & 255;
		b[i++] = clockseq >>> 8 | 128;
		b[i++] = clockseq & 255;
		for (let n = 0; n < 6; ++n) b[i + n] = node[n];
		return buf || (0, _stringify.default)(b);
	}
	exports.default = v1;
}));
//#endregion
//#region node_modules/sanity/node_modules/@sanity/uuid/node_modules/uuid/dist/parse.js
var require_parse = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = void 0;
	var _validate = _interopRequireDefault(require_validate());
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}
	function parse(uuid) {
		if (!(0, _validate.default)(uuid)) throw TypeError("Invalid UUID");
		let v;
		const arr = /* @__PURE__ */ new Uint8Array(16);
		arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
		arr[1] = v >>> 16 & 255;
		arr[2] = v >>> 8 & 255;
		arr[3] = v & 255;
		arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
		arr[5] = v & 255;
		arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
		arr[7] = v & 255;
		arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
		arr[9] = v & 255;
		arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 1099511627776 & 255;
		arr[11] = v / 4294967296 & 255;
		arr[12] = v >>> 24 & 255;
		arr[13] = v >>> 16 & 255;
		arr[14] = v >>> 8 & 255;
		arr[15] = v & 255;
		return arr;
	}
	exports.default = parse;
}));
//#endregion
//#region node_modules/sanity/node_modules/@sanity/uuid/node_modules/uuid/dist/v35.js
var require_v35 = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = _default;
	exports.URL = exports.DNS = void 0;
	var _stringify = _interopRequireDefault(require_stringify());
	var _parse = _interopRequireDefault(require_parse());
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}
	function stringToBytes(str) {
		str = unescape(encodeURIComponent(str));
		const bytes = [];
		for (let i = 0; i < str.length; ++i) bytes.push(str.charCodeAt(i));
		return bytes;
	}
	var DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
	exports.DNS = DNS;
	var URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
	exports.URL = URL;
	function _default(name, version, hashfunc) {
		function generateUUID(value, namespace, buf, offset) {
			if (typeof value === "string") value = stringToBytes(value);
			if (typeof namespace === "string") namespace = (0, _parse.default)(namespace);
			if (namespace.length !== 16) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
			let bytes = new Uint8Array(16 + value.length);
			bytes.set(namespace);
			bytes.set(value, namespace.length);
			bytes = hashfunc(bytes);
			bytes[6] = bytes[6] & 15 | version;
			bytes[8] = bytes[8] & 63 | 128;
			if (buf) {
				offset = offset || 0;
				for (let i = 0; i < 16; ++i) buf[offset + i] = bytes[i];
				return buf;
			}
			return (0, _stringify.default)(bytes);
		}
		try {
			generateUUID.name = name;
		} catch (err) {}
		generateUUID.DNS = DNS;
		generateUUID.URL = URL;
		return generateUUID;
	}
}));
//#endregion
//#region node_modules/sanity/node_modules/@sanity/uuid/node_modules/uuid/dist/md5.js
var require_md5 = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = void 0;
	var _crypto$1 = _interopRequireDefault(__require("crypto"));
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}
	function md5(bytes) {
		if (Array.isArray(bytes)) bytes = Buffer.from(bytes);
		else if (typeof bytes === "string") bytes = Buffer.from(bytes, "utf8");
		return _crypto$1.default.createHash("md5").update(bytes).digest();
	}
	exports.default = md5;
}));
//#endregion
//#region node_modules/sanity/node_modules/@sanity/uuid/node_modules/uuid/dist/v3.js
var require_v3 = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = void 0;
	var _v = _interopRequireDefault(require_v35());
	var _md = _interopRequireDefault(require_md5());
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}
	exports.default = (0, _v.default)("v3", 48, _md.default);
}));
//#endregion
//#region node_modules/sanity/node_modules/@sanity/uuid/node_modules/uuid/dist/v4.js
var require_v4 = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = void 0;
	var _rng = _interopRequireDefault(require_rng());
	var _stringify = _interopRequireDefault(require_stringify());
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}
	function v4(options, buf, offset) {
		options = options || {};
		const rnds = options.random || (options.rng || _rng.default)();
		rnds[6] = rnds[6] & 15 | 64;
		rnds[8] = rnds[8] & 63 | 128;
		if (buf) {
			offset = offset || 0;
			for (let i = 0; i < 16; ++i) buf[offset + i] = rnds[i];
			return buf;
		}
		return (0, _stringify.default)(rnds);
	}
	exports.default = v4;
}));
//#endregion
//#region node_modules/sanity/node_modules/@sanity/uuid/node_modules/uuid/dist/sha1.js
var require_sha1 = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = void 0;
	var _crypto = _interopRequireDefault(__require("crypto"));
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}
	function sha1(bytes) {
		if (Array.isArray(bytes)) bytes = Buffer.from(bytes);
		else if (typeof bytes === "string") bytes = Buffer.from(bytes, "utf8");
		return _crypto.default.createHash("sha1").update(bytes).digest();
	}
	exports.default = sha1;
}));
//#endregion
//#region node_modules/sanity/node_modules/@sanity/uuid/node_modules/uuid/dist/v5.js
var require_v5 = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = void 0;
	var _v = _interopRequireDefault(require_v35());
	var _sha = _interopRequireDefault(require_sha1());
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}
	exports.default = (0, _v.default)("v5", 80, _sha.default);
}));
//#endregion
//#region node_modules/sanity/node_modules/@sanity/uuid/node_modules/uuid/dist/nil.js
var require_nil = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = void 0;
	exports.default = "00000000-0000-0000-0000-000000000000";
}));
//#endregion
//#region node_modules/sanity/node_modules/@sanity/uuid/node_modules/uuid/dist/version.js
var require_version = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = void 0;
	var _validate = _interopRequireDefault(require_validate());
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}
	function version(uuid) {
		if (!(0, _validate.default)(uuid)) throw TypeError("Invalid UUID");
		return parseInt(uuid.substr(14, 1), 16);
	}
	exports.default = version;
}));
//#endregion
//#region node_modules/sanity/node_modules/@sanity/uuid/node_modules/uuid/wrapper.mjs
var import_dist = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	Object.defineProperty(exports, "v1", {
		enumerable: true,
		get: function() {
			return _v.default;
		}
	});
	Object.defineProperty(exports, "v3", {
		enumerable: true,
		get: function() {
			return _v2.default;
		}
	});
	Object.defineProperty(exports, "v4", {
		enumerable: true,
		get: function() {
			return _v3.default;
		}
	});
	Object.defineProperty(exports, "v5", {
		enumerable: true,
		get: function() {
			return _v4.default;
		}
	});
	Object.defineProperty(exports, "NIL", {
		enumerable: true,
		get: function() {
			return _nil.default;
		}
	});
	Object.defineProperty(exports, "version", {
		enumerable: true,
		get: function() {
			return _version.default;
		}
	});
	Object.defineProperty(exports, "validate", {
		enumerable: true,
		get: function() {
			return _validate.default;
		}
	});
	Object.defineProperty(exports, "stringify", {
		enumerable: true,
		get: function() {
			return _stringify.default;
		}
	});
	Object.defineProperty(exports, "parse", {
		enumerable: true,
		get: function() {
			return _parse.default;
		}
	});
	var _v = _interopRequireDefault(require_v1());
	var _v2 = _interopRequireDefault(require_v3());
	var _v3 = _interopRequireDefault(require_v4());
	var _v4 = _interopRequireDefault(require_v5());
	var _nil = _interopRequireDefault(require_nil());
	var _version = _interopRequireDefault(require_version());
	var _validate = _interopRequireDefault(require_validate());
	var _stringify = _interopRequireDefault(require_stringify());
	var _parse = _interopRequireDefault(require_parse());
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}
})))(), 1);
import_dist.default.v1;
import_dist.default.v3;
var v4 = import_dist.default.v4;
import_dist.default.v5;
import_dist.default.NIL;
import_dist.default.version;
import_dist.default.validate;
import_dist.default.stringify;
import_dist.default.parse;
//#endregion
//#region node_modules/sanity/node_modules/@sanity/preview-url-secret/dist/constants.js
var schemaType$1 = "sanity.previewUrlSecret";
var schemaIdPrefix$1 = "sanity-preview-url-secret";
var schemaIdSingleton$1 = `${schemaIdPrefix$1}.share-access`;
var schemaTypeSingleton$1 = "sanity.previewUrlShareAccess";
var apiVersion$1 = "2025-02-19";
var urlSearchParamPreviewSecret$1 = "sanity-preview-secret";
var urlSearchParamPreviewPathname$1 = "sanity-preview-pathname";
var urlSearchParamPreviewPerspective$1 = "sanity-preview-perspective";
var urlSearchParamVercelProtectionBypass$1 = "x-vercel-protection-bypass";
var urlSearchParamVercelSetBypassCookie$1 = "x-vercel-set-bypass-cookie";
var SECRET_TTL$1 = 3600;
`${schemaType$1}${SECRET_TTL$1}`;
var fetchSharedAccessQuery$1 = `*[_id == "${schemaIdSingleton$1}" && _type == "${schemaTypeSingleton$1}"][0].secret`;
`${schemaIdSingleton$1}${schemaTypeSingleton$1}`;
var deleteExpiredSecretsQuery$1 = `*[_type == "${schemaType$1}" && dateTime(_updatedAt) <= dateTime(now()) - ${SECRET_TTL$1}]`;
var fetchVercelProtectionBypassSecret$1 = `*[_id == "${`${schemaIdPrefix$1}.vercel-protection-bypass`}" && _type == "sanity.vercelProtectionBypass"][0].secret`;
var tag$1 = "sanity.preview-url-secret";
//#endregion
//#region node_modules/@sanity/preview-url-secret/dist/constants-CQiAaZVS.js
/** @internal */
var schemaType = "sanity.previewUrlSecret";
var schemaIdPrefix = "sanity-preview-url-secret";
var schemaIdSingleton = `${schemaIdPrefix}.share-access`;
var schemaTypeSingleton = "sanity.previewUrlShareAccess";
var apiVersion = "2025-02-19";
var urlSearchParamPreviewSecret = "sanity-preview-secret";
var urlSearchParamPreviewPathname = "sanity-preview-pathname";
var urlSearchParamPreviewPerspective = "sanity-preview-perspective";
var urlSearchParamPreviewVariant = "sanity-preview-variant";
var urlSearchParamVercelProtectionBypass = "x-vercel-protection-bypass";
var urlSearchParamVercelSetBypassCookie = "x-vercel-set-bypass-cookie";
var SECRET_TTL = 3600;
var fetchSecretQuery = `*[_type == "${schemaType}" && secret == $secret && dateTime(_updatedAt) > dateTime(now()) - ${SECRET_TTL}][0]{
    _id,
    _updatedAt,
    secret,
    studioUrl,
  }`;
`${schemaIdSingleton}${schemaTypeSingleton}`;
var fetchSharedAccessSecretQuery = `*[_id == "${schemaIdSingleton}" && _type == "${schemaTypeSingleton}" && secret == $secret][0]{
  secret,
  studioUrl,
}`;
`${schemaType}${SECRET_TTL}`;
`${schemaIdPrefix}`;
var tag = "sanity.preview-url-secret";
//#endregion
//#region node_modules/@sanity/preview-url-secret/dist/index.js
var dist_exports = /* @__PURE__ */ __exportAll({
	urlSearchParamPreviewPathname: () => urlSearchParamPreviewPathname,
	urlSearchParamPreviewSecret: () => urlSearchParamPreviewSecret,
	validatePreviewUrl: () => validatePreviewUrl
});
/**
* Validates the passed in client instance, then clones it and reconfigures it to fit the needs and spec of
* this package.
* @internal
*/
function createClientWithConfig(client) {
	if (!client) throw TypeError("`client` is required");
	if (!client.config().token) throw TypeError("`client` must have a `token` specified");
	return client.withConfig({
		perspective: "raw",
		apiVersion,
		useCdn: !1,
		resultSourceMap: !1,
		stega: !1
	});
}
/**
* @internal
*/
function parsePreviewUrl(unsafeUrl) {
	let url = new URL(unsafeUrl, "http://localhost"), secret = url.searchParams.get(urlSearchParamPreviewSecret);
	if (!secret) throw Error("Missing secret");
	let studioPreviewPerspective = url.searchParams.get(urlSearchParamPreviewPerspective), studioPreviewVariant = url.searchParams.get("sanity-preview-variant") || null, redirectTo, unsafeRedirectTo = url.searchParams.get(urlSearchParamPreviewPathname);
	if (unsafeRedirectTo) {
		let redirectUrl = new URL(unsafeRedirectTo, "http://localhost");
		studioPreviewPerspective && !redirectUrl.searchParams.has("sanity-preview-perspective") && redirectUrl.searchParams.set("sanity-preview-perspective", studioPreviewPerspective), studioPreviewVariant && !redirectUrl.searchParams.has("sanity-preview-variant") && redirectUrl.searchParams.set("sanity-preview-variant", studioPreviewVariant), url.searchParams.has("x-vercel-protection-bypass") && (redirectUrl.searchParams.set("x-vercel-protection-bypass", url.searchParams.get("x-vercel-protection-bypass")), redirectUrl.searchParams.set("x-vercel-set-bypass-cookie", "samesitenone"));
		let { pathname, search, hash } = redirectUrl;
		redirectTo = `${pathname}${search}${hash}`;
	}
	return {
		secret,
		redirectTo,
		studioPreviewPerspective,
		studioPreviewVariant
	};
}
/** @public */
async function validateSecret(client, secret, disableCacheNoStore) {
	if (typeof EdgeRuntime < "u" && await new Promise((resolve) => setTimeout(resolve, 300)), !secret || !secret.trim()) return {
		isValid: !1,
		studioUrl: null
	};
	let { private: privateSecret, public: publicSecret } = await client.fetch(`{
      "private": ${fetchSecretQuery},
      "public": ${fetchSharedAccessSecretQuery}
    }`, { secret }, {
		tag,
		...disableCacheNoStore ? void 0 : { cache: "no-store" }
	});
	return privateSecret ? !privateSecret?._id || !privateSecret?._updatedAt || !privateSecret?.secret ? {
		isValid: !1,
		studioUrl: null
	} : {
		isValid: secret === privateSecret.secret,
		studioUrl: privateSecret.studioUrl
	} : publicSecret?.secret ? {
		isValid: secret === publicSecret.secret,
		studioUrl: publicSecret.studioUrl
	} : {
		isValid: !1,
		studioUrl: null
	};
}
/**
* @public
*/
async function validatePreviewUrl(_client, previewUrl, disableCacheNoStore = globalThis.navigator?.userAgent === "Cloudflare-Workers") {
	let client = createClientWithConfig(_client), parsedPreviewUrl;
	try {
		parsedPreviewUrl = parsePreviewUrl(previewUrl);
	} catch (error) {
		return { isValid: !1 };
	}
	let { isValid, studioUrl } = await validateSecret(client, parsedPreviewUrl.secret, disableCacheNoStore), redirectTo = isValid ? parsedPreviewUrl.redirectTo : void 0, studioPreviewPerspective = isValid ? parsedPreviewUrl.studioPreviewPerspective : void 0, studioPreviewVariant = isValid ? parsedPreviewUrl.studioPreviewVariant : void 0, studioOrigin;
	if (isValid) try {
		studioOrigin = new URL(studioUrl).origin;
	} catch (error) {}
	return {
		isValid,
		redirectTo,
		studioOrigin,
		studioPreviewPerspective,
		studioPreviewVariant
	};
}
//#endregion
//#region node_modules/@sanity/preview-url-secret/dist/without-secret-search-params.js
var without_secret_search_params_exports = /* @__PURE__ */ __exportAll({ withoutSecretSearchParams: () => withoutSecretSearchParams$1 });
/** @alpha */
function withoutSecretSearchParams$1(url) {
	let newUrl = new URL(url), { searchParams } = newUrl;
	return searchParams.delete(urlSearchParamPreviewPathname), searchParams.delete(urlSearchParamPreviewSecret), searchParams.delete(urlSearchParamPreviewPerspective), searchParams.delete(urlSearchParamPreviewVariant), searchParams.delete(urlSearchParamVercelProtectionBypass), searchParams.delete(urlSearchParamVercelSetBypassCookie), newUrl;
}
//#endregion
//#region node_modules/sanity/node_modules/@sanity/preview-url-secret/dist/without-secret-search-params.js
function withoutSecretSearchParams(url) {
	const newUrl = new URL(url), { searchParams } = newUrl;
	return searchParams.delete(urlSearchParamPreviewPathname$1), searchParams.delete(urlSearchParamPreviewSecret$1), searchParams.delete(urlSearchParamPreviewPerspective$1), searchParams.delete(urlSearchParamVercelProtectionBypass$1), searchParams.delete(urlSearchParamVercelSetBypassCookie$1), newUrl;
}
function setSecretSearchParams(url, secret, redirectTo, perspective) {
	const newUrl = new URL(url), { searchParams } = newUrl;
	return secret && (searchParams.set("sanity-preview-secret", secret), searchParams.set("sanity-preview-pathname", redirectTo)), searchParams.set(urlSearchParamPreviewPerspective$1, perspective), newUrl;
}
//#endregion
//#region node_modules/sanity/node_modules/@sanity/preview-url-secret/dist/_chunks-es/generateSecret.js
function generateUrlSecret() {
	if (typeof crypto < "u") {
		const array = /* @__PURE__ */ new Uint8Array(16);
		crypto.getRandomValues(array);
		let key = "";
		for (let i = 0; i < array.length; i++) key += array[i].toString(16).padStart(2, "0");
		return key = btoa(key).replace(/\+/g, "-").replace(/\//g, "_").replace(/[=]+$/, ""), key;
	}
	return Math.random().toString(36).slice(2);
}
//#endregion
//#region node_modules/sanity/node_modules/@sanity/preview-url-secret/dist/toggle-preview-access-sharing.js
async function enablePreviewAccessSharing(_client, source, studioUrl, userId) {
	const client = _client.withConfig({ apiVersion: apiVersion$1 }), newSecret = generateUrlSecret(), patch = client.patch(schemaIdSingleton$1).set({
		secret: newSecret,
		studioUrl,
		userId
	});
	return await client.transaction().createIfNotExists({
		_id: schemaIdSingleton$1,
		_type: schemaTypeSingleton$1,
		source,
		studioUrl,
		userId
	}).patch(patch).commit({ tag: tag$1 }), { secret: newSecret };
}
async function disablePreviewAccessSharing(_client, source, studioUrl, userId) {
	const client = _client.withConfig({ apiVersion: apiVersion$1 }), patch = client.patch(schemaIdSingleton$1).set({
		secret: null,
		studioUrl,
		userId
	});
	await client.transaction().createIfNotExists({
		_id: schemaIdSingleton$1,
		_type: schemaTypeSingleton$1,
		source,
		studioUrl,
		userId
	}).patch(patch).commit({ tag: tag$1 });
}
//#endregion
//#region node_modules/sanity/node_modules/@sanity/preview-url-secret/dist/create-secret.js
async function createPreviewSecret(_client, source, studioUrl, userId, id = v4()) {
	const client = _client.withConfig({ apiVersion: apiVersion$1 });
	try {
		const expiresAt = new Date(Date.now() + 1e3 * SECRET_TTL$1), _id = `drafts.${id}`, newSecret = generateUrlSecret(), patch = client.patch(_id).set({
			secret: newSecret,
			source,
			studioUrl,
			userId
		});
		return await client.transaction().createOrReplace({
			_id,
			_type: schemaType$1
		}).patch(patch).commit({ tag: tag$1 }), {
			secret: newSecret,
			expiresAt
		};
	} finally {
		try {
			await client.delete({ query: deleteExpiredSecretsQuery$1 });
		} catch (err) {
			console.error("Failed to delete expired secrets", err);
		}
	}
}
//#endregion
//#region node_modules/sanity/node_modules/@sanity/preview-url-secret/dist/toggle-vercel-protection-bypass.js
function subscribeToVercelProtectionBypass(client, onChange) {
	let controller = new AbortController(), usedTags = [];
	async function fetchSecret(lastLiveEventId, signal) {
		const { result, syncTags } = await client.fetch(fetchVercelProtectionBypassSecret$1, {}, {
			filterResponse: !1,
			lastLiveEventId,
			tag: "preview-url-secret.fetch-vercel-bypass-protection-secret"
		});
		Array.isArray(syncTags) && (usedTags = syncTags), signal.aborted || onChange(result);
	}
	const subscription = client.live.events().subscribe({
		next: (event) => {
			event.type === "message" && (controller.abort(), controller = new AbortController(), event.tags.some((tag) => usedTags.includes(tag)) && fetchSecret(event.id, controller.signal));
		},
		error: (reason) => console.error(reason)
	});
	return fetchSecret(null, controller.signal), () => {
		subscription.unsubscribe(), controller.abort();
	};
}
//#endregion
export { urlSearchParamVercelProtectionBypass$1 as _, setSecretSearchParams as a, dist_exports as c, schemaIdSingleton$1 as d, schemaType$1 as f, urlSearchParamPreviewSecret$1 as g, urlSearchParamPreviewPerspective$1 as h, enablePreviewAccessSharing as i, apiVersion$1 as l, urlSearchParamPreviewPathname$1 as m, createPreviewSecret as n, withoutSecretSearchParams as o, schemaTypeSingleton$1 as p, disablePreviewAccessSharing as r, without_secret_search_params_exports as s, subscribeToVercelProtectionBypass as t, fetchSharedAccessQuery$1 as u, urlSearchParamVercelSetBypassCookie$1 as v, v4 as y };
