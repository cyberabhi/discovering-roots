import { A as minutesInDay, C as startOfWeek, D as constructFrom, E as toDate, O as millisecondsInHour, S as getTimezoneOffsetInMilliseconds, T as addDays, _ as enUS, b as startOfDay, h as format, j as minutesInMonth, k as millisecondsInMinute, w as getDefaultOptions, x as normalizeDates, y as differenceInCalendarDays } from "./date-fns+sanity__util.mjs";
//#region node_modules/date-fns/addMonths.js
/**
* The {@link addMonths} function options.
*/
/**
* @name addMonths
* @category Month Helpers
* @summary Add the specified number of months to the given date.
*
* @description
* Add the specified number of months to the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The date to be changed
* @param amount - The amount of months to be added.
* @param options - The options object
*
* @returns The new date with the months added
*
* @example
* // Add 5 months to 1 September 2014:
* const result = addMonths(new Date(2014, 8, 1), 5)
* //=> Sun Feb 01 2015 00:00:00
*
* // Add one month to 30 January 2023:
* const result = addMonths(new Date(2023, 0, 30), 1)
* //=> Tue Feb 28 2023 00:00:00
*/
function addMonths(date, amount, options) {
	const _date = toDate(date, options?.in);
	if (isNaN(amount)) return constructFrom(options?.in || date, NaN);
	if (!amount) return _date;
	const dayOfMonth = _date.getDate();
	const endOfDesiredMonth = constructFrom(options?.in || date, _date.getTime());
	endOfDesiredMonth.setMonth(_date.getMonth() + amount + 1, 0);
	if (dayOfMonth >= endOfDesiredMonth.getDate()) return endOfDesiredMonth;
	else {
		_date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
		return _date;
	}
}
//#endregion
//#region node_modules/date-fns/isWeekend.js
/**
* The {@link isWeekend} function options.
*/
/**
* @name isWeekend
* @category Weekday Helpers
* @summary Does the given date fall on a weekend?
*
* @description
* Does the given date fall on a weekend? A weekend is either Saturday (`6`) or Sunday (`0`).
*
* @param date - The date to check
* @param options - An object with options
*
* @returns The date falls on a weekend
*
* @example
* // Does 5 October 2014 fall on a weekend?
* const result = isWeekend(new Date(2014, 9, 5))
* //=> true
*/
function isWeekend(date, options) {
	const day = toDate(date, options?.in).getDay();
	return day === 0 || day === 6;
}
//#endregion
//#region node_modules/date-fns/addMilliseconds.js
/**
* The {@link addMilliseconds} function options.
*/
/**
* @name addMilliseconds
* @category Millisecond Helpers
* @summary Add the specified number of milliseconds to the given date.
*
* @description
* Add the specified number of milliseconds to the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The date to be changed
* @param amount - The amount of milliseconds to be added.
* @param options - The options object
*
* @returns The new date with the milliseconds added
*
* @example
* // Add 750 milliseconds to 10 July 2014 12:45:30.000:
* const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
* //=> Thu Jul 10 2014 12:45:30.750
*/
function addMilliseconds(date, amount, options) {
	return constructFrom(options?.in || date, +toDate(date) + amount);
}
//#endregion
//#region node_modules/date-fns/addHours.js
/**
* The {@link addHours} function options.
*/
/**
* @name addHours
* @category Hour Helpers
* @summary Add the specified number of hours to the given date.
*
* @description
* Add the specified number of hours to the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The date to be changed
* @param amount - The amount of hours to be added
* @param options - An object with options
*
* @returns The new date with the hours added
*
* @example
* // Add 2 hours to 10 July 2014 23:00:00:
* const result = addHours(new Date(2014, 6, 10, 23, 0), 2)
* //=> Fri Jul 11 2014 01:00:00
*/
function addHours(date, amount, options) {
	return addMilliseconds(date, amount * millisecondsInHour, options);
}
//#endregion
//#region node_modules/date-fns/addWeeks.js
/**
* The {@link addWeeks} function options.
*/
/**
* @name addWeeks
* @category Week Helpers
* @summary Add the specified number of weeks to the given date.
*
* @description
* Add the specified number of weeks to the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The date to be changed
* @param amount - The amount of weeks to be added.
* @param options - An object with options
*
* @returns The new date with the weeks added
*
* @example
* // Add 4 weeks to 1 September 2014:
* const result = addWeeks(new Date(2014, 8, 1), 4)
* //=> Mon Sep 29 2014 00:00:00
*/
function addWeeks(date, amount, options) {
	return addDays(date, amount * 7, options);
}
//#endregion
//#region node_modules/date-fns/compareAsc.js
/**
* @name compareAsc
* @category Common Helpers
* @summary Compare the two dates and return -1, 0 or 1.
*
* @description
* Compare the two dates and return 1 if the first date is after the second,
* -1 if the first date is before the second or 0 if dates are equal.
*
* @param dateLeft - The first date to compare
* @param dateRight - The second date to compare
*
* @returns The result of the comparison
*
* @example
* // Compare 11 February 1987 and 10 July 1989:
* const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
* //=> -1
*
* @example
* // Sort the array of dates:
* const result = [
*   new Date(1995, 6, 2),
*   new Date(1987, 1, 11),
*   new Date(1989, 6, 10)
* ].sort(compareAsc)
* //=> [
* //   Wed Feb 11 1987 00:00:00,
* //   Mon Jul 10 1989 00:00:00,
* //   Sun Jul 02 1995 00:00:00
* // ]
*/
function compareAsc(dateLeft, dateRight) {
	const diff = +toDate(dateLeft) - +toDate(dateRight);
	if (diff < 0) return -1;
	else if (diff > 0) return 1;
	return diff;
}
//#endregion
//#region node_modules/date-fns/constructNow.js
/**
* @name constructNow
* @category Generic Helpers
* @summary Constructs a new current date using the passed value constructor.
* @pure false
*
* @description
* The function constructs a new current date using the constructor from
* the reference date. It helps to build generic functions that accept date
* extensions and use the current date.
*
* It defaults to `Date` if the passed reference date is a number or a string.
*
* @param date - The reference date to take constructor from
*
* @returns Current date initialized using the given date constructor
*
* @example
* import { constructNow, isSameDay } from 'date-fns'
*
* function isToday<DateType extends Date>(
*   date: DateArg<DateType>,
* ): boolean {
*   // If we were to use `new Date()` directly, the function would  behave
*   // differently in different timezones and return false for the same date.
*   return isSameDay(date, constructNow(date));
* }
*/
function constructNow(date) {
	return constructFrom(date, Date.now());
}
//#endregion
//#region node_modules/date-fns/isSameDay.js
/**
* The {@link isSameDay} function options.
*/
/**
* @name isSameDay
* @category Day Helpers
* @summary Are the given dates in the same day (and year and month)?
*
* @description
* Are the given dates in the same day (and year and month)?
*
* @param laterDate - The first date to check
* @param earlierDate - The second date to check
* @param options - An object with options
*
* @returns The dates are in the same day (and year and month)
*
* @example
* // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
* const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
* //=> true
*
* @example
* // Are 4 September and 4 October in the same day?
* const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
* //=> false
*
* @example
* // Are 4 September, 2014 and 4 September, 2015 in the same day?
* const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
* //=> false
*/
function isSameDay(laterDate, earlierDate, options) {
	const [dateLeft_, dateRight_] = normalizeDates(options?.in, laterDate, earlierDate);
	return +startOfDay(dateLeft_) === +startOfDay(dateRight_);
}
//#endregion
//#region node_modules/date-fns/differenceInCalendarMonths.js
/**
* The {@link differenceInCalendarMonths} function options.
*/
/**
* @name differenceInCalendarMonths
* @category Month Helpers
* @summary Get the number of calendar months between the given dates.
*
* @description
* Get the number of calendar months between the given dates.
*
* @param laterDate - The later date
* @param earlierDate - The earlier date
* @param options - An object with options
*
* @returns The number of calendar months
*
* @example
* // How many calendar months are between 31 January 2014 and 1 September 2014?
* const result = differenceInCalendarMonths(
*   new Date(2014, 8, 1),
*   new Date(2014, 0, 31)
* )
* //=> 8
*/
function differenceInCalendarMonths(laterDate, earlierDate, options) {
	const [laterDate_, earlierDate_] = normalizeDates(options?.in, laterDate, earlierDate);
	const yearsDiff = laterDate_.getFullYear() - earlierDate_.getFullYear();
	const monthsDiff = laterDate_.getMonth() - earlierDate_.getMonth();
	return yearsDiff * 12 + monthsDiff;
}
//#endregion
//#region node_modules/date-fns/differenceInCalendarYears.js
/**
* The {@link differenceInCalendarYears} function options.
*/
/**
* @name differenceInCalendarYears
* @category Year Helpers
* @summary Get the number of calendar years between the given dates.
*
* @description
* Get the number of calendar years between the given dates.
*
* @param laterDate - The later date
* @param earlierDate - The earlier date
* @param options - An object with options

* @returns The number of calendar years
*
* @example
* // How many calendar years are between 31 December 2013 and 11 February 2015?
* const result = differenceInCalendarYears(
*   new Date(2015, 1, 11),
*   new Date(2013, 11, 31)
* );
* //=> 2
*/
function differenceInCalendarYears(laterDate, earlierDate, options) {
	const [laterDate_, earlierDate_] = normalizeDates(options?.in, laterDate, earlierDate);
	return laterDate_.getFullYear() - earlierDate_.getFullYear();
}
//#endregion
//#region node_modules/date-fns/differenceInDays.js
/**
* The {@link differenceInDays} function options.
*/
/**
* @name differenceInDays
* @category Day Helpers
* @summary Get the number of full days between the given dates.
*
* @description
* Get the number of full day periods between two dates. Fractional days are
* truncated towards zero.
*
* One "full day" is the distance between a local time in one day to the same
* local time on the next or previous day. A full day can sometimes be less than
* or more than 24 hours if a daylight savings change happens between two dates.
*
* To ignore DST and only measure exact 24-hour periods, use this instead:
* `Math.trunc(differenceInHours(dateLeft, dateRight)/24)|0`.
*
* @param laterDate - The later date
* @param earlierDate - The earlier date
* @param options - An object with options
*
* @returns The number of full days according to the local timezone
*
* @example
* // How many full days are between
* // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
* const result = differenceInDays(
*   new Date(2012, 6, 2, 0, 0),
*   new Date(2011, 6, 2, 23, 0)
* )
* //=> 365
*
* @example
* // How many full days are between
* // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
* const result = differenceInDays(
*   new Date(2011, 6, 3, 0, 1),
*   new Date(2011, 6, 2, 23, 59)
* )
* //=> 0
*
* @example
* // How many full days are between
* // 1 March 2020 0:00 and 1 June 2020 0:00 ?
* // Note: because local time is used, the
* // result will always be 92 days, even in
* // time zones where DST starts and the
* // period has only 92*24-1 hours.
* const result = differenceInDays(
*   new Date(2020, 5, 1),
*   new Date(2020, 2, 1)
* )
* //=> 92
*/
function differenceInDays(laterDate, earlierDate, options) {
	const [laterDate_, earlierDate_] = normalizeDates(options?.in, laterDate, earlierDate);
	const sign = compareLocalAsc(laterDate_, earlierDate_);
	const difference = Math.abs(differenceInCalendarDays(laterDate_, earlierDate_));
	laterDate_.setDate(laterDate_.getDate() - sign * difference);
	const result = sign * (difference - Number(compareLocalAsc(laterDate_, earlierDate_) === -sign));
	return result === 0 ? 0 : result;
}
function compareLocalAsc(laterDate, earlierDate) {
	const diff = laterDate.getFullYear() - earlierDate.getFullYear() || laterDate.getMonth() - earlierDate.getMonth() || laterDate.getDate() - earlierDate.getDate() || laterDate.getHours() - earlierDate.getHours() || laterDate.getMinutes() - earlierDate.getMinutes() || laterDate.getSeconds() - earlierDate.getSeconds() || laterDate.getMilliseconds() - earlierDate.getMilliseconds();
	if (diff < 0) return -1;
	if (diff > 0) return 1;
	return diff;
}
//#endregion
//#region node_modules/date-fns/_lib/getRoundingMethod.js
function getRoundingMethod(method) {
	return (number) => {
		const result = (method ? Math[method] : Math.trunc)(number);
		return result === 0 ? 0 : result;
	};
}
//#endregion
//#region node_modules/date-fns/differenceInHours.js
/**
* The {@link differenceInHours} function options.
*/
/**
* @name differenceInHours
* @category Hour Helpers
* @summary Get the number of hours between the given dates.
*
* @description
* Get the number of hours between the given dates.
*
* @param laterDate - The later date
* @param earlierDate - The earlier date
* @param options - An object with options.
*
* @returns The number of hours
*
* @example
* // How many hours are between 2 July 2014 06:50:00 and 2 July 2014 19:00:00?
* const result = differenceInHours(
*   new Date(2014, 6, 2, 19, 0),
*   new Date(2014, 6, 2, 6, 50)
* )
* //=> 12
*/
function differenceInHours(laterDate, earlierDate, options) {
	const [laterDate_, earlierDate_] = normalizeDates(options?.in, laterDate, earlierDate);
	const diff = (+laterDate_ - +earlierDate_) / millisecondsInHour;
	return getRoundingMethod(options?.roundingMethod)(diff);
}
//#endregion
//#region node_modules/date-fns/differenceInMilliseconds.js
/**
* @name differenceInMilliseconds
* @category Millisecond Helpers
* @summary Get the number of milliseconds between the given dates.
*
* @description
* Get the number of milliseconds between the given dates.
*
* @param laterDate - The later date
* @param earlierDate - The earlier date
*
* @returns The number of milliseconds
*
* @example
* // How many milliseconds are between
* // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
* const result = differenceInMilliseconds(
*   new Date(2014, 6, 2, 12, 30, 21, 700),
*   new Date(2014, 6, 2, 12, 30, 20, 600)
* )
* //=> 1100
*/
function differenceInMilliseconds(laterDate, earlierDate) {
	return +toDate(laterDate) - +toDate(earlierDate);
}
//#endregion
//#region node_modules/date-fns/differenceInMinutes.js
/**
* The {@link differenceInMinutes} function options.
*/
/**
* @name differenceInMinutes
* @category Minute Helpers
* @summary Get the number of minutes between the given dates.
*
* @description
* Get the signed number of full (rounded towards 0) minutes between the given dates.
*
* @param dateLeft - The later date
* @param dateRight - The earlier date
* @param options - An object with options.
*
* @returns The number of minutes
*
* @example
* // How many minutes are between 2 July 2014 12:07:59 and 2 July 2014 12:20:00?
* const result = differenceInMinutes(
*   new Date(2014, 6, 2, 12, 20, 0),
*   new Date(2014, 6, 2, 12, 7, 59)
* )
* //=> 12
*
* @example
* // How many minutes are between 10:01:59 and 10:00:00
* const result = differenceInMinutes(
*   new Date(2000, 0, 1, 10, 0, 0),
*   new Date(2000, 0, 1, 10, 1, 59)
* )
* //=> -1
*/
function differenceInMinutes(dateLeft, dateRight, options) {
	const diff = differenceInMilliseconds(dateLeft, dateRight) / millisecondsInMinute;
	return getRoundingMethod(options?.roundingMethod)(diff);
}
//#endregion
//#region node_modules/date-fns/endOfDay.js
/**
* The {@link endOfDay} function options.
*/
/**
* @name endOfDay
* @category Day Helpers
* @summary Return the end of a day for the given date.
*
* @description
* Return the end of a day for the given date.
* The result will be in the local timezone.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The original date
* @param options - An object with options
*
* @returns The end of a day
*
* @example
* // The end of a day for 2 September 2014 11:55:00:
* const result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
* //=> Tue Sep 02 2014 23:59:59.999
*/
function endOfDay(date, options) {
	const _date = toDate(date, options?.in);
	_date.setHours(23, 59, 59, 999);
	return _date;
}
//#endregion
//#region node_modules/date-fns/endOfMonth.js
/**
* The {@link endOfMonth} function options.
*/
/**
* @name endOfMonth
* @category Month Helpers
* @summary Return the end of a month for the given date.
*
* @description
* Return the end of a month for the given date.
* The result will be in the local timezone.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The original date
* @param options - An object with options
*
* @returns The end of a month
*
* @example
* // The end of a month for 2 September 2014 11:55:00:
* const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
* //=> Tue Sep 30 2014 23:59:59.999
*/
function endOfMonth(date, options) {
	const _date = toDate(date, options?.in);
	const month = _date.getMonth();
	_date.setFullYear(_date.getFullYear(), month + 1, 0);
	_date.setHours(23, 59, 59, 999);
	return _date;
}
//#endregion
//#region node_modules/date-fns/isLastDayOfMonth.js
/**
* @name isLastDayOfMonth
* @category Month Helpers
* @summary Is the given date the last day of a month?
*
* @description
* Is the given date the last day of a month?
*
* @param date - The date to check
* @param options - An object with options
*
* @returns The date is the last day of a month
*
* @example
* // Is 28 February 2014 the last day of a month?
* const result = isLastDayOfMonth(new Date(2014, 1, 28))
* //=> true
*/
function isLastDayOfMonth(date, options) {
	const _date = toDate(date, options?.in);
	return +endOfDay(_date, options) === +endOfMonth(_date, options);
}
//#endregion
//#region node_modules/date-fns/differenceInMonths.js
/**
* The {@link differenceInMonths} function options.
*/
/**
* @name differenceInMonths
* @category Month Helpers
* @summary Get the number of full months between the given dates.
*
* @param laterDate - The later date
* @param earlierDate - The earlier date
* @param options - An object with options
*
* @returns The number of full months
*
* @example
* // How many full months are between 31 January 2014 and 1 September 2014?
* const result = differenceInMonths(new Date(2014, 8, 1), new Date(2014, 0, 31))
* //=> 7
*/
function differenceInMonths(laterDate, earlierDate, options) {
	const [laterDate_, workingLaterDate, earlierDate_] = normalizeDates(options?.in, laterDate, laterDate, earlierDate);
	const sign = compareAsc(workingLaterDate, earlierDate_);
	const difference = Math.abs(differenceInCalendarMonths(workingLaterDate, earlierDate_));
	if (difference < 1) return 0;
	if (workingLaterDate.getMonth() === 1 && workingLaterDate.getDate() > 27) workingLaterDate.setDate(30);
	workingLaterDate.setMonth(workingLaterDate.getMonth() - sign * difference);
	let isLastMonthNotFull = compareAsc(workingLaterDate, earlierDate_) === -sign;
	if (isLastDayOfMonth(laterDate_) && difference === 1 && compareAsc(laterDate_, earlierDate_) === 1) isLastMonthNotFull = false;
	const result = sign * (difference - +isLastMonthNotFull);
	return result === 0 ? 0 : result;
}
//#endregion
//#region node_modules/date-fns/differenceInSeconds.js
/**
* The {@link differenceInSeconds} function options.
*/
/**
* @name differenceInSeconds
* @category Second Helpers
* @summary Get the number of seconds between the given dates.
*
* @description
* Get the number of seconds between the given dates.
*
* @param laterDate - The later date
* @param earlierDate - The earlier date
* @param options - An object with options.
*
* @returns The number of seconds
*
* @example
* // How many seconds are between
* // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
* const result = differenceInSeconds(
*   new Date(2014, 6, 2, 12, 30, 20, 0),
*   new Date(2014, 6, 2, 12, 30, 7, 999)
* )
* //=> 12
*/
function differenceInSeconds(laterDate, earlierDate, options) {
	const diff = differenceInMilliseconds(laterDate, earlierDate) / 1e3;
	return getRoundingMethod(options?.roundingMethod)(diff);
}
//#endregion
//#region node_modules/date-fns/differenceInWeeks.js
/**
* The {@link differenceInWeeks} function options.
*/
/**
* @name differenceInWeeks
* @category Week Helpers
* @summary Get the number of full weeks between the given dates.
*
* @description
* Get the number of full weeks between two dates. Fractional weeks are
* truncated towards zero by default.
*
* One "full week" is the distance between a local time in one day to the same
* local time 7 days earlier or later. A full week can sometimes be less than
* or more than 7*24 hours if a daylight savings change happens between two dates.
*
* To ignore DST and only measure exact 7*24-hour periods, use this instead:
* `Math.trunc(differenceInHours(dateLeft, dateRight)/(7*24))|0`.
*
* @param laterDate - The later date
* @param earlierDate - The earlier date
* @param options - An object with options
*
* @returns The number of full weeks
*
* @example
* // How many full weeks are between 5 July 2014 and 20 July 2014?
* const result = differenceInWeeks(new Date(2014, 6, 20), new Date(2014, 6, 5))
* //=> 2
*
* @example
* // How many full weeks are between
* // 1 March 2020 0:00 and 6 June 2020 0:00 ?
* // Note: because local time is used, the
* // result will always be 8 weeks (54 days),
* // even if DST starts and the period has
* // only 54*24-1 hours.
* const result = differenceInWeeks(
*   new Date(2020, 5, 1),
*   new Date(2020, 2, 6)
* )
* //=> 8
*/
function differenceInWeeks(laterDate, earlierDate, options) {
	const diff = differenceInDays(laterDate, earlierDate, options) / 7;
	return getRoundingMethod(options?.roundingMethod)(diff);
}
//#endregion
//#region node_modules/date-fns/differenceInYears.js
/**
* The {@link differenceInYears} function options.
*/
/**
* @name differenceInYears
* @category Year Helpers
* @summary Get the number of full years between the given dates.
*
* @description
* Get the number of full years between the given dates.
*
* @param laterDate - The later date
* @param earlierDate - The earlier date
* @param options - An object with options
*
* @returns The number of full years
*
* @example
* // How many full years are between 31 December 2013 and 11 February 2015?
* const result = differenceInYears(new Date(2015, 1, 11), new Date(2013, 11, 31))
* //=> 1
*/
function differenceInYears(laterDate, earlierDate, options) {
	const [laterDate_, earlierDate_] = normalizeDates(options?.in, laterDate, earlierDate);
	const sign = compareAsc(laterDate_, earlierDate_);
	const diff = Math.abs(differenceInCalendarYears(laterDate_, earlierDate_));
	laterDate_.setFullYear(1584);
	earlierDate_.setFullYear(1584);
	const result = sign * (diff - +(compareAsc(laterDate_, earlierDate_) === -sign));
	return result === 0 ? 0 : result;
}
//#endregion
//#region node_modules/date-fns/_lib/normalizeInterval.js
function normalizeInterval(context, interval) {
	const [start, end] = normalizeDates(context, interval.start, interval.end);
	return {
		start,
		end
	};
}
//#endregion
//#region node_modules/date-fns/eachWeekOfInterval.js
/**
* The {@link eachWeekOfInterval} function options.
*/
/**
* The {@link eachWeekOfInterval} function result type. It resolves the proper data type.
* It uses the first argument date object type, starting from the interval start date,
* then the end interval date. If a context function is passed, it uses the context function return type.
*/
/**
* @name eachWeekOfInterval
* @category Interval Helpers
* @summary Return the array of weeks within the specified time interval.
*
* @description
* Return the array of weeks within the specified time interval.
*
* @param interval - The interval.
* @param options - An object with options.
*
* @returns The array with starts of weeks from the week of the interval start to the week of the interval end
*
* @example
* // Each week within interval 6 October 2014 - 23 November 2014:
* const result = eachWeekOfInterval({
*   start: new Date(2014, 9, 6),
*   end: new Date(2014, 10, 23)
* })
* //=> [
* //   Sun Oct 05 2014 00:00:00,
* //   Sun Oct 12 2014 00:00:00,
* //   Sun Oct 19 2014 00:00:00,
* //   Sun Oct 26 2014 00:00:00,
* //   Sun Nov 02 2014 00:00:00,
* //   Sun Nov 09 2014 00:00:00,
* //   Sun Nov 16 2014 00:00:00,
* //   Sun Nov 23 2014 00:00:00
* // ]
*/
function eachWeekOfInterval(interval, options) {
	const { start, end } = normalizeInterval(options?.in, interval);
	let reversed = +start > +end;
	const startDateWeek = reversed ? startOfWeek(end, options) : startOfWeek(start, options);
	const endDateWeek = reversed ? startOfWeek(start, options) : startOfWeek(end, options);
	startDateWeek.setHours(15);
	endDateWeek.setHours(15);
	const endTime = +endDateWeek.getTime();
	let currentDate = startDateWeek;
	let step = options?.step ?? 1;
	if (!step) return [];
	if (step < 0) {
		step = -step;
		reversed = !reversed;
	}
	const dates = [];
	while (+currentDate <= endTime) {
		currentDate.setHours(0);
		dates.push(constructFrom(start, currentDate));
		currentDate = addWeeks(currentDate, step);
		currentDate.setHours(15);
	}
	return reversed ? dates.reverse() : dates;
}
//#endregion
//#region node_modules/date-fns/startOfMonth.js
/**
* The {@link startOfMonth} function options.
*/
/**
* @name startOfMonth
* @category Month Helpers
* @summary Return the start of a month for the given date.
*
* @description
* Return the start of a month for the given date. The result will be in the local timezone.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments.
* Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed,
* or inferred from the arguments.
*
* @param date - The original date
* @param options - An object with options
*
* @returns The start of a month
*
* @example
* // The start of a month for 2 September 2014 11:55:00:
* const result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
* //=> Mon Sep 01 2014 00:00:00
*/
function startOfMonth(date, options) {
	const _date = toDate(date, options?.in);
	_date.setDate(1);
	_date.setHours(0, 0, 0, 0);
	return _date;
}
//#endregion
//#region node_modules/date-fns/endOfMinute.js
/**
* The {@link endOfMinute} function options.
*/
/**
* @name endOfMinute
* @category Minute Helpers
* @summary Return the end of a minute for the given date.
*
* @description
* Return the end of a minute for the given date.
* The result will be in the local timezone or the provided context.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The original date
* @param options - An object with options
*
* @returns The end of a minute
*
* @example
* // The end of a minute for 1 December 2014 22:15:45.400:
* const result = endOfMinute(new Date(2014, 11, 1, 22, 15, 45, 400))
* //=> Mon Dec 01 2014 22:15:59.999
*/
function endOfMinute(date, options) {
	const _date = toDate(date, options?.in);
	_date.setSeconds(59, 999);
	return _date;
}
//#endregion
//#region node_modules/date-fns/formatDistance.js
/**
* The {@link formatDistance} function options.
*/
/**
* @name formatDistance
* @category Common Helpers
* @summary Return the distance between the given dates in words.
*
* @description
* Return the distance between the given dates in words.
*
* | Distance between dates                                            | Result              |
* |-------------------------------------------------------------------|---------------------|
* | 0 ... 30 secs                                                     | less than a minute  |
* | 30 secs ... 1 min 30 secs                                         | 1 minute            |
* | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
* | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
* | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
* | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
* | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
* | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
* | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
* | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
* | 1 yr ... 1 yr 3 months                                            | about 1 year        |
* | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
* | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
* | N yrs ... N yrs 3 months                                          | about N years       |
* | N yrs 3 months ... N yrs 9 months                                 | over N years        |
* | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
*
* With `options.includeSeconds == true`:
* | Distance between dates | Result               |
* |------------------------|----------------------|
* | 0 secs ... 5 secs      | less than 5 seconds  |
* | 5 secs ... 10 secs     | less than 10 seconds |
* | 10 secs ... 20 secs    | less than 20 seconds |
* | 20 secs ... 40 secs    | half a minute        |
* | 40 secs ... 60 secs    | less than a minute   |
* | 60 secs ... 90 secs    | 1 minute             |
*
* @param laterDate - The date
* @param earlierDate - The date to compare with
* @param options - An object with options
*
* @returns The distance in words
*
* @throws `date` must not be Invalid Date
* @throws `baseDate` must not be Invalid Date
* @throws `options.locale` must contain `formatDistance` property
*
* @example
* // What is the distance between 2 July 2014 and 1 January 2015?
* const result = formatDistance(new Date(2014, 6, 2), new Date(2015, 0, 1))
* //=> '6 months'
*
* @example
* // What is the distance between 1 January 2015 00:00:15
* // and 1 January 2015 00:00:00, including seconds?
* const result = formatDistance(
*   new Date(2015, 0, 1, 0, 0, 15),
*   new Date(2015, 0, 1, 0, 0, 0),
*   { includeSeconds: true }
* )
* //=> 'less than 20 seconds'
*
* @example
* // What is the distance from 1 January 2016
* // to 1 January 2015, with a suffix?
* const result = formatDistance(new Date(2015, 0, 1), new Date(2016, 0, 1), {
*   addSuffix: true
* })
* //=> 'about 1 year ago'
*
* @example
* // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
* import { eoLocale } from 'date-fns/locale/eo'
* const result = formatDistance(new Date(2016, 7, 1), new Date(2015, 0, 1), {
*   locale: eoLocale
* })
* //=> 'pli ol 1 jaro'
*/
function formatDistance(laterDate, earlierDate, options) {
	const defaultOptions = getDefaultOptions();
	const locale = options?.locale ?? defaultOptions.locale ?? enUS;
	const minutesInAlmostTwoDays = 2520;
	const comparison = compareAsc(laterDate, earlierDate);
	if (isNaN(comparison)) throw new RangeError("Invalid time value");
	const localizeOptions = Object.assign({}, options, {
		addSuffix: options?.addSuffix,
		comparison
	});
	const [laterDate_, earlierDate_] = normalizeDates(options?.in, ...comparison > 0 ? [earlierDate, laterDate] : [laterDate, earlierDate]);
	const seconds = differenceInSeconds(earlierDate_, laterDate_);
	const offsetInSeconds = (getTimezoneOffsetInMilliseconds(earlierDate_) - getTimezoneOffsetInMilliseconds(laterDate_)) / 1e3;
	const minutes = Math.round((seconds - offsetInSeconds) / 60);
	let months;
	if (minutes < 2) if (options?.includeSeconds) if (seconds < 5) return locale.formatDistance("lessThanXSeconds", 5, localizeOptions);
	else if (seconds < 10) return locale.formatDistance("lessThanXSeconds", 10, localizeOptions);
	else if (seconds < 20) return locale.formatDistance("lessThanXSeconds", 20, localizeOptions);
	else if (seconds < 40) return locale.formatDistance("halfAMinute", 0, localizeOptions);
	else if (seconds < 60) return locale.formatDistance("lessThanXMinutes", 1, localizeOptions);
	else return locale.formatDistance("xMinutes", 1, localizeOptions);
	else if (minutes === 0) return locale.formatDistance("lessThanXMinutes", 1, localizeOptions);
	else return locale.formatDistance("xMinutes", minutes, localizeOptions);
	else if (minutes < 45) return locale.formatDistance("xMinutes", minutes, localizeOptions);
	else if (minutes < 90) return locale.formatDistance("aboutXHours", 1, localizeOptions);
	else if (minutes < 1440) {
		const hours = Math.round(minutes / 60);
		return locale.formatDistance("aboutXHours", hours, localizeOptions);
	} else if (minutes < minutesInAlmostTwoDays) return locale.formatDistance("xDays", 1, localizeOptions);
	else if (minutes < 43200) {
		const days = Math.round(minutes / minutesInDay);
		return locale.formatDistance("xDays", days, localizeOptions);
	} else if (minutes < 86400) {
		months = Math.round(minutes / minutesInMonth);
		return locale.formatDistance("aboutXMonths", months, localizeOptions);
	}
	months = differenceInMonths(earlierDate_, laterDate_);
	if (months < 12) {
		const nearestMonth = Math.round(minutes / minutesInMonth);
		return locale.formatDistance("xMonths", nearestMonth, localizeOptions);
	} else {
		const monthsSinceStartOfYear = months % 12;
		const years = Math.trunc(months / 12);
		if (monthsSinceStartOfYear < 3) return locale.formatDistance("aboutXYears", years, localizeOptions);
		else if (monthsSinceStartOfYear < 9) return locale.formatDistance("overXYears", years, localizeOptions);
		else return locale.formatDistance("almostXYears", years + 1, localizeOptions);
	}
}
//#endregion
//#region node_modules/date-fns/formatRelative.js
/**
* The {@link formatRelative} function options.
*/
/**
* @name formatRelative
* @category Common Helpers
* @summary Represent the date in words relative to the given base date.
*
* @description
* Represent the date in words relative to the given base date.
*
* | Distance to the base date | Result                    |
* |---------------------------|---------------------------|
* | Previous 6 days           | last Sunday at 04:30 AM   |
* | Last day                  | yesterday at 04:30 AM     |
* | Same day                  | today at 04:30 AM         |
* | Next day                  | tomorrow at 04:30 AM      |
* | Next 6 days               | Sunday at 04:30 AM        |
* | Other                     | 12/31/2017                |
*
* @param date - The date to format
* @param baseDate - The date to compare with
* @param options - An object with options
*
* @returns The date in words
*
* @throws `date` must not be Invalid Date
* @throws `baseDate` must not be Invalid Date
* @throws `options.locale` must contain `localize` property
* @throws `options.locale` must contain `formatLong` property
* @throws `options.locale` must contain `formatRelative` property
*
* @example
* // Represent the date of 6 days ago in words relative to the given base date. In this example, today is Wednesday
* const result = formatRelative(subDays(new Date(), 6), new Date())
* //=> "last Thursday at 12:45 AM"
*/
function formatRelative(date, baseDate, options) {
	const [date_, baseDate_] = normalizeDates(options?.in, date, baseDate);
	const defaultOptions = getDefaultOptions();
	const locale = options?.locale ?? defaultOptions.locale ?? enUS;
	const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
	const diff = differenceInCalendarDays(date_, baseDate_);
	if (isNaN(diff)) throw new RangeError("Invalid time value");
	let token;
	if (diff < -6) token = "other";
	else if (diff < -1) token = "lastWeek";
	else if (diff < 0) token = "yesterday";
	else if (diff < 1) token = "today";
	else if (diff < 2) token = "tomorrow";
	else if (diff < 7) token = "nextWeek";
	else token = "other";
	const formatStr = locale.formatRelative(token, date_, baseDate_, {
		locale,
		weekStartsOn
	});
	return format(date_, formatStr, {
		locale,
		weekStartsOn
	});
}
//#endregion
//#region node_modules/date-fns/getDaysInMonth.js
/**
* The {@link getDaysInMonth} function options.
*/
/**
* @name getDaysInMonth
* @category Month Helpers
* @summary Get the number of days in a month of the given date.
*
* @description
* Get the number of days in a month of the given date, considering the context if provided.
*
* @param date - The given date
* @param options - An object with options
*
* @returns The number of days in a month
*
* @example
* // How many days are in February 2000?
* const result = getDaysInMonth(new Date(2000, 1))
* //=> 29
*/
function getDaysInMonth(date, options) {
	const _date = toDate(date, options?.in);
	const year = _date.getFullYear();
	const monthIndex = _date.getMonth();
	const lastDayOfMonth = constructFrom(_date, 0);
	lastDayOfMonth.setFullYear(year, monthIndex + 1, 0);
	lastDayOfMonth.setHours(0, 0, 0, 0);
	return lastDayOfMonth.getDate();
}
//#endregion
//#region node_modules/date-fns/getMinutes.js
/**
* The {@link getMinutes} function options.
*/
/**
* @name getMinutes
* @category Minute Helpers
* @summary Get the minutes of the given date.
*
* @description
* Get the minutes of the given date.
*
* @param date - The given date
* @param options - The options
*
* @returns The minutes
*
* @example
* // Get the minutes of 29 February 2012 11:45:05:
* const result = getMinutes(new Date(2012, 1, 29, 11, 45, 5))
* //=> 45
*/
function getMinutes(date, options) {
	return toDate(date, options?.in).getMinutes();
}
//#endregion
//#region node_modules/date-fns/lastDayOfMonth.js
/**
* The {@link lastDayOfMonth} function options.
*/
/**
* @name lastDayOfMonth
* @category Month Helpers
* @summary Return the last day of a month for the given date.
*
* @description
* Return the last day of a month for the given date.
* The result will be in the local timezone.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The original date
* @param options - An object with options
*
* @returns The last day of a month
*
* @example
* // The last day of a month for 2 September 2014 11:55:00:
* const result = lastDayOfMonth(new Date(2014, 8, 2, 11, 55, 0))
* //=> Tue Sep 30 2014 00:00:00
*/
function lastDayOfMonth(date, options) {
	const _date = toDate(date, options?.in);
	const month = _date.getMonth();
	_date.setFullYear(_date.getFullYear(), month + 1, 0);
	_date.setHours(0, 0, 0, 0);
	return toDate(_date, options?.in);
}
//#endregion
//#region node_modules/date-fns/isAfter.js
/**
* @name isAfter
* @category Common Helpers
* @summary Is the first date after the second one?
*
* @description
* Is the first date after the second one?
*
* @param date - The date that should be after the other one to return true
* @param dateToCompare - The date to compare with
*
* @returns The first date is after the second date
*
* @example
* // Is 10 July 1989 after 11 February 1987?
* const result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
* //=> true
*/
function isAfter(date, dateToCompare) {
	return +toDate(date) > +toDate(dateToCompare);
}
//#endregion
//#region node_modules/date-fns/isBefore.js
/**
* @name isBefore
* @category Common Helpers
* @summary Is the first date before the second one?
*
* @description
* Is the first date before the second one?
*
* @param date - The date that should be before the other one to return true
* @param dateToCompare - The date to compare with
*
* @returns The first date is before the second date
*
* @example
* // Is 10 July 1989 before 11 February 1987?
* const result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
* //=> false
*/
function isBefore(date, dateToCompare) {
	return +toDate(date) < +toDate(dateToCompare);
}
//#endregion
//#region node_modules/date-fns/isPast.js
/**
* @name isPast
* @category Common Helpers
* @summary Is the given date in the past?
* @pure false
*
* @description
* Is the given date in the past?
*
* @param date - The date to check
*
* @returns The date is in the past
*
* @example
* // If today is 6 October 2014, is 2 July 2014 in the past?
* const result = isPast(new Date(2014, 6, 2))
* //=> true
*/
function isPast(date) {
	return +toDate(date) < Date.now();
}
//#endregion
//#region node_modules/date-fns/startOfHour.js
/**
* The {@link startOfHour} function options.
*/
/**
* @name startOfHour
* @category Hour Helpers
* @summary Return the start of an hour for the given date.
*
* @description
* Return the start of an hour for the given date.
* The result will be in the local timezone.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The original date
* @param options - An object with options
*
* @returns The start of an hour
*
* @example
* // The start of an hour for 2 September 2014 11:55:00:
* const result = startOfHour(new Date(2014, 8, 2, 11, 55))
* //=> Tue Sep 02 2014 11:00:00
*/
function startOfHour(date, options) {
	const _date = toDate(date, options?.in);
	_date.setMinutes(0, 0, 0);
	return _date;
}
//#endregion
//#region node_modules/date-fns/isSameWeek.js
/**
* The {@link isSameWeek} function options.
*/
/**
* @name isSameWeek
* @category Week Helpers
* @summary Are the given dates in the same week (and month and year)?
*
* @description
* Are the given dates in the same week (and month and year)?
*
* @param laterDate - The first date to check
* @param earlierDate - The second date to check
* @param options - An object with options
*
* @returns The dates are in the same week (and month and year)
*
* @example
* // Are 31 August 2014 and 4 September 2014 in the same week?
* const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
* //=> true
*
* @example
* // If week starts with Monday,
* // are 31 August 2014 and 4 September 2014 in the same week?
* const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
*   weekStartsOn: 1
* })
* //=> false
*
* @example
* // Are 1 January 2014 and 1 January 2015 in the same week?
* const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
* //=> false
*/
function isSameWeek(laterDate, earlierDate, options) {
	const [laterDate_, earlierDate_] = normalizeDates(options?.in, laterDate, earlierDate);
	return +startOfWeek(laterDate_, options) === +startOfWeek(earlierDate_, options);
}
//#endregion
//#region node_modules/date-fns/isSameISOWeek.js
/**
* The {@link isSameISOWeek} function options.
*/
/**
* @name isSameISOWeek
* @category ISO Week Helpers
* @summary Are the given dates in the same ISO week (and year)?
*
* @description
* Are the given dates in the same ISO week (and year)?
*
* ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
*
* @param laterDate - The first date to check
* @param earlierDate - The second date to check
* @param options - An object with options
*
* @returns The dates are in the same ISO week (and year)
*
* @example
* // Are 1 September 2014 and 7 September 2014 in the same ISO week?
* const result = isSameISOWeek(new Date(2014, 8, 1), new Date(2014, 8, 7))
* //=> true
*
* @example
* // Are 1 September 2014 and 1 September 2015 in the same ISO week?
* const result = isSameISOWeek(new Date(2014, 8, 1), new Date(2015, 8, 1))
* //=> false
*/
function isSameISOWeek(laterDate, earlierDate, options) {
	return isSameWeek(laterDate, earlierDate, {
		...options,
		weekStartsOn: 1
	});
}
//#endregion
//#region node_modules/date-fns/startOfMinute.js
/**
* The {@link startOfMinute} function options.
*/
/**
* @name startOfMinute
* @category Minute Helpers
* @summary Return the start of a minute for the given date.
*
* @description
* Return the start of a minute for the given date.
* The result will be in the local timezone.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The original date
* @param options - An object with options
*
* @returns The start of a minute
*
* @example
* // The start of a minute for 1 December 2014 22:15:45.400:
* const result = startOfMinute(new Date(2014, 11, 1, 22, 15, 45, 400))
* //=> Mon Dec 01 2014 22:15:00
*/
function startOfMinute(date, options) {
	const date_ = toDate(date, options?.in);
	date_.setSeconds(0, 0);
	return date_;
}
//#endregion
//#region node_modules/date-fns/isSameMonth.js
/**
* The {@link isSameMonth} function options.
*/
/**
* @name isSameMonth
* @category Month Helpers
* @summary Are the given dates in the same month (and year)?
*
* @description
* Are the given dates in the same month (and year)?
*
* @param laterDate - The first date to check
* @param earlierDate - The second date to check
* @param options - An object with options
*
* @returns The dates are in the same month (and year)
*
* @example
* // Are 2 September 2014 and 25 September 2014 in the same month?
* const result = isSameMonth(new Date(2014, 8, 2), new Date(2014, 8, 25))
* //=> true
*
* @example
* // Are 2 September 2014 and 25 September 2015 in the same month?
* const result = isSameMonth(new Date(2014, 8, 2), new Date(2015, 8, 25))
* //=> false
*/
function isSameMonth(laterDate, earlierDate, options) {
	const [laterDate_, earlierDate_] = normalizeDates(options?.in, laterDate, earlierDate);
	return laterDate_.getFullYear() === earlierDate_.getFullYear() && laterDate_.getMonth() === earlierDate_.getMonth();
}
//#endregion
//#region node_modules/date-fns/isThisISOWeek.js
/**
* The {@link isThisISOWeek} function options.
*/
/**
* @name isThisISOWeek
* @category ISO Week Helpers
* @summary Is the given date in the same ISO week as the current date?
* @pure false
*
* @description
* Is the given date in the same ISO week as the current date?
*
* ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
*
* @param date - The date to check
* @param options - An object with options
*
* @returns The date is in this ISO week
*
* @example
* // If today is 25 September 2014, is 22 September 2014 in this ISO week?
* const result = isThisISOWeek(new Date(2014, 8, 22))
* //=> true
*/
function isThisISOWeek(date, options) {
	return isSameISOWeek(constructFrom(options?.in || date, date), constructNow(options?.in || date));
}
//#endregion
//#region node_modules/date-fns/isToday.js
/**
* The {@link isToday} function options.
*/
/**
* @name isToday
* @category Day Helpers
* @summary Is the given date today?
* @pure false
*
* @description
* Is the given date today?
*
* @param date - The date to check
* @param options - An object with options
*
* @returns The date is today
*
* @example
* // If today is 6 October 2014, is 6 October 14:00:00 today?
* const result = isToday(new Date(2014, 9, 6, 14, 0))
* //=> true
*/
function isToday(date, options) {
	return isSameDay(constructFrom(options?.in || date, date), constructNow(options?.in || date));
}
//#endregion
//#region node_modules/date-fns/subDays.js
/**
* The {@link subDays} function options.
*/
/**
* @name subDays
* @category Day Helpers
* @summary Subtract the specified number of days from the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The date to be changed
* @param amount - The amount of days to be subtracted.
* @param options - An object with options
*
* @returns The new date with the days subtracted
*
* @example
* // Subtract 10 days from 1 September 2014:
* const result = subDays(new Date(2014, 8, 1), 10)
* //=> Fri Aug 22 2014 00:00:00
*/
function subDays(date, amount, options) {
	return addDays(date, -amount, options);
}
//#endregion
//#region node_modules/date-fns/setMonth.js
/**
* The {@link setMonth} function options.
*/
/**
* @name setMonth
* @category Month Helpers
* @summary Set the month to the given date.
*
* @description
* Set the month to the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The date to be changed
* @param month - The month index to set (0-11)
* @param options - The options
*
* @returns The new date with the month set
*
* @example
* // Set February to 1 September 2014:
* const result = setMonth(new Date(2014, 8, 1), 1)
* //=> Sat Feb 01 2014 00:00:00
*/
function setMonth(date, month, options) {
	const _date = toDate(date, options?.in);
	const year = _date.getFullYear();
	const day = _date.getDate();
	const midMonth = constructFrom(options?.in || date, 0);
	midMonth.setFullYear(year, month, 15);
	midMonth.setHours(0, 0, 0, 0);
	const daysInMonth = getDaysInMonth(midMonth);
	_date.setMonth(month, Math.min(day, daysInMonth));
	return _date;
}
//#endregion
//#region node_modules/date-fns/set.js
/**
* The {@link set} function options.
*/
/**
* @name set
* @category Common Helpers
* @summary Set date values to a given date.
*
* @description
* Set date values to a given date.
*
* Sets time values to date from object `values`.
* A value is not set if it is undefined or null or doesn't exist in `values`.
*
* Note about bundle size: `set` does not internally use `setX` functions from date-fns but instead opts
* to use native `Date#setX` methods. If you use this function, you may not want to include the
* other `setX` functions that date-fns provides if you are concerned about the bundle size.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The date to be changed
* @param values - The date values to be set
* @param options - The options
*
* @returns The new date with options set
*
* @example
* // Transform 1 September 2014 into 20 October 2015 in a single line:
* const result = set(new Date(2014, 8, 20), { year: 2015, month: 9, date: 20 })
* //=> Tue Oct 20 2015 00:00:00
*
* @example
* // Set 12 PM to 1 September 2014 01:23:45 to 1 September 2014 12:00:00:
* const result = set(new Date(2014, 8, 1, 1, 23, 45), { hours: 12 })
* //=> Mon Sep 01 2014 12:23:45
*/
function set(date, values, options) {
	let _date = toDate(date, options?.in);
	if (isNaN(+_date)) return constructFrom(options?.in || date, NaN);
	if (values.year != null) _date.setFullYear(values.year);
	if (values.month != null) _date = setMonth(_date, values.month);
	if (values.date != null) _date.setDate(values.date);
	if (values.hours != null) _date.setHours(values.hours);
	if (values.minutes != null) _date.setMinutes(values.minutes);
	if (values.seconds != null) _date.setSeconds(values.seconds);
	if (values.milliseconds != null) _date.setMilliseconds(values.milliseconds);
	return _date;
}
//#endregion
//#region node_modules/date-fns/setDate.js
/**
* The {@link setDate} function options.
*/
/**
* @name setDate
* @category Day Helpers
* @summary Set the day of the month to the given date.
*
* @description
* Set the day of the month to the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows using extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The date to be changed
* @param dayOfMonth - The day of the month of the new date
* @param options - The options
*
* @returns The new date with the day of the month set
*
* @example
* // Set the 30th day of the month to 1 September 2014:
* const result = setDate(new Date(2014, 8, 1), 30)
* //=> Tue Sep 30 2014 00:00:00
*/
function setDate(date, dayOfMonth, options) {
	const _date = toDate(date, options?.in);
	_date.setDate(dayOfMonth);
	return _date;
}
//#endregion
//#region node_modules/date-fns/setHours.js
/**
* The {@link setHours} function options.
*/
/**
* @name setHours
* @category Hour Helpers
* @summary Set the hours to the given date.
*
* @description
* Set the hours to the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The date to be changed
* @param hours - The hours of the new date
* @param options - An object with options
*
* @returns The new date with the hours set
*
* @example
* // Set 4 hours to 1 September 2014 11:30:00:
* const result = setHours(new Date(2014, 8, 1, 11, 30), 4)
* //=> Mon Sep 01 2014 04:30:00
*/
function setHours(date, hours, options) {
	const _date = toDate(date, options?.in);
	_date.setHours(hours);
	return _date;
}
//#endregion
//#region node_modules/date-fns/setMinutes.js
/**
* The {@link setMinutes} function options.
*/
/**
* @name setMinutes
* @category Minute Helpers
* @summary Set the minutes to the given date.
*
* @description
* Set the minutes to the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows using extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, returned from the context function, or inferred from the arguments.
*
* @param date - The date to be changed
* @param minutes - The minutes of the new date
* @param options - An object with options
*
* @returns The new date with the minutes set
*
* @example
* // Set 45 minutes to 1 September 2014 11:30:40:
* const result = setMinutes(new Date(2014, 8, 1, 11, 30, 40), 45)
* //=> Mon Sep 01 2014 11:45:40
*/
function setMinutes(date, minutes, options) {
	const date_ = toDate(date, options?.in);
	date_.setMinutes(minutes);
	return date_;
}
//#endregion
//#region node_modules/date-fns/setYear.js
/**
* The {@link setYear} function options.
*/
/**
* @name setYear
* @category Year Helpers
* @summary Set the year to the given date.
*
* @description
* Set the year to the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The date to be changed
* @param year - The year of the new date
* @param options - An object with options.
*
* @returns The new date with the year set
*
* @example
* // Set year 2013 to 1 September 2014:
* const result = setYear(new Date(2014, 8, 1), 2013)
* //=> Sun Sep 01 2013 00:00:00
*/
function setYear(date, year, options) {
	const date_ = toDate(date, options?.in);
	if (isNaN(+date_)) return constructFrom(options?.in || date, NaN);
	date_.setFullYear(year);
	return date_;
}
//#endregion
//#region node_modules/date-fns/startOfToday.js
/**
* The {@link startOfToday} function options.
*/
/**
* @name startOfToday
* @category Day Helpers
* @summary Return the start of today.
* @pure false
*
* @description
* Return the start of today.
*
* @typeParam ContextDate - The `Date` type of the context function.
*
* @param options - An object with options
*
* @returns The start of today
*
* @example
* // If today is 6 October 2014:
* const result = startOfToday()
* //=> Mon Oct 6 2014 00:00:00
*/
function startOfToday(options) {
	return startOfDay(Date.now(), options);
}
//#endregion
//#region node_modules/date-fns/subMonths.js
/**
* The subMonths function options.
*/
/**
* @name subMonths
* @category Month Helpers
* @summary Subtract the specified number of months from the given date.
*
* @description
* Subtract the specified number of months from the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The date to be changed
* @param amount - The amount of months to be subtracted.
* @param options - An object with options
*
* @returns The new date with the months subtracted
*
* @example
* // Subtract 5 months from 1 February 2015:
* const result = subMonths(new Date(2015, 1, 1), 5)
* //=> Mon Sep 01 2014 00:00:00
*/
function subMonths(date, amount, options) {
	return addMonths(date, -amount, options);
}
//#endregion
//#region node_modules/date-fns/sub.js
/**
* The {@link sub} function options.
*/
/**
* @name sub
* @category Common Helpers
* @summary Subtract the specified years, months, weeks, days, hours, minutes and seconds from the given date.
*
* @description
* Subtract the specified years, months, weeks, days, hours, minutes and seconds from the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The date to be changed
* @param duration - The object with years, months, weeks, days, hours, minutes and seconds to be subtracted
* @param options - An object with options
*
* | Key     | Description                        |
* |---------|------------------------------------|
* | years   | Amount of years to be subtracted   |
* | months  | Amount of months to be subtracted  |
* | weeks   | Amount of weeks to be subtracted   |
* | days    | Amount of days to be subtracted    |
* | hours   | Amount of hours to be subtracted   |
* | minutes | Amount of minutes to be subtracted |
* | seconds | Amount of seconds to be subtracted |
*
* All values default to 0
*
* @returns The new date with the seconds subtracted
*
* @example
* // Subtract the following duration from 15 June 2017 15:29:20
* const result = sub(new Date(2017, 5, 15, 15, 29, 20), {
*   years: 2,
*   months: 9,
*   weeks: 1,
*   days: 7,
*   hours: 5,
*   minutes: 9,
*   seconds: 30
* })
* //=> Mon Sep 1 2014 10:19:50
*/
function sub(date, duration, options) {
	const { years = 0, months = 0, weeks = 0, days = 0, hours = 0, minutes = 0, seconds = 0 } = duration;
	const withoutDays = subDays(subMonths(date, months + years * 12, options), days + weeks * 7, options);
	const msToSub = (seconds + (minutes + hours * 60) * 60) * 1e3;
	return constructFrom(options?.in || date, +withoutDays - msToSub);
}
//#endregion
export { differenceInHours as A, eachWeekOfInterval as C, differenceInMonths as D, differenceInSeconds as E, isWeekend as F, addMonths as I, isSameDay as M, addWeeks as N, endOfDay as O, addHours as P, startOfMonth as S, differenceInWeeks as T, lastDayOfMonth as _, setHours as a, formatDistance as b, setMonth as c, isSameMonth as d, startOfMinute as f, isAfter as g, isBefore as h, setMinutes as i, differenceInDays as j, differenceInMinutes as k, isToday as l, isPast as m, startOfToday as n, setDate as o, startOfHour as p, setYear as r, set as s, sub as t, isThisISOWeek as u, getMinutes as v, differenceInYears as w, endOfMinute as x, formatRelative as y };
