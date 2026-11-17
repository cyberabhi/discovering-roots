import { C as effects, D as n, E as f, O as x, S as derived, T as a, _ as exceedsDistance, a as CorePlugin, b as computed, c as Droppable$1, d as configurator, f as descriptor, g as Rectangle, h as Point, l as Plugin, m as Axes, n as ActivationController, o as DragDropManager$1, p as resolveCustomizable, s as Draggable$1, t as ActivationConstraint, u as Sensor, w as reactive, x as deepEqual, y as WeakStore } from "./@dnd-kit/abstract+[...].mjs";
import { n as defaultCollisionDetection, t as closestCorners } from "./dnd-kit__collision.mjs";
//#region node_modules/@dnd-kit/dom/utilities.js
var __typeError$2 = (msg) => {
	throw TypeError(msg);
};
var __accessCheck$2 = (obj, member, msg) => member.has(obj) || __typeError$2("Cannot " + msg);
var __privateGet$2 = (obj, member, getter) => (__accessCheck$2(obj, member, "read from private field"), member.get(obj));
var __privateAdd$2 = (obj, member, value) => member.has(obj) ? __typeError$2("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet$2 = (obj, member, value, setter) => (__accessCheck$2(obj, member, "write to private field"), member.set(obj, value), value);
var __privateMethod$1 = (obj, member, method) => (__accessCheck$2(obj, member, "access private method"), method);
function isKeyframeEffect(effect) {
	if (!effect) return false;
	if (effect instanceof KeyframeEffect) return true;
	return "getKeyframes" in effect && typeof effect.getKeyframes === "function";
}
function getFinalKeyframe(element, match) {
	const animations2 = element.getAnimations();
	let result = null;
	for (const animation of animations2) {
		if (animation.playState !== "running") continue;
		const { effect } = animation;
		const matchedKeyframes = (isKeyframeEffect(effect) ? effect.getKeyframes() : []).filter(match);
		if (matchedKeyframes.length > 0) result = [matchedKeyframes[matchedKeyframes.length - 1], animation];
	}
	return result;
}
function getBoundingRectangle(element) {
	const { width, height, top, left, bottom, right } = element.getBoundingClientRect();
	return {
		width,
		height,
		top,
		left,
		bottom,
		right
	};
}
function isWindow(element) {
	const elementString = Object.prototype.toString.call(element);
	return elementString === "[object Window]" || elementString === "[object global]";
}
function isNode(node) {
	return "nodeType" in node;
}
function getWindow(target) {
	var _a, _b, _c;
	if (!target) return window;
	if (isWindow(target)) return target;
	if (!isNode(target)) return window;
	if ("defaultView" in target) return (_a = target.defaultView) != null ? _a : window;
	return (_c = (_b = target.ownerDocument) == null ? void 0 : _b.defaultView) != null ? _c : window;
}
function isDocument(node) {
	const { Document: Document2 } = getWindow(node);
	return node instanceof Document2 || "nodeType" in node && node.nodeType === Node.DOCUMENT_NODE;
}
function isHTMLElement(node) {
	if (!node || isWindow(node)) return false;
	return node instanceof getWindow(node).HTMLElement || "namespaceURI" in node && typeof node.namespaceURI === "string" && node.namespaceURI.endsWith("html");
}
function isSVGElement(node) {
	return node instanceof getWindow(node).SVGElement || "namespaceURI" in node && typeof node.namespaceURI === "string" && node.namespaceURI.endsWith("svg");
}
function getDocument(target) {
	if (!target) return document;
	if (isWindow(target)) return target.document;
	if (!isNode(target)) return document;
	if (isDocument(target)) return target;
	if (isHTMLElement(target) || isSVGElement(target)) return target.ownerDocument;
	return document;
}
function getViewportBoundingRectangle(element) {
	var _a, _b, _c, _d;
	const { documentElement } = getDocument(element);
	const vv = getWindow(element).visualViewport;
	const width = (_a = vv == null ? void 0 : vv.width) != null ? _a : documentElement.clientWidth;
	const height = (_b = vv == null ? void 0 : vv.height) != null ? _b : documentElement.clientHeight;
	const top = (_c = vv == null ? void 0 : vv.offsetTop) != null ? _c : 0;
	const left = (_d = vv == null ? void 0 : vv.offsetLeft) != null ? _d : 0;
	return {
		top,
		left,
		right: left + width,
		bottom: top + height,
		width,
		height
	};
}
function isOverflowVisible(element, style) {
	if (isDetailsElement(element) && element.open === false) return false;
	const { overflow, overflowX, overflowY } = getComputedStyle(element);
	return overflow === "visible" && overflowX === "visible" && overflowY === "visible";
}
function isDetailsElement(element) {
	return element.tagName === "DETAILS";
}
function getVisibleBoundingRectangle(element, boundingClientRect = element.getBoundingClientRect(), margin = 0) {
	var _a, _b, _c, _d, _e;
	let rect = boundingClientRect;
	const { ownerDocument } = element;
	const ownerWindow = (_a = ownerDocument.defaultView) != null ? _a : window;
	let ancestor = element.parentElement;
	while (ancestor && ancestor !== ownerDocument.documentElement) {
		if (!isOverflowVisible(ancestor)) {
			const ancestorRect = ancestor.getBoundingClientRect();
			const marginTop = margin * (ancestorRect.bottom - ancestorRect.top);
			const marginRight = margin * (ancestorRect.right - ancestorRect.left);
			const marginBottom = margin * (ancestorRect.bottom - ancestorRect.top);
			const marginLeft = margin * (ancestorRect.right - ancestorRect.left);
			rect = {
				top: Math.max(rect.top, ancestorRect.top - marginTop),
				right: Math.min(rect.right, ancestorRect.right + marginRight),
				bottom: Math.min(rect.bottom, ancestorRect.bottom + marginBottom),
				left: Math.max(rect.left, ancestorRect.left - marginLeft),
				width: 0,
				height: 0
			};
			rect.width = rect.right - rect.left;
			rect.height = rect.bottom - rect.top;
		}
		ancestor = ancestor.parentElement;
	}
	const vv = ownerWindow.visualViewport;
	const viewportTop = (_b = vv == null ? void 0 : vv.offsetTop) != null ? _b : 0;
	const viewportLeft = (_c = vv == null ? void 0 : vv.offsetLeft) != null ? _c : 0;
	const viewportWidth = (_d = vv == null ? void 0 : vv.width) != null ? _d : ownerWindow.innerWidth;
	const viewportHeight = (_e = vv == null ? void 0 : vv.height) != null ? _e : ownerWindow.innerHeight;
	const viewportMarginY = margin * viewportHeight;
	const viewportMarginX = margin * viewportWidth;
	rect = {
		top: Math.max(rect.top, viewportTop - viewportMarginY),
		right: Math.min(rect.right, viewportLeft + viewportWidth + viewportMarginX),
		bottom: Math.min(rect.bottom, viewportTop + viewportHeight + viewportMarginY),
		left: Math.max(rect.left, viewportLeft - viewportMarginX),
		width: 0,
		height: 0
	};
	rect.width = rect.right - rect.left;
	rect.height = rect.bottom - rect.top;
	if (rect.width < 0) rect.width = 0;
	if (rect.height < 0) rect.height = 0;
	return rect;
}
function getEventCoordinates(event) {
	return {
		x: event.clientX,
		y: event.clientY
	};
}
var canUseDOM = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
function getDocuments(rootDoc = document, seen = /* @__PURE__ */ new Set()) {
	if (seen.has(rootDoc)) return [];
	seen.add(rootDoc);
	const docs = [rootDoc];
	for (const frame of Array.from(rootDoc.querySelectorAll("iframe, frame"))) try {
		const childDoc = frame.contentDocument;
		if (childDoc && !seen.has(childDoc)) docs.push(...getDocuments(childDoc, seen));
	} catch (e) {}
	try {
		const win = rootDoc.defaultView;
		if (win && win !== window.top) {
			const parentWin = win.parent;
			if (parentWin && parentWin.document && parentWin.document !== rootDoc) docs.push(...getDocuments(parentWin.document, seen));
		}
	} catch (e) {}
	return docs;
}
function isSafari() {
	return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function getFixedPositionOffset() {
	var _a, _b;
	const vv = isSafari() ? window.visualViewport : null;
	return {
		x: (_a = vv == null ? void 0 : vv.offsetLeft) != null ? _a : 0,
		y: (_b = vv == null ? void 0 : vv.offsetTop) != null ? _b : 0
	};
}
function isShadowRoot(target) {
	if (!target || !isNode(target)) return false;
	return target instanceof getWindow(target).ShadowRoot;
}
function getRoot(target) {
	if (target && isNode(target)) {
		let root = target.getRootNode();
		if (isShadowRoot(root)) return root;
		else if (root instanceof Document) return root;
	}
	return getDocument(target);
}
function prefersReducedMotion(window2) {
	return window2.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function cloneElement(element) {
	const selector = "input, textarea, select, canvas, [contenteditable]";
	const clonedElement = element.cloneNode(true);
	const fields = Array.from(element.querySelectorAll(selector));
	Array.from(clonedElement.querySelectorAll(selector)).forEach((field, index) => {
		const originalField = fields[index];
		if (isField(field) && isField(originalField)) {
			if (field.type !== "file") field.value = originalField.value;
			if (field.type === "radio" && field.name) field.name = `Cloned__${field.name}`;
		}
		if (isCanvasElement(field) && isCanvasElement(originalField) && originalField.width > 0 && originalField.height > 0) field.getContext("2d")?.drawImage(originalField, 0, 0);
	});
	return clonedElement;
}
function isField(element) {
	return "value" in element;
}
function isCanvasElement(element) {
	return element.tagName === "CANVAS";
}
function getElementFromPoint(root, { x, y }) {
	const element = root.elementFromPoint(x, y);
	if (isIFrameElement(element)) {
		const { contentDocument } = element;
		if (contentDocument) {
			const { left, top } = element.getBoundingClientRect();
			return getElementFromPoint(contentDocument, {
				x: x - left,
				y: y - top
			});
		}
	}
	return element;
}
function isIFrameElement(element) {
	return (element == null ? void 0 : element.tagName) === "IFRAME";
}
var ProxiedElements = /* @__PURE__ */ new WeakMap();
function isInteractiveElement(element) {
	return Boolean(element.closest(`
      input:not([disabled]),
      select:not([disabled]),
      textarea:not([disabled]),
      button:not([disabled]),
      a[href],
      [contenteditable]:not([contenteditable="false"])
    `));
}
var Listeners = class {
	constructor() {
		this.entries = /* @__PURE__ */ new Set();
		this.clear = () => {
			for (const entry of this.entries) {
				const [target, { type, listener, options }] = entry;
				target.removeEventListener(type, listener, options);
			}
			this.entries.clear();
		};
	}
	bind(target, input) {
		const eventTargets = Array.isArray(target) ? target : [target];
		const listeners = Array.isArray(input) ? input : [input];
		const entries = [];
		for (const target2 of eventTargets) for (const descriptor of listeners) {
			const { type, listener, options } = descriptor;
			const entry = [target2, descriptor];
			target2.addEventListener(type, listener, options);
			this.entries.add(entry);
			entries.push(entry);
		}
		const allEntries = this.entries;
		return function cleanup() {
			for (const entry of entries) {
				const [target2, { type, listener, options }] = entry;
				target2.removeEventListener(type, listener, options);
				allEntries.delete(entry);
			}
		};
	}
};
function getFrameElement(el) {
	const refWindow = el == null ? void 0 : el.ownerDocument.defaultView;
	if (refWindow && refWindow.self !== refWindow.parent) return refWindow.frameElement;
}
function getFrameElements(el) {
	const frames = /* @__PURE__ */ new Set();
	let frame = getFrameElement(el);
	while (frame) {
		frames.add(frame);
		frame = getFrameElement(frame);
	}
	return frames;
}
function timeout(callback, duration) {
	const id = setTimeout(callback, duration);
	return () => clearTimeout(id);
}
function throttle(func, limit) {
	const time = () => performance.now();
	let cancel;
	let lastRan;
	return function(...args) {
		const context = this;
		if (!lastRan) {
			func.apply(context, args);
			lastRan = time();
		} else {
			cancel?.();
			cancel = timeout(() => {
				func.apply(context, args);
				lastRan = time();
			}, limit - (time() - lastRan));
		}
	};
}
function isRectEqual(a, b) {
	if (a === b) return true;
	if (!a || !b) return false;
	return a.top == b.top && a.left == b.left && a.right == b.right && a.bottom == b.bottom;
}
function isVisible(element, boundingClientRect = element.getBoundingClientRect()) {
	const { width, height } = getVisibleBoundingRectangle(element, boundingClientRect);
	return width > 0 && height > 0;
}
var Observer = canUseDOM ? ResizeObserver : class MockResizeObserver {
	observe() {}
	unobserve() {}
	disconnect() {}
};
var _initialized;
var ResizeNotifier = class extends Observer {
	constructor(callback) {
		super((entries) => {
			if (!__privateGet$2(this, _initialized)) {
				__privateSet$2(this, _initialized, true);
				return;
			}
			callback(entries, this);
		});
		__privateAdd$2(this, _initialized, false);
	}
};
_initialized = /* @__PURE__ */ new WeakMap();
var threshold = Array.from({ length: 100 }, (_, index) => index / 100);
var THROTTLE_INTERVAL = 75;
var _visible;
var _previousBoundingClientRect;
var _resizeObserver;
var _positionObserver;
var _visibilityObserver;
var _debug;
var _disconnected;
var _observePosition;
var _PositionObserver_instances;
var notify_fn;
var updateDebug_fn;
var PositionObserver = class {
	constructor(element, callback, options = {
		debug: false,
		skipInitial: false
	}) {
		this.element = element;
		this.callback = callback;
		__privateAdd$2(this, _PositionObserver_instances);
		this.disconnect = () => {
			var _a, _b, _c;
			__privateSet$2(this, _disconnected, true);
			(_a = __privateGet$2(this, _resizeObserver)) == null || _a.disconnect();
			(_b = __privateGet$2(this, _positionObserver)) == null || _b.disconnect();
			__privateGet$2(this, _visibilityObserver).disconnect();
			(_c = __privateGet$2(this, _debug)) == null || _c.remove();
		};
		__privateAdd$2(this, _visible, true);
		__privateAdd$2(this, _previousBoundingClientRect);
		__privateAdd$2(this, _resizeObserver);
		__privateAdd$2(this, _positionObserver);
		__privateAdd$2(this, _visibilityObserver);
		__privateAdd$2(this, _debug);
		__privateAdd$2(this, _disconnected, false);
		__privateAdd$2(this, _observePosition, throttle(() => {
			var _a, _b, _c;
			const { element } = this;
			(_a = __privateGet$2(this, _positionObserver)) == null || _a.disconnect();
			if (__privateGet$2(this, _disconnected) || !__privateGet$2(this, _visible) || !element.isConnected) return;
			const root = (_b = element.ownerDocument) != null ? _b : document;
			const { innerHeight, innerWidth } = (_c = root.defaultView) != null ? _c : window;
			const clientRect = element.getBoundingClientRect();
			const { top, left, bottom, right } = getVisibleBoundingRectangle(element, clientRect);
			const insetTop = -Math.floor(top);
			const insetLeft = -Math.floor(left);
			const rootMargin = `${insetTop}px ${-Math.floor(innerWidth - right)}px ${-Math.floor(innerHeight - bottom)}px ${insetLeft}px`;
			this.boundingClientRect = clientRect;
			__privateSet$2(this, _positionObserver, new IntersectionObserver((entries) => {
				const [entry] = entries;
				const { intersectionRect } = entry;
				if ((entry.intersectionRatio !== 1 ? entry.intersectionRatio : Rectangle.intersectionRatio(intersectionRect, getVisibleBoundingRectangle(element))) !== 1) __privateGet$2(this, _observePosition).call(this);
			}, {
				threshold,
				rootMargin,
				root
			}));
			__privateGet$2(this, _positionObserver).observe(element);
			__privateMethod$1(this, _PositionObserver_instances, notify_fn).call(this);
		}, THROTTLE_INTERVAL));
		this.boundingClientRect = element.getBoundingClientRect();
		__privateSet$2(this, _visible, isVisible(element, this.boundingClientRect));
		let initial = true;
		this.callback = (boundingClientRect) => {
			if (initial) {
				initial = false;
				if (options.skipInitial) return;
			}
			callback(boundingClientRect);
		};
		const root = element.ownerDocument;
		if (options == null ? void 0 : options.debug) {
			__privateSet$2(this, _debug, document.createElement("div"));
			__privateGet$2(this, _debug).style.background = "rgba(0,0,0,0.15)";
			__privateGet$2(this, _debug).style.position = "fixed";
			__privateGet$2(this, _debug).style.pointerEvents = "none";
			root.body.appendChild(__privateGet$2(this, _debug));
		}
		__privateSet$2(this, _visibilityObserver, new IntersectionObserver((entries) => {
			var _a, _b;
			const { boundingClientRect, isIntersecting: visible } = entries[entries.length - 1];
			const { width, height } = boundingClientRect;
			const previousVisible = __privateGet$2(this, _visible);
			__privateSet$2(this, _visible, visible);
			if (!width && !height) return;
			if (previousVisible && !visible) {
				(_a = __privateGet$2(this, _positionObserver)) == null || _a.disconnect();
				this.callback(null);
				(_b = __privateGet$2(this, _resizeObserver)) == null || _b.disconnect();
				__privateSet$2(this, _resizeObserver, void 0);
				if (__privateGet$2(this, _debug)) __privateGet$2(this, _debug).style.visibility = "hidden";
			} else __privateGet$2(this, _observePosition).call(this);
			if (visible && !__privateGet$2(this, _resizeObserver)) {
				__privateSet$2(this, _resizeObserver, new ResizeNotifier(__privateGet$2(this, _observePosition)));
				__privateGet$2(this, _resizeObserver).observe(element);
			}
		}, {
			threshold,
			root
		}));
		if (__privateGet$2(this, _visible) && !options.skipInitial) this.callback(this.boundingClientRect);
		__privateGet$2(this, _visibilityObserver).observe(element);
	}
};
_visible = /* @__PURE__ */ new WeakMap();
_previousBoundingClientRect = /* @__PURE__ */ new WeakMap();
_resizeObserver = /* @__PURE__ */ new WeakMap();
_positionObserver = /* @__PURE__ */ new WeakMap();
_visibilityObserver = /* @__PURE__ */ new WeakMap();
_debug = /* @__PURE__ */ new WeakMap();
_disconnected = /* @__PURE__ */ new WeakMap();
_observePosition = /* @__PURE__ */ new WeakMap();
_PositionObserver_instances = /* @__PURE__ */ new WeakSet();
notify_fn = function() {
	if (__privateGet$2(this, _disconnected)) return;
	__privateMethod$1(this, _PositionObserver_instances, updateDebug_fn).call(this);
	if (isRectEqual(this.boundingClientRect, __privateGet$2(this, _previousBoundingClientRect))) return;
	this.callback(this.boundingClientRect);
	__privateSet$2(this, _previousBoundingClientRect, this.boundingClientRect);
};
updateDebug_fn = function() {
	if (__privateGet$2(this, _debug)) {
		const { top, left, width, height } = getVisibleBoundingRectangle(this.element);
		__privateGet$2(this, _debug).style.overflow = "hidden";
		__privateGet$2(this, _debug).style.visibility = "visible";
		__privateGet$2(this, _debug).style.top = `${Math.floor(top)}px`;
		__privateGet$2(this, _debug).style.left = `${Math.floor(left)}px`;
		__privateGet$2(this, _debug).style.width = `${Math.floor(width)}px`;
		__privateGet$2(this, _debug).style.height = `${Math.floor(height)}px`;
	}
};
var framePositionObservers = /* @__PURE__ */ new WeakMap();
var scrollListeners = /* @__PURE__ */ new WeakMap();
function addFrameListener(frame, callback) {
	let cached = framePositionObservers.get(frame);
	if (!cached) cached = {
		disconnect: new PositionObserver(frame, (boundingClientRect) => {
			const cached2 = framePositionObservers.get(frame);
			if (!cached2) return;
			cached2.callbacks.forEach((callback2) => callback2(boundingClientRect));
		}, { skipInitial: true }).disconnect,
		callbacks: /* @__PURE__ */ new Set()
	};
	cached.callbacks.add(callback);
	framePositionObservers.set(frame, cached);
	return () => {
		cached.callbacks.delete(callback);
		if (cached.callbacks.size === 0) {
			framePositionObservers.delete(frame);
			cached.disconnect();
		}
	};
}
function observeParentFrames(frames, callback) {
	const cleanup = /* @__PURE__ */ new Set();
	for (const frame of frames) {
		const remove = addFrameListener(frame, callback);
		cleanup.add(remove);
	}
	return () => cleanup.forEach((remove) => remove());
}
function addScrollListener(element, callback) {
	var _a;
	const doc = element.ownerDocument;
	if (!scrollListeners.has(doc)) {
		const controller = new AbortController();
		const listeners2 = /* @__PURE__ */ new Set();
		document.addEventListener("scroll", (event) => listeners2.forEach((listener) => listener(event)), {
			capture: true,
			passive: true,
			signal: controller.signal
		});
		scrollListeners.set(doc, {
			disconnect: () => controller.abort(),
			listeners: listeners2
		});
	}
	const { listeners, disconnect } = (_a = scrollListeners.get(doc)) != null ? _a : {};
	if (!listeners || !disconnect) return () => {};
	listeners.add(callback);
	return () => {
		listeners.delete(callback);
		if (listeners.size === 0) {
			disconnect();
			scrollListeners.delete(doc);
		}
	};
}
var _elementObserver;
var _disconnected2;
var _frames;
var _handleScroll;
var FrameObserver = class {
	constructor(element, callback, options) {
		this.callback = callback;
		__privateAdd$2(this, _elementObserver);
		__privateAdd$2(this, _disconnected2, false);
		__privateAdd$2(this, _frames);
		__privateAdd$2(this, _handleScroll, throttle((event) => {
			if (__privateGet$2(this, _disconnected2)) return;
			if (!event.target) return;
			if ("contains" in event.target && typeof event.target.contains === "function") {
				for (const frame of __privateGet$2(this, _frames)) if (event.target.contains(frame)) {
					this.callback(__privateGet$2(this, _elementObserver).boundingClientRect);
					break;
				}
			}
		}, THROTTLE_INTERVAL));
		const frames = getFrameElements(element);
		const unobserveParentFrames = observeParentFrames(frames, callback);
		const removeScrollListener = addScrollListener(element, __privateGet$2(this, _handleScroll));
		__privateSet$2(this, _frames, frames);
		__privateSet$2(this, _elementObserver, new PositionObserver(element, callback, options));
		this.disconnect = () => {
			if (__privateGet$2(this, _disconnected2)) return;
			__privateSet$2(this, _disconnected2, true);
			unobserveParentFrames();
			removeScrollListener();
			__privateGet$2(this, _elementObserver).disconnect();
		};
	}
};
_elementObserver = /* @__PURE__ */ new WeakMap();
_disconnected2 = /* @__PURE__ */ new WeakMap();
_frames = /* @__PURE__ */ new WeakMap();
_handleScroll = /* @__PURE__ */ new WeakMap();
function supportsPopover(element) {
	return "showPopover" in element && "hidePopover" in element && typeof element.showPopover === "function" && typeof element.hidePopover === "function";
}
function showPopover(element) {
	try {
		if (supportsPopover(element) && element.isConnected && element.hasAttribute("popover") && !element.matches(":popover-open")) element.showPopover();
	} catch (error) {}
}
function hidePopover(element) {
	try {
		if (supportsPopover(element) && element.isConnected && element.hasAttribute("popover") && element.matches(":popover-open")) element.hidePopover();
	} catch (error) {}
}
function isDocumentScrollingElement(element) {
	if (!canUseDOM || !element) return false;
	return element === getDocument(element).scrollingElement;
}
function getScrollPosition(scrollableElement) {
	var _a, _b;
	const window2 = getWindow(scrollableElement);
	const rect = isDocumentScrollingElement(scrollableElement) ? getViewportBoundingRectangle(scrollableElement) : getBoundingRectangle(scrollableElement);
	const vv = window2.visualViewport;
	const dimensions = isDocumentScrollingElement(scrollableElement) ? {
		height: (_a = vv == null ? void 0 : vv.height) != null ? _a : window2.innerHeight,
		width: (_b = vv == null ? void 0 : vv.width) != null ? _b : window2.innerWidth
	} : {
		height: scrollableElement.clientHeight,
		width: scrollableElement.clientWidth
	};
	const position = {
		current: {
			x: scrollableElement.scrollLeft,
			y: scrollableElement.scrollTop
		},
		max: {
			x: scrollableElement.scrollWidth - dimensions.width,
			y: scrollableElement.scrollHeight - dimensions.height
		}
	};
	return {
		rect,
		position,
		isTop: position.current.y <= 0,
		isLeft: position.current.x <= 0,
		isBottom: position.current.y >= position.max.y,
		isRight: position.current.x >= position.max.x
	};
}
function canScroll(scrollableElement, by) {
	const { isTop, isBottom, isLeft, isRight, position } = getScrollPosition(scrollableElement);
	const { x, y } = by != null ? by : {
		x: 0,
		y: 0
	};
	const top = !isTop && position.current.y + y > 0;
	const bottom = !isBottom && position.current.y + y < position.max.y;
	const left = !isLeft && position.current.x + x > 0;
	const right = !isRight && position.current.x + x < position.max.x;
	return {
		top,
		bottom,
		left,
		right,
		x: left || right,
		y: top || bottom
	};
}
var Scheduler$1 = class {
	constructor(scheduler4) {
		this.scheduler = scheduler4;
		this.pending = false;
		this.tasks = /* @__PURE__ */ new Set();
		this.resolvers = /* @__PURE__ */ new Set();
		this.flush = () => {
			const { tasks, resolvers } = this;
			this.pending = false;
			this.tasks = /* @__PURE__ */ new Set();
			this.resolvers = /* @__PURE__ */ new Set();
			for (const task of tasks) task();
			for (const resolve of resolvers) resolve();
		};
	}
	schedule(task) {
		this.tasks.add(task);
		if (!this.pending) {
			this.pending = true;
			this.scheduler(this.flush);
		}
		return new Promise((resolve) => this.resolvers.add(resolve));
	}
};
var scheduler = new Scheduler$1((callback) => {
	if (typeof requestAnimationFrame === "function") requestAnimationFrame(callback);
	else callback();
});
var scheduler2 = new Scheduler$1((callback) => setTimeout(callback, 50));
var cachedStyles = /* @__PURE__ */ new Map();
var clear = cachedStyles.clear.bind(cachedStyles);
function getComputedStyles(element, cached = false) {
	if (!cached) return computeStyles(element);
	let styles = cachedStyles.get(element);
	if (styles) return styles;
	styles = computeStyles(element);
	cachedStyles.set(element, styles);
	scheduler2.schedule(clear);
	return styles;
}
function computeStyles(element) {
	return getWindow(element).getComputedStyle(element);
}
function isFixed(node, computedStyle = getComputedStyles(node, true)) {
	return computedStyle.position === "fixed" || computedStyle.position === "sticky";
}
function isScrollable(element, computedStyle = getComputedStyles(element, true)) {
	const overflowRegex = /(auto|scroll|overlay)/;
	return [
		"overflow",
		"overflowX",
		"overflowY"
	].some((property) => {
		const value = computedStyle[property];
		return typeof value === "string" ? overflowRegex.test(value) : false;
	});
}
var defaultOptions = {
	excludeElement: true,
	escapeShadowDOM: true
};
function getScrollableAncestors(element, options = defaultOptions) {
	const { limit, excludeElement, escapeShadowDOM } = options;
	const scrollParents = /* @__PURE__ */ new Set();
	function findScrollableAncestors(node) {
		if (limit != null && scrollParents.size >= limit) return scrollParents;
		if (!node) return scrollParents;
		if (isDocument(node) && node.scrollingElement != null && !scrollParents.has(node.scrollingElement)) {
			scrollParents.add(node.scrollingElement);
			return scrollParents;
		}
		if (escapeShadowDOM && isShadowRoot(node)) return findScrollableAncestors(node.host);
		if (!isHTMLElement(node)) {
			if (isSVGElement(node)) return findScrollableAncestors(node.parentElement);
			return scrollParents;
		}
		if (scrollParents.has(node)) return scrollParents;
		const computedStyle = getComputedStyles(node, true);
		if (excludeElement && node === element);
		else if (isScrollable(node, computedStyle)) scrollParents.add(node);
		if (isFixed(node, computedStyle)) {
			const { scrollingElement } = node.ownerDocument;
			if (scrollingElement) scrollParents.add(scrollingElement);
			return scrollParents;
		}
		return findScrollableAncestors(node.parentNode);
	}
	if (!element) return scrollParents;
	return findScrollableAncestors(element);
}
function getFrameTransform(el, boundary = window.frameElement) {
	const transform = {
		x: 0,
		y: 0,
		scaleX: 1,
		scaleY: 1
	};
	if (!el) return transform;
	let frame = getFrameElement(el);
	while (frame) {
		if (frame === boundary) return transform;
		const rect = getBoundingRectangle(frame);
		const { x: scaleX, y: scaleY } = getScale(frame, rect);
		transform.x = transform.x + rect.left;
		transform.y = transform.y + rect.top;
		transform.scaleX = transform.scaleX * scaleX;
		transform.scaleY = transform.scaleY * scaleY;
		frame = getFrameElement(frame);
	}
	return transform;
}
function getScale(element, boundingRectangle = getBoundingRectangle(element)) {
	const width = Math.round(boundingRectangle.width);
	const height = Math.round(boundingRectangle.height);
	if (isHTMLElement(element)) return {
		x: width / element.offsetWidth,
		y: height / element.offsetHeight
	};
	const styles = getComputedStyles(element, true);
	return {
		x: (parseFloat(styles.width) || width) / width,
		y: (parseFloat(styles.height) || height) / height
	};
}
function parseScale(scale) {
	if (scale === "none") return null;
	const values = scale.split(" ");
	const x = parseFloat(values[0]);
	const y = parseFloat(values[1]);
	if (isNaN(x) && isNaN(y)) return null;
	return {
		x: isNaN(x) ? y : x,
		y: isNaN(y) ? x : y
	};
}
function parseTranslate(translate) {
	if (translate === "none") return null;
	const [x, y, z = "0"] = translate.split(" ");
	const output = {
		x: parseFloat(x),
		y: parseFloat(y),
		z: parseInt(z, 10)
	};
	if (isNaN(output.x) && isNaN(output.y)) return null;
	return {
		x: isNaN(output.x) ? 0 : output.x,
		y: isNaN(output.y) ? 0 : output.y,
		z: isNaN(output.z) ? 0 : output.z
	};
}
function parseTransform(computedStyles) {
	var _a, _b, _c, _d, _e, _f, _g, _h, _i;
	const { scale, transform, translate } = computedStyles;
	const parsedScale = parseScale(scale);
	const parsedTranslate = parseTranslate(translate);
	const parsedMatrix = parseTransformMatrix(transform);
	if (!parsedMatrix && !parsedScale && !parsedTranslate) return null;
	const normalizedScale = {
		x: (_a = parsedScale == null ? void 0 : parsedScale.x) != null ? _a : 1,
		y: (_b = parsedScale == null ? void 0 : parsedScale.y) != null ? _b : 1
	};
	const normalizedTranslate = {
		x: (_c = parsedTranslate == null ? void 0 : parsedTranslate.x) != null ? _c : 0,
		y: (_d = parsedTranslate == null ? void 0 : parsedTranslate.y) != null ? _d : 0
	};
	const normalizedMatrix = {
		x: (_e = parsedMatrix == null ? void 0 : parsedMatrix.x) != null ? _e : 0,
		y: (_f = parsedMatrix == null ? void 0 : parsedMatrix.y) != null ? _f : 0,
		scaleX: (_g = parsedMatrix == null ? void 0 : parsedMatrix.scaleX) != null ? _g : 1,
		scaleY: (_h = parsedMatrix == null ? void 0 : parsedMatrix.scaleY) != null ? _h : 1
	};
	return {
		x: normalizedTranslate.x + normalizedMatrix.x,
		y: normalizedTranslate.y + normalizedMatrix.y,
		z: (_i = parsedTranslate == null ? void 0 : parsedTranslate.z) != null ? _i : 0,
		scaleX: normalizedScale.x * normalizedMatrix.scaleX,
		scaleY: normalizedScale.y * normalizedMatrix.scaleY
	};
}
function parseTransformMatrix(transform) {
	if (transform.startsWith("matrix3d(")) {
		const transformArray = transform.slice(9, -1).split(/, /);
		return {
			x: +transformArray[12],
			y: +transformArray[13],
			scaleX: +transformArray[0],
			scaleY: +transformArray[5]
		};
	} else if (transform.startsWith("matrix(")) {
		const transformArray = transform.slice(7, -1).split(/, /);
		return {
			x: +transformArray[4],
			y: +transformArray[5],
			scaleX: +transformArray[0],
			scaleY: +transformArray[3]
		};
	}
	return null;
}
var ScrollDirection = /* @__PURE__ */ ((ScrollDirection2) => {
	ScrollDirection2[ScrollDirection2["Idle"] = 0] = "Idle";
	ScrollDirection2[ScrollDirection2["Forward"] = 1] = "Forward";
	ScrollDirection2[ScrollDirection2["Reverse"] = -1] = "Reverse";
	return ScrollDirection2;
})(ScrollDirection || {});
var defaultThreshold = {
	x: .2,
	y: .2
};
var defaultTolerance = {
	x: 10,
	y: 10
};
function detectScrollIntent(scrollableElement, coordinates, intent, acceleration = 25, thresholdPercentage = defaultThreshold, tolerance = defaultTolerance) {
	const { x, y } = coordinates;
	const { rect, isTop, isBottom, isLeft, isRight } = getScrollPosition(scrollableElement);
	const frameTransform = getFrameTransform(scrollableElement);
	const parsedTransform = parseTransform(getComputedStyles(scrollableElement, true));
	const isXAxisInverted = parsedTransform !== null ? (parsedTransform == null ? void 0 : parsedTransform.scaleX) < 0 : false;
	const isYAxisInverted = parsedTransform !== null ? (parsedTransform == null ? void 0 : parsedTransform.scaleY) < 0 : false;
	const scrollContainerRect = new Rectangle(rect.left * frameTransform.scaleX + frameTransform.x, rect.top * frameTransform.scaleY + frameTransform.y, rect.width * frameTransform.scaleX, rect.height * frameTransform.scaleY);
	const direction = {
		x: 0,
		y: 0
	};
	const speed = {
		x: 0,
		y: 0
	};
	const threshold2 = {
		height: scrollContainerRect.height * thresholdPercentage.y,
		width: scrollContainerRect.width * thresholdPercentage.x
	};
	if (threshold2.height > 0 && (!isTop || isYAxisInverted && !isBottom) && y <= scrollContainerRect.top + threshold2.height && (intent == null ? void 0 : intent.y) !== 1 && x >= scrollContainerRect.left - tolerance.x && x <= scrollContainerRect.right + tolerance.x) {
		direction.y = isYAxisInverted ? 1 : -1;
		speed.y = acceleration * Math.abs((scrollContainerRect.top + threshold2.height - y) / threshold2.height);
	} else if (threshold2.height > 0 && (!isBottom || isYAxisInverted && !isTop) && y >= scrollContainerRect.bottom - threshold2.height && (intent == null ? void 0 : intent.y) !== -1 && x >= scrollContainerRect.left - tolerance.x && x <= scrollContainerRect.right + tolerance.x) {
		direction.y = isYAxisInverted ? -1 : 1;
		speed.y = acceleration * Math.abs((scrollContainerRect.bottom - threshold2.height - y) / threshold2.height);
	}
	if (threshold2.width > 0 && (!isRight || isXAxisInverted && !isLeft) && x >= scrollContainerRect.right - threshold2.width && (intent == null ? void 0 : intent.x) !== -1 && y >= scrollContainerRect.top - tolerance.y && y <= scrollContainerRect.bottom + tolerance.y) {
		direction.x = isXAxisInverted ? -1 : 1;
		speed.x = acceleration * Math.abs((scrollContainerRect.right - threshold2.width - x) / threshold2.width);
	} else if (threshold2.width > 0 && (!isLeft || isXAxisInverted && !isRight) && x <= scrollContainerRect.left + threshold2.width && (intent == null ? void 0 : intent.x) !== 1 && y >= scrollContainerRect.top - tolerance.y && y <= scrollContainerRect.bottom + tolerance.y) {
		direction.x = isXAxisInverted ? 1 : -1;
		speed.x = acceleration * Math.abs((scrollContainerRect.left + threshold2.width - x) / threshold2.width);
	}
	return {
		direction,
		speed
	};
}
function scrollIntoViewIfNeeded(el, { block = "nearest", inline = "nearest" } = {}) {
	if (!isHTMLElement(el)) return;
	const scrollableAncestors = getScrollableAncestors(el);
	const processedAncestors = [];
	for (const ancestor of scrollableAncestors) {
		if (!isHTMLElement(ancestor)) continue;
		const { top, left } = getOffsetRelativeTo(el, ancestor);
		let adjustedTop = top;
		let adjustedLeft = left;
		for (const inner of processedAncestors) {
			adjustedTop -= inner.scrollTop;
			adjustedLeft -= inner.scrollLeft;
		}
		if (block !== "none") {
			const overTop = adjustedTop < ancestor.scrollTop;
			if (overTop !== adjustedTop + el.offsetHeight > ancestor.scrollTop + ancestor.clientHeight) if (block === "center") ancestor.scrollTop = adjustedTop - ancestor.clientHeight / 2 + el.offsetHeight / 2;
			else if (overTop) ancestor.scrollTop = adjustedTop;
			else ancestor.scrollTop = adjustedTop + el.offsetHeight - ancestor.clientHeight;
		}
		if (inline !== "none") {
			const overLeft = adjustedLeft < ancestor.scrollLeft;
			if (overLeft !== adjustedLeft + el.offsetWidth > ancestor.scrollLeft + ancestor.clientWidth) if (inline === "center") ancestor.scrollLeft = adjustedLeft - ancestor.clientWidth / 2 + el.offsetWidth / 2;
			else if (overLeft) ancestor.scrollLeft = adjustedLeft;
			else ancestor.scrollLeft = adjustedLeft + el.offsetWidth - ancestor.clientWidth;
		}
		processedAncestors.push(ancestor);
	}
}
function getDocumentOffset(element) {
	let top = 0;
	let left = 0;
	let current = element;
	while (current) {
		top += current.offsetTop;
		left += current.offsetLeft;
		const offsetParent = current.offsetParent;
		if (!isHTMLElement(offsetParent)) break;
		top += offsetParent.clientTop;
		left += offsetParent.clientLeft;
		current = offsetParent;
	}
	return {
		top,
		left
	};
}
function getOffsetRelativeTo(element, ancestor) {
	const elOffset = getDocumentOffset(element);
	const ancestorOffset = getDocumentOffset(ancestor);
	return {
		top: elOffset.top - ancestorOffset.top - ancestor.clientTop,
		left: elOffset.left - ancestorOffset.left - ancestor.clientLeft
	};
}
function applyTransform(rect, parsedTransform, transformOrigin) {
	const { scaleX, scaleY, x: translateX, y: translateY } = parsedTransform;
	const x = rect.left + translateX + (1 - scaleX) * parseFloat(transformOrigin);
	const y = rect.top + translateY + (1 - scaleY) * parseFloat(transformOrigin.slice(transformOrigin.indexOf(" ") + 1));
	const w = scaleX ? rect.width * scaleX : rect.width;
	const h = scaleY ? rect.height * scaleY : rect.height;
	return {
		width: w,
		height: h,
		top: y,
		right: x + w,
		bottom: y + h,
		left: x
	};
}
function inverseTransform(rect, parsedTransform, transformOrigin) {
	const { scaleX, scaleY, x: translateX, y: translateY } = parsedTransform;
	const x = rect.left - translateX - (1 - scaleX) * parseFloat(transformOrigin);
	const y = rect.top - translateY - (1 - scaleY) * parseFloat(transformOrigin.slice(transformOrigin.indexOf(" ") + 1));
	const w = scaleX ? rect.width / scaleX : rect.width;
	const h = scaleY ? rect.height / scaleY : rect.height;
	return {
		width: w,
		height: h,
		top: y,
		right: x + w,
		bottom: y + h,
		left: x
	};
}
function animateTransform({ element, keyframes, options }) {
	return element.animate(keyframes, options).finished;
}
function computeTranslate(element, translate = getComputedStyles(element).translate, projected = true) {
	if (projected) {
		const keyframe = getFinalKeyframe(element, (keyframe2) => "translate" in keyframe2);
		if (keyframe) {
			const { translate: translate2 = "" } = keyframe[0];
			if (typeof translate2 === "string") {
				const finalTranslate = parseTranslate(translate2);
				if (finalTranslate) return finalTranslate;
			}
		}
	}
	if (translate) {
		const finalTranslate = parseTranslate(translate);
		if (finalTranslate) return finalTranslate;
	}
	return {
		x: 0,
		y: 0,
		z: 0
	};
}
var scheduler3$1 = new Scheduler$1((callback) => setTimeout(callback, 0));
var animations = /* @__PURE__ */ new Map();
var clear2 = animations.clear.bind(animations);
function getDocumentAnimations(element) {
	const document2 = element.ownerDocument;
	let documentAnimations = animations.get(document2);
	if (documentAnimations) return documentAnimations;
	documentAnimations = document2.getAnimations();
	animations.set(document2, documentAnimations);
	scheduler3$1.schedule(clear2);
	const elementAnimations = documentAnimations.filter((animation) => isKeyframeEffect(animation.effect) && animation.effect.target === element);
	animations.set(element, elementAnimations);
	return documentAnimations;
}
function forceFinishAnimations(element, options) {
	const animations2 = getDocumentAnimations(element).filter((animation) => {
		var _a, _b;
		if (isKeyframeEffect(animation.effect)) {
			const { target } = animation.effect;
			if ((_b = target && ((_a = options.isValidTarget) == null ? void 0 : _a.call(options, target))) != null ? _b : true) return animation.effect.getKeyframes().some((keyframe) => {
				for (const property of options.properties) if (keyframe[property]) return true;
			});
		}
	}).map((animation) => {
		const { effect, currentTime } = animation;
		const duration = effect == null ? void 0 : effect.getComputedTiming().duration;
		if (animation.pending || animation.playState === "finished") return;
		if (typeof duration == "number" && typeof currentTime == "number" && currentTime < duration) {
			animation.currentTime = duration;
			return () => {
				animation.currentTime = currentTime;
			};
		}
	});
	if (animations2.length > 0) return () => animations2.forEach((reset) => reset == null ? void 0 : reset());
}
var DOMRectangle = class extends Rectangle {
	constructor(element, options = {}) {
		var _a, _b, _c, _d;
		const { frameTransform = getFrameTransform(element), ignoreTransforms, getBoundingClientRect = getBoundingRectangle } = options;
		const resetAnimations = forceFinishAnimations(element, {
			properties: [
				"transform",
				"translate",
				"scale",
				"width",
				"height"
			],
			isValidTarget: (target) => (target !== element || isSafari()) && target.contains(element)
		});
		const boundingRectangle = getBoundingClientRect(element);
		let { top, left, width, height } = boundingRectangle;
		let updated;
		const computedStyles = getComputedStyles(element);
		const parsedTransform = parseTransform(computedStyles);
		const scale = {
			x: (_a = parsedTransform == null ? void 0 : parsedTransform.scaleX) != null ? _a : 1,
			y: (_b = parsedTransform == null ? void 0 : parsedTransform.scaleY) != null ? _b : 1
		};
		const projectedTransform = getProjectedTransform(element, computedStyles);
		resetAnimations?.();
		if (parsedTransform) {
			updated = inverseTransform(boundingRectangle, parsedTransform, computedStyles.transformOrigin);
			if (ignoreTransforms || projectedTransform) {
				top = updated.top;
				left = updated.left;
				width = updated.width;
				height = updated.height;
			}
		}
		const intrinsic = {
			width: (_c = updated == null ? void 0 : updated.width) != null ? _c : width,
			height: (_d = updated == null ? void 0 : updated.height) != null ? _d : height
		};
		if (projectedTransform && !ignoreTransforms && updated) {
			const projected = applyTransform(updated, projectedTransform, computedStyles.transformOrigin);
			top = projected.top;
			left = projected.left;
			width = projected.width;
			height = projected.height;
			scale.x = projectedTransform.scaleX;
			scale.y = projectedTransform.scaleY;
		}
		if (frameTransform) {
			if (!ignoreTransforms) {
				left *= frameTransform.scaleX;
				width *= frameTransform.scaleX;
				top *= frameTransform.scaleY;
				height *= frameTransform.scaleY;
			}
			left += frameTransform.x;
			top += frameTransform.y;
		}
		super(left, top, width, height);
		this.scale = scale;
		this.intrinsicWidth = intrinsic.width;
		this.intrinsicHeight = intrinsic.height;
	}
};
function getProjectedTransform(element, computedStyles) {
	const animations2 = element.getAnimations();
	if (!animations2.length) return null;
	let latestTransform;
	let latestTranslate;
	let latestScale;
	let hasAnimatedProperty = false;
	for (const animation of animations2) {
		if (animation.playState !== "running") continue;
		const keyframes = isKeyframeEffect(animation.effect) ? animation.effect.getKeyframes() : [];
		const keyframe = keyframes[keyframes.length - 1];
		if (!keyframe) continue;
		const { transform, translate, scale } = keyframe;
		if (typeof transform === "string" && transform) {
			latestTransform = transform;
			hasAnimatedProperty = true;
		}
		if (typeof translate === "string" && translate) {
			latestTranslate = translate;
			hasAnimatedProperty = true;
		}
		if (typeof scale === "string" && scale) {
			latestScale = scale;
			hasAnimatedProperty = true;
		}
	}
	if (!hasAnimatedProperty) return null;
	return parseTransform({
		transform: latestTransform != null ? latestTransform : computedStyles.transform,
		translate: latestTranslate != null ? latestTranslate : computedStyles.translate,
		scale: latestScale != null ? latestScale : computedStyles.scale
	});
}
function supportsStyle(element) {
	return "style" in element && typeof element.style === "object" && element.style !== null && "setProperty" in element.style && "removeProperty" in element.style && typeof element.style.setProperty === "function" && typeof element.style.removeProperty === "function";
}
var Styles = class {
	constructor(element) {
		this.element = element;
		this.initial = /* @__PURE__ */ new Map();
	}
	set(properties, prefix = "") {
		const { element } = this;
		if (!supportsStyle(element)) return;
		for (const [key, value] of Object.entries(properties)) {
			const property = `${prefix}${key}`;
			if (!this.initial.has(property)) this.initial.set(property, element.style.getPropertyValue(property));
			element.style.setProperty(property, typeof value === "string" ? value : `${value}px`);
		}
	}
	remove(properties, prefix = "") {
		const { element } = this;
		if (!supportsStyle(element)) return;
		for (const key of properties) {
			const property = `${prefix}${key}`;
			element.style.removeProperty(property);
		}
	}
	reset() {
		const { element } = this;
		if (!supportsStyle(element)) return;
		for (const [key, value] of this.initial) element.style.setProperty(key, value);
		if (element.getAttribute("style") === "") element.removeAttribute("style");
	}
};
function isElement(target) {
	if (!target) return false;
	return target instanceof getWindow(target).Element || isNode(target) && target.nodeType === Node.ELEMENT_NODE;
}
function isKeyboardEvent(event) {
	if (!event) return false;
	const { KeyboardEvent } = getWindow(event.target);
	return event instanceof KeyboardEvent;
}
function isPointerEvent(event) {
	if (!event) return false;
	const { PointerEvent } = getWindow(event.target);
	return event instanceof PointerEvent;
}
function isTextInput(target) {
	if (!isElement(target)) return false;
	const { tagName } = target;
	return tagName === "INPUT" || tagName === "TEXTAREA" || isContentEditable(target);
}
function isContentEditable(element) {
	return element.hasAttribute("contenteditable") && element.getAttribute("contenteditable") !== "false";
}
var ids = {};
function generateUniqueId(prefix) {
	const id = ids[prefix] == null ? 0 : ids[prefix] + 1;
	ids[prefix] = id;
	return `${prefix}-${id}`;
}
//#endregion
//#region node_modules/@dnd-kit/dom/index.js
var __create$1 = Object.create;
var __defProp$1 = Object.defineProperty;
var __defProps$1 = Object.defineProperties;
var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var __knownSymbol$1 = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __typeError$1 = (msg) => {
	throw TypeError(msg);
};
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, {
	enumerable: true,
	configurable: true,
	writable: true,
	value
}) : obj[key] = value;
var __spreadValues$1 = (a, b) => {
	for (var prop in b || (b = {})) if (__hasOwnProp$1.call(b, prop)) __defNormalProp$1(a, prop, b[prop]);
	if (__getOwnPropSymbols$1) {
		for (var prop of __getOwnPropSymbols$1(b)) if (__propIsEnum$1.call(b, prop)) __defNormalProp$1(a, prop, b[prop]);
	}
	return a;
};
var __spreadProps$1 = (a, b) => __defProps$1(a, __getOwnPropDescs$1(b));
var __name = (target, value) => __defProp$1(target, "name", {
	value,
	configurable: true
});
var __objRest$1 = (source, exclude) => {
	var target = {};
	for (var prop in source) if (__hasOwnProp$1.call(source, prop) && exclude.indexOf(prop) < 0) target[prop] = source[prop];
	if (source != null && __getOwnPropSymbols$1) {
		for (var prop of __getOwnPropSymbols$1(source)) if (exclude.indexOf(prop) < 0 && __propIsEnum$1.call(source, prop)) target[prop] = source[prop];
	}
	return target;
};
var __decoratorStart$1 = (base) => {
	var _a5;
	return [
		,
		,
		,
		__create$1((_a5 = base == null ? void 0 : base[__knownSymbol$1("metadata")]) != null ? _a5 : null)
	];
};
var __decoratorStrings$1 = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
];
var __expectFn$1 = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError$1("Function expected") : fn;
var __decoratorContext$1 = (kind, name, done, metadata, fns) => ({
	kind: __decoratorStrings$1[kind],
	name,
	metadata,
	addInitializer: (fn) => done._ ? __typeError$1("Already initialized") : fns.push(__expectFn$1(fn || null))
});
var __decoratorMetadata$1 = (array, target) => __defNormalProp$1(target, __knownSymbol$1("metadata"), array[3]);
var __runInitializers$1 = (array, flags, self, value) => {
	for (var i = 0, fns = array[flags >> 1], n = fns && fns.length; i < n; i++) flags & 1 ? fns[i].call(self) : value = fns[i].call(self, value);
	return value;
};
var __decorateElement$1 = (array, flags, name, decorators, target, extra) => {
	var fn, it, done, ctx, access, k = flags & 7, s = !!(flags & 8), p = !!(flags & 16);
	var j = k > 3 ? array.length + 1 : k ? s ? 1 : 2 : 0, key = __decoratorStrings$1[k + 5];
	var initializers = k > 3 && (array[j - 1] = []), extraInitializers = array[j] || (array[j] = []);
	var desc = k && (!p && !s && (target = target.prototype), k < 5 && (k > 3 || !p) && __getOwnPropDesc$1(k < 4 ? target : {
		get [name]() {
			return __privateGet$1(this, extra);
		},
		set [name](x) {
			return __privateSet$1(this, extra, x);
		}
	}, name));
	k ? p && k < 4 && __name(extra, (k > 2 ? "set " : k > 1 ? "get " : "") + name) : __name(target, name);
	for (var i = decorators.length - 1; i >= 0; i--) {
		ctx = __decoratorContext$1(k, name, done = {}, array[3], extraInitializers);
		if (k) {
			ctx.static = s, ctx.private = p, access = ctx.access = { has: p ? (x) => __privateIn(target, x) : (x) => name in x };
			if (k ^ 3) access.get = p ? (x) => (k ^ 1 ? __privateGet$1 : __privateMethod)(x, target, k ^ 4 ? extra : desc.get) : (x) => x[name];
			if (k > 2) access.set = p ? (x, y) => __privateSet$1(x, target, y, k ^ 4 ? extra : desc.set) : (x, y) => x[name] = y;
		}
		it = (0, decorators[i])(k ? k < 4 ? p ? extra : desc[key] : k > 4 ? void 0 : {
			get: desc.get,
			set: desc.set
		} : target, ctx), done._ = 1;
		if (k ^ 4 || it === void 0) __expectFn$1(it) && (k > 4 ? initializers.unshift(it) : k ? p ? extra = it : desc[key] = it : target = it);
		else if (typeof it !== "object" || it === null) __typeError$1("Object expected");
		else __expectFn$1(fn = it.get) && (desc.get = fn), __expectFn$1(fn = it.set) && (desc.set = fn), __expectFn$1(fn = it.init) && initializers.unshift(fn);
	}
	return k || __decoratorMetadata$1(array, target), desc && __defProp$1(target, name, desc), p ? k ^ 4 ? extra : desc : target;
};
var __accessCheck$1 = (obj, member, msg) => member.has(obj) || __typeError$1("Cannot " + msg);
var __privateIn = (member, obj) => Object(obj) !== obj ? __typeError$1("Cannot use the \"in\" operator on this value") : member.has(obj);
var __privateGet$1 = (obj, member, getter) => (__accessCheck$1(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd$1 = (obj, member, value) => member.has(obj) ? __typeError$1("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet$1 = (obj, member, value, setter) => (__accessCheck$1(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck$1(obj, member, "access private method"), method);
var defaultAttributes = {
	role: "button",
	roleDescription: "draggable"
};
var defaultDescriptionIdPrefix = `dnd-kit-description`;
var defaultAnnouncementIdPrefix = `dnd-kit-announcement`;
var defaultScreenReaderInstructions = { draggable: `To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item in a given direction. Press space again to drop the item in its new position, or press escape to cancel.` };
var defaultAnnouncements = {
	dragstart({ operation: { source } }) {
		if (!source) return;
		return `Picked up draggable item ${source.id}.`;
	},
	dragover({ operation: { source, target } }) {
		if (!source || source.id === (target == null ? void 0 : target.id)) return;
		if (target) return `Draggable item ${source.id} was moved over droppable target ${target.id}.`;
		return `Draggable item ${source.id} is no longer over a droppable target.`;
	},
	dragend({ operation: { source, target }, canceled }) {
		if (!source) return;
		if (canceled) return `Dragging was cancelled. Draggable item ${source.id} was dropped.`;
		if (target) return `Draggable item ${source.id} was dropped over droppable target ${target.id}`;
		return `Draggable item ${source.id} was dropped.`;
	}
};
function isFocusable(element) {
	const tagName = element.tagName.toLowerCase();
	return [
		"input",
		"select",
		"textarea",
		"a",
		"button"
	].includes(tagName);
}
function createHiddenText(id, value) {
	const element = document.createElement("div");
	element.id = id;
	element.style.setProperty("display", "none");
	element.textContent = value;
	return element;
}
function createLiveRegion(id) {
	const element = document.createElement("div");
	element.id = id;
	element.setAttribute("role", "status");
	element.setAttribute("aria-live", "polite");
	element.setAttribute("aria-atomic", "true");
	element.style.setProperty("position", "fixed");
	element.style.setProperty("width", "1px");
	element.style.setProperty("height", "1px");
	element.style.setProperty("margin", "-1px");
	element.style.setProperty("border", "0");
	element.style.setProperty("padding", "0");
	element.style.setProperty("overflow", "hidden");
	element.style.setProperty("clip", "rect(0 0 0 0)");
	element.style.setProperty("clip-path", "inset(100%)");
	element.style.setProperty("white-space", "nowrap");
	return element;
}
var debouncedEvents = ["dragover", "dragmove"];
var Accessibility = class extends Plugin {
	constructor(manager, options) {
		super(manager);
		const { id, idPrefix: { description: descriptionPrefix = defaultDescriptionIdPrefix, announcement: announcementPrefix = defaultAnnouncementIdPrefix } = {}, announcements = defaultAnnouncements, screenReaderInstructions = defaultScreenReaderInstructions, debounce: debounceMs = 500 } = options != null ? options : {};
		const descriptionId = id ? `${descriptionPrefix}-${id}` : generateUniqueId(descriptionPrefix);
		const announcementId = id ? `${announcementPrefix}-${id}` : generateUniqueId(announcementPrefix);
		let hiddenTextElement;
		let liveRegionElement;
		let liveRegionTextNode;
		let latestAnnouncement;
		const updateAnnouncement = (value = latestAnnouncement) => {
			if (!liveRegionTextNode || !value) return;
			if ((liveRegionTextNode == null ? void 0 : liveRegionTextNode.nodeValue) !== value) liveRegionTextNode.nodeValue = value;
		};
		const scheduleUpdateAnnouncement = () => scheduler.schedule(updateAnnouncement);
		const debouncedUpdateAnnouncement = debounce(scheduleUpdateAnnouncement, debounceMs);
		const eventListeners = Object.entries(announcements).map(([eventName, getAnnouncement]) => {
			return this.manager.monitor.addEventListener(eventName, (event, manager2) => {
				const element = liveRegionTextNode;
				if (!element) return;
				const announcement = getAnnouncement == null ? void 0 : getAnnouncement(event, manager2);
				if (announcement && element.nodeValue !== announcement) {
					latestAnnouncement = announcement;
					if (debouncedEvents.includes(eventName)) debouncedUpdateAnnouncement();
					else {
						scheduleUpdateAnnouncement();
						debouncedUpdateAnnouncement.cancel();
					}
				}
			});
		});
		const initialize = () => {
			let elements = [];
			if (!(hiddenTextElement == null ? void 0 : hiddenTextElement.isConnected)) {
				hiddenTextElement = createHiddenText(descriptionId, screenReaderInstructions.draggable);
				elements.push(hiddenTextElement);
			}
			if (!(liveRegionElement == null ? void 0 : liveRegionElement.isConnected)) {
				liveRegionElement = createLiveRegion(announcementId);
				liveRegionTextNode = document.createTextNode("");
				liveRegionElement.appendChild(liveRegionTextNode);
				elements.push(liveRegionElement);
			}
			if (elements.length > 0) document.body.append(...elements);
		};
		const mutations = /* @__PURE__ */ new Set();
		function executeMutations() {
			for (const operation of mutations) operation();
		}
		this.registerEffect(() => {
			var _a5;
			mutations.clear();
			for (const draggable of this.manager.registry.draggables.value) {
				const activator = (_a5 = draggable.handle) != null ? _a5 : draggable.element;
				if (activator) {
					if (!hiddenTextElement || !liveRegionElement) mutations.add(initialize);
					if ((!isFocusable(activator) || isSafari()) && !activator.hasAttribute("tabindex")) mutations.add(() => activator.setAttribute("tabindex", "0"));
					if (!activator.hasAttribute("role") && !(activator.tagName.toLowerCase() === "button")) mutations.add(() => activator.setAttribute("role", defaultAttributes.role));
					if (!activator.hasAttribute("aria-roledescription")) mutations.add(() => activator.setAttribute("aria-roledescription", defaultAttributes.roleDescription));
					if (!activator.hasAttribute("aria-describedby")) mutations.add(() => activator.setAttribute("aria-describedby", descriptionId));
					for (const key of ["aria-pressed", "aria-grabbed"]) {
						const value = String(draggable.isDragging);
						if (activator.getAttribute(key) !== value) mutations.add(() => activator.setAttribute(key, value));
					}
					const disabled = String(draggable.disabled);
					if (activator.getAttribute("aria-disabled") !== disabled) mutations.add(() => activator.setAttribute("aria-disabled", disabled));
				}
			}
			if (mutations.size > 0) scheduler.schedule(executeMutations);
		});
		this.destroy = () => {
			super.destroy();
			hiddenTextElement?.remove();
			liveRegionElement?.remove();
			eventListeners.forEach((unsubscribe) => unsubscribe());
		};
	}
};
function debounce(fn, wait) {
	let timeout;
	const debounced = () => {
		clearTimeout(timeout);
		timeout = setTimeout(fn, wait);
	};
	debounced.cancel = () => clearTimeout(timeout);
	return debounced;
}
var styleRegistry = /* @__PURE__ */ new Map();
var _roots_dec;
var _targetRoot_dec;
var _sourceRoot_dec;
var _additionalRoots_dec;
var _a;
var _registeredRules;
var _init$1;
var _additionalRoots;
var _StyleInjector_instances;
var syncStyles_fn;
var inject_fn;
var injectStyleElement_fn;
var injectAdoptedSheet_fn;
var _StyleInjector = class _StyleInjector extends (_a = CorePlugin, _additionalRoots_dec = [reactive], _sourceRoot_dec = [derived], _targetRoot_dec = [derived], _roots_dec = [derived], _a) {
	constructor(manager, options) {
		super(manager, options);
		__runInitializers$1(_init$1, 5, this);
		__privateAdd$1(this, _StyleInjector_instances);
		__privateAdd$1(this, _registeredRules, /* @__PURE__ */ new Set());
		__privateAdd$1(this, _additionalRoots, __runInitializers$1(_init$1, 8, this, /* @__PURE__ */ new Set())), __runInitializers$1(_init$1, 11, this);
		this.registerEffect(__privateMethod(this, _StyleInjector_instances, syncStyles_fn));
	}
	/**
	* Registers CSS rules to be injected into the active drag operation's
	* document and shadow roots. The StyleInjector handles tracking
	* which roots need the styles and cleaning up when they're no longer needed.
	*
	* Returns a cleanup function that unregisters the rules.
	*/
	register(cssRules) {
		__privateGet$1(this, _registeredRules).add(cssRules);
		return () => {
			__privateGet$1(this, _registeredRules).delete(cssRules);
		};
	}
	/**
	* Adds an additional root to track for style injection.
	* Returns a cleanup function that removes the root.
	*/
	addRoot(root) {
		f(() => {
			const roots = new Set(this.additionalRoots);
			roots.add(root);
			this.additionalRoots = roots;
		});
		return () => {
			f(() => {
				const roots = new Set(this.additionalRoots);
				roots.delete(root);
				this.additionalRoots = roots;
			});
		};
	}
	get sourceRoot() {
		var _a5;
		const { source } = this.manager.dragOperation;
		return getRoot((_a5 = source == null ? void 0 : source.element) != null ? _a5 : null);
	}
	get targetRoot() {
		var _a5;
		const { target } = this.manager.dragOperation;
		return getRoot((_a5 = target == null ? void 0 : target.element) != null ? _a5 : null);
	}
	get roots() {
		const { status } = this.manager.dragOperation;
		if (status.initializing || status.initialized) {
			const roots = [this.sourceRoot, this.targetRoot].filter((root) => root != null);
			return /* @__PURE__ */ new Set([...roots, ...this.additionalRoots]);
		}
		return /* @__PURE__ */ new Set();
	}
};
_init$1 = __decoratorStart$1(_a);
_registeredRules = /* @__PURE__ */ new WeakMap();
_additionalRoots = /* @__PURE__ */ new WeakMap();
_StyleInjector_instances = /* @__PURE__ */ new WeakSet();
syncStyles_fn = function() {
	const { roots } = this;
	const cleanups = [];
	for (const root of roots) for (const cssRules of __privateGet$1(this, _registeredRules)) cleanups.push(__privateMethod(this, _StyleInjector_instances, inject_fn).call(this, root, cssRules));
	return () => {
		for (const cleanup of cleanups) cleanup();
	};
};
inject_fn = function(root, cssRules) {
	let rootStyles = styleRegistry.get(root);
	if (!rootStyles) {
		rootStyles = /* @__PURE__ */ new Map();
		styleRegistry.set(root, rootStyles);
	}
	let registration = rootStyles.get(cssRules);
	if (!registration) {
		const created = isDocument(root) ? __privateMethod(this, _StyleInjector_instances, injectStyleElement_fn).call(this, root, rootStyles, cssRules) : __privateMethod(this, _StyleInjector_instances, injectAdoptedSheet_fn).call(this, root, rootStyles, cssRules);
		if (!created) return () => {};
		registration = created;
		rootStyles.set(cssRules, registration);
	}
	registration.refCount++;
	let disposed = false;
	return () => {
		if (disposed) return;
		disposed = true;
		registration.refCount--;
		if (registration.refCount === 0) registration.cleanup();
	};
};
/**
* For Document roots, prepend a <style> element to <head> so that any
* @layer declarations appear before layers from regular stylesheets,
* giving them the lowest cascade priority.
*/
injectStyleElement_fn = function(root, rootStyles, cssRules) {
	var _a5;
	const style = root.createElement("style");
	const { nonce } = (_a5 = this.options) != null ? _a5 : {};
	if (nonce) style.setAttribute("nonce", nonce);
	style.textContent = cssRules;
	root.head.prepend(style);
	const observer = new MutationObserver((entries) => {
		for (const entry of entries) for (const node of Array.from(entry.removedNodes)) if (node === style) {
			root.head.prepend(style);
			return;
		}
	});
	observer.observe(root.head, { childList: true });
	return {
		refCount: 0,
		cleanup: () => {
			observer.disconnect();
			style.remove();
			rootStyles.delete(cssRules);
			if (rootStyles.size === 0) styleRegistry.delete(root);
		}
	};
};
/**
* For ShadowRoot roots, use adoptedStyleSheets to avoid DOM side effects
* like interfering with :first-child or :nth-child selectors.
*/
injectAdoptedSheet_fn = function(root, rootStyles, cssRules) {
	if (!("adoptedStyleSheets" in root && Array.isArray(root.adoptedStyleSheets)) && false);
	const targetWindow = root.ownerDocument.defaultView;
	const { CSSStyleSheet } = targetWindow != null ? targetWindow : {};
	if (!CSSStyleSheet) return null;
	const sheet = new CSSStyleSheet();
	sheet.replaceSync(cssRules);
	root.adoptedStyleSheets.push(sheet);
	return {
		refCount: 0,
		cleanup: () => {
			var _a5;
			if (isShadowRoot(root) && ((_a5 = root.host) == null ? void 0 : _a5.isConnected)) {
				const index = root.adoptedStyleSheets.indexOf(sheet);
				if (index !== -1) root.adoptedStyleSheets.splice(index, 1);
			}
			rootStyles.delete(cssRules);
			if (rootStyles.size === 0) styleRegistry.delete(root);
		}
	};
};
__decorateElement$1(_init$1, 4, "additionalRoots", _additionalRoots_dec, _StyleInjector, _additionalRoots);
__decorateElement$1(_init$1, 2, "sourceRoot", _sourceRoot_dec, _StyleInjector);
__decorateElement$1(_init$1, 2, "targetRoot", _targetRoot_dec, _StyleInjector);
__decorateElement$1(_init$1, 2, "roots", _roots_dec, _StyleInjector);
__decoratorMetadata$1(_init$1, _StyleInjector);
_StyleInjector.configure = configurator(_StyleInjector);
var StyleInjector = _StyleInjector;
var Cursor = class extends Plugin {
	constructor(manager, options) {
		super(manager, options);
		this.manager = manager;
		const { cursor = "grabbing" } = options != null ? options : {};
		const styleInjector = manager.registry.plugins.get(StyleInjector);
		const unregisterStyles = styleInjector == null ? void 0 : styleInjector.register(`* { cursor: ${cursor} !important; }`);
		if (unregisterStyles) {
			const originalDestroy = this.destroy.bind(this);
			this.destroy = () => {
				unregisterStyles();
				originalDestroy();
			};
		}
	}
};
var ATTR_PREFIX = "data-dnd-";
var DROPPING_ATTRIBUTE = `${ATTR_PREFIX}dropping`;
var CSS_PREFIX = "--dnd-";
var ATTRIBUTE = `${ATTR_PREFIX}dragging`;
var PLACEHOLDER_ATTRIBUTE = `${ATTR_PREFIX}placeholder`;
var IGNORED_ATTRIBUTES = [
	ATTRIBUTE,
	PLACEHOLDER_ATTRIBUTE,
	"popover",
	"aria-pressed",
	"aria-grabbing"
];
var IGNORED_STYLES = ["view-transition-name"];
var CSS_RULES = `
  :is(:root,:host) [${ATTRIBUTE}] {
    position: fixed !important;
    pointer-events: none !important;
    touch-action: none;
    z-index: calc(infinity);
    will-change: translate;
    top: var(${CSS_PREFIX}top, 0px) !important;
    left: var(${CSS_PREFIX}left, 0px) !important;
    right: unset !important;
    bottom: unset !important;
    width: var(${CSS_PREFIX}width, auto);
    max-width: var(${CSS_PREFIX}width, auto);
    height: var(${CSS_PREFIX}height, auto);
    max-height: var(${CSS_PREFIX}height, auto);
    transform: var(${CSS_PREFIX}transform, none) !important;
    transition: var(${CSS_PREFIX}transition) !important;
  }

  :is(:root,:host) [${PLACEHOLDER_ATTRIBUTE}] {
    transition: none;
  }

  :is(:root,:host) [${PLACEHOLDER_ATTRIBUTE}='hidden'] {
    visibility: hidden;
  }

  [${ATTRIBUTE}] * {
    pointer-events: none !important;
  }

  [${ATTRIBUTE}]:not([${DROPPING_ATTRIBUTE}]) {
    translate: var(${CSS_PREFIX}translate) !important;
  }

  [${ATTRIBUTE}][style*='${CSS_PREFIX}scale'] {
    scale: var(${CSS_PREFIX}scale) !important;
    transform-origin: var(${CSS_PREFIX}transform-origin) !important;
  }

  @layer dnd-kit {
    :where([${ATTRIBUTE}][popover]) {
      overflow: visible;
      background: unset;
      border: unset;
      margin: unset;
      padding: unset;
      color: inherit;

      &:is(input, button) {
        border: revert;
        background: revert;
      }
    }
  }
  [${ATTRIBUTE}]::backdrop, [${ATTR_PREFIX}overlay]:not([${ATTRIBUTE}]) {
    display: none;
    visibility: hidden;
  }
`.replace(/\n+/g, " ").replace(/\s+/g, " ").trim();
function createPlaceholder(source, type = "hidden") {
	return f(() => {
		const { element, manager } = source;
		if (!element || !manager) return;
		const containedDroppables = findContainedDroppables(element, manager.registry.droppables);
		const cleanup = [];
		const placeholder = cloneElement(element);
		const { remove } = placeholder;
		proxyDroppableElements(containedDroppables, placeholder, cleanup);
		configurePlaceholder(placeholder, type);
		placeholder.remove = () => {
			cleanup.forEach((fn) => fn());
			remove.call(placeholder);
		};
		return placeholder;
	});
}
function findContainedDroppables(element, droppables) {
	const containedDroppables = /* @__PURE__ */ new Map();
	for (const droppable of droppables) {
		if (!droppable.element) continue;
		if (element === droppable.element || element.contains(droppable.element)) {
			const identifierAttribute = `${ATTR_PREFIX}${generateUniqueId("dom-id")}`;
			droppable.element.setAttribute(identifierAttribute, "");
			containedDroppables.set(droppable, identifierAttribute);
		}
	}
	return containedDroppables;
}
function proxyDroppableElements(containedDroppables, placeholder, cleanup) {
	for (const [droppable, identifierAttribute] of containedDroppables) {
		if (!droppable.element) continue;
		const selector = `[${identifierAttribute}]`;
		const clonedElement = placeholder.matches(selector) ? placeholder : placeholder.querySelector(selector);
		droppable.element.removeAttribute(identifierAttribute);
		if (!clonedElement) continue;
		const originalElement = droppable.element;
		droppable.proxy = clonedElement;
		clonedElement.removeAttribute(identifierAttribute);
		ProxiedElements.set(originalElement, clonedElement);
		cleanup.push(() => {
			ProxiedElements.delete(originalElement);
			droppable.proxy = void 0;
		});
	}
}
function configurePlaceholder(placeholder, type = "hidden") {
	placeholder.setAttribute("inert", "true");
	placeholder.setAttribute("tab-index", "-1");
	placeholder.setAttribute("aria-hidden", "true");
	placeholder.setAttribute(PLACEHOLDER_ATTRIBUTE, type);
}
function isSameFrame(element, target) {
	if (element === target) return true;
	return getFrameElement(element) === getFrameElement(target);
}
function preventPopoverClose(event) {
	const { target } = event;
	if ("newState" in event && event.newState === "closed" && isElement(target) && target.hasAttribute("popover")) requestAnimationFrame(() => showPopover(target));
}
function isTableRow(element) {
	return element.tagName === "TR";
}
function createElementMutationObserver(element, placeholder, clone) {
	const observer = new MutationObserver((mutations) => {
		let hasChildrenMutations = false;
		for (const mutation of mutations) {
			if (mutation.target !== element) {
				hasChildrenMutations = true;
				continue;
			}
			if (mutation.type !== "attributes") continue;
			const attributeName = mutation.attributeName;
			if (attributeName.startsWith("aria-") || IGNORED_ATTRIBUTES.includes(attributeName)) continue;
			const attributeValue = element.getAttribute(attributeName);
			if (attributeName === "style") {
				if (supportsStyle(element) && supportsStyle(placeholder)) {
					const styles = element.style;
					for (const key of Array.from(placeholder.style)) if (styles.getPropertyValue(key) === "") placeholder.style.removeProperty(key);
					for (const key of Array.from(styles)) {
						if (IGNORED_STYLES.includes(key) || key.startsWith(CSS_PREFIX)) continue;
						const value = styles.getPropertyValue(key);
						placeholder.style.setProperty(key, value);
					}
				}
			} else if (attributeValue !== null) placeholder.setAttribute(attributeName, attributeValue);
			else placeholder.removeAttribute(attributeName);
		}
		if (hasChildrenMutations && clone) placeholder.replaceChildren(...element.cloneNode(true).childNodes);
	});
	observer.observe(element, {
		attributes: true,
		subtree: true,
		childList: true
	});
	return observer;
}
function createDocumentMutationObserver(element, placeholder, feedbackElement) {
	const observer = new MutationObserver((entries) => {
		for (const entry of entries) {
			if (entry.addedNodes.length === 0) continue;
			for (const node of Array.from(entry.addedNodes)) {
				if (node.contains(element) && element.nextElementSibling !== placeholder) {
					element.insertAdjacentElement("afterend", placeholder);
					showPopover(feedbackElement);
					return;
				}
				if (node.contains(placeholder) && placeholder.previousElementSibling !== element) {
					placeholder.insertAdjacentElement("beforebegin", element);
					showPopover(feedbackElement);
					return;
				}
			}
		}
		if (element.isConnected && placeholder.isConnected && element.nextElementSibling !== placeholder) {
			element.insertAdjacentElement("afterend", placeholder);
			showPopover(feedbackElement);
		}
	});
	observer.observe(element.ownerDocument.body, {
		childList: true,
		subtree: true
	});
	return observer;
}
function createResizeObserver(ctx) {
	return new ResizeObserver(() => {
		var _a5, _b2, _c3;
		const placeholderShape = new DOMRectangle(ctx.placeholder, {
			frameTransform: ctx.frameTransform,
			ignoreTransforms: true
		});
		const origin = (_a5 = ctx.transformOrigin) != null ? _a5 : {
			x: 1,
			y: 1
		};
		const dX = (ctx.width - placeholderShape.width) * origin.x + ctx.delta.x;
		const dY = (ctx.height - placeholderShape.height) * origin.y + ctx.delta.y;
		const fixedOffset = getFixedPositionOffset();
		ctx.styles.set({
			width: placeholderShape.width - ctx.widthOffset,
			height: placeholderShape.height - ctx.heightOffset,
			top: ctx.top + dY + fixedOffset.y,
			left: ctx.left + dX + fixedOffset.x
		}, CSS_PREFIX);
		(_b2 = ctx.getElementMutationObserver()) == null || _b2.takeRecords();
		if (isTableRow(ctx.element) && isTableRow(ctx.placeholder)) {
			const cells = Array.from(ctx.element.cells);
			const placeholderCells = Array.from(ctx.placeholder.cells);
			if (!ctx.getSavedCellWidths()) ctx.setSavedCellWidths(cells.map((cell) => cell.style.width));
			for (const [index, cell] of cells.entries()) {
				const placeholderCell = placeholderCells[index];
				cell.style.width = `${placeholderCell.getBoundingClientRect().width}px`;
			}
		}
		const translate = (_c3 = ctx.getTranslate()) != null ? _c3 : {
			x: 0,
			y: 0
		};
		const shapeLeft = ctx.left + dX + fixedOffset.x + translate.x;
		const shapeTop = ctx.top + dY + fixedOffset.y + translate.y;
		const shapeWidth = placeholderShape.width - ctx.widthOffset;
		const shapeHeight = placeholderShape.height - ctx.heightOffset;
		const ft = ctx.frameTransform;
		ctx.dragOperation.shape = new Rectangle(shapeLeft * ft.scaleX + ft.x, shapeTop * ft.scaleY + ft.y, shapeWidth * ft.scaleX, shapeHeight * ft.scaleY);
	});
}
var DEFAULT_DURATION = 250;
var DEFAULT_EASING = "ease";
function runDropAnimation(ctx) {
	var _a5, _b2, _c3, _d2;
	const { animation } = ctx;
	if (typeof animation === "function") {
		const result = animation({
			source: ctx.source,
			element: ctx.element,
			feedbackElement: ctx.feedbackElement,
			placeholder: ctx.placeholder,
			translate: ctx.translate,
			moved: ctx.moved
		});
		Promise.resolve(result).then(() => {
			ctx.cleanup();
			requestAnimationFrame(ctx.restoreFocus);
		});
		return;
	}
	const { duration = DEFAULT_DURATION, easing = DEFAULT_EASING } = animation != null ? animation : {};
	showPopover(ctx.feedbackElement);
	const [, runningAnimation] = (_a5 = getFinalKeyframe(ctx.feedbackElement, (keyframe) => "translate" in keyframe)) != null ? _a5 : [];
	runningAnimation?.pause();
	const target = (_b2 = ctx.placeholder) != null ? _b2 : ctx.element;
	const options = { frameTransform: isSameFrame(ctx.feedbackElement, target) ? null : void 0 };
	const current = new DOMRectangle(ctx.feedbackElement, options);
	const currentTranslate = (_c3 = parseTranslate(getComputedStyles(ctx.feedbackElement).translate)) != null ? _c3 : ctx.translate;
	const final = new DOMRectangle(target, options);
	const delta = Rectangle.delta(current, final, ctx.alignment);
	const finalTranslate = {
		x: currentTranslate.x - delta.x,
		y: currentTranslate.y - delta.y
	};
	const heightKeyframes = Math.round(current.intrinsicHeight) !== Math.round(final.intrinsicHeight) ? {
		minHeight: [`${current.intrinsicHeight}px`, `${final.intrinsicHeight}px`],
		maxHeight: [`${current.intrinsicHeight}px`, `${final.intrinsicHeight}px`]
	} : {};
	const widthKeyframes = Math.round(current.intrinsicWidth) !== Math.round(final.intrinsicWidth) ? {
		minWidth: [`${current.intrinsicWidth}px`, `${final.intrinsicWidth}px`],
		maxWidth: [`${current.intrinsicWidth}px`, `${final.intrinsicWidth}px`]
	} : {};
	ctx.styles.set({ transition: ctx.transition }, CSS_PREFIX);
	ctx.feedbackElement.setAttribute(DROPPING_ATTRIBUTE, "");
	(_d2 = ctx.getElementMutationObserver()) == null || _d2.takeRecords();
	animateTransform({
		element: ctx.feedbackElement,
		keyframes: __spreadProps$1(__spreadValues$1(__spreadValues$1({}, heightKeyframes), widthKeyframes), { translate: [`${currentTranslate.x}px ${currentTranslate.y}px 0`, `${finalTranslate.x}px ${finalTranslate.y}px 0`] }),
		options: {
			duration: prefersReducedMotion(getWindow(ctx.feedbackElement)) ? 0 : ctx.moved || ctx.feedbackElement !== ctx.element ? duration : 0,
			easing
		}
	}).then(() => {
		ctx.feedbackElement.removeAttribute(DROPPING_ATTRIBUTE);
		runningAnimation?.finish();
		ctx.cleanup();
		requestAnimationFrame(ctx.restoreFocus);
	});
}
var _overlay_dec;
var _a2;
var _init2;
var _overlay;
var _Feedback_instances;
var trackOverlayRoot_fn;
var render_fn;
var _Feedback = class _Feedback extends (_a2 = Plugin, _overlay_dec = [reactive], _a2) {
	constructor(manager, options) {
		super(manager, options);
		__privateAdd$1(this, _Feedback_instances);
		__privateAdd$1(this, _overlay, __runInitializers$1(_init2, 8, this)), __runInitializers$1(_init2, 11, this);
		this.state = {
			initial: {},
			current: {}
		};
		const styleInjector = manager.registry.plugins.get(StyleInjector);
		const unregisterStyles = styleInjector == null ? void 0 : styleInjector.register(CSS_RULES);
		if (unregisterStyles) {
			const originalDestroy = this.destroy.bind(this);
			this.destroy = () => {
				unregisterStyles();
				originalDestroy();
			};
		}
		this.registerEffect(__privateMethod(this, _Feedback_instances, trackOverlayRoot_fn).bind(this, styleInjector));
		this.registerEffect(__privateMethod(this, _Feedback_instances, render_fn));
	}
};
_init2 = __decoratorStart$1(_a2);
_overlay = /* @__PURE__ */ new WeakMap();
_Feedback_instances = /* @__PURE__ */ new WeakSet();
trackOverlayRoot_fn = function(styleInjector) {
	const { overlay } = this;
	if (!overlay || !styleInjector) return;
	const root = getRoot(overlay);
	if (!root) return;
	return styleInjector.addRoot(root);
};
render_fn = function() {
	var _a5, _b2, _c3, _d2, _e, _f, _g;
	const { state, manager, options } = this;
	const { dragOperation } = manager;
	const { position, source, status } = dragOperation;
	if (status.idle) {
		state.current = {};
		state.initial = {};
		return;
	}
	if (!source) return;
	const { element } = source;
	const entityOptions = source.pluginConfig(_Feedback);
	const feedbackOption = (_b2 = (_a5 = entityOptions == null ? void 0 : entityOptions.feedback) != null ? _a5 : options == null ? void 0 : options.feedback) != null ? _b2 : "default";
	const feedback = typeof feedbackOption === "function" ? feedbackOption(source, manager) : feedbackOption;
	if (!element || feedback === "none" || !status.initialized || status.initializing) return;
	const { initial } = state;
	const feedbackElement = (_c3 = this.overlay) != null ? _c3 : element;
	const frameTransform = getFrameTransform(feedbackElement);
	const elementFrameTransform = getFrameTransform(element);
	const crossFrame = !isSameFrame(element, feedbackElement);
	const shape = new DOMRectangle(element, {
		frameTransform: crossFrame ? elementFrameTransform : null,
		ignoreTransforms: !crossFrame
	});
	const scaleDelta = {
		x: elementFrameTransform.scaleX / frameTransform.scaleX,
		y: elementFrameTransform.scaleY / frameTransform.scaleY
	};
	let { width, height, top, left } = shape;
	if (crossFrame) {
		width = width / scaleDelta.x;
		height = height / scaleDelta.y;
	}
	const styles = new Styles(feedbackElement);
	const elementStyles = getComputedStyles(element);
	const { transition, translate, boxSizing, paddingBlockStart, paddingBlockEnd, paddingInlineStart, paddingInlineEnd, borderInlineStartWidth, borderInlineEndWidth, borderBlockStartWidth, borderBlockEndWidth } = elementStyles;
	const feedbackTransition = transition.split(",").filter((t) => !/^\s*(transform|translate|scale)\b/.test(t)).join(",");
	const parsedTransform = parseTransform(elementStyles);
	const initialTransformStyle = elementStyles.transform;
	const clone = feedback === "clone";
	const contentBox = boxSizing === "content-box";
	const widthOffset = contentBox ? parseInt(paddingInlineStart) + parseInt(paddingInlineEnd) + parseInt(borderInlineStartWidth) + parseInt(borderInlineEndWidth) : 0;
	const heightOffset = contentBox ? parseInt(paddingBlockStart) + parseInt(paddingBlockEnd) + parseInt(borderBlockStartWidth) + parseInt(borderBlockEndWidth) : 0;
	const placeholder = feedback !== "move" && !this.overlay ? createPlaceholder(source, clone ? "clone" : "hidden") : null;
	const isKeyboardOperation = f(() => isKeyboardEvent(manager.dragOperation.activatorEvent));
	if (!initial.translate) {
		if (this.overlay && parsedTransform) initial.translate = {
			x: parsedTransform.x,
			y: parsedTransform.y
		};
		else if (translate !== "none") {
			const parsedTranslate = parseTranslate(translate);
			if (parsedTranslate) initial.translate = parsedTranslate;
		}
	}
	if (!initial.transformOrigin) {
		const current = f(() => position.current);
		const visualLeft = left + ((_d2 = parsedTransform == null ? void 0 : parsedTransform.x) != null ? _d2 : 0);
		const visualTop = top + ((_e = parsedTransform == null ? void 0 : parsedTransform.y) != null ? _e : 0);
		initial.transformOrigin = {
			x: (current.x - visualLeft * frameTransform.scaleX - frameTransform.x) / (width * frameTransform.scaleX),
			y: (current.y - visualTop * frameTransform.scaleY - frameTransform.y) / (height * frameTransform.scaleY)
		};
	}
	const { transformOrigin } = initial;
	const relativeTop = top * frameTransform.scaleY + frameTransform.y;
	const relativeLeft = left * frameTransform.scaleX + frameTransform.x;
	if (!initial.coordinates) {
		initial.coordinates = {
			x: relativeLeft,
			y: relativeTop
		};
		if (scaleDelta.x !== 1 || scaleDelta.y !== 1) {
			const { scaleX, scaleY } = elementFrameTransform;
			const { x: tX2, y: tY2 } = transformOrigin;
			initial.coordinates.x += (width * scaleX - width) * tX2;
			initial.coordinates.y += (height * scaleY - height) * tY2;
		}
	}
	if (!initial.dimensions) initial.dimensions = {
		width,
		height
	};
	if (!initial.frameTransform) initial.frameTransform = frameTransform;
	const coordinatesDelta = {
		x: initial.coordinates.x - relativeLeft,
		y: initial.coordinates.y - relativeTop
	};
	const sizeDelta = {
		width: (initial.dimensions.width * initial.frameTransform.scaleX - width * frameTransform.scaleX) * transformOrigin.x,
		height: (initial.dimensions.height * initial.frameTransform.scaleY - height * frameTransform.scaleY) * transformOrigin.y
	};
	const delta = {
		x: coordinatesDelta.x / frameTransform.scaleX + sizeDelta.width,
		y: coordinatesDelta.y / frameTransform.scaleY + sizeDelta.height
	};
	const projected = {
		left: left + delta.x,
		top: top + delta.y
	};
	feedbackElement.setAttribute(ATTRIBUTE, "true");
	const transform = f(() => dragOperation.transform);
	const initialTranslate = (_f = initial.translate) != null ? _f : {
		x: 0,
		y: 0
	};
	const tX = transform.x * frameTransform.scaleX + initialTranslate.x;
	const tY = transform.y * frameTransform.scaleY + initialTranslate.y;
	const fixedOffset = getFixedPositionOffset();
	styles.set({
		width: width - widthOffset,
		height: height - heightOffset,
		top: projected.top + fixedOffset.y,
		left: projected.left + fixedOffset.x,
		translate: `${tX}px ${tY}px 0`,
		transform: this.overlay ? "none" : initialTransformStyle,
		transition: feedbackTransition ? `${feedbackTransition}, translate 0ms linear` : "translate 0ms linear",
		scale: crossFrame ? `${scaleDelta.x} ${scaleDelta.y}` : "",
		"transform-origin": `${transformOrigin.x * 100}% ${transformOrigin.y * 100}%`
	}, CSS_PREFIX);
	if (placeholder) {
		element.insertAdjacentElement("afterend", placeholder);
		if (options == null ? void 0 : options.rootElement) (typeof options.rootElement === "function" ? options.rootElement(source) : options.rootElement).appendChild(element);
	}
	if (supportsPopover(feedbackElement)) {
		if (!feedbackElement.hasAttribute("popover")) feedbackElement.setAttribute("popover", "manual");
		showPopover(feedbackElement);
		feedbackElement.addEventListener("beforetoggle", preventPopoverClose);
	}
	let elementMutationObserver;
	let documentMutationObserver;
	let savedCellWidths;
	const resizeObserver = createResizeObserver({
		placeholder,
		element,
		feedbackElement,
		frameTransform,
		transformOrigin,
		width,
		height,
		top,
		left,
		widthOffset,
		heightOffset,
		delta,
		styles,
		dragOperation,
		getTranslate: () => state.current.translate,
		getElementMutationObserver: () => elementMutationObserver,
		getSavedCellWidths: () => savedCellWidths,
		setSavedCellWidths: (widths) => {
			savedCellWidths = widths;
		}
	});
	const initialShape = new DOMRectangle(feedbackElement);
	f(() => dragOperation.shape = initialShape);
	const feedbackWindow = getWindow(feedbackElement);
	const handleWindowResize = (event) => {
		this.manager.actions.stop({ event });
	};
	const reducedMotion = prefersReducedMotion(feedbackWindow);
	if (isKeyboardOperation) feedbackWindow.addEventListener("resize", handleWindowResize);
	if (f(() => source.status) === "idle") requestAnimationFrame(() => source.status = "dragging");
	if (placeholder) {
		resizeObserver.observe(placeholder);
		elementMutationObserver = createElementMutationObserver(element, placeholder, clone);
		documentMutationObserver = createDocumentMutationObserver(element, placeholder, feedbackElement);
	}
	const id = (_g = manager.dragOperation.source) == null ? void 0 : _g.id;
	const restoreFocus = () => {
		var _a6;
		if (!isKeyboardOperation || id == null) return;
		const draggable = manager.registry.draggables.get(id);
		const focusTarget = (_a6 = draggable == null ? void 0 : draggable.handle) != null ? _a6 : draggable == null ? void 0 : draggable.element;
		if (isHTMLElement(focusTarget)) focusTarget.focus();
	};
	const cleanup = () => {
		var _a6;
		elementMutationObserver?.disconnect();
		documentMutationObserver?.disconnect();
		resizeObserver.disconnect();
		feedbackWindow.removeEventListener("resize", handleWindowResize);
		if (supportsPopover(feedbackElement)) {
			feedbackElement.removeEventListener("beforetoggle", preventPopoverClose);
			feedbackElement.removeAttribute("popover");
		}
		feedbackElement.removeAttribute(ATTRIBUTE);
		styles.reset();
		if (savedCellWidths && isTableRow(element)) {
			const cells = Array.from(element.cells);
			for (const [index, cell] of cells.entries()) cell.style.width = (_a6 = savedCellWidths[index]) != null ? _a6 : "";
		}
		source.status = "idle";
		const moved = state.current.translate != null;
		const isDragging = dragOperation.status.dragging;
		if (placeholder && (!isDragging && moved || placeholder.parentElement !== feedbackElement.parentElement) && feedbackElement.isConnected) placeholder.replaceWith(feedbackElement);
		placeholder?.remove();
	};
	const optionsDropAnimation = options == null ? void 0 : options.dropAnimation;
	const feedbackPlugin = this;
	const cleanupEffects = effects(() => {
		var _a6, _b3, _c4;
		const { transform: transform2, status: status2 } = dragOperation;
		if (!transform2.x && !transform2.y && !state.current.translate) return;
		if (status2.dragging) {
			const initialTranslate2 = (_a6 = initial.translate) != null ? _a6 : {
				x: 0,
				y: 0
			};
			const translate2 = {
				x: transform2.x / frameTransform.scaleX + initialTranslate2.x,
				y: transform2.y / frameTransform.scaleY + initialTranslate2.y
			};
			const previousTranslate = state.current.translate;
			const modifiers = f(() => dragOperation.modifiers);
			const currentShape = f(() => {
				var _a7;
				return (_a7 = dragOperation.shape) == null ? void 0 : _a7.current;
			});
			const keyboardTransition = options == null ? void 0 : options.keyboardTransition;
			const translateTransition = isKeyboardOperation && !reducedMotion && keyboardTransition !== null ? `${(_b3 = keyboardTransition == null ? void 0 : keyboardTransition.duration) != null ? _b3 : 250}ms ${(_c4 = keyboardTransition == null ? void 0 : keyboardTransition.easing) != null ? _c4 : "cubic-bezier(0.25, 1, 0.5, 1)"}` : "0ms linear";
			styles.set({
				transition: feedbackTransition ? `${feedbackTransition}, translate ${translateTransition}` : `translate ${translateTransition}`,
				translate: `${translate2.x}px ${translate2.y}px 0`
			}, CSS_PREFIX);
			elementMutationObserver?.takeRecords();
			if (currentShape && currentShape !== initialShape && previousTranslate && !modifiers.length) {
				const delta2 = Point.delta(translate2, previousTranslate);
				dragOperation.shape = Rectangle.from(currentShape.boundingRectangle).translate(delta2.x * frameTransform.scaleX, delta2.y * frameTransform.scaleY);
			} else dragOperation.shape = new DOMRectangle(feedbackElement);
			state.current.translate = translate2;
		}
	}, function() {
		if (dragOperation.status.dropped) {
			this.dispose();
			source.status = "dropping";
			const dropAnimationConfig = (entityOptions == null ? void 0 : entityOptions.dropAnimation) !== void 0 ? entityOptions.dropAnimation : feedbackPlugin.dropAnimation !== void 0 ? feedbackPlugin.dropAnimation : optionsDropAnimation;
			let translate2 = state.current.translate;
			const moved = translate2 != null;
			if (!translate2 && element !== feedbackElement) translate2 = {
				x: 0,
				y: 0
			};
			if (!translate2 || dropAnimationConfig === null) {
				cleanup();
				return;
			}
			manager.renderer.rendering.then(() => {
				runDropAnimation({
					source,
					element,
					feedbackElement,
					placeholder,
					translate: translate2,
					moved,
					transition,
					alignment: source.alignment,
					styles,
					animation: dropAnimationConfig != null ? dropAnimationConfig : void 0,
					getElementMutationObserver: () => elementMutationObserver,
					cleanup,
					restoreFocus
				});
			});
		}
	});
	return () => {
		cleanup();
		cleanupEffects();
	};
};
__decorateElement$1(_init2, 4, "overlay", _overlay_dec, _Feedback, _overlay);
__decoratorMetadata$1(_init2, _Feedback);
_Feedback.configure = configurator(_Feedback);
var Feedback = _Feedback;
var LOCKED = true;
var UNLOCKED = false;
var _dec;
var _a3;
var _dec2;
var _b = (_dec2 = [reactive], ScrollDirection.Forward);
var _init3;
var __b;
var __a;
_a3 = (_dec = [reactive], ScrollDirection.Reverse);
var ScrollLock = class {
	constructor() {
		__privateAdd$1(this, __b, __runInitializers$1(_init3, 8, this, LOCKED)), __runInitializers$1(_init3, 11, this);
		__privateAdd$1(this, __a, __runInitializers$1(_init3, 12, this, LOCKED)), __runInitializers$1(_init3, 15, this);
	}
	isLocked(direction) {
		if (direction === ScrollDirection.Idle) return false;
		if (direction == null) return this[ScrollDirection.Forward] === LOCKED && this[ScrollDirection.Reverse] === LOCKED;
		return this[direction] === LOCKED;
	}
	unlock(direction) {
		if (direction === ScrollDirection.Idle) return;
		this[direction] = UNLOCKED;
	}
};
_init3 = __decoratorStart$1(null);
__b = /* @__PURE__ */ new WeakMap();
__a = /* @__PURE__ */ new WeakMap();
__decorateElement$1(_init3, 4, _b, _dec2, ScrollLock, __b);
__decorateElement$1(_init3, 4, _a3, _dec, ScrollLock, __a);
__decoratorMetadata$1(_init3, ScrollLock);
var DIRECTIONS = [ScrollDirection.Forward, ScrollDirection.Reverse];
var ScrollIntent = class {
	constructor() {
		this.x = new ScrollLock();
		this.y = new ScrollLock();
	}
	isLocked() {
		return this.x.isLocked() && this.y.isLocked();
	}
};
var ScrollIntentTracker = class extends Plugin {
	constructor(manager) {
		super(manager);
		const scrollIntent = a(new ScrollIntent());
		let previousDelta = null;
		this.signal = scrollIntent;
		x(() => {
			const { status } = manager.dragOperation;
			if (!status.initialized) {
				previousDelta = null;
				scrollIntent.value = new ScrollIntent();
				return;
			}
			const { delta } = manager.dragOperation.position;
			if (previousDelta) {
				const directions = {
					x: getDirection$1(delta.x, previousDelta.x),
					y: getDirection$1(delta.y, previousDelta.y)
				};
				const intent = scrollIntent.peek();
				n(() => {
					for (const axis of Axes) for (const direction of DIRECTIONS) if (directions[axis] === direction) intent[axis].unlock(direction);
					scrollIntent.value = intent;
				});
			}
			previousDelta = delta;
		});
	}
	get current() {
		return this.signal.peek();
	}
};
function getDirection$1(a, b) {
	return Math.sign(a - b);
}
var _autoScrolling_dec;
var _a4;
var _init4;
var _autoScrolling;
var _meta;
var _scroll;
var Scroller = class extends (_a4 = CorePlugin, _autoScrolling_dec = [reactive], _a4) {
	constructor(manager) {
		super(manager);
		__privateAdd$1(this, _autoScrolling, __runInitializers$1(_init4, 8, this, false)), __runInitializers$1(_init4, 11, this);
		__privateAdd$1(this, _meta);
		__privateAdd$1(this, _scroll, () => {
			if (!__privateGet$1(this, _meta)) return;
			const { element, by } = __privateGet$1(this, _meta);
			if (by.y) element.scrollTop += by.y;
			if (by.x) element.scrollLeft += by.x;
		});
		this.scroll = (options, scrollOptions) => {
			var _a5;
			if (this.disabled) return false;
			const elements = this.getScrollableElements();
			if (!elements) {
				__privateSet$1(this, _meta, void 0);
				return false;
			}
			const { position } = this.manager.dragOperation;
			const currentPosition = position == null ? void 0 : position.current;
			if (currentPosition) {
				const { by } = options != null ? options : {};
				const intent = by ? {
					x: getScrollIntent(by.x),
					y: getScrollIntent(by.y)
				} : void 0;
				const scrollIntent = intent ? void 0 : this.scrollIntentTracker.current;
				if (scrollIntent == null ? void 0 : scrollIntent.isLocked()) return false;
				for (const scrollableElement of elements) {
					const elementCanScroll = canScroll(scrollableElement, by);
					if (elementCanScroll.x || elementCanScroll.y) {
						const { speed, direction } = detectScrollIntent(scrollableElement, currentPosition, intent, scrollOptions == null ? void 0 : scrollOptions.acceleration, scrollOptions == null ? void 0 : scrollOptions.threshold);
						if (scrollIntent) {
							for (const axis of Axes) if (scrollIntent[axis].isLocked(direction[axis])) {
								speed[axis] = 0;
								direction[axis] = 0;
							}
						}
						if (direction.x || direction.y) {
							const { x, y } = by != null ? by : direction;
							const scrollLeftBy = x * speed.x;
							const scrollTopBy = y * speed.y;
							if (scrollLeftBy || scrollTopBy) {
								const previousScrollBy = (_a5 = __privateGet$1(this, _meta)) == null ? void 0 : _a5.by;
								if (this.autoScrolling && previousScrollBy) {
									if (previousScrollBy.x && !scrollLeftBy || previousScrollBy.y && !scrollTopBy) continue;
								}
								__privateSet$1(this, _meta, {
									element: scrollableElement,
									by: {
										x: scrollLeftBy,
										y: scrollTopBy
									}
								});
								scheduler.schedule(__privateGet$1(this, _scroll));
								return true;
							}
						}
					}
				}
			}
			__privateSet$1(this, _meta, void 0);
			return false;
		};
		let previousElementFromPoint = null;
		let previousScrollableElements = null;
		const elementFromPoint = computed(() => {
			const { position, source } = manager.dragOperation;
			if (!position) return null;
			const element = getElementFromPoint(getRoot(source == null ? void 0 : source.element), position.current);
			if (element) previousElementFromPoint = element;
			return element != null ? element : previousElementFromPoint;
		});
		const scrollableElements = computed(() => {
			const element = elementFromPoint.value;
			const { documentElement } = getDocument(element);
			if (!element || element === documentElement) {
				const { target } = manager.dragOperation;
				const targetElement = target == null ? void 0 : target.element;
				if (targetElement) {
					const elements = getScrollableAncestors(targetElement, { excludeElement: false });
					previousScrollableElements = elements;
					return elements;
				}
			}
			if (element) {
				const elements = getScrollableAncestors(element, { excludeElement: false });
				if (this.autoScrolling && previousScrollableElements && elements.size < (previousScrollableElements == null ? void 0 : previousScrollableElements.size)) return previousScrollableElements;
				previousScrollableElements = elements;
				return elements;
			}
			previousScrollableElements = null;
			return null;
		}, deepEqual);
		this.getScrollableElements = () => {
			return scrollableElements.value;
		};
		this.scrollIntentTracker = new ScrollIntentTracker(manager);
		this.destroy = manager.monitor.addEventListener("dragmove", (event) => {
			if (this.disabled || event.defaultPrevented || !isKeyboardEvent(manager.dragOperation.activatorEvent) || !event.by) return;
			if (this.scroll({ by: event.by })) event.preventDefault();
		});
	}
};
_init4 = __decoratorStart$1(_a4);
_autoScrolling = /* @__PURE__ */ new WeakMap();
_meta = /* @__PURE__ */ new WeakMap();
_scroll = /* @__PURE__ */ new WeakMap();
__decorateElement$1(_init4, 4, "autoScrolling", _autoScrolling_dec, Scroller, _autoScrolling);
__decoratorMetadata$1(_init4, Scroller);
function getScrollIntent(value) {
	if (value > 0) return ScrollDirection.Forward;
	if (value < 0) return ScrollDirection.Reverse;
	return ScrollDirection.Idle;
}
var Scheduler = class {
	constructor(scheduler5) {
		this.scheduler = scheduler5;
		this.pending = false;
		this.tasks = /* @__PURE__ */ new Set();
		this.resolvers = /* @__PURE__ */ new Set();
		this.flush = () => {
			const { tasks, resolvers } = this;
			this.pending = false;
			this.tasks = /* @__PURE__ */ new Set();
			this.resolvers = /* @__PURE__ */ new Set();
			for (const task of tasks) task();
			for (const resolve of resolvers) resolve();
		};
	}
	schedule(task) {
		this.tasks.add(task);
		if (!this.pending) {
			this.pending = true;
			this.scheduler(this.flush);
		}
		return new Promise((resolve) => this.resolvers.add(resolve));
	}
};
var scheduler3 = new Scheduler((callback) => {
	if (typeof requestAnimationFrame === "function") requestAnimationFrame(callback);
	else callback();
});
var AUTOSCROLL_INTERVAL = 10;
var _AutoScroller = class _AutoScroller extends Plugin {
	constructor(manager, options) {
		super(manager, options);
		const scroller = manager.registry.plugins.get(Scroller);
		if (!scroller) throw new Error("AutoScroller plugin depends on Scroller plugin");
		this.destroy = x(() => {
			var _a5, _b2, _c3;
			if (this.disabled) return;
			const { position: _, status } = manager.dragOperation;
			if (status.dragging) {
				const scrollOptions = {
					acceleration: (_a5 = this.options) == null ? void 0 : _a5.acceleration,
					threshold: typeof ((_b2 = this.options) == null ? void 0 : _b2.threshold) === "number" ? {
						x: this.options.threshold,
						y: this.options.threshold
					} : (_c3 = this.options) == null ? void 0 : _c3.threshold
				};
				if (scroller.scroll(void 0, scrollOptions)) {
					scroller.autoScrolling = true;
					const interval = setInterval(() => scheduler3.schedule(() => scroller.scroll(void 0, scrollOptions)), AUTOSCROLL_INTERVAL);
					return () => {
						clearInterval(interval);
					};
				} else scroller.autoScrolling = false;
			}
		});
	}
};
_AutoScroller.configure = configurator(_AutoScroller);
var AutoScroller = _AutoScroller;
var listenerOptions = {
	capture: true,
	passive: true
};
var _timeout;
var ScrollListener = class extends CorePlugin {
	constructor(manager) {
		super(manager);
		__privateAdd$1(this, _timeout);
		this.handleScroll = () => {
			if (__privateGet$1(this, _timeout) == null) __privateSet$1(this, _timeout, setTimeout(() => {
				this.manager.collisionObserver.forceUpdate(false);
				__privateSet$1(this, _timeout, void 0);
			}, 50));
		};
		const { dragOperation } = this.manager;
		this.destroy = x(() => {
			var _a5, _b2, _c3;
			if (dragOperation.status.dragging) {
				const root = (_c3 = (_b2 = (_a5 = dragOperation.source) == null ? void 0 : _a5.element) == null ? void 0 : _b2.ownerDocument) != null ? _c3 : document;
				root.addEventListener("scroll", this.handleScroll, listenerOptions);
				return () => {
					root.removeEventListener("scroll", this.handleScroll, listenerOptions);
				};
			}
		});
	}
};
_timeout = /* @__PURE__ */ new WeakMap();
var CSS_RULES2 = "* { user-select: none !important; -webkit-user-select: none !important; }";
var PreventSelection = class extends Plugin {
	constructor(manager) {
		super(manager);
		this.manager = manager;
		const styleInjector = manager.registry.plugins.get(StyleInjector);
		const unregisterStyles = styleInjector == null ? void 0 : styleInjector.register(CSS_RULES2);
		this.destroy = x(() => {
			const { dragOperation } = this.manager;
			if (dragOperation.status.initialized) {
				removeSelection();
				document.addEventListener("selectionchange", removeSelection, { capture: true });
				return () => {
					document.removeEventListener("selectionchange", removeSelection, { capture: true });
				};
			}
		});
		if (unregisterStyles) {
			const originalDestroy = this.destroy.bind(this);
			this.destroy = () => {
				unregisterStyles();
				originalDestroy();
			};
		}
	}
};
function removeSelection() {
	var _a5;
	(_a5 = document.getSelection()) == null || _a5.removeAllRanges();
}
var defaults = Object.freeze({
	offset: 10,
	keyboardCodes: {
		start: ["Space", "Enter"],
		cancel: ["Escape"],
		end: [
			"Space",
			"Enter",
			"Tab"
		],
		up: ["ArrowUp"],
		down: ["ArrowDown"],
		left: ["ArrowLeft"],
		right: ["ArrowRight"]
	},
	preventActivation(event, source) {
		var _a5;
		const target = (_a5 = source.handle) != null ? _a5 : source.element;
		return event.target !== target;
	}
});
var _cleanupFunctions;
var _KeyboardSensor = class _KeyboardSensor extends Sensor {
	constructor(manager, options) {
		super(manager);
		this.manager = manager;
		this.options = options;
		__privateAdd$1(this, _cleanupFunctions, []);
		this.listeners = new Listeners();
		this.handleSourceKeyDown = (event, source, options) => {
			if (this.disabled || event.defaultPrevented) return;
			if (!isElement(event.target)) return;
			if (source.disabled) return;
			const { keyboardCodes = defaults.keyboardCodes, preventActivation = defaults.preventActivation } = options != null ? options : {};
			if (!keyboardCodes.start.includes(event.code)) return;
			if (!this.manager.dragOperation.status.idle) return;
			if (preventActivation == null ? void 0 : preventActivation(event, source)) return;
			this.handleStart(event, source, options);
		};
	}
	bind(source, options = this.options) {
		return x(() => {
			var _a5;
			const target = (_a5 = source.handle) != null ? _a5 : source.element;
			const listener = (event) => {
				if (isKeyboardEvent(event)) this.handleSourceKeyDown(event, source, options);
			};
			if (target) {
				target.addEventListener("keydown", listener);
				return () => {
					target.removeEventListener("keydown", listener);
				};
			}
		});
	}
	handleStart(event, source, options) {
		const { element } = source;
		if (!element) throw new Error("Source draggable does not have an associated element");
		event.preventDefault();
		event.stopImmediatePropagation();
		scrollIntoViewIfNeeded(element);
		const { center } = new DOMRectangle(element);
		if (this.manager.actions.start({
			event,
			coordinates: {
				x: center.x,
				y: center.y
			},
			source
		}).signal.aborted) return this.cleanup();
		this.sideEffects();
		const sourceDocument = getDocument(element);
		const listeners = [this.listeners.bind(sourceDocument, [{
			type: "keydown",
			listener: (event2) => this.handleKeyDown(event2, source, options),
			options: { capture: true }
		}])];
		__privateGet$1(this, _cleanupFunctions).push(...listeners);
	}
	handleKeyDown(event, _source, options) {
		const { keyboardCodes = defaults.keyboardCodes } = options != null ? options : {};
		if (isKeycode(event, [...keyboardCodes.end, ...keyboardCodes.cancel])) {
			event.preventDefault();
			const canceled = isKeycode(event, keyboardCodes.cancel);
			this.handleEnd(event, canceled);
			return;
		}
		if (isKeycode(event, keyboardCodes.up)) this.handleMove("up", event);
		else if (isKeycode(event, keyboardCodes.down)) this.handleMove("down", event);
		if (isKeycode(event, keyboardCodes.left)) this.handleMove("left", event);
		else if (isKeycode(event, keyboardCodes.right)) this.handleMove("right", event);
	}
	handleEnd(event, canceled) {
		this.manager.actions.stop({
			event,
			canceled
		});
		this.cleanup();
	}
	handleMove(direction, event) {
		var _a5, _b2;
		const { shape } = this.manager.dragOperation;
		const factor = event.shiftKey ? 5 : 1;
		let by = {
			x: 0,
			y: 0
		};
		let offset = (_b2 = (_a5 = this.options) == null ? void 0 : _a5.offset) != null ? _b2 : defaults.offset;
		if (typeof offset === "number") offset = {
			x: offset,
			y: offset
		};
		if (!shape) return;
		switch (direction) {
			case "up":
				by = {
					x: 0,
					y: -offset.y * factor
				};
				break;
			case "down":
				by = {
					x: 0,
					y: offset.y * factor
				};
				break;
			case "left":
				by = {
					x: -offset.x * factor,
					y: 0
				};
				break;
			case "right": by = {
				x: offset.x * factor,
				y: 0
			};
		}
		if (by.x || by.y) {
			event.preventDefault();
			this.manager.actions.move({
				event,
				by
			});
		}
	}
	sideEffects() {
		const autoScroller = this.manager.registry.plugins.get(AutoScroller);
		if ((autoScroller == null ? void 0 : autoScroller.disabled) === false) {
			autoScroller.disable();
			__privateGet$1(this, _cleanupFunctions).push(() => {
				autoScroller.enable();
			});
		}
	}
	cleanup() {
		__privateGet$1(this, _cleanupFunctions).forEach((cleanup) => cleanup());
		__privateSet$1(this, _cleanupFunctions, []);
	}
	destroy() {
		this.cleanup();
		this.listeners.clear();
	}
};
_cleanupFunctions = /* @__PURE__ */ new WeakMap();
_KeyboardSensor.configure = configurator(_KeyboardSensor);
_KeyboardSensor.defaults = defaults;
var KeyboardSensor = _KeyboardSensor;
function isKeycode(event, codes) {
	return codes.includes(event.code);
}
var _coordinates;
var DistanceConstraint = class extends ActivationConstraint {
	constructor() {
		super(...arguments);
		__privateAdd$1(this, _coordinates);
	}
	onEvent(event) {
		switch (event.type) {
			case "pointerdown":
				__privateSet$1(this, _coordinates, getEventCoordinates(event));
				break;
			case "pointermove":
				if (!__privateGet$1(this, _coordinates)) return;
				const { x, y } = getEventCoordinates(event);
				const delta = {
					x: x - __privateGet$1(this, _coordinates).x,
					y: y - __privateGet$1(this, _coordinates).y
				};
				const { tolerance } = this.options;
				if (tolerance && exceedsDistance(delta, tolerance)) {
					this.abort();
					return;
				}
				if (exceedsDistance(delta, this.options.value)) this.activate(event);
				break;
			case "pointerup": this.abort();
		}
	}
	abort() {
		__privateSet$1(this, _coordinates, void 0);
	}
};
_coordinates = /* @__PURE__ */ new WeakMap();
var _timeout2;
var _coordinates2;
var DelayConstraint = class extends ActivationConstraint {
	constructor() {
		super(...arguments);
		__privateAdd$1(this, _timeout2);
		__privateAdd$1(this, _coordinates2);
	}
	onEvent(event) {
		switch (event.type) {
			case "pointerdown":
				__privateSet$1(this, _coordinates2, getEventCoordinates(event));
				__privateSet$1(this, _timeout2, setTimeout(() => this.activate(event), this.options.value));
				break;
			case "pointermove":
				if (!__privateGet$1(this, _coordinates2)) return;
				const { x, y } = getEventCoordinates(event);
				const delta = {
					x: x - __privateGet$1(this, _coordinates2).x,
					y: y - __privateGet$1(this, _coordinates2).y
				};
				if (exceedsDistance(delta, this.options.tolerance)) this.abort();
				break;
			case "pointerup": this.abort();
		}
	}
	abort() {
		if (__privateGet$1(this, _timeout2)) {
			clearTimeout(__privateGet$1(this, _timeout2));
			__privateSet$1(this, _coordinates2, void 0);
			__privateSet$1(this, _timeout2, void 0);
		}
	}
};
_timeout2 = /* @__PURE__ */ new WeakMap();
_coordinates2 = /* @__PURE__ */ new WeakMap();
var PointerActivationConstraints = class {};
PointerActivationConstraints.Delay = DelayConstraint;
PointerActivationConstraints.Distance = DistanceConstraint;
var defaults2 = Object.freeze({
	activationConstraints(event, source) {
		var _a5;
		const { pointerType, target } = event;
		if (pointerType === "mouse" && isElement(target) && (source.handle === target || ((_a5 = source.handle) == null ? void 0 : _a5.contains(target)))) return;
		if (pointerType === "touch") return [new PointerActivationConstraints.Delay({
			value: 250,
			tolerance: 5
		})];
		if (isTextInput(target) && !event.defaultPrevented) return [new PointerActivationConstraints.Delay({
			value: 200,
			tolerance: 0
		})];
		return [new PointerActivationConstraints.Delay({
			value: 200,
			tolerance: 10
		}), new PointerActivationConstraints.Distance({ value: 5 })];
	},
	preventActivation(event, source) {
		var _a5;
		const { target } = event;
		if (target === source.element) return false;
		if (target === source.handle) return false;
		if (!isElement(target)) return false;
		if ((_a5 = source.handle) == null ? void 0 : _a5.contains(target)) return false;
		return isInteractiveElement(target);
	}
});
var _cleanup;
var _PointerSensor = class _PointerSensor extends Sensor {
	constructor(manager, options) {
		super(manager);
		this.manager = manager;
		this.options = options;
		__privateAdd$1(this, _cleanup, /* @__PURE__ */ new Set());
		this.listeners = new Listeners();
		this.latest = {
			event: void 0,
			coordinates: void 0
		};
		this.handleMove = () => {
			const { event, coordinates: to } = this.latest;
			if (!event || !to) return;
			this.manager.actions.move({
				event,
				to
			});
		};
		this.handleCancel = this.handleCancel.bind(this);
		this.handlePointerUp = this.handlePointerUp.bind(this);
		this.handleKeyDown = this.handleKeyDown.bind(this);
	}
	activationConstraints(event, source, options = this.options) {
		const { activationConstraints = defaults2.activationConstraints } = options != null ? options : {};
		return typeof activationConstraints === "function" ? activationConstraints(event, source) : activationConstraints;
	}
	bind(source, options = this.options) {
		return x(() => {
			var _a5;
			const controller = new AbortController();
			const { signal: signal3 } = controller;
			const listener = (event) => {
				if (isPointerEvent(event)) this.handlePointerDown(event, source, options);
			};
			let targets = [(_a5 = source.handle) != null ? _a5 : source.element];
			if (options == null ? void 0 : options.activatorElements) if (Array.isArray(options.activatorElements)) targets = options.activatorElements;
			else targets = options.activatorElements(source);
			for (const target of targets) {
				if (!target) continue;
				patchWindow(target.ownerDocument.defaultView);
				target.addEventListener("pointerdown", listener, { signal: signal3 });
			}
			return () => controller.abort();
		});
	}
	handlePointerDown(event, source, options) {
		if (this.disabled || !event.isPrimary || event.button !== 0 || !isElement(event.target) || source.disabled || isCapturedBySensor(event) || !this.manager.dragOperation.status.idle) return;
		const { preventActivation = defaults2.preventActivation } = options != null ? options : {};
		if (preventActivation == null ? void 0 : preventActivation(event, source)) return;
		const { target } = event;
		const isNativeDraggable = isHTMLElement(target) && target.draggable && target.getAttribute("draggable") === "true";
		const offset = getFrameTransform(source.element);
		const { x, y } = getEventCoordinates(event);
		this.initialCoordinates = {
			x: x * offset.scaleX + offset.x,
			y: y * offset.scaleY + offset.y
		};
		const constraints = this.activationConstraints(event, source, options);
		event.sensor = this;
		const controller = new ActivationController(constraints, (event2) => this.handleStart(source, event2));
		controller.signal.onabort = () => this.handleCancel(event);
		controller.onEvent(event);
		this.controller = controller;
		const documents = getDocuments();
		const unbindListeners = this.listeners.bind(documents, [
			{
				type: "pointermove",
				listener: (event2) => this.handlePointerMove(event2, source)
			},
			{
				type: "pointerup",
				listener: this.handlePointerUp,
				options: { capture: true }
			},
			{
				type: "pointercancel",
				listener: this.handleCancel
			},
			{
				type: "dragstart",
				listener: isNativeDraggable ? this.handleCancel : preventDefault,
				options: { capture: true }
			}
		]);
		const cleanup = () => {
			unbindListeners();
			this.initialCoordinates = void 0;
		};
		__privateGet$1(this, _cleanup).add(cleanup);
	}
	handlePointerMove(event, source) {
		var _a5, _b2;
		if (((_a5 = this.controller) == null ? void 0 : _a5.activated) === false) {
			(_b2 = this.controller) == null || _b2.onEvent(event);
			return;
		}
		if (this.manager.dragOperation.status.dragging) {
			const coordinates = getEventCoordinates(event);
			const offset = getFrameTransform(source.element);
			coordinates.x = coordinates.x * offset.scaleX + offset.x;
			coordinates.y = coordinates.y * offset.scaleY + offset.y;
			event.preventDefault();
			event.stopPropagation();
			this.latest.event = event;
			this.latest.coordinates = coordinates;
			scheduler.schedule(this.handleMove);
		}
	}
	handlePointerUp(event) {
		const { status } = this.manager.dragOperation;
		if (!status.idle) {
			event.preventDefault();
			event.stopPropagation();
			const canceled = !status.initialized;
			this.manager.actions.stop({
				event,
				canceled
			});
		}
		this.cleanup();
	}
	handleKeyDown(event) {
		if (event.key === "Escape") {
			event.preventDefault();
			this.handleCancel(event);
		}
	}
	handleStart(source, event) {
		const { manager, initialCoordinates } = this;
		if (!initialCoordinates || !manager.dragOperation.status.idle) return;
		if (event.defaultPrevented) return;
		if (manager.actions.start({
			coordinates: initialCoordinates,
			event,
			source
		}).signal.aborted) return this.cleanup();
		event.preventDefault();
		const pointerCaptureTarget = getDocument(event.target).body;
		try {
			pointerCaptureTarget.setPointerCapture(event.pointerId);
		} catch (e) {
			this.handleCancel(event);
			return;
		}
		const listenerTargets = isElement(event.target) ? [event.target, pointerCaptureTarget] : pointerCaptureTarget;
		const unbind = this.listeners.bind(listenerTargets, [
			{
				type: "touchmove",
				listener: preventDefault,
				options: { passive: false }
			},
			{
				type: "click",
				listener: preventDefault
			},
			{
				type: "contextmenu",
				listener: preventDefault
			},
			{
				type: "keydown",
				listener: this.handleKeyDown
			}
		]);
		__privateGet$1(this, _cleanup).add(unbind);
	}
	handleCancel(event) {
		const { dragOperation } = this.manager;
		if (dragOperation.status.initialized) this.manager.actions.stop({
			event,
			canceled: true
		});
		this.cleanup();
	}
	cleanup() {
		const { controller } = this;
		this.controller = void 0;
		if (controller && !controller.signal.aborted) controller.abort();
		this.latest = {
			event: void 0,
			coordinates: void 0
		};
		__privateGet$1(this, _cleanup).forEach((cleanup) => cleanup());
		__privateGet$1(this, _cleanup).clear();
	}
	destroy() {
		this.cleanup();
		this.listeners.clear();
	}
};
_cleanup = /* @__PURE__ */ new WeakMap();
_PointerSensor.configure = configurator(_PointerSensor);
_PointerSensor.defaults = defaults2;
var PointerSensor = _PointerSensor;
function isCapturedBySensor(event) {
	return "sensor" in event;
}
function preventDefault(event) {
	event.preventDefault();
}
function noop() {}
var windows = /* @__PURE__ */ new WeakSet();
function patchWindow(window) {
	if (!window || windows.has(window)) return;
	window.addEventListener("touchmove", noop, {
		capture: false,
		passive: false
	});
	windows.add(window);
}
var defaultPreset = {
	modifiers: [],
	plugins: [
		Accessibility,
		AutoScroller,
		Cursor,
		Feedback,
		PreventSelection
	],
	sensors: [PointerSensor, KeyboardSensor]
};
var DragDropManager = class extends DragDropManager$1 {
	constructor(input = {}) {
		const plugins = resolveCustomizable(input.plugins, defaultPreset.plugins);
		const sensors = resolveCustomizable(input.sensors, defaultPreset.sensors);
		const modifiers = resolveCustomizable(input.modifiers, defaultPreset.modifiers);
		super(__spreadProps$1(__spreadValues$1({}, input), {
			plugins: [
				ScrollListener,
				Scroller,
				StyleInjector,
				...plugins
			],
			sensors,
			modifiers
		}));
	}
};
var _element_dec;
var _handle_dec;
var _c;
var _init5;
var _handle;
var _element$1;
var Draggable = class extends (_c = Draggable$1, _handle_dec = [reactive], _element_dec = [reactive], _c) {
	constructor(_a5, manager) {
		var _b2 = _a5, { element, effects: effects2 = () => [], handle } = _b2, input = __objRest$1(_b2, [
			"element",
			"effects",
			"handle"
		]);
		super(__spreadValues$1({ effects: () => [...effects2(), () => {
			var _a6, _b3;
			const { manager: manager2 } = this;
			if (!manager2) return;
			const unbindFunctions = ((_b3 = (_a6 = this.sensors) == null ? void 0 : _a6.map(descriptor)) != null ? _b3 : [...manager2.sensors]).map((entry) => {
				const sensorInstance = entry instanceof Sensor ? entry : manager2.registry.register(entry.plugin);
				const options = entry instanceof Sensor ? void 0 : entry.options;
				return sensorInstance.bind(this, options);
			});
			return function cleanup() {
				unbindFunctions.forEach((unbind) => unbind());
			};
		}] }, input), manager);
		__privateAdd$1(this, _handle, __runInitializers$1(_init5, 8, this)), __runInitializers$1(_init5, 11, this);
		__privateAdd$1(this, _element$1, __runInitializers$1(_init5, 12, this)), __runInitializers$1(_init5, 15, this);
		this.element = element;
		this.handle = handle;
	}
};
_init5 = __decoratorStart$1(_c);
_handle = /* @__PURE__ */ new WeakMap();
_element$1 = /* @__PURE__ */ new WeakMap();
__decorateElement$1(_init5, 4, "handle", _handle_dec, Draggable, _handle);
__decorateElement$1(_init5, 4, "element", _element_dec, Draggable, _element$1);
__decoratorMetadata$1(_init5, Draggable);
var _proxy_dec;
var _element_dec2;
var _c2;
var _init6;
var _element2;
var _d;
var element_get;
var element_set;
var _Droppable_instances;
var _proxy;
var Droppable = class extends (_c2 = Droppable$1, _element_dec2 = [reactive], _proxy_dec = [reactive], _c2) {
	constructor(_a5, manager) {
		var _b2 = _a5, { element, effects: effects2 = () => [] } = _b2, input = __objRest$1(_b2, ["element", "effects"]);
		const { collisionDetector = defaultCollisionDetection } = input;
		const updateShape = (boundingClientRect) => {
			const { manager: manager2, element: element2 } = this;
			if (!element2 || boundingClientRect === null) {
				this.shape = void 0;
				return;
			}
			if (!manager2) return;
			const updatedShape = new DOMRectangle(element2);
			const shape = f(() => this.shape);
			if (updatedShape && (shape == null ? void 0 : shape.equals(updatedShape))) return shape;
			this.shape = updatedShape;
			return updatedShape;
		};
		const observePosition = a(false);
		super(__spreadProps$1(__spreadValues$1({}, input), {
			collisionDetector,
			effects: () => [
				...effects2(),
				() => {
					const { element: element2, manager: manager2 } = this;
					if (!manager2) return;
					const { dragOperation } = manager2;
					const { source } = dragOperation;
					observePosition.value = Boolean(source && dragOperation.status.initialized && element2 && !this.disabled && this.accepts(source));
				},
				() => {
					const { element: element2 } = this;
					if (observePosition.value && element2) {
						const positionObserver = new FrameObserver(element2, updateShape);
						return () => {
							positionObserver.disconnect();
							this.shape = void 0;
						};
					}
				},
				() => {
					var _a6;
					if ((_a6 = this.manager) == null ? void 0 : _a6.dragOperation.status.initialized) return () => {
						this.shape = void 0;
					};
				}
			]
		}), manager);
		__privateAdd$1(this, _Droppable_instances);
		__privateAdd$1(this, _element2, __runInitializers$1(_init6, 8, this)), __runInitializers$1(_init6, 11, this);
		__privateAdd$1(this, _proxy, __runInitializers$1(_init6, 12, this)), __runInitializers$1(_init6, 15, this);
		this.element = element;
		this.refreshShape = () => updateShape();
	}
	set element(element) {
		__privateSet$1(this, _Droppable_instances, element, element_set);
	}
	get element() {
		var _a5;
		return (_a5 = this.proxy) != null ? _a5 : __privateGet$1(this, _Droppable_instances, element_get);
	}
};
_init6 = __decoratorStart$1(_c2);
_element2 = /* @__PURE__ */ new WeakMap();
_Droppable_instances = /* @__PURE__ */ new WeakSet();
_proxy = /* @__PURE__ */ new WeakMap();
_d = __decorateElement$1(_init6, 20, "#element", _element_dec2, _Droppable_instances, _element2), element_get = _d.get, element_set = _d.set;
__decorateElement$1(_init6, 4, "proxy", _proxy_dec, Droppable, _proxy);
__decoratorMetadata$1(_init6, Droppable);
//#endregion
//#region node_modules/@dnd-kit/dom/sortable.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __knownSymbol = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __typeError = (msg) => {
	throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
	enumerable: true,
	configurable: true,
	writable: true,
	value
}) : obj[key] = value;
var __spreadValues = (a, b) => {
	for (var prop in b || (b = {})) if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
	if (__getOwnPropSymbols) {
		for (var prop of __getOwnPropSymbols(b)) if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
	}
	return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
	var target = {};
	for (var prop in source) if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0) target[prop] = source[prop];
	if (source != null && __getOwnPropSymbols) {
		for (var prop of __getOwnPropSymbols(source)) if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop)) target[prop] = source[prop];
	}
	return target;
};
var __decoratorStart = (base) => {
	var _a;
	return [
		,
		,
		,
		__create((_a = void 0) != null ? _a : null)
	];
};
var __decoratorStrings = [
	"class",
	"method",
	"getter",
	"setter",
	"accessor",
	"field",
	"value",
	"get",
	"set"
];
var __expectFn = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError("Function expected") : fn;
var __decoratorContext = (kind, name, done, metadata, fns) => ({
	kind: __decoratorStrings[kind],
	name,
	metadata,
	addInitializer: (fn) => done._ ? __typeError("Already initialized") : fns.push(__expectFn(fn || null))
});
var __decoratorMetadata = (array, target) => __defNormalProp(target, __knownSymbol("metadata"), array[3]);
var __runInitializers = (array, flags, self, value) => {
	for (var i = 0, fns = array[flags >> 1], n = fns && fns.length; i < n; i++) flags & 1 ? fns[i].call(self) : value = fns[i].call(self, value);
	return value;
};
var __decorateElement = (array, flags, name, decorators, target, extra) => {
	var fn, it, done, ctx, access, k = flags & 7, s = false, p = false;
	var j = array.length + 1, key = __decoratorStrings[k + 5];
	var initializers = array[j - 1] = [], extraInitializers = array[j] || (array[j] = []);
	var desc = (target = target.prototype, __getOwnPropDesc({
		get [name]() {
			return __privateGet(this, extra);
		},
		set [name](x) {
			return __privateSet(this, extra, x);
		}
	}, name));
	for (var i = decorators.length - 1; i >= 0; i--) {
		ctx = __decoratorContext(k, name, done = {}, array[3], extraInitializers);
		ctx.static = s, ctx.private = p, access = ctx.access = { has: (x) => name in x };
		access.get = (x) => x[name];
		access.set = (x, y) => x[name] = y;
		it = (0, decorators[i])({
			get: desc.get,
			set: desc.set
		}, ctx), done._ = 1;
		if (it === void 0) __expectFn(it) && (desc[key] = it);
		else if (typeof it !== "object" || it === null) __typeError("Object expected");
		else __expectFn(fn = it.get) && (desc.get = fn), __expectFn(fn = it.set) && (desc.set = fn), __expectFn(fn = it.init) && initializers.unshift(fn);
	}
	return desc && __defProp(target, name, desc), target;
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), member.set(obj, value), value);
function isSortable(element) {
	return element instanceof SortableDroppable || element instanceof SortableDraggable;
}
var TOLERANCE = 10;
var SortableKeyboardPlugin = class extends Plugin {
	constructor(manager) {
		super(manager);
		const cleanupEffect = x(() => {
			const { dragOperation } = manager;
			if (!isKeyboardEvent(dragOperation.activatorEvent)) return;
			if (!isSortable(dragOperation.source)) return;
			if (dragOperation.status.initialized) {
				const scroller = manager.registry.plugins.get(Scroller);
				if (scroller) {
					scroller.disable();
					return () => scroller.enable();
				}
			}
		});
		const unsubscribe = manager.monitor.addEventListener("dragmove", (event, manager2) => {
			queueMicrotask(() => {
				if (this.disabled || event.defaultPrevented || !event.nativeEvent) return;
				const { dragOperation } = manager2;
				if (!isKeyboardEvent(event.nativeEvent)) return;
				if (!isSortable(dragOperation.source)) return;
				if (!dragOperation.shape) return;
				const { actions, collisionObserver, registry } = manager2;
				const { by } = event;
				if (!by) return;
				const direction = getDirection(by);
				const { source, target } = dragOperation;
				const { center } = dragOperation.shape.current;
				const potentialTargets = [];
				const cleanup = [];
				n(() => {
					for (const droppable of registry.droppables) {
						const { id: id2 } = droppable;
						if (!droppable.accepts(source) || id2 === (target == null ? void 0 : target.id) && isSortable(droppable) || !droppable.element) continue;
						let previousShape = droppable.shape;
						const shape = new DOMRectangle(droppable.element, { getBoundingClientRect: (element) => getVisibleBoundingRectangle(element, void 0, .2) });
						if (!shape.height || !shape.width) continue;
						if (direction == "down" && center.y + TOLERANCE < shape.center.y || direction == "up" && center.y - TOLERANCE > shape.center.y || direction == "left" && center.x - TOLERANCE > shape.center.x || direction == "right" && center.x + TOLERANCE < shape.center.x) {
							potentialTargets.push(droppable);
							droppable.shape = shape;
							cleanup.push(() => droppable.shape = previousShape);
						}
					}
				});
				event.preventDefault();
				collisionObserver.disable();
				const collisions = collisionObserver.computeCollisions(potentialTargets, closestCorners);
				n(() => cleanup.forEach((clean) => clean()));
				const [firstCollision] = collisions;
				if (!firstCollision) return;
				const { id } = firstCollision;
				const { index, group } = source.sortable;
				actions.setDropTarget(id).then(() => {
					const { source: source2, target: target2, shape } = dragOperation;
					if (!source2 || !isSortable(source2) || !shape) return;
					const { index: newIndex, group: newGroup, target: targetElement } = source2.sortable;
					const updated = index !== newIndex || group !== newGroup;
					const element = updated ? targetElement : target2 == null ? void 0 : target2.element;
					if (!element) return;
					scrollIntoViewIfNeeded(element);
					const updatedShape = new DOMRectangle(element);
					if (!updatedShape) return;
					const delta = Rectangle.delta(updatedShape, Rectangle.from(shape.current.boundingRectangle), source2.alignment);
					actions.move({ by: delta });
					if (updated) actions.setDropTarget(source2.id).then(() => collisionObserver.enable());
					else collisionObserver.enable();
				});
			});
		});
		this.destroy = () => {
			unsubscribe();
			cleanupEffect();
		};
	}
};
function getDirection(delta) {
	const { x, y } = delta;
	if (x > 0) return "right";
	else if (x < 0) return "left";
	else if (y > 0) return "down";
	else if (y < 0) return "up";
}
var __defProp2 = Object.defineProperty;
var __defProps2 = Object.defineProperties;
var __getOwnPropDescs2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols2 = Object.getOwnPropertySymbols;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __propIsEnum2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, {
	enumerable: true,
	configurable: true,
	writable: true,
	value
}) : obj[key] = value;
var __spreadValues2 = (a, b) => {
	for (var prop in b || (b = {})) if (__hasOwnProp2.call(b, prop)) __defNormalProp2(a, prop, b[prop]);
	if (__getOwnPropSymbols2) {
		for (var prop of __getOwnPropSymbols2(b)) if (__propIsEnum2.call(b, prop)) __defNormalProp2(a, prop, b[prop]);
	}
	return a;
};
var __spreadProps2 = (a, b) => __defProps2(a, __getOwnPropDescs2(b));
function arrayMove(array, from, to) {
	if (from === to) return array;
	const newArray = array.slice();
	newArray.splice(to, 0, newArray.splice(from, 1)[0]);
	return newArray;
}
function hasSortableIndices(source) {
	return "initialIndex" in source && typeof source.initialIndex === "number" && "index" in source && typeof source.index === "number";
}
function mutate(items, event, mutation) {
	var _a, _b, _c;
	const { source, target, canceled } = event.operation;
	if (!source || !target || canceled) {
		if ("preventDefault" in event) event.preventDefault();
		return items;
	}
	const findIndex = (item, id) => item === id || typeof item === "object" && "id" in item && item.id === id;
	if (Array.isArray(items)) {
		const sourceIndex2 = items.findIndex((item) => findIndex(item, source.id));
		const targetIndex2 = items.findIndex((item) => findIndex(item, target.id));
		if (sourceIndex2 === -1 || targetIndex2 === -1) {
			if (hasSortableIndices(source)) {
				const from = source.initialIndex;
				const to = source.index;
				if (from === to || from < 0 || from >= items.length) {
					if ("preventDefault" in event) event.preventDefault();
					return items;
				}
				return mutation(items, from, to);
			}
			return items;
		}
		if (!canceled && "index" in source && typeof source.index === "number") {
			const projectedSourceIndex = source.index;
			if (projectedSourceIndex !== sourceIndex2) return mutation(items, sourceIndex2, projectedSourceIndex);
		}
		return mutation(items, sourceIndex2, targetIndex2);
	}
	const entries = Object.entries(items);
	let sourceIndex = -1;
	let sourceParent;
	let targetIndex = -1;
	let targetParent;
	for (const [id, children] of entries) {
		if (sourceIndex === -1) {
			sourceIndex = children.findIndex((item) => findIndex(item, source.id));
			if (sourceIndex !== -1) sourceParent = id;
		}
		if (targetIndex === -1) {
			targetIndex = children.findIndex((item) => findIndex(item, target.id));
			if (targetIndex !== -1) targetParent = id;
		}
		if (sourceIndex !== -1 && targetIndex !== -1) break;
	}
	if (sourceIndex === -1 && hasSortableIndices(source)) {
		const srcParent = source.initialGroup;
		const srcIndex = source.initialIndex;
		const tgtParent = source.group;
		const tgtIndex = source.index;
		if (srcParent == null || tgtParent == null || !(srcParent in items) || !(tgtParent in items)) {
			if ("preventDefault" in event) event.preventDefault();
			return items;
		}
		if (srcParent === tgtParent && srcIndex === tgtIndex) {
			if ("preventDefault" in event) event.preventDefault();
			return items;
		}
		if (srcParent === tgtParent) return __spreadProps2(__spreadValues2({}, items), { [srcParent]: mutation(items[srcParent], srcIndex, tgtIndex) });
		const sourceItem2 = items[srcParent][srcIndex];
		return __spreadProps2(__spreadValues2({}, items), {
			[srcParent]: [...items[srcParent].slice(0, srcIndex), ...items[srcParent].slice(srcIndex + 1)],
			[tgtParent]: [
				...items[tgtParent].slice(0, tgtIndex),
				sourceItem2,
				...items[tgtParent].slice(tgtIndex)
			]
		});
	}
	if (!source.manager) return items;
	const { dragOperation } = source.manager;
	const position = (_b = (_a = dragOperation.shape) == null ? void 0 : _a.current.center) != null ? _b : dragOperation.position.current;
	if (targetParent == null) {
		if (target.id in items) {
			const insertionIndex = target.shape && position.y > target.shape.center.y ? items[target.id].length : 0;
			targetParent = target.id;
			targetIndex = insertionIndex;
		}
	}
	if (sourceParent == null || targetParent == null || sourceParent === targetParent && sourceIndex === targetIndex) {
		if (sourceParent != null && sourceParent === targetParent && sourceIndex === targetIndex && hasSortableIndices(source)) {
			const hasGroupChanged = source.group != null && source.group !== sourceParent;
			const hasIndexChanged = source.index !== sourceIndex;
			if (hasGroupChanged || hasIndexChanged) {
				const reconciledTargetParent = (_c = source.group) != null ? _c : sourceParent;
				if (reconciledTargetParent in items) {
					if (sourceParent === reconciledTargetParent) return __spreadProps2(__spreadValues2({}, items), { [sourceParent]: mutation(items[sourceParent], sourceIndex, source.index) });
					const sourceItem2 = items[sourceParent][sourceIndex];
					return __spreadProps2(__spreadValues2({}, items), {
						[sourceParent]: [...items[sourceParent].slice(0, sourceIndex), ...items[sourceParent].slice(sourceIndex + 1)],
						[reconciledTargetParent]: [
							...items[reconciledTargetParent].slice(0, source.index),
							sourceItem2,
							...items[reconciledTargetParent].slice(source.index)
						]
					});
				}
			}
		}
		if ("preventDefault" in event) event.preventDefault();
		return items;
	}
	if (sourceParent === targetParent) return __spreadProps2(__spreadValues2({}, items), { [sourceParent]: mutation(items[sourceParent], sourceIndex, targetIndex) });
	const modifier = target.shape && Math.round(position.y) > Math.round(target.shape.center.y) ? 1 : 0;
	const sourceItem = items[sourceParent][sourceIndex];
	return __spreadProps2(__spreadValues2({}, items), {
		[sourceParent]: [...items[sourceParent].slice(0, sourceIndex), ...items[sourceParent].slice(sourceIndex + 1)],
		[targetParent]: [
			...items[targetParent].slice(0, targetIndex + modifier),
			sourceItem,
			...items[targetParent].slice(targetIndex + modifier)
		]
	});
}
function move(items, event) {
	return mutate(items, event, arrayMove);
}
var defaultGroup = "__default__";
var OptimisticSortingPlugin = class extends Plugin {
	constructor(manager) {
		super(manager);
		const getSortableInstances = () => {
			const sortableInstances = /* @__PURE__ */ new Map();
			for (const droppable of manager.registry.droppables) if (droppable instanceof SortableDroppable) {
				const { sortable } = droppable;
				const { group } = sortable;
				let instances = sortableInstances.get(group);
				if (!instances) {
					instances = /* @__PURE__ */ new Set();
					sortableInstances.set(group, instances);
				}
				instances.add(sortable);
			}
			for (const [group, instances] of sortableInstances) sortableInstances.set(group, new Set(sort(instances)));
			return sortableInstances;
		};
		const unsubscribe = [manager.monitor.addEventListener("dragover", (event, manager2) => {
			if (this.disabled) return;
			const { dragOperation } = manager2;
			const { source, target } = dragOperation;
			if (!isSortable(source) || !isSortable(target)) return;
			if (source.sortable === target.sortable) return;
			const instances = getSortableInstances();
			const sameGroup = source.sortable.group === target.sortable.group;
			const sourceInstances = instances.get(source.sortable.group);
			const targetInstances = sameGroup ? sourceInstances : instances.get(target.sortable.group);
			if (!sourceInstances || !targetInstances) return;
			queueMicrotask(() => {
				if (event.defaultPrevented) return;
				manager2.renderer.rendering.then(() => {
					var _a, _b, _c;
					const newInstances = getSortableInstances();
					for (const [group, sortableInstances] of instances.entries()) {
						const entries = Array.from(sortableInstances).entries();
						for (const [index, sortable] of entries) if (sortable.index !== index || sortable.group !== group || !((_a = newInstances.get(group)) == null ? void 0 : _a.has(sortable))) return;
					}
					const sourceElement = source.sortable.element;
					const targetElement = target.sortable.element;
					if (!targetElement || !sourceElement) return;
					if (!sameGroup && target.id === source.sortable.group) return;
					const orderedSourceSortables = sort(sourceInstances);
					const orderedTargetSortables = sameGroup ? orderedSourceSortables : sort(targetInstances);
					const sourceGroup = (_b = source.sortable.group) != null ? _b : defaultGroup;
					const targetGroup = (_c = target.sortable.group) != null ? _c : defaultGroup;
					const state = {
						[sourceGroup]: orderedSourceSortables,
						[targetGroup]: orderedTargetSortables
					};
					const newState = move(state, event);
					if (state === newState) return;
					const sourceIndex = newState[targetGroup].indexOf(source.sortable);
					const targetIndex = newState[targetGroup].indexOf(target.sortable);
					manager2.collisionObserver.disable();
					reorder(sourceElement, sourceIndex, targetElement, targetIndex);
					n(() => {
						for (const [index, sortable] of newState[sourceGroup].entries()) sortable.index = index;
						if (!sameGroup) for (const [index, sortable] of newState[targetGroup].entries()) {
							sortable.group = target.sortable.group;
							sortable.index = index;
						}
					});
					manager2.actions.setDropTarget(source.id).then(() => manager2.collisionObserver.enable());
				});
			});
		}), manager.monitor.addEventListener("dragend", (event, manager2) => {
			if (!event.canceled) return;
			const { dragOperation } = manager2;
			const { source } = dragOperation;
			if (!isSortable(source)) return;
			if (source.sortable.initialIndex === source.sortable.index && source.sortable.initialGroup === source.sortable.group) return;
			queueMicrotask(() => {
				const instances = getSortableInstances();
				const initialGroupInstances = instances.get(source.sortable.initialGroup);
				if (!initialGroupInstances) return;
				manager2.renderer.rendering.then(() => {
					for (const [group, sortableInstances] of instances.entries()) {
						const entries = Array.from(sortableInstances).entries();
						for (const [index, sortable] of entries) if (sortable.index !== index || sortable.group !== group) return;
					}
					const initialGroup = sort(initialGroupInstances);
					const sourceElement = source.sortable.element;
					const target = initialGroup[source.sortable.initialIndex];
					const targetElement = target == null ? void 0 : target.element;
					if (!target || !targetElement || !sourceElement) return;
					reorder(sourceElement, target.index, targetElement, source.index);
					n(() => {
						for (const [_, sortableInstances] of instances.entries()) {
							const entries = Array.from(sortableInstances).values();
							for (const sortable of entries) {
								sortable.index = sortable.initialIndex;
								sortable.group = sortable.initialGroup;
							}
						}
					});
				});
			});
		})];
		this.destroy = () => {
			for (const unsubscribeListener of unsubscribe) unsubscribeListener();
		};
	}
};
function reorder(sourceElement, sourceIndex, targetElement, targetIndex) {
	const position = targetIndex < sourceIndex ? "afterend" : "beforebegin";
	targetElement.insertAdjacentElement(position, sourceElement);
}
function sortByIndex(a, b) {
	return a.index - b.index;
}
function sort(instances) {
	return Array.from(instances).sort(sortByIndex);
}
var defaultPlugins = [SortableKeyboardPlugin, OptimisticSortingPlugin];
var defaultSortableTransition = {
	duration: 250,
	easing: "cubic-bezier(0.25, 1, 0.5, 1)",
	idle: false
};
var store = new WeakStore();
var _group_dec;
var _index_dec = [reactive];
var _init;
var _index;
var _previousGroup;
var _previousIndex;
var _group;
var _element;
_group_dec = [reactive];
var Sortable2 = class {
	constructor(_a, manager) {
		__privateAdd(this, _index, __runInitializers(_init, 8, this)), __runInitializers(_init, 11, this);
		__privateAdd(this, _previousGroup);
		__privateAdd(this, _previousIndex);
		__privateAdd(this, _group, __runInitializers(_init, 12, this)), __runInitializers(_init, 15, this);
		__privateAdd(this, _element);
		this.register = () => {
			n(() => {
				var _a, _b;
				(_a = this.manager) == null || _a.registry.register(this.droppable);
				(_b = this.manager) == null || _b.registry.register(this.draggable);
			});
			return () => this.unregister();
		};
		this.unregister = () => {
			n(() => {
				var _a, _b;
				(_a = this.manager) == null || _a.registry.unregister(this.droppable);
				(_b = this.manager) == null || _b.registry.unregister(this.draggable);
			});
		};
		this.destroy = () => {
			n(() => {
				this.droppable.destroy();
				this.draggable.destroy();
			});
		};
		var _b = _a, { effects: inputEffects = () => [], group, index, sensors, type, transition = defaultSortableTransition, plugins: pluginsInput } = _b, input = __objRest(_b, [
			"effects",
			"group",
			"index",
			"sensors",
			"type",
			"transition",
			"plugins"
		]);
		const plugins = resolveCustomizable(pluginsInput, defaultPlugins);
		this.droppable = new SortableDroppable(input, manager, this);
		this.draggable = new SortableDraggable(__spreadProps(__spreadValues({}, input), {
			plugins,
			effects: () => [
				() => {
					var _a2, _b2, _c;
					const status = (_a2 = this.manager) == null ? void 0 : _a2.dragOperation.status;
					if ((status == null ? void 0 : status.initializing) && this.id === ((_c = (_b2 = this.manager) == null ? void 0 : _b2.dragOperation.source) == null ? void 0 : _c.id)) store.clear(this.manager);
					if (status == null ? void 0 : status.dragging) store.set(this.manager, this.id, f(() => ({
						initialIndex: this.index,
						initialGroup: this.group
					})));
				},
				() => {
					const { index: index2, group: group2, manager: _ } = this;
					const previousIndex = __privateGet(this, _previousIndex);
					const previousGroup = __privateGet(this, _previousGroup);
					if (index2 !== previousIndex || group2 !== previousGroup) {
						__privateSet(this, _previousIndex, index2);
						__privateSet(this, _previousGroup, group2);
						this.animate();
					}
				},
				() => {
					var _a2, _b2;
					const { target } = this;
					const { isDragSource } = this.draggable;
					if (((_b2 = (_a2 = this.draggable.pluginConfig(Feedback)) == null ? void 0 : _a2.feedback) != null ? _b2 : "default") === "move" && isDragSource) this.droppable.disabled = !target;
				},
				...inputEffects()
			],
			type,
			sensors
		}), manager, this);
		__privateSet(this, _element, input.element);
		this.manager = manager;
		this.index = index;
		__privateSet(this, _previousIndex, index);
		this.group = group;
		__privateSet(this, _previousGroup, group);
		this.type = type;
		this.transition = transition;
	}
	get initialIndex() {
		var _a, _b;
		return (_b = (_a = store.get(this.manager, this.id)) == null ? void 0 : _a.initialIndex) != null ? _b : this.index;
	}
	get initialGroup() {
		var _a, _b;
		return (_b = (_a = store.get(this.manager, this.id)) == null ? void 0 : _a.initialGroup) != null ? _b : this.group;
	}
	animate() {
		f(() => {
			const { manager, transition } = this;
			const { shape } = this.droppable;
			if (!manager) return;
			const { idle } = manager.dragOperation.status;
			if (!shape || !transition || idle && !transition.idle) return;
			manager.renderer.rendering.then(() => {
				const { element } = this;
				if (!element) return;
				for (const animation of element.getAnimations()) if ("transitionProperty" in animation && (animation.transitionProperty === "transform" || animation.transitionProperty === "translate" || animation.transitionProperty === "scale")) animation.cancel();
				const updatedShape = this.refreshShape();
				if (!updatedShape) return;
				const delta = {
					x: shape.boundingRectangle.left - updatedShape.boundingRectangle.left,
					y: shape.boundingRectangle.top - updatedShape.boundingRectangle.top
				};
				const { translate } = getComputedStyles(element);
				const currentTranslate = computeTranslate(element, translate, false);
				const finalTranslate = computeTranslate(element, translate);
				if (delta.x || delta.y) {
					const resolvedTransition = prefersReducedMotion(getWindow(element)) ? __spreadProps(__spreadValues({}, transition), { duration: 0 }) : transition;
					animateTransform({
						element,
						keyframes: { translate: [`${currentTranslate.x + delta.x}px ${currentTranslate.y + delta.y}px ${currentTranslate.z}`, `${finalTranslate.x}px ${finalTranslate.y}px ${finalTranslate.z}`] },
						options: resolvedTransition
					}).then(() => {
						if (!manager.dragOperation.status.dragging) this.droppable.shape = void 0;
					});
				}
			});
		});
	}
	get manager() {
		return this.draggable.manager;
	}
	set manager(manager) {
		n(() => {
			this.draggable.manager = manager;
			this.droppable.manager = manager;
		});
	}
	set element(element) {
		n(() => {
			const previousElement = __privateGet(this, _element);
			const droppableElement = this.droppable.element;
			const draggableElement = this.draggable.element;
			if (!droppableElement || droppableElement === previousElement) this.droppable.element = element;
			if (!draggableElement || draggableElement === previousElement) this.draggable.element = element;
			__privateSet(this, _element, element);
		});
	}
	get element() {
		var _a, _b;
		const element = __privateGet(this, _element);
		if (!element) return;
		return (_b = (_a = ProxiedElements.get(element)) != null ? _a : element) != null ? _b : this.droppable.element;
	}
	set target(target) {
		this.droppable.element = target;
	}
	get target() {
		return this.droppable.element;
	}
	set source(source) {
		this.draggable.element = source;
	}
	get source() {
		return this.draggable.element;
	}
	get disabled() {
		return this.draggable.disabled && this.droppable.disabled;
	}
	set plugins(value) {
		this.draggable.plugins = resolveCustomizable(value, defaultPlugins);
	}
	set disabled(value) {
		n(() => {
			this.droppable.disabled = value;
			this.draggable.disabled = value;
		});
	}
	set data(data) {
		n(() => {
			this.droppable.data = data;
			this.draggable.data = data;
		});
	}
	set handle(handle) {
		this.draggable.handle = handle;
	}
	set id(id) {
		this.droppable.id = id;
		this.draggable.id = id;
	}
	get id() {
		return this.droppable.id;
	}
	set sensors(value) {
		this.draggable.sensors = value;
	}
	set modifiers(value) {
		this.draggable.modifiers = value;
	}
	set collisionPriority(value) {
		this.droppable.collisionPriority = value;
	}
	set collisionDetector(value) {
		this.droppable.collisionDetector = value != null ? value : defaultCollisionDetection;
	}
	set alignment(value) {
		this.draggable.alignment = value;
	}
	get alignment() {
		return this.draggable.alignment;
	}
	set type(type) {
		n(() => {
			this.droppable.type = type;
			this.draggable.type = type;
		});
	}
	get type() {
		return this.draggable.type;
	}
	set accept(value) {
		this.droppable.accept = value;
	}
	get accept() {
		return this.droppable.accept;
	}
	get isDropTarget() {
		return this.droppable.isDropTarget;
	}
	/**
	* A boolean indicating whether the sortable item is the source of a drag operation.
	*/
	get isDragSource() {
		return this.draggable.isDragSource;
	}
	/**
	* A boolean indicating whether the sortable item is being dragged.
	*/
	get isDragging() {
		return this.draggable.isDragging;
	}
	/**
	* A boolean indicating whether the sortable item is being dropped.
	*/
	get isDropping() {
		return this.draggable.isDropping;
	}
	get status() {
		return this.draggable.status;
	}
	refreshShape() {
		return this.droppable.refreshShape();
	}
	accepts(draggable) {
		return this.droppable.accepts(draggable);
	}
};
_init = __decoratorStart();
_index = /* @__PURE__ */ new WeakMap();
_previousGroup = /* @__PURE__ */ new WeakMap();
_previousIndex = /* @__PURE__ */ new WeakMap();
_group = /* @__PURE__ */ new WeakMap();
_element = /* @__PURE__ */ new WeakMap();
__decorateElement(_init, 4, "index", _index_dec, Sortable2, _index);
__decorateElement(_init, 4, "group", _group_dec, Sortable2, _group);
__decoratorMetadata(_init, Sortable2);
var SortableDraggable = class extends Draggable {
	constructor(input, manager, sortable) {
		super(input, manager);
		this.sortable = sortable;
	}
	get index() {
		return this.sortable.index;
	}
	get initialIndex() {
		return this.sortable.initialIndex;
	}
	get group() {
		return this.sortable.group;
	}
	get initialGroup() {
		return this.sortable.initialGroup;
	}
};
var SortableDroppable = class extends Droppable {
	constructor(input, manager, sortable) {
		super(input, manager);
		this.sortable = sortable;
	}
	get index() {
		return this.sortable.index;
	}
	get group() {
		return this.sortable.group;
	}
};
//#endregion
export { supportsPopover as _, Draggable as a, PointerActivationConstraints as c, DOMRectangle as d, getComputedStyles as f, showPopover as g, parseTranslate as h, DragDropManager as i, PointerSensor as l, isElement as m, defaultSortableTransition as n, Droppable as o, hidePopover as p, AutoScroller as r, Feedback as s, Sortable2 as t, defaultPreset as u };
