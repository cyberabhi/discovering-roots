import { o as __toESM } from "../_runtime.mjs";
import { i as require_react } from "./dnd-kit__accessibility+react.mjs";
import { C as defineBehavior, E as raise, I as isSelectionExpanded$1, h as useEditor, k as getFocusTextBlock, r as mergeTextBlocks, rr as require_dist } from "./@portabletext/editor+[...].mjs";
import { u as isTextBlock } from "./@portabletext/block-tools+[...].mjs";
//#region node_modules/@portabletext/plugin-one-line/dist/index.js
var import_dist = require_dist();
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var oneLineBehaviors = [
	defineBehavior({
		on: "insert.break",
		guard: ({ snapshot }) => snapshot.context.selection && isSelectionExpanded$1(snapshot) ? { selection: snapshot.context.selection } : !1,
		actions: [(_, { selection }) => [raise({
			type: "delete",
			at: selection
		})]]
	}),
	defineBehavior({
		on: "insert.break",
		actions: []
	}),
	defineBehavior({
		on: "insert.block",
		guard: ({ event }) => event.placement === "before" || event.placement === "after",
		actions: []
	}),
	defineBehavior({
		on: "insert.block",
		guard: ({ snapshot, event }) => !getFocusTextBlock(snapshot) || !isTextBlock(snapshot.context, event.block) ? !1 : event.placement !== "auto" || event.select !== "end",
		actions: [({ event }) => [raise({
			type: "insert.block",
			block: event.block,
			placement: "auto",
			select: "end"
		})]]
	}),
	defineBehavior({
		on: "insert.block",
		guard: ({ snapshot, event }) => getFocusTextBlock(snapshot) ? !isTextBlock(snapshot.context, event.block) : !0,
		actions: []
	}),
	defineBehavior({
		on: "insert.blocks",
		guard: ({ snapshot, event }) => {
			const textBlocks = event.blocks.filter((block) => isTextBlock(snapshot.context, block));
			return textBlocks.length === 0 ? !1 : textBlocks.reduce((targetBlock, incomingBlock) => mergeTextBlocks({
				context: snapshot.context,
				targetBlock,
				incomingBlock
			}));
		},
		actions: [(_, block) => [raise({
			type: "insert.block",
			block,
			placement: "auto"
		})]]
	}),
	defineBehavior({
		on: "insert.blocks",
		actions: []
	})
];
function OneLinePlugin() {
	const $ = (0, import_dist.c)(3), editor = useEditor();
	let t0, t1;
	return $[0] !== editor ? (t0 = () => {
		const unregisterBehaviors = oneLineBehaviors.map((behavior) => editor.registerBehavior({ behavior }));
		return () => {
			for (const unregisterBehavior of unregisterBehaviors) unregisterBehavior();
		};
	}, t1 = [editor], $[0] = editor, $[1] = t0, $[2] = t1) : (t0 = $[1], t1 = $[2]), (0, import_react.useEffect)(t0, t1), null;
}
//#endregion
export { OneLinePlugin as t };
