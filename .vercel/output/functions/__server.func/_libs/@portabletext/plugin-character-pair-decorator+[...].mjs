import { C as defineBehavior, E as raise, L as import_xstate_cjs, N as getSelectionStartPoint, T as forward, U as import_xstate_react_cjs, V as spanSelectionPointToBlockOffset, a as getBlockTextBefore, h as useEditor, j as getPreviousInlineObject, k as getFocusTextBlock, n as childSelectionPointToBlockOffset, rr as require_dist, t as blockOffsetsToSelection, w as effect } from "./editor+[...].mjs";
//#region node_modules/remeda/dist/dataLastImplementation-Bv4VSrOR.js
/**
* Builds the data-last function for a `dataFirst` implementation that takes
* one argument after the data.
*/
var dataLastImplementation1 = (dataFirst, argument) => (data) => dataFirst(data, argument);
//#endregion
//#region node_modules/remeda/dist/purryByArity-Cy9fRh2p.js
/**
* `purry` for a data-first implementation that takes one argument after the
* data. The arguments reach `dataFirst` as parameters, with no array built or
* spread, and `arguments.length` picks the call style because `undefined` is
* a valid argument.
*
* @param argumentsLength - The utility's `arguments.length`.
* @example
*    export function add(
*      valueOrAddend: bigint | number,
*      addend?: bigint | number,
*    ): unknown {
*      return purry2(addImplementation, arguments.length, valueOrAddend, addend);
*    }
* @see purryWithLazy2
*/
var purry2 = (dataFirst, argumentsLength, dataOrArgument, argument) => argumentsLength >= 2 ? dataFirst(dataOrArgument, argument) : dataLastImplementation1(dataFirst, dataOrArgument);
//#endregion
//#region node_modules/remeda/dist/isDeepEqual.js
function isDeepEqual(dataOrOther, other) {
	return purry2(isDeepEqualImplementation, arguments.length, dataOrOther, other);
}
function isDeepEqualImplementation(data, other) {
	if (data === other || Object.is(data, other)) return true;
	if (typeof data !== "object" || data === null || typeof other !== "object" || other === null || !isComparablePrototype(data, other)) return false;
	if (Array.isArray(data)) return isDeepEqualArrays(data, other);
	if (data instanceof Map) return isDeepEqualMaps(data, other);
	if (data instanceof Set) return isDeepEqualSets(data, other);
	if (data instanceof Date) return data.getTime() === other.getTime();
	if (data instanceof RegExp) return data.toString() === other.toString();
	if (Object.keys(data).length !== Object.keys(other).length) return false;
	for (const entry of Object.entries(data)) {
		const key = entry[0];
		if (!Object.hasOwn(other, key) || !isDeepEqualImplementation(entry[1], other[key])) return false;
	}
	return true;
}
function isComparablePrototype(data, other) {
	const dataPrototype = Object.getPrototypeOf(data);
	const otherPrototype = Object.getPrototypeOf(other);
	if (dataPrototype === otherPrototype) return true;
	if (dataPrototype === null) return otherPrototype === Object.prototype;
	return dataPrototype === Object.prototype && otherPrototype === null;
}
function isDeepEqualArrays(data, other) {
	if (data.length !== other.length) return false;
	let index = 0;
	for (const item of data) {
		if (!isDeepEqualImplementation(item, other[index])) return false;
		index += 1;
	}
	return true;
}
function isDeepEqualMaps(data, other) {
	if (data.size !== other.size) return false;
	for (const entry of data) {
		const key = entry[0];
		if (!other.has(key) || !isDeepEqualImplementation(entry[1], other.get(key))) return false;
	}
	return true;
}
function isDeepEqualSets(data, other) {
	if (data.size !== other.size) return false;
	const otherCopy = [...other];
	for (const dataItem of data) {
		const matchIndex = otherCopy.findIndex((otherItem) => isDeepEqualImplementation(dataItem, otherItem));
		if (matchIndex === -1) return false;
		otherCopy.splice(matchIndex, 1);
	}
	return true;
}
//#endregion
//#region node_modules/@portabletext/plugin-character-pair-decorator/dist/index.js
var import_dist = require_dist();
function createCharacterPairRegex(char, amount) {
	return `${`(?<!\\${char})`}${`\\${char}`.repeat(Math.max(amount, 1))}(?!\\s)${`([^${char}\\n]+?)`}(?<!\\s)${`\\${char}`.repeat(Math.max(amount, 1))}${`(?!\\${char})`}`;
}
function createCharacterPairDecoratorBehavior(config) {
	config.pair.amount < 1 && console.warn("The amount of characters in the pair should be greater than 0");
	const pairRegex = createCharacterPairRegex(config.pair.char, config.pair.amount), regEx = new RegExp(`(${pairRegex})$`);
	return defineBehavior({
		on: "insert.text",
		guard: ({ snapshot, event }) => {
			if (config.pair.amount < 1) return !1;
			const decorator = config.decorator({
				context: { schema: snapshot.context.schema },
				schema: snapshot.context.schema
			});
			if (decorator === void 0) return !1;
			const focusTextBlock = getFocusTextBlock(snapshot), selectionStartPoint = getSelectionStartPoint(snapshot), selectionStartOffset = selectionStartPoint ? spanSelectionPointToBlockOffset({
				context: snapshot.context,
				selectionPoint: selectionStartPoint
			}) : void 0;
			if (!focusTextBlock || !selectionStartOffset) return !1;
			const newText = `${getBlockTextBefore(snapshot)}${event.text}`, textToDecorate = newText.match(regEx)?.at(0);
			if (textToDecorate === void 0) return !1;
			const prefixOffsets = {
				anchor: {
					path: focusTextBlock.path,
					offset: newText.length - textToDecorate.length
				},
				focus: {
					path: focusTextBlock.path,
					offset: newText.length - textToDecorate.length + config.pair.char.length * config.pair.amount
				}
			}, suffixOffsets = {
				anchor: {
					path: focusTextBlock.path,
					offset: selectionStartOffset.offset + event.text.length - config.pair.char.length * config.pair.amount
				},
				focus: {
					path: focusTextBlock.path,
					offset: selectionStartOffset.offset + event.text.length
				}
			};
			if (prefixOffsets.focus.offset - prefixOffsets.anchor.offset > 1) {
				const prefixSelection = blockOffsetsToSelection({
					context: snapshot.context,
					offsets: prefixOffsets
				}), inlineObjectBeforePrefixFocus = getPreviousInlineObject({
					...snapshot,
					context: {
						...snapshot.context,
						selection: prefixSelection ? {
							anchor: prefixSelection.focus,
							focus: prefixSelection.focus
						} : null
					}
				}), inlineObjectBeforePrefixFocusOffset = inlineObjectBeforePrefixFocus ? childSelectionPointToBlockOffset({
					context: snapshot.context,
					selectionPoint: {
						path: inlineObjectBeforePrefixFocus.path,
						offset: 0
					}
				}) : void 0;
				if (inlineObjectBeforePrefixFocusOffset && inlineObjectBeforePrefixFocusOffset.offset > prefixOffsets.anchor.offset && inlineObjectBeforePrefixFocusOffset.offset < prefixOffsets.focus.offset) return !1;
			}
			if (suffixOffsets.focus.offset - suffixOffsets.anchor.offset > 1) {
				const previousInlineObject = getPreviousInlineObject(snapshot), previousInlineObjectOffset = previousInlineObject ? childSelectionPointToBlockOffset({
					context: snapshot.context,
					selectionPoint: {
						path: previousInlineObject.path,
						offset: 0
					}
				}) : void 0;
				if (previousInlineObjectOffset && previousInlineObjectOffset.offset > suffixOffsets.anchor.offset && previousInlineObjectOffset.offset < suffixOffsets.focus.offset) return !1;
			}
			return {
				prefixOffsets,
				suffixOffsets,
				decorator
			};
		},
		actions: [({ event }) => [forward(event)], (_, { prefixOffsets, suffixOffsets, decorator }) => [
			raise({
				type: "decorator.add",
				decorator,
				at: {
					anchor: prefixOffsets.focus,
					focus: suffixOffsets.anchor
				}
			}),
			raise({
				type: "delete.text",
				at: suffixOffsets
			}),
			raise({
				type: "delete.text",
				at: prefixOffsets
			}),
			raise({
				type: "decorator.remove",
				decorator
			}),
			effect(() => {
				config.onDecorate({
					...suffixOffsets.anchor,
					offset: suffixOffsets.anchor.offset - (prefixOffsets.focus.offset - prefixOffsets.anchor.offset)
				});
			})
		]]
	});
}
function CharacterPairDecoratorPlugin(props) {
	const $ = (0, import_dist.c)(4), editor = useEditor();
	let t0;
	return $[0] !== editor || $[1] !== props.decorator || $[2] !== props.pair ? (t0 = { input: {
		editor,
		decorator: props.decorator,
		pair: props.pair
	} }, $[0] = editor, $[1] = props.decorator, $[2] = props.pair, $[3] = t0) : t0 = $[3], (0, import_xstate_react_cjs.useActorRef)(decoratorPairMachine, t0), null;
}
var decorateListener = ({ sendBack, input }) => input.editor.registerBehavior({ behavior: createCharacterPairDecoratorBehavior({
	decorator: input.decorator,
	pair: input.pair,
	onDecorate: (offset) => {
		sendBack({
			type: "decorator.add",
			blockOffset: offset
		});
	}
}) });
var selectionListenerCallback = ({ sendBack, input }) => input.editor.registerBehavior({ behavior: defineBehavior({
	on: "select",
	guard: ({ snapshot, event }) => {
		if (!event.at) return { blockOffsets: void 0 };
		const anchor = spanSelectionPointToBlockOffset({
			context: snapshot.context,
			selectionPoint: event.at.anchor
		}), focus = spanSelectionPointToBlockOffset({
			context: snapshot.context,
			selectionPoint: event.at.focus
		});
		return !anchor || !focus ? { blockOffsets: void 0 } : { blockOffsets: {
			anchor,
			focus
		} };
	},
	actions: [({ event }, { blockOffsets }) => [{
		type: "effect",
		effect: () => {
			sendBack({
				type: "selection",
				blockOffsets
			});
		}
	}, forward(event)]]
}) });
var deleteBackwardListenerCallback = ({ sendBack, input }) => input.editor.registerBehavior({ behavior: defineBehavior({
	on: "delete.backward",
	actions: [() => [raise({ type: "history.undo" }), effect(() => {
		sendBack({ type: "delete.backward" });
	})]]
}) });
var decoratorPairMachine = (0, import_xstate_cjs.setup)({
	types: {
		context: {},
		input: {},
		events: {}
	},
	actors: {
		"decorate listener": (0, import_xstate_cjs.fromCallback)(decorateListener),
		"delete.backward listener": (0, import_xstate_cjs.fromCallback)(deleteBackwardListenerCallback),
		"selection listener": (0, import_xstate_cjs.fromCallback)(selectionListenerCallback)
	}
}).createMachine({
	id: "decorator pair",
	context: ({ input }) => ({
		decorator: input.decorator,
		editor: input.editor,
		pair: input.pair
	}),
	initial: "idle",
	states: {
		idle: {
			invoke: [{
				src: "decorate listener",
				input: ({ context }) => ({
					decorator: context.decorator,
					editor: context.editor,
					pair: context.pair
				})
			}],
			on: { "decorator.add": {
				target: "decorator added",
				actions: (0, import_xstate_cjs.assign)({ offsetAfterDecorator: ({ event }) => event.blockOffset })
			} }
		},
		"decorator added": {
			exit: [(0, import_xstate_cjs.assign)({ offsetAfterDecorator: void 0 })],
			invoke: [{
				src: "selection listener",
				input: ({ context }) => ({ editor: context.editor })
			}, {
				src: "delete.backward listener",
				input: ({ context }) => ({ editor: context.editor })
			}],
			on: {
				selection: {
					target: "idle",
					guard: ({ context, event }) => !isDeepEqual({
						anchor: context.offsetAfterDecorator,
						focus: context.offsetAfterDecorator
					}, event.blockOffsets)
				},
				"delete.backward": { target: "idle" }
			}
		}
	}
});
//#endregion
export { CharacterPairDecoratorPlugin as t };
