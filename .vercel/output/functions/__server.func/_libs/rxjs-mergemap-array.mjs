import { Z as require_cjs } from "./@portabletext/editor+[...].mjs";
import { i as require_operators } from "./@sanity/bifur-client+[...].mjs";
//#region node_modules/rxjs-mergemap-array/dist/index.js
var import_cjs = require_cjs();
var import_operators = require_operators();
var INITIAL_STATE = {
	current: [],
	added: [],
	removed: []
};
var EMPTY_ARRAY = [];
function mergeMapArray(project, isEqual = (a, b) => a === b) {
	return (input) => {
		const sharedInput = input.pipe((0, import_cjs.share)()), state$ = sharedInput.pipe((0, import_cjs.scan)((state, next) => {
			const added = next.filter((item) => !state.current.find((current) => isEqual(current, item))), removed = state.current.filter((item) => !next.find((current) => isEqual(current, item)));
			return {
				current: next,
				added: uniqueBy(added, isEqual),
				removed: uniqueBy(removed, isEqual)
			};
		}, INITIAL_STATE)).pipe((0, import_cjs.share)(), (0, import_cjs.filter)((state) => state.added.length > 0 || state.removed.length > 0)), removed$ = state$.pipe((0, import_cjs.mergeMap)((state) => state.removed)), added$ = state$.pipe((0, import_cjs.mergeMap)((state) => state.added)), empty = sharedInput.pipe((0, import_cjs.filter)((arr) => arr.length === 0), (0, import_operators.map)(() => EMPTY_ARRAY)), mapped = added$.pipe((0, import_cjs.mergeMap)((element) => {
			const removed = removed$.pipe((0, import_cjs.filter)((k) => isEqual(k, element))).pipe((0, import_cjs.share)());
			return (0, import_cjs.merge)(removed.pipe((0, import_operators.map)(() => ({
				type: "remove",
				element
			}))), project(element).pipe((0, import_cjs.takeUntil)(removed), (0, import_operators.map)((projected) => ({
				type: "emit",
				element,
				projected
			}))));
		}), (0, import_operators.withLatestFrom)(sharedInput), (0, import_cjs.scan)((acc, [event, inputArray]) => inputArray.flatMap((item) => isEqual(item, event.element) ? event.type === "remove" ? [] : {
			item,
			emitted: !0,
			value: event.projected
		} : acc.find((v) => v && isEqual(v.item, item))), []), (0, import_cjs.filter)((v) => v.every((item) => item == null ? void 0 : item.emitted)), (0, import_operators.map)((v) => v.map((item) => item.value)));
		return (0, import_cjs.merge)(empty, mapped);
	};
}
function uniqueBy(array, predicate) {
	const deduped = [];
	let hasDuplicates = !1;
	for (const item of array) deduped.find((previous) => predicate(previous, item)) ? hasDuplicates = !0 : deduped.push(item);
	return hasDuplicates ? deduped : array;
}
//#endregion
export { mergeMapArray as t };
