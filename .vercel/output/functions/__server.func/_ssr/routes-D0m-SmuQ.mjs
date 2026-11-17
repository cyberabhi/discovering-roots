import { _ as createFileRoute, g as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as siteContentQuery } from "./content.functions-CpNu_vv6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D0m-SmuQ.js
var $$splitComponentImporter = () => import("./routes-ChhFBunp.mjs");
var Route = createFileRoute("/")({
	validateSearch: (search) => {
		return {
			...search["preview"] === 1 || search["preview"] === "1" ? { preview: 1 } : {},
			...search["previewError"] === "unavailable" ? { previewError: "unavailable" } : {}
		};
	},
	loaderDeps: ({ search }) => ({ preview: search.preview === 1 }),
	loader: ({ context, deps }) => context.queryClient.fetchQuery(siteContentQuery(deps.preview ? "preview" : "published")),
	head: () => ({ meta: [
		{ title: "Discovering Roots — The Making of Handmade Pashmina" },
		{
			name: "description",
			content: "A heritage archive following the thread of authentic handmade Pashmina through eight hand processes, from Changthang pasture to the loom."
		},
		{
			property: "og:title",
			content: "Discovering Roots — A thread that carries generations"
		},
		{
			property: "og:description",
			content: "Follow the embroidered thread through the eight chapters of handmade Pashmina."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
