import { i as __require, t as __commonJSMin } from "../_runtime.mjs";
import { K as require_src } from "./@portabletext/editor+[...].mjs";
import { t as require_dist$1 } from "./agent-base.mjs";
//#region node_modules/isomorphic-dompurify/node_modules/http-proxy-agent/dist/index.js
var require_dist = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		var desc = Object.getOwnPropertyDescriptor(m, k);
		if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
			enumerable: true,
			get: function() {
				return m[k];
			}
		};
		Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		o[k2] = m[k];
	}));
	var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
		Object.defineProperty(o, "default", {
			enumerable: true,
			value: v
		});
	}) : function(o, v) {
		o["default"] = v;
	});
	var __importStar = exports && exports.__importStar || function(mod) {
		if (mod && mod.__esModule) return mod;
		var result = {};
		if (mod != null) {
			for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
		}
		__setModuleDefault(result, mod);
		return result;
	};
	var __importDefault = exports && exports.__importDefault || function(mod) {
		return mod && mod.__esModule ? mod : { "default": mod };
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.HttpProxyAgent = void 0;
	var net = __importStar(__require("net"));
	var tls = __importStar(__require("tls"));
	var debug_1 = __importDefault(require_src());
	var events_1 = __require("events");
	var agent_base_1 = require_dist$1();
	var url_1 = __require("url");
	var debug = (0, debug_1.default)("http-proxy-agent");
	/**
	* The `HttpProxyAgent` implements an HTTP Agent subclass that connects
	* to the specified "HTTP proxy server" in order to proxy HTTP requests.
	*/
	var HttpProxyAgent = class extends agent_base_1.Agent {
		constructor(proxy, opts) {
			super(opts);
			this.proxy = typeof proxy === "string" ? new url_1.URL(proxy) : proxy;
			this.proxyHeaders = opts?.headers ?? {};
			debug("Creating new HttpProxyAgent instance: %o", this.proxy.href);
			const host = (this.proxy.hostname || this.proxy.host).replace(/^\[|\]$/g, "");
			const port = this.proxy.port ? parseInt(this.proxy.port, 10) : this.proxy.protocol === "https:" ? 443 : 80;
			this.connectOpts = {
				...opts ? omit(opts, "headers") : null,
				host,
				port
			};
		}
		addRequest(req, opts) {
			req._header = null;
			this.setRequestProps(req, opts);
			super.addRequest(req, opts);
		}
		setRequestProps(req, opts) {
			const { proxy } = this;
			const base = `${opts.secureEndpoint ? "https:" : "http:"}//${req.getHeader("host") || "localhost"}`;
			const url = new url_1.URL(req.path, base);
			if (opts.port !== 80) url.port = String(opts.port);
			req.path = String(url);
			const headers = typeof this.proxyHeaders === "function" ? this.proxyHeaders() : { ...this.proxyHeaders };
			if (proxy.username || proxy.password) {
				const auth = `${decodeURIComponent(proxy.username)}:${decodeURIComponent(proxy.password)}`;
				headers["Proxy-Authorization"] = `Basic ${Buffer.from(auth).toString("base64")}`;
			}
			if (!headers["Proxy-Connection"]) headers["Proxy-Connection"] = this.keepAlive ? "Keep-Alive" : "close";
			for (const name of Object.keys(headers)) {
				const value = headers[name];
				if (value) req.setHeader(name, value);
			}
		}
		async connect(req, opts) {
			req._header = null;
			if (!req.path.includes("://")) this.setRequestProps(req, opts);
			let first;
			let endOfHeaders;
			debug("Regenerating stored HTTP header string for request");
			req._implicitHeader();
			if (req.outputData && req.outputData.length > 0) {
				debug("Patching connection write() output buffer with updated header");
				first = req.outputData[0].data;
				endOfHeaders = first.indexOf("\r\n\r\n") + 4;
				req.outputData[0].data = req._header + first.substring(endOfHeaders);
				debug("Output buffer: %o", req.outputData[0].data);
			}
			let socket;
			if (this.proxy.protocol === "https:") {
				debug("Creating `tls.Socket`: %o", this.connectOpts);
				socket = tls.connect(this.connectOpts);
			} else {
				debug("Creating `net.Socket`: %o", this.connectOpts);
				socket = net.connect(this.connectOpts);
			}
			await (0, events_1.once)(socket, "connect");
			return socket;
		}
	};
	HttpProxyAgent.protocols = ["http", "https"];
	exports.HttpProxyAgent = HttpProxyAgent;
	function omit(obj, ...keys) {
		const ret = {};
		let key;
		for (key in obj) if (!keys.includes(key)) ret[key] = obj[key];
		return ret;
	}
}));
//#endregion
export { require_dist as t };
