import { o as __toESM } from "../_runtime.mjs";
import { i as require_react } from "./dnd-kit__accessibility+react.mjs";
import { g as setContext, p as applySdkMetadata, t as init$1 } from "./sentry__browser+sentry__core.mjs";
//#region node_modules/@sentry/react/build/esm/sdk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
/**
* Inits the React SDK
*/
function init(options) {
	const opts = { ...options };
	applySdkMetadata(opts, "react");
	setContext("react", { version: import_react.version });
	return init$1(opts);
}
//#endregion
export { init as t };
