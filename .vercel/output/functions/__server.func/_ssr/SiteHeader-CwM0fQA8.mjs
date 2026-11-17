import { o as __toESM } from "../_runtime.mjs";
import { i as require_react } from "../_libs/dnd-kit__accessibility+react.mjs";
import { o as require_jsx_runtime } from "../_libs/dnd-kit__react+react.mjs";
import { n as Menu, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SiteHeader-CwM0fQA8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var navItems = [
	{
		label: "The Story",
		href: "#story"
	},
	{
		label: "The Origin",
		href: "#origin"
	},
	{
		label: "The Craft",
		href: "#craft"
	},
	{
		label: "The Artisans",
		href: "#artisans"
	},
	{
		label: "Authenticity",
		href: "#authenticity"
	},
	{
		label: "Support",
		href: "#support"
	}
];
function SiteHeader({ brandName = "Discovering Roots", navigation = navItems, previewMode = false }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [previewMode && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		role: "group",
		"aria-label": "Draft preview controls",
		className: "fixed inset-x-0 top-0 z-[60] flex h-10 items-center justify-center gap-3 whitespace-nowrap bg-slate px-4 text-center text-xs text-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Draft preview" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "/api/preview/disable",
			className: "font-semibold underline underline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
			children: "Return to published site"
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed inset-x-0 z-50 border-b border-border bg-paper/85 backdrop-blur-sm ${previewMode ? "top-10" : "top-0"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#top",
					className: "font-display text-xl tracking-wide",
					children: brandName
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Primary",
					className: "hidden lg:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "flex gap-8",
						children: navigation.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: n.href,
							className: "eyebrow !text-foreground/80 transition-colors hover:!text-foreground",
							children: n.label
						}) }, n.href))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "lg:hidden p-2",
					"aria-expanded": open,
					"aria-controls": "mobile-nav",
					"aria-label": open ? "Close menu" : "Open menu",
					onClick: () => setOpen((o) => !o),
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 20 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 20 })
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			id: "mobile-nav",
			"aria-label": "Mobile",
			className: "border-t border-border bg-paper lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex flex-col px-5 py-4",
				children: navigation.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: n.href,
					onClick: () => setOpen(false),
					className: "block py-3 font-display text-2xl",
					children: n.label
				}) }, n.href))
			})
		})]
	})] });
}
//#endregion
export { SiteHeader as t };
