import { o as __toESM, t as __commonJSMin } from "../_runtime.mjs";
import { i as require_react } from "./dnd-kit__accessibility+react.mjs";
import { x as require_react_dom } from "./@dnd-kit/core+[...].mjs";
import { D as n, E as f, O as x, S as derived, i as CollisionType, p as resolveCustomizable, r as CollisionPriority, v as ValueHistory, x as deepEqual } from "./@dnd-kit/abstract+[...].mjs";
import { a as Draggable, i as DragDropManager, n as defaultSortableTransition, o as Droppable, t as Sortable2, u as defaultPreset } from "./dnd-kit__dom.mjs";
//#region node_modules/react/cjs/react-jsx-runtime.production.js
/**
* @license React
* react-jsx-runtime.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_jsx_runtime_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element");
	var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	function jsxProd(type, config, maybeKey) {
		var key = null;
		void 0 !== maybeKey && (key = "" + maybeKey);
		void 0 !== config.key && (key = "" + config.key);
		if ("key" in config) {
			maybeKey = {};
			for (var propName in config) "key" !== propName && (maybeKey[propName] = config[propName]);
		} else maybeKey = config;
		config = maybeKey.ref;
		return {
			$$typeof: REACT_ELEMENT_TYPE,
			type,
			key,
			ref: void 0 !== config ? config : null,
			props: maybeKey
		};
	}
	exports.Fragment = REACT_FRAGMENT_TYPE;
	exports.jsx = jsxProd;
	exports.jsxs = jsxProd;
}));
//#endregion
//#region node_modules/react/jsx-runtime.js
var require_jsx_runtime = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_jsx_runtime_production();
}));
//#endregion
//#region node_modules/@dnd-kit/react/utilities.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_react_dom = /* @__PURE__ */ __toESM(require_react_dom(), 1);
function isRef(value) {
	return value != null && typeof value === "object" && "current" in value;
}
function currentValue(value) {
	var _a;
	if (value == null) return;
	if (isRef(value)) return (_a = value.current) != null ? _a : void 0;
	return value;
}
//#endregion
//#region node_modules/@dnd-kit/react/hooks.js
var useIsomorphicLayoutEffect = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined" ? import_react.useLayoutEffect : import_react.useEffect;
function useForceUpdate() {
	const setState = (0, import_react.useState)(0)[1];
	return (0, import_react.useCallback)(() => {
		setState((value) => value + 1);
	}, [setState]);
}
function useDeepSignal(target, synchronous) {
	const tracked = (0, import_react.useRef)(/* @__PURE__ */ new Map());
	const forceUpdate = useForceUpdate();
	useIsomorphicLayoutEffect(() => {
		if (!target) {
			tracked.current.clear();
			return;
		}
		return x(() => {
			var _a;
			let stale = false;
			let sync = false;
			for (const entry of tracked.current) {
				const [key] = entry;
				const value = f(() => entry[1]);
				const latestValue = target[key];
				if (value !== latestValue) {
					stale = true;
					tracked.current.set(key, latestValue);
					sync = (_a = synchronous == null ? void 0 : synchronous(key, value, latestValue)) != null ? _a : false;
				}
			}
			if (stale) if (sync) queueMicrotask(() => (0, import_react_dom.flushSync)(forceUpdate));
			else forceUpdate();
		});
	}, [target]);
	return (0, import_react.useMemo)(() => target ? new Proxy(target, { get(target2, key) {
		const value = target2[key];
		tracked.current.set(key, value);
		return value;
	} }) : target, [target]);
}
function useImmediateEffect(callback, _) {
	callback();
}
function useLatest(value) {
	const valueRef = (0, import_react.useRef)(value);
	useIsomorphicLayoutEffect(() => {
		valueRef.current = value;
	}, [value]);
	return valueRef;
}
function useOnValueChange(value, onChange, effect3 = import_react.useEffect, compare = Object.is) {
	const tracked = (0, import_react.useRef)(value);
	effect3(() => {
		const oldValue = tracked.current;
		if (!compare(value, oldValue)) {
			tracked.current = value;
			onChange(value, oldValue);
		}
	}, [onChange, value]);
}
function useOnElementChange(value, onChange) {
	const previous = (0, import_react.useRef)(currentValue(value));
	useIsomorphicLayoutEffect(() => {
		const current = currentValue(value);
		if (current !== previous.current) {
			previous.current = current;
			onChange(current);
		}
	});
}
//#endregion
//#region node_modules/@dnd-kit/react/index.js
var import_jsx_runtime = require_jsx_runtime();
var __defProp$1 = Object.defineProperty;
var __defProps$1 = Object.defineProperties;
var __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
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
var __objRest = (source, exclude) => {
	var target = {};
	for (var prop in source) if (__hasOwnProp$1.call(source, prop) && exclude.indexOf(prop) < 0) target[prop] = source[prop];
	if (source != null && __getOwnPropSymbols$1) {
		for (var prop of __getOwnPropSymbols$1(source)) if (exclude.indexOf(prop) < 0 && __propIsEnum$1.call(source, prop)) target[prop] = source[prop];
	}
	return target;
};
var defaultManager = new DragDropManager();
var DragDropContext = (0, import_react.createContext)(defaultManager);
var Renderer = (0, import_react.memo)((0, import_react.forwardRef)(({ children }, ref) => {
	const [transitionCount, setTransitionCount] = (0, import_react.useState)(0);
	const rendering = (0, import_react.useRef)(null);
	const resolver = (0, import_react.useRef)(null);
	const renderer = (0, import_react.useMemo)(() => ({
		renderer: { get rendering() {
			var _a2;
			return (_a2 = rendering.current) != null ? _a2 : Promise.resolve();
		} },
		trackRendering(callback) {
			if (!rendering.current) rendering.current = new Promise((resolve) => {
				resolver.current = resolve;
			});
			(0, import_react.startTransition)(() => {
				callback();
				setTransitionCount((count) => count + 1);
			});
		}
	}), []);
	useIsomorphicLayoutEffect(() => {
		var _a2;
		(_a2 = resolver.current) == null || _a2.call(resolver);
		rendering.current = null;
	}, [children, transitionCount]);
	(0, import_react.useImperativeHandle)(ref, () => renderer);
	return null;
}));
var options = [void 0, deepEqual];
function DragDropProvider(_a2) {
	var _b = _a2, { children, onCollision, onBeforeDragStart, onDragStart, onDragMove, onDragOver, onDragEnd } = _b, input = __objRest(_b, [
		"children",
		"onCollision",
		"onBeforeDragStart",
		"onDragStart",
		"onDragMove",
		"onDragOver",
		"onDragEnd"
	]);
	const rendererRef = (0, import_react.useRef)(null);
	const { plugins: pluginsInput, modifiers: modifiersInput, sensors: sensorsInput } = input;
	const plugins = resolveCustomizable(pluginsInput, defaultPreset.plugins);
	const sensors = resolveCustomizable(sensorsInput, defaultPreset.sensors);
	const modifiers = resolveCustomizable(modifiersInput, defaultPreset.modifiers);
	const handleBeforeDragStart = useLatest(onBeforeDragStart);
	const handleDragStart = useLatest(onDragStart);
	const handleDragOver = useLatest(onDragOver);
	const handleDragMove = useLatest(onDragMove);
	const handleDragEnd = useLatest(onDragEnd);
	const handleCollision = useLatest(onCollision);
	const manager = useStableInstance(() => {
		var _a3;
		return (_a3 = input.manager) != null ? _a3 : new DragDropManager(input);
	});
	(0, import_react.useEffect)(() => {
		if (!rendererRef.current) throw new Error("Renderer not found");
		const { renderer, trackRendering } = rendererRef.current;
		const { monitor } = manager;
		manager.renderer = renderer;
		const listeners = [
			monitor.addEventListener("beforedragstart", (event) => {
				const callback = handleBeforeDragStart.current;
				if (callback) trackRendering(() => callback(event, manager));
			}),
			monitor.addEventListener("dragstart", (event) => {
				var _a3;
				return (_a3 = handleDragStart.current) == null ? void 0 : _a3.call(handleDragStart, event, manager);
			}),
			monitor.addEventListener("dragover", (event) => {
				const callback = handleDragOver.current;
				if (callback) trackRendering(() => callback(event, manager));
			}),
			monitor.addEventListener("dragmove", (event) => {
				const callback = handleDragMove.current;
				if (callback) trackRendering(() => callback(event, manager));
			}),
			monitor.addEventListener("dragend", (event) => {
				const callback = handleDragEnd.current;
				if (callback) trackRendering(() => callback(event, manager));
			}),
			monitor.addEventListener("collision", (event) => {
				var _a3;
				return (_a3 = handleCollision.current) == null ? void 0 : _a3.call(handleCollision, event, manager);
			})
		];
		return () => listeners.forEach((dispose) => dispose());
	}, [manager]);
	useOnValueChange(plugins, () => manager && (manager.plugins = plugins), ...options);
	useOnValueChange(sensors, () => manager && (manager.sensors = sensors), ...options);
	useOnValueChange(modifiers, () => manager && (manager.modifiers = modifiers), ...options);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DragDropContext.Provider, {
		value: manager,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Renderer, {
			ref: rendererRef,
			children
		}), children]
	});
}
function useStableInstance(create) {
	const ref = (0, import_react.useRef)(null);
	if (!ref.current) ref.current = create();
	(0, import_react.useInsertionEffect)(() => {
		return () => {
			var _a2;
			return (_a2 = ref.current) == null ? void 0 : _a2.destroy();
		};
	}, []);
	return ref.current;
}
function useDragDropManager() {
	return (0, import_react.useContext)(DragDropContext);
}
function useInstance(initializer) {
	var _a2;
	const manager = (_a2 = useDragDropManager()) != null ? _a2 : void 0;
	const [instance] = (0, import_react.useState)(() => initializer(manager));
	if (instance.manager !== manager) instance.manager = manager;
	useIsomorphicLayoutEffect(instance.register, [manager, instance]);
	return instance;
}
function useDraggable(input) {
	const { disabled, data, element, handle, id, modifiers, sensors, plugins } = input;
	const draggable = useInstance((manager) => new Draggable(__spreadProps$1(__spreadValues$1({}, input), {
		register: false,
		handle: currentValue(handle),
		element: currentValue(element)
	}), manager));
	const trackedDraggable = useDeepSignal(draggable, shouldUpdateSynchronously$1);
	useOnValueChange(id, () => draggable.id = id);
	useOnElementChange(handle, (handle2) => draggable.handle = handle2);
	useOnElementChange(element, (element2) => draggable.element = element2);
	useOnValueChange(data, () => data && (draggable.data = data));
	useOnValueChange(disabled, () => draggable.disabled = disabled === true);
	useOnValueChange(sensors, () => draggable.sensors = sensors);
	useOnValueChange(modifiers, () => draggable.modifiers = modifiers, void 0, deepEqual);
	useOnValueChange(plugins, () => draggable.plugins = plugins, void 0, deepEqual);
	useOnValueChange(input.alignment, () => draggable.alignment = input.alignment);
	return {
		draggable: trackedDraggable,
		get isDragging() {
			return trackedDraggable.isDragging;
		},
		get isDropping() {
			return trackedDraggable.isDropping;
		},
		get isDragSource() {
			return trackedDraggable.isDragSource;
		},
		handleRef: (0, import_react.useCallback)((element2) => {
			draggable.handle = element2 != null ? element2 : void 0;
		}, [draggable]),
		ref: (0, import_react.useCallback)((element2) => {
			var _a2, _b;
			if (!element2 && ((_a2 = draggable.element) == null ? void 0 : _a2.isConnected) && !((_b = draggable.manager) == null ? void 0 : _b.dragOperation.status.idle)) return;
			draggable.element = element2 != null ? element2 : void 0;
		}, [draggable])
	};
}
function shouldUpdateSynchronously$1(key, oldValue, newValue) {
	if (key === "isDragSource" && !newValue && oldValue) return true;
	return false;
}
var __create = Object.create;
var __defProp2 = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __knownSymbol = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __typeError = (msg) => {
	throw TypeError(msg);
};
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, {
	enumerable: true,
	configurable: true,
	writable: true,
	value
}) : obj[key] = value;
var __decoratorStart = (base) => {
	var _a2;
	return [
		,
		,
		,
		__create((_a2 = base == null ? void 0 : base[__knownSymbol("metadata")]) != null ? _a2 : null)
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
var __decoratorMetadata = (array, target) => __defNormalProp2(target, __knownSymbol("metadata"), array[3]);
var __runInitializers = (array, flags, self, value) => {
	for (var i = 0, fns = array[flags >> 1], n = fns && fns.length; i < n; i++) fns[i].call(self);
	return value;
};
var __decorateElement = (array, flags, name, decorators, target, extra) => {
	var it, done, ctx, access, k = flags & 7, s = false, p = false;
	var j = 2, key = __decoratorStrings[k + 5];
	var extraInitializers = array[j] || (array[j] = []);
	var desc = (target = target.prototype, __getOwnPropDesc(target, name));
	for (var i = decorators.length - 1; i >= 0; i--) {
		ctx = __decoratorContext(k, name, done = {}, array[3], extraInitializers);
		ctx.static = s, ctx.private = p, access = ctx.access = { has: (x) => name in x };
		access.get = (x) => x[name];
		it = (0, decorators[i])(desc[key], ctx), done._ = 1;
		__expectFn(it) && (desc[key] = it);
	}
	return desc && __defProp2(target, name, desc), target;
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), member.set(obj, value), value);
var Point = class _Point {
	/**
	* @param {number} Coordinate of the point on the horizontal axis
	* @param {number} Coordinate of the point on the vertical axis
	*/
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	/**
	* Returns the delta between this point and another point.
	*
	* @param {Point} a - A point
	* @param {Point} b - Another point
	*/
	static delta(a, b) {
		return new _Point(a.x - b.x, a.y - b.y);
	}
	/**
	* Returns the distance (hypotenuse) between this point and another point.
	*
	* @param {Point} a - A point
	* @param {Point} b - Another point
	*/
	static distance(a, b) {
		return Math.hypot(a.x - b.x, a.y - b.y);
	}
	/**
	* Returns true if both points are equal.
	*
	* @param {Point} a - A point
	* @param {Point} b - Another point
	*/
	static equals(a, b) {
		return a.x === b.x && a.y === b.y;
	}
	static from({ x, y }) {
		return new _Point(x, y);
	}
};
var _direction_dec;
var _delta_dec;
var _a;
var _timestamp;
var _init;
var Position = class extends (_a = ValueHistory, _delta_dec = [derived], _direction_dec = [derived], _a) {
	constructor(initialValue) {
		const point = Point.from(initialValue);
		super(point, (a, b) => Point.equals(a, b));
		__runInitializers(_init, 5, this);
		__privateAdd(this, _timestamp, 0);
		this.velocity = {
			x: 0,
			y: 0
		};
	}
	get delta() {
		return Point.delta(this.current, this.initial);
	}
	get direction() {
		const { current, previous } = this;
		if (!previous) return null;
		const delta = {
			x: current.x - previous.x,
			y: current.y - previous.y
		};
		if (!delta.x && !delta.y) return null;
		if (Math.abs(delta.x) > Math.abs(delta.y)) return delta.x > 0 ? "right" : "left";
		return delta.y > 0 ? "down" : "up";
	}
	get current() {
		return super.current;
	}
	set current(coordinates) {
		const { current } = this;
		const point = Point.from(coordinates);
		const delta = {
			x: point.x - current.x,
			y: point.y - current.y
		};
		const timestamp = Date.now();
		const timeDelta = timestamp - __privateGet(this, _timestamp);
		const velocity = (delta2) => Math.round(delta2 / timeDelta * 100);
		n(() => {
			__privateSet(this, _timestamp, timestamp);
			this.velocity = {
				x: velocity(delta.x),
				y: velocity(delta.y)
			};
			super.current = point;
		});
	}
	reset(coordinates = this.defaultValue) {
		super.reset(Point.from(coordinates));
		this.velocity = {
			x: 0,
			y: 0
		};
	}
};
_init = __decoratorStart(_a);
_timestamp = /* @__PURE__ */ new WeakMap();
__decorateElement(_init, 2, "delta", _delta_dec, Position);
__decorateElement(_init, 2, "direction", _direction_dec, Position);
__decoratorMetadata(_init, Position);
var Axis = /* @__PURE__ */ ((Axis2) => {
	Axis2["Horizontal"] = "x";
	Axis2["Vertical"] = "y";
	return Axis2;
})(Axis || {});
Object.values(Axis);
var pointerIntersection = ({ dragOperation, droppable }) => {
	const pointerCoordinates = dragOperation.position.current;
	if (!pointerCoordinates) return null;
	const { id } = droppable;
	if (!droppable.shape) return null;
	if (droppable.shape.containsPoint(pointerCoordinates)) return {
		id,
		value: 1 / Point.distance(droppable.shape.center, pointerCoordinates),
		type: CollisionType.PointerIntersection,
		priority: CollisionPriority.High
	};
	return null;
};
var shapeIntersection = ({ dragOperation, droppable }) => {
	const { shape } = dragOperation;
	if (!droppable.shape || !(shape == null ? void 0 : shape.current)) return null;
	const intersectionArea = shape.current.intersectionArea(droppable.shape);
	if (intersectionArea) {
		const { position } = dragOperation;
		const distance = Point.distance(droppable.shape.center, position.current);
		const value = intersectionArea / (shape.current.area + droppable.shape.area - intersectionArea) / distance;
		return {
			id: droppable.id,
			value,
			type: CollisionType.ShapeIntersection,
			priority: CollisionPriority.Normal
		};
	}
	return null;
};
var defaultCollisionDetection = (args) => {
	var _a2;
	return (_a2 = pointerIntersection(args)) != null ? _a2 : shapeIntersection(args);
};
function useDroppable(input) {
	const { collisionDetector, data, disabled, element, id, accept, type } = input;
	const droppable = useInstance((manager) => new Droppable(__spreadProps$1(__spreadValues$1({}, input), {
		register: false,
		element: currentValue(element)
	}), manager));
	const trackedDroppalbe = useDeepSignal(droppable);
	useOnValueChange(id, () => droppable.id = id);
	useOnElementChange(element, (element2) => droppable.element = element2);
	useOnValueChange(accept, () => droppable.accept = accept, void 0, deepEqual);
	useOnValueChange(collisionDetector, () => droppable.collisionDetector = collisionDetector != null ? collisionDetector : defaultCollisionDetection);
	useOnValueChange(data, () => data && (droppable.data = data));
	useOnValueChange(disabled, () => droppable.disabled = disabled === true);
	useOnValueChange(type, () => droppable.type = type);
	return {
		droppable: trackedDroppalbe,
		get isDropTarget() {
			return trackedDroppalbe.isDropTarget;
		},
		ref: (0, import_react.useCallback)((element2) => {
			var _a2, _b;
			if (!element2 && ((_a2 = droppable.element) == null ? void 0 : _a2.isConnected) && !((_b = droppable.manager) == null ? void 0 : _b.dragOperation.status.idle)) return;
			droppable.element = element2 != null ? element2 : void 0;
		}, [droppable])
	};
}
//#endregion
//#region node_modules/@dnd-kit/react/sortable.js
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
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
function useSortable(input) {
	const { accept, collisionDetector, collisionPriority, id, data, element, handle, index, group, disabled, modifiers, sensors, target, type, plugins } = input;
	const transition = __spreadValues(__spreadValues({}, defaultSortableTransition), input.transition);
	const sortable = useInstance((manager) => {
		return new Sortable2(__spreadProps(__spreadValues({}, input), {
			transition,
			register: false,
			handle: currentValue(handle),
			element: currentValue(element),
			target: currentValue(target)
		}), manager);
	});
	const trackedSortable = useDeepSignal(sortable, shouldUpdateSynchronously);
	useOnValueChange(id, () => sortable.id = id);
	useIsomorphicLayoutEffect(() => {
		n(() => {
			sortable.group = group;
			sortable.index = index;
		});
	}, [
		sortable,
		group,
		index
	]);
	useOnValueChange(type, () => sortable.type = type);
	useOnValueChange(accept, () => sortable.accept = accept, void 0, deepEqual);
	useOnValueChange(data, () => data && (sortable.data = data));
	useOnValueChange(index, () => {
		var _a;
		if (((_a = sortable.manager) == null ? void 0 : _a.dragOperation.status.idle) && (transition == null ? void 0 : transition.idle)) sortable.refreshShape();
	}, useImmediateEffect);
	useOnElementChange(handle, (handle2) => sortable.handle = handle2);
	useOnElementChange(element, (element2) => sortable.element = element2);
	useOnElementChange(target, (target2) => sortable.target = target2);
	useOnValueChange(disabled, () => sortable.disabled = disabled === true);
	useOnValueChange(sensors, () => sortable.sensors = sensors);
	useOnValueChange(collisionDetector, () => sortable.collisionDetector = collisionDetector);
	useOnValueChange(collisionPriority, () => sortable.collisionPriority = collisionPriority);
	useOnValueChange(plugins, () => sortable.plugins = plugins, void 0, deepEqual);
	useOnValueChange(transition, () => sortable.transition = transition, void 0, deepEqual);
	useOnValueChange(modifiers, () => sortable.modifiers = modifiers, void 0, deepEqual);
	useOnValueChange(input.alignment, () => sortable.alignment = input.alignment);
	return {
		sortable: trackedSortable,
		get isDragging() {
			return trackedSortable.isDragging;
		},
		get isDropping() {
			return trackedSortable.isDropping;
		},
		get isDragSource() {
			return trackedSortable.isDragSource;
		},
		get isDropTarget() {
			return trackedSortable.isDropTarget;
		},
		handleRef: (0, import_react.useCallback)((element2) => {
			sortable.handle = element2 != null ? element2 : void 0;
		}, [sortable]),
		ref: (0, import_react.useCallback)((element2) => {
			var _a, _b;
			if (!element2 && ((_a = sortable.element) == null ? void 0 : _a.isConnected) && !((_b = sortable.manager) == null ? void 0 : _b.dragOperation.status.idle)) return;
			sortable.element = element2 != null ? element2 : void 0;
		}, [sortable]),
		sourceRef: (0, import_react.useCallback)((element2) => {
			var _a, _b;
			if (!element2 && ((_a = sortable.source) == null ? void 0 : _a.isConnected) && !((_b = sortable.manager) == null ? void 0 : _b.dragOperation.status.idle)) return;
			sortable.source = element2 != null ? element2 : void 0;
		}, [sortable]),
		targetRef: (0, import_react.useCallback)((element2) => {
			var _a, _b;
			if (!element2 && ((_a = sortable.target) == null ? void 0 : _a.isConnected) && !((_b = sortable.manager) == null ? void 0 : _b.dragOperation.status.idle)) return;
			sortable.target = element2 != null ? element2 : void 0;
		}, [sortable])
	};
}
function shouldUpdateSynchronously(key, oldValue, newValue) {
	if (key === "isDragSource" && !newValue && oldValue) return true;
	return false;
}
//#endregion
export { useDroppable as a, useDraggable as i, DragDropProvider as n, require_jsx_runtime as o, useDragDropManager as r, useSortable as t };
