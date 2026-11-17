import { o as __toESM } from "../_runtime.mjs";
import { i as require_react } from "./dnd-kit__accessibility+react.mjs";
import { Z as require_cjs, rr as require_dist } from "./@portabletext/editor+[...].mjs";
import { xt as useEffectEvent } from "./@sanity/insert-menu+[...].mjs";
import { i as require_operators } from "./@sanity/bifur-client+[...].mjs";
import { t as observableCallback } from "./observable-callback.mjs";
//#region node_modules/react-rx/dist/index.js
var import_dist = require_dist();
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_cjs = require_cjs();
var import_operators = require_operators();
function getValue(value) {
	return typeof value == "function" ? value() : value;
}
var cache = /* @__PURE__ */ new WeakMap();
var EMPTY_OBJECT = {};
/** @public */
function useObservable(observable, initialValue, t0) {
	let $ = (0, import_dist.c)(12), { disabled: t1 } = t0 === void 0 ? EMPTY_OBJECT : t0, disabled = t1 !== void 0 && t1, t2;
	bb0: {
		let t3;
		$[0] === observable ? t3 = $[1] : (t3 = cache.get(observable), $[0] = observable, $[1] = t3);
		let cached = t3;
		if (cached) {
			t2 = cached;
			break bb0;
		}
		let entry;
		if ($[2] !== observable) {
			let state = { didEmit: !1 };
			entry = {
				state,
				observable: observable.pipe((0, import_operators.map)(_temp$1), (0, import_cjs.catchError)(_temp2), (0, import_operators.tap)((t4) => {
					let { snapshot, error: error_0 } = t4;
					state.didEmit = !0, state.snapshot = snapshot, state.error = error_0;
				}), (0, import_operators.map)(_temp3), (0, import_cjs.finalize)(() => {
					cache.get(observable)?.state === state && cache.delete(observable);
				}), (0, import_cjs.share)({ resetOnRefCountZero: _temp4 })),
				getSnapshot: (initialValue_0) => {
					if (state.error) throw state.error;
					return state.didEmit ? state.snapshot : getValue(initialValue_0);
				}
			}, cache.set(observable, entry), entry.observable.subscribe().unsubscribe(), $[2] = observable, $[3] = entry;
		} else entry = $[3];
		t2 = entry;
	}
	let instance = t2, t3;
	$[4] !== disabled || $[5] !== instance.observable ? (t3 = (onStoreChange) => {
		if (disabled) return _temp5;
		let subscription_0 = instance.observable.subscribe(onStoreChange);
		return () => {
			subscription_0.unsubscribe();
		};
	}, $[4] = disabled, $[5] = instance.observable, $[6] = t3) : t3 = $[6];
	let subscribe = t3, t4;
	$[7] !== initialValue || $[8] !== instance ? (t4 = () => instance.getSnapshot(initialValue), $[7] = initialValue, $[8] = instance, $[9] = t4) : t4 = $[9];
	let t5;
	return $[10] === initialValue ? t5 = $[11] : (t5 = initialValue === void 0 ? void 0 : () => getValue(initialValue), $[10] = initialValue, $[11] = t5), (0, import_react.useSyncExternalStore)(subscribe, t4, t5);
}
function _temp5() {}
function _temp4() {
	return (0, import_cjs.timer)(0, import_cjs.asapScheduler);
}
function _temp3(value_0) {}
function _temp2(error) {
	return (0, import_cjs.of)({
		snapshot: void 0,
		error
	});
}
function _temp$1(value) {
	return {
		snapshot: value,
		error: void 0
	};
}
/** @public */
function useObservableEvent(handleEvent) {
	let $ = (0, import_dist.c)(7), [t0] = (0, import_react.useState)(_temp), [calls$, call] = t0, t1;
	$[0] === handleEvent ? t1 = $[1] : (t1 = (observable) => handleEvent(observable), $[0] = handleEvent, $[1] = t1);
	let onEvent = useEffectEvent(t1), t2;
	$[2] !== calls$ || $[3] !== onEvent ? (t2 = () => {
		let subscription = calls$.pipe((observable_0) => onEvent(observable_0)).subscribe();
		return () => subscription.unsubscribe();
	}, $[2] = calls$, $[3] = onEvent, $[4] = t2) : t2 = $[4];
	let t3;
	return $[5] === calls$ ? t3 = $[6] : (t3 = [calls$], $[5] = calls$, $[6] = t3), (0, import_react.useEffect)(t2, t3), call;
}
function _temp() {
	return observableCallback();
}
//#endregion
export { useObservableEvent as n, useObservable as t };
