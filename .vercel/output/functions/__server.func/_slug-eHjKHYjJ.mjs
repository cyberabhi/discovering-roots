import { a as stringType, r as objectType } from "./_libs/zod.mjs";
import { Wt as notFound, _ as createFileRoute, g as lazyRouteComponent } from "./_libs/@tanstack/react-router+[...].mjs";
import { l as createServerFn } from "./_ssr/createServerFn-DDDJMFWM.mjs";
import { t as createSsrRpc } from "./_ssr/createSsrRpc-Bo9uTFiW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-eHjKHYjJ.js
var getVisualPage = createServerFn({ method: "GET" }).validator(objectType({ slug: stringType().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/) })).handler(createSsrRpc("b5893fe778d5a15e64d15f8a95594b2dd143a7130bd9be73e9572e40724fe5c7"));
var $$splitComponentImporter = () => import("./_slug-SANdw1h7.mjs");
var Route = createFileRoute("/pages/$slug")({
	loader: async ({ params }) => {
		const serialized = await getVisualPage({ data: { slug: params.slug } });
		const page = JSON.parse(serialized);
		if (!page) throw notFound();
		return page;
	},
	head: ({ loaderData }) => {
		const title = loaderData?.seo.title || loaderData?.title || "Discovering Roots";
		const description = loaderData?.seo.description;
		const shareImageUrl = loaderData?.seo.shareImage?.url;
		const safeShareImage = shareImageUrl && /^https:\/\//i.test(shareImageUrl) ? shareImageUrl : void 0;
		return { meta: [
			{ title },
			...description ? [{
				name: "description",
				content: description
			}] : [],
			{
				name: "robots",
				content: loaderData?.preview ? "noindex, nofollow" : "index, follow"
			},
			{
				property: "og:title",
				content: title
			},
			...description ? [{
				property: "og:description",
				content: description
			}] : [],
			...safeShareImage ? [{
				property: "og:image",
				content: safeShareImage
			}, {
				name: "twitter:image",
				content: safeShareImage
			}] : []
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
