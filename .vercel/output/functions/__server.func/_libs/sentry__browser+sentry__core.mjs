import { $ as DEBUG_BUILD$2, A as isDOMException, B as isThenable, C as safeJoin, D as getLocationHref, E as getComponentName, F as isParameterizedString, G as createStackParser, H as addHandler, I as isPlainObject, J as stackParserFromStackParserOptions, K as getFramesFromEvent, L as isPrimitive, M as isErrorEvent$1, N as isEvent, O as htmlTreeAsString, P as isInstanceOf, Q as originalConsoleMethods, R as isString, S as markFunctionWrapped, T as truncate, U as maybeInstrument, V as isVueViewModel, W as triggerHandlers, X as consoleSandbox, Y as CONSOLE_LEVELS, Z as logger, _ as convertToPlainObject, a as addHistoryInstrumentationHandler, b as fill, c as supportsNativeFetch, d as checkOrSetAlreadyCaught, et as GLOBAL_OBJ, f as getEventDescription, g as addNonEnumerableProperty, h as timestampInSeconds, i as getNativeImplementation, j as isError, k as isDOMError, l as addExceptionMechanism, m as dateTimestampInSeconds, n as addXhrInstrumentationHandler, nt as SDK_VERSION, o as addClickKeypressInstrumentationHandler, p as uuid4, q as getFunctionName, r as clearCachedImplementation, s as supportsFetch, t as SENTRY_XHR_DATA_KEY, tt as getGlobalSingleton, u as addExceptionTypeValue, v as dropUndefinedKeys, w as stringMatchesSomePattern, x as getOriginalFunction, y as extractExceptionKeysForMessage, z as isSyntheticEvent } from "./@sentry-internal/browser-utils+[...].mjs";
//#region node_modules/@sentry/core/build/esm/debug-build.js
/**
* This serves as a build time flag that will be true by default, but false in non-debug builds or if users replace `__SENTRY_DEBUG__` in their generated code.
*
* ATTENTION: This constant must never cross package boundaries (i.e. be exported) to guarantee that it can be used for tree shaking.
*/
var DEBUG_BUILD$1 = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
//#endregion
//#region node_modules/@sentry/core/build/esm/utils-hoist/instrument/globalError.js
var _oldOnErrorHandler = null;
/**
* Add an instrumentation handler for when an error is captured by the global error handler.
*
* Use at your own risk, this might break without changelog notice, only used internally.
* @hidden
*/
function addGlobalErrorInstrumentationHandler(handler) {
	const type = "error";
	addHandler(type, handler);
	maybeInstrument(type, instrumentError);
}
function instrumentError() {
	_oldOnErrorHandler = GLOBAL_OBJ.onerror;
	GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
		triggerHandlers("error", {
			column,
			error,
			line,
			msg,
			url
		});
		if (_oldOnErrorHandler) return _oldOnErrorHandler.apply(this, arguments);
		return false;
	};
	GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
//#endregion
//#region node_modules/@sentry/core/build/esm/utils-hoist/instrument/globalUnhandledRejection.js
var _oldOnUnhandledRejectionHandler = null;
/**
* Add an instrumentation handler for when an unhandled promise rejection is captured.
*
* Use at your own risk, this might break without changelog notice, only used internally.
* @hidden
*/
function addGlobalUnhandledRejectionInstrumentationHandler(handler) {
	const type = "unhandledrejection";
	addHandler(type, handler);
	maybeInstrument(type, instrumentUnhandledRejection);
}
function instrumentUnhandledRejection() {
	_oldOnUnhandledRejectionHandler = GLOBAL_OBJ.onunhandledrejection;
	GLOBAL_OBJ.onunhandledrejection = function(e) {
		triggerHandlers("unhandledrejection", e);
		if (_oldOnUnhandledRejectionHandler) return _oldOnUnhandledRejectionHandler.apply(this, arguments);
		return true;
	};
	GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
//#endregion
//#region node_modules/@sentry/core/build/esm/carrier.js
/**
* An object that contains globally accessible properties and maintains a scope stack.
* @hidden
*/
/**
* Returns the global shim registry.
*
* FIXME: This function is problematic, because despite always returning a valid Carrier,
* it has an optional `__SENTRY__` property, which then in turn requires us to always perform an unnecessary check
* at the call-site. We always access the carrier through this function, so we can guarantee that `__SENTRY__` is there.
**/
function getMainCarrier() {
	getSentryCarrier(GLOBAL_OBJ);
	return GLOBAL_OBJ;
}
/** Will either get the existing sentry carrier, or create a new one. */
function getSentryCarrier(carrier) {
	const __SENTRY__ = carrier.__SENTRY__ = carrier.__SENTRY__ || {};
	__SENTRY__.version = __SENTRY__.version || "8.55.2";
	return __SENTRY__[SDK_VERSION] = __SENTRY__["8.55.2"] || {};
}
//#endregion
//#region node_modules/@sentry/core/build/esm/utils-hoist/syncpromise.js
/** SyncPromise internal states */
var States;
(function(States) {
	/** Pending */
	const PENDING = 0;
	States[States["PENDING"] = PENDING] = "PENDING";
	/** Resolved / OK */
	const RESOLVED = 1;
	States[States["RESOLVED"] = RESOLVED] = "RESOLVED";
	/** Rejected / Error */
	const REJECTED = 2;
	States[States["REJECTED"] = REJECTED] = "REJECTED";
})(States || (States = {}));
/**
* Creates a resolved sync promise.
*
* @param value the value to resolve the promise with
* @returns the resolved sync promise
*/
function resolvedSyncPromise(value) {
	return new SyncPromise((resolve) => {
		resolve(value);
	});
}
/**
* Creates a rejected sync promise.
*
* @param value the value to reject the promise with
* @returns the rejected sync promise
*/
function rejectedSyncPromise(reason) {
	return new SyncPromise((_, reject) => {
		reject(reason);
	});
}
/**
* Thenable class that behaves like a Promise and follows it's interface
* but is not async internally
*/
var SyncPromise = class SyncPromise {
	constructor(executor) {
		SyncPromise.prototype.__init.call(this);
		SyncPromise.prototype.__init2.call(this);
		SyncPromise.prototype.__init3.call(this);
		SyncPromise.prototype.__init4.call(this);
		this._state = States.PENDING;
		this._handlers = [];
		try {
			executor(this._resolve, this._reject);
		} catch (e) {
			this._reject(e);
		}
	}
	/** JSDoc */
	then(onfulfilled, onrejected) {
		return new SyncPromise((resolve, reject) => {
			this._handlers.push([
				false,
				(result) => {
					if (!onfulfilled) resolve(result);
					else try {
						resolve(onfulfilled(result));
					} catch (e) {
						reject(e);
					}
				},
				(reason) => {
					if (!onrejected) reject(reason);
					else try {
						resolve(onrejected(reason));
					} catch (e) {
						reject(e);
					}
				}
			]);
			this._executeHandlers();
		});
	}
	/** JSDoc */
	catch(onrejected) {
		return this.then((val) => val, onrejected);
	}
	/** JSDoc */
	finally(onfinally) {
		return new SyncPromise((resolve, reject) => {
			let val;
			let isRejected;
			return this.then((value) => {
				isRejected = false;
				val = value;
				if (onfinally) onfinally();
			}, (reason) => {
				isRejected = true;
				val = reason;
				if (onfinally) onfinally();
			}).then(() => {
				if (isRejected) {
					reject(val);
					return;
				}
				resolve(val);
			});
		});
	}
	/** JSDoc */
	__init() {
		this._resolve = (value) => {
			this._setResult(States.RESOLVED, value);
		};
	}
	/** JSDoc */
	__init2() {
		this._reject = (reason) => {
			this._setResult(States.REJECTED, reason);
		};
	}
	/** JSDoc */
	__init3() {
		this._setResult = (state, value) => {
			if (this._state !== States.PENDING) return;
			if (isThenable(value)) {
				value.then(this._resolve, this._reject);
				return;
			}
			this._state = state;
			this._value = value;
			this._executeHandlers();
		};
	}
	/** JSDoc */
	__init4() {
		this._executeHandlers = () => {
			if (this._state === States.PENDING) return;
			const cachedHandlers = this._handlers.slice();
			this._handlers = [];
			cachedHandlers.forEach((handler) => {
				if (handler[0]) return;
				if (this._state === States.RESOLVED) handler[1](this._value);
				if (this._state === States.REJECTED) handler[2](this._value);
				handler[0] = true;
			});
		};
	}
};
//#endregion
//#region node_modules/@sentry/core/build/esm/session.js
/**
* Creates a new `Session` object by setting certain default parameters. If optional @param context
* is passed, the passed properties are applied to the session object.
*
* @param context (optional) additional properties to be applied to the returned session object
*
* @returns a new `Session` object
*/
function makeSession(context) {
	const startingTime = timestampInSeconds();
	const session = {
		sid: uuid4(),
		init: true,
		timestamp: startingTime,
		started: startingTime,
		duration: 0,
		status: "ok",
		errors: 0,
		ignoreDuration: false,
		toJSON: () => sessionToJSON(session)
	};
	if (context) updateSession(session, context);
	return session;
}
/**
* Updates a session object with the properties passed in the context.
*
* Note that this function mutates the passed object and returns void.
* (Had to do this instead of returning a new and updated session because closing and sending a session
* makes an update to the session after it was passed to the sending logic.
* @see BaseClient.captureSession )
*
* @param session the `Session` to update
* @param context the `SessionContext` holding the properties that should be updated in @param session
*/
function updateSession(session, context = {}) {
	if (context.user) {
		if (!session.ipAddress && context.user.ip_address) session.ipAddress = context.user.ip_address;
		if (!session.did && !context.did) session.did = context.user.id || context.user.email || context.user.username;
	}
	session.timestamp = context.timestamp || timestampInSeconds();
	if (context.abnormal_mechanism) session.abnormal_mechanism = context.abnormal_mechanism;
	if (context.ignoreDuration) session.ignoreDuration = context.ignoreDuration;
	if (context.sid) session.sid = context.sid.length === 32 ? context.sid : uuid4();
	if (context.init !== void 0) session.init = context.init;
	if (!session.did && context.did) session.did = `${context.did}`;
	if (typeof context.started === "number") session.started = context.started;
	if (session.ignoreDuration) session.duration = void 0;
	else if (typeof context.duration === "number") session.duration = context.duration;
	else {
		const duration = session.timestamp - session.started;
		session.duration = duration >= 0 ? duration : 0;
	}
	if (context.release) session.release = context.release;
	if (context.environment) session.environment = context.environment;
	if (!session.ipAddress && context.ipAddress) session.ipAddress = context.ipAddress;
	if (!session.userAgent && context.userAgent) session.userAgent = context.userAgent;
	if (typeof context.errors === "number") session.errors = context.errors;
	if (context.status) session.status = context.status;
}
/**
* Closes a session by setting its status and updating the session object with it.
* Internally calls `updateSession` to update the passed session object.
*
* Note that this function mutates the passed session (@see updateSession for explanation).
*
* @param session the `Session` object to be closed
* @param status the `SessionStatus` with which the session was closed. If you don't pass a status,
*               this function will keep the previously set status, unless it was `'ok'` in which case
*               it is changed to `'exited'`.
*/
function closeSession(session, status) {
	let context = {};
	if (status) context = { status };
	else if (session.status === "ok") context = { status: "exited" };
	updateSession(session, context);
}
/**
* Serializes a passed session object to a JSON object with a slightly different structure.
* This is necessary because the Sentry backend requires a slightly different schema of a session
* than the one the JS SDKs use internally.
*
* @param session the session to be converted
*
* @returns a JSON object of the passed session
*/
function sessionToJSON(session) {
	return dropUndefinedKeys({
		sid: `${session.sid}`,
		init: session.init,
		started: (/* @__PURE__ */ new Date(session.started * 1e3)).toISOString(),
		timestamp: (/* @__PURE__ */ new Date(session.timestamp * 1e3)).toISOString(),
		status: session.status,
		errors: session.errors,
		did: typeof session.did === "number" || typeof session.did === "string" ? `${session.did}` : void 0,
		duration: session.duration,
		abnormal_mechanism: session.abnormal_mechanism,
		attrs: {
			release: session.release,
			environment: session.environment,
			ip_address: session.ipAddress,
			user_agent: session.userAgent
		}
	});
}
//#endregion
//#region node_modules/@sentry/core/build/esm/utils-hoist/propagationContext.js
/**
* Generate a random, valid trace ID.
*/
function generateTraceId() {
	return uuid4();
}
/**
* Generate a random, valid span ID.
*/
function generateSpanId() {
	return uuid4().substring(16);
}
//#endregion
//#region node_modules/@sentry/core/build/esm/utils/merge.js
/**
* Shallow merge two objects.
* Does not mutate the passed in objects.
* Undefined/empty values in the merge object will overwrite existing values.
*
* By default, this merges 2 levels deep.
*/
function merge(initialObj, mergeObj, levels = 2) {
	if (!mergeObj || typeof mergeObj !== "object" || levels <= 0) return mergeObj;
	if (initialObj && mergeObj && Object.keys(mergeObj).length === 0) return initialObj;
	const output = { ...initialObj };
	for (const key in mergeObj) if (Object.prototype.hasOwnProperty.call(mergeObj, key)) output[key] = merge(output[key], mergeObj[key], levels - 1);
	return output;
}
//#endregion
//#region node_modules/@sentry/core/build/esm/utils/spanOnScope.js
var SCOPE_SPAN_FIELD = "_sentrySpan";
/**
* Set the active span for a given scope.
* NOTE: This should NOT be used directly, but is only used internally by the trace methods.
*/
function _setSpanForScope(scope, span) {
	if (span) addNonEnumerableProperty(scope, SCOPE_SPAN_FIELD, span);
	else delete scope[SCOPE_SPAN_FIELD];
}
/**
* Get the active span for a given scope.
* NOTE: This should NOT be used directly, but is only used internally by the trace methods.
*/
function _getSpanForScope(scope) {
	return scope[SCOPE_SPAN_FIELD];
}
//#endregion
//#region node_modules/@sentry/core/build/esm/scope.js
/**
* Default value for maximum number of breadcrumbs added to an event.
*/
var DEFAULT_MAX_BREADCRUMBS = 100;
/**
* Holds additional event information.
*/
var Scope = class ScopeClass {
	/** Flag if notifying is happening. */
	/** Callback for client to receive scope changes. */
	/** Callback list that will be called during event processing. */
	/** Array of breadcrumbs. */
	/** User */
	/** Tags */
	/** Extra */
	/** Contexts */
	/** Attachments */
	/** Propagation Context for distributed tracing */
	/**
	* A place to stash data which is needed at some point in the SDK's event processing pipeline but which shouldn't get
	* sent to Sentry
	*/
	/** Fingerprint */
	/** Severity */
	/**
	* Transaction Name
	*
	* IMPORTANT: The transaction name on the scope has nothing to do with root spans/transaction objects.
	* It's purpose is to assign a transaction to the scope that's added to non-transaction events.
	*/
	/** Session */
	/** Request Mode Session Status */
	/** The client on this scope */
	/** Contains the last event id of a captured event.  */
	constructor() {
		this._notifyingListeners = false;
		this._scopeListeners = [];
		this._eventProcessors = [];
		this._breadcrumbs = [];
		this._attachments = [];
		this._user = {};
		this._tags = {};
		this._extra = {};
		this._contexts = {};
		this._sdkProcessingMetadata = {};
		this._propagationContext = {
			traceId: generateTraceId(),
			spanId: generateSpanId()
		};
	}
	/**
	* @inheritDoc
	*/
	clone() {
		const newScope = new ScopeClass();
		newScope._breadcrumbs = [...this._breadcrumbs];
		newScope._tags = { ...this._tags };
		newScope._extra = { ...this._extra };
		newScope._contexts = { ...this._contexts };
		if (this._contexts.flags) newScope._contexts.flags = { values: [...this._contexts.flags.values] };
		newScope._user = this._user;
		newScope._level = this._level;
		newScope._session = this._session;
		newScope._transactionName = this._transactionName;
		newScope._fingerprint = this._fingerprint;
		newScope._eventProcessors = [...this._eventProcessors];
		newScope._requestSession = this._requestSession;
		newScope._attachments = [...this._attachments];
		newScope._sdkProcessingMetadata = { ...this._sdkProcessingMetadata };
		newScope._propagationContext = { ...this._propagationContext };
		newScope._client = this._client;
		newScope._lastEventId = this._lastEventId;
		_setSpanForScope(newScope, _getSpanForScope(this));
		return newScope;
	}
	/**
	* @inheritDoc
	*/
	setClient(client) {
		this._client = client;
	}
	/**
	* @inheritDoc
	*/
	setLastEventId(lastEventId) {
		this._lastEventId = lastEventId;
	}
	/**
	* @inheritDoc
	*/
	getClient() {
		return this._client;
	}
	/**
	* @inheritDoc
	*/
	lastEventId() {
		return this._lastEventId;
	}
	/**
	* @inheritDoc
	*/
	addScopeListener(callback) {
		this._scopeListeners.push(callback);
	}
	/**
	* @inheritDoc
	*/
	addEventProcessor(callback) {
		this._eventProcessors.push(callback);
		return this;
	}
	/**
	* @inheritDoc
	*/
	setUser(user) {
		this._user = user || {
			email: void 0,
			id: void 0,
			ip_address: void 0,
			username: void 0
		};
		if (this._session) updateSession(this._session, { user });
		this._notifyScopeListeners();
		return this;
	}
	/**
	* @inheritDoc
	*/
	getUser() {
		return this._user;
	}
	/**
	* @inheritDoc
	*/
	getRequestSession() {
		return this._requestSession;
	}
	/**
	* @inheritDoc
	*/
	setRequestSession(requestSession) {
		this._requestSession = requestSession;
		return this;
	}
	/**
	* @inheritDoc
	*/
	setTags(tags) {
		this._tags = {
			...this._tags,
			...tags
		};
		this._notifyScopeListeners();
		return this;
	}
	/**
	* @inheritDoc
	*/
	setTag(key, value) {
		this._tags = {
			...this._tags,
			[key]: value
		};
		this._notifyScopeListeners();
		return this;
	}
	/**
	* @inheritDoc
	*/
	setExtras(extras) {
		this._extra = {
			...this._extra,
			...extras
		};
		this._notifyScopeListeners();
		return this;
	}
	/**
	* @inheritDoc
	*/
	setExtra(key, extra) {
		this._extra = {
			...this._extra,
			[key]: extra
		};
		this._notifyScopeListeners();
		return this;
	}
	/**
	* @inheritDoc
	*/
	setFingerprint(fingerprint) {
		this._fingerprint = fingerprint;
		this._notifyScopeListeners();
		return this;
	}
	/**
	* @inheritDoc
	*/
	setLevel(level) {
		this._level = level;
		this._notifyScopeListeners();
		return this;
	}
	/**
	* Sets the transaction name on the scope so that the name of e.g. taken server route or
	* the page location is attached to future events.
	*
	* IMPORTANT: Calling this function does NOT change the name of the currently active
	* root span. If you want to change the name of the active root span, use
	* `Sentry.updateSpanName(rootSpan, 'new name')` instead.
	*
	* By default, the SDK updates the scope's transaction name automatically on sensible
	* occasions, such as a page navigation or when handling a new request on the server.
	*/
	setTransactionName(name) {
		this._transactionName = name;
		this._notifyScopeListeners();
		return this;
	}
	/**
	* @inheritDoc
	*/
	setContext(key, context) {
		if (context === null) delete this._contexts[key];
		else this._contexts[key] = context;
		this._notifyScopeListeners();
		return this;
	}
	/**
	* @inheritDoc
	*/
	setSession(session) {
		if (!session) delete this._session;
		else this._session = session;
		this._notifyScopeListeners();
		return this;
	}
	/**
	* @inheritDoc
	*/
	getSession() {
		return this._session;
	}
	/**
	* @inheritDoc
	*/
	update(captureContext) {
		if (!captureContext) return this;
		const scopeToMerge = typeof captureContext === "function" ? captureContext(this) : captureContext;
		const [scopeInstance, requestSession] = scopeToMerge instanceof Scope ? [scopeToMerge.getScopeData(), scopeToMerge.getRequestSession()] : isPlainObject(scopeToMerge) ? [captureContext, captureContext.requestSession] : [];
		const { tags, extra, user, contexts, level, fingerprint = [], propagationContext } = scopeInstance || {};
		this._tags = {
			...this._tags,
			...tags
		};
		this._extra = {
			...this._extra,
			...extra
		};
		this._contexts = {
			...this._contexts,
			...contexts
		};
		if (user && Object.keys(user).length) this._user = user;
		if (level) this._level = level;
		if (fingerprint.length) this._fingerprint = fingerprint;
		if (propagationContext) this._propagationContext = propagationContext;
		if (requestSession) this._requestSession = requestSession;
		return this;
	}
	/**
	* @inheritDoc
	*/
	clear() {
		this._breadcrumbs = [];
		this._tags = {};
		this._extra = {};
		this._user = {};
		this._contexts = {};
		this._level = void 0;
		this._transactionName = void 0;
		this._fingerprint = void 0;
		this._requestSession = void 0;
		this._session = void 0;
		_setSpanForScope(this, void 0);
		this._attachments = [];
		this.setPropagationContext({ traceId: generateTraceId() });
		this._notifyScopeListeners();
		return this;
	}
	/**
	* @inheritDoc
	*/
	addBreadcrumb(breadcrumb, maxBreadcrumbs) {
		const maxCrumbs = typeof maxBreadcrumbs === "number" ? maxBreadcrumbs : DEFAULT_MAX_BREADCRUMBS;
		if (maxCrumbs <= 0) return this;
		const mergedBreadcrumb = {
			timestamp: dateTimestampInSeconds(),
			...breadcrumb
		};
		this._breadcrumbs.push(mergedBreadcrumb);
		if (this._breadcrumbs.length > maxCrumbs) {
			this._breadcrumbs = this._breadcrumbs.slice(-maxCrumbs);
			if (this._client) this._client.recordDroppedEvent("buffer_overflow", "log_item");
		}
		this._notifyScopeListeners();
		return this;
	}
	/**
	* @inheritDoc
	*/
	getLastBreadcrumb() {
		return this._breadcrumbs[this._breadcrumbs.length - 1];
	}
	/**
	* @inheritDoc
	*/
	clearBreadcrumbs() {
		this._breadcrumbs = [];
		this._notifyScopeListeners();
		return this;
	}
	/**
	* @inheritDoc
	*/
	addAttachment(attachment) {
		this._attachments.push(attachment);
		return this;
	}
	/**
	* @inheritDoc
	*/
	clearAttachments() {
		this._attachments = [];
		return this;
	}
	/** @inheritDoc */
	getScopeData() {
		return {
			breadcrumbs: this._breadcrumbs,
			attachments: this._attachments,
			contexts: this._contexts,
			tags: this._tags,
			extra: this._extra,
			user: this._user,
			level: this._level,
			fingerprint: this._fingerprint || [],
			eventProcessors: this._eventProcessors,
			propagationContext: this._propagationContext,
			sdkProcessingMetadata: this._sdkProcessingMetadata,
			transactionName: this._transactionName,
			span: _getSpanForScope(this)
		};
	}
	/**
	* @inheritDoc
	*/
	setSDKProcessingMetadata(newData) {
		this._sdkProcessingMetadata = merge(this._sdkProcessingMetadata, newData, 2);
		return this;
	}
	/**
	* @inheritDoc
	*/
	setPropagationContext(context) {
		this._propagationContext = {
			spanId: generateSpanId(),
			...context
		};
		return this;
	}
	/**
	* @inheritDoc
	*/
	getPropagationContext() {
		return this._propagationContext;
	}
	/**
	* @inheritDoc
	*/
	captureException(exception, hint) {
		const eventId = hint && hint.event_id ? hint.event_id : uuid4();
		if (!this._client) {
			logger.warn("No client configured on scope - will not capture exception!");
			return eventId;
		}
		const syntheticException = /* @__PURE__ */ new Error("Sentry syntheticException");
		this._client.captureException(exception, {
			originalException: exception,
			syntheticException,
			...hint,
			event_id: eventId
		}, this);
		return eventId;
	}
	/**
	* @inheritDoc
	*/
	captureMessage(message, level, hint) {
		const eventId = hint && hint.event_id ? hint.event_id : uuid4();
		if (!this._client) {
			logger.warn("No client configured on scope - will not capture message!");
			return eventId;
		}
		const syntheticException = new Error(message);
		this._client.captureMessage(message, level, {
			originalException: message,
			syntheticException,
			...hint,
			event_id: eventId
		}, this);
		return eventId;
	}
	/**
	* @inheritDoc
	*/
	captureEvent(event, hint) {
		const eventId = hint && hint.event_id ? hint.event_id : uuid4();
		if (!this._client) {
			logger.warn("No client configured on scope - will not capture event!");
			return eventId;
		}
		this._client.captureEvent(event, {
			...hint,
			event_id: eventId
		}, this);
		return eventId;
	}
	/**
	* This will be called on every set call.
	*/
	_notifyScopeListeners() {
		if (!this._notifyingListeners) {
			this._notifyingListeners = true;
			this._scopeListeners.forEach((callback) => {
				callback(this);
			});
			this._notifyingListeners = false;
		}
	}
};
//#endregion
//#region node_modules/@sentry/core/build/esm/defaultScopes.js
/** Get the default current scope. */
function getDefaultCurrentScope() {
	return getGlobalSingleton("defaultCurrentScope", () => new Scope());
}
/** Get the default isolation scope. */
function getDefaultIsolationScope() {
	return getGlobalSingleton("defaultIsolationScope", () => new Scope());
}
//#endregion
//#region node_modules/@sentry/core/build/esm/asyncContext/stackStrategy.js
/**
* This is an object that holds a stack of scopes.
*/
var AsyncContextStack = class {
	constructor(scope, isolationScope) {
		let assignedScope;
		if (!scope) assignedScope = new Scope();
		else assignedScope = scope;
		let assignedIsolationScope;
		if (!isolationScope) assignedIsolationScope = new Scope();
		else assignedIsolationScope = isolationScope;
		this._stack = [{ scope: assignedScope }];
		this._isolationScope = assignedIsolationScope;
	}
	/**
	* Fork a scope for the stack.
	*/
	withScope(callback) {
		const scope = this._pushScope();
		let maybePromiseResult;
		try {
			maybePromiseResult = callback(scope);
		} catch (e) {
			this._popScope();
			throw e;
		}
		if (isThenable(maybePromiseResult)) return maybePromiseResult.then((res) => {
			this._popScope();
			return res;
		}, (e) => {
			this._popScope();
			throw e;
		});
		this._popScope();
		return maybePromiseResult;
	}
	/**
	* Get the client of the stack.
	*/
	getClient() {
		return this.getStackTop().client;
	}
	/**
	* Returns the scope of the top stack.
	*/
	getScope() {
		return this.getStackTop().scope;
	}
	/**
	* Get the isolation scope for the stack.
	*/
	getIsolationScope() {
		return this._isolationScope;
	}
	/**
	* Returns the topmost scope layer in the order domain > local > process.
	*/
	getStackTop() {
		return this._stack[this._stack.length - 1];
	}
	/**
	* Push a scope to the stack.
	*/
	_pushScope() {
		const scope = this.getScope().clone();
		this._stack.push({
			client: this.getClient(),
			scope
		});
		return scope;
	}
	/**
	* Pop a scope from the stack.
	*/
	_popScope() {
		if (this._stack.length <= 1) return false;
		return !!this._stack.pop();
	}
};
/**
* Get the global async context stack.
* This will be removed during the v8 cycle and is only here to make migration easier.
*/
function getAsyncContextStack() {
	const sentry = getSentryCarrier(getMainCarrier());
	return sentry.stack = sentry.stack || new AsyncContextStack(getDefaultCurrentScope(), getDefaultIsolationScope());
}
function withScope$1(callback) {
	return getAsyncContextStack().withScope(callback);
}
function withSetScope(scope, callback) {
	const stack = getAsyncContextStack();
	return stack.withScope(() => {
		stack.getStackTop().scope = scope;
		return callback(scope);
	});
}
function withIsolationScope(callback) {
	return getAsyncContextStack().withScope(() => {
		return callback(getAsyncContextStack().getIsolationScope());
	});
}
/**
* Get the stack-based async context strategy.
*/
function getStackAsyncContextStrategy() {
	return {
		withIsolationScope,
		withScope: withScope$1,
		withSetScope,
		withSetIsolationScope: (_isolationScope, callback) => {
			return withIsolationScope(callback);
		},
		getCurrentScope: () => getAsyncContextStack().getScope(),
		getIsolationScope: () => getAsyncContextStack().getIsolationScope()
	};
}
//#endregion
//#region node_modules/@sentry/core/build/esm/asyncContext/index.js
/**
* Get the current async context strategy.
* If none has been setup, the default will be used.
*/
function getAsyncContextStrategy(carrier) {
	const sentry = getSentryCarrier(carrier);
	if (sentry.acs) return sentry.acs;
	return getStackAsyncContextStrategy();
}
//#endregion
//#region node_modules/@sentry/core/build/esm/currentScopes.js
/**
* Get the currently active scope.
*/
function getCurrentScope() {
	return getAsyncContextStrategy(getMainCarrier()).getCurrentScope();
}
/**
* Get the currently active isolation scope.
* The isolation scope is active for the current execution context.
*/
function getIsolationScope() {
	return getAsyncContextStrategy(getMainCarrier()).getIsolationScope();
}
/**
* Get the global scope.
* This scope is applied to _all_ events.
*/
function getGlobalScope() {
	return getGlobalSingleton("globalScope", () => new Scope());
}
/**
* Creates a new scope with and executes the given operation within.
* The scope is automatically removed once the operation
* finishes or throws.
*/
/**
* Either creates a new active scope, or sets the given scope as active scope in the given callback.
*/
function withScope(...rest) {
	const acs = getAsyncContextStrategy(getMainCarrier());
	if (rest.length === 2) {
		const [scope, callback] = rest;
		if (!scope) return acs.withScope(callback);
		return acs.withSetScope(scope, callback);
	}
	return acs.withScope(rest[0]);
}
/**
* Get the currently active client.
*/
function getClient() {
	return getCurrentScope().getClient();
}
/**
* Get a trace context for the given scope.
*/
function getTraceContextFromScope(scope) {
	const { traceId, spanId, parentSpanId } = scope.getPropagationContext();
	return dropUndefinedKeys({
		trace_id: traceId,
		span_id: spanId,
		parent_span_id: parentSpanId
	});
}
//#endregion
//#region node_modules/@sentry/core/build/esm/metrics/metric-summary.js
/**
* key: bucketKey
* value: [exportKey, MetricSummary]
*/
var METRICS_SPAN_FIELD = "_sentryMetrics";
/**
* Fetches the metric summary if it exists for the passed span
*/
function getMetricSummaryJsonForSpan(span) {
	const storage = span[METRICS_SPAN_FIELD];
	if (!storage) return;
	const output = {};
	for (const [, [exportKey, summary]] of storage) (output[exportKey] || (output[exportKey] = [])).push(dropUndefinedKeys(summary));
	return output;
}
//#endregion
//#region node_modules/@sentry/core/build/esm/semanticAttributes.js
/**
* Use this attribute to represent the source of a span.
* Should be one of: custom, url, route, view, component, task, unknown
*
*/
var SEMANTIC_ATTRIBUTE_SENTRY_SOURCE = "sentry.source";
/**
* Use this attribute to represent the sample rate used for a span.
*/
var SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE = "sentry.sample_rate";
/**
* Use this attribute to represent the operation of a span.
*/
var SEMANTIC_ATTRIBUTE_SENTRY_OP = "sentry.op";
/**
* Use this attribute to represent the origin of a span.
*/
var SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN = "sentry.origin";
//#endregion
//#region node_modules/@sentry/core/build/esm/utils-hoist/baggage.js
var SENTRY_BAGGAGE_KEY_PREFIX_REGEX = /^sentry-/;
/**
* Takes a baggage header and turns it into Dynamic Sampling Context, by extracting all the "sentry-" prefixed values
* from it.
*
* @param baggageHeader A very bread definition of a baggage header as it might appear in various frameworks.
* @returns The Dynamic Sampling Context that was found on `baggageHeader`, if there was any, `undefined` otherwise.
*/
function baggageHeaderToDynamicSamplingContext(baggageHeader) {
	const baggageObject = parseBaggageHeader(baggageHeader);
	if (!baggageObject) return;
	const dynamicSamplingContext = Object.entries(baggageObject).reduce((acc, [key, value]) => {
		if (key.match(SENTRY_BAGGAGE_KEY_PREFIX_REGEX)) {
			const nonPrefixedKey = key.slice(7);
			acc[nonPrefixedKey] = value;
		}
		return acc;
	}, {});
	if (Object.keys(dynamicSamplingContext).length > 0) return dynamicSamplingContext;
	else return;
}
/**
* Take a baggage header and parse it into an object.
*/
function parseBaggageHeader(baggageHeader) {
	if (!baggageHeader || !isString(baggageHeader) && !Array.isArray(baggageHeader)) return;
	if (Array.isArray(baggageHeader)) return baggageHeader.reduce((acc, curr) => {
		const currBaggageObject = baggageHeaderToObject(curr);
		Object.entries(currBaggageObject).forEach(([key, value]) => {
			acc[key] = value;
		});
		return acc;
	}, {});
	return baggageHeaderToObject(baggageHeader);
}
/**
* Will parse a baggage header, which is a simple key-value map, into a flat object.
*
* @param baggageHeader The baggage header to parse.
* @returns a flat object containing all the key-value pairs from `baggageHeader`.
*/
function baggageHeaderToObject(baggageHeader) {
	return baggageHeader.split(",").map((baggageEntry) => baggageEntry.split("=").map((keyOrValue) => decodeURIComponent(keyOrValue.trim()))).reduce((acc, [key, value]) => {
		if (key && value) acc[key] = value;
		return acc;
	}, {});
}
var hasShownSpanDropWarning = false;
/**
* Convert a span to a trace context, which can be sent as the `trace` context in a non-transaction event.
*/
function spanToTraceContext(span) {
	const { spanId, traceId: trace_id, isRemote } = span.spanContext();
	const parent_span_id = isRemote ? spanId : spanToJSON(span).parent_span_id;
	const span_id = isRemote ? generateSpanId() : spanId;
	return dropUndefinedKeys({
		parent_span_id,
		span_id,
		trace_id
	});
}
/**
* Convert a span time input into a timestamp in seconds.
*/
function spanTimeInputToSeconds(input) {
	if (typeof input === "number") return ensureTimestampInSeconds(input);
	if (Array.isArray(input)) return input[0] + input[1] / 1e9;
	if (input instanceof Date) return ensureTimestampInSeconds(input.getTime());
	return timestampInSeconds();
}
/**
* Converts a timestamp to second, if it was in milliseconds, or keeps it as second.
*/
function ensureTimestampInSeconds(timestamp) {
	return timestamp > 9999999999 ? timestamp / 1e3 : timestamp;
}
/**
* Convert a span to a JSON representation.
*/
function spanToJSON(span) {
	if (spanIsSentrySpan(span)) return span.getSpanJSON();
	try {
		const { spanId: span_id, traceId: trace_id } = span.spanContext();
		if (spanIsOpenTelemetrySdkTraceBaseSpan(span)) {
			const { attributes, startTime, name, endTime, parentSpanId, status } = span;
			return dropUndefinedKeys({
				span_id,
				trace_id,
				data: attributes,
				description: name,
				parent_span_id: parentSpanId,
				start_timestamp: spanTimeInputToSeconds(startTime),
				timestamp: spanTimeInputToSeconds(endTime) || void 0,
				status: getStatusMessage(status),
				op: attributes[SEMANTIC_ATTRIBUTE_SENTRY_OP],
				origin: attributes[SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN],
				_metrics_summary: getMetricSummaryJsonForSpan(span)
			});
		}
		return {
			span_id,
			trace_id
		};
	} catch (e) {
		return {};
	}
}
function spanIsOpenTelemetrySdkTraceBaseSpan(span) {
	const castSpan = span;
	return !!castSpan.attributes && !!castSpan.startTime && !!castSpan.name && !!castSpan.endTime && !!castSpan.status;
}
/** Exported only for tests. */
/**
* Sadly, due to circular dependency checks we cannot actually import the Span class here and check for instanceof.
* :( So instead we approximate this by checking if it has the `getSpanJSON` method.
*/
function spanIsSentrySpan(span) {
	return typeof span.getSpanJSON === "function";
}
/**
* Returns true if a span is sampled.
* In most cases, you should just use `span.isRecording()` instead.
* However, this has a slightly different semantic, as it also returns false if the span is finished.
* So in the case where this distinction is important, use this method.
*/
function spanIsSampled(span) {
	const { traceFlags } = span.spanContext();
	return traceFlags === 1;
}
/** Get the status message to use for a JSON representation of a span. */
function getStatusMessage(status) {
	if (!status || status.code === 0) return;
	if (status.code === 1) return "ok";
	return status.message || "unknown_error";
}
var ROOT_SPAN_FIELD = "_sentryRootSpan";
/**
* Returns the root span of a given span.
*/
function getRootSpan(span) {
	return span[ROOT_SPAN_FIELD] || span;
}
/**
* Logs a warning once if `beforeSendSpan` is used to drop spans.
*
* todo(v9): Remove this once we've stopped dropping spans via `beforeSendSpan`.
*/
function showSpanDropWarning() {
	if (!hasShownSpanDropWarning) {
		consoleSandbox(() => {
			console.warn("[Sentry] Deprecation warning: Returning null from `beforeSendSpan` will be disallowed from SDK version 9.0.0 onwards. The callback will only support mutating spans. To drop certain spans, configure the respective integrations directly.");
		});
		hasShownSpanDropWarning = true;
	}
}
//#endregion
//#region node_modules/@sentry/core/build/esm/utils/hasTracingEnabled.js
/**
* Determines if tracing is currently enabled.
*
* Tracing is enabled when at least one of `tracesSampleRate` and `tracesSampler` is defined in the SDK config.
*/
function hasTracingEnabled(maybeOptions) {
	if (typeof __SENTRY_TRACING__ === "boolean" && !__SENTRY_TRACING__) return false;
	const client = getClient();
	const options = maybeOptions || client && client.getOptions();
	return !!options && (options.enableTracing || "tracesSampleRate" in options || "tracesSampler" in options);
}
//#endregion
//#region node_modules/@sentry/core/build/esm/constants.js
var DEFAULT_ENVIRONMENT = "production";
//#endregion
//#region node_modules/@sentry/core/build/esm/tracing/dynamicSamplingContext.js
/**
* If you change this value, also update the terser plugin config to
* avoid minification of the object property!
*/
var FROZEN_DSC_FIELD = "_frozenDsc";
/**
* Creates a dynamic sampling context from a client.
*
* Dispatches the `createDsc` lifecycle hook as a side effect.
*/
function getDynamicSamplingContextFromClient(trace_id, client) {
	const options = client.getOptions();
	const { publicKey: public_key } = client.getDsn() || {};
	const dsc = dropUndefinedKeys({
		environment: options.environment || "production",
		release: options.release,
		public_key,
		trace_id
	});
	client.emit("createDsc", dsc);
	return dsc;
}
/**
* Get the dynamic sampling context for the currently active scopes.
*/
function getDynamicSamplingContextFromScope(client, scope) {
	const propagationContext = scope.getPropagationContext();
	return propagationContext.dsc || getDynamicSamplingContextFromClient(propagationContext.traceId, client);
}
/**
* Creates a dynamic sampling context from a span (and client and scope)
*
* @param span the span from which a few values like the root span name and sample rate are extracted.
*
* @returns a dynamic sampling context
*/
function getDynamicSamplingContextFromSpan(span) {
	const client = getClient();
	if (!client) return {};
	const rootSpan = getRootSpan(span);
	const frozenDsc = rootSpan[FROZEN_DSC_FIELD];
	if (frozenDsc) return frozenDsc;
	const traceState = rootSpan.spanContext().traceState;
	const traceStateDsc = traceState && traceState.get("sentry.dsc");
	const dscOnTraceState = traceStateDsc && baggageHeaderToDynamicSamplingContext(traceStateDsc);
	if (dscOnTraceState) return dscOnTraceState;
	const dsc = getDynamicSamplingContextFromClient(span.spanContext().traceId, client);
	const jsonSpan = spanToJSON(rootSpan);
	const attributes = jsonSpan.data || {};
	const maybeSampleRate = attributes[SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE];
	if (maybeSampleRate != null) dsc.sample_rate = `${maybeSampleRate}`;
	const source = attributes[SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
	const name = jsonSpan.description;
	if (source !== "url" && name) dsc.transaction = name;
	if (hasTracingEnabled()) dsc.sampled = String(spanIsSampled(rootSpan));
	client.emit("createDsc", dsc, rootSpan);
	return dsc;
}
//#endregion
//#region node_modules/@sentry/core/build/esm/utils/parseSampleRate.js
/**
* Parse a sample rate from a given value.
* This will either return a boolean or number sample rate, if the sample rate is valid (between 0 and 1).
* If a string is passed, we try to convert it to a number.
*
* Any invalid sample rate will return `undefined`.
*/
function parseSampleRate(sampleRate) {
	if (typeof sampleRate === "boolean") return Number(sampleRate);
	const rate = typeof sampleRate === "string" ? parseFloat(sampleRate) : sampleRate;
	if (typeof rate !== "number" || isNaN(rate) || rate < 0 || rate > 1) {
		DEBUG_BUILD$1 && logger.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(sampleRate)} of type ${JSON.stringify(typeof sampleRate)}.`);
		return;
	}
	return rate;
}
//#endregion
//#region node_modules/@sentry/core/build/esm/utils-hoist/dsn.js
/** Regular expression used to parse a Dsn. */
var DSN_REGEX = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function isValidProtocol(protocol) {
	return protocol === "http" || protocol === "https";
}
/**
* Renders the string representation of this Dsn.
*
* By default, this will render the public representation without the password
* component. To get the deprecated private representation, set `withPassword`
* to true.
*
* @param withPassword When set to true, the password will be included.
*/
function dsnToString(dsn, withPassword = false) {
	const { host, path, pass, port, projectId, protocol, publicKey } = dsn;
	return `${protocol}://${publicKey}${withPassword && pass ? `:${pass}` : ""}@${host}${port ? `:${port}` : ""}/${path ? `${path}/` : path}${projectId}`;
}
/**
* Parses a Dsn from a given string.
*
* @param str A Dsn as string
* @returns Dsn as DsnComponents or undefined if @param str is not a valid DSN string
*/
function dsnFromString(str) {
	const match = DSN_REGEX.exec(str);
	if (!match) {
		consoleSandbox(() => {
			console.error(`Invalid Sentry Dsn: ${str}`);
		});
		return;
	}
	const [protocol, publicKey, pass = "", host = "", port = "", lastPath = ""] = match.slice(1);
	let path = "";
	let projectId = lastPath;
	const split = projectId.split("/");
	if (split.length > 1) {
		path = split.slice(0, -1).join("/");
		projectId = split.pop();
	}
	if (projectId) {
		const projectMatch = projectId.match(/^\d+/);
		if (projectMatch) projectId = projectMatch[0];
	}
	return dsnFromComponents({
		host,
		pass,
		path,
		projectId,
		port,
		protocol,
		publicKey
	});
}
function dsnFromComponents(components) {
	return {
		protocol: components.protocol,
		publicKey: components.publicKey || "",
		pass: components.pass || "",
		host: components.host,
		port: components.port || "",
		path: components.path || "",
		projectId: components.projectId
	};
}
function validateDsn(dsn) {
	if (!DEBUG_BUILD$2) return true;
	const { port, projectId, protocol } = dsn;
	if ([
		"protocol",
		"publicKey",
		"host",
		"projectId"
	].find((component) => {
		if (!dsn[component]) {
			logger.error(`Invalid Sentry Dsn: ${component} missing`);
			return true;
		}
		return false;
	})) return false;
	if (!projectId.match(/^\d+$/)) {
		logger.error(`Invalid Sentry Dsn: Invalid projectId ${projectId}`);
		return false;
	}
	if (!isValidProtocol(protocol)) {
		logger.error(`Invalid Sentry Dsn: Invalid protocol ${protocol}`);
		return false;
	}
	if (port && isNaN(parseInt(port, 10))) {
		logger.error(`Invalid Sentry Dsn: Invalid port ${port}`);
		return false;
	}
	return true;
}
/**
* Creates a valid Sentry Dsn object, identifying a Sentry instance and project.
* @returns a valid DsnComponents object or `undefined` if @param from is an invalid DSN source
*/
function makeDsn(from) {
	const components = typeof from === "string" ? dsnFromString(from) : dsnFromComponents(from);
	if (!components || !validateDsn(components)) return;
	return components;
}
//#endregion
//#region node_modules/@sentry/core/build/esm/utils-hoist/memo.js
/**
* Helper to decycle json objects
*
* @deprecated This function is deprecated and will be removed in the next major version.
*/
function memoBuilder() {
	const hasWeakSet = typeof WeakSet === "function";
	const inner = hasWeakSet ? /* @__PURE__ */ new WeakSet() : [];
	function memoize(obj) {
		if (hasWeakSet) {
			if (inner.has(obj)) return true;
			inner.add(obj);
			return false;
		}
		for (let i = 0; i < inner.length; i++) if (inner[i] === obj) return true;
		inner.push(obj);
		return false;
	}
	function unmemoize(obj) {
		if (hasWeakSet) inner.delete(obj);
		else for (let i = 0; i < inner.length; i++) if (inner[i] === obj) {
			inner.splice(i, 1);
			break;
		}
	}
	return [memoize, unmemoize];
}
//#endregion
//#region node_modules/@sentry/core/build/esm/utils-hoist/normalize.js
/**
* Recursively normalizes the given object.
*
* - Creates a copy to prevent original input mutation
* - Skips non-enumerable properties
* - When stringifying, calls `toJSON` if implemented
* - Removes circular references
* - Translates non-serializable values (`undefined`/`NaN`/functions) to serializable format
* - Translates known global objects/classes to a string representations
* - Takes care of `Error` object serialization
* - Optionally limits depth of final output
* - Optionally limits number of properties/elements included in any single object/array
*
* @param input The object to be normalized.
* @param depth The max depth to which to normalize the object. (Anything deeper stringified whole.)
* @param maxProperties The max number of elements or properties to be included in any single array or
* object in the normalized output.
* @returns A normalized version of the object, or `"**non-serializable**"` if any errors are thrown during normalization.
*/
function normalize(input, depth = 100, maxProperties = Infinity) {
	try {
		return visit("", input, depth, maxProperties);
	} catch (err) {
		return { ERROR: `**non-serializable** (${err})` };
	}
}
/** JSDoc */
function normalizeToSize(object, depth = 3, maxSize = 102400) {
	const normalized = normalize(object, depth);
	if (jsonSize(normalized) > maxSize) return normalizeToSize(object, depth - 1, maxSize);
	return normalized;
}
/**
* Visits a node to perform normalization on it
*
* @param key The key corresponding to the given node
* @param value The node to be visited
* @param depth Optional number indicating the maximum recursion depth
* @param maxProperties Optional maximum number of properties/elements included in any single object/array
* @param memo Optional Memo class handling decycling
*/
function visit(key, value, depth = Infinity, maxProperties = Infinity, memo = memoBuilder()) {
	const [memoize, unmemoize] = memo;
	if (value == null || ["boolean", "string"].includes(typeof value) || typeof value === "number" && Number.isFinite(value)) return value;
	const stringified = stringifyValue(key, value);
	if (!stringified.startsWith("[object ")) return stringified;
	if (value["__sentry_skip_normalization__"]) return value;
	const remainingDepth = typeof value["__sentry_override_normalization_depth__"] === "number" ? value["__sentry_override_normalization_depth__"] : depth;
	if (remainingDepth === 0) return stringified.replace("object ", "");
	if (memoize(value)) return "[Circular ~]";
	const valueWithToJSON = value;
	if (valueWithToJSON && typeof valueWithToJSON.toJSON === "function") try {
		return visit("", valueWithToJSON.toJSON(), remainingDepth - 1, maxProperties, memo);
	} catch (err) {}
	const normalized = Array.isArray(value) ? [] : {};
	let numAdded = 0;
	const visitable = convertToPlainObject(value);
	for (const visitKey in visitable) {
		if (!Object.prototype.hasOwnProperty.call(visitable, visitKey)) continue;
		if (numAdded >= maxProperties) {
			normalized[visitKey] = "[MaxProperties ~]";
			break;
		}
		const visitValue = visitable[visitKey];
		normalized[visitKey] = visit(visitKey, visitValue, remainingDepth - 1, maxProperties, memo);
		numAdded++;
	}
	unmemoize(value);
	return normalized;
}
/**
* Stringify the given value. Handles various known special values and types.
*
* Not meant to be used on simple primitives which already have a string representation, as it will, for example, turn
* the number 1231 into "[Object Number]", nor on `null`, as it will throw.
*
* @param value The value to stringify
* @returns A stringified representation of the given value
*/
function stringifyValue(key, value) {
	try {
		if (key === "domain" && value && typeof value === "object" && value._events) return "[Domain]";
		if (key === "domainEmitter") return "[DomainEmitter]";
		if (typeof global !== "undefined" && value === global) return "[Global]";
		if (typeof window !== "undefined" && value === window) return "[Window]";
		if (typeof document !== "undefined" && value === document) return "[Document]";
		if (isVueViewModel(value)) return "[VueViewModel]";
		if (isSyntheticEvent(value)) return "[SyntheticEvent]";
		if (typeof value === "number" && !Number.isFinite(value)) return `[${value}]`;
		if (typeof value === "function") return `[Function: ${getFunctionName(value)}]`;
		if (typeof value === "symbol") return `[${String(value)}]`;
		if (typeof value === "bigint") return `[BigInt: ${String(value)}]`;
		const objName = getConstructorName(value);
		if (/^HTML(\w*)Element$/.test(objName)) return `[HTMLElement: ${objName}]`;
		return `[object ${objName}]`;
	} catch (err) {
		return `**non-serializable** (${err})`;
	}
}
function getConstructorName(value) {
	const prototype = Object.getPrototypeOf(value);
	return prototype ? prototype.constructor.name : "null prototype";
}
/** Calculates bytes size of input string */
function utf8Length(value) {
	return ~-encodeURI(value).split(/%..|./).length;
}
/** Calculates bytes size of input object */
function jsonSize(value) {
	return utf8Length(JSON.stringify(value));
}
//#endregion
//#region node_modules/@sentry/core/build/esm/utils-hoist/envelope.js
/**
* Creates an envelope.
* Make sure to always explicitly provide the generic to this function
* so that the envelope types resolve correctly.
*/
function createEnvelope(headers, items = []) {
	return [headers, items];
}
/**
* Add an item to an envelope.
* Make sure to always explicitly provide the generic to this function
* so that the envelope types resolve correctly.
*/
function addItemToEnvelope(envelope, newItem) {
	const [headers, items] = envelope;
	return [headers, [...items, newItem]];
}
/**
* Convenience function to loop through the items and item types of an envelope.
* (This function was mostly created because working with envelope types is painful at the moment)
*
* If the callback returns true, the rest of the items will be skipped.
*/
function forEachEnvelopeItem(envelope, callback) {
	const envelopeItems = envelope[1];
	for (const envelopeItem of envelopeItems) {
		const envelopeItemType = envelopeItem[0].type;
		if (callback(envelopeItem, envelopeItemType)) return true;
	}
	return false;
}
/**
* Encode a string to UTF8 array.
*/
function encodeUTF8(input) {
	return GLOBAL_OBJ.__SENTRY__ && GLOBAL_OBJ.__SENTRY__.encodePolyfill ? GLOBAL_OBJ.__SENTRY__.encodePolyfill(input) : new TextEncoder().encode(input);
}
/**
* Serializes an envelope.
*/
function serializeEnvelope(envelope) {
	const [envHeaders, items] = envelope;
	let parts = JSON.stringify(envHeaders);
	function append(next) {
		if (typeof parts === "string") parts = typeof next === "string" ? parts + next : [encodeUTF8(parts), next];
		else parts.push(typeof next === "string" ? encodeUTF8(next) : next);
	}
	for (const item of items) {
		const [itemHeaders, payload] = item;
		append(`\n${JSON.stringify(itemHeaders)}\n`);
		if (typeof payload === "string" || payload instanceof Uint8Array) append(payload);
		else {
			let stringifiedPayload;
			try {
				stringifiedPayload = JSON.stringify(payload);
			} catch (e) {
				stringifiedPayload = JSON.stringify(normalize(payload));
			}
			append(stringifiedPayload);
		}
	}
	return typeof parts === "string" ? parts : concatBuffers(parts);
}
function concatBuffers(buffers) {
	const totalLength = buffers.reduce((acc, buf) => acc + buf.length, 0);
	const merged = new Uint8Array(totalLength);
	let offset = 0;
	for (const buffer of buffers) {
		merged.set(buffer, offset);
		offset += buffer.length;
	}
	return merged;
}
/**
* Creates attachment envelope items
*/
function createAttachmentEnvelopeItem(attachment) {
	const buffer = typeof attachment.data === "string" ? encodeUTF8(attachment.data) : attachment.data;
	return [dropUndefinedKeys({
		type: "attachment",
		length: buffer.length,
		filename: attachment.filename,
		content_type: attachment.contentType,
		attachment_type: attachment.attachmentType
	}), buffer];
}
var ITEM_TYPE_TO_DATA_CATEGORY_MAP = {
	session: "session",
	sessions: "session",
	attachment: "attachment",
	transaction: "transaction",
	event: "error",
	client_report: "internal",
	user_report: "default",
	profile: "profile",
	profile_chunk: "profile",
	replay_event: "replay",
	replay_recording: "replay",
	check_in: "monitor",
	feedback: "feedback",
	span: "span",
	statsd: "metric_bucket",
	raw_security: "security"
};
/**
* Maps the type of an envelope item to a data category.
*/
function envelopeItemTypeToDataCategory(type) {
	return ITEM_TYPE_TO_DATA_CATEGORY_MAP[type];
}
/** Extracts the minimal SDK info from the metadata or an events */
function getSdkMetadataForEnvelopeHeader(metadataOrEvent) {
	if (!metadataOrEvent || !metadataOrEvent.sdk) return;
	const { name, version } = metadataOrEvent.sdk;
	return {
		name,
		version
	};
}
/**
* Creates event envelope headers, based on event, sdk info and tunnel
* Note: This function was extracted from the core package to make it available in Replay
*/
function createEventEnvelopeHeaders(event, sdkInfo, tunnel, dsn) {
	const dynamicSamplingContext = event.sdkProcessingMetadata && event.sdkProcessingMetadata.dynamicSamplingContext;
	return {
		event_id: event.event_id,
		sent_at: (/* @__PURE__ */ new Date()).toISOString(),
		...sdkInfo && { sdk: sdkInfo },
		...!!tunnel && dsn && { dsn: dsnToString(dsn) },
		...dynamicSamplingContext && { trace: dropUndefinedKeys({ ...dynamicSamplingContext }) }
	};
}
//#endregion
//#region node_modules/@sentry/core/build/esm/envelope.js
/**
* Apply SdkInfo (name, version, packages, integrations) to the corresponding event key.
* Merge with existing data if any.
**/
function enhanceEventWithSdkInfo(event, sdkInfo) {
	if (!sdkInfo) return event;
	event.sdk = event.sdk || {};
	event.sdk.name = event.sdk.name || sdkInfo.name;
	event.sdk.version = event.sdk.version || sdkInfo.version;
	event.sdk.integrations = [...event.sdk.integrations || [], ...sdkInfo.integrations || []];
	event.sdk.packages = [...event.sdk.packages || [], ...sdkInfo.packages || []];
	return event;
}
/** Creates an envelope from a Session */
function createSessionEnvelope(session, dsn, metadata, tunnel) {
	const sdkInfo = getSdkMetadataForEnvelopeHeader(metadata);
	return createEnvelope({
		sent_at: (/* @__PURE__ */ new Date()).toISOString(),
		...sdkInfo && { sdk: sdkInfo },
		...!!tunnel && dsn && { dsn: dsnToString(dsn) }
	}, ["aggregates" in session ? [{ type: "sessions" }, session] : [{ type: "session" }, session.toJSON()]]);
}
/**
* Create an Envelope from an event.
*/
function createEventEnvelope(event, dsn, metadata, tunnel) {
	const sdkInfo = getSdkMetadataForEnvelopeHeader(metadata);
	const eventType = event.type && event.type !== "replay_event" ? event.type : "event";
	enhanceEventWithSdkInfo(event, metadata && metadata.sdk);
	const envelopeHeaders = createEventEnvelopeHeaders(event, sdkInfo, tunnel, dsn);
	delete event.sdkProcessingMetadata;
	return createEnvelope(envelopeHeaders, [[{ type: eventType }, event]]);
}
//#endregion
//#region node_modules/@sentry/core/build/esm/eventProcessors.js
/**
* Process an array of event processors, returning the processed event (or `null` if the event was dropped).
*/
function notifyEventProcessors(processors, event, hint, index = 0) {
	return new SyncPromise((resolve, reject) => {
		const processor = processors[index];
		if (event === null || typeof processor !== "function") resolve(event);
		else {
			const result = processor({ ...event }, hint);
			DEBUG_BUILD$1 && processor.id && result === null && logger.log(`Event processor "${processor.id}" dropped event`);
			if (isThenable(result)) result.then((final) => notifyEventProcessors(processors, final, hint, index + 1).then(resolve)).then(null, reject);
			else notifyEventProcessors(processors, result, hint, index + 1).then(resolve).then(null, reject);
		}
	});
}
//#endregion
//#region node_modules/@sentry/core/build/esm/utils-hoist/debug-ids.js
var parsedStackResults;
var lastKeysCount;
var cachedFilenameDebugIds;
/**
* Returns a map of filenames to debug identifiers.
*/
function getFilenameToDebugIdMap(stackParser) {
	const debugIdMap = GLOBAL_OBJ._sentryDebugIds;
	if (!debugIdMap) return {};
	const debugIdKeys = Object.keys(debugIdMap);
	if (cachedFilenameDebugIds && debugIdKeys.length === lastKeysCount) return cachedFilenameDebugIds;
	lastKeysCount = debugIdKeys.length;
	cachedFilenameDebugIds = debugIdKeys.reduce((acc, stackKey) => {
		if (!parsedStackResults) parsedStackResults = {};
		const result = parsedStackResults[stackKey];
		if (result) acc[result[0]] = result[1];
		else {
			const parsedStack = stackParser(stackKey);
			for (let i = parsedStack.length - 1; i >= 0; i--) {
				const stackFrame = parsedStack[i];
				const filename = stackFrame && stackFrame.filename;
				const debugId = debugIdMap[stackKey];
				if (filename && debugId) {
					acc[filename] = debugId;
					parsedStackResults[stackKey] = [filename, debugId];
					break;
				}
			}
		}
		return acc;
	}, {});
	return cachedFilenameDebugIds;
}
//#endregion
//#region node_modules/@sentry/core/build/esm/utils/applyScopeDataToEvent.js
/**
* Applies data from the scope to the event and runs all event processors on it.
*/
function applyScopeDataToEvent(event, data) {
	const { fingerprint, span, breadcrumbs, sdkProcessingMetadata } = data;
	applyDataToEvent(event, data);
	if (span) applySpanToEvent(event, span);
	applyFingerprintToEvent(event, fingerprint);
	applyBreadcrumbsToEvent(event, breadcrumbs);
	applySdkMetadataToEvent(event, sdkProcessingMetadata);
}
/** Merge data of two scopes together. */
function mergeScopeData(data, mergeData) {
	const { extra, tags, user, contexts, level, sdkProcessingMetadata, breadcrumbs, fingerprint, eventProcessors, attachments, propagationContext, transactionName, span } = mergeData;
	mergeAndOverwriteScopeData(data, "extra", extra);
	mergeAndOverwriteScopeData(data, "tags", tags);
	mergeAndOverwriteScopeData(data, "user", user);
	mergeAndOverwriteScopeData(data, "contexts", contexts);
	data.sdkProcessingMetadata = merge(data.sdkProcessingMetadata, sdkProcessingMetadata, 2);
	if (level) data.level = level;
	if (transactionName) data.transactionName = transactionName;
	if (span) data.span = span;
	if (breadcrumbs.length) data.breadcrumbs = [...data.breadcrumbs, ...breadcrumbs];
	if (fingerprint.length) data.fingerprint = [...data.fingerprint, ...fingerprint];
	if (eventProcessors.length) data.eventProcessors = [...data.eventProcessors, ...eventProcessors];
	if (attachments.length) data.attachments = [...data.attachments, ...attachments];
	data.propagationContext = {
		...data.propagationContext,
		...propagationContext
	};
}
/**
* Merges certain scope data. Undefined values will overwrite any existing values.
* Exported only for tests.
*/
function mergeAndOverwriteScopeData(data, prop, mergeVal) {
	data[prop] = merge(data[prop], mergeVal, 1);
}
function applyDataToEvent(event, data) {
	const { extra, tags, user, contexts, level, transactionName } = data;
	const cleanedExtra = dropUndefinedKeys(extra);
	if (cleanedExtra && Object.keys(cleanedExtra).length) event.extra = {
		...cleanedExtra,
		...event.extra
	};
	const cleanedTags = dropUndefinedKeys(tags);
	if (cleanedTags && Object.keys(cleanedTags).length) event.tags = {
		...cleanedTags,
		...event.tags
	};
	const cleanedUser = dropUndefinedKeys(user);
	if (cleanedUser && Object.keys(cleanedUser).length) event.user = {
		...cleanedUser,
		...event.user
	};
	const cleanedContexts = dropUndefinedKeys(contexts);
	if (cleanedContexts && Object.keys(cleanedContexts).length) event.contexts = {
		...cleanedContexts,
		...event.contexts
	};
	if (level) event.level = level;
	if (transactionName && event.type !== "transaction") event.transaction = transactionName;
}
function applyBreadcrumbsToEvent(event, breadcrumbs) {
	const mergedBreadcrumbs = [...event.breadcrumbs || [], ...breadcrumbs];
	event.breadcrumbs = mergedBreadcrumbs.length ? mergedBreadcrumbs : void 0;
}
function applySdkMetadataToEvent(event, sdkProcessingMetadata) {
	event.sdkProcessingMetadata = {
		...event.sdkProcessingMetadata,
		...sdkProcessingMetadata
	};
}
function applySpanToEvent(event, span) {
	event.contexts = {
		trace: spanToTraceContext(span),
		...event.contexts
	};
	event.sdkProcessingMetadata = {
		dynamicSamplingContext: getDynamicSamplingContextFromSpan(span),
		...event.sdkProcessingMetadata
	};
	const transactionName = spanToJSON(getRootSpan(span)).description;
	if (transactionName && !event.transaction && event.type === "transaction") event.transaction = transactionName;
}
/**
* Applies fingerprint from the scope to the event if there's one,
* uses message if there's one instead or get rid of empty fingerprint
*/
function applyFingerprintToEvent(event, fingerprint) {
	event.fingerprint = event.fingerprint ? Array.isArray(event.fingerprint) ? event.fingerprint : [event.fingerprint] : [];
	if (fingerprint) event.fingerprint = event.fingerprint.concat(fingerprint);
	if (event.fingerprint && !event.fingerprint.length) delete event.fingerprint;
}
//#endregion
//#region node_modules/@sentry/core/build/esm/utils/prepareEvent.js
/**
* This type makes sure that we get either a CaptureContext, OR an EventHint.
* It does not allow mixing them, which could lead to unexpected outcomes, e.g. this is disallowed:
* { user: { id: '123' }, mechanism: { handled: false } }
*/
/**
* Adds common information to events.
*
* The information includes release and environment from `options`,
* breadcrumbs and context (extra, tags and user) from the scope.
*
* Information that is already present in the event is never overwritten. For
* nested objects, such as the context, keys are merged.
*
* @param event The original event.
* @param hint May contain additional information about the original exception.
* @param scope A scope containing event metadata.
* @returns A new event with more information.
* @hidden
*/
function prepareEvent(options, event, hint, scope, client, isolationScope) {
	const { normalizeDepth = 3, normalizeMaxBreadth = 1e3 } = options;
	const prepared = {
		...event,
		event_id: event.event_id || hint.event_id || uuid4(),
		timestamp: event.timestamp || dateTimestampInSeconds()
	};
	const integrations = hint.integrations || options.integrations.map((i) => i.name);
	applyClientOptions(prepared, options);
	applyIntegrationsMetadata(prepared, integrations);
	if (client) client.emit("applyFrameMetadata", event);
	if (event.type === void 0) applyDebugIds(prepared, options.stackParser);
	const finalScope = getFinalScope(scope, hint.captureContext);
	if (hint.mechanism) addExceptionMechanism(prepared, hint.mechanism);
	const clientEventProcessors = client ? client.getEventProcessors() : [];
	const data = getGlobalScope().getScopeData();
	if (isolationScope) mergeScopeData(data, isolationScope.getScopeData());
	if (finalScope) mergeScopeData(data, finalScope.getScopeData());
	const attachments = [...hint.attachments || [], ...data.attachments];
	if (attachments.length) hint.attachments = attachments;
	applyScopeDataToEvent(prepared, data);
	return notifyEventProcessors([...clientEventProcessors, ...data.eventProcessors], prepared, hint).then((evt) => {
		if (evt) applyDebugMeta(evt);
		if (typeof normalizeDepth === "number" && normalizeDepth > 0) return normalizeEvent(evt, normalizeDepth, normalizeMaxBreadth);
		return evt;
	});
}
/**
* Enhances event using the client configuration.
* It takes care of all "static" values like environment, release and `dist`,
* as well as truncating overly long values.
*
* Only exported for tests.
*
* @param event event instance to be enhanced
*/
function applyClientOptions(event, options) {
	const { environment, release, dist, maxValueLength = 250 } = options;
	event.environment = event.environment || environment || "production";
	if (!event.release && release) event.release = release;
	if (!event.dist && dist) event.dist = dist;
	if (event.message) event.message = truncate(event.message, maxValueLength);
	const exception = event.exception && event.exception.values && event.exception.values[0];
	if (exception && exception.value) exception.value = truncate(exception.value, maxValueLength);
	const request = event.request;
	if (request && request.url) request.url = truncate(request.url, maxValueLength);
}
/**
* Puts debug IDs into the stack frames of an error event.
*/
function applyDebugIds(event, stackParser) {
	const filenameDebugIdMap = getFilenameToDebugIdMap(stackParser);
	try {
		event.exception.values.forEach((exception) => {
			exception.stacktrace.frames.forEach((frame) => {
				if (filenameDebugIdMap && frame.filename) frame.debug_id = filenameDebugIdMap[frame.filename];
			});
		});
	} catch (e) {}
}
/**
* Moves debug IDs from the stack frames of an error event into the debug_meta field.
*/
function applyDebugMeta(event) {
	const filenameDebugIdMap = {};
	try {
		event.exception.values.forEach((exception) => {
			exception.stacktrace.frames.forEach((frame) => {
				if (frame.debug_id) {
					if (frame.abs_path) filenameDebugIdMap[frame.abs_path] = frame.debug_id;
					else if (frame.filename) filenameDebugIdMap[frame.filename] = frame.debug_id;
					delete frame.debug_id;
				}
			});
		});
	} catch (e) {}
	if (Object.keys(filenameDebugIdMap).length === 0) return;
	event.debug_meta = event.debug_meta || {};
	event.debug_meta.images = event.debug_meta.images || [];
	const images = event.debug_meta.images;
	Object.entries(filenameDebugIdMap).forEach(([filename, debug_id]) => {
		images.push({
			type: "sourcemap",
			code_file: filename,
			debug_id
		});
	});
}
/**
* This function adds all used integrations to the SDK info in the event.
* @param event The event that will be filled with all integrations.
*/
function applyIntegrationsMetadata(event, integrationNames) {
	if (integrationNames.length > 0) {
		event.sdk = event.sdk || {};
		event.sdk.integrations = [...event.sdk.integrations || [], ...integrationNames];
	}
}
/**
* Applies `normalize` function on necessary `Event` attributes to make them safe for serialization.
* Normalized keys:
* - `breadcrumbs.data`
* - `user`
* - `contexts`
* - `extra`
* @param event Event
* @returns Normalized event
*/
function normalizeEvent(event, depth, maxBreadth) {
	if (!event) return null;
	const normalized = {
		...event,
		...event.breadcrumbs && { breadcrumbs: event.breadcrumbs.map((b) => ({
			...b,
			...b.data && { data: normalize(b.data, depth, maxBreadth) }
		})) },
		...event.user && { user: normalize(event.user, depth, maxBreadth) },
		...event.contexts && { contexts: normalize(event.contexts, depth, maxBreadth) },
		...event.extra && { extra: normalize(event.extra, depth, maxBreadth) }
	};
	if (event.contexts && event.contexts.trace && normalized.contexts) {
		normalized.contexts.trace = event.contexts.trace;
		if (event.contexts.trace.data) normalized.contexts.trace.data = normalize(event.contexts.trace.data, depth, maxBreadth);
	}
	if (event.spans) normalized.spans = event.spans.map((span) => {
		return {
			...span,
			...span.data && { data: normalize(span.data, depth, maxBreadth) }
		};
	});
	if (event.contexts && event.contexts.flags && normalized.contexts) normalized.contexts.flags = normalize(event.contexts.flags, 3, maxBreadth);
	return normalized;
}
function getFinalScope(scope, captureContext) {
	if (!captureContext) return scope;
	const finalScope = scope ? scope.clone() : new Scope();
	finalScope.update(captureContext);
	return finalScope;
}
/**
* Parse either an `EventHint` directly, or convert a `CaptureContext` to an `EventHint`.
* This is used to allow to update method signatures that used to accept a `CaptureContext` but should now accept an `EventHint`.
*/
function parseEventHintOrCaptureContext(hint) {
	if (!hint) return;
	if (hintIsScopeOrFunction(hint)) return { captureContext: hint };
	if (hintIsScopeContext(hint)) return { captureContext: hint };
	return hint;
}
function hintIsScopeOrFunction(hint) {
	return hint instanceof Scope || typeof hint === "function";
}
var captureContextKeys = [
	"user",
	"level",
	"extra",
	"contexts",
	"tags",
	"fingerprint",
	"requestSession",
	"propagationContext"
];
function hintIsScopeContext(hint) {
	return Object.keys(hint).some((key) => captureContextKeys.includes(key));
}
//#endregion
//#region node_modules/@sentry/core/build/esm/exports.js
/**
* Captures an exception event and sends it to Sentry.
*
* @param exception The exception to capture.
* @param hint Optional additional data to attach to the Sentry event.
* @returns the id of the captured Sentry event.
*/
function captureException(exception, hint) {
	return getCurrentScope().captureException(exception, parseEventHintOrCaptureContext(hint));
}
/**
* Captures a manually created event and sends it to Sentry.
*
* @param event The event to send to Sentry.
* @param hint Optional additional data to attach to the Sentry event.
* @returns the id of the captured event.
*/
function captureEvent(event, hint) {
	return getCurrentScope().captureEvent(event, hint);
}
/**
* Sets context data with the given name.
* @param name of the context
* @param context Any kind of data. This data will be normalized.
*/
function setContext(name, context) {
	getIsolationScope().setContext(name, context);
}
/**
* Returns true if Sentry has been properly initialized.
*/
function isInitialized() {
	return !!getClient();
}
/**
* Start a session on the current isolation scope.
*
* @param context (optional) additional properties to be applied to the returned session object
*
* @returns the new active session
*/
function startSession(context) {
	const client = getClient();
	const isolationScope = getIsolationScope();
	const currentScope = getCurrentScope();
	const { release, environment = DEFAULT_ENVIRONMENT } = client && client.getOptions() || {};
	const { userAgent } = GLOBAL_OBJ.navigator || {};
	const session = makeSession({
		release,
		environment,
		user: currentScope.getUser() || isolationScope.getUser(),
		...userAgent && { userAgent },
		...context
	});
	const currentSession = isolationScope.getSession();
	if (currentSession && currentSession.status === "ok") updateSession(currentSession, { status: "exited" });
	endSession();
	isolationScope.setSession(session);
	currentScope.setSession(session);
	return session;
}
/**
* End the session on the current isolation scope.
*/
function endSession() {
	const isolationScope = getIsolationScope();
	const currentScope = getCurrentScope();
	const session = currentScope.getSession() || isolationScope.getSession();
	if (session) closeSession(session);
	_sendSessionUpdate();
	isolationScope.setSession();
	currentScope.setSession();
}
/**
* Sends the current Session on the scope
*/
function _sendSessionUpdate() {
	const isolationScope = getIsolationScope();
	const currentScope = getCurrentScope();
	const client = getClient();
	const session = currentScope.getSession() || isolationScope.getSession();
	if (session && client) client.captureSession(session);
}
/**
* Sends the current session on the scope to Sentry
*
* @param end If set the session will be marked as exited and removed from the scope.
*            Defaults to `false`.
*/
function captureSession(end = false) {
	if (end) {
		endSession();
		return;
	}
	_sendSessionUpdate();
}
//#endregion
//#region node_modules/@sentry/core/build/esm/api.js
var SENTRY_API_VERSION = "7";
/** Returns the prefix to construct Sentry ingestion API endpoints. */
function getBaseApiEndpoint(dsn) {
	const protocol = dsn.protocol ? `${dsn.protocol}:` : "";
	const port = dsn.port ? `:${dsn.port}` : "";
	return `${protocol}//${dsn.host}${port}${dsn.path ? `/${dsn.path}` : ""}/api/`;
}
/** Returns the ingest API endpoint for target. */
function _getIngestEndpoint(dsn) {
	return `${getBaseApiEndpoint(dsn)}${dsn.projectId}/envelope/`;
}
/** Returns a URL-encoded string with auth config suitable for a query string. */
function _encodedAuth(dsn, sdkInfo) {
	const params = { sentry_version: SENTRY_API_VERSION };
	if (dsn.publicKey) params.sentry_key = dsn.publicKey;
	if (sdkInfo) params.sentry_client = `${sdkInfo.name}/${sdkInfo.version}`;
	return new URLSearchParams(params).toString();
}
/**
* Returns the envelope endpoint URL with auth in the query string.
*
* Sending auth as part of the query string and not as custom HTTP headers avoids CORS preflight requests.
*/
function getEnvelopeEndpointWithUrlEncodedAuth(dsn, tunnel, sdkInfo) {
	return tunnel ? tunnel : `${_getIngestEndpoint(dsn)}?${_encodedAuth(dsn, sdkInfo)}`;
}
//#endregion
//#region node_modules/@sentry/core/build/esm/integration.js
var installedIntegrations = [];
/** Map of integrations assigned to a client */
/**
* Remove duplicates from the given array, preferring the last instance of any duplicate. Not guaranteed to
* preserve the order of integrations in the array.
*
* @private
*/
function filterDuplicates(integrations) {
	const integrationsByName = {};
	integrations.forEach((currentInstance) => {
		const { name } = currentInstance;
		const existingInstance = integrationsByName[name];
		if (existingInstance && !existingInstance.isDefaultInstance && currentInstance.isDefaultInstance) return;
		integrationsByName[name] = currentInstance;
	});
	return Object.values(integrationsByName);
}
/** Gets integrations to install */
function getIntegrationsToSetup(options) {
	const defaultIntegrations = options.defaultIntegrations || [];
	const userIntegrations = options.integrations;
	defaultIntegrations.forEach((integration) => {
		integration.isDefaultInstance = true;
	});
	let integrations;
	if (Array.isArray(userIntegrations)) integrations = [...defaultIntegrations, ...userIntegrations];
	else if (typeof userIntegrations === "function") {
		const resolvedUserIntegrations = userIntegrations(defaultIntegrations);
		integrations = Array.isArray(resolvedUserIntegrations) ? resolvedUserIntegrations : [resolvedUserIntegrations];
	} else integrations = defaultIntegrations;
	const finalIntegrations = filterDuplicates(integrations);
	const debugIndex = finalIntegrations.findIndex((integration) => integration.name === "Debug");
	if (debugIndex > -1) {
		const [debugInstance] = finalIntegrations.splice(debugIndex, 1);
		finalIntegrations.push(debugInstance);
	}
	return finalIntegrations;
}
/**
* Given a list of integration instances this installs them all. When `withDefaults` is set to `true` then all default
* integrations are added unless they were already provided before.
* @param integrations array of integration instances
* @param withDefault should enable default integrations
*/
function setupIntegrations(client, integrations) {
	const integrationIndex = {};
	integrations.forEach((integration) => {
		if (integration) setupIntegration(client, integration, integrationIndex);
	});
	return integrationIndex;
}
/**
* Execute the `afterAllSetup` hooks of the given integrations.
*/
function afterSetupIntegrations(client, integrations) {
	for (const integration of integrations) if (integration && integration.afterAllSetup) integration.afterAllSetup(client);
}
/** Setup a single integration.  */
function setupIntegration(client, integration, integrationIndex) {
	if (integrationIndex[integration.name]) {
		DEBUG_BUILD$1 && logger.log(`Integration skipped because it was already installed: ${integration.name}`);
		return;
	}
	integrationIndex[integration.name] = integration;
	if (installedIntegrations.indexOf(integration.name) === -1 && typeof integration.setupOnce === "function") {
		integration.setupOnce();
		installedIntegrations.push(integration.name);
	}
	if (integration.setup && typeof integration.setup === "function") integration.setup(client);
	if (typeof integration.preprocessEvent === "function") {
		const callback = integration.preprocessEvent.bind(integration);
		client.on("preprocessEvent", (event, hint) => callback(event, hint, client));
	}
	if (typeof integration.processEvent === "function") {
		const callback = integration.processEvent.bind(integration);
		const processor = Object.assign((event, hint) => callback(event, hint, client), { id: integration.name });
		client.addEventProcessor(processor);
	}
	DEBUG_BUILD$1 && logger.log(`Integration installed: ${integration.name}`);
}
/**
* Define an integration function that can be used to create an integration instance.
* Note that this by design hides the implementation details of the integration, as they are considered internal.
*/
function defineIntegration(fn) {
	return fn;
}
//#endregion
//#region node_modules/@sentry/core/build/esm/utils-hoist/clientreport.js
/**
* Creates client report envelope
* @param discarded_events An array of discard events
* @param dsn A DSN that can be set on the header. Optional.
*/
function createClientReportEnvelope(discarded_events, dsn, timestamp) {
	const clientReportItem = [{ type: "client_report" }, {
		timestamp: timestamp || dateTimestampInSeconds(),
		discarded_events
	}];
	return createEnvelope(dsn ? { dsn } : {}, [clientReportItem]);
}
//#endregion
//#region node_modules/@sentry/core/build/esm/utils-hoist/error.js
/** An error emitted by Sentry SDKs and related utilities. */
var SentryError = class extends Error {
	constructor(message, logLevel = "warn") {
		super(message);
		this.message = message;
		this.logLevel = logLevel;
	}
};
//#endregion
//#region node_modules/@sentry/core/build/esm/baseclient.js
var ALREADY_SEEN_ERROR = "Not capturing exception because it's already been captured.";
/**
* Base implementation for all JavaScript SDK clients.
*
* Call the constructor with the corresponding options
* specific to the client subclass. To access these options later, use
* {@link Client.getOptions}.
*
* If a Dsn is specified in the options, it will be parsed and stored. Use
* {@link Client.getDsn} to retrieve the Dsn at any moment. In case the Dsn is
* invalid, the constructor will throw a {@link SentryException}. Note that
* without a valid Dsn, the SDK will not send any events to Sentry.
*
* Before sending an event, it is passed through
* {@link BaseClient._prepareEvent} to add SDK information and scope data
* (breadcrumbs and context). To add more custom information, override this
* method and extend the resulting prepared event.
*
* To issue automatically created events (e.g. via instrumentation), use
* {@link Client.captureEvent}. It will prepare the event and pass it through
* the callback lifecycle. To issue auto-breadcrumbs, use
* {@link Client.addBreadcrumb}.
*
* @example
* class NodeClient extends BaseClient<NodeOptions> {
*   public constructor(options: NodeOptions) {
*     super(options);
*   }
*
*   // ...
* }
*/
var BaseClient = class {
	/** Options passed to the SDK. */
	/** The client Dsn, if specified in options. Without this Dsn, the SDK will be disabled. */
	/** Array of set up integrations. */
	/** Number of calls being processed */
	/** Holds flushable  */
	/**
	* Initializes this client instance.
	*
	* @param options Options for the client.
	*/
	constructor(options) {
		this._options = options;
		this._integrations = {};
		this._numProcessing = 0;
		this._outcomes = {};
		this._hooks = {};
		this._eventProcessors = [];
		if (options.dsn) this._dsn = makeDsn(options.dsn);
		else DEBUG_BUILD$1 && logger.warn("No DSN provided, client will not send events.");
		if (this._dsn) {
			const url = getEnvelopeEndpointWithUrlEncodedAuth(this._dsn, options.tunnel, options._metadata ? options._metadata.sdk : void 0);
			this._transport = options.transport({
				tunnel: this._options.tunnel,
				recordDroppedEvent: this.recordDroppedEvent.bind(this),
				...options.transportOptions,
				url
			});
		}
		const undefinedOption = [
			"enableTracing",
			"tracesSampleRate",
			"tracesSampler"
		].find((option) => option in options && options[option] == void 0);
		if (undefinedOption) consoleSandbox(() => {
			console.warn(`[Sentry] Deprecation warning: \`${undefinedOption}\` is set to undefined, which leads to tracing being enabled. In v9, a value of \`undefined\` will result in tracing being disabled.`);
		});
	}
	/**
	* @inheritDoc
	*/
	captureException(exception, hint, scope) {
		const eventId = uuid4();
		if (checkOrSetAlreadyCaught(exception)) {
			DEBUG_BUILD$1 && logger.log(ALREADY_SEEN_ERROR);
			return eventId;
		}
		const hintWithEventId = {
			event_id: eventId,
			...hint
		};
		this._process(this.eventFromException(exception, hintWithEventId).then((event) => this._captureEvent(event, hintWithEventId, scope)));
		return hintWithEventId.event_id;
	}
	/**
	* @inheritDoc
	*/
	captureMessage(message, level, hint, currentScope) {
		const hintWithEventId = {
			event_id: uuid4(),
			...hint
		};
		const eventMessage = isParameterizedString(message) ? message : String(message);
		const promisedEvent = isPrimitive(message) ? this.eventFromMessage(eventMessage, level, hintWithEventId) : this.eventFromException(message, hintWithEventId);
		this._process(promisedEvent.then((event) => this._captureEvent(event, hintWithEventId, currentScope)));
		return hintWithEventId.event_id;
	}
	/**
	* @inheritDoc
	*/
	captureEvent(event, hint, currentScope) {
		const eventId = uuid4();
		if (hint && hint.originalException && checkOrSetAlreadyCaught(hint.originalException)) {
			DEBUG_BUILD$1 && logger.log(ALREADY_SEEN_ERROR);
			return eventId;
		}
		const hintWithEventId = {
			event_id: eventId,
			...hint
		};
		const capturedSpanScope = (event.sdkProcessingMetadata || {}).capturedSpanScope;
		this._process(this._captureEvent(event, hintWithEventId, capturedSpanScope || currentScope));
		return hintWithEventId.event_id;
	}
	/**
	* @inheritDoc
	*/
	captureSession(session) {
		if (!(typeof session.release === "string")) DEBUG_BUILD$1 && logger.warn("Discarded session because of missing or non-string release");
		else {
			this.sendSession(session);
			updateSession(session, { init: false });
		}
	}
	/**
	* @inheritDoc
	*/
	getDsn() {
		return this._dsn;
	}
	/**
	* @inheritDoc
	*/
	getOptions() {
		return this._options;
	}
	/**
	* @see SdkMetadata
	*
	* @return The metadata of the SDK
	*/
	getSdkMetadata() {
		return this._options._metadata;
	}
	/**
	* @inheritDoc
	*/
	getTransport() {
		return this._transport;
	}
	/**
	* @inheritDoc
	*/
	flush(timeout) {
		const transport = this._transport;
		if (transport) {
			this.emit("flush");
			return this._isClientDoneProcessing(timeout).then((clientFinished) => {
				return transport.flush(timeout).then((transportFlushed) => clientFinished && transportFlushed);
			});
		} else return resolvedSyncPromise(true);
	}
	/**
	* @inheritDoc
	*/
	close(timeout) {
		return this.flush(timeout).then((result) => {
			this.getOptions().enabled = false;
			this.emit("close");
			return result;
		});
	}
	/** Get all installed event processors. */
	getEventProcessors() {
		return this._eventProcessors;
	}
	/** @inheritDoc */
	addEventProcessor(eventProcessor) {
		this._eventProcessors.push(eventProcessor);
	}
	/** @inheritdoc */
	init() {
		if (this._isEnabled() || this._options.integrations.some(({ name }) => name.startsWith("Spotlight"))) this._setupIntegrations();
	}
	/**
	* Gets an installed integration by its name.
	*
	* @returns The installed integration or `undefined` if no integration with that `name` was installed.
	*/
	getIntegrationByName(integrationName) {
		return this._integrations[integrationName];
	}
	/**
	* @inheritDoc
	*/
	addIntegration(integration) {
		const isAlreadyInstalled = this._integrations[integration.name];
		setupIntegration(this, integration, this._integrations);
		if (!isAlreadyInstalled) afterSetupIntegrations(this, [integration]);
	}
	/**
	* @inheritDoc
	*/
	sendEvent(event, hint = {}) {
		this.emit("beforeSendEvent", event, hint);
		let env = createEventEnvelope(event, this._dsn, this._options._metadata, this._options.tunnel);
		for (const attachment of hint.attachments || []) env = addItemToEnvelope(env, createAttachmentEnvelopeItem(attachment));
		const promise = this.sendEnvelope(env);
		if (promise) promise.then((sendResponse) => this.emit("afterSendEvent", event, sendResponse), null);
	}
	/**
	* @inheritDoc
	*/
	sendSession(session) {
		const env = createSessionEnvelope(session, this._dsn, this._options._metadata, this._options.tunnel);
		this.sendEnvelope(env);
	}
	/**
	* @inheritDoc
	*/
	recordDroppedEvent(reason, category, eventOrCount) {
		if (this._options.sendClientReports) {
			const count = typeof eventOrCount === "number" ? eventOrCount : 1;
			const key = `${reason}:${category}`;
			DEBUG_BUILD$1 && logger.log(`Recording outcome: "${key}"${count > 1 ? ` (${count} times)` : ""}`);
			this._outcomes[key] = (this._outcomes[key] || 0) + count;
		}
	}
	/** @inheritdoc */
	/** @inheritdoc */
	on(hook, callback) {
		const hooks = this._hooks[hook] = this._hooks[hook] || [];
		hooks.push(callback);
		return () => {
			const cbIndex = hooks.indexOf(callback);
			if (cbIndex > -1) hooks.splice(cbIndex, 1);
		};
	}
	/** @inheritdoc */
	/** @inheritdoc */
	emit(hook, ...rest) {
		const callbacks = this._hooks[hook];
		if (callbacks) callbacks.forEach((callback) => callback(...rest));
	}
	/**
	* @inheritdoc
	*/
	sendEnvelope(envelope) {
		this.emit("beforeEnvelope", envelope);
		if (this._isEnabled() && this._transport) return this._transport.send(envelope).then(null, (reason) => {
			DEBUG_BUILD$1 && logger.error("Error while sending envelope:", reason);
			return reason;
		});
		DEBUG_BUILD$1 && logger.error("Transport disabled");
		return resolvedSyncPromise({});
	}
	/** Setup integrations for this client. */
	_setupIntegrations() {
		const { integrations } = this._options;
		this._integrations = setupIntegrations(this, integrations);
		afterSetupIntegrations(this, integrations);
	}
	/** Updates existing session based on the provided event */
	_updateSessionFromEvent(session, event) {
		let crashed = event.level === "fatal";
		let errored = false;
		const exceptions = event.exception && event.exception.values;
		if (exceptions) {
			errored = true;
			for (const ex of exceptions) {
				const mechanism = ex.mechanism;
				if (mechanism && mechanism.handled === false) {
					crashed = true;
					break;
				}
			}
		}
		const sessionNonTerminal = session.status === "ok";
		if (sessionNonTerminal && session.errors === 0 || sessionNonTerminal && crashed) {
			updateSession(session, {
				...crashed && { status: "crashed" },
				errors: session.errors || Number(errored || crashed)
			});
			this.captureSession(session);
		}
	}
	/**
	* Determine if the client is finished processing. Returns a promise because it will wait `timeout` ms before saying
	* "no" (resolving to `false`) in order to give the client a chance to potentially finish first.
	*
	* @param timeout The time, in ms, after which to resolve to `false` if the client is still busy. Passing `0` (or not
	* passing anything) will make the promise wait as long as it takes for processing to finish before resolving to
	* `true`.
	* @returns A promise which will resolve to `true` if processing is already done or finishes before the timeout, and
	* `false` otherwise
	*/
	_isClientDoneProcessing(timeout) {
		return new SyncPromise((resolve) => {
			let ticked = 0;
			const tick = 1;
			const interval = setInterval(() => {
				if (this._numProcessing == 0) {
					clearInterval(interval);
					resolve(true);
				} else {
					ticked += tick;
					if (timeout && ticked >= timeout) {
						clearInterval(interval);
						resolve(false);
					}
				}
			}, tick);
		});
	}
	/** Determines whether this SDK is enabled and a transport is present. */
	_isEnabled() {
		return this.getOptions().enabled !== false && this._transport !== void 0;
	}
	/**
	* Adds common information to events.
	*
	* The information includes release and environment from `options`,
	* breadcrumbs and context (extra, tags and user) from the scope.
	*
	* Information that is already present in the event is never overwritten. For
	* nested objects, such as the context, keys are merged.
	*
	* @param event The original event.
	* @param hint May contain additional information about the original exception.
	* @param currentScope A scope containing event metadata.
	* @returns A new event with more information.
	*/
	_prepareEvent(event, hint, currentScope = getCurrentScope(), isolationScope = getIsolationScope()) {
		const options = this.getOptions();
		const integrations = Object.keys(this._integrations);
		if (!hint.integrations && integrations.length > 0) hint.integrations = integrations;
		this.emit("preprocessEvent", event, hint);
		if (!event.type) isolationScope.setLastEventId(event.event_id || hint.event_id);
		return prepareEvent(options, event, hint, currentScope, this, isolationScope).then((evt) => {
			if (evt === null) return evt;
			evt.contexts = {
				trace: getTraceContextFromScope(currentScope),
				...evt.contexts
			};
			evt.sdkProcessingMetadata = {
				dynamicSamplingContext: getDynamicSamplingContextFromScope(this, currentScope),
				...evt.sdkProcessingMetadata
			};
			return evt;
		});
	}
	/**
	* Processes the event and logs an error in case of rejection
	* @param event
	* @param hint
	* @param scope
	*/
	_captureEvent(event, hint = {}, scope) {
		return this._processEvent(event, hint, scope).then((finalEvent) => {
			return finalEvent.event_id;
		}, (reason) => {
			if (DEBUG_BUILD$1) if (reason instanceof SentryError && reason.logLevel === "log") logger.log(reason.message);
			else logger.warn(reason);
		});
	}
	/**
	* Processes an event (either error or message) and sends it to Sentry.
	*
	* This also adds breadcrumbs and context information to the event. However,
	* platform specific meta data (such as the User's IP address) must be added
	* by the SDK implementor.
	*
	*
	* @param event The event to send to Sentry.
	* @param hint May contain additional information about the original exception.
	* @param currentScope A scope containing event metadata.
	* @returns A SyncPromise that resolves with the event or rejects in case event was/will not be send.
	*/
	_processEvent(event, hint, currentScope) {
		const options = this.getOptions();
		const { sampleRate } = options;
		const isTransaction = isTransactionEvent(event);
		const isError = isErrorEvent(event);
		const eventType = event.type || "error";
		const beforeSendLabel = `before send for type \`${eventType}\``;
		const parsedSampleRate = typeof sampleRate === "undefined" ? void 0 : parseSampleRate(sampleRate);
		if (isError && typeof parsedSampleRate === "number" && Math.random() > parsedSampleRate) {
			this.recordDroppedEvent("sample_rate", "error", event);
			return rejectedSyncPromise(new SentryError(`Discarding event because it's not included in the random sample (sampling rate = ${sampleRate})`, "log"));
		}
		const dataCategory = eventType === "replay_event" ? "replay" : eventType;
		const capturedSpanIsolationScope = (event.sdkProcessingMetadata || {}).capturedSpanIsolationScope;
		return this._prepareEvent(event, hint, currentScope, capturedSpanIsolationScope).then((prepared) => {
			if (prepared === null) {
				this.recordDroppedEvent("event_processor", dataCategory, event);
				throw new SentryError("An event processor returned `null`, will not send event.", "log");
			}
			if (hint.data && hint.data.__sentry__ === true) return prepared;
			return _validateBeforeSendResult(processBeforeSend(this, options, prepared, hint), beforeSendLabel);
		}).then((processedEvent) => {
			if (processedEvent === null) {
				this.recordDroppedEvent("before_send", dataCategory, event);
				if (isTransaction) {
					const spanCount = 1 + (event.spans || []).length;
					this.recordDroppedEvent("before_send", "span", spanCount);
				}
				throw new SentryError(`${beforeSendLabel} returned \`null\`, will not send event.`, "log");
			}
			const session = currentScope && currentScope.getSession();
			if (!isTransaction && session) this._updateSessionFromEvent(session, processedEvent);
			if (isTransaction) {
				const droppedSpanCount = (processedEvent.sdkProcessingMetadata && processedEvent.sdkProcessingMetadata.spanCountBeforeProcessing || 0) - (processedEvent.spans ? processedEvent.spans.length : 0);
				if (droppedSpanCount > 0) this.recordDroppedEvent("before_send", "span", droppedSpanCount);
			}
			const transactionInfo = processedEvent.transaction_info;
			if (isTransaction && transactionInfo && processedEvent.transaction !== event.transaction) {
				const source = "custom";
				processedEvent.transaction_info = {
					...transactionInfo,
					source
				};
			}
			this.sendEvent(processedEvent, hint);
			return processedEvent;
		}).then(null, (reason) => {
			if (reason instanceof SentryError) throw reason;
			this.captureException(reason, {
				data: { __sentry__: true },
				originalException: reason
			});
			throw new SentryError(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ${reason}`);
		});
	}
	/**
	* Occupies the client with processing and event
	*/
	_process(promise) {
		this._numProcessing++;
		promise.then((value) => {
			this._numProcessing--;
			return value;
		}, (reason) => {
			this._numProcessing--;
			return reason;
		});
	}
	/**
	* Clears outcomes on this client and returns them.
	*/
	_clearOutcomes() {
		const outcomes = this._outcomes;
		this._outcomes = {};
		return Object.entries(outcomes).map(([key, quantity]) => {
			const [reason, category] = key.split(":");
			return {
				reason,
				category,
				quantity
			};
		});
	}
	/**
	* Sends client reports as an envelope.
	*/
	_flushOutcomes() {
		DEBUG_BUILD$1 && logger.log("Flushing outcomes...");
		const outcomes = this._clearOutcomes();
		if (outcomes.length === 0) {
			DEBUG_BUILD$1 && logger.log("No outcomes to send");
			return;
		}
		if (!this._dsn) {
			DEBUG_BUILD$1 && logger.log("No dsn provided, will not send outcomes");
			return;
		}
		DEBUG_BUILD$1 && logger.log("Sending outcomes:", outcomes);
		const envelope = createClientReportEnvelope(outcomes, this._options.tunnel && dsnToString(this._dsn));
		this.sendEnvelope(envelope);
	}
};
/**
* Verifies that return value of configured `beforeSend` or `beforeSendTransaction` is of expected type, and returns the value if so.
*/
function _validateBeforeSendResult(beforeSendResult, beforeSendLabel) {
	const invalidValueError = `${beforeSendLabel} must return \`null\` or a valid event.`;
	if (isThenable(beforeSendResult)) return beforeSendResult.then((event) => {
		if (!isPlainObject(event) && event !== null) throw new SentryError(invalidValueError);
		return event;
	}, (e) => {
		throw new SentryError(`${beforeSendLabel} rejected with ${e}`);
	});
	else if (!isPlainObject(beforeSendResult) && beforeSendResult !== null) throw new SentryError(invalidValueError);
	return beforeSendResult;
}
/**
* Process the matching `beforeSendXXX` callback.
*/
function processBeforeSend(client, options, event, hint) {
	const { beforeSend, beforeSendTransaction, beforeSendSpan } = options;
	if (isErrorEvent(event) && beforeSend) return beforeSend(event, hint);
	if (isTransactionEvent(event)) {
		if (event.spans && beforeSendSpan) {
			const processedSpans = [];
			for (const span of event.spans) {
				const processedSpan = beforeSendSpan(span);
				if (processedSpan) processedSpans.push(processedSpan);
				else {
					showSpanDropWarning();
					client.recordDroppedEvent("before_send", "span");
				}
			}
			event.spans = processedSpans;
		}
		if (beforeSendTransaction) {
			if (event.spans) {
				const spanCountBefore = event.spans.length;
				event.sdkProcessingMetadata = {
					...event.sdkProcessingMetadata,
					spanCountBeforeProcessing: spanCountBefore
				};
			}
			return beforeSendTransaction(event, hint);
		}
	}
	return event;
}
function isErrorEvent(event) {
	return event.type === void 0;
}
function isTransactionEvent(event) {
	return event.type === "transaction";
}
//#endregion
//#region node_modules/@sentry/core/build/esm/sdk.js
/** A class object that can instantiate Client objects. */
/**
* Internal function to create a new SDK client instance. The client is
* installed and then bound to the current scope.
*
* @param clientClass The client class to instantiate.
* @param options Options to pass to the client.
*/
function initAndBind(clientClass, options) {
	if (options.debug === true) if (DEBUG_BUILD$1) logger.enable();
	else consoleSandbox(() => {
		console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
	});
	getCurrentScope().update(options.initialScope);
	const client = new clientClass(options);
	setCurrentClient(client);
	client.init();
	return client;
}
/**
* Make the given client the current client.
*/
function setCurrentClient(client) {
	getCurrentScope().setClient(client);
}
//#endregion
//#region node_modules/@sentry/core/build/esm/utils-hoist/promisebuffer.js
/**
* Creates an new PromiseBuffer object with the specified limit
* @param limit max number of promises that can be stored in the buffer
*/
function makePromiseBuffer(limit) {
	const buffer = [];
	function isReady() {
		return limit === void 0 || buffer.length < limit;
	}
	/**
	* Remove a promise from the queue.
	*
	* @param task Can be any PromiseLike<T>
	* @returns Removed promise.
	*/
	function remove(task) {
		return buffer.splice(buffer.indexOf(task), 1)[0] || Promise.resolve(void 0);
	}
	/**
	* Add a promise (representing an in-flight action) to the queue, and set it to remove itself on fulfillment.
	*
	* @param taskProducer A function producing any PromiseLike<T>; In previous versions this used to be `task:
	*        PromiseLike<T>`, but under that model, Promises were instantly created on the call-site and their executor
	*        functions therefore ran immediately. Thus, even if the buffer was full, the action still happened. By
	*        requiring the promise to be wrapped in a function, we can defer promise creation until after the buffer
	*        limit check.
	* @returns The original promise.
	*/
	function add(taskProducer) {
		if (!isReady()) return rejectedSyncPromise(new SentryError("Not adding Promise because buffer limit was reached."));
		const task = taskProducer();
		if (buffer.indexOf(task) === -1) buffer.push(task);
		task.then(() => remove(task)).then(null, () => remove(task).then(null, () => {}));
		return task;
	}
	/**
	* Wait for all promises in the queue to resolve or for timeout to expire, whichever comes first.
	*
	* @param timeout The time, in ms, after which to resolve to `false` if the queue is still non-empty. Passing `0` (or
	* not passing anything) will make the promise wait as long as it takes for the queue to drain before resolving to
	* `true`.
	* @returns A promise which will resolve to `true` if the queue is already empty or drains before the timeout, and
	* `false` otherwise
	*/
	function drain(timeout) {
		return new SyncPromise((resolve, reject) => {
			let counter = buffer.length;
			if (!counter) return resolve(true);
			const capturedSetTimeout = setTimeout(() => {
				if (timeout && timeout > 0) resolve(false);
			}, timeout);
			buffer.forEach((item) => {
				resolvedSyncPromise(item).then(() => {
					if (!--counter) {
						clearTimeout(capturedSetTimeout);
						resolve(true);
					}
				}, reject);
			});
		});
	}
	return {
		$: buffer,
		add,
		drain
	};
}
//#endregion
//#region node_modules/@sentry/core/build/esm/utils-hoist/ratelimit.js
var DEFAULT_RETRY_AFTER = 6e4;
/**
* Extracts Retry-After value from the request header or returns default value
* @param header string representation of 'Retry-After' header
* @param now current unix timestamp
*
*/
function parseRetryAfterHeader(header, now = Date.now()) {
	const headerDelay = parseInt(`${header}`, 10);
	if (!isNaN(headerDelay)) return headerDelay * 1e3;
	const headerDate = Date.parse(`${header}`);
	if (!isNaN(headerDate)) return headerDate - now;
	return DEFAULT_RETRY_AFTER;
}
/**
* Gets the time that the given category is disabled until for rate limiting.
* In case no category-specific limit is set but a general rate limit across all categories is active,
* that time is returned.
*
* @return the time in ms that the category is disabled until or 0 if there's no active rate limit.
*/
function disabledUntil(limits, dataCategory) {
	return limits[dataCategory] || limits.all || 0;
}
/**
* Checks if a category is rate limited
*/
function isRateLimited(limits, dataCategory, now = Date.now()) {
	return disabledUntil(limits, dataCategory) > now;
}
/**
* Update ratelimits from incoming headers.
*
* @return the updated RateLimits object.
*/
function updateRateLimits(limits, { statusCode, headers }, now = Date.now()) {
	const updatedRateLimits = { ...limits };
	const rateLimitHeader = headers && headers["x-sentry-rate-limits"];
	const retryAfterHeader = headers && headers["retry-after"];
	if (rateLimitHeader)
 /**
	* rate limit headers are of the form
	*     <header>,<header>,..
	* where each <header> is of the form
	*     <retry_after>: <categories>: <scope>: <reason_code>: <namespaces>
	* where
	*     <retry_after> is a delay in seconds
	*     <categories> is the event type(s) (error, transaction, etc) being rate limited and is of the form
	*         <category>;<category>;...
	*     <scope> is what's being limited (org, project, or key) - ignored by SDK
	*     <reason_code> is an arbitrary string like "org_quota" - ignored by SDK
	*     <namespaces> Semicolon-separated list of metric namespace identifiers. Defines which namespace(s) will be affected.
	*         Only present if rate limit applies to the metric_bucket data category.
	*/
	for (const limit of rateLimitHeader.trim().split(",")) {
		const [retryAfter, categories, , , namespaces] = limit.split(":", 5);
		const headerDelay = parseInt(retryAfter, 10);
		const delay = (!isNaN(headerDelay) ? headerDelay : 60) * 1e3;
		if (!categories) updatedRateLimits.all = now + delay;
		else for (const category of categories.split(";")) if (category === "metric_bucket") {
			if (!namespaces || namespaces.split(";").includes("custom")) updatedRateLimits[category] = now + delay;
		} else updatedRateLimits[category] = now + delay;
	}
	else if (retryAfterHeader) updatedRateLimits.all = now + parseRetryAfterHeader(retryAfterHeader, now);
	else if (statusCode === 429) updatedRateLimits.all = now + 6e4;
	return updatedRateLimits;
}
/**
* Creates an instance of a Sentry `Transport`
*
* @param options
* @param makeRequest
*/
function createTransport(options, makeRequest, buffer = makePromiseBuffer(options.bufferSize || 64)) {
	let rateLimits = {};
	const flush = (timeout) => buffer.drain(timeout);
	function send(envelope) {
		const filteredEnvelopeItems = [];
		forEachEnvelopeItem(envelope, (item, type) => {
			const dataCategory = envelopeItemTypeToDataCategory(type);
			if (isRateLimited(rateLimits, dataCategory)) {
				const event = getEventForEnvelopeItem(item, type);
				options.recordDroppedEvent("ratelimit_backoff", dataCategory, event);
			} else filteredEnvelopeItems.push(item);
		});
		if (filteredEnvelopeItems.length === 0) return resolvedSyncPromise({});
		const filteredEnvelope = createEnvelope(envelope[0], filteredEnvelopeItems);
		const recordEnvelopeLoss = (reason) => {
			forEachEnvelopeItem(filteredEnvelope, (item, type) => {
				const event = getEventForEnvelopeItem(item, type);
				options.recordDroppedEvent(reason, envelopeItemTypeToDataCategory(type), event);
			});
		};
		const requestTask = () => makeRequest({ body: serializeEnvelope(filteredEnvelope) }).then((response) => {
			if (response.statusCode !== void 0 && (response.statusCode < 200 || response.statusCode >= 300)) DEBUG_BUILD$1 && logger.warn(`Sentry responded with status code ${response.statusCode} to sent event.`);
			rateLimits = updateRateLimits(rateLimits, response);
			return response;
		}, (error) => {
			recordEnvelopeLoss("network_error");
			throw error;
		});
		return buffer.add(requestTask).then((result) => result, (error) => {
			if (error instanceof SentryError) {
				DEBUG_BUILD$1 && logger.error("Skipped sending event because buffer is full.");
				recordEnvelopeLoss("queue_overflow");
				return resolvedSyncPromise({});
			} else throw error;
		});
	}
	return {
		send,
		flush
	};
}
function getEventForEnvelopeItem(item, type) {
	if (type !== "event" && type !== "transaction") return;
	return Array.isArray(item) ? item[1] : void 0;
}
//#endregion
//#region node_modules/@sentry/core/build/esm/utils/sdkMetadata.js
/**
* A builder for the SDK metadata in the options for the SDK initialization.
*
* Note: This function is identical to `buildMetadata` in Remix and NextJS and SvelteKit.
* We don't extract it for bundle size reasons.
* @see https://github.com/getsentry/sentry-javascript/pull/7404
* @see https://github.com/getsentry/sentry-javascript/pull/4196
*
* If you make changes to this function consider updating the others as well.
*
* @param options SDK options object that gets mutated
* @param names list of package names
*/
function applySdkMetadata(options, name, names = [name], source = "npm") {
	const metadata = options._metadata || {};
	if (!metadata.sdk) metadata.sdk = {
		name: `sentry.javascript.${name}`,
		packages: names.map((name) => ({
			name: `${source}:@sentry/${name}`,
			version: SDK_VERSION
		})),
		version: SDK_VERSION
	};
	options._metadata = metadata;
}
//#endregion
//#region node_modules/@sentry/core/build/esm/breadcrumbs.js
/**
* Default maximum number of breadcrumbs added to an event. Can be overwritten
* with {@link Options.maxBreadcrumbs}.
*/
var DEFAULT_BREADCRUMBS = 100;
/**
* Records a new breadcrumb which will be attached to future events.
*
* Breadcrumbs will be added to subsequent events to provide more context on
* user's actions prior to an error or crash.
*/
function addBreadcrumb(breadcrumb, hint) {
	const client = getClient();
	const isolationScope = getIsolationScope();
	if (!client) return;
	const { beforeBreadcrumb = null, maxBreadcrumbs = DEFAULT_BREADCRUMBS } = client.getOptions();
	if (maxBreadcrumbs <= 0) return;
	const mergedBreadcrumb = {
		timestamp: dateTimestampInSeconds(),
		...breadcrumb
	};
	const finalBreadcrumb = beforeBreadcrumb ? consoleSandbox(() => beforeBreadcrumb(mergedBreadcrumb, hint)) : mergedBreadcrumb;
	if (finalBreadcrumb === null) return;
	if (client.emit) client.emit("beforeAddBreadcrumb", finalBreadcrumb, hint);
	isolationScope.addBreadcrumb(finalBreadcrumb, maxBreadcrumbs);
}
//#endregion
//#region node_modules/@sentry/core/build/esm/integrations/functiontostring.js
var originalFunctionToString;
var INTEGRATION_NAME$6 = "FunctionToString";
var SETUP_CLIENTS = /* @__PURE__ */ new WeakMap();
var _functionToStringIntegration = (() => {
	return {
		name: INTEGRATION_NAME$6,
		setupOnce() {
			originalFunctionToString = Function.prototype.toString;
			try {
				Function.prototype.toString = function(...args) {
					const originalFunction = getOriginalFunction(this);
					const context = SETUP_CLIENTS.has(getClient()) && originalFunction !== void 0 ? originalFunction : this;
					return originalFunctionToString.apply(context, args);
				};
			} catch (e) {}
		},
		setup(client) {
			SETUP_CLIENTS.set(client, true);
		}
	};
});
/**
* Patch toString calls to return proper name for wrapped functions.
*
* ```js
* Sentry.init({
*   integrations: [
*     functionToStringIntegration(),
*   ],
* });
* ```
*/
var functionToStringIntegration = defineIntegration(_functionToStringIntegration);
//#endregion
//#region node_modules/@sentry/core/build/esm/integrations/inboundfilters.js
var DEFAULT_IGNORE_ERRORS = [
	/^Script error\.?$/,
	/^Javascript error: Script error\.? on line 0$/,
	/^ResizeObserver loop completed with undelivered notifications.$/,
	/^Cannot redefine property: googletag$/,
	/^Can't find variable: gmo$/,
	"undefined is not an object (evaluating 'a.L')",
	"can't redefine non-configurable property \"solana\"",
	"vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)",
	"Can't find variable: _AutofillCallbackHandler",
	/^Non-Error promise rejection captured with value: Object Not Found Matching Id:\d+, MethodName:simulateEvent, ParamCount:\d+$/,
	/^Java exception was raised during method invocation$/
];
/** Options for the InboundFilters integration */
var INTEGRATION_NAME$5 = "InboundFilters";
var _inboundFiltersIntegration = ((options = {}) => {
	return {
		name: INTEGRATION_NAME$5,
		processEvent(event, _hint, client) {
			return _shouldDropEvent$1(event, _mergeOptions(options, client.getOptions())) ? null : event;
		}
	};
});
var inboundFiltersIntegration = defineIntegration(_inboundFiltersIntegration);
function _mergeOptions(internalOptions = {}, clientOptions = {}) {
	return {
		allowUrls: [...internalOptions.allowUrls || [], ...clientOptions.allowUrls || []],
		denyUrls: [...internalOptions.denyUrls || [], ...clientOptions.denyUrls || []],
		ignoreErrors: [
			...internalOptions.ignoreErrors || [],
			...clientOptions.ignoreErrors || [],
			...internalOptions.disableErrorDefaults ? [] : DEFAULT_IGNORE_ERRORS
		],
		ignoreTransactions: [...internalOptions.ignoreTransactions || [], ...clientOptions.ignoreTransactions || []],
		ignoreInternal: internalOptions.ignoreInternal !== void 0 ? internalOptions.ignoreInternal : true
	};
}
function _shouldDropEvent$1(event, options) {
	if (options.ignoreInternal && _isSentryError(event)) {
		DEBUG_BUILD$1 && logger.warn(`Event dropped due to being internal Sentry Error.\nEvent: ${getEventDescription(event)}`);
		return true;
	}
	if (_isIgnoredError(event, options.ignoreErrors)) {
		DEBUG_BUILD$1 && logger.warn(`Event dropped due to being matched by \`ignoreErrors\` option.\nEvent: ${getEventDescription(event)}`);
		return true;
	}
	if (_isUselessError(event)) {
		DEBUG_BUILD$1 && logger.warn(`Event dropped due to not having an error message, error type or stacktrace.\nEvent: ${getEventDescription(event)}`);
		return true;
	}
	if (_isIgnoredTransaction(event, options.ignoreTransactions)) {
		DEBUG_BUILD$1 && logger.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.\nEvent: ${getEventDescription(event)}`);
		return true;
	}
	if (_isDeniedUrl(event, options.denyUrls)) {
		DEBUG_BUILD$1 && logger.warn(`Event dropped due to being matched by \`denyUrls\` option.\nEvent: ${getEventDescription(event)}.\nUrl: ${_getEventFilterUrl(event)}`);
		return true;
	}
	if (!_isAllowedUrl(event, options.allowUrls)) {
		DEBUG_BUILD$1 && logger.warn(`Event dropped due to not being matched by \`allowUrls\` option.\nEvent: ${getEventDescription(event)}.\nUrl: ${_getEventFilterUrl(event)}`);
		return true;
	}
	return false;
}
function _isIgnoredError(event, ignoreErrors) {
	if (event.type || !ignoreErrors || !ignoreErrors.length) return false;
	return _getPossibleEventMessages(event).some((message) => stringMatchesSomePattern(message, ignoreErrors));
}
function _isIgnoredTransaction(event, ignoreTransactions) {
	if (event.type !== "transaction" || !ignoreTransactions || !ignoreTransactions.length) return false;
	const name = event.transaction;
	return name ? stringMatchesSomePattern(name, ignoreTransactions) : false;
}
function _isDeniedUrl(event, denyUrls) {
	if (!denyUrls || !denyUrls.length) return false;
	const url = _getEventFilterUrl(event);
	return !url ? false : stringMatchesSomePattern(url, denyUrls);
}
function _isAllowedUrl(event, allowUrls) {
	if (!allowUrls || !allowUrls.length) return true;
	const url = _getEventFilterUrl(event);
	return !url ? true : stringMatchesSomePattern(url, allowUrls);
}
function _getPossibleEventMessages(event) {
	const possibleMessages = [];
	if (event.message) possibleMessages.push(event.message);
	let lastException;
	try {
		lastException = event.exception.values[event.exception.values.length - 1];
	} catch (e) {}
	if (lastException) {
		if (lastException.value) {
			possibleMessages.push(lastException.value);
			if (lastException.type) possibleMessages.push(`${lastException.type}: ${lastException.value}`);
		}
	}
	return possibleMessages;
}
function _isSentryError(event) {
	try {
		return event.exception.values[0].type === "SentryError";
	} catch (e) {}
	return false;
}
function _getLastValidUrl(frames = []) {
	for (let i = frames.length - 1; i >= 0; i--) {
		const frame = frames[i];
		if (frame && frame.filename !== "<anonymous>" && frame.filename !== "[native code]") return frame.filename || null;
	}
	return null;
}
function _getEventFilterUrl(event) {
	try {
		let frames;
		try {
			frames = event.exception.values[0].stacktrace.frames;
		} catch (e) {}
		return frames ? _getLastValidUrl(frames) : null;
	} catch (oO) {
		DEBUG_BUILD$1 && logger.error(`Cannot extract url for event ${getEventDescription(event)}`);
		return null;
	}
}
function _isUselessError(event) {
	if (event.type) return false;
	if (!event.exception || !event.exception.values || event.exception.values.length === 0) return false;
	return !event.message && !event.exception.values.some((value) => value.stacktrace || value.type && value.type !== "Error" || value.value);
}
//#endregion
//#region node_modules/@sentry/core/build/esm/utils-hoist/aggregate-errors.js
/**
* Creates exceptions inside `event.exception.values` for errors that are nested on properties based on the `key` parameter.
*/
function applyAggregateErrorsToEvent(exceptionFromErrorImplementation, parser, maxValueLimit = 250, key, limit, event, hint) {
	if (!event.exception || !event.exception.values || !hint || !isInstanceOf(hint.originalException, Error)) return;
	const originalException = event.exception.values.length > 0 ? event.exception.values[event.exception.values.length - 1] : void 0;
	if (originalException) event.exception.values = truncateAggregateExceptions(aggregateExceptionsFromError(exceptionFromErrorImplementation, parser, limit, hint.originalException, key, event.exception.values, originalException, 0), maxValueLimit);
}
function aggregateExceptionsFromError(exceptionFromErrorImplementation, parser, limit, error, key, prevExceptions, exception, exceptionId) {
	if (prevExceptions.length >= limit + 1) return prevExceptions;
	let newExceptions = [...prevExceptions];
	if (isInstanceOf(error[key], Error)) {
		applyExceptionGroupFieldsForParentException(exception, exceptionId);
		const newException = exceptionFromErrorImplementation(parser, error[key]);
		const newExceptionId = newExceptions.length;
		applyExceptionGroupFieldsForChildException(newException, key, newExceptionId, exceptionId);
		newExceptions = aggregateExceptionsFromError(exceptionFromErrorImplementation, parser, limit, error[key], key, [newException, ...newExceptions], newException, newExceptionId);
	}
	if (Array.isArray(error.errors)) error.errors.forEach((childError, i) => {
		if (isInstanceOf(childError, Error)) {
			applyExceptionGroupFieldsForParentException(exception, exceptionId);
			const newException = exceptionFromErrorImplementation(parser, childError);
			const newExceptionId = newExceptions.length;
			applyExceptionGroupFieldsForChildException(newException, `errors[${i}]`, newExceptionId, exceptionId);
			newExceptions = aggregateExceptionsFromError(exceptionFromErrorImplementation, parser, limit, childError, key, [newException, ...newExceptions], newException, newExceptionId);
		}
	});
	return newExceptions;
}
function applyExceptionGroupFieldsForParentException(exception, exceptionId) {
	exception.mechanism = exception.mechanism || {
		type: "generic",
		handled: true
	};
	exception.mechanism = {
		...exception.mechanism,
		...exception.type === "AggregateError" && { is_exception_group: true },
		exception_id: exceptionId
	};
}
function applyExceptionGroupFieldsForChildException(exception, source, exceptionId, parentId) {
	exception.mechanism = exception.mechanism || {
		type: "generic",
		handled: true
	};
	exception.mechanism = {
		...exception.mechanism,
		type: "chained",
		source,
		exception_id: exceptionId,
		parent_id: parentId
	};
}
/**
* Truncate the message (exception.value) of all exceptions in the event.
* Because this event processor is ran after `applyClientOptions`,
* we need to truncate the message of the added exceptions here.
*/
function truncateAggregateExceptions(exceptions, maxValueLength) {
	return exceptions.map((exception) => {
		if (exception.value) exception.value = truncate(exception.value, maxValueLength);
		return exception;
	});
}
//#endregion
//#region node_modules/@sentry/core/build/esm/utils-hoist/url.js
/**
* Parses string form of URL into an object
* // borrowed from https://tools.ietf.org/html/rfc3986#appendix-B
* // intentionally using regex and not <a/> href parsing trick because React Native and other
* // environments where DOM might not be available
* @returns parsed URL object
*/
function parseUrl(url) {
	if (!url) return {};
	const match = url.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
	if (!match) return {};
	const query = match[6] || "";
	const fragment = match[8] || "";
	return {
		host: match[4],
		path: match[5],
		protocol: match[2],
		search: query,
		hash: fragment,
		relative: match[5] + query + fragment
	};
}
//#endregion
//#region node_modules/@sentry/core/build/esm/utils-hoist/instrument/console.js
/**
* Add an instrumentation handler for when a console.xxx method is called.
*
* Use at your own risk, this might break without changelog notice, only used internally.
* @hidden
*/
function addConsoleInstrumentationHandler(handler) {
	const type = "console";
	addHandler(type, handler);
	maybeInstrument(type, instrumentConsole);
}
function instrumentConsole() {
	if (!("console" in GLOBAL_OBJ)) return;
	CONSOLE_LEVELS.forEach(function(level) {
		if (!(level in GLOBAL_OBJ.console)) return;
		fill(GLOBAL_OBJ.console, level, function(originalConsoleMethod) {
			originalConsoleMethods[level] = originalConsoleMethod;
			return function(...args) {
				triggerHandlers("console", {
					args,
					level
				});
				const log = originalConsoleMethods[level];
				log && log.apply(GLOBAL_OBJ.console, args);
			};
		});
	});
}
//#endregion
//#region node_modules/@sentry/core/build/esm/utils-hoist/severity.js
/**
* Converts a string-based level into a `SeverityLevel`, normalizing it along the way.
*
* @param level String representation of desired `SeverityLevel`.
* @returns The `SeverityLevel` corresponding to the given string, or 'log' if the string isn't a valid level.
*/
function severityLevelFromString(level) {
	return level === "warn" ? "warning" : [
		"fatal",
		"error",
		"warning",
		"log",
		"info",
		"debug"
	].includes(level) ? level : "log";
}
//#endregion
//#region node_modules/@sentry/core/build/esm/integrations/dedupe.js
var INTEGRATION_NAME$4 = "Dedupe";
var _dedupeIntegration = (() => {
	let previousEvent;
	return {
		name: INTEGRATION_NAME$4,
		processEvent(currentEvent) {
			if (currentEvent.type) return currentEvent;
			try {
				if (_shouldDropEvent(currentEvent, previousEvent)) {
					DEBUG_BUILD$1 && logger.warn("Event dropped due to being a duplicate of previously captured event.");
					return null;
				}
			} catch (_oO) {}
			return previousEvent = currentEvent;
		}
	};
});
/**
* Deduplication filter.
*/
var dedupeIntegration = defineIntegration(_dedupeIntegration);
/** only exported for tests. */
function _shouldDropEvent(currentEvent, previousEvent) {
	if (!previousEvent) return false;
	if (_isSameMessageEvent(currentEvent, previousEvent)) return true;
	if (_isSameExceptionEvent(currentEvent, previousEvent)) return true;
	return false;
}
function _isSameMessageEvent(currentEvent, previousEvent) {
	const currentMessage = currentEvent.message;
	const previousMessage = previousEvent.message;
	if (!currentMessage && !previousMessage) return false;
	if (currentMessage && !previousMessage || !currentMessage && previousMessage) return false;
	if (currentMessage !== previousMessage) return false;
	if (!_isSameFingerprint(currentEvent, previousEvent)) return false;
	if (!_isSameStacktrace(currentEvent, previousEvent)) return false;
	return true;
}
function _isSameExceptionEvent(currentEvent, previousEvent) {
	const previousException = _getExceptionFromEvent(previousEvent);
	const currentException = _getExceptionFromEvent(currentEvent);
	if (!previousException || !currentException) return false;
	if (previousException.type !== currentException.type || previousException.value !== currentException.value) return false;
	if (!_isSameFingerprint(currentEvent, previousEvent)) return false;
	if (!_isSameStacktrace(currentEvent, previousEvent)) return false;
	return true;
}
function _isSameStacktrace(currentEvent, previousEvent) {
	let currentFrames = getFramesFromEvent(currentEvent);
	let previousFrames = getFramesFromEvent(previousEvent);
	if (!currentFrames && !previousFrames) return true;
	if (currentFrames && !previousFrames || !currentFrames && previousFrames) return false;
	currentFrames = currentFrames;
	previousFrames = previousFrames;
	if (previousFrames.length !== currentFrames.length) return false;
	for (let i = 0; i < previousFrames.length; i++) {
		const frameA = previousFrames[i];
		const frameB = currentFrames[i];
		if (frameA.filename !== frameB.filename || frameA.lineno !== frameB.lineno || frameA.colno !== frameB.colno || frameA.function !== frameB.function) return false;
	}
	return true;
}
function _isSameFingerprint(currentEvent, previousEvent) {
	let currentFingerprint = currentEvent.fingerprint;
	let previousFingerprint = previousEvent.fingerprint;
	if (!currentFingerprint && !previousFingerprint) return true;
	if (currentFingerprint && !previousFingerprint || !currentFingerprint && previousFingerprint) return false;
	currentFingerprint = currentFingerprint;
	previousFingerprint = previousFingerprint;
	try {
		return !!(currentFingerprint.join("") === previousFingerprint.join(""));
	} catch (_oO) {
		return false;
	}
}
function _getExceptionFromEvent(event) {
	return event.exception && event.exception.values && event.exception.values[0];
}
//#endregion
//#region node_modules/@sentry/core/build/esm/utils-hoist/breadcrumb-log-level.js
/**
* Determine a breadcrumb's log level (only `warning` or `error`) based on an HTTP status code.
*/
function getBreadcrumbLogLevelFromHttpStatusCode(statusCode) {
	if (statusCode === void 0) return;
	else if (statusCode >= 400 && statusCode < 500) return "warning";
	else if (statusCode >= 500) return "error";
	else return;
}
//#endregion
//#region node_modules/@sentry/core/build/esm/utils-hoist/instrument/fetch.js
/**
* Add an instrumentation handler for when a fetch request happens.
* The handler function is called once when the request starts and once when it ends,
* which can be identified by checking if it has an `endTimestamp`.
*
* Use at your own risk, this might break without changelog notice, only used internally.
* @hidden
*/
function addFetchInstrumentationHandler(handler, skipNativeFetchCheck) {
	const type = "fetch";
	addHandler(type, handler);
	maybeInstrument(type, () => instrumentFetch(void 0, skipNativeFetchCheck));
}
function instrumentFetch(onFetchResolved, skipNativeFetchCheck = false) {
	if (skipNativeFetchCheck && !supportsNativeFetch()) return;
	fill(GLOBAL_OBJ, "fetch", function(originalFetch) {
		return function(...args) {
			const virtualError = /* @__PURE__ */ new Error();
			const { method, url } = parseFetchArgs(args);
			const handlerData = {
				args,
				fetchData: {
					method,
					url
				},
				startTimestamp: timestampInSeconds() * 1e3,
				virtualError
			};
			if (!onFetchResolved) triggerHandlers("fetch", { ...handlerData });
			return originalFetch.apply(GLOBAL_OBJ, args).then(async (response) => {
				if (onFetchResolved) onFetchResolved(response);
				else triggerHandlers("fetch", {
					...handlerData,
					endTimestamp: timestampInSeconds() * 1e3,
					response
				});
				return response;
			}, (error) => {
				triggerHandlers("fetch", {
					...handlerData,
					endTimestamp: timestampInSeconds() * 1e3,
					error
				});
				if (isError(error) && error.stack === void 0) {
					error.stack = virtualError.stack;
					addNonEnumerableProperty(error, "framesToPop", 1);
				}
				throw error;
			});
		};
	});
}
function hasProp(obj, prop) {
	return !!obj && typeof obj === "object" && !!obj[prop];
}
function getUrlFromResource(resource) {
	if (typeof resource === "string") return resource;
	if (!resource) return "";
	if (hasProp(resource, "url")) return resource.url;
	if (resource.toString) return resource.toString();
	return "";
}
/**
* Parses the fetch arguments to find the used Http method and the url of the request.
* Exported for tests only.
*/
function parseFetchArgs(fetchArgs) {
	if (fetchArgs.length === 0) return {
		method: "GET",
		url: ""
	};
	if (fetchArgs.length === 2) {
		const [url, options] = fetchArgs;
		return {
			url: getUrlFromResource(url),
			method: hasProp(options, "method") ? String(options.method).toUpperCase() : "GET"
		};
	}
	const arg = fetchArgs[0];
	return {
		url: getUrlFromResource(arg),
		method: hasProp(arg, "method") ? String(arg.method).toUpperCase() : "GET"
	};
}
//#endregion
//#region node_modules/@sentry/core/build/esm/utils-hoist/env.js
/**
* Get source of SDK.
*/
function getSDKSource() {
	return "npm";
}
//#endregion
//#region node_modules/@sentry/browser/build/npm/esm/helpers.js
var WINDOW = GLOBAL_OBJ;
var ignoreOnError = 0;
/**
* @hidden
*/
function shouldIgnoreOnError() {
	return ignoreOnError > 0;
}
/**
* @hidden
*/
function ignoreNextOnError() {
	ignoreOnError++;
	setTimeout(() => {
		ignoreOnError--;
	});
}
/**
* Instruments the given function and sends an event to Sentry every time the
* function throws an exception.
*
* @param fn A function to wrap. It is generally safe to pass an unbound function, because the returned wrapper always
* has a correct `this` context.
* @returns The wrapped function.
* @hidden
*/
function wrap(fn, options = {}) {
	function isFunction(fn) {
		return typeof fn === "function";
	}
	if (!isFunction(fn)) return fn;
	try {
		const wrapper = fn.__sentry_wrapped__;
		if (wrapper) if (typeof wrapper === "function") return wrapper;
		else return fn;
		if (getOriginalFunction(fn)) return fn;
	} catch (e) {
		return fn;
	}
	const sentryWrapped = function(...args) {
		try {
			const wrappedArguments = args.map((arg) => wrap(arg, options));
			return fn.apply(this, wrappedArguments);
		} catch (ex) {
			ignoreNextOnError();
			withScope((scope) => {
				scope.addEventProcessor((event) => {
					if (options.mechanism) {
						addExceptionTypeValue(event, void 0, void 0);
						addExceptionMechanism(event, options.mechanism);
					}
					event.extra = {
						...event.extra,
						arguments: args
					};
					return event;
				});
				captureException(ex);
			});
			throw ex;
		}
	};
	try {
		for (const property in fn) if (Object.prototype.hasOwnProperty.call(fn, property)) sentryWrapped[property] = fn[property];
	} catch (e2) {}
	markFunctionWrapped(sentryWrapped, fn);
	addNonEnumerableProperty(fn, "__sentry_wrapped__", sentryWrapped);
	try {
		if (Object.getOwnPropertyDescriptor(sentryWrapped, "name").configurable) Object.defineProperty(sentryWrapped, "name", { get() {
			return fn.name;
		} });
	} catch (e3) {}
	return sentryWrapped;
}
//#endregion
//#region node_modules/@sentry/browser/build/npm/esm/debug-build.js
/**
* This serves as a build time flag that will be true by default, but false in non-debug builds or if users replace `__SENTRY_DEBUG__` in their generated code.
*
* ATTENTION: This constant must never cross package boundaries (i.e. be exported) to guarantee that it can be used for tree shaking.
*/
var DEBUG_BUILD = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
//#endregion
//#region node_modules/@sentry/browser/build/npm/esm/eventbuilder.js
/**
* This function creates an exception from a JavaScript Error
*/
function exceptionFromError(stackParser, ex) {
	const frames = parseStackFrames(stackParser, ex);
	const exception = {
		type: extractType(ex),
		value: extractMessage(ex)
	};
	if (frames.length) exception.stacktrace = { frames };
	if (exception.type === void 0 && exception.value === "") exception.value = "Unrecoverable error caught";
	return exception;
}
function eventFromPlainObject(stackParser, exception, syntheticException, isUnhandledRejection) {
	const client = getClient();
	const normalizeDepth = client && client.getOptions().normalizeDepth;
	const errorFromProp = getErrorPropertyFromObject(exception);
	const extra = { __serialized__: normalizeToSize(exception, normalizeDepth) };
	if (errorFromProp) return {
		exception: { values: [exceptionFromError(stackParser, errorFromProp)] },
		extra
	};
	const event = {
		exception: { values: [{
			type: isEvent(exception) ? exception.constructor.name : isUnhandledRejection ? "UnhandledRejection" : "Error",
			value: getNonErrorObjectExceptionValue(exception, { isUnhandledRejection })
		}] },
		extra
	};
	if (syntheticException) {
		const frames = parseStackFrames(stackParser, syntheticException);
		if (frames.length) event.exception.values[0].stacktrace = { frames };
	}
	return event;
}
function eventFromError(stackParser, ex) {
	return { exception: { values: [exceptionFromError(stackParser, ex)] } };
}
/** Parses stack frames from an error */
function parseStackFrames(stackParser, ex) {
	const stacktrace = ex.stacktrace || ex.stack || "";
	const skipLines = getSkipFirstStackStringLines(ex);
	const framesToPop = getPopFirstTopFrames(ex);
	try {
		return stackParser(stacktrace, skipLines, framesToPop);
	} catch (e) {}
	return [];
}
var reactMinifiedRegexp = /Minified React error #\d+;/i;
/**
* Certain known React errors contain links that would be falsely
* parsed as frames. This function check for these errors and
* returns number of the stack string lines to skip.
*/
function getSkipFirstStackStringLines(ex) {
	if (ex && reactMinifiedRegexp.test(ex.message)) return 1;
	return 0;
}
/**
* If error has `framesToPop` property, it means that the
* creator tells us the first x frames will be useless
* and should be discarded. Typically error from wrapper function
* which don't point to the actual location in the developer's code.
*
* Example: https://github.com/zertosh/invariant/blob/master/invariant.js#L46
*/
function getPopFirstTopFrames(ex) {
	if (typeof ex.framesToPop === "number") return ex.framesToPop;
	return 0;
}
function isWebAssemblyException(exception) {
	if (typeof WebAssembly !== "undefined" && typeof WebAssembly.Exception !== "undefined") return exception instanceof WebAssembly.Exception;
	else return false;
}
/**
* Extracts from errors what we use as the exception `type` in error events.
*
* Usually, this is the `name` property on Error objects but WASM errors need to be treated differently.
*/
function extractType(ex) {
	const name = ex && ex.name;
	if (!name && isWebAssemblyException(ex)) return ex.message && Array.isArray(ex.message) && ex.message.length == 2 ? ex.message[0] : "WebAssembly.Exception";
	return name;
}
/**
* There are cases where stacktrace.message is an Event object
* https://github.com/getsentry/sentry-javascript/issues/1949
* In this specific case we try to extract stacktrace.message.error.message
*/
function extractMessage(ex) {
	const message = ex && ex.message;
	if (!message) return "No error message";
	if (message.error && typeof message.error.message === "string") return message.error.message;
	if (isWebAssemblyException(ex) && Array.isArray(ex.message) && ex.message.length == 2) return ex.message[1];
	return message;
}
/**
* Creates an {@link Event} from all inputs to `captureException` and non-primitive inputs to `captureMessage`.
* @hidden
*/
function eventFromException(stackParser, exception, hint, attachStacktrace) {
	const event = eventFromUnknownInput(stackParser, exception, hint && hint.syntheticException || void 0, attachStacktrace);
	addExceptionMechanism(event);
	event.level = "error";
	if (hint && hint.event_id) event.event_id = hint.event_id;
	return resolvedSyncPromise(event);
}
/**
* Builds and Event from a Message
* @hidden
*/
function eventFromMessage(stackParser, message, level = "info", hint, attachStacktrace) {
	const event = eventFromString(stackParser, message, hint && hint.syntheticException || void 0, attachStacktrace);
	event.level = level;
	if (hint && hint.event_id) event.event_id = hint.event_id;
	return resolvedSyncPromise(event);
}
/**
* @hidden
*/
function eventFromUnknownInput(stackParser, exception, syntheticException, attachStacktrace, isUnhandledRejection) {
	let event;
	if (isErrorEvent$1(exception) && exception.error) return eventFromError(stackParser, exception.error);
	if (isDOMError(exception) || isDOMException(exception)) {
		const domException = exception;
		if ("stack" in exception) event = eventFromError(stackParser, exception);
		else {
			const name = domException.name || (isDOMError(domException) ? "DOMError" : "DOMException");
			const message = domException.message ? `${name}: ${domException.message}` : name;
			event = eventFromString(stackParser, message, syntheticException, attachStacktrace);
			addExceptionTypeValue(event, message);
		}
		if ("code" in domException) event.tags = {
			...event.tags,
			"DOMException.code": `${domException.code}`
		};
		return event;
	}
	if (isError(exception)) return eventFromError(stackParser, exception);
	if (isPlainObject(exception) || isEvent(exception)) {
		event = eventFromPlainObject(stackParser, exception, syntheticException, isUnhandledRejection);
		addExceptionMechanism(event, { synthetic: true });
		return event;
	}
	event = eventFromString(stackParser, exception, syntheticException, attachStacktrace);
	addExceptionTypeValue(event, `${exception}`, void 0);
	addExceptionMechanism(event, { synthetic: true });
	return event;
}
function eventFromString(stackParser, message, syntheticException, attachStacktrace) {
	const event = {};
	if (attachStacktrace && syntheticException) {
		const frames = parseStackFrames(stackParser, syntheticException);
		if (frames.length) event.exception = { values: [{
			value: message,
			stacktrace: { frames }
		}] };
		addExceptionMechanism(event, { synthetic: true });
	}
	if (isParameterizedString(message)) {
		const { __sentry_template_string__, __sentry_template_values__ } = message;
		event.logentry = {
			message: __sentry_template_string__,
			params: __sentry_template_values__
		};
		return event;
	}
	event.message = message;
	return event;
}
function getNonErrorObjectExceptionValue(exception, { isUnhandledRejection }) {
	const keys = extractExceptionKeysForMessage(exception);
	const captureType = isUnhandledRejection ? "promise rejection" : "exception";
	if (isErrorEvent$1(exception)) return `Event \`ErrorEvent\` captured as ${captureType} with message \`${exception.message}\``;
	if (isEvent(exception)) return `Event \`${getObjectClassName(exception)}\` (type=${exception.type}) captured as ${captureType}`;
	return `Object captured as ${captureType} with keys: ${keys}`;
}
function getObjectClassName(obj) {
	try {
		const prototype = Object.getPrototypeOf(obj);
		return prototype ? prototype.constructor.name : void 0;
	} catch (e) {}
}
/** If a plain object has a property that is an `Error`, return this error. */
function getErrorPropertyFromObject(obj) {
	for (const prop in obj) if (Object.prototype.hasOwnProperty.call(obj, prop)) {
		const value = obj[prop];
		if (value instanceof Error) return value;
	}
}
//#endregion
//#region node_modules/@sentry/browser/build/npm/esm/userfeedback.js
/**
* Creates an envelope from a user feedback.
*/
function createUserFeedbackEnvelope(feedback, { metadata, tunnel, dsn }) {
	return createEnvelope({
		event_id: feedback.event_id,
		sent_at: (/* @__PURE__ */ new Date()).toISOString(),
		...metadata && metadata.sdk && { sdk: {
			name: metadata.sdk.name,
			version: metadata.sdk.version
		} },
		...!!tunnel && !!dsn && { dsn: dsnToString(dsn) }
	}, [createUserFeedbackEnvelopeItem(feedback)]);
}
function createUserFeedbackEnvelopeItem(feedback) {
	return [{ type: "user_report" }, feedback];
}
//#endregion
//#region node_modules/@sentry/browser/build/npm/esm/client.js
/**
* Configuration options for the Sentry Browser SDK.
* @see @sentry/core Options for more information.
*/
/**
* The Sentry Browser SDK Client.
*
* @see BrowserOptions for documentation on configuration options.
* @see SentryClient for usage documentation.
*/
var BrowserClient = class extends BaseClient {
	/**
	* Creates a new Browser SDK instance.
	*
	* @param options Configuration options for this SDK.
	*/
	constructor(options) {
		const opts = {
			parentSpanIsAlwaysRootSpan: true,
			...options
		};
		applySdkMetadata(opts, "browser", ["browser"], WINDOW.SENTRY_SDK_SOURCE || getSDKSource());
		super(opts);
		if (opts.sendClientReports && WINDOW.document) WINDOW.document.addEventListener("visibilitychange", () => {
			if (WINDOW.document.visibilityState === "hidden") this._flushOutcomes();
		});
	}
	/**
	* @inheritDoc
	*/
	eventFromException(exception, hint) {
		return eventFromException(this._options.stackParser, exception, hint, this._options.attachStacktrace);
	}
	/**
	* @inheritDoc
	*/
	eventFromMessage(message, level = "info", hint) {
		return eventFromMessage(this._options.stackParser, message, level, hint, this._options.attachStacktrace);
	}
	/**
	* Sends user feedback to Sentry.
	*
	* @deprecated Use `captureFeedback` instead.
	*/
	captureUserFeedback(feedback) {
		if (!this._isEnabled()) {
			DEBUG_BUILD && logger.warn("SDK not enabled, will not capture user feedback.");
			return;
		}
		const envelope = createUserFeedbackEnvelope(feedback, {
			metadata: this.getSdkMetadata(),
			dsn: this.getDsn(),
			tunnel: this.getOptions().tunnel
		});
		this.sendEnvelope(envelope);
	}
	/**
	* @inheritDoc
	*/
	_prepareEvent(event, hint, scope) {
		event.platform = event.platform || "javascript";
		return super._prepareEvent(event, hint, scope);
	}
};
//#endregion
//#region node_modules/@sentry/browser/build/npm/esm/transports/fetch.js
/**
* Creates a Transport that uses the Fetch API to send events to Sentry.
*/
function makeFetchTransport(options, nativeFetch = getNativeImplementation("fetch")) {
	let pendingBodySize = 0;
	let pendingCount = 0;
	function makeRequest(request) {
		const requestSize = request.body.length;
		pendingBodySize += requestSize;
		pendingCount++;
		const requestOptions = {
			body: request.body,
			method: "POST",
			referrerPolicy: "origin",
			headers: options.headers,
			keepalive: pendingBodySize <= 6e4 && pendingCount < 15,
			...options.fetchOptions
		};
		if (!nativeFetch) {
			clearCachedImplementation("fetch");
			return rejectedSyncPromise("No fetch implementation available");
		}
		try {
			return nativeFetch(options.url, requestOptions).then((response) => {
				pendingBodySize -= requestSize;
				pendingCount--;
				return {
					statusCode: response.status,
					headers: {
						"x-sentry-rate-limits": response.headers.get("X-Sentry-Rate-Limits"),
						"retry-after": response.headers.get("Retry-After")
					}
				};
			});
		} catch (e) {
			clearCachedImplementation("fetch");
			pendingBodySize -= requestSize;
			pendingCount--;
			return rejectedSyncPromise(e);
		}
	}
	return createTransport(options, makeRequest);
}
//#endregion
//#region node_modules/@sentry/browser/build/npm/esm/stack-parsers.js
var CHROME_PRIORITY = 30;
var GECKO_PRIORITY = 50;
function createFrame(filename, func, lineno, colno) {
	const frame = {
		filename,
		function: func === "<anonymous>" ? "?" : func,
		in_app: true
	};
	if (lineno !== void 0) frame.lineno = lineno;
	if (colno !== void 0) frame.colno = colno;
	return frame;
}
var chromeRegexNoFnName = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i;
var chromeRegex = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
var chromeEvalRegex = /\((\S*)(?::(\d+))(?::(\d+))\)/;
var chromeStackParserFn = (line) => {
	const noFnParts = chromeRegexNoFnName.exec(line);
	if (noFnParts) {
		const [, filename, line, col] = noFnParts;
		return createFrame(filename, "?", +line, +col);
	}
	const parts = chromeRegex.exec(line);
	if (parts) {
		if (parts[2] && parts[2].indexOf("eval") === 0) {
			const subMatch = chromeEvalRegex.exec(parts[2]);
			if (subMatch) {
				parts[2] = subMatch[1];
				parts[3] = subMatch[2];
				parts[4] = subMatch[3];
			}
		}
		const [func, filename] = extractSafariExtensionDetails(parts[1] || "?", parts[2]);
		return createFrame(filename, func, parts[3] ? +parts[3] : void 0, parts[4] ? +parts[4] : void 0);
	}
};
var chromeStackLineParser = [CHROME_PRIORITY, chromeStackParserFn];
var geckoREgex = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i;
var geckoEvalRegex = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
var gecko = (line) => {
	const parts = geckoREgex.exec(line);
	if (parts) {
		if (parts[3] && parts[3].indexOf(" > eval") > -1) {
			const subMatch = geckoEvalRegex.exec(parts[3]);
			if (subMatch) {
				parts[1] = parts[1] || "eval";
				parts[3] = subMatch[1];
				parts[4] = subMatch[2];
				parts[5] = "";
			}
		}
		let filename = parts[3];
		let func = parts[1] || "?";
		[func, filename] = extractSafariExtensionDetails(func, filename);
		return createFrame(filename, func, parts[4] ? +parts[4] : void 0, parts[5] ? +parts[5] : void 0);
	}
};
var defaultStackParser = createStackParser(...[chromeStackLineParser, [GECKO_PRIORITY, gecko]]);
/**
* Safari web extensions, starting version unknown, can produce "frames-only" stacktraces.
* What it means, is that instead of format like:
*
* Error: wat
*   at function@url:row:col
*   at function@url:row:col
*   at function@url:row:col
*
* it produces something like:
*
*   function@url:row:col
*   function@url:row:col
*   function@url:row:col
*
* Because of that, it won't be captured by `chrome` RegExp and will fall into `Gecko` branch.
* This function is extracted so that we can use it in both places without duplicating the logic.
* Unfortunately "just" changing RegExp is too complicated now and making it pass all tests
* and fix this case seems like an impossible, or at least way too time-consuming task.
*/
var extractSafariExtensionDetails = (func, filename) => {
	const isSafariExtension = func.indexOf("safari-extension") !== -1;
	const isSafariWebExtension = func.indexOf("safari-web-extension") !== -1;
	return isSafariExtension || isSafariWebExtension ? [func.indexOf("@") !== -1 ? func.split("@")[0] : "?", isSafariExtension ? `safari-extension:${filename}` : `safari-web-extension:${filename}`] : [func, filename];
};
//#endregion
//#region node_modules/@sentry/browser/build/npm/esm/integrations/breadcrumbs.js
/** maxStringLength gets capped to prevent 100 breadcrumbs exceeding 1MB event payload size */
var MAX_ALLOWED_STRING_LENGTH = 1024;
var INTEGRATION_NAME$3 = "Breadcrumbs";
var _breadcrumbsIntegration = ((options = {}) => {
	const _options = {
		console: true,
		dom: true,
		fetch: true,
		history: true,
		sentry: true,
		xhr: true,
		...options
	};
	return {
		name: INTEGRATION_NAME$3,
		setup(client) {
			if (_options.console) addConsoleInstrumentationHandler(_getConsoleBreadcrumbHandler(client));
			if (_options.dom) addClickKeypressInstrumentationHandler(_getDomBreadcrumbHandler(client, _options.dom));
			if (_options.xhr) addXhrInstrumentationHandler(_getXhrBreadcrumbHandler(client));
			if (_options.fetch) addFetchInstrumentationHandler(_getFetchBreadcrumbHandler(client));
			if (_options.history) addHistoryInstrumentationHandler(_getHistoryBreadcrumbHandler(client));
			if (_options.sentry) client.on("beforeSendEvent", _getSentryBreadcrumbHandler(client));
		}
	};
});
var breadcrumbsIntegration = defineIntegration(_breadcrumbsIntegration);
/**
* Adds a breadcrumb for Sentry events or transactions if this option is enabled.
*/
function _getSentryBreadcrumbHandler(client) {
	return function addSentryBreadcrumb(event) {
		if (getClient() !== client) return;
		addBreadcrumb({
			category: `sentry.${event.type === "transaction" ? "transaction" : "event"}`,
			event_id: event.event_id,
			level: event.level,
			message: getEventDescription(event)
		}, { event });
	};
}
/**
* A HOC that creates a function that creates breadcrumbs from DOM API calls.
* This is a HOC so that we get access to dom options in the closure.
*/
function _getDomBreadcrumbHandler(client, dom) {
	return function _innerDomBreadcrumb(handlerData) {
		if (getClient() !== client) return;
		let target;
		let componentName;
		let keyAttrs = typeof dom === "object" ? dom.serializeAttribute : void 0;
		let maxStringLength = typeof dom === "object" && typeof dom.maxStringLength === "number" ? dom.maxStringLength : void 0;
		if (maxStringLength && maxStringLength > MAX_ALLOWED_STRING_LENGTH) {
			DEBUG_BUILD && logger.warn(`\`dom.maxStringLength\` cannot exceed ${MAX_ALLOWED_STRING_LENGTH}, but a value of ${maxStringLength} was configured. Sentry will use ${MAX_ALLOWED_STRING_LENGTH} instead.`);
			maxStringLength = MAX_ALLOWED_STRING_LENGTH;
		}
		if (typeof keyAttrs === "string") keyAttrs = [keyAttrs];
		try {
			const event = handlerData.event;
			const element = _isEvent(event) ? event.target : event;
			target = htmlTreeAsString(element, {
				keyAttrs,
				maxStringLength
			});
			componentName = getComponentName(element);
		} catch (e) {
			target = "<unknown>";
		}
		if (target.length === 0) return;
		const breadcrumb = {
			category: `ui.${handlerData.name}`,
			message: target
		};
		if (componentName) breadcrumb.data = { "ui.component_name": componentName };
		addBreadcrumb(breadcrumb, {
			event: handlerData.event,
			name: handlerData.name,
			global: handlerData.global
		});
	};
}
/**
* Creates breadcrumbs from console API calls
*/
function _getConsoleBreadcrumbHandler(client) {
	return function _consoleBreadcrumb(handlerData) {
		if (getClient() !== client) return;
		const breadcrumb = {
			category: "console",
			data: {
				arguments: handlerData.args,
				logger: "console"
			},
			level: severityLevelFromString(handlerData.level),
			message: safeJoin(handlerData.args, " ")
		};
		if (handlerData.level === "assert") if (handlerData.args[0] === false) {
			breadcrumb.message = `Assertion failed: ${safeJoin(handlerData.args.slice(1), " ") || "console.assert"}`;
			breadcrumb.data.arguments = handlerData.args.slice(1);
		} else return;
		addBreadcrumb(breadcrumb, {
			input: handlerData.args,
			level: handlerData.level
		});
	};
}
/**
* Creates breadcrumbs from XHR API calls
*/
function _getXhrBreadcrumbHandler(client) {
	return function _xhrBreadcrumb(handlerData) {
		if (getClient() !== client) return;
		const { startTimestamp, endTimestamp } = handlerData;
		const sentryXhrData = handlerData.xhr[SENTRY_XHR_DATA_KEY];
		if (!startTimestamp || !endTimestamp || !sentryXhrData) return;
		const { method, url, status_code, body } = sentryXhrData;
		const data = {
			method,
			url,
			status_code
		};
		const hint = {
			xhr: handlerData.xhr,
			input: body,
			startTimestamp,
			endTimestamp
		};
		addBreadcrumb({
			category: "xhr",
			data,
			type: "http",
			level: getBreadcrumbLogLevelFromHttpStatusCode(status_code)
		}, hint);
	};
}
/**
* Creates breadcrumbs from fetch API calls
*/
function _getFetchBreadcrumbHandler(client) {
	return function _fetchBreadcrumb(handlerData) {
		if (getClient() !== client) return;
		const { startTimestamp, endTimestamp } = handlerData;
		if (!endTimestamp) return;
		if (handlerData.fetchData.url.match(/sentry_key/) && handlerData.fetchData.method === "POST") return;
		if (handlerData.error) {
			const data = handlerData.fetchData;
			const hint = {
				data: handlerData.error,
				input: handlerData.args,
				startTimestamp,
				endTimestamp
			};
			addBreadcrumb({
				category: "fetch",
				data,
				level: "error",
				type: "http"
			}, hint);
		} else {
			const response = handlerData.response;
			const data = {
				...handlerData.fetchData,
				status_code: response && response.status
			};
			const hint = {
				input: handlerData.args,
				response,
				startTimestamp,
				endTimestamp
			};
			addBreadcrumb({
				category: "fetch",
				data,
				type: "http",
				level: getBreadcrumbLogLevelFromHttpStatusCode(data.status_code)
			}, hint);
		}
	};
}
/**
* Creates breadcrumbs from history API calls
*/
function _getHistoryBreadcrumbHandler(client) {
	return function _historyBreadcrumb(handlerData) {
		if (getClient() !== client) return;
		let from = handlerData.from;
		let to = handlerData.to;
		const parsedLoc = parseUrl(WINDOW.location.href);
		let parsedFrom = from ? parseUrl(from) : void 0;
		const parsedTo = parseUrl(to);
		if (!parsedFrom || !parsedFrom.path) parsedFrom = parsedLoc;
		if (parsedLoc.protocol === parsedTo.protocol && parsedLoc.host === parsedTo.host) to = parsedTo.relative;
		if (parsedLoc.protocol === parsedFrom.protocol && parsedLoc.host === parsedFrom.host) from = parsedFrom.relative;
		addBreadcrumb({
			category: "navigation",
			data: {
				from,
				to
			}
		});
	};
}
function _isEvent(event) {
	return !!event && !!event.target;
}
//#endregion
//#region node_modules/@sentry/browser/build/npm/esm/integrations/browserapierrors.js
var DEFAULT_EVENT_TARGET = [
	"EventTarget",
	"Window",
	"Node",
	"ApplicationCache",
	"AudioTrackList",
	"BroadcastChannel",
	"ChannelMergerNode",
	"CryptoOperation",
	"EventSource",
	"FileReader",
	"HTMLUnknownElement",
	"IDBDatabase",
	"IDBRequest",
	"IDBTransaction",
	"KeyOperation",
	"MediaController",
	"MessagePort",
	"ModalWindow",
	"Notification",
	"SVGElementInstance",
	"Screen",
	"SharedWorker",
	"TextTrack",
	"TextTrackCue",
	"TextTrackList",
	"WebSocket",
	"WebSocketWorker",
	"Worker",
	"XMLHttpRequest",
	"XMLHttpRequestEventTarget",
	"XMLHttpRequestUpload"
];
var INTEGRATION_NAME$2 = "BrowserApiErrors";
var _browserApiErrorsIntegration = ((options = {}) => {
	const _options = {
		XMLHttpRequest: true,
		eventTarget: true,
		requestAnimationFrame: true,
		setInterval: true,
		setTimeout: true,
		...options
	};
	return {
		name: INTEGRATION_NAME$2,
		setupOnce() {
			if (_options.setTimeout) fill(WINDOW, "setTimeout", _wrapTimeFunction);
			if (_options.setInterval) fill(WINDOW, "setInterval", _wrapTimeFunction);
			if (_options.requestAnimationFrame) fill(WINDOW, "requestAnimationFrame", _wrapRAF);
			if (_options.XMLHttpRequest && "XMLHttpRequest" in WINDOW) fill(XMLHttpRequest.prototype, "send", _wrapXHR);
			const eventTargetOption = _options.eventTarget;
			if (eventTargetOption) (Array.isArray(eventTargetOption) ? eventTargetOption : DEFAULT_EVENT_TARGET).forEach(_wrapEventTarget);
		}
	};
});
/**
* Wrap timer functions and event targets to catch errors and provide better meta data.
*/
var browserApiErrorsIntegration = defineIntegration(_browserApiErrorsIntegration);
function _wrapTimeFunction(original) {
	return function(...args) {
		const originalCallback = args[0];
		args[0] = wrap(originalCallback, { mechanism: {
			data: { function: getFunctionName(original) },
			handled: false,
			type: "instrument"
		} });
		return original.apply(this, args);
	};
}
function _wrapRAF(original) {
	return function(callback) {
		return original.apply(this, [wrap(callback, { mechanism: {
			data: {
				function: "requestAnimationFrame",
				handler: getFunctionName(original)
			},
			handled: false,
			type: "instrument"
		} })]);
	};
}
function _wrapXHR(originalSend) {
	return function(...args) {
		const xhr = this;
		[
			"onload",
			"onerror",
			"onprogress",
			"onreadystatechange"
		].forEach((prop) => {
			if (prop in xhr && typeof xhr[prop] === "function") fill(xhr, prop, function(original) {
				const wrapOptions = { mechanism: {
					data: {
						function: prop,
						handler: getFunctionName(original)
					},
					handled: false,
					type: "instrument"
				} };
				const originalFunction = getOriginalFunction(original);
				if (originalFunction) wrapOptions.mechanism.data.handler = getFunctionName(originalFunction);
				return wrap(original, wrapOptions);
			});
		});
		return originalSend.apply(this, args);
	};
}
function _wrapEventTarget(target) {
	const targetObj = WINDOW[target];
	const proto = targetObj && targetObj.prototype;
	if (!proto || !proto.hasOwnProperty || !proto.hasOwnProperty("addEventListener")) return;
	fill(proto, "addEventListener", function(original) {
		return function(eventName, fn, options) {
			try {
				if (isEventListenerObject(fn)) fn.handleEvent = wrap(fn.handleEvent, { mechanism: {
					data: {
						function: "handleEvent",
						handler: getFunctionName(fn),
						target
					},
					handled: false,
					type: "instrument"
				} });
			} catch (e2) {}
			return original.apply(this, [
				eventName,
				wrap(fn, { mechanism: {
					data: {
						function: "addEventListener",
						handler: getFunctionName(fn),
						target
					},
					handled: false,
					type: "instrument"
				} }),
				options
			]);
		};
	});
	fill(proto, "removeEventListener", function(originalRemoveEventListener) {
		return function(eventName, fn, options) {
			/**
			* There are 2 possible scenarios here:
			*
			* 1. Someone passes a callback, which was attached prior to Sentry initialization, or by using unmodified
			* method, eg. `document.addEventListener.call(el, name, handler). In this case, we treat this function
			* as a pass-through, and call original `removeEventListener` with it.
			*
			* 2. Someone passes a callback, which was attached after Sentry was initialized, which means that it was using
			* our wrapped version of `addEventListener`, which internally calls `wrap` helper.
			* This helper "wraps" whole callback inside a try/catch statement, and attached appropriate metadata to it,
			* in order for us to make a distinction between wrapped/non-wrapped functions possible.
			* If a function was wrapped, it has additional property of `__sentry_wrapped__`, holding the handler.
			*
			* When someone adds a handler prior to initialization, and then do it again, but after,
			* then we have to detach both of them. Otherwise, if we'd detach only wrapped one, it'd be impossible
			* to get rid of the initial handler and it'd stick there forever.
			*/
			try {
				const originalEventHandler = fn.__sentry_wrapped__;
				if (originalEventHandler) originalRemoveEventListener.call(this, eventName, originalEventHandler, options);
			} catch (e) {}
			return originalRemoveEventListener.call(this, eventName, fn, options);
		};
	});
}
function isEventListenerObject(obj) {
	return typeof obj.handleEvent === "function";
}
//#endregion
//#region node_modules/@sentry/browser/build/npm/esm/integrations/browsersession.js
/**
* When added, automatically creates sessions which allow you to track adoption and crashes (crash free rate) in your Releases in Sentry.
* More information: https://docs.sentry.io/product/releases/health/
*
* Note: In order for session tracking to work, you need to set up Releases: https://docs.sentry.io/product/releases/
*/
var browserSessionIntegration = defineIntegration(() => {
	return {
		name: "BrowserSession",
		setupOnce() {
			if (typeof WINDOW.document === "undefined") {
				DEBUG_BUILD && logger.warn("Using the `browserSessionIntegration` in non-browser environments is not supported.");
				return;
			}
			startSession({ ignoreDuration: true });
			captureSession();
			addHistoryInstrumentationHandler(({ from, to }) => {
				if (from !== void 0 && from !== to) {
					startSession({ ignoreDuration: true });
					captureSession();
				}
			});
		}
	};
});
//#endregion
//#region node_modules/@sentry/browser/build/npm/esm/integrations/globalhandlers.js
var INTEGRATION_NAME$1 = "GlobalHandlers";
var _globalHandlersIntegration = ((options = {}) => {
	const _options = {
		onerror: true,
		onunhandledrejection: true,
		...options
	};
	return {
		name: INTEGRATION_NAME$1,
		setupOnce() {
			Error.stackTraceLimit = 50;
		},
		setup(client) {
			if (_options.onerror) {
				_installGlobalOnErrorHandler(client);
				globalHandlerLog("onerror");
			}
			if (_options.onunhandledrejection) {
				_installGlobalOnUnhandledRejectionHandler(client);
				globalHandlerLog("onunhandledrejection");
			}
		}
	};
});
var globalHandlersIntegration = defineIntegration(_globalHandlersIntegration);
function _installGlobalOnErrorHandler(client) {
	addGlobalErrorInstrumentationHandler((data) => {
		const { stackParser, attachStacktrace } = getOptions();
		if (getClient() !== client || shouldIgnoreOnError()) return;
		const { msg, url, line, column, error } = data;
		const event = _enhanceEventWithInitialFrame(eventFromUnknownInput(stackParser, error || msg, void 0, attachStacktrace, false), url, line, column);
		event.level = "error";
		captureEvent(event, {
			originalException: error,
			mechanism: {
				handled: false,
				type: "onerror"
			}
		});
	});
}
function _installGlobalOnUnhandledRejectionHandler(client) {
	addGlobalUnhandledRejectionInstrumentationHandler((e) => {
		const { stackParser, attachStacktrace } = getOptions();
		if (getClient() !== client || shouldIgnoreOnError()) return;
		const error = _getUnhandledRejectionError(e);
		const event = isPrimitive(error) ? _eventFromRejectionWithPrimitive(error) : eventFromUnknownInput(stackParser, error, void 0, attachStacktrace, true);
		event.level = "error";
		captureEvent(event, {
			originalException: error,
			mechanism: {
				handled: false,
				type: "onunhandledrejection"
			}
		});
	});
}
function _getUnhandledRejectionError(error) {
	if (isPrimitive(error)) return error;
	try {
		if ("reason" in error) return error.reason;
		if ("detail" in error && "reason" in error.detail) return error.detail.reason;
	} catch (e2) {}
	return error;
}
/**
* Create an event from a promise rejection where the `reason` is a primitive.
*
* @param reason: The `reason` property of the promise rejection
* @returns An Event object with an appropriate `exception` value
*/
function _eventFromRejectionWithPrimitive(reason) {
	return { exception: { values: [{
		type: "UnhandledRejection",
		value: `Non-Error promise rejection captured with value: ${String(reason)}`
	}] } };
}
function _enhanceEventWithInitialFrame(event, url, line, column) {
	const e = event.exception = event.exception || {};
	const ev = e.values = e.values || [];
	const ev0 = ev[0] = ev[0] || {};
	const ev0s = ev0.stacktrace = ev0.stacktrace || {};
	const ev0sf = ev0s.frames = ev0s.frames || [];
	const colno = column;
	const lineno = line;
	const filename = isString(url) && url.length > 0 ? url : getLocationHref();
	if (ev0sf.length === 0) ev0sf.push({
		colno,
		filename,
		function: "?",
		in_app: true,
		lineno
	});
	return event;
}
function globalHandlerLog(type) {
	DEBUG_BUILD && logger.log(`Global Handler attached: ${type}`);
}
function getOptions() {
	const client = getClient();
	return client && client.getOptions() || {
		stackParser: () => [],
		attachStacktrace: false
	};
}
//#endregion
//#region node_modules/@sentry/browser/build/npm/esm/integrations/httpcontext.js
/**
* Collects information about HTTP request headers and
* attaches them to the event.
*/
var httpContextIntegration = defineIntegration(() => {
	return {
		name: "HttpContext",
		preprocessEvent(event) {
			if (!WINDOW.navigator && !WINDOW.location && !WINDOW.document) return;
			const url = event.request && event.request.url || WINDOW.location && WINDOW.location.href;
			const { referrer } = WINDOW.document || {};
			const { userAgent } = WINDOW.navigator || {};
			const headers = {
				...event.request && event.request.headers,
				...referrer && { Referer: referrer },
				...userAgent && { "User-Agent": userAgent }
			};
			event.request = {
				...event.request,
				...url && { url },
				headers
			};
		}
	};
});
//#endregion
//#region node_modules/@sentry/browser/build/npm/esm/integrations/linkederrors.js
var DEFAULT_KEY = "cause";
var DEFAULT_LIMIT = 5;
var INTEGRATION_NAME = "LinkedErrors";
var _linkedErrorsIntegration = ((options = {}) => {
	const limit = options.limit || DEFAULT_LIMIT;
	const key = options.key || DEFAULT_KEY;
	return {
		name: INTEGRATION_NAME,
		preprocessEvent(event, hint, client) {
			const options = client.getOptions();
			applyAggregateErrorsToEvent(exceptionFromError, options.stackParser, options.maxValueLength, key, limit, event, hint);
		}
	};
});
/**
* Aggregrate linked errors in an event.
*/
var linkedErrorsIntegration = defineIntegration(_linkedErrorsIntegration);
//#endregion
//#region node_modules/@sentry/browser/build/npm/esm/sdk.js
/** Get the default integrations for the browser SDK. */
function getDefaultIntegrations(options) {
	/**
	* Note: Please make sure this stays in sync with Angular SDK, which re-exports
	* `getDefaultIntegrations` but with an adjusted set of integrations.
	*/
	const integrations = [
		inboundFiltersIntegration(),
		functionToStringIntegration(),
		browserApiErrorsIntegration(),
		breadcrumbsIntegration(),
		globalHandlersIntegration(),
		linkedErrorsIntegration(),
		dedupeIntegration(),
		httpContextIntegration()
	];
	if (options.autoSessionTracking !== false) integrations.push(browserSessionIntegration());
	return integrations;
}
function applyDefaultOptions(optionsArg = {}) {
	const defaultOptions = {
		defaultIntegrations: getDefaultIntegrations(optionsArg),
		release: typeof __SENTRY_RELEASE__ === "string" ? __SENTRY_RELEASE__ : WINDOW.SENTRY_RELEASE && WINDOW.SENTRY_RELEASE.id ? WINDOW.SENTRY_RELEASE.id : void 0,
		autoSessionTracking: true,
		sendClientReports: true
	};
	if (optionsArg.defaultIntegrations == null) delete optionsArg.defaultIntegrations;
	return {
		...defaultOptions,
		...optionsArg
	};
}
function shouldShowBrowserExtensionError() {
	const windowWithMaybeExtension = typeof WINDOW.window !== "undefined" && WINDOW;
	if (!windowWithMaybeExtension) return false;
	const extensionObject = windowWithMaybeExtension[windowWithMaybeExtension.chrome ? "chrome" : "browser"];
	const runtimeId = extensionObject && extensionObject.runtime && extensionObject.runtime.id;
	const href = WINDOW.location && WINDOW.location.href || "";
	const isDedicatedExtensionPage = !!runtimeId && WINDOW === WINDOW.top && [
		"chrome-extension:",
		"moz-extension:",
		"ms-browser-extension:",
		"safari-web-extension:"
	].some((protocol) => href.startsWith(`${protocol}//`));
	const isNWjs = typeof windowWithMaybeExtension.nw !== "undefined";
	return !!runtimeId && !isDedicatedExtensionPage && !isNWjs;
}
/**
* A magic string that build tooling can leverage in order to inject a release value into the SDK.
*/
/**
* The Sentry Browser SDK Client.
*
* To use this SDK, call the {@link init} function as early as possible when
* loading the web page. To set context information or send manual events, use
* the provided methods.
*
* @example
*
* ```
*
* import { init } from '@sentry/browser';
*
* init({
*   dsn: '__DSN__',
*   // ...
* });
* ```
*
* @example
* ```
*
* import { addBreadcrumb } from '@sentry/browser';
* addBreadcrumb({
*   message: 'My Breadcrumb',
*   // ...
* });
* ```
*
* @example
*
* ```
*
* import * as Sentry from '@sentry/browser';
* Sentry.captureMessage('Hello, world!');
* Sentry.captureException(new Error('Good bye'));
* Sentry.captureEvent({
*   message: 'Manual',
*   stacktrace: [
*     // ...
*   ],
* });
* ```
*
* @see {@link BrowserOptions} for documentation on configuration options.
*/
function init(browserOptions = {}) {
	const options = applyDefaultOptions(browserOptions);
	if (!options.skipBrowserExtensionCheck && shouldShowBrowserExtensionError()) {
		consoleSandbox(() => {
			console.error("[Sentry] You cannot run Sentry this way in a browser extension, check: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/");
		});
		return;
	}
	if (DEBUG_BUILD) {
		if (!supportsFetch()) logger.warn("No Fetch API detected. The Sentry SDK requires a Fetch API compatible environment to send events. Please add a Fetch API polyfill.");
	}
	return initAndBind(BrowserClient, {
		...options,
		stackParser: stackParserFromStackParserOptions(options.stackParser || defaultStackParser),
		integrations: getIntegrationsToSetup(options),
		transport: options.transport || makeFetchTransport
	});
}
//#endregion
export { getClient as _, browserApiErrorsIntegration as a, Scope as b, makeFetchTransport as c, inboundFiltersIntegration as d, functionToStringIntegration as f, setContext as g, isInitialized as h, globalHandlersIntegration as i, BrowserClient as l, captureException as m, linkedErrorsIntegration as n, breadcrumbsIntegration as o, applySdkMetadata as p, httpContextIntegration as r, defaultStackParser as s, init as t, dedupeIntegration as u, getCurrentScope as v, withScope as y };
