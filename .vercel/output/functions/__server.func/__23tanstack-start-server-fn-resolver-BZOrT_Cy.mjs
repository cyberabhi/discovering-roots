//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-BZOrT_Cy.js
var manifest = {
	"5628aaee3be8917371cf667f0fa9e02784073998033f9f5baa65a4e0d019656a": {
		functionName: "getSiteContent_createServerFn_handler",
		importer: () => import("./_ssr/content.functions-CnqrCWgI.mjs")
	},
	"b5893fe778d5a15e64d15f8a95594b2dd143a7130bd9be73e9572e40724fe5c7": {
		functionName: "getVisualPage_createServerFn_handler",
		importer: () => import("./_ssr/visual-page.functions-BWnZpx3K.mjs")
	}
};
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ??= await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
