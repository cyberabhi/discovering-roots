//#region node_modules/@date-fns/utc/date/mini.js
var UTCDateMini = class extends Date {
	constructor() {
		super();
		this.setTime(arguments.length === 0 ? Date.now() : arguments.length === 1 ? typeof arguments[0] === "string" ? +new Date(arguments[0]) : arguments[0] : Date.UTC(...arguments));
	}
	getTimezoneOffset() {
		return 0;
	}
};
var re = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((method) => {
	if (re.test(method)) {
		const utcMethod = Date.prototype[method.replace(re, "$1UTC")];
		if (utcMethod) UTCDateMini.prototype[method] = utcMethod;
	}
});
new Intl.DateTimeFormat("en-US", {
	weekday: "short",
	timeZone: "UTC"
});
new Intl.DateTimeFormat("en-US", {
	month: "short",
	day: "numeric",
	timeZone: "UTC"
});
new Intl.DateTimeFormat("en-GB", {
	hour12: false,
	hour: "numeric",
	minute: "numeric",
	second: "numeric",
	timeZone: "UTC"
});
//#endregion
export { UTCDateMini as t };
