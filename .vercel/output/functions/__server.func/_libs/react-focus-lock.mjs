import { o as __toESM } from "../_runtime.mjs";
import { i as require_react } from "./dnd-kit__accessibility+react.mjs";
import { a as _extends, o as _objectWithoutPropertiesLoose } from "./babel__runtime.mjs";
import { a as captureFocusRestore, c as focusIsHidden, d as FOCUS_DISABLED, f as FOCUS_GROUP, i as focusPrevElement, l as focusInside, n as focusLastElement, o as moveFocusInside, r as focusNextElement, s as expandFocusableNodes, t as focusFirstElement, u as getFocusableNodes } from "./focus-lock.mjs";
import { d as createMedium, f as createSidecarMedium, p as useMergeRefs } from "./@puckeditor/core.mjs";
import { t as withSideEffect } from "./react-clientside-effect.mjs";
//#region node_modules/react-focus-lock/dist/es2015/FocusGuard.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var hiddenGuard = {
	width: "1px",
	height: "0px",
	padding: 0,
	overflow: "hidden",
	position: "fixed",
	top: "1px",
	left: "1px"
};
var InFocusGuard = function InFocusGuard(_ref) {
	var _ref$children = _ref.children, children = _ref$children === void 0 ? null : _ref$children;
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, /*#__PURE__*/ import_react.createElement("div", {
		key: "guard-first",
		"data-focus-guard": true,
		"data-focus-auto-guard": true,
		style: hiddenGuard
	}), children, children && /*#__PURE__*/ import_react.createElement("div", {
		key: "guard-last",
		"data-focus-guard": true,
		"data-focus-auto-guard": true,
		style: hiddenGuard
	}));
};
InFocusGuard.propTypes = {};
//#endregion
//#region node_modules/react-focus-lock/dist/es2015/medium.js
var mediumFocus = createMedium({}, function(_ref) {
	return {
		target: _ref.target,
		currentTarget: _ref.currentTarget
	};
});
var mediumBlur = createMedium();
var mediumEffect = createMedium();
var mediumSidecar = createSidecarMedium({
	async: true,
	ssr: typeof document !== "undefined"
});
//#endregion
//#region node_modules/react-focus-lock/dist/es2015/scope.js
var focusScope = /*#__PURE__*/ (0, import_react.createContext)(void 0);
//#endregion
//#region node_modules/react-focus-lock/dist/es2015/Lock.js
var emptyArray = [];
var FocusLock = /*#__PURE__*/ (0, import_react.forwardRef)(function FocusLockUI(props, parentRef) {
	var _extends2;
	var _useState = (0, import_react.useState)(), realObserved = _useState[0], setObserved = _useState[1];
	var observed = (0, import_react.useRef)();
	var isActive = (0, import_react.useRef)(false);
	var originalFocusedElement = (0, import_react.useRef)(null);
	var update = (0, import_react.useState)({})[1], children = props.children, _props$disabled = props.disabled, disabled = _props$disabled === void 0 ? false : _props$disabled, _props$noFocusGuards = props.noFocusGuards, noFocusGuards = _props$noFocusGuards === void 0 ? false : _props$noFocusGuards, _props$persistentFocu = props.persistentFocus, persistentFocus = _props$persistentFocu === void 0 ? false : _props$persistentFocu, _props$crossFrame = props.crossFrame, crossFrame = _props$crossFrame === void 0 ? true : _props$crossFrame, _props$autoFocus = props.autoFocus, autoFocus = _props$autoFocus === void 0 ? true : _props$autoFocus;
	props.allowTextSelection;
	var group = props.group, className = props.className, whiteList = props.whiteList, hasPositiveIndices = props.hasPositiveIndices, _props$shards = props.shards, shards = _props$shards === void 0 ? emptyArray : _props$shards, _props$as = props.as, Container = _props$as === void 0 ? "div" : _props$as, _props$lockProps = props.lockProps, containerProps = _props$lockProps === void 0 ? {} : _props$lockProps, SideCar = props.sideCar, _props$returnFocus = props.returnFocus, shouldReturnFocus = _props$returnFocus === void 0 ? false : _props$returnFocus, focusOptions = props.focusOptions, onActivationCallback = props.onActivation, onDeactivationCallback = props.onDeactivation;
	var id = (0, import_react.useState)({})[0];
	var onActivation = (0, import_react.useCallback)(function(_ref) {
		var captureFocusRestore = _ref.captureFocusRestore;
		if (!originalFocusedElement.current) {
			var _document;
			var activeElement = (_document = document) == null ? void 0 : _document.activeElement;
			originalFocusedElement.current = activeElement;
			if (activeElement !== document.body) originalFocusedElement.current = captureFocusRestore(activeElement);
		}
		if (observed.current && onActivationCallback) onActivationCallback(observed.current);
		isActive.current = true;
		update();
	}, [onActivationCallback]);
	var onDeactivation = (0, import_react.useCallback)(function() {
		isActive.current = false;
		if (onDeactivationCallback) onDeactivationCallback(observed.current);
		update();
	}, [onDeactivationCallback]);
	var returnFocus = (0, import_react.useCallback)(function(allowDefer) {
		var focusRestore = originalFocusedElement.current;
		if (focusRestore) {
			var returnFocusTo = (typeof focusRestore === "function" ? focusRestore() : focusRestore) || document.body;
			var howToReturnFocus = typeof shouldReturnFocus === "function" ? shouldReturnFocus(returnFocusTo) : shouldReturnFocus;
			if (howToReturnFocus) {
				var returnFocusOptions = typeof howToReturnFocus === "object" ? howToReturnFocus : void 0;
				originalFocusedElement.current = null;
				if (allowDefer) Promise.resolve().then(function() {
					return returnFocusTo.focus(returnFocusOptions);
				});
				else returnFocusTo.focus(returnFocusOptions);
			}
		}
	}, [shouldReturnFocus]);
	var onFocus = (0, import_react.useCallback)(function(event) {
		if (isActive.current) mediumFocus.useMedium(event);
	}, []);
	var onBlur = mediumBlur.useMedium;
	var setObserveNode = (0, import_react.useCallback)(function(newObserved) {
		if (observed.current !== newObserved) {
			observed.current = newObserved;
			setObserved(newObserved);
		}
	}, []);
	var lockProps = _extends((_extends2 = {}, _extends2[FOCUS_DISABLED] = disabled && "disabled", _extends2[FOCUS_GROUP] = group, _extends2), containerProps);
	var hasLeadingGuards = noFocusGuards !== true;
	var hasTailingGuards = hasLeadingGuards && noFocusGuards !== "tail";
	var mergedRef = useMergeRefs([parentRef, setObserveNode]);
	var focusScopeValue = (0, import_react.useMemo)(function() {
		return {
			observed,
			shards,
			enabled: !disabled,
			get active() {
				return isActive.current;
			}
		};
	}, [
		disabled,
		isActive,
		shards,
		observed
	]);
	return /*#__PURE__*/ import_react.createElement(import_react.Fragment, null, hasLeadingGuards && [/*#__PURE__*/ import_react.createElement("div", {
		key: "guard-first",
		"data-focus-guard": true,
		tabIndex: disabled ? -1 : 0,
		style: hiddenGuard
	}), hasPositiveIndices ? /*#__PURE__*/ import_react.createElement("div", {
		key: "guard-nearest",
		"data-focus-guard": true,
		tabIndex: disabled ? -1 : 1,
		style: hiddenGuard
	}) : null], !disabled && /*#__PURE__*/ import_react.createElement(SideCar, {
		id,
		sideCar: mediumSidecar,
		observed: realObserved,
		disabled,
		persistentFocus,
		crossFrame,
		autoFocus,
		whiteList,
		shards,
		onActivation,
		onDeactivation,
		returnFocus,
		focusOptions,
		noFocusGuards
	}), /*#__PURE__*/ import_react.createElement(Container, _extends({ ref: mergedRef }, lockProps, {
		className,
		onBlur,
		onFocus
	}), /*#__PURE__*/ import_react.createElement(focusScope.Provider, { value: focusScopeValue }, children)), hasTailingGuards && /*#__PURE__*/ import_react.createElement("div", {
		"data-focus-guard": true,
		tabIndex: disabled ? -1 : 0,
		style: hiddenGuard
	}));
});
FocusLock.propTypes = {};
//#endregion
//#region node_modules/react-focus-lock/dist/es2015/util.js
function deferAction(action) {
	setTimeout(action, 1);
}
var extractRef = function extractRef(ref) {
	return ref && "current" in ref ? ref.current : ref;
};
//#endregion
//#region node_modules/react-focus-lock/dist/es2015/Trap.js
var focusOnBody = function focusOnBody() {
	return document && document.activeElement === document.body;
};
var isFreeFocus = function isFreeFocus() {
	return focusOnBody() || focusIsHidden();
};
var lastActiveTrap = null;
var lastActiveFocus = null;
var tryRestoreFocus = function tryRestoreFocus() {
	return null;
};
var lastPortaledElement = null;
var focusWasOutsideWindow = false;
var windowFocused = false;
var defaultWhitelist = function defaultWhitelist() {
	return true;
};
var focusWhitelisted = function focusWhitelisted(activeElement) {
	return (lastActiveTrap.whiteList || defaultWhitelist)(activeElement);
};
var recordPortal = function recordPortal(observerNode, portaledElement) {
	lastPortaledElement = {
		observerNode,
		portaledElement
	};
};
var focusIsPortaledPair = function focusIsPortaledPair(element) {
	return lastPortaledElement && lastPortaledElement.portaledElement === element;
};
function autoGuard(startIndex, end, step, allNodes) {
	var lastGuard = null;
	var i = startIndex;
	do {
		var item = allNodes[i];
		if (item.guard) {
			if (item.node.dataset.focusAutoGuard) lastGuard = item;
		} else if (item.lockItem) {
			if (i !== startIndex) return;
			lastGuard = null;
		} else break;
	} while ((i += step) !== end);
	if (lastGuard) lastGuard.node.tabIndex = 0;
}
var focusWasOutside = function focusWasOutside(crossFrameOption) {
	if (crossFrameOption) return Boolean(focusWasOutsideWindow);
	return focusWasOutsideWindow === "meanwhile";
};
var checkInHost = function checkInHost(check, el, boundary) {
	return el && (el.host === check && (!el.activeElement || boundary.contains(el.activeElement)) || el.parentNode && checkInHost(check, el.parentNode, boundary));
};
var withinHost = function withinHost(activeElement, workingArea) {
	return workingArea.some(function(area) {
		return checkInHost(activeElement, area, area);
	});
};
var getNodeFocusables = function getNodeFocusables(nodes) {
	return getFocusableNodes(nodes, /* @__PURE__ */ new Map());
};
var isNotFocusable = function isNotFocusable(node) {
	return !getNodeFocusables([node.parentNode]).some(function(el) {
		return el.node === node;
	});
};
var activateTrap = function activateTrap() {
	var result = false;
	if (lastActiveTrap) {
		var _lastActiveTrap = lastActiveTrap, observed = _lastActiveTrap.observed, persistentFocus = _lastActiveTrap.persistentFocus, autoFocus = _lastActiveTrap.autoFocus, shards = _lastActiveTrap.shards, crossFrame = _lastActiveTrap.crossFrame, focusOptions = _lastActiveTrap.focusOptions, noFocusGuards = _lastActiveTrap.noFocusGuards;
		var workingNode = observed || lastPortaledElement && lastPortaledElement.portaledElement;
		if (focusOnBody() && lastActiveFocus && lastActiveFocus !== document.body) {
			if (!document.body.contains(lastActiveFocus) || isNotFocusable(lastActiveFocus)) {
				var newTarget = tryRestoreFocus();
				if (newTarget) newTarget.focus();
			}
		}
		var activeElement = document && document.activeElement;
		if (workingNode) {
			var workingArea = [workingNode].concat(shards.map(extractRef).filter(Boolean));
			var shouldForceRestoreFocus = function shouldForceRestoreFocus() {
				if (!focusWasOutside(crossFrame) || !noFocusGuards || !lastActiveFocus || windowFocused) return false;
				var nodes = getNodeFocusables(workingArea);
				var lastIndex = nodes.findIndex(function(_ref) {
					return _ref.node === lastActiveFocus;
				});
				return lastIndex === 0 || lastIndex === nodes.length - 1;
			};
			if (!activeElement || focusWhitelisted(activeElement)) {
				if (persistentFocus || shouldForceRestoreFocus() || !isFreeFocus() || !lastActiveFocus && autoFocus) {
					if (workingNode && !(focusInside(workingArea) || activeElement && withinHost(activeElement, workingArea) || focusIsPortaledPair(activeElement, workingNode))) if (document && !lastActiveFocus && activeElement && !autoFocus) {
						if (activeElement.blur) activeElement.blur();
						document.body.focus();
					} else {
						result = moveFocusInside(workingArea, lastActiveFocus, { focusOptions });
						lastPortaledElement = {};
					}
					lastActiveFocus = document && document.activeElement;
					if (lastActiveFocus !== document.body) tryRestoreFocus = captureFocusRestore(lastActiveFocus);
					focusWasOutsideWindow = false;
				}
			}
			if (document && activeElement !== document.activeElement && document.querySelector("[data-focus-auto-guard]")) {
				var newActiveElement = document && document.activeElement;
				var allNodes = expandFocusableNodes(workingArea);
				var focusedIndex = allNodes.map(function(_ref2) {
					return _ref2.node;
				}).indexOf(newActiveElement);
				if (focusedIndex > -1) {
					allNodes.filter(function(_ref3) {
						var guard = _ref3.guard, node = _ref3.node;
						return guard && node.dataset.focusAutoGuard;
					}).forEach(function(_ref4) {
						return _ref4.node.removeAttribute("tabIndex");
					});
					autoGuard(focusedIndex, allNodes.length, 1, allNodes);
					autoGuard(focusedIndex, -1, -1, allNodes);
				}
			}
		}
	}
	return result;
};
var onTrap = function onTrap(event) {
	if (activateTrap() && event) {
		event.stopPropagation();
		event.preventDefault();
	}
};
var onBlur = function onBlur() {
	return deferAction(activateTrap);
};
var onFocus = function onFocus(event) {
	var source = event.target;
	var currentNode = event.currentTarget;
	if (!currentNode.contains(source)) recordPortal(currentNode, source);
};
var FocusWatcher = function FocusWatcher() {
	return null;
};
var FocusTrap = function FocusTrap(_ref5) {
	var children = _ref5.children;
	return /*#__PURE__*/ import_react.createElement("div", {
		onBlur,
		onFocus
	}, children);
};
FocusTrap.propTypes = {};
var onWindowFocus = function onWindowFocus() {
	windowFocused = true;
};
var onWindowBlur = function onWindowBlur() {
	windowFocused = false;
	focusWasOutsideWindow = "just";
	deferAction(function() {
		focusWasOutsideWindow = "meanwhile";
	});
};
var attachHandler = function attachHandler() {
	document.addEventListener("focusin", onTrap);
	document.addEventListener("focusout", onBlur);
	window.addEventListener("focus", onWindowFocus);
	window.addEventListener("blur", onWindowBlur);
};
var detachHandler = function detachHandler() {
	document.removeEventListener("focusin", onTrap);
	document.removeEventListener("focusout", onBlur);
	window.removeEventListener("focus", onWindowFocus);
	window.removeEventListener("blur", onWindowBlur);
};
function reducePropsToState(propsList) {
	return propsList.filter(function(_ref6) {
		return !_ref6.disabled;
	});
}
var focusLockAPI = {
	moveFocusInside,
	focusInside,
	focusNextElement,
	focusPrevElement,
	focusFirstElement,
	focusLastElement,
	captureFocusRestore
};
function handleStateChangeOnClient(traps) {
	var trap = traps.slice(-1)[0];
	if (trap && !lastActiveTrap) attachHandler();
	var lastTrap = lastActiveTrap;
	var sameTrap = lastTrap && trap && trap.id === lastTrap.id;
	lastActiveTrap = trap;
	if (lastTrap && !sameTrap) {
		lastTrap.onDeactivation();
		if (!traps.filter(function(_ref7) {
			return _ref7.id === lastTrap.id;
		}).length) lastTrap.returnFocus(!trap);
	}
	if (trap) {
		lastActiveFocus = null;
		if (!sameTrap || lastTrap.observed !== trap.observed) trap.onActivation(focusLockAPI);
		activateTrap(true);
		deferAction(activateTrap);
	} else {
		detachHandler();
		lastActiveFocus = null;
	}
}
mediumFocus.assignSyncMedium(onFocus);
mediumBlur.assignMedium(onBlur);
mediumEffect.assignMedium(function(cb) {
	return cb(focusLockAPI);
});
var Trap_default = withSideEffect(reducePropsToState, handleStateChangeOnClient)(FocusWatcher);
//#endregion
//#region node_modules/react-focus-lock/dist/es2015/Combination.js
var FocusLockCombination = /*#__PURE__*/ (0, import_react.forwardRef)(function FocusLockUICombination(props, ref) {
	return /*#__PURE__*/ import_react.createElement(FocusLock, _extends({
		sideCar: Trap_default,
		ref
	}, props));
});
var _ref = FocusLock.propTypes || {};
_ref.sideCar;
_objectWithoutPropertiesLoose(_ref, ["sideCar"]);
FocusLockCombination.propTypes = {};
//#endregion
//#region node_modules/react-focus-lock/dist/es2015/index.js
var es2015_default = FocusLockCombination;
//#endregion
export { es2015_default as t };
