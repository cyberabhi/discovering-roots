import { o as __toESM, r as __exportAll } from "../../_runtime.mjs";
import { i as require_react } from "../dnd-kit__accessibility+react.mjs";
import { o as require_jsx_runtime } from "../dnd-kit__react+react.mjs";
import { rr as require_dist } from "../@portabletext/editor+[...].mjs";
import { $ as responsiveRadiusStyle, At as jt, B as focusRingStyle, Ct as AnimatePresence, D as Text, Dt as Ut, Et as Mt, F as _isEnterToClickElement, G as isHTMLSelectElement, H as isHTMLButtonElement, I as _responsive, J as rem, K as isHTMLTextAreaElement, L as containsOrEqualsElement, M as TooltipDelayGroupContext, N as _ResizeObserver, O as TextInput, P as _getArrayProp, Pt as getTheme_v2, Q as responsivePaddingStyle, R as createGlobalScopedContext, S as SpanWithTextOverflow, St as motion, Tt as require_react_is, U as isHTMLElement, V as isHTMLAnchorElement, W as isHTMLInputElement, X as responsiveInputPaddingIconRightStyle, Y as responsiveFont, Z as responsiveInputPaddingStyle, _t as usePrefersReducedMotion, a as Button, at as textInputRepresentationStyle, b as Portal, bt as useTheme_v2, c as EMPTY_RECORD, ct as useClickOutsideEvent, dt as useElementSize, et as responsiveTextAlignStyle, ft as useGlobalKeyDown, ht as usePortal, i as Box, it as textInputFontSizeStyle, l as Flex, lt as useCustomValidity, m as LayerProvider, o as Card, ot as textInputRootStyle, p as Layer, pt as useLayer, q as isRecord, r as BoundaryElementContext, rt as textInputBaseStyle, s as EMPTY_ARRAY, st as useBoundaryElement, u as Grid, ut as useDelayedState, vt as useRootTheme, w as Stack, wt as easingDefinitionToFunction, y as Popover, z as focusRingBorderStyle } from "./insert-menu+[...].mjs";
import { dn as CheckmarkIcon, fn as ChevronDownIcon, hn as SpinnerIcon, mn as CloseIcon, un as RemoveIcon } from "../sanity__icons.mjs";
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/utils/stagger.mjs
function getOriginIndex(from, total) {
	if (from === "first") return 0;
	else {
		const lastIndex = total - 1;
		return from === "last" ? lastIndex : lastIndex / 2;
	}
}
function stagger(duration = .1, { startDelay = 0, from = 0, ease } = {}) {
	return (i, total) => {
		const fromIndex = typeof from === "number" ? from : getOriginIndex(from, total);
		let delay = duration * Math.abs(fromIndex - i);
		if (ease) {
			const maxDelay = total * duration;
			delay = easingDefinitionToFunction(ease)(delay / maxDelay) * maxDelay;
		}
		return startDelay + delay;
	};
}
//#endregion
//#region node_modules/@sanity/ui/dist/index.js
var import_dist = require_dist();
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var import_react_is = /* @__PURE__ */ __toESM(require_react_is(), 1);
/**
* @internal
*/
function _raf(fn) {
	let frameId = requestAnimationFrame(fn);
	return () => {
		cancelAnimationFrame(frameId);
	};
}
/**
* @internal
*/
function _raf2(fn) {
	let innerDispose = null, outerDispose = _raf(() => {
		innerDispose = _raf(fn);
	});
	return () => {
		innerDispose && innerDispose(), outerDispose();
	};
}
/**
* @internal
*/
function _hasFocus(element) {
	return !!document.activeElement && element.contains(document.activeElement);
}
/**
* @internal
*/
function isFocusable(element) {
	return element.tabIndex > 0 || element.tabIndex === 0 && element.getAttribute("tabIndex") !== null ? !0 : isHTMLAnchorElement(element) ? !!element.href && element.rel !== "ignore" : isHTMLInputElement(element) ? element.type !== "hidden" && element.type !== "file" && !element.disabled : isHTMLButtonElement(element) || isHTMLSelectElement(element) || isHTMLTextAreaElement(element) ? !element.disabled : !1;
}
/**
* @internal
*/
function attemptFocus(element) {
	if (!isFocusable(element)) return !1;
	try {
		element.focus();
	} catch {}
	return document.activeElement === element;
}
/**
* @internal
*/
function focusFirstDescendant(element) {
	for (let i = 0; i < element.childNodes.length; i++) {
		let child = element.childNodes[i];
		if (isHTMLElement(child) && (attemptFocus(child) || focusFirstDescendant(child))) return !0;
	}
	return !1;
}
/**
* @internal
*/
function focusLastDescendant(element) {
	for (let i = element.childNodes.length - 1; i >= 0; i--) {
		let child = element.childNodes[i];
		if (isHTMLElement(child) && (attemptFocus(child) || focusLastDescendant(child))) return !0;
	}
	return !1;
}
/**
* @internal
*/
var StyledAutocomplete = Mt.div.withConfig({
	displayName: "StyledAutocomplete",
	componentId: "sc-ilitn5-0"
})`line-height:0;`;
var ListBox = Mt(Box).withConfig({
	displayName: "ListBox",
	componentId: "sc-ilitn5-1"
})`& > ul{list-style:none;padding:0;margin:0;}`;
var rotate = Ut`from{transform:rotate(0deg);}to{transform:rotate(360deg);}`;
var AnimatedSpinnerIcon = Mt(SpinnerIcon).withConfig({
	displayName: "AnimatedSpinnerIcon",
	componentId: "sc-ilitn5-2"
})`animation:${rotate} 500ms linear infinite;`;
function AutocompleteOption(props) {
	let $ = (0, import_dist.c)(11), { children, id, onSelect, selected, value } = props, t0;
	$[0] !== onSelect || $[1] !== value ? (t0 = () => {
		setTimeout(() => {
			onSelect(value);
		}, 0);
	}, $[0] = onSelect, $[1] = value, $[2] = t0) : t0 = $[2];
	let handleClick = t0, t1;
	$[3] === handleClick ? t1 = $[4] : (t1 = (event) => {
		event.key === "Enter" && !_isEnterToClickElement(event.currentTarget) && handleClick();
	}, $[3] = handleClick, $[4] = t1);
	let handleKeyDown = t1, t2;
	return $[5] !== children || $[6] !== handleClick || $[7] !== handleKeyDown || $[8] !== id || $[9] !== selected ? (t2 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
		"aria-selected": selected,
		"data-ui": "AutocompleteOption",
		id,
		role: "option",
		onClick: handleClick,
		onKeyDown: handleKeyDown,
		children
	}), $[5] = children, $[6] = handleClick, $[7] = handleKeyDown, $[8] = id, $[9] = selected, $[10] = t2) : t2 = $[10], t2;
}
/**
* @internal
*/
function autocompleteReducer(state, msg) {
	return msg.type === "input/change" ? {
		...state,
		activeValue: null,
		focused: !0,
		query: msg.query
	} : msg.type === "input/focus" ? {
		...state,
		focused: !0
	} : msg.type === "root/blur" ? {
		...state,
		focused: !1,
		query: null
	} : msg.type === "root/clear" ? {
		...state,
		activeValue: null,
		query: null,
		value: null
	} : msg.type === "root/escape" ? {
		...state,
		focused: !1,
		query: null
	} : msg.type === "root/open" ? {
		...state,
		query: state.query || msg.query
	} : msg.type === "root/setActiveValue" ? {
		...state,
		activeValue: msg.value,
		listFocused: msg.listFocused || state.listFocused
	} : msg.type === "root/setListFocused" ? {
		...state,
		listFocused: msg.listFocused
	} : msg.type === "value/change" ? {
		...state,
		activeValue: msg.value,
		query: null,
		value: msg.value
	} : state;
}
/**
* @internal
*/
var AUTOCOMPLETE_LISTBOX_IGNORE_KEYS = [
	"Control",
	"Shift",
	"Alt",
	"Enter",
	"Home",
	"End",
	"PageUp",
	"PageDown",
	"Meta",
	"Tab",
	"CapsLock"
];
var AUTOCOMPLETE_POPOVER_FALLBACK_PLACEMENTS = ["bottom-start", "top-start"];
var DEFAULT_RENDER_VALUE = (value, option) => option ? option.value : value;
var DEFAULT_FILTER_OPTION = (query, option) => option.value.toLowerCase().indexOf(query.toLowerCase()) > -1;
var InnerAutocomplete = (0, import_react.forwardRef)(function Autocomplete(props, forwardedRef) {
	let $ = (0, import_dist.c)(181), customValidity, disabled, filterOptionProp, icon, id, loading, onBlur, onChange, onFocus, onQueryChange, onSelect, openButton, openOnFocus, optionsProp, prefix, readOnly, relatedElements, renderOptionProp, renderPopover, restProps, suffix, t0, t1, t2, t3, t4, t5, t6, valueProp;
	$[0] === props ? (customValidity = $[1], disabled = $[2], filterOptionProp = $[3], icon = $[4], id = $[5], loading = $[6], onBlur = $[7], onChange = $[8], onFocus = $[9], onQueryChange = $[10], onSelect = $[11], openButton = $[12], openOnFocus = $[13], optionsProp = $[14], prefix = $[15], readOnly = $[16], relatedElements = $[17], renderOptionProp = $[18], renderPopover = $[19], restProps = $[20], suffix = $[21], t0 = $[22], t1 = $[23], t2 = $[24], t3 = $[25], t4 = $[26], t5 = $[27], t6 = $[28], valueProp = $[29]) : ({border: t0, customValidity, disabled, filterOption: filterOptionProp, fontSize: t1, icon, id, listBox: t2, loading, onBlur, onChange, onFocus, onQueryChange, onSelect, openButton, openOnFocus, options: optionsProp, padding: t3, popover: t4, prefix, radius: t5, readOnly, relatedElements, renderOption: renderOptionProp, renderPopover, renderValue: t6, suffix, value: valueProp, ...restProps} = props, $[0] = props, $[1] = customValidity, $[2] = disabled, $[3] = filterOptionProp, $[4] = icon, $[5] = id, $[6] = loading, $[7] = onBlur, $[8] = onChange, $[9] = onFocus, $[10] = onQueryChange, $[11] = onSelect, $[12] = openButton, $[13] = openOnFocus, $[14] = optionsProp, $[15] = prefix, $[16] = readOnly, $[17] = relatedElements, $[18] = renderOptionProp, $[19] = renderPopover, $[20] = restProps, $[21] = suffix, $[22] = t0, $[23] = t1, $[24] = t2, $[25] = t3, $[26] = t4, $[27] = t5, $[28] = t6, $[29] = valueProp);
	let border = t0 === void 0 || t0, fontSize = t1 === void 0 ? 2 : t1, listBox = t2 === void 0 ? EMPTY_RECORD : t2, paddingProp = t3 === void 0 ? 3 : t3, popover = t4 === void 0 ? EMPTY_RECORD : t4, radius = t5 === void 0 ? 2 : t5, renderValue = t6 === void 0 ? DEFAULT_RENDER_VALUE : t6, t7 = valueProp || null, t8 = valueProp || null, t9;
	$[30] !== t7 || $[31] !== t8 ? (t9 = {
		activeValue: t7,
		focused: !1,
		listFocused: !1,
		query: null,
		value: t8
	}, $[30] = t7, $[31] = t8, $[32] = t9) : t9 = $[32];
	let [state, dispatch] = (0, import_react.useReducer)(autocompleteReducer, t9), { activeValue, focused, listFocused, query, value } = state, t10;
	$[33] !== fontSize || $[34] !== paddingProp ? (t10 = (t11) => {
		let { value: value_0 } = t11;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
			"data-as": "button",
			padding: paddingProp,
			radius: 2,
			tone: "inherit",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
				size: fontSize,
				textOverflow: "ellipsis",
				children: value_0
			})
		});
	}, $[33] = fontSize, $[34] = paddingProp, $[35] = t10) : t10 = $[35];
	let renderOption = typeof renderOptionProp == "function" ? renderOptionProp : t10, filterOption = typeof filterOptionProp == "function" ? filterOptionProp : DEFAULT_FILTER_OPTION, rootElementRef = (0, import_react.useRef)(null), resultsPopoverElementRef = (0, import_react.useRef)(null), inputElementRef = (0, import_react.useRef)(null), listBoxElementRef = (0, import_react.useRef)(null), [inputElement, _setInputElement] = (0, import_react.useState)(null), t11;
	$[36] === Symbol.for("react.memo_cache_sentinel") ? (t11 = (node) => {
		(0, import_react.startTransition)(() => _setInputElement(node));
	}, $[36] = t11) : t11 = $[36];
	let setInputElement = t11, listFocusedRef = (0, import_react.useRef)(!1), valueRef = (0, import_react.useRef)(value), valuePropRef = (0, import_react.useRef)(valueProp), popoverMouseWithinRef = (0, import_react.useRef)(!1), t12, t13;
	$[37] === inputElement ? (t12 = $[38], t13 = $[39]) : (t12 = () => inputElement, t13 = [inputElement], $[37] = inputElement, $[38] = t12, $[39] = t13), (0, import_react.useImperativeHandle)(inputElementRef, t12, t13);
	let t14, t15;
	$[40] === inputElement ? (t14 = $[41], t15 = $[42]) : (t14 = () => inputElement, t15 = [inputElement], $[40] = inputElement, $[41] = t14, $[42] = t15), (0, import_react.useImperativeHandle)(forwardedRef, t14, t15);
	let listBoxId = `${id}-listbox`, options = Array.isArray(optionsProp) ? optionsProp : EMPTY_ARRAY, padding = _getArrayProp(paddingProp), t16;
	$[43] !== options || $[44] !== value ? (t16 = value === null ? void 0 : options.find((o) => o.value === value), $[43] = options, $[44] = value, $[45] = t16) : t16 = $[45];
	let currentOption = t16, t17;
	if ($[46] !== filterOption || $[47] !== options || $[48] !== query) {
		let t18;
		$[50] !== filterOption || $[51] !== query ? (t18 = (option) => !query || filterOption(query, option), $[50] = filterOption, $[51] = query, $[52] = t18) : t18 = $[52], t17 = options.filter(t18), $[46] = filterOption, $[47] = options, $[48] = query, $[49] = t17;
	} else t17 = $[49];
	let filteredOptions = t17, filteredOptionsLen = filteredOptions.length, activeItemId = activeValue ? `${id}-option-${activeValue}` : void 0, expanded = query !== null && loading || focused && query !== null, t18;
	$[53] !== onBlur || $[54] !== onQueryChange || $[55] !== relatedElements ? (t18 = (event) => {
		setTimeout(() => {
			if (popoverMouseWithinRef.current) return;
			let elements = (relatedElements || []).concat(rootElementRef.current ? [rootElementRef.current] : [], resultsPopoverElementRef.current ? [resultsPopoverElementRef.current] : []), focusInside = !1;
			if (document.activeElement) {
				for (let e of elements) if (e === document.activeElement || e.contains(document.activeElement)) {
					focusInside = !0;
					break;
				}
			}
			focusInside === !1 && (dispatch({ type: "root/blur" }), popoverMouseWithinRef.current = !1, onQueryChange && onQueryChange(null), onBlur && onBlur(event));
		}, 0);
	}, $[53] = onBlur, $[54] = onQueryChange, $[55] = relatedElements, $[56] = t18) : t18 = $[56];
	let handleRootBlur = t18, t19;
	$[57] === Symbol.for("react.memo_cache_sentinel") ? (t19 = (event_0) => {
		let listBoxElement = listBoxElementRef.current, focusedElement = event_0.target instanceof HTMLElement ? event_0.target : null, listFocused_0 = listBoxElement?.contains(focusedElement) || !1;
		listFocused_0 !== listFocusedRef.current && (listFocusedRef.current = listFocused_0, dispatch({
			type: "root/setListFocused",
			listFocused: listFocused_0
		}));
	}, $[57] = t19) : t19 = $[57];
	let handleRootFocus = t19, t20;
	$[58] !== onChange || $[59] !== onQueryChange || $[60] !== onSelect ? (t20 = (v) => {
		dispatch({
			type: "value/change",
			value: v
		}), popoverMouseWithinRef.current = !1, onSelect && onSelect(v), valueRef.current = v, onChange && onChange(v), onQueryChange && onQueryChange(null), inputElementRef.current?.focus();
	}, $[58] = onChange, $[59] = onQueryChange, $[60] = onSelect, $[61] = t20) : t20 = $[61];
	let handleOptionSelect = t20, t21;
	$[62] !== activeValue || $[63] !== filteredOptions || $[64] !== filteredOptionsLen || $[65] !== onQueryChange ? (t21 = (event_1) => {
		if (event_1.key === "ArrowDown") {
			if (event_1.preventDefault(), !filteredOptionsLen) return;
			let activeOption = filteredOptions.find((o_0) => o_0.value === activeValue), activeIndex = activeOption ? filteredOptions.indexOf(activeOption) : -1, nextActiveOption = filteredOptions[(activeIndex + 1) % filteredOptionsLen];
			nextActiveOption && dispatch({
				type: "root/setActiveValue",
				value: nextActiveOption.value,
				listFocused: !0
			});
			return;
		}
		if (event_1.key === "ArrowUp") {
			if (event_1.preventDefault(), !filteredOptionsLen) return;
			let activeOption_0 = filteredOptions.find((o_1) => o_1.value === activeValue), activeIndex_0 = activeOption_0 ? filteredOptions.indexOf(activeOption_0) : -1, nextActiveOption_0 = filteredOptions[activeIndex_0 === -1 ? filteredOptionsLen - 1 : (filteredOptionsLen + activeIndex_0 - 1) % filteredOptionsLen];
			nextActiveOption_0 && dispatch({
				type: "root/setActiveValue",
				value: nextActiveOption_0.value,
				listFocused: !0
			});
			return;
		}
		if (event_1.key === "Escape") {
			dispatch({ type: "root/escape" }), popoverMouseWithinRef.current = !1, onQueryChange && onQueryChange(null), inputElementRef.current?.focus();
			return;
		}
		let target = event_1.target, listEl = listBoxElementRef.current;
		if ((listEl === target || listEl?.contains(target)) && !AUTOCOMPLETE_LISTBOX_IGNORE_KEYS.includes(event_1.key)) {
			inputElementRef.current?.focus();
			return;
		}
	}, $[62] = activeValue, $[63] = filteredOptions, $[64] = filteredOptionsLen, $[65] = onQueryChange, $[66] = t21) : t21 = $[66];
	let handleRootKeyDown = t21, t22;
	$[67] === onQueryChange ? t22 = $[68] : (t22 = (event_2) => {
		let nextQuery = event_2.currentTarget.value;
		dispatch({
			type: "input/change",
			query: nextQuery
		}), onQueryChange && onQueryChange(nextQuery);
	}, $[67] = onQueryChange, $[68] = t22);
	let handleInputChange = t22, t23;
	$[69] !== currentOption || $[70] !== renderValue || $[71] !== value ? (t23 = () => {
		dispatch({
			type: "root/open",
			query: value ? renderValue(value, currentOption) : ""
		});
	}, $[69] = currentOption, $[70] = renderValue, $[71] = value, $[72] = t23) : t23 = $[72];
	let dispatchOpen = t23, t24;
	$[73] !== dispatchOpen || $[74] !== focused || $[75] !== onFocus || $[76] !== openOnFocus ? (t24 = (event_3) => {
		focused || (dispatch({ type: "input/focus" }), onFocus && onFocus(event_3), openOnFocus && dispatchOpen());
	}, $[73] = dispatchOpen, $[74] = focused, $[75] = onFocus, $[76] = openOnFocus, $[77] = t24) : t24 = $[77];
	let handleInputFocus = t24, t25;
	$[78] === Symbol.for("react.memo_cache_sentinel") ? (t25 = () => {
		popoverMouseWithinRef.current = !0;
	}, $[78] = t25) : t25 = $[78];
	let handlePopoverMouseEnter = t25, t26;
	$[79] === Symbol.for("react.memo_cache_sentinel") ? (t26 = () => {
		popoverMouseWithinRef.current = !1;
	}, $[79] = t26) : t26 = $[79];
	let handlePopoverMouseLeave = t26, t27;
	$[80] !== onChange || $[81] !== onQueryChange ? (t27 = () => {
		dispatch({ type: "root/clear" }), valueRef.current = "", onChange && onChange(""), onQueryChange && onQueryChange(null), inputElementRef.current?.focus();
	}, $[80] = onChange, $[81] = onQueryChange, $[82] = t27) : t27 = $[82];
	let handleClearButtonClick = t27, t28;
	$[83] === Symbol.for("react.memo_cache_sentinel") ? (t28 = () => {
		dispatch({ type: "input/focus" });
	}, $[83] = t28) : t28 = $[83];
	let handleClearButtonFocus = t28, t29, t30;
	$[84] === valueProp ? (t29 = $[85], t30 = $[86]) : (t29 = () => {
		if (valueProp !== valuePropRef.current) {
			valuePropRef.current = valueProp, valueProp !== void 0 && (dispatch({
				type: "value/change",
				value: valueProp
			}), valueRef.current = valueProp);
			return;
		}
		valueProp !== valueRef.current && (valueRef.current = valueProp || null, dispatch({
			type: "value/change",
			value: valueProp || null
		}));
	}, t30 = [valueProp], $[84] = valueProp, $[85] = t29, $[86] = t30), (0, import_react.useEffect)(t29, t30);
	let t31, t32;
	$[87] === focused ? (t31 = $[88], t32 = $[89]) : (t31 = () => {
		!focused && valueRef.current && dispatch({
			type: "root/setActiveValue",
			value: valueRef.current
		});
	}, t32 = [focused], $[87] = focused, $[88] = t31, $[89] = t32), (0, import_react.useEffect)(t31, t32);
	let t33, t34;
	$[90] !== activeValue || $[91] !== filteredOptions ? (t33 = () => {
		let listElement = listBoxElementRef.current;
		if (!listElement) return;
		let activeOption_1 = filteredOptions.find((o_2) => o_2.value === activeValue);
		if (activeOption_1) {
			let activeIndex_1 = filteredOptions.indexOf(activeOption_1), activeItemElement = listElement.childNodes[activeIndex_1];
			if (activeItemElement) {
				if (_hasFocus(activeItemElement)) return;
				focusFirstDescendant(activeItemElement);
			}
		}
	}, t34 = [activeValue, filteredOptions], $[90] = activeValue, $[91] = filteredOptions, $[92] = t33, $[93] = t34) : (t33 = $[92], t34 = $[93]), (0, import_react.useEffect)(t33, t34);
	let t35;
	bb0: {
		if (!loading && !disabled && value) {
			let t36;
			$[94] === Symbol.for("react.memo_cache_sentinel") ? (t36 = {
				"aria-label": "Clear",
				onFocus: handleClearButtonFocus
			}, $[94] = t36) : t36 = $[94], t35 = t36;
			break bb0;
		}
		t35 = void 0;
	}
	let clearButton = t35, openButtonBoxPadding = padding.map(_temp$5), openButtonPadding = padding.map(_temp2$1), openButtonProps = typeof openButton == "object" ? openButton : EMPTY_RECORD, t36;
	$[95] !== dispatchOpen || $[96] !== openButtonProps ? (t36 = (event_4) => {
		dispatchOpen(), openButtonProps.onClick && openButtonProps.onClick(event_4), _raf(() => inputElementRef.current?.focus());
	}, $[95] = dispatchOpen, $[96] = openButtonProps, $[97] = t36) : t36 = $[97];
	let handleOpenClick = t36, t37;
	$[98] !== disabled || $[99] !== expanded || $[100] !== fontSize || $[101] !== handleOpenClick || $[102] !== openButton || $[103] !== openButtonBoxPadding || $[104] !== openButtonPadding || $[105] !== openButtonProps || $[106] !== readOnly ? (t37 = !disabled && !readOnly && openButton ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
		"aria-hidden": expanded,
		padding: openButtonBoxPadding,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			"aria-label": "Open",
			disabled: expanded,
			fontSize,
			icon: ChevronDownIcon,
			mode: "bleed",
			padding: openButtonPadding,
			...openButtonProps,
			onClick: handleOpenClick
		})
	}) : void 0, $[98] = disabled, $[99] = expanded, $[100] = fontSize, $[101] = handleOpenClick, $[102] = openButton, $[103] = openButtonBoxPadding, $[104] = openButtonPadding, $[105] = openButtonProps, $[106] = readOnly, $[107] = t37) : t37 = $[107];
	let openButtonNode = t37, t38;
	bb1: {
		if (query === null) {
			if (value !== null) {
				let t39;
				$[108] !== currentOption || $[109] !== renderValue || $[110] !== value ? (t39 = renderValue(value, currentOption), $[108] = currentOption, $[109] = renderValue, $[110] = value, $[111] = t39) : t39 = $[111], t38 = t39;
				break bb1;
			}
			t38 = "";
			break bb1;
		}
		t38 = query;
	}
	let inputValue = t38, t39;
	$[112] === listFocused ? t39 = $[113] : (t39 = (event_5) => {
		event_5.key === "Tab" && listFocused && inputElementRef.current?.focus();
	}, $[112] = listFocused, $[113] = t39);
	let handleListBoxKeyDown = t39, t40;
	bb2: {
		if (filteredOptions.length === 0) {
			t40 = null;
			break bb2;
		}
		let t41;
		if ($[114] !== activeValue || $[115] !== currentOption || $[116] !== filteredOptions || $[117] !== handleOptionSelect || $[118] !== id || $[119] !== listFocused || $[120] !== loading || $[121] !== renderOption) {
			let t42;
			$[123] !== activeValue || $[124] !== currentOption || $[125] !== handleOptionSelect || $[126] !== id || $[127] !== listFocused || $[128] !== loading || $[129] !== renderOption ? (t42 = (option_0) => {
				let active = activeValue === null ? currentOption === option_0 : option_0.value === activeValue;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AutocompleteOption, {
					id: `${id}-option-${option_0.value}`,
					onSelect: handleOptionSelect,
					selected: active,
					value: option_0.value,
					children: (0, import_react.cloneElement)(renderOption(option_0), {
						disabled: loading,
						selected: active,
						tabIndex: listFocused && active ? 0 : -1
					})
				}, option_0.value);
			}, $[123] = activeValue, $[124] = currentOption, $[125] = handleOptionSelect, $[126] = id, $[127] = listFocused, $[128] = loading, $[129] = renderOption, $[130] = t42) : t42 = $[130], t41 = filteredOptions.map(t42), $[114] = activeValue, $[115] = currentOption, $[116] = filteredOptions, $[117] = handleOptionSelect, $[118] = id, $[119] = listFocused, $[120] = loading, $[121] = renderOption, $[122] = t41;
		} else t41 = $[122];
		let t42;
		$[131] !== listBoxId || $[132] !== t41 ? (t42 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stack, {
			as: "ul",
			"aria-multiselectable": !1,
			"data-ui": "AutoComplete__resultsList",
			id: listBoxId,
			ref: listBoxElementRef,
			role: "listbox",
			gap: 1,
			children: t41
		}), $[131] = listBoxId, $[132] = t41, $[133] = t42) : t42 = $[133];
		let t43;
		$[134] !== handleListBoxKeyDown || $[135] !== listBox || $[136] !== t42 ? (t43 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListBox, {
			"data-ui": "AutoComplete__results",
			onKeyDown: handleListBoxKeyDown,
			padding: 1,
			...listBox,
			tabIndex: -1,
			children: t42
		}), $[134] = handleListBoxKeyDown, $[135] = listBox, $[136] = t42, $[137] = t43) : t43 = $[137], t40 = t43;
	}
	let content = t40, t41;
	bb3: {
		if (renderPopover) {
			let t42 = !expanded, t43;
			$[138] !== content || $[139] !== handlePopoverMouseEnter || $[140] !== handlePopoverMouseLeave || $[141] !== inputElement || $[142] !== renderPopover || $[143] !== t42 ? (t43 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RenderPopover, {
				content,
				hidden: t42,
				inputElement,
				onMouseEnter: handlePopoverMouseEnter,
				onMouseLeave: handlePopoverMouseLeave,
				resultsPopoverElementRef,
				renderPopover
			}), $[138] = content, $[139] = handlePopoverMouseEnter, $[140] = handlePopoverMouseLeave, $[141] = inputElement, $[142] = renderPopover, $[143] = t42, $[144] = t43) : t43 = $[144], t41 = t43;
			break bb3;
		}
		if (filteredOptionsLen === 0) {
			t41 = null;
			break bb3;
		}
		let t42;
		$[145] !== content || $[146] !== expanded || $[147] !== handlePopoverMouseEnter || $[148] !== handlePopoverMouseLeave || $[149] !== inputElement || $[150] !== popover || $[151] !== radius ? (t42 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Popover, {
			arrow: !1,
			constrainSize: !0,
			content,
			fallbackPlacements: AUTOCOMPLETE_POPOVER_FALLBACK_PLACEMENTS,
			matchReferenceWidth: !0,
			onMouseEnter: handlePopoverMouseEnter,
			onMouseLeave: handlePopoverMouseLeave,
			open: expanded,
			overflow: "auto",
			placement: "bottom-start",
			portal: !0,
			radius,
			ref: resultsPopoverElementRef,
			referenceElement: inputElement,
			...popover
		}), $[145] = content, $[146] = expanded, $[147] = handlePopoverMouseEnter, $[148] = handlePopoverMouseLeave, $[149] = inputElement, $[150] = popover, $[151] = radius, $[152] = t42) : t42 = $[152], t41 = t42;
	}
	let results = t41, t42 = loading && AnimatedSpinnerIcon, t43 = suffix || openButtonNode, t44;
	$[153] !== activeItemId || $[154] !== border || $[155] !== clearButton || $[156] !== customValidity || $[157] !== disabled || $[158] !== expanded || $[159] !== fontSize || $[160] !== handleClearButtonClick || $[161] !== handleInputChange || $[162] !== handleInputFocus || $[163] !== icon || $[164] !== id || $[165] !== inputValue || $[166] !== listBoxId || $[167] !== padding || $[168] !== prefix || $[169] !== radius || $[170] !== readOnly || $[171] !== restProps || $[172] !== t42 || $[173] !== t43 ? (t44 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
		...restProps,
		"aria-activedescendant": activeItemId,
		"aria-autocomplete": "list",
		"aria-expanded": expanded,
		"aria-owns": listBoxId,
		autoCapitalize: "off",
		autoComplete: "off",
		autoCorrect: "off",
		border,
		clearButton,
		customValidity,
		disabled,
		fontSize,
		icon,
		iconRight: t42,
		id,
		inputMode: "search",
		onChange: handleInputChange,
		onClear: handleClearButtonClick,
		onFocus: handleInputFocus,
		padding,
		prefix,
		radius,
		readOnly,
		ref: setInputElement,
		role: "combobox",
		spellCheck: !1,
		suffix: t43,
		value: inputValue
	}), $[153] = activeItemId, $[154] = border, $[155] = clearButton, $[156] = customValidity, $[157] = disabled, $[158] = expanded, $[159] = fontSize, $[160] = handleClearButtonClick, $[161] = handleInputChange, $[162] = handleInputFocus, $[163] = icon, $[164] = id, $[165] = inputValue, $[166] = listBoxId, $[167] = padding, $[168] = prefix, $[169] = radius, $[170] = readOnly, $[171] = restProps, $[172] = t42, $[173] = t43, $[174] = t44) : t44 = $[174];
	let t45;
	return $[175] !== handleRootBlur || $[176] !== handleRootFocus || $[177] !== handleRootKeyDown || $[178] !== results || $[179] !== t44 ? (t45 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StyledAutocomplete, {
		"data-ui": "Autocomplete",
		onBlur: handleRootBlur,
		onFocus: handleRootFocus,
		onKeyDown: handleRootKeyDown,
		ref: rootElementRef,
		children: [t44, results]
	}), $[175] = handleRootBlur, $[176] = handleRootFocus, $[177] = handleRootKeyDown, $[178] = results, $[179] = t44, $[180] = t45) : t45 = $[180], t45;
});
function RenderPopover({ renderPopover, content, hidden, inputElement, onMouseEnter, onMouseLeave, resultsPopoverElementRef }) {
	return renderPopover({
		content,
		hidden,
		inputElement,
		onMouseEnter,
		onMouseLeave
	}, resultsPopoverElementRef);
}
/**
* The Autocomplete component is typically used for search components.
* It consists of a text input for writing a query, and properties for rendering suggestions.
*
* @public
*/
var Autocomplete = InnerAutocomplete;
function _temp$5(v_0) {
	return v_0 === 0 ? 0 : v_0 === 1 || v_0 === 2 ? 1 : v_0 - 2;
}
function _temp2$1(v_1) {
	return Math.max(v_1 - 1, 0);
}
var StyledBreadcrumbs = Mt.ol.withConfig({
	displayName: "StyledBreadcrumbs",
	componentId: "sc-s3y9xo-0"
})`margin:0;padding:0;display:flex;list-style:none;align-items:center;white-space:nowrap;line-height:0;`;
var ExpandButton = Mt(Button).withConfig({
	displayName: "ExpandButton",
	componentId: "sc-s3y9xo-1"
})`appearance:none;margin:-4px;`;
var Breadcrumbs = (0, import_react.forwardRef)(function Breadcrumbs(props, ref) {
	let $ = (0, import_dist.c)(30), children, gap, maxLength, restProps, separator, t0;
	$[0] === props ? (children = $[1], gap = $[2], maxLength = $[3], restProps = $[4], separator = $[5], t0 = $[6]) : ({children, gap, maxLength, separator, space: t0, ...restProps} = props, $[0] = props, $[1] = children, $[2] = gap, $[3] = maxLength, $[4] = restProps, $[5] = separator, $[6] = t0);
	let t1 = gap === void 0 ? t0 === void 0 ? 2 : t0 : gap, t2;
	$[7] === t1 ? t2 = $[8] : (t2 = _getArrayProp(t1), $[7] = t1, $[8] = t2);
	let space = t2, [open, setOpen] = (0, import_react.useState)(!1), expandElementRef = (0, import_react.useRef)(null), popoverElementRef = (0, import_react.useRef)(null), t3;
	$[9] === Symbol.for("react.memo_cache_sentinel") ? (t3 = () => setOpen(!1), $[9] = t3) : t3 = $[9];
	let collapse = t3, t4;
	$[10] === Symbol.for("react.memo_cache_sentinel") ? (t4 = () => setOpen(!0), $[10] = t4) : t4 = $[10];
	let expand = t4, t5;
	$[11] === Symbol.for("react.memo_cache_sentinel") ? (t5 = () => [expandElementRef.current, popoverElementRef.current], $[11] = t5) : t5 = $[11], useClickOutsideEvent(collapse, t5);
	let t6;
	$[12] === children ? t6 = $[13] : (t6 = import_react.Children.toArray(children).filter(import_react.isValidElement), $[12] = children, $[13] = t6);
	let rawItems = t6, t7;
	$[14] !== maxLength || $[15] !== open || $[16] !== rawItems || $[17] !== space ? (t7 = {
		collapse,
		expand,
		expandElementRef,
		maxLength,
		open,
		popoverElementRef,
		rawItems,
		space
	}, $[14] = maxLength, $[15] = open, $[16] = rawItems, $[17] = space, $[18] = t7) : t7 = $[18];
	let items = useItems(t7), t8;
	if ($[19] !== items || $[20] !== separator || $[21] !== space) {
		let t9;
		$[23] !== separator || $[24] !== space ? (t9 = (item, itemIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [itemIndex > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
			"aria-hidden": !0,
			as: "li",
			paddingX: space,
			children: separator || /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
				muted: !0,
				children: "/"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
			as: "li",
			children: item
		})] }, itemIndex), $[23] = separator, $[24] = space, $[25] = t9) : t9 = $[25], t8 = items.map(t9), $[19] = items, $[20] = separator, $[21] = space, $[22] = t8;
	} else t8 = $[22];
	let t9;
	return $[26] !== ref || $[27] !== restProps || $[28] !== t8 ? (t9 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledBreadcrumbs, {
		"data-ui": "Breadcrumbs",
		...restProps,
		ref,
		children: t8
	}), $[26] = ref, $[27] = restProps, $[28] = t8, $[29] = t9) : t9 = $[29], t9;
});
function useItems(t0) {
	let $ = (0, import_dist.c)(28), { collapse, expand, expandElementRef, maxLength, open, popoverElementRef, rawItems, space } = t0, len = rawItems.length;
	if (maxLength && len > maxLength) {
		let beforeLength = Math.ceil(maxLength / 2), afterLength = Math.floor(maxLength / 2), t1;
		if ($[0] !== afterLength || $[1] !== beforeLength || $[2] !== collapse || $[3] !== expand || $[4] !== expandElementRef || $[5] !== len || $[6] !== open || $[7] !== popoverElementRef || $[8] !== rawItems || $[9] !== space) {
			let t2 = rawItems.slice(0, beforeLength - 1), t3;
			$[11] !== afterLength || $[12] !== beforeLength || $[13] !== len || $[14] !== rawItems ? (t3 = rawItems.slice(beforeLength - 1, len - afterLength), $[11] = afterLength, $[12] = beforeLength, $[13] = len, $[14] = rawItems, $[15] = t3) : t3 = $[15];
			let t4;
			$[16] !== space || $[17] !== t3 ? (t4 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stack, {
				as: "ol",
				overflow: "auto",
				padding: space,
				gap: space,
				children: t3
			}), $[16] = space, $[17] = t3, $[18] = t4) : t4 = $[18];
			let t5 = open ? collapse : expand, t6;
			$[19] !== expandElementRef || $[20] !== open || $[21] !== t5 ? (t6 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExpandButton, {
				fontSize: 1,
				mode: "bleed",
				onClick: t5,
				padding: 1,
				ref: expandElementRef,
				selected: open,
				text: "…"
			}), $[19] = expandElementRef, $[20] = open, $[21] = t5, $[22] = t6) : t6 = $[22];
			let t7;
			$[23] !== open || $[24] !== popoverElementRef || $[25] !== t4 || $[26] !== t6 ? (t7 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Popover, {
				constrainSize: !0,
				content: t4,
				open,
				placement: "top",
				portal: !0,
				ref: popoverElementRef,
				children: t6
			}, "button"), $[23] = open, $[24] = popoverElementRef, $[25] = t4, $[26] = t6, $[27] = t7) : t7 = $[27], t1 = [
				...t2,
				t7,
				...rawItems.slice(len - afterLength)
			], $[0] = afterLength, $[1] = beforeLength, $[2] = collapse, $[3] = expand, $[4] = expandElementRef, $[5] = len, $[6] = open, $[7] = popoverElementRef, $[8] = rawItems, $[9] = space, $[10] = t1;
		} else t1 = $[10];
		return t1;
	}
	return rawItems;
}
var BASE_STYLE = {
	width: "100%",
	margin: "0 auto"
};
function containerBaseStyle() {
	return BASE_STYLE;
}
function responsiveContainerWidthStyle(props) {
	let { container, media } = getTheme_v2(props.theme);
	return _responsive(media, props.$width, (val) => ({ maxWidth: val === "auto" ? "none" : rem(container[val]) }));
}
var StyledContainer = /* @__PURE__ */ Mt(Box).withConfig({
	displayName: "StyledContainer",
	componentId: "sc-nbeafu-0"
})(containerBaseStyle, responsiveContainerWidthStyle);
var Container = (0, import_react.forwardRef)(function Container(props, ref) {
	let $ = (0, import_dist.c)(11), as, restProps, t0;
	$[0] === props ? (as = $[1], restProps = $[2], t0 = $[3]) : ({as, width: t0, ...restProps} = props, $[0] = props, $[1] = as, $[2] = restProps, $[3] = t0);
	let width = t0 === void 0 ? 2 : t0, t1;
	$[4] === width ? t1 = $[5] : (t1 = _getArrayProp(width), $[4] = width, $[5] = t1);
	let t2;
	return $[6] !== as || $[7] !== ref || $[8] !== restProps || $[9] !== t1 ? (t2 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledContainer, {
		"data-ui": "Container",
		...restProps,
		$width: t1,
		forwardedAs: as,
		ref
	}), $[6] = as, $[7] = ref, $[8] = restProps, $[9] = t1, $[10] = t2) : t2 = $[10], t2;
});
function dialogStyle({ theme }) {
	let { color } = getTheme_v2(theme);
	return {
		"&:not([hidden])": { display: "flex" },
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		alignItems: "center",
		justifyContent: "center",
		outline: "none",
		background: color.backdrop
	};
}
function responsiveDialogPositionStyle(props) {
	let { media } = getTheme_v2(props.theme);
	return _responsive(media, props.$position, (position) => ({ "&&": { position } }));
}
function animationDialogStyle(props) {
	return props.$animate ? jt`@keyframes zoomIn{from{opacity:0;transform:scale(0.95);}to{opacity:1;transform:scale(1);}}@keyframes fadeIn{from{opacity:0;}to{opacity:1;}}animation:fadeIn 200ms ease-out;& > [data-ui='DialogCard']{animation:zoomIn 200ms ease-out;}` : jt``;
}
/**
* @internal
*/
var DialogContext = createGlobalScopedContext("@sanity/ui/context/dialog", { version: 0 });
/**
* This API might change. DO NOT USE IN PRODUCTION.
* @beta
*/
function useDialog() {
	return (0, import_react.useContext)(DialogContext);
}
function isTargetWithinScope(boundaryElement, portalElement, target) {
	return !boundaryElement || !portalElement || containsOrEqualsElement(boundaryElement, target) || containsOrEqualsElement(portalElement, target);
}
var StyledDialog = /* @__PURE__ */ Mt(Layer).withConfig({
	displayName: "StyledDialog",
	componentId: "sc-x279l-0"
})(responsivePaddingStyle, dialogStyle, responsiveDialogPositionStyle, animationDialogStyle);
var DialogContainer = Mt(Container).withConfig({
	displayName: "DialogContainer",
	componentId: "sc-x279l-1"
})`&:not([hidden]){display:flex;}width:100%;height:100%;flex-direction:column;align-items:center;justify-content:center;`;
var DialogCardRoot = Mt(Card).withConfig({
	displayName: "DialogCardRoot",
	componentId: "sc-x279l-2"
})`&:not([hidden]){display:flex;}width:100%;min-height:0;max-height:100%;overflow:hidden;overflow:clip;`;
var DialogLayout = Mt(Flex).withConfig({
	displayName: "DialogLayout",
	componentId: "sc-x279l-3"
})`flex:1;min-height:0;width:100%;`;
var DialogHeader = Mt(Box).withConfig({
	displayName: "DialogHeader",
	componentId: "sc-x279l-4"
})`position:relative;z-index:2;`;
var DialogContent = Mt(Box).withConfig({
	displayName: "DialogContent",
	componentId: "sc-x279l-5"
})`position:relative;z-index:1;overflow:auto;outline:none;`;
var DialogFooter = Mt(Box).withConfig({
	displayName: "DialogFooter",
	componentId: "sc-x279l-6"
})`position:relative;z-index:3;`;
var DialogCard = (0, import_react.forwardRef)(function DialogCard(props, forwardedRef) {
	let $ = (0, import_dist.c)(44), { __unstable_autoFocus: autoFocus, __unstable_hideCloseButton: hideCloseButton, children, contentRef: forwardedContentRef, footer, header, id, onClickOutside, onClose, portal: portalProp, radius: radiusProp, scheme, shadow: shadowProp, width: widthProp } = props, portal = usePortal(), portalElement = portalProp ? portal.elements?.[portalProp] || null : portal.element, boundaryElement = useBoundaryElement().element, t0;
	$[0] === radiusProp ? t0 = $[1] : (t0 = _getArrayProp(radiusProp), $[0] = radiusProp, $[1] = t0);
	let radius = t0, t1;
	$[2] === shadowProp ? t1 = $[3] : (t1 = _getArrayProp(shadowProp), $[2] = shadowProp, $[3] = t1);
	let shadow = t1, t2;
	$[4] === widthProp ? t2 = $[5] : (t2 = _getArrayProp(widthProp), $[4] = widthProp, $[5] = t2);
	let width = t2, ref = (0, import_react.useRef)(null), contentRef = (0, import_react.useRef)(null), { isTopLayer } = useLayer(), labelId = `${id}_label`, showCloseButton = !!onClose && hideCloseButton === !1, showHeader = !!header || showCloseButton, t3;
	$[6] === Symbol.for("react.memo_cache_sentinel") ? (t3 = () => ref.current, $[6] = t3) : t3 = $[6], (0, import_react.useImperativeHandle)(forwardedRef, t3);
	let t4;
	$[7] === Symbol.for("react.memo_cache_sentinel") ? (t4 = () => contentRef.current, $[7] = t4) : t4 = $[7], (0, import_react.useImperativeHandle)(forwardedContentRef, t4);
	let t5, t6;
	$[8] === autoFocus ? (t5 = $[9], t6 = $[10]) : (t5 = () => {
		autoFocus && ref.current && focusFirstDescendant(ref.current);
	}, t6 = [autoFocus, ref], $[8] = autoFocus, $[9] = t5, $[10] = t6), (0, import_react.useEffect)(t5, t6);
	let t7;
	$[11] !== boundaryElement || $[12] !== isTopLayer || $[13] !== onClose || $[14] !== portalElement ? (t7 = (event) => {
		if (!isTopLayer || !onClose) return;
		let target = document.activeElement;
		target && !isTargetWithinScope(boundaryElement, portalElement, target) || event.key === "Escape" && (event.preventDefault(), event.stopPropagation(), onClose());
	}, $[11] = boundaryElement, $[12] = isTopLayer, $[13] = onClose, $[14] = portalElement, $[15] = t7) : t7 = $[15], useGlobalKeyDown(t7);
	let t8;
	$[16] !== boundaryElement || $[17] !== isTopLayer || $[18] !== onClickOutside || $[19] !== portalElement ? (t8 = isTopLayer && onClickOutside && ((event_0) => {
		let target_0 = event_0.target;
		target_0 && !isTargetWithinScope(boundaryElement, portalElement, target_0) || onClickOutside();
	}), $[16] = boundaryElement, $[17] = isTopLayer, $[18] = onClickOutside, $[19] = portalElement, $[20] = t8) : t8 = $[20];
	let t9;
	$[21] === Symbol.for("react.memo_cache_sentinel") ? (t9 = () => [ref.current], $[21] = t9) : t9 = $[21], useClickOutsideEvent(t8, t9);
	let t10;
	$[22] !== header || $[23] !== labelId || $[24] !== onClose || $[25] !== showCloseButton || $[26] !== showHeader ? (t10 = showHeader && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
		align: "flex-start",
		padding: 3,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
			flex: 1,
			padding: 2,
			children: header && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
				id: labelId,
				size: 1,
				weight: "semibold",
				children: header
			})
		}), showCloseButton && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
			flex: "none",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				"aria-label": "Close dialog",
				disabled: !onClose,
				icon: CloseIcon,
				mode: "bleed",
				onClick: onClose,
				padding: 2
			})
		})]
	}) }), $[22] = header, $[23] = labelId, $[24] = onClose, $[25] = showCloseButton, $[26] = showHeader, $[27] = t10) : t10 = $[27];
	let t11;
	$[28] === children ? t11 = $[29] : (t11 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
		flex: 1,
		ref: contentRef,
		tabIndex: -1,
		children
	}), $[28] = children, $[29] = t11);
	let t12;
	$[30] === footer ? t12 = $[31] : (t12 = footer && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogFooter, { children: footer }), $[30] = footer, $[31] = t12);
	let t13;
	$[32] !== t10 || $[33] !== t11 || $[34] !== t12 ? (t13 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogLayout, {
		direction: "column",
		children: [
			t10,
			t11,
			t12
		]
	}), $[32] = t10, $[33] = t11, $[34] = t12, $[35] = t13) : t13 = $[35];
	let t14;
	$[36] !== radius || $[37] !== scheme || $[38] !== shadow || $[39] !== t13 ? (t14 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogCardRoot, {
		radius,
		ref,
		scheme,
		shadow,
		children: t13
	}), $[36] = radius, $[37] = scheme, $[38] = shadow, $[39] = t13, $[40] = t14) : t14 = $[40];
	let t15;
	return $[41] !== t14 || $[42] !== width ? (t15 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContainer, {
		"data-ui": "DialogCard",
		width,
		children: t14
	}), $[41] = t14, $[42] = width, $[43] = t15) : t15 = $[43], t15;
});
var Dialog = (0, import_react.forwardRef)(function Dialog(props, ref) {
	let $ = (0, import_dist.c)(70), dialog = useDialog(), { layer } = useTheme_v2(), _positionProp, _zOffsetProp, children, contentRef, footer, header, id, onActivate, onClickOutside, onClose, onFocus, portalProp, restProps, scheme, t0, t1, t2, t3, t4, t5, t6;
	$[0] === props ? (_positionProp = $[1], _zOffsetProp = $[2], children = $[3], contentRef = $[4], footer = $[5], header = $[6], id = $[7], onActivate = $[8], onClickOutside = $[9], onClose = $[10], onFocus = $[11], portalProp = $[12], restProps = $[13], scheme = $[14], t0 = $[15], t1 = $[16], t2 = $[17], t3 = $[18], t4 = $[19], t5 = $[20], t6 = $[21]) : ({__unstable_autoFocus: t0, __unstable_hideCloseButton: t1, cardRadius: t2, cardShadow: t3, children, contentRef, footer, header, id, onActivate, onClickOutside, onClose, onFocus, padding: t4, portal: portalProp, position: _positionProp, scheme, width: t5, zOffset: _zOffsetProp, animate: t6, ...restProps} = props, $[0] = props, $[1] = _positionProp, $[2] = _zOffsetProp, $[3] = children, $[4] = contentRef, $[5] = footer, $[6] = header, $[7] = id, $[8] = onActivate, $[9] = onClickOutside, $[10] = onClose, $[11] = onFocus, $[12] = portalProp, $[13] = restProps, $[14] = scheme, $[15] = t0, $[16] = t1, $[17] = t2, $[18] = t3, $[19] = t4, $[20] = t5, $[21] = t6);
	let autoFocus = t0 === void 0 || t0, hideCloseButton = t1 !== void 0 && t1, cardRadiusProp = t2 === void 0 ? 4 : t2, cardShadow = t3 === void 0 ? 3 : t3, paddingProp = t4 === void 0 ? 3 : t4, widthProp = t5 === void 0 ? 0 : t5, _animate = t6 !== void 0 && t6, positionProp = _positionProp ?? (dialog.position || "fixed"), zOffsetProp = _zOffsetProp ?? (dialog.zOffset || layer.dialog.zOffset), animate = !usePrefersReducedMotion() && _animate, portal = usePortal(), portalElement = portalProp ? portal.elements?.[portalProp] || null : portal.element, boundaryElement = useBoundaryElement().element, t7;
	$[22] === cardRadiusProp ? t7 = $[23] : (t7 = _getArrayProp(cardRadiusProp), $[22] = cardRadiusProp, $[23] = t7);
	let cardRadius = t7, t8;
	$[24] === paddingProp ? t8 = $[25] : (t8 = _getArrayProp(paddingProp), $[24] = paddingProp, $[25] = t8);
	let padding = t8, t9;
	$[26] === positionProp ? t9 = $[27] : (t9 = _getArrayProp(positionProp), $[26] = positionProp, $[27] = t9);
	let position = t9, t10;
	$[28] === widthProp ? t10 = $[29] : (t10 = _getArrayProp(widthProp), $[28] = widthProp, $[29] = t10);
	let width = t10, t11;
	$[30] === zOffsetProp ? t11 = $[31] : (t11 = _getArrayProp(zOffsetProp), $[30] = zOffsetProp, $[31] = t11);
	let zOffset = t11, preDivRef = (0, import_react.useRef)(null), postDivRef = (0, import_react.useRef)(null), cardRef = (0, import_react.useRef)(null), focusedElementRef = (0, import_react.useRef)(null), t12;
	$[32] === onFocus ? t12 = $[33] : (t12 = (event) => {
		onFocus?.(event);
		let target = event.target, cardElement = cardRef.current;
		if (cardElement && target === preDivRef.current) {
			focusLastDescendant(cardElement);
			return;
		}
		if (cardElement && target === postDivRef.current) {
			focusFirstDescendant(cardElement);
			return;
		}
		isHTMLElement(event.target) && (focusedElementRef.current = event.target);
	}, $[32] = onFocus, $[33] = t12);
	let handleFocus = t12, labelId = `${id}_label`, rootClickTimeoutRef = (0, import_react.useRef)(void 0), t13;
	$[34] !== boundaryElement || $[35] !== portalElement ? (t13 = () => {
		rootClickTimeoutRef.current && clearTimeout(rootClickTimeoutRef.current), rootClickTimeoutRef.current = setTimeout(() => {
			let activeElement = document.activeElement;
			if (activeElement && !isTargetWithinScope(boundaryElement, portalElement, activeElement)) {
				let target_0 = focusedElementRef.current;
				if (!target_0 || !document.body.contains(target_0)) {
					let cardElement_0 = cardRef.current;
					cardElement_0 && focusFirstDescendant(cardElement_0);
					return;
				}
				target_0.focus();
			}
		}, 0);
	}, $[34] = boundaryElement, $[35] = portalElement, $[36] = t13) : t13 = $[36];
	let handleRootClick = t13, t14;
	$[37] === Symbol.for("react.memo_cache_sentinel") ? (t14 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: preDivRef,
		tabIndex: 0
	}), $[37] = t14) : t14 = $[37];
	let t15;
	$[38] !== autoFocus || $[39] !== cardRadius || $[40] !== cardShadow || $[41] !== children || $[42] !== contentRef || $[43] !== footer || $[44] !== header || $[45] !== hideCloseButton || $[46] !== id || $[47] !== onClickOutside || $[48] !== onClose || $[49] !== portalProp || $[50] !== scheme || $[51] !== width ? (t15 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogCard, {
		__unstable_autoFocus: autoFocus,
		__unstable_hideCloseButton: hideCloseButton,
		contentRef,
		footer,
		header,
		id,
		onClickOutside,
		onClose,
		portal: portalProp,
		radius: cardRadius,
		ref: cardRef,
		scheme,
		shadow: cardShadow,
		width,
		children
	}), $[38] = autoFocus, $[39] = cardRadius, $[40] = cardShadow, $[41] = children, $[42] = contentRef, $[43] = footer, $[44] = header, $[45] = hideCloseButton, $[46] = id, $[47] = onClickOutside, $[48] = onClose, $[49] = portalProp, $[50] = scheme, $[51] = width, $[52] = t15) : t15 = $[52];
	let t16;
	$[53] === Symbol.for("react.memo_cache_sentinel") ? (t16 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: postDivRef,
		tabIndex: 0
	}), $[53] = t16) : t16 = $[53];
	let t17;
	$[54] !== animate || $[55] !== handleFocus || $[56] !== handleRootClick || $[57] !== id || $[58] !== labelId || $[59] !== onActivate || $[60] !== padding || $[61] !== position || $[62] !== ref || $[63] !== restProps || $[64] !== t15 || $[65] !== zOffset ? (t17 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StyledDialog, {
		...restProps,
		$animate: animate,
		$padding: padding,
		$position: position,
		"aria-labelledby": labelId,
		"aria-modal": !0,
		"data-ui": "Dialog",
		id,
		onActivate,
		onClick: handleRootClick,
		onFocus: handleFocus,
		ref,
		role: "dialog",
		zOffset,
		children: [
			t14,
			t15,
			t16
		]
	}), $[54] = animate, $[55] = handleFocus, $[56] = handleRootClick, $[57] = id, $[58] = labelId, $[59] = onActivate, $[60] = padding, $[61] = position, $[62] = ref, $[63] = restProps, $[64] = t15, $[65] = zOffset, $[66] = t17) : t17 = $[66];
	let t18;
	return $[67] !== portalProp || $[68] !== t17 ? (t18 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, {
		__unstable_name: portalProp,
		children: t17
	}), $[67] = portalProp, $[68] = t17, $[69] = t18) : t18 = $[69], t18;
});
/**
* This API might change. DO NOT USE IN PRODUCTION.
* @beta
*/
function DialogProvider(props) {
	let $ = (0, import_dist.c)(6), { children, position, zOffset } = props, t0;
	$[0] !== position || $[1] !== zOffset ? (t0 = {
		version: 0,
		position,
		zOffset
	}, $[0] = position, $[1] = zOffset, $[2] = t0) : t0 = $[2];
	let contextValue = t0, t1;
	return $[3] !== children || $[4] !== contextValue ? (t1 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContext.Provider, {
		value: contextValue,
		children
	}), $[3] = children, $[4] = contextValue, $[5] = t1) : t1 = $[5], t1;
}
/**
* The `MenuButton` component follows the WAI-ARIA specification for menu buttons.
*
* @public
*/
var MenuButton = (0, import_react.forwardRef)(function MenuButton(props, forwardedRef) {
	let $ = (0, import_dist.c)(62), { __unstable_disableRestoreFocusOnClose: t0, boundaryElement: deprecated_boundaryElement, button: buttonProp, id, menu: menuProp, onClose, onOpen, placement: deprecated_placement, popoverScheme: deprecated_popoverScheme, portal: t1, popover, popoverRadius: deprecated_popoverRadius, preventOverflow: deprecated_preventOverflow } = props, disableRestoreFocusOnClose = t0 !== void 0 && t0, deprecated_portal = t1 === void 0 || t1, [open, setOpen] = (0, import_react.useState)(!1), [shouldFocus, setShouldFocus] = (0, import_react.useState)(null), [buttonElement, setButtonElement] = (0, import_react.useState)(null), t2;
	$[0] === Symbol.for("react.memo_cache_sentinel") ? (t2 = [], $[0] = t2) : t2 = $[0];
	let [menuElements, setChildMenuElements] = (0, import_react.useState)(t2), openRef = (0, import_react.useRef)(open), t3, t4;
	$[1] !== onOpen || $[2] !== open ? (t3 = () => {
		onOpen && open && !openRef.current && onOpen();
	}, t4 = [onOpen, open], $[1] = onOpen, $[2] = open, $[3] = t3, $[4] = t4) : (t3 = $[3], t4 = $[4]), (0, import_react.useEffect)(t3, t4);
	let t5, t6;
	$[5] !== onClose || $[6] !== open ? (t5 = () => {
		onClose && !open && openRef.current && onClose();
	}, t6 = [onClose, open], $[5] = onClose, $[6] = open, $[7] = t5, $[8] = t6) : (t5 = $[7], t6 = $[8]), (0, import_react.useEffect)(t5, t6);
	let t7, t8;
	$[9] === open ? (t7 = $[10], t8 = $[11]) : (t7 = () => {
		openRef.current = open;
	}, t8 = [open], $[9] = open, $[10] = t7, $[11] = t8), (0, import_react.useEffect)(t7, t8);
	let t9;
	$[12] === Symbol.for("react.memo_cache_sentinel") ? (t9 = () => {
		setOpen(_temp$4), setShouldFocus(null);
	}, $[12] = t9) : t9 = $[12];
	let handleButtonClick = t9, t10;
	$[13] === open ? t10 = $[14] : (t10 = (event) => {
		open && event.preventDefault();
	}, $[13] = open, $[14] = t10);
	let handleMouseDown = t10, t11;
	$[15] === Symbol.for("react.memo_cache_sentinel") ? (t11 = (event_0) => {
		if (event_0.key === "ArrowDown" || event_0.key === "Enter" || event_0.key === " ") {
			event_0.preventDefault(), setOpen(!0), setShouldFocus("first");
			return;
		}
		if (event_0.key === "ArrowUp") {
			event_0.preventDefault(), setOpen(!0), setShouldFocus("last");
			return;
		}
	}, $[15] = t11) : t11 = $[15];
	let handleButtonKeyDown = t11, t12;
	$[16] !== buttonElement || $[17] !== menuElements ? (t12 = (event_1) => {
		let target = event_1.target;
		if (target instanceof Node && !(buttonElement && (target === buttonElement || buttonElement.contains(target)))) {
			for (let el of menuElements) if (target === el || el.contains(target)) return;
			setOpen(!1);
		}
	}, $[16] = buttonElement, $[17] = menuElements, $[18] = t12) : t12 = $[18];
	let handleMenuClickOutside = t12, t13;
	$[19] !== buttonElement || $[20] !== disableRestoreFocusOnClose ? (t13 = () => {
		setOpen(!1), !disableRestoreFocusOnClose && buttonElement && buttonElement.focus();
	}, $[19] = buttonElement, $[20] = disableRestoreFocusOnClose, $[21] = t13) : t13 = $[21];
	let handleMenuEscape = t13, t14;
	$[22] === menuElements ? t14 = $[23] : (t14 = (event_2) => {
		let target_0 = event_2.relatedTarget;
		if (target_0 instanceof Node) {
			for (let el_0 of menuElements) if (el_0 === target_0 || el_0.contains(target_0)) return;
			setOpen(!1);
		}
	}, $[22] = menuElements, $[23] = t14);
	let handleBlur = t14, t15;
	$[24] !== buttonElement || $[25] !== disableRestoreFocusOnClose ? (t15 = () => {
		setOpen(!1), !disableRestoreFocusOnClose && buttonElement && buttonElement.focus();
	}, $[24] = buttonElement, $[25] = disableRestoreFocusOnClose, $[26] = t15) : t15 = $[26];
	let handleItemClick = t15, t16;
	$[27] === Symbol.for("react.memo_cache_sentinel") ? (t16 = (el_1) => (setChildMenuElements((els) => els.concat([el_1])), () => setChildMenuElements((els_0) => els_0.filter((_el) => _el !== el_1))), $[27] = t16) : t16 = $[27];
	let registerElement = t16, t17;
	$[28] !== buttonElement || $[29] !== handleBlur || $[30] !== handleItemClick || $[31] !== handleMenuClickOutside || $[32] !== handleMenuEscape || $[33] !== id || $[34] !== menuProp || $[35] !== shouldFocus ? (t17 = menuProp && (0, import_react.cloneElement)(menuProp, {
		"aria-labelledby": id,
		onBlurCapture: handleBlur,
		onClickOutside: handleMenuClickOutside,
		onEscape: handleMenuEscape,
		onItemClick: handleItemClick,
		originElement: buttonElement,
		registerElement,
		shouldFocus
	}), $[28] = buttonElement, $[29] = handleBlur, $[30] = handleItemClick, $[31] = handleMenuClickOutside, $[32] = handleMenuEscape, $[33] = id, $[34] = menuProp, $[35] = shouldFocus, $[36] = t17) : t17 = $[36];
	let menu = t17, t18;
	$[37] !== buttonProp || $[38] !== handleMouseDown || $[39] !== id || $[40] !== open ? (t18 = buttonProp && (0, import_react.cloneElement)(buttonProp, {
		"data-ui": "MenuButton",
		id,
		onClick: handleButtonClick,
		onKeyDown: handleButtonKeyDown,
		onMouseDown: handleMouseDown,
		"aria-haspopup": !0,
		"aria-expanded": open,
		ref: setButtonElement,
		selected: buttonProp.props.selected ?? open
	}), $[37] = buttonProp, $[38] = handleMouseDown, $[39] = id, $[40] = open, $[41] = t18) : t18 = $[41];
	let button = t18, t19, t20;
	$[42] === buttonElement ? (t19 = $[43], t20 = $[44]) : (t19 = () => buttonElement, t20 = [buttonElement], $[42] = buttonElement, $[43] = t19, $[44] = t20), (0, import_react.useImperativeHandle)(forwardedRef, t19, t20);
	let t21;
	$[45] === popover ? t21 = $[46] : (t21 = popover || {}, $[45] = popover, $[46] = t21);
	let t22;
	$[47] !== deprecated_boundaryElement || $[48] !== deprecated_placement || $[49] !== deprecated_popoverRadius || $[50] !== deprecated_popoverScheme || $[51] !== deprecated_portal || $[52] !== deprecated_preventOverflow || $[53] !== t21 ? (t22 = {
		boundaryElement: deprecated_boundaryElement,
		overflow: "auto",
		placement: deprecated_placement,
		portal: deprecated_portal,
		preventOverflow: deprecated_preventOverflow,
		radius: deprecated_popoverRadius,
		scheme: deprecated_popoverScheme,
		...t21
	}, $[47] = deprecated_boundaryElement, $[48] = deprecated_placement, $[49] = deprecated_popoverRadius, $[50] = deprecated_popoverScheme, $[51] = deprecated_portal, $[52] = deprecated_preventOverflow, $[53] = t21, $[54] = t22) : t22 = $[54];
	let popoverProps = t22, t23;
	$[55] === button ? t23 = $[56] : (t23 = button || /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {}), $[55] = button, $[56] = t23);
	let t24;
	return $[57] !== menu || $[58] !== open || $[59] !== popoverProps || $[60] !== t23 ? (t24 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Popover, {
		"data-ui": "MenuButton__popover",
		...popoverProps,
		content: menu,
		open,
		children: t23
	}), $[57] = menu, $[58] = open, $[59] = popoverProps, $[60] = t23, $[61] = t24) : t24 = $[61], t24;
});
function _temp$4(v) {
	return !v;
}
var keyframe = Ut`0%{background-position:100%;}100%{background-position:-100%;}`;
var animation = jt`background-image:linear-gradient( to right,var(--card-skeleton-color-from),var(--card-skeleton-color-to),var(--card-skeleton-color-from),var(--card-skeleton-color-from),var(--card-skeleton-color-from) );background-position:100%;background-size:200% 100%;background-attachment:fixed;animation-name:${keyframe};animation-timing-function:ease-in-out;animation-iteration-count:infinite;animation-duration:2000ms;`;
var skeletonStyle = jt`opacity:${({ $visible }) => +!!$visible};transition:opacity 200ms ease-in;@media screen and (prefers-reduced-motion:no-preference){${({ $animated }) => $animated ? animation : jt`background-color:var(--card-skeleton-color-from);`}}@media screen and (prefers-reduced-motion:reduce){background-color:var(--card-skeleton-color-from);}`;
var StyledSkeleton$1 = /* @__PURE__ */ Mt(Box).withConfig({
	displayName: "StyledSkeleton",
	componentId: "sc-6p2gkd-0"
})(responsiveRadiusStyle, skeletonStyle);
var Skeleton = (0, import_react.forwardRef)(function Skeleton(props, ref) {
	let $ = (0, import_dist.c)(16), delay, radius, restProps, t0;
	$[0] === props ? (delay = $[1], radius = $[2], restProps = $[3], t0 = $[4]) : ({animated: t0, delay, radius, ...restProps} = props, $[0] = props, $[1] = delay, $[2] = radius, $[3] = restProps, $[4] = t0);
	let animated = t0 !== void 0 && t0, [visible, setVisible] = (0, import_react.useState)(!delay), t1, t2;
	$[5] === delay ? (t1 = $[6], t2 = $[7]) : (t1 = () => {
		if (!delay) return;
		let timeout = setTimeout(() => {
			setVisible(!0);
		}, delay);
		return () => {
			clearTimeout(timeout);
		};
	}, t2 = [delay], $[5] = delay, $[6] = t1, $[7] = t2), (0, import_react.useEffect)(t1, t2);
	let t3;
	$[8] === radius ? t3 = $[9] : (t3 = _getArrayProp(radius), $[8] = radius, $[9] = t3);
	let t4 = !delay || visible, t5;
	return $[10] !== animated || $[11] !== ref || $[12] !== restProps || $[13] !== t3 || $[14] !== t4 ? (t5 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledSkeleton$1, {
		...restProps,
		$animated: animated,
		$radius: t3,
		$visible: t4,
		ref
	}), $[10] = animated, $[11] = ref, $[12] = restProps, $[13] = t3, $[14] = t4, $[15] = t5) : t5 = $[15], t5;
});
var StyledSkeleton = /* @__PURE__ */ Mt(Skeleton).withConfig({
	displayName: "StyledSkeleton",
	componentId: "sc-ilblpm-0"
})((props) => {
	let { $size, $style } = props, { font, media } = getTheme_v2(props.theme), fontStyle = font[$style];
	return _responsive(media, $size, (sizeIndex) => {
		let fontSize = fontStyle.sizes[sizeIndex];
		return { height: fontSize.lineHeight - fontSize.ascenderHeight - fontSize.descenderHeight };
	});
});
var TextSkeleton = (0, import_react.forwardRef)(function TextSkeleton(props, ref) {
	let $ = (0, import_dist.c)(9), restProps, t0;
	$[0] === props ? (restProps = $[1], t0 = $[2]) : ({size: t0, ...restProps} = props, $[0] = props, $[1] = restProps, $[2] = t0);
	let size = t0 === void 0 ? 2 : t0, t1;
	$[3] === size ? t1 = $[4] : (t1 = _getArrayProp(size), $[3] = size, $[4] = t1);
	let $size = t1, t2;
	return $[5] !== $size || $[6] !== ref || $[7] !== restProps ? (t2 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledSkeleton, {
		...restProps,
		$size,
		ref,
		$style: "text"
	}), $[5] = $size, $[6] = ref, $[7] = restProps, $[8] = t2) : t2 = $[8], t2;
});
(0, import_react.forwardRef)(function LabelSkeleton(props, ref) {
	let $ = (0, import_dist.c)(9), restProps, t0;
	$[0] === props ? (restProps = $[1], t0 = $[2]) : ({size: t0, ...restProps} = props, $[0] = props, $[1] = restProps, $[2] = t0);
	let size = t0 === void 0 ? 2 : t0, t1;
	$[3] === size ? t1 = $[4] : (t1 = _getArrayProp(size), $[3] = size, $[4] = t1);
	let $size = t1, t2;
	return $[5] !== $size || $[6] !== ref || $[7] !== restProps ? (t2 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledSkeleton, {
		...restProps,
		$size,
		ref,
		$style: "label"
	}), $[5] = $size, $[6] = ref, $[7] = restProps, $[8] = t2) : t2 = $[8], t2;
});
(0, import_react.forwardRef)(function HeadingSkeleton(props, ref) {
	let $ = (0, import_dist.c)(9), restProps, t0;
	$[0] === props ? (restProps = $[1], t0 = $[2]) : ({size: t0, ...restProps} = props, $[0] = props, $[1] = restProps, $[2] = t0);
	let size = t0 === void 0 ? 2 : t0, t1;
	$[3] === size ? t1 = $[4] : (t1 = _getArrayProp(size), $[3] = size, $[4] = t1);
	let $size = t1, t2;
	return $[5] !== $size || $[6] !== ref || $[7] !== restProps ? (t2 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledSkeleton, {
		...restProps,
		$size,
		ref,
		$style: "heading"
	}), $[5] = $size, $[6] = ref, $[7] = restProps, $[8] = t2) : t2 = $[8], t2;
});
(0, import_react.forwardRef)(function CodeSkeleton(props, ref) {
	let $ = (0, import_dist.c)(9), restProps, t0;
	$[0] === props ? (restProps = $[1], t0 = $[2]) : ({size: t0, ...restProps} = props, $[0] = props, $[1] = restProps, $[2] = t0);
	let size = t0 === void 0 ? 2 : t0, t1;
	$[3] === size ? t1 = $[4] : (t1 = _getArrayProp(size), $[3] = size, $[4] = t1);
	let $size = t1, t2;
	return $[5] !== $size || $[6] !== ref || $[7] !== restProps ? (t2 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledSkeleton, {
		...restProps,
		$size,
		ref,
		$style: "code"
	}), $[5] = $size, $[6] = ref, $[7] = restProps, $[8] = t2) : t2 = $[8], t2;
});
var TabPanel = (0, import_react.forwardRef)(function TabPanel(props, ref) {
	let $ = (0, import_dist.c)(9), flex, restProps;
	$[0] === props ? (flex = $[1], restProps = $[2]) : ({flex, ...restProps} = props, $[0] = props, $[1] = flex, $[2] = restProps);
	let t0 = props.tabIndex === void 0 ? 0 : props.tabIndex, t1;
	return $[3] !== flex || $[4] !== props.children || $[5] !== ref || $[6] !== restProps || $[7] !== t0 ? (t1 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
		"data-ui": "TabPanel",
		...restProps,
		flex,
		ref,
		role: "tabpanel",
		tabIndex: t0,
		children: props.children
	}), $[3] = flex, $[4] = props.children, $[5] = ref, $[6] = restProps, $[7] = t0, $[8] = t1) : t1 = $[8], t1;
});
var STATUS_CARD_TONE = {
	error: "critical",
	warning: "caution",
	success: "positive",
	info: "neutral"
};
var BUTTON_TONE = {
	error: "critical",
	warning: "caution",
	success: "positive",
	info: "neutral"
};
var TextBox = Mt(Flex).withConfig({
	displayName: "TextBox",
	componentId: "sc-xd2ehd-0"
})`overflow-x:auto;`;
var StyledToast = Mt(Card).withConfig({
	displayName: "StyledToast",
	componentId: "sc-xd2ehd-1"
})`pointer-events:all;width:100%;position:relative;overflow:hidden;overflow:clip;&[data-has-duration]{padding-bottom:calc(${2}px / 2);}`;
var LoadingBar = Mt.div.withConfig({
	displayName: "LoadingBar",
	componentId: "sc-xd2ehd-2"
})`display:flex;position:absolute;bottom:0px;top:0px;left:0px;right:0px;pointer-events:none;z-index:-1;overflow:hidden;overflow:clip;background:transparent;align-items:flex-end;will-change:opacity;`;
var LoadingBarMask = Mt(Card).withConfig({
	displayName: "LoadingBarMask",
	componentId: "sc-xd2ehd-3"
})`position:absolute;top:0;left:-${2}px;right:-${2}px;bottom:${2}px;z-index:1;`;
var LoadingBarProgress = Mt(Card).withConfig({
	displayName: "LoadingBarProgress",
	componentId: "sc-xd2ehd-4"
})`display:block;height:100%;width:100%;transform-origin:0% 50%;background-color:${(props) => {
	let { color } = getTheme_v2(props.theme);
	return color.button.default[props.tone].enabled.bg;
}};`;
var ROLES = {
	error: "alert",
	warning: "alert",
	success: "alert",
	info: "alert"
};
/**
* The `Toast` component gives feedback to users when an action has taken place.
*
* Toasts can be closed with a close button, or auto-dismiss after a certain timeout.
*
* @public
*/
function Toast(props) {
	let $ = (0, import_dist.c)(50), closable, description, duration, onClose, restProps, status, t0, title, updatedAt;
	$[0] === props ? (closable = $[1], description = $[2], duration = $[3], onClose = $[4], restProps = $[5], status = $[6], t0 = $[7], title = $[8], updatedAt = $[9]) : ({closable, description, duration, onClose, radius: t0, title, status, updatedAt, ...restProps} = props, $[0] = props, $[1] = closable, $[2] = description, $[3] = duration, $[4] = onClose, $[5] = restProps, $[6] = status, $[7] = t0, $[8] = title, $[9] = updatedAt);
	let radius = t0 === void 0 ? 3 : t0, cardTone = status ? STATUS_CARD_TONE[status] : "default", buttonTone = status ? BUTTON_TONE[status] : "default", role = status ? ROLES[status] : "status", visualDuration = usePrefersReducedMotion() ? 0 : .26, t1;
	$[10] === visualDuration ? t1 = $[11] : (t1 = visualDuration ? {
		type: "spring",
		visualDuration,
		bounce: .25
	} : { duration: 0 }, $[10] = visualDuration, $[11] = t1);
	let transition = t1, hasDuration = duration && isFinite(duration) && duration < 20736e5, t2;
	$[12] === Symbol.for("react.memo_cache_sentinel") ? (t2 = ["hidden", "initial"], $[12] = t2) : t2 = $[12];
	let initial = t2, t3;
	$[13] === Symbol.for("react.memo_cache_sentinel") ? (t3 = ["visible", "slideIn"], $[13] = t3) : t3 = $[13];
	let animate = t3, t4;
	$[14] === Symbol.for("react.memo_cache_sentinel") ? (t4 = ["hidden", "slideOut"], $[14] = t4) : t4 = $[14];
	let exit = t4, t5 = hasDuration ? "" : void 0, t6;
	$[15] === title ? t6 = $[16] : (t6 = title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
		size: 1,
		weight: "medium",
		children: title
	}), $[15] = title, $[16] = t6);
	let t7;
	$[17] !== description || $[18] !== transition ? (t7 = description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MotionText, {
		muted: !0,
		size: 1,
		variants: content,
		transition,
		children: description
	}), $[17] = description, $[18] = transition, $[19] = t7) : t7 = $[19];
	let t8;
	$[20] !== t6 || $[21] !== t7 ? (t8 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextBox, {
		flex: 1,
		padding: 3,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Stack, {
			gap: 3,
			children: [t6, t7]
		})
	}), $[20] = t6, $[21] = t7, $[22] = t8) : t8 = $[22];
	let t9;
	$[23] !== buttonTone || $[24] !== closable || $[25] !== onClose ? (t9 = closable && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
		padding: 1,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			as: "button",
			icon: CloseIcon,
			mode: "bleed",
			padding: 2,
			tone: buttonTone,
			onClick: onClose,
			style: { verticalAlign: "top" }
		})
	}), $[23] = buttonTone, $[24] = closable, $[25] = onClose, $[26] = t9) : t9 = $[26];
	let t10;
	$[27] !== t8 || $[28] !== t9 || $[29] !== transition ? (t10 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MotionFlex, {
		align: "flex-start",
		variants: content,
		transition,
		children: [t8, t9]
	}), $[27] = t8, $[28] = t9, $[29] = transition, $[30] = t10) : t10 = $[30];
	let t11;
	$[31] !== cardTone || $[32] !== duration || $[33] !== hasDuration || $[34] !== onClose || $[35] !== radius || $[36] !== transition || $[37] !== updatedAt || $[38] !== visualDuration ? (t11 = hasDuration && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MotionLoadingBar, {
		variants: content,
		transition,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingBarMask, {
			tone: cardTone,
			radius
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MotionLoadingBarProgress, {
			tone: cardTone,
			initial: { scaleX: 0 },
			animate: { scaleX: 1 },
			transition: {
				delay: visualDuration,
				duration: duration / 1e3,
				ease: "linear"
			},
			onAnimationComplete: onClose
		}, `progress-${updatedAt}`)]
	}), $[31] = cardTone, $[32] = duration, $[33] = hasDuration, $[34] = onClose, $[35] = radius, $[36] = transition, $[37] = updatedAt, $[38] = visualDuration, $[39] = t11) : t11 = $[39];
	let t12;
	return $[40] !== cardTone || $[41] !== radius || $[42] !== restProps || $[43] !== role || $[44] !== t10 || $[45] !== t11 || $[46] !== t5 || $[47] !== transition || $[48] !== visualDuration ? (t12 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MotionToast, {
		"data-ui": "Toast",
		role,
		...restProps,
		"data-has-duration": t5,
		custom: visualDuration,
		radius,
		shadow: 2,
		tone: cardTone,
		forwardedAs: "li",
		layout: "position",
		variants: container,
		initial,
		animate,
		exit,
		transition,
		children: [t10, t11]
	}), $[40] = cardTone, $[41] = radius, $[42] = restProps, $[43] = role, $[44] = t10, $[45] = t11, $[46] = t5, $[47] = transition, $[48] = visualDuration, $[49] = t12) : t12 = $[49], t12;
}
var container = {
	initial: {
		y: 32,
		scale: .5,
		zIndex: 1
	},
	hidden: { opacity: 0 },
	visible: (visualDuration) => visualDuration ? {
		opacity: 1,
		transition: {
			when: "beforeChildren",
			delayChildren: stagger(visualDuration / 3),
			duration: visualDuration / 3
		}
	} : { opacity: 1 },
	slideIn: {
		y: 0,
		scale: 1
	},
	slideOut: {
		zIndex: 0,
		scale: .75
	}
};
var content = {
	initial: { willChange: "transform" },
	hidden: { opacity: 0 },
	visible: { opacity: 1 }
};
var MotionToast = motion.create(StyledToast);
var MotionFlex = motion.create(Flex);
var MotionText = motion.create(Text);
var MotionLoadingBar = motion.create(LoadingBar);
var MotionLoadingBarProgress = motion.create(LoadingBarProgress);
/**
* Some components should only render after mounting to the DOM, and not be rendered at all during SSR renderToString or equivalent.
* @public
*/
function useMounted() {
	return (0, import_react.useSyncExternalStore)(subscribe, _temp$3, _temp2);
}
function _temp2() {
	return !1;
}
function _temp$3() {
	return !0;
}
var subscribe = () => () => {};
var ToastContext = createGlobalScopedContext("@sanity/ui/context/toast", null);
/**
* @internal
*/
function ToastLayer(props) {
	let $ = (0, import_dist.c)(9), { children, padding: t0, paddingX, paddingY, gap: t1 } = props, padding = t0 === void 0 ? 4 : t0, gap = t1 === void 0 ? 3 : t1, { zIndex } = useLayer(), t2;
	$[0] === zIndex ? t2 = $[1] : (t2 = { zIndex }, $[0] = zIndex, $[1] = t2);
	let t3;
	return $[2] !== children || $[3] !== gap || $[4] !== padding || $[5] !== paddingX || $[6] !== paddingY || $[7] !== t2 ? (t3 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledLayer, {
		forwardedAs: "ul",
		"data-ui": "ToastProvider",
		padding,
		paddingX,
		paddingY,
		gap,
		columns: 1,
		style: t2,
		children
	}), $[2] = children, $[3] = gap, $[4] = padding, $[5] = paddingX, $[6] = paddingY, $[7] = t2, $[8] = t3) : t3 = $[8], t3;
}
var StyledLayer = Mt(Grid).withConfig({
	displayName: "StyledLayer",
	componentId: "sc-vx00k8-0"
})`box-sizing:border-box;position:fixed;right:0;bottom:0;list-style:none;pointer-events:none;max-width:420px;width:100%;`;
var toastId = 0;
/** @internal */
function generateToastId() {
	return String(toastId++);
}
/**
* @public
*/
function ToastProvider(props) {
	let $ = (0, import_dist.c)(13), { children, padding, paddingX, paddingY, gap, zOffset: t0 } = props, zOffset = t0 === void 0 ? 1 : t0, t1;
	$[0] === Symbol.for("react.memo_cache_sentinel") ? (t1 = [], $[0] = t1) : t1 = $[0];
	let [state, setState] = (0, import_react.useState)(t1), mounted = useMounted(), t2;
	if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
		let push = (params) => {
			let id = params.id || generateToastId(), duration = params.duration || 5e3;
			return (0, import_react.startTransition)(() => {
				setState((prevState) => {
					if (duration === .01) return prevState.filter((toast) => toast.id !== id);
					let dismiss = () => (0, import_react.startTransition)(() => setState((currentState) => currentState.filter((toast_0) => toast_0.id !== id)));
					return [...prevState.filter((toast_1) => toast_1.id !== id), {
						dismiss,
						id,
						updatedAt: Date.now(),
						params: {
							...params,
							duration
						}
					}];
				});
			}), id;
		};
		t2 = {
			version: 0,
			push
		}, $[1] = t2;
	} else t2 = $[1];
	let value = t2, t3;
	$[2] !== gap || $[3] !== mounted || $[4] !== padding || $[5] !== paddingX || $[6] !== paddingY || $[7] !== state || $[8] !== zOffset ? (t3 = mounted && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayerProvider, {
		zOffset,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToastLayer, {
			padding,
			paddingX,
			paddingY,
			gap,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				initial: !1,
				mode: "popLayout",
				children: state.map(_temp$2)
			})
		})
	}), $[2] = gap, $[3] = mounted, $[4] = padding, $[5] = paddingX, $[6] = paddingY, $[7] = state, $[8] = zOffset, $[9] = t3) : t3 = $[9];
	let t4;
	return $[10] !== children || $[11] !== t3 ? (t4 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ToastContext.Provider, {
		value,
		children: [children, t3]
	}), $[10] = children, $[11] = t3, $[12] = t4) : t4 = $[12], t4;
}
function _temp$2(t0) {
	let { dismiss: dismiss_0, id: id_0, params: params_0, updatedAt } = t0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toast, {
		closable: params_0.closable,
		description: params_0.description,
		onClose: dismiss_0,
		status: params_0.status,
		title: params_0.title,
		duration: params_0.duration,
		updatedAt
	}, id_0);
}
/**
* @public
*/
function useToast() {
	let value = (0, import_react.useContext)(ToastContext);
	if (!value) throw Error("useToast(): missing context value");
	if (!isRecord(value) || value.version !== 0) throw Error("useToast(): the context value is not compatible");
	return value;
}
function _findPrevItemElement(state, itemElements, focusedElement) {
	let idx = itemElements.indexOf(focusedElement), els = itemElements.slice(0, idx), len = els.length;
	for (let i = len - 1; i >= 0; --i) {
		let itemKey = els[i].getAttribute("data-tree-key");
		if (!itemKey) continue;
		let segments = itemKey.split("/");
		segments.pop();
		let p = [], expanded = !0;
		for (let j = 0; j < segments.length; j += 1) if (p.push(segments[j]), !state[p.join("/")]?.expanded) {
			expanded = !1;
			break;
		}
		if (expanded) return els[i];
	}
	return null;
}
function _findNextItemElement(state, itemElements, focusedElement) {
	let idx = itemElements.indexOf(focusedElement), els = itemElements.slice(idx), len = itemElements.length;
	for (let i = 1; i < len; i += 1) {
		if (!els[i]) continue;
		let itemKey = els[i].getAttribute("data-tree-key");
		if (!itemKey) continue;
		let segments = itemKey.split("/");
		segments.pop();
		let p = [], expanded = !0;
		for (let j = 0; j < segments.length; j += 1) if (p.push(segments[j]), !state[p.join("/")]?.expanded) {
			expanded = !1;
			break;
		}
		if (expanded) return els[i];
	}
	return null;
}
function _focusItemElement(el) {
	if (el.getAttribute("role") === "treeitem" && el.focus(), el.getAttribute("role") === "none") {
		let firstChild = el.firstChild;
		firstChild && firstChild instanceof HTMLElement && firstChild.focus();
	}
}
/**
* @internal
*/
var TreeContext = createGlobalScopedContext("@sanity/ui/context/tree", null);
(0, import_react.forwardRef)(function Tree(props, forwardedRef) {
	let $ = (0, import_dist.c)(38), children, gap, onFocus, restProps, t0;
	$[0] === props ? (children = $[1], gap = $[2], onFocus = $[3], restProps = $[4], t0 = $[5]) : ({children, gap, space: t0, onFocus, ...restProps} = props, $[0] = props, $[1] = children, $[2] = gap, $[3] = onFocus, $[4] = restProps, $[5] = t0);
	let spacing = gap === void 0 ? t0 === void 0 ? 1 : t0 : gap, ref = (0, import_react.useRef)(null), [focusedElement, setFocusedElement] = (0, import_react.useState)(null), focusedElementRef = (0, import_react.useRef)(focusedElement), t1;
	$[6] === Symbol.for("react.memo_cache_sentinel") ? (t1 = [], $[6] = t1) : t1 = $[6];
	let path = t1, t2;
	$[7] === Symbol.for("react.memo_cache_sentinel") ? (t2 = [], $[7] = t2) : t2 = $[7];
	let [itemElements, setItemElements] = (0, import_react.useState)(t2), t3;
	$[8] === Symbol.for("react.memo_cache_sentinel") ? (t3 = {}, $[8] = t3) : t3 = $[8];
	let [state, setState] = (0, import_react.useState)(t3), stateRef = (0, import_react.useRef)(state), t4;
	$[9] === Symbol.for("react.memo_cache_sentinel") ? (t4 = () => ref.current, $[9] = t4) : t4 = $[9], (0, import_react.useImperativeHandle)(forwardedRef, t4);
	let t5, t6;
	$[10] === focusedElement ? (t5 = $[11], t6 = $[12]) : (t5 = () => {
		focusedElementRef.current = focusedElement;
	}, t6 = [focusedElement], $[10] = focusedElement, $[11] = t5, $[12] = t6), (0, import_react.useEffect)(t5, t6);
	let t7, t8;
	$[13] === state ? (t7 = $[14], t8 = $[15]) : (t7 = () => {
		stateRef.current = state;
	}, t8 = [state], $[13] = state, $[14] = t7, $[15] = t8), (0, import_react.useEffect)(t7, t8);
	let t9;
	$[16] === Symbol.for("react.memo_cache_sentinel") ? (t9 = (element, path_0, expanded, selected) => (setState((s) => ({
		...s,
		[path_0]: {
			element,
			expanded
		}
	})), selected && setFocusedElement(element), () => {
		setState((s_0) => {
			let newState = { ...s_0 };
			return delete newState[path_0], newState;
		});
	}), $[16] = t9) : t9 = $[16];
	let registerItem = t9, t10;
	$[17] === Symbol.for("react.memo_cache_sentinel") ? (t10 = (path_1, expanded_0) => {
		setState((s_1) => {
			let itemState = s_1[path_1];
			return itemState ? {
				...s_1,
				[path_1]: {
					...itemState,
					expanded: expanded_0
				}
			} : s_1;
		});
	}, $[17] = t10) : t10 = $[17];
	let setExpanded = t10, t11 = focusedElement || itemElements[0] || null, t12;
	$[18] !== spacing || $[19] !== state || $[20] !== t11 ? (t12 = {
		version: 0,
		focusedElement: t11,
		level: 0,
		path,
		registerItem,
		setExpanded,
		setFocusedElement,
		gap: spacing,
		space: spacing,
		state
	}, $[18] = spacing, $[19] = state, $[20] = t11, $[21] = t12) : t12 = $[21];
	let contextValue = t12, t13;
	$[22] === itemElements ? t13 = $[23] : (t13 = (event) => {
		if (focusedElementRef.current) {
			if (event.key === "ArrowDown") {
				event.preventDefault();
				let nextEl = _findNextItemElement(stateRef.current, itemElements, focusedElementRef.current);
				nextEl && (_focusItemElement(nextEl), setFocusedElement(nextEl));
				return;
			}
			if (event.key === "ArrowUp") {
				event.preventDefault();
				let prevEl = _findPrevItemElement(stateRef.current, itemElements, focusedElementRef.current);
				prevEl && (_focusItemElement(prevEl), setFocusedElement(prevEl));
				return;
			}
			if (event.key === "ArrowLeft") {
				event.preventDefault();
				let itemKey = focusedElementRef.current.getAttribute("data-tree-key");
				if (!itemKey) return;
				let itemState_0 = stateRef.current[itemKey];
				if (!itemState_0) return;
				if (itemState_0.expanded) setState((s_2) => {
					let itemState_1 = s_2[itemKey];
					return itemState_1 ? {
						...s_2,
						[itemKey]: {
							...itemState_1,
							expanded: !1
						}
					} : s_2;
				});
				else {
					let itemPath = itemKey.split("/");
					itemPath.pop();
					let parentKey = itemPath.join("/"), parentState = parentKey && stateRef.current[parentKey];
					parentState && (parentState.element.focus(), setFocusedElement(parentState.element));
				}
				return;
			}
			if (event.key === "ArrowRight") {
				event.preventDefault();
				let focusedKey = focusedElementRef.current.getAttribute("data-tree-key");
				if (!focusedKey) return;
				stateRef.current[focusedKey]?.expanded || setState((s_3) => {
					let itemState_2 = s_3[focusedKey];
					return itemState_2 ? {
						...s_3,
						[focusedKey]: {
							...itemState_2,
							expanded: !0
						}
					} : s_3;
				});
				return;
			}
		}
	}, $[22] = itemElements, $[23] = t13);
	let handleKeyDown = t13, t14;
	$[24] === onFocus ? t14 = $[25] : (t14 = (event_0) => {
		setFocusedElement(event_0.target), onFocus?.(event_0);
	}, $[24] = onFocus, $[25] = t14);
	let handleFocus = t14, t15;
	$[26] === Symbol.for("react.memo_cache_sentinel") ? (t15 = () => {
		if (!ref.current) return;
		let _itemElements = Array.from(ref.current.querySelectorAll("[data-ui=\"TreeItem\"]"));
		setItemElements(_itemElements);
	}, $[26] = t15) : t15 = $[26];
	let t16;
	$[27] === children ? t16 = $[28] : (t16 = [children], $[27] = children, $[28] = t16), (0, import_react.useEffect)(t15, t16);
	let t17;
	$[29] !== children || $[30] !== handleFocus || $[31] !== handleKeyDown || $[32] !== restProps || $[33] !== spacing ? (t17 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stack, {
		as: "ul",
		"data-ui": "Tree",
		...restProps,
		onFocus: handleFocus,
		onKeyDown: handleKeyDown,
		ref,
		role: "tree",
		gap: spacing,
		children
	}), $[29] = children, $[30] = handleFocus, $[31] = handleKeyDown, $[32] = restProps, $[33] = spacing, $[34] = t17) : t17 = $[34];
	let t18;
	return $[35] !== contextValue || $[36] !== t17 ? (t18 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TreeContext.Provider, {
		value: contextValue,
		children: t17
	}), $[35] = contextValue, $[36] = t17, $[37] = t18) : t18 = $[37], t18;
});
Mt(Text).withConfig({
	displayName: "ToggleArrowText",
	componentId: "sc-qnd0f7-2"
})`& > svg{transition:transform 100ms;}`;
/**
* @internal
*/
function _isScrollable(el) {
	if (!(el instanceof Element)) return !1;
	let style = window.getComputedStyle(el);
	return style.overflowX.includes("auto") || style.overflowX.includes("scroll") || style.overflowY.includes("auto") || style.overflowY.includes("scroll");
}
/**
* @deprecated instead of `useArrayProp(width)` use `Array.isArray(width) ? width : [width]` instead
* @beta
*/
function useArrayProp(val, defaultVal) {
	let $ = (0, import_dist.c)(3), t0;
	return $[0] !== defaultVal || $[1] !== val ? (t0 = _getArrayProp(val, defaultVal), $[0] = defaultVal, $[1] = val, $[2] = t0) : t0 = $[2], t0;
}
/**
* Subscribe to the rect of a DOM element.
* @beta
*
* @deprecated Use `useElementSize` instead
*/
function useElementRect(element) {
	return useElementSize(element)?._contentRect || null;
}
/**
* Get responsive CSS for the `label` font style.
* @internal
*/
function responsiveLabelFont(props) {
	return responsiveFont("label", props);
}
function labelBaseStyle(props) {
	let { $accent, $muted } = props, { font } = getTheme_v2(props.theme);
	return jt`text-transform:uppercase;${$accent && jt`color:var(--card-accent-fg-color);`} ${$muted && jt`color:var(--card-muted-fg-color);`} & code{font-family:${font.code.family};border-radius:1px;}& a{text-decoration:none;border-radius:1px;}& svg{display:inline;}& [data-sanity-icon]{vertical-align:baseline;}`;
}
var StyledLabel = /* @__PURE__ */ Mt.div.withConfig({
	displayName: "StyledLabel",
	componentId: "sc-6qcmll-0"
})(responsiveLabelFont, responsiveTextAlignStyle, labelBaseStyle);
var Label = (0, import_react.forwardRef)(function Label(props, ref) {
	let $ = (0, import_dist.c)(26), accent, align, childrenProp, restProps, t0, t1, textOverflow, weight;
	$[0] === props ? (accent = $[1], align = $[2], childrenProp = $[3], restProps = $[4], t0 = $[5], t1 = $[6], textOverflow = $[7], weight = $[8]) : ({accent, align, children: childrenProp, muted: t0, size: t1, textOverflow, weight, ...restProps} = props, $[0] = props, $[1] = accent, $[2] = align, $[3] = childrenProp, $[4] = restProps, $[5] = t0, $[6] = t1, $[7] = textOverflow, $[8] = weight);
	let muted = t0 !== void 0 && t0, size = t1 === void 0 ? 2 : t1, children = childrenProp;
	if (textOverflow === "ellipsis") {
		let t2;
		$[9] === children ? t2 = $[10] : (t2 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpanWithTextOverflow, { children }), $[9] = children, $[10] = t2), children = t2;
	} else {
		let t2;
		$[11] === children ? t2 = $[12] : (t2 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children }), $[11] = children, $[12] = t2), children = t2;
	}
	let t2;
	$[13] === align ? t2 = $[14] : (t2 = _getArrayProp(align), $[13] = align, $[14] = t2);
	let t3;
	$[15] === size ? t3 = $[16] : (t3 = _getArrayProp(size), $[15] = size, $[16] = t3);
	let t4;
	return $[17] !== accent || $[18] !== children || $[19] !== muted || $[20] !== ref || $[21] !== restProps || $[22] !== t2 || $[23] !== t3 || $[24] !== weight ? (t4 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledLabel, {
		"data-ui": "Label",
		...restProps,
		$accent: accent,
		$align: t2,
		$muted: muted,
		$size: t3,
		$weight: weight,
		ref,
		children
	}), $[17] = accent, $[18] = children, $[19] = muted, $[20] = ref, $[21] = restProps, $[22] = t2, $[23] = t3, $[24] = weight, $[25] = t4) : t4 = $[25], t4;
});
var avatarStyle = {
	root: avatarRootStyle,
	arrow: avatarArrowStyle,
	bgStroke: avatarBgStrokeStyle,
	stroke: avatarStrokeStyle,
	initials: avatarInitialsStyle,
	image: avatarImageStyle
};
function avatarArrowStyle() {
	return {
		position: "absolute",
		boxSizing: "border-box",
		zIndex: "0",
		opacity: "0",
		transition: "all 0.2s linear",
		transform: "rotate(-90deg) translate3d(0, 6px, 0)",
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		"& > svg": {
			width: "11px",
			height: "7px",
			position: "absolute",
			top: "-5px",
			left: "50%",
			transform: "translateX(-6px)",
			"&:not([hidden])": { display: "block" }
		},
		"[data-arrow-position='inside'] > &": {
			transform: "rotate(-90deg) translate3d(0, 6px, 0)",
			opacity: "0"
		},
		"[data-arrow-position='top'] > &": {
			opacity: "1",
			transform: "rotate(0deg)"
		},
		"[data-arrow-position='bottom'] > &": {
			opacity: "1",
			transform: "rotate(-180deg)"
		}
	};
}
function avatarRootStyle(props) {
	let { $color } = props, { avatar } = getTheme_v2(props.theme);
	return {
		"--avatar-bg-color": `var(--card-avatar-${$color}-bg-color)`,
		"--avatar-fg-color": `var(--card-avatar-${$color}-fg-color)`,
		backgroundColor: "var(--avatar-bg-color)",
		position: "relative",
		boxSizing: "border-box",
		userSelect: "none",
		boxShadow: "0 0 0 1px var(--card-bg-color)",
		"&[data-status=\"inactive\"]": { opacity: "0.5" },
		"&>svg": { "&:not([hidden])": { display: "block" } },
		"&[data-as=\"button\"]": {
			WebkitFontSmoothing: "inherit",
			appearance: "none",
			margin: 0,
			padding: 0,
			border: 0,
			font: "inherit",
			color: "inherit",
			outline: "none",
			"&:focus": { boxShadow: focusRingStyle({ focusRing: avatar.focusRing }) },
			"&:focus:not(:focus-visible)": { boxShadow: "none" }
		}
	};
}
function responsiveAvatarSizeStyle(props) {
	let { avatar, media } = getTheme_v2(props.theme);
	return _responsive(media, props.$size, (size) => {
		let avatarSize = avatar.sizes[size] || avatar.sizes[0];
		return {
			width: rem(avatarSize.size),
			height: rem(avatarSize.size),
			borderRadius: rem(avatarSize.size / 2),
			"&>svg": {
				width: rem(avatarSize.size),
				height: rem(avatarSize.size),
				borderRadius: rem(avatarSize.size / 2)
			}
		};
	});
}
function avatarImageStyle() {
	return { position: "relative" };
}
function avatarInitialsStyle() {
	return {
		width: "100%",
		height: "100%",
		color: "var(--avatar-fg-color)",
		alignItems: "center",
		justifyContent: "center",
		textTransform: "uppercase",
		textAlign: "center",
		borderRadius: "50%",
		"&:not([hidden])": { display: "flex" }
	};
}
function avatarBgStrokeStyle() {
	return {
		strokeWidth: "4px",
		stroke: "var(--card-bg-color)"
	};
}
function avatarStrokeStyle() {
	return {
		strokeWidth: "2px",
		stroke: "var(--avatar-bg-color)",
		"[data-status=\"editing\"] &": {
			strokeDasharray: "2 4",
			strokeLinecap: "round"
		}
	};
}
var StyledAvatar = /* @__PURE__ */ Mt.div.withConfig({
	displayName: "StyledAvatar",
	componentId: "sc-hfmugy-0"
})(responsiveAvatarSizeStyle, avatarStyle.root);
var Arrow$1 = /* @__PURE__ */ Mt.div.withConfig({
	displayName: "Arrow",
	componentId: "sc-hfmugy-1"
})(avatarStyle.arrow);
var BgStroke = /* @__PURE__ */ Mt.ellipse.withConfig({
	displayName: "BgStroke",
	componentId: "sc-hfmugy-2"
})(avatarStyle.bgStroke);
var Stroke = /* @__PURE__ */ Mt.ellipse.withConfig({
	displayName: "Stroke",
	componentId: "sc-hfmugy-3"
})(avatarStyle.stroke);
var Initials = /* @__PURE__ */ Mt.div.withConfig({
	displayName: "Initials",
	componentId: "sc-hfmugy-4"
})(avatarStyle.initials);
var InitialsLabel = /* @__PURE__ */ Mt(Label).withConfig({
	displayName: "InitialsLabel",
	componentId: "sc-hfmugy-5"
})({ color: "inherit" });
var AvatarImage = /* @__PURE__ */ Mt.svg.withConfig({
	displayName: "AvatarImage",
	componentId: "sc-hfmugy-6"
})(avatarStyle.image);
var Avatar = (0, import_react.forwardRef)(function Avatar(props, ref) {
	let $ = (0, import_dist.c)(46), __unstable_hideInnerStroke, animateArrowFrom, arrowPositionProp, asProp, initials, onImageLoadError, restProps, src, t0, t1, t2, title;
	$[0] === props ? (__unstable_hideInnerStroke = $[1], animateArrowFrom = $[2], arrowPositionProp = $[3], asProp = $[4], initials = $[5], onImageLoadError = $[6], restProps = $[7], src = $[8], t0 = $[9], t1 = $[10], t2 = $[11], title = $[12]) : ({__unstable_hideInnerStroke, as: asProp, color: t0, src, title, initials, onImageLoadError, arrowPosition: arrowPositionProp, animateArrowFrom, status: t1, size: t2, ...restProps} = props, $[0] = props, $[1] = __unstable_hideInnerStroke, $[2] = animateArrowFrom, $[3] = arrowPositionProp, $[4] = asProp, $[5] = initials, $[6] = onImageLoadError, $[7] = restProps, $[8] = src, $[9] = t0, $[10] = t1, $[11] = t2, $[12] = title);
	let color = t0 === void 0 ? "gray" : t0, status = t1 === void 0 ? "online" : t1, sizeProp = t2 === void 0 ? 1 : t2, { avatar } = useTheme_v2(), as = import_react_is.isValidElementType(asProp) ? asProp : "div", size = _getArrayProp(sizeProp), _sizeRem = (avatar.sizes[size[0]] || avatar.sizes[0]).size, _radius = _sizeRem / 2, elementId = (0, import_react.useId)(), [arrowPosition, setArrowPosition] = (0, import_react.useState)(animateArrowFrom || arrowPositionProp || "inside"), [imageFailed, setImageFailed] = (0, import_react.useState)(!1), imageId = `avatar-image-${elementId}`, t3, t4;
	$[13] !== arrowPosition || $[14] !== arrowPositionProp ? (t3 = () => {
		if (arrowPosition === arrowPositionProp) return;
		let raf = requestAnimationFrame(() => setArrowPosition(arrowPositionProp));
		return () => cancelAnimationFrame(raf);
	}, t4 = [arrowPosition, arrowPositionProp], $[13] = arrowPosition, $[14] = arrowPositionProp, $[15] = t3, $[16] = t4) : (t3 = $[15], t4 = $[16]), (0, import_react.useEffect)(t3, t4);
	let t5, t6;
	$[17] === src ? (t5 = $[18], t6 = $[19]) : (t5 = () => {
		src && setImageFailed(!1);
	}, t6 = [src], $[17] = src, $[18] = t5, $[19] = t6), (0, import_react.useEffect)(t5, t6);
	let t7;
	$[20] === onImageLoadError ? t7 = $[21] : (t7 = () => {
		setImageFailed(!0), onImageLoadError && onImageLoadError(/* @__PURE__ */ Error("Avatar: the image failed to load"));
	}, $[20] = onImageLoadError, $[21] = t7);
	let handleImageError = t7, T0 = StyledAvatar, t8 = typeof as == "string" ? as : void 0, t10;
	$[22] === color ? t10 = $[23] : (t10 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow$1, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		width: "11",
		height: "7",
		viewBox: "0 0 11 7",
		fill: "none",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M6.67948 1.50115L11 7L0 7L4.32052 1.50115C4.92109 0.736796 6.07891 0.736795 6.67948 1.50115Z",
			fill: color
		})
	}) }), $[22] = color, $[23] = t10);
	let t11;
	$[24] !== __unstable_hideInnerStroke || $[25] !== _radius || $[26] !== _sizeRem || $[27] !== handleImageError || $[28] !== imageFailed || $[29] !== imageId || $[30] !== src ? (t11 = !imageFailed && src && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AvatarImage, {
		viewBox: `0 0 ${_sizeRem} ${_sizeRem}`,
		fill: "none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pattern", {
				id: imageId,
				patternContentUnits: "objectBoundingBox",
				width: "1",
				height: "1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("image", {
					href: src,
					width: "1",
					height: "1",
					onError: handleImageError
				})
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: _radius,
				cy: _radius,
				r: _radius,
				fill: `url(#${imageId})`
			}),
			!__unstable_hideInnerStroke && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BgStroke, {
				cx: _radius,
				cy: _radius,
				rx: _radius,
				ry: _radius,
				vectorEffect: "non-scaling-stroke"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stroke, {
				cx: _radius,
				cy: _radius,
				rx: _radius,
				ry: _radius,
				vectorEffect: "non-scaling-stroke"
			})
		]
	}), $[24] = __unstable_hideInnerStroke, $[25] = _radius, $[26] = _sizeRem, $[27] = handleImageError, $[28] = imageFailed, $[29] = imageId, $[30] = src, $[31] = t11) : t11 = $[31];
	let t12 = (imageFailed || !src) && initials && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Initials, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InitialsLabel, {
		forwardedAs: "span",
		size: size.map(_temp$1),
		weight: "medium",
		children: initials
	}) }) }), t13;
	return $[32] !== T0 || $[33] !== arrowPosition || $[34] !== as || $[35] !== color || $[36] !== ref || $[37] !== restProps || $[38] !== size || $[39] !== status || $[40] !== t10 || $[41] !== t11 || $[42] !== t12 || $[43] !== t8 || $[44] !== title ? (t13 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(T0, {
		as,
		"data-as": t8,
		"data-ui": "Avatar",
		...restProps,
		$color: color,
		$size: size,
		"aria-label": title,
		"data-arrow-position": arrowPosition,
		"data-status": status,
		ref,
		title,
		children: [
			t10,
			t11,
			t12
		]
	}), $[32] = T0, $[33] = arrowPosition, $[34] = as, $[35] = color, $[36] = ref, $[37] = restProps, $[38] = size, $[39] = status, $[40] = t10, $[41] = t11, $[42] = t12, $[43] = t8, $[44] = title, $[45] = t13) : t13 = $[45], t13;
});
function _temp$1(s) {
	return s === 1 ? 1 : s === 2 ? 3 : s === 3 ? 5 : 0;
}
function _responsiveAvatarCounterSizeStyle(props) {
	let { avatar, media } = getTheme_v2(props.theme);
	return _responsive(media, props.$size, (size) => {
		let avatarSize = avatar.sizes[size];
		return avatarSize ? {
			borderRadius: rem(avatarSize.size / 2),
			minWidth: rem(avatarSize.size),
			height: rem(avatarSize.size)
		} : EMPTY_RECORD;
	});
}
function _avatarCounterBaseStyle(props) {
	let { space } = getTheme_v2(props.theme);
	return jt`align-items:center;justify-content:center;box-sizing:border-box;user-select:none;color:inherit;color:var(--card-fg-color);background:var(--card-bg-color);box-shadow:0 0 0 1px var(--card-bg-color),inset 0 0 0 1px var(--card-hairline-hard-color);padding:0 ${rem(space[2])};&:not([hidden]){display:flex;}`;
}
var StyledAvatarCounter = /* @__PURE__ */ Mt.div.withConfig({
	displayName: "StyledAvatarCounter",
	componentId: "sc-miwe8s-0"
})(_responsiveAvatarCounterSizeStyle, _avatarCounterBaseStyle);
var AvatarCounter = (0, import_react.forwardRef)(function AvatarCounter(props, ref) {
	let $ = (0, import_dist.c)(20), { count, size: t0 } = props, sizeProp = t0 === void 0 ? 1 : t0, T0, T1, t1, t2, t3, t4, t5;
	if ($[0] !== ref || $[1] !== sizeProp) {
		let size = _getArrayProp(sizeProp);
		T1 = StyledAvatarCounter, t3 = size, t4 = "AvatarCounter", t5 = ref, T0 = Label, t1 = "span", t2 = size.map(_temp), $[0] = ref, $[1] = sizeProp, $[2] = T0, $[3] = T1, $[4] = t1, $[5] = t2, $[6] = t3, $[7] = t4, $[8] = t5;
	} else T0 = $[2], T1 = $[3], t1 = $[4], t2 = $[5], t3 = $[6], t4 = $[7], t5 = $[8];
	let t6;
	$[9] !== T0 || $[10] !== count || $[11] !== t1 || $[12] !== t2 ? (t6 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(T0, {
		as: t1,
		size: t2,
		weight: "medium",
		children: count
	}), $[9] = T0, $[10] = count, $[11] = t1, $[12] = t2, $[13] = t6) : t6 = $[13];
	let t7;
	return $[14] !== T1 || $[15] !== t3 || $[16] !== t4 || $[17] !== t5 || $[18] !== t6 ? (t7 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(T1, {
		$size: t3,
		"data-ui": t4,
		ref: t5,
		children: t6
	}), $[14] = T1, $[15] = t3, $[16] = t4, $[17] = t5, $[18] = t6, $[19] = t7) : t7 = $[19], t7;
});
function _temp(s) {
	return s === 1 ? 1 : s === 2 ? 3 : s === 3 ? 5 : 0;
}
var BASE_STYLES = jt`white-space:nowrap;& > div{vertical-align:top;&:not([hidden]){display:inline-block;}}`;
function avatarStackStyle() {
	return BASE_STYLES;
}
function responsiveAvatarStackSizeStyle(props) {
	let { avatar, media } = getTheme_v2(props.theme);
	return _responsive(media, props.$size, (size) => {
		let avatarSize = avatar.sizes[size];
		return avatarSize ? { "& > div + div": { marginLeft: rem(avatarSize.distance) } } : EMPTY_RECORD;
	});
}
var StyledAvatarStack = /* @__PURE__ */ Mt.div.withConfig({
	displayName: "StyledAvatarStack",
	componentId: "sc-m8rww4-0"
})(responsiveAvatarStackSizeStyle, avatarStackStyle);
var AvatarStack = (0, import_react.forwardRef)(function AvatarStack(props, ref) {
	let $ = (0, import_dist.c)(38), childrenProp, restProps, t0, t1;
	$[0] === props ? (childrenProp = $[1], restProps = $[2], t0 = $[3], t1 = $[4]) : ({children: childrenProp, maxLength: t0, size: t1, ...restProps} = props, $[0] = props, $[1] = childrenProp, $[2] = restProps, $[3] = t0, $[4] = t1);
	let maxLengthProp = t0 === void 0 ? 4 : t0, sizeProp = t1 === void 0 ? 1 : t1, T0, t2, t3, t4, t5, t6, t7, t8;
	if ($[5] !== childrenProp || $[6] !== maxLengthProp || $[7] !== ref || $[8] !== restProps || $[9] !== sizeProp) {
		let children = import_react.Children.toArray(childrenProp).filter(import_react.isValidElement), maxLength = Math.max(maxLengthProp, 0), t9;
		$[18] === sizeProp ? t9 = $[19] : (t9 = _getArrayProp(sizeProp), $[18] = sizeProp, $[19] = t9);
		let size = t9, len = children.length, extraCount = len - (maxLength - 1), visibleChildren = extraCount > 1 ? children.slice(extraCount, len) : children;
		T0 = StyledAvatarStack, t2 = "AvatarStack", t3 = restProps, t4 = ref, t5 = size, $[20] !== len || $[21] !== size ? (t6 = len === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarCounter, {
			count: len,
			size
		}) }), $[20] = len, $[21] = size, $[22] = t6) : t6 = $[22], $[23] !== extraCount || $[24] !== len || $[25] !== size ? (t7 = len !== 0 && extraCount > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarCounter, {
			count: extraCount,
			size
		}) }), $[23] = extraCount, $[24] = len, $[25] = size, $[26] = t7) : t7 = $[26];
		let t10;
		$[27] === size ? t10 = $[28] : (t10 = (child, childIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: (0, import_react.cloneElement)(child, { size }) }, String(childIndex)), $[27] = size, $[28] = t10), t8 = visibleChildren.map(t10), $[5] = childrenProp, $[6] = maxLengthProp, $[7] = ref, $[8] = restProps, $[9] = sizeProp, $[10] = T0, $[11] = t2, $[12] = t3, $[13] = t4, $[14] = t5, $[15] = t6, $[16] = t7, $[17] = t8;
	} else T0 = $[10], t2 = $[11], t3 = $[12], t4 = $[13], t5 = $[14], t6 = $[15], t7 = $[16], t8 = $[17];
	let t9;
	return $[29] !== T0 || $[30] !== t2 || $[31] !== t3 || $[32] !== t4 || $[33] !== t5 || $[34] !== t6 || $[35] !== t7 || $[36] !== t8 ? (t9 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(T0, {
		"data-ui": t2,
		...t3,
		ref: t4,
		$size: t5,
		children: [
			t6,
			t7,
			t8
		]
	}), $[29] = T0, $[30] = t2, $[31] = t3, $[32] = t4, $[33] = t5, $[34] = t6, $[35] = t7, $[36] = t8, $[37] = t9) : t9 = $[37], t9;
});
function badgeStyle(props) {
	let { $tone } = props;
	return {
		"--card-bg-color": `var(--card-badge-${$tone}-bg-color)`,
		"--card-fg-color": `var(--card-badge-${$tone}-fg-color)`,
		backgroundColor: "var(--card-bg-color)",
		cursor: "default",
		"&:not([hidden])": {
			display: "inline-block",
			verticalAlign: "top"
		}
	};
}
var StyledBadge = /* @__PURE__ */ Mt(Box).withConfig({
	displayName: "StyledBadge",
	componentId: "sc-4z4hgx-0"
})(responsiveRadiusStyle, badgeStyle);
var Badge = (0, import_react.forwardRef)(function Badge(props, ref) {
	let $ = (0, import_dist.c)(21), children, restProps, t0, t1, t2, t3;
	if ($[0] !== props) {
		let { children: t4, fontSize: t5, mode: _deprecated_mode, padding: t6, radius: t7, tone: t8, ...t9 } = props;
		children = t4, t0 = t5, t1 = t6, t2 = t7, t3 = t8, restProps = t9, $[0] = props, $[1] = children, $[2] = restProps, $[3] = t0, $[4] = t1, $[5] = t2, $[6] = t3;
	} else children = $[1], restProps = $[2], t0 = $[3], t1 = $[4], t2 = $[5], t3 = $[6];
	let fontSize = t0 === void 0 ? 1 : t0, padding = t1 === void 0 ? 1 : t1, radius = t2 === void 0 ? "full" : t2, tone = t3 === void 0 ? "default" : t3, t4;
	$[7] === radius ? t4 = $[8] : (t4 = _getArrayProp(radius), $[7] = radius, $[8] = t4);
	let t5;
	$[9] === padding ? t5 = $[10] : (t5 = _getArrayProp(padding), $[9] = padding, $[10] = t5);
	let t6;
	$[11] !== children || $[12] !== fontSize ? (t6 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
		size: fontSize,
		children
	}), $[11] = children, $[12] = fontSize, $[13] = t6) : t6 = $[13];
	let t7;
	return $[14] !== ref || $[15] !== restProps || $[16] !== t4 || $[17] !== t5 || $[18] !== t6 || $[19] !== tone ? (t7 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledBadge, {
		"data-ui": "Badge",
		...restProps,
		$tone: tone,
		$radius: t4,
		padding: t5,
		ref,
		children: t6
	}), $[14] = ref, $[15] = restProps, $[16] = t4, $[17] = t5, $[18] = t6, $[19] = tone, $[20] = t7) : t7 = $[20], t7;
});
function checkboxBaseStyles() {
	return jt`position:relative;display:inline-block;`;
}
function inputElementStyles(props) {
	let { color, input, radius } = getTheme_v2(props.theme), { focusRing } = input.checkbox;
	return jt`position:absolute;top:0;left:0;width:100%;height:100%;outline:none;opacity:0;z-index:1;padding:0;margin:0;& + span{position:relative;display:block;height:${rem(input.checkbox.size)};width:${rem(input.checkbox.size)};box-sizing:border-box;box-shadow:${focusRingBorderStyle({
		color: color.input.default.enabled.border,
		width: input.border.width
	})};border-radius:${rem(radius[2])};line-height:1;background-color:${color.input.default.enabled.bg};& > svg{display:block;position:absolute;opacity:0;height:100%;width:100%;& > path{vector-effect:non-scaling-stroke;stroke-width:1.5px !important;}}}&:checked + span{background:${color.input.default.enabled.fg};box-shadow:${focusRingBorderStyle({
		color: color.input.default.enabled.fg,
		width: input.border.width
	})};color:${color.input.default.enabled.bg};}&:not(:disabled):focus:focus-visible + span{box-shadow:${focusRingStyle({ focusRing })};}&:not(:disabled):focus:focus-visible&:checked + span{box-shadow:${focusRingStyle({ focusRing: {
		width: 1,
		offset: 1
	} })};}&[data-error] + span{background-color:${color.input.invalid.enabled.border};box-shadow:${focusRingBorderStyle({
		width: input.border.width,
		color: color.input.invalid.enabled.muted.bg
	})};color:${color.input.default.disabled.fg};}&[data-error]&:checked + span{background-color:${color.input.invalid.enabled.muted.bg};color:${color.input.default.enabled.bg};}&[data-error]&:checked&:not(:disabled):focus:focus-visible + span{box-shadow:${focusRingStyle({
		border: {
			width: input.border.width,
			color: color.input.invalid.readOnly.muted.bg
		},
		focusRing: {
			width: 1,
			offset: 1
		}
	})};}&:disabled + span{background-color:${color.input.default.disabled.bg};box-shadow:${focusRingBorderStyle({
		width: input.border.width,
		color: color.input.default.disabled.border
	})};color:${color.input.default.disabled.fg};}&:disabled&:checked + span{background-color:${color.input.default.disabled.muted.bg};}&[data-read-only] + span{background-color:${color.input.default.readOnly.bg};box-shadow:${focusRingBorderStyle({
		width: input.border.width,
		color: color.input.default.readOnly.border
	})};color:${color.input.default.readOnly.fg};}&[data-read-only]&:checked + span{background-color:${color.input.default.readOnly.muted.bg};}&:checked + span > svg:first-child{opacity:1;}&:indeterminate + span > svg:last-child{opacity:1;}`;
}
var StyledCheckbox = /* @__PURE__ */ Mt.div.withConfig({
	displayName: "StyledCheckbox",
	componentId: "sc-33tf77-0"
})(checkboxBaseStyles);
var Input$4 = /* @__PURE__ */ Mt.input.withConfig({
	displayName: "Input",
	componentId: "sc-33tf77-1"
})(inputElementStyles);
var Checkbox = (0, import_react.forwardRef)(function Checkbox(props, forwardedRef) {
	let $ = (0, import_dist.c)(25), checked, className, customValidity, disabled, indeterminate, readOnly, restProps, style;
	$[0] === props ? (checked = $[1], className = $[2], customValidity = $[3], disabled = $[4], indeterminate = $[5], readOnly = $[6], restProps = $[7], style = $[8]) : ({checked, className, disabled, indeterminate, customValidity, readOnly, style, ...restProps} = props, $[0] = props, $[1] = checked, $[2] = className, $[3] = customValidity, $[4] = disabled, $[5] = indeterminate, $[6] = readOnly, $[7] = restProps, $[8] = style);
	let ref = (0, import_react.useRef)(null), t0;
	$[9] === Symbol.for("react.memo_cache_sentinel") ? (t0 = () => ref.current, $[9] = t0) : t0 = $[9], (0, import_react.useImperativeHandle)(forwardedRef, t0);
	let t1, t2;
	$[10] === indeterminate ? (t1 = $[11], t2 = $[12]) : (t1 = () => {
		ref.current && (ref.current.indeterminate = indeterminate || !1);
	}, t2 = [indeterminate], $[10] = indeterminate, $[11] = t1, $[12] = t2), (0, import_react.useEffect)(t1, t2), useCustomValidity(ref, customValidity);
	let t3 = !disabled && readOnly ? "" : void 0, t4 = customValidity ? "" : void 0, t5 = disabled || readOnly, t6;
	$[13] !== checked || $[14] !== readOnly || $[15] !== restProps || $[16] !== t3 || $[17] !== t4 || $[18] !== t5 ? (t6 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$4, {
		"data-read-only": t3,
		"data-error": t4,
		...restProps,
		checked,
		disabled: t5,
		type: "checkbox",
		readOnly,
		ref
	}), $[13] = checked, $[14] = readOnly, $[15] = restProps, $[16] = t3, $[17] = t4, $[18] = t5, $[19] = t6) : t6 = $[19];
	let t7;
	$[20] === Symbol.for("react.memo_cache_sentinel") ? (t7 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckmarkIcon, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RemoveIcon, {})] }), $[20] = t7) : t7 = $[20];
	let t8;
	return $[21] !== className || $[22] !== style || $[23] !== t6 ? (t8 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StyledCheckbox, {
		className,
		"data-ui": "Checkbox",
		style,
		children: [t6, t7]
	}), $[21] = className, $[22] = style, $[23] = t6, $[24] = t8) : t8 = $[24], t8;
});
/**
* Get responsive CSS for the `code` font style.
* @internal
*/
function responsiveCodeFontStyle(props) {
	return responsiveFont("code", props);
}
function codeSyntaxHighlightingStyle({ theme }) {
	let { color: { syntax: color } } = getTheme_v2(theme);
	return {
		"&.atrule": { color: color.atrule },
		"&.attr-name": { color: color.attrName },
		"&.attr-value": { color: color.attrValue },
		"&.attribute": { color: color.attribute },
		"&.boolean": { color: color.boolean },
		"&.builtin": { color: color.builtin },
		"&.cdata": { color: color.cdata },
		"&.char": { color: color.char },
		"&.class": { color: color.class },
		"&.class-name": { color: color.className },
		"&.comment": { color: color.comment },
		"&.constant": { color: color.constant },
		"&.deleted": { color: color.deleted },
		"&.doctype": { color: color.doctype },
		"&.entity": { color: color.entity },
		"&.function": { color: color.function },
		"&.hexcode": { color: color.hexcode },
		"&.id": { color: color.id },
		"&.important": { color: color.important },
		"&.inserted": { color: color.inserted },
		"&.keyword": { color: color.keyword },
		"&.number": { color: color.number },
		"&.operator": { color: color.operator },
		"&.prolog": { color: color.prolog },
		"&.property": { color: color.property },
		"&.pseudo-class": { color: color.pseudoClass },
		"&.pseudo-element": { color: color.pseudoElement },
		"&.punctuation": { color: color.punctuation },
		"&.regex": { color: color.regex },
		"&.selector": { color: color.selector },
		"&.string": { color: color.string },
		"&.symbol": { color: color.symbol },
		"&.tag": { color: color.tag },
		"&.unit": { color: color.unit },
		"&.url": { color: color.url },
		"&.variable": { color: color.variable }
	};
}
function codeBaseStyle() {
	return jt`color:var(--card-code-fg-color);& code{font-family:inherit;&.refractor .token{${codeSyntaxHighlightingStyle}}}& a{color:inherit;text-decoration:underline;border-radius:1px;}& svg{display:inline;}& [data-sanity-icon]{vertical-align:baseline;}`;
}
var LazyRefractor$1 = (0, import_react.lazy)(() => Promise.resolve().then(() => refractor_exports));
var StyledCode = /* @__PURE__ */ Mt.pre.withConfig({
	displayName: "StyledCode",
	componentId: "sc-4i8yh-0"
})(codeBaseStyle, responsiveCodeFontStyle);
var Code = (0, import_react.forwardRef)(function Code(props, ref) {
	let $ = (0, import_dist.c)(22), children, language, restProps, t0, weight;
	$[0] === props ? (children = $[1], language = $[2], restProps = $[3], t0 = $[4], weight = $[5]) : ({children, language, size: t0, weight, ...restProps} = props, $[0] = props, $[1] = children, $[2] = language, $[3] = restProps, $[4] = t0, $[5] = weight);
	let size = t0 === void 0 ? 2 : t0, t1;
	$[6] === size ? t1 = $[7] : (t1 = _getArrayProp(size), $[6] = size, $[7] = t1);
	let t2 = weight, t3;
	$[8] === children ? t3 = $[9] : (t3 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children }), $[8] = children, $[9] = t3);
	let t4;
	$[10] !== children || $[11] !== language ? (t4 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LazyRefractor$1, {
		language,
		value: children
	}), $[10] = children, $[11] = language, $[12] = t4) : t4 = $[12];
	let t5;
	$[13] !== t3 || $[14] !== t4 ? (t5 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
		fallback: t3,
		children: t4
	}), $[13] = t3, $[14] = t4, $[15] = t5) : t5 = $[15];
	let t6;
	return $[16] !== ref || $[17] !== restProps || $[18] !== t1 || $[19] !== t2 || $[20] !== t5 ? (t6 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledCode, {
		"data-ui": "Code",
		...restProps,
		$size: t1,
		$weight: t2,
		ref,
		children: t5
	}), $[16] = ref, $[17] = restProps, $[18] = t1, $[19] = t2, $[20] = t5, $[21] = t6) : t6 = $[21], t6;
});
/**
* Get responsive CSS for the `heading` font style.
* @internal
*/
function responsiveHeadingFont(props) {
	return responsiveFont("heading", props);
}
function headingBaseStyle(props) {
	let { $accent, $muted } = props, { font } = getTheme_v2(props.theme);
	return jt`${$accent && jt`color:var(--card-accent-fg-color);`} ${$muted && jt`color:var(--card-muted-fg-color);`} & code{font-family:${font.code.family};border-radius:1px;}& a{text-decoration:none;border-radius:1px;color:var(--card-link-color);outline:none;@media (hover:hover){&:hover{text-decoration:underline;}}&:focus{box-shadow:0 0 0 1px var(--card-bg-color),0 0 0 3px var(--card-focus-ring-color);}&:focus:not(:focus-visible){box-shadow:none;}}& strong{font-weight:${font.heading.weights.bold};}& svg{display:inline;}& [data-sanity-icon]{vertical-align:baseline;}`;
}
var StyledHeading = /* @__PURE__ */ Mt.div.withConfig({
	displayName: "StyledHeading",
	componentId: "sc-kfxezu-0"
})(headingBaseStyle, responsiveTextAlignStyle, responsiveHeadingFont);
var Heading = (0, import_react.forwardRef)(function Heading(props, ref) {
	let $ = (0, import_dist.c)(26), align, childrenProp, restProps, t0, t1, t2, textOverflow, weight;
	$[0] === props ? (align = $[1], childrenProp = $[2], restProps = $[3], t0 = $[4], t1 = $[5], t2 = $[6], textOverflow = $[7], weight = $[8]) : ({accent: t0, align, children: childrenProp, muted: t1, size: t2, textOverflow, weight, ...restProps} = props, $[0] = props, $[1] = align, $[2] = childrenProp, $[3] = restProps, $[4] = t0, $[5] = t1, $[6] = t2, $[7] = textOverflow, $[8] = weight);
	let accent = t0 !== void 0 && t0, muted = t1 !== void 0 && t1, size = t2 === void 0 ? 2 : t2, children = childrenProp;
	if (textOverflow === "ellipsis") {
		let t3;
		$[9] === children ? t3 = $[10] : (t3 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpanWithTextOverflow, { children }), $[9] = children, $[10] = t3), children = t3;
	}
	let t3;
	$[11] === align ? t3 = $[12] : (t3 = _getArrayProp(align), $[11] = align, $[12] = t3);
	let t4;
	$[13] === size ? t4 = $[14] : (t4 = _getArrayProp(size), $[13] = size, $[14] = t4);
	let t5;
	$[15] === children ? t5 = $[16] : (t5 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children }), $[15] = children, $[16] = t5);
	let t6;
	return $[17] !== accent || $[18] !== muted || $[19] !== ref || $[20] !== restProps || $[21] !== t3 || $[22] !== t4 || $[23] !== t5 || $[24] !== weight ? (t6 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledHeading, {
		"data-ui": "Heading",
		...restProps,
		$accent: accent,
		$align: t3,
		$muted: muted,
		$size: t4,
		$weight: weight,
		ref,
		children: t5
	}), $[17] = accent, $[18] = muted, $[19] = ref, $[20] = restProps, $[21] = t3, $[22] = t4, $[23] = t5, $[24] = weight, $[25] = t6) : t6 = $[25], t6;
});
function radioBaseStyle() {
	return jt`position:relative;&:not([hidden]){display:inline-block;}&[data-read-only]{outline:1px solid red;}`;
}
function inputElementStyle(props) {
	let { color, input } = getTheme_v2(props.theme), dist = (input.radio.size - input.radio.markSize) / 2;
	return jt`appearance:none;position:absolute;top:0;left:0;opacity:0;height:100%;width:100%;outline:none;z-index:1;padding:0;margin:0;border-radius:${rem(input.radio.size / 2)};border:none;& + span{display:block;position:relative;height:${rem(input.radio.size)};width:${rem(input.radio.size)};border-radius:${rem(input.radio.size / 2)};background:${color.input.default.enabled.bg};box-shadow:${focusRingBorderStyle({
		color: color.input.default.enabled.border,
		width: input.border.width
	})};&::after{content:'';position:absolute;top:${rem(dist)};left:${rem(dist)};height:${rem(input.radio.markSize)};width:${rem(input.radio.markSize)};border-radius:${rem(input.radio.markSize / 2)};background:${color.input.default.enabled.fg};opacity:0;}}&:not(:disabled):focus + span{box-shadow:${focusRingStyle({
		border: {
			width: input.border.width,
			color: color.input.default.enabled.border
		},
		focusRing: input.radio.focusRing
	})};}&:not(:disabled):focus:not(:focus-visible) + span{box-shadow:${focusRingBorderStyle({
		color: color.input.default.enabled.border,
		width: input.border.width
	})};}&:checked + span::after{opacity:1;}&[data-error] + span{background-color:${color.input.invalid.enabled.border};box-shadow:${focusRingBorderStyle({
		width: input.border.width,
		color: color.input.invalid.enabled.muted.bg
	})};&::after{background:${color.input.invalid.enabled.muted.bg};}}&[data-read-only] + span{box-shadow:0 0 0 1px ${color.input.default.readOnly.border};background:${color.input.default.readOnly.bg};&::after{background:${color.input.default.readOnly.border};}}&:not([data-read-only]):disabled + span{box-shadow:0 0 0 1px ${color.input.default.disabled.border};background:${color.input.default.disabled.bg};&::after{background:${color.input.default.disabled.border};}}`;
}
var StyledRadio = /* @__PURE__ */ Mt.div.withConfig({
	displayName: "StyledRadio",
	componentId: "sc-f02knx-0"
})(radioBaseStyle);
var Input$3 = /* @__PURE__ */ Mt.input.withConfig({
	displayName: "Input",
	componentId: "sc-f02knx-1"
})(inputElementStyle);
var Radio = (0, import_react.forwardRef)(function Radio(props, forwardedRef) {
	let $ = (0, import_dist.c)(19), className, customValidity, disabled, readOnly, restProps, style;
	$[0] === props ? (className = $[1], customValidity = $[2], disabled = $[3], readOnly = $[4], restProps = $[5], style = $[6]) : ({className, disabled, style, customValidity, readOnly, ...restProps} = props, $[0] = props, $[1] = className, $[2] = customValidity, $[3] = disabled, $[4] = readOnly, $[5] = restProps, $[6] = style);
	let ref = (0, import_react.useRef)(null), t0;
	$[7] === Symbol.for("react.memo_cache_sentinel") ? (t0 = () => ref.current, $[7] = t0) : t0 = $[7], (0, import_react.useImperativeHandle)(forwardedRef, t0), useCustomValidity(ref, customValidity);
	let t1 = !disabled && readOnly ? "" : void 0, t2 = customValidity ? "" : void 0, t3 = disabled || readOnly, t4;
	$[8] !== readOnly || $[9] !== restProps || $[10] !== t1 || $[11] !== t2 || $[12] !== t3 ? (t4 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$3, {
		"data-read-only": t1,
		"data-error": t2,
		...restProps,
		disabled: t3,
		readOnly,
		ref,
		type: "radio"
	}), $[8] = readOnly, $[9] = restProps, $[10] = t1, $[11] = t2, $[12] = t3, $[13] = t4) : t4 = $[13];
	let t5;
	$[14] === Symbol.for("react.memo_cache_sentinel") ? (t5 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), $[14] = t5) : t5 = $[14];
	let t6;
	return $[15] !== className || $[16] !== style || $[17] !== t4 ? (t6 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StyledRadio, {
		className,
		"data-ui": "Radio",
		style,
		children: [t4, t5]
	}), $[15] = className, $[16] = style, $[17] = t4, $[18] = t6) : t6 = $[18], t6;
});
function rootStyle() {
	return jt`position:relative;width:-moz-available;width:-webkit-fill-available;width:stretch;&:not([hidden]){display:inline-block;}`;
}
function inputBaseStyle(props) {
	let { font } = getTheme_v2(props.theme);
	return jt`-webkit-font-smoothing:antialiased;appearance:none;border:0;font-family:${font.text.family};color:inherit;width:100%;outline:none;margin:0;&:disabled{opacity:1;}`;
}
function inputColorStyle(props) {
	let { color, input } = getTheme_v2(props.theme);
	return jt`background-color:${color.input.default.enabled.bg};color:${color.input.default.enabled.fg};box-shadow:${focusRingBorderStyle({
		color: color.input.default.enabled.border,
		width: input.border.width
	})};@media (hover:hover){&:not(:disabled):hover{background-color:${color.input.default.hovered.bg};color:${color.input.default.hovered.fg};box-shadow:${focusRingBorderStyle({
		color: color.input.default.hovered.border,
		width: input.border.width
	})};}}&:not(:disabled):focus{box-shadow:${focusRingStyle({
		border: {
			width: input.border.width,
			color: color.input.default.enabled.border
		},
		focusRing: input.select.focusRing
	})};}&[data-read-only]{background-color:${color.input.default.readOnly.bg};color:${color.input.default.readOnly.fg};box-shadow:${focusRingBorderStyle({
		color: color.input.default.readOnly.border,
		width: input.border.width
	})};}&:not([data-read-only]):disabled{background-color:${color.input.default.disabled.bg};color:${color.input.default.disabled.fg};box-shadow:${focusRingBorderStyle({
		color: color.input.default.disabled.border,
		width: input.border.width
	})};}`;
}
function textSize(size) {
	return {
		fontSize: rem(size.fontSize),
		lineHeight: `${rem(size.lineHeight)}`
	};
}
function inputTextSizeStyle(props) {
	let { $fontSize } = props, { font, media } = getTheme_v2(props.theme);
	return _responsive(media, $fontSize, (sizeIndex) => textSize(font.text.sizes[sizeIndex] || font.text.sizes[2]));
}
function inputStyle() {
	return [
		responsiveRadiusStyle,
		inputBaseStyle,
		inputColorStyle,
		inputTextSizeStyle,
		responsiveInputPaddingIconRightStyle
	];
}
function iconBoxStyle(props) {
	let { color } = getTheme_v2(props.theme);
	return jt`pointer-events:none;position:absolute;top:0;right:0;--card-fg-color:${color.input.default.enabled.fg};@media (hover:hover){select:not(disabled):not(:read-only):hover + &&{--card-fg-color:${color.input.default.hovered.fg};}}select:disabled + &&{--card-fg-color:${color.input.default.disabled.fg};}select[data-read-only] + &&{--card-fg-color:${color.input.default.readOnly.fg};}`;
}
var selectStyle = {
	root: rootStyle,
	input: inputStyle,
	iconBox: iconBoxStyle
};
var StyledSelect = /* @__PURE__ */ Mt.div.withConfig({
	displayName: "StyledSelect",
	componentId: "sc-fjdmul-0"
})(selectStyle.root);
var Input$2 = /* @__PURE__ */ Mt.select.withConfig({
	displayName: "Input",
	componentId: "sc-fjdmul-1"
})(selectStyle.input);
var IconBox = /* @__PURE__ */ Mt(Box).withConfig({
	displayName: "IconBox",
	componentId: "sc-fjdmul-2"
})(selectStyle.iconBox);
var Select = (0, import_react.forwardRef)(function Select(props, forwardedRef) {
	let $ = (0, import_dist.c)(38), children, customValidity, disabled, gap, readOnly, restProps, t0, t1, t2, t3;
	$[0] === props ? (children = $[1], customValidity = $[2], disabled = $[3], gap = $[4], readOnly = $[5], restProps = $[6], t0 = $[7], t1 = $[8], t2 = $[9], t3 = $[10]) : ({children, customValidity, disabled, fontSize: t0, gap, padding: t1, radius: t2, readOnly, space: t3, ...restProps} = props, $[0] = props, $[1] = children, $[2] = customValidity, $[3] = disabled, $[4] = gap, $[5] = readOnly, $[6] = restProps, $[7] = t0, $[8] = t1, $[9] = t2, $[10] = t3);
	let fontSize = t0 === void 0 ? 2 : t0, padding = t1 === void 0 ? 3 : t1, radius = t2 === void 0 ? 2 : t2, spacing = gap === void 0 ? t3 === void 0 ? 3 : t3 : gap, ref = (0, import_react.useRef)(null), t4;
	$[11] === Symbol.for("react.memo_cache_sentinel") ? (t4 = () => ref.current, $[11] = t4) : t4 = $[11], (0, import_react.useImperativeHandle)(forwardedRef, t4), useCustomValidity(ref, customValidity);
	let t5 = !disabled && readOnly ? "" : void 0, t6;
	$[12] === fontSize ? t6 = $[13] : (t6 = _getArrayProp(fontSize), $[12] = fontSize, $[13] = t6);
	let t7;
	$[14] === padding ? t7 = $[15] : (t7 = _getArrayProp(padding), $[14] = padding, $[15] = t7);
	let t8;
	$[16] === radius ? t8 = $[17] : (t8 = _getArrayProp(radius), $[16] = radius, $[17] = t8);
	let t9;
	$[18] === spacing ? t9 = $[19] : (t9 = _getArrayProp(spacing), $[18] = spacing, $[19] = t9);
	let t10 = disabled || readOnly, t11;
	$[20] !== children || $[21] !== restProps || $[22] !== t10 || $[23] !== t5 || $[24] !== t6 || $[25] !== t7 || $[26] !== t8 || $[27] !== t9 ? (t11 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$2, {
		"data-read-only": t5,
		"data-ui": "Select",
		...restProps,
		$fontSize: t6,
		$padding: t7,
		$radius: t8,
		$space: t9,
		disabled: t10,
		ref,
		children
	}), $[20] = children, $[21] = restProps, $[22] = t10, $[23] = t5, $[24] = t6, $[25] = t7, $[26] = t8, $[27] = t9, $[28] = t11) : t11 = $[28];
	let t12;
	$[29] === Symbol.for("react.memo_cache_sentinel") ? (t12 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDownIcon, {}), $[29] = t12) : t12 = $[29];
	let t13;
	$[30] === fontSize ? t13 = $[31] : (t13 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
		size: fontSize,
		children: t12
	}), $[30] = fontSize, $[31] = t13);
	let t14;
	$[32] !== padding || $[33] !== t13 ? (t14 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBox, {
		padding,
		children: t13
	}), $[32] = padding, $[33] = t13, $[34] = t14) : t14 = $[34];
	let t15;
	return $[35] !== t11 || $[36] !== t14 ? (t15 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StyledSelect, {
		"data-ui": "Select",
		children: [t11, t14]
	}), $[35] = t11, $[36] = t14, $[37] = t15) : t15 = $[37], t15;
});
function switchBaseStyles() {
	return jt`position:relative;&:not([hidden]){display:inline-block;}`;
}
function switchInputStyles() {
	return jt`position:absolute;top:0;right:0;bottom:0;left:0;opacity:0;height:100%;width:100%;outline:none;padding:0;margin:0;z-index:1;`;
}
function switchRepresentationStyles(props) {
	let { color, input } = getTheme_v2(props.theme);
	return jt`--switch-bg-color:${color.input.default.enabled.border};--switch-fg-color:${color.input.default.enabled.bg};--switch-box-shadow:none;&:not([hidden]){display:block;}position:relative;width:${rem(input.switch.width)};height:${rem(input.switch.height)};border-radius:${rem(input.switch.height / 2)};pointer-events:none;&:after{content:'';display:block;position:absolute;top:0;left:0;right:0;bottom:0;z-index:1;box-shadow:var(--switch-box-shadow);border-radius:inherit;}input:focus + &&{--switch-box-shadow:${focusRingStyle({ focusRing: input.switch.focusRing })};}input:focus:not(:focus-visible) + &&{--switch-box-shadow:none;}input:checked + &&{--switch-bg-color:${color.input.default.enabled.fg};--switch-fg-color:${color.input.default.enabled.bg};}@media (hover:hover){input:not(:disabled):hover + &&{--switch-bg-color:${color.input.default.hovered.border};--switch-fg-color:${color.input.default.hovered.bg};}input:not(:disabled):checked:hover + &&{--switch-bg-color:${color.input.default.enabled.fg};--switch-fg-color:${color.input.default.enabled.bg};}}input:not([data-read-only]):disabled + &&{--switch-bg-color:${color.input.default.disabled.border};--switch-fg-color:${color.input.default.disabled.bg};}input[data-read-only]:disabled + &&{--switch-bg-color:${color.input.default.readOnly.border};--switch-fg-color:${color.input.default.readOnly.bg};}input:checked[data-read-only]:disabled + &&{--switch-bg-color:${color.input.default.readOnly.fg};--switch-fg-color:${color.input.default.readOnly.bg};}`;
}
function switchTrackStyles(props) {
	let { input } = getTheme_v2(props.theme);
	return jt`&:not([hidden]){display:block;}background-color:var(--switch-bg-color);position:absolute;left:0;top:0;width:${rem(input.switch.width)};height:${rem(input.switch.height)};border-radius:${rem(input.switch.height / 2)};`;
}
function switchThumbStyles(props) {
	let { $indeterminate } = props, { input } = getTheme_v2(props.theme), trackWidth = input.switch.width, trackHeight = input.switch.height, trackPadding = input.switch.padding, size = trackHeight - input.switch.padding * 2, checkedOffset = trackWidth - trackPadding * 2 - size, indeterminateOffset = trackWidth / 2 - size / 2 - trackPadding, checked = $indeterminate !== !0 && props.$checked === !0;
	return jt`&:not([hidden]){display:block;}position:absolute;left:${rem(trackPadding)};top:${rem(trackPadding)};height:${rem(size)};width:${rem(size)};border-radius:${rem(size / 2)};transition-property:transform;transition-duration:${input.switch.transitionDurationMs}ms;transition-timing-function:${input.switch.transitionTimingFunction};background:var(--switch-fg-color);transform:translate3d(0,0,0);box-shadow:0px 1px 0px 0px rgba(0,0,0,0.05);${checked && jt`transform:translate3d(${checkedOffset}px,0,0);`} ${$indeterminate && jt`transform:translate3d(${indeterminateOffset}px,0,0);`}`;
}
var StyledSwitch = /* @__PURE__ */ Mt.span.withConfig({
	displayName: "StyledSwitch",
	componentId: "sc-aod7y9-0"
})(switchBaseStyles);
var Input$1 = /* @__PURE__ */ Mt.input.withConfig({
	displayName: "Input",
	componentId: "sc-aod7y9-1"
})(switchInputStyles);
var Representation = /* @__PURE__ */ Mt.span.withConfig({
	displayName: "Representation",
	componentId: "sc-aod7y9-2"
})(switchRepresentationStyles);
var Track = /* @__PURE__ */ Mt.span.withConfig({
	displayName: "Track",
	componentId: "sc-aod7y9-3"
})(switchTrackStyles);
var Thumb = /* @__PURE__ */ Mt.span.withConfig({
	displayName: "Thumb",
	componentId: "sc-aod7y9-4"
})(switchThumbStyles);
var Switch = (0, import_react.forwardRef)(function Switch(props, forwardedRef) {
	let $ = (0, import_dist.c)(26), checked, className, disabled, indeterminate, readOnly, restProps, style;
	$[0] === props ? (checked = $[1], className = $[2], disabled = $[3], indeterminate = $[4], readOnly = $[5], restProps = $[6], style = $[7]) : ({checked, className, disabled, indeterminate, readOnly, style, ...restProps} = props, $[0] = props, $[1] = checked, $[2] = className, $[3] = disabled, $[4] = indeterminate, $[5] = readOnly, $[6] = restProps, $[7] = style);
	let ref = (0, import_react.useRef)(null), t0;
	$[8] === Symbol.for("react.memo_cache_sentinel") ? (t0 = () => ref.current, $[8] = t0) : t0 = $[8], (0, import_react.useImperativeHandle)(forwardedRef, t0);
	let t1, t2;
	$[9] === indeterminate ? (t1 = $[10], t2 = $[11]) : (t1 = () => {
		ref.current && (ref.current.indeterminate = indeterminate || !1);
	}, t2 = [indeterminate], $[9] = indeterminate, $[10] = t1, $[11] = t2), (0, import_react.useEffect)(t1, t2);
	let t3 = !disabled && readOnly ? "" : void 0, t4 = indeterminate !== !0 && checked, t5 = disabled || readOnly, t6;
	$[12] !== restProps || $[13] !== t3 || $[14] !== t4 || $[15] !== t5 ? (t6 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input$1, {
		"data-read-only": t3,
		...restProps,
		checked: t4,
		disabled: t5,
		type: "checkbox",
		ref
	}), $[12] = restProps, $[13] = t3, $[14] = t4, $[15] = t5, $[16] = t6) : t6 = $[16];
	let t7;
	$[17] === Symbol.for("react.memo_cache_sentinel") ? (t7 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Track, {}), $[17] = t7) : t7 = $[17];
	let t8;
	$[18] !== checked || $[19] !== indeterminate ? (t8 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Representation, {
		"aria-hidden": !0,
		"data-name": "representation",
		children: [t7, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Thumb, {
			$checked: checked,
			$indeterminate: indeterminate
		})]
	}), $[18] = checked, $[19] = indeterminate, $[20] = t8) : t8 = $[20];
	let t9;
	return $[21] !== className || $[22] !== style || $[23] !== t6 || $[24] !== t8 ? (t9 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StyledSwitch, {
		className,
		"data-ui": "Switch",
		style,
		children: [t6, t8]
	}), $[21] = className, $[22] = style, $[23] = t6, $[24] = t8, $[25] = t9) : t9 = $[25], t9;
});
var StyledTextArea = /* @__PURE__ */ Mt.span.withConfig({
	displayName: "StyledTextArea",
	componentId: "sc-ndqkyw-0"
})(textInputRootStyle);
var InputRoot = Mt.span.withConfig({
	displayName: "InputRoot",
	componentId: "sc-ndqkyw-1"
})`flex:1;min-width:0;display:block;position:relative;`;
var Input = /* @__PURE__ */ Mt.textarea.withConfig({
	displayName: "Input",
	componentId: "sc-ndqkyw-2"
})(responsiveInputPaddingStyle, textInputBaseStyle, textInputFontSizeStyle);
var Presentation = /* @__PURE__ */ Mt.div.withConfig({
	displayName: "Presentation",
	componentId: "sc-ndqkyw-3"
})(responsiveRadiusStyle, textInputRepresentationStyle);
var TextArea = (0, import_react.forwardRef)(function TextArea(props, forwardedRef) {
	let $ = (0, import_dist.c)(35), __unstable_disableFocusRing, customValidity, restProps, t0, t1, t2, t3, t4, weight;
	$[0] === props ? (__unstable_disableFocusRing = $[1], customValidity = $[2], restProps = $[3], t0 = $[4], t1 = $[5], t2 = $[6], t3 = $[7], t4 = $[8], weight = $[9]) : ({border: t0, customValidity, disabled: t1, fontSize: t2, padding: t3, radius: t4, weight, __unstable_disableFocusRing, ...restProps} = props, $[0] = props, $[1] = __unstable_disableFocusRing, $[2] = customValidity, $[3] = restProps, $[4] = t0, $[5] = t1, $[6] = t2, $[7] = t3, $[8] = t4, $[9] = weight);
	let border = t0 === void 0 || t0, disabled = t1 !== void 0 && t1, fontSize = t2 === void 0 ? 2 : t2, padding = t3 === void 0 ? 3 : t3, radius = t4 === void 0 ? 2 : t4, ref = (0, import_react.useRef)(null), rootTheme = useRootTheme(), t5;
	$[10] === Symbol.for("react.memo_cache_sentinel") ? (t5 = () => ref.current, $[10] = t5) : t5 = $[10], (0, import_react.useImperativeHandle)(forwardedRef, t5), useCustomValidity(ref, customValidity);
	let t6 = rootTheme.scheme, t7 = rootTheme.tone, t8;
	$[11] === fontSize ? t8 = $[12] : (t8 = _getArrayProp(fontSize), $[11] = fontSize, $[12] = t8);
	let t9;
	$[13] === padding ? t9 = $[14] : (t9 = _getArrayProp(padding), $[13] = padding, $[14] = t9);
	let t10 = rootTheme.scheme, t11;
	$[15] === Symbol.for("react.memo_cache_sentinel") ? (t11 = _getArrayProp(0), $[15] = t11) : t11 = $[15];
	let t12;
	$[16] !== disabled || $[17] !== restProps || $[18] !== rootTheme.scheme || $[19] !== rootTheme.tone || $[20] !== t8 || $[21] !== t9 || $[22] !== weight ? (t12 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
		"data-as": "textarea",
		"data-scheme": t6,
		"data-tone": t7,
		...restProps,
		$fontSize: t8,
		$padding: t9,
		$scheme: t10,
		$space: t11,
		$tone: rootTheme.tone,
		$weight: weight,
		disabled,
		ref
	}), $[16] = disabled, $[17] = restProps, $[18] = rootTheme.scheme, $[19] = rootTheme.tone, $[20] = t8, $[21] = t9, $[22] = weight, $[23] = t12) : t12 = $[23];
	let t13;
	$[24] === radius ? t13 = $[25] : (t13 = _getArrayProp(radius), $[24] = radius, $[25] = t13);
	let t14 = border ? "" : void 0, t15;
	$[26] !== __unstable_disableFocusRing || $[27] !== rootTheme.scheme || $[28] !== rootTheme.tone || $[29] !== t13 || $[30] !== t14 ? (t15 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presentation, {
		$radius: t13,
		$unstableDisableFocusRing: __unstable_disableFocusRing,
		$scheme: rootTheme.scheme,
		$tone: rootTheme.tone,
		"data-border": t14,
		"data-scheme": rootTheme.scheme,
		"data-tone": rootTheme.tone
	}), $[26] = __unstable_disableFocusRing, $[27] = rootTheme.scheme, $[28] = rootTheme.tone, $[29] = t13, $[30] = t14, $[31] = t15) : t15 = $[31];
	let t16;
	return $[32] !== t12 || $[33] !== t15 ? (t16 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledTextArea, {
		"data-ui": "TextArea",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(InputRoot, { children: [t12, t15] })
	}), $[32] = t12, $[33] = t15, $[34] = t16) : t16 = $[34], t16;
});
/**
* @public
* Provides context for a group of tooltip elements that should share a delay
* which temporarily becomes 1 ms after the first floating element of the group opens.
*/
function TooltipDelayGroupProvider(props) {
	let $ = (0, import_dist.c)(9), { children, delay } = props, [isGroupActive, setIsGroupActive] = useDelayedState(!1), [openTooltipId, setOpenTooltipId] = useDelayedState(null), openDelay = typeof delay == "number" ? delay : delay?.open || 0, closeDelay = typeof delay == "number" ? delay : delay?.close || 0, t0 = isGroupActive ? 1 : openDelay, t1;
	$[0] !== closeDelay || $[1] !== openTooltipId || $[2] !== setIsGroupActive || $[3] !== setOpenTooltipId || $[4] !== t0 ? (t1 = {
		setIsGroupActive,
		openTooltipId,
		setOpenTooltipId,
		openDelay: t0,
		closeDelay
	}, $[0] = closeDelay, $[1] = openTooltipId, $[2] = setIsGroupActive, $[3] = setOpenTooltipId, $[4] = t0, $[5] = t1) : t1 = $[5];
	let value = t1, t2;
	return $[6] !== children || $[7] !== value ? (t2 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipDelayGroupContext.Provider, {
		value,
		children
	}), $[6] = children, $[7] = value, $[8] = t2) : t2 = $[8], t2;
}
/**
* @public
*/
function BoundaryElementProvider(props) {
	let $ = (0, import_dist.c)(5), { children, element } = props, t0;
	$[0] === element ? t0 = $[1] : (t0 = {
		version: 0,
		element
	}, $[0] = element, $[1] = t0);
	let value = t0, t1;
	return $[2] !== children || $[3] !== value ? (t1 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BoundaryElementContext.Provider, {
		value,
		children
	}), $[2] = children, $[3] = value, $[4] = t1) : t1 = $[4], t1;
}
function findMaxBreakpoints(media, width) {
	let ret = [];
	for (let i = 0; i < media.length; i += 1) media[i] > width && ret.push(i);
	return ret;
}
function findMinBreakpoints(media, width) {
	let ret = [];
	for (let i = 0; i < media.length; i += 1) media[i] <= width && ret.push(i);
	return ret;
}
/**
* DO NOT USE IN PRODUCTION.
* @beta
*/
var ElementQuery = (0, import_react.forwardRef)(function ElementQuery(props, forwardedRef) {
	let $ = (0, import_dist.c)(18), theme = useTheme_v2(), _media, children, restProps;
	$[0] === props ? (_media = $[1], children = $[2], restProps = $[3]) : ({children, media: _media, ...restProps} = props, $[0] = props, $[1] = _media, $[2] = children, $[3] = restProps);
	let media = _media ?? theme.media, [element, setElement] = (0, import_react.useState)(null), width = useElementSize(element)?.border.width ?? window.innerWidth, t0;
	if ($[4] !== media || $[5] !== width) {
		let eq = findMaxBreakpoints(media, width);
		t0 = eq.length ? eq.join(" ") : void 0, $[4] = media, $[5] = width, $[6] = t0;
	} else t0 = $[6];
	let max = t0, t1;
	if ($[7] !== media || $[8] !== width) {
		let eq_0 = findMinBreakpoints(media, width);
		t1 = eq_0.length ? eq_0.join(" ") : void 0, $[7] = media, $[8] = width, $[9] = t1;
	} else t1 = $[9];
	let min = t1, t2, t3;
	$[10] === element ? (t2 = $[11], t3 = $[12]) : (t2 = () => element, t3 = [element], $[10] = element, $[11] = t2, $[12] = t3), (0, import_react.useImperativeHandle)(forwardedRef, t2, t3);
	let t4;
	return $[13] !== children || $[14] !== max || $[15] !== min || $[16] !== restProps ? (t4 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-ui": "ElementQuery",
		...restProps,
		"data-eq-max": max,
		"data-eq-min": min,
		ref: setElement,
		children
	}), $[13] = children, $[14] = max, $[15] = min, $[16] = restProps, $[17] = t4) : t4 = $[17], t4;
});
/**
* DO NOT USE IN PRODUCTION
* @beta
*/
var ErrorBoundary = class extends import_react.Component {
	state = { error: null };
	static getDerivedStateFromError(error) {
		return { error };
	}
	componentDidCatch(error, info) {
		this.props.onCatch({
			error,
			info
		});
	}
	render() {
		let { error } = this.state;
		if (error) {
			let message = typeof error?.message == "string" ? error.message : "Error";
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, { children: message });
		}
		return this.props.children;
	}
};
var StyledSrOnly = Mt.div.withConfig({
	displayName: "StyledSrOnly",
	componentId: "sc-ow9exq-0"
})`display:block;width:0;height:0;position:absolute;overflow:hidden;overflow:clip;`;
(0, import_react.forwardRef)(function SrOnly(props, ref) {
	let $ = (0, import_dist.c)(4), { as, children } = props, t0;
	return $[0] !== as || $[1] !== children || $[2] !== ref ? (t0 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledSrOnly, {
		"aria-hidden": !0,
		as,
		"data-ui": "SrOnly",
		ref,
		children
	}), $[0] = as, $[1] = children, $[2] = ref, $[3] = t0) : t0 = $[3], t0;
});
var StyledVirtualList = Mt.div.withConfig({
	displayName: "StyledVirtualList",
	componentId: "sc-xt8qd-0"
})`position:relative;`;
var ItemWrapper = Mt.div.withConfig({
	displayName: "ItemWrapper",
	componentId: "sc-xt8qd-1"
})`position:absolute;left:0;right:0;`;
var VirtualList = (0, import_react.forwardRef)(function VirtualList(props, forwardedRef) {
	let $ = (0, import_dist.c)(44), getItemKey, onChange, renderItem, restProps, t0, t1, t2;
	$[0] === props ? (getItemKey = $[1], onChange = $[2], renderItem = $[3], restProps = $[4], t0 = $[5], t1 = $[6], t2 = $[7]) : ({as: t0, gap: t1, getItemKey, items: t2, onChange, renderItem, ...restProps} = props, $[0] = props, $[1] = getItemKey, $[2] = onChange, $[3] = renderItem, $[4] = restProps, $[5] = t0, $[6] = t1, $[7] = t2);
	let as = t0 === void 0 ? "div" : t0, gap = t1 === void 0 ? 0 : t1, t3;
	$[8] === t2 ? t3 = $[9] : (t3 = t2 === void 0 ? [] : t2, $[8] = t2, $[9] = t3);
	let items = t3, { space } = useTheme_v2(), ref = (0, import_react.useRef)(null), wrapperRef = (0, import_react.useRef)(null), [scrollTop, setScrollTop] = (0, import_react.useState)(0), [scrollHeight, setScrollHeight] = (0, import_react.useState)(0), [itemHeight, setItemHeight] = (0, import_react.useState)(-1), t4;
	$[10] === Symbol.for("react.memo_cache_sentinel") ? (t4 = () => ref.current, $[10] = t4) : t4 = $[10], (0, import_react.useImperativeHandle)(forwardedRef, t4);
	let t5;
	$[11] === Symbol.for("react.memo_cache_sentinel") ? (t5 = () => {
		if (!wrapperRef.current) return;
		let firstElement = wrapperRef.current.firstChild;
		firstElement instanceof HTMLElement && setItemHeight(firstElement.offsetHeight);
	}, $[11] = t5) : t5 = $[11];
	let t6;
	$[12] === renderItem ? t6 = $[13] : (t6 = [renderItem], $[12] = renderItem, $[13] = t6), (0, import_react.useEffect)(t5, t6);
	let t7, t8;
	$[14] === Symbol.for("react.memo_cache_sentinel") ? (t7 = () => {
		if (!ref.current) return;
		let scrollEl = findScrollable(ref.current.parentNode);
		if (scrollEl) {
			if (!(scrollEl instanceof HTMLElement)) return;
			let handleScroll = () => {
				setScrollTop(scrollEl.scrollTop);
			};
			scrollEl.addEventListener("scroll", handleScroll, { passive: !0 });
			let ro = new _ResizeObserver((entries) => {
				setScrollHeight(entries[0].contentRect.height);
			});
			return ro.observe(scrollEl), handleScroll(), () => {
				scrollEl.removeEventListener("scroll", handleScroll), ro.unobserve(scrollEl), ro.disconnect();
			};
		}
		let handleScroll_0 = () => {
			setScrollTop(window.scrollY);
		}, handleResize = () => {
			setScrollHeight(window.innerHeight);
		};
		return window.addEventListener("scroll", handleScroll_0, { passive: !0 }), window.addEventListener("resize", handleResize), setScrollHeight(window.innerHeight), handleScroll_0(), () => {
			window.removeEventListener("scroll", handleScroll_0), window.removeEventListener("resize", handleResize);
		};
	}, t8 = [], $[14] = t7, $[15] = t8) : (t7 = $[14], t8 = $[15]), (0, import_react.useEffect)(t7, t8);
	let len = items.length, height = itemHeight ? len * (itemHeight + space[gap]) - space[gap] : 0, fromIndex = height ? Math.max(Math.floor(scrollTop / height * len) - 2, 0) : 0, toIndex = height ? Math.ceil((scrollTop + scrollHeight) / height * len) + 1 : 0, t10, t9;
	$[16] !== fromIndex || $[17] !== gap || $[18] !== itemHeight || $[19] !== onChange || $[20] !== scrollHeight || $[21] !== scrollTop || $[22] !== space || $[23] !== toIndex ? (t9 = () => {
		onChange && onChange({
			fromIndex,
			gap: space[gap],
			itemHeight,
			scrollHeight,
			scrollTop,
			toIndex
		});
	}, t10 = [
		fromIndex,
		gap,
		itemHeight,
		onChange,
		scrollHeight,
		scrollTop,
		space,
		toIndex
	], $[16] = fromIndex, $[17] = gap, $[18] = itemHeight, $[19] = onChange, $[20] = scrollHeight, $[21] = scrollTop, $[22] = space, $[23] = toIndex, $[24] = t10, $[25] = t9) : (t10 = $[24], t9 = $[25]), (0, import_react.useEffect)(t9, t10);
	let t11;
	$[26] !== fromIndex || $[27] !== gap || $[28] !== getItemKey || $[29] !== itemHeight || $[30] !== items || $[31] !== renderItem || $[32] !== space || $[33] !== toIndex ? (t11 = {
		fromIndex,
		gap,
		itemHeight,
		space,
		toIndex,
		getItemKey,
		items,
		renderItem
	}, $[26] = fromIndex, $[27] = gap, $[28] = getItemKey, $[29] = itemHeight, $[30] = items, $[31] = renderItem, $[32] = space, $[33] = toIndex, $[34] = t11) : t11 = $[34];
	let children = useChildren(t11), t12 = as, t13;
	$[35] === height ? t13 = $[36] : (t13 = { height }, $[35] = height, $[36] = t13);
	let t14;
	$[37] !== children || $[38] !== t13 ? (t14 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: wrapperRef,
		style: t13,
		children
	}), $[37] = children, $[38] = t13, $[39] = t14) : t14 = $[39];
	let t15;
	return $[40] !== restProps || $[41] !== t12 || $[42] !== t14 ? (t15 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledVirtualList, {
		as: t12,
		"data-ui": "VirtualList",
		...restProps,
		ref,
		children: t14
	}), $[40] = restProps, $[41] = t12, $[42] = t14, $[43] = t15) : t15 = $[43], t15;
});
function useChildren(t0) {
	let $ = (0, import_dist.c)(21), { fromIndex, gap, getItemKey, itemHeight, items, renderItem, space, toIndex } = t0;
	if (!renderItem || items.length === 0) return null;
	if (itemHeight === -1) {
		let t1;
		$[0] !== items[0] || $[1] !== renderItem ? (t1 = renderItem(items[0]), $[0] = items[0], $[1] = renderItem, $[2] = t1) : t1 = $[2];
		let t2;
		return $[3] === t1 ? t2 = $[4] : (t2 = [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemWrapper, { children: t1 }, 0)], $[3] = t1, $[4] = t2), t2;
	}
	let t1;
	if ($[5] !== fromIndex || $[6] !== gap || $[7] !== getItemKey || $[8] !== itemHeight || $[9] !== items || $[10] !== renderItem || $[11] !== space || $[12] !== toIndex) {
		let t2;
		$[14] !== fromIndex || $[15] !== gap || $[16] !== getItemKey || $[17] !== itemHeight || $[18] !== renderItem || $[19] !== space ? (t2 = (item, _itemIndex) => {
			let itemIndex = fromIndex + _itemIndex, node = renderItem(item), key = getItemKey ? getItemKey(item, itemIndex) : itemIndex;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemWrapper, {
				style: { top: itemIndex * (itemHeight + space[gap]) },
				children: node
			}, key);
		}, $[14] = fromIndex, $[15] = gap, $[16] = getItemKey, $[17] = itemHeight, $[18] = renderItem, $[19] = space, $[20] = t2) : t2 = $[20], t1 = items.slice(fromIndex, toIndex).map(t2), $[5] = fromIndex, $[6] = gap, $[7] = getItemKey, $[8] = itemHeight, $[9] = items, $[10] = renderItem, $[11] = space, $[12] = toIndex, $[13] = t1;
	} else t1 = $[13];
	return t1;
}
function findScrollable(parentNode) {
	let _scrollEl = parentNode;
	for (; _scrollEl && !_isScrollable(_scrollEl);) _scrollEl = _scrollEl.parentNode;
	return _scrollEl;
}
//#endregion
//#region node_modules/property-information/lib/util/schema.js
/**
* @import {Schema as SchemaType, Space} from 'property-information'
*/
/** @type {SchemaType} */
var Schema = class {
	/**
	* @param {SchemaType['property']} property
	*   Property.
	* @param {SchemaType['normal']} normal
	*   Normal.
	* @param {Space | undefined} [space]
	*   Space.
	* @returns
	*   Schema.
	*/
	constructor(property, normal, space) {
		this.normal = normal;
		this.property = property;
		if (space) this.space = space;
	}
};
Schema.prototype.normal = {};
Schema.prototype.property = {};
Schema.prototype.space = void 0;
//#endregion
//#region node_modules/property-information/lib/util/merge.js
/**
* @import {Info, Space} from 'property-information'
*/
/**
* @param {ReadonlyArray<Schema>} definitions
*   Definitions.
* @param {Space | undefined} [space]
*   Space.
* @returns {Schema}
*   Schema.
*/
function merge(definitions, space) {
	/** @type {Record<string, Info>} */
	const property = {};
	/** @type {Record<string, string>} */
	const normal = {};
	for (const definition of definitions) {
		Object.assign(property, definition.property);
		Object.assign(normal, definition.normal);
	}
	return new Schema(property, normal, space);
}
//#endregion
//#region node_modules/property-information/lib/normalize.js
/**
* Get the cleaned case insensitive form of an attribute or property.
*
* @param {string} value
*   An attribute-like or property-like name.
* @returns {string}
*   Value that can be used to look up the properly cased property on a
*   `Schema`.
*/
function normalize(value) {
	return value.toLowerCase();
}
//#endregion
//#region node_modules/property-information/lib/util/info.js
/**
* @import {Info as InfoType} from 'property-information'
*/
/** @type {InfoType} */
var Info = class {
	/**
	* @param {string} property
	*   Property.
	* @param {string} attribute
	*   Attribute.
	* @returns
	*   Info.
	*/
	constructor(property, attribute) {
		this.attribute = attribute;
		this.property = property;
	}
};
Info.prototype.attribute = "";
Info.prototype.booleanish = false;
Info.prototype.boolean = false;
Info.prototype.commaOrSpaceSeparated = false;
Info.prototype.commaSeparated = false;
Info.prototype.defined = false;
Info.prototype.mustUseProperty = false;
Info.prototype.number = false;
Info.prototype.overloadedBoolean = false;
Info.prototype.property = "";
Info.prototype.spaceSeparated = false;
Info.prototype.space = void 0;
//#endregion
//#region node_modules/property-information/lib/util/types.js
var types_exports = /* @__PURE__ */ __exportAll({
	boolean: () => boolean,
	booleanish: () => booleanish,
	commaOrSpaceSeparated: () => commaOrSpaceSeparated,
	commaSeparated: () => commaSeparated,
	number: () => number,
	overloadedBoolean: () => overloadedBoolean,
	spaceSeparated: () => spaceSeparated
});
var powers = 0;
var boolean = increment();
var booleanish = increment();
var overloadedBoolean = increment();
var number = increment();
var spaceSeparated = increment();
var commaSeparated = increment();
var commaOrSpaceSeparated = increment();
function increment() {
	return 2 ** ++powers;
}
//#endregion
//#region node_modules/property-information/lib/util/defined-info.js
/**
* @import {Space} from 'property-information'
*/
var checks = Object.keys(types_exports);
var DefinedInfo = class extends Info {
	/**
	* @constructor
	* @param {string} property
	*   Property.
	* @param {string} attribute
	*   Attribute.
	* @param {number | null | undefined} [mask]
	*   Mask.
	* @param {Space | undefined} [space]
	*   Space.
	* @returns
	*   Info.
	*/
	constructor(property, attribute, mask, space) {
		let index = -1;
		super(property, attribute);
		mark(this, "space", space);
		if (typeof mask === "number") while (++index < checks.length) {
			const check = checks[index];
			mark(this, checks[index], (mask & types_exports[check]) === types_exports[check]);
		}
	}
};
DefinedInfo.prototype.defined = true;
/**
* @template {keyof DefinedInfo} Key
*   Key type.
* @param {DefinedInfo} values
*   Info.
* @param {Key} key
*   Key.
* @param {DefinedInfo[Key]} value
*   Value.
* @returns {undefined}
*   Nothing.
*/
function mark(values, key, value) {
	if (value) values[key] = value;
}
//#endregion
//#region node_modules/property-information/lib/util/create.js
/**
* @import {Info, Space} from 'property-information'
*/
/**
* @typedef Definition
*   Definition of a schema.
* @property {Record<string, string> | undefined} [attributes]
*   Normalzed names to special attribute case.
* @property {ReadonlyArray<string> | undefined} [mustUseProperty]
*   Normalized names that must be set as properties.
* @property {Record<string, number | null>} properties
*   Property names to their types.
* @property {Space | undefined} [space]
*   Space.
* @property {Transform} transform
*   Transform a property name.
*/
/**
* @callback Transform
*   Transform.
* @param {Record<string, string>} attributes
*   Attributes.
* @param {string} property
*   Property.
* @returns {string}
*   Attribute.
*/
/**
* @param {Definition} definition
*   Definition.
* @returns {Schema}
*   Schema.
*/
function create(definition) {
	/** @type {Record<string, Info>} */
	const properties = {};
	/** @type {Record<string, string>} */
	const normals = {};
	for (const [property, value] of Object.entries(definition.properties)) {
		const info = new DefinedInfo(property, definition.transform(definition.attributes || {}, property), value, definition.space);
		if (definition.mustUseProperty && definition.mustUseProperty.includes(property)) info.mustUseProperty = true;
		properties[property] = info;
		normals[normalize(property)] = property;
		normals[normalize(info.attribute)] = property;
	}
	return new Schema(properties, normals, definition.space);
}
//#endregion
//#region node_modules/property-information/lib/aria.js
var aria = create({
	properties: {
		ariaActiveDescendant: null,
		ariaAtomic: booleanish,
		ariaAutoComplete: null,
		ariaBusy: booleanish,
		ariaChecked: booleanish,
		ariaColCount: number,
		ariaColIndex: number,
		ariaColSpan: number,
		ariaControls: spaceSeparated,
		ariaCurrent: null,
		ariaDescribedBy: spaceSeparated,
		ariaDetails: null,
		ariaDisabled: booleanish,
		ariaDropEffect: spaceSeparated,
		ariaErrorMessage: null,
		ariaExpanded: booleanish,
		ariaFlowTo: spaceSeparated,
		ariaGrabbed: booleanish,
		ariaHasPopup: null,
		ariaHidden: booleanish,
		ariaInvalid: null,
		ariaKeyShortcuts: null,
		ariaLabel: null,
		ariaLabelledBy: spaceSeparated,
		ariaLevel: number,
		ariaLive: null,
		ariaModal: booleanish,
		ariaMultiLine: booleanish,
		ariaMultiSelectable: booleanish,
		ariaOrientation: null,
		ariaOwns: spaceSeparated,
		ariaPlaceholder: null,
		ariaPosInSet: number,
		ariaPressed: booleanish,
		ariaReadOnly: booleanish,
		ariaRelevant: null,
		ariaRequired: booleanish,
		ariaRoleDescription: spaceSeparated,
		ariaRowCount: number,
		ariaRowIndex: number,
		ariaRowSpan: number,
		ariaSelected: booleanish,
		ariaSetSize: number,
		ariaSort: null,
		ariaValueMax: number,
		ariaValueMin: number,
		ariaValueNow: number,
		ariaValueText: null,
		role: null
	},
	transform(_, property) {
		return property === "role" ? property : "aria-" + property.slice(4).toLowerCase();
	}
});
//#endregion
//#region node_modules/property-information/lib/util/case-sensitive-transform.js
/**
* @param {Record<string, string>} attributes
*   Attributes.
* @param {string} attribute
*   Attribute.
* @returns {string}
*   Transformed attribute.
*/
function caseSensitiveTransform(attributes, attribute) {
	return attribute in attributes ? attributes[attribute] : attribute;
}
//#endregion
//#region node_modules/property-information/lib/util/case-insensitive-transform.js
/**
* @param {Record<string, string>} attributes
*   Attributes.
* @param {string} property
*   Property.
* @returns {string}
*   Transformed property.
*/
function caseInsensitiveTransform(attributes, property) {
	return caseSensitiveTransform(attributes, property.toLowerCase());
}
//#endregion
//#region node_modules/property-information/lib/html.js
var html$1 = create({
	attributes: {
		acceptcharset: "accept-charset",
		classname: "class",
		htmlfor: "for",
		httpequiv: "http-equiv"
	},
	mustUseProperty: [
		"checked",
		"multiple",
		"muted",
		"selected"
	],
	properties: {
		abbr: null,
		accept: commaSeparated,
		acceptCharset: spaceSeparated,
		accessKey: spaceSeparated,
		action: null,
		allow: null,
		allowFullScreen: boolean,
		allowPaymentRequest: boolean,
		allowUserMedia: boolean,
		alpha: boolean,
		alt: null,
		as: null,
		async: boolean,
		autoCapitalize: null,
		autoComplete: spaceSeparated,
		autoFocus: boolean,
		autoPlay: boolean,
		blocking: spaceSeparated,
		capture: null,
		charSet: null,
		checked: boolean,
		cite: null,
		className: spaceSeparated,
		closedBy: null,
		colorSpace: null,
		cols: number,
		colSpan: number,
		command: null,
		commandFor: null,
		content: null,
		contentEditable: booleanish,
		controls: boolean,
		controlsList: spaceSeparated,
		coords: number | commaSeparated,
		crossOrigin: null,
		data: null,
		dateTime: null,
		decoding: null,
		default: boolean,
		defer: boolean,
		dir: null,
		dirName: null,
		disabled: boolean,
		download: overloadedBoolean,
		draggable: booleanish,
		encType: null,
		enterKeyHint: null,
		fetchPriority: null,
		form: null,
		formAction: null,
		formEncType: null,
		formMethod: null,
		formNoValidate: boolean,
		formTarget: null,
		headers: spaceSeparated,
		height: number,
		hidden: overloadedBoolean,
		high: number,
		href: null,
		hrefLang: null,
		htmlFor: spaceSeparated,
		httpEquiv: spaceSeparated,
		id: null,
		imageSizes: null,
		imageSrcSet: null,
		inert: boolean,
		inputMode: null,
		integrity: null,
		is: null,
		isMap: boolean,
		itemId: null,
		itemProp: spaceSeparated,
		itemRef: spaceSeparated,
		itemScope: boolean,
		itemType: spaceSeparated,
		kind: null,
		label: null,
		lang: null,
		language: null,
		list: null,
		loading: null,
		loop: boolean,
		low: number,
		manifest: null,
		max: null,
		maxLength: number,
		media: null,
		method: null,
		min: null,
		minLength: number,
		multiple: boolean,
		muted: boolean,
		name: null,
		nonce: null,
		noModule: boolean,
		noValidate: boolean,
		onAbort: null,
		onAfterPrint: null,
		onAuxClick: null,
		onBeforeMatch: null,
		onBeforePrint: null,
		onBeforeToggle: null,
		onBeforeUnload: null,
		onBlur: null,
		onCancel: null,
		onCanPlay: null,
		onCanPlayThrough: null,
		onChange: null,
		onClick: null,
		onClose: null,
		onContextLost: null,
		onContextMenu: null,
		onContextRestored: null,
		onCopy: null,
		onCueChange: null,
		onCut: null,
		onDblClick: null,
		onDrag: null,
		onDragEnd: null,
		onDragEnter: null,
		onDragExit: null,
		onDragLeave: null,
		onDragOver: null,
		onDragStart: null,
		onDrop: null,
		onDurationChange: null,
		onEmptied: null,
		onEnded: null,
		onError: null,
		onFocus: null,
		onFormData: null,
		onHashChange: null,
		onInput: null,
		onInvalid: null,
		onKeyDown: null,
		onKeyPress: null,
		onKeyUp: null,
		onLanguageChange: null,
		onLoad: null,
		onLoadedData: null,
		onLoadedMetadata: null,
		onLoadEnd: null,
		onLoadStart: null,
		onMessage: null,
		onMessageError: null,
		onMouseDown: null,
		onMouseEnter: null,
		onMouseLeave: null,
		onMouseMove: null,
		onMouseOut: null,
		onMouseOver: null,
		onMouseUp: null,
		onOffline: null,
		onOnline: null,
		onPageHide: null,
		onPageShow: null,
		onPaste: null,
		onPause: null,
		onPlay: null,
		onPlaying: null,
		onPopState: null,
		onProgress: null,
		onRateChange: null,
		onRejectionHandled: null,
		onReset: null,
		onResize: null,
		onScroll: null,
		onScrollEnd: null,
		onSecurityPolicyViolation: null,
		onSeeked: null,
		onSeeking: null,
		onSelect: null,
		onSlotChange: null,
		onStalled: null,
		onStorage: null,
		onSubmit: null,
		onSuspend: null,
		onTimeUpdate: null,
		onToggle: null,
		onUnhandledRejection: null,
		onUnload: null,
		onVolumeChange: null,
		onWaiting: null,
		onWheel: null,
		open: boolean,
		optimum: number,
		pattern: null,
		ping: spaceSeparated,
		placeholder: null,
		playsInline: boolean,
		popover: null,
		popoverTarget: null,
		popoverTargetAction: null,
		poster: null,
		preload: null,
		readOnly: boolean,
		referrerPolicy: null,
		rel: spaceSeparated,
		required: boolean,
		reversed: boolean,
		rows: number,
		rowSpan: number,
		sandbox: spaceSeparated,
		scope: null,
		scoped: boolean,
		seamless: boolean,
		selected: boolean,
		shadowRootClonable: boolean,
		shadowRootCustomElementRegistry: boolean,
		shadowRootDelegatesFocus: boolean,
		shadowRootMode: null,
		shadowRootSerializable: boolean,
		shape: null,
		size: number,
		sizes: null,
		slot: null,
		span: number,
		spellCheck: booleanish,
		src: null,
		srcDoc: null,
		srcLang: null,
		srcSet: null,
		start: number,
		step: null,
		style: null,
		tabIndex: number,
		target: null,
		title: null,
		translate: null,
		type: null,
		typeMustMatch: boolean,
		useMap: null,
		value: booleanish,
		width: number,
		wrap: null,
		writingSuggestions: null,
		align: null,
		aLink: null,
		archive: spaceSeparated,
		axis: null,
		background: null,
		bgColor: null,
		border: number,
		borderColor: null,
		bottomMargin: number,
		cellPadding: null,
		cellSpacing: null,
		char: null,
		charOff: null,
		classId: null,
		clear: null,
		code: null,
		codeBase: null,
		codeType: null,
		color: null,
		compact: boolean,
		declare: boolean,
		event: null,
		face: null,
		frame: null,
		frameBorder: null,
		hSpace: number,
		leftMargin: number,
		link: null,
		longDesc: null,
		lowSrc: null,
		marginHeight: number,
		marginWidth: number,
		noResize: boolean,
		noHref: boolean,
		noShade: boolean,
		noWrap: boolean,
		object: null,
		profile: null,
		prompt: null,
		rev: null,
		rightMargin: number,
		rules: null,
		scheme: null,
		scrolling: booleanish,
		standby: null,
		summary: null,
		text: null,
		topMargin: number,
		valueType: null,
		version: null,
		vAlign: null,
		vLink: null,
		vSpace: number,
		allowTransparency: null,
		autoCorrect: null,
		autoSave: null,
		credentialless: boolean,
		disablePictureInPicture: boolean,
		disableRemotePlayback: boolean,
		exportParts: commaSeparated,
		part: spaceSeparated,
		prefix: null,
		property: null,
		results: number,
		security: null,
		unselectable: null
	},
	space: "html",
	transform: caseInsensitiveTransform
});
//#endregion
//#region node_modules/property-information/lib/svg.js
var svg$1 = create({
	attributes: {
		accentHeight: "accent-height",
		alignmentBaseline: "alignment-baseline",
		arabicForm: "arabic-form",
		baselineShift: "baseline-shift",
		capHeight: "cap-height",
		className: "class",
		clipPath: "clip-path",
		clipRule: "clip-rule",
		colorInterpolation: "color-interpolation",
		colorInterpolationFilters: "color-interpolation-filters",
		colorProfile: "color-profile",
		colorRendering: "color-rendering",
		crossOrigin: "crossorigin",
		dataType: "datatype",
		dominantBaseline: "dominant-baseline",
		enableBackground: "enable-background",
		fillOpacity: "fill-opacity",
		fillRule: "fill-rule",
		floodColor: "flood-color",
		floodOpacity: "flood-opacity",
		fontFamily: "font-family",
		fontSize: "font-size",
		fontSizeAdjust: "font-size-adjust",
		fontStretch: "font-stretch",
		fontStyle: "font-style",
		fontVariant: "font-variant",
		fontWeight: "font-weight",
		glyphName: "glyph-name",
		glyphOrientationHorizontal: "glyph-orientation-horizontal",
		glyphOrientationVertical: "glyph-orientation-vertical",
		hrefLang: "hreflang",
		horizAdvX: "horiz-adv-x",
		horizOriginX: "horiz-origin-x",
		horizOriginY: "horiz-origin-y",
		imageRendering: "image-rendering",
		letterSpacing: "letter-spacing",
		lightingColor: "lighting-color",
		markerEnd: "marker-end",
		markerMid: "marker-mid",
		markerStart: "marker-start",
		maskType: "mask-type",
		navDown: "nav-down",
		navDownLeft: "nav-down-left",
		navDownRight: "nav-down-right",
		navLeft: "nav-left",
		navNext: "nav-next",
		navPrev: "nav-prev",
		navRight: "nav-right",
		navUp: "nav-up",
		navUpLeft: "nav-up-left",
		navUpRight: "nav-up-right",
		onAbort: "onabort",
		onActivate: "onactivate",
		onAfterPrint: "onafterprint",
		onBeforePrint: "onbeforeprint",
		onBegin: "onbegin",
		onCancel: "oncancel",
		onCanPlay: "oncanplay",
		onCanPlayThrough: "oncanplaythrough",
		onChange: "onchange",
		onClick: "onclick",
		onClose: "onclose",
		onCopy: "oncopy",
		onCueChange: "oncuechange",
		onCut: "oncut",
		onDblClick: "ondblclick",
		onDrag: "ondrag",
		onDragEnd: "ondragend",
		onDragEnter: "ondragenter",
		onDragExit: "ondragexit",
		onDragLeave: "ondragleave",
		onDragOver: "ondragover",
		onDragStart: "ondragstart",
		onDrop: "ondrop",
		onDurationChange: "ondurationchange",
		onEmptied: "onemptied",
		onEnd: "onend",
		onEnded: "onended",
		onError: "onerror",
		onFocus: "onfocus",
		onFocusIn: "onfocusin",
		onFocusOut: "onfocusout",
		onHashChange: "onhashchange",
		onInput: "oninput",
		onInvalid: "oninvalid",
		onKeyDown: "onkeydown",
		onKeyPress: "onkeypress",
		onKeyUp: "onkeyup",
		onLoad: "onload",
		onLoadedData: "onloadeddata",
		onLoadedMetadata: "onloadedmetadata",
		onLoadStart: "onloadstart",
		onMessage: "onmessage",
		onMouseDown: "onmousedown",
		onMouseEnter: "onmouseenter",
		onMouseLeave: "onmouseleave",
		onMouseMove: "onmousemove",
		onMouseOut: "onmouseout",
		onMouseOver: "onmouseover",
		onMouseUp: "onmouseup",
		onMouseWheel: "onmousewheel",
		onOffline: "onoffline",
		onOnline: "ononline",
		onPageHide: "onpagehide",
		onPageShow: "onpageshow",
		onPaste: "onpaste",
		onPause: "onpause",
		onPlay: "onplay",
		onPlaying: "onplaying",
		onPopState: "onpopstate",
		onProgress: "onprogress",
		onRateChange: "onratechange",
		onRepeat: "onrepeat",
		onReset: "onreset",
		onResize: "onresize",
		onScroll: "onscroll",
		onSeeked: "onseeked",
		onSeeking: "onseeking",
		onSelect: "onselect",
		onShow: "onshow",
		onStalled: "onstalled",
		onStorage: "onstorage",
		onSubmit: "onsubmit",
		onSuspend: "onsuspend",
		onTimeUpdate: "ontimeupdate",
		onToggle: "ontoggle",
		onUnload: "onunload",
		onVolumeChange: "onvolumechange",
		onWaiting: "onwaiting",
		onZoom: "onzoom",
		overlinePosition: "overline-position",
		overlineThickness: "overline-thickness",
		paintOrder: "paint-order",
		panose1: "panose-1",
		pointerEvents: "pointer-events",
		referrerPolicy: "referrerpolicy",
		renderingIntent: "rendering-intent",
		shapeRendering: "shape-rendering",
		stopColor: "stop-color",
		stopOpacity: "stop-opacity",
		strikethroughPosition: "strikethrough-position",
		strikethroughThickness: "strikethrough-thickness",
		strokeDashArray: "stroke-dasharray",
		strokeDashOffset: "stroke-dashoffset",
		strokeLineCap: "stroke-linecap",
		strokeLineJoin: "stroke-linejoin",
		strokeMiterLimit: "stroke-miterlimit",
		strokeOpacity: "stroke-opacity",
		strokeWidth: "stroke-width",
		tabIndex: "tabindex",
		textAnchor: "text-anchor",
		textDecoration: "text-decoration",
		textRendering: "text-rendering",
		transformOrigin: "transform-origin",
		typeOf: "typeof",
		underlinePosition: "underline-position",
		underlineThickness: "underline-thickness",
		unicodeBidi: "unicode-bidi",
		unicodeRange: "unicode-range",
		unitsPerEm: "units-per-em",
		vAlphabetic: "v-alphabetic",
		vHanging: "v-hanging",
		vIdeographic: "v-ideographic",
		vMathematical: "v-mathematical",
		vectorEffect: "vector-effect",
		vertAdvY: "vert-adv-y",
		vertOriginX: "vert-origin-x",
		vertOriginY: "vert-origin-y",
		wordSpacing: "word-spacing",
		writingMode: "writing-mode",
		xHeight: "x-height",
		playbackOrder: "playbackorder",
		timelineBegin: "timelinebegin"
	},
	properties: {
		about: commaOrSpaceSeparated,
		accentHeight: number,
		accumulate: null,
		additive: null,
		alignmentBaseline: null,
		alphabetic: number,
		amplitude: number,
		arabicForm: null,
		ascent: number,
		attributeName: null,
		attributeType: null,
		azimuth: number,
		bandwidth: null,
		baselineShift: null,
		baseFrequency: null,
		baseProfile: null,
		bbox: null,
		begin: null,
		bias: number,
		by: null,
		calcMode: null,
		capHeight: number,
		className: spaceSeparated,
		clip: null,
		clipPath: null,
		clipPathUnits: null,
		clipRule: null,
		color: null,
		colorInterpolation: null,
		colorInterpolationFilters: null,
		colorProfile: null,
		colorRendering: null,
		content: null,
		contentScriptType: null,
		contentStyleType: null,
		crossOrigin: null,
		cursor: null,
		cx: null,
		cy: null,
		d: null,
		dataType: null,
		defaultAction: null,
		descent: number,
		diffuseConstant: number,
		direction: null,
		display: null,
		dur: null,
		divisor: number,
		dominantBaseline: null,
		download: boolean,
		dx: null,
		dy: null,
		edgeMode: null,
		editable: null,
		elevation: number,
		enableBackground: null,
		end: null,
		event: null,
		exponent: number,
		externalResourcesRequired: null,
		fill: null,
		fillOpacity: number,
		fillRule: null,
		filter: null,
		filterRes: null,
		filterUnits: null,
		floodColor: null,
		floodOpacity: null,
		focusable: null,
		focusHighlight: null,
		fontFamily: null,
		fontSize: null,
		fontSizeAdjust: null,
		fontStretch: null,
		fontStyle: null,
		fontVariant: null,
		fontWeight: null,
		format: null,
		fr: null,
		from: null,
		fx: null,
		fy: null,
		g1: commaSeparated,
		g2: commaSeparated,
		glyphName: commaSeparated,
		glyphOrientationHorizontal: null,
		glyphOrientationVertical: null,
		glyphRef: null,
		gradientTransform: null,
		gradientUnits: null,
		handler: null,
		hanging: number,
		hatchContentUnits: null,
		hatchUnits: null,
		height: null,
		href: null,
		hrefLang: null,
		horizAdvX: number,
		horizOriginX: number,
		horizOriginY: number,
		id: null,
		ideographic: number,
		imageRendering: null,
		initialVisibility: null,
		in: null,
		in2: null,
		intercept: number,
		k: number,
		k1: number,
		k2: number,
		k3: number,
		k4: number,
		kernelMatrix: commaOrSpaceSeparated,
		kernelUnitLength: null,
		keyPoints: null,
		keySplines: null,
		keyTimes: null,
		kerning: null,
		lang: null,
		lengthAdjust: null,
		letterSpacing: null,
		lightingColor: null,
		limitingConeAngle: number,
		local: null,
		markerEnd: null,
		markerMid: null,
		markerStart: null,
		markerHeight: null,
		markerUnits: null,
		markerWidth: null,
		mask: null,
		maskContentUnits: null,
		maskType: null,
		maskUnits: null,
		mathematical: null,
		max: null,
		media: null,
		mediaCharacterEncoding: null,
		mediaContentEncodings: null,
		mediaSize: number,
		mediaTime: null,
		method: null,
		min: null,
		mode: null,
		name: null,
		navDown: null,
		navDownLeft: null,
		navDownRight: null,
		navLeft: null,
		navNext: null,
		navPrev: null,
		navRight: null,
		navUp: null,
		navUpLeft: null,
		navUpRight: null,
		numOctaves: null,
		observer: null,
		offset: null,
		onAbort: null,
		onActivate: null,
		onAfterPrint: null,
		onBeforePrint: null,
		onBegin: null,
		onCancel: null,
		onCanPlay: null,
		onCanPlayThrough: null,
		onChange: null,
		onClick: null,
		onClose: null,
		onCopy: null,
		onCueChange: null,
		onCut: null,
		onDblClick: null,
		onDrag: null,
		onDragEnd: null,
		onDragEnter: null,
		onDragExit: null,
		onDragLeave: null,
		onDragOver: null,
		onDragStart: null,
		onDrop: null,
		onDurationChange: null,
		onEmptied: null,
		onEnd: null,
		onEnded: null,
		onError: null,
		onFocus: null,
		onFocusIn: null,
		onFocusOut: null,
		onHashChange: null,
		onInput: null,
		onInvalid: null,
		onKeyDown: null,
		onKeyPress: null,
		onKeyUp: null,
		onLoad: null,
		onLoadedData: null,
		onLoadedMetadata: null,
		onLoadStart: null,
		onMessage: null,
		onMouseDown: null,
		onMouseEnter: null,
		onMouseLeave: null,
		onMouseMove: null,
		onMouseOut: null,
		onMouseOver: null,
		onMouseUp: null,
		onMouseWheel: null,
		onOffline: null,
		onOnline: null,
		onPageHide: null,
		onPageShow: null,
		onPaste: null,
		onPause: null,
		onPlay: null,
		onPlaying: null,
		onPopState: null,
		onProgress: null,
		onRateChange: null,
		onRepeat: null,
		onReset: null,
		onResize: null,
		onScroll: null,
		onSeeked: null,
		onSeeking: null,
		onSelect: null,
		onShow: null,
		onStalled: null,
		onStorage: null,
		onSubmit: null,
		onSuspend: null,
		onTimeUpdate: null,
		onToggle: null,
		onUnload: null,
		onVolumeChange: null,
		onWaiting: null,
		onZoom: null,
		opacity: null,
		operator: null,
		order: null,
		orient: null,
		orientation: null,
		origin: null,
		overflow: null,
		overlay: null,
		overlinePosition: number,
		overlineThickness: number,
		paintOrder: null,
		panose1: null,
		path: null,
		pathLength: number,
		patternContentUnits: null,
		patternTransform: null,
		patternUnits: null,
		phase: null,
		ping: spaceSeparated,
		pitch: null,
		playbackOrder: null,
		pointerEvents: null,
		points: null,
		pointsAtX: number,
		pointsAtY: number,
		pointsAtZ: number,
		preserveAlpha: null,
		preserveAspectRatio: null,
		primitiveUnits: null,
		propagate: null,
		property: commaOrSpaceSeparated,
		r: null,
		radius: null,
		referrerPolicy: null,
		refX: null,
		refY: null,
		rel: commaOrSpaceSeparated,
		rev: commaOrSpaceSeparated,
		renderingIntent: null,
		repeatCount: null,
		repeatDur: null,
		requiredExtensions: commaOrSpaceSeparated,
		requiredFeatures: commaOrSpaceSeparated,
		requiredFonts: commaOrSpaceSeparated,
		requiredFormats: commaOrSpaceSeparated,
		resource: null,
		restart: null,
		result: null,
		rotate: null,
		rx: null,
		ry: null,
		scale: null,
		seed: null,
		shapeRendering: null,
		side: null,
		slope: null,
		snapshotTime: null,
		specularConstant: number,
		specularExponent: number,
		spreadMethod: null,
		spacing: null,
		startOffset: null,
		stdDeviation: null,
		stemh: null,
		stemv: null,
		stitchTiles: null,
		stopColor: null,
		stopOpacity: null,
		strikethroughPosition: number,
		strikethroughThickness: number,
		string: null,
		stroke: null,
		strokeDashArray: commaOrSpaceSeparated,
		strokeDashOffset: null,
		strokeLineCap: null,
		strokeLineJoin: null,
		strokeMiterLimit: number,
		strokeOpacity: number,
		strokeWidth: null,
		style: null,
		surfaceScale: number,
		syncBehavior: null,
		syncBehaviorDefault: null,
		syncMaster: null,
		syncTolerance: null,
		syncToleranceDefault: null,
		systemLanguage: commaOrSpaceSeparated,
		tabIndex: number,
		tableValues: null,
		target: null,
		targetX: number,
		targetY: number,
		textAnchor: null,
		textDecoration: null,
		textRendering: null,
		textLength: null,
		timelineBegin: null,
		title: null,
		transformBehavior: null,
		type: null,
		typeOf: commaOrSpaceSeparated,
		to: null,
		transform: null,
		transformOrigin: null,
		u1: null,
		u2: null,
		underlinePosition: number,
		underlineThickness: number,
		unicode: null,
		unicodeBidi: null,
		unicodeRange: null,
		unitsPerEm: number,
		values: null,
		vAlphabetic: number,
		vMathematical: number,
		vectorEffect: null,
		vHanging: number,
		vIdeographic: number,
		version: null,
		vertAdvY: number,
		vertOriginX: number,
		vertOriginY: number,
		viewBox: null,
		viewTarget: null,
		visibility: null,
		width: null,
		widths: null,
		wordSpacing: null,
		writingMode: null,
		x: null,
		x1: null,
		x2: null,
		xChannelSelector: null,
		xHeight: number,
		y: null,
		y1: null,
		y2: null,
		yChannelSelector: null,
		z: null,
		zoomAndPan: null
	},
	space: "svg",
	transform: caseSensitiveTransform
});
//#endregion
//#region node_modules/property-information/lib/xlink.js
var xlink = create({
	properties: {
		xLinkActuate: null,
		xLinkArcRole: null,
		xLinkHref: null,
		xLinkRole: null,
		xLinkShow: null,
		xLinkTitle: null,
		xLinkType: null
	},
	space: "xlink",
	transform(_, property) {
		return "xlink:" + property.slice(5).toLowerCase();
	}
});
//#endregion
//#region node_modules/property-information/lib/xmlns.js
var xmlns = create({
	attributes: { xmlnsxlink: "xmlns:xlink" },
	properties: {
		xmlnsXLink: null,
		xmlns: null
	},
	space: "xmlns",
	transform: caseInsensitiveTransform
});
//#endregion
//#region node_modules/property-information/lib/xml.js
var xml = create({
	properties: {
		xmlBase: null,
		xmlLang: null,
		xmlSpace: null
	},
	space: "xml",
	transform(_, property) {
		return "xml:" + property.slice(3).toLowerCase();
	}
});
//#endregion
//#region node_modules/property-information/lib/find.js
/**
* @import {Schema} from 'property-information'
*/
var cap = /[A-Z]/g;
var dash = /-[a-z]/g;
var valid = /^data[-\w.:]+$/i;
/**
* Look up info on a property.
*
* In most cases the given `schema` contains info on the property.
* All standard,
* most legacy,
* and some non-standard properties are supported.
* For these cases,
* the returned `Info` has hints about the value of the property.
*
* `name` can also be a valid data attribute or property,
* in which case an `Info` object with the correctly cased `attribute` and
* `property` is returned.
*
* `name` can be an unknown attribute,
* in which case an `Info` object with `attribute` and `property` set to the
* given name is returned.
* It is not recommended to provide unsupported legacy or recently specced
* properties.
*
*
* @param {Schema} schema
*   Schema;
*   either the `html` or `svg` export.
* @param {string} value
*   An attribute-like or property-like name;
*   it will be passed through `normalize` to hopefully find the correct info.
* @returns {Info}
*   Info.
*/
function find(schema, value) {
	const normal = normalize(value);
	let property = value;
	let Type = Info;
	if (normal in schema.normal) return schema.property[schema.normal[normal]];
	if (normal.length > 4 && normal.slice(0, 4) === "data" && valid.test(value)) {
		if (value.charAt(4) === "-") {
			const rest = value.slice(5).replace(dash, camelcase);
			property = "data" + rest.charAt(0).toUpperCase() + rest.slice(1);
		} else {
			const rest = value.slice(4);
			if (!dash.test(rest)) {
				let dashes = rest.replace(cap, kebab);
				if (dashes.charAt(0) !== "-") dashes = "-" + dashes;
				value = "data" + dashes;
			}
		}
		Type = DefinedInfo;
	}
	return new Type(property, value);
}
/**
* @param {string} $0
*   Value.
* @returns {string}
*   Kebab.
*/
function kebab($0) {
	return "-" + $0.toLowerCase();
}
/**
* @param {string} $0
*   Value.
* @returns {string}
*   Camel.
*/
function camelcase($0) {
	return $0.charAt(1).toUpperCase();
}
//#endregion
//#region node_modules/property-information/index.js
var html = merge([
	aria,
	html$1,
	xlink,
	xmlns,
	xml
], "html");
var svg = merge([
	aria,
	svg$1,
	xlink,
	xmlns,
	xml
], "svg");
//#endregion
//#region node_modules/comma-separated-tokens/index.js
/**
* @typedef Options
*   Configuration for `stringify`.
* @property {boolean} [padLeft=true]
*   Whether to pad a space before a token.
* @property {boolean} [padRight=false]
*   Whether to pad a space after a token.
*/
/**
* @typedef {Options} StringifyOptions
*   Please use `StringifyOptions` instead.
*/
/**
* Parse comma-separated tokens to an array.
*
* @param {string} value
*   Comma-separated tokens.
* @returns {Array<string>}
*   List of tokens.
*/
function parse$1(value) {
	/** @type {Array<string>} */
	const tokens = [];
	const input = String(value || "");
	let index = input.indexOf(",");
	let start = 0;
	/** @type {boolean} */
	let end = false;
	while (!end) {
		if (index === -1) {
			index = input.length;
			end = true;
		}
		const token = input.slice(start, index).trim();
		if (token || !end) tokens.push(token);
		start = index + 1;
		index = input.indexOf(",", start);
	}
	return tokens;
}
//#endregion
//#region node_modules/hast-util-parse-selector/lib/index.js
/**
* @typedef {import('hast').Element} Element
* @typedef {import('hast').Properties} Properties
*/
/**
* @template {string} SimpleSelector
*   Selector type.
* @template {string} DefaultTagName
*   Default tag name.
* @typedef {(
*   SimpleSelector extends ''
*     ? DefaultTagName
*     : SimpleSelector extends `${infer TagName}.${infer Rest}`
*     ? ExtractTagName<TagName, DefaultTagName>
*     : SimpleSelector extends `${infer TagName}#${infer Rest}`
*     ? ExtractTagName<TagName, DefaultTagName>
*     : SimpleSelector extends string
*     ? SimpleSelector
*     : DefaultTagName
* )} ExtractTagName
*   Extract tag name from a simple selector.
*/
var search = /[#.]/g;
/**
* Create a hast element from a simple CSS selector.
*
* @template {string} Selector
*   Type of selector.
* @template {string} [DefaultTagName='div']
*   Type of default tag name (default: `'div'`).
* @param {Selector | null | undefined} [selector]
*   Simple CSS selector (optional).
*
*   Can contain a tag name (`foo`), classes (`.bar`), and an ID (`#baz`).
*   Multiple classes are allowed.
*   Uses the last ID if multiple IDs are found.
* @param {DefaultTagName | null | undefined} [defaultTagName='div']
*   Tag name to use if `selector` does not specify one (default: `'div'`).
* @returns {Element & {tagName: ExtractTagName<Selector, DefaultTagName>}}
*   Built element.
*/
function parseSelector(selector, defaultTagName) {
	const value = selector || "";
	/** @type {Properties} */
	const props = {};
	let start = 0;
	/** @type {string | undefined} */
	let previous;
	/** @type {string | undefined} */
	let tagName;
	while (start < value.length) {
		search.lastIndex = start;
		const match = search.exec(value);
		const subvalue = value.slice(start, match ? match.index : value.length);
		if (subvalue) {
			if (!previous) tagName = subvalue;
			else if (previous === "#") props.id = subvalue;
			else if (Array.isArray(props.className)) props.className.push(subvalue);
			else props.className = [subvalue];
			start += subvalue.length;
		}
		if (match) {
			previous = match[0];
			start++;
		}
	}
	return {
		type: "element",
		tagName: tagName || defaultTagName || "div",
		properties: props,
		children: []
	};
}
//#endregion
//#region node_modules/space-separated-tokens/index.js
/**
* Parse space-separated tokens to an array of strings.
*
* @param {string} value
*   Space-separated tokens.
* @returns {Array<string>}
*   List of tokens.
*/
function parse(value) {
	const input = String(value || "").trim();
	return input ? input.split(/[ \t\n\r\f]+/g) : [];
}
//#endregion
//#region node_modules/hastscript/lib/create-h.js
/**
* @import {Element, Nodes, RootContent, Root} from 'hast'
* @import {Info, Schema} from 'property-information'
*/
/**
* @typedef {Array<Nodes | PrimitiveChild>} ArrayChildNested
*   List of children (deep).
*/
/**
* @typedef {Array<ArrayChildNested | Nodes | PrimitiveChild>} ArrayChild
*   List of children.
*/
/**
* @typedef {Array<number | string>} ArrayValue
*   List of property values for space- or comma separated values (such as `className`).
*/
/**
* @typedef {ArrayChild | Nodes | PrimitiveChild} Child
*   Acceptable child value.
*/
/**
* @typedef {number | string | null | undefined} PrimitiveChild
*   Primitive children, either ignored (nullish), or turned into text nodes.
*/
/**
* @typedef {boolean | number | string | null | undefined} PrimitiveValue
*   Primitive property value.
*/
/**
* @typedef {Record<string, PropertyValue | Style>} Properties
*   Acceptable value for element properties.
*/
/**
* @typedef {ArrayValue | PrimitiveValue} PropertyValue
*   Primitive value or list value.
*/
/**
* @typedef {Element | Root} Result
*   Result from a `h` (or `s`) call.
*/
/**
* @typedef {number | string} StyleValue
*   Value for a CSS style field.
*/
/**
* @typedef {Record<string, StyleValue>} Style
*   Supported value of a `style` prop.
*/
/**
* Create an `h` function.
*
* @param {Schema} schema
*   Schema to use.
* @param {string} defaultTagName
*   Default tag name.
* @param {ReadonlyArray<string> | undefined} [caseSensitive]
*   Case-sensitive tag names (default: `undefined`).
* @returns
*   `h`.
*/
function createH(schema, defaultTagName, caseSensitive) {
	const adjust = caseSensitive ? createAdjustMap(caseSensitive) : void 0;
	/**
	* Hyperscript compatible DSL for creating virtual hast trees.
	*
	* @overload
	* @param {null | undefined} [selector]
	*   Nothing to get a root.
	* @param {...Child} children
	*   Children.
	* @returns {Root}
	*   Root.
	*
	* @overload
	* @param {string} selector
	*   Selector.
	* @param {Child | Properties} [properties]
	*   Properties (or first child) (default: `undefined`).
	* @param {...Child} children
	*   Children.
	* @returns {Element}
	*   Element.
	*
	* @param {string | null | undefined} [selector]
	*   Selector.
	* @param {Child | Properties} [properties]
	*   Properties (or first child) (default: `undefined`).
	* @param {...Child} children
	*   Children.
	* @returns {Result}
	*   Result.
	*/
	function h(selector, properties, ...children) {
		/** @type {Result} */
		let node;
		if (selector === null || selector === void 0) {
			node = {
				type: "root",
				children: []
			};
			const child = properties;
			children.unshift(child);
		} else {
			node = parseSelector(selector, defaultTagName);
			const lower = node.tagName.toLowerCase();
			const adjusted = adjust ? adjust.get(lower) : void 0;
			node.tagName = adjusted || lower;
			if (isChild(properties)) children.unshift(properties);
			else for (const [key, value] of Object.entries(properties)) addProperty(schema, node.properties, key, value);
		}
		for (const child of children) addChild(node.children, child);
		if (node.type === "element" && node.tagName === "template" && schema.space === "html") {
			node.content = {
				type: "root",
				children: node.children
			};
			node.children = [];
		}
		return node;
	}
	return h;
}
/**
* Check if something is properties or a child.
*
* @param {Child | Properties} value
*   Value to check.
* @returns {value is Child}
*   Whether `value` is definitely a child.
*/
function isChild(value) {
	if (value === null || typeof value !== "object" || Array.isArray(value)) return true;
	if (typeof value.type !== "string") return false;
	const record = value;
	const keys = Object.keys(value);
	for (const key of keys) {
		const value = record[key];
		if (value && typeof value === "object") {
			if (!Array.isArray(value)) return true;
			const list = value;
			for (const item of list) if (typeof item !== "number" && typeof item !== "string") return true;
		}
	}
	if ("children" in value && Array.isArray(value.children)) return true;
	return false;
}
/**
* Add a property.
*
* @param {Schema} schema
*   Schema.
* @param {Properties} properties
*   Properties object.
* @param {string} key
*   Property name.
* @param {PropertyValue | Style} value
*   Property value.
* @returns {undefined}
*   Nothing.
*/
function addProperty(schema, properties, key, value) {
	if (value === null || value === void 0) return;
	const info = find(schema, key);
	/** @type {PropertyValue} */
	let result;
	if (typeof value === "number") {
		if (Number.isNaN(value)) return;
		result = value;
	} else if (typeof value === "boolean") result = value;
	else if (typeof value === "string") if (info.spaceSeparated) result = parse(value);
	else if (info.commaSeparated) result = parse$1(value);
	else if (info.commaOrSpaceSeparated) result = parse(parse$1(value).join(" "));
	else result = parsePrimitive(info, info.property, value);
	else if (Array.isArray(value)) result = [...value];
	else result = info.property === "style" ? style(value) : String(value);
	if (Array.isArray(result)) {
		/** @type {Array<number | string>} */
		const finalResult = [];
		for (const item of result) finalResult.push(parsePrimitive(info, info.property, item));
		result = finalResult;
	}
	if (info.property === "className" && Array.isArray(properties.className)) {
		const add = result;
		result = [...properties.className, ...Array.isArray(add) ? add : [add]];
	}
	properties[info.property] = result;
}
/**
* Add a child.
*
* @param {Array<RootContent>} nodes
*   Children.
* @param {Child} value
*   Child.
* @returns {undefined}
*   Nothing.
*/
function addChild(nodes, value) {
	if (value === null || value === void 0) {} else if (typeof value === "number" || typeof value === "string") nodes.push({
		type: "text",
		value: String(value)
	});
	else if (Array.isArray(value)) for (const child of value) addChild(nodes, child);
	else if (typeof value === "object" && "type" in value) if (value.type === "root") addChild(nodes, value.children);
	else nodes.push(value);
	else throw new Error("Expected node, nodes, or string, got `" + value + "`");
}
/**
* Parse a single primitives.
*
* @param {Info} info
*   Property information.
* @param {string} name
*   Property name.
* @param {PrimitiveValue} value
*   Property value.
* @returns {PrimitiveValue}
*   Property value.
*/
function parsePrimitive(info, name, value) {
	if (typeof value === "string") {
		if (info.number && value && !Number.isNaN(Number(value))) return Number(value);
		if ((info.boolean || info.overloadedBoolean) && (value === "" || normalize(value) === normalize(name))) return true;
	}
	return value;
}
/**
* Serialize a `style` object as a string.
*
* @param {Style} styles
*   Style object.
* @returns {string}
*   CSS string.
*/
function style(styles) {
	/** @type {Array<string>} */
	const result = [];
	for (const [key, value] of Object.entries(styles)) result.push([key, value].join(": "));
	return result.join("; ");
}
/**
* Create a map to adjust casing.
*
* @param {ReadonlyArray<string>} values
*   List of properly cased keys.
* @returns {Map<string, string>}
*   Map of lowercase keys to uppercase keys.
*/
function createAdjustMap(values) {
	/** @type {Map<string, string>} */
	const result = /* @__PURE__ */ new Map();
	for (const value of values) result.set(value.toLowerCase(), value);
	return result;
}
//#endregion
//#region node_modules/hastscript/lib/svg-case-sensitive-tag-names.js
/**
* List of case-sensitive SVG tag names.
*
* @type {ReadonlyArray<string>}
*/
var svgCaseSensitiveTagNames = [
	"altGlyph",
	"altGlyphDef",
	"altGlyphItem",
	"animateColor",
	"animateMotion",
	"animateTransform",
	"clipPath",
	"feBlend",
	"feColorMatrix",
	"feComponentTransfer",
	"feComposite",
	"feConvolveMatrix",
	"feDiffuseLighting",
	"feDisplacementMap",
	"feDistantLight",
	"feDropShadow",
	"feFlood",
	"feFuncA",
	"feFuncB",
	"feFuncG",
	"feFuncR",
	"feGaussianBlur",
	"feImage",
	"feMerge",
	"feMergeNode",
	"feMorphology",
	"feOffset",
	"fePointLight",
	"feSpecularLighting",
	"feSpotLight",
	"feTile",
	"feTurbulence",
	"foreignObject",
	"glyphRef",
	"linearGradient",
	"radialGradient",
	"solidColor",
	"textArea",
	"textPath"
];
//#endregion
//#region node_modules/hastscript/lib/index.js
/**
* @typedef {import('./jsx-classic.js').Element} h.JSX.Element
* @typedef {import('./jsx-classic.js').ElementChildrenAttribute} h.JSX.ElementChildrenAttribute
* @typedef {import('./jsx-classic.js').IntrinsicAttributes} h.JSX.IntrinsicAttributes
* @typedef {import('./jsx-classic.js').IntrinsicElements} h.JSX.IntrinsicElements
*/
/**
* @typedef {import('./jsx-classic.js').Element} s.JSX.Element
* @typedef {import('./jsx-classic.js').ElementChildrenAttribute} s.JSX.ElementChildrenAttribute
* @typedef {import('./jsx-classic.js').IntrinsicAttributes} s.JSX.IntrinsicAttributes
* @typedef {import('./jsx-classic.js').IntrinsicElements} s.JSX.IntrinsicElements
*/
/** @type {ReturnType<createH>} */
var h = createH(html, "div");
createH(svg, "g", svgCaseSensitiveTagNames);
//#endregion
//#region node_modules/character-entities-legacy/index.js
/**
* List of legacy HTML named character references that don’t need a trailing semicolon.
*
* @type {Array<string>}
*/
var characterEntitiesLegacy = [
	"AElig",
	"AMP",
	"Aacute",
	"Acirc",
	"Agrave",
	"Aring",
	"Atilde",
	"Auml",
	"COPY",
	"Ccedil",
	"ETH",
	"Eacute",
	"Ecirc",
	"Egrave",
	"Euml",
	"GT",
	"Iacute",
	"Icirc",
	"Igrave",
	"Iuml",
	"LT",
	"Ntilde",
	"Oacute",
	"Ocirc",
	"Ograve",
	"Oslash",
	"Otilde",
	"Ouml",
	"QUOT",
	"REG",
	"THORN",
	"Uacute",
	"Ucirc",
	"Ugrave",
	"Uuml",
	"Yacute",
	"aacute",
	"acirc",
	"acute",
	"aelig",
	"agrave",
	"amp",
	"aring",
	"atilde",
	"auml",
	"brvbar",
	"ccedil",
	"cedil",
	"cent",
	"copy",
	"curren",
	"deg",
	"divide",
	"eacute",
	"ecirc",
	"egrave",
	"eth",
	"euml",
	"frac12",
	"frac14",
	"frac34",
	"gt",
	"iacute",
	"icirc",
	"iexcl",
	"igrave",
	"iquest",
	"iuml",
	"laquo",
	"lt",
	"macr",
	"micro",
	"middot",
	"nbsp",
	"not",
	"ntilde",
	"oacute",
	"ocirc",
	"ograve",
	"ordf",
	"ordm",
	"oslash",
	"otilde",
	"ouml",
	"para",
	"plusmn",
	"pound",
	"quot",
	"raquo",
	"reg",
	"sect",
	"shy",
	"sup1",
	"sup2",
	"sup3",
	"szlig",
	"thorn",
	"times",
	"uacute",
	"ucirc",
	"ugrave",
	"uml",
	"uuml",
	"yacute",
	"yen",
	"yuml"
];
//#endregion
//#region node_modules/character-reference-invalid/index.js
/**
* Map of invalid numeric character references to their replacements, according to HTML.
*
* @type {Record<number, string>}
*/
var characterReferenceInvalid = {
	0: "�",
	128: "€",
	130: "‚",
	131: "ƒ",
	132: "„",
	133: "…",
	134: "†",
	135: "‡",
	136: "ˆ",
	137: "‰",
	138: "Š",
	139: "‹",
	140: "Œ",
	142: "Ž",
	145: "‘",
	146: "’",
	147: "“",
	148: "”",
	149: "•",
	150: "–",
	151: "—",
	152: "˜",
	153: "™",
	154: "š",
	155: "›",
	156: "œ",
	158: "ž",
	159: "Ÿ"
};
//#endregion
//#region node_modules/is-decimal/index.js
/**
* Check if the given character code, or the character code at the first
* character, is decimal.
*
* @param {string|number} character
* @returns {boolean} Whether `character` is a decimal
*/
function isDecimal(character) {
	const code = typeof character === "string" ? character.charCodeAt(0) : character;
	return code >= 48 && code <= 57;
}
//#endregion
//#region node_modules/is-hexadecimal/index.js
/**
* Check if the given character code, or the character code at the first
* character, is hexadecimal.
*
* @param {string|number} character
* @returns {boolean} Whether `character` is hexadecimal
*/
function isHexadecimal(character) {
	const code = typeof character === "string" ? character.charCodeAt(0) : character;
	return code >= 97 && code <= 102 || code >= 65 && code <= 70 || code >= 48 && code <= 57;
}
//#endregion
//#region node_modules/is-alphabetical/index.js
/**
* Check if the given character code, or the character code at the first
* character, is alphabetical.
*
* @param {string|number} character
* @returns {boolean} Whether `character` is alphabetical.
*/
function isAlphabetical(character) {
	const code = typeof character === "string" ? character.charCodeAt(0) : character;
	return code >= 97 && code <= 122 || code >= 65 && code <= 90;
}
//#endregion
//#region node_modules/is-alphanumerical/index.js
/**
* Check if the given character code, or the character code at the first
* character, is alphanumerical.
*
* @param {string|number} character
* @returns {boolean} Whether `character` is alphanumerical.
*/
function isAlphanumerical(character) {
	return isAlphabetical(character) || isDecimal(character);
}
//#endregion
//#region node_modules/character-entities/index.js
/**
* Map of named character references.
*
* @type {Record<string, string>}
*/
var characterEntities = {
	AElig: "Æ",
	AMP: "&",
	Aacute: "Á",
	Abreve: "Ă",
	Acirc: "Â",
	Acy: "А",
	Afr: "𝔄",
	Agrave: "À",
	Alpha: "Α",
	Amacr: "Ā",
	And: "⩓",
	Aogon: "Ą",
	Aopf: "𝔸",
	ApplyFunction: "⁡",
	Aring: "Å",
	Ascr: "𝒜",
	Assign: "≔",
	Atilde: "Ã",
	Auml: "Ä",
	Backslash: "∖",
	Barv: "⫧",
	Barwed: "⌆",
	Bcy: "Б",
	Because: "∵",
	Bernoullis: "ℬ",
	Beta: "Β",
	Bfr: "𝔅",
	Bopf: "𝔹",
	Breve: "˘",
	Bscr: "ℬ",
	Bumpeq: "≎",
	CHcy: "Ч",
	COPY: "©",
	Cacute: "Ć",
	Cap: "⋒",
	CapitalDifferentialD: "ⅅ",
	Cayleys: "ℭ",
	Ccaron: "Č",
	Ccedil: "Ç",
	Ccirc: "Ĉ",
	Cconint: "∰",
	Cdot: "Ċ",
	Cedilla: "¸",
	CenterDot: "·",
	Cfr: "ℭ",
	Chi: "Χ",
	CircleDot: "⊙",
	CircleMinus: "⊖",
	CirclePlus: "⊕",
	CircleTimes: "⊗",
	ClockwiseContourIntegral: "∲",
	CloseCurlyDoubleQuote: "”",
	CloseCurlyQuote: "’",
	Colon: "∷",
	Colone: "⩴",
	Congruent: "≡",
	Conint: "∯",
	ContourIntegral: "∮",
	Copf: "ℂ",
	Coproduct: "∐",
	CounterClockwiseContourIntegral: "∳",
	Cross: "⨯",
	Cscr: "𝒞",
	Cup: "⋓",
	CupCap: "≍",
	DD: "ⅅ",
	DDotrahd: "⤑",
	DJcy: "Ђ",
	DScy: "Ѕ",
	DZcy: "Џ",
	Dagger: "‡",
	Darr: "↡",
	Dashv: "⫤",
	Dcaron: "Ď",
	Dcy: "Д",
	Del: "∇",
	Delta: "Δ",
	Dfr: "𝔇",
	DiacriticalAcute: "´",
	DiacriticalDot: "˙",
	DiacriticalDoubleAcute: "˝",
	DiacriticalGrave: "`",
	DiacriticalTilde: "˜",
	Diamond: "⋄",
	DifferentialD: "ⅆ",
	Dopf: "𝔻",
	Dot: "¨",
	DotDot: "⃜",
	DotEqual: "≐",
	DoubleContourIntegral: "∯",
	DoubleDot: "¨",
	DoubleDownArrow: "⇓",
	DoubleLeftArrow: "⇐",
	DoubleLeftRightArrow: "⇔",
	DoubleLeftTee: "⫤",
	DoubleLongLeftArrow: "⟸",
	DoubleLongLeftRightArrow: "⟺",
	DoubleLongRightArrow: "⟹",
	DoubleRightArrow: "⇒",
	DoubleRightTee: "⊨",
	DoubleUpArrow: "⇑",
	DoubleUpDownArrow: "⇕",
	DoubleVerticalBar: "∥",
	DownArrow: "↓",
	DownArrowBar: "⤓",
	DownArrowUpArrow: "⇵",
	DownBreve: "̑",
	DownLeftRightVector: "⥐",
	DownLeftTeeVector: "⥞",
	DownLeftVector: "↽",
	DownLeftVectorBar: "⥖",
	DownRightTeeVector: "⥟",
	DownRightVector: "⇁",
	DownRightVectorBar: "⥗",
	DownTee: "⊤",
	DownTeeArrow: "↧",
	Downarrow: "⇓",
	Dscr: "𝒟",
	Dstrok: "Đ",
	ENG: "Ŋ",
	ETH: "Ð",
	Eacute: "É",
	Ecaron: "Ě",
	Ecirc: "Ê",
	Ecy: "Э",
	Edot: "Ė",
	Efr: "𝔈",
	Egrave: "È",
	Element: "∈",
	Emacr: "Ē",
	EmptySmallSquare: "◻",
	EmptyVerySmallSquare: "▫",
	Eogon: "Ę",
	Eopf: "𝔼",
	Epsilon: "Ε",
	Equal: "⩵",
	EqualTilde: "≂",
	Equilibrium: "⇌",
	Escr: "ℰ",
	Esim: "⩳",
	Eta: "Η",
	Euml: "Ë",
	Exists: "∃",
	ExponentialE: "ⅇ",
	Fcy: "Ф",
	Ffr: "𝔉",
	FilledSmallSquare: "◼",
	FilledVerySmallSquare: "▪",
	Fopf: "𝔽",
	ForAll: "∀",
	Fouriertrf: "ℱ",
	Fscr: "ℱ",
	GJcy: "Ѓ",
	GT: ">",
	Gamma: "Γ",
	Gammad: "Ϝ",
	Gbreve: "Ğ",
	Gcedil: "Ģ",
	Gcirc: "Ĝ",
	Gcy: "Г",
	Gdot: "Ġ",
	Gfr: "𝔊",
	Gg: "⋙",
	Gopf: "𝔾",
	GreaterEqual: "≥",
	GreaterEqualLess: "⋛",
	GreaterFullEqual: "≧",
	GreaterGreater: "⪢",
	GreaterLess: "≷",
	GreaterSlantEqual: "⩾",
	GreaterTilde: "≳",
	Gscr: "𝒢",
	Gt: "≫",
	HARDcy: "Ъ",
	Hacek: "ˇ",
	Hat: "^",
	Hcirc: "Ĥ",
	Hfr: "ℌ",
	HilbertSpace: "ℋ",
	Hopf: "ℍ",
	HorizontalLine: "─",
	Hscr: "ℋ",
	Hstrok: "Ħ",
	HumpDownHump: "≎",
	HumpEqual: "≏",
	IEcy: "Е",
	IJlig: "Ĳ",
	IOcy: "Ё",
	Iacute: "Í",
	Icirc: "Î",
	Icy: "И",
	Idot: "İ",
	Ifr: "ℑ",
	Igrave: "Ì",
	Im: "ℑ",
	Imacr: "Ī",
	ImaginaryI: "ⅈ",
	Implies: "⇒",
	Int: "∬",
	Integral: "∫",
	Intersection: "⋂",
	InvisibleComma: "⁣",
	InvisibleTimes: "⁢",
	Iogon: "Į",
	Iopf: "𝕀",
	Iota: "Ι",
	Iscr: "ℐ",
	Itilde: "Ĩ",
	Iukcy: "І",
	Iuml: "Ï",
	Jcirc: "Ĵ",
	Jcy: "Й",
	Jfr: "𝔍",
	Jopf: "𝕁",
	Jscr: "𝒥",
	Jsercy: "Ј",
	Jukcy: "Є",
	KHcy: "Х",
	KJcy: "Ќ",
	Kappa: "Κ",
	Kcedil: "Ķ",
	Kcy: "К",
	Kfr: "𝔎",
	Kopf: "𝕂",
	Kscr: "𝒦",
	LJcy: "Љ",
	LT: "<",
	Lacute: "Ĺ",
	Lambda: "Λ",
	Lang: "⟪",
	Laplacetrf: "ℒ",
	Larr: "↞",
	Lcaron: "Ľ",
	Lcedil: "Ļ",
	Lcy: "Л",
	LeftAngleBracket: "⟨",
	LeftArrow: "←",
	LeftArrowBar: "⇤",
	LeftArrowRightArrow: "⇆",
	LeftCeiling: "⌈",
	LeftDoubleBracket: "⟦",
	LeftDownTeeVector: "⥡",
	LeftDownVector: "⇃",
	LeftDownVectorBar: "⥙",
	LeftFloor: "⌊",
	LeftRightArrow: "↔",
	LeftRightVector: "⥎",
	LeftTee: "⊣",
	LeftTeeArrow: "↤",
	LeftTeeVector: "⥚",
	LeftTriangle: "⊲",
	LeftTriangleBar: "⧏",
	LeftTriangleEqual: "⊴",
	LeftUpDownVector: "⥑",
	LeftUpTeeVector: "⥠",
	LeftUpVector: "↿",
	LeftUpVectorBar: "⥘",
	LeftVector: "↼",
	LeftVectorBar: "⥒",
	Leftarrow: "⇐",
	Leftrightarrow: "⇔",
	LessEqualGreater: "⋚",
	LessFullEqual: "≦",
	LessGreater: "≶",
	LessLess: "⪡",
	LessSlantEqual: "⩽",
	LessTilde: "≲",
	Lfr: "𝔏",
	Ll: "⋘",
	Lleftarrow: "⇚",
	Lmidot: "Ŀ",
	LongLeftArrow: "⟵",
	LongLeftRightArrow: "⟷",
	LongRightArrow: "⟶",
	Longleftarrow: "⟸",
	Longleftrightarrow: "⟺",
	Longrightarrow: "⟹",
	Lopf: "𝕃",
	LowerLeftArrow: "↙",
	LowerRightArrow: "↘",
	Lscr: "ℒ",
	Lsh: "↰",
	Lstrok: "Ł",
	Lt: "≪",
	Map: "⤅",
	Mcy: "М",
	MediumSpace: " ",
	Mellintrf: "ℳ",
	Mfr: "𝔐",
	MinusPlus: "∓",
	Mopf: "𝕄",
	Mscr: "ℳ",
	Mu: "Μ",
	NJcy: "Њ",
	Nacute: "Ń",
	Ncaron: "Ň",
	Ncedil: "Ņ",
	Ncy: "Н",
	NegativeMediumSpace: "​",
	NegativeThickSpace: "​",
	NegativeThinSpace: "​",
	NegativeVeryThinSpace: "​",
	NestedGreaterGreater: "≫",
	NestedLessLess: "≪",
	NewLine: "\n",
	Nfr: "𝔑",
	NoBreak: "⁠",
	NonBreakingSpace: "\xA0",
	Nopf: "ℕ",
	Not: "⫬",
	NotCongruent: "≢",
	NotCupCap: "≭",
	NotDoubleVerticalBar: "∦",
	NotElement: "∉",
	NotEqual: "≠",
	NotEqualTilde: "≂̸",
	NotExists: "∄",
	NotGreater: "≯",
	NotGreaterEqual: "≱",
	NotGreaterFullEqual: "≧̸",
	NotGreaterGreater: "≫̸",
	NotGreaterLess: "≹",
	NotGreaterSlantEqual: "⩾̸",
	NotGreaterTilde: "≵",
	NotHumpDownHump: "≎̸",
	NotHumpEqual: "≏̸",
	NotLeftTriangle: "⋪",
	NotLeftTriangleBar: "⧏̸",
	NotLeftTriangleEqual: "⋬",
	NotLess: "≮",
	NotLessEqual: "≰",
	NotLessGreater: "≸",
	NotLessLess: "≪̸",
	NotLessSlantEqual: "⩽̸",
	NotLessTilde: "≴",
	NotNestedGreaterGreater: "⪢̸",
	NotNestedLessLess: "⪡̸",
	NotPrecedes: "⊀",
	NotPrecedesEqual: "⪯̸",
	NotPrecedesSlantEqual: "⋠",
	NotReverseElement: "∌",
	NotRightTriangle: "⋫",
	NotRightTriangleBar: "⧐̸",
	NotRightTriangleEqual: "⋭",
	NotSquareSubset: "⊏̸",
	NotSquareSubsetEqual: "⋢",
	NotSquareSuperset: "⊐̸",
	NotSquareSupersetEqual: "⋣",
	NotSubset: "⊂⃒",
	NotSubsetEqual: "⊈",
	NotSucceeds: "⊁",
	NotSucceedsEqual: "⪰̸",
	NotSucceedsSlantEqual: "⋡",
	NotSucceedsTilde: "≿̸",
	NotSuperset: "⊃⃒",
	NotSupersetEqual: "⊉",
	NotTilde: "≁",
	NotTildeEqual: "≄",
	NotTildeFullEqual: "≇",
	NotTildeTilde: "≉",
	NotVerticalBar: "∤",
	Nscr: "𝒩",
	Ntilde: "Ñ",
	Nu: "Ν",
	OElig: "Œ",
	Oacute: "Ó",
	Ocirc: "Ô",
	Ocy: "О",
	Odblac: "Ő",
	Ofr: "𝔒",
	Ograve: "Ò",
	Omacr: "Ō",
	Omega: "Ω",
	Omicron: "Ο",
	Oopf: "𝕆",
	OpenCurlyDoubleQuote: "“",
	OpenCurlyQuote: "‘",
	Or: "⩔",
	Oscr: "𝒪",
	Oslash: "Ø",
	Otilde: "Õ",
	Otimes: "⨷",
	Ouml: "Ö",
	OverBar: "‾",
	OverBrace: "⏞",
	OverBracket: "⎴",
	OverParenthesis: "⏜",
	PartialD: "∂",
	Pcy: "П",
	Pfr: "𝔓",
	Phi: "Φ",
	Pi: "Π",
	PlusMinus: "±",
	Poincareplane: "ℌ",
	Popf: "ℙ",
	Pr: "⪻",
	Precedes: "≺",
	PrecedesEqual: "⪯",
	PrecedesSlantEqual: "≼",
	PrecedesTilde: "≾",
	Prime: "″",
	Product: "∏",
	Proportion: "∷",
	Proportional: "∝",
	Pscr: "𝒫",
	Psi: "Ψ",
	QUOT: "\"",
	Qfr: "𝔔",
	Qopf: "ℚ",
	Qscr: "𝒬",
	RBarr: "⤐",
	REG: "®",
	Racute: "Ŕ",
	Rang: "⟫",
	Rarr: "↠",
	Rarrtl: "⤖",
	Rcaron: "Ř",
	Rcedil: "Ŗ",
	Rcy: "Р",
	Re: "ℜ",
	ReverseElement: "∋",
	ReverseEquilibrium: "⇋",
	ReverseUpEquilibrium: "⥯",
	Rfr: "ℜ",
	Rho: "Ρ",
	RightAngleBracket: "⟩",
	RightArrow: "→",
	RightArrowBar: "⇥",
	RightArrowLeftArrow: "⇄",
	RightCeiling: "⌉",
	RightDoubleBracket: "⟧",
	RightDownTeeVector: "⥝",
	RightDownVector: "⇂",
	RightDownVectorBar: "⥕",
	RightFloor: "⌋",
	RightTee: "⊢",
	RightTeeArrow: "↦",
	RightTeeVector: "⥛",
	RightTriangle: "⊳",
	RightTriangleBar: "⧐",
	RightTriangleEqual: "⊵",
	RightUpDownVector: "⥏",
	RightUpTeeVector: "⥜",
	RightUpVector: "↾",
	RightUpVectorBar: "⥔",
	RightVector: "⇀",
	RightVectorBar: "⥓",
	Rightarrow: "⇒",
	Ropf: "ℝ",
	RoundImplies: "⥰",
	Rrightarrow: "⇛",
	Rscr: "ℛ",
	Rsh: "↱",
	RuleDelayed: "⧴",
	SHCHcy: "Щ",
	SHcy: "Ш",
	SOFTcy: "Ь",
	Sacute: "Ś",
	Sc: "⪼",
	Scaron: "Š",
	Scedil: "Ş",
	Scirc: "Ŝ",
	Scy: "С",
	Sfr: "𝔖",
	ShortDownArrow: "↓",
	ShortLeftArrow: "←",
	ShortRightArrow: "→",
	ShortUpArrow: "↑",
	Sigma: "Σ",
	SmallCircle: "∘",
	Sopf: "𝕊",
	Sqrt: "√",
	Square: "□",
	SquareIntersection: "⊓",
	SquareSubset: "⊏",
	SquareSubsetEqual: "⊑",
	SquareSuperset: "⊐",
	SquareSupersetEqual: "⊒",
	SquareUnion: "⊔",
	Sscr: "𝒮",
	Star: "⋆",
	Sub: "⋐",
	Subset: "⋐",
	SubsetEqual: "⊆",
	Succeeds: "≻",
	SucceedsEqual: "⪰",
	SucceedsSlantEqual: "≽",
	SucceedsTilde: "≿",
	SuchThat: "∋",
	Sum: "∑",
	Sup: "⋑",
	Superset: "⊃",
	SupersetEqual: "⊇",
	Supset: "⋑",
	THORN: "Þ",
	TRADE: "™",
	TSHcy: "Ћ",
	TScy: "Ц",
	Tab: "	",
	Tau: "Τ",
	Tcaron: "Ť",
	Tcedil: "Ţ",
	Tcy: "Т",
	Tfr: "𝔗",
	Therefore: "∴",
	Theta: "Θ",
	ThickSpace: "  ",
	ThinSpace: " ",
	Tilde: "∼",
	TildeEqual: "≃",
	TildeFullEqual: "≅",
	TildeTilde: "≈",
	Topf: "𝕋",
	TripleDot: "⃛",
	Tscr: "𝒯",
	Tstrok: "Ŧ",
	Uacute: "Ú",
	Uarr: "↟",
	Uarrocir: "⥉",
	Ubrcy: "Ў",
	Ubreve: "Ŭ",
	Ucirc: "Û",
	Ucy: "У",
	Udblac: "Ű",
	Ufr: "𝔘",
	Ugrave: "Ù",
	Umacr: "Ū",
	UnderBar: "_",
	UnderBrace: "⏟",
	UnderBracket: "⎵",
	UnderParenthesis: "⏝",
	Union: "⋃",
	UnionPlus: "⊎",
	Uogon: "Ų",
	Uopf: "𝕌",
	UpArrow: "↑",
	UpArrowBar: "⤒",
	UpArrowDownArrow: "⇅",
	UpDownArrow: "↕",
	UpEquilibrium: "⥮",
	UpTee: "⊥",
	UpTeeArrow: "↥",
	Uparrow: "⇑",
	Updownarrow: "⇕",
	UpperLeftArrow: "↖",
	UpperRightArrow: "↗",
	Upsi: "ϒ",
	Upsilon: "Υ",
	Uring: "Ů",
	Uscr: "𝒰",
	Utilde: "Ũ",
	Uuml: "Ü",
	VDash: "⊫",
	Vbar: "⫫",
	Vcy: "В",
	Vdash: "⊩",
	Vdashl: "⫦",
	Vee: "⋁",
	Verbar: "‖",
	Vert: "‖",
	VerticalBar: "∣",
	VerticalLine: "|",
	VerticalSeparator: "❘",
	VerticalTilde: "≀",
	VeryThinSpace: " ",
	Vfr: "𝔙",
	Vopf: "𝕍",
	Vscr: "𝒱",
	Vvdash: "⊪",
	Wcirc: "Ŵ",
	Wedge: "⋀",
	Wfr: "𝔚",
	Wopf: "𝕎",
	Wscr: "𝒲",
	Xfr: "𝔛",
	Xi: "Ξ",
	Xopf: "𝕏",
	Xscr: "𝒳",
	YAcy: "Я",
	YIcy: "Ї",
	YUcy: "Ю",
	Yacute: "Ý",
	Ycirc: "Ŷ",
	Ycy: "Ы",
	Yfr: "𝔜",
	Yopf: "𝕐",
	Yscr: "𝒴",
	Yuml: "Ÿ",
	ZHcy: "Ж",
	Zacute: "Ź",
	Zcaron: "Ž",
	Zcy: "З",
	Zdot: "Ż",
	ZeroWidthSpace: "​",
	Zeta: "Ζ",
	Zfr: "ℨ",
	Zopf: "ℤ",
	Zscr: "𝒵",
	aacute: "á",
	abreve: "ă",
	ac: "∾",
	acE: "∾̳",
	acd: "∿",
	acirc: "â",
	acute: "´",
	acy: "а",
	aelig: "æ",
	af: "⁡",
	afr: "𝔞",
	agrave: "à",
	alefsym: "ℵ",
	aleph: "ℵ",
	alpha: "α",
	amacr: "ā",
	amalg: "⨿",
	amp: "&",
	and: "∧",
	andand: "⩕",
	andd: "⩜",
	andslope: "⩘",
	andv: "⩚",
	ang: "∠",
	ange: "⦤",
	angle: "∠",
	angmsd: "∡",
	angmsdaa: "⦨",
	angmsdab: "⦩",
	angmsdac: "⦪",
	angmsdad: "⦫",
	angmsdae: "⦬",
	angmsdaf: "⦭",
	angmsdag: "⦮",
	angmsdah: "⦯",
	angrt: "∟",
	angrtvb: "⊾",
	angrtvbd: "⦝",
	angsph: "∢",
	angst: "Å",
	angzarr: "⍼",
	aogon: "ą",
	aopf: "𝕒",
	ap: "≈",
	apE: "⩰",
	apacir: "⩯",
	ape: "≊",
	apid: "≋",
	apos: "'",
	approx: "≈",
	approxeq: "≊",
	aring: "å",
	ascr: "𝒶",
	ast: "*",
	asymp: "≈",
	asympeq: "≍",
	atilde: "ã",
	auml: "ä",
	awconint: "∳",
	awint: "⨑",
	bNot: "⫭",
	backcong: "≌",
	backepsilon: "϶",
	backprime: "‵",
	backsim: "∽",
	backsimeq: "⋍",
	barvee: "⊽",
	barwed: "⌅",
	barwedge: "⌅",
	bbrk: "⎵",
	bbrktbrk: "⎶",
	bcong: "≌",
	bcy: "б",
	bdquo: "„",
	becaus: "∵",
	because: "∵",
	bemptyv: "⦰",
	bepsi: "϶",
	bernou: "ℬ",
	beta: "β",
	beth: "ℶ",
	between: "≬",
	bfr: "𝔟",
	bigcap: "⋂",
	bigcirc: "◯",
	bigcup: "⋃",
	bigodot: "⨀",
	bigoplus: "⨁",
	bigotimes: "⨂",
	bigsqcup: "⨆",
	bigstar: "★",
	bigtriangledown: "▽",
	bigtriangleup: "△",
	biguplus: "⨄",
	bigvee: "⋁",
	bigwedge: "⋀",
	bkarow: "⤍",
	blacklozenge: "⧫",
	blacksquare: "▪",
	blacktriangle: "▴",
	blacktriangledown: "▾",
	blacktriangleleft: "◂",
	blacktriangleright: "▸",
	blank: "␣",
	blk12: "▒",
	blk14: "░",
	blk34: "▓",
	block: "█",
	bne: "=⃥",
	bnequiv: "≡⃥",
	bnot: "⌐",
	bopf: "𝕓",
	bot: "⊥",
	bottom: "⊥",
	bowtie: "⋈",
	boxDL: "╗",
	boxDR: "╔",
	boxDl: "╖",
	boxDr: "╓",
	boxH: "═",
	boxHD: "╦",
	boxHU: "╩",
	boxHd: "╤",
	boxHu: "╧",
	boxUL: "╝",
	boxUR: "╚",
	boxUl: "╜",
	boxUr: "╙",
	boxV: "║",
	boxVH: "╬",
	boxVL: "╣",
	boxVR: "╠",
	boxVh: "╫",
	boxVl: "╢",
	boxVr: "╟",
	boxbox: "⧉",
	boxdL: "╕",
	boxdR: "╒",
	boxdl: "┐",
	boxdr: "┌",
	boxh: "─",
	boxhD: "╥",
	boxhU: "╨",
	boxhd: "┬",
	boxhu: "┴",
	boxminus: "⊟",
	boxplus: "⊞",
	boxtimes: "⊠",
	boxuL: "╛",
	boxuR: "╘",
	boxul: "┘",
	boxur: "└",
	boxv: "│",
	boxvH: "╪",
	boxvL: "╡",
	boxvR: "╞",
	boxvh: "┼",
	boxvl: "┤",
	boxvr: "├",
	bprime: "‵",
	breve: "˘",
	brvbar: "¦",
	bscr: "𝒷",
	bsemi: "⁏",
	bsim: "∽",
	bsime: "⋍",
	bsol: "\\",
	bsolb: "⧅",
	bsolhsub: "⟈",
	bull: "•",
	bullet: "•",
	bump: "≎",
	bumpE: "⪮",
	bumpe: "≏",
	bumpeq: "≏",
	cacute: "ć",
	cap: "∩",
	capand: "⩄",
	capbrcup: "⩉",
	capcap: "⩋",
	capcup: "⩇",
	capdot: "⩀",
	caps: "∩︀",
	caret: "⁁",
	caron: "ˇ",
	ccaps: "⩍",
	ccaron: "č",
	ccedil: "ç",
	ccirc: "ĉ",
	ccups: "⩌",
	ccupssm: "⩐",
	cdot: "ċ",
	cedil: "¸",
	cemptyv: "⦲",
	cent: "¢",
	centerdot: "·",
	cfr: "𝔠",
	chcy: "ч",
	check: "✓",
	checkmark: "✓",
	chi: "χ",
	cir: "○",
	cirE: "⧃",
	circ: "ˆ",
	circeq: "≗",
	circlearrowleft: "↺",
	circlearrowright: "↻",
	circledR: "®",
	circledS: "Ⓢ",
	circledast: "⊛",
	circledcirc: "⊚",
	circleddash: "⊝",
	cire: "≗",
	cirfnint: "⨐",
	cirmid: "⫯",
	cirscir: "⧂",
	clubs: "♣",
	clubsuit: "♣",
	colon: ":",
	colone: "≔",
	coloneq: "≔",
	comma: ",",
	commat: "@",
	comp: "∁",
	compfn: "∘",
	complement: "∁",
	complexes: "ℂ",
	cong: "≅",
	congdot: "⩭",
	conint: "∮",
	copf: "𝕔",
	coprod: "∐",
	copy: "©",
	copysr: "℗",
	crarr: "↵",
	cross: "✗",
	cscr: "𝒸",
	csub: "⫏",
	csube: "⫑",
	csup: "⫐",
	csupe: "⫒",
	ctdot: "⋯",
	cudarrl: "⤸",
	cudarrr: "⤵",
	cuepr: "⋞",
	cuesc: "⋟",
	cularr: "↶",
	cularrp: "⤽",
	cup: "∪",
	cupbrcap: "⩈",
	cupcap: "⩆",
	cupcup: "⩊",
	cupdot: "⊍",
	cupor: "⩅",
	cups: "∪︀",
	curarr: "↷",
	curarrm: "⤼",
	curlyeqprec: "⋞",
	curlyeqsucc: "⋟",
	curlyvee: "⋎",
	curlywedge: "⋏",
	curren: "¤",
	curvearrowleft: "↶",
	curvearrowright: "↷",
	cuvee: "⋎",
	cuwed: "⋏",
	cwconint: "∲",
	cwint: "∱",
	cylcty: "⌭",
	dArr: "⇓",
	dHar: "⥥",
	dagger: "†",
	daleth: "ℸ",
	darr: "↓",
	dash: "‐",
	dashv: "⊣",
	dbkarow: "⤏",
	dblac: "˝",
	dcaron: "ď",
	dcy: "д",
	dd: "ⅆ",
	ddagger: "‡",
	ddarr: "⇊",
	ddotseq: "⩷",
	deg: "°",
	delta: "δ",
	demptyv: "⦱",
	dfisht: "⥿",
	dfr: "𝔡",
	dharl: "⇃",
	dharr: "⇂",
	diam: "⋄",
	diamond: "⋄",
	diamondsuit: "♦",
	diams: "♦",
	die: "¨",
	digamma: "ϝ",
	disin: "⋲",
	div: "÷",
	divide: "÷",
	divideontimes: "⋇",
	divonx: "⋇",
	djcy: "ђ",
	dlcorn: "⌞",
	dlcrop: "⌍",
	dollar: "$",
	dopf: "𝕕",
	dot: "˙",
	doteq: "≐",
	doteqdot: "≑",
	dotminus: "∸",
	dotplus: "∔",
	dotsquare: "⊡",
	doublebarwedge: "⌆",
	downarrow: "↓",
	downdownarrows: "⇊",
	downharpoonleft: "⇃",
	downharpoonright: "⇂",
	drbkarow: "⤐",
	drcorn: "⌟",
	drcrop: "⌌",
	dscr: "𝒹",
	dscy: "ѕ",
	dsol: "⧶",
	dstrok: "đ",
	dtdot: "⋱",
	dtri: "▿",
	dtrif: "▾",
	duarr: "⇵",
	duhar: "⥯",
	dwangle: "⦦",
	dzcy: "џ",
	dzigrarr: "⟿",
	eDDot: "⩷",
	eDot: "≑",
	eacute: "é",
	easter: "⩮",
	ecaron: "ě",
	ecir: "≖",
	ecirc: "ê",
	ecolon: "≕",
	ecy: "э",
	edot: "ė",
	ee: "ⅇ",
	efDot: "≒",
	efr: "𝔢",
	eg: "⪚",
	egrave: "è",
	egs: "⪖",
	egsdot: "⪘",
	el: "⪙",
	elinters: "⏧",
	ell: "ℓ",
	els: "⪕",
	elsdot: "⪗",
	emacr: "ē",
	empty: "∅",
	emptyset: "∅",
	emptyv: "∅",
	emsp13: " ",
	emsp14: " ",
	emsp: " ",
	eng: "ŋ",
	ensp: " ",
	eogon: "ę",
	eopf: "𝕖",
	epar: "⋕",
	eparsl: "⧣",
	eplus: "⩱",
	epsi: "ε",
	epsilon: "ε",
	epsiv: "ϵ",
	eqcirc: "≖",
	eqcolon: "≕",
	eqsim: "≂",
	eqslantgtr: "⪖",
	eqslantless: "⪕",
	equals: "=",
	equest: "≟",
	equiv: "≡",
	equivDD: "⩸",
	eqvparsl: "⧥",
	erDot: "≓",
	erarr: "⥱",
	escr: "ℯ",
	esdot: "≐",
	esim: "≂",
	eta: "η",
	eth: "ð",
	euml: "ë",
	euro: "€",
	excl: "!",
	exist: "∃",
	expectation: "ℰ",
	exponentiale: "ⅇ",
	fallingdotseq: "≒",
	fcy: "ф",
	female: "♀",
	ffilig: "ﬃ",
	fflig: "ﬀ",
	ffllig: "ﬄ",
	ffr: "𝔣",
	filig: "ﬁ",
	fjlig: "fj",
	flat: "♭",
	fllig: "ﬂ",
	fltns: "▱",
	fnof: "ƒ",
	fopf: "𝕗",
	forall: "∀",
	fork: "⋔",
	forkv: "⫙",
	fpartint: "⨍",
	frac12: "½",
	frac13: "⅓",
	frac14: "¼",
	frac15: "⅕",
	frac16: "⅙",
	frac18: "⅛",
	frac23: "⅔",
	frac25: "⅖",
	frac34: "¾",
	frac35: "⅗",
	frac38: "⅜",
	frac45: "⅘",
	frac56: "⅚",
	frac58: "⅝",
	frac78: "⅞",
	frasl: "⁄",
	frown: "⌢",
	fscr: "𝒻",
	gE: "≧",
	gEl: "⪌",
	gacute: "ǵ",
	gamma: "γ",
	gammad: "ϝ",
	gap: "⪆",
	gbreve: "ğ",
	gcirc: "ĝ",
	gcy: "г",
	gdot: "ġ",
	ge: "≥",
	gel: "⋛",
	geq: "≥",
	geqq: "≧",
	geqslant: "⩾",
	ges: "⩾",
	gescc: "⪩",
	gesdot: "⪀",
	gesdoto: "⪂",
	gesdotol: "⪄",
	gesl: "⋛︀",
	gesles: "⪔",
	gfr: "𝔤",
	gg: "≫",
	ggg: "⋙",
	gimel: "ℷ",
	gjcy: "ѓ",
	gl: "≷",
	glE: "⪒",
	gla: "⪥",
	glj: "⪤",
	gnE: "≩",
	gnap: "⪊",
	gnapprox: "⪊",
	gne: "⪈",
	gneq: "⪈",
	gneqq: "≩",
	gnsim: "⋧",
	gopf: "𝕘",
	grave: "`",
	gscr: "ℊ",
	gsim: "≳",
	gsime: "⪎",
	gsiml: "⪐",
	gt: ">",
	gtcc: "⪧",
	gtcir: "⩺",
	gtdot: "⋗",
	gtlPar: "⦕",
	gtquest: "⩼",
	gtrapprox: "⪆",
	gtrarr: "⥸",
	gtrdot: "⋗",
	gtreqless: "⋛",
	gtreqqless: "⪌",
	gtrless: "≷",
	gtrsim: "≳",
	gvertneqq: "≩︀",
	gvnE: "≩︀",
	hArr: "⇔",
	hairsp: " ",
	half: "½",
	hamilt: "ℋ",
	hardcy: "ъ",
	harr: "↔",
	harrcir: "⥈",
	harrw: "↭",
	hbar: "ℏ",
	hcirc: "ĥ",
	hearts: "♥",
	heartsuit: "♥",
	hellip: "…",
	hercon: "⊹",
	hfr: "𝔥",
	hksearow: "⤥",
	hkswarow: "⤦",
	hoarr: "⇿",
	homtht: "∻",
	hookleftarrow: "↩",
	hookrightarrow: "↪",
	hopf: "𝕙",
	horbar: "―",
	hscr: "𝒽",
	hslash: "ℏ",
	hstrok: "ħ",
	hybull: "⁃",
	hyphen: "‐",
	iacute: "í",
	ic: "⁣",
	icirc: "î",
	icy: "и",
	iecy: "е",
	iexcl: "¡",
	iff: "⇔",
	ifr: "𝔦",
	igrave: "ì",
	ii: "ⅈ",
	iiiint: "⨌",
	iiint: "∭",
	iinfin: "⧜",
	iiota: "℩",
	ijlig: "ĳ",
	imacr: "ī",
	image: "ℑ",
	imagline: "ℐ",
	imagpart: "ℑ",
	imath: "ı",
	imof: "⊷",
	imped: "Ƶ",
	in: "∈",
	incare: "℅",
	infin: "∞",
	infintie: "⧝",
	inodot: "ı",
	int: "∫",
	intcal: "⊺",
	integers: "ℤ",
	intercal: "⊺",
	intlarhk: "⨗",
	intprod: "⨼",
	iocy: "ё",
	iogon: "į",
	iopf: "𝕚",
	iota: "ι",
	iprod: "⨼",
	iquest: "¿",
	iscr: "𝒾",
	isin: "∈",
	isinE: "⋹",
	isindot: "⋵",
	isins: "⋴",
	isinsv: "⋳",
	isinv: "∈",
	it: "⁢",
	itilde: "ĩ",
	iukcy: "і",
	iuml: "ï",
	jcirc: "ĵ",
	jcy: "й",
	jfr: "𝔧",
	jmath: "ȷ",
	jopf: "𝕛",
	jscr: "𝒿",
	jsercy: "ј",
	jukcy: "є",
	kappa: "κ",
	kappav: "ϰ",
	kcedil: "ķ",
	kcy: "к",
	kfr: "𝔨",
	kgreen: "ĸ",
	khcy: "х",
	kjcy: "ќ",
	kopf: "𝕜",
	kscr: "𝓀",
	lAarr: "⇚",
	lArr: "⇐",
	lAtail: "⤛",
	lBarr: "⤎",
	lE: "≦",
	lEg: "⪋",
	lHar: "⥢",
	lacute: "ĺ",
	laemptyv: "⦴",
	lagran: "ℒ",
	lambda: "λ",
	lang: "⟨",
	langd: "⦑",
	langle: "⟨",
	lap: "⪅",
	laquo: "«",
	larr: "←",
	larrb: "⇤",
	larrbfs: "⤟",
	larrfs: "⤝",
	larrhk: "↩",
	larrlp: "↫",
	larrpl: "⤹",
	larrsim: "⥳",
	larrtl: "↢",
	lat: "⪫",
	latail: "⤙",
	late: "⪭",
	lates: "⪭︀",
	lbarr: "⤌",
	lbbrk: "❲",
	lbrace: "{",
	lbrack: "[",
	lbrke: "⦋",
	lbrksld: "⦏",
	lbrkslu: "⦍",
	lcaron: "ľ",
	lcedil: "ļ",
	lceil: "⌈",
	lcub: "{",
	lcy: "л",
	ldca: "⤶",
	ldquo: "“",
	ldquor: "„",
	ldrdhar: "⥧",
	ldrushar: "⥋",
	ldsh: "↲",
	le: "≤",
	leftarrow: "←",
	leftarrowtail: "↢",
	leftharpoondown: "↽",
	leftharpoonup: "↼",
	leftleftarrows: "⇇",
	leftrightarrow: "↔",
	leftrightarrows: "⇆",
	leftrightharpoons: "⇋",
	leftrightsquigarrow: "↭",
	leftthreetimes: "⋋",
	leg: "⋚",
	leq: "≤",
	leqq: "≦",
	leqslant: "⩽",
	les: "⩽",
	lescc: "⪨",
	lesdot: "⩿",
	lesdoto: "⪁",
	lesdotor: "⪃",
	lesg: "⋚︀",
	lesges: "⪓",
	lessapprox: "⪅",
	lessdot: "⋖",
	lesseqgtr: "⋚",
	lesseqqgtr: "⪋",
	lessgtr: "≶",
	lesssim: "≲",
	lfisht: "⥼",
	lfloor: "⌊",
	lfr: "𝔩",
	lg: "≶",
	lgE: "⪑",
	lhard: "↽",
	lharu: "↼",
	lharul: "⥪",
	lhblk: "▄",
	ljcy: "љ",
	ll: "≪",
	llarr: "⇇",
	llcorner: "⌞",
	llhard: "⥫",
	lltri: "◺",
	lmidot: "ŀ",
	lmoust: "⎰",
	lmoustache: "⎰",
	lnE: "≨",
	lnap: "⪉",
	lnapprox: "⪉",
	lne: "⪇",
	lneq: "⪇",
	lneqq: "≨",
	lnsim: "⋦",
	loang: "⟬",
	loarr: "⇽",
	lobrk: "⟦",
	longleftarrow: "⟵",
	longleftrightarrow: "⟷",
	longmapsto: "⟼",
	longrightarrow: "⟶",
	looparrowleft: "↫",
	looparrowright: "↬",
	lopar: "⦅",
	lopf: "𝕝",
	loplus: "⨭",
	lotimes: "⨴",
	lowast: "∗",
	lowbar: "_",
	loz: "◊",
	lozenge: "◊",
	lozf: "⧫",
	lpar: "(",
	lparlt: "⦓",
	lrarr: "⇆",
	lrcorner: "⌟",
	lrhar: "⇋",
	lrhard: "⥭",
	lrm: "‎",
	lrtri: "⊿",
	lsaquo: "‹",
	lscr: "𝓁",
	lsh: "↰",
	lsim: "≲",
	lsime: "⪍",
	lsimg: "⪏",
	lsqb: "[",
	lsquo: "‘",
	lsquor: "‚",
	lstrok: "ł",
	lt: "<",
	ltcc: "⪦",
	ltcir: "⩹",
	ltdot: "⋖",
	lthree: "⋋",
	ltimes: "⋉",
	ltlarr: "⥶",
	ltquest: "⩻",
	ltrPar: "⦖",
	ltri: "◃",
	ltrie: "⊴",
	ltrif: "◂",
	lurdshar: "⥊",
	luruhar: "⥦",
	lvertneqq: "≨︀",
	lvnE: "≨︀",
	mDDot: "∺",
	macr: "¯",
	male: "♂",
	malt: "✠",
	maltese: "✠",
	map: "↦",
	mapsto: "↦",
	mapstodown: "↧",
	mapstoleft: "↤",
	mapstoup: "↥",
	marker: "▮",
	mcomma: "⨩",
	mcy: "м",
	mdash: "—",
	measuredangle: "∡",
	mfr: "𝔪",
	mho: "℧",
	micro: "µ",
	mid: "∣",
	midast: "*",
	midcir: "⫰",
	middot: "·",
	minus: "−",
	minusb: "⊟",
	minusd: "∸",
	minusdu: "⨪",
	mlcp: "⫛",
	mldr: "…",
	mnplus: "∓",
	models: "⊧",
	mopf: "𝕞",
	mp: "∓",
	mscr: "𝓂",
	mstpos: "∾",
	mu: "μ",
	multimap: "⊸",
	mumap: "⊸",
	nGg: "⋙̸",
	nGt: "≫⃒",
	nGtv: "≫̸",
	nLeftarrow: "⇍",
	nLeftrightarrow: "⇎",
	nLl: "⋘̸",
	nLt: "≪⃒",
	nLtv: "≪̸",
	nRightarrow: "⇏",
	nVDash: "⊯",
	nVdash: "⊮",
	nabla: "∇",
	nacute: "ń",
	nang: "∠⃒",
	nap: "≉",
	napE: "⩰̸",
	napid: "≋̸",
	napos: "ŉ",
	napprox: "≉",
	natur: "♮",
	natural: "♮",
	naturals: "ℕ",
	nbsp: "\xA0",
	nbump: "≎̸",
	nbumpe: "≏̸",
	ncap: "⩃",
	ncaron: "ň",
	ncedil: "ņ",
	ncong: "≇",
	ncongdot: "⩭̸",
	ncup: "⩂",
	ncy: "н",
	ndash: "–",
	ne: "≠",
	neArr: "⇗",
	nearhk: "⤤",
	nearr: "↗",
	nearrow: "↗",
	nedot: "≐̸",
	nequiv: "≢",
	nesear: "⤨",
	nesim: "≂̸",
	nexist: "∄",
	nexists: "∄",
	nfr: "𝔫",
	ngE: "≧̸",
	nge: "≱",
	ngeq: "≱",
	ngeqq: "≧̸",
	ngeqslant: "⩾̸",
	nges: "⩾̸",
	ngsim: "≵",
	ngt: "≯",
	ngtr: "≯",
	nhArr: "⇎",
	nharr: "↮",
	nhpar: "⫲",
	ni: "∋",
	nis: "⋼",
	nisd: "⋺",
	niv: "∋",
	njcy: "њ",
	nlArr: "⇍",
	nlE: "≦̸",
	nlarr: "↚",
	nldr: "‥",
	nle: "≰",
	nleftarrow: "↚",
	nleftrightarrow: "↮",
	nleq: "≰",
	nleqq: "≦̸",
	nleqslant: "⩽̸",
	nles: "⩽̸",
	nless: "≮",
	nlsim: "≴",
	nlt: "≮",
	nltri: "⋪",
	nltrie: "⋬",
	nmid: "∤",
	nopf: "𝕟",
	not: "¬",
	notin: "∉",
	notinE: "⋹̸",
	notindot: "⋵̸",
	notinva: "∉",
	notinvb: "⋷",
	notinvc: "⋶",
	notni: "∌",
	notniva: "∌",
	notnivb: "⋾",
	notnivc: "⋽",
	npar: "∦",
	nparallel: "∦",
	nparsl: "⫽⃥",
	npart: "∂̸",
	npolint: "⨔",
	npr: "⊀",
	nprcue: "⋠",
	npre: "⪯̸",
	nprec: "⊀",
	npreceq: "⪯̸",
	nrArr: "⇏",
	nrarr: "↛",
	nrarrc: "⤳̸",
	nrarrw: "↝̸",
	nrightarrow: "↛",
	nrtri: "⋫",
	nrtrie: "⋭",
	nsc: "⊁",
	nsccue: "⋡",
	nsce: "⪰̸",
	nscr: "𝓃",
	nshortmid: "∤",
	nshortparallel: "∦",
	nsim: "≁",
	nsime: "≄",
	nsimeq: "≄",
	nsmid: "∤",
	nspar: "∦",
	nsqsube: "⋢",
	nsqsupe: "⋣",
	nsub: "⊄",
	nsubE: "⫅̸",
	nsube: "⊈",
	nsubset: "⊂⃒",
	nsubseteq: "⊈",
	nsubseteqq: "⫅̸",
	nsucc: "⊁",
	nsucceq: "⪰̸",
	nsup: "⊅",
	nsupE: "⫆̸",
	nsupe: "⊉",
	nsupset: "⊃⃒",
	nsupseteq: "⊉",
	nsupseteqq: "⫆̸",
	ntgl: "≹",
	ntilde: "ñ",
	ntlg: "≸",
	ntriangleleft: "⋪",
	ntrianglelefteq: "⋬",
	ntriangleright: "⋫",
	ntrianglerighteq: "⋭",
	nu: "ν",
	num: "#",
	numero: "№",
	numsp: " ",
	nvDash: "⊭",
	nvHarr: "⤄",
	nvap: "≍⃒",
	nvdash: "⊬",
	nvge: "≥⃒",
	nvgt: ">⃒",
	nvinfin: "⧞",
	nvlArr: "⤂",
	nvle: "≤⃒",
	nvlt: "<⃒",
	nvltrie: "⊴⃒",
	nvrArr: "⤃",
	nvrtrie: "⊵⃒",
	nvsim: "∼⃒",
	nwArr: "⇖",
	nwarhk: "⤣",
	nwarr: "↖",
	nwarrow: "↖",
	nwnear: "⤧",
	oS: "Ⓢ",
	oacute: "ó",
	oast: "⊛",
	ocir: "⊚",
	ocirc: "ô",
	ocy: "о",
	odash: "⊝",
	odblac: "ő",
	odiv: "⨸",
	odot: "⊙",
	odsold: "⦼",
	oelig: "œ",
	ofcir: "⦿",
	ofr: "𝔬",
	ogon: "˛",
	ograve: "ò",
	ogt: "⧁",
	ohbar: "⦵",
	ohm: "Ω",
	oint: "∮",
	olarr: "↺",
	olcir: "⦾",
	olcross: "⦻",
	oline: "‾",
	olt: "⧀",
	omacr: "ō",
	omega: "ω",
	omicron: "ο",
	omid: "⦶",
	ominus: "⊖",
	oopf: "𝕠",
	opar: "⦷",
	operp: "⦹",
	oplus: "⊕",
	or: "∨",
	orarr: "↻",
	ord: "⩝",
	order: "ℴ",
	orderof: "ℴ",
	ordf: "ª",
	ordm: "º",
	origof: "⊶",
	oror: "⩖",
	orslope: "⩗",
	orv: "⩛",
	oscr: "ℴ",
	oslash: "ø",
	osol: "⊘",
	otilde: "õ",
	otimes: "⊗",
	otimesas: "⨶",
	ouml: "ö",
	ovbar: "⌽",
	par: "∥",
	para: "¶",
	parallel: "∥",
	parsim: "⫳",
	parsl: "⫽",
	part: "∂",
	pcy: "п",
	percnt: "%",
	period: ".",
	permil: "‰",
	perp: "⊥",
	pertenk: "‱",
	pfr: "𝔭",
	phi: "φ",
	phiv: "ϕ",
	phmmat: "ℳ",
	phone: "☎",
	pi: "π",
	pitchfork: "⋔",
	piv: "ϖ",
	planck: "ℏ",
	planckh: "ℎ",
	plankv: "ℏ",
	plus: "+",
	plusacir: "⨣",
	plusb: "⊞",
	pluscir: "⨢",
	plusdo: "∔",
	plusdu: "⨥",
	pluse: "⩲",
	plusmn: "±",
	plussim: "⨦",
	plustwo: "⨧",
	pm: "±",
	pointint: "⨕",
	popf: "𝕡",
	pound: "£",
	pr: "≺",
	prE: "⪳",
	prap: "⪷",
	prcue: "≼",
	pre: "⪯",
	prec: "≺",
	precapprox: "⪷",
	preccurlyeq: "≼",
	preceq: "⪯",
	precnapprox: "⪹",
	precneqq: "⪵",
	precnsim: "⋨",
	precsim: "≾",
	prime: "′",
	primes: "ℙ",
	prnE: "⪵",
	prnap: "⪹",
	prnsim: "⋨",
	prod: "∏",
	profalar: "⌮",
	profline: "⌒",
	profsurf: "⌓",
	prop: "∝",
	propto: "∝",
	prsim: "≾",
	prurel: "⊰",
	pscr: "𝓅",
	psi: "ψ",
	puncsp: " ",
	qfr: "𝔮",
	qint: "⨌",
	qopf: "𝕢",
	qprime: "⁗",
	qscr: "𝓆",
	quaternions: "ℍ",
	quatint: "⨖",
	quest: "?",
	questeq: "≟",
	quot: "\"",
	rAarr: "⇛",
	rArr: "⇒",
	rAtail: "⤜",
	rBarr: "⤏",
	rHar: "⥤",
	race: "∽̱",
	racute: "ŕ",
	radic: "√",
	raemptyv: "⦳",
	rang: "⟩",
	rangd: "⦒",
	range: "⦥",
	rangle: "⟩",
	raquo: "»",
	rarr: "→",
	rarrap: "⥵",
	rarrb: "⇥",
	rarrbfs: "⤠",
	rarrc: "⤳",
	rarrfs: "⤞",
	rarrhk: "↪",
	rarrlp: "↬",
	rarrpl: "⥅",
	rarrsim: "⥴",
	rarrtl: "↣",
	rarrw: "↝",
	ratail: "⤚",
	ratio: "∶",
	rationals: "ℚ",
	rbarr: "⤍",
	rbbrk: "❳",
	rbrace: "}",
	rbrack: "]",
	rbrke: "⦌",
	rbrksld: "⦎",
	rbrkslu: "⦐",
	rcaron: "ř",
	rcedil: "ŗ",
	rceil: "⌉",
	rcub: "}",
	rcy: "р",
	rdca: "⤷",
	rdldhar: "⥩",
	rdquo: "”",
	rdquor: "”",
	rdsh: "↳",
	real: "ℜ",
	realine: "ℛ",
	realpart: "ℜ",
	reals: "ℝ",
	rect: "▭",
	reg: "®",
	rfisht: "⥽",
	rfloor: "⌋",
	rfr: "𝔯",
	rhard: "⇁",
	rharu: "⇀",
	rharul: "⥬",
	rho: "ρ",
	rhov: "ϱ",
	rightarrow: "→",
	rightarrowtail: "↣",
	rightharpoondown: "⇁",
	rightharpoonup: "⇀",
	rightleftarrows: "⇄",
	rightleftharpoons: "⇌",
	rightrightarrows: "⇉",
	rightsquigarrow: "↝",
	rightthreetimes: "⋌",
	ring: "˚",
	risingdotseq: "≓",
	rlarr: "⇄",
	rlhar: "⇌",
	rlm: "‏",
	rmoust: "⎱",
	rmoustache: "⎱",
	rnmid: "⫮",
	roang: "⟭",
	roarr: "⇾",
	robrk: "⟧",
	ropar: "⦆",
	ropf: "𝕣",
	roplus: "⨮",
	rotimes: "⨵",
	rpar: ")",
	rpargt: "⦔",
	rppolint: "⨒",
	rrarr: "⇉",
	rsaquo: "›",
	rscr: "𝓇",
	rsh: "↱",
	rsqb: "]",
	rsquo: "’",
	rsquor: "’",
	rthree: "⋌",
	rtimes: "⋊",
	rtri: "▹",
	rtrie: "⊵",
	rtrif: "▸",
	rtriltri: "⧎",
	ruluhar: "⥨",
	rx: "℞",
	sacute: "ś",
	sbquo: "‚",
	sc: "≻",
	scE: "⪴",
	scap: "⪸",
	scaron: "š",
	sccue: "≽",
	sce: "⪰",
	scedil: "ş",
	scirc: "ŝ",
	scnE: "⪶",
	scnap: "⪺",
	scnsim: "⋩",
	scpolint: "⨓",
	scsim: "≿",
	scy: "с",
	sdot: "⋅",
	sdotb: "⊡",
	sdote: "⩦",
	seArr: "⇘",
	searhk: "⤥",
	searr: "↘",
	searrow: "↘",
	sect: "§",
	semi: ";",
	seswar: "⤩",
	setminus: "∖",
	setmn: "∖",
	sext: "✶",
	sfr: "𝔰",
	sfrown: "⌢",
	sharp: "♯",
	shchcy: "щ",
	shcy: "ш",
	shortmid: "∣",
	shortparallel: "∥",
	shy: "­",
	sigma: "σ",
	sigmaf: "ς",
	sigmav: "ς",
	sim: "∼",
	simdot: "⩪",
	sime: "≃",
	simeq: "≃",
	simg: "⪞",
	simgE: "⪠",
	siml: "⪝",
	simlE: "⪟",
	simne: "≆",
	simplus: "⨤",
	simrarr: "⥲",
	slarr: "←",
	smallsetminus: "∖",
	smashp: "⨳",
	smeparsl: "⧤",
	smid: "∣",
	smile: "⌣",
	smt: "⪪",
	smte: "⪬",
	smtes: "⪬︀",
	softcy: "ь",
	sol: "/",
	solb: "⧄",
	solbar: "⌿",
	sopf: "𝕤",
	spades: "♠",
	spadesuit: "♠",
	spar: "∥",
	sqcap: "⊓",
	sqcaps: "⊓︀",
	sqcup: "⊔",
	sqcups: "⊔︀",
	sqsub: "⊏",
	sqsube: "⊑",
	sqsubset: "⊏",
	sqsubseteq: "⊑",
	sqsup: "⊐",
	sqsupe: "⊒",
	sqsupset: "⊐",
	sqsupseteq: "⊒",
	squ: "□",
	square: "□",
	squarf: "▪",
	squf: "▪",
	srarr: "→",
	sscr: "𝓈",
	ssetmn: "∖",
	ssmile: "⌣",
	sstarf: "⋆",
	star: "☆",
	starf: "★",
	straightepsilon: "ϵ",
	straightphi: "ϕ",
	strns: "¯",
	sub: "⊂",
	subE: "⫅",
	subdot: "⪽",
	sube: "⊆",
	subedot: "⫃",
	submult: "⫁",
	subnE: "⫋",
	subne: "⊊",
	subplus: "⪿",
	subrarr: "⥹",
	subset: "⊂",
	subseteq: "⊆",
	subseteqq: "⫅",
	subsetneq: "⊊",
	subsetneqq: "⫋",
	subsim: "⫇",
	subsub: "⫕",
	subsup: "⫓",
	succ: "≻",
	succapprox: "⪸",
	succcurlyeq: "≽",
	succeq: "⪰",
	succnapprox: "⪺",
	succneqq: "⪶",
	succnsim: "⋩",
	succsim: "≿",
	sum: "∑",
	sung: "♪",
	sup1: "¹",
	sup2: "²",
	sup3: "³",
	sup: "⊃",
	supE: "⫆",
	supdot: "⪾",
	supdsub: "⫘",
	supe: "⊇",
	supedot: "⫄",
	suphsol: "⟉",
	suphsub: "⫗",
	suplarr: "⥻",
	supmult: "⫂",
	supnE: "⫌",
	supne: "⊋",
	supplus: "⫀",
	supset: "⊃",
	supseteq: "⊇",
	supseteqq: "⫆",
	supsetneq: "⊋",
	supsetneqq: "⫌",
	supsim: "⫈",
	supsub: "⫔",
	supsup: "⫖",
	swArr: "⇙",
	swarhk: "⤦",
	swarr: "↙",
	swarrow: "↙",
	swnwar: "⤪",
	szlig: "ß",
	target: "⌖",
	tau: "τ",
	tbrk: "⎴",
	tcaron: "ť",
	tcedil: "ţ",
	tcy: "т",
	tdot: "⃛",
	telrec: "⌕",
	tfr: "𝔱",
	there4: "∴",
	therefore: "∴",
	theta: "θ",
	thetasym: "ϑ",
	thetav: "ϑ",
	thickapprox: "≈",
	thicksim: "∼",
	thinsp: " ",
	thkap: "≈",
	thksim: "∼",
	thorn: "þ",
	tilde: "˜",
	times: "×",
	timesb: "⊠",
	timesbar: "⨱",
	timesd: "⨰",
	tint: "∭",
	toea: "⤨",
	top: "⊤",
	topbot: "⌶",
	topcir: "⫱",
	topf: "𝕥",
	topfork: "⫚",
	tosa: "⤩",
	tprime: "‴",
	trade: "™",
	triangle: "▵",
	triangledown: "▿",
	triangleleft: "◃",
	trianglelefteq: "⊴",
	triangleq: "≜",
	triangleright: "▹",
	trianglerighteq: "⊵",
	tridot: "◬",
	trie: "≜",
	triminus: "⨺",
	triplus: "⨹",
	trisb: "⧍",
	tritime: "⨻",
	trpezium: "⏢",
	tscr: "𝓉",
	tscy: "ц",
	tshcy: "ћ",
	tstrok: "ŧ",
	twixt: "≬",
	twoheadleftarrow: "↞",
	twoheadrightarrow: "↠",
	uArr: "⇑",
	uHar: "⥣",
	uacute: "ú",
	uarr: "↑",
	ubrcy: "ў",
	ubreve: "ŭ",
	ucirc: "û",
	ucy: "у",
	udarr: "⇅",
	udblac: "ű",
	udhar: "⥮",
	ufisht: "⥾",
	ufr: "𝔲",
	ugrave: "ù",
	uharl: "↿",
	uharr: "↾",
	uhblk: "▀",
	ulcorn: "⌜",
	ulcorner: "⌜",
	ulcrop: "⌏",
	ultri: "◸",
	umacr: "ū",
	uml: "¨",
	uogon: "ų",
	uopf: "𝕦",
	uparrow: "↑",
	updownarrow: "↕",
	upharpoonleft: "↿",
	upharpoonright: "↾",
	uplus: "⊎",
	upsi: "υ",
	upsih: "ϒ",
	upsilon: "υ",
	upuparrows: "⇈",
	urcorn: "⌝",
	urcorner: "⌝",
	urcrop: "⌎",
	uring: "ů",
	urtri: "◹",
	uscr: "𝓊",
	utdot: "⋰",
	utilde: "ũ",
	utri: "▵",
	utrif: "▴",
	uuarr: "⇈",
	uuml: "ü",
	uwangle: "⦧",
	vArr: "⇕",
	vBar: "⫨",
	vBarv: "⫩",
	vDash: "⊨",
	vangrt: "⦜",
	varepsilon: "ϵ",
	varkappa: "ϰ",
	varnothing: "∅",
	varphi: "ϕ",
	varpi: "ϖ",
	varpropto: "∝",
	varr: "↕",
	varrho: "ϱ",
	varsigma: "ς",
	varsubsetneq: "⊊︀",
	varsubsetneqq: "⫋︀",
	varsupsetneq: "⊋︀",
	varsupsetneqq: "⫌︀",
	vartheta: "ϑ",
	vartriangleleft: "⊲",
	vartriangleright: "⊳",
	vcy: "в",
	vdash: "⊢",
	vee: "∨",
	veebar: "⊻",
	veeeq: "≚",
	vellip: "⋮",
	verbar: "|",
	vert: "|",
	vfr: "𝔳",
	vltri: "⊲",
	vnsub: "⊂⃒",
	vnsup: "⊃⃒",
	vopf: "𝕧",
	vprop: "∝",
	vrtri: "⊳",
	vscr: "𝓋",
	vsubnE: "⫋︀",
	vsubne: "⊊︀",
	vsupnE: "⫌︀",
	vsupne: "⊋︀",
	vzigzag: "⦚",
	wcirc: "ŵ",
	wedbar: "⩟",
	wedge: "∧",
	wedgeq: "≙",
	weierp: "℘",
	wfr: "𝔴",
	wopf: "𝕨",
	wp: "℘",
	wr: "≀",
	wreath: "≀",
	wscr: "𝓌",
	xcap: "⋂",
	xcirc: "◯",
	xcup: "⋃",
	xdtri: "▽",
	xfr: "𝔵",
	xhArr: "⟺",
	xharr: "⟷",
	xi: "ξ",
	xlArr: "⟸",
	xlarr: "⟵",
	xmap: "⟼",
	xnis: "⋻",
	xodot: "⨀",
	xopf: "𝕩",
	xoplus: "⨁",
	xotime: "⨂",
	xrArr: "⟹",
	xrarr: "⟶",
	xscr: "𝓍",
	xsqcup: "⨆",
	xuplus: "⨄",
	xutri: "△",
	xvee: "⋁",
	xwedge: "⋀",
	yacute: "ý",
	yacy: "я",
	ycirc: "ŷ",
	ycy: "ы",
	yen: "¥",
	yfr: "𝔶",
	yicy: "ї",
	yopf: "𝕪",
	yscr: "𝓎",
	yucy: "ю",
	yuml: "ÿ",
	zacute: "ź",
	zcaron: "ž",
	zcy: "з",
	zdot: "ż",
	zeetrf: "ℨ",
	zeta: "ζ",
	zfr: "𝔷",
	zhcy: "ж",
	zigrarr: "⇝",
	zopf: "𝕫",
	zscr: "𝓏",
	zwj: "‍",
	zwnj: "‌"
};
//#endregion
//#region node_modules/decode-named-character-reference/index.js
var own$1 = {}.hasOwnProperty;
/**
* Decode a single character reference (without the `&` or `;`).
* You probably only need this when you’re building parsers yourself that follow
* different rules compared to HTML.
* This is optimized to be tiny in browsers.
*
* @param {string} value
*   `notin` (named), `#123` (deci), `#x123` (hexa).
* @returns {string|false}
*   Decoded reference.
*/
function decodeNamedCharacterReference(value) {
	return own$1.call(characterEntities, value) ? characterEntities[value] : false;
}
//#endregion
//#region node_modules/parse-entities/lib/index.js
/**
* @import {Point} from 'unist'
* @import {Options} from '../index.js'
*/
var messages = [
	"",
	"Named character references must be terminated by a semicolon",
	"Numeric character references must be terminated by a semicolon",
	"Named character references cannot be empty",
	"Numeric character references cannot be empty",
	"Named character references must be known",
	"Numeric character references cannot be disallowed",
	"Numeric character references cannot be outside the permissible Unicode range"
];
/**
* Parse HTML character references.
*
* @param {string} value
* @param {Readonly<Options> | null | undefined} [options]
*/
function parseEntities(value, options) {
	const settings = options || {};
	const additional = typeof settings.additional === "string" ? settings.additional.charCodeAt(0) : settings.additional;
	/** @type {Array<string>} */
	const result = [];
	let index = 0;
	let lines = -1;
	let queue = "";
	/** @type {Point | undefined} */
	let point;
	/** @type {Array<number>|undefined} */
	let indent;
	if (settings.position) if ("start" in settings.position || "indent" in settings.position) {
		indent = settings.position.indent;
		point = settings.position.start;
	} else point = settings.position;
	let line = (point ? point.line : 0) || 1;
	let column = (point ? point.column : 0) || 1;
	let previous = now();
	/** @type {number|undefined} */
	let character;
	index--;
	while (++index <= value.length) {
		if (character === 10) column = (indent ? indent[lines] : 0) || 1;
		character = value.charCodeAt(index);
		if (character === 38) {
			const following = value.charCodeAt(index + 1);
			if (following === 9 || following === 10 || following === 12 || following === 32 || following === 38 || following === 60 || Number.isNaN(following) || additional && following === additional) {
				queue += String.fromCharCode(character);
				column++;
				continue;
			}
			const start = index + 1;
			let begin = start;
			let end = start;
			/** @type {string} */
			let type;
			if (following === 35) {
				end = ++begin;
				const following = value.charCodeAt(end);
				if (following === 88 || following === 120) {
					type = "hexadecimal";
					end = ++begin;
				} else type = "decimal";
			} else type = "named";
			let characterReferenceCharacters = "";
			let characterReference = "";
			let characters = "";
			const test = type === "named" ? isAlphanumerical : type === "decimal" ? isDecimal : isHexadecimal;
			end--;
			while (++end <= value.length) {
				const following = value.charCodeAt(end);
				if (!test(following)) break;
				characters += String.fromCharCode(following);
				if (type === "named" && characterEntitiesLegacy.includes(characters)) {
					characterReferenceCharacters = characters;
					characterReference = decodeNamedCharacterReference(characters);
				}
			}
			let terminated = value.charCodeAt(end) === 59;
			if (terminated) {
				end++;
				const namedReference = type === "named" ? decodeNamedCharacterReference(characters) : false;
				if (namedReference) {
					characterReferenceCharacters = characters;
					characterReference = namedReference;
				}
			}
			let diff = 1 + end - start;
			let reference = "";
			if (!terminated && settings.nonTerminated === false) {} else if (!characters) {
				if (type !== "named") warning(4, diff);
			} else if (type === "named") {
				if (terminated && !characterReference) warning(5, 1);
				else {
					if (characterReferenceCharacters !== characters) {
						end = begin + characterReferenceCharacters.length;
						diff = 1 + end - begin;
						terminated = false;
					}
					if (!terminated) {
						const reason = characterReferenceCharacters ? 1 : 3;
						if (settings.attribute) {
							const following = value.charCodeAt(end);
							if (following === 61) {
								warning(reason, diff);
								characterReference = "";
							} else if (isAlphanumerical(following)) characterReference = "";
							else warning(reason, diff);
						} else warning(reason, diff);
					}
				}
				reference = characterReference;
			} else {
				if (!terminated) warning(2, diff);
				let referenceCode = Number.parseInt(characters, type === "hexadecimal" ? 16 : 10);
				if (prohibited(referenceCode)) {
					warning(7, diff);
					reference = String.fromCharCode(65533);
				} else if (referenceCode in characterReferenceInvalid) {
					warning(6, diff);
					reference = characterReferenceInvalid[referenceCode];
				} else {
					let output = "";
					if (disallowed(referenceCode)) warning(6, diff);
					if (referenceCode > 65535) {
						referenceCode -= 65536;
						output += String.fromCharCode(referenceCode >>> 10 | 55296);
						referenceCode = 56320 | referenceCode & 1023;
					}
					reference = output + String.fromCharCode(referenceCode);
				}
			}
			if (reference) {
				flush();
				previous = now();
				index = end - 1;
				column += end - start + 1;
				result.push(reference);
				const next = now();
				next.offset++;
				if (settings.reference) settings.reference.call(settings.referenceContext || void 0, reference, {
					start: previous,
					end: next
				}, value.slice(start - 1, end));
				previous = next;
			} else {
				characters = value.slice(start - 1, end);
				queue += characters;
				column += characters.length;
				index = end - 1;
			}
		} else {
			if (character === 10) {
				line++;
				lines++;
				column = 0;
			}
			if (Number.isNaN(character)) flush();
			else {
				queue += String.fromCharCode(character);
				column++;
			}
		}
	}
	return result.join("");
	function now() {
		return {
			line,
			column,
			offset: index + ((point ? point.offset : 0) || 0)
		};
	}
	/**
	* Handle the warning.
	*
	* @param {1|2|3|4|5|6|7} code
	* @param {number} offset
	*/
	function warning(code, offset) {
		/** @type {ReturnType<now>} */
		let position;
		if (settings.warning) {
			position = now();
			position.column += offset;
			position.offset += offset;
			settings.warning.call(settings.warningContext || void 0, messages[code], position, code);
		}
	}
	/**
	* Flush `queue` (normal text).
	* Macro invoked before each reference and at the end of `value`.
	* Does nothing when `queue` is empty.
	*/
	function flush() {
		if (queue) {
			result.push(queue);
			if (settings.text) settings.text.call(settings.textContext || void 0, queue, {
				start: previous,
				end: now()
			});
			queue = "";
		}
	}
}
/**
* Check if `character` is outside the permissible unicode range.
*
* @param {number} code
* @returns {boolean}
*/
function prohibited(code) {
	return code >= 55296 && code <= 57343 || code > 1114111;
}
/**
* Check if `character` is disallowed.
*
* @param {number} code
* @returns {boolean}
*/
function disallowed(code) {
	return code >= 1 && code <= 8 || code === 11 || code >= 13 && code <= 31 || code >= 127 && code <= 159 || code >= 64976 && code <= 65007 || (code & 65535) === 65535 || (code & 65535) === 65534;
}
//#endregion
//#region node_modules/refractor/lib/prism-core.js
var uniqueId = 0;
var plainTextGrammar = {};
var _ = {
	/**
	* A namespace for utility methods.
	*
	* All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
	* change or disappear at any time.
	*
	* @namespace
	* @memberof Prism
	*/
	util: {
		/**
		* Returns the name of the type of the given value.
		*
		* @param {any} o
		* @returns {string}
		* @example
		* type(null)      === 'Null'
		* type(undefined) === 'Undefined'
		* type(123)       === 'Number'
		* type('foo')     === 'String'
		* type(true)      === 'Boolean'
		* type([1, 2])    === 'Array'
		* type({})        === 'Object'
		* type(String)    === 'Function'
		* type(/abc+/)    === 'RegExp'
		*/
		type: function(o) {
			return Object.prototype.toString.call(o).slice(8, -1);
		},
		/**
		* Returns a unique number for the given object. Later calls will still return the same number.
		*
		* @param {Object} obj
		* @returns {number}
		*/
		objId: function(obj) {
			if (!obj["__id"]) Object.defineProperty(obj, "__id", { value: ++uniqueId });
			return obj["__id"];
		},
		/**
		* Creates a deep clone of the given object.
		*
		* The main intended use of this function is to clone language definitions.
		*
		* @param {T} o
		* @param {Record<number, any>} [visited]
		* @returns {T}
		* @template T
		*/
		clone: function deepClone(o, visited) {
			visited = visited || {};
			var clone;
			var id;
			switch (_.util.type(o)) {
				case "Object":
					id = _.util.objId(o);
					if (visited[id]) return visited[id];
					clone = {};
					visited[id] = clone;
					for (var key in o) if (o.hasOwnProperty(key)) clone[key] = deepClone(o[key], visited);
					return clone;
				case "Array":
					id = _.util.objId(o);
					if (visited[id]) return visited[id];
					clone = [];
					visited[id] = clone;
					/** @type {Array} */ o.forEach(function(v, i) {
						clone[i] = deepClone(v, visited);
					});
					return clone;
				default: return o;
			}
		}
	},
	/**
	* This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
	*
	* @namespace
	* @memberof Prism
	* @public
	*/
	languages: {
		/**
		* The grammar for plain, unformatted text.
		*/
		plain: plainTextGrammar,
		plaintext: plainTextGrammar,
		text: plainTextGrammar,
		txt: plainTextGrammar,
		/**
		* Creates a deep copy of the language with the given id and appends the given tokens.
		*
		* If a token in `redef` also appears in the copied language, then the existing token in the copied language
		* will be overwritten at its original position.
		*
		* ## Best practices
		*
		* Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
		* doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
		* understand the language definition because, normally, the order of tokens matters in Prism grammars.
		*
		* Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
		* Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
		*
		* @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
		* @param {Grammar} redef The new tokens to append.
		* @returns {Grammar} The new language created.
		* @public
		* @example
		* Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
		*     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
		*     // at its original position
		*     'comment': { ... },
		*     // CSS doesn't have a 'color' token, so this token will be appended
		*     'color': /\b(?:red|green|blue)\b/
		* });
		*/
		extend: function(id, redef) {
			var lang = _.util.clone(_.languages[id]);
			for (var key in redef) lang[key] = redef[key];
			return lang;
		},
		/**
		* Inserts tokens _before_ another token in a language definition or any other grammar.
		*
		* ## Usage
		*
		* This helper method makes it easy to modify existing languages. For example, the CSS language definition
		* not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
		* in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
		* appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
		* this:
		*
		* ```js
		* Prism.languages.markup.style = {
		*     // token
		* };
		* ```
		*
		* then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
		* before existing tokens. For the CSS example above, you would use it like this:
		*
		* ```js
		* Prism.languages.insertBefore('markup', 'cdata', {
		*     'style': {
		*         // token
		*     }
		* });
		* ```
		*
		* ## Special cases
		*
		* If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
		* will be ignored.
		*
		* This behavior can be used to insert tokens after `before`:
		*
		* ```js
		* Prism.languages.insertBefore('markup', 'comment', {
		*     'comment': Prism.languages.markup.comment,
		*     // tokens after 'comment'
		* });
		* ```
		*
		* ## Limitations
		*
		* The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
		* properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
		* differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
		* deleting properties which is necessary to insert at arbitrary positions.
		*
		* To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
		* Instead, it will create a new object and replace all references to the target object with the new one. This
		* can be done without temporarily deleting properties, so the iteration order is well-defined.
		*
		* However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
		* you hold the target object in a variable, then the value of the variable will not change.
		*
		* ```js
		* var oldMarkup = Prism.languages.markup;
		* var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
		*
		* assert(oldMarkup !== Prism.languages.markup);
		* assert(newMarkup === Prism.languages.markup);
		* ```
		*
		* @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
		* object to be modified.
		* @param {string} before The key to insert before.
		* @param {Grammar} insert An object containing the key-value pairs to be inserted.
		* @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
		* object to be modified.
		*
		* Defaults to `Prism.languages`.
		* @returns {Grammar} The new grammar object.
		* @public
		*/
		insertBefore: function(inside, before, insert, root) {
			root = root || _.languages;
			var grammar = root[inside];
			/** @type {Grammar} */
			var ret = {};
			for (var token in grammar) if (grammar.hasOwnProperty(token)) {
				if (token == before) {
					for (var newToken in insert) if (insert.hasOwnProperty(newToken)) ret[newToken] = insert[newToken];
				}
				if (!insert.hasOwnProperty(token)) ret[token] = grammar[token];
			}
			var old = root[inside];
			root[inside] = ret;
			_.languages.DFS(_.languages, function(key, value) {
				if (value === old && key != inside) this[key] = ret;
			});
			return ret;
		},
		DFS: function DFS(o, callback, type, visited) {
			visited = visited || {};
			var objId = _.util.objId;
			for (var i in o) if (o.hasOwnProperty(i)) {
				callback.call(o, i, o[i], type || i);
				var property = o[i];
				var propertyType = _.util.type(property);
				if (propertyType === "Object" && !visited[objId(property)]) {
					visited[objId(property)] = true;
					DFS(property, callback, null, visited);
				} else if (propertyType === "Array" && !visited[objId(property)]) {
					visited[objId(property)] = true;
					DFS(property, callback, i, visited);
				}
			}
		}
	},
	plugins: {},
	/**
	* Low-level function, only use if you know what you’re doing. It accepts a string of text as input
	* and the language definitions to use, and returns a string with the HTML produced.
	*
	* The following hooks will be run:
	* 1. `before-tokenize`
	* 2. `after-tokenize`
	* 3. `wrap`: On each {@link Token}.
	*
	* @param {string} text A string with the code to be highlighted.
	* @param {Grammar} grammar An object containing the tokens to use.
	*
	* Usually a language definition like `Prism.languages.markup`.
	* @param {string} language The name of the language definition passed to `grammar`.
	* @returns {string} The highlighted HTML.
	* @memberof Prism
	* @public
	* @example
	* Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
	*/
	highlight: function(text, grammar, language) {
		var env = {
			code: text,
			grammar,
			language
		};
		_.hooks.run("before-tokenize", env);
		if (!env.grammar) throw new Error("The language \"" + env.language + "\" has no grammar.");
		env.tokens = _.tokenize(env.code, env.grammar);
		_.hooks.run("after-tokenize", env);
		return Token.stringify(_.util.encode(env.tokens), env.language);
	},
	/**
	* This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
	* and the language definitions to use, and returns an array with the tokenized code.
	*
	* When the language definition includes nested tokens, the function is called recursively on each of these tokens.
	*
	* This method could be useful in other contexts as well, as a very crude parser.
	*
	* @param {string} text A string with the code to be highlighted.
	* @param {Grammar} grammar An object containing the tokens to use.
	*
	* Usually a language definition like `Prism.languages.markup`.
	* @returns {TokenStream} An array of strings and tokens, a token stream.
	* @memberof Prism
	* @public
	* @example
	* let code = `var foo = 0;`;
	* let tokens = Prism.tokenize(code, Prism.languages.javascript);
	* tokens.forEach(token => {
	*     if (token instanceof Prism.Token && token.type === 'number') {
	*         console.log(`Found numeric literal: ${token.content}`);
	*     }
	* });
	*/
	tokenize: function(text, grammar) {
		var rest = grammar.rest;
		if (rest) {
			for (var token in rest) grammar[token] = rest[token];
			delete grammar.rest;
		}
		var tokenList = new LinkedList();
		addAfter(tokenList, tokenList.head, text);
		matchGrammar(text, tokenList, grammar, tokenList.head, 0);
		return toArray(tokenList);
	},
	/**
	* @namespace
	* @memberof Prism
	* @public
	*/
	hooks: {
		all: {},
		/**
		* Adds the given callback to the list of callbacks for the given hook.
		*
		* The callback will be invoked when the hook it is registered for is run.
		* Hooks are usually directly run by a highlight function but you can also run hooks yourself.
		*
		* One callback function can be registered to multiple hooks and the same hook multiple times.
		*
		* @param {string} name The name of the hook.
		* @param {HookCallback} callback The callback function which is given environment variables.
		* @public
		*/
		add: function(name, callback) {
			var hooks = _.hooks.all;
			hooks[name] = hooks[name] || [];
			hooks[name].push(callback);
		},
		/**
		* Runs a hook invoking all registered callbacks with the given environment variables.
		*
		* Callbacks will be invoked synchronously and in the order in which they were registered.
		*
		* @param {string} name The name of the hook.
		* @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
		* @public
		*/
		run: function(name, env) {
			var callbacks = _.hooks.all[name];
			if (!callbacks || !callbacks.length) return;
			for (var i = 0, callback; callback = callbacks[i++];) callback(env);
		}
	},
	Token
};
/**
* Creates a new token.
*
* @param {string} type See {@link Token#type type}
* @param {string | TokenStream} content See {@link Token#content content}
* @param {string|string[]} [alias] The alias(es) of the token.
* @param {string} [matchedStr=""] A copy of the full string this token was created from.
* @class
* @global
* @public
*/
function Token(type, content, alias, matchedStr) {
	/**
	* The type of the token.
	*
	* This is usually the key of a pattern in a {@link Grammar}.
	*
	* @type {string}
	* @see GrammarToken
	* @public
	*/
	this.type = type;
	/**
	* The strings or tokens contained by this token.
	*
	* This will be a token stream if the pattern matched also defined an `inside` grammar.
	*
	* @type {string | TokenStream}
	* @public
	*/
	this.content = content;
	/**
	* The alias(es) of the token.
	*
	* @type {string|string[]}
	* @see GrammarToken
	* @public
	*/
	this.alias = alias;
	this.length = (matchedStr || "").length | 0;
}
/**
* A token stream is an array of strings and {@link Token Token} objects.
*
* Token streams have to fulfill a few properties that are assumed by most functions (mostly internal ones) that process
* them.
*
* 1. No adjacent strings.
* 2. No empty strings.
*
*    The only exception here is the token stream that only contains the empty string and nothing else.
*
* @typedef {Array<string | Token>} TokenStream
* @global
* @public
*/
/**
* @param {RegExp} pattern
* @param {number} pos
* @param {string} text
* @param {boolean} lookbehind
* @returns {RegExpExecArray | null}
*/
function matchPattern(pattern, pos, text, lookbehind) {
	pattern.lastIndex = pos;
	var match = pattern.exec(text);
	if (match && lookbehind && match[1]) {
		var lookbehindLength = match[1].length;
		match.index += lookbehindLength;
		match[0] = match[0].slice(lookbehindLength);
	}
	return match;
}
/**
* @param {string} text
* @param {LinkedList<string | Token>} tokenList
* @param {any} grammar
* @param {LinkedListNode<string | Token>} startNode
* @param {number} startPos
* @param {RematchOptions} [rematch]
* @returns {void}
* @private
*
* @typedef RematchOptions
* @property {string} cause
* @property {number} reach
*/
function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
	for (var token in grammar) {
		if (!grammar.hasOwnProperty(token) || !grammar[token]) continue;
		var patterns = grammar[token];
		patterns = Array.isArray(patterns) ? patterns : [patterns];
		for (var j = 0; j < patterns.length; ++j) {
			if (rematch && rematch.cause == token + "," + j) return;
			var patternObj = patterns[j];
			var inside = patternObj.inside;
			var lookbehind = !!patternObj.lookbehind;
			var greedy = !!patternObj.greedy;
			var alias = patternObj.alias;
			if (greedy && !patternObj.pattern.global) {
				var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
				patternObj.pattern = RegExp(patternObj.pattern.source, flags + "g");
			}
			/** @type {RegExp} */
			var pattern = patternObj.pattern || patternObj;
			for (var currentNode = startNode.next, pos = startPos; currentNode !== tokenList.tail; pos += currentNode.value.length, currentNode = currentNode.next) {
				if (rematch && pos >= rematch.reach) break;
				var str = currentNode.value;
				if (tokenList.length > text.length) return;
				if (str instanceof Token) continue;
				var removeCount = 1;
				var match;
				if (greedy) {
					match = matchPattern(pattern, pos, text, lookbehind);
					if (!match || match.index >= text.length) break;
					var from = match.index;
					var to = match.index + match[0].length;
					var p = pos;
					p += currentNode.value.length;
					while (from >= p) {
						currentNode = currentNode.next;
						p += currentNode.value.length;
					}
					p -= currentNode.value.length;
					pos = p;
					if (currentNode.value instanceof Token) continue;
					for (var k = currentNode; k !== tokenList.tail && (p < to || typeof k.value === "string"); k = k.next) {
						removeCount++;
						p += k.value.length;
					}
					removeCount--;
					str = text.slice(pos, p);
					match.index -= pos;
				} else {
					match = matchPattern(pattern, 0, str, lookbehind);
					if (!match) continue;
				}
				var from = match.index;
				var matchStr = match[0];
				var before = str.slice(0, from);
				var after = str.slice(from + matchStr.length);
				var reach = pos + str.length;
				if (rematch && reach > rematch.reach) rematch.reach = reach;
				var removeFrom = currentNode.prev;
				if (before) {
					removeFrom = addAfter(tokenList, removeFrom, before);
					pos += before.length;
				}
				removeRange(tokenList, removeFrom, removeCount);
				var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
				currentNode = addAfter(tokenList, removeFrom, wrapped);
				if (after) addAfter(tokenList, currentNode, after);
				if (removeCount > 1) {
					/** @type {RematchOptions} */
					var nestedRematch = {
						cause: token + "," + j,
						reach
					};
					matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch);
					if (rematch && nestedRematch.reach > rematch.reach) rematch.reach = nestedRematch.reach;
				}
			}
		}
	}
}
/**
* @typedef LinkedListNode
* @property {T} value
* @property {LinkedListNode<T> | null} prev The previous node.
* @property {LinkedListNode<T> | null} next The next node.
* @template T
* @private
*/
/**
* @template T
* @private
*/
function LinkedList() {
	/** @type {LinkedListNode<T>} */
	var head = {
		value: null,
		prev: null,
		next: null
	};
	/** @type {LinkedListNode<T>} */
	var tail = {
		value: null,
		prev: head,
		next: null
	};
	head.next = tail;
	/** @type {LinkedListNode<T>} */
	this.head = head;
	/** @type {LinkedListNode<T>} */
	this.tail = tail;
	this.length = 0;
}
/**
* Adds a new node with the given value to the list.
*
* @param {LinkedList<T>} list
* @param {LinkedListNode<T>} node
* @param {T} value
* @returns {LinkedListNode<T>} The added node.
* @template T
*/
function addAfter(list, node, value) {
	var next = node.next;
	var newNode = {
		value,
		prev: node,
		next
	};
	node.next = newNode;
	next.prev = newNode;
	list.length++;
	return newNode;
}
/**
* Removes `count` nodes after the given node. The given node will not be removed.
*
* @param {LinkedList<T>} list
* @param {LinkedListNode<T>} node
* @param {number} count
* @template T
*/
function removeRange(list, node, count) {
	var next = node.next;
	for (var i = 0; i < count && next !== list.tail; i++) next = next.next;
	node.next = next;
	next.prev = node;
	list.length -= i;
}
/**
* @param {LinkedList<T>} list
* @returns {T[]}
* @template T
*/
function toArray(list) {
	var array = [];
	var node = list.head.next;
	while (node !== list.tail) {
		array.push(node.value);
		node = node.next;
	}
	return array;
}
var Prism = _;
//#endregion
//#region node_modules/refractor/lib/core.js
/**
* @import {Element, Root, Text} from 'hast'
* @import {Grammar, Languages} from 'prismjs'
*/
/**
* @typedef _Token
*   Hidden Prism token.
* @property {string} alias
*   Alias.
* @property {string} content
*   Content.
* @property {number} length
*   Length.
* @property {string} type
*   Type.
*/
/**
* @typedef _Env
*   Hidden Prism environment.
* @property {Record<string, string>} attributes
*   Attributes.
* @property {Array<string>} classes
*   Classes.
* @property {Array<Element | Text> | Element | Text} content
*   Content.
* @property {string} language
*   Language.
* @property {string} tag
*   Tag.
* @property {string} type
*   Type.
*/
/**
* @typedef {((prism: Refractor) => undefined | void) & {aliases?: Array<string> | undefined, displayName: string}} Syntax
*   Refractor syntax function.
*/
/**
* @typedef Refractor
*   Virtual syntax highlighting
* @property {typeof alias} alias
* @property {Languages} languages
* @property {typeof listLanguages} listLanguages
* @property {typeof highlight} highlight
* @property {typeof registered} registered
* @property {typeof register} register
*/
function Refractor$1() {}
Refractor$1.prototype = Prism;
/** @type {Refractor} */
var refractor = new Refractor$1();
refractor.highlight = highlight;
refractor.register = register;
refractor.alias = alias;
refractor.registered = registered;
refractor.listLanguages = listLanguages;
refractor.util.encode = encode;
refractor.Token.stringify = stringify;
/**
* Highlight `value` (code) as `language` (programming language).
*
* @param {string} value
*   Code to highlight.
* @param {Grammar | string} language
*   Programming language name, alias, or grammar.
* @returns {Root}
*   Node representing highlighted code.
*/
function highlight(value, language) {
	if (typeof value !== "string") throw new TypeError("Expected `string` for `value`, got `" + value + "`");
	/** @type {Grammar} */
	let grammar;
	/** @type {string | undefined} */
	let name;
	/* c8 ignore next 2 */
	if (language && typeof language === "object") grammar = language;
	else {
		name = language;
		if (typeof name !== "string") throw new TypeError("Expected `string` for `name`, got `" + name + "`");
		if (Object.hasOwn(refractor.languages, name)) grammar = refractor.languages[name];
		else throw new Error("Unknown language: `" + name + "` is not registered");
	}
	return {
		type: "root",
		children: Prism.highlight.call(refractor, value, grammar, name)
	};
}
/**
* Register a syntax.
*
* @param {Syntax} syntax
*   Language function made for refractor, as in, the files in
*   `refractor/lang/*.js`.
* @returns {undefined}
*   Nothing.
*/
function register(syntax) {
	if (typeof syntax !== "function" || !syntax.displayName) throw new Error("Expected `function` for `syntax`, got `" + syntax + "`");
	if (!Object.hasOwn(refractor.languages, syntax.displayName)) syntax(refractor);
}
/**
* Register aliases for already registered languages.
*
* @param {Record<string, ReadonlyArray<string> | string> | string} language
*   Language to alias.
* @param {ReadonlyArray<string> | string | null | undefined} [alias]
*   Aliases.
* @returns {undefined}
*   Nothing.
*/
function alias(language, alias) {
	const languages = refractor.languages;
	/** @type {Record<string, ReadonlyArray<string> | string>} */
	let map = {};
	if (typeof language === "string") {
		if (alias) map[language] = alias;
	} else map = language;
	/** @type {string} */
	let key;
	for (key in map) if (Object.hasOwn(map, key)) {
		const value = map[key];
		const list = typeof value === "string" ? [value] : value;
		let index = -1;
		while (++index < list.length) languages[list[index]] = languages[key];
	}
}
/**
* Check whether an `alias` or `language` is registered.
*
* @param {string} aliasOrLanguage
*   Language or alias to check.
* @returns {boolean}
*   Whether the language is registered.
*/
function registered(aliasOrLanguage) {
	if (typeof aliasOrLanguage !== "string") throw new TypeError("Expected `string` for `aliasOrLanguage`, got `" + aliasOrLanguage + "`");
	return Object.hasOwn(refractor.languages, aliasOrLanguage);
}
/**
* List all registered languages (names and aliases).
*
* @returns {Array<string>}
*   List of language names.
*/
function listLanguages() {
	const languages = refractor.languages;
	/** @type {Array<string>} */
	const list = [];
	/** @type {string} */
	let language;
	for (language in languages) if (Object.hasOwn(languages, language) && typeof languages[language] === "object") list.push(language);
	return list;
}
/**
* @param {Array<_Token | string> | _Token | string} value
*   Token to stringify.
* @param {string} language
*   Language of the token.
* @returns {Array<Element | Text> | Element | Text}
*   Node representing the token.
*/
function stringify(value, language) {
	if (typeof value === "string") return {
		type: "text",
		value
	};
	if (Array.isArray(value)) {
		/** @type {Array<Element | Text>} */
		const result = [];
		let index = -1;
		while (++index < value.length) if (value[index] !== null && value[index] !== void 0 && value[index] !== "") result.push(stringify(value[index], language));
		return result;
	}
	/** @type {_Env} */
	const env = {
		attributes: {},
		classes: ["token", value.type],
		content: stringify(value.content, language),
		language,
		tag: "span",
		type: value.type
	};
	if (value.alias) env.classes.push(...typeof value.alias === "string" ? [value.alias] : value.alias);
	refractor.hooks.run("wrap", env);
	return h(env.tag + "." + env.classes.join("."), attributes(env.attributes), env.content);
}
/**
* @template {unknown} T
*   Tokens.
* @param {T} tokens
*   Input.
* @returns {T}
*   Output, same as input.
*/
function encode(tokens) {
	return tokens;
}
/**
* @param {Record<string, string>} record
*   Attributes.
* @returns {Record<string, string>}
*   Attributes.
*/
function attributes(record) {
	/** @type {string} */
	let key;
	for (key in record) if (Object.hasOwn(record, key)) record[key] = parseEntities(record[key]);
	return record;
}
//#endregion
//#region node_modules/unist-util-is/lib/index.js
/**
* Generate an assertion from a test.
*
* Useful if you’re going to test many nodes, for example when creating a
* utility where something else passes a compatible test.
*
* The created function is a bit faster because it expects valid input only:
* a `node`, `index`, and `parent`.
*
* @param {Test} test
*   *   when nullish, checks if `node` is a `Node`.
*   *   when `string`, works like passing `(node) => node.type === test`.
*   *   when `function` checks if function passed the node is true.
*   *   when `object`, checks that all keys in test are in node, and that they have (strictly) equal values.
*   *   when `array`, checks if any one of the subtests pass.
* @returns {Check}
*   An assertion.
*/
var convert = (
/**
* @param {Test} [test]
* @returns {Check}
*/
function(test) {
	if (test === null || test === void 0) return ok;
	if (typeof test === "function") return castFactory(test);
	if (typeof test === "object") return Array.isArray(test) ? anyFactory(test) : propertiesFactory(test);
	if (typeof test === "string") return typeFactory(test);
	throw new Error("Expected function, string, or object as test");
});
/**
* @param {Array<Props | TestFunction | string>} tests
* @returns {Check}
*/
function anyFactory(tests) {
	/** @type {Array<Check>} */
	const checks = [];
	let index = -1;
	while (++index < tests.length) checks[index] = convert(tests[index]);
	return castFactory(any);
	/**
	* @this {unknown}
	* @type {TestFunction}
	*/
	function any(...parameters) {
		let index = -1;
		while (++index < checks.length) if (checks[index].apply(this, parameters)) return true;
		return false;
	}
}
/**
* Turn an object into a test for a node with a certain fields.
*
* @param {Props} check
* @returns {Check}
*/
function propertiesFactory(check) {
	const checkAsRecord = check;
	return castFactory(all);
	/**
	* @param {Node} node
	* @returns {boolean}
	*/
	function all(node) {
		const nodeAsRecord = node;
		/** @type {string} */
		let key;
		for (key in check) if (nodeAsRecord[key] !== checkAsRecord[key]) return false;
		return true;
	}
}
/**
* Turn a string into a test for a node with a certain type.
*
* @param {string} check
* @returns {Check}
*/
function typeFactory(check) {
	return castFactory(type);
	/**
	* @param {Node} node
	*/
	function type(node) {
		return node && node.type === check;
	}
}
/**
* Turn a custom test into a test for a node that passes that test.
*
* @param {TestFunction} testFunction
* @returns {Check}
*/
function castFactory(testFunction) {
	return check;
	/**
	* @this {unknown}
	* @type {Check}
	*/
	function check(value, index, parent) {
		return Boolean(looksLikeANode(value) && testFunction.call(this, value, typeof index === "number" ? index : void 0, parent || void 0));
	}
}
function ok() {
	return true;
}
/**
* @param {unknown} value
* @returns {value is Node}
*/
function looksLikeANode(value) {
	return value !== null && typeof value === "object" && "type" in value;
}
//#endregion
//#region node_modules/unist-util-filter/lib/index.js
/**
* @typedef {import('unist').Node} Node
* @typedef {import('unist').Parent} Parent
*
* @typedef {Exclude<import('unist-util-is').Test, undefined> | undefined} Test
*   Test from `unist-util-is`.
*
*   Note: we have remove and add `undefined`, because otherwise when generating
*   automatic `.d.ts` files, TS tries to flatten paths from a local perspective,
*   which doesn’t work when publishing on npm.
*/
/**
* @typedef Options
*   Configuration (optional).
* @property {boolean | null | undefined} [cascade=true]
*   Whether to drop parent nodes if they had children, but all their children
*   were filtered out (default: `true`).
*/
var own = {}.hasOwnProperty;
/**
* Create a new `tree` of copies of all nodes that pass `test`.
*
* The tree is walked in *preorder* (NLR), visiting the node itself, then its
* head, etc.
*
* @template {Node} Tree
* @template {Test} Check
*
* @overload
* @param {Tree} tree
* @param {Options | null | undefined} options
* @param {Check} test
* @returns {import('./complex-types.js').Matches<Tree, Check>}
*
* @overload
* @param {Tree} tree
* @param {Check} test
* @returns {import('./complex-types.js').Matches<Tree, Check>}
*
* @overload
* @param {Tree} tree
* @param {null | undefined} [options]
* @returns {Tree}
*
* @param {Node} tree
*   Tree to filter.
* @param {Options | Test} [options]
*   Configuration (optional).
* @param {Test} [test]
*   `unist-util-is` compatible test.
* @returns {Node | undefined}
*   New filtered tree.
*
*   `undefined` is returned if `tree` itself didn’t pass the test, or is
*   cascaded away.
*/
function filter(tree, options, test) {
	const is = convert(test || options);
	const cascadeRaw = options && typeof options === "object" && "cascade" in options ? options.cascade : void 0;
	const cascade = cascadeRaw === void 0 || cascadeRaw === null ? true : cascadeRaw;
	return preorder(tree);
	/**
	* @param {Node} node
	*   Current node.
	* @param {number | undefined} [index]
	*   Index of `node` in `parent`.
	* @param {Parent | undefined} [parentNode]
	*   Parent node.
	* @returns {Node | undefined}
	*   Shallow copy of `node`.
	*/
	function preorder(node, index, parentNode) {
		/** @type {Array<Node>} */
		const children = [];
		if (!is(node, index, parentNode)) return void 0;
		if (parent(node)) {
			let childIndex = -1;
			while (++childIndex < node.children.length) {
				const result = preorder(node.children[childIndex], childIndex, node);
				if (result) children.push(result);
			}
			if (cascade && node.children.length > 0 && children.length === 0) return;
		}
		/** @type {typeof node} */
		const next = {};
		/** @type {string} */
		let key;
		for (key in node) if (own.call(node, key)) next[key] = key === "children" ? children : node[key];
		return next;
	}
}
/**
* @param {Node} node
* @returns {node is Parent}
*/
function parent(node) {
	return "children" in node && node.children !== void 0;
}
//#endregion
//#region node_modules/unist-util-visit-parents/lib/color.node.js
/**
* Color a string.
*
* @param {string} d
*   Value.
* @returns {string}
*   Colored value.
*/
function color(d) {
	return "\x1B[33m" + d + "\x1B[39m";
}
//#endregion
//#region node_modules/unist-util-visit-parents/lib/index.js
/**
* @import {Node as UnistNode, Parent as UnistParent} from 'unist'
*/
/**
* @typedef {Exclude<import('unist-util-is').Test, undefined> | undefined} Test
*   Test from `unist-util-is`.
*
*   Note: we have remove and add `undefined`, because otherwise when generating
*   automatic `.d.ts` files, TS tries to flatten paths from a local perspective,
*   which doesn’t work when publishing on npm.
*/
/**
* @typedef {(
*   Fn extends (value: any) => value is infer Thing
*   ? Thing
*   : Fallback
* )} Predicate
*   Get the value of a type guard `Fn`.
* @template Fn
*   Value; typically function that is a type guard (such as `(x): x is Y`).
* @template Fallback
*   Value to yield if `Fn` is not a type guard.
*/
/**
* @typedef {(
*   Check extends null | undefined // No test.
*   ? Value
*   : Value extends {type: Check} // String (type) test.
*   ? Value
*   : Value extends Check // Partial test.
*   ? Value
*   : Check extends Function // Function test.
*   ? Predicate<Check, Value> extends Value
*     ? Predicate<Check, Value>
*     : never
*   : never // Some other test?
* )} MatchesOne
*   Check whether a node matches a primitive check in the type system.
* @template Value
*   Value; typically unist `Node`.
* @template Check
*   Value; typically `unist-util-is`-compatible test, but not arrays.
*/
/**
* @typedef {(
*   Check extends ReadonlyArray<infer T>
*   ? MatchesOne<Value, T>
*   : Check extends Array<infer T>
*   ? MatchesOne<Value, T>
*   : MatchesOne<Value, Check>
* )} Matches
*   Check whether a node matches a check in the type system.
* @template Value
*   Value; typically unist `Node`.
* @template Check
*   Value; typically `unist-util-is`-compatible test.
*/
/**
* @typedef {0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10} Uint
*   Number; capped reasonably.
*/
/**
* @typedef {I extends 0 ? 1 : I extends 1 ? 2 : I extends 2 ? 3 : I extends 3 ? 4 : I extends 4 ? 5 : I extends 5 ? 6 : I extends 6 ? 7 : I extends 7 ? 8 : I extends 8 ? 9 : 10} Increment
*   Increment a number in the type system.
* @template {Uint} [I=0]
*   Index.
*/
/**
* @typedef {(
*   Node extends UnistParent
*   ? Node extends {children: Array<infer Children>}
*     ? Child extends Children ? Node : never
*     : never
*   : never
* )} InternalParent
*   Collect nodes that can be parents of `Child`.
* @template {UnistNode} Node
*   All node types in a tree.
* @template {UnistNode} Child
*   Node to search for.
*/
/**
* @typedef {InternalParent<InclusiveDescendant<Tree>, Child>} Parent
*   Collect nodes in `Tree` that can be parents of `Child`.
* @template {UnistNode} Tree
*   All node types in a tree.
* @template {UnistNode} Child
*   Node to search for.
*/
/**
* @typedef {(
*   Depth extends Max
*   ? never
*   :
*     | InternalParent<Node, Child>
*     | InternalAncestor<Node, InternalParent<Node, Child>, Max, Increment<Depth>>
* )} InternalAncestor
*   Collect nodes in `Tree` that can be ancestors of `Child`.
* @template {UnistNode} Node
*   All node types in a tree.
* @template {UnistNode} Child
*   Node to search for.
* @template {Uint} [Max=10]
*   Max; searches up to this depth.
* @template {Uint} [Depth=0]
*   Current depth.
*/
/**
* @typedef {InternalAncestor<InclusiveDescendant<Tree>, Child>} Ancestor
*   Collect nodes in `Tree` that can be ancestors of `Child`.
* @template {UnistNode} Tree
*   All node types in a tree.
* @template {UnistNode} Child
*   Node to search for.
*/
/**
* @typedef {(
*   Tree extends UnistParent
*     ? Depth extends Max
*       ? Tree
*       : Tree | InclusiveDescendant<Tree['children'][number], Max, Increment<Depth>>
*     : Tree
* )} InclusiveDescendant
*   Collect all (inclusive) descendants of `Tree`.
*
*   > 👉 **Note**: for performance reasons, this seems to be the fastest way to
*   > recurse without actually running into an infinite loop, which the
*   > previous version did.
*   >
*   > Practically, a max of `2` is typically enough assuming a `Root` is
*   > passed, but it doesn’t improve performance.
*   > It gets higher with `List > ListItem > Table > TableRow > TableCell`.
*   > Using up to `10` doesn’t hurt or help either.
* @template {UnistNode} Tree
*   Tree type.
* @template {Uint} [Max=10]
*   Max; searches up to this depth.
* @template {Uint} [Depth=0]
*   Current depth.
*/
/**
* @typedef {'skip' | boolean} Action
*   Union of the action types.
*
* @typedef {number} Index
*   Move to the sibling at `index` next (after node itself is completely
*   traversed).
*
*   Useful if mutating the tree, such as removing the node the visitor is
*   currently on, or any of its previous siblings.
*   Results less than 0 or greater than or equal to `children.length` stop
*   traversing the parent.
*
* @typedef {[(Action | null | undefined | void)?, (Index | null | undefined)?]} ActionTuple
*   List with one or two values, the first an action, the second an index.
*
* @typedef {Action | ActionTuple | Index | null | undefined | void} VisitorResult
*   Any value that can be returned from an enter visitor.
*
*   Like `VisitorResultExit`,
*   but `SKIP` can also be returned,
*   to not walk the children of the node,
*   and `ActionTuple` can be used to combine an action with an index.
*
* @typedef {Index | boolean | null | undefined | void} VisitorResultExit
*   Any value that can be returned from an exit visitor.
*/
/**
* @callback Visitor
*   Handle a node (matching `test`, if given) before its children.
*
*   Changes inside `node` are walked next.
*   Replacing or removing it is easier in `exit`.
*   When replacing or removing it here,
*   return `SKIP` (as otherwise its old children are walked),
*   or `[SKIP, index]` to continue with the node now at `index`.
*   Changing next siblings (in walk order) is fine;
*   changing previous siblings needs a new `Index`.
*   Removing an ancestor or changing its previous siblings is not supported.
* @param {Visited} node
*   Found node.
* @param {Array<VisitedParents>} ancestors
*   Ancestors of `node`.
* @param {number | undefined} index
*   Index of `node` in its parent (the last of `ancestors`),
*   or `undefined` for the tree itself.
* @returns {VisitorResult}
*   What to do next.
*
*   Like `VisitorExit`,
*   but `SKIP` can also be returned,
*   to not walk the children of `node`.
*   Passing a tuple back (`ActionTuple`) only makes sense as `[SKIP, Index]`.
* @template {UnistNode} [Visited=UnistNode]
*   Visited node type.
* @template {UnistParent} [VisitedParents=UnistParent]
*   Ancestor type.
*/
/**
* @callback VisitorExit
*   Handle a node (matching `test`, if given) after its children.
*
*   Changes inside `node` are not walked,
*   which makes this a good place to change `node` based on its children,
*   or to replace or remove it.
*   When removing `node` or changing previous siblings (in walk order),
*   return a new `Index`.
*   Removing an ancestor or changing its previous siblings is not supported.
* @param {Visited} node
*   Found node.
* @param {Array<VisitedParents>} ancestors
*   Ancestors of `node`.
* @param {number | undefined} index
*   Index of `node` in its parent (the last of `ancestors`),
*   or `undefined` for the tree itself.
* @returns {VisitorResultExit}
*   What to do next.
*
*   `CONTINUE` (`true`, nothing) continues as normal,
*   `EXIT` (`false`) stops traversing,
*   and `Index` continues at that sibling.
* @template {UnistNode} [Visited=UnistNode]
*   Visited node type.
* @template {UnistParent} [VisitedParents=UnistParent]
*   Ancestor type.
*/
/**
* @template {UnistNode} [Visited=UnistNode]
*   Visited node type.
* @template {UnistParent} [VisitedParents=UnistParent]
*   Ancestor type.
* @typedef Visitors
*   Handle nodes when entering and exiting them.
*   The `enter` visitor is optional while `exit` is required.
*
*   Pass an `enter` visitor directly to only handle nodes when entering them.
*
*   `enter` is called before children (if any) are walked and `exit` after that.
*   `exit` is still called when `enter` returns `SKIP`.
*   Both `enter` and `exit` are only called for nodes that match an optional `test`.
* @property {Visitor<Visited, VisitedParents> | null | undefined} [enter]
*   Handle a node before its children (optional).
* @property {VisitorExit<Visited, VisitedParents>} exit
*   Handle a node after its children.
*/
/**
* @typedef {Visitor<Matches<InclusiveDescendant<Tree>, Check>, Ancestor<Tree, Matches<InclusiveDescendant<Tree>, Check>>>} BuildVisitor
*   Build a typed `Visitor` function from a tree and a test.
*
*   It will infer which values are passed as `node` and which as `parents`.
* @template {UnistNode} [Tree=UnistNode]
*   Tree type.
* @template {Test} [Check=Test]
*   Test type.
*/
/**
* @typedef {Visitors<Matches<InclusiveDescendant<Tree>, Check>, Ancestor<Tree, Matches<InclusiveDescendant<Tree>, Check>>>} BuildVisitors
*   Build typed `Visitors` from a tree and a test.
*
*   It will infer which values are passed as `node` and which as `parents`.
* @template {UnistNode} [Tree=UnistNode]
*   Tree type.
* @template {Test} [Check=Test]
*   Test type.
*/
/** @type {Readonly<ActionTuple>} */
var empty = [];
/**
* Visit nodes, with ancestral information.
*
* This algorithm performs *depth-first* *tree traversal* in *preorder*
* (**NLR**) or if `reverse` is given,
* in *reverse preorder* (**NRL**).
* An `exit` visitor is called in *postorder* (**LRN**)
* or if `reverse` is given, in *reverse postorder* (**RLN**).
*
* You can choose which nodes are visited by passing a `test`.
* For complex tests, you should test yourself in a visitor, as it will be
* faster and will have improved type information.
*
* Walking the tree is an intensive task.
* Make use of the return values of the visitor when possible.
* Instead of walking a tree multiple times, walk it once, use `unist-util-is`
* to check if a node matches, and then perform different operations.
*
* You can change the tree.
* Changes inside a node made when entering it are walked,
* changes made when exiting it are not.
* See `Visitor` and `VisitorExit` for more info.
*
* @overload
* @param {Tree} tree
*   Tree to traverse.
* @param {Check} check
*   `unist-util-is`-compatible test.
* @param {BuildVisitor<Tree, Check>} enter
*   Handle each node when entering it.
* @param {boolean | null | undefined} [reverse]
*   Walk children from last to first;
*   for `enter`, reverse preorder (NRL) instead of preorder (NLR);
*   for `exit`, reverse postorder (RLN) instead of postorder (LRN).
* @returns {undefined}
*   Nothing.
*
* @overload
* @param {Tree} tree
*   Tree to traverse.
* @param {Check} check
*   `unist-util-is`-compatible test.
* @param {BuildVisitors<Tree, Check>} visitors
*   Handle each node when exiting it, and optionally when entering it.
* @param {boolean | null | undefined} [reverse]
*   Walk children from last to first;
*   for `enter`, reverse preorder (NRL) instead of preorder (NLR);
*   for `exit`, reverse postorder (RLN) instead of postorder (LRN).
* @returns {undefined}
*   Nothing.
*
* @overload
* @param {Tree} tree
*   Tree to traverse.
* @param {BuildVisitor<Tree>} enter
*   Handle each node when entering it.
* @param {boolean | null | undefined} [reverse]
*   Walk children from last to first;
*   for `enter`, reverse preorder (NRL) instead of preorder (NLR);
*   for `exit`, reverse postorder (RLN) instead of postorder (LRN).
* @returns {undefined}
*   Nothing.
*
* @overload
* @param {Tree} tree
*   Tree to traverse.
* @param {BuildVisitors<Tree>} visitors
*   Handle each node when exiting it, and optionally when entering it.
* @param {boolean | null | undefined} [reverse]
*   Walk children from last to first;
*   for `enter`, reverse preorder (NRL) instead of preorder (NLR);
*   for `exit`, reverse postorder (RLN) instead of postorder (LRN).
* @returns {undefined}
*   Nothing.
*
* @param {UnistNode} tree
*   Tree to traverse.
* @param {Visitor | Visitors | Test} testOrEnterOrVisitors
*   `unist-util-is`-compatible test, `enter`, or `visitors`.
* @param {Visitor | Visitors | boolean | null | undefined} [enterOrVisitorsOrReverse]
*   `enter`, `visitors`, or `reverse` after a test.
* @param {boolean | null | undefined} [reverse]
*   Walk children from last to first;
*   for `enter`, reverse preorder (NRL) instead of preorder (NLR);
*   for `exit`, reverse postorder (RLN) instead of postorder (LRN).
* @returns {undefined}
*   Nothing.
*
* @template {UnistNode} Tree
*   Node type.
* @template {Test} Check
*   `unist-util-is`-compatible test.
*/
function visitParents(tree, testOrEnterOrVisitors, enterOrVisitorsOrReverse, reverse) {
	if (!tree || typeof tree !== "object") throw new Error("Unexpected value `" + tree + "` for `tree`, expected node");
	let preorder = true;
	/** @type {Test} */
	let check;
	/** @type {Visitors | Visitor} */
	let visitors;
	/** @type {Visitor | null | undefined} */
	let enter;
	/** @type {VisitorExit | null | undefined} */
	let exit;
	if (typeof enterOrVisitorsOrReverse === "function" || enterOrVisitorsOrReverse && typeof enterOrVisitorsOrReverse === "object") {
		check = testOrEnterOrVisitors;
		visitors = enterOrVisitorsOrReverse;
		if (reverse) preorder = false;
	} else {
		visitors = testOrEnterOrVisitors;
		if (enterOrVisitorsOrReverse) preorder = false;
	}
	if (typeof visitors === "function") enter = visitors;
	else if (visitors && typeof visitors === "object") {
		if (visitors.enter === null || visitors.enter === void 0) {} else if (typeof visitors.enter === "function") enter = visitors.enter;
		else throw new Error("Unexpected value `" + visitors.enter + "` for `visitors.enter`, expected optional visitor");
		if (typeof visitors.exit === "function") exit = visitors.exit;
		else throw new Error("Unexpected value `" + visitors.exit + "` for `visitors.exit`, expected visitor (pass a visitor directly if you only want an enter visitor)");
	} else throw new Error("Unexpected value `" + visitors + "` for `enter` or `visitors`, expected visitor or object with visitors");
	const is = convert(check);
	const step = preorder ? 1 : -1;
	factory(tree, void 0, [])();
	/**
	* Create a function to visit a node.
	*
	* @param {UnistNode} node
	*   Node to visit.
	* @param {number | undefined} index
	*   Index of `node` in its parent.
	* @param {Array<UnistParent>} parents
	*   Ancestors of `node`.
	* @returns {() => Readonly<ActionTuple>}
	*   Visit `node`.
	*/
	function factory(node, index, parents) {
		const value = node && typeof node === "object" ? node : {};
		if (typeof value.type === "string") {
			const name = typeof value.tagName === "string" ? value.tagName : typeof value.name === "string" ? value.name : void 0;
			Object.defineProperty(visit, "name", { value: "node (" + color(node.type + (name ? "<" + name + ">" : "")) + ")" });
		}
		return visit;
		function visit() {
			const matches = !check || is(node, index, parents[parents.length - 1] || void 0);
			/** @type {Readonly<ActionTuple>} */
			let result = empty;
			if (enter && matches) {
				result = toResult(enter(node, parents, index));
				if (result[0] === false) return result;
			}
			if ("children" in node && node.children) {
				const nodeAsParent = node;
				if (nodeAsParent.children && result[0] !== "skip") {
					let offset = (preorder ? -1 : nodeAsParent.children.length) + step;
					const grandparents = [...parents, nodeAsParent];
					while (offset > -1 && offset < nodeAsParent.children.length) {
						const child = nodeAsParent.children[offset];
						const subresult = factory(child, offset, grandparents)();
						if (subresult[0] === false) return subresult;
						offset = typeof subresult[1] === "number" ? subresult[1] : offset + step;
					}
				}
			}
			if (exit && matches) {
				const exitResult = toResult(exit(node, parents, index));
				if (exitResult[0] === "skip") throw new Error("Unexpected value `" + exitResult[0] + "` from `exit`, expected `CONTINUE`, `EXIT`, index, or nothing");
				if (exitResult[0] === false || typeof exitResult[1] === "number") return exitResult;
			}
			return result;
		}
	}
}
/**
* Turn a return value into a clean result.
*
* @param {VisitorResult} value
*   Valid return values from visitors.
* @returns {Readonly<ActionTuple>}
*   Clean result.
*/
function toResult(value) {
	if (Array.isArray(value)) return value;
	if (typeof value === "number") return [true, value];
	return value === null || value === void 0 ? empty : [value];
}
//#endregion
//#region node_modules/react-refractor/dist/index.js
var __defProp$2 = Object.defineProperty;
var __defProps$2 = Object.defineProperties;
var __getOwnPropDescs$2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value
}) : obj[key] = value;
var __spreadValues$2 = (a, b) => {
	for (var prop in b || (b = {})) __hasOwnProp$2.call(b, prop) && __defNormalProp$2(a, prop, b[prop]);
	if (__getOwnPropSymbols$2) for (var prop of __getOwnPropSymbols$2(b)) __propIsEnum$2.call(b, prop) && __defNormalProp$2(a, prop, b[prop]);
	return a;
};
var __spreadProps$2 = (a, b) => __defProps$2(a, __getOwnPropDescs$2(b));
function addMarkers(ast, options) {
	const markers = options.markers.map((marker) => typeof marker == "number" ? { line: marker } : marker).sort((nodeA, nodeB) => nodeA.line - nodeB.line), numbered = lineNumberify(ast.children).nodes;
	return markers.length === 0 || numbered.length === 0 ? __spreadProps$2(__spreadValues$2({}, ast), { children: numbered }) : wrapLines(numbered, markers, options);
}
function lineNumberify(ast, context = { lineNumber: 1 }) {
	return ast.reduce((result, node) => {
		if (node.type === "doctype") return result;
		const lineStart = context.lineNumber;
		if (node.type === "text") {
			if (node.value.indexOf(`
`) === -1) return setLineInfo(node, lineStart, lineStart), result.nodes.push(node), result;
			const lines = node.value.split(`
`);
			for (let i = 0; i < lines.length; i++) {
				const lineNum = i === 0 ? context.lineNumber : ++context.lineNumber, withLineInfo = setLineInfo({
					type: "text",
					value: i === lines.length - 1 ? lines[i] : `${lines[i]}
`
				}, lineNum, lineNum);
				result.nodes.push(withLineInfo);
			}
			return result.lineNumber = context.lineNumber, result;
		}
		if (node.type === "element" && node.children) {
			const processed = lineNumberify(node.children, context), firstChild = processed.nodes.find(isElementOrText), lastChild = processed.nodes.findLast(isElementOrText);
			return setLineInfo(node, firstChild ? getLineStart(firstChild, lineStart) : lineStart, lastChild ? getLineEnd(lastChild, lineStart) : lineStart), node.children = processed.nodes, result.lineNumber = processed.lineNumber, result.nodes.push(node), result;
		}
		return result.nodes.push(node), result;
	}, {
		nodes: [],
		lineNumber: context.lineNumber
	});
}
function isElementOrText(node) {
	return node.type === "element" || node.type === "text";
}
function getLineStart(node, fallbackLineStart = 1) {
	return node.data && typeof node.data.lineStart == "number" ? node.data.lineStart : fallbackLineStart;
}
function getLineEnd(node, fallbackLineEnd = 1) {
	return node.data && typeof node.data.lineEnd == "number" ? node.data.lineEnd : fallbackLineEnd;
}
function setLineInfo(node, lineStart, lineEnd) {
	return node.data || (node.data = {}), node.data.lineStart = lineStart, node.data.lineEnd = lineEnd, node;
}
function unwrapLine(markerLine, nodes) {
	const tree = {
		type: "root",
		children: nodes
	}, headMap = /* @__PURE__ */ new WeakMap(), lineMap = /* @__PURE__ */ new WeakMap(), tailMap = /* @__PURE__ */ new WeakMap(), cloned = [];
	function addCopy(map, node, ancestors) {
		cloned.push(node), ancestors.forEach((ancestor) => {
			map.has(ancestor) || (map.set(ancestor, Object.assign({}, ancestor, { children: [] })), ancestor !== tree && cloned.push(ancestor));
		});
		let i = ancestors.length;
		for (; i--;) {
			const ancestor = map.get(ancestors[i]);
			if (!ancestor || !("children" in ancestor)) continue;
			const child = ancestors[i + 1], leaf = map.get(child) || node;
			ancestor.children.indexOf(leaf) === -1 && ancestor.children.push(leaf);
		}
	}
	visitParents(tree, (node, ancestors) => {
		if (!("children" in node || !isElementOrText(node))) {
			if (getLineStart(node) < markerLine) {
				addCopy(headMap, node, ancestors);
				return;
			}
			if (getLineStart(node) === markerLine) {
				addCopy(lineMap, node, ancestors);
				return;
			}
			getLineEnd(node) > markerLine && cloned.some((clone) => ancestors.includes(clone)) && addCopy(tailMap, node, ancestors);
		}
	});
	const filtered = filter(tree, (node) => cloned.indexOf(node) === -1), getChildren = (map) => {
		const rootNode = map.get(tree);
		return rootNode ? (visitParents(rootNode, (leaf, ancestors) => {
			if (isElementOrText(leaf) && "children" in leaf) {
				setLineInfo(leaf, 0, 0);
				return;
			}
			ancestors.forEach((ancestor) => {
				setLineInfo(ancestor, Math.max(getLineStart(ancestor), getLineStart(leaf)), Math.max(getLineEnd(ancestor), getLineEnd(leaf)));
			});
		}), rootNode.children) : [];
	};
	return [
		...getChildren(headMap),
		...getChildren(lineMap),
		...getChildren(tailMap),
		...filtered ? filtered.children : []
	];
}
function wrapBatch(children, marker, options) {
	const className = marker.className || "refractor-marker", baseData = {
		lineStart: marker.line,
		lineEnd: getLineEnd(children[children.length - 1]),
		isMarker: !0
	};
	return {
		type: "element",
		tagName: "div",
		data: marker.component ? __spreadProps$2(__spreadValues$2({}, baseData), {
			component: marker.component,
			markerProperties: options
		}) : baseData,
		properties: { className },
		children
	};
}
function wrapLines(treeNodes, markers, options) {
	const ast = markers.reduce((acc, marker) => unwrapLine(marker.line, acc), treeNodes), wrapped = [];
	let astIndex = 0;
	for (let m = 0; m < markers.length; m++) {
		const marker = markers[m];
		for (let node = ast[astIndex]; node && getLineEnd(node) < marker.line; node = ast[++astIndex]) wrapped.push(node);
		const batch = [];
		for (let node = ast[astIndex]; node && getLineEnd(node) === marker.line; node = ast[++astIndex]) node.type !== "doctype" && batch.push(node);
		batch.length > 0 && wrapped.push(wrapBatch(batch, marker, options));
	}
	for (; astIndex < ast.length;) wrapped.push(ast[astIndex++]);
	return {
		type: "root",
		children: wrapped
	};
}
var __defProp$1 = Object.defineProperty;
var __defProps$1 = Object.defineProperties;
var __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value
}) : obj[key] = value;
var __spreadValues$1 = (a, b) => {
	for (var prop in b || (b = {})) __hasOwnProp$1.call(b, prop) && __defNormalProp$1(a, prop, b[prop]);
	if (__getOwnPropSymbols$1) for (var prop of __getOwnPropSymbols$1(b)) __propIsEnum$1.call(b, prop) && __defNormalProp$1(a, prop, b[prop]);
	return a;
};
var __spreadProps$1 = (a, b) => __defProps$1(a, __getOwnPropDescs$1(b));
function mapWithDepth(depth) {
	return function(child, i) {
		return mapChild(child, i, depth);
	};
}
function mapChild(child, i, depth) {
	if (child.type === "doctype") return null;
	if (!("tagName" in child)) return child.value;
	let className = "";
	typeof child.properties < "u" && (className = Array.isArray(child.properties.className) ? child.properties.className.join(" ") : `${child.properties.className}`);
	const key = `fract-${depth}-${i}`, children = child.children && child.children.map(mapWithDepth(depth + 1));
	return isReactRefractorMarkerDataWithComponent(child.data) ? (0, import_react.createElement)(child.data.component, __spreadProps$1(__spreadValues$1(__spreadValues$1({ key }, child.properties), child.data.markerProperties), { className }), children) : (0, import_react.createElement)(child.tagName, {
		key,
		className
	}, children);
}
function isReactRefractorMarkerDataWithComponent(data) {
	return typeof data == "object" && data !== null && "component" in data && "markerProperties" in data;
}
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value
}) : obj[key] = value;
var __spreadValues = (a, b) => {
	for (var prop in b || (b = {})) __hasOwnProp.call(b, prop) && __defNormalProp(a, prop, b[prop]);
	if (__getOwnPropSymbols) for (var prop of __getOwnPropSymbols(b)) __propIsEnum.call(b, prop) && __defNormalProp(a, prop, b[prop]);
	return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var DEFAULT_CLASSNAME = "refractor";
function Refractor(props) {
	const className = props.className || DEFAULT_CLASSNAME, langClassName = `language-${props.language}`, codeProps = { className: langClassName }, preClass = [className, langClassName].filter(Boolean).join(" ");
	if (props.inline && (codeProps.style = { display: "inline" }, codeProps.className = className), props.plainText) {
		const code2 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", __spreadProps(__spreadValues({}, codeProps), { children: props.value }));
		return props.inline ? code2 : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
			className: preClass,
			children: code2
		});
	}
	let ast = refractor.highlight(props.value, props.language);
	props.markers && props.markers.length > 0 && (ast = addMarkers(ast, { markers: props.markers }));
	const value = ast.children.length === 0 ? props.value : ast.children.map(mapWithDepth(0)), code = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", __spreadProps(__spreadValues({}, codeProps), { children: value }));
	return props.inline ? code : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
		className: preClass,
		children: code
	});
}
var registerLanguage = (lang) => refractor.register(lang);
var hasLanguage = (lang) => refractor.registered(lang);
//#endregion
//#region node_modules/@sanity/ui/dist/_chunks/refractor.js
var refractor_exports = /* @__PURE__ */ __exportAll({ default: () => LazyRefractor });
function LazyRefractor(props) {
	let $ = (0, import_dist.c)(13), { language: languageProp, value } = props, language = typeof languageProp == "string" ? languageProp : void 0, t0;
	$[0] === language ? t0 = $[1] : (t0 = language ? hasLanguage(language) : !1, $[0] = language, $[1] = t0);
	let registered = t0, t1;
	$[2] !== language || $[3] !== registered || $[4] !== value ? (t1 = !(language && registered) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: value }), $[2] = language, $[3] = registered, $[4] = value, $[5] = t1) : t1 = $[5];
	let t2;
	$[6] !== language || $[7] !== registered || $[8] !== value ? (t2 = language && registered && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Refractor, {
		inline: !0,
		language,
		value: String(value)
	}), $[6] = language, $[7] = registered, $[8] = value, $[9] = t2) : t2 = $[9];
	let t3;
	return $[10] !== t1 || $[11] !== t2 ? (t3 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [t1, t2] }), $[10] = t1, $[11] = t2, $[12] = t3) : t3 = $[12], t3;
}
//#endregion
export { focusFirstDescendant as A, TabPanel as C, TooltipDelayGroupProvider as D, ToastProvider as E, useArrayProp as M, useElementRect as N, VirtualList as O, useToast as P, Switch as S, TextSkeleton as T, Label as _, AvatarStack as a, Select as b, Breadcrumbs as c, Container as d, Dialog as f, Heading as g, ErrorBoundary as h, AvatarCounter as i, focusLastDescendant as j, _raf2 as k, Checkbox as l, ElementQuery as m, Autocomplete as n, Badge as o, DialogProvider as p, Avatar as r, BoundaryElementProvider as s, registerLanguage as t, Code as u, MenuButton as v, TextArea as w, Skeleton as x, Radio as y };
