import { t as __commonJSMin } from "../_runtime.mjs";
//#region node_modules/dataloader/index.js
var require_dataloader = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Copyright (c) 2019-present, GraphQL Foundation
	*
	* This source code is licensed under the MIT license found in the
	* LICENSE file in the root directory of this source tree.
	*
	* 
	*/
	/**
	* A `DataLoader` creates a public API for loading data from a particular
	* data back-end with unique keys such as the `id` column of a SQL table or
	* document name in a MongoDB database, given a batch loading function.
	*
	* Each `DataLoader` instance contains a unique memoized cache. Use caution when
	* used in long-lived applications or those which serve many users with
	* different access permissions and consider creating a new instance per
	* web request.
	*/
	var DataLoader = /*#__PURE__*/ function() {
		function DataLoader(batchLoadFn, options) {
			if (typeof batchLoadFn !== "function") throw new TypeError("DataLoader must be constructed with a function which accepts " + ("Array<key> and returns Promise<Array<value>>, but got: " + batchLoadFn + "."));
			this._batchLoadFn = batchLoadFn;
			this._maxBatchSize = getValidMaxBatchSize(options);
			this._batchScheduleFn = getValidBatchScheduleFn(options);
			this._cacheKeyFn = getValidCacheKeyFn(options);
			this._cacheMap = getValidCacheMap(options);
			this._batch = null;
			this.name = getValidName(options);
		}
		var _proto = DataLoader.prototype;
		/**
		* Loads a key, returning a `Promise` for the value represented by that key.
		*/
		_proto.load = function load(key) {
			if (key === null || key === void 0) throw new TypeError("The loader.load() function must be called with a value, " + ("but got: " + String(key) + "."));
			var batch = getCurrentBatch(this);
			var cacheMap = this._cacheMap;
			var cacheKey;
			if (cacheMap) {
				cacheKey = this._cacheKeyFn(key);
				var cachedPromise = cacheMap.get(cacheKey);
				if (cachedPromise) {
					var cacheHits = batch.cacheHits || (batch.cacheHits = []);
					return new Promise(function(resolve) {
						cacheHits.push(function() {
							resolve(cachedPromise);
						});
					});
				}
			}
			batch.keys.push(key);
			var promise = new Promise(function(resolve, reject) {
				batch.callbacks.push({
					resolve,
					reject
				});
			});
			if (cacheMap) cacheMap.set(cacheKey, promise);
			return promise;
		};
		_proto.loadMany = function loadMany(keys) {
			if (!isArrayLike(keys)) throw new TypeError("The loader.loadMany() function must be called with Array<key> " + ("but got: " + keys + "."));
			var loadPromises = [];
			for (var i = 0; i < keys.length; i++) loadPromises.push(this.load(keys[i])["catch"](function(error) {
				return error;
			}));
			return Promise.all(loadPromises);
		};
		_proto.clear = function clear(key) {
			var cacheMap = this._cacheMap;
			if (cacheMap) {
				var cacheKey = this._cacheKeyFn(key);
				cacheMap["delete"](cacheKey);
			}
			return this;
		};
		_proto.clearAll = function clearAll() {
			var cacheMap = this._cacheMap;
			if (cacheMap) cacheMap.clear();
			return this;
		};
		_proto.prime = function prime(key, value) {
			var cacheMap = this._cacheMap;
			if (cacheMap) {
				var cacheKey = this._cacheKeyFn(key);
				if (cacheMap.get(cacheKey) === void 0) {
					var promise;
					if (value instanceof Error) {
						promise = Promise.reject(value);
						promise["catch"](function() {});
					} else promise = Promise.resolve(value);
					cacheMap.set(cacheKey, promise);
				}
			}
			return this;
		};
		return DataLoader;
	}();
	var enqueuePostPromiseJob = typeof process === "object" && typeof process.nextTick === "function" ? function(fn) {
		if (!resolvedPromise) resolvedPromise = Promise.resolve();
		resolvedPromise.then(function() {
			process.nextTick(fn);
		});
	} : typeof setImmediate === "function" ? function(fn) {
		setImmediate(fn);
	} : function(fn) {
		setTimeout(fn);
	};
	var resolvedPromise;
	function getCurrentBatch(loader) {
		var existingBatch = loader._batch;
		if (existingBatch !== null && !existingBatch.hasDispatched && existingBatch.keys.length < loader._maxBatchSize) return existingBatch;
		var newBatch = {
			hasDispatched: false,
			keys: [],
			callbacks: []
		};
		loader._batch = newBatch;
		loader._batchScheduleFn(function() {
			dispatchBatch(loader, newBatch);
		});
		return newBatch;
	}
	function dispatchBatch(loader, batch) {
		batch.hasDispatched = true;
		if (batch.keys.length === 0) {
			resolveCacheHits(batch);
			return;
		}
		var batchPromise;
		try {
			batchPromise = loader._batchLoadFn(batch.keys);
		} catch (e) {
			return failedDispatch(loader, batch, /* @__PURE__ */ new TypeError("DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function " + ("errored synchronously: " + String(e) + ".")));
		}
		if (!batchPromise || typeof batchPromise.then !== "function") return failedDispatch(loader, batch, /* @__PURE__ */ new TypeError("DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did " + ("not return a Promise: " + String(batchPromise) + ".")));
		batchPromise.then(function(values) {
			if (!isArrayLike(values)) throw new TypeError("DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did " + ("not return a Promise of an Array: " + String(values) + "."));
			if (values.length !== batch.keys.length) throw new TypeError("DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys." + ("\n\nKeys:\n" + String(batch.keys)) + ("\n\nValues:\n" + String(values)));
			resolveCacheHits(batch);
			for (var i = 0; i < batch.callbacks.length; i++) {
				var _value = values[i];
				if (_value instanceof Error) batch.callbacks[i].reject(_value);
				else batch.callbacks[i].resolve(_value);
			}
		})["catch"](function(error) {
			failedDispatch(loader, batch, error);
		});
	}
	function failedDispatch(loader, batch, error) {
		resolveCacheHits(batch);
		for (var i = 0; i < batch.keys.length; i++) {
			loader.clear(batch.keys[i]);
			batch.callbacks[i].reject(error);
		}
	}
	function resolveCacheHits(batch) {
		if (batch.cacheHits) for (var i = 0; i < batch.cacheHits.length; i++) batch.cacheHits[i]();
	}
	function getValidMaxBatchSize(options) {
		if (!(!options || options.batch !== false)) return 1;
		var maxBatchSize = options && options.maxBatchSize;
		if (maxBatchSize === void 0) return Infinity;
		if (typeof maxBatchSize !== "number" || maxBatchSize < 1) throw new TypeError("maxBatchSize must be a positive number: " + maxBatchSize);
		return maxBatchSize;
	}
	function getValidBatchScheduleFn(options) {
		var batchScheduleFn = options && options.batchScheduleFn;
		if (batchScheduleFn === void 0) return enqueuePostPromiseJob;
		if (typeof batchScheduleFn !== "function") throw new TypeError("batchScheduleFn must be a function: " + batchScheduleFn);
		return batchScheduleFn;
	}
	function getValidCacheKeyFn(options) {
		var cacheKeyFn = options && options.cacheKeyFn;
		if (cacheKeyFn === void 0) return function(key) {
			return key;
		};
		if (typeof cacheKeyFn !== "function") throw new TypeError("cacheKeyFn must be a function: " + cacheKeyFn);
		return cacheKeyFn;
	}
	function getValidCacheMap(options) {
		if (!(!options || options.cache !== false)) return null;
		var cacheMap = options && options.cacheMap;
		if (cacheMap === void 0) return /* @__PURE__ */ new Map();
		if (cacheMap !== null) {
			var missingFunctions = [
				"get",
				"set",
				"delete",
				"clear"
			].filter(function(fnName) {
				return cacheMap && typeof cacheMap[fnName] !== "function";
			});
			if (missingFunctions.length !== 0) throw new TypeError("Custom cacheMap missing methods: " + missingFunctions.join(", "));
		}
		return cacheMap;
	}
	function getValidName(options) {
		if (options && options.name) return options.name;
		return null;
	}
	function isArrayLike(x) {
		return typeof x === "object" && x !== null && typeof x.length === "number" && (x.length === 0 || x.length > 0 && Object.prototype.hasOwnProperty.call(x, x.length - 1));
	}
	module.exports = DataLoader;
}));
//#endregion
export { require_dataloader as t };
