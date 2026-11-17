import { t as __exportAll } from "./rolldown-runtime-D7D4PA-g.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/env-D5BOqlbE.js
var env_exports = /* @__PURE__ */ __exportAll({
	DEFAULT_SANITY_API_VERSION: () => DEFAULT_SANITY_API_VERSION,
	readSanityEnv: () => readSanityEnv
});
/**
* Sanity environment configuration (server-side only).
* Call `readSanityEnv()` inside a server function / server route handler —
* never at module scope — so values are read at request time on any host.
*/
var DEFAULT_SANITY_API_VERSION = "2025-02-19";
var projectIdPattern = /^[a-z0-9][a-z0-9-]{0,63}$/;
var datasetPattern = /^[a-z0-9][a-z0-9_-]{0,63}$/;
var apiVersionPattern = /^\d{4}-\d{2}-\d{2}$/;
function runtimeEnv() {
	return typeof process === "undefined" ? {} : process.env;
}
function readSanityEnv(source = runtimeEnv()) {
	const projectId = (source["SANITY_PROJECT_ID"] ?? "").trim();
	const dataset = (source["SANITY_DATASET"] ?? "").trim();
	const configuredApiVersion = (source["SANITY_API_VERSION"] ?? "").trim();
	const apiVersion = configuredApiVersion || "2025-02-19";
	const missing = [];
	const invalid = [];
	if (!projectId) missing.push("SANITY_PROJECT_ID");
	if (!dataset) missing.push("SANITY_DATASET");
	if (projectId && !projectIdPattern.test(projectId)) invalid.push("SANITY_PROJECT_ID");
	if (dataset && !datasetPattern.test(dataset)) invalid.push("SANITY_DATASET");
	if (configuredApiVersion && !apiVersionPattern.test(configuredApiVersion)) invalid.push("SANITY_API_VERSION");
	return {
		configured: missing.length === 0 && invalid.length === 0,
		projectId,
		dataset,
		apiVersion,
		readToken: source["SANITY_API_READ_TOKEN"]?.trim() || void 0,
		previewSecret: source["SANITY_PREVIEW_SECRET"]?.trim() || void 0,
		missing,
		invalid
	};
}
//#endregion
export { readSanityEnv as n, env_exports as t };
