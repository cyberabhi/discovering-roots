import { o as __toESM, t as __commonJSMin } from "../../_runtime.mjs";
import { i as require_react } from "../dnd-kit__accessibility+react.mjs";
import { o as require_jsx_runtime } from "../dnd-kit__react+react.mjs";
//#region node_modules/react/cjs/react-compiler-runtime.production.js
/**
* @license React
* react-compiler-runtime.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_compiler_runtime_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var ReactSharedInternals = require_react().__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	exports.c = function(size) {
		return ReactSharedInternals.H.useMemoCache(size);
	};
}));
//#endregion
//#region node_modules/react/compiler-runtime.js
/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_compiler_runtime = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_compiler_runtime_production();
}));
//#endregion
//#region node_modules/@portabletext/toolkit/dist/index.js
var import_jsx_runtime = require_jsx_runtime();
var import_compiler_runtime = require_compiler_runtime();
/**
* Strict check to determine if node is a correctly formatted Portable Text span.
*
* @param node - Node to check
* @returns True if valid Portable Text span, otherwise false
*/
function isPortableTextSpan$1(node) {
	return node._type === "span" && "text" in node && typeof node.text == "string" && (node.marks === void 0 || Array.isArray(node.marks) && node.marks.every((mark) => typeof mark == "string"));
}
/**
* Strict check to determine if node is a correctly formatted Portable Text block.
*
* @param node - Node to check
* @returns True if valid Portable Text block, otherwise false
*/
function isPortableTextBlock$1(node) {
	return typeof node._type == "string" && node._type[0] !== "@" && (!("markDefs" in node) || !node.markDefs || Array.isArray(node.markDefs) && node.markDefs.every((def) => typeof def._key == "string")) && "children" in node && Array.isArray(node.children) && node.children.every((child) => typeof child == "object" && "_type" in child);
}
/**
* Strict check to determine if node is a correctly formatted portable list item block.
*
* @param block - Block to check
* @returns True if valid Portable Text list item block, otherwise false
*/
function isPortableTextListItemBlock$1(block) {
	return isPortableTextBlock$1(block) && "listItem" in block && typeof block.listItem == "string" && (block.level === void 0 || typeof block.level == "number");
}
/**
* Loose check to determine if block is a toolkit list node.
* Only checks `_type`, assumes correct structure.
*
* @param block - Block to check
* @returns True if toolkit list, otherwise false
*/
function isPortableTextToolkitList$1(block) {
	return block._type === "@list";
}
/**
* Loose check to determine if span is a toolkit span node.
* Only checks `_type`, assumes correct structure.
*
* @param span - Span to check
* @returns True if toolkit span, otherwise false
*/
function isPortableTextToolkitSpan$1(span) {
	return span._type === "@span";
}
/**
* Loose check to determine if node is a toolkit text node.
* Only checks `_type`, assumes correct structure.
*
* @param node - Node to check
* @returns True if toolkit text node, otherwise false
*/
function isPortableTextToolkitTextNode$1(node) {
	return node._type === "@text";
}
var knownDecorators$1 = [
	"strong",
	"em",
	"code",
	"underline",
	"strike-through"
];
/**
* Figures out the optimal order of marks, in order to minimize the amount of
* nesting/repeated elements in environments such as HTML. For instance, a naive
* implementation might render something like:
*
* ```html
* <strong>This block contains </strong>
* <strong><a href="https://some.url/">a link</a></strong>
* <strong> and some bolded text</strong>
* ```
*
* ...whereas an optimal order would be:
*
* ```html
* <strong>
*   This block contains <a href="https://some.url/">a link</a> and some bolded text
* </strong>
* ```
*
* This is particularly necessary for cases like links, where you don't want multiple
* individual links for different segments of the link text, even if parts of it are
* bolded/italicized.
*
* This function is meant to be used like: `block.children.map(sortMarksByOccurences)`,
* and is used internally in {@link buildMarksTree | `buildMarksTree()`}.
*
* The marks are sorted in the following order:
*
*  1. Marks that are shared amongst the most adjacent siblings
*  2. Non-default marks (links, custom metadata)
*  3. Decorators (bold, emphasis, code etc), in a predefined, preferred order
*
* @param span - The current span to sort
* @param index - The index of the current span within the block
* @param blockChildren - All children of the block being sorted
* @returns Array of decorators and annotations, sorted by "most adjacent siblings"
*/
function sortMarksByOccurences$1(span, index, blockChildren) {
	if (!isPortableTextSpan$1(span) || !span.marks || !span.marks.length) return [];
	let marks = span.marks.slice(), occurences = {};
	return marks.forEach((mark) => {
		occurences[mark] = 1;
		for (let siblingIndex = index + 1; siblingIndex < blockChildren.length; siblingIndex++) {
			let sibling = blockChildren[siblingIndex];
			if (sibling && isPortableTextSpan$1(sibling) && Array.isArray(sibling.marks) && sibling.marks.indexOf(mark) !== -1) occurences[mark]++;
			else break;
		}
	}), marks.sort((markA, markB) => sortMarks$1(occurences, markA, markB));
}
function sortMarks$1(occurences, markA, markB) {
	let aOccurences = occurences[markA], bOccurences = occurences[markB];
	if (aOccurences !== bOccurences) return bOccurences - aOccurences;
	let aKnownPos = knownDecorators$1.indexOf(markA), bKnownPos = knownDecorators$1.indexOf(markB);
	return aKnownPos === bKnownPos ? markA.localeCompare(markB) : aKnownPos - bKnownPos;
}
/**
* Takes a Portable Text block and returns a nested tree of nodes optimized for rendering
* in HTML-like environments where you want marks/annotations to be nested inside of eachother.
* For instance, a naive span-by-span rendering might yield:
*
* ```html
* <strong>This block contains </strong>
* <strong><a href="https://some.url/">a link</a></strong>
* <strong> and some bolded and </strong>
* <em><strong>italicized text</strong></em>
* ```
*
* ...whereas an optimal order would be:
*
* ```html
* <strong>
*   This block contains <a href="https://some.url/">a link</a>
*   and some bolded and <em>italicized text</em>
* </strong>
* ```
*
* Note that since "native" Portable Text spans cannot be nested,
* this function returns an array of "toolkit specific" types:
* {@link ToolkitTextNode | `@text`} and {@link ToolkitNestedPortableTextSpan | `@span` }.
*
* The toolkit-specific type can hold both types, as well as any arbitrary inline objects,
* creating an actual tree.
*
* @param block - The Portable Text block to create a tree of nodes from
* @returns Array of (potentially) nested spans, text nodes and/or arbitrary inline objects
*/
function buildMarksTree$1(block) {
	let { children } = block, markDefs = block.markDefs ?? [];
	if (!children || !children.length) return [];
	let sortedMarks = children.map(sortMarksByOccurences$1), rootNode = {
		_type: "@span",
		children: [],
		markType: "<unknown>"
	}, nodeStack = [rootNode];
	for (let i = 0; i < children.length; i++) {
		let span = children[i];
		if (!span) continue;
		let marksNeeded = sortedMarks[i] || [], pos = 1;
		if (nodeStack.length > 1) for (; pos < nodeStack.length; pos++) {
			let index = marksNeeded.indexOf(nodeStack[pos]?.markKey || "");
			if (index === -1) break;
			marksNeeded.splice(index, 1);
		}
		nodeStack = nodeStack.slice(0, pos);
		let currentNode = nodeStack[nodeStack.length - 1];
		if (currentNode) {
			for (let markKey of marksNeeded) {
				let markDef = markDefs?.find((def) => def._key === markKey), node = {
					_type: "@span",
					_key: span._key,
					children: [],
					markDef,
					markType: markDef ? markDef._type : markKey,
					markKey
				};
				currentNode.children.push(node), nodeStack.push(node), currentNode = node;
			}
			if (isPortableTextSpan$1(span)) {
				let lines = span.text.split("\n");
				for (let line = lines.length; line-- > 1;) lines.splice(line, 0, "\n");
				currentNode.children = currentNode.children.concat(lines.map((text) => ({
					_type: "@text",
					text
				})));
			} else currentNode.children = currentNode.children.concat(span);
		}
	}
	return rootNode.children;
}
function nestLists$1(blocks, mode) {
	let tree = [], currentList;
	for (let i = 0; i < blocks.length; i++) {
		let block = blocks[i];
		if (block) {
			if (!isPortableTextListItemBlock$1(block)) {
				tree.push(block), currentList = void 0;
				continue;
			}
			if (!currentList) {
				let nestedLists = createNestedLists(block, i, mode, 0);
				currentList = nestedLists.current, tree.push(nestedLists.root);
				continue;
			}
			if (blockMatchesList$1(block, currentList)) {
				currentList.children.push(block);
				continue;
			}
			if ((block.level || 1) > currentList.level) {
				let nestedLists = createNestedLists(block, i, mode, currentList.level);
				appendNestedList(currentList, nestedLists.root), currentList = nestedLists.current;
				continue;
			}
			if ((block.level || 1) < currentList.level) {
				let matchingBranch = tree[tree.length - 1], match = matchingBranch && findListMatching$1(matchingBranch, block);
				if (match) {
					currentList = match, currentList.children.push(block);
					continue;
				}
				let nestedLists = createNestedLists(block, i, mode, 0);
				currentList = nestedLists.current, tree.push(nestedLists.root);
				continue;
			}
			if (block.listItem !== currentList.listItem) {
				let matchingBranch = tree[tree.length - 1], match = matchingBranch && findListMatching$1(matchingBranch, { level: block.level || 1 });
				if (match && match.listItem === block.listItem) {
					currentList = match, currentList.children.push(block);
					continue;
				} else {
					let nestedLists = createNestedLists(block, i, mode, 0);
					currentList = nestedLists.current, tree.push(nestedLists.root);
					continue;
				}
			}
			console.warn("Unknown state encountered for block", block), tree.push(block);
		}
	}
	return tree;
}
function blockMatchesList$1(block, list) {
	return (block.level || 1) === list.level && block.listItem === list.listItem;
}
function listFromBlock$1(block, index, mode, level, children) {
	let suffix = level === (block.level || 1) ? "" : `-${level}`;
	return {
		_type: "@list",
		_key: `${block._key || `${index}`}-parent${suffix}`,
		mode,
		level,
		listItem: block.listItem,
		children
	};
}
function createNestedLists(block, index, mode, startLevel) {
	let level = block.level || 1, firstLevel = startLevel + 1, root = listFromBlock$1(block, index, mode, firstLevel, listChildren(block, index, mode, firstLevel, level)), current = root;
	for (let listLevel = firstLevel + 1; listLevel <= level; listLevel++) {
		let list = listFromBlock$1(block, index, mode, listLevel, listChildren(block, index, mode, listLevel, level));
		appendNestedList(current, list), current = list;
	}
	return {
		root,
		current
	};
}
function listChildren(block, index, mode, listLevel, targetLevel) {
	return listLevel === targetLevel ? [block] : mode === "html" ? [emptyListItemFromBlock(block, index, listLevel)] : [];
}
function emptyListItemFromBlock(block, index, level) {
	return {
		...block,
		_key: `${block._key || `${index}`}-placeholder-${level}`,
		children: [],
		level
	};
}
function appendNestedList(parentList, childList) {
	if (parentList.mode === "html" && childList.mode === "html") {
		let lastIndex = parentList.children.length - 1, lastListItem = parentList.children[lastIndex];
		if (!lastListItem) return;
		parentList.children[lastIndex] = {
			...lastListItem,
			children: [...lastListItem.children, childList]
		};
		return;
	}
	parentList.mode === "direct" && childList.mode === "direct" && parentList.children.push(childList);
}
function findListMatching$1(rootNode, matching) {
	let level = matching.level || 1, style = matching.listItem || "normal", filterOnType = typeof matching.listItem == "string";
	if (isPortableTextToolkitList$1(rootNode) && (rootNode.level || 1) === level && filterOnType && (rootNode.listItem || "normal") === style) return rootNode;
	if (!("children" in rootNode)) return;
	let node = rootNode.children[rootNode.children.length - 1];
	return node && !isPortableTextSpan$1(node) ? findListMatching$1(node, matching) : void 0;
}
/**
* Returns the plain-text representation of a
* {@link ToolkitNestedPortableTextSpan | toolkit-specific Portable Text span}.
*
* Useful if you have a subset of nested nodes and want the text from just those,
* instead of for the entire Portable Text block.
*
* @param span - Span node to get text from (Portable Text toolkit specific type)
* @returns The plain-text version of the span
*/
function spanToPlainText$1(span) {
	let text = "";
	return span.children.forEach((current) => {
		isPortableTextToolkitTextNode$1(current) ? text += current.text : isPortableTextToolkitSpan$1(current) && (text += spanToPlainText$1(current));
	}), text;
}
//#endregion
//#region node_modules/@portabletext/react/dist/index.js
function DefaultNumberList(t0) {
	let $ = (0, import_compiler_runtime.c)(2), { children } = t0, t1;
	return $[0] === children ? t1 = $[1] : (t1 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", { children }), $[0] = children, $[1] = t1), t1;
}
function DefaultBulletList(t0) {
	let $ = (0, import_compiler_runtime.c)(2), { children } = t0, t1;
	return $[0] === children ? t1 = $[1] : (t1 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children }), $[0] = children, $[1] = t1), t1;
}
function DefaultListItem$1(t0) {
	let $ = (0, import_compiler_runtime.c)(2), { children } = t0, t1;
	return $[0] === children ? t1 = $[1] : (t1 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children }), $[0] = children, $[1] = t1), t1;
}
var defaultLists$1 = {
	number: DefaultNumberList,
	bullet: DefaultBulletList
};
var underlineStyle$1 = { textDecoration: "underline" };
function DefaultEm(t0) {
	let $ = (0, import_compiler_runtime.c)(2), { children } = t0, t1;
	return $[0] === children ? t1 = $[1] : (t1 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children }), $[0] = children, $[1] = t1), t1;
}
function DefaultStrong(t0) {
	let $ = (0, import_compiler_runtime.c)(2), { children } = t0, t1;
	return $[0] === children ? t1 = $[1] : (t1 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children }), $[0] = children, $[1] = t1), t1;
}
function DefaultCode(t0) {
	let $ = (0, import_compiler_runtime.c)(2), { children } = t0, t1;
	return $[0] === children ? t1 = $[1] : (t1 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children }), $[0] = children, $[1] = t1), t1;
}
function DefaultUnderline(t0) {
	let $ = (0, import_compiler_runtime.c)(2), { children } = t0, t1;
	return $[0] === children ? t1 = $[1] : (t1 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		style: underlineStyle$1,
		children
	}), $[0] = children, $[1] = t1), t1;
}
function DefaultStrikeThrough(t0) {
	let $ = (0, import_compiler_runtime.c)(2), { children } = t0, t1;
	return $[0] === children ? t1 = $[1] : (t1 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("del", { children }), $[0] = children, $[1] = t1), t1;
}
function DefaultLink(t0) {
	let $ = (0, import_compiler_runtime.c)(3), { children, value } = t0, t1 = value?.href, t2;
	return $[0] !== children || $[1] !== t1 ? (t2 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: t1,
		children
	}), $[0] = children, $[1] = t1, $[2] = t2) : t2 = $[2], t2;
}
var defaultMarks$1 = {
	em: DefaultEm,
	strong: DefaultStrong,
	code: DefaultCode,
	underline: DefaultUnderline,
	"strike-through": DefaultStrikeThrough,
	link: DefaultLink
};
var getTemplate$1 = (type, prop) => `[@portabletext/react] Unknown ${type}, specify a component for it in the \`components.${prop}\` prop`;
var unknownTypeWarning$1 = (typeName) => getTemplate$1(`block type "${typeName}"`, "types");
var unknownMarkWarning$1 = (markType) => getTemplate$1(`mark type "${markType}"`, "marks");
var unknownBlockStyleWarning$1 = (blockStyle) => getTemplate$1(`block style "${blockStyle}"`, "block");
var unknownListStyleWarning$1 = (listStyle) => getTemplate$1(`list style "${listStyle}"`, "list");
var unknownListItemStyleWarning$1 = (listStyle) => getTemplate$1(`list item style "${listStyle}"`, "listItem");
function printWarning$1(message) {
	console.warn(message);
}
var hidden$1 = { display: "none" };
function DefaultUnknownType(t0) {
	let $ = (0, import_compiler_runtime.c)(5), { value, isInline } = t0, t1;
	$[0] === value._type ? t1 = $[1] : (t1 = unknownTypeWarning$1(value._type), $[0] = value._type, $[1] = t1);
	let warning = t1, t2;
	return $[2] !== isInline || $[3] !== warning ? (t2 = (0, import_jsx_runtime.jsx)(isInline ? "span" : "div", {
		style: hidden$1,
		children: warning
	}), $[2] = isInline, $[3] = warning, $[4] = t2) : t2 = $[4], t2;
}
function DefaultUnknownMark(t0) {
	let $ = (0, import_compiler_runtime.c)(3), { markType, children } = t0, t1 = `unknown__pt__mark__${markType}`, t2;
	return $[0] !== children || $[1] !== t1 ? (t2 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: t1,
		children
	}), $[0] = children, $[1] = t1, $[2] = t2) : t2 = $[2], t2;
}
function DefaultUnknownBlockStyle(t0) {
	let $ = (0, import_compiler_runtime.c)(2), { children } = t0, t1;
	return $[0] === children ? t1 = $[1] : (t1 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children }), $[0] = children, $[1] = t1), t1;
}
function DefaultUnknownList(t0) {
	let $ = (0, import_compiler_runtime.c)(2), { children } = t0, t1;
	return $[0] === children ? t1 = $[1] : (t1 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children }), $[0] = children, $[1] = t1), t1;
}
function DefaultUnknownListItem(t0) {
	let $ = (0, import_compiler_runtime.c)(2), { children } = t0, t1;
	return $[0] === children ? t1 = $[1] : (t1 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children }), $[0] = children, $[1] = t1), t1;
}
function DefaultHardBreak() {
	let $ = (0, import_compiler_runtime.c)(1), t0;
	return $[0] === Symbol.for("react.memo_cache_sentinel") ? (t0 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}), $[0] = t0) : t0 = $[0], t0;
}
function DefaultNormal(t0) {
	let $ = (0, import_compiler_runtime.c)(2), { children } = t0, t1;
	return $[0] === children ? t1 = $[1] : (t1 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children }), $[0] = children, $[1] = t1), t1;
}
function DefaultBlockquote(t0) {
	let $ = (0, import_compiler_runtime.c)(2), { children } = t0, t1;
	return $[0] === children ? t1 = $[1] : (t1 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", { children }), $[0] = children, $[1] = t1), t1;
}
function DefaultH1(t0) {
	let $ = (0, import_compiler_runtime.c)(2), { children } = t0, t1;
	return $[0] === children ? t1 = $[1] : (t1 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children }), $[0] = children, $[1] = t1), t1;
}
function DefaultH2(t0) {
	let $ = (0, import_compiler_runtime.c)(2), { children } = t0, t1;
	return $[0] === children ? t1 = $[1] : (t1 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children }), $[0] = children, $[1] = t1), t1;
}
function DefaultH3(t0) {
	let $ = (0, import_compiler_runtime.c)(2), { children } = t0, t1;
	return $[0] === children ? t1 = $[1] : (t1 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children }), $[0] = children, $[1] = t1), t1;
}
function DefaultH4(t0) {
	let $ = (0, import_compiler_runtime.c)(2), { children } = t0, t1;
	return $[0] === children ? t1 = $[1] : (t1 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children }), $[0] = children, $[1] = t1), t1;
}
function DefaultH5(t0) {
	let $ = (0, import_compiler_runtime.c)(2), { children } = t0, t1;
	return $[0] === children ? t1 = $[1] : (t1 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", { children }), $[0] = children, $[1] = t1), t1;
}
function DefaultH6(t0) {
	let $ = (0, import_compiler_runtime.c)(2), { children } = t0, t1;
	return $[0] === children ? t1 = $[1] : (t1 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h6", { children }), $[0] = children, $[1] = t1), t1;
}
var defaultComponents$1 = {
	types: {},
	block: {
		normal: DefaultNormal,
		blockquote: DefaultBlockquote,
		h1: DefaultH1,
		h2: DefaultH2,
		h3: DefaultH3,
		h4: DefaultH4,
		h5: DefaultH5,
		h6: DefaultH6
	},
	marks: defaultMarks$1,
	list: defaultLists$1,
	listItem: DefaultListItem$1,
	hardBreak: DefaultHardBreak,
	unknownType: DefaultUnknownType,
	unknownMark: DefaultUnknownMark,
	unknownList: DefaultUnknownList,
	unknownListItem: DefaultUnknownListItem,
	unknownBlockStyle: DefaultUnknownBlockStyle
};
function mergeComponents$1(parent, overrides) {
	let { block: _block, list: _list, listItem: _listItem, marks: _marks, types: _types, ...rest } = overrides;
	return {
		...parent,
		block: mergeDeeply$1(parent, overrides, "block"),
		list: mergeDeeply$1(parent, overrides, "list"),
		listItem: mergeDeeply$1(parent, overrides, "listItem"),
		marks: mergeDeeply$1(parent, overrides, "marks"),
		types: mergeDeeply$1(parent, overrides, "types"),
		...rest
	};
}
function mergeDeeply$1(parent, overrides, key) {
	let override = overrides[key], parentVal = parent[key];
	return typeof override == "function" || override && typeof parentVal == "function" ? override : override ? {
		...parentVal,
		...override
	} : parentVal;
}
function PortableText$1(t0) {
	let $ = (0, import_compiler_runtime.c)(10), { value: input, components: componentOverrides, listNestingMode, onMissingComponent: t1 } = t0, handleMissingComponent = (t1 === void 0 ? printWarning$1 : t1) || noop$1, blocks;
	if (Array.isArray(input)) blocks = input;
	else if (input == null) {
		let t2;
		$[0] === Symbol.for("react.memo_cache_sentinel") ? (t2 = [], $[0] = t2) : t2 = $[0], blocks = t2;
	} else {
		let t2;
		$[1] === input ? t2 = $[2] : (t2 = [input], $[1] = input, $[2] = t2), blocks = t2;
	}
	let t2;
	if ($[3] !== blocks || $[4] !== componentOverrides || $[5] !== handleMissingComponent || $[6] !== listNestingMode) {
		let nested = nestLists$1(blocks, listNestingMode || "html"), renderNode = getNodeRenderer$1(componentOverrides ? mergeComponents$1(defaultComponents$1, componentOverrides) : defaultComponents$1, handleMissingComponent);
		t2 = nested.map((node, index) => renderNode({
			node,
			index,
			isInline: !1,
			renderNode
		})), $[3] = blocks, $[4] = componentOverrides, $[5] = handleMissingComponent, $[6] = listNestingMode, $[7] = t2;
	} else t2 = $[7];
	let rendered = t2, t3;
	return $[8] === rendered ? t3 = $[9] : (t3 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: rendered }), $[8] = rendered, $[9] = t3), t3;
}
var getNodeRenderer$1 = (components, handleMissingComponent) => {
	function renderNode(options) {
		let { node, index, isInline } = options, key = node._key || `node-${index}`;
		return isPortableTextToolkitList$1(node) ? renderList(node, index, key) : isPortableTextListItemBlock$1(node) ? renderListItem(node, index, key) : isPortableTextToolkitSpan$1(node) ? renderSpan(node, index, key) : hasCustomComponentForNode(node) ? renderCustomBlock(node, index, key, isInline) : isPortableTextBlock$1(node) ? renderBlock(node, index, key, isInline) : isPortableTextToolkitTextNode$1(node) ? renderText(node, key) : renderUnknownType(node, index, key, isInline);
	}
	function hasCustomComponentForNode(node) {
		return node._type in components.types;
	}
	function renderListItem(node, index, key) {
		let tree = serializeBlock$1({
			node,
			index,
			isInline: !1,
			renderNode
		}), renderer = components.listItem, Li = (typeof renderer == "function" ? renderer : renderer[node.listItem]) || components.unknownListItem;
		if (Li === components.unknownListItem) {
			let style = node.listItem || "bullet";
			handleMissingComponent(unknownListItemStyleWarning$1(style), {
				type: style,
				nodeType: "listItemStyle"
			});
		}
		let children = tree.children;
		if (node.style && node.style !== "normal") {
			let { listItem: _listItem, ...blockNode } = node;
			children = renderNode({
				node: blockNode,
				index,
				isInline: !1,
				renderNode
			});
		}
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Li, {
			value: node,
			index,
			isInline: !1,
			renderNode,
			children
		}, key);
	}
	function renderList(node, index, key) {
		let children = node.children.map((child, childIndex) => renderNode({
			node: child._key ? child : {
				...child,
				_key: `li-${index}-${childIndex}`
			},
			index: childIndex,
			isInline: !1,
			renderNode
		})), component = components.list, List = (typeof component == "function" ? component : component[node.listItem]) || components.unknownList;
		if (List === components.unknownList) {
			let style = node.listItem || "bullet";
			handleMissingComponent(unknownListStyleWarning$1(style), {
				nodeType: "listStyle",
				type: style
			});
		}
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
			value: node,
			index,
			isInline: !1,
			renderNode,
			children
		}, key);
	}
	function renderSpan(node, _index, key) {
		let { markDef, markType, markKey } = node, Span = components.marks[markType] || components.unknownMark, children = node.children.map((child, childIndex) => renderNode({
			node: child,
			index: childIndex,
			isInline: !0,
			renderNode
		}));
		return Span === components.unknownMark && handleMissingComponent(unknownMarkWarning$1(markType), {
			nodeType: "mark",
			type: markType
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Span, {
			text: spanToPlainText$1(node),
			value: markDef,
			markType,
			markKey,
			renderNode,
			children
		}, key);
	}
	function renderBlock(node, index, key, isInline) {
		let { _key, ...props } = serializeBlock$1({
			node,
			index,
			isInline,
			renderNode
		}), style = props.node.style || "normal", Block = (typeof components.block == "function" ? components.block : components.block[style]) || components.unknownBlockStyle;
		return Block === components.unknownBlockStyle && handleMissingComponent(unknownBlockStyleWarning$1(style), {
			nodeType: "blockStyle",
			type: style
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
			...props,
			value: props.node,
			renderNode
		}, key);
	}
	function renderText(node, key) {
		if (node.text === "\n") {
			let HardBreak = components.hardBreak;
			return HardBreak ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HardBreak, {}, key) : "\n";
		}
		return node.text;
	}
	function renderUnknownType(node, index, key, isInline) {
		let nodeOptions = {
			value: node,
			isInline,
			index,
			renderNode
		};
		handleMissingComponent(unknownTypeWarning$1(node._type), {
			nodeType: "block",
			type: node._type
		});
		let UnknownType = components.unknownType;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UnknownType, { ...nodeOptions }, key);
	}
	function renderCustomBlock(node, index, key, isInline) {
		let nodeOptions = {
			value: node,
			isInline,
			index,
			renderNode
		}, Node = components.types[node._type];
		return Node ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Node, { ...nodeOptions }, key) : null;
	}
	return renderNode;
};
function serializeBlock$1(options) {
	let { node, index, isInline, renderNode } = options, children = buildMarksTree$1(node).map((child, i) => renderNode({
		node: child,
		isInline: !0,
		index: i,
		renderNode
	}));
	return {
		_key: node._key || `block-${index}`,
		children,
		index,
		isInline,
		node
	};
}
function noop$1() {}
//#endregion
//#region node_modules/sanity/node_modules/@portabletext/toolkit/dist/index.js
function isPortableTextSpan(node) {
	return node._type === "span" && "text" in node && typeof node.text == "string" && (node.marks === void 0 || Array.isArray(node.marks) && node.marks.every((mark) => typeof mark == "string"));
}
function isPortableTextBlock(node) {
	return typeof node._type == "string" && node._type[0] !== "@" && (!("markDefs" in node) || !node.markDefs || Array.isArray(node.markDefs) && node.markDefs.every((def) => typeof def._key == "string")) && "children" in node && Array.isArray(node.children) && node.children.every((child) => typeof child == "object" && "_type" in child);
}
function isPortableTextListItemBlock(block) {
	return isPortableTextBlock(block) && "listItem" in block && typeof block.listItem == "string" && (block.level === void 0 || typeof block.level == "number");
}
function isPortableTextToolkitList(block) {
	return block._type === "@list";
}
function isPortableTextToolkitSpan(span) {
	return span._type === "@span";
}
function isPortableTextToolkitTextNode(node) {
	return node._type === "@text";
}
var knownDecorators = [
	"strong",
	"em",
	"code",
	"underline",
	"strike-through"
];
function sortMarksByOccurences(span, index, blockChildren) {
	if (!isPortableTextSpan(span) || !span.marks || !span.marks.length) return [];
	let marks = span.marks.slice(), occurences = {};
	return marks.forEach((mark) => {
		occurences[mark] = 1;
		for (let siblingIndex = index + 1; siblingIndex < blockChildren.length; siblingIndex++) {
			let sibling = blockChildren[siblingIndex];
			if (sibling && isPortableTextSpan(sibling) && Array.isArray(sibling.marks) && sibling.marks.indexOf(mark) !== -1) occurences[mark]++;
			else break;
		}
	}), marks.sort((markA, markB) => sortMarks(occurences, markA, markB));
}
function sortMarks(occurences, markA, markB) {
	let aOccurences = occurences[markA], bOccurences = occurences[markB];
	if (aOccurences !== bOccurences) return bOccurences - aOccurences;
	let aKnownPos = knownDecorators.indexOf(markA), bKnownPos = knownDecorators.indexOf(markB);
	return aKnownPos === bKnownPos ? markA.localeCompare(markB) : aKnownPos - bKnownPos;
}
function buildMarksTree(block) {
	let { children } = block, markDefs = block.markDefs ?? [];
	if (!children || !children.length) return [];
	let sortedMarks = children.map(sortMarksByOccurences), rootNode = {
		_type: "@span",
		children: [],
		markType: "<unknown>"
	}, nodeStack = [rootNode];
	for (let i = 0; i < children.length; i++) {
		let span = children[i];
		if (!span) continue;
		let marksNeeded = sortedMarks[i] || [], pos = 1;
		if (nodeStack.length > 1) for (; pos < nodeStack.length; pos++) {
			let mark = nodeStack[pos]?.markKey || "", index = marksNeeded.indexOf(mark);
			if (index === -1) break;
			marksNeeded.splice(index, 1);
		}
		nodeStack = nodeStack.slice(0, pos);
		let currentNode = nodeStack[nodeStack.length - 1];
		if (currentNode) {
			for (let markKey of marksNeeded) {
				let markDef = markDefs?.find((def) => def._key === markKey), node = {
					_type: "@span",
					_key: span._key,
					children: [],
					markDef,
					markType: markDef ? markDef._type : markKey,
					markKey
				};
				currentNode.children.push(node), nodeStack.push(node), currentNode = node;
			}
			if (isPortableTextSpan(span)) {
				let lines = span.text.split("\n");
				for (let line = lines.length; line-- > 1;) lines.splice(line, 0, "\n");
				currentNode.children = currentNode.children.concat(lines.map((text) => ({
					_type: "@text",
					text
				})));
			} else currentNode.children = currentNode.children.concat(span);
		}
	}
	return rootNode.children;
}
function nestLists(blocks, mode) {
	let tree = [], currentList;
	for (let i = 0; i < blocks.length; i++) {
		let block = blocks[i];
		if (block) {
			if (!isPortableTextListItemBlock(block)) {
				tree.push(block), currentList = void 0;
				continue;
			}
			if (!currentList) {
				currentList = listFromBlock(block, i, mode), tree.push(currentList);
				continue;
			}
			if (blockMatchesList(block, currentList)) {
				currentList.children.push(block);
				continue;
			}
			if ((block.level || 1) > currentList.level) {
				let newList = listFromBlock(block, i, mode);
				if (mode === "html") {
					let lastListItem = currentList.children[currentList.children.length - 1], newLastChild = {
						...lastListItem,
						children: [...lastListItem.children, newList]
					};
					currentList.children[currentList.children.length - 1] = newLastChild;
				} else currentList.children.push(newList);
				currentList = newList;
				continue;
			}
			if ((block.level || 1) < currentList.level) {
				let matchingBranch = tree[tree.length - 1], match = matchingBranch && findListMatching(matchingBranch, block);
				if (match) {
					currentList = match, currentList.children.push(block);
					continue;
				}
				currentList = listFromBlock(block, i, mode), tree.push(currentList);
				continue;
			}
			if (block.listItem !== currentList.listItem) {
				let matchingBranch = tree[tree.length - 1], match = matchingBranch && findListMatching(matchingBranch, { level: block.level || 1 });
				if (match && match.listItem === block.listItem) {
					currentList = match, currentList.children.push(block);
					continue;
				} else {
					currentList = listFromBlock(block, i, mode), tree.push(currentList);
					continue;
				}
			}
			console.warn("Unknown state encountered for block", block), tree.push(block);
		}
	}
	return tree;
}
function blockMatchesList(block, list) {
	return (block.level || 1) === list.level && block.listItem === list.listItem;
}
function listFromBlock(block, index, mode) {
	return {
		_type: "@list",
		_key: `${block._key || `${index}`}-parent`,
		mode,
		level: block.level || 1,
		listItem: block.listItem,
		children: [block]
	};
}
function findListMatching(rootNode, matching) {
	let level = matching.level || 1, style = matching.listItem || "normal", filterOnType = typeof matching.listItem == "string";
	if (isPortableTextToolkitList(rootNode) && (rootNode.level || 1) === level && filterOnType && (rootNode.listItem || "normal") === style) return rootNode;
	if (!("children" in rootNode)) return;
	let node = rootNode.children[rootNode.children.length - 1];
	return node && !isPortableTextSpan(node) ? findListMatching(node, matching) : void 0;
}
function spanToPlainText(span) {
	let text = "";
	return span.children.forEach((current) => {
		isPortableTextToolkitTextNode(current) ? text += current.text : isPortableTextToolkitSpan(current) && (text += spanToPlainText(current));
	}), text;
}
var leadingSpace = /^\s/;
var trailingSpace = /\s$/;
function toPlainText(block) {
	let blocks = Array.isArray(block) ? block : [block], text = "";
	return blocks.forEach((current, index) => {
		if (!isPortableTextBlock(current)) return;
		let pad = !1;
		current.children.forEach((span) => {
			isPortableTextSpan(span) ? (text += pad && text && !trailingSpace.test(text) && !leadingSpace.test(span.text) ? " " : "", text += span.text, pad = !1) : pad = !0;
		}), index !== blocks.length - 1 && (text += "\n\n");
	}), text;
}
//#endregion
//#region node_modules/sanity/node_modules/@portabletext/react/dist/index.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var defaultLists = {
	number: ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", { children }),
	bullet: ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children })
};
var DefaultListItem = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children });
var link = ({ children, value }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
	href: value?.href,
	children
});
var underlineStyle = { textDecoration: "underline" };
var defaultMarks = {
	em: ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children }),
	strong: ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children }),
	code: ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children }),
	underline: ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		style: underlineStyle,
		children
	}),
	"strike-through": ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("del", { children }),
	link
};
var getTemplate = (type, prop) => `[@portabletext/react] Unknown ${type}, specify a component for it in the \`components.${prop}\` prop`;
var unknownTypeWarning = (typeName) => getTemplate(`block type "${typeName}"`, "types");
var unknownMarkWarning = (markType) => getTemplate(`mark type "${markType}"`, "marks");
var unknownBlockStyleWarning = (blockStyle) => getTemplate(`block style "${blockStyle}"`, "block");
var unknownListStyleWarning = (listStyle) => getTemplate(`list style "${listStyle}"`, "list");
var unknownListItemStyleWarning = (listStyle) => getTemplate(`list item style "${listStyle}"`, "listItem");
function printWarning(message) {
	console.warn(message);
}
var hidden = { display: "none" };
var defaultComponents = {
	types: {},
	block: {
		normal: ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children }),
		blockquote: ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", { children }),
		h1: ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children }),
		h2: ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children }),
		h3: ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children }),
		h4: ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children }),
		h5: ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", { children }),
		h6: ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h6", { children })
	},
	marks: defaultMarks,
	list: defaultLists,
	listItem: DefaultListItem,
	hardBreak: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
	unknownType: ({ value, isInline }) => {
		let warning = unknownTypeWarning(value._type);
		return (0, import_jsx_runtime.jsx)(isInline ? "span" : "div", {
			style: hidden,
			children: warning
		});
	},
	unknownMark: ({ markType, children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `unknown__pt__mark__${markType}`,
		children
	}),
	unknownList: ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children }),
	unknownListItem: ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children }),
	unknownBlockStyle: ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children })
};
function mergeComponents(parent, overrides) {
	let { block: _block, list: _list, listItem: _listItem, marks: _marks, types: _types, ...rest } = overrides;
	return {
		...parent,
		block: mergeDeeply(parent, overrides, "block"),
		list: mergeDeeply(parent, overrides, "list"),
		listItem: mergeDeeply(parent, overrides, "listItem"),
		marks: mergeDeeply(parent, overrides, "marks"),
		types: mergeDeeply(parent, overrides, "types"),
		...rest
	};
}
function mergeDeeply(parent, overrides, key) {
	let override = overrides[key], parentVal = parent[key];
	return typeof override == "function" || override && typeof parentVal == "function" ? override : override ? {
		...parentVal,
		...override
	} : parentVal;
}
function PortableText({ value: input, components: componentOverrides, listNestingMode, onMissingComponent: missingComponentHandler = printWarning }) {
	let handleMissingComponent = missingComponentHandler || noop, blocks;
	blocks = Array.isArray(input) ? input : input == null ? [] : [input];
	let nested = nestLists(blocks, listNestingMode || "html"), components = (0, import_react.useMemo)(() => componentOverrides ? mergeComponents(defaultComponents, componentOverrides) : defaultComponents, [componentOverrides]), renderNode = (0, import_react.useMemo)(() => getNodeRenderer(components, handleMissingComponent), [components, handleMissingComponent]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: nested.map((node, index) => renderNode({
		node,
		index,
		isInline: !1,
		renderNode
	})) });
}
var getNodeRenderer = (components, handleMissingComponent) => {
	function renderNode(options) {
		let { node, index, isInline } = options, key = node._key || `node-${index}`;
		return isPortableTextToolkitList(node) ? renderList(node, index, key) : isPortableTextListItemBlock(node) ? renderListItem(node, index, key) : isPortableTextToolkitSpan(node) ? renderSpan(node, index, key) : hasCustomComponentForNode(node) ? renderCustomBlock(node, index, key, isInline) : isPortableTextBlock(node) ? renderBlock(node, index, key, isInline) : isPortableTextToolkitTextNode(node) ? renderText(node, key) : renderUnknownType(node, index, key, isInline);
	}
	function hasCustomComponentForNode(node) {
		return node._type in components.types;
	}
	function renderListItem(node, index, key) {
		let tree = serializeBlock({
			node,
			index,
			isInline: !1,
			renderNode
		}), renderer = components.listItem, Li = (typeof renderer == "function" ? renderer : renderer[node.listItem]) || components.unknownListItem;
		if (Li === components.unknownListItem) {
			let style = node.listItem || "bullet";
			handleMissingComponent(unknownListItemStyleWarning(style), {
				type: style,
				nodeType: "listItemStyle"
			});
		}
		let children = tree.children;
		if (node.style && node.style !== "normal") {
			let { listItem: _listItem, ...blockNode } = node;
			children = renderNode({
				node: blockNode,
				index,
				isInline: !1,
				renderNode
			});
		}
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Li, {
			value: node,
			index,
			isInline: !1,
			renderNode,
			children
		}, key);
	}
	function renderList(node, index, key) {
		let children = node.children.map((child, childIndex) => renderNode({
			node: child._key ? child : {
				...child,
				_key: `li-${index}-${childIndex}`
			},
			index: childIndex,
			isInline: !1,
			renderNode
		})), component = components.list, List = (typeof component == "function" ? component : component[node.listItem]) || components.unknownList;
		if (List === components.unknownList) {
			let style = node.listItem || "bullet";
			handleMissingComponent(unknownListStyleWarning(style), {
				nodeType: "listStyle",
				type: style
			});
		}
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
			value: node,
			index,
			isInline: !1,
			renderNode,
			children
		}, key);
	}
	function renderSpan(node, _index, key) {
		let { markDef, markType, markKey } = node, Span = components.marks[markType] || components.unknownMark, children = node.children.map((child, childIndex) => renderNode({
			node: child,
			index: childIndex,
			isInline: !0,
			renderNode
		}));
		return Span === components.unknownMark && handleMissingComponent(unknownMarkWarning(markType), {
			nodeType: "mark",
			type: markType
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Span, {
			text: spanToPlainText(node),
			value: markDef,
			markType,
			markKey,
			renderNode,
			children
		}, key);
	}
	function renderBlock(node, index, key, isInline) {
		let { _key, ...props } = serializeBlock({
			node,
			index,
			isInline,
			renderNode
		}), style = props.node.style || "normal", Block = (typeof components.block == "function" ? components.block : components.block[style]) || components.unknownBlockStyle;
		return Block === components.unknownBlockStyle && handleMissingComponent(unknownBlockStyleWarning(style), {
			nodeType: "blockStyle",
			type: style
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
			...props,
			value: props.node,
			renderNode
		}, key);
	}
	function renderText(node, key) {
		if (node.text === "\n") {
			let HardBreak = components.hardBreak;
			return HardBreak ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HardBreak, {}, key) : "\n";
		}
		return node.text;
	}
	function renderUnknownType(node, index, key, isInline) {
		let nodeOptions = {
			value: node,
			isInline,
			index,
			renderNode
		};
		handleMissingComponent(unknownTypeWarning(node._type), {
			nodeType: "block",
			type: node._type
		});
		let UnknownType = components.unknownType;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UnknownType, { ...nodeOptions }, key);
	}
	function renderCustomBlock(node, index, key, isInline) {
		let nodeOptions = {
			value: node,
			isInline,
			index,
			renderNode
		}, Node = components.types[node._type];
		return Node ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Node, { ...nodeOptions }, key) : null;
	}
	return renderNode;
};
function serializeBlock(options) {
	let { node, index, isInline, renderNode } = options, children = buildMarksTree(node).map((child, i) => renderNode({
		node: child,
		isInline: !0,
		index: i,
		renderNode
	}));
	return {
		_key: node._key || `block-${index}`,
		children,
		index,
		isInline,
		node
	};
}
function noop() {}
//#endregion
export { PortableText$1 as i, isPortableTextBlock as n, toPlainText as r, PortableText as t };
