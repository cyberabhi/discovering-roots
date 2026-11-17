import { Z as require_cjs } from "./@portabletext/editor+[...].mjs";
import { i as require_operators } from "./@sanity/bifur-client+[...].mjs";
//#region node_modules/rxjs-exhaustmap-with-trailing/dist/esm/index.js
var import_cjs = require_cjs();
var import_operators = require_operators();
/**
* Like exhaustMap, but also includes the trailing value emitted from the source observable while waiting for the preceding inner observable to complete
*
* Original code adapted from https://github.com/ReactiveX/rxjs/issues/5004
* @param {function<T, K>(value: T, ?index: number): ObservableInput<K>} project - A function that, when applied to an item emitted by the
* source Observable, returns a projected Observable.
*/
function exhaustMapWithTrailing(project) {
	return (source) => (0, import_cjs.defer)(() => {
		const release = new import_cjs.Subject();
		return source.pipe((0, import_operators.throttle)(() => release, {
			leading: true,
			trailing: true
		}), (0, import_operators.exhaustMap)((value, index) => (0, import_cjs.scheduled)(project(value, index), import_cjs.asyncScheduler).pipe((0, import_operators.finalize)(() => {
			release.next();
		}))));
	});
}
//#endregion
export { exhaustMapWithTrailing as t };
