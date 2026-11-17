import { n as enumType, r as objectType } from "../_libs/zod.mjs";
import { l as createServerFn } from "./createServerFn-DDDJMFWM.mjs";
import { i as setResponseHeader, t as getRequest } from "./request-response-CTjQf9X-.mjs";
import { t as createServerRpc } from "./createServerRpc-CxD4EZ5P.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/content.functions-CnqrCWgI.js
var getSiteContent_createServerFn_handler = createServerRpc({
	id: "5628aaee3be8917371cf667f0fa9e02784073998033f9f5baa65a4e0d019656a",
	name: "getSiteContent",
	filename: "src/lib/content.functions.ts"
}, (opts) => getSiteContent.__executeServer(opts));
var getSiteContent = createServerFn({ method: "GET" }).validator(objectType({ scope: enumType(["published", "preview"]) })).handler(getSiteContent_createServerFn_handler, async ({ data }) => {
	setResponseHeader("Cache-Control", "private, no-store, max-age=0");
	setResponseHeader("Pragma", "no-cache");
	setResponseHeader("Vary", "Cookie");
	const { loadSiteContent } = await import("./content.server-Bh19StYR.mjs").then((n) => n.t);
	const content = await loadSiteContent({
		cookieHeader: getRequest().headers.get("cookie"),
		allowPreview: data.scope === "preview"
	});
	return JSON.stringify(content);
});
//#endregion
export { getSiteContent_createServerFn_handler };
