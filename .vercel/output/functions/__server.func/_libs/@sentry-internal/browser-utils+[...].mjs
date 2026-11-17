//#region node_modules/@sentry/core/build/esm/utils-hoist/version.js
var SDK_VERSION = "8.55.2";
//#endregion
//#region node_modules/@sentry/core/build/esm/utils-hoist/worldwide.js
/** Get's the global object for the current JavaScript runtime */
var GLOBAL_OBJ = globalThis;
/**
* Returns a global singleton contained in the global `__SENTRY__[]` object.
*
* If the singleton doesn't already exist in `__SENTRY__`, it will be created using the given factory
* function and added to the `__SENTRY__` object.
*
* @param name name of the global singleton on __SENTRY__
* @param creator creator Factory function to create the singleton if it doesn't already exist on `__SENTRY__`
* @param obj (Optional) The global object on which to look for `__SENTRY__`, if not `GLOBAL_OBJ`'s return value
* @returns the singleton
*/
function getGlobalSingleton(name, creator, obj) {
	const gbl = obj || GLOBAL_OBJ;
	const __SENTRY__ = gbl.__SENTRY__ = gbl.__SENTRY__ || {};
	const versionedCarrier = __SENTRY__[SDK_VERSION] = __SENTRY__["8.55.2"] || {};
	return versionedCarrier[name] || (versionedCarrier[name] = creator());
}
//#endregion
//#region node_modules/@sentry/core/build/esm/utils-hoist/debug-build.js
/**
* This serves as a build time flag that will be true by default, but false in non-debug builds or if users replace `__SENTRY_DEBUG__` in their generated code.
*
* ATTENTION: This constant must never cross package boundaries (i.e. be exported) to guarantee that it can be used for tree shaking.
*/
var DEBUG_BUILD$1 = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
//#endregion
//#region node_modules/@sentry/core/build/esm/utils-hoist/logger.js
/** Prefix for logging strings */
var PREFIX = "Sentry Logger ";
var CONSOLE_LEVELS = [
	"debug",
	"info",
	"warn",
	"error",
	"log",
	"assert",
	"trace"
];
/** This may be mutated by the console instrumentation. */
var originalConsoleMethods = {};
/** JSDoc */
/**
* Temporarily disable sentry console instrumentations.
*
* @param callback The function to run against the original `console` messages
* @returns The results of the callback
*/
function consoleSandbox(callback) {
	if (!("console" in GLOBAL_OBJ)) return callback();
	const console = GLOBAL_OBJ.console;
	const wrappedFuncs = {};
	const wrappedLevels = Object.keys(originalConsoleMethods);
	wrappedLevels.forEach((level) => {
		const originalConsoleMethod = originalConsoleMethods[level];
		wrappedFuncs[level] = console[level];
		console[level] = originalConsoleMethod;
	});
	try {
		return callback();
	} finally {
		wrappedLevels.forEach((level) => {
			console[level] = wrappedFuncs[level];
		});
	}
}
function makeLogger() {
	let enabled = false;
	const logger = {
		enable: () => {
			enabled = true;
		},
		disable: () => {
			enabled = false;
		},
		isEnabled: () => enabled
	};
	if (DEBUG_BUILD$1) CONSOLE_LEVELS.forEach((name) => {
		logger[name] = (...args) => {
			if (enabled) consoleSandbox(() => {
				GLOBAL_OBJ.console[name](`${PREFIX}[${name}]:`, ...args);
			});
		};
	});
	else CONSOLE_LEVELS.forEach((name) => {
		logger[name] = () => void 0;
	});
	return logger;
}
/**
* This is a logger singleton which either logs things or no-ops if logging is not enabled.
* The logger is a singleton on the carrier, to ensure that a consistent logger is used throughout the SDK.
*/
var logger = getGlobalSingleton("logger", makeLogger);
//#endregion
//#region node_modules/@sentry/core/build/esm/utils-hoist/stacktrace.js
var STACKTRACE_FRAME_LIMIT = 50;
var WEBPACK_ERROR_REGEXP = /\(error: (.*)\)/;
var STRIP_FRAME_REGEXP = /captureMessage|captureException/;
/**
* Creates a stack parser with the supplied line parsers
*
* StackFrames are returned in the correct order for Sentry Exception
* frames and with Sentry SDK internal frames removed from the top and bottom
*
*/
function createStackParser(...parsers) {
	const sortedParsers = parsers.sort((a, b) => a[0] - b[0]).map((p) => p[1]);
	return (stack, skipFirstLines = 0, framesToPop = 0) => {
		const frames = [];
		const lines = stack.split("\n");
		for (let i = skipFirstLines; i < lines.length; i++) {
			const line = lines[i];
			if (line.length > 1024) continue;
			const cleanedLine = WEBPACK_ERROR_REGEXP.test(line) ? line.replace(WEBPACK_ERROR_REGEXP, "$1") : line;
			if (cleanedLine.match(/\S*Error: /)) continue;
			for (const parser of sortedParsers) {
				const frame = parser(cleanedLine);
				if (frame) {
					frames.push(frame);
					break;
				}
			}
			if (frames.length >= STACKTRACE_FRAME_LIMIT + framesToPop) break;
		}
		return stripSentryFramesAndReverse(frames.slice(framesToPop));
	};
}
/**
* Gets a stack parser implementation from Options.stackParser
* @see Options
*
* If options contains an array of line parsers, it is converted into a parser
*/
function stackParserFromStackParserOptions(stackParser) {
	if (Array.isArray(stackParser)) return createStackParser(...stackParser);
	return stackParser;
}
/**
* Removes Sentry frames from the top and bottom of the stack if present and enforces a limit of max number of frames.
* Assumes stack input is ordered from top to bottom and returns the reverse representation so call site of the
* function that caused the crash is the last frame in the array.
* @hidden
*/
function stripSentryFramesAndReverse(stack) {
	if (!stack.length) return [];
	const localStack = Array.from(stack);
	if (/sentryWrapped/.test(getLastStackFrame(localStack).function || "")) localStack.pop();
	localStack.reverse();
	if (STRIP_FRAME_REGEXP.test(getLastStackFrame(localStack).function || "")) {
		localStack.pop();
		if (STRIP_FRAME_REGEXP.test(getLastStackFrame(localStack).function || "")) localStack.pop();
	}
	return localStack.slice(0, STACKTRACE_FRAME_LIMIT).map((frame) => ({
		...frame,
		filename: frame.filename || getLastStackFrame(localStack).filename,
		function: frame.function || "?"
	}));
}
function getLastStackFrame(arr) {
	return arr[arr.length - 1] || {};
}
var defaultFunctionName = "<anonymous>";
/**
* Safely extract function name from itself
*/
function getFunctionName(fn) {
	try {
		if (!fn || typeof fn !== "function") return defaultFunctionName;
		return fn.name || defaultFunctionName;
	} catch (e) {
		return defaultFunctionName;
	}
}
/**
* Get's stack frames from an event without needing to check for undefined properties.
*/
function getFramesFromEvent(event) {
	const exception = event.exception;
	if (exception) {
		const frames = [];
		try {
			exception.values.forEach((value) => {
				if (value.stacktrace.frames) frames.push(...value.stacktrace.frames);
			});
			return frames;
		} catch (_oO) {
			return;
		}
	}
}
//#endregion
//#region node_modules/@sentry/core/build/esm/utils-hoist/instrument/handlers.js
var handlers = {};
var instrumented = {};
/** Add a handler function. */
function addHandler(type, handler) {
	handlers[type] = handlers[type] || [];
	handlers[type].push(handler);
}
/** Maybe run an instrumentation function, unless it was already called. */
function maybeInstrument(type, instrumentFn) {
	if (!instrumented[type]) {
		instrumented[type] = true;
		try {
			instrumentFn();
		} catch (e) {
			DEBUG_BUILD$1 && logger.error(`Error while instrumenting ${type}`, e);
		}
	}
}
/** Trigger handlers for a given instrumentation type. */
function triggerHandlers(type, data) {
	const typeHandlers = type && handlers[type];
	if (!typeHandlers) return;
	for (const handler of typeHandlers) try {
		handler(data);
	} catch (e) {
		DEBUG_BUILD$1 && logger.error(`Error while triggering instrumentation handler.\nType: ${type}\nName: ${getFunctionName(handler)}\nError:`, e);
	}
}
//#endregion
//#region node_modules/@sentry/core/build/esm/utils-hoist/is.js
var objectToString = Object.prototype.toString;
/**
* Checks whether given value's type is one of a few Error or Error-like
* {@link isError}.
*
* @param wat A value to be checked.
* @returns A boolean representing the result.
*/
function isError(wat) {
	switch (objectToString.call(wat)) {
		case "[object Error]":
		case "[object Exception]":
		case "[object DOMException]":
		case "[object WebAssembly.Exception]": return true;
		default: return isInstanceOf(wat, Error);
	}
}
/**
* Checks whether given value is an instance of the given built-in class.
*
* @param wat The value to be checked
* @param className
* @returns A boolean representing the result.
*/
function isBuiltin(wat, className) {
	return objectToString.call(wat) === `[object ${className}]`;
}
/**
* Checks whether given value's type is ErrorEvent
* {@link isErrorEvent}.
*
* @param wat A value to be checked.
* @returns A boolean representing the result.
*/
function isErrorEvent(wat) {
	return isBuiltin(wat, "ErrorEvent");
}
/**
* Checks whether given value's type is DOMError
* {@link isDOMError}.
*
* @param wat A value to be checked.
* @returns A boolean representing the result.
*/
function isDOMError(wat) {
	return isBuiltin(wat, "DOMError");
}
/**
* Checks whether given value's type is DOMException
* {@link isDOMException}.
*
* @param wat A value to be checked.
* @returns A boolean representing the result.
*/
function isDOMException(wat) {
	return isBuiltin(wat, "DOMException");
}
/**
* Checks whether given value's type is a string
* {@link isString}.
*
* @param wat A value to be checked.
* @returns A boolean representing the result.
*/
function isString(wat) {
	return isBuiltin(wat, "String");
}
/**
* Checks whether given string is parameterized
* {@link isParameterizedString}.
*
* @param wat A value to be checked.
* @returns A boolean representing the result.
*/
function isParameterizedString(wat) {
	return typeof wat === "object" && wat !== null && "__sentry_template_string__" in wat && "__sentry_template_values__" in wat;
}
/**
* Checks whether given value is a primitive (undefined, null, number, boolean, string, bigint, symbol)
* {@link isPrimitive}.
*
* @param wat A value to be checked.
* @returns A boolean representing the result.
*/
function isPrimitive(wat) {
	return wat === null || isParameterizedString(wat) || typeof wat !== "object" && typeof wat !== "function";
}
/**
* Checks whether given value's type is an object literal, or a class instance.
* {@link isPlainObject}.
*
* @param wat A value to be checked.
* @returns A boolean representing the result.
*/
function isPlainObject(wat) {
	return isBuiltin(wat, "Object");
}
/**
* Checks whether given value's type is an Event instance
* {@link isEvent}.
*
* @param wat A value to be checked.
* @returns A boolean representing the result.
*/
function isEvent(wat) {
	return typeof Event !== "undefined" && isInstanceOf(wat, Event);
}
/**
* Checks whether given value's type is an Element instance
* {@link isElement}.
*
* @param wat A value to be checked.
* @returns A boolean representing the result.
*/
function isElement(wat) {
	return typeof Element !== "undefined" && isInstanceOf(wat, Element);
}
/**
* Checks whether given value's type is an regexp
* {@link isRegExp}.
*
* @param wat A value to be checked.
* @returns A boolean representing the result.
*/
function isRegExp(wat) {
	return isBuiltin(wat, "RegExp");
}
/**
* Checks whether given value has a then function.
* @param wat A value to be checked.
*/
function isThenable(wat) {
	return Boolean(wat && wat.then && typeof wat.then === "function");
}
/**
* Checks whether given value's type is a SyntheticEvent
* {@link isSyntheticEvent}.
*
* @param wat A value to be checked.
* @returns A boolean representing the result.
*/
function isSyntheticEvent(wat) {
	return isPlainObject(wat) && "nativeEvent" in wat && "preventDefault" in wat && "stopPropagation" in wat;
}
/**
* Checks whether given value's type is an instance of provided constructor.
* {@link isInstanceOf}.
*
* @param wat A value to be checked.
* @param base A constructor to be used in a check.
* @returns A boolean representing the result.
*/
function isInstanceOf(wat, base) {
	try {
		return wat instanceof base;
	} catch (_e) {
		return false;
	}
}
/**
* Checks whether given value's type is a Vue ViewModel.
*
* @param wat A value to be checked.
* @returns A boolean representing the result.
*/
function isVueViewModel(wat) {
	return !!(typeof wat === "object" && wat !== null && (wat.__isVue || wat._isVue));
}
//#endregion
//#region node_modules/@sentry/core/build/esm/utils-hoist/browser.js
var WINDOW$3 = GLOBAL_OBJ;
var DEFAULT_MAX_STRING_LENGTH = 80;
/**
* Given a child DOM element, returns a query-selector statement describing that
* and its ancestors
* e.g. [HTMLElement] => body > div > input#foo.btn[name=baz]
* @returns generated DOM path
*/
function htmlTreeAsString(elem, options = {}) {
	if (!elem) return "<unknown>";
	try {
		let currentElem = elem;
		const MAX_TRAVERSE_HEIGHT = 5;
		const out = [];
		let height = 0;
		let len = 0;
		const separator = " > ";
		const sepLength = 3;
		let nextStr;
		const keyAttrs = Array.isArray(options) ? options : options.keyAttrs;
		const maxStringLength = !Array.isArray(options) && options.maxStringLength || DEFAULT_MAX_STRING_LENGTH;
		while (currentElem && height++ < MAX_TRAVERSE_HEIGHT) {
			nextStr = _htmlElementAsString(currentElem, keyAttrs);
			if (nextStr === "html" || height > 1 && len + out.length * sepLength + nextStr.length >= maxStringLength) break;
			out.push(nextStr);
			len += nextStr.length;
			currentElem = currentElem.parentNode;
		}
		return out.reverse().join(separator);
	} catch (_oO) {
		return "<unknown>";
	}
}
/**
* Returns a simple, query-selector representation of a DOM element
* e.g. [HTMLElement] => input#foo.btn[name=baz]
* @returns generated DOM path
*/
function _htmlElementAsString(el, keyAttrs) {
	const elem = el;
	const out = [];
	if (!elem || !elem.tagName) return "";
	if (WINDOW$3.HTMLElement) {
		if (elem instanceof HTMLElement && elem.dataset) {
			if (elem.dataset["sentryComponent"]) return elem.dataset["sentryComponent"];
			if (elem.dataset["sentryElement"]) return elem.dataset["sentryElement"];
		}
	}
	out.push(elem.tagName.toLowerCase());
	const keyAttrPairs = keyAttrs && keyAttrs.length ? keyAttrs.filter((keyAttr) => elem.getAttribute(keyAttr)).map((keyAttr) => [keyAttr, elem.getAttribute(keyAttr)]) : null;
	if (keyAttrPairs && keyAttrPairs.length) keyAttrPairs.forEach((keyAttrPair) => {
		out.push(`[${keyAttrPair[0]}="${keyAttrPair[1]}"]`);
	});
	else {
		if (elem.id) out.push(`#${elem.id}`);
		const className = elem.className;
		if (className && isString(className)) {
			const classes = className.split(/\s+/);
			for (const c of classes) out.push(`.${c}`);
		}
	}
	for (const k of [
		"aria-label",
		"type",
		"name",
		"title",
		"alt"
	]) {
		const attr = elem.getAttribute(k);
		if (attr) out.push(`[${k}="${attr}"]`);
	}
	return out.join("");
}
/**
* A safe form of location.href
*/
function getLocationHref() {
	try {
		return WINDOW$3.document.location.href;
	} catch (oO) {
		return "";
	}
}
/**
* Given a DOM element, traverses up the tree until it finds the first ancestor node
* that has the `data-sentry-component` or `data-sentry-element` attribute with `data-sentry-component` taking
* precedence. This attribute is added at build-time by projects that have the component name annotation plugin installed.
*
* @returns a string representation of the component for the provided DOM element, or `null` if not found
*/
function getComponentName(elem) {
	if (!WINDOW$3.HTMLElement) return null;
	let currentElem = elem;
	const MAX_TRAVERSE_HEIGHT = 5;
	for (let i = 0; i < MAX_TRAVERSE_HEIGHT; i++) {
		if (!currentElem) return null;
		if (currentElem instanceof HTMLElement) {
			if (currentElem.dataset["sentryComponent"]) return currentElem.dataset["sentryComponent"];
			if (currentElem.dataset["sentryElement"]) return currentElem.dataset["sentryElement"];
		}
		currentElem = currentElem.parentNode;
	}
	return null;
}
//#endregion
//#region node_modules/@sentry/core/build/esm/utils-hoist/string.js
/**
* Truncates given string to the maximum characters count
*
* @param str An object that contains serializable values
* @param max Maximum number of characters in truncated string (0 = unlimited)
* @returns string Encoded
*/
function truncate(str, max = 0) {
	if (typeof str !== "string" || max === 0) return str;
	return str.length <= max ? str : `${str.slice(0, max)}...`;
}
/**
* Join values in array
* @param input array of values to be joined together
* @param delimiter string to be placed in-between values
* @returns Joined values
*/
function safeJoin(input, delimiter) {
	if (!Array.isArray(input)) return "";
	const output = [];
	for (let i = 0; i < input.length; i++) {
		const value = input[i];
		try {
			if (isVueViewModel(value)) output.push("[VueViewModel]");
			else output.push(String(value));
		} catch (e) {
			output.push("[value cannot be serialized]");
		}
	}
	return output.join(delimiter);
}
/**
* Checks if the given value matches a regex or string
*
* @param value The string to test
* @param pattern Either a regex or a string against which `value` will be matched
* @param requireExactStringMatch If true, `value` must match `pattern` exactly. If false, `value` will match
* `pattern` if it contains `pattern`. Only applies to string-type patterns.
*/
function isMatchingPattern(value, pattern, requireExactStringMatch = false) {
	if (!isString(value)) return false;
	if (isRegExp(pattern)) return pattern.test(value);
	if (isString(pattern)) return requireExactStringMatch ? value === pattern : value.includes(pattern);
	return false;
}
/**
* Test the given string against an array of strings and regexes. By default, string matching is done on a
* substring-inclusion basis rather than a strict equality basis
*
* @param testString The string to test
* @param patterns The patterns against which to test the string
* @param requireExactStringMatch If true, `testString` must match one of the given string patterns exactly in order to
* count. If false, `testString` will match a string pattern if it contains that pattern.
* @returns
*/
function stringMatchesSomePattern(testString, patterns = [], requireExactStringMatch = false) {
	return patterns.some((pattern) => isMatchingPattern(testString, pattern, requireExactStringMatch));
}
//#endregion
//#region node_modules/@sentry/core/build/esm/utils-hoist/object.js
/**
* Replace a method in an object with a wrapped version of itself.
*
* @param source An object that contains a method to be wrapped.
* @param name The name of the method to be wrapped.
* @param replacementFactory A higher-order function that takes the original version of the given method and returns a
* wrapped version. Note: The function returned by `replacementFactory` needs to be a non-arrow function, in order to
* preserve the correct value of `this`, and the original method must be called using `origMethod.call(this, <other
* args>)` or `origMethod.apply(this, [<other args>])` (rather than being called directly), again to preserve `this`.
* @returns void
*/
function fill(source, name, replacementFactory) {
	if (!(name in source)) return;
	const original = source[name];
	const wrapped = replacementFactory(original);
	if (typeof wrapped === "function") markFunctionWrapped(wrapped, original);
	try {
		source[name] = wrapped;
	} catch (e) {
		DEBUG_BUILD$1 && logger.log(`Failed to replace method "${name}" in object`, source);
	}
}
/**
* Defines a non-enumerable property on the given object.
*
* @param obj The object on which to set the property
* @param name The name of the property to be set
* @param value The value to which to set the property
*/
function addNonEnumerableProperty(obj, name, value) {
	try {
		Object.defineProperty(obj, name, {
			value,
			writable: true,
			configurable: true
		});
	} catch (o_O) {
		DEBUG_BUILD$1 && logger.log(`Failed to add non-enumerable property "${name}" to object`, obj);
	}
}
/**
* Remembers the original function on the wrapped function and
* patches up the prototype.
*
* @param wrapped the wrapper function
* @param original the original function that gets wrapped
*/
function markFunctionWrapped(wrapped, original) {
	try {
		wrapped.prototype = original.prototype = original.prototype || {};
		addNonEnumerableProperty(wrapped, "__sentry_original__", original);
	} catch (o_O) {}
}
/**
* This extracts the original function if available.  See
* `markFunctionWrapped` for more information.
*
* @param func the function to unwrap
* @returns the unwrapped version of the function if available.
*/
function getOriginalFunction(func) {
	return func.__sentry_original__;
}
/**
* Transforms any `Error` or `Event` into a plain object with all of their enumerable properties, and some of their
* non-enumerable properties attached.
*
* @param value Initial source that we have to transform in order for it to be usable by the serializer
* @returns An Event or Error turned into an object - or the value argument itself, when value is neither an Event nor
*  an Error.
*/
function convertToPlainObject(value) {
	if (isError(value)) return {
		message: value.message,
		name: value.name,
		stack: value.stack,
		...getOwnProperties(value)
	};
	else if (isEvent(value)) {
		const newObj = {
			type: value.type,
			target: serializeEventTarget(value.target),
			currentTarget: serializeEventTarget(value.currentTarget),
			...getOwnProperties(value)
		};
		if (typeof CustomEvent !== "undefined" && isInstanceOf(value, CustomEvent)) newObj.detail = value.detail;
		return newObj;
	} else return value;
}
/** Creates a string representation of the target of an `Event` object */
function serializeEventTarget(target) {
	try {
		return isElement(target) ? htmlTreeAsString(target) : Object.prototype.toString.call(target);
	} catch (_oO) {
		return "<unknown>";
	}
}
/** Filters out all but an object's own properties */
function getOwnProperties(obj) {
	if (typeof obj === "object" && obj !== null) {
		const extractedProps = {};
		for (const property in obj) if (Object.prototype.hasOwnProperty.call(obj, property)) extractedProps[property] = obj[property];
		return extractedProps;
	} else return {};
}
/**
* Given any captured exception, extract its keys and create a sorted
* and truncated list that will be used inside the event message.
* eg. `Non-error exception captured with keys: foo, bar, baz`
*/
function extractExceptionKeysForMessage(exception, maxLength = 40) {
	const keys = Object.keys(convertToPlainObject(exception));
	keys.sort();
	const firstKey = keys[0];
	if (!firstKey) return "[object has no keys]";
	if (firstKey.length >= maxLength) return truncate(firstKey, maxLength);
	for (let includedKeys = keys.length; includedKeys > 0; includedKeys--) {
		const serialized = keys.slice(0, includedKeys).join(", ");
		if (serialized.length > maxLength) continue;
		if (includedKeys === keys.length) return serialized;
		return truncate(serialized, maxLength);
	}
	return "";
}
/**
* Given any object, return a new object having removed all fields whose value was `undefined`.
* Works recursively on objects and arrays.
*
* Attention: This function keeps circular references in the returned object.
*/
function dropUndefinedKeys(inputValue) {
	return _dropUndefinedKeys(inputValue, /* @__PURE__ */ new Map());
}
function _dropUndefinedKeys(inputValue, memoizationMap) {
	if (isPojo(inputValue)) {
		const memoVal = memoizationMap.get(inputValue);
		if (memoVal !== void 0) return memoVal;
		const returnValue = {};
		memoizationMap.set(inputValue, returnValue);
		for (const key of Object.getOwnPropertyNames(inputValue)) if (typeof inputValue[key] !== "undefined") returnValue[key] = _dropUndefinedKeys(inputValue[key], memoizationMap);
		return returnValue;
	}
	if (Array.isArray(inputValue)) {
		const memoVal = memoizationMap.get(inputValue);
		if (memoVal !== void 0) return memoVal;
		const returnValue = [];
		memoizationMap.set(inputValue, returnValue);
		inputValue.forEach((item) => {
			returnValue.push(_dropUndefinedKeys(item, memoizationMap));
		});
		return returnValue;
	}
	return inputValue;
}
function isPojo(input) {
	if (!isPlainObject(input)) return false;
	try {
		const name = Object.getPrototypeOf(input).constructor.name;
		return !name || name === "Object";
	} catch (e2) {
		return true;
	}
}
//#endregion
//#region node_modules/@sentry/core/build/esm/utils-hoist/time.js
var ONE_SECOND_IN_MS = 1e3;
/**
* A partial definition of the [Performance Web API]{@link https://developer.mozilla.org/en-US/docs/Web/API/Performance}
* for accessing a high-resolution monotonic clock.
*/
/**
* Returns a timestamp in seconds since the UNIX epoch using the Date API.
*
* TODO(v8): Return type should be rounded.
*/
function dateTimestampInSeconds() {
	return Date.now() / ONE_SECOND_IN_MS;
}
/**
* Returns a wrapper around the native Performance API browser implementation, or undefined for browsers that do not
* support the API.
*
* Wrapping the native API works around differences in behavior from different browsers.
*/
function createUnixTimestampInSecondsFunc() {
	const { performance } = GLOBAL_OBJ;
	if (!performance || !performance.now) return dateTimestampInSeconds;
	const approxStartingTimeOrigin = Date.now() - performance.now();
	const timeOrigin = performance.timeOrigin == void 0 ? approxStartingTimeOrigin : performance.timeOrigin;
	return () => {
		return (timeOrigin + performance.now()) / ONE_SECOND_IN_MS;
	};
}
/**
* Returns a timestamp in seconds since the UNIX epoch using either the Performance or Date APIs, depending on the
* availability of the Performance API.
*
* BUG: Note that because of how browsers implement the Performance API, the clock might stop when the computer is
* asleep. This creates a skew between `dateTimestampInSeconds` and `timestampInSeconds`. The
* skew can grow to arbitrary amounts like days, weeks or months.
* See https://github.com/getsentry/sentry-javascript/issues/2590.
*/
var timestampInSeconds = createUnixTimestampInSecondsFunc();
(() => {
	const { performance } = GLOBAL_OBJ;
	if (!performance || !performance.now) return;
	const threshold = 36e5;
	const performanceNow = performance.now();
	const dateNow = Date.now();
	const timeOriginDelta = performance.timeOrigin ? Math.abs(performance.timeOrigin + performanceNow - dateNow) : threshold;
	const timeOriginIsReliable = timeOriginDelta < threshold;
	const navigationStart = performance.timing && performance.timing.navigationStart;
	const navigationStartDelta = typeof navigationStart === "number" ? Math.abs(navigationStart + performanceNow - dateNow) : threshold;
	if (timeOriginIsReliable || navigationStartDelta < threshold) if (timeOriginDelta <= navigationStartDelta) return performance.timeOrigin;
	else return navigationStart;
	return dateNow;
})();
//#endregion
//#region node_modules/@sentry/core/build/esm/utils-hoist/misc.js
/**
* UUID4 generator
*
* @returns string Generated UUID4.
*/
function uuid4() {
	const gbl = GLOBAL_OBJ;
	const crypto = gbl.crypto || gbl.msCrypto;
	let getRandomByte = () => Math.random() * 16;
	try {
		if (crypto && crypto.randomUUID) return crypto.randomUUID().replace(/-/g, "");
		if (crypto && crypto.getRandomValues) getRandomByte = () => {
			const typedArray = /* @__PURE__ */ new Uint8Array(1);
			crypto.getRandomValues(typedArray);
			return typedArray[0];
		};
	} catch (_) {}
	return "10000000100040008000100000000000".replace(/[018]/g, (c) => (c ^ (getRandomByte() & 15) >> c / 4).toString(16));
}
function getFirstException(event) {
	return event.exception && event.exception.values ? event.exception.values[0] : void 0;
}
/**
* Extracts either message or type+value from an event that can be used for user-facing logs
* @returns event's description
*/
function getEventDescription(event) {
	const { message, event_id: eventId } = event;
	if (message) return message;
	const firstException = getFirstException(event);
	if (firstException) {
		if (firstException.type && firstException.value) return `${firstException.type}: ${firstException.value}`;
		return firstException.type || firstException.value || eventId || "<unknown>";
	}
	return eventId || "<unknown>";
}
/**
* Adds exception values, type and value to an synthetic Exception.
* @param event The event to modify.
* @param value Value of the exception.
* @param type Type of the exception.
* @hidden
*/
function addExceptionTypeValue(event, value, type) {
	const exception = event.exception = event.exception || {};
	const values = exception.values = exception.values || [];
	const firstException = values[0] = values[0] || {};
	if (!firstException.value) firstException.value = value || "";
	if (!firstException.type) firstException.type = type || "Error";
}
/**
* Adds exception mechanism data to a given event. Uses defaults if the second parameter is not passed.
*
* @param event The event to modify.
* @param newMechanism Mechanism data to add to the event.
* @hidden
*/
function addExceptionMechanism(event, newMechanism) {
	const firstException = getFirstException(event);
	if (!firstException) return;
	const defaultMechanism = {
		type: "generic",
		handled: true
	};
	const currentMechanism = firstException.mechanism;
	firstException.mechanism = {
		...defaultMechanism,
		...currentMechanism,
		...newMechanism
	};
	if (newMechanism && "data" in newMechanism) {
		const mergedData = {
			...currentMechanism && currentMechanism.data,
			...newMechanism.data
		};
		firstException.mechanism.data = mergedData;
	}
}
/**
* Checks whether or not we've already captured the given exception (note: not an identical exception - the very object
* in question), and marks it captured if not.
*
* This is useful because it's possible for an error to get captured by more than one mechanism. After we intercept and
* record an error, we rethrow it (assuming we've intercepted it before it's reached the top-level global handlers), so
* that we don't interfere with whatever effects the error might have had were the SDK not there. At that point, because
* the error has been rethrown, it's possible for it to bubble up to some other code we've instrumented. If it's not
* caught after that, it will bubble all the way up to the global handlers (which of course we also instrument). This
* function helps us ensure that even if we encounter the same error more than once, we only record it the first time we
* see it.
*
* Note: It will ignore primitives (always return `false` and not mark them as seen), as properties can't be set on
* them. {@link: Object.objectify} can be used on exceptions to convert any that are primitives into their equivalent
* object wrapper forms so that this check will always work. However, because we need to flag the exact object which
* will get rethrown, and because that rethrowing happens outside of the event processing pipeline, the objectification
* must be done before the exception captured.
*
* @param A thrown exception to check or flag as having been seen
* @returns `true` if the exception has already been captured, `false` if not (with the side effect of marking it seen)
*/
function checkOrSetAlreadyCaught(exception) {
	if (isAlreadyCaptured(exception)) return true;
	try {
		addNonEnumerableProperty(exception, "__sentry_captured__", true);
	} catch (err) {}
	return false;
}
function isAlreadyCaptured(exception) {
	try {
		return exception.__sentry_captured__;
	} catch (e) {}
}
//#endregion
//#region node_modules/@sentry/core/build/esm/utils-hoist/supports.js
var WINDOW$2 = GLOBAL_OBJ;
/**
* Tells whether current environment supports Fetch API
* {@link supportsFetch}.
*
* @returns Answer to the given question.
*/
function supportsFetch() {
	if (!("fetch" in WINDOW$2)) return false;
	try {
		new Headers();
		new Request("http://www.example.com");
		new Response();
		return true;
	} catch (e) {
		return false;
	}
}
/**
* isNative checks if the given function is a native implementation
*/
function isNativeFunction(func) {
	return func && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(func.toString());
}
/**
* Tells whether current environment supports Fetch API natively
* {@link supportsNativeFetch}.
*
* @returns true if `window.fetch` is natively implemented, false otherwise
*/
function supportsNativeFetch() {
	if (typeof EdgeRuntime === "string") return true;
	if (!supportsFetch()) return false;
	if (isNativeFunction(WINDOW$2.fetch)) return true;
	let result = false;
	const doc = WINDOW$2.document;
	if (doc && typeof doc.createElement === "function") try {
		const sandbox = doc.createElement("iframe");
		sandbox.hidden = true;
		doc.head.appendChild(sandbox);
		if (sandbox.contentWindow && sandbox.contentWindow.fetch) result = isNativeFunction(sandbox.contentWindow.fetch);
		doc.head.removeChild(sandbox);
	} catch (err) {
		DEBUG_BUILD$1 && logger.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", err);
	}
	return result;
}
//#endregion
//#region node_modules/@sentry/core/build/esm/utils-hoist/vendor/supportsHistory.js
var WINDOW$1 = GLOBAL_OBJ;
/**
* Tells whether current environment supports History API
* {@link supportsHistory}.
*
* @returns Answer to the given question.
*/
function supportsHistory() {
	const chromeVar = WINDOW$1.chrome;
	const isChromePackagedApp = chromeVar && chromeVar.app && chromeVar.app.runtime;
	const hasHistoryApi = "history" in WINDOW$1 && !!WINDOW$1.history.pushState && !!WINDOW$1.history.replaceState;
	return !isChromePackagedApp && hasHistoryApi;
}
//#endregion
//#region node_modules/@sentry-internal/browser-utils/build/esm/debug-build.js
/**
* This serves as a build time flag that will be true by default, but false in non-debug builds or if users replace `__SENTRY_DEBUG__` in their generated code.
*
* ATTENTION: This constant must never cross package boundaries (i.e. be exported) to guarantee that it can be used for tree shaking.
*/
var DEBUG_BUILD = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
//#endregion
//#region node_modules/@sentry-internal/browser-utils/build/esm/types.js
var WINDOW = GLOBAL_OBJ;
//#endregion
//#region node_modules/@sentry-internal/browser-utils/build/esm/instrument/dom.js
var DEBOUNCE_DURATION = 1e3;
var debounceTimerID;
var lastCapturedEventType;
var lastCapturedEventTargetId;
/**
* Add an instrumentation handler for when a click or a keypress happens.
*
* Use at your own risk, this might break without changelog notice, only used internally.
* @hidden
*/
function addClickKeypressInstrumentationHandler(handler) {
	const type = "dom";
	addHandler(type, handler);
	maybeInstrument(type, instrumentDOM);
}
/** Exported for tests only. */
function instrumentDOM() {
	if (!WINDOW.document) return;
	const triggerDOMHandler = triggerHandlers.bind(null, "dom");
	const globalDOMEventHandler = makeDOMEventHandler(triggerDOMHandler, true);
	WINDOW.document.addEventListener("click", globalDOMEventHandler, false);
	WINDOW.document.addEventListener("keypress", globalDOMEventHandler, false);
	["EventTarget", "Node"].forEach((target) => {
		const targetObj = WINDOW[target];
		const proto = targetObj && targetObj.prototype;
		if (!proto || !proto.hasOwnProperty || !proto.hasOwnProperty("addEventListener")) return;
		fill(proto, "addEventListener", function(originalAddEventListener) {
			return function(type, listener, options) {
				if (type === "click" || type == "keypress") try {
					const handlers = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {};
					const handlerForType = handlers[type] = handlers[type] || { refCount: 0 };
					if (!handlerForType.handler) {
						const handler = makeDOMEventHandler(triggerDOMHandler);
						handlerForType.handler = handler;
						originalAddEventListener.call(this, type, handler, options);
					}
					handlerForType.refCount++;
				} catch (e) {}
				return originalAddEventListener.call(this, type, listener, options);
			};
		});
		fill(proto, "removeEventListener", function(originalRemoveEventListener) {
			return function(type, listener, options) {
				if (type === "click" || type == "keypress") try {
					const handlers = this.__sentry_instrumentation_handlers__ || {};
					const handlerForType = handlers[type];
					if (handlerForType) {
						handlerForType.refCount--;
						if (handlerForType.refCount <= 0) {
							originalRemoveEventListener.call(this, type, handlerForType.handler, options);
							handlerForType.handler = void 0;
							delete handlers[type];
						}
						if (Object.keys(handlers).length === 0) delete this.__sentry_instrumentation_handlers__;
					}
				} catch (e) {}
				return originalRemoveEventListener.call(this, type, listener, options);
			};
		});
	});
}
/**
* Check whether the event is similar to the last captured one. For example, two click events on the same button.
*/
function isSimilarToLastCapturedEvent(event) {
	if (event.type !== lastCapturedEventType) return false;
	try {
		if (!event.target || event.target._sentryId !== lastCapturedEventTargetId) return false;
	} catch (e) {}
	return true;
}
/**
* Decide whether an event should be captured.
* @param event event to be captured
*/
function shouldSkipDOMEvent(eventType, target) {
	if (eventType !== "keypress") return false;
	if (!target || !target.tagName) return true;
	if (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable) return false;
	return true;
}
/**
* Wraps addEventListener to capture UI breadcrumbs
*/
function makeDOMEventHandler(handler, globalListener = false) {
	return (event) => {
		if (!event || event["_sentryCaptured"]) return;
		const target = getEventTarget(event);
		if (shouldSkipDOMEvent(event.type, target)) return;
		addNonEnumerableProperty(event, "_sentryCaptured", true);
		if (target && !target._sentryId) addNonEnumerableProperty(target, "_sentryId", uuid4());
		const name = event.type === "keypress" ? "input" : event.type;
		if (!isSimilarToLastCapturedEvent(event)) {
			handler({
				event,
				name,
				global: globalListener
			});
			lastCapturedEventType = event.type;
			lastCapturedEventTargetId = target ? target._sentryId : void 0;
		}
		clearTimeout(debounceTimerID);
		debounceTimerID = WINDOW.setTimeout(() => {
			lastCapturedEventTargetId = void 0;
			lastCapturedEventType = void 0;
		}, DEBOUNCE_DURATION);
	};
}
function getEventTarget(event) {
	try {
		return event.target;
	} catch (e) {
		return null;
	}
}
//#endregion
//#region node_modules/@sentry-internal/browser-utils/build/esm/instrument/history.js
var lastHref;
/**
* Add an instrumentation handler for when a fetch request happens.
* The handler function is called once when the request starts and once when it ends,
* which can be identified by checking if it has an `endTimestamp`.
*
* Use at your own risk, this might break without changelog notice, only used internally.
* @hidden
*/
function addHistoryInstrumentationHandler(handler) {
	const type = "history";
	addHandler(type, handler);
	maybeInstrument(type, instrumentHistory);
}
function instrumentHistory() {
	if (!supportsHistory()) return;
	const oldOnPopState = WINDOW.onpopstate;
	WINDOW.onpopstate = function(...args) {
		const to = WINDOW.location.href;
		const from = lastHref;
		lastHref = to;
		triggerHandlers("history", {
			from,
			to
		});
		if (oldOnPopState) try {
			return oldOnPopState.apply(this, args);
		} catch (_oO) {}
	};
	function historyReplacementFunction(originalHistoryFunction) {
		return function(...args) {
			const url = args.length > 2 ? args[2] : void 0;
			if (url) {
				const from = lastHref;
				const to = String(url);
				lastHref = to;
				triggerHandlers("history", {
					from,
					to
				});
			}
			return originalHistoryFunction.apply(this, args);
		};
	}
	fill(WINDOW.history, "pushState", historyReplacementFunction);
	fill(WINDOW.history, "replaceState", historyReplacementFunction);
}
//#endregion
//#region node_modules/@sentry-internal/browser-utils/build/esm/getNativeImplementation.js
/**
* We generally want to use window.fetch / window.setTimeout.
* However, in some cases this may be wrapped (e.g. by Zone.js for Angular),
* so we try to get an unpatched version of this from a sandboxed iframe.
*/
var cachedImplementations = {};
/**
* Get the native implementation of a browser function.
*
* This can be used to ensure we get an unwrapped version of a function, in cases where a wrapped function can lead to problems.
*
* The following methods can be retrieved:
* - `setTimeout`: This can be wrapped by e.g. Angular, causing change detection to be triggered.
* - `fetch`: This can be wrapped by e.g. ad-blockers, causing an infinite loop when a request is blocked.
*/
function getNativeImplementation(name) {
	const cached = cachedImplementations[name];
	if (cached) return cached;
	let impl = WINDOW[name];
	if (isNativeFunction(impl)) return cachedImplementations[name] = impl.bind(WINDOW);
	const document = WINDOW.document;
	if (document && typeof document.createElement === "function") try {
		const sandbox = document.createElement("iframe");
		sandbox.hidden = true;
		document.head.appendChild(sandbox);
		const contentWindow = sandbox.contentWindow;
		if (contentWindow && contentWindow[name]) impl = contentWindow[name];
		document.head.removeChild(sandbox);
	} catch (e) {
		DEBUG_BUILD && logger.warn(`Could not create sandbox iframe for ${name} check, bailing to window.${name}: `, e);
	}
	if (!impl) return impl;
	return cachedImplementations[name] = impl.bind(WINDOW);
}
/** Clear a cached implementation. */
function clearCachedImplementation(name) {
	cachedImplementations[name] = void 0;
}
//#endregion
//#region node_modules/@sentry-internal/browser-utils/build/esm/instrument/xhr.js
var SENTRY_XHR_DATA_KEY = "__sentry_xhr_v3__";
/**
* Add an instrumentation handler for when an XHR request happens.
* The handler function is called once when the request starts and once when it ends,
* which can be identified by checking if it has an `endTimestamp`.
*
* Use at your own risk, this might break without changelog notice, only used internally.
* @hidden
*/
function addXhrInstrumentationHandler(handler) {
	const type = "xhr";
	addHandler(type, handler);
	maybeInstrument(type, instrumentXHR);
}
/** Exported only for tests. */
function instrumentXHR() {
	if (!WINDOW.XMLHttpRequest) return;
	const xhrproto = XMLHttpRequest.prototype;
	xhrproto.open = new Proxy(xhrproto.open, { apply(originalOpen, xhrOpenThisArg, xhrOpenArgArray) {
		const virtualError = /* @__PURE__ */ new Error();
		const startTimestamp = timestampInSeconds() * 1e3;
		const method = isString(xhrOpenArgArray[0]) ? xhrOpenArgArray[0].toUpperCase() : void 0;
		const url = parseUrl(xhrOpenArgArray[1]);
		if (!method || !url) return originalOpen.apply(xhrOpenThisArg, xhrOpenArgArray);
		xhrOpenThisArg[SENTRY_XHR_DATA_KEY] = {
			method,
			url,
			request_headers: {}
		};
		if (method === "POST" && url.match(/sentry_key/)) xhrOpenThisArg.__sentry_own_request__ = true;
		const onreadystatechangeHandler = () => {
			const xhrInfo = xhrOpenThisArg[SENTRY_XHR_DATA_KEY];
			if (!xhrInfo) return;
			if (xhrOpenThisArg.readyState === 4) {
				try {
					xhrInfo.status_code = xhrOpenThisArg.status;
				} catch (e) {}
				triggerHandlers("xhr", {
					endTimestamp: timestampInSeconds() * 1e3,
					startTimestamp,
					xhr: xhrOpenThisArg,
					virtualError
				});
			}
		};
		if ("onreadystatechange" in xhrOpenThisArg && typeof xhrOpenThisArg.onreadystatechange === "function") xhrOpenThisArg.onreadystatechange = new Proxy(xhrOpenThisArg.onreadystatechange, { apply(originalOnreadystatechange, onreadystatechangeThisArg, onreadystatechangeArgArray) {
			onreadystatechangeHandler();
			return originalOnreadystatechange.apply(onreadystatechangeThisArg, onreadystatechangeArgArray);
		} });
		else xhrOpenThisArg.addEventListener("readystatechange", onreadystatechangeHandler);
		xhrOpenThisArg.setRequestHeader = new Proxy(xhrOpenThisArg.setRequestHeader, { apply(originalSetRequestHeader, setRequestHeaderThisArg, setRequestHeaderArgArray) {
			const [header, value] = setRequestHeaderArgArray;
			const xhrInfo = setRequestHeaderThisArg[SENTRY_XHR_DATA_KEY];
			if (xhrInfo && isString(header) && isString(value)) xhrInfo.request_headers[header.toLowerCase()] = value;
			return originalSetRequestHeader.apply(setRequestHeaderThisArg, setRequestHeaderArgArray);
		} });
		return originalOpen.apply(xhrOpenThisArg, xhrOpenArgArray);
	} });
	xhrproto.send = new Proxy(xhrproto.send, { apply(originalSend, sendThisArg, sendArgArray) {
		const sentryXhrData = sendThisArg[SENTRY_XHR_DATA_KEY];
		if (!sentryXhrData) return originalSend.apply(sendThisArg, sendArgArray);
		if (sendArgArray[0] !== void 0) sentryXhrData.body = sendArgArray[0];
		triggerHandlers("xhr", {
			startTimestamp: timestampInSeconds() * 1e3,
			xhr: sendThisArg
		});
		return originalSend.apply(sendThisArg, sendArgArray);
	} });
}
function parseUrl(url) {
	if (isString(url)) return url;
	try {
		return url.toString();
	} catch (e2) {}
}
//#endregion
export { DEBUG_BUILD$1 as $, isDOMException as A, isThenable as B, safeJoin as C, getLocationHref as D, getComponentName as E, isParameterizedString as F, createStackParser as G, addHandler as H, isPlainObject as I, stackParserFromStackParserOptions as J, getFramesFromEvent as K, isPrimitive as L, isErrorEvent as M, isEvent as N, htmlTreeAsString as O, isInstanceOf as P, originalConsoleMethods as Q, isString as R, markFunctionWrapped as S, truncate as T, maybeInstrument as U, isVueViewModel as V, triggerHandlers as W, consoleSandbox as X, CONSOLE_LEVELS as Y, logger as Z, convertToPlainObject as _, addHistoryInstrumentationHandler as a, fill as b, supportsNativeFetch as c, checkOrSetAlreadyCaught as d, GLOBAL_OBJ as et, getEventDescription as f, addNonEnumerableProperty as g, timestampInSeconds as h, getNativeImplementation as i, isError as j, isDOMError as k, addExceptionMechanism as l, dateTimestampInSeconds as m, addXhrInstrumentationHandler as n, SDK_VERSION as nt, addClickKeypressInstrumentationHandler as o, uuid4 as p, getFunctionName as q, clearCachedImplementation as r, supportsFetch as s, SENTRY_XHR_DATA_KEY as t, getGlobalSingleton as tt, addExceptionTypeValue as u, dropUndefinedKeys as v, stringMatchesSomePattern as w, getOriginalFunction as x, extractExceptionKeysForMessage as y, isSyntheticEvent as z };
