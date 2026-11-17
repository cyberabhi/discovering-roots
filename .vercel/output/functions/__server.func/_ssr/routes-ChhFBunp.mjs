import { o as require_jsx_runtime } from "../_libs/dnd-kit__react+react.mjs";
import { i as HeroSection, l as ShawlDetailGallery, n as ArtisansSection, o as OriginSection, r as EmbroideredJourney, s as PreservationSection, u as SiteFooter } from "./Sections-DdgF8k4s.mjs";
import { t as SiteHeader } from "./SiteHeader-CwM0fQA8.mjs";
import { t as Route } from "./routes-D0m-SmuQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-ChhFBunp.js
var import_jsx_runtime = require_jsx_runtime();
function Index() {
	const content = Route.useLoaderData();
	const { previewError } = Route.useSearch();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		previewError && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			role: "alert",
			className: "fixed inset-x-0 top-16 z-[60] flex items-center justify-center gap-3 bg-slate px-4 py-3 text-center text-sm text-paper",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Draft preview could not be activated. The published site is shown instead." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "/",
				className: "font-semibold underline underline-offset-2",
				children: "Continue without preview"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "#main",
			className: "sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-paper focus:p-3",
			children: "Skip to content"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {
			brandName: content.settings.brandName,
			navigation: content.settings.navigation,
			previewMode: content.preview
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			id: "main",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSection, {
					hero: content.settings.hero,
					shawl: content.shawl
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OriginSection, {}),
				content.chapters.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmbroideredJourney, {
					chapters: content.chapters,
					previewNotice: content.preview ? content.notice : null
				}) : content.preview && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "craft",
					className: "border-t border-border px-5 py-20 md:px-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow !text-sky",
							children: "Editorial preview"
						}),
						content.notice && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							role: "status",
							className: "mt-4 max-w-3xl border-l-2 border-sky pl-4 text-sm",
							children: content.notice
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 max-w-3xl text-4xl leading-tight md:text-6xl",
							children: "No reviewable chapter drafts are available."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArtisansSection, {
					chapters: content.chapters,
					previewMode: content.preview
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShawlDetailGallery, { shawl: content.shawl }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreservationSection, { cta: content.settings.cta })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {
			brandName: content.settings.brandName,
			footerText: content.settings.footerText
		})
	] });
}
//#endregion
export { Index as component };
