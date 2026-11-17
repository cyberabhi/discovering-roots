//#region node_modules/focus-lock/dist/es2015/constants.js
/**
* defines a focus group
*/
var FOCUS_GROUP = "data-focus-lock";
/**
* disables element discovery inside a group marked by key
*/
var FOCUS_DISABLED = "data-focus-lock-disabled";
/**
* allows uncontrolled focus within the marked area, effectively disabling focus lock for it's content
*/
var FOCUS_ALLOW = "data-no-focus-lock";
/**
* instructs autofocus engine to pick default autofocus inside a given node
* can be set on the element or container
*/
var FOCUS_AUTO = "data-autofocus-inside";
/**
* instructs autofocus to ignore elements within a given node
* can be set on the element or container
*/
var FOCUS_NO_AUTOFOCUS = "data-no-autofocus";
//#endregion
//#region node_modules/focus-lock/dist/es2015/utils/array.js
var toArray = function(a) {
	var ret = Array(a.length);
	for (var i = 0; i < a.length; ++i) ret[i] = a[i];
	return ret;
};
var asArray = function(a) {
	return Array.isArray(a) ? a : [a];
};
var getFirst = function(a) {
	return Array.isArray(a) ? a[0] : a;
};
//#endregion
//#region node_modules/focus-lock/dist/es2015/utils/is.js
var isElementHidden = function(node) {
	if (node.nodeType !== Node.ELEMENT_NODE) return false;
	var computedStyle = window.getComputedStyle(node, null);
	if (!computedStyle || !computedStyle.getPropertyValue) return false;
	return computedStyle.getPropertyValue("display") === "none" || computedStyle.getPropertyValue("visibility") === "hidden";
};
var getParentNode = function(node) {
	return node.parentNode && node.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? node.parentNode.host : node.parentNode;
};
var isTopNode = function(node) {
	return node === document || node && node.nodeType === Node.DOCUMENT_NODE;
};
var isInert = function(node) {
	return node.hasAttribute("inert");
};
/**
* @see https://github.com/testing-library/jest-dom/blob/main/src/to-be-visible.js
*/
var isVisibleUncached = function(node, checkParent) {
	return !node || isTopNode(node) || !isElementHidden(node) && !isInert(node) && checkParent(getParentNode(node));
};
var isVisibleCached = function(visibilityCache, node) {
	var cached = visibilityCache.get(node);
	if (cached !== void 0) return cached;
	var result = isVisibleUncached(node, isVisibleCached.bind(void 0, visibilityCache));
	visibilityCache.set(node, result);
	return result;
};
var isAutoFocusAllowedUncached = function(node, checkParent) {
	return node && !isTopNode(node) ? isAutoFocusAllowed(node) ? checkParent(getParentNode(node)) : false : true;
};
var isAutoFocusAllowedCached = function(cache, node) {
	var cached = cache.get(node);
	if (cached !== void 0) return cached;
	var result = isAutoFocusAllowedUncached(node, isAutoFocusAllowedCached.bind(void 0, cache));
	cache.set(node, result);
	return result;
};
var getDataset = function(node) {
	return node.dataset;
};
var isHTMLButtonElement = function(node) {
	return node.tagName === "BUTTON";
};
var isHTMLInputElement = function(node) {
	return node.tagName === "INPUT";
};
var isRadioElement = function(node) {
	return isHTMLInputElement(node) && node.type === "radio";
};
var notHiddenInput = function(node) {
	return !((isHTMLInputElement(node) || isHTMLButtonElement(node)) && (node.type === "hidden" || node.disabled));
};
var isAutoFocusAllowed = function(node) {
	var attribute = node.getAttribute(FOCUS_NO_AUTOFOCUS);
	return ![
		true,
		"true",
		""
	].includes(attribute);
};
var isGuard = function(node) {
	var _a;
	return Boolean(node && ((_a = getDataset(node)) === null || _a === void 0 ? void 0 : _a.focusGuard));
};
var isNotAGuard = function(node) {
	return !isGuard(node);
};
var isDefined = function(x) {
	return Boolean(x);
};
//#endregion
//#region node_modules/focus-lock/dist/es2015/utils/tabOrder.js
var tabSort = function(a, b) {
	var aTab = Math.max(0, a.tabIndex);
	var bTab = Math.max(0, b.tabIndex);
	var tabDiff = aTab - bTab;
	var indexDiff = a.index - b.index;
	if (tabDiff) {
		if (!aTab) return 1;
		if (!bTab) return -1;
	}
	return tabDiff || indexDiff;
};
var getTabIndex = function(node) {
	if (node.tabIndex < 0) {
		if (!node.hasAttribute("tabindex")) return 0;
	}
	return node.tabIndex;
};
var orderByTabIndex = function(nodes, filterNegative, keepGuards) {
	return toArray(nodes).map(function(node, index) {
		var tabIndex = getTabIndex(node);
		return {
			node,
			index,
			tabIndex: keepGuards && tabIndex === -1 ? (node.dataset || {}).focusGuard ? 0 : -1 : tabIndex
		};
	}).filter(function(data) {
		return !filterNegative || data.tabIndex >= 0;
	}).sort(tabSort);
};
//#endregion
//#region node_modules/focus-lock/dist/es2015/utils/tabUtils.js
var queryTabbables = [
	"button:enabled",
	"select:enabled",
	"textarea:enabled",
	"input:enabled",
	"a[href]",
	"area[href]",
	"summary",
	"iframe",
	"object",
	"embed",
	"audio[controls]",
	"video[controls]",
	"[tabindex]",
	"[contenteditable]",
	"[autofocus]"
].join(",");
var queryGuardTabbables = "".concat(queryTabbables, ", [data-focus-guard]");
var getFocusablesWithShadowDom = function(parent, withGuards) {
	return toArray((parent.shadowRoot || parent).children).reduce(function(acc, child) {
		return acc.concat(child.matches(withGuards ? queryGuardTabbables : queryTabbables) ? [child] : [], getFocusablesWithShadowDom(child));
	}, []);
};
var getFocusablesWithIFrame = function(parent, withGuards) {
	var _a;
	if (parent instanceof HTMLIFrameElement && ((_a = parent.contentDocument) === null || _a === void 0 ? void 0 : _a.body)) return getFocusables([parent.contentDocument.body], withGuards);
	return [parent];
};
var getFocusables = function(parents, withGuards) {
	return parents.reduce(function(acc, parent) {
		var _a;
		var focusableWithShadowDom = getFocusablesWithShadowDom(parent, withGuards);
		var focusableWithIframes = (_a = []).concat.apply(_a, focusableWithShadowDom.map(function(node) {
			return getFocusablesWithIFrame(node, withGuards);
		}));
		return acc.concat(focusableWithIframes, parent.parentNode ? toArray(parent.parentNode.querySelectorAll(queryTabbables)).filter(function(node) {
			return node === parent;
		}) : []);
	}, []);
};
/**
* return a list of focusable nodes within an area marked as "auto-focusable"
* @param parent
*/
var getParentAutofocusables = function(parent) {
	return toArray(parent.querySelectorAll("[".concat(FOCUS_AUTO, "]"))).map(function(node) {
		return getFocusables([node]);
	}).reduce(function(acc, nodes) {
		return acc.concat(nodes);
	}, []);
};
//#endregion
//#region node_modules/focus-lock/dist/es2015/utils/DOMutils.js
/**
* given list of focusable elements keeps the ones user can interact with
* @param nodes
* @param visibilityCache
*/
var filterFocusable = function(nodes, visibilityCache) {
	return toArray(nodes).filter(function(node) {
		return isVisibleCached(visibilityCache, node);
	}).filter(function(node) {
		return notHiddenInput(node);
	});
};
var filterAutoFocusable = function(nodes, cache) {
	if (cache === void 0) cache = /* @__PURE__ */ new Map();
	return toArray(nodes).filter(function(node) {
		return isAutoFocusAllowedCached(cache, node);
	});
};
/**
* !__WARNING__! Low level API.
* @returns all tabbable nodes
*
* @see {@link getFocusableNodes} to get any focusable element
*
* @param topNodes - array of top level HTMLElements to search inside
* @param visibilityCache - an cache to store intermediate measurements. Expected to be a fresh `new Map` on every call
*/
var getTabbableNodes = function(topNodes, visibilityCache, withGuards) {
	return orderByTabIndex(filterFocusable(getFocusables(topNodes, withGuards), visibilityCache), true, withGuards);
};
/**
* !__WARNING__! Low level API.
*
* @returns anything "focusable", not only tabbable. The difference is in `tabIndex=-1`
* (without guards, as long as they are not expected to be ever focused)
*
* @see {@link getTabbableNodes} to get only tabble nodes element
*
* @param topNodes - array of top level HTMLElements to search inside
* @param visibilityCache - an cache to store intermediate measurements. Expected to be a fresh `new Map` on every call
*/
var getFocusableNodes = function(topNodes, visibilityCache) {
	return orderByTabIndex(filterFocusable(getFocusables(topNodes), visibilityCache), false);
};
/**
* return list of nodes which are expected to be auto-focused
* @param topNode
* @param visibilityCache
*/
var parentAutofocusables = function(topNode, visibilityCache) {
	return filterFocusable(getParentAutofocusables(topNode), visibilityCache);
};
var contains = function(scope, element) {
	if (scope.shadowRoot) return contains(scope.shadowRoot, element);
	else {
		if (Object.getPrototypeOf(scope).contains !== void 0 && Object.getPrototypeOf(scope).contains.call(scope, element)) return true;
		return toArray(scope.children).some(function(child) {
			var _a;
			if (child instanceof HTMLIFrameElement) {
				var iframeBody = (_a = child.contentDocument) === null || _a === void 0 ? void 0 : _a.body;
				if (iframeBody) return contains(iframeBody, element);
				return false;
			}
			return contains(child, element);
		});
	}
};
//#endregion
//#region node_modules/focus-lock/dist/es2015/utils/all-affected.js
/**
* in case of multiple nodes nested inside each other
* keeps only top ones
* this is O(nlogn)
* @param nodes
* @returns {*}
*/
var filterNested = function(nodes) {
	var contained = /* @__PURE__ */ new Set();
	var l = nodes.length;
	for (var i = 0; i < l; i += 1) for (var j = i + 1; j < l; j += 1) {
		var position = nodes[i].compareDocumentPosition(nodes[j]);
		if ((position & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0) contained.add(j);
		if ((position & Node.DOCUMENT_POSITION_CONTAINS) > 0) contained.add(i);
	}
	return nodes.filter(function(_, index) {
		return !contained.has(index);
	});
};
/**
* finds top most parent for a node
* @param node
* @returns {*}
*/
var getTopParent = function(node) {
	return node.parentNode ? getTopParent(node.parentNode) : node;
};
/**
* returns all "focus containers" inside a given node
* @param node - node or nodes to look inside
* @returns Element[]
*/
var getAllAffectedNodes = function(node) {
	return asArray(node).filter(Boolean).reduce(function(acc, currentNode) {
		var group = currentNode.getAttribute(FOCUS_GROUP);
		acc.push.apply(acc, group ? filterNested(toArray(getTopParent(currentNode).querySelectorAll("[".concat(FOCUS_GROUP, "=\"").concat(group, "\"]:not([").concat(FOCUS_DISABLED, "=\"disabled\"])")))) : [currentNode]);
		return acc;
	}, []);
};
//#endregion
//#region node_modules/focus-lock/dist/es2015/utils/safe.js
var safeProbe = function(cb) {
	try {
		return cb();
	} catch (e) {
		return;
	}
};
//#endregion
//#region node_modules/focus-lock/dist/es2015/utils/getActiveElement.js
/**
* returns active element from document or from nested shadowdoms
*/
/**
* returns current active element. If the active element is a "container" itself(shadowRoot or iframe) returns active element inside it
* @param [inDocument]
*/
var getActiveElement = function(inDocument) {
	if (inDocument === void 0) inDocument = document;
	if (!inDocument || !inDocument.activeElement) return;
	var activeElement = inDocument.activeElement;
	return activeElement.shadowRoot ? getActiveElement(activeElement.shadowRoot) : activeElement instanceof HTMLIFrameElement && safeProbe(function() {
		return activeElement.contentWindow.document;
	}) ? getActiveElement(activeElement.contentWindow.document) : activeElement;
};
//#endregion
//#region node_modules/focus-lock/dist/es2015/focusInside.js
var focusInFrame = function(frame, activeElement) {
	return frame === activeElement;
};
var focusInsideIframe = function(topNode, activeElement) {
	return Boolean(toArray(topNode.querySelectorAll("iframe")).some(function(node) {
		return focusInFrame(node, activeElement);
	}));
};
/**
* @returns {Boolean} true, if the current focus is inside given node or nodes.
* Supports nodes hidden inside shadowDom
*/
var focusInside = function(topNode, activeElement) {
	if (activeElement === void 0) activeElement = getActiveElement(getFirst(topNode).ownerDocument);
	if (!activeElement || activeElement.dataset && activeElement.dataset.focusGuard) return false;
	return getAllAffectedNodes(topNode).some(function(node) {
		return contains(node, activeElement) || focusInsideIframe(node, activeElement);
	});
};
//#endregion
//#region node_modules/focus-lock/dist/es2015/focusIsHidden.js
/**
* checks if focus is hidden FROM the focus-lock
* ie contained inside a node focus-lock shall ignore
*
* This is a utility function coupled with {@link FOCUS_ALLOW} constant
*
* @returns {boolean} focus is currently is in "allow" area
*/
var focusIsHidden = function(inDocument) {
	if (inDocument === void 0) inDocument = document;
	var activeElement = getActiveElement(inDocument);
	if (!activeElement) return false;
	return toArray(inDocument.querySelectorAll("[".concat(FOCUS_ALLOW, "]"))).some(function(node) {
		return contains(node, activeElement);
	});
};
//#endregion
//#region node_modules/focus-lock/dist/es2015/utils/correctFocus.js
var findSelectedRadio = function(node, nodes) {
	return nodes.filter(isRadioElement).filter(function(el) {
		return el.name === node.name;
	}).filter(function(el) {
		return el.checked;
	})[0] || node;
};
var correctNode = function(node, nodes) {
	if (isRadioElement(node) && node.name) return findSelectedRadio(node, nodes);
	return node;
};
/**
* giving a set of radio inputs keeps only selected (tabbable) ones
* @param nodes
*/
var correctNodes = function(nodes) {
	var resultSet = /* @__PURE__ */ new Set();
	nodes.forEach(function(node) {
		return resultSet.add(correctNode(node, nodes));
	});
	return nodes.filter(function(node) {
		return resultSet.has(node);
	});
};
//#endregion
//#region node_modules/focus-lock/dist/es2015/utils/firstFocus.js
var pickFirstFocus = function(nodes) {
	if (nodes[0] && nodes.length > 1) return correctNode(nodes[0], nodes);
	return nodes[0];
};
var pickFocusable = function(nodes, node) {
	return nodes.indexOf(correctNode(node, nodes));
};
//#endregion
//#region node_modules/focus-lock/dist/es2015/solver.js
var NEW_FOCUS = "NEW_FOCUS";
/**
* Main solver for the "find next focus" question
* @param innerNodes - used to control "return focus"
* @param innerTabbables - used to control "autofocus"
* @param outerNodes
* @param activeElement
* @param lastNode
* @returns {number|string|undefined|*}
*/
var newFocus = function(innerNodes, innerTabbables, outerNodes, activeElement, lastNode) {
	var cnt = innerNodes.length;
	var firstFocus = innerNodes[0];
	var lastFocus = innerNodes[cnt - 1];
	var isOnGuard = isGuard(activeElement);
	if (activeElement && innerNodes.indexOf(activeElement) >= 0) return;
	var activeIndex = activeElement !== void 0 ? outerNodes.indexOf(activeElement) : -1;
	var lastIndex = lastNode ? outerNodes.indexOf(lastNode) : activeIndex;
	var lastNodeInside = lastNode ? innerNodes.indexOf(lastNode) : -1;
	if (activeIndex === -1) {
		if (lastNodeInside !== -1) return lastNodeInside;
		return NEW_FOCUS;
	}
	if (lastNodeInside === -1) return NEW_FOCUS;
	var indexDiff = activeIndex - lastIndex;
	var firstNodeIndex = outerNodes.indexOf(firstFocus);
	var lastNodeIndex = outerNodes.indexOf(lastFocus);
	var correctedNodes = correctNodes(outerNodes);
	var currentFocusableIndex = activeElement !== void 0 ? correctedNodes.indexOf(activeElement) : -1;
	var previousFocusableIndex = lastNode ? correctedNodes.indexOf(lastNode) : currentFocusableIndex;
	var tabbableNodes = correctedNodes.filter(function(node) {
		return node.tabIndex >= 0;
	});
	var currentTabbableIndex = activeElement !== void 0 ? tabbableNodes.indexOf(activeElement) : -1;
	var previousTabbableIndex = lastNode ? tabbableNodes.indexOf(lastNode) : currentTabbableIndex;
	var focusIndexDiff = currentTabbableIndex >= 0 && previousTabbableIndex >= 0 ? previousTabbableIndex - currentTabbableIndex : previousFocusableIndex - currentFocusableIndex;
	if (!indexDiff && lastNodeInside >= 0) return lastNodeInside;
	if (innerTabbables.length === 0) return lastNodeInside;
	var returnFirstNode = pickFocusable(innerNodes, innerTabbables[0]);
	var returnLastNode = pickFocusable(innerNodes, innerTabbables[innerTabbables.length - 1]);
	if (activeIndex <= firstNodeIndex && isOnGuard && Math.abs(indexDiff) > 1) return returnLastNode;
	if (activeIndex >= lastNodeIndex && isOnGuard && Math.abs(indexDiff) > 1) return returnFirstNode;
	if (indexDiff && Math.abs(focusIndexDiff) > 1) return lastNodeInside;
	if (activeIndex <= firstNodeIndex) return returnLastNode;
	if (activeIndex > lastNodeIndex) return returnFirstNode;
	if (indexDiff) {
		if (Math.abs(indexDiff) > 1) return lastNodeInside;
		return (cnt + lastNodeInside + indexDiff) % cnt;
	}
};
//#endregion
//#region node_modules/focus-lock/dist/es2015/utils/auto-focus.js
var findAutoFocused = function(autoFocusables) {
	return function(node) {
		var _a;
		var autofocus = (_a = getDataset(node)) === null || _a === void 0 ? void 0 : _a.autofocus;
		return node.autofocus || autofocus !== void 0 && autofocus !== "false" || autoFocusables.indexOf(node) >= 0;
	};
};
var pickAutofocus = function(nodesIndexes, orderedNodes, groups) {
	var autoFocusable = filterAutoFocusable(nodesIndexes.map(function(_a) {
		return _a.node;
	}).filter(findAutoFocused(groups)));
	if (autoFocusable && autoFocusable.length) return pickFirstFocus(autoFocusable);
	return pickFirstFocus(filterAutoFocusable(orderedNodes));
};
//#endregion
//#region node_modules/focus-lock/dist/es2015/utils/parenting.js
var getParents = function(node, parents) {
	if (parents === void 0) parents = [];
	parents.push(node);
	if (node.parentNode) getParents(node.parentNode.host || node.parentNode, parents);
	return parents;
};
/**
* finds a parent for both nodeA and nodeB
* @param nodeA
* @param nodeB
* @returns {boolean|*}
*/
var getCommonParent = function(nodeA, nodeB) {
	var parentsA = getParents(nodeA);
	var parentsB = getParents(nodeB);
	for (var i = 0; i < parentsA.length; i += 1) {
		var currentParent = parentsA[i];
		if (parentsB.indexOf(currentParent) >= 0) return currentParent;
	}
	return false;
};
var getTopCommonParent = function(baseActiveElement, leftEntry, rightEntries) {
	var activeElements = asArray(baseActiveElement);
	var leftEntries = asArray(leftEntry);
	var activeElement = activeElements[0];
	var topCommon = false;
	leftEntries.filter(Boolean).forEach(function(entry) {
		topCommon = getCommonParent(topCommon || entry, entry) || topCommon;
		rightEntries.filter(Boolean).forEach(function(subEntry) {
			var common = getCommonParent(activeElement, subEntry);
			if (common) if (!topCommon || contains(common, topCommon)) topCommon = common;
			else topCommon = getCommonParent(common, topCommon);
		});
	});
	return topCommon;
};
/**
* return list of nodes which are expected to be autofocused inside a given top nodes
* @param entries
* @param visibilityCache
*/
var allParentAutofocusables = function(entries, visibilityCache) {
	return entries.reduce(function(acc, node) {
		return acc.concat(parentAutofocusables(node, visibilityCache));
	}, []);
};
//#endregion
//#region node_modules/focus-lock/dist/es2015/focusSolver.js
var reorderNodes = function(srcNodes, dstNodes) {
	var remap = /* @__PURE__ */ new Map();
	dstNodes.forEach(function(entity) {
		return remap.set(entity.node, entity);
	});
	return srcNodes.map(function(node) {
		return remap.get(node);
	}).filter(isDefined);
};
/**
* contains the main logic of the `focus-lock` package.
*
* ! you probably dont need this function !
*
* given top node(s) and the last active element returns the element to be focused next
* @returns element which should be focused to move focus inside
* @param topNode
* @param lastNode
*/
var focusSolver = function(topNode, lastNode) {
	var activeElement = getActiveElement(asArray(topNode).length > 0 ? document : getFirst(topNode).ownerDocument);
	var entries = getAllAffectedNodes(topNode).filter(isNotAGuard);
	var commonParent = getTopCommonParent(activeElement || topNode, topNode, entries);
	var visibilityCache = /* @__PURE__ */ new Map();
	var anyFocusable = getFocusableNodes(entries, visibilityCache);
	var innerElements = anyFocusable.filter(function(_a) {
		var node = _a.node;
		return isNotAGuard(node);
	});
	if (!innerElements[0]) return;
	var outerNodes = getFocusableNodes([commonParent], visibilityCache).map(function(_a) {
		return _a.node;
	});
	var orderedInnerElements = reorderNodes(outerNodes, innerElements);
	var innerFocusables = orderedInnerElements.map(function(_a) {
		return _a.node;
	});
	var innerTabbable = orderedInnerElements.filter(function(_a) {
		return _a.tabIndex >= 0;
	}).map(function(_a) {
		return _a.node;
	});
	var newId = newFocus(innerFocusables, innerTabbable, outerNodes, activeElement, lastNode);
	if (newId === "NEW_FOCUS") {
		var focusNode = pickAutofocus(anyFocusable, innerTabbable, allParentAutofocusables(entries, visibilityCache)) || pickAutofocus(anyFocusable, innerFocusables, allParentAutofocusables(entries, visibilityCache));
		if (focusNode) return { node: focusNode };
		else {
			console.warn("focus-lock: cannot find any node to move focus into");
			return;
		}
	}
	if (newId === void 0) return newId;
	return orderedInnerElements[newId];
};
//#endregion
//#region node_modules/focus-lock/dist/es2015/focusables.js
/**
* traverses all related nodes (including groups) returning a list of all nodes(outer and internal) with meta information
* This is low-level API!
* @returns list of focusable elements inside a given top(!) node.
* @see {@link getFocusableNodes} providing a simpler API
*/
var expandFocusableNodes = function(topNode) {
	var entries = getAllAffectedNodes(topNode).filter(isNotAGuard);
	var outerNodes = orderByTabIndex(getFocusables([getTopCommonParent(topNode, topNode, entries)], true), true, true);
	var innerElements = getFocusables(entries, false);
	return outerNodes.map(function(_a) {
		var node = _a.node;
		return {
			node,
			index: _a.index,
			lockItem: innerElements.indexOf(node) >= 0,
			guard: isGuard(node)
		};
	});
};
//#endregion
//#region node_modules/focus-lock/dist/es2015/commands.js
var focusOn = function(target, focusOptions) {
	if (!target) return;
	if ("focus" in target) target.focus(focusOptions);
	if ("contentWindow" in target && target.contentWindow) target.contentWindow.focus();
};
//#endregion
//#region node_modules/focus-lock/dist/es2015/moveFocusInside.js
var guardCount = 0;
var lockDisabled = false;
/**
* The main functionality of the focus-lock package
*
* Contains focus at a given node.
* The last focused element will help to determine which element(first or last) should be focused.
* The found element will be focused.
*
* This is one time action (move), not a persistent focus-lock
*
* HTML markers (see {@link import('./constants').FOCUS_AUTO} constants) can control autofocus
* @see {@link focusSolver} for the same functionality without autofocus
*/
var moveFocusInside = function(topNode, lastNode, options) {
	if (options === void 0) options = {};
	var focusable = focusSolver(topNode, lastNode);
	if (lockDisabled) return;
	if (focusable) {
		/** +FOCUS-FIGHTING prevention **/
		if (guardCount > 2) {
			console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting");
			lockDisabled = true;
			setTimeout(function() {
				lockDisabled = false;
			}, 1);
			return;
		}
		guardCount++;
		focusOn(focusable.node, options.focusOptions);
		guardCount--;
	}
};
//#endregion
//#region node_modules/focus-lock/dist/es2015/return-focus.js
function weakRef(value) {
	if (!value) return null;
	if (typeof WeakRef === "undefined") return function() {
		return value || null;
	};
	var w = value ? new WeakRef(value) : null;
	return function() {
		return (w === null || w === void 0 ? void 0 : w.deref()) || null;
	};
}
var recordElementLocation = function(element) {
	if (!element) return null;
	var stack = [];
	var currentElement = element;
	while (currentElement && currentElement !== document.body) {
		stack.push({
			current: weakRef(currentElement),
			parent: weakRef(currentElement.parentElement),
			left: weakRef(currentElement.previousElementSibling),
			right: weakRef(currentElement.nextElementSibling)
		});
		currentElement = currentElement.parentElement;
	}
	return {
		element: weakRef(element),
		stack,
		ownerDocument: element.ownerDocument
	};
};
var restoreFocusTo = function(location) {
	var _a, _b, _c, _d, _e;
	if (!location) return;
	var stack = location.stack, ownerDocument = location.ownerDocument;
	var visibilityCache = /* @__PURE__ */ new Map();
	for (var _i = 0, stack_1 = stack; _i < stack_1.length; _i++) {
		var line = stack_1[_i];
		var parent_1 = (_a = line.parent) === null || _a === void 0 ? void 0 : _a.call(line);
		if (parent_1 && ownerDocument.contains(parent_1)) {
			var left = (_b = line.left) === null || _b === void 0 ? void 0 : _b.call(line);
			var savedCurrent = line.current();
			var current = parent_1.contains(savedCurrent) ? savedCurrent : void 0;
			var right = (_c = line.right) === null || _c === void 0 ? void 0 : _c.call(line);
			var focusables = getTabbableNodes([parent_1], visibilityCache);
			var aim = (_e = (_d = current !== null && current !== void 0 ? current : left === null || left === void 0 ? void 0 : left.nextElementSibling) !== null && _d !== void 0 ? _d : right) !== null && _e !== void 0 ? _e : left;
			while (aim) {
				for (var _f = 0, focusables_1 = focusables; _f < focusables_1.length; _f++) {
					var focusable = focusables_1[_f];
					if (aim === null || aim === void 0 ? void 0 : aim.contains(focusable.node)) return focusable.node;
				}
				aim = aim.nextElementSibling;
			}
			if (focusables.length) return focusables[0].node;
		}
	}
};
/**
* Captures the current focused element to restore focus as close as possible in the future
* Handles situations where the focused element is removed from the DOM or no longer focusable
* moving focus to the closest focusable element
* @param targetElement - element where focus should be restored
* @returns a function returning a new element to focus
*/
var captureFocusRestore = function(targetElement) {
	var location = recordElementLocation(targetElement);
	return function() {
		return restoreFocusTo(location);
	};
};
//#endregion
//#region node_modules/focus-lock/dist/es2015/sibling.js
/**
* for a given `element` in a given `scope` returns focusable siblings
* @param element - base element
* @param scope - common parent. Can be document, but better to narrow it down for performance reasons
* @returns {prev,next} - references to a focusable element before and after
* @returns undefined - if operation is not applicable
*/
var getRelativeFocusable = function(element, scope, useTabbables) {
	if (!element || !scope) {
		console.error("no element or scope given");
		return {};
	}
	var shards = asArray(scope);
	if (shards.every(function(shard) {
		return !contains(shard, element);
	})) {
		console.error("Active element is not contained in the scope");
		return {};
	}
	var focusables = useTabbables ? getTabbableNodes(shards, /* @__PURE__ */ new Map()) : getFocusableNodes(shards, /* @__PURE__ */ new Map());
	var current = focusables.findIndex(function(_a) {
		return _a.node === element;
	});
	if (current === -1) return;
	return {
		prev: focusables[current - 1],
		next: focusables[current + 1],
		first: focusables[0],
		last: focusables[focusables.length - 1]
	};
};
var getBoundary = function(shards, useTabbables) {
	var set = useTabbables ? getTabbableNodes(asArray(shards), /* @__PURE__ */ new Map()) : getFocusableNodes(asArray(shards), /* @__PURE__ */ new Map());
	return {
		first: set[0],
		last: set[set.length - 1]
	};
};
var defaultOptions = function(options) {
	return Object.assign({
		scope: document.body,
		cycle: true,
		onlyTabbable: true
	}, options);
};
var moveFocus = function(fromElement, options, cb) {
	if (options === void 0) options = {};
	var newOptions = defaultOptions(options);
	var solution = getRelativeFocusable(fromElement, newOptions.scope, newOptions.onlyTabbable);
	if (!solution) return;
	var target = cb(solution, newOptions.cycle);
	if (target) focusOn(target.node, newOptions.focusOptions);
};
/**
* focuses next element in the tab-order
* @param fromElement - common parent to scope active element search or tab cycle order
* @param {FocusNextOptions} [options] - focus options
*/
var focusNextElement = function(fromElement, options) {
	if (options === void 0) options = {};
	moveFocus(fromElement, options, function(_a, cycle) {
		var next = _a.next, first = _a.first;
		return next || cycle && first;
	});
};
/**
* focuses prev element in the tab order
* @param fromElement - common parent to scope active element search or tab cycle order
* @param {FocusNextOptions} [options] - focus options
*/
var focusPrevElement = function(fromElement, options) {
	if (options === void 0) options = {};
	moveFocus(fromElement, options, function(_a, cycle) {
		var prev = _a.prev, last = _a.last;
		return prev || cycle && last;
	});
};
var pickBoundary = function(scope, options, what) {
	var _a;
	var node = getBoundary(scope, (_a = options.onlyTabbable) !== null && _a !== void 0 ? _a : true)[what];
	if (node) focusOn(node.node, options.focusOptions);
};
/**
* focuses first element in the tab-order
* @param {FocusNextOptions} options - focus options
*/
var focusFirstElement = function(scope, options) {
	if (options === void 0) options = {};
	pickBoundary(scope, options, "first");
};
/**
* focuses last element in the tab order
* @param {FocusNextOptions} options - focus options
*/
var focusLastElement = function(scope, options) {
	if (options === void 0) options = {};
	pickBoundary(scope, options, "last");
};
//#endregion
export { captureFocusRestore as a, focusIsHidden as c, FOCUS_DISABLED as d, FOCUS_GROUP as f, focusPrevElement as i, focusInside as l, focusLastElement as n, moveFocusInside as o, focusNextElement as r, expandFocusableNodes as s, focusFirstElement as t, getFocusableNodes as u };
