import { o as __toESM } from "./_runtime.mjs";
import { i as require_react } from "./_libs/dnd-kit__accessibility+react.mjs";
import { o as require_jsx_runtime } from "./_libs/dnd-kit__react+react.mjs";
import { u as SiteFooter } from "./_ssr/Sections-DdgF8k4s.mjs";
import { n as createVisualPageConfig } from "./_ssr/components-BlQRDkPd.mjs";
import { t as Route } from "./_slug-eHjKHYjJ.mjs";
import { t as SiteHeader } from "./_ssr/SiteHeader-CwM0fQA8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-SANdw1h7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var publicConfig = createVisualPageConfig([], [], [], []);
function VisualPage() {
	const page = Route.useLoaderData();
	const [Renderer, setRenderer] = (0, import_react.useState)();
	const [renderError, setRenderError] = (0, import_react.useState)(false);
	const hasFooter = page.data.content.some((block) => block.type === "Footer");
	const startsWithHero = page.data.content[0]?.type === "Hero";
	const navigation = page.settings.navigation.map((item) => ({
		...item,
		href: item.href.startsWith("#") ? `/${item.href}` : item.href
	}));
	const mainClass = startsWithHero ? "" : page.preview ? "pt-[6.5rem]" : "pt-16";
	(0, import_react.useEffect)(() => {
		let active = true;
		import("./_libs/@puckeditor/core.mjs").then((n) => n.t).then(({ Render }) => {
			if (active) setRenderer(() => Render);
		}).catch((cause) => {
			console.error("[visual pages] renderer failed to load", cause);
			if (active) setRenderError(true);
		});
		return () => {
			active = false;
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {
			brandName: page.settings.brandName,
			navigation,
			previewMode: page.preview
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			id: "top",
			className: `min-h-screen ${mainClass}`,
			children: Renderer ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Renderer, {
				config: publicConfig,
				data: page.data,
				metadata: page.metadata
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "p-8 text-sm text-muted-foreground",
				role: renderError ? "alert" : "status",
				children: renderError ? "The page layout could not be loaded." : "Loading page layout…"
			})
		}),
		!hasFooter && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {
			brandName: page.settings.brandName,
			footerText: page.settings.footerText
		})
	] });
}
//#endregion
export { VisualPage as component };
