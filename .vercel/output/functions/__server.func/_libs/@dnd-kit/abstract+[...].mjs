//#region node_modules/@preact/signals-core/dist/signals-core.mjs
var t = Symbol.for("preact-signals");
function i() {
	if (e > 1) {
		e--;
		return;
	}
	let t, i = !1;
	(function() {
		let t = h;
		h = void 0;
		while (void 0 !== t) {
			const i = t.S;
			if (i.v === t.v) {
				for (let n = i.t; void 0 !== n; n = n.x) if (n.i === t.i) n.i = i.i;
			}
			t = t.o;
		}
	})();
	while (void 0 !== r) {
		let n = r;
		r = void 0;
		c++;
		while (void 0 !== n) {
			const o = n.u;
			n.u = void 0;
			n.f &= -3;
			if (!(8 & n.f) && w(n)) try {
				n.c();
			} catch (n) {
				if (!i) {
					t = n;
					i = !0;
				}
			}
			n = o;
		}
	}
	c = 0;
	e--;
	if (i) throw t;
}
function n(t) {
	if (e > 0) return t();
	d = ++u;
	e++;
	try {
		return t();
	} finally {
		i();
	}
}
var o;
var s;
var r;
function f(t) {
	const i = o, n = s;
	o = void 0;
	s = void 0;
	try {
		return t();
	} finally {
		o = i;
		s = n;
	}
}
var h;
var e = 0;
var c = 0;
var u = 0;
var d = 0;
var v = 0;
function l(t) {
	if (void 0 === o) return;
	let i = t.n;
	if (void 0 === i || i.t !== o) {
		i = {
			i: 0,
			S: t,
			p: o.s,
			n: void 0,
			t: o,
			e: void 0,
			x: void 0,
			r: i
		};
		if (void 0 !== o.s) o.s.n = i;
		o.s = i;
		t.n = i;
		if (32 & o.f) t.S(i);
		return i;
	} else if (-1 === i.i) {
		i.i = 0;
		if (void 0 !== i.n) {
			i.n.p = i.p;
			if (void 0 !== i.p) i.p.n = i.n;
			i.p = o.s;
			i.n = void 0;
			o.s.n = i;
			o.s = i;
		}
		return i;
	}
}
function y(t, i) {
	this.v = t;
	this.i = 0;
	this.n = void 0;
	this.t = void 0;
	this.l = 0;
	this.W = null == i ? void 0 : i.watched;
	this.Z = null == i ? void 0 : i.unwatched;
	this.name = null == i ? void 0 : i.name;
}
y.prototype.brand = t;
y.prototype.h = function() {
	return !0;
};
y.prototype.S = function(t) {
	const i = this.t;
	if (i !== t && void 0 === t.e) {
		t.x = i;
		this.t = t;
		if (void 0 !== i) i.e = t;
		else f(() => {
			var t;
			null == (t = this.W) || t.call(this);
		});
	}
};
y.prototype.U = function(t) {
	if (void 0 !== this.t) {
		const i = t.e, n = t.x;
		if (void 0 !== i) {
			i.x = n;
			t.e = void 0;
		}
		if (void 0 !== n) {
			n.e = i;
			t.x = void 0;
		}
		if (t === this.t) {
			this.t = n;
			if (void 0 === n) f(() => {
				var t;
				null == (t = this.Z) || t.call(this);
			});
		}
	}
};
y.prototype.subscribe = function(t) {
	return x(() => {
		const i = this.value;
		f(() => t(i));
	}, { name: "sub" });
};
y.prototype.valueOf = function() {
	return this.value;
};
y.prototype.toString = function() {
	return this.value + "";
};
y.prototype.toJSON = function() {
	return this.value;
};
y.prototype.peek = function() {
	return f(() => this.value);
};
Object.defineProperty(y.prototype, "value", {
	get() {
		const t = l(this);
		if (void 0 !== t) t.i = this.i;
		return this.v;
	},
	set(t) {
		if (t !== this.v) {
			if (c > 100) throw new Error("Cycle detected");
			(function(t) {
				if (0 !== e && 0 === c) {
					if (t.l !== d) {
						t.l = d;
						h = {
							S: t,
							v: t.v,
							i: t.i,
							o: h
						};
					}
				}
			})(this);
			this.v = t;
			this.i++;
			v++;
			e++;
			try {
				for (let t = this.t; void 0 !== t; t = t.x) t.t.N();
			} finally {
				i();
			}
		}
	}
});
function a(t, i) {
	return new y(t, i);
}
function w(t) {
	for (let i = t.s; void 0 !== i; i = i.n) if (i.S.i !== i.i || !i.S.h() || i.S.i !== i.i) return !0;
	return !1;
}
function b(t) {
	for (let i = t.s; void 0 !== i; i = i.n) {
		const n = i.S.n;
		if (void 0 !== n) i.r = n;
		i.S.n = i;
		i.i = -1;
		if (void 0 === i.n) {
			t.s = i;
			break;
		}
	}
}
function _(t) {
	let i, n = t.s;
	while (void 0 !== n) {
		const t = n.p;
		if (-1 === n.i) {
			n.S.U(n);
			if (void 0 !== t) t.n = n.n;
			if (void 0 !== n.n) n.n.p = t;
		} else i = n;
		n.S.n = n.r;
		if (void 0 !== n.r) n.r = void 0;
		n = t;
	}
	t.s = i;
}
function j(t, i) {
	y.call(this, void 0, i);
	this.x = t;
	this.s = void 0;
	this.g = v - 1;
	this.f = 4;
}
j.prototype = new y();
j.prototype.h = function() {
	this.f &= -3;
	if (1 & this.f) return !1;
	if (32 == (36 & this.f)) return !0;
	this.f &= -5;
	if (this.g === v) return !0;
	this.g = v;
	this.f |= 1;
	if (this.i > 0 && !w(this)) {
		this.f &= -2;
		return !0;
	}
	const t = o;
	try {
		b(this);
		o = this;
		const t = this.x();
		if (16 & this.f || this.v !== t || 0 === this.i) {
			this.v = t;
			this.f &= -17;
			this.i++;
		}
	} catch (t) {
		this.v = t;
		this.f |= 16;
		this.i++;
	}
	o = t;
	_(this);
	this.f &= -2;
	return !0;
};
j.prototype.S = function(t) {
	if (void 0 === this.t) {
		this.f |= 36;
		for (let t = this.s; void 0 !== t; t = t.n) t.S.S(t);
	}
	y.prototype.S.call(this, t);
};
j.prototype.U = function(t) {
	if (void 0 !== this.t) {
		y.prototype.U.call(this, t);
		if (void 0 === this.t) {
			this.f &= -33;
			for (let t = this.s; void 0 !== t; t = t.n) t.S.U(t);
		}
	}
};
j.prototype.N = function() {
	if (!(2 & this.f)) {
		this.f |= 6;
		for (let t = this.t; void 0 !== t; t = t.x) t.t.N();
	}
};
Object.defineProperty(j.prototype, "value", { get() {
	if (1 & this.f) throw new Error("Cycle detected");
	const t = l(this);
	this.h();
	if (void 0 !== t) t.i = this.i;
	if (16 & this.f) throw this.v;
	return this.v;
} });
function O(t, i) {
	return new j(t, i);
}
function p(t) {
	const n = t.j;
	t.j = void 0;
	if ("function" == typeof n) {
		e++;
		const s = o;
		o = void 0;
		try {
			n();
		} catch (i) {
			t.f &= -2;
			t.f |= 8;
			g(t);
			throw i;
		} finally {
			o = s;
			i();
		}
	}
}
function g(t) {
	for (let i = t.s; void 0 !== i; i = i.n) i.S.U(i);
	t.x = void 0;
	t.s = void 0;
	p(t);
}
function S(t) {
	if (o !== this) throw new Error("Out-of-order effect");
	_(this);
	o = t;
	this.f &= -2;
	try {
		if (8 & this.f) g(this);
	} finally {
		i();
	}
}
function m(t, i) {
	this.x = t;
	this.j = void 0;
	this.s = void 0;
	this.u = void 0;
	this.f = 32;
	this.name = null == i ? void 0 : i.name;
	if (s) s.push(this);
}
m.prototype.c = function() {
	const t = this.S();
	try {
		if (8 & this.f) return;
		if (void 0 === this.x) return;
		const i = this.x();
		if ("function" == typeof i) this.j = i;
	} finally {
		t();
	}
};
m.prototype.S = function() {
	if (1 & this.f) throw new Error("Cycle detected");
	this.f |= 1;
	this.f &= -9;
	p(this);
	b(this);
	e++;
	const t = o;
	o = this;
	return S.bind(this, t);
};
m.prototype.N = function() {
	if (!(2 & this.f)) {
		this.f |= 2;
		this.u = r;
		r = this;
	}
};
m.prototype.d = function() {
	this.f |= 8;
	if (!(1 & this.f)) g(this);
};
m.prototype.dispose = function() {
	this.d();
};
function x(t, i) {
	const n = new m(t, i);
	try {
		n.c();
	} catch (t) {
		n.d();
		throw t;
	}
	const o = n.d.bind(n);
	o[Symbol.dispose] = o;
	return o;
}
//#endregion
//#region node_modules/@dnd-kit/state/dist/index.mjs
var __create$2 = Object.create;
var __defProp$2 = Object.defineProperty;
var __defProps$1 = Object.defineProperties;
var __getOwnPropDesc$2 = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
var __knownSymbol$2 = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __typeError$2 = (msg) => {
	throw TypeError(msg);
};
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, {
	enumerable: true,
	configurable: true,
	writable: true,
	value
}) : obj[key] = value;
var __spreadValues$2 = (a, b) => {
	for (var prop in b || (b = {})) if (__hasOwnProp$2.call(b, prop)) __defNormalProp$2(a, prop, b[prop]);
	if (__getOwnPropSymbols$2) {
		for (var prop of __getOwnPropSymbols$2(b)) if (__propIsEnum$2.call(b, prop)) __defNormalProp$2(a, prop, b[prop]);
	}
	return a;
};
var __spreadProps$1 = (a, b) => __defProps$1(a, __getOwnPropDescs$1(b));
var __name$2 = (target, value) => __defProp$2(target, "name", {
	value,
	configurable: true
});
var __decoratorStart$2 = (base) => {
	var _a2;
	return [
		,
		,
		,
		__create$2((_a2 = base == null ? void 0 : base[__knownSymbol$2("metadata")]) != null ? _a2 : null)
	];
};
var __decoratorStrings$2 = [
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
var __expectFn$2 = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError$2("Function expected") : fn;
var __decoratorContext$2 = (kind, name, done, metadata, fns) => ({
	kind: __decoratorStrings$2[kind],
	name,
	metadata,
	addInitializer: (fn) => done._ ? __typeError$2("Already initialized") : fns.push(__expectFn$2(fn || null))
});
var __decoratorMetadata$2 = (array, target) => __defNormalProp$2(target, __knownSymbol$2("metadata"), array[3]);
var __runInitializers$2 = (array, flags, self, value) => {
	for (var i = 0, fns = array[flags >> 1], n = fns && fns.length; i < n; i++) flags & 1 ? fns[i].call(self) : value = fns[i].call(self, value);
	return value;
};
var __decorateElement$2 = (array, flags, name, decorators, target, extra) => {
	var fn, it, done, ctx, access, k = flags & 7, s = !!(flags & 8), p = !!(flags & 16);
	var j = k > 3 ? array.length + 1 : k ? s ? 1 : 2 : 0, key = __decoratorStrings$2[k + 5];
	var initializers = k > 3 && (array[j - 1] = []), extraInitializers = array[j] || (array[j] = []);
	var desc = k && (!p && !s && (target = target.prototype), k < 5 && (k > 3 || !p) && __getOwnPropDesc$2(k < 4 ? target : {
		get [name]() {
			return __privateGet$2(this, extra);
		},
		set [name](x) {
			return __privateSet$2(this, extra, x);
		}
	}, name));
	k ? p && k < 4 && __name$2(extra, (k > 2 ? "set " : k > 1 ? "get " : "") + name) : __name$2(target, name);
	for (var i = decorators.length - 1; i >= 0; i--) {
		ctx = __decoratorContext$2(k, name, done = {}, array[3], extraInitializers);
		if (k) {
			ctx.static = s, ctx.private = p, access = ctx.access = { has: p ? (x) => __privateIn$2(target, x) : (x) => name in x };
			if (k ^ 3) access.get = p ? (x) => (k ^ 1 ? __privateGet$2 : __privateMethod$2)(x, target, k ^ 4 ? extra : desc.get) : (x) => x[name];
			if (k > 2) access.set = p ? (x, y) => __privateSet$2(x, target, y, k ^ 4 ? extra : desc.set) : (x, y) => x[name] = y;
		}
		it = (0, decorators[i])(k ? k < 4 ? p ? extra : desc[key] : k > 4 ? void 0 : {
			get: desc.get,
			set: desc.set
		} : target, ctx), done._ = 1;
		if (k ^ 4 || it === void 0) __expectFn$2(it) && (k > 4 ? initializers.unshift(it) : k ? p ? extra = it : desc[key] = it : target = it);
		else if (typeof it !== "object" || it === null) __typeError$2("Object expected");
		else __expectFn$2(fn = it.get) && (desc.get = fn), __expectFn$2(fn = it.set) && (desc.set = fn), __expectFn$2(fn = it.init) && initializers.unshift(fn);
	}
	return k || __decoratorMetadata$2(array, target), desc && __defProp$2(target, name, desc), p ? k ^ 4 ? extra : desc : target;
};
var __accessCheck$2 = (obj, member, msg) => member.has(obj) || __typeError$2("Cannot " + msg);
var __privateIn$2 = (member, obj) => Object(obj) !== obj ? __typeError$2("Cannot use the \"in\" operator on this value") : member.has(obj);
var __privateGet$2 = (obj, member, getter) => (__accessCheck$2(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd$2 = (obj, member, value) => member.has(obj) ? __typeError$2("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet$2 = (obj, member, value, setter) => (__accessCheck$2(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod$2 = (obj, member, method) => (__accessCheck$2(obj, member, "access private method"), method);
function computed(compute, comparator) {
	if (comparator) {
		let previousValue;
		return O(() => {
			const value = compute();
			if (value && previousValue && comparator(previousValue, value)) return previousValue;
			previousValue = value;
			return value;
		});
	}
	return O(compute);
}
function deepEqual(a, b) {
	if (Object.is(a, b)) return true;
	if (a === null || b === null) return false;
	if (typeof a === "function" && typeof b === "function") return a === b;
	if (a instanceof Set && b instanceof Set) {
		if (a.size !== b.size) return false;
		for (const value of a) if (!b.has(value)) return false;
		return true;
	}
	if (Array.isArray(a)) {
		if (!Array.isArray(b) || a.length !== b.length) return false;
		return !a.some((value, index) => !deepEqual(value, b[index]));
	}
	if (typeof a === "object" && typeof b === "object") {
		const aKeys = Object.keys(a);
		const bKeys = Object.keys(b);
		if (aKeys.length !== bKeys.length) return false;
		return !aKeys.some((key) => !deepEqual(a[key], b[key]));
	}
	return false;
}
function reactive({ get }, _) {
	return {
		init(value) {
			return a(value);
		},
		get() {
			return get.call(this).value;
		},
		set(newValue) {
			const current = get.call(this);
			if (current.peek() === newValue) return;
			current.value = newValue;
		}
	};
}
function derived(target, _) {
	const map = /* @__PURE__ */ new WeakMap();
	return function() {
		let result = map.get(this);
		if (!result) {
			result = computed(target.bind(this));
			map.set(this, result);
		}
		return result.value;
	};
}
function enumerable(enumerable2 = true) {
	return function(_value, context) {
		context.addInitializer(function() {
			const host = context.kind === "field" ? this : context.static ? this : Object.getPrototypeOf(this);
			const descriptor = Object.getOwnPropertyDescriptor(host, context.name);
			if (descriptor) Object.defineProperty(host, context.name, __spreadProps$1(__spreadValues$2({}, descriptor), { enumerable: enumerable2 }));
		});
	};
}
function effects(...entries) {
	const effects2 = entries.map((fn) => x(fn));
	return () => effects2.forEach((cleanup) => cleanup());
}
var _previous_dec;
var _initial_dec;
var _current_dec$1;
var _current_dec2;
var _previous_dec2;
var _initial_dec2 = [reactive];
var _init$2;
var _initial;
var _a$1;
var initial_get;
var initial_set;
var _ValueHistory_instances;
var _previous;
var _b;
var previous_get;
var previous_set;
var _current;
var _c$1;
var current_get;
var current_set;
_previous_dec2 = [reactive], _current_dec2 = [reactive], _current_dec$1 = [enumerable()], _initial_dec = [enumerable()], _previous_dec = [enumerable()];
var ValueHistory = class {
	constructor(defaultValue, equals = Object.is) {
		this.defaultValue = defaultValue;
		this.equals = equals;
		__runInitializers$2(_init$2, 5, this);
		__privateAdd$2(this, _ValueHistory_instances);
		__privateAdd$2(this, _initial, __runInitializers$2(_init$2, 8, this)), __runInitializers$2(_init$2, 11, this);
		__privateAdd$2(this, _previous, __runInitializers$2(_init$2, 12, this)), __runInitializers$2(_init$2, 15, this);
		__privateAdd$2(this, _current, __runInitializers$2(_init$2, 16, this)), __runInitializers$2(_init$2, 19, this);
		this.reset = this.reset.bind(this);
		this.reset();
	}
	get current() {
		return __privateGet$2(this, _ValueHistory_instances, current_get);
	}
	get initial() {
		return __privateGet$2(this, _ValueHistory_instances, initial_get);
	}
	get previous() {
		return __privateGet$2(this, _ValueHistory_instances, previous_get);
	}
	/** Set the current value */
	set current(value) {
		const current = f(() => __privateGet$2(this, _ValueHistory_instances, current_get));
		if (value && current && this.equals(current, value)) return;
		n(() => {
			if (!__privateGet$2(this, _ValueHistory_instances, initial_get)) __privateSet$2(this, _ValueHistory_instances, value, initial_set);
			__privateSet$2(this, _ValueHistory_instances, current, previous_set);
			__privateSet$2(this, _ValueHistory_instances, value, current_set);
		});
	}
	/** Reset the state to the initial value */
	reset(value = this.defaultValue) {
		n(() => {
			__privateSet$2(this, _ValueHistory_instances, void 0, previous_set);
			__privateSet$2(this, _ValueHistory_instances, value, initial_set);
			__privateSet$2(this, _ValueHistory_instances, value, current_set);
		});
	}
};
_init$2 = __decoratorStart$2(null);
_initial = /* @__PURE__ */ new WeakMap();
_ValueHistory_instances = /* @__PURE__ */ new WeakSet();
_previous = /* @__PURE__ */ new WeakMap();
_current = /* @__PURE__ */ new WeakMap();
_a$1 = __decorateElement$2(_init$2, 20, "#initial", _initial_dec2, _ValueHistory_instances, _initial), initial_get = _a$1.get, initial_set = _a$1.set;
_b = __decorateElement$2(_init$2, 20, "#previous", _previous_dec2, _ValueHistory_instances, _previous), previous_get = _b.get, previous_set = _b.set;
_c$1 = __decorateElement$2(_init$2, 20, "#current", _current_dec2, _ValueHistory_instances, _current), current_get = _c$1.get, current_set = _c$1.set;
__decorateElement$2(_init$2, 2, "current", _current_dec$1, ValueHistory);
__decorateElement$2(_init$2, 2, "initial", _initial_dec, ValueHistory);
__decorateElement$2(_init$2, 2, "previous", _previous_dec, ValueHistory);
__decoratorMetadata$2(_init$2, ValueHistory);
function snapshot(value) {
	return f(() => {
		const output = {};
		for (const key in value) output[key] = value[key];
		return output;
	});
}
var _store;
var WeakStore = class {
	constructor() {
		__privateAdd$2(this, _store, /* @__PURE__ */ new WeakMap());
	}
	get(key, id) {
		var _a2;
		return key ? (_a2 = __privateGet$2(this, _store).get(key)) == null ? void 0 : _a2.get(id) : void 0;
	}
	set(key, id, value) {
		var _a2;
		if (!key) return;
		if (!__privateGet$2(this, _store).has(key)) __privateGet$2(this, _store).set(key, /* @__PURE__ */ new Map());
		return (_a2 = __privateGet$2(this, _store).get(key)) == null ? void 0 : _a2.set(id, value);
	}
	clear(key) {
		var _a2;
		return key ? (_a2 = __privateGet$2(this, _store).get(key)) == null ? void 0 : _a2.clear() : void 0;
	}
};
_store = /* @__PURE__ */ new WeakMap();
//#endregion
//#region node_modules/@dnd-kit/geometry/dist/index.mjs
var __create$1 = Object.create;
var __defProp$1 = Object.defineProperty;
var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var __knownSymbol$1 = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __typeError$1 = (msg) => {
	throw TypeError(msg);
};
var __pow = Math.pow;
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
var __name$1 = (target, value) => __defProp$1(target, "name", {
	value,
	configurable: true
});
var __decoratorStart$1 = (base) => {
	var _a2;
	return [
		,
		,
		,
		__create$1((_a2 = base == null ? void 0 : base[__knownSymbol$1("metadata")]) != null ? _a2 : null)
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
	k ? p && k < 4 && __name$1(extra, (k > 2 ? "set " : k > 1 ? "get " : "") + name) : __name$1(target, name);
	for (var i = decorators.length - 1; i >= 0; i--) {
		ctx = __decoratorContext$1(k, name, done = {}, array[3], extraInitializers);
		if (k) {
			ctx.static = s, ctx.private = p, access = ctx.access = { has: p ? (x) => __privateIn$1(target, x) : (x) => name in x };
			if (k ^ 3) access.get = p ? (x) => (k ^ 1 ? __privateGet$1 : __privateMethod$1)(x, target, k ^ 4 ? extra : desc.get) : (x) => x[name];
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
var __privateIn$1 = (member, obj) => Object(obj) !== obj ? __typeError$1("Cannot use the \"in\" operator on this value") : member.has(obj);
var __privateGet$1 = (obj, member, getter) => (__accessCheck$1(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd$1 = (obj, member, value) => member.has(obj) ? __typeError$1("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet$1 = (obj, member, value, setter) => (__accessCheck$1(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod$1 = (obj, member, method) => (__accessCheck$1(obj, member, "access private method"), method);
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
var Rectangle = class _Rectangle {
	constructor(left, top, width, height) {
		this.left = left;
		this.top = top;
		this.width = width;
		this.height = height;
		this.scale = {
			x: 1,
			y: 1
		};
	}
	get inverseScale() {
		return {
			x: 1 / this.scale.x,
			y: 1 / this.scale.y
		};
	}
	translate(x, y) {
		const { top, left, width, height, scale } = this;
		const newShape = new _Rectangle(left + x, top + y, width, height);
		newShape.scale = __spreadValues$1({}, scale);
		return newShape;
	}
	get boundingRectangle() {
		const { width, height, left, top, right, bottom } = this;
		return {
			width,
			height,
			left,
			top,
			right,
			bottom
		};
	}
	get center() {
		const { left, top, right, bottom } = this;
		return new Point((left + right) / 2, (top + bottom) / 2);
	}
	get area() {
		const { width, height } = this;
		return width * height;
	}
	equals(shape) {
		if (!(shape instanceof _Rectangle)) return false;
		const { left, top, width, height } = this;
		return left === shape.left && top === shape.top && width === shape.width && height === shape.height;
	}
	containsPoint(point) {
		const { top, left, bottom, right } = this;
		return top <= point.y && point.y <= bottom && left <= point.x && point.x <= right;
	}
	intersectionArea(shape) {
		if (shape instanceof _Rectangle) return rectangleRectangleIntersection(this, shape);
		return 0;
	}
	intersectionRatio(shape) {
		const { area } = this;
		const intersectionArea = this.intersectionArea(shape);
		return intersectionArea / (shape.area + area - intersectionArea);
	}
	get bottom() {
		const { top, height } = this;
		return top + height;
	}
	get right() {
		const { left, width } = this;
		return left + width;
	}
	get aspectRatio() {
		const { width, height } = this;
		return width / height;
	}
	get corners() {
		return [
			{
				x: this.left,
				y: this.top
			},
			{
				x: this.right,
				y: this.top
			},
			{
				x: this.left,
				y: this.bottom
			},
			{
				x: this.right,
				y: this.bottom
			}
		];
	}
	static from({ top, left, width, height }) {
		return new _Rectangle(left, top, width, height);
	}
	static delta(a, b, alignment = {
		x: "center",
		y: "center"
	}) {
		const getCoordinate = (rect, axis) => {
			const align = alignment[axis];
			const start = axis === "x" ? rect.left : rect.top;
			const size = axis === "x" ? rect.width : rect.height;
			if (align == "start") return start;
			if (align == "end") return start + size;
			return start + size / 2;
		};
		return Point.delta({
			x: getCoordinate(a, "x"),
			y: getCoordinate(a, "y")
		}, {
			x: getCoordinate(b, "x"),
			y: getCoordinate(b, "y")
		});
	}
	static intersectionRatio(a, b) {
		return _Rectangle.from(a).intersectionRatio(_Rectangle.from(b));
	}
};
function rectangleRectangleIntersection(a, b) {
	const top = Math.max(b.top, a.top);
	const left = Math.max(b.left, a.left);
	const right = Math.min(b.left + b.width, a.left + a.width);
	const bottom = Math.min(b.top + b.height, a.top + a.height);
	const width = right - left;
	const height = bottom - top;
	if (left < right && top < bottom) return width * height;
	return 0;
}
var _direction_dec;
var _delta_dec;
var _a;
var _timestamp;
var _init$1;
var Position = class extends (_a = ValueHistory, _delta_dec = [derived], _direction_dec = [derived], _a) {
	constructor(initialValue) {
		const point = Point.from(initialValue);
		super(point, (a, b) => Point.equals(a, b));
		__runInitializers$1(_init$1, 5, this);
		__privateAdd$1(this, _timestamp, 0);
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
		const timeDelta = timestamp - __privateGet$1(this, _timestamp);
		const velocity = (delta2) => Math.round(delta2 / timeDelta * 100);
		n(() => {
			__privateSet$1(this, _timestamp, timestamp);
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
_init$1 = __decoratorStart$1(_a);
_timestamp = /* @__PURE__ */ new WeakMap();
__decorateElement$1(_init$1, 2, "delta", _delta_dec, Position);
__decorateElement$1(_init$1, 2, "direction", _direction_dec, Position);
__decoratorMetadata$1(_init$1, Position);
function exceedsDistance({ x, y }, distance) {
	const dx = Math.abs(x);
	const dy = Math.abs(y);
	if (typeof distance === "number") return Math.sqrt(__pow(dx, 2) + __pow(dy, 2)) > distance;
	if ("x" in distance && "y" in distance) return dx > distance.x && dy > distance.y;
	if ("x" in distance) return dx > distance.x;
	if ("y" in distance) return dy > distance.y;
	return false;
}
var Axis = /* @__PURE__ */ ((Axis2) => {
	Axis2["Horizontal"] = "x";
	Axis2["Vertical"] = "y";
	return Axis2;
})(Axis || {});
var Axes = Object.values(Axis);
//#endregion
//#region node_modules/@dnd-kit/abstract/index.js
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
var __name = (target, value) => __defProp(target, "name", {
	value,
	configurable: true
});
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
		__create((_a = base == null ? void 0 : base[__knownSymbol("metadata")]) != null ? _a : null)
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
	var fn, it, done, ctx, access, k = flags & 7, s = !!(flags & 8), p = !!(flags & 16);
	var j = k > 3 ? array.length + 1 : k ? s ? 1 : 2 : 0, key = __decoratorStrings[k + 5];
	var initializers = k > 3 && (array[j - 1] = []), extraInitializers = array[j] || (array[j] = []);
	var desc = k && (!p && !s && (target = target.prototype), k < 5 && (k > 3 || !p) && __getOwnPropDesc(k < 4 ? target : {
		get [name]() {
			return __privateGet(this, extra);
		},
		set [name](x) {
			return __privateSet(this, extra, x);
		}
	}, name));
	k ? p && k < 4 && __name(extra, (k > 2 ? "set " : k > 1 ? "get " : "") + name) : __name(target, name);
	for (var i = decorators.length - 1; i >= 0; i--) {
		ctx = __decoratorContext(k, name, done = {}, array[3], extraInitializers);
		if (k) {
			ctx.static = s, ctx.private = p, access = ctx.access = { has: p ? (x) => __privateIn(target, x) : (x) => name in x };
			if (k ^ 3) access.get = p ? (x) => (k ^ 1 ? __privateGet : __privateMethod)(x, target, k ^ 4 ? extra : desc.get) : (x) => x[name];
			if (k > 2) access.set = p ? (x, y) => __privateSet(x, target, y, k ^ 4 ? extra : desc.set) : (x, y) => x[name] = y;
		}
		it = (0, decorators[i])(k ? k < 4 ? p ? extra : desc[key] : k > 4 ? void 0 : {
			get: desc.get,
			set: desc.set
		} : target, ctx), done._ = 1;
		if (k ^ 4 || it === void 0) __expectFn(it) && (k > 4 ? initializers.unshift(it) : k ? p ? extra = it : desc[key] = it : target = it);
		else if (typeof it !== "object" || it === null) __typeError("Object expected");
		else __expectFn(fn = it.get) && (desc.get = fn), __expectFn(fn = it.set) && (desc.set = fn), __expectFn(fn = it.init) && initializers.unshift(fn);
	}
	return k || __decoratorMetadata(array, target), desc && __defProp(target, name, desc), p ? k ^ 4 ? extra : desc : target;
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateIn = (member, obj) => Object(obj) !== obj ? __typeError("Cannot use the \"in\" operator on this value") : member.has(obj);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
function configure(plugin, options) {
	return {
		plugin,
		options
	};
}
function configurator(plugin) {
	return (options) => {
		return configure(plugin, options);
	};
}
function descriptor(plugin) {
	if (typeof plugin === "function") return {
		plugin,
		options: void 0
	};
	return plugin;
}
var _disabled_dec = [reactive];
var _init;
var _disabled;
var _cleanupFunctions;
var Plugin = class {
	/**
	* Creates a new plugin instance.
	*
	* @param manager - The drag and drop manager that owns this plugin
	* @param options - Optional configuration for the plugin
	*/
	constructor(manager, options) {
		this.manager = manager;
		this.options = options;
		__privateAdd(this, _disabled, __runInitializers(_init, 8, this, false)), __runInitializers(_init, 11, this);
		__privateAdd(this, _cleanupFunctions, /* @__PURE__ */ new Set());
	}
	/**
	* Enables a disabled plugin instance.
	*
	* @remarks
	* This method triggers effects when called.
	*/
	enable() {
		this.disabled = false;
	}
	/**
	* Disables an enabled plugin instance.
	*
	* @remarks
	* This method triggers effects when called.
	*/
	disable() {
		this.disabled = true;
	}
	/**
	* Checks if the plugin instance is disabled.
	*
	* @returns true if the plugin is disabled
	* @remarks
	* This method does not trigger effects when accessed.
	*/
	isDisabled() {
		return f(() => {
			return this.disabled;
		});
	}
	/**
	* Configures a plugin instance with new options.
	*
	* @param options - The new options to apply
	*/
	configure(options) {
		this.options = options;
	}
	/**
	* Registers an effect that will be cleaned up when the plugin is destroyed.
	*
	* @param callback - The effect callback to register
	* @returns A function to dispose of the effect
	*/
	registerEffect(callback) {
		const dispose = x(callback.bind(this));
		__privateGet(this, _cleanupFunctions).add(dispose);
		return dispose;
	}
	/**
	* Destroys a plugin instance and cleans up its resources.
	*
	* @remarks
	* This method:
	* - Calls all registered cleanup functions
	* - Should be overridden by subclasses to clean up additional resources
	*/
	destroy() {
		__privateGet(this, _cleanupFunctions).forEach((cleanup) => cleanup());
	}
	/**
	* Configures a plugin constructor with options.
	*
	* @param options - The options to configure the constructor with
	* @returns The configured plugin constructor
	*
	* @remarks
	* This method is used to configure the options that the
	* plugin constructor will use to create plugin instances.
	*/
	static configure(options) {
		return configure(this, options);
	}
};
_init = __decoratorStart(null);
_disabled = /* @__PURE__ */ new WeakMap();
_cleanupFunctions = /* @__PURE__ */ new WeakMap();
__decorateElement(_init, 4, "disabled", _disabled_dec, Plugin, _disabled);
__decoratorMetadata(_init, Plugin);
var CorePlugin = class extends Plugin {};
var _previousValues;
var PluginRegistry = class {
	/**
	* Creates a new plugin registry.
	*
	* @param manager - The drag and drop manager that owns this registry
	*/
	constructor(manager) {
		this.manager = manager;
		this.instances = /* @__PURE__ */ new Map();
		__privateAdd(this, _previousValues, []);
	}
	/**
	* Gets all registered plugin instances.
	*
	* @returns An array of all active plugin instances
	*/
	get values() {
		return Array.from(this.instances.values());
	}
	/**
	* Sets the list of plugins to be used by the registry.
	*
	* @param entries - Array of plugin constructors or descriptors
	* @remarks
	* This method:
	* - Filters out duplicate plugins
	* - Unregisters plugins that are no longer in use
	* - Registers new plugins with their options
	*/
	set values(entries) {
		const descriptors = entries.map(descriptor).reduce((acc, descriptor2) => {
			const existing = acc.find(({ plugin }) => plugin === descriptor2.plugin);
			if (existing) {
				existing.options = descriptor2.options;
				return acc;
			}
			return [...acc, descriptor2];
		}, []);
		const constructors = descriptors.map(({ plugin }) => plugin);
		for (const plugin of __privateGet(this, _previousValues)) if (!constructors.includes(plugin)) {
			if (plugin.prototype instanceof CorePlugin) continue;
			this.unregister(plugin);
		}
		for (const { plugin, options } of descriptors) this.register(plugin, options);
		__privateSet(this, _previousValues, constructors);
	}
	/**
	* Gets a plugin instance by its constructor.
	*
	* @param plugin - The plugin constructor to look up
	* @returns The plugin instance or undefined if not found
	*/
	get(plugin) {
		return this.instances.get(plugin);
	}
	/**
	* Registers a new plugin instance.
	*
	* @param plugin - The plugin constructor to register
	* @param options - Optional configuration for the plugin
	* @returns The registered plugin instance
	* @remarks
	* If the plugin is already registered, its options will be updated
	* and the existing instance will be returned.
	*/
	register(plugin, options) {
		const existingInstance = this.instances.get(plugin);
		if (existingInstance) {
			if (existingInstance.options !== options) existingInstance.options = options;
			return existingInstance;
		}
		const instance = new plugin(this.manager, options);
		this.instances.set(plugin, instance);
		return instance;
	}
	/**
	* Unregisters a plugin instance.
	*
	* @param plugin - The plugin constructor to unregister
	* @remarks
	* This method:
	* - Destroys the plugin instance
	* - Removes it from the registry
	*/
	unregister(plugin) {
		const instance = this.instances.get(plugin);
		if (instance) {
			instance.destroy();
			this.instances.delete(plugin);
		}
	}
	/**
	* Destroys all registered plugin instances.
	*
	* @remarks
	* This method:
	* - Calls destroy() on all plugin instances
	* - Clears the registry
	*/
	destroy() {
		for (const plugin of this.instances.values()) plugin.destroy();
		this.instances.clear();
	}
};
_previousValues = /* @__PURE__ */ new WeakMap();
function sortCollisions(a, b) {
	if (a.priority === b.priority) {
		if (a.type === b.type) return b.value - a.value;
		return b.type - a.type;
	}
	return b.priority - a.priority;
}
var DEFAULT_VALUE = [];
var _previousCoordinates;
var _collisions;
var CollisionObserver = class extends Plugin {
	/**
	* Creates a new CollisionObserver instance.
	*
	* @param manager - The drag drop manager instance
	*/
	constructor(manager) {
		super(manager);
		__privateAdd(this, _previousCoordinates);
		__privateAdd(this, _collisions);
		this.computeCollisions = this.computeCollisions.bind(this);
		__privateSet(this, _collisions, a(DEFAULT_VALUE));
		this.destroy = effects(() => {
			const collisions = this.computeCollisions();
			const coordinates = f(() => this.manager.dragOperation.position.current);
			if (collisions !== DEFAULT_VALUE) {
				const previousCoordinates = __privateGet(this, _previousCoordinates);
				__privateSet(this, _previousCoordinates, coordinates);
				if (previousCoordinates && coordinates.x == previousCoordinates.x && coordinates.y == previousCoordinates.y) return;
			} else __privateSet(this, _previousCoordinates, void 0);
			__privateGet(this, _collisions).value = collisions;
		}, () => {
			const { dragOperation } = this.manager;
			if (dragOperation.status.initialized) this.forceUpdate();
		});
	}
	/**
	* Forces an immediate update of collision detection.
	*
	* @param immediate - If true, updates collisions immediately. If false, resets previous coordinates.
	*/
	forceUpdate(immediate = true) {
		f(() => {
			if (immediate) __privateGet(this, _collisions).value = this.computeCollisions();
			else __privateSet(this, _previousCoordinates, void 0);
		});
	}
	/**
	* Computes collisions between draggable and droppable elements.
	*
	* @param entries - Optional array of droppable elements to check. If not provided, uses all registered droppables.
	* @param collisionDetector - Optional custom collision detector function
	* @returns Array of detected collisions, sorted by priority
	*/
	computeCollisions(entries, collisionDetector) {
		const { registry, dragOperation } = this.manager;
		const { source, shape, status } = dragOperation;
		if (!status.initialized || !shape) return DEFAULT_VALUE;
		const collisions = [];
		const potentialTargets = [];
		for (const entry of entries != null ? entries : registry.droppables) {
			if (entry.disabled) continue;
			if (source && !entry.accepts(source)) continue;
			const detectCollision = collisionDetector != null ? collisionDetector : entry.collisionDetector;
			if (!detectCollision) continue;
			potentialTargets.push(entry);
			entry.shape;
			const collision = f(() => detectCollision({
				droppable: entry,
				dragOperation
			}));
			if (collision) {
				if (entry.collisionPriority != null) collision.priority = entry.collisionPriority;
				collisions.push(collision);
			}
		}
		if (potentialTargets.length === 0) return DEFAULT_VALUE;
		collisions.sort(sortCollisions);
		return collisions;
	}
	/**
	* Gets the current collisions signal value.
	*/
	get collisions() {
		return __privateGet(this, _collisions).value;
	}
};
_previousCoordinates = /* @__PURE__ */ new WeakMap();
_collisions = /* @__PURE__ */ new WeakMap();
var _disabled_dec2;
var _data_dec;
var _manager_dec = [reactive];
var _Entity_static;
var flushIdChanges_fn;
var _init2;
var _manager;
var _idSignal;
var _data;
var _disabled2;
_data_dec = [reactive], _disabled_dec2 = [reactive];
var _Entity = class _Entity {
	/**
	* Creates a new instance of the `Entity` class.
	*
	* @param input - An object containing the initial properties of the entity.
	* @param manager - The manager that controls the drag and drop operations.
	*/
	constructor(input, manager) {
		__privateAdd(this, _manager, __runInitializers(_init2, 8, this)), __runInitializers(_init2, 11, this);
		/**
		* The unique identifier of the entity.
		*
		* Setting this property defers the signal update to a microtask,
		* batching multiple id changes together atomically. This ensures
		* that when entities swap ids (e.g. during sorting with virtualization),
		* all registry updates happen in a single transaction.
		*/
		__privateAdd(this, _idSignal);
		__privateAdd(this, _data, __runInitializers(_init2, 12, this)), __runInitializers(_init2, 15, this);
		__privateAdd(this, _disabled2, __runInitializers(_init2, 16, this)), __runInitializers(_init2, 19, this);
		const { effects: effects6, id, data = {}, disabled = false, register = true } = input;
		let previousId = id;
		__privateSet(this, _idSignal, a(id));
		this.manager = manager;
		this.data = data;
		this.disabled = disabled;
		this.effects = () => {
			var _a;
			return [() => {
				const { id: id2, manager: manager2 } = this;
				if (id2 === previousId) return;
				previousId = id2;
				manager2?.registry.register(this);
				return () => manager2 == null ? void 0 : manager2.registry.unregister(this);
			}, ...(_a = effects6 == null ? void 0 : effects6()) != null ? _a : []];
		};
		this.register = this.register.bind(this);
		this.unregister = this.unregister.bind(this);
		this.destroy = this.destroy.bind(this);
		if (manager && register) queueMicrotask(this.register);
	}
	get id() {
		var _a, _b;
		const signalValue = __privateGet(this, _idSignal).value;
		return (_b = (_a = _Entity.pendingIdChanges) == null ? void 0 : _a.get(this)) != null ? _b : signalValue;
	}
	set id(value) {
		var _a, _b;
		if (value === ((_b = (_a = _Entity.pendingIdChanges) == null ? void 0 : _a.get(this)) != null ? _b : __privateGet(this, _idSignal).peek())) return;
		if (!_Entity.pendingIdChanges) {
			_Entity.pendingIdChanges = /* @__PURE__ */ new Map();
			queueMicrotask(() => {
				var _a2;
				return __privateMethod(_a2 = _Entity, _Entity_static, flushIdChanges_fn).call(_a2);
			});
		}
		_Entity.pendingIdChanges.set(this, value);
	}
	/**
	* A method that registers the entity with the manager.
	* @returns CleanupFunction | void
	*/
	register() {
		var _a;
		return (_a = this.manager) == null ? void 0 : _a.registry.register(this);
	}
	/**
	* A method that unregisters the entity from the manager.
	* @returns void
	*/
	unregister() {
		var _a;
		(_a = this.manager) == null || _a.registry.unregister(this);
	}
	/**
	* A method that cleans up the entity when it is no longer needed.
	* @returns void
	*/
	destroy() {
		var _a;
		(_a = this.manager) == null || _a.registry.unregister(this);
	}
};
_init2 = __decoratorStart(null);
_Entity_static = /* @__PURE__ */ new WeakSet();
flushIdChanges_fn = function() {
	const changes = _Entity.pendingIdChanges;
	_Entity.pendingIdChanges = null;
	if (changes) n(() => {
		for (const [entity, id] of changes) __privateGet(entity, _idSignal).value = id;
	});
};
_manager = /* @__PURE__ */ new WeakMap();
_idSignal = /* @__PURE__ */ new WeakMap();
_data = /* @__PURE__ */ new WeakMap();
_disabled2 = /* @__PURE__ */ new WeakMap();
__decorateElement(_init2, 4, "manager", _manager_dec, _Entity, _manager);
__decorateElement(_init2, 4, "data", _data_dec, _Entity, _data);
__decorateElement(_init2, 4, "disabled", _disabled_dec2, _Entity, _disabled2);
__privateAdd(_Entity, _Entity_static);
__decoratorMetadata(_init2, _Entity);
_Entity.pendingIdChanges = null;
var Entity = _Entity;
var EntityRegistry = class {
	constructor() {
		this.map = a(/* @__PURE__ */ new Map());
		this.cleanupFunctions = /* @__PURE__ */ new WeakMap();
		/**
		* Registers a entity in the registry.
		* @param key - The unique identifier of the entity.
		* @param value - The entity to register.
		* @returns A function that unregisters the entity.
		*/
		this.register = (key, value) => {
			const current = this.map.peek();
			const currentValue = current.get(key);
			const unregister = () => this.unregister(key, value);
			if (currentValue === value) return unregister;
			if (currentValue) {
				if (currentValue.id === key) {
					this.cleanupFunctions.get(currentValue)?.();
					this.cleanupFunctions.delete(currentValue);
				}
			}
			const updatedMap = new Map(current);
			for (const [existingKey, existingValue] of current) if (existingValue === value && existingKey !== key) {
				updatedMap.delete(existingKey);
				break;
			}
			updatedMap.set(key, value);
			this.map.value = updatedMap;
			const cleanup = effects(...value.effects());
			this.cleanupFunctions.set(value, cleanup);
			return unregister;
		};
		/**
		* Unregisters an entity from the registry.
		* @param key - The unique identifier of the entity.
		* @param value - The entity instance to unregister.
		*/
		this.unregister = (key, value) => {
			const current = this.map.peek();
			if (current.get(key) !== value) return;
			this.cleanupFunctions.get(value)?.();
			this.cleanupFunctions.delete(value);
			const updatedMap = new Map(current);
			updatedMap.delete(key);
			this.map.value = updatedMap;
		};
	}
	/**
	* Iterator for the EntityRegistry class.
	* @returns An iterator for the values in the map.
	*/
	[Symbol.iterator]() {
		return this.map.peek().values();
	}
	get value() {
		return this.map.value.values();
	}
	/**
	* Checks if a entity with the given identifier exists in the registry.
	* @param identifier - The unique identifier of the entity.
	* @returns True if the entity exists, false otherwise.
	*/
	has(identifier) {
		return this.map.value.has(identifier);
	}
	/**
	* Retrieves a entity from the registry using its identifier.
	* @param identifier - The unique identifier of the entity.
	* @returns The entity if it exists, undefined otherwise.
	*/
	get(identifier) {
		return this.map.value.get(identifier);
	}
	/**
	* Destroys all entries in the registry and clears the registry.
	*/
	destroy() {
		for (const entry of this) {
			this.cleanupFunctions.get(entry)?.();
			entry.destroy();
		}
		this.map.value = /* @__PURE__ */ new Map();
	}
};
var _isDragSource_dec;
var _isDragging_dec;
var _isDropping_dec;
var _status_dec;
var _modifiers_dec;
var _type_dec;
var _c;
var _init3;
var _type;
var _modifiers;
var _status;
var Draggable = class extends (_c = Entity, _type_dec = [reactive], _modifiers_dec = [reactive], _status_dec = [reactive], _isDropping_dec = [derived], _isDragging_dec = [derived], _isDragSource_dec = [derived], _c) {
	constructor(_a, manager) {
		var _b = _a, { modifiers, type, sensors, plugins, effects: effects6 } = _b, input = __objRest(_b, [
			"modifiers",
			"type",
			"sensors",
			"plugins",
			"effects"
		]);
		super(__spreadProps(__spreadValues({}, input), { effects: () => {
			var _a2;
			return [...(_a2 = effects6 == null ? void 0 : effects6()) != null ? _a2 : [], () => {
				const { manager: manager2, plugins: plugins2 } = this;
				if (!manager2 || !plugins2) return;
				for (const entry of plugins2) {
					const { plugin } = descriptor(entry);
					manager2.registry.plugins.register(plugin);
				}
			}];
		} }), manager);
		__runInitializers(_init3, 5, this);
		__privateAdd(this, _type, __runInitializers(_init3, 8, this)), __runInitializers(_init3, 11, this);
		__privateAdd(this, _modifiers, __runInitializers(_init3, 12, this)), __runInitializers(_init3, 15, this);
		__privateAdd(this, _status, __runInitializers(_init3, 16, this, this.isDragSource ? "dragging" : "idle")), __runInitializers(_init3, 19, this);
		this.type = type;
		this.sensors = sensors;
		this.modifiers = modifiers;
		this.alignment = input.alignment;
		this.plugins = plugins;
	}
	/**
	* Look up per-entity options for a given plugin constructor.
	*/
	pluginConfig(plugin) {
		if (!this.plugins) return void 0;
		for (const entry of this.plugins) {
			const desc = descriptor(entry);
			if (desc.plugin === plugin) return desc.options;
		}
	}
	get isDropping() {
		return this.status === "dropping" && this.isDragSource;
	}
	get isDragging() {
		return this.status === "dragging" && this.isDragSource;
	}
	get isDragSource() {
		var _a, _b;
		return ((_b = (_a = this.manager) == null ? void 0 : _a.dragOperation.source) == null ? void 0 : _b.id) === this.id;
	}
};
_init3 = __decoratorStart(_c);
_type = /* @__PURE__ */ new WeakMap();
_modifiers = /* @__PURE__ */ new WeakMap();
_status = /* @__PURE__ */ new WeakMap();
__decorateElement(_init3, 4, "type", _type_dec, Draggable, _type);
__decorateElement(_init3, 4, "modifiers", _modifiers_dec, Draggable, _modifiers);
__decorateElement(_init3, 4, "status", _status_dec, Draggable, _status);
__decorateElement(_init3, 2, "isDropping", _isDropping_dec, Draggable);
__decorateElement(_init3, 2, "isDragging", _isDragging_dec, Draggable);
__decorateElement(_init3, 2, "isDragSource", _isDragSource_dec, Draggable);
__decoratorMetadata(_init3, Draggable);
var _isDropTarget_dec;
var _shape_dec;
var _collisionPriority_dec;
var _collisionDetector_dec;
var _type_dec2;
var _accept_dec;
var _c2;
var _init4;
var _accept;
var _type2;
var _collisionDetector;
var _collisionPriority;
var _shape;
var Droppable = class extends (_c2 = Entity, _accept_dec = [reactive], _type_dec2 = [reactive], _collisionDetector_dec = [reactive], _collisionPriority_dec = [reactive], _shape_dec = [reactive], _isDropTarget_dec = [derived], _c2) {
	constructor(_a, manager) {
		var _b = _a, { accept, collisionDetector, collisionPriority, type } = _b, input = __objRest(_b, [
			"accept",
			"collisionDetector",
			"collisionPriority",
			"type"
		]);
		super(input, manager);
		__runInitializers(_init4, 5, this);
		__privateAdd(this, _accept, __runInitializers(_init4, 8, this)), __runInitializers(_init4, 11, this);
		__privateAdd(this, _type2, __runInitializers(_init4, 12, this)), __runInitializers(_init4, 15, this);
		__privateAdd(this, _collisionDetector, __runInitializers(_init4, 16, this)), __runInitializers(_init4, 19, this);
		__privateAdd(this, _collisionPriority, __runInitializers(_init4, 20, this)), __runInitializers(_init4, 23, this);
		__privateAdd(this, _shape, __runInitializers(_init4, 24, this)), __runInitializers(_init4, 27, this);
		this.accept = accept;
		this.collisionDetector = collisionDetector;
		this.collisionPriority = collisionPriority;
		this.type = type;
	}
	/**
	* Checks whether or not the droppable accepts a given draggable.
	*
	* @param draggable - The draggable to check
	* @returns true if the draggable can be dropped here
	*/
	accepts(draggable) {
		const { accept } = this;
		if (!accept) return true;
		if (typeof accept === "function") return accept(draggable);
		if (!draggable.type) return false;
		if (Array.isArray(accept)) return accept.includes(draggable.type);
		return draggable.type === accept;
	}
	get isDropTarget() {
		var _a, _b;
		return ((_b = (_a = this.manager) == null ? void 0 : _a.dragOperation.target) == null ? void 0 : _b.id) === this.id;
	}
};
_init4 = __decoratorStart(_c2);
_accept = /* @__PURE__ */ new WeakMap();
_type2 = /* @__PURE__ */ new WeakMap();
_collisionDetector = /* @__PURE__ */ new WeakMap();
_collisionPriority = /* @__PURE__ */ new WeakMap();
_shape = /* @__PURE__ */ new WeakMap();
__decorateElement(_init4, 4, "accept", _accept_dec, Droppable, _accept);
__decorateElement(_init4, 4, "type", _type_dec2, Droppable, _type2);
__decorateElement(_init4, 4, "collisionDetector", _collisionDetector_dec, Droppable, _collisionDetector);
__decorateElement(_init4, 4, "collisionPriority", _collisionPriority_dec, Droppable, _collisionPriority);
__decorateElement(_init4, 4, "shape", _shape_dec, Droppable, _shape);
__decorateElement(_init4, 2, "isDropTarget", _isDropTarget_dec, Droppable);
__decoratorMetadata(_init4, Droppable);
var Monitor = class {
	constructor() {
		this.registry = /* @__PURE__ */ new Map();
	}
	/**
	* Adds an event listener for the specified event type.
	*
	* @param name - The name of the event to listen for
	* @param handler - The function to call when the event occurs
	* @returns A function to remove the event listener
	*/
	addEventListener(name, handler) {
		const { registry } = this;
		const listeners = new Set(registry.get(name));
		listeners.add(handler);
		registry.set(name, listeners);
		return () => this.removeEventListener(name, handler);
	}
	/**
	* Removes an event listener for the specified event type.
	*
	* @param name - The name of the event
	* @param handler - The function to remove
	*/
	removeEventListener(name, handler) {
		const { registry } = this;
		const listeners = new Set(registry.get(name));
		listeners.delete(handler);
		registry.set(name, listeners);
	}
	/**
	* Dispatches an event to all registered listeners.
	*
	* @param name - The name of the event to dispatch
	* @param args - Arguments to pass to the event handlers
	*/
	dispatch(name, ...args) {
		const { registry } = this;
		const listeners = registry.get(name);
		if (!listeners) return;
		for (const listener of listeners) listener(...args);
	}
};
var DragDropMonitor = class extends Monitor {
	/**
	* Creates a new drag and drop monitor.
	*
	* @param manager - The drag and drop manager to monitor
	*/
	constructor(manager) {
		super();
		this.manager = manager;
	}
	/**
	* Dispatches a drag and drop event.
	*
	* @param type - The type of event to dispatch
	* @param event - The event data to dispatch
	*/
	dispatch(type, event) {
		const args = [event, this.manager];
		super.dispatch(type, ...args);
	}
};
function defaultPreventable(event, cancelable = true) {
	let defaultPrevented = false;
	return __spreadProps(__spreadValues({}, event), {
		cancelable,
		get defaultPrevented() {
			return defaultPrevented;
		},
		preventDefault() {
			if (!cancelable) return;
			defaultPrevented = true;
		}
	});
}
var CollisionNotifier = class extends CorePlugin {
	constructor(manager) {
		super(manager);
		const isEqual = (a, b) => a.map(({ id }) => id).join("") === b.map(({ id }) => id).join("");
		let previousCollisions = [];
		this.destroy = effects(() => {
			const { dragOperation, collisionObserver } = manager;
			if (dragOperation.status.initializing) {
				previousCollisions = [];
				collisionObserver.enable();
			}
		}, () => {
			const { collisionObserver, monitor } = manager;
			const { collisions } = collisionObserver;
			if (collisionObserver.isDisabled()) return;
			if (Entity.pendingIdChanges) return;
			const event = defaultPreventable({ collisions });
			monitor.dispatch("collision", event);
			if (event.defaultPrevented) return;
			if (isEqual(collisions, previousCollisions)) return;
			else previousCollisions = collisions;
			const [firstCollision] = collisions;
			f(() => {
				var _a;
				if ((firstCollision == null ? void 0 : firstCollision.id) !== ((_a = manager.dragOperation.target) == null ? void 0 : _a.id)) {
					collisionObserver.disable();
					manager.actions.setDropTarget(firstCollision == null ? void 0 : firstCollision.id).then(() => {
						collisionObserver.enable();
					});
				}
			});
		});
	}
};
var CollisionPriority = /* @__PURE__ */ ((CollisionPriority2) => {
	CollisionPriority2[CollisionPriority2["Lowest"] = 0] = "Lowest";
	CollisionPriority2[CollisionPriority2["Low"] = 1] = "Low";
	CollisionPriority2[CollisionPriority2["Normal"] = 2] = "Normal";
	CollisionPriority2[CollisionPriority2["High"] = 3] = "High";
	CollisionPriority2[CollisionPriority2["Highest"] = 4] = "Highest";
	return CollisionPriority2;
})(CollisionPriority || {});
var CollisionType = /* @__PURE__ */ ((CollisionType2) => {
	CollisionType2[CollisionType2["Collision"] = 0] = "Collision";
	CollisionType2[CollisionType2["ShapeIntersection"] = 1] = "ShapeIntersection";
	CollisionType2[CollisionType2["PointerIntersection"] = 2] = "PointerIntersection";
	return CollisionType2;
})(CollisionType || {});
var _dropped_dec;
var _dragging_dec;
var _initialized_dec;
var _initializing_dec;
var _idle_dec;
var _current_dec;
var _value_dec = [reactive];
var _init5;
var _value;
_current_dec = [derived], _idle_dec = [derived], _initializing_dec = [derived], _initialized_dec = [derived], _dragging_dec = [derived], _dropped_dec = [derived];
var Status = class {
	constructor() {
		__runInitializers(_init5, 5, this);
		__privateAdd(this, _value, __runInitializers(_init5, 8, this, "idle")), __runInitializers(_init5, 11, this);
	}
	get current() {
		return this.value;
	}
	get idle() {
		return this.value === "idle";
	}
	get initializing() {
		return this.value === "initializing";
	}
	get initialized() {
		const { value } = this;
		return value !== "idle" && value !== "initialization-pending";
	}
	get dragging() {
		return this.value === "dragging";
	}
	get dropped() {
		return this.value === "dropped";
	}
	/**
	* Sets the current status value.
	*
	* @param value - The new status value
	*/
	set(value) {
		this.value = value;
	}
};
_init5 = __decoratorStart(null);
_value = /* @__PURE__ */ new WeakMap();
__decorateElement(_init5, 4, "value", _value_dec, Status, _value);
__decorateElement(_init5, 2, "current", _current_dec, Status);
__decorateElement(_init5, 2, "idle", _idle_dec, Status);
__decorateElement(_init5, 2, "initializing", _initializing_dec, Status);
__decorateElement(_init5, 2, "initialized", _initialized_dec, Status);
__decorateElement(_init5, 2, "dragging", _dragging_dec, Status);
__decorateElement(_init5, 2, "dropped", _dropped_dec, Status);
__decoratorMetadata(_init5, Status);
var DragActions = class {
	/**
	* Creates a new instance of drag actions.
	*
	* @param manager - The drag and drop manager instance
	*/
	constructor(manager) {
		this.manager = manager;
	}
	/**
	* Sets the source of the drag operation.
	*
	* @param source - The draggable entity or its unique identifier
	*/
	setDragSource(source) {
		const { dragOperation } = this.manager;
		dragOperation.sourceIdentifier = typeof source === "string" || typeof source === "number" ? source : source.id;
	}
	/**
	* Sets the target of the drop operation.
	*
	* @param identifier - The unique identifier of the droppable entity or null/undefined
	* @returns A promise that resolves to true if the drop was prevented
	*/
	setDropTarget(identifier) {
		return f(() => {
			const { dragOperation } = this.manager;
			const id = identifier != null ? identifier : null;
			if (dragOperation.targetIdentifier === id) return Promise.resolve(false);
			dragOperation.targetIdentifier = id;
			const event = defaultPreventable({ operation: dragOperation.snapshot() });
			if (dragOperation.status.dragging) this.manager.monitor.dispatch("dragover", event);
			return this.manager.renderer.rendering.then(() => event.defaultPrevented);
		});
	}
	/**
	* Starts a new drag operation.
	*
	* @param args - Configuration for the drag operation
	* @param args.event - The event that initiated the drag
	* @param args.source - The source draggable entity or its identifier
	* @param args.coordinates - The initial coordinates of the drag
	* @returns true if the drag operation started successfully
	* @throws {Error} If there is no drag source or another operation is active
	*/
	start(args) {
		return f(() => {
			const { dragOperation } = this.manager;
			if (args.source != null) this.setDragSource(args.source);
			if (!dragOperation.source) throw new Error("Cannot start a drag operation without a drag source");
			if (!dragOperation.status.idle) throw new Error("Cannot start a drag operation while another is active");
			const controller = new AbortController();
			const { event: nativeEvent, coordinates } = args;
			n(() => {
				dragOperation.status.set("initialization-pending");
				dragOperation.shape = null;
				dragOperation.canceled = false;
				dragOperation.activatorEvent = nativeEvent != null ? nativeEvent : null;
				dragOperation.position.reset(coordinates);
			});
			const beforeStartEvent = defaultPreventable({ operation: dragOperation.snapshot() });
			this.manager.monitor.dispatch("beforedragstart", beforeStartEvent);
			if (beforeStartEvent.defaultPrevented) {
				dragOperation.reset();
				controller.abort();
				return controller;
			}
			dragOperation.status.set("initializing");
			dragOperation.controller = controller;
			this.manager.renderer.rendering.then(() => {
				if (controller.signal.aborted) return;
				const { status } = dragOperation;
				if (status.current !== "initializing") return;
				n(() => {
					dragOperation.status.set("dragging");
					this.manager.monitor.dispatch("dragstart", {
						nativeEvent,
						operation: dragOperation.snapshot(),
						cancelable: false
					});
				});
			});
			return controller;
		});
	}
	/**
	* Moves the dragged entity to a new position.
	*
	* @param args - Configuration for the move operation
	* @param args.by - Relative coordinates to move by
	* @param args.to - Absolute coordinates to move to
	* @param args.event - The event that triggered the move
	* @param args.cancelable - Whether the move can be canceled
	* @param args.propagate - Whether to dispatch dragmove events
	*/
	move(args) {
		return f(() => {
			var _a, _b;
			const { dragOperation } = this.manager;
			const { status, controller } = dragOperation;
			if (!status.dragging || !controller || controller.signal.aborted) return;
			const event = defaultPreventable({
				nativeEvent: args.event,
				operation: dragOperation.snapshot(),
				by: args.by,
				to: args.to
			}, (_a = args.cancelable) != null ? _a : true);
			if ((_b = args.propagate) != null ? _b : true) this.manager.monitor.dispatch("dragmove", event);
			queueMicrotask(() => {
				var _a2, _b2, _c3, _d, _e;
				if (event.defaultPrevented) return;
				const coordinates = (_e = args.to) != null ? _e : {
					x: dragOperation.position.current.x + ((_b2 = (_a2 = args.by) == null ? void 0 : _a2.x) != null ? _b2 : 0),
					y: dragOperation.position.current.y + ((_d = (_c3 = args.by) == null ? void 0 : _c3.y) != null ? _d : 0)
				};
				dragOperation.position.current = coordinates;
			});
		});
	}
	/**
	* Stops the current drag operation.
	*
	* @param args - Configuration for stopping the operation
	* @param args.event - The event that triggered the stop
	* @param args.canceled - Whether the operation was canceled
	* @remarks
	* This method:
	* - Dispatches a dragend event
	* - Allows suspension of the operation
	* - Handles cleanup of the operation state
	*/
	stop(args = {}) {
		return f(() => {
			var _a, _b;
			const { dragOperation } = this.manager;
			const { controller } = dragOperation;
			if (!controller || controller.signal.aborted) return;
			let promise;
			const suspend = () => {
				const output = {
					resume: () => {},
					abort: () => {}
				};
				promise = new Promise((resolve, reject) => {
					output.resume = resolve;
					output.abort = reject;
				});
				return output;
			};
			controller.abort();
			const end = () => {
				this.manager.renderer.rendering.then(() => {
					dragOperation.status.set("dropped");
					const dropping = f(() => {
						var _a2;
						return ((_a2 = dragOperation.source) == null ? void 0 : _a2.status) === "dropping";
					});
					const cleanup = () => {
						if (dragOperation.controller === controller) dragOperation.controller = void 0;
						dragOperation.reset();
					};
					if (dropping) {
						const { source } = dragOperation;
						const dispose = x(() => {
							if ((source == null ? void 0 : source.status) === "idle") {
								dispose();
								cleanup();
							}
						});
					} else this.manager.renderer.rendering.then(cleanup);
				});
			};
			dragOperation.canceled = (_a = args.canceled) != null ? _a : false;
			this.manager.monitor.dispatch("dragend", {
				nativeEvent: args.event,
				operation: dragOperation.snapshot(),
				canceled: (_b = args.canceled) != null ? _b : false,
				suspend
			});
			if (promise) promise.then(end).catch(() => dragOperation.reset());
			else end();
		});
	}
};
var Sensor = class extends Plugin {
	/**
	* Creates a new sensor instance.
	*
	* @param manager - The drag drop manager instance
	* @param options - Optional sensor configuration
	*/
	constructor(manager, options) {
		super(manager, options);
		this.manager = manager;
		this.options = options;
	}
};
var ActivationController = class extends AbortController {
	constructor(constraints, onActivate) {
		super();
		this.constraints = constraints;
		this.onActivate = onActivate;
		this.activated = false;
		for (const constraint of constraints != null ? constraints : []) constraint.controller = this;
	}
	onEvent(event) {
		var _a;
		if (this.activated) return;
		if ((_a = this.constraints) == null ? void 0 : _a.length) for (const constraint of this.constraints) constraint.onEvent(event);
		else this.activate(event);
	}
	activate(event) {
		if (this.activated) return;
		this.activated = true;
		this.onActivate(event);
	}
	abort(event) {
		this.activated = false;
		super.abort(event);
	}
};
var _controller;
var ActivationConstraint = class {
	constructor(options) {
		this.options = options;
		__privateAdd(this, _controller);
	}
	set controller(controller) {
		__privateSet(this, _controller, controller);
		controller.signal.addEventListener("abort", () => this.abort());
	}
	/**
	* Called when the activation is triggered.
	*/
	activate(event) {
		var _a;
		(_a = __privateGet(this, _controller)) == null || _a.activate(event);
	}
};
_controller = /* @__PURE__ */ new WeakMap();
var Modifier = class extends Plugin {
	/**
	* Creates a new modifier instance.
	*
	* @param manager - The drag and drop manager that owns this modifier
	* @param options - Optional configuration for the modifier
	*/
	constructor(manager, options) {
		super(manager, options);
		this.manager = manager;
		this.options = options;
	}
	/**
	* Applies the modifier to the current drag operation.
	*
	* @param operation - The current state of the drag operation
	* @returns The transformed coordinates
	*
	* @remarks
	* Override this method to implement custom transformation logic.
	* The default implementation returns the original transform unchanged.
	*/
	apply(operation) {
		return operation.transform;
	}
};
var DragDropRegistry = class {
	/**
	* Creates a new registry instance.
	*
	* @param manager - The drag and drop manager that owns this registry
	*/
	constructor(manager) {
		/** Registry for draggable entities */
		this.draggables = new EntityRegistry();
		/** Registry for droppable entities */
		this.droppables = new EntityRegistry();
		this.plugins = new PluginRegistry(manager);
		this.sensors = new PluginRegistry(manager);
		this.modifiers = new PluginRegistry(manager);
	}
	register(input, options) {
		if (input instanceof Draggable) return this.draggables.register(input.id, input);
		if (input instanceof Droppable) return this.droppables.register(input.id, input);
		if (input.prototype instanceof Modifier) return this.modifiers.register(input, options);
		if (input.prototype instanceof Sensor) return this.sensors.register(input, options);
		if (input.prototype instanceof Plugin) return this.plugins.register(input, options);
		throw new Error("Invalid instance type");
	}
	unregister(input) {
		if (input instanceof Entity) {
			if (input instanceof Draggable) return this.draggables.unregister(input.id, input);
			if (input instanceof Droppable) return this.droppables.unregister(input.id, input);
			return () => {};
		}
		if (input.prototype instanceof Modifier) return this.modifiers.unregister(input);
		if (input.prototype instanceof Sensor) return this.sensors.unregister(input);
		if (input.prototype instanceof Plugin) return this.plugins.unregister(input);
		throw new Error("Invalid instance type");
	}
	/**
	* Destroys all registered entities and cleans up resources.
	*
	* @remarks
	* This method:
	* - Destroys all draggable and droppable entities
	* - Destroys all plugins, sensors, and modifiers
	* - Cleans up any associated resources
	*/
	destroy() {
		this.draggables.destroy();
		this.droppables.destroy();
		this.plugins.destroy();
		this.sensors.destroy();
		this.modifiers.destroy();
	}
};
var _transform_dec;
var _target_dec;
var _source_dec;
var _modifiers_dec2;
var _targetIdentifier_dec;
var _sourceIdentifier_dec;
var _activatorEvent_dec;
var _canceled_dec;
var _shape_dec2 = [derived];
var _manager2;
var _previousSource;
var _shape2;
var _init6;
var _canceled;
var _activatorEvent;
var _sourceIdentifier;
var _targetIdentifier;
var _modifiers2;
var _transform;
_canceled_dec = [reactive], _activatorEvent_dec = [reactive], _sourceIdentifier_dec = [reactive], _targetIdentifier_dec = [reactive], _modifiers_dec2 = [reactive], _source_dec = [derived], _target_dec = [derived], _transform_dec = [derived];
var DragOperation = class {
	/**
	* Creates a new drag operation instance.
	*
	* @param manager - The drag and drop manager that owns this operation
	*/
	constructor(manager) {
		__runInitializers(_init6, 5, this);
		__privateAdd(this, _manager2);
		__privateAdd(this, _previousSource);
		__privateAdd(this, _shape2, new ValueHistory(void 0, (a, b) => a && b ? a.equals(b) : a === b));
		/** Current status of the drag operation */
		this.status = new Status();
		__privateAdd(this, _canceled, __runInitializers(_init6, 8, this, false)), __runInitializers(_init6, 11, this);
		__privateAdd(this, _activatorEvent, __runInitializers(_init6, 12, this, null)), __runInitializers(_init6, 15, this);
		__privateAdd(this, _sourceIdentifier, __runInitializers(_init6, 16, this, null)), __runInitializers(_init6, 19, this);
		__privateAdd(this, _targetIdentifier, __runInitializers(_init6, 20, this, null)), __runInitializers(_init6, 23, this);
		__privateAdd(this, _modifiers2, __runInitializers(_init6, 24, this, [])), __runInitializers(_init6, 27, this);
		/** Current position of the dragged entity */
		this.position = new Position({
			x: 0,
			y: 0
		});
		__privateAdd(this, _transform, {
			x: 0,
			y: 0
		});
		__privateSet(this, _manager2, manager);
	}
	get shape() {
		const { current, initial, previous } = __privateGet(this, _shape2);
		if (!current || !initial) return null;
		return {
			current,
			initial,
			previous
		};
	}
	/**
	* Sets the shape of the dragged entity.
	*
	* @param value - The new shape or null to reset
	*/
	set shape(value) {
		if (!value) __privateGet(this, _shape2).reset();
		else __privateGet(this, _shape2).current = value;
	}
	get source() {
		var _a;
		const identifier = this.sourceIdentifier;
		if (identifier == null) return null;
		const value = __privateGet(this, _manager2).registry.draggables.get(identifier);
		if (value) __privateSet(this, _previousSource, value);
		return (_a = value != null ? value : __privateGet(this, _previousSource)) != null ? _a : null;
	}
	get target() {
		var _a;
		const identifier = this.targetIdentifier;
		return identifier != null ? (_a = __privateGet(this, _manager2).registry.droppables.get(identifier)) != null ? _a : null : null;
	}
	get transform() {
		const { x, y } = this.position.delta;
		let transform = {
			x,
			y
		};
		for (const modifier of this.modifiers) transform = modifier.apply(__spreadProps(__spreadValues({}, this.snapshot()), { transform }));
		__privateSet(this, _transform, transform);
		return transform;
	}
	/**
	* Creates a snapshot of the current drag operation state.
	*
	* @returns An immutable snapshot of the current operation state
	*/
	snapshot() {
		return f(() => ({
			source: this.source,
			target: this.target,
			activatorEvent: this.activatorEvent,
			transform: __privateGet(this, _transform),
			shape: this.shape ? snapshot(this.shape) : null,
			position: snapshot(this.position),
			status: snapshot(this.status),
			canceled: this.canceled
		}));
	}
	/**
	* Resets the drag operation to its initial state.
	*
	* @remarks
	* This method:
	* - Sets status to idle
	* - Clears source and target identifiers
	* - Resets shape history
	* - Resets position and transform
	* - Clears modifiers
	*/
	reset() {
		n(() => {
			this.status.set("idle");
			this.sourceIdentifier = null;
			this.targetIdentifier = null;
			__privateGet(this, _shape2).reset();
			this.position.reset({
				x: 0,
				y: 0
			});
			__privateSet(this, _transform, {
				x: 0,
				y: 0
			});
			this.modifiers = [];
		});
	}
};
_init6 = __decoratorStart(null);
_manager2 = /* @__PURE__ */ new WeakMap();
_previousSource = /* @__PURE__ */ new WeakMap();
_shape2 = /* @__PURE__ */ new WeakMap();
_canceled = /* @__PURE__ */ new WeakMap();
_activatorEvent = /* @__PURE__ */ new WeakMap();
_sourceIdentifier = /* @__PURE__ */ new WeakMap();
_targetIdentifier = /* @__PURE__ */ new WeakMap();
_modifiers2 = /* @__PURE__ */ new WeakMap();
_transform = /* @__PURE__ */ new WeakMap();
__decorateElement(_init6, 2, "shape", _shape_dec2, DragOperation);
__decorateElement(_init6, 4, "canceled", _canceled_dec, DragOperation, _canceled);
__decorateElement(_init6, 4, "activatorEvent", _activatorEvent_dec, DragOperation, _activatorEvent);
__decorateElement(_init6, 4, "sourceIdentifier", _sourceIdentifier_dec, DragOperation, _sourceIdentifier);
__decorateElement(_init6, 4, "targetIdentifier", _targetIdentifier_dec, DragOperation, _targetIdentifier);
__decorateElement(_init6, 4, "modifiers", _modifiers_dec2, DragOperation, _modifiers2);
__decorateElement(_init6, 2, "source", _source_dec, DragOperation);
__decorateElement(_init6, 2, "target", _target_dec, DragOperation);
__decorateElement(_init6, 2, "transform", _transform_dec, DragOperation);
__decoratorMetadata(_init6, DragOperation);
var defaultRenderer = { get rendering() {
	return Promise.resolve();
} };
function resolveCustomizable(value, defaults) {
	if (typeof value === "function") return value(defaults);
	return value != null ? value : defaults;
}
var DragDropManager = class {
	/**
	* Creates a new drag and drop manager instance.
	*
	* @param config - Optional configuration for plugins, sensors, modifiers, and renderer
	*/
	constructor(config) {
		/**
		* Cleans up resources and stops any active drag operations.
		*/
		this.destroy = () => {
			if (!this.dragOperation.status.idle) this.actions.stop({ canceled: true });
			this.dragOperation.modifiers.forEach((modifier) => modifier.destroy());
			this.registry.destroy();
			this.collisionObserver.destroy();
		};
		var _a;
		const raw = config != null ? config : {};
		const plugins = resolveCustomizable(raw.plugins, []);
		const sensors = resolveCustomizable(raw.sensors, []);
		const modifiers = resolveCustomizable(raw.modifiers, []);
		const renderer = (_a = raw.renderer) != null ? _a : defaultRenderer;
		const monitor = new DragDropMonitor(this);
		const registry = new DragDropRegistry(this);
		this.registry = registry;
		this.monitor = monitor;
		this.renderer = renderer;
		this.actions = new DragActions(this);
		this.dragOperation = new DragOperation(this);
		this.collisionObserver = new CollisionObserver(this);
		this.plugins = [CollisionNotifier, ...plugins];
		this.modifiers = modifiers;
		this.sensors = sensors;
		const { destroy } = this;
		const cleanup = effects(() => {
			var _a2, _b, _c3;
			const currentModifiers = f(() => this.dragOperation.modifiers);
			const managerModifiers = this.modifiers;
			for (const modifier of currentModifiers) if (!managerModifiers.includes(modifier)) modifier.destroy();
			this.dragOperation.modifiers = (_c3 = (_b = (_a2 = this.dragOperation.source) == null ? void 0 : _a2.modifiers) == null ? void 0 : _b.map((modifier) => {
				const { plugin, options } = descriptor(modifier);
				return new plugin(this, options);
			})) != null ? _c3 : managerModifiers;
		});
		this.destroy = () => {
			cleanup();
			destroy();
		};
	}
	/**
	* Gets the list of active plugins.
	*
	* @returns Array of active plugin instances
	*/
	get plugins() {
		return this.registry.plugins.values;
	}
	/**
	* Sets the list of plugins to be used by the manager.
	*
	* @param plugins - Array of plugin constructors or instances
	*/
	set plugins(plugins) {
		this.registry.plugins.values = plugins;
	}
	/**
	* Gets the list of active modifiers.
	*
	* @returns Array of active modifier instances
	*/
	get modifiers() {
		return this.registry.modifiers.values;
	}
	/**
	* Sets the list of modifiers to be used by the manager.
	*
	* @param modifiers - Array of modifier constructors or instances
	*/
	set modifiers(modifiers) {
		this.registry.modifiers.values = modifiers;
	}
	/**
	* Gets the list of active sensors.
	*
	* @returns Array of active sensor instances
	*/
	get sensors() {
		return this.registry.sensors.values;
	}
	/**
	* Sets the list of sensors to be used by the manager.
	*
	* @param sensors - Array of sensor constructors or instances
	*/
	set sensors(sensors) {
		this.registry.sensors.values = sensors;
	}
};
//#endregion
export { effects as C, n as D, f as E, x as O, derived as S, a as T, exceedsDistance as _, CorePlugin as a, computed as b, Droppable as c, configurator as d, descriptor as f, Rectangle as g, Point as h, CollisionType as i, Plugin as l, Axes as m, ActivationController as n, DragDropManager as o, resolveCustomizable as p, CollisionPriority as r, Draggable as s, ActivationConstraint as t, Sensor as u, ValueHistory as v, reactive as w, deepEqual as x, WeakStore as y };
