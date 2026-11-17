import { t as __commonJSMin } from "../_runtime.mjs";
import { t as require_cjs } from "./@asamuzakjp/css-color+[...].mjs";
//#region node_modules/rrweb-cssom/lib/StyleSheet.js
var require_StyleSheet = /* @__PURE__ */ __commonJSMin(((exports) => {
	var CSSOM = {};
	/**
	* @constructor
	* @see http://dev.w3.org/csswg/cssom/#the-stylesheet-interface
	*/
	CSSOM.StyleSheet = function StyleSheet() {
		this.parentStyleSheet = null;
	};
	exports.StyleSheet = CSSOM.StyleSheet;
}));
//#endregion
//#region node_modules/rrweb-cssom/lib/CSSRule.js
var require_CSSRule = /* @__PURE__ */ __commonJSMin(((exports) => {
	var CSSOM = {};
	/**
	* @constructor
	* @see http://dev.w3.org/csswg/cssom/#the-cssrule-interface
	* @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSRule
	*/
	CSSOM.CSSRule = function CSSRule() {
		this.parentRule = null;
		this.parentStyleSheet = null;
	};
	CSSOM.CSSRule.UNKNOWN_RULE = 0;
	CSSOM.CSSRule.STYLE_RULE = 1;
	CSSOM.CSSRule.CHARSET_RULE = 2;
	CSSOM.CSSRule.IMPORT_RULE = 3;
	CSSOM.CSSRule.MEDIA_RULE = 4;
	CSSOM.CSSRule.FONT_FACE_RULE = 5;
	CSSOM.CSSRule.PAGE_RULE = 6;
	CSSOM.CSSRule.KEYFRAMES_RULE = 7;
	CSSOM.CSSRule.KEYFRAME_RULE = 8;
	CSSOM.CSSRule.MARGIN_RULE = 9;
	CSSOM.CSSRule.NAMESPACE_RULE = 10;
	CSSOM.CSSRule.COUNTER_STYLE_RULE = 11;
	CSSOM.CSSRule.SUPPORTS_RULE = 12;
	CSSOM.CSSRule.DOCUMENT_RULE = 13;
	CSSOM.CSSRule.FONT_FEATURE_VALUES_RULE = 14;
	CSSOM.CSSRule.VIEWPORT_RULE = 15;
	CSSOM.CSSRule.REGION_STYLE_RULE = 16;
	CSSOM.CSSRule.CONTAINER_RULE = 17;
	CSSOM.CSSRule.LAYER_BLOCK_RULE = 18;
	CSSOM.CSSRule.STARTING_STYLE_RULE = 1002;
	CSSOM.CSSRule.prototype = { constructor: CSSOM.CSSRule };
	exports.CSSRule = CSSOM.CSSRule;
}));
//#endregion
//#region node_modules/rrweb-cssom/lib/CSSStyleRule.js
var require_CSSStyleRule = /* @__PURE__ */ __commonJSMin(((exports) => {
	var CSSOM = {
		CSSStyleDeclaration: require_CSSStyleDeclaration$1().CSSStyleDeclaration,
		CSSRule: require_CSSRule().CSSRule
	};
	/**
	* @constructor
	* @see http://dev.w3.org/csswg/cssom/#cssstylerule
	* @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleRule
	*/
	CSSOM.CSSStyleRule = function CSSStyleRule() {
		CSSOM.CSSRule.call(this);
		this.selectorText = "";
		this.style = new CSSOM.CSSStyleDeclaration();
		this.style.parentRule = this;
	};
	CSSOM.CSSStyleRule.prototype = new CSSOM.CSSRule();
	CSSOM.CSSStyleRule.prototype.constructor = CSSOM.CSSStyleRule;
	CSSOM.CSSStyleRule.prototype.type = 1;
	Object.defineProperty(CSSOM.CSSStyleRule.prototype, "cssText", {
		get: function() {
			var text;
			if (this.selectorText) text = this.selectorText + " {" + this.style.cssText + "}";
			else text = "";
			return text;
		},
		set: function(cssText) {
			var rule = CSSOM.CSSStyleRule.parse(cssText);
			this.style = rule.style;
			this.selectorText = rule.selectorText;
		}
	});
	/**
	* NON-STANDARD
	* lightweight version of parse.js.
	* @param {string} ruleText
	* @return CSSStyleRule
	*/
	CSSOM.CSSStyleRule.parse = function(ruleText) {
		var i = 0;
		var state = "selector";
		var index;
		var j = i;
		var buffer = "";
		var SIGNIFICANT_WHITESPACE = {
			"selector": true,
			"value": true
		};
		var styleRule = new CSSOM.CSSStyleRule();
		var name, priority = "";
		for (var character; character = ruleText.charAt(i); i++) switch (character) {
			case " ":
			case "	":
			case "\r":
			case "\n":
			case "\f":
				if (SIGNIFICANT_WHITESPACE[state]) switch (ruleText.charAt(i - 1)) {
					case " ":
					case "	":
					case "\r":
					case "\n":
					case "\f": break;
					default: buffer += " ";
				}
				break;
			case "\"":
				j = i + 1;
				index = ruleText.indexOf("\"", j) + 1;
				if (!index) throw "\" is missing";
				buffer += ruleText.slice(i, index);
				i = index - 1;
				break;
			case "'":
				j = i + 1;
				index = ruleText.indexOf("'", j) + 1;
				if (!index) throw "' is missing";
				buffer += ruleText.slice(i, index);
				i = index - 1;
				break;
			case "/":
				if (ruleText.charAt(i + 1) === "*") {
					i += 2;
					index = ruleText.indexOf("*/", i);
					if (index === -1) throw new SyntaxError("Missing */");
					else i = index + 1;
				} else buffer += character;
				break;
			case "{":
				if (state === "selector") {
					styleRule.selectorText = buffer.trim();
					buffer = "";
					state = "name";
				}
				break;
			case ":":
				if (state === "name") {
					name = buffer.trim();
					buffer = "";
					state = "value";
				} else buffer += character;
				break;
			case "!":
				if (state === "value" && ruleText.indexOf("!important", i) === i) {
					priority = "important";
					i += 9;
				} else buffer += character;
				break;
			case ";":
				if (state === "value") {
					styleRule.style.setProperty(name, buffer.trim(), priority);
					priority = "";
					buffer = "";
					state = "name";
				} else buffer += character;
				break;
			case "}":
				if (state === "value") {
					styleRule.style.setProperty(name, buffer.trim(), priority);
					priority = "";
					buffer = "";
				} else if (state === "name") break;
				else buffer += character;
				state = "selector";
				break;
			default: buffer += character;
		}
		return styleRule;
	};
	exports.CSSStyleRule = CSSOM.CSSStyleRule;
}));
//#endregion
//#region node_modules/rrweb-cssom/lib/CSSStyleSheet.js
var require_CSSStyleSheet = /* @__PURE__ */ __commonJSMin(((exports) => {
	var CSSOM = {
		StyleSheet: require_StyleSheet().StyleSheet,
		CSSStyleRule: require_CSSStyleRule().CSSStyleRule
	};
	/**
	* @constructor
	* @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleSheet
	*/
	CSSOM.CSSStyleSheet = function CSSStyleSheet() {
		CSSOM.StyleSheet.call(this);
		this.cssRules = [];
	};
	CSSOM.CSSStyleSheet.prototype = new CSSOM.StyleSheet();
	CSSOM.CSSStyleSheet.prototype.constructor = CSSOM.CSSStyleSheet;
	/**
	* Used to insert a new rule into the style sheet. The new rule now becomes part of the cascade.
	*
	*   sheet = new Sheet("body {margin: 0}")
	*   sheet.toString()
	*   -> "body{margin:0;}"
	*   sheet.insertRule("img {border: none}", 0)
	*   -> 0
	*   sheet.toString()
	*   -> "img{border:none;}body{margin:0;}"
	*
	* @param {string} rule
	* @param {number} index
	* @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleSheet-insertRule
	* @return {number} The index within the style sheet's rule collection of the newly inserted rule.
	*/
	CSSOM.CSSStyleSheet.prototype.insertRule = function(rule, index) {
		if (index < 0 || index > this.cssRules.length) throw new RangeError("INDEX_SIZE_ERR");
		var cssRule = CSSOM.parse(rule).cssRules[0];
		cssRule.parentStyleSheet = this;
		this.cssRules.splice(index, 0, cssRule);
		return index;
	};
	/**
	* Used to delete a rule from the style sheet.
	*
	*   sheet = new Sheet("img{border:none} body{margin:0}")
	*   sheet.toString()
	*   -> "img{border:none;}body{margin:0;}"
	*   sheet.deleteRule(0)
	*   sheet.toString()
	*   -> "body{margin:0;}"
	*
	* @param {number} index within the style sheet's rule list of the rule to remove.
	* @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleSheet-deleteRule
	*/
	CSSOM.CSSStyleSheet.prototype.deleteRule = function(index) {
		if (index < 0 || index >= this.cssRules.length) throw new RangeError("INDEX_SIZE_ERR");
		this.cssRules.splice(index, 1);
	};
	/**
	* NON-STANDARD
	* @return {string} serialize stylesheet
	*/
	CSSOM.CSSStyleSheet.prototype.toString = function() {
		var result = "";
		var rules = this.cssRules;
		for (var i = 0; i < rules.length; i++) result += rules[i].cssText + "\n";
		return result;
	};
	exports.CSSStyleSheet = CSSOM.CSSStyleSheet;
	CSSOM.parse = require_parse().parse;
}));
//#endregion
//#region node_modules/rrweb-cssom/lib/MediaList.js
var require_MediaList = /* @__PURE__ */ __commonJSMin(((exports) => {
	var CSSOM = {};
	/**
	* @constructor
	* @see http://dev.w3.org/csswg/cssom/#the-medialist-interface
	*/
	CSSOM.MediaList = function MediaList() {
		this.length = 0;
	};
	CSSOM.MediaList.prototype = {
		constructor: CSSOM.MediaList,
		/**
		* @return {string}
		*/
		get mediaText() {
			return Array.prototype.join.call(this, ", ");
		},
		/**
		* @param {string} value
		*/
		set mediaText(value) {
			var values = value.split(",");
			var length = this.length = values.length;
			for (var i = 0; i < length; i++) this[i] = values[i].trim();
		},
		/**
		* @param {string} medium
		*/
		appendMedium: function(medium) {
			if (Array.prototype.indexOf.call(this, medium) === -1) {
				this[this.length] = medium;
				this.length++;
			}
		},
		/**
		* @param {string} medium
		*/
		deleteMedium: function(medium) {
			var index = Array.prototype.indexOf.call(this, medium);
			if (index !== -1) Array.prototype.splice.call(this, index, 1);
		}
	};
	exports.MediaList = CSSOM.MediaList;
}));
//#endregion
//#region node_modules/rrweb-cssom/lib/CSSImportRule.js
var require_CSSImportRule = /* @__PURE__ */ __commonJSMin(((exports) => {
	var CSSOM = {
		CSSRule: require_CSSRule().CSSRule,
		CSSStyleSheet: require_CSSStyleSheet().CSSStyleSheet,
		MediaList: require_MediaList().MediaList
	};
	/**
	* @constructor
	* @see http://dev.w3.org/csswg/cssom/#cssimportrule
	* @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSImportRule
	*/
	CSSOM.CSSImportRule = function CSSImportRule() {
		CSSOM.CSSRule.call(this);
		this.href = "";
		this.media = new CSSOM.MediaList();
		this.styleSheet = new CSSOM.CSSStyleSheet();
	};
	CSSOM.CSSImportRule.prototype = new CSSOM.CSSRule();
	CSSOM.CSSImportRule.prototype.constructor = CSSOM.CSSImportRule;
	CSSOM.CSSImportRule.prototype.type = 3;
	Object.defineProperty(CSSOM.CSSImportRule.prototype, "cssText", {
		get: function() {
			var mediaText = this.media.mediaText;
			return "@import url(" + this.href + ")" + (mediaText ? " " + mediaText : "") + ";";
		},
		set: function(cssText) {
			var i = 0;
			/**
			* @import url(partial.css) screen, handheld;
			*        ||               |
			*        after-import     media
			*         |
			*         url
			*/
			var state = "";
			var buffer = "";
			var index;
			for (var character; character = cssText.charAt(i); i++) switch (character) {
				case " ":
				case "	":
				case "\r":
				case "\n":
				case "\f":
					if (state === "after-import") state = "url";
					else buffer += character;
					break;
				case "@":
					if (!state && cssText.indexOf("@import", i) === i) {
						state = "after-import";
						i += 6;
						buffer = "";
					}
					break;
				case "u":
					if (state === "url" && cssText.indexOf("url(", i) === i) {
						index = cssText.indexOf(")", i + 1);
						if (index === -1) throw i + ": \")\" not found";
						i += 4;
						var url = cssText.slice(i, index);
						if (url[0] === url[url.length - 1]) {
							if (url[0] === "\"" || url[0] === "'") url = url.slice(1, -1);
						}
						this.href = url;
						i = index;
						state = "media";
					}
					break;
				case "\"":
					if (state === "url") {
						index = cssText.indexOf("\"", i + 1);
						if (!index) throw i + ": '\"' not found";
						this.href = cssText.slice(i + 1, index);
						i = index;
						state = "media";
					}
					break;
				case "'":
					if (state === "url") {
						index = cssText.indexOf("'", i + 1);
						if (!index) throw i + ": \"'\" not found";
						this.href = cssText.slice(i + 1, index);
						i = index;
						state = "media";
					}
					break;
				case ";":
					if (state === "media") {
						if (buffer) this.media.mediaText = buffer.trim();
					}
					break;
				default: if (state === "media") buffer += character;
			}
		}
	});
	exports.CSSImportRule = CSSOM.CSSImportRule;
}));
//#endregion
//#region node_modules/rrweb-cssom/lib/CSSGroupingRule.js
var require_CSSGroupingRule = /* @__PURE__ */ __commonJSMin(((exports) => {
	var CSSOM = {
		CSSRule: require_CSSRule().CSSRule,
		parse: require_parse().parse
	};
	/**
	* @constructor
	* @see https://drafts.csswg.org/cssom/#the-cssgroupingrule-interface
	*/
	CSSOM.CSSGroupingRule = function CSSGroupingRule() {
		CSSOM.CSSRule.call(this);
		this.cssRules = [];
	};
	CSSOM.CSSGroupingRule.prototype = new CSSOM.CSSRule();
	CSSOM.CSSGroupingRule.prototype.constructor = CSSOM.CSSGroupingRule;
	/**
	* Used to insert a new CSS rule to a list of CSS rules.
	*
	* @example
	*   cssGroupingRule.cssText
	*   -> "body{margin:0;}"
	*   cssGroupingRule.insertRule("img{border:none;}", 1)
	*   -> 1
	*   cssGroupingRule.cssText
	*   -> "body{margin:0;}img{border:none;}"
	*
	* @param {string} rule
	* @param {number} [index]
	* @see https://www.w3.org/TR/cssom-1/#dom-cssgroupingrule-insertrule
	* @return {number} The index within the grouping rule's collection of the newly inserted rule.
	*/
	CSSOM.CSSGroupingRule.prototype.insertRule = function insertRule(rule, index) {
		if (index < 0 || index > this.cssRules.length) throw new RangeError("INDEX_SIZE_ERR");
		var cssRule = CSSOM.parse(rule).cssRules[0];
		cssRule.parentRule = this;
		this.cssRules.splice(index, 0, cssRule);
		return index;
	};
	/**
	* Used to delete a rule from the grouping rule.
	*
	*   cssGroupingRule.cssText
	*   -> "img{border:none;}body{margin:0;}"
	*   cssGroupingRule.deleteRule(0)
	*   cssGroupingRule.cssText
	*   -> "body{margin:0;}"
	*
	* @param {number} index within the grouping rule's rule list of the rule to remove.
	* @see https://www.w3.org/TR/cssom-1/#dom-cssgroupingrule-deleterule
	*/
	CSSOM.CSSGroupingRule.prototype.deleteRule = function deleteRule(index) {
		if (index < 0 || index >= this.cssRules.length) throw new RangeError("INDEX_SIZE_ERR");
		this.cssRules.splice(index, 1)[0].parentRule = null;
	};
	exports.CSSGroupingRule = CSSOM.CSSGroupingRule;
}));
//#endregion
//#region node_modules/rrweb-cssom/lib/CSSConditionRule.js
var require_CSSConditionRule = /* @__PURE__ */ __commonJSMin(((exports) => {
	var CSSOM = {
		CSSRule: require_CSSRule().CSSRule,
		CSSGroupingRule: require_CSSGroupingRule().CSSGroupingRule
	};
	/**
	* @constructor
	* @see https://www.w3.org/TR/css-conditional-3/#the-cssconditionrule-interface
	*/
	CSSOM.CSSConditionRule = function CSSConditionRule() {
		CSSOM.CSSGroupingRule.call(this);
		this.cssRules = [];
	};
	CSSOM.CSSConditionRule.prototype = new CSSOM.CSSGroupingRule();
	CSSOM.CSSConditionRule.prototype.constructor = CSSOM.CSSConditionRule;
	CSSOM.CSSConditionRule.prototype.conditionText = "";
	CSSOM.CSSConditionRule.prototype.cssText = "";
	exports.CSSConditionRule = CSSOM.CSSConditionRule;
}));
//#endregion
//#region node_modules/rrweb-cssom/lib/CSSMediaRule.js
var require_CSSMediaRule = /* @__PURE__ */ __commonJSMin(((exports) => {
	var CSSOM = {
		CSSRule: require_CSSRule().CSSRule,
		CSSGroupingRule: require_CSSGroupingRule().CSSGroupingRule,
		CSSConditionRule: require_CSSConditionRule().CSSConditionRule,
		MediaList: require_MediaList().MediaList
	};
	/**
	* @constructor
	* @see http://dev.w3.org/csswg/cssom/#cssmediarule
	* @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSMediaRule
	*/
	CSSOM.CSSMediaRule = function CSSMediaRule() {
		CSSOM.CSSConditionRule.call(this);
		this.media = new CSSOM.MediaList();
	};
	CSSOM.CSSMediaRule.prototype = new CSSOM.CSSConditionRule();
	CSSOM.CSSMediaRule.prototype.constructor = CSSOM.CSSMediaRule;
	CSSOM.CSSMediaRule.prototype.type = 4;
	Object.defineProperties(CSSOM.CSSMediaRule.prototype, {
		"conditionText": {
			get: function() {
				return this.media.mediaText;
			},
			set: function(value) {
				this.media.mediaText = value;
			},
			configurable: true,
			enumerable: true
		},
		"cssText": {
			get: function() {
				var cssTexts = [];
				for (var i = 0, length = this.cssRules.length; i < length; i++) cssTexts.push(this.cssRules[i].cssText);
				return "@media " + this.media.mediaText + " {" + cssTexts.join("") + "}";
			},
			configurable: true,
			enumerable: true
		}
	});
	exports.CSSMediaRule = CSSOM.CSSMediaRule;
}));
//#endregion
//#region node_modules/rrweb-cssom/lib/CSSContainerRule.js
var require_CSSContainerRule = /* @__PURE__ */ __commonJSMin(((exports) => {
	var CSSOM = {
		CSSRule: require_CSSRule().CSSRule,
		CSSGroupingRule: require_CSSGroupingRule().CSSGroupingRule,
		CSSConditionRule: require_CSSConditionRule().CSSConditionRule
	};
	/**
	* @constructor
	* @see https://drafts.csswg.org/css-contain-3/
	* @see https://www.w3.org/TR/css-contain-3/
	*/
	CSSOM.CSSContainerRule = function CSSContainerRule() {
		CSSOM.CSSConditionRule.call(this);
	};
	CSSOM.CSSContainerRule.prototype = new CSSOM.CSSConditionRule();
	CSSOM.CSSContainerRule.prototype.constructor = CSSOM.CSSContainerRule;
	CSSOM.CSSContainerRule.prototype.type = 17;
	Object.defineProperties(CSSOM.CSSContainerRule.prototype, {
		"conditionText": {
			get: function() {
				return this.containerText;
			},
			set: function(value) {
				this.containerText = value;
			},
			configurable: true,
			enumerable: true
		},
		"cssText": {
			get: function() {
				var cssTexts = [];
				for (var i = 0, length = this.cssRules.length; i < length; i++) cssTexts.push(this.cssRules[i].cssText);
				return "@container " + this.containerText + " {" + cssTexts.join("") + "}";
			},
			configurable: true,
			enumerable: true
		}
	});
	exports.CSSContainerRule = CSSOM.CSSContainerRule;
}));
//#endregion
//#region node_modules/rrweb-cssom/lib/CSSSupportsRule.js
var require_CSSSupportsRule = /* @__PURE__ */ __commonJSMin(((exports) => {
	var CSSOM = {
		CSSRule: require_CSSRule().CSSRule,
		CSSGroupingRule: require_CSSGroupingRule().CSSGroupingRule,
		CSSConditionRule: require_CSSConditionRule().CSSConditionRule
	};
	/**
	* @constructor
	* @see https://drafts.csswg.org/css-conditional-3/#the-csssupportsrule-interface
	*/
	CSSOM.CSSSupportsRule = function CSSSupportsRule() {
		CSSOM.CSSConditionRule.call(this);
	};
	CSSOM.CSSSupportsRule.prototype = new CSSOM.CSSConditionRule();
	CSSOM.CSSSupportsRule.prototype.constructor = CSSOM.CSSSupportsRule;
	CSSOM.CSSSupportsRule.prototype.type = 12;
	Object.defineProperty(CSSOM.CSSSupportsRule.prototype, "cssText", { get: function() {
		var cssTexts = [];
		for (var i = 0, length = this.cssRules.length; i < length; i++) cssTexts.push(this.cssRules[i].cssText);
		return "@supports " + this.conditionText + " {" + cssTexts.join("") + "}";
	} });
	exports.CSSSupportsRule = CSSOM.CSSSupportsRule;
}));
//#endregion
//#region node_modules/rrweb-cssom/lib/CSSFontFaceRule.js
var require_CSSFontFaceRule = /* @__PURE__ */ __commonJSMin(((exports) => {
	var CSSOM = {
		CSSStyleDeclaration: require_CSSStyleDeclaration$1().CSSStyleDeclaration,
		CSSRule: require_CSSRule().CSSRule
	};
	/**
	* @constructor
	* @see http://dev.w3.org/csswg/cssom/#css-font-face-rule
	*/
	CSSOM.CSSFontFaceRule = function CSSFontFaceRule() {
		CSSOM.CSSRule.call(this);
		this.style = new CSSOM.CSSStyleDeclaration();
		this.style.parentRule = this;
	};
	CSSOM.CSSFontFaceRule.prototype = new CSSOM.CSSRule();
	CSSOM.CSSFontFaceRule.prototype.constructor = CSSOM.CSSFontFaceRule;
	CSSOM.CSSFontFaceRule.prototype.type = 5;
	Object.defineProperty(CSSOM.CSSFontFaceRule.prototype, "cssText", { get: function() {
		return "@font-face {" + this.style.cssText + "}";
	} });
	exports.CSSFontFaceRule = CSSOM.CSSFontFaceRule;
}));
//#endregion
//#region node_modules/rrweb-cssom/lib/CSSHostRule.js
var require_CSSHostRule = /* @__PURE__ */ __commonJSMin(((exports) => {
	var CSSOM = { CSSRule: require_CSSRule().CSSRule };
	/**
	* @constructor
	* @see http://www.w3.org/TR/shadow-dom/#host-at-rule
	*/
	CSSOM.CSSHostRule = function CSSHostRule() {
		CSSOM.CSSRule.call(this);
		this.cssRules = [];
	};
	CSSOM.CSSHostRule.prototype = new CSSOM.CSSRule();
	CSSOM.CSSHostRule.prototype.constructor = CSSOM.CSSHostRule;
	CSSOM.CSSHostRule.prototype.type = 1001;
	Object.defineProperty(CSSOM.CSSHostRule.prototype, "cssText", { get: function() {
		var cssTexts = [];
		for (var i = 0, length = this.cssRules.length; i < length; i++) cssTexts.push(this.cssRules[i].cssText);
		return "@host {" + cssTexts.join("") + "}";
	} });
	exports.CSSHostRule = CSSOM.CSSHostRule;
}));
//#endregion
//#region node_modules/rrweb-cssom/lib/CSSStartingStyleRule.js
var require_CSSStartingStyleRule = /* @__PURE__ */ __commonJSMin(((exports) => {
	var CSSOM = { CSSRule: require_CSSRule().CSSRule };
	/**
	* @constructor
	* @see http://www.w3.org/TR/shadow-dom/#host-at-rule
	*/
	CSSOM.CSSStartingStyleRule = function CSSStartingStyleRule() {
		CSSOM.CSSRule.call(this);
		this.cssRules = [];
	};
	CSSOM.CSSStartingStyleRule.prototype = new CSSOM.CSSRule();
	CSSOM.CSSStartingStyleRule.prototype.constructor = CSSOM.CSSStartingStyleRule;
	CSSOM.CSSStartingStyleRule.prototype.type = 1002;
	Object.defineProperty(CSSOM.CSSStartingStyleRule.prototype, "cssText", { get: function() {
		var cssTexts = [];
		for (var i = 0, length = this.cssRules.length; i < length; i++) cssTexts.push(this.cssRules[i].cssText);
		return "@starting-style {" + cssTexts.join("") + "}";
	} });
	exports.CSSStartingStyleRule = CSSOM.CSSStartingStyleRule;
}));
//#endregion
//#region node_modules/rrweb-cssom/lib/CSSKeyframeRule.js
var require_CSSKeyframeRule = /* @__PURE__ */ __commonJSMin(((exports) => {
	var CSSOM = {
		CSSRule: require_CSSRule().CSSRule,
		CSSStyleDeclaration: require_CSSStyleDeclaration$1().CSSStyleDeclaration
	};
	/**
	* @constructor
	* @see http://www.w3.org/TR/css3-animations/#DOM-CSSKeyframeRule
	*/
	CSSOM.CSSKeyframeRule = function CSSKeyframeRule() {
		CSSOM.CSSRule.call(this);
		this.keyText = "";
		this.style = new CSSOM.CSSStyleDeclaration();
		this.style.parentRule = this;
	};
	CSSOM.CSSKeyframeRule.prototype = new CSSOM.CSSRule();
	CSSOM.CSSKeyframeRule.prototype.constructor = CSSOM.CSSKeyframeRule;
	CSSOM.CSSKeyframeRule.prototype.type = 8;
	Object.defineProperty(CSSOM.CSSKeyframeRule.prototype, "cssText", { get: function() {
		return this.keyText + " {" + this.style.cssText + "} ";
	} });
	exports.CSSKeyframeRule = CSSOM.CSSKeyframeRule;
}));
//#endregion
//#region node_modules/rrweb-cssom/lib/CSSKeyframesRule.js
var require_CSSKeyframesRule = /* @__PURE__ */ __commonJSMin(((exports) => {
	var CSSOM = { CSSRule: require_CSSRule().CSSRule };
	/**
	* @constructor
	* @see http://www.w3.org/TR/css3-animations/#DOM-CSSKeyframesRule
	*/
	CSSOM.CSSKeyframesRule = function CSSKeyframesRule() {
		CSSOM.CSSRule.call(this);
		this.name = "";
		this.cssRules = [];
	};
	CSSOM.CSSKeyframesRule.prototype = new CSSOM.CSSRule();
	CSSOM.CSSKeyframesRule.prototype.constructor = CSSOM.CSSKeyframesRule;
	CSSOM.CSSKeyframesRule.prototype.type = 7;
	Object.defineProperty(CSSOM.CSSKeyframesRule.prototype, "cssText", { get: function() {
		var cssTexts = [];
		for (var i = 0, length = this.cssRules.length; i < length; i++) cssTexts.push("  " + this.cssRules[i].cssText);
		return "@" + (this._vendorPrefix || "") + "keyframes " + this.name + " { \n" + cssTexts.join("\n") + "\n}";
	} });
	exports.CSSKeyframesRule = CSSOM.CSSKeyframesRule;
}));
//#endregion
//#region node_modules/rrweb-cssom/lib/CSSValue.js
var require_CSSValue = /* @__PURE__ */ __commonJSMin(((exports) => {
	var CSSOM = {};
	/**
	* @constructor
	* @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSValue
	*
	* TODO: add if needed
	*/
	CSSOM.CSSValue = function CSSValue() {};
	CSSOM.CSSValue.prototype = {
		constructor: CSSOM.CSSValue,
		set cssText(text) {
			var name = this._getConstructorName();
			throw new Error("DOMException: property \"cssText\" of \"" + name + "\" is readonly and can not be replaced with \"" + text + "\"!");
		},
		get cssText() {
			var name = this._getConstructorName();
			throw new Error("getter \"cssText\" of \"" + name + "\" is not implemented!");
		},
		_getConstructorName: function() {
			return this.constructor.toString().match(/function\s([^\(]+)/)[1];
		}
	};
	exports.CSSValue = CSSOM.CSSValue;
}));
//#endregion
//#region node_modules/rrweb-cssom/lib/CSSValueExpression.js
var require_CSSValueExpression = /* @__PURE__ */ __commonJSMin(((exports) => {
	var CSSOM = { CSSValue: require_CSSValue().CSSValue };
	/**
	* @constructor
	* @see http://msdn.microsoft.com/en-us/library/ms537634(v=vs.85).aspx
	*
	*/
	CSSOM.CSSValueExpression = function CSSValueExpression(token, idx) {
		this._token = token;
		this._idx = idx;
	};
	CSSOM.CSSValueExpression.prototype = new CSSOM.CSSValue();
	CSSOM.CSSValueExpression.prototype.constructor = CSSOM.CSSValueExpression;
	/**
	* parse css expression() value
	*
	* @return {Object}
	*         - error:
	*         or
	*         - idx:
	*         - expression:
	*
	* Example:
	*
	* .selector {
	*		zoom: expression(documentElement.clientWidth > 1000 ? '1000px' : 'auto');
	* }
	*/
	CSSOM.CSSValueExpression.prototype.parse = function() {
		var token = this._token, idx = this._idx;
		var character = "", expression = "", error = "", info, paren = [];
		for (;; ++idx) {
			character = token.charAt(idx);
			if (character === "") {
				error = "css expression error: unfinished expression!";
				break;
			}
			switch (character) {
				case "(":
					paren.push(character);
					expression += character;
					break;
				case ")":
					paren.pop(character);
					expression += character;
					break;
				case "/":
					if (info = this._parseJSComment(token, idx)) if (info.error) error = "css expression error: unfinished comment in expression!";
					else idx = info.idx;
					else if (info = this._parseJSRexExp(token, idx)) {
						idx = info.idx;
						expression += info.text;
					} else expression += character;
					break;
				case "'":
				case "\"":
					info = this._parseJSString(token, idx, character);
					if (info) {
						idx = info.idx;
						expression += info.text;
					} else expression += character;
					break;
				default: expression += character;
			}
			if (error) break;
			if (paren.length === 0) break;
		}
		var ret;
		if (error) ret = { error };
		else ret = {
			idx,
			expression
		};
		return ret;
	};
	/**
	*
	* @return {Object|false}
	*          - idx:
	*          - text:
	*          or
	*          - error:
	*          or
	*          false
	*
	*/
	CSSOM.CSSValueExpression.prototype._parseJSComment = function(token, idx) {
		var nextChar = token.charAt(idx + 1), text;
		if (nextChar === "/" || nextChar === "*") {
			var startIdx = idx, endIdx, commentEndChar;
			if (nextChar === "/") commentEndChar = "\n";
			else if (nextChar === "*") commentEndChar = "*/";
			endIdx = token.indexOf(commentEndChar, startIdx + 1 + 1);
			if (endIdx !== -1) {
				endIdx = endIdx + commentEndChar.length - 1;
				text = token.substring(idx, endIdx + 1);
				return {
					idx: endIdx,
					text
				};
			} else return { error: "css expression error: unfinished comment in expression!" };
		} else return false;
	};
	/**
	*
	* @return {Object|false}
	*					- idx:
	*					- text:
	*					or 
	*					false
	*
	*/
	CSSOM.CSSValueExpression.prototype._parseJSString = function(token, idx, sep) {
		var endIdx = this._findMatchedIdx(token, idx, sep), text;
		if (endIdx === -1) return false;
		else {
			text = token.substring(idx, endIdx + sep.length);
			return {
				idx: endIdx,
				text
			};
		}
	};
	/**
	* parse regexp in css expression
	*
	* @return {Object|false}
	*				- idx:
	*				- regExp:
	*				or 
	*				false
	*/
	CSSOM.CSSValueExpression.prototype._parseJSRexExp = function(token, idx) {
		var before = token.substring(0, idx).replace(/\s+$/, "");
		if (![
			/^$/,
			/\($/,
			/\[$/,
			/\!$/,
			/\+$/,
			/\-$/,
			/\*$/,
			/\/\s+/,
			/\%$/,
			/\=$/,
			/\>$/,
			/<$/,
			/\&$/,
			/\|$/,
			/\^$/,
			/\~$/,
			/\?$/,
			/\,$/,
			/delete$/,
			/in$/,
			/instanceof$/,
			/new$/,
			/typeof$/,
			/void$/
		].some(function(reg) {
			return reg.test(before);
		})) return false;
		else return this._parseJSString(token, idx, "/");
	};
	/**
	*
	* find next sep(same line) index in `token`
	*
	* @return {Number}
	*
	*/
	CSSOM.CSSValueExpression.prototype._findMatchedIdx = function(token, idx, sep) {
		var startIdx = idx, endIdx;
		var NOT_FOUND = -1;
		while (true) {
			endIdx = token.indexOf(sep, startIdx + 1);
			if (endIdx === -1) {
				endIdx = NOT_FOUND;
				break;
			} else {
				var matched = token.substring(idx + 1, endIdx).match(/\\+$/);
				if (!matched || matched[0] % 2 === 0) break;
				else startIdx = endIdx;
			}
		}
		if (token.indexOf("\n", idx + 1) < endIdx) endIdx = NOT_FOUND;
		return endIdx;
	};
	exports.CSSValueExpression = CSSOM.CSSValueExpression;
}));
//#endregion
//#region node_modules/rrweb-cssom/lib/MatcherList.js
var require_MatcherList = /* @__PURE__ */ __commonJSMin(((exports) => {
	var CSSOM = {};
	/**
	* @constructor
	* @see https://developer.mozilla.org/en/CSS/@-moz-document
	*/
	CSSOM.MatcherList = function MatcherList() {
		this.length = 0;
	};
	CSSOM.MatcherList.prototype = {
		constructor: CSSOM.MatcherList,
		/**
		* @return {string}
		*/
		get matcherText() {
			return Array.prototype.join.call(this, ", ");
		},
		/**
		* @param {string} value
		*/
		set matcherText(value) {
			var values = value.split(",");
			var length = this.length = values.length;
			for (var i = 0; i < length; i++) this[i] = values[i].trim();
		},
		/**
		* @param {string} matcher
		*/
		appendMatcher: function(matcher) {
			if (Array.prototype.indexOf.call(this, matcher) === -1) {
				this[this.length] = matcher;
				this.length++;
			}
		},
		/**
		* @param {string} matcher
		*/
		deleteMatcher: function(matcher) {
			var index = Array.prototype.indexOf.call(this, matcher);
			if (index !== -1) Array.prototype.splice.call(this, index, 1);
		}
	};
	exports.MatcherList = CSSOM.MatcherList;
}));
//#endregion
//#region node_modules/rrweb-cssom/lib/CSSDocumentRule.js
var require_CSSDocumentRule = /* @__PURE__ */ __commonJSMin(((exports) => {
	var CSSOM = {
		CSSRule: require_CSSRule().CSSRule,
		MatcherList: require_MatcherList().MatcherList
	};
	/**
	* @constructor
	* @see https://developer.mozilla.org/en/CSS/@-moz-document
	*/
	CSSOM.CSSDocumentRule = function CSSDocumentRule() {
		CSSOM.CSSRule.call(this);
		this.matcher = new CSSOM.MatcherList();
		this.cssRules = [];
	};
	CSSOM.CSSDocumentRule.prototype = new CSSOM.CSSRule();
	CSSOM.CSSDocumentRule.prototype.constructor = CSSOM.CSSDocumentRule;
	CSSOM.CSSDocumentRule.prototype.type = 10;
	Object.defineProperty(CSSOM.CSSDocumentRule.prototype, "cssText", { get: function() {
		var cssTexts = [];
		for (var i = 0, length = this.cssRules.length; i < length; i++) cssTexts.push(this.cssRules[i].cssText);
		return "@-moz-document " + this.matcher.matcherText + " {" + cssTexts.join("") + "}";
	} });
	exports.CSSDocumentRule = CSSOM.CSSDocumentRule;
}));
//#endregion
//#region node_modules/rrweb-cssom/lib/CSSLayerBlockRule.js
var require_CSSLayerBlockRule = /* @__PURE__ */ __commonJSMin(((exports) => {
	var CSSOM = {
		CSSRule: require_CSSRule().CSSRule,
		CSSGroupingRule: require_CSSGroupingRule().CSSGroupingRule
	};
	/**
	* @constructor
	* @see https://drafts.csswg.org/css-cascade-5/#csslayerblockrule
	*/
	CSSOM.CSSLayerBlockRule = function CSSLayerBlockRule() {
		CSSOM.CSSGroupingRule.call(this);
		this.layerName = "";
		this.cssRules = [];
	};
	CSSOM.CSSLayerBlockRule.prototype = new CSSOM.CSSGroupingRule();
	CSSOM.CSSLayerBlockRule.prototype.constructor = CSSOM.CSSLayerBlockRule;
	CSSOM.CSSLayerBlockRule.prototype.type = 18;
	Object.defineProperties(CSSOM.CSSLayerBlockRule.prototype, {
		layerNameText: {
			get: function() {
				return this.layerName;
			},
			set: function(value) {
				this.layerName = value;
			},
			configurable: true,
			enumerable: true
		},
		cssText: {
			get: function() {
				var cssTexts = [];
				for (var i = 0, length = this.cssRules.length; i < length; i++) cssTexts.push(this.cssRules[i].cssText);
				return "@layer " + this.layerNameText + " {" + cssTexts.join("") + "}";
			},
			configurable: true,
			enumerable: true
		}
	});
	exports.CSSLayerBlockRule = CSSOM.CSSLayerBlockRule;
}));
//#endregion
//#region node_modules/rrweb-cssom/lib/parse.js
var require_parse = /* @__PURE__ */ __commonJSMin(((exports) => {
	var CSSOM = {};
	/**
	* @param {string} token
	*/
	CSSOM.parse = function parse(token) {
		var i = 0;
		/**
		"before-selector" or
		"selector" or
		"atRule" or
		"atBlock" or
		"conditionBlock" or
		"before-name" or
		"name" or
		"before-value" or
		"value"
		*/
		var state = "before-selector";
		var index;
		var buffer = "";
		var valueParenthesisDepth = 0;
		var SIGNIFICANT_WHITESPACE = {
			"selector": true,
			"value": true,
			"value-parenthesis": true,
			"atRule": true,
			"importRule-begin": true,
			"importRule": true,
			"atBlock": true,
			"containerBlock": true,
			"conditionBlock": true,
			"documentRule-begin": true,
			"layerBlock": true
		};
		var styleSheet = new CSSOM.CSSStyleSheet();
		var currentScope = styleSheet;
		var parentRule;
		var ancestorRules = [];
		var hasAncestors = false;
		var prevScope;
		var name, priority = "", styleRule, mediaRule, containerRule, supportsRule, importRule, fontFaceRule, keyframesRule, documentRule, hostRule, startingStyleRule, layerBlockRule;
		var atKeyframesRegExp = /@(-(?:\w+-)+)?keyframes/g;
		var parseError = function(message) {
			var lines = token.substring(0, i).split("\n");
			var lineCount = lines.length;
			var charCount = lines.pop().length + 1;
			var error = /* @__PURE__ */ new Error(message + " (line " + lineCount + ", char " + charCount + ")");
			error.line = lineCount;
			error["char"] = charCount;
			error.styleSheet = styleSheet;
			throw error;
		};
		for (var character; character = token.charAt(i); i++) switch (character) {
			case " ":
			case "	":
			case "\r":
			case "\n":
			case "\f":
				if (SIGNIFICANT_WHITESPACE[state]) buffer += character;
				break;
			case "\"":
				index = i + 1;
				do {
					index = token.indexOf("\"", index) + 1;
					if (!index) parseError("Unmatched \"");
				} while (token[index - 2] === "\\");
				buffer += token.slice(i, index);
				i = index - 1;
				switch (state) {
					case "before-value":
						state = "value";
						break;
					case "importRule-begin": state = "importRule";
				}
				break;
			case "'":
				index = i + 1;
				do {
					index = token.indexOf("'", index) + 1;
					if (!index) parseError("Unmatched '");
				} while (token[index - 2] === "\\");
				buffer += token.slice(i, index);
				i = index - 1;
				switch (state) {
					case "before-value":
						state = "value";
						break;
					case "importRule-begin": state = "importRule";
				}
				break;
			case "/":
				if (token.charAt(i + 1) === "*") {
					i += 2;
					index = token.indexOf("*/", i);
					if (index === -1) parseError("Missing */");
					else i = index + 1;
				} else buffer += character;
				if (state === "importRule-begin") {
					buffer += " ";
					state = "importRule";
				}
				break;
			case "@":
				if (token.indexOf("@-moz-document", i) === i) {
					state = "documentRule-begin";
					documentRule = new CSSOM.CSSDocumentRule();
					documentRule.__starts = i;
					i += 13;
					buffer = "";
					break;
				} else if (token.indexOf("@media", i) === i) {
					state = "atBlock";
					mediaRule = new CSSOM.CSSMediaRule();
					mediaRule.__starts = i;
					i += 5;
					buffer = "";
					break;
				} else if (token.indexOf("@container", i) === i) {
					state = "containerBlock";
					containerRule = new CSSOM.CSSContainerRule();
					containerRule.__starts = i;
					i += 9;
					buffer = "";
					break;
				} else if (token.indexOf("@layer", i) === i) {
					state = "layerBlock";
					layerBlockRule = new CSSOM.CSSLayerBlockRule();
					layerBlockRule.__starts = i;
					i += 5;
					buffer = "";
					break;
				} else if (token.indexOf("@supports", i) === i) {
					state = "conditionBlock";
					supportsRule = new CSSOM.CSSSupportsRule();
					supportsRule.__starts = i;
					i += 8;
					buffer = "";
					break;
				} else if (token.indexOf("@host", i) === i) {
					state = "hostRule-begin";
					i += 4;
					hostRule = new CSSOM.CSSHostRule();
					hostRule.__starts = i;
					buffer = "";
					break;
				} else if (token.indexOf("@starting-style", i) === i) {
					state = "startingStyleRule-begin";
					i += 14;
					startingStyleRule = new CSSOM.CSSStartingStyleRule();
					startingStyleRule.__starts = i;
					buffer = "";
					break;
				} else if (token.indexOf("@import", i) === i) {
					state = "importRule-begin";
					i += 6;
					buffer += "@import";
					break;
				} else if (token.indexOf("@font-face", i) === i) {
					state = "fontFaceRule-begin";
					i += 9;
					fontFaceRule = new CSSOM.CSSFontFaceRule();
					fontFaceRule.__starts = i;
					buffer = "";
					break;
				} else {
					atKeyframesRegExp.lastIndex = i;
					var matchKeyframes = atKeyframesRegExp.exec(token);
					if (matchKeyframes && matchKeyframes.index === i) {
						state = "keyframesRule-begin";
						keyframesRule = new CSSOM.CSSKeyframesRule();
						keyframesRule.__starts = i;
						keyframesRule._vendorPrefix = matchKeyframes[1];
						i += matchKeyframes[0].length - 1;
						buffer = "";
						break;
					} else if (state === "selector") state = "atRule";
				}
				buffer += character;
				break;
			case "{":
				if (state === "selector" || state === "atRule") {
					styleRule.selectorText = buffer.trim();
					styleRule.style.__starts = i;
					buffer = "";
					state = "before-name";
				} else if (state === "atBlock") {
					mediaRule.media.mediaText = buffer.trim();
					if (parentRule) ancestorRules.push(parentRule);
					currentScope = parentRule = mediaRule;
					mediaRule.parentStyleSheet = styleSheet;
					buffer = "";
					state = "before-selector";
				} else if (state === "containerBlock") {
					containerRule.containerText = buffer.trim();
					if (parentRule) ancestorRules.push(parentRule);
					currentScope = parentRule = containerRule;
					containerRule.parentStyleSheet = styleSheet;
					buffer = "";
					state = "before-selector";
				} else if (state === "conditionBlock") {
					supportsRule.conditionText = buffer.trim();
					if (parentRule) ancestorRules.push(parentRule);
					currentScope = parentRule = supportsRule;
					supportsRule.parentStyleSheet = styleSheet;
					buffer = "";
					state = "before-selector";
				} else if (state === "layerBlock") {
					layerBlockRule.layerNameText = buffer.trim();
					if (parentRule) ancestorRules.push(parentRule);
					currentScope = parentRule = layerBlockRule;
					layerBlockRule.parentStyleSheet = styleSheet;
					buffer = "";
					state = "before-selector";
				} else if (state === "hostRule-begin") {
					if (parentRule) ancestorRules.push(parentRule);
					currentScope = parentRule = hostRule;
					hostRule.parentStyleSheet = styleSheet;
					buffer = "";
					state = "before-selector";
				} else if (state === "startingStyleRule-begin") {
					if (parentRule) ancestorRules.push(parentRule);
					currentScope = parentRule = startingStyleRule;
					startingStyleRule.parentStyleSheet = styleSheet;
					buffer = "";
					state = "before-selector";
				} else if (state === "fontFaceRule-begin") {
					if (parentRule) fontFaceRule.parentRule = parentRule;
					fontFaceRule.parentStyleSheet = styleSheet;
					styleRule = fontFaceRule;
					buffer = "";
					state = "before-name";
				} else if (state === "keyframesRule-begin") {
					keyframesRule.name = buffer.trim();
					if (parentRule) {
						ancestorRules.push(parentRule);
						keyframesRule.parentRule = parentRule;
					}
					keyframesRule.parentStyleSheet = styleSheet;
					currentScope = parentRule = keyframesRule;
					buffer = "";
					state = "keyframeRule-begin";
				} else if (state === "keyframeRule-begin") {
					styleRule = new CSSOM.CSSKeyframeRule();
					styleRule.keyText = buffer.trim();
					styleRule.__starts = i;
					buffer = "";
					state = "before-name";
				} else if (state === "documentRule-begin") {
					documentRule.matcher.matcherText = buffer.trim();
					if (parentRule) {
						ancestorRules.push(parentRule);
						documentRule.parentRule = parentRule;
					}
					currentScope = parentRule = documentRule;
					documentRule.parentStyleSheet = styleSheet;
					buffer = "";
					state = "before-selector";
				}
				break;
			case ":":
				if (state === "name") {
					name = buffer.trim();
					buffer = "";
					state = "before-value";
				} else buffer += character;
				break;
			case "(":
				if (state === "value") if (buffer.trim() === "expression") {
					var info = new CSSOM.CSSValueExpression(token, i).parse();
					if (info.error) parseError(info.error);
					else {
						buffer += info.expression;
						i = info.idx;
					}
				} else {
					state = "value-parenthesis";
					valueParenthesisDepth = 1;
					buffer += character;
				}
				else if (state === "value-parenthesis") {
					valueParenthesisDepth++;
					buffer += character;
				} else buffer += character;
				break;
			case ")":
				if (state === "value-parenthesis") {
					valueParenthesisDepth--;
					if (valueParenthesisDepth === 0) state = "value";
				}
				buffer += character;
				break;
			case "!":
				if (state === "value" && token.indexOf("!important", i) === i) {
					priority = "important";
					i += 9;
				} else buffer += character;
				break;
			case ";":
				switch (state) {
					case "value":
						styleRule.style.setProperty(name, buffer.trim(), priority);
						priority = "";
						buffer = "";
						state = "before-name";
						break;
					case "atRule":
						buffer = "";
						state = "before-selector";
						break;
					case "importRule":
						importRule = new CSSOM.CSSImportRule();
						importRule.parentStyleSheet = importRule.styleSheet.parentStyleSheet = styleSheet;
						importRule.cssText = buffer + character;
						styleSheet.cssRules.push(importRule);
						buffer = "";
						state = "before-selector";
						break;
					default: buffer += character;
				}
				break;
			case "}":
				switch (state) {
					case "value":
						styleRule.style.setProperty(name, buffer.trim(), priority);
						priority = "";
					case "before-name":
					case "name":
						styleRule.__ends = i + 1;
						if (parentRule) styleRule.parentRule = parentRule;
						styleRule.parentStyleSheet = styleSheet;
						currentScope.cssRules.push(styleRule);
						buffer = "";
						if (currentScope.constructor === CSSOM.CSSKeyframesRule) state = "keyframeRule-begin";
						else state = "before-selector";
						break;
					case "keyframeRule-begin":
					case "before-selector":
					case "selector":
						if (!parentRule) parseError("Unexpected }");
						hasAncestors = ancestorRules.length > 0;
						while (ancestorRules.length > 0) {
							parentRule = ancestorRules.pop();
							if (parentRule.constructor.name === "CSSMediaRule" || parentRule.constructor.name === "CSSSupportsRule" || parentRule.constructor.name === "CSSContainerRule" || parentRule.constructor.name === "CSSLayerBlockRule" || parentRule.constructor.name === "CSSStartingStyleRule") {
								prevScope = currentScope;
								currentScope = parentRule;
								currentScope.cssRules.push(prevScope);
								break;
							}
							if (ancestorRules.length === 0) hasAncestors = false;
						}
						if (!hasAncestors) {
							currentScope.__ends = i + 1;
							styleSheet.cssRules.push(currentScope);
							currentScope = styleSheet;
							parentRule = null;
						}
						buffer = "";
						state = "before-selector";
				}
				break;
			default:
				switch (state) {
					case "before-selector":
						state = "selector";
						styleRule = new CSSOM.CSSStyleRule();
						styleRule.__starts = i;
						break;
					case "before-name":
						state = "name";
						break;
					case "before-value":
						state = "value";
						break;
					case "importRule-begin": state = "importRule";
				}
				buffer += character;
		}
		return styleSheet;
	};
	exports.parse = CSSOM.parse;
	CSSOM.CSSStyleSheet = require_CSSStyleSheet().CSSStyleSheet;
	CSSOM.CSSStyleRule = require_CSSStyleRule().CSSStyleRule;
	CSSOM.CSSImportRule = require_CSSImportRule().CSSImportRule;
	CSSOM.CSSGroupingRule = require_CSSGroupingRule().CSSGroupingRule;
	CSSOM.CSSMediaRule = require_CSSMediaRule().CSSMediaRule;
	CSSOM.CSSContainerRule = require_CSSContainerRule().CSSContainerRule;
	CSSOM.CSSConditionRule = require_CSSConditionRule().CSSConditionRule;
	CSSOM.CSSSupportsRule = require_CSSSupportsRule().CSSSupportsRule;
	CSSOM.CSSFontFaceRule = require_CSSFontFaceRule().CSSFontFaceRule;
	CSSOM.CSSHostRule = require_CSSHostRule().CSSHostRule;
	CSSOM.CSSStartingStyleRule = require_CSSStartingStyleRule().CSSStartingStyleRule;
	CSSOM.CSSStyleDeclaration = require_CSSStyleDeclaration$1().CSSStyleDeclaration;
	CSSOM.CSSKeyframeRule = require_CSSKeyframeRule().CSSKeyframeRule;
	CSSOM.CSSKeyframesRule = require_CSSKeyframesRule().CSSKeyframesRule;
	CSSOM.CSSValueExpression = require_CSSValueExpression().CSSValueExpression;
	CSSOM.CSSDocumentRule = require_CSSDocumentRule().CSSDocumentRule;
	CSSOM.CSSLayerBlockRule = require_CSSLayerBlockRule().CSSLayerBlockRule;
}));
//#endregion
//#region node_modules/rrweb-cssom/lib/CSSStyleDeclaration.js
var require_CSSStyleDeclaration$1 = /* @__PURE__ */ __commonJSMin(((exports) => {
	var CSSOM = {};
	/**
	* @constructor
	* @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleDeclaration
	*/
	CSSOM.CSSStyleDeclaration = function CSSStyleDeclaration() {
		this.length = 0;
		this.parentRule = null;
		this._importants = {};
	};
	CSSOM.CSSStyleDeclaration.prototype = {
		constructor: CSSOM.CSSStyleDeclaration,
		/**
		*
		* @param {string} name
		* @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleDeclaration-getPropertyValue
		* @return {string} the value of the property if it has been explicitly set for this declaration block.
		* Returns the empty string if the property has not been set.
		*/
		getPropertyValue: function(name) {
			return this[name] || "";
		},
		/**
		*
		* @param {string} name
		* @param {string} value
		* @param {string} [priority=null] "important" or null
		* @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleDeclaration-setProperty
		*/
		setProperty: function(name, value, priority) {
			if (this[name]) {
				if (Array.prototype.indexOf.call(this, name) < 0) {
					this[this.length] = name;
					this.length++;
				}
			} else {
				this[this.length] = name;
				this.length++;
			}
			this[name] = value + "";
			this._importants[name] = priority;
		},
		/**
		*
		* @param {string} name
		* @see http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleDeclaration-removeProperty
		* @return {string} the value of the property if it has been explicitly set for this declaration block.
		* Returns the empty string if the property has not been set or the property name does not correspond to a known CSS property.
		*/
		removeProperty: function(name) {
			if (!(name in this)) return "";
			var index = Array.prototype.indexOf.call(this, name);
			if (index < 0) return "";
			var prevValue = this[name];
			this[name] = "";
			Array.prototype.splice.call(this, index, 1);
			return prevValue;
		},
		getPropertyCSSValue: function() {},
		/**
		*
		* @param {String} name
		*/
		getPropertyPriority: function(name) {
			return this._importants[name] || "";
		},
		/**
		*   element.style.overflow = "auto"
		*   element.style.getPropertyShorthand("overflow-x")
		*   -> "overflow"
		*/
		getPropertyShorthand: function() {},
		isPropertyImplicit: function() {},
		get cssText() {
			var properties = [];
			for (var i = 0, length = this.length; i < length; ++i) {
				var name = this[i];
				var value = this.getPropertyValue(name);
				var priority = this.getPropertyPriority(name);
				if (priority) priority = " !" + priority;
				properties[i] = name + ": " + value + priority + ";";
			}
			return properties.join(" ");
		},
		set cssText(text) {
			var i, name;
			for (i = this.length; i--;) {
				name = this[i];
				this[name] = "";
			}
			Array.prototype.splice.call(this, 0, this.length);
			this._importants = {};
			var dummyRule = CSSOM.parse("#bogus{" + text + "}").cssRules[0].style;
			var length = dummyRule.length;
			for (i = 0; i < length; ++i) {
				name = dummyRule[i];
				this.setProperty(dummyRule[i], dummyRule.getPropertyValue(name), dummyRule.getPropertyPriority(name));
			}
		}
	};
	exports.CSSStyleDeclaration = CSSOM.CSSStyleDeclaration;
	CSSOM.parse = require_parse().parse;
}));
//#endregion
//#region node_modules/rrweb-cssom/lib/clone.js
var require_clone = /* @__PURE__ */ __commonJSMin(((exports) => {
	var CSSOM = {
		CSSStyleSheet: require_CSSStyleSheet().CSSStyleSheet,
		CSSRule: require_CSSRule().CSSRule,
		CSSStyleRule: require_CSSStyleRule().CSSStyleRule,
		CSSGroupingRule: require_CSSGroupingRule().CSSGroupingRule,
		CSSConditionRule: require_CSSConditionRule().CSSConditionRule,
		CSSMediaRule: require_CSSMediaRule().CSSMediaRule,
		CSSContainerRule: require_CSSContainerRule().CSSContainerRule,
		CSSSupportsRule: require_CSSSupportsRule().CSSSupportsRule,
		CSSStyleDeclaration: require_CSSStyleDeclaration$1().CSSStyleDeclaration,
		CSSKeyframeRule: require_CSSKeyframeRule().CSSKeyframeRule,
		CSSKeyframesRule: require_CSSKeyframesRule().CSSKeyframesRule,
		CSSLayerBlockRule: require_CSSLayerBlockRule().CSSLayerBlockRule
	};
	/**
	* Produces a deep copy of stylesheet — the instance variables of stylesheet are copied recursively.
	* @param {CSSStyleSheet|CSSOM.CSSStyleSheet} stylesheet
	* @nosideeffects
	* @return {CSSOM.CSSStyleSheet}
	*/
	CSSOM.clone = function clone(stylesheet) {
		var cloned = new CSSOM.CSSStyleSheet();
		var rules = stylesheet.cssRules;
		if (!rules) return cloned;
		for (var i = 0, rulesLength = rules.length; i < rulesLength; i++) {
			var rule = rules[i];
			var ruleClone = cloned.cssRules[i] = new rule.constructor();
			var style = rule.style;
			if (style) {
				var styleClone = ruleClone.style = new CSSOM.CSSStyleDeclaration();
				for (var j = 0, styleLength = style.length; j < styleLength; j++) {
					var name = styleClone[j] = style[j];
					styleClone[name] = style[name];
					styleClone._importants[name] = style.getPropertyPriority(name);
				}
				styleClone.length = style.length;
			}
			if (rule.hasOwnProperty("keyText")) ruleClone.keyText = rule.keyText;
			if (rule.hasOwnProperty("selectorText")) ruleClone.selectorText = rule.selectorText;
			if (rule.hasOwnProperty("mediaText")) ruleClone.mediaText = rule.mediaText;
			if (rule.hasOwnProperty("conditionText")) ruleClone.conditionText = rule.conditionText;
			if (rule.hasOwnProperty("layerName")) ruleClone.layerName = rule.layerName;
			if (rule.hasOwnProperty("cssRules")) ruleClone.cssRules = clone(rule).cssRules;
		}
		return cloned;
	};
	exports.clone = CSSOM.clone;
}));
//#endregion
//#region node_modules/rrweb-cssom/lib/index.js
var require_lib = /* @__PURE__ */ __commonJSMin(((exports) => {
	exports.CSSStyleDeclaration = require_CSSStyleDeclaration$1().CSSStyleDeclaration;
	exports.CSSRule = require_CSSRule().CSSRule;
	exports.CSSGroupingRule = require_CSSGroupingRule().CSSGroupingRule;
	exports.CSSConditionRule = require_CSSConditionRule().CSSConditionRule;
	exports.CSSStyleRule = require_CSSStyleRule().CSSStyleRule;
	exports.MediaList = require_MediaList().MediaList;
	exports.CSSMediaRule = require_CSSMediaRule().CSSMediaRule;
	exports.CSSContainerRule = require_CSSContainerRule().CSSContainerRule;
	exports.CSSSupportsRule = require_CSSSupportsRule().CSSSupportsRule;
	exports.CSSImportRule = require_CSSImportRule().CSSImportRule;
	exports.CSSFontFaceRule = require_CSSFontFaceRule().CSSFontFaceRule;
	exports.CSSHostRule = require_CSSHostRule().CSSHostRule;
	exports.CSSStartingStyleRule = require_CSSStartingStyleRule().CSSStartingStyleRule;
	exports.StyleSheet = require_StyleSheet().StyleSheet;
	exports.CSSStyleSheet = require_CSSStyleSheet().CSSStyleSheet;
	exports.CSSKeyframesRule = require_CSSKeyframesRule().CSSKeyframesRule;
	exports.CSSKeyframeRule = require_CSSKeyframeRule().CSSKeyframeRule;
	exports.MatcherList = require_MatcherList().MatcherList;
	exports.CSSDocumentRule = require_CSSDocumentRule().CSSDocumentRule;
	exports.CSSValue = require_CSSValue().CSSValue;
	exports.CSSValueExpression = require_CSSValueExpression().CSSValueExpression;
	exports.CSSLayerBlockRule = require_CSSLayerBlockRule().CSSLayerBlockRule;
	exports.parse = require_parse().parse;
	exports.clone = require_clone().clone;
}));
//#endregion
//#region node_modules/isomorphic-dompurify/node_modules/cssstyle/lib/allWebkitProperties.js
var require_allWebkitProperties = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* This file contains all implemented properties that are not a part of any
	* current specifications or drafts, but are handled by browsers nevertheless.
	*/
	module.exports = [
		"background-composite",
		"border-after",
		"border-after-color",
		"border-after-style",
		"border-after-width",
		"border-before",
		"border-before-color",
		"border-before-style",
		"border-before-width",
		"border-end",
		"border-end-color",
		"border-end-style",
		"border-end-width",
		"border-fit",
		"border-horizontal-spacing",
		"border-start",
		"border-start-color",
		"border-start-style",
		"border-start-width",
		"border-vertical-spacing",
		"color-correction",
		"column-axis",
		"column-break-after",
		"column-break-before",
		"column-break-inside",
		"column-rule-color",
		"flex-align",
		"flex-item-align",
		"flex-line-pack",
		"flex-order",
		"flex-pack",
		"flex-wrap",
		"font-size-delta",
		"font-smoothing",
		"highlight",
		"hyphenate-limit-after",
		"hyphenate-limit-before",
		"locale",
		"logical-height",
		"logical-width",
		"margin-after",
		"margin-after-collapse",
		"margin-before",
		"margin-before-collapse",
		"margin-bottom-collapse",
		"margin-collapse",
		"margin-end",
		"margin-start",
		"margin-top-collapse",
		"marquee",
		"marquee-direction",
		"marquee-increment",
		"marquee-repetition",
		"marquee-speed",
		"marquee-style",
		"mask-attachment",
		"mask-box-image-outset",
		"mask-box-image-repeat",
		"mask-box-image-slice",
		"mask-box-image-source",
		"mask-box-image-width",
		"mask-position-x",
		"mask-position-y",
		"mask-repeat-x",
		"mask-repeat-y",
		"match-nearest-mail-blockquote-color",
		"max-logical-height",
		"max-logical-width",
		"min-logical-height",
		"min-logical-width",
		"nbsp-mode",
		"overflow-scrolling",
		"padding-after",
		"padding-before",
		"padding-end",
		"padding-start",
		"perspective-origin-x",
		"perspective-origin-y",
		"region-break-after",
		"region-break-before",
		"region-break-inside",
		"region-overflow",
		"rtl-ordering",
		"svg-shadow",
		"tap-highlight-color",
		"text-decorations-in-effect",
		"text-emphasis-color",
		"text-fill-color",
		"text-security",
		"text-size-adjust",
		"text-stroke",
		"text-stroke-color",
		"text-stroke-width",
		"transform",
		"transform-origin-x",
		"transform-origin-y",
		"transform-origin-z",
		"user-drag",
		"user-modify",
		"wrap",
		"wrap-margin",
		"wrap-padding",
		"wrap-shape-inside",
		"wrap-shape-outside",
		"zoom"
	].map((prop) => `-webkit-${prop}`);
}));
//#endregion
//#region node_modules/isomorphic-dompurify/node_modules/cssstyle/lib/allExtraProperties.js
var require_allExtraProperties = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* This file contains all implemented properties that are not a part of any
	* current specifications or drafts, but are handled by browsers nevertheless.
	*/
	var allWebkitProperties = require_allWebkitProperties();
	module.exports = /* @__PURE__ */ new Set([
		"background-position-x",
		"background-position-y",
		"background-repeat-x",
		"background-repeat-y",
		"color-interpolation",
		"color-profile",
		"color-rendering",
		"enable-background",
		"glyph-orientation-horizontal",
		"kerning",
		"marker-offset",
		"marks",
		"pointer-events",
		"shape-rendering",
		"size",
		"src",
		"stop-color",
		"stop-opacity",
		"text-anchor",
		"text-line-through",
		"text-line-through-color",
		"text-line-through-mode",
		"text-line-through-style",
		"text-line-through-width",
		"text-overline",
		"text-overline-color",
		"text-overline-mode",
		"text-overline-style",
		"text-overline-width",
		"text-rendering",
		"text-underline",
		"text-underline-color",
		"text-underline-mode",
		"text-underline-style",
		"text-underline-width",
		"unicode-range",
		"vector-effect",
		...allWebkitProperties
	]);
}));
//#endregion
//#region node_modules/isomorphic-dompurify/node_modules/cssstyle/lib/generated/allProperties.js
var require_allProperties = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = /* @__PURE__ */ new Set([
		"-webkit-line-clamp",
		"accent-color",
		"align-content",
		"align-items",
		"align-self",
		"alignment-baseline",
		"all",
		"anchor-name",
		"anchor-scope",
		"animation",
		"animation-composition",
		"animation-delay",
		"animation-direction",
		"animation-duration",
		"animation-fill-mode",
		"animation-iteration-count",
		"animation-name",
		"animation-play-state",
		"animation-range",
		"animation-range-end",
		"animation-range-start",
		"animation-timeline",
		"animation-timing-function",
		"appearance",
		"aspect-ratio",
		"azimuth",
		"backface-visibility",
		"background",
		"background-attachment",
		"background-blend-mode",
		"background-clip",
		"background-color",
		"background-image",
		"background-origin",
		"background-position",
		"background-repeat",
		"background-size",
		"baseline-shift",
		"baseline-source",
		"block-ellipsis",
		"block-size",
		"block-step",
		"block-step-align",
		"block-step-insert",
		"block-step-round",
		"block-step-size",
		"bookmark-label",
		"bookmark-level",
		"bookmark-state",
		"border",
		"border-block",
		"border-block-color",
		"border-block-end",
		"border-block-end-color",
		"border-block-end-style",
		"border-block-end-width",
		"border-block-start",
		"border-block-start-color",
		"border-block-start-style",
		"border-block-start-width",
		"border-block-style",
		"border-block-width",
		"border-bottom",
		"border-bottom-color",
		"border-bottom-left-radius",
		"border-bottom-right-radius",
		"border-bottom-style",
		"border-bottom-width",
		"border-boundary",
		"border-collapse",
		"border-color",
		"border-end-end-radius",
		"border-end-start-radius",
		"border-image",
		"border-image-outset",
		"border-image-repeat",
		"border-image-slice",
		"border-image-source",
		"border-image-width",
		"border-inline",
		"border-inline-color",
		"border-inline-end",
		"border-inline-end-color",
		"border-inline-end-style",
		"border-inline-end-width",
		"border-inline-start",
		"border-inline-start-color",
		"border-inline-start-style",
		"border-inline-start-width",
		"border-inline-style",
		"border-inline-width",
		"border-left",
		"border-left-color",
		"border-left-style",
		"border-left-width",
		"border-radius",
		"border-right",
		"border-right-color",
		"border-right-style",
		"border-right-width",
		"border-spacing",
		"border-start-end-radius",
		"border-start-start-radius",
		"border-style",
		"border-top",
		"border-top-color",
		"border-top-left-radius",
		"border-top-right-radius",
		"border-top-style",
		"border-top-width",
		"border-width",
		"bottom",
		"box-decoration-break",
		"box-shadow",
		"box-sizing",
		"box-snap",
		"break-after",
		"break-before",
		"break-inside",
		"caption-side",
		"caret",
		"caret-color",
		"caret-shape",
		"clear",
		"clip",
		"clip-path",
		"clip-rule",
		"color",
		"color-adjust",
		"color-interpolation-filters",
		"color-scheme",
		"column-count",
		"column-fill",
		"column-gap",
		"column-rule",
		"column-rule-break",
		"column-rule-color",
		"column-rule-outset",
		"column-rule-style",
		"column-rule-width",
		"column-span",
		"column-width",
		"columns",
		"contain",
		"contain-intrinsic-block-size",
		"contain-intrinsic-height",
		"contain-intrinsic-inline-size",
		"contain-intrinsic-size",
		"contain-intrinsic-width",
		"container",
		"container-name",
		"container-type",
		"content",
		"content-visibility",
		"continue",
		"counter-increment",
		"counter-reset",
		"counter-set",
		"cue",
		"cue-after",
		"cue-before",
		"cursor",
		"direction",
		"display",
		"dominant-baseline",
		"dynamic-range-limit",
		"elevation",
		"empty-cells",
		"fill",
		"fill-break",
		"fill-color",
		"fill-image",
		"fill-opacity",
		"fill-origin",
		"fill-position",
		"fill-repeat",
		"fill-rule",
		"fill-size",
		"filter",
		"flex",
		"flex-basis",
		"flex-direction",
		"flex-flow",
		"flex-grow",
		"flex-shrink",
		"flex-wrap",
		"float",
		"float-defer",
		"float-offset",
		"float-reference",
		"flood-color",
		"flood-opacity",
		"flow-from",
		"flow-into",
		"font",
		"font-family",
		"font-feature-settings",
		"font-kerning",
		"font-language-override",
		"font-optical-sizing",
		"font-palette",
		"font-size",
		"font-size-adjust",
		"font-stretch",
		"font-style",
		"font-synthesis",
		"font-synthesis-position",
		"font-synthesis-small-caps",
		"font-synthesis-style",
		"font-synthesis-weight",
		"font-variant",
		"font-variant-alternates",
		"font-variant-caps",
		"font-variant-east-asian",
		"font-variant-emoji",
		"font-variant-ligatures",
		"font-variant-numeric",
		"font-variant-position",
		"font-variation-settings",
		"font-weight",
		"font-width",
		"footnote-display",
		"footnote-policy",
		"forced-color-adjust",
		"gap",
		"glyph-orientation-vertical",
		"grid",
		"grid-area",
		"grid-auto-columns",
		"grid-auto-flow",
		"grid-auto-rows",
		"grid-column",
		"grid-column-end",
		"grid-column-start",
		"grid-row",
		"grid-row-end",
		"grid-row-start",
		"grid-template",
		"grid-template-areas",
		"grid-template-columns",
		"grid-template-rows",
		"hanging-punctuation",
		"height",
		"hyphenate-character",
		"hyphenate-limit-chars",
		"hyphenate-limit-last",
		"hyphenate-limit-lines",
		"hyphenate-limit-zone",
		"hyphens",
		"image-orientation",
		"image-rendering",
		"image-resolution",
		"initial-letter",
		"initial-letter-align",
		"initial-letter-wrap",
		"inline-size",
		"inline-sizing",
		"inset",
		"inset-block",
		"inset-block-end",
		"inset-block-start",
		"inset-inline",
		"inset-inline-end",
		"inset-inline-start",
		"interpolate-size",
		"isolation",
		"item-cross",
		"item-direction",
		"item-flow",
		"item-pack",
		"item-slack",
		"item-track",
		"item-wrap",
		"justify-content",
		"justify-items",
		"justify-self",
		"left",
		"letter-spacing",
		"lighting-color",
		"line-break",
		"line-clamp",
		"line-fit-edge",
		"line-grid",
		"line-height",
		"line-height-step",
		"line-padding",
		"line-snap",
		"list-style",
		"list-style-image",
		"list-style-position",
		"list-style-type",
		"margin",
		"margin-block",
		"margin-block-end",
		"margin-block-start",
		"margin-bottom",
		"margin-break",
		"margin-inline",
		"margin-inline-end",
		"margin-inline-start",
		"margin-left",
		"margin-right",
		"margin-top",
		"margin-trim",
		"marker",
		"marker-end",
		"marker-knockout-left",
		"marker-knockout-right",
		"marker-mid",
		"marker-pattern",
		"marker-segment",
		"marker-side",
		"marker-start",
		"mask",
		"mask-border",
		"mask-border-mode",
		"mask-border-outset",
		"mask-border-repeat",
		"mask-border-slice",
		"mask-border-source",
		"mask-border-width",
		"mask-clip",
		"mask-composite",
		"mask-image",
		"mask-mode",
		"mask-origin",
		"mask-position",
		"mask-repeat",
		"mask-size",
		"mask-type",
		"max-block-size",
		"max-height",
		"max-inline-size",
		"max-lines",
		"max-width",
		"min-block-size",
		"min-height",
		"min-inline-size",
		"min-intrinsic-sizing",
		"min-width",
		"mix-blend-mode",
		"nav-down",
		"nav-left",
		"nav-right",
		"nav-up",
		"object-fit",
		"object-position",
		"offset",
		"offset-anchor",
		"offset-distance",
		"offset-path",
		"offset-position",
		"offset-rotate",
		"opacity",
		"order",
		"orphans",
		"outline",
		"outline-color",
		"outline-offset",
		"outline-style",
		"outline-width",
		"overflow",
		"overflow-anchor",
		"overflow-block",
		"overflow-clip-margin",
		"overflow-clip-margin-block",
		"overflow-clip-margin-block-end",
		"overflow-clip-margin-block-start",
		"overflow-clip-margin-bottom",
		"overflow-clip-margin-inline",
		"overflow-clip-margin-inline-end",
		"overflow-clip-margin-inline-start",
		"overflow-clip-margin-left",
		"overflow-clip-margin-right",
		"overflow-clip-margin-top",
		"overflow-inline",
		"overflow-wrap",
		"overflow-x",
		"overflow-y",
		"overscroll-behavior",
		"overscroll-behavior-block",
		"overscroll-behavior-inline",
		"overscroll-behavior-x",
		"overscroll-behavior-y",
		"padding",
		"padding-block",
		"padding-block-end",
		"padding-block-start",
		"padding-bottom",
		"padding-inline",
		"padding-inline-end",
		"padding-inline-start",
		"padding-left",
		"padding-right",
		"padding-top",
		"page",
		"page-break-after",
		"page-break-before",
		"page-break-inside",
		"pause",
		"pause-after",
		"pause-before",
		"perspective",
		"perspective-origin",
		"pitch",
		"pitch-range",
		"place-content",
		"place-items",
		"place-self",
		"play-during",
		"position",
		"position-anchor",
		"position-area",
		"position-try",
		"position-try-fallbacks",
		"position-try-order",
		"position-visibility",
		"print-color-adjust",
		"quotes",
		"reading-flow",
		"region-fragment",
		"resize",
		"rest",
		"rest-after",
		"rest-before",
		"richness",
		"right",
		"rotate",
		"row-gap",
		"row-rule",
		"row-rule-break",
		"row-rule-color",
		"row-rule-outset",
		"row-rule-style",
		"row-rule-width",
		"ruby-align",
		"ruby-merge",
		"ruby-overhang",
		"ruby-position",
		"rule",
		"rule-break",
		"rule-color",
		"rule-outset",
		"rule-paint-order",
		"rule-style",
		"rule-width",
		"running",
		"scale",
		"scroll-behavior",
		"scroll-margin",
		"scroll-margin-block",
		"scroll-margin-block-end",
		"scroll-margin-block-start",
		"scroll-margin-bottom",
		"scroll-margin-inline",
		"scroll-margin-inline-end",
		"scroll-margin-inline-start",
		"scroll-margin-left",
		"scroll-margin-right",
		"scroll-margin-top",
		"scroll-marker-group",
		"scroll-padding",
		"scroll-padding-block",
		"scroll-padding-block-end",
		"scroll-padding-block-start",
		"scroll-padding-bottom",
		"scroll-padding-inline",
		"scroll-padding-inline-end",
		"scroll-padding-inline-start",
		"scroll-padding-left",
		"scroll-padding-right",
		"scroll-padding-top",
		"scroll-snap-align",
		"scroll-snap-stop",
		"scroll-snap-type",
		"scroll-start-target",
		"scroll-timeline",
		"scroll-timeline-axis",
		"scroll-timeline-name",
		"scrollbar-color",
		"scrollbar-gutter",
		"scrollbar-width",
		"shape-image-threshold",
		"shape-inside",
		"shape-margin",
		"shape-outside",
		"slider-orientation",
		"spatial-navigation-action",
		"spatial-navigation-contain",
		"spatial-navigation-function",
		"speak",
		"speak-as",
		"speak-header",
		"speak-numeral",
		"speak-punctuation",
		"speech-rate",
		"stress",
		"string-set",
		"stroke",
		"stroke-align",
		"stroke-alignment",
		"stroke-break",
		"stroke-color",
		"stroke-dash-corner",
		"stroke-dash-justify",
		"stroke-dashadjust",
		"stroke-dasharray",
		"stroke-dashcorner",
		"stroke-dashoffset",
		"stroke-image",
		"stroke-linecap",
		"stroke-linejoin",
		"stroke-miterlimit",
		"stroke-opacity",
		"stroke-origin",
		"stroke-position",
		"stroke-repeat",
		"stroke-size",
		"stroke-width",
		"tab-size",
		"table-layout",
		"text-align",
		"text-align-all",
		"text-align-last",
		"text-autospace",
		"text-box",
		"text-box-edge",
		"text-box-trim",
		"text-combine-upright",
		"text-decoration",
		"text-decoration-color",
		"text-decoration-line",
		"text-decoration-skip",
		"text-decoration-skip-box",
		"text-decoration-skip-ink",
		"text-decoration-skip-inset",
		"text-decoration-skip-self",
		"text-decoration-skip-spaces",
		"text-decoration-style",
		"text-decoration-thickness",
		"text-emphasis",
		"text-emphasis-color",
		"text-emphasis-position",
		"text-emphasis-skip",
		"text-emphasis-style",
		"text-group-align",
		"text-indent",
		"text-justify",
		"text-orientation",
		"text-overflow",
		"text-shadow",
		"text-spacing",
		"text-spacing-trim",
		"text-transform",
		"text-underline-offset",
		"text-underline-position",
		"text-wrap",
		"text-wrap-mode",
		"text-wrap-style",
		"timeline-scope",
		"top",
		"transform",
		"transform-box",
		"transform-origin",
		"transform-style",
		"transition",
		"transition-behavior",
		"transition-delay",
		"transition-duration",
		"transition-property",
		"transition-timing-function",
		"translate",
		"unicode-bidi",
		"user-select",
		"vertical-align",
		"view-timeline",
		"view-timeline-axis",
		"view-timeline-inset",
		"view-timeline-name",
		"view-transition-class",
		"view-transition-group",
		"view-transition-name",
		"visibility",
		"voice-balance",
		"voice-duration",
		"voice-family",
		"voice-pitch",
		"voice-range",
		"voice-rate",
		"voice-stress",
		"voice-volume",
		"volume",
		"white-space",
		"white-space-collapse",
		"white-space-trim",
		"widows",
		"width",
		"will-change",
		"word-break",
		"word-space-transform",
		"word-spacing",
		"word-wrap",
		"wrap-after",
		"wrap-before",
		"wrap-flow",
		"wrap-inside",
		"wrap-through",
		"writing-mode",
		"z-index"
	]);
}));
//#endregion
//#region node_modules/isomorphic-dompurify/node_modules/cssstyle/lib/generated/implementedProperties.js
var require_implementedProperties = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = /* @__PURE__ */ new Set([
		"background",
		"background-attachment",
		"background-color",
		"background-image",
		"background-position",
		"background-repeat",
		"border",
		"border-bottom",
		"border-bottom-color",
		"border-bottom-style",
		"border-bottom-width",
		"border-collapse",
		"border-color",
		"border-left",
		"border-left-color",
		"border-left-style",
		"border-left-width",
		"border-right",
		"border-right-color",
		"border-right-style",
		"border-right-width",
		"border-spacing",
		"border-style",
		"border-top",
		"border-top-color",
		"border-top-style",
		"border-top-width",
		"border-width",
		"bottom",
		"clear",
		"clip",
		"color",
		"flex",
		"flex-basis",
		"flex-grow",
		"flex-shrink",
		"float",
		"flood-color",
		"font",
		"font-family",
		"font-size",
		"font-style",
		"font-variant",
		"font-weight",
		"height",
		"left",
		"lighting-color",
		"line-height",
		"margin",
		"margin-bottom",
		"margin-left",
		"margin-right",
		"margin-top",
		"opacity",
		"outline-color",
		"padding",
		"padding-bottom",
		"padding-left",
		"padding-right",
		"padding-top",
		"right",
		"stop-color",
		"top",
		"-webkit-border-after-color",
		"-webkit-border-before-color",
		"-webkit-border-end-color",
		"-webkit-border-start-color",
		"-webkit-column-rule-color",
		"-webkit-tap-highlight-color",
		"-webkit-text-emphasis-color",
		"-webkit-text-fill-color",
		"-webkit-text-stroke-color",
		"width"
	]);
}));
//#endregion
//#region node_modules/isomorphic-dompurify/node_modules/cssstyle/lib/utils/strings.js
var require_strings = /* @__PURE__ */ __commonJSMin(((exports) => {
	var asciiWhitespaceRe = /^[\t\n\f\r ]$/;
	exports.asciiWhitespaceRe = asciiWhitespaceRe;
	exports.asciiLowercase = (s) => {
		const len = s.length;
		const out = new Array(len);
		for (let i = 0; i < len; i++) {
			const code = s.charCodeAt(i);
			out[i] = code >= 65 && code <= 90 ? String.fromCharCode(code | 32) : s[i];
		}
		return out.join("");
	};
	exports.asciiUppercase = (s) => {
		const len = s.length;
		const out = new Array(len);
		for (let i = 0; i < len; i++) {
			const code = s.charCodeAt(i);
			out[i] = code >= 97 && code <= 122 ? String.fromCharCode(code & -33) : s[i];
		}
		return out.join("");
	};
	exports.stripNewlines = (s) => {
		return s.replace(/[\n\r]+/g, "");
	};
	exports.stripLeadingAndTrailingASCIIWhitespace = (s) => {
		return s.replace(/^[ \t\n\f\r]+/, "").replace(/[ \t\n\f\r]+$/, "");
	};
	exports.stripAndCollapseASCIIWhitespace = (s) => {
		return s.replace(/[ \t\n\f\r]+/g, " ").replace(/^[ \t\n\f\r]+/, "").replace(/[ \t\n\f\r]+$/, "");
	};
	exports.isValidSimpleColor = (s) => {
		return /^#[a-fA-F\d]{6}$/.test(s);
	};
	exports.asciiCaseInsensitiveMatch = (a, b) => {
		if (a.length !== b.length) return false;
		for (let i = 0; i < a.length; ++i) if ((a.charCodeAt(i) | 32) !== (b.charCodeAt(i) | 32)) return false;
		return true;
	};
	var parseInteger = exports.parseInteger = (input) => {
		const numWhitespace = input.length - input.trimStart().length;
		if (/[^\t\n\f\r ]/.test(input.slice(0, numWhitespace))) return null;
		const value = parseInt(input, 10);
		if (Number.isNaN(value)) return null;
		return value === 0 ? 0 : value;
	};
	exports.parseNonNegativeInteger = (input) => {
		const value = parseInteger(input);
		if (value === null) return null;
		if (value < 0) return null;
		return value;
	};
	var floatingPointNumRe = /^-?(?:\d+|\d*\.\d+)(?:[eE][-+]?\d+)?$/;
	exports.isValidFloatingPointNumber = (str) => floatingPointNumRe.test(str);
	exports.parseFloatingPointNumber = (str) => {
		const numWhitespace = str.length - str.trimStart().length;
		if (/[^\t\n\f\r ]/.test(str.slice(0, numWhitespace))) return null;
		const parsed = parseFloat(str);
		return isFinite(parsed) ? parsed : null;
	};
	exports.splitOnASCIIWhitespace = (str) => {
		let position = 0;
		const tokens = [];
		while (position < str.length && asciiWhitespaceRe.test(str[position])) position++;
		if (position === str.length) return tokens;
		while (position < str.length) {
			const start = position;
			while (position < str.length && !asciiWhitespaceRe.test(str[position])) position++;
			tokens.push(str.slice(start, position));
			while (position < str.length && asciiWhitespaceRe.test(str[position])) position++;
		}
		return tokens;
	};
	exports.splitOnCommas = (str) => {
		let position = 0;
		const tokens = [];
		while (position < str.length) {
			let start = position;
			while (position < str.length && str[position] !== ",") position++;
			let end = position;
			while (start < str.length && asciiWhitespaceRe.test(str[start])) start++;
			while (end > start && asciiWhitespaceRe.test(str[end - 1])) end--;
			tokens.push(str.slice(start, end));
			if (position < str.length) position++;
		}
		return tokens;
	};
}));
//#endregion
//#region node_modules/isomorphic-dompurify/node_modules/cssstyle/lib/parsers.js
/**
* These are commonly used parsers for CSS Values they take a string to parse
* and return a string after it's been converted, if needed
*/
var require_parsers = /* @__PURE__ */ __commonJSMin(((exports) => {
	var { resolve: resolveColor, utils } = require_cjs();
	var { asciiLowercase } = require_strings();
	var { cssCalc, isColor, isGradient, splitValue } = utils;
	var GLOBAL_VALUE = Object.freeze([
		"initial",
		"inherit",
		"unset",
		"revert",
		"revert-layer"
	]);
	var NUM_TYPE = Object.freeze({
		UNDEFINED: 0,
		VAR: 1,
		NUMBER: 2,
		PERCENT: 4,
		LENGTH: 8,
		ANGLE: 16,
		CALC: 32
	});
	var SYS_COLOR = Object.freeze([
		"accentcolor",
		"accentcolortext",
		"activeborder",
		"activecaption",
		"activetext",
		"appworkspace",
		"background",
		"buttonborder",
		"buttonface",
		"buttonhighlight",
		"buttonshadow",
		"buttontext",
		"canvas",
		"canvastext",
		"captiontext",
		"field",
		"fieldtext",
		"graytext",
		"highlight",
		"highlighttext",
		"inactiveborder",
		"inactivecaption",
		"inactivecaptiontext",
		"infobackground",
		"infotext",
		"linktext",
		"mark",
		"marktext",
		"menu",
		"menutext",
		"scrollbar",
		"selecteditem",
		"selecteditemtext",
		"threeddarkshadow",
		"threedface",
		"threedhighlight",
		"threedlightshadow",
		"threedshadow",
		"visitedtext",
		"window",
		"windowframe",
		"windowtext"
	]);
	var DIGIT = "(?:0|[1-9]\\d*)";
	var unitRegEx = new RegExp(`^(${`[+-]?(?:${DIGIT}(?:\\.\\d*)?|\\.\\d+)(?:e-?${DIGIT})?`})([a-z]+|%)?$`, "i");
	var urlRegEx = /^url\(\s*((?:[^)]|\\\))*)\s*\)$/;
	var keywordRegEx = /^[a-z]+(?:-[a-z]+)*$/i;
	var stringRegEx = /^("[^"]*"|'[^']*')$/;
	var varRegEx = /^var\(/;
	var varContainedRegEx = /(?<=[*/\s(])var\(/;
	var calcRegEx = /^(?:a?(?:cos|sin|tan)|abs|atan2|calc|clamp|exp|hypot|log|max|min|mod|pow|rem|round|sign|sqrt)\(/;
	var functionRegEx = /^([a-z][a-z\d]*(?:-[a-z\d]+)*)\(/i;
	var getNumericType = function getNumericType(val) {
		if (varRegEx.test(val)) return NUM_TYPE.VAR;
		if (calcRegEx.test(val)) return NUM_TYPE.CALC;
		if (unitRegEx.test(val)) {
			const [, , unit] = unitRegEx.exec(val);
			if (!unit) return NUM_TYPE.NUMBER;
			if (unit === "%") return NUM_TYPE.PERCENT;
			if (/^(?:[cm]m|[dls]?v(?:[bhiw]|max|min)|in|p[ctx]|q|r?(?:[cl]h|cap|e[mx]|ic))$/i.test(unit)) return NUM_TYPE.LENGTH;
			if (/^(?:deg|g?rad|turn)$/i.test(unit)) return NUM_TYPE.ANGLE;
		}
		return NUM_TYPE.UNDEFINED;
	};
	exports.prepareValue = function prepareValue(value, globalObject = globalThis) {
		if (value === null) return "";
		const type = typeof value;
		switch (type) {
			case "string": return value.trim();
			case "number": return value.toString();
			case "undefined": return "undefined";
			case "symbol": throw new globalObject.TypeError("Can not convert symbol to string.");
			default: {
				const str = value.toString();
				if (typeof str === "string") return str;
				throw new globalObject.TypeError(`Can not convert ${type} to string.`);
			}
		}
	};
	exports.hasVarFunc = function hasVarFunc(val) {
		return varRegEx.test(val) || varContainedRegEx.test(val);
	};
	exports.parseNumber = function parseNumber(val, restrictToPositive = false) {
		if (val === "") return "";
		switch (getNumericType(val)) {
			case NUM_TYPE.VAR: return val;
			case NUM_TYPE.CALC: return cssCalc(val, { format: "specifiedValue" });
			case NUM_TYPE.NUMBER: {
				const num = parseFloat(val);
				if (restrictToPositive && num < 0) return;
				return `${num}`;
			}
			default: if (varContainedRegEx.test(val)) return val;
		}
	};
	exports.parseLength = function parseLength(val, restrictToPositive = false) {
		if (val === "") return "";
		switch (getNumericType(val)) {
			case NUM_TYPE.VAR: return val;
			case NUM_TYPE.CALC: return cssCalc(val, { format: "specifiedValue" });
			case NUM_TYPE.NUMBER:
				if (parseFloat(val) === 0) return "0px";
				return;
			case NUM_TYPE.LENGTH: {
				const [, numVal, unit] = unitRegEx.exec(val);
				const num = parseFloat(numVal);
				if (restrictToPositive && num < 0) return;
				return `${num}${asciiLowercase(unit)}`;
			}
			default: if (varContainedRegEx.test(val)) return val;
		}
	};
	exports.parsePercent = function parsePercent(val, restrictToPositive = false) {
		if (val === "") return "";
		switch (getNumericType(val)) {
			case NUM_TYPE.VAR: return val;
			case NUM_TYPE.CALC: return cssCalc(val, { format: "specifiedValue" });
			case NUM_TYPE.NUMBER:
				if (parseFloat(val) === 0) return "0%";
				return;
			case NUM_TYPE.PERCENT: {
				const [, numVal, unit] = unitRegEx.exec(val);
				const num = parseFloat(numVal);
				if (restrictToPositive && num < 0) return;
				return `${num}${asciiLowercase(unit)}`;
			}
			default: if (varContainedRegEx.test(val)) return val;
		}
	};
	exports.parseMeasurement = function parseMeasurement(val, restrictToPositive = false) {
		if (val === "") return "";
		switch (getNumericType(val)) {
			case NUM_TYPE.VAR: return val;
			case NUM_TYPE.CALC: return cssCalc(val, { format: "specifiedValue" });
			case NUM_TYPE.NUMBER:
				if (parseFloat(val) === 0) return "0px";
				return;
			case NUM_TYPE.LENGTH:
			case NUM_TYPE.PERCENT: {
				const [, numVal, unit] = unitRegEx.exec(val);
				const num = parseFloat(numVal);
				if (restrictToPositive && num < 0) return;
				return `${num}${asciiLowercase(unit)}`;
			}
			default: if (varContainedRegEx.test(val)) return val;
		}
	};
	exports.parseAngle = function parseAngle(val, normalizeDeg = false) {
		if (val === "") return "";
		switch (getNumericType(val)) {
			case NUM_TYPE.VAR: return val;
			case NUM_TYPE.CALC: return cssCalc(val, { format: "specifiedValue" });
			case NUM_TYPE.NUMBER:
				if (parseFloat(val) === 0) return "0deg";
				return;
			case NUM_TYPE.ANGLE: {
				let [, numVal, unit] = unitRegEx.exec(val);
				numVal = parseFloat(numVal);
				unit = asciiLowercase(unit);
				if (unit === "deg") {
					if (normalizeDeg && numVal < 0) while (numVal < 0) numVal += 360;
					numVal %= 360;
				}
				return `${numVal}${unit}`;
			}
			default: if (varContainedRegEx.test(val)) return val;
		}
	};
	exports.parseUrl = function parseUrl(val) {
		if (val === "") return val;
		const res = urlRegEx.exec(val);
		if (!res) return;
		let str = res[1];
		if ((str[0] === "\"" || str[0] === "'") && str[0] !== str[str.length - 1]) return;
		if (str[0] === "\"" || str[0] === "'") str = str.substr(1, str.length - 2);
		let urlstr = "";
		let escaped = false;
		for (let i = 0; i < str.length; i++) switch (str[i]) {
			case "\\":
				if (escaped) {
					urlstr += "\\\\";
					escaped = false;
				} else escaped = true;
				break;
			case "(":
			case ")":
			case " ":
			case "	":
			case "\n":
			case "'":
				if (!escaped) return;
				urlstr += str[i];
				escaped = false;
				break;
			case "\"":
				if (!escaped) return;
				urlstr += "\\\"";
				escaped = false;
				break;
			default:
				urlstr += str[i];
				escaped = false;
		}
		return `url("${urlstr}")`;
	};
	exports.parseString = function parseString(val) {
		if (val === "") return "";
		if (!stringRegEx.test(val)) return;
		val = val.substr(1, val.length - 2);
		let str = "";
		let escaped = false;
		for (let i = 0; i < val.length; i++) switch (val[i]) {
			case "\\":
				if (escaped) {
					str += "\\\\";
					escaped = false;
				} else escaped = true;
				break;
			case "\"":
				str += "\\\"";
				escaped = false;
				break;
			default:
				str += val[i];
				escaped = false;
		}
		return `"${str}"`;
	};
	exports.parseKeyword = function parseKeyword(val, validKeywords = []) {
		if (val === "") return "";
		if (varRegEx.test(val)) return val;
		val = asciiLowercase(val.toString());
		if (validKeywords.includes(val) || GLOBAL_VALUE.includes(val)) return val;
	};
	exports.parseColor = function parseColor(val) {
		if (val === "") return "";
		if (varRegEx.test(val)) return val;
		if (/^[a-z]+$/i.test(val)) {
			const v = asciiLowercase(val);
			if (SYS_COLOR.includes(v)) return v;
		}
		const res = resolveColor(val, { format: "specifiedValue" });
		if (res) return res;
		return exports.parseKeyword(val);
	};
	exports.parseImage = function parseImage(val) {
		if (val === "") return "";
		if (varRegEx.test(val)) return val;
		if (keywordRegEx.test(val)) return exports.parseKeyword(val, ["none"]);
		const values = splitValue(val, {
			delimiter: ",",
			preserveComment: varContainedRegEx.test(val)
		});
		let isImage = Boolean(values.length);
		for (let i = 0; i < values.length; i++) {
			const image = values[i];
			if (image === "") return "";
			if (isGradient(image) || /^(?:none|inherit)$/i.test(image)) continue;
			const imageUrl = exports.parseUrl(image);
			if (imageUrl) values[i] = imageUrl;
			else {
				isImage = false;
				break;
			}
		}
		if (isImage) return values.join(", ");
	};
	exports.parseFunction = function parseFunction(val) {
		if (val === "") return {
			name: null,
			value: ""
		};
		if (functionRegEx.test(val) && val.endsWith(")")) {
			if (varRegEx.test(val) || varContainedRegEx.test(val)) return {
				name: "var",
				value: val
			};
			const [, name] = functionRegEx.exec(val);
			return {
				name,
				value: val.replace(new RegExp(`^${name}\\(`), "").replace(/\)$/, "").trim()
			};
		}
	};
	exports.parseShorthand = function parseShorthand(val, shorthandFor, preserve = false) {
		const obj = {};
		if (val === "" || exports.hasVarFunc(val)) {
			for (const [property] of shorthandFor) obj[property] = "";
			return obj;
		}
		const key = exports.parseKeyword(val);
		if (key) {
			if (key === "inherit") return obj;
			return;
		}
		const parts = splitValue(val);
		const shorthandArr = [...shorthandFor];
		for (const part of parts) {
			let partValid = false;
			for (let i = 0; i < shorthandArr.length; i++) {
				const [property, value] = shorthandArr[i];
				if (value.isValid(part)) {
					partValid = true;
					obj[property] = value.parse(part);
					if (!preserve) {
						shorthandArr.splice(i, 1);
						break;
					}
				}
			}
			if (!partValid) return;
		}
		return obj;
	};
	exports.isValidColor = function isValidColor(val) {
		if (SYS_COLOR.includes(asciiLowercase(val))) return true;
		return isColor(val);
	};
	exports.splitValue = splitValue;
}));
//#endregion
//#region node_modules/isomorphic-dompurify/node_modules/cssstyle/lib/generated/properties.js
var require_properties = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var external_dependency_parsers_0 = require_parsers();
	var external_dependency_strings_1 = require_strings();
	var backgroundImage_export_parse = function parse(v) {
		return external_dependency_parsers_0.parseImage(v);
	};
	var backgroundImage_export_isValid = function isValid(v) {
		if (v === "" || typeof external_dependency_parsers_0.parseKeyword(v, ["none"]) === "string") return true;
		return typeof backgroundImage_export_parse(v) === "string";
	};
	var backgroundImage_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			if (external_dependency_parsers_0.hasVarFunc(v)) {
				this._setProperty("background", "");
				this._setProperty("background-image", v);
			} else this._setProperty("background-image", backgroundImage_export_parse(v));
		},
		get() {
			return this.getPropertyValue("background-image");
		},
		enumerable: true,
		configurable: true
	};
	var backgroundPosition_export_parse = function parse(v) {
		const parts = external_dependency_parsers_0.splitValue(v);
		if (!parts.length || parts.length > 2) return;
		const validKeywordsX = [
			"left",
			"center",
			"right"
		];
		const validKeywordsY = [
			"top",
			"center",
			"bottom"
		];
		if (parts.length === 1) {
			const dim = external_dependency_parsers_0.parseMeasurement(parts[0]);
			if (dim) return dim;
			const validKeywords = /* @__PURE__ */ new Set([...validKeywordsX, ...validKeywordsY]);
			return external_dependency_parsers_0.parseKeyword(v, [...validKeywords]);
		}
		const [partX, partY] = parts;
		const posX = external_dependency_parsers_0.parseMeasurement(partX) || external_dependency_parsers_0.parseKeyword(partX, validKeywordsX);
		if (posX) {
			const posY = external_dependency_parsers_0.parseMeasurement(partY) || external_dependency_parsers_0.parseKeyword(partY, validKeywordsY);
			if (posY) return `${posX} ${posY}`;
		}
	};
	var backgroundPosition_export_isValid = function isValid(v) {
		if (v === "") return true;
		return typeof backgroundPosition_export_parse(v) === "string";
	};
	var backgroundPosition_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			if (external_dependency_parsers_0.hasVarFunc(v)) {
				this._setProperty("background", "");
				this._setProperty("background-position", v);
			} else this._setProperty("background-position", backgroundPosition_export_parse(v));
		},
		get() {
			return this.getPropertyValue("background-position");
		},
		enumerable: true,
		configurable: true
	};
	var backgroundRepeat_export_parse = function parse(v) {
		return external_dependency_parsers_0.parseKeyword(v, [
			"repeat",
			"repeat-x",
			"repeat-y",
			"no-repeat",
			"space",
			"round"
		]);
	};
	var backgroundRepeat_export_isValid = function isValid(v) {
		if (v === "") return true;
		return typeof backgroundRepeat_export_parse(v) === "string";
	};
	var backgroundRepeat_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			if (external_dependency_parsers_0.hasVarFunc(v)) {
				this._setProperty("background", "");
				this._setProperty("background-repeat", v);
			} else this._setProperty("background-repeat", backgroundRepeat_export_parse(v));
		},
		get() {
			return this.getPropertyValue("background-repeat");
		},
		enumerable: true,
		configurable: true
	};
	var backgroundAttachment_export_parse = function parse(v) {
		return external_dependency_parsers_0.parseKeyword(v, [
			"fixed",
			"scroll",
			"local"
		]);
	};
	var backgroundAttachment_export_isValid = function isValid(v) {
		if (v === "") return true;
		return typeof backgroundAttachment_export_parse(v) === "string";
	};
	var backgroundAttachment_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			if (external_dependency_parsers_0.hasVarFunc(v)) {
				this._setProperty("background", "");
				this._setProperty("background-attachment", v);
			} else this._setProperty("background-attachment", backgroundAttachment_export_parse(v));
		},
		get() {
			return this.getPropertyValue("background-attachment");
		},
		enumerable: true,
		configurable: true
	};
	var backgroundColor_export_parse = function parse(v) {
		const val = external_dependency_parsers_0.parseColor(v);
		if (val) return val;
		return external_dependency_parsers_0.parseKeyword(v);
	};
	var backgroundColor_export_isValid = function isValid(v) {
		if (v === "" || typeof external_dependency_parsers_0.parseKeyword(v) === "string") return true;
		return external_dependency_parsers_0.isValidColor(v);
	};
	var backgroundColor_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			if (external_dependency_parsers_0.hasVarFunc(v)) {
				this._setProperty("background", "");
				this._setProperty("background-color", v);
			} else this._setProperty("background-color", backgroundColor_export_parse(v));
		},
		get() {
			return this.getPropertyValue("background-color");
		},
		enumerable: true,
		configurable: true
	};
	var background_export_definition;
	var background_local_var_shorthandFor = /* @__PURE__ */ new Map([
		["background-image", {
			parse: backgroundImage_export_parse,
			isValid: backgroundImage_export_isValid,
			definition: backgroundImage_export_definition
		}],
		["background-position", {
			parse: backgroundPosition_export_parse,
			isValid: backgroundPosition_export_isValid,
			definition: backgroundPosition_export_definition
		}],
		["background-repeat", {
			parse: backgroundRepeat_export_parse,
			isValid: backgroundRepeat_export_isValid,
			definition: backgroundRepeat_export_definition
		}],
		["background-attachment", {
			parse: backgroundAttachment_export_parse,
			isValid: backgroundAttachment_export_isValid,
			definition: backgroundAttachment_export_definition
		}],
		["background-color", {
			parse: backgroundColor_export_parse,
			isValid: backgroundColor_export_isValid,
			definition: backgroundColor_export_definition
		}]
	]);
	background_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			if (/^none$/i.test(v)) {
				for (const [key] of background_local_var_shorthandFor) this._setProperty(key, "");
				this._setProperty("background", external_dependency_strings_1.asciiLowercase(v));
			} else if (external_dependency_parsers_0.hasVarFunc(v)) {
				for (const [key] of background_local_var_shorthandFor) this._setProperty(key, "");
				this._setProperty("background", v);
			} else this._shorthandSetter("background", v, background_local_var_shorthandFor);
		},
		get() {
			let val = this.getPropertyValue("background");
			if (external_dependency_parsers_0.hasVarFunc(val)) return val;
			val = this._shorthandGetter("background", background_local_var_shorthandFor);
			if (external_dependency_parsers_0.hasVarFunc(val)) return "";
			return val;
		},
		enumerable: true,
		configurable: true
	};
	var borderWidth_export_parse = function parse(v) {
		const key = external_dependency_parsers_0.parseKeyword(v, [
			"thin",
			"medium",
			"thick"
		]);
		if (key) return key;
		return external_dependency_parsers_0.parseLength(v, true);
	};
	var borderWidth_export_isValid = function isValid(v) {
		if (v === "") return true;
		return typeof borderWidth_export_parse(v) === "string";
	};
	var borderWidth_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			if (external_dependency_parsers_0.hasVarFunc(v)) {
				this._setProperty("border", "");
				this._setProperty("border-width", v);
			} else this._implicitSetter("border", "width", v, borderWidth_export_isValid, borderWidth_export_parse, [
				"top",
				"right",
				"bottom",
				"left"
			]);
		},
		get() {
			return this.getPropertyValue("border-width");
		},
		enumerable: true,
		configurable: true
	};
	var borderStyle_export_parse = function parse(v) {
		return external_dependency_parsers_0.parseKeyword(v, [
			"none",
			"hidden",
			"dotted",
			"dashed",
			"solid",
			"double",
			"groove",
			"ridge",
			"inset",
			"outset"
		]);
	};
	var borderStyle_export_isValid = function isValid(v) {
		if (v === "") return true;
		return typeof borderStyle_export_parse(v) === "string";
	};
	var borderStyle_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			if (/^none$/i.test(v)) v = "";
			if (external_dependency_parsers_0.hasVarFunc(v)) {
				this._setProperty("border", "");
				this._setProperty("border-style", v);
				return;
			}
			this._implicitSetter("border", "style", v, borderStyle_export_isValid, borderStyle_export_parse, [
				"top",
				"right",
				"bottom",
				"left"
			]);
		},
		get() {
			return this.getPropertyValue("border-style");
		},
		enumerable: true,
		configurable: true
	};
	var borderColor_export_parse = function parse(v) {
		const val = external_dependency_parsers_0.parseColor(v);
		if (val) return val;
		return external_dependency_parsers_0.parseKeyword(v);
	};
	var borderColor_export_isValid = function isValid(v) {
		if (v === "" || typeof external_dependency_parsers_0.parseKeyword(v) === "string") return true;
		return external_dependency_parsers_0.isValidColor(v);
	};
	var borderColor_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			if (external_dependency_parsers_0.hasVarFunc(v)) {
				this._setProperty("border", "");
				this._setProperty("border-color", v);
			} else this._implicitSetter("border", "color", v, borderColor_export_isValid, borderColor_export_parse, [
				"top",
				"right",
				"bottom",
				"left"
			]);
		},
		get() {
			return this.getPropertyValue("border-color");
		},
		enumerable: true,
		configurable: true
	};
	var border_export_definition;
	var border_local_var_shorthandFor = /* @__PURE__ */ new Map([
		["border-width", {
			parse: borderWidth_export_parse,
			isValid: borderWidth_export_isValid,
			definition: borderWidth_export_definition
		}],
		["border-style", {
			parse: borderStyle_export_parse,
			isValid: borderStyle_export_isValid,
			definition: borderStyle_export_definition
		}],
		["border-color", {
			parse: borderColor_export_parse,
			isValid: borderColor_export_isValid,
			definition: borderColor_export_definition
		}]
	]);
	border_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			if (/^none$/i.test(v)) v = "";
			if (external_dependency_parsers_0.hasVarFunc(v)) {
				for (const [key] of border_local_var_shorthandFor) this._setProperty(key, "");
				this._setProperty("border", v);
			} else this._midShorthandSetter("border", v, border_local_var_shorthandFor, [
				"top",
				"right",
				"bottom",
				"left"
			]);
		},
		get() {
			let val = this.getPropertyValue("border");
			if (external_dependency_parsers_0.hasVarFunc(val)) return val;
			val = this._shorthandGetter("border", border_local_var_shorthandFor);
			if (external_dependency_parsers_0.hasVarFunc(val)) return "";
			return val;
		},
		enumerable: true,
		configurable: true
	};
	var borderTopWidth_export_parse = function parse(v) {
		const key = external_dependency_parsers_0.parseKeyword(v, [
			"thin",
			"medium",
			"thick"
		]);
		if (key) return key;
		return external_dependency_parsers_0.parseLength(v, true);
	};
	var borderTopWidth_export_isValid = function isValid(v) {
		if (v === "") return true;
		return typeof borderTopWidth_export_parse(v) === "string";
	};
	var borderTopWidth_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			if (external_dependency_parsers_0.hasVarFunc(v)) {
				this._setProperty("border", "");
				this._setProperty("border-top", "");
				this._setProperty("border-width", "");
			}
			this._setProperty("border-top-width", borderTopWidth_export_parse(v));
		},
		get() {
			return this.getPropertyValue("border-top-width");
		},
		enumerable: true,
		configurable: true
	};
	var borderTopStyle_export_parse = function parse(v) {
		return external_dependency_parsers_0.parseKeyword(v, [
			"none",
			"hidden",
			"dotted",
			"dashed",
			"solid",
			"double",
			"groove",
			"ridge",
			"inset",
			"outset"
		]);
	};
	var borderTopStyle_export_isValid = function isValid(v) {
		if (v === "") return true;
		return typeof borderTopStyle_export_parse(v) === "string";
	};
	var borderTopStyle_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			const val = borderTopStyle_export_parse(v);
			if (val === "none" || val === "hidden" || v === "") {
				this._setProperty("border-top-style", "");
				this._setProperty("border-top-color", "");
				this._setProperty("border-top-width", "");
				return;
			}
			if (external_dependency_parsers_0.hasVarFunc(v)) {
				this._setProperty("border", "");
				this._setProperty("border-top", "");
				this._setProperty("border-style", "");
			}
			this._setProperty("border-top-style", val);
		},
		get() {
			return this.getPropertyValue("border-top-style");
		},
		enumerable: true,
		configurable: true
	};
	var borderTopColor_export_parse = function parse(v) {
		const val = external_dependency_parsers_0.parseColor(v);
		if (val) return val;
		return external_dependency_parsers_0.parseKeyword(v);
	};
	var borderTopColor_export_isValid = function isValid(v) {
		if (v === "" || typeof external_dependency_parsers_0.parseKeyword(v) === "string") return true;
		return external_dependency_parsers_0.isValidColor(v);
	};
	var borderTopColor_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			if (external_dependency_parsers_0.hasVarFunc(v)) {
				this._setProperty("border", "");
				this._setProperty("border-top", "");
				this._setProperty("border-color", "");
			}
			this._setProperty("border-top-color", borderTopColor_export_parse(v));
		},
		get() {
			return this.getPropertyValue("border-top-color");
		},
		enumerable: true,
		configurable: true
	};
	var borderBottom_export_definition;
	var borderBottom_local_var_shorthandFor = /* @__PURE__ */ new Map([
		["border-bottom-width", {
			parse: borderTopWidth_export_parse,
			isValid: borderTopWidth_export_isValid,
			definition: borderTopWidth_export_definition
		}],
		["border-bottom-style", {
			parse: borderTopStyle_export_parse,
			isValid: borderTopStyle_export_isValid,
			definition: borderTopStyle_export_definition
		}],
		["border-bottom-color", {
			parse: borderTopColor_export_parse,
			isValid: borderTopColor_export_isValid,
			definition: borderTopColor_export_definition
		}]
	]);
	borderBottom_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			if (external_dependency_parsers_0.hasVarFunc(v)) {
				for (const [key] of borderBottom_local_var_shorthandFor) this._setProperty(key, "");
				this._setProperty("border", "");
				this._setProperty("border-bottom", v);
			} else this._shorthandSetter("border-bottom", v, borderBottom_local_var_shorthandFor);
		},
		get() {
			let val = this.getPropertyValue("border-bottom");
			if (external_dependency_parsers_0.hasVarFunc(val)) return val;
			val = this._shorthandGetter("border-bottom", borderBottom_local_var_shorthandFor);
			if (external_dependency_parsers_0.hasVarFunc(val)) return "";
			return val;
		},
		enumerable: true,
		configurable: true
	};
	var borderBottomColor_export_parse = function parse(v) {
		const val = external_dependency_parsers_0.parseColor(v);
		if (val) return val;
		return external_dependency_parsers_0.parseKeyword(v);
	};
	var borderBottomColor_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			if (external_dependency_parsers_0.hasVarFunc(v)) {
				this._setProperty("border", "");
				this._setProperty("border-bottom", "");
				this._setProperty("border-color", "");
			}
			this._setProperty("border-bottom-color", borderBottomColor_export_parse(v));
		},
		get() {
			return this.getPropertyValue("border-bottom-color");
		},
		enumerable: true,
		configurable: true
	};
	var borderBottomStyle_export_parse = function parse(v) {
		return external_dependency_parsers_0.parseKeyword(v, [
			"none",
			"hidden",
			"dotted",
			"dashed",
			"solid",
			"double",
			"groove",
			"ridge",
			"inset",
			"outset"
		]);
	};
	var borderBottomStyle_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			const val = borderBottomStyle_export_parse(v);
			if (val === "none" || val === "hidden") {
				this._setProperty("border-bottom-style", "");
				this._setProperty("border-bottom-color", "");
				this._setProperty("border-bottom-width", "");
				return;
			}
			if (external_dependency_parsers_0.hasVarFunc(v)) {
				this._setProperty("border", "");
				this._setProperty("border-bottom", "");
				this._setProperty("border-style", "");
			}
			this._setProperty("border-bottom-style", val);
		},
		get() {
			return this.getPropertyValue("border-bottom-style");
		},
		enumerable: true,
		configurable: true
	};
	var borderBottomWidth_export_parse = function parse(v) {
		const key = external_dependency_parsers_0.parseKeyword(v, [
			"thin",
			"medium",
			"thick"
		]);
		if (key) return key;
		return external_dependency_parsers_0.parseLength(v, true);
	};
	var borderBottomWidth_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			if (external_dependency_parsers_0.hasVarFunc(v)) {
				this._setProperty("border", "");
				this._setProperty("border-bottom", "");
				this._setProperty("border-width", "");
			}
			this._setProperty("border-bottom-width", borderBottomWidth_export_parse(v));
		},
		get() {
			return this.getPropertyValue("border-bottom-width");
		},
		enumerable: true,
		configurable: true
	};
	var borderCollapse_export_parse = function parse(v) {
		return external_dependency_parsers_0.parseKeyword(v, ["collapse", "separate"]);
	};
	var borderCollapse_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			this._setProperty("border-collapse", borderCollapse_export_parse(v));
		},
		get() {
			return this.getPropertyValue("border-collapse");
		},
		enumerable: true,
		configurable: true
	};
	var borderLeft_export_definition;
	var borderLeft_local_var_shorthandFor = /* @__PURE__ */ new Map([
		["border-left-width", {
			parse: borderTopWidth_export_parse,
			isValid: borderTopWidth_export_isValid,
			definition: borderTopWidth_export_definition
		}],
		["border-left-style", {
			parse: borderTopStyle_export_parse,
			isValid: borderTopStyle_export_isValid,
			definition: borderTopStyle_export_definition
		}],
		["border-left-color", {
			parse: borderTopColor_export_parse,
			isValid: borderTopColor_export_isValid,
			definition: borderTopColor_export_definition
		}]
	]);
	borderLeft_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			if (external_dependency_parsers_0.hasVarFunc(v)) {
				for (const [key] of borderLeft_local_var_shorthandFor) this._setProperty(key, "");
				this._setProperty("border", "");
				this._setProperty("border-left", v);
			} else this._shorthandSetter("border-left", v, borderLeft_local_var_shorthandFor);
		},
		get() {
			let val = this.getPropertyValue("border-left");
			if (external_dependency_parsers_0.hasVarFunc(val)) return val;
			val = this._shorthandGetter("border-left", borderLeft_local_var_shorthandFor);
			if (external_dependency_parsers_0.hasVarFunc(val)) return "";
			return val;
		},
		enumerable: true,
		configurable: true
	};
	var borderLeftColor_export_parse = function parse(v) {
		const val = external_dependency_parsers_0.parseColor(v);
		if (val) return val;
		return external_dependency_parsers_0.parseKeyword(v);
	};
	var borderLeftColor_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			if (external_dependency_parsers_0.hasVarFunc(v)) {
				this._setProperty("border", "");
				this._setProperty("border-left", "");
				this._setProperty("border-color", "");
			}
			this._setProperty("border-left-color", borderLeftColor_export_parse(v));
		},
		get() {
			return this.getPropertyValue("border-left-color");
		},
		enumerable: true,
		configurable: true
	};
	var borderLeftStyle_export_parse = function parse(v) {
		return external_dependency_parsers_0.parseKeyword(v, [
			"none",
			"hidden",
			"dotted",
			"dashed",
			"solid",
			"double",
			"groove",
			"ridge",
			"inset",
			"outset"
		]);
	};
	var borderLeftStyle_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			const val = borderLeftStyle_export_parse(v);
			if (val === "none" || val === "hidden") {
				this._setProperty("border-left-style", "");
				this._setProperty("border-left-color", "");
				this._setProperty("border-left-width", "");
				return;
			}
			if (external_dependency_parsers_0.hasVarFunc(v)) {
				this._setProperty("border", "");
				this._setProperty("border-left", "");
				this._setProperty("border-style", "");
			}
			this._setProperty("border-left-style", val);
		},
		get() {
			return this.getPropertyValue("border-left-style");
		},
		enumerable: true,
		configurable: true
	};
	var borderLeftWidth_export_parse = function parse(v) {
		const key = external_dependency_parsers_0.parseKeyword(v, [
			"thin",
			"medium",
			"thick"
		]);
		if (key) return key;
		return external_dependency_parsers_0.parseLength(v, true);
	};
	var borderLeftWidth_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			if (external_dependency_parsers_0.hasVarFunc(v)) {
				this._setProperty("border", "");
				this._setProperty("border-left", "");
				this._setProperty("border-width", "");
			}
			this._setProperty("border-left-width", borderLeftWidth_export_parse(v));
		},
		get() {
			return this.getPropertyValue("border-left-width");
		},
		enumerable: true,
		configurable: true
	};
	var borderRight_export_definition;
	var borderRight_local_var_shorthandFor = /* @__PURE__ */ new Map([
		["border-right-width", {
			parse: borderTopWidth_export_parse,
			isValid: borderTopWidth_export_isValid,
			definition: borderTopWidth_export_definition
		}],
		["border-right-style", {
			parse: borderTopStyle_export_parse,
			isValid: borderTopStyle_export_isValid,
			definition: borderTopStyle_export_definition
		}],
		["border-right-color", {
			parse: borderTopColor_export_parse,
			isValid: borderTopColor_export_isValid,
			definition: borderTopColor_export_definition
		}]
	]);
	borderRight_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			if (external_dependency_parsers_0.hasVarFunc(v)) {
				for (const [key] of borderRight_local_var_shorthandFor) this._setProperty(key, "");
				this._setProperty("border", "");
				this._setProperty("border-right", v);
			} else this._shorthandSetter("border-right", v, borderRight_local_var_shorthandFor);
		},
		get() {
			let val = this.getPropertyValue("border-right");
			if (external_dependency_parsers_0.hasVarFunc(val)) return val;
			val = this._shorthandGetter("border-right", borderRight_local_var_shorthandFor);
			if (external_dependency_parsers_0.hasVarFunc(val)) return "";
			return val;
		},
		enumerable: true,
		configurable: true
	};
	var borderRightColor_export_parse = function parse(v) {
		const val = external_dependency_parsers_0.parseColor(v);
		if (val) return val;
		return external_dependency_parsers_0.parseKeyword(v);
	};
	var borderRightColor_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			if (external_dependency_parsers_0.hasVarFunc(v)) {
				this._setProperty("border", "");
				this._setProperty("border-right", "");
				this._setProperty("border-color", "");
			}
			this._setProperty("border-right-color", borderRightColor_export_parse(v));
		},
		get() {
			return this.getPropertyValue("border-right-color");
		},
		enumerable: true,
		configurable: true
	};
	var borderRightStyle_export_parse = function parse(v) {
		return external_dependency_parsers_0.parseKeyword(v, [
			"none",
			"hidden",
			"dotted",
			"dashed",
			"solid",
			"double",
			"groove",
			"ridge",
			"inset",
			"outset"
		]);
	};
	var borderRightStyle_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			const val = borderRightStyle_export_parse(v);
			if (val === "none" || val === "hidden") {
				this._setProperty("border-right-style", "");
				this._setProperty("border-right-color", "");
				this._setProperty("border-right-width", "");
				return;
			}
			if (external_dependency_parsers_0.hasVarFunc(v)) {
				this._setProperty("border", "");
				this._setProperty("border-right", "");
				this._setProperty("border-style", "");
			}
			this._setProperty("border-right-style", val);
		},
		get() {
			return this.getPropertyValue("border-right-style");
		},
		enumerable: true,
		configurable: true
	};
	var borderRightWidth_export_parse = function parse(v) {
		const key = external_dependency_parsers_0.parseKeyword(v, [
			"thin",
			"medium",
			"thick"
		]);
		if (key) return key;
		return external_dependency_parsers_0.parseLength(v, true);
	};
	var borderRightWidth_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			if (external_dependency_parsers_0.hasVarFunc(v)) {
				this._setProperty("border", "");
				this._setProperty("border-right", "");
				this._setProperty("border-width", "");
			}
			this._setProperty("border-right-width", borderRightWidth_export_parse(v));
		},
		get() {
			return this.getPropertyValue("border-right-width");
		},
		enumerable: true,
		configurable: true
	};
	var borderSpacing_export_parse = function parse(v) {
		if (v === "") return v;
		const key = external_dependency_parsers_0.parseKeyword(v);
		if (key) return key;
		const parts = external_dependency_parsers_0.splitValue(v);
		if (!parts.length || parts.length > 2) return;
		const val = [];
		for (const part of parts) {
			const dim = external_dependency_parsers_0.parseLength(part);
			if (!dim) return;
			val.push(dim);
		}
		return val.join(" ");
	};
	var borderSpacing_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			this._setProperty("border-spacing", borderSpacing_export_parse(v));
		},
		get() {
			return this.getPropertyValue("border-spacing");
		},
		enumerable: true,
		configurable: true
	};
	var borderTop_export_definition;
	var borderTop_local_var_shorthandFor = /* @__PURE__ */ new Map([
		["border-top-width", {
			parse: borderTopWidth_export_parse,
			isValid: borderTopWidth_export_isValid,
			definition: borderTopWidth_export_definition
		}],
		["border-top-style", {
			parse: borderTopStyle_export_parse,
			isValid: borderTopStyle_export_isValid,
			definition: borderTopStyle_export_definition
		}],
		["border-top-color", {
			parse: borderTopColor_export_parse,
			isValid: borderTopColor_export_isValid,
			definition: borderTopColor_export_definition
		}]
	]);
	borderTop_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			if (external_dependency_parsers_0.hasVarFunc(v)) {
				for (const [key] of borderTop_local_var_shorthandFor) this._setProperty(key, "");
				this._setProperty("border", "");
				this._setProperty("border-top", v);
			} else this._shorthandSetter("border-top", v, borderTop_local_var_shorthandFor);
		},
		get() {
			let val = this.getPropertyValue("border-top");
			if (external_dependency_parsers_0.hasVarFunc(val)) return val;
			val = this._shorthandGetter("border-top", borderTop_local_var_shorthandFor);
			if (external_dependency_parsers_0.hasVarFunc(val)) return "";
			return val;
		},
		enumerable: true,
		configurable: true
	};
	var bottom_export_parse = function parse(v) {
		const dim = external_dependency_parsers_0.parseMeasurement(v);
		if (dim) return dim;
		return external_dependency_parsers_0.parseKeyword(v, ["auto"]);
	};
	var bottom_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			this._setProperty("bottom", bottom_export_parse(v));
		},
		get() {
			return this.getPropertyValue("bottom");
		},
		enumerable: true,
		configurable: true
	};
	var clear_export_parse = function parse(v) {
		return external_dependency_parsers_0.parseKeyword(v, [
			"inline-start",
			"inline-end",
			"block-start",
			"block-end",
			"left",
			"right",
			"top",
			"bottom",
			"both-inline",
			"both-block",
			"both",
			"none"
		]);
	};
	var clear_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			this._setProperty("clear", clear_export_parse(v));
		},
		get() {
			return this.getPropertyValue("clear");
		},
		enumerable: true,
		configurable: true
	};
	var clip_export_parse = function parse(v) {
		if (v === "") return v;
		const val = external_dependency_parsers_0.parseKeyword(v, ["auto"]);
		if (val) return val;
		v = external_dependency_strings_1.asciiLowercase(v);
		const matches = v.match(/^rect\(\s*(.*)\s*\)$/);
		if (!matches) return;
		const parts = matches[1].split(/\s*,\s*/);
		if (parts.length !== 4) return;
		if (!parts.every(function(part, index) {
			const measurement = external_dependency_parsers_0.parseMeasurement(part.trim());
			parts[index] = measurement;
			return typeof measurement === "string";
		})) return;
		return `rect(${parts.join(", ")})`;
	};
	var clip_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			this._setProperty("clip", clip_export_parse(v));
		},
		get() {
			return this.getPropertyValue("clip");
		},
		enumerable: true,
		configurable: true
	};
	var color_export_parse = function parse(v) {
		const val = external_dependency_parsers_0.parseColor(v);
		if (val) return val;
		return external_dependency_parsers_0.parseKeyword(v);
	};
	var color_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			this._setProperty("color", color_export_parse(v));
		},
		get() {
			return this.getPropertyValue("color");
		},
		enumerable: true,
		configurable: true
	};
	var flexGrow_export_parse = function parse(v) {
		return external_dependency_parsers_0.parseNumber(v, true);
	};
	var flexGrow_export_isValid = function isValid(v) {
		return typeof flexGrow_export_parse(v) === "string";
	};
	var flexGrow_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			if (external_dependency_parsers_0.hasVarFunc(v)) {
				this._setProperty("flex", "");
				this._setProperty("flex-grow", v);
			} else this._setProperty("flex-grow", flexGrow_export_parse(v));
		},
		get() {
			return this.getPropertyValue("flex-grow");
		},
		enumerable: true,
		configurable: true
	};
	var flexShrink_export_parse = function parse(v) {
		return external_dependency_parsers_0.parseNumber(v, true);
	};
	var flexShrink_export_isValid = function isValid(v) {
		return typeof flexShrink_export_parse(v) === "string";
	};
	var flexShrink_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			if (external_dependency_parsers_0.hasVarFunc(v)) {
				this._setProperty("flex", "");
				this._setProperty("flex-shrink", v);
			} else this._setProperty("flex-shrink", flexShrink_export_parse(v));
		},
		get() {
			return this.getPropertyValue("flex-shrink");
		},
		enumerable: true,
		configurable: true
	};
	var flexBasis_export_parse = function parse(v) {
		const val = external_dependency_parsers_0.parseMeasurement(v);
		if (val) return val;
		return external_dependency_parsers_0.parseKeyword(v, [
			"content",
			"auto",
			"min-content",
			"max-content"
		]);
	};
	var flexBasis_export_isValid = function isValid(v) {
		return typeof flexBasis_export_parse(v) === "string";
	};
	var flexBasis_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			if (external_dependency_parsers_0.hasVarFunc(v)) {
				this._setProperty("flex", "");
				this._setProperty("flex-basis", v);
			} else this._setProperty("flex-basis", flexBasis_export_parse(v));
		},
		get() {
			return this.getPropertyValue("flex-basis");
		},
		enumerable: true,
		configurable: true
	};
	var flex_export_parse;
	var flex_export_definition;
	var flex_local_var_shorthandFor = /* @__PURE__ */ new Map([
		["flex-grow", {
			parse: flexGrow_export_parse,
			isValid: flexGrow_export_isValid,
			definition: flexGrow_export_definition
		}],
		["flex-shrink", {
			parse: flexShrink_export_parse,
			isValid: flexShrink_export_isValid,
			definition: flexShrink_export_definition
		}],
		["flex-basis", {
			parse: flexBasis_export_parse,
			isValid: flexBasis_export_isValid,
			definition: flexBasis_export_definition
		}]
	]);
	flex_export_parse = function parse(v) {
		const key = external_dependency_parsers_0.parseKeyword(v, ["auto", "none"]);
		if (key) {
			if (key === "auto") return "1 1 auto";
			if (key === "none") return "0 0 auto";
			if (key === "initial") return "0 1 auto";
			return;
		}
		const obj = external_dependency_parsers_0.parseShorthand(v, flex_local_var_shorthandFor);
		if (obj) {
			const flex = {
				"flex-grow": "1",
				"flex-shrink": "1",
				"flex-basis": "0%"
			};
			const items = Object.entries(obj);
			for (const [property, value] of items) flex[property] = value;
			return [...Object.values(flex)].join(" ");
		}
	};
	flex_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			if (external_dependency_parsers_0.hasVarFunc(v)) {
				this._shorthandSetter("flex", "", flex_local_var_shorthandFor);
				this._setProperty("flex", v);
			} else this._shorthandSetter("flex", flex_export_parse(v), flex_local_var_shorthandFor);
		},
		get() {
			let val = this.getPropertyValue("flex");
			if (external_dependency_parsers_0.hasVarFunc(val)) return val;
			val = this._shorthandGetter("flex", flex_local_var_shorthandFor);
			if (external_dependency_parsers_0.hasVarFunc(val)) return "";
			return val;
		},
		enumerable: true,
		configurable: true
	};
	var float_export_parse = function parse(v) {
		return external_dependency_parsers_0.parseKeyword(v, [
			"left",
			"right",
			"none",
			"inline-start",
			"inline-end"
		]);
	};
	var float_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			this._setProperty("float", float_export_parse(v));
		},
		get() {
			return this.getPropertyValue("float");
		},
		enumerable: true,
		configurable: true
	};
	var floodColor_export_parse = function parse(v) {
		const val = external_dependency_parsers_0.parseColor(v);
		if (val) return val;
		return external_dependency_parsers_0.parseKeyword(v);
	};
	var floodColor_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			this._setProperty("flood-color", floodColor_export_parse(v));
		},
		get() {
			return this.getPropertyValue("flood-color");
		},
		enumerable: true,
		configurable: true
	};
	var fontStyle_export_parse = function parse(v) {
		return external_dependency_parsers_0.parseKeyword(v, [
			"normal",
			"italic",
			"oblique"
		]);
	};
	var fontStyle_export_isValid = function isValid(v) {
		if (v === "") return true;
		return typeof fontStyle_export_parse(v) === "string";
	};
	var fontStyle_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			if (external_dependency_parsers_0.hasVarFunc(v)) {
				this._setProperty("font", "");
				this._setProperty("font-style", v);
			} else this._setProperty("font-style", fontStyle_export_parse(v));
		},
		get() {
			return this.getPropertyValue("font-style");
		},
		enumerable: true,
		configurable: true
	};
	var fontVariant_export_parse = function parse(v) {
		const num = external_dependency_parsers_0.parseNumber(v, true);
		if (num && parseFloat(num) <= 1e3) return num;
		return external_dependency_parsers_0.parseKeyword(v, [
			"normal",
			"none",
			"small-caps"
		]);
	};
	var fontVariant_export_isValid = function isValid(v) {
		if (v === "") return true;
		return typeof fontVariant_export_parse(v) === "string";
	};
	var fontVariant_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			if (external_dependency_parsers_0.hasVarFunc(v)) {
				this._setProperty("font", "");
				this._setProperty("font-valiant", v);
			} else this._setProperty("font-variant", fontVariant_export_parse(v));
		},
		get() {
			return this.getPropertyValue("font-variant");
		},
		enumerable: true,
		configurable: true
	};
	var fontWeight_export_parse = function parse(v) {
		const num = external_dependency_parsers_0.parseNumber(v, true);
		if (num && parseFloat(num) <= 1e3) return num;
		return external_dependency_parsers_0.parseKeyword(v, [
			"normal",
			"bold",
			"lighter",
			"bolder"
		]);
	};
	var fontWeight_export_isValid = function isValid(v) {
		if (v === "") return true;
		return typeof fontWeight_export_parse(v) === "string";
	};
	var fontWeight_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			if (external_dependency_parsers_0.hasVarFunc(v)) {
				this._setProperty("font", "");
				this._setProperty("font-weight", v);
			} else this._setProperty("font-weight", fontWeight_export_parse(v));
		},
		get() {
			return this.getPropertyValue("font-weight");
		},
		enumerable: true,
		configurable: true
	};
	var fontSize_export_parse = function parse(v) {
		const val = external_dependency_parsers_0.parseMeasurement(v, true);
		if (val) return val;
		return external_dependency_parsers_0.parseKeyword(v, [
			"xx-small",
			"x-small",
			"small",
			"medium",
			"large",
			"x-large",
			"xx-large",
			"xxx-large",
			"smaller",
			"larger"
		]);
	};
	var fontSize_export_isValid = function isValid(v) {
		if (v === "") return true;
		return typeof fontSize_export_parse(v) === "string";
	};
	var fontSize_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			if (external_dependency_parsers_0.hasVarFunc(v)) {
				this._setProperty("font", "");
				this._setProperty("font-size", v);
			} else this._setProperty("font-size", fontSize_export_parse(v));
		},
		get() {
			return this.getPropertyValue("font-size");
		},
		enumerable: true,
		configurable: true
	};
	var lineHeight_export_parse = function parse(v) {
		const val = external_dependency_parsers_0.parseKeyword(v, ["normal"]);
		if (val) return val;
		const num = external_dependency_parsers_0.parseNumber(v, true);
		if (num) return num;
		return external_dependency_parsers_0.parseMeasurement(v, true);
	};
	var lineHeight_export_isValid = function isValid(v) {
		if (v === "") return true;
		return typeof lineHeight_export_parse(v) === "string";
	};
	var lineHeight_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			if (external_dependency_parsers_0.hasVarFunc(v)) {
				this._setProperty("font", "");
				this._setProperty("line-height", v);
			} else this._setProperty("line-height", lineHeight_export_parse(v));
		},
		get() {
			return this.getPropertyValue("line-height");
		},
		enumerable: true,
		configurable: true
	};
	var fontFamily_export_parse = function parse(v) {
		if (v === "") return v;
		const keywords = [
			"serif",
			"sans-serif",
			"cursive",
			"fantasy",
			"monospace",
			"system-ui",
			"math",
			"ui-serif",
			"ui-sans-serif",
			"ui-monospace",
			"ui-rounded"
		];
		const genericValues = [
			"fangsong",
			"kai",
			"khmer-mul",
			"nastaliq"
		];
		const val = external_dependency_parsers_0.splitValue(v, { delimiter: "," });
		const font = [];
		let valid = false;
		for (const i of val) {
			const str = external_dependency_parsers_0.parseString(i);
			if (str) {
				font.push(str);
				valid = true;
				continue;
			}
			const key = external_dependency_parsers_0.parseKeyword(i, keywords);
			if (key) {
				font.push(key);
				valid = true;
				continue;
			}
			const obj = external_dependency_parsers_0.parseFunction(i);
			if (obj) {
				const { name, value } = obj;
				if (name === "generic" && genericValues.includes(value)) {
					font.push(`${name}(${value})`);
					valid = true;
					continue;
				}
			}
			if (i !== "undefined" && /^(?:[A-Z][A-Za-z\d-]+(?:\s+[A-Z][A-Za-z\d-]+)*|-?[a-z][a-z-]+)$/.test(i)) {
				font.push(i.trim());
				valid = true;
				continue;
			}
			if (!valid) return;
		}
		return font.join(", ");
	};
	var fontFamily_export_isValid = function isValid(v) {
		if (v === "") return true;
		return typeof fontFamily_export_parse(v) === "string";
	};
	var fontFamily_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			if (external_dependency_parsers_0.hasVarFunc(v)) {
				this._setProperty("font", "");
				this._setProperty("font-family", v);
			} else this._setProperty("font-family", fontFamily_export_parse(v));
		},
		get() {
			return this.getPropertyValue("font-family");
		},
		enumerable: true,
		configurable: true
	};
	var font_export_parse;
	var font_export_definition;
	var font_local_var_shorthandFor = /* @__PURE__ */ new Map([
		["font-style", {
			parse: fontStyle_export_parse,
			isValid: fontStyle_export_isValid,
			definition: fontStyle_export_definition
		}],
		["font-variant", {
			parse: fontVariant_export_parse,
			isValid: fontVariant_export_isValid,
			definition: fontVariant_export_definition
		}],
		["font-weight", {
			parse: fontWeight_export_parse,
			isValid: fontWeight_export_isValid,
			definition: fontWeight_export_definition
		}],
		["font-size", {
			parse: fontSize_export_parse,
			isValid: fontSize_export_isValid,
			definition: fontSize_export_definition
		}],
		["line-height", {
			parse: lineHeight_export_parse,
			isValid: lineHeight_export_isValid,
			definition: lineHeight_export_definition
		}],
		["font-family", {
			parse: fontFamily_export_parse,
			isValid: fontFamily_export_isValid,
			definition: fontFamily_export_definition
		}]
	]);
	font_export_parse = function parse(v) {
		const key = external_dependency_parsers_0.parseKeyword(v, [
			"caption",
			"icon",
			"menu",
			"message-box",
			"small-caption",
			"status-bar"
		]);
		if (key) return key;
		const [fontBlock, ...families] = external_dependency_parsers_0.splitValue(v, { delimiter: "," });
		const [fontBlockA, fontBlockB] = external_dependency_parsers_0.splitValue(fontBlock, { delimiter: "/" });
		const font = {
			"font-style": "normal",
			"font-variant": "normal",
			"font-weight": "normal"
		};
		const fontFamilies = /* @__PURE__ */ new Set();
		if (fontBlockB) {
			const [lineB, ...familiesB] = fontBlockB.trim().split(" ");
			if (!lineB || !{
				parse: lineHeight_export_parse,
				isValid: lineHeight_export_isValid,
				definition: lineHeight_export_definition
			}.isValid(lineB) || !familiesB.length) return;
			const lineHeightB = {
				parse: lineHeight_export_parse,
				isValid: lineHeight_export_isValid,
				definition: lineHeight_export_definition
			}.parse(lineB);
			const familyB = familiesB.join(" ");
			if ({
				parse: fontFamily_export_parse,
				isValid: fontFamily_export_isValid,
				definition: fontFamily_export_definition
			}.isValid(familyB)) fontFamilies.add({
				parse: fontFamily_export_parse,
				isValid: fontFamily_export_isValid,
				definition: fontFamily_export_definition
			}.parse(familyB));
			else return;
			const parts = external_dependency_parsers_0.splitValue(fontBlockA.trim());
			const properties = [
				"font-style",
				"font-variant",
				"font-weight",
				"font-size"
			];
			for (const part of parts) if (part === "normal") continue;
			else for (const property of properties) switch (property) {
				case "font-style":
				case "font-variant":
				case "font-weight":
				case "font-size": {
					const value = font_local_var_shorthandFor.get(property);
					if (value.isValid(part)) font[property] = value.parse(part);
					break;
				}
			}
			if (Object.hasOwn(font, "font-size")) font["line-height"] = lineHeightB;
			else return;
		} else {
			const revParts = [...external_dependency_parsers_0.splitValue(fontBlockA.trim())].reverse();
			const revFontFamily = [];
			const properties = [
				"font-style",
				"font-variant",
				"font-weight",
				"line-height"
			];
			font["font-style"] = "normal";
			font["font-variant"] = "normal";
			font["font-weight"] = "normal";
			font["line-height"] = "normal";
			let fontSizeA;
			for (const part of revParts) if (fontSizeA) if (part === "normal") continue;
			else for (const property of properties) switch (property) {
				case "font-style":
				case "font-variant":
				case "font-weight":
				case "line-height": {
					const value = font_local_var_shorthandFor.get(property);
					if (value.isValid(part)) font[property] = value.parse(part);
					break;
				}
			}
			else if ({
				parse: fontSize_export_parse,
				isValid: fontSize_export_isValid,
				definition: fontSize_export_definition
			}.isValid(part)) fontSizeA = {
				parse: fontSize_export_parse,
				isValid: fontSize_export_isValid,
				definition: fontSize_export_definition
			}.parse(part);
			else if ({
				parse: fontFamily_export_parse,
				isValid: fontFamily_export_isValid,
				definition: fontFamily_export_definition
			}.isValid(part)) revFontFamily.push(part);
			else return;
			const family = revFontFamily.reverse().join(" ");
			if (fontSizeA && {
				parse: fontFamily_export_parse,
				isValid: fontFamily_export_isValid,
				definition: fontFamily_export_definition
			}.isValid(family)) {
				font["font-size"] = fontSizeA;
				fontFamilies.add({
					parse: fontFamily_export_parse,
					isValid: fontFamily_export_isValid,
					definition: fontFamily_export_definition
				}.parse(family));
			} else return;
		}
		for (const family of families) if ({
			parse: fontFamily_export_parse,
			isValid: fontFamily_export_isValid,
			definition: fontFamily_export_definition
		}.isValid(family)) fontFamilies.add({
			parse: fontFamily_export_parse,
			isValid: fontFamily_export_isValid,
			definition: fontFamily_export_definition
		}.parse(family));
		else return;
		font["font-family"] = [...fontFamilies].join(", ");
		return font;
	};
	font_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			if (v === "" || external_dependency_parsers_0.hasVarFunc(v)) {
				for (const [key] of font_local_var_shorthandFor) this._setProperty(key, "");
				this._setProperty("font", v);
			} else {
				const obj = font_export_parse(v);
				if (!obj) return;
				const str = /* @__PURE__ */ new Set();
				for (const [key] of font_local_var_shorthandFor) {
					const val = obj[key];
					if (typeof val === "string") {
						this._setProperty(key, val);
						if (val && val !== "normal" && !str.has(val)) if (key === "line-height") str.add(`/ ${val}`);
						else str.add(val);
					}
				}
				this._setProperty("font", [...str].join(" "));
			}
		},
		get() {
			const val = this.getPropertyValue("font");
			if (external_dependency_parsers_0.hasVarFunc(val)) return val;
			const str = /* @__PURE__ */ new Set();
			for (const [key] of font_local_var_shorthandFor) {
				const v = this.getPropertyValue(key);
				if (external_dependency_parsers_0.hasVarFunc(v)) return "";
				if (v && v !== "normal" && !str.has(v)) if (key === "line-height") str.add(`/ ${v}`);
				else str.add(`${v}`);
			}
			return [...str].join(" ");
		},
		enumerable: true,
		configurable: true
	};
	var height_export_parse = function parse(v) {
		const dim = external_dependency_parsers_0.parseMeasurement(v, true);
		if (dim) return dim;
		return external_dependency_parsers_0.parseKeyword(v, [
			"auto",
			"min-content",
			"max-content",
			"fit-content"
		]);
	};
	var height_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			this._setProperty("height", height_export_parse(v));
		},
		get() {
			return this.getPropertyValue("height");
		},
		enumerable: true,
		configurable: true
	};
	var left_export_parse = function parse(v) {
		const dim = external_dependency_parsers_0.parseMeasurement(v);
		if (dim) return dim;
		return external_dependency_parsers_0.parseKeyword(v, ["auto"]);
	};
	var left_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			this._setProperty("left", left_export_parse(v));
		},
		get() {
			return this.getPropertyValue("left");
		},
		enumerable: true,
		configurable: true
	};
	var lightingColor_export_parse = function parse(v) {
		const val = external_dependency_parsers_0.parseColor(v);
		if (val) return val;
		return external_dependency_parsers_0.parseKeyword(v);
	};
	var lightingColor_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			this._setProperty("lighting-color", lightingColor_export_parse(v));
		},
		get() {
			return this.getPropertyValue("lighting-color");
		},
		enumerable: true,
		configurable: true
	};
	var margin_export_parse;
	var margin_export_isValid;
	var margin_export_definition;
	var margin_local_var_positions = [
		"top",
		"right",
		"bottom",
		"left"
	];
	margin_export_parse = function parse(v) {
		const val = external_dependency_parsers_0.parseMeasurement(v);
		if (val) return val;
		return external_dependency_parsers_0.parseKeyword(v, ["auto"]);
	};
	margin_export_isValid = function isValid(v) {
		if (v === "") return true;
		return typeof margin_export_parse(v) === "string";
	};
	margin_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			if (external_dependency_parsers_0.hasVarFunc(v)) {
				this._implicitSetter("margin", "", "", margin_export_isValid, margin_export_parse, margin_local_var_positions);
				this._setProperty("margin", v);
			} else this._implicitSetter("margin", "", v, margin_export_isValid, margin_export_parse, margin_local_var_positions);
		},
		get() {
			const val = this._implicitGetter("margin", margin_local_var_positions);
			if (val === "") return this.getPropertyValue("margin");
			if (external_dependency_parsers_0.hasVarFunc(val)) return "";
			return val;
		},
		enumerable: true,
		configurable: true
	};
	var marginBottom_export_parse = function parse(v) {
		const val = external_dependency_parsers_0.parseMeasurement(v);
		if (val) return val;
		return external_dependency_parsers_0.parseKeyword(v, ["auto"]);
	};
	var marginBottom_export_isValid = function isValid(v) {
		if (v === "") return true;
		return typeof marginBottom_export_parse(v) === "string";
	};
	var marginBottom_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			if (external_dependency_parsers_0.hasVarFunc(v)) {
				this._setProperty("margin", "");
				this._setProperty("margin-bottom", v);
			} else this._subImplicitSetter("margin", "bottom", v, marginBottom_export_isValid, marginBottom_export_parse, [
				"top",
				"right",
				"bottom",
				"left"
			]);
		},
		get() {
			return this.getPropertyValue("margin-bottom");
		},
		enumerable: true,
		configurable: true
	};
	var marginLeft_export_parse = function parse(v) {
		const val = external_dependency_parsers_0.parseMeasurement(v);
		if (val) return val;
		return external_dependency_parsers_0.parseKeyword(v, ["auto"]);
	};
	var marginLeft_export_isValid = function isValid(v) {
		if (v === "") return true;
		return typeof marginLeft_export_parse(v) === "string";
	};
	var marginLeft_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			if (external_dependency_parsers_0.hasVarFunc(v)) {
				this._setProperty("margin", "");
				this._setProperty("margin-left", v);
			} else this._subImplicitSetter("margin", "left", v, marginLeft_export_isValid, marginLeft_export_parse, [
				"top",
				"right",
				"bottom",
				"left"
			]);
		},
		get() {
			return this.getPropertyValue("margin-left");
		},
		enumerable: true,
		configurable: true
	};
	var marginRight_export_parse = function parse(v) {
		const val = external_dependency_parsers_0.parseMeasurement(v);
		if (val) return val;
		return external_dependency_parsers_0.parseKeyword(v, ["auto"]);
	};
	var marginRight_export_isValid = function isValid(v) {
		if (v === "") return true;
		return typeof marginRight_export_parse(v) === "string";
	};
	var marginRight_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			if (external_dependency_parsers_0.hasVarFunc(v)) {
				this._setProperty("margin", "");
				this._setProperty("margin-right", v);
			} else this._subImplicitSetter("margin", "right", v, marginRight_export_isValid, marginRight_export_parse, [
				"top",
				"right",
				"bottom",
				"left"
			]);
		},
		get() {
			return this.getPropertyValue("margin-right");
		},
		enumerable: true,
		configurable: true
	};
	var marginTop_export_parse = function parse(v) {
		const val = external_dependency_parsers_0.parseMeasurement(v);
		if (val) return val;
		return external_dependency_parsers_0.parseKeyword(v, ["auto"]);
	};
	var marginTop_export_isValid = function isValid(v) {
		if (v === "") return true;
		return typeof marginTop_export_parse(v) === "string";
	};
	var marginTop_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			if (external_dependency_parsers_0.hasVarFunc(v)) {
				this._setProperty("margin", "");
				this._setProperty("margin-top", v);
			} else this._subImplicitSetter("margin", "top", v, marginTop_export_isValid, marginTop_export_parse, [
				"top",
				"right",
				"bottom",
				"left"
			]);
		},
		get() {
			return this.getPropertyValue("margin-top");
		},
		enumerable: true,
		configurable: true
	};
	var opacity_export_parse = function parse(v) {
		let num = external_dependency_parsers_0.parseNumber(v);
		if (num) {
			num = parseFloat(num);
			if (num < 0) return "0";
			else if (num > 1) return "1";
			return `${num}`;
		}
		let pct = external_dependency_parsers_0.parsePercent(v);
		if (pct) {
			pct = parseFloat(pct);
			if (pct < 0) return "0%";
			else if (pct > 100) return "100%";
			return `${pct}%`;
		}
		return external_dependency_parsers_0.parseKeyword(v);
	};
	var opacity_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			this._setProperty("opacity", opacity_export_parse(v));
		},
		get() {
			return this.getPropertyValue("opacity");
		},
		enumerable: true,
		configurable: true
	};
	var outlineColor_export_parse = function parse(v) {
		const val = external_dependency_parsers_0.parseColor(v);
		if (val) return val;
		return external_dependency_parsers_0.parseKeyword(v);
	};
	var outlineColor_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			this._setProperty("outline-color", outlineColor_export_parse(v));
		},
		get() {
			return this.getPropertyValue("outline-color");
		},
		enumerable: true,
		configurable: true
	};
	var padding_export_parse;
	var padding_export_isValid;
	var padding_export_definition;
	var padding_local_var_positions = [
		"top",
		"right",
		"bottom",
		"left"
	];
	padding_export_parse = function parse(v) {
		const val = external_dependency_parsers_0.parseMeasurement(v, true);
		if (val) return val;
		return external_dependency_parsers_0.parseKeyword(v);
	};
	padding_export_isValid = function isValid(v) {
		if (v === "") return true;
		return typeof padding_export_parse(v) === "string";
	};
	padding_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			if (external_dependency_parsers_0.hasVarFunc(v)) {
				this._implicitSetter("padding", "", "", padding_export_isValid, padding_export_parse, padding_local_var_positions);
				this._setProperty("padding", v);
			} else this._implicitSetter("padding", "", v, padding_export_isValid, padding_export_parse, padding_local_var_positions);
		},
		get() {
			const val = this._implicitGetter("padding", padding_local_var_positions);
			if (val === "") return this.getPropertyValue("padding");
			if (external_dependency_parsers_0.hasVarFunc(val)) return "";
			return val;
		},
		enumerable: true,
		configurable: true
	};
	var paddingBottom_export_parse = function parse(v) {
		const val = external_dependency_parsers_0.parseMeasurement(v, true);
		if (val) return val;
		return external_dependency_parsers_0.parseKeyword(v);
	};
	var paddingBottom_export_isValid = function isValid(v) {
		if (v === "") return true;
		return typeof paddingBottom_export_parse(v) === "string";
	};
	var paddingBottom_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			if (external_dependency_parsers_0.hasVarFunc(v)) {
				this._setProperty("padding", "");
				this._setProperty("padding-bottom", v);
			} else this._subImplicitSetter("padding", "bottom", v, paddingBottom_export_isValid, paddingBottom_export_parse, [
				"top",
				"right",
				"bottom",
				"left"
			]);
		},
		get() {
			return this.getPropertyValue("padding-bottom");
		},
		enumerable: true,
		configurable: true
	};
	var paddingLeft_export_parse = function parse(v) {
		const val = external_dependency_parsers_0.parseMeasurement(v, true);
		if (val) return val;
		return external_dependency_parsers_0.parseKeyword(v);
	};
	var paddingLeft_export_isValid = function isValid(v) {
		if (v === "") return true;
		return typeof paddingLeft_export_parse(v) === "string";
	};
	var paddingLeft_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			if (external_dependency_parsers_0.hasVarFunc(v)) {
				this._setProperty("padding", "");
				this._setProperty("padding-left", v);
			} else this._subImplicitSetter("padding", "left", v, paddingLeft_export_isValid, paddingLeft_export_parse, [
				"top",
				"right",
				"bottom",
				"left"
			]);
		},
		get() {
			return this.getPropertyValue("padding-left");
		},
		enumerable: true,
		configurable: true
	};
	var paddingRight_export_parse = function parse(v) {
		const val = external_dependency_parsers_0.parseMeasurement(v, true);
		if (val) return val;
		return external_dependency_parsers_0.parseKeyword(v);
	};
	var paddingRight_export_isValid = function isValid(v) {
		if (v === "") return true;
		return typeof paddingRight_export_parse(v) === "string";
	};
	var paddingRight_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			if (external_dependency_parsers_0.hasVarFunc(v)) {
				this._setProperty("padding", "");
				this._setProperty("padding-right", v);
			} else this._subImplicitSetter("padding", "right", v, paddingRight_export_isValid, paddingRight_export_parse, [
				"top",
				"right",
				"bottom",
				"left"
			]);
		},
		get() {
			return this.getPropertyValue("padding-right");
		},
		enumerable: true,
		configurable: true
	};
	var paddingTop_export_parse = function parse(v) {
		const val = external_dependency_parsers_0.parseMeasurement(v, true);
		if (val) return val;
		return external_dependency_parsers_0.parseKeyword(v);
	};
	var paddingTop_export_isValid = function isValid(v) {
		if (v === "") return true;
		return typeof paddingTop_export_parse(v) === "string";
	};
	var paddingTop_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			if (external_dependency_parsers_0.hasVarFunc(v)) {
				this._setProperty("padding", "");
				this._setProperty("padding-top", v);
			} else this._subImplicitSetter("padding", "top", v, paddingTop_export_isValid, paddingTop_export_parse, [
				"top",
				"right",
				"bottom",
				"left"
			]);
		},
		get() {
			return this.getPropertyValue("padding-top");
		},
		enumerable: true,
		configurable: true
	};
	var right_export_parse = function parse(v) {
		const dim = external_dependency_parsers_0.parseMeasurement(v);
		if (dim) return dim;
		return external_dependency_parsers_0.parseKeyword(v, ["auto"]);
	};
	var right_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			this._setProperty("right", right_export_parse(v));
		},
		get() {
			return this.getPropertyValue("right");
		},
		enumerable: true,
		configurable: true
	};
	var stopColor_export_parse = function parse(v) {
		const val = external_dependency_parsers_0.parseColor(v);
		if (val) return val;
		return external_dependency_parsers_0.parseKeyword(v);
	};
	var stopColor_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			this._setProperty("stop-color", stopColor_export_parse(v));
		},
		get() {
			return this.getPropertyValue("stop-color");
		},
		enumerable: true,
		configurable: true
	};
	var top_export_parse = function parse(v) {
		const dim = external_dependency_parsers_0.parseMeasurement(v);
		if (dim) return dim;
		return external_dependency_parsers_0.parseKeyword(v, ["auto"]);
	};
	var top_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			this._setProperty("top", top_export_parse(v));
		},
		get() {
			return this.getPropertyValue("top");
		},
		enumerable: true,
		configurable: true
	};
	var webkitBorderAfterColor_export_parse = function parse(v) {
		const val = external_dependency_parsers_0.parseColor(v);
		if (val) return val;
		return external_dependency_parsers_0.parseKeyword(v);
	};
	var webkitBorderAfterColor_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			this._setProperty("-webkit-border-after-color", webkitBorderAfterColor_export_parse(v));
		},
		get() {
			return this.getPropertyValue("-webkit-border-after-color");
		},
		enumerable: true,
		configurable: true
	};
	var webkitBorderBeforeColor_export_parse = function parse(v) {
		const val = external_dependency_parsers_0.parseColor(v);
		if (val) return val;
		return external_dependency_parsers_0.parseKeyword(v);
	};
	var webkitBorderBeforeColor_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			this._setProperty("-webkit-border-before-color", webkitBorderBeforeColor_export_parse(v));
		},
		get() {
			return this.getPropertyValue("-webkit-border-before-color");
		},
		enumerable: true,
		configurable: true
	};
	var webkitBorderEndColor_export_parse = function parse(v) {
		const val = external_dependency_parsers_0.parseColor(v);
		if (val) return val;
		return external_dependency_parsers_0.parseKeyword(v);
	};
	var webkitBorderEndColor_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			this._setProperty("-webkit-border-end-color", webkitBorderEndColor_export_parse(v));
		},
		get() {
			return this.getPropertyValue("-webkit-border-end-color");
		},
		enumerable: true,
		configurable: true
	};
	var webkitBorderStartColor_export_parse = function parse(v) {
		const val = external_dependency_parsers_0.parseColor(v);
		if (val) return val;
		return external_dependency_parsers_0.parseKeyword(v);
	};
	var webkitBorderStartColor_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			this._setProperty("-webkit-border-start-color", webkitBorderStartColor_export_parse(v));
		},
		get() {
			return this.getPropertyValue("-webkit-border-start-color");
		},
		enumerable: true,
		configurable: true
	};
	var webkitColumnRuleColor_export_parse = function parse(v) {
		const val = external_dependency_parsers_0.parseColor(v);
		if (val) return val;
		return external_dependency_parsers_0.parseKeyword(v);
	};
	var webkitColumnRuleColor_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			this._setProperty("-webkit-column-rule-color", webkitColumnRuleColor_export_parse(v));
		},
		get() {
			return this.getPropertyValue("-webkit-column-rule-color");
		},
		enumerable: true,
		configurable: true
	};
	var webkitTapHighlightColor_export_parse = function parse(v) {
		const val = external_dependency_parsers_0.parseColor(v);
		if (val) return val;
		return external_dependency_parsers_0.parseKeyword(v);
	};
	var webkitTapHighlightColor_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			this._setProperty("-webkit-tap-highlight-color", webkitTapHighlightColor_export_parse(v));
		},
		get() {
			return this.getPropertyValue("-webkit-tap-highlight-color");
		},
		enumerable: true,
		configurable: true
	};
	var webkitTextEmphasisColor_export_parse = function parse(v) {
		const val = external_dependency_parsers_0.parseColor(v);
		if (val) return val;
		return external_dependency_parsers_0.parseKeyword(v);
	};
	var webkitTextEmphasisColor_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			this._setProperty("-webkit-text-emphasis-color", webkitTextEmphasisColor_export_parse(v));
		},
		get() {
			return this.getPropertyValue("-webkit-text-emphasis-color");
		},
		enumerable: true,
		configurable: true
	};
	var webkitTextFillColor_export_parse = function parse(v) {
		const val = external_dependency_parsers_0.parseColor(v);
		if (val) return val;
		return external_dependency_parsers_0.parseKeyword(v);
	};
	var webkitTextFillColor_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			this._setProperty("-webkit-text-fill-color", webkitTextFillColor_export_parse(v));
		},
		get() {
			return this.getPropertyValue("-webkit-text-fill-color");
		},
		enumerable: true,
		configurable: true
	};
	var webkitTextStrokeColor_export_parse = function parse(v) {
		const val = external_dependency_parsers_0.parseColor(v);
		if (val) return val;
		return external_dependency_parsers_0.parseKeyword(v);
	};
	var webkitTextStrokeColor_export_definition = {
		set(v) {
			v = external_dependency_parsers_0.prepareValue(v, this._global);
			this._setProperty("-webkit-text-stroke-color", webkitTextStrokeColor_export_parse(v));
		},
		get() {
			return this.getPropertyValue("-webkit-text-stroke-color");
		},
		enumerable: true,
		configurable: true
	};
	var width_export_parse = function parse(v) {
		const dim = external_dependency_parsers_0.parseMeasurement(v, true);
		if (dim) return dim;
		return external_dependency_parsers_0.parseKeyword(v, [
			"auto",
			"min-content",
			"max-content",
			"fit-content"
		]);
	};
	module.exports = {
		backgroundImage: backgroundImage_export_definition,
		"background-image": backgroundImage_export_definition,
		backgroundPosition: backgroundPosition_export_definition,
		"background-position": backgroundPosition_export_definition,
		backgroundRepeat: backgroundRepeat_export_definition,
		"background-repeat": backgroundRepeat_export_definition,
		backgroundAttachment: backgroundAttachment_export_definition,
		"background-attachment": backgroundAttachment_export_definition,
		backgroundColor: backgroundColor_export_definition,
		"background-color": backgroundColor_export_definition,
		background: background_export_definition,
		borderWidth: borderWidth_export_definition,
		"border-width": borderWidth_export_definition,
		borderStyle: borderStyle_export_definition,
		"border-style": borderStyle_export_definition,
		borderColor: borderColor_export_definition,
		"border-color": borderColor_export_definition,
		border: border_export_definition,
		borderTopWidth: borderTopWidth_export_definition,
		"border-top-width": borderTopWidth_export_definition,
		borderTopStyle: borderTopStyle_export_definition,
		"border-top-style": borderTopStyle_export_definition,
		borderTopColor: borderTopColor_export_definition,
		"border-top-color": borderTopColor_export_definition,
		borderBottom: borderBottom_export_definition,
		"border-bottom": borderBottom_export_definition,
		borderBottomColor: borderBottomColor_export_definition,
		"border-bottom-color": borderBottomColor_export_definition,
		borderBottomStyle: borderBottomStyle_export_definition,
		"border-bottom-style": borderBottomStyle_export_definition,
		borderBottomWidth: borderBottomWidth_export_definition,
		"border-bottom-width": borderBottomWidth_export_definition,
		borderCollapse: borderCollapse_export_definition,
		"border-collapse": borderCollapse_export_definition,
		borderLeft: borderLeft_export_definition,
		"border-left": borderLeft_export_definition,
		borderLeftColor: borderLeftColor_export_definition,
		"border-left-color": borderLeftColor_export_definition,
		borderLeftStyle: borderLeftStyle_export_definition,
		"border-left-style": borderLeftStyle_export_definition,
		borderLeftWidth: borderLeftWidth_export_definition,
		"border-left-width": borderLeftWidth_export_definition,
		borderRight: borderRight_export_definition,
		"border-right": borderRight_export_definition,
		borderRightColor: borderRightColor_export_definition,
		"border-right-color": borderRightColor_export_definition,
		borderRightStyle: borderRightStyle_export_definition,
		"border-right-style": borderRightStyle_export_definition,
		borderRightWidth: borderRightWidth_export_definition,
		"border-right-width": borderRightWidth_export_definition,
		borderSpacing: borderSpacing_export_definition,
		"border-spacing": borderSpacing_export_definition,
		borderTop: borderTop_export_definition,
		"border-top": borderTop_export_definition,
		bottom: bottom_export_definition,
		clear: clear_export_definition,
		clip: clip_export_definition,
		color: color_export_definition,
		flexGrow: flexGrow_export_definition,
		"flex-grow": flexGrow_export_definition,
		flexShrink: flexShrink_export_definition,
		"flex-shrink": flexShrink_export_definition,
		flexBasis: flexBasis_export_definition,
		"flex-basis": flexBasis_export_definition,
		flex: flex_export_definition,
		float: float_export_definition,
		floodColor: floodColor_export_definition,
		"flood-color": floodColor_export_definition,
		fontStyle: fontStyle_export_definition,
		"font-style": fontStyle_export_definition,
		fontVariant: fontVariant_export_definition,
		"font-variant": fontVariant_export_definition,
		fontWeight: fontWeight_export_definition,
		"font-weight": fontWeight_export_definition,
		fontSize: fontSize_export_definition,
		"font-size": fontSize_export_definition,
		lineHeight: lineHeight_export_definition,
		"line-height": lineHeight_export_definition,
		fontFamily: fontFamily_export_definition,
		"font-family": fontFamily_export_definition,
		font: font_export_definition,
		height: height_export_definition,
		left: left_export_definition,
		lightingColor: lightingColor_export_definition,
		"lighting-color": lightingColor_export_definition,
		margin: margin_export_definition,
		marginBottom: marginBottom_export_definition,
		"margin-bottom": marginBottom_export_definition,
		marginLeft: marginLeft_export_definition,
		"margin-left": marginLeft_export_definition,
		marginRight: marginRight_export_definition,
		"margin-right": marginRight_export_definition,
		marginTop: marginTop_export_definition,
		"margin-top": marginTop_export_definition,
		opacity: opacity_export_definition,
		outlineColor: outlineColor_export_definition,
		"outline-color": outlineColor_export_definition,
		padding: padding_export_definition,
		paddingBottom: paddingBottom_export_definition,
		"padding-bottom": paddingBottom_export_definition,
		paddingLeft: paddingLeft_export_definition,
		"padding-left": paddingLeft_export_definition,
		paddingRight: paddingRight_export_definition,
		"padding-right": paddingRight_export_definition,
		paddingTop: paddingTop_export_definition,
		"padding-top": paddingTop_export_definition,
		right: right_export_definition,
		stopColor: stopColor_export_definition,
		"stop-color": stopColor_export_definition,
		top: top_export_definition,
		webkitBorderAfterColor: webkitBorderAfterColor_export_definition,
		"-webkit-border-after-color": webkitBorderAfterColor_export_definition,
		"WebkitBorderAfterColor": webkitBorderAfterColor_export_definition,
		webkitBorderBeforeColor: webkitBorderBeforeColor_export_definition,
		"-webkit-border-before-color": webkitBorderBeforeColor_export_definition,
		"WebkitBorderBeforeColor": webkitBorderBeforeColor_export_definition,
		webkitBorderEndColor: webkitBorderEndColor_export_definition,
		"-webkit-border-end-color": webkitBorderEndColor_export_definition,
		"WebkitBorderEndColor": webkitBorderEndColor_export_definition,
		webkitBorderStartColor: webkitBorderStartColor_export_definition,
		"-webkit-border-start-color": webkitBorderStartColor_export_definition,
		"WebkitBorderStartColor": webkitBorderStartColor_export_definition,
		webkitColumnRuleColor: webkitColumnRuleColor_export_definition,
		"-webkit-column-rule-color": webkitColumnRuleColor_export_definition,
		"WebkitColumnRuleColor": webkitColumnRuleColor_export_definition,
		webkitTapHighlightColor: webkitTapHighlightColor_export_definition,
		"-webkit-tap-highlight-color": webkitTapHighlightColor_export_definition,
		"WebkitTapHighlightColor": webkitTapHighlightColor_export_definition,
		webkitTextEmphasisColor: webkitTextEmphasisColor_export_definition,
		"-webkit-text-emphasis-color": webkitTextEmphasisColor_export_definition,
		"WebkitTextEmphasisColor": webkitTextEmphasisColor_export_definition,
		webkitTextFillColor: webkitTextFillColor_export_definition,
		"-webkit-text-fill-color": webkitTextFillColor_export_definition,
		"WebkitTextFillColor": webkitTextFillColor_export_definition,
		webkitTextStrokeColor: webkitTextStrokeColor_export_definition,
		"-webkit-text-stroke-color": webkitTextStrokeColor_export_definition,
		"WebkitTextStrokeColor": webkitTextStrokeColor_export_definition,
		width: {
			set(v) {
				v = external_dependency_parsers_0.prepareValue(v, this._global);
				this._setProperty("width", width_export_parse(v));
			},
			get() {
				return this.getPropertyValue("width");
			},
			enumerable: true,
			configurable: true
		}
	};
}));
//#endregion
//#region node_modules/isomorphic-dompurify/node_modules/cssstyle/lib/utils/camelize.js
var require_camelize = /* @__PURE__ */ __commonJSMin(((exports) => {
	var { asciiLowercase } = require_strings();
	exports.dashedToCamelCase = function(dashed) {
		if (dashed.startsWith("--")) return dashed;
		let camel = "";
		let nextCap = false;
		let i = /^-webkit-/.test(dashed) ? 1 : 0;
		for (; i < dashed.length; i++) if (dashed[i] !== "-") {
			camel += nextCap ? dashed[i].toUpperCase() : dashed[i];
			nextCap = false;
		} else nextCap = true;
		return camel;
	};
	exports.camelCaseToDashed = function(camelCase) {
		if (camelCase.startsWith("--")) return camelCase;
		const dashed = asciiLowercase(camelCase.replace(/(?<=[a-z])[A-Z]/g, "-$&"));
		if (/^webkit-/.test(dashed)) return `-${dashed}`;
		return dashed;
	};
}));
//#endregion
//#region node_modules/isomorphic-dompurify/node_modules/cssstyle/lib/utils/propertyDescriptors.js
var require_propertyDescriptors = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var prepareValue = require_parsers().prepareValue;
	module.exports.getPropertyDescriptor = function getPropertyDescriptor(property) {
		return {
			set(v) {
				this._setProperty(property, prepareValue(v));
			},
			get() {
				return this.getPropertyValue(property);
			},
			enumerable: true,
			configurable: true
		};
	};
}));
//#endregion
//#region node_modules/isomorphic-dompurify/node_modules/cssstyle/lib/CSSStyleDeclaration.js
/**
* This is a fork from the CSS Style Declaration part of
* https://github.com/NV/CSSOM
*/
var require_CSSStyleDeclaration = /* @__PURE__ */ __commonJSMin(((exports) => {
	var CSSOM = require_lib();
	var allExtraProperties = require_allExtraProperties();
	var allProperties = require_allProperties();
	var implementedProperties = require_implementedProperties();
	var generatedProperties = require_properties();
	var { hasVarFunc, parseKeyword, parseShorthand, prepareValue, splitValue } = require_parsers();
	var { dashedToCamelCase } = require_camelize();
	var { getPropertyDescriptor } = require_propertyDescriptors();
	var { asciiLowercase } = require_strings();
	/**
	* @see https://drafts.csswg.org/cssom/#the-cssstyledeclaration-interface
	*/
	var CSSStyleDeclaration = class {
		/**
		* @param {Function} onChangeCallback
		* @param {object} [opt]
		* @param {object} [opt.context] - Window, Element or CSSRule.
		*/
		constructor(onChangeCallback, opt = {}) {
			Object.defineProperties(this, {
				constructor: {
					enumerable: false,
					writable: true
				},
				_global: {
					value: globalThis,
					enumerable: false,
					writable: true
				},
				_ownerNode: {
					value: null,
					enumerable: false,
					writable: true
				},
				_parentNode: {
					value: null,
					enumerable: false,
					writable: true
				},
				_onChange: {
					value: null,
					enumerable: false,
					writable: true
				},
				_values: {
					value: /* @__PURE__ */ new Map(),
					enumerable: false,
					writable: true
				},
				_priorities: {
					value: /* @__PURE__ */ new Map(),
					enumerable: false,
					writable: true
				},
				_length: {
					value: 0,
					enumerable: false,
					writable: true
				},
				_computed: {
					value: false,
					enumerable: false,
					writable: true
				},
				_readonly: {
					value: false,
					enumerable: false,
					writable: true
				},
				_setInProgress: {
					value: false,
					enumerable: false,
					writable: true
				}
			});
			const { context } = opt;
			if (context) {
				if (typeof context.getComputedStyle === "function") {
					this._global = context;
					this._computed = true;
					this._readonly = true;
				} else if (context.nodeType === 1 && Object.hasOwn(context, "style")) {
					this._global = context.ownerDocument.defaultView;
					this._ownerNode = context;
				} else if (Object.hasOwn(context, "parentRule")) {
					this._parentRule = context;
					const window = context?.parentStyleSheet?.ownerNode?.ownerDocument?.defaultView;
					if (window) this._global = window;
				}
			}
			if (typeof onChangeCallback === "function") this._onChange = onChangeCallback;
		}
		get cssText() {
			if (this._computed) return "";
			const properties = [];
			for (let i = 0; i < this._length; i++) {
				const property = this[i];
				const value = this.getPropertyValue(property);
				const priority = this.getPropertyPriority(property);
				if (priority === "important") properties.push(`${property}: ${value} !${priority};`);
				else properties.push(`${property}: ${value};`);
			}
			return properties.join(" ");
		}
		set cssText(value) {
			if (this._readonly) throw new this._global.DOMException("cssText can not be modified.", "NoModificationAllowedError");
			Array.prototype.splice.call(this, 0, this._length);
			this._values.clear();
			this._priorities.clear();
			if (this._parentRule || this._ownerNode && this._setInProgress) return;
			this._setInProgress = true;
			let dummyRule;
			try {
				dummyRule = CSSOM.parse(`#bogus{${value}}`).cssRules[0].style;
			} catch {
				return;
			}
			for (let i = 0; i < dummyRule.length; i++) {
				const property = dummyRule[i];
				this.setProperty(property, dummyRule.getPropertyValue(property), dummyRule.getPropertyPriority(property));
			}
			this._setInProgress = false;
			if (typeof this._onChange === "function") this._onChange(this.cssText);
		}
		get length() {
			return this._length;
		}
		set length(len) {
			for (let i = len; i < this._length; i++) delete this[i];
			this._length = len;
		}
		get parentRule() {
			return this._parentRule;
		}
		get cssFloat() {
			return this.getPropertyValue("float");
		}
		set cssFloat(value) {
			this._setProperty("float", value);
		}
		/**
		* @param {string} property
		*/
		getPropertyPriority(property) {
			return this._priorities.get(property) || "";
		}
		/**
		* @param {string} property
		*/
		getPropertyValue(property) {
			if (this._values.has(property)) return this._values.get(property).toString();
			return "";
		}
		/**
		* @param {...number} args
		*/
		item(...args) {
			if (!args.length) throw new this._global.TypeError("1 argument required, but only 0 present.");
			let [index] = args;
			index = parseInt(index);
			if (Number.isNaN(index) || index < 0 || index >= this._length) return "";
			return this[index];
		}
		/**
		* @param {string} property
		*/
		removeProperty(property) {
			if (this._readonly) {
				const msg = `Property ${property} can not be modified.`;
				throw new this._global.DOMException(msg, "NoModificationAllowedError");
			}
			if (!this._values.has(property)) return "";
			const prevValue = this._values.get(property);
			this._values.delete(property);
			this._priorities.delete(property);
			const index = Array.prototype.indexOf.call(this, property);
			if (index >= 0) {
				Array.prototype.splice.call(this, index, 1);
				if (typeof this._onChange === "function") this._onChange(this.cssText);
			}
			return prevValue;
		}
		/**
		* @param {string} property
		* @param {string} value
		* @param {string?} [priority] - "important" or null
		*/
		setProperty(property, value, priority = null) {
			if (this._readonly) {
				const msg = `Property ${property} can not be modified.`;
				throw new this._global.DOMException(msg, "NoModificationAllowedError");
			}
			value = prepareValue(value, this._global);
			if (value === "") {
				this[property] = "";
				this.removeProperty(property);
				return;
			}
			if (property.startsWith("--")) {
				this._setProperty(property, value);
				return;
			}
			property = asciiLowercase(property);
			if (!allProperties.has(property) && !allExtraProperties.has(property)) return;
			this[property] = value;
			if (priority) this._priorities.set(property, priority);
			else this._priorities.delete(property);
		}
	};
	Object.defineProperties(CSSStyleDeclaration.prototype, {
		_shorthandGetter: {
			/**
			* @param {string} property
			* @param {object} shorthandFor
			*/
			value(property, shorthandFor) {
				const parts = [];
				for (const key of shorthandFor.keys()) {
					const val = this.getPropertyValue(key);
					if (hasVarFunc(val)) return "";
					if (val !== "") parts.push(val);
				}
				if (parts.length) return parts.join(" ");
				if (this._values.has(property)) return this.getPropertyValue(property);
				return "";
			},
			enumerable: false
		},
		_implicitGetter: {
			/**
			* @param {string} property
			* @param {Array.<string>} positions
			*/
			value(property, positions = []) {
				const parts = [];
				for (const position of positions) {
					const val = this.getPropertyValue(`${property}-${position}`);
					if (val === "" || hasVarFunc(val)) return "";
					parts.push(val);
				}
				if (!parts.length) return "";
				switch (positions.length) {
					case 4: {
						const [top, right, bottom, left] = parts;
						if (top === right && top === bottom && right === left) return top;
						if (top !== right && top === bottom && right === left) return `${top} ${right}`;
						if (top !== right && top !== bottom && right === left) return `${top} ${right} ${bottom}`;
						return `${top} ${right} ${bottom} ${left}`;
					}
					case 2: {
						const [x, y] = parts;
						if (x === y) return x;
						return `${x} ${y}`;
					}
					default: return "";
				}
			},
			enumerable: false
		},
		_setProperty: {
			/**
			* @param {string} property
			* @param {string} val
			* @param {string?} [priority]
			*/
			value(property, val, priority = null) {
				if (typeof val !== "string") return;
				if (val === "") {
					this.removeProperty(property);
					return;
				}
				let originalText = "";
				if (typeof this._onChange === "function") originalText = this.cssText;
				if (this._values.has(property)) {
					if (Array.prototype.indexOf.call(this, property) < 0) {
						this[this._length] = property;
						this._length++;
					}
				} else {
					this[this._length] = property;
					this._length++;
				}
				this._values.set(property, val);
				if (priority) this._priorities.set(property, priority);
				else this._priorities.delete(property);
				if (typeof this._onChange === "function" && this.cssText !== originalText && !this._setInProgress) this._onChange(this.cssText);
			},
			enumerable: false
		},
		_shorthandSetter: {
			/**
			* @param {string} property
			* @param {string} val
			* @param {object} shorthandFor
			*/
			value(property, val, shorthandFor) {
				val = prepareValue(val, this._global);
				const obj = parseShorthand(val, shorthandFor);
				if (!obj) return;
				for (const subprop of Object.keys(obj)) {
					const camel = dashedToCamelCase(subprop);
					this[camel] = obj[subprop];
					obj[subprop] = this[camel];
					this.removeProperty(subprop);
					if (obj[subprop] !== "") this._values.set(subprop, obj[subprop]);
				}
				for (const [subprop] of shorthandFor) if (!Object.hasOwn(obj, subprop)) {
					this.removeProperty(subprop);
					this._values.delete(subprop);
				}
				this.removeProperty(property);
				const calculated = this._shorthandGetter(property, shorthandFor);
				if (calculated !== "") this._setProperty(property, calculated);
				return obj;
			},
			enumerable: false
		},
		_midShorthandSetter: {
			/**
			* @param {string} property
			* @param {string} val
			* @param {object} shorthandFor
			* @param {Array.<string>} positions
			*/
			value(property, val, shorthandFor, positions = []) {
				val = prepareValue(val, this._global);
				if (!this._shorthandSetter(property, val, shorthandFor)) return;
				for (const position of positions) {
					this.removeProperty(`${property}-${position}`);
					this._values.set(`${property}-${position}`, val);
				}
			},
			enumerable: false
		},
		_implicitSetter: {
			/**
			* @param {string} prefix
			* @param {string} part
			* @param {string} val
			* @param {Function} isValid
			* @param {Function} parser
			* @param {Array.<string>} positions
			*/
			value(prefix, part, val, isValid, parser, positions = []) {
				val = prepareValue(val, this._global);
				if (typeof val !== "string") return;
				part ||= "";
				if (part) part = `-${part}`;
				let parts = [];
				if (val === "") parts.push(val);
				else {
					const key = parseKeyword(val);
					if (key) parts.push(key);
					else parts.push(...splitValue(val));
				}
				if (!parts.length || parts.length > positions.length || !parts.every(isValid)) return;
				parts = parts.map((p) => parser(p));
				this._setProperty(`${prefix}${part}`, parts.join(" "));
				switch (positions.length) {
					case 4:
						if (parts.length === 1) parts.push(parts[0], parts[0], parts[0]);
						else if (parts.length === 2) parts.push(parts[0], parts[1]);
						else if (parts.length === 3) parts.push(parts[1]);
						break;
					case 2: if (parts.length === 1) parts.push(parts[0]);
				}
				for (let i = 0; i < positions.length; i++) {
					const property = `${prefix}-${positions[i]}${part}`;
					this.removeProperty(property);
					this._values.set(property, parts[i]);
				}
			},
			enumerable: false
		},
		_subImplicitSetter: {
			/**
			* @param {string} prefix
			* @param {string} part
			* @param {string} val
			* @param {Function} isValid
			* @param {Function} parser
			* @param {Array.<string>} positions
			*/
			value(prefix, part, val, isValid, parser, positions = []) {
				val = prepareValue(val, this._global);
				if (typeof val !== "string" || !isValid(val)) return;
				val = parser(val);
				const property = `${prefix}-${part}`;
				this._setProperty(property, val);
				const combinedPriority = this.getPropertyPriority(prefix);
				const subparts = [];
				for (const position of positions) subparts.push(`${prefix}-${position}`);
				const parts = subparts.map((subpart) => this._values.get(subpart));
				const priorities = subparts.map((subpart) => this.getPropertyPriority(subpart));
				const [priority] = priorities;
				if (priority === combinedPriority && parts.every((p) => p) && priorities.every((p) => p === priority)) {
					for (let i = 0; i < subparts.length; i++) {
						this.removeProperty(subparts[i]);
						this._values.set(subparts[i], parts[i]);
					}
					this._setProperty(prefix, parts.join(" "), priority);
				} else {
					this.removeProperty(prefix);
					for (let i = 0; i < subparts.length; i++) {
						const subPriority = subparts[i] === property ? "" : priorities[i] || combinedPriority;
						this._setProperty(subparts[i], parts[i], subPriority);
					}
				}
			},
			enumerable: false
		}
	});
	Object.defineProperties(CSSStyleDeclaration.prototype, generatedProperties);
	[...allProperties, ...allExtraProperties].forEach(function(property) {
		if (!implementedProperties.has(property)) {
			const declaration = getPropertyDescriptor(property);
			Object.defineProperty(CSSStyleDeclaration.prototype, property, declaration);
			const camel = dashedToCamelCase(property);
			Object.defineProperty(CSSStyleDeclaration.prototype, camel, declaration);
			if (/^webkit[A-Z]/.test(camel)) {
				const pascal = camel.replace(/^webkit/, "Webkit");
				Object.defineProperty(CSSStyleDeclaration.prototype, pascal, declaration);
			}
		}
	});
	exports.CSSStyleDeclaration = CSSStyleDeclaration;
}));
//#endregion
export { require_lib as n, require_CSSStyleDeclaration as t };
