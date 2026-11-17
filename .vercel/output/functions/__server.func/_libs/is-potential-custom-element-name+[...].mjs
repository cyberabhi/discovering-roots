import { t as __commonJSMin } from "../_runtime.mjs";
//#region node_modules/is-potential-custom-element-name/index.js
var require_is_potential_custom_element_name = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var regex = /^[a-z](?:[\.0-9_a-z\xB7\xC0-\xD6\xD8-\xF6\xF8-\u037D\u037F-\u1FFF\u200C\u200D\u203F\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])*-(?:[\x2D\.0-9_a-z\xB7\xC0-\xD6\xD8-\xF6\xF8-\u037D\u037F-\u1FFF\u200C\u200D\u203F\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])*$/;
	var isPotentialCustomElementName = function(string) {
		return regex.test(string);
	};
	module.exports = isPotentialCustomElementName;
}));
//#endregion
export { require_is_potential_custom_element_name as t };
