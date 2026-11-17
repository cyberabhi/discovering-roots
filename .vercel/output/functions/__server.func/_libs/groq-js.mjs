import { o as __toESM } from "../_runtime.mjs";
import { K as require_src } from "./@portabletext/editor+[...].mjs";
//#region node_modules/groq-js/dist/_chunks-es/shared.mjs
function escapeRegExp(string) {
	return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function pathRegExp(pattern) {
	const re = [];
	for (const part of pattern.split(".")) part === "*" ? re.push("[^.]+") : part === "**" ? re.push(".*") : re.push(escapeRegExp(part));
	return new RegExp(`^${re.join(".")}$`);
}
var Path = class {
	pattern;
	patternRe;
	constructor(pattern) {
		this.pattern = pattern, this.patternRe = pathRegExp(pattern);
	}
	matches(str) {
		return this.patternRe.test(str);
	}
	toJSON() {
		return this.pattern;
	}
};
var RFC3339_REGEX = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|([-+]\d{2}:\d{2}))$/;
function parseRFC3339(str) {
	return RFC3339_REGEX.test(str) ? new Date(str) : null;
}
function formatRFC3339(d) {
	const year = addLeadingZero(d.getUTCFullYear(), 4), month = addLeadingZero(d.getUTCMonth() + 1, 2), day = addLeadingZero(d.getUTCDate(), 2), hour = addLeadingZero(d.getUTCHours(), 2), minute = addLeadingZero(d.getUTCMinutes(), 2), second = addLeadingZero(d.getUTCSeconds(), 2);
	let fractionalSecond = "";
	const millis = d.getMilliseconds();
	return millis != 0 && (fractionalSecond = `.${addLeadingZero(millis, 3)}`), `${year}-${month}-${day}T${hour}:${minute}:${second}${fractionalSecond}Z`;
}
function addLeadingZero(num, targetLength) {
	let str = num.toString();
	for (; str.length < targetLength;) str = `0${str}`;
	return str;
}
var StaticValue = class {
	data;
	type;
	constructor(data, type) {
		this.data = data, this.type = type;
	}
	isArray() {
		return this.type === "array";
	}
	async get() {
		return this.data;
	}
	asStatic() {
		return this;
	}
	[Symbol.asyncIterator]() {
		if (Array.isArray(this.data)) return (function* (data) {
			for (const element of data) yield fromJS(element);
		})(this.data);
		throw new Error(`Cannot iterate over: ${this.type}`);
	}
};
var NULL_VALUE = new StaticValue(null, "null");
var TRUE_VALUE = new StaticValue(!0, "boolean");
var FALSE_VALUE = new StaticValue(!1, "boolean");
var DateTime = class DateTime {
	date;
	constructor(date) {
		this.date = date;
	}
	static parseToValue(str) {
		const date = parseRFC3339(str);
		return date ? new StaticValue(new DateTime(date), "datetime") : NULL_VALUE;
	}
	equals(other) {
		return this.date.getTime() == other.date.getTime();
	}
	add(secs) {
		const copy = new Date(this.date.getTime());
		return copy.setTime(copy.getTime() + secs * 1e3), new DateTime(copy);
	}
	difference(other) {
		return (this.date.getTime() - other.date.getTime()) / 1e3;
	}
	compareTo(other) {
		return this.date.getTime() - other.date.getTime();
	}
	toString() {
		return formatRFC3339(this.date);
	}
	toJSON() {
		return this.toString();
	}
};
function fromNumber(num) {
	return Number.isFinite(num) ? new StaticValue(num, "number") : NULL_VALUE;
}
function fromString(str) {
	return new StaticValue(str, "string");
}
function fromDateTime(dt) {
	return new StaticValue(dt, "datetime");
}
function fromPath(path) {
	return new StaticValue(path, "path");
}
function isIterator(obj) {
	return obj && typeof obj.next == "function";
}
function fromArray(val) {
	return new StaticValue(val, "array");
}
function fromJS(val) {
	return isIterator(val) ? new StreamValue(async function* () {
		for await (const value of val) yield fromJS(value);
	}) : val == null ? NULL_VALUE : new StaticValue(val, getType(val));
}
function getType(data) {
	return data === null || typeof data > "u" ? "null" : Array.isArray(data) ? "array" : data instanceof Path ? "path" : data instanceof DateTime ? "datetime" : typeof data;
}
var StreamValue = class {
	type = "stream";
	generator;
	ticker;
	isDone;
	data;
	constructor(generator) {
		this.generator = generator, this.ticker = null, this.isDone = !1, this.data = [];
	}
	isArray() {
		return !0;
	}
	async get() {
		const result = [];
		for await (const value of this) result.push(await value.get());
		return result;
	}
	async asStatic() {
		return new StaticValue(await this.get(), "array");
	}
	async *[Symbol.asyncIterator]() {
		let i = 0;
		for (;;) {
			for (; i < this.data.length; i++) yield this.data[i];
			if (this.isDone) return;
			await this._nextTick();
		}
	}
	_nextTick() {
		if (this.ticker) return this.ticker;
		let currentResolver, currentRejector;
		const setupTicker = () => {
			this.ticker = new Promise((resolve, reject) => {
				currentResolver = resolve, currentRejector = reject;
			});
		}, tick = () => {
			currentResolver(), setupTicker();
		}, fetch = async () => {
			try {
				for await (const value of this.generator()) this.data.push(value), tick();
				this.isDone = !0, tick();
			} catch (error) {
				currentRejector(error);
			}
		};
		return setupTicker(), fetch(), this.ticker;
	}
};
function isSelectorNode(node) {
	return [
		"AccessAttribute",
		"SelectorFuncCall",
		"Group",
		"Tuple",
		"ArrayCoerce",
		"Filter",
		"SelectorNested"
	].includes(node.type);
}
function isSelectorNested(node) {
	return [
		"AccessAttribute",
		"ArrayCoerce",
		"Filter",
		"Group",
		"Tuple",
		"SelectorNested"
	].includes(node.type);
}
var CHARS = /([^!@#$%^&*(),\\/?";:{}|[\]+<>\s-])+/g;
var CHARS_WITH_WILDCARD = /([^!@#$%^&(),\\/?";:{}|[\]+<>\s-])+/g;
var EDGE_CHARS = /(\b\.+|\.+\b)/g;
function matchText(tokens, patterns) {
	return tokens.length === 0 || patterns.length === 0 ? !1 : patterns.every((pattern) => pattern(tokens));
}
function matchTokenize(text) {
	return text.replace(EDGE_CHARS, "").match(CHARS) || [];
}
function matchAnalyzePattern(text) {
	return matchPatternRegex(text).map((re) => (tokens) => tokens.some((token) => re.test(token)));
}
function matchPatternRegex(text) {
	return (text.replace(EDGE_CHARS, "").match(CHARS_WITH_WILDCARD) || []).map((term) => new RegExp(`^${term.slice(0, 1024).replace(/\*/g, ".*")}$`, "i"));
}
function gatherText(value, flatMap) {
	if (value.type === "string") return {
		parts: flatMap(value.data),
		success: !0
	};
	if (value.type === "array") {
		let success = !0;
		const parts = [];
		for (const part of value.data) typeof part == "string" ? parts.push(...flatMap(part)) : success = !1;
		return {
			parts,
			success
		};
	}
	return value.type === "stream" ? (async () => {
		let success = !0;
		const parts = [];
		for await (const part of value) part.type === "string" ? parts.push(...flatMap(part.data)) : success = !1;
		return {
			parts,
			success
		};
	})() : {
		parts: [],
		success: !1
	};
}
function canConstantEvaluate(node) {
	switch (node.type) {
		case "Group": return canConstantEvaluate(node.base);
		case "Value":
		case "Parameter": return !0;
		case "Pos":
		case "Neg": return canConstantEvaluate(node.base);
		case "OpCall": switch (node.op) {
			case "+":
			case "-":
			case "*":
			case "/":
			case "%":
			case "**": return canConstantEvaluate(node.left) && canConstantEvaluate(node.right);
			default: return !1;
		}
		default: return !1;
	}
}
function tryConstantEvaluate(node) {
	return canConstantEvaluate(node) ? constantEvaluate(node) : null;
}
function isRecord(val) {
	return val.constructor === Object || val.constructor === void 0;
}
function staticFromJS(val) {
	return val == null ? NULL_VALUE : typeof val == "boolean" ? val ? TRUE_VALUE : FALSE_VALUE : typeof val == "number" ? fromNumber(val) : typeof val == "string" ? fromString(val) : Array.isArray(val) ? fromArray(val) : typeof val == "object" && isRecord(val) ? new StaticValue(val, "object") : NULL_VALUE;
}
function constantEvaluate(node) {
	switch (node.type) {
		case "Value": return staticFromJS(node.value);
		case "Parameter": return NULL_VALUE;
		case "Group": return constantEvaluate(node.base);
		case "Pos": {
			const base = constantEvaluate(node.base);
			return base.type !== "number" ? NULL_VALUE : fromNumber(base.data);
		}
		case "Neg": {
			const base = constantEvaluate(node.base);
			return base.type !== "number" ? NULL_VALUE : fromNumber(-base.data);
		}
		case "OpCall": {
			const left = constantEvaluate(node.left), right = constantEvaluate(node.right);
			switch (node.op) {
				case "+": return left.type === "number" && right.type === "number" ? fromNumber(left.data + right.data) : left.type === "string" && right.type === "string" ? fromString(left.data + right.data) : left.type === "array" && right.type === "array" ? fromArray(left.data.concat(right.data)) : left.type === "object" && right.type === "object" ? new StaticValue({
					...left.data,
					...right.data
				}, "object") : NULL_VALUE;
				case "-": return left.type === "number" && right.type === "number" ? fromNumber(left.data - right.data) : NULL_VALUE;
				case "*": return left.type === "number" && right.type === "number" ? fromNumber(left.data * right.data) : NULL_VALUE;
				case "/": return left.type === "number" && right.type === "number" ? fromNumber(left.data / right.data) : NULL_VALUE;
				case "%": return left.type === "number" && right.type === "number" ? fromNumber(left.data % right.data) : NULL_VALUE;
				case "**": return left.type === "number" && right.type === "number" ? fromNumber(Math.pow(left.data, right.data)) : NULL_VALUE;
				default: return NULL_VALUE;
			}
		}
		default: return NULL_VALUE;
	}
}
var namespaceRegistry = {
	global: {
		anywhere: { arity: 1 },
		coalesce: {},
		count: { arity: 1 },
		dateTime: { arity: 1 },
		defined: { arity: 1 },
		identity: { arity: 0 },
		length: { arity: 1 },
		path: { arity: 1 },
		string: { arity: 1 },
		references: { arity: (c) => c >= 1 },
		round: { arity: (count) => count >= 1 && count <= 2 },
		now: { arity: 0 },
		boost: { arity: 2 },
		lower: { arity: 1 },
		upper: { arity: 1 }
	},
	string: {
		lower: { arity: 1 },
		upper: { arity: 1 },
		split: { arity: 2 },
		startsWith: { arity: 2 }
	},
	array: {
		join: { arity: 2 },
		compact: { arity: 1 },
		unique: { arity: 1 },
		intersects: { arity: 2 }
	},
	pt: { text: { arity: 1 } },
	delta: {
		operation: {},
		changedAny: {
			arity: 1,
			mode: "delta"
		},
		changedOnly: {
			arity: 1,
			mode: "delta"
		}
	},
	diff: {
		changedAny: { arity: 3 },
		changedOnly: { arity: 3 }
	},
	media: { aspect: { arity: 2 } },
	sanity: {
		projectId: {},
		dataset: {},
		versionOf: { arity: 1 },
		partOfRelease: { arity: 1 }
	},
	math: {
		min: { arity: 1 },
		max: { arity: 1 },
		sum: { arity: 1 },
		avg: { arity: 1 }
	},
	dateTime: { now: { arity: 0 } },
	releases: { all: { arity: 0 } },
	text: {
		query: { arity: 1 },
		semanticSimilarity: { arity: 1 }
	},
	geo: {
		latLng: {},
		contains: {},
		intersects: {},
		distance: {}
	},
	documents: {
		get: {},
		incomingRefCount: {},
		incomingGlobalDocumentReferenceCount: {}
	},
	user: { attributes: {} }
};
var pipeFunctionRegistry = {
	order: { arity: (count) => count >= 1 },
	score: { arity: (count) => count >= 1 }
};
//#endregion
//#region node_modules/groq-js/dist/_chunks-es/evaluator.mjs
function isEqual(a, b) {
	return a.type === "string" && b.type === "string" || a.type === "boolean" && b.type === "boolean" || a.type === "null" && b.type === "null" || a.type === "number" && b.type === "number" ? a.data === b.data : a.type === "datetime" && b.type === "datetime" ? a.data.equals(b.data) : !1;
}
function deepEqual(a, b) {
	if (a === null || b === null) return a === b;
	const typeOfA = typeof a, typeOfB = typeof b;
	if (typeOfA === "undefined" && typeOfB === "undefined") return !0;
	if (typeOfA === "function" && typeOfB === "function") return a === b;
	if (typeOfA === "object" && typeOfB === "object") {
		const keysOfA = Object.keys(a), keysOfB = Object.keys(b);
		if (keysOfA.length !== keysOfB.length) return !1;
		for (const key of keysOfA) if (!deepEqual(a[key], b[key])) return !1;
		return !0;
	}
	return a === b;
}
var array = {};
array.join = mappedExecutor((args) => args, (_, arr, sep) => {
	if (arr.type !== "array") return NULL_VALUE;
	if (sep.type !== "string") return NULL_VALUE;
	let buf = "", needSep = !1;
	for (const elem of arr.data) {
		switch (needSep && (buf += sep.data), getType(elem)) {
			case "number":
			case "string":
			case "boolean":
			case "datetime":
				buf += `${elem}`;
				break;
			default: return NULL_VALUE;
		}
		needSep = !0;
	}
	return fromString(buf);
});
array.compact = arrayExecutor(([array2]) => ({ array: array2 }), function* (_, item) {
	item !== null && (yield item);
});
array.unique = arrayExecutor((args) => ({
	array: args[0],
	state: /* @__PURE__ */ new Set()
}), function* (_node, iter, _inner, added) {
	switch (getType(iter)) {
		case "number":
		case "string":
		case "boolean":
		case "datetime":
			added.has(iter) || (added.add(iter), yield iter);
			break;
		default: yield iter;
	}
});
array.intersects = mappedExecutor((args) => args, (_, arr1, arr2) => {
	if (arr1.type !== "array" || arr2.type !== "array") return NULL_VALUE;
	for (const v1 of arr1.data) for (const v2 of arr2.data) if (isEqual(fromJS(v1), fromJS(v2))) return TRUE_VALUE;
	return FALSE_VALUE;
});
var dateTime = {};
dateTime.now = constantExecutor((_, scope) => fromDateTime(new DateTime(scope.context.timestamp)));
async function valueAtPath(arg, keyPath) {
	function tryAccessor(arg2, accessor) {
		try {
			return arg2[accessor];
		} catch {
			return;
		}
	}
	let current = await arg.get();
	for (const part of keyPath) if (current = tryAccessor(current, part), !current) break;
	return current;
}
function startsWith(keyPath, prefix) {
	return prefix.every((item, index) => keyPath[index] === item);
}
async function* diffKeyPaths(before, after) {
	const currPaths = [[]];
	for (; currPaths.length > 0;) {
		const currPath = currPaths.shift() || [], b = fromJS(await valueAtPath(before, currPath)), a = fromJS(await valueAtPath(after, currPath));
		if (a.type !== b.type) yield currPath;
		else if (a.type === "string" && b.type === "string" || a.type === "boolean" && b.type === "boolean" || a.type === "null" && b.type === "null" || a.type === "number" && b.type === "number") a.data !== b.data && (yield currPath);
		else if (a.type === "datetime" && b.type === "datetime") a.data.equals(b.data) || (yield currPath);
		else if (a.type === "object" && b.type === "object") {
			if (!deepEqual(a.data, b.data)) {
				const aKeys = Object.keys(a.data), bKeys = Object.keys(b.data);
				new Set(aKeys.concat(bKeys)).forEach((key) => {
					currPaths.push([...currPath, key]);
				});
			}
		} else if (a.type === "array" && b.type === "array") {
			if (a.data.length !== b.data.length) yield currPath;
			else if (!deepEqual(a.data, b.data)) for (let i = 0; i < b.data.length; i++) currPaths.push([...currPath, i]);
		} else if (a.type === "stream" && b.type === "stream") {
			const arrayA = await a.get(), arrayB = await b.get();
			if (arrayA.length !== arrayB.length) yield currPath;
			else if (!deepEqual(arrayA, arrayB)) for (let i = 0; i < arrayB.length; i++) currPaths.push([...currPath, i]);
		}
	}
}
async function evaluateSelector(node, value, scope) {
	switch (node.type) {
		case "Group": return await evaluateSelector(node.base, value, scope);
		case "Tuple":
			const tuplePaths = [];
			for (const member of node.members) {
				const memberPaths = await evaluateSelector(member, value, scope);
				tuplePaths.push(...memberPaths);
			}
			return tuplePaths;
		case "AccessAttribute": return node.base ? (await evaluateSelector(node.base, value, scope)).map((path) => [...path, node.name]) : [[node.name]];
		case "ArrayCoerce": {
			const paths = await evaluateSelector(node.base, value, scope), arrayPaths = [];
			for (const keyPath of paths) {
				const innerValue = await valueAtPath(value, keyPath);
				if (Array.isArray(innerValue)) for (let i = 0; i < innerValue.length; i++) arrayPaths.push([...keyPath, i]);
			}
			return arrayPaths;
		}
		case "Filter": {
			const paths = await evaluateSelector(node.base, value, scope), filter = {
				...node,
				base: { type: "This" }
			}, arrayPaths = [];
			for (const keyPath of paths) {
				const innerValue = await valueAtPath(value, keyPath);
				if (Array.isArray(innerValue)) for (let i = 0; i < innerValue.length; i++) {
					const item = innerValue[i];
					(await (await evaluate(filter, scope.createNested(fromJS([item])))).get()).length > 0 && arrayPaths.push([...keyPath, i]);
				}
			}
			return arrayPaths;
		}
		case "SelectorFuncCall": return anywhere(node.arg, scope.createHidden(value));
		case "SelectorNested": {
			const { base, nested: expr } = node, paths = await evaluateSelector(base, value, scope), nestedPaths = [];
			for (const keyPath of paths) {
				const innerValue = await valueAtPath(value, keyPath);
				switch (expr.type) {
					case "AccessAttribute":
					case "ArrayCoerce":
					case "Filter":
						const accessPaths = await evaluateSelector(expr, fromJS(innerValue), scope);
						for (let i = 0; i < accessPaths.length; i++) nestedPaths.push([...keyPath, ...accessPaths[i]]);
						break;
					case "Group":
						const innerResult = await evaluateSelector(expr.base, fromJS(innerValue), scope);
						for (const innerKeyPath of innerResult) nestedPaths.push([...keyPath, ...innerKeyPath]);
						break;
					case "Tuple": for (const inner of expr.members) {
						const innerResult2 = await evaluateSelector(inner, fromJS(innerValue), scope);
						for (const innerKeyPath of innerResult2) nestedPaths.push([...keyPath, ...innerKeyPath]);
					}
				}
			}
			return nestedPaths;
		}
	}
}
async function anywhere(expr, scope, base = []) {
	const value = scope.value, pathList = [];
	if (value.isArray()) {
		const arr = await value.get();
		for (let i = 0; i < arr.length; i++) {
			const subPaths = await anywhere(expr, scope.createHidden(fromJS(arr[i])), [...base, i]);
			pathList.push(...subPaths);
		}
	} else if (value.type === "object") {
		const result = await evaluate(expr, scope);
		result.type === "boolean" && result.data === !0 && pathList.push(base);
		for (const key of Object.keys(value.data)) {
			const subPaths = await anywhere(expr, scope.createHidden(fromJS(value.data[key])), [...base, key]);
			pathList.push(...subPaths);
		}
	}
	return pathList;
}
async function changedAny(before, after, selector, scope) {
	const beforeSelectorScope = scope.createHidden(before), beforePaths = await evaluateSelector(selector, beforeSelectorScope.value, beforeSelectorScope), afterSelectorScope = scope.createHidden(after), afterPaths = await evaluateSelector(selector, afterSelectorScope.value, afterSelectorScope);
	if (beforePaths.length !== afterPaths.length) return TRUE_VALUE;
	for (const path of beforePaths) {
		for (let i = 0; i < path.length; i++) if (typeof path[i] == "number") {
			const slice = path.slice(0, i), beforeArr = await valueAtPath(before, slice), afterArr = await valueAtPath(after, slice);
			if (!Array.isArray(beforeArr) || !Array.isArray(afterArr) || beforeArr.length !== afterArr.length) return TRUE_VALUE;
		}
		if (!deepEqual(await valueAtPath(before, path), await valueAtPath(after, path))) return TRUE_VALUE;
	}
	return FALSE_VALUE;
}
async function changedOnly(before, after, selector, scope) {
	const beforeSelectorScope = scope.createHidden(before), selectedPaths = await evaluateSelector(selector, beforeSelectorScope.value, beforeSelectorScope);
	for await (const diffPath of diffKeyPaths(before, after)) {
		let found = !1;
		for (const selectedPath of selectedPaths) if (startsWith(diffPath, selectedPath)) {
			found = !0;
			break;
		}
		if (!found) return FALSE_VALUE;
	}
	return TRUE_VALUE;
}
var diff = {};
diff.changedAny = asyncOnlyExecutor(async (args, scope) => {
	const lhs = args[0], rhs = args[1], selector = args[2];
	if (!isSelectorNode(selector)) throw new Error("changedAny third argument must be a selector");
	return changedAny(await executeAsync(lhs, scope), await executeAsync(rhs, scope), selector, scope);
});
diff.changedOnly = asyncOnlyExecutor(async (args, scope) => {
	const lhs = args[0], rhs = args[1], selector = args[2];
	if (!isSelectorNode(selector)) throw new Error("changedOnly third argument must be a selector");
	return changedOnly(await executeAsync(lhs, scope), await executeAsync(rhs, scope), selector, scope);
});
var delta = {};
delta.operation = constantExecutor((_, scope) => {
	const hasBefore = scope.context.before !== null, hasAfter = scope.context.after !== null;
	return hasBefore && hasAfter ? fromString("update") : hasAfter ? fromString("create") : hasBefore ? fromString("delete") : NULL_VALUE;
});
delta.changedAny = asyncOnlyExecutor(async (args, scope) => {
	const before = scope.context.before || NULL_VALUE, after = scope.context.after || NULL_VALUE, selector = args[0];
	if (!isSelectorNode(selector)) throw new Error("changedAny first argument must be a selector");
	return changedAny(before, after, selector, scope);
});
delta.changedOnly = asyncOnlyExecutor(async (args, scope) => {
	const before = scope.context.before || NULL_VALUE, after = scope.context.after || NULL_VALUE, selector = args[0];
	if (!isSelectorNode(selector)) throw new Error("changedOnly first argument must be a selector");
	return changedOnly(before, after, selector, scope);
});
var documents = {};
documents.get = constantExecutor(() => {
	throw new Error("not implemented");
});
documents.incomingRefCount = constantExecutor(() => {
	throw new Error("not implemented");
});
documents.incomingGlobalDocumentReferenceCount = constantExecutor(() => {
	throw new Error("not implemented");
});
var geo = {};
geo.latLng = constantExecutor(() => {
	throw new Error("not implemented");
});
geo.contains = constantExecutor(() => {
	throw new Error("not implemented");
});
geo.intersects = constantExecutor(() => {
	throw new Error("not implemented");
});
geo.distance = constantExecutor(() => {
	throw new Error("not implemented");
});
var string = {};
string.lower = mappedExecutor((args) => args, (_, value) => value.type !== "string" ? NULL_VALUE : fromString(value.data.toLowerCase()));
string.upper = mappedExecutor((args) => args, (_, value) => value.type !== "string" ? NULL_VALUE : fromString(value.data.toUpperCase()));
string.split = mappedExecutor((args) => args, (_, str, sep) => str.type !== "string" ? NULL_VALUE : sep.type !== "string" ? NULL_VALUE : str.data.length === 0 ? fromArray([]) : sep.data.length === 0 ? fromArray(Array.from(str.data)) : fromArray(str.data.split(sep.data)));
string.startsWith = mappedExecutor((args) => args, (_, str, prefix) => str.type !== "string" ? NULL_VALUE : prefix.type !== "string" ? NULL_VALUE : str.data.startsWith(prefix.data) ? TRUE_VALUE : FALSE_VALUE);
var _global = {};
_global.anywhere = constantExecutor(() => {
	throw new Error("not implemented");
});
_global.coalesce = {
	async executeAsync(args, scope) {
		for (const arg of args) {
			const value = await executeAsync(arg, scope);
			if (value.type !== "null") return value;
		}
		return NULL_VALUE;
	},
	executeSync(args, scope) {
		for (const arg of args) {
			const value = executeSync(arg, scope);
			if (value.type !== "null") return value;
		}
		return NULL_VALUE;
	}
};
_global.count = arrayReducerExecutor((args) => ({ array: args[0] }), () => 0, (_, count) => count + 1, fromNumber);
_global.dateTime = mappedExecutor((args) => args, (_, val) => val.type === "datetime" ? val : val.type !== "string" ? NULL_VALUE : DateTime.parseToValue(val.data));
_global.defined = mappedExecutor((args) => args, (_, inner) => inner.type === "null" ? FALSE_VALUE : TRUE_VALUE);
_global.identity = constantExecutor((_args, scope) => fromString(scope.context.identity));
_global.length = mappedExecutor((args) => args, (_, inner) => inner.type === "string" ? fromNumber(countUTF8(inner.data)) : inner.type === "array" ? fromNumber(inner.data.length) : NULL_VALUE);
_global.path = mappedExecutor((args) => args, (_, inner) => inner.type !== "string" ? NULL_VALUE : fromPath(new Path(inner.data)));
_global.string = mappedExecutor((args) => args, (_, value) => {
	switch (value.type) {
		case "number":
		case "string":
		case "boolean":
		case "datetime": return fromString(`${value.data}`);
		default: return NULL_VALUE;
	}
});
_global.references = mappedExecutor((args) => [{ type: "This" }, ...args], (_, scopeValue, ...args) => {
	const pathSet = /* @__PURE__ */ new Set();
	for (const path of args) if (path.type === "string") pathSet.add(path.data);
	else if (path.type === "array") for (const elem of path.data) typeof elem == "string" && pathSet.add(elem);
	return pathSet.size === 0 ? FALSE_VALUE : hasReference(scopeValue, pathSet) ? TRUE_VALUE : FALSE_VALUE;
});
_global.round = mappedExecutor((args) => args, (_, value, precValue) => {
	if (value.type !== "number") return NULL_VALUE;
	const num = value.data;
	let prec = 0;
	if (precValue) {
		if (precValue.type !== "number" || precValue.data < 0 || !Number.isInteger(precValue.data)) return NULL_VALUE;
		prec = precValue.data;
	}
	return prec === 0 ? num < 0 ? fromNumber(-Math.round(-num)) : fromNumber(Math.round(num)) : fromNumber(Number(num.toFixed(prec)));
});
_global.now = constantExecutor((_args, scope) => fromString(scope.context.timestamp.toISOString()));
_global.boost = constantExecutor(() => {
	throw new Error("unexpected boost call");
});
_global.lower = string.lower;
_global.upper = string.upper;
function countUTF8(str) {
	let count = 0;
	for (let i = 0; i < str.length; i++) {
		const code = str.charCodeAt(i);
		code >= 55296 && code <= 56319 || count++;
	}
	return count;
}
function hasReference(value, pathSet) {
	switch (getType(value)) {
		case "array":
			for (const v of value) if (hasReference(v, pathSet)) return !0;
			break;
		case "object":
			if (value._ref) return pathSet.has(value._ref);
			for (const v of Object.values(value)) if (hasReference(v, pathSet)) return !0;
	}
	return !1;
}
var math = {};
math.min = arrayReducerExecutor((args) => ({ array: args[0] }), () => {}, (_, n, item) => item === null ? n : typeof item != "number" ? STOP_ITERATOR : n === void 0 || item < n ? item : n, (n) => n === void 0 ? NULL_VALUE : fromNumber(n));
math.max = arrayReducerExecutor((args) => ({ array: args[0] }), () => {}, (_, n, item) => item === null ? n : typeof item != "number" ? STOP_ITERATOR : n === void 0 || item > n ? item : n, (n) => n === void 0 ? NULL_VALUE : fromNumber(n));
math.sum = arrayReducerExecutor((args) => ({ array: args[0] }), () => 0, (_, n, item) => item === null ? n : typeof item != "number" ? STOP_ITERATOR : n + item, fromNumber);
math.avg = arrayReducerExecutor((args) => ({ array: args[0] }), () => ({
	count: 0,
	sum: 0
}), (_, { count, sum }, item) => item === null ? {
	count,
	sum
} : typeof item != "number" ? STOP_ITERATOR : {
	count: count + 1,
	sum: sum + item
}, ({ count, sum }) => count === 0 ? NULL_VALUE : fromNumber(sum / count));
var media = {};
media.aspect = constantExecutor(() => {
	throw new Error("not implemented");
});
function portableTextContent(value) {
	if (value.type === "object") return blockText(value.data);
	if (value.type === "array") {
		const texts = arrayText(value.data);
		if (texts.length > 0) return texts.join(`

`);
	}
	return null;
}
function arrayText(value, result = []) {
	for (const block of value) if (Array.isArray(block)) arrayText(block, result);
	else if (typeof block == "object" && block) {
		const text2 = blockText(block);
		text2 !== null && result.push(text2);
	}
	return result;
}
function blockText(obj) {
	if (typeof obj._type != "string") return null;
	const children = obj.children;
	if (!Array.isArray(children)) return null;
	let result = "";
	for (const child of children) child && typeof child == "object" && typeof child._type == "string" && child._type === "span" && typeof child.text == "string" && (result += child.text);
	return result;
}
var pt = {};
pt.text = mappedExecutor((args) => args, (_, value) => {
	const text2 = portableTextContent(value);
	return text2 === null ? NULL_VALUE : fromString(text2);
});
var releases = {};
releases.all = arrayExecutor(() => ({ array: { type: "Everything" } }), function* (_, value) {
	typeof value == "object" && value && "_type" in value && value._type === "system.release" && (yield value);
});
var sanity = {};
sanity.projectId = constantExecutor((_, scope) => scope.context.sanity ? fromString(scope.context.sanity.projectId) : NULL_VALUE);
sanity.dataset = constantExecutor((_, scope) => scope.context.sanity ? fromString(scope.context.sanity.dataset) : NULL_VALUE);
sanity.versionOf = mappedExecutor(([value]) => [value, { type: "This" }], (_, value, val) => {
	if (value.type !== "string") return NULL_VALUE;
	const baseId = value.data;
	if (val.type !== "object") return NULL_VALUE;
	if (typeof val.data._id != "string") return NULL_VALUE;
	if (val.data._id === baseId) return TRUE_VALUE;
	const components = val.data._id.split(".");
	return components.length >= 2 && components[0] === "drafts" && components.slice(1).join(".") === baseId ? TRUE_VALUE : components.length >= 3 && components[0] === "versions" && components.slice(2).join(".") === baseId ? TRUE_VALUE : FALSE_VALUE;
});
sanity.partOfRelease = mappedExecutor((args) => [args[0], { type: "This" }], (_, value, val) => {
	if (value.type !== "string") return NULL_VALUE;
	const baseId = value.data;
	if (val.type !== "object") return NULL_VALUE;
	if (typeof val.data._id != "string") return NULL_VALUE;
	const components = val.data._id.split(".");
	return components.length >= 3 && components[0] === "versions" && components[1] === baseId ? TRUE_VALUE : FALSE_VALUE;
});
var text = {};
text.query = constantExecutor(() => {
	throw new Error("not implemented");
});
text.semanticSimilarity = constantExecutor(() => {
	throw new Error("not implemented");
});
var user = {};
user.attributes = constantExecutor(() => {
	throw new Error("not implemented");
});
var TYPE_ORDER = {
	datetime: 1,
	number: 2,
	string: 3,
	boolean: 4
};
function partialCompare(a, b) {
	const aType = getType(a);
	if (aType !== getType(b)) return null;
	switch (aType) {
		case "number":
		case "boolean": return a - b;
		case "string": return a < b ? -1 : a > b ? 1 : 0;
		case "datetime": return a.compareTo(b);
		default: return null;
	}
}
function totalCompare(a, b) {
	const aType = getType(a), bType = getType(b), aTypeOrder = TYPE_ORDER[aType] || 100, bTypeOrder = TYPE_ORDER[bType] || 100;
	if (aTypeOrder !== bTypeOrder) return aTypeOrder - bTypeOrder;
	let result = partialCompare(a, b);
	return result === null && (result = 0), result;
}
var Scope = class Scope {
	params;
	source;
	value;
	parent;
	context;
	isHidden = !1;
	constructor(params, source, value, context, parent) {
		this.params = params, this.source = source, this.value = value, this.context = context, this.parent = parent;
	}
	createNested(value) {
		return this.isHidden ? new Scope(this.params, this.source, value, this.context, this.parent) : new Scope(this.params, this.source, value, this.context, this);
	}
	createHidden(value) {
		const result = this.createNested(value);
		return result.isHidden = !0, result;
	}
};
var BM25k = 1.2;
async function evaluateScoreAsync(node, scope) {
	if (node.type === "OpCall" && node.op === "match") return evaluateMatchScoreAsync(node.left, node.right, scope);
	if (node.type === "FuncCall" && node.name === "boost") {
		const innerScore = await evaluateScoreAsync(node.args[0], scope), boost = await executeAsync(node.args[1], scope);
		return boost.type === "number" && innerScore > 0 ? innerScore + boost.data : 0;
	}
	switch (node.type) {
		case "Or": return await evaluateScoreAsync(node.left, scope) + await evaluateScoreAsync(node.right, scope);
		case "And": {
			const leftScore = await evaluateScoreAsync(node.left, scope), rightScore = await evaluateScoreAsync(node.right, scope);
			return leftScore === 0 || rightScore === 0 ? 0 : leftScore + rightScore;
		}
		default: {
			const res = await executeAsync(node, scope);
			return res.type === "boolean" && res.data === !0 ? 1 : 0;
		}
	}
}
function evaluateScoreSync(node, scope) {
	if (node.type === "OpCall" && node.op === "match") return evaluateMatchScoreSync(node.left, node.right, scope);
	if (node.type === "FuncCall" && node.name === "boost") {
		const innerScore = evaluateScoreSync(node.args[0], scope), boost = executeSync(node.args[1], scope);
		return boost.type === "number" && innerScore > 0 ? innerScore + boost.data : 0;
	}
	switch (node.type) {
		case "Or": return evaluateScoreSync(node.left, scope) + evaluateScoreSync(node.right, scope);
		case "And": {
			const leftScore = evaluateScoreSync(node.left, scope), rightScore = evaluateScoreSync(node.right, scope);
			return leftScore === 0 || rightScore === 0 ? 0 : leftScore + rightScore;
		}
		default: {
			const res = executeSync(node, scope);
			return res.type === "boolean" && res.data === !0 ? 1 : 0;
		}
	}
}
function evaluateMatchScoreSync(left, right, scope) {
	const result = processMatchScore(executeSync(left, scope), executeSync(right, scope));
	if (typeof result == "number") return result;
	throw new Error("Found synchronous value in match()");
}
async function evaluateMatchScoreAsync(left, right, scope) {
	return processMatchScore(await executeAsync(left, scope), await executeAsync(right, scope));
}
function processMatchScore(text2, pattern) {
	const tokens = gatherText(text2, (part) => matchTokenize(part)), terms = gatherText(pattern, (part) => matchPatternRegex(part)), process = (tokens2, terms2) => {
		if (!terms2.success || tokens2.parts.length === 0 || terms2.parts.length === 0) return 0;
		let score = 0;
		for (const re of terms2.parts) {
			const freq = tokens2.parts.reduce((c, token) => c + (re.test(token) ? 1 : 0), 0);
			score += freq * 2.2 / (freq + BM25k);
		}
		return score;
	};
	return "then" in tokens || "then" in terms ? (async () => process(await tokens, await terms))() : process(tokens, terms);
}
function extractOrderArgs(args) {
	const mappers = [], directions = [];
	for (let mapper of args) {
		let direction = "asc";
		mapper.type === "Desc" ? (direction = "desc", mapper = mapper.base) : mapper.type === "Asc" && (mapper = mapper.base), mappers.push(mapper), directions.push(direction);
	}
	return {
		mappers,
		directions
	};
}
function sortArray(aux, directions) {
	return aux.sort((aTuple, bTuple) => {
		for (let i = 0; i < directions.length; i++) {
			let c = totalCompare(aTuple[i + 2], bTuple[i + 2]);
			if (directions[i] === "desc" && (c = -c), c !== 0) return c;
		}
		return aTuple[1] - bTuple[1];
	}), aux.map((v) => v[0]);
}
var pipeFunctions = {};
pipeFunctions.order = {
	executeSync({ base, args }, scope) {
		const { mappers, directions } = extractOrderArgs(args), aux = [];
		let idx = 0;
		const n = directions.length;
		for (const value of base.data) {
			const newScope = scope.createNested(fromJS(value)), tuple = [value, idx];
			for (let i = 0; i < n; i++) {
				const result = executeSync(mappers[i], newScope);
				tuple.push(result.data);
			}
			aux.push(tuple), idx++;
		}
		return fromArray(sortArray(aux, directions));
	},
	async executeAsync({ base, args }, scope) {
		const { mappers, directions } = extractOrderArgs(args), aux = [];
		let idx = 0;
		const n = directions.length;
		for await (const value of base) {
			const newScope = scope.createNested(value), tuple = [await value.get(), idx];
			for (let i = 0; i < n; i++) {
				const result = await executeAsync(mappers[i], newScope);
				tuple.push(await result.get());
			}
			aux.push(tuple), idx++;
		}
		return fromArray(sortArray(aux, directions));
	}
};
pipeFunctions.score = {
	async executeAsync({ base, args }, scope) {
		const unknown = [], scored = [];
		for await (const value of base) {
			if (value.type !== "object") {
				unknown.push(await value.get());
				continue;
			}
			const newScope = scope.createNested(value);
			let valueScore = typeof value.data._score == "number" ? value.data._score : 0;
			for (const arg of args) valueScore += await evaluateScoreAsync(arg, newScope);
			const newObject = Object.assign({}, value.data, { _score: valueScore });
			scored.push(newObject);
		}
		return scored.sort((a, b) => b._score - a._score), fromJS(scored);
	},
	executeSync({ base, args }, scope) {
		const scored = [];
		for (const value of base.data) {
			if (getType(value) !== "object") continue;
			const valueObj = value, newScope = scope.createNested(fromJS(value));
			let valueScore = typeof valueObj._score == "number" ? valueObj._score : 0;
			for (const arg of args) valueScore += evaluateScoreSync(arg, newScope);
			const newObject = Object.assign({}, valueObj, { _score: valueScore });
			scored.push(newObject);
		}
		return scored.sort((a, b) => b._score - a._score), fromArray(scored);
	}
};
var namespaces = {
	global: _global,
	string,
	array,
	pt,
	delta,
	diff,
	media,
	sanity,
	math,
	dateTime,
	releases,
	text,
	geo,
	documents,
	user
};
var operators = {
	"==": function(left, right) {
		return isEqual(left, right) ? TRUE_VALUE : FALSE_VALUE;
	},
	"!=": function(left, right) {
		return isEqual(left, right) ? FALSE_VALUE : TRUE_VALUE;
	},
	">": function(left, right) {
		if (left.type === "stream" || right.type === "stream") return NULL_VALUE;
		const result = partialCompare(left.data, right.data);
		return result === null ? NULL_VALUE : result > 0 ? TRUE_VALUE : FALSE_VALUE;
	},
	">=": function(left, right) {
		if (left.type === "stream" || right.type === "stream") return NULL_VALUE;
		const result = partialCompare(left.data, right.data);
		return result === null ? NULL_VALUE : result >= 0 ? TRUE_VALUE : FALSE_VALUE;
	},
	"<": function(left, right) {
		if (left.type === "stream" || right.type === "stream") return NULL_VALUE;
		const result = partialCompare(left.data, right.data);
		return result === null ? NULL_VALUE : result < 0 ? TRUE_VALUE : FALSE_VALUE;
	},
	"<=": function(left, right) {
		if (left.type === "stream" || right.type === "stream") return NULL_VALUE;
		const result = partialCompare(left.data, right.data);
		return result === null ? NULL_VALUE : result <= 0 ? TRUE_VALUE : FALSE_VALUE;
	},
	in: function(left, right) {
		if (right.type === "path") return left.type !== "string" ? NULL_VALUE : right.data.matches(left.data) ? TRUE_VALUE : FALSE_VALUE;
		if (right.type === "array") {
			for (const b of right.data) if (isEqual(left, fromJS(b))) return TRUE_VALUE;
			return FALSE_VALUE;
		}
		return right.type === "stream" ? (async () => {
			for await (const b of right) if (isEqual(left, b)) return TRUE_VALUE;
			return FALSE_VALUE;
		})() : NULL_VALUE;
	},
	match: function(left, right) {
		const tokens = gatherText(left, (part) => matchTokenize(part)), patterns = gatherText(right, (part) => matchAnalyzePattern(part)), process = (tokens2, patterns2) => patterns2.success ? matchText(tokens2.parts, patterns2.parts) ? TRUE_VALUE : FALSE_VALUE : FALSE_VALUE;
		return "then" in tokens || "then" in patterns ? (async () => process(await tokens, await patterns))() : process(tokens, patterns);
	},
	"+": function(left, right) {
		return left.type === "datetime" && right.type === "number" ? fromDateTime(left.data.add(right.data)) : left.type === "number" && right.type === "datetime" ? fromDateTime(right.data.add(left.data)) : left.type === "number" && right.type === "number" ? fromNumber(left.data + right.data) : left.type === "string" && right.type === "string" ? fromString(left.data + right.data) : left.type === "object" && right.type === "object" ? fromJS({
			...left.data,
			...right.data
		}) : left.type === "array" && right.type === "array" ? fromJS(left.data.concat(right.data)) : left.isArray() && right.isArray() ? new StreamValue(async function* () {
			for await (const val of left) yield val;
			for await (const val of right) yield val;
		}) : NULL_VALUE;
	},
	"-": function(left, right) {
		return left.type === "datetime" && right.type === "number" ? fromDateTime(left.data.add(-right.data)) : left.type === "datetime" && right.type === "datetime" ? fromNumber(left.data.difference(right.data)) : left.type === "number" && right.type === "number" ? fromNumber(left.data - right.data) : NULL_VALUE;
	},
	"*": numericOperator((a, b) => a * b),
	"/": numericOperator((a, b) => a / b),
	"%": numericOperator((a, b) => a % b),
	"**": numericOperator((a, b) => Math.pow(a, b))
};
function numericOperator(impl) {
	return function(left, right) {
		if (left.type === "number" && right.type === "number") return fromNumber(impl(left.data, right.data));
		return NULL_VALUE;
	};
}
function evaluate(node, scope) {
	return executeAsync(node, scope);
}
function executeSync(node, scope) {
	return EXECUTORS[node.type].executeSync(node, scope);
}
function executeAsync(node, scope) {
	return EXECUTORS[node.type].executeAsync(node, scope);
}
function asyncOnlyExecutor(executeAsync2) {
	return {
		executeSync() {
			throw new Error("executeSync not supported");
		},
		executeAsync: executeAsync2
	};
}
function constantExecutor(fn) {
	return {
		executeSync(node, scope) {
			const value = fn(node, scope);
			if (value.type === "stream") throw new Error("Stream encountered in evaluateSync");
			return value;
		},
		async executeAsync(node, scope) {
			return fn(node, scope);
		}
	};
}
function mappedExecutor(map, reduce) {
	return {
		executeSync(node, scope) {
			const value = reduce(node, ...map(node).map((node2) => executeSync(node2, scope)));
			if (value.type === "stream") throw new Error("Stream/iterator not supported in synchronous mode");
			return value;
		},
		async executeAsync(node, scope) {
			const nodes = map(node);
			return reduce(node, ...await Promise.all(nodes.map((node2) => executeAsync(node2, scope).then((value) => value.asStatic()))));
		}
	};
}
var STOP_ITERATOR = /* @__PURE__ */ Symbol();
function arrayReducerExecutor(map, init, reduce, wrap) {
	return {
		executeSync(node, scope) {
			const { array: arrayNode, args: argNodes = [] } = map(node), arr = executeSync(arrayNode, scope);
			if (arr.type !== "array") return NULL_VALUE;
			const args = argNodes.map((node2) => executeSync(node2, scope));
			let state = init(node, ...args);
			for (const item of arr.data) {
				const result = reduce(node, state, item, ...args);
				if (result === STOP_ITERATOR) return NULL_VALUE;
				state = result;
			}
			return wrap(state);
		},
		async executeAsync(node, scope) {
			const { array: arrayNode, args: argNodes = [] } = map(node), arr = await executeAsync(arrayNode, scope);
			if (arr.type !== "array" && arr.type !== "stream") return NULL_VALUE;
			const args = await Promise.all(argNodes.map((node2) => executeAsync(node2, scope).then((v) => v.asStatic())));
			let state = init(node, ...args);
			if (arr.type === "stream") for await (const item of arr) {
				const result = reduce(node, state, await item.get(), ...args);
				if (result === STOP_ITERATOR) return NULL_VALUE;
				state = result;
			}
			else for (const item of arr.data) {
				const result = reduce(node, state, item, ...args);
				if (result === STOP_ITERATOR) return NULL_VALUE;
				state = result;
			}
			return wrap(state);
		}
	};
}
function arrayExecutor(map, reduce, { hidden = !1 } = {}) {
	return {
		executeSync(node, scope) {
			const mapping = map(node), arr = executeSync(mapping.array, scope);
			if (arr.type !== "array") return NULL_VALUE;
			const result = [];
			for (const item of arr.data) {
				let inner;
				if (mapping.inner) {
					const newScope = hidden ? scope.createHidden(fromJS(item)) : scope.createNested(fromJS(item));
					inner = executeSync(mapping.inner, newScope).data;
				}
				for (const entry of reduce(node, item, inner, mapping.state)) result.push(entry);
			}
			return fromArray(result);
		},
		async executeAsync(node, scope) {
			const mapping = map(node), arr = await executeAsync(mapping.array, scope);
			return arr.isArray() ? new StreamValue(async function* () {
				for await (const item of arr) {
					let inner;
					if (mapping.inner) {
						const newScope = hidden ? scope.createHidden(item) : scope.createNested(item);
						inner = await (await executeAsync(mapping.inner, newScope)).get();
					}
					for (const entry of reduce(node, await item.get(), inner, mapping.state)) yield fromJS(entry);
				}
			}) : NULL_VALUE;
		}
	};
}
var EXECUTORS = {
	This: constantExecutor((_, scope) => scope.value),
	SelectorNested: constantExecutor(() => {
		throw new Error("Unexpected node type: SelectorNested");
	}),
	SelectorFuncCall: constantExecutor(() => {
		throw new Error("Unexpected node type: SelectorFuncCall");
	}),
	Everything: constantExecutor((_, scope) => scope.source),
	Parameter: constantExecutor(({ name }, scope) => fromJS(scope.params[name])),
	Context: constantExecutor(({ key }, scope) => {
		if (key === "before" || key === "after") return scope.context[key] || NULL_VALUE;
		throw new Error(`unknown context key: ${key}`);
	}),
	Parent: constantExecutor(({ n }, scope) => {
		let current = scope;
		for (let i = 0; i < n; i++) {
			if (!current.parent) return NULL_VALUE;
			current = current.parent;
		}
		return current.value;
	}),
	OpCall: {
		async executeAsync({ op, left, right }, scope) {
			const func = operators[op];
			if (!func) throw new Error(`Unknown operator: ${op}`);
			return func(await executeAsync(left, scope), await executeAsync(right, scope));
		},
		executeSync({ op, left, right }, scope) {
			const func = operators[op];
			if (!func) throw new Error(`Unknown operator: ${op}`);
			const result = func(executeSync(left, scope), executeSync(right, scope));
			if ("then" in result || result.type === "stream") throw new Error(`Operator ${op} not possible in evaluteSync`);
			return result;
		}
	},
	Select: {
		executeSync({ alternatives, fallback }, scope) {
			for (const alt of alternatives) {
				const altCond = executeSync(alt.condition, scope);
				if (altCond.type === "boolean" && altCond.data === !0) return executeSync(alt.value, scope);
			}
			return fallback ? executeSync(fallback, scope) : NULL_VALUE;
		},
		async executeAsync({ alternatives, fallback }, scope) {
			for (const alt of alternatives) {
				const altCond = await executeAsync(alt.condition, scope);
				if (altCond.type === "boolean" && altCond.data === !0) return executeAsync(alt.value, scope);
			}
			return fallback ? executeAsync(fallback, scope) : NULL_VALUE;
		}
	},
	InRange: mappedExecutor(({ base, left, right }) => [
		base,
		left,
		right
	], ({ isInclusive }, value, leftValue, rightValue) => {
		const leftCmp = partialCompare(value.data, leftValue.data);
		if (leftCmp === null) return NULL_VALUE;
		const rightCmp = partialCompare(value.data, rightValue.data);
		return rightCmp === null ? NULL_VALUE : isInclusive ? leftCmp >= 0 && rightCmp <= 0 ? TRUE_VALUE : FALSE_VALUE : leftCmp >= 0 && rightCmp < 0 ? TRUE_VALUE : FALSE_VALUE;
	}),
	Filter: arrayExecutor(({ base, expr }) => ({
		array: base,
		inner: expr
	}), function* (_, elem, inner) {
		inner === !0 && (yield elem);
	}),
	Projection: {
		executeSync({ base, expr }, scope) {
			const baseValue = executeSync(base, scope);
			if (baseValue.type !== "object") return NULL_VALUE;
			return executeSync(expr, scope.createNested(baseValue));
		},
		async executeAsync({ base, expr }, scope) {
			const baseValue = await executeAsync(base, scope);
			if (baseValue.type !== "object") return NULL_VALUE;
			return executeAsync(expr, scope.createNested(baseValue));
		}
	},
	FuncCall: {
		executeAsync({ namespace, name, args }, scope) {
			const func = namespaces[namespace]?.[name];
			if (!func) throw new Error(`Unknown function: ${namespace}::${name}`);
			return func.executeAsync(args, scope);
		},
		executeSync({ namespace, name, args }, scope) {
			const func = namespaces[namespace]?.[name];
			if (!func) throw new Error(`Unknown function: ${namespace}::${name}`);
			return func.executeSync(args, scope);
		}
	},
	PipeFuncCall: {
		async executeAsync({ name, base, args }, scope) {
			const func = pipeFunctions[name];
			if (!func) throw new Error(`Unknown pipe function: ${name}`);
			const baseValue = await executeAsync(base, scope);
			return baseValue.type !== "stream" && baseValue.type !== "array" ? NULL_VALUE : func.executeAsync({
				base: baseValue,
				args
			}, scope);
		},
		executeSync({ name, base, args }, scope) {
			const func = pipeFunctions[name];
			if (!func) throw new Error(`Unknown pipe function: ${name}`);
			const baseValue = executeSync(base, scope);
			return baseValue.type !== "array" ? NULL_VALUE : func.executeSync({
				base: baseValue,
				args
			}, scope);
		}
	},
	AccessAttribute: mappedExecutor(({ base }) => [base || { type: "This" }], ({ name }, value) => value.type === "object" && value.data.hasOwnProperty(name) ? fromJS(value.data[name]) : NULL_VALUE),
	AccessElement: mappedExecutor(({ base }) => [base], ({ index }, baseValue) => {
		if (baseValue.type !== "array") return NULL_VALUE;
		const data = baseValue.data;
		return fromJS(data[index < 0 ? index + data.length : index]);
	}),
	Slice: mappedExecutor(({ base }) => [base], ({ left, right, isInclusive }, baseValue) => {
		if (baseValue.type !== "array") return NULL_VALUE;
		const array2 = baseValue.data;
		let leftIdx = left, rightIdx = right;
		return leftIdx < 0 && (leftIdx = array2.length + leftIdx), rightIdx < 0 && (rightIdx = array2.length + rightIdx), isInclusive && rightIdx++, leftIdx < 0 && (leftIdx = 0), rightIdx < 0 && (rightIdx = 0), fromArray(array2.slice(leftIdx, rightIdx));
	}),
	Deref: {
		executeSync({ base }, scope) {
			const value = executeSync(base, scope);
			if (value.type !== "object") return NULL_VALUE;
			const id = value.data._ref;
			if (typeof id != "string") return NULL_VALUE;
			if (scope.context.dereference) {
				const value2 = scope.context.dereference({ _ref: id });
				if (value2 && typeof value2 == "object" && "then" in value2) throw new Error("Dereference returned promise in synchronous mode");
				return fromJS(value2);
			}
			if (scope.source.type !== "array") return NULL_VALUE;
			for (const doc of scope.source.data) if (doc && typeof doc == "object" && "_id" in doc && id === doc._id) return fromJS(doc);
			return NULL_VALUE;
		},
		async executeAsync({ base }, scope) {
			const value = await executeAsync(base, scope);
			if (!scope.source.isArray()) return NULL_VALUE;
			if (value.type !== "object") return NULL_VALUE;
			const id = value.data._ref;
			if (typeof id != "string") return NULL_VALUE;
			if (scope.context.dereference) return fromJS(await scope.context.dereference({ _ref: id }));
			for await (const doc of scope.source) if (doc.type === "object" && id === doc.data._id) return doc;
			return NULL_VALUE;
		}
	},
	Value: constantExecutor(({ value }) => fromJS(value)),
	Group: {
		executeSync({ base }, scope) {
			return executeSync(base, scope);
		},
		executeAsync({ base }, scope) {
			return executeAsync(base, scope);
		}
	},
	Object: {
		executeSync({ attributes }, scope) {
			const result = {};
			for (const attr of attributes) {
				const attrType = attr.type;
				switch (attr.type) {
					case "ObjectAttributeValue": {
						const value = executeSync(attr.value, scope);
						result[attr.name] = value.data;
						break;
					}
					case "ObjectConditionalSplat": {
						const cond = executeSync(attr.condition, scope);
						if (cond.type !== "boolean" || cond.data === !1) continue;
						const value = executeSync(attr.value, scope);
						value.type === "object" && Object.assign(result, value.data);
						break;
					}
					case "ObjectSplat": {
						const value = executeSync(attr.value, scope);
						value.type === "object" && Object.assign(result, value.data);
						break;
					}
					default: throw new Error(`Unknown node type: ${attrType}`);
				}
			}
			return fromJS(result);
		},
		async executeAsync({ attributes }, scope) {
			const result = {};
			for (const attr of attributes) {
				const attrType = attr.type;
				switch (attr.type) {
					case "ObjectAttributeValue": {
						const value = await executeAsync(attr.value, scope);
						result[attr.name] = await value.get();
						break;
					}
					case "ObjectConditionalSplat": {
						const cond = await executeAsync(attr.condition, scope);
						if (cond.type !== "boolean" || cond.data === !1) continue;
						const value = await executeAsync(attr.value, scope);
						value.type === "object" && Object.assign(result, value.data);
						break;
					}
					case "ObjectSplat": {
						const value = await executeAsync(attr.value, scope);
						value.type === "object" && Object.assign(result, value.data);
						break;
					}
					default: throw new Error(`Unknown node type: ${attrType}`);
				}
			}
			return fromJS(result);
		}
	},
	Array: {
		executeSync({ elements }, scope) {
			const result = [];
			for (const element of elements) {
				const value = executeSync(element.value, scope);
				if (element.isSplat) {
					if (value.type === "array") for (const v of value.data) result.push(v);
				} else result.push(value.data);
			}
			return fromArray(result);
		},
		async executeAsync({ elements }, scope) {
			return new StreamValue(async function* () {
				for (const element of elements) {
					const value = await executeAsync(element.value, scope);
					if (element.isSplat) {
						if (value.isArray()) for await (const v of value) yield v;
					} else yield value;
				}
			});
		}
	},
	Tuple: constantExecutor(() => {
		throw new Error("tuples can not be evaluated");
	}),
	Or: mappedExecutor(({ left, right }) => [left, right], (_, leftValue, rightValue) => leftValue.type === "boolean" && leftValue.data === !0 ? TRUE_VALUE : rightValue.type === "boolean" && rightValue.data === !0 ? TRUE_VALUE : leftValue.type !== "boolean" || rightValue.type !== "boolean" ? NULL_VALUE : FALSE_VALUE),
	And: mappedExecutor(({ left, right }) => [left, right], (_, leftValue, rightValue) => leftValue.type === "boolean" && leftValue.data === !1 ? FALSE_VALUE : rightValue.type === "boolean" && rightValue.data === !1 ? FALSE_VALUE : leftValue.type !== "boolean" || rightValue.type !== "boolean" ? NULL_VALUE : TRUE_VALUE),
	Not: mappedExecutor(({ base }) => [base], (_, value) => value.type !== "boolean" ? NULL_VALUE : value.data ? FALSE_VALUE : TRUE_VALUE),
	Neg: mappedExecutor(({ base }) => [base], (_, value) => value.type !== "number" ? NULL_VALUE : fromNumber(-value.data)),
	Pos: mappedExecutor(({ base }) => [base], (_, value) => value.type !== "number" ? NULL_VALUE : fromNumber(value.data)),
	Asc: constantExecutor(() => NULL_VALUE),
	Desc: constantExecutor(() => NULL_VALUE),
	ArrayCoerce: {
		executeSync({ base }, scope) {
			const value = executeSync(base, scope);
			return value.isArray() ? value : NULL_VALUE;
		},
		async executeAsync({ base }, scope) {
			const value = await executeAsync(base, scope);
			return value.isArray() ? value : NULL_VALUE;
		}
	},
	Map: arrayExecutor(({ base, expr }) => ({
		array: base,
		inner: expr
	}), function* (_, _item, inner) {
		yield inner;
	}, { hidden: !0 }),
	FlatMap: arrayExecutor(({ base, expr }) => ({
		array: base,
		inner: expr
	}), function* (_, _item, inner) {
		if (Array.isArray(inner)) for (const innerInner of inner) yield innerInner;
		else yield inner;
	}, { hidden: !0 })
};
function evaluateQuery(tree, options = {}) {
	return executeAsync(tree, scopeFromOptions(options));
}
function scopeFromOptions(options) {
	const root = fromJS(options.root), dataset = fromJS(options.dataset);
	return new Scope({ ...options.params }, dataset, root, {
		timestamp: options.timestamp || /* @__PURE__ */ new Date(),
		identity: options.identity === void 0 ? "me" : options.identity,
		sanity: options.sanity,
		after: options.after ? fromJS(options.after) : null,
		before: options.before ? fromJS(options.before) : null,
		dereference: options.dereference
	}, null);
}
//#endregion
//#region node_modules/groq-js/dist/1.mjs
var import_src = /* @__PURE__ */ __toESM(require_src(), 1);
var MarkProcessor = class {
	_string;
	marks;
	index;
	customFunctions;
	parseOptions;
	allowBoost = !1;
	constructor(string, marks, customFunctions, parseOptions) {
		this._string = string, this.marks = marks, this.customFunctions = customFunctions, this.index = 0, this.parseOptions = parseOptions;
	}
	hasMark(pos = 0) {
		return this.index + pos < this.marks.length;
	}
	getMark(pos = 0) {
		return this.marks[this.index + pos];
	}
	shift() {
		this.index += 1;
	}
	process(visitor) {
		const mark = this.marks[this.index];
		this.shift();
		const func = visitor[mark.name];
		if (!func) throw new Error(`Unknown handler: ${mark.name}`);
		return func.call(visitor, this, mark);
	}
	processString() {
		return this.shift(), this.processStringEnd();
	}
	processStringEnd() {
		const prev = this.marks[this.index - 1], curr = this.marks[this.index];
		return this.shift(), this.string.slice(prev.position, curr.position);
	}
	slice(len) {
		const pos = this.marks[this.index].position;
		return this.string.slice(pos, pos + len);
	}
	get string() {
		return this._string;
	}
};
var WS = /^([\t\n\v\f\r \u0085\u00A0]|(\/\/[^\n]*\n))+/;
var NUM = /^\d+/;
var IDENT = /^[a-zA-Z_][a-zA-Z_0-9]*/;
function parse$1(str) {
	let pos = 0;
	pos = skipWS(str, pos);
	let customFunctions = {};
	for (; pos < str.length && str.substring(pos, pos + 2) === "fn";) {
		let funcResult = parseFunctionDeclaration(str, pos);
		if (funcResult.type === "error") return funcResult;
		customFunctions[`${funcResult.namespace}::${funcResult.name}`] = funcResult, pos = skipWS(str, funcResult.position);
	}
	let result = parseExpr(str, pos, 0);
	return result.type === "error" ? result : (pos = skipWS(str, result.position), pos !== str.length ? (result.failPosition && (pos = result.failPosition - 1), {
		type: "error",
		message: "Unexpected end of query",
		position: pos
	}) : (delete result.position, delete result.failPosition, result.customFunctions = customFunctions, result));
}
function parseExpr(str, pos, level) {
	let startPos = pos, token = str[pos], marks;
	switch (token) {
		case "+": {
			let rhs = parseExpr(str, skipWS(str, pos + 1), 10);
			if (rhs.type === "error") return rhs;
			marks = [{
				name: "pos",
				position: startPos
			}].concat(rhs.marks), pos = rhs.position;
			break;
		}
		case "-": {
			let rhs = parseExpr(str, skipWS(str, pos + 1), 8);
			if (rhs.type === "error") return rhs;
			marks = [{
				name: "neg",
				position: startPos
			}].concat(rhs.marks), pos = rhs.position;
			break;
		}
		case "(": {
			let result = parseGroupOrTuple(str, pos);
			if (result.type === "error") return result;
			pos = result.position, marks = result.marks;
			break;
		}
		case "!": {
			let rhs = parseExpr(str, skipWS(str, pos + 1), 10);
			if (rhs.type === "error") return rhs;
			marks = [{
				name: "not",
				position: startPos
			}].concat(rhs.marks), pos = rhs.position;
			break;
		}
		case "{": {
			let result = parseObject(str, pos);
			if (result.type === "error") return result;
			marks = result.marks, pos = result.position;
			break;
		}
		case "[":
			if (marks = [{
				name: "array",
				position: pos
			}], pos = skipWS(str, pos + 1), str[pos] !== "]") for (;;) {
				str.slice(pos, pos + 3) === "..." && (marks.push({
					name: "array_splat",
					position: pos
				}), pos = skipWS(str, pos + 3));
				let res = parseExpr(str, pos, 0);
				if (res.type === "error") return res;
				if (marks = marks.concat(res.marks), pos = res.position, pos = skipWS(str, pos), str[pos] !== "," || (pos = skipWS(str, pos + 1), str[pos] === "]")) break;
			}
			if (str[pos] === "]") pos++, marks.push({
				name: "array_end",
				position: pos
			});
			else return {
				type: "error",
				message: "Expected \"]\" after array expression",
				position: pos
			};
			break;
		case "'":
		case "\"": {
			let result = parseString(str, pos);
			if (result.type === "error") return result;
			marks = result.marks, pos = result.position;
			break;
		}
		case "^":
			for (pos++, marks = []; str[pos] === "." && str[pos + 1] === "^";) marks.push({
				name: "dblparent",
				position: startPos
			}), pos += 2;
			marks.push({
				name: "parent",
				position: startPos
			});
			break;
		case "@":
			marks = [{
				name: "this",
				position: startPos
			}], pos++;
			break;
		case "*":
			marks = [{
				name: "everything",
				position: startPos
			}], pos++;
			break;
		case "$": {
			let identLen = parseRegex(str, pos + 1, IDENT);
			identLen && (pos += 1 + identLen, marks = [
				{
					name: "param",
					position: startPos
				},
				{
					name: "ident",
					position: startPos + 1
				},
				{
					name: "ident_end",
					position: pos
				}
			]);
			break;
		}
		default: {
			let numLen = parseRegex(str, pos, NUM);
			if (numLen) {
				pos += numLen;
				let name = "integer";
				if (str[pos] === ".") {
					let fracLen = parseRegex(str, pos + 1, NUM);
					fracLen && (name = "float", pos += 1 + fracLen);
				}
				if (str[pos] === "e" || str[pos] === "E") {
					name = "sci", pos++, (str[pos] === "+" || str[pos] === "-") && pos++;
					let expLen = parseRegex(str, pos, NUM);
					if (!expLen) return {
						type: "error",
						message: "Exponent must be a number",
						position: pos
					};
					pos += expLen;
				}
				marks = [{
					name,
					position: startPos
				}, {
					name: name + "_end",
					position: pos
				}];
				break;
			}
			let identLen = parseRegex(str, pos, IDENT);
			if (identLen) {
				switch (pos += identLen, str[pos]) {
					case ":":
					case "(": {
						let result = parseFuncCall(str, startPos, pos);
						if (result.type === "error") return result;
						marks = result.marks, pos = result.position;
						break;
					}
					default: marks = [
						{
							name: "this_attr",
							position: startPos
						},
						{
							name: "ident",
							position: startPos
						},
						{
							name: "ident_end",
							position: pos
						}
					];
				}
				break;
			}
		}
	}
	if (!marks) return {
		type: "error",
		message: "Expected expression",
		position: pos
	};
	let lhsLevel = 12, trav;
	loop: for (;;) {
		let innerPos = skipWS(str, pos);
		if (innerPos === str.length) {
			pos = innerPos;
			break;
		}
		if (trav = parseTraversal(str, innerPos), trav.type === "success") {
			for (marks.unshift({
				name: "traverse",
				position: startPos
			}); trav.type === "success";) marks = marks.concat(trav.marks), pos = trav.position, trav = parseTraversal(str, skipWS(str, pos));
			marks.push({
				name: "traversal_end",
				position: pos
			});
			continue;
		}
		switch (str[innerPos]) {
			case "=":
				switch (str[innerPos + 1]) {
					case ">": {
						if (level > 1 || lhsLevel <= 1) break loop;
						let rhs = parseExpr(str, skipWS(str, innerPos + 2), 1);
						if (rhs.type === "error") return rhs;
						marks = marks.concat(rhs.marks), marks.unshift({
							name: "pair",
							position: startPos
						}), pos = rhs.position, lhsLevel = 1;
						break;
					}
					case "=": {
						if (level > 4 || lhsLevel <= 4) break loop;
						let rhs = parseExpr(str, skipWS(str, innerPos + 2), 5);
						if (rhs.type === "error") return rhs;
						marks.unshift({
							name: "comp",
							position: startPos
						}), marks.push({
							name: "op",
							position: innerPos
						}, {
							name: "op_end",
							position: innerPos + 2
						}), marks = marks.concat(rhs.marks), pos = rhs.position, lhsLevel = 4;
						break;
					}
					default: break loop;
				}
				break;
			case "+": {
				if (level > 6 || lhsLevel < 6) break loop;
				let rhs = parseExpr(str, skipWS(str, innerPos + 1), 7);
				if (rhs.type === "error") return rhs;
				marks = marks.concat(rhs.marks), marks.unshift({
					name: "add",
					position: startPos
				}), pos = rhs.position, lhsLevel = 6;
				break;
			}
			case "-": {
				if (level > 6 || lhsLevel < 6) break loop;
				let rhs = parseExpr(str, skipWS(str, innerPos + 1), 7);
				if (rhs.type === "error") return rhs;
				marks = marks.concat(rhs.marks), marks.unshift({
					name: "sub",
					position: startPos
				}), pos = rhs.position, lhsLevel = 6;
				break;
			}
			case "*": {
				if (str[innerPos + 1] === "*") {
					if (level > 8 || lhsLevel <= 8) break loop;
					let rhs2 = parseExpr(str, skipWS(str, innerPos + 2), 8);
					if (rhs2.type === "error") return rhs2;
					marks = marks.concat(rhs2.marks), marks.unshift({
						name: "pow",
						position: startPos
					}), pos = rhs2.position, lhsLevel = 8;
					break;
				}
				if (level > 7 || lhsLevel < 7) break loop;
				let rhs = parseExpr(str, skipWS(str, innerPos + 1), 8);
				if (rhs.type === "error") return rhs;
				marks = marks.concat(rhs.marks), marks.unshift({
					name: "mul",
					position: startPos
				}), pos = rhs.position, lhsLevel = 7;
				break;
			}
			case "/": {
				if (level > 7 || lhsLevel < 7) break loop;
				let rhs = parseExpr(str, skipWS(str, innerPos + 1), 8);
				if (rhs.type === "error") return rhs;
				marks = marks.concat(rhs.marks), marks.unshift({
					name: "div",
					position: startPos
				}), pos = rhs.position, lhsLevel = 7;
				break;
			}
			case "%": {
				if (level > 7 || lhsLevel < 7) break loop;
				let rhs = parseExpr(str, skipWS(str, innerPos + 1), 8);
				if (rhs.type === "error") return rhs;
				marks = marks.concat(rhs.marks), marks.unshift({
					name: "mod",
					position: startPos
				}), pos = rhs.position, lhsLevel = 7;
				break;
			}
			case "<":
			case ">": {
				if (level > 4 || lhsLevel <= 4) break loop;
				let nextPos = innerPos + 1;
				str[nextPos] === "=" && nextPos++;
				let rhs = parseExpr(str, skipWS(str, nextPos), 5);
				if (rhs.type === "error") return rhs;
				marks.unshift({
					name: "comp",
					position: startPos
				}), marks.push({
					name: "op",
					position: innerPos
				}, {
					name: "op_end",
					position: nextPos
				}), marks = marks.concat(rhs.marks), pos = rhs.position, lhsLevel = 4;
				break;
			}
			case "|":
				if (str[innerPos + 1] === "|") {
					if (level > 2 || lhsLevel < 2) break loop;
					let rhs = parseExpr(str, skipWS(str, innerPos + 2), 3);
					if (rhs.type === "error") return rhs;
					marks = marks.concat(rhs.marks), marks.unshift({
						name: "or",
						position: startPos
					}), pos = rhs.position, lhsLevel = 2;
				} else {
					if (level > 11 || lhsLevel < 11) break loop;
					let identPos = skipWS(str, innerPos + 1), identLen = parseRegex(str, identPos, IDENT);
					if (!identLen) return {
						type: "error",
						message: "Expected identifier",
						position: identPos
					};
					if (pos = identPos + identLen, str[pos] === "(" || str[pos] === ":") {
						let result = parseFuncCall(str, identPos, pos);
						if (result.type === "error") return result;
						marks = marks.concat(result.marks), marks.unshift({
							name: "pipecall",
							position: startPos
						}), pos = result.position, lhsLevel = 11;
					}
				}
				break;
			case "&": {
				if (str[innerPos + 1] != "&" || level > 3 || lhsLevel < 3) break loop;
				let rhs = parseExpr(str, skipWS(str, innerPos + 2), 4);
				if (rhs.type === "error") return rhs;
				marks = marks.concat(rhs.marks), marks.unshift({
					name: "and",
					position: startPos
				}), pos = rhs.position, lhsLevel = 3;
				break;
			}
			case "!": {
				if (str[innerPos + 1] !== "=" || level > 4 || lhsLevel <= 4) break loop;
				let rhs = parseExpr(str, skipWS(str, innerPos + 2), 5);
				if (rhs.type === "error") return rhs;
				marks.unshift({
					name: "comp",
					position: startPos
				}), marks.push({
					name: "op",
					position: innerPos
				}, {
					name: "op_end",
					position: innerPos + 2
				}), marks = marks.concat(rhs.marks), pos = rhs.position, lhsLevel = 4;
				break;
			}
			case "d":
				if (str.slice(innerPos, innerPos + 4) !== "desc" || level > 4 || lhsLevel < 4) break loop;
				marks.unshift({
					name: "desc",
					position: startPos
				}), pos = innerPos + 4, lhsLevel = 4;
				break;
			case "a":
				if (str.slice(innerPos, innerPos + 3) !== "asc" || level > 4 || lhsLevel < 4) break loop;
				marks.unshift({
					name: "asc",
					position: startPos
				}), pos = innerPos + 3, lhsLevel = 4;
				break;
			default: switch (parseRegexStr(str, innerPos, IDENT)) {
				case "in": {
					if (level > 4 || lhsLevel <= 4) break loop;
					pos = skipWS(str, innerPos + 2);
					let isGroup = !1;
					str[pos] === "(" && (isGroup = !0, pos = skipWS(str, pos + 1));
					let rangePos = pos, result = parseExpr(str, pos, 5);
					if (result.type === "error") return result;
					if (pos = skipWS(str, result.position), str[pos] === "." && str[pos + 1] === ".") {
						let type = "inc_range";
						str[pos + 2] === "." ? (type = "exc_range", pos = skipWS(str, pos + 3)) : pos = skipWS(str, pos + 2);
						let rhs = parseExpr(str, pos, 5);
						if (rhs.type === "error") return rhs;
						marks.unshift({
							name: "in_range",
							position: startPos
						}), marks = marks.concat({
							name: type,
							position: rangePos
						}, result.marks, rhs.marks), pos = rhs.position;
					} else marks.unshift({
						name: "comp",
						position: startPos
					}), marks.push({
						name: "op",
						position: innerPos
					}, {
						name: "op_end",
						position: innerPos + 2
					}), marks = marks.concat(result.marks);
					if (isGroup) {
						if (pos = skipWS(str, pos), str[pos] !== ")") return {
							type: "error",
							message: "Expected \")\" in group",
							position: pos
						};
						pos++;
					}
					lhsLevel = 4;
					break;
				}
				case "match": {
					if (level > 4 || lhsLevel <= 4) break loop;
					let rhs = parseExpr(str, skipWS(str, innerPos + 5), 5);
					if (rhs.type === "error") return rhs;
					marks.unshift({
						name: "comp",
						position: startPos
					}), marks.push({
						name: "op",
						position: innerPos
					}, {
						name: "op_end",
						position: innerPos + 5
					}), marks = marks.concat(rhs.marks), pos = rhs.position, lhsLevel = 4;
					break;
				}
				default: break loop;
			}
		}
	}
	let failPosition = trav?.type === "error" && trav.position;
	return {
		type: "success",
		marks,
		position: pos,
		failPosition
	};
}
function parseGroupOrTuple(str, pos) {
	const startPos = pos;
	let marks, rhs = parseExpr(str, skipWS(str, pos + 1), 0);
	if (rhs.type === "error") return rhs;
	switch (pos = skipWS(str, rhs.position), str[pos]) {
		case ",":
			for (marks = [{
				name: "tuple",
				position: startPos
			}].concat(rhs.marks), pos = skipWS(str, pos + 1);;) {
				if (rhs = parseExpr(str, pos, 0), rhs.type === "error") return rhs;
				if (marks.push(...rhs.marks), pos = skipWS(str, rhs.position), str[pos] !== ",") break;
				pos = skipWS(str, pos + 1);
			}
			if (str[pos] !== ")") return {
				type: "error",
				message: "Expected \")\" after tuple expression",
				position: pos
			};
			pos++, marks.push({
				name: "tuple_end",
				position: pos
			});
			break;
		case ")":
			pos++, marks = [{
				name: "group",
				position: startPos
			}].concat(rhs.marks);
			break;
		default: return {
			type: "error",
			message: `Unexpected character "${str[pos]}"`,
			position: pos
		};
	}
	return {
		type: "success",
		marks,
		position: pos
	};
}
function parseTraversal(str, pos) {
	let startPos = pos;
	switch (str[pos]) {
		case ".": {
			if (pos = skipWS(str, pos + 1), str[pos] === "(") return parseGroupOrTuple(str, pos);
			let identStart = pos, identLen2 = parseRegex(str, pos, IDENT);
			return identLen2 ? (pos += identLen2, {
				type: "success",
				marks: [
					{
						name: "attr_access",
						position: startPos
					},
					{
						name: "ident",
						position: identStart
					},
					{
						name: "ident_end",
						position: pos
					}
				],
				position: pos
			}) : {
				type: "error",
				message: "Expected identifier after \".\"",
				position: pos
			};
		}
		case "-":
			if (str[pos + 1] !== ">") return {
				type: "error",
				message: "Expected \">\" in reference",
				position: pos
			};
			let marks = [{
				name: "deref",
				position: startPos
			}];
			pos += 2;
			let identPos = skipWS(str, pos), identLen = parseRegex(str, identPos, IDENT);
			return identLen && (pos = identPos + identLen, marks.push({
				name: "deref_attr",
				position: identPos
			}, {
				name: "ident",
				position: identPos
			}, {
				name: "ident_end",
				position: pos
			})), {
				type: "success",
				marks,
				position: pos
			};
		case "[": {
			if (pos = skipWS(str, pos + 1), str[pos] === "]") return {
				type: "success",
				marks: [{
					name: "array_postfix",
					position: startPos
				}],
				position: pos + 1
			};
			let rangePos = pos, result = parseExpr(str, pos, 0);
			if (result.type === "error") return result;
			if (pos = skipWS(str, result.position), str[pos] === "." && str[pos + 1] === ".") {
				let type = "inc_range";
				str[pos + 2] === "." ? (type = "exc_range", pos += 3) : pos += 2, pos = skipWS(str, pos);
				let rhs = parseExpr(str, pos, 0);
				return rhs.type === "error" ? rhs : (pos = skipWS(str, rhs.position), str[pos] !== "]" ? {
					type: "error",
					message: "Expected \"]\" after array expression",
					position: pos
				} : {
					type: "success",
					marks: [{
						name: "slice",
						position: startPos
					}, {
						name: type,
						position: rangePos
					}].concat(result.marks, rhs.marks),
					position: pos + 1
				});
			}
			return str[pos] !== "]" ? {
				type: "error",
				message: "Expected \"]\" after array expression",
				position: pos
			} : {
				type: "success",
				marks: [{
					name: "square_bracket",
					position: startPos
				}].concat(result.marks),
				position: pos + 1
			};
		}
		case "|":
			if (pos = skipWS(str, pos + 1), str[pos] === "{") {
				let result = parseObject(str, pos);
				return result.type === "error" || result.marks.unshift({
					name: "projection",
					position: startPos
				}), result;
			}
			break;
		case "{": {
			let result = parseObject(str, pos);
			return result.type === "error" || result.marks.unshift({
				name: "projection",
				position: startPos
			}), result;
		}
	}
	return {
		type: "error",
		message: "Unexpected character in traversal",
		position: pos
	};
}
function parseFuncCall(str, startPos, pos) {
	let marks = [];
	if (marks.push({
		name: "func_call",
		position: startPos
	}), str[pos] === ":" && str[pos + 1] === ":") {
		marks.push({
			name: "namespace",
			position: startPos
		}), marks.push({
			name: "ident",
			position: startPos
		}, {
			name: "ident_end",
			position: pos
		}), pos = skipWS(str, pos + 2);
		let nameLen = parseRegex(str, pos, IDENT);
		if (!nameLen) return {
			type: "error",
			message: "Expected function name",
			position: pos
		};
		if (marks.push({
			name: "ident",
			position: pos
		}, {
			name: "ident_end",
			position: pos + nameLen
		}), pos = skipWS(str, pos + nameLen), str[pos] !== "(") return {
			type: "error",
			message: "Expected \"(\" after function name",
			position: pos
		};
		pos++, pos = skipWS(str, pos);
	} else marks.push({
		name: "ident",
		position: startPos
	}, {
		name: "ident_end",
		position: pos
	}), pos = skipWS(str, pos + 1);
	let lastPos = pos;
	if (str[pos] !== ")") for (;;) {
		let result = parseExpr(str, pos, 0);
		if (result.type === "error") return result;
		if (marks = marks.concat(result.marks), lastPos = result.position, pos = skipWS(str, result.position), str[pos] !== "," || (pos = skipWS(str, pos + 1), str[pos] === ")")) break;
	}
	return str[pos] !== ")" ? {
		type: "error",
		message: "Expected \")\" after function arguments",
		position: pos
	} : (marks.push({
		name: "func_args_end",
		position: lastPos
	}), {
		type: "success",
		marks,
		position: pos + 1
	});
}
function parseObject(str, pos) {
	let marks = [{
		name: "object",
		position: pos
	}];
	for (pos = skipWS(str, pos + 1); str[pos] !== "}";) {
		let pairPos = pos;
		if (str.slice(pos, pos + 3) === "...") if (pos = skipWS(str, pos + 3), str[pos] !== "}" && str[pos] !== ",") {
			let expr = parseExpr(str, pos, 0);
			if (expr.type === "error") return expr;
			marks.push({
				name: "object_splat",
				position: pairPos
			}), marks = marks.concat(expr.marks), pos = expr.position;
		} else marks.push({
			name: "object_splat_this",
			position: pairPos
		});
		else {
			let expr = parseExpr(str, pos, 0);
			if (expr.type === "error") return expr;
			let nextPos = skipWS(str, expr.position);
			if (expr.marks[0].name === "str" && str[nextPos] === ":") {
				let value = parseExpr(str, skipWS(str, nextPos + 1), 0);
				if (value.type === "error") return value;
				marks.push({
					name: "object_pair",
					position: pairPos
				}), marks = marks.concat(expr.marks, value.marks), pos = value.position;
			} else marks = marks.concat({
				name: "object_expr",
				position: pos
			}, expr.marks), pos = expr.position;
		}
		if (pos = skipWS(str, pos), str[pos] !== ",") break;
		pos = skipWS(str, pos + 1);
	}
	return str[pos] !== "}" ? {
		type: "error",
		message: "Expected \"}\" after object",
		position: pos
	} : (pos++, marks.push({
		name: "object_end",
		position: pos
	}), {
		type: "success",
		marks,
		position: pos
	});
}
function parseString(str, pos) {
	let token = str[pos];
	pos = pos + 1;
	const marks = [{
		name: "str",
		position: pos
	}];
	str: for (;; pos++) {
		if (pos > str.length) return {
			type: "error",
			message: "Unexpected end of query",
			position: pos
		};
		switch (str[pos]) {
			case token:
				marks.push({
					name: "str_end",
					position: pos
				}), pos++;
				break str;
			case "\\": marks.push({
				name: "str_pause",
				position: pos
			}), str[pos + 1] === "u" ? str[pos + 2] === "{" ? (marks.push({
				name: "unicode_hex",
				position: pos + 3
			}), pos = str.indexOf("}", pos + 3), marks.push({
				name: "unicode_hex_end",
				position: pos
			})) : (marks.push({
				name: "unicode_hex",
				position: pos + 2
			}), marks.push({
				name: "unicode_hex_end",
				position: pos + 6
			}), pos += 5) : (marks.push({
				name: "single_escape",
				position: pos + 1
			}), pos += 1), marks.push({
				name: "str_start",
				position: pos + 1
			});
		}
	}
	return {
		type: "success",
		marks,
		position: pos
	};
}
function skipWS(str, pos) {
	return pos + parseRegex(str, pos, WS);
}
function parseRegex(str, pos, re) {
	let m = re.exec(str.slice(pos));
	return m ? m[0].length : 0;
}
function parseRegexStr(str, pos, re) {
	let m = re.exec(str.slice(pos));
	return m ? m[0] : null;
}
function parseFunctionDeclaration(str, startPos) {
	let pos = startPos, marks = [], namespace = "", name = "";
	if (str.substring(pos, pos + 2) !== "fn") return {
		type: "success",
		position: pos,
		marks
	};
	marks.push({
		name: "func_decl",
		position: startPos
	}), pos = skipWS(str, pos + 2);
	let identStart = pos;
	if (namespace = parseRegexStr(str, pos, IDENT), !namespace) return {
		type: "error",
		message: "Expected function name",
		position: pos
	};
	if (marks.push({
		name: "ident",
		position: identStart
	}, {
		name: "ident_end",
		position: pos + namespace.length
	}), pos = skipWS(str, pos + namespace.length), str.substring(pos, pos + 2) !== "::") return {
		type: "error",
		message: "Expected \"::\" after namespace",
		position: pos
	};
	if (pos = skipWS(str, pos + 2), name = parseRegexStr(str, pos, IDENT), !name) return {
		type: "error",
		message: "Expected function name",
		position: pos
	};
	if (marks.push({
		name: "ident",
		position: pos
	}, {
		name: "ident_end",
		position: pos + name.length
	}), pos = skipWS(str, pos + name.length), str[pos] !== "(") return {
		type: "error",
		message: "Expected \"(\"",
		position: pos
	};
	for (pos = skipWS(str, pos + 1); pos < str.length && str[pos] !== ")";) {
		if (str[pos] !== "$") return {
			type: "error",
			message: "Parameter should start with \"$\"",
			position: pos
		};
		const startPos2 = pos;
		pos++;
		const paramName = parseRegexStr(str, pos, IDENT);
		if (!paramName) return {
			type: "error",
			message: "Expected function name",
			position: pos
		};
		if (pos += paramName.length, marks.push({
			name: "param",
			position: startPos2
		}, {
			name: "ident",
			position: startPos2 + 1
		}, {
			name: "ident_end",
			position: pos
		}), pos = skipWS(str, pos), str[pos] === ",") pos = skipWS(str, pos + 1);
		else if (str[pos] !== ")") return {
			type: "error",
			message: "Expected \",\" or \")\"",
			position: pos
		};
	}
	if (str[pos] !== ")") return {
		type: "error",
		message: "Expected \")\"",
		position: pos
	};
	if (marks.push({
		name: "func_params_end",
		position: pos
	}), pos = skipWS(str, pos + 1), str[pos] !== "=") return {
		type: "error",
		message: "Expected \"=\"",
		position: pos
	};
	pos = skipWS(str, pos + 1);
	let bodyResult = parseExpr(str, pos, 0);
	return bodyResult.type === "error" ? bodyResult : (marks = marks.concat(bodyResult.marks), pos = skipWS(str, bodyResult.position), str[pos] !== ";" ? {
		type: "error",
		message: "Expected \";\" after function declaration",
		position: pos
	} : (pos++, {
		type: "success",
		position: pos,
		marks,
		namespace,
		name
	}));
}
function join(a, b) {
	return (base) => b(a(base));
}
function map(inner) {
	return (base) => ({
		type: "Map",
		base,
		expr: inner({ type: "This" })
	});
}
function flatMap(inner) {
	return (base) => ({
		type: "FlatMap",
		base,
		expr: inner({ type: "This" })
	});
}
function traverseArray(build, right) {
	if (!right) return {
		type: "a-a",
		build
	};
	switch (right.type) {
		case "a-a": return {
			type: "a-a",
			build: join(build, right.build)
		};
		case "a-b": return {
			type: "a-b",
			build: join(build, right.build)
		};
		case "b-b": return {
			type: "a-a",
			build: join(build, map(right.build))
		};
		case "b-a": return {
			type: "a-a",
			build: join(build, flatMap(right.build))
		};
		default: throw new Error(`unknown type: ${right.type}`);
	}
}
function traversePlain(mapper, right) {
	if (!right) return {
		type: "b-b",
		build: mapper
	};
	switch (right.type) {
		case "a-a":
		case "b-a": return {
			type: "b-a",
			build: join(mapper, right.build)
		};
		case "a-b":
		case "b-b": return {
			type: "b-b",
			build: join(mapper, right.build)
		};
		default: throw new Error(`unknown type: ${right.type}`);
	}
}
function traverseElement(mapper, right) {
	if (!right) return {
		type: "a-b",
		build: mapper
	};
	switch (right.type) {
		case "a-a":
		case "b-a": return {
			type: "a-a",
			build: join(mapper, right.build)
		};
		case "a-b":
		case "b-b": return {
			type: "a-b",
			build: join(mapper, right.build)
		};
		default: throw new Error(`unknown type: ${right.type}`);
	}
}
function traverseProjection(mapper, right) {
	if (!right) return {
		type: "b-b",
		build: mapper
	};
	switch (right.type) {
		case "a-a": return {
			type: "a-a",
			build: join(map(mapper), right.build)
		};
		case "a-b": return {
			type: "a-b",
			build: join(map(mapper), right.build)
		};
		case "b-a": return {
			type: "b-a",
			build: join(mapper, right.build)
		};
		case "b-b": return {
			type: "b-b",
			build: join(mapper, right.build)
		};
		default: throw new Error(`unknown type: ${right.type}`);
	}
}
function walkValidateCustomFunction(node, functionParameters, level = 0) {
	switch (node.type) {
		case "Projection": return {
			...node,
			base: walkValidateCustomFunction(node.base, functionParameters, level),
			expr: walkValidateCustomFunction(node.expr, functionParameters, level + 1)
		};
		case "Filter": return {
			...node,
			base: walkValidateCustomFunction(node.base, functionParameters, level),
			expr: walkValidateCustomFunction(node.expr, functionParameters, level + 1)
		};
		case "Parent":
			if (level - node.n < 0) throw new Error(`Invalid use of parent operator (^). No parent n ${node.n} at level ${level}.`);
			return node;
		case "Parameter":
			if (functionParameters.find((p) => p.name === node.name)) throw new Error(`Function parameters are not allowed outside function declarations: ${node.name}`);
			return node;
		case "Array": return {
			...node,
			elements: node.elements.map((el) => ({
				...el,
				value: walkValidateCustomFunction(el.value, functionParameters, level)
			}))
		};
		case "PipeFuncCall": return {
			...node,
			base: walkValidateCustomFunction(node.base, functionParameters, level),
			args: node.args.map((arg) => walkValidateCustomFunction(arg, functionParameters, level))
		};
		case "Object": return {
			...node,
			attributes: node.attributes.map((attr) => {
				switch (attr.type) {
					case "ObjectAttributeValue": return {
						...attr,
						value: walkValidateCustomFunction(attr.value, functionParameters, level)
					};
					case "ObjectConditionalSplat": return {
						...attr,
						condition: walkValidateCustomFunction(attr.condition, functionParameters, level),
						value: walkValidateCustomFunction(attr.value, functionParameters, level)
					};
					case "ObjectSplat": return {
						...attr,
						value: walkValidateCustomFunction(attr.value, functionParameters, level)
					};
					default: return attr;
				}
			})
		};
		case "FlatMap":
		case "Map": return {
			...node,
			expr: walkValidateCustomFunction(node.expr, functionParameters, level),
			base: walkValidateCustomFunction(node.base, functionParameters, level)
		};
		case "FuncCall": return {
			...node,
			args: node.args.map((arg) => walkValidateCustomFunction(arg, functionParameters, level))
		};
		case "Tuple": return {
			...node,
			members: node.members.map((member) => walkValidateCustomFunction(member, functionParameters, level))
		};
		case "Select": {
			const alternatives = node.alternatives.map((alt) => ({
				...alt,
				condition: walkValidateCustomFunction(alt.condition, functionParameters, level),
				value: walkValidateCustomFunction(alt.value, functionParameters, level)
			}));
			return node.fallback ? {
				...node,
				alternatives,
				fallback: walkValidateCustomFunction(node.fallback, functionParameters, level)
			} : {
				...node,
				alternatives
			};
		}
		case "SelectorNested": return {
			...node,
			base: walkValidateCustomFunction(node.base, functionParameters, level),
			nested: walkValidateCustomFunction(node.nested, functionParameters, level)
		};
		case "SelectorFuncCall": return {
			...node,
			arg: walkValidateCustomFunction(node.arg, functionParameters, level)
		};
		case "AccessAttribute":
		case "AccessElement":
		case "ArrayCoerce":
		case "Asc":
		case "Desc":
		case "Deref":
		case "Group":
		case "Neg":
		case "Not":
		case "Slice":
		case "Pos": return node.base ? {
			...node,
			base: walkValidateCustomFunction(node.base, functionParameters, level)
		} : node;
		case "InRange": return {
			...node,
			base: walkValidateCustomFunction(node.base, functionParameters, level),
			left: walkValidateCustomFunction(node.left, functionParameters, level),
			right: walkValidateCustomFunction(node.right, functionParameters, level)
		};
		case "OpCall":
		case "And":
		case "Or": return {
			...node,
			left: walkValidateCustomFunction(node.left, functionParameters, level),
			right: walkValidateCustomFunction(node.right, functionParameters, level)
		};
		case "Parameter":
		case "Everything":
		case "This":
		case "Value":
		case "Context": return node;
		default: throw new Error(`Handle all cases: ${node.type}`);
	}
}
var ESCAPE_SEQUENCE = {
	"'": "'",
	"\"": "\"",
	"\\": "\\",
	"/": "/",
	b: "\b",
	f: "\f",
	n: `
`,
	r: "\r",
	t: "	"
};
function expandHex(str) {
	const charCode = parseInt(str, 16);
	return String.fromCharCode(charCode);
}
var GroqQueryError = class extends Error {
	name = "GroqQueryError";
};
function createExpressionBuilder(parseOptions, recursion = /* @__PURE__ */ new Set()) {
	const exprBuilder = {
		group(p) {
			return {
				type: "Group",
				base: p.process(exprBuilder)
			};
		},
		everything() {
			return { type: "Everything" };
		},
		this() {
			return { type: "This" };
		},
		parent() {
			return {
				type: "Parent",
				n: 1
			};
		},
		dblparent(p) {
			return {
				type: "Parent",
				n: p.process(exprBuilder).n + 1
			};
		},
		traverse(p) {
			const base = p.process(exprBuilder), traversalList = [];
			for (; p.getMark().name !== "traversal_end";) traversalList.push(p.process(TRAVERSE_BUILDER));
			p.shift();
			let traversal = null;
			for (let i = traversalList.length - 1; i >= 0; i--) traversal = traversalList[i](traversal);
			if ((base.type === "Everything" || base.type === "Array" || base.type === "PipeFuncCall") && (traversal = traverseArray((val) => val, traversal)), traversal === null) throw new Error("BUG: unexpected empty traversal");
			return traversal.build(base);
		},
		this_attr(p) {
			const name = p.processString();
			return name === "null" ? {
				type: "Value",
				value: null
			} : name === "true" ? {
				type: "Value",
				value: !0
			} : name === "false" ? {
				type: "Value",
				value: !1
			} : {
				type: "AccessAttribute",
				name
			};
		},
		neg(p) {
			return {
				type: "Neg",
				base: p.process(exprBuilder)
			};
		},
		pos(p) {
			return {
				type: "Pos",
				base: p.process(exprBuilder)
			};
		},
		add(p) {
			return {
				type: "OpCall",
				op: "+",
				left: p.process(exprBuilder),
				right: p.process(exprBuilder)
			};
		},
		sub(p) {
			return {
				type: "OpCall",
				op: "-",
				left: p.process(exprBuilder),
				right: p.process(exprBuilder)
			};
		},
		mul(p) {
			return {
				type: "OpCall",
				op: "*",
				left: p.process(exprBuilder),
				right: p.process(exprBuilder)
			};
		},
		div(p) {
			return {
				type: "OpCall",
				op: "/",
				left: p.process(exprBuilder),
				right: p.process(exprBuilder)
			};
		},
		mod(p) {
			return {
				type: "OpCall",
				op: "%",
				left: p.process(exprBuilder),
				right: p.process(exprBuilder)
			};
		},
		pow(p) {
			return {
				type: "OpCall",
				op: "**",
				left: p.process(exprBuilder),
				right: p.process(exprBuilder)
			};
		},
		comp(p) {
			const left = p.process(exprBuilder);
			return {
				type: "OpCall",
				op: p.processString(),
				left,
				right: p.process(exprBuilder)
			};
		},
		in_range(p) {
			const base = p.process(exprBuilder), isInclusive = p.getMark().name === "inc_range";
			p.shift();
			return {
				type: "InRange",
				base,
				left: p.process(exprBuilder),
				right: p.process(exprBuilder),
				isInclusive
			};
		},
		str(p) {
			let value = "";
			loop: for (; p.hasMark();) {
				const mark = p.getMark();
				switch (mark.name) {
					case "str_end":
						value += p.processStringEnd();
						break loop;
					case "str_pause":
						value += p.processStringEnd();
						break;
					case "str_start":
						p.shift();
						break;
					case "single_escape": {
						const char = p.slice(1);
						p.shift(), value += ESCAPE_SEQUENCE[char];
						break;
					}
					case "unicode_hex":
						p.shift(), value += expandHex(p.processStringEnd());
						break;
					default: throw new Error(`unexpected mark: ${mark.name}`);
				}
			}
			return {
				type: "Value",
				value
			};
		},
		integer(p) {
			const strValue = p.processStringEnd();
			return {
				type: "Value",
				value: Number(strValue)
			};
		},
		float(p) {
			const strValue = p.processStringEnd();
			return {
				type: "Value",
				value: Number(strValue)
			};
		},
		sci(p) {
			const strValue = p.processStringEnd();
			return {
				type: "Value",
				value: Number(strValue)
			};
		},
		object(p) {
			const attributes = [];
			for (; p.getMark().name !== "object_end";) attributes.push(p.process(OBJECT_BUILDER));
			return p.shift(), {
				type: "Object",
				attributes
			};
		},
		array(p) {
			const elements = [];
			for (; p.getMark().name !== "array_end";) {
				let isSplat = !1;
				p.getMark().name === "array_splat" && (isSplat = !0, p.shift());
				const value = p.process(exprBuilder);
				elements.push({
					type: "ArrayElement",
					value,
					isSplat
				});
			}
			return p.shift(), {
				type: "Array",
				elements
			};
		},
		tuple(p) {
			const members = [];
			for (; p.getMark().name !== "tuple_end";) members.push(p.process(exprBuilder));
			return p.shift(), {
				type: "Tuple",
				members
			};
		},
		func_call(p) {
			let namespace = "global";
			p.getMark().name === "namespace" && (p.shift(), namespace = p.processString());
			const name = p.processString();
			if (namespace === "global" && name === "select") {
				const result = {
					type: "Select",
					alternatives: []
				};
				for (; p.getMark().name !== "func_args_end";) if (p.getMark().name === "pair") {
					if (result.fallback) throw new GroqQueryError("unexpected argument to select()");
					p.shift();
					const condition = p.process(exprBuilder), value = p.process(exprBuilder);
					result.alternatives.push({
						type: "SelectAlternative",
						condition,
						value
					});
				} else {
					if (result.fallback) throw new GroqQueryError("unexpected argument to select()");
					result.fallback = p.process(exprBuilder);
				}
				return p.shift(), result;
			}
			const args = [];
			for (; p.getMark().name !== "func_args_end";) argumentShouldBeSelector(namespace, name, args.length) ? args.push(p.process(SELECTOR_BUILDER)) : args.push(p.process(exprBuilder));
			if (p.shift(), namespace === "global" && (name === "before" || name === "after") && p.parseOptions.mode === "delta") return {
				type: "Context",
				key: name
			};
			if (namespace === "global" && name === "boost" && !p.allowBoost) throw new GroqQueryError("unexpected boost");
			const customFunction = p.customFunctions[`${namespace}::${name}`];
			if (customFunction !== void 0) {
				const FUNCTION_DECL_BUILDER = createFunctionDeclarationBuilder(parseOptions, recursion), funcDecl = new MarkProcessor(p.string, customFunction.marks, p.customFunctions, parseOptions).process(FUNCTION_DECL_BUILDER);
				return validateArity(name, funcDecl.params.length, args.length), mapCustomFunction(funcDecl.body, (body) => walkValidateCustomFunction(body, funcDecl.params), (parameterNode) => resolveFunctionParameter(parameterNode, funcDecl.params, args));
			}
			const funcs = namespaceRegistry[namespace];
			if (!funcs) throw new GroqQueryError(`Undefined namespace: ${namespace}`);
			const funcEntry = funcs[name];
			if (!funcEntry) throw new GroqQueryError(`Undefined function: ${name}`);
			if (funcEntry.arity !== void 0 && validateArity(name, funcEntry.arity, args.length), funcEntry.mode !== void 0 && funcEntry.mode !== p.parseOptions.mode) throw new GroqQueryError(`Undefined function: ${name}`);
			return {
				type: "FuncCall",
				namespace,
				name,
				args
			};
		},
		pipecall(p) {
			const base = p.process(exprBuilder);
			p.shift();
			let namespace = "global";
			if (p.getMark().name === "namespace" && (p.shift(), namespace = p.processString()), namespace !== "global") throw new GroqQueryError(`Undefined namespace: ${namespace}`);
			const name = p.processString(), args = [], oldAllowBoost = p.allowBoost;
			for (name === "score" && (p.allowBoost = !0);;) {
				const markName = p.getMark().name;
				if (markName === "func_args_end") break;
				if (name === "order") {
					if (markName === "asc") {
						p.shift(), args.push({
							type: "Asc",
							base: p.process(exprBuilder)
						});
						continue;
					} else if (markName === "desc") {
						p.shift(), args.push({
							type: "Desc",
							base: p.process(exprBuilder)
						});
						continue;
					}
				}
				args.push(p.process(exprBuilder));
			}
			p.shift(), p.allowBoost = oldAllowBoost;
			const funcEntry = pipeFunctionRegistry[name];
			if (!funcEntry) throw new GroqQueryError(`Undefined pipe function: ${name}`);
			return funcEntry.arity && validateArity(name, funcEntry.arity, args.length), {
				type: "PipeFuncCall",
				base,
				name,
				args
			};
		},
		pair() {
			throw new GroqQueryError("unexpected =>");
		},
		and(p) {
			return {
				type: "And",
				left: p.process(exprBuilder),
				right: p.process(exprBuilder)
			};
		},
		or(p) {
			return {
				type: "Or",
				left: p.process(exprBuilder),
				right: p.process(exprBuilder)
			};
		},
		not(p) {
			return {
				type: "Not",
				base: p.process(exprBuilder)
			};
		},
		asc() {
			throw new GroqQueryError("unexpected asc");
		},
		desc() {
			throw new GroqQueryError("unexpected desc");
		},
		param(p) {
			const name = p.processString();
			return p.parseOptions.params && p.parseOptions.params.hasOwnProperty(name) ? {
				type: "Value",
				value: p.parseOptions.params[name]
			} : {
				type: "Parameter",
				name
			};
		}
	}, OBJECT_BUILDER = {
		object_expr(p) {
			if (p.getMark().name === "pair") {
				p.shift();
				return {
					type: "ObjectConditionalSplat",
					condition: p.process(exprBuilder),
					value: p.process(exprBuilder)
				};
			}
			const value = p.process(exprBuilder);
			return {
				type: "ObjectAttributeValue",
				name: extractPropertyKey(value),
				value
			};
		},
		object_pair(p) {
			const name = p.process(exprBuilder);
			if (name.type !== "Value") throw new Error("name must be string");
			const value = p.process(exprBuilder);
			return {
				type: "ObjectAttributeValue",
				name: name.value,
				value
			};
		},
		object_splat(p) {
			return {
				type: "ObjectSplat",
				value: p.process(exprBuilder)
			};
		},
		object_splat_this() {
			return {
				type: "ObjectSplat",
				value: { type: "This" }
			};
		}
	}, TRAVERSE_BUILDER = {
		square_bracket(p) {
			const expr = p.process(exprBuilder), value = tryConstantEvaluate(expr);
			return value && value.type === "number" ? (right) => traverseElement((base) => ({
				type: "AccessElement",
				base,
				index: value.data
			}), right) : value && value.type === "string" ? (right) => traversePlain((base) => ({
				type: "AccessAttribute",
				base,
				name: value.data
			}), right) : (right) => traverseArray((base) => ({
				type: "Filter",
				base,
				expr
			}), right);
		},
		slice(p) {
			const isInclusive = p.getMark().name === "inc_range";
			p.shift();
			const left = p.process(exprBuilder), right = p.process(exprBuilder), leftValue = tryConstantEvaluate(left), rightValue = tryConstantEvaluate(right);
			if (!leftValue || !rightValue || leftValue.type !== "number" || rightValue.type !== "number") throw new GroqQueryError("slicing must use constant numbers");
			return (rhs) => traverseArray((base) => ({
				type: "Slice",
				base,
				left: leftValue.data,
				right: rightValue.data,
				isInclusive
			}), rhs);
		},
		projection(p) {
			const obj = p.process(exprBuilder);
			return (right) => traverseProjection((base) => ({
				type: "Projection",
				base,
				expr: obj
			}), right);
		},
		attr_access(p) {
			const name = p.processString();
			return (right) => traversePlain((base) => ({
				type: "AccessAttribute",
				base,
				name
			}), right);
		},
		deref(p) {
			let attr = null;
			p.getMark().name === "deref_attr" && (p.shift(), attr = p.processString());
			const wrap = (base) => attr ? {
				type: "AccessAttribute",
				base,
				name: attr
			} : base;
			return (right) => traversePlain((base) => wrap({
				type: "Deref",
				base
			}), right);
		},
		array_postfix() {
			return (right) => traverseArray((base) => ({
				type: "ArrayCoerce",
				base
			}), right);
		}
	}, SELECTOR_BUILDER = {
		group(p) {
			return p.process(SELECTOR_BUILDER);
		},
		everything() {
			throw new Error("Invalid selector syntax");
		},
		this() {
			throw new Error("Invalid selector syntax");
		},
		parent() {
			throw new Error("Invalid selector syntax");
		},
		dblparent() {
			throw new Error("Invalid selector syntax");
		},
		traverse(p) {
			let node = p.process(SELECTOR_BUILDER);
			for (; p.getMark().name !== "traversal_end";) if (p.getMark().name === "array_postfix") p.shift(), node = {
				type: "ArrayCoerce",
				base: node
			};
			else if (p.getMark().name === "square_bracket") {
				p.shift();
				const expr = p.process(exprBuilder), value = tryConstantEvaluate(expr);
				if (value && value.type === "number") throw new Error("Invalid array access expression");
				value && value.type === "string" ? node = {
					type: "AccessAttribute",
					base: node,
					name: value.data
				} : node = {
					type: "Filter",
					base: node,
					expr
				};
			} else if (p.getMark().name === "attr_access") {
				p.shift();
				const name = p.processString();
				node = {
					type: "AccessAttribute",
					base: node,
					name
				};
			} else if (p.getMark().name === "tuple" || p.getMark().name === "group") {
				const selector = p.process(SELECTOR_BUILDER);
				if (!isSelectorNested(selector)) throw new Error(`Unexpected result parsing nested selector: ${selector.type}`);
				node = {
					type: "SelectorNested",
					base: node,
					nested: selector
				};
			} else throw new Error("Invalid selector syntax");
			return p.shift(), node;
		},
		this_attr(p) {
			return {
				type: "AccessAttribute",
				name: p.processString()
			};
		},
		attr_access() {
			throw new Error("Invalid selector syntax");
		},
		neg() {
			throw new Error("Invalid selector syntax");
		},
		pos() {
			throw new Error("Invalid selector syntax");
		},
		add() {
			throw new Error("Invalid selector syntax");
		},
		sub() {
			throw new Error("Invalid selector syntax");
		},
		mul() {
			throw new Error("Invalid selector syntax");
		},
		div() {
			throw new Error("Invalid selector syntax");
		},
		mod() {
			throw new Error("Invalid selector syntax");
		},
		pow() {
			throw new Error("Invalid selector syntax");
		},
		comp() {
			throw new Error("Invalid selector syntax");
		},
		in_range() {
			throw new Error("Invalid selector syntax");
		},
		str() {
			throw new Error("Invalid selector syntax");
		},
		integer() {
			throw new Error("Invalid selector syntax");
		},
		float() {
			throw new Error("Invalid selector syntax");
		},
		sci() {
			throw new Error("Invalid selector syntax");
		},
		object() {
			throw new Error("Invalid selector syntax");
		},
		array() {
			throw new Error("Invalid selector syntax");
		},
		tuple(p) {
			const selectors = [];
			for (; p.getMark().name !== "tuple_end";) selectors.push(p.process(SELECTOR_BUILDER));
			return p.shift(), {
				type: "Tuple",
				members: selectors
			};
		},
		func_call(p, mark) {
			const func = exprBuilder.func_call(p, mark);
			if (func.name === "anywhere" && func.args.length === 1) return {
				type: "SelectorFuncCall",
				name: "anywhere",
				arg: func.args[0]
			};
			throw new Error("Invalid selector syntax");
		},
		pipecall() {
			throw new Error("Invalid selector syntax");
		},
		pair() {
			throw new Error("Invalid selector syntax");
		},
		and() {
			throw new Error("Invalid selector syntax");
		},
		or() {
			throw new Error("Invalid selector syntax");
		},
		not() {
			throw new Error("Invalid selector syntax");
		},
		asc() {
			throw new Error("Invalid selector syntax");
		},
		desc() {
			throw new Error("Invalid selector syntax");
		},
		param() {
			throw new Error("Invalid selector syntax");
		}
	};
	return exprBuilder;
}
function extractPropertyKey(node) {
	if (node.type === "AccessAttribute" && !node.base) return node.name;
	if (node.type === "PipeFuncCall" || node.type === "Deref" || node.type === "Map" || node.type === "FlatMap" || node.type === "Projection" || node.type === "Slice" || node.type === "Filter" || node.type === "AccessElement" || node.type === "ArrayCoerce" || node.type === "Group") return extractPropertyKey(node.base);
	throw new GroqQueryError(`Cannot determine property key for type: ${node.type}`);
}
function validateArity(name, arity, count) {
	if (typeof arity == "number") {
		if (count !== arity) throw new GroqQueryError(`Incorrect number of arguments to function ${name}(). Expected ${arity}, got ${count}.`);
	} else if (arity && !arity(count)) throw new GroqQueryError(`Incorrect number of arguments to function ${name}().`);
}
function resolveFunctionParameter(parameter, params, args) {
	if (parameter.type !== "Parameter") throw new GroqQueryError(`Expected parameter node, got ${parameter.type}`);
	const index = params.findIndex((p) => p.name === parameter.name);
	if (index === -1) throw new GroqQueryError(`Missing argument for parameter ${parameter.name} in function call`);
	return args[index];
}
function mapCustomFunction(body, bodyMapper, parameterMapper = (n) => n) {
	if (body.type === "Projection") {
		if (body.base.type === "Parameter") return {
			type: "Projection",
			base: parameterMapper(body.base),
			expr: bodyMapper(body.expr)
		};
		if (body.base.type === "Deref" && body.base.base.type === "Parameter") return {
			type: "Projection",
			base: {
				type: "Deref",
				base: parameterMapper(body.base.base)
			},
			expr: bodyMapper(body.expr)
		};
	}
	if (body.type === "Map" && body.base.type === "ArrayCoerce" && body.base.base.type === "Parameter") return {
		type: "Map",
		base: {
			type: "ArrayCoerce",
			base: parameterMapper(body.base.base)
		},
		expr: bodyMapper(body.expr)
	};
	throw new GroqQueryError(`Unexpected function body, must be a projection. Got "${body.type}"`);
}
function argumentShouldBeSelector(namespace, functionName, argCount) {
	return namespace == "diff" && argCount == 2 && ["changedAny", "changedOnly"].includes(functionName);
}
var GroqSyntaxError = class extends Error {
	/**
	* 0-based UTF-16 code unit offset from the start of the query string.
	*/
	position;
	/**
	* 1-based line number where the error occurred.
	*/
	line;
	/**
	* 1-based column number within the line, in UTF-16 code units.
	*/
	column;
	name = "GroqSyntaxError";
	constructor(position, query, detail) {
		super(`Syntax error in GROQ query at position ${position}${detail ? `: ${detail}` : ""}`), this.position = position;
		let line = 1, lineStart = 0;
		for (let i = 0; i < position && i < query.length; i++) query[i] === `
` && (line++, lineStart = i + 1);
		this.line = line, this.column = position - lineStart + 1;
	}
};
function parse(input, options = {}) {
	const result = parse$1(input);
	if (result.type === "error") throw new GroqSyntaxError(result.position, input, result.message);
	validateCustomFunctions(input, result.customFunctions, options);
	const processor = new MarkProcessor(input, result.marks, result.customFunctions, options), exprBuilder = createExpressionBuilder(options);
	return processor.process(exprBuilder);
}
function createFunctionDeclarationBuilder(parseOptions, recursion = /* @__PURE__ */ new Set()) {
	return { func_decl(p) {
		const namespace = p.processString(), name = p.processString(), functionId = `${namespace}::${name}`;
		if (recursion.has(functionId)) throw new GroqQueryError(`Recursive function definition detected for ${functionId}`);
		const exprBuilder = createExpressionBuilder(parseOptions, /* @__PURE__ */ new Set([...recursion, functionId])), params = [];
		for (; p.getMark().name !== "func_params_end";) {
			const param = p.process(exprBuilder);
			if (param.type !== "Parameter") throw new Error("expected parameter");
			params.push(param);
		}
		if (params.length !== 1) throw new GroqQueryError("Custom functions can only have one parameter");
		p.shift();
		return {
			type: "FuncDeclaration",
			namespace,
			name,
			params,
			body: p.process(exprBuilder)
		};
	} };
}
function validateCustomFunctions(query, customFunctions, parseOptions) {
	for (const functionId in customFunctions) {
		if (!customFunctions.hasOwnProperty(functionId)) continue;
		const customFunction = customFunctions[functionId], processor = new MarkProcessor(query, customFunction.marks, customFunctions, parseOptions), FUNCTION_DECL_BUILDER = createFunctionDeclarationBuilder(parseOptions), funcDecl = processor.process(FUNCTION_DECL_BUILDER);
		mapCustomFunction(funcDecl.body, (body) => walkValidateCustomFunction(body, funcDecl.params));
	}
}
var { compare } = new Intl.Collator("en");
var $trace$1 = (0, import_src.default)("typeEvaluator:scope:trace");
$trace$1.log = console.log.bind(console);
var $trace = (0, import_src.default)("typeEvaluator:evaluate:trace");
$trace.log = console.log.bind(console);
var $debug = (0, import_src.default)("typeEvaluator:evaluate:debug");
$debug.log = console.log.bind(console);
(0, import_src.default)("typeEvaluator:evaluate:warn");
//#endregion
export { evaluateQuery as n, parse as t };
