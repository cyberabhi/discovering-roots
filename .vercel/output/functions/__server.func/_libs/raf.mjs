import { t as __commonJSMin } from "../_runtime.mjs";
import { t as require_performance_now } from "./performance-now.mjs";
//#region node_modules/raf/index.js
var require_raf = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var now = require_performance_now();
	var root = typeof window === "undefined" ? global : window;
	var vendors = ["moz", "webkit"];
	var suffix = "AnimationFrame";
	var raf = root["request" + suffix];
	var caf = root["cancel" + suffix] || root["cancelRequest" + suffix];
	for (var i = 0; !raf && i < vendors.length; i++) {
		raf = root[vendors[i] + "Request" + suffix];
		caf = root[vendors[i] + "Cancel" + suffix] || root[vendors[i] + "CancelRequest" + suffix];
	}
	if (!raf || !caf) {
		var last = 0, id = 0, queue = [], frameDuration = 1e3 / 60;
		raf = function(callback) {
			if (queue.length === 0) {
				var _now = now(), next = Math.max(0, frameDuration - (_now - last));
				last = next + _now;
				setTimeout(function() {
					var cp = queue.slice(0);
					queue.length = 0;
					for (var i = 0; i < cp.length; i++) if (!cp[i].cancelled) try {
						cp[i].callback(last);
					} catch (e) {
						setTimeout(function() {
							throw e;
						}, 0);
					}
				}, Math.round(next));
			}
			queue.push({
				handle: ++id,
				callback,
				cancelled: false
			});
			return id;
		};
		caf = function(handle) {
			for (var i = 0; i < queue.length; i++) if (queue[i].handle === handle) queue[i].cancelled = true;
		};
	}
	module.exports = function(fn) {
		return raf.call(root, fn);
	};
	module.exports.cancel = function() {
		caf.apply(root, arguments);
	};
	module.exports.polyfill = function(object) {
		if (!object) object = root;
		object.requestAnimationFrame = raf;
		object.cancelAnimationFrame = caf;
	};
}));
//#endregion
export { require_raf as t };
