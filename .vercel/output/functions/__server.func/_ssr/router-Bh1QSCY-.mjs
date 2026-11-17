import { o as __toESM } from "../_runtime.mjs";
import { _ as createFileRoute, b as useRouter, d as Scripts, f as HeadContent, g as lazyRouteComponent, h as Outlet, m as createRouter, v as createRootRouteWithContext, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as require_react } from "../_libs/dnd-kit__accessibility+react.mjs";
import { o as require_jsx_runtime } from "../_libs/dnd-kit__react+react.mjs";
import { n as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as Route$6 } from "../_slug-eHjKHYjJ.mjs";
import { n as previewCookieHeader } from "./preview-token-DOGF0mBG.mjs";
import { t as Route$7 } from "./routes-D0m-SmuQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-Bh1QSCY-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-C9QeKXtj.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message: describeThrown(error),
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var MAX_SERIALIZED_LENGTH = 2e3;
function describeThrown(error) {
	if (error instanceof Response) return `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`;
	if (error instanceof Error) return error.message;
	if (typeof error === "string") return error;
	const { message } = error ?? {};
	if (typeof message === "string" && message.length > 0) return message;
	try {
		return JSON.stringify(error)?.slice(0, MAX_SERIALIZED_LENGTH) ?? String(error);
	} catch {
		return String(error);
	}
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$5 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Discovering Roots" },
			{
				name: "description",
				content: "A heritage storytelling initiative documenting handmade Pashmina."
			}
		],
		links: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400&family=DM+Sans:wght@400;500&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$5.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$2 = () => import("./route-DGH4m4so.mjs");
var Route$4 = createFileRoute("/studio")({
	head: () => ({ meta: [
		{ title: "Editorial Studio — Discovering Roots" },
		{
			name: "description",
			content: "Private editorial studio for Discovering Roots editors. Sign-in with an invited Sanity account is required."
		},
		{
			name: "robots",
			content: "noindex, nofollow"
		},
		{
			property: "og:title",
			content: "Editorial Studio — Discovering Roots"
		},
		{
			property: "og:description",
			content: "Private editorial studio for invited editors."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./studio-5-IyYfsK.mjs");
var Route$3 = createFileRoute("/studio/")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("../_-CxSE2q9P.mjs");
var Route$2 = createFileRoute("/studio/$")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
function handlePreviewDisableRequest() {
	return new Response(null, {
		status: 307,
		headers: {
			Location: "/",
			"Set-Cookie": previewCookieHeader("", 0),
			"Cache-Control": "no-store"
		}
	});
}
/** "Return to published site" — clears the preview cookie. */
var Route$1 = createFileRoute("/api/preview/disable")({ server: { handlers: { GET: () => handlePreviewDisableRequest() } } });
function invalidPreviewResponse() {
	return new Response("Invalid or expired preview link.", {
		status: 401,
		headers: {
			"Cache-Control": "no-store",
			"Referrer-Policy": "no-referrer"
		}
	});
}
function redirectToPreviewFailure(requestUrl) {
	const destination = new URL("/", requestUrl.origin);
	destination.searchParams.set("previewError", "unavailable");
	return new Response(null, {
		status: 303,
		headers: {
			Location: `${destination.pathname}${destination.search}`,
			"Cache-Control": "no-store",
			"Referrer-Policy": "no-referrer"
		}
	});
}
async function handlePreviewEnableRequest(request) {
	const requestUrl = new URL(request.url);
	const hasHandshakeSecret = requestUrl.searchParams.has("sanity-preview-secret");
	const { readSanityEnv } = await import("./env-D5BOqlbE.mjs").then((n) => n.t);
	const env = readSanityEnv();
	if (!env.configured || !env.readToken || !env.previewSecret) {
		if (hasHandshakeSecret) return redirectToPreviewFailure(requestUrl);
		return new Response("Draft preview is not configured on this deployment.", {
			status: 501,
			headers: {
				"Cache-Control": "no-store",
				"Referrer-Policy": "no-referrer"
			}
		});
	}
	if (!hasHandshakeSecret) return invalidPreviewResponse();
	const previewPathname = requestUrl.searchParams.get("sanity-preview-pathname");
	if (previewPathname) try {
		new URL(previewPathname, "http://localhost");
	} catch {
		return redirectToPreviewFailure(requestUrl);
	}
	const { validatePreviewUrl } = await import("../_libs/@sanity/preview-url-secret+[...].mjs").then((n) => n.c);
	const { withoutSecretSearchParams } = await import("../_libs/@sanity/preview-url-secret+[...].mjs").then((n) => n.s);
	const { createClient } = await import("../_libs/@sanity/client+[...].mjs").then((n) => n.n);
	const client = createClient({
		projectId: env.projectId,
		dataset: env.dataset,
		apiVersion: env.apiVersion,
		useCdn: false,
		token: env.readToken
	});
	let validation;
	try {
		validation = await validatePreviewUrl(client, request.url);
	} catch {
		return redirectToPreviewFailure(requestUrl);
	}
	const { isValid, redirectTo = "/" } = validation;
	if (!isValid) return redirectToPreviewFailure(requestUrl);
	const { signPreviewToken, previewCookieHeader, PREVIEW_MAX_AGE_SECONDS } = await import("./preview-token-DOGF0mBG.mjs").then((n) => n.r).then((n) => n.r);
	const token = await signPreviewToken(env.previewSecret, Date.now() + PREVIEW_MAX_AGE_SECONDS * 1e3);
	const redirectUrl = new URL(redirectTo, requestUrl);
	const safeRedirect = redirectUrl.origin === requestUrl.origin ? withoutSecretSearchParams(redirectUrl) : new URL("/", requestUrl);
	safeRedirect.searchParams.set("preview", "1");
	return new Response(null, {
		status: 307,
		headers: {
			Location: `${safeRedirect.pathname}${safeRedirect.search}${safeRedirect.hash}`,
			"Set-Cookie": previewCookieHeader(token, PREVIEW_MAX_AGE_SECONDS),
			"Cache-Control": "no-store",
			"Referrer-Policy": "no-referrer"
		}
	});
}
/**
* Entry point for Sanity Studio's Presentation tool ("Preview draft").
* Studio appends a short-lived `sanity-preview-secret`, which we validate
* against the dataset with the server-only viewer token. Only then is a
* signed, httpOnly preview cookie issued. Anonymous visitors cannot forge it.
*/
var Route = createFileRoute("/api/preview/enable")({ server: { handlers: { GET: ({ request }) => handlePreviewEnableRequest(request) } } });
var IndexRoute = Route$7.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$5
});
var StudioRouteRoute = Route$4.update({
	id: "/studio",
	path: "/studio",
	getParentRoute: () => Route$5
});
var PagesSlugRoute = Route$6.update({
	id: "/pages/$slug",
	path: "/pages/$slug",
	getParentRoute: () => Route$5
});
var StudioIndexRoute = Route$3.update({
	id: "/",
	path: "/",
	getParentRoute: () => StudioRouteRoute
});
var StudioSplatRoute = Route$2.update({
	id: "/$",
	path: "/$",
	getParentRoute: () => StudioRouteRoute
});
var ApiPreviewDisableRoute = Route$1.update({
	id: "/api/preview/disable",
	path: "/api/preview/disable",
	getParentRoute: () => Route$5
});
var ApiPreviewEnableRoute = Route.update({
	id: "/api/preview/enable",
	path: "/api/preview/enable",
	getParentRoute: () => Route$5
});
var StudioRouteRouteChildren = {
	StudioSplatRoute,
	StudioIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	StudioRouteRoute: StudioRouteRoute._addFileChildren(StudioRouteRouteChildren),
	PagesSlugRoute,
	ApiPreviewDisableRoute,
	ApiPreviewEnableRoute
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
