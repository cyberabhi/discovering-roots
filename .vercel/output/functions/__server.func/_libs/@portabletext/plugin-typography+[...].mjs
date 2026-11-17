import { o as require_jsx_runtime } from "../dnd-kit__react+react.mjs";
import { M as getSelectedSpans, P as isActiveDecorator, rr as require_dist } from "./editor+[...].mjs";
import { r as defineTextTransformRule, t as InputRulePlugin } from "./plugin-input-rule+[...].mjs";
//#region node_modules/@portabletext/plugin-typography/dist/index.js
var import_jsx_runtime = require_jsx_runtime();
var import_dist = require_dist();
function createDecoratorGuard(config) {
	return ({ snapshot, event }) => {
		const allowedDecorators = config.decorators({ context: { schema: snapshot.context.schema } }), decorators = snapshot.context.schema.decorators.flatMap((decorator) => allowedDecorators.includes(decorator.name) ? [] : [decorator.name]);
		if (decorators.length === 0) return !0;
		const matchedSpans = event.matches.flatMap((match) => getSelectedSpans({
			...snapshot,
			context: {
				...snapshot.context,
				selection: match.selection
			}
		}));
		let preventInputRule = !1;
		for (const decorator of decorators) {
			if (isActiveDecorator(decorator)(snapshot)) {
				preventInputRule = !0;
				break;
			}
			if (matchedSpans.some((span) => span.node.marks?.includes(decorator))) {
				preventInputRule = !0;
				break;
			}
		}
		return !preventInputRule;
	};
}
var emDashRule = defineTextTransformRule({
	on: /--/,
	transform: () => "—"
});
var ellipsisRule = defineTextTransformRule({
	on: /\.\.\./,
	transform: () => "…"
});
var openingDoubleQuoteRule = defineTextTransformRule({
	on: new RegExp(`(?:^|(?<=[\\s{[(<'"\\u2018\\u201C]))"`, "g"),
	transform: () => "“"
});
var closingDoubleQuoteRule = defineTextTransformRule({
	on: /"/g,
	transform: () => "”"
});
var openingSingleQuoteRule = defineTextTransformRule({
	on: new RegExp(`(?:^|(?<=[\\s{[(<'"\\u2018\\u201C]))'`, "g"),
	transform: () => "‘"
});
var closingSingleQuoteRule = defineTextTransformRule({
	on: /'/g,
	transform: () => "’"
});
var leftArrowRule = defineTextTransformRule({
	on: /<-/,
	transform: () => "←"
});
var rightArrowRule = defineTextTransformRule({
	on: /->/,
	transform: () => "→"
});
var copyrightRule = defineTextTransformRule({
	on: /\(c\)/,
	transform: () => "©"
});
var servicemarkRule = defineTextTransformRule({
	on: /\(sm\)/,
	transform: () => "℠"
});
var trademarkRule = defineTextTransformRule({
	on: /\(tm\)/,
	transform: () => "™"
});
var registeredTrademarkRule = defineTextTransformRule({
	on: /\(r\)/,
	transform: () => "®"
});
var oneHalfRule = defineTextTransformRule({
	on: /(?:^|\s)(1\/2)\s/,
	transform: () => "½"
});
var plusMinusRule = defineTextTransformRule({
	on: /\+\/-/,
	transform: () => "±"
});
var notEqualRule = defineTextTransformRule({
	on: /!=/,
	transform: () => "≠"
});
var laquoRule = defineTextTransformRule({
	on: /<</,
	transform: () => "«"
});
var raquoRule = defineTextTransformRule({
	on: />>/,
	transform: () => "»"
});
var multiplicationRule = defineTextTransformRule({
	on: /\d+\s?([*x])\s?\d+/,
	transform: () => "×"
});
var superscriptTwoRule = defineTextTransformRule({
	on: /\^2/,
	transform: () => "²"
});
var superscriptThreeRule = defineTextTransformRule({
	on: /\^3/,
	transform: () => "³"
});
var oneQuarterRule = defineTextTransformRule({
	on: /(?:^|\s)(1\/4)\s/,
	transform: () => "¼"
});
var threeQuartersRule = defineTextTransformRule({
	on: /(?:^|\s)(3\/4)\s/,
	transform: () => "¾"
});
var defaultRuleConfig = [
	{
		name: "emDash",
		rule: emDashRule,
		state: "on"
	},
	{
		name: "ellipsis",
		rule: ellipsisRule,
		state: "on"
	},
	{
		name: "openingDoubleQuote",
		rule: openingDoubleQuoteRule,
		state: "on"
	},
	{
		name: "closingDoubleQuote",
		rule: closingDoubleQuoteRule,
		state: "on"
	},
	{
		name: "openingSingleQuote",
		rule: openingSingleQuoteRule,
		state: "on"
	},
	{
		name: "closingSingleQuote",
		rule: closingSingleQuoteRule,
		state: "on"
	},
	{
		name: "leftArrow",
		rule: leftArrowRule,
		state: "on"
	},
	{
		name: "rightArrow",
		rule: rightArrowRule,
		state: "on"
	},
	{
		name: "copyright",
		rule: copyrightRule,
		state: "on"
	},
	{
		name: "trademark",
		rule: trademarkRule,
		state: "on"
	},
	{
		name: "servicemark",
		rule: servicemarkRule,
		state: "on"
	},
	{
		name: "registeredTrademark",
		rule: registeredTrademarkRule,
		state: "on"
	},
	{
		name: "oneHalf",
		rule: oneHalfRule,
		state: "off"
	},
	{
		name: "plusMinus",
		rule: plusMinusRule,
		state: "off"
	},
	{
		name: "laquo",
		rule: laquoRule,
		state: "off"
	},
	{
		name: "notEqual",
		rule: notEqualRule,
		state: "off"
	},
	{
		name: "raquo",
		rule: raquoRule,
		state: "off"
	},
	{
		name: "multiplication",
		rule: multiplicationRule,
		state: "off"
	},
	{
		name: "superscriptTwo",
		rule: superscriptTwoRule,
		state: "off"
	},
	{
		name: "superscriptThree",
		rule: superscriptThreeRule,
		state: "off"
	},
	{
		name: "oneQuarter",
		rule: oneQuarterRule,
		state: "off"
	},
	{
		name: "threeQuarters",
		rule: threeQuartersRule,
		state: "off"
	}
];
function TypographyPlugin(props) {
	const $ = (0, import_dist.c)(13), { preset: t0, enable: t1, disable: t2, guard } = props, preset = t0 === void 0 ? "default" : t0;
	let t3;
	$[0] !== t1 ? (t3 = t1 === void 0 ? [] : t1, $[0] = t1, $[1] = t3) : t3 = $[1];
	const enable = t3;
	let t4;
	$[2] !== t2 ? (t4 = t2 === void 0 ? [] : t2, $[2] = t2, $[3] = t4) : t4 = $[3];
	const disable = t4;
	let enabledRules;
	if ($[4] !== disable || $[5] !== enable || $[6] !== preset) {
		if (enabledRules = /* @__PURE__ */ new Set(), preset === "all") for (const rule of defaultRuleConfig) enabledRules.add(rule.name);
		else if (preset === "default") for (const rule_0 of defaultRuleConfig) rule_0.state === "on" && enabledRules.add(rule_0.name);
		for (const ruleName of enable) enabledRules.add(ruleName);
		for (const ruleName_0 of disable) enabledRules.delete(ruleName_0);
		$[4] = disable, $[5] = enable, $[6] = preset, $[7] = enabledRules;
	} else enabledRules = $[7];
	let t5;
	$[8] !== enabledRules || $[9] !== guard ? (t5 = defaultRuleConfig.flatMap((rule_1) => enabledRules.has(rule_1.name) ? [{
		...rule_1.rule,
		guard: guard ?? _temp
	}] : []), $[8] = enabledRules, $[9] = guard, $[10] = t5) : t5 = $[10];
	const configuredInputRules = t5;
	let t6;
	return $[11] !== configuredInputRules ? (t6 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputRulePlugin, { rules: configuredInputRules }), $[11] = configuredInputRules, $[12] = t6) : t6 = $[12], t6;
}
function _temp() {
	return !0;
}
//#endregion
export { createDecoratorGuard as n, TypographyPlugin as t };
