import { i as __require, o as __toESM, t as __commonJSMin } from "../../_runtime.mjs";
//#region node_modules/@sanity/types/lib/index.js
function isObject$1(obj) {
	return typeof obj == "object" && obj !== null && !Array.isArray(obj);
}
function isReference$1(reference) {
	return isObject$1(reference) && typeof reference._ref == "string";
}
function isImage(value) {
	return isObject$1(value) && isReference$1(value.asset) && value.asset._ref.startsWith("image-");
}
function isCrossDatasetReference(reference) {
	return isObject$1(reference) && typeof reference._ref == "string" && typeof reference._dataset == "string" && typeof reference._projectId == "string";
}
function isSanityDocument(document) {
	return isObject$1(document) && typeof document._id == "string" && typeof document._type == "string";
}
function isTypedObject$1(obj) {
	return isObject$1(obj) && typeof obj._type == "string";
}
function isKeyedObject(obj) {
	return isObject$1(obj) && typeof obj._key == "string";
}
function isGlobalDocumentReference(reference) {
	return !isObject$1(reference) || typeof reference._ref != "string" ? !1 : reference._ref.split(":").length === 3;
}
function isValidationErrorMarker(marker) {
	return marker.level === "error";
}
function isValidationWarningMarker(marker) {
	return marker.level === "warning";
}
function isValidationInfoMarker(marker) {
	return marker.level === "info";
}
var MEDIA_LIBRARY_ASSET_ASPECT_TYPE_NAME = "sanity.asset.aspect";
function isAssetAspect(maybeAssetAspect) {
	return typeof maybeAssetAspect == "object" && maybeAssetAspect !== null && "_type" in maybeAssetAspect && maybeAssetAspect._type === "sanity.asset.aspect";
}
function defineAssetAspect(definition) {
	const { assetType, name } = definition;
	return {
		_type: MEDIA_LIBRARY_ASSET_ASPECT_TYPE_NAME,
		_id: `${name}`,
		definition,
		...assetType && { assetType: Array.isArray(assetType) ? assetType : [assetType] },
		public: definition.public
	};
}
function isCreateMutation(mutation) {
	return "create" in mutation;
}
function isCreateIfNotExistsMutation(mutation) {
	return "createIfNotExists" in mutation;
}
function isCreateOrReplaceMutation(mutation) {
	return "createOrReplace" in mutation;
}
function isDeleteMutation(mutation) {
	return "delete" in mutation;
}
function isPatchMutation(mutation) {
	return "patch" in mutation;
}
var reKeySegment = /_key\s*==\s*['"](.*)['"]/;
var reIndexTuple = /^\d*:\d*$/;
function isIndexSegment(segment) {
	return typeof segment == "number" || typeof segment == "string" && /^\[\d+\]$/.test(segment);
}
function isKeySegment(segment) {
	return typeof segment == "string" ? reKeySegment.test(segment.trim()) : typeof segment == "object" && "_key" in segment;
}
function isIndexTuple(segment) {
	if (typeof segment == "string" && reIndexTuple.test(segment)) return !0;
	if (!Array.isArray(segment) || segment.length !== 2) return !1;
	const [from, to] = segment;
	return (typeof from == "number" || from === "") && (typeof to == "number" || to === "");
}
function isRecord$1$1(value) {
	return !!value && (typeof value == "object" || typeof value == "function");
}
function isPortableTextTextBlock(value) {
	return isRecord$1$1(value) && typeof value._type == "string" && Array.isArray(value.children) && value.children.every((child) => isRecord$1$1(child)) && ("markDefs" in value ? Array.isArray(value.markDefs) && value.markDefs.every((def) => isRecord$1$1(def)) : !0) && ("style" in value ? typeof value.style == "string" : !0);
}
function isPortableTextSpan(value) {
	return isRecord$1$1(value) && value._type === "span" && typeof value.text == "string" && ("marks" in value ? Array.isArray(value.marks) && value.marks.every((mark) => typeof mark == "string") : !0);
}
function isPortableTextListBlock(value) {
	return isPortableTextTextBlock(value) && "listItem" in value && typeof value.listItem == "string" && "level" in value && Number.isInteger(value.level);
}
function isRecord$2(value) {
	return !!value && (typeof value == "object" || typeof value == "function");
}
function isDocumentSchemaType(type) {
	if (!isObjectSchemaType(type)) return !1;
	let current = type;
	for (; current;) {
		if (current.name === "document") return !0;
		current = current.type;
	}
	return !1;
}
function isObjectSchemaType(type) {
	return isRecord$2(type) ? type.jsonType === "object" : !1;
}
function isArraySchemaType(type) {
	return isRecord$2(type) ? type.jsonType === "array" : !1;
}
function isArrayOfBlocksSchemaType(type) {
	return isArraySchemaType(type) && type.of.some((memberType) => isBlockSchemaType(memberType));
}
function isArrayOfObjectsSchemaType(type) {
	return isArraySchemaType(type) && type.of.every((memberType) => isObjectSchemaType(memberType));
}
function isArrayOfPrimitivesSchemaType(type) {
	return isArraySchemaType(type) && type.of.every((memberType) => isPrimitiveSchemaType(memberType));
}
function isBooleanSchemaType(type) {
	return isRecord$2(type) ? type.jsonType === "boolean" : !1;
}
function isStringSchemaType(type) {
	return isRecord$2(type) ? type.jsonType === "string" : !1;
}
function isDateTimeSchemaType(type) {
	return isStringSchemaType(type) ? type.name === "datetime" : !1;
}
function isNumberSchemaType(type) {
	return isRecord$2(type) ? type.jsonType === "number" : !1;
}
function isPrimitiveSchemaType(type) {
	return isBooleanSchemaType(type) || isStringSchemaType(type) || isNumberSchemaType(type);
}
function isReferenceSchemaType(type) {
	return isRecord$2(type) && (type.name === "reference" || isReferenceSchemaType(type.type));
}
function isImageSchemaType(type) {
	return isRecord$2(type) && (type.name === "image" || isImageSchemaType(type.type));
}
function isFileSchemaType(type) {
	return isRecord$2(type) && (type.name === "file" || isFileSchemaType(type.type));
}
function isDeprecatedSchemaType(type) {
	return isRecord$2(type) ? typeof type.deprecated < "u" : !1;
}
function isDeprecationConfiguration(type) {
	return isRecord$2(type) ? typeof type.deprecated < "u" : !1;
}
function isCrossDatasetReferenceSchemaType(type) {
	return isRecord$2(type) && (type.name === "crossDatasetReference" || isCrossDatasetReferenceSchemaType(type.type));
}
function isTitledListValue(item) {
	return typeof item == "object" && item !== null && "title" in item && "value" in item;
}
function isSpanSchemaType(type) {
	return isRecord$2(type) ? Array.isArray(type.annotations) && Array.isArray(type.decorators) : !1;
}
function isBlockSchemaType(type) {
	if (!isRecord$2(type) || !Array.isArray(type.fields)) return !1;
	const maybeSpanChildren = type.fields.find(isBlockChildrenObjectField), maybeStyle = type.fields.find(isBlockStyleObjectField), maybeList = type.fields.find(isBlockListObjectField);
	return isBlockChildrenObjectField(maybeSpanChildren) && isBlockStyleObjectField(maybeStyle) && isBlockListObjectField(maybeList);
}
function isBlockStyleObjectField(field) {
	return !isRecord$2(field) || field.name !== "style" ? !1 : isRecord$2(field.type) && field.type.jsonType === "string";
}
function isBlockListObjectField(field) {
	return !isRecord$2(field) || field.name !== "listItem" ? !1 : isRecord$2(field.type) && field.type.jsonType === "string";
}
function isBlockChildrenObjectField(field) {
	return !isRecord$2(field) || field.name !== "children" || !isArraySchemaType(field.type) ? !1 : field.type.of.some(isSpanSchemaType);
}
function defineType(schemaDefinition, defineOptions) {
	return schemaDefinition;
}
function defineField(schemaField, defineOptions) {
	return schemaField;
}
function defineArrayMember(arrayOfSchema, defineOptions) {
	return arrayOfSchema;
}
function typed(input) {
	return input;
}
var searchStrategies = ["groqLegacy", "groq2024"];
function isSearchStrategy(maybeSearchStrategy) {
	return searchStrategies.includes(maybeSearchStrategy);
}
function isSlug(thing) {
	return isObject$1(thing) && typeof thing.current == "string";
}
function isCreateSquashedMutation(mutation) {
	return "createSquashed" in mutation;
}
function isValidationError(node) {
	return node.level === "error";
}
function isValidationWarning(node) {
	return node.level === "warning";
}
function isValidationInfo(node) {
	return node.level === "info";
}
//#endregion
//#region node_modules/lodash/isObject.js
var require_isObject = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Checks if `value` is the
	* [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	* of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	*
	* @static
	* @memberOf _
	* @since 0.1.0
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is an object, else `false`.
	* @example
	*
	* _.isObject({});
	* // => true
	*
	* _.isObject([1, 2, 3]);
	* // => true
	*
	* _.isObject(_.noop);
	* // => true
	*
	* _.isObject(null);
	* // => false
	*/
	function isObject(value) {
		var type = typeof value;
		return value != null && (type == "object" || type == "function");
	}
	module.exports = isObject;
}));
//#endregion
//#region node_modules/lodash/_freeGlobal.js
var require__freeGlobal = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = typeof global == "object" && global && global.Object === Object && global;
}));
//#endregion
//#region node_modules/lodash/_root.js
var require__root = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var freeGlobal = require__freeGlobal();
	/** Detect free variable `self`. */
	var freeSelf = typeof self == "object" && self && self.Object === Object && self;
	module.exports = freeGlobal || freeSelf || Function("return this")();
}));
//#endregion
//#region node_modules/lodash/_Symbol.js
var require__Symbol = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require__root().Symbol;
}));
//#endregion
//#region node_modules/lodash/_getRawTag.js
var require__getRawTag = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Symbol = require__Symbol();
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	/**
	* Used to resolve the
	* [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	* of values.
	*/
	var nativeObjectToString = objectProto.toString;
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : void 0;
	/**
	* A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	*
	* @private
	* @param {*} value The value to query.
	* @returns {string} Returns the raw `toStringTag`.
	*/
	function getRawTag(value) {
		var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
		try {
			value[symToStringTag] = void 0;
			var unmasked = true;
		} catch (e) {}
		var result = nativeObjectToString.call(value);
		if (unmasked) if (isOwn) value[symToStringTag] = tag;
		else delete value[symToStringTag];
		return result;
	}
	module.exports = getRawTag;
}));
//#endregion
//#region node_modules/lodash/_objectToString.js
var require__objectToString = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Used to resolve the
	* [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	* of values.
	*/
	var nativeObjectToString = Object.prototype.toString;
	/**
	* Converts `value` to a string using `Object.prototype.toString`.
	*
	* @private
	* @param {*} value The value to convert.
	* @returns {string} Returns the converted string.
	*/
	function objectToString(value) {
		return nativeObjectToString.call(value);
	}
	module.exports = objectToString;
}));
//#endregion
//#region node_modules/lodash/_baseGetTag.js
var require__baseGetTag = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Symbol = require__Symbol();
	var getRawTag = require__getRawTag();
	var objectToString = require__objectToString();
	/** `Object#toString` result references. */
	var nullTag = "[object Null]";
	var undefinedTag = "[object Undefined]";
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : void 0;
	/**
	* The base implementation of `getTag` without fallbacks for buggy environments.
	*
	* @private
	* @param {*} value The value to query.
	* @returns {string} Returns the `toStringTag`.
	*/
	function baseGetTag(value) {
		if (value == null) return value === void 0 ? undefinedTag : nullTag;
		return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
	}
	module.exports = baseGetTag;
}));
//#endregion
//#region node_modules/lodash/isObjectLike.js
var require_isObjectLike = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Checks if `value` is object-like. A value is object-like if it's not `null`
	* and has a `typeof` result of "object".
	*
	* @static
	* @memberOf _
	* @since 4.0.0
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	* @example
	*
	* _.isObjectLike({});
	* // => true
	*
	* _.isObjectLike([1, 2, 3]);
	* // => true
	*
	* _.isObjectLike(_.noop);
	* // => false
	*
	* _.isObjectLike(null);
	* // => false
	*/
	function isObjectLike(value) {
		return value != null && typeof value == "object";
	}
	module.exports = isObjectLike;
}));
//#endregion
//#region node_modules/lodash/isSymbol.js
var require_isSymbol = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseGetTag = require__baseGetTag();
	var isObjectLike = require_isObjectLike();
	/** `Object#toString` result references. */
	var symbolTag = "[object Symbol]";
	/**
	* Checks if `value` is classified as a `Symbol` primitive or object.
	*
	* @static
	* @memberOf _
	* @since 4.0.0
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	* @example
	*
	* _.isSymbol(Symbol.iterator);
	* // => true
	*
	* _.isSymbol('abc');
	* // => false
	*/
	function isSymbol(value) {
		return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
	}
	module.exports = isSymbol;
}));
//#endregion
//#region node_modules/lodash/_listCacheClear.js
var require__listCacheClear = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Removes all key-value entries from the list cache.
	*
	* @private
	* @name clear
	* @memberOf ListCache
	*/
	function listCacheClear() {
		this.__data__ = [];
		this.size = 0;
	}
	module.exports = listCacheClear;
}));
//#endregion
//#region node_modules/lodash/eq.js
var require_eq = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Performs a
	* [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	* comparison between two values to determine if they are equivalent.
	*
	* @static
	* @memberOf _
	* @since 4.0.0
	* @category Lang
	* @param {*} value The value to compare.
	* @param {*} other The other value to compare.
	* @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	* @example
	*
	* var object = { 'a': 1 };
	* var other = { 'a': 1 };
	*
	* _.eq(object, object);
	* // => true
	*
	* _.eq(object, other);
	* // => false
	*
	* _.eq('a', 'a');
	* // => true
	*
	* _.eq('a', Object('a'));
	* // => false
	*
	* _.eq(NaN, NaN);
	* // => true
	*/
	function eq(value, other) {
		return value === other || value !== value && other !== other;
	}
	module.exports = eq;
}));
//#endregion
//#region node_modules/lodash/_assocIndexOf.js
var require__assocIndexOf = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var eq = require_eq();
	/**
	* Gets the index at which the `key` is found in `array` of key-value pairs.
	*
	* @private
	* @param {Array} array The array to inspect.
	* @param {*} key The key to search for.
	* @returns {number} Returns the index of the matched value, else `-1`.
	*/
	function assocIndexOf(array, key) {
		var length = array.length;
		while (length--) if (eq(array[length][0], key)) return length;
		return -1;
	}
	module.exports = assocIndexOf;
}));
//#endregion
//#region node_modules/lodash/_listCacheDelete.js
var require__listCacheDelete = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var assocIndexOf = require__assocIndexOf();
	/** Built-in value references. */
	var splice = Array.prototype.splice;
	/**
	* Removes `key` and its value from the list cache.
	*
	* @private
	* @name delete
	* @memberOf ListCache
	* @param {string} key The key of the value to remove.
	* @returns {boolean} Returns `true` if the entry was removed, else `false`.
	*/
	function listCacheDelete(key) {
		var data = this.__data__, index = assocIndexOf(data, key);
		if (index < 0) return false;
		if (index == data.length - 1) data.pop();
		else splice.call(data, index, 1);
		--this.size;
		return true;
	}
	module.exports = listCacheDelete;
}));
//#endregion
//#region node_modules/lodash/_listCacheGet.js
var require__listCacheGet = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var assocIndexOf = require__assocIndexOf();
	/**
	* Gets the list cache value for `key`.
	*
	* @private
	* @name get
	* @memberOf ListCache
	* @param {string} key The key of the value to get.
	* @returns {*} Returns the entry value.
	*/
	function listCacheGet(key) {
		var data = this.__data__, index = assocIndexOf(data, key);
		return index < 0 ? void 0 : data[index][1];
	}
	module.exports = listCacheGet;
}));
//#endregion
//#region node_modules/lodash/_listCacheHas.js
var require__listCacheHas = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var assocIndexOf = require__assocIndexOf();
	/**
	* Checks if a list cache value for `key` exists.
	*
	* @private
	* @name has
	* @memberOf ListCache
	* @param {string} key The key of the entry to check.
	* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	*/
	function listCacheHas(key) {
		return assocIndexOf(this.__data__, key) > -1;
	}
	module.exports = listCacheHas;
}));
//#endregion
//#region node_modules/lodash/_listCacheSet.js
var require__listCacheSet = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var assocIndexOf = require__assocIndexOf();
	/**
	* Sets the list cache `key` to `value`.
	*
	* @private
	* @name set
	* @memberOf ListCache
	* @param {string} key The key of the value to set.
	* @param {*} value The value to set.
	* @returns {Object} Returns the list cache instance.
	*/
	function listCacheSet(key, value) {
		var data = this.__data__, index = assocIndexOf(data, key);
		if (index < 0) {
			++this.size;
			data.push([key, value]);
		} else data[index][1] = value;
		return this;
	}
	module.exports = listCacheSet;
}));
//#endregion
//#region node_modules/lodash/_ListCache.js
var require__ListCache = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var listCacheClear = require__listCacheClear();
	var listCacheDelete = require__listCacheDelete();
	var listCacheGet = require__listCacheGet();
	var listCacheHas = require__listCacheHas();
	var listCacheSet = require__listCacheSet();
	/**
	* Creates an list cache object.
	*
	* @private
	* @constructor
	* @param {Array} [entries] The key-value pairs to cache.
	*/
	function ListCache(entries) {
		var index = -1, length = entries == null ? 0 : entries.length;
		this.clear();
		while (++index < length) {
			var entry = entries[index];
			this.set(entry[0], entry[1]);
		}
	}
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype["delete"] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;
	module.exports = ListCache;
}));
//#endregion
//#region node_modules/lodash/_stackClear.js
var require__stackClear = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var ListCache = require__ListCache();
	/**
	* Removes all key-value entries from the stack.
	*
	* @private
	* @name clear
	* @memberOf Stack
	*/
	function stackClear() {
		this.__data__ = new ListCache();
		this.size = 0;
	}
	module.exports = stackClear;
}));
//#endregion
//#region node_modules/lodash/_stackDelete.js
var require__stackDelete = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Removes `key` and its value from the stack.
	*
	* @private
	* @name delete
	* @memberOf Stack
	* @param {string} key The key of the value to remove.
	* @returns {boolean} Returns `true` if the entry was removed, else `false`.
	*/
	function stackDelete(key) {
		var data = this.__data__, result = data["delete"](key);
		this.size = data.size;
		return result;
	}
	module.exports = stackDelete;
}));
//#endregion
//#region node_modules/lodash/_stackGet.js
var require__stackGet = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Gets the stack value for `key`.
	*
	* @private
	* @name get
	* @memberOf Stack
	* @param {string} key The key of the value to get.
	* @returns {*} Returns the entry value.
	*/
	function stackGet(key) {
		return this.__data__.get(key);
	}
	module.exports = stackGet;
}));
//#endregion
//#region node_modules/lodash/_stackHas.js
var require__stackHas = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Checks if a stack value for `key` exists.
	*
	* @private
	* @name has
	* @memberOf Stack
	* @param {string} key The key of the entry to check.
	* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	*/
	function stackHas(key) {
		return this.__data__.has(key);
	}
	module.exports = stackHas;
}));
//#endregion
//#region node_modules/lodash/isFunction.js
var require_isFunction = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseGetTag = require__baseGetTag();
	var isObject = require_isObject();
	/** `Object#toString` result references. */
	var asyncTag = "[object AsyncFunction]";
	var funcTag = "[object Function]";
	var genTag = "[object GeneratorFunction]";
	var proxyTag = "[object Proxy]";
	/**
	* Checks if `value` is classified as a `Function` object.
	*
	* @static
	* @memberOf _
	* @since 0.1.0
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is a function, else `false`.
	* @example
	*
	* _.isFunction(_);
	* // => true
	*
	* _.isFunction(/abc/);
	* // => false
	*/
	function isFunction(value) {
		if (!isObject(value)) return false;
		var tag = baseGetTag(value);
		return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}
	module.exports = isFunction;
}));
//#endregion
//#region node_modules/lodash/_coreJsData.js
var require__coreJsData = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require__root()["__core-js_shared__"];
}));
//#endregion
//#region node_modules/lodash/_isMasked.js
var require__isMasked = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var coreJsData = require__coreJsData();
	/** Used to detect methods masquerading as native. */
	var maskSrcKey = function() {
		var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
		return uid ? "Symbol(src)_1." + uid : "";
	}();
	/**
	* Checks if `func` has its source masked.
	*
	* @private
	* @param {Function} func The function to check.
	* @returns {boolean} Returns `true` if `func` is masked, else `false`.
	*/
	function isMasked(func) {
		return !!maskSrcKey && maskSrcKey in func;
	}
	module.exports = isMasked;
}));
//#endregion
//#region node_modules/lodash/_toSource.js
var require__toSource = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;
	/**
	* Converts `func` to its source code.
	*
	* @private
	* @param {Function} func The function to convert.
	* @returns {string} Returns the source code.
	*/
	function toSource(func) {
		if (func != null) {
			try {
				return funcToString.call(func);
			} catch (e) {}
			try {
				return func + "";
			} catch (e) {}
		}
		return "";
	}
	module.exports = toSource;
}));
//#endregion
//#region node_modules/lodash/_baseIsNative.js
var require__baseIsNative = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isFunction = require_isFunction();
	var isMasked = require__isMasked();
	var isObject = require_isObject();
	var toSource = require__toSource();
	/**
	* Used to match `RegExp`
	* [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	*/
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	/** Used for built-in method references. */
	var funcProto = Function.prototype;
	var objectProto = Object.prototype;
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	/** Used to detect if a method is native. */
	var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
	/**
	* The base implementation of `_.isNative` without bad shim checks.
	*
	* @private
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is a native function,
	*  else `false`.
	*/
	function baseIsNative(value) {
		if (!isObject(value) || isMasked(value)) return false;
		return (isFunction(value) ? reIsNative : reIsHostCtor).test(toSource(value));
	}
	module.exports = baseIsNative;
}));
//#endregion
//#region node_modules/lodash/_getValue.js
var require__getValue = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Gets the value at `key` of `object`.
	*
	* @private
	* @param {Object} [object] The object to query.
	* @param {string} key The key of the property to get.
	* @returns {*} Returns the property value.
	*/
	function getValue(object, key) {
		return object == null ? void 0 : object[key];
	}
	module.exports = getValue;
}));
//#endregion
//#region node_modules/lodash/_getNative.js
var require__getNative = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseIsNative = require__baseIsNative();
	var getValue = require__getValue();
	/**
	* Gets the native function at `key` of `object`.
	*
	* @private
	* @param {Object} object The object to query.
	* @param {string} key The key of the method to get.
	* @returns {*} Returns the function if it's native, else `undefined`.
	*/
	function getNative(object, key) {
		var value = getValue(object, key);
		return baseIsNative(value) ? value : void 0;
	}
	module.exports = getNative;
}));
//#endregion
//#region node_modules/lodash/_Map.js
var require__Map = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require__getNative()(require__root(), "Map");
}));
//#endregion
//#region node_modules/lodash/_nativeCreate.js
var require__nativeCreate = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require__getNative()(Object, "create");
}));
//#endregion
//#region node_modules/lodash/_hashClear.js
var require__hashClear = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var nativeCreate = require__nativeCreate();
	/**
	* Removes all key-value entries from the hash.
	*
	* @private
	* @name clear
	* @memberOf Hash
	*/
	function hashClear() {
		this.__data__ = nativeCreate ? nativeCreate(null) : {};
		this.size = 0;
	}
	module.exports = hashClear;
}));
//#endregion
//#region node_modules/lodash/_hashDelete.js
var require__hashDelete = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Removes `key` and its value from the hash.
	*
	* @private
	* @name delete
	* @memberOf Hash
	* @param {Object} hash The hash to modify.
	* @param {string} key The key of the value to remove.
	* @returns {boolean} Returns `true` if the entry was removed, else `false`.
	*/
	function hashDelete(key) {
		var result = this.has(key) && delete this.__data__[key];
		this.size -= result ? 1 : 0;
		return result;
	}
	module.exports = hashDelete;
}));
//#endregion
//#region node_modules/lodash/_hashGet.js
var require__hashGet = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var nativeCreate = require__nativeCreate();
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = "__lodash_hash_undefined__";
	/** Used to check objects for own properties. */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	* Gets the hash value for `key`.
	*
	* @private
	* @name get
	* @memberOf Hash
	* @param {string} key The key of the value to get.
	* @returns {*} Returns the entry value.
	*/
	function hashGet(key) {
		var data = this.__data__;
		if (nativeCreate) {
			var result = data[key];
			return result === HASH_UNDEFINED ? void 0 : result;
		}
		return hasOwnProperty.call(data, key) ? data[key] : void 0;
	}
	module.exports = hashGet;
}));
//#endregion
//#region node_modules/lodash/_hashHas.js
var require__hashHas = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var nativeCreate = require__nativeCreate();
	/** Used to check objects for own properties. */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	* Checks if a hash value for `key` exists.
	*
	* @private
	* @name has
	* @memberOf Hash
	* @param {string} key The key of the entry to check.
	* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	*/
	function hashHas(key) {
		var data = this.__data__;
		return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
	}
	module.exports = hashHas;
}));
//#endregion
//#region node_modules/lodash/_hashSet.js
var require__hashSet = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var nativeCreate = require__nativeCreate();
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = "__lodash_hash_undefined__";
	/**
	* Sets the hash `key` to `value`.
	*
	* @private
	* @name set
	* @memberOf Hash
	* @param {string} key The key of the value to set.
	* @param {*} value The value to set.
	* @returns {Object} Returns the hash instance.
	*/
	function hashSet(key, value) {
		var data = this.__data__;
		this.size += this.has(key) ? 0 : 1;
		data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
		return this;
	}
	module.exports = hashSet;
}));
//#endregion
//#region node_modules/lodash/_Hash.js
var require__Hash = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var hashClear = require__hashClear();
	var hashDelete = require__hashDelete();
	var hashGet = require__hashGet();
	var hashHas = require__hashHas();
	var hashSet = require__hashSet();
	/**
	* Creates a hash object.
	*
	* @private
	* @constructor
	* @param {Array} [entries] The key-value pairs to cache.
	*/
	function Hash(entries) {
		var index = -1, length = entries == null ? 0 : entries.length;
		this.clear();
		while (++index < length) {
			var entry = entries[index];
			this.set(entry[0], entry[1]);
		}
	}
	Hash.prototype.clear = hashClear;
	Hash.prototype["delete"] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;
	module.exports = Hash;
}));
//#endregion
//#region node_modules/lodash/_mapCacheClear.js
var require__mapCacheClear = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Hash = require__Hash();
	var ListCache = require__ListCache();
	var Map = require__Map();
	/**
	* Removes all key-value entries from the map.
	*
	* @private
	* @name clear
	* @memberOf MapCache
	*/
	function mapCacheClear() {
		this.size = 0;
		this.__data__ = {
			"hash": new Hash(),
			"map": new (Map || ListCache)(),
			"string": new Hash()
		};
	}
	module.exports = mapCacheClear;
}));
//#endregion
//#region node_modules/lodash/_isKeyable.js
var require__isKeyable = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Checks if `value` is suitable for use as unique object key.
	*
	* @private
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	*/
	function isKeyable(value) {
		var type = typeof value;
		return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
	}
	module.exports = isKeyable;
}));
//#endregion
//#region node_modules/lodash/_getMapData.js
var require__getMapData = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isKeyable = require__isKeyable();
	/**
	* Gets the data for `map`.
	*
	* @private
	* @param {Object} map The map to query.
	* @param {string} key The reference key.
	* @returns {*} Returns the map data.
	*/
	function getMapData(map, key) {
		var data = map.__data__;
		return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
	}
	module.exports = getMapData;
}));
//#endregion
//#region node_modules/lodash/_mapCacheDelete.js
var require__mapCacheDelete = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var getMapData = require__getMapData();
	/**
	* Removes `key` and its value from the map.
	*
	* @private
	* @name delete
	* @memberOf MapCache
	* @param {string} key The key of the value to remove.
	* @returns {boolean} Returns `true` if the entry was removed, else `false`.
	*/
	function mapCacheDelete(key) {
		var result = getMapData(this, key)["delete"](key);
		this.size -= result ? 1 : 0;
		return result;
	}
	module.exports = mapCacheDelete;
}));
//#endregion
//#region node_modules/lodash/_mapCacheGet.js
var require__mapCacheGet = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var getMapData = require__getMapData();
	/**
	* Gets the map value for `key`.
	*
	* @private
	* @name get
	* @memberOf MapCache
	* @param {string} key The key of the value to get.
	* @returns {*} Returns the entry value.
	*/
	function mapCacheGet(key) {
		return getMapData(this, key).get(key);
	}
	module.exports = mapCacheGet;
}));
//#endregion
//#region node_modules/lodash/_mapCacheHas.js
var require__mapCacheHas = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var getMapData = require__getMapData();
	/**
	* Checks if a map value for `key` exists.
	*
	* @private
	* @name has
	* @memberOf MapCache
	* @param {string} key The key of the entry to check.
	* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	*/
	function mapCacheHas(key) {
		return getMapData(this, key).has(key);
	}
	module.exports = mapCacheHas;
}));
//#endregion
//#region node_modules/lodash/_mapCacheSet.js
var require__mapCacheSet = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var getMapData = require__getMapData();
	/**
	* Sets the map `key` to `value`.
	*
	* @private
	* @name set
	* @memberOf MapCache
	* @param {string} key The key of the value to set.
	* @param {*} value The value to set.
	* @returns {Object} Returns the map cache instance.
	*/
	function mapCacheSet(key, value) {
		var data = getMapData(this, key), size = data.size;
		data.set(key, value);
		this.size += data.size == size ? 0 : 1;
		return this;
	}
	module.exports = mapCacheSet;
}));
//#endregion
//#region node_modules/lodash/_MapCache.js
var require__MapCache = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var mapCacheClear = require__mapCacheClear();
	var mapCacheDelete = require__mapCacheDelete();
	var mapCacheGet = require__mapCacheGet();
	var mapCacheHas = require__mapCacheHas();
	var mapCacheSet = require__mapCacheSet();
	/**
	* Creates a map cache object to store key-value pairs.
	*
	* @private
	* @constructor
	* @param {Array} [entries] The key-value pairs to cache.
	*/
	function MapCache(entries) {
		var index = -1, length = entries == null ? 0 : entries.length;
		this.clear();
		while (++index < length) {
			var entry = entries[index];
			this.set(entry[0], entry[1]);
		}
	}
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype["delete"] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;
	module.exports = MapCache;
}));
//#endregion
//#region node_modules/lodash/_stackSet.js
var require__stackSet = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var ListCache = require__ListCache();
	var Map = require__Map();
	var MapCache = require__MapCache();
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;
	/**
	* Sets the stack `key` to `value`.
	*
	* @private
	* @name set
	* @memberOf Stack
	* @param {string} key The key of the value to set.
	* @param {*} value The value to set.
	* @returns {Object} Returns the stack cache instance.
	*/
	function stackSet(key, value) {
		var data = this.__data__;
		if (data instanceof ListCache) {
			var pairs = data.__data__;
			if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
				pairs.push([key, value]);
				this.size = ++data.size;
				return this;
			}
			data = this.__data__ = new MapCache(pairs);
		}
		data.set(key, value);
		this.size = data.size;
		return this;
	}
	module.exports = stackSet;
}));
//#endregion
//#region node_modules/lodash/_Stack.js
var require__Stack = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var ListCache = require__ListCache();
	var stackClear = require__stackClear();
	var stackDelete = require__stackDelete();
	var stackGet = require__stackGet();
	var stackHas = require__stackHas();
	var stackSet = require__stackSet();
	/**
	* Creates a stack cache object to store key-value pairs.
	*
	* @private
	* @constructor
	* @param {Array} [entries] The key-value pairs to cache.
	*/
	function Stack(entries) {
		var data = this.__data__ = new ListCache(entries);
		this.size = data.size;
	}
	Stack.prototype.clear = stackClear;
	Stack.prototype["delete"] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;
	module.exports = Stack;
}));
//#endregion
//#region node_modules/lodash/_setCacheAdd.js
var require__setCacheAdd = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = "__lodash_hash_undefined__";
	/**
	* Adds `value` to the array cache.
	*
	* @private
	* @name add
	* @memberOf SetCache
	* @alias push
	* @param {*} value The value to cache.
	* @returns {Object} Returns the cache instance.
	*/
	function setCacheAdd(value) {
		this.__data__.set(value, HASH_UNDEFINED);
		return this;
	}
	module.exports = setCacheAdd;
}));
//#endregion
//#region node_modules/lodash/_setCacheHas.js
var require__setCacheHas = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Checks if `value` is in the array cache.
	*
	* @private
	* @name has
	* @memberOf SetCache
	* @param {*} value The value to search for.
	* @returns {boolean} Returns `true` if `value` is found, else `false`.
	*/
	function setCacheHas(value) {
		return this.__data__.has(value);
	}
	module.exports = setCacheHas;
}));
//#endregion
//#region node_modules/lodash/_SetCache.js
var require__SetCache = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var MapCache = require__MapCache();
	var setCacheAdd = require__setCacheAdd();
	var setCacheHas = require__setCacheHas();
	/**
	*
	* Creates an array cache object to store unique values.
	*
	* @private
	* @constructor
	* @param {Array} [values] The values to cache.
	*/
	function SetCache(values) {
		var index = -1, length = values == null ? 0 : values.length;
		this.__data__ = new MapCache();
		while (++index < length) this.add(values[index]);
	}
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;
	module.exports = SetCache;
}));
//#endregion
//#region node_modules/lodash/_arraySome.js
var require__arraySome = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* A specialized version of `_.some` for arrays without support for iteratee
	* shorthands.
	*
	* @private
	* @param {Array} [array] The array to iterate over.
	* @param {Function} predicate The function invoked per iteration.
	* @returns {boolean} Returns `true` if any element passes the predicate check,
	*  else `false`.
	*/
	function arraySome(array, predicate) {
		var index = -1, length = array == null ? 0 : array.length;
		while (++index < length) if (predicate(array[index], index, array)) return true;
		return false;
	}
	module.exports = arraySome;
}));
//#endregion
//#region node_modules/lodash/_cacheHas.js
var require__cacheHas = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Checks if a `cache` value for `key` exists.
	*
	* @private
	* @param {Object} cache The cache to query.
	* @param {string} key The key of the entry to check.
	* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	*/
	function cacheHas(cache, key) {
		return cache.has(key);
	}
	module.exports = cacheHas;
}));
//#endregion
//#region node_modules/lodash/_equalArrays.js
var require__equalArrays = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var SetCache = require__SetCache();
	var arraySome = require__arraySome();
	var cacheHas = require__cacheHas();
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;
	var COMPARE_UNORDERED_FLAG = 2;
	/**
	* A specialized version of `baseIsEqualDeep` for arrays with support for
	* partial deep comparisons.
	*
	* @private
	* @param {Array} array The array to compare.
	* @param {Array} other The other array to compare.
	* @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	* @param {Function} customizer The function to customize comparisons.
	* @param {Function} equalFunc The function to determine equivalents of values.
	* @param {Object} stack Tracks traversed `array` and `other` objects.
	* @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	*/
	function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
		var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
		if (arrLength != othLength && !(isPartial && othLength > arrLength)) return false;
		var arrStacked = stack.get(array);
		var othStacked = stack.get(other);
		if (arrStacked && othStacked) return arrStacked == other && othStacked == array;
		var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
		stack.set(array, other);
		stack.set(other, array);
		while (++index < arrLength) {
			var arrValue = array[index], othValue = other[index];
			if (customizer) var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
			if (compared !== void 0) {
				if (compared) continue;
				result = false;
				break;
			}
			if (seen) {
				if (!arraySome(other, function(othValue, othIndex) {
					if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) return seen.push(othIndex);
				})) {
					result = false;
					break;
				}
			} else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
				result = false;
				break;
			}
		}
		stack["delete"](array);
		stack["delete"](other);
		return result;
	}
	module.exports = equalArrays;
}));
//#endregion
//#region node_modules/lodash/_Uint8Array.js
var require__Uint8Array = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require__root().Uint8Array;
}));
//#endregion
//#region node_modules/lodash/_mapToArray.js
var require__mapToArray = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Converts `map` to its key-value pairs.
	*
	* @private
	* @param {Object} map The map to convert.
	* @returns {Array} Returns the key-value pairs.
	*/
	function mapToArray(map) {
		var index = -1, result = Array(map.size);
		map.forEach(function(value, key) {
			result[++index] = [key, value];
		});
		return result;
	}
	module.exports = mapToArray;
}));
//#endregion
//#region node_modules/lodash/_setToArray.js
var require__setToArray = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Converts `set` to an array of its values.
	*
	* @private
	* @param {Object} set The set to convert.
	* @returns {Array} Returns the values.
	*/
	function setToArray(set) {
		var index = -1, result = Array(set.size);
		set.forEach(function(value) {
			result[++index] = value;
		});
		return result;
	}
	module.exports = setToArray;
}));
//#endregion
//#region node_modules/lodash/_equalByTag.js
var require__equalByTag = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Symbol = require__Symbol();
	var Uint8Array = require__Uint8Array();
	var eq = require_eq();
	var equalArrays = require__equalArrays();
	var mapToArray = require__mapToArray();
	var setToArray = require__setToArray();
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;
	var COMPARE_UNORDERED_FLAG = 2;
	/** `Object#toString` result references. */
	var boolTag = "[object Boolean]";
	var dateTag = "[object Date]";
	var errorTag = "[object Error]";
	var mapTag = "[object Map]";
	var numberTag = "[object Number]";
	var regexpTag = "[object RegExp]";
	var setTag = "[object Set]";
	var stringTag = "[object String]";
	var symbolTag = "[object Symbol]";
	var arrayBufferTag = "[object ArrayBuffer]";
	var dataViewTag = "[object DataView]";
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : void 0;
	var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
	/**
	* A specialized version of `baseIsEqualDeep` for comparing objects of
	* the same `toStringTag`.
	*
	* **Note:** This function only supports comparing values with tags of
	* `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	*
	* @private
	* @param {Object} object The object to compare.
	* @param {Object} other The other object to compare.
	* @param {string} tag The `toStringTag` of the objects to compare.
	* @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	* @param {Function} customizer The function to customize comparisons.
	* @param {Function} equalFunc The function to determine equivalents of values.
	* @param {Object} stack Tracks traversed `object` and `other` objects.
	* @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	*/
	function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
		switch (tag) {
			case dataViewTag:
				if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) return false;
				object = object.buffer;
				other = other.buffer;
			case arrayBufferTag:
				if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) return false;
				return true;
			case boolTag:
			case dateTag:
			case numberTag: return eq(+object, +other);
			case errorTag: return object.name == other.name && object.message == other.message;
			case regexpTag:
			case stringTag: return object == other + "";
			case mapTag: var convert = mapToArray;
			case setTag:
				var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
				convert || (convert = setToArray);
				if (object.size != other.size && !isPartial) return false;
				var stacked = stack.get(object);
				if (stacked) return stacked == other;
				bitmask |= COMPARE_UNORDERED_FLAG;
				stack.set(object, other);
				var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
				stack["delete"](object);
				return result;
			case symbolTag: if (symbolValueOf) return symbolValueOf.call(object) == symbolValueOf.call(other);
		}
		return false;
	}
	module.exports = equalByTag;
}));
//#endregion
//#region node_modules/lodash/_arrayPush.js
var require__arrayPush = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Appends the elements of `values` to `array`.
	*
	* @private
	* @param {Array} array The array to modify.
	* @param {Array} values The values to append.
	* @returns {Array} Returns `array`.
	*/
	function arrayPush(array, values) {
		var index = -1, length = values.length, offset = array.length;
		while (++index < length) array[offset + index] = values[index];
		return array;
	}
	module.exports = arrayPush;
}));
//#endregion
//#region node_modules/lodash/isArray.js
var require_isArray = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = Array.isArray;
}));
//#endregion
//#region node_modules/lodash/_baseGetAllKeys.js
var require__baseGetAllKeys = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var arrayPush = require__arrayPush();
	var isArray = require_isArray();
	/**
	* The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	* `keysFunc` and `symbolsFunc` to get the enumerable property names and
	* symbols of `object`.
	*
	* @private
	* @param {Object} object The object to query.
	* @param {Function} keysFunc The function to get the keys of `object`.
	* @param {Function} symbolsFunc The function to get the symbols of `object`.
	* @returns {Array} Returns the array of property names and symbols.
	*/
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
		var result = keysFunc(object);
		return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	}
	module.exports = baseGetAllKeys;
}));
//#endregion
//#region node_modules/lodash/_arrayFilter.js
var require__arrayFilter = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* A specialized version of `_.filter` for arrays without support for
	* iteratee shorthands.
	*
	* @private
	* @param {Array} [array] The array to iterate over.
	* @param {Function} predicate The function invoked per iteration.
	* @returns {Array} Returns the new filtered array.
	*/
	function arrayFilter(array, predicate) {
		var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
		while (++index < length) {
			var value = array[index];
			if (predicate(value, index, array)) result[resIndex++] = value;
		}
		return result;
	}
	module.exports = arrayFilter;
}));
//#endregion
//#region node_modules/lodash/stubArray.js
var require_stubArray = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* This method returns a new empty array.
	*
	* @static
	* @memberOf _
	* @since 4.13.0
	* @category Util
	* @returns {Array} Returns the new empty array.
	* @example
	*
	* var arrays = _.times(2, _.stubArray);
	*
	* console.log(arrays);
	* // => [[], []]
	*
	* console.log(arrays[0] === arrays[1]);
	* // => false
	*/
	function stubArray() {
		return [];
	}
	module.exports = stubArray;
}));
//#endregion
//#region node_modules/lodash/_getSymbols.js
var require__getSymbols = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var arrayFilter = require__arrayFilter();
	var stubArray = require_stubArray();
	/** Built-in value references. */
	var propertyIsEnumerable = Object.prototype.propertyIsEnumerable;
	var nativeGetSymbols = Object.getOwnPropertySymbols;
	module.exports = !nativeGetSymbols ? stubArray : function(object) {
		if (object == null) return [];
		object = Object(object);
		return arrayFilter(nativeGetSymbols(object), function(symbol) {
			return propertyIsEnumerable.call(object, symbol);
		});
	};
}));
//#endregion
//#region node_modules/lodash/_baseTimes.js
var require__baseTimes = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* The base implementation of `_.times` without support for iteratee shorthands
	* or max array length checks.
	*
	* @private
	* @param {number} n The number of times to invoke `iteratee`.
	* @param {Function} iteratee The function invoked per iteration.
	* @returns {Array} Returns the array of results.
	*/
	function baseTimes(n, iteratee) {
		var index = -1, result = Array(n);
		while (++index < n) result[index] = iteratee(index);
		return result;
	}
	module.exports = baseTimes;
}));
//#endregion
//#region node_modules/lodash/_baseIsArguments.js
var require__baseIsArguments = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseGetTag = require__baseGetTag();
	var isObjectLike = require_isObjectLike();
	/** `Object#toString` result references. */
	var argsTag = "[object Arguments]";
	/**
	* The base implementation of `_.isArguments`.
	*
	* @private
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is an `arguments` object,
	*/
	function baseIsArguments(value) {
		return isObjectLike(value) && baseGetTag(value) == argsTag;
	}
	module.exports = baseIsArguments;
}));
//#endregion
//#region node_modules/lodash/isArguments.js
var require_isArguments = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseIsArguments = require__baseIsArguments();
	var isObjectLike = require_isObjectLike();
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	module.exports = baseIsArguments(function() {
		return arguments;
	}()) ? baseIsArguments : function(value) {
		return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
	};
}));
//#endregion
//#region node_modules/lodash/stubFalse.js
var require_stubFalse = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* This method returns `false`.
	*
	* @static
	* @memberOf _
	* @since 4.13.0
	* @category Util
	* @returns {boolean} Returns `false`.
	* @example
	*
	* _.times(2, _.stubFalse);
	* // => [false, false]
	*/
	function stubFalse() {
		return false;
	}
	module.exports = stubFalse;
}));
//#endregion
//#region node_modules/lodash/isBuffer.js
var require_isBuffer = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var root = require__root();
	var stubFalse = require_stubFalse();
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
	/** Built-in value references. */
	var Buffer = freeModule && freeModule.exports === freeExports ? root.Buffer : void 0;
	module.exports = (Buffer ? Buffer.isBuffer : void 0) || stubFalse;
}));
//#endregion
//#region node_modules/lodash/_isIndex.js
var require__isIndex = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;
	/**
	* Checks if `value` is a valid array-like index.
	*
	* @private
	* @param {*} value The value to check.
	* @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	* @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	*/
	function isIndex(value, length) {
		var type = typeof value;
		length = length == null ? MAX_SAFE_INTEGER : length;
		return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
	}
	module.exports = isIndex;
}));
//#endregion
//#region node_modules/lodash/isLength.js
var require_isLength = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	/**
	* Checks if `value` is a valid array-like length.
	*
	* **Note:** This method is loosely based on
	* [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	*
	* @static
	* @memberOf _
	* @since 4.0.0
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	* @example
	*
	* _.isLength(3);
	* // => true
	*
	* _.isLength(Number.MIN_VALUE);
	* // => false
	*
	* _.isLength(Infinity);
	* // => false
	*
	* _.isLength('3');
	* // => false
	*/
	function isLength(value) {
		return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	module.exports = isLength;
}));
//#endregion
//#region node_modules/lodash/_baseIsTypedArray.js
var require__baseIsTypedArray = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseGetTag = require__baseGetTag();
	var isLength = require_isLength();
	var isObjectLike = require_isObjectLike();
	/** `Object#toString` result references. */
	var argsTag = "[object Arguments]";
	var arrayTag = "[object Array]";
	var boolTag = "[object Boolean]";
	var dateTag = "[object Date]";
	var errorTag = "[object Error]";
	var funcTag = "[object Function]";
	var mapTag = "[object Map]";
	var numberTag = "[object Number]";
	var objectTag = "[object Object]";
	var regexpTag = "[object RegExp]";
	var setTag = "[object Set]";
	var stringTag = "[object String]";
	var weakMapTag = "[object WeakMap]";
	var arrayBufferTag = "[object ArrayBuffer]";
	var dataViewTag = "[object DataView]";
	var float32Tag = "[object Float32Array]";
	var float64Tag = "[object Float64Array]";
	var int8Tag = "[object Int8Array]";
	var int16Tag = "[object Int16Array]";
	var int32Tag = "[object Int32Array]";
	var uint8Tag = "[object Uint8Array]";
	var uint8ClampedTag = "[object Uint8ClampedArray]";
	var uint16Tag = "[object Uint16Array]";
	var uint32Tag = "[object Uint32Array]";
	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
	/**
	* The base implementation of `_.isTypedArray` without Node.js optimizations.
	*
	* @private
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	*/
	function baseIsTypedArray(value) {
		return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
	}
	module.exports = baseIsTypedArray;
}));
//#endregion
//#region node_modules/lodash/_baseUnary.js
var require__baseUnary = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* The base implementation of `_.unary` without support for storing metadata.
	*
	* @private
	* @param {Function} func The function to cap arguments for.
	* @returns {Function} Returns the new capped function.
	*/
	function baseUnary(func) {
		return function(value) {
			return func(value);
		};
	}
	module.exports = baseUnary;
}));
//#endregion
//#region node_modules/lodash/_nodeUtil.js
var require__nodeUtil = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var freeGlobal = require__freeGlobal();
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
	/** Detect free variable `process` from Node.js. */
	var freeProcess = freeModule && freeModule.exports === freeExports && freeGlobal.process;
	module.exports = function() {
		try {
			var types = freeModule && freeModule.require && freeModule.require("util").types;
			if (types) return types;
			return freeProcess && freeProcess.binding && freeProcess.binding("util");
		} catch (e) {}
	}();
}));
//#endregion
//#region node_modules/lodash/isTypedArray.js
var require_isTypedArray = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseIsTypedArray = require__baseIsTypedArray();
	var baseUnary = require__baseUnary();
	var nodeUtil = require__nodeUtil();
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
	module.exports = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
}));
//#endregion
//#region node_modules/lodash/_arrayLikeKeys.js
var require__arrayLikeKeys = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseTimes = require__baseTimes();
	var isArguments = require_isArguments();
	var isArray = require_isArray();
	var isBuffer = require_isBuffer();
	var isIndex = require__isIndex();
	var isTypedArray = require_isTypedArray();
	/** Used to check objects for own properties. */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	* Creates an array of the enumerable property names of the array-like `value`.
	*
	* @private
	* @param {*} value The value to query.
	* @param {boolean} inherited Specify returning inherited property names.
	* @returns {Array} Returns the array of property names.
	*/
	function arrayLikeKeys(value, inherited) {
		var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
		for (var key in value) if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) result.push(key);
		return result;
	}
	module.exports = arrayLikeKeys;
}));
//#endregion
//#region node_modules/lodash/_isPrototype.js
var require__isPrototype = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	/**
	* Checks if `value` is likely a prototype object.
	*
	* @private
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	*/
	function isPrototype(value) {
		var Ctor = value && value.constructor;
		return value === (typeof Ctor == "function" && Ctor.prototype || objectProto);
	}
	module.exports = isPrototype;
}));
//#endregion
//#region node_modules/lodash/_overArg.js
var require__overArg = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Creates a unary function that invokes `func` with its argument transformed.
	*
	* @private
	* @param {Function} func The function to wrap.
	* @param {Function} transform The argument transform.
	* @returns {Function} Returns the new function.
	*/
	function overArg(func, transform) {
		return function(arg) {
			return func(transform(arg));
		};
	}
	module.exports = overArg;
}));
//#endregion
//#region node_modules/lodash/_nativeKeys.js
var require__nativeKeys = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require__overArg()(Object.keys, Object);
}));
//#endregion
//#region node_modules/lodash/_baseKeys.js
var require__baseKeys = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isPrototype = require__isPrototype();
	var nativeKeys = require__nativeKeys();
	/** Used to check objects for own properties. */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	* The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	*
	* @private
	* @param {Object} object The object to query.
	* @returns {Array} Returns the array of property names.
	*/
	function baseKeys(object) {
		if (!isPrototype(object)) return nativeKeys(object);
		var result = [];
		for (var key in Object(object)) if (hasOwnProperty.call(object, key) && key != "constructor") result.push(key);
		return result;
	}
	module.exports = baseKeys;
}));
//#endregion
//#region node_modules/lodash/isArrayLike.js
var require_isArrayLike = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isFunction = require_isFunction();
	var isLength = require_isLength();
	/**
	* Checks if `value` is array-like. A value is considered array-like if it's
	* not a function and has a `value.length` that's an integer greater than or
	* equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	*
	* @static
	* @memberOf _
	* @since 4.0.0
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	* @example
	*
	* _.isArrayLike([1, 2, 3]);
	* // => true
	*
	* _.isArrayLike(document.body.children);
	* // => true
	*
	* _.isArrayLike('abc');
	* // => true
	*
	* _.isArrayLike(_.noop);
	* // => false
	*/
	function isArrayLike(value) {
		return value != null && isLength(value.length) && !isFunction(value);
	}
	module.exports = isArrayLike;
}));
//#endregion
//#region node_modules/lodash/keys.js
var require_keys = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var arrayLikeKeys = require__arrayLikeKeys();
	var baseKeys = require__baseKeys();
	var isArrayLike = require_isArrayLike();
	/**
	* Creates an array of the own enumerable property names of `object`.
	*
	* **Note:** Non-object values are coerced to objects. See the
	* [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	* for more details.
	*
	* @static
	* @since 0.1.0
	* @memberOf _
	* @category Object
	* @param {Object} object The object to query.
	* @returns {Array} Returns the array of property names.
	* @example
	*
	* function Foo() {
	*   this.a = 1;
	*   this.b = 2;
	* }
	*
	* Foo.prototype.c = 3;
	*
	* _.keys(new Foo);
	* // => ['a', 'b'] (iteration order is not guaranteed)
	*
	* _.keys('hi');
	* // => ['0', '1']
	*/
	function keys(object) {
		return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}
	module.exports = keys;
}));
//#endregion
//#region node_modules/lodash/_getAllKeys.js
var require__getAllKeys = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseGetAllKeys = require__baseGetAllKeys();
	var getSymbols = require__getSymbols();
	var keys = require_keys();
	/**
	* Creates an array of own enumerable property names and symbols of `object`.
	*
	* @private
	* @param {Object} object The object to query.
	* @returns {Array} Returns the array of property names and symbols.
	*/
	function getAllKeys(object) {
		return baseGetAllKeys(object, keys, getSymbols);
	}
	module.exports = getAllKeys;
}));
//#endregion
//#region node_modules/lodash/_equalObjects.js
var require__equalObjects = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var getAllKeys = require__getAllKeys();
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;
	/** Used to check objects for own properties. */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	* A specialized version of `baseIsEqualDeep` for objects with support for
	* partial deep comparisons.
	*
	* @private
	* @param {Object} object The object to compare.
	* @param {Object} other The other object to compare.
	* @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	* @param {Function} customizer The function to customize comparisons.
	* @param {Function} equalFunc The function to determine equivalents of values.
	* @param {Object} stack Tracks traversed `object` and `other` objects.
	* @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	*/
	function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
		var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length;
		if (objLength != getAllKeys(other).length && !isPartial) return false;
		var index = objLength;
		while (index--) {
			var key = objProps[index];
			if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) return false;
		}
		var objStacked = stack.get(object);
		var othStacked = stack.get(other);
		if (objStacked && othStacked) return objStacked == other && othStacked == object;
		var result = true;
		stack.set(object, other);
		stack.set(other, object);
		var skipCtor = isPartial;
		while (++index < objLength) {
			key = objProps[index];
			var objValue = object[key], othValue = other[key];
			if (customizer) var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
			if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
				result = false;
				break;
			}
			skipCtor || (skipCtor = key == "constructor");
		}
		if (result && !skipCtor) {
			var objCtor = object.constructor, othCtor = other.constructor;
			if (objCtor != othCtor && "constructor" in object && "constructor" in other && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) result = false;
		}
		stack["delete"](object);
		stack["delete"](other);
		return result;
	}
	module.exports = equalObjects;
}));
//#endregion
//#region node_modules/lodash/_DataView.js
var require__DataView = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require__getNative()(require__root(), "DataView");
}));
//#endregion
//#region node_modules/lodash/_Promise.js
var require__Promise = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require__getNative()(require__root(), "Promise");
}));
//#endregion
//#region node_modules/lodash/_Set.js
var require__Set = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require__getNative()(require__root(), "Set");
}));
//#endregion
//#region node_modules/lodash/_WeakMap.js
var require__WeakMap = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require__getNative()(require__root(), "WeakMap");
}));
//#endregion
//#region node_modules/lodash/_getTag.js
var require__getTag = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var DataView = require__DataView();
	var Map = require__Map();
	var Promise = require__Promise();
	var Set = require__Set();
	var WeakMap = require__WeakMap();
	var baseGetTag = require__baseGetTag();
	var toSource = require__toSource();
	/** `Object#toString` result references. */
	var mapTag = "[object Map]";
	var objectTag = "[object Object]";
	var promiseTag = "[object Promise]";
	var setTag = "[object Set]";
	var weakMapTag = "[object WeakMap]";
	var dataViewTag = "[object DataView]";
	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView);
	var mapCtorString = toSource(Map);
	var promiseCtorString = toSource(Promise);
	var setCtorString = toSource(Set);
	var weakMapCtorString = toSource(WeakMap);
	/**
	* Gets the `toStringTag` of `value`.
	*
	* @private
	* @param {*} value The value to query.
	* @returns {string} Returns the `toStringTag`.
	*/
	var getTag = baseGetTag;
	if (DataView && getTag(new DataView(/* @__PURE__ */ new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) getTag = function(value) {
		var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
		if (ctorString) switch (ctorString) {
			case dataViewCtorString: return dataViewTag;
			case mapCtorString: return mapTag;
			case promiseCtorString: return promiseTag;
			case setCtorString: return setTag;
			case weakMapCtorString: return weakMapTag;
		}
		return result;
	};
	module.exports = getTag;
}));
//#endregion
//#region node_modules/lodash/_baseIsEqualDeep.js
var require__baseIsEqualDeep = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Stack = require__Stack();
	var equalArrays = require__equalArrays();
	var equalByTag = require__equalByTag();
	var equalObjects = require__equalObjects();
	var getTag = require__getTag();
	var isArray = require_isArray();
	var isBuffer = require_isBuffer();
	var isTypedArray = require_isTypedArray();
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;
	/** `Object#toString` result references. */
	var argsTag = "[object Arguments]";
	var arrayTag = "[object Array]";
	var objectTag = "[object Object]";
	/** Used to check objects for own properties. */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	* A specialized version of `baseIsEqual` for arrays and objects which performs
	* deep comparisons and tracks traversed objects enabling objects with circular
	* references to be compared.
	*
	* @private
	* @param {Object} object The object to compare.
	* @param {Object} other The other object to compare.
	* @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	* @param {Function} customizer The function to customize comparisons.
	* @param {Function} equalFunc The function to determine equivalents of values.
	* @param {Object} [stack] Tracks traversed `object` and `other` objects.
	* @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	*/
	function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
		var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
		objTag = objTag == argsTag ? objectTag : objTag;
		othTag = othTag == argsTag ? objectTag : othTag;
		var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
		if (isSameTag && isBuffer(object)) {
			if (!isBuffer(other)) return false;
			objIsArr = true;
			objIsObj = false;
		}
		if (isSameTag && !objIsObj) {
			stack || (stack = new Stack());
			return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
		}
		if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
			var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
			if (objIsWrapped || othIsWrapped) {
				var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
				stack || (stack = new Stack());
				return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
			}
		}
		if (!isSameTag) return false;
		stack || (stack = new Stack());
		return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
	}
	module.exports = baseIsEqualDeep;
}));
//#endregion
//#region node_modules/lodash/_baseIsEqual.js
var require__baseIsEqual = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseIsEqualDeep = require__baseIsEqualDeep();
	var isObjectLike = require_isObjectLike();
	/**
	* The base implementation of `_.isEqual` which supports partial comparisons
	* and tracks traversed objects.
	*
	* @private
	* @param {*} value The value to compare.
	* @param {*} other The other value to compare.
	* @param {boolean} bitmask The bitmask flags.
	*  1 - Unordered comparison
	*  2 - Partial comparison
	* @param {Function} [customizer] The function to customize comparisons.
	* @param {Object} [stack] Tracks traversed `value` and `other` objects.
	* @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	*/
	function baseIsEqual(value, other, bitmask, customizer, stack) {
		if (value === other) return true;
		if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) return value !== value && other !== other;
		return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
	}
	module.exports = baseIsEqual;
}));
//#endregion
//#region node_modules/lodash/isEqual.js
var require_isEqual = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseIsEqual = require__baseIsEqual();
	/**
	* Performs a deep comparison between two values to determine if they are
	* equivalent.
	*
	* **Note:** This method supports comparing arrays, array buffers, booleans,
	* date objects, error objects, maps, numbers, `Object` objects, regexes,
	* sets, strings, symbols, and typed arrays. `Object` objects are compared
	* by their own, not inherited, enumerable properties. Functions and DOM
	* nodes are compared by strict equality, i.e. `===`.
	*
	* @static
	* @memberOf _
	* @since 0.1.0
	* @category Lang
	* @param {*} value The value to compare.
	* @param {*} other The other value to compare.
	* @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	* @example
	*
	* var object = { 'a': 1 };
	* var other = { 'a': 1 };
	*
	* _.isEqual(object, other);
	* // => true
	*
	* object === other;
	* // => false
	*/
	function isEqual(value, other) {
		return baseIsEqual(value, other);
	}
	module.exports = isEqual;
}));
//#endregion
//#region node_modules/lodash/memoize.js
var require_memoize = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var MapCache = require__MapCache();
	/** Error message constants. */
	var FUNC_ERROR_TEXT = "Expected a function";
	/**
	* Creates a function that memoizes the result of `func`. If `resolver` is
	* provided, it determines the cache key for storing the result based on the
	* arguments provided to the memoized function. By default, the first argument
	* provided to the memoized function is used as the map cache key. The `func`
	* is invoked with the `this` binding of the memoized function.
	*
	* **Note:** The cache is exposed as the `cache` property on the memoized
	* function. Its creation may be customized by replacing the `_.memoize.Cache`
	* constructor with one whose instances implement the
	* [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	* method interface of `clear`, `delete`, `get`, `has`, and `set`.
	*
	* @static
	* @memberOf _
	* @since 0.1.0
	* @category Function
	* @param {Function} func The function to have its output memoized.
	* @param {Function} [resolver] The function to resolve the cache key.
	* @returns {Function} Returns the new memoized function.
	* @example
	*
	* var object = { 'a': 1, 'b': 2 };
	* var other = { 'c': 3, 'd': 4 };
	*
	* var values = _.memoize(_.values);
	* values(object);
	* // => [1, 2]
	*
	* values(other);
	* // => [3, 4]
	*
	* object.a = 2;
	* values(object);
	* // => [1, 2]
	*
	* // Modify the result cache.
	* values.cache.set(object, ['a', 'b']);
	* values(object);
	* // => ['a', 'b']
	*
	* // Replace `_.memoize.Cache`.
	* _.memoize.Cache = WeakMap;
	*/
	function memoize(func, resolver) {
		if (typeof func != "function" || resolver != null && typeof resolver != "function") throw new TypeError(FUNC_ERROR_TEXT);
		var memoized = function() {
			var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
			if (cache.has(key)) return cache.get(key);
			var result = func.apply(this, args);
			memoized.cache = cache.set(key, result) || cache;
			return result;
		};
		memoized.cache = new (memoize.Cache || MapCache)();
		return memoized;
	}
	memoize.Cache = MapCache;
	module.exports = memoize;
}));
//#endregion
//#region node_modules/lodash/_arrayReduce.js
var require__arrayReduce = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* A specialized version of `_.reduce` for arrays without support for
	* iteratee shorthands.
	*
	* @private
	* @param {Array} [array] The array to iterate over.
	* @param {Function} iteratee The function invoked per iteration.
	* @param {*} [accumulator] The initial value.
	* @param {boolean} [initAccum] Specify using the first element of `array` as
	*  the initial value.
	* @returns {*} Returns the accumulated value.
	*/
	function arrayReduce(array, iteratee, accumulator, initAccum) {
		var index = -1, length = array == null ? 0 : array.length;
		if (initAccum && length) accumulator = array[++index];
		while (++index < length) accumulator = iteratee(accumulator, array[index], index, array);
		return accumulator;
	}
	module.exports = arrayReduce;
}));
//#endregion
//#region node_modules/lodash/_basePropertyOf.js
var require__basePropertyOf = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* The base implementation of `_.propertyOf` without support for deep paths.
	*
	* @private
	* @param {Object} object The object to query.
	* @returns {Function} Returns the new accessor function.
	*/
	function basePropertyOf(object) {
		return function(key) {
			return object == null ? void 0 : object[key];
		};
	}
	module.exports = basePropertyOf;
}));
//#endregion
//#region node_modules/lodash/_deburrLetter.js
var require__deburrLetter = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require__basePropertyOf()({
		"À": "A",
		"Á": "A",
		"Â": "A",
		"Ã": "A",
		"Ä": "A",
		"Å": "A",
		"à": "a",
		"á": "a",
		"â": "a",
		"ã": "a",
		"ä": "a",
		"å": "a",
		"Ç": "C",
		"ç": "c",
		"Ð": "D",
		"ð": "d",
		"È": "E",
		"É": "E",
		"Ê": "E",
		"Ë": "E",
		"è": "e",
		"é": "e",
		"ê": "e",
		"ë": "e",
		"Ì": "I",
		"Í": "I",
		"Î": "I",
		"Ï": "I",
		"ì": "i",
		"í": "i",
		"î": "i",
		"ï": "i",
		"Ñ": "N",
		"ñ": "n",
		"Ò": "O",
		"Ó": "O",
		"Ô": "O",
		"Õ": "O",
		"Ö": "O",
		"Ø": "O",
		"ò": "o",
		"ó": "o",
		"ô": "o",
		"õ": "o",
		"ö": "o",
		"ø": "o",
		"Ù": "U",
		"Ú": "U",
		"Û": "U",
		"Ü": "U",
		"ù": "u",
		"ú": "u",
		"û": "u",
		"ü": "u",
		"Ý": "Y",
		"ý": "y",
		"ÿ": "y",
		"Æ": "Ae",
		"æ": "ae",
		"Þ": "Th",
		"þ": "th",
		"ß": "ss",
		"Ā": "A",
		"Ă": "A",
		"Ą": "A",
		"ā": "a",
		"ă": "a",
		"ą": "a",
		"Ć": "C",
		"Ĉ": "C",
		"Ċ": "C",
		"Č": "C",
		"ć": "c",
		"ĉ": "c",
		"ċ": "c",
		"č": "c",
		"Ď": "D",
		"Đ": "D",
		"ď": "d",
		"đ": "d",
		"Ē": "E",
		"Ĕ": "E",
		"Ė": "E",
		"Ę": "E",
		"Ě": "E",
		"ē": "e",
		"ĕ": "e",
		"ė": "e",
		"ę": "e",
		"ě": "e",
		"Ĝ": "G",
		"Ğ": "G",
		"Ġ": "G",
		"Ģ": "G",
		"ĝ": "g",
		"ğ": "g",
		"ġ": "g",
		"ģ": "g",
		"Ĥ": "H",
		"Ħ": "H",
		"ĥ": "h",
		"ħ": "h",
		"Ĩ": "I",
		"Ī": "I",
		"Ĭ": "I",
		"Į": "I",
		"İ": "I",
		"ĩ": "i",
		"ī": "i",
		"ĭ": "i",
		"į": "i",
		"ı": "i",
		"Ĵ": "J",
		"ĵ": "j",
		"Ķ": "K",
		"ķ": "k",
		"ĸ": "k",
		"Ĺ": "L",
		"Ļ": "L",
		"Ľ": "L",
		"Ŀ": "L",
		"Ł": "L",
		"ĺ": "l",
		"ļ": "l",
		"ľ": "l",
		"ŀ": "l",
		"ł": "l",
		"Ń": "N",
		"Ņ": "N",
		"Ň": "N",
		"Ŋ": "N",
		"ń": "n",
		"ņ": "n",
		"ň": "n",
		"ŋ": "n",
		"Ō": "O",
		"Ŏ": "O",
		"Ő": "O",
		"ō": "o",
		"ŏ": "o",
		"ő": "o",
		"Ŕ": "R",
		"Ŗ": "R",
		"Ř": "R",
		"ŕ": "r",
		"ŗ": "r",
		"ř": "r",
		"Ś": "S",
		"Ŝ": "S",
		"Ş": "S",
		"Š": "S",
		"ś": "s",
		"ŝ": "s",
		"ş": "s",
		"š": "s",
		"Ţ": "T",
		"Ť": "T",
		"Ŧ": "T",
		"ţ": "t",
		"ť": "t",
		"ŧ": "t",
		"Ũ": "U",
		"Ū": "U",
		"Ŭ": "U",
		"Ů": "U",
		"Ű": "U",
		"Ų": "U",
		"ũ": "u",
		"ū": "u",
		"ŭ": "u",
		"ů": "u",
		"ű": "u",
		"ų": "u",
		"Ŵ": "W",
		"ŵ": "w",
		"Ŷ": "Y",
		"ŷ": "y",
		"Ÿ": "Y",
		"Ź": "Z",
		"Ż": "Z",
		"Ž": "Z",
		"ź": "z",
		"ż": "z",
		"ž": "z",
		"Ĳ": "IJ",
		"ĳ": "ij",
		"Œ": "Oe",
		"œ": "oe",
		"ŉ": "'n",
		"ſ": "s"
	});
}));
//#endregion
//#region node_modules/lodash/_arrayMap.js
var require__arrayMap = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* A specialized version of `_.map` for arrays without support for iteratee
	* shorthands.
	*
	* @private
	* @param {Array} [array] The array to iterate over.
	* @param {Function} iteratee The function invoked per iteration.
	* @returns {Array} Returns the new mapped array.
	*/
	function arrayMap(array, iteratee) {
		var index = -1, length = array == null ? 0 : array.length, result = Array(length);
		while (++index < length) result[index] = iteratee(array[index], index, array);
		return result;
	}
	module.exports = arrayMap;
}));
//#endregion
//#region node_modules/lodash/_baseToString.js
var require__baseToString = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Symbol = require__Symbol();
	var arrayMap = require__arrayMap();
	var isArray = require_isArray();
	var isSymbol = require_isSymbol();
	/** Used as references for various `Number` constants. */
	var INFINITY = Infinity;
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : void 0;
	var symbolToString = symbolProto ? symbolProto.toString : void 0;
	/**
	* The base implementation of `_.toString` which doesn't convert nullish
	* values to empty strings.
	*
	* @private
	* @param {*} value The value to process.
	* @returns {string} Returns the string.
	*/
	function baseToString(value) {
		if (typeof value == "string") return value;
		if (isArray(value)) return arrayMap(value, baseToString) + "";
		if (isSymbol(value)) return symbolToString ? symbolToString.call(value) : "";
		var result = value + "";
		return result == "0" && 1 / value == -INFINITY ? "-0" : result;
	}
	module.exports = baseToString;
}));
//#endregion
//#region node_modules/lodash/toString.js
var require_toString = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseToString = require__baseToString();
	/**
	* Converts `value` to a string. An empty string is returned for `null`
	* and `undefined` values. The sign of `-0` is preserved.
	*
	* @static
	* @memberOf _
	* @since 4.0.0
	* @category Lang
	* @param {*} value The value to convert.
	* @returns {string} Returns the converted string.
	* @example
	*
	* _.toString(null);
	* // => ''
	*
	* _.toString(-0);
	* // => '-0'
	*
	* _.toString([1, 2, 3]);
	* // => '1,2,3'
	*/
	function toString(value) {
		return value == null ? "" : baseToString(value);
	}
	module.exports = toString;
}));
//#endregion
//#region node_modules/lodash/deburr.js
var require_deburr = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var deburrLetter = require__deburrLetter();
	var toString = require_toString();
	/** Used to match Latin Unicode letters (excluding mathematical operators). */
	var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
	/**
	* Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
	* [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
	*/
	var reComboMark = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g");
	/**
	* Deburrs `string` by converting
	* [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
	* and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
	* letters to basic Latin letters and removing
	* [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
	*
	* @static
	* @memberOf _
	* @since 3.0.0
	* @category String
	* @param {string} [string=''] The string to deburr.
	* @returns {string} Returns the deburred string.
	* @example
	*
	* _.deburr('déjà vu');
	* // => 'deja vu'
	*/
	function deburr(string) {
		string = toString(string);
		return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
	}
	module.exports = deburr;
}));
//#endregion
//#region node_modules/lodash/_asciiWords.js
var require__asciiWords = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** Used to match words composed of alphanumeric characters. */
	var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
	/**
	* Splits an ASCII `string` into an array of its words.
	*
	* @private
	* @param {string} The string to inspect.
	* @returns {Array} Returns the words of `string`.
	*/
	function asciiWords(string) {
		return string.match(reAsciiWord) || [];
	}
	module.exports = asciiWords;
}));
//#endregion
//#region node_modules/lodash/_hasUnicodeWord.js
var require__hasUnicodeWord = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** Used to detect strings that need a more robust regexp to match words. */
	var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
	/**
	* Checks if `string` contains a word composed of Unicode symbols.
	*
	* @private
	* @param {string} string The string to inspect.
	* @returns {boolean} Returns `true` if a word is found, else `false`.
	*/
	function hasUnicodeWord(string) {
		return reHasUnicodeWord.test(string);
	}
	module.exports = hasUnicodeWord;
}));
//#endregion
//#region node_modules/lodash/_unicodeWords.js
var require__unicodeWords = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** Used to compose unicode character classes. */
	var rsAstralRange = "\\ud800-\\udfff";
	var rsComboRange = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff";
	var rsDingbatRange = "\\u2700-\\u27bf";
	var rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff";
	var rsMathOpRange = "\\xac\\xb1\\xd7\\xf7";
	var rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf";
	var rsPunctuationRange = "\\u2000-\\u206f";
	var rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000";
	var rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde";
	var rsVarRange = "\\ufe0e\\ufe0f";
	var rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
	/** Used to compose unicode capture groups. */
	var rsApos = "['’]";
	var rsBreak = "[" + rsBreakRange + "]";
	var rsCombo = "[" + rsComboRange + "]";
	var rsDigits = "\\d+";
	var rsDingbat = "[" + rsDingbatRange + "]";
	var rsLower = "[" + rsLowerRange + "]";
	var rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]";
	var rsModifier = "(?:" + rsCombo + "|\\ud83c[\\udffb-\\udfff])";
	var rsNonAstral = "[^" + rsAstralRange + "]";
	var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
	var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
	var rsUpper = "[" + rsUpperRange + "]";
	var rsZWJ = "\\u200d";
	/** Used to compose unicode regexes. */
	var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")";
	var rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")";
	var rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?";
	var rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?";
	var reOptMod = rsModifier + "?";
	var rsOptVar = "[" + rsVarRange + "]?";
	var rsOptJoin = "(?:" + rsZWJ + "(?:" + [
		rsNonAstral,
		rsRegional,
		rsSurrPair
	].join("|") + ")" + rsOptVar + reOptMod + ")*";
	var rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])";
	var rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])";
	var rsSeq = rsOptVar + reOptMod + rsOptJoin;
	var rsEmoji = "(?:" + [
		rsDingbat,
		rsRegional,
		rsSurrPair
	].join("|") + ")" + rsSeq;
	/** Used to match complex or compound words. */
	var reUnicodeWord = RegExp([
		rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [
			rsBreak,
			rsUpper,
			"$"
		].join("|") + ")",
		rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [
			rsBreak,
			rsUpper + rsMiscLower,
			"$"
		].join("|") + ")",
		rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
		rsUpper + "+" + rsOptContrUpper,
		rsOrdUpper,
		rsOrdLower,
		rsDigits,
		rsEmoji
	].join("|"), "g");
	/**
	* Splits a Unicode `string` into an array of its words.
	*
	* @private
	* @param {string} The string to inspect.
	* @returns {Array} Returns the words of `string`.
	*/
	function unicodeWords(string) {
		return string.match(reUnicodeWord) || [];
	}
	module.exports = unicodeWords;
}));
//#endregion
//#region node_modules/lodash/words.js
var require_words = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var asciiWords = require__asciiWords();
	var hasUnicodeWord = require__hasUnicodeWord();
	var toString = require_toString();
	var unicodeWords = require__unicodeWords();
	/**
	* Splits `string` into an array of its words.
	*
	* @static
	* @memberOf _
	* @since 3.0.0
	* @category String
	* @param {string} [string=''] The string to inspect.
	* @param {RegExp|string} [pattern] The pattern to match words.
	* @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	* @returns {Array} Returns the words of `string`.
	* @example
	*
	* _.words('fred, barney, & pebbles');
	* // => ['fred', 'barney', 'pebbles']
	*
	* _.words('fred, barney, & pebbles', /[^, ]+/g);
	* // => ['fred', 'barney', '&', 'pebbles']
	*/
	function words(string, pattern, guard) {
		string = toString(string);
		pattern = guard ? void 0 : pattern;
		if (pattern === void 0) return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
		return string.match(pattern) || [];
	}
	module.exports = words;
}));
//#endregion
//#region node_modules/lodash/_createCompounder.js
var require__createCompounder = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var arrayReduce = require__arrayReduce();
	var deburr = require_deburr();
	var words = require_words();
	/** Used to match apostrophes. */
	var reApos = RegExp("['’]", "g");
	/**
	* Creates a function like `_.camelCase`.
	*
	* @private
	* @param {Function} callback The function to combine each word.
	* @returns {Function} Returns the new compounder function.
	*/
	function createCompounder(callback) {
		return function(string) {
			return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
		};
	}
	module.exports = createCompounder;
}));
//#endregion
//#region node_modules/lodash/_baseSlice.js
var require__baseSlice = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* The base implementation of `_.slice` without an iteratee call guard.
	*
	* @private
	* @param {Array} array The array to slice.
	* @param {number} [start=0] The start position.
	* @param {number} [end=array.length] The end position.
	* @returns {Array} Returns the slice of `array`.
	*/
	function baseSlice(array, start, end) {
		var index = -1, length = array.length;
		if (start < 0) start = -start > length ? 0 : length + start;
		end = end > length ? length : end;
		if (end < 0) end += length;
		length = start > end ? 0 : end - start >>> 0;
		start >>>= 0;
		var result = Array(length);
		while (++index < length) result[index] = array[index + start];
		return result;
	}
	module.exports = baseSlice;
}));
//#endregion
//#region node_modules/lodash/_castSlice.js
var require__castSlice = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseSlice = require__baseSlice();
	/**
	* Casts `array` to a slice if it's needed.
	*
	* @private
	* @param {Array} array The array to inspect.
	* @param {number} start The start position.
	* @param {number} [end=array.length] The end position.
	* @returns {Array} Returns the cast slice.
	*/
	function castSlice(array, start, end) {
		var length = array.length;
		end = end === void 0 ? length : end;
		return !start && end >= length ? array : baseSlice(array, start, end);
	}
	module.exports = castSlice;
}));
//#endregion
//#region node_modules/lodash/_hasUnicode.js
var require__hasUnicode = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
	var reHasUnicode = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
	/**
	* Checks if `string` contains Unicode symbols.
	*
	* @private
	* @param {string} string The string to inspect.
	* @returns {boolean} Returns `true` if a symbol is found, else `false`.
	*/
	function hasUnicode(string) {
		return reHasUnicode.test(string);
	}
	module.exports = hasUnicode;
}));
//#endregion
//#region node_modules/lodash/_asciiToArray.js
var require__asciiToArray = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Converts an ASCII `string` to an array.
	*
	* @private
	* @param {string} string The string to convert.
	* @returns {Array} Returns the converted array.
	*/
	function asciiToArray(string) {
		return string.split("");
	}
	module.exports = asciiToArray;
}));
//#endregion
//#region node_modules/lodash/_unicodeToArray.js
var require__unicodeToArray = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** Used to compose unicode character classes. */
	var rsAstralRange = "\\ud800-\\udfff";
	var rsComboRange = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff";
	var rsVarRange = "\\ufe0e\\ufe0f";
	/** Used to compose unicode capture groups. */
	var rsAstral = "[" + rsAstralRange + "]";
	var rsCombo = "[" + rsComboRange + "]";
	var rsFitz = "\\ud83c[\\udffb-\\udfff]";
	var rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")";
	var rsNonAstral = "[^" + rsAstralRange + "]";
	var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
	var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
	var rsZWJ = "\\u200d";
	/** Used to compose unicode regexes. */
	var reOptMod = rsModifier + "?";
	var rsOptVar = "[" + rsVarRange + "]?";
	var rsOptJoin = "(?:" + rsZWJ + "(?:" + [
		rsNonAstral,
		rsRegional,
		rsSurrPair
	].join("|") + ")" + rsOptVar + reOptMod + ")*";
	var rsSeq = rsOptVar + reOptMod + rsOptJoin;
	var rsSymbol = "(?:" + [
		rsNonAstral + rsCombo + "?",
		rsCombo,
		rsRegional,
		rsSurrPair,
		rsAstral
	].join("|") + ")";
	/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
	var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
	/**
	* Converts a Unicode `string` to an array.
	*
	* @private
	* @param {string} string The string to convert.
	* @returns {Array} Returns the converted array.
	*/
	function unicodeToArray(string) {
		return string.match(reUnicode) || [];
	}
	module.exports = unicodeToArray;
}));
//#endregion
//#region node_modules/lodash/_stringToArray.js
var require__stringToArray = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var asciiToArray = require__asciiToArray();
	var hasUnicode = require__hasUnicode();
	var unicodeToArray = require__unicodeToArray();
	/**
	* Converts `string` to an array.
	*
	* @private
	* @param {string} string The string to convert.
	* @returns {Array} Returns the converted array.
	*/
	function stringToArray(string) {
		return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
	}
	module.exports = stringToArray;
}));
//#endregion
//#region node_modules/lodash/_createCaseFirst.js
var require__createCaseFirst = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var castSlice = require__castSlice();
	var hasUnicode = require__hasUnicode();
	var stringToArray = require__stringToArray();
	var toString = require_toString();
	/**
	* Creates a function like `_.lowerFirst`.
	*
	* @private
	* @param {string} methodName The name of the `String` case method to use.
	* @returns {Function} Returns the new case function.
	*/
	function createCaseFirst(methodName) {
		return function(string) {
			string = toString(string);
			var strSymbols = hasUnicode(string) ? stringToArray(string) : void 0;
			var chr = strSymbols ? strSymbols[0] : string.charAt(0);
			var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
			return chr[methodName]() + trailing;
		};
	}
	module.exports = createCaseFirst;
}));
//#endregion
//#region node_modules/lodash/upperFirst.js
var require_upperFirst = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require__createCaseFirst()("toUpperCase");
}));
//#endregion
//#region node_modules/lodash/startCase.js
var require_startCase = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var createCompounder = require__createCompounder();
	var upperFirst = require_upperFirst();
	module.exports = createCompounder(function(result, word, index) {
		return result + (index ? " " : "") + upperFirst(word);
	});
}));
//#endregion
//#region node_modules/lodash/_isFlattenable.js
var require__isFlattenable = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Symbol = require__Symbol();
	var isArguments = require_isArguments();
	var isArray = require_isArray();
	/** Built-in value references. */
	var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : void 0;
	/**
	* Checks if `value` is a flattenable `arguments` object or array.
	*
	* @private
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
	*/
	function isFlattenable(value) {
		return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
	}
	module.exports = isFlattenable;
}));
//#endregion
//#region node_modules/lodash/_baseFlatten.js
var require__baseFlatten = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var arrayPush = require__arrayPush();
	var isFlattenable = require__isFlattenable();
	/**
	* The base implementation of `_.flatten` with support for restricting flattening.
	*
	* @private
	* @param {Array} array The array to flatten.
	* @param {number} depth The maximum recursion depth.
	* @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
	* @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
	* @param {Array} [result=[]] The initial result value.
	* @returns {Array} Returns the new flattened array.
	*/
	function baseFlatten(array, depth, predicate, isStrict, result) {
		var index = -1, length = array.length;
		predicate || (predicate = isFlattenable);
		result || (result = []);
		while (++index < length) {
			var value = array[index];
			if (depth > 0 && predicate(value)) if (depth > 1) baseFlatten(value, depth - 1, predicate, isStrict, result);
			else arrayPush(result, value);
			else if (!isStrict) result[result.length] = value;
		}
		return result;
	}
	module.exports = baseFlatten;
}));
//#endregion
//#region node_modules/lodash/flatten.js
var require_flatten = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseFlatten = require__baseFlatten();
	/**
	* Flattens `array` a single level deep.
	*
	* @static
	* @memberOf _
	* @since 0.1.0
	* @category Array
	* @param {Array} array The array to flatten.
	* @returns {Array} Returns the new flattened array.
	* @example
	*
	* _.flatten([1, [2, [3, [4]], 5]]);
	* // => [1, 2, [3, [4]], 5]
	*/
	function flatten(array) {
		return (array == null ? 0 : array.length) ? baseFlatten(array, 1) : [];
	}
	module.exports = flatten;
}));
//#endregion
//#region node_modules/lodash/last.js
var require_last = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Gets the last element of `array`.
	*
	* @static
	* @memberOf _
	* @since 0.1.0
	* @category Array
	* @param {Array} array The array to query.
	* @returns {*} Returns the last element of `array`.
	* @example
	*
	* _.last([1, 2, 3]);
	* // => 3
	*/
	function last(array) {
		var length = array == null ? 0 : array.length;
		return length ? array[length - 1] : void 0;
	}
	module.exports = last;
}));
//#endregion
//#region node_modules/lodash/_isKey.js
var require__isKey = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isArray = require_isArray();
	var isSymbol = require_isSymbol();
	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
	var reIsPlainProp = /^\w*$/;
	/**
	* Checks if `value` is a property name and not a property path.
	*
	* @private
	* @param {*} value The value to check.
	* @param {Object} [object] The object to query keys on.
	* @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	*/
	function isKey(value, object) {
		if (isArray(value)) return false;
		var type = typeof value;
		if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) return true;
		return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
	}
	module.exports = isKey;
}));
//#endregion
//#region node_modules/lodash/_memoizeCapped.js
var require__memoizeCapped = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var memoize = require_memoize();
	/** Used as the maximum memoize cache size. */
	var MAX_MEMOIZE_SIZE = 500;
	/**
	* A specialized version of `_.memoize` which clears the memoized function's
	* cache when it exceeds `MAX_MEMOIZE_SIZE`.
	*
	* @private
	* @param {Function} func The function to have its output memoized.
	* @returns {Function} Returns the new memoized function.
	*/
	function memoizeCapped(func) {
		var result = memoize(func, function(key) {
			if (cache.size === MAX_MEMOIZE_SIZE) cache.clear();
			return key;
		});
		var cache = result.cache;
		return result;
	}
	module.exports = memoizeCapped;
}));
//#endregion
//#region node_modules/lodash/_stringToPath.js
var require__stringToPath = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var memoizeCapped = require__memoizeCapped();
	/** Used to match property names within property paths. */
	var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;
	module.exports = memoizeCapped(function(string) {
		var result = [];
		if (string.charCodeAt(0) === 46) result.push("");
		string.replace(rePropName, function(match, number, quote, subString) {
			result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
		});
		return result;
	});
}));
//#endregion
//#region node_modules/lodash/_castPath.js
var require__castPath = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isArray = require_isArray();
	var isKey = require__isKey();
	var stringToPath = require__stringToPath();
	var toString = require_toString();
	/**
	* Casts `value` to a path array if it's not one.
	*
	* @private
	* @param {*} value The value to inspect.
	* @param {Object} [object] The object to query keys on.
	* @returns {Array} Returns the cast property path array.
	*/
	function castPath(value, object) {
		if (isArray(value)) return value;
		return isKey(value, object) ? [value] : stringToPath(toString(value));
	}
	module.exports = castPath;
}));
//#endregion
//#region node_modules/lodash/_toKey.js
var require__toKey = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isSymbol = require_isSymbol();
	/** Used as references for various `Number` constants. */
	var INFINITY = Infinity;
	/**
	* Converts `value` to a string key if it's not a string or symbol.
	*
	* @private
	* @param {*} value The value to inspect.
	* @returns {string|symbol} Returns the key.
	*/
	function toKey(value) {
		if (typeof value == "string" || isSymbol(value)) return value;
		var result = value + "";
		return result == "0" && 1 / value == -INFINITY ? "-0" : result;
	}
	module.exports = toKey;
}));
//#endregion
//#region node_modules/lodash/_baseGet.js
var require__baseGet = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var castPath = require__castPath();
	var toKey = require__toKey();
	/**
	* The base implementation of `_.get` without support for default values.
	*
	* @private
	* @param {Object} object The object to query.
	* @param {Array|string} path The path of the property to get.
	* @returns {*} Returns the resolved value.
	*/
	function baseGet(object, path) {
		path = castPath(path, object);
		var index = 0, length = path.length;
		while (object != null && index < length) object = object[toKey(path[index++])];
		return index && index == length ? object : void 0;
	}
	module.exports = baseGet;
}));
//#endregion
//#region node_modules/lodash/_baseIsMatch.js
var require__baseIsMatch = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Stack = require__Stack();
	var baseIsEqual = require__baseIsEqual();
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;
	var COMPARE_UNORDERED_FLAG = 2;
	/**
	* The base implementation of `_.isMatch` without support for iteratee shorthands.
	*
	* @private
	* @param {Object} object The object to inspect.
	* @param {Object} source The object of property values to match.
	* @param {Array} matchData The property names, values, and compare flags to match.
	* @param {Function} [customizer] The function to customize comparisons.
	* @returns {boolean} Returns `true` if `object` is a match, else `false`.
	*/
	function baseIsMatch(object, source, matchData, customizer) {
		var index = matchData.length, length = index, noCustomizer = !customizer;
		if (object == null) return !length;
		object = Object(object);
		while (index--) {
			var data = matchData[index];
			if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) return false;
		}
		while (++index < length) {
			data = matchData[index];
			var key = data[0], objValue = object[key], srcValue = data[1];
			if (noCustomizer && data[2]) {
				if (objValue === void 0 && !(key in object)) return false;
			} else {
				var stack = new Stack();
				if (customizer) var result = customizer(objValue, srcValue, key, object, source, stack);
				if (!(result === void 0 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) return false;
			}
		}
		return true;
	}
	module.exports = baseIsMatch;
}));
//#endregion
//#region node_modules/lodash/_isStrictComparable.js
var require__isStrictComparable = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isObject = require_isObject();
	/**
	* Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	*
	* @private
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` if suitable for strict
	*  equality comparisons, else `false`.
	*/
	function isStrictComparable(value) {
		return value === value && !isObject(value);
	}
	module.exports = isStrictComparable;
}));
//#endregion
//#region node_modules/lodash/_getMatchData.js
var require__getMatchData = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isStrictComparable = require__isStrictComparable();
	var keys = require_keys();
	/**
	* Gets the property names, values, and compare flags of `object`.
	*
	* @private
	* @param {Object} object The object to query.
	* @returns {Array} Returns the match data of `object`.
	*/
	function getMatchData(object) {
		var result = keys(object), length = result.length;
		while (length--) {
			var key = result[length], value = object[key];
			result[length] = [
				key,
				value,
				isStrictComparable(value)
			];
		}
		return result;
	}
	module.exports = getMatchData;
}));
//#endregion
//#region node_modules/lodash/_matchesStrictComparable.js
var require__matchesStrictComparable = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* A specialized version of `matchesProperty` for source values suitable
	* for strict equality comparisons, i.e. `===`.
	*
	* @private
	* @param {string} key The key of the property to get.
	* @param {*} srcValue The value to match.
	* @returns {Function} Returns the new spec function.
	*/
	function matchesStrictComparable(key, srcValue) {
		return function(object) {
			if (object == null) return false;
			return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
		};
	}
	module.exports = matchesStrictComparable;
}));
//#endregion
//#region node_modules/lodash/_baseMatches.js
var require__baseMatches = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseIsMatch = require__baseIsMatch();
	var getMatchData = require__getMatchData();
	var matchesStrictComparable = require__matchesStrictComparable();
	/**
	* The base implementation of `_.matches` which doesn't clone `source`.
	*
	* @private
	* @param {Object} source The object of property values to match.
	* @returns {Function} Returns the new spec function.
	*/
	function baseMatches(source) {
		var matchData = getMatchData(source);
		if (matchData.length == 1 && matchData[0][2]) return matchesStrictComparable(matchData[0][0], matchData[0][1]);
		return function(object) {
			return object === source || baseIsMatch(object, source, matchData);
		};
	}
	module.exports = baseMatches;
}));
//#endregion
//#region node_modules/lodash/get.js
var require_get = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseGet = require__baseGet();
	/**
	* Gets the value at `path` of `object`. If the resolved value is
	* `undefined`, the `defaultValue` is returned in its place.
	*
	* @static
	* @memberOf _
	* @since 3.7.0
	* @category Object
	* @param {Object} object The object to query.
	* @param {Array|string} path The path of the property to get.
	* @param {*} [defaultValue] The value returned for `undefined` resolved values.
	* @returns {*} Returns the resolved value.
	* @example
	*
	* var object = { 'a': [{ 'b': { 'c': 3 } }] };
	*
	* _.get(object, 'a[0].b.c');
	* // => 3
	*
	* _.get(object, ['a', '0', 'b', 'c']);
	* // => 3
	*
	* _.get(object, 'a.b.c', 'default');
	* // => 'default'
	*/
	function get(object, path, defaultValue) {
		var result = object == null ? void 0 : baseGet(object, path);
		return result === void 0 ? defaultValue : result;
	}
	module.exports = get;
}));
//#endregion
//#region node_modules/lodash/_baseHasIn.js
var require__baseHasIn = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* The base implementation of `_.hasIn` without support for deep paths.
	*
	* @private
	* @param {Object} [object] The object to query.
	* @param {Array|string} key The key to check.
	* @returns {boolean} Returns `true` if `key` exists, else `false`.
	*/
	function baseHasIn(object, key) {
		return object != null && key in Object(object);
	}
	module.exports = baseHasIn;
}));
//#endregion
//#region node_modules/lodash/_hasPath.js
var require__hasPath = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var castPath = require__castPath();
	var isArguments = require_isArguments();
	var isArray = require_isArray();
	var isIndex = require__isIndex();
	var isLength = require_isLength();
	var toKey = require__toKey();
	/**
	* Checks if `path` exists on `object`.
	*
	* @private
	* @param {Object} object The object to query.
	* @param {Array|string} path The path to check.
	* @param {Function} hasFunc The function to check properties.
	* @returns {boolean} Returns `true` if `path` exists, else `false`.
	*/
	function hasPath(object, path, hasFunc) {
		path = castPath(path, object);
		var index = -1, length = path.length, result = false;
		while (++index < length) {
			var key = toKey(path[index]);
			if (!(result = object != null && hasFunc(object, key))) break;
			object = object[key];
		}
		if (result || ++index != length) return result;
		length = object == null ? 0 : object.length;
		return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
	}
	module.exports = hasPath;
}));
//#endregion
//#region node_modules/lodash/hasIn.js
var require_hasIn = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseHasIn = require__baseHasIn();
	var hasPath = require__hasPath();
	/**
	* Checks if `path` is a direct or inherited property of `object`.
	*
	* @static
	* @memberOf _
	* @since 4.0.0
	* @category Object
	* @param {Object} object The object to query.
	* @param {Array|string} path The path to check.
	* @returns {boolean} Returns `true` if `path` exists, else `false`.
	* @example
	*
	* var object = _.create({ 'a': _.create({ 'b': 2 }) });
	*
	* _.hasIn(object, 'a');
	* // => true
	*
	* _.hasIn(object, 'a.b');
	* // => true
	*
	* _.hasIn(object, ['a', 'b']);
	* // => true
	*
	* _.hasIn(object, 'b');
	* // => false
	*/
	function hasIn(object, path) {
		return object != null && hasPath(object, path, baseHasIn);
	}
	module.exports = hasIn;
}));
//#endregion
//#region node_modules/lodash/_baseMatchesProperty.js
var require__baseMatchesProperty = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseIsEqual = require__baseIsEqual();
	var get = require_get();
	var hasIn = require_hasIn();
	var isKey = require__isKey();
	var isStrictComparable = require__isStrictComparable();
	var matchesStrictComparable = require__matchesStrictComparable();
	var toKey = require__toKey();
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;
	var COMPARE_UNORDERED_FLAG = 2;
	/**
	* The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	*
	* @private
	* @param {string} path The path of the property to get.
	* @param {*} srcValue The value to match.
	* @returns {Function} Returns the new spec function.
	*/
	function baseMatchesProperty(path, srcValue) {
		if (isKey(path) && isStrictComparable(srcValue)) return matchesStrictComparable(toKey(path), srcValue);
		return function(object) {
			var objValue = get(object, path);
			return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
		};
	}
	module.exports = baseMatchesProperty;
}));
//#endregion
//#region node_modules/lodash/identity.js
var require_identity = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* This method returns the first argument it receives.
	*
	* @static
	* @since 0.1.0
	* @memberOf _
	* @category Util
	* @param {*} value Any value.
	* @returns {*} Returns `value`.
	* @example
	*
	* var object = { 'a': 1 };
	*
	* console.log(_.identity(object) === object);
	* // => true
	*/
	function identity(value) {
		return value;
	}
	module.exports = identity;
}));
//#endregion
//#region node_modules/lodash/_baseProperty.js
var require__baseProperty = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* The base implementation of `_.property` without support for deep paths.
	*
	* @private
	* @param {string} key The key of the property to get.
	* @returns {Function} Returns the new accessor function.
	*/
	function baseProperty(key) {
		return function(object) {
			return object == null ? void 0 : object[key];
		};
	}
	module.exports = baseProperty;
}));
//#endregion
//#region node_modules/lodash/_basePropertyDeep.js
var require__basePropertyDeep = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseGet = require__baseGet();
	/**
	* A specialized version of `baseProperty` which supports deep paths.
	*
	* @private
	* @param {Array|string} path The path of the property to get.
	* @returns {Function} Returns the new accessor function.
	*/
	function basePropertyDeep(path) {
		return function(object) {
			return baseGet(object, path);
		};
	}
	module.exports = basePropertyDeep;
}));
//#endregion
//#region node_modules/lodash/property.js
var require_property = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseProperty = require__baseProperty();
	var basePropertyDeep = require__basePropertyDeep();
	var isKey = require__isKey();
	var toKey = require__toKey();
	/**
	* Creates a function that returns the value at `path` of a given object.
	*
	* @static
	* @memberOf _
	* @since 2.4.0
	* @category Util
	* @param {Array|string} path The path of the property to get.
	* @returns {Function} Returns the new accessor function.
	* @example
	*
	* var objects = [
	*   { 'a': { 'b': 2 } },
	*   { 'a': { 'b': 1 } }
	* ];
	*
	* _.map(objects, _.property('a.b'));
	* // => [2, 1]
	*
	* _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	* // => [1, 2]
	*/
	function property(path) {
		return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
	}
	module.exports = property;
}));
//#endregion
//#region node_modules/lodash/_baseIteratee.js
var require__baseIteratee = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseMatches = require__baseMatches();
	var baseMatchesProperty = require__baseMatchesProperty();
	var identity = require_identity();
	var isArray = require_isArray();
	var property = require_property();
	/**
	* The base implementation of `_.iteratee`.
	*
	* @private
	* @param {*} [value=_.identity] The value to convert to an iteratee.
	* @returns {Function} Returns the iteratee.
	*/
	function baseIteratee(value) {
		if (typeof value == "function") return value;
		if (value == null) return identity;
		if (typeof value == "object") return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
		return property(value);
	}
	module.exports = baseIteratee;
}));
//#endregion
//#region node_modules/lodash/_createBaseFor.js
var require__createBaseFor = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Creates a base function for methods like `_.forIn` and `_.forOwn`.
	*
	* @private
	* @param {boolean} [fromRight] Specify iterating from right to left.
	* @returns {Function} Returns the new base function.
	*/
	function createBaseFor(fromRight) {
		return function(object, iteratee, keysFunc) {
			var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
			while (length--) {
				var key = props[fromRight ? length : ++index];
				if (iteratee(iterable[key], key, iterable) === false) break;
			}
			return object;
		};
	}
	module.exports = createBaseFor;
}));
//#endregion
//#region node_modules/lodash/_baseFor.js
var require__baseFor = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require__createBaseFor()();
}));
//#endregion
//#region node_modules/lodash/_baseForOwn.js
var require__baseForOwn = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseFor = require__baseFor();
	var keys = require_keys();
	/**
	* The base implementation of `_.forOwn` without support for iteratee shorthands.
	*
	* @private
	* @param {Object} object The object to iterate over.
	* @param {Function} iteratee The function invoked per iteration.
	* @returns {Object} Returns `object`.
	*/
	function baseForOwn(object, iteratee) {
		return object && baseFor(object, iteratee, keys);
	}
	module.exports = baseForOwn;
}));
//#endregion
//#region node_modules/lodash/_createBaseEach.js
var require__createBaseEach = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isArrayLike = require_isArrayLike();
	/**
	* Creates a `baseEach` or `baseEachRight` function.
	*
	* @private
	* @param {Function} eachFunc The function to iterate over a collection.
	* @param {boolean} [fromRight] Specify iterating from right to left.
	* @returns {Function} Returns the new base function.
	*/
	function createBaseEach(eachFunc, fromRight) {
		return function(collection, iteratee) {
			if (collection == null) return collection;
			if (!isArrayLike(collection)) return eachFunc(collection, iteratee);
			var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
			while (fromRight ? index-- : ++index < length) if (iteratee(iterable[index], index, iterable) === false) break;
			return collection;
		};
	}
	module.exports = createBaseEach;
}));
//#endregion
//#region node_modules/lodash/_baseEach.js
var require__baseEach = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseForOwn = require__baseForOwn();
	module.exports = require__createBaseEach()(baseForOwn);
}));
//#endregion
//#region node_modules/lodash/_baseMap.js
var require__baseMap = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseEach = require__baseEach();
	var isArrayLike = require_isArrayLike();
	/**
	* The base implementation of `_.map` without support for iteratee shorthands.
	*
	* @private
	* @param {Array|Object} collection The collection to iterate over.
	* @param {Function} iteratee The function invoked per iteration.
	* @returns {Array} Returns the new mapped array.
	*/
	function baseMap(collection, iteratee) {
		var index = -1, result = isArrayLike(collection) ? Array(collection.length) : [];
		baseEach(collection, function(value, key, collection) {
			result[++index] = iteratee(value, key, collection);
		});
		return result;
	}
	module.exports = baseMap;
}));
//#endregion
//#region node_modules/lodash/_apply.js
var require__apply = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* A faster alternative to `Function#apply`, this function invokes `func`
	* with the `this` binding of `thisArg` and the arguments of `args`.
	*
	* @private
	* @param {Function} func The function to invoke.
	* @param {*} thisArg The `this` binding of `func`.
	* @param {Array} args The arguments to invoke `func` with.
	* @returns {*} Returns the result of `func`.
	*/
	function apply(func, thisArg, args) {
		switch (args.length) {
			case 0: return func.call(thisArg);
			case 1: return func.call(thisArg, args[0]);
			case 2: return func.call(thisArg, args[0], args[1]);
			case 3: return func.call(thisArg, args[0], args[1], args[2]);
		}
		return func.apply(thisArg, args);
	}
	module.exports = apply;
}));
//#endregion
//#region node_modules/lodash/_overRest.js
var require__overRest = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var apply = require__apply();
	var nativeMax = Math.max;
	/**
	* A specialized version of `baseRest` which transforms the rest array.
	*
	* @private
	* @param {Function} func The function to apply a rest parameter to.
	* @param {number} [start=func.length-1] The start position of the rest parameter.
	* @param {Function} transform The rest array transform.
	* @returns {Function} Returns the new function.
	*/
	function overRest(func, start, transform) {
		start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
		return function() {
			var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
			while (++index < length) array[index] = args[start + index];
			index = -1;
			var otherArgs = Array(start + 1);
			while (++index < start) otherArgs[index] = args[index];
			otherArgs[start] = transform(array);
			return apply(func, this, otherArgs);
		};
	}
	module.exports = overRest;
}));
//#endregion
//#region node_modules/lodash/constant.js
var require_constant = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Creates a function that returns `value`.
	*
	* @static
	* @memberOf _
	* @since 2.4.0
	* @category Util
	* @param {*} value The value to return from the new function.
	* @returns {Function} Returns the new constant function.
	* @example
	*
	* var objects = _.times(2, _.constant({ 'a': 1 }));
	*
	* console.log(objects);
	* // => [{ 'a': 1 }, { 'a': 1 }]
	*
	* console.log(objects[0] === objects[1]);
	* // => true
	*/
	function constant(value) {
		return function() {
			return value;
		};
	}
	module.exports = constant;
}));
//#endregion
//#region node_modules/lodash/_defineProperty.js
var require__defineProperty = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var getNative = require__getNative();
	module.exports = function() {
		try {
			var func = getNative(Object, "defineProperty");
			func({}, "", {});
			return func;
		} catch (e) {}
	}();
}));
//#endregion
//#region node_modules/lodash/_baseSetToString.js
var require__baseSetToString = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var constant = require_constant();
	var defineProperty = require__defineProperty();
	var identity = require_identity();
	module.exports = !defineProperty ? identity : function(func, string) {
		return defineProperty(func, "toString", {
			"configurable": true,
			"enumerable": false,
			"value": constant(string),
			"writable": true
		});
	};
}));
//#endregion
//#region node_modules/lodash/_shortOut.js
var require__shortOut = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** Used to detect hot functions by number of calls within a span of milliseconds. */
	var HOT_COUNT = 800;
	var HOT_SPAN = 16;
	var nativeNow = Date.now;
	/**
	* Creates a function that'll short out and invoke `identity` instead
	* of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
	* milliseconds.
	*
	* @private
	* @param {Function} func The function to restrict.
	* @returns {Function} Returns the new shortable function.
	*/
	function shortOut(func) {
		var count = 0, lastCalled = 0;
		return function() {
			var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
			lastCalled = stamp;
			if (remaining > 0) {
				if (++count >= HOT_COUNT) return arguments[0];
			} else count = 0;
			return func.apply(void 0, arguments);
		};
	}
	module.exports = shortOut;
}));
//#endregion
//#region node_modules/lodash/_setToString.js
var require__setToString = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseSetToString = require__baseSetToString();
	module.exports = require__shortOut()(baseSetToString);
}));
//#endregion
//#region node_modules/lodash/_baseRest.js
var require__baseRest = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var identity = require_identity();
	var overRest = require__overRest();
	var setToString = require__setToString();
	/**
	* The base implementation of `_.rest` which doesn't validate or coerce arguments.
	*
	* @private
	* @param {Function} func The function to apply a rest parameter to.
	* @param {number} [start=func.length-1] The start position of the rest parameter.
	* @returns {Function} Returns the new function.
	*/
	function baseRest(func, start) {
		return setToString(overRest(func, start, identity), func + "");
	}
	module.exports = baseRest;
}));
//#endregion
//#region node_modules/lodash/_baseFindIndex.js
var require__baseFindIndex = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* The base implementation of `_.findIndex` and `_.findLastIndex` without
	* support for iteratee shorthands.
	*
	* @private
	* @param {Array} array The array to inspect.
	* @param {Function} predicate The function invoked per iteration.
	* @param {number} fromIndex The index to search from.
	* @param {boolean} [fromRight] Specify iterating from right to left.
	* @returns {number} Returns the index of the matched value, else `-1`.
	*/
	function baseFindIndex(array, predicate, fromIndex, fromRight) {
		var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
		while (fromRight ? index-- : ++index < length) if (predicate(array[index], index, array)) return index;
		return -1;
	}
	module.exports = baseFindIndex;
}));
//#endregion
//#region node_modules/lodash/_baseIsNaN.js
var require__baseIsNaN = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* The base implementation of `_.isNaN` without support for number objects.
	*
	* @private
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	*/
	function baseIsNaN(value) {
		return value !== value;
	}
	module.exports = baseIsNaN;
}));
//#endregion
//#region node_modules/lodash/_strictIndexOf.js
var require__strictIndexOf = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* A specialized version of `_.indexOf` which performs strict equality
	* comparisons of values, i.e. `===`.
	*
	* @private
	* @param {Array} array The array to inspect.
	* @param {*} value The value to search for.
	* @param {number} fromIndex The index to search from.
	* @returns {number} Returns the index of the matched value, else `-1`.
	*/
	function strictIndexOf(array, value, fromIndex) {
		var index = fromIndex - 1, length = array.length;
		while (++index < length) if (array[index] === value) return index;
		return -1;
	}
	module.exports = strictIndexOf;
}));
//#endregion
//#region node_modules/lodash/_baseIndexOf.js
var require__baseIndexOf = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseFindIndex = require__baseFindIndex();
	var baseIsNaN = require__baseIsNaN();
	var strictIndexOf = require__strictIndexOf();
	/**
	* The base implementation of `_.indexOf` without `fromIndex` bounds checks.
	*
	* @private
	* @param {Array} array The array to inspect.
	* @param {*} value The value to search for.
	* @param {number} fromIndex The index to search from.
	* @returns {number} Returns the index of the matched value, else `-1`.
	*/
	function baseIndexOf(array, value, fromIndex) {
		return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
	}
	module.exports = baseIndexOf;
}));
//#endregion
//#region node_modules/lodash/_arrayIncludes.js
var require__arrayIncludes = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseIndexOf = require__baseIndexOf();
	/**
	* A specialized version of `_.includes` for arrays without support for
	* specifying an index to search from.
	*
	* @private
	* @param {Array} [array] The array to inspect.
	* @param {*} target The value to search for.
	* @returns {boolean} Returns `true` if `target` is found, else `false`.
	*/
	function arrayIncludes(array, value) {
		return !!(array == null ? 0 : array.length) && baseIndexOf(array, value, 0) > -1;
	}
	module.exports = arrayIncludes;
}));
//#endregion
//#region node_modules/lodash/_arrayIncludesWith.js
var require__arrayIncludesWith = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* This function is like `arrayIncludes` except that it accepts a comparator.
	*
	* @private
	* @param {Array} [array] The array to inspect.
	* @param {*} target The value to search for.
	* @param {Function} comparator The comparator invoked per element.
	* @returns {boolean} Returns `true` if `target` is found, else `false`.
	*/
	function arrayIncludesWith(array, value, comparator) {
		var index = -1, length = array == null ? 0 : array.length;
		while (++index < length) if (comparator(value, array[index])) return true;
		return false;
	}
	module.exports = arrayIncludesWith;
}));
//#endregion
//#region node_modules/lodash/noop.js
var require_noop = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* This method returns `undefined`.
	*
	* @static
	* @memberOf _
	* @since 2.3.0
	* @category Util
	* @example
	*
	* _.times(2, _.noop);
	* // => [undefined, undefined]
	*/
	function noop() {}
	module.exports = noop;
}));
//#endregion
//#region node_modules/lodash/_createSet.js
var require__createSet = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Set = require__Set();
	var noop = require_noop();
	var setToArray = require__setToArray();
	module.exports = !(Set && 1 / setToArray(new Set([, -0]))[1] == Infinity) ? noop : function(values) {
		return new Set(values);
	};
}));
//#endregion
//#region node_modules/lodash/_baseUniq.js
var require__baseUniq = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var SetCache = require__SetCache();
	var arrayIncludes = require__arrayIncludes();
	var arrayIncludesWith = require__arrayIncludesWith();
	var cacheHas = require__cacheHas();
	var createSet = require__createSet();
	var setToArray = require__setToArray();
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;
	/**
	* The base implementation of `_.uniqBy` without support for iteratee shorthands.
	*
	* @private
	* @param {Array} array The array to inspect.
	* @param {Function} [iteratee] The iteratee invoked per element.
	* @param {Function} [comparator] The comparator invoked per element.
	* @returns {Array} Returns the new duplicate free array.
	*/
	function baseUniq(array, iteratee, comparator) {
		var index = -1, includes = arrayIncludes, length = array.length, isCommon = true, result = [], seen = result;
		if (comparator) {
			isCommon = false;
			includes = arrayIncludesWith;
		} else if (length >= LARGE_ARRAY_SIZE) {
			var set = iteratee ? null : createSet(array);
			if (set) return setToArray(set);
			isCommon = false;
			includes = cacheHas;
			seen = new SetCache();
		} else seen = iteratee ? [] : result;
		outer: while (++index < length) {
			var value = array[index], computed = iteratee ? iteratee(value) : value;
			value = comparator || value !== 0 ? value : 0;
			if (isCommon && computed === computed) {
				var seenIndex = seen.length;
				while (seenIndex--) if (seen[seenIndex] === computed) continue outer;
				if (iteratee) seen.push(computed);
				result.push(value);
			} else if (!includes(seen, computed, comparator)) {
				if (seen !== result) seen.push(computed);
				result.push(value);
			}
		}
		return result;
	}
	module.exports = baseUniq;
}));
//#endregion
//#region node_modules/lodash/uniqBy.js
var require_uniqBy = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseIteratee = require__baseIteratee();
	var baseUniq = require__baseUniq();
	/**
	* This method is like `_.uniq` except that it accepts `iteratee` which is
	* invoked for each element in `array` to generate the criterion by which
	* uniqueness is computed. The order of result values is determined by the
	* order they occur in the array. The iteratee is invoked with one argument:
	* (value).
	*
	* @static
	* @memberOf _
	* @since 4.0.0
	* @category Array
	* @param {Array} array The array to inspect.
	* @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	* @returns {Array} Returns the new duplicate free array.
	* @example
	*
	* _.uniqBy([2.1, 1.2, 2.3], Math.floor);
	* // => [2.1, 1.2]
	*
	* // The `_.property` iteratee shorthand.
	* _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
	* // => [{ 'x': 1 }, { 'x': 2 }]
	*/
	function uniqBy(array, iteratee) {
		return array && array.length ? baseUniq(array, baseIteratee(iteratee, 2)) : [];
	}
	module.exports = uniqBy;
}));
//#endregion
//#region node_modules/lodash/_baseAssignValue.js
var require__baseAssignValue = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var defineProperty = require__defineProperty();
	/**
	* The base implementation of `assignValue` and `assignMergeValue` without
	* value checks.
	*
	* @private
	* @param {Object} object The object to modify.
	* @param {string} key The key of the property to assign.
	* @param {*} value The value to assign.
	*/
	function baseAssignValue(object, key, value) {
		if (key == "__proto__" && defineProperty) defineProperty(object, key, {
			"configurable": true,
			"enumerable": true,
			"value": value,
			"writable": true
		});
		else object[key] = value;
	}
	module.exports = baseAssignValue;
}));
//#endregion
//#region node_modules/lodash/_arrayAggregator.js
var require__arrayAggregator = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* A specialized version of `baseAggregator` for arrays.
	*
	* @private
	* @param {Array} [array] The array to iterate over.
	* @param {Function} setter The function to set `accumulator` values.
	* @param {Function} iteratee The iteratee to transform keys.
	* @param {Object} accumulator The initial aggregated object.
	* @returns {Function} Returns `accumulator`.
	*/
	function arrayAggregator(array, setter, iteratee, accumulator) {
		var index = -1, length = array == null ? 0 : array.length;
		while (++index < length) {
			var value = array[index];
			setter(accumulator, value, iteratee(value), array);
		}
		return accumulator;
	}
	module.exports = arrayAggregator;
}));
//#endregion
//#region node_modules/lodash/_baseAggregator.js
var require__baseAggregator = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseEach = require__baseEach();
	/**
	* Aggregates elements of `collection` on `accumulator` with keys transformed
	* by `iteratee` and values set by `setter`.
	*
	* @private
	* @param {Array|Object} collection The collection to iterate over.
	* @param {Function} setter The function to set `accumulator` values.
	* @param {Function} iteratee The iteratee to transform keys.
	* @param {Object} accumulator The initial aggregated object.
	* @returns {Function} Returns `accumulator`.
	*/
	function baseAggregator(collection, setter, iteratee, accumulator) {
		baseEach(collection, function(value, key, collection) {
			setter(accumulator, value, iteratee(value), collection);
		});
		return accumulator;
	}
	module.exports = baseAggregator;
}));
//#endregion
//#region node_modules/lodash/_createAggregator.js
var require__createAggregator = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var arrayAggregator = require__arrayAggregator();
	var baseAggregator = require__baseAggregator();
	var baseIteratee = require__baseIteratee();
	var isArray = require_isArray();
	/**
	* Creates a function like `_.groupBy`.
	*
	* @private
	* @param {Function} setter The function to set accumulator values.
	* @param {Function} [initializer] The accumulator object initializer.
	* @returns {Function} Returns the new aggregator function.
	*/
	function createAggregator(setter, initializer) {
		return function(collection, iteratee) {
			var func = isArray(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
			return func(collection, setter, baseIteratee(iteratee, 2), accumulator);
		};
	}
	module.exports = createAggregator;
}));
//#endregion
//#region node_modules/sha256-uint8array/dist/sha256-uint8array.mjs
var import_startCase = /* @__PURE__ */ __toESM(require_startCase(), 1);
var import_uniqBy = /* @__PURE__ */ __toESM(require_uniqBy(), 1);
/**
* sha256-uint8array.ts
*/
var K = [
	1116352408,
	1899447441,
	-1245643825,
	-373957723,
	961987163,
	1508970993,
	-1841331548,
	-1424204075,
	-670586216,
	310598401,
	607225278,
	1426881987,
	1925078388,
	-2132889090,
	-1680079193,
	-1046744716,
	-459576895,
	-272742522,
	264347078,
	604807628,
	770255983,
	1249150122,
	1555081692,
	1996064986,
	-1740746414,
	-1473132947,
	-1341970488,
	-1084653625,
	-958395405,
	-710438585,
	113926993,
	338241895,
	666307205,
	773529912,
	1294757372,
	1396182291,
	1695183700,
	1986661051,
	-2117940946,
	-1838011259,
	-1564481375,
	-1474664885,
	-1035236496,
	-949202525,
	-778901479,
	-694614492,
	-200395387,
	275423344,
	430227734,
	506948616,
	659060556,
	883997877,
	958139571,
	1322822218,
	1537002063,
	1747873779,
	1955562222,
	2024104815,
	-2067236844,
	-1933114872,
	-1866530822,
	-1538233109,
	-1090935817,
	-965641998
];
var Hash = class {
	constructor() {
		this.A = 1779033703;
		this.B = -1150833019;
		this.C = 1013904242;
		this.D = -1521486534;
		this.E = 1359893119;
		this.F = -1694144372;
		this.G = 528734635;
		this.H = 1541459225;
		this._size = 0;
		this._sp = 0;
		if (!sharedBuffer || sharedOffset >= 8e3) {
			sharedBuffer = /* @__PURE__ */ new ArrayBuffer(8e3);
			sharedOffset = 0;
		}
		this._byte = new Uint8Array(sharedBuffer, sharedOffset, 80);
		this._word = new Int32Array(sharedBuffer, sharedOffset, 20);
		sharedOffset += 80;
	}
	update(data) {
		if ("string" === typeof data) return this._utf8(data);
		if (data == null) throw new TypeError("Invalid type: " + typeof data);
		const byteOffset = data.byteOffset;
		const length = data.byteLength;
		let blocks = length / 64 | 0;
		let offset = 0;
		if (blocks && !(byteOffset & 3) && !(this._size % 64)) {
			const block = new Int32Array(data.buffer, byteOffset, blocks * 16);
			while (blocks--) {
				this._int32(block, offset >> 2);
				offset += 64;
			}
			this._size += offset;
		}
		if (data.BYTES_PER_ELEMENT !== 1 && data.buffer) {
			const rest = new Uint8Array(data.buffer, byteOffset + offset, length - offset);
			return this._uint8(rest);
		}
		if (offset === length) return this;
		return this._uint8(data, offset);
	}
	_uint8(data, offset) {
		const { _byte, _word } = this;
		const length = data.length;
		offset = offset | 0;
		while (offset < length) {
			const start = this._size % 64;
			let index = start;
			while (offset < length && index < 64) _byte[index++] = data[offset++];
			if (index >= 64) this._int32(_word);
			this._size += index - start;
		}
		return this;
	}
	_utf8(text) {
		const { _byte, _word } = this;
		const length = text.length;
		let surrogate = this._sp;
		for (let offset = 0; offset < length;) {
			const start = this._size % 64;
			let index = start;
			while (offset < length && index < 64) {
				let code = text.charCodeAt(offset++) | 0;
				if (code < 128) _byte[index++] = code;
				else if (code < 2048) {
					_byte[index++] = 192 | code >>> 6;
					_byte[index++] = 128 | code & 63;
				} else if (code < 55296 || code > 57343) {
					_byte[index++] = 224 | code >>> 12;
					_byte[index++] = 128 | code >>> 6 & 63;
					_byte[index++] = 128 | code & 63;
				} else if (surrogate) {
					code = ((surrogate & 1023) << 10) + (code & 1023) + 65536;
					_byte[index++] = 240 | code >>> 18;
					_byte[index++] = 128 | code >>> 12 & 63;
					_byte[index++] = 128 | code >>> 6 & 63;
					_byte[index++] = 128 | code & 63;
					surrogate = 0;
				} else surrogate = code;
			}
			if (index >= 64) {
				this._int32(_word);
				_word[0] = _word[16];
			}
			this._size += index - start;
		}
		this._sp = surrogate;
		return this;
	}
	_int32(data, offset) {
		let { A, B, C, D, E, F, G, H } = this;
		let i = 0;
		offset = offset | 0;
		while (i < 16) W[i++] = swap32(data[offset++]);
		for (i = 16; i < 64; i++) W[i] = gamma1(W[i - 2]) + W[i - 7] + gamma0(W[i - 15]) + W[i - 16] | 0;
		for (i = 0; i < 64; i++) {
			const T1 = H + sigma1(E) + ch(E, F, G) + K[i] + W[i] | 0;
			const T2 = sigma0(A) + maj(A, B, C) | 0;
			H = G;
			G = F;
			F = E;
			E = D + T1 | 0;
			D = C;
			C = B;
			B = A;
			A = T1 + T2 | 0;
		}
		this.A = A + this.A | 0;
		this.B = B + this.B | 0;
		this.C = C + this.C | 0;
		this.D = D + this.D | 0;
		this.E = E + this.E | 0;
		this.F = F + this.F | 0;
		this.G = G + this.G | 0;
		this.H = H + this.H | 0;
	}
	digest(encoding) {
		const { _byte, _word } = this;
		let i = this._size % 64 | 0;
		_byte[i++] = 128;
		while (i & 3) _byte[i++] = 0;
		i >>= 2;
		if (i > 14) {
			while (i < 16) _word[i++] = 0;
			i = 0;
			this._int32(_word);
		}
		while (i < 16) _word[i++] = 0;
		const bits64 = this._size * 8;
		const low32 = (bits64 & 4294967295) >>> 0;
		const high32 = (bits64 - low32) / 4294967296;
		if (high32) _word[14] = swap32(high32);
		if (low32) _word[15] = swap32(low32);
		this._int32(_word);
		return encoding === "hex" ? this._hex() : this._bin();
	}
	_hex() {
		const { A, B, C, D, E, F, G, H } = this;
		return hex32(A) + hex32(B) + hex32(C) + hex32(D) + hex32(E) + hex32(F) + hex32(G) + hex32(H);
	}
	_bin() {
		const { A, B, C, D, E, F, G, H, _byte, _word } = this;
		_word[0] = swap32(A);
		_word[1] = swap32(B);
		_word[2] = swap32(C);
		_word[3] = swap32(D);
		_word[4] = swap32(E);
		_word[5] = swap32(F);
		_word[6] = swap32(G);
		_word[7] = swap32(H);
		return _byte.slice(0, 32);
	}
};
var W = /* @__PURE__ */ new Int32Array(64);
var sharedBuffer;
var sharedOffset = 0;
var hex32 = (num) => (num + 4294967296).toString(16).substr(-8);
var swapLE = ((c) => c << 24 & 4278190080 | c << 8 & 16711680 | c >> 8 & 65280 | c >> 24 & 255);
var swapBE = ((c) => c);
var swap32 = isBE() ? swapBE : swapLE;
var ch = (x, y, z) => z ^ x & (y ^ z);
var maj = (x, y, z) => x & y | z & (x | y);
var sigma0 = (x) => (x >>> 2 | x << 30) ^ (x >>> 13 | x << 19) ^ (x >>> 22 | x << 10);
var sigma1 = (x) => (x >>> 6 | x << 26) ^ (x >>> 11 | x << 21) ^ (x >>> 25 | x << 7);
var gamma0 = (x) => (x >>> 7 | x << 25) ^ (x >>> 18 | x << 14) ^ x >>> 3;
var gamma1 = (x) => (x >>> 17 | x << 15) ^ (x >>> 19 | x << 13) ^ x >>> 10;
function isBE() {
	return new Uint8Array(new Uint16Array([65279]).buffer)[0] === 254;
}
//#endregion
//#region node_modules/@sanity/descriptors/dist/index.js
function arrayEquals(arr1, arr2) {
	for (let i = 0; i < arr1.length; i++) if (arr1[i] != arr2[i]) return !1;
	return !0;
}
function arrayCompare(arr1, arr2) {
	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] < arr2[i]) return -1;
		if (arr1[i] > arr2[i]) return 1;
	}
	return 0;
}
function arrayZero(arr) {
	for (let i = 0; i < arr.length; i++) if (arr[i] != 0) return !1;
	return !0;
}
var MULTIHASH_SHA256 = " ";
var IDEncoder = class IDEncoder {
	hash = new Hash();
	buffer = /* @__PURE__ */ new ArrayBuffer(4);
	rewriteMap;
	uint8 = new Uint8Array(this.buffer);
	uint8_byte = new Uint8Array(this.buffer, 0, 1);
	int32 = new Int32Array(this.buffer);
	constructor(rewriteMap) {
		this.rewriteMap = rewriteMap;
	}
	encodeByte(byte) {
		this.uint8_byte[0] = byte, this.hash.update(this.uint8_byte);
	}
	encodeString(val) {
		this.hash.update(val, "utf8");
	}
	encodeInt32(val) {
		if (this.int32[0] = val, this.int32[0] !== val) throw new Error("Only 32-bit numbers can be encoded as descriptors");
		this.hash.update(this.uint8);
	}
	/**
	* Encodes a value.
	*
	* Since values can be rewritten during encoding this returns the actual value that was encoded.
	* This may be the exact same object that was passed in.
	*/
	encodeValue(val) {
		const rewritten = this.rewriteMap.get(val);
		if (rewritten) {
			const result = this.encodeValue(rewritten);
			return result !== rewritten && this.rewriteMap.set(val, result), result;
		}
		if (val === null) return this.encodeByte(110), val;
		if (val === !0) return this.encodeByte(116), val;
		if (val === !1) return this.encodeByte(102), val;
		if (typeof val == "string") return this.encodeByte(115), this.encodeString(val), val;
		if (Array.isArray(val)) {
			let result;
			this.encodeByte(97);
			let idx = 0;
			for (const elem of val) {
				const other = this.encodeValue(elem);
				result ? result.push(other) : other !== elem && (result = val.slice(0, idx), result.push(other)), idx++;
			}
			return this.encodeByte(65), result || val;
		} else {
			const digests = [];
			let result, idx = 0;
			const entries = Object.entries(val);
			for (const [key, field] of entries) {
				if (field === void 0) {
					idx++;
					continue;
				}
				const fieldEncoder = new IDEncoder(this.rewriteMap);
				fieldEncoder.encodeString(key);
				const fieldValue = fieldEncoder.encodeValue(field);
				if (digests.push(fieldEncoder.getDigest()), result) result[key] = fieldValue;
				else if (fieldValue !== field) {
					result = {};
					for (const [prevKey, prevField] of entries.slice(0, idx)) result[prevKey] = prevField;
					result[key] = fieldValue;
				}
				idx++;
			}
			digests.sort((a, b) => arrayCompare(a, b)), this.encodeByte(111);
			for (const digest of digests) this.hash.update(digest);
			return this.encodeByte(79), result || val;
		}
	}
	encodeObjectWithType(type, val) {
		const result = { type }, digests = [];
		for (const [key, field] of Object.entries(val)) {
			if (field === void 0) continue;
			const fieldEncoder = new IDEncoder(this.rewriteMap);
			fieldEncoder.encodeString(key), result[key] = fieldEncoder.encodeValue(field), digests.push(fieldEncoder.getDigest());
		}
		const typeEncoder = new IDEncoder(this.rewriteMap);
		typeEncoder.encodeString("type"), typeEncoder.encodeValue(type), digests.push(typeEncoder.getDigest()), digests.sort((a, b) => arrayCompare(a, b)), this.encodeByte(111);
		for (const digest of digests) this.hash.update(digest);
		return this.encodeByte(79), result;
	}
	getDigest() {
		return this.hash.digest();
	}
};
function encodeBase64(data, prefix = "") {
	let binary = prefix;
	for (let i = 0; i < data.length; i++) binary += String.fromCharCode(data[i]);
	return "u" + globalThis.btoa(binary).replaceAll("+", "-").replaceAll("/", "_").replaceAll("=", "");
}
var EMPTY_REWRITE_MAP = /* @__PURE__ */ new Map();
function encode(type, props, options) {
	const idEncoder = new IDEncoder(options?.rewriteMap || EMPTY_REWRITE_MAP), tweakedProps = idEncoder.encodeObjectWithType(type, props), digest = idEncoder.getDigest();
	return options?.withDigest && options.withDigest(digest), {
		id: encodeBase64(digest, MULTIHASH_SHA256),
		...tweakedProps
	};
}
var NUM_HASH = 3;
var SetSketch = class SetSketch {
	arr;
	byteSize;
	numBuckets;
	constructor(byteSize, numBuckets) {
		if (numBuckets >= 31) throw new Error("numBuckets must be less than 31");
		this.byteSize = byteSize, this.numBuckets = numBuckets, this.arr = new Uint8Array(this.byteSize * this.numBuckets);
	}
	toggle(val, yieldBucket) {
		for (let k = 0; k < NUM_HASH; k++) {
			const bucket = val[k] % this.numBuckets;
			yieldBucket && yieldBucket(bucket);
			const offset = bucket * this.byteSize;
			for (let idx = 0; idx < this.byteSize; idx++) this.arr[offset + idx] ^= val[idx];
		}
	}
	toggleAll(other) {
		for (let i = 0; i < this.arr.length; i++) this.arr[i] ^= other.arr[i];
	}
	copy() {
		const result = new SetSketch(this.byteSize, this.numBuckets);
		for (let idx = 0; idx < this.arr.length; idx++) result.arr[idx] = this.arr[idx];
		return result;
	}
	decode() {
		const max = this.numBuckets * 2, set = new BufferSet(this.byteSize, max), queue = new BitQueue(this.numBuckets);
		let t = 0;
		for (; !queue.isEmpty();) {
			const bucket = queue.pop();
			if (this.looksPure(bucket)) {
				if (t >= max) return null;
				const offset = bucket * this.byteSize, slice = this.arr.slice(offset, offset + this.byteSize);
				set.toggle(slice), this.toggle(slice, (otherBuckets) => {
					otherBuckets !== bucket && queue.set(otherBuckets);
				}), t++;
			}
		}
		return arrayZero(this.arr) ? set : null;
	}
	looksPure(bucket) {
		const offset = bucket * this.byteSize, val = this.arr.subarray(offset, offset + this.byteSize);
		if (arrayZero(val)) return !1;
		let hashedToBucketCount = 0;
		for (let k = 0; k < NUM_HASH; k++) val[k] % this.numBuckets === bucket && hashedToBucketCount++;
		return hashedToBucketCount % 2 == 1;
	}
};
var BufferSet = class {
	arr;
	byteSize;
	length;
	capacity;
	constructor(byteSize, capacity) {
		this.arr = new Uint8Array(byteSize * capacity), this.byteSize = byteSize, this.length = 0, this.capacity = capacity;
	}
	toggle(val) {
		for (let i = 0; i < this.length; i++) {
			const start = i * this.byteSize, slice = this.arr.subarray(start, start + this.byteSize);
			if (arrayEquals(val, slice)) {
				if (i != this.length - 1) {
					const lastEntryByteIdx = (this.length - 1) * this.byteSize;
					for (let j = 0; j < this.byteSize; j++) slice[j] = this.arr[lastEntryByteIdx + j];
				}
				this.length--;
				return;
			}
		}
		if (this.length === this.capacity) throw new Error("BufferSet is full");
		const byteIdx = this.length * this.byteSize;
		for (let i = 0; i < this.byteSize; i++) this.arr[byteIdx + i] = val[i];
		this.length++;
	}
	forEach(fn) {
		for (let i = 0; i < this.length; i++) {
			const start = i * this.byteSize;
			fn(this.arr.subarray(start, start + this.byteSize));
		}
	}
	/**
	* Returns a normalized JSON representation.
	*
	* This is not optimized and should mainly be used for debugging.
	*/
	toJSON() {
		const result = [];
		return this.forEach((entry) => {
			result.push(Array.from(entry));
		}), result.sort((a, b) => arrayCompare(a, b)), result;
	}
};
var BitQueue = class {
	bitset;
	queue;
	constructor(size) {
		this.bitset = (1 << size) - 1, this.queue = Array.from({ length: size }, (_, i) => i);
	}
	set(idx) {
		const mask = 1 << idx;
		this.bitset & mask || (this.queue.push(idx), this.bitset |= mask);
	}
	isEmpty() {
		return this.bitset === 0;
	}
	pop() {
		const idx = this.queue.shift(), mask = 1 << idx;
		return this.bitset &= ~mask, idx;
	}
};
var SetBuilder = class {
	objectValues = {};
	setValues = {};
	keys = [];
	sketch = new SetSketch(32, 8);
	rewriteMap;
	constructor({ rewriteMap } = {}) {
		this.rewriteMap = rewriteMap;
	}
	/**
	* Add an object to the set.
	*/
	addObject(type, obj) {
		const value = encode(type, obj, {
			withDigest: (digest) => {
				this.sketch.toggle(digest);
			},
			rewriteMap: this.rewriteMap
		});
		this.objectValues[value.id] = value, this.keys.push(value.id);
	}
	/**
	* Add another set to the set.
	*/
	addSet(sync) {
		this.setValues[sync.set.id] = sync, this.sketch.toggle(sync.digest), this.keys.push(sync.set.id);
	}
	build(type) {
		this.keys.sort();
		let digest;
		return {
			set: encode(type, { keys: this.keys }, { withDigest: (d) => {
				digest = d;
			} }),
			digest,
			objectValues: this.objectValues,
			setValues: this.setValues,
			sketch: this.sketch
		};
	}
};
function processSetSynchronization(sync, prevResult) {
	const id = sync.set.id;
	if (!prevResult) return { id };
	if (prevResult.type === "complete") return null;
	const descriptors = [];
	for (const missingId of prevResult.missingIds) {
		const descriptor = findDescriptor(sync, missingId);
		if (!descriptor) throw new Error("Synchronization server is requested an unknonwn descriptor");
		descriptors.push(descriptor);
	}
	return {
		id,
		descriptors
	};
}
function findDescriptor(sync, id) {
	if (sync.set.id === id) return sync.set;
	const desc = sync.objectValues[id];
	if (desc) return desc;
	for (const child of Object.values(sync.setValues)) {
		const childDesc = findDescriptor(child, id);
		if (childDesc) return childDesc;
	}
	return null;
}
//#endregion
//#region node_modules/lodash/_arrayEach.js
var require__arrayEach = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* A specialized version of `_.forEach` for arrays without support for
	* iteratee shorthands.
	*
	* @private
	* @param {Array} [array] The array to iterate over.
	* @param {Function} iteratee The function invoked per iteration.
	* @returns {Array} Returns `array`.
	*/
	function arrayEach(array, iteratee) {
		var index = -1, length = array == null ? 0 : array.length;
		while (++index < length) if (iteratee(array[index], index, array) === false) break;
		return array;
	}
	module.exports = arrayEach;
}));
//#endregion
//#region node_modules/lodash/_assignValue.js
var require__assignValue = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseAssignValue = require__baseAssignValue();
	var eq = require_eq();
	/** Used to check objects for own properties. */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	* Assigns `value` to `key` of `object` if the existing value is not equivalent
	* using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	* for equality comparisons.
	*
	* @private
	* @param {Object} object The object to modify.
	* @param {string} key The key of the property to assign.
	* @param {*} value The value to assign.
	*/
	function assignValue(object, key, value) {
		var objValue = object[key];
		if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) baseAssignValue(object, key, value);
	}
	module.exports = assignValue;
}));
//#endregion
//#region node_modules/lodash/_copyObject.js
var require__copyObject = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var assignValue = require__assignValue();
	var baseAssignValue = require__baseAssignValue();
	/**
	* Copies properties of `source` to `object`.
	*
	* @private
	* @param {Object} source The object to copy properties from.
	* @param {Array} props The property identifiers to copy.
	* @param {Object} [object={}] The object to copy properties to.
	* @param {Function} [customizer] The function to customize copied values.
	* @returns {Object} Returns `object`.
	*/
	function copyObject(source, props, object, customizer) {
		var isNew = !object;
		object || (object = {});
		var index = -1, length = props.length;
		while (++index < length) {
			var key = props[index];
			var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
			if (newValue === void 0) newValue = source[key];
			if (isNew) baseAssignValue(object, key, newValue);
			else assignValue(object, key, newValue);
		}
		return object;
	}
	module.exports = copyObject;
}));
//#endregion
//#region node_modules/lodash/_baseAssign.js
var require__baseAssign = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var copyObject = require__copyObject();
	var keys = require_keys();
	/**
	* The base implementation of `_.assign` without support for multiple sources
	* or `customizer` functions.
	*
	* @private
	* @param {Object} object The destination object.
	* @param {Object} source The source object.
	* @returns {Object} Returns `object`.
	*/
	function baseAssign(object, source) {
		return object && copyObject(source, keys(source), object);
	}
	module.exports = baseAssign;
}));
//#endregion
//#region node_modules/lodash/_nativeKeysIn.js
var require__nativeKeysIn = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* This function is like
	* [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	* except that it includes inherited enumerable properties.
	*
	* @private
	* @param {Object} object The object to query.
	* @returns {Array} Returns the array of property names.
	*/
	function nativeKeysIn(object) {
		var result = [];
		if (object != null) for (var key in Object(object)) result.push(key);
		return result;
	}
	module.exports = nativeKeysIn;
}));
//#endregion
//#region node_modules/lodash/_baseKeysIn.js
var require__baseKeysIn = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isObject = require_isObject();
	var isPrototype = require__isPrototype();
	var nativeKeysIn = require__nativeKeysIn();
	/** Used to check objects for own properties. */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	* The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	*
	* @private
	* @param {Object} object The object to query.
	* @returns {Array} Returns the array of property names.
	*/
	function baseKeysIn(object) {
		if (!isObject(object)) return nativeKeysIn(object);
		var isProto = isPrototype(object), result = [];
		for (var key in object) if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) result.push(key);
		return result;
	}
	module.exports = baseKeysIn;
}));
//#endregion
//#region node_modules/lodash/keysIn.js
var require_keysIn = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var arrayLikeKeys = require__arrayLikeKeys();
	var baseKeysIn = require__baseKeysIn();
	var isArrayLike = require_isArrayLike();
	/**
	* Creates an array of the own and inherited enumerable property names of `object`.
	*
	* **Note:** Non-object values are coerced to objects.
	*
	* @static
	* @memberOf _
	* @since 3.0.0
	* @category Object
	* @param {Object} object The object to query.
	* @returns {Array} Returns the array of property names.
	* @example
	*
	* function Foo() {
	*   this.a = 1;
	*   this.b = 2;
	* }
	*
	* Foo.prototype.c = 3;
	*
	* _.keysIn(new Foo);
	* // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	*/
	function keysIn(object) {
		return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
	}
	module.exports = keysIn;
}));
//#endregion
//#region node_modules/lodash/_baseAssignIn.js
var require__baseAssignIn = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var copyObject = require__copyObject();
	var keysIn = require_keysIn();
	/**
	* The base implementation of `_.assignIn` without support for multiple sources
	* or `customizer` functions.
	*
	* @private
	* @param {Object} object The destination object.
	* @param {Object} source The source object.
	* @returns {Object} Returns `object`.
	*/
	function baseAssignIn(object, source) {
		return object && copyObject(source, keysIn(source), object);
	}
	module.exports = baseAssignIn;
}));
//#endregion
//#region node_modules/lodash/_cloneBuffer.js
var require__cloneBuffer = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var root = require__root();
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
	/** Built-in value references. */
	var Buffer = freeModule && freeModule.exports === freeExports ? root.Buffer : void 0;
	var allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0;
	/**
	* Creates a clone of  `buffer`.
	*
	* @private
	* @param {Buffer} buffer The buffer to clone.
	* @param {boolean} [isDeep] Specify a deep clone.
	* @returns {Buffer} Returns the cloned buffer.
	*/
	function cloneBuffer(buffer, isDeep) {
		if (isDeep) return buffer.slice();
		var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
		buffer.copy(result);
		return result;
	}
	module.exports = cloneBuffer;
}));
//#endregion
//#region node_modules/lodash/_copyArray.js
var require__copyArray = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Copies the values of `source` to `array`.
	*
	* @private
	* @param {Array} source The array to copy values from.
	* @param {Array} [array=[]] The array to copy values to.
	* @returns {Array} Returns `array`.
	*/
	function copyArray(source, array) {
		var index = -1, length = source.length;
		array || (array = Array(length));
		while (++index < length) array[index] = source[index];
		return array;
	}
	module.exports = copyArray;
}));
//#endregion
//#region node_modules/lodash/_copySymbols.js
var require__copySymbols = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var copyObject = require__copyObject();
	var getSymbols = require__getSymbols();
	/**
	* Copies own symbols of `source` to `object`.
	*
	* @private
	* @param {Object} source The object to copy symbols from.
	* @param {Object} [object={}] The object to copy symbols to.
	* @returns {Object} Returns `object`.
	*/
	function copySymbols(source, object) {
		return copyObject(source, getSymbols(source), object);
	}
	module.exports = copySymbols;
}));
//#endregion
//#region node_modules/lodash/_getPrototype.js
var require__getPrototype = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require__overArg()(Object.getPrototypeOf, Object);
}));
//#endregion
//#region node_modules/lodash/_getSymbolsIn.js
var require__getSymbolsIn = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var arrayPush = require__arrayPush();
	var getPrototype = require__getPrototype();
	var getSymbols = require__getSymbols();
	var stubArray = require_stubArray();
	module.exports = !Object.getOwnPropertySymbols ? stubArray : function(object) {
		var result = [];
		while (object) {
			arrayPush(result, getSymbols(object));
			object = getPrototype(object);
		}
		return result;
	};
}));
//#endregion
//#region node_modules/lodash/_copySymbolsIn.js
var require__copySymbolsIn = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var copyObject = require__copyObject();
	var getSymbolsIn = require__getSymbolsIn();
	/**
	* Copies own and inherited symbols of `source` to `object`.
	*
	* @private
	* @param {Object} source The object to copy symbols from.
	* @param {Object} [object={}] The object to copy symbols to.
	* @returns {Object} Returns `object`.
	*/
	function copySymbolsIn(source, object) {
		return copyObject(source, getSymbolsIn(source), object);
	}
	module.exports = copySymbolsIn;
}));
//#endregion
//#region node_modules/lodash/_getAllKeysIn.js
var require__getAllKeysIn = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseGetAllKeys = require__baseGetAllKeys();
	var getSymbolsIn = require__getSymbolsIn();
	var keysIn = require_keysIn();
	/**
	* Creates an array of own and inherited enumerable property names and
	* symbols of `object`.
	*
	* @private
	* @param {Object} object The object to query.
	* @returns {Array} Returns the array of property names and symbols.
	*/
	function getAllKeysIn(object) {
		return baseGetAllKeys(object, keysIn, getSymbolsIn);
	}
	module.exports = getAllKeysIn;
}));
//#endregion
//#region node_modules/lodash/_initCloneArray.js
var require__initCloneArray = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** Used to check objects for own properties. */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	* Initializes an array clone.
	*
	* @private
	* @param {Array} array The array to clone.
	* @returns {Array} Returns the initialized clone.
	*/
	function initCloneArray(array) {
		var length = array.length, result = new array.constructor(length);
		if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
			result.index = array.index;
			result.input = array.input;
		}
		return result;
	}
	module.exports = initCloneArray;
}));
//#endregion
//#region node_modules/lodash/_cloneArrayBuffer.js
var require__cloneArrayBuffer = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Uint8Array = require__Uint8Array();
	/**
	* Creates a clone of `arrayBuffer`.
	*
	* @private
	* @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	* @returns {ArrayBuffer} Returns the cloned array buffer.
	*/
	function cloneArrayBuffer(arrayBuffer) {
		var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
		new Uint8Array(result).set(new Uint8Array(arrayBuffer));
		return result;
	}
	module.exports = cloneArrayBuffer;
}));
//#endregion
//#region node_modules/lodash/_cloneDataView.js
var require__cloneDataView = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var cloneArrayBuffer = require__cloneArrayBuffer();
	/**
	* Creates a clone of `dataView`.
	*
	* @private
	* @param {Object} dataView The data view to clone.
	* @param {boolean} [isDeep] Specify a deep clone.
	* @returns {Object} Returns the cloned data view.
	*/
	function cloneDataView(dataView, isDeep) {
		var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
		return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
	}
	module.exports = cloneDataView;
}));
//#endregion
//#region node_modules/lodash/_cloneRegExp.js
var require__cloneRegExp = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** Used to match `RegExp` flags from their coerced string values. */
	var reFlags = /\w*$/;
	/**
	* Creates a clone of `regexp`.
	*
	* @private
	* @param {Object} regexp The regexp to clone.
	* @returns {Object} Returns the cloned regexp.
	*/
	function cloneRegExp(regexp) {
		var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
		result.lastIndex = regexp.lastIndex;
		return result;
	}
	module.exports = cloneRegExp;
}));
//#endregion
//#region node_modules/lodash/_cloneSymbol.js
var require__cloneSymbol = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Symbol = require__Symbol();
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : void 0;
	var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
	/**
	* Creates a clone of the `symbol` object.
	*
	* @private
	* @param {Object} symbol The symbol object to clone.
	* @returns {Object} Returns the cloned symbol object.
	*/
	function cloneSymbol(symbol) {
		return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
	}
	module.exports = cloneSymbol;
}));
//#endregion
//#region node_modules/lodash/_cloneTypedArray.js
var require__cloneTypedArray = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var cloneArrayBuffer = require__cloneArrayBuffer();
	/**
	* Creates a clone of `typedArray`.
	*
	* @private
	* @param {Object} typedArray The typed array to clone.
	* @param {boolean} [isDeep] Specify a deep clone.
	* @returns {Object} Returns the cloned typed array.
	*/
	function cloneTypedArray(typedArray, isDeep) {
		var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
		return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	}
	module.exports = cloneTypedArray;
}));
//#endregion
//#region node_modules/lodash/_initCloneByTag.js
var require__initCloneByTag = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var cloneArrayBuffer = require__cloneArrayBuffer();
	var cloneDataView = require__cloneDataView();
	var cloneRegExp = require__cloneRegExp();
	var cloneSymbol = require__cloneSymbol();
	var cloneTypedArray = require__cloneTypedArray();
	/** `Object#toString` result references. */
	var boolTag = "[object Boolean]";
	var dateTag = "[object Date]";
	var mapTag = "[object Map]";
	var numberTag = "[object Number]";
	var regexpTag = "[object RegExp]";
	var setTag = "[object Set]";
	var stringTag = "[object String]";
	var symbolTag = "[object Symbol]";
	var arrayBufferTag = "[object ArrayBuffer]";
	var dataViewTag = "[object DataView]";
	var float32Tag = "[object Float32Array]";
	var float64Tag = "[object Float64Array]";
	var int8Tag = "[object Int8Array]";
	var int16Tag = "[object Int16Array]";
	var int32Tag = "[object Int32Array]";
	var uint8Tag = "[object Uint8Array]";
	var uint8ClampedTag = "[object Uint8ClampedArray]";
	var uint16Tag = "[object Uint16Array]";
	var uint32Tag = "[object Uint32Array]";
	/**
	* Initializes an object clone based on its `toStringTag`.
	*
	* **Note:** This function only supports cloning values with tags of
	* `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
	*
	* @private
	* @param {Object} object The object to clone.
	* @param {string} tag The `toStringTag` of the object to clone.
	* @param {boolean} [isDeep] Specify a deep clone.
	* @returns {Object} Returns the initialized clone.
	*/
	function initCloneByTag(object, tag, isDeep) {
		var Ctor = object.constructor;
		switch (tag) {
			case arrayBufferTag: return cloneArrayBuffer(object);
			case boolTag:
			case dateTag: return new Ctor(+object);
			case dataViewTag: return cloneDataView(object, isDeep);
			case float32Tag:
			case float64Tag:
			case int8Tag:
			case int16Tag:
			case int32Tag:
			case uint8Tag:
			case uint8ClampedTag:
			case uint16Tag:
			case uint32Tag: return cloneTypedArray(object, isDeep);
			case mapTag: return new Ctor();
			case numberTag:
			case stringTag: return new Ctor(object);
			case regexpTag: return cloneRegExp(object);
			case setTag: return new Ctor();
			case symbolTag: return cloneSymbol(object);
		}
	}
	module.exports = initCloneByTag;
}));
//#endregion
//#region node_modules/lodash/_baseCreate.js
var require__baseCreate = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isObject = require_isObject();
	/** Built-in value references. */
	var objectCreate = Object.create;
	module.exports = function() {
		function object() {}
		return function(proto) {
			if (!isObject(proto)) return {};
			if (objectCreate) return objectCreate(proto);
			object.prototype = proto;
			var result = new object();
			object.prototype = void 0;
			return result;
		};
	}();
}));
//#endregion
//#region node_modules/lodash/_initCloneObject.js
var require__initCloneObject = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseCreate = require__baseCreate();
	var getPrototype = require__getPrototype();
	var isPrototype = require__isPrototype();
	/**
	* Initializes an object clone.
	*
	* @private
	* @param {Object} object The object to clone.
	* @returns {Object} Returns the initialized clone.
	*/
	function initCloneObject(object) {
		return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
	}
	module.exports = initCloneObject;
}));
//#endregion
//#region node_modules/lodash/_baseIsMap.js
var require__baseIsMap = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var getTag = require__getTag();
	var isObjectLike = require_isObjectLike();
	/** `Object#toString` result references. */
	var mapTag = "[object Map]";
	/**
	* The base implementation of `_.isMap` without Node.js optimizations.
	*
	* @private
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is a map, else `false`.
	*/
	function baseIsMap(value) {
		return isObjectLike(value) && getTag(value) == mapTag;
	}
	module.exports = baseIsMap;
}));
//#endregion
//#region node_modules/lodash/isMap.js
var require_isMap = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseIsMap = require__baseIsMap();
	var baseUnary = require__baseUnary();
	var nodeUtil = require__nodeUtil();
	var nodeIsMap = nodeUtil && nodeUtil.isMap;
	module.exports = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
}));
//#endregion
//#region node_modules/lodash/_baseIsSet.js
var require__baseIsSet = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var getTag = require__getTag();
	var isObjectLike = require_isObjectLike();
	/** `Object#toString` result references. */
	var setTag = "[object Set]";
	/**
	* The base implementation of `_.isSet` without Node.js optimizations.
	*
	* @private
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is a set, else `false`.
	*/
	function baseIsSet(value) {
		return isObjectLike(value) && getTag(value) == setTag;
	}
	module.exports = baseIsSet;
}));
//#endregion
//#region node_modules/lodash/isSet.js
var require_isSet = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseIsSet = require__baseIsSet();
	var baseUnary = require__baseUnary();
	var nodeUtil = require__nodeUtil();
	var nodeIsSet = nodeUtil && nodeUtil.isSet;
	module.exports = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
}));
//#endregion
//#region node_modules/lodash/_baseClone.js
var require__baseClone = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Stack = require__Stack();
	var arrayEach = require__arrayEach();
	var assignValue = require__assignValue();
	var baseAssign = require__baseAssign();
	var baseAssignIn = require__baseAssignIn();
	var cloneBuffer = require__cloneBuffer();
	var copyArray = require__copyArray();
	var copySymbols = require__copySymbols();
	var copySymbolsIn = require__copySymbolsIn();
	var getAllKeys = require__getAllKeys();
	var getAllKeysIn = require__getAllKeysIn();
	var getTag = require__getTag();
	var initCloneArray = require__initCloneArray();
	var initCloneByTag = require__initCloneByTag();
	var initCloneObject = require__initCloneObject();
	var isArray = require_isArray();
	var isBuffer = require_isBuffer();
	var isMap = require_isMap();
	var isObject = require_isObject();
	var isSet = require_isSet();
	var keys = require_keys();
	var keysIn = require_keysIn();
	/** Used to compose bitmasks for cloning. */
	var CLONE_DEEP_FLAG = 1;
	var CLONE_FLAT_FLAG = 2;
	var CLONE_SYMBOLS_FLAG = 4;
	/** `Object#toString` result references. */
	var argsTag = "[object Arguments]";
	var arrayTag = "[object Array]";
	var boolTag = "[object Boolean]";
	var dateTag = "[object Date]";
	var errorTag = "[object Error]";
	var funcTag = "[object Function]";
	var genTag = "[object GeneratorFunction]";
	var mapTag = "[object Map]";
	var numberTag = "[object Number]";
	var objectTag = "[object Object]";
	var regexpTag = "[object RegExp]";
	var setTag = "[object Set]";
	var stringTag = "[object String]";
	var symbolTag = "[object Symbol]";
	var weakMapTag = "[object WeakMap]";
	var arrayBufferTag = "[object ArrayBuffer]";
	var dataViewTag = "[object DataView]";
	var float32Tag = "[object Float32Array]";
	var float64Tag = "[object Float64Array]";
	var int8Tag = "[object Int8Array]";
	var int16Tag = "[object Int16Array]";
	var int32Tag = "[object Int32Array]";
	var uint8Tag = "[object Uint8Array]";
	var uint8ClampedTag = "[object Uint8ClampedArray]";
	var uint16Tag = "[object Uint16Array]";
	var uint32Tag = "[object Uint32Array]";
	/** Used to identify `toStringTag` values supported by `_.clone`. */
	var cloneableTags = {};
	cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
	cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
	/**
	* The base implementation of `_.clone` and `_.cloneDeep` which tracks
	* traversed objects.
	*
	* @private
	* @param {*} value The value to clone.
	* @param {boolean} bitmask The bitmask flags.
	*  1 - Deep clone
	*  2 - Flatten inherited properties
	*  4 - Clone symbols
	* @param {Function} [customizer] The function to customize cloning.
	* @param {string} [key] The key of `value`.
	* @param {Object} [object] The parent object of `value`.
	* @param {Object} [stack] Tracks traversed objects and their clone counterparts.
	* @returns {*} Returns the cloned value.
	*/
	function baseClone(value, bitmask, customizer, key, object, stack) {
		var result, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
		if (customizer) result = object ? customizer(value, key, object, stack) : customizer(value);
		if (result !== void 0) return result;
		if (!isObject(value)) return value;
		var isArr = isArray(value);
		if (isArr) {
			result = initCloneArray(value);
			if (!isDeep) return copyArray(value, result);
		} else {
			var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
			if (isBuffer(value)) return cloneBuffer(value, isDeep);
			if (tag == objectTag || tag == argsTag || isFunc && !object) {
				result = isFlat || isFunc ? {} : initCloneObject(value);
				if (!isDeep) return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
			} else {
				if (!cloneableTags[tag]) return object ? value : {};
				result = initCloneByTag(value, tag, isDeep);
			}
		}
		stack || (stack = new Stack());
		var stacked = stack.get(value);
		if (stacked) return stacked;
		stack.set(value, result);
		if (isSet(value)) value.forEach(function(subValue) {
			result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
		});
		else if (isMap(value)) value.forEach(function(subValue, key) {
			result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
		});
		var props = isArr ? void 0 : (isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys)(value);
		arrayEach(props || value, function(subValue, key) {
			if (props) {
				key = subValue;
				subValue = value[key];
			}
			assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
		});
		return result;
	}
	module.exports = baseClone;
}));
//#endregion
//#region node_modules/lodash/_parent.js
var require__parent = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseGet = require__baseGet();
	var baseSlice = require__baseSlice();
	/**
	* Gets the parent value at `path` of `object`.
	*
	* @private
	* @param {Object} object The object to query.
	* @param {Array} path The path to get the parent value of.
	* @returns {*} Returns the parent value.
	*/
	function parent(object, path) {
		return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
	}
	module.exports = parent;
}));
//#endregion
//#region node_modules/lodash/_baseUnset.js
var require__baseUnset = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var castPath = require__castPath();
	var last = require_last();
	var parent = require__parent();
	var toKey = require__toKey();
	/** Used to check objects for own properties. */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	* The base implementation of `_.unset`.
	*
	* @private
	* @param {Object} object The object to modify.
	* @param {Array|string} path The property path to unset.
	* @returns {boolean} Returns `true` if the property is deleted, else `false`.
	*/
	function baseUnset(object, path) {
		path = castPath(path, object);
		var index = -1, length = path.length;
		if (!length) return true;
		while (++index < length) {
			var key = toKey(path[index]);
			if (key === "__proto__" && !hasOwnProperty.call(object, "__proto__")) return false;
			if ((key === "constructor" || key === "prototype") && index < length - 1) return false;
		}
		var obj = parent(object, path);
		return obj == null || delete obj[toKey(last(path))];
	}
	module.exports = baseUnset;
}));
//#endregion
//#region node_modules/lodash/isPlainObject.js
var require_isPlainObject = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseGetTag = require__baseGetTag();
	var getPrototype = require__getPrototype();
	var isObjectLike = require_isObjectLike();
	/** `Object#toString` result references. */
	var objectTag = "[object Object]";
	/** Used for built-in method references. */
	var funcProto = Function.prototype;
	var objectProto = Object.prototype;
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);
	/**
	* Checks if `value` is a plain object, that is, an object created by the
	* `Object` constructor or one with a `[[Prototype]]` of `null`.
	*
	* @static
	* @memberOf _
	* @since 0.8.0
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	* @example
	*
	* function Foo() {
	*   this.a = 1;
	* }
	*
	* _.isPlainObject(new Foo);
	* // => false
	*
	* _.isPlainObject([1, 2, 3]);
	* // => false
	*
	* _.isPlainObject({ 'x': 0, 'y': 0 });
	* // => true
	*
	* _.isPlainObject(Object.create(null));
	* // => true
	*/
	function isPlainObject(value) {
		if (!isObjectLike(value) || baseGetTag(value) != objectTag) return false;
		var proto = getPrototype(value);
		if (proto === null) return true;
		var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
		return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
	}
	module.exports = isPlainObject;
}));
//#endregion
//#region node_modules/lodash/_customOmitClone.js
var require__customOmitClone = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isPlainObject = require_isPlainObject();
	/**
	* Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
	* objects.
	*
	* @private
	* @param {*} value The value to inspect.
	* @param {string} key The key of the property to inspect.
	* @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
	*/
	function customOmitClone(value) {
		return isPlainObject(value) ? void 0 : value;
	}
	module.exports = customOmitClone;
}));
//#endregion
//#region node_modules/lodash/_flatRest.js
var require__flatRest = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var flatten = require_flatten();
	var overRest = require__overRest();
	var setToString = require__setToString();
	/**
	* A specialized version of `baseRest` which flattens the rest array.
	*
	* @private
	* @param {Function} func The function to apply a rest parameter to.
	* @returns {Function} Returns the new function.
	*/
	function flatRest(func) {
		return setToString(overRest(func, void 0, flatten), func + "");
	}
	module.exports = flatRest;
}));
//#endregion
//#region node_modules/lodash/omit.js
var require_omit = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var arrayMap = require__arrayMap();
	var baseClone = require__baseClone();
	var baseUnset = require__baseUnset();
	var castPath = require__castPath();
	var copyObject = require__copyObject();
	var customOmitClone = require__customOmitClone();
	var flatRest = require__flatRest();
	var getAllKeysIn = require__getAllKeysIn();
	/** Used to compose bitmasks for cloning. */
	var CLONE_DEEP_FLAG = 1;
	var CLONE_FLAT_FLAG = 2;
	var CLONE_SYMBOLS_FLAG = 4;
	module.exports = flatRest(function(object, paths) {
		var result = {};
		if (object == null) return result;
		var isDeep = false;
		paths = arrayMap(paths, function(path) {
			path = castPath(path, object);
			isDeep || (isDeep = path.length > 1);
			return path;
		});
		copyObject(object, getAllKeysIn(object), result);
		if (isDeep) result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
		var length = paths.length;
		while (length--) baseUnset(result, paths[length]);
		return result;
	});
}));
//#endregion
//#region node_modules/lodash/_baseSet.js
var require__baseSet = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var assignValue = require__assignValue();
	var castPath = require__castPath();
	var isIndex = require__isIndex();
	var isObject = require_isObject();
	var toKey = require__toKey();
	/**
	* The base implementation of `_.set`.
	*
	* @private
	* @param {Object} object The object to modify.
	* @param {Array|string} path The path of the property to set.
	* @param {*} value The value to set.
	* @param {Function} [customizer] The function to customize path creation.
	* @returns {Object} Returns `object`.
	*/
	function baseSet(object, path, value, customizer) {
		if (!isObject(object)) return object;
		path = castPath(path, object);
		var index = -1, length = path.length, lastIndex = length - 1, nested = object;
		while (nested != null && ++index < length) {
			var key = toKey(path[index]), newValue = value;
			if (key === "__proto__" || key === "constructor" || key === "prototype") return object;
			if (index != lastIndex) {
				var objValue = nested[key];
				newValue = customizer ? customizer(objValue, key, nested) : void 0;
				if (newValue === void 0) newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
			}
			assignValue(nested, key, newValue);
			nested = nested[key];
		}
		return object;
	}
	module.exports = baseSet;
}));
//#endregion
//#region node_modules/lodash/_basePickBy.js
var require__basePickBy = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseGet = require__baseGet();
	var baseSet = require__baseSet();
	var castPath = require__castPath();
	/**
	* The base implementation of  `_.pickBy` without support for iteratee shorthands.
	*
	* @private
	* @param {Object} object The source object.
	* @param {string[]} paths The property paths to pick.
	* @param {Function} predicate The function invoked per property.
	* @returns {Object} Returns the new object.
	*/
	function basePickBy(object, paths, predicate) {
		var index = -1, length = paths.length, result = {};
		while (++index < length) {
			var path = paths[index], value = baseGet(object, path);
			if (predicate(value, path)) baseSet(result, castPath(path, object), value);
		}
		return result;
	}
	module.exports = basePickBy;
}));
//#endregion
//#region node_modules/lodash/_basePick.js
var require__basePick = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var basePickBy = require__basePickBy();
	var hasIn = require_hasIn();
	/**
	* The base implementation of `_.pick` without support for individual
	* property identifiers.
	*
	* @private
	* @param {Object} object The source object.
	* @param {string[]} paths The property paths to pick.
	* @returns {Object} Returns the new object.
	*/
	function basePick(object, paths) {
		return basePickBy(object, paths, function(value, path) {
			return hasIn(object, path);
		});
	}
	module.exports = basePick;
}));
//#endregion
//#region node_modules/lodash/pick.js
var require_pick = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var basePick = require__basePick();
	module.exports = require__flatRest()(function(object, paths) {
		return object == null ? {} : basePick(object, paths);
	});
}));
//#endregion
//#region node_modules/arrify/index.js
var require_arrify = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var arrify = (value) => {
		if (value === null || value === void 0) return [];
		if (Array.isArray(value)) return value;
		if (typeof value === "string") return [value];
		if (typeof value[Symbol.iterator] === "function") return [...value];
		return [value];
	};
	module.exports = arrify;
}));
//#endregion
//#region node_modules/lodash/isUndefined.js
var require_isUndefined = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Checks if `value` is `undefined`.
	*
	* @static
	* @since 0.1.0
	* @memberOf _
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
	* @example
	*
	* _.isUndefined(void 0);
	* // => true
	*
	* _.isUndefined(null);
	* // => false
	*/
	function isUndefined(value) {
		return value === void 0;
	}
	module.exports = isUndefined;
}));
//#endregion
//#region node_modules/lodash/negate.js
var require_negate = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** Error message constants. */
	var FUNC_ERROR_TEXT = "Expected a function";
	/**
	* Creates a function that negates the result of the predicate `func`. The
	* `func` predicate is invoked with the `this` binding and arguments of the
	* created function.
	*
	* @static
	* @memberOf _
	* @since 3.0.0
	* @category Function
	* @param {Function} predicate The predicate to negate.
	* @returns {Function} Returns the new negated function.
	* @example
	*
	* function isEven(n) {
	*   return n % 2 == 0;
	* }
	*
	* _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
	* // => [1, 3, 5]
	*/
	function negate(predicate) {
		if (typeof predicate != "function") throw new TypeError(FUNC_ERROR_TEXT);
		return function() {
			var args = arguments;
			switch (args.length) {
				case 0: return !predicate.call(this);
				case 1: return !predicate.call(this, args[0]);
				case 2: return !predicate.call(this, args[0], args[1]);
				case 3: return !predicate.call(this, args[0], args[1], args[2]);
			}
			return !predicate.apply(this, args);
		};
	}
	module.exports = negate;
}));
//#endregion
//#region node_modules/lodash/pickBy.js
var require_pickBy = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var arrayMap = require__arrayMap();
	var baseIteratee = require__baseIteratee();
	var basePickBy = require__basePickBy();
	var getAllKeysIn = require__getAllKeysIn();
	/**
	* Creates an object composed of the `object` properties `predicate` returns
	* truthy for. The predicate is invoked with two arguments: (value, key).
	*
	* @static
	* @memberOf _
	* @since 4.0.0
	* @category Object
	* @param {Object} object The source object.
	* @param {Function} [predicate=_.identity] The function invoked per property.
	* @returns {Object} Returns the new object.
	* @example
	*
	* var object = { 'a': 1, 'b': '2', 'c': 3 };
	*
	* _.pickBy(object, _.isNumber);
	* // => { 'a': 1, 'c': 3 }
	*/
	function pickBy(object, predicate) {
		if (object == null) return {};
		var props = arrayMap(getAllKeysIn(object), function(prop) {
			return [prop];
		});
		predicate = baseIteratee(predicate);
		return basePickBy(object, props, function(value, path) {
			return predicate(value, path[0]);
		});
	}
	module.exports = pickBy;
}));
//#endregion
//#region node_modules/lodash/omitBy.js
var require_omitBy = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseIteratee = require__baseIteratee();
	var negate = require_negate();
	var pickBy = require_pickBy();
	/**
	* The opposite of `_.pickBy`; this method creates an object composed of
	* the own and inherited enumerable string keyed properties of `object` that
	* `predicate` doesn't return truthy for. The predicate is invoked with two
	* arguments: (value, key).
	*
	* @static
	* @memberOf _
	* @since 4.0.0
	* @category Object
	* @param {Object} object The source object.
	* @param {Function} [predicate=_.identity] The function invoked per property.
	* @returns {Object} Returns the new object.
	* @example
	*
	* var object = { 'a': 1, 'b': '2', 'c': 3 };
	*
	* _.omitBy(object, _.isNumber);
	* // => { 'b': '2' }
	*/
	function omitBy(object, predicate) {
		return pickBy(object, negate(baseIteratee(predicate)));
	}
	module.exports = omitBy;
}));
//#endregion
//#region node_modules/lodash/capitalize.js
var require_capitalize = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var toString = require_toString();
	var upperFirst = require_upperFirst();
	/**
	* Converts the first character of `string` to upper case and the remaining
	* to lower case.
	*
	* @static
	* @memberOf _
	* @since 3.0.0
	* @category String
	* @param {string} [string=''] The string to capitalize.
	* @returns {string} Returns the capitalized string.
	* @example
	*
	* _.capitalize('FRED');
	* // => 'Fred'
	*/
	function capitalize(string) {
		return upperFirst(toString(string).toLowerCase());
	}
	module.exports = capitalize;
}));
//#endregion
//#region node_modules/lodash/isFinite.js
var require_isFinite = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var nativeIsFinite = require__root().isFinite;
	/**
	* Checks if `value` is a finite primitive number.
	*
	* **Note:** This method is based on
	* [`Number.isFinite`](https://mdn.io/Number/isFinite).
	*
	* @static
	* @memberOf _
	* @since 0.1.0
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
	* @example
	*
	* _.isFinite(3);
	* // => true
	*
	* _.isFinite(Number.MIN_VALUE);
	* // => true
	*
	* _.isFinite(Infinity);
	* // => false
	*
	* _.isFinite('3');
	* // => false
	*/
	function isFinite(value) {
		return typeof value == "number" && nativeIsFinite(value);
	}
	module.exports = isFinite;
}));
//#endregion
//#region node_modules/lodash/castArray.js
var require_castArray = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isArray = require_isArray();
	/**
	* Casts `value` as an array if it's not one.
	*
	* @static
	* @memberOf _
	* @since 4.4.0
	* @category Lang
	* @param {*} value The value to inspect.
	* @returns {Array} Returns the cast array.
	* @example
	*
	* _.castArray(1);
	* // => [1]
	*
	* _.castArray({ 'a': 1 });
	* // => [{ 'a': 1 }]
	*
	* _.castArray('abc');
	* // => ['abc']
	*
	* _.castArray(null);
	* // => [null]
	*
	* _.castArray(undefined);
	* // => [undefined]
	*
	* _.castArray();
	* // => []
	*
	* var array = [1, 2, 3];
	* console.log(_.castArray(array) === array);
	* // => true
	*/
	function castArray() {
		if (!arguments.length) return [];
		var value = arguments[0];
		return isArray(value) ? value : [value];
	}
	module.exports = castArray;
}));
//#endregion
//#region node_modules/lodash/map.js
var require_map = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var arrayMap = require__arrayMap();
	var baseIteratee = require__baseIteratee();
	var baseMap = require__baseMap();
	var isArray = require_isArray();
	/**
	* Creates an array of values by running each element in `collection` thru
	* `iteratee`. The iteratee is invoked with three arguments:
	* (value, index|key, collection).
	*
	* Many lodash methods are guarded to work as iteratees for methods like
	* `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
	*
	* The guarded methods are:
	* `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
	* `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
	* `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
	* `template`, `trim`, `trimEnd`, `trimStart`, and `words`
	*
	* @static
	* @memberOf _
	* @since 0.1.0
	* @category Collection
	* @param {Array|Object} collection The collection to iterate over.
	* @param {Function} [iteratee=_.identity] The function invoked per iteration.
	* @returns {Array} Returns the new mapped array.
	* @example
	*
	* function square(n) {
	*   return n * n;
	* }
	*
	* _.map([4, 8], square);
	* // => [16, 64]
	*
	* _.map({ 'a': 4, 'b': 8 }, square);
	* // => [16, 64] (iteration order is not guaranteed)
	*
	* var users = [
	*   { 'user': 'barney' },
	*   { 'user': 'fred' }
	* ];
	*
	* // The `_.property` iteratee shorthand.
	* _.map(users, 'user');
	* // => ['barney', 'fred']
	*/
	function map(collection, iteratee) {
		return (isArray(collection) ? arrayMap : baseMap)(collection, baseIteratee(iteratee, 3));
	}
	module.exports = map;
}));
//#endregion
//#region node_modules/lodash/flatMap.js
var require_flatMap = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseFlatten = require__baseFlatten();
	var map = require_map();
	/**
	* Creates a flattened array of values by running each element in `collection`
	* thru `iteratee` and flattening the mapped results. The iteratee is invoked
	* with three arguments: (value, index|key, collection).
	*
	* @static
	* @memberOf _
	* @since 4.0.0
	* @category Collection
	* @param {Array|Object} collection The collection to iterate over.
	* @param {Function} [iteratee=_.identity] The function invoked per iteration.
	* @returns {Array} Returns the new flattened array.
	* @example
	*
	* function duplicate(n) {
	*   return [n, n];
	* }
	*
	* _.flatMap([1, 2], duplicate);
	* // => [1, 1, 2, 2]
	*/
	function flatMap(collection, iteratee) {
		return baseFlatten(map(collection, iteratee), 1);
	}
	module.exports = flatMap;
}));
//#endregion
//#region node_modules/lodash/toPath.js
var require_toPath = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var arrayMap = require__arrayMap();
	var copyArray = require__copyArray();
	var isArray = require_isArray();
	var isSymbol = require_isSymbol();
	var stringToPath = require__stringToPath();
	var toKey = require__toKey();
	var toString = require_toString();
	/**
	* Converts `value` to a property path array.
	*
	* @static
	* @memberOf _
	* @since 4.0.0
	* @category Util
	* @param {*} value The value to convert.
	* @returns {Array} Returns the new property path array.
	* @example
	*
	* _.toPath('a.b.c');
	* // => ['a', 'b', 'c']
	*
	* _.toPath('a[0].b.c');
	* // => ['a', '0', 'b', 'c']
	*/
	function toPath(value) {
		if (isArray(value)) return arrayMap(value, toKey);
		return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
	}
	module.exports = toPath;
}));
//#endregion
//#region node_modules/lodash/cloneDeep.js
var require_cloneDeep = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseClone = require__baseClone();
	/** Used to compose bitmasks for cloning. */
	var CLONE_DEEP_FLAG = 1;
	var CLONE_SYMBOLS_FLAG = 4;
	/**
	* This method is like `_.clone` except that it recursively clones `value`.
	*
	* @static
	* @memberOf _
	* @since 1.0.0
	* @category Lang
	* @param {*} value The value to recursively clone.
	* @returns {*} Returns the deep cloned value.
	* @see _.clone
	* @example
	*
	* var objects = [{ 'a': 1 }, { 'b': 2 }];
	*
	* var deep = _.cloneDeep(objects);
	* console.log(deep[0] === objects[0]);
	* // => false
	*/
	function cloneDeep(value) {
		return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
	}
	module.exports = cloneDeep;
}));
//#endregion
//#region node_modules/@sanity/schema/lib/_chunks-es/Rule.js
var import_omit = /* @__PURE__ */ __toESM(require_omit(), 1);
var import_pick = /* @__PURE__ */ __toESM(require_pick(), 1);
var import_arrify = /* @__PURE__ */ __toESM(require_arrify(), 1);
var import_isUndefined = /* @__PURE__ */ __toESM(require_isUndefined(), 1);
var import_omitBy = /* @__PURE__ */ __toESM(require_omitBy(), 1);
var import_capitalize = /* @__PURE__ */ __toESM(require_capitalize(), 1);
var import_isFinite = /* @__PURE__ */ __toESM(require_isFinite(), 1);
var import_castArray = /* @__PURE__ */ __toESM(require_castArray(), 1);
var import_flatMap = /* @__PURE__ */ __toESM(require_flatMap(), 1);
var import_isPlainObject = /* @__PURE__ */ __toESM(require_isPlainObject(), 1);
var import_toPath = /* @__PURE__ */ __toESM(require_toPath(), 1);
var import_cloneDeep = /* @__PURE__ */ __toESM(require_cloneDeep(), 1);
var DEFAULT_OVERRIDEABLE_FIELDS = [
	"jsonType",
	"type",
	"name",
	"title",
	"description",
	"options",
	"fieldsets",
	"validation",
	"readOnly",
	"hidden",
	"components",
	"diffComponent",
	"initialValue",
	"deprecated"
];
var OWN_PROPS_NAME = "_internal_ownProps";
var ALL_FIELDS_GROUP_NAME = "all-fields";
function lazyGetter(target, key, getter, config = {}) {
	return Object.defineProperty(target, key, {
		configurable: !0,
		enumerable: config.enumerable !== !1,
		get() {
			const val = getter();
			return Object.defineProperty(target, key, {
				value: val,
				writable: !!config.writable,
				configurable: !1
			}), val;
		}
	}), target;
}
function hiddenGetter(target, key, value) {
	Object.defineProperty(target, key, {
		enumerable: !1,
		writable: !1,
		configurable: !1,
		value
	});
}
var OVERRIDABLE_FIELDS$f = [...DEFAULT_OVERRIDEABLE_FIELDS];
var ANY_CORE = {
	name: "any",
	type: null,
	jsonType: "any"
};
var AnyType = {
	get() {
		return ANY_CORE;
	},
	extend(subTypeDef, extendMember) {
		const ownProps = {
			...subTypeDef,
			of: subTypeDef.of.map((fieldDef) => ({
				name: fieldDef.name,
				type: extendMember((0, import_omit.default)(fieldDef, "name"))
			}))
		}, parsed = Object.assign((0, import_pick.default)(ANY_CORE, OVERRIDABLE_FIELDS$f), ownProps, { type: ANY_CORE });
		return hiddenGetter(parsed, OWN_PROPS_NAME, ownProps), subtype(parsed);
		function subtype(parent) {
			return {
				get() {
					return parent;
				},
				extend: (extensionDef) => {
					if (extensionDef.of) throw new Error("Cannot override `of` property of subtypes of \"array\"");
					const subOwnProps = (0, import_pick.default)(extensionDef, OVERRIDABLE_FIELDS$f), current = Object.assign({}, parent, subOwnProps, { type: parent });
					return hiddenGetter(current, OWN_PROPS_NAME, subOwnProps), subtype(current);
				}
			};
		}
	}
};
var OVERRIDABLE_FIELDS$e = [...DEFAULT_OVERRIDEABLE_FIELDS];
var ARRAY_CORE = {
	name: "array",
	type: null,
	jsonType: "array",
	of: []
};
var ArrayType = {
	get() {
		return ARRAY_CORE;
	},
	extend(subTypeDef, createMemberType) {
		const parsed = Object.assign((0, import_pick.default)(ARRAY_CORE, OVERRIDABLE_FIELDS$e), subTypeDef, { type: ARRAY_CORE });
		return lazyGetter(parsed, "of", () => subTypeDef.of.map((ofTypeDef) => createMemberType.cached(ofTypeDef))), lazyGetter(parsed, OWN_PROPS_NAME, () => ({
			...subTypeDef,
			of: parsed.of
		}), {
			enumerable: !1,
			writable: !1
		}), subtype(parsed);
		function subtype(parent) {
			return {
				get() {
					return parent;
				},
				extend: (extensionDef) => {
					if (extensionDef.of) throw new Error("Cannot override `of` property of subtypes of \"array\"");
					const ownProps = (0, import_pick.default)(extensionDef, OVERRIDABLE_FIELDS$e), current = Object.assign({}, parent, ownProps, { type: parent });
					return hiddenGetter(current, OWN_PROPS_NAME, ownProps), subtype(current);
				}
			};
		}
	}
};
function warnIfPreviewOnOptions(type) {
	type.options && type.options.preview && console.warn(`Heads up! The preview config is no longer defined on "options", but instead on the type/field itself.
Please move {options: {preview: ...}} to {..., preview: ...} on the type/field definition of "${type.name}".
`);
}
function warnIfPreviewHasFields(type) {
	const preview = type.preview || (type.options || {}).preview;
	preview && "fields" in preview && console.warn(`Heads up! "preview.fields" should be renamed to "preview.select". Please update the preview config for "${type.name}".
`);
}
function isEmpty(object) {
	for (const key in object) if (object.hasOwnProperty(key)) return !1;
	return !0;
}
function _stringify(value, options, depth) {
	if (depth > options.maxDepth) return "...";
	if (Array.isArray(value)) {
		if (value.length === 0) return "[empty]";
		const capLength = Math.max(value.length - options.maxBreadth), asString2 = value.slice(0, options.maxBreadth).map((item, index) => _stringify(item, options, depth + 1)).concat(capLength > 0 ? `\u2026+${capLength}` : []).join(", ");
		return depth === 0 ? asString2 : `[${asString2}]`;
	}
	if (typeof value == "object" && value !== null) {
		const keys = Object.keys(value).filter((key) => !options.ignoreKeys.includes(key) && typeof value[key] < "u");
		if (isEmpty((0, import_pick.default)(value, keys))) return "{empty}";
		const asString2 = keys.slice(0, options.maxBreadth).map((key) => `${key}: ${_stringify(value[key], options, depth + 1)}`).join(", ");
		return depth === 0 ? asString2 : `{${asString2}}`;
	}
	const asString = String(value);
	return asString === "" ? "\"\"" : asString;
}
function stringify(value, options = {}) {
	return _stringify(value, {
		maxDepth: "maxDepth" in options ? options.maxDepth : 2,
		maxBreadth: "maxBreadth" in options ? options.maxBreadth : 2,
		ignoreKeys: "ignoreKeys" in options ? options.ignoreKeys : []
	}, 0);
}
var OPTIONS = {
	maxEntries: 2,
	maxDepth: 2,
	maxBreadth: 2,
	ignoreKeys: [
		"_id",
		"_type",
		"_key",
		"_ref"
	]
};
function createFallbackPrepare(fieldNames) {
	return (value) => ({ title: stringify((0, import_pick.default)(value, fieldNames), OPTIONS) });
}
function isBlockField(field) {
	return field.type === "array" && field.of && field.of.some((member) => member.type === "block") || !1;
}
var TITLE_CANDIDATES = [
	"title",
	"name",
	"label",
	"heading",
	"header",
	"caption"
];
var DESCRIPTION_CANDIDATES = ["description", ...TITLE_CANDIDATES];
function fieldHasReferenceTo(fieldDef, refType) {
	return (0, import_arrify.default)(fieldDef.to || []).some((memberTypeDef) => memberTypeDef.type === refType);
}
function isImageAssetField(fieldDef) {
	return fieldHasReferenceTo(fieldDef, "sanity.imageAsset");
}
function resolveImageAssetPath(typeDef) {
	const fields = typeDef.fields || [], imageAssetField = fields.find(isImageAssetField);
	if (imageAssetField) return imageAssetField.name;
	const fieldWithImageAsset = fields.find((fieldDef) => (fieldDef.fields || []).some(isImageAssetField));
	return fieldWithImageAsset ? `${fieldWithImageAsset.name}.asset` : void 0;
}
function isFileAssetField(fieldDef) {
	return fieldHasReferenceTo(fieldDef, "sanity.fileAsset");
}
function resolveFileAssetPath(typeDef) {
	const fields = typeDef.fields || [], assetField = fields.find(isFileAssetField);
	if (assetField) return assetField.name;
	const fieldWithFileAsset = fields.find((fieldDef) => (fieldDef.fields || []).some(isFileAssetField));
	return fieldWithFileAsset ? `${fieldWithFileAsset.name}.asset` : void 0;
}
function guessPreviewFields(rawObjectTypeDef) {
	const objectTypeDef = {
		fields: [],
		...rawObjectTypeDef
	}, stringFieldNames = objectTypeDef.fields.filter((field) => field.type === "string").map((field) => field.name), blockFieldNames = objectTypeDef.fields.filter(isBlockField).map((field) => field.name);
	let titleField = TITLE_CANDIDATES.find((candidate) => stringFieldNames.includes(candidate) || blockFieldNames.includes(candidate)), descField = DESCRIPTION_CANDIDATES.find((candidate) => candidate !== titleField && (stringFieldNames.includes(candidate) || blockFieldNames.includes(candidate)));
	titleField || (titleField = stringFieldNames[0] || blockFieldNames[0], descField = stringFieldNames[1] || blockFieldNames[1]);
	const mediaField = objectTypeDef.fields.find((field) => field.type === "image"), imageAssetPath = resolveImageAssetPath(objectTypeDef);
	if (!titleField) {
		const fileAssetPath = resolveFileAssetPath(objectTypeDef);
		fileAssetPath && (titleField = `${fileAssetPath}.originalFilename`), imageAssetPath && (titleField = `${imageAssetPath}.originalFilename`);
	}
	if (!titleField && !imageAssetPath) {
		const fieldNames = objectTypeDef.fields.map((field) => field.name);
		return {
			select: fieldNames.reduce((acc, fieldName) => (acc[fieldName] = fieldName, acc), {}),
			prepare: createFallbackPrepare(fieldNames)
		};
	}
	return { select: (0, import_omitBy.default)({
		title: titleField,
		description: descField,
		media: mediaField ? mediaField.name : imageAssetPath
	}, import_isUndefined.default) };
}
function parseSelection(selection) {
	return selection.reduce((acc, field) => (acc[field] = field, acc), {});
}
function parsePreview(preview) {
	if (!preview) return preview;
	const select = preview.select || preview.fields || {};
	return Array.isArray(select) ? {
		...(0, import_pick.default)(preview, ["prepare", "component"]),
		select: parseSelection(select)
	} : {
		...(0, import_pick.default)(preview, ["prepare", "component"]),
		select
	};
}
function createPreviewGetter(objectTypeDef) {
	return function() {
		return warnIfPreviewOnOptions(objectTypeDef), warnIfPreviewHasFields(objectTypeDef), parsePreview(objectTypeDef.preview || (objectTypeDef.options || {}).preview) || guessPreviewFields(objectTypeDef);
	};
}
var DEFAULT_LINK_ANNOTATION = {
	type: "object",
	name: "link",
	title: "Link",
	i18nTitleKey: "inputs.portable-text.annotation.link",
	options: { modal: { type: "popover" } },
	fields: [{
		name: "href",
		type: "url",
		title: "Link",
		description: "A valid web, email, phone, or relative link.",
		validation: (Rule3) => Rule3.uri({
			scheme: [
				"http",
				"https",
				"tel",
				"mailto"
			],
			allowRelative: !0
		})
	}]
};
var DEFAULT_TEXT_FIELD = {
	type: "text",
	name: "text",
	title: "Text"
};
var DEFAULT_MARKS_FIELD = {
	name: "marks",
	type: "array",
	of: [{ type: "string" }],
	title: "Marks"
};
var LIST_TYPES = {
	bullet: {
		title: "Bulleted list",
		value: "bullet",
		i18nTitleKey: "inputs.portable-text.list-type.bullet"
	},
	numbered: {
		title: "Numbered list",
		value: "number",
		i18nTitleKey: "inputs.portable-text.list-type.number"
	}
};
var DEFAULT_LIST_TYPES = [LIST_TYPES.bullet, LIST_TYPES.numbered];
var BLOCK_STYLES = {
	normal: {
		title: "Normal",
		value: "normal",
		i18nTitleKey: "inputs.portable-text.style.normal"
	},
	h1: {
		title: "Heading 1",
		value: "h1",
		i18nTitleKey: "inputs.portable-text.style.h1"
	},
	h2: {
		title: "Heading 2",
		value: "h2",
		i18nTitleKey: "inputs.portable-text.style.h2"
	},
	h3: {
		title: "Heading 3",
		value: "h3",
		i18nTitleKey: "inputs.portable-text.style.h3"
	},
	h4: {
		title: "Heading 4",
		value: "h4",
		i18nTitleKey: "inputs.portable-text.style.h4"
	},
	h5: {
		title: "Heading 5",
		value: "h5",
		i18nTitleKey: "inputs.portable-text.style.h5"
	},
	h6: {
		title: "Heading 6",
		value: "h6",
		i18nTitleKey: "inputs.portable-text.style.h6"
	},
	blockquote: {
		title: "Quote",
		value: "blockquote",
		i18nTitleKey: "inputs.portable-text.style.quote"
	}
};
var DEFAULT_BLOCK_STYLES = [
	BLOCK_STYLES.normal,
	BLOCK_STYLES.h1,
	BLOCK_STYLES.h2,
	BLOCK_STYLES.h3,
	BLOCK_STYLES.h4,
	BLOCK_STYLES.h5,
	BLOCK_STYLES.h6,
	BLOCK_STYLES.blockquote
];
var DECORATORS = {
	strong: {
		title: "Strong",
		value: "strong",
		i18nTitleKey: "inputs.portable-text.decorator.strong"
	},
	em: {
		title: "Italic",
		value: "em",
		i18nTitleKey: "inputs.portable-text.decorator.emphasis"
	},
	code: {
		title: "Code",
		value: "code",
		i18nTitleKey: "inputs.portable-text.decorator.code"
	},
	underline: {
		title: "Underline",
		value: "underline",
		i18nTitleKey: "inputs.portable-text.decorator.underline"
	},
	strikeThrough: {
		title: "Strike",
		value: "strike-through",
		i18nTitleKey: "inputs.portable-text.decorator.strike-through"
	}
};
var DEFAULT_DECORATORS = [
	DECORATORS.strong,
	DECORATORS.em,
	DECORATORS.code,
	DECORATORS.underline,
	DECORATORS.strikeThrough
];
var INHERITED_FIELDS$1 = [
	"type",
	"name",
	"title",
	"jsonType",
	"description",
	"options",
	"fieldsets",
	"icon"
];
var BLOCK_CORE = {
	name: "block",
	title: "Block",
	type: null,
	jsonType: "object"
};
var DEFAULT_OPTIONS$3 = {};
var BlockType = {
	get() {
		return BLOCK_CORE;
	},
	extend(subTypeDef, extendMember) {
		const options = { ...subTypeDef.options || DEFAULT_OPTIONS$3 }, { marks, styles, lists, of, ...rest } = subTypeDef, fields = [
			createChildrenField(marks, of),
			createStyleField(styles),
			createListItemField(lists),
			{
				name: "markDefs",
				title: "Mark definitions",
				type: "array",
				of: marks?.annotations || DEFAULT_ANNOTATIONS
			},
			{
				name: "level",
				title: "Indentation",
				type: "number"
			}
		].concat(subTypeDef.fields || []), ownProps = {
			...rest,
			options
		}, parsed = Object.assign((0, import_pick.default)(BLOCK_CORE, INHERITED_FIELDS$1), ownProps, { type: BLOCK_CORE });
		return lazyGetter(parsed, "fields", () => fields.map((fieldDef) => extendMember.cachedField(fieldDef))), lazyGetter(parsed, "preview", createPreviewGetter(subTypeDef)), lazyGetter(parsed, OWN_PROPS_NAME, () => ({
			...ownProps,
			fields: parsed.fields,
			preview: parsed.preview
		}), {
			enumerable: !1,
			writable: !1
		}), subtype(parsed);
		function subtype(parent) {
			return {
				get() {
					return parent;
				},
				extend: (extensionDef) => {
					if (extensionDef.fields) throw new Error("Cannot override `fields` of subtypes of \"block\"");
					const subOwnProps = (0, import_pick.default)(extensionDef, INHERITED_FIELDS$1), current = Object.assign({}, parent, subOwnProps, { type: parent });
					return hiddenGetter(current, OWN_PROPS_NAME, subOwnProps), subtype(current);
				}
			};
		}
	}
};
function ensureNormalStyle(styles) {
	return styles.some((style) => style.value === "normal") ? styles : [BLOCK_STYLES.normal, ...styles];
}
function createStyleField(styles) {
	return {
		name: "style",
		title: "Style",
		type: "string",
		options: { list: ensureNormalStyle(styles || DEFAULT_BLOCK_STYLES) }
	};
}
function createListItemField(lists) {
	return {
		name: "listItem",
		title: "List type",
		type: "string",
		options: { list: lists || DEFAULT_LIST_TYPES }
	};
}
var DEFAULT_ANNOTATIONS = [DEFAULT_LINK_ANNOTATION];
function createChildrenField(marks, of = []) {
	return {
		name: "children",
		title: "Content",
		type: "array",
		of: [{
			type: "span",
			fields: [DEFAULT_TEXT_FIELD, DEFAULT_MARKS_FIELD],
			annotations: marks && marks.annotations ? marks.annotations : DEFAULT_ANNOTATIONS,
			decorators: marks && marks.decorators ? marks.decorators : DEFAULT_DECORATORS
		}, ...of.filter((memberType) => memberType.type !== "span")]
	};
}
var INHERITED_FIELDS = [
	"type",
	"name",
	"title",
	"jsonType",
	"description",
	"options",
	"fieldsets",
	"icon"
];
var SPAN_CORE = {
	name: "span",
	title: "Span",
	type: null,
	jsonType: "object"
};
var MARKS_FIELD = {
	name: "marks",
	title: "Marks",
	type: "array",
	of: [{ type: "string" }]
};
var TEXT_FIELD = {
	name: "text",
	title: "Text",
	type: "string"
};
var DEFAULT_OPTIONS$2 = {};
var SpanType = {
	get() {
		return SPAN_CORE;
	},
	extend(subTypeDef, extendMember) {
		const options = { ...subTypeDef.options || DEFAULT_OPTIONS$2 }, { annotations = [], marks = [] } = subTypeDef, fields = [MARKS_FIELD, TEXT_FIELD], ownProps = {
			...subTypeDef,
			options
		}, parsed = Object.assign((0, import_pick.default)(SPAN_CORE, INHERITED_FIELDS), ownProps, { type: SPAN_CORE });
		return lazyGetter(parsed, "fields", () => fields.map((fieldDef) => extendMember.cachedField(fieldDef))), lazyGetter(parsed, "annotations", () => annotations.map(extendMember)), lazyGetter(parsed, "marks", () => marks.map(extendMember)), lazyGetter(parsed, "preview", createPreviewGetter(subTypeDef)), lazyGetter(parsed, OWN_PROPS_NAME, () => ({
			...ownProps,
			fields: parsed.fields,
			annotations: parsed.annotations,
			marks: parsed.marks,
			preview: parsed.preview
		}), {
			enumerable: !1,
			writable: !1
		}), subtype(parsed);
		function subtype(parent) {
			return {
				get() {
					return parent;
				},
				extend: (extensionDef) => {
					if (extensionDef.fields) throw new Error("Cannot override `fields` of subtypes of \"span\"");
					const subOwnProps = (0, import_pick.default)(extensionDef, INHERITED_FIELDS), current = Object.assign({}, parent, subOwnProps, { type: parent });
					return hiddenGetter(current, OWN_PROPS_NAME, subOwnProps), subtype(current);
				}
			};
		}
	}
};
var primitivePreview = { prepare: (val) => ({ title: String(val) }) };
var OVERRIDABLE_FIELDS$d = [...DEFAULT_OVERRIDEABLE_FIELDS];
var BOOLEAN_CORE = {
	name: "boolean",
	title: "Boolean",
	type: null,
	jsonType: "boolean"
};
var BooleanType = {
	get() {
		return BOOLEAN_CORE;
	},
	extend(subTypeDef) {
		const ownProps = {
			...subTypeDef,
			preview: primitivePreview
		}, parsed = Object.assign((0, import_pick.default)(BOOLEAN_CORE, OVERRIDABLE_FIELDS$d), ownProps, { type: BOOLEAN_CORE });
		return hiddenGetter(parsed, OWN_PROPS_NAME, ownProps), subtype(parsed);
		function subtype(parent) {
			return {
				get() {
					return parent;
				},
				extend: (extensionDef) => {
					const subOwnProps = (0, import_pick.default)(extensionDef, OVERRIDABLE_FIELDS$d), current = Object.assign({}, parent, subOwnProps, { type: parent });
					return hiddenGetter(current, OWN_PROPS_NAME, subOwnProps), subtype(current);
				}
			};
		}
	}
};
var stringFieldsSymbols = {};
var getStringFieldSymbol = (maxDepth) => (stringFieldsSymbols[maxDepth] || (stringFieldsSymbols[maxDepth] = /* @__PURE__ */ Symbol(`__cachedStringFields_${maxDepth}`)), stringFieldsSymbols[maxDepth]);
var isReference = (type) => type.type && type.type.name === "reference";
var portableTextFields = ["style", "list"];
var isPortableTextBlock = (type) => type.name === "block" || type.type && isPortableTextBlock(type.type);
var isPortableTextArray = (type) => type.jsonType === "array" && Array.isArray(type.of) && type.of.some(isPortableTextBlock);
function reduceType(type, reducer, acc, path = [], maxDepth) {
	if (maxDepth < 0) return acc;
	const accumulator = reducer(acc, type, path);
	return type.jsonType === "array" && Array.isArray(type.of) ? reduceArray(type, reducer, accumulator, path, maxDepth) : type.jsonType === "object" && Array.isArray(type.fields) && !isReference(type) ? reduceObject(type, reducer, accumulator, path, maxDepth) : accumulator;
}
function reduceArray(arrayType, reducer, accumulator, path, maxDepth) {
	return arrayType.of.reduce((acc, ofType) => reduceType(ofType, reducer, acc, path, maxDepth - 1), accumulator);
}
function reduceObject(objectType, reducer, accumulator, path, maxDepth) {
	const isPtBlock = isPortableTextBlock(objectType);
	return objectType.fields.reduce((acc, field) => {
		if (isPtBlock && portableTextFields.includes(field.name)) return acc;
		const segment = [field.name].concat(field.type.jsonType === "array" ? [[]] : []);
		return reduceType(field.type, reducer, acc, path.concat(segment), maxDepth - 1);
	}, accumulator);
}
var BASE_WEIGHTS = [{
	weight: 1,
	path: ["_id"]
}, {
	weight: 1,
	path: ["_type"]
}];
var PREVIEW_FIELD_WEIGHT_MAP = {
	title: 10,
	subtitle: 5,
	description: 1.5
};
function deriveFromPreview(type, maxDepth) {
	const select = type?.preview?.select;
	if (!select) return [];
	const fields = [];
	for (const fieldName of Object.keys(select)) {
		if (!(fieldName in PREVIEW_FIELD_WEIGHT_MAP)) continue;
		const path = select[fieldName].split(".");
		maxDepth > -1 && path.length - 1 > maxDepth || fields.push({
			weight: PREVIEW_FIELD_WEIGHT_MAP[fieldName],
			path
		});
	}
	return fields;
}
function getCachedStringFieldPaths(type, maxDepth) {
	const symbol = getStringFieldSymbol(maxDepth);
	return type[symbol] || (type[symbol] = (0, import_uniqBy.default)([
		...BASE_WEIGHTS,
		...deriveFromPreview(type, maxDepth),
		...getStringFieldPaths(type, maxDepth).map((path) => ({
			weight: 1,
			path
		})),
		...getPortableTextFieldPaths(type, maxDepth).map((path) => ({
			weight: 1,
			path,
			mapWith: "pt::text"
		}))
	], (spec) => spec.path.join("."))), type[symbol];
}
function getCachedBaseFieldPaths(type, maxDepth) {
	const symbol = getStringFieldSymbol(maxDepth);
	return type[symbol] || (type[symbol] = (0, import_uniqBy.default)([...BASE_WEIGHTS, ...deriveFromPreview(type, maxDepth)], (spec) => spec.path.join("."))), type[symbol];
}
function getStringFieldPaths(type, maxDepth) {
	return reduceType(type, (accumulator, childType, path) => childType.jsonType === "string" ? [...accumulator, path] : accumulator, [], [], maxDepth);
}
function getPortableTextFieldPaths(type, maxDepth) {
	return reduceType(type, (accumulator, childType, path) => isPortableTextArray(childType) ? [...accumulator, path] : accumulator, [], [], maxDepth);
}
function resolveSearchConfigForBaseFieldPaths(type, maxDepth) {
	return getCachedBaseFieldPaths(type, normalizeMaxDepth(maxDepth));
}
function resolveSearchConfig(type, maxDepth) {
	return getCachedStringFieldPaths(type, normalizeMaxDepth(maxDepth));
}
function normalizeMaxDepth(maxDepth) {
	return !(0, import_isFinite.default)(maxDepth) || maxDepth < 1 || maxDepth > 5 ? 4 : maxDepth - 1;
}
var REFERENCE_FIELDS$2 = [
	{
		name: "_ref",
		title: "Referenced document ID",
		type: "string"
	},
	{
		name: "_weak",
		title: "Weak reference marker",
		type: "boolean"
	},
	{
		name: "_dataset",
		title: "Target dataset",
		type: "string"
	},
	{
		name: "_projectId",
		title: "Target project ID",
		type: "string",
		hidden: !0
	}
];
var OVERRIDABLE_FIELDS$c = [...DEFAULT_OVERRIDEABLE_FIELDS];
var CROSS_DATASET_REFERENCE_CORE = {
	name: "crossDatasetReference",
	type: null,
	jsonType: "object"
};
function humanize$2(arr, conjunction) {
	const len = arr.length;
	if (len === 1) return arr[0];
	const first = arr.slice(0, len - 1), last = arr[len - 1];
	return `${first.join(", ")} ${conjunction} ${last}`;
}
function buildTitle$2(type) {
	return !type.to || type.to.length === 0 ? "Cross dataset Reference" : `Cross dataset reference to ${humanize$2((0, import_arrify.default)(type.to).map((toType) => toType.title || (0, import_capitalize.default)(toType.type)), "or").toLowerCase()}`;
}
var CrossDatasetReferenceType = {
	get() {
		return CROSS_DATASET_REFERENCE_CORE;
	},
	extend(subTypeDef, createMemberType) {
		if (!subTypeDef.to) throw new Error(`Missing "to" field in cross dataset reference definition. Check the type ${subTypeDef.name}`);
		const parsed = Object.assign((0, import_pick.default)(CROSS_DATASET_REFERENCE_CORE, OVERRIDABLE_FIELDS$c), subTypeDef, { type: CROSS_DATASET_REFERENCE_CORE });
		return lazyGetter(parsed, "fields", () => REFERENCE_FIELDS$2.map((fieldDef) => createMemberType.cachedField(fieldDef))), lazyGetter(parsed, "to", () => (0, import_arrify.default)(subTypeDef.to).map((toType) => ({
			...toType,
			__experimental_search: resolveSearchConfigForBaseFieldPaths(toType)
		}))), lazyGetter(parsed, "title", () => subTypeDef.title || buildTitle$2(parsed)), lazyGetter(parsed, OWN_PROPS_NAME, () => ({
			...subTypeDef,
			fields: parsed.fields,
			to: parsed.to,
			title: parsed.title
		}), {
			enumerable: !1,
			writable: !1
		}), subtype(parsed);
		function subtype(parent) {
			return {
				get() {
					return parent;
				},
				extend: (extensionDef) => {
					if (extensionDef.of) throw new Error("Cannot override `of` of subtypes of \"reference\"");
					const ownProps = (0, import_pick.default)(extensionDef, OVERRIDABLE_FIELDS$c), current = Object.assign({}, parent, ownProps, { type: parent });
					return hiddenGetter(current, OWN_PROPS_NAME, ownProps), subtype(current);
				}
			};
		}
	}
};
var OVERRIDABLE_FIELDS$b = [...DEFAULT_OVERRIDEABLE_FIELDS];
var DATE_CORE = {
	name: "date",
	title: "Datetime",
	type: null,
	jsonType: "string"
};
var DateType = {
	get() {
		return DATE_CORE;
	},
	extend(subTypeDef) {
		const ownProps = {
			...subTypeDef,
			preview: primitivePreview
		}, parsed = Object.assign((0, import_pick.default)(DATE_CORE, OVERRIDABLE_FIELDS$b), ownProps, { type: DATE_CORE });
		return hiddenGetter(parsed, OWN_PROPS_NAME, ownProps), subtype(parsed);
		function subtype(parent) {
			return {
				get() {
					return parent;
				},
				extend: (extensionDef) => {
					const subOwnProps = (0, import_pick.default)(extensionDef, OVERRIDABLE_FIELDS$b), current = Object.assign({}, parent, subOwnProps, { type: parent });
					return hiddenGetter(current, OWN_PROPS_NAME, subOwnProps), subtype(current);
				}
			};
		}
	}
};
var OVERRIDABLE_FIELDS$a = [...DEFAULT_OVERRIDEABLE_FIELDS];
var DATETIME_CORE = {
	name: "datetime",
	title: "Datetime",
	type: null,
	jsonType: "string"
};
var DateTimeType = {
	get() {
		return DATETIME_CORE;
	},
	extend(subTypeDef) {
		const ownProps = {
			...subTypeDef,
			preview: primitivePreview
		}, parsed = Object.assign((0, import_pick.default)(DATETIME_CORE, OVERRIDABLE_FIELDS$a), ownProps, { type: DATETIME_CORE });
		return hiddenGetter(parsed, OWN_PROPS_NAME, ownProps), subtype(parsed);
		function subtype(parent) {
			return {
				get() {
					return parent;
				},
				extend: (extensionDef) => {
					const subOwnProps = (0, import_pick.default)(extensionDef, OVERRIDABLE_FIELDS$a), current = Object.assign({}, parent, subOwnProps, { type: parent });
					return hiddenGetter(current, OWN_PROPS_NAME, subOwnProps), subtype(current);
				}
			};
		}
	}
};
var CANDIDATES = [
	"title",
	"name",
	"label",
	"heading",
	"header",
	"caption",
	"description"
];
var PRIMITIVES = [
	"string",
	"boolean",
	"number"
];
var isPrimitive = (field) => PRIMITIVES.includes(field.type);
function guessOrderingConfig(objectTypeDef) {
	let candidates = CANDIDATES.filter((candidate) => objectTypeDef.fields.some((field) => isPrimitive(field) && field.name === candidate));
	return candidates.length === 0 && (candidates = objectTypeDef.fields.filter(isPrimitive).map((field) => field.name)), candidates.map((name) => ({
		name,
		i18n: { title: {
			key: `default-orderings.${name}`,
			ns: "studio"
		} },
		title: (0, import_capitalize.default)((0, import_startCase.default)(name)),
		by: [{
			field: name,
			direction: "asc"
		}]
	}));
}
function normalizeSearchConfigs(configs) {
	if (!Array.isArray(configs)) throw new Error("The search config of a document type must be an array of search config objects");
	return configs.map((conf) => {
		if (conf === "defaults") return conf;
		if (!(0, import_isPlainObject.default)(conf)) throw new Error("Search config must be an object of {path: string, weight: number}");
		return {
			weight: "weight" in conf ? conf.weight : 1,
			path: (0, import_toPath.default)(conf.path),
			mapWith: typeof conf.mapWith == "string" ? conf.mapWith : void 0
		};
	});
}
var OVERRIDABLE_FIELDS$9 = [
	...DEFAULT_OVERRIDEABLE_FIELDS,
	"orderings",
	"__experimental_search",
	"blockEditor",
	"icon"
];
var ObjectType = {
	get() {
		return {
			name: "object",
			title: "Object",
			type: null,
			jsonType: "object"
		};
	},
	extend(rawSubTypeDef, createMemberType) {
		const subTypeDef = {
			fields: [],
			...rawSubTypeDef
		}, options = { ...subTypeDef.options }, ownProps = {
			...subTypeDef,
			title: subTypeDef.title || (subTypeDef.name ? (0, import_startCase.default)(subTypeDef.name) : "Object"),
			options,
			orderings: subTypeDef.orderings || guessOrderingConfig(subTypeDef),
			fields: subTypeDef.fields.map((fieldDef) => createMemberType.cachedObjectField(fieldDef))
		}, parsed = Object.assign((0, import_pick.default)(this.get(), OVERRIDABLE_FIELDS$9), ownProps, { type: this.get() });
		return lazyGetter(parsed, "fieldsets", () => createFieldsets(subTypeDef, parsed.fields)), lazyGetter(parsed, "groups", () => createFieldsGroups(subTypeDef, parsed.fields)), lazyGetter(parsed, "preview", createPreviewGetter(subTypeDef)), lazyGetter(parsed, OWN_PROPS_NAME, () => ({
			...ownProps,
			preview: parsed.preview
		}), {
			enumerable: !1,
			writable: !1
		}), lazyGetter(parsed, "__experimental_search", () => {
			const userProvidedSearchConfig = subTypeDef.__experimental_search ? normalizeSearchConfigs(subTypeDef.__experimental_search) : null;
			return userProvidedSearchConfig ? userProvidedSearchConfig.map((entry) => entry === "defaults" ? normalizeSearchConfigs(subTypeDef) : entry) : resolveSearchConfig(parsed);
		}, { enumerable: !1 }), subtype(parsed);
		function subtype(parent) {
			return {
				get() {
					return parent;
				},
				extend: (extensionDef) => {
					if (extensionDef.fields) throw new Error("Cannot override `fields` of subtypes of \"object\"");
					const subOwnProps = (0, import_pick.default)(extensionDef, OVERRIDABLE_FIELDS$9);
					subOwnProps.title = extensionDef.title || subTypeDef.title || (subTypeDef.name ? (0, import_startCase.default)(subTypeDef.name) : "Object");
					const current = Object.assign({}, parent, (0, import_pick.default)(extensionDef, OVERRIDABLE_FIELDS$9), { type: parent });
					return lazyGetter(current, "__experimental_search", () => parent.__experimental_search), hiddenGetter(current, OWN_PROPS_NAME, subOwnProps), subtype(current);
				}
			};
		}
	}
};
function createFieldsets(typeDef, fields) {
	const fieldsetsByName = {};
	for (const fieldset of typeDef.fieldsets || []) {
		if (fieldsetsByName[fieldset.name]) throw new Error(`Duplicate fieldset name "${fieldset.name}" found for type '${typeDef.title ? typeDef.title : (0, import_startCase.default)(typeDef.name)}'`);
		fieldsetsByName[fieldset.name] = {
			title: (0, import_startCase.default)(fieldset.name),
			...fieldset,
			fields: []
		};
	}
	const fieldsets = /* @__PURE__ */ new Set();
	for (const field of fields) {
		if (!field.fieldset) {
			fieldsets.add({
				single: !0,
				field
			});
			continue;
		}
		const fieldset = fieldsetsByName[field.fieldset];
		if (!fieldset) throw new Error(`Fieldset '${field.fieldset}' is not defined in schema for type '${typeDef.name}'`);
		fieldset.fields.push(field), fieldsets.add(fieldset);
	}
	return Array.from(fieldsets);
}
function createFieldsGroups(typeDef, fields) {
	const groupsByName = {};
	let numDefaultGroups = 0;
	for (const group of typeDef.groups || []) {
		if (groupsByName[group.name]) throw new Error(`Duplicate group name "${group.name}" found for type '${typeDef.title ? typeDef.title : (0, import_startCase.default)(typeDef.name)}'`);
		if (groupsByName[group.name] = {
			title: (0, import_startCase.default)(group.name),
			...group,
			fields: []
		}, group.default && ++numDefaultGroups > 1) throw new Error(`More than one field group defined as default for type '${typeDef.title ? typeDef.title : (0, import_startCase.default)(typeDef.name)}' - only 1 is supported`);
	}
	return fields.forEach((field) => {
		const fieldGroupNames = (0, import_castArray.default)(field.group || []);
		fieldGroupNames.length !== 0 && fieldGroupNames.forEach((fieldGroupName) => {
			const currentGroup = groupsByName[fieldGroupName];
			if (!currentGroup) throw new Error(`Field group '${fieldGroupName}' is not defined in schema for type '${typeDef.title ? typeDef.name : (0, import_startCase.default)(typeDef.name)}'`);
			currentGroup.fields.push(field);
		});
	}), (0, import_flatMap.default)(groupsByName).filter((group) => group.fields.length > 0 || group.name === "all-fields");
}
var DOCUMENT_CORE = {
	name: "document",
	title: "Document",
	type: null,
	jsonType: "object"
};
var DocumentType = {
	get() {
		return DOCUMENT_CORE;
	},
	extend: ObjectType.extend
};
var OVERRIDABLE_FIELDS$8 = [...DEFAULT_OVERRIDEABLE_FIELDS];
var EMAIL_CORE = {
	name: "email",
	title: "Email",
	type: null,
	jsonType: "string"
};
lazyGetter(EMAIL_CORE, OWN_PROPS_NAME, () => ({
	...EMAIL_CORE,
	validation: (Rule3) => Rule3.email()
}), { enumerable: !1 });
var EmailType = {
	get() {
		return EMAIL_CORE;
	},
	extend(subTypeDef) {
		const ownProps = {
			...subTypeDef,
			preview: primitivePreview
		}, parsed = Object.assign((0, import_pick.default)(EMAIL_CORE, OVERRIDABLE_FIELDS$8), ownProps, { type: EMAIL_CORE });
		return hiddenGetter(parsed, OWN_PROPS_NAME, ownProps), subtype(parsed);
		function subtype(parent) {
			return {
				get() {
					return parent;
				},
				extend: (extensionDef) => {
					const subOwnProps = (0, import_pick.default)(extensionDef, OVERRIDABLE_FIELDS$8), current = Object.assign({}, parent, subOwnProps, { type: parent });
					return hiddenGetter(current, OWN_PROPS_NAME, subOwnProps), subtype(current);
				}
			};
		}
	}
};
var ASSET_FIELD$1 = {
	name: "asset",
	type: "reference",
	to: { type: "sanity.fileAsset" }
};
var MEDIA_LIBRARY_ASSET_FIELD$1 = {
	name: "media",
	type: "globalDocumentReference",
	hidden: !0,
	to: [{ type: "sanity.asset" }]
};
var OVERRIDABLE_FIELDS$7 = [...DEFAULT_OVERRIDEABLE_FIELDS];
var FILE_CORE = {
	name: "file",
	title: "File",
	type: null,
	jsonType: "object"
};
var DEFAULT_OPTIONS$1 = { accept: "" };
var FileType = {
	get() {
		return FILE_CORE;
	},
	extend(rawSubTypeDef, createMemberType) {
		const options = { ...rawSubTypeDef.options || DEFAULT_OPTIONS$1 }, fields = [
			ASSET_FIELD$1,
			MEDIA_LIBRARY_ASSET_FIELD$1,
			...rawSubTypeDef.fields || []
		], subTypeDef = {
			...rawSubTypeDef,
			fields
		}, parsed = Object.assign((0, import_pick.default)(FILE_CORE, OVERRIDABLE_FIELDS$7), subTypeDef, {
			type: FILE_CORE,
			title: subTypeDef.title || (subTypeDef.name ? (0, import_startCase.default)(subTypeDef.name) : FILE_CORE.title),
			options,
			fields: subTypeDef.fields.map((fieldDef) => {
				const { name, fieldset, ...rest } = fieldDef;
				return lazyGetter({
					name,
					fieldset,
					isCustomized: !!rawSubTypeDef.fields
				}, "type", () => createMemberType({
					...rest,
					title: fieldDef.title || (0, import_startCase.default)(name)
				}));
			})
		});
		return lazyGetter(parsed, "fieldsets", () => createFieldsets(subTypeDef, parsed.fields)), lazyGetter(parsed, "preview", createPreviewGetter(Object.assign({}, subTypeDef, { fields }))), lazyGetter(parsed, OWN_PROPS_NAME, () => ({
			...subTypeDef,
			options,
			fields: parsed.fields,
			title: parsed.title,
			fieldsets: parsed.fieldsets,
			preview: parsed.preview
		}), {
			enumerable: !1,
			writable: !1
		}), subtype(parsed);
		function subtype(parent) {
			return {
				get() {
					return parent;
				},
				extend: (extensionDef) => {
					if (extensionDef.fields) throw new Error("Cannot override `fields` of subtypes of \"file\"");
					const ownProps = (0, import_pick.default)(extensionDef, OVERRIDABLE_FIELDS$7), current = Object.assign({}, parent, ownProps, { type: parent });
					return hiddenGetter(current, OWN_PROPS_NAME, ownProps), subtype(current);
				}
			};
		}
	}
};
var REFERENCE_FIELDS$1 = [{
	name: "_ref",
	title: "Referenced document ID",
	type: "string"
}, {
	name: "_weak",
	title: "Weak reference",
	type: "boolean"
}];
var OVERRIDABLE_FIELDS$6 = [...DEFAULT_OVERRIDEABLE_FIELDS];
var GLOBAL_DOCUMENT_REFERENCE_CORE = {
	name: "globalDocumentReference",
	title: "Global Document Reference",
	type: null,
	jsonType: "object"
};
function humanize$1(arr, conjunction) {
	const len = arr.length;
	if (len === 1) return arr[0];
	const first = arr.slice(0, len - 1), last = arr[len - 1];
	return `${first.join(", ")} ${conjunction} ${last}`;
}
function buildTitle$1(type) {
	return !type.to || type.to.length === 0 ? "Global Document Reference" : `Global Document Reference to ${humanize$1((0, import_arrify.default)(type.to).map((toType) => toType.title), "or").toLowerCase()}`;
}
var GlobalDocumentReferenceType = {
	get() {
		return GLOBAL_DOCUMENT_REFERENCE_CORE;
	},
	extend(subTypeDef, createMemberType) {
		if (!subTypeDef.to) throw new Error(`Missing "to" field in global document reference definition. Check the type ${subTypeDef.name}`);
		const parsed = Object.assign((0, import_pick.default)(GLOBAL_DOCUMENT_REFERENCE_CORE, OVERRIDABLE_FIELDS$6), subTypeDef, { type: GLOBAL_DOCUMENT_REFERENCE_CORE });
		return lazyGetter(parsed, "fields", () => REFERENCE_FIELDS$1.map((fieldDef) => createMemberType.cachedField(fieldDef))), lazyGetter(parsed, "to", () => (0, import_arrify.default)(subTypeDef.to).map((toType) => ({ ...toType }))), lazyGetter(parsed, "title", () => subTypeDef.title || buildTitle$1(parsed)), lazyGetter(parsed, OWN_PROPS_NAME, () => ({
			...subTypeDef,
			fields: parsed.fields,
			to: parsed.to,
			title: parsed.title
		}), {
			enumerable: !1,
			writable: !1
		}), subtype(parsed);
		function subtype(parent) {
			return {
				get() {
					return parent;
				},
				extend: (extensionDef) => {
					if (extensionDef.of) throw new Error("Cannot override `of` of subtypes of \"globalDocumentReference\"");
					const ownProps = (0, import_pick.default)(extensionDef, OVERRIDABLE_FIELDS$6), current = Object.assign({}, parent, ownProps, { type: parent });
					return hiddenGetter(current, OWN_PROPS_NAME, ownProps), subtype(current);
				}
			};
		}
	}
};
var ASSET_FIELD = {
	name: "asset",
	type: "reference",
	to: [{ type: "sanity.imageAsset" }]
};
var HOTSPOT_FIELD = {
	name: "hotspot",
	type: "sanity.imageHotspot"
};
var CROP_FIELD = {
	name: "crop",
	type: "sanity.imageCrop"
};
var MEDIA_LIBRARY_ASSET_FIELD = {
	name: "media",
	type: "globalDocumentReference",
	hidden: !0,
	to: [{ type: "sanity.asset" }]
};
var OVERRIDABLE_FIELDS$5 = [...DEFAULT_OVERRIDEABLE_FIELDS];
var IMAGE_CORE = {
	name: "image",
	title: "Image",
	type: null,
	jsonType: "object"
};
var DEFAULT_OPTIONS = {};
var ImageType = {
	get() {
		return IMAGE_CORE;
	},
	extend(rawSubTypeDef, createMemberType) {
		const options = { ...rawSubTypeDef.options || DEFAULT_OPTIONS };
		let hotspotFields = [HOTSPOT_FIELD, CROP_FIELD];
		options.hotspot || (hotspotFields = hotspotFields.map((field) => ({
			...field,
			hidden: !0
		})));
		const fields = [
			ASSET_FIELD,
			MEDIA_LIBRARY_ASSET_FIELD,
			...hotspotFields,
			...rawSubTypeDef.fields || []
		], subTypeDef = {
			...rawSubTypeDef,
			fields
		}, parsed = Object.assign((0, import_pick.default)(this.get(), OVERRIDABLE_FIELDS$5), subTypeDef, {
			type: IMAGE_CORE,
			title: subTypeDef.title || (subTypeDef.name ? (0, import_startCase.default)(subTypeDef.name) : IMAGE_CORE.title),
			options,
			fields: subTypeDef.fields.map((fieldDef) => {
				const { name, fieldset, ...rest } = fieldDef;
				return lazyGetter({
					name,
					fieldset,
					isCustomized: !!rawSubTypeDef.fields
				}, "type", () => createMemberType({
					...rest,
					title: fieldDef.title || (0, import_startCase.default)(name)
				}));
			})
		});
		return lazyGetter(parsed, "fieldsets", () => createFieldsets(subTypeDef, parsed.fields)), lazyGetter(parsed, "preview", createPreviewGetter(Object.assign({}, subTypeDef, { fields }))), lazyGetter(parsed, OWN_PROPS_NAME, () => ({
			...subTypeDef,
			options,
			fields: parsed.fields,
			title: parsed.title,
			fieldsets: parsed.fieldsets,
			preview: parsed.preview
		}), {
			enumerable: !1,
			writable: !1
		}), subtype(parsed);
		function subtype(parent) {
			return {
				get() {
					return parent;
				},
				extend: (extensionDef) => {
					if (extensionDef.fields) throw new Error("Cannot override `fields` of subtypes of \"image\"");
					const ownProps = (0, import_pick.default)(extensionDef, OVERRIDABLE_FIELDS$5), current = Object.assign({}, parent, ownProps, { type: parent });
					return hiddenGetter(current, OWN_PROPS_NAME, ownProps), subtype(current);
				}
			};
		}
	}
};
var OVERRIDABLE_FIELDS$4 = [...DEFAULT_OVERRIDEABLE_FIELDS];
var NUMBER_CORE = {
	name: "number",
	title: "Number",
	type: null,
	jsonType: "number"
};
var NumberType = {
	get() {
		return NUMBER_CORE;
	},
	extend(subTypeDef) {
		const ownProps = {
			...subTypeDef,
			preview: primitivePreview
		}, parsed = Object.assign((0, import_pick.default)(NUMBER_CORE, OVERRIDABLE_FIELDS$4), ownProps, { type: NUMBER_CORE });
		return hiddenGetter(parsed, OWN_PROPS_NAME, ownProps), subtype(parsed);
		function subtype(parent) {
			return {
				get() {
					return parent;
				},
				extend: (extensionDef) => {
					const subOwnProps = (0, import_pick.default)(extensionDef, OVERRIDABLE_FIELDS$4), current = Object.assign({}, parent, subOwnProps, { type: parent });
					return hiddenGetter(current, OWN_PROPS_NAME, subOwnProps), subtype(current);
				}
			};
		}
	}
};
var REFERENCE_FIELDS = [{
	name: "_ref",
	title: "Referenced document ID",
	type: "string"
}, {
	name: "_weak",
	title: "Weak reference",
	type: "boolean"
}];
var OVERRIDABLE_FIELDS$3 = [...DEFAULT_OVERRIDEABLE_FIELDS];
var REFERENCE_CORE = {
	name: "reference",
	title: "Reference",
	type: null,
	jsonType: "object"
};
function humanize(arr, conjunction) {
	const len = arr.length;
	if (len === 1) return arr[0];
	const first = arr.slice(0, len - 1), last = arr[len - 1];
	return `${first.join(", ")} ${conjunction} ${last}`;
}
function buildTitle(type) {
	return !type.to || type.to.length === 0 ? "Reference" : `Reference to ${humanize((0, import_arrify.default)(type.to).map((toType) => toType.title), "or").toLowerCase()}`;
}
var ReferenceType = {
	get() {
		return REFERENCE_CORE;
	},
	extend(subTypeDef, createMemberType) {
		if (!subTypeDef.to) throw new Error(`Missing "to" field in reference definition. Check the type ${subTypeDef.name}`);
		const parsed = Object.assign((0, import_pick.default)(REFERENCE_CORE, OVERRIDABLE_FIELDS$3), subTypeDef, { type: REFERENCE_CORE });
		return lazyGetter(parsed, "fields", () => REFERENCE_FIELDS.map((fieldDef) => createMemberType.cachedField(fieldDef))), lazyGetter(parsed, "fieldsets", () => createFieldsets(subTypeDef, parsed.fields)), lazyGetter(parsed, "to", () => (0, import_arrify.default)(subTypeDef.to).map((toType) => createMemberType(toType))), lazyGetter(parsed, "title", () => subTypeDef.title || buildTitle(parsed)), lazyGetter(parsed, OWN_PROPS_NAME, () => ({
			...subTypeDef,
			fields: parsed.fields,
			fieldsets: parsed.fieldsets,
			to: parsed.to,
			title: parsed.title
		}), {
			enumerable: !1,
			writable: !1
		}), subtype(parsed);
		function subtype(parent) {
			return {
				get() {
					return parent;
				},
				extend: (extensionDef) => {
					if (extensionDef.of) throw new Error("Cannot override `of` of subtypes of \"reference\"");
					const ownProps = (0, import_pick.default)(extensionDef, OVERRIDABLE_FIELDS$3), current = Object.assign({}, parent, ownProps, { type: parent });
					return hiddenGetter(current, OWN_PROPS_NAME, ownProps), subtype(current);
				}
			};
		}
	}
};
var OVERRIDABLE_FIELDS$2 = [...DEFAULT_OVERRIDEABLE_FIELDS];
var STRING_CORE = {
	name: "string",
	title: "String",
	type: null,
	jsonType: "string"
};
var StringType = {
	get() {
		return STRING_CORE;
	},
	extend(subTypeDef) {
		const ownProps = {
			...subTypeDef,
			preview: primitivePreview
		}, parsed = Object.assign((0, import_pick.default)(STRING_CORE, OVERRIDABLE_FIELDS$2), ownProps, { type: STRING_CORE });
		return hiddenGetter(parsed, OWN_PROPS_NAME, ownProps), subtype(parsed);
		function subtype(parent) {
			return {
				get() {
					return parent;
				},
				extend: (extensionDef) => {
					const subOwnProps = (0, import_pick.default)(extensionDef, OVERRIDABLE_FIELDS$2), current = Object.assign({}, parent, subOwnProps, { type: parent });
					return hiddenGetter(current, OWN_PROPS_NAME, subOwnProps), subtype(current);
				}
			};
		}
	}
};
var OVERRIDABLE_FIELDS$1 = [...DEFAULT_OVERRIDEABLE_FIELDS, "rows"];
var TEXT_CORE = {
	name: "text",
	title: "Text",
	type: null,
	jsonType: "string"
};
var TextType = {
	get() {
		return TEXT_CORE;
	},
	extend(subTypeDef) {
		const ownProps = {
			...subTypeDef,
			preview: primitivePreview
		}, parsed = Object.assign((0, import_pick.default)(TEXT_CORE, OVERRIDABLE_FIELDS$1), ownProps, { type: TEXT_CORE });
		return hiddenGetter(parsed, OWN_PROPS_NAME, ownProps), subtype(parsed);
		function subtype(parent) {
			return {
				get() {
					return parent;
				},
				extend: (extensionDef) => {
					const subOwnProps = (0, import_pick.default)(extensionDef, OVERRIDABLE_FIELDS$1), current = Object.assign({}, parent, subOwnProps, { type: parent });
					return hiddenGetter(current, OWN_PROPS_NAME, subOwnProps), subtype(current);
				}
			};
		}
	}
};
var OVERRIDABLE_FIELDS = [...DEFAULT_OVERRIDEABLE_FIELDS];
var URL_CORE = {
	name: "url",
	title: "Url",
	type: null,
	jsonType: "string"
};
var types = /* @__PURE__ */ Object.freeze({
	__proto__: null,
	any: AnyType,
	array: ArrayType,
	block: BlockType,
	boolean: BooleanType,
	crossDatasetReference: CrossDatasetReferenceType,
	date: DateType,
	datetime: DateTimeType,
	document: DocumentType,
	email: EmailType,
	file: FileType,
	globalDocumentReference: GlobalDocumentReferenceType,
	image: ImageType,
	number: NumberType,
	object: ObjectType,
	reference: ReferenceType,
	span: SpanType,
	string: StringType,
	text: TextType,
	url: {
		get() {
			return URL_CORE;
		},
		extend(subTypeDef) {
			const ownProps = {
				...subTypeDef,
				preview: primitivePreview
			}, parsed = Object.assign((0, import_pick.default)(URL_CORE, OVERRIDABLE_FIELDS), ownProps, { type: URL_CORE });
			return hiddenGetter(parsed, OWN_PROPS_NAME, ownProps), subtype(parsed);
			function subtype(parent) {
				return {
					get() {
						return parent;
					},
					extend: (extensionDef) => {
						const subOwnownProps = (0, import_pick.default)(extensionDef, OVERRIDABLE_FIELDS), current = Object.assign({}, parent, subOwnownProps, { type: parent });
						return hiddenGetter(current, OWN_PROPS_NAME, subOwnownProps), subtype(current);
					}
				};
			}
		}
	}
});
function compileRegistry(schemaDef) {
	const registry = /* @__PURE__ */ Object.create(null);
	let localTypeNames;
	schemaDef.parent ? (Object.assign(registry, schemaDef.parent._registry), localTypeNames = []) : (Object.assign(registry, types), localTypeNames = Object.keys(types));
	const defsByName = schemaDef.types.reduce((acc, def) => {
		if (acc[def.name]) throw new Error(`Duplicate type name added to schema: ${def.name}`);
		return acc[def.name] = def, acc;
	}, {}), memberCache = /* @__PURE__ */ new Map(), fieldCache = /* @__PURE__ */ new Map(), objectFieldCache = /* @__PURE__ */ new Map(), extendHelper = Object.assign(extendMember, {
		cached(def) {
			let member = memberCache.get(def);
			return member || (member = extendMember(def), memberCache.set(def, member)), member;
		},
		cachedField(fieldDef) {
			let field = fieldCache.get(fieldDef);
			if (!field) {
				const { name, ...type } = fieldDef;
				field = {
					name,
					type: extendMember(type)
				}, fieldCache.set(fieldDef, field);
			}
			return field;
		},
		cachedObjectField(fieldDef) {
			let field = objectFieldCache.get(fieldDef);
			if (!field) {
				const { name, fieldset, group, ...rest } = fieldDef;
				field = {
					name,
					group,
					fieldset
				}, lazyGetter(field, "type", () => extendMember({
					...rest,
					title: fieldDef.title || (0, import_startCase.default)(name)
				})), objectFieldCache.set(fieldDef, field);
			}
			return field;
		}
	});
	return schemaDef.types.forEach(add), {
		registry,
		localTypeNames
	};
	function ensure(typeName) {
		if (!registry[typeName]) {
			if (!defsByName[typeName]) throw new Error(`Unknown type: ${typeName}`);
			add(defsByName[typeName]);
		}
	}
	function extendMember(memberDef) {
		return ensure(memberDef.type), registry[memberDef.type].extend(memberDef, extendHelper).get();
	}
	function add(typeDef) {
		ensure(typeDef.type), !registry[typeDef.name] && (localTypeNames.push(typeDef.name), registry[typeDef.name] = registry[typeDef.type].extend(typeDef, extendMember));
	}
}
var Schema$1 = class Schema$1 {
	_original;
	_registry;
	#localTypeNames;
	static compile(schemaDef) {
		return new Schema$1(schemaDef);
	}
	constructor(schemaDef) {
		this._original = schemaDef;
		const { registry, localTypeNames } = compileRegistry(schemaDef);
		this._registry = registry, this.#localTypeNames = localTypeNames;
	}
	get name() {
		return this._original.name;
	}
	/**
	* Returns the parent schema.
	*/
	get parent() {
		return this._original.parent;
	}
	get(name) {
		return this._registry[name] && this._registry[name].get();
	}
	has(name) {
		return name in this._registry;
	}
	getTypeNames() {
		return Object.keys(this._registry);
	}
	getLocalTypeNames() {
		return this.#localTypeNames;
	}
};
var FIELD_REF = /* @__PURE__ */ Symbol("FIELD_REF");
var ruleConstraintTypes = [
	"Array",
	"Boolean",
	"Date",
	"Number",
	"Object",
	"String"
];
var Rule = class Rule2 {
	static FIELD_REF = FIELD_REF;
	static array = (def) => new Rule2(def).type("Array");
	static object = (def) => new Rule2(def).type("Object");
	static string = (def) => new Rule2(def).type("String");
	static number = (def) => new Rule2(def).type("Number");
	static boolean = (def) => new Rule2(def).type("Boolean");
	static dateTime = (def) => new Rule2(def).type("Date");
	static valueOfField = (path) => ({
		type: FIELD_REF,
		path
	});
	_type = void 0;
	_level = void 0;
	_required = void 0;
	_typeDef = void 0;
	_message = void 0;
	_rules = [];
	_fieldRules = void 0;
	constructor(typeDef) {
		this._typeDef = typeDef, this.reset();
	}
	_mergeRequired(next) {
		if (this._required === "required" || next._required === "required") return "required";
		if (this._required === "optional" || next._required === "optional") return "optional";
	}
	valueOfField = Rule2.valueOfField.bind(Rule2);
	error(message) {
		const rule = this.clone();
		return rule._level = "error", rule._message = message || void 0, rule;
	}
	warning(message) {
		const rule = this.clone();
		return rule._level = "warning", rule._message = message || void 0, rule;
	}
	info(message) {
		const rule = this.clone();
		return rule._level = "info", rule._message = message || void 0, rule;
	}
	reset() {
		return this._type = this._type || void 0, this._rules = (this._rules || []).filter((rule) => rule.flag === "type"), this._message = void 0, this._required = void 0, this._level = "error", this._fieldRules = void 0, this;
	}
	isRequired() {
		return this._required === "required";
	}
	clone() {
		const rule = new Rule2();
		return rule._type = this._type, rule._message = this._message, rule._required = this._required, rule._rules = (0, import_cloneDeep.default)(this._rules), rule._level = this._level, rule._fieldRules = this._fieldRules, rule._typeDef = this._typeDef, rule;
	}
	cloneWithRules(rules) {
		const rule = this.clone(), newRules = /* @__PURE__ */ new Set();
		return rules.forEach((curr) => {
			curr.flag === "type" && (rule._type = curr.constraint), newRules.add(curr.flag);
		}), rule._rules = rule._rules.filter((curr) => {
			const disallowDuplicate = [
				"type",
				"uri",
				"email"
			].includes(curr.flag), isDuplicate = newRules.has(curr.flag);
			return !(disallowDuplicate && isDuplicate);
		}).concat(rules), rule;
	}
	merge(rule) {
		if (this._type && rule._type && this._type !== rule._type) throw new Error("merge() failed: conflicting types");
		const newRule = this.cloneWithRules(rule._rules);
		return newRule._type = this._type || rule._type, newRule._message = this._message || rule._message, newRule._required = this._mergeRequired(rule), newRule._level = this._level === "error" ? rule._level : this._level, newRule;
	}
	type(targetType) {
		const type = `${targetType.slice(0, 1).toUpperCase()}${targetType.slice(1)}`;
		if (!ruleConstraintTypes.includes(type)) throw new Error(`Unknown type "${targetType}"`);
		const rule = this.cloneWithRules([{
			flag: "type",
			constraint: type
		}]);
		return rule._type = type, rule;
	}
	all(children) {
		return this.cloneWithRules([{
			flag: "all",
			constraint: children
		}]);
	}
	either(children) {
		return this.cloneWithRules([{
			flag: "either",
			constraint: children
		}]);
	}
	optional() {
		const rule = this.cloneWithRules([{
			flag: "presence",
			constraint: "optional"
		}]);
		return rule._required = "optional", rule;
	}
	required() {
		const rule = this.cloneWithRules([{
			flag: "presence",
			constraint: "required"
		}]);
		return rule._required = "required", rule;
	}
	custom(fn, options = {}) {
		return options.bypassConcurrencyLimit && Object.assign(fn, { bypassConcurrencyLimit: !0 }), this.cloneWithRules([{
			flag: "custom",
			constraint: fn
		}]);
	}
	min(len) {
		return this.cloneWithRules([{
			flag: "min",
			constraint: len
		}]);
	}
	max(len) {
		return this.cloneWithRules([{
			flag: "max",
			constraint: len
		}]);
	}
	length(len) {
		return this.cloneWithRules([{
			flag: "length",
			constraint: len
		}]);
	}
	valid(value) {
		const values = Array.isArray(value) ? value : [value];
		return this.cloneWithRules([{
			flag: "valid",
			constraint: values
		}]);
	}
	integer() {
		return this.cloneWithRules([{ flag: "integer" }]);
	}
	precision(limit) {
		return this.cloneWithRules([{
			flag: "precision",
			constraint: limit
		}]);
	}
	positive() {
		return this.cloneWithRules([{
			flag: "min",
			constraint: 0
		}]);
	}
	negative() {
		return this.cloneWithRules([{
			flag: "lessThan",
			constraint: 0
		}]);
	}
	greaterThan(num) {
		return this.cloneWithRules([{
			flag: "greaterThan",
			constraint: num
		}]);
	}
	lessThan(num) {
		return this.cloneWithRules([{
			flag: "lessThan",
			constraint: num
		}]);
	}
	uppercase() {
		return this.cloneWithRules([{
			flag: "stringCasing",
			constraint: "uppercase"
		}]);
	}
	lowercase() {
		return this.cloneWithRules([{
			flag: "stringCasing",
			constraint: "lowercase"
		}]);
	}
	regex(pattern, a, b) {
		const constraint = {
			pattern,
			name: typeof a == "string" ? a : a?.name ?? b?.name,
			invert: (typeof a == "string" ? !1 : a?.invert ?? b?.invert) || !1
		};
		return this.cloneWithRules([{
			flag: "regex",
			constraint
		}]);
	}
	email() {
		return this.cloneWithRules([{ flag: "email" }]);
	}
	uri(opts) {
		const optsScheme = opts?.scheme || ["http", "https"], schemes = Array.isArray(optsScheme) ? optsScheme : [optsScheme];
		if (!schemes.length) throw new Error("scheme must have at least 1 scheme specified");
		const constraint = { options: {
			scheme: schemes.map((scheme) => {
				if (!(scheme instanceof RegExp) && typeof scheme != "string") throw new Error("scheme must be a RegExp or a String");
				return typeof scheme == "string" ? new RegExp(`^${escapeRegex(scheme)}$`) : scheme;
			}),
			allowRelative: opts?.allowRelative || !1,
			relativeOnly: opts?.relativeOnly || !1,
			allowCredentials: opts?.allowCredentials || !1
		} };
		return this.cloneWithRules([{
			flag: "uri",
			constraint
		}]);
	}
	unique() {
		return this.cloneWithRules([{ flag: "unique" }]);
	}
	reference() {
		return this.cloneWithRules([{ flag: "reference" }]);
	}
	fields(rules) {
		if (this._type !== "Object") throw new Error("fields() can only be called on an object type");
		const rule = this.cloneWithRules([]);
		return rule._fieldRules = rules, rule;
	}
	assetRequired() {
		const base = getBaseType(this._typeDef);
		let assetType;
		return base && ["image", "file"].includes(base.name) ? assetType = base.name === "image" ? "image" : "file" : assetType = "asset", this.cloneWithRules([{
			flag: "assetRequired",
			constraint: { assetType }
		}]);
	}
	media(fn) {
		return this.cloneWithRules([{
			flag: "media",
			constraint: fn
		}]);
	}
	/**
	* The validate method is not implemented in the base Rule class.
	* It should be implemented by extending this class or injecting validation logic.
	*/
	async validate(value, options) {
		throw new Error("validate() method must be implemented by extending Rule class");
	}
};
function getBaseType(type) {
	return type && type.type ? getBaseType(type.type) : type;
}
function escapeRegex(string) {
	return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
//#endregion
//#region node_modules/lodash/_baseDifference.js
var require__baseDifference = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var SetCache = require__SetCache();
	var arrayIncludes = require__arrayIncludes();
	var arrayIncludesWith = require__arrayIncludesWith();
	var arrayMap = require__arrayMap();
	var baseUnary = require__baseUnary();
	var cacheHas = require__cacheHas();
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;
	/**
	* The base implementation of methods like `_.difference` without support
	* for excluding multiple arrays or iteratee shorthands.
	*
	* @private
	* @param {Array} array The array to inspect.
	* @param {Array} values The values to exclude.
	* @param {Function} [iteratee] The iteratee invoked per element.
	* @param {Function} [comparator] The comparator invoked per element.
	* @returns {Array} Returns the new array of filtered values.
	*/
	function baseDifference(array, values, iteratee, comparator) {
		var index = -1, includes = arrayIncludes, isCommon = true, length = array.length, result = [], valuesLength = values.length;
		if (!length) return result;
		if (iteratee) values = arrayMap(values, baseUnary(iteratee));
		if (comparator) {
			includes = arrayIncludesWith;
			isCommon = false;
		} else if (values.length >= LARGE_ARRAY_SIZE) {
			includes = cacheHas;
			isCommon = false;
			values = new SetCache(values);
		}
		outer: while (++index < length) {
			var value = array[index], computed = iteratee == null ? value : iteratee(value);
			value = comparator || value !== 0 ? value : 0;
			if (isCommon && computed === computed) {
				var valuesIndex = valuesLength;
				while (valuesIndex--) if (values[valuesIndex] === computed) continue outer;
				result.push(value);
			} else if (!includes(values, computed, comparator)) result.push(value);
		}
		return result;
	}
	module.exports = baseDifference;
}));
//#endregion
//#region node_modules/lodash/isArrayLikeObject.js
var require_isArrayLikeObject = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isArrayLike = require_isArrayLike();
	var isObjectLike = require_isObjectLike();
	/**
	* This method is like `_.isArrayLike` except that it also checks if `value`
	* is an object.
	*
	* @static
	* @memberOf _
	* @since 4.0.0
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is an array-like object,
	*  else `false`.
	* @example
	*
	* _.isArrayLikeObject([1, 2, 3]);
	* // => true
	*
	* _.isArrayLikeObject(document.body.children);
	* // => true
	*
	* _.isArrayLikeObject('abc');
	* // => false
	*
	* _.isArrayLikeObject(_.noop);
	* // => false
	*/
	function isArrayLikeObject(value) {
		return isObjectLike(value) && isArrayLike(value);
	}
	module.exports = isArrayLikeObject;
}));
//#endregion
//#region node_modules/lodash/difference.js
var require_difference = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseDifference = require__baseDifference();
	var baseFlatten = require__baseFlatten();
	var baseRest = require__baseRest();
	var isArrayLikeObject = require_isArrayLikeObject();
	module.exports = baseRest(function(array, values) {
		return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true)) : [];
	});
}));
//#endregion
//#region node_modules/lodash/uniq.js
var require_uniq = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseUniq = require__baseUniq();
	/**
	* Creates a duplicate-free version of an array, using
	* [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	* for equality comparisons, in which only the first occurrence of each element
	* is kept. The order of result values is determined by the order they occur
	* in the array.
	*
	* @static
	* @memberOf _
	* @since 0.1.0
	* @category Array
	* @param {Array} array The array to inspect.
	* @returns {Array} Returns the new duplicate free array.
	* @example
	*
	* _.uniq([2, 1, 2]);
	* // => [2, 1]
	*/
	function uniq(array) {
		return array && array.length ? baseUniq(array) : [];
	}
	module.exports = uniq;
}));
//#endregion
//#region node_modules/humanize-list/index.js
var require_humanize_list = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = function humanizeList(list, options) {
		if (!Array.isArray(list)) throw new TypeError("humanize-list expected an array");
		options = options || {};
		options.conjunction = options.conjunction || "and";
		var listLength = list.length;
		if (listLength === 1) return list[0];
		if (options.skipConjunction) return list.join(", ");
		var humanizedList = "";
		for (var i = 0; i < listLength; i++) {
			if (i === listLength - 1) {
				if (options.oxfordComma) humanizedList += ",";
				humanizedList += " " + options.conjunction + " ";
			} else if (i !== 0) humanizedList += ", ";
			humanizedList += list[i];
		}
		return humanizedList;
	};
}));
//#endregion
//#region node_modules/lodash/partition.js
var require_partition = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require__createAggregator()(function(result, value, key) {
		result[key ? 0 : 1].push(value);
	}, function() {
		return [[], []];
	});
}));
//#endregion
//#region node_modules/leven/index.js
var require_leven = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var array = [];
	var charCodeCache = [];
	var leven = (left, right) => {
		if (left === right) return 0;
		const swap = left;
		if (left.length > right.length) {
			left = right;
			right = swap;
		}
		let leftLength = left.length;
		let rightLength = right.length;
		while (leftLength > 0 && left.charCodeAt(~-leftLength) === right.charCodeAt(~-rightLength)) {
			leftLength--;
			rightLength--;
		}
		let start = 0;
		while (start < leftLength && left.charCodeAt(start) === right.charCodeAt(start)) start++;
		leftLength -= start;
		rightLength -= start;
		if (leftLength === 0) return rightLength;
		let bCharCode;
		let result;
		let temp;
		let temp2;
		let i = 0;
		let j = 0;
		while (i < leftLength) {
			charCodeCache[i] = left.charCodeAt(start + i);
			array[i] = ++i;
		}
		while (j < rightLength) {
			bCharCode = right.charCodeAt(start + j);
			temp = j++;
			result = j;
			for (i = 0; i < leftLength; i++) {
				temp2 = bCharCode === charCodeCache[i] ? temp : temp + 1;
				temp = array[i];
				result = array[i] = temp > result ? temp2 > result ? result + 1 : temp2 : temp2 > temp ? temp + 1 : temp2;
			}
		}
		return result;
	};
	module.exports = leven;
	module.exports.default = leven;
}));
//#endregion
//#region node_modules/object-inspect/util.inspect.js
var require_util_inspect = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = __require("util").inspect;
}));
//#endregion
//#region node_modules/object-inspect/index.js
var require_object_inspect = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var hasMap = typeof Map === "function" && Map.prototype;
	var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
	var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === "function" ? mapSizeDescriptor.get : null;
	var mapForEach = hasMap && Map.prototype.forEach;
	var hasSet = typeof Set === "function" && Set.prototype;
	var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
	var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === "function" ? setSizeDescriptor.get : null;
	var setForEach = hasSet && Set.prototype.forEach;
	var weakMapHas = typeof WeakMap === "function" && WeakMap.prototype ? WeakMap.prototype.has : null;
	var weakSetHas = typeof WeakSet === "function" && WeakSet.prototype ? WeakSet.prototype.has : null;
	var weakRefDeref = typeof WeakRef === "function" && WeakRef.prototype ? WeakRef.prototype.deref : null;
	var booleanValueOf = Boolean.prototype.valueOf;
	var objectToString = Object.prototype.toString;
	var functionToString = Function.prototype.toString;
	var $match = String.prototype.match;
	var $slice = String.prototype.slice;
	var $replace = String.prototype.replace;
	var $toUpperCase = String.prototype.toUpperCase;
	var $toLowerCase = String.prototype.toLowerCase;
	var $test = RegExp.prototype.test;
	var $concat = Array.prototype.concat;
	var $join = Array.prototype.join;
	var $arrSlice = Array.prototype.slice;
	var $floor = Math.floor;
	var bigIntValueOf = typeof BigInt === "function" ? BigInt.prototype.valueOf : null;
	var gOPS = Object.getOwnPropertySymbols;
	var symToString = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol.prototype.toString : null;
	var hasShammedSymbols = typeof Symbol === "function" && typeof Symbol.iterator === "object";
	var toStringTag = typeof Symbol === "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? "object" : "symbol") ? Symbol.toStringTag : null;
	var isEnumerable = Object.prototype.propertyIsEnumerable;
	var gPO = (typeof Reflect === "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(O) {
		return O.__proto__;
	} : null);
	function addNumericSeparator(num, str) {
		if (num === Infinity || num === -Infinity || num !== num || num && num > -1e3 && num < 1e3 || $test.call(/e/, str)) return str;
		var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
		if (typeof num === "number") {
			var int = num < 0 ? -$floor(-num) : $floor(num);
			if (int !== num) {
				var intStr = String(int);
				var dec = $slice.call(str, intStr.length + 1);
				return $replace.call(intStr, sepRegex, "$&_") + "." + $replace.call($replace.call(dec, /([0-9]{3})/g, "$&_"), /_$/, "");
			}
		}
		return $replace.call(str, sepRegex, "$&_");
	}
	var utilInspect = require_util_inspect();
	var inspectCustom = utilInspect.custom;
	var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;
	var quotes = {
		__proto__: null,
		"double": "\"",
		single: "'"
	};
	var quoteREs = {
		__proto__: null,
		"double": /(["\\])/g,
		single: /(['\\])/g
	};
	module.exports = function inspect_(obj, options, depth, seen) {
		var opts = options || {};
		if (has(opts, "quoteStyle") && !has(quotes, opts.quoteStyle)) throw new TypeError("option \"quoteStyle\" must be \"single\" or \"double\"");
		if (has(opts, "maxStringLength") && (typeof opts.maxStringLength === "number" ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) throw new TypeError("option \"maxStringLength\", if provided, must be a positive integer, Infinity, or `null`");
		var customInspect = has(opts, "customInspect") ? opts.customInspect : true;
		if (typeof customInspect !== "boolean" && customInspect !== "symbol") throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
		if (has(opts, "indent") && opts.indent !== null && opts.indent !== "	" && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) throw new TypeError("option \"indent\" must be \"\\t\", an integer > 0, or `null`");
		if (has(opts, "numericSeparator") && typeof opts.numericSeparator !== "boolean") throw new TypeError("option \"numericSeparator\", if provided, must be `true` or `false`");
		var numericSeparator = opts.numericSeparator;
		if (typeof obj === "undefined") return "undefined";
		if (obj === null) return "null";
		if (typeof obj === "boolean") return obj ? "true" : "false";
		if (typeof obj === "string") return inspectString(obj, opts);
		if (typeof obj === "number") {
			if (obj === 0) return Infinity / obj > 0 ? "0" : "-0";
			var str = String(obj);
			return numericSeparator ? addNumericSeparator(obj, str) : str;
		}
		if (typeof obj === "bigint") {
			var bigIntStr = String(obj) + "n";
			return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
		}
		var maxDepth = typeof opts.depth === "undefined" ? 5 : opts.depth;
		if (typeof depth === "undefined") depth = 0;
		if (depth >= maxDepth && maxDepth > 0 && typeof obj === "object") return isArray(obj) ? "[Array]" : "[Object]";
		var indent = getIndent(opts, depth);
		if (typeof seen === "undefined") seen = [];
		else if (indexOf(seen, obj) >= 0) return "[Circular]";
		function inspect(value, from, noIndent) {
			if (from) {
				seen = $arrSlice.call(seen);
				seen.push(from);
			}
			if (noIndent) {
				var newOpts = { depth: opts.depth };
				if (has(opts, "quoteStyle")) newOpts.quoteStyle = opts.quoteStyle;
				return inspect_(value, newOpts, depth + 1, seen);
			}
			return inspect_(value, opts, depth + 1, seen);
		}
		if (typeof obj === "function" && !isRegExp(obj)) {
			var name = nameOf(obj);
			var keys = arrObjKeys(obj, inspect);
			return "[Function" + (name ? ": " + name : " (anonymous)") + "]" + (keys.length > 0 ? " { " + $join.call(keys, ", ") + " }" : "");
		}
		if (isSymbol(obj)) {
			var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, "$1") : symToString.call(obj);
			return typeof obj === "object" && !hasShammedSymbols ? markBoxed(symString) : symString;
		}
		if (isElement(obj)) {
			var s = "<" + $toLowerCase.call(String(obj.nodeName));
			var attrs = obj.attributes || [];
			for (var i = 0; i < attrs.length; i++) s += " " + attrs[i].name + "=" + wrapQuotes(quote(attrs[i].value), "double", opts);
			s += ">";
			if (obj.childNodes && obj.childNodes.length) s += "...";
			s += "</" + $toLowerCase.call(String(obj.nodeName)) + ">";
			return s;
		}
		if (isArray(obj)) {
			if (obj.length === 0) return "[]";
			var xs = arrObjKeys(obj, inspect);
			if (indent && !singleLineValues(xs)) return "[" + indentedJoin(xs, indent) + "]";
			return "[ " + $join.call(xs, ", ") + " ]";
		}
		if (isError(obj)) {
			var parts = arrObjKeys(obj, inspect);
			if (!("cause" in Error.prototype) && "cause" in obj && !isEnumerable.call(obj, "cause")) return "{ [" + String(obj) + "] " + $join.call($concat.call("[cause]: " + inspect(obj.cause), parts), ", ") + " }";
			if (parts.length === 0) return "[" + String(obj) + "]";
			return "{ [" + String(obj) + "] " + $join.call(parts, ", ") + " }";
		}
		if (typeof obj === "object" && customInspect) {
			if (inspectSymbol && typeof obj[inspectSymbol] === "function" && utilInspect) return utilInspect(obj, { depth: maxDepth - depth });
			else if (customInspect !== "symbol" && typeof obj.inspect === "function") return obj.inspect();
		}
		if (isMap(obj)) {
			var mapParts = [];
			if (mapForEach) mapForEach.call(obj, function(value, key) {
				mapParts.push(inspect(key, obj, true) + " => " + inspect(value, obj));
			});
			return collectionOf("Map", mapSize.call(obj), mapParts, indent);
		}
		if (isSet(obj)) {
			var setParts = [];
			if (setForEach) setForEach.call(obj, function(value) {
				setParts.push(inspect(value, obj));
			});
			return collectionOf("Set", setSize.call(obj), setParts, indent);
		}
		if (isWeakMap(obj)) return weakCollectionOf("WeakMap");
		if (isWeakSet(obj)) return weakCollectionOf("WeakSet");
		if (isWeakRef(obj)) return weakCollectionOf("WeakRef");
		if (isNumber(obj)) return markBoxed(inspect(Number(obj)));
		if (isBigInt(obj)) return markBoxed(inspect(bigIntValueOf.call(obj)));
		if (isBoolean(obj)) return markBoxed(booleanValueOf.call(obj));
		if (isString(obj)) return markBoxed(inspect(String(obj)));
		if (typeof window !== "undefined" && obj === window) return "{ [object Window] }";
		if (typeof globalThis !== "undefined" && obj === globalThis || typeof global !== "undefined" && obj === global) return "{ [object globalThis] }";
		if (!isDate(obj) && !isRegExp(obj)) {
			var ys = arrObjKeys(obj, inspect);
			var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
			var protoTag = obj instanceof Object ? "" : "null prototype";
			var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? "Object" : "";
			var tag = (isPlainObject || typeof obj.constructor !== "function" ? "" : obj.constructor.name ? obj.constructor.name + " " : "") + (stringTag || protoTag ? "[" + $join.call($concat.call([], stringTag || [], protoTag || []), ": ") + "] " : "");
			if (ys.length === 0) return tag + "{}";
			if (indent) return tag + "{" + indentedJoin(ys, indent) + "}";
			return tag + "{ " + $join.call(ys, ", ") + " }";
		}
		return String(obj);
	};
	function wrapQuotes(s, defaultStyle, opts) {
		var quoteChar = quotes[opts.quoteStyle || defaultStyle];
		return quoteChar + s + quoteChar;
	}
	function quote(s) {
		return $replace.call(String(s), /"/g, "&quot;");
	}
	function canTrustToString(obj) {
		return !toStringTag || !(typeof obj === "object" && (toStringTag in obj || typeof obj[toStringTag] !== "undefined"));
	}
	function isArray(obj) {
		return toStr(obj) === "[object Array]" && canTrustToString(obj);
	}
	function isDate(obj) {
		return toStr(obj) === "[object Date]" && canTrustToString(obj);
	}
	function isRegExp(obj) {
		return toStr(obj) === "[object RegExp]" && canTrustToString(obj);
	}
	function isError(obj) {
		return toStr(obj) === "[object Error]" && canTrustToString(obj);
	}
	function isString(obj) {
		return toStr(obj) === "[object String]" && canTrustToString(obj);
	}
	function isNumber(obj) {
		return toStr(obj) === "[object Number]" && canTrustToString(obj);
	}
	function isBoolean(obj) {
		return toStr(obj) === "[object Boolean]" && canTrustToString(obj);
	}
	function isSymbol(obj) {
		if (hasShammedSymbols) return obj && typeof obj === "object" && obj instanceof Symbol;
		if (typeof obj === "symbol") return true;
		if (!obj || typeof obj !== "object" || !symToString) return false;
		try {
			symToString.call(obj);
			return true;
		} catch (e) {}
		return false;
	}
	function isBigInt(obj) {
		if (!obj || typeof obj !== "object" || !bigIntValueOf) return false;
		try {
			bigIntValueOf.call(obj);
			return true;
		} catch (e) {}
		return false;
	}
	var hasOwn = Object.prototype.hasOwnProperty || function(key) {
		return key in this;
	};
	function has(obj, key) {
		return hasOwn.call(obj, key);
	}
	function toStr(obj) {
		return objectToString.call(obj);
	}
	function nameOf(f) {
		if (f.name) return f.name;
		var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
		if (m) return m[1];
		return null;
	}
	function indexOf(xs, x) {
		if (xs.indexOf) return xs.indexOf(x);
		for (var i = 0, l = xs.length; i < l; i++) if (xs[i] === x) return i;
		return -1;
	}
	function isMap(x) {
		if (!mapSize || !x || typeof x !== "object") return false;
		try {
			mapSize.call(x);
			try {
				setSize.call(x);
			} catch (s) {
				return true;
			}
			return x instanceof Map;
		} catch (e) {}
		return false;
	}
	function isWeakMap(x) {
		if (!weakMapHas || !x || typeof x !== "object") return false;
		try {
			weakMapHas.call(x, weakMapHas);
			try {
				weakSetHas.call(x, weakSetHas);
			} catch (s) {
				return true;
			}
			return x instanceof WeakMap;
		} catch (e) {}
		return false;
	}
	function isWeakRef(x) {
		if (!weakRefDeref || !x || typeof x !== "object") return false;
		try {
			weakRefDeref.call(x);
			return true;
		} catch (e) {}
		return false;
	}
	function isSet(x) {
		if (!setSize || !x || typeof x !== "object") return false;
		try {
			setSize.call(x);
			try {
				mapSize.call(x);
			} catch (m) {
				return true;
			}
			return x instanceof Set;
		} catch (e) {}
		return false;
	}
	function isWeakSet(x) {
		if (!weakSetHas || !x || typeof x !== "object") return false;
		try {
			weakSetHas.call(x, weakSetHas);
			try {
				weakMapHas.call(x, weakMapHas);
			} catch (s) {
				return true;
			}
			return x instanceof WeakSet;
		} catch (e) {}
		return false;
	}
	function isElement(x) {
		if (!x || typeof x !== "object") return false;
		if (typeof HTMLElement !== "undefined" && x instanceof HTMLElement) return true;
		return typeof x.nodeName === "string" && typeof x.getAttribute === "function";
	}
	function inspectString(str, opts) {
		if (str.length > opts.maxStringLength) {
			var remaining = str.length - opts.maxStringLength;
			var trailer = "... " + remaining + " more character" + (remaining > 1 ? "s" : "");
			return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
		}
		var quoteRE = quoteREs[opts.quoteStyle || "single"];
		quoteRE.lastIndex = 0;
		return wrapQuotes($replace.call($replace.call(str, quoteRE, "\\$1"), /[\x00-\x1f]/g, lowbyte), "single", opts);
	}
	function lowbyte(c) {
		var n = c.charCodeAt(0);
		var x = {
			8: "b",
			9: "t",
			10: "n",
			12: "f",
			13: "r"
		}[n];
		if (x) return "\\" + x;
		return "\\x" + (n < 16 ? "0" : "") + $toUpperCase.call(n.toString(16));
	}
	function markBoxed(str) {
		return "Object(" + str + ")";
	}
	function weakCollectionOf(type) {
		return type + " { ? }";
	}
	function collectionOf(type, size, entries, indent) {
		var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ", ");
		return type + " (" + size + ") {" + joinedEntries + "}";
	}
	function singleLineValues(xs) {
		for (var i = 0; i < xs.length; i++) if (indexOf(xs[i], "\n") >= 0) return false;
		return true;
	}
	function getIndent(opts, depth) {
		var baseIndent;
		if (opts.indent === "	") baseIndent = "	";
		else if (typeof opts.indent === "number" && opts.indent > 0) baseIndent = $join.call(Array(opts.indent + 1), " ");
		else return null;
		return {
			base: baseIndent,
			prev: $join.call(Array(depth + 1), baseIndent)
		};
	}
	function indentedJoin(xs, indent) {
		if (xs.length === 0) return "";
		var lineJoiner = "\n" + indent.prev + indent.base;
		return lineJoiner + $join.call(xs, "," + lineJoiner) + "\n" + indent.prev;
	}
	function arrObjKeys(obj, inspect) {
		var isArr = isArray(obj);
		var xs = [];
		if (isArr) {
			xs.length = obj.length;
			for (var i = 0; i < obj.length; i++) xs[i] = has(obj, i) ? inspect(obj[i], obj) : "";
		}
		var syms = typeof gOPS === "function" ? gOPS(obj) : [];
		var symMap;
		if (hasShammedSymbols) {
			symMap = {};
			for (var k = 0; k < syms.length; k++) symMap["$" + syms[k]] = syms[k];
		}
		for (var key in obj) {
			if (!has(obj, key)) continue;
			if (isArr && String(Number(key)) === key && key < obj.length) continue;
			if (hasShammedSymbols && symMap["$" + key] instanceof Symbol) continue;
			else if ($test.call(/[^\w$]/, key)) xs.push(inspect(key, obj) + ": " + inspect(obj[key], obj));
			else xs.push(key + ": " + inspect(obj[key], obj));
		}
		if (typeof gOPS === "function") {
			for (var j = 0; j < syms.length; j++) if (isEnumerable.call(obj, syms[j])) xs.push("[" + inspect(syms[j]) + "]: " + inspect(obj[syms[j]], obj));
		}
		return xs;
	}
}));
//#endregion
//#region node_modules/@sanity/schema/lib/_internal.js
var import_isEqual = /* @__PURE__ */ __toESM(require_isEqual(), 1);
var import_isObject = /* @__PURE__ */ __toESM(require_isObject(), 1);
var import_difference = /* @__PURE__ */ __toESM(require_difference(), 1);
var import_flatten = /* @__PURE__ */ __toESM(require_flatten(), 1);
var import_get = /* @__PURE__ */ __toESM(require_get(), 1);
var import_uniq = /* @__PURE__ */ __toESM(require_uniq(), 1);
var import_humanize_list = /* @__PURE__ */ __toESM(require_humanize_list(), 1);
var import_partition = /* @__PURE__ */ __toESM(require_partition(), 1);
var import_leven = /* @__PURE__ */ __toESM(require_leven(), 1);
var import_object_inspect = /* @__PURE__ */ __toESM(require_object_inspect(), 1);
var MAX_IDLE_WORK = 8.333333333333334;
var IdleScheduler = class {
	#durations = [];
	#lastAwake;
	constructor(durations) {
		this.#lastAwake = performance.now(), this.#durations = durations;
	}
	async map(arr, fn) {
		const result = [];
		for (const val of arr) {
			const pause = this._tryPause();
			pause && await pause, result.push(fn(val));
		}
		return result;
	}
	async forEach(arr, fn) {
		for (const val of arr) {
			const pause = this._tryPause();
			pause && await pause, fn(val);
		}
	}
	async forEachIter(iter, fn) {
		for (const val of iter) {
			const pause = this._tryPause();
			pause && await pause, fn(val);
		}
	}
	/** Should be invoked at the end to also measure the last pause. */
	end() {
		this.#durations.push(performance.now() - this.#lastAwake);
	}
	/**
	* Yields control back to the UI.
	*/
	_tryPause() {
		const elapsed = performance.now() - this.#lastAwake;
		if (!(elapsed < MAX_IDLE_WORK)) return this.#durations.push(elapsed), new Promise((resolve) => {
			const done = () => {
				this.#lastAwake = performance.now(), resolve();
			};
			typeof requestIdleCallback == "function" ? requestIdleCallback(done, { timeout: 1 }) : typeof requestAnimationFrame == "function" ? requestAnimationFrame(done) : setTimeout(done, 0);
		});
	}
};
var SYNC_SCHEDULER = {
	async map(arr, fn) {
		return arr.map(fn);
	},
	async forEach(arr, fn) {
		return arr.forEach(fn);
	},
	async forEachIter(iter, fn) {
		for (const val of iter) fn(val);
	}
};
var MAX_DEPTH_UKNOWN = 5;
var DescriptorConverter = class {
	cache = /* @__PURE__ */ new WeakMap();
	/**
	* Returns a synchronization object for a schema.
	*
	* This is automatically cached in a weak map.
	*/
	async get(schema, opts) {
		let value = this.cache.get(schema);
		if (value) return value;
		let idleScheduler;
		const scheduler = opts?.scheduler || (opts?.pauseDurations ? idleScheduler = new IdleScheduler(opts.pauseDurations) : SYNC_SCHEDULER), options = {
			fields: /* @__PURE__ */ new Map(),
			duplicateFields: /* @__PURE__ */ new Map(),
			arrayElements: /* @__PURE__ */ new Map(),
			duplicateArrayElements: /* @__PURE__ */ new Map()
		}, namedTypes = await scheduler.map(schema.getLocalTypeNames(), (name) => {
			return {
				name,
				typeDef: convertTypeDef(schema.get(name), name, options)
			};
		}), rewriteMap = /* @__PURE__ */ new Map();
		for (const [fieldDef, key] of options.duplicateFields.entries()) rewriteMap.set(fieldDef, {
			__type: "hoisted",
			key
		});
		for (const [arrayElem, key] of options.duplicateArrayElements.entries()) rewriteMap.set(arrayElem, {
			__type: "hoisted",
			key
		});
		const builder = new SetBuilder({ rewriteMap });
		return await scheduler.forEachIter(options.duplicateFields.entries(), ([fieldDef, key]) => {
			builder.addObject("sanity.schema.hoisted", {
				key,
				value: { ...fieldDef }
			});
		}), await scheduler.forEachIter(options.duplicateArrayElements.entries(), ([arrayElem, key]) => {
			builder.addObject("sanity.schema.hoisted", {
				key,
				value: { ...arrayElem }
			});
		}), await scheduler.forEach(namedTypes, (namedType) => {
			builder.addObject("sanity.schema.namedType", namedType);
		}), schema.parent && builder.addSet(await this.get(schema.parent, { scheduler })), value = builder.build("sanity.schema.registry"), this.cache.set(schema, value), idleScheduler && idleScheduler.end(), value;
	}
};
function convertCommonTypeDef(schemaType, path, opts) {
	const ownProps = "_internal_ownProps" in schemaType ? schemaType[OWN_PROPS_NAME] : schemaType;
	let fields;
	Array.isArray(ownProps.fields) && (fields = ownProps.fields.map((field) => {
		const fieldPath = `${path}.${field.name}`, value = opts.fields.get(field);
		if (value) {
			const otherPath = opts.duplicateFields.get(value);
			return (!otherPath || isLessCanonicalName(fieldPath, otherPath)) && opts.duplicateFields.set(value, fieldPath), value;
		}
		const { name, group, fieldset, type } = field, converted = {
			name,
			typeDef: convertTypeDef(type, fieldPath, opts),
			groups: arrayifyString(group),
			fieldset
		};
		return opts.fields.set(field, converted), converted;
	}));
	let fieldsets;
	Array.isArray(ownProps.fieldsets) && (fieldsets = filterStringKey("name", ownProps.fieldsets.map(({ name, title, description, group, hidden, readOnly, options }) => ({
		name,
		title: maybeString(title),
		description: maybeString(description),
		group: maybeString(group),
		hidden: conditionalTrue(hidden),
		readOnly: conditionalTrue(readOnly),
		options: convertUnknown(options)
	}))));
	let groups;
	Array.isArray(ownProps.groups) && (groups = filterStringKey("name", ownProps.groups.map(({ name, title, hidden, default: def, i18n }) => ({
		name,
		title: maybeString(title),
		hidden: conditionalTrue(hidden),
		default: maybeTrue(def),
		i18n: maybeI18n(i18n)
	}))));
	const reason = ownProps.deprecated?.reason;
	let orderings;
	return Array.isArray(ownProps.orderings) && (orderings = ownProps.orderings.map(maybeOrdering).filter((o) => o !== void 0)), {
		title: maybeString(ownProps.title),
		description: maybeStringOrJSX(ownProps.description),
		readOnly: conditionalTrue(ownProps.readOnly),
		hidden: conditionalTrue(ownProps.hidden),
		liveEdit: maybeTrue(ownProps.liveEdit),
		options: convertUnknown(ownProps.options),
		initialValue: convertUnknown(ownProps.initialValue),
		deprecated: typeof reason == "string" ? { reason } : void 0,
		placeholder: maybeString(ownProps.placeholder),
		rows: maybeNumberAsString(ownProps.rows),
		fields,
		fieldsets,
		groups,
		validation: maybeValidations(ownProps),
		orderings
	};
}
function convertTypeDef(schemaType, path, opts) {
	const common2 = convertCommonTypeDef(schemaType, path, opts);
	if (!schemaType.type) return {
		extends: null,
		jsonType: schemaType.jsonType,
		...common2
	};
	switch (schemaType.type.name) {
		case "array": return {
			extends: "array",
			of: schemaType.of.map((ofType, idx) => {
				const itemPath = `${path}.${ofType.name}`, value = opts.arrayElements.get(ofType);
				if (value) {
					const otherPath = opts.duplicateArrayElements.get(value);
					return (!otherPath || isLessCanonicalName(itemPath, otherPath)) && opts.duplicateArrayElements.set(value, itemPath), value;
				}
				const converted = {
					name: ofType.name,
					typeDef: convertTypeDef(ofType, `${path}.${ofType.name}`, opts)
				};
				return opts.arrayElements.set(ofType, converted), converted;
			}),
			...common2
		};
		case "reference":
		case "globalDocumentReference":
		case "crossDatasetReference": return {
			extends: schemaType.type.name,
			to: filterStringKey("name", schemaType.to.map((toType) => ({ name: toType.name || toType.type?.name || toType.type }))),
			...common2
		};
		default: return {
			extends: schemaType.type.name,
			...common2
		};
	}
}
function maybeString(val) {
	return typeof val == "string" ? val : void 0;
}
function maybeNumberAsString(val) {
	return typeof val == "number" ? val.toString() : void 0;
}
function maybeTrue(val) {
	return val === !0 ? !0 : void 0;
}
function conditionalTrue(val) {
	return typeof val == "function" ? FUNCTION_MARKER : maybeTrue(val);
}
function filterStringKey(key, arr) {
	return arr.filter((obj) => typeof obj[key] == "string");
}
function arrayifyString(val) {
	if (typeof val == "string") return [val];
	if (Array.isArray(val)) return val.filter((elem) => typeof elem == "string");
}
var FUNCTION_MARKER = { __type: "function" };
var UNKNOWN_MARKER = { __type: "unknown" };
var UNDEFINED_MARKER = { __type: "undefined" };
var CYCLIC_MARKER = { __type: "cyclic" };
var MAX_DEPTH_MARKER = { __type: "maxDepth" };
function convertUnknown(val, seen = /* @__PURE__ */ new Set(), maxDepth = MAX_DEPTH_UKNOWN) {
	if (maxDepth === 0) return MAX_DEPTH_MARKER;
	if (typeof val == "string" || typeof val == "boolean" || val === null || val === void 0) return val;
	if (typeof val == "number") return {
		__type: "number",
		value: val.toString()
	};
	if (typeof val == "function") return FUNCTION_MARKER;
	if (seen.has(val)) return CYCLIC_MARKER;
	if (seen.add(val), (0, import_isObject.default)(val)) {
		if (Array.isArray(val)) return val.map((elem) => {
			const res = convertUnknown(elem, seen, maxDepth - 1);
			return res === void 0 ? UNDEFINED_MARKER : res;
		});
		if ("$$typeof" in val && "type" in val && "props" in val) {
			const { type, props } = val, strType = typeof type == "function" ? type.name : type;
			return typeof strType != "string" ? void 0 : {
				__type: "jsx",
				type: strType,
				props: convertUnknown(props, seen, maxDepth - 1)
			};
		}
		let hasType = !1;
		const result = {};
		for (const [key, field] of Object.entries(val)) key === "__type" && (hasType = !0), result[key] = convertUnknown(field, seen, maxDepth - 1);
		return hasType ? {
			__type: "object",
			value: result
		} : result;
	}
	return UNKNOWN_MARKER;
}
function maybeStringOrJSX(val) {
	if (typeof val == "string") return val;
	if ((0, import_isObject.default)(val) && "$$typeof" in val && "type" in val && "props" in val) {
		const { type, props } = val, strType = typeof type == "function" ? type.name : type;
		return typeof strType != "string" ? void 0 : {
			__type: "jsx",
			type: strType,
			props: convertUnknown(props)
		};
	}
}
function maybeValidations(obj) {
	if (!(0, import_isObject.default)(obj) || !("type" in obj)) return;
	const impliedRules = [];
	switch ("options" in obj && (0, import_isObject.default)(obj.options) && "list" in obj.options && Array.isArray(obj.options.list) && impliedRules.push({
		type: "enum",
		values: obj.options.list.map((o) => convertUnknown(extractValueFromListOption(o, obj))).filter((v) => v !== void 0)
	}), obj.type) {
		case "url":
			impliedRules.push({
				type: "uri",
				allowRelative: !1
			});
			break;
		case "slug":
			impliedRules.push({ type: "custom" });
			break;
		case "reference":
			impliedRules.push({ type: "reference" });
			break;
		case "email": impliedRules.push({ type: "email" });
	}
	if (!("validation" in obj) || !obj.validation) return impliedRules.length > 0 ? [{
		level: "error",
		rules: impliedRules
	}] : void 0;
	const validations = [], rules = Array.isArray(obj.validation) ? obj.validation : [obj.validation];
	for (const rule of rules) {
		const validation = maybeValidation(rule);
		if (validation === void 0) continue;
		const rulesToAdd = impliedRules.filter((ir) => !validation.rules.some((r) => (0, import_isEqual.default)(r, ir)));
		rulesToAdd.length > 0 && validation.rules.unshift(...rulesToAdd), !validations.some((v) => (0, import_isEqual.default)(v, validation)) && validations.push(validation);
	}
	return validations.length > 0 ? validations : void 0;
}
function hasValueField(typeDef) {
	return !typeDef || typeof typeDef != "object" ? !1 : "fields" in typeDef ? Array.isArray(typeDef.fields) ? typeDef.fields.some((field) => field.name === "value") : !1 : "type" in typeDef && typeDef.type ? hasValueField(typeDef.type) : !1;
}
function extractValueFromListOption(option, typeDef) {
	return typeDef.jsonType === "object" && hasValueField(typeDef) ? option : (0, import_isObject.default)(option) && "value" in option && option.value ? option.value : option;
}
function maybeValidation(val) {
	if (val) {
		if (isIRuleFunction(val)) try {
			const result = val(new Rule());
			if (isIRule(result)) return maybeValidation(result);
			throw new Error("failed to convert to plain rule");
		} catch {
			return {
				level: "error",
				rules: [{
					type: "custom",
					name: "function"
				}]
			};
		}
		if (isIRule(val)) {
			const level = val._level || "error", message = maybeValidationMessage(val._message), rules = [];
			for (const spec of val._rules || []) {
				const convertedRule = convertRuleSpec(spec, val._required === "optional" || void 0);
				convertedRule !== void 0 && (rules.some((r) => (0, import_isEqual.default)(r, convertedRule)) || rules.push(convertedRule));
			}
			return rules.length === 0 ? void 0 : {
				level,
				rules,
				...message && { message }
			};
		}
	}
}
function isIRule(val) {
	return (0, import_isObject.default)(val) && "_rules" in val;
}
function maybeValidationMessage(val) {
	if (typeof val == "string") return val;
	if (!(0, import_isObject.default)(val) || Array.isArray(val)) return;
	const objectMessage = {};
	for (const [field, value] of Object.entries(val)) typeof field != "string" || typeof value != "string" || (objectMessage[field] = value);
	return Object.keys(objectMessage).length > 0 ? objectMessage : void 0;
}
function isIRuleFunction(val) {
	return typeof val == "function";
}
function convertRuleSpec(spec, optional) {
	if (!(0, import_isObject.default)(spec) || !("flag" in spec)) return;
	const constraint = "constraint" in spec ? spec.constraint : void 0;
	switch (spec.flag) {
		case "integer": return { type: "integer" };
		case "email": return { type: "email" };
		case "unique": return { type: "uniqueItems" };
		case "reference": return { type: "reference" };
		case "assetRequired": return { type: "assetRequired" };
		case "stringCasing": return constraint === "uppercase" ? { type: "uppercase" } : constraint === "lowercase" ? { type: "lowercase" } : void 0;
		case "all":
			if (Array.isArray(constraint)) {
				const children = constraint.map((childRule) => maybeValidation(childRule)).filter((c) => c !== void 0);
				if (children.length > 0) return {
					type: "allOf",
					children
				};
			}
			return;
		case "either":
			if (Array.isArray(constraint)) {
				const children = constraint.map((childRule) => maybeValidation(childRule)).filter((c) => c !== void 0);
				if (children.length > 0) return {
					type: "anyOf",
					children
				};
			}
			return;
		case "valid": return Array.isArray(constraint) ? {
			type: "enum",
			values: constraint.map((c) => convertUnknown(c)).filter((v) => v !== void 0)
		} : void 0;
		case "min": return {
			type: "minimum",
			value: convertConstraintValue(constraint)
		};
		case "max": return {
			type: "maximum",
			value: convertConstraintValue(constraint)
		};
		case "length": return {
			type: "length",
			value: convertConstraintValue(constraint)
		};
		case "precision": return {
			type: "precision",
			value: convertConstraintValue(constraint)
		};
		case "lessThan": return {
			type: "exclusiveMaximum",
			value: convertConstraintValue(constraint)
		};
		case "greaterThan": return {
			type: "exclusiveMinimum",
			value: convertConstraintValue(constraint)
		};
		case "regex":
			if ((0, import_isObject.default)(constraint) && "pattern" in constraint) {
				const { pattern } = constraint, invert = "invert" in constraint ? maybeBoolean(constraint.invert) : void 0;
				if (pattern instanceof RegExp) return {
					type: "regex",
					pattern: pattern.source,
					...invert && { invert: !0 }
				};
			}
			return;
		case "uri": {
			const allowRelative = (0, import_isObject.default)(constraint) && "options" in constraint && (0, import_isObject.default)(constraint.options) && "allowRelative" in constraint.options ? maybeBoolean(constraint.options.allowRelative) : void 0;
			return {
				type: "uri",
				...allowRelative !== void 0 && { allowRelative }
			};
		}
		case "custom": return {
			type: "custom",
			...optional && { optional }
		};
		case "media": return {
			type: "custom",
			name: "media"
		};
		case "type": return;
		case "presence": return constraint === "required" ? { type: "required" } : void 0;
		default: return;
	}
}
function convertConstraintValue(constraint) {
	return (0, import_isObject.default)(constraint) && "type" in constraint && "path" in constraint && constraint.type && constraint.path ? {
		type: "fieldReference",
		path: Array.isArray(constraint.path) ? constraint.path : [constraint.path]
	} : String(constraint);
}
function maybeBoolean(val) {
	if (typeof val == "boolean") return val;
}
function maybeI18n(val) {
	if (!(0, import_isObject.default)(val) || Array.isArray(val)) return;
	const localizedMessage = {};
	for (const entry of Object.entries(val)) if (isI18nEntry(entry)) {
		const [field, value] = entry;
		localizedMessage[field] = {
			ns: value.ns,
			key: value.key
		};
	}
	return Object.keys(localizedMessage).length > 0 ? localizedMessage : void 0;
}
function isI18nEntry(entry) {
	const [key, value] = entry;
	return typeof key == "string" && !!value && typeof value == "object" && "key" in value && "ns" in value && typeof value.key == "string" && typeof value.ns == "string";
}
function maybeOrdering(val) {
	if (!(0, import_isObject.default)(val) || Array.isArray(val)) return;
	const name = "name" in val && typeof val.name == "string" ? val.name : void 0;
	if (name === void 0) return;
	const title = "title" in val && typeof val.title == "string" ? val.title : name, by = "by" in val && Array.isArray(val.by) ? val.by : [], orderingBy = [];
	for (const item of by) {
		const orderingItem = maybeOrderingBy(item);
		orderingItem && orderingBy.push(orderingItem);
	}
	if (orderingBy.length === 0) return;
	const i18n = "i18n" in val ? maybeI18n(val.i18n) : void 0;
	return {
		name,
		title,
		by: orderingBy,
		...i18n && { i18n }
	};
}
function maybeOrderingBy(val) {
	if (!(0, import_isObject.default)(val) || Array.isArray(val)) return;
	const field = "field" in val && typeof val.field == "string" ? val.field : void 0, direction = "direction" in val && (val.direction === "asc" || val.direction === "desc") ? val.direction : void 0;
	if (!(!field || !direction)) return {
		field,
		direction
	};
}
function isLessCanonicalName(a, b) {
	return a.length < b.length || a.length === b.length && a < b;
}
function processSchemaSynchronization(sync, response) {
	return processSetSynchronization(sync, response);
}
var ACTIONS_FLAG = "__experimental_actions";
var DEFAULT_ACTIONS = [
	"create",
	"update",
	"delete",
	"publish"
];
var VALID_ACTIONS = DEFAULT_ACTIONS;
var readActions = (schemaType) => ACTIONS_FLAG in schemaType ? schemaType[ACTIONS_FLAG] : DEFAULT_ACTIONS;
var validateActions = (typeName, actions) => {
	if (!Array.isArray(actions)) throw new Error(`The value of <type>.${ACTIONS_FLAG} should be an array with any of the actions ${VALID_ACTIONS.join(", ")}`);
	const invalid = (0, import_difference.default)(actions, VALID_ACTIONS);
	if (invalid.length > 0) throw new Error(`Invalid action${invalid.length > 1 ? "s" : ""} configured for schema type "${typeName}": ${invalid.join(", ")}. Valid actions are: ${VALID_ACTIONS.join(", ")}`);
	return actions;
};
var resolveEnabledActions = (schemaType) => validateActions(schemaType.name, readActions(schemaType));
var isActionEnabled = (schemaType, action) => resolveEnabledActions(schemaType).includes(action);
var builtinTypes = [
	{
		name: "sanity.assetSourceData",
		title: "Asset Source Data",
		type: "object",
		fields: [
			{
				name: "name",
				title: "Source name",
				description: "A canonical name for the source this asset is originating from",
				type: "string"
			},
			{
				name: "id",
				title: "Asset Source ID",
				description: "The unique ID for the asset within the originating source so you can programatically find back to it",
				type: "string"
			},
			{
				name: "url",
				title: "Asset information URL",
				description: "A URL to find more information about this asset in the originating source",
				type: "string"
			}
		]
	},
	{
		title: "Slug",
		name: "slug",
		type: "object",
		fields: [{
			name: "current",
			title: "Current slug",
			type: "string",
			validation: (Rule2) => Rule2.required()
		}, {
			name: "source",
			title: "Source field",
			type: "string",
			hidden: !0
		}]
	},
	{
		title: "Geographical Point",
		name: "geopoint",
		type: "object",
		fields: [
			{
				name: "lat",
				type: "number",
				title: "Latitude"
			},
			{
				name: "lng",
				type: "number",
				title: "Longitude"
			},
			{
				name: "alt",
				type: "number",
				title: "Altitude"
			}
		]
	},
	{
		name: "sanity.imageAsset",
		title: "Image",
		type: "document",
		fieldsets: [{
			name: "system",
			title: "System fields",
			description: "These fields are managed by the system and not editable"
		}],
		fields: [
			{
				name: "originalFilename",
				type: "string",
				title: "Original file name",
				readOnly: !0
			},
			{
				name: "label",
				type: "string",
				title: "Label"
			},
			{
				name: "title",
				type: "string",
				title: "Title"
			},
			{
				name: "description",
				type: "string",
				title: "Description"
			},
			{
				name: "altText",
				type: "string",
				title: "Alternative text"
			},
			{
				name: "sha1hash",
				type: "string",
				title: "SHA1 hash",
				readOnly: !0,
				fieldset: "system"
			},
			{
				name: "extension",
				type: "string",
				readOnly: !0,
				title: "File extension",
				fieldset: "system"
			},
			{
				name: "mimeType",
				type: "string",
				readOnly: !0,
				title: "Mime type",
				fieldset: "system"
			},
			{
				name: "size",
				type: "number",
				title: "File size in bytes",
				readOnly: !0,
				fieldset: "system"
			},
			{
				name: "assetId",
				type: "string",
				title: "Asset ID",
				readOnly: !0,
				fieldset: "system"
			},
			{
				name: "uploadId",
				type: "string",
				readOnly: !0,
				hidden: !0,
				fieldset: "system"
			},
			{
				name: "path",
				type: "string",
				title: "Path",
				readOnly: !0,
				fieldset: "system"
			},
			{
				name: "url",
				type: "string",
				title: "Url",
				readOnly: !0,
				fieldset: "system"
			},
			{
				name: "metadata",
				type: "sanity.imageMetadata",
				title: "Metadata"
			},
			{
				name: "source",
				type: "sanity.assetSourceData",
				title: "Source",
				readOnly: !0,
				fieldset: "system"
			}
		],
		preview: {
			select: {
				id: "_id",
				title: "originalFilename",
				mimeType: "mimeType",
				size: "size",
				media: "media"
			},
			prepare(doc) {
				return {
					title: doc.title || typeof doc.path == "string" && doc.path.split("/").slice(-1)[0],
					media: {
						asset: { _ref: doc.id },
						...doc.media ? { media: doc.media } : {}
					},
					subtitle: `${doc.mimeType} (${(Number(doc.size) / 1024 / 1024).toFixed(2)} MB)`
				};
			}
		},
		orderings: [{
			title: "File size",
			name: "fileSizeDesc",
			by: [{
				field: "size",
				direction: "desc"
			}]
		}]
	},
	{
		name: "sanity.fileAsset",
		title: "File",
		type: "document",
		fieldsets: [{
			name: "system",
			title: "System fields",
			description: "These fields are managed by the system and not editable"
		}],
		fields: [
			{
				name: "originalFilename",
				type: "string",
				title: "Original file name",
				readOnly: !0
			},
			{
				name: "label",
				type: "string",
				title: "Label"
			},
			{
				name: "title",
				type: "string",
				title: "Title"
			},
			{
				name: "description",
				type: "string",
				title: "Description"
			},
			{
				name: "altText",
				type: "string",
				title: "Alternative text"
			},
			{
				name: "sha1hash",
				type: "string",
				title: "SHA1 hash",
				readOnly: !0,
				fieldset: "system"
			},
			{
				name: "extension",
				type: "string",
				title: "File extension",
				readOnly: !0,
				fieldset: "system"
			},
			{
				name: "mimeType",
				type: "string",
				title: "Mime type",
				readOnly: !0,
				fieldset: "system"
			},
			{
				name: "size",
				type: "number",
				title: "File size in bytes",
				readOnly: !0,
				fieldset: "system"
			},
			{
				name: "assetId",
				type: "string",
				title: "Asset ID",
				readOnly: !0,
				fieldset: "system"
			},
			{
				name: "uploadId",
				type: "string",
				readOnly: !0,
				hidden: !0,
				fieldset: "system"
			},
			{
				name: "path",
				type: "string",
				title: "Path",
				readOnly: !0,
				fieldset: "system"
			},
			{
				name: "url",
				type: "string",
				title: "Url",
				readOnly: !0,
				fieldset: "system"
			},
			{
				name: "source",
				type: "sanity.assetSourceData",
				title: "Source",
				readOnly: !0,
				fieldset: "system"
			}
		],
		preview: {
			select: {
				title: "originalFilename",
				path: "path",
				mimeType: "mimeType",
				size: "size"
			},
			prepare(doc) {
				return {
					title: doc.title || doc.path.split("/").slice(-1)[0],
					subtitle: `${doc.mimeType} (${(doc.size / 1024 / 1024).toFixed(2)} MB)`
				};
			}
		},
		orderings: [{
			title: "File size",
			name: "fileSizeDesc",
			by: [{
				field: "size",
				direction: "desc"
			}]
		}]
	},
	{
		name: "sanity.imageCrop",
		title: "Image crop",
		type: "object",
		fields: [
			{
				name: "top",
				type: "number",
				validation: (Rule2) => Rule2.required()
			},
			{
				name: "bottom",
				type: "number",
				validation: (Rule2) => Rule2.required()
			},
			{
				name: "left",
				type: "number",
				validation: (Rule2) => Rule2.required()
			},
			{
				name: "right",
				type: "number",
				validation: (Rule2) => Rule2.required()
			}
		]
	},
	{
		name: "sanity.imageHotspot",
		title: "Image hotspot",
		type: "object",
		fields: [
			{
				name: "x",
				type: "number",
				validation: (Rule2) => Rule2.required()
			},
			{
				name: "y",
				type: "number",
				validation: (Rule2) => Rule2.required()
			},
			{
				name: "height",
				type: "number",
				validation: (Rule2) => Rule2.required()
			},
			{
				name: "width",
				type: "number",
				validation: (Rule2) => Rule2.required()
			}
		]
	},
	{
		name: "sanity.imageMetadata",
		title: "Image metadata",
		type: "object",
		fieldsets: [{
			name: "extra",
			title: "Extra metadata…",
			options: { collapsable: !0 }
		}],
		fields: [
			{
				name: "location",
				type: "geopoint"
			},
			{
				name: "dimensions",
				title: "Dimensions",
				type: "sanity.imageDimensions",
				fieldset: "extra"
			},
			{
				name: "palette",
				type: "sanity.imagePalette",
				title: "Palette",
				fieldset: "extra"
			},
			{
				name: "lqip",
				title: "LQIP (Low-Quality Image Placeholder)",
				type: "string",
				readOnly: !0
			},
			{
				name: "blurHash",
				title: "BlurHash",
				type: "string",
				readOnly: !0
			},
			{
				name: "hasAlpha",
				title: "Has alpha channel",
				type: "boolean",
				readOnly: !0
			},
			{
				name: "isOpaque",
				title: "Is opaque",
				type: "boolean",
				readOnly: !0
			}
		]
	},
	{
		name: "sanity.imageDimensions",
		type: "object",
		title: "Image dimensions",
		fields: [
			{
				name: "height",
				type: "number",
				title: "Height",
				readOnly: !0,
				validation: (Rule2) => Rule2.required()
			},
			{
				name: "width",
				type: "number",
				title: "Width",
				readOnly: !0,
				validation: (Rule2) => Rule2.required()
			},
			{
				name: "aspectRatio",
				type: "number",
				title: "Aspect ratio",
				readOnly: !0,
				validation: (Rule2) => Rule2.required()
			}
		]
	},
	{
		name: "sanity.imagePalette",
		title: "Image palette",
		type: "object",
		fields: [
			{
				name: "darkMuted",
				type: "sanity.imagePaletteSwatch",
				title: "Dark Muted"
			},
			{
				name: "lightVibrant",
				type: "sanity.imagePaletteSwatch",
				title: "Light Vibrant"
			},
			{
				name: "darkVibrant",
				type: "sanity.imagePaletteSwatch",
				title: "Dark Vibrant"
			},
			{
				name: "vibrant",
				type: "sanity.imagePaletteSwatch",
				title: "Vibrant"
			},
			{
				name: "dominant",
				type: "sanity.imagePaletteSwatch",
				title: "Dominant"
			},
			{
				name: "lightMuted",
				type: "sanity.imagePaletteSwatch",
				title: "Light Muted"
			},
			{
				name: "muted",
				type: "sanity.imagePaletteSwatch",
				title: "Muted"
			}
		]
	},
	{
		name: "sanity.imagePaletteSwatch",
		title: "Image palette swatch",
		type: "object",
		fields: [
			{
				name: "background",
				type: "string",
				title: "Background",
				readOnly: !0
			},
			{
				name: "foreground",
				type: "string",
				title: "Foreground",
				readOnly: !0
			},
			{
				name: "population",
				type: "number",
				title: "Population",
				readOnly: !0
			},
			{
				name: "title",
				type: "string",
				title: "String",
				readOnly: !0
			}
		]
	}
];
var HELP_IDS = {
	TYPE_INVALID: "schema-type-invalid",
	TYPE_IS_ESM_MODULE: "schema-type-is-esm-module",
	TYPE_NAME_RESERVED: "schema-type-name-reserved",
	TYPE_MISSING_NAME: "schema-type-missing-name-or-type",
	TYPE_MISSING_TYPE: "schema-type-missing-name-or-type",
	TYPE_TITLE_RECOMMENDED: "schema-type-title-is-recommended",
	TYPE_TITLE_INVALID: "schema-type-title-is-recommended",
	OBJECT_FIELDS_INVALID: "schema-object-fields-invalid",
	OBJECT_FIELD_NOT_UNIQUE: "schema-object-fields-invalid",
	OBJECT_FIELD_NAME_INVALID: "schema-object-fields-invalid",
	OBJECT_FIELD_DEFINITION_INVALID_TYPE: "schema-object-fields-invalid",
	ARRAY_PREDEFINED_CHOICES_INVALID: "schema-predefined-choices-invalid",
	ARRAY_OF_ARRAY: "schema-array-of-array",
	ARRAY_OF_INVALID: "schema-array-of-invalid",
	ARRAY_OF_NOT_UNIQUE: "schema-array-of-invalid",
	ARRAY_OF_TYPE_GLOBAL_TYPE_CONFLICT: "schema-array-of-type-global-type-conflict",
	ARRAY_OF_TYPE_BUILTIN_TYPE_CONFLICT: "schema-array-of-type-builtin-type-conflict",
	REFERENCE_TO_INVALID: "schema-reference-to-invalid",
	REFERENCE_TO_NOT_UNIQUE: "schema-reference-to-invalid",
	REFERENCE_INVALID_OPTIONS: "schema-reference-invalid-options",
	REFERENCE_INVALID_OPTIONS_LOCATION: "schema-reference-options-nesting",
	REFERENCE_INVALID_FILTER_PARAMS_COMBINATION: "schema-reference-filter-params-combination",
	SLUG_SLUGIFY_FN_RENAMED: "slug-slugifyfn-renamed",
	ASSET_METADATA_FIELD_INVALID: "asset-metadata-field-invalid",
	CROSS_DATASET_REFERENCE_INVALID: "cross-dataset-reference-invalid",
	GLOBAL_DOCUMENT_REFERENCE_INVALID: "global-document-reference-invalid",
	DEPRECATED_BLOCKEDITOR_KEY: "schema-deprecated-blockeditor-key",
	STANDALONE_BLOCK_TYPE: "schema-standalone-block-type"
};
function createValidationResult(severity, message, helpId) {
	if (helpId && !Object.keys(HELP_IDS).some((id) => HELP_IDS[id] === helpId)) throw new Error(`Used the unknown helpId "${helpId}", please add it to the array in createValidationResult.js`);
	return {
		severity,
		message,
		helpId
	};
}
var error = (message, helpId) => createValidationResult("error", message, helpId);
var warning = (message, helpId) => createValidationResult("warning", message, helpId);
function groupProblems(types) {
	return (0, import_flatten.default)(types.map((type) => getTypeProblems(type))).filter((type) => type.problems.length > 0);
}
function createTypeWithMembersProblemsAccessor(memberPropertyName, getMembers = (type) => (0, import_get.default)(type, memberPropertyName)) {
	return function(type, parentPath) {
		const currentPath = [...parentPath, {
			kind: "type",
			type: type.type,
			name: type.name
		}], members = getMembers(type) || [], memberProblems = Array.isArray(members) ? members.map((memberType) => {
			const propertySegment = {
				kind: "property",
				name: memberPropertyName
			};
			return getTypeProblems(memberType, [...currentPath, propertySegment]);
		}) : [[{
			path: currentPath,
			problems: [error(`Member declaration (${memberPropertyName}) is not an array`)]
		}]];
		return [{
			path: currentPath,
			problems: type._problems || []
		}, ...(0, import_flatten.default)(memberProblems)];
	};
}
var arrify = (val) => Array.isArray(val) ? val : typeof val > "u" && [] || [val];
var getObjectProblems = createTypeWithMembersProblemsAccessor("fields");
var getImageProblems = createTypeWithMembersProblemsAccessor("fields");
var getFileProblems = createTypeWithMembersProblemsAccessor("fields");
var getArrayProblems = createTypeWithMembersProblemsAccessor("of");
var getReferenceProblems = createTypeWithMembersProblemsAccessor("to", (type) => "to" in type ? arrify(type.to) : []);
var getBlockAnnotationProblems = createTypeWithMembersProblemsAccessor("marks.annotations");
var getBlockMemberProblems = createTypeWithMembersProblemsAccessor("of");
var getBlockProblems = (type, problems) => [...getBlockAnnotationProblems(type, problems), ...getBlockMemberProblems(type, problems)];
function getDefaultProblems(type, path = []) {
	return [{
		path: [...path, {
			kind: "type",
			type: type.type,
			name: type.name
		}],
		problems: type._problems || []
	}];
}
function getTypeProblems(type, path = []) {
	switch (type.type) {
		case "object": return getObjectProblems(type, path);
		case "document": return getObjectProblems(type, path);
		case "array": return getArrayProblems(type, path);
		case "reference": return getReferenceProblems(type, path);
		case "block": return getBlockProblems(type, path);
		case "image": return getImageProblems(type, path);
		case "file": return getFileProblems(type, path);
		default: return getDefaultProblems(type, path);
	}
}
function getDupes(array2, selector = (v) => v) {
	const dupes = array2.reduce((acc, item) => {
		const key = selector(item);
		return acc[key] || (acc[key] = []), acc[key].push(item), acc;
	}, {});
	return Object.keys(dupes).map((key) => dupes[key].length > 1 ? dupes[key] : null).filter(Boolean);
}
var NOOP_VISITOR = (typeDef) => typeDef;
var TYPE_TYPE = {
	name: "type",
	type: null
};
var FUTURE_RESERVED = [
	"any",
	"time",
	"date"
];
function traverseSchema(types = [], coreTypes2 = [], visitor = NOOP_VISITOR) {
	const coreTypesRegistry = /* @__PURE__ */ Object.create(null), registry = /* @__PURE__ */ Object.create(null), coreTypeNames2 = coreTypes2.map((typeDef) => typeDef.name), reservedTypeNames = FUTURE_RESERVED.concat(coreTypeNames2), typeNames = types.map((typeDef) => typeDef && typeDef.name).filter(Boolean);
	coreTypes2.forEach((coreType) => {
		coreTypesRegistry[coreType.name] = coreType;
	}), types.forEach((type, i) => {
		registry[type && type.name || `__unnamed_${i}`] = {};
	});
	function getType(typeName) {
		return typeName === "type" ? TYPE_TYPE : coreTypesRegistry[typeName] || registry[typeName] || null;
	}
	const duplicateNames = (0, import_uniq.default)((0, import_flatten.default)(getDupes(typeNames)));
	function isDuplicate(typeName) {
		return duplicateNames.includes(typeName);
	}
	function getTypeNames() {
		return typeNames.concat(coreTypeNames2);
	}
	function isReserved(typeName) {
		return typeName === "type" || reservedTypeNames.includes(typeName);
	}
	const visitType = (isRoot) => (typeDef, index) => visitor(typeDef, {
		visit: visitType(!1),
		isRoot,
		getType,
		getTypeNames,
		isReserved,
		isDuplicate,
		index
	});
	return coreTypes2.forEach((coreTypeDef) => {
		Object.assign(coreTypesRegistry[coreTypeDef.name], visitType(coreTypeDef));
	}), types.forEach((typeDef, i) => {
		Object.assign(registry[typeDef && typeDef.name || `__unnamed_${i}`], visitType(!0)(typeDef, i));
	}), {
		get(typeName) {
			const res = registry[typeName] || coreTypesRegistry[typeName];
			if (res) return res;
			throw new Error(`No such type: ${typeName}`);
		},
		has(typeName) {
			return typeName in registry || typeName in coreTypesRegistry;
		},
		getTypeNames() {
			return Object.keys(registry);
		},
		getTypes() {
			return this.getTypeNames().map(this.get);
		},
		toJSON() {
			return this.getTypes();
		}
	};
}
var coreTypes = [
	{
		name: "array",
		jsonType: "array",
		type: "type"
	},
	{
		name: "block",
		jsonType: "object",
		type: "type"
	},
	{
		name: "boolean",
		jsonType: "boolean",
		type: "type"
	},
	{
		name: "datetime",
		jsonType: "string",
		type: "type"
	},
	{
		name: "date",
		jsonType: "string",
		type: "type"
	},
	{
		name: "document",
		jsonType: "object",
		type: "type"
	},
	{
		name: "email",
		jsonType: "string",
		type: "type"
	},
	{
		name: "file",
		jsonType: "object",
		type: "type"
	},
	{
		name: "geopoint",
		jsonType: "object",
		type: "type"
	},
	{
		name: "image",
		jsonType: "object",
		type: "type"
	},
	{
		name: "number",
		jsonType: "number",
		type: "type"
	},
	{
		name: "object",
		jsonType: "object",
		type: "type"
	},
	{
		name: "reference",
		jsonType: "object",
		type: "type"
	},
	{
		name: "crossDatasetReference",
		jsonType: "object",
		type: "type"
	},
	{
		name: "globalDocumentReference",
		jsonType: "object",
		type: "type"
	},
	{
		name: "slug",
		jsonType: "object",
		type: "type"
	},
	{
		name: "span",
		jsonType: "object",
		type: "type"
	},
	{
		name: "string",
		jsonType: "string",
		type: "type"
	},
	{
		name: "telephone",
		jsonType: "string",
		type: "type"
	},
	{
		name: "text",
		jsonType: "string",
		type: "type"
	},
	{
		name: "url",
		jsonType: "string",
		type: "type"
	}
];
var coreTypeNames = coreTypes.map((t) => t.name);
function traverseSanitySchema(schemaTypes, visitor) {
	return traverseSchema(schemaTypes, coreTypes, visitor);
}
function isPrimitiveTypeName(typeName) {
	return typeName === "string" || typeName === "number" || typeName === "boolean";
}
function isAssignable(typeName, type) {
	return (typeof type.name == "string" ? type.name : type.type) === typeName;
}
function quote$2(n) {
	return `"${n}"`;
}
function pluralize(arr, suf = "s") {
	return arr.length === 1 ? "" : suf;
}
function format(value) {
	return Array.isArray(value) ? `array with ${value.length} entries` : typeof value == "object" && value !== null ? `object with keys ${(0, import_humanize_list.default)(Object.keys(value).map(quote$2))}` : quote$2(value);
}
var array = (typeDef, visitorContext) => {
	const ofIsArray = Array.isArray(typeDef.of);
	if (ofIsArray) {
		const invalid = typeDef.of.reduce((errs, def, idx) => {
			if (typeof def.name == "string" && def.name !== def.type && coreTypeNames.includes(def.name)) return errs.concat(error(`Found array member declaration with the same type name as a built-in type ("${def.name}"). Array members can not be given the same name as a built-in type.`, HELP_IDS.ARRAY_OF_TYPE_BUILTIN_TYPE_CONFLICT));
			if (def.type === "object" && def.name && visitorContext.getType(def.name)) return errs.concat(warning(`Found array member declaration with the same name as the global schema type "${def.name}". It's recommended to use a unique name to avoid possibly incompatible data types that shares the same name.`, HELP_IDS.ARRAY_OF_TYPE_GLOBAL_TYPE_CONFLICT));
			if (def.type === "array") return errs.concat(error("Found array member declaration of type \"array\" - multidimensional arrays are not currently supported by Sanity", HELP_IDS.ARRAY_OF_ARRAY));
			if (def) return errs;
			const err = `Found ${def === null ? "null" : typeof def}, expected member declaration`;
			return errs.concat(error(`Found invalid type member declaration in array at index ${idx}: ${err}`, HELP_IDS.ARRAY_OF_INVALID));
		}, []);
		if (invalid.length > 0) return {
			...typeDef,
			of: [],
			_problems: invalid
		};
	}
	const problems = (0, import_flatten.default)([ofIsArray ? getDupes(typeDef.of, (t) => `${t.name};${t.type}`).map((dupes) => error(`Found ${dupes.length} members with same type, but not unique names "${dupes[0].type}" in array. This makes it impossible to tell their values apart and you should consider naming them`, HELP_IDS.ARRAY_OF_NOT_UNIQUE)) : error("The array type is missing or having an invalid value for the required \"of\" property", HELP_IDS.ARRAY_OF_INVALID)]), of = ofIsArray ? typeDef.of : [], hasObjectTypesWithoutName = of.some((type) => type.type === "object" && typeof type.name > "u");
	of.some((ofType) => ofType.type === "block") && hasObjectTypesWithoutName && problems.push(error("The array type's 'of' property can't have an object type without a 'name' property as member, when the 'block' type is also a member of that array.", HELP_IDS.ARRAY_OF_INVALID));
	const [primitiveTypes, objectTypes] = (0, import_partition.default)(of, (ofType) => isPrimitiveTypeName(ofType.type) || isPrimitiveTypeName(visitorContext.getType(ofType.type)?.jsonType)), isMixedArray = primitiveTypes.length > 0 && objectTypes.length > 0;
	if (isMixedArray) {
		const primitiveTypeNames = primitiveTypes.map((t) => t.type), objectTypeNames = objectTypes.map((t) => t.type);
		problems.push(error(`The array type's 'of' property can't have both object types and primitive types (found primitive type ${pluralize(primitiveTypeNames)} ${(0, import_humanize_list.default)(primitiveTypeNames.map(quote$2))} and object type${pluralize(objectTypeNames)} ${(0, import_humanize_list.default)(objectTypeNames.map(quote$2))})`, HELP_IDS.ARRAY_OF_INVALID));
	}
	const list = typeDef?.options?.list;
	return !isMixedArray && Array.isArray(list) && (primitiveTypes.length > 0 ? list.forEach((option) => {
		const value = option?.value ?? option;
		if (!primitiveTypes.some((primitiveType) => typeof value === visitorContext.getType(primitiveType.type).jsonType)) {
			const formattedTypeList = (0, import_humanize_list.default)(primitiveTypes.map((t) => t.name || t.type), { conjunction: "or" });
			problems.push(error(`An invalid entry found in options.list: ${format(value)}. Must be either a value of type ${formattedTypeList}, or an object with {title: string, value: ${formattedTypeList}}`, HELP_IDS.ARRAY_PREDEFINED_CHOICES_INVALID));
		}
	}) : list.forEach((option) => {
		const optionTypeName = option._type || "object";
		objectTypes.some((validObjectType) => isAssignable(optionTypeName, validObjectType)) || problems.push(error(`An invalid entry found in options.list: ${format(option)}. Must be an object with "_type" set to ${(0, import_humanize_list.default)(objectTypes.map((t) => t.name || t.type).map((t) => t === "object" ? "undefined" : quote$2(t)), { conjunction: "or" })}`, HELP_IDS.ARRAY_PREDEFINED_CHOICES_INVALID));
	})), typeDef?.options?.list && typeDef?.options?.layout === "tags" && problems.push(warning("Found array member declaration with both tags layout and a list of predefined values. If you want to display a list of predefined values, remove the tags layout from `options`.")), {
		...typeDef,
		of: of.map(visitorContext.visit),
		_problems: problems
	};
};
function isJSONTypeOf(type, jsonType, visitorContext) {
	if ("jsonType" in type) return type.jsonType === jsonType;
	const parentType = visitorContext.getType(type.type);
	if (!parentType) throw new Error(`Could not resolve jsonType of ${type.name}. No parent type found`);
	return isJSONTypeOf(parentType, jsonType, visitorContext);
}
var getTypeOf = (thing) => Array.isArray(thing) ? "array" : typeof thing;
var quote$1 = (str) => `"${str}"`;
var allowedKeys = [
	"components",
	"lists",
	"marks",
	"name",
	"of",
	"options",
	"styles",
	"title",
	"type",
	"validation"
];
var allowedMarkKeys = ["decorators", "annotations"];
var allowedStyleKeys = [
	"blockEditor",
	"title",
	"value",
	"icon",
	"component"
];
var allowedDecoratorKeys = [
	"blockEditor",
	"title",
	"value",
	"icon",
	"component"
];
var allowedListKeys = [
	"title",
	"value",
	"icon",
	"component"
];
var supportedBuiltInObjectTypes = [
	"file",
	"image",
	"object",
	"reference",
	"crossDatasetReference",
	"globalDocumentReference"
];
function validateBlockType(typeDef, visitorContext) {
	const problems = [];
	let styles = typeDef.styles, lists = typeDef.lists, marks = typeDef.marks, members = typeDef.of;
	const disallowedKeys = Object.keys(typeDef).filter((key) => !allowedKeys.includes(key) && !key.startsWith("_"));
	return disallowedKeys.length > 0 && problems.push(error(`Found unknown properties for block declaration: ${(0, import_humanize_list.default)(disallowedKeys.map(quote$1))}`)), marks && (marks = validateMarks(typeDef.marks, visitorContext, problems)), styles && (styles = validateStyles(styles, visitorContext, problems)), lists && (lists = validateLists(lists, visitorContext, problems)), members && (members = validateMembers(members, visitorContext, problems)), {
		...(0, import_omit.default)(typeDef, disallowedKeys),
		marks,
		styles,
		name: typeDef.name || typeDef.type,
		of: members,
		_problems: problems
	};
}
function validateMarks(marks, visitorContext, problems) {
	let decorators = marks.decorators, annotations = marks.annotations;
	if (!(0, import_isPlainObject.default)(marks)) return problems.push(error(`"marks" declaration should be an object, got ${getTypeOf(marks)}`)), problems;
	const disallowedMarkKeys = Object.keys(marks).filter((key) => !allowedMarkKeys.includes(key) && !key.startsWith("_"));
	return disallowedMarkKeys.length > 0 && problems.push(error(`Found unknown properties for block declaration: ${(0, import_humanize_list.default)(disallowedMarkKeys.map(quote$1))}`)), decorators && !Array.isArray(decorators) ? problems.push(error(`"marks.decorators" declaration should be an array, got ${getTypeOf(decorators)}`)) : decorators && (decorators.filter((dec) => !!dec.blockEditor).forEach((dec) => {
		dec.icon = dec.blockEditor.icon, dec.component = dec.blockEditor.render;
	}), decorators = validateDecorators(decorators, visitorContext, problems)), annotations && !Array.isArray(annotations) ? problems.push(error(`"marks.annotations" declaration should be an array, got ${getTypeOf(annotations)}`)) : annotations && (annotations = validateAnnotations(annotations, visitorContext, problems)), {
		...marks,
		decorators,
		annotations
	};
}
function validateLists(lists, visitorContext, problems) {
	return Array.isArray(lists) ? (lists.forEach((list, index) => {
		if (!(0, import_isPlainObject.default)(list)) {
			problems.push(error(`List must be an object, got ${getTypeOf(list)}`));
			return;
		}
		const name = list.value || `#${index}`, disallowedKeys = Object.keys(list).filter((key) => !allowedListKeys.includes(key) && !key.startsWith("_"));
		disallowedKeys.length > 0 && problems.push(error(`Found unknown properties for list ${name}: ${(0, import_humanize_list.default)(disallowedKeys.map(quote$1))}`)), list.value ? typeof list.value != "string" ? problems.push(error(`List type #${index} has an invalid "value" property, expected string, got ${getTypeOf(list.value)}`)) : list.title || problems.push(warning(`List type ${name} is missing recommended "title" property`)) : problems.push(error(`List #${index} is missing required "value" property`));
	}), lists) : (problems.push(error(`"lists" declaration should be an array, got ${getTypeOf(lists)}`)), problems);
}
function validateStyles(styles, visitorContext, problems) {
	return Array.isArray(styles) ? (styles.forEach((style, index) => {
		if (!(0, import_isPlainObject.default)(style)) {
			problems.push(error(`Style must be an object, got ${getTypeOf(style)}`));
			return;
		}
		const name = style.value || `#${index}`, disallowedKeys = Object.keys(style).filter((key) => !allowedStyleKeys.includes(key) && !key.startsWith("_"));
		disallowedKeys.length > 0 && problems.push(error(`Found unknown properties for style ${name}: ${(0, import_humanize_list.default)(disallowedKeys.map(quote$1))}`)), style.value ? typeof style.value != "string" ? problems.push(error(`Style #${index} has an invalid "value" property, expected string, got ${getTypeOf(style.value)}`)) : style.title || problems.push(warning(`Style ${name} is missing recommended "title" property`)) : problems.push(error(`Style #${index} is missing required "value" property`)), typeof style.blockEditor < "u" && (problems.push(warning("Style has deprecated key \"blockEditor\", please refer to the documentation on how to configure the block type for version 3.", HELP_IDS.DEPRECATED_BLOCKEDITOR_KEY)), style.component = style.component || style.blockEditor.render);
	}), styles) : (problems.push(error(`"styles" declaration should be an array, got ${getTypeOf(styles)}`)), problems);
}
function validateDecorators(decorators, visitorContext, problems) {
	return decorators.forEach((decorator, index) => {
		if (!(0, import_isPlainObject.default)(decorator)) {
			problems.push(error(`Annotation must be an object, got ${getTypeOf(decorator)}`));
			return;
		}
		const name = decorator.value || `#${index}`, disallowedKeys = Object.keys(decorator).filter((key) => !allowedDecoratorKeys.includes(key) && !key.startsWith("_"));
		disallowedKeys.length > 0 && problems.push(error(`Found unknown properties for decorator ${name}: ${(0, import_humanize_list.default)(disallowedKeys.map(quote$1))}`)), decorator.value ? typeof decorator.value != "string" ? problems.push(error(`Decorator #${index} has an invalid "value" property, expected string, got ${getTypeOf(decorator.value)}`)) : decorator.title || problems.push(warning(`Decorator ${name} is missing recommended "title" property`)) : problems.push(error(`Decorator #${index} is missing required "value" property`)), typeof decorator.blockEditor < "u" && (problems.push(warning(`Decorator "${name}" has deprecated key "blockEditor", please refer to the documentation on how to configure the block type for version 3.`, HELP_IDS.DEPRECATED_BLOCKEDITOR_KEY)), decorator.icon = decorator.icon || decorator.blockEditor.icon, decorator.component = decorator.component || decorator.blockEditor.render);
	}), decorators;
}
function validateAnnotations(annotations, visitorContext, problems) {
	return annotations.map((annotation) => {
		if (!(0, import_isPlainObject.default)(annotation)) return {
			...annotation,
			_problems: [error(`Annotation must be an object, got ${getTypeOf(annotation)}`)]
		};
		const { _problems } = visitorContext.visit(annotation, visitorContext), targetType = annotation.type && visitorContext.getType(annotation.type);
		return targetType && !isJSONTypeOf(targetType, "object", visitorContext) && _problems.push(error(`Annotation cannot have type "${annotation.type}" - annotation types must inherit from object`)), typeof annotation.blockEditor < "u" && (problems.push(warning("Annotation has deprecated key \"blockEditor\", please refer to the documentation on how to configure the block type for version 3.", HELP_IDS.DEPRECATED_BLOCKEDITOR_KEY)), annotation.icon = annotation.icon || annotation.blockEditor.icon, annotation.blockEditor?.render && !annotation.components?.annotation && (annotation.components = annotation.components || {}, annotation.components.annotation = annotation.components.annotation || annotation.blockEditor.render)), {
			...annotation,
			_problems
		};
	});
}
function validateMembers(members, visitorContext, problems) {
	if (!Array.isArray(members)) {
		problems.push(error(`"of" declaration should be an array, got ${getTypeOf(members)}`));
		return;
	}
	return members.map((member) => {
		const { _problems } = visitorContext.visit(member, visitorContext);
		if (member.type === "object" && member.name && visitorContext.getType(member.name)) return {
			...member,
			_problems: [warning(`Found array member declaration with the same name as the global schema type "${member.name}". It's recommended to use a unique name to avoid possibly incompatible data types that shares the same name.`, HELP_IDS.ARRAY_OF_TYPE_GLOBAL_TYPE_CONFLICT)]
		};
		let type = member;
		for (; type && !type.jsonType;) type = visitorContext.getType(type.type);
		const nonObjectCoreTypes = coreTypeNames.filter((n) => !supportedBuiltInObjectTypes.includes(n));
		return type && type.jsonType !== "object" || nonObjectCoreTypes.some((coreName) => coreName === member.type) ? {
			...member,
			_problems: [error(`Block member types must be a supported object-like type. The following built-in types are supported: '${supportedBuiltInObjectTypes.join("', '")}'. You can also use shorthands for previously defined object types like {type: 'myObjectType'}`, HELP_IDS.ARRAY_OF_TYPE_BUILTIN_TYPE_CONFLICT)]
		} : {
			...member,
			_problems
		};
	});
}
function validateNonObjectFieldsProp(typeDef, visitorContext) {
	if (!("fields" in typeDef)) return [];
	let type = typeDef;
	for (; type && !type.jsonType;) type = visitorContext.getType(type.type);
	return type && type.jsonType !== "object" ? [error("Type has propery \"fields\", but is not an object/document type.")] : [];
}
var quote = (str) => `"${str}"`;
function validateTypeName(typeName, visitorContext) {
	const possibleTypeNames = visitorContext.getTypeNames();
	if (!typeName) return [error("Type is missing a type.", HELP_IDS.TYPE_MISSING_TYPE)];
	if (typeof typeName != "string") return [error("Type has an invalid \"type\"-property - should be a string.", HELP_IDS.TYPE_MISSING_TYPE)];
	if (!possibleTypeNames.includes(typeName)) {
		const suggestions = possibleTypeNames.map((possibleTypeName) => [(0, import_leven.default)(typeName, possibleTypeName), possibleTypeName]).filter(([distance]) => distance < 3).map(([_, name]) => name);
		return [error(`Unknown type: ${typeName}.${suggestions.length > 0 ? ` Did you mean ${(0, import_humanize_list.default)(suggestions.map(quote), { conjunction: "or" })}?` : ""}`)];
	}
	return [];
}
function validateDeprecatedProperties(type) {
	const warnings = [];
	return type?.inputComponent && warnings.push(warning("The \"inputComponent\" property is deprecated. Use \"components.input\" instead.")), type?.preview?.component && warnings.push(warning("The \"preview.component\" property is deprecated. Use \"components.preview\" instead.")), type?.diffComponent && warnings.push(warning("The \"diffComponent\" property is deprecated. Use \"components.diff\" instead.")), type?.options?.editModal && warnings.push(warning("The \"options.editModal\" property is deprecated. Use \"options.modal\" instead.")), type?.options?.isHighlighted && warnings.push(warning("The \"options.isHighlighted\" property is deprecated. You can put fields behind a collapsed fieldset if you want to hide them from plain sight.")), warnings;
}
var common = (typeDef, visitorContext) => ({
	...typeDef,
	_problems: [
		...validateTypeName(typeDef.type, visitorContext),
		...validateNonObjectFieldsProp(typeDef, visitorContext),
		...validateDeprecatedProperties(typeDef)
	].filter(Boolean)
});
function normalizeToProp$2(typeDef) {
	return Array.isArray(typeDef.to) ? typeDef.to : typeDef.to ? [typeDef.to] : typeDef.to;
}
var VALID_DATASET = /^[a-z0-9~][-_a-z0-9]+$/;
function isValidDatasetName(name) {
	return name.length >= 2 && name.toLowerCase() === name && VALID_DATASET.test(name) || `The provided dataset "${name}" doesn't look like a valid dataset. Dataset names must be more than 2 characters, can only contain lowercase characters, numbers, underscores and dashes and can not start with a dash or an underscore`;
}
var crossDatasetReference = (typeDef, visitorContext) => {
	const isValidTo = Array.isArray(typeDef.to) || (0, import_isPlainObject.default)(typeDef.to), normalizedTo = normalizeToProp$2(typeDef), problems = (0, import_flatten.default)([isValidTo ? getDupes(normalizedTo, (t) => `${t.name};${t.type}`).map((dupes) => error(`Found ${dupes.length} members with same type, but not unique names "${dupes[0].type}" in reference. This makes it impossible to tell their values apart and you should consider naming them`, HELP_IDS.CROSS_DATASET_REFERENCE_INVALID)) : error("The cross dataset reference type is missing or having an invalid value for the required \"to\" property. It should be an array of accepted types.", HELP_IDS.CROSS_DATASET_REFERENCE_INVALID)]);
	if (isValidTo && normalizedTo.length === 0 && problems.push(error("The cross dataset reference type should define at least one referenced type. Please check the \"to\" property.", HELP_IDS.CROSS_DATASET_REFERENCE_INVALID)), normalizedTo.forEach((crossDatasetTypeDef, index) => {
		crossDatasetTypeDef.type || problems.push(error(`The referenced type at index ${index} must be named. Specify the name of the type you want to create references to.`, HELP_IDS.CROSS_DATASET_REFERENCE_INVALID)), (0, import_isPlainObject.default)(crossDatasetTypeDef.preview) || problems.push(error(`Missing required preview config for the referenced type "${crossDatasetTypeDef.type || "<unknown type>"}"`, HELP_IDS.CROSS_DATASET_REFERENCE_INVALID));
	}), typeof typeDef.dataset == "string") {
		const datasetValidation = isValidDatasetName(typeDef.dataset);
		datasetValidation !== !0 && problems.push(error(datasetValidation, HELP_IDS.CROSS_DATASET_REFERENCE_INVALID));
	} else problems.push(error("A cross dataset reference must specify a `dataset`", HELP_IDS.CROSS_DATASET_REFERENCE_INVALID));
	return typeDef.studioUrl && typeof typeDef.studioUrl != "function" && problems.push(error("The \"studioUrl\" property on a cross dataset reference must be a function taking \"{id, type}\" as argument and returning a studio url.", HELP_IDS.CROSS_DATASET_REFERENCE_INVALID)), problems.push(...getOptionErrors$2(typeDef)), {
		...typeDef,
		_problems: problems
	};
};
function getOptionErrors$2(typeDef) {
	const { options } = typeDef, problems = [];
	return problems.push(...["filter", "filterParams"].filter((key) => key in typeDef).map((key) => error(`\`${key}\` is not allowed on a reference type definition - did you mean \`options.${key}\`?`, HELP_IDS.REFERENCE_INVALID_OPTIONS_LOCATION))), options ? (0, import_isPlainObject.default)(options) ? typeof options.filter == "function" && typeof options.filterParams < "u" ? problems.concat(error("`filterParams` cannot be used if `filter` is a function. Either statically define `filter` as a string, or return `params` from the `filter`-function.", HELP_IDS.REFERENCE_INVALID_FILTER_PARAMS_COMBINATION)) : typeof options.filter == "function" || !options.filter && !options.filterParams ? problems : typeof options.filter != "string" ? problems.concat(error(`If set, \`filter\` must be a string. Got ${typeof options.filter}`)) : typeof options.filterParams < "u" && !(0, import_isPlainObject.default)(options.filterParams) ? problems.concat(error("If set, `filterParams` must be an object.")) : options.filterParams ? problems.concat(Object.keys(options.filterParams).filter((key) => key.startsWith("__") || key.startsWith("$")).map((key) => error(`Filter parameter cannot be prefixed with "$" or "__". Got ${key}".`))) : problems : problems.concat(error("The reference type expects `options` to be an object", HELP_IDS.REFERENCE_INVALID_OPTIONS)) : problems;
}
var REACT_SYM_RE = /^Symbol\(react\..+\)$/;
function isComponentLike(value) {
	return typeof value == "function" || typeof value?.$$typeof == "symbol" && REACT_SYM_RE.test(String(value?.$$typeof));
}
function validateComponent(typeDef) {
	const components = "components" in typeDef ? typeDef.components : !1;
	if (!components) return [];
	const warnings = [];
	return components.input && !isComponentLike(components.input) && warnings.push(warning(`The \`components.input\` property is set but does not appear to be a valid React component (expected a function, but saw ${(0, import_object_inspect.default)(components.input)}). If you have imported a custom input component, please verify that you have imported the correct named/default export.`)), components.field && !isComponentLike(components.field) && warnings.push(warning(`The \`components.field\` property is set but does not appear to be a valid React component (expected a function, but saw ${(0, import_object_inspect.default)(components.field)}). If you have imported a custom field component, please verify that you have imported the correct named/default export.`)), components.item && !isComponentLike(components.item) && warnings.push(warning(`The \`components.item\` property is set but does not appear to be a valid React component (expected a function, but saw ${(0, import_object_inspect.default)(components.item)}). If you have imported a custom item component, please verify that you have imported the correct named/default export.`)), components.preview && !isComponentLike(components.preview) && warnings.push(warning(`The \`components.preview\` property is set but does not appear to be a valid React component (expected a function, but saw ${(0, import_object_inspect.default)(components.preview)}). If you have imported a custom preview component, please verify that you have imported the correct named/default export.`)), warnings;
}
var VALID_FIELD_RE = /^[A-Za-z]+[0-9A-Za-z_]*$/;
var CONVENTIONAL_FIELD_RE = /^[A-Za-z_]+[0-9A-Za-z_]*$/;
function validateFieldName(name) {
	return typeof name != "string" ? [error(`Field names must be strings. Saw "${(0, import_object_inspect.default)(name)}"`, HELP_IDS.OBJECT_FIELD_NAME_INVALID)] : name.startsWith("_") ? [error(`Invalid field name "${name}". Field names cannot start with underscores "_" as it's reserved for system fields.`, HELP_IDS.OBJECT_FIELD_NAME_INVALID)] : VALID_FIELD_RE.test(name) ? CONVENTIONAL_FIELD_RE.test(name) ? [] : [warning("Thats an interesting field name for sure! But it is... how to put it... a bit... unconventional? It may be wise to keep special characters out of field names for easier access later on."), HELP_IDS.OBJECT_FIELD_NAME_INVALID] : [error(`Invalid field name: "${name}". Fields can only contain characters from A-Z, numbers and underscores and should not start with a number (must pass the regular expression ${String(VALID_FIELD_RE)}).`, HELP_IDS.OBJECT_FIELD_NAME_INVALID)];
}
function validateField(field, _visitorContext) {
	if (!(0, import_isPlainObject.default)(field)) return [error(`Incorrect type for field definition - should be an object, saw ${(0, import_object_inspect.default)(field)}`, HELP_IDS.OBJECT_FIELD_DEFINITION_INVALID_TYPE)];
	const problems = [];
	return problems.push(..."name" in field ? validateFieldName(field.name) : [error("Missing field name", HELP_IDS.OBJECT_FIELD_NAME_INVALID)]), problems.push(...validateComponent(field)), problems;
}
function getDuplicateFields(array2) {
	const dupes = {};
	return array2.forEach((field) => {
		dupes[field.name] || (dupes[field.name] = []), dupes[field.name].push(field);
	}), Object.keys(dupes).map((fieldName) => dupes[fieldName].length > 1 ? dupes[fieldName] : null).filter(Boolean);
}
function validateFields(fields, options = { allowEmpty: !1 }) {
	const problems = [];
	if (!Array.isArray(fields)) return [error(`The "fields" property must be an array of fields. Instead saw "${typeof fields}"`, HELP_IDS.OBJECT_FIELDS_INVALID)];
	getDuplicateFields(fields.filter((field) => typeof field.name == "string")).forEach((dupes) => {
		problems.push(error(`Found ${dupes.length} fields with name "${dupes[0].name}" in object`, HELP_IDS.OBJECT_FIELD_NOT_UNIQUE));
	}), fields.length === 0 && !options.allowEmpty && problems.push(error("Object should have at least one field", HELP_IDS.OBJECT_FIELDS_INVALID));
	const standaloneBlockFields = fields.filter((field) => field.type === "block").map((field) => `"${field.name}"`);
	if (standaloneBlockFields.length > 0) {
		const fmtFields = standaloneBlockFields.join(", ");
		problems.push(error(`Invalid standalone block field(s) ${fmtFields}. Block content must be defined as an array of blocks`, HELP_IDS.STANDALONE_BLOCK_TYPE));
	}
	return problems;
}
function validatePreview(preview) {
	return (0, import_isPlainObject.default)(preview) ? typeof preview.prepare < "u" && typeof preview.prepare != "function" ? [error(`The "preview.prepare" property must be a function, instead saw "${typeof preview.prepare}"`)] : preview.select ? (0, import_isPlainObject.default)(preview.select) ? Object.keys(preview.select).reduce((errs, key) => typeof preview.select[key] == "string" ? errs : errs.concat(error(`The key "${key}" of "preview.select" must be a string, instead saw "${typeof preview.select[key]}"`)), []) : [error(`The "preview.select" property must be an object, instead saw "${typeof preview.prepare}"`)] : [] : [error(`The "preview" property must be an object, instead saw "${typeof preview}"`)];
}
var object = (typeDef, visitorContext) => {
	let problems = validateFields(typeDef.fields), preview = typeDef.preview;
	if (preview) {
		const previewErrors = validatePreview(typeDef.preview);
		problems = problems.concat(previewErrors), preview = previewErrors.some((err) => err.severity === "error") ? {} : preview;
	}
	return typeDef.type !== "document" && typeDef.type !== "object" && typeof typeDef.initialValue < "u" && problems.push(error("The \"initialValue\" property is currently only supported for document & object types.")), {
		...typeDef,
		preview,
		fields: (Array.isArray(typeDef.fields) ? typeDef.fields : []).map((field, index) => {
			const { name, ...fieldTypeDef } = field, { _problems, ...fieldType } = visitorContext.visit(fieldTypeDef, index);
			return {
				name,
				...fieldType,
				_problems: validateField(field).concat(_problems || [])
			};
		}),
		_problems: problems
	};
};
var documentVisitor = (typeDefinition, visitorContext) => {
	const typeDef = object(typeDefinition, visitorContext), { initialValue, initialValues } = typeDef;
	return typeof initialValue < "u" && !(0, import_isPlainObject.default)(initialValue) && typeof initialValue != "function" && typeDef._problems.push(error("The \"initialValue\" property must be either a plain object or a function")), typeof initialValues < "u" && typeDef._problems.push(error("Found property \"initialValues\" - did you mean \"initialValue\"?")), typeDef;
};
var file = (typeDef, visitorContext) => {
	const problems = [], fields = typeDef.fields;
	fields && problems.push(...validateFields(fields, { allowEmpty: !0 }));
	const invalidFieldNames = Array.isArray(fields) ? fields?.filter((field) => field.name === "asset") : [];
	return typeDef.options && typeof typeDef.options.metadata < "u" && !Array.isArray(typeDef.options.metadata) ? problems.push(error("Invalid type for file `metadata` field - must be an array of strings", HELP_IDS.ASSET_METADATA_FIELD_INVALID)) : invalidFieldNames.length > 0 && problems.push(error("The name `asset` is not a valid field name for type `file`.")), {
		...typeDef,
		fields: (Array.isArray(fields) ? fields : []).map((field, index) => {
			const { name, ...fieldTypeDef } = field, { _problems, ...fieldType } = visitorContext.visit(fieldTypeDef, index);
			return {
				name,
				...fieldType,
				_problems: validateField(field).concat(_problems || [])
			};
		}),
		_problems: problems
	};
};
function normalizeToProp$1(typeDef) {
	return Array.isArray(typeDef.to) ? typeDef.to : typeDef.to ? [typeDef.to] : [];
}
function isValidResourceType(resourceType) {
	return resourceType ? resourceType != "media-library" && resourceType != "dataset" ? "The resource type must be either \"media-library\" or \"dataset\"" : !0 : "The resource type must be a non-empty string";
}
function isValidResourceId(resourceType, resourceId) {
	return resourceId ? resourceType === "dataset" ? resourceId.split(".").length !== 2 ? "The resource ID for a dataset reference must be on the form \"<projectId>.<datasetName>\"" : !0 : resourceType === "media-library" ? !0 : `Cannot validate resource ID for resource type: ${resourceType}` : "The resource ID must be a non-empty string";
}
var globalDocumentReference = (typeDef, visitorContext) => {
	const isValidTo = Array.isArray(typeDef.to) || (0, import_isPlainObject.default)(typeDef.to), normalizedTo = normalizeToProp$1(typeDef), problems = (0, import_flatten.default)([isValidTo ? getDupes(normalizedTo, (t) => `${t.name};${t.type}`).map((dupes) => error(`Found ${dupes.length} members with same type, but not unique names "${dupes[0].type}" in reference. This makes it impossible to tell their values apart and you should consider naming them`, HELP_IDS.GLOBAL_DOCUMENT_REFERENCE_INVALID)) : error("The global document reference type is missing or having an invalid value for the required \"to\" property. It should be an array of accepted types.", HELP_IDS.GLOBAL_DOCUMENT_REFERENCE_INVALID)]);
	if (isValidTo && normalizedTo.length === 0 && problems.push(error("The global document reference type should define at least one referenced type. Please check the \"to\" property.", HELP_IDS.GLOBAL_DOCUMENT_REFERENCE_INVALID)), normalizedTo.forEach((crossDatasetTypeDef, index) => {
		crossDatasetTypeDef.type || problems.push(error(`The referenced type at index ${index} must be named. Specify the name of the type you want to create references to.`, HELP_IDS.GLOBAL_DOCUMENT_REFERENCE_INVALID)), (0, import_isPlainObject.default)(crossDatasetTypeDef.preview) || problems.push(error(`Missing required preview config for the referenced type "${crossDatasetTypeDef.type || "<unknown type>"}"`, HELP_IDS.GLOBAL_DOCUMENT_REFERENCE_INVALID));
	}), typeof typeDef.resourceType == "string") {
		const validation = isValidResourceType(typeDef.resourceType);
		validation !== !0 && problems.push(error(validation, HELP_IDS.GLOBAL_DOCUMENT_REFERENCE_INVALID));
	} else problems.push(error("A global document reference must specify a `resourceType`", HELP_IDS.GLOBAL_DOCUMENT_REFERENCE_INVALID));
	if (typeof typeDef.resourceId == "string") {
		const datasetValidation = isValidResourceId(typeDef.resourceType, typeDef.resourceId);
		datasetValidation !== !0 && problems.push(error(datasetValidation, HELP_IDS.GLOBAL_DOCUMENT_REFERENCE_INVALID));
	} else problems.push(error("A global document reference must specify a `resourceId`", HELP_IDS.GLOBAL_DOCUMENT_REFERENCE_INVALID));
	return typeDef.studioUrl && typeof typeDef.studioUrl != "function" && typeof typeDef.studioUrl != "string" && problems.push(error("The \"studioUrl\" property on a global document reference must either be a function taking \"{id, type}\" as argument and returning a studio url, or a string being the base url pointing to a studio.", HELP_IDS.GLOBAL_DOCUMENT_REFERENCE_INVALID)), problems.push(...getOptionErrors$1(typeDef)), {
		...typeDef,
		_problems: problems
	};
};
function getOptionErrors$1(typeDef) {
	const { options } = typeDef, problems = [];
	return problems.push(...["filter", "filterParams"].filter((key) => key in typeDef).map((key) => error(`\`${key}\` is not allowed on a reference type definition - did you mean \`options.${key}\`?`, HELP_IDS.REFERENCE_INVALID_OPTIONS_LOCATION))), options ? (0, import_isPlainObject.default)(options) ? typeof options.filter == "function" && typeof options.filterParams < "u" ? problems.concat(error("`filterParams` cannot be used if `filter` is a function. Either statically define `filter` as a string, or return `params` from the `filter`-function.", HELP_IDS.REFERENCE_INVALID_FILTER_PARAMS_COMBINATION)) : typeof options.filter == "function" || !options.filter && !options.filterParams ? problems : typeof options.filter != "string" ? problems.concat(error(`If set, \`filter\` must be a string. Got ${typeof options.filter}`)) : typeof options.filterParams < "u" && !(0, import_isPlainObject.default)(options.filterParams) ? problems.concat(error("If set, `filterParams` must be an object.")) : options.filterParams ? problems.concat(Object.keys(options.filterParams).filter((key) => key.startsWith("__") || key.startsWith("$")).map((key) => error(`Filter parameter cannot be prefixed with "$" or "__". Got ${key}".`))) : problems : problems.concat(error("The reference type expects `options` to be an object", HELP_IDS.REFERENCE_INVALID_OPTIONS)) : problems;
}
var autoMeta = [
	"dimensions",
	"hasAlpha",
	"isOpaque"
];
var image = (typeDef, visitorContext) => {
	const problems = [], fields = typeDef.fields;
	fields && problems.push(...validateFields(fields, { allowEmpty: !0 }));
	let options = typeDef.options;
	const metadata = options?.metadata, superfluousMeta = Array.isArray(metadata) ? metadata.filter((meta) => autoMeta.includes(meta)) : [], invalidFieldNames = [
		"asset",
		"hotspot",
		"crop"
	], fieldsWithInvalidName = Array.isArray(fields) ? fields?.filter((field) => invalidFieldNames.includes(field.name)) : [];
	return typeof metadata < "u" && !Array.isArray(metadata) ? problems.push(error("Invalid type for image `metadata` field - must be an array of strings", HELP_IDS.ASSET_METADATA_FIELD_INVALID)) : superfluousMeta.length > 0 ? (problems.push(warning(`Image \`metadata\` field contains superfluous properties (they are always included): ${superfluousMeta.join(", ")}`)), options = {
		...options,
		metadata: metadata.filter((meta) => !autoMeta.includes(meta))
	}) : fieldsWithInvalidName.length > 0 && problems.push(error(`The names \`${invalidFieldNames.join("`, `")}\` are invalid field names for type \`image\`.`)), {
		...typeDef,
		options,
		fields: (Array.isArray(fields) ? fields : []).map((field, index) => {
			const { name, ...fieldTypeDef } = field, { _problems, ...fieldType } = visitorContext.visit(fieldTypeDef, index);
			return {
				name,
				...fieldType,
				_problems: validateField(field).concat(_problems || [])
			};
		}),
		_problems: problems
	};
};
function normalizeToProp(typeDef) {
	return Array.isArray(typeDef.to) ? typeDef.to : typeDef.to ? [typeDef.to] : typeDef.to;
}
var reference = (typeDef, visitorContext) => {
	const isValidTo = Array.isArray(typeDef.to) || (0, import_isPlainObject.default)(typeDef.to), normalizedTo = normalizeToProp(typeDef), problems = (0, import_flatten.default)([isValidTo ? getDupes(normalizedTo, (t) => `${t.name};${t.type}`).map((dupes) => error(`Found ${dupes.length} members with same type, but not unique names "${dupes[0].type}" in reference. This makes it impossible to tell their values apart and you should consider naming them`, HELP_IDS.REFERENCE_TO_INVALID)) : error("The reference type is missing or having an invalid value for the required \"to\" property. It should be an array of accepted types.", HELP_IDS.REFERENCE_TO_INVALID)]);
	return isValidTo && normalizedTo.length === 0 && problems.push(error("The reference type should define at least one accepted type. Please check the \"to\" property.", HELP_IDS.REFERENCE_TO_INVALID)), problems.push(...getOptionErrors(typeDef)), {
		...typeDef,
		to: (isValidTo ? normalizedTo : []).map(visitorContext.visit),
		_problems: problems
	};
};
function getOptionErrors(typeDef) {
	const { options } = typeDef, problems = [];
	return problems.push(...["filter", "filterParams"].filter((key) => key in typeDef).map((key) => error(`\`${key}\` is not allowed on a reference type definition - did you mean \`options.${key}\`?`, HELP_IDS.REFERENCE_INVALID_OPTIONS_LOCATION))), options ? (0, import_isPlainObject.default)(options) ? typeof options.filter == "function" && typeof options.filterParams < "u" ? problems.concat(error("`filterParams` cannot be used if `filter` is a function. Either statically define `filter` as a string, or return `params` from the `filter`-function.", HELP_IDS.REFERENCE_INVALID_FILTER_PARAMS_COMBINATION)) : typeof options.filter == "function" || !options.filter && !options.filterParams ? problems : typeof options.filter != "string" ? problems.concat(error(`If set, \`filter\` must be a string. Got ${typeof options.filter}`)) : typeof options.filterParams < "u" && !(0, import_isPlainObject.default)(options.filterParams) ? problems.concat(error("If set, `filterParams` must be an object.")) : options.filterParams ? problems.concat(Object.keys(options.filterParams).filter((key) => key.startsWith("__") || key.startsWith("$")).map((key) => error(`Filter parameter cannot be prefixed with "$" or "__". Got ${key}".`))) : problems : problems.concat(error("The reference type expects `options` to be an object", HELP_IDS.REFERENCE_INVALID_OPTIONS)) : problems;
}
var rootType = (typeDef, visitorContext) => {
	const hasName = !!typeDef.name;
	if (!hasName && Object.keys(typeDef).length === 1) return {
		...typeDef,
		_problems: [error("Invalid/undefined type declaration, check declaration or the import/export of the schema type.", HELP_IDS.TYPE_INVALID)]
	};
	const problems = [];
	return looksLikeEsmModule(typeDef) ? problems.push(error("Type appears to be an ES6 module imported through CommonJS require - use an import statement or access the `.default` property", HELP_IDS.TYPE_IS_ESM_MODULE)) : hasName ? visitorContext.isReserved(typeDef.name) && problems.push(error(`Invalid type name: "${typeDef.name}" is a reserved name.`, HELP_IDS.TYPE_NAME_RESERVED)) : problems.push(error("Missing type name", HELP_IDS.TYPE_MISSING_NAME)), visitorContext.isDuplicate(typeDef.name) && problems.push(error(`Invalid type name: A type with name "${typeDef.name}" is already defined in the schema.`)), problems.push(...validateComponent(typeDef)), "title" in typeDef && typeof typeDef.title != "string" && problems.push(warning("Type title is not a string.", HELP_IDS.TYPE_TITLE_INVALID)), {
		...typeDef,
		_problems: problems
	};
};
function looksLikeEsmModule(typeDef) {
	return !typeDef.name && typeDef.default && (typeDef.default.name || typeDef.default.title);
}
var slug = (typeDef, visitorContext) => {
	const problems = [];
	return typeDef.options && typeDef.options.slugifyFn && (problems.push(warning("Heads up! The \"slugifyFn\" option has been renamed to \"slugify\".", HELP_IDS.SLUG_SLUGIFY_FN_RENAMED)), typeDef.options.slugify = typeDef.options.slugifyFn), {
		...typeDef,
		_problems: problems
	};
};
var typeVisitors = {
	array,
	object,
	slug,
	file,
	image,
	block: validateBlockType,
	document: documentVisitor,
	reference,
	crossDatasetReference,
	globalDocumentReference
};
var getNoopVisitor = (visitorContext) => (schemaDef) => ({
	name: `<unnamed_type_@_index_${visitorContext.index}>`,
	...schemaDef,
	_problems: []
});
function combine(...visitors) {
	return (schemaType, visitorContext) => visitors.reduce((result, visitor) => {
		const res = visitor(result, visitorContext);
		return {
			...res,
			_problems: result._problems.concat(res._problems)
		};
	}, {
		_problems: [],
		...schemaType
	});
}
function validateSchema(schemaTypes, { transformTypeVisitors = (visitors) => visitors, transformCommonVisitors = (visitors) => visitors } = {}) {
	return traverseSanitySchema(schemaTypes, (schemaDef, visitorContext) => {
		const typeVisitor = schemaDef && schemaDef.type && transformTypeVisitors(typeVisitors)[schemaDef.type] || getNoopVisitor(visitorContext), commonVisitors = transformCommonVisitors([common]);
		return visitorContext.isRoot ? combine(rootType, ...commonVisitors, typeVisitor)(schemaDef, visitorContext) : combine(...commonVisitors, typeVisitor)(schemaDef, visitorContext);
	});
}
Schema$1.compile({
	name: "studio",
	types: builtinTypes
});
//#endregion
//#region node_modules/@portabletext/schema/dist/index.js
function isBlockOfMember(member) {
	return member.type === "block";
}
function isInlineObjectOfMember(member) {
	return member.type === "object";
}
function compileOfMember(member, inheritance) {
	return isBlockOfMember(member) ? compileBlockOfMember(member, inheritance) : isInlineObjectOfMember(member) ? compileInlineObjectOfMember(member, inheritance) : member;
}
/**
* Resolve the five sub-schema properties of a block of-member (`styles`,
* `decorators`, `annotations`, `lists`, `inlineObjects`): each is the
* member's own declaration (overriding) when present, or the inherited
* value when absent. The result is also threaded as the inheritance for the
* member's sibling containers (see `compileField`), so a nested container
* inherits the block of the container that encloses it rather than the root.
*/
function resolveBlockInheritance(member, inheritance) {
	return {
		styles: member.styles ? member.styles.map((style) => ({
			...style,
			value: style.name
		})) : inheritance.styles,
		decorators: member.decorators ? member.decorators.map((decorator) => ({
			...decorator,
			value: decorator.name
		})) : inheritance.decorators,
		annotations: member.annotations ? member.annotations.map((annotation) => ({
			...annotation,
			fields: annotation.fields?.map((field) => compileField(field, inheritance)) ?? []
		})) : inheritance.annotations,
		lists: member.lists ? member.lists.map((list) => ({
			...list,
			value: list.name
		})) : inheritance.lists,
		inlineObjects: member.inlineObjects ? member.inlineObjects.map((inlineObject) => ({
			...inlineObject,
			fields: inlineObject.fields?.map((field) => compileField(field, inheritance)) ?? []
		})) : inheritance.inlineObjects
	};
}
function compileBlockOfMember(member, inheritance) {
	return {
		...member,
		...resolveBlockInheritance(member, inheritance)
	};
}
function compileInlineObjectOfMember(member, inheritance) {
	return {
		...member,
		fields: member.fields.map((field) => compileField(field, inheritance))
	};
}
function compileField(field, inheritance) {
	if (field.type === "array" && field.of) {
		let blockMember = field.of.find(isBlockOfMember), childInheritance = blockMember ? resolveBlockInheritance(blockMember, inheritance) : inheritance;
		return {
			...field,
			of: field.of.map((member) => member === blockMember ? {
				...member,
				...childInheritance
			} : compileOfMember(member, childInheritance))
		};
	}
	return field;
}
function compileBaseDefinitionWithValue(definition) {
	return {
		...definition,
		value: definition.name
	};
}
/**
* @public
*/
function compileSchema(definition) {
	let userStyles = (definition.styles ?? []).map(compileBaseDefinitionWithValue), styles = userStyles.some((style) => style.value === "normal") ? userStyles : [{
		value: "normal",
		name: "normal",
		title: "Normal"
	}, ...userStyles], lists = (definition.lists ?? []).map(compileBaseDefinitionWithValue), decorators = (definition.decorators ?? []).map(compileBaseDefinitionWithValue), inheritance = {
		styles,
		decorators,
		annotations: (definition.annotations ?? []).map((annotation) => ({
			...annotation,
			fields: annotation.fields ?? []
		})),
		lists,
		inlineObjects: (definition.inlineObjects ?? []).map((inlineObject) => ({
			...inlineObject,
			fields: inlineObject.fields ?? []
		}))
	}, blockFields = [];
	if (definition.block?.fields) for (let field of definition.block.fields) {
		if (field.name === "_type" || field.name === "_key" || field.name === "children" || field.name === "markDefs" || field.name === "style" || field.name === "listItem" || field.name === "level") {
			console.warn(`"${field.name}" is a reserved field name on Portable Text blocks`);
			continue;
		}
		blockFields.push(compileField(field, inheritance));
	}
	return {
		block: {
			name: definition.block?.name ?? "block",
			...blockFields.length > 0 ? { fields: blockFields } : {}
		},
		span: { name: "span" },
		styles,
		lists,
		decorators,
		annotations: (definition.annotations ?? []).map((annotation) => ({
			...annotation,
			fields: annotation.fields?.map((field) => compileField(field, inheritance)) ?? []
		})),
		blockObjects: (definition.blockObjects ?? []).map((blockObject) => ({
			...blockObject,
			fields: blockObject.fields?.map((field) => compileField(field, inheritance)) ?? []
		})),
		inlineObjects: (definition.inlineObjects ?? []).map((inlineObject) => ({
			...inlineObject,
			fields: inlineObject.fields?.map((field) => compileField(field, inheritance)) ?? []
		}))
	};
}
/**
* @public
* A helper wrapper that adds editor support, such as autocomplete and type checking, for a schema definition.
* @example
* ```ts
* import { defineSchema } from '@portabletext/editor'
*
* const schemaDefinition = defineSchema({
*  decorators: [{name: 'strong'}, {name: 'em'}, {name: 'underline'}],
*  annotations: [{name: 'link'}],
*  styles: [
*    {name: 'normal'},
*    {name: 'h1'},
*    {name: 'h2'},
*    {name: 'h3'},
*    {name: 'blockquote'},
*  ],
*  lists: [],
*  inlineObjects: [],
*  blockObjects: [],
* }
* ```
*/
function defineSchema(definition) {
	return definition;
}
/**
* @public
*/
function isTypedObject(object) {
	return isRecord$1(object) && typeof object._type == "string";
}
function isRecord$1(value) {
	return !!value && (typeof value == "object" || typeof value == "function");
}
/**
* @public
*/
function isTextBlock(context, block) {
	return !(!isTypedObject(block) || block._type !== context.schema.block.name || !Array.isArray(block.children));
}
/**
* @public
*/
function isSpan(context, child) {
	return !(!isTypedObject(child) || child._type !== context.schema.span.name || typeof child.text != "string");
}
//#endregion
//#region node_modules/@sanity/schema/lib/index.js
var Schema = Schema$1;
//#endregion
//#region node_modules/@portabletext/sanity-bridge/dist/index.js
function createPortableTextMemberSchemaTypes(portableTextType) {
	if (!portableTextType) throw new Error("Parameter 'portabletextType' missing (required)");
	const blockType = portableTextType.of?.find(findBlockType);
	if (!blockType) throw new Error("Block type is not defined in this schema (required)");
	const childrenField = blockType.fields?.find((field) => field.name === "children");
	if (!childrenField) throw new Error("Children field for block type found in schema (required)");
	const ofType = childrenField.type.of;
	if (!ofType) throw new Error("Valid types for block children not found in schema (required)");
	const spanType = ofType.find((memberType) => memberType.name === "span");
	if (!spanType) throw new Error("Span type not found in schema (required)");
	const inlineObjectTypes = ofType.filter((memberType) => memberType.name !== "span") || [], blockObjectTypes = portableTextType.of?.filter((field) => field.name !== blockType.name) || [];
	return {
		styles: resolveEnabledStyles(blockType),
		decorators: resolveEnabledDecorators(spanType),
		lists: resolveEnabledListItems(blockType),
		block: blockType,
		span: spanType,
		portableText: portableTextType,
		inlineObjects: inlineObjectTypes,
		blockObjects: blockObjectTypes,
		annotations: spanType.annotations
	};
}
function resolveEnabledStyles(blockType) {
	const styleField = blockType.fields?.find((btField) => btField.name === "style");
	if (!styleField) throw new Error("A field with name 'style' is not defined in the block type (required).");
	const textStyles = styleField.type.options?.list && styleField.type.options.list?.filter((style) => style.value);
	if (!textStyles || textStyles.length === 0) throw new Error("The style fields need at least one style defined. I.e: {title: 'Normal', value: 'normal'}.");
	return textStyles;
}
function resolveEnabledDecorators(spanType) {
	return spanType.decorators;
}
function resolveEnabledListItems(blockType) {
	const listField = blockType.fields?.find((btField) => btField.name === "listItem");
	if (!listField) throw new Error("A field with name 'listItem' is not defined in the block type (required).");
	const listItems = listField.type.options?.list && listField.type.options.list.filter((list) => list.value);
	if (!listItems) throw new Error("The list field need at least to be an empty array");
	return listItems;
}
function findBlockType(type) {
	return type.type ? findBlockType(type.type) : type.name === "block" ? type : null;
}
function portableTextMemberSchemaTypesToSchema(schema) {
	return {
		annotations: schema.annotations.map((annotation) => ({
			name: annotation.name,
			fields: annotation.fields.map((field) => ({
				name: field.name,
				type: field.type.jsonType,
				title: field.type.title
			})),
			title: annotation.title
		})),
		block: { name: schema.block.name },
		blockObjects: schema.blockObjects.map((blockObject) => ({
			name: blockObject.name,
			fields: blockObject.fields.map((field) => ({
				name: field.name,
				type: field.type.jsonType,
				title: field.type.title
			})),
			title: blockObject.title
		})),
		decorators: schema.decorators.map((decorator) => ({
			name: decorator.value,
			title: decorator.title,
			value: decorator.value
		})),
		inlineObjects: schema.inlineObjects.map((inlineObject) => ({
			name: inlineObject.name,
			fields: inlineObject.fields.map((field) => ({
				name: field.name,
				type: field.type.jsonType,
				title: field.type.title
			})),
			title: inlineObject.title
		})),
		span: { name: schema.span.name },
		styles: schema.styles.map((style) => ({
			name: style.value,
			title: style.title,
			value: style.value
		})),
		lists: schema.lists.map((list) => ({
			name: list.value,
			title: list.title,
			value: list.value
		}))
	};
}
function sanitySchemaToPortableTextSchema(sanitySchema) {
	return portableTextMemberSchemaTypesToSchema(createPortableTextMemberSchemaTypes(sanitySchema.hasOwnProperty("jsonType") ? sanitySchema : compileType(sanitySchema)));
}
function compileType(rawType) {
	return Schema.compile({
		name: "blockTypeSchema",
		types: [rawType, ...builtinTypes]
	}).get(rawType.name);
}
var keyGenerator$1 = () => randomKey$1(12);
var getByteHexTable = /* @__PURE__ */ (() => {
	let table;
	return () => {
		if (table) return table;
		table = [];
		for (let i = 0; i < 256; ++i) table[i] = (i + 256).toString(16).slice(1);
		return table;
	};
})();
function whatwgRNG$1(length = 16) {
	const rnds8 = new Uint8Array(length);
	return crypto.getRandomValues(rnds8), rnds8;
}
function randomKey$1(length) {
	const table = getByteHexTable();
	return whatwgRNG$1(length).reduce((str, n) => str + table[n], "").slice(0, length);
}
function startCase(str) {
	return str.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/[_-]+/g, " ").trim().split(/\s+/).filter(Boolean).map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}
var temporaryImageBlockObjectName = `tmp-${keyGenerator$1()}-image`;
var temporaryUrlBlockObjectName = `tmp-${keyGenerator$1()}-url`;
var temporaryImageInlineObjectName = `tmp-${keyGenerator$1()}-image`;
var temporaryUrlInlineObjectName = `tmp-${keyGenerator$1()}-url`;
var temporaryBlockObjectNames = {
	image: temporaryImageBlockObjectName,
	url: temporaryUrlBlockObjectName
};
var temporaryInlineObjectNames = {
	image: temporaryImageInlineObjectName,
	url: temporaryUrlInlineObjectName
};
var blockObjectNames = {
	[temporaryImageBlockObjectName]: "image",
	[temporaryUrlBlockObjectName]: "url"
};
var inlineObjectNames = {
	[temporaryImageInlineObjectName]: "image",
	[temporaryUrlInlineObjectName]: "url"
};
var defaultObjectTitles = {
	image: "Image",
	url: "URL"
};
function compileSchemaDefinitionToPortableTextMemberSchemaTypes(definition) {
	const blockObjects = definition?.blockObjects?.map((blockObject) => defineType({
		type: "object",
		name: temporaryBlockObjectNames[blockObject.name] ?? blockObject.name,
		title: blockObject.title === void 0 ? defaultObjectTitles[blockObject.name] : blockObject.title,
		fields: blockObject.fields?.map((field) => ({
			name: field.name,
			type: field.type,
			title: field.title ?? startCase(field.name)
		})) ?? []
	})) ?? [], inlineObjects = definition?.inlineObjects?.map((inlineObject) => defineType({
		type: "object",
		name: temporaryInlineObjectNames[inlineObject.name] ?? inlineObject.name,
		title: inlineObject.title === void 0 ? defaultObjectTitles[inlineObject.name] : inlineObject.title,
		fields: inlineObject.fields?.map((field) => ({
			name: field.name,
			type: field.type,
			title: field.title ?? startCase(field.name)
		})) ?? []
	})) ?? [], portableTextSchema = defineField({
		type: "array",
		name: "portable-text",
		of: [...blockObjects.map((blockObject) => ({ type: blockObject.name })), {
			type: "block",
			name: "block",
			of: inlineObjects.map((inlineObject) => ({ type: inlineObject.name })),
			marks: {
				decorators: definition?.decorators?.map((decorator) => ({
					title: decorator.title ?? startCase(decorator.name),
					value: decorator.name
				})) ?? [],
				annotations: definition?.annotations?.map((annotation) => ({
					name: annotation.name,
					type: "object",
					title: annotation.title,
					fields: annotation.fields?.map((field) => ({
						name: field.name,
						title: field.title ?? startCase(field.name),
						type: field.type
					})) ?? []
				})) ?? []
			},
			lists: definition?.lists?.map((list) => ({
				value: list.name,
				title: list.title ?? startCase(list.name)
			})) ?? [],
			styles: definition?.styles?.map((style) => ({
				value: style.name,
				title: style.title ?? startCase(style.name)
			})) ?? []
		}]
	}), pteSchema = createPortableTextMemberSchemaTypes(Schema.compile({ types: [
		portableTextSchema,
		...blockObjects,
		...inlineObjects
	] }).get("portable-text"));
	return {
		...pteSchema,
		portableText: {
			...pteSchema.portableText,
			of: pteSchema.portableText.of.map((schemaType) => {
				if (!isObjectSchemaType(schemaType)) return schemaType;
				schemaType.name = blockObjectNames[schemaType.name] ?? schemaType.name;
				for (const field of schemaType.fields) if (!(field.name !== "children" || !isArraySchemaType(field.type))) for (const ofSchemaType of field.type.of) {
					const nameMapping2 = inlineObjectNames[ofSchemaType.name];
					nameMapping2 && (ofSchemaType.name = nameMapping2);
				}
				return schemaType;
			})
		},
		blockObjects: pteSchema.blockObjects.map((blockObject) => blockObjectNames[blockObject.name] !== void 0 ? {
			...blockObject,
			name: blockObjectNames[blockObject.name],
			type: {
				...blockObject.type,
				name: blockObjectNames[blockObject.name]
			}
		} : blockObject),
		inlineObjects: pteSchema.inlineObjects.map((inlineObject) => inlineObjectNames[inlineObject.name] !== void 0 ? {
			...inlineObject,
			name: inlineObjectNames[inlineObject.name]
		} : inlineObject)
	};
}
//#endregion
//#region node_modules/@portabletext/block-tools/lib/_chunks-es/helpers.js
var objectToString = Object.prototype.toString;
function resolveJsType(val) {
	switch (objectToString.call(val)) {
		case "[object Function]": return "function";
		case "[object Date]": return "date";
		case "[object RegExp]": return "regexp";
		case "[object Arguments]": return "arguments";
		case "[object Array]": return "array";
		case "[object String]": return "string";
	}
	return val === null ? "null" : val === void 0 ? "undefined" : val && typeof val == "object" && "nodeType" in val && val.nodeType === 1 ? "element" : val === Object(val) ? "object" : typeof val;
}
function isEqualMarks(a, b) {
	if (!a || !b) return a === b;
	if (a.length !== b.length) return !1;
	for (let index = 0; index < a.length; index++) if (a[index] !== b[index]) return !1;
	return !0;
}
function isDeepEqual(data, other) {
	return isDeepEqualImplementation(data, other);
}
function isDeepEqualImplementation(data, other) {
	if (data === other || Object.is(data, other)) return !0;
	if (typeof data != "object" || typeof other != "object" || data === null || other === null || Object.getPrototypeOf(data) !== Object.getPrototypeOf(other)) return !1;
	if (Array.isArray(data)) return isDeepEqualArrays(data, other);
	if (data instanceof Map) return isDeepEqualMaps(data, other);
	if (data instanceof Set) return isDeepEqualSets(data, other);
	if (data instanceof Date) return data.getTime() === other.getTime();
	if (data instanceof RegExp) return data.toString() === other.toString();
	if (Object.keys(data).length !== Object.keys(other).length) return !1;
	for (const [key, value] of Object.entries(data)) if (!(key in other) || !isDeepEqualImplementation(value, other[key])) return !1;
	return !0;
}
function isDeepEqualArrays(data, other) {
	if (data.length !== other.length) return !1;
	for (const [index, item] of data.entries()) if (!isDeepEqualImplementation(item, other[index])) return !1;
	return !0;
}
function isDeepEqualMaps(data, other) {
	if (data.size !== other.size) return !1;
	for (const [key, value] of data.entries()) if (!other.has(key) || !isDeepEqualImplementation(value, other.get(key))) return !1;
	return !0;
}
function isDeepEqualSets(data, other) {
	if (data.size !== other.size) return !1;
	const otherCopy = [...other];
	for (const dataItem of data) {
		let isFound = !1;
		for (const [index, otherItem] of otherCopy.entries()) if (isDeepEqualImplementation(dataItem, otherItem)) {
			isFound = !0, otherCopy.splice(index, 1);
			break;
		}
		if (!isFound) return !1;
	}
	return !0;
}
function isArbitraryTypedObject(object) {
	return isRecord(object) && typeof object._type == "string";
}
function isRecord(value) {
	return !!value && (typeof value == "object" || typeof value == "function");
}
function flattenNestedBlocks(context, blocks) {
	return blocks.flatMap((block) => {
		if (isBlockContainer(block)) return flattenNestedBlocks(context, [block.block]);
		if (isTextBlock(context, block)) {
			const hasBlockObjects = block.children.some((child) => context.schema.blockObjects.some((blockObject) => blockObject.name === child._type)), hasBlocks = block.children.some((child) => child._type === "__block" || child._type === "block");
			if (hasBlockObjects || hasBlocks) {
				const splitChildren = getSplitChildren(context, block);
				return splitChildren.length === 1 && splitChildren[0].type === "children" && isDeepEqual(splitChildren[0].children, block.children) ? [block] : splitChildren.flatMap((slice) => slice.type === "block object" ? [slice.block] : slice.type === "block" ? flattenNestedBlocks(context, [slice.block]) : slice.children.length > 0 ? slice.children.every((child) => isSpan(context, child) && child.text.trim() === "") ? [] : flattenNestedBlocks(context, [{
					...block,
					children: slice.children
				}]) : []);
			}
			return [block];
		}
		return [block];
	});
}
function isBlockContainer(block) {
	return block._type === "__block" && isArbitraryTypedObject(block.block);
}
function getSplitChildren(context, block) {
	return block.children.reduce((slices, child) => {
		const knownInlineObject = context.schema.inlineObjects.some((inlineObject) => inlineObject.name === child._type), knownBlockObject = context.schema.blockObjects.some((blockObject) => blockObject.name === child._type), lastSlice = slices.pop();
		return !isSpan(context, child) && !knownInlineObject && knownBlockObject ? [
			...slices,
			...lastSlice ? [lastSlice] : [],
			{
				type: "block object",
				block: child
			}
		] : child._type === "__block" ? [
			...slices,
			...lastSlice ? [lastSlice] : [],
			{
				type: "block object",
				block: child.block
			}
		] : child._type === "block" ? [
			...slices,
			...lastSlice ? [lastSlice] : [],
			{
				type: "block",
				block: child
			}
		] : lastSlice && lastSlice.type === "children" ? [...slices, {
			type: "children",
			children: [...lastSlice.children, child]
		}] : [
			...slices,
			...lastSlice ? [lastSlice] : [],
			{
				type: "children",
				children: [child]
			}
		];
	}, []);
}
var PRESERVE_WHITESPACE_TAGS = [
	"pre",
	"textarea",
	"code"
];
var BLOCK_DEFAULT_STYLE = "normal";
var DEFAULT_BLOCK = Object.freeze({
	_type: "block",
	markDefs: [],
	style: BLOCK_DEFAULT_STYLE
});
var DEFAULT_SPAN = Object.freeze({
	_type: "span",
	marks: []
});
var HTML_BLOCK_TAGS = {
	p: DEFAULT_BLOCK,
	blockquote: {
		...DEFAULT_BLOCK,
		style: "blockquote"
	}
};
var HTML_SPAN_TAGS = { span: { object: "text" } };
var HTML_LIST_CONTAINER_TAGS = {
	ol: { object: null },
	ul: { object: null }
};
var HTML_HEADER_TAGS = {
	h1: {
		...DEFAULT_BLOCK,
		style: "h1"
	},
	h2: {
		...DEFAULT_BLOCK,
		style: "h2"
	},
	h3: {
		...DEFAULT_BLOCK,
		style: "h3"
	},
	h4: {
		...DEFAULT_BLOCK,
		style: "h4"
	},
	h5: {
		...DEFAULT_BLOCK,
		style: "h5"
	},
	h6: {
		...DEFAULT_BLOCK,
		style: "h6"
	}
};
var HTML_MISC_TAGS = { br: {
	...DEFAULT_BLOCK,
	style: BLOCK_DEFAULT_STYLE
} };
var HTML_DECORATOR_TAGS = {
	b: "strong",
	strong: "strong",
	i: "em",
	em: "em",
	u: "underline",
	s: "strike-through",
	strike: "strike-through",
	del: "strike-through",
	code: "code",
	sup: "sup",
	sub: "sub",
	ins: "ins",
	mark: "mark",
	small: "small"
};
var HTML_LIST_ITEM_TAGS = { li: {
	...DEFAULT_BLOCK,
	style: BLOCK_DEFAULT_STYLE,
	level: 1,
	listItem: "bullet"
} };
var ELEMENT_MAP = {
	...HTML_BLOCK_TAGS,
	...HTML_SPAN_TAGS,
	...HTML_LIST_CONTAINER_TAGS,
	...HTML_LIST_ITEM_TAGS,
	...HTML_HEADER_TAGS,
	...HTML_MISC_TAGS
};
[...new Set(Object.values(ELEMENT_MAP).filter((tag) => "style" in tag).map((tag) => tag.style))];
[...new Set(Object.values(HTML_DECORATOR_TAGS))];
function tagName(el) {
	if (el && "tagName" in el) return el.tagName.toLowerCase();
}
function defaultParseHtml() {
	if (resolveJsType(DOMParser) === "undefined") throw new Error("The native `DOMParser` global which the `Html` deserializer uses by default is not present in this environment. You must supply the `options.parseHtml` function instead.");
	return (html) => new DOMParser().parseFromString(html, "text/html");
}
function ensureRootIsBlocks(schema, objects) {
	return objects.reduce((blocks, node, i, original) => {
		if (node._type === "block") return blocks.push(node), blocks;
		if (node._type === "__block") return blocks.push(node.block), blocks;
		const lastBlock = blocks[blocks.length - 1];
		if (i > 0 && !isTextBlock({ schema }, original[i - 1]) && isTextBlock({ schema }, lastBlock)) return lastBlock.children.push(node), blocks;
		const block = {
			...DEFAULT_BLOCK,
			children: [node]
		};
		return blocks.push(block), blocks;
	}, []);
}
function isNodeList(node) {
	return Object.prototype.toString.call(node) === "[object NodeList]";
}
function isMinimalSpan(node) {
	return node._type === "span";
}
function isMinimalBlock(node) {
	return node._type === "block";
}
function isPlaceholderDecorator(node) {
	return node._type === "__decorator";
}
function isPlaceholderAnnotation(node) {
	return node._type === "__annotation";
}
function isElement(node) {
	return node.nodeType === 1;
}
//#endregion
//#region node_modules/@portabletext/block-tools/lib/index.js
var l = {
	0: 8203,
	1: 8204,
	2: 8205,
	3: 8290,
	4: 8291,
	5: 8288,
	6: 65279,
	7: 8289,
	8: 119155,
	9: 119156,
	a: 119157,
	b: 119158,
	c: 119159,
	d: 119160,
	e: 119161,
	f: 119162
};
var d = {
	0: 8203,
	1: 8204,
	2: 8205,
	3: 65279
};
var a = {
	0: String.fromCodePoint(d[0]),
	1: String.fromCodePoint(d[1]),
	2: String.fromCodePoint(d[2]),
	3: String.fromCodePoint(d[3])
};
new Array(4).fill(String.fromCodePoint(d[0])).join("");
Object.fromEntries(Object.entries(a).map((t) => [t[1], +t[0]]));
Object.fromEntries(Object.entries(l).map((t) => t.reverse()));
var _ = `${Object.values(l).map((t) => `\\u{${t.toString(16)}}`).join("")}`;
var u = new RegExp(`[${_}]{4,}`, "gu");
function D(t) {
	var e;
	return {
		cleaned: t.replace(u, ""),
		encoded: ((e = t.match(u)) == null ? void 0 : e[0]) || ""
	};
}
function M(t) {
	return t && JSON.parse(D(JSON.stringify(t)).cleaned);
}
function keyGenerator() {
	return randomKey(12);
}
function whatwgRNG(length = 16) {
	const rnds8 = new Uint8Array(length);
	return crypto.getRandomValues(rnds8), rnds8;
}
var byteToHex = [];
for (let i = 0; i < 256; ++i) byteToHex[i] = (i + 256).toString(16).slice(1);
function randomKey(length) {
	return whatwgRNG(length).reduce((str, n) => str + byteToHex[n], "").slice(0, length);
}
function isWordOnlineHtml(html) {
	return /class="(?:TextRun|NormalTextRun)[^"]*SCXW\d+[^"]*BCX\d+/.test(html) || /class="EOP[^"]*SCXW\d+/.test(html);
}
function isWordOnlineTextRun(el) {
	return !isElement(el) || tagName(el) !== "span" ? !1 : el.classList.contains("TextRun") && !el.classList.contains("EOP");
}
function isNormalTextRun(el) {
	return !isElement(el) || tagName(el) !== "span" ? !1 : el.classList.contains("NormalTextRun");
}
function isTextRunSpan(el) {
	return !isElement(el) || tagName(el) !== "span" ? !1 : el.classList.contains("TextRun") && !el.classList.contains("NormalTextRun") && !el.classList.contains("EOP");
}
function isFindHit(el) {
	return !isElement(el) || tagName(el) !== "span" ? !1 : el.classList.contains("FindHit");
}
function isInHeading(el) {
	let current = el;
	for (; current;) {
		if (isElement(current) && tagName(current) === "word-online-block" && /^heading \d$/.test(current.getAttribute("data-parastyle") ?? "")) return !0;
		current = current.parentNode;
	}
	return !1;
}
function isInBlockquote(el) {
	let current = el;
	for (; current;) {
		if (isElement(current) && tagName(current) === "word-online-block" && current.getAttribute("data-parastyle") === "Quote") return !0;
		current = current.parentNode;
	}
	return !1;
}
function hasStrongFormatting(el) {
	const style = el.getAttribute("style") ?? "";
	return el.classList.contains("MacChromeBold") || /font-weight\s*:\s*bold/.test(style);
}
function hasEmphasisFormatting(el) {
	const style = el.getAttribute("style") ?? "";
	return /font-style\s*:\s*italic/.test(style);
}
function hasUnderlineFormatting(el) {
	const style = el.getAttribute("style") ?? "";
	return el.classList.contains("Underlined") || /text-decoration\s*:\s*underline/.test(style);
}
function hasStrikethroughFormatting(el) {
	const style = el.getAttribute("style") ?? "";
	return el.classList.contains("Strikethrough") || /text-decoration\s*:\s*line-through/.test(style);
}
function hasFormatting(el) {
	return hasStrongFormatting(el) || hasEmphasisFormatting(el) || hasUnderlineFormatting(el) || hasStrikethroughFormatting(el);
}
function preprocessWordOnline(html, doc) {
	if (!isWordOnlineHtml(html)) return doc;
	const paragraphs = Array.from(doc.querySelectorAll("p.Paragraph[role=\"heading\"]"));
	for (const paragraph of paragraphs) {
		const ariaLevel = paragraph.getAttribute("aria-level");
		if (ariaLevel) {
			const wrapper = doc.createElement("word-online-block");
			wrapper.setAttribute("data-parastyle", `heading ${ariaLevel}`);
			const parent = paragraph.parentNode;
			if (parent) {
				for (parent.insertBefore(wrapper, paragraph); paragraph.firstChild;) wrapper.appendChild(paragraph.firstChild);
				parent.removeChild(paragraph);
			}
		}
	}
	let child = doc.body.firstChild;
	for (; child;) {
		const next = child.nextSibling;
		if (!isElement(child) || !tagName(child)?.includes("span")) {
			child = next;
			continue;
		}
		const paraStyle = getParaStyle(child);
		if (!paraStyle) {
			child = next;
			continue;
		}
		const group = [child];
		let sibling = next;
		for (; sibling && !(!isElement(sibling) || getParaStyle(sibling) !== paraStyle);) group.push(sibling), sibling = sibling.nextSibling;
		const wrapper = doc.createElement("word-online-block");
		wrapper.setAttribute("data-parastyle", paraStyle), doc.body.insertBefore(wrapper, child);
		for (const span of group) wrapper.appendChild(span);
		child = sibling;
	}
	const textRunSpans = Array.from(doc.body.querySelectorAll("span")).filter(isTextRunSpan);
	for (const textRunSpan of textRunSpans) {
		const normalTextRuns = Array.from(textRunSpan.childNodes).filter(isNormalTextRun);
		for (const normalTextRun of normalTextRuns) {
			let foundNestedSpan = !0;
			for (; foundNestedSpan;) {
				const children = Array.from(normalTextRun.childNodes), nestedSpanIndex = children.findIndex((node) => isElement(node) && tagName(node) === "span" && node.textContent.trim() === "");
				if (nestedSpanIndex === -1) {
					foundNestedSpan = !1;
					break;
				}
				const nestedSpan = children.at(nestedSpanIndex);
				if (!nestedSpan) {
					foundNestedSpan = !1;
					break;
				}
				const spaceText = nestedSpan.textContent?.replace(/\u00a0/g, " ") ?? "", isSpaceAtBeginning = !children.slice(0, nestedSpanIndex).some((n) => n.nodeType === 3);
				if (normalTextRun.removeChild(nestedSpan), isSpaceAtBeginning) {
					const firstTextNode = Array.from(normalTextRun.childNodes).find((n) => n.nodeType === 3);
					if (firstTextNode) firstTextNode.textContent = spaceText + (firstTextNode.textContent || "");
					else {
						const spaceNode = doc.createTextNode(spaceText);
						normalTextRun.insertBefore(spaceNode, normalTextRun.firstChild);
					}
				} else {
					const nextSibling = textRunSpan.nextSibling, currentHasFormatting = hasFormatting(textRunSpan);
					if (nextSibling && isElement(nextSibling) && isTextRunSpan(nextSibling)) {
						const nextHasFormatting = hasFormatting(nextSibling);
						if (currentHasFormatting && !nextHasFormatting) {
							const nextNormalTextRun = Array.from(nextSibling.childNodes).find(isNormalTextRun);
							if (nextNormalTextRun && isElement(nextNormalTextRun)) {
								const firstChild = nextNormalTextRun.firstChild;
								if (firstChild && firstChild.nodeType === 3) firstChild.textContent = spaceText + (firstChild.textContent ?? "");
								else {
									const spaceNode = doc.createTextNode(spaceText);
									nextNormalTextRun.insertBefore(spaceNode, nextNormalTextRun.firstChild);
								}
							}
						} else {
							const lastTextNode = Array.from(normalTextRun.childNodes).find((n) => n.nodeType === 3);
							if (lastTextNode) lastTextNode.textContent = (lastTextNode.textContent ?? "") + spaceText;
							else {
								const spaceNode = doc.createTextNode(spaceText);
								normalTextRun.appendChild(spaceNode);
							}
						}
					} else {
						const lastTextNode = Array.from(normalTextRun.childNodes).find((n) => n.nodeType === 3);
						if (lastTextNode) lastTextNode.textContent = (lastTextNode.textContent ?? "") + spaceText;
						else {
							const spaceNode = doc.createTextNode(spaceText);
							normalTextRun.appendChild(spaceNode);
						}
					}
				}
			}
		}
	}
	return doc;
}
function getParaStyle(element) {
	const directStyle = element.getAttribute("data-ccp-parastyle");
	if (directStyle) return directStyle;
	if (tagName(element) === "span" && element.classList.contains("TextRun")) {
		const normalTextRuns = Array.from(element.querySelectorAll(".NormalTextRun"));
		if (normalTextRuns.length > 0) {
			const firstStyle = normalTextRuns[0].getAttribute("data-ccp-parastyle");
			if (firstStyle && normalTextRuns.every((normalTextRun) => normalTextRun.getAttribute("data-ccp-parastyle") === firstStyle)) return firstStyle;
		}
	}
}
var _XPathResult = {
	BOOLEAN_TYPE: 3,
	ORDERED_NODE_ITERATOR_TYPE: 5,
	UNORDERED_NODE_SNAPSHOT_TYPE: 6
};
function preprocessGDocs(_html, doc) {
	let gDocsRootOrSiblingNode = doc.evaluate("//*[@id and contains(@id, \"docs-internal-guid\")]", doc, null, _XPathResult.ORDERED_NODE_ITERATOR_TYPE, null).iterateNext();
	if (gDocsRootOrSiblingNode) {
		const isWrappedRootTag = tagName(gDocsRootOrSiblingNode) === "b";
		isWrappedRootTag || (gDocsRootOrSiblingNode = doc.body);
		const childNodes = doc.evaluate("//*", doc, null, _XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
		for (let i = childNodes.snapshotLength - 1; i >= 0; i--) {
			const elm = childNodes.snapshotItem(i);
			elm?.setAttribute("data-is-google-docs", "true"), (elm?.parentElement === gDocsRootOrSiblingNode || !isWrappedRootTag && elm.parentElement === doc.body) && (elm?.setAttribute("data-is-root-node", "true"), tagName(elm)), tagName(elm) === "li" && elm.firstChild && tagName(elm?.firstChild) === "img" && elm.removeChild(elm.firstChild);
		}
		return isWrappedRootTag && doc.body.firstElementChild?.replaceWith(...Array.from(gDocsRootOrSiblingNode.childNodes)), doc;
	}
	return doc;
}
var unwantedWordDocumentPaths = [
	"/html/text()",
	"/html/head/text()",
	"/html/body/text()",
	"/html/body/ul/text()",
	"/html/body/ol/text()",
	"//comment()",
	"//style",
	"//xml",
	"//script",
	"//meta",
	"//link"
];
function preprocessHTML(_html, doc) {
	const bodyTextNodes = doc.evaluate("/html/body/text()", doc, null, _XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
	for (let i = bodyTextNodes.snapshotLength - 1; i >= 0; i--) {
		const node = bodyTextNodes.snapshotItem(i), text = node.textContent || "";
		if (text.replace(/[^\S\n]+$/g, "")) {
			const newNode = doc.createElement("span");
			newNode.appendChild(doc.createTextNode(text)), node.parentNode?.replaceChild(newNode, node);
		} else node.parentNode?.removeChild(node);
	}
	const unwantedNodes = doc.evaluate(unwantedWordDocumentPaths.join("|"), doc, null, _XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
	for (let i = unwantedNodes.snapshotLength - 1; i >= 0; i--) {
		const unwanted = unwantedNodes.snapshotItem(i);
		unwanted && unwanted.parentNode?.removeChild(unwanted);
	}
	return doc;
}
function preprocessNotion(html, doc) {
	if (html.match(/<!-- notionvc:.*?-->/g)) {
		const childNodes = doc.evaluate("//*", doc, null, _XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
		for (let i = childNodes.snapshotLength - 1; i >= 0; i--) childNodes.snapshotItem(i)?.setAttribute("data-is-notion", "true");
		return doc;
	}
	return doc;
}
var BLOCK_CONTAINER_ELEMENTS = [
	"body",
	"table",
	"tbody",
	"thead",
	"tfoot",
	"tr",
	"ul",
	"ol"
];
function preprocessWhitespace(_2, doc) {
	function processNode(node) {
		if (node.nodeType === _XPathResult.BOOLEAN_TYPE && !PRESERVE_WHITESPACE_TAGS.includes(node.parentElement?.tagName.toLowerCase() || "")) {
			const normalized = node.textContent?.replace(/\s\s+/g, " ").replace(/[\r\n]+/g, " ") || "", parentTag = node.parentElement?.tagName.toLowerCase();
			parentTag && BLOCK_CONTAINER_ELEMENTS.includes(parentTag) && normalized.trim() === "" ? node.parentNode?.removeChild(node) : node.textContent = normalized;
		} else for (let i = node.childNodes.length - 1; i >= 0; i--) processNode(node.childNodes[i]);
	}
	return processNode(doc.body), doc;
}
var WORD_HTML_REGEX = /(class="?Mso|style=(?:"|')[^"]*?\bmso-|w:WordDocument|<o:\w+>|<\/font>)/;
var unwantedPaths = [
	"//o:p",
	"//span[@style='mso-list:Ignore']",
	"//span[@style='mso-list: Ignore']"
];
var mappedPaths = [
	"//p[@class='MsoTocHeading']",
	"//p[@class='MsoTitle']",
	"//p[@class='MsoToaHeading']",
	"//p[@class='MsoSubtitle']",
	"//span[@class='MsoSubtleEmphasis']",
	"//span[@class='MsoIntenseEmphasis']"
];
var elementMap = {
	MsoTocHeading: ["h3"],
	MsoTitle: ["h1"],
	MsoToaHeading: ["h2"],
	MsoSubtitle: ["h5"],
	MsoSubtleEmphasis: ["span", "em"],
	MsoIntenseEmphasis: [
		"span",
		"em",
		"strong"
	]
};
function isWordHtml(html) {
	return WORD_HTML_REGEX.test(html);
}
function preprocessWord(html, doc) {
	if (!isWordHtml(html)) return doc;
	const unwantedNodes = doc.evaluate(unwantedPaths.join("|"), doc, (prefix) => prefix === "o" ? "urn:schemas-microsoft-com:office:office" : null, _XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
	for (let i = unwantedNodes.snapshotLength - 1; i >= 0; i--) {
		const unwanted = unwantedNodes.snapshotItem(i);
		unwanted?.parentNode && unwanted.parentNode.removeChild(unwanted);
	}
	const mappedElements = doc.evaluate(mappedPaths.join("|"), doc, null, _XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
	for (let i = mappedElements.snapshotLength - 1; i >= 0; i--) {
		const mappedElm = mappedElements.snapshotItem(i), tags = elementMap[mappedElm.className], text = doc.createTextNode(mappedElm.textContent || "");
		if (!tags) continue;
		const parentElement = doc.createElement(tags[0]);
		let parent = parentElement, child = parentElement;
		tags.slice(1).forEach((tag) => {
			child = doc.createElement(tag), parent.appendChild(child), parent = child;
		}), child.appendChild(text), mappedElm?.parentNode?.replaceChild(parentElement, mappedElm);
	}
	return doc;
}
var preprocessors = [
	preprocessWhitespace,
	preprocessNotion,
	preprocessWord,
	preprocessWordOnline,
	preprocessGDocs,
	preprocessHTML
];
function mapParaStyleToBlockStyle(schema, paraStyle) {
	const blockStyle = {
		"heading 1": "h1",
		"heading 2": "h2",
		"heading 3": "h3",
		"heading 4": "h4",
		"heading 5": "h5",
		"heading 6": "h6",
		Quote: "blockquote"
	}[paraStyle] ?? "normal";
	return schema.styles.find((style) => style.name === blockStyle)?.name;
}
function createWordOnlineRules(schema, options) {
	return [
		{ deserialize(el) {
			if (!isElement(el) || tagName(el) !== "img") return;
			const classNameRaw = el.className;
			let className = "";
			if (typeof classNameRaw == "string" ? className = classNameRaw : classNameRaw && typeof classNameRaw == "object" && (className = classNameRaw.baseVal || ""), !className.includes("WACImage")) return;
			const src = el.getAttribute("src") ?? void 0, alt = el.getAttribute("alt") ?? void 0, props = Object.fromEntries(Array.from(el.attributes).map((attr) => [attr.name, attr.value])), image = options.matchers?.image?.({
				context: {
					schema,
					keyGenerator: options.keyGenerator ?? keyGenerator
				},
				props: {
					...props,
					...src ? { src } : {},
					...alt ? { alt } : {}
				}
			});
			if (image) return {
				_type: "__block",
				block: image
			};
		} },
		{ deserialize(el) {
			if (!isElement(el)) return;
			const classNameRaw = el.className;
			let className = "";
			if (typeof classNameRaw == "string" ? className = classNameRaw : classNameRaw && typeof classNameRaw == "object" && (className = classNameRaw.baseVal || ""), !className.includes("WACImageContainer")) return;
			const img = el.querySelector("img");
			if (!img) return;
			const src = img.getAttribute("src") ?? void 0, alt = img.getAttribute("alt") ?? void 0, props = Object.fromEntries(Array.from(img.attributes).map((attr) => [attr.name, attr.value])), isInsideListItem = el.closest("li") !== null;
			if (el.closest("p") === null || isInsideListItem) {
				const inlineImage = options.matchers?.inlineImage?.({
					context: {
						schema,
						keyGenerator: options.keyGenerator ?? keyGenerator
					},
					props: {
						...props,
						...src ? { src } : {},
						...alt ? { alt } : {}
					}
				});
				if (inlineImage) return inlineImage;
			}
			const image = options.matchers?.image?.({
				context: {
					schema,
					keyGenerator: options.keyGenerator ?? keyGenerator
				},
				props: {
					...props,
					...src ? { src } : {},
					...alt ? { alt } : {}
				}
			});
			if (image) return {
				_type: "__block",
				block: image
			};
		} },
		{ deserialize(el, next) {
			if (!isElement(el) || tagName(el) !== "li") return;
			const ariaLevel = el.getAttribute("data-aria-level");
			if (!ariaLevel) return;
			const listItem = tagName(el.parentNode) === "ol" ? "number" : "bullet";
			let childNodesToProcess = el.childNodes, blockStyle = "normal";
			if (el.childNodes.length === 1 && el.firstChild && isElement(el.firstChild)) {
				const childTag = tagName(el.firstChild);
				if (childTag && (HTML_BLOCK_TAGS[childTag] || HTML_HEADER_TAGS[childTag] || childTag === "word-online-block")) {
					if (childTag === "word-online-block") {
						const paraStyle = el.firstChild.getAttribute("data-parastyle"), foundBlockStyle = paraStyle ? mapParaStyleToBlockStyle(schema, paraStyle) : void 0;
						foundBlockStyle && (blockStyle = foundBlockStyle);
					}
					childNodesToProcess = el.firstChild.childNodes;
				}
			}
			const children = next(childNodesToProcess);
			let childArray = Array.isArray(children) ? children : [children].filter(Boolean);
			for (; childArray.length > 0;) {
				const lastChild = childArray[childArray.length - 1];
				if (lastChild && typeof lastChild == "object" && "text" in lastChild) {
					const text = lastChild.text.trimEnd();
					if (text === "") childArray = childArray.slice(0, -1);
					else if (text !== lastChild.text) {
						lastChild.text = text;
						break;
					} else break;
				} else break;
			}
			return {
				_type: schema.block.name,
				children: childArray,
				markDefs: [],
				style: blockStyle,
				listItem,
				level: parseInt(ariaLevel, 10)
			};
		} },
		{ deserialize(el, next) {
			if (!isElement(el)) return;
			const paraStyle = el.getAttribute("data-parastyle"), blockStyle = paraStyle ? mapParaStyleToBlockStyle(schema, paraStyle) : void 0;
			if (!blockStyle) return;
			const children = next(el.childNodes);
			return {
				_type: schema.block.name,
				style: blockStyle,
				markDefs: [],
				children: Array.isArray(children) ? children : children ? [children] : []
			};
		} },
		{ deserialize(el) {
			if (isWordOnlineTextRun(el)) {
				if (!isElement(el) || !el.textContent) return;
				const text = Array.from(el.childNodes).filter((node) => isNormalTextRun(node) || isFindHit(node)).map((span2) => isElement(span2) ? span2.textContent ?? "" : "").join("");
				if (!text) return;
				const span = {
					...DEFAULT_SPAN,
					marks: [],
					text
				};
				if (hasStrongFormatting(el) && span.marks.push("strong"), hasEmphasisFormatting(el) && !isInHeading(el) && !isInBlockquote(el) && span.marks.push("em"), hasUnderlineFormatting(el)) if (isElement(el) && el.parentElement && tagName(el.parentElement) === "a") {
					const linkElement = el.parentElement;
					if (linkElement) {
						const prevSibling = linkElement.previousSibling, nextSibling = linkElement.nextSibling, hasPrevUnderline = prevSibling && isElement(prevSibling) && hasUnderlineFormatting(prevSibling), hasNextUnderline = nextSibling && isElement(nextSibling) && hasUnderlineFormatting(nextSibling);
						(hasPrevUnderline || hasNextUnderline) && span.marks.push("underline");
					}
				} else span.marks.push("underline");
				return hasStrikethroughFormatting(el) && span.marks.push("strike-through"), span;
			}
		} }
	];
}
var LIST_CONTAINER_TAGS = Object.keys(HTML_LIST_CONTAINER_TAGS);
function isEmphasis$1(el) {
	const style = isElement(el) && el.getAttribute("style");
	return /font-style\s*:\s*italic/.test(style || "");
}
function isStrong$1(el) {
	const style = isElement(el) && el.getAttribute("style");
	return /font-weight\s*:\s*700/.test(style || "");
}
function isUnderline$1(el) {
	if (!isElement(el) || tagName(el.parentNode) === "a") return !1;
	const style = isElement(el) && el.getAttribute("style");
	return /text-decoration\s*:\s*underline/.test(style || "");
}
function isStrikethrough(el) {
	const style = isElement(el) && el.getAttribute("style");
	return /text-decoration\s*:\s*(?:.*line-through.*;)/.test(style || "");
}
function isGoogleDocs(el) {
	return isElement(el) && !!el.getAttribute("data-is-google-docs");
}
function isRootNode(el) {
	return isElement(el) && !!el.getAttribute("data-is-root-node");
}
function getListItemStyle$1(el) {
	const parentTag = tagName(el.parentNode);
	if (!(parentTag && !LIST_CONTAINER_TAGS.includes(parentTag))) return tagName(el.parentNode) === "ul" ? "bullet" : "number";
}
function getListItemLevel$1(el) {
	let level = 0;
	if (tagName(el) === "li") {
		let parentNode = el.parentNode;
		for (; parentNode;) {
			const parentTag = tagName(parentNode);
			parentTag && LIST_CONTAINER_TAGS.includes(parentTag) && level++, parentNode = parentNode.parentNode;
		}
	} else level = 1;
	return level;
}
var blocks = {
	...HTML_BLOCK_TAGS,
	...HTML_HEADER_TAGS
};
function getBlockStyle(schema, el) {
	const childTag = tagName(el.firstChild), block = childTag && blocks[childTag];
	return block ? schema.styles.some((style) => style.name === block.style) ? block.style : BLOCK_DEFAULT_STYLE : BLOCK_DEFAULT_STYLE;
}
function createGDocsRules(schema) {
	return [
		{ deserialize(el, next) {
			if (isElement(el) && tagName(el) === "span" && isGoogleDocs(el)) {
				if (!el.textContent) return !el.previousSibling && !el.nextSibling && el.setAttribute("data-lonely-child", "true"), next(el.childNodes);
				const span = {
					...DEFAULT_SPAN,
					marks: [],
					text: el.textContent
				};
				return isStrong$1(el) && span.marks.push("strong"), isUnderline$1(el) && span.marks.push("underline"), isStrikethrough(el) && span.marks.push("strike-through"), isEmphasis$1(el) && span.marks.push("em"), span;
			}
		} },
		{ deserialize(el, next) {
			if (tagName(el) === "li" && isGoogleDocs(el)) return {
				...DEFAULT_BLOCK,
				listItem: getListItemStyle$1(el),
				level: getListItemLevel$1(el),
				style: getBlockStyle(schema, el),
				children: next(el.firstChild?.childNodes || [])
			};
		} },
		{ deserialize(el) {
			if (tagName(el) === "br" && isGoogleDocs(el) && isElement(el) && el.classList.contains("apple-interchange-newline")) return {
				...DEFAULT_SPAN,
				text: ""
			};
			if (tagName(el) === "br" && isGoogleDocs(el) && isElement(el) && el?.parentNode?.textContent === "") return {
				...DEFAULT_SPAN,
				text: ""
			};
			if (tagName(el) === "br" && isGoogleDocs(el) && isElement(el) && isRootNode(el)) return {
				...DEFAULT_SPAN,
				text: ""
			};
		} }
	];
}
var whitespaceTextNodeRule = { deserialize(node) {
	return node.nodeName === "#text" && isWhitespaceTextNode(node) ? {
		...DEFAULT_SPAN,
		marks: [],
		text: (node.textContent ?? "").replace(/\s\s+/g, " ")
	} : void 0;
} };
function isWhitespaceTextNode(node) {
	return (node.nodeType === 3 && (node.textContent || "").replace(/[\r\n]/g, " ").replace(/\s\s+/g, " ") === " " && node.nextSibling && node.nextSibling.nodeType !== 3 && node.previousSibling && node.previousSibling.nodeType !== 3 || node.textContent !== " ") && tagName(node.parentNode) !== "body";
}
function resolveListItem(schema, listNodeTagName) {
	if (listNodeTagName === "ul" && schema.lists.some((list) => list.name === "bullet")) return "bullet";
	if (listNodeTagName === "ol" && schema.lists.some((list) => list.name === "number")) return "number";
}
function createHTMLRules(schema, options) {
	return [
		whitespaceTextNodeRule,
		{ deserialize(el) {
			if (tagName(el) !== "pre") return;
			const isCodeEnabled = schema.styles.some((style) => style.name === "code");
			return {
				_type: "block",
				style: "normal",
				markDefs: [],
				children: [{
					...DEFAULT_SPAN,
					marks: isCodeEnabled ? ["code"] : [],
					text: el.textContent || ""
				}]
			};
		} },
		{ deserialize(el, next) {
			if (tagName(el) !== "blockquote") return;
			const blocks2 = {
				...HTML_BLOCK_TAGS,
				...HTML_HEADER_TAGS
			};
			delete blocks2.blockquote;
			const nonBlockquoteBlocks = Object.keys(blocks2), children = [];
			return el.childNodes.forEach((node, index) => {
				if (el.ownerDocument) if (node.nodeType === 1 && nonBlockquoteBlocks.includes(node.localName.toLowerCase())) {
					const span = el.ownerDocument.createElement("span"), previousChild = children[children.length - 1];
					previousChild && previousChild.nodeType === 3 && previousChild.textContent?.trim() && span.appendChild(el.ownerDocument.createTextNode("\r")), node.childNodes.forEach((cn) => {
						span.appendChild(cn.cloneNode(!0));
					}), index !== el.childNodes.length && span.appendChild(el.ownerDocument.createTextNode("\r")), children.push(span);
				} else children.push(node);
			}), {
				_type: "block",
				style: "blockquote",
				markDefs: [],
				children: next(children)
			};
		} },
		{ deserialize(el, next) {
			const blocks2 = {
				...HTML_BLOCK_TAGS,
				...HTML_HEADER_TAGS
			}, tag = tagName(el);
			let block = tag ? blocks2[tag] : void 0;
			if (!block) return;
			if (el.parentNode && tagName(el.parentNode) === "li") return next(el.childNodes);
			const blockStyle = block.style;
			return schema.styles.some((style) => style.name === blockStyle) || (block = DEFAULT_BLOCK), {
				...block,
				children: next(el.childNodes)
			};
		} },
		{ deserialize(el, next) {
			const tag = tagName(el);
			if (!(!tag || !(tag in HTML_SPAN_TAGS))) return next(el.childNodes);
		} },
		{ deserialize(el, next) {
			if (tagName(el) === "div") return next(el.childNodes);
		} },
		{ deserialize(el, next) {
			const tag = tagName(el);
			if (!(!tag || !(tag in HTML_LIST_CONTAINER_TAGS))) return next(el.childNodes);
		} },
		{ deserialize(el) {
			if (tagName(el) === "br") return {
				...DEFAULT_SPAN,
				text: `
`
			};
		} },
		{ deserialize(el, next, block) {
			const tag = tagName(el), listItem = tag ? HTML_LIST_ITEM_TAGS[tag] : void 0, parentTag = tagName(el.parentNode) || "";
			if (!listItem || !el.parentNode || !HTML_LIST_CONTAINER_TAGS[parentTag]) return;
			const enabledListItem = resolveListItem(schema, parentTag);
			return enabledListItem ? (listItem.listItem = enabledListItem, {
				...listItem,
				children: next(el.childNodes)
			}) : block({
				_type: "block",
				children: next(el.childNodes)
			});
		} },
		{ deserialize(el, next) {
			const decorator = HTML_DECORATOR_TAGS[tagName(el) || ""];
			if (!(!decorator || !schema.decorators.some((decoratorType) => decoratorType.name === decorator))) return {
				_type: "__decorator",
				name: decorator,
				children: next(el.childNodes)
			};
		} },
		{ deserialize(el, next) {
			if (tagName(el) !== "a") return;
			const linkEnabled = schema.annotations.some((annotation) => annotation.name === "link"), href = isElement(el) && el.getAttribute("href");
			return href ? linkEnabled ? {
				_type: "__annotation",
				markDef: {
					_key: options.keyGenerator ? options.keyGenerator() : keyGenerator(),
					_type: "link",
					href
				},
				children: next(el.childNodes)
			} : el.appendChild(el.ownerDocument.createTextNode(` (${href})`)) && next(el.childNodes) : next(el.childNodes);
		} },
		{ deserialize(el, next) {
			if (isElement(el) && (tagName(el) === "td" || tagName(el) === "th")) return {
				...DEFAULT_BLOCK,
				children: next(el.childNodes)
			};
		} },
		{ deserialize(el) {
			if (isElement(el) && tagName(el) === "img") {
				const src = el.getAttribute("src") ?? void 0, alt = el.getAttribute("alt") ?? void 0, props = Object.fromEntries(Array.from(el.attributes).map((attr) => [attr.name, attr.value])), ancestorOfLonelyChild = el?.parentElement?.parentElement?.getAttribute("data-lonely-child"), ancestorOfListItem = el.closest("li") !== null;
				if (ancestorOfLonelyChild && !ancestorOfListItem) {
					const image2 = options.matchers?.image?.({
						context: {
							schema,
							keyGenerator: options.keyGenerator ?? keyGenerator
						},
						props: {
							...props,
							...src ? { src } : {},
							...alt ? { alt } : {}
						}
					});
					if (image2) return {
						_type: "__block",
						block: image2
					};
				}
				const inlineImage = options.matchers?.inlineImage?.({
					context: {
						schema,
						keyGenerator: options.keyGenerator ?? keyGenerator
					},
					props: {
						...props,
						...src ? { src } : {},
						...alt ? { alt } : {}
					}
				});
				if (inlineImage) return inlineImage;
				const image = options.matchers?.image?.({
					context: {
						schema,
						keyGenerator: options.keyGenerator ?? keyGenerator
					},
					props: {
						...props,
						...src ? { src } : {},
						...alt ? { alt } : {}
					}
				});
				if (image) return {
					_type: "__block",
					block: image
				};
			}
		} }
	];
}
function isEmphasis(el) {
	const style = isElement(el) && el.getAttribute("style");
	return /font-style:italic/.test(style || "");
}
function isStrong(el) {
	const style = isElement(el) && el.getAttribute("style");
	return /font-weight:700/.test(style || "") || /font-weight:600/.test(style || "");
}
function isUnderline(el) {
	const style = isElement(el) && el.getAttribute("style");
	return /text-decoration:underline/.test(style || "");
}
function isNotion(el) {
	return isElement(el) && !!el.getAttribute("data-is-notion");
}
function createNotionRules() {
	return [{ deserialize(el) {
		if (isElement(el) && tagName(el) === "span" && isNotion(el)) {
			const span = {
				...DEFAULT_SPAN,
				marks: [],
				text: el.textContent
			};
			return isStrong(el) && span.marks.push("strong"), isUnderline(el) && span.marks.push("underline"), isEmphasis(el) && span.marks.push("em"), span;
		}
	} }];
}
function getListItemStyle(el) {
	const style = isElement(el) && el.getAttribute("style");
	if (style && style.match(/lfo\d+/)) return style.match("lfo1") ? "number" : "bullet";
}
function getListItemLevel(el) {
	const style = isElement(el) && el.getAttribute("style");
	if (!style) return;
	const levelMatch = style.match(/level\d+/);
	if (!levelMatch) return;
	const [level] = levelMatch[0].match(/\d/) || [];
	return (level ? Number.parseInt(level, 10) : 1) || 1;
}
function isWordListElement(el) {
	if (!isElement(el)) return !1;
	if (el.className && (el.className === "MsoListParagraphCxSpFirst" || el.className === "MsoListParagraphCxSpMiddle" || el.className === "MsoListParagraphCxSpLast")) return !0;
	const style = el.getAttribute("style");
	return !!(style && /mso-list:\s*l\d+\s+level\d+\s+lfo\d+/.test(style));
}
function getHeadingStyle(el) {
	const tag = tagName(el);
	if (tag && HTML_HEADER_TAGS[tag]) return HTML_HEADER_TAGS[tag]?.style;
}
function createWordRules() {
	return [{ deserialize(el, next) {
		const tag = tagName(el);
		if ((tag === "p" || HTML_HEADER_TAGS[tag || ""]) && isWordListElement(el)) {
			const headingStyle = getHeadingStyle(el);
			return {
				...DEFAULT_BLOCK,
				listItem: getListItemStyle(el),
				level: getListItemLevel(el),
				style: headingStyle || "normal",
				children: next(el.childNodes)
			};
		}
	} }];
}
function createRules(schema, options) {
	return [
		...createWordRules(),
		...createWordOnlineRules(schema, options),
		...createNotionRules(),
		...createGDocsRules(schema),
		...createHTMLRules(schema, options)
	];
}
function trimWhitespace(context, mode, blocks2) {
	const trimmedBlocks = [];
	let consecutiveEmptyCount = 0;
	for (const block of blocks2) {
		const trimmedBlock = isTextBlock(context, block) ? trimTextBlockWhitespace(block) : block;
		if (mode === "preserve") {
			trimmedBlocks.push(trimmedBlock);
			continue;
		}
		if (mode === "remove") {
			if (isEmptyTextBlock(context, trimmedBlock)) continue;
			trimmedBlocks.push(trimmedBlock);
			continue;
		}
		if (mode === "normalize") {
			if (isEmptyTextBlock(context, trimmedBlock)) {
				consecutiveEmptyCount++, consecutiveEmptyCount === 1 && trimmedBlocks.push(trimmedBlock);
				continue;
			}
			trimmedBlocks.push(trimmedBlock), consecutiveEmptyCount = 0;
		}
	}
	return trimmedBlocks;
}
function isEmptyTextBlock(context, block) {
	return !(!isTextBlock(context, block) || block.children.some((child) => !isSpan(context, child) || child.text.trim() !== ""));
}
function trimTextBlockWhitespace(block) {
	let index = 0;
	for (const child of block.children) {
		if (!isMinimalSpan(child)) {
			index++;
			continue;
		}
		const nextChild = nextSpan(block, index), prevChild = prevSpan(block, index);
		index === 0 && (child.text = child.text.replace(/^[^\S\n]+/g, "")), index === block.children.length - 1 && (child.text = child.text.replace(/[^\S\n]+$/g, "")), /\s/.test(child.text.slice(Math.max(0, child.text.length - 1))) && nextChild && isMinimalSpan(nextChild) && /\s/.test(nextChild.text.slice(0, 1)) && (child.text = child.text.replace(/[^\S\n]+$/g, "")), /\s/.test(child.text.slice(0, 1)) && prevChild && isMinimalSpan(prevChild) && /\s/.test(prevChild.text.slice(Math.max(0, prevChild.text.length - 1))) && (child.text = child.text.replace(/^[^\S\n]+/g, "")), child.text || block.children.splice(index, 1), prevChild && Array.isArray(prevChild.marks) && isEqualMarks(prevChild.marks, child.marks) && isWhiteSpaceChar(child.text) ? (prevChild.text += " ", block.children.splice(index, 1)) : nextChild && Array.isArray(nextChild.marks) && isEqualMarks(nextChild.marks, child.marks) && isWhiteSpaceChar(child.text) && (nextChild.text = ` ${nextChild.text}`, block.children.splice(index, 1)), index++;
	}
	return block;
}
function nextSpan(block, index) {
	const next = block.children[index + 1];
	return next && next._type === "span" ? next : null;
}
function prevSpan(block, index) {
	const prev = block.children[index - 1];
	return prev && prev._type === "span" ? prev : null;
}
function isWhiteSpaceChar(text) {
	return ["\xA0", " "].includes(text);
}
var HtmlDeserializer = class {
	keyGenerator;
	schema;
	rules;
	parseHtml;
	whitespaceMode;
	_markDefs = [];
	/**
	* Create a new serializer respecting a Sanity block content type's schema
	*
	* @param blockContentType - Schema type for array containing _at least_ a block child type
	* @param options - Options for the deserialization process
	*/
	constructor(schema, options = {}) {
		const { rules = [], unstable_whitespaceOnPasteMode = "preserve" } = options, standardRules = createRules(schema, {
			keyGenerator: options.keyGenerator,
			matchers: options.matchers
		});
		this.schema = schema, this.keyGenerator = options.keyGenerator ?? keyGenerator, this.rules = [...rules, ...standardRules], this.whitespaceMode = unstable_whitespaceOnPasteMode;
		const parseHtml = options.parseHtml || defaultParseHtml();
		this.parseHtml = (html) => {
			const cleanHTML = M(html), doc = parseHtml(cleanHTML);
			for (const processor of preprocessors) processor(cleanHTML, doc);
			return doc.body;
		};
	}
	/**
	* Deserialize HTML.
	*
	* @param html - The HTML to deserialize, as a string
	* @returns Array of blocks - either portable text blocks or other allowed blocks
	*/
	deserialize = (html) => {
		this._markDefs = [];
		const { parseHtml } = this, fragment = parseHtml(html), children = Array.from(fragment.childNodes), blocks2 = trimWhitespace({ schema: this.schema }, this.whitespaceMode, flattenNestedBlocks({ schema: this.schema }, ensureRootIsBlocks(this.schema, this.deserializeElements(children))));
		return this._markDefs.length > 0 && blocks2.filter((block) => isTextBlock({ schema: this.schema }, block)).forEach((block) => {
			block.markDefs = block.markDefs || [], block.markDefs = block.markDefs.concat(this._markDefs.filter((def) => block.children.flatMap((child) => child.marks || []).includes(def._key)));
		}), blocks2.map((block) => (block._type === "block" && (block._type = this.schema.block.name), block));
	};
	/**
	* Deserialize an array of DOM elements.
	*
	* @param elements - Array of DOM elements to deserialize
	* @returns
	*/
	deserializeElements = (elements = []) => {
		let nodes = [];
		return elements.forEach((element) => {
			nodes = nodes.concat(this.deserializeElement(element));
		}), nodes;
	};
	/**
	* Deserialize a DOM element
	*
	* @param element - Deserialize a DOM element
	* @returns
	*/
	deserializeElement = (element) => {
		const next = (elements) => {
			if (isNodeList(elements)) return this.deserializeElements(Array.from(elements));
			if (Array.isArray(elements)) return this.deserializeElements(elements);
			if (elements) return this.deserializeElement(elements);
		}, block = (props) => ({
			_type: "__block",
			block: props
		});
		let node;
		for (let i = 0; i < this.rules.length; i++) {
			const rule = this.rules[i];
			if (!rule.deserialize) continue;
			const ret = rule.deserialize(element, next, block), type = resolveJsType(ret);
			if (type !== "array" && type !== "object" && type !== "null" && type !== "undefined") throw new Error(`A rule returned an invalid deserialized representation: "${node}".`);
			if (ret !== void 0) {
				if (ret === null) throw new Error("Deserializer rule returned `null`");
				Array.isArray(ret) ? node = ret : isPlaceholderDecorator(ret) ? node = this.deserializeDecorator(ret) : isPlaceholderAnnotation(ret) ? node = this.deserializeAnnotation(ret) : node = ret;
				if (ret && !Array.isArray(ret) && isMinimalBlock(ret) && "listItem" in ret) {
					let parent = element.parentNode?.parentNode;
					for (; parent && tagName(parent) === "li";) parent = parent.parentNode?.parentNode, ret.level = ret.level ? ret.level + 1 : 1;
				}
				ret && !Array.isArray(ret) && isMinimalBlock(ret) && ret.style === "blockquote" && ret.children.forEach((child, index) => {
					isMinimalSpan(child) && child.text === "\r" && (child.text = `
`, (index === 0 || index === ret.children.length - 1) && ret.children.splice(index, 1));
				});
				break;
			}
		}
		return node || next(element.childNodes) || [];
	};
	/**
	* Deserialize a `__decorator` type
	* (an internal made up type to process decorators exclusively)
	*
	* @param decorator -
	* @returns array of ...
	*/
	deserializeDecorator = (decorator) => {
		const { name } = decorator, applyDecorator = (node) => {
			if (isPlaceholderDecorator(node)) return this.deserializeDecorator(node);
			if (isMinimalSpan(node)) node.marks = node.marks || [], node.text.trim() && node.marks.unshift(name);
			else if ("children" in node && Array.isArray(node.children)) {
				const block = node;
				block.children = block.children.map(applyDecorator);
			}
			return node;
		};
		return decorator.children.reduce((children, node) => {
			const ret = applyDecorator(node);
			return Array.isArray(ret) ? children.concat(ret) : (children.push(ret), children);
		}, []);
	};
	/**
	* Deserialize a `__annotation` object.
	* (an internal made up type to process annotations exclusively)
	*
	* @param annotation -
	* @returns Array of...
	*/
	deserializeAnnotation = (annotation) => {
		const { markDef } = annotation;
		this._markDefs.push(markDef);
		const applyAnnotation = (node) => {
			if (isPlaceholderAnnotation(node)) return this.deserializeAnnotation(node);
			if (isMinimalSpan(node)) node.marks = node.marks || [], node.text.trim() && node.marks.unshift(markDef._key);
			else if ("children" in node && Array.isArray(node.children)) {
				const block = node;
				block.children = block.children.map(applyAnnotation);
			}
			return node;
		};
		return annotation.children.reduce((children, node) => {
			const ret = applyAnnotation(node);
			return Array.isArray(ret) ? children.concat(ret) : (children.push(ret), children);
		}, []);
	};
};
function normalizeBlock(node, options = {}) {
	const schema = {
		block: { name: options.blockTypeName || "block" },
		span: { name: "span" },
		styles: [],
		lists: [],
		decorators: [],
		annotations: [],
		blockObjects: [],
		inlineObjects: []
	};
	if (node._type !== (options.blockTypeName || "block")) return "_key" in node ? node : {
		...node,
		_key: options.keyGenerator ? options.keyGenerator() : keyGenerator()
	};
	const block = {
		_key: options.keyGenerator ? options.keyGenerator() : keyGenerator(),
		children: [],
		markDefs: [],
		...node
	}, lastChild = block.children[block.children.length - 1];
	if (!lastChild) return block.children = [{
		_type: "span",
		_key: options.keyGenerator ? options.keyGenerator() : keyGenerator(),
		text: "",
		marks: []
	}], block;
	const usedMarkDefs = [], allowedDecorators = options.allowedDecorators && Array.isArray(options.allowedDecorators) ? options.allowedDecorators : !1;
	return block.children = block.children.reduce((acc, child) => {
		const previousChild = acc[acc.length - 1];
		return previousChild && isSpan({ schema }, child) && isSpan({ schema }, previousChild) && isEqualMarks(previousChild.marks, child.marks) ? (lastChild && lastChild === child && child.text === "" && block.children.length > 1 || (previousChild.text += child.text), acc) : (acc.push(child), acc);
	}, []).map((child) => {
		if (!child) throw new Error("missing child");
		return child._key = options.keyGenerator ? options.keyGenerator() : keyGenerator(), isSpan({ schema }, child) && (child.marks ? allowedDecorators && (child.marks = child.marks.filter((mark) => {
			const isAllowed = allowedDecorators.includes(mark), isUsed = block.markDefs?.some((def) => def._key === mark);
			return isAllowed || isUsed;
		})) : child.marks = [], usedMarkDefs.push(...child.marks)), child;
	}), block.markDefs = (block.markDefs || []).filter((markDef) => usedMarkDefs.includes(markDef._key)), block;
}
function htmlToBlocks(html, schemaType, options = {}) {
	return new HtmlDeserializer(isSanitySchema(schemaType) ? sanitySchemaToPortableTextSchema(schemaType) : schemaType, options).deserialize(html).map((block) => normalizeBlock(block, { keyGenerator: options.keyGenerator }));
}
function isSanitySchema(schema) {
	return schema.hasOwnProperty("jsonType");
}
//#endregion
export { require__baseGet as $, isCreateMutation as $t, require_arrify as A, isStringSchemaType as An, require__SetCache as At, require__baseAssignValue as B, typed as Bn, defineField as Bt, ALL_FIELDS_GROUP_NAME as C, isPrimitiveSchemaType as Cn, require__isIndex as Ct, require_capitalize as D, isSearchStrategy as Dn, require_isArray as Dt, require_isFinite as E, isSanityDocument as En, require__arrayFilter as Et, require_isPlainObject as F, isValidationInfo as Fn, require__root as Ft, require__arrayIncludes as G, isArraySchemaType as Gt, require__baseUniq as H, isArrayOfBlocksSchemaType as Ht, require__baseClone as I, isValidationInfoMarker as In, require_isObject as It, require__baseRest as J, isBlockListObjectField as Jt, require__baseIndexOf as K, isAssetAspect as Kt, require__baseCreate as L, isValidationWarning as Ln, MEDIA_LIBRARY_ASSET_ASPECT_TYPE_NAME as Lt, require__baseSet as M, isTypedObject$1 as Mn, require_isSymbol as Mt, require_omit as N, isValidationError as Nn, require_isObjectLike as Nt, require_pickBy as O, isSlug as On, require__mapToArray as Ot, require__flatRest as P, isValidationErrorMarker as Pn, require__baseGetTag as Pt, require_get as Q, isCreateIfNotExistsMutation as Qt, require__copyArray as R, isValidationWarningMarker as Rn, defineArrayMember as Rt, require__baseDifference as S, isPortableTextTextBlock as Sn, require__baseUnary as St, require_castArray as T, isReferenceSchemaType as Tn, require_isArguments as Tt, require_noop as U, isArrayOfObjectsSchemaType as Ut, require_uniqBy as V, defineType as Vt, require__arrayIncludesWith as W, isArrayOfPrimitivesSchemaType as Wt, require__baseIteratee as X, isBlockStyleObjectField as Xt, require__baseMap as Y, isBlockSchemaType as Yt, require_identity as Z, isBooleanSchemaType as Zt, validateSchema as _, isNumberSchemaType as _n, require_keys as _t, portableTextMemberSchemaTypesToSchema as a, isDeleteMutation as an, require__stringToArray as at, require_difference as b, isPortableTextListBlock as bn, require__isPrototype as bt, defineSchema as c, isDocumentSchemaType as cn, require_words as ct, isTypedObject as d, isImage as dn, require__baseToString as dt, isCreateOrReplaceMutation as en, require_last as et, DescriptorConverter as f, isImageSchemaType as fn, require__arrayMap as ft, processSchemaSynchronization as g, isKeyedObject as gn, require__WeakMap as gt, isActionEnabled as h, isKeySegment as hn, require__getTag as ht, createPortableTextMemberSchemaTypes as i, isDateTimeSchemaType as in, require_upperFirst as it, require_pick as j, isTitledListValue as jn, require_eq as jt, require_negate as k, isSpanSchemaType as kn, require__cacheHas as kt, isSpan as l, isFileSchemaType as ln, require_deburr as lt, groupProblems as m, isIndexTuple as mn, require_isEqual as mt, normalizeBlock as n, isCrossDatasetReference as nn, require__baseFlatten as nt, Schema as o, isDeprecatedSchemaType as on, require__castSlice as ot, builtinTypes as p, isIndexSegment as pn, require_memoize as pt, require__baseFindIndex as q, isBlockChildrenObjectField as qt, compileSchemaDefinitionToPortableTextMemberSchemaTypes as r, isCrossDatasetReferenceSchemaType as rn, require_startCase as rt, compileSchema as s, isDeprecationConfiguration as sn, require__createCompounder as st, htmlToBlocks as t, isCreateSquashedMutation as tn, require_flatten as tt, isTextBlock as u, isGlobalDocumentReference as un, require_toString as ut, require_partition as v, isObjectSchemaType as vn, require_isArrayLike as vt, Rule as w, isReference$1 as wn, require_isBuffer as wt, require_isArrayLikeObject as x, isPortableTextSpan as xn, require_isTypedArray as xt, require_uniq as y, isPatchMutation as yn, require__baseKeys as yt, require__createAggregator as z, searchStrategies as zn, defineAssetAspect as zt };
