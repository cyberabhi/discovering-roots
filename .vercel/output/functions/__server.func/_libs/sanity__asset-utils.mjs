//#region node_modules/@sanity/asset-utils/dist/index.js
var cdnUrl = "https://cdn.sanity.io";
var cdnUrlPattern = /^https:\/\/cdn\.sanity\./;
var customCdnUrlPattern = /^https:\/\/cdn\.[^/]+\/(images|files)\/[^/]+\/.*?[a-zA-Z0-9_]{24,40}.*$/;
var fileAssetFilenamePattern = /^([a-zA-Z0-9_]{24,40}|[a-f0-9]{40})+\.[a-z0-9]+$/;
var fileAssetIdPattern = /^file-([a-zA-Z0-9_]{24,40}|[a-f0-9]{40})+-[a-z0-9]+$/;
var imageAssetFilenamePattern = /^([a-zA-Z0-9_]{24,40}|[a-f0-9]{40})-\d+x\d+\.[a-z0-9]+$/;
var imageAssetIdPattern = /^image-([a-zA-Z0-9_]{24,40}|[a-f0-9]{40})+-\d+x\d+-[a-z0-9]+$/;
var pathPattern = /^(images|files)\/([a-z0-9]+)\/([a-z0-9][-\w]*)\//;
var idPattern = /^(?:image-(?:[a-zA-Z0-9_]{24,40}|[a-f0-9]{40})+-\d+x\d+-[a-z0-9]+|file-(?:[a-zA-Z0-9_]{24,40}|[a-f0-9]{40})+-[a-z0-9]+)$/;
var inProgressAssetId = "upload-in-progress-placeholder";
var UnresolvableError = class extends Error {
	constructor(inputSource, message = "Failed to resolve asset ID from source") {
		super(message), this.unresolvable = !0, this.input = inputSource;
	}
};
function isUnresolvableError(err) {
	const error = err;
	return !!(error.unresolvable && "input" in error);
}
function getForgivingResolver(method) {
	return (...args) => {
		try {
			return method(...args);
		} catch (err) {
			if (isUnresolvableError(err)) return;
			throw err;
		}
	};
}
function isObject(obj) {
	return obj !== null && !Array.isArray(obj) && typeof obj == "object";
}
function isReference(ref) {
	return isObject(ref) && typeof ref._ref == "string";
}
function isAssetIdStub(stub) {
	return isObject(stub) && typeof stub._id == "string";
}
function isAssetPathStub(stub) {
	return isObject(stub) && typeof stub.path == "string";
}
function isAssetUrlStub(stub) {
	return isObject(stub) && typeof stub.url == "string";
}
function isImageAssetId(documentId) {
	return imageAssetIdPattern.test(documentId);
}
function isFileAssetId(documentId) {
	return fileAssetIdPattern.test(documentId);
}
function isAssetObjectStub(stub) {
	const item = stub;
	return isObject(item) && !!item.asset && typeof item.asset == "object";
}
function isInProgressUpload(stub) {
	const item = stub;
	return isObject(item) && !!item._upload && !("asset" in item);
}
function isCdnUrl(url) {
	return cdnUrlPattern.test(url) || customCdnUrlPattern.test(url);
}
var DEFAULT_CROP = Object.freeze({
	left: 0,
	top: 0,
	bottom: 0,
	right: 0
});
var DEFAULT_HOTSPOT = Object.freeze({
	x: .5,
	y: .5,
	height: 1,
	width: 1
});
var isDefaultCrop = (crop) => {
	const { top, bottom, left, right } = crop, { top: defaultTop, bottom: defaultBottom, left: defaultLeft, right: defaultRight } = DEFAULT_CROP;
	return top === defaultTop && bottom === defaultBottom && left === defaultLeft && right === defaultRight;
};
var isDefaultHotspot = (hotspot) => {
	const { x, y, width, height } = hotspot, { x: defaultX, y: defaultY, width: defaultWidth, height: defaultHeight } = DEFAULT_HOTSPOT;
	return x === defaultX && y === defaultY && width === defaultWidth && height === defaultHeight;
};
function getUrlPath(url) {
	if (pathPattern.test(url)) return url;
	if (!isCdnUrl(url)) throw new UnresolvableError(`Failed to resolve path from URL "${url}"`);
	return new URL(url).pathname.replace(/^\/+/, "");
}
var exampleImageId = "image-027401f31c3ac1e6d78c5d539ccd1beff72b9b11-2000x3000-jpg";
function parseImageAssetId(documentId) {
	const [, assetId, dimensionString, extension] = documentId.split("-"), [width, height] = (dimensionString || "").split("x").map(Number);
	if (!assetId || !dimensionString || !extension || !(width > 0) || !(height > 0)) throw new Error(`Malformed asset ID '${documentId}'. Expected an id like "${exampleImageId}".`);
	return {
		type: "image",
		assetId,
		width,
		height,
		extension
	};
}
function getImageDimensions(src) {
	if (isInProgressUpload(src)) return {
		width: 0,
		height: 0,
		aspectRatio: 0
	};
	const { width, height } = parseImageAssetId(getAssetDocumentId(src));
	return {
		width,
		height,
		aspectRatio: width / height
	};
}
function getAssetDocumentId(src) {
	if (isInProgressUpload(src)) return inProgressAssetId;
	const source = isAssetObjectStub(src) ? src.asset : src;
	let id = "";
	if (typeof source == "string" ? id = getIdFromString(source) : isReference(source) ? id = source._ref : isAssetIdStub(source) ? id = source._id : isAssetPathStub(source) ? id = idFromUrl(`${cdnUrl}/${source.path}`) : isAssetUrlStub(source) && (id = idFromUrl(source.url)), !(id && idPattern.test(id))) throw new UnresolvableError(src);
	return id;
}
var tryGetAssetDocumentId = getForgivingResolver(getAssetDocumentId);
function getIdFromString(str) {
	if (idPattern.test(str)) return str;
	const path = isCdnUrl(str) ? new URL(str).pathname : str;
	if (path.indexOf("/images") === 0 || path.indexOf("/files") === 0) return idFromUrl(str);
	if (pathPattern.test(str)) return idFromUrl(`${cdnUrl}/${str}`);
	if (isFileAssetFilename(str)) return idFromUrl(`${cdnUrl}/files/a/b/${str}`);
	if (isImageAssetFilename(str)) return idFromUrl(`${cdnUrl}/images/a/b/${str}`);
	throw new UnresolvableError(str);
}
function idFromUrl(url) {
	const [type, , , fileName] = getUrlPath(url).split("/");
	return `${type.replace(/s$/, "")}-${fileName.replace(/\./g, "-")}`;
}
function isImageAssetFilename(filename) {
	return imageAssetFilenamePattern.test(filename);
}
function isFileAssetFilename(filename) {
	return fileAssetFilenamePattern.test(filename);
}
function isFileSource(src) {
	const assetId = tryGetAssetDocumentId(src);
	return assetId ? assetId.startsWith("file-") : !1;
}
function isImageSource(src) {
	const assetId = tryGetAssetDocumentId(src);
	return assetId ? assetId.startsWith("image-") : !1;
}
//#endregion
export { isFileAssetId as a, isImageSource as c, isDefaultHotspot as i, isAssetObjectStub as n, isFileSource as o, isDefaultCrop as r, isImageAssetId as s, getImageDimensions as t };
