import { o as __toESM } from "../_runtime.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as require_react } from "../_libs/dnd-kit__accessibility+react.mjs";
import { o as require_jsx_runtime } from "../_libs/dnd-kit__react+react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/EmbeddedStudio-cJitb8QV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var StudioGuidanceList = [
	"The deployment is serving the public site, but the Studio is not connected to a Sanity project yet.",
	"Invite an authorized Sanity editor to the project and confirm the dataset role before trying to sign in.",
	"Add the exact deployment origins to Sanity Manage → CORS, with credentialed requests enabled.",
	"Keep this route private; do not disable authentication, bypass CORS, or expose browser write credentials."
];
function StudioNotConfigured() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-stone-50 px-6 py-12 text-slate-900",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 text-xs font-medium uppercase tracking-[0.2em] text-slate-500",
					children: "Editorial studio"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-3xl font-semibold tracking-tight text-slate-950",
					children: "Studio configuration pending"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-base leading-7 text-slate-700",
					children: "This deployment is ready to serve the public website, but the private Studio is not yet connected to a configured Sanity project."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-5 list-disc space-y-2 pl-6 text-sm leading-6 text-slate-700",
					children: StudioGuidanceList.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium text-slate-900",
						children: "Exact setup required"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2",
						children: "Add the live deployment origin and the local development origin to the project’s CORS list. Use exact origins, not wildcards, and enable credentialed requests for the Studio."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-sm text-slate-600",
					children: "Once authorized project membership and exact CORS configuration are in place, the Studio can be opened normally here."
				})
			]
		})
	});
}
var StudioConfigurationBoundary = class extends import_react.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}
	static getDerivedStateFromError() {
		return { hasError: true };
	}
	componentDidCatch(error, errorInfo) {
		console.warn("[studio] Sanity Studio could not initialize; configuration is pending.", {
			error,
			errorInfo
		});
	}
	render() {
		if (this.state.hasError) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StudioNotConfigured, {});
		return this.props.children;
	}
};
var SanityStudio = (0, import_react.lazy)(async () => {
	const [{ Studio }, { studioConfig }] = await Promise.all([import("../_libs/sanity+[...].mjs").then((n) => n.a), import("./config-dCY-Pp4f.mjs")]);
	return { default: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Studio, { config: studioConfig }) };
});
function EmbeddedStudio() {
	const [isMounted, setIsMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setIsMounted(true), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "h-dvh min-h-[480px] w-screen overflow-hidden bg-white text-slate-950",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StudioConfigurationBoundary, { children: isMounted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
			fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "p-6 text-sm",
				role: "status",
				children: "Loading the private editorial studio…"
			}),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SanityStudio, {})
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "p-6 text-sm",
			role: "status",
			children: "Loading the private editorial studio…"
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/",
			"aria-label": "Return to Discovering Roots",
			className: "sr-only focus:not-sr-only focus:fixed focus:bottom-4 focus:left-4 focus:z-[100] focus:bg-white focus:p-3 focus:text-slate-950",
			children: "Return to website"
		})]
	});
}
//#endregion
export { EmbeddedStudio as t };
