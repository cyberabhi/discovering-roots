import { S as stringify, _ as cleanupEfficiency, b as make, y as diff } from "./@portabletext/editor+[...].mjs";
//#region node_modules/@sanity/diff-patch/dist/index.js
var IS_DOTTABLE_RE = /^[A-Za-z_][A-Za-z0-9_]*$/;
function pathToString(path) {
	return path.reduce((target, segment, i) => {
		if (Array.isArray(segment)) return `${target}[${segment.join(":")}]`;
		if (isKeyedObject(segment)) return `${target}[_key=="${segment._key}"]`;
		if (typeof segment == "number") return `${target}[${segment}]`;
		if (typeof segment == "string" && !IS_DOTTABLE_RE.test(segment)) return `${target}['${segment}']`;
		if (typeof segment == "string") return `${target}${i === 0 ? "" : "."}${segment}`;
		throw new Error(`Unsupported path segment "${segment}"`);
	}, "");
}
function isKeyedObject(obj) {
	return typeof obj == "object" && typeof obj._key == "string";
}
var DiffError = class extends Error {
	path;
	value;
	serializedPath;
	constructor(message, path, value) {
		const serializedPath = pathToString(path);
		super(`${message} (at '${serializedPath}')`), this.path = path, this.serializedPath = serializedPath, this.value = value;
	}
};
var idPattern = /^[a-z0-9][a-z0-9_.-]+$/i;
var propPattern = /^[a-zA-Z_][a-zA-Z0-9_-]*$/;
var propStartPattern = /^[a-z_]/i;
function validateProperty(property, value, path) {
	if (!propStartPattern.test(property)) throw new DiffError("Keys must start with a letter (a-z)", path.concat(property), value);
	if (!propPattern.test(property)) throw new DiffError("Keys can only contain letters, numbers and underscores", path.concat(property), value);
	if (property === "_key" || property === "_ref" || property === "_type") {
		if (typeof value != "string") throw new DiffError("Keys must be strings", path.concat(property), value);
		if (!idPattern.test(value)) throw new DiffError("Invalid key - use less exotic characters", path.concat(property), value);
	}
	return property;
}
var ignoredKeys = [
	"_id",
	"_type",
	"_createdAt",
	"_updatedAt",
	"_rev"
];
var defaultOptions = {
	hideWarnings: !1,
	diffMatchPatch: {
		enabled: !0,
		lengthThresholdAbsolute: 30,
		lengthThresholdRelative: 1.2
	}
};
function mergeOptions(options) {
	return {
		...defaultOptions,
		...options,
		diffMatchPatch: {
			...defaultOptions.diffMatchPatch,
			...options.diffMatchPatch || {}
		}
	};
}
function diffItem(itemA, itemB, opts = defaultOptions, path = [], patches = []) {
	if (itemA === itemB) return patches;
	const aType = Array.isArray(itemA) ? "array" : typeof itemA, bType = Array.isArray(itemB) ? "array" : typeof itemB, aIsUndefined = aType === "undefined", bIsUndefined = bType === "undefined";
	if (aIsUndefined && !bIsUndefined) return patches.push({
		op: "set",
		path,
		value: itemB
	}), patches;
	if (!aIsUndefined && bIsUndefined) return patches.push({
		op: "unset",
		path
	}), patches;
	const options = mergeOptions(opts), dataType = aIsUndefined ? bType : aType;
	return dataType === "object" || dataType === "array" ? aType !== bType ? (patches.push({
		op: "set",
		path,
		value: itemB
	}), patches) : dataType === "array" ? diffArray(itemA, itemB, options, path, patches) : diffObject(itemA, itemB, options, path, patches) : diffPrimitive(itemA, itemB, options, path, patches);
}
function diffObject(itemA, itemB, options, path, patches) {
	const atRoot = path.length === 0, aKeys = Object.keys(itemA).filter(atRoot ? isNotIgnoredKey : yes).map((key) => validateProperty(key, itemA[key], path)), aKeysLength = aKeys.length, bKeys = Object.keys(itemB).filter(atRoot ? isNotIgnoredKey : yes).map((key) => validateProperty(key, itemB[key], path)), bKeysLength = bKeys.length;
	for (let i = 0; i < aKeysLength; i++) {
		const key = aKeys[i];
		key in itemB || patches.push({
			op: "unset",
			path: path.concat(key)
		});
	}
	for (let i = 0; i < bKeysLength; i++) {
		const key = bKeys[i];
		diffItem(itemA[key], itemB[key], options, path.concat([key]), patches);
	}
	return patches;
}
function diffArray(itemA, itemB, options, path, patches) {
	if (itemB.length > itemA.length && patches.push({
		op: "insert",
		after: path.concat([-1]),
		items: itemB.slice(itemA.length).map((item, i) => nullifyUndefined(item, path, i, options))
	}), itemB.length < itemA.length) {
		const isSingle = itemA.length - itemB.length === 1, unsetItems = itemA.slice(itemB.length);
		isRevisionLocked(options) || !isUniquelyKeyed(unsetItems) ? patches.push({
			op: "unset",
			path: path.concat([isSingle ? itemB.length : [itemB.length, ""]])
		}) : patches.push(...unsetItems.map((item) => ({
			op: "unset",
			path: path.concat({ _key: item._key })
		})));
	}
	for (let i = 0; i < itemB.length; i++) if (Array.isArray(itemB[i])) throw new DiffError("Multi-dimensional arrays not supported", path.concat(i), itemB[i]);
	const overlapping = Math.min(itemA.length, itemB.length), segmentA = itemA.slice(0, overlapping), segmentB = itemB.slice(0, overlapping);
	return isUniquelyKeyed(segmentA) && isUniquelyKeyed(segmentB) ? diffArrayByKey(segmentA, segmentB, options, path, patches) : diffArrayByIndex(segmentA, segmentB, options, path, patches);
}
function diffArrayByIndex(itemA, itemB, options, path, patches) {
	for (let i = 0; i < itemA.length; i++) diffItem(itemA[i], nullifyUndefined(itemB[i], path, i, options), options, path.concat(i), patches);
	return patches;
}
function diffArrayByKey(itemA, itemB, options, path, patches) {
	const keyedA = indexByKey(itemA), keyedB = indexByKey(itemB);
	if (!arrayIsEqual(keyedA.keys, keyedB.keys)) return diffArrayByIndex(itemA, itemB, options, path, patches);
	for (let i = 0; i < keyedB.keys.length; i++) {
		const key = keyedB.keys[i], valueA = keyedA.index[key];
		diffItem(valueA, nullifyUndefined(keyedB.index[key], path, i, options), options, path.concat({ _key: key }), patches);
	}
	return patches;
}
function getDiffMatchPatch(itemA, itemB, options, path) {
	const { enabled, lengthThresholdRelative, lengthThresholdAbsolute } = options.diffMatchPatch, segment = path[path.length - 1];
	if (!enabled || typeof itemA != "string" || typeof itemB != "string" || typeof segment == "string" && segment[0] === "_" || itemB.length < lengthThresholdAbsolute) return;
	let strPatch = "";
	try {
		const patch = diff(itemA, itemB), diff$1 = cleanupEfficiency(patch);
		strPatch = stringify(make(diff$1));
	} catch {
		return;
	}
	return strPatch.length > itemB.length * lengthThresholdRelative ? void 0 : {
		op: "diffMatchPatch",
		path,
		value: strPatch
	};
}
function diffPrimitive(itemA, itemB, options, path, patches) {
	const dmp = getDiffMatchPatch(itemA, itemB, options, path);
	return patches.push(dmp || {
		op: "set",
		path,
		value: itemB
	}), patches;
}
function isNotIgnoredKey(key) {
	return ignoredKeys.indexOf(key) === -1;
}
function isUniquelyKeyed(arr) {
	const keys = [];
	for (let i = 0; i < arr.length; i++) {
		const key = getKey(arr[i]);
		if (!key || keys.indexOf(key) !== -1) return !1;
		keys.push(key);
	}
	return !0;
}
function getKey(obj) {
	return typeof obj == "object" && obj !== null && obj._key;
}
function indexByKey(arr) {
	return arr.reduce((acc, item) => (acc.keys.push(item._key), acc.index[item._key] = item, acc), {
		keys: [],
		index: {}
	});
}
function arrayIsEqual(itemA, itemB) {
	return itemA.length === itemB.length && itemA.every((item, i) => itemB[i] === item);
}
function nullifyUndefined(item, path, index, options) {
	if (typeof item < "u") return item;
	if (!options.hideWarnings) {
		const serializedPath = pathToString(path.concat(index));
		console.warn(`undefined value in array converted to null (at '${serializedPath}')`);
	}
	return null;
}
function isRevisionLocked(options) {
	return !!options.ifRevisionID;
}
function yes(_) {
	return !0;
}
//#endregion
export { diffItem as t };
