import { t as __commonJSMin } from "../_runtime.mjs";
//#region node_modules/json-reduce/dist/reduce.js
var require_reduce = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.reduce = reduce;
	exports.withCustomPathSegment = exports.SKIP_MARKER = void 0;
	function _slicedToArray(arr, i) {
		return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
	}
	function _nonIterableRest() {
		throw new TypeError("Invalid attempt to destructure non-iterable instance");
	}
	function _iterableToArrayLimit(arr, i) {
		var _arr = [];
		var _n = true;
		var _d = false;
		var _e = void 0;
		try {
			for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
				_arr.push(_s.value);
				if (i && _arr.length === i) break;
			}
		} catch (err) {
			_d = true;
			_e = err;
		} finally {
			try {
				if (!_n && _i["return"] != null) _i["return"]();
			} finally {
				if (_d) throw _e;
			}
		}
		return _arr;
	}
	function _arrayWithHoles(arr) {
		if (Array.isArray(arr)) return arr;
	}
	function _typeof(obj) {
		if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
			return typeof obj;
		};
		else _typeof = function _typeof(obj) {
			return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
		};
		return _typeof(obj);
	}
	function defaultCreatePathSegment(value, index, outerValue) {
		return index;
	}
	function getType(value) {
		if (Array.isArray(value)) return "array";
		return value === null ? "null" : _typeof(value);
	}
	var SKIP_MARKER = { _: "SKIP_MARKER" };
	exports.SKIP_MARKER = SKIP_MARKER;
	function SKIP(value) {
		return [SKIP_MARKER, value];
	}
	function callReducer(acc, reducerFn, value, path) {
		var returnVal = reducerFn(acc, value, path);
		if (returnVal === SKIP) return [true, acc];
		return Array.isArray(returnVal) && returnVal[0] === SKIP_MARKER ? [true, returnVal[1]] : [false, returnVal];
	}
	function reducePrimitive(acc, reducerFn, value, path) {
		return _slicedToArray(callReducer(acc, reducerFn, value, path), 2)[1];
	}
	function reduceObject(acc, reducerFn, object, path) {
		var createPathSegment = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : defaultCreatePathSegment;
		var _callReducer4 = _slicedToArray(callReducer(acc, reducerFn, object, path), 2), skip = _callReducer4[0], nextAcc = _callReducer4[1];
		return skip ? nextAcc : Object.keys(object).reduce(function(innerAcc, key) {
			return reduceAny(innerAcc, reducerFn, object[key], path.concat(createPathSegment(object[key], key, object)), createPathSegment);
		}, nextAcc);
	}
	function reduceArray(acc, reducerFn, array, path) {
		var createPathSegment = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : defaultCreatePathSegment;
		var _callReducer6 = _slicedToArray(callReducer(acc, reducerFn, array, path), 2), skip = _callReducer6[0], nextAcc = _callReducer6[1];
		return skip ? nextAcc : array.reduce(function(innerAcc, item, index) {
			return reduceAny(innerAcc, reducerFn, item, path.concat(createPathSegment(item, index, array)), createPathSegment);
		}, nextAcc);
	}
	function reduceAny(acc, reducerFn, val, path) {
		var createPathSegment = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : defaultCreatePathSegment;
		var type = getType(val);
		if (type === "object") return reduceObject(acc, reducerFn, val, path, createPathSegment);
		if (type === "array") return reduceArray(acc, reducerFn, val, path, createPathSegment);
		return reducePrimitive(acc, reducerFn, val, path);
	}
	function reduce(value, reducerFn, initial) {
		return reduceAny(initial, reducerFn, value, [], arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : defaultCreatePathSegment);
	}
	exports.withCustomPathSegment = function withCustomPathSegment(createPathSegment) {
		return function(value, reducer, initial) {
			return reduce(value, reducer, initial, createPathSegment);
		};
	};
}));
//#endregion
export { require_reduce as t };
