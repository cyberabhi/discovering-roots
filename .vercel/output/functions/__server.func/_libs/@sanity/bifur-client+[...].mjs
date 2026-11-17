import { t as __commonJSMin } from "../../_runtime.mjs";
import { $ as require_zip, $n as require_timeout, $t as require_takeLast, An as require_concatMapTo, At as require_sample, Bn as require_bufferToggle, Bt as require_pluck, Cn as require_defaultIfEmpty, Ct as require_skip, Dn as require_connect, Dt as require_sequenceEqual, En as require_count, Et as require_share, Fn as require_combineLatestAll, Ft as require_raceWith, Gn as require_audit, Gt as require_mergeWith, Hn as require_bufferCount, Ht as require_onErrorResumeNextWith, In as require_toArray, It as require_publishReplay, Jn as require_argsOrArgArray, Jt as require_mergeMapTo, Kn as require_filter, Kt as require_merge, Ln as require_reduce, Lt as require_publishLast, Mn as require_combineLatestWith, Mt as require_retry, Nn as require_combineLatest, Nt as require_repeatWhen, On as require_concatWith, Ot as require_scan, Pn as require_combineAll, Pt as require_repeat, Q as require_zipWith, Qn as require_map, Qt as require_last, Rn as require_catchError, Rt as require_publishBehavior, Sn as require_take, St as require_skipLast, Tn as require_debounce, Tt as require_shareReplay, Un as require_buffer, Ut as require_multicast, Vn as require_bufferTime, Vt as require_pairwise, Wn as require_auditTime, Wt as require_min, Xn as require_mergeAll, Xt as require_max, Yn as require_concatAll, Yt as require_flatMap, Z as require_cjs, Zn as require_mergeMap, Zt as require_materialize, _n as require_dematerialize, _t as require_switchAll, an as require_finalize, at as require_windowCount, bn as require_mapTo, bt as require_skipWhile, cn as require_exhaustAll, ct as require_timeoutWith, dn as require_endWith, dt as require_throttle, en as require_isEmpty, er as require_subscribeOn, et as require_zipAll, fn as require_elementAt, ft as require_tap, gn as require_distinct, gt as require_switchMapTo, hn as require_distinctUntilChanged, ht as require_switchScan, in as require_find, it as require_windowTime, jn as require_concatMap, jt as require_retryWhen, kn as require_concat, kt as require_sampleTime, ln as require_exhaustMap, lt as require_timeInterval, mn as require_distinctUntilKeyChanged, mt as require_takeUntil, nn as require_first, nr as require_refCount, nt as require_windowWhen, on as require_expand, ot as require_window, pn as require_throwIfEmpty, pt as require_takeWhile, qn as require_not, qt as require_mergeScan, rn as require_findIndex, rt as require_windowToggle, sn as require_exhaust, st as require_timestamp, tn as require_groupBy, tr as require_observeOn, tt as require_withLatestFrom, un as require_every, ut as require_throttleTime, vn as require_delay, vt as require_switchMap, wn as require_debounceTime, wt as require_single, xn as require_ignoreElements, xt as require_skipUntil, yn as require_delayWhen, yt as require_startWith, zn as require_bufferWhen, zt as require_publish } from "../@portabletext/editor+[...].mjs";
import crypto from "crypto";
//#region node_modules/rxjs/dist/cjs/internal/operators/partition.js
var require_partition = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.partition = void 0;
	var not_1 = require_not();
	var filter_1 = require_filter();
	function partition(predicate, thisArg) {
		return function(source) {
			return [filter_1.filter(predicate, thisArg)(source), filter_1.filter(not_1.not(predicate, thisArg))(source)];
		};
	}
	exports.partition = partition;
}));
//#endregion
//#region node_modules/rxjs/dist/cjs/internal/operators/race.js
var require_race = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __read = exports && exports.__read || function(o, n) {
		var m = typeof Symbol === "function" && o[Symbol.iterator];
		if (!m) return o;
		var i = m.call(o), r, ar = [], e;
		try {
			while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
		} catch (error) {
			e = { error };
		} finally {
			try {
				if (r && !r.done && (m = i["return"])) m.call(i);
			} finally {
				if (e) throw e.error;
			}
		}
		return ar;
	};
	var __spreadArray = exports && exports.__spreadArray || function(to, from) {
		for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) to[j] = from[i];
		return to;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.race = void 0;
	var argsOrArgArray_1 = require_argsOrArgArray();
	var raceWith_1 = require_raceWith();
	function race() {
		var args = [];
		for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
		return raceWith_1.raceWith.apply(void 0, __spreadArray([], __read(argsOrArgArray_1.argsOrArgArray(args))));
	}
	exports.race = race;
}));
//#endregion
//#region node_modules/rxjs/dist/cjs/operators/index.js
var require_operators = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.mergeAll = exports.merge = exports.max = exports.materialize = exports.mapTo = exports.map = exports.last = exports.isEmpty = exports.ignoreElements = exports.groupBy = exports.first = exports.findIndex = exports.find = exports.finalize = exports.filter = exports.expand = exports.exhaustMap = exports.exhaustAll = exports.exhaust = exports.every = exports.endWith = exports.elementAt = exports.distinctUntilKeyChanged = exports.distinctUntilChanged = exports.distinct = exports.dematerialize = exports.delayWhen = exports.delay = exports.defaultIfEmpty = exports.debounceTime = exports.debounce = exports.count = exports.connect = exports.concatWith = exports.concatMapTo = exports.concatMap = exports.concatAll = exports.concat = exports.combineLatestWith = exports.combineLatest = exports.combineLatestAll = exports.combineAll = exports.catchError = exports.bufferWhen = exports.bufferToggle = exports.bufferTime = exports.bufferCount = exports.buffer = exports.auditTime = exports.audit = void 0;
	exports.timeInterval = exports.throwIfEmpty = exports.throttleTime = exports.throttle = exports.tap = exports.takeWhile = exports.takeUntil = exports.takeLast = exports.take = exports.switchScan = exports.switchMapTo = exports.switchMap = exports.switchAll = exports.subscribeOn = exports.startWith = exports.skipWhile = exports.skipUntil = exports.skipLast = exports.skip = exports.single = exports.shareReplay = exports.share = exports.sequenceEqual = exports.scan = exports.sampleTime = exports.sample = exports.refCount = exports.retryWhen = exports.retry = exports.repeatWhen = exports.repeat = exports.reduce = exports.raceWith = exports.race = exports.publishReplay = exports.publishLast = exports.publishBehavior = exports.publish = exports.pluck = exports.partition = exports.pairwise = exports.onErrorResumeNext = exports.observeOn = exports.multicast = exports.min = exports.mergeWith = exports.mergeScan = exports.mergeMapTo = exports.mergeMap = exports.flatMap = void 0;
	exports.zipWith = exports.zipAll = exports.zip = exports.withLatestFrom = exports.windowWhen = exports.windowToggle = exports.windowTime = exports.windowCount = exports.window = exports.toArray = exports.timestamp = exports.timeoutWith = exports.timeout = void 0;
	var audit_1 = require_audit();
	Object.defineProperty(exports, "audit", {
		enumerable: true,
		get: function() {
			return audit_1.audit;
		}
	});
	var auditTime_1 = require_auditTime();
	Object.defineProperty(exports, "auditTime", {
		enumerable: true,
		get: function() {
			return auditTime_1.auditTime;
		}
	});
	var buffer_1 = require_buffer();
	Object.defineProperty(exports, "buffer", {
		enumerable: true,
		get: function() {
			return buffer_1.buffer;
		}
	});
	var bufferCount_1 = require_bufferCount();
	Object.defineProperty(exports, "bufferCount", {
		enumerable: true,
		get: function() {
			return bufferCount_1.bufferCount;
		}
	});
	var bufferTime_1 = require_bufferTime();
	Object.defineProperty(exports, "bufferTime", {
		enumerable: true,
		get: function() {
			return bufferTime_1.bufferTime;
		}
	});
	var bufferToggle_1 = require_bufferToggle();
	Object.defineProperty(exports, "bufferToggle", {
		enumerable: true,
		get: function() {
			return bufferToggle_1.bufferToggle;
		}
	});
	var bufferWhen_1 = require_bufferWhen();
	Object.defineProperty(exports, "bufferWhen", {
		enumerable: true,
		get: function() {
			return bufferWhen_1.bufferWhen;
		}
	});
	var catchError_1 = require_catchError();
	Object.defineProperty(exports, "catchError", {
		enumerable: true,
		get: function() {
			return catchError_1.catchError;
		}
	});
	var combineAll_1 = require_combineAll();
	Object.defineProperty(exports, "combineAll", {
		enumerable: true,
		get: function() {
			return combineAll_1.combineAll;
		}
	});
	var combineLatestAll_1 = require_combineLatestAll();
	Object.defineProperty(exports, "combineLatestAll", {
		enumerable: true,
		get: function() {
			return combineLatestAll_1.combineLatestAll;
		}
	});
	var combineLatest_1 = require_combineLatest();
	Object.defineProperty(exports, "combineLatest", {
		enumerable: true,
		get: function() {
			return combineLatest_1.combineLatest;
		}
	});
	var combineLatestWith_1 = require_combineLatestWith();
	Object.defineProperty(exports, "combineLatestWith", {
		enumerable: true,
		get: function() {
			return combineLatestWith_1.combineLatestWith;
		}
	});
	var concat_1 = require_concat();
	Object.defineProperty(exports, "concat", {
		enumerable: true,
		get: function() {
			return concat_1.concat;
		}
	});
	var concatAll_1 = require_concatAll();
	Object.defineProperty(exports, "concatAll", {
		enumerable: true,
		get: function() {
			return concatAll_1.concatAll;
		}
	});
	var concatMap_1 = require_concatMap();
	Object.defineProperty(exports, "concatMap", {
		enumerable: true,
		get: function() {
			return concatMap_1.concatMap;
		}
	});
	var concatMapTo_1 = require_concatMapTo();
	Object.defineProperty(exports, "concatMapTo", {
		enumerable: true,
		get: function() {
			return concatMapTo_1.concatMapTo;
		}
	});
	var concatWith_1 = require_concatWith();
	Object.defineProperty(exports, "concatWith", {
		enumerable: true,
		get: function() {
			return concatWith_1.concatWith;
		}
	});
	var connect_1 = require_connect();
	Object.defineProperty(exports, "connect", {
		enumerable: true,
		get: function() {
			return connect_1.connect;
		}
	});
	var count_1 = require_count();
	Object.defineProperty(exports, "count", {
		enumerable: true,
		get: function() {
			return count_1.count;
		}
	});
	var debounce_1 = require_debounce();
	Object.defineProperty(exports, "debounce", {
		enumerable: true,
		get: function() {
			return debounce_1.debounce;
		}
	});
	var debounceTime_1 = require_debounceTime();
	Object.defineProperty(exports, "debounceTime", {
		enumerable: true,
		get: function() {
			return debounceTime_1.debounceTime;
		}
	});
	var defaultIfEmpty_1 = require_defaultIfEmpty();
	Object.defineProperty(exports, "defaultIfEmpty", {
		enumerable: true,
		get: function() {
			return defaultIfEmpty_1.defaultIfEmpty;
		}
	});
	var delay_1 = require_delay();
	Object.defineProperty(exports, "delay", {
		enumerable: true,
		get: function() {
			return delay_1.delay;
		}
	});
	var delayWhen_1 = require_delayWhen();
	Object.defineProperty(exports, "delayWhen", {
		enumerable: true,
		get: function() {
			return delayWhen_1.delayWhen;
		}
	});
	var dematerialize_1 = require_dematerialize();
	Object.defineProperty(exports, "dematerialize", {
		enumerable: true,
		get: function() {
			return dematerialize_1.dematerialize;
		}
	});
	var distinct_1 = require_distinct();
	Object.defineProperty(exports, "distinct", {
		enumerable: true,
		get: function() {
			return distinct_1.distinct;
		}
	});
	var distinctUntilChanged_1 = require_distinctUntilChanged();
	Object.defineProperty(exports, "distinctUntilChanged", {
		enumerable: true,
		get: function() {
			return distinctUntilChanged_1.distinctUntilChanged;
		}
	});
	var distinctUntilKeyChanged_1 = require_distinctUntilKeyChanged();
	Object.defineProperty(exports, "distinctUntilKeyChanged", {
		enumerable: true,
		get: function() {
			return distinctUntilKeyChanged_1.distinctUntilKeyChanged;
		}
	});
	var elementAt_1 = require_elementAt();
	Object.defineProperty(exports, "elementAt", {
		enumerable: true,
		get: function() {
			return elementAt_1.elementAt;
		}
	});
	var endWith_1 = require_endWith();
	Object.defineProperty(exports, "endWith", {
		enumerable: true,
		get: function() {
			return endWith_1.endWith;
		}
	});
	var every_1 = require_every();
	Object.defineProperty(exports, "every", {
		enumerable: true,
		get: function() {
			return every_1.every;
		}
	});
	var exhaust_1 = require_exhaust();
	Object.defineProperty(exports, "exhaust", {
		enumerable: true,
		get: function() {
			return exhaust_1.exhaust;
		}
	});
	var exhaustAll_1 = require_exhaustAll();
	Object.defineProperty(exports, "exhaustAll", {
		enumerable: true,
		get: function() {
			return exhaustAll_1.exhaustAll;
		}
	});
	var exhaustMap_1 = require_exhaustMap();
	Object.defineProperty(exports, "exhaustMap", {
		enumerable: true,
		get: function() {
			return exhaustMap_1.exhaustMap;
		}
	});
	var expand_1 = require_expand();
	Object.defineProperty(exports, "expand", {
		enumerable: true,
		get: function() {
			return expand_1.expand;
		}
	});
	var filter_1 = require_filter();
	Object.defineProperty(exports, "filter", {
		enumerable: true,
		get: function() {
			return filter_1.filter;
		}
	});
	var finalize_1 = require_finalize();
	Object.defineProperty(exports, "finalize", {
		enumerable: true,
		get: function() {
			return finalize_1.finalize;
		}
	});
	var find_1 = require_find();
	Object.defineProperty(exports, "find", {
		enumerable: true,
		get: function() {
			return find_1.find;
		}
	});
	var findIndex_1 = require_findIndex();
	Object.defineProperty(exports, "findIndex", {
		enumerable: true,
		get: function() {
			return findIndex_1.findIndex;
		}
	});
	var first_1 = require_first();
	Object.defineProperty(exports, "first", {
		enumerable: true,
		get: function() {
			return first_1.first;
		}
	});
	var groupBy_1 = require_groupBy();
	Object.defineProperty(exports, "groupBy", {
		enumerable: true,
		get: function() {
			return groupBy_1.groupBy;
		}
	});
	var ignoreElements_1 = require_ignoreElements();
	Object.defineProperty(exports, "ignoreElements", {
		enumerable: true,
		get: function() {
			return ignoreElements_1.ignoreElements;
		}
	});
	var isEmpty_1 = require_isEmpty();
	Object.defineProperty(exports, "isEmpty", {
		enumerable: true,
		get: function() {
			return isEmpty_1.isEmpty;
		}
	});
	var last_1 = require_last();
	Object.defineProperty(exports, "last", {
		enumerable: true,
		get: function() {
			return last_1.last;
		}
	});
	var map_1 = require_map();
	Object.defineProperty(exports, "map", {
		enumerable: true,
		get: function() {
			return map_1.map;
		}
	});
	var mapTo_1 = require_mapTo();
	Object.defineProperty(exports, "mapTo", {
		enumerable: true,
		get: function() {
			return mapTo_1.mapTo;
		}
	});
	var materialize_1 = require_materialize();
	Object.defineProperty(exports, "materialize", {
		enumerable: true,
		get: function() {
			return materialize_1.materialize;
		}
	});
	var max_1 = require_max();
	Object.defineProperty(exports, "max", {
		enumerable: true,
		get: function() {
			return max_1.max;
		}
	});
	var merge_1 = require_merge();
	Object.defineProperty(exports, "merge", {
		enumerable: true,
		get: function() {
			return merge_1.merge;
		}
	});
	var mergeAll_1 = require_mergeAll();
	Object.defineProperty(exports, "mergeAll", {
		enumerable: true,
		get: function() {
			return mergeAll_1.mergeAll;
		}
	});
	var flatMap_1 = require_flatMap();
	Object.defineProperty(exports, "flatMap", {
		enumerable: true,
		get: function() {
			return flatMap_1.flatMap;
		}
	});
	var mergeMap_1 = require_mergeMap();
	Object.defineProperty(exports, "mergeMap", {
		enumerable: true,
		get: function() {
			return mergeMap_1.mergeMap;
		}
	});
	var mergeMapTo_1 = require_mergeMapTo();
	Object.defineProperty(exports, "mergeMapTo", {
		enumerable: true,
		get: function() {
			return mergeMapTo_1.mergeMapTo;
		}
	});
	var mergeScan_1 = require_mergeScan();
	Object.defineProperty(exports, "mergeScan", {
		enumerable: true,
		get: function() {
			return mergeScan_1.mergeScan;
		}
	});
	var mergeWith_1 = require_mergeWith();
	Object.defineProperty(exports, "mergeWith", {
		enumerable: true,
		get: function() {
			return mergeWith_1.mergeWith;
		}
	});
	var min_1 = require_min();
	Object.defineProperty(exports, "min", {
		enumerable: true,
		get: function() {
			return min_1.min;
		}
	});
	var multicast_1 = require_multicast();
	Object.defineProperty(exports, "multicast", {
		enumerable: true,
		get: function() {
			return multicast_1.multicast;
		}
	});
	var observeOn_1 = require_observeOn();
	Object.defineProperty(exports, "observeOn", {
		enumerable: true,
		get: function() {
			return observeOn_1.observeOn;
		}
	});
	var onErrorResumeNextWith_1 = require_onErrorResumeNextWith();
	Object.defineProperty(exports, "onErrorResumeNext", {
		enumerable: true,
		get: function() {
			return onErrorResumeNextWith_1.onErrorResumeNext;
		}
	});
	var pairwise_1 = require_pairwise();
	Object.defineProperty(exports, "pairwise", {
		enumerable: true,
		get: function() {
			return pairwise_1.pairwise;
		}
	});
	var partition_1 = require_partition();
	Object.defineProperty(exports, "partition", {
		enumerable: true,
		get: function() {
			return partition_1.partition;
		}
	});
	var pluck_1 = require_pluck();
	Object.defineProperty(exports, "pluck", {
		enumerable: true,
		get: function() {
			return pluck_1.pluck;
		}
	});
	var publish_1 = require_publish();
	Object.defineProperty(exports, "publish", {
		enumerable: true,
		get: function() {
			return publish_1.publish;
		}
	});
	var publishBehavior_1 = require_publishBehavior();
	Object.defineProperty(exports, "publishBehavior", {
		enumerable: true,
		get: function() {
			return publishBehavior_1.publishBehavior;
		}
	});
	var publishLast_1 = require_publishLast();
	Object.defineProperty(exports, "publishLast", {
		enumerable: true,
		get: function() {
			return publishLast_1.publishLast;
		}
	});
	var publishReplay_1 = require_publishReplay();
	Object.defineProperty(exports, "publishReplay", {
		enumerable: true,
		get: function() {
			return publishReplay_1.publishReplay;
		}
	});
	var race_1 = require_race();
	Object.defineProperty(exports, "race", {
		enumerable: true,
		get: function() {
			return race_1.race;
		}
	});
	var raceWith_1 = require_raceWith();
	Object.defineProperty(exports, "raceWith", {
		enumerable: true,
		get: function() {
			return raceWith_1.raceWith;
		}
	});
	var reduce_1 = require_reduce();
	Object.defineProperty(exports, "reduce", {
		enumerable: true,
		get: function() {
			return reduce_1.reduce;
		}
	});
	var repeat_1 = require_repeat();
	Object.defineProperty(exports, "repeat", {
		enumerable: true,
		get: function() {
			return repeat_1.repeat;
		}
	});
	var repeatWhen_1 = require_repeatWhen();
	Object.defineProperty(exports, "repeatWhen", {
		enumerable: true,
		get: function() {
			return repeatWhen_1.repeatWhen;
		}
	});
	var retry_1 = require_retry();
	Object.defineProperty(exports, "retry", {
		enumerable: true,
		get: function() {
			return retry_1.retry;
		}
	});
	var retryWhen_1 = require_retryWhen();
	Object.defineProperty(exports, "retryWhen", {
		enumerable: true,
		get: function() {
			return retryWhen_1.retryWhen;
		}
	});
	var refCount_1 = require_refCount();
	Object.defineProperty(exports, "refCount", {
		enumerable: true,
		get: function() {
			return refCount_1.refCount;
		}
	});
	var sample_1 = require_sample();
	Object.defineProperty(exports, "sample", {
		enumerable: true,
		get: function() {
			return sample_1.sample;
		}
	});
	var sampleTime_1 = require_sampleTime();
	Object.defineProperty(exports, "sampleTime", {
		enumerable: true,
		get: function() {
			return sampleTime_1.sampleTime;
		}
	});
	var scan_1 = require_scan();
	Object.defineProperty(exports, "scan", {
		enumerable: true,
		get: function() {
			return scan_1.scan;
		}
	});
	var sequenceEqual_1 = require_sequenceEqual();
	Object.defineProperty(exports, "sequenceEqual", {
		enumerable: true,
		get: function() {
			return sequenceEqual_1.sequenceEqual;
		}
	});
	var share_1 = require_share();
	Object.defineProperty(exports, "share", {
		enumerable: true,
		get: function() {
			return share_1.share;
		}
	});
	var shareReplay_1 = require_shareReplay();
	Object.defineProperty(exports, "shareReplay", {
		enumerable: true,
		get: function() {
			return shareReplay_1.shareReplay;
		}
	});
	var single_1 = require_single();
	Object.defineProperty(exports, "single", {
		enumerable: true,
		get: function() {
			return single_1.single;
		}
	});
	var skip_1 = require_skip();
	Object.defineProperty(exports, "skip", {
		enumerable: true,
		get: function() {
			return skip_1.skip;
		}
	});
	var skipLast_1 = require_skipLast();
	Object.defineProperty(exports, "skipLast", {
		enumerable: true,
		get: function() {
			return skipLast_1.skipLast;
		}
	});
	var skipUntil_1 = require_skipUntil();
	Object.defineProperty(exports, "skipUntil", {
		enumerable: true,
		get: function() {
			return skipUntil_1.skipUntil;
		}
	});
	var skipWhile_1 = require_skipWhile();
	Object.defineProperty(exports, "skipWhile", {
		enumerable: true,
		get: function() {
			return skipWhile_1.skipWhile;
		}
	});
	var startWith_1 = require_startWith();
	Object.defineProperty(exports, "startWith", {
		enumerable: true,
		get: function() {
			return startWith_1.startWith;
		}
	});
	var subscribeOn_1 = require_subscribeOn();
	Object.defineProperty(exports, "subscribeOn", {
		enumerable: true,
		get: function() {
			return subscribeOn_1.subscribeOn;
		}
	});
	var switchAll_1 = require_switchAll();
	Object.defineProperty(exports, "switchAll", {
		enumerable: true,
		get: function() {
			return switchAll_1.switchAll;
		}
	});
	var switchMap_1 = require_switchMap();
	Object.defineProperty(exports, "switchMap", {
		enumerable: true,
		get: function() {
			return switchMap_1.switchMap;
		}
	});
	var switchMapTo_1 = require_switchMapTo();
	Object.defineProperty(exports, "switchMapTo", {
		enumerable: true,
		get: function() {
			return switchMapTo_1.switchMapTo;
		}
	});
	var switchScan_1 = require_switchScan();
	Object.defineProperty(exports, "switchScan", {
		enumerable: true,
		get: function() {
			return switchScan_1.switchScan;
		}
	});
	var take_1 = require_take();
	Object.defineProperty(exports, "take", {
		enumerable: true,
		get: function() {
			return take_1.take;
		}
	});
	var takeLast_1 = require_takeLast();
	Object.defineProperty(exports, "takeLast", {
		enumerable: true,
		get: function() {
			return takeLast_1.takeLast;
		}
	});
	var takeUntil_1 = require_takeUntil();
	Object.defineProperty(exports, "takeUntil", {
		enumerable: true,
		get: function() {
			return takeUntil_1.takeUntil;
		}
	});
	var takeWhile_1 = require_takeWhile();
	Object.defineProperty(exports, "takeWhile", {
		enumerable: true,
		get: function() {
			return takeWhile_1.takeWhile;
		}
	});
	var tap_1 = require_tap();
	Object.defineProperty(exports, "tap", {
		enumerable: true,
		get: function() {
			return tap_1.tap;
		}
	});
	var throttle_1 = require_throttle();
	Object.defineProperty(exports, "throttle", {
		enumerable: true,
		get: function() {
			return throttle_1.throttle;
		}
	});
	var throttleTime_1 = require_throttleTime();
	Object.defineProperty(exports, "throttleTime", {
		enumerable: true,
		get: function() {
			return throttleTime_1.throttleTime;
		}
	});
	var throwIfEmpty_1 = require_throwIfEmpty();
	Object.defineProperty(exports, "throwIfEmpty", {
		enumerable: true,
		get: function() {
			return throwIfEmpty_1.throwIfEmpty;
		}
	});
	var timeInterval_1 = require_timeInterval();
	Object.defineProperty(exports, "timeInterval", {
		enumerable: true,
		get: function() {
			return timeInterval_1.timeInterval;
		}
	});
	var timeout_1 = require_timeout();
	Object.defineProperty(exports, "timeout", {
		enumerable: true,
		get: function() {
			return timeout_1.timeout;
		}
	});
	var timeoutWith_1 = require_timeoutWith();
	Object.defineProperty(exports, "timeoutWith", {
		enumerable: true,
		get: function() {
			return timeoutWith_1.timeoutWith;
		}
	});
	var timestamp_1 = require_timestamp();
	Object.defineProperty(exports, "timestamp", {
		enumerable: true,
		get: function() {
			return timestamp_1.timestamp;
		}
	});
	var toArray_1 = require_toArray();
	Object.defineProperty(exports, "toArray", {
		enumerable: true,
		get: function() {
			return toArray_1.toArray;
		}
	});
	var window_1 = require_window();
	Object.defineProperty(exports, "window", {
		enumerable: true,
		get: function() {
			return window_1.window;
		}
	});
	var windowCount_1 = require_windowCount();
	Object.defineProperty(exports, "windowCount", {
		enumerable: true,
		get: function() {
			return windowCount_1.windowCount;
		}
	});
	var windowTime_1 = require_windowTime();
	Object.defineProperty(exports, "windowTime", {
		enumerable: true,
		get: function() {
			return windowTime_1.windowTime;
		}
	});
	var windowToggle_1 = require_windowToggle();
	Object.defineProperty(exports, "windowToggle", {
		enumerable: true,
		get: function() {
			return windowToggle_1.windowToggle;
		}
	});
	var windowWhen_1 = require_windowWhen();
	Object.defineProperty(exports, "windowWhen", {
		enumerable: true,
		get: function() {
			return windowWhen_1.windowWhen;
		}
	});
	var withLatestFrom_1 = require_withLatestFrom();
	Object.defineProperty(exports, "withLatestFrom", {
		enumerable: true,
		get: function() {
			return withLatestFrom_1.withLatestFrom;
		}
	});
	var zip_1 = require_zip();
	Object.defineProperty(exports, "zip", {
		enumerable: true,
		get: function() {
			return zip_1.zip;
		}
	});
	var zipAll_1 = require_zipAll();
	Object.defineProperty(exports, "zipAll", {
		enumerable: true,
		get: function() {
			return zipAll_1.zipAll;
		}
	});
	var zipWith_1 = require_zipWith();
	Object.defineProperty(exports, "zipWith", {
		enumerable: true,
		get: function() {
			return zipWith_1.zipWith;
		}
	});
}));
//#endregion
//#region node_modules/nanoid/url-alphabet/index.js
var import_cjs = require_cjs();
var import_operators = require_operators();
var urlAlphabet = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
//#endregion
//#region node_modules/nanoid/index.js
var POOL_SIZE_MULTIPLIER = 128;
var pool;
var poolOffset;
var fillPool = (bytes) => {
	if (bytes < 0 || bytes > 1024) throw new RangeError("Wrong ID size");
	try {
		if (!pool || pool.length < bytes) {
			pool = Buffer.allocUnsafe(bytes * POOL_SIZE_MULTIPLIER);
			crypto.randomFillSync(pool);
			poolOffset = 0;
		} else if (poolOffset + bytes > pool.length) {
			crypto.randomFillSync(pool);
			poolOffset = 0;
		}
	} catch (e) {
		pool = void 0;
		throw e;
	}
	poolOffset += bytes;
};
var random = (bytes) => {
	fillPool(bytes |= 0);
	return pool.subarray(poolOffset - bytes, poolOffset);
};
var customRandom = (alphabet, defaultSize, getRandom) => {
	let mask = (2 << 31 - Math.clz32(alphabet.length - 1 | 1)) - 1;
	let step = Math.ceil(1.6 * mask * defaultSize / alphabet.length);
	return (size = defaultSize) => {
		if (size <= 0) return "";
		let id = "";
		while (true) {
			let bytes = getRandom(step);
			let i = step;
			while (i--) {
				id += alphabet[bytes[i] & mask] || "";
				if (id.length === size) return id;
			}
		}
	};
};
var customAlphabet = (alphabet, size = 21) => customRandom(alphabet, size, random);
var nanoid = (size = 21) => {
	fillPool(size |= 0);
	let id = "";
	for (let i = poolOffset - size; i < poolOffset; i++) id += urlAlphabet[pool[i] & 63];
	return id;
};
//#endregion
//#region node_modules/@sanity/bifur-client/dist/esm/createClient.js
var __assign = function() {
	__assign = Object.assign || function(t) {
		for (var s, i = 1, n = arguments.length; i < n; i++) {
			s = arguments[i];
			for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
		}
		return t;
	};
	return __assign.apply(this, arguments);
};
var defaultGetNextRequestId = customAlphabet("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-", 20);
var HEARTBEAT = "♥";
function formatRequest(method, params, id) {
	return JSON.stringify({
		jsonrpc: "2.0",
		method,
		params: addApiVersion(params, "v1"),
		id
	});
}
function tryParse(input) {
	try {
		return [null, JSON.parse(input)];
	} catch (error) {
		return error instanceof Error ? [error] : [new Error("".concat(error))];
	}
}
function addApiVersion(params, v) {
	return __assign(__assign({}, params), { apiVersion: v });
}
var createClient = function(connection$, options) {
	if (options === void 0) options = {};
	var token$ = options.token$, _a = options.getNextRequestId, getNextRequestId = _a === void 0 ? defaultGetNextRequestId : _a;
	var _b = (0, import_cjs.partition)(connection$.pipe((0, import_operators.switchMap)(function(connection) {
		return (0, import_cjs.fromEvent)(connection, "message");
	})), function(event) {
		return event.data === HEARTBEAT;
	}), heartbeats$ = _b[0], responses$ = _b[1];
	var parsedResponses$ = responses$.pipe((0, import_operators.mergeMap)(function(response) {
		var _a = tryParse(response.data), err = _a[0], msg = _a[1];
		if (err) {
			console.warn("Unable to parse message: %s", err.message);
			return import_cjs.EMPTY;
		}
		if (!msg || !msg.jsonrpc) {
			console.warn("Received empty or non-jsonrpc message: %s", msg);
			return import_cjs.EMPTY;
		}
		return (0, import_cjs.of)(msg);
	}), (0, import_operators.share)());
	var authedConnection$ = token$ ? (0, import_cjs.combineLatest)([token$, connection$]).pipe((0, import_operators.distinctUntilChanged)(function(_a, _b) {
		var oldToken = _a[0], oldSocket = _a[1];
		var newToken = _b[0], newSocket = _b[1];
		return oldToken === newToken && oldSocket === newSocket;
	}), (0, import_operators.switchMap)(function(_a) {
		var token = _a[0], ws = _a[1];
		return token ? call(ws, "authorization", { authorization: "Bearer ".concat(token) }).pipe((0, import_operators.take)(1), (0, import_operators.mapTo)(ws)) : (0, import_cjs.of)(ws);
	}), (0, import_operators.shareReplay)({
		refCount: true,
		bufferSize: 1
	})) : connection$;
	function call(ws, method, params) {
		if (params === void 0) params = {};
		var requestId = getNextRequestId();
		return (0, import_cjs.merge)(parsedResponses$.pipe((0, import_operators.filter)(function(rpcResult) {
			return rpcResult.id === requestId;
		}), (0, import_operators.map)(function(rpcResult) {
			return rpcResult.result;
		})), (0, import_cjs.defer)(function() {
			ws.send(formatRequest(method, params, requestId));
			return import_cjs.EMPTY;
		}));
	}
	function requestMethod(method, params) {
		return authedConnection$.pipe((0, import_operators.take)(1), (0, import_operators.mergeMap)(function(ws) {
			return call(ws, method, params).pipe((0, import_operators.take)(1));
		}));
	}
	function requestSubscribe(method, params) {
		return authedConnection$.pipe((0, import_operators.take)(1), (0, import_operators.mergeMap)(function(ws) {
			return call(ws, "".concat(method, "_subscribe"), params).pipe((0, import_operators.take)(1), (0, import_operators.mergeMap)(function(subscriptionId) {
				return parsedResponses$.pipe((0, import_operators.filter)(function(message) {
					return message.method === "".concat(method, "_subscription") && message.params.subscription === subscriptionId;
				}), (0, import_operators.map)(function(message) {
					return message.params.result;
				}), (0, import_operators.finalize)(function() {
					if (ws.readyState !== ws.CLOSED && ws.readyState !== ws.CLOSING) ws.send(formatRequest("".concat(method, "_unsubscribe"), { subscriptionId }, getNextRequestId()));
				}));
			}));
		}));
	}
	return {
		heartbeats: (0, import_cjs.merge)(authedConnection$, heartbeats$, responses$).pipe((0, import_operators.map)(function() {
			return /* @__PURE__ */ new Date();
		})),
		listen: function(method, params) {
			return requestSubscribe(method, params);
		},
		request: function(method, params) {
			return requestMethod(method, params);
		}
	};
};
//#endregion
//#region node_modules/@sanity/bifur-client/dist/esm/createConnect.js
var __extends = (function() {
	var extendStatics = function(d, b) {
		extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
			d.__proto__ = b;
		} || function(d, b) {
			for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
		};
		return extendStatics(d, b);
	};
	return function(d, b) {
		if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
		extendStatics(d, b);
		function __() {
			this.constructor = d;
		}
		d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
})();
var WebSocketError = function(_super) {
	__extends(WebSocketError, _super);
	function WebSocketError(message, type, code, reason) {
		var _this = _super.call(this, message) || this;
		_this.type = type;
		_this.code = code;
		_this.reason = reason;
		return _this;
	}
	return WebSocketError;
}(Error);
function createConnect(getWebsocketInstance) {
	return function(url) {
		return new import_cjs.Observable(function(subscriber) {
			var ws = getWebsocketInstance(url);
			var didUnsubscribe = false;
			var onOpen = function() {
				subscriber.next(ws);
			};
			var onError = function() {
				subscriber.error(new WebSocketError("WebSocket connection error", "CONNECTION_ERROR"));
			};
			var onClose = function(ev) {
				if (!didUnsubscribe) subscriber.error(new WebSocketError("WebSocket connection error", "CONNECTION_CLOSED", ev.code, ev.reason));
				else subscriber.complete();
			};
			ws.onopen = onOpen;
			ws.onclose = onClose;
			ws.onerror = onError;
			return function() {
				didUnsubscribe = true;
				ws.close(1e3, "WebSockets connection closed by client");
			};
		});
	};
}
//#endregion
//#region node_modules/@sanity/bifur-client/dist/esm/operators.js
var timeoutFirstWith = function(due, withObservable) {
	return function(input$) {
		return (0, import_cjs.race)(input$, (0, import_cjs.timer)(due).pipe((0, import_operators.mergeMap)(function() {
			return withObservable;
		})));
	};
};
//#endregion
//#region node_modules/@sanity/bifur-client/dist/esm/errorCodes.js
var ERROR_CODES;
(function(ERROR_CODES) {
	ERROR_CODES[ERROR_CODES["BAD_REQUEST"] = 4e3] = "BAD_REQUEST";
	ERROR_CODES[ERROR_CODES["UNAUTHORIZED"] = 4001] = "UNAUTHORIZED";
	ERROR_CODES[ERROR_CODES["NOT_FOUND"] = 4004] = "NOT_FOUND";
	ERROR_CODES[ERROR_CODES["INVALID_REQUEST"] = -32600] = "INVALID_REQUEST";
	ERROR_CODES[ERROR_CODES["METHOD_NOT_FOUND"] = -32601] = "METHOD_NOT_FOUND";
	ERROR_CODES[ERROR_CODES["INVALID_PARAMS"] = -32602] = "INVALID_PARAMS";
	ERROR_CODES[ERROR_CODES["SUBSCRIPTION_NOT_FOUND"] = -32602] = "SUBSCRIPTION_NOT_FOUND";
	ERROR_CODES[ERROR_CODES["PARSE_ERROR"] = -32700] = "PARSE_ERROR";
})(ERROR_CODES || (ERROR_CODES = {}));
//#endregion
//#region node_modules/@sanity/bifur-client/dist/esm/index.js
var id = function(arg) {
	return arg;
};
function fromUrl(url, options) {
	if (options === void 0) options = {};
	var timeout = options.timeout, token$ = options.token$;
	return createClient(createConnect(function(url, protocols) {
		return new window.WebSocket(url, protocols);
	})(url).pipe(timeout ? timeoutFirstWith(timeout, (0, import_cjs.throwError)(function() {
		return new Error("Timeout after ".concat(timeout, " while establishing WebSockets connection"));
	})) : id, (0, import_operators.shareReplay)({ refCount: true }), (0, import_operators.takeUntil)((0, import_cjs.fromEvent)(window, "beforeunload"))), { token$ });
}
//#endregion
export { require_operators as i, customAlphabet as n, nanoid as r, fromUrl as t };
