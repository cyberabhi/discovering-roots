import { t as __commonJSMin } from "../_runtime.mjs";
//#region node_modules/performance-now/lib/performance-now.js
var require_performance_now = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function() {
		var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;
		if (typeof performance !== "undefined" && performance !== null && performance.now) module.exports = function() {
			return performance.now();
		};
		else if (typeof process !== "undefined" && process !== null && process.hrtime) {
			module.exports = function() {
				return (getNanoSeconds() - nodeLoadTime) / 1e6;
			};
			hrtime = process.hrtime;
			getNanoSeconds = function() {
				var hr = hrtime();
				return hr[0] * 1e9 + hr[1];
			};
			moduleLoadTime = getNanoSeconds();
			upTime = process.uptime() * 1e9;
			nodeLoadTime = moduleLoadTime - upTime;
		} else if (Date.now) {
			module.exports = function() {
				return Date.now() - loadTime;
			};
			loadTime = Date.now();
		} else {
			module.exports = function() {
				return (/* @__PURE__ */ new Date()).getTime() - loadTime;
			};
			loadTime = (/* @__PURE__ */ new Date()).getTime();
		}
	}).call(exports);
}));
//#endregion
export { require_performance_now as t };
