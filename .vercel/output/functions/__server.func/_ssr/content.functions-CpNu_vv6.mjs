import { n as enumType, r as objectType } from "../_libs/zod.mjs";
import { l as createServerFn } from "./createServerFn-DDDJMFWM.mjs";
import { t as createSsrRpc } from "./createSsrRpc-Bo9uTFiW.mjs";
import { t as queryOptions } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/content.functions-CpNu_vv6.js
/**
* Loads homepage content. Published documents for everyone; drafts only when
* the request carries a valid signed preview cookie AND a server read token exists.
* Falls back to the local demo content with a clear notice on any setup gap.
*/
var getSiteContent = createServerFn({ method: "GET" }).validator(objectType({ scope: enumType(["published", "preview"]) })).handler(createSsrRpc("5628aaee3be8917371cf667f0fa9e02784073998033f9f5baa65a4e0d019656a"));
function siteContentQuery(scope = "published") {
	return queryOptions({
		queryKey: ["site-content", scope],
		queryFn: async () => JSON.parse(await getSiteContent({ data: { scope } })),
		staleTime: 0
	});
}
//#endregion
export { siteContentQuery as n, getSiteContent as t };
