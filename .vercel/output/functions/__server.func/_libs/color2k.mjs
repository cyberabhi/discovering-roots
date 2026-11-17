//#region node_modules/color2k/dist/index.exports.import.es.mjs
/**
* Clamps a number between a lower and upper bound.
*
* ```js
* guard(0, 1, 2); // 1
* ```
*
* @param low The lower bound.
* @param high The upper bound.
* @param value The number to clamp.
* @returns The clamped number.
*/
function guard(low, high, value) {
	return Math.min(Math.max(low, value), high);
}
/**
* Error thrown when color2k cannot parse an input color.
*
* ```js
* new ColorError('nope').message; // 'Failed to parse color: "nope"'
* ```
*
* @param color The color value that failed to parse.
*/
var ColorError = class extends Error {
	constructor(color) {
		super(`Failed to parse color: "${color}"`);
	}
};
/**
* Parses a color into red, green, blue, and alpha channel values.
*
* Supports hex, RGB, RGBA, HSL, HSLA, CSS named colors, and `transparent`.
*
* ```js
* parseToRgba('rgba(255, 0, 0, 0.5)'); // [255, 0, 0, 0.5]
* ```
*
* @param color The input color.
* @returns A tuple of red, green, blue, and alpha channel values.
*/
function parseToRgba(color) {
	if (typeof color !== "string") throw new ColorError(color);
	if (color.trim().toLowerCase() === "transparent") return [
		0,
		0,
		0,
		0
	];
	let normalizedColor = color.trim();
	normalizedColor = namedColorRegex.test(color) ? nameToHex(color) : color;
	const reducedHexMatch = reducedHexRegex.exec(normalizedColor);
	if (reducedHexMatch) {
		const arr = Array.from(reducedHexMatch).slice(1);
		return [...arr.slice(0, 3).map((x) => parseInt(r(x, 2), 16)), parseInt(r(arr[3] || "f", 2), 16) / 255];
	}
	const hexMatch = hexRegex.exec(normalizedColor);
	if (hexMatch) {
		const arr = Array.from(hexMatch).slice(1);
		return [...arr.slice(0, 3).map((x) => parseInt(x, 16)), parseInt(arr[3] || "ff", 16) / 255];
	}
	const rgbaMatch = rgbaRegex.exec(normalizedColor);
	if (rgbaMatch) {
		const arr = Array.from(rgbaMatch).slice(1);
		return [...arr.slice(0, 3).map((x) => parseInt(x, 10)), parseFloat(arr[3] || "1")];
	}
	const hslaMatch = hslaRegex.exec(normalizedColor);
	if (hslaMatch) {
		const [h, s, l, a] = Array.from(hslaMatch).slice(1).map(parseFloat);
		if (guard(0, 100, s) !== s) throw new ColorError(color);
		if (guard(0, 100, l) !== l) throw new ColorError(color);
		return [...hslToRgb(h, s, l), Number.isNaN(a) ? 1 : a];
	}
	throw new ColorError(color);
}
function hash(str) {
	let hash = 5381;
	let i = str.length;
	while (i) hash = hash * 33 ^ str.charCodeAt(--i);
	return (hash >>> 0) % 2341;
}
var colorToInt = (x) => parseInt(x.replace(/_/g, ""), 36);
var compressedColorMap = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((acc, next) => {
	const key = colorToInt(next.substring(0, 3));
	const hex = colorToInt(next.substring(3)).toString(16);
	let prefix = "";
	for (let i = 0; i < 6 - hex.length; i++) prefix += "0";
	acc[key] = `${prefix}${hex}`;
	return acc;
}, {});
/**
* Checks if a string is a CSS named color and returns its equivalent hex value, otherwise returns the original color.
*/
function nameToHex(color) {
	const result = compressedColorMap[hash(color.toLowerCase().trim())];
	if (!result) throw new ColorError(color);
	return `#${result}`;
}
var r = (str, amount) => Array.from(Array(amount)).map(() => str).join("");
var reducedHexRegex = new RegExp(`^#${r("([a-f0-9])", 3)}([a-f0-9])?$`, "i");
var hexRegex = new RegExp(`^#${r("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i");
var rgbaRegex = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${r(",\\s*(\\d+)\\s*", 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i");
var hslaRegex = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i;
var namedColorRegex = /^[a-z]+$/i;
var roundColor = (color) => {
	return Math.round(color * 255);
};
var hslToRgb = (hue, saturation, lightness) => {
	let l = lightness / 100;
	if (saturation === 0) return [
		l,
		l,
		l
	].map(roundColor);
	const huePrime = (hue % 360 + 360) % 360 / 60;
	const chroma = (1 - Math.abs(2 * l - 1)) * (saturation / 100);
	const secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1));
	let red = 0;
	let green = 0;
	let blue = 0;
	if (huePrime >= 0 && huePrime < 1) {
		red = chroma;
		green = secondComponent;
	} else if (huePrime >= 1 && huePrime < 2) {
		red = secondComponent;
		green = chroma;
	} else if (huePrime >= 2 && huePrime < 3) {
		green = chroma;
		blue = secondComponent;
	} else if (huePrime >= 3 && huePrime < 4) {
		green = secondComponent;
		blue = chroma;
	} else if (huePrime >= 4 && huePrime < 5) {
		red = secondComponent;
		blue = chroma;
	} else if (huePrime >= 5 && huePrime < 6) {
		red = chroma;
		blue = secondComponent;
	}
	const lightnessModification = l - chroma / 2;
	return [
		red + lightnessModification,
		green + lightnessModification,
		blue + lightnessModification
	].map(roundColor);
};
/**
* Parses a color into hue, saturation, lightness, and alpha channel values.
*
* Hue is a number between 0 and 360. Saturation, lightness, and alpha are
* decimal percentages between 0 and 1.
*
* ```js
* parseToHsla('red'); // [0, 1, 0.5, 1]
* ```
*
* @param color The input color.
* @returns A tuple of hue, saturation, lightness, and alpha values.
*/
function parseToHsla(color) {
	const [red, green, blue, alpha] = parseToRgba(color).map((value, index) => index === 3 ? value : value / 255);
	const max = Math.max(red, green, blue);
	const min = Math.min(red, green, blue);
	const lightness = (max + min) / 2;
	if (max === min) return [
		0,
		0,
		lightness,
		alpha
	];
	const delta = max - min;
	const saturation = lightness > .5 ? delta / (2 - max - min) : delta / (max + min);
	return [
		60 * (red === max ? (green - blue) / delta + (green < blue ? 6 : 0) : green === max ? (blue - red) / delta + 2 : (red - green) / delta + 4),
		saturation,
		lightness,
		alpha
	];
}
/**
* Builds an `hsla` color string from hue, saturation, lightness, and alpha
* channel values.
*
* ```js
* hsla(0, 1, 0.5, 1); // 'hsla(0, 100%, 50%, 1)'
* ```
*
* @param hue The color wheel angle from 0 to 360.
* @param saturation The saturation as a decimal between 0 and 1.
* @param lightness The lightness as a decimal between 0 and 1.
* @param alpha The opacity as a decimal between 0 and 1.
* @returns An `hsla` color string.
*/
function hsla(hue, saturation, lightness, alpha) {
	return `hsla(${(hue % 360).toFixed()}, ${guard(0, 100, saturation * 100).toFixed()}%, ${guard(0, 100, lightness * 100).toFixed()}%, ${parseFloat(guard(0, 1, alpha).toFixed(3))})`;
}
/**
* Darkens a color by subtracting from the lightness channel in HSL space.
*
* ```js
* darken('white', 0.1); // 'hsla(0, 0%, 90%, 1)'
* ```
*
* @param color The input color.
* @param amount The amount to darken, given as a decimal between 0 and 1.
* @returns The darkened color as an `hsla` string.
*/
function darken(color, amount) {
	const [hue, saturation, lightness, alpha] = parseToHsla(color);
	return hsla(hue, saturation, lightness - amount, alpha);
}
/**
* Returns the relative luminance of a color using the WCAG formula.
*
* ```js
* getLuminance('papayawhip'); // 0.877971001998354
* ```
*
* @param color The input color.
* @returns A number between 0 for darkest black and 1 for lightest white.
*/
function getLuminance(color) {
	if (color === "transparent") return 0;
	function f(x) {
		const channel = x / 255;
		return channel <= .04045 ? channel / 12.92 : Math.pow((channel + .055) / 1.055, 2.4);
	}
	const [r, g, b] = parseToRgba(color);
	return .2126 * f(r) + .7152 * f(g) + .0722 * f(b);
}
/**
* Returns the contrast ratio between two colors based on the WCAG contrast
* ratio formula.
*
* ```js
* getContrast('#444', '#fff'); // 9.739769120526205
* ```
*
* @param color1 The first color.
* @param color2 The second color.
* @returns The contrast ratio between the two colors.
*/
function getContrast(color1, color2) {
	const luminance1 = getLuminance(color1);
	const luminance2 = getLuminance(color2);
	return luminance1 > luminance2 ? (luminance1 + .05) / (luminance2 + .05) : (luminance2 + .05) / (luminance1 + .05);
}
var guidelines = {
	decorative: 1.5,
	readable: 3,
	aa: 4.5,
	aaa: 7
};
/**
* Returns whether a color fails a contrast threshold against a background.
*
* The supported standards are `decorative`, `readable`, `aa`, and `aaa`.
*
* ```js
* hasBadContrast('red', 'aa'); // true
* ```
*
* @param color The foreground color.
* @param standard The contrast standard to test against.
* @param background The background color.
* @returns `true` when the contrast ratio is below the selected standard.
*/
function hasBadContrast(color, standard = "aa", background = "#fff") {
	return getContrast(color, background) < guidelines[standard];
}
/**
* Lightens a color by adding to the lightness channel in HSL space.
*
* This is equivalent to `darken(color, -amount)`.
*
* ```js
* lighten('black', 0.1); // 'hsla(0, 0%, 10%, 1)'
* ```
*
* @param color The input color.
* @param amount The amount to lighten, given as a decimal between 0 and 1.
* @returns The lightened color as an `hsla` string.
*/
function lighten(color, amount) {
	return darken(color, -amount);
}
/**
* Returns whether black is the more readable color to place on top of the
* input color.
*
* This is the boolean form of `readableColor`.
*
* ```js
* readableColorIsBlack('white'); // true
* ```
*
* @param color The background color.
* @returns `true` when black is the more readable foreground color.
*/
function readableColorIsBlack(color) {
	return getLuminance(color) > .179;
}
/**
* Returns black or white, whichever has better contrast against the given
* color.
*
* ```js
* readableColor('white'); // '#000'
* ```
*
* @param color The background color.
* @returns `#000` or `#fff`.
*/
function readableColor(color) {
	return readableColorIsBlack(color) ? "#000" : "#fff";
}
//#endregion
export { readableColor as i, hasBadContrast as n, lighten as r, darken as t };
