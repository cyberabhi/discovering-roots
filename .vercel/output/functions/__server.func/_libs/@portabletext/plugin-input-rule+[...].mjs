import { A as getMarkState, B as isSelectionCollapsed, C as defineBehavior, D as getFocusBlock, E as raise, L as import_xstate_cjs, R as blockOffsetToSpanSelectionPoint, T as forward, U as import_xstate_react_cjs, a as getBlockTextBefore, h as useEditor, i as getBlockOffsets, o as getNextInlineObjects, rr as require_dist, s as getPreviousInlineObjects, w as effect } from "./editor+[...].mjs";
//#region node_modules/@portabletext/plugin-input-rule/dist/index.js
var import_dist = require_dist();
function defineInputRule(config) {
	return config;
}
function getInputRuleMatchLocation({ match, adjustIndexBy, snapshot, focusBlock, originalTextBefore }) {
	const [text, start, end] = match, adjustedIndex = start + adjustIndexBy, targetOffsets = {
		anchor: {
			path: focusBlock.path,
			offset: adjustedIndex
		},
		focus: {
			path: focusBlock.path,
			offset: adjustedIndex + end - start
		},
		backward: !1
	}, normalizedOffsets = {
		anchor: {
			path: focusBlock.path,
			offset: Math.min(targetOffsets.anchor.offset, originalTextBefore.length)
		},
		focus: {
			path: focusBlock.path,
			offset: Math.min(targetOffsets.focus.offset, originalTextBefore.length)
		}
	}, anchorBackwards = blockOffsetToSpanSelectionPoint({
		context: snapshot.context,
		blockOffset: normalizedOffsets.anchor,
		direction: "backward"
	}), focusForwards = blockOffsetToSpanSelectionPoint({
		context: snapshot.context,
		blockOffset: normalizedOffsets.focus,
		direction: "forward"
	});
	if (!anchorBackwards || !focusForwards) return;
	const selection = {
		anchor: anchorBackwards,
		focus: focusForwards
	}, inlineObjectsAfterMatch = getNextInlineObjects({
		...snapshot,
		context: {
			...snapshot.context,
			selection: {
				anchor: selection.anchor,
				focus: selection.anchor
			}
		}
	}), inlineObjectsBefore = getPreviousInlineObjects(snapshot);
	if (!inlineObjectsAfterMatch.some((inlineObjectAfter) => inlineObjectsBefore.some((inlineObjectBefore) => inlineObjectAfter.node._key === inlineObjectBefore.node._key))) return {
		text,
		selection,
		targetOffsets
	};
}
function defineInputRuleBehavior(config) {
	return defineBehavior({
		on: "insert.text",
		guard: ({ snapshot, event, dom }) => {
			if (!snapshot.context.selection || !isSelectionCollapsed(snapshot.context.selection)) return !1;
			const focusBlock = getFocusBlock(snapshot);
			if (!focusBlock) return !1;
			const originalTextBefore = getBlockTextBefore(snapshot);
			let textBefore = originalTextBefore;
			const originalNewText = textBefore + event.text;
			let newText = originalNewText;
			const foundMatches = [], foundActions = [];
			for (const rule of config.rules) {
				const matcher = new RegExp(rule.on.source, "gd");
				for (;;) {
					const ruleMatches = [...newText.matchAll(matcher)].flatMap((regExpMatch) => {
						if (regExpMatch.indices === void 0) return [];
						const match = regExpMatch.indices.at(0);
						if (!match) return [];
						const matchLocation = getInputRuleMatchLocation({
							match: [regExpMatch.at(0) ?? "", ...match],
							adjustIndexBy: originalNewText.length - newText.length,
							snapshot,
							focusBlock,
							originalTextBefore
						});
						if (!matchLocation) return [];
						if (matchLocation.targetOffsets.focus.offset <= originalTextBefore.length) return [];
						if (foundMatches.some((foundMatch) => foundMatch.targetOffsets.anchor.offset === matchLocation.targetOffsets.anchor.offset)) return [];
						const groupMatches = regExpMatch.indices.length > 1 ? regExpMatch.indices.slice(1).filter((indices) => indices !== void 0) : [];
						return [{
							text: matchLocation.text,
							selection: matchLocation.selection,
							targetOffsets: matchLocation.targetOffsets,
							groupMatches: groupMatches.flatMap((match2, index) => {
								return getInputRuleMatchLocation({
									match: [regExpMatch.at(index + 1) ?? "", ...match2],
									adjustIndexBy: originalNewText.length - newText.length,
									snapshot,
									focusBlock,
									originalTextBefore
								}) || [];
							})
						}];
					});
					if (ruleMatches.length > 0) {
						const guardResult = rule.guard?.({
							snapshot,
							event: {
								type: "custom.input rule",
								matches: ruleMatches,
								focusBlock,
								textBefore: originalTextBefore,
								textInserted: event.text
							},
							dom
						}) ?? !0;
						if (!guardResult) break;
						const actionSets = rule.actions.map((action) => action({
							snapshot,
							event: {
								type: "custom.input rule",
								matches: ruleMatches,
								focusBlock,
								textBefore: originalTextBefore,
								textInserted: event.text
							},
							dom
						}, guardResult));
						for (const actionSet of actionSets) for (const action of actionSet) foundActions.push(action);
						const matches = ruleMatches.flatMap((match) => match.groupMatches.length === 0 ? [match] : match.groupMatches);
						for (const match of matches) foundMatches.push(match), textBefore = newText.slice(0, match.targetOffsets.focus.offset ?? 0), newText = originalNewText.slice(match.targetOffsets.focus.offset ?? 0);
					} else break;
				}
			}
			return foundActions.length === 0 ? !1 : { actions: foundActions };
		},
		actions: [
			({ event }) => [forward(event)],
			(_, { actions }) => actions,
			({ snapshot }) => [effect(() => {
				const blockOffsets = getBlockOffsets(snapshot);
				config.onApply?.({ endOffsets: blockOffsets });
			})]
		]
	});
}
function InputRulePlugin(props) {
	const $ = (0, import_dist.c)(3), editor = useEditor();
	let t0;
	return $[0] !== editor || $[1] !== props.rules ? (t0 = { input: {
		editor,
		rules: props.rules
	} }, $[0] = editor, $[1] = props.rules, $[2] = t0) : t0 = $[2], (0, import_xstate_react_cjs.useActorRef)(inputRuleMachine, t0), null;
}
var inputRuleListenerCallback = ({ input, sendBack }) => {
	const unregister = input.editor.registerBehavior({ behavior: defineInputRuleBehavior({
		rules: input.rules,
		onApply: ({ endOffsets }) => {
			sendBack({
				type: "input rule raised",
				endOffsets
			});
		}
	}) });
	return () => {
		unregister();
	};
};
var deleteBackwardListenerCallback = ({ input, sendBack }) => input.editor.registerBehavior({ behavior: defineBehavior({
	on: "delete.backward",
	actions: [() => [raise({ type: "history.undo" }), effect(() => {
		sendBack({ type: "history.undo raised" });
	})]]
}) });
var selectionListenerCallback = ({ sendBack, input }) => input.editor.registerBehavior({ behavior: defineBehavior({
	on: "select",
	guard: ({ snapshot, event }) => ({ blockOffsets: getBlockOffsets({
		...snapshot,
		context: {
			...snapshot.context,
			selection: event.at
		}
	}) }),
	actions: [({ event }, { blockOffsets }) => [effect(() => {
		sendBack({
			type: "selection changed",
			blockOffsets
		});
	}), forward(event)]]
}) });
var inputRuleSetup = (0, import_xstate_cjs.setup)({
	types: {
		context: {},
		input: {},
		events: {}
	},
	actors: {
		"delete.backward listener": (0, import_xstate_cjs.fromCallback)(deleteBackwardListenerCallback),
		"input rule listener": (0, import_xstate_cjs.fromCallback)(inputRuleListenerCallback),
		"selection listener": (0, import_xstate_cjs.fromCallback)(selectionListenerCallback)
	},
	guards: { "block offset changed": ({ context, event }) => {
		if (event.type !== "selection changed") return !1;
		if (!event.blockOffsets || !context.endOffsets) return !0;
		const startChanged = context.endOffsets.start.path[0]._key !== event.blockOffsets.start.path[0]._key || context.endOffsets.start.offset !== event.blockOffsets.start.offset, endChanged = context.endOffsets.end.path[0]._key !== event.blockOffsets.end.path[0]._key || context.endOffsets.end.offset !== event.blockOffsets.end.offset;
		return startChanged || endChanged;
	} }
});
var assignEndOffsets = inputRuleSetup.assign({ endOffsets: ({ context, event }) => event.type === "input rule raised" ? event.endOffsets : context.endOffsets });
var inputRuleMachine = inputRuleSetup.createMachine({
	id: "input rule",
	context: ({ input }) => ({
		editor: input.editor,
		rules: input.rules,
		endOffsets: void 0
	}),
	initial: "idle",
	invoke: {
		src: "input rule listener",
		input: ({ context }) => ({
			editor: context.editor,
			rules: context.rules
		})
	},
	on: { "input rule raised": {
		target: ".input rule applied",
		actions: assignEndOffsets
	} },
	states: {
		idle: {},
		"input rule applied": {
			invoke: [{
				src: "delete.backward listener",
				input: ({ context }) => ({ editor: context.editor })
			}, {
				src: "selection listener",
				input: ({ context }) => ({ editor: context.editor })
			}],
			on: {
				"selection changed": {
					target: "idle",
					guard: "block offset changed"
				},
				"history.undo raised": { target: "idle" }
			}
		}
	}
});
function defineTextTransformRule(config) {
	return {
		on: config.on,
		guard: config.guard ?? (() => !0),
		actions: [({ snapshot, event }, guardResponse) => {
			const locations = event.matches.flatMap((match) => match.groupMatches.length === 0 ? [match] : match.groupMatches), newText = event.textBefore + event.textInserted;
			let textLengthDelta = 0;
			const actions = [];
			for (const location of locations.reverse()) {
				const text = config.transform({ location }, guardResponse);
				textLengthDelta = textLengthDelta - (text.length - (location.targetOffsets.focus.offset - location.targetOffsets.anchor.offset)), actions.push(raise({
					type: "select",
					at: location.targetOffsets
				})), actions.push(raise({
					type: "delete",
					at: location.targetOffsets
				})), actions.push(raise({
					type: "insert.child",
					child: {
						_type: snapshot.context.schema.span.name,
						text,
						marks: getMarkState({
							...snapshot,
							context: {
								...snapshot.context,
								selection: {
									anchor: location.selection.anchor,
									focus: {
										path: location.selection.focus.path,
										offset: Math.min(location.selection.focus.offset, event.textBefore.length)
									}
								}
							}
						})?.marks ?? []
					}
				}));
			}
			const endCaretPosition = {
				path: event.focusBlock.path,
				offset: newText.length - textLengthDelta
			};
			return [...actions, raise({
				type: "select",
				at: {
					anchor: endCaretPosition,
					focus: endCaretPosition
				}
			})];
		}]
	};
}
//#endregion
export { defineInputRule as n, defineTextTransformRule as r, InputRulePlugin as t };
