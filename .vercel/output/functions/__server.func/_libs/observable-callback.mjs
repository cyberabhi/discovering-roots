import { Z as require_cjs } from "./@portabletext/editor+[...].mjs";
//#region node_modules/observable-callback/dist/esm/observableCallback.js
var import_cjs = require_cjs();
var pass = function(input$) {
	return input$;
};
function observableCallback(operator) {
	if (operator === void 0) operator = pass;
	var subject = new import_cjs.Subject();
	return [subject.pipe(operator), function(arg) {
		return subject.next(arg);
	}];
}
//#endregion
export { observableCallback as t };
