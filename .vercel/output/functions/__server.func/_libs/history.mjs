import { a as _extends } from "./babel__runtime.mjs";
//#region node_modules/history/index.js
/**
* Actions represent the type of change to a location value.
*
* @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#action
*/
var Action;
(function(Action) {
	/**
	* A POP indicates a change to an arbitrary index in the history stack, such
	* as a back or forward navigation. It does not describe the direction of the
	* navigation, only that the current index changed.
	*
	* Note: This is the default action for newly created history objects.
	*/
	Action["Pop"] = "POP";
	/**
	* A PUSH indicates a new entry being added to the history stack, such as when
	* a link is clicked and a new page loads. When this happens, all subsequent
	* entries in the stack are lost.
	*/
	Action["Push"] = "PUSH";
	/**
	* A REPLACE indicates the entry at the current index in the history stack
	* being replaced by a new one.
	*/
	Action["Replace"] = "REPLACE";
})(Action || (Action = {}));
var readOnly = function(obj) {
	return obj;
};
var BeforeUnloadEventType = "beforeunload";
var PopStateEventType = "popstate";
/**
* Browser history stores the location in regular URLs. This is the standard for
* most web apps, but it requires some configuration on the server to ensure you
* serve the same app at multiple URLs.
*
* @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createbrowserhistory
*/
function createBrowserHistory(options) {
	if (options === void 0) options = {};
	var _options$window = options.window, window = _options$window === void 0 ? document.defaultView : _options$window;
	var globalHistory = window.history;
	function getIndexAndLocation() {
		var _window$location = window.location, pathname = _window$location.pathname, search = _window$location.search, hash = _window$location.hash;
		var state = globalHistory.state || {};
		return [state.idx, readOnly({
			pathname,
			search,
			hash,
			state: state.usr || null,
			key: state.key || "default"
		})];
	}
	var blockedPopTx = null;
	function handlePop() {
		if (blockedPopTx) {
			blockers.call(blockedPopTx);
			blockedPopTx = null;
		} else {
			var nextAction = Action.Pop;
			var _getIndexAndLocation = getIndexAndLocation(), nextIndex = _getIndexAndLocation[0], nextLocation = _getIndexAndLocation[1];
			if (blockers.length) {
				if (nextIndex != null) {
					var delta = index - nextIndex;
					if (delta) {
						blockedPopTx = {
							action: nextAction,
							location: nextLocation,
							retry: function retry() {
								go(delta * -1);
							}
						};
						go(delta);
					}
				}
			} else applyTx(nextAction);
		}
	}
	window.addEventListener(PopStateEventType, handlePop);
	var action = Action.Pop;
	var _getIndexAndLocation2 = getIndexAndLocation(), index = _getIndexAndLocation2[0], location = _getIndexAndLocation2[1];
	var listeners = createEvents();
	var blockers = createEvents();
	if (index == null) {
		index = 0;
		globalHistory.replaceState(_extends({}, globalHistory.state, { idx: index }), "");
	}
	function createHref(to) {
		return typeof to === "string" ? to : createPath(to);
	}
	function getNextLocation(to, state) {
		if (state === void 0) state = null;
		return readOnly(_extends({
			pathname: location.pathname,
			hash: "",
			search: ""
		}, typeof to === "string" ? parsePath(to) : to, {
			state,
			key: createKey()
		}));
	}
	function getHistoryStateAndUrl(nextLocation, index) {
		return [{
			usr: nextLocation.state,
			key: nextLocation.key,
			idx: index
		}, createHref(nextLocation)];
	}
	function allowTx(action, location, retry) {
		return !blockers.length || (blockers.call({
			action,
			location,
			retry
		}), false);
	}
	function applyTx(nextAction) {
		action = nextAction;
		var _getIndexAndLocation3 = getIndexAndLocation();
		index = _getIndexAndLocation3[0];
		location = _getIndexAndLocation3[1];
		listeners.call({
			action,
			location
		});
	}
	function push(to, state) {
		var nextAction = Action.Push;
		var nextLocation = getNextLocation(to, state);
		function retry() {
			push(to, state);
		}
		if (allowTx(nextAction, nextLocation, retry)) {
			var _getHistoryStateAndUr = getHistoryStateAndUrl(nextLocation, index + 1), historyState = _getHistoryStateAndUr[0], url = _getHistoryStateAndUr[1];
			try {
				globalHistory.pushState(historyState, "", url);
			} catch (error) {
				window.location.assign(url);
			}
			applyTx(nextAction);
		}
	}
	function replace(to, state) {
		var nextAction = Action.Replace;
		var nextLocation = getNextLocation(to, state);
		function retry() {
			replace(to, state);
		}
		if (allowTx(nextAction, nextLocation, retry)) {
			var _getHistoryStateAndUr2 = getHistoryStateAndUrl(nextLocation, index), historyState = _getHistoryStateAndUr2[0], url = _getHistoryStateAndUr2[1];
			globalHistory.replaceState(historyState, "", url);
			applyTx(nextAction);
		}
	}
	function go(delta) {
		globalHistory.go(delta);
	}
	return {
		get action() {
			return action;
		},
		get location() {
			return location;
		},
		createHref,
		push,
		replace,
		go,
		back: function back() {
			go(-1);
		},
		forward: function forward() {
			go(1);
		},
		listen: function listen(listener) {
			return listeners.push(listener);
		},
		block: function block(blocker) {
			var unblock = blockers.push(blocker);
			if (blockers.length === 1) window.addEventListener(BeforeUnloadEventType, promptBeforeUnload);
			return function() {
				unblock();
				if (!blockers.length) window.removeEventListener(BeforeUnloadEventType, promptBeforeUnload);
			};
		}
	};
}
/**
* Memory history stores the current location in memory. It is designed for use
* in stateful non-browser environments like tests and React Native.
*
* @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#creatememoryhistory
*/
function createMemoryHistory(options) {
	if (options === void 0) options = {};
	var _options3 = options, _options3$initialEntr = _options3.initialEntries, initialEntries = _options3$initialEntr === void 0 ? ["/"] : _options3$initialEntr, initialIndex = _options3.initialIndex;
	var entries = initialEntries.map(function(entry) {
		return readOnly(_extends({
			pathname: "/",
			search: "",
			hash: "",
			state: null,
			key: createKey()
		}, typeof entry === "string" ? parsePath(entry) : entry));
	});
	var index = clamp(initialIndex == null ? entries.length - 1 : initialIndex, 0, entries.length - 1);
	var action = Action.Pop;
	var location = entries[index];
	var listeners = createEvents();
	var blockers = createEvents();
	function createHref(to) {
		return typeof to === "string" ? to : createPath(to);
	}
	function getNextLocation(to, state) {
		if (state === void 0) state = null;
		return readOnly(_extends({
			pathname: location.pathname,
			search: "",
			hash: ""
		}, typeof to === "string" ? parsePath(to) : to, {
			state,
			key: createKey()
		}));
	}
	function allowTx(action, location, retry) {
		return !blockers.length || (blockers.call({
			action,
			location,
			retry
		}), false);
	}
	function applyTx(nextAction, nextLocation) {
		action = nextAction;
		location = nextLocation;
		listeners.call({
			action,
			location
		});
	}
	function push(to, state) {
		var nextAction = Action.Push;
		var nextLocation = getNextLocation(to, state);
		function retry() {
			push(to, state);
		}
		if (allowTx(nextAction, nextLocation, retry)) {
			index += 1;
			entries.splice(index, entries.length, nextLocation);
			applyTx(nextAction, nextLocation);
		}
	}
	function replace(to, state) {
		var nextAction = Action.Replace;
		var nextLocation = getNextLocation(to, state);
		function retry() {
			replace(to, state);
		}
		if (allowTx(nextAction, nextLocation, retry)) {
			entries[index] = nextLocation;
			applyTx(nextAction, nextLocation);
		}
	}
	function go(delta) {
		var nextIndex = clamp(index + delta, 0, entries.length - 1);
		var nextAction = Action.Pop;
		var nextLocation = entries[nextIndex];
		function retry() {
			go(delta);
		}
		if (allowTx(nextAction, nextLocation, retry)) {
			index = nextIndex;
			applyTx(nextAction, nextLocation);
		}
	}
	return {
		get index() {
			return index;
		},
		get action() {
			return action;
		},
		get location() {
			return location;
		},
		createHref,
		push,
		replace,
		go,
		back: function back() {
			go(-1);
		},
		forward: function forward() {
			go(1);
		},
		listen: function listen(listener) {
			return listeners.push(listener);
		},
		block: function block(blocker) {
			return blockers.push(blocker);
		}
	};
}
function clamp(n, lowerBound, upperBound) {
	return Math.min(Math.max(n, lowerBound), upperBound);
}
function promptBeforeUnload(event) {
	event.preventDefault();
	event.returnValue = "";
}
function createEvents() {
	var handlers = [];
	return {
		get length() {
			return handlers.length;
		},
		push: function push(fn) {
			handlers.push(fn);
			return function() {
				handlers = handlers.filter(function(handler) {
					return handler !== fn;
				});
			};
		},
		call: function call(arg) {
			handlers.forEach(function(fn) {
				return fn && fn(arg);
			});
		}
	};
}
function createKey() {
	return Math.random().toString(36).substr(2, 8);
}
/**
* Creates a string URL path from the given pathname, search, and hash components.
*
* @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createpath
*/
function createPath(_ref) {
	var _ref$pathname = _ref.pathname, pathname = _ref$pathname === void 0 ? "/" : _ref$pathname, _ref$search = _ref.search, search = _ref$search === void 0 ? "" : _ref$search, _ref$hash = _ref.hash, hash = _ref$hash === void 0 ? "" : _ref$hash;
	if (search && search !== "?") pathname += search.charAt(0) === "?" ? search : "?" + search;
	if (hash && hash !== "#") pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
	return pathname;
}
/**
* Parses a string URL path into its separate pathname, search, and hash components.
*
* @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#parsepath
*/
function parsePath(path) {
	var parsedPath = {};
	if (path) {
		var hashIndex = path.indexOf("#");
		if (hashIndex >= 0) {
			parsedPath.hash = path.substr(hashIndex);
			path = path.substr(0, hashIndex);
		}
		var searchIndex = path.indexOf("?");
		if (searchIndex >= 0) {
			parsedPath.search = path.substr(searchIndex);
			path = path.substr(0, searchIndex);
		}
		if (path) parsedPath.pathname = path;
	}
	return parsedPath;
}
//#endregion
export { createMemoryHistory as n, createBrowserHistory as t };
