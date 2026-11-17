import { t as __commonJSMin } from "../_runtime.mjs";
//#endregion
//#region node_modules/@sanity/id-utils/dist/index.js
var import_lib = (/* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.make = exports.identity = void 0;
	/**
	* A generic function that, when given some branded type, can take a value with
	* the base type of the branded type, and cast that value to the branded type.
	* It fulfills the contract of a `Brander`.
	*
	* At runtime, this function simply returns the value as-is.
	*
	* @param underlying The value with a base type, to be casted
	* @return The same underlying value, but casted
	* @example
	* ```
	* type UserId = Brand<number, 'user'>;
	* const UserId: Brander<UserId> = identity;
	* ```
	*/
	function identity(underlying) {
		return underlying;
	}
	exports.identity = identity;
	/**
	* Produces a `Brander<B>`, given a brand type `B`. By default this returns
	* `identity` and relies on type inference to give the return type the correct
	* type. Optionally, `validator` can be used to assert on the value.
	*
	* @example
	* ```
	* type UserId = Brand<number, 'user'>;
	* const UserId = make<UserId>();
	* const myUserId = UserId(42);
	* ```
	* @example
	* ```
	* type UserId = Brand<number, 'user'>;
	* const UserId = make<UserId>((value) => {
	*   if (value <= 0) {
	*     throw new Error(`Non-positive value: ${value}`);
	*   }
	* });
	* UserId(42); // Ok
	* UserId(-1); // Error: Non-positive value: -1
	* ```
	*/
	function make(validator) {
		if (!validator) return identity;
		return function(underlying) {
			validator(underlying);
			return underlying;
		};
	}
	exports.make = make;
})))();
var VALID_ID = /^[a-z-A-Z0-9._-]+$/;
var DRAFTS_DIR = "drafts";
var VERSION_DIR = "versions";
var VARIANT_DEFINITIONS_DIR = "_.variants";
var PATH_SEPARATOR = ".";
var DRAFTS_PREFIX = `${DRAFTS_DIR}${PATH_SEPARATOR}`;
var VERSION_PREFIX = `${VERSION_DIR}${PATH_SEPARATOR}`;
var VARIANT_DEFINITION_PREFIX = `${VARIANT_DEFINITIONS_DIR}${PATH_SEPARATOR}`;
function error(error2) {
	return {
		success: !1,
		error: error2
	};
}
function success(value) {
	return {
		success: !0,
		value
	};
}
function safe(fn) {
	try {
		return success(fn());
	} catch (err) {
		return error(err instanceof Error ? err : new Error(String(err)));
	}
}
function partition(array, predicate) {
	const trueValues = [], falseValues = [];
	for (const element of array) predicate(element) ? trueValues.push(element) : falseValues.push(element);
	return [trueValues, falseValues];
}
(0, import_lib.make)((id) => {
	validateAnyId(id);
	const [successes, errors] = partition([
		validatePublishedId,
		validateDraftId,
		validateVersionId
	].map((validator) => safe(() => validator(id))), (res) => res.success);
	if (successes.length > 0) return id;
	if (errors.length > 0) throw new AggregateError(errors.map((res) => res.error), `Invalid Document ID
 - ${errors.map((res) => res.error.message).join(`
 - `)}`);
	return id;
});
(0, import_lib.make)((id) => {
	validateAnyId(id), validateDraftId(id);
});
(0, import_lib.make)((id) => {
	validateAnyId(id), validatePublishedId(id);
});
(0, import_lib.make)((id) => {
	validateAnyId(id), validateVersionId(id);
});
(0, import_lib.make)((id) => {
	validateAnyId(id), validateVariantDefinitionId(id);
});
function validateAnyId(id) {
	if (id.length === 0) throw new Error("Must be a non-empty string");
	if (!VALID_ID.test(id)) throw new Error(`Not a valid document ID: "${id}" \u2013 Must match the ${VALID_ID} RegExp`);
	return id;
}
function validateDraftId(id) {
	if (!id.startsWith(DRAFTS_PREFIX)) throw new Error(`Not a valid draft ID: "${id}" \u2013 must start with "${DRAFTS_PREFIX}"`);
	if (id.length === DRAFTS_PREFIX.length) throw new Error(`Not a valid draft ID: "${id}" \u2013 must have at least one character followed by "${DRAFTS_PREFIX}"`);
	return id;
}
function validateVersionId(id) {
	if (!id.startsWith(VERSION_PREFIX)) throw new Error(`Not a valid version ID: "${id}" \u2013 must start with "${VERSION_PREFIX}"`);
	if (id.length === VERSION_PREFIX.length) throw new Error(`Not a valid version ID: "${id}" \u2013 must have at least one character followed by "${VERSION_PREFIX}"`);
	const [, versionName, ...documentId] = id.split(".");
	if (!versionName || !VALID_ID.test(versionName)) throw new Error(`Not a valid version ID: "${id}" \u2013 VERSION must match the ${VALID_ID} RegExp in versions.[VERSION].id`);
	if (documentId.length === 0) throw new Error(`Not a valid version ID: "${id}" \u2013 missing document ID in versions.bundle.[ID]`);
	if (versionName === "drafts" || versionName === "versions") throw new Error(`Not a valid version ID: "${id}" \u2013 invalid VERSION "${versionName}" in versions.[VERSION].id`);
	return id;
}
function validateVariantDefinitionId(id) {
	if (!id.startsWith(VARIANT_DEFINITION_PREFIX)) throw new Error(`Not a valid variant definition ID: "${id}" \u2013 must start with "${VARIANT_DEFINITION_PREFIX}"`);
	if (id.length === VARIANT_DEFINITION_PREFIX.length) throw new Error(`Not a valid variant definition ID: "${id}" \u2013 must have at least one character followed by "${VARIANT_DEFINITION_PREFIX}"`);
	return id;
}
function validatePublishedId(id) {
	if (id.startsWith(DRAFTS_PREFIX) || id.startsWith(VERSION_PREFIX)) throw new Error(`Not a valid published ID: "${id}" \u2013 cannot start with "${DRAFTS_PREFIX}" or "${VERSION_PREFIX}"`);
	return id;
}
function isVersionId(id) {
	return id.startsWith(VERSION_PREFIX);
}
function getVersionNameFromId(id) {
	const [, versionId] = id.split(PATH_SEPARATOR);
	return versionId;
}
//#endregion
export { isVersionId as n, getVersionNameFromId as t };
