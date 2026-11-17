import { i as __require, o as __toESM, t as __commonJSMin } from "../../_runtime.mjs";
import { i as require_react } from "../dnd-kit__accessibility+react.mjs";
import { o as require_jsx_runtime } from "../dnd-kit__react+react.mjs";
import { rr as require_dist } from "../@portabletext/editor+[...].mjs";
import { rt as require_startCase } from "../@portabletext/block-tools+[...].mjs";
import { a as color$1, n as COLOR_TINTS, t as COLOR_HUES } from "../sanity__color.mjs";
import "../@emotion/is-prop-valid+[...].mjs";
import { $t as UlistIcon, Jt as ThLargeIcon, Nt as SearchIcon, hn as SpinnerIcon, mn as CloseIcon, pn as ChevronRightIcon } from "../sanity__icons.mjs";
import { a as detectOverflow, r as autoUpdate } from "../@floating-ui/dom+[...].mjs";
import { x as require_react_dom } from "../@dnd-kit/core+[...].mjs";
import { i as hide, l as useFloating, n as autoPlacement, o as offset, r as flip, s as shift, t as arrow } from "../floating-ui__react-dom.mjs";
import { t as ResizeObserver$1 } from "../juggle__resize-observer.mjs";
//#region node_modules/@sanity/ui/dist/_chunks/getScopedTheme.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var defaultThemeConfig = {
	_version: 2,
	avatar: {
		sizes: [
			{
				distance: -4,
				size: 19
			},
			{
				distance: -4,
				size: 25
			},
			{
				distance: -8,
				size: 33
			},
			{
				distance: -12,
				size: 49
			}
		],
		focusRing: {
			offset: 1,
			width: 1
		}
	},
	button: {
		textWeight: "medium",
		border: { width: 1 },
		focusRing: {
			offset: -1,
			width: 1
		}
	},
	card: {
		border: { width: 1 },
		focusRing: {
			offset: -1,
			width: 1
		},
		shadow: { outline: .5 }
	},
	container: [
		320,
		640,
		960,
		1280,
		1600,
		1920
	],
	media: [
		360,
		600,
		900,
		1200,
		1800,
		2400
	],
	layer: {
		dialog: { zOffset: 600 },
		popover: { zOffset: 400 },
		tooltip: { zOffset: 200 }
	},
	radius: [
		0,
		1,
		3,
		6,
		9,
		12,
		21
	],
	shadow: [
		null,
		{
			umbra: [
				0,
				0,
				0,
				0
			],
			penumbra: [
				0,
				0,
				0,
				0
			],
			ambient: [
				0,
				0,
				0,
				0
			]
		},
		{
			umbra: [
				0,
				3,
				5,
				-2
			],
			penumbra: [
				0,
				6,
				10,
				0
			],
			ambient: [
				0,
				1,
				18,
				1
			]
		},
		{
			umbra: [
				0,
				7,
				8,
				-4
			],
			penumbra: [
				0,
				12,
				17,
				2
			],
			ambient: [
				0,
				5,
				22,
				4
			]
		},
		{
			umbra: [
				0,
				9,
				11,
				-5
			],
			penumbra: [
				0,
				18,
				28,
				2
			],
			ambient: [
				0,
				7,
				34,
				6
			]
		},
		{
			umbra: [
				0,
				11,
				15,
				-7
			],
			penumbra: [
				0,
				24,
				38,
				3
			],
			ambient: [
				0,
				9,
				46,
				8
			]
		}
	],
	space: [
		0,
		4,
		8,
		12,
		20,
		32,
		52,
		84,
		136,
		220
	],
	input: {
		border: { width: 1 },
		checkbox: {
			size: 17,
			focusRing: {
				offset: -1,
				width: 1
			}
		},
		radio: {
			size: 17,
			markSize: 9,
			focusRing: {
				offset: -1,
				width: 1
			}
		},
		switch: {
			width: 25,
			height: 17,
			padding: 5,
			transitionDurationMs: 150,
			transitionTimingFunction: "ease-out",
			focusRing: {
				offset: 1,
				width: 1
			}
		},
		select: { focusRing: {
			offset: -1,
			width: 1
		} },
		text: { focusRing: {
			offset: -1,
			width: 1
		} }
	},
	style: { button: { root: { transition: "background-color 100ms,border-color 100ms,color 100ms" } } }
};
var defaultThemeFonts = {
	code: {
		family: "ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace",
		weights: {
			regular: 400,
			medium: 500,
			semibold: 600,
			bold: 700
		},
		sizes: [
			{
				ascenderHeight: 4,
				descenderHeight: 4,
				fontSize: 10,
				iconSize: 17,
				lineHeight: 15,
				letterSpacing: 0
			},
			{
				ascenderHeight: 5,
				descenderHeight: 5,
				fontSize: 13,
				iconSize: 21,
				lineHeight: 19,
				letterSpacing: 0
			},
			{
				ascenderHeight: 6,
				descenderHeight: 6,
				fontSize: 16,
				iconSize: 25,
				lineHeight: 23,
				letterSpacing: 0
			},
			{
				ascenderHeight: 7,
				descenderHeight: 7,
				fontSize: 19,
				iconSize: 29,
				lineHeight: 27,
				letterSpacing: 0
			},
			{
				ascenderHeight: 8,
				descenderHeight: 8,
				fontSize: 22,
				iconSize: 33,
				lineHeight: 31,
				letterSpacing: 0
			}
		]
	},
	heading: {
		family: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Liberation Sans\", Helvetica, Arial, system-ui, sans-serif",
		weights: {
			regular: 700,
			medium: 800,
			semibold: 900,
			bold: 900
		},
		sizes: [
			{
				ascenderHeight: 5,
				descenderHeight: 5,
				fontSize: 13,
				iconSize: 17,
				lineHeight: 19,
				letterSpacing: 0
			},
			{
				ascenderHeight: 6,
				descenderHeight: 6,
				fontSize: 16,
				iconSize: 25,
				lineHeight: 23,
				letterSpacing: 0
			},
			{
				ascenderHeight: 7,
				descenderHeight: 7,
				fontSize: 21,
				iconSize: 33,
				lineHeight: 29,
				letterSpacing: 0
			},
			{
				ascenderHeight: 8,
				descenderHeight: 8,
				fontSize: 27,
				iconSize: 41,
				lineHeight: 35,
				letterSpacing: 0
			},
			{
				ascenderHeight: 9.5,
				descenderHeight: 8.5,
				fontSize: 33,
				iconSize: 49,
				lineHeight: 41,
				letterSpacing: 0
			},
			{
				ascenderHeight: 10.5,
				descenderHeight: 9.5,
				fontSize: 38,
				iconSize: 53,
				lineHeight: 47,
				letterSpacing: 0
			}
		]
	},
	label: {
		family: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Liberation Sans\", system-ui, sans-serif",
		weights: {
			regular: 600,
			medium: 700,
			semibold: 800,
			bold: 900
		},
		sizes: [
			{
				ascenderHeight: 2,
				descenderHeight: 2,
				fontSize: 8.1,
				iconSize: 13,
				lineHeight: 10,
				letterSpacing: .5
			},
			{
				ascenderHeight: 2,
				descenderHeight: 2,
				fontSize: 9.5,
				iconSize: 15,
				lineHeight: 11,
				letterSpacing: .5
			},
			{
				ascenderHeight: 2,
				descenderHeight: 2,
				fontSize: 10.8,
				iconSize: 17,
				lineHeight: 12,
				letterSpacing: .5
			},
			{
				ascenderHeight: 2,
				descenderHeight: 2,
				fontSize: 12.25,
				iconSize: 19,
				lineHeight: 13,
				letterSpacing: .5
			},
			{
				ascenderHeight: 2,
				descenderHeight: 2,
				fontSize: 13.6,
				iconSize: 21,
				lineHeight: 14,
				letterSpacing: .5
			},
			{
				ascenderHeight: 2,
				descenderHeight: 2,
				fontSize: 15,
				iconSize: 23,
				lineHeight: 15,
				letterSpacing: .5
			}
		]
	},
	text: {
		family: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Liberation Sans\", Helvetica, Arial, system-ui, sans-serif",
		weights: {
			regular: 400,
			medium: 500,
			semibold: 600,
			bold: 700
		},
		sizes: [
			{
				ascenderHeight: 4,
				descenderHeight: 4,
				fontSize: 10,
				iconSize: 17,
				lineHeight: 15,
				letterSpacing: 0
			},
			{
				ascenderHeight: 5,
				descenderHeight: 5,
				fontSize: 13,
				iconSize: 21,
				lineHeight: 19,
				letterSpacing: 0
			},
			{
				ascenderHeight: 6,
				descenderHeight: 6,
				fontSize: 15,
				iconSize: 25,
				lineHeight: 23,
				letterSpacing: 0
			},
			{
				ascenderHeight: 7,
				descenderHeight: 7,
				fontSize: 18,
				iconSize: 29,
				lineHeight: 27,
				letterSpacing: 0
			},
			{
				ascenderHeight: 8,
				descenderHeight: 8,
				fontSize: 21,
				iconSize: 33,
				lineHeight: 31,
				letterSpacing: 0
			}
		]
	}
};
/**
* Defines a lazy, self-replacing property on `obj`.
*
* On first access the `factory` is called and the getter is replaced with the
* computed plain value — subsequent reads have zero overhead.
*
* The property is enumerable (visible in `Object.keys` / spread) in both states.
*
* @internal
*/
function defineLazyProperty(obj, key, factory) {
	Object.defineProperty(obj, key, {
		get() {
			let value = factory();
			return Object.defineProperty(obj, key, {
				value,
				enumerable: !0,
				writable: !1,
				configurable: !1
			}), value;
		},
		enumerable: !0,
		configurable: !0
	});
}
var cache$4 = /* @__PURE__ */ new WeakMap();
var V0_TONES = [
	"transparent",
	"default",
	"primary",
	"positive",
	"caution",
	"critical"
];
function lazyV0Scheme(schemeKey, color) {
	let scheme = {};
	for (let tone of V0_TONES) defineLazyProperty(scheme, tone, () => themeColor_v2_v0(color[schemeKey][tone]));
	return scheme;
}
/** @internal */
function v2_v0(v2) {
	let cachedTheme = cache$4.get(v2);
	if (cachedTheme) return cachedTheme;
	let { avatar, button, color, container, font: fonts, input, media, radius, shadow: shadows, space, style: styles } = v2, v0Color = {};
	defineLazyProperty(v0Color, "light", () => lazyV0Scheme("light", color)), defineLazyProperty(v0Color, "dark", () => lazyV0Scheme("dark", color));
	let theme = {
		_version: 0,
		avatar,
		button,
		container,
		color: v0Color,
		focusRing: input.text.focusRing,
		fonts,
		input,
		media,
		radius,
		shadows,
		space,
		styles,
		v2
	};
	return cache$4.set(v2, theme), theme;
}
function themeColor_v2_v0(color_v2) {
	return {
		base: {
			bg: color_v2.bg,
			fg: color_v2.fg,
			border: color_v2.border,
			focusRing: color_v2.focusRing,
			shadow: color_v2.shadow
		},
		button: color_v2.button,
		card: color_v2.selectable.default,
		dark: color_v2._dark,
		input: {
			default: inputStatesThemeColor_v2_v0(color_v2.input.default),
			invalid: inputStatesThemeColor_v2_v0(color_v2.input.invalid)
		},
		muted: {
			...color_v2.button.ghost,
			transparent: color_v2.button.ghost.default
		},
		solid: {
			...color_v2.button.default,
			transparent: color_v2.button.default.default
		},
		selectable: color_v2.selectable,
		spot: {
			gray: color_v2.avatar.gray.bg,
			blue: color_v2.avatar.blue.bg,
			purple: color_v2.avatar.purple.bg,
			magenta: color_v2.avatar.magenta.bg,
			red: color_v2.avatar.red.bg,
			orange: color_v2.avatar.orange.bg,
			yellow: color_v2.avatar.yellow.bg,
			green: color_v2.avatar.green.bg,
			cyan: color_v2.avatar.cyan.bg
		},
		syntax: color_v2.syntax
	};
}
function inputStatesThemeColor_v2_v0(t) {
	return {
		enabled: inputStateThemeColor_v2_v0(t.enabled),
		disabled: inputStateThemeColor_v2_v0(t.disabled),
		readOnly: inputStateThemeColor_v2_v0(t.readOnly),
		hovered: inputStateThemeColor_v2_v0(t.hovered)
	};
}
function inputStateThemeColor_v2_v0(t) {
	return {
		bg: t.bg,
		bg2: t.muted.bg,
		border: t.border,
		fg: t.fg,
		placeholder: t.placeholder
	};
}
var THEME_COLOR_BLEND_MODES = ["multiply", "screen"];
var THEME_COLOR_CARD_TONES = [
	"transparent",
	"default",
	"neutral",
	"primary",
	"suggest",
	"positive",
	"caution",
	"critical"
];
var THEME_COLOR_STATE_TONES = [
	"default",
	"neutral",
	"primary",
	"suggest",
	"positive",
	"caution",
	"critical"
];
var THEME_COLOR_STATES = [
	"enabled",
	"hovered",
	"pressed",
	"selected",
	"disabled"
];
var THEME_COLOR_BUTTON_MODES = [
	"default",
	"ghost",
	"bleed"
];
var THEME_COLOR_INPUT_MODES = ["default", "invalid"];
var THEME_COLOR_INPUT_STATES = [
	"enabled",
	"hovered",
	"readOnly",
	"disabled"
];
var THEME_COLOR_AVATAR_COLORS = COLOR_HUES;
/** @internal */
function isColorBlendModeValue(str) {
	return THEME_COLOR_BLEND_MODES.includes(str);
}
/** @internal */
function isColorHueKey(str) {
	return COLOR_HUES.includes(str);
}
/** @internal */
function isColorTintKey(str) {
	return COLOR_TINTS.includes(str);
}
[...THEME_COLOR_AVATAR_COLORS];
[...THEME_COLOR_CARD_TONES];
[...THEME_COLOR_STATE_TONES];
[...THEME_COLOR_STATES];
[...THEME_COLOR_INPUT_MODES];
[...THEME_COLOR_INPUT_STATES];
/** @internal */
function isColorValue(str) {
	return str === "black" || str === "white";
}
/** @internal */
function isColorOpacityValue(str) {
	return str === "0" || /^0\.[0-9]+$/.test(str) || str === "1";
}
function isColorMixPercentValue(str) {
	return /^\d+%$/.test(str);
}
/** @internal */
function parseTokenValue(str) {
	let segments = str.split("/"), nextSegment = segments.shift() || "", [segment0, segment0mix] = nextSegment.split(" ");
	if (isColorTintKey(segment0)) {
		let tint = segment0, segment1 = segments.shift() || "";
		return isColorMixPercentValue(segment0mix) ? {
			type: "color",
			tint,
			mix: Number(segment0mix.slice(0, -1)) / 100
		} : isColorOpacityValue(segment1) ? {
			type: "color",
			tint,
			opacity: Number(segment1)
		} : {
			type: "color",
			tint
		};
	}
	if (isColorValue(segment0)) {
		let key = segment0, segment1 = segments.shift() || "";
		return isColorMixPercentValue(segment0mix) ? {
			type: "color",
			key,
			mix: Number(segment0mix.slice(0, -1)) / 100
		} : isColorOpacityValue(segment1) ? {
			type: "color",
			key,
			opacity: Number(segment1)
		} : {
			type: "color",
			key
		};
	}
	if (isColorHueKey(segment0)) {
		let hue = segment0;
		nextSegment = segments.shift() || "";
		let [segment1, segment1mix] = nextSegment.split(" ");
		if (isColorTintKey(segment1)) {
			let tint = segment1, segment2 = segments.shift() || "";
			return isColorMixPercentValue(segment1mix) ? {
				type: "color",
				hue,
				tint,
				mix: Number(segment1mix.slice(0, -1)) / 100
			} : isColorOpacityValue(segment2) ? {
				type: "color",
				hue,
				tint,
				opacity: Number(segment2)
			} : {
				type: "color",
				hue,
				tint
			};
		}
		return {
			type: "hue",
			value: hue
		};
	}
	if (isColorBlendModeValue(segment0)) return {
		type: "blendMode",
		value: segment0
	};
}
function compileColorTokenValue(node) {
	let key = "";
	return key = node.key === "black" || node.key === "white" ? node.key : `${node.hue}/${node.tint}`, node.mix === void 0 ? (node.opacity !== void 0 && (key += `/${node.opacity}`), key) : `${key} ${node.mix * 100}%`;
}
var DEFAULT_COLOR_TOKEN_VALUE = ["500", "500"];
function resolveColorTokenValue(context, value = DEFAULT_COLOR_TOKEN_VALUE) {
	let { hue, scheme } = context, node = parseTokenValue(value[scheme === "light" ? 0 : 1]);
	if (!node || node.type !== "color") throw Error(`Invalid color token: ${value[0]}`);
	return compileColorTokenValue({
		...node,
		hue: node.hue || hue
	});
}
var defaultColorTokens = {
	base: {
		"*": {
			_blend: ["multiply", "screen"],
			accent: { fg: ["purple/600", "purple/400"] },
			avatar: { "*": {
				_blend: ["screen", "multiply"],
				bg: ["500", "400"],
				fg: ["white", "black"]
			} },
			backdrop: ["gray/200/0.5", "black/0.5"],
			badge: {
				"*": {
					bg: ["100", "900"],
					fg: ["600", "400"],
					icon: ["500", "500"],
					dot: ["500", "500"]
				},
				positive: {
					bg: ["200 50%", "900"],
					fg: ["600", "500"]
				},
				caution: {
					bg: ["200 50%", "900"],
					fg: ["600", "500"]
				}
			},
			bg: ["50", "950"],
			border: ["200", "800"],
			code: {
				bg: ["50", "950"],
				fg: ["600", "400"]
			},
			fg: ["800", "200"],
			focusRing: ["blue/500", "blue/500"],
			icon: ["600", "400"],
			kbd: {
				bg: ["white", "black"],
				fg: ["600", "400"],
				border: ["200", "800"]
			},
			link: { fg: ["blue/600", "blue/300"] },
			muted: {
				bg: ["50", "950"],
				fg: ["700 75%", "300 75%"]
			},
			shadow: {
				outline: ["500/0.3", "500/0.4"],
				umbra: ["gray/500/0.1", "black/0.2"],
				penumbra: ["gray/500/0.07", "black/0.14"],
				ambient: ["gray/500/0.06", "black/0.12"]
			},
			skeleton: {
				from: ["100", "900"],
				to: ["100 50%", "900 50%"]
			}
		},
		transparent: { bg: ["50", "black"] },
		default: {
			bg: ["white", "950"],
			fg: ["800", "200"],
			muted: { fg: ["600", "400"] }
		},
		primary: { _hue: "blue" },
		suggest: { _hue: "purple" },
		positive: {
			_hue: "green",
			shadow: { outline: ["500/0.4", "500/0.4"] }
		},
		caution: {
			_hue: "yellow",
			shadow: { outline: ["600/0.3", "500/0.4"] }
		},
		critical: { _hue: "red" }
	},
	button: {
		default: {
			"*": {
				"*": {
					_blend: ["screen", "multiply"],
					accent: { fg: ["purple/300", "purple/700"] },
					avatar: { "*": {
						_blend: ["screen", "multiply"],
						bg: ["500", "400"],
						fg: ["white", "black"]
					} },
					badge: { "*": {
						bg: ["900", "100"],
						fg: ["400", "600"],
						dot: ["500", "500"],
						icon: ["500", "500"]
					} },
					bg: ["500", "400"],
					border: ["500/0", "400/0"],
					code: {
						bg: ["500 20%", "400 20%"],
						fg: ["200", "600"]
					},
					fg: ["white", "black"],
					icon: ["100 70%", "900 70%"],
					kbd: {
						bg: ["black", "white"],
						fg: ["200", "600"],
						border: ["800", "200"]
					},
					link: { fg: ["blue/200", "blue/600"] },
					muted: {
						bg: ["950", "50"],
						fg: ["100 70%", "900 70%"]
					},
					skeleton: {
						from: ["900", "100"],
						to: ["900 50%", "100 50%"]
					}
				},
				hovered: {
					bg: ["600", "300"],
					border: ["700/0", "300/0"]
				},
				pressed: { bg: ["700", "300"] },
				selected: { bg: ["700", "300"] },
				disabled: {
					_hue: "gray",
					accent: { fg: ["100 70%", "900 70%"] },
					avatar: { "*": {
						_blend: ["screen", "multiply"],
						bg: ["gray/500", "gray/400"],
						fg: ["white", "black"]
					} },
					badge: { "*": {
						bg: ["gray/700", "gray/300"],
						fg: ["white", "black"],
						dot: ["white", "black"],
						icon: ["white", "black"]
					} },
					bg: ["300", "600"],
					code: {
						bg: ["950", "50"],
						fg: ["300", "600"]
					},
					fg: ["300", "600"],
					muted: {
						bg: ["950", "50"],
						fg: ["300", "600"]
					},
					kbd: {
						bg: ["black", "white"],
						fg: ["white", "black"],
						border: ["700", "300"]
					},
					link: { fg: ["100 70%", "900 70%"] }
				}
			},
			default: {
				"*": {
					avatar: { "*": {
						_blend: ["screen", "multiply"],
						bg: ["500", "400"],
						fg: ["white", "black"]
					} },
					bg: ["800", "200"],
					muted: {
						bg: ["950", "50"],
						fg: ["400", "600"]
					}
				},
				hovered: { bg: ["900", "100"] },
				pressed: { bg: ["black", "white"] },
				selected: { bg: ["black", "white"] }
			}
		},
		ghost: {
			"*": {
				"*": {
					_blend: ["multiply", "screen"],
					accent: { fg: ["purple/700 60%", "purple/300 70%"] },
					avatar: { "*": {
						_blend: ["screen", "multiply"],
						bg: ["500", "400"],
						fg: ["white", "black"]
					} },
					badge: { "*": {
						bg: ["100", "900"],
						fg: ["600", "400"],
						dot: ["500", "500"],
						icon: ["500", "500"]
					} },
					bg: ["50", "950"],
					border: ["100", "900"],
					code: {
						bg: ["500 10%", "400 10%"],
						fg: ["700 60%", "400 60%"]
					},
					fg: ["600", "400"],
					icon: ["700 60%", "300 60%"],
					kbd: {
						bg: ["white", "black"],
						fg: ["600", "400"],
						border: ["200", "800"]
					},
					link: { fg: ["blue/700 60%", "blue/300 60%"] },
					muted: {
						bg: ["100", "950"],
						fg: ["700 60%", "300 60%"]
					},
					skeleton: {
						from: ["100", "900"],
						to: ["100 50%", "900 50%"]
					}
				},
				hovered: {
					bg: ["100", "900"],
					fg: ["700", "300"]
				},
				pressed: {
					bg: ["200", "800"],
					fg: ["800", "200"]
				},
				selected: {
					bg: ["200", "800"],
					fg: ["800", "200"]
				},
				disabled: {
					_hue: "gray",
					accent: { fg: ["200", "800"] },
					avatar: { "*": {
						_blend: ["screen", "multiply"],
						bg: ["gray/100", "gray/900"],
						fg: ["white", "black"]
					} },
					badge: { "*": {
						_hue: "gray",
						bg: ["50", "950"],
						fg: ["gray/200", "gray/800"],
						dot: ["gray/200", "gray/800"],
						icon: ["gray/200", "gray/800"]
					} },
					border: ["100", "900"],
					code: {
						bg: ["50", "950"],
						fg: ["200", "800"]
					},
					fg: ["400", "600"],
					icon: ["300", "700"],
					muted: { fg: ["300", "700"] },
					kbd: {
						bg: ["white", "black"],
						fg: ["200", "800"],
						border: ["100", "900"]
					},
					link: { fg: ["200", "800"] }
				}
			},
			positive: { "*": { border: ["600 20%", "800"] } },
			caution: { "*": { border: ["600 20%", "800"] } }
		},
		bleed: { "*": {
			"*": {
				_blend: ["multiply", "screen"],
				accent: { fg: ["purple/700 70%", "purple/300 70%"] },
				avatar: { "*": {
					_blend: ["screen", "multiply"],
					bg: ["500", "400"],
					fg: ["white", "black"]
				} },
				badge: { "*": {
					bg: ["100", "900"],
					fg: ["600", "400"],
					dot: ["500", "500"],
					icon: ["500", "500"]
				} },
				bg: ["white", "black"],
				border: ["white/0", "black/0"],
				code: {
					bg: ["50", "950"],
					fg: ["700 75%", "300 75%"]
				},
				fg: ["700", "300"],
				icon: ["700 75%", "300 75%"],
				kbd: {
					bg: ["white", "black"],
					fg: ["700", "300"],
					border: ["200", "800"]
				},
				link: { fg: ["blue/700 70%", "blue/300 70%"] },
				muted: {
					bg: ["100", "950"],
					fg: ["700 75%", "300 75%"]
				},
				skeleton: {
					from: ["100", "900"],
					to: ["100 50%", "900 50%"]
				}
			},
			hovered: {
				bg: ["50", "900"],
				fg: ["800", "200"],
				icon: ["800 70%", "300 70%"]
			},
			pressed: {
				bg: ["100", "800"],
				fg: ["800", "200"],
				icon: ["800 70%", "200 70%"]
			},
			selected: {
				bg: ["100", "900"],
				fg: ["800", "200"],
				icon: ["800 60%", "200 60%"]
			},
			disabled: {
				_hue: "gray",
				accent: { fg: ["200", "800"] },
				avatar: { "*": {
					_blend: ["screen", "multiply"],
					bg: ["gray/100", "gray/900"],
					fg: ["white", "black"]
				} },
				badge: { "*": {
					_hue: "gray",
					bg: ["50", "950"],
					fg: ["gray/200", "gray/800"],
					dot: ["gray/200", "gray/800"],
					icon: ["gray/200", "gray/800"]
				} },
				code: {
					bg: ["50", "950"],
					fg: ["200", "800"]
				},
				fg: ["400", "600"],
				icon: ["300", "700"],
				muted: { fg: ["400", "600"] },
				kbd: {
					bg: ["white", "black"],
					fg: ["200", "800"],
					border: ["100", "900"]
				},
				link: { fg: ["200", "800"] }
			}
		} }
	},
	input: {
		"*": {
			"*": {
				_blend: ["multiply", "screen"],
				bg: ["white", "black"],
				border: ["200", "700"],
				fg: ["black", "200"],
				muted: { bg: ["50", "950"] },
				placeholder: ["400", "600"]
			},
			hovered: { border: ["300", "700"] },
			readOnly: {
				bg: ["50", "950"],
				border: ["200", "800"],
				fg: ["800", "200"]
			},
			disabled: {
				bg: ["50", "950"],
				fg: ["400", "600"],
				border: ["100", "900"],
				placeholder: ["200", "800 50%"]
			}
		},
		invalid: { "*": {
			_hue: "red",
			bg: ["100", "950"]
		} }
	},
	selectable: {
		"*": {
			"*": {
				_blend: ["multiply", "screen"],
				accent: { fg: ["purple/700 70%", "purple/300 70%"] },
				avatar: { "*": {
					_blend: ["screen", "multiply"],
					bg: ["500", "400"],
					fg: ["white", "black"]
				} },
				badge: { "*": {
					bg: ["100", "900"],
					fg: ["600", "400"],
					dot: ["500", "500"],
					icon: ["500", "500"]
				} },
				bg: ["white", "black"],
				border: ["200", "800"],
				code: {
					bg: ["50", "950"],
					fg: ["600", "400"]
				},
				fg: ["700", "300"],
				icon: ["700 75%", "300 75%"],
				kbd: {
					bg: ["white", "black"],
					fg: ["600", "400"],
					border: ["200", "800"]
				},
				link: { fg: ["blue/700 70%", "blue/300 70%"] },
				muted: {
					bg: ["50", "950"],
					fg: ["700 75%", "300 75%"]
				},
				skeleton: {
					from: ["100", "900"],
					to: ["100 50%", "900 50%"]
				}
			},
			hovered: { bg: ["50", "950"] },
			pressed: { bg: ["100", "900"] },
			selected: {
				_blend: ["screen", "multiply"],
				accent: { fg: ["purple/300", "purple/700"] },
				avatar: { "*": {
					_blend: ["multiply", "screen"],
					bg: ["white", "black"],
					fg: ["black", "white"]
				} },
				badge: { "*": {
					bg: ["900", "100"],
					fg: ["400", "600"],
					dot: ["500", "500"],
					icon: ["500", "500"]
				} },
				bg: ["500", "400"],
				border: ["500 20%", "400 20%"],
				code: {
					bg: ["500 20%", "400 20%"],
					fg: ["200", "600"]
				},
				fg: ["white", "black"],
				icon: ["100 70%", "900 70%"],
				kbd: {
					bg: ["black", "white"],
					fg: ["200", "600"],
					border: ["800", "200"]
				},
				link: { fg: ["blue/200", "blue/600"] },
				muted: {
					bg: ["500 10%", "400 10%"],
					fg: ["100 70%", "900 70%"]
				},
				skeleton: {
					from: ["900", "100"],
					to: ["900 50%", "100 50%"]
				}
			},
			disabled: {
				_hue: "gray",
				accent: { fg: ["200", "800"] },
				avatar: { "*": {
					_blend: ["screen", "multiply"],
					bg: ["gray/100", "gray/900"],
					fg: ["white", "black"]
				} },
				badge: { "*": {
					_hue: "gray",
					bg: ["50", "950"],
					fg: ["gray/200", "gray/800"],
					dot: ["gray/200", "gray/800"],
					icon: ["gray/200", "gray/800"]
				} },
				border: ["100", "900"],
				code: {
					bg: ["50", "950"],
					fg: ["200", "800"]
				},
				fg: ["200", "800"],
				icon: ["200", "800"],
				kbd: {
					bg: ["white", "black"],
					fg: ["200", "800"],
					border: ["100", "900"]
				},
				link: { fg: ["200", "800"] },
				muted: {
					bg: ["50 50%", "950 50%"],
					fg: ["200", "800"]
				}
			}
		},
		default: { selected: { _hue: "blue" } },
		critical: { disabled: { bg: ["50 50%", "950 50%"] } }
	},
	syntax: {
		atrule: ["purple/600", "purple/400"],
		attrName: ["green/600", "green/400"],
		attrValue: ["yellow/600", "yellow/400"],
		attribute: ["yellow/600", "yellow/400"],
		boolean: ["purple/600", "purple/400"],
		builtin: ["purple/600", "purple/400"],
		cdata: ["yellow/600", "yellow/400"],
		char: ["yellow/600", "yellow/400"],
		class: ["orange/600", "orange/400"],
		className: ["cyan/600", "cyan/400"],
		comment: ["gray/400", "gray/600"],
		constant: ["purple/600", "purple/400"],
		deleted: ["red/600", "red/400"],
		entity: ["red/600", "red/400"],
		function: ["green/600", "green/400"],
		hexcode: ["blue/600", "blue/400"],
		id: ["purple/600", "purple/400"],
		important: ["purple/600", "purple/400"],
		inserted: ["yellow/600", "yellow/400"],
		keyword: ["magenta/600", "magenta/400"],
		number: ["purple/600", "purple/400"],
		operator: ["magenta/600", "magenta/400"],
		property: ["blue/600", "blue/400"],
		pseudoClass: ["yellow/600", "yellow/400"],
		pseudoElement: ["yellow/600", "yellow/400"],
		punctuation: ["gray/600", "gray/400"],
		regex: ["blue/600", "blue/400"],
		selector: ["red/600", "red/400"],
		string: ["yellow/600", "yellow/400"],
		symbol: ["purple/600", "purple/400"],
		tag: ["red/600", "red/400"],
		unit: ["orange/600", "orange/400"],
		url: ["red/600", "red/400"],
		variable: ["red/600", "red/400"]
	}
};
function isRecord$2(value) {
	return !!(value && typeof value == "object" && !Array.isArray(value));
}
function merge(...records) {
	let _records = records.filter(Boolean);
	return _records.length === 0 ? {} : _records.reduce(_merge, {});
}
function _merge(acc, source) {
	for (let key of Object.keys(source)) {
		let prevValue = acc[key], nextValue = source[key];
		acc[key] = isRecord$2(prevValue) && isRecord$2(nextValue) ? merge(prevValue, nextValue) : nextValue;
	}
	return acc;
}
/**
* Convert a tree of color tokens from a sparse format to a dense format.
*/
function resolveColorTokens(inputTokens) {
	let tokens = merge(defaultColorTokens, inputTokens);
	return {
		base: resolveBaseColorTokens(tokens),
		button: resolveButtonColorTokens(tokens),
		input: resolveInputColorTokens(tokens),
		selectable: resolveSelectableColorTokens(tokens),
		syntax: tokens.syntax
	};
}
function resolveBaseColorTokens(sparseTokens) {
	let tokens = {};
	for (let tone of THEME_COLOR_CARD_TONES) tokens[tone] = resolveBaseColorTones(sparseTokens, tone);
	return tokens;
}
function resolveBaseColorTones(inputTokens, tone) {
	let spec = merge(inputTokens?.base?.["*"], inputTokens?.base?.[tone]), hue = spec._hue || inputTokens?.base?.[tone]?._hue || "gray";
	return {
		...spec,
		_hue: hue,
		avatar: COLOR_HUES.reduce((acc, hue) => ({
			...acc,
			[hue]: merge({ _hue: hue }, spec.avatar?.["*"], spec.avatar?.[hue])
		}), {}),
		badge: THEME_COLOR_STATE_TONES.reduce((acc, tone) => ({
			...acc,
			[tone]: {
				_hue: inputTokens?.base?.[tone]?._hue || hue,
				...spec.badge?.["*"],
				...spec.badge?.[tone]
			}
		}), {})
	};
}
function resolveButtonColorTokens(inputTokens) {
	let tokens = {};
	for (let mode of THEME_COLOR_BUTTON_MODES) tokens[mode] = resolveButtonToneColorTokens(inputTokens, mode);
	return tokens;
}
function resolveButtonToneColorTokens(inputTokens, mode) {
	let tokens = {};
	for (let tone of THEME_COLOR_STATE_TONES) tokens[tone] = resolveButtonModeColorTokens(inputTokens, mode, tone);
	return tokens;
}
function resolveButtonModeColorTokens(inputTokens, mode, tone) {
	let tokens = {};
	for (let state of THEME_COLOR_STATES) tokens[state] = resolveButtonStateColorTokens(inputTokens, tone, mode, state);
	return tokens;
}
function resolveButtonStateColorTokens(inputTokens, tone, mode, state) {
	let spec = merge(inputTokens?.button?.[mode]?.["*"]?.["*"], inputTokens?.button?.[mode]?.[tone]?.["*"], inputTokens?.button?.[mode]?.["*"]?.[state], inputTokens?.button?.[mode]?.[tone]?.[state]), hue = spec._hue || inputTokens?.base?.[tone]?._hue;
	return {
		...spec,
		_hue: hue,
		avatar: COLOR_HUES.reduce((acc, hue) => ({
			...acc,
			[hue]: merge({ _hue: hue }, spec.avatar?.["*"], spec.avatar?.[hue])
		}), {}),
		badge: THEME_COLOR_STATE_TONES.reduce((acc, tone) => ({
			...acc,
			[tone]: {
				_hue: inputTokens?.base?.[tone]?._hue || hue,
				...spec.badge?.["*"],
				...spec.badge?.[tone]
			}
		}), {})
	};
}
function resolveInputColorTokens(inputTokens) {
	let tokens = {};
	for (let mode of THEME_COLOR_INPUT_MODES) tokens[mode] = resolveInputModeColorTokens(inputTokens, mode);
	return tokens;
}
function resolveInputModeColorTokens(inputTokens, mode) {
	let states = {};
	for (let state of THEME_COLOR_INPUT_STATES) states[state] = resolveInputStateColorTokens(inputTokens, mode, state);
	return states;
}
function resolveInputStateColorTokens(inputTokens, mode, state) {
	let spec = merge(inputTokens?.input?.["*"]?.["*"], inputTokens?.input?.[mode]?.["*"], inputTokens?.input?.["*"]?.[state], inputTokens?.input?.[mode]?.[state]), hue = spec._hue || inputTokens?.input?.[mode]?._hue;
	return {
		...spec,
		_hue: hue
	};
}
function resolveSelectableColorTokens(inputTokens) {
	let tokens = {};
	for (let tone of THEME_COLOR_STATE_TONES) tokens[tone] = resolveSelectableToneColorTokens(inputTokens, tone);
	return tokens;
}
function resolveSelectableToneColorTokens(inputTokens, tone) {
	let states = { _hue: inputTokens?.selectable?.[tone]?._hue || inputTokens?.base?.[tone]?._hue };
	for (let state of THEME_COLOR_STATES) states[state] = resolveSelectableStateColorTokens(inputTokens, tone, state);
	return states;
}
function resolveSelectableStateColorTokens(inputTokens, tone, state) {
	let spec = merge(inputTokens?.selectable?.["*"]?.["*"], inputTokens?.selectable?.[tone]?.["*"], inputTokens?.selectable?.["*"]?.[state], inputTokens?.selectable?.[tone]?.[state]), hue = spec._hue || inputTokens?.base?.[tone]?._hue;
	return {
		...spec,
		_hue: hue,
		avatar: COLOR_HUES.reduce((acc, hue) => ({
			...acc,
			[hue]: merge({ _hue: hue }, spec.avatar?.["*"], spec.avatar?.[hue])
		}), {}),
		badge: THEME_COLOR_STATE_TONES.reduce((acc, tone) => ({
			...acc,
			[tone]: {
				_hue: inputTokens?.base?.[tone]?._hue || hue,
				...spec.badge?.["*"],
				...spec.badge?.[tone]
			}
		}), {})
	};
}
function buildColorTheme(config) {
	let resolvedConfig = {
		...config,
		color: resolveColorTokens(config?.color)
	}, schemes = {};
	return defineLazyProperty(schemes, "light", () => buildColorScheme({ scheme: "light" }, resolvedConfig)), defineLazyProperty(schemes, "dark", () => buildColorScheme({ scheme: "dark" }, resolvedConfig)), schemes;
}
function buildColorScheme(options, config) {
	let { scheme } = options, colorScheme = {};
	for (let tone of THEME_COLOR_CARD_TONES) defineLazyProperty(colorScheme, tone, () => buildCardColorTheme({
		scheme,
		tone
	}, config));
	return colorScheme;
}
function buildCardColorTheme(options, config) {
	let { scheme, tone } = options, tokens = config?.color?.base?.[tone], context = {
		hue: tokens?._hue || "gray",
		scheme
	};
	return {
		_blend: (tokens?._blend || ["multiply", "screen"])[scheme === "light" ? 0 : 1],
		_dark: scheme === "dark",
		accent: { fg: resolveColorTokenValue(context, tokens?.accent?.fg) },
		avatar: buildAvatarColorTheme({ scheme }, tokens),
		backdrop: resolveColorTokenValue(context, tokens?.backdrop),
		badge: buildBadgeColorTheme(tokens?.badge, { scheme }, config),
		bg: resolveColorTokenValue(context, tokens?.bg),
		border: resolveColorTokenValue(context, tokens?.border),
		button: buildButtonColorTheme({
			scheme,
			tone
		}, config),
		code: {
			bg: resolveColorTokenValue(context, tokens?.code?.bg),
			fg: resolveColorTokenValue(context, tokens?.code?.fg)
		},
		fg: resolveColorTokenValue(context, tokens?.fg),
		focusRing: resolveColorTokenValue(context, tokens?.focusRing),
		icon: resolveColorTokenValue(context, tokens?.icon),
		input: buildInputColorTheme({
			scheme,
			tone
		}, config),
		kbd: {
			bg: resolveColorTokenValue(context, tokens?.kbd?.bg),
			fg: resolveColorTokenValue(context, tokens?.kbd?.fg),
			border: resolveColorTokenValue(context, tokens?.kbd?.border)
		},
		link: { fg: resolveColorTokenValue(context, tokens?.link?.fg) },
		muted: {
			bg: resolveColorTokenValue(context, tokens?.muted?.bg),
			fg: resolveColorTokenValue(context, tokens?.muted?.fg)
		},
		selectable: buildSelectableColorTheme({
			scheme,
			tone
		}, config),
		shadow: buildShadowColorTheme({
			scheme,
			tone
		}, config),
		skeleton: {
			from: resolveColorTokenValue(context, tokens?.skeleton?.from),
			to: resolveColorTokenValue(context, tokens?.skeleton?.to)
		},
		syntax: buildSyntaxColorTheme({ scheme }, config)
	};
}
function buildShadowColorTheme(options, config) {
	let { scheme, tone } = options, tokens = config?.color?.base?.[tone], context = {
		hue: tokens?._hue || "gray",
		scheme
	};
	return {
		outline: resolveColorTokenValue(context, tokens?.shadow?.outline),
		umbra: resolveColorTokenValue(context, tokens?.shadow?.umbra),
		penumbra: resolveColorTokenValue(context, tokens?.shadow?.penumbra),
		ambient: resolveColorTokenValue(context, tokens?.shadow?.ambient)
	};
}
function buildAvatarColorTheme(options, stateTokens) {
	let { scheme } = options;
	return {
		gray: _buildAvatarColorTheme({
			color: "gray",
			scheme
		}, stateTokens),
		blue: _buildAvatarColorTheme({
			color: "blue",
			scheme
		}, stateTokens),
		purple: _buildAvatarColorTheme({
			color: "purple",
			scheme
		}, stateTokens),
		magenta: _buildAvatarColorTheme({
			color: "magenta",
			scheme
		}, stateTokens),
		red: _buildAvatarColorTheme({
			color: "red",
			scheme
		}, stateTokens),
		orange: _buildAvatarColorTheme({
			color: "orange",
			scheme
		}, stateTokens),
		yellow: _buildAvatarColorTheme({
			color: "yellow",
			scheme
		}, stateTokens),
		green: _buildAvatarColorTheme({
			color: "green",
			scheme
		}, stateTokens),
		cyan: _buildAvatarColorTheme({
			color: "cyan",
			scheme
		}, stateTokens)
	};
}
function _buildAvatarColorTheme(options, stateTokens) {
	let { color, scheme } = options, tokens = stateTokens?.avatar?.[color], context = {
		hue: tokens?._hue || "gray",
		scheme
	};
	return {
		_blend: (tokens?._blend || ["screen", "multiply"])[scheme === "light" ? 0 : 1],
		bg: resolveColorTokenValue(context, tokens?.bg),
		fg: resolveColorTokenValue(context, tokens?.fg)
	};
}
function buildBadgeColorTheme(tokens, options, config) {
	let { scheme } = options, colorBadge = {};
	for (let tone of THEME_COLOR_STATE_TONES) colorBadge[tone] = _buildBadgeColorTheme(tokens, {
		scheme,
		tone
	}, config);
	return colorBadge;
}
function _buildBadgeColorTheme(parentTokens, options, config) {
	let { scheme, tone } = options, tokens = parentTokens?.[tone], context = {
		hue: tokens?._hue || config?.color?.base?.[tone]?._hue || "gray",
		scheme
	};
	return {
		bg: resolveColorTokenValue(context, tokens?.bg),
		fg: resolveColorTokenValue(context, tokens?.fg),
		dot: resolveColorTokenValue(context, tokens?.dot),
		icon: resolveColorTokenValue(context, tokens?.icon)
	};
}
function buildButtonColorTheme(options, config) {
	let { scheme, tone: cardTone } = options, modes = {};
	for (let mode of THEME_COLOR_BUTTON_MODES) modes[mode] = buildButtonTonesColorTheme({
		cardTone,
		scheme,
		mode
	}, config);
	return modes;
}
function buildButtonTonesColorTheme(options, config) {
	let { cardTone, mode, scheme } = options, tones = {};
	for (let tone of THEME_COLOR_STATE_TONES) tones[tone] = buildButtonStatesColorTheme({
		cardTone,
		mode,
		scheme,
		tone
	}, config);
	return tones;
}
function buildButtonStatesColorTheme(options, config) {
	let { cardTone, mode, scheme, tone } = options, states = {};
	for (let state of THEME_COLOR_STATES) states[state] = buildButtonStateColorTheme({
		cardTone,
		mode,
		tone,
		scheme,
		state
	}, config);
	return states;
}
function buildButtonStateColorTheme(options, config) {
	let { cardTone, mode, tone, scheme, state } = options, cardTokens = config?.color?.base?.[cardTone], tokens = config?.color?.button?.[mode]?.[tone]?.[state], hue = tokens?._hue || cardTokens?._hue || "gray", blendMode = tokens?._blend || ["screen", "multiply"], context = {
		hue,
		scheme
	};
	return {
		_blend: blendMode[scheme === "light" ? 0 : 1],
		accent: { fg: resolveColorTokenValue(context, tokens?.accent?.fg) },
		avatar: buildAvatarColorTheme({ scheme }, tokens),
		badge: buildBadgeColorTheme(tokens?.badge, { scheme }, config),
		bg: resolveColorTokenValue(context, tokens?.bg),
		border: resolveColorTokenValue(context, tokens?.border),
		code: {
			bg: resolveColorTokenValue(context, tokens?.code?.bg),
			fg: resolveColorTokenValue(context, tokens?.code?.fg)
		},
		fg: resolveColorTokenValue(context, tokens?.fg),
		icon: resolveColorTokenValue(context, tokens?.icon),
		muted: {
			bg: resolveColorTokenValue(context, tokens?.muted?.bg),
			fg: resolveColorTokenValue(context, tokens?.muted?.fg)
		},
		kbd: {
			bg: resolveColorTokenValue(context, tokens?.kbd?.bg),
			fg: resolveColorTokenValue(context, tokens?.kbd?.fg),
			border: resolveColorTokenValue(context, tokens?.kbd?.border)
		},
		link: { fg: resolveColorTokenValue(context, tokens?.link?.fg) },
		skeleton: {
			from: resolveColorTokenValue(context, tokens?.skeleton?.from),
			to: resolveColorTokenValue(context, tokens?.skeleton?.to)
		}
	};
}
function buildInputColorTheme(options, config) {
	let { scheme, tone } = options;
	return {
		default: buildInputStatesColorTheme({
			mode: "default",
			scheme,
			tone
		}, config),
		invalid: buildInputStatesColorTheme({
			mode: "invalid",
			scheme,
			tone
		}, config)
	};
}
function buildInputStatesColorTheme(options, config) {
	let { mode, scheme, tone } = options;
	return {
		enabled: buildInputStateColorTheme({
			mode,
			scheme,
			state: "enabled",
			cardTone: tone
		}, config),
		hovered: buildInputStateColorTheme({
			mode,
			scheme,
			state: "hovered",
			cardTone: tone
		}, config),
		readOnly: buildInputStateColorTheme({
			mode,
			scheme,
			state: "readOnly",
			cardTone: tone
		}, config),
		disabled: buildInputStateColorTheme({
			mode,
			scheme,
			state: "disabled",
			cardTone: tone
		}, config)
	};
}
function buildInputStateColorTheme(options, config) {
	let { cardTone, mode, scheme, state } = options, cardTokens = config?.color?.base?.[cardTone], tokens = config?.color?.input?.[mode]?.[state], hue = tokens?._hue || cardTokens?._hue || "gray", blendMode = tokens?._blend || ["screen", "multiply"], context = {
		hue,
		scheme
	};
	return {
		_blend: blendMode[scheme === "light" ? 0 : 1],
		bg: resolveColorTokenValue(context, tokens?.bg),
		border: resolveColorTokenValue(context, tokens?.border),
		fg: resolveColorTokenValue(context, tokens?.fg),
		muted: { bg: resolveColorTokenValue(context, tokens?.muted?.bg) },
		placeholder: resolveColorTokenValue(context, tokens?.placeholder)
	};
}
function buildSelectableColorTheme(options, config) {
	let { scheme, tone: cardTone } = options, tones = {};
	for (let tone of THEME_COLOR_STATE_TONES) tones[tone] = buildSelectableStatesColorTheme({
		cardTone,
		scheme,
		tone
	}, config);
	return tones;
}
function buildSelectableStatesColorTheme(options, config) {
	let { cardTone, scheme, tone } = options, states = {};
	for (let state of THEME_COLOR_STATES) states[state] = buildSelectableStateColorTheme({
		cardTone,
		tone,
		scheme,
		state
	}, config);
	return states;
}
function buildSelectableStateColorTheme(options, config) {
	let { cardTone, scheme, state, tone } = options, cardTokens = config?.color?.base?.[cardTone], tokens = config?.color?.selectable?.[tone]?.[state], hue = tokens?._hue || cardTokens?._hue || "gray", blendMode = tokens?._blend || ["screen", "multiply"], context = {
		hue,
		scheme
	};
	return {
		_blend: blendMode[scheme === "light" ? 0 : 1],
		accent: { fg: resolveColorTokenValue(context, tokens?.accent?.fg) },
		avatar: buildAvatarColorTheme({ scheme }, tokens),
		badge: buildBadgeColorTheme(tokens?.badge, { scheme }, config),
		bg: resolveColorTokenValue(context, tokens?.bg),
		border: resolveColorTokenValue(context, tokens?.border),
		code: {
			bg: resolveColorTokenValue(context, tokens?.code?.bg),
			fg: resolveColorTokenValue(context, tokens?.code?.fg)
		},
		fg: resolveColorTokenValue(context, tokens?.fg),
		icon: resolveColorTokenValue(context, tokens?.icon),
		muted: {
			bg: resolveColorTokenValue(context, tokens?.muted?.bg),
			fg: resolveColorTokenValue(context, tokens?.muted?.fg)
		},
		kbd: {
			bg: resolveColorTokenValue(context, tokens?.kbd?.bg),
			fg: resolveColorTokenValue(context, tokens?.kbd?.fg),
			border: resolveColorTokenValue(context, tokens?.kbd?.border)
		},
		link: { fg: resolveColorTokenValue(context, tokens?.link?.fg) },
		skeleton: {
			from: resolveColorTokenValue(context, tokens?.skeleton?.from),
			to: resolveColorTokenValue(context, tokens?.skeleton?.to)
		}
	};
}
function buildSyntaxColorTheme(options, config) {
	let { scheme } = options, tokens = config?.color?.syntax, context = {
		hue: "gray",
		scheme
	};
	return {
		atrule: resolveColorTokenValue(context, tokens?.atrule),
		attrName: resolveColorTokenValue(context, tokens?.attrName),
		attrValue: resolveColorTokenValue(context, tokens?.attrValue),
		attribute: resolveColorTokenValue(context, tokens?.attribute),
		boolean: resolveColorTokenValue(context, tokens?.boolean),
		builtin: resolveColorTokenValue(context, tokens?.builtin),
		cdata: resolveColorTokenValue(context, tokens?.cdata),
		char: resolveColorTokenValue(context, tokens?.char),
		class: resolveColorTokenValue(context, tokens?.class),
		className: resolveColorTokenValue(context, tokens?.className),
		comment: resolveColorTokenValue(context, tokens?.comment),
		constant: resolveColorTokenValue(context, tokens?.constant),
		deleted: resolveColorTokenValue(context, tokens?.deleted),
		doctype: resolveColorTokenValue(context, tokens?.doctype),
		entity: resolveColorTokenValue(context, tokens?.entity),
		function: resolveColorTokenValue(context, tokens?.function),
		hexcode: resolveColorTokenValue(context, tokens?.hexcode),
		id: resolveColorTokenValue(context, tokens?.id),
		important: resolveColorTokenValue(context, tokens?.important),
		inserted: resolveColorTokenValue(context, tokens?.inserted),
		keyword: resolveColorTokenValue(context, tokens?.keyword),
		number: resolveColorTokenValue(context, tokens?.number),
		operator: resolveColorTokenValue(context, tokens?.operator),
		prolog: resolveColorTokenValue(context, tokens?.prolog),
		property: resolveColorTokenValue(context, tokens?.property),
		pseudoClass: resolveColorTokenValue(context, tokens?.pseudoClass),
		pseudoElement: resolveColorTokenValue(context, tokens?.pseudoElement),
		punctuation: resolveColorTokenValue(context, tokens?.punctuation),
		regex: resolveColorTokenValue(context, tokens?.regex),
		selector: resolveColorTokenValue(context, tokens?.selector),
		string: resolveColorTokenValue(context, tokens?.string),
		symbol: resolveColorTokenValue(context, tokens?.symbol),
		tag: resolveColorTokenValue(context, tokens?.tag),
		unit: resolveColorTokenValue(context, tokens?.unit),
		url: resolveColorTokenValue(context, tokens?.url),
		variable: resolveColorTokenValue(context, tokens?.variable)
	};
}
var defaultColorPalette = color$1;
function mixChannel(b, s, weight) {
	return b + (s - b) * weight;
}
/**
* Apply the \`mix\` blend mode
* @internal
*/
function mix$1(b, s, weight) {
	return {
		r: mixChannel(b.r, s.r, weight),
		g: mixChannel(b.g, s.g, weight),
		b: mixChannel(b.b, s.b, weight)
	};
}
function lerp(x, y, a) {
	return x * (1 - a) + y * a;
}
function invlerp(x, y, a) {
	return clamp$2((a - x) / (y - x));
}
function clamp$2(a, min = 0, max = 1) {
	return Math.min(max, Math.max(min, a));
}
function range(x1, y1, x2, y2, a) {
	return lerp(x2, y2, invlerp(x1, y1, a));
}
function round(value) {
	return Math.round(value);
}
/**
* @internal
*/
function hexToRgb(hex) {
	if (hex.length === 4) {
		let hexR = hex.slice(1, 2), hexG = hex.slice(2, 3), hexB = hex.slice(3, 4);
		return {
			r: parseInt(hexR + hexR, 16),
			g: parseInt(hexG + hexG, 16),
			b: parseInt(hexB + hexB, 16)
		};
	}
	return {
		r: parseInt(hex.slice(1, 3), 16),
		g: parseInt(hex.slice(3, 5), 16),
		b: parseInt(hex.slice(5, 7), 16)
	};
}
/**
* @internal
*/
function rgbaToRGBA(rgba) {
	let values = rgba.replace(/rgba\(|\)/g, "").split(",");
	return {
		r: parseInt(values[0]),
		g: parseInt(values[1]),
		b: parseInt(values[2]),
		a: parseFloat(values[3])
	};
}
/**
* @internal
*/
function rgbToHex(color) {
	let r = round(clamp$2(Math.round(color.r), 0, 255)), g = round(clamp$2(Math.round(color.g), 0, 255)), b = round(clamp$2(Math.round(color.b), 0, 255));
	return "a" in color ? `rgba(${r},${g},${b},${color.a})` : "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
/**
* @internal
*/
function hslToRgb(hsl) {
	let s = hsl.s / 100, l = hsl.l / 100, c = (1 - Math.abs(2 * l - 1)) * s, x = c * (1 - Math.abs(hsl.h / 60 % 2 - 1)), m = l - c / 2, r = 0, g = 0, b = 0;
	return 0 <= hsl.h && hsl.h < 60 ? (r = c, g = x, b = 0) : 60 <= hsl.h && hsl.h < 120 ? (r = x, g = c, b = 0) : 120 <= hsl.h && hsl.h < 180 ? (r = 0, g = c, b = x) : 180 <= hsl.h && hsl.h < 240 ? (r = 0, g = x, b = c) : 240 <= hsl.h && hsl.h < 300 ? (r = x, g = 0, b = c) : 300 <= hsl.h && hsl.h < 360 && (r = c, g = 0, b = x), {
		r: Math.round((r + m) * 255),
		g: Math.round((g + m) * 255),
		b: Math.round((b + m) * 255)
	};
}
var HSL_RE = /hsl\(\s*(\d+)\s*,\s*((\d+(?:\.\d+)?)%)\s*,\s*((\d+(?:\.\d+)?)%)\s*\)/i;
function isHexChars(str) {
	for (let c of str) if ("0123456789ABCDEFabcdef".indexOf(c) === -1) return !1;
	return !0;
}
function isHex(str) {
	return str[0] !== "#" || str.length !== 4 && str.length !== 7 ? !1 : isHexChars(str.slice(1));
}
function parseHsl(str) {
	let res = HSL_RE.exec(str);
	if (!res) throw Error(`parseHsl: string is not a HSL color: "${str}"`);
	return {
		h: parseInt(res[1]),
		s: parseFloat(res[3]),
		l: parseFloat(res[5])
	};
}
/**
* @internal
*/
function parseColor(color) {
	if (!color) return {
		r: 0,
		g: 0,
		b: 0
	};
	if (typeof color != "string") throw Error("parseColor: expected a string");
	if (isHex(color)) return hexToRgb(color);
	if (color.startsWith("hsl(")) return hslToRgb(parseHsl(color));
	if (color.startsWith("rgba(")) return rgbaToRGBA(color);
	throw Error(`parseColor: unexpected color format: "${color}"`);
}
/**
* @internal
*/
function rgba$2(color, a) {
	let rgb = parseColor(color);
	return `rgba(${rgb.r},${rgb.g},${rgb.b},${a})`;
}
function multiplyChannel(b, s) {
	return b * s;
}
/**
* Apply the \`multiply\` blend mode
* Source: https://www.w3.org/TR/compositing-1/#blendingmultiply
* @internal
*/
function multiply(b, s) {
	return {
		r: multiplyChannel(b.r / 255, s.r / 255) * 255,
		g: multiplyChannel(b.g / 255, s.g / 255) * 255,
		b: multiplyChannel(b.b / 255, s.b / 255) * 255
	};
}
function screenChannel(b, s) {
	return b + s - b * s;
}
/**
* Apply the \`screen\` blend mode
* Source: https://www.w3.org/TR/compositing-1/#blendingscreen
* @internal
*/
function screen(b, s) {
	return {
		r: screenChannel(b.r / 255, s.r / 255) * 255,
		g: screenChannel(b.g / 255, s.g / 255) * 255,
		b: screenChannel(b.b / 255, s.b / 255) * 255
	};
}
var RGB_RANGE = [0, 255];
function mixThemeColor(value, options) {
	let { blendMode } = options, color = parseColor(value), black = parseColor(options.black), white = parseColor(options.white), bg = options.bg ? parseColor(options.bg) : blendMode === "multiply" ? white : black, paletteRange = {
		r: [black.r, white.r],
		g: [black.g, white.g],
		b: [black.b, white.b]
	}, convertedBgColor = {
		r: clamp$2(range(...paletteRange.r, ...RGB_RANGE, bg.r), ...RGB_RANGE),
		g: clamp$2(range(...paletteRange.g, ...RGB_RANGE, bg.g), ...RGB_RANGE),
		b: clamp$2(range(...paletteRange.b, ...RGB_RANGE, bg.b), ...RGB_RANGE)
	}, convertedColor = {
		r: clamp$2(range(...paletteRange.r, ...RGB_RANGE, color.r), ...RGB_RANGE),
		g: clamp$2(range(...paletteRange.g, ...RGB_RANGE, color.g), ...RGB_RANGE),
		b: clamp$2(range(...paletteRange.b, ...RGB_RANGE, color.b), ...RGB_RANGE)
	}, resultColor = blendMode === "multiply" ? multiply(convertedBgColor, convertedColor) : screen(convertedBgColor, convertedColor);
	return rgbToHex({
		r: clamp$2(range(...RGB_RANGE, ...paletteRange.r, resultColor.r), ...paletteRange.r),
		g: clamp$2(range(...RGB_RANGE, ...paletteRange.g, resultColor.g), ...paletteRange.g),
		b: clamp$2(range(...RGB_RANGE, ...paletteRange.b, resultColor.b), ...paletteRange.b)
	});
}
function renderColorValue(str, options) {
	let { bg, blendMode, colorPalette } = options;
	if (bg === "white") throw Error("Cannot blend with white background");
	let node = parseTokenValue(str);
	if (!node || node.type !== "color") throw Error(`Invalid color token value: ${str}`);
	let hex = "";
	if (node.key === "black" && (hex = renderColorHex(colorPalette.black)), node.key === "white" && (hex = renderColorHex(colorPalette.white)), node.hue && node.tint && (hex = renderColorHex(colorPalette[node.hue][node.tint])), !hex) throw Error(`Invalid color token value: ${str}`);
	let hexBeforeMix = hex, mixOptions = {
		blendMode,
		bg,
		black: renderColorHex(colorPalette.black),
		white: renderColorHex(colorPalette.white)
	};
	try {
		hex = mixThemeColor(hex, mixOptions), bg && node.mix !== void 0 && (hex = rgbToHex(mix$1(hexToRgb(bg), hexToRgb(hex), node.mix)));
	} catch (err) {
		throw console.warn("could not blend", hex, mixOptions), err;
	}
	return hex === "#aN" && (console.warn(`invalid color token value: ${str}`), hex = hexBeforeMix), node.opacity !== void 0 && (hex = rgba$2(hex, node.opacity)), hex;
}
function renderColorHex(color) {
	return typeof color == "string" ? color : color.hex;
}
function renderThemeColorSchemes(value, config) {
	let colorPalette = config?.palette ?? defaultColorPalette, schemes = {};
	return defineLazyProperty(schemes, "light", () => renderThemeColorScheme(colorPalette, value.light)), defineLazyProperty(schemes, "dark", () => renderThemeColorScheme(colorPalette, value.dark)), schemes;
}
function renderThemeColorScheme(colorPalette, value) {
	let renderedDefaultTone = renderThemeColor(value.default, { colorPalette }), bg = renderedDefaultTone.bg;
	if (bg === "white") throw Error("Cannot blend with white background");
	let scheme = { default: renderedDefaultTone };
	for (let tone of THEME_COLOR_CARD_TONES) {
		if (tone === "default") continue;
		let opts = tone === "transparent" ? { colorPalette } : {
			bg,
			colorPalette
		};
		defineLazyProperty(scheme, tone, () => renderThemeColor(value[tone], opts));
	}
	return scheme;
}
function renderThemeColor(value, options) {
	let { colorPalette, bg } = options, blendMode = value._blend || "multiply", baseBg = renderColorValue(value.bg, {
		colorPalette,
		bg,
		blendMode
	}), colorOptions = {
		colorPalette,
		bg: baseBg,
		blendMode
	}, button = renderThemeColorButton(value.button, {
		baseBg,
		blendMode,
		colorPalette
	}), selectable = renderThemeColorSelectable(value.selectable, {
		colorPalette,
		baseBg,
		blendMode
	}), shadow = {
		outline: renderColorValue(value.shadow.outline, colorOptions),
		umbra: renderColorValue(value.shadow.umbra, {
			...colorOptions,
			bg: void 0,
			colorPalette: {
				...colorPalette,
				black: "#000000"
			}
		}),
		penumbra: renderColorValue(value.shadow.penumbra, {
			...colorOptions,
			bg: void 0,
			colorPalette: {
				...colorPalette,
				black: "#000000"
			}
		}),
		ambient: renderColorValue(value.shadow.ambient, {
			...colorOptions,
			bg: void 0,
			colorPalette: {
				...colorPalette,
				black: "#000000"
			}
		})
	};
	return {
		_blend: blendMode,
		_dark: value._dark,
		accent: { fg: renderColorValue(value.accent.fg, colorOptions) },
		avatar: renderThemeColorAvatar(value.avatar, {
			baseBg,
			colorPalette,
			blendMode
		}),
		backdrop: renderColorValue(value.backdrop, colorOptions),
		badge: renderThemeColorBadge(value.badge, {
			baseBg,
			colorPalette,
			blendMode
		}),
		bg: baseBg,
		border: renderColorValue(value.border, colorOptions),
		button,
		code: {
			bg: renderColorValue(value.code.bg, colorOptions),
			fg: renderColorValue(value.code.fg, colorOptions)
		},
		fg: renderColorValue(value.fg, colorOptions),
		focusRing: renderColorValue(value.focusRing, colorOptions),
		icon: renderColorValue(value.icon, colorOptions),
		input: renderThemeColorInput(value.input, {
			baseBg,
			colorPalette,
			blendMode
		}),
		kbd: renderThemeColorKBD(value.kbd, {
			baseBg,
			colorPalette,
			blendMode
		}),
		link: { fg: renderColorValue(value.link.fg, colorOptions) },
		muted: {
			bg: renderColorValue(value.muted.bg, colorOptions),
			fg: renderColorValue(value.muted.fg, colorOptions)
		},
		shadow,
		skeleton: {
			from: renderColorValue(value.skeleton.from, colorOptions),
			to: renderColorValue(value.skeleton.to, colorOptions)
		},
		syntax: renderSyntaxColorTheme(value.syntax, {
			baseBg,
			colorPalette,
			blendMode
		}),
		selectable
	};
}
function renderThemeColorKBD(value, options) {
	let { baseBg, blendMode, colorPalette } = options, rootOptions = {
		bg: baseBg,
		blendMode,
		colorPalette
	}, bg = renderColorValue(value.bg, rootOptions), colorOptions = {
		bg,
		blendMode,
		colorPalette
	};
	return {
		bg,
		fg: renderColorValue(value.fg, colorOptions),
		border: renderColorValue(value.border, colorOptions)
	};
}
function renderThemeColorAvatar(value, options) {
	let colorAvatar = {};
	for (let hue of COLOR_HUES) colorAvatar[hue] = renderThemeColorAvatarColor(value[hue], options);
	return colorAvatar;
}
function renderThemeColorAvatarColor(value, options) {
	let { baseBg, blendMode: rootBlendMode, colorPalette } = options, blendMode = value._blend || "multiply", rootOptions = {
		bg: baseBg,
		blendMode: rootBlendMode,
		colorPalette
	}, bg = renderColorValue(value.bg, rootOptions), colorOptions = {
		bg,
		blendMode,
		colorPalette
	};
	return {
		_blend: blendMode,
		bg,
		fg: renderColorValue(value.fg, colorOptions)
	};
}
function renderThemeColorBadge(value, options) {
	let colorBadge = {};
	for (let tone of THEME_COLOR_STATE_TONES) colorBadge[tone] = renderThemeColorBadgeColor(value[tone], options);
	return colorBadge;
}
function renderThemeColorBadgeColor(value, options) {
	let { baseBg, blendMode: rootBlendMode, colorPalette } = options, blendMode = rootBlendMode, rootOptions = {
		bg: baseBg,
		blendMode: rootBlendMode,
		colorPalette
	}, bg = renderColorValue(value.bg, rootOptions), colorOptions = {
		bg,
		blendMode,
		colorPalette
	};
	return {
		bg,
		dot: renderColorValue(value.dot, colorOptions),
		fg: renderColorValue(value.fg, colorOptions),
		icon: renderColorValue(value.icon, colorOptions)
	};
}
function renderThemeColorButton(value, options) {
	return {
		default: renderThemeColorButtonTones(value.default, options),
		ghost: renderThemeColorButtonTones(value.ghost, options),
		bleed: renderThemeColorButtonTones(value.bleed, options)
	};
}
function renderThemeColorButtonTones(value, options) {
	let colorButtonMode = {};
	for (let tone of THEME_COLOR_STATE_TONES) colorButtonMode[tone] = renderThemeColorButtonStates(value[tone], options);
	return colorButtonMode;
}
function renderThemeColorButtonStates(value, options) {
	return {
		enabled: renderThemeColorState(value.enabled, options),
		hovered: renderThemeColorState(value.hovered, options),
		pressed: renderThemeColorState(value.pressed, options),
		selected: renderThemeColorState(value.selected, options),
		disabled: renderThemeColorState(value.disabled, options)
	};
}
function renderThemeColorState(value, options) {
	let { baseBg, blendMode: rootBlendMode, colorPalette } = options, blendMode = value._blend || "multiply", rootOptions = {
		bg: baseBg,
		blendMode: rootBlendMode,
		colorPalette
	}, bg = renderColorValue(value.bg, rootOptions), colorOptions = {
		bg,
		blendMode,
		colorPalette
	};
	return {
		_blend: blendMode,
		accent: { fg: renderColorValue(value.accent.fg, colorOptions) },
		avatar: renderThemeColorAvatar(value.avatar, {
			baseBg: bg,
			colorPalette,
			blendMode
		}),
		badge: renderThemeColorBadge(value.badge, {
			baseBg: bg,
			colorPalette,
			blendMode
		}),
		bg,
		border: renderColorValue(value.border, colorOptions),
		code: {
			bg: renderColorValue(value.code.bg, colorOptions),
			fg: renderColorValue(value.code.fg, colorOptions)
		},
		fg: renderColorValue(value.fg, colorOptions),
		icon: renderColorValue(value.icon, colorOptions),
		link: { fg: renderColorValue(value.link.fg, colorOptions) },
		muted: {
			bg: renderColorValue(value.muted.bg, colorOptions),
			fg: renderColorValue(value.muted.fg, colorOptions)
		},
		kbd: {
			bg: renderColorValue(value.kbd.bg, colorOptions),
			fg: renderColorValue(value.kbd.fg, colorOptions),
			border: renderColorValue(value.kbd.border, colorOptions)
		},
		skeleton: {
			from: renderColorValue(value.skeleton?.from, colorOptions),
			to: renderColorValue(value.skeleton?.to, colorOptions)
		}
	};
}
function renderThemeColorInput(value, options) {
	return {
		default: renderInputStatesColorTheme(value.default, options),
		invalid: renderInputStatesColorTheme(value.invalid, options)
	};
}
function renderInputStatesColorTheme(value, options) {
	return {
		enabled: renderInputStateColorTheme(value.enabled, options),
		hovered: renderInputStateColorTheme(value.hovered, options),
		readOnly: renderInputStateColorTheme(value.readOnly, options),
		disabled: renderInputStateColorTheme(value.disabled, options)
	};
}
function renderInputStateColorTheme(value, options) {
	let { baseBg, blendMode: rootBlendMode, colorPalette } = options, blendMode = value._blend || "multiply", rootOptions = {
		colorPalette,
		bg: baseBg,
		blendMode: rootBlendMode
	}, bg = renderColorValue(value.bg, rootOptions), colorOptions = {
		colorPalette,
		bg,
		blendMode
	};
	return {
		_blend: blendMode,
		bg,
		border: renderColorValue(value.border, colorOptions),
		fg: renderColorValue(value.fg, colorOptions),
		muted: { bg: renderColorValue(value.muted.bg, colorOptions) },
		placeholder: renderColorValue(value.placeholder, colorOptions)
	};
}
function renderThemeColorSelectable(value, options) {
	let colorSelectable = {};
	for (let tone of THEME_COLOR_STATE_TONES) colorSelectable[tone] = renderThemeColorSelectableStates(value[tone], options);
	return colorSelectable;
}
function renderThemeColorSelectableStates(value, options) {
	return {
		enabled: renderThemeColorState(value.enabled, options),
		hovered: renderThemeColorState(value.hovered, options),
		pressed: renderThemeColorState(value.pressed, options),
		selected: renderThemeColorState(value.selected, options),
		disabled: renderThemeColorState(value.disabled, options)
	};
}
function renderSyntaxColorTheme(value, options) {
	let { colorPalette, baseBg, blendMode } = options, colorOptions = {
		colorPalette,
		bg: baseBg,
		blendMode
	};
	return {
		atrule: renderColorValue(value.atrule, colorOptions),
		attrName: renderColorValue(value.attrName, colorOptions),
		attrValue: renderColorValue(value.attrValue, colorOptions),
		attribute: renderColorValue(value.attribute, colorOptions),
		boolean: renderColorValue(value.boolean, colorOptions),
		builtin: renderColorValue(value.builtin, colorOptions),
		cdata: renderColorValue(value.cdata, colorOptions),
		char: renderColorValue(value.char, colorOptions),
		class: renderColorValue(value.class, colorOptions),
		className: renderColorValue(value.className, colorOptions),
		comment: renderColorValue(value.comment, colorOptions),
		constant: renderColorValue(value.constant, colorOptions),
		deleted: renderColorValue(value.deleted, colorOptions),
		doctype: renderColorValue(value.doctype, colorOptions),
		entity: renderColorValue(value.entity, colorOptions),
		function: renderColorValue(value.function, colorOptions),
		hexcode: renderColorValue(value.hexcode, colorOptions),
		id: renderColorValue(value.id, colorOptions),
		important: renderColorValue(value.important, colorOptions),
		inserted: renderColorValue(value.inserted, colorOptions),
		keyword: renderColorValue(value.keyword, colorOptions),
		number: renderColorValue(value.number, colorOptions),
		operator: renderColorValue(value.operator, colorOptions),
		prolog: renderColorValue(value.prolog, colorOptions),
		property: renderColorValue(value.property, colorOptions),
		pseudoClass: renderColorValue(value.pseudoClass, colorOptions),
		pseudoElement: renderColorValue(value.pseudoElement, colorOptions),
		punctuation: renderColorValue(value.punctuation, colorOptions),
		regex: renderColorValue(value.regex, colorOptions),
		selector: renderColorValue(value.selector, colorOptions),
		string: renderColorValue(value.string, colorOptions),
		symbol: renderColorValue(value.symbol, colorOptions),
		tag: renderColorValue(value.tag, colorOptions),
		unit: renderColorValue(value.unit, colorOptions),
		url: renderColorValue(value.url, colorOptions),
		variable: renderColorValue(value.variable, colorOptions)
	};
}
/** @internal */
function buildTheme(config) {
	let colorTheme = buildColorTheme(config);
	return v2_v0({
		_version: 2,
		avatar: config?.avatar ?? defaultThemeConfig.avatar,
		button: config?.button ?? defaultThemeConfig.button,
		card: config?.card ?? defaultThemeConfig.card,
		color: renderThemeColorSchemes(colorTheme, config),
		container: config?.container ?? defaultThemeConfig.container,
		font: config?.font ?? defaultThemeFonts,
		input: config?.input ?? defaultThemeConfig.input,
		layer: config?.layer ?? defaultThemeConfig.layer,
		media: config?.media ?? defaultThemeConfig.media,
		radius: config?.radius ?? defaultThemeConfig.radius,
		shadow: config?.shadow ?? defaultThemeConfig.shadow,
		space: config?.space ?? defaultThemeConfig.space,
		style: config?.style ?? defaultThemeConfig.style
	});
}
function createSelectableTones(opts, base, dark, solid, muted) {
	return {
		default: _createSelectableStates(opts, base, dark, solid, muted, "default"),
		primary: _createSelectableStates(opts, base, dark, solid, muted, "primary"),
		positive: _createSelectableStates(opts, base, dark, solid, muted, "positive"),
		caution: _createSelectableStates(opts, base, dark, solid, muted, "caution"),
		critical: _createSelectableStates(opts, base, dark, solid, muted, "critical")
	};
}
function _createSelectableStates(opts, base, dark, solid, muted, tone) {
	return {
		enabled: opts.selectable({
			base,
			dark,
			solid,
			muted,
			state: "enabled",
			tone
		}),
		hovered: opts.selectable({
			base,
			dark,
			solid,
			muted,
			state: "hovered",
			tone
		}),
		pressed: opts.selectable({
			base,
			dark,
			solid,
			muted,
			state: "pressed",
			tone
		}),
		selected: opts.selectable({
			base,
			dark,
			solid,
			muted,
			state: "selected",
			tone
		}),
		disabled: opts.selectable({
			base,
			dark,
			solid,
			muted,
			state: "disabled",
			tone
		})
	};
}
function createSolidTones(opts, base, dark, name) {
	return {
		default: {
			enabled: opts.solid({
				base,
				dark,
				tone: "default",
				name,
				state: "enabled"
			}),
			disabled: opts.solid({
				base,
				dark,
				tone: "default",
				name,
				state: "disabled"
			}),
			hovered: opts.solid({
				base,
				dark,
				tone: "default",
				name,
				state: "hovered"
			}),
			pressed: opts.solid({
				base,
				dark,
				tone: "default",
				name,
				state: "pressed"
			}),
			selected: opts.solid({
				base,
				dark,
				tone: "default",
				name,
				state: "selected"
			})
		},
		transparent: {
			enabled: opts.solid({
				base,
				dark,
				tone: "transparent",
				name,
				state: "enabled"
			}),
			disabled: opts.solid({
				base,
				dark,
				tone: "transparent",
				name,
				state: "disabled"
			}),
			hovered: opts.solid({
				base,
				dark,
				tone: "transparent",
				name,
				state: "hovered"
			}),
			pressed: opts.solid({
				base,
				dark,
				tone: "transparent",
				name,
				state: "pressed"
			}),
			selected: opts.solid({
				base,
				dark,
				tone: "transparent",
				name,
				state: "selected"
			})
		},
		primary: {
			enabled: opts.solid({
				base,
				dark,
				tone: "primary",
				name,
				state: "enabled"
			}),
			disabled: opts.solid({
				base,
				dark,
				tone: "primary",
				name,
				state: "disabled"
			}),
			hovered: opts.solid({
				base,
				dark,
				tone: "primary",
				name,
				state: "hovered"
			}),
			pressed: opts.solid({
				base,
				dark,
				tone: "primary",
				name,
				state: "pressed"
			}),
			selected: opts.solid({
				base,
				dark,
				tone: "primary",
				name,
				state: "selected"
			})
		},
		positive: {
			enabled: opts.solid({
				base,
				dark,
				tone: "positive",
				name,
				state: "enabled"
			}),
			disabled: opts.solid({
				base,
				dark,
				tone: "positive",
				name,
				state: "disabled"
			}),
			hovered: opts.solid({
				base,
				dark,
				tone: "positive",
				name,
				state: "hovered"
			}),
			pressed: opts.solid({
				base,
				dark,
				tone: "positive",
				name,
				state: "pressed"
			}),
			selected: opts.solid({
				base,
				dark,
				tone: "positive",
				name,
				state: "selected"
			})
		},
		caution: {
			enabled: opts.solid({
				base,
				dark,
				tone: "caution",
				name,
				state: "enabled"
			}),
			disabled: opts.solid({
				base,
				dark,
				tone: "caution",
				name,
				state: "disabled"
			}),
			hovered: opts.solid({
				base,
				dark,
				tone: "caution",
				name,
				state: "hovered"
			}),
			pressed: opts.solid({
				base,
				dark,
				tone: "caution",
				name,
				state: "pressed"
			}),
			selected: opts.solid({
				base,
				dark,
				tone: "caution",
				name,
				state: "selected"
			})
		},
		critical: {
			enabled: opts.solid({
				base,
				dark,
				tone: "critical",
				name,
				state: "enabled"
			}),
			disabled: opts.solid({
				base,
				dark,
				tone: "critical",
				name,
				state: "disabled"
			}),
			hovered: opts.solid({
				base,
				dark,
				tone: "critical",
				name,
				state: "hovered"
			}),
			pressed: opts.solid({
				base,
				dark,
				tone: "critical",
				name,
				state: "pressed"
			}),
			selected: opts.solid({
				base,
				dark,
				tone: "critical",
				name,
				state: "selected"
			})
		}
	};
}
function createButtonTones(opts, base, dark, solid, muted, mode) {
	return {
		default: opts.button({
			base,
			dark,
			solid: solid.default,
			muted: muted.default,
			mode
		}),
		primary: opts.button({
			base,
			dark,
			solid: solid.primary,
			muted: muted.primary,
			mode
		}),
		positive: opts.button({
			base,
			dark,
			solid: solid.positive,
			muted: muted.positive,
			mode
		}),
		caution: opts.button({
			base,
			dark,
			solid: solid.caution,
			muted: muted.caution,
			mode
		}),
		critical: opts.button({
			base,
			dark,
			solid: solid.critical,
			muted: muted.critical,
			mode
		})
	};
}
function createButtonModes(opts, base, dark, solid, muted) {
	return {
		default: createButtonTones(opts, base, dark, solid, muted, "default"),
		ghost: createButtonTones(opts, base, dark, solid, muted, "ghost"),
		bleed: createButtonTones(opts, base, dark, solid, muted, "bleed")
	};
}
function createCardStates(opts, base, dark, name, solid, muted) {
	return {
		enabled: opts.card({
			base,
			dark,
			name,
			state: "enabled",
			solid,
			muted
		}),
		disabled: opts.card({
			base,
			dark,
			name,
			state: "disabled",
			solid,
			muted
		}),
		hovered: opts.card({
			base,
			dark,
			name,
			state: "hovered",
			solid,
			muted
		}),
		pressed: opts.card({
			base,
			dark,
			name,
			state: "pressed",
			solid,
			muted
		}),
		selected: opts.card({
			base,
			dark,
			name,
			state: "selected",
			solid,
			muted
		})
	};
}
var black = "hsl(0, 0%, 0%)";
var white = "hsl(0, 0%, 100%)";
var colors = {
	default: {
		lightest: "hsl(0, 0%, 95%)",
		lighter: "hsl(0, 0%, 70%)",
		light: "hsl(0, 0%, 65%)",
		base: "hsl(0, 0%, 50%)",
		dark: "hsl(0, 0%, 35%)",
		darker: "hsl(0, 0%, 20%)",
		darkest: "hsl(0, 0%, 5%)"
	},
	transparent: {
		lightest: "hsl(240, 100%, 95%)",
		lighter: "hsl(240, 100%, 70%)",
		light: "hsl(240, 100%, 65%)",
		base: "hsl(240, 100%, 50%)",
		dark: "hsl(240, 100%, 35%)",
		darker: "hsl(240, 100%, 20%)",
		darkest: "hsl(240, 100%, 5%)"
	},
	primary: {
		lightest: "hsl(240, 100%, 95%)",
		lighter: "hsl(240, 100%, 70%)",
		light: "hsl(240, 100%, 65%)",
		base: "hsl(240, 100%, 50%)",
		dark: "hsl(240, 100%, 35%)",
		darker: "hsl(240, 100%, 20%)",
		darkest: "hsl(240, 100%, 5%)"
	},
	positive: {
		lightest: "hsl(120, 100%, 95%)",
		lighter: "hsl(120, 100%, 70%)",
		light: "hsl(120, 100%, 65%)",
		base: "hsl(120, 100%, 50%)",
		dark: "hsl(120, 100%, 35%)",
		darker: "hsl(120, 100%, 20%)",
		darkest: "hsl(120, 100%, 5%)"
	},
	caution: {
		lightest: "hsl(60, 100%, 95%)",
		lighter: "hsl(60, 100%, 70%)",
		light: "hsl(60, 100%, 65%)",
		base: "hsl(60, 100%, 50%)",
		dark: "hsl(60, 100%, 35%)",
		darker: "hsl(60, 100%, 20%)",
		darkest: "hsl(60, 100%, 5%)"
	},
	critical: {
		lightest: "hsl(0, 100%, 95%)",
		lighter: "hsl(0, 100%, 70%)",
		light: "hsl(0, 100%, 65%)",
		base: "hsl(0, 100%, 50%)",
		dark: "hsl(0, 100%, 35%)",
		darker: "hsl(0, 100%, 20%)",
		darkest: "hsl(0, 100%, 5%)"
	}
};
var spots = {
	gray: "hsl(0, 0%, 50%)",
	red: "hsl(0, 100%, 50%)",
	orange: "hsl(30, 100%, 50%)",
	yellow: "hsl(60, 100%, 50%)",
	green: "hsl(120, 100%, 50%)",
	cyan: "hsl(180, 100%, 50%)",
	blue: "hsl(240, 100%, 50%)",
	purple: "hsl(270, 100%, 50%)",
	magenta: "hsl(300, 100%, 50%)"
};
var tones = {
	transparent: {
		bg: [colors.transparent.darkest, colors.transparent.lightest],
		fg: [colors.transparent.lightest, colors.transparent.darkest],
		border: [colors.transparent.darker, colors.transparent.lighter],
		focusRing: [colors.transparent.base, colors.transparent.base]
	},
	primary: {
		bg: [colors.primary.darkest, colors.primary.lightest],
		fg: [colors.primary.lightest, colors.primary.darkest],
		border: [colors.primary.darker, colors.primary.lighter],
		focusRing: [colors.primary.base, colors.primary.base]
	},
	positive: {
		bg: [colors.positive.darkest, colors.positive.lightest],
		fg: [colors.positive.lightest, colors.positive.darkest],
		border: [colors.positive.darker, colors.positive.lighter],
		focusRing: [colors.positive.base, colors.positive.base]
	},
	caution: {
		bg: [colors.caution.darkest, colors.caution.lightest],
		fg: [colors.caution.lightest, colors.caution.darkest],
		border: [colors.caution.darker, colors.caution.lighter],
		focusRing: [colors.caution.base, colors.caution.base]
	},
	critical: {
		bg: [colors.critical.darkest, colors.critical.lightest],
		fg: [colors.critical.lightest, colors.critical.darkest],
		border: [colors.critical.darker, colors.critical.lighter],
		focusRing: [colors.critical.base, colors.critical.base]
	}
};
var defaultOpts = {
	base: ({ dark, name }) => name === "default" ? {
		bg: dark ? black : white,
		fg: dark ? white : black,
		border: dark ? colors.default.darkest : colors.default.lightest,
		focusRing: colors.primary.base,
		shadow: {
			outline: black,
			umbra: black,
			penumbra: black,
			ambient: black
		},
		skeleton: {
			from: dark ? white : black,
			to: dark ? white : black
		}
	} : {
		bg: tones[name].bg[+!dark],
		fg: tones[name].fg[+!dark],
		border: tones[name].border[+!dark],
		focusRing: tones[name].focusRing[+!dark],
		shadow: {
			outline: black,
			umbra: black,
			penumbra: black,
			ambient: black
		},
		skeleton: {
			from: dark ? white : black,
			to: dark ? white : black
		}
	},
	solid: ({ base, dark, state, tone }) => {
		let color = colors[tone];
		return state === "hovered" ? {
			bg: dark ? color.light : color.dark,
			bg2: dark ? color.light : color.dark,
			border: dark ? color.lighter : color.darker,
			fg: dark ? color.darkest : color.lightest,
			icon: dark ? color.darkest : color.lightest,
			muted: { fg: black },
			accent: { fg: black },
			link: { fg: black },
			code: {
				bg: black,
				fg: black
			},
			skeleton: base.skeleton
		} : {
			bg: color.base,
			bg2: color.base,
			border: dark ? color.light : color.dark,
			fg: dark ? color.darkest : color.lightest,
			icon: dark ? color.darkest : color.lightest,
			muted: { fg: black },
			accent: { fg: black },
			link: { fg: black },
			code: {
				bg: black,
				fg: black
			},
			skeleton: base.skeleton
		};
	},
	muted: ({ base, dark, state, tone }) => {
		let color = colors[tone];
		return state === "hovered" ? {
			bg: dark ? color.darker : color.lighter,
			bg2: dark ? color.darker : color.lighter,
			border: dark ? color.lighter : color.darker,
			fg: dark ? color.lightest : color.darkest,
			icon: dark ? color.lightest : color.darkest,
			muted: { fg: black },
			accent: { fg: black },
			link: { fg: black },
			code: {
				bg: black,
				fg: black
			},
			skeleton: base.skeleton
		} : {
			bg: dark ? color.darkest : color.lightest,
			bg2: dark ? color.darkest : color.lightest,
			border: dark ? color.darker : color.lighter,
			fg: dark ? color.lighter : color.darker,
			icon: dark ? color.lighter : color.darker,
			muted: { fg: black },
			accent: { fg: black },
			link: { fg: black },
			code: {
				bg: black,
				fg: black
			},
			skeleton: base.skeleton
		};
	},
	button: ({ base, mode, muted, solid }) => mode === "bleed" ? {
		...muted,
		enabled: {
			bg: "transparent",
			bg2: "transparent",
			fg: muted.enabled.fg,
			icon: muted.enabled.fg,
			border: "transparent",
			muted: { fg: black },
			accent: { fg: black },
			link: { fg: black },
			code: {
				bg: black,
				fg: black
			},
			skeleton: base.skeleton
		},
		hovered: {
			bg: muted.enabled.bg,
			bg2: muted.enabled.bg,
			fg: muted.hovered.fg,
			icon: muted.hovered.fg,
			border: "transparent",
			muted: { fg: black },
			accent: { fg: black },
			link: { fg: black },
			code: {
				bg: black,
				fg: black
			},
			skeleton: base.skeleton
		}
	} : mode === "ghost" ? {
		...solid,
		enabled: muted.enabled
	} : solid,
	card: ({ base }) => ({
		bg: black,
		bg2: black,
		fg: black,
		icon: black,
		border: black,
		muted: { fg: black },
		accent: { fg: black },
		link: { fg: black },
		code: {
			bg: black,
			fg: black
		},
		skeleton: base.skeleton
	}),
	input: () => ({
		bg: black,
		bg2: black,
		fg: black,
		border: black,
		placeholder: black
	}),
	selectable: ({ muted, state, tone }) => muted[tone][state],
	spot: ({ key }) => spots[key],
	syntax: () => ({
		atrule: black,
		attrName: black,
		attrValue: black,
		attribute: black,
		boolean: black,
		builtin: black,
		cdata: black,
		char: black,
		class: black,
		className: black,
		comment: black,
		constant: black,
		deleted: black,
		doctype: black,
		entity: black,
		function: black,
		hexcode: black,
		id: black,
		important: black,
		inserted: black,
		keyword: black,
		number: black,
		operator: black,
		prolog: black,
		property: black,
		pseudoClass: black,
		pseudoElement: black,
		punctuation: black,
		regex: black,
		selector: black,
		string: black,
		symbol: black,
		tag: black,
		unit: black,
		url: black,
		variable: black
	})
};
function createInputModes(opts, base, dark, solid, muted) {
	return {
		default: {
			enabled: opts.input({
				base,
				dark,
				mode: "default",
				state: "enabled",
				solid: solid.default,
				muted: muted.default
			}),
			disabled: opts.input({
				base,
				dark,
				mode: "default",
				state: "disabled",
				solid: solid.default,
				muted: muted.default
			}),
			hovered: opts.input({
				base,
				dark,
				mode: "default",
				state: "hovered",
				solid: solid.default,
				muted: muted.default
			}),
			readOnly: opts.input({
				base,
				dark,
				mode: "default",
				state: "readOnly",
				solid: solid.default,
				muted: muted.default
			})
		},
		invalid: {
			enabled: opts.input({
				base,
				dark,
				mode: "invalid",
				state: "enabled",
				solid: solid.default,
				muted: muted.default
			}),
			disabled: opts.input({
				base,
				dark,
				mode: "invalid",
				state: "disabled",
				solid: solid.default,
				muted: muted.default
			}),
			hovered: opts.input({
				base,
				dark,
				mode: "invalid",
				state: "hovered",
				solid: solid.default,
				muted: muted.default
			}),
			readOnly: opts.input({
				base,
				dark,
				mode: "invalid",
				state: "readOnly",
				solid: solid.default,
				muted: muted.default
			})
		}
	};
}
function createMutedTones(opts, base, dark, name) {
	return {
		default: {
			enabled: opts.muted({
				base,
				dark,
				tone: "default",
				name,
				state: "enabled"
			}),
			disabled: opts.muted({
				base,
				dark,
				tone: "default",
				name,
				state: "disabled"
			}),
			hovered: opts.muted({
				base,
				dark,
				tone: "default",
				name,
				state: "hovered"
			}),
			pressed: opts.muted({
				base,
				dark,
				tone: "default",
				name,
				state: "pressed"
			}),
			selected: opts.muted({
				base,
				dark,
				tone: "default",
				name,
				state: "selected"
			})
		},
		transparent: {
			enabled: opts.muted({
				base,
				dark,
				tone: "transparent",
				name,
				state: "enabled"
			}),
			disabled: opts.muted({
				base,
				dark,
				tone: "transparent",
				name,
				state: "disabled"
			}),
			hovered: opts.muted({
				base,
				dark,
				tone: "transparent",
				name,
				state: "hovered"
			}),
			pressed: opts.muted({
				base,
				dark,
				tone: "transparent",
				name,
				state: "pressed"
			}),
			selected: opts.muted({
				base,
				dark,
				tone: "transparent",
				name,
				state: "selected"
			})
		},
		primary: {
			enabled: opts.muted({
				base,
				dark,
				tone: "primary",
				name,
				state: "enabled"
			}),
			disabled: opts.muted({
				base,
				dark,
				tone: "primary",
				name,
				state: "disabled"
			}),
			hovered: opts.muted({
				base,
				dark,
				tone: "primary",
				name,
				state: "hovered"
			}),
			pressed: opts.muted({
				base,
				dark,
				tone: "primary",
				name,
				state: "pressed"
			}),
			selected: opts.muted({
				base,
				dark,
				tone: "primary",
				name,
				state: "selected"
			})
		},
		positive: {
			enabled: opts.muted({
				base,
				dark,
				tone: "positive",
				name,
				state: "enabled"
			}),
			disabled: opts.muted({
				base,
				dark,
				tone: "positive",
				name,
				state: "disabled"
			}),
			hovered: opts.muted({
				base,
				dark,
				tone: "positive",
				name,
				state: "hovered"
			}),
			pressed: opts.muted({
				base,
				dark,
				tone: "positive",
				name,
				state: "pressed"
			}),
			selected: opts.muted({
				base,
				dark,
				tone: "positive",
				name,
				state: "selected"
			})
		},
		caution: {
			enabled: opts.muted({
				base,
				dark,
				tone: "caution",
				name,
				state: "enabled"
			}),
			disabled: opts.muted({
				base,
				dark,
				tone: "caution",
				name,
				state: "disabled"
			}),
			hovered: opts.muted({
				base,
				dark,
				tone: "caution",
				name,
				state: "hovered"
			}),
			pressed: opts.muted({
				base,
				dark,
				tone: "caution",
				name,
				state: "pressed"
			}),
			selected: opts.muted({
				base,
				dark,
				tone: "caution",
				name,
				state: "selected"
			})
		},
		critical: {
			enabled: opts.muted({
				base,
				dark,
				tone: "critical",
				name,
				state: "enabled"
			}),
			disabled: opts.muted({
				base,
				dark,
				tone: "critical",
				name,
				state: "disabled"
			}),
			hovered: opts.muted({
				base,
				dark,
				tone: "critical",
				name,
				state: "hovered"
			}),
			pressed: opts.muted({
				base,
				dark,
				tone: "critical",
				name,
				state: "pressed"
			}),
			selected: opts.muted({
				base,
				dark,
				tone: "critical",
				name,
				state: "selected"
			})
		}
	};
}
function createSpot(opts, base, dark) {
	return {
		gray: opts.spot({
			base,
			dark,
			key: "gray"
		}),
		blue: opts.spot({
			base,
			dark,
			key: "blue"
		}),
		purple: opts.spot({
			base,
			dark,
			key: "purple"
		}),
		magenta: opts.spot({
			base,
			dark,
			key: "magenta"
		}),
		red: opts.spot({
			base,
			dark,
			key: "red"
		}),
		orange: opts.spot({
			base,
			dark,
			key: "orange"
		}),
		yellow: opts.spot({
			base,
			dark,
			key: "yellow"
		}),
		green: opts.spot({
			base,
			dark,
			key: "green"
		}),
		cyan: opts.spot({
			base,
			dark,
			key: "cyan"
		})
	};
}
/**
* @public
* @deprecated Use `buildColorTheme` instead.
*/
function createColorTheme(partialOpts = {}) {
	let builders = {
		...defaultOpts,
		...partialOpts
	};
	return {
		light: _createColorScheme(builders, !1),
		dark: _createColorScheme(builders, !0)
	};
}
/**
* @internal
*/
function _createColorScheme(opts, dark) {
	return {
		default: _createColor(opts, dark, "default"),
		transparent: _createColor(opts, dark, "transparent"),
		primary: _createColor(opts, dark, "primary"),
		positive: _createColor(opts, dark, "positive"),
		caution: _createColor(opts, dark, "caution"),
		critical: _createColor(opts, dark, "critical")
	};
}
/**
* @internal
*/
function _createColor(opts, dark, name) {
	let base = opts.base({
		dark,
		name
	}), solid = createSolidTones(opts, base, dark, name), muted = createMutedTones(opts, base, dark, name);
	return {
		base,
		button: createButtonModes(opts, base, dark, solid, muted),
		card: createCardStates(opts, base, dark, name, solid, muted),
		dark,
		input: createInputModes(opts, base, dark, solid, muted),
		selectable: createSelectableTones(opts, base, dark, solid, muted),
		spot: createSpot(opts, base, dark),
		syntax: opts.syntax({
			base,
			dark
		}),
		solid,
		muted
	};
}
var cache$3 = /* @__PURE__ */ new WeakMap();
/** @internal */
function themeColor_v0_v2(color_v0) {
	let cached_v2 = cache$3.get(color_v0);
	if (cached_v2) return cached_v2;
	let base = stateThemeColor_v0_v2(color_v0, color_v0.card.enabled), color_v2 = {
		_blend: color_v0._blend || (color_v0.dark ? "screen" : "multiply"),
		_dark: color_v0.dark,
		accent: base.accent,
		avatar: base.avatar,
		backdrop: color_v0.base.shadow.ambient,
		badge: base.badge,
		bg: color_v0.base.bg,
		border: color_v0.base.border,
		button: {
			default: stateTonesThemeColor_v0_v2(color_v0, color_v0.button.default),
			ghost: stateTonesThemeColor_v0_v2(color_v0, color_v0.button.ghost),
			bleed: stateTonesThemeColor_v0_v2(color_v0, color_v0.button.bleed)
		},
		code: base.code,
		fg: color_v0.base.fg,
		focusRing: color_v0.base.focusRing,
		icon: base.muted.fg,
		input: {
			default: inputStatesThemeColor_v0_v2(color_v0.input.default),
			invalid: inputStatesThemeColor_v0_v2(color_v0.input.invalid)
		},
		kbd: base.kbd,
		link: base.link,
		muted: {
			...base.muted,
			bg: color_v0.selectable?.default.enabled.bg2 || color_v0.base.bg
		},
		selectable: stateTonesThemeColor_v0_v2(color_v0, color_v0.selectable || color_v0.muted),
		shadow: color_v0.base.shadow,
		skeleton: {
			from: color_v0.skeleton?.from || color_v0.base.border,
			to: color_v0.skeleton?.to || color_v0.base.border
		},
		syntax: color_v0.syntax
	};
	return cache$3.set(color_v0, color_v2), color_v2;
}
function stateTonesThemeColor_v0_v2(v0, t) {
	return {
		default: {
			enabled: stateThemeColor_v0_v2(v0, t.default.enabled),
			hovered: stateThemeColor_v0_v2(v0, t.default.hovered),
			pressed: stateThemeColor_v0_v2(v0, t.default.pressed),
			selected: stateThemeColor_v0_v2(v0, t.default.selected),
			disabled: stateThemeColor_v0_v2(v0, t.default.disabled)
		},
		neutral: {
			enabled: stateThemeColor_v0_v2(v0, t.default.enabled),
			hovered: stateThemeColor_v0_v2(v0, t.default.hovered),
			pressed: stateThemeColor_v0_v2(v0, t.default.pressed),
			selected: stateThemeColor_v0_v2(v0, t.default.selected),
			disabled: stateThemeColor_v0_v2(v0, t.default.disabled)
		},
		primary: {
			enabled: stateThemeColor_v0_v2(v0, t.primary.enabled),
			hovered: stateThemeColor_v0_v2(v0, t.primary.hovered),
			pressed: stateThemeColor_v0_v2(v0, t.primary.pressed),
			selected: stateThemeColor_v0_v2(v0, t.primary.selected),
			disabled: stateThemeColor_v0_v2(v0, t.primary.disabled)
		},
		suggest: {
			enabled: stateThemeColor_v0_v2(v0, t.primary.enabled),
			hovered: stateThemeColor_v0_v2(v0, t.primary.hovered),
			pressed: stateThemeColor_v0_v2(v0, t.primary.pressed),
			selected: stateThemeColor_v0_v2(v0, t.primary.selected),
			disabled: stateThemeColor_v0_v2(v0, t.primary.disabled)
		},
		positive: {
			enabled: stateThemeColor_v0_v2(v0, t.positive.enabled),
			hovered: stateThemeColor_v0_v2(v0, t.positive.hovered),
			pressed: stateThemeColor_v0_v2(v0, t.positive.pressed),
			selected: stateThemeColor_v0_v2(v0, t.positive.selected),
			disabled: stateThemeColor_v0_v2(v0, t.positive.disabled)
		},
		caution: {
			enabled: stateThemeColor_v0_v2(v0, t.caution.enabled),
			hovered: stateThemeColor_v0_v2(v0, t.caution.hovered),
			pressed: stateThemeColor_v0_v2(v0, t.caution.pressed),
			selected: stateThemeColor_v0_v2(v0, t.caution.selected),
			disabled: stateThemeColor_v0_v2(v0, t.caution.disabled)
		},
		critical: {
			enabled: stateThemeColor_v0_v2(v0, t.critical.enabled),
			hovered: stateThemeColor_v0_v2(v0, t.critical.hovered),
			pressed: stateThemeColor_v0_v2(v0, t.critical.pressed),
			selected: stateThemeColor_v0_v2(v0, t.critical.selected),
			disabled: stateThemeColor_v0_v2(v0, t.critical.disabled)
		}
	};
}
function stateThemeColor_v0_v2(v0, state) {
	return {
		...state,
		avatar: {
			gray: {
				bg: v0.spot.gray,
				fg: v0.base.bg
			},
			blue: {
				bg: v0.spot.blue,
				fg: v0.base.bg
			},
			purple: {
				bg: v0.spot.purple,
				fg: v0.base.bg
			},
			magenta: {
				bg: v0.spot.magenta,
				fg: v0.base.bg
			},
			red: {
				bg: v0.spot.red,
				fg: v0.base.bg
			},
			orange: {
				bg: v0.spot.orange,
				fg: v0.base.bg
			},
			yellow: {
				bg: v0.spot.yellow,
				fg: v0.base.bg
			},
			green: {
				bg: v0.spot.green,
				fg: v0.base.bg
			},
			cyan: {
				bg: v0.spot.cyan,
				fg: v0.base.bg
			}
		},
		badge: {
			default: {
				bg: v0.muted.default.enabled.bg,
				fg: v0.muted.default.enabled.fg,
				dot: v0.muted.default.enabled.muted.fg,
				icon: v0.muted.default.enabled.muted.fg
			},
			neutral: {
				bg: v0.muted.transparent.enabled.bg,
				fg: v0.muted.transparent.enabled.fg,
				dot: v0.muted.transparent.enabled.muted.fg,
				icon: v0.muted.transparent.enabled.muted.fg
			},
			primary: {
				bg: v0.muted.primary.enabled.bg,
				fg: v0.muted.primary.enabled.fg,
				dot: v0.muted.primary.enabled.muted.fg,
				icon: v0.muted.primary.enabled.muted.fg
			},
			suggest: {
				bg: v0.muted.primary.enabled.bg,
				fg: v0.muted.primary.enabled.fg,
				dot: v0.muted.primary.enabled.muted.fg,
				icon: v0.muted.primary.enabled.muted.fg
			},
			positive: {
				bg: v0.muted.positive.enabled.bg,
				fg: v0.muted.positive.enabled.fg,
				dot: v0.muted.positive.enabled.muted.fg,
				icon: v0.muted.positive.enabled.muted.fg
			},
			caution: {
				bg: v0.muted.caution.enabled.bg,
				fg: v0.muted.caution.enabled.fg,
				dot: v0.muted.caution.enabled.muted.fg,
				icon: v0.muted.caution.enabled.muted.fg
			},
			critical: {
				bg: v0.muted.critical.enabled.bg,
				fg: v0.muted.critical.enabled.fg,
				dot: v0.muted.critical.enabled.muted.fg,
				icon: v0.muted.critical.enabled.muted.fg
			}
		},
		kbd: {
			bg: v0.muted.default.enabled.bg,
			fg: v0.muted.default.enabled.fg,
			border: v0.muted.default.enabled.border
		},
		muted: {
			...v0.muted.default.enabled.muted,
			bg: state.bg2 || state.bg
		},
		skeleton: {
			from: state.skeleton?.from || state.border,
			to: state.skeleton?.to || state.border
		}
	};
}
function inputStatesThemeColor_v0_v2(states) {
	return {
		enabled: inputStateThemeColor_v0_v2(states.enabled),
		disabled: inputStateThemeColor_v0_v2(states.disabled),
		readOnly: inputStateThemeColor_v0_v2(states.readOnly),
		hovered: inputStateThemeColor_v0_v2(states.hovered)
	};
}
function inputStateThemeColor_v0_v2(state) {
	return {
		bg: state.bg,
		border: state.border,
		fg: state.fg,
		muted: { bg: state.bg2 },
		placeholder: state.placeholder
	};
}
var cache$2 = /* @__PURE__ */ new WeakMap();
/** @public */
function getTheme_v2(theme) {
	if (theme.sanity.v2?._resolved) return theme.sanity.v2;
	let cached_v2 = cache$2.get(theme);
	if (cached_v2) return cached_v2;
	let v2 = {
		_version: 2,
		_resolved: !0,
		avatar: {
			...defaultThemeConfig.avatar,
			...theme.sanity.avatar
		},
		button: {
			...defaultThemeConfig.button,
			...theme.sanity.button
		},
		card: defaultThemeConfig.card,
		color: themeColor_v0_v2(theme.sanity.color),
		container: theme.sanity.container,
		font: theme.sanity.fonts,
		input: {
			...defaultThemeConfig.input,
			...theme.sanity.input,
			checkbox: {
				...defaultThemeConfig.input.checkbox,
				...theme.sanity.input.checkbox
			},
			radio: {
				...defaultThemeConfig.input.radio,
				...theme.sanity.input.radio
			},
			switch: {
				...defaultThemeConfig.input.switch,
				...theme.sanity.input.switch
			}
		},
		layer: theme.sanity.layer ?? defaultThemeConfig.layer,
		media: theme.sanity.media,
		radius: theme.sanity.radius,
		shadow: theme.sanity.shadows,
		space: theme.sanity.space,
		style: theme.sanity.styles
	};
	return cache$2.set(theme, v2), v2;
}
/** @internal */
function is_v2(themeProp) {
	return themeProp._version === 2;
}
/**
* Apply `neutral` and `suggest` if they're not already part of the color object,
* as this was introduced in v2.9, but is not compatible with v2.0.
*
* @param color - The color object to upgrade
* @returns The upgraded color object. Returns as-is if already upgraded.
* @internal
*/
function themeColor_v0_v2_9(color) {
	if ("neutral" in color.badge) return color;
	let colors = color;
	return {
		...colors,
		badge: {
			...colors.badge,
			neutral: colors.badge.default,
			suggest: colors.badge.primary
		},
		button: {
			bleed: {
				...colors.button.bleed,
				neutral: colors.button.bleed.default,
				suggest: colors.button.bleed.primary
			},
			default: {
				...colors.button.default,
				neutral: colors.button.default.default,
				suggest: colors.button.default.primary
			},
			ghost: {
				...colors.button.ghost,
				neutral: colors.button.ghost.default,
				suggest: colors.button.ghost.primary
			}
		},
		selectable: {
			...colors.selectable,
			neutral: colors.selectable.default,
			suggest: colors.selectable.primary
		}
	};
}
var cache$1 = /* @__PURE__ */ new WeakMap();
/** @internal */
function v0_v2(v0) {
	if (v0.v2) return v0.v2;
	let cached_v2 = cache$1.get(v0);
	if (cached_v2) return cached_v2;
	let { avatar, button, color, container, focusRing: _unused_focusRing, fonts: font, input, layer, media, radius, shadows: shadow, space, styles: style } = v0, v2 = {
		_version: 2,
		avatar: {
			...defaultThemeConfig.avatar,
			...avatar
		},
		button: {
			...defaultThemeConfig.button,
			...button
		},
		card: defaultThemeConfig.card,
		color: {
			light: {
				transparent: themeColor_v0_v2(color.light.transparent),
				default: themeColor_v0_v2(color.light.default),
				neutral: themeColor_v0_v2(color.light.transparent),
				primary: themeColor_v0_v2(color.light.primary),
				suggest: themeColor_v0_v2(color.light.primary),
				positive: themeColor_v0_v2(color.light.positive),
				caution: themeColor_v0_v2(color.light.caution),
				critical: themeColor_v0_v2(color.light.critical)
			},
			dark: {
				transparent: themeColor_v0_v2(color.dark.transparent),
				default: themeColor_v0_v2(color.dark.default),
				neutral: themeColor_v0_v2(color.dark.transparent),
				primary: themeColor_v0_v2(color.dark.primary),
				suggest: themeColor_v0_v2(color.dark.primary),
				positive: themeColor_v0_v2(color.dark.positive),
				caution: themeColor_v0_v2(color.dark.caution),
				critical: themeColor_v0_v2(color.dark.critical)
			}
		},
		container,
		font,
		input: {
			...defaultThemeConfig.input,
			...input,
			checkbox: {
				...defaultThemeConfig.input.checkbox,
				...input.checkbox
			},
			radio: {
				...defaultThemeConfig.input.radio,
				...input.radio
			},
			switch: {
				...defaultThemeConfig.input.switch,
				...input.switch
			}
		},
		layer: layer ?? defaultThemeConfig.layer,
		media,
		radius,
		shadow,
		space,
		style
	};
	return cache$1.set(v0, v2), v2;
}
var cache = /* @__PURE__ */ new Map();
/** @internal */
function getScopedTheme(themeProp, scheme, tone) {
	let cachedTheme = _getCachedTheme(themeProp, scheme, tone);
	if (cachedTheme) return cachedTheme;
	let v0 = is_v2(themeProp) ? v2_v0(themeProp) : themeProp, v2 = is_v2(themeProp) ? themeProp : v0_v2(themeProp), layer_v0 = v0.layer || defaultThemeConfig.layer, colorScheme_v2 = v2.color[scheme] || v2.color.light, color_v2_9 = themeColor_v0_v2_9(colorScheme_v2[tone] || colorScheme_v2.default), layer_v2 = v2.layer || defaultThemeConfig.layer, { color: _v0Color, ...v0Rest } = v0, sanity = {
		...v0Rest,
		layer: layer_v0,
		v2: {
			...v2,
			_resolved: !0,
			color: color_v2_9,
			layer: layer_v2
		}
	};
	defineLazyProperty(sanity, "color", () => {
		let colorScheme_v0 = v0.color[scheme] || v0.color.light;
		return colorScheme_v0[tone] || colorScheme_v0.default;
	});
	let theme = { sanity };
	return _setCachedTheme(themeProp, scheme, tone, theme), theme;
}
function _getCachedTheme(rootTheme, scheme, tone) {
	let schemeCache = cache.get(scheme);
	if (!schemeCache) return;
	let toneCache = schemeCache.get(tone);
	if (toneCache) return toneCache.get(rootTheme);
}
function _setCachedTheme(rootTheme, scheme, tone, theme) {
	cache.has(scheme) || cache.set(scheme, /* @__PURE__ */ new Map());
	let schemeCache = cache.get(scheme);
	schemeCache.has(tone) || schemeCache.set(tone, /* @__PURE__ */ new WeakMap()), schemeCache.get(tone).set(rootTheme, theme);
}
//#endregion
//#region node_modules/stylis/src/Enum.js
var MS = "-ms-";
var MOZ = "-moz-";
var WEBKIT = "-webkit-";
var COMMENT = "comm";
var RULESET = "rule";
var DECLARATION = "decl";
var IMPORT = "@import";
var NAMESPACE = "@namespace";
var KEYFRAMES = "@keyframes";
var LAYER = "@layer";
//#endregion
//#region node_modules/stylis/src/Utility.js
/**
* @param {number}
* @return {number}
*/
var abs = Math.abs;
/**
* @param {number}
* @return {string}
*/
var from = String.fromCharCode;
/**
* @param {object}
* @return {object}
*/
var assign = Object.assign;
/**
* @param {string} value
* @param {number} length
* @return {number}
*/
function hash(value, length) {
	return charat(value, 0) ^ 45 ? (((length << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
}
/**
* @param {string} value
* @return {string}
*/
function trim(value) {
	return value.trim();
}
/**
* @param {string} value
* @param {RegExp} pattern
* @return {string?}
*/
function match(value, pattern) {
	return (value = pattern.exec(value)) ? value[0] : value;
}
/**
* @param {string} value
* @param {(string|RegExp)} pattern
* @param {string} replacement
* @return {string}
*/
function replace(value, pattern, replacement) {
	return value.replace(pattern, replacement);
}
/**
* @param {string} value
* @param {string} search
* @param {number} position
* @return {number}
*/
function indexof(value, search, position) {
	return value.indexOf(search, position);
}
/**
* @param {string} value
* @param {number} index
* @return {number}
*/
function charat(value, index) {
	return value.charCodeAt(index) | 0;
}
/**
* @param {string} value
* @param {number} begin
* @param {number} end
* @return {string}
*/
function substr(value, begin, end) {
	return value.slice(begin, end);
}
/**
* @param {string} value
* @return {number}
*/
function strlen(value) {
	return value.length;
}
/**
* @param {any[]} value
* @return {number}
*/
function sizeof(value) {
	return value.length;
}
/**
* @param {any} value
* @param {any[]} array
* @return {any}
*/
function append(value, array) {
	return array.push(value), value;
}
/**
* @param {string[]} array
* @param {function} callback
* @return {string}
*/
function combine(array, callback) {
	return array.map(callback).join("");
}
/**
* @param {string[]} array
* @param {RegExp} pattern
* @return {string[]}
*/
function filter$1(array, pattern) {
	return array.filter(function(value) {
		return !match(value, pattern);
	});
}
//#endregion
//#region node_modules/stylis/src/Tokenizer.js
var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = "";
/**
* @param {string} value
* @param {object | null} root
* @param {object | null} parent
* @param {string} type
* @param {string[] | string} props
* @param {object[] | string} children
* @param {object[]} siblings
* @param {number} length
*/
function node(value, root, parent, type, props, children, length, siblings) {
	return {
		value,
		root,
		parent,
		type,
		props,
		children,
		line,
		column,
		length,
		return: "",
		siblings
	};
}
/**
* @param {object} root
* @param {object} props
* @return {object}
*/
function copy(root, props) {
	return assign(node("", null, null, "", null, null, 0, root.siblings), root, { length: -root.length }, props);
}
/**
* @param {object} root
*/
function lift(root) {
	while (root.root) root = copy(root.root, { children: [root] });
	append(root, root.siblings);
}
/**
* @return {number}
*/
function char() {
	return character;
}
/**
* @return {number}
*/
function prev() {
	character = position > 0 ? charat(characters, --position) : 0;
	if (column--, character === 10) column = 1, line--;
	return character;
}
/**
* @return {number}
*/
function next() {
	character = position < length ? charat(characters, position++) : 0;
	if (column++, character === 10) column = 1, line++;
	return character;
}
/**
* @return {number}
*/
function peek() {
	return charat(characters, position);
}
/**
* @return {number}
*/
function caret() {
	return position;
}
/**
* @param {number} begin
* @param {number} end
* @return {string}
*/
function slice(begin, end) {
	return substr(characters, begin, end);
}
/**
* @param {number} type
* @return {number}
*/
function token(type) {
	switch (type) {
		case 0:
		case 9:
		case 10:
		case 13:
		case 32: return 5;
		case 33:
		case 43:
		case 44:
		case 47:
		case 62:
		case 64:
		case 126:
		case 59:
		case 123:
		case 125: return 4;
		case 58: return 3;
		case 34:
		case 39:
		case 40:
		case 91: return 2;
		case 41:
		case 93: return 1;
	}
	return 0;
}
/**
* @param {string} value
* @return {any[]}
*/
function alloc(value) {
	return line = column = 1, length = strlen(characters = value), position = 0, [];
}
/**
* @param {any} value
* @return {any}
*/
function dealloc(value) {
	return characters = "", value;
}
/**
* @param {number} type
* @return {string}
*/
function delimit(type) {
	return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
/**
* @param {number} type
* @return {string}
*/
function whitespace(type) {
	while (character = peek()) if (character < 33) next();
	else break;
	return token(type) > 2 || token(character) > 3 ? "" : " ";
}
/**
* @param {number} index
* @param {number} count
* @return {string}
*/
function escaping(index, count) {
	while (--count && next()) if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97) break;
	return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}
/**
* @param {number} type
* @return {number}
*/
function delimiter(type) {
	while (next()) switch (character) {
		case type: return position;
		case 34:
		case 39:
			if (type !== 34 && type !== 39) delimiter(character);
			break;
		case 40:
			if (type === 41) delimiter(type);
			break;
		case 92:
			next();
			break;
	}
	return position;
}
/**
* @param {number} type
* @param {number} index
* @return {number}
*/
function commenter(type, index) {
	while (next()) if (type + character === 57) break;
	else if (type + character === 84 && peek() === 47) break;
	return "/*" + slice(index, position - 1) + "*" + from(type === 47 ? type : next());
}
/**
* @param {number} index
* @return {string}
*/
function identifier(index) {
	while (!token(peek())) next();
	return slice(index, position);
}
//#endregion
//#region node_modules/stylis/src/Parser.js
/**
* @param {string} value
* @return {object[]}
*/
function compile(value) {
	return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
}
/**
* @param {string} value
* @param {object} root
* @param {object?} parent
* @param {string[]} rule
* @param {string[]} rules
* @param {string[]} rulesets
* @param {number[]} pseudo
* @param {number[]} points
* @param {string[]} declarations
* @return {object}
*/
function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
	var index = 0;
	var offset = 0;
	var length = pseudo;
	var atrule = 0;
	var property = 0;
	var previous = 0;
	var variable = 1;
	var scanning = 1;
	var ampersand = 1;
	var character = 0;
	var type = "";
	var props = rules;
	var children = rulesets;
	var reference = rule;
	var characters = type;
	while (scanning) switch (previous = character, character = next()) {
		case 40: if (previous != 108 && charat(characters, length - 1) == 58) {
			if (indexof(characters += replace(delimit(character), "&", "&\f"), "&\f", abs(index ? points[index - 1] : 0)) != -1) ampersand = -1;
			break;
		}
		case 34:
		case 39:
		case 91:
			characters += delimit(character);
			break;
		case 9:
		case 10:
		case 13:
		case 32:
			characters += whitespace(previous);
			break;
		case 92:
			characters += escaping(caret() - 1, 7);
			continue;
		case 47:
			switch (peek()) {
				case 42:
				case 47:
					append(comment(commenter(next(), caret()), root, parent, declarations), declarations);
					if ((token(previous || 1) == 5 || token(peek() || 1) == 5) && strlen(characters) && substr(characters, -1, void 0) !== " ") characters += " ";
					break;
				default: characters += "/";
			}
			break;
		case 123 * variable: points[index++] = strlen(characters) * ampersand;
		case 125 * variable:
		case 59:
		case 0:
			switch (character) {
				case 0:
				case 125: scanning = 0;
				case 59 + offset:
					if (ampersand == -1) characters = replace(characters, /\f/g, "");
					if (property > 0 && (strlen(characters) - length || variable === 0 && previous === 47)) append(property > 32 ? declaration(characters + ";", rule, parent, length - 1, declarations) : declaration(replace(characters, " ", "") + ";", rule, parent, length - 2, declarations), declarations);
					break;
				case 59: characters += ";";
				default:
					append(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length, rulesets), rulesets);
					if (character === 123) if (offset === 0) parse(characters, root, reference, reference, props, rulesets, length, points, children);
					else {
						switch (atrule) {
							case 99: if (charat(characters, 3) === 110) break;
							case 108: if (charat(characters, 2) === 97) break;
							default: offset = 0;
							case 100:
							case 109:
							case 115:
						}
						if (offset) parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length, children), children), rules, children, length, points, rule ? props : children);
						else parse(characters, reference, reference, reference, [""], children, 0, points, children);
					}
			}
			index = offset = property = 0, variable = ampersand = 1, type = characters = "", length = pseudo;
			break;
		case 58: length = 1 + strlen(characters), property = previous;
		default:
			if (variable < 1) {
				if (character == 123) --variable;
				else if (character == 125 && variable++ == 0 && prev() == 125) continue;
			}
			switch (characters += from(character), character * variable) {
				case 38:
					ampersand = offset > 0 ? 1 : (characters += "\f", -1);
					break;
				case 44:
					points[index++] = (strlen(characters) - 1) * ampersand, ampersand = 1;
					break;
				case 64:
					if (peek() === 45) characters += delimit(next());
					atrule = peek(), offset = length = strlen(type = characters += identifier(caret())), character++;
					break;
				case 45: if (previous === 45 && strlen(characters) == 2) variable = 0;
			}
	}
	return rulesets;
}
/**
* @param {string} value
* @param {object} root
* @param {object?} parent
* @param {number} index
* @param {number} offset
* @param {string[]} rules
* @param {number[]} points
* @param {string} type
* @param {string[]} props
* @param {string[]} children
* @param {number} length
* @param {object[]} siblings
* @return {object}
*/
function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length, siblings) {
	var post = offset - 1;
	var rule = offset === 0 ? rules : [""];
	var size = sizeof(rule);
	for (var i = 0, j = 0, k = 0; i < index; ++i) for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x) if (z = trim(j > 0 ? rule[x] + " " + y : replace(y, /&\f/g, rule[x]))) props[k++] = z;
	return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length, siblings);
}
/**
* @param {number} value
* @param {object} root
* @param {object?} parent
* @param {object[]} siblings
* @return {object}
*/
function comment(value, root, parent, siblings) {
	return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0, siblings);
}
/**
* @param {string} value
* @param {object} root
* @param {object?} parent
* @param {number} length
* @param {object[]} siblings
* @return {object}
*/
function declaration(value, root, parent, length, siblings) {
	return node(value, root, parent, DECLARATION, substr(value, 0, length), substr(value, length + 1, -1), length, siblings);
}
//#endregion
//#region node_modules/stylis/src/Prefixer.js
/**
* @param {string} value
* @param {number} length
* @param {object[]} children
* @return {string}
*/
function prefix(value, length, children) {
	switch (hash(value, length)) {
		case 5103: return WEBKIT + "print-" + value + value;
		case 5737:
		case 4201:
		case 3177:
		case 3433:
		case 1641:
		case 4457:
		case 2921:
		case 5572:
		case 6356:
		case 5844:
		case 3191:
		case 6645:
		case 3005:
		case 4215:
		case 6389:
		case 5109:
		case 5365:
		case 5621:
		case 3829:
		case 6391:
		case 5879:
		case 5623:
		case 6135:
		case 4599: return WEBKIT + value + value;
		case 4855: return WEBKIT + value.replace("add", "source-over").replace("substract", "source-out").replace("intersect", "source-in").replace("exclude", "xor") + value;
		case 4789: return MOZ + value + value;
		case 5349:
		case 4246:
		case 4810:
		case 6968:
		case 2756: return WEBKIT + value + MOZ + value + MS + value + value;
		case 5936: switch (charat(value, length + 11)) {
			case 114: return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
			case 108: return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
			case 45: return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
		}
		case 6828:
		case 4268:
		case 2903: return WEBKIT + value + MS + value + value;
		case 6165: return WEBKIT + value + MS + "flex-" + value + value;
		case 5187: return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
		case 5443: return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/g, "") + (!match(value, /flex-|baseline/) ? MS + "grid-row-" + replace(value, /flex-|-self/g, "") : "") + value;
		case 4675: return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/g, "") + value;
		case 5548: return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
		case 5292: return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;
		case 6060: return WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value;
		case 4554: return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
		case 6187: return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
		case 5495:
		case 3959: return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
		case 4968: return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /space-between/, "justify") + WEBKIT + value + value;
		case 4200:
			if (!match(value, /flex-|baseline/)) return MS + "grid-column-align" + substr(value, length) + value;
			break;
		case 2592:
		case 3360: return MS + replace(value, "template-", "") + value;
		case 4384:
		case 3616:
			if (children && children.some(function(element, index) {
				return length = index, match(element.props, /grid-\w+-end/);
			})) return ~indexof(value + (children = children[length].value), "span", 0) ? value : MS + replace(value, "-start", "") + value + MS + "grid-row-span:" + (~indexof(children, "span", 0) ? match(children, /\d+/) : +match(children, /\d+/) - +match(value, /\d+/)) + ";";
			return MS + replace(value, "-start", "") + value;
		case 4896:
		case 4128: return children && children.some(function(element) {
			return match(element.props, /grid-\w+-start/);
		}) ? value : MS + replace(replace(value, "-end", "-span"), "span ", "") + value;
		case 4095:
		case 3583:
		case 4068:
		case 2532: return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
		case 8116:
		case 7059:
		case 5753:
		case 5535:
		case 5445:
		case 5701:
		case 4933:
		case 4677:
		case 5533:
		case 5789:
		case 5021:
		case 4765:
			if (strlen(value) - 1 - length > 6) switch (charat(value, length + 1)) {
				case 109: if (charat(value, length + 4) !== 45) break;
				case 102: return replace(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length + 3) == 108 ? "$3" : "$2-$3")) + value;
				case 115: return ~indexof(value, "stretch", 0) ? prefix(replace(value, "stretch", "fill-available"), length, children) + value : value;
			}
			break;
		case 5152:
		case 5920: return replace(value, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(_, a, b, c, d, e, f) {
			return MS + a + ":" + b + f + (c ? MS + a + "-span:" + (d ? e : +e - +b) + f : "") + value;
		});
		case 4949:
			if (charat(value, length + 6) === 121) return replace(value, ":", ":" + WEBKIT) + value;
			break;
		case 6444:
			switch (charat(value, charat(value, 14) === 45 ? 18 : 11)) {
				case 120: return replace(value, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
				case 100: return replace(value, ":", ":" + MS) + value;
			}
			break;
		case 5719:
		case 2647:
		case 2135:
		case 3927:
		case 2391: return replace(value, "scroll-", "scroll-snap-") + value;
	}
	return value;
}
//#endregion
//#region node_modules/stylis/src/Serializer.js
/**
* @param {object[]} children
* @param {function} callback
* @return {string}
*/
function serialize(children, callback) {
	var output = "";
	for (var i = 0; i < children.length; i++) output += callback(children[i], i, children, callback) || "";
	return output;
}
/**
* @param {object} element
* @param {number} index
* @param {object[]} children
* @param {function} callback
* @return {string}
*/
function stringify(element, index, children, callback) {
	switch (element.type) {
		case LAYER: if (element.children.length) break;
		case IMPORT:
		case NAMESPACE:
		case DECLARATION: return element.return = element.return || element.value;
		case COMMENT: return "";
		case KEYFRAMES: return element.return = element.value + "{" + serialize(element.children, callback) + "}";
		case RULESET: if (!strlen(element.value = element.props.join(","))) return "";
	}
	return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
}
//#endregion
//#region node_modules/stylis/src/Middleware.js
/**
* @param {function[]} collection
* @return {function}
*/
function middleware(collection) {
	var length = sizeof(collection);
	return function(element, index, children, callback) {
		var output = "";
		for (var i = 0; i < length; i++) output += collection[i](element, index, children, callback) || "";
		return output;
	};
}
/**
* @param {function} callback
* @return {function}
*/
function rulesheet(callback) {
	return function(element) {
		if (!element.root) {
			if (element = element.return) callback(element);
		}
	};
}
/**
* @param {object} element
* @param {number} index
* @param {object[]} children
* @param {function} callback
*/
function prefixer(element, index, children, callback) {
	if (element.length > -1) {
		if (!element.return) switch (element.type) {
			case DECLARATION:
				element.return = prefix(element.value, element.length, children);
				return;
			case KEYFRAMES: return serialize([copy(element, { value: replace(element.value, "@", "@" + WEBKIT) })], callback);
			case RULESET: if (element.length) return combine(children = element.props, function(value) {
				switch (match(value, callback = /(::plac\w+|:read-\w+)/)) {
					case ":read-only":
					case ":read-write":
						lift(copy(element, { props: [replace(value, /:(read-\w+)/, ":" + MOZ + "$1")] }));
						lift(copy(element, { props: [value] }));
						assign(element, { props: filter$1(children, callback) });
						break;
					case "::placeholder":
						lift(copy(element, { props: [replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")] }));
						lift(copy(element, { props: [replace(value, /:(plac\w+)/, ":" + MOZ + "$1")] }));
						lift(copy(element, { props: [replace(value, /:(plac\w+)/, MS + "input-$1")] }));
						lift(copy(element, { props: [value] }));
						assign(element, { props: filter$1(children, callback) });
				}
				return "";
			});
		}
	}
}
//#endregion
//#region node_modules/styled-components/dist/styled-components.esm.js
var import_dist = require_dist();
function i(e, ...t) {
	return /* @__PURE__ */ new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length > 0 ? ` Args: ${t.join(", ")}` : ""}`);
}
var l;
var a;
var c$2 = "undefined" != typeof process && void 0 !== process.env && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled";
var u = "active";
var d = "data-styled-version";
var h = "6.6.0";
var p = "/*!sc*/\n";
var f = "undefined" != typeof window && "undefined" != typeof document;
var m = void 0 === import_react.createContext;
if (!m && !import_react.createContext) throw i(19);
function g(e) {
	if ("undefined" != typeof process && void 0 !== process.env) {
		const t = process.env[e];
		if (void 0 !== t && "" !== t) return "false" !== t;
	}
}
var y = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : null !== (a = null !== (l = g("REACT_APP_SC_DISABLE_SPEEDY")) && void 0 !== l ? l : g("SC_DISABLE_SPEEDY")) && void 0 !== a ? a : "undefined" != typeof process && void 0 !== process.env && false);
var v = "sc-keyframes-";
var w = {};
var S = /* @__PURE__ */ new Map();
var N = /* @__PURE__ */ new Map();
var C = 1;
var O = (e) => {
	if (S.has(e)) return S.get(e);
	for (; N.has(C);) C++;
	const t = C++;
	return S.set(e, t), N.set(t, e), t;
};
var E = (e) => N.get(e);
var P = (e, t) => {
	C = t + 1, S.set(e, t), N.set(t, e);
};
var _ = Object.freeze([]);
var $ = Object.freeze({});
function R(e, t, n = $) {
	return e.theme !== n.theme && e.theme || t || n.theme;
}
var k = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g;
var j = /(^-|-$)/g;
function T(e) {
	return e.replace(k, "-").replace(j, "");
}
var D = /(a)(d)/gi;
var M = (e) => String.fromCharCode(e + (e > 25 ? 39 : 97));
function V(e) {
	let t, n = "";
	for (t = Math.abs(e); t > 52; t = t / 52 | 0) n = M(t % 52) + n;
	return (M(t % 52) + n).replace(D, "$1-$2");
}
var F = 5381;
var G = (e, t) => {
	let n = t.length;
	for (; n;) e = 33 * e ^ t.charCodeAt(--n);
	return e;
};
var z = (e) => G(F, e);
function W(e) {
	return V(z(e) >>> 0);
}
function L(e) {
	return e.displayName || e.name || "Component";
}
function q(e) {
	return "string" == typeof e && true;
}
function B(e) {
	return q(e) ? `styled.${e}` : `Styled(${L(e)})`;
}
var H = Symbol.for("react.memo");
var Y = Symbol.for("react.forward_ref");
var U = {
	contextType: !0,
	defaultProps: !0,
	displayName: !0,
	getDerivedStateFromError: !0,
	getDerivedStateFromProps: !0,
	propTypes: !0,
	type: !0
};
var J = {
	name: !0,
	length: !0,
	prototype: !0,
	caller: !0,
	callee: !0,
	arguments: !0,
	arity: !0
};
var X = {
	$$typeof: !0,
	compare: !0,
	defaultProps: !0,
	displayName: !0,
	propTypes: !0,
	type: !0
};
var Z = {
	[Y]: {
		$$typeof: !0,
		render: !0,
		defaultProps: !0,
		displayName: !0,
		propTypes: !0
	},
	[H]: X
};
function K(e) {
	return ("type" in (t = e) && t.type.$$typeof) === H ? X : "$$typeof" in e ? Z[e.$$typeof] : U;
	var t;
}
var Q = Object.defineProperty;
var ee = Object.getOwnPropertyNames;
var te = Object.getOwnPropertySymbols;
var ne = Object.getOwnPropertyDescriptor;
var oe = Object.getPrototypeOf;
var se = Object.prototype;
function re(e, t, n) {
	if ("string" != typeof t) {
		const o = oe(t);
		o && o !== se && re(e, o, n);
		const s = ee(t).concat(te(t)), r = K(e), i = K(t);
		for (let o = 0; o < s.length; ++o) {
			const l = s[o];
			if (!(l in J || n && n[l] || i && l in i || r && l in r)) {
				const n = ne(t, l);
				try {
					Q(e, l, n);
				} catch (e) {}
			}
		}
	}
	return e;
}
function ie(e) {
	return "function" == typeof e;
}
var le = Symbol.for("react.forward_ref");
function ae(e) {
	return null != e && ("object" == typeof e || "function" == typeof e) && e.$$typeof === le && "styledComponentId" in e;
}
function ce(e, t) {
	return e && t ? e + " " + t : e || t || "";
}
function ue(e, t) {
	return e.join(t || "");
}
function de(e) {
	let t = "";
	for (let n = 0; n < e.length; n++) t += e[n] + p;
	return t;
}
function he(e) {
	return e ? e.replaceAll(p, "") : e;
}
function pe(e) {
	return null !== e && "object" == typeof e && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function fe(e, t, n = !1) {
	if (!n && !pe(e) && !Array.isArray(e)) return t;
	if (Array.isArray(t)) for (let n = 0; n < t.length; n++) e[n] = fe(e[n], t[n]);
	else if (pe(t)) for (const n in t) e[n] = fe(e[n], t[n]);
	return e;
}
function me(e) {
	if (!m) return null;
	const n = import_react.cache;
	return n ? n(e) : null;
}
function ge(e, t) {
	Object.defineProperty(e, "toString", { value: t });
}
var ye = class {
	constructor(e) {
		this.groupSizes = /* @__PURE__ */ new Uint32Array(512), this.length = 512, this.tag = e, this._cGroup = 0, this._cIndex = 0;
	}
	indexOfGroup(e) {
		if (e === this._cGroup) return this._cIndex;
		let t = this._cIndex;
		if (e > this._cGroup) for (let n = this._cGroup; n < e; n++) t += this.groupSizes[n];
		else for (let n = this._cGroup - 1; n >= e; n--) t -= this.groupSizes[n];
		return this._cGroup = e, this._cIndex = t, t;
	}
	insertRules(e, t) {
		if (e >= this.groupSizes.length) {
			const t = this.groupSizes, n = t.length;
			let o = n;
			for (; e >= o;) if (o <<= 1, o < 0) throw i(16, `${e}`);
			this.groupSizes = new Uint32Array(o), this.groupSizes.set(t), this.length = o;
			for (let e = n; e < o; e++) this.groupSizes[e] = 0;
		}
		let n = this.indexOfGroup(e + 1), o = 0;
		for (let s = 0, r = t.length; s < r; s++) this.tag.insertRule(n, t[s]) && (this.groupSizes[e]++, n++, o++);
		o > 0 && this._cGroup > e && (this._cIndex += o);
	}
	clearGroup(e) {
		if (e < this.length) {
			const t = this.groupSizes[e], n = this.indexOfGroup(e), o = n + t;
			this.groupSizes[e] = 0;
			for (let e = n; e < o; e++) this.tag.deleteRule(n);
			t > 0 && this._cGroup > e && (this._cIndex -= t);
		}
	}
	getGroup(e) {
		let t = "";
		if (e >= this.length || 0 === this.groupSizes[e]) return t;
		const n = this.groupSizes[e], o = this.indexOfGroup(e), s = o + n;
		for (let e = o; e < s; e++) t += this.tag.getRule(e) + p;
		return t;
	}
};
var ve = `style[${c$2}][${d}="${h}"]`;
var we = new RegExp(`^${c$2}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`);
var Se = (e) => "undefined" != typeof ShadowRoot && e instanceof ShadowRoot || "host" in e && 11 === e.nodeType;
var Ne = (e) => {
	if (!e) return document;
	if (Se(e)) return e;
	if ("getRootNode" in e) {
		const t = e.getRootNode();
		if (Se(t)) return t;
	}
	return document;
};
var Ce = (e, t, n) => {
	const o = n.split(",");
	let s;
	for (let n = 0, r = o.length; n < r; n++) (s = o[n]) && e.registerName(t, s);
};
var Oe = (e, t) => {
	var n;
	const o = (null !== (n = t.textContent) && void 0 !== n ? n : "").split(p), s = [];
	for (let t = 0, n = o.length; t < n; t++) {
		const n = o[t].trim();
		if (!n) continue;
		const r = n.match(we);
		if (r) {
			const t = 0 | parseInt(r[1], 10), n = r[2];
			0 !== t && (P(n, t), Ce(e, n, r[3]), e.getTag().insertRules(t, s)), s.length = 0;
		} else s.push(n);
	}
};
var Ee = (e) => {
	const n = Ne(e.options.target).querySelectorAll(ve);
	for (let t = 0, o = n.length; t < o; t++) {
		const o = n[t];
		o && o.getAttribute(c$2) !== u && (Oe(e, o), o.parentNode && o.parentNode.removeChild(o));
	}
};
var Pe = !1;
function Ae() {
	if (!1 !== Pe) return Pe;
	if ("undefined" != typeof document) {
		const e = document.head.querySelector("meta[property=\"csp-nonce\"]");
		if (e) return Pe = e.nonce || e.getAttribute("content") || void 0;
		const t = document.head.querySelector("meta[name=\"sc-nonce\"]");
		if (t) return Pe = t.getAttribute("content") || void 0;
	}
	return Pe = "undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : void 0;
}
var Ie = (e, t) => {
	if ("undefined" == typeof document) throw i(20);
	const n = document.head, o = e || n, s = document.createElement("style"), r = ((e) => {
		const t = Array.from(e.querySelectorAll(`style[${c$2}]`));
		return t[t.length - 1];
	})(o), l = void 0 !== r ? r.nextSibling : null;
	s.setAttribute(c$2, u), s.setAttribute(d, h);
	const a = t || Ae();
	return a && s.setAttribute("nonce", a), o.insertBefore(s, l), s;
};
var xe = class {
	constructor(e, t) {
		this.element = Ie(e, t), this.element.appendChild(document.createTextNode("")), this.sheet = ((e) => {
			var t;
			if (e.sheet) return e.sheet;
			const n = null !== (t = e.getRootNode().styleSheets) && void 0 !== t ? t : document.styleSheets;
			for (let t = 0, o = n.length; t < o; t++) {
				const o = n[t];
				if (o.ownerNode === e) return o;
			}
			throw i(17);
		})(this.element), this.length = 0;
	}
	insertRule(e, t) {
		try {
			return this.sheet.insertRule(t, e), this.length++, !0;
		} catch (e) {
			return !1;
		}
	}
	deleteRule(e) {
		this.sheet.deleteRule(e), this.length--;
	}
	getRule(e) {
		const t = this.sheet.cssRules[e];
		return t && t.cssText ? t.cssText : "";
	}
};
var _e = class {
	constructor(e, t) {
		this.element = Ie(e, t), this.nodes = this.element.childNodes, this.length = 0;
	}
	insertRule(e, t) {
		if (e <= this.length && e >= 0) {
			const n = document.createTextNode(t);
			return this.element.insertBefore(n, this.nodes[e] || null), this.length++, !0;
		}
		return !1;
	}
	deleteRule(e) {
		this.element.removeChild(this.nodes[e]), this.length--;
	}
	getRule(e) {
		return e < this.length ? this.nodes[e].textContent : "";
	}
};
var $e = class {
	constructor(e) {
		this.rules = [], this.length = 0;
	}
	insertRule(e, t) {
		return e <= this.length && (e === this.length ? this.rules.push(t) : this.rules.splice(e, 0, t), this.length++, !0);
	}
	deleteRule(e) {
		this.rules.splice(e, 1), this.length--;
	}
	getRule(e) {
		return e < this.length ? this.rules[e] : "";
	}
};
var Re = f;
var ke = {
	isServer: !f,
	useCSSOMInjection: !y
};
var je = class je {
	static registerId(e) {
		return O(e);
	}
	constructor(e = $, t = {}, n) {
		this.options = Object.assign(Object.assign({}, ke), e), this.gs = t, this.keyframeIds = /* @__PURE__ */ new Set(), this.names = new Map(n), this.server = !!e.isServer, !this.server && f && Re && (Re = !1, Ee(this)), ge(this, () => ((e) => {
			const t = e.getTag(), { length: n } = t;
			let o = "";
			for (let s = 0; s < n; s++) {
				const n = E(s);
				if (void 0 === n) continue;
				const r = e.names.get(n);
				if (void 0 === r || !r.size) continue;
				const i = t.getGroup(s);
				if (0 === i.length) continue;
				const l = c$2 + ".g" + s + "[id=\"" + n + "\"]";
				let a = "";
				for (const e of r) e.length > 0 && (a += e + ",");
				o += i + l + "{content:\"" + a + "\"}/*!sc*/\n";
			}
			return o;
		})(this));
	}
	rehydrate() {
		!this.server && f && Ee(this);
	}
	reconstructWithOptions(e, t = !0) {
		const n = new je(Object.assign(Object.assign({}, this.options), e), this.gs, t && this.names || void 0);
		return n.keyframeIds = new Set(this.keyframeIds), !this.server && f && e.target !== this.options.target && Ne(this.options.target) !== Ne(e.target) && Ee(n), n;
	}
	allocateGSInstance(e) {
		return this.gs[e] = (this.gs[e] || 0) + 1;
	}
	getTag() {
		return this.tag || (this.tag = (e = (({ isServer: e, useCSSOMInjection: t, target: n, nonce: o }) => e ? new $e(n) : t ? new xe(n, o) : new _e(n, o))(this.options), new ye(e)));
		var e;
	}
	hasNameForId(e, t) {
		var n, o;
		return null !== (o = null === (n = this.names.get(e)) || void 0 === n ? void 0 : n.has(t)) && void 0 !== o && o;
	}
	registerName(e, t) {
		O(e), e.startsWith(v) && this.keyframeIds.add(e);
		const n = this.names.get(e);
		n ? n.add(t) : this.names.set(e, /* @__PURE__ */ new Set([t]));
	}
	insertRules(e, t, n) {
		this.registerName(e, t), this.getTag().insertRules(O(e), n);
	}
	clearNames(e) {
		this.names.has(e) && this.names.get(e).clear();
	}
	clearRules(e) {
		this.getTag().clearGroup(O(e)), this.clearNames(e);
	}
	clearTag() {
		this.tag = void 0;
	}
};
var Te = /* @__PURE__ */ new WeakSet();
var De = {
	animationIterationCount: 1,
	aspectRatio: 1,
	borderImageOutset: 1,
	borderImageSlice: 1,
	borderImageWidth: 1,
	columnCount: 1,
	columns: 1,
	flex: 1,
	flexGrow: 1,
	flexShrink: 1,
	gridRow: 1,
	gridRowEnd: 1,
	gridRowSpan: 1,
	gridRowStart: 1,
	gridColumn: 1,
	gridColumnEnd: 1,
	gridColumnSpan: 1,
	gridColumnStart: 1,
	fontWeight: 1,
	lineHeight: 1,
	opacity: 1,
	order: 1,
	orphans: 1,
	scale: 1,
	tabSize: 1,
	widows: 1,
	zIndex: 1,
	zoom: 1,
	WebkitLineClamp: 1,
	fillOpacity: 1,
	floodOpacity: 1,
	stopOpacity: 1,
	strokeDasharray: 1,
	strokeDashoffset: 1,
	strokeMiterlimit: 1,
	strokeOpacity: 1,
	strokeWidth: 1
};
function Me(e, t) {
	return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || e in De || e.startsWith("--") ? String(t).trim() : t + "px";
}
var Ve = 47;
function Fe(e) {
	if (45 === e.charCodeAt(0) && 45 === e.charCodeAt(1)) return e;
	let t = "";
	for (let n = 0; n < e.length; n++) {
		const o = e.charCodeAt(n);
		t += o >= 65 && o <= 90 ? "-" + String.fromCharCode(o + 32) : e[n];
	}
	return t.startsWith("ms-") ? "-" + t : t;
}
var Ge = Symbol.for("sc-keyframes");
function ze(e) {
	return "object" == typeof e && null !== e && Ge in e;
}
function We(e) {
	return ie(e) && !(e.prototype && e.prototype.isReactComponent);
}
var Le = (e) => null == e || !1 === e || "" === e;
var qe = Symbol.for("react.client.reference");
function Be(e) {
	return e.$$typeof === qe;
}
function Ye(e, t) {
	for (const n in e) {
		const o = e[n];
		e.hasOwnProperty(n) && !Le(o) && (Array.isArray(o) && Te.has(o) || ie(o) ? t.push(Fe(n) + ":", o, ";") : pe(o) ? (t.push(n + " {"), Ye(o, t), t.push("}")) : t.push(Fe(n) + ": " + Me(n, o) + ";"));
	}
}
function Ue(e, t, n, o, s = []) {
	if (Le(e)) return s;
	const r = typeof e;
	if ("string" === r) return s.push(e), s;
	if ("function" === r) {
		if (Be(e)) return s;
		if (We(e) && t) return Ue(e(t), t, n, o, s);
		return s.push(e), s;
	}
	if (Array.isArray(e)) {
		for (let r = 0; r < e.length; r++) Ue(e[r], t, n, o, s);
		return s;
	}
	return ae(e) ? (s.push(`.${e.styledComponentId}`), s) : ze(e) ? (n ? (e.inject(n, o), s.push(e.getName(o))) : s.push(e), s) : Be(e) ? s : pe(e) ? e.toString !== Object.prototype.toString ? (s.push(e.toString()), s) : (Ye(e, s), s) : (s.push(e.toString()), s);
}
var Je = z(h);
var Xe = m ? /* @__PURE__ */ new WeakMap() : null;
function Ze(e, t) {
	var n, o;
	return null !== (o = null === (n = null == Xe ? void 0 : Xe.get(e)) || void 0 === n ? void 0 : n.get(t)) && void 0 !== o ? o : null;
}
var Ke = class {
	constructor(e, t, n) {
		this.rules = e, this.componentId = t, this.baseHash = G(Je, t), this.baseStyle = n, je.registerId(t);
	}
	generateAndInjectStyles(e, t, n) {
		let o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e, t, n) : "";
		{
			let s = "";
			for (let o = 0; o < this.rules.length; o++) {
				const r = this.rules[o];
				if ("string" == typeof r) s += r;
				else if (r) if (We(r)) {
					const o = r(e);
					"string" == typeof o ? s += o : null != o && !1 !== o && (s += ue(Ue(o, e, t, n)));
				} else s += ue(Ue(r, e, t, n));
			}
			if (s) {
				this.dynamicNameCache || (this.dynamicNameCache = /* @__PURE__ */ new Map());
				const e = n.hash ? n.hash + s : s;
				let r = this.dynamicNameCache.get(e);
				if (!r) {
					if (r = V(G(G(this.baseHash, n.hash), s) >>> 0), this.dynamicNameCache.size >= 200) {
						const e = this.dynamicNameCache.keys().next().value;
						void 0 !== e && this.dynamicNameCache.delete(e);
					}
					this.dynamicNameCache.set(e, r);
				}
				if (!t.hasNameForId(this.componentId, r)) if (m && function(e, t) {
					var n, o;
					return null !== (o = null === (n = null == Xe ? void 0 : Xe.get(e)) || void 0 === n ? void 0 : n.has(t)) && void 0 !== o && o;
				}(this, r)) t.registerName(this.componentId, r);
				else {
					const e = n(s, "." + r, void 0, this.componentId);
					m && function(e, t, n) {
						if (!Xe) return;
						let o = Xe.get(e);
						o || (o = /* @__PURE__ */ new Map(), Xe.set(e, o)), o.set(t, de(n));
					}(this, r, e), t.insertRules(this.componentId, r, e);
				}
				o = ce(o, r);
			}
		}
		return o;
	}
};
var Qe = /&/g;
function et(e, t) {
	let n = 0;
	for (; --t >= 0 && 92 === e.charCodeAt(t);) n++;
	return !(1 & ~n);
}
function tt(e) {
	const t = e.length;
	let n = "", o = 0, s = 0, r = 0, i = !1, l = !1;
	for (let a = 0; a < t; a++) {
		const c = e.charCodeAt(a);
		if (0 !== r || i || c !== Ve || 42 !== e.charCodeAt(a + 1)) if (i) 42 === c && e.charCodeAt(a + 1) === Ve && (i = !1, a++);
		else if (34 !== c && 39 !== c || et(e, a)) {
			if (0 === r) if (123 === c) s++;
			else if (125 === c) {
				if (s--, s < 0) {
					l = !0;
					let n = a + 1;
					for (; n < t;) {
						const t = e.charCodeAt(n);
						if (59 === t || 10 === t) break;
						n++;
					}
					n < t && 59 === e.charCodeAt(n) && n++, s = 0, a = n - 1, o = n;
					continue;
				}
				0 === s && (n += e.substring(o, a + 1), o = a + 1);
			} else 59 === c && 0 === s && (n += e.substring(o, a + 1), o = a + 1);
		} else 0 === r ? r = c : r === c && (r = 0);
		else i = !0, a++;
	}
	return l || 0 !== s || 0 !== r ? (o < t && 0 === s && 0 === r && (n += e.substring(o)), n) : e;
}
function nt(e, t) {
	const n = t + " ", o = "," + n;
	for (let s = 0; s < e.length; s++) {
		const r = e[s];
		if ("rule" === r.type) {
			r.value = (n + r.value).replaceAll(",", o);
			const e = r.props, t = [];
			for (let o = 0; o < e.length; o++) t[o] = n + e[o];
			r.props = t;
		}
		Array.isArray(r.children) && "@keyframes" !== r.type && nt(r.children, t);
	}
	return e;
}
function ot({ options: e = $, plugins: t = _ } = $) {
	let n, s, r;
	const l = (e, t, o) => o.startsWith(s) && o.endsWith(s) && o.replaceAll(s, "").length > 0 ? `.${n}` : e, a = t.slice();
	a.push((e) => {
		e.type === "rule" && e.value.includes("&") && (r || (r = new RegExp(`\\${s}\\b`, "g")), e.props[0] = e.props[0].replace(Qe, s).replace(r, l));
	}), e.prefix && a.push(prefixer), a.push(stringify);
	let c = [];
	const u = middleware(a.concat(rulesheet((e) => c.push(e)))), d = (t, i = "", l = "", a = "&") => {
		n = a, s = i, r = void 0;
		const d = function(e) {
			const t = -1 !== e.indexOf("//"), n = -1 !== e.indexOf("}");
			if (!t && !n) return e;
			if (!t) return tt(e);
			const o = e.length;
			let s = "", r = 0, i = 0, l = 0, a = 0, c = 0, u = !1;
			for (; i < o;) {
				const t = e.charCodeAt(i);
				if (34 !== t && 39 !== t || et(e, i)) if (0 === l) if (t === Ve && i + 1 < o && 42 === e.charCodeAt(i + 1)) {
					for (i += 2; i + 1 < o && (42 !== e.charCodeAt(i) || e.charCodeAt(i + 1) !== Ve);) i++;
					i += 2;
				} else if (40 !== t) if (41 !== t) if (a > 0) i++;
				else if (42 === t && i + 1 < o && e.charCodeAt(i + 1) === Ve) s += e.substring(r, i), i += 2, r = i, u = !0;
				else if (t === Ve && i + 1 < o && e.charCodeAt(i + 1) === Ve) {
					for (s += e.substring(r, i); i < o && 10 !== e.charCodeAt(i);) i++;
					r = i, u = !0;
				} else 123 === t ? c++ : 125 === t && c--, i++;
				else a > 0 && a--, i++;
				else a++, i++;
				else i++;
				else 0 === l ? l = t : l === t && (l = 0), i++;
			}
			return u ? (r < o && (s += e.substring(r)), 0 === c ? s : tt(s)) : 0 === c ? e : tt(e);
		}(t);
		let h = compile(l || i ? l + " " + i + " { " + d + " }" : d);
		return e.namespace && (h = nt(h, e.namespace)), c = [], serialize(h, u), c;
	}, h = e;
	let p = F;
	for (let e = 0; e < t.length; e++) t[e].name || i(15), p = G(p, t[e].name);
	return null != h && h.namespace && (p = G(p, h.namespace)), null != h && h.prefix && (p = G(p, "p")), d.hash = p !== F ? p.toString() : "", d;
}
var st;
var rt;
var it;
var lt = new je();
var at = ot();
var ct;
var ut = null;
var dt = at;
var ht = m && null !== (it = null === (rt = (st = import_react.default).cache) || void 0 === rt ? void 0 : rt.call(st, () => {
	lt.names.clear(), lt.keyframeIds.clear(), lt.clearTag(), ut = null;
})) && void 0 !== it ? it : null;
var pt = {
	shouldForwardProp: void 0,
	styleSheet: lt,
	stylis: at,
	stylisPlugins: void 0
};
var ft = m ? {
	Provider: ({ children: e }) => e,
	Consumer: ({ children: e }) => e(pt)
} : import_react.createContext(pt);
ft.Consumer;
function gt() {
	return m ? (ht && ht(), ut || pt) : import_react.useContext(ft);
}
function yt(e) {
	var n, o, s;
	if (m) {
		ht && ht();
		const t = ut || pt, s = void 0 !== e.stylisPlugins || void 0 !== e.namespace || void 0 !== e.enableVendorPrefixes;
		s && (e.stylisPlugins && e.stylisPlugins !== ct ? (ct = e.stylisPlugins, dt = ot({
			options: {
				namespace: e.namespace,
				prefix: e.enableVendorPrefixes
			},
			plugins: e.stylisPlugins
		})) : void 0 === e.namespace && void 0 === e.enableVendorPrefixes || (dt = ot({
			options: {
				namespace: e.namespace,
				prefix: e.enableVendorPrefixes
			},
			plugins: null !== (n = e.stylisPlugins) && void 0 !== n ? n : t.stylisPlugins
		})));
		const r = s ? void 0 === e.stylisPlugins || e.stylisPlugins.length ? dt : at : t.stylis, i = "shouldForwardProp" in e ? e.shouldForwardProp : t.shouldForwardProp, l = null !== (o = e.stylisPlugins) && void 0 !== o ? o : t.stylisPlugins;
		return ut = r !== at || i ? {
			shouldForwardProp: i,
			styleSheet: lt,
			stylis: r,
			stylisPlugins: l
		} : null, e.children;
	}
	const r = gt(), { styleSheet: i } = r, l = import_react.useMemo(() => {
		let t = i;
		return e.sheet ? t = e.sheet : e.target ? t = t.reconstructWithOptions(void 0 !== e.nonce ? {
			target: e.target,
			nonce: e.nonce
		} : { target: e.target }, !1) : void 0 !== e.nonce && (t = t.reconstructWithOptions({ nonce: e.nonce })), e.disableCSSOMInjection && (t = t.reconstructWithOptions({ useCSSOMInjection: !1 })), t;
	}, [
		e.disableCSSOMInjection,
		e.nonce,
		e.sheet,
		e.target,
		i
	]), a = import_react.useMemo(() => {
		var t;
		return void 0 === e.stylisPlugins && void 0 === e.namespace && void 0 === e.enableVendorPrefixes ? r.stylis : ot({
			options: {
				namespace: e.namespace,
				prefix: e.enableVendorPrefixes
			},
			plugins: null !== (t = e.stylisPlugins) && void 0 !== t ? t : r.stylisPlugins
		});
	}, [
		e.enableVendorPrefixes,
		e.namespace,
		e.stylisPlugins,
		r.stylis,
		r.stylisPlugins
	]), c = "shouldForwardProp" in e ? e.shouldForwardProp : r.shouldForwardProp, u = null !== (s = e.stylisPlugins) && void 0 !== s ? s : r.stylisPlugins, d = import_react.useMemo(() => ({
		shouldForwardProp: c,
		styleSheet: l,
		stylis: a,
		stylisPlugins: u
	}), [
		c,
		l,
		a,
		u
	]);
	return import_react.createElement(ft.Provider, { value: d }, e.children);
}
var vt = m ? {
	Provider: ({ children: e }) => e,
	Consumer: ({ children: e }) => e(void 0)
} : import_react.createContext(void 0);
vt.Consumer;
function bt() {
	const e = m ? void 0 : import_react.useContext(vt);
	if (!e) throw i(18);
	return e;
}
function St(e) {
	if (m) return e.children;
	const n = import_react.useContext(vt), o = import_react.useMemo(() => function(e, t) {
		if (!e) throw i(14);
		if (ie(e)) return e(t);
		if (Array.isArray(e) || "object" != typeof e) throw i(8);
		return t ? Object.assign(Object.assign({}, t), e) : e;
	}(e.theme, n), [e.theme, n]);
	return e.children ? import_react.createElement(vt.Provider, { value: o }, e.children) : null;
}
var Nt = {};
function Ct(e, t) {
	const n = "string" != typeof e ? "sc" : T(e);
	Nt[n] = (Nt[n] || 0) + 1;
	const o = n + "-" + W(h + n + Nt[n]);
	return t ? t + "-" + o : o;
}
var Pt = m ? me(() => /* @__PURE__ */ new Map()) : null;
var At = /* @__PURE__ */ new Map();
function It(e) {
	let t = At.get(e);
	return t || (t = new RegExp("\\." + e + "(?![a-zA-Z0-9_-])", "g"), At.set(e, t)), t;
}
function xt(e, t) {
	for (let n = 0; n < t.length; n++) {
		const o = It(t[n]);
		o.lastIndex = 0, e = e.replace(o, ":where(." + t[n] + ")");
	}
	return e;
}
function _t(o, s, r) {
	const i = ae(o), l = o, a = !q(o), { attrs: u = _, componentId: d = Ct(s.displayName, s.parentComponentId), displayName: h = B(o) } = s, p = s.displayName && s.componentId ? T(s.displayName) + "-" + s.componentId : s.componentId || d, f = i && l.attrs ? l.attrs.concat(u).filter(Boolean) : u;
	let { shouldForwardProp: g } = s;
	if (i && l.shouldForwardProp) {
		const e = l.shouldForwardProp;
		if (s.shouldForwardProp) {
			const t = s.shouldForwardProp;
			g = (n, o) => e(n, o) && t(n, o);
		} else g = e;
	}
	const y = new Ke(r, p, i ? l.componentStyle : void 0);
	function v(o, s) {
		return function(o, s, r) {
			const { attrs: i, componentStyle: l, defaultProps: a, foldedComponentIds: u, styledComponentId: d, target: h } = o, p = m ? void 0 : import_react.useContext(vt), f = gt(), g = o.shouldForwardProp || f.shouldForwardProp;
			const y = R(s, p, a) || (m ? void 0 : $), [v, w] = function(e, t, n) {
				const o = Object.assign(Object.assign({}, t), {
					className: void 0,
					theme: n
				});
				let s = null;
				const r = e.length > 1;
				for (let t = 0; t < e.length; t++) {
					const n = e[t], i = ie(n) ? n(r ? Object.assign({}, o) : o) : n;
					for (const e in i) "className" === e ? o.className = ce(o.className, i[e]) : "style" === e ? o.style = Object.assign(Object.assign({}, o.style), i[e]) : void 0 === i[e] ? e in o && (void 0 !== o[e] && (s || (s = [])).push(e), o[e] = void 0) : o[e] = i[e];
				}
				return "className" in t && "string" == typeof t.className && (o.className = ce(o.className, t.className)), [o, s];
			}(i, s, y), b = l.generateAndInjectStyles(v, f.styleSheet, f.stylis);
			const S = v.as || h, N = q(S), C = function(t, n, o, s, r, i) {
				const l = {};
				for (const a in t) "$" === a[0] || "as" === a || "theme" === a && t.theme === o || ("forwardedAs" === a ? void 0 !== t.forwardedAs && (l.as = t.forwardedAs) : void 0 === t[a] ? "className" === a || r || null !== i && -1 !== i.indexOf(a) || s && !s(a, n) || (l[a] = void 0) : s && !s(a, n) || (l[a] = t[a]));
				return l;
			}(v, S, y, g, N, w);
			let E = ce(u, d);
			b && (E += " " + b), v.className && (E += " " + v.className), C[N && S.includes("-") ? "class" : "className"] = E, r && (C.ref = r);
			const P = (0, import_react.createElement)(S, C);
			if (m && b) {
				const e = Pt && Pt(), n = l.componentId + " " + b;
				let s = e && e.get(n);
				if (!s) {
					const o = function(e, t, n) {
						const o = t.split(" ");
						let s = "", r = e;
						for (; r;) {
							const t = n.names.get(r.componentId);
							if (t) {
								const n = [];
								for (let e = 0; e < o.length; e++) t.has(o[e]) && n.push(o[e]);
								if (n.length) {
									let t = "";
									for (let e = 0; e < n.length; e++) t += Ze(r, n[e]) || "";
									t && (r !== e && (t = xt(t, n)), s = t + s);
								}
							}
							r = r.baseStyle;
						}
						let i = "";
						if (s && n.keyframeIds.size > 0) {
							const e = n.getTag();
							for (const t of n.keyframeIds) {
								const o = n.names.get(t);
								if (!o) continue;
								let r = !1;
								for (const e of o) if (-1 !== s.indexOf(e)) {
									r = !0;
									break;
								}
								if (r) {
									const n = e.getGroup(O(t));
									n && (i += n);
								}
							}
						}
						return he(i + s);
					}(l, b, f.styleSheet);
					o && (s = import_react.createElement("style", {
						[c$2]: "",
						key: "sc-" + l.componentId,
						children: o
					}), e && e.set(n, s));
				}
				if (s) return import_react.createElement(import_react.Fragment, null, s, P);
			}
			return P;
		}(w, o, s);
	}
	v.displayName = h;
	let w = import_react.forwardRef(v);
	return w.attrs = f, w.componentStyle = y, w.displayName = h, w.shouldForwardProp = g, w.foldedComponentIds = i ? ce(l.foldedComponentIds, l.styledComponentId) : "", w.styledComponentId = p, w.target = i ? l.target : o, Object.defineProperty(w, "defaultProps", {
		get() {
			return this._foldedDefaultProps;
		},
		set(e) {
			this._foldedDefaultProps = i ? function(e, ...t) {
				for (const n of t) fe(e, n, !0);
				return e;
			}({}, l.defaultProps, e) : e;
		}
	}), ge(w, () => `.${w.styledComponentId}`), a && re(w, o, {
		attrs: !0,
		componentStyle: !0,
		displayName: !0,
		foldedComponentIds: !0,
		shouldForwardProp: !0,
		styledComponentId: !0,
		target: !0
	}), w;
}
var $t = /* @__PURE__ */ new Set([
	"a",
	"abbr",
	"address",
	"area",
	"article",
	"aside",
	"audio",
	"b",
	"bdi",
	"bdo",
	"blockquote",
	"body",
	"button",
	"br",
	"canvas",
	"caption",
	"cite",
	"code",
	"col",
	"colgroup",
	"data",
	"datalist",
	"dd",
	"del",
	"details",
	"dfn",
	"dialog",
	"div",
	"dl",
	"dt",
	"em",
	"embed",
	"fieldset",
	"figcaption",
	"figure",
	"footer",
	"form",
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6",
	"header",
	"hgroup",
	"hr",
	"html",
	"i",
	"iframe",
	"img",
	"input",
	"ins",
	"kbd",
	"label",
	"legend",
	"li",
	"main",
	"map",
	"mark",
	"menu",
	"meter",
	"nav",
	"object",
	"ol",
	"optgroup",
	"option",
	"output",
	"p",
	"picture",
	"pre",
	"progress",
	"q",
	"rp",
	"rt",
	"ruby",
	"s",
	"samp",
	"search",
	"section",
	"select",
	"slot",
	"small",
	"span",
	"strong",
	"sub",
	"summary",
	"sup",
	"table",
	"tbody",
	"td",
	"template",
	"textarea",
	"tfoot",
	"th",
	"thead",
	"time",
	"tr",
	"u",
	"ul",
	"var",
	"video",
	"wbr",
	"circle",
	"clipPath",
	"defs",
	"ellipse",
	"feBlend",
	"feColorMatrix",
	"feComponentTransfer",
	"feComposite",
	"feConvolveMatrix",
	"feDiffuseLighting",
	"feDisplacementMap",
	"feDistantLight",
	"feDropShadow",
	"feFlood",
	"feFuncA",
	"feFuncB",
	"feFuncG",
	"feFuncR",
	"feGaussianBlur",
	"feImage",
	"feMerge",
	"feMergeNode",
	"feMorphology",
	"feOffset",
	"fePointLight",
	"feSpecularLighting",
	"feSpotLight",
	"feTile",
	"feTurbulence",
	"filter",
	"foreignObject",
	"g",
	"image",
	"line",
	"linearGradient",
	"marker",
	"mask",
	"path",
	"pattern",
	"polygon",
	"polyline",
	"radialGradient",
	"rect",
	"stop",
	"svg",
	"switch",
	"symbol",
	"text",
	"textPath",
	"tspan",
	"use"
]);
function Rt(e, t) {
	const n = [e[0]];
	for (let o = 0, s = t.length; o < s; o += 1) n.push(t[o], e[o + 1]);
	return n;
}
var kt = (e) => (Te.add(e), e);
function jt(e, ...t) {
	if (ie(e) || pe(e)) return kt(Ue(Rt(_, [e, ...t])));
	const n = e;
	return 0 === t.length && 1 === n.length && "string" == typeof n[0] ? Ue(n) : kt(Ue(Rt(n, t)));
}
function Tt(e, t, n = $) {
	if (!t) throw i(1, t);
	const o = (o, ...s) => e(t, n, jt(o, ...s));
	return o.attrs = (o) => Tt(e, t, Object.assign(Object.assign({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) })), o.withConfig = (o) => Tt(e, t, Object.assign(Object.assign({}, n), o)), o;
}
var Dt = (e) => Tt(_t, e);
var Mt = Dt;
$t.forEach((e) => {
	Mt[e] = Dt(e);
});
var Vt = class {
	constructor(e, t) {
		this.instanceRules = /* @__PURE__ */ new Map(), this.rules = e, this.componentId = t, this.isStatic = function(e) {
			for (let t = 0; t < e.length; t += 1) {
				const n = e[t];
				if (ie(n) && !ae(n)) return !1;
			}
			return !0;
		}(e), je.registerId(this.componentId);
	}
	removeStyles(e, t) {
		this.instanceRules.delete(e), this.rebuildGroup(t);
	}
	renderStyles(e, t, n, o) {
		const s = this.componentId;
		if (this.isStatic) {
			if (n.hasNameForId(s, s + e)) this.instanceRules.has(e) || this.computeRules(e, t, n, o);
			else {
				const r = this.computeRules(e, t, n, o);
				n.insertRules(s, r.name, r.rules);
			}
			return;
		}
		const r = this.instanceRules.get(e);
		if (this.computeRules(e, t, n, o), !n.server && r) {
			const t = r.rules, n = this.instanceRules.get(e).rules;
			if (t.length === n.length) {
				let e = !0;
				for (let o = 0; o < t.length; o++) if (t[o] !== n[o]) {
					e = !1;
					break;
				}
				if (e) return;
			}
		}
		this.rebuildGroup(n);
	}
	computeRules(e, t, n, o) {
		const s = ue(Ue(this.rules, t, n, o)), r = {
			name: this.componentId + e,
			rules: o(s, "")
		};
		return this.instanceRules.set(e, r), r;
	}
	rebuildGroup(e) {
		const t = this.componentId;
		e.clearRules(t);
		for (const n of this.instanceRules.values()) e.insertRules(t, n.name, n.rules);
	}
};
var Gt = m ? me(() => /* @__PURE__ */ new Map()) : null;
function zt(e, ...n) {
	const o = jt(e, ...n), s = `sc-global-${W(JSON.stringify(o))}`, r = new Vt(o, s);
	const i = (e) => {
		const n = gt(), l = m ? void 0 : import_react.useContext(vt);
		let a;
		if (a = n.styleSheet.allocateGSInstance(s), (m || n.styleSheet.server) && function(e, t, n, o, s) {
			if (r.isStatic) r.renderStyles(e, w, n, s);
			else {
				const l = Object.assign(Object.assign({}, t), { theme: R(t, o, i.defaultProps) });
				r.renderStyles(e, l, n, s);
			}
		}(a, e, n.styleSheet, l, n.stylis), m) {
			const e = "undefined" == typeof window ? r.instanceRules.get(a) : void 0, n = e ? de(e.rules) : "";
			if (n) {
				if (r.instanceRules.delete(a), false);
				const e = Gt && Gt(), o = s + "\n" + n;
				let i = e && e.get(o);
				return i || (i = import_react.createElement("style", {
					key: s,
					"data-styled-global": s,
					children: he(n)
				}), e && e.set(o, i)), [i];
			}
		}
		return r.instanceRules.delete(a), null;
	};
	return import_react.memo(i);
}
var Bt;
var Ht = m ? /* @__PURE__ */ new WeakMap() : null;
var Yt = class {
	constructor(e, t) {
		this[Bt] = !0, this.inject = (e, t = at) => {
			var n;
			const o = this.getName(t);
			if (!e.hasNameForId(this.id, o)) {
				const s = t.hash || "", r = m ? null === (n = null == Ht ? void 0 : Ht.get(this)) || void 0 === n ? void 0 : n.get(s) : void 0;
				if (r) e.insertRules(this.id, o, r);
				else {
					const n = t(this.rules, o, "@keyframes");
					if (m && Ht) {
						let e = Ht.get(this);
						e || (e = /* @__PURE__ */ new Map(), Ht.set(this, e)), e.set(s, n);
					}
					e.insertRules(this.id, o, n);
				}
			}
		}, this.name = e, this.id = v + e, this.rules = t, O(this.id), ge(this, () => {
			throw i(12, String(this.name));
		});
	}
	getName(e = at) {
		return e.hash ? this.name + V(+e.hash >>> 0) : this.name;
	}
};
function Ut(e, ...t) {
	const n = ue(jt(e, ...t));
	return new Yt(W(n), n);
}
Bt = Ge;
var Xt = /^\s*<\/[a-z]/i;
var Zt = class {
	constructor({ nonce: e } = {}) {
		this._emitSheetCSS = () => {
			const e = this.instance.toString();
			if (!e) return "";
			const t = this.instance.options.nonce || Ae();
			return `<style ${ue([
				t && `nonce="${t}"`,
				`${c$2}="true"`,
				`${d}="${h}"`
			].filter(Boolean), " ")}>${e}</style>`;
		}, this.getStyleTags = () => {
			if (this.sealed) throw i(2);
			return this._emitSheetCSS();
		}, this.getStyleElement = () => {
			if (this.sealed) throw i(2);
			const e = this.instance.toString();
			if (!e) return [];
			const n = {
				[c$2]: "",
				[d]: h,
				dangerouslySetInnerHTML: { __html: e }
			}, o = this.instance.options.nonce || Ae();
			return o && (n.nonce = o), [import_react.createElement("style", Object.assign({}, n, { key: "sc-0-0" }))];
		}, this.seal = () => {
			this.sealed = !0;
		}, this.instance = new je({
			isServer: !0,
			nonce: e
		}), this.sealed = !1;
	}
	collectStyles(e) {
		if (this.sealed) throw i(2);
		return import_react.createElement(yt, { sheet: this.instance }, e);
	}
	interleaveWithNodeStream(e) {
		if (this.sealed) throw i(2);
		this.seal();
		const { Transform: t } = __require("stream"), { instance: n, _emitSheetCSS: o } = this, s = new t({ transform: function(e, t, s) {
			const r = e.toString(), i = o();
			if (n.clearTag(), Xt.test(r)) {
				const e = r.indexOf(">") + 1, t = r.slice(0, e), n = r.slice(e);
				this.push(t + i + n);
			} else this.push(i + r);
			s();
		} });
		if ("on" in e && "function" == typeof e.on && "pipe" in e) {
			const t = e;
			return t.on("error", (e) => {
				s.emit("error", e);
			}), t.pipe(s);
		}
		if ("pipe" in e && "function" == typeof e.pipe) return e.pipe(s);
		throw new Error("Unsupported stream type");
	}
};
`${c$2}`;
`${c$2}`;
`${c$2}`;
//#endregion
//#region node_modules/@sanity/ui/node_modules/react-is/cjs/react-is.production.js
/**
* @license React
* react-is.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_is_production$1 = /* @__PURE__ */ __commonJSMin(((exports) => {
	var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
	var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
	var REACT_CONSUMER_TYPE = Symbol.for("react.consumer");
	var REACT_CONTEXT_TYPE = Symbol.for("react.context");
	var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
	var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
	var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
	var REACT_MEMO_TYPE = Symbol.for("react.memo");
	var REACT_LAZY_TYPE = Symbol.for("react.lazy");
	var REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition");
	var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
	exports.isValidElementType = function(type) {
		return "string" === typeof type || "function" === typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_VIEW_TRANSITION_TYPE || "object" === typeof type && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE || void 0 !== type.getModuleId) ? !0 : !1;
	};
}));
//#endregion
//#region node_modules/@sanity/ui/node_modules/react-is/index.js
var require_react_is$1 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_is_production$1();
}));
//#endregion
//#region node_modules/@sanity/ui/node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs
var LayoutGroupContext = (0, import_react.createContext)({});
//#endregion
//#region node_modules/@sanity/ui/node_modules/framer-motion/dist/es/utils/use-constant.mjs
/**
* Creates a constant value over the lifecycle of a component.
*
* Even if `useMemo` is provided an empty array as its final argument, it doesn't offer
* a guarantee that it won't re-run for performance reasons later on. By using `useConstant`
* you can ensure that initialisers don't execute twice or more.
*/
function useConstant(init) {
	const ref = (0, import_react.useRef)(null);
	if (ref.current === null) ref.current = init();
	return ref.current;
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? import_react.useLayoutEffect : import_react.useEffect;
//#endregion
//#region node_modules/@sanity/ui/node_modules/framer-motion/dist/es/context/PresenceContext.mjs
/**
* @public
*/
var PresenceContext = /* @__PURE__ */ (0, import_react.createContext)(null);
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-utils/dist/es/array.mjs
function addUniqueItem(arr, item) {
	if (arr.indexOf(item) === -1) arr.push(item);
}
function removeItem(arr, item) {
	const index = arr.indexOf(item);
	if (index > -1) arr.splice(index, 1);
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-utils/dist/es/clamp.mjs
var clamp$1 = (min, max, v) => {
	if (v > max) return max;
	if (v < min) return min;
	return v;
};
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-utils/dist/es/global-config.mjs
var MotionGlobalConfig = {};
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-utils/dist/es/is-numerical-string.mjs
/**
* Check if value is a numerical string, ie a string that is purely a number eg "100" or "-100.1"
*/
var isNumericalString = (v) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(v);
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-utils/dist/es/is-object.mjs
var isObject = (value) => typeof value === "object" && value !== null;
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-utils/dist/es/is-zero-value-string.mjs
/**
* Check if the value is a zero value string like "0px" or "0%"
*/
var isZeroValueString = (v) => /^0[^.\s]+$/u.test(v);
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-utils/dist/es/memo.mjs
/*#__NO_SIDE_EFFECTS__*/
function memo(callback) {
	let result;
	return () => {
		if (result === void 0) result = callback();
		return result;
	};
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-utils/dist/es/noop.mjs
var noop = /* @__NO_SIDE_EFFECTS__ */ (any) => any;
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-utils/dist/es/pipe.mjs
/**
* Pipe
* Compose other transformers to run linearily
* pipe(min(20), max(40))
* @param  {...functions} transformers
* @return {function}
*/
var pipe = (...transformers) => transformers.reduce((a, b) => (v) => b(a(v)));
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-utils/dist/es/progress.mjs
var progress = /* @__NO_SIDE_EFFECTS__ */ (from, to, value) => {
	const range = to - from;
	return range ? (value - from) / range : 1;
};
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-utils/dist/es/subscription-manager.mjs
var SubscriptionManager = class {
	constructor() {
		this.subscriptions = [];
	}
	add(handler) {
		addUniqueItem(this.subscriptions, handler);
		return () => this.remove(handler);
	}
	remove(handler) {
		removeItem(this.subscriptions, handler);
	}
	notify(a, b, c) {
		const numSubscriptions = this.subscriptions.length;
		if (!numSubscriptions) return;
		if (numSubscriptions === 1)
 /**
		* If there's only a single handler we can just call it without invoking a loop.
		*/
		this.subscriptions[0](a, b, c);
		else for (let i = 0; i < numSubscriptions; i++) {
			/**
			* Check whether the handler exists before firing as it's possible
			* the subscriptions were modified during this loop running.
			*/
			const handler = this.subscriptions[i];
			handler && handler(a, b, c);
		}
	}
	getSize() {
		return this.subscriptions.length;
	}
	clear() {
		this.subscriptions.length = 0;
	}
};
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-utils/dist/es/time-conversion.mjs
/**
* Converts seconds to milliseconds
*
* @param seconds - Time in seconds.
* @return milliseconds - Converted time in milliseconds.
*/
var secondsToMilliseconds = /* @__NO_SIDE_EFFECTS__ */ (seconds) => seconds * 1e3;
var millisecondsToSeconds = /* @__NO_SIDE_EFFECTS__ */ (milliseconds) => milliseconds / 1e3;
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-utils/dist/es/velocity-per-second.mjs
var velocityPerSecond = /* @__NO_SIDE_EFFECTS__ */ (velocity, frameDuration) => frameDuration ? velocity * (1e3 / frameDuration) : 0;
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs
var calcBezier = (t, a1, a2) => (((1 - 3 * a2 + 3 * a1) * t + (3 * a2 - 6 * a1)) * t + 3 * a1) * t;
var subdivisionPrecision = 1e-7;
var subdivisionMaxIterations = 12;
function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
	let currentX;
	let currentT;
	let i = 0;
	do {
		currentT = lowerBound + (upperBound - lowerBound) / 2;
		currentX = calcBezier(currentT, mX1, mX2) - x;
		if (currentX > 0) upperBound = currentT;
		else lowerBound = currentT;
	} while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations);
	return currentT;
}
/*#__NO_SIDE_EFFECTS__*/
function cubicBezier(mX1, mY1, mX2, mY2) {
	if (mX1 === mY1 && mX2 === mY2) return noop;
	const getTForX = (aX) => binarySubdivide(aX, 0, 1, mX1, mX2);
	return (t) => t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs
var mirrorEasing = /* @__NO_SIDE_EFFECTS__ */ (easing) => (p) => p <= .5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs
var reverseEasing = /* @__NO_SIDE_EFFECTS__ */ (easing) => (p) => 1 - easing(1 - p);
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-utils/dist/es/easing/back.mjs
var backOut = /*@__PURE__*/ cubicBezier(.33, 1.53, .69, .99);
var backIn = /*@__PURE__*/ reverseEasing(backOut);
var backInOut = /*@__PURE__*/ mirrorEasing(backIn);
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-utils/dist/es/easing/anticipate.mjs
var anticipate = (p) => p >= 1 ? 1 : (p *= 2) < 1 ? .5 * backIn(p) : .5 * (2 - Math.pow(2, -10 * (p - 1)));
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-utils/dist/es/easing/circ.mjs
var circIn = (p) => 1 - Math.sin(Math.acos(p));
var circOut = /* @__PURE__ */ reverseEasing(circIn);
var circInOut = /* @__PURE__ */ mirrorEasing(circIn);
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-utils/dist/es/easing/ease.mjs
var easeIn = /*@__PURE__*/ cubicBezier(.42, 0, 1, 1);
var easeOut = /*@__PURE__*/ cubicBezier(0, 0, .58, 1);
var easeInOut = /*@__PURE__*/ cubicBezier(.42, 0, .58, 1);
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-utils/dist/es/easing/utils/is-easing-array.mjs
var isEasingArray = /* @__NO_SIDE_EFFECTS__ */ (ease) => {
	return Array.isArray(ease) && typeof ease[0] !== "number";
};
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-utils/dist/es/easing/utils/is-bezier-definition.mjs
var isBezierDefinition = /* @__NO_SIDE_EFFECTS__ */ (easing) => Array.isArray(easing) && typeof easing[0] === "number";
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-utils/dist/es/easing/utils/map.mjs
var easingLookup = {
	linear: noop,
	easeIn,
	easeInOut,
	easeOut,
	circIn,
	circInOut,
	circOut,
	backIn,
	backInOut,
	backOut,
	anticipate
};
var isValidEasing = (easing) => {
	return typeof easing === "string";
};
var easingDefinitionToFunction = (definition) => {
	if (/* @__PURE__ */ isBezierDefinition(definition)) {
		definition.length;
		const [x1, y1, x2, y2] = definition;
		return /* @__PURE__ */ cubicBezier(x1, y1, x2, y2);
	} else if (isValidEasing(definition)) {
		easingLookup[definition], `${definition}`;
		return easingLookup[definition];
	}
	return definition;
};
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/frameloop/frame-data.mjs
/**
* The frameloop's state, kept apart from the frameloop itself so that
* reading it doesn't bundle the scheduler.
*/
var frameData = {
	delta: 0,
	timestamp: 0,
	isProcessing: false
};
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/frameloop/sync-time.mjs
var now;
function clearTime() {
	now = void 0;
}
/**
* An eventloop-synchronous alternative to performance.now().
*
* Ensures that time measurements remain consistent within a synchronous context.
* Usually calling performance.now() twice within the same synchronous context
* will return different values which isn't useful for animations when we're usually
* trying to sync animations to the same frame.
*/
var time = {
	now: () => {
		if (now === void 0) time.set(frameData.isProcessing || MotionGlobalConfig.useManualTiming ? frameData.timestamp : performance.now());
		return now;
	},
	set: (newTime) => {
		now = newTime;
		queueMicrotask(clearTime);
	}
};
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/value/types/utils/sanitize.mjs
var sanitize = (v) => Math.round(v * 1e5) / 1e5;
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/animation/utils/is-css-variable.mjs
var checkStringStartsWith = (token) => (key) => typeof key === "string" && key.startsWith(token);
var isCSSVariableName = /*@__PURE__*/ checkStringStartsWith("--");
var startsAsVariableToken = /*@__PURE__*/ checkStringStartsWith("var(--");
var isCSSVariableToken = (value) => {
	if (!startsAsVariableToken(value)) return false;
	return singleCssVariableRegex.test(value.split("/*")[0].trim());
};
var singleCssVariableRegex = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
/**
* Check if a value contains a CSS variable anywhere (e.g. inside calc()).
* Unlike isCSSVariableToken which checks if the value IS a var() token,
* this checks if the value CONTAINS var() somewhere in the string.
*/
function containsCSSVariable(value) {
	if (typeof value !== "string") return false;
	return value.split("/*")[0].includes("var(--");
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/value/types/numbers/index.mjs
var number = {
	test: (v) => typeof v === "number",
	parse: parseFloat,
	transform: (v) => v
};
var alpha = {
	...number,
	transform: (v) => clamp$1(0, 1, v)
};
var scale = {
	...number,
	default: 1
};
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/value/types/utils/float-regex.mjs
var floatRegex = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/value/types/utils/is-nullish.mjs
function isNullish(v) {
	return v == null;
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/value/types/utils/single-color-regex.mjs
var singleColorRegex = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/value/types/color/utils.mjs
/**
* Returns true if the provided string is a color, ie rgba(0,0,0,0) or #000,
* but false if a number or multiple colors
*/
var isColorString = (type, testProp) => (v) => {
	return Boolean(typeof v === "string" && singleColorRegex.test(v) && v.startsWith(type) || testProp && !isNullish(v) && Object.prototype.hasOwnProperty.call(v, testProp));
};
var splitColor = (aName, bName, cName) => (v) => {
	if (typeof v !== "string") return v;
	const [a, b, c, alpha] = v.match(floatRegex);
	return {
		[aName]: parseFloat(a),
		[bName]: parseFloat(b),
		[cName]: parseFloat(c),
		alpha: alpha !== void 0 ? parseFloat(alpha) : 1
	};
};
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/value/types/color/rgba.mjs
var clampRgbUnit = (v) => clamp$1(0, 255, v);
var rgbUnit = {
	...number,
	transform: (v) => Math.round(clampRgbUnit(v))
};
var rgba$1 = {
	test: /*@__PURE__*/ isColorString("rgb", "red"),
	parse: /*@__PURE__*/ splitColor("red", "green", "blue"),
	transform: ({ red, green, blue, alpha: alpha$1 = 1 }) => "rgba(" + rgbUnit.transform(red) + ", " + rgbUnit.transform(green) + ", " + rgbUnit.transform(blue) + ", " + sanitize(alpha.transform(alpha$1)) + ")"
};
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/value/types/color/hex.mjs
function parseHex(v) {
	let r = "";
	let g = "";
	let b = "";
	let a = "";
	if (v.length > 5) {
		r = v.substring(1, 3);
		g = v.substring(3, 5);
		b = v.substring(5, 7);
		a = v.substring(7, 9);
	} else {
		r = v.substring(1, 2);
		g = v.substring(2, 3);
		b = v.substring(3, 4);
		a = v.substring(4, 5);
		r += r;
		g += g;
		b += b;
		a += a;
	}
	return {
		red: parseInt(r, 16),
		green: parseInt(g, 16),
		blue: parseInt(b, 16),
		alpha: a ? parseInt(a, 16) / 255 : 1
	};
}
var hex = {
	test: /*@__PURE__*/ isColorString("#"),
	parse: parseHex,
	transform: rgba$1.transform
};
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/value/types/numbers/units.mjs
var createUnitType = /* @__NO_SIDE_EFFECTS__ */ (unit) => ({
	test: (v) => typeof v === "string" && v.endsWith(unit) && v.split(" ").length === 1,
	parse: parseFloat,
	transform: (v) => `${v}${unit}`
});
var degrees = /*@__PURE__*/ createUnitType("deg");
var percent = /*@__PURE__*/ createUnitType("%");
var px = /*@__PURE__*/ createUnitType("px");
var vh = /*@__PURE__*/ createUnitType("vh");
var vw = /*@__PURE__*/ createUnitType("vw");
var progressPercentage = /*@__PURE__*/ (() => ({
	...percent,
	parse: (v) => percent.parse(v) / 100,
	transform: (v) => percent.transform(v * 100)
}))();
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/value/types/color/hsla.mjs
var hsla = {
	test: /*@__PURE__*/ isColorString("hsl", "hue"),
	parse: /*@__PURE__*/ splitColor("hue", "saturation", "lightness"),
	transform: ({ hue, saturation, lightness, alpha: alpha$1 = 1 }) => {
		return "hsla(" + Math.round(hue) + ", " + percent.transform(sanitize(saturation)) + ", " + percent.transform(sanitize(lightness)) + ", " + sanitize(alpha.transform(alpha$1)) + ")";
	}
};
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/value/types/color/index.mjs
var color = {
	test: (v) => rgba$1.test(v) || hex.test(v) || hsla.test(v),
	parse: (v) => {
		if (rgba$1.test(v)) return rgba$1.parse(v);
		else if (hsla.test(v)) return hsla.parse(v);
		else return hex.parse(v);
	},
	transform: (v) => {
		return typeof v === "string" ? v : v.hasOwnProperty("red") ? rgba$1.transform(v) : hsla.transform(v);
	},
	getAnimatableNone: (v) => {
		const parsed = color.parse(v);
		parsed.alpha = 0;
		return color.transform(parsed);
	}
};
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/value/types/utils/color-regex.mjs
var colorRegex = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/value/types/complex/index.mjs
/**
* Non-global copies of the token regexes so test() can use .test()
* (no match array, stops at the first token) without lastIndex state.
*/
var hasFloat = /*@__PURE__*/ new RegExp(floatRegex.source);
var hasColor = /*@__PURE__*/ new RegExp(colorRegex.source, "i");
function test(v) {
	return isNaN(v) && typeof v === "string" && (hasFloat.test(v) || hasColor.test(v));
}
var NUMBER_TOKEN = "number";
var COLOR_TOKEN = "color";
var VAR_TOKEN = "var";
var VAR_FUNCTION_TOKEN = "var(";
var SPLIT_TOKEN = "${}";
var complexRegex = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
/**
* Whether analyseComplexValue(value) would find any values, without
* tokenising the string. CSS variables are resolved before this is
* used, so it's enough to look for a number or a color.
*/
function hasComplexValues(value) {
	const asString = value.toString();
	return hasFloat.test(asString) || hasColor.test(asString);
}
function analyseComplexValue(value) {
	const originalValue = value.toString();
	const values = [];
	const indexes = {
		color: [],
		number: [],
		var: []
	};
	const types = [];
	let i = 0;
	return {
		values,
		split: originalValue.replace(complexRegex, (parsedValue) => {
			if (color.test(parsedValue)) {
				indexes.color.push(i);
				types.push(COLOR_TOKEN);
				values.push(color.parse(parsedValue));
			} else if (parsedValue.startsWith(VAR_FUNCTION_TOKEN)) {
				indexes.var.push(i);
				types.push(VAR_TOKEN);
				values.push(parsedValue);
			} else {
				indexes.number.push(i);
				types.push(NUMBER_TOKEN);
				values.push(parseFloat(parsedValue));
			}
			++i;
			return SPLIT_TOKEN;
		}).split(SPLIT_TOKEN),
		indexes,
		types
	};
}
function parseComplexValue(v) {
	return analyseComplexValue(v).values;
}
function buildTransformer({ split, types }) {
	const numSections = split.length;
	return (v) => {
		let output = "";
		for (let i = 0; i < numSections; i++) {
			output += split[i];
			if (v[i] !== void 0) {
				const type = types[i];
				if (type === NUMBER_TOKEN) output += sanitize(v[i]);
				else if (type === COLOR_TOKEN) output += color.transform(v[i]);
				else output += v[i];
			}
		}
		return output;
	};
}
function createTransformer(source) {
	return buildTransformer(analyseComplexValue(source));
}
var convertNumbersToZero = (v) => typeof v === "number" ? 0 : color.test(v) ? color.getAnimatableNone(v) : v;
/**
* Convert a parsed value to its zero equivalent, but preserve numbers
* that act as divisors in CSS calc() expressions.
*
* analyseComplexValue extracts numbers from CSS strings and puts the
* surrounding text into a `split` template array. For example:
*   "calc(var(--gap) / 5)"  →  values: [var(--gap), 5]
*                               split:  ["calc(", " / ", ")"]
*
* When building a zero-equivalent for animation, naively zeroing all
* numbers turns the divisor into 0 → "calc(var(--gap) / 0)" → NaN.
* We detect this by checking whether the text preceding a number
* (split[i]) ends with "/" — the CSS calc division operator.
*/
var convertToZero = (value, splitBefore) => {
	if (typeof value === "number") return splitBefore?.trim().endsWith("/") ? value : 0;
	return convertNumbersToZero(value);
};
function getAnimatableNone$1(v) {
	const info = analyseComplexValue(v);
	return buildTransformer(info)(info.values.map((value, i) => convertToZero(value, info.split[i])));
}
var complex = {
	test,
	parse: parseComplexValue,
	createTransformer,
	getAnimatableNone: getAnimatableNone$1
};
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/value/types/color/hsla-to-rgba.mjs
function hueToRgb(p, q, t) {
	if (t < 0) t += 1;
	if (t > 1) t -= 1;
	if (t < 1 / 6) return p + (q - p) * 6 * t;
	if (t < 1 / 2) return q;
	if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
	return p;
}
function hslaToRgba({ hue, saturation, lightness, alpha }) {
	hue /= 360;
	saturation /= 100;
	lightness /= 100;
	let red = 0;
	let green = 0;
	let blue = 0;
	if (!saturation) red = green = blue = lightness;
	else {
		const q = lightness < .5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
		const p = 2 * lightness - q;
		red = hueToRgb(p, q, hue + 1 / 3);
		green = hueToRgb(p, q, hue);
		blue = hueToRgb(p, q, hue - 1 / 3);
	}
	return {
		red: Math.round(red * 255),
		green: Math.round(green * 255),
		blue: Math.round(blue * 255),
		alpha
	};
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/utils/mix/immediate.mjs
function mixImmediate(a, b) {
	return (p) => p > 0 ? b : a;
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/utils/mix/number.mjs
var mixNumber$1 = (from, to, progress) => {
	return from + (to - from) * progress;
};
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/utils/mix/color.mjs
var mixLinearColor = (from, to, v) => {
	const fromExpo = from * from;
	const expo = v * (to * to - fromExpo) + fromExpo;
	return expo < 0 ? 0 : Math.sqrt(expo);
};
var colorTypes = [
	hex,
	rgba$1,
	hsla
];
var getColorType = (v) => colorTypes.find((type) => type.test(v));
function asRGBA(color) {
	const type = getColorType(color);
	if (!type) {
		`${color}`;
		return false;
	}
	let model = type.parse(color);
	if (type === hsla) model = hslaToRgba(model);
	return model;
}
var mixColor = (from, to) => {
	const fromRGBA = asRGBA(from);
	const toRGBA = asRGBA(to);
	if (!fromRGBA || !toRGBA) return mixImmediate(from, to);
	const blended = { ...fromRGBA };
	return (v) => {
		blended.red = mixLinearColor(fromRGBA.red, toRGBA.red, v);
		blended.green = mixLinearColor(fromRGBA.green, toRGBA.green, v);
		blended.blue = mixLinearColor(fromRGBA.blue, toRGBA.blue, v);
		blended.alpha = mixNumber$1(fromRGBA.alpha, toRGBA.alpha, v);
		return rgba$1.transform(blended);
	};
};
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/utils/mix/visibility.mjs
var invisibleValues = /* @__PURE__ */ new Set(["none", "hidden"]);
/**
* Returns a function that, when provided a progress value between 0 and 1,
* will return the "none" or "hidden" string only when the progress is that of
* the origin or target.
*/
function mixVisibility(origin, target) {
	if (invisibleValues.has(origin)) return (p) => p <= 0 ? origin : target;
	else return (p) => p >= 1 ? target : origin;
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/utils/mix/complex.mjs
function mixNumber(a, b) {
	return (p) => mixNumber$1(a, b, p);
}
function getMixer(a) {
	if (typeof a === "number") return mixNumber;
	else if (typeof a === "string") return isCSSVariableToken(a) ? mixImmediate : color.test(a) ? mixColor : mixComplex;
	else if (Array.isArray(a)) return mixArray;
	else if (typeof a === "object") return color.test(a) ? mixColor : mixObject;
	return mixImmediate;
}
function mixArray(a, b) {
	const output = [...a];
	const numValues = output.length;
	const blendValue = a.map((v, i) => getMixer(v)(v, b[i]));
	return (p) => {
		for (let i = 0; i < numValues; i++) output[i] = blendValue[i](p);
		return output;
	};
}
function mixObject(a, b) {
	const output = {
		...a,
		...b
	};
	const blendValue = {};
	for (const key in output) if (a[key] !== void 0 && b[key] !== void 0) blendValue[key] = getMixer(a[key])(a[key], b[key]);
	return (v) => {
		for (const key in blendValue) output[key] = blendValue[key](v);
		return output;
	};
}
function matchOrder(origin, target) {
	const orderedOrigin = [];
	const pointers = {
		color: 0,
		var: 0,
		number: 0
	};
	for (let i = 0; i < target.values.length; i++) {
		const type = target.types[i];
		const originIndex = origin.indexes[type][pointers[type]];
		const originValue = origin.values[originIndex] ?? 0;
		orderedOrigin[i] = originValue;
		pointers[type]++;
	}
	return orderedOrigin;
}
var mixComplex = (origin, target) => {
	const template = complex.createTransformer(target);
	const originStats = analyseComplexValue(origin);
	const targetStats = analyseComplexValue(target);
	if (originStats.indexes.var.length === targetStats.indexes.var.length && originStats.indexes.color.length === targetStats.indexes.color.length && originStats.indexes.number.length >= targetStats.indexes.number.length) {
		if (invisibleValues.has(origin) && !targetStats.values.length || invisibleValues.has(target) && !originStats.values.length) return mixVisibility(origin, target);
		return pipe(mixArray(matchOrder(originStats, targetStats), targetStats.values), template);
	} else {
		`${origin}${target}`;
		return mixImmediate(origin, target);
	}
};
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/utils/mix/index.mjs
/**
* A single number with an optional unit, e.g. "50%", "-10px", ".5em".
* Exponents don't match, so they fall through to the complex mixer.
*/
var unitValue = /^(-?(?:\d+(?:\.\d*)?|\.\d+))([a-z%]*)$/iu;
/**
* Most CSS values Motion mixes are a single number with a unit. Mixing
* these directly produces the same output as the complex mixer
* ("25%", "0.33333px") without tokenising both strings.
*/
function mixUnit(from, to) {
	const a = unitValue.exec(from);
	if (!a) return;
	const b = unitValue.exec(to);
	if (!b || a[2] !== b[2]) return;
	const unit = a[2];
	const origin = parseFloat(a[1]);
	const target = parseFloat(b[1]);
	return (p) => sanitize(mixNumber$1(origin, target, p)) + unit;
}
function mix(from, to, p) {
	if (typeof from === "number" && typeof to === "number" && typeof p === "number") return mixNumber$1(from, to, p);
	if (typeof from === "string" && typeof to === "string") {
		const mixer = mixUnit(from, to);
		if (mixer) return mixer;
	}
	return getMixer(from)(from, to);
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/frameloop/order.mjs
var stepsOrder = [
	"setup",
	"read",
	"resolveKeyframes",
	"preUpdate",
	"update",
	"preRender",
	"render",
	"postRender"
];
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/frameloop/render-step.mjs
function createRenderStep(runNextFrame) {
	/**
	* We create and reuse two queues, one to queue jobs for the current frame
	* and one for the next. We reuse to avoid triggering GC after x frames.
	*/
	let thisFrame = /* @__PURE__ */ new Set();
	let nextFrame = /* @__PURE__ */ new Set();
	/**
	* Track whether we're currently processing jobs in this step. This way
	* we can decide whether to schedule new jobs for this frame or next.
	*/
	let isProcessing = false;
	let flushNextFrame = false;
	/**
	* A set of processes which were marked keepAlive when scheduled.
	* A keepAlive process is always also held by a frame queue until
	* it's cancelled, so a Set has the same lifetime semantics as a
	* WeakSet here while being considerably faster to query every frame.
	*/
	const toKeepAlive = /* @__PURE__ */ new Set();
	let latestFrameData = {
		delta: 0,
		timestamp: 0,
		isProcessing: false
	};
	function triggerCallback(callback) {
		if (toKeepAlive.has(callback)) {
			nextFrame.add(callback);
			runNextFrame();
		}
		callback(latestFrameData);
	}
	const step = {
		/**
		* Schedule a process to run on the next frame.
		*/
		schedule: (callback, keepAlive = false, immediate = false) => {
			const queue = immediate && isProcessing ? thisFrame : nextFrame;
			if (keepAlive) toKeepAlive.add(callback);
			queue.add(callback);
			return callback;
		},
		/**
		* Cancel the provided callback from running on the next frame.
		*/
		cancel: (callback) => {
			nextFrame.delete(callback);
			toKeepAlive.delete(callback);
		},
		/**
		* Execute all schedule callbacks.
		*/
		process: (frameData) => {
			latestFrameData = frameData;
			/**
			* If we're already processing we've probably been triggered by a flushSync
			* inside an existing process. Instead of executing, mark flushNextFrame
			* as true and ensure we flush the following frame at the end of this one.
			*/
			if (isProcessing) {
				flushNextFrame = true;
				return;
			}
			isProcessing = true;
			const prevFrame = thisFrame;
			thisFrame = nextFrame;
			nextFrame = prevFrame;
			thisFrame.forEach(triggerCallback);
			thisFrame.clear();
			isProcessing = false;
			if (flushNextFrame) {
				flushNextFrame = false;
				step.process(frameData);
			}
		}
	};
	return step;
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/frameloop/batcher.mjs
var maxElapsed = 40;
function createRenderBatcher(scheduleNextBatch, allowKeepAlive, state = {
	delta: 0,
	timestamp: 0,
	isProcessing: false
}) {
	let runNextFrame = false;
	let useDefaultElapsed = true;
	const flagRunNextFrame = () => runNextFrame = true;
	const steps = stepsOrder.reduce((acc, key) => {
		acc[key] = createRenderStep(flagRunNextFrame);
		return acc;
	}, {});
	const { setup, read, resolveKeyframes, preUpdate, update, preRender, render, postRender } = steps;
	const processBatch = () => {
		const useManualTiming = MotionGlobalConfig.useManualTiming;
		const timestamp = useManualTiming ? state.timestamp : performance.now();
		runNextFrame = false;
		if (!useManualTiming) state.delta = useDefaultElapsed ? 1e3 / 60 : Math.max(Math.min(timestamp - state.timestamp, maxElapsed), 1);
		state.timestamp = timestamp;
		state.isProcessing = true;
		setup.process(state);
		read.process(state);
		resolveKeyframes.process(state);
		preUpdate.process(state);
		update.process(state);
		preRender.process(state);
		render.process(state);
		postRender.process(state);
		state.isProcessing = false;
		if (runNextFrame && allowKeepAlive) {
			useDefaultElapsed = false;
			scheduleNextBatch(processBatch);
		}
	};
	const wake = () => {
		runNextFrame = true;
		useDefaultElapsed = true;
		if (!state.isProcessing) scheduleNextBatch(processBatch);
	};
	const schedule = stepsOrder.reduce((acc, key) => {
		const step = steps[key];
		acc[key] = (process, keepAlive = false, immediate = false) => {
			if (!runNextFrame) wake();
			return step.schedule(process, keepAlive, immediate);
		};
		return acc;
	}, {});
	const cancel = (process) => {
		for (let i = 0; i < stepsOrder.length; i++) steps[stepsOrder[i]].cancel(process);
	};
	return {
		schedule,
		cancel,
		state,
		steps
	};
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/frameloop/frame.mjs
var { schedule: frame, cancel: cancelFrame, steps: frameSteps } = /* @__PURE__ */ createRenderBatcher(typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : noop, true, frameData);
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/animation/drivers/frame.mjs
var frameloopDriver = (update) => {
	const passTimestamp = ({ timestamp }) => update(timestamp);
	return {
		start: (keepAlive = true) => frame.update(passTimestamp, keepAlive),
		stop: () => cancelFrame(passTimestamp),
		/**
		* If we're processing this frame we can use the
		* framelocked timestamp to keep things in sync.
		*/
		now: () => frameData.isProcessing ? frameData.timestamp : time.now()
	};
};
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/animation/waapi/utils/linear.mjs
var generateLinearEasing = (easing, duration, resolution = 10) => {
	let points = "";
	const numPoints = Math.max(Math.round(duration / resolution), 2);
	for (let i = 0; i < numPoints; i++) points += Math.round(easing(i / (numPoints - 1)) * 1e4) / 1e4 + ", ";
	return `linear(${points.substring(0, points.length - 2)})`;
};
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/animation/generators/utils/calc-duration.mjs
/**
* Implement a practical max duration for keyframe generation
* to prevent infinite loops
*/
var maxGeneratorDuration = 2e4;
function calcGeneratorDuration(generator, timeStep = 50, maxDuration = maxGeneratorDuration, keyframes) {
	let duration = 0;
	let state = generator.next(duration);
	keyframes?.push(state.value);
	while (!state.done && duration < maxDuration) {
		duration += timeStep;
		state = generator.next(duration);
		keyframes?.push(state.value);
	}
	return duration >= maxDuration ? Infinity : duration;
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs
/**
* Create a progress => progress easing function from a generator.
*/
function createGeneratorEasing(options, scale = 100, createGenerator) {
	const generator = createGenerator({
		...options,
		keyframes: [0, scale]
	});
	const duration = Math.min(calcGeneratorDuration(generator), maxGeneratorDuration);
	return {
		type: "keyframes",
		ease: (progress) => {
			return generator.next(duration * progress).value / scale;
		},
		duration: /* @__PURE__ */ millisecondsToSeconds(duration)
	};
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/animation/generators/spring.mjs
var springDefaults = {
	stiffness: 100,
	damping: 10,
	mass: 1,
	duration: 800,
	bounce: .3,
	visualDuration: .3,
	restSpeed: {
		granular: .01,
		default: 2
	},
	restDelta: {
		granular: .005,
		default: .5
	},
	minDuration: .01,
	maxDuration: 10,
	minDamping: .05
};
/**
* Maps bounce to a damping ratio as SwiftUI does: 0 is critically damped, and
* it approaches undamped towards 1 and infinitely overdamped towards -1. Both
* ends are limited so the spring still moves and settles.
*/
var bounceToDampingRatio = (bounce) => bounce < 0 ? 1 / Math.max(1 + bounce, springDefaults.minDamping) : Math.max(1 - bounce, springDefaults.minDamping);
/**
* Scales an overdamped spring's undamped frequency so that, at its defining
* time, it has as far left to go as the critically damped spring that's
* criticalFreqTime radians in by then. A negative bounce then changes the
* shape of the curve, not when it arrives. 1 at a damping ratio of 1, so
* there's no jump at a bounce of 0.
*
* Solved by Newton on the remaining distance (times fast - slow), which is
* convex from criticalFreqTime onwards. criticalFreqTime is always below the
* answer, so it converges from below without overshooting.
*/
function overdampedFreqScale(dampingRatio, criticalFreqTime) {
	if (!(dampingRatio > 1)) return 1;
	const root = Math.sqrt(dampingRatio * dampingRatio - 1);
	const slow = dampingRatio - root;
	const fast = dampingRatio + root;
	const target = 2 * root * Math.exp(-criticalFreqTime) * (1 + criticalFreqTime);
	return approximateRoot((freqTime) => fast * Math.exp(-slow * freqTime) - slow * Math.exp(-fast * freqTime) - target, (freqTime) => Math.exp(-fast * freqTime) - Math.exp(-slow * freqTime), criticalFreqTime) / criticalFreqTime;
}
function calcAngularFreq(undampedFreq, dampingRatio) {
	return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
}
var rootIterations = 12;
function approximateRoot(envelope, derivative, initialGuess) {
	let result = initialGuess;
	for (let i = 1; i < rootIterations; i++) result = result - envelope(result) / derivative(result);
	return result;
}
/**
* This is ported from the Framer implementation of duration-based spring resolution.
*/
var safeMin = .001;
/**
* Assumes zero initial velocity and the default mass: time-defined springs
* ignore inherited velocity and only resolve without valid physics. Returns
* NaN physics when the root search doesn't converge.
*/
function findSpring({ duration = springDefaults.duration, bounce = springDefaults.bounce }) {
	let envelope;
	let derivative;
	springDefaults.maxDuration;
	const dampingRatio = bounceToDampingRatio(bounce);
	duration = clamp$1(springDefaults.minDuration, springDefaults.maxDuration, /* @__PURE__ */ millisecondsToSeconds(duration));
	if (dampingRatio < 1) {
		/**
		* Underdamped spring
		*/
		envelope = (undampedFreq) => {
			const exponentialDecay = undampedFreq * dampingRatio;
			const delta = exponentialDecay * duration;
			const b = calcAngularFreq(undampedFreq, dampingRatio);
			const c = Math.exp(-delta);
			return safeMin - exponentialDecay / b * c;
		};
		derivative = (undampedFreq) => {
			const delta = undampedFreq * dampingRatio * duration;
			const e = dampingRatio * dampingRatio * undampedFreq * undampedFreq * duration;
			const f = Math.exp(-delta);
			const g = calcAngularFreq(undampedFreq * undampedFreq, dampingRatio);
			return (-envelope(undampedFreq) + safeMin > 0 ? -1 : 1) * -e * f / g;
		};
	} else {
		/**
		* Critically-damped spring. Overdamped springs reuse this root,
		* scaled below.
		*/
		envelope = (undampedFreq) => {
			return -.001 + Math.exp(-undampedFreq * duration) * (undampedFreq * duration + 1);
		};
		derivative = (undampedFreq) => {
			return Math.exp(-undampedFreq * duration) * (-undampedFreq * (duration * duration));
		};
	}
	const initialGuess = 5 / duration;
	const criticalFreq = approximateRoot(envelope, derivative, initialGuess);
	const undampedFreq = criticalFreq * overdampedFreqScale(dampingRatio, criticalFreq * duration);
	const stiffness = undampedFreq * undampedFreq;
	return {
		stiffness,
		damping: dampingRatio * 2 * Math.sqrt(stiffness),
		duration: /* @__PURE__ */ secondsToMilliseconds(duration)
	};
}
/**
* Spring physics must be finite. stiffness and mass are also divisors so must
* be positive, whereas a damping of 0 is a valid, perpetually oscillating
* spring. Relational rather than Number.isFinite so numeric strings still
* coerce.
*/
var isValidPhysics = (value, canBeZero) => (canBeZero ? value >= 0 : value > 0) && value < Infinity;
/**
* Returns value if it's usable spring physics, otherwise undefined so callers
* fall back to the default. An explicit `undefined`, e.g. from a forwarded
* optional prop, must fall back too. Invalid physics would otherwise resolve
* to NaN spring values that never report done.
*/
function resolvePhysics(value, canBeZero) {
	if (isValidPhysics(value, canBeZero)) return value;
}
function getSpringOptions(options) {
	/**
	* Resolve physics before choosing between physics- and duration-based
	* resolution, so an invalid stiffness doesn't also silently discard a
	* valid duration/bounce.
	*/
	const validStiffness = resolvePhysics(options.stiffness);
	const validDamping = resolvePhysics(options.damping, true);
	const validMass = resolvePhysics(options.mass);
	const springOptions = {
		...options,
		stiffness: validStiffness ?? springDefaults.stiffness,
		damping: validDamping ?? springDefaults.damping,
		mass: validMass ?? springDefaults.mass,
		isResolvedFromDuration: false,
		isTimeDefined: (validStiffness ?? validDamping ?? validMass) === void 0 && (options.duration !== void 0 || options.bounce !== void 0)
	};
	if (springOptions.isTimeDefined) {
		if (options.visualDuration) {
			const dampingRatio = bounceToDampingRatio(options.bounce || 0);
			const root = 2 * Math.PI / (options.visualDuration * 1.2) * overdampedFreqScale(dampingRatio, 2 * Math.PI / 1.2);
			springOptions.stiffness = root * root;
			springOptions.damping = 2 * dampingRatio * Math.sqrt(springOptions.stiffness);
		} else {
			Object.assign(springOptions, findSpring(springOptions));
			springOptions.isResolvedFromDuration = true;
		}
		/**
		* Time options can degenerate: a NaN bounce gives a NaN damping, an
		* infinite visualDuration a 0 stiffness, and findSpring NaN for both
		* when it doesn't converge. Replace the two together, so the
		* relationship duration resolution establishes between them is never
		* left half-overwritten.
		*/
		if (!isValidPhysics(springOptions.stiffness) || !isValidPhysics(springOptions.damping, true)) {
			springOptions.stiffness = springDefaults.stiffness;
			springOptions.damping = springDefaults.damping;
		}
	}
	return springOptions;
}
function spring(optionsOrVisualDuration = springDefaults.visualDuration, bounce = springDefaults.bounce) {
	const options = typeof optionsOrVisualDuration !== "object" ? {
		visualDuration: optionsOrVisualDuration,
		keyframes: [0, 1],
		bounce
	} : optionsOrVisualDuration;
	const origin = options.keyframes[0];
	const target = options.keyframes[options.keyframes.length - 1];
	/**
	* This is the Iterator-spec return value. We ensure it's mutable rather than using a generator
	* to reduce GC during animation.
	*/
	const state = {
		done: false,
		value: origin
	};
	const { stiffness, damping, mass, duration, isResolvedFromDuration, isTimeDefined } = getSpringOptions({ ...options });
	/**
	* Time-defined springs ignore inherited velocity. Velocity from
	* interrupted animations causes massive oscillation on small-range
	* animations.
	*/
	const inheritVelocity = (velocity) => isTimeDefined ? 0 : -/* @__PURE__ */ millisecondsToSeconds(velocity);
	const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
	const undampedAngularFreq = /* @__PURE__ */ millisecondsToSeconds(Math.sqrt(stiffness / mass));
	const decay = dampingRatio * undampedAngularFreq;
	/**
	* Everything that changes when the spring is retargeted: written by
	* retarget() and update(), read by the resolvers. Grouped on one object,
	* like the coefficients (c) below. Writing doubles to object fields
	* measured marginally faster than to captured let variables in optimised
	* code; neither allocates, so this is a grouping choice, not a GC one.
	*/
	const s = {
		target,
		delta: target - origin,
		velocity: inheritVelocity(options.velocity || 0) || 0,
		restSpeed: 0,
		restDelta: 0
	};
	/**
	* If we're working on a granular scale, use smaller defaults for determining
	* when the spring is finished.
	*
	* These defaults have been selected empirically based on what strikes a good
	* ratio between feeling good and finishing as soon as changes are imperceptible.
	*/
	const setRestThresholds = () => {
		const isGranularScale = Math.abs(s.delta) < 5;
		s.restSpeed = options.restSpeed || (isGranularScale ? springDefaults.restSpeed.granular : springDefaults.restSpeed.default);
		s.restDelta = options.restDelta || (isGranularScale ? springDefaults.restDelta.granular : springDefaults.restDelta.default);
	};
	setRestThresholds();
	let resolveSpring;
	let resolveVelocity;
	/**
	* Derives the coefficients that depend on origin, target and initial
	* velocity. Called once now and again whenever the spring is retargeted.
	*/
	let update;
	if (dampingRatio < 1) {
		const angularFreq = calcAngularFreq(undampedAngularFreq, dampingRatio);
		/**
		* A is the position coefficient, sinC/cosC the coefficients of the
		* analytical derivative (px/ms). The exp/sin/cos terms depend only
		* on t, so they're memoized by t independently of the target: a
		* spring retargeted every frame samples the same t each frame and
		* skips the transcendentals entirely.
		*/
		const c = {
			A: 0,
			sinC: 0,
			cosC: 0,
			t: -1,
			env: 0,
			sin: 0,
			cos: 0
		};
		update = () => {
			c.A = (s.velocity + decay * s.delta) / angularFreq;
			c.sinC = decay * c.A + s.delta * angularFreq;
			c.cosC = decay * s.delta - c.A * angularFreq;
		};
		const sample = (t) => {
			if (t !== c.t) {
				c.t = t;
				c.env = Math.exp(-decay * t);
				c.sin = Math.sin(angularFreq * t);
				c.cos = Math.cos(angularFreq * t);
			}
		};
		resolveSpring = (t) => {
			sample(t);
			return s.target - c.env * (c.A * c.sin + s.delta * c.cos);
		};
		resolveVelocity = (t) => {
			sample(t);
			return c.env * (c.sinC * c.sin + c.cosC * c.cos);
		};
	} else if (dampingRatio === 1) {
		resolveSpring = (t) => s.target - Math.exp(-undampedAngularFreq * t) * (s.delta + (s.velocity + undampedAngularFreq * s.delta) * t);
		const c = { C: 0 };
		update = () => {
			c.C = s.velocity + undampedAngularFreq * s.delta;
		};
		resolveVelocity = (t) => Math.exp(-undampedAngularFreq * t) * (undampedAngularFreq * c.C * t - s.velocity);
	} else {
		/**
		* Overdamped spring: the sum of a slow and a fast decaying
		* exponential, so no term can overflow however heavily it's damped.
		*/
		const dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
		const slow = decay - dampedAngularFreq;
		const fast = decay + dampedAngularFreq;
		/**
		* Physics-defined springs keep a non-physical limit: once
		* dampedAngularFreq * t passes 300, both terms decay at the damping
		* rate. Heavily overdamped drag springs (dragElastic: 0,
		* dragTransition) rely on this to settle almost at once rather than
		* creep at stiffness / damping. Negative bounce needs the exact
		* curve, so time-defined springs are exempt.
		*/
		const limit = isTimeDefined ? Infinity : 300 / dampedAngularFreq;
		const decayAt = (rate, t) => Math.exp(t > limit ? -rate * limit - decay * (t - limit) : -rate * t);
		const c = {
			S: 0,
			F: 0
		};
		update = () => {
			const P = (s.velocity + decay * s.delta) / dampedAngularFreq;
			c.S = (s.delta + P) / 2;
			c.F = (s.delta - P) / 2;
		};
		resolveSpring = (t) => s.target - c.S * decayAt(slow, t) - c.F * decayAt(fast, t);
		resolveVelocity = (t) => slow * c.S * decayAt(slow, t) + fast * c.F * decayAt(fast, t);
	}
	update();
	const calculatedDuration = isResolvedFromDuration ? duration || null : null;
	const generator = {
		calculatedDuration,
		/**
		* Aim the spring at a new target from its current position and
		* velocity, reusing the resolved physics and closures.
		*/
		retarget: (keyframes, newVelocity) => {
			s.target = keyframes[keyframes.length - 1];
			s.delta = s.target - keyframes[0];
			s.velocity = inheritVelocity(newVelocity);
			if (!(options.restSpeed && options.restDelta)) setRestThresholds();
			generator.calculatedDuration = calculatedDuration;
			state.done = false;
			update();
		},
		velocity: (t) => /* @__PURE__ */ secondsToMilliseconds(resolveVelocity(t)),
		next: (t) => {
			const current = resolveSpring(t);
			if (!isResolvedFromDuration) {
				const currentVelocity = /* @__PURE__ */ secondsToMilliseconds(resolveVelocity(t));
				state.done = Math.abs(currentVelocity) <= s.restSpeed && Math.abs(s.target - current) <= s.restDelta;
			} else state.done = t >= duration;
			state.value = state.done ? s.target : current;
			return state;
		},
		toString: () => {
			const easingDuration = Math.min(calcGeneratorDuration(generator), maxGeneratorDuration);
			const easing = generateLinearEasing((progress) => generator.next(easingDuration * progress).value, easingDuration, 30);
			return easingDuration + "ms " + easing;
		},
		toTransition: () => {}
	};
	return generator;
}
spring.applyToOptions = (options) => {
	const generatorOptions = createGeneratorEasing(options, 100, spring);
	options.ease = generatorOptions.ease;
	options.duration = /* @__PURE__ */ secondsToMilliseconds(generatorOptions.duration);
	options.type = "keyframes";
	return options;
};
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/animation/generators/inertia.mjs
function inertia({ keyframes, velocity = 0, power = .8, timeConstant = 325, bounceDamping = 10, bounceStiffness = 500, modifyTarget, min, max, restDelta = .5, restSpeed }) {
	const origin = keyframes[0];
	const state = {
		done: false,
		value: origin
	};
	const isOutOfBounds = (v) => v < min || v > max;
	const nearestBoundary = (v) => {
		if (min === void 0) return max;
		if (max === void 0) return min;
		return Math.abs(min - v) < Math.abs(max - v) ? min : max;
	};
	let amplitude = power * velocity;
	const ideal = origin + amplitude;
	const target = modifyTarget === void 0 ? ideal : modifyTarget(ideal);
	/**
	* If the target has changed we need to re-calculate the amplitude, otherwise
	* the animation will start from the wrong position.
	*/
	if (target !== ideal) amplitude = target - origin;
	const calcDelta = (t) => -amplitude * Math.exp(-t / timeConstant);
	const applyFriction = (t) => {
		const delta = calcDelta(t);
		state.done = Math.abs(delta) <= restDelta;
		state.value = state.done ? target : target + delta;
	};
	/**
	* Ideally this would resolve for t in a stateless way, we could
	* do that by always precalculating the animation but as we know
	* this will be done anyway we can assume that spring will
	* be discovered during that.
	*/
	let timeReachedBoundary;
	let spring$1;
	const checkCatchBoundary = (t) => {
		if (!isOutOfBounds(state.value)) return;
		timeReachedBoundary = t;
		spring$1 = spring({
			keyframes: [state.value, nearestBoundary(state.value)],
			/**
			* The friction curve is target + calcDelta(t), so its exact
			* derivative is -calcDelta(t) / timeConstant in units/ms,
			* converted here to the units/second expected by spring.
			*/
			velocity: -calcDelta(t) / timeConstant * 1e3,
			damping: bounceDamping,
			stiffness: bounceStiffness,
			restDelta,
			restSpeed
		});
	};
	checkCatchBoundary(0);
	return {
		calculatedDuration: null,
		next: (t) => {
			/**
			* We need to resolve the friction to figure out if we need a
			* spring but we don't want to do this twice per frame. So here
			* we flag if we updated for this frame and later if we did
			* we can skip doing it again.
			*/
			let hasUpdatedFrame = false;
			if (!spring$1 && timeReachedBoundary === void 0) {
				hasUpdatedFrame = true;
				applyFriction(t);
				checkCatchBoundary(t);
			}
			/**
			* If we have a spring and the provided t is beyond the moment the friction
			* animation crossed the min/max boundary, use the spring.
			*/
			if (timeReachedBoundary !== void 0 && t >= timeReachedBoundary) return spring$1.next(t - timeReachedBoundary);
			else {
				!hasUpdatedFrame && applyFriction(t);
				return state;
			}
		}
	};
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/utils/interpolate.mjs
function createMixers(output, ease, customMixer) {
	const mixers = [];
	const mixerFactory = customMixer || MotionGlobalConfig.mix || mix;
	const numMixers = output.length - 1;
	for (let i = 0; i < numMixers; i++) {
		let mixer = mixerFactory(output[i], output[i + 1]);
		if (ease) mixer = pipe(Array.isArray(ease) ? ease[i] || noop : ease, mixer);
		mixers.push(mixer);
	}
	return mixers;
}
/**
* Create a function that maps from a numerical input array to a generic output array.
*
* Accepts:
*   - Numbers
*   - Colors (hex, hsl, hsla, rgb, rgba)
*   - Complex (combinations of one or more numbers or strings)
*
* ```jsx
* const mixColor = interpolate([0, 1], ['#fff', '#000'])
*
* mixColor(0.5) // 'rgba(128, 128, 128, 1)'
* ```
*
* TODO Revisit this approach once we've moved to data models for values,
* probably not needed to pregenerate mixer functions.
*
* @public
*/
function interpolate(input, output, { clamp: isClamp = true, ease, mixer } = {}) {
	const inputLength = input.length;
	output.length;
	/**
	* If we're only provided a single input, we can just make a function
	* that returns the output.
	*/
	if (inputLength === 1) return () => output[0];
	if (inputLength === 2 && output[0] === output[1]) return () => output[1];
	const isZeroDeltaRange = input[0] === input[1];
	if (input[0] > input[inputLength - 1]) {
		input = [...input].reverse();
		output = [...output].reverse();
	}
	const mixers = createMixers(output, ease, mixer);
	const numMixers = mixers.length;
	const interpolator = (v) => {
		if (isZeroDeltaRange && v < input[0]) return output[0];
		let i = 0;
		if (numMixers > 1) {
			for (; i < input.length - 2; i++) if (v < input[i + 1]) break;
		}
		const progressInRange = /* @__PURE__ */ progress(input[i], input[i + 1], v);
		return mixers[i](progressInRange);
	};
	return isClamp ? (v) => interpolator(clamp$1(input[0], input[inputLength - 1], v)) : interpolator;
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/animation/keyframes/offsets/fill.mjs
function fillOffset(offset, remaining) {
	const min = offset[offset.length - 1];
	for (let i = 1; i <= remaining; i++) {
		const offsetProgress = /* @__PURE__ */ progress(0, remaining, i);
		offset.push(mixNumber$1(min, 1, offsetProgress));
	}
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/animation/keyframes/offsets/default.mjs
function defaultOffset(arr) {
	const offset = [0];
	fillOffset(offset, arr.length - 1);
	return offset;
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/animation/keyframes/offsets/time.mjs
function convertOffsetToTimes(offset, duration) {
	return offset.map((o) => o * duration);
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/animation/generators/keyframes.mjs
function defaultEasing(values, easing) {
	return values.map(() => easing || easeInOut).splice(0, values.length - 1);
}
function keyframes({ duration = 300, keyframes: keyframeValues, times, ease = "easeInOut" }) {
	/**
	* Easing functions can be externally defined as strings. Here we convert them
	* into actual functions.
	*/
	const easingFunctions = /* @__PURE__ */ isEasingArray(ease) ? ease.map(easingDefinitionToFunction) : easingDefinitionToFunction(ease) || easeInOut;
	/**
	* This is the Iterator-spec return value. We ensure it's mutable rather than using a generator
	* to reduce GC during animation.
	*/
	const state = {
		done: false,
		value: keyframeValues[0]
	};
	/**
	* Fast setup path for two keyframes one easing.
	*/
	if (keyframeValues.length === 2 && !Array.isArray(easingFunctions) && (!times || times.length !== 2 || times[0] === 0 && times[1] === 1)) {
		const [origin, target] = keyframeValues;
		const mixer = origin === target ? void 0 : (MotionGlobalConfig.mix || mix)(origin, target);
		return {
			calculatedDuration: duration,
			next: (t) => {
				state.value = mixer ? mixer(easingFunctions(duration > 0 ? clamp$1(0, 1, t / duration) : 1)) : target;
				state.done = t >= duration;
				return state;
			}
		};
	}
	const mapTimeToKeyframe = interpolate(convertOffsetToTimes(times && times.length === keyframeValues.length ? times : defaultOffset(keyframeValues), duration), keyframeValues, { ease: Array.isArray(easingFunctions) ? easingFunctions : defaultEasing(keyframeValues, easingFunctions) });
	return {
		calculatedDuration: duration,
		next: (t) => {
			state.value = mapTimeToKeyframe(t);
			state.done = t >= duration;
			return state;
		}
	};
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/animation/generators/utils/velocity.mjs
var velocitySampleDuration = 5;
function getGeneratorVelocity(resolveValue, t, current) {
	const prevT = Math.max(t - velocitySampleDuration, 0);
	return /* @__PURE__ */ velocityPerSecond(current - resolveValue(prevT), t - prevT);
}
/**
* A generator's velocity at time t in units/second: analytical where the
* generator provides it (springs), otherwise by finite difference. Before
* the animation has started this is its initial velocity.
*/
function calcGeneratorVelocity(generator, t, initialVelocity = 0) {
	if (t <= 0) return initialVelocity;
	return generator.velocity ? generator.velocity(t) : getGeneratorVelocity((s) => generator.next(s).value, t, generator.next(t).value);
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/animation/keyframes/get-final.mjs
var isNotNull = (value) => value !== null;
function getFinalKeyframe(keyframes, { repeat, repeatType = "loop" }, finalKeyframe, speed = 1) {
	const resolvedKeyframes = keyframes.filter(isNotNull);
	const index = speed < 0 || repeat && repeatType !== "loop" && repeat % 2 === 1 ? 0 : resolvedKeyframes.length - 1;
	return !index || finalKeyframe === void 0 ? resolvedKeyframes[index] : finalKeyframe;
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/animation/utils/replace-transition-type.mjs
var transitionTypeMap = {
	decay: inertia,
	inertia,
	tween: keyframes,
	keyframes,
	spring
};
function replaceTransitionType(transition) {
	if (typeof transition.type === "string") transition.type = transitionTypeMap[transition.type];
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/animation/utils/notify-inspector.mjs
function baseRecord(kind, animation) {
	return {
		kind,
		animation,
		timestamp: time.now(),
		frameTimestamp: frameData.timestamp,
		frameIsProcessing: frameData.isProcessing
	};
}
/**
* Notify an optional inspector without adding a public Motion API.
*
* The record is a raw firehose: the live animation handle, the concrete
* animation's internal options object untouched (timing fields in
* internal milliseconds, name/keyframes/element/motionValue still
* attached), a timestamp and the raw frameloop state at notify time.
* All interpretation belongs to the consumer behind
* globalThis.__MOTION_INSPECT__.
*/
function notifyAnimationStart(animation, options, transition) {
	const notify = globalThis.__MOTION_INSPECT__;
	if (!notify) return;
	try {
		notify({
			...baseRecord("animation-start", animation),
			options: transition ? {
				...options,
				...transition
			} : options
		});
	} catch {}
}
/**
* Layout animations drive a projection node's progress rather than a
* property, so the record forwards the live node itself: it carries the
* DOM instance, the layout options (layoutId) and the progress handle.
* Fired inside the frame.update that starts the animation, so nodes
* animating in the same layout commit share frameTimestamp.
*/
function notifyLayoutAnimationStart(animation, node) {
	const notify = globalThis.__MOTION_INSPECT__;
	if (!notify) return;
	try {
		notify({
			...baseRecord("layout-animation-start", animation),
			node
		});
	} catch {}
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/animation/utils/WithPromise.mjs
var WithPromise = class {
	constructor() {
		this.isResolved = false;
	}
	get finished() {
		if (!this._finished) this._finished = this.isResolved ? Promise.resolve() : new Promise((resolve) => {
			this._resolve = resolve;
		});
		return this._finished;
	}
	updateFinished() {
		this._finished = this._resolve = void 0;
		this.isResolved = false;
	}
	notifyFinished() {
		this.isResolved = true;
		this._resolve?.();
	}
	/**
	* Allows the animation to be awaited.
	*
	* @deprecated Use `finished` instead.
	*/
	then(onResolve, onReject) {
		return this.finished.then(onResolve, onReject);
	}
};
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/animation/JSAnimation.mjs
var percentToProgress = (percent) => percent / 100;
var JSAnimation = class extends WithPromise {
	constructor(options) {
		super();
		this.state = "idle";
		this.startTime = null;
		this.isStopped = false;
		/**
		* The current time of the animation.
		*/
		this.currentTime = 0;
		/**
		* The time at which the animation was paused.
		*/
		this.holdTime = null;
		/**
		* Playback speed as a factor. 0 would be stopped, -1 reverse and 2 double speed.
		*/
		this.playbackSpeed = 1;
		/**
		* Reusable state object for the delay phase to avoid
		* allocating a new object every frame.
		*/
		this.delayState = {
			done: false,
			value: void 0
		};
		/**
		* This method is bound to the instance to fix a pattern where
		* animation.stop is returned as a reference from a useEffect.
		*/
		this.stop = () => {
			const { motionValue } = this.options;
			if (motionValue && motionValue.updatedAt !== time.now()) this.tick(time.now());
			this.isStopped = true;
			if (this.state === "idle") return;
			this.teardown();
			this.options.onStop?.();
		};
		this.options = options;
		this.initAnimation();
		this.play();
		if (options.autoplay === false) this.pause();
		notifyAnimationStart(this, this.options);
	}
	initAnimation() {
		const { options } = this;
		replaceTransitionType(options);
		const { type = keyframes, repeat = 0, repeatDelay = 0, repeatType, velocity = 0 } = options;
		let { keyframes: keyframes$1 } = options;
		const generatorFactory = type || keyframes;
		if (generatorFactory !== keyframes && typeof keyframes$1[0] !== "number") {
			this.mixKeyframes = pipe(percentToProgress, mix(keyframes$1[0], keyframes$1[1]));
			keyframes$1 = [0, 100];
		}
		const generator = generatorFactory(keyframes$1 === options.keyframes ? options : {
			...options,
			keyframes: keyframes$1
		});
		/**
		* If we have a mirror repeat type we need to create a second generator that outputs the
		* mirrored (not reversed) animation and later ping pong between the two generators.
		*/
		if (repeatType === "mirror") this.mirroredGenerator = generatorFactory({
			...options,
			keyframes: [...keyframes$1].reverse(),
			velocity: -velocity
		});
		/**
		* If duration is undefined and we have repeat options,
		* we need to calculate a duration from the generator.
		*
		* We set it to the generator itself to cache the duration.
		* Any timeline resolver will need to have already precalculated
		* the duration by this step.
		*/
		if (generator.calculatedDuration === null) generator.calculatedDuration = calcGeneratorDuration(generator);
		const { calculatedDuration } = generator;
		this.calculatedDuration = calculatedDuration;
		this.resolvedDuration = calculatedDuration + repeatDelay;
		this.totalDuration = this.resolvedDuration * (repeat + 1) - repeatDelay;
		this.generator = generator;
	}
	updateTime(timestamp) {
		const animationTime = Math.round(timestamp - this.startTime) * this.playbackSpeed;
		if (this.holdTime !== null) this.currentTime = this.holdTime;
		else this.currentTime = animationTime;
	}
	tick(timestamp, sample = false) {
		const { generator, totalDuration, mixKeyframes, mirroredGenerator, resolvedDuration, calculatedDuration } = this;
		if (this.startTime === null) return generator.next(0);
		const { delay = 0, keyframes, repeat, repeatType, repeatDelay, type, onUpdate, finalKeyframe } = this.options;
		/**
		* requestAnimationFrame timestamps can come through as lower than
		* the startTime as set by performance.now(). Here we prevent this,
		* though in the future it could be possible to make setting startTime
		* a pending operation that gets resolved here.
		*/
		if (this.speed > 0) this.startTime = Math.min(this.startTime, timestamp);
		else if (this.speed < 0) this.startTime = Math.min(timestamp - totalDuration / this.speed, this.startTime);
		if (sample) this.currentTime = timestamp;
		else this.updateTime(timestamp);
		const timeWithoutDelay = this.currentTime - delay * (this.playbackSpeed >= 0 ? 1 : -1);
		const isInDelayPhase = this.playbackSpeed >= 0 ? timeWithoutDelay < 0 : timeWithoutDelay > totalDuration;
		this.currentTime = Math.max(timeWithoutDelay, 0);
		if (this.state === "finished" && this.holdTime === null) this.currentTime = totalDuration;
		let elapsed = this.currentTime;
		let frameGenerator = generator;
		if (repeat) {
			/**
			* Get the current progress (0-1) of the animation. If t is >
			* than duration we'll get values like 2.5 (midway through the
			* third iteration)
			*/
			const progress = Math.min(this.currentTime, totalDuration) / resolvedDuration;
			/**
			* Get the current iteration (0 indexed). For instance the floor of
			* 2.5 is 2.
			*/
			let currentIteration = Math.floor(progress);
			/**
			* Get the current progress of the iteration by taking the remainder
			* so 2.5 is 0.5 through iteration 2
			*/
			let iterationProgress = progress % 1;
			/**
			* If iteration progress is 1 we count that as the end
			* of the previous iteration.
			*/
			if (!iterationProgress && progress >= 1) iterationProgress = 1;
			iterationProgress === 1 && currentIteration--;
			currentIteration = Math.min(currentIteration, repeat + 1);
			if (Boolean(currentIteration % 2)) {
				if (repeatType === "reverse") {
					iterationProgress = 1 - iterationProgress;
					if (repeatDelay) iterationProgress -= repeatDelay / resolvedDuration;
				} else if (repeatType === "mirror") frameGenerator = mirroredGenerator;
			}
			elapsed = clamp$1(0, 1, iterationProgress) * resolvedDuration;
		}
		/**
		* If we're in negative time, set state as the initial keyframe.
		* This prevents delay: x, duration: 0 animations from finishing
		* instantly.
		*/
		let state;
		if (isInDelayPhase) {
			this.delayState.value = keyframes[0];
			state = this.delayState;
		} else state = frameGenerator.next(elapsed);
		if (mixKeyframes && !isInDelayPhase) state.value = mixKeyframes(state.value);
		let { done } = state;
		if (!isInDelayPhase && calculatedDuration !== null) done = this.playbackSpeed >= 0 ? this.currentTime >= totalDuration : this.currentTime <= 0;
		const isAnimationFinished = this.holdTime === null && (this.state === "finished" || this.state === "running" && done);
		if (isAnimationFinished && type !== inertia) state.value = getFinalKeyframe(keyframes, this.options, finalKeyframe, this.speed);
		if (onUpdate) onUpdate(state.value);
		if (isAnimationFinished) this.finish();
		return state;
	}
	/**
	* Allows the returned animation to be awaited or promise-chained. Currently
	* resolves when the animation finishes at all but in a future update could/should
	* reject if its cancels.
	*/
	then(resolve, reject) {
		return this.finished.then(resolve, reject);
	}
	get duration() {
		return /* @__PURE__ */ millisecondsToSeconds(this.calculatedDuration);
	}
	get iterationDuration() {
		const { delay = 0 } = this.options || {};
		return this.duration + /* @__PURE__ */ millisecondsToSeconds(delay);
	}
	get time() {
		return /* @__PURE__ */ millisecondsToSeconds(this.currentTime);
	}
	set time(newTime) {
		newTime = /* @__PURE__ */ secondsToMilliseconds(newTime);
		this.currentTime = newTime;
		if (this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0) this.holdTime = newTime;
		else if (this.driver) this.startTime = this.driver.now() - newTime / this.playbackSpeed;
		if (this.driver) this.driver.start(false);
		else {
			this.startTime = 0;
			this.state = "paused";
			this.holdTime = newTime;
			this.tick(newTime);
		}
	}
	/**
	* Returns the generator's velocity at the current time in units/second.
	* Uses the analytical derivative when available (springs), avoiding
	* the MotionValue's frame-dependent velocity estimation.
	*/
	getGeneratorVelocity() {
		return calcGeneratorVelocity(this.generator, this.currentTime, this.options.velocity);
	}
	get speed() {
		return this.playbackSpeed;
	}
	set speed(newSpeed) {
		const hasChanged = this.playbackSpeed !== newSpeed;
		if (hasChanged && this.driver) this.updateTime(time.now());
		this.playbackSpeed = newSpeed;
		if (hasChanged && this.driver) this.time = /* @__PURE__ */ millisecondsToSeconds(this.currentTime);
	}
	play() {
		if (this.isStopped) return;
		const { driver = frameloopDriver, startTime } = this.options;
		if (!this.driver) this.driver = driver((timestamp) => this.tick(timestamp));
		this.options.onPlay?.();
		const now = this.driver.now();
		if (this.state === "finished") {
			this.updateFinished();
			this.startTime = now;
		} else if (this.holdTime !== null) this.startTime = now - this.holdTime;
		else if (!this.startTime) this.startTime = startTime ?? now;
		if (this.state === "finished" && this.speed < 0) this.startTime += this.calculatedDuration;
		this.holdTime = null;
		/**
		* Set playState to running only after we've used it in
		* the previous logic.
		*/
		this.state = "running";
		this.driver.start();
	}
	pause() {
		this.state = "paused";
		this.updateTime(time.now());
		this.holdTime = this.currentTime;
	}
	complete() {
		if (this.state !== "running") this.play();
		this.state = "finished";
		this.holdTime = null;
	}
	finish() {
		this.notifyFinished();
		this.teardown();
		this.state = "finished";
		this.options.onComplete?.();
	}
	cancel() {
		this.holdTime = null;
		this.startTime = 0;
		this.tick(0);
		this.teardown();
		this.options.onCancel?.();
	}
	teardown() {
		this.state = "idle";
		this.stopDriver();
		this.startTime = this.holdTime = null;
	}
	stopDriver() {
		if (!this.driver) return;
		this.driver.stop();
		this.driver = void 0;
	}
	sample(sampleTime) {
		this.startTime = 0;
		return this.tick(sampleTime, true);
	}
	attachTimeline(timeline) {
		if (this.options.allowFlatten) {
			this.options.type = "keyframes";
			this.options.ease = "linear";
			this.initAnimation();
		}
		this.driver?.stop();
		return timeline.observe(this);
	}
};
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/value/types/complex/filter.mjs
/**
* Properties that should default to 1 or 100%
*/
var maxDefaults = /* @__PURE__ */ new Set([
	"brightness",
	"contrast",
	"saturate",
	"opacity"
]);
function applyDefaultFilter(v) {
	const [name, value] = v.slice(0, -1).split("(");
	if (name === "drop-shadow") return v;
	const [number] = value.match(floatRegex) || [];
	if (!number) return v;
	const unit = value.replace(number, "");
	let defaultValue = maxDefaults.has(name) ? 1 : 0;
	if (number !== value) defaultValue *= 100;
	return name + "(" + defaultValue + unit + ")";
}
var functionRegex = /\b([a-z-]*)\(.*?\)/gu;
var filter = {
	...complex,
	getAnimatableNone: (v) => {
		const functions = v.match(functionRegex);
		return functions ? functions.map(applyDefaultFilter).join(" ") : v;
	}
};
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/value/types/complex/mask.mjs
var mask = {
	...complex,
	getAnimatableNone: (v) => {
		const parsed = complex.parse(v);
		return complex.createTransformer(v)(parsed.map((v) => typeof v === "number" ? 0 : typeof v === "object" ? {
			...v,
			alpha: 1
		} : v));
	}
};
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/value/types/int.mjs
var int = {
	...number,
	transform: Math.round
};
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/value/types/maps/number.mjs
var numberValueTypes = {
	borderWidth: px,
	borderTopWidth: px,
	borderRightWidth: px,
	borderBottomWidth: px,
	borderLeftWidth: px,
	borderRadius: px,
	borderTopLeftRadius: px,
	borderTopRightRadius: px,
	borderBottomRightRadius: px,
	borderBottomLeftRadius: px,
	width: px,
	maxWidth: px,
	height: px,
	maxHeight: px,
	top: px,
	right: px,
	bottom: px,
	left: px,
	inset: px,
	insetBlock: px,
	insetBlockStart: px,
	insetBlockEnd: px,
	insetInline: px,
	insetInlineStart: px,
	insetInlineEnd: px,
	padding: px,
	paddingTop: px,
	paddingRight: px,
	paddingBottom: px,
	paddingLeft: px,
	paddingBlock: px,
	paddingBlockStart: px,
	paddingBlockEnd: px,
	paddingInline: px,
	paddingInlineStart: px,
	paddingInlineEnd: px,
	margin: px,
	marginTop: px,
	marginRight: px,
	marginBottom: px,
	marginLeft: px,
	marginBlock: px,
	marginBlockStart: px,
	marginBlockEnd: px,
	marginInline: px,
	marginInlineStart: px,
	marginInlineEnd: px,
	fontSize: px,
	backgroundPositionX: px,
	backgroundPositionY: px,
	rotate: degrees,
	/**
	* Internal channel for `transition.path` orientToPath. Composed onto
	* `rotate` at the transform-build sites so the user's `rotate` is
	* never read or overwritten. Not part of `transformPropOrder`.
	*/
	pathRotation: degrees,
	rotateX: degrees,
	rotateY: degrees,
	rotateZ: degrees,
	scale,
	scaleX: scale,
	scaleY: scale,
	scaleZ: scale,
	skew: degrees,
	skewX: degrees,
	skewY: degrees,
	distance: px,
	translateX: px,
	translateY: px,
	translateZ: px,
	x: px,
	y: px,
	z: px,
	perspective: px,
	transformPerspective: px,
	opacity: alpha,
	originX: progressPercentage,
	originY: progressPercentage,
	originZ: px,
	zIndex: int,
	fillOpacity: alpha,
	strokeOpacity: alpha,
	numOctaves: int
};
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/value/types/maps/defaults.mjs
/**
* A map of default value types for common values
*/
var defaultValueTypes = {
	...numberValueTypes,
	color,
	backgroundColor: color,
	outlineColor: color,
	fill: color,
	stroke: color,
	borderColor: color,
	borderTopColor: color,
	borderRightColor: color,
	borderBottomColor: color,
	borderLeftColor: color,
	filter,
	WebkitFilter: filter,
	mask,
	WebkitMask: mask
};
/**
* Gets the default ValueType for the provided value key
*/
var getDefaultValueType = (key) => defaultValueTypes[key];
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/value/types/utils/animatable-none.mjs
var customTypes = /*@__PURE__*/ new Set([filter, mask]);
function getAnimatableNone(key, value) {
	let defaultValueType = getDefaultValueType(key);
	if (!customTypes.has(defaultValueType)) defaultValueType = complex;
	return defaultValueType.getAnimatableNone ? defaultValueType.getAnimatableNone(value) : void 0;
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/animation/keyframes/utils/fill-wildcards.mjs
function fillWildcards(keyframes) {
	for (let i = 1; i < keyframes.length; i++) keyframes[i] ?? (keyframes[i] = keyframes[i - 1]);
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/render/dom/parse-transform.mjs
var radToDeg = (rad) => rad * 180 / Math.PI;
var rotate$1 = (v) => {
	return rebaseAngle(radToDeg(Math.atan2(v[1], v[0])));
};
var matrix2dParsers = {
	x: 4,
	y: 5,
	translateX: 4,
	translateY: 5,
	scaleX: 0,
	scaleY: 3,
	scale: (v) => (Math.abs(v[0]) + Math.abs(v[3])) / 2,
	rotate: rotate$1,
	rotateZ: rotate$1,
	skewX: (v) => radToDeg(Math.atan(v[1])),
	skewY: (v) => radToDeg(Math.atan(v[2])),
	skew: (v) => (Math.abs(v[1]) + Math.abs(v[2])) / 2
};
var rebaseAngle = (angle) => {
	angle = angle % 360;
	if (angle < 0) angle += 360;
	return angle;
};
var rotateZ = rotate$1;
var scaleX = (v) => Math.sqrt(v[0] * v[0] + v[1] * v[1]);
var scaleY = (v) => Math.sqrt(v[4] * v[4] + v[5] * v[5]);
var matrix3dParsers = {
	x: 12,
	y: 13,
	z: 14,
	translateX: 12,
	translateY: 13,
	translateZ: 14,
	scaleX,
	scaleY,
	scale: (v) => (scaleX(v) + scaleY(v)) / 2,
	rotateX: (v) => rebaseAngle(radToDeg(Math.atan2(v[6], v[5]))),
	rotateY: (v) => rebaseAngle(radToDeg(Math.atan2(-v[2], v[0]))),
	rotateZ,
	rotate: rotateZ,
	skewX: (v) => radToDeg(Math.atan(v[4])),
	skewY: (v) => radToDeg(Math.atan(v[1])),
	skew: (v) => (Math.abs(v[1]) + Math.abs(v[4])) / 2
};
function defaultTransformValue(name) {
	return name.includes("scale") ? 1 : 0;
}
function parseValueFromTransform(transform, name) {
	if (!transform || transform === "none") return defaultTransformValue(name);
	const matrix3dMatch = transform.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
	let parsers;
	let match;
	if (matrix3dMatch) {
		parsers = matrix3dParsers;
		match = matrix3dMatch;
	} else {
		const matrix2dMatch = transform.match(/^matrix\(([-\d.e\s,]+)\)$/u);
		parsers = matrix2dParsers;
		match = matrix2dMatch;
	}
	if (!match) return defaultTransformValue(name);
	const valueParser = parsers[name];
	const values = match[1].split(",").map(convertTransformToNumber);
	return typeof valueParser === "function" ? valueParser(values) : values[valueParser];
}
var readTransformValue = (instance, name) => {
	const { transform = "none" } = getComputedStyle(instance);
	return parseValueFromTransform(transform, name);
};
function convertTransformToNumber(value) {
	return parseFloat(value.trim());
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/render/utils/keys-transform.mjs
/**
* Generate a list of every possible transform key.
*/
var transformPropOrder = [
	"transformPerspective",
	"x",
	"y",
	"z",
	"translateX",
	"translateY",
	"translateZ",
	"scale",
	"scaleX",
	"scaleY",
	"rotate",
	"rotateX",
	"rotateY",
	"rotateZ",
	"skew",
	"skewX",
	"skewY"
];
/**
* A quick lookup for transform props.
*
* `pathRotation` is a transform for routing purposes (skipped from raw
* style application, wired to the transform composite, flags transform
* dirty) but is intentionally NOT in `transformPropOrder` — it is
* composed onto `rotate` at the build sites, not serialized in its own
* slot, and must stay out of the order-array consumers (parse-transform,
* unit-conversion, keys-position).
*/
var transformProps = /*@__PURE__*/ (() => /* @__PURE__ */ new Set([...transformPropOrder, "pathRotation"]))();
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/animation/keyframes/utils/unit-conversion.mjs
var isNumOrPxType = (v) => v === number || v === px;
var transformKeys = /* @__PURE__ */ new Set([
	"x",
	"y",
	"z"
]);
var nonTranslationalTransformKeys = transformPropOrder.filter((key) => !transformKeys.has(key));
/**
* Reset any bounding box-changing transforms so the element can be
* measured. Returns the values to restore. Values already at their
* default don't change the box, so they're left alone: an element with
* only `rotate: 0` doesn't need to be re-rendered before measuring.
*/
function removeNonTranslationalTransform(visualElement) {
	const removedTransforms = [];
	nonTranslationalTransformKeys.forEach((key) => {
		const value = visualElement.getValue(key);
		if (value !== void 0) {
			const current = value.get();
			const reset = key.startsWith("scale") ? 1 : 0;
			if (current === reset) return;
			removedTransforms.push([key, current]);
			value.set(reset);
		}
	});
	return removedTransforms;
}
/**
* Values that can only be measured from the bounding box. Elements with
* these values need bounding box-changing transforms removed first.
*/
var boxDependentValues = /* @__PURE__ */ new Set(["bottom", "right"]);
/**
* Computed width/height is already in pixels and unaffected by
* transforms. It's "auto" for elements without a layout box (e.g. inline),
* in which case we fall back to measuring the bounding box.
*/
function measureDimension(computed, measureBox, axis, paddingStart, paddingEnd, boxSizing) {
	const px = parseFloat(computed);
	if (!isNaN(px)) return px;
	const { min, max } = measureBox()[axis];
	const size = max - min;
	return boxSizing === "border-box" ? size : size - parseFloat(paddingStart) - parseFloat(paddingEnd);
}
var positionalValues = {
	width: ({ width, paddingLeft = "0", paddingRight = "0", boxSizing }, measureBox) => measureDimension(width, measureBox, "x", paddingLeft, paddingRight, boxSizing),
	height: ({ height, paddingTop = "0", paddingBottom = "0", boxSizing }, measureBox) => measureDimension(height, measureBox, "y", paddingTop, paddingBottom, boxSizing),
	top: ({ top }) => parseFloat(top),
	left: ({ left }) => parseFloat(left),
	bottom: ({ top }, measureBox) => {
		const { y } = measureBox();
		return parseFloat(top) + (y.max - y.min);
	},
	right: ({ left }, measureBox) => {
		const { x } = measureBox();
		return parseFloat(left) + (x.max - x.min);
	},
	x: ({ transform }) => parseValueFromTransform(transform, "x"),
	y: ({ transform }) => parseValueFromTransform(transform, "y")
};
positionalValues.translateX = positionalValues.x;
positionalValues.translateY = positionalValues.y;
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/animation/keyframes/KeyframesResolver.mjs
var toResolve = /* @__PURE__ */ new Set();
var isScheduled = false;
var anyNeedsMeasurement = false;
var isForced = false;
function measureAllKeyframes() {
	if (anyNeedsMeasurement) {
		const resolversToMeasure = [];
		const elementsToMeasure = /* @__PURE__ */ new Set();
		const elementsToUntransform = /* @__PURE__ */ new Set();
		toResolve.forEach((resolver) => {
			if (!resolver.needsMeasurement) return;
			resolversToMeasure.push(resolver);
			elementsToMeasure.add(resolver.element);
			if (boxDependentValues.has(resolver.name)) elementsToUntransform.add(resolver.element);
		});
		const transformsToRestore = /* @__PURE__ */ new Map();
		/**
		* Write pass
		* Values measured from the bounding box need bounding box-changing
		* transforms removed first. Values read from computed style don't.
		*/
		elementsToUntransform.forEach((element) => {
			const removedTransforms = removeNonTranslationalTransform(element);
			if (!removedTransforms.length) return;
			transformsToRestore.set(element, removedTransforms);
			element.render();
		});
		resolversToMeasure.forEach((resolver) => resolver.measureInitialState());
		elementsToMeasure.forEach((element) => {
			element.render();
			const restore = transformsToRestore.get(element);
			if (restore) restore.forEach(([key, value]) => {
				element.getValue(key)?.set(value);
			});
		});
		resolversToMeasure.forEach((resolver) => resolver.measureEndState());
		resolversToMeasure.forEach((resolver) => {
			if (resolver.suspendedScrollY !== void 0) window.scrollTo(0, resolver.suspendedScrollY);
		});
	}
	anyNeedsMeasurement = false;
	isScheduled = false;
	toResolve.forEach((resolver) => resolver.complete(isForced));
	toResolve.clear();
}
function readAllKeyframes() {
	toResolve.forEach((resolver) => {
		resolver.readKeyframes();
		if (resolver.needsMeasurement) anyNeedsMeasurement = true;
	});
}
function flushKeyframeResolvers() {
	isForced = true;
	readAllKeyframes();
	measureAllKeyframes();
	isForced = false;
}
/**
* Normalise a value read from the subject into an animation origin: a
* number read as a string ("0", "200") becomes a number, and a value
* that isn't animatable (e.g. "none") but whose target is becomes an
* animatable zero in the shape of the target.
*/
function readOrigin(value, name, target) {
	if (typeof value === "string") {
		if (isNumericalString(value) || isZeroValueString(value)) return parseFloat(value);
		else if (!complex.test(value) && complex.test(target)) return getAnimatableNone(name, target);
	}
	return value ?? void 0;
}
var KeyframeResolver = class {
	constructor(unresolvedKeyframes, onComplete, name, motionValue, element, isAsync = false) {
		this.state = "pending";
		/**
		* Track whether this resolver is async. If it is, it'll be added to the
		* resolver queue and flushed in the next frame. Resolvers that aren't going
		* to trigger read/write thrashing don't need to be async.
		*/
		this.isAsync = false;
		/**
		* Track whether this resolver needs to perform a measurement
		* to resolve its keyframes.
		*/
		this.needsMeasurement = false;
		this.unresolvedKeyframes = [...unresolvedKeyframes];
		this.onComplete = onComplete;
		this.name = name;
		this.motionValue = motionValue;
		this.element = element;
		this.isAsync = isAsync;
	}
	scheduleResolve() {
		this.state = "scheduled";
		if (this.isAsync) {
			toResolve.add(this);
			if (!isScheduled) {
				isScheduled = true;
				frame.read(readAllKeyframes);
				frame.resolveKeyframes(measureAllKeyframes);
			}
		} else {
			this.readKeyframes();
			this.complete();
		}
	}
	readKeyframes() {
		const { unresolvedKeyframes, name, element, motionValue } = this;
		if (unresolvedKeyframes[0] === null) {
			const currentValue = motionValue?.get();
			const finalKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
			if (currentValue !== void 0) unresolvedKeyframes[0] = currentValue;
			else if (element && name) {
				const valueAsRead = readOrigin(element.readValue(name, finalKeyframe), name, finalKeyframe);
				if (valueAsRead !== void 0) unresolvedKeyframes[0] = valueAsRead;
			}
			if (unresolvedKeyframes[0] === void 0) unresolvedKeyframes[0] = finalKeyframe;
			if (motionValue && currentValue === void 0) motionValue.set(unresolvedKeyframes[0]);
		}
		fillWildcards(unresolvedKeyframes);
	}
	setFinalKeyframe() {}
	measureInitialState() {}
	renderEndStyles() {}
	measureEndState() {}
	complete(isForcedComplete = false) {
		this.state = "complete";
		this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, isForcedComplete);
		toResolve.delete(this);
	}
	cancel() {
		if (this.state === "scheduled") {
			toResolve.delete(this);
			this.state = "pending";
		}
	}
	resume() {
		if (this.state === "pending") this.scheduleResolve();
	}
};
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/render/dom/is-css-var.mjs
var isCSSVar = (name) => name.startsWith("--");
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/render/dom/style-set.mjs
function setStyle(element, name, value) {
	isCSSVar(name) ? element.style.setProperty(name, value) : element.style[name] = value;
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/utils/supports/flags.mjs
/**
* Add the ability for test suites to manually set support flags
* to better test more environments.
*/
var supportsFlags = {};
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/utils/supports/memo.mjs
function memoSupports(callback, supportsFlag) {
	const memoized = /* @__PURE__ */ memo(callback);
	return () => supportsFlags[supportsFlag] ?? memoized();
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/utils/supports/scroll-timeline.mjs
var supportsScrollTimeline = /* @__PURE__ */ memoSupports(() => window.ScrollTimeline !== void 0, "scrollTimeline");
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/utils/supports/linear-easing.mjs
var supportsLinearEasing = /*@__PURE__*/ memoSupports(() => {
	try {
		document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
	} catch (e) {
		return false;
	}
	return true;
}, "linearEasing");
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/animation/waapi/easing/cubic-bezier.mjs
var cubicBezierAsString = ([a, b, c, d]) => `cubic-bezier(${a}, ${b}, ${c}, ${d})`;
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/animation/waapi/easing/supported.mjs
var supportedWaapiEasing = {
	linear: "linear",
	ease: "ease",
	easeIn: "ease-in",
	easeOut: "ease-out",
	easeInOut: "ease-in-out",
	circIn: /*@__PURE__*/ cubicBezierAsString([
		0,
		.65,
		.55,
		1
	]),
	circOut: /*@__PURE__*/ cubicBezierAsString([
		.55,
		0,
		1,
		.45
	]),
	backIn: /*@__PURE__*/ cubicBezierAsString([
		.31,
		.01,
		.66,
		-.59
	]),
	backOut: /*@__PURE__*/ cubicBezierAsString([
		.33,
		1.53,
		.69,
		.99
	])
};
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/animation/waapi/easing/map-easing.mjs
function mapEasingToNativeEasing(easing, duration) {
	if (!easing) return;
	else if (typeof easing === "function") return supportsLinearEasing() ? generateLinearEasing(easing, duration) : "ease-out";
	else if (/* @__PURE__ */ isBezierDefinition(easing)) return cubicBezierAsString(easing);
	else if (Array.isArray(easing)) return easing.map((segmentEasing) => mapEasingToNativeEasing(segmentEasing, duration) || supportedWaapiEasing.easeOut);
	else return supportedWaapiEasing[easing];
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/animation/waapi/start-waapi-animation.mjs
function startWaapiAnimation(element, valueName, keyframes, { delay = 0, duration = 300, repeat = 0, repeatType = "loop", ease = "easeOut", times } = {}, pseudoElement = void 0) {
	const keyframeOptions = { [valueName]: keyframes };
	if (times) keyframeOptions.offset = times;
	const easing = mapEasingToNativeEasing(ease, duration);
	/**
	* If this is an easing array, apply to keyframes, not animation as a whole
	*/
	if (Array.isArray(easing)) keyframeOptions.easing = easing;
	const options = {
		delay,
		duration,
		easing: !Array.isArray(easing) ? easing : "linear",
		fill: "both",
		iterations: repeat + 1,
		direction: repeatType === "reverse" ? "alternate" : "normal"
	};
	if (pseudoElement) options.pseudoElement = pseudoElement;
	return element.animate(keyframeOptions, options);
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/animation/generators/utils/is-generator.mjs
function isGenerator(type) {
	return typeof type === "function" && "applyToOptions" in type;
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/animation/waapi/utils/apply-generator.mjs
function applyGeneratorOptions({ type, ...options }) {
	if (isGenerator(type) && supportsLinearEasing()) return type.applyToOptions(options);
	else {
		options.duration ?? (options.duration = 300);
		options.ease ?? (options.ease = "easeOut");
	}
	return options;
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/animation/NativeAnimation.mjs
/**
* NativeAnimation implements AnimationPlaybackControls for the browser's Web Animations API.
*/
var NativeAnimation = class extends WithPromise {
	constructor(options) {
		super();
		this.finishedTime = null;
		this.isStopped = false;
		/**
		* Tracks a manually-set start time that takes precedence over WAAPI's
		* dynamic startTime. This is cleared when play() or time setter is called,
		* allowing WAAPI to take over timing.
		*/
		this.manualStartTime = null;
		if (!options) return;
		const { element, name, keyframes, pseudoElement, allowFlatten = false, finalKeyframe, onComplete } = options;
		this.isPseudoElement = Boolean(pseudoElement);
		this.allowFlatten = allowFlatten;
		this.options = options;
		options.type;
		const transition = applyGeneratorOptions(options);
		this.animation = startWaapiAnimation(element, name, keyframes, transition, pseudoElement);
		if (transition.autoplay === false) this.animation.pause();
		this.animation.onfinish = () => {
			this.finishedTime = this.time;
			if (!pseudoElement) {
				const keyframe = getFinalKeyframe(keyframes, this.options, finalKeyframe, this.speed);
				if (this.updateMotionValue) this.updateMotionValue(keyframe);
				/**
				* If we can, we want to commit the final style as set by the user,
				* rather than the computed keyframe value supplied by the animation.
				* We always do this, even when a motion value is present, to prevent
				* a visual flash in Firefox where the WAAPI animation's fill is removed
				* during cancel() before the scheduled render can apply the correct value.
				*/
				setStyle(element, name, keyframe);
				this.animation.cancel();
			}
			onComplete?.();
			this.notifyFinished();
		};
		notifyAnimationStart(this, options, transition);
	}
	play() {
		if (this.isStopped) return;
		this.manualStartTime = null;
		this.animation.play();
		if (this.state === "finished") this.updateFinished();
	}
	pause() {
		this.animation.pause();
	}
	complete() {
		this.animation.finish?.();
	}
	cancel() {
		try {
			this.animation.cancel();
		} catch (e) {}
	}
	stop() {
		if (this.isStopped) return;
		this.isStopped = true;
		const { state } = this;
		if (state === "idle" || state === "finished") return;
		if (this.updateMotionValue) this.updateMotionValue();
		else this.commitStyles();
		if (!this.isPseudoElement) this.cancel();
	}
	/**
	* WAAPI doesn't natively have any interruption capabilities.
	*
	* In this method, we commit styles back to the DOM before cancelling
	* the animation.
	*
	* This is designed to be overridden by NativeAnimationExtended, which
	* will create a renderless JS animation and sample it twice to calculate
	* its current value, "previous" value, and therefore allow
	* Motion to also correctly calculate velocity for any subsequent animation
	* while deferring the commit until the next animation frame.
	*/
	commitStyles() {
		const element = this.options?.element;
		if (!this.isPseudoElement && element?.isConnected) this.animation.commitStyles?.();
	}
	get duration() {
		const duration = this.animation.effect?.getComputedTiming?.().duration || 0;
		return /* @__PURE__ */ millisecondsToSeconds(Number(duration));
	}
	get iterationDuration() {
		const { delay = 0 } = this.options || {};
		return this.duration + /* @__PURE__ */ millisecondsToSeconds(delay);
	}
	get time() {
		return /* @__PURE__ */ millisecondsToSeconds(Number(this.animation.currentTime) || 0);
	}
	set time(newTime) {
		const wasFinished = this.finishedTime !== null;
		this.manualStartTime = null;
		this.finishedTime = null;
		this.animation.currentTime = /* @__PURE__ */ secondsToMilliseconds(newTime);
		if (wasFinished) this.animation.pause();
	}
	/**
	* The playback speed of the animation.
	* 1 = normal speed, 2 = double speed, 0.5 = half speed.
	*/
	get speed() {
		return this.animation.playbackRate;
	}
	set speed(newSpeed) {
		if (newSpeed < 0) this.finishedTime = null;
		this.animation.playbackRate = newSpeed;
	}
	get state() {
		return this.finishedTime !== null ? "finished" : this.animation.playState;
	}
	get startTime() {
		return this.manualStartTime ?? Number(this.animation.startTime);
	}
	set startTime(newStartTime) {
		this.manualStartTime = this.animation.startTime = newStartTime;
	}
	/**
	* Attaches a timeline to the animation, for instance the `ScrollTimeline`.
	*/
	attachTimeline({ timeline, onAttach, observe, ...range }) {
		if (this.allowFlatten) this.animation.effect?.updateTiming({ easing: "linear" });
		this.animation.onfinish = null;
		if (timeline && supportsScrollTimeline()) {
			this.animation.timeline = timeline;
			Object.assign(this.animation, range);
			onAttach?.(this.animation);
			return noop;
		} else return observe(this);
	}
};
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/animation/waapi/utils/unsupported-easing.mjs
var unsupportedEasingFunctions = {
	anticipate,
	backInOut,
	circInOut
};
function isUnsupportedEase(key) {
	return key in unsupportedEasingFunctions;
}
function replaceStringEasing(transition) {
	if (typeof transition.ease === "string" && isUnsupportedEase(transition.ease)) transition.ease = unsupportedEasingFunctions[transition.ease];
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/animation/NativeAnimationExtended.mjs
/**
* 10ms is chosen here as it strikes a balance between smooth
* results (more than one keyframe per frame at 60fps) and
* keyframe quantity.
*/
var sampleDelta = 10;
var NativeAnimationExtended = class extends NativeAnimation {
	constructor(options) {
		/**
		* The base NativeAnimation function only supports a subset
		* of Motion easings, and WAAPI also only supports some
		* easing functions via string/cubic-bezier definitions.
		*
		* This function replaces those unsupported easing functions
		* with a JS easing function. This will later get compiled
		* to a linear() easing function.
		*/
		replaceStringEasing(options);
		/**
		* Ensure we replace the transition type with a generator function
		* before passing to WAAPI.
		*
		* TODO: Does this have a better home? It could be shared with
		* JSAnimation.
		*/
		replaceTransitionType(options);
		super(options);
		/**
		* Only set startTime when the animation should autoplay.
		* Setting startTime on a paused WAAPI animation unpauses it
		* (per the WAAPI spec), which breaks autoplay: false.
		*/
		if (options.startTime !== void 0 && options.autoplay !== false) this.startTime = options.startTime;
		this.options = options;
	}
	/**
	* WAAPI doesn't natively have any interruption capabilities.
	*
	* Rather than read committed styles back out of the DOM, we can
	* create a renderless JS animation and sample it twice to calculate
	* its current value, "previous" value, and therefore allow
	* Motion to calculate velocity for any subsequent animation.
	*/
	updateMotionValue(value) {
		const { motionValue, onUpdate, onComplete, element, ...options } = this.options;
		if (!motionValue) return;
		if (value !== void 0) {
			motionValue.set(value);
			return;
		}
		const sampleAnimation = new JSAnimation({
			...options,
			autoplay: false
		});
		/**
		* Use wall-clock elapsed time for sampling.
		* Under CPU load, WAAPI's currentTime may not reflect actual
		* elapsed time, causing incorrect sampling and visual jumps.
		*/
		const sampleTime = Math.max(sampleDelta, time.now() - this.startTime);
		const delta = clamp$1(0, sampleDelta, sampleTime - sampleDelta);
		const current = sampleAnimation.sample(sampleTime).value;
		/**
		* Write the estimated value to inline style so it persists
		* after cancel(), covering the async gap before the next
		* animation starts.
		*/
		const { name } = this.options;
		if (element && name) setStyle(element, name, current);
		motionValue.setWithVelocity(sampleAnimation.sample(Math.max(0, sampleTime - delta)).value, current, delta);
		sampleAnimation.stop();
	}
};
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/animation/utils/is-animatable.mjs
/**
* Check if a value is animatable. Examples:
*
* ✅: 100, "100px", "#fff"
* ❌: "block", "url(2.jpg)"
* @param value
*
* @internal
*/
var isAnimatable = (value, name) => {
	if (name === "zIndex") return false;
	if (typeof value === "number" || Array.isArray(value)) return true;
	if (typeof value === "string" && (complex.test(value) || value === "0") && !value.startsWith("url(")) return true;
	return false;
};
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/animation/utils/can-animate.mjs
function hasKeyframesChanged(keyframes) {
	const current = keyframes[0];
	if (keyframes.length === 1) return true;
	for (let i = 0; i < keyframes.length; i++) if (keyframes[i] !== current) return true;
}
function canAnimate(keyframes, name, type, velocity) {
	/**
	* Check if we're able to animate between the start and end keyframes,
	* and throw a warning if we're attempting to animate between one that's
	* animatable and another that isn't.
	*/
	const originKeyframe = keyframes[0];
	if (originKeyframe === null) return false;
	/**
	* These aren't traditionally animatable but we do support them.
	* In future we could look into making this more generic or replacing
	* this function with mix() === mixImmediate
	*/
	if (name === "display" || name === "visibility") return true;
	const targetKeyframe = keyframes[keyframes.length - 1];
	const isOriginAnimatable = isAnimatable(originKeyframe, name);
	const isTargetAnimatable = isAnimatable(targetKeyframe, name);
	if (!isOriginAnimatable || !isTargetAnimatable) {
		isOriginAnimatable !== isTargetAnimatable && `${name}${originKeyframe}${targetKeyframe}${isOriginAnimatable ? targetKeyframe : originKeyframe}`;
		return false;
	}
	return hasKeyframesChanged(keyframes) || (type === "spring" || isGenerator(type)) && velocity;
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/animation/utils/make-animation-instant.mjs
function makeAnimationInstant(options) {
	options.duration = 0;
	options.type = "keyframes";
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/animation/waapi/utils/accelerated-values.mjs
/**
* A list of values that can be hardware-accelerated.
*/
var acceleratedValues = /* @__PURE__ */ new Set([
	"opacity",
	"clipPath",
	"filter",
	"transform",
	"backgroundColor"
]);
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/animation/waapi/utils/is-browser-color.mjs
var browserColorFunctions = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function hasBrowserOnlyColors(keyframes) {
	for (let i = 0; i < keyframes.length; i++) if (typeof keyframes[i] === "string" && browserColorFunctions.test(keyframes[i])) return true;
	return false;
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/animation/waapi/supports/waapi.mjs
var colorProperties = /* @__PURE__ */ new Set([
	"color",
	"backgroundColor",
	"outlineColor",
	"fill",
	"stroke",
	"borderColor",
	"borderTopColor",
	"borderRightColor",
	"borderBottomColor",
	"borderLeftColor"
]);
var supportsWaapi = /*@__PURE__*/ memo(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function supportsBrowserAnimation(options) {
	const { motionValue, name, repeatDelay, repeatType, damping, type, keyframes } = options;
	/**
	* Most values can't be accelerated at all, so check the name before
	* looking at the element or its props.
	*/
	if (!name || !(acceleratedValues.has(name) || colorProperties.has(name))) return false;
	const subject = motionValue?.owner?.current;
	/**
	* We use instanceof checks instead of isHTMLElement()/isSVGElement()
	* because we explicitly **don't** want elements in different timing
	* contexts (i.e. popups) to be accelerated, as it's not possible to sync
	* these animations properly with those driven from the main window
	* frameloop.
	*/
	if (!(subject instanceof HTMLElement) && !(subject instanceof SVGElement)) return false;
	const { onUpdate, transformTemplate } = motionValue.owner.getProps();
	return supportsWaapi() && (acceleratedValues.has(name) || colorProperties.has(name) && hasBrowserOnlyColors(keyframes)) && (name !== "transform" || !transformTemplate) && !onUpdate && !repeatDelay && repeatType !== "mirror" && damping !== 0 && type !== "inertia";
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/animation/AsyncMotionValueAnimation.mjs
/**
* Maximum time allowed between an animation being created and it being
* resolved for us to use the latter as the start time.
*
* This is to ensure that while we prefer to "start" an animation as soon
* as it's triggered, we also want to avoid a visual jump if there's a big delay
* between these two moments.
*/
var MAX_RESOLVE_DELAY = 40;
var AsyncMotionValueAnimation = class extends WithPromise {
	constructor(options) {
		super();
		/**
		* Bound to support return animation.stop pattern
		*/
		this.stop = () => {
			if (this._animation) {
				this._animation.stop();
				this.stopTimeline?.();
			}
			this.keyframeResolver?.cancel();
		};
		this.createdAt = time.now();
		const { keyframes, name, motionValue, element } = options;
		/**
		* animateMotionValue builds a fresh options object per value, so
		* it's completed in place as keyframes resolve rather than copied.
		*/
		const optionsWithDefaults = options;
		optionsWithDefaults.autoplay ?? (optionsWithDefaults.autoplay = true);
		optionsWithDefaults.delay ?? (optionsWithDefaults.delay = 0);
		optionsWithDefaults.type ?? (optionsWithDefaults.type = "keyframes");
		optionsWithDefaults.repeat ?? (optionsWithDefaults.repeat = 0);
		optionsWithDefaults.repeatDelay ?? (optionsWithDefaults.repeatDelay = 0);
		optionsWithDefaults.repeatType ?? (optionsWithDefaults.repeatType = "loop");
		const KeyframeResolver$1 = element?.KeyframeResolver || KeyframeResolver;
		this.keyframeResolver = new KeyframeResolver$1(keyframes, (resolvedKeyframes, finalKeyframe, forced) => this.onKeyframesResolved(resolvedKeyframes, finalKeyframe, optionsWithDefaults, !forced), name, motionValue, element);
		this.keyframeResolver?.scheduleResolve();
	}
	onKeyframesResolved(keyframes, finalKeyframe, options, sync) {
		this.keyframeResolver = void 0;
		const { name, type, velocity, delay, isHandoff, onUpdate } = options;
		this.resolvedAt = time.now();
		/**
		* If we can't animate this value with the resolved keyframes
		* then we should complete it immediately.
		*/
		let canAnimateValue = true;
		if (!canAnimate(keyframes, name, type, velocity)) {
			canAnimateValue = false;
			if (MotionGlobalConfig.instantAnimations || !delay) onUpdate?.(getFinalKeyframe(keyframes, options, finalKeyframe));
			keyframes[0] = keyframes[keyframes.length - 1];
			makeAnimationInstant(options);
			options.repeat = 0;
		}
		/**
		* Resolve startTime for the animation.
		*
		* This method uses the createdAt and resolvedAt to calculate the
		* animation startTime. *Ideally*, we would use the createdAt time as t=0
		* as the following frame would then be the first frame of the animation in
		* progress, which would feel snappier.
		*
		* However, if there's a delay (main thread work) between the creation of
		* the animation and the first committed frame, we prefer to use resolvedAt
		* to avoid a sudden jump into the animation.
		*/
		const startTime = sync ? !this.resolvedAt ? this.createdAt : this.resolvedAt - this.createdAt > MAX_RESOLVE_DELAY ? this.resolvedAt : this.createdAt : void 0;
		const { onComplete } = options;
		/**
		* A startTime passed in options (an optimised appear handoff syncing
		* to its WAAPI animation) takes precedence over the derived one.
		*/
		options.startTime ?? (options.startTime = startTime);
		options.finalKeyframe = finalKeyframe;
		options.keyframes = keyframes;
		/**
		* JSAnimation and NativeAnimation call onComplete exactly when
		* their own `finished` resolves, so this replaces a promise chain
		* per value with a callback.
		*/
		options.onComplete = () => {
			onComplete?.();
			this.notifyFinished();
		};
		/**
		* Animate via WAAPI if possible. If this is a handoff animation, the optimised animation will be running via
		* WAAPI. Therefore, this animation must be JS to ensure it runs "under" the
		* optimised animation.
		*
		* Also skip WAAPI when keyframes aren't animatable, as the resolved
		* values may not be valid CSS and would trigger browser warnings.
		*/
		const useWaapi = canAnimateValue && !isHandoff && supportsBrowserAnimation(options);
		let animation;
		if (useWaapi) {
			/**
			* The resolver needed the VisualElement, WAAPI needs the DOM
			* element. JSAnimation reads neither, so this is safe to
			* leave in place if we fall back to it.
			*/
			options.element = options.motionValue?.owner?.current;
			try {
				animation = new NativeAnimationExtended(options);
			} catch {
				animation = new JSAnimation(options);
			}
		} else animation = new JSAnimation(options);
		if (this.pendingTimeline) {
			this.stopTimeline = animation.attachTimeline(this.pendingTimeline);
			this.pendingTimeline = void 0;
		}
		this._animation = animation;
	}
	get finished() {
		return this._animation ? this._animation.finished : super.finished;
	}
	then(onResolve, _onReject) {
		return this.finished.finally(onResolve).then(() => {});
	}
	get animation() {
		if (!this._animation) {
			this.keyframeResolver?.resume();
			flushKeyframeResolvers();
		}
		return this._animation;
	}
	get duration() {
		return this.animation.duration;
	}
	get iterationDuration() {
		return this.animation.iterationDuration;
	}
	get time() {
		return this.animation.time;
	}
	set time(newTime) {
		this.animation.time = newTime;
	}
	get speed() {
		return this.animation.speed;
	}
	get state() {
		return this.animation.state;
	}
	set speed(newSpeed) {
		this.animation.speed = newSpeed;
	}
	get startTime() {
		return this.animation.startTime;
	}
	attachTimeline(timeline) {
		if (this._animation) this.stopTimeline = this.animation.attachTimeline(timeline);
		else this.pendingTimeline = timeline;
		return () => this.stop();
	}
	play() {
		this.animation.play();
	}
	pause() {
		this.animation.pause();
	}
	complete() {
		this.animation.complete();
	}
	cancel() {
		if (this._animation) this.animation.cancel();
		this.keyframeResolver?.cancel();
	}
};
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/animation/utils/calc-child-stagger.mjs
function calcChildStagger(children, child, delayChildren, staggerChildren = 0, staggerDirection = 1) {
	const index = Array.from(children).sort((a, b) => a.sortNodePosition(b)).indexOf(child);
	const numChildren = children.size;
	const maxStaggerDuration = (numChildren - 1) * staggerChildren;
	return typeof delayChildren === "function" ? delayChildren(index, numChildren) : staggerDirection === 1 ? index * staggerChildren : maxStaggerDuration - index * staggerChildren;
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/value/index.mjs
/**
* Maximum time between the value of two frames, beyond which we
* assume the velocity has since been 0.
*/
var MAX_VELOCITY_DELTA = 30;
var isFloat = (value) => {
	return !isNaN(parseFloat(value));
};
var collectMotionValues = { current: void 0 };
/**
* `MotionValue` is used to track the state and velocity of motion values.
*
* @public
*/
var MotionValue = class {
	/**
	* @param init - The initiating value
	* @param config - Optional configuration options
	*
	* -  `transformer`: A function to transform incoming values with.
	*/
	constructor(init, options = {}) {
		/**
		* Tracks whether this value can output a velocity. Currently this is only true
		* if the value is numerical, but we might be able to widen the scope here and support
		* other value types.
		*
		* @internal
		*/
		this.canTrackVelocity = null;
		/**
		* An object containing a SubscriptionManager for each active event.
		*/
		this.events = {};
		this.updateAndNotify = (v) => {
			const currentTime = time.now();
			/**
			* If we're updating the value during another frame or eventloop
			* than the previous frame, then the we set the previous frame value
			* to current.
			*/
			if (this.updatedAt !== currentTime) this.setPrevFrameValue();
			this.prev = this.current;
			this.setCurrent(v);
			if (this.current !== this.prev) {
				this.notifyChange();
				if (this.dependents) for (const dependent of this.dependents) dependent.dirty();
			}
		};
		this.hasAnimated = false;
		this.setCurrent(init);
		this.owner = options.owner;
	}
	setCurrent(current) {
		this.current = current;
		this.updatedAt = time.now();
		if (this.canTrackVelocity === null && current !== void 0) this.canTrackVelocity = isFloat(this.current);
	}
	setPrevFrameValue(prevFrameValue = this.current) {
		this.prevFrameValue = prevFrameValue;
		this.prevUpdatedAt = this.updatedAt;
	}
	/**
	* Adds a function that will be notified when the `MotionValue` is updated.
	*
	* It returns a function that, when called, will cancel the subscription.
	*
	* When calling `onChange` inside a React component, it should be wrapped with the
	* `useEffect` hook. As it returns an unsubscribe function, this should be returned
	* from the `useEffect` function to ensure you don't add duplicate subscribers..
	*
	* ```jsx
	* export const MyComponent = () => {
	*   const x = useMotionValue(0)
	*   const y = useMotionValue(0)
	*   const opacity = useMotionValue(1)
	*
	*   useEffect(() => {
	*     function updateOpacity() {
	*       const maxXY = Math.max(x.get(), y.get())
	*       const newOpacity = transform(maxXY, [0, 100], [1, 0])
	*       opacity.set(newOpacity)
	*     }
	*
	*     const unsubscribeX = x.on("change", updateOpacity)
	*     const unsubscribeY = y.on("change", updateOpacity)
	*
	*     return () => {
	*       unsubscribeX()
	*       unsubscribeY()
	*     }
	*   }, [])
	*
	*   return <motion.div style={{ x }} />
	* }
	* ```
	*
	* @param subscriber - A function that receives the latest value.
	* @returns A function that, when called, will cancel this subscription.
	*
	* @deprecated
	*/
	onChange(subscription) {
		return this.on("change", subscription);
	}
	on(eventName, callback) {
		var _a;
		if (eventName === "change") return this.onChangeSubscribe(callback);
		return ((_a = this.events)[eventName] || (_a[eventName] = new SubscriptionManager())).add(callback);
	}
	onChangeSubscribe(callback) {
		const { events } = this;
		if (!events.change && !this.changeSubscriber) this.changeSubscriber = callback;
		else {
			if (!events.change) {
				events.change = new SubscriptionManager();
				events.change.add(this.changeSubscriber);
				this.changeSubscriber = void 0;
			}
			events.change.add(callback);
		}
		return () => {
			if (this.changeSubscriber === callback) this.changeSubscriber = void 0;
			else events.change?.remove(callback);
			this.stopIfUnobserved();
		};
	}
	/**
	* If we have no more change listeners by the start
	* of the next frame, stop active animations.
	*/
	stopIfUnobserved() {
		frame.read(() => {
			if (!this.changeSubscriber && !this.events.change?.getSize()) this.stop();
		});
	}
	clearListeners() {
		this.changeSubscriber = void 0;
		for (const eventManagers in this.events) this.events[eventManagers].clear();
	}
	/**
	* Attaches a passive effect to the `MotionValue`.
	*/
	attach(passiveEffect, stopPassiveEffect) {
		this.passiveEffect = passiveEffect;
		this.stopPassiveEffect = stopPassiveEffect;
	}
	/**
	* Sets the state of the `MotionValue`.
	*
	* @remarks
	*
	* ```jsx
	* const x = useMotionValue(0)
	* x.set(10)
	* ```
	*
	* @param latest - Latest value to set.
	* @param render - Whether to notify render subscribers. Defaults to `true`
	*
	* @public
	*/
	set(v) {
		if (!this.passiveEffect) this.updateAndNotify(v);
		else this.passiveEffect(v, this.updateAndNotify);
	}
	setWithVelocity(prev, current, delta) {
		this.set(current);
		this.prev = void 0;
		this.prevFrameValue = prev;
		this.prevUpdatedAt = this.updatedAt - delta;
	}
	/**
	* Set the state of the `MotionValue`, stopping any active animations,
	* effects, and resets velocity to `0`.
	*/
	jump(v, endAnimation = true) {
		this.updateAndNotify(v);
		this.prev = v;
		this.prevUpdatedAt = this.prevFrameValue = void 0;
		endAnimation && this.stop();
		if (this.stopPassiveEffect) this.stopPassiveEffect();
	}
	dirty() {
		this.notifyChange();
	}
	notifyChange() {
		const { current, changeSubscriber } = this;
		/**
		* One or the other exists. Subscribing during the direct
		* subscriber's call moves it into a new manager, which must not
		* then be notified for the same change.
		*/
		if (changeSubscriber) changeSubscriber(current);
		else this.events.change?.notify(current);
	}
	addDependent(dependent) {
		if (!this.dependents) this.dependents = /* @__PURE__ */ new Set();
		this.dependents.add(dependent);
	}
	removeDependent(dependent) {
		if (this.dependents) this.dependents.delete(dependent);
	}
	/**
	* Returns the latest state of `MotionValue`
	*
	* @returns - The latest state of `MotionValue`
	*
	* @public
	*/
	get() {
		if (collectMotionValues.current) collectMotionValues.current.push(this);
		return this.current;
	}
	/**
	* @public
	*/
	getPrevious() {
		return this.prev;
	}
	/**
	* Returns the latest velocity of `MotionValue`
	*
	* @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
	*
	* @public
	*/
	getVelocity() {
		const currentTime = time.now();
		if (!this.canTrackVelocity || this.prevFrameValue === void 0 || currentTime - this.updatedAt > MAX_VELOCITY_DELTA) return 0;
		const delta = Math.min(this.updatedAt - this.prevUpdatedAt, MAX_VELOCITY_DELTA);
		return /* @__PURE__ */ velocityPerSecond(parseFloat(this.current) - parseFloat(this.prevFrameValue), delta);
	}
	/**
	* Registers a new animation to control this `MotionValue`. Only one
	* animation can drive a `MotionValue` at one time.
	*
	* ```jsx
	* value.start()
	* ```
	*
	* @param animation - A function that starts the provided animation
	*/
	start(startAnimation) {
		this.stop();
		return new Promise((resolve) => {
			this.hasAnimated = true;
			/**
			* Complete synchronously via the callback rather than chaining a
			* second promise per animation. Guard against animations that
			* complete before startAnimation has returned.
			*/
			let isComplete = false;
			let animation;
			animation = startAnimation(() => {
				isComplete = true;
				this.events.animationComplete?.notify();
				if (this.animation === animation) this.clearAnimation();
				resolve();
			});
			if (!isComplete) this.animation = animation;
			this.events.animationStart?.notify();
		});
	}
	/**
	* Stop the currently active animation.
	*
	* @public
	*/
	stop() {
		if (this.animation) {
			this.animation.stop();
			if (this.events.animationCancel) this.events.animationCancel.notify();
		}
		this.clearAnimation();
	}
	/**
	* Returns `true` if this value is currently animating.
	*
	* @public
	*/
	isAnimating() {
		return !!this.animation;
	}
	clearAnimation() {
		this.animation = void 0;
	}
	/**
	* Destroy and clean up subscribers to this `MotionValue`.
	*
	* The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
	* handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
	* created a `MotionValue` via the `motionValue` function.
	*
	* @public
	*/
	destroy() {
		this.dependents?.clear();
		this.events.destroy?.notify();
		this.clearListeners();
		this.stop();
		if (this.stopPassiveEffect) this.stopPassiveEffect();
	}
};
function motionValue(init, options) {
	return new MotionValue(init, options);
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/animation/utils/resolve-transition.mjs
/**
* If `transition` has `inherit: true`, shallow-merge it with
* `parentTransition` (child keys win) and strip the `inherit` key.
* Otherwise return `transition` unchanged.
*/
function resolveTransition(transition, parentTransition) {
	if (transition?.inherit && parentTransition) {
		const { inherit: _, ...rest } = transition;
		return {
			...parentTransition,
			...rest
		};
	}
	return transition;
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/animation/utils/get-value-transition.mjs
function getValueTransition(transition, key) {
	const valueTransition = transition?.[key] ?? transition?.["default"] ?? transition;
	if (valueTransition !== transition) return resolveTransition(valueTransition, transition);
	return valueTransition;
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/animation/utils/default-transitions.mjs
var underDampedSpring = {
	type: "spring",
	stiffness: 500,
	damping: 25,
	restSpeed: 10
};
var criticallyDampedSpring = (target) => ({
	type: "spring",
	stiffness: 550,
	damping: target === 0 ? 2 * Math.sqrt(550) : 30,
	restSpeed: 10
});
var keyframesTransition = {
	type: "keyframes",
	duration: .8
};
/**
* Default easing curve is a slightly shallower version of
* the default browser easing curve.
*/
var ease = {
	type: "keyframes",
	ease: [
		.25,
		.1,
		.35,
		1
	],
	duration: .3
};
var getDefaultTransition = (valueKey, { keyframes }) => {
	if (keyframes.length > 2) return keyframesTransition;
	else if (transformProps.has(valueKey)) return valueKey.startsWith("scale") ? criticallyDampedSpring(keyframes[1]) : underDampedSpring;
	return ease;
};
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/animation/utils/is-transition-defined.mjs
var orchestrationKeys = /* @__PURE__ */ new Set([
	"when",
	"delay",
	"delayChildren",
	"staggerChildren",
	"staggerDirection",
	"repeat",
	"repeatType",
	"repeatDelay",
	"from",
	"elapsed"
]);
/**
* Decide whether a transition is defined on a given Transition.
* This filters out orchestration options and returns true
* if any options are left.
*/
function isTransitionDefined(transition) {
	for (const key in transition) if (!orchestrationKeys.has(key)) return true;
	return false;
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/animation/interfaces/motion-value.mjs
var animateMotionValue = (name, value, target, transition = {}, element, isHandoff) => (onComplete) => {
	const valueTransition = getValueTransition(transition, name) || {};
	/**
	* Most transition values are currently completely overwritten by value-specific
	* transitions. In the future it'd be nicer to blend these transitions. But for now
	* delay actually does inherit from the root transition if not value-specific.
	*/
	const delay = valueTransition.delay || transition.delay || 0;
	/**
	* Elapsed isn't a public transition option but can be passed through from
	* optimized appear effects in milliseconds.
	*/
	let { elapsed = 0 } = transition;
	elapsed = elapsed - /* @__PURE__ */ secondsToMilliseconds(delay);
	const options = {
		keyframes: Array.isArray(target) ? target : [null, target],
		ease: "easeOut",
		velocity: value.getVelocity(),
		...valueTransition,
		delay: -elapsed,
		onUpdate: (v) => {
			value.set(v);
			valueTransition.onUpdate && valueTransition.onUpdate(v);
		},
		onComplete: () => {
			onComplete();
			valueTransition.onComplete && valueTransition.onComplete();
		},
		name,
		motionValue: value,
		element: isHandoff ? void 0 : element
	};
	/**
	* If there's no transition defined for this value, we can generate
	* unique transition settings for this value.
	*/
	if (!isTransitionDefined(valueTransition)) Object.assign(options, getDefaultTransition(name, options));
	/**
	* Both WAAPI and our internal animation functions use durations
	* as defined by milliseconds, while our external API defines them
	* as seconds.
	*/
	options.duration && (options.duration = /* @__PURE__ */ secondsToMilliseconds(options.duration));
	options.repeatDelay && (options.repeatDelay = /* @__PURE__ */ secondsToMilliseconds(options.repeatDelay));
	/**
	* Support deprecated way to set initial value. Prefer keyframe syntax.
	*/
	if (options.from !== void 0) options.keyframes[0] = options.from;
	let shouldSkip = false;
	if (options.type === false || options.duration === 0 && !options.repeatDelay) {
		makeAnimationInstant(options);
		if (options.delay === 0) shouldSkip = true;
	}
	if (MotionGlobalConfig.instantAnimations || MotionGlobalConfig.skipAnimations || element?.shouldSkipAnimations || valueTransition.skipAnimations) {
		shouldSkip = true;
		makeAnimationInstant(options);
		options.delay = 0;
	}
	/**
	* If the transition type or easing has been explicitly set by the user
	* then we don't want to allow flattening the animation.
	*/
	options.allowFlatten = !valueTransition.type && !valueTransition.ease;
	/**
	* If we can or must skip creating the animation, and apply only
	* the final keyframe, do so. We also check once keyframes are resolved but
	* this early check prevents the need to create an animation at all.
	*/
	if (shouldSkip && !isHandoff && value.get() !== void 0) {
		const finalKeyframe = getFinalKeyframe(options.keyframes, valueTransition);
		if (finalKeyframe !== void 0) {
			frame.update(() => {
				options.onUpdate(finalKeyframe);
				options.onComplete();
			});
			return;
		}
	}
	return valueTransition.isSync ? new JSAnimation(options) : new AsyncMotionValueAnimation(options);
};
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/animation/utils/css-variables-conversion.mjs
/**
* Parse Framer's special CSS variable format into a CSS token and a fallback.
*
* ```
* `var(--foo, #fff)` => [`--foo`, '#fff']
* ```
*
* @param current
*/
var splitCSSVariableRegex = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function parseCSSVariable(current) {
	const match = splitCSSVariableRegex.exec(current);
	if (!match) return [,];
	const [, token1, token2, fallback] = match;
	return [`--${token1 ?? token2}`, fallback];
}
function getVariableValue(current, element, depth = 1) {
	`${current}`;
	const [token, fallback] = parseCSSVariable(current);
	if (!token) return;
	const resolved = window.getComputedStyle(element).getPropertyValue(token);
	if (resolved) {
		const trimmed = resolved.trim();
		return isNumericalString(trimmed) ? parseFloat(trimmed) : trimmed;
	}
	return isCSSVariableToken(fallback) ? getVariableValue(fallback, element, depth + 1) : fallback;
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/render/utils/resolve-variants.mjs
function getValueState(visualElement) {
	const state = [{}, {}];
	visualElement?.values.forEach((value, key) => {
		state[0][key] = value.get();
		state[1][key] = value.getVelocity();
	});
	return state;
}
function resolveVariantFromProps(props, definition, custom, visualElement) {
	const resolveFunction = (def) => typeof def === "function" ? def(custom !== void 0 ? custom : props.custom, ...getValueState(visualElement)) : def;
	/**
	* Resolve a function, then a variant label (which the function may have
	* returned), then a function again as the label may point to one. The
	* final function can only return a target object.
	*/
	definition = resolveFunction(definition);
	if (typeof definition === "string") definition = props.variants && props.variants[definition];
	return resolveFunction(definition);
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/render/utils/resolve-dynamic-variants.mjs
function resolveVariant(visualElement, definition, custom) {
	return resolveVariantFromProps(visualElement.getProps(), definition, custom, visualElement);
}
/**
* Exit variants resolve with AnimatePresence's custom, every other type
* with the element's own.
*/
var getTypeCustom = (visualElement, type) => type === "exit" ? visualElement.presenceContext?.custom : void 0;
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/render/utils/keys-position.mjs
var positionalKeys = /* @__PURE__ */ new Set([
	"width",
	"height",
	"top",
	"left",
	"right",
	"bottom",
	...transformPropOrder
]);
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/render/utils/is-keyframes-target.mjs
var isKeyframesTarget = (v) => {
	return Array.isArray(v);
};
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/render/utils/setters.mjs
/**
* Set VisualElement's MotionValue, creating a new MotionValue for it if
* it doesn't exist.
*/
function setMotionValue(visualElement, key, value) {
	if (visualElement.hasValue(key)) visualElement.getValue(key).set(value);
	else visualElement.addValue(key, motionValue(value));
}
function resolveFinalValueInKeyframes(v) {
	return isKeyframesTarget(v) ? v[v.length - 1] || 0 : v;
}
function setTarget(visualElement, definition) {
	let { transitionEnd = {}, transition = {}, ...target } = resolveVariant(visualElement, definition) || {};
	target = {
		...target,
		...transitionEnd
	};
	for (const key in target) setMotionValue(visualElement, key, resolveFinalValueInKeyframes(target[key]));
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/value/utils/is-motion-value.mjs
var isMotionValue = (value) => Boolean(value && value.getVelocity);
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/value/will-change/is.mjs
function isWillChangeMotionValue(value) {
	return Boolean(isMotionValue(value) && value.add);
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/value/will-change/add-will-change.mjs
function addValueToWillChange(visualElement, key) {
	const willChange = visualElement.getValue("willChange");
	/**
	* It could be that a user has set willChange to a regular MotionValue,
	* in which case we can't add the value to it.
	*/
	if (isWillChangeMotionValue(willChange)) return willChange.add(key);
	else if (!willChange && MotionGlobalConfig.WillChange) {
		const newWillChange = new MotionGlobalConfig.WillChange("auto");
		visualElement.addValue("willChange", newWillChange);
		newWillChange.add(key);
	}
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/render/dom/utils/camel-to-dash.mjs
function camelToDash(str) {
	return str.replace(/([A-Z])/g, (match) => `-${match.toLowerCase()}`);
}
var optimizedAppearDataAttribute = "data-" + camelToDash("framerAppearId");
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/animation/optimized-appear/get-appear-id.mjs
function getOptimisedAppearId(visualElement) {
	return visualElement.props[optimizedAppearDataAttribute];
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/animation/interfaces/visual-element-target.mjs
var isBrowser$1 = typeof window !== "undefined";
/**
* Decide whether we should block this animation. Previously, we achieved this
* just by checking whether the key was listed in protectedKeys, but this
* posed problems if an animation was triggered by afterChildren and protectedKeys
* had been set to true in the meantime.
*/
function shouldBlockAnimation({ protectedKeys, needsAnimating }, key) {
	const shouldBlock = key in protectedKeys && !needsAnimating[key];
	needsAnimating[key] = false;
	return shouldBlock;
}
function animateTarget(visualElement, targetAndTransition, { delay = 0, transitionOverride, type } = {}) {
	let { transition, transitionEnd, ...target } = targetAndTransition;
	const defaultTransition = visualElement.getDefaultTransition();
	transition = transition ? resolveTransition(transition, defaultTransition) : defaultTransition;
	const reduceMotion = transition?.reduceMotion;
	const skipAnimations = transition?.skipAnimations;
	if (transitionOverride) transition = transitionOverride;
	const animations = [];
	const animationTypeState = type && visualElement.animationState?.getState()[type];
	const path = transition?.path;
	if (path) path.animateVisualElement(visualElement, target, transition, delay, animations);
	for (const key in target) {
		const value = visualElement.getValue(key, visualElement.latestValues[key] ?? null);
		const valueTarget = target[key];
		if (valueTarget === void 0 || animationTypeState && shouldBlockAnimation(animationTypeState, key)) continue;
		const valueTransition = {
			delay,
			...getValueTransition(transition || {}, key)
		};
		if (skipAnimations) valueTransition.skipAnimations = true;
		/**
		* If the value is already at the defined target, skip the animation.
		* We still re-assert the value via frame.update to take precedence
		* over any stale transitionEnd callbacks from previous animations.
		*/
		const currentValue = value.get();
		if (currentValue !== void 0 && !value.isAnimating() && !Array.isArray(valueTarget) && valueTarget === currentValue && !valueTransition.velocity) {
			frame.update(() => value.set(valueTarget));
			continue;
		}
		/**
		* If this is the first time a value is being animated, check
		* to see if we're handling off from an existing animation.
		*/
		let isHandoff = false;
		if (isBrowser$1 && window.MotionHandoffAnimation) {
			const appearId = getOptimisedAppearId(visualElement);
			if (appearId) {
				const startTime = window.MotionHandoffAnimation(appearId, key, frame);
				if (startTime !== null) {
					valueTransition.startTime = startTime;
					isHandoff = true;
				}
			}
		}
		addValueToWillChange(visualElement, key);
		const shouldReduceMotion = reduceMotion ?? visualElement.shouldReduceMotion;
		value.start(animateMotionValue(key, value, valueTarget, shouldReduceMotion && positionalKeys.has(key) ? { type: false } : valueTransition, visualElement, isHandoff));
		const animation = value.animation;
		if (animation) animations.push(animation);
	}
	if (transitionEnd) {
		const applyTransitionEnd = () => frame.update(() => {
			transitionEnd && setTarget(visualElement, transitionEnd);
		});
		if (animations.length) Promise.all(animations).then(applyTransitionEnd);
		else applyTransitionEnd();
	}
	return animations;
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/animation/interfaces/visual-element-variant.mjs
function animateVariant(visualElement, variant, options = {}) {
	const resolved = resolveVariant(visualElement, variant, getTypeCustom(visualElement, options.type));
	const transition = options.transitionOverride || (resolved?.transition ?? (visualElement.getDefaultTransition() || {}));
	const getAnimation = () => Promise.all(resolved ? animateTarget(visualElement, resolved, options) : []);
	const getChildAnimations = (delay = 0) => {
		const { variantChildren } = visualElement;
		const { delayChildren = 0, staggerChildren, staggerDirection } = transition;
		const animations = [];
		variantChildren?.forEach((child) => {
			child.notify("AnimationStart", variant);
			animations.push(animateVariant(child, variant, {
				...options,
				delay: delay + (typeof delayChildren === "function" ? 0 : delayChildren) + calcChildStagger(variantChildren, child, delayChildren, staggerChildren, staggerDirection)
			}).then(() => child.notify("AnimationComplete", variant)));
		});
		return Promise.all(animations);
	};
	/**
	* when: "beforeChildren" | "afterChildren" runs this element's animation
	* and its children's in sequence.
	*/
	const { when } = transition;
	return when ? when === "beforeChildren" ? getAnimation().then(() => getChildAnimations()) : getChildAnimations().then(getAnimation) : Promise.all([getAnimation(), getChildAnimations(options.delay)]);
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/animation/interfaces/visual-element.mjs
function animateVisualElement(visualElement, definition, options = {}) {
	visualElement.notify("AnimationStart", definition);
	return (Array.isArray(definition) ? Promise.all(definition.map((variant) => animateVariant(visualElement, variant, options))) : typeof definition === "string" ? animateVariant(visualElement, definition, options) : Promise.all(animateTarget(visualElement, resolveVariant(visualElement, definition, options.custom), options))).then(() => {
		visualElement.notify("AnimationComplete", definition);
	});
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/value/types/auto.mjs
/**
* ValueType for "auto"
*/
var auto = {
	test: (v) => v === "auto",
	parse: (v) => v
};
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/value/types/test.mjs
/**
* Tests a provided value against a ValueType
*/
var testValueType = (v) => (type) => type.test(v);
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/value/types/dimensions.mjs
/**
* A list of value types commonly used for dimensions
*/
var dimensionValueTypes = [
	number,
	px,
	percent,
	degrees,
	vw,
	vh,
	auto
];
/**
* Tests a dimensional value against the list of dimension ValueTypes
*/
var findDimensionValueType = (v) => dimensionValueTypes.find(testValueType(v));
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/animation/keyframes/utils/is-none.mjs
function isNone(value) {
	if (typeof value === "number") return value === 0;
	else if (value !== null) return value === "none" || value === "0" || isZeroValueString(value);
	else return true;
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/animation/keyframes/utils/make-none-animatable.mjs
/**
* If we encounter keyframes like "none" or "0" and we also have keyframes like
* "#fff" or "200px 200px" we want to find a keyframe to serve as a template for
* the "none" keyframes. In this case "#fff" or "200px 200px" - then these get turned into
* zero equivalents, i.e. "#fff0" or "0px 0px".
*/
var invalidTemplates = /* @__PURE__ */ new Set([
	"auto",
	"none",
	"0"
]);
function makeNoneKeyframesAnimatable(unresolvedKeyframes, noneKeyframeIndexes, name) {
	let i = 0;
	let animatableTemplate = void 0;
	while (i < unresolvedKeyframes.length && !animatableTemplate) {
		const keyframe = unresolvedKeyframes[i];
		if (typeof keyframe === "string" && !invalidTemplates.has(keyframe) && hasComplexValues(keyframe)) animatableTemplate = unresolvedKeyframes[i];
		i++;
	}
	if (animatableTemplate && name) for (const noneIndex of noneKeyframeIndexes) {
		/**
		* A zero-valued template like "0%" is already its own
		* animatable none, so there's nothing to derive.
		*/
		if (unresolvedKeyframes[noneIndex] === animatableTemplate) continue;
		unresolvedKeyframes[noneIndex] = getAnimatableNone(name, animatableTemplate);
	}
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/animation/keyframes/DOMKeyframesResolver.mjs
var DOMKeyframesResolver = class extends KeyframeResolver {
	constructor(unresolvedKeyframes, onComplete, name, motionValue, element) {
		super(unresolvedKeyframes, onComplete, name, motionValue, element, true);
	}
	readKeyframes() {
		const { unresolvedKeyframes, element, name } = this;
		if (!element || !element.current) return;
		super.readKeyframes();
		/**
		* If any keyframe is a CSS variable, we need to find its value by sampling the element
		*/
		for (let i = 0; i < unresolvedKeyframes.length; i++) {
			let keyframe = unresolvedKeyframes[i];
			if (typeof keyframe === "string") {
				keyframe = keyframe.trim();
				if (isCSSVariableToken(keyframe)) {
					const resolved = getVariableValue(keyframe, element.current);
					if (resolved !== void 0) unresolvedKeyframes[i] = resolved;
					if (i === unresolvedKeyframes.length - 1) this.finalKeyframe = keyframe;
				}
			}
		}
		/**
		* Resolve "none" values. We do this potentially twice - once before and once after measuring keyframes.
		* This could be seen as inefficient but it's a trade-off to avoid measurements in more situations, which
		* have a far bigger performance impact.
		*/
		this.resolveNoneKeyframes();
		/**
		* Check to see if unit type has changed. If so schedule jobs that will
		* temporarily set styles to the destination keyframes.
		* Skip if we have more than two keyframes or this isn't a positional value.
		* TODO: We can throw if there are multiple keyframes and the value type changes.
		*/
		if (!positionalKeys.has(name) || unresolvedKeyframes.length !== 2) return;
		const [origin, target] = unresolvedKeyframes;
		if (typeof origin === "number" && typeof target === "number") return;
		const originType = findDimensionValueType(origin);
		const targetType = findDimensionValueType(target);
		if (containsCSSVariable(origin) !== containsCSSVariable(target) && positionalValues[name]) {
			this.needsMeasurement = true;
			return;
		}
		/**
		* Either we don't recognise these value types or we can animate between them.
		*/
		if (originType === targetType) return;
		/**
		* If both values are numbers or pixels, we can animate between them by
		* converting them to numbers.
		*/
		if (isNumOrPxType(originType) && isNumOrPxType(targetType)) for (let i = 0; i < unresolvedKeyframes.length; i++) {
			const value = unresolvedKeyframes[i];
			if (typeof value === "string") unresolvedKeyframes[i] = parseFloat(value);
		}
		else if (positionalValues[name])
 /**
		* Else, the only way to resolve this is by measuring the element.
		*/
		this.needsMeasurement = true;
	}
	resolveNoneKeyframes() {
		const { unresolvedKeyframes, name } = this;
		const noneKeyframeIndexes = [];
		for (let i = 0; i < unresolvedKeyframes.length; i++) if (unresolvedKeyframes[i] === null || isNone(unresolvedKeyframes[i])) noneKeyframeIndexes.push(i);
		if (noneKeyframeIndexes.length) makeNoneKeyframesAnimatable(unresolvedKeyframes, noneKeyframeIndexes, name);
	}
	measure() {
		const { element, name } = this;
		return positionalValues[name](window.getComputedStyle(element.current), () => element.measureViewportBox());
	}
	measureInitialState() {
		const { element, unresolvedKeyframes, name } = this;
		if (!element || !element.current) return;
		if (name === "height") this.suspendedScrollY = window.pageYOffset;
		this.measuredOrigin = this.measure();
		unresolvedKeyframes[0] = this.measuredOrigin;
		const measureKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
		if (measureKeyframe !== void 0) this.motionValue?.jump(measureKeyframe, false);
	}
	measureEndState() {
		const { element, unresolvedKeyframes } = this;
		if (!element || !element.current) return;
		this.motionValue?.jump(this.measuredOrigin, false);
		const finalKeyframeIndex = unresolvedKeyframes.length - 1;
		const finalKeyframe = unresolvedKeyframes[finalKeyframeIndex];
		unresolvedKeyframes[finalKeyframeIndex] = this.measure();
		if (finalKeyframe !== null && this.finalKeyframe === void 0) this.finalKeyframe = finalKeyframe;
		if (this.removedTransforms?.length) this.removedTransforms.forEach(([unsetTransformName, unsetTransformValue]) => {
			element.getValue(unsetTransformName).set(unsetTransformValue);
		});
		this.resolveNoneKeyframes();
	}
};
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/utils/border-radius.mjs
/**
* The four corner-radius longhands. Shared so the projection mixer, scale
* corrector, WAAPI px-value set and view-transition crop pass don't each carry
* their own copy. Order is irrelevant - every consumer mixes/corrects/animates
* each corner independently.
*/
var cornerRadiusProps = [
	"borderTopLeftRadius",
	"borderTopRightRadius",
	"borderBottomRightRadius",
	"borderBottomLeftRadius"
];
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/utils/is-html-element.mjs
/**
* Checks if an element is an HTML element in a way
* that works across iframes
*/
function isHTMLElement$1(element) {
	return isObject(element) && "offsetHeight" in element && !("ownerSVGElement" in element);
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/utils/is-svg-element.mjs
/**
* Checks if an element is an SVG element in a way
* that works across iframes
*/
function isSVGElement(element) {
	return isObject(element) && "ownerSVGElement" in element;
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/value/types/utils/get-as-type.mjs
/**
* Provided a value and a ValueType, returns the value as that value type.
*/
var getValueAsType = (value, type) => {
	return type && typeof value === "number" ? type.transform(value) : value;
};
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/utils/resolve-elements.mjs
function resolveElements(elementOrSelector, scope, selectorCache) {
	if (elementOrSelector == null) return [];
	if (elementOrSelector instanceof EventTarget) return [elementOrSelector];
	else if (typeof elementOrSelector === "string") {
		let root = document;
		if (scope) root = scope.current;
		const elements = selectorCache?.[elementOrSelector] ?? root.querySelectorAll(elementOrSelector);
		return elements ? Array.from(elements) : [];
	}
	return Array.from(elementOrSelector).filter((element) => element != null);
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/render/html/utils/build-transform.mjs
var translateAlias = {
	x: "translateX",
	y: "translateY",
	z: "translateZ",
	transformPerspective: "perspective"
};
var numTransforms = transformPropOrder.length;
/**
* Build a CSS transform style from individual x/y/scale etc properties.
*
* This outputs with a default order of transforms/scales/rotations, this can be customised by
* providing a transformTemplate function.
*/
function buildTransform(latestValues, transform, transformTemplate) {
	let transformString = "";
	let transformIsDefault = true;
	/**
	* Loop over all possible transforms in order, adding the ones that
	* are present to the transform string.
	*/
	for (let i = 0; i < numTransforms; i++) {
		const key = transformPropOrder[i];
		const value = latestValues[key];
		if (value === void 0) continue;
		let valueIsDefault = true;
		if (typeof value === "number") valueIsDefault = value === (key.startsWith("scale") ? 1 : 0);
		else {
			const parsed = parseFloat(value);
			valueIsDefault = key.startsWith("scale") ? parsed === 1 : parsed === 0;
		}
		if (!valueIsDefault || transformTemplate) {
			const valueAsType = getValueAsType(value, numberValueTypes[key]);
			if (!valueIsDefault) {
				transformIsDefault = false;
				const transformName = translateAlias[key] || key;
				transformString += `${transformName}(${valueAsType}) `;
			}
			if (transformTemplate) transform[key] = valueAsType;
		}
	}
	const pathRotation = latestValues.pathRotation;
	if (pathRotation) {
		transformIsDefault = false;
		transformString += `rotate(${getValueAsType(pathRotation, numberValueTypes.pathRotation)}) `;
	}
	transformString = transformString.trim();
	if (transformTemplate) transformString = transformTemplate(transform, transformIsDefault ? "" : transformString);
	else if (transformIsDefault) transformString = "none";
	return transformString;
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/render/html/utils/build-styles.mjs
function buildHTMLStyles(state, latestValues, transformTemplate) {
	const { style, vars, transformOrigin } = state;
	let hasTransform = false;
	let hasTransformOrigin = false;
	/**
	* Loop over all our latest animated values and decide whether to handle them
	* as a style or CSS variable.
	*
	* Transforms and transform origins are kept separately for further processing.
	*/
	for (const key in latestValues) {
		const value = latestValues[key];
		if (transformProps.has(key)) {
			hasTransform = true;
			continue;
		} else if (isCSSVariableName(key)) {
			vars[key] = value;
			continue;
		} else {
			const valueAsType = getValueAsType(value, numberValueTypes[key]);
			if (key.startsWith("origin")) {
				hasTransformOrigin = true;
				transformOrigin[key] = valueAsType;
			} else style[key] = valueAsType;
		}
	}
	if (!latestValues.transform) {
		if (hasTransform || transformTemplate) style.transform = buildTransform(latestValues, state.transform, transformTemplate);
		else if (style.transform)
 /**
		* If we have previously created a transform but currently don't have any,
		* reset transform style to none.
		*/
		style.transform = "none";
	}
	/**
	* Build a transformOrigin style. Uses the same defaults as the browser for
	* undefined origins.
	*/
	if (hasTransformOrigin) {
		const { originX = "50%", originY = "50%", originZ = 0 } = transformOrigin;
		style.transformOrigin = `${originX} ${originY} ${originZ}`;
	}
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/render/svg/utils/path.mjs
var dashKeys = {
	offset: "stroke-dashoffset",
	array: "stroke-dasharray"
};
var camelKeys = {
	offset: "strokeDashoffset",
	array: "strokeDasharray"
};
/**
* Build SVG path properties. Uses the path's measured length to convert
* our custom pathLength, pathSpacing and pathOffset into stroke-dashoffset
* and stroke-dasharray attributes.
*
* This function is mutative to reduce per-frame GC.
*
* Note: We use unitless values for stroke-dasharray and stroke-dashoffset
* because Safari incorrectly scales px values when the page is zoomed.
*/
function buildSVGPath(attrs, length, spacing = 1, offset = 0, useDashCase = true) {
	attrs.pathLength = 1;
	const keys = useDashCase ? dashKeys : camelKeys;
	attrs[keys.offset] = `${-offset}`;
	attrs[keys.array] = `${length} ${spacing}`;
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/render/svg/utils/build-attrs.mjs
var cssStyleProperties = [
	"transform",
	"opacity",
	"offsetDistance",
	"offsetPath",
	"offsetRotate",
	"offsetAnchor"
];
/**
* Build SVG visual attributes, like cx and style.transform
*/
function buildSVGAttrs(state, { attrX, attrY, attrScale, pathLength, pathSpacing = 1, pathOffset = 0, ...latest }, isSVGTag, transformTemplate, styleProp) {
	buildHTMLStyles(state, latest, transformTemplate);
	/**
	* For svg tags we just want to make sure viewBox is animatable and treat all the styles
	* as normal HTML tags.
	*/
	if (isSVGTag) {
		if (state.style.viewBox) state.attrs.viewBox = state.style.viewBox;
		return;
	}
	state.attrs = state.style;
	state.style = {};
	const { attrs, style } = state;
	for (const key of cssStyleProperties) if (attrs[key] !== void 0) {
		style[key] = attrs[key];
		delete attrs[key];
	}
	if (style.transform || attrs.transformOrigin) {
		style.transformOrigin = attrs.transformOrigin ?? "50% 50%";
		delete attrs.transformOrigin;
	}
	if (style.transform) {
		/**
		* SVG's element transform-origin uses its own median as a reference.
		* Therefore, transformBox becomes a fill-box
		*/
		style.transformBox = styleProp?.transformBox ?? "fill-box";
		delete attrs.transformBox;
	}
	if (attrX !== void 0) attrs.x = attrX;
	if (attrY !== void 0) attrs.y = attrY;
	if (attrScale !== void 0) attrs.scale = attrScale;
	if (pathLength !== void 0) buildSVGPath(attrs, pathLength, pathSpacing, pathOffset, false);
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/projection/geometry/conversion.mjs
/**
* Bounding boxes tend to be defined as top, left, right, bottom. For various operations
* it's easier to consider each axis individually. This function returns a bounding box
* as a map of single-axis min/max values.
*/
function convertBoundingBoxToBox({ top, left, right, bottom }) {
	return {
		x: {
			min: left,
			max: right
		},
		y: {
			min: top,
			max: bottom
		}
	};
}
function convertBoxToBoundingBox({ x, y }) {
	return {
		top: y.min,
		right: x.max,
		bottom: y.max,
		left: x.min
	};
}
/**
* Applies a TransformPoint function to a bounding box. TransformPoint is usually a function
* provided by Framer to allow measured points to be corrected for device scaling. This is used
* when measuring DOM elements and DOM event points.
*/
function transformBoxPoints(point, transformPoint) {
	if (!transformPoint) return point;
	const topLeft = transformPoint({
		x: point.left,
		y: point.top
	});
	const bottomRight = transformPoint({
		x: point.right,
		y: point.bottom
	});
	return {
		top: topLeft.y,
		left: topLeft.x,
		bottom: bottomRight.y,
		right: bottomRight.x
	};
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/projection/utils/has-transform.mjs
function isIdentityScale(scale) {
	return scale === void 0 || scale === 1;
}
function hasScale({ scale, scaleX, scaleY }) {
	return !isIdentityScale(scale) || !isIdentityScale(scaleX) || !isIdentityScale(scaleY);
}
function hasTransform(values) {
	return hasScale(values) || has2DTranslate(values) || values.z || values.rotate || values.rotateX || values.rotateY || values.skewX || values.skewY;
}
function has2DTranslate(values) {
	return is2DTranslate(values.x) || is2DTranslate(values.y);
}
function is2DTranslate(value) {
	return value && value !== "0%";
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/projection/geometry/delta-apply.mjs
/**
* Scales a point based on a factor and an originPoint
*/
function scalePoint(point, scale, originPoint) {
	return originPoint + scale * (point - originPoint);
}
/**
* Applies a translate/scale delta to a point
*/
function applyPointDelta(point, translate, scale, originPoint, boxScale) {
	if (boxScale !== void 0) point = scalePoint(point, boxScale, originPoint);
	return scalePoint(point, scale, originPoint) + translate;
}
/**
* Applies a translate/scale delta to an axis
*/
function applyAxisDelta(axis, translate = 0, scale = 1, originPoint, boxScale) {
	axis.min = applyPointDelta(axis.min, translate, scale, originPoint, boxScale);
	axis.max = applyPointDelta(axis.max, translate, scale, originPoint, boxScale);
}
/**
* Applies a translate/scale delta to a box
*/
function applyBoxDelta(box, { x, y }) {
	applyAxisDelta(box.x, x.translate, x.scale, x.originPoint);
	applyAxisDelta(box.y, y.translate, y.scale, y.originPoint);
}
var TREE_SCALE_SNAP_MIN = .999999999999;
var TREE_SCALE_SNAP_MAX = 1.0000000000001;
/**
* Apply a tree of deltas to a box. We do this to calculate the effect of all the transforms
* in a tree upon our box before then calculating how to project it into our desired viewport-relative box
*
* This is the final nested loop within updateLayoutDelta for future refactoring
*/
function applyTreeDeltas(box, treeScale, treePath, isSharedTransition = false) {
	const treeLength = treePath.length;
	if (!treeLength) return;
	treeScale.x = treeScale.y = 1;
	let node;
	let delta;
	for (let i = 0; i < treeLength; i++) {
		node = treePath[i];
		delta = node.projectionDelta;
		/**
		* TODO: Prefer to remove this, but currently we have motion components with
		* display: contents in Framer.
		*/
		const { visualElement } = node.options;
		if (visualElement && visualElement.props.style && visualElement.props.style.display === "contents") continue;
		if (isSharedTransition && node.options.layoutScroll && node.scroll && node !== node.root) {
			translateAxis(box.x, -node.scroll.offset.x);
			translateAxis(box.y, -node.scroll.offset.y);
		}
		if (delta) {
			treeScale.x *= delta.x.scale;
			treeScale.y *= delta.y.scale;
			applyBoxDelta(box, delta);
		}
		if (isSharedTransition && hasTransform(node.latestValues)) transformBox(box, node.latestValues, node.layout?.layoutBox);
	}
	/**
	* Snap tree scale back to 1 if it's within a non-perceivable threshold.
	* This will help reduce useless scales getting rendered.
	*/
	if (treeScale.x < TREE_SCALE_SNAP_MAX && treeScale.x > TREE_SCALE_SNAP_MIN) treeScale.x = 1;
	if (treeScale.y < TREE_SCALE_SNAP_MAX && treeScale.y > TREE_SCALE_SNAP_MIN) treeScale.y = 1;
}
function translateAxis(axis, distance) {
	axis.min += distance;
	axis.max += distance;
}
/**
* Apply a transform to an axis from the latest resolved motion values.
* This function basically acts as a bridge between a flat motion value map
* and applyAxisDelta
*/
function transformAxis(axis, axisTranslate, axisScale, boxScale, axisOrigin = .5) {
	applyAxisDelta(axis, axisTranslate, axisScale, mixNumber$1(axis.min, axis.max, axisOrigin), boxScale);
}
function resolveAxisTranslate(value, axis) {
	if (typeof value === "string") return parseFloat(value) / 100 * (axis.max - axis.min);
	return value;
}
/**
* Apply a transform to a box from the latest resolved motion values.
*/
function transformBox(box, transform, sourceBox) {
	const resolveBox = sourceBox ?? box;
	transformAxis(box.x, resolveAxisTranslate(transform.x, resolveBox.x), transform.scaleX, transform.scale, transform.originX);
	transformAxis(box.y, resolveAxisTranslate(transform.y, resolveBox.y), transform.scaleY, transform.scale, transform.originY);
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/projection/utils/measure.mjs
function measureViewportBox(instance, transformPoint) {
	return convertBoundingBoxToBox(transformBoxPoints(instance.getBoundingClientRect(), transformPoint));
}
function measurePageBox(element, rootProjectionNode, transformPagePoint) {
	const viewportBox = measureViewportBox(element, transformPagePoint);
	const { scroll } = rootProjectionNode;
	if (scroll) {
		translateAxis(viewportBox.x, scroll.offset.x);
		translateAxis(viewportBox.y, scroll.offset.y);
	}
	return viewportBox;
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/frameloop/microtask.mjs
var { schedule: microtask, cancel: cancelMicrotask } = /* @__PURE__ */ createRenderBatcher(queueMicrotask, false);
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/gestures/drag/state/is-active.mjs
var isDragging = {
	x: false,
	y: false
};
function isDragActive() {
	return isDragging.x || isDragging.y;
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/gestures/drag/state/set-active.mjs
function setDragLock(axis) {
	if (axis === "x" || axis === "y") if (isDragging[axis]) return null;
	else {
		isDragging[axis] = true;
		return () => {
			isDragging[axis] = false;
		};
	}
	else if (isDragging.x || isDragging.y) return null;
	else {
		isDragging.x = isDragging.y = true;
		return () => {
			isDragging.x = isDragging.y = false;
		};
	}
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/gestures/utils/setup.mjs
function setupGesture(elementOrSelector, options) {
	const elements = resolveElements(elementOrSelector);
	const gestureAbortController = new AbortController();
	const eventOptions = {
		passive: true,
		...options,
		signal: gestureAbortController.signal
	};
	const cancel = () => gestureAbortController.abort();
	return [
		elements,
		eventOptions,
		cancel
	];
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/gestures/hover.mjs
function isValidHover(event) {
	return !(event.pointerType === "touch" || isDragActive());
}
/**
* Create a hover gesture. hover() is different to .addEventListener("pointerenter")
* in that it has an easier syntax, filters out polyfilled touch events, interoperates
* with drag gestures, and automatically removes the "pointerleave" event listener when the hover ends.
*
* @public
*/
function hover(elementOrSelector, onHoverStart, options = {}) {
	const [elements, eventOptions, cancel] = setupGesture(elementOrSelector, options);
	elements.forEach((element) => {
		let isPressed = false;
		let deferredHoverEnd = false;
		let hoverEndCallback;
		const removePointerLeave = () => {
			element.removeEventListener("pointerleave", onPointerLeave);
		};
		const endHover = (event) => {
			if (hoverEndCallback) {
				hoverEndCallback(event);
				hoverEndCallback = void 0;
			}
			removePointerLeave();
		};
		const onPointerUp = (event) => {
			isPressed = false;
			window.removeEventListener("pointerup", onPointerUp);
			window.removeEventListener("pointercancel", onPointerUp);
			if (deferredHoverEnd) {
				deferredHoverEnd = false;
				endHover(event);
			}
		};
		const onPointerDown = () => {
			isPressed = true;
			window.addEventListener("pointerup", onPointerUp, eventOptions);
			window.addEventListener("pointercancel", onPointerUp, eventOptions);
		};
		const onPointerLeave = (leaveEvent) => {
			if (leaveEvent.pointerType === "touch") return;
			if (isPressed) {
				deferredHoverEnd = true;
				return;
			}
			endHover(leaveEvent);
		};
		const onPointerEnter = (enterEvent) => {
			if (!isValidHover(enterEvent)) return;
			deferredHoverEnd = false;
			const onHoverEnd = onHoverStart(element, enterEvent);
			if (typeof onHoverEnd !== "function") return;
			hoverEndCallback = onHoverEnd;
			element.addEventListener("pointerleave", onPointerLeave, eventOptions);
		};
		element.addEventListener("pointerenter", onPointerEnter, eventOptions);
		element.addEventListener("pointerdown", onPointerDown, eventOptions);
	});
	return cancel;
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/gestures/utils/is-node-or-child.mjs
/**
* Recursively traverse up the tree to check whether the provided child node
* is the parent or a descendant of it.
*
* @param parent - Element to find
* @param child - Element to test against parent
*/
var isNodeOrChild = (parent, child) => {
	if (!child) return false;
	else if (parent === child) return true;
	else return isNodeOrChild(parent, child.parentElement);
};
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/gestures/utils/is-primary-pointer.mjs
var isPrimaryPointer = (event) => {
	if (event.pointerType === "mouse") return typeof event.button !== "number" || event.button <= 0;
	else
 /**
	* isPrimary is true for all mice buttons, whereas every touch point
	* is regarded as its own input. So subsequent concurrent touch points
	* will be false.
	*
	* Specifically match against false here as incomplete versions of
	* PointerEvents in very old browser might have it set as undefined.
	*/
	return event.isPrimary !== false;
};
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/gestures/press/utils/is-keyboard-accessible.mjs
var keyboardAccessibleElements = /* @__PURE__ */ new Set([
	"BUTTON",
	"INPUT",
	"SELECT",
	"TEXTAREA",
	"A"
]);
/**
* Checks if an element is natively keyboard accessible (focusable).
* Used by the press gesture to determine if we need to add tabIndex.
*/
function isElementKeyboardAccessible(element) {
	return keyboardAccessibleElements.has(element.tagName) || element.isContentEditable === true;
}
var textInputElements = /* @__PURE__ */ new Set([
	"INPUT",
	"SELECT",
	"TEXTAREA"
]);
/**
* Checks if an element has text selection or direct interaction behavior
* that should block drag gestures from starting.
*
* This specifically targets form controls where the user might want to select
* text or interact with the control (e.g., sliders, dropdowns).
*
* Buttons and links are NOT included because they don't have click-and-move
* actions of their own - they only respond to click events, so dragging
* should still work when initiated from these elements.
*/
function isElementTextInput(element) {
	return textInputElements.has(element.tagName) || element.isContentEditable === true;
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/gestures/press/utils/state.mjs
var isPressing = /* @__PURE__ */ new WeakSet();
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/gestures/press/utils/keyboard.mjs
/**
* Filter out events that are not "Enter" keys.
*/
function filterEvents(callback) {
	return (event) => {
		if (event.key !== "Enter") return;
		callback(event);
	};
}
function firePointerEvent(target, type) {
	target.dispatchEvent(new PointerEvent("pointer" + type, {
		isPrimary: true,
		bubbles: true
	}));
}
var enableKeyboardPress = (focusEvent, eventOptions) => {
	const element = focusEvent.currentTarget;
	if (!element) return;
	const handleKeydown = filterEvents(() => {
		if (isPressing.has(element)) return;
		firePointerEvent(element, "down");
		const handleKeyup = filterEvents(() => {
			firePointerEvent(element, "up");
		});
		const handleBlur = () => firePointerEvent(element, "cancel");
		element.addEventListener("keyup", handleKeyup, eventOptions);
		element.addEventListener("blur", handleBlur, eventOptions);
	});
	element.addEventListener("keydown", handleKeydown, eventOptions);
	/**
	* Add an event listener that fires on blur to remove the keydown events.
	*/
	element.addEventListener("blur", () => element.removeEventListener("keydown", handleKeydown), eventOptions);
};
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/gestures/press/index.mjs
/**
* Filter out events that are not primary pointer events, or are triggering
* while a Motion gesture is active.
*/
function isValidPressEvent(event) {
	return isPrimaryPointer(event) && !isDragActive();
}
var claimedPointerDownEvents = /* @__PURE__ */ new WeakSet();
/**
* Create a press gesture.
*
* Press is different to `"pointerdown"`, `"pointerup"` in that it
* automatically filters out secondary pointer events like right
* click and multitouch.
*
* It also adds accessibility support for keyboards, where
* an element with a press gesture will receive focus and
*  trigger on Enter `"keydown"` and `"keyup"` events.
*
* This is different to a browser's `"click"` event, which does
* respond to keyboards but only for the `"click"` itself, rather
* than the press start and end/cancel. The element also needs
* to be focusable for this to work, whereas a press gesture will
* make an element focusable by default.
*
* @public
*/
function press(targetOrSelector, onPressStart, options = {}) {
	const [targets, eventOptions, cancelEvents] = setupGesture(targetOrSelector, options);
	const startPress = (startEvent) => {
		const target = startEvent.currentTarget;
		if (!isValidPressEvent(startEvent)) return;
		if (claimedPointerDownEvents.has(startEvent)) return;
		isPressing.add(target);
		if (options.stopPropagation) claimedPointerDownEvents.add(startEvent);
		const onPressEnd = onPressStart(target, startEvent);
		/**
		* End listeners run in the capture phase so a descendant calling
		* stopPropagation() in its own pointerup handler can't prevent the
		* press gesture from ending. This also keeps the gesture-end
		* ordering consistent with the drag gesture. See #2794.
		*/
		const endEventOptions = {
			...eventOptions,
			capture: true
		};
		const onPointerEnd = (endEvent, success) => {
			window.removeEventListener("pointerup", onPointerUp, endEventOptions);
			window.removeEventListener("pointercancel", onPointerCancel, endEventOptions);
			if (isPressing.has(target)) isPressing.delete(target);
			if (!isValidPressEvent(endEvent)) return;
			if (typeof onPressEnd === "function") onPressEnd(endEvent, { success });
		};
		const onPointerUp = (upEvent) => {
			onPointerEnd(upEvent, target === window || target === document || options.useGlobalTarget || isNodeOrChild(target, upEvent.target));
		};
		const onPointerCancel = (cancelEvent) => {
			onPointerEnd(cancelEvent, false);
		};
		window.addEventListener("pointerup", onPointerUp, endEventOptions);
		window.addEventListener("pointercancel", onPointerCancel, endEventOptions);
	};
	targets.forEach((target) => {
		(options.useGlobalTarget ? window : target).addEventListener("pointerdown", startPress, eventOptions);
		if (isHTMLElement$1(target)) {
			target.addEventListener("focus", (event) => enableKeyboardPress(event, eventOptions));
			if (!isElementKeyboardAccessible(target) && !target.hasAttribute("tabindex")) target.tabIndex = 0;
		}
	});
	return cancelEvents;
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/resize/handle-element.mjs
var resizeHandlers = /* @__PURE__ */ new WeakMap();
var observer;
var getSize = (borderBoxAxis, svgAxis, htmlAxis) => (target, borderBoxSize) => {
	if (borderBoxSize && borderBoxSize[0]) return borderBoxSize[0][borderBoxAxis + "Size"];
	else if (isSVGElement(target) && "getBBox" in target) return target.getBBox()[svgAxis];
	else return target[htmlAxis];
};
var getWidth = /*@__PURE__*/ getSize("inline", "width", "offsetWidth");
var getHeight = /*@__PURE__*/ getSize("block", "height", "offsetHeight");
function notifyTarget({ target, borderBoxSize }) {
	resizeHandlers.get(target)?.forEach((handler) => {
		handler(target, {
			get width() {
				return getWidth(target, borderBoxSize);
			},
			get height() {
				return getHeight(target, borderBoxSize);
			}
		});
	});
}
function notifyAll(entries) {
	entries.forEach(notifyTarget);
}
function createResizeObserver() {
	if (typeof ResizeObserver === "undefined") return;
	observer = new ResizeObserver(notifyAll);
}
function resizeElement(target, handler) {
	if (!observer) createResizeObserver();
	const elements = resolveElements(target);
	elements.forEach((element) => {
		let elementHandlers = resizeHandlers.get(element);
		if (!elementHandlers) {
			elementHandlers = /* @__PURE__ */ new Set();
			resizeHandlers.set(element, elementHandlers);
		}
		elementHandlers.add(handler);
		observer?.observe(element);
	});
	return () => {
		elements.forEach((element) => {
			const elementHandlers = resizeHandlers.get(element);
			elementHandlers?.delete(handler);
			if (!elementHandlers?.size) observer?.unobserve(element);
		});
	};
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/resize/handle-window.mjs
var windowCallbacks = /* @__PURE__ */ new Set();
var windowResizeHandler;
function createWindowResizeHandler() {
	windowResizeHandler = () => {
		const info = {
			get width() {
				return window.innerWidth;
			},
			get height() {
				return window.innerHeight;
			}
		};
		windowCallbacks.forEach((callback) => callback(info));
	};
	window.addEventListener("resize", windowResizeHandler);
}
function resizeWindow(callback) {
	windowCallbacks.add(callback);
	if (!windowResizeHandler) createWindowResizeHandler();
	return () => {
		windowCallbacks.delete(callback);
		if (!windowCallbacks.size && typeof windowResizeHandler === "function") {
			window.removeEventListener("resize", windowResizeHandler);
			windowResizeHandler = void 0;
		}
	};
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/resize/index.mjs
function resize(a, b) {
	return typeof a === "function" ? resizeWindow(a) : resizeElement(a, b);
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/stats/buffer.mjs
var statsBuffer = {
	value: null,
	addProjectionMetrics: null
};
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/utils/is-svg-svg-element.mjs
/**
* Checks if an element is specifically an SVGSVGElement (the root SVG element)
* in a way that works across iframes
*/
function isSVGSVGElement(element) {
	return isSVGElement(element) && element.tagName === "svg";
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/value/utils/as-number.mjs
var asNumber = (v) => typeof v === "number" ? v : parseFloat(v);
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/projection/geometry/models.mjs
var createAxisDelta = () => ({
	translate: 0,
	scale: 1,
	origin: 0,
	originPoint: 0
});
var createDelta = () => ({
	x: createAxisDelta(),
	y: createAxisDelta()
});
var createAxis = () => ({
	min: 0,
	max: 0
});
var createBox = () => ({
	x: createAxis(),
	y: createAxis()
});
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/render/store.mjs
var visualElementStore = /* @__PURE__ */ new WeakMap();
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/render/utils/is-animation-controls.mjs
function isAnimationControls(v) {
	return v !== null && typeof v === "object" && typeof v.start === "function";
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/render/utils/is-variant-label.mjs
/**
* Decides if the supplied variable is variant label
*/
function isVariantLabel(v) {
	return typeof v === "string" || Array.isArray(v);
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/render/utils/variant-props.mjs
var variantPriorityOrder = [
	"animate",
	"whileInView",
	"whileFocus",
	"whileHover",
	"whileTap",
	"whileDrag",
	"exit"
];
var variantProps = ["initial", ...variantPriorityOrder];
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/render/utils/is-controlling-variants.mjs
function isControllingVariants(props) {
	if (isAnimationControls(props.animate)) return true;
	for (let i = 0; i < variantProps.length; i++) if (isVariantLabel(props[variantProps[i]])) return true;
	return false;
}
function isVariantNode(props) {
	return Boolean(isControllingVariants(props) || props.variants);
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/render/utils/motion-values.mjs
/**
* Updates motion values from props changes.
* Uses `any` type for element to avoid circular dependencies with VisualElement.
*/
function updateMotionValuesFromProps(element, next, prev) {
	for (const key in next) {
		const nextValue = next[key];
		const prevValue = prev[key];
		if (isMotionValue(nextValue))
 /**
		* If this is a motion value found in props or style, we want to add it
		* to our visual element's motion value map.
		*/
		element.addValue(key, nextValue);
		else if (isMotionValue(prevValue))
 /**
		* If we're swapping from a motion value to a static value,
		* create a new motion value from that
		*/
		element.addValue(key, motionValue(nextValue, { owner: element }));
		else if (prevValue !== nextValue)
 /**
		* If this is a flat value that has changed, update the motion value
		* or create one if it doesn't exist. We only want to do this if we're
		* not handling the value with our animation state.
		*/
		if (element.hasValue(key)) {
			const existingValue = element.getValue(key);
			if (existingValue.liveStyle === true) existingValue.jump(nextValue);
			else if (!existingValue.hasAnimated) existingValue.set(nextValue);
		} else {
			const latestValue = element.getStaticValue(key);
			element.addValue(key, motionValue(latestValue !== void 0 ? latestValue : nextValue, { owner: element }));
		}
	}
	for (const key in prev) if (next[key] === void 0) element.removeValue(key);
	return next;
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/render/utils/reduced-motion/state.mjs
var prefersReducedMotion = { current: null };
var hasReducedMotionListener = { current: false };
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/render/utils/reduced-motion/index.mjs
var isBrowser = typeof window !== "undefined";
function initPrefersReducedMotion() {
	hasReducedMotionListener.current = true;
	if (!isBrowser) return;
	if (window.matchMedia) {
		const motionMediaQuery = window.matchMedia("(prefers-reduced-motion)");
		const setReducedMotionPreferences = () => prefersReducedMotion.current = motionMediaQuery.matches;
		motionMediaQuery.addEventListener("change", setReducedMotionPreferences);
		setReducedMotionPreferences();
	} else prefersReducedMotion.current = false;
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/render/VisualElement.mjs
var propEventHandlers = [
	"AnimationStart",
	"AnimationComplete",
	"Update",
	"BeforeLayoutMeasure",
	"LayoutMeasure",
	"LayoutAnimationStart",
	"LayoutAnimationComplete"
];
/**
* Static feature definitions - can be injected by framework layer
*/
var featureDefinitions = {};
/**
* Set feature definitions for all VisualElements.
* This should be called by the framework layer (e.g., framer-motion) during initialization.
*/
function setFeatureDefinitions(definitions) {
	featureDefinitions = definitions;
}
/**
* Get the current feature definitions
*/
function getFeatureDefinitions() {
	return featureDefinitions;
}
/**
* A VisualElement is an imperative abstraction around UI elements such as
* HTMLElement, SVGElement, Three.Object3D etc.
*/
var VisualElement = class {
	/**
	* This method takes React props and returns found MotionValues. For example, HTML
	* MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
	*
	* This isn't an abstract method as it needs calling in the constructor, but it is
	* intended to be one.
	*/
	scrapeMotionValuesFromProps(_props, _prevProps, _visualElement) {
		return {};
	}
	constructor({ parent, props, presenceContext, reducedMotionConfig, skipAnimations, blockInitialAnimation, visualState }, options = {}) {
		/**
		* A reference to the current underlying Instance, e.g. a HTMLElement
		* or Three.Mesh etc.
		*/
		this.current = null;
		/**
		* A set containing references to this VisualElement's children.
		*/
		this.children = /* @__PURE__ */ new Set();
		/**
		* Determine what role this visual element should take in the variant tree.
		*/
		this.isVariantNode = false;
		this.isControllingVariants = false;
		/**
		* Decides whether this VisualElement should animate in reduced motion
		* mode.
		*
		* TODO: This is currently set on every individual VisualElement but feels
		* like it could be set globally.
		*/
		this.shouldReduceMotion = null;
		/**
		* Decides whether animations should be skipped for this VisualElement.
		* Useful for E2E tests and visual regression testing.
		*/
		this.shouldSkipAnimations = false;
		/**
		* A map of all motion values attached to this visual element. Motion
		* values are source of truth for any given animated value. A motion
		* value might be provided externally by the component via props.
		*/
		this.values = /* @__PURE__ */ new Map();
		this.KeyframeResolver = KeyframeResolver;
		/**
		* Cleanup functions for active features (hover/tap/exit etc)
		*/
		this.features = {};
		/**
		* A map of every subscription that binds the provided or generated
		* motion values onChange listeners to this visual element.
		*/
		this.valueSubscriptions = /* @__PURE__ */ new Map();
		/**
		* A reference to the previously-provided motion values as returned
		* from scrapeMotionValuesFromProps. We use the keys in here to determine
		* if any motion values need to be removed after props are updated.
		*/
		this.prevMotionValues = {};
		/**
		* Track whether this element has been mounted before, to detect
		* remounts after Suspense unmount/remount cycles.
		*/
		this.hasBeenMounted = false;
		/**
		* An object containing a SubscriptionManager for each active event.
		*/
		this.events = {};
		/**
		* An object containing an unsubscribe function for each prop event subscription.
		* For example, every "Update" event can have multiple subscribers via
		* VisualElement.on(), but only one of those can be defined via the onUpdate prop.
		*/
		this.propEventSubscriptions = {};
		this.notifyUpdate = () => this.notify("Update", this.latestValues);
		this.render = () => {
			if (!this.current) return;
			this.triggerBuild();
			this.renderInstance(this.current, this.renderState, this.props.style, this.projection);
		};
		this.renderScheduledAt = 0;
		this.scheduleRender = () => {
			const now = time.now();
			if (this.renderScheduledAt < now) {
				this.renderScheduledAt = now;
				frame.render(this.render, false, true);
			}
		};
		const { latestValues, renderState } = visualState;
		this.latestValues = latestValues;
		this.baseTarget = { ...latestValues };
		this.initialValues = props.initial ? { ...latestValues } : {};
		this.renderState = renderState;
		this.parent = parent;
		this.props = props;
		this.presenceContext = presenceContext;
		this.depth = parent ? parent.depth + 1 : 0;
		this.reducedMotionConfig = reducedMotionConfig;
		this.skipAnimationsConfig = skipAnimations;
		this.options = options;
		this.blockInitialAnimation = Boolean(blockInitialAnimation);
		this.isControllingVariants = isControllingVariants(props);
		this.isVariantNode = isVariantNode(props);
		if (this.isVariantNode) this.variantChildren = /* @__PURE__ */ new Set();
		this.manuallyAnimateOnMount = Boolean(parent && parent.current);
		/**
		* Any motion values that are provided to the element when created
		* aren't yet bound to the element, as this would technically be impure.
		* However, we iterate through the motion values and set them to the
		* initial values for this component.
		*
		* TODO: This is impure and we should look at changing this to run on mount.
		* Doing so will break some tests but this isn't necessarily a breaking change,
		* more a reflection of the test.
		*/
		const { willChange, ...initialMotionValues } = this.scrapeMotionValuesFromProps(props, {}, this);
		for (const key in initialMotionValues) {
			const value = initialMotionValues[key];
			if (latestValues[key] !== void 0 && isMotionValue(value)) value.set(latestValues[key]);
		}
	}
	mount(instance) {
		/**
		* If this element has been mounted before (e.g. after a Suspense
		* unmount/remount), reset motion values to their initial state
		* so animations replay correctly from initial → animate.
		*/
		if (this.hasBeenMounted) for (const key in this.initialValues) {
			this.values.get(key)?.jump(this.initialValues[key]);
			this.latestValues[key] = this.initialValues[key];
		}
		this.current = instance;
		visualElementStore.set(instance, this);
		if (this.projection && !this.projection.instance) this.projection.mount(instance);
		/**
		* Join the closest variant node above, so its variant changes
		* propagate here, unless inherit={false} cuts the chain.
		*/
		if (this.isVariantNode && !this.isControllingVariants) {
			let node = this;
			do
				node = node.props.inherit !== false && node.parent;
			while (node && !node.isVariantNode);
			if (node) {
				const { variantChildren } = node;
				variantChildren.add(this);
				this.removeFromVariantTree = () => variantChildren.delete(this);
			}
		}
		this.values.forEach((value, key) => this.bindToMotionValue(key, value));
		/**
		* Determine reduced motion preference. Only initialize the matchMedia
		* listener if we actually need the dynamic value (i.e., when config
		* is neither "never" nor "always").
		*/
		if (this.reducedMotionConfig === "never") this.shouldReduceMotion = false;
		else if (this.reducedMotionConfig === "always") this.shouldReduceMotion = true;
		else {
			if (!hasReducedMotionListener.current) initPrefersReducedMotion();
			this.shouldReduceMotion = prefersReducedMotion.current;
		}
		/**
		* Set whether animations should be skipped based on the config.
		*/
		this.shouldSkipAnimations = this.skipAnimationsConfig ?? false;
		this.parent?.addChild(this);
		this.update(this.props, this.presenceContext);
		this.hasBeenMounted = true;
	}
	unmount() {
		this.projection && this.projection.unmount();
		cancelFrame(this.notifyUpdate);
		cancelFrame(this.render);
		this.valueSubscriptions.forEach((remove) => remove());
		this.valueSubscriptions.clear();
		this.removeFromVariantTree && this.removeFromVariantTree();
		this.parent?.removeChild(this);
		for (const key in this.events) this.events[key].clear();
		for (const key in this.features) {
			const feature = this.features[key];
			if (feature) {
				feature.unmount();
				feature.isMounted = false;
			}
		}
		this.current = null;
	}
	addChild(child) {
		this.children.add(child);
		this.enteringChildren ?? (this.enteringChildren = /* @__PURE__ */ new Set());
		this.enteringChildren.add(child);
	}
	removeChild(child) {
		this.children.delete(child);
		this.enteringChildren && this.enteringChildren.delete(child);
	}
	bindToMotionValue(key, value) {
		if (this.valueSubscriptions.has(key)) this.valueSubscriptions.get(key)();
		if (value.accelerate && acceleratedValues.has(key) && this.current instanceof HTMLElement) {
			const { factory, keyframes, times, ease, duration } = value.accelerate;
			const animation = new NativeAnimation({
				element: this.current,
				name: key,
				keyframes,
				times,
				ease,
				duration: /* @__PURE__ */ secondsToMilliseconds(duration)
			});
			const cleanup = factory(animation);
			this.valueSubscriptions.set(key, () => {
				cleanup();
				animation.cancel();
			});
			return;
		}
		const valueIsTransform = transformProps.has(key);
		if (valueIsTransform && this.onBindTransform) this.onBindTransform();
		const removeOnChange = value.on("change", (latestValue) => {
			this.latestValues[key] = latestValue;
			this.props.onUpdate && frame.preRender(this.notifyUpdate);
			if (valueIsTransform && this.projection) this.projection.isTransformDirty = true;
			this.scheduleRender();
		});
		let removeSyncCheck;
		if (typeof window !== "undefined" && window.MotionCheckAppearSync) removeSyncCheck = window.MotionCheckAppearSync(this, key, value);
		this.valueSubscriptions.set(key, () => {
			removeOnChange();
			if (removeSyncCheck) removeSyncCheck();
		});
	}
	sortNodePosition(other) {
		/**
		* If either node isn't mounted, or they aren't even of the same type,
		* we can't compare their document order.
		*/
		if (!this.current || !other.current || !this.sortInstanceNodePosition || this.type !== other.type) return 0;
		return this.sortInstanceNodePosition(this.current, other.current);
	}
	updateFeatures() {
		let key = "animation";
		for (key in featureDefinitions) {
			const featureDefinition = featureDefinitions[key];
			if (!featureDefinition) continue;
			const { isEnabled, Feature: FeatureConstructor } = featureDefinition;
			/**
			* If this feature is enabled but not active, make a new instance.
			*/
			if (!this.features[key] && FeatureConstructor && isEnabled(this.props)) this.features[key] = new FeatureConstructor(this);
			/**
			* If we have a feature, mount or update it.
			*/
			if (this.features[key]) {
				const feature = this.features[key];
				if (feature.isMounted) feature.update();
				else {
					feature.mount();
					feature.isMounted = true;
				}
			}
		}
	}
	triggerBuild() {
		this.build(this.renderState, this.latestValues, this.props);
	}
	/**
	* Measure the current viewport box with or without transforms.
	* Only measures axis-aligned boxes, rotate and skew must be manually
	* removed with a re-render to work.
	*/
	measureViewportBox() {
		return this.current ? this.measureInstanceViewportBox(this.current, this.props) : createBox();
	}
	getStaticValue(key) {
		return this.latestValues[key];
	}
	setStaticValue(key, value) {
		this.latestValues[key] = value;
	}
	/**
	* Update the provided props. Ensure any newly-added motion values are
	* added to our map, old ones removed, and listeners updated.
	*/
	update(props, presenceContext) {
		if (props.transformTemplate || this.props.transformTemplate) this.scheduleRender();
		this.prevProps = this.props;
		this.props = props;
		this.prevPresenceContext = this.presenceContext;
		this.presenceContext = presenceContext;
		/**
		* Update prop event handlers ie onAnimationStart, onAnimationComplete
		*/
		for (let i = 0; i < propEventHandlers.length; i++) {
			const key = propEventHandlers[i];
			if (this.propEventSubscriptions[key]) {
				this.propEventSubscriptions[key]();
				delete this.propEventSubscriptions[key];
			}
			const listener = props["on" + key];
			if (listener) this.propEventSubscriptions[key] = this.on(key, listener);
		}
		this.prevMotionValues = updateMotionValuesFromProps(this, this.scrapeMotionValuesFromProps(props, this.prevProps || {}, this), this.prevMotionValues);
		if (this.handleChildMotionValue) this.handleChildMotionValue();
	}
	getProps() {
		return this.props;
	}
	/**
	* Returns the variant definition with a given name.
	*/
	getVariant(name) {
		return this.props.variants ? this.props.variants[name] : void 0;
	}
	/**
	* Returns the defined default transition on this component.
	*/
	getDefaultTransition() {
		return this.props.transition;
	}
	getTransformPagePoint() {
		return this.props.transformPagePoint;
	}
	/**
	* Add a motion value and bind it to this visual element.
	*/
	addValue(key, value) {
		const existingValue = this.values.get(key);
		if (value !== existingValue) {
			if (existingValue) this.removeValue(key);
			this.bindToMotionValue(key, value);
			this.values.set(key, value);
			/**
			* An animated value with no base value is undefined until the
			* keyframe resolver reads its origin. Rendering it before then
			* writes an invalid placeholder (e.g. points="undefined") that
			* the resolver can read back from the DOM as the origin.
			*/
			const latest = value.get();
			if (latest !== void 0) this.latestValues[key] = latest;
		}
	}
	/**
	* Remove a motion value and unbind any active subscriptions.
	*/
	removeValue(key) {
		this.values.delete(key);
		const unsubscribe = this.valueSubscriptions.get(key);
		if (unsubscribe) {
			unsubscribe();
			this.valueSubscriptions.delete(key);
		}
		delete this.latestValues[key];
		this.removeValueFromRenderState(key, this.renderState);
	}
	/**
	* Check whether we have a motion value for this key
	*/
	hasValue(key) {
		return this.values.has(key);
	}
	getValue(key, defaultValue) {
		if (this.props.values && this.props.values[key]) return this.props.values[key];
		let value = this.values.get(key);
		if (value === void 0 && defaultValue !== void 0) {
			value = motionValue(defaultValue ?? this.getDefaultValue?.(key), { owner: this });
			this.addValue(key, value);
		}
		return value;
	}
	/**
	* If we're trying to animate to a previously unencountered value,
	* we need to check for it in our state and as a last resort read it
	* directly from the instance (which might have performance implications).
	*/
	readValue(key, target) {
		let value = this.latestValues[key] !== void 0 || !this.current ? this.latestValues[key] : this.getBaseTargetFromProps(this.props, key) ?? this.readValueFromInstance(this.current, key, this.options);
		if (value !== void 0 && value !== null) {
			if (typeof value === "string" && (isNumericalString(value) || isZeroValueString(value))) value = parseFloat(value);
			else if (typeof value !== "number" && !complex.test(value) && complex.test(target)) value = getAnimatableNone(key, target);
			this.setBaseTarget(key, isMotionValue(value) ? value.get() : value);
		}
		return isMotionValue(value) ? value.get() : value;
	}
	/**
	* Set the base target to later animate back to. This is currently
	* only hydrated on creation and when we first read a value.
	*/
	setBaseTarget(key, value) {
		this.baseTarget[key] = value;
	}
	on(eventName, callback) {
		if (!this.events[eventName]) this.events[eventName] = new SubscriptionManager();
		return this.events[eventName].add(callback);
	}
	notify(eventName, ...args) {
		if (this.events[eventName]) this.events[eventName].notify(...args);
	}
	scheduleRenderMicrotask() {
		microtask.render(this.render);
	}
};
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/render/dom/DOMVisualElement.mjs
var DOMVisualElement = class extends VisualElement {
	constructor() {
		super(...arguments);
		this.KeyframeResolver = DOMKeyframesResolver;
	}
	sortInstanceNodePosition(a, b) {
		/**
		* compareDocumentPosition returns a bitmask, by using the bitwise &
		* we're returning true if 2 in that bitmask is set to true. 2 is set
		* to true if b precedes a.
		*/
		return a.compareDocumentPosition(b) & 2 ? 1 : -1;
	}
	getBaseTargetFromProps(props, key) {
		const style = props.style;
		return style ? style[key] : void 0;
	}
	removeValueFromRenderState(key, { vars, style }) {
		delete vars[key];
		delete style[key];
	}
	handleChildMotionValue() {
		if (this.childSubscription) {
			this.childSubscription();
			delete this.childSubscription;
		}
		const { children } = this.props;
		if (isMotionValue(children)) this.childSubscription = children.on("change", (latest) => {
			if (this.current) this.current.textContent = `${latest}`;
		});
	}
};
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/render/Feature.mjs
/**
* Feature base class for extending VisualElement functionality.
* Features are plugins that can be mounted/unmounted to add behavior
* like gestures, animations, or layout tracking.
*/
var Feature = class {
	constructor(node) {
		this.isMounted = false;
		this.node = node;
	}
	update() {}
};
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/render/html/utils/render.mjs
function renderHTML(element, { style, vars }, styleProp, projection) {
	const elementStyle = element.style;
	let key;
	for (key in style) elementStyle[key] = style[key];
	projection?.applyProjectionStyles(elementStyle, styleProp);
	for (key in vars) elementStyle.setProperty(key, vars[key]);
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/projection/styles/scale-correction.mjs
var scaleCorrectors = {};
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/render/utils/is-forced-motion-value.mjs
function isForcedMotionValue(key, { layout, layoutId }) {
	return transformProps.has(key) || key.startsWith("origin") || (layout || layoutId !== void 0) && (!!scaleCorrectors[key] || key === "opacity");
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/render/html/utils/scrape-motion-values.mjs
function scrapeMotionValuesFromProps$1(props, prevProps, visualElement) {
	const style = props.style;
	const prevStyle = prevProps?.style;
	const newValues = {};
	if (!style) return newValues;
	for (const key in style) if (isMotionValue(style[key]) || prevStyle && isMotionValue(prevStyle[key]) || isForcedMotionValue(key, props) || visualElement?.getValue(key)?.liveStyle !== void 0) newValues[key] = style[key];
	return newValues;
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/render/html/HTMLVisualElement.mjs
function getComputedStyle$1(element) {
	return window.getComputedStyle(element);
}
var HTMLVisualElement = class extends DOMVisualElement {
	constructor() {
		super(...arguments);
		this.type = "html";
		this.renderInstance = renderHTML;
	}
	mount(instance) {
		/**
		* If a custom component forwards its ref to something other than a
		* HTML/SVG element (a class instance, an imperative handle) there's
		* nothing for Motion to style, measure or attach gestures to. #2777
		*/
		Boolean(instance.style);
		super.mount(instance);
	}
	readValueFromInstance(instance, key) {
		if (transformProps.has(key)) return this.projection?.isProjecting ? defaultTransformValue(key) : readTransformValue(instance, key);
		else {
			const computedStyle = getComputedStyle$1(instance);
			const value = (isCSSVariableName(key) ? computedStyle.getPropertyValue(key) : computedStyle[key]) || 0;
			return typeof value === "string" ? value.trim() : value;
		}
	}
	measureInstanceViewportBox(instance, { transformPagePoint }) {
		return measureViewportBox(instance, transformPagePoint);
	}
	build(renderState, latestValues, props) {
		buildHTMLStyles(renderState, latestValues, props.transformTemplate);
	}
	scrapeMotionValuesFromProps(props, prevProps, visualElement) {
		return scrapeMotionValuesFromProps$1(props, prevProps, visualElement);
	}
};
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/render/svg/utils/camel-case-attrs.mjs
/**
* A set of attribute names that are always read/written as camel case.
*/
var camelCaseAttributes = /* @__PURE__ */ new Set([
	"baseFrequency",
	"diffuseConstant",
	"kernelMatrix",
	"kernelUnitLength",
	"keySplines",
	"keyTimes",
	"limitingConeAngle",
	"markerHeight",
	"markerWidth",
	"numOctaves",
	"targetX",
	"targetY",
	"surfaceScale",
	"specularConstant",
	"specularExponent",
	"stdDeviation",
	"tableValues",
	"viewBox",
	"gradientTransform",
	"pathLength",
	"startOffset",
	"textLength",
	"lengthAdjust"
]);
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/render/svg/utils/is-svg-tag.mjs
var isSVGTag = (tag) => typeof tag === "string" && tag.toLowerCase() === "svg";
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/render/svg/utils/render.mjs
function renderSVG(element, renderState, _styleProp, projection) {
	renderHTML(element, renderState, void 0, projection);
	for (const key in renderState.attrs) element.setAttribute(!camelCaseAttributes.has(key) ? camelToDash(key) : key, renderState.attrs[key]);
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/render/svg/utils/scrape-motion-values.mjs
function scrapeMotionValuesFromProps(props, prevProps, visualElement) {
	const newValues = scrapeMotionValuesFromProps$1(props, prevProps, visualElement);
	for (const key in props) if (isMotionValue(props[key]) || isMotionValue(prevProps[key])) {
		const targetKey = transformPropOrder.indexOf(key) !== -1 ? "attr" + key.charAt(0).toUpperCase() + key.substring(1) : key;
		newValues[targetKey] = props[key];
	}
	return newValues;
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/render/svg/SVGVisualElement.mjs
var SVGVisualElement = class extends DOMVisualElement {
	constructor() {
		super(...arguments);
		this.type = "svg";
		this.isSVGTag = false;
		this.measureInstanceViewportBox = createBox;
	}
	getBaseTargetFromProps(props, key) {
		/**
		* An independent transform's base is never an attribute of the same
		* name, e.g. <rect x> is a position, not a translate. Like HTML it
		* comes from style, falling back to the transform's default.
		*/
		return transformProps.has(key) ? super.getBaseTargetFromProps(props, key) ?? defaultTransformValue(key) : props[key];
	}
	/**
	* An independent transform's origin is never read from the DOM, so it
	* starts from its latest or default value and renders on mount.
	*/
	getDefaultValue(key) {
		return transformProps.has(key) ? this.latestValues[key] ?? defaultTransformValue(key) : void 0;
	}
	readValueFromInstance(instance, key) {
		if (transformProps.has(key)) {
			const defaultType = getDefaultValueType(key);
			return defaultType ? defaultType.default || 0 : 0;
		}
		if (cssStyleProperties.includes(key)) {
			const value = getComputedStyle(instance)[key];
			if (typeof value === "string" && value) return value.trim();
		}
		key = !camelCaseAttributes.has(key) ? camelToDash(key) : key;
		return instance.getAttribute(key);
	}
	scrapeMotionValuesFromProps(props, prevProps, visualElement) {
		return scrapeMotionValuesFromProps(props, prevProps, visualElement);
	}
	build(renderState, latestValues, props) {
		buildSVGAttrs(renderState, latestValues, this.isSVGTag, props.transformTemplate, props.style);
	}
	renderInstance(instance, renderState, styleProp, projection) {
		renderSVG(instance, renderState, styleProp, projection);
	}
	mount(instance) {
		this.isSVGTag = isSVGTag(instance.tagName);
		super.mount(instance);
	}
};
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/render/utils/shallow-compare.mjs
function shallowCompare(next, prev) {
	if (!Array.isArray(prev)) return false;
	const prevLength = prev.length;
	if (prevLength !== next.length) return false;
	for (let i = 0; i < prevLength; i++) if (prev[i] !== next[i]) return false;
	return true;
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/render/utils/animation-state.mjs
var reversePriorityOrder = [...variantPriorityOrder].reverse();
/**
* Diffs the element's animation props (one layer per AnimationType, highest
* priority wins each value) against the previous call and starts animations
* for what changed.
*
* Uses `any` type for visualElement to avoid circular dependencies. It reads
* props, parent, presenceContext, variantChildren, enteringChildren,
* manuallyAnimateOnMount, blockInitialAnimation, getValue(),
* getBaseTargetFromProps(), baseTarget and initialValues.
*/
function createAnimationState(visualElement) {
	let animate = (animations) => Promise.all(animations.map(({ animation, options }) => animateVisualElement(visualElement, animation, options)));
	let state = createState();
	let isInitialRender = true;
	/**
	* After a reset (StrictMode, Suspense, AnimatePresence re-entry) the next
	* animateChanges() mounts again, but initial={false} no longer applies.
	*/
	let wasReset = false;
	function animateChanges(changedActiveType) {
		const { props, parent, manuallyAnimateOnMount } = visualElement;
		const isMounting = isInitialRender || wasReset;
		const animations = [];
		/**
		* Values removed from a type. A lower-priority type that defines
		* them animates them back, otherwise they fall back to a base target.
		*/
		const removedKeys = /* @__PURE__ */ new Set();
		/**
		* Values claimed by active, higher-priority types.
		*/
		let encounteredKeys = {};
		/**
		* Once a type has been deactivated, lower-priority variant labels
		* re-animate so variant children animate back too.
		*/
		let removedVariantIndex = Infinity;
		/**
		* Variant labels are inherited from the closest variant-controlling
		* ancestor, unless an element on the way has inherit={false}.
		*/
		let source = visualElement;
		do
			source = source.props.inherit !== false && source.parent;
		while (source && !source.isControllingVariants);
		reversePriorityOrder.forEach((type, i) => {
			const typeState = state[type];
			const ownProp = props[type];
			const inheritedProp = source && source.props[type];
			const prop = ownProp !== void 0 ? ownProp : isVariantLabel(inheritedProp) || inheritedProp === false ? inheritedProp : void 0;
			const propIsVariant = isVariantLabel(prop);
			const activeDelta = type === changedActiveType ? typeState.isActive : null;
			if (activeDelta === false) removedVariantIndex = i;
			/**
			* Inherited labels are animated by the parent through
			* variantChildren, unless this element mounted after its parent.
			*/
			const isInherited = propIsVariant && ownProp === void 0 && !(isMounting && manuallyAnimateOnMount);
			typeState.protectedKeys = { ...encounteredKeys };
			if (!typeState.isActive && activeDelta === null || !prop && !typeState.prevProp || isAnimationControls(prop) || typeof prop === "boolean") return;
			/**
			* Don't re-resolve a running exit: a changed custom would start
			* new value animations that stop the originals, leaving the exit
			* promise unresolved and the element stuck in the DOM.
			*/
			if (type === "exit" && typeState.isActive && activeDelta !== true) {
				encounteredKeys = {
					...encounteredKeys,
					...typeState.prevResolvedValues
				};
				return;
			}
			const variantDidChange = checkVariantsDidChange(typeState.prevProp, prop);
			let shouldAnimateType = variantDidChange || propIsVariant && (activeDelta && !isInherited || i > removedVariantIndex);
			let handledRemovedValues = false;
			const definitionList = Array.isArray(prop) ? prop : [prop];
			let resolvedValues = {};
			if (activeDelta !== false) for (const definition of definitionList) {
				const { transition, transitionEnd, ...target } = resolveVariant(visualElement, definition, getTypeCustom(visualElement, type)) || {};
				resolvedValues = {
					...resolvedValues,
					...target,
					...transitionEnd
				};
			}
			const { prevResolvedValues } = typeState;
			for (const key in {
				...prevResolvedValues,
				...resolvedValues
			}) {
				if (key in encounteredKeys) continue;
				const next = resolvedValues[key];
				const prev = prevResolvedValues[key];
				/**
				* Keyframes compare by value, but replay whenever the
				* variant label changed.
				*/
				const valueHasChanged = Array.isArray(next) && Array.isArray(prev) ? !shallowCompare(next, prev) || variantDidChange : next !== prev;
				if (valueHasChanged && (next === void 0 || next === null)) removedKeys.add(key);
				else if (valueHasChanged || next !== void 0 && removedKeys.has(key)) {
					shouldAnimateType = true;
					if (removedKeys.delete(key)) handledRemovedValues = true;
					typeState.needsAnimating[key] = true;
					const motionValue = visualElement.getValue(key);
					if (motionValue) motionValue.liveStyle = false;
				} else typeState.protectedKeys[key] = true;
			}
			typeState.prevProp = prop;
			typeState.prevResolvedValues = resolvedValues;
			if (typeState.isActive) encounteredKeys = {
				...encounteredKeys,
				...resolvedValues
			};
			if (shouldAnimateType && (!(isInherited && variantDidChange) || handledRemovedValues)) for (const animation of definitionList) {
				const options = { type };
				/**
				* Elements that mount into an already-mounted parent
				* animate themselves, staggered by the parent variant's
				* delayChildren.
				*/
				if (typeof animation === "string" && isMounting && manuallyAnimateOnMount && parent?.enteringChildren) {
					const delayChildren = resolveVariant(parent, animation)?.transition?.delayChildren;
					options.delay = calcChildStagger(parent.enteringChildren, visualElement, delayChildren);
				}
				animations.push({
					animation,
					options
				});
			}
		});
		/**
		* Removed values that no lower-priority type defines animate back to
		* initial, then style, then the value as first read. If initial no
		* longer defines a value it once did, it stays where it is.
		*/
		if (removedKeys.size) {
			const { initial } = props;
			const fallbackAnimation = {};
			const resolvedInitial = typeof initial !== "boolean" && resolveVariant(visualElement, Array.isArray(initial) ? initial[0] : initial, visualElement.presenceContext?.custom);
			if (resolvedInitial && resolvedInitial.transition) fallbackAnimation.transition = resolvedInitial.transition;
			removedKeys.forEach((key) => {
				const motionValue = visualElement.getValue(key);
				if (motionValue) motionValue.liveStyle = true;
				const fromInitial = resolvedInitial && !Array.isArray(initial) ? resolvedInitial[key] : void 0;
				const fromProps = visualElement.getBaseTargetFromProps(props, key);
				fallbackAnimation[key] = (fromInitial !== void 0 ? fromInitial : fromProps !== void 0 && !isMotionValue(fromProps) ? fromProps : visualElement.initialValues[key] === void 0 ? visualElement.baseTarget[key] : void 0) ?? null;
			});
			animations.push({ animation: fallbackAnimation });
		}
		const blockAnimation = isMounting && visualElement.blockInitialAnimation || isInitialRender && !manuallyAnimateOnMount && (props.initial === false || props.initial === props.animate);
		isInitialRender = wasReset = false;
		return !blockAnimation && animations.length ? animate(animations) : Promise.resolve();
	}
	/**
	* Change whether a certain animation type is active.
	*/
	function setActive(type, isActive) {
		if (state[type].isActive === isActive) return Promise.resolve();
		visualElement.variantChildren?.forEach((child) => child.animationState?.setActive(type, isActive));
		state[type].isActive = isActive;
		const animations = animateChanges(type);
		for (const key in state) state[key].protectedKeys = {};
		return animations;
	}
	return {
		animateChanges,
		setActive,
		/**
		* Allows tests to inject a mocked animate function.
		* @internal
		*/
		setAnimateFunction: (makeAnimator) => {
			animate = makeAnimator(visualElement);
		},
		getState: () => state,
		reset: () => {
			state = createState();
			wasReset = true;
		}
	};
}
function checkVariantsDidChange(prev, next) {
	if (typeof next === "string") return next !== prev;
	else if (Array.isArray(next)) return !shallowCompare(next, prev);
	return false;
}
function createState() {
	const state = {};
	for (const type of variantPriorityOrder) state[type] = {
		isActive: type === "animate",
		protectedKeys: {},
		needsAnimating: {},
		prevResolvedValues: {}
	};
	return state;
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/projection/geometry/copy.mjs
/**
* Reset an axis to the provided origin box.
*
* This is a mutative operation.
*/
function copyAxisInto(axis, originAxis) {
	axis.min = originAxis.min;
	axis.max = originAxis.max;
}
/**
* Reset a box to the provided origin box.
*
* This is a mutative operation.
*/
function copyBoxInto(box, originBox) {
	copyAxisInto(box.x, originBox.x);
	copyAxisInto(box.y, originBox.y);
}
/**
* Reset a delta to the provided origin box.
*
* This is a mutative operation.
*/
function copyAxisDeltaInto(delta, originDelta) {
	delta.translate = originDelta.translate;
	delta.scale = originDelta.scale;
	delta.originPoint = originDelta.originPoint;
	delta.origin = originDelta.origin;
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/projection/geometry/delta-calc.mjs
var SCALE_MIN = .9999;
var SCALE_MAX = 1.0001;
var TRANSLATE_MIN = -.01;
var TRANSLATE_MAX = .01;
function calcLength(axis) {
	return axis.max - axis.min;
}
function isNear(value, target, maxDistance) {
	return Math.abs(value - target) <= maxDistance;
}
function calcAxisDelta(delta, source, target, origin = .5) {
	delta.origin = origin;
	delta.originPoint = mixNumber$1(source.min, source.max, delta.origin);
	delta.scale = calcLength(target) / calcLength(source);
	delta.translate = mixNumber$1(target.min, target.max, delta.origin) - delta.originPoint;
	if (delta.scale >= SCALE_MIN && delta.scale <= SCALE_MAX || isNaN(delta.scale)) delta.scale = 1;
	if (delta.translate >= TRANSLATE_MIN && delta.translate <= TRANSLATE_MAX || isNaN(delta.translate)) delta.translate = 0;
}
function calcBoxDelta(delta, source, target, origin) {
	calcAxisDelta(delta.x, source.x, target.x, origin ? origin.originX : void 0);
	calcAxisDelta(delta.y, source.y, target.y, origin ? origin.originY : void 0);
}
function calcRelativeAxis(target, relative, parent, anchor = 0) {
	target.min = (anchor ? mixNumber$1(parent.min, parent.max, anchor) : parent.min) + relative.min;
	target.max = target.min + calcLength(relative);
}
function calcRelativeBox(target, relative, parent, anchor) {
	calcRelativeAxis(target.x, relative.x, parent.x, anchor?.x);
	calcRelativeAxis(target.y, relative.y, parent.y, anchor?.y);
}
function calcRelativeAxisPosition(target, layout, parent, anchor = 0) {
	const anchorPoint = anchor ? mixNumber$1(parent.min, parent.max, anchor) : parent.min;
	target.min = layout.min - anchorPoint;
	target.max = target.min + calcLength(layout);
}
function calcRelativePosition(target, layout, parent, anchor) {
	calcRelativeAxisPosition(target.x, layout.x, parent.x, anchor?.x);
	calcRelativeAxisPosition(target.y, layout.y, parent.y, anchor?.y);
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/projection/geometry/delta-remove.mjs
/**
* Remove a delta from a point. This is essentially the steps of applyPointDelta in reverse
*/
function removePointDelta(point, translate, scale, originPoint, boxScale) {
	point -= translate;
	point = scalePoint(point, 1 / scale, originPoint);
	if (boxScale !== void 0) point = scalePoint(point, 1 / boxScale, originPoint);
	return point;
}
/**
* Remove a delta from an axis. This is essentially the steps of applyAxisDelta in reverse
*/
function removeAxisDelta(axis, translate = 0, scale = 1, origin = .5, boxScale, originAxis = axis, sourceAxis = axis) {
	if (percent.test(translate)) {
		translate = parseFloat(translate);
		translate = mixNumber$1(sourceAxis.min, sourceAxis.max, translate / 100) - sourceAxis.min;
	}
	if (typeof translate !== "number") return;
	let originPoint = mixNumber$1(originAxis.min, originAxis.max, origin);
	if (axis === originAxis) originPoint -= translate;
	axis.min = removePointDelta(axis.min, translate, scale, originPoint, boxScale);
	axis.max = removePointDelta(axis.max, translate, scale, originPoint, boxScale);
}
/**
* Remove a transforms from an axis. This is essentially the steps of applyAxisTransforms in reverse
* and acts as a bridge between motion values and removeAxisDelta
*/
function removeAxisTransforms(axis, transforms, [key, scaleKey, originKey], origin, sourceAxis) {
	removeAxisDelta(axis, transforms[key], transforms[scaleKey], transforms[originKey], transforms.scale, origin, sourceAxis);
}
/**
* The names of the motion values we want to apply as translation, scale and origin.
*/
var xKeys = [
	"x",
	"scaleX",
	"originX"
];
var yKeys = [
	"y",
	"scaleY",
	"originY"
];
/**
* Remove a transforms from an box. This is essentially the steps of applyAxisBox in reverse
* and acts as a bridge between motion values and removeAxisDelta
*/
function removeBoxTransforms(box, transforms, originBox, sourceBox) {
	removeAxisTransforms(box.x, transforms, xKeys, originBox ? originBox.x : void 0, sourceBox ? sourceBox.x : void 0);
	removeAxisTransforms(box.y, transforms, yKeys, originBox ? originBox.y : void 0, sourceBox ? sourceBox.y : void 0);
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/projection/geometry/utils.mjs
function isAxisDeltaZero(delta) {
	return delta.translate === 0 && delta.scale === 1;
}
function isDeltaZero(delta) {
	return isAxisDeltaZero(delta.x) && isAxisDeltaZero(delta.y);
}
function axisEquals(a, b) {
	return a.min === b.min && a.max === b.max;
}
function boxEquals(a, b) {
	return axisEquals(a.x, b.x) && axisEquals(a.y, b.y);
}
function axisEqualsRounded(a, b) {
	return Math.round(a.min) === Math.round(b.min) && Math.round(a.max) === Math.round(b.max);
}
function boxEqualsRounded(a, b) {
	return axisEqualsRounded(a.x, b.x) && axisEqualsRounded(a.y, b.y);
}
function aspectRatio(box) {
	return calcLength(box.x) / calcLength(box.y);
}
function axisDeltaEquals(a, b) {
	return a.translate === b.translate && a.scale === b.scale && a.originPoint === b.originPoint;
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/projection/utils/each-axis.mjs
function eachAxis(callback) {
	return [callback("x"), callback("y")];
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/projection/styles/scale-border-radius.mjs
function pixelsToPercent(pixels, axis) {
	if (axis.max === axis.min) return 0;
	return pixels / (axis.max - axis.min) * 100;
}
/**
* We always correct borderRadius as a percentage rather than pixels to reduce paints.
* For example, if you are projecting a box that is 100px wide with a 10px borderRadius
* into a box that is 200px wide with a 20px borderRadius, that is actually a 10%
* borderRadius in both states. If we animate between the two in pixels that will trigger
* a paint each time. If we animate between the two in percentage we'll avoid a paint.
*/
var correctBorderRadius = { correct: (latest, node) => {
	if (!node.target) return latest;
	/**
	* If latest is a string, if it's a percentage we can return immediately as it's
	* going to be stretched appropriately. Otherwise, if it's a pixel, convert it to a number.
	*/
	if (typeof latest === "string") if (px.test(latest)) latest = parseFloat(latest);
	else return latest;
	return `${pixelsToPercent(latest, node.target.x)}% ${pixelsToPercent(latest, node.target.y)}%`;
} };
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/projection/styles/scale-box-shadow.mjs
var correctBoxShadow = { correct: (latest, { treeScale, projectionDelta }) => {
	const original = latest;
	const shadow = complex.parse(latest);
	if (shadow.length > 5) return original;
	const template = complex.createTransformer(latest);
	const offset = typeof shadow[0] !== "number" ? 1 : 0;
	const xScale = projectionDelta.x.scale * treeScale.x;
	const yScale = projectionDelta.y.scale * treeScale.y;
	shadow[0 + offset] /= xScale;
	shadow[1 + offset] /= yScale;
	/**
	* Ideally we'd correct x and y scales individually, but because blur and
	* spread apply to both we have to take a scale average and apply that instead.
	* We could potentially improve the outcome of this by incorporating the ratio between
	* the two scales.
	*/
	const averageScale = mixNumber$1(xScale, yScale, .5);
	if (typeof shadow[2 + offset] === "number") shadow[2 + offset] /= averageScale;
	if (typeof shadow[3 + offset] === "number") shadow[3 + offset] /= averageScale;
	return template(shadow);
} };
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/projection/styles/transform.mjs
function buildProjectionTransform(delta, treeScale, latestTransform) {
	let transform = "";
	/**
	* The translations we use to calculate are always relative to the viewport coordinate space.
	* But when we apply scales, we also scale the coordinate space of an element and its children.
	* For instance if we have a treeScale (the culmination of all parent scales) of 0.5 and we need
	* to move an element 100 pixels, we actually need to move it 200 in within that scaled space.
	*/
	const xTranslate = delta.x.translate / treeScale.x;
	const yTranslate = delta.y.translate / treeScale.y;
	const zTranslate = latestTransform?.z || 0;
	if (xTranslate || yTranslate || zTranslate) transform = `translate3d(${xTranslate}px, ${yTranslate}px, ${zTranslate}px) `;
	/**
	* Apply scale correction for the tree transform.
	* This will apply scale to the screen-orientated axes.
	*/
	if (treeScale.x !== 1 || treeScale.y !== 1) transform += `scale(${1 / treeScale.x}, ${1 / treeScale.y}) `;
	if (latestTransform) {
		const { transformPerspective, rotate, pathRotation, rotateX, rotateY, skewX, skewY } = latestTransform;
		if (transformPerspective) transform = `perspective(${transformPerspective}px) ${transform}`;
		if (rotate) transform += `rotate(${rotate}deg) `;
		if (pathRotation) transform += `rotate(${pathRotation}deg) `;
		if (rotateX) transform += `rotateX(${rotateX}deg) `;
		if (rotateY) transform += `rotateY(${rotateY}deg) `;
		if (skewX) transform += `skewX(${skewX}deg) `;
		if (skewY) transform += `skewY(${skewY}deg) `;
	}
	/**
	* Apply scale to match the size of the element to the size we want it.
	* This will apply scale to the element-orientated axes.
	*/
	const elementScaleX = delta.x.scale * treeScale.x;
	const elementScaleY = delta.y.scale * treeScale.y;
	if (elementScaleX !== 1 || elementScaleY !== 1) transform += `scale(${elementScaleX}, ${elementScaleY})`;
	return transform || "none";
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/projection/animation/mix-values.mjs
var numBorders = cornerRadiusProps.length;
var isPx = (value) => typeof value === "number" || px.test(value);
function mixValues(target, follow, lead, progress, shouldCrossfadeOpacity, isOnlyMember) {
	if (shouldCrossfadeOpacity) {
		target.opacity = mixNumber$1(0, lead.opacity ?? 1, easeCrossfadeIn(progress));
		target.opacityExit = mixNumber$1(follow.opacity ?? 1, 0, easeCrossfadeOut(progress));
	} else if (isOnlyMember) target.opacity = mixNumber$1(follow.opacity ?? 1, lead.opacity ?? 1, progress);
	/**
	* Mix border radius
	*/
	for (let i = 0; i < numBorders; i++) {
		const borderLabel = cornerRadiusProps[i];
		let followRadius = getRadius(follow, borderLabel);
		let leadRadius = getRadius(lead, borderLabel);
		if (followRadius === void 0 && leadRadius === void 0) continue;
		followRadius || (followRadius = 0);
		leadRadius || (leadRadius = 0);
		if (followRadius === 0 || leadRadius === 0 || isPx(followRadius) === isPx(leadRadius)) {
			target[borderLabel] = Math.max(mixNumber$1(asNumber(followRadius), asNumber(leadRadius), progress), 0);
			if (percent.test(leadRadius) || percent.test(followRadius)) target[borderLabel] += "%";
		} else target[borderLabel] = leadRadius;
	}
	/**
	* Mix rotation
	*/
	if (follow.rotate || lead.rotate) target.rotate = mixNumber$1(follow.rotate || 0, lead.rotate || 0, progress);
}
function getRadius(values, radiusName) {
	return values[radiusName] !== void 0 ? values[radiusName] : values.borderRadius;
}
var easeCrossfadeIn = /*@__PURE__*/ compress(0, .5, circOut);
var easeCrossfadeOut = /*@__PURE__*/ compress(.5, .95, noop);
function compress(min, max, easing) {
	return (p) => {
		if (p < min) return 0;
		if (p > max) return 1;
		return easing(/* @__PURE__ */ progress(min, max, p));
	};
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/animation/animate/single-value.mjs
function animateSingleValue(value, keyframes, options) {
	const motionValue$1 = isMotionValue(value) ? value : motionValue(value);
	motionValue$1.start(animateMotionValue("", motionValue$1, keyframes, options));
	return motionValue$1.animation;
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/events/add-dom-event.mjs
function addDomEvent(target, eventName, handler, options = { passive: true }) {
	target.addEventListener(eventName, handler, options);
	return () => target.removeEventListener(eventName, handler, options);
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/projection/utils/compare-by-depth.mjs
var compareByDepth = (a, b) => a.depth - b.depth;
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/projection/utils/flat-tree.mjs
var FlatTree = class {
	constructor() {
		this.children = [];
		this.isDirty = false;
	}
	add(child) {
		addUniqueItem(this.children, child);
		this.isDirty = true;
	}
	remove(child) {
		removeItem(this.children, child);
		this.isDirty = true;
	}
	forEach(callback) {
		this.isDirty && this.children.sort(compareByDepth);
		this.isDirty = false;
		this.children.forEach(callback);
	}
};
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/utils/delay.mjs
/**
* Timeout defined in ms
*/
function delay(callback, timeout) {
	const start = time.now();
	const checkElapsed = ({ timestamp }) => {
		const elapsed = timestamp - start;
		if (elapsed >= timeout) {
			cancelFrame(checkElapsed);
			callback(elapsed - timeout);
		}
	};
	frame.setup(checkElapsed, true);
	return () => cancelFrame(checkElapsed);
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/value/utils/resolve-motion-value.mjs
/**
* If the provided value is a MotionValue, this returns the actual value, otherwise just the value itself
*/
function resolveMotionValue(value) {
	return isMotionValue(value) ? value.get() : value;
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/projection/shared/stack.mjs
var NodeStack = class {
	constructor() {
		this.members = [];
	}
	add(node) {
		addUniqueItem(this.members, node);
		for (let i = this.members.length - 1; i >= 0; i--) {
			const member = this.members[i];
			if (member === node || member === this.lead || member === this.prevLead) continue;
			const inst = member.instance;
			if ((!inst || inst.isConnected === false) && !member.snapshot) {
				removeItem(this.members, member);
				member.unmount();
			}
		}
		node.scheduleRender();
	}
	remove(node) {
		removeItem(this.members, node);
		if (node === this.prevLead) this.prevLead = void 0;
		if (node === this.lead) {
			const prevLead = this.members[this.members.length - 1];
			if (prevLead) this.promote(prevLead);
		}
	}
	relegate(node) {
		for (let i = this.members.indexOf(node) - 1; i >= 0; i--) {
			const member = this.members[i];
			if (member.isPresent !== false && member.instance?.isConnected !== false) {
				this.promote(member);
				return true;
			}
		}
		return false;
	}
	promote(node, preserveFollowOpacity) {
		const prevLead = this.lead;
		if (node === prevLead) return;
		this.prevLead = prevLead;
		this.lead = node;
		node.show();
		if (prevLead) {
			prevLead.updateSnapshot();
			node.scheduleRender();
			const { layoutDependency: prevDep } = prevLead.options;
			const { layoutDependency: nextDep } = node.options;
			if (prevDep === void 0 || prevDep !== nextDep) {
				node.resumeFrom = prevLead;
				if (preserveFollowOpacity) prevLead.preserveOpacity = true;
				if (prevLead.snapshot) {
					node.snapshot = prevLead.snapshot;
					node.snapshot.latestValues = prevLead.animationValues || prevLead.latestValues;
				}
				if (node.root?.isUpdating) node.isLayoutDirty = true;
			}
			if (node.options.crossfade === false) prevLead.hide();
		}
	}
	exitAnimationComplete() {
		this.members.forEach((member) => {
			member.options.onExitComplete?.();
			member.resumingFrom?.options.onExitComplete?.();
		});
	}
	scheduleRender() {
		this.members.forEach((member) => member.instance && member.scheduleRender(false));
	}
	removeLeadSnapshot() {
		if (this.lead?.snapshot) this.lead.snapshot = void 0;
	}
};
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/projection/styles/default-scale-correctors.mjs
var defaultScaleCorrectors = {
	borderRadius: {
		...correctBorderRadius,
		applyTo: [...cornerRadiusProps]
	},
	borderTopLeftRadius: correctBorderRadius,
	borderTopRightRadius: correctBorderRadius,
	borderBottomLeftRadius: correctBorderRadius,
	borderBottomRightRadius: correctBorderRadius,
	boxShadow: correctBoxShadow
};
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/projection/node/state.mjs
/**
* This should only ever be modified on the client otherwise it'll
* persist through server requests. If we need instanced states we
* could lazy-init via root.
*/
var globalProjectionState = {
	/**
	* Global flag as to whether the tree has animated since the last time
	* we resized the window
	*/
	hasAnimatedSinceResize: true,
	/**
	* We set this to true once, on the first update. Any nodes added to the tree beyond that
	* update will be given a `data-projection-id` attribute.
	*/
	hasEverUpdated: false
};
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/projection/node/create-projection-node.mjs
/**
* Correctors registered via addScaleCorrector before projection loaded
* (e.g. with an async LazyMotion bundle) take precedence over the defaults.
*/
Object.assign(scaleCorrectors, {
	...defaultScaleCorrectors,
	...scaleCorrectors
});
var metrics = {
	nodes: 0,
	calculatedTargetDeltas: 0,
	calculatedProjections: 0
};
var transformAxes = [
	"",
	"X",
	"Y",
	"Z"
];
/**
* We use 1000 as the animation target as 0-1000 maps better to pixels than 0-1
* which has a noticeable difference in spring animations
*/
var animationTarget = 1e3;
var id$1 = 0;
function resetDistortingTransform(key, visualElement, values, sharedAnimationValues) {
	const { latestValues } = visualElement;
	if (latestValues[key]) {
		values[key] = latestValues[key];
		visualElement.setStaticValue(key, 0);
		if (sharedAnimationValues) sharedAnimationValues[key] = 0;
	}
}
function cancelTreeOptimisedTransformAnimations(projectionNode) {
	projectionNode.hasCheckedOptimisedAppear = true;
	if (projectionNode.root === projectionNode) return;
	const { visualElement } = projectionNode.options;
	if (!visualElement) return;
	const appearId = getOptimisedAppearId(visualElement);
	if (window.MotionHasOptimisedAnimation(appearId, "transform")) {
		const { layout, layoutId } = projectionNode.options;
		window.MotionCancelOptimisedAnimation(appearId, "transform", frame, !(layout || layoutId));
	}
	const { parent } = projectionNode;
	if (parent && !parent.hasCheckedOptimisedAppear) cancelTreeOptimisedTransformAnimations(parent);
}
function createProjectionNode$1({ attachResizeListener, defaultParent, measureScroll, checkIsScrollRoot, resetTransform }) {
	return class ProjectionNode {
		constructor(latestValues = {}, parent = defaultParent?.()) {
			/**
			* A unique ID generated for every projection node.
			*/
			this.id = id$1++;
			/**
			* An id that represents a unique session instigated by startUpdate.
			*/
			this.animationId = 0;
			this.animationCommitId = 0;
			/**
			* A Set containing all this component's children. This is used to iterate
			* through the children.
			*
			* TODO: This could be faster to iterate as a flat array stored on the root node.
			*/
			this.children = /* @__PURE__ */ new Set();
			/**
			* Options for the node. We use this to configure what kind of layout animations
			* we should perform (if any).
			*/
			this.options = {};
			/**
			* We use this to detect when its safe to shut down part of a projection tree.
			* We have to keep projecting children for scale correction and relative projection
			* until all their parents stop performing layout animations.
			*/
			this.isTreeAnimating = false;
			this.isAnimationBlocked = false;
			/**
			* Flag to true if we think this layout has been changed. We can't always know this,
			* currently we set it to true every time a component renders, or if it has a layoutDependency
			* if that has changed between renders. Additionally, components can be grouped by LayoutGroup
			* and if one node is dirtied, they all are.
			*/
			this.isLayoutDirty = false;
			/**
			* Flag to true if we think the projection calculations for this node needs
			* recalculating as a result of an updated transform or layout animation.
			*/
			this.isProjectionDirty = false;
			/**
			* Flag to true if the layout *or* transform has changed. This then gets propagated
			* throughout the projection tree, forcing any element below to recalculate on the next frame.
			*/
			this.isSharedProjectionDirty = false;
			/**
			* Flag transform dirty. This gets propagated throughout the whole tree but is only
			* respected by shared nodes.
			*/
			this.isTransformDirty = false;
			/**
			* Block layout updates for instant layout transitions throughout the tree.
			*/
			this.updateManuallyBlocked = false;
			this.updateBlockedByResize = false;
			/**
			* Set to true between the start of the first `willUpdate` call and the end of the `didUpdate`
			* call.
			*/
			this.isUpdating = false;
			/**
			* If this is an SVG element we currently disable projection transforms
			*/
			this.isSVG = false;
			/**
			* Flag to true (during promotion) if a node doing an instant layout transition needs to reset
			* its projection styles.
			*/
			this.needsReset = false;
			/**
			* Flags whether this node should have its transform reset prior to measuring.
			*/
			this.shouldResetTransform = false;
			/**
			* Store whether this node has been checked for optimised appear animations. As
			* effects fire bottom-up, and we want to look up the tree for appear animations,
			* this makes sure we only check each path once, stopping at nodes that
			* have already been checked.
			*/
			this.hasCheckedOptimisedAppear = false;
			/**
			* An object representing the calculated contextual/accumulated/tree scale.
			* This will be used to scale calculated projection transforms, as these are
			* calculated in screen-space but need to be scaled for elements to visually
			* make it to their calculated destinations.
			*
			* TODO: Lazy-init
			*/
			this.treeScale = {
				x: 1,
				y: 1
			};
			/**
			*
			*/
			this.eventHandlers = /* @__PURE__ */ new Map();
			this.hasTreeAnimated = false;
			this.updateScheduled = false;
			this.scheduleUpdate = () => this.update();
			this.projectionUpdateScheduled = false;
			this.checkUpdateFailed = () => {
				if (this.isUpdating) {
					this.isUpdating = false;
					this.clearAllSnapshots();
				}
			};
			/**
			* This is a multi-step process as shared nodes might be of different depths. Nodes
			* are sorted by depth order, so we need to resolve the entire tree before moving to
			* the next step.
			*/
			this.updateProjection = () => {
				this.projectionUpdateScheduled = false;
				/**
				* Reset debug counts. Manually resetting rather than creating a new
				* object each frame.
				*/
				if (statsBuffer.value) metrics.nodes = metrics.calculatedTargetDeltas = metrics.calculatedProjections = 0;
				this.nodes.forEach(propagateDirtyNodes);
				this.nodes.forEach(resolveTargetDelta);
				this.nodes.forEach(calcProjection);
				this.nodes.forEach(cleanDirtyNodes);
				if (statsBuffer.addProjectionMetrics) statsBuffer.addProjectionMetrics(metrics);
			};
			/**
			* Frame calculations
			*/
			this.resolvedRelativeTargetAt = 0;
			this.hasProjected = false;
			this.isVisible = true;
			this.animationProgress = 0;
			/**
			* Shared layout
			*/
			this.sharedNodes = /* @__PURE__ */ new Map();
			this.latestValues = latestValues;
			this.root = parent ? parent.root || parent : this;
			this.path = parent ? [...parent.path, parent] : [];
			this.parent = parent;
			this.depth = parent ? parent.depth + 1 : 0;
			for (let i = 0; i < this.path.length; i++) this.path[i].shouldResetTransform = true;
			if (this.root === this) this.nodes = new FlatTree();
		}
		addEventListener(name, handler) {
			if (!this.eventHandlers.has(name)) this.eventHandlers.set(name, new SubscriptionManager());
			return this.eventHandlers.get(name).add(handler);
		}
		notifyListeners(name, ...args) {
			const subscriptionManager = this.eventHandlers.get(name);
			subscriptionManager && subscriptionManager.notify(...args);
		}
		hasListeners(name) {
			return this.eventHandlers.has(name);
		}
		/**
		* Lifecycles
		*/
		mount(instance) {
			if (this.instance) return;
			this.isSVG = isSVGElement(instance) && !isSVGSVGElement(instance);
			this.instance = instance;
			const { layoutId, layout, visualElement } = this.options;
			if (visualElement && !visualElement.current) visualElement.mount(instance);
			this.root.nodes.add(this);
			this.parent && this.parent.children.add(this);
			if (this.root.hasTreeAnimated && (layout || layoutId)) this.isLayoutDirty = true;
			if (attachResizeListener) {
				let cancelDelay;
				let innerWidth = 0;
				const resizeUnblockUpdate = () => this.root.updateBlockedByResize = false;
				frame.read(() => {
					innerWidth = window.innerWidth;
				});
				attachResizeListener(instance, () => {
					const newInnerWidth = window.innerWidth;
					if (newInnerWidth === innerWidth) return;
					innerWidth = newInnerWidth;
					this.root.updateBlockedByResize = true;
					cancelDelay && cancelDelay();
					cancelDelay = delay(resizeUnblockUpdate, 250);
					if (globalProjectionState.hasAnimatedSinceResize) {
						globalProjectionState.hasAnimatedSinceResize = false;
						this.nodes.forEach(finishAnimation);
					}
				});
			}
			if (layoutId) this.root.registerSharedNode(layoutId, this);
			if (this.options.animate !== false && visualElement && (layoutId || layout)) this.addEventListener("didUpdate", ({ delta, hasLayoutChanged, hasRelativeLayoutChanged, layout: newLayout }) => {
				if (this.isTreeAnimationBlocked()) {
					this.target = void 0;
					this.relativeTarget = void 0;
					return;
				}
				const layoutTransition = this.options.transition || visualElement.getDefaultTransition() || defaultLayoutTransition;
				const { onLayoutAnimationStart, onLayoutAnimationComplete } = visualElement.getProps();
				/**
				* The target layout of the element might stay the same,
				* but its position relative to its parent has changed.
				*/
				const hasTargetChanged = !this.targetLayout || !boxEqualsRounded(this.targetLayout, newLayout);
				/**
				* If the layout hasn't seemed to have changed, it might be that the
				* element is visually in the same place in the document but its position
				* relative to its parent has indeed changed. So here we check for that.
				*/
				const hasOnlyRelativeTargetChanged = !hasLayoutChanged && hasRelativeLayoutChanged;
				if (this.options.layoutRoot || this.resumeFrom || hasOnlyRelativeTargetChanged || hasLayoutChanged && (hasTargetChanged || !this.currentAnimation)) {
					if (this.resumeFrom) {
						this.resumingFrom = this.resumeFrom;
						this.resumingFrom.resumingFrom = void 0;
					}
					const animationOptions = {
						...getValueTransition(layoutTransition, "layout"),
						onPlay: onLayoutAnimationStart,
						onComplete: onLayoutAnimationComplete
					};
					if (visualElement.shouldReduceMotion || this.options.layoutRoot) {
						animationOptions.delay = 0;
						animationOptions.type = false;
					}
					this.startAnimation(animationOptions);
					/**
					* Set animation origin after starting animation to avoid layout jump
					* caused by stopping previous layout animation
					*/
					this.setAnimationOrigin(delta, hasOnlyRelativeTargetChanged, animationOptions.path);
				} else {
					/**
					* If the layout hasn't changed and we have an animation that hasn't started yet,
					* finish it immediately. Otherwise it will be animating from a location
					* that was probably never committed to screen and look like a jumpy box.
					*/
					if (!hasLayoutChanged) finishAnimation(this);
					if (this.isLead() && this.options.onExitComplete) this.options.onExitComplete();
				}
				this.targetLayout = newLayout;
			});
		}
		unmount() {
			this.options.layoutId && this.willUpdate();
			this.root.nodes.remove(this);
			const stack = this.getStack();
			stack && stack.remove(this);
			this.parent && this.parent.children.delete(this);
			this.instance = void 0;
			this.eventHandlers.clear();
			cancelFrame(this.updateProjection);
		}
		blockUpdate() {
			this.updateManuallyBlocked = true;
		}
		unblockUpdate() {
			this.updateManuallyBlocked = false;
		}
		isUpdateBlocked() {
			return this.updateManuallyBlocked || this.updateBlockedByResize;
		}
		isTreeAnimationBlocked() {
			return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || false;
		}
		startUpdate() {
			if (this.isUpdateBlocked()) return;
			this.isUpdating = true;
			this.nodes && this.nodes.forEach(resetSkewAndRotation);
			this.animationId++;
		}
		getTransformTemplate() {
			const { visualElement } = this.options;
			return visualElement && visualElement.getProps().transformTemplate;
		}
		willUpdate(shouldNotifyListeners = true) {
			this.root.hasTreeAnimated = true;
			if (this.root.isUpdateBlocked()) {
				this.options.onExitComplete && this.options.onExitComplete();
				return;
			}
			/**
			* If we're running optimised appear animations then these must be
			* cancelled before measuring the DOM. This is so we can measure
			* the true layout of the element rather than the WAAPI animation
			* which will be unaffected by the resetSkewAndRotate step.
			*
			* Note: This is a DOM write. Worst case scenario is this is sandwiched
			* between other snapshot reads which will cause unnecessary style recalculations.
			* This has to happen here though, as we don't yet know which nodes will need
			* snapshots in startUpdate(), but we only want to cancel optimised animations
			* if a layout animation measurement is actually going to be affected by them.
			*/
			if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear) cancelTreeOptimisedTransformAnimations(this);
			!this.root.isUpdating && this.root.startUpdate();
			if (this.isLayoutDirty) return;
			this.isLayoutDirty = true;
			for (let i = 0; i < this.path.length; i++) {
				const node = this.path[i];
				node.shouldResetTransform = true;
				/**
				* Percentage translates resolve against layoutBox dimensions,
				* so ancestors with them must be re-measured after transform reset.
				*/
				if (typeof node.latestValues.x === "string" || typeof node.latestValues.y === "string") node.isLayoutDirty = true;
				node.updateScroll("snapshot");
				if (node.options.layoutRoot) node.willUpdate(false);
			}
			const { layoutId, layout } = this.options;
			if (layoutId === void 0 && !layout) return;
			const transformTemplate = this.getTransformTemplate();
			this.prevTransformTemplateValue = transformTemplate ? transformTemplate(this.latestValues, "") : void 0;
			this.updateSnapshot();
			shouldNotifyListeners && this.notifyListeners("willUpdate");
		}
		update() {
			this.updateScheduled = false;
			if (this.isUpdateBlocked()) {
				const wasBlockedByResize = this.updateBlockedByResize;
				this.unblockUpdate();
				this.updateBlockedByResize = false;
				this.clearAllSnapshots();
				/**
				* When blocked by resize, still measure layouts so
				* callbacks like onLayoutMeasure fire (e.g. Reorder).
				* Skip notifyLayoutUpdate to prevent animations.
				*/
				if (wasBlockedByResize) this.nodes.forEach(forceLayoutMeasure);
				this.nodes.forEach(clearMeasurements);
				return;
			}
			/**
			* If this is a repeat of didUpdate then ignore the animation.
			*/
			if (this.animationId <= this.animationCommitId) {
				this.nodes.forEach(clearIsLayoutDirty);
				return;
			}
			this.animationCommitId = this.animationId;
			if (!this.isUpdating) this.nodes.forEach(clearIsLayoutDirty);
			else {
				this.isUpdating = false;
				/**
				* Ensure animation-blocked nodes (e.g. during drag)
				* get measured even when memoized (willUpdate skipped).
				*/
				this.nodes.forEach(ensureDraggedNodesSnapshotted);
				this.nodes.forEach(syncRelativeLayout);
				/**
				* Write
				*/
				this.nodes.forEach(resetTransformStyle);
				/**
				* Read ==================
				*/
				this.nodes.forEach(updateLayout);
				/**
				* Write
				*/
				this.nodes.forEach(notifyLayoutUpdate);
			}
			this.clearAllSnapshots();
			/**
			* Manually flush any pending updates. Ideally
			* we could leave this to the following requestAnimationFrame but this seems
			* to leave a flash of incorrectly styled content.
			*/
			const now = time.now();
			frameData.delta = clamp$1(0, 1e3 / 60, now - frameData.timestamp);
			frameData.timestamp = now;
			frameData.isProcessing = true;
			frameSteps.update.process(frameData);
			frameSteps.preRender.process(frameData);
			frameSteps.render.process(frameData);
			frameData.isProcessing = false;
		}
		didUpdate() {
			if (!this.updateScheduled) {
				this.updateScheduled = true;
				microtask.read(this.scheduleUpdate);
			}
		}
		clearAllSnapshots() {
			this.nodes.forEach(clearSnapshot);
			this.sharedNodes.forEach(removeLeadSnapshots);
		}
		scheduleUpdateProjection() {
			if (!this.projectionUpdateScheduled) {
				this.projectionUpdateScheduled = true;
				frame.preRender(this.updateProjection, false, true);
			}
		}
		scheduleCheckAfterUnmount() {
			/**
			* If the unmounting node is in a layoutGroup and did trigger a willUpdate,
			* we manually call didUpdate to give a chance to the siblings to animate.
			* Otherwise, cleanup all snapshots to prevents future nodes from reusing them.
			*/
			frame.postRender(() => {
				if (this.isLayoutDirty) this.root.didUpdate();
				else this.root.checkUpdateFailed();
			});
		}
		/**
		* Update measurements
		*/
		updateSnapshot() {
			if (this.snapshot || !this.instance) return;
			this.snapshot = this.measure();
			if (this.snapshot && !calcLength(this.snapshot.measuredBox.x) && !calcLength(this.snapshot.measuredBox.y)) this.snapshot = void 0;
		}
		updateLayout() {
			if (!this.instance) return;
			this.updateScroll();
			if (!(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty) return;
			/**
			* When a node is mounted, it simply resumes from the prevLead's
			* snapshot instead of taking a new one, but the ancestors scroll
			* might have updated while the prevLead is unmounted. We need to
			* update the scroll again to make sure the layout we measure is
			* up to date.
			*/
			if (this.resumeFrom && !this.resumeFrom.instance) for (let i = 0; i < this.path.length; i++) this.path[i].updateScroll();
			const prevLayout = this.layout;
			this.layout = this.measure(false);
			if (!this.layoutCorrected) this.layoutCorrected = createBox();
			this.isLayoutDirty = false;
			this.projectionDelta = void 0;
			this.notifyListeners("measure", this.layout.layoutBox);
			const { visualElement } = this.options;
			visualElement && visualElement.notify("LayoutMeasure", this.layout.layoutBox, prevLayout ? prevLayout.layoutBox : void 0);
		}
		updateScroll(phase = "measure") {
			let needsMeasurement = Boolean(this.options.layoutScroll && this.instance);
			if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === phase) needsMeasurement = false;
			if (needsMeasurement && this.instance) {
				const isRoot = checkIsScrollRoot(this.instance);
				this.scroll = {
					animationId: this.root.animationId,
					phase,
					isRoot,
					offset: measureScroll(this.instance),
					wasRoot: this.scroll ? this.scroll.isRoot : isRoot
				};
			}
		}
		resetTransform() {
			if (!resetTransform) return;
			const isResetRequested = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout;
			const hasProjection = this.projectionDelta && !isDeltaZero(this.projectionDelta);
			const transformTemplate = this.getTransformTemplate();
			const transformTemplateValue = transformTemplate ? transformTemplate(this.latestValues, "") : void 0;
			const transformTemplateHasChanged = transformTemplateValue !== this.prevTransformTemplateValue;
			if (isResetRequested && this.instance && (hasProjection || hasTransform(this.latestValues) || transformTemplateHasChanged)) {
				resetTransform(this.instance, transformTemplateValue);
				this.shouldResetTransform = false;
				this.scheduleRender();
			}
		}
		measure(removeTransform = true) {
			const pageBox = this.measurePageBox();
			let layoutBox = this.removeElementScroll(pageBox);
			/**
			* Measurements taken during the pre-render stage
			* still have transforms applied so we remove them
			* via calculation.
			*/
			if (removeTransform) layoutBox = this.removeTransform(layoutBox);
			roundBox(layoutBox);
			return {
				animationId: this.root.animationId,
				measuredBox: pageBox,
				layoutBox,
				latestValues: {},
				source: this.id
			};
		}
		measurePageBox() {
			const { visualElement } = this.options;
			if (!visualElement) return createBox();
			const box = visualElement.measureViewportBox();
			if (!(this.scroll?.wasRoot || this.path.some(checkNodeWasScrollRoot))) {
				const { scroll } = this.root;
				if (scroll) {
					translateAxis(box.x, scroll.offset.x);
					translateAxis(box.y, scroll.offset.y);
				}
			}
			return box;
		}
		removeElementScroll(box) {
			const boxWithoutScroll = createBox();
			copyBoxInto(boxWithoutScroll, box);
			if (this.scroll?.wasRoot) return boxWithoutScroll;
			/**
			* Performance TODO: Keep a cumulative scroll offset down the tree
			* rather than loop back up the path.
			*/
			for (let i = 0; i < this.path.length; i++) {
				const node = this.path[i];
				const { scroll, options } = node;
				if (node !== this.root && scroll && options.layoutScroll) {
					/**
					* If this is a new scroll root, we want to remove all previous scrolls
					* from the viewport box.
					*/
					if (scroll.wasRoot) copyBoxInto(boxWithoutScroll, box);
					translateAxis(boxWithoutScroll.x, scroll.offset.x);
					translateAxis(boxWithoutScroll.y, scroll.offset.y);
				}
			}
			return boxWithoutScroll;
		}
		applyTransform(box, transformOnly = false, output) {
			const withTransforms = output || createBox();
			copyBoxInto(withTransforms, box);
			for (let i = 0; i < this.path.length; i++) {
				const node = this.path[i];
				if (!transformOnly && node.options.layoutScroll && node.scroll && node !== node.root) {
					translateAxis(withTransforms.x, -node.scroll.offset.x);
					translateAxis(withTransforms.y, -node.scroll.offset.y);
				}
				if (!hasTransform(node.latestValues)) continue;
				transformBox(withTransforms, node.latestValues, node.layout?.layoutBox);
			}
			if (hasTransform(this.latestValues)) transformBox(withTransforms, this.latestValues, this.layout?.layoutBox);
			return withTransforms;
		}
		removeTransform(box) {
			const boxWithoutTransform = createBox();
			copyBoxInto(boxWithoutTransform, box);
			for (let i = 0; i < this.path.length; i++) {
				const node = this.path[i];
				if (!hasTransform(node.latestValues)) continue;
				let sourceBox;
				if (node.instance) {
					hasScale(node.latestValues) && node.updateSnapshot();
					sourceBox = createBox();
					copyBoxInto(sourceBox, node.measurePageBox());
				}
				removeBoxTransforms(boxWithoutTransform, node.latestValues, node.snapshot?.layoutBox, sourceBox);
			}
			if (hasTransform(this.latestValues)) removeBoxTransforms(boxWithoutTransform, this.latestValues);
			return boxWithoutTransform;
		}
		setTargetDelta(delta) {
			this.targetDelta = delta;
			this.root.scheduleUpdateProjection();
			this.isProjectionDirty = true;
		}
		setOptions(options) {
			this.options = {
				...this.options,
				...options,
				crossfade: options.crossfade !== void 0 ? options.crossfade : true
			};
		}
		clearMeasurements() {
			this.scroll = void 0;
			this.layout = void 0;
			this.snapshot = void 0;
			this.prevTransformTemplateValue = void 0;
			this.targetDelta = void 0;
			this.target = void 0;
			this.isLayoutDirty = false;
		}
		forceRelativeParentToResolveTarget() {
			if (!this.relativeParent) return;
			/**
			* If the parent target isn't up-to-date, force it to update.
			* This is an unfortunate de-optimisation as it means any updating relative
			* projection will cause all the relative parents to recalculate back
			* up the tree.
			*/
			if (this.relativeParent.resolvedRelativeTargetAt !== frameData.timestamp) this.relativeParent.resolveTargetDelta(true);
		}
		resolveTargetDelta(forceRecalculation = false) {
			/**
			* Once the dirty status of nodes has been spread through the tree, we also
			* need to check if we have a shared node of a different depth that has itself
			* been dirtied.
			*/
			const lead = this.getLead();
			this.isProjectionDirty || (this.isProjectionDirty = lead.isProjectionDirty);
			this.isTransformDirty || (this.isTransformDirty = lead.isTransformDirty);
			this.isSharedProjectionDirty || (this.isSharedProjectionDirty = lead.isSharedProjectionDirty);
			const isShared = Boolean(this.resumingFrom) || this !== lead;
			if (!(forceRecalculation || isShared && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
			const { layout, layoutId } = this.options;
			/**
			* If we have no layout, we can't perform projection, so early return
			*/
			if (!this.layout || !(layout || layoutId)) return;
			this.resolvedRelativeTargetAt = frameData.timestamp;
			const relativeParent = this.getClosestProjectingParent();
			/**
			* If we don't have a targetDelta but do have a layout, we can attempt to resolve
			* a relativeParent. This will allow a component to perform scale correction
			* even if no animation has started.
			*/
			if (!this.targetDelta && !this.relativeTarget) if (this.options.layoutAnchor !== false && relativeParent && relativeParent.layout) this.createRelativeTarget(relativeParent, this.layout.layoutBox, relativeParent.layout.layoutBox);
			else this.removeRelativeTarget();
			/**
			* If we have no relative target or no target delta our target isn't valid
			* for this frame.
			*/
			if (!this.relativeTarget && !this.targetDelta) return;
			/**
			* Lazy-init target data structure
			*/
			if (!this.target) {
				this.target = createBox();
				this.targetWithTransforms = createBox();
			}
			/**
			* If we've got a relative box for this component, resolve it into a target relative to the parent.
			*/
			if (this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) {
				this.forceRelativeParentToResolveTarget();
				calcRelativeBox(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0);
			} else if (this.targetDelta) {
				if (Boolean(this.resumingFrom)) this.applyTransform(this.layout.layoutBox, false, this.target);
				else copyBoxInto(this.target, this.layout.layoutBox);
				applyBoxDelta(this.target, this.targetDelta);
			} else
 /**
			* If no target, use own layout as target
			*/
			copyBoxInto(this.target, this.layout.layoutBox);
			/**
			* If we've been told to attempt to resolve a relative target, do so.
			*/
			if (this.attemptToResolveRelativeTarget) {
				this.attemptToResolveRelativeTarget = false;
				if (this.options.layoutAnchor !== false && relativeParent && Boolean(relativeParent.resumingFrom) === Boolean(this.resumingFrom) && !relativeParent.options.layoutScroll && relativeParent.target && this.animationProgress !== 1) this.createRelativeTarget(relativeParent, this.target, relativeParent.target);
				else this.relativeParent = this.relativeTarget = void 0;
			}
			/**
			* Increase debug counter for resolved target deltas
			*/
			if (statsBuffer.value) metrics.calculatedTargetDeltas++;
		}
		getClosestProjectingParent() {
			if (!this.parent || hasScale(this.parent.latestValues) || has2DTranslate(this.parent.latestValues)) return;
			if (this.parent.isProjecting()) return this.parent;
			else return this.parent.getClosestProjectingParent();
		}
		isProjecting() {
			return Boolean((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
		}
		createRelativeTarget(relativeParent, layout, parentLayout) {
			this.relativeParent = relativeParent;
			this.forceRelativeParentToResolveTarget();
			this.relativeTarget = createBox();
			this.relativeTargetOrigin = createBox();
			calcRelativePosition(this.relativeTargetOrigin, layout, parentLayout, this.options.layoutAnchor || void 0);
			copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
		}
		removeRelativeTarget() {
			this.relativeParent = this.relativeTarget = void 0;
		}
		calcProjection() {
			const lead = this.getLead();
			const isShared = Boolean(this.resumingFrom) || this !== lead;
			let canSkip = true;
			/**
			* If this is a normal layout animation and neither this node nor its nearest projecting
			* is dirty then we can't skip.
			*/
			if (this.isProjectionDirty || this.parent?.isProjectionDirty) canSkip = false;
			/**
			* If this is a shared layout animation and this node's shared projection is dirty then
			* we can't skip.
			*/
			if (isShared && (this.isSharedProjectionDirty || this.isTransformDirty)) canSkip = false;
			/**
			* If we have resolved the target this frame we must recalculate the
			* projection to ensure it visually represents the internal calculations.
			*/
			if (this.resolvedRelativeTargetAt === frameData.timestamp) canSkip = false;
			if (canSkip) return;
			const { layout, layoutId } = this.options;
			/**
			* If this section of the tree isn't animating we can
			* delete our target sources for the following frame.
			*/
			this.isTreeAnimating = Boolean(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation);
			if (!this.isTreeAnimating) this.targetDelta = this.relativeTarget = void 0;
			if (!this.layout || !(layout || layoutId)) return;
			/**
			* Reset the corrected box with the latest values from box, as we're then going
			* to perform mutative operations on it.
			*/
			copyBoxInto(this.layoutCorrected, this.layout.layoutBox);
			/**
			* Record previous tree scales before updating.
			*/
			const prevTreeScaleX = this.treeScale.x;
			const prevTreeScaleY = this.treeScale.y;
			/**
			* Apply all the parent deltas to this box to produce the corrected box. This
			* is the layout box, as it will appear on screen as a result of the transforms of its parents.
			*/
			applyTreeDeltas(this.layoutCorrected, this.treeScale, this.path, isShared);
			/**
			* If this layer needs to perform scale correction but doesn't have a target,
			* use the layout as the target.
			*/
			if (lead.layout && !lead.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1)) {
				lead.target = lead.layout.layoutBox;
				lead.targetWithTransforms = createBox();
			}
			const { target } = lead;
			if (!target) {
				/**
				* If we don't have a target to project into, but we were previously
				* projecting, we want to remove the stored transform and schedule
				* a render to ensure the elements reflect the removed transform.
				*/
				if (this.prevProjectionDelta) {
					this.createProjectionDeltas();
					this.scheduleRender();
				}
				return;
			}
			if (!this.projectionDelta || !this.prevProjectionDelta) this.createProjectionDeltas();
			else {
				copyAxisDeltaInto(this.prevProjectionDelta.x, this.projectionDelta.x);
				copyAxisDeltaInto(this.prevProjectionDelta.y, this.projectionDelta.y);
			}
			/**
			* Update the delta between the corrected box and the target box before user-set transforms were applied.
			* This will allow us to calculate the corrected borderRadius and boxShadow to compensate
			* for our layout reprojection, but still allow them to be scaled correctly by the user.
			* It might be that to simplify this we may want to accept that user-set scale is also corrected
			* and we wouldn't have to keep and calc both deltas, OR we could support a user setting
			* to allow people to choose whether these styles are corrected based on just the
			* layout reprojection or the final bounding box.
			*/
			calcBoxDelta(this.projectionDelta, this.layoutCorrected, target, this.latestValues);
			if (this.treeScale.x !== prevTreeScaleX || this.treeScale.y !== prevTreeScaleY || !axisDeltaEquals(this.projectionDelta.x, this.prevProjectionDelta.x) || !axisDeltaEquals(this.projectionDelta.y, this.prevProjectionDelta.y)) {
				this.hasProjected = true;
				this.scheduleRender();
				this.notifyListeners("projectionUpdate", target);
			}
			/**
			* Increase debug counter for recalculated projections
			*/
			if (statsBuffer.value) metrics.calculatedProjections++;
		}
		hide() {
			this.isVisible = false;
		}
		show() {
			this.isVisible = true;
		}
		scheduleRender(notifyAll = true) {
			this.options.visualElement?.scheduleRender();
			if (notifyAll) {
				const stack = this.getStack();
				stack && stack.scheduleRender();
			}
			if (this.resumingFrom && !this.resumingFrom.instance) this.resumingFrom = void 0;
		}
		createProjectionDeltas() {
			this.prevProjectionDelta = createDelta();
			this.projectionDelta = createDelta();
			this.projectionDeltaWithTransform = createDelta();
		}
		setAnimationOrigin(delta, hasOnlyRelativeTargetChanged = false, pathFn) {
			const snapshot = this.snapshot;
			const snapshotLatestValues = snapshot ? snapshot.latestValues : {};
			const mixedValues = { ...this.latestValues };
			const targetDelta = createDelta();
			if (!this.relativeParent || !this.relativeParent.options.layoutRoot) this.relativeTarget = this.relativeTargetOrigin = void 0;
			this.attemptToResolveRelativeTarget = !hasOnlyRelativeTargetChanged;
			const relativeLayout = createBox();
			const isSharedLayoutAnimation = (snapshot ? snapshot.source : void 0) !== (this.layout ? this.layout.source : void 0);
			const stack = this.getStack();
			const isOnlyMember = !stack || stack.members.length <= 1;
			const shouldCrossfadeOpacity = Boolean(isSharedLayoutAnimation && !isOnlyMember && this.options.crossfade === true && !this.path.some(hasOpacityCrossfade));
			this.animationProgress = 0;
			let prevRelativeTarget;
			const interpolate = pathFn?.interpolateProjection(delta);
			this.mixTargetDelta = (latest) => {
				const progress = latest / 1e3;
				const point = interpolate?.(progress);
				if (point) {
					targetDelta.x.translate = point.x;
					targetDelta.x.scale = mixNumber$1(delta.x.scale, 1, progress);
					targetDelta.x.origin = delta.x.origin;
					targetDelta.x.originPoint = delta.x.originPoint;
					targetDelta.y.translate = point.y;
					targetDelta.y.scale = mixNumber$1(delta.y.scale, 1, progress);
					targetDelta.y.origin = delta.y.origin;
					targetDelta.y.originPoint = delta.y.originPoint;
				} else {
					mixAxisDeltaLinear(targetDelta.x, delta.x, progress);
					mixAxisDeltaLinear(targetDelta.y, delta.y, progress);
				}
				this.setTargetDelta(targetDelta);
				if (this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
					calcRelativePosition(relativeLayout, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0);
					mixBox(this.relativeTarget, this.relativeTargetOrigin, relativeLayout, progress);
					/**
					* If this is an unchanged relative target we can consider the
					* projection not dirty.
					*/
					if (prevRelativeTarget && boxEquals(this.relativeTarget, prevRelativeTarget)) this.isProjectionDirty = false;
					if (!prevRelativeTarget) prevRelativeTarget = createBox();
					copyBoxInto(prevRelativeTarget, this.relativeTarget);
				}
				if (isSharedLayoutAnimation) {
					this.animationValues = mixedValues;
					mixValues(mixedValues, snapshotLatestValues, this.latestValues, progress, shouldCrossfadeOpacity, isOnlyMember);
				}
				if (point && point.rotate !== void 0) {
					if (!this.animationValues) this.animationValues = mixedValues;
					this.animationValues.pathRotation = point.rotate;
				}
				this.root.scheduleUpdateProjection();
				this.scheduleRender();
				this.animationProgress = progress;
			};
			this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
		}
		startAnimation(options) {
			this.notifyListeners("animationStart");
			this.currentAnimation?.stop();
			this.resumingFrom?.currentAnimation?.stop();
			if (this.pendingAnimation) {
				cancelFrame(this.pendingAnimation);
				this.pendingAnimation = void 0;
			}
			/**
			* Start the animation in the next frame to have a frame with progress 0,
			* where the target is the same as when the animation started, so we can
			* calculate the relative positions correctly for instant transitions.
			*/
			this.pendingAnimation = frame.update(() => {
				globalProjectionState.hasAnimatedSinceResize = true;
				this.motionValue || (this.motionValue = motionValue(0));
				this.motionValue.jump(0, false);
				this.currentAnimation = animateSingleValue(this.motionValue, [0, 1e3], {
					...options,
					velocity: 0,
					isSync: true,
					onUpdate: (latest) => {
						this.mixTargetDelta(latest);
						options.onUpdate && options.onUpdate(latest);
					},
					onComplete: () => {
						options.onComplete && options.onComplete();
						this.completeAnimation();
					}
				});
				notifyLayoutAnimationStart(this.currentAnimation, this);
				if (this.resumingFrom) this.resumingFrom.currentAnimation = this.currentAnimation;
				this.pendingAnimation = void 0;
			});
		}
		completeAnimation() {
			if (this.resumingFrom) {
				this.resumingFrom.currentAnimation = void 0;
				this.resumingFrom.preserveOpacity = void 0;
			}
			const stack = this.getStack();
			stack && stack.exitAnimationComplete();
			this.resumingFrom = this.currentAnimation = this.animationValues = void 0;
			this.notifyListeners("animationComplete");
		}
		finishAnimation() {
			if (this.currentAnimation) {
				this.mixTargetDelta && this.mixTargetDelta(animationTarget);
				this.currentAnimation.stop();
			}
			this.completeAnimation();
		}
		applyTransformsToTarget() {
			const lead = this.getLead();
			const { targetWithTransforms, layout, latestValues } = lead;
			let { target } = lead;
			if (!targetWithTransforms || !target || !layout) return;
			/**
			* If we're only animating position, and this element isn't the lead element,
			* then instead of projecting into the lead box we instead want to calculate
			* a new target that aligns the two boxes but maintains the layout shape.
			*/
			if (this !== lead && this.layout && layout && shouldAnimatePositionOnly(this.options.animationType, this.layout.layoutBox, layout.layoutBox)) {
				target = this.target || createBox();
				const xLength = calcLength(this.layout.layoutBox.x);
				target.x.min = lead.target.x.min;
				target.x.max = target.x.min + xLength;
				const yLength = calcLength(this.layout.layoutBox.y);
				target.y.min = lead.target.y.min;
				target.y.max = target.y.min + yLength;
			}
			copyBoxInto(targetWithTransforms, target);
			/**
			* Apply the latest user-set transforms to the targetBox to produce the targetBoxFinal.
			* This is the final box that we will then project into by calculating a transform delta and
			* applying it to the corrected box.
			*/
			transformBox(targetWithTransforms, latestValues);
			/**
			* Update the delta between the corrected box and the final target box, after
			* user-set transforms are applied to it. This will be used by the renderer to
			* create a transform style that will reproject the element from its layout layout
			* into the desired bounding box.
			*/
			calcBoxDelta(this.projectionDeltaWithTransform, this.layoutCorrected, targetWithTransforms, latestValues);
		}
		registerSharedNode(layoutId, node) {
			if (!this.sharedNodes.has(layoutId)) this.sharedNodes.set(layoutId, new NodeStack());
			this.sharedNodes.get(layoutId).add(node);
			const config = node.options.initialPromotionConfig;
			node.promote({
				transition: config ? config.transition : void 0,
				preserveFollowOpacity: config && config.shouldPreserveFollowOpacity ? config.shouldPreserveFollowOpacity(node) : void 0
			});
		}
		isLead() {
			const stack = this.getStack();
			return stack ? stack.lead === this : true;
		}
		getLead() {
			const { layoutId } = this.options;
			return layoutId ? this.getStack()?.lead || this : this;
		}
		getPrevLead() {
			const { layoutId } = this.options;
			return layoutId ? this.getStack()?.prevLead : void 0;
		}
		getStack() {
			const { layoutId } = this.options;
			if (layoutId) return this.root.sharedNodes.get(layoutId);
		}
		promote({ needsReset, transition, preserveFollowOpacity } = {}) {
			const stack = this.getStack();
			if (stack) stack.promote(this, preserveFollowOpacity);
			if (needsReset) {
				this.projectionDelta = void 0;
				this.needsReset = true;
			}
			if (transition) this.setOptions({ transition });
		}
		relegate() {
			const stack = this.getStack();
			if (stack) return stack.relegate(this);
			else return false;
		}
		resetSkewAndRotation() {
			const { visualElement } = this.options;
			if (!visualElement) return;
			let hasDistortingTransform = false;
			/**
			* An unrolled check for rotation values. Most elements don't have any rotation and
			* skipping the nested loop and new object creation is 50% faster.
			*/
			const { latestValues } = visualElement;
			if (latestValues.z || latestValues.rotate || latestValues.rotateX || latestValues.rotateY || latestValues.rotateZ || latestValues.skewX || latestValues.skewY) hasDistortingTransform = true;
			if (!hasDistortingTransform) return;
			const resetValues = {};
			if (latestValues.z) resetDistortingTransform("z", visualElement, resetValues, this.animationValues);
			for (let i = 0; i < transformAxes.length; i++) {
				resetDistortingTransform(`rotate${transformAxes[i]}`, visualElement, resetValues, this.animationValues);
				resetDistortingTransform(`skew${transformAxes[i]}`, visualElement, resetValues, this.animationValues);
			}
			visualElement.render();
			for (const key in resetValues) {
				visualElement.setStaticValue(key, resetValues[key]);
				if (this.animationValues) this.animationValues[key] = resetValues[key];
			}
			visualElement.scheduleRender();
		}
		applyProjectionStyles(targetStyle, styleProp) {
			if (!this.instance || this.isSVG) return;
			if (!this.isVisible) {
				targetStyle.visibility = "hidden";
				return;
			}
			const transformTemplate = this.getTransformTemplate();
			if (this.needsReset) {
				this.needsReset = false;
				targetStyle.visibility = "";
				targetStyle.opacity = "";
				targetStyle.pointerEvents = resolveMotionValue(styleProp?.pointerEvents) || "";
				targetStyle.transform = transformTemplate ? transformTemplate(this.latestValues, "") : "none";
				return;
			}
			const lead = this.getLead();
			if (!this.projectionDelta || !this.layout || !lead.target) {
				if (this.options.layoutId) {
					targetStyle.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1;
					targetStyle.pointerEvents = resolveMotionValue(styleProp?.pointerEvents) || "";
				}
				if (this.hasProjected && !hasTransform(this.latestValues)) {
					targetStyle.transform = transformTemplate ? transformTemplate({}, "") : "none";
					this.hasProjected = false;
				}
				return;
			}
			targetStyle.visibility = "";
			const valuesToRender = lead.animationValues || lead.latestValues;
			this.applyTransformsToTarget();
			let transform = buildProjectionTransform(this.projectionDeltaWithTransform, this.treeScale, valuesToRender);
			if (transformTemplate) transform = transformTemplate(valuesToRender, transform);
			targetStyle.transform = transform;
			const { x, y } = this.projectionDelta;
			targetStyle.transformOrigin = `${x.origin * 100}% ${y.origin * 100}% 0`;
			if (lead.animationValues)
 /**
			* If the lead component is animating, assign this either the entering/leaving
			* opacity
			*/
			targetStyle.opacity = lead === this ? valuesToRender.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : valuesToRender.opacityExit;
			else
 /**
			* Or we're not animating at all, set the lead component to its layout
			* opacity and other components to hidden.
			*/
			targetStyle.opacity = lead === this ? valuesToRender.opacity !== void 0 ? valuesToRender.opacity : "" : valuesToRender.opacityExit !== void 0 ? valuesToRender.opacityExit : 0;
			/**
			* Apply scale correction
			*/
			for (const key in scaleCorrectors) {
				if (valuesToRender[key] === void 0) continue;
				const { correct, applyTo, isCSSVariable } = scaleCorrectors[key];
				/**
				* Only apply scale correction to the value if we have an
				* active projection transform. Otherwise these values become
				* vulnerable to distortion if the element changes size without
				* a corresponding layout animation.
				*/
				const corrected = transform === "none" ? valuesToRender[key] : correct(valuesToRender[key], lead);
				if (applyTo) {
					const num = applyTo.length;
					for (let i = 0; i < num; i++) targetStyle[applyTo[i]] = corrected;
				} else if (isCSSVariable) this.options.visualElement.renderState.vars[key] = corrected;
				else targetStyle[key] = corrected;
			}
			/**
			* Disable pointer events on follow components. This is to ensure
			* that if a follow component covers a lead component it doesn't block
			* pointer events on the lead.
			*/
			if (this.options.layoutId) targetStyle.pointerEvents = lead === this ? resolveMotionValue(styleProp?.pointerEvents) || "" : "none";
		}
		clearSnapshot() {
			this.resumeFrom = this.snapshot = void 0;
		}
		resetTree() {
			this.root.nodes.forEach((node) => node.currentAnimation?.stop());
			this.root.nodes.forEach(clearMeasurements);
			this.root.sharedNodes.clear();
		}
	};
}
function updateLayout(node) {
	node.updateLayout();
}
function notifyLayoutUpdate(node) {
	const snapshot = node.resumeFrom?.snapshot || node.snapshot;
	if (node.isLead() && node.layout && snapshot && node.hasListeners("didUpdate")) {
		const { layoutBox: layout, measuredBox: measuredLayout } = node.layout;
		const { animationType } = node.options;
		const isShared = snapshot.source !== node.layout.source;
		if (animationType === "size") eachAxis((axis) => {
			const axisSnapshot = isShared ? snapshot.measuredBox[axis] : snapshot.layoutBox[axis];
			const length = calcLength(axisSnapshot);
			axisSnapshot.min = layout[axis].min;
			axisSnapshot.max = axisSnapshot.min + length;
		});
		else if (animationType === "x" || animationType === "y") {
			const snapAxis = animationType === "x" ? "y" : "x";
			copyAxisInto(isShared ? snapshot.measuredBox[snapAxis] : snapshot.layoutBox[snapAxis], layout[snapAxis]);
		} else if (shouldAnimatePositionOnly(animationType, snapshot.layoutBox, layout)) eachAxis((axis) => {
			const axisSnapshot = isShared ? snapshot.measuredBox[axis] : snapshot.layoutBox[axis];
			const length = calcLength(layout[axis]);
			axisSnapshot.max = axisSnapshot.min + length;
			/**
			* Ensure relative target gets resized and rerendererd
			*/
			if (node.relativeTarget && !node.currentAnimation) {
				node.isProjectionDirty = true;
				node.relativeTarget[axis].max = node.relativeTarget[axis].min + length;
			}
		});
		const layoutDelta = createDelta();
		calcBoxDelta(layoutDelta, layout, snapshot.layoutBox);
		const visualDelta = createDelta();
		if (isShared) calcBoxDelta(visualDelta, node.applyTransform(measuredLayout, true), snapshot.measuredBox);
		else calcBoxDelta(visualDelta, layout, snapshot.layoutBox);
		const hasLayoutChanged = !isDeltaZero(layoutDelta);
		let hasRelativeLayoutChanged = false;
		if (!node.resumeFrom) {
			const relativeParent = node.getClosestProjectingParent();
			/**
			* If the relativeParent is itself resuming from a different element then
			* the relative snapshot is not relavent
			*/
			if (relativeParent && !relativeParent.resumeFrom) {
				const { snapshot: parentSnapshot, layout: parentLayout } = relativeParent;
				if (parentSnapshot && parentLayout) {
					const anchor = node.options.layoutAnchor || void 0;
					const relativeSnapshot = createBox();
					calcRelativePosition(relativeSnapshot, snapshot.layoutBox, parentSnapshot.layoutBox, anchor);
					const relativeLayout = createBox();
					calcRelativePosition(relativeLayout, layout, parentLayout.layoutBox, anchor);
					if (!boxEqualsRounded(relativeSnapshot, relativeLayout)) hasRelativeLayoutChanged = true;
					if (relativeParent.options.layoutRoot) {
						node.relativeTarget = relativeLayout;
						node.relativeTargetOrigin = relativeSnapshot;
						node.relativeParent = relativeParent;
					}
				}
			}
		}
		node.notifyListeners("didUpdate", {
			layout,
			snapshot,
			delta: visualDelta,
			layoutDelta,
			hasLayoutChanged,
			hasRelativeLayoutChanged
		});
	} else if (node.isLead()) {
		const { onExitComplete } = node.options;
		onExitComplete && onExitComplete();
	}
	/**
	* Clearing transition
	* TODO: Investigate why this transition is being passed in as {type: false } from Framer
	* and why we need it at all
	*/
	node.options.transition = void 0;
}
function propagateDirtyNodes(node) {
	/**
	* Increase debug counter for nodes encountered this frame
	*/
	if (statsBuffer.value) metrics.nodes++;
	if (!node.parent) return;
	/**
	* If this node isn't projecting, propagate isProjectionDirty. It will have
	* no performance impact but it will allow the next child that *is* projecting
	* but *isn't* dirty to just check its parent to see if *any* ancestor needs
	* correcting.
	*/
	if (!node.isProjecting()) node.isProjectionDirty = node.parent.isProjectionDirty;
	/**
	* Propagate isSharedProjectionDirty and isTransformDirty
	* throughout the whole tree. A future revision can take another look at
	* this but for safety we still recalcualte shared nodes.
	*/
	node.isSharedProjectionDirty || (node.isSharedProjectionDirty = Boolean(node.isProjectionDirty || node.parent.isProjectionDirty || node.parent.isSharedProjectionDirty));
	node.isTransformDirty || (node.isTransformDirty = node.parent.isTransformDirty);
}
function cleanDirtyNodes(node) {
	node.isProjectionDirty = node.isSharedProjectionDirty = node.isTransformDirty = false;
}
function clearSnapshot(node) {
	node.clearSnapshot();
}
function clearMeasurements(node) {
	node.clearMeasurements();
}
function forceLayoutMeasure(node) {
	node.isLayoutDirty = true;
	node.updateLayout();
}
function clearIsLayoutDirty(node) {
	node.isLayoutDirty = false;
}
/**
* When a node is animation-blocked (e.g. during drag) and its component
* didn't re-render (memoized), willUpdate() is never called so there's
* no snapshot. Use the previous layout as a snapshot and mark dirty so
* resetTransform/updateLayout/notifyLayoutUpdate process it normally.
*/
function ensureDraggedNodesSnapshotted(node) {
	if (node.isAnimationBlocked && node.layout && !node.isLayoutDirty) {
		node.snapshot = node.layout;
		node.isLayoutDirty = true;
	}
}
/**
* If a node's relative parent is about to be re-measured but the node isn't
* (e.g. it's in another LayoutGroup), its relative target is out of date.
* If it's layout animating, re-measure it too, so its relative target keeps
* resolving against current layouts. Otherwise its layout is still valid
* relative to its parent, so drop the relative target, and any targetDelta
* left over from a finished animation while an ancestor still animates, to be
* rebuilt from its layout.
*/
function syncRelativeLayout(node) {
	if (node.relativeTarget && node.relativeParent?.isLayoutDirty) if (node.currentAnimation) node.isLayoutDirty = true;
	else {
		node.targetDelta = void 0;
		node.removeRelativeTarget();
	}
}
function resetTransformStyle(node) {
	const { visualElement } = node.options;
	if (visualElement && visualElement.getProps().onBeforeLayoutMeasure) visualElement.notify("BeforeLayoutMeasure");
	node.resetTransform();
}
function finishAnimation(node) {
	node.finishAnimation();
	node.targetDelta = node.relativeTarget = node.target = void 0;
	node.isProjectionDirty = true;
}
function resolveTargetDelta(node) {
	node.resolveTargetDelta();
}
function calcProjection(node) {
	node.calcProjection();
}
function resetSkewAndRotation(node) {
	node.resetSkewAndRotation();
}
function removeLeadSnapshots(stack) {
	stack.removeLeadSnapshot();
}
function mixAxisDeltaLinear(output, delta, p) {
	output.translate = mixNumber$1(delta.translate, 0, p);
	output.scale = mixNumber$1(delta.scale, 1, p);
	output.origin = delta.origin;
	output.originPoint = delta.originPoint;
}
function mixAxis(output, from, to, p) {
	output.min = mixNumber$1(from.min, to.min, p);
	output.max = mixNumber$1(from.max, to.max, p);
}
function mixBox(output, from, to, p) {
	mixAxis(output.x, from.x, to.x, p);
	mixAxis(output.y, from.y, to.y, p);
}
function hasOpacityCrossfade(node) {
	return node.animationValues && node.animationValues.opacityExit !== void 0;
}
var defaultLayoutTransition = {
	duration: .45,
	ease: [
		.4,
		0,
		.1,
		1
	]
};
var userAgentContains = (string) => typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(string);
/**
* Measured bounding boxes must be rounded in Safari and
* left untouched in Chrome, otherwise non-integer layouts within scaled-up elements
* can appear to jump.
*/
var roundPoint = userAgentContains("applewebkit/") && !userAgentContains("chrome/") ? Math.round : noop;
function roundAxis(axis) {
	axis.min = roundPoint(axis.min);
	axis.max = roundPoint(axis.max);
}
function roundBox(box) {
	roundAxis(box.x);
	roundAxis(box.y);
}
function shouldAnimatePositionOnly(animationType, snapshot, layout) {
	return animationType === "position" || animationType === "preserve-aspect" && !isNear(aspectRatio(snapshot), aspectRatio(layout), .2);
}
function checkNodeWasScrollRoot(node) {
	return node !== node.root && node.scroll?.wasRoot;
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/projection/node/DocumentProjectionNode.mjs
var DocumentProjectionNode = createProjectionNode$1({
	attachResizeListener: (ref, notify) => addDomEvent(ref, "resize", notify),
	measureScroll: () => ({
		x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
		y: document.documentElement.scrollTop || document.body?.scrollTop || 0
	}),
	checkIsScrollRoot: () => true
});
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion-dom/dist/es/projection/node/HTMLProjectionNode.mjs
var rootProjectionNode = { current: void 0 };
var HTMLProjectionNode = createProjectionNode$1({
	measureScroll: (instance) => ({
		x: instance.scrollLeft,
		y: instance.scrollTop
	}),
	defaultParent: () => {
		if (!rootProjectionNode.current) {
			const documentNode = new DocumentProjectionNode({});
			documentNode.mount(window);
			documentNode.setOptions({ layoutScroll: true });
			rootProjectionNode.current = documentNode;
		}
		return rootProjectionNode.current;
	},
	resetTransform: (instance, value) => {
		instance.style.transform = value !== void 0 ? value : "none";
	},
	checkIsScrollRoot: (instance) => Boolean(window.getComputedStyle(instance).position === "fixed")
});
//#endregion
//#region node_modules/@sanity/ui/node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs
/**
* @public
*/
var MotionConfigContext = (0, import_react.createContext)({
	transformPagePoint: (p) => p,
	isStatic: false,
	reducedMotion: "never"
});
//#endregion
//#region node_modules/@sanity/ui/node_modules/framer-motion/dist/es/utils/use-composed-ref.mjs
/**
* Taken from https://github.com/radix-ui/primitives/blob/main/packages/react/compose-refs/src/compose-refs.tsx
*/
/**
* Set a given ref to a given value
* This utility takes care of different types of refs: callback refs and RefObject(s)
*/
function setRef(ref, value) {
	if (typeof ref === "function") return ref(value);
	else if (ref !== null && ref !== void 0) ref.current = value;
}
/**
* A utility to compose multiple refs together
* Accepts callback refs and RefObject(s)
*/
function composeRefs(...refs) {
	return (node) => {
		let hasCleanup = false;
		const cleanups = refs.map((ref) => {
			const cleanup = setRef(ref, node);
			if (!hasCleanup && typeof cleanup === "function") hasCleanup = true;
			return cleanup;
		});
		if (hasCleanup) return () => {
			for (let i = 0; i < cleanups.length; i++) {
				const cleanup = cleanups[i];
				if (typeof cleanup === "function") cleanup();
				else setRef(refs[i], null);
			}
		};
	};
}
/**
* A custom hook that composes multiple refs
* Accepts callback refs and RefObject(s)
*/
function useComposedRefs(...refs) {
	return import_react.useCallback(composeRefs(...refs), refs);
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs
/**
* Measurement functionality has to be within a separate component
* to leverage snapshot lifecycle.
*/
var PopChildMeasure = class extends import_react.Component {
	getSnapshotBeforeUpdate(prevProps) {
		const element = this.props.childRef.current;
		if (isHTMLElement$1(element) && prevProps.isPresent && !this.props.isPresent && this.props.pop !== false) {
			const parent = element.offsetParent;
			const parentWidth = isHTMLElement$1(parent) ? parent.offsetWidth || 0 : 0;
			const parentHeight = isHTMLElement$1(parent) ? parent.offsetHeight || 0 : 0;
			const computedStyle = getComputedStyle(element);
			const size = this.props.sizeRef.current;
			size.height = parseFloat(computedStyle.height);
			size.width = parseFloat(computedStyle.width);
			size.top = element.offsetTop;
			size.left = element.offsetLeft;
			size.right = parentWidth - size.width - size.left;
			size.bottom = parentHeight - size.height - size.top;
			size.direction = computedStyle.direction;
		}
		return null;
	}
	/**
	* Required with getSnapshotBeforeUpdate to stop React complaining.
	*/
	componentDidUpdate() {}
	render() {
		return this.props.children;
	}
};
function PopChild({ children, isPresent, anchorX, anchorY, root, pop }) {
	const id = (0, import_react.useId)();
	const ref = (0, import_react.useRef)(null);
	const size = (0, import_react.useRef)({
		width: 0,
		height: 0,
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		direction: "ltr"
	});
	const { nonce } = (0, import_react.useContext)(MotionConfigContext);
	const composedRef = useComposedRefs(ref, pop !== false ? children.props?.ref ?? children?.ref : void 0);
	/**
	* We create and inject a style block so we can apply this explicit
	* sizing in a non-destructive manner by just deleting the style block.
	*
	* We can't apply size via render as the measurement happens
	* in getSnapshotBeforeUpdate (post-render), likewise if we apply the
	* styles directly on the DOM node, we might be overwriting
	* styles set via the style prop.
	*/
	(0, import_react.useInsertionEffect)(() => {
		const { width, height, top, left, right, bottom, direction } = size.current;
		if (isPresent || pop === false || !ref.current || !width || !height) return;
		const isRTL = direction === "rtl";
		const x = anchorX === "left" ? isRTL ? `right: ${right}` : `left: ${left}` : isRTL ? `left: ${left}` : `right: ${right}`;
		const y = anchorY === "bottom" ? `bottom: ${bottom}` : `top: ${top}`;
		ref.current.dataset.motionPopId = id;
		const style = document.createElement("style");
		if (nonce) style.nonce = nonce;
		const parent = root ?? document.head;
		parent.appendChild(style);
		if (style.sheet) style.sheet.insertRule(`
          [data-motion-pop-id="${id}"] {
            position: absolute !important;
            width: ${width}px !important;
            height: ${height}px !important;
            ${x}px !important;
            ${y}px !important;
          }
        `);
		return () => {
			ref.current?.removeAttribute("data-motion-pop-id");
			if (parent.contains(style)) parent.removeChild(style);
		};
	}, [isPresent]);
	return (0, import_jsx_runtime.jsx)(PopChildMeasure, {
		isPresent,
		childRef: ref,
		sizeRef: size,
		pop,
		children: pop === false ? children : import_react.cloneElement(children, { ref: composedRef })
	});
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs
var PresenceChild = ({ children, initial, isPresent, onExitComplete, custom, presenceAffectsLayout, mode, anchorX, anchorY, root }) => {
	const presenceChildren = useConstant(newChildrenMap);
	const id = (0, import_react.useId)();
	const isPresentRef = (0, import_react.useRef)(isPresent);
	const onExitCompleteRef = (0, import_react.useRef)(onExitComplete);
	useIsomorphicLayoutEffect(() => {
		isPresentRef.current = isPresent;
		onExitCompleteRef.current = onExitComplete;
	});
	let isReusedContext = true;
	let context = (0, import_react.useMemo)(() => {
		isReusedContext = false;
		return {
			id,
			initial,
			isPresent,
			custom,
			onExitComplete: (childId) => {
				presenceChildren.set(childId, true);
				for (const isComplete of presenceChildren.values()) if (!isComplete) return;
				onExitComplete && onExitComplete();
			},
			register: (childId) => {
				presenceChildren.set(childId, false);
				return () => {
					presenceChildren.delete(childId);
					!isPresentRef.current && !presenceChildren.size && onExitCompleteRef.current?.();
				};
			}
		};
	}, [
		isPresent,
		presenceChildren,
		onExitComplete
	]);
	/**
	* If the presence of a child affects the layout of the components around it,
	* we want to make a new context value to ensure they get re-rendered
	* so they can detect that layout change.
	*/
	if (presenceAffectsLayout && isReusedContext) context = { ...context };
	(0, import_react.useMemo)(() => {
		presenceChildren.forEach((_, key) => presenceChildren.set(key, false));
	}, [isPresent]);
	/**
	* If there's no `motion` components to fire exit animations, we want to remove this
	* component immediately.
	*/
	import_react.useEffect(() => {
		!isPresent && !presenceChildren.size && onExitComplete && onExitComplete();
	}, [isPresent]);
	children = (0, import_jsx_runtime.jsx)(PopChild, {
		pop: mode === "popLayout",
		isPresent,
		anchorX,
		anchorY,
		root,
		children
	});
	return (0, import_jsx_runtime.jsx)(PresenceContext.Provider, {
		value: context,
		children
	});
};
function newChildrenMap() {
	return /* @__PURE__ */ new Map();
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs
/**
* When a component is the child of `AnimatePresence`, it can use `usePresence`
* to access information about whether it's still present in the React tree.
*
* ```jsx
* import { usePresence } from "framer-motion"
*
* export const Component = () => {
*   const [isPresent, safeToRemove] = usePresence()
*
*   useEffect(() => {
*     !isPresent && setTimeout(safeToRemove, 1000)
*   }, [isPresent])
*
*   return <div />
* }
* ```
*
* If `isPresent` is `false`, it means that a component has been removed from the tree,
* but `AnimatePresence` won't really remove it until `safeToRemove` has been called.
*
* @public
*/
function usePresence(subscribe = true) {
	const context = (0, import_react.useContext)(PresenceContext);
	if (context === null) return [true, null];
	const { isPresent, onExitComplete, register } = context;
	const id = (0, import_react.useId)();
	(0, import_react.useEffect)(() => {
		if (subscribe) return register(id);
	}, [subscribe]);
	const safeToRemove = (0, import_react.useCallback)(() => subscribe && onExitComplete && onExitComplete(id), [
		id,
		onExitComplete,
		subscribe
	]);
	return !isPresent && onExitComplete ? [false, safeToRemove] : [true];
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/framer-motion/dist/es/components/AnimatePresence/utils.mjs
var getChildKey = (child) => child.key || "";
function onlyElements(children) {
	const filtered = [];
	import_react.Children.forEach(children, (child) => {
		if ((0, import_react.isValidElement)(child)) filtered.push(child);
	});
	return filtered;
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs
/**
* `AnimatePresence` enables the animation of components that have been removed from the tree.
*
* When adding/removing more than a single child, every child **must** be given a unique `key` prop.
*
* Any `motion` components that have an `exit` property defined will animate out when removed from
* the tree.
*
* ```jsx
* import { motion, AnimatePresence } from 'framer-motion'
*
* export const Items = ({ items }) => (
*   <AnimatePresence>
*     {items.map(item => (
*       <motion.div
*         key={item.id}
*         initial={{ opacity: 0 }}
*         animate={{ opacity: 1 }}
*         exit={{ opacity: 0 }}
*       />
*     ))}
*   </AnimatePresence>
* )
* ```
*
* You can sequence exit animations throughout a tree using variants.
*
* If a child contains multiple `motion` components with `exit` props, it will only unmount the child
* once all `motion` components have finished animating out. Likewise, any components using
* `usePresence` all need to call `safeToRemove`.
*
* @public
*/
var AnimatePresence = ({ children, custom, initial = true, onExitComplete, presenceAffectsLayout = true, mode = "sync", propagate = false, anchorX = "left", anchorY = "top", root }) => {
	const [isParentPresent, safeToRemove] = usePresence(propagate);
	/**
	* Filter any children that aren't ReactElements. We can only track components
	* between renders with a props.key.
	*/
	const presentChildren = (0, import_react.useMemo)(() => onlyElements(children), [children]);
	/**
	* Track the keys of the currently rendered children. This is used to
	* determine which children are exiting.
	*/
	const presentKeys = propagate && !isParentPresent ? [] : presentChildren.map(getChildKey);
	/**
	* If `initial={false}` we only want to pass this to components in the first render.
	*/
	const isInitialRender = (0, import_react.useRef)(true);
	/**
	* Track which exiting children have finished animating out.
	*/
	const exitComplete = useConstant(() => /* @__PURE__ */ new Map());
	/**
	* Track which components are currently processing exit to prevent duplicate processing.
	*/
	const exitingComponents = (0, import_react.useRef)(/* @__PURE__ */ new Set());
	/**
	* Save children to render as React state. To ensure this component is concurrent-safe,
	* we check for exiting children via an effect.
	*/
	const [diffedChildren, setDiffedChildren] = (0, import_react.useState)(presentChildren);
	const [renderedChildren, setRenderedChildren] = (0, import_react.useState)(presentChildren);
	useIsomorphicLayoutEffect(() => {
		if (propagate && !isParentPresent && !renderedChildren.length) safeToRemove?.();
	}, [
		isParentPresent,
		propagate,
		renderedChildren.length,
		safeToRemove
	]);
	useIsomorphicLayoutEffect(() => {
		isInitialRender.current = false;
		/**
		* Update complete status of exiting children.
		*/
		for (let i = 0; i < renderedChildren.length; i++) {
			const key = getChildKey(renderedChildren[i]);
			if (!presentKeys.includes(key)) {
				if (exitComplete.get(key) !== true) exitComplete.set(key, false);
			} else {
				exitComplete.delete(key);
				exitingComponents.current.delete(key);
			}
		}
	}, [
		renderedChildren,
		presentKeys.length,
		presentKeys.join("-")
	]);
	const exitingChildren = [];
	if (presentChildren !== diffedChildren) {
		let nextChildren = [...presentChildren];
		/**
		* Loop through all the currently rendered components and decide which
		* are exiting.
		*
		* Exiting children are reinserted directly after the child they
		* previously followed. Splicing at their index within the previously
		* rendered children, as we used to, indexes into the wrong list: it
		* can interleave them with entering children and push present children
		* to new positions, remounting them (#3746).
		*/
		let insertionIndex = 0;
		for (const child of renderedChildren) {
			const presentIndex = presentKeys.indexOf(getChildKey(child));
			if (presentIndex === -1) {
				nextChildren.splice(insertionIndex++, 0, child);
				exitingChildren.push(child);
			} else insertionIndex = presentIndex + exitingChildren.length + 1;
		}
		/**
		* Once every exiting child has finished animating out, remove them
		* all at once. Otherwise, if we're in "wait" mode, we want to only
		* render the exiting children until they've all exited.
		*/
		if (exitingChildren.every((child) => exitComplete.get(getChildKey(child)))) nextChildren = presentChildren;
		else if (mode === "wait") nextChildren = exitingChildren;
		setRenderedChildren(onlyElements(nextChildren));
		setDiffedChildren(presentChildren);
		/**
		* Early return to ensure once we've set state with the latest diffed
		* children, we can immediately re-render.
		*/
		return null;
	}
	/**
	* If we've been provided a forceRender function by the LayoutGroupContext,
	* we can use it to force a re-render amongst all surrounding components once
	* all components have finished animating out.
	*/
	const { forceRender } = (0, import_react.useContext)(LayoutGroupContext);
	return (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: renderedChildren.map((child) => {
		const key = getChildKey(child);
		const isPresent = propagate && !isParentPresent ? false : presentChildren === renderedChildren || presentKeys.includes(key);
		const onExit = () => {
			if (exitingComponents.current.has(key)) return;
			if (exitComplete.has(key)) {
				exitingComponents.current.add(key);
				exitComplete.set(key, true);
			} else return;
			let isEveryExitComplete = true;
			exitComplete.forEach((isExitComplete) => {
				if (!isExitComplete) isEveryExitComplete = false;
			});
			if (isEveryExitComplete) {
				forceRender?.();
				/**
				* Re-diff rather than setting the children to render
				* directly: this update can be applied after a
				* transition has committed new children, so any
				* children read now could be stale by then.
				*/
				setDiffedChildren([]);
				propagate && safeToRemove?.();
				onExitComplete && onExitComplete();
			}
		};
		return (0, import_jsx_runtime.jsx)(PresenceChild, {
			isPresent,
			initial: !isInitialRender.current || initial ? void 0 : false,
			custom,
			presenceAffectsLayout,
			mode,
			root,
			onExitComplete: isPresent ? void 0 : onExit,
			anchorX,
			anchorY,
			children: child
		}, key);
	}) });
};
//#endregion
//#region node_modules/@sanity/ui/node_modules/framer-motion/dist/es/context/LazyContext.mjs
var LazyContext = (0, import_react.createContext)({ strict: false });
//#endregion
//#region node_modules/@sanity/ui/node_modules/framer-motion/dist/es/motion/features/definitions.mjs
var featureProps = {
	animation: [
		"animate",
		"variants",
		"whileHover",
		"whileTap",
		"exit",
		"whileInView",
		"whileFocus",
		"whileDrag"
	],
	exit: ["exit"],
	drag: ["drag", "dragControls"],
	focus: ["whileFocus"],
	hover: [
		"whileHover",
		"onHoverStart",
		"onHoverEnd"
	],
	tap: [
		"whileTap",
		"onTap",
		"onTapStart",
		"onTapCancel"
	],
	pan: [
		"onPan",
		"onPanStart",
		"onPanSessionStart",
		"onPanEnd"
	],
	inView: [
		"whileInView",
		"onViewportEnter",
		"onViewportLeave"
	],
	layout: ["layout", "layoutId"]
};
var isInitialized = false;
/**
* Initialize feature definitions with isEnabled checks.
* This must be called before any motion components are rendered.
*/
function initFeatureDefinitions() {
	if (isInitialized) return;
	const initialFeatureDefinitions = {};
	for (const key in featureProps) initialFeatureDefinitions[key] = { isEnabled: (props) => featureProps[key].some((name) => !!props[name]) };
	setFeatureDefinitions(initialFeatureDefinitions);
	isInitialized = true;
}
/**
* Get the current feature definitions, initializing if needed.
*/
function getInitializedFeatureDefinitions() {
	initFeatureDefinitions();
	return getFeatureDefinitions();
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/framer-motion/dist/es/motion/features/load-features.mjs
function loadFeatures(features) {
	const featureDefinitions = getInitializedFeatureDefinitions();
	for (const key in features) featureDefinitions[key] = {
		...featureDefinitions[key],
		...features[key]
	};
	setFeatureDefinitions(featureDefinitions);
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/framer-motion/dist/es/context/MotionContext/index.mjs
var MotionContext = /* @__PURE__ */ (0, import_react.createContext)({});
//#endregion
//#region node_modules/@sanity/ui/node_modules/framer-motion/dist/es/context/MotionContext/utils.mjs
function getCurrentTreeVariants(props, context) {
	if (isControllingVariants(props)) {
		const { initial, animate } = props;
		return {
			initial: initial === false || isVariantLabel(initial) ? initial : void 0,
			animate: isVariantLabel(animate) ? animate : void 0
		};
	}
	return props.inherit !== false ? context : {};
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/framer-motion/dist/es/context/MotionContext/create.mjs
function useCreateMotionContext(props) {
	const { initial, animate } = getCurrentTreeVariants(props, (0, import_react.useContext)(MotionContext));
	return (0, import_react.useMemo)(() => ({
		initial,
		animate
	}), [variantLabelsAsDependency(initial), variantLabelsAsDependency(animate)]);
}
function variantLabelsAsDependency(prop) {
	return Array.isArray(prop) ? prop.join(" ") : prop;
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs
var createHtmlRenderState = () => ({
	style: {},
	transform: {},
	transformOrigin: {},
	vars: {}
});
//#endregion
//#region node_modules/@sanity/ui/node_modules/framer-motion/dist/es/render/html/use-props.mjs
function copyRawValuesOnly(target, source, props) {
	for (const key in source) if (!isMotionValue(source[key]) && !isForcedMotionValue(key, props)) target[key] = source[key];
}
function useInitialMotionValues({ transformTemplate }, visualState) {
	return (0, import_react.useMemo)(() => {
		const state = createHtmlRenderState();
		buildHTMLStyles(state, visualState, transformTemplate);
		return Object.assign({}, state.vars, state.style);
	}, [visualState]);
}
function useStyle(props, visualState) {
	const styleProp = props.style || {};
	const style = {};
	/**
	* Copy non-Motion Values straight into style
	*/
	copyRawValuesOnly(style, styleProp, props);
	Object.assign(style, useInitialMotionValues(props, visualState));
	return style;
}
function useHTMLProps(props, visualState) {
	const htmlProps = {};
	const style = useStyle(props, visualState);
	if (props.drag && props.dragListener !== false) {
		htmlProps.draggable = false;
		style.userSelect = style.WebkitUserSelect = style.WebkitTouchCallout = "none";
		style.touchAction = props.drag === true ? "none" : `pan-${props.drag === "x" ? "y" : "x"}`;
	}
	if (props.tabIndex === void 0 && (props.onTap || props.onTapStart || props.whileTap)) htmlProps.tabIndex = 0;
	htmlProps.style = style;
	return htmlProps;
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.mjs
var createSvgRenderState = () => ({
	...createHtmlRenderState(),
	attrs: {}
});
//#endregion
//#region node_modules/@sanity/ui/node_modules/framer-motion/dist/es/render/svg/use-props.mjs
function useSVGProps(props, visualState, _isStatic, Component) {
	const visualProps = (0, import_react.useMemo)(() => {
		const state = createSvgRenderState();
		buildSVGAttrs(state, visualState, isSVGTag(Component), props.transformTemplate, props.style);
		return {
			...state.attrs,
			style: { ...state.style }
		};
	}, [visualState]);
	if (props.style) {
		const rawStyles = {};
		copyRawValuesOnly(rawStyles, props.style, props);
		visualProps.style = {
			...rawStyles,
			...visualProps.style
		};
	}
	return visualProps;
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/framer-motion/dist/es/motion/utils/valid-prop.mjs
/**
* A list of all valid MotionProps.
*
* @privateRemarks
* This doesn't throw if a `MotionProp` name is missing - it should.
*/
var validMotionProps = /* @__PURE__ */ new Set([
	"animate",
	"exit",
	"variants",
	"initial",
	"style",
	"values",
	"transition",
	"transformTemplate",
	"custom",
	"inherit",
	"onBeforeLayoutMeasure",
	"onAnimationStart",
	"onAnimationComplete",
	"onUpdate",
	"onDragStart",
	"onDrag",
	"onDragEnd",
	"onMeasureDragConstraints",
	"onDirectionLock",
	"onDragTransitionEnd",
	"_dragX",
	"_dragY",
	"onHoverStart",
	"onHoverEnd",
	"onViewportEnter",
	"onViewportLeave",
	"globalTapTarget",
	"propagate",
	"ignoreStrict",
	"viewport"
]);
/**
* Check whether a prop name is a valid `MotionProp` key.
*
* @param key - Name of the property to check
* @returns `true` is key is a valid `MotionProp`.
*
* @public
*/
function isValidMotionProp(key) {
	return key.startsWith("while") || key.startsWith("drag") && key !== "draggable" || key.startsWith("layout") || key.startsWith("onTap") || key.startsWith("onPan") || key.startsWith("onLayout") || validMotionProps.has(key);
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/framer-motion/dist/es/render/dom/utils/filter-props.mjs
function shouldForward(key, isValidProp) {
	return key.startsWith("on") ? !isValidMotionProp(key) : isValidProp?.(key) ?? !isValidMotionProp(key);
}
function filterProps(props, isDom, forwardMotionProps, isValidProp) {
	const filteredProps = {};
	for (const key in props) {
		/**
		* values is considered a valid prop by Emotion, so if it's present
		* this will be rendered out to the DOM unless explicitly filtered.
		*
		* We check the type as it could be used with the `feColorMatrix`
		* element, which we support.
		*/
		if (key === "values" && typeof props.values === "object") continue;
		if (isMotionValue(props[key])) continue;
		if (shouldForward(key, isValidProp) || forwardMotionProps === true && isValidMotionProp(key) || !isDom && !isValidMotionProp(key) || props["draggable"] && key.startsWith("onDrag")) filteredProps[key] = props[key];
	}
	return filteredProps;
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/framer-motion/dist/es/render/svg/lowercase-elements.mjs
/**
* We keep these listed separately as we use the lowercase tag names as part
* of the runtime bundle to detect SVG components
*/
var lowercaseSVGElements = [
	"animate",
	"circle",
	"defs",
	"desc",
	"ellipse",
	"g",
	"image",
	"line",
	"filter",
	"marker",
	"mask",
	"metadata",
	"path",
	"pattern",
	"polygon",
	"polyline",
	"rect",
	"stop",
	"switch",
	"symbol",
	"svg",
	"text",
	"tspan",
	"use",
	"view"
];
//#endregion
//#region node_modules/@sanity/ui/node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs
function isSVGComponent(Component) {
	if (typeof Component !== "string" || Component.includes("-")) return false;
	else if (lowercaseSVGElements.indexOf(Component) > -1 || /[A-Z]/u.test(Component)) return true;
	return false;
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/framer-motion/dist/es/render/dom/use-render.mjs
function useRender(Component, props, ref, { latestValues }, isStatic, forwardMotionProps = false, isSVG, isValidProp) {
	const visualProps = (isSVG ?? isSVGComponent(Component) ? useSVGProps : useHTMLProps)(props, latestValues, isStatic, Component);
	const filteredProps = filterProps(props, typeof Component === "string", forwardMotionProps, isValidProp);
	const elementProps = Component !== import_react.Fragment ? {
		...filteredProps,
		...visualProps,
		ref
	} : {};
	/**
	* If component has been handed a motion value as its child,
	* memoise its initial value and render that. Subsequent updates
	* will be handled by the onChange handler
	*/
	const { children } = props;
	const renderedChildren = (0, import_react.useMemo)(() => isMotionValue(children) ? children.get() : children, [children]);
	return (0, import_react.createElement)(Component, {
		...elementProps,
		children: renderedChildren
	});
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs
function makeState({ scrapeMotionValuesFromProps, createRenderState }, props, context, presenceContext) {
	return {
		latestValues: makeLatestValues(props, context, presenceContext, scrapeMotionValuesFromProps),
		renderState: createRenderState()
	};
}
function makeLatestValues(props, context, presenceContext, scrapeMotionValues) {
	const values = {};
	const motionValues = scrapeMotionValues(props, {});
	for (const key in motionValues) values[key] = resolveMotionValue(motionValues[key]);
	let { initial, animate } = props;
	const isControllingVariants$1 = isControllingVariants(props);
	const isVariantNode$1 = isVariantNode(props);
	if (context && isVariantNode$1 && !isControllingVariants$1 && props.inherit !== false) {
		if (initial === void 0) initial = context.initial;
		if (animate === void 0) animate = context.animate;
	}
	let isInitialAnimationBlocked = presenceContext ? presenceContext.initial === false : false;
	isInitialAnimationBlocked = isInitialAnimationBlocked || initial === false;
	const variantToSet = isInitialAnimationBlocked ? animate : initial;
	if (variantToSet && typeof variantToSet !== "boolean" && !isAnimationControls(variantToSet)) {
		const list = Array.isArray(variantToSet) ? variantToSet : [variantToSet];
		for (let i = 0; i < list.length; i++) {
			const resolved = resolveVariantFromProps(props, list[i]);
			if (resolved) {
				const { transitionEnd, transition, ...target } = resolved;
				for (const key in target) {
					let valueTarget = target[key];
					if (Array.isArray(valueTarget)) {
						/**
						* Take final keyframe if the initial animation is blocked because
						* we want to initialise at the end of that blocked animation.
						*/
						const index = isInitialAnimationBlocked ? valueTarget.length - 1 : 0;
						valueTarget = valueTarget[index];
					}
					if (valueTarget !== null) values[key] = valueTarget;
				}
				for (const key in transitionEnd) values[key] = transitionEnd[key];
			}
		}
	}
	return values;
}
var makeUseVisualState = (config) => (props, isStatic) => {
	const context = (0, import_react.useContext)(MotionContext);
	const presenceContext = (0, import_react.useContext)(PresenceContext);
	const make = () => makeState(config, props, context, presenceContext);
	return isStatic ? make() : useConstant(make);
};
//#endregion
//#region node_modules/@sanity/ui/node_modules/framer-motion/dist/es/render/html/use-html-visual-state.mjs
var useHTMLVisualState = /*@__PURE__*/ makeUseVisualState({
	scrapeMotionValuesFromProps: scrapeMotionValuesFromProps$1,
	createRenderState: createHtmlRenderState
});
//#endregion
//#region node_modules/@sanity/ui/node_modules/framer-motion/dist/es/render/svg/use-svg-visual-state.mjs
var useSVGVisualState = /*@__PURE__*/ makeUseVisualState({
	scrapeMotionValuesFromProps,
	createRenderState: createSvgRenderState
});
//#endregion
//#region node_modules/@sanity/ui/node_modules/framer-motion/dist/es/motion/utils/symbol.mjs
var motionComponentSymbol = Symbol.for("motionComponentSymbol");
//#endregion
//#region node_modules/@sanity/ui/node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs
/**
* Creates a ref function that, when called, hydrates the provided
* external ref and VisualElement.
*/
function useMotionRef(visualState, visualElement, externalRef) {
	/**
	* Store externalRef in a ref to avoid including it in the useCallback
	* dependency array. Including externalRef in dependencies causes issues
	* with libraries like Radix UI that create new callback refs on each render
	* when using asChild - this would cause the callback to be recreated,
	* triggering element remounts and breaking AnimatePresence exit animations.
	*/
	const externalRefContainer = (0, import_react.useRef)(externalRef);
	(0, import_react.useInsertionEffect)(() => {
		externalRefContainer.current = externalRef;
	});
	const refCleanup = (0, import_react.useRef)(null);
	return (0, import_react.useCallback)((instance) => {
		if (instance) visualState.onMount?.(instance);
		if (visualElement) instance ? visualElement.mount(instance) : visualElement.unmount();
		const ref = externalRefContainer.current;
		if (typeof ref === "function") if (instance) {
			const cleanup = ref(instance);
			if (typeof cleanup === "function") refCleanup.current = cleanup;
		} else if (refCleanup.current) {
			refCleanup.current();
			refCleanup.current = null;
		} else ref(instance);
		else if (ref) ref.current = instance;
	}, [visualElement]);
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs
/**
* Internal, exported only for usage in Framer
*/
var SwitchLayoutGroupContext = (0, import_react.createContext)({});
//#endregion
//#region node_modules/@sanity/ui/node_modules/framer-motion/dist/es/utils/is-ref-object.mjs
function isRefObject(ref) {
	return ref && typeof ref === "object" && Object.prototype.hasOwnProperty.call(ref, "current");
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs
function useVisualElement(Component, visualState, props, createVisualElement, ProjectionNodeConstructor, isSVG) {
	const { visualElement: parent } = (0, import_react.useContext)(MotionContext);
	const lazyContext = (0, import_react.useContext)(LazyContext);
	const presenceContext = (0, import_react.useContext)(PresenceContext);
	const motionConfig = (0, import_react.useContext)(MotionConfigContext);
	const reducedMotionConfig = motionConfig.reducedMotion;
	const skipAnimations = motionConfig.skipAnimations;
	const visualElementRef = (0, import_react.useRef)(null);
	/**
	* Track whether the component has been through React's commit phase.
	* Used to detect when LazyMotion features load after the component has mounted.
	*/
	const hasMountedOnce = (0, import_react.useRef)(false);
	/**
	* If we haven't preloaded a renderer, check to see if we have one lazy-loaded
	*/
	createVisualElement = createVisualElement || lazyContext.renderer;
	if (!visualElementRef.current && createVisualElement) {
		visualElementRef.current = createVisualElement(Component, {
			visualState,
			parent,
			props,
			presenceContext,
			blockInitialAnimation: presenceContext ? presenceContext.initial === false : false,
			reducedMotionConfig,
			skipAnimations,
			isSVG
		});
		/**
		* If the component has already mounted before features loaded (e.g. via
		* LazyMotion with async feature loading), we need to force the initial
		* animation to run. Otherwise state changes that occurred before features
		* loaded will be lost and the element will snap to its final state.
		*/
		if (hasMountedOnce.current && visualElementRef.current) visualElementRef.current.manuallyAnimateOnMount = true;
	}
	const visualElement = visualElementRef.current;
	/**
	* Load Motion gesture and animation features. These are rendered as renderless
	* components so each feature can optionally make use of React lifecycle methods.
	*/
	const initialLayoutGroupConfig = (0, import_react.useContext)(SwitchLayoutGroupContext);
	if (visualElement && !visualElement.projection && ProjectionNodeConstructor && (visualElement.type === "html" || visualElement.type === "svg")) createProjectionNode(visualElementRef.current, props, ProjectionNodeConstructor, initialLayoutGroupConfig);
	const isMounted = (0, import_react.useRef)(false);
	(0, import_react.useInsertionEffect)(() => {
		/**
		* Check the component has already mounted before calling
		* `update` unnecessarily. This ensures we skip the initial update.
		*/
		if (visualElement && isMounted.current) visualElement.update(props, presenceContext);
	});
	/**
	* Cache this value as we want to know whether HandoffAppearAnimations
	* was present on initial render - it will be deleted after this.
	*/
	const optimisedAppearId = props[optimizedAppearDataAttribute];
	const wantsHandoff = (0, import_react.useRef)(Boolean(optimisedAppearId) && typeof window !== "undefined" && !window.MotionHandoffIsComplete?.(optimisedAppearId) && window.MotionHasOptimisedAnimation?.(optimisedAppearId));
	/**
	* Layout effects re-run when a hidden Suspense/Activity boundary is
	* revealed, but passive effects only re-run if this component re-renders
	* (not the case for memoized elements). Replay animations on every
	* reconnection. Must be declared before the effect that sets hasMountedOnce.
	*/
	useIsomorphicLayoutEffect(() => {
		if (!hasMountedOnce.current || !visualElement) return;
		visualElement.animationState?.animateChanges();
		visualElement.enteringChildren = void 0;
	}, []);
	useIsomorphicLayoutEffect(() => {
		/**
		* Track that this component has mounted. This is used to detect when
		* LazyMotion features load after the component has already committed.
		*/
		hasMountedOnce.current = true;
		if (!visualElement) return;
		isMounted.current = true;
		window.MotionIsMounted = true;
		visualElement.updateFeatures();
		visualElement.scheduleRenderMicrotask();
		/**
		* Ideally this function would always run in a useEffect.
		*
		* However, if we have optimised appear animations to handoff from,
		* it needs to happen synchronously to ensure there's no flash of
		* incorrect styles in the event of a hydration error.
		*
		* So if we detect a situation where optimised appear animations
		* are running, we use useLayoutEffect to trigger animations.
		*/
		if (wantsHandoff.current && visualElement.animationState) visualElement.animationState.animateChanges();
	});
	(0, import_react.useEffect)(() => {
		if (!visualElement) return;
		if (!wantsHandoff.current && visualElement.animationState) visualElement.animationState.animateChanges();
		if (wantsHandoff.current) {
			queueMicrotask(() => {
				window.MotionHandoffMarkAsComplete?.(optimisedAppearId);
			});
			wantsHandoff.current = false;
		}
		/**
		* Now we've finished triggering animations for this element we
		* can wipe the enteringChildren set for the next render.
		*/
		visualElement.enteringChildren = void 0;
	});
	return visualElement;
}
function createProjectionNode(visualElement, props, ProjectionNodeConstructor, initialPromotionConfig) {
	const { layoutId, layout, drag, dragConstraints, layoutScroll, layoutRoot, layoutAnchor, layoutCrossfade } = props;
	visualElement.projection = new ProjectionNodeConstructor(visualElement.latestValues, props["data-framer-portal-id"] ? void 0 : getClosestProjectingNode(visualElement.parent));
	visualElement.projection.setOptions({
		layoutId,
		layout,
		alwaysMeasureLayout: Boolean(drag) || dragConstraints && isRefObject(dragConstraints),
		visualElement,
		/**
		* TODO: Update options in an effect. This could be tricky as it'll be too late
		* to update by the time layout animations run.
		* We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
		* ensuring it gets called if there's no potential layout animations.
		*
		*/
		animationType: typeof layout === "string" ? layout : "both",
		initialPromotionConfig,
		crossfade: layoutCrossfade,
		layoutScroll,
		layoutRoot,
		layoutAnchor
	});
}
function getClosestProjectingNode(visualElement) {
	if (!visualElement) return void 0;
	return visualElement.options.allowProjection !== false ? visualElement.projection : getClosestProjectingNode(visualElement.parent);
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/framer-motion/dist/es/motion/index.mjs
/**
* Create a `motion` component.
*
* This function accepts a Component argument, which can be either a string (ie "div"
* for `motion.div`), or an actual React component.
*
* Alongside this is a config option which provides a way of rendering the provided
* component "offline", or outside the React render cycle.
*/
function createMotionComponent(Component, { forwardMotionProps = false, type } = {}, preloadedFeatures, createVisualElement) {
	preloadedFeatures && loadFeatures(preloadedFeatures);
	/**
	* Determine whether to use SVG or HTML rendering based on:
	* 1. Explicit `type` option (highest priority)
	* 2. Auto-detection via `isSVGComponent`
	*/
	const isSVG = type ? type === "svg" : isSVGComponent(Component);
	const useVisualState = isSVG ? useSVGVisualState : useHTMLVisualState;
	function MotionDOMComponent(props, externalRef) {
		/**
		* If we need to measure the element we load this functionality in a
		* separate class component in order to gain access to getSnapshotBeforeUpdate.
		*/
		let MeasureLayout;
		const configAndProps = {
			...(0, import_react.useContext)(MotionConfigContext),
			...props,
			layoutId: useLayoutId(props)
		};
		const { isStatic, isValidProp } = configAndProps;
		const context = useCreateMotionContext(props);
		const visualState = useVisualState(props, isStatic);
		if (!isStatic && typeof window !== "undefined") {
			useStrictMode(configAndProps, preloadedFeatures);
			const layoutProjection = getProjectionFunctionality(configAndProps);
			MeasureLayout = layoutProjection.MeasureLayout;
			/**
			* Create a VisualElement for this component. A VisualElement provides a common
			* interface to renderer-specific APIs (ie DOM/Three.js etc) as well as
			* providing a way of rendering to these APIs outside of the React render loop
			* for more performant animations and interactions
			*/
			context.visualElement = useVisualElement(Component, visualState, configAndProps, createVisualElement, layoutProjection.ProjectionNode, isSVG);
		}
		/**
		* The mount order and hierarchy is specific to ensure our element ref
		* is hydrated by the time features fire their effects.
		*/
		return (0, import_jsx_runtime.jsxs)(MotionContext.Provider, {
			value: context,
			children: [MeasureLayout && context.visualElement ? (0, import_jsx_runtime.jsx)(MeasureLayout, {
				visualElement: context.visualElement,
				...configAndProps
			}) : null, useRender(Component, props, useMotionRef(visualState, context.visualElement, externalRef), visualState, isStatic, forwardMotionProps, isSVG, isValidProp)]
		});
	}
	MotionDOMComponent.displayName = `motion.${typeof Component === "string" ? Component : `create(${Component.displayName ?? Component.name ?? ""})`}`;
	const ForwardRefMotionComponent = (0, import_react.forwardRef)(MotionDOMComponent);
	ForwardRefMotionComponent[motionComponentSymbol] = Component;
	return ForwardRefMotionComponent;
}
function useLayoutId({ layoutId }) {
	const layoutGroupId = (0, import_react.useContext)(LayoutGroupContext).id;
	return layoutGroupId && layoutId !== void 0 ? layoutGroupId + "-" + layoutId : layoutId;
}
function useStrictMode(configAndProps, preloadedFeatures) {
	(0, import_react.useContext)(LazyContext).strict;
}
function getProjectionFunctionality(props) {
	const { drag, layout } = getInitializedFeatureDefinitions();
	if (!drag && !layout) return {};
	const combined = {
		...drag,
		...layout
	};
	return {
		MeasureLayout: drag?.isEnabled(props) || layout?.isEnabled(props) ? combined.MeasureLayout : void 0,
		ProjectionNode: combined.ProjectionNode
	};
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/framer-motion/dist/es/render/components/create-proxy.mjs
function createMotionProxy(preloadedFeatures, createVisualElement) {
	if (typeof Proxy === "undefined") return createMotionComponent;
	/**
	* A cache of generated `motion` components, e.g `motion.div`, `motion.input` etc.
	* Rather than generating them anew every render.
	*/
	const componentCache = /* @__PURE__ */ new Map();
	const factory = (Component, options) => {
		return createMotionComponent(Component, options, preloadedFeatures, createVisualElement);
	};
	/**
	* Support for deprecated`motion(Component)` pattern
	*/
	const deprecatedFactoryFunction = (Component, options) => {
		return factory(Component, options);
	};
	return new Proxy(deprecatedFactoryFunction, { 
	/**
	* Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
	* The prop name is passed through as `key` and we can use that to generate a `motion`
	* DOM component with that name.
	*/
get: (_target, key) => {
		if (key === "create") return factory;
		/**
		* If this element doesn't exist in the component cache, create it and cache.
		*/
		if (!componentCache.has(key)) componentCache.set(key, createMotionComponent(key, void 0, preloadedFeatures, createVisualElement));
		return componentCache.get(key);
	} });
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs
var createDomVisualElement = (Component, options) => {
	return options.isSVG ?? isSVGComponent(Component) ? new SVGVisualElement(options) : new HTMLVisualElement(options, { allowProjection: Component !== import_react.Fragment });
};
//#endregion
//#region node_modules/@sanity/ui/node_modules/framer-motion/dist/es/motion/features/animation/index.mjs
var AnimationFeature = class extends Feature {
	/**
	* We dynamically generate the AnimationState manager as it contains a reference
	* to the underlying animation library. We only want to load that if we load this,
	* so people can optionally code split it out using the `m` component.
	*/
	constructor(node) {
		super(node);
		node.animationState || (node.animationState = createAnimationState(node));
	}
	updateAnimationControlsSubscription() {
		const { animate } = this.node.getProps();
		if (isAnimationControls(animate)) this.unmountControls = animate.subscribe(this.node);
	}
	/**
	* Subscribe any provided AnimationControls to the component's VisualElement
	*/
	mount() {
		this.updateAnimationControlsSubscription();
	}
	update() {
		const { animate } = this.node.getProps();
		const { animate: prevAnimate } = this.node.prevProps || {};
		if (animate !== prevAnimate) this.updateAnimationControlsSubscription();
	}
	unmount() {
		this.node.animationState.reset();
		this.unmountControls?.();
	}
};
//#endregion
//#region node_modules/@sanity/ui/node_modules/framer-motion/dist/es/motion/features/animation/exit.mjs
var id = 0;
var ExitAnimationFeature = class extends Feature {
	constructor() {
		super(...arguments);
		this.id = id++;
	}
	update() {
		const { presenceContext, prevPresenceContext, animationState } = this.node;
		if (!presenceContext || !animationState) return;
		const { isPresent, onExitComplete } = presenceContext;
		const prevIsPresent = prevPresenceContext?.isPresent;
		if (isPresent === prevIsPresent) return;
		if (isPresent && prevIsPresent === false) {
			/**
			* When re-entering after the exit completed (element is at
			* rest), replay the enter animation from initial.
			*/
			if (this.exit === true) {
				const { initial } = this.node.getProps();
				if (initial && !Array.isArray(initial)) {
					const { transition, transitionEnd, ...target } = resolveVariant(this.node, initial) || {};
					for (const key in target) this.node.getValue(key)?.jump(target[key]);
				}
				/**
				* A re-entering element is no longer an initial child, so
				* AnimatePresence's initial={false} mustn't block its enter.
				*/
				this.node.blockInitialAnimation = false;
				animationState.reset();
				animationState.animateChanges();
			} else animationState.setActive("exit", false);
			this.exit = void 0;
			return;
		}
		const exit = this.exit = animationState.setActive("exit", !isPresent);
		if (onExitComplete && !isPresent) exit.then(() => {
			/**
			* An exit can resolve after the element has re-entered, e.g.
			* when its final tick lands in the stop() of the enter.
			*/
			if (this.exit !== exit) return;
			this.exit = true;
			onExitComplete(this.id);
		});
	}
	mount() {
		const { register, onExitComplete } = this.node.presenceContext || {};
		if (onExitComplete) onExitComplete(this.id);
		if (register) this.unmount = register(this.id);
	}
	unmount() {}
};
//#endregion
//#region node_modules/@sanity/ui/node_modules/framer-motion/dist/es/motion/features/animations.mjs
var animations = {
	animation: { Feature: AnimationFeature },
	exit: { Feature: ExitAnimationFeature }
};
//#endregion
//#region node_modules/@sanity/ui/node_modules/framer-motion/dist/es/events/event-info.mjs
function extractEventInfo(event) {
	return { point: {
		x: event.pageX,
		y: event.pageY
	} };
}
var addPointerInfo = (handler) => (event) => isPrimaryPointer(event) && handler(event, extractEventInfo(event));
//#endregion
//#region node_modules/@sanity/ui/node_modules/framer-motion/dist/es/events/add-pointer-event.mjs
function addPointerEvent(target, eventName, handler, options) {
	return addDomEvent(target, eventName, addPointerInfo(handler), options);
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/framer-motion/dist/es/utils/get-context-window.mjs
var getContextWindow = ({ current }) => {
	return current ? current.ownerDocument.defaultView : null;
};
//#endregion
//#region node_modules/@sanity/ui/node_modules/framer-motion/dist/es/utils/distance.mjs
var distance = (a, b) => Math.abs(a - b);
function distance2D(a, b) {
	const xDelta = distance(a.x, b.x);
	const yDelta = distance(a.y, b.y);
	return Math.sqrt(xDelta ** 2 + yDelta ** 2);
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/framer-motion/dist/es/gestures/pan/PanSession.mjs
var overflowStyles = /*#__PURE__*/ new Set(["auto", "scroll"]);
/**
* @internal
*/
var PanSession = class {
	constructor(event, handlers, { transformPagePoint, contextWindow = window, dragSnapToOrigin = false, distanceThreshold = 3, element } = {}) {
		/**
		* @internal
		*/
		this.startEvent = null;
		/**
		* @internal
		*/
		this.lastMoveEvent = null;
		/**
		* @internal
		*/
		this.lastMoveEventInfo = null;
		/**
		* Raw (untransformed) event info, re-transformed each frame
		* so transformPagePoint sees the current parent matrix.
		* @internal
		*/
		this.lastRawMoveEventInfo = null;
		/**
		* @internal
		*/
		this.handlers = {};
		/**
		* @internal
		*/
		this.contextWindow = window;
		/**
		* Scroll positions of scrollable ancestors and window.
		* @internal
		*/
		this.scrollPositions = /* @__PURE__ */ new Map();
		/**
		* Cleanup function for scroll listeners.
		* @internal
		*/
		this.removeScrollListeners = null;
		this.onElementScroll = (event) => {
			this.handleScroll(event.target);
		};
		this.onWindowScroll = () => {
			this.handleScroll(window);
		};
		this.updatePoint = () => {
			if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
			this.hasPendingMove = false;
			if (this.lastRawMoveEventInfo) this.lastMoveEventInfo = transformPoint(this.lastRawMoveEventInfo, this.transformPagePoint);
			const info = getPanInfo(this.lastMoveEventInfo, this.history);
			const isPanStarted = this.startEvent !== null;
			const isDistancePastThreshold = distance2D(info.offset, {
				x: 0,
				y: 0
			}) >= this.distanceThreshold;
			if (!isPanStarted && !isDistancePastThreshold) return;
			const { point } = info;
			this.history.push({
				...point,
				timestamp: time.now()
			});
			const { onStart, onMove } = this.handlers;
			if (!isPanStarted) {
				onStart && onStart(this.lastMoveEvent, info);
				this.startEvent = this.lastMoveEvent;
			}
			onMove && onMove(this.lastMoveEvent, info);
		};
		this.handlePointerMove = (event, info) => {
			this.lastMoveEvent = event;
			this.lastRawMoveEventInfo = info;
			this.lastMoveEventInfo = transformPoint(info, this.transformPagePoint);
			this.hasPendingMove = true;
			frame.update(this.updatePoint, true);
		};
		this.handlePointerUp = (event, info) => {
			this.hasPendingMove && this.updatePoint();
			this.end();
			const { onEnd, onSessionEnd, resumeAnimation } = this.handlers;
			if (this.dragSnapToOrigin || !this.startEvent) resumeAnimation && resumeAnimation();
			if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
			const panInfo = getPanInfo(event.type === "pointercancel" ? this.lastMoveEventInfo : transformPoint(info, this.transformPagePoint), this.history);
			if (this.startEvent && onEnd) onEnd(event, panInfo);
			onSessionEnd && onSessionEnd(event, panInfo);
		};
		if (!isPrimaryPointer(event)) return;
		this.dragSnapToOrigin = dragSnapToOrigin;
		this.handlers = handlers;
		this.transformPagePoint = transformPagePoint;
		this.distanceThreshold = distanceThreshold;
		this.contextWindow = contextWindow || window;
		const initialInfo = transformPoint(extractEventInfo(event), this.transformPagePoint);
		const { point } = initialInfo;
		const { timestamp } = frameData;
		this.history = [{
			...point,
			timestamp
		}];
		const { onSessionStart } = handlers;
		onSessionStart && onSessionStart(event, getPanInfo(initialInfo, this.history));
		const eventOptions = {
			passive: true,
			capture: true
		};
		this.removeListeners = pipe(addPointerEvent(this.contextWindow, "pointermove", this.handlePointerMove, eventOptions), addPointerEvent(this.contextWindow, "pointerup", this.handlePointerUp, eventOptions), addPointerEvent(this.contextWindow, "pointercancel", this.handlePointerUp, eventOptions));
		if (element) this.startScrollTracking(element);
	}
	/**
	* Start tracking scroll on ancestors and window.
	*/
	startScrollTracking(element) {
		let current = element.parentElement;
		while (current) {
			const style = getComputedStyle(current);
			if (overflowStyles.has(style.overflowX) || overflowStyles.has(style.overflowY)) this.scrollPositions.set(current, {
				x: current.scrollLeft,
				y: current.scrollTop
			});
			current = current.parentElement;
		}
		this.scrollPositions.set(window, {
			x: window.scrollX,
			y: window.scrollY
		});
		window.addEventListener("scroll", this.onElementScroll, { capture: true });
		window.addEventListener("scroll", this.onWindowScroll);
		this.removeScrollListeners = () => {
			window.removeEventListener("scroll", this.onElementScroll, { capture: true });
			window.removeEventListener("scroll", this.onWindowScroll);
		};
	}
	/**
	* Handle scroll compensation during drag.
	*
	* For element scroll: adjusts history origin since pageX/pageY doesn't change.
	* For window scroll: adjusts lastMoveEventInfo since pageX/pageY would change.
	*/
	handleScroll(target) {
		const initial = this.scrollPositions.get(target);
		if (!initial) return;
		const isWindow = target === window;
		const current = isWindow ? {
			x: window.scrollX,
			y: window.scrollY
		} : {
			x: target.scrollLeft,
			y: target.scrollTop
		};
		const delta = {
			x: current.x - initial.x,
			y: current.y - initial.y
		};
		if (delta.x === 0 && delta.y === 0) return;
		if (isWindow) {
			if (this.lastMoveEventInfo) {
				this.lastMoveEventInfo.point.x += delta.x;
				this.lastMoveEventInfo.point.y += delta.y;
			}
		} else if (this.history.length > 0) {
			this.history[0].x -= delta.x;
			this.history[0].y -= delta.y;
		}
		this.scrollPositions.set(target, current);
		frame.update(this.updatePoint, true);
	}
	updateHandlers(handlers) {
		this.handlers = handlers;
	}
	end() {
		this.removeListeners && this.removeListeners();
		this.removeScrollListeners && this.removeScrollListeners();
		this.scrollPositions.clear();
		cancelFrame(this.updatePoint);
	}
};
function transformPoint(info, transformPagePoint) {
	return transformPagePoint ? { point: transformPagePoint(info.point) } : info;
}
function subtractPoint(a, b) {
	return {
		x: a.x - b.x,
		y: a.y - b.y
	};
}
function getPanInfo({ point }, history) {
	return {
		point,
		delta: subtractPoint(point, lastDevicePoint(history)),
		offset: subtractPoint(point, startDevicePoint(history)),
		velocity: getVelocity(history, .1)
	};
}
function startDevicePoint(history) {
	return history[0];
}
function lastDevicePoint(history) {
	return history[history.length - 1];
}
function getVelocity(history, timeDelta) {
	if (history.length < 2) return {
		x: 0,
		y: 0
	};
	let i = history.length - 1;
	let timestampedPoint = null;
	const lastPoint = lastDevicePoint(history);
	while (i >= 0) {
		timestampedPoint = history[i];
		if (lastPoint.timestamp - timestampedPoint.timestamp > /* @__PURE__ */ secondsToMilliseconds(timeDelta)) break;
		i--;
	}
	if (!timestampedPoint) return {
		x: 0,
		y: 0
	};
	/**
	* If the selected point is the pointer-down origin (history[0]),
	* there are better movement points available, and the time gap
	* is suspiciously large (>2x timeDelta), use the next point instead.
	* This prevents stale pointer-down points from diluting velocity
	* in hold-then-flick gestures.
	*/
	if (timestampedPoint === history[0] && history.length > 2 && lastPoint.timestamp - timestampedPoint.timestamp > /* @__PURE__ */ secondsToMilliseconds(timeDelta) * 2) timestampedPoint = history[1];
	const seconds = /* @__PURE__ */ millisecondsToSeconds(lastPoint.timestamp - timestampedPoint.timestamp);
	if (seconds === 0) return {
		x: 0,
		y: 0
	};
	const currentVelocity = {
		x: (lastPoint.x - timestampedPoint.x) / seconds,
		y: (lastPoint.y - timestampedPoint.y) / seconds
	};
	if (currentVelocity.x === Infinity) currentVelocity.x = 0;
	if (currentVelocity.y === Infinity) currentVelocity.y = 0;
	return currentVelocity;
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/framer-motion/dist/es/gestures/drag/utils/constraints.mjs
/**
* Apply constraints to a point. These constraints are both physical along an
* axis, and an elastic factor that determines how much to constrain the point
* by if it does lie outside the defined parameters.
*/
function applyConstraints(point, { min, max }, elastic) {
	if (min !== void 0 && point < min) point = elastic ? mixNumber$1(min, point, elastic.min) : Math.max(point, min);
	else if (max !== void 0 && point > max) point = elastic ? mixNumber$1(max, point, elastic.max) : Math.min(point, max);
	return point;
}
/**
* Calculate constraints in terms of the viewport when defined relatively to the
* measured axis. This is measured from the nearest edge, so a max constraint of 200
* on an axis with a max value of 300 would return a constraint of 500 - axis length
*/
function calcRelativeAxisConstraints(axis, min, max) {
	return {
		min: min !== void 0 ? axis.min + min : void 0,
		max: max !== void 0 ? axis.max + max - (axis.max - axis.min) : void 0
	};
}
/**
* Calculate constraints in terms of the viewport when
* defined relatively to the measured bounding box.
*/
function calcRelativeConstraints(layoutBox, { top, left, bottom, right }) {
	return {
		x: calcRelativeAxisConstraints(layoutBox.x, left, right),
		y: calcRelativeAxisConstraints(layoutBox.y, top, bottom)
	};
}
/**
* Calculate viewport constraints when defined as another viewport-relative axis
*/
function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
	let min = constraintsAxis.min - layoutAxis.min;
	let max = constraintsAxis.max - layoutAxis.max;
	if (constraintsAxis.max - constraintsAxis.min < layoutAxis.max - layoutAxis.min) [min, max] = [max, min];
	return {
		min,
		max
	};
}
/**
* Calculate viewport constraints when defined as another viewport-relative box
*/
function calcViewportConstraints(layoutBox, constraintsBox) {
	return {
		x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
		y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y)
	};
}
/**
* Calculate a transform origin relative to the source axis, between 0-1, that results
* in an aesthetically pleasing scale/transform needed to project from source to target.
*/
function calcOrigin(source, target) {
	let origin = .5;
	const sourceLength = calcLength(source);
	const targetLength = calcLength(target);
	if (targetLength > sourceLength) origin = /* @__PURE__ */ progress(target.min, target.max - sourceLength, source.min);
	else if (sourceLength > targetLength) origin = /* @__PURE__ */ progress(source.min, source.max - targetLength, target.min);
	return clamp$1(0, 1, origin);
}
/**
* Rebase the calculated viewport constraints relative to the layout.min point.
*/
function rebaseAxisConstraints(layout, constraints) {
	const relativeConstraints = {};
	if (constraints.min !== void 0) relativeConstraints.min = constraints.min - layout.min;
	if (constraints.max !== void 0) relativeConstraints.max = constraints.max - layout.min;
	return relativeConstraints;
}
var defaultElastic = .35;
/**
* Accepts a dragElastic prop and returns resolved elastic values for each axis.
*/
function resolveDragElastic(dragElastic = defaultElastic) {
	if (dragElastic === false) dragElastic = 0;
	else if (dragElastic === true) dragElastic = defaultElastic;
	return {
		x: resolveAxisElastic(dragElastic, "left", "right"),
		y: resolveAxisElastic(dragElastic, "top", "bottom")
	};
}
function resolveAxisElastic(dragElastic, minLabel, maxLabel) {
	return {
		min: resolvePointElastic(dragElastic, minLabel),
		max: resolvePointElastic(dragElastic, maxLabel)
	};
}
function resolvePointElastic(dragElastic, label) {
	return typeof dragElastic === "number" ? dragElastic : dragElastic[label] || 0;
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.mjs
var elementDragControls = /* @__PURE__ */ new WeakMap();
var VisualElementDragControls = class {
	constructor(visualElement) {
		this.openDragLock = null;
		this.isDragging = false;
		this.currentDirection = null;
		this.originPoint = {
			x: 0,
			y: 0
		};
		/**
		* The permitted boundaries of travel, in pixels.
		*/
		this.constraints = false;
		this.hasMutatedConstraints = false;
		/**
		* The per-axis resolved elastic values.
		*/
		this.elastic = createBox();
		/**
		* The latest pointer event. Used as fallback when the `cancel` and `stop` functions are called without arguments.
		*/
		this.latestPointerEvent = null;
		/**
		* The latest pan info. Used as fallback when the `cancel` and `stop` functions are called without arguments.
		*/
		this.latestPanInfo = null;
		this.visualElement = visualElement;
	}
	start(originEvent, { snapToCursor = false, distanceThreshold } = {}) {
		/**
		* Don't start dragging if this component is exiting
		*/
		const { presenceContext } = this.visualElement;
		if (presenceContext && presenceContext.isPresent === false) return;
		const onSessionStart = (event) => {
			if (snapToCursor) this.snapToCursor(event);
			this.stopAnimation();
		};
		const onStart = (event, info) => {
			const { drag, dragPropagation, onDragStart } = this.getProps();
			if (drag && !dragPropagation) {
				if (this.openDragLock) this.openDragLock();
				this.openDragLock = setDragLock(drag);
				if (!this.openDragLock) return;
			}
			this.latestPointerEvent = event;
			this.latestPanInfo = info;
			this.isDragging = true;
			this.currentDirection = null;
			this.resolveConstraints();
			if (this.visualElement.projection) {
				this.visualElement.projection.isAnimationBlocked = true;
				this.visualElement.projection.target = void 0;
			}
			/**
			* Record gesture origin and pointer offset
			*/
			eachAxis((axis) => {
				let current = this.getAxisMotionValue(axis).get() || 0;
				/**
				* If the MotionValue is a percentage value convert to px
				*/
				if (percent.test(current)) {
					const { projection } = this.visualElement;
					if (projection && projection.layout) {
						const measuredAxis = projection.layout.layoutBox[axis];
						if (measuredAxis) current = calcLength(measuredAxis) * (parseFloat(current) / 100);
					}
				}
				this.originPoint[axis] = current;
			});
			if (onDragStart) frame.update(() => onDragStart(event, info), false, true);
			addValueToWillChange(this.visualElement, "transform");
			const { animationState } = this.visualElement;
			animationState && animationState.setActive("whileDrag", true);
		};
		const onMove = (event, info) => {
			this.latestPointerEvent = event;
			this.latestPanInfo = info;
			const { dragPropagation, dragDirectionLock, onDirectionLock, onDrag } = this.getProps();
			if (!dragPropagation && !this.openDragLock) return;
			const { offset } = info;
			if (dragDirectionLock && this.currentDirection === null) {
				this.currentDirection = getCurrentDirection(offset);
				if (this.currentDirection !== null) onDirectionLock && onDirectionLock(this.currentDirection);
				return;
			}
			this.updateAxis("x", info.point, offset);
			this.updateAxis("y", info.point, offset);
			/**
			* Ideally we would leave the renderer to fire naturally at the end of
			* this frame but if the element is about to change layout as the result
			* of a re-render we want to ensure the browser can read the latest
			* bounding box to ensure the pointer and element don't fall out of sync.
			*/
			this.visualElement.render();
			/**
			* This must fire after the render call as it might trigger a state
			* change which itself might trigger a layout update.
			*/
			if (onDrag) frame.update(() => onDrag(event, info), false, true);
		};
		const onSessionEnd = (event, info) => {
			this.latestPointerEvent = event;
			this.latestPanInfo = info;
			this.stop(event, info);
			this.latestPointerEvent = null;
			this.latestPanInfo = null;
		};
		const resumeAnimation = () => {
			const { dragSnapToOrigin: snap } = this.getProps();
			if (snap || this.constraints) this.startAnimation({
				x: 0,
				y: 0
			});
		};
		const { dragSnapToOrigin } = this.getProps();
		this.panSession = new PanSession(originEvent, {
			onSessionStart,
			onStart,
			onMove,
			onSessionEnd,
			resumeAnimation
		}, {
			transformPagePoint: this.visualElement.getTransformPagePoint(),
			dragSnapToOrigin,
			distanceThreshold,
			contextWindow: getContextWindow(this.visualElement),
			element: this.visualElement.current
		});
	}
	/**
	* @internal
	*/
	stop(event, panInfo) {
		const finalEvent = event || this.latestPointerEvent;
		const finalPanInfo = panInfo || this.latestPanInfo;
		const isDragging = this.isDragging;
		this.cancel();
		if (!isDragging || !finalPanInfo || !finalEvent) return;
		const { velocity } = finalPanInfo;
		this.startAnimation(velocity);
		const { onDragEnd } = this.getProps();
		if (onDragEnd) frame.postRender(() => onDragEnd(finalEvent, finalPanInfo));
	}
	/**
	* @internal
	*/
	cancel() {
		this.isDragging = false;
		const { projection, animationState } = this.visualElement;
		if (projection) projection.isAnimationBlocked = false;
		this.endPanSession();
		const { dragPropagation } = this.getProps();
		if (!dragPropagation && this.openDragLock) {
			this.openDragLock();
			this.openDragLock = null;
		}
		animationState && animationState.setActive("whileDrag", false);
	}
	/**
	* Clean up the pan session without modifying other drag state.
	* This is used during unmount to ensure event listeners are removed
	* without affecting projection animations or drag locks.
	* @internal
	*/
	endPanSession() {
		this.panSession && this.panSession.end();
		this.panSession = void 0;
	}
	updateAxis(axis, _point, offset) {
		const { drag } = this.getProps();
		if (!offset || !shouldDrag(axis, drag, this.currentDirection)) return;
		const axisValue = this.getAxisMotionValue(axis);
		let next = this.originPoint[axis] + offset[axis];
		if (this.constraints && this.constraints[axis]) next = applyConstraints(next, this.constraints[axis], this.elastic[axis]);
		axisValue.set(next);
	}
	resolveConstraints() {
		const { dragConstraints, dragElastic } = this.getProps();
		const layout = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(false) : this.visualElement.projection?.layout;
		const prevConstraints = this.constraints;
		if (dragConstraints && isRefObject(dragConstraints)) {
			if (!this.constraints) this.constraints = this.resolveRefConstraints();
		} else if (dragConstraints && layout) this.constraints = calcRelativeConstraints(layout.layoutBox, dragConstraints);
		else this.constraints = false;
		this.elastic = resolveDragElastic(dragElastic);
		/**
		* If we're outputting to external MotionValues, we want to rebase the measured constraints
		* from viewport-relative to component-relative. This only applies to relative (non-ref)
		* constraints, as ref-based constraints from calcViewportConstraints are already in the
		* correct coordinate space for the motion value transform offset.
		*/
		if (prevConstraints !== this.constraints && !isRefObject(dragConstraints) && layout && this.constraints && !this.hasMutatedConstraints) eachAxis((axis) => {
			if (this.constraints !== false && this.getAxisMotionValue(axis)) this.constraints[axis] = rebaseAxisConstraints(layout.layoutBox[axis], this.constraints[axis]);
		});
	}
	resolveRefConstraints() {
		const { dragConstraints: constraints, onMeasureDragConstraints } = this.getProps();
		if (!constraints || !isRefObject(constraints)) return false;
		const constraintsElement = constraints.current;
		const { projection } = this.visualElement;
		if (!projection || !projection.layout) return false;
		/**
		* Refresh the root scroll offset so the constraint's viewport box
		* translates to correct page coordinates. The scroll captured at
		* drag mount can be stale if the document was scrolled afterwards —
		* e.g. via the browser restoring scroll on refresh, or an ancestor
		* layout effect running after this element's mount (#2829).
		*
		* Clear the cached scroll first so `updateScroll` bypasses its
		* per-animationId cache and re-reads the live value.
		*/
		if (projection.root) {
			projection.root.scroll = void 0;
			projection.root.updateScroll();
		}
		const constraintsBox = measurePageBox(constraintsElement, projection.root, this.visualElement.getTransformPagePoint());
		let measuredConstraints = calcViewportConstraints(projection.layout.layoutBox, constraintsBox);
		/**
		* If there's an onMeasureDragConstraints listener we call it and
		* if different constraints are returned, set constraints to that
		*/
		if (onMeasureDragConstraints) {
			const userConstraints = onMeasureDragConstraints(convertBoxToBoundingBox(measuredConstraints));
			this.hasMutatedConstraints = !!userConstraints;
			if (userConstraints) measuredConstraints = convertBoundingBoxToBox(userConstraints);
		}
		return measuredConstraints;
	}
	startAnimation(velocity) {
		const { drag, dragMomentum, dragElastic, dragTransition, dragSnapToOrigin, onDragTransitionEnd } = this.getProps();
		const constraints = this.constraints || {};
		const momentumAnimations = eachAxis((axis) => {
			if (!shouldDrag(axis, drag, this.currentDirection)) return;
			let transition = constraints && constraints[axis] || {};
			if (dragSnapToOrigin === true || dragSnapToOrigin === axis) transition = {
				min: 0,
				max: 0
			};
			/**
			* Overdamp the boundary spring if `dragElastic` is disabled. There's still a frame
			* of spring animations so we should look into adding a disable spring option to `inertia`.
			* We could do something here where we affect the `bounceStiffness` and `bounceDamping`
			* using the value of `dragElastic`.
			*/
			const bounceStiffness = dragElastic ? 200 : 1e6;
			const bounceDamping = dragElastic ? 40 : 1e7;
			const inertia = {
				type: "inertia",
				velocity: dragMomentum ? velocity[axis] : 0,
				bounceStiffness,
				bounceDamping,
				timeConstant: 750,
				restDelta: 1,
				restSpeed: 10,
				...dragTransition,
				...transition
			};
			return this.startAxisValueAnimation(axis, inertia);
		});
		return Promise.all(momentumAnimations).then(onDragTransitionEnd);
	}
	startAxisValueAnimation(axis, transition) {
		const axisValue = this.getAxisMotionValue(axis);
		addValueToWillChange(this.visualElement, axis);
		return axisValue.start(animateMotionValue(axis, axisValue, 0, transition, this.visualElement, false));
	}
	stopAnimation() {
		eachAxis((axis) => this.getAxisMotionValue(axis).stop());
	}
	/**
	* Drag works differently depending on which props are provided.
	*
	* - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
	* - Otherwise, we apply the delta to the x/y motion values.
	*/
	getAxisMotionValue(axis) {
		const dragKey = `_drag${axis.toUpperCase()}`;
		const externalMotionValue = this.visualElement.getProps()[dragKey];
		return externalMotionValue ? externalMotionValue : this.visualElement.getValue(axis, this.visualElement.latestValues[axis] ?? 0);
	}
	/**
	* Measure the live box - projection.layout may or may not include the
	* drag transform, depending on when it was measured.
	*/
	snapToCursor({ clientX, clientY }) {
		const { drag } = this.getProps();
		const point = {
			x: clientX,
			y: clientY
		};
		const cursor = this.visualElement.getTransformPagePoint()?.(point) || point;
		const box = this.visualElement.measureViewportBox();
		eachAxis((axis) => {
			if (!shouldDrag(axis, drag, this.currentDirection)) return;
			const axisValue = this.getAxisMotionValue(axis);
			const { min, max } = box[axis];
			axisValue.set((axisValue.get() || 0) + cursor[axis] - mixNumber$1(min, max, .5));
		});
	}
	/**
	* When the viewport resizes we want to check if the measured constraints
	* have changed and, if so, reposition the element within those new constraints
	* relative to where it was before the resize.
	*/
	scalePositionWithinConstraints() {
		if (!this.visualElement.current) return;
		const { drag, dragConstraints } = this.getProps();
		const { projection } = this.visualElement;
		if (!isRefObject(dragConstraints) || !projection || !this.constraints) return;
		/**
		* Stop current animations as there can be visual glitching if we try to do
		* this mid-animation
		*/
		this.stopAnimation();
		/**
		* Record the relative position of the dragged element relative to the
		* constraints box and save as a progress value.
		*/
		const constraints = this.constraints;
		const boxProgress = {
			x: 0,
			y: 0
		};
		eachAxis((axis) => {
			const latest = this.getAxisMotionValue(axis).get();
			boxProgress[axis] = calcOrigin({
				min: latest,
				max: latest
			}, constraints[axis]);
		});
		/**
		* Update the layout of this element and resolve the latest drag constraints
		*/
		const { transformTemplate } = this.visualElement.getProps();
		this.visualElement.current.style.transform = transformTemplate ? transformTemplate({}, "") : "none";
		projection.root && projection.root.updateScroll();
		projection.updateLayout();
		/**
		* Reset constraints so resolveConstraints() will recalculate them
		* with the freshly measured layout rather than returning the cached value.
		*/
		this.constraints = false;
		this.resolveConstraints();
		/**
		* For each axis, calculate the current progress of the layout axis
		* within the new constraints.
		*/
		eachAxis((axis) => {
			const axisValue = this.getAxisMotionValue(axis);
			/**
			* An element resting at its origin has no offset to preserve,
			* and re-projecting 0 into the new constraints would move it.
			*/
			if (!shouldDrag(axis, drag, null) || !axisValue.get()) return;
			/**
			* Calculate a new transform based on the previous box progress
			*/
			const { min, max } = this.constraints[axis];
			axisValue.set(mixNumber$1(min, max, boxProgress[axis]));
		});
		/**
		* Flush the updated transform to the DOM synchronously to prevent
		* a visual flash at the element's CSS layout position (0,0) when
		* the transform was stripped for measurement.
		*/
		this.visualElement.render();
	}
	addListeners() {
		if (!this.visualElement.current) return;
		elementDragControls.set(this.visualElement, this);
		const element = this.visualElement.current;
		/**
		* Attach a pointerdown event listener on this DOM element to initiate drag tracking.
		*/
		const stopPointerListener = addPointerEvent(element, "pointerdown", (event) => {
			const { drag, dragListener = true } = this.getProps();
			const target = event.target;
			/**
			* Only block drag if clicking on a text input child element
			* (input, textarea, select, contenteditable) where users might
			* want to select text or interact with the control.
			*
			* Buttons and links don't block drag since they don't have
			* click-and-move actions of their own.
			*/
			const isClickingTextInputChild = target !== element && isElementTextInput(target);
			if (drag && dragListener && !isClickingTextInputChild) this.start(event);
		});
		/**
		* If using ref-based constraints, observe both the draggable element
		* and the constraint container for size changes via ResizeObserver.
		* Setup is deferred because dragConstraints.current is null when
		* addListeners first runs (React hasn't committed the ref yet).
		*/
		let stopResizeObservers;
		const measureDragConstraints = () => {
			const { dragConstraints } = this.getProps();
			if (isRefObject(dragConstraints) && dragConstraints.current) {
				this.constraints = this.resolveRefConstraints();
				if (!stopResizeObservers) stopResizeObservers = startResizeObservers(element, dragConstraints.current, () => this.scalePositionWithinConstraints());
			}
		};
		const { projection } = this.visualElement;
		const stopMeasureLayoutListener = projection.addEventListener("measure", measureDragConstraints);
		if (projection && !projection.layout) {
			projection.root && projection.root.updateScroll();
			projection.updateLayout();
		}
		frame.read(measureDragConstraints);
		/**
		* Attach a window resize listener to scale the draggable target within its defined
		* constraints as the window resizes.
		*/
		const stopResizeListener = addDomEvent(window, "resize", () => this.scalePositionWithinConstraints());
		/**
		* If the element's layout changes, calculate the delta and apply that to
		* the drag gesture's origin point.
		*/
		const stopLayoutUpdateListener = projection.addEventListener("didUpdate", (({ delta, hasLayoutChanged }) => {
			if (this.isDragging && hasLayoutChanged) {
				eachAxis((axis) => {
					const motionValue = this.getAxisMotionValue(axis);
					if (!motionValue) return;
					this.originPoint[axis] += delta[axis].translate;
					motionValue.set(motionValue.get() + delta[axis].translate);
				});
				this.visualElement.render();
			}
		}));
		return () => {
			stopResizeListener();
			stopPointerListener();
			stopMeasureLayoutListener();
			stopLayoutUpdateListener && stopLayoutUpdateListener();
			stopResizeObservers && stopResizeObservers();
		};
	}
	getProps() {
		const props = this.visualElement.getProps();
		const { drag = false, dragDirectionLock = false, dragPropagation = false, dragConstraints = false, dragElastic = defaultElastic, dragMomentum = true } = props;
		return {
			...props,
			drag,
			dragDirectionLock,
			dragPropagation,
			dragConstraints,
			dragElastic,
			dragMomentum
		};
	}
};
function skipFirstCall(callback) {
	let isFirst = true;
	return () => {
		if (isFirst) {
			isFirst = false;
			return;
		}
		callback();
	};
}
function startResizeObservers(element, constraintsElement, onResize) {
	const stopElement = resize(element, skipFirstCall(onResize));
	const stopContainer = resize(constraintsElement, skipFirstCall(onResize));
	return () => {
		stopElement();
		stopContainer();
	};
}
function shouldDrag(direction, drag, currentDirection) {
	return (drag === true || drag === direction) && (currentDirection === null || currentDirection === direction);
}
/**
* Based on an x/y offset determine the current drag direction. If both axis' offsets are lower
* than the provided threshold, return `null`.
*
* @param offset - The x/y offset from origin.
* @param lockThreshold - (Optional) - the minimum absolute offset before we can determine a drag direction.
*/
function getCurrentDirection(offset, lockThreshold = 10) {
	let direction = null;
	if (Math.abs(offset.y) > lockThreshold) direction = "y";
	else if (Math.abs(offset.x) > lockThreshold) direction = "x";
	return direction;
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/framer-motion/dist/es/gestures/drag/index.mjs
var DragGesture = class extends Feature {
	constructor(node) {
		super(node);
		this.removeGroupControls = noop;
		this.removeListeners = noop;
		this.controls = new VisualElementDragControls(node);
	}
	mount() {
		const { dragControls } = this.node.getProps();
		if (dragControls) this.removeGroupControls = dragControls.subscribe(this.controls);
		this.removeListeners = this.controls.addListeners() || noop;
	}
	update() {
		const { dragControls } = this.node.getProps();
		const { dragControls: prevDragControls } = this.node.prevProps || {};
		if (dragControls !== prevDragControls) {
			this.removeGroupControls();
			if (dragControls) this.removeGroupControls = dragControls.subscribe(this.controls);
		}
	}
	unmount() {
		this.removeGroupControls();
		this.removeListeners();
		/**
		* In React 19, during list reorder reconciliation, components may
		* briefly unmount and remount while the drag is still active. If we're
		* actively dragging, we should NOT end the pan session - it will
		* continue tracking pointer events via its window-level listeners.
		*
		* The pan session will be properly cleaned up when:
		* 1. The drag ends naturally (pointerup/pointercancel)
		* 2. The component is truly removed from the DOM
		*/
		if (!this.controls.isDragging) this.controls.endPanSession();
	}
};
//#endregion
//#region node_modules/@sanity/ui/node_modules/framer-motion/dist/es/gestures/pan/index.mjs
var asyncHandler = (handler) => (event, info) => {
	if (handler) frame.update(() => handler(event, info), false, true);
};
var PanGesture = class extends Feature {
	constructor() {
		super(...arguments);
		this.removePointerDownListener = noop;
	}
	onPointerDown(pointerDownEvent) {
		this.session = new PanSession(pointerDownEvent, this.createPanHandlers(), {
			transformPagePoint: this.node.getTransformPagePoint(),
			contextWindow: getContextWindow(this.node)
		});
	}
	createPanHandlers() {
		const { onPanSessionStart, onPanStart, onPan, onPanEnd } = this.node.getProps();
		return {
			onSessionStart: asyncHandler(onPanSessionStart),
			onStart: asyncHandler(onPanStart),
			onMove: asyncHandler(onPan),
			onEnd: (event, info) => {
				delete this.session;
				if (onPanEnd) frame.postRender(() => onPanEnd(event, info));
			}
		};
	}
	mount() {
		this.removePointerDownListener = addPointerEvent(this.node.current, "pointerdown", (event) => this.onPointerDown(event));
	}
	update() {
		this.session && this.session.updateHandlers(this.createPanHandlers());
	}
	unmount() {
		this.removePointerDownListener();
		this.session && this.session.end();
	}
};
//#endregion
//#region node_modules/@sanity/ui/node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs
/**
* Track whether we've taken any snapshots yet. If not,
* we can safely skip notification of didUpdate.
*
* Difficult to capture in a test but to prevent flickering
* we must set this to true either on update or unmount.
* Running `next-env/layout-id` in Safari will show this behaviour if broken.
*/
var hasTakenAnySnapshot = false;
var MeasureLayoutWithContext = class extends import_react.Component {
	/**
	* This only mounts projection nodes for components that
	* need measuring, we might want to do it for all components
	* in order to incorporate transforms
	*/
	componentDidMount() {
		const { visualElement, layoutGroup, switchLayoutGroup, layoutId } = this.props;
		const { projection } = visualElement;
		if (projection) {
			if (layoutGroup.group) layoutGroup.group.add(projection);
			if (switchLayoutGroup && switchLayoutGroup.register && layoutId) switchLayoutGroup.register(projection);
			if (hasTakenAnySnapshot) projection.root.didUpdate();
			projection.addEventListener("animationComplete", () => {
				this.safeToRemove();
			});
			projection.setOptions({
				...projection.options,
				layoutDependency: this.props.layoutDependency,
				onExitComplete: () => this.safeToRemove()
			});
		}
		globalProjectionState.hasEverUpdated = true;
	}
	getSnapshotBeforeUpdate(prevProps) {
		const { layoutDependency, visualElement, drag, isPresent } = this.props;
		const { projection } = visualElement;
		if (!projection) return null;
		/**
		* TODO: We use this data in relegate to determine whether to
		* promote a previous element. There's no guarantee its presence data
		* will have updated by this point - if a bug like this arises it will
		* have to be that we markForRelegation and then find a new lead some other way,
		* perhaps in didUpdate
		*/
		projection.isPresent = isPresent;
		if (prevProps.layoutDependency !== layoutDependency) projection.setOptions({
			...projection.options,
			layoutDependency
		});
		hasTakenAnySnapshot = true;
		if (drag || prevProps.layoutDependency !== layoutDependency || layoutDependency === void 0 || prevProps.isPresent !== isPresent) projection.willUpdate();
		else this.safeToRemove();
		if (prevProps.isPresent !== isPresent) {
			if (isPresent) projection.promote();
			else if (!projection.relegate())
 /**
			* If there's another stack member taking over from this one,
			* it's in charge of the exit animation and therefore should
			* be in charge of the safe to remove. Otherwise we call it here.
			*/
			frame.postRender(() => {
				const stack = projection.getStack();
				if (!stack || !stack.members.length) this.safeToRemove();
			});
		}
		return null;
	}
	componentDidUpdate() {
		const { visualElement, layoutAnchor } = this.props;
		const { projection } = visualElement;
		if (projection) {
			projection.options.layoutAnchor = layoutAnchor;
			projection.root.didUpdate();
			microtask.postRender(() => {
				if (!projection.currentAnimation && projection.isLead()) this.safeToRemove();
			});
		}
	}
	componentWillUnmount() {
		const { visualElement, layoutGroup, switchLayoutGroup: promoteContext } = this.props;
		const { projection } = visualElement;
		hasTakenAnySnapshot = true;
		if (projection) {
			projection.scheduleCheckAfterUnmount();
			if (layoutGroup && layoutGroup.group) layoutGroup.group.remove(projection);
			if (promoteContext && promoteContext.deregister) promoteContext.deregister(projection);
		}
	}
	safeToRemove() {
		const { safeToRemove } = this.props;
		safeToRemove && safeToRemove();
	}
	render() {
		return null;
	}
};
function MeasureLayout(props) {
	const [isPresent, safeToRemove] = usePresence();
	const layoutGroup = (0, import_react.useContext)(LayoutGroupContext);
	return (0, import_jsx_runtime.jsx)(MeasureLayoutWithContext, {
		...props,
		layoutGroup,
		switchLayoutGroup: (0, import_react.useContext)(SwitchLayoutGroupContext),
		isPresent,
		safeToRemove
	});
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/framer-motion/dist/es/motion/features/drag.mjs
var drag = {
	pan: { Feature: PanGesture },
	drag: {
		Feature: DragGesture,
		ProjectionNode: HTMLProjectionNode,
		MeasureLayout
	}
};
//#endregion
//#region node_modules/@sanity/ui/node_modules/framer-motion/dist/es/gestures/hover.mjs
function handleHoverEvent(node, event, lifecycle) {
	const { props } = node;
	if (node.animationState && props.whileHover) node.animationState.setActive("whileHover", lifecycle === "Start");
	const callback = props["onHover" + lifecycle];
	if (callback) frame.postRender(() => callback(event, extractEventInfo(event)));
}
var HoverGesture = class extends Feature {
	mount() {
		const { current } = this.node;
		if (!current) return;
		this.unmount = hover(current, (_element, startEvent) => {
			handleHoverEvent(this.node, startEvent, "Start");
			return (endEvent) => handleHoverEvent(this.node, endEvent, "End");
		});
	}
	unmount() {}
};
//#endregion
//#region node_modules/@sanity/ui/node_modules/framer-motion/dist/es/gestures/focus.mjs
var FocusGesture = class extends Feature {
	constructor() {
		super(...arguments);
		this.isActive = false;
	}
	onFocus() {
		let isFocusVisible = false;
		/**
		* If this element doesn't match focus-visible then don't
		* apply whileHover. But, if matches throws that focus-visible
		* is not a valid selector then in that browser outline styles will be applied
		* to the element by default and we want to match that behaviour with whileFocus.
		*/
		try {
			isFocusVisible = this.node.current.matches(":focus-visible");
		} catch (e) {
			isFocusVisible = true;
		}
		if (!isFocusVisible || !this.node.animationState) return;
		this.node.animationState.setActive("whileFocus", true);
		this.isActive = true;
	}
	onBlur() {
		if (!this.isActive || !this.node.animationState) return;
		this.node.animationState.setActive("whileFocus", false);
		this.isActive = false;
	}
	mount() {
		this.unmount = pipe(addDomEvent(this.node.current, "focus", () => this.onFocus()), addDomEvent(this.node.current, "blur", () => this.onBlur()));
	}
	unmount() {}
};
//#endregion
//#region node_modules/@sanity/ui/node_modules/framer-motion/dist/es/gestures/press.mjs
function handlePressEvent(node, event, lifecycle) {
	const { props } = node;
	if (node.current instanceof HTMLButtonElement && node.current.disabled) return;
	if (node.animationState && props.whileTap) node.animationState.setActive("whileTap", lifecycle === "Start");
	const callback = props["onTap" + (lifecycle === "End" ? "" : lifecycle)];
	if (callback) frame.postRender(() => callback(event, extractEventInfo(event)));
}
var PressGesture = class extends Feature {
	mount() {
		const { current } = this.node;
		if (!current) return;
		const { globalTapTarget, propagate } = this.node.props;
		this.unmount = press(current, (_element, startEvent) => {
			handlePressEvent(this.node, startEvent, "Start");
			return (endEvent, { success }) => handlePressEvent(this.node, endEvent, success ? "End" : "Cancel");
		}, {
			useGlobalTarget: globalTapTarget,
			stopPropagation: propagate?.tap === false
		});
	}
	unmount() {}
};
//#endregion
//#region node_modules/@sanity/ui/node_modules/framer-motion/dist/es/motion/features/viewport/observers.mjs
/**
* Map an IntersectionHandler callback to an element. We only ever make one handler for one
* element, so even though these handlers might all be triggered by different
* observers, we can keep them in the same map.
*/
var observerCallbacks = /* @__PURE__ */ new WeakMap();
/**
* Multiple observers can be created for multiple element/document roots. Each with
* different settings. So here we store dictionaries of observers to each root,
* using serialised settings (threshold/margin) as lookup keys.
*/
var observers = /* @__PURE__ */ new WeakMap();
var fireObserverCallback = (entry) => {
	const callback = observerCallbacks.get(entry.target);
	callback && callback(entry);
};
var fireAllObserverCallbacks = (entries) => {
	entries.forEach(fireObserverCallback);
};
function initIntersectionObserver({ root, ...options }) {
	const lookupRoot = root || document;
	/**
	* If we don't have an observer lookup map for this root, create one.
	*/
	if (!observers.has(lookupRoot)) observers.set(lookupRoot, {});
	const rootObservers = observers.get(lookupRoot);
	const key = JSON.stringify(options);
	/**
	* If we don't have an observer for this combination of root and settings,
	* create one.
	*/
	if (!rootObservers[key]) rootObservers[key] = new IntersectionObserver(fireAllObserverCallbacks, {
		root,
		...options
	});
	return rootObservers[key];
}
function observeIntersection(element, options, callback) {
	const rootInteresectionObserver = initIntersectionObserver(options);
	observerCallbacks.set(element, callback);
	rootInteresectionObserver.observe(element);
	return () => {
		observerCallbacks.delete(element);
		rootInteresectionObserver.unobserve(element);
	};
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/framer-motion/dist/es/motion/features/viewport/index.mjs
var thresholdNames = {
	some: 0,
	all: 1
};
var InViewFeature = class extends Feature {
	constructor() {
		super(...arguments);
		this.hasEnteredView = false;
		this.isInView = false;
	}
	startObserver() {
		this.stopObserver?.();
		const { viewport = {} } = this.node.getProps();
		const { root, margin: rootMargin, amount = "some", once } = viewport;
		const options = {
			root: root ? root.current : void 0,
			rootMargin,
			threshold: typeof amount === "number" ? amount : thresholdNames[amount]
		};
		const onIntersectionUpdate = (entry) => {
			const { isIntersecting } = entry;
			/**
			* If there's been no change in the viewport state, early return.
			*/
			if (this.isInView === isIntersecting) return;
			this.isInView = isIntersecting;
			/**
			* Handle hasEnteredView. If this is only meant to run once, and
			* element isn't visible, early return. Otherwise set hasEnteredView to true.
			*/
			if (once && !isIntersecting && this.hasEnteredView) return;
			else if (isIntersecting) this.hasEnteredView = true;
			if (this.node.animationState) this.node.animationState.setActive("whileInView", isIntersecting);
			/**
			* Use the latest committed props rather than the ones in scope
			* when this observer is created
			*/
			const { onViewportEnter, onViewportLeave } = this.node.getProps();
			const callback = isIntersecting ? onViewportEnter : onViewportLeave;
			callback && callback(entry);
		};
		this.stopObserver = observeIntersection(this.node.current, options, onIntersectionUpdate);
	}
	mount() {
		this.startObserver();
	}
	update() {
		if (typeof IntersectionObserver === "undefined") return;
		const { props, prevProps } = this.node;
		if ([
			"amount",
			"margin",
			"root"
		].some(hasViewportOptionChanged(props, prevProps))) this.startObserver();
	}
	unmount() {
		this.stopObserver?.();
		this.hasEnteredView = false;
		this.isInView = false;
	}
};
function hasViewportOptionChanged({ viewport = {} }, { viewport: prevViewport = {} } = {}) {
	return (name) => viewport[name] !== prevViewport[name];
}
//#endregion
//#region node_modules/@sanity/ui/node_modules/framer-motion/dist/es/motion/features/gestures.mjs
var gestureAnimations = {
	inView: { Feature: InViewFeature },
	tap: { Feature: PressGesture },
	focus: { Feature: FocusGesture },
	hover: { Feature: HoverGesture }
};
//#endregion
//#region node_modules/@sanity/ui/node_modules/framer-motion/dist/es/motion/features/layout.mjs
var layout = { layout: {
	ProjectionNode: HTMLProjectionNode,
	MeasureLayout
} };
//#endregion
//#region node_modules/@sanity/ui/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs
var motion$1 = /*@__PURE__*/ createMotionProxy({
	...animations,
	...gestureAnimations,
	...drag,
	...layout
}, createDomVisualElement);
//#endregion
//#region node_modules/@sanity/ui/node_modules/motion/dist/es/react.mjs
var import_react_is$1 = /* @__PURE__ */ __toESM(require_react_is$1(), 1);
var motion = motion$1;
//#endregion
//#region node_modules/use-effect-event/dist/index.js
var import_react_dom = /* @__PURE__ */ __toESM(require_react_dom(), 1);
var context = import_react.createContext(!0);
function forbiddenInRender() {
	throw Error("A function wrapped in useEffectEvent can't be called during rendering.");
}
var isInvalidExecutionContextForEventFunction = "use" in import_react.default ? () => {
	try {
		return import_react.use(context);
	} catch {
		return !1;
	}
} : () => !1;
/**
* This is a ponyfill of the `useEffectEvent` hook that became stable in React 19.2:
* https://react.dev/reference/react/useEffectEvent
* It also works on React 18.3 and React 19.0/19.1, where the native hook doesn't exist yet.
*
* It deliberately differs from the native hook in two ways:
* 1. The returned function has a stable identity: the same function is returned on every
*    render (the native hook returns a new closure each render). Linters ported from the
*    React Compiler (e.g. oxlint's `react/exhaustive-effect-dependencies`) only exempt the
*    native hook from effect dependency arrays, so they push callers into listing this
*    ponyfill's functions as dependencies — with a stable identity that's harmless, where an
*    unstable one would re-fire the effect on every render.
* 2. It doesn't reproduce the React 19.2 bug where the native hook keeps reading first-render
*    values inside `React.memo`/`React.forwardRef` components:
*    https://github.com/facebook/react/issues/34818
* @public
*/
function useEffectEvent(fn) {
	/**
	* For both React 18 and 19 we set the ref to the forbiddenInRender function, to catch illegal calls to the function during render.
	* Once the insertion effect runs, we set the ref to the actual function.
	*/
	let ref = import_react.useRef(forbiddenInRender);
	import_react.useInsertionEffect(() => {
		ref.current = fn;
	}, [fn]);
	/**
	* The stable wrapper is created exactly once per component instance — `useState` with a lazy
	* initializer guarantees the identity survives re-renders — and reads `ref.current` on every
	* call, so it always invokes the latest `fn` without ever being stale.
	*/
	let [stableFn] = import_react.useState(() => ((...args) => {
		isInvalidExecutionContextForEventFunction() && forbiddenInRender();
		let latestFn = ref.current;
		return latestFn(...args);
	}));
	return stableFn;
}
//#endregion
//#region node_modules/@sanity/ui/dist/_chunks/portalProvider.js
var rgba = rgba$2;
var studioTheme = buildTheme();
var EMPTY_ARRAY = [];
var EMPTY_RECORD = {};
var POPOVER_MOTION_DURATION = .2;
var POPOVER_MOTION_PROPS = {
	card: {
		initial: {
			scale: .97,
			willChange: "transform"
		},
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				when: "beforeChildren",
				duration: POPOVER_MOTION_DURATION / 2
			}
		},
		scaleIn: { scale: 1 },
		scaleOut: { scale: .97 }
	},
	children: {
		hidden: { opacity: 0 },
		visible: { opacity: 1 }
	},
	transition: {
		type: "spring",
		visualDuration: POPOVER_MOTION_DURATION,
		bounce: .25
	}
};
/**
* @internal
*/
function _isEnterToClickElement(element) {
	return isHTMLAnchorElement(element) || isHTMLButtonElement(element);
}
/**
* @internal
*/
function isHTMLElement(node) {
	return node instanceof Node && node.nodeType === Node.ELEMENT_NODE;
}
/**
* @internal
*/
function isHTMLAnchorElement(element) {
	return isHTMLElement(element) && element.nodeName === "A";
}
/**
* @internal
*/
function isHTMLInputElement(element) {
	return isHTMLElement(element) && element.nodeName === "INPUT";
}
/**
* @internal
*/
function isHTMLButtonElement(element) {
	return isHTMLElement(element) && element.nodeName === "BUTTON";
}
/**
* @internal
*/
function isHTMLSelectElement(element) {
	return isHTMLElement(element) && element.nodeName === "SELECT";
}
/**
* @internal
*/
function isHTMLTextAreaElement(element) {
	return isHTMLElement(element) && element.nodeName === "TEXTAREA";
}
/**
* @internal
*/
function containsOrEqualsElement(element, node) {
	return element.contains(node) || element === node;
}
/**
* @internal
*/
function _fillCSSObject(keys, value) {
	return keys.reduce((style, key) => (style[key] = value, style), {});
}
/**
* @public
*/
function rem(pixelValue) {
	return pixelValue === 0 ? 0 : `${pixelValue / 16}rem`;
}
/**
* @internal
*/
function _responsive(media, values, callback) {
	return (values?.map(callback) || []).map((statement, mediaIndex) => mediaIndex === 0 ? statement : { [`@media screen and (min-width: ${media[mediaIndex - 1]}px)`]: statement });
}
/**
* @internal
*/
function _getArrayProp(val, defaultVal) {
	return val === void 0 ? defaultVal || EMPTY_ARRAY : Array.isArray(val) ? val : [val];
}
/**
* @internal
*/
function _getResponsiveSpace(theme, props, spaceIndexes = EMPTY_ARRAY) {
	if (!Array.isArray(spaceIndexes)) throw Error("the property must be array of numbers");
	if (spaceIndexes.length === 0) return null;
	let { media, space } = getTheme_v2(theme);
	return _responsive(media, spaceIndexes, (spaceIndex) => _fillCSSObject(props, rem(space[spaceIndex])));
}
var BASE_STYLE$3 = { "&[data-as=\"ul\"],&[data-as=\"ol\"]": { listStyle: "none" } };
var BOX_SIZING = {
	content: "content-box",
	border: "border-box"
};
var BOX_HEIGHT = {
	stretch: "stretch",
	fill: "100%"
};
function boxStyle() {
	return BASE_STYLE$3;
}
function responsiveBoxStyle() {
	return [
		responsiveBoxSizingStyle,
		responsiveBoxHeightStyle,
		responsiveBoxOverflowStyle,
		responsiveBoxDisplayStyle
	];
}
function responsiveBoxDisplayStyle(props) {
	let { media } = getTheme_v2(props.theme);
	return _responsive(media, props.$display, (display) => ({ "&:not([hidden])": { display } }));
}
function responsiveBoxSizingStyle(props) {
	let { media } = getTheme_v2(props.theme);
	return _responsive(media, props.$sizing, (sizing) => ({ boxSizing: BOX_SIZING[sizing] }));
}
function responsiveBoxHeightStyle(props) {
	let { media } = getTheme_v2(props.theme);
	return _responsive(media, props.$height, (height) => ({ height: BOX_HEIGHT[height] }));
}
function responsiveBoxOverflowStyle(props) {
	let { media } = getTheme_v2(props.theme);
	return _responsive(media, props.$overflow, (overflow) => ({ overflow }));
}
var BASE_STYLE$2 = {
	minWidth: 0,
	minHeight: 0
};
function flexItemStyle() {
	return [BASE_STYLE$2, responsiveFlexItemStyle];
}
function responsiveFlexItemStyle(props) {
	let { media } = getTheme_v2(props.theme);
	return props.$flex ? _responsive(media, props.$flex, (flex) => ({ flex: `${flex}` })) : EMPTY_ARRAY;
}
function responsiveGridItemStyle() {
	return [
		responsiveGridItemRowStyle,
		responsiveGridItemRowStartStyle,
		responsiveGridItemRowEndStyle,
		responsiveGridItemColumnStyle,
		responsiveGridItemColumnStartStyle,
		responsiveGridItemColumnEndStyle
	];
}
var GRID_ITEM_ROW = {
	auto: "auto",
	full: "1 / -1"
};
var GRID_ITEM_COLUMN = {
	auto: "auto",
	full: "1 / -1"
};
function responsiveGridItemRowStyle(props) {
	let { media } = getTheme_v2(props.theme);
	return _responsive(media, props.$row, (row) => typeof row == "number" ? { gridRow: `span ${row} / span ${row}` } : { gridRow: GRID_ITEM_ROW[row] });
}
function responsiveGridItemRowStartStyle(props) {
	let { media } = getTheme_v2(props.theme);
	return _responsive(media, props.$rowStart, (rowStart) => ({ gridRowStart: `${rowStart}` }));
}
function responsiveGridItemRowEndStyle(props) {
	let { media } = getTheme_v2(props.theme);
	return _responsive(media, props.$rowEnd, (rowEnd) => ({ gridRowEnd: `${rowEnd}` }));
}
function responsiveGridItemColumnStyle(props) {
	let { media } = getTheme_v2(props.theme);
	return _responsive(media, props.$column, (column) => typeof column == "number" ? { gridColumn: `span ${column} / span ${column}` } : { gridColumn: GRID_ITEM_COLUMN[column] });
}
function responsiveGridItemColumnStartStyle(props) {
	let { media } = getTheme_v2(props.theme);
	return _responsive(media, props.$columnStart, (columnStart) => ({ gridColumnStart: `${columnStart}` }));
}
function responsiveGridItemColumnEndStyle(props) {
	let { media } = getTheme_v2(props.theme);
	return _responsive(media, props.$columnEnd, (columnEnd) => ({ gridColumnEnd: `${columnEnd}` }));
}
function responsiveMarginStyle(props) {
	let { theme } = props;
	return [
		_getResponsiveSpace(theme, ["margin"], props.$margin),
		_getResponsiveSpace(theme, ["marginLeft", "marginRight"], props.$marginX),
		_getResponsiveSpace(theme, ["marginTop", "marginBottom"], props.$marginY),
		_getResponsiveSpace(theme, ["marginTop"], props.$marginTop),
		_getResponsiveSpace(theme, ["marginRight"], props.$marginRight),
		_getResponsiveSpace(theme, ["marginBottom"], props.$marginBottom),
		_getResponsiveSpace(theme, ["marginLeft"], props.$marginLeft)
	].filter(Boolean);
}
function responsivePaddingStyle(props) {
	let { theme } = props;
	return [
		_getResponsiveSpace(theme, ["padding"], props.$padding),
		_getResponsiveSpace(theme, ["paddingLeft", "paddingRight"], props.$paddingX),
		_getResponsiveSpace(theme, ["paddingTop", "paddingBottom"], props.$paddingY),
		_getResponsiveSpace(theme, ["paddingTop"], props.$paddingTop),
		_getResponsiveSpace(theme, ["paddingRight"], props.$paddingRight),
		_getResponsiveSpace(theme, ["paddingBottom"], props.$paddingBottom),
		_getResponsiveSpace(theme, ["paddingLeft"], props.$paddingLeft)
	].filter(Boolean);
}
var StyledBox = /* @__PURE__ */ Mt.div.withConfig({
	displayName: "StyledBox",
	componentId: "sc-00g4gn-0"
})(boxStyle, flexItemStyle, responsiveBoxStyle, responsiveGridItemStyle, responsiveMarginStyle, responsivePaddingStyle);
var Box = (0, import_react.forwardRef)(function Box(props, ref) {
	let $ = (0, import_dist.c)(115), deprecated_column, deprecated_columnEnd, deprecated_columnStart, deprecated_row, deprecated_rowEnd, deprecated_rowStart, flex, gridColumn, gridColumnEnd, gridColumnStart, gridRow, gridRowEnd, gridRowStart, height, marginBottom, marginLeft, marginRight, marginTop, marginX, marginY, overflow, paddingBottom, paddingLeft, paddingRight, paddingTop, paddingX, paddingY, restProps, sizing, t0, t1, t2, t3;
	$[0] === props ? (deprecated_column = $[1], deprecated_columnEnd = $[2], deprecated_columnStart = $[3], deprecated_row = $[4], deprecated_rowEnd = $[5], deprecated_rowStart = $[6], flex = $[7], gridColumn = $[8], gridColumnEnd = $[9], gridColumnStart = $[10], gridRow = $[11], gridRowEnd = $[12], gridRowStart = $[13], height = $[14], marginBottom = $[15], marginLeft = $[16], marginRight = $[17], marginTop = $[18], marginX = $[19], marginY = $[20], overflow = $[21], paddingBottom = $[22], paddingLeft = $[23], paddingRight = $[24], paddingTop = $[25], paddingX = $[26], paddingY = $[27], restProps = $[28], sizing = $[29], t0 = $[30], t1 = $[31], t2 = $[32], t3 = $[33]) : ({as: t0, gridColumn, column: deprecated_column, gridColumnStart, columnStart: deprecated_columnStart, gridColumnEnd, columnEnd: deprecated_columnEnd, display: t1, flex, height, margin: t2, marginX, marginY, marginTop, marginRight, marginBottom, marginLeft, overflow, padding: t3, paddingX, paddingY, paddingTop, paddingRight, paddingBottom, paddingLeft, gridRow, row: deprecated_row, gridRowStart, rowStart: deprecated_rowStart, gridRowEnd, rowEnd: deprecated_rowEnd, sizing, ...restProps} = props, $[0] = props, $[1] = deprecated_column, $[2] = deprecated_columnEnd, $[3] = deprecated_columnStart, $[4] = deprecated_row, $[5] = deprecated_rowEnd, $[6] = deprecated_rowStart, $[7] = flex, $[8] = gridColumn, $[9] = gridColumnEnd, $[10] = gridColumnStart, $[11] = gridRow, $[12] = gridRowEnd, $[13] = gridRowStart, $[14] = height, $[15] = marginBottom, $[16] = marginLeft, $[17] = marginRight, $[18] = marginTop, $[19] = marginX, $[20] = marginY, $[21] = overflow, $[22] = paddingBottom, $[23] = paddingLeft, $[24] = paddingRight, $[25] = paddingTop, $[26] = paddingX, $[27] = paddingY, $[28] = restProps, $[29] = sizing, $[30] = t0, $[31] = t1, $[32] = t2, $[33] = t3);
	let asProp = t0 === void 0 ? "div" : t0, display = t1 === void 0 ? "block" : t1, margin = t2 === void 0 ? 0 : t2, padding = t3 === void 0 ? 0 : t3, column = gridColumn === void 0 ? deprecated_column : gridColumn, columnStart = gridColumnStart === void 0 ? deprecated_columnStart : gridColumnStart, columnEnd = gridColumnEnd === void 0 ? deprecated_columnEnd : gridColumnEnd, row = gridRow === void 0 ? deprecated_row : gridRow, rowStart = gridRowStart === void 0 ? deprecated_rowStart : gridRowStart, rowEnd = gridRowEnd === void 0 ? deprecated_rowEnd : gridRowEnd, t4 = typeof asProp == "string" ? asProp : void 0, t5;
	$[34] === column ? t5 = $[35] : (t5 = _getArrayProp(column), $[34] = column, $[35] = t5);
	let t6;
	$[36] === columnStart ? t6 = $[37] : (t6 = _getArrayProp(columnStart), $[36] = columnStart, $[37] = t6);
	let t7;
	$[38] === columnEnd ? t7 = $[39] : (t7 = _getArrayProp(columnEnd), $[38] = columnEnd, $[39] = t7);
	let t8;
	$[40] === display ? t8 = $[41] : (t8 = _getArrayProp(display), $[40] = display, $[41] = t8);
	let t9;
	$[42] === flex ? t9 = $[43] : (t9 = _getArrayProp(flex), $[42] = flex, $[43] = t9);
	let t10;
	$[44] === height ? t10 = $[45] : (t10 = _getArrayProp(height), $[44] = height, $[45] = t10);
	let t11;
	$[46] === margin ? t11 = $[47] : (t11 = _getArrayProp(margin), $[46] = margin, $[47] = t11);
	let t12;
	$[48] === marginX ? t12 = $[49] : (t12 = _getArrayProp(marginX), $[48] = marginX, $[49] = t12);
	let t13;
	$[50] === marginY ? t13 = $[51] : (t13 = _getArrayProp(marginY), $[50] = marginY, $[51] = t13);
	let t14;
	$[52] === marginTop ? t14 = $[53] : (t14 = _getArrayProp(marginTop), $[52] = marginTop, $[53] = t14);
	let t15;
	$[54] === marginRight ? t15 = $[55] : (t15 = _getArrayProp(marginRight), $[54] = marginRight, $[55] = t15);
	let t16;
	$[56] === marginBottom ? t16 = $[57] : (t16 = _getArrayProp(marginBottom), $[56] = marginBottom, $[57] = t16);
	let t17;
	$[58] === marginLeft ? t17 = $[59] : (t17 = _getArrayProp(marginLeft), $[58] = marginLeft, $[59] = t17);
	let t18;
	$[60] === overflow ? t18 = $[61] : (t18 = _getArrayProp(overflow), $[60] = overflow, $[61] = t18);
	let t19;
	$[62] === padding ? t19 = $[63] : (t19 = _getArrayProp(padding), $[62] = padding, $[63] = t19);
	let t20;
	$[64] === paddingX ? t20 = $[65] : (t20 = _getArrayProp(paddingX), $[64] = paddingX, $[65] = t20);
	let t21;
	$[66] === paddingY ? t21 = $[67] : (t21 = _getArrayProp(paddingY), $[66] = paddingY, $[67] = t21);
	let t22;
	$[68] === paddingTop ? t22 = $[69] : (t22 = _getArrayProp(paddingTop), $[68] = paddingTop, $[69] = t22);
	let t23;
	$[70] === paddingRight ? t23 = $[71] : (t23 = _getArrayProp(paddingRight), $[70] = paddingRight, $[71] = t23);
	let t24;
	$[72] === paddingBottom ? t24 = $[73] : (t24 = _getArrayProp(paddingBottom), $[72] = paddingBottom, $[73] = t24);
	let t25;
	$[74] === paddingLeft ? t25 = $[75] : (t25 = _getArrayProp(paddingLeft), $[74] = paddingLeft, $[75] = t25);
	let t26;
	$[76] === row ? t26 = $[77] : (t26 = _getArrayProp(row), $[76] = row, $[77] = t26);
	let t27;
	$[78] === rowStart ? t27 = $[79] : (t27 = _getArrayProp(rowStart), $[78] = rowStart, $[79] = t27);
	let t28;
	$[80] === rowEnd ? t28 = $[81] : (t28 = _getArrayProp(rowEnd), $[80] = rowEnd, $[81] = t28);
	let t29;
	$[82] === sizing ? t29 = $[83] : (t29 = _getArrayProp(sizing), $[82] = sizing, $[83] = t29);
	let t30 = asProp, t31;
	return $[84] !== props.children || $[85] !== ref || $[86] !== restProps || $[87] !== t10 || $[88] !== t11 || $[89] !== t12 || $[90] !== t13 || $[91] !== t14 || $[92] !== t15 || $[93] !== t16 || $[94] !== t17 || $[95] !== t18 || $[96] !== t19 || $[97] !== t20 || $[98] !== t21 || $[99] !== t22 || $[100] !== t23 || $[101] !== t24 || $[102] !== t25 || $[103] !== t26 || $[104] !== t27 || $[105] !== t28 || $[106] !== t29 || $[107] !== t30 || $[108] !== t4 || $[109] !== t5 || $[110] !== t6 || $[111] !== t7 || $[112] !== t8 || $[113] !== t9 ? (t31 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledBox, {
		"data-as": t4,
		"data-ui": "Box",
		...restProps,
		$column: t5,
		$columnStart: t6,
		$columnEnd: t7,
		$display: t8,
		$flex: t9,
		$height: t10,
		$margin: t11,
		$marginX: t12,
		$marginY: t13,
		$marginTop: t14,
		$marginRight: t15,
		$marginBottom: t16,
		$marginLeft: t17,
		$overflow: t18,
		$padding: t19,
		$paddingX: t20,
		$paddingY: t21,
		$paddingTop: t22,
		$paddingRight: t23,
		$paddingBottom: t24,
		$paddingLeft: t25,
		$row: t26,
		$rowStart: t27,
		$rowEnd: t28,
		$sizing: t29,
		as: t30,
		ref,
		children: props.children
	}), $[84] = props.children, $[85] = ref, $[86] = restProps, $[87] = t10, $[88] = t11, $[89] = t12, $[90] = t13, $[91] = t14, $[92] = t15, $[93] = t16, $[94] = t17, $[95] = t18, $[96] = t19, $[97] = t20, $[98] = t21, $[99] = t22, $[100] = t23, $[101] = t24, $[102] = t25, $[103] = t26, $[104] = t27, $[105] = t28, $[106] = t29, $[107] = t30, $[108] = t4, $[109] = t5, $[110] = t6, $[111] = t7, $[112] = t8, $[113] = t9, $[114] = t31) : t31 = $[114], t31;
});
function responsiveRadiusStyle(props) {
	let { media, radius } = getTheme_v2(props.theme);
	return _responsive(media, props.$radius, (value) => {
		let borderRadius = 0;
		return typeof value == "number" && (borderRadius = rem(radius[value])), value === "full" && (borderRadius = "9999px"), { borderRadius };
	});
}
/**
* @public
*/
function useTheme$1() {
	return bt();
}
/**
* @public
*/
function useTheme_v2() {
	let $ = (0, import_dist.c)(2), t0 = bt(), t1;
	return $[0] === t0 ? t1 = $[1] : (t1 = getTheme_v2(t0), $[0] = t0, $[1] = t1), t1;
}
var BASE_STYLE$1 = { "&&:not([hidden])": { display: "flex" } };
function responsiveFlexStyle() {
	return [
		BASE_STYLE$1,
		responsiveFlexAlignStyle,
		responsiveFlexGapStyle,
		responsiveFlexWrapStyle,
		responsiveFlexJustifyStyle,
		responsiveFlexDirectionStyle
	];
}
function responsiveFlexAlignStyle(props) {
	let { media } = getTheme_v2(props.theme);
	return _responsive(media, props.$align, (align) => ({ alignItems: align }));
}
function responsiveFlexGapStyle(props) {
	let { media, space } = getTheme_v2(props.theme);
	return _responsive(media, props.$gap, (gap) => ({ gap: gap ? rem(space[gap]) : void 0 }));
}
function responsiveFlexWrapStyle(props) {
	let { media } = getTheme_v2(props.theme);
	return _responsive(media, props.$wrap, (wrap) => ({ flexWrap: wrap }));
}
function responsiveFlexJustifyStyle(props) {
	let { media } = getTheme_v2(props.theme);
	return _responsive(media, props.$justify, (justify) => ({ justifyContent: justify }));
}
function responsiveFlexDirectionStyle(props) {
	let { media } = getTheme_v2(props.theme);
	return _responsive(media, props.$direction, (direction) => ({ flexDirection: direction }));
}
var StyledFlex = /* @__PURE__ */ Mt(Box).withConfig({
	displayName: "StyledFlex",
	componentId: "sc-5lzqa2-0"
})(flexItemStyle, responsiveFlexStyle);
var Flex = (0, import_react.forwardRef)(function Flex(props, ref) {
	let $ = (0, import_dist.c)(27), align, as, gap, justify, restProps, t0, wrap;
	$[0] === props ? (align = $[1], as = $[2], gap = $[3], justify = $[4], restProps = $[5], t0 = $[6], wrap = $[7]) : ({align, as, direction: t0, gap, justify, wrap, ...restProps} = props, $[0] = props, $[1] = align, $[2] = as, $[3] = gap, $[4] = justify, $[5] = restProps, $[6] = t0, $[7] = wrap);
	let direction = t0 === void 0 ? "row" : t0, t1;
	$[8] === align ? t1 = $[9] : (t1 = _getArrayProp(align), $[8] = align, $[9] = t1);
	let t2;
	$[10] === direction ? t2 = $[11] : (t2 = _getArrayProp(direction), $[10] = direction, $[11] = t2);
	let t3;
	$[12] === gap ? t3 = $[13] : (t3 = _getArrayProp(gap), $[12] = gap, $[13] = t3);
	let t4;
	$[14] === justify ? t4 = $[15] : (t4 = _getArrayProp(justify), $[14] = justify, $[15] = t4);
	let t5;
	$[16] === wrap ? t5 = $[17] : (t5 = _getArrayProp(wrap), $[16] = wrap, $[17] = t5);
	let t6;
	return $[18] !== as || $[19] !== ref || $[20] !== restProps || $[21] !== t1 || $[22] !== t2 || $[23] !== t3 || $[24] !== t4 || $[25] !== t5 ? (t6 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledFlex, {
		"data-ui": "Flex",
		...restProps,
		$align: t1,
		$direction: t2,
		$gap: t3,
		$justify: t4,
		$wrap: t5,
		forwardedAs: as,
		ref
	}), $[18] = as, $[19] = ref, $[20] = restProps, $[21] = t1, $[22] = t2, $[23] = t3, $[24] = t4, $[25] = t5, $[26] = t6) : t6 = $[26], t6;
});
/**
* Get responsive text align styles.
* @internal
*/
function responsiveTextAlignStyle(props) {
	let { media } = getTheme_v2(props.theme);
	return _responsive(media, props.$align, (textAlign) => ({ textAlign }));
}
/**
* A utility function getting responsive font styles.
* @internal
*/
function responsiveFont(fontKey, props) {
	let { $size, $weight } = props, { font, media } = getTheme_v2(props.theme), { family, sizes, weights } = font[fontKey], fontWeight = $weight && weights[$weight] || weights.regular, defaultSize = sizes[2], base = {
		position: "relative",
		fontFamily: family,
		fontWeight: `${fontWeight}`,
		padding: "1px 0",
		margin: 0,
		"&:before": {
			content: "\"\"",
			display: "block",
			height: 0
		},
		"&:after": {
			content: "\"\"",
			display: "block",
			height: 0
		},
		"& > code, & > span": { display: "block" },
		"&:not([hidden])": { display: "block" }
	};
	return $size ? [base, ..._responsive(media, $size, (sizeIndex) => fontSize(sizes[sizeIndex] || defaultSize))] : (responsiveFont.warned ||= (console.warn("No size specified for responsive font", {
		fontKey,
		$size,
		props,
		base
	}), !0), [base]);
}
function fontSize(size) {
	let { ascenderHeight, descenderHeight, fontSize, iconSize, letterSpacing, lineHeight } = size, negHeight = ascenderHeight + descenderHeight, capHeight = lineHeight - negHeight, iconOffset = (capHeight - iconSize) / 2, customIconSize = Math.floor(fontSize * 1.125 / 2) * 2 + 1, customIconOffset = (capHeight - customIconSize) / 2;
	return {
		fontSize: rem(fontSize),
		lineHeight: `calc(${lineHeight} / ${fontSize})`,
		letterSpacing: rem(letterSpacing),
		transform: `translateY(${rem(descenderHeight)})`,
		"&:before": { marginTop: `calc(${rem(0 - negHeight)} - 1px)` },
		"&:after": { marginBottom: "-1px" },
		"& svg:not([data-sanity-icon])": {
			fontSize: `calc(${customIconSize} / 16 * 1rem)`,
			margin: rem(customIconOffset)
		},
		"& [data-sanity-icon]": {
			fontSize: `calc(${iconSize} / 16 * 1rem)`,
			margin: rem(iconOffset)
		}
	};
}
/**
* Get responsive CSS for the `text` font style.
* @internal
*/
function responsiveTextFont(props) {
	return responsiveFont("text", props);
}
/** @internal */
var SpanWithTextOverflow = Mt.span.withConfig({
	displayName: "SpanWithTextOverflow",
	componentId: "sc-xkyu3h-0"
})`display:block;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;overflow:clip;`;
function textBaseStyle(props) {
	let { $accent, $muted } = props, { font } = getTheme_v2(props.theme);
	return jt`color:var(--card-fg-color);${$accent && jt`color:var(--card-accent-fg-color);`} ${$muted && jt`color:var(--card-muted-fg-color);`} & code{font-family:${font.code.family};border-radius:1px;background-color:var(--card-code-bg-color);color:var(--card-code-fg-color);}& a{text-decoration:none;border-radius:1px;color:var(--card-link-color);outline:none;@media (hover:hover){&:hover{text-decoration:underline;}}&:focus{box-shadow:0 0 0 1px var(--card-bg-color),0 0 0 3px var(--card-focus-ring-color);}&:focus:not(:focus-visible){box-shadow:none;}}& strong{font-weight:${font.text.weights.bold};}& svg{display:inline;}& [data-sanity-icon]{vertical-align:baseline;color:var(--card-icon-color);& path{vector-effect:non-scaling-stroke !important;}}`;
}
var StyledText = /* @__PURE__ */ Mt.div.withConfig({
	displayName: "StyledText",
	componentId: "sc-m7q2yn-0"
})(responsiveTextFont, responsiveTextAlignStyle, textBaseStyle);
var Text = (0, import_react.forwardRef)(function Text(props, ref) {
	let $ = (0, import_dist.c)(26), align, childrenProp, restProps, t0, t1, t2, textOverflow, weight;
	$[0] === props ? (align = $[1], childrenProp = $[2], restProps = $[3], t0 = $[4], t1 = $[5], t2 = $[6], textOverflow = $[7], weight = $[8]) : ({accent: t0, align, children: childrenProp, muted: t1, size: t2, textOverflow, weight, ...restProps} = props, $[0] = props, $[1] = align, $[2] = childrenProp, $[3] = restProps, $[4] = t0, $[5] = t1, $[6] = t2, $[7] = textOverflow, $[8] = weight);
	let accent = t0 !== void 0 && t0, muted = t1 !== void 0 && t1, size = t2 === void 0 ? 2 : t2, children = childrenProp;
	if (textOverflow === "ellipsis") {
		let t3;
		$[9] === children ? t3 = $[10] : (t3 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpanWithTextOverflow, { children }), $[9] = children, $[10] = t3), children = t3;
	}
	let t3;
	$[11] === align ? t3 = $[12] : (t3 = _getArrayProp(align), $[11] = align, $[12] = t3);
	let t4;
	$[13] === size ? t4 = $[14] : (t4 = _getArrayProp(size), $[13] = size, $[14] = t4);
	let t5;
	$[15] === children ? t5 = $[16] : (t5 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children }), $[15] = children, $[16] = t5);
	let t6;
	return $[17] !== accent || $[18] !== muted || $[19] !== ref || $[20] !== restProps || $[21] !== t3 || $[22] !== t4 || $[23] !== t5 || $[24] !== weight ? (t6 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledText, {
		"data-ui": "Text",
		...restProps,
		$accent: accent,
		$align: t3,
		$muted: muted,
		ref,
		$size: t4,
		$weight: weight,
		children: t5
	}), $[17] = accent, $[18] = muted, $[19] = ref, $[20] = restProps, $[21] = t3, $[22] = t4, $[23] = t5, $[24] = weight, $[25] = t6) : t6 = $[25], t6;
});
var rotate = Ut`from{transform:rotate(0deg);}to{transform:rotate(360deg);}`;
var StyledSpinner = Mt(Text).withConfig({
	displayName: "StyledSpinner",
	componentId: "sc-k51eu1-0"
})`& > span > svg{animation:${rotate} 500ms linear infinite;}`;
var Spinner = (0, import_react.forwardRef)(function Spinner(props, ref) {
	let $ = (0, import_dist.c)(4), t0;
	$[0] === Symbol.for("react.memo_cache_sentinel") ? (t0 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpinnerIcon, {}), $[0] = t0) : t0 = $[0];
	let t1;
	return $[1] !== props || $[2] !== ref ? (t1 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledSpinner, {
		"data-ui": "Spinner",
		...props,
		ref,
		children: t0
	}), $[1] = props, $[2] = ref, $[3] = t1) : t1 = $[3], t1;
});
/**
* @internal
*/
function _cardColorStyle(base, color, checkered = !1) {
	return {
		"--card-backdrop-color": base.backdrop,
		"--card-focus-ring-color": base.focusRing,
		"--card-shadow-outline-color": base.shadow.outline,
		"--card-shadow-umbra-color": base.shadow.umbra,
		"--card-shadow-penumbra-color": base.shadow.penumbra,
		"--card-shadow-ambient-color": base.shadow.ambient,
		"--card-accent-fg-color": color.accent.fg,
		"--card-avatar-gray-bg-color": color.avatar.gray.bg,
		"--card-avatar-gray-fg-color": color.avatar.gray.fg,
		"--card-avatar-blue-bg-color": color.avatar.blue.bg,
		"--card-avatar-blue-fg-color": color.avatar.blue.fg,
		"--card-avatar-purple-bg-color": color.avatar.purple.bg,
		"--card-avatar-purple-fg-color": color.avatar.purple.fg,
		"--card-avatar-magenta-bg-color": color.avatar.magenta.bg,
		"--card-avatar-magenta-fg-color": color.avatar.magenta.fg,
		"--card-avatar-red-bg-color": color.avatar.red.bg,
		"--card-avatar-red-fg-color": color.avatar.red.fg,
		"--card-avatar-orange-bg-color": color.avatar.orange.bg,
		"--card-avatar-orange-fg-color": color.avatar.orange.fg,
		"--card-avatar-yellow-bg-color": color.avatar.yellow.bg,
		"--card-avatar-yellow-fg-color": color.avatar.yellow.fg,
		"--card-avatar-green-bg-color": color.avatar.green.bg,
		"--card-avatar-green-fg-color": color.avatar.green.fg,
		"--card-avatar-cyan-bg-color": color.avatar.cyan.bg,
		"--card-avatar-cyan-fg-color": color.avatar.cyan.fg,
		"--card-bg-color": color.bg,
		"--card-bg-image": checkered ? `repeating-conic-gradient(${color.bg} 0% 25%, ${color.muted.bg} 0% 50%)` : void 0,
		"--card-border-color": color.border,
		"--card-badge-default-bg-color": color.badge.default.bg,
		"--card-badge-default-dot-color": color.badge.default.dot,
		"--card-badge-default-fg-color": color.badge.default.fg,
		"--card-badge-default-icon-color": color.badge.default.icon,
		"--card-badge-neutral-bg-color": color.badge.neutral?.bg,
		"--card-badge-neutral-dot-color": color.badge.neutral?.dot,
		"--card-badge-neutral-fg-color": color.badge.neutral?.fg,
		"--card-badge-neutral-icon-color": color.badge.neutral?.icon,
		"--card-badge-primary-bg-color": color.badge.primary.bg,
		"--card-badge-primary-dot-color": color.badge.primary.dot,
		"--card-badge-primary-fg-color": color.badge.primary.fg,
		"--card-badge-primary-icon-color": color.badge.primary.icon,
		"--card-badge-suggest-bg-color": color.badge.suggest?.bg,
		"--card-badge-suggest-dot-color": color.badge.suggest?.dot,
		"--card-badge-suggest-fg-color": color.badge.suggest?.fg,
		"--card-badge-suggest-icon-color": color.badge.suggest?.icon,
		"--card-badge-positive-bg-color": color.badge.positive.bg,
		"--card-badge-positive-dot-color": color.badge.positive.dot,
		"--card-badge-positive-fg-color": color.badge.positive.fg,
		"--card-badge-positive-icon-color": color.badge.positive.icon,
		"--card-badge-caution-bg-color": color.badge.caution.bg,
		"--card-badge-caution-dot-color": color.badge.caution.dot,
		"--card-badge-caution-fg-color": color.badge.caution.fg,
		"--card-badge-caution-icon-color": color.badge.caution.icon,
		"--card-badge-critical-bg-color": color.badge.critical.bg,
		"--card-badge-critical-dot-color": color.badge.critical.dot,
		"--card-badge-critical-fg-color": color.badge.critical.fg,
		"--card-badge-critical-icon-color": color.badge.critical.icon,
		"--card-code-bg-color": color.code.bg,
		"--card-code-fg-color": color.code.fg,
		"--card-fg-color": color.fg,
		"--card-icon-color": color.icon,
		"--card-kbd-bg-color": color.kbd.bg,
		"--card-kbd-border-color": color.kbd.border,
		"--card-kbd-fg-color": color.kbd.fg,
		"--card-link-fg-color": color.link.fg,
		"--card-muted-bg-color": color.muted.bg,
		"--card-muted-fg-color": color.muted.fg,
		"--card-skeleton-color-from": color.skeleton.from,
		"--card-skeleton-color-to": color.skeleton.to,
		"--card-bg2-color": color.muted.bg,
		"--card-link-color": color.link.fg,
		"--card-hairline-soft-color": color.border,
		"--card-hairline-hard-color": color.border
	};
}
function focusRingBorderStyle(border) {
	return `inset 0 0 0 ${border.width}px ${border.color}`;
}
function focusRingStyle(opts) {
	let { base, border, focusRing } = opts, focusRingOutsetWidth = focusRing.offset + focusRing.width, focusRingInsetWidth = 0 - focusRing.offset, bgColor = base ? base.bg : "var(--card-bg-color)";
	return [
		focusRingInsetWidth > 0 && `inset 0 0 0 ${focusRingInsetWidth}px var(--card-focus-ring-color)`,
		border && focusRingBorderStyle(border),
		focusRingInsetWidth < 0 && `0 0 0 ${0 - focusRingInsetWidth}px ${bgColor}`,
		focusRingOutsetWidth > 0 && `0 0 0 ${focusRingOutsetWidth}px var(--card-focus-ring-color)`
	].filter(Boolean).join(",");
}
/**
* @internal
*/
function buttonBaseStyles(props) {
	let { $width } = props, { style } = getTheme_v2(props.theme);
	return jt`${style?.button};-webkit-font-smoothing:inherit;appearance:none;display:inline-flex;align-items:center;font:inherit;border:0;outline:none;user-select:none;text-decoration:none;border:0;box-sizing:border-box;padding:0;margin:0;white-space:nowrap;text-align:left;position:relative;vertical-align:top;${$width === "fill" && jt`width:-moz-available;width:-webkit-fill-available;width:stretch;`} & > span{display:block;flex:1;min-width:0;border-radius:inherit;}&::-moz-focus-inner{border:0;padding:0;}`;
}
function combineBoxShadow(...boxShadows) {
	return boxShadows.filter(Boolean).join(",");
}
/**
* @internal
*/
function buttonColorStyles(props) {
	let { $mode } = props, { button, color: baseColor, style } = getTheme_v2(props.theme);
	props.$mode;
	let mode = baseColor.button[$mode] || baseColor.button.default, color = mode[props.$tone] || mode.default, border = {
		width: button.border.width,
		color: "var(--card-border-color)"
	};
	return [
		_cardColorStyle(baseColor, color.enabled),
		{
			backgroundColor: "var(--card-bg-color)",
			color: "var(--card-fg-color)",
			boxShadow: focusRingBorderStyle(border),
			"&:disabled, &[data-disabled=\"true\"]": _cardColorStyle(baseColor, color.disabled),
			"&:not([data-disabled='true'])": {
				boxShadow: combineBoxShadow(focusRingBorderStyle(border), void 0),
				"&:focus": { boxShadow: focusRingStyle({
					base: baseColor,
					border: {
						width: 2,
						color: baseColor.bg
					},
					focusRing: button.focusRing
				}) },
				"&:focus:not(:focus-visible)": { boxShadow: combineBoxShadow(focusRingBorderStyle(border), void 0) },
				"@media (hover: hover)": {
					"&:hover": _cardColorStyle(baseColor, color.hovered),
					"&:active": _cardColorStyle(baseColor, color.pressed),
					"&[data-hovered]": _cardColorStyle(baseColor, color.hovered)
				},
				"&[data-selected]": _cardColorStyle(baseColor, color.pressed)
			}
		},
		style?.button?.root
	].filter(Boolean);
}
var StyledButton = /* @__PURE__ */ Mt.button.withConfig({
	displayName: "StyledButton",
	componentId: "sc-5eghxe-0"
})(responsiveRadiusStyle, buttonBaseStyles, buttonColorStyles);
var LoadingBox = Mt.div.withConfig({
	displayName: "LoadingBox",
	componentId: "sc-5eghxe-1"
})`position:absolute;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;background-color:var(--card-bg-color);border-radius:inherit;z-index:1;box-shadow:inherit;`;
var Button = (0, import_react.forwardRef)(function Button(props, ref) {
	let $ = (0, import_dist.c)(87), IconComponent, IconRightComponent, children, disabled, gap, loading, paddingBottomProp, paddingLeftProp, paddingRightProp, paddingTopProp, paddingXProp, paddingYProp, restProps, selected, t0, t1, t2, t3, t4, t5, t6, t7, t8, text, textAlign, textWeight, width;
	$[0] === props ? (IconComponent = $[1], IconRightComponent = $[2], children = $[3], disabled = $[4], gap = $[5], loading = $[6], paddingBottomProp = $[7], paddingLeftProp = $[8], paddingRightProp = $[9], paddingTopProp = $[10], paddingXProp = $[11], paddingYProp = $[12], restProps = $[13], selected = $[14], t0 = $[15], t1 = $[16], t2 = $[17], t3 = $[18], t4 = $[19], t5 = $[20], t6 = $[21], t7 = $[22], t8 = $[23], text = $[24], textAlign = $[25], textWeight = $[26], width = $[27]) : ({children, disabled, fontSize: t0, icon: IconComponent, iconRight: IconRightComponent, justify: t1, loading, mode: t2, padding: t3, paddingX: paddingXProp, paddingY: paddingYProp, paddingTop: paddingTopProp, paddingBottom: paddingBottomProp, paddingLeft: paddingLeftProp, paddingRight: paddingRightProp, radius: t4, selected, gap, space: t5, text, textAlign, textWeight, tone: t6, type: t7, muted: t8, width, ...restProps} = props, $[0] = props, $[1] = IconComponent, $[2] = IconRightComponent, $[3] = children, $[4] = disabled, $[5] = gap, $[6] = loading, $[7] = paddingBottomProp, $[8] = paddingLeftProp, $[9] = paddingRightProp, $[10] = paddingTopProp, $[11] = paddingXProp, $[12] = paddingYProp, $[13] = restProps, $[14] = selected, $[15] = t0, $[16] = t1, $[17] = t2, $[18] = t3, $[19] = t4, $[20] = t5, $[21] = t6, $[22] = t7, $[23] = t8, $[24] = text, $[25] = textAlign, $[26] = textWeight, $[27] = width);
	let fontSize = t0 === void 0 ? 1 : t0, justifyProp = t1 === void 0 ? "center" : t1, mode = t2 === void 0 ? "default" : t2, paddingProp = t3 === void 0 ? 3 : t3, radiusProp = t4 === void 0 ? 2 : t4, deprecated_space = t5 === void 0 ? 3 : t5, tone = t6 === void 0 ? "default" : t6, type = t7 === void 0 ? "button" : t7, muted = t8 !== void 0 && t8, { button } = useTheme_v2(), t9;
	$[28] === justifyProp ? t9 = $[29] : (t9 = _getArrayProp(justifyProp), $[28] = justifyProp, $[29] = t9);
	let justify = t9, t10;
	$[30] === paddingProp ? t10 = $[31] : (t10 = _getArrayProp(paddingProp), $[30] = paddingProp, $[31] = t10);
	let padding = t10, t11;
	$[32] === paddingXProp ? t11 = $[33] : (t11 = _getArrayProp(paddingXProp), $[32] = paddingXProp, $[33] = t11);
	let paddingX = t11, t12;
	$[34] === paddingYProp ? t12 = $[35] : (t12 = _getArrayProp(paddingYProp), $[34] = paddingYProp, $[35] = t12);
	let paddingY = t12, t13;
	$[36] === paddingTopProp ? t13 = $[37] : (t13 = _getArrayProp(paddingTopProp), $[36] = paddingTopProp, $[37] = t13);
	let paddingTop = t13, t14;
	$[38] === paddingBottomProp ? t14 = $[39] : (t14 = _getArrayProp(paddingBottomProp), $[38] = paddingBottomProp, $[39] = t14);
	let paddingBottom = t14, t15;
	$[40] === paddingLeftProp ? t15 = $[41] : (t15 = _getArrayProp(paddingLeftProp), $[40] = paddingLeftProp, $[41] = t15);
	let paddingLeft = t15, t16;
	$[42] === paddingRightProp ? t16 = $[43] : (t16 = _getArrayProp(paddingRightProp), $[42] = paddingRightProp, $[43] = t16);
	let paddingRight = t16, t17;
	$[44] === radiusProp ? t17 = $[45] : (t17 = _getArrayProp(radiusProp), $[44] = radiusProp, $[45] = t17);
	let radius = t17, t18 = gap === void 0 ? deprecated_space : gap, t19;
	$[46] === t18 ? t19 = $[47] : (t19 = _getArrayProp(t18), $[46] = t18, $[47] = t19);
	let spacing = t19, t20;
	$[48] !== padding || $[49] !== paddingBottom || $[50] !== paddingLeft || $[51] !== paddingRight || $[52] !== paddingTop || $[53] !== paddingX || $[54] !== paddingY ? (t20 = {
		padding,
		paddingX,
		paddingY,
		paddingTop,
		paddingBottom,
		paddingLeft,
		paddingRight
	}, $[48] = padding, $[49] = paddingBottom, $[50] = paddingLeft, $[51] = paddingRight, $[52] = paddingTop, $[53] = paddingX, $[54] = paddingY, $[55] = t20) : t20 = $[55];
	let boxProps = t20, t21 = !!(loading || disabled), t22 = selected ? "" : void 0, t23 = !!(loading || disabled), t24;
	$[56] === loading ? t24 = $[57] : (t24 = !!loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingBox, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spinner, {}) }), $[56] = loading, $[57] = t24);
	let t25;
	$[58] !== IconComponent || $[59] !== IconRightComponent || $[60] !== boxProps || $[61] !== button || $[62] !== fontSize || $[63] !== justify || $[64] !== muted || $[65] !== spacing || $[66] !== text || $[67] !== textAlign || $[68] !== textWeight ? (t25 = (IconComponent || text || IconRightComponent) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
		as: "span",
		...boxProps,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
			as: "span",
			justify,
			gap: spacing,
			children: [
				IconComponent && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
					size: fontSize,
					children: [(0, import_react.isValidElement)(IconComponent) && IconComponent, (0, import_react_is$1.isValidElementType)(IconComponent) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconComponent, {})]
				}),
				text && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
					muted,
					align: textAlign,
					size: fontSize,
					textOverflow: "ellipsis",
					weight: textWeight ?? button.textWeight,
					children: text
				}) }),
				IconRightComponent && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
					size: fontSize,
					children: [(0, import_react.isValidElement)(IconRightComponent) && IconRightComponent, (0, import_react_is$1.isValidElementType)(IconRightComponent) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconRightComponent, {})]
				})
			]
		})
	}), $[58] = IconComponent, $[59] = IconRightComponent, $[60] = boxProps, $[61] = button, $[62] = fontSize, $[63] = justify, $[64] = muted, $[65] = spacing, $[66] = text, $[67] = textAlign, $[68] = textWeight, $[69] = t25) : t25 = $[69];
	let t26;
	$[70] !== boxProps || $[71] !== children ? (t26 = children && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
		as: "span",
		...boxProps,
		children
	}), $[70] = boxProps, $[71] = children, $[72] = t26) : t26 = $[72];
	let t27;
	return $[73] !== mode || $[74] !== radius || $[75] !== ref || $[76] !== restProps || $[77] !== t21 || $[78] !== t22 || $[79] !== t23 || $[80] !== t24 || $[81] !== t25 || $[82] !== t26 || $[83] !== tone || $[84] !== type || $[85] !== width ? (t27 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StyledButton, {
		"data-ui": "Button",
		...restProps,
		$mode: mode,
		$radius: radius,
		$tone: tone,
		"data-disabled": t21,
		"data-selected": t22,
		disabled: t23,
		ref,
		type,
		$width: width,
		children: [
			t24,
			t25,
			t26
		]
	}), $[73] = mode, $[74] = radius, $[75] = ref, $[76] = restProps, $[77] = t21, $[78] = t22, $[79] = t23, $[80] = t24, $[81] = t25, $[82] = t26, $[83] = tone, $[84] = type, $[85] = width, $[86] = t27) : t27 = $[86], t27;
});
function responsiveBorderStyle() {
	return [
		border,
		borderTop,
		borderRight,
		borderBottom,
		borderLeft
	];
}
function border(props) {
	let { card, media } = getTheme_v2(props.theme), borderStyle = `${card.border?.width ?? 1}px solid var(--card-border-color)`;
	return _responsive(media, props.$border, (value) => value ? { "&&": { border: borderStyle } } : { "&&": { border: 0 } });
}
function borderTop(props) {
	let { card, media } = getTheme_v2(props.theme), borderStyle = `${card.border?.width ?? 1}px solid var(--card-border-color)`;
	return _responsive(media, props.$borderTop, (value) => value ? { "&&": { borderTop: borderStyle } } : { "&&": { borderTop: 0 } });
}
function borderRight(props) {
	let { card, media } = getTheme_v2(props.theme), borderStyle = `${card.border?.width ?? 1}px solid var(--card-border-color)`;
	return _responsive(media, props.$borderRight, (value) => value ? { "&&": { borderRight: borderStyle } } : { "&&": { borderRight: 0 } });
}
function borderBottom(props) {
	let { card, media } = getTheme_v2(props.theme), borderStyle = `${card.border?.width ?? 1}px solid var(--card-border-color)`;
	return _responsive(media, props.$borderBottom, (value) => value ? { "&&": { borderBottom: borderStyle } } : { "&&": { borderBottom: 0 } });
}
function borderLeft(props) {
	let { card, media } = getTheme_v2(props.theme), borderStyle = `${card.border?.width ?? 1}px solid var(--card-border-color)`;
	return _responsive(media, props.$borderLeft, (value) => value ? { "&&": { borderLeft: borderStyle } } : { "&&": { borderLeft: 0 } });
}
function toBoxShadow(shadow, color) {
	return `${shadow.map(rem).join(" ")} ${color}`;
}
function shadowStyle(shadow, outlineWidth = 1) {
	return shadow ? { boxShadow: `${`0 0 0 ${rem(outlineWidth)} var(--card-shadow-outline-color)`}, ${toBoxShadow(shadow.umbra, "var(--card-shadow-umbra-color)")}, ${toBoxShadow(shadow.penumbra, "var(--card-shadow-penumbra-color)")}, ${toBoxShadow(shadow.ambient, "var(--card-shadow-ambient-color)")}` } : EMPTY_RECORD;
}
function responsiveShadowStyle(props) {
	let { card, media, shadow } = getTheme_v2(props.theme);
	return _responsive(media, props.$shadow, (index) => shadowStyle(shadow[index], card.shadow.outline));
}
/**
* Gets the global scope instance in a given environment.
*
* The strategy is to return the most modern, and if not, the most common:
* - The `globalThis` variable is the modern approach to accessing the global scope
* - The `window` variable is the global scope in a web browser
* - The `self` variable is the global scope in workers and others
* - The `global` variable is the global scope in Node.js
*/
function getGlobalScope() {
	if (typeof globalThis < "u") return globalThis;
	if (typeof window < "u") return window;
	if (typeof self < "u") return self;
	if (typeof global < "u") return global;
	throw Error("@sanity/ui: could not locate global scope");
}
var globalScope = getGlobalScope();
/**
* As `@sanity/ui` is declared as a dependency, and may be duplicated, sometimes across major versions
* it's critical that vital react contexts are shared even when there is a duplicate.
* If we used a model similar to `sanity` itself, or `styled-components`, this would be unnecessary as
* those libraries enforce single instances.
* Since we don't enforce it we have to support a sanity plugin being able to call hooks like `useToast`, and then
* read the context setup by `sanity`, which calls `ToastProvider`, even if the provider and hook are different instances in memory.
* It's also why it's vital that all changes to globally scoped providers remain fully backwards compatible to v1.
*/
function createGlobalScopedContext(key, defaultValue) {
	let symbol = Symbol.for(key);
	/**
	* Prevent errors about re-renders on React SSR on Next.js App Router
	*/
	if (typeof document > "u") {
		let context = (0, import_react.createContext)(defaultValue);
		return context.displayName = key, context;
	}
	return globalScope[symbol] = globalScope[symbol] || (0, import_react.createContext)(defaultValue), globalScope[symbol];
}
/**
* @internal
*/
var ThemeContext = createGlobalScopedContext("@sanity/ui/context/theme", null);
/**
* @public
*/
function ThemeProvider$1(props) {
	let $ = (0, import_dist.c)(15), parentTheme = (0, import_react.useContext)(ThemeContext), { children } = props, scheme = props.scheme ?? (parentTheme?.scheme || "light"), rootTheme = props.theme ?? (parentTheme?.theme || null), tone = props.tone ?? (parentTheme?.tone || "default"), t0;
	bb0: {
		if (!rootTheme) {
			t0 = null;
			break bb0;
		}
		let t1;
		$[0] !== rootTheme || $[1] !== scheme || $[2] !== tone ? (t1 = {
			version: 0,
			theme: rootTheme,
			scheme,
			tone
		}, $[0] = rootTheme, $[1] = scheme, $[2] = tone, $[3] = t1) : t1 = $[3], t0 = t1;
	}
	let themeContext = t0, t1;
	bb1: {
		if (!rootTheme) {
			t1 = null;
			break bb1;
		}
		let t2;
		$[4] !== rootTheme || $[5] !== scheme || $[6] !== tone ? (t2 = getScopedTheme(rootTheme, scheme, tone), $[4] = rootTheme, $[5] = scheme, $[6] = tone, $[7] = t2) : t2 = $[7], t1 = t2;
	}
	let theme = t1;
	if (!theme) {
		let t2;
		return $[8] === Symbol.for("react.memo_cache_sentinel") ? (t2 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", { children: "ThemeProvider: no \"theme\" property provided" }), $[8] = t2) : t2 = $[8], t2;
	}
	let t2;
	$[9] !== children || $[10] !== theme ? (t2 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(St, {
		theme,
		children
	}), $[9] = children, $[10] = theme, $[11] = t2) : t2 = $[11];
	let t3;
	return $[12] !== t2 || $[13] !== themeContext ? (t3 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeContext.Provider, {
		value: themeContext,
		children: t2
	}), $[12] = t2, $[13] = themeContext, $[14] = t3) : t3 = $[14], t3;
}
/**
* @public
*/
function useRootTheme() {
	let value = (0, import_react.useContext)(ThemeContext);
	if (!value) throw Error("useRootTheme(): missing context value");
	return value;
}
/**
* @public
*/
function ThemeColorProvider(props) {
	let $ = (0, import_dist.c)(5), { children, scheme, tone } = props, root = useRootTheme(), t0 = scheme || root.scheme, t1;
	return $[0] !== children || $[1] !== root.theme || $[2] !== t0 || $[3] !== tone ? (t1 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeProvider$1, {
		scheme: t0,
		theme: root.theme,
		tone,
		children
	}), $[0] = children, $[1] = root.theme, $[2] = t0, $[3] = tone, $[4] = t1) : t1 = $[4], t1;
}
function cardStyle(props) {
	return [cardBaseStyle(props), cardColorStyle(props)];
}
function cardBaseStyle(props) {
	let { $checkered } = props, { space } = getTheme_v2(props.theme);
	return jt`${$checkered && jt`background-size:${space[3]}px ${space[3]}px;background-position:50% 50%;background-image:var(--card-bg-image);`} &[data-as='button']{-webkit-font-smoothing:inherit;appearance:none;outline:none;font:inherit;text-align:inherit;border:0;width:-moz-available;width:-webkit-fill-available;width:stretch;}&[data-as='a']{outline:none;text-decoration:none;}&[data-as='pre']{font:inherit;}`;
}
function cardColorStyle(props) {
	let { $checkered, $focusRing, $muted } = props, { card, color, style } = getTheme_v2(props.theme), border = {
		width: card.border.width,
		color: "var(--card-border-color)"
	};
	return jt`color-scheme:${color._dark ? "dark" : "light"};${_cardColorStyle(color, color, $checkered)} background-color:${$muted ? "var(--card-muted-bg-color)" : "var(--card-bg-color)"};color:var(--card-fg-color);&[data-as='button']{--card-focus-ring-box-shadow:none;cursor:default;box-shadow:var(--card-focus-ring-box-shadow);&:disabled{${_cardColorStyle(color, color.selectable.default.disabled, $checkered)}}&:not(:disabled){&[data-pressed]{${_cardColorStyle(color, color.selectable.default.pressed, $checkered)}}&[data-selected]{${_cardColorStyle(color, color.selectable.default.selected, $checkered)}}@media (hover:hover){&:not([data-pressed]):not([data-selected]){&[data-hovered],&:hover{${_cardColorStyle(color, color.selectable.default.hovered, $checkered)}}&:active{${_cardColorStyle(color, color.selectable.default.pressed, $checkered)}}}}&:focus-visible{--card-focus-ring-box-shadow:${$focusRing ? focusRingStyle({
		base: color,
		border,
		focusRing: card.focusRing
	}) : void 0};}}}&[data-as='a']{cursor:pointer;box-shadow:var(--card-focus-ring-box-shadow);&[data-disabled]{${_cardColorStyle(color, color.selectable.default.disabled, $checkered)}}&:not([data-disabled]){&[data-pressed]{${_cardColorStyle(color, color.selectable.default.pressed, $checkered)}}&[data-selected]{${_cardColorStyle(color, color.selectable.default.selected, $checkered)}}@media (hover:hover){&:not([data-pressed]):not([data-selected]){&[data-hovered],&:hover{${_cardColorStyle(color, color.selectable.default.hovered, $checkered)}}&:active{${_cardColorStyle(color, color.selectable.default.pressed, $checkered)}}}}&:focus-visible{--card-focus-ring-box-shadow:${$focusRing ? focusRingStyle({
		base: color,
		border,
		focusRing: card.focusRing
	}) : void 0};}}}${style?.card?.root}`;
}
var StyledCard = /* @__PURE__ */ Mt(Box).withConfig({
	displayName: "StyledCard",
	componentId: "sc-63y21e-0"
})(responsiveBorderStyle, responsiveRadiusStyle, responsiveShadowStyle, cardStyle);
var Card = (0, import_react.forwardRef)(function Card(props, ref) {
	let $ = (0, import_dist.c)(56), asProp, border, borderBottom, borderLeft, borderRight, borderTop, muted, pressed, restProps, scheme, selected, shadow, t0, t1, t2, t3;
	$[0] === props ? (asProp = $[1], border = $[2], borderBottom = $[3], borderLeft = $[4], borderRight = $[5], borderTop = $[6], muted = $[7], pressed = $[8], restProps = $[9], scheme = $[10], selected = $[11], shadow = $[12], t0 = $[13], t1 = $[14], t2 = $[15], t3 = $[16]) : ({__unstable_checkered: t0, __unstable_focusRing: t1, as: asProp, border, borderTop, borderRight, borderBottom, borderLeft, muted, pressed, radius: t2, scheme, selected, shadow, tone: t3, ...restProps} = props, $[0] = props, $[1] = asProp, $[2] = border, $[3] = borderBottom, $[4] = borderLeft, $[5] = borderRight, $[6] = borderTop, $[7] = muted, $[8] = pressed, $[9] = restProps, $[10] = scheme, $[11] = selected, $[12] = shadow, $[13] = t0, $[14] = t1, $[15] = t2, $[16] = t3);
	let checkered = t0 !== void 0 && t0, focusRing = t1 !== void 0 && t1, radius = t2 === void 0 ? 0 : t2, toneProp = t3 === void 0 ? "default" : t3, as = (0, import_react_is$1.isValidElementType)(asProp) ? asProp : "div", rootTheme = useRootTheme(), tone = toneProp === "inherit" ? rootTheme.tone : toneProp, t4 = typeof as == "string" ? as : void 0, t5 = rootTheme.scheme, t6;
	$[17] === border ? t6 = $[18] : (t6 = _getArrayProp(border), $[17] = border, $[18] = t6);
	let t7;
	$[19] === borderTop ? t7 = $[20] : (t7 = _getArrayProp(borderTop), $[19] = borderTop, $[20] = t7);
	let t8;
	$[21] === borderRight ? t8 = $[22] : (t8 = _getArrayProp(borderRight), $[21] = borderRight, $[22] = t8);
	let t9;
	$[23] === borderBottom ? t9 = $[24] : (t9 = _getArrayProp(borderBottom), $[23] = borderBottom, $[24] = t9);
	let t10;
	$[25] === borderLeft ? t10 = $[26] : (t10 = _getArrayProp(borderLeft), $[25] = borderLeft, $[26] = t10);
	let t11 = muted ?? !1, t12;
	$[27] === radius ? t12 = $[28] : (t12 = _getArrayProp(radius), $[27] = radius, $[28] = t12);
	let t13;
	$[29] === shadow ? t13 = $[30] : (t13 = _getArrayProp(shadow), $[29] = shadow, $[30] = t13);
	let t14 = checkered ? "" : void 0, t15 = pressed ? "" : void 0, t16 = selected ? "" : void 0, t17;
	$[31] !== as || $[32] !== checkered || $[33] !== focusRing || $[34] !== ref || $[35] !== restProps || $[36] !== rootTheme.scheme || $[37] !== selected || $[38] !== t10 || $[39] !== t11 || $[40] !== t12 || $[41] !== t13 || $[42] !== t14 || $[43] !== t15 || $[44] !== t16 || $[45] !== t4 || $[46] !== t6 || $[47] !== t7 || $[48] !== t8 || $[49] !== t9 || $[50] !== tone ? (t17 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledCard, {
		"data-as": t4,
		"data-scheme": t5,
		"data-ui": "Card",
		"data-tone": tone,
		...restProps,
		$border: t6,
		$borderTop: t7,
		$borderRight: t8,
		$borderBottom: t9,
		$borderLeft: t10,
		$checkered: checkered,
		$focusRing: focusRing,
		$muted: t11,
		$radius: t12,
		$shadow: t13,
		$tone: tone,
		"data-checkered": t14,
		"data-pressed": t15,
		"data-selected": t16,
		forwardedAs: as,
		ref,
		selected
	}), $[31] = as, $[32] = checkered, $[33] = focusRing, $[34] = ref, $[35] = restProps, $[36] = rootTheme.scheme, $[37] = selected, $[38] = t10, $[39] = t11, $[40] = t12, $[41] = t13, $[42] = t14, $[43] = t15, $[44] = t16, $[45] = t4, $[46] = t6, $[47] = t7, $[48] = t8, $[49] = t9, $[50] = tone, $[51] = t17) : t17 = $[51];
	let t18;
	return $[52] !== scheme || $[53] !== t17 || $[54] !== tone ? (t18 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeColorProvider, {
		scheme,
		tone,
		children: t17
	}), $[52] = scheme, $[53] = t17, $[54] = tone, $[55] = t18) : t18 = $[55], t18;
});
var _ResizeObserver = typeof document < "u" && typeof window < "u" && window.ResizeObserver ? window.ResizeObserver : ResizeObserver$1;
var _elementSizeObserver = _createElementSizeObserver();
function _createElementRectValueListener() {
	return { subscribe(element, subscriber) {
		let resizeObserver = new _ResizeObserver(([entry]) => {
			subscriber({
				_contentRect: entry.contentRect,
				border: {
					width: entry.borderBoxSize[0].inlineSize,
					height: entry.borderBoxSize[0].blockSize
				},
				content: {
					width: entry.contentRect.width,
					height: entry.contentRect.height
				}
			});
		});
		return resizeObserver.observe(element), () => {
			resizeObserver.unobserve(element), resizeObserver.disconnect();
		};
	} };
}
function _createElementSizeObserver() {
	let disposeCache = /* @__PURE__ */ new WeakMap(), subscribersCache = /* @__PURE__ */ new WeakMap();
	return { subscribe(element, subscriber) {
		let subscribers = subscribersCache.get(element) || [], dispose = disposeCache.get(element);
		return subscribersCache.has(element) || (subscribersCache.set(element, subscribers), dispose = _createElementRectValueListener().subscribe(element, (elementRect) => {
			for (let sub of subscribers) sub(elementRect);
		})), subscribers.push(subscriber), () => {
			let idx = subscribers.indexOf(subscriber);
			idx > -1 && subscribers.splice(idx, 1), subscribers.length === 0 && dispose && dispose();
		};
	} };
}
/**
* Subscribe to the size of a DOM element.
* @beta
*/
function useElementSize(element) {
	let $ = (0, import_dist.c)(3), [size, setSize] = (0, import_react.useState)(null), t0, t1;
	return $[0] === element ? (t0 = $[1], t1 = $[2]) : (t0 = () => {
		if (element) return _elementSizeObserver.subscribe(element, setSize);
	}, t1 = [element], $[0] = element, $[1] = t0, $[2] = t1), (0, import_react.useEffect)(t0, t1), size;
}
function _getMediaQuery(media, index) {
	return index === 0 ? `screen and (max-width: ${media[index] - 1}px)` : index === media.length ? `screen and (min-width: ${media[index - 1]}px)` : `screen and (min-width: ${media[index - 1]}px) and (max-width: ${media[index] - 1}px)`;
}
function _createMediaStore(media) {
	let mediaLen = media.length, sizes, getSizes = () => {
		if (!sizes) {
			sizes = [];
			for (let index = mediaLen; index > -1; --index) {
				let mediaQuery = _getMediaQuery(media, index);
				sizes.push({
					index,
					mq: window.matchMedia(mediaQuery)
				});
			}
		}
		return sizes;
	}, getSnapshot = () => {
		for (let { index, mq } of getSizes()) if (mq.matches) return index;
		return 0;
	}, subscribe = (onStoreChange) => {
		let disposeFns = [];
		for (let { mq } of getSizes()) {
			let handleChange = () => {
				mq.matches && onStoreChange();
			};
			mq.addEventListener("change", handleChange), disposeFns.push(() => mq.removeEventListener("change", handleChange));
		}
		return () => {
			for (let disposeFn of disposeFns) disposeFn();
		};
	};
	return {
		getSnapshot,
		subscribe
	};
}
/**
* Only called during server-side rendering, and hydration if using hydrateRoot
* Since the server environment doesn't have access to the DOM, we can't determine the current value of the media query
* and we assume `(prefers-color-scheme: light)` since it's the most common scheme
*
* @link https://beta.reactjs.org/apis/react/useSyncExternalStore#adding-support-for-server-rendering
*/
function getServerSnapshot() {
	return 0;
}
/**
* This API might change. DO NOT USE IN PRODUCTION.
* @beta
*/
function useMediaIndex() {
	let $ = (0, import_dist.c)(2), { media } = useTheme_v2(), t0;
	$[0] === media ? t0 = $[1] : (t0 = _createMediaStore(media), $[0] = media, $[1] = t0);
	let store = t0;
	return (0, import_react.useSyncExternalStore)(store.subscribe, store.getSnapshot, getServerSnapshot);
}
/**
* Efficiently subscribes to `window.matchMedia` queries
*
* @param getServerSnapshot - Only called during server-side rendering, and hydration if using hydrateRoot. Required if the hook is called during SSR (https://react.dev/reference/react/useSyncExternalStore#adding-support-for-server-rendering)
*
* @public
*/
function useMatchMedia(mediaQueryString, getServerSnapshot) {
	let $ = (0, import_dist.c)(4);
	(0, import_react.useDebugValue)(mediaQueryString);
	let t0;
	$[0] === mediaQueryString ? t0 = $[1] : (t0 = (onStoreChange) => {
		let media = window.matchMedia(mediaQueryString);
		return media.addEventListener("change", onStoreChange), () => media.removeEventListener("change", onStoreChange);
	}, $[0] = mediaQueryString, $[1] = t0);
	let t1;
	return $[2] === mediaQueryString ? t1 = $[3] : (t1 = () => window.matchMedia(mediaQueryString).matches, $[2] = mediaQueryString, $[3] = t1), (0, import_react.useSyncExternalStore)(t0, t1, getServerSnapshot);
}
/**
* Returns true if motion should be reduced
*
* @param getServerSnapshot - Only called during server-side rendering, and hydration if using hydrateRoot. Since the server environment doesn't have access to the DOM, we can't determine the current value of the media query and we assume `(prefers-reduced-motion: no-preference)` since it's the most common scheme (https://react.dev/reference/react/useSyncExternalStore#adding-support-for-server-rendering)
*
* If you persist the detected preference in a cookie or a header then you may implement your own server snapshot to read it.
* Chrome supports reading the `prefers-reduced-motion` media query from a header if the server response: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-Prefers-Reduced-Motion
* @example https://gist.github.com/stipsan/0c0f839a27842249cada893e9fb7767b
*
* @public
*/
function usePrefersReducedMotion(t0) {
	return useMatchMedia("(prefers-reduced-motion: reduce)", t0 === void 0 ? _temp$8 : t0);
}
function _temp$8() {
	return !1;
}
/**
* Custom floating-ui middleware which calculates transform-origin X + Y offsets
* based on the current floating rect's dimensions and shift offset.
*
* Scaling popovers with these transform-origin offsets will give the effect of
* popvers slightly 'growing' from the origin/reference element.
*
* This middleware must be applied after both `@sanity/ui/size` and `shift` middlewares.
*/
var origin = {
	name: "@sanity/ui/origin",
	fn({ middlewareData, placement, rects }) {
		let [side] = placement.split("-"), floatingWidth = rects.floating.width, floatingHeight = rects.floating.height, shiftX = middlewareData.shift?.x || 0, shiftY = middlewareData.shift?.y || 0;
		if (floatingWidth <= 0 || floatingHeight <= 0) return {};
		let { originX, originY } = ["bottom", "top"].includes(side) ? {
			originX: clamp(.5 - shiftX / floatingWidth, 0, 1),
			originY: side === "bottom" ? 0 : 1
		} : {
			originX: +(side === "left"),
			originY: clamp(.5 - shiftY / floatingHeight, 0, 1)
		};
		return { data: {
			originX,
			originY
		} };
	}
};
function clamp(num, min, max) {
	return Math.min(Math.max(num, min), max);
}
function isRecord$1(value) {
	return !!(value && typeof value == "object" && !Array.isArray(value));
}
var BoundaryElementContext = createGlobalScopedContext("@sanity/ui/context/boundaryElement", null);
var DEFAULT_VALUE = {
	version: 0,
	element: null
};
/**
* @public
*/
function useBoundaryElement() {
	let value = (0, import_react.useContext)(BoundaryElementContext);
	if (value && (!isRecord$1(value) || value.version !== 0)) throw Error("useBoundaryElement(): the context value is not compatible");
	return value || DEFAULT_VALUE;
}
function getElementRef(element) {
	let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get, mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	return mayWarn ? element.ref : (getter = Object.getOwnPropertyDescriptor(element, "ref")?.get, mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning, mayWarn ? element.props.ref : element.props.ref || element.ref);
}
function getLayerContext(contextValue) {
	if (!isRecord$1(contextValue) || contextValue.version !== 0) throw Error("the context value is not compatible");
	if (!contextValue) throw Error("components using `useLayer()` should be wrapped in a <LayerProvider>.");
	if (contextValue.version === 0) return contextValue;
	throw Error("could not get layer context");
}
var LayerContext = createGlobalScopedContext("@sanity/ui/context/layer", null);
/**
* @public
*/
function LayerProvider(props) {
	let $ = (0, import_dist.c)(21), { children, zOffset: t0 } = props, zOffsetProp = t0 === void 0 ? 0 : t0, parentContextValue = (0, import_react.useContext)(LayerContext), t1;
	$[0] === parentContextValue ? t1 = $[1] : (t1 = parentContextValue && getLayerContext(parentContextValue), $[0] = parentContextValue, $[1] = t1);
	let parent = t1, parentRegisterChild = parent?.registerChild, level = (parent?.level ?? 0) + 1, t2;
	$[2] === zOffsetProp ? t2 = $[3] : (t2 = _getArrayProp(zOffsetProp), $[2] = zOffsetProp, $[3] = t2);
	let zOffset = t2, maxMediaIndex = zOffset.length - 1, mediaIndex = Math.min(useMediaIndex(), maxMediaIndex), zIndex = parent ? parent.zIndex + zOffset[mediaIndex] : zOffset[mediaIndex], t3;
	$[4] === Symbol.for("react.memo_cache_sentinel") ? (t3 = {}, $[4] = t3) : t3 = $[4];
	let [, setChildLayers] = (0, import_react.useState)(t3), [size, setSize] = (0, import_react.useState)(0), isTopLayer = size === 0, t4;
	$[5] !== parentRegisterChild || $[6] !== setChildLayers ? (t4 = (childLevel) => {
		let parentDispose = parentRegisterChild?.(childLevel);
		return childLevel === void 0 ? setSize(_temp$7) : setChildLayers((state) => {
			let prevLen = state[childLevel] ?? 0, nextState = {
				...state,
				[childLevel]: prevLen + 1
			};
			return setSize(Object.keys(nextState).length), nextState;
		}), () => {
			childLevel === void 0 ? setSize(_temp2$2) : setChildLayers((state_0) => {
				let nextState_0 = { ...state_0 };
				return nextState_0[childLevel] === 1 ? (delete nextState_0[childLevel], setSize(Object.keys(nextState_0).length)) : nextState_0[childLevel] = nextState_0[childLevel] - 1, nextState_0;
			}), parentDispose?.();
		};
	}, $[5] = parentRegisterChild, $[6] = setChildLayers, $[7] = t4) : t4 = $[7];
	let registerChild = t4, t5, t6;
	$[8] !== level || $[9] !== parentRegisterChild ? (t5 = () => parentRegisterChild?.(level), t6 = [level, parentRegisterChild], $[8] = level, $[9] = parentRegisterChild, $[10] = t5, $[11] = t6) : (t5 = $[10], t6 = $[11]), (0, import_react.useEffect)(t5, t6);
	let t7;
	$[12] !== isTopLayer || $[13] !== level || $[14] !== registerChild || $[15] !== size || $[16] !== zIndex ? (t7 = {
		version: 0,
		isTopLayer,
		level,
		registerChild,
		size,
		zIndex
	}, $[12] = isTopLayer, $[13] = level, $[14] = registerChild, $[15] = size, $[16] = zIndex, $[17] = t7) : t7 = $[17];
	let value = t7, t8;
	return $[18] !== children || $[19] !== value ? (t8 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayerContext.Provider, {
		value,
		children
	}), $[18] = children, $[19] = value, $[20] = t8) : t8 = $[20], t8;
}
function _temp2$2(v_0) {
	return v_0 - 1;
}
function _temp$7(v) {
	return v + 1;
}
/**
* @public
*/
function useLayer() {
	let $ = (0, import_dist.c)(2), value = (0, import_react.useContext)(LayerContext);
	if (!value) throw Error("useLayer(): missing context value");
	try {
		let t1;
		return $[0] === value ? t1 = $[1] : (t1 = getLayerContext(value), $[0] = value, $[1] = t1), t1;
	} catch (t0) {
		let err = t0;
		throw err instanceof Error ? Error(`useLayer(): ${err.message}`) : Error(`useLayer(): ${err}`);
	}
}
var key = "@sanity/ui/context/portal";
var elementKey = Symbol.for(`${key}/element`);
globalScope[elementKey] = null;
var PortalContext = createGlobalScopedContext(key, {
	version: 0,
	boundaryElement: null,
	get element() {
		return typeof document > "u" ? null : globalScope[elementKey] ? globalScope[elementKey] : (globalScope[elementKey] = document.createElement("div"), globalScope[elementKey].setAttribute("data-portal", ""), document.body.appendChild(globalScope[elementKey]), globalScope[elementKey]);
	}
});
/**
* @public
*/
function usePortal() {
	let value = (0, import_react.useContext)(PortalContext);
	if (!value) throw Error("usePortal(): missing context value");
	if (!isRecord$1(value) || value.version !== 0) throw Error("usePortal(): the context value is not compatible");
	return value;
}
/**
* @public
*/
function Portal(props) {
	let $ = (0, import_dist.c)(3), { children, __unstable_name: name } = props, portal = usePortal(), portalElement = (name ? portal.elements && portal.elements[name] : portal.element) || portal.elements?.default;
	if (!portalElement) return null;
	let t0;
	return $[0] !== children || $[1] !== portalElement ? (t0 = (0, import_react_dom.createPortal)(children, portalElement), $[0] = children, $[1] = portalElement, $[2] = t0) : t0 = $[2], t0;
}
var DEFAULT_POPOVER_MARGINS = [
	0,
	0,
	0,
	0
];
var DEFAULT_FALLBACK_PLACEMENTS$1 = {
	top: [
		"bottom",
		"left",
		"right"
	],
	"top-start": [
		"bottom-start",
		"left-start",
		"right-start"
	],
	"top-end": [
		"bottom-end",
		"left-end",
		"right-end"
	],
	bottom: [
		"top",
		"left",
		"right"
	],
	"bottom-start": [
		"top-start",
		"left-start",
		"right-start"
	],
	"bottom-end": [
		"top-end",
		"left-end",
		"right-end"
	],
	left: [
		"right",
		"top",
		"bottom"
	],
	"left-start": [
		"right-start",
		"top-start",
		"bottom-start"
	],
	"left-end": [
		"right-end",
		"top-end",
		"bottom-end"
	],
	right: [
		"left",
		"top",
		"bottom"
	],
	"right-start": [
		"left-start",
		"top-start",
		"bottom-start"
	],
	"right-end": [
		"left-end",
		"top-end",
		"bottom-end"
	]
};
function size(options) {
	let { constrainSize, margins, matchReferenceWidth, maxWidthRef, padding = 0, referenceWidthRef, setReferenceWidth, widthRef } = options;
	return {
		name: "@sanity/ui/size",
		async fn(args) {
			let { elements, placement, platform, rects } = args, { floating, reference } = rects, overflow = await detectOverflow(args, {
				altBoundary: !0,
				boundary: options.boundaryElement || void 0,
				elementContext: "floating",
				padding,
				rootBoundary: "viewport"
			}), maxWidth = Infinity, maxHeight = Infinity, floatingW = floating.width, floatingH = floating.height;
			placement.includes("top") && (maxWidth = floatingW - (overflow.left + overflow.right), maxHeight = floatingH - overflow.top), placement.includes("right") && (maxWidth = floatingW - overflow.right, maxHeight = floatingH - (overflow.top + overflow.bottom)), placement.includes("bottom") && (maxWidth = floatingW - (overflow.left + overflow.right), maxHeight = floatingH - overflow.bottom), placement.includes("left") && (maxWidth = floatingW - overflow.left, maxHeight = floatingH - (overflow.top + overflow.bottom));
			let availableWidth = maxWidth - margins[1] - margins[3], availableHeight = maxHeight - margins[0] - margins[2], referenceWidth = reference.width - margins[1] - margins[3];
			referenceWidthRef.current = referenceWidth, setReferenceWidth(referenceWidth), matchReferenceWidth ? elements.floating.style.width = `${referenceWidth}px` : widthRef.current !== void 0 && (elements.floating.style.width = `${widthRef.current}px`), constrainSize && (elements.floating.style.maxWidth = `${Math.min(availableWidth, maxWidthRef.current ?? Infinity)}px`, elements.floating.style.maxHeight = `${availableHeight}px`);
			let nextDimensions = await platform.getDimensions(elements.floating), targetH = nextDimensions.height;
			return floatingW !== nextDimensions.width || floatingH !== targetH ? { reset: { rects: !0 } } : {};
		}
	};
}
function calcCurrentWidth(params) {
	let { container, mediaIndex, width } = params, w = width[mediaIndex], currentWidth = w === void 0 ? width[width.length - 1] : w;
	return typeof currentWidth == "number" ? container[currentWidth] : void 0;
}
function calcMaxWidth(params) {
	let { boundaryWidth, currentWidth } = params;
	if (currentWidth !== void 0 || boundaryWidth !== void 0) return Math.min(currentWidth ?? Infinity, (boundaryWidth || Infinity) - 8);
}
function moveTowardsLength(movingPoint, targetPoint, amount) {
	let width = targetPoint.x - movingPoint.x, height = targetPoint.y - movingPoint.y, distance = Math.sqrt(width * width + height * height);
	return moveTowardsFractional(movingPoint, targetPoint, Math.min(1, amount / distance));
}
function moveTowardsFractional(movingPoint, targetPoint, fraction) {
	return {
		x: movingPoint.x + (targetPoint.x - movingPoint.x) * fraction,
		y: movingPoint.y + (targetPoint.y - movingPoint.y) * fraction
	};
}
function getRoundedCommands(points) {
	let len = points.length, cmds = [];
	for (let i = 0; i < len; i += 1) {
		let point = points[i], prevPoint = points[i - 1], nextPoint = points[i + 1];
		if (prevPoint && point.radius) {
			let curveStart = moveTowardsLength(point, prevPoint, point.radius), curveEnd = moveTowardsLength(point, nextPoint, point.radius), startControl = moveTowardsFractional(curveStart, point, .5), endControl = moveTowardsFractional(point, curveEnd, .5);
			cmds.push({
				type: "point",
				...curveStart
			}), cmds.push({
				type: "curve",
				curveEnd,
				startControl,
				endControl
			});
		} else cmds.push({
			type: "point",
			...point
		});
	}
	return cmds;
}
function compileCommands(cmds) {
	return cmds.map((n, idx) => n.type === "point" ? `${idx === 0 ? "M" : "L"} ${n.x} ${n.y}` : n.type === "curve" ? `C ${n.startControl.x} ${n.startControl.y} ${n.endControl.x} ${n.endControl.y} ${n.curveEnd.x} ${n.curveEnd.y}` : "").join(" ");
}
var StyledArrow = /* @__PURE__ */ Mt.div.withConfig({
	displayName: "StyledArrow",
	componentId: "sc-ivw6of-0"
})(({ $w: w }) => jt`position:absolute;width:${w}px;height:${w}px;:empty + &{display:none;}& > svg{display:block;line-height:0;transform-origin:${w / 2}px ${w / 2}px;}[data-placement^='top'] > &{bottom:-${w}px;& > svg{transform:rotate(0);}}[data-placement^='right'] > &{left:-${w}px;& > svg{transform:rotate(90deg);}}[data-placement^='left'] > &{right:-${w}px;& > svg{transform:rotate(-90deg);}}[data-placement^='bottom'] > &{top:-${w}px;& > svg{transform:rotate(180deg);}}`);
var StrokePath = Mt.path.withConfig({
	displayName: "StrokePath",
	componentId: "sc-ivw6of-1"
})`stroke:var(--card-shadow-outline-color);`;
var ShapePath = Mt.path.withConfig({
	displayName: "ShapePath",
	componentId: "sc-ivw6of-2"
})`fill:var(--card-bg-color);`;
var Arrow = (0, import_react.forwardRef)(function Arrow(props, ref) {
	let $ = (0, import_dist.c)(29), h, restProps, t0, w;
	$[0] === props ? (h = $[1], restProps = $[2], t0 = $[3], w = $[4]) : ({width: w, height: h, radius: t0, ...restProps} = props, $[0] = props, $[1] = h, $[2] = restProps, $[3] = t0, $[4] = w);
	let radius = t0 === void 0 ? 0 : t0, { card } = useTheme_v2(), strokeWidth = card.shadow.outline, center = w / 2, t1;
	$[5] !== center || $[6] !== h || $[7] !== radius || $[8] !== w ? (t1 = compileCommands(getRoundedCommands([
		{
			x: 0,
			y: 0
		},
		{
			x: radius,
			y: 0,
			radius
		},
		{
			x: center,
			y: h - 1,
			radius
		},
		{
			x: w - radius,
			y: 0,
			radius
		},
		{
			x: w,
			y: 0
		}
	])), $[5] = center, $[6] = h, $[7] = radius, $[8] = w, $[9] = t1) : t1 = $[9];
	let path = t1, strokePath = `${path}`, fillPath = `${path} M ${w} -1 M 0 -1 Z`, t2 = `0 0 ${w} ${w}`, t3;
	$[10] !== strokeWidth || $[11] !== w ? (t3 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mask", {
		id: "stroke-mask",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: 0,
			y: strokeWidth,
			width: w,
			height: w,
			fill: "white"
		})
	}), $[10] = strokeWidth, $[11] = w, $[12] = t3) : t3 = $[12];
	let t4 = strokeWidth * 2, t5;
	$[13] !== strokePath || $[14] !== t4 ? (t5 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StrokePath, {
		d: strokePath,
		mask: "url(#stroke-mask)",
		strokeWidth: t4
	}), $[13] = strokePath, $[14] = t4, $[15] = t5) : t5 = $[15];
	let t6;
	$[16] === fillPath ? t6 = $[17] : (t6 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShapePath, { d: fillPath }), $[16] = fillPath, $[17] = t6);
	let t7;
	$[18] !== t2 || $[19] !== t3 || $[20] !== t5 || $[21] !== t6 || $[22] !== w ? (t7 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		width: w,
		height: w,
		viewBox: t2,
		children: [
			t3,
			t5,
			t6
		]
	}), $[18] = t2, $[19] = t3, $[20] = t5, $[21] = t6, $[22] = w, $[23] = t7) : t7 = $[23];
	let t8;
	return $[24] !== ref || $[25] !== restProps || $[26] !== t7 || $[27] !== w ? (t8 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledArrow, {
		...restProps,
		$w: w,
		ref,
		children: t7
	}), $[24] = ref, $[25] = restProps, $[26] = t7, $[27] = w, $[28] = t8) : t8 = $[28], t8;
});
var MotionCard$1 = Mt(motion.create(Card)).withConfig({
	displayName: "MotionCard",
	componentId: "sc-uyh6zp-0"
})`&:not([hidden]){display:flex;}flex-direction:column;width:max-content;min-width:min-content;will-change:transform;`;
var MotionFlex = Mt(motion.create(Flex)).withConfig({
	displayName: "MotionFlex",
	componentId: "sc-uyh6zp-1"
})`will-change:opacity;`;
var PopoverCard = (0, import_react.forwardRef)(function PopoverCard(props, ref) {
	let $ = (0, import_dist.c)(66), animate, arrow, arrowRef, arrowX, arrowY, children, marginsProp, originX, originY, overflow, padding, placement, radius, restProps, scheme, shadow, strategy, style, tone, width, xProp, yProp;
	$[0] === props ? (animate = $[1], arrow = $[2], arrowRef = $[3], arrowX = $[4], arrowY = $[5], children = $[6], marginsProp = $[7], originX = $[8], originY = $[9], overflow = $[10], padding = $[11], placement = $[12], radius = $[13], restProps = $[14], scheme = $[15], shadow = $[16], strategy = $[17], style = $[18], tone = $[19], width = $[20], xProp = $[21], yProp = $[22]) : ({__unstable_margins: marginsProp, animate, arrow, arrowRef, arrowX, arrowY, children, padding, placement, originX, originY, overflow, radius, scheme, shadow, strategy, style, tone, width, x: xProp, y: yProp, ...restProps} = props, $[0] = props, $[1] = animate, $[2] = arrow, $[3] = arrowRef, $[4] = arrowX, $[5] = arrowY, $[6] = children, $[7] = marginsProp, $[8] = originX, $[9] = originY, $[10] = overflow, $[11] = padding, $[12] = placement, $[13] = radius, $[14] = restProps, $[15] = scheme, $[16] = shadow, $[17] = strategy, $[18] = style, $[19] = tone, $[20] = width, $[21] = xProp, $[22] = yProp);
	let { zIndex } = useLayer(), margins = marginsProp || DEFAULT_POPOVER_MARGINS, x = (xProp ?? 0) + margins[3], y = (yProp ?? 0) + margins[0], t0 = animate ? "transform" : void 0, t1;
	$[23] !== originX || $[24] !== originY || $[25] !== strategy || $[26] !== style || $[27] !== t0 || $[28] !== width || $[29] !== x || $[30] !== y || $[31] !== zIndex ? (t1 = {
		left: x,
		originX,
		originY,
		position: strategy,
		top: y,
		width,
		zIndex,
		willChange: t0,
		...style
	}, $[23] = originX, $[24] = originY, $[25] = strategy, $[26] = style, $[27] = t0, $[28] = width, $[29] = x, $[30] = y, $[31] = zIndex, $[32] = t1) : t1 = $[32];
	let rootStyle = t1, t2 = arrowX === null ? void 0 : arrowX, t3 = arrowY === null ? void 0 : arrowY, t4;
	$[33] !== t2 || $[34] !== t3 ? (t4 = {
		left: t2,
		top: t3,
		right: void 0,
		bottom: void 0
	}, $[33] = t2, $[34] = t3, $[35] = t4) : t4 = $[35];
	let arrowStyle = t4, t5;
	$[36] === animate ? t5 = $[37] : (t5 = animate ? ["hidden", "initial"] : void 0, $[36] = animate, $[37] = t5);
	let t6;
	$[38] === animate ? t6 = $[39] : (t6 = animate ? ["visible", "scaleIn"] : void 0, $[38] = animate, $[39] = t6);
	let t7;
	$[40] === animate ? t7 = $[41] : (t7 = animate ? ["hidden", "scaleOut"] : void 0, $[40] = animate, $[41] = t7);
	let t8;
	$[42] !== children || $[43] !== padding ? (t8 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flex, {
		direction: "column",
		flex: 1,
		padding,
		children
	}), $[42] = children, $[43] = padding, $[44] = t8) : t8 = $[44];
	let t9;
	$[45] !== overflow || $[46] !== t8 ? (t9 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MotionFlex, {
		"data-ui": "Popover__wrapper",
		direction: "column",
		flex: 1,
		overflow,
		variants: POPOVER_MOTION_PROPS.children,
		transition: POPOVER_MOTION_PROPS.transition,
		children: t8
	}), $[45] = overflow, $[46] = t8, $[47] = t9) : t9 = $[47];
	let t10;
	$[48] !== arrow || $[49] !== arrowRef || $[50] !== arrowStyle ? (t10 = arrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {
		ref: arrowRef,
		style: arrowStyle,
		width: 19,
		height: 8,
		radius: 2
	}), $[48] = arrow, $[49] = arrowRef, $[50] = arrowStyle, $[51] = t10) : t10 = $[51];
	let t11;
	return $[52] !== placement || $[53] !== radius || $[54] !== ref || $[55] !== restProps || $[56] !== rootStyle || $[57] !== scheme || $[58] !== shadow || $[59] !== t10 || $[60] !== t5 || $[61] !== t6 || $[62] !== t7 || $[63] !== t9 || $[64] !== tone ? (t11 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MotionCard$1, {
		"data-ui": "Popover",
		...restProps,
		"data-placement": placement,
		radius,
		ref,
		scheme,
		shadow,
		sizing: "border",
		style: rootStyle,
		tone,
		variants: POPOVER_MOTION_PROPS.card,
		transition: POPOVER_MOTION_PROPS.transition,
		initial: t5,
		animate: t6,
		exit: t7,
		children: [t9, t10]
	}), $[52] = placement, $[53] = radius, $[54] = ref, $[55] = restProps, $[56] = rootStyle, $[57] = scheme, $[58] = shadow, $[59] = t10, $[60] = t5, $[61] = t6, $[62] = t7, $[63] = t9, $[64] = tone, $[65] = t11) : t11 = $[65], t11;
});
var ViewportOverlay = () => {
	let $ = (0, import_dist.c)(2), { zIndex } = useLayer(), t0;
	return $[0] === zIndex ? t0 = $[1] : (t0 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
		height: "100vh",
		inset: 0,
		position: "fixed",
		width: "100vw",
		zIndex
	} }), $[0] = zIndex, $[1] = t0), t0;
};
var Popover = (0, import_react.forwardRef)(function Popover(props, forwardedRef) {
	let $ = (0, import_dist.c)(126), { container, layer } = useTheme_v2(), boundaryElementContext = useBoundaryElement(), _boundaryElement, _fallbackPlacements, _floatingBoundary, _referenceBoundary, _zOffsetProp, childProp, content, disabled, matchReferenceWidth, modal, open, paddingProp, portal, referenceElement, restProps, scheme, t0, t1, t10, t11, t2, t3, t4, t5, t6, t7, t8, t9, updateRef;
	if ($[0] !== props) {
		let { __unstable_margins: t12, animate: t13, arrow: t14, boundaryElement: t15, children: t16, constrainSize: t17, content: t18, disabled: t19, fallbackPlacements: t20, matchReferenceWidth: t21, floatingBoundary: t22, modal: t23, onActivate, open: t24, overflow: t25, padding: t26, placement: t27, placementStrategy: t28, portal: t29, preventOverflow: t30, radius: t31, referenceBoundary: t32, referenceElement: t33, scheme: t34, shadow: t35, tone: t36, width: t37, zOffset: t38, updateRef: t39, ...t40 } = props;
		t0 = t12, t1 = t13, t2 = t14, _boundaryElement = t15, childProp = t16, t3 = t17, content = t18, disabled = t19, _fallbackPlacements = t20, matchReferenceWidth = t21, _floatingBoundary = t22, modal = t23, open = t24, t4 = t25, paddingProp = t26, t5 = t27, t6 = t28, portal = t29, t7 = t30, t8 = t31, _referenceBoundary = t32, referenceElement = t33, scheme = t34, t9 = t35, t10 = t36, t11 = t37, _zOffsetProp = t38, updateRef = t39, restProps = t40, $[0] = props, $[1] = _boundaryElement, $[2] = _fallbackPlacements, $[3] = _floatingBoundary, $[4] = _referenceBoundary, $[5] = _zOffsetProp, $[6] = childProp, $[7] = content, $[8] = disabled, $[9] = matchReferenceWidth, $[10] = modal, $[11] = open, $[12] = paddingProp, $[13] = portal, $[14] = referenceElement, $[15] = restProps, $[16] = scheme, $[17] = t0, $[18] = t1, $[19] = t10, $[20] = t11, $[21] = t2, $[22] = t3, $[23] = t4, $[24] = t5, $[25] = t6, $[26] = t7, $[27] = t8, $[28] = t9, $[29] = updateRef;
	} else _boundaryElement = $[1], _fallbackPlacements = $[2], _floatingBoundary = $[3], _referenceBoundary = $[4], _zOffsetProp = $[5], childProp = $[6], content = $[7], disabled = $[8], matchReferenceWidth = $[9], modal = $[10], open = $[11], paddingProp = $[12], portal = $[13], referenceElement = $[14], restProps = $[15], scheme = $[16], t0 = $[17], t1 = $[18], t10 = $[19], t11 = $[20], t2 = $[21], t3 = $[22], t4 = $[23], t5 = $[24], t6 = $[25], t7 = $[26], t8 = $[27], t9 = $[28], updateRef = $[29];
	let margins = t0 === void 0 ? DEFAULT_POPOVER_MARGINS : t0, _animate = t1 !== void 0 && t1, arrowProp = t2 !== void 0 && t2, constrainSize = t3 !== void 0 && t3, overflow = t4 === void 0 ? "hidden" : t4, placementProp = t5 === void 0 ? "bottom" : t5, placementStrategy = t6 === void 0 ? "flip" : t6, preventOverflow = t7 === void 0 || t7, radiusProp = t8 === void 0 ? 3 : t8, shadowProp = t9 === void 0 ? 3 : t9, tone = t10 === void 0 ? "inherit" : t10, widthProp = t11 === void 0 ? "auto" : t11, boundaryElement = _boundaryElement ?? boundaryElementContext?.element, fallbackPlacements = _fallbackPlacements ?? DEFAULT_FALLBACK_PLACEMENTS$1[props.placement ?? "bottom"], floatingBoundary = _floatingBoundary ?? props.boundaryElement ?? boundaryElementContext.element, referenceBoundary = _referenceBoundary ?? props.boundaryElement ?? boundaryElementContext.element, zOffsetProp = _zOffsetProp ?? layer.popover.zOffset, animate = !usePrefersReducedMotion() && _animate, boundarySize = useElementSize(boundaryElement)?.border, t12;
	$[30] === paddingProp ? t12 = $[31] : (t12 = _getArrayProp(paddingProp), $[30] = paddingProp, $[31] = t12);
	let padding = t12, t13;
	$[32] === radiusProp ? t13 = $[33] : (t13 = _getArrayProp(radiusProp), $[32] = radiusProp, $[33] = t13);
	let radius = t13, t14;
	$[34] === shadowProp ? t14 = $[35] : (t14 = _getArrayProp(shadowProp), $[34] = shadowProp, $[35] = t14);
	let shadow = t14, widthArrayProp = _getArrayProp(widthProp), t15;
	$[36] === zOffsetProp ? t15 = $[37] : (t15 = _getArrayProp(zOffsetProp), $[36] = zOffsetProp, $[37] = t15);
	let zOffset = t15, ref = (0, import_react.useRef)(null), arrowRef = (0, import_react.useRef)(null), t16;
	$[38] === Symbol.for("react.memo_cache_sentinel") ? (t16 = () => ref.current, $[38] = t16) : t16 = $[38], (0, import_react.useImperativeHandle)(forwardedRef, t16);
	let mediaIndex = useMediaIndex(), boundaryWidth = constrainSize || preventOverflow ? boundarySize?.width : void 0, width = calcCurrentWidth({
		container,
		mediaIndex,
		width: widthArrayProp
	}), widthRef = (0, import_react.useRef)(width), t17, t18;
	$[39] === width ? (t17 = $[40], t18 = $[41]) : (t17 = () => {
		widthRef.current = width;
	}, t18 = [width], $[39] = width, $[40] = t17, $[41] = t18), (0, import_react.useEffect)(t17, t18);
	let t19;
	$[42] !== boundaryWidth || $[43] !== width ? (t19 = calcMaxWidth({
		boundaryWidth,
		currentWidth: width
	}), $[42] = boundaryWidth, $[43] = width, $[44] = t19) : t19 = $[44];
	let maxWidth = t19, maxWidthRef = (0, import_react.useRef)(maxWidth), t20, t21;
	$[45] === maxWidth ? (t20 = $[46], t21 = $[47]) : (t20 = () => {
		maxWidthRef.current = maxWidth;
	}, t21 = [maxWidth], $[45] = maxWidth, $[46] = t20, $[47] = t21), (0, import_react.useEffect)(t20, t21);
	let referenceWidthRef = (0, import_react.useRef)(void 0), t22, t23;
	$[48] !== matchReferenceWidth || $[49] !== maxWidth || $[50] !== open || $[51] !== width ? (t22 = () => {
		let floatingElement = ref.current;
		if (!open || !floatingElement) return;
		let referenceWidth = referenceWidthRef.current;
		matchReferenceWidth ? referenceWidth !== void 0 && (floatingElement.style.width = `${referenceWidth}px`) : width !== void 0 && (floatingElement.style.width = `${width}px`), typeof maxWidth == "number" && (floatingElement.style.maxWidth = `${maxWidth}px`);
	}, t23 = [
		width,
		matchReferenceWidth,
		maxWidth,
		open
	], $[48] = matchReferenceWidth, $[49] = maxWidth, $[50] = open, $[51] = width, $[52] = t22, $[53] = t23) : (t22 = $[52], t23 = $[53]), (0, import_react.useEffect)(t22, t23);
	let [referenceWidth_0, setReferenceWidth] = (0, import_react.useState)(void 0), t24;
	$[54] !== animate || $[55] !== arrowProp || $[56] !== constrainSize || $[57] !== fallbackPlacements || $[58] !== floatingBoundary || $[59] !== margins || $[60] !== matchReferenceWidth || $[61] !== placementProp || $[62] !== placementStrategy || $[63] !== preventOverflow || $[64] !== referenceBoundary ? (t24 = {
		animate,
		arrowProp,
		arrowRef,
		constrainSize,
		fallbackPlacements,
		floatingBoundary,
		margins,
		matchReferenceWidth,
		maxWidthRef,
		placementProp,
		placementStrategy,
		preventOverflow,
		referenceBoundary,
		referenceWidthRef,
		rootBoundary: "viewport",
		setReferenceWidth,
		widthRef
	}, $[54] = animate, $[55] = arrowProp, $[56] = constrainSize, $[57] = fallbackPlacements, $[58] = floatingBoundary, $[59] = margins, $[60] = matchReferenceWidth, $[61] = placementProp, $[62] = placementStrategy, $[63] = preventOverflow, $[64] = referenceBoundary, $[65] = t24) : t24 = $[65];
	let middleware = useMiddleware$1(t24), t25;
	$[66] === referenceElement ? t25 = $[67] : (t25 = referenceElement ? { reference: referenceElement } : void 0, $[66] = referenceElement, $[67] = t25);
	let t26;
	$[68] !== middleware || $[69] !== placementProp || $[70] !== t25 ? (t26 = {
		middleware,
		placement: placementProp,
		whileElementsMounted: autoUpdate,
		elements: t25
	}, $[68] = middleware, $[69] = placementProp, $[70] = t25, $[71] = t26) : t26 = $[71];
	let { x, y, middlewareData, placement, refs, strategy, update } = useFloating(t26), referenceHidden = middlewareData.hide?.referenceHidden, arrowX = middlewareData.arrow?.x, arrowY = middlewareData.arrow?.y, originX = middlewareData["@sanity/ui/origin"]?.originX, originY = middlewareData["@sanity/ui/origin"]?.originY, t27;
	$[72] === Symbol.for("react.memo_cache_sentinel") ? (t27 = (arrowEl) => {
		arrowRef.current = arrowEl;
	}, $[72] = t27) : t27 = $[72];
	let setArrow = t27, t28;
	$[73] === refs ? t28 = $[74] : (t28 = (node) => {
		ref.current = node, refs.setFloating(node);
	}, $[73] = refs, $[74] = t28);
	let setFloating = t28, t29;
	$[75] === childProp ? t29 = $[76] : (t29 = childProp ? getElementRef(childProp) : null, $[75] = childProp, $[76] = t29);
	let t30;
	$[77] === refs.reference.current ? t30 = $[78] : (t30 = () => refs.reference.current, $[77] = refs.reference.current, $[78] = t30), (0, import_react.useImperativeHandle)(t29, t30);
	let t31;
	bb0: {
		if (referenceElement) {
			t31 = childProp;
			break bb0;
		}
		if (!childProp) {
			t31 = null;
			break bb0;
		}
		let t32;
		$[79] !== childProp || $[80] !== refs.setReference ? (t32 = (0, import_react.cloneElement)(childProp, { ref: refs.setReference }), $[79] = childProp, $[80] = refs.setReference, $[81] = t32) : t32 = $[81], t31 = t32;
	}
	let child = t31, t32, t33;
	if ($[82] === update ? (t32 = $[83], t33 = $[84]) : (t32 = () => update, t33 = [update], $[82] = update, $[83] = t32, $[84] = t33), (0, import_react.useImperativeHandle)(updateRef, t32, t33), disabled) {
		let t34;
		return $[85] === childProp ? t34 = $[86] : (t34 = childProp || /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {}), $[85] = childProp, $[86] = t34), t34;
	}
	let t34;
	$[87] === modal ? t34 = $[88] : (t34 = modal && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ViewportOverlay, {}), $[87] = modal, $[88] = t34);
	let t35 = matchReferenceWidth ? referenceWidth_0 : width, t36;
	$[89] !== animate || $[90] !== arrowProp || $[91] !== arrowX || $[92] !== arrowY || $[93] !== content || $[94] !== margins || $[95] !== originX || $[96] !== originY || $[97] !== overflow || $[98] !== padding || $[99] !== placement || $[100] !== radius || $[101] !== referenceHidden || $[102] !== restProps || $[103] !== scheme || $[104] !== setFloating || $[105] !== shadow || $[106] !== strategy || $[107] !== t35 || $[108] !== tone || $[109] !== x || $[110] !== y ? (t36 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverCard, {
		...restProps,
		__unstable_margins: margins,
		animate,
		arrow: arrowProp,
		arrowRef: setArrow,
		arrowX,
		arrowY,
		hidden: referenceHidden,
		overflow,
		padding,
		placement,
		radius,
		ref: setFloating,
		scheme,
		shadow,
		originX,
		originY,
		strategy,
		tone,
		width: t35,
		x,
		y,
		children: content
	}), $[89] = animate, $[90] = arrowProp, $[91] = arrowX, $[92] = arrowY, $[93] = content, $[94] = margins, $[95] = originX, $[96] = originY, $[97] = overflow, $[98] = padding, $[99] = placement, $[100] = radius, $[101] = referenceHidden, $[102] = restProps, $[103] = scheme, $[104] = setFloating, $[105] = shadow, $[106] = strategy, $[107] = t35, $[108] = tone, $[109] = x, $[110] = y, $[111] = t36) : t36 = $[111];
	let t37;
	$[112] !== t34 || $[113] !== t36 || $[114] !== zOffset ? (t37 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LayerProvider, {
		zOffset,
		children: [t34, t36]
	}), $[112] = t34, $[113] = t36, $[114] = zOffset, $[115] = t37) : t37 = $[115];
	let popover = t37, t38;
	$[116] !== open || $[117] !== popover || $[118] !== portal ? (t38 = open && (portal ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, {
		__unstable_name: typeof portal == "string" ? portal : void 0,
		children: popover
	}) : popover), $[116] = open, $[117] = popover, $[118] = portal, $[119] = t38) : t38 = $[119];
	let children = t38, t39;
	$[120] !== animate || $[121] !== children ? (t39 = animate ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children }) : children, $[120] = animate, $[121] = children, $[122] = t39) : t39 = $[122];
	let t40;
	return $[123] !== child || $[124] !== t39 ? (t40 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [t39, child] }), $[123] = child, $[124] = t39, $[125] = t40) : t40 = $[125], t40;
});
function useMiddleware$1(t0) {
	let $ = (0, import_dist.c)(42), { animate, arrowProp, arrowRef, constrainSize, fallbackPlacements, floatingBoundary, margins, matchReferenceWidth, maxWidthRef, placementProp, placementStrategy, preventOverflow, referenceBoundary, referenceWidthRef, rootBoundary, setReferenceWidth, widthRef } = t0, ret;
	if ($[0] !== animate || $[1] !== arrowProp || $[2] !== arrowRef || $[3] !== constrainSize || $[4] !== fallbackPlacements || $[5] !== floatingBoundary || $[6] !== margins || $[7] !== matchReferenceWidth || $[8] !== maxWidthRef || $[9] !== placementProp || $[10] !== placementStrategy || $[11] !== preventOverflow || $[12] !== referenceBoundary || $[13] !== referenceWidthRef || $[14] !== rootBoundary || $[15] !== setReferenceWidth || $[16] !== widthRef) {
		if (ret = [], constrainSize || preventOverflow) if (placementStrategy === "autoPlacement") {
			let t1;
			$[18] !== fallbackPlacements || $[19] !== placementProp ? (t1 = autoPlacement({ allowedPlacements: [placementProp].concat(fallbackPlacements) }), $[18] = fallbackPlacements, $[19] = placementProp, $[20] = t1) : t1 = $[20], ret.push(t1);
		} else {
			let t1 = floatingBoundary || void 0, t2;
			$[21] !== fallbackPlacements || $[22] !== rootBoundary || $[23] !== t1 ? (t2 = flip({
				boundary: t1,
				fallbackPlacements,
				padding: 4,
				rootBoundary
			}), $[21] = fallbackPlacements, $[22] = rootBoundary, $[23] = t1, $[24] = t2) : t2 = $[24], ret.push(t2);
		}
		let t1;
		if ($[25] === Symbol.for("react.memo_cache_sentinel") ? (t1 = offset({ mainAxis: 4 }), $[25] = t1) : t1 = $[25], ret.push(t1), constrainSize || matchReferenceWidth) {
			let t2 = floatingBoundary || void 0, t3;
			$[26] !== constrainSize || $[27] !== margins || $[28] !== matchReferenceWidth || $[29] !== maxWidthRef || $[30] !== referenceWidthRef || $[31] !== setReferenceWidth || $[32] !== t2 || $[33] !== widthRef ? (t3 = size({
				boundaryElement: t2,
				constrainSize,
				margins,
				matchReferenceWidth,
				maxWidthRef,
				padding: 4,
				referenceWidthRef,
				setReferenceWidth,
				widthRef
			}), $[26] = constrainSize, $[27] = margins, $[28] = matchReferenceWidth, $[29] = maxWidthRef, $[30] = referenceWidthRef, $[31] = setReferenceWidth, $[32] = t2, $[33] = widthRef, $[34] = t3) : t3 = $[34], ret.push(t3);
		}
		if (preventOverflow) {
			let t2 = floatingBoundary || void 0, t3;
			$[35] !== rootBoundary || $[36] !== t2 ? (t3 = shift({
				boundary: t2,
				rootBoundary,
				padding: 4
			}), $[35] = rootBoundary, $[36] = t2, $[37] = t3) : t3 = $[37], ret.push(t3);
		}
		if (arrowProp) {
			let t2;
			$[38] === arrowRef ? t2 = $[39] : (t2 = arrow({
				element: arrowRef,
				padding: 4
			}), $[38] = arrowRef, $[39] = t2), ret.push(t2);
		}
		animate && ret.push(origin);
		let t2 = referenceBoundary || void 0, t3;
		$[40] === t2 ? t3 = $[41] : (t3 = hide({
			boundary: t2,
			padding: 4,
			strategy: "referenceHidden"
		}), $[40] = t2, $[41] = t3), ret.push(t3), $[0] = animate, $[1] = arrowProp, $[2] = arrowRef, $[3] = constrainSize, $[4] = fallbackPlacements, $[5] = floatingBoundary, $[6] = margins, $[7] = matchReferenceWidth, $[8] = maxWidthRef, $[9] = placementProp, $[10] = placementStrategy, $[11] = preventOverflow, $[12] = referenceBoundary, $[13] = referenceWidthRef, $[14] = rootBoundary, $[15] = setReferenceWidth, $[16] = widthRef, $[17] = ret;
	} else ret = $[17];
	return ret;
}
var BASE_STYLE = {
	"&&:not([hidden])": { display: "grid" },
	"&[data-as=\"ul\"],&[data-as=\"ol\"]": { listStyle: "none" },
	gridTemplateColumns: "minmax(0, 1fr)",
	gridAutoRows: "min-content"
};
function stackBaseStyle() {
	return BASE_STYLE;
}
function responsiveStackSpaceStyle(props) {
	let { media, space } = getTheme_v2(props.theme);
	return _responsive(media, props.$space, (spaceIndex) => ({ gridGap: rem(space[spaceIndex]) }));
}
var StyledStack = /* @__PURE__ */ Mt(Box).withConfig({
	displayName: "StyledStack",
	componentId: "sc-ux0lrj-0"
})(stackBaseStyle, responsiveStackSpaceStyle);
var Stack = (0, import_react.forwardRef)(function Stack(props, ref) {
	let $ = (0, import_dist.c)(13), as, deprecated_space, gap, restProps;
	$[0] === props ? (as = $[1], deprecated_space = $[2], gap = $[3], restProps = $[4]) : ({as, gap, space: deprecated_space, ...restProps} = props, $[0] = props, $[1] = as, $[2] = deprecated_space, $[3] = gap, $[4] = restProps);
	let spacing = gap === void 0 ? deprecated_space : gap, t0 = typeof as == "string" ? as : void 0, t1;
	$[5] === spacing ? t1 = $[6] : (t1 = _getArrayProp(spacing), $[5] = spacing, $[6] = t1);
	let t2;
	return $[7] !== as || $[8] !== ref || $[9] !== restProps || $[10] !== t0 || $[11] !== t1 ? (t2 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledStack, {
		"data-as": t0,
		"data-ui": "Stack",
		...restProps,
		$space: t1,
		forwardedAs: as,
		ref
	}), $[7] = as, $[8] = ref, $[9] = restProps, $[10] = t0, $[11] = t1, $[12] = t2) : t2 = $[12], t2;
});
/**
* @beta
*/
function useCustomValidity(ref, customValidity) {
	let $ = (0, import_dist.c)(4), t0, t1;
	$[0] !== customValidity || $[1] !== ref ? (t0 = () => {
		ref.current?.setCustomValidity(customValidity || "");
	}, t1 = [customValidity, ref], $[0] = customValidity, $[1] = ref, $[2] = t0, $[3] = t1) : (t0 = $[2], t1 = $[3]), (0, import_react.useEffect)(t0, t1);
}
function responsiveInputPaddingStyle(props) {
	let { $fontSize, $iconLeft, $iconRight, $padding, $space } = props, { font, media, space } = getTheme_v2(props.theme), len = Math.max($padding.length, $space.length, $fontSize.length), _padding = [], _space = [], _fontSize = [];
	for (let i = 0; i < len; i += 1) _fontSize[i] = $fontSize[i] === void 0 ? _fontSize[i - 1] : $fontSize[i], _padding[i] = $padding[i] === void 0 ? _padding[i - 1] : $padding[i], _space[i] = $space[i] === void 0 ? _space[i - 1] : $space[i];
	return _responsive(media, _padding, (_, i) => {
		let size = font.text.sizes[_fontSize[i]] || font.text.sizes[2], emSize = size.lineHeight - size.ascenderHeight - size.descenderHeight, p = space[_padding[i]], s = space[_space[i]], styles = {
			paddingTop: rem(p - size.ascenderHeight),
			paddingRight: rem(p),
			paddingBottom: rem(p - size.descenderHeight),
			paddingLeft: rem(p)
		};
		return $iconRight && (styles.paddingRight = rem(p + emSize + s)), $iconLeft && (styles.paddingLeft = rem(p + emSize + s)), styles;
	});
}
function responsiveInputPaddingIconRightStyle(props) {
	return responsiveInputPaddingStyle({
		...props,
		$iconRight: !0
	});
}
var ROOT_STYLE = jt`&:not([hidden]){display:flex;}align-items:center;`;
function textInputRootStyle() {
	return ROOT_STYLE;
}
function textInputBaseStyle(props) {
	let { $scheme, $tone, $weight } = props, { color, font } = getTheme_v2(props.theme);
	return jt`appearance:none;background:none;border:0;border-radius:0;outline:none;width:100%;box-sizing:border-box;font-family:${font.text.family};font-weight:${$weight && font.text.weights[$weight] || font.text.weights.regular};margin:0;position:relative;z-index:1;display:block;&:-webkit-autofill,&:-webkit-autofill:hover,&:-webkit-autofill:focus,&:-webkit-autofill:active{-webkit-text-fill-color:var(--input-fg-color) !important;transition:background-color 5000s;transition-delay:86400s;}&[data-as='textarea']{resize:none;}color:var(--input-fg-color);&::placeholder{color:var(--input-placeholder-color);}&[data-scheme='${$scheme}'][data-tone='${$tone}']{--input-fg-color:${color.input.default.enabled.fg};--input-placeholder-color:${color.input.default.enabled.placeholder};&:not(:invalid):not(:disabled):not(:read-only){--input-fg-color:${color.input.default.enabled.fg};--input-placeholder-color:${color.input.default.enabled.placeholder};}&:not(:invalid):disabled{--input-fg-color:${color.input.default.disabled.fg};--input-placeholder-color:${color.input.default.disabled.placeholder};}&:invalid{--input-fg-color:${color.input.invalid.enabled.fg};--input-placeholder-color:${color.input.invalid.enabled.placeholder};}&:read-only{--input-fg-color:${color.input.default.readOnly.fg};--input-placeholder-color:${color.input.default.readOnly.placeholder};}}`;
}
function textInputFontSizeStyle(props) {
	let { font, media } = getTheme_v2(props.theme);
	return _responsive(media, props.$fontSize, (sizeIndex) => {
		let size = font.text.sizes[sizeIndex] || font.text.sizes[2];
		return {
			fontSize: rem(size.fontSize),
			lineHeight: `${size.lineHeight / size.fontSize}`
		};
	});
}
function textInputRepresentationStyle(props) {
	let { $hasPrefix, $hasSuffix, $scheme, $tone, $unstableDisableFocusRing } = props, { color, input } = getTheme_v2(props.theme);
	return jt`--input-box-shadow:none;position:absolute;top:0;left:0;right:0;bottom:0;display:block;pointer-events:none;z-index:0;background-color:var(--card-bg-color);box-shadow:var(--input-box-shadow);border-top-left-radius:${$hasPrefix ? 0 : void 0};border-bottom-left-radius:${$hasPrefix ? 0 : void 0};border-top-right-radius:${$hasSuffix ? 0 : void 0};border-bottom-right-radius:${$hasSuffix ? 0 : void 0};&[data-scheme='${$scheme}'][data-tone='${$tone}']{--card-bg-color:${color.input.default.enabled.bg};--card-fg-color:${color.input.default.enabled.fg};*:not(:disabled) + &[data-border]{--input-box-shadow:${focusRingBorderStyle({
		color: color.input.default.enabled.border,
		width: input.border.width
	})};}*:not(:disabled):invalid + &{--card-bg-color:${color.input.invalid.enabled.bg};--card-fg-color:${color.input.invalid.enabled.fg};&[data-border]{--input-box-shadow:${focusRingBorderStyle({
		color: color.input.invalid.enabled.border,
		width: input.border.width
	})};}}*:not(:disabled):focus + &{&[data-border]{--input-box-shadow:${$unstableDisableFocusRing ? void 0 : focusRingStyle({
		border: {
			color: color.input.default.enabled.border,
			width: input.border.width
		},
		focusRing: input.text.focusRing
	})};}&:not([data-border]){--input-box-shadow:${$unstableDisableFocusRing ? void 0 : focusRingStyle({ focusRing: input.text.focusRing })};}}*:not(:invalid):disabled + &{--card-bg-color:${color.input.default.disabled.bg} !important;--card-fg-color:${color.input.default.disabled.fg} !important;--card-icon-color:${color.input.default.disabled.fg} !important;&[data-border]{--input-box-shadow:${focusRingBorderStyle({
		color: color.input.default.disabled.border,
		width: input.border.width
	})};}}*:invalid:disabled + &{--card-bg-color:${color.input.invalid.disabled.bg} !important;--card-fg-color:${color.input.invalid.disabled.fg} !important;--card-icon-color:${color.input.invalid.disabled.fg} !important;&[data-border]{--input-box-shadow:${focusRingBorderStyle({
		color: color.input.invalid.disabled.border,
		width: input.border.width
	})};}}*:not(:invalid):read-only + &{--card-bg-color:${color.input.default.readOnly.bg} !important;--card-fg-color:${color.input.default.readOnly.fg} !important;}*:invalid:read-only + &{--card-bg-color:${color.input.invalid.readOnly.bg} !important;--card-fg-color:${color.input.invalid.readOnly.fg} !important;}@media (hover:hover){*:not(:disabled):not(:read-only):not(:invalid):hover + &{--card-bg-color:${color.input.default.hovered.bg};--card-fg-color:${color.input.default.hovered.fg};}*:invalid:not(:disabled):not(:read-only):hover + &{--card-bg-color:${color.input.invalid.hovered.bg};--card-fg-color:${color.input.invalid.hovered.fg};}*:not(:disabled):not(:read-only):not(:invalid):not(:focus):hover + &[data-border]{--input-box-shadow:${focusRingBorderStyle({
		color: color.input.default.hovered.border,
		width: input.border.width
	})};}*:invalid:not(:disabled):not(:read-only):not(:focus):hover + &[data-border]{--input-box-shadow:${focusRingBorderStyle({
		color: color.input.invalid.hovered.border,
		width: input.border.width
	})};}}}`;
}
var CLEAR_BUTTON_BOX_STYLE = { zIndex: 2 };
var StyledTextInput = /* @__PURE__ */ Mt(Card).attrs({ forwardedAs: "span" }).withConfig({
	displayName: "StyledTextInput",
	componentId: "sc-7gzsyi-0"
})(textInputRootStyle);
var InputRoot = Mt.span.withConfig({
	displayName: "InputRoot",
	componentId: "sc-7gzsyi-1"
})`flex:1;min-width:0;display:block;position:relative;`;
var Prefix = Mt(Card).attrs({ forwardedAs: "span" }).withConfig({
	displayName: "Prefix",
	componentId: "sc-7gzsyi-2"
})`border-top-right-radius:0;border-bottom-right-radius:0;& > span{display:block;margin:-1px;}`;
var Suffix = Mt(Card).attrs({ forwardedAs: "span" }).withConfig({
	displayName: "Suffix",
	componentId: "sc-7gzsyi-3"
})`border-top-left-radius:0;border-bottom-left-radius:0;& > span{display:block;margin:-1px;}`;
var Input = /* @__PURE__ */ Mt.input.withConfig({
	displayName: "Input",
	componentId: "sc-7gzsyi-4"
})(responsiveInputPaddingStyle, textInputBaseStyle, textInputFontSizeStyle);
var Presentation = /* @__PURE__ */ Mt.span.withConfig({
	displayName: "Presentation",
	componentId: "sc-7gzsyi-5"
})(responsiveRadiusStyle, textInputRepresentationStyle);
var LeftBox = Mt(Box).withConfig({
	displayName: "LeftBox",
	componentId: "sc-7gzsyi-6"
})`position:absolute;top:0;left:0;`;
var RightBox = Mt(Box).withConfig({
	displayName: "RightBox",
	componentId: "sc-7gzsyi-7"
})`position:absolute;top:0;right:0;`;
var RightCard = Mt(Card).withConfig({
	displayName: "RightCard",
	componentId: "sc-7gzsyi-8"
})`background-color:transparent;position:absolute;top:0;right:0;`;
var TextInputClearButton = /* @__PURE__ */ Mt(Button).withConfig({
	displayName: "TextInputClearButton",
	componentId: "sc-7gzsyi-9"
})({ "&:not([hidden])": { display: "block" } });
var TextInput = (0, import_react.forwardRef)(function TextInput(props, forwardedRef) {
	let $ = (0, import_dist.c)(93), IconComponent, IconRightComponent, __unstable_disableFocusRing, clearButton, customValidity, gap, onClear, prefix, readOnly, restProps, suffix, t0, t1, t2, t3, t4, t5, t6, weight;
	$[0] === props ? (IconComponent = $[1], IconRightComponent = $[2], __unstable_disableFocusRing = $[3], clearButton = $[4], customValidity = $[5], gap = $[6], onClear = $[7], prefix = $[8], readOnly = $[9], restProps = $[10], suffix = $[11], t0 = $[12], t1 = $[13], t2 = $[14], t3 = $[15], t4 = $[16], t5 = $[17], t6 = $[18], weight = $[19]) : ({__unstable_disableFocusRing, border: t0, clearButton, disabled: t1, fontSize: t2, gap, icon: IconComponent, iconRight: IconRightComponent, onClear, padding: t3, prefix, radius: t4, readOnly, space: t5, suffix, customValidity, type: t6, weight, ...restProps} = props, $[0] = props, $[1] = IconComponent, $[2] = IconRightComponent, $[3] = __unstable_disableFocusRing, $[4] = clearButton, $[5] = customValidity, $[6] = gap, $[7] = onClear, $[8] = prefix, $[9] = readOnly, $[10] = restProps, $[11] = suffix, $[12] = t0, $[13] = t1, $[14] = t2, $[15] = t3, $[16] = t4, $[17] = t5, $[18] = t6, $[19] = weight);
	let border = t0 === void 0 || t0, disabled = t1 !== void 0 && t1, fontSizeProp = t2 === void 0 ? 2 : t2, paddingProp = t3 === void 0 ? 3 : t3, radiusProp = t4 === void 0 ? 2 : t4, deprecated_space = t5 === void 0 ? 3 : t5, type = t6 === void 0 ? "text" : t6, ref = (0, import_react.useRef)(null), rootTheme = useRootTheme(), t7;
	$[20] === fontSizeProp ? t7 = $[21] : (t7 = _getArrayProp(fontSizeProp), $[20] = fontSizeProp, $[21] = t7);
	let fontSize = t7, t8;
	$[22] === paddingProp ? t8 = $[23] : (t8 = _getArrayProp(paddingProp), $[22] = paddingProp, $[23] = t8);
	let padding = t8, t9;
	$[24] === radiusProp ? t9 = $[25] : (t9 = _getArrayProp(radiusProp), $[24] = radiusProp, $[25] = t9);
	let radius = t9, t10 = gap === void 0 ? deprecated_space : gap, t11;
	$[26] === t10 ? t11 = $[27] : (t11 = _getArrayProp(t10), $[26] = t10, $[27] = t11);
	let space = t11, $hasClearButton = !!clearButton, $hasIcon = !!IconComponent, $hasIconRight = !!IconRightComponent, $hasSuffix = !!suffix, $hasPrefix = !!prefix, t12;
	$[28] === Symbol.for("react.memo_cache_sentinel") ? (t12 = () => ref.current, $[28] = t12) : t12 = $[28], (0, import_react.useImperativeHandle)(forwardedRef, t12), useCustomValidity(ref, customValidity);
	let handleClearMouseDown = _temp$6, t13;
	$[29] === onClear ? t13 = $[30] : (t13 = (event_0) => {
		event_0.preventDefault(), event_0.stopPropagation(), onClear && onClear(), ref.current?.focus();
	}, $[29] = onClear, $[30] = t13);
	let handleClearClick = t13, t14;
	$[31] !== prefix || $[32] !== radius ? (t14 = prefix && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prefix, {
		borderTop: !0,
		borderLeft: !0,
		borderBottom: !0,
		radius,
		sizing: "border",
		tone: "inherit",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: prefix })
	}), $[31] = prefix, $[32] = radius, $[33] = t14) : t14 = $[33];
	let prefixNode = t14, t15 = border ? "" : void 0, t16;
	$[34] !== IconComponent || $[35] !== fontSize || $[36] !== padding ? (t16 = IconComponent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeftBox, {
		padding,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
			size: fontSize,
			children: [(0, import_react.isValidElement)(IconComponent) && IconComponent, (0, import_react_is$1.isValidElementType)(IconComponent) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconComponent, {})]
		})
	}), $[34] = IconComponent, $[35] = fontSize, $[36] = padding, $[37] = t16) : t16 = $[37];
	let t17;
	$[38] !== $hasClearButton || $[39] !== IconRightComponent || $[40] !== fontSize || $[41] !== padding ? (t17 = !$hasClearButton && IconRightComponent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RightBox, {
		padding,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
			size: fontSize,
			children: [(0, import_react.isValidElement)(IconRightComponent) && IconRightComponent, (0, import_react_is$1.isValidElementType)(IconRightComponent) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconRightComponent, {})]
		})
	}), $[38] = $hasClearButton, $[39] = IconRightComponent, $[40] = fontSize, $[41] = padding, $[42] = t17) : t17 = $[42];
	let t18;
	$[43] !== $hasPrefix || $[44] !== $hasSuffix || $[45] !== __unstable_disableFocusRing || $[46] !== radius || $[47] !== rootTheme.scheme || $[48] !== rootTheme.tone || $[49] !== t15 || $[50] !== t16 || $[51] !== t17 ? (t18 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Presentation, {
		$hasPrefix,
		$unstableDisableFocusRing: __unstable_disableFocusRing,
		$hasSuffix,
		$radius: radius,
		$scheme: rootTheme.scheme,
		$tone: rootTheme.tone,
		"data-border": t15,
		"data-scheme": rootTheme.scheme,
		"data-tone": rootTheme.tone,
		children: [t16, t17]
	}), $[43] = $hasPrefix, $[44] = $hasSuffix, $[45] = __unstable_disableFocusRing, $[46] = radius, $[47] = rootTheme.scheme, $[48] = rootTheme.tone, $[49] = t15, $[50] = t16, $[51] = t17, $[52] = t18) : t18 = $[52];
	let presentationNode = t18, t19;
	$[53] === padding ? t19 = $[54] : (t19 = padding.map(_temp2$1), $[53] = padding, $[54] = t19);
	let clearButtonBoxPadding = t19, t20;
	$[55] === padding ? t20 = $[56] : (t20 = padding.map(_temp3$1), $[55] = padding, $[56] = t20);
	let clearButtonPadding = t20, clearButtonProps = typeof clearButton == "object" ? clearButton : EMPTY_RECORD, t21;
	$[57] !== clearButton || $[58] !== clearButtonBoxPadding || $[59] !== clearButtonPadding || $[60] !== clearButtonProps || $[61] !== customValidity || $[62] !== disabled || $[63] !== fontSize || $[64] !== handleClearClick || $[65] !== radius || $[66] !== readOnly ? (t21 = !disabled && !readOnly && clearButton && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RightCard, {
		forwardedAs: "span",
		padding: clearButtonBoxPadding,
		style: CLEAR_BUTTON_BOX_STYLE,
		tone: customValidity ? "critical" : "inherit",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInputClearButton, {
			"aria-label": "Clear",
			"data-qa": "clear-button",
			fontSize,
			icon: CloseIcon,
			mode: "bleed",
			padding: clearButtonPadding,
			radius,
			...clearButtonProps,
			onClick: handleClearClick,
			onMouseDown: handleClearMouseDown
		})
	}), $[57] = clearButton, $[58] = clearButtonBoxPadding, $[59] = clearButtonPadding, $[60] = clearButtonProps, $[61] = customValidity, $[62] = disabled, $[63] = fontSize, $[64] = handleClearClick, $[65] = radius, $[66] = readOnly, $[67] = t21) : t21 = $[67];
	let clearButtonNode = t21, t22;
	$[68] !== radius || $[69] !== suffix ? (t22 = suffix && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Suffix, {
		borderTop: !0,
		borderRight: !0,
		borderBottom: !0,
		radius,
		sizing: "border",
		tone: "inherit",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: suffix })
	}), $[68] = radius, $[69] = suffix, $[70] = t22) : t22 = $[70];
	let suffixNode = t22, t23 = $hasIconRight || $hasClearButton, t24;
	$[71] !== $hasIcon || $[72] !== disabled || $[73] !== fontSize || $[74] !== padding || $[75] !== readOnly || $[76] !== restProps || $[77] !== rootTheme.scheme || $[78] !== rootTheme.tone || $[79] !== space || $[80] !== t23 || $[81] !== type || $[82] !== weight ? (t24 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
		"data-as": "input",
		"data-scheme": rootTheme.scheme,
		"data-tone": rootTheme.tone,
		...restProps,
		$fontSize: fontSize,
		$iconLeft: $hasIcon,
		$iconRight: t23,
		$padding: padding,
		$scheme: rootTheme.scheme,
		$space: space,
		$tone: rootTheme.tone,
		$weight: weight,
		disabled,
		readOnly,
		ref,
		type
	}), $[71] = $hasIcon, $[72] = disabled, $[73] = fontSize, $[74] = padding, $[75] = readOnly, $[76] = restProps, $[77] = rootTheme.scheme, $[78] = rootTheme.tone, $[79] = space, $[80] = t23, $[81] = type, $[82] = weight, $[83] = t24) : t24 = $[83];
	let t25;
	$[84] !== clearButtonNode || $[85] !== presentationNode || $[86] !== t24 ? (t25 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(InputRoot, { children: [
		t24,
		presentationNode,
		clearButtonNode
	] }), $[84] = clearButtonNode, $[85] = presentationNode, $[86] = t24, $[87] = t25) : t25 = $[87];
	let t26;
	return $[88] !== prefixNode || $[89] !== rootTheme.tone || $[90] !== suffixNode || $[91] !== t25 ? (t26 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StyledTextInput, {
		"data-ui": "TextInput",
		tone: rootTheme.tone,
		children: [
			prefixNode,
			t25,
			suffixNode
		]
	}), $[88] = prefixNode, $[89] = rootTheme.tone, $[90] = suffixNode, $[91] = t25, $[92] = t26) : t26 = $[92], t26;
});
function _temp$6(event) {
	event.preventDefault(), event.stopPropagation();
}
function _temp2$1(v) {
	return v === 0 ? 0 : v === 1 || v === 2 ? 1 : v - 2;
}
function _temp3$1(v_0) {
	return v_0 === 0 || v_0 === 1 ? 0 : v_0 === 2 ? 1 : v_0 - 1;
}
/**
* @public
*/
function useClickOutsideEvent(listener, t0, boundaryElement) {
	let $ = (0, import_dist.c)(9), elementsArg = t0 === void 0 ? _temp$5 : t0, t1;
	$[0] !== boundaryElement || $[1] !== elementsArg || $[2] !== listener ? (t1 = (evt) => {
		if (!listener) return;
		let target = evt.target;
		if (!(target instanceof Node)) return;
		let resolvedBoundaryElement = boundaryElement?.();
		if (resolvedBoundaryElement && !resolvedBoundaryElement.contains(target)) return;
		let elements = elementsArg().flat();
		for (let el of elements) if (el && (target === el || el.contains(target))) return;
		listener(evt);
	}, $[0] = boundaryElement, $[1] = elementsArg, $[2] = listener, $[3] = t1) : t1 = $[3];
	let onEvent = useEffectEvent(t1), hasListener = !!listener, t2;
	$[4] !== hasListener || $[5] !== onEvent ? (t2 = () => {
		if (!hasListener) return;
		let handleEvent = (evt_0) => onEvent(evt_0);
		return document.addEventListener("mousedown", handleEvent), () => {
			document.removeEventListener("mousedown", handleEvent);
		};
	}, $[4] = hasListener, $[5] = onEvent, $[6] = t2) : t2 = $[6];
	let t3;
	$[7] === hasListener ? t3 = $[8] : (t3 = [hasListener], $[7] = hasListener, $[8] = t3), (0, import_react.useEffect)(t2, t3), (0, import_react.useDebugValue)(listener ? "MouseDown On" : "MouseDown Off");
}
function _temp$5() {
	return EMPTY_ARRAY;
}
/**
* Adds global keydown event listener to the window.
*
* @param onKeyDown - The function to call when a keydown event is triggered.
* @param options - The options to pass to the addEventListener function (example, capture: true)
* @beta
*/
function useGlobalKeyDown(onKeyDown, options) {
	let $ = (0, import_dist.c)(7), t0;
	$[0] === onKeyDown ? t0 = $[1] : (t0 = (event) => onKeyDown(event), $[0] = onKeyDown, $[1] = t0);
	let handleKeyDown = useEffectEvent(t0), t1;
	$[2] !== handleKeyDown || $[3] !== options ? (t1 = () => {
		let handler = (event_0) => handleKeyDown(event_0);
		return window.addEventListener("keydown", handler, options), () => window.removeEventListener("keydown", handler, options);
	}, $[2] = handleKeyDown, $[3] = options, $[4] = t1) : t1 = $[4];
	let t2;
	$[5] === options ? t2 = $[6] : (t2 = [options], $[5] = options, $[6] = t2), (0, import_react.useEffect)(t1, t2);
}
var StyledLayer = /* @__PURE__ */ Mt.div.withConfig({
	displayName: "StyledLayer",
	componentId: "sc-c59p9w-0"
})({ position: "relative" });
var LayerChildren = (0, import_react.forwardRef)(function LayerChildren(props, forwardedRef) {
	let $ = (0, import_dist.c)(22), children, onActivate, onFocus, restProps, t0;
	$[0] === props ? (children = $[1], onActivate = $[2], onFocus = $[3], restProps = $[4], t0 = $[5]) : ({children, onActivate, onFocus, style: t0, ...restProps} = props, $[0] = props, $[1] = children, $[2] = onActivate, $[3] = onFocus, $[4] = restProps, $[5] = t0);
	let style = t0 === void 0 ? EMPTY_RECORD : t0, { zIndex, isTopLayer } = useLayer(), lastFocusedRef = (0, import_react.useRef)(null), ref = (0, import_react.useRef)(null), isTopLayerRef = (0, import_react.useRef)(isTopLayer), t1;
	$[6] === Symbol.for("react.memo_cache_sentinel") ? (t1 = () => ref.current, $[6] = t1) : t1 = $[6], (0, import_react.useImperativeHandle)(forwardedRef, t1);
	let t2, t3;
	$[7] !== isTopLayer || $[8] !== onActivate ? (t2 = () => {
		isTopLayerRef.current !== isTopLayer && isTopLayer && onActivate?.({ activeElement: lastFocusedRef.current }), isTopLayerRef.current = isTopLayer;
	}, t3 = [isTopLayer, onActivate], $[7] = isTopLayer, $[8] = onActivate, $[9] = t2, $[10] = t3) : (t2 = $[9], t3 = $[10]), (0, import_react.useEffect)(t2, t3);
	let t4;
	$[11] !== isTopLayer || $[12] !== onFocus ? (t4 = (event) => {
		onFocus?.(event);
		let rootElement = ref.current, target = document.activeElement;
		!isTopLayer || !rootElement || !target || isHTMLElement(target) && containsOrEqualsElement(rootElement, target) && (lastFocusedRef.current = target);
	}, $[11] = isTopLayer, $[12] = onFocus, $[13] = t4) : t4 = $[13];
	let handleFocus = t4, t5;
	$[14] !== style || $[15] !== zIndex ? (t5 = {
		...style,
		zIndex
	}, $[14] = style, $[15] = zIndex, $[16] = t5) : t5 = $[16];
	let t6;
	return $[17] !== children || $[18] !== handleFocus || $[19] !== restProps || $[20] !== t5 ? (t6 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledLayer, {
		...restProps,
		"data-ui": "Layer",
		onFocus: handleFocus,
		ref,
		style: t5,
		children
	}), $[17] = children, $[18] = handleFocus, $[19] = restProps, $[20] = t5, $[21] = t6) : t6 = $[21], t6;
});
var Layer = (0, import_react.forwardRef)(function Layer(props, ref) {
	let $ = (0, import_dist.c)(11), children, restProps, t0;
	$[0] === props ? (children = $[1], restProps = $[2], t0 = $[3]) : ({children, zOffset: t0, ...restProps} = props, $[0] = props, $[1] = children, $[2] = restProps, $[3] = t0);
	let zOffset = t0 === void 0 ? 1 : t0, t1;
	$[4] !== children || $[5] !== ref || $[6] !== restProps ? (t1 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayerChildren, {
		...restProps,
		ref,
		children
	}), $[4] = children, $[5] = ref, $[6] = restProps, $[7] = t1) : t1 = $[7];
	let t2;
	return $[8] !== t1 || $[9] !== zOffset ? (t2 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayerProvider, {
		zOffset,
		children: t1
	}), $[8] = t1, $[9] = zOffset, $[10] = t2) : t2 = $[10], t2;
});
function inlineBaseStyle() {
	return {
		lineHeight: "0",
		"&&:not([hidden])": { display: "block" },
		"& > div": {
			display: "inline-block",
			verticalAlign: "middle"
		}
	};
}
function inlineSpaceStyle(props) {
	let { media, space } = getTheme_v2(props.theme);
	return _responsive(media, props.$space, (spaceIndex) => {
		let _space = rem(spaceIndex === .5 ? space[1] / 2 : space[spaceIndex]);
		return {
			margin: `-${_space} 0 0 -${_space}`,
			"& > div": { padding: `${_space} 0 0 ${_space}` }
		};
	});
}
var StyledInline = /* @__PURE__ */ Mt(Box).withConfig({
	displayName: "StyledInline",
	componentId: "sc-zsbqh7-0"
})(inlineBaseStyle, inlineSpaceStyle);
var Inline = (0, import_react.forwardRef)(function Inline(props, ref) {
	let $ = (0, import_dist.c)(16), as, childrenProp, deprecated_space, gap, restProps;
	$[0] === props ? (as = $[1], childrenProp = $[2], deprecated_space = $[3], gap = $[4], restProps = $[5]) : ({as, children: childrenProp, gap, space: deprecated_space, ...restProps} = props, $[0] = props, $[1] = as, $[2] = childrenProp, $[3] = deprecated_space, $[4] = gap, $[5] = restProps);
	let spacing = gap === void 0 ? deprecated_space : gap, t0;
	$[6] === childrenProp ? t0 = $[7] : (t0 = import_react.Children.map(childrenProp, _temp$4), $[6] = childrenProp, $[7] = t0);
	let children = t0, t1;
	$[8] === spacing ? t1 = $[9] : (t1 = _getArrayProp(spacing), $[8] = spacing, $[9] = t1);
	let t2 = ref, t3;
	return $[10] !== as || $[11] !== children || $[12] !== restProps || $[13] !== t1 || $[14] !== t2 ? (t3 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledInline, {
		"data-ui": "Inline",
		...restProps,
		$space: t1,
		forwardedAs: as,
		ref: t2,
		children
	}), $[10] = as, $[11] = children, $[12] = restProps, $[13] = t1, $[14] = t2, $[15] = t3) : t3 = $[15], t3;
});
function _temp$4(child) {
	return child && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: child });
}
function kbdStyle() {
	return jt`--card-bg-color:var(--card-kbd-bg-color);--card-border-color:var(--card-kbd-border-color);--card-fg-color:var(--card-kbd-fg-color);box-shadow:inset 0 0 0 1px var(--card-border-color);background:var(--card-bg-color);font:inherit;vertical-align:top;&:not([hidden]){display:inline-block;}`;
}
var StyledKBD = /* @__PURE__ */ Mt.kbd.withConfig({
	displayName: "StyledKBD",
	componentId: "sc-xzhxcv-0"
})(responsiveRadiusStyle, kbdStyle);
var KBD = (0, import_react.forwardRef)(function KBD(props, ref) {
	let $ = (0, import_dist.c)(19), children, restProps, t0, t1, t2;
	$[0] === props ? (children = $[1], restProps = $[2], t0 = $[3], t1 = $[4], t2 = $[5]) : ({children, fontSize: t0, padding: t1, radius: t2, ...restProps} = props, $[0] = props, $[1] = children, $[2] = restProps, $[3] = t0, $[4] = t1, $[5] = t2);
	let fontSize = t0 === void 0 ? 0 : t0, padding = t1 === void 0 ? 1 : t1, radius = t2 === void 0 ? 2 : t2, t3;
	$[6] === radius ? t3 = $[7] : (t3 = _getArrayProp(radius), $[6] = radius, $[7] = t3);
	let t4;
	$[8] !== children || $[9] !== fontSize ? (t4 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
		as: "span",
		size: fontSize,
		weight: "semibold",
		children
	}), $[8] = children, $[9] = fontSize, $[10] = t4) : t4 = $[10];
	let t5;
	$[11] !== padding || $[12] !== t4 ? (t5 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
		as: "span",
		padding,
		children: t4
	}), $[11] = padding, $[12] = t4, $[13] = t5) : t5 = $[13];
	let t6;
	return $[14] !== ref || $[15] !== restProps || $[16] !== t3 || $[17] !== t5 ? (t6 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledKBD, {
		"data-ui": "KBD",
		...restProps,
		$radius: t3,
		ref,
		children: t5
	}), $[14] = ref, $[15] = restProps, $[16] = t3, $[17] = t5, $[18] = t6) : t6 = $[18], t6;
});
var StyledHotkeys = Mt.kbd.withConfig({
	displayName: "StyledHotkeys",
	componentId: "sc-1soubc-0"
})`font:inherit;padding:1px;&:not([hidden]){display:block;}`;
var Key = Mt(KBD).withConfig({
	displayName: "Key",
	componentId: "sc-1soubc-1"
})`&:not([hidden]){display:block;}`;
var Hotkeys = (0, import_react.forwardRef)(function Hotkeys(props, ref) {
	let $ = (0, import_dist.c)(27), fontSize, gap, keys, padding, radius, restProps, t0;
	$[0] === props ? (fontSize = $[1], gap = $[2], keys = $[3], padding = $[4], radius = $[5], restProps = $[6], t0 = $[7]) : ({fontSize, gap, keys, padding, radius, space: t0, ...restProps} = props, $[0] = props, $[1] = fontSize, $[2] = gap, $[3] = keys, $[4] = padding, $[5] = radius, $[6] = restProps, $[7] = t0);
	let t1 = gap === void 0 ? t0 === void 0 ? .5 : t0 : gap, t2;
	$[8] === t1 ? t2 = $[9] : (t2 = _getArrayProp(t1), $[8] = t1, $[9] = t2);
	let spacing = t2;
	if (!keys || keys.length === 0) {
		let t3;
		return $[10] === Symbol.for("react.memo_cache_sentinel") ? (t3 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {}), $[10] = t3) : t3 = $[10], t3;
	}
	let t3;
	if ($[11] !== fontSize || $[12] !== keys || $[13] !== padding || $[14] !== radius) {
		let t4;
		$[16] !== fontSize || $[17] !== padding || $[18] !== radius ? (t4 = (key, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Key, {
			fontSize,
			padding,
			radius,
			children: key
		}, i), $[16] = fontSize, $[17] = padding, $[18] = radius, $[19] = t4) : t4 = $[19], t3 = keys.map(t4), $[11] = fontSize, $[12] = keys, $[13] = padding, $[14] = radius, $[15] = t3;
	} else t3 = $[15];
	let t4;
	$[20] !== spacing || $[21] !== t3 ? (t4 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Inline, {
		as: "span",
		gap: spacing,
		children: t3
	}), $[20] = spacing, $[21] = t3, $[22] = t4) : t4 = $[22];
	let t5;
	return $[23] !== ref || $[24] !== restProps || $[25] !== t4 ? (t5 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledHotkeys, {
		"data-ui": "Hotkeys",
		...restProps,
		ref,
		children: t4
	}), $[23] = ref, $[24] = restProps, $[25] = t4, $[26] = t5) : t5 = $[26], t5;
});
var MenuContext = createGlobalScopedContext("@sanity/ui/context/menu", null);
/**
* @internal
*/
function _isFocusable(element) {
	return isHTMLAnchorElement(element) && element.getAttribute("data-disabled") !== "true" || isHTMLButtonElement(element) && !element.disabled;
}
/**
* @internal
*/
function _getFocusableElements(elements) {
	return elements.filter(_isFocusable);
}
function _getDOMPath(rootElement, el) {
	let path = [], e = el;
	for (; e !== rootElement;) {
		let parentElement = e.parentElement;
		if (!parentElement) return path;
		let index = Array.from(parentElement.childNodes).indexOf(e);
		if (path.unshift(index), parentElement === rootElement) return path;
		e = parentElement;
	}
	return path;
}
var EMPTY_PATH = [];
/**
* @internal
*/
function _sortElements(rootElement, elements) {
	if (!rootElement) return;
	let map = /* @__PURE__ */ new WeakMap();
	for (let el of elements) map.set(el, _getDOMPath(rootElement, el));
	let _sort = (a, b) => {
		let _a = map.get(a) || EMPTY_PATH, _b = map.get(b) || EMPTY_PATH, len = Math.max(_a.length, _b.length);
		for (let i = 0; i < len; i += 1) {
			let aIndex = _a[i] || -1, bIndex = _b[i] || -1;
			if (aIndex !== bIndex) return aIndex - bIndex;
		}
		return 0;
	};
	elements.sort(_sort);
}
/**
* This controller is responsible for controlling UI menu state.
*
* @internal
*/
function useMenuController(props) {
	let $ = (0, import_dist.c)(21), { onKeyDown, originElement, shouldFocus, rootElementRef } = props, t0;
	$[0] === Symbol.for("react.memo_cache_sentinel") ? (t0 = [], $[0] = t0) : t0 = $[0];
	let elementsRef = (0, import_react.useRef)(t0), [activeIndex, _setActiveIndex] = (0, import_react.useState)(-1), activeIndexRef = (0, import_react.useRef)(activeIndex), [activeElement, setActiveElement] = (0, import_react.useState)(null), t1;
	$[1] === Symbol.for("react.memo_cache_sentinel") ? (t1 = (nextActiveIndex) => {
		_setActiveIndex(nextActiveIndex), activeIndexRef.current = nextActiveIndex, setActiveElement(elementsRef.current[nextActiveIndex] || null);
	}, $[1] = t1) : t1 = $[1];
	let setActiveIndex = t1, t2;
	$[2] === rootElementRef ? t2 = $[3] : (t2 = (element, selected) => {
		if (!element) return _temp$3;
		if (elementsRef.current.indexOf(element) === -1 && (elementsRef.current.push(element), _sortElements(rootElementRef.current, elementsRef.current)), selected) {
			let selectedIndex = elementsRef.current.indexOf(element);
			setActiveIndex(selectedIndex);
		}
		return () => {
			let idx = elementsRef.current.indexOf(element);
			idx > -1 && elementsRef.current.splice(idx, 1);
		};
	}, $[2] = rootElementRef, $[3] = t2);
	let mount = t2, t3;
	$[4] !== onKeyDown || $[5] !== originElement ? (t3 = (event) => {
		if (event.key === "Tab") {
			originElement && originElement.focus();
			return;
		}
		if (event.key === "Home") {
			event.preventDefault(), event.stopPropagation();
			let el = _getFocusableElements(elementsRef.current)[0];
			if (!el) return;
			let currentIndex = elementsRef.current.indexOf(el);
			setActiveIndex(currentIndex);
			return;
		}
		if (event.key === "End") {
			event.preventDefault(), event.stopPropagation();
			let focusableElements_0 = _getFocusableElements(elementsRef.current), el_0 = focusableElements_0[focusableElements_0.length - 1];
			if (!el_0) return;
			let currentIndex_0 = elementsRef.current.indexOf(el_0);
			setActiveIndex(currentIndex_0);
			return;
		}
		if (event.key === "ArrowUp") {
			event.preventDefault(), event.stopPropagation();
			let focusableElements_1 = _getFocusableElements(elementsRef.current), focusableLen = focusableElements_1.length;
			if (focusableLen === 0) return;
			let focusedElement = elementsRef.current[activeIndexRef.current], focusedIndex = focusableElements_1.indexOf(focusedElement);
			focusedIndex = (focusedIndex - 1 + focusableLen) % focusableLen;
			let el_1 = focusableElements_1[focusedIndex], currentIndex_1 = elementsRef.current.indexOf(el_1);
			setActiveIndex(currentIndex_1);
			return;
		}
		if (event.key === "ArrowDown") {
			event.preventDefault(), event.stopPropagation();
			let focusableElements_2 = _getFocusableElements(elementsRef.current), focusableLen_0 = focusableElements_2.length;
			if (focusableLen_0 === 0) return;
			let focusedElement_0 = elementsRef.current[activeIndexRef.current], focusedIndex_0 = focusableElements_2.indexOf(focusedElement_0);
			focusedIndex_0 = (focusedIndex_0 + 1) % focusableLen_0;
			let el_2 = focusableElements_2[focusedIndex_0], currentIndex_2 = elementsRef.current.indexOf(el_2);
			setActiveIndex(currentIndex_2);
			return;
		}
		onKeyDown && onKeyDown(event);
	}, $[4] = onKeyDown, $[5] = originElement, $[6] = t3) : t3 = $[6];
	let handleKeyDown = t3, t4;
	$[7] === Symbol.for("react.memo_cache_sentinel") ? (t4 = (event_0) => {
		let element_0 = event_0.currentTarget, currentIndex_3 = elementsRef.current.indexOf(element_0);
		setActiveIndex(currentIndex_3);
	}, $[7] = t4) : t4 = $[7];
	let handleItemMouseEnter = t4, t5;
	$[8] === rootElementRef ? t5 = $[9] : (t5 = () => {
		setActiveIndex(-2), rootElementRef.current?.focus();
	}, $[8] = rootElementRef, $[9] = t5);
	let handleItemMouseLeave = t5, t6, t7;
	$[10] !== activeIndex || $[11] !== rootElementRef || $[12] !== shouldFocus ? (t6 = () => {
		if (!rootElementRef.current) return;
		let rafId = requestAnimationFrame(() => {
			if (activeIndex === -1) {
				if (shouldFocus === "first") {
					let el_3 = _getFocusableElements(elementsRef.current)[0];
					if (el_3) {
						let currentIndex_4 = elementsRef.current.indexOf(el_3);
						setActiveIndex(currentIndex_4);
					}
				}
				if (shouldFocus === "last") {
					let focusableElements_4 = _getFocusableElements(elementsRef.current), el_4 = focusableElements_4[focusableElements_4.length - 1];
					if (el_4) {
						let currentIndex_5 = elementsRef.current.indexOf(el_4);
						setActiveIndex(currentIndex_5);
					}
				}
				return;
			}
			(elementsRef.current[activeIndex] || null)?.focus();
		});
		return () => cancelAnimationFrame(rafId);
	}, t7 = [
		activeIndex,
		rootElementRef,
		setActiveIndex,
		shouldFocus
	], $[10] = activeIndex, $[11] = rootElementRef, $[12] = shouldFocus, $[13] = t6, $[14] = t7) : (t6 = $[13], t7 = $[14]), (0, import_react.useEffect)(t6, t7);
	let t8;
	return $[15] !== activeElement || $[16] !== activeIndex || $[17] !== handleItemMouseLeave || $[18] !== handleKeyDown || $[19] !== mount ? (t8 = {
		activeElement,
		activeIndex,
		handleItemMouseEnter,
		handleItemMouseLeave,
		handleKeyDown,
		mount
	}, $[15] = activeElement, $[16] = activeIndex, $[17] = handleItemMouseLeave, $[18] = handleKeyDown, $[19] = mount, $[20] = t8) : t8 = $[20], t8;
}
function _temp$3() {}
var StyledMenu = Mt(Box).withConfig({
	displayName: "StyledMenu",
	componentId: "sc-xvs9y5-0"
})`outline:none;overflow:auto;`;
var Menu = (0, import_react.forwardRef)(function Menu(props, forwardedRef) {
	let $ = (0, import_dist.c)(50), _shouldFocus, children, gap, onClickOutside, onEscape, onItemClick, onItemSelect, onKeyDown, originElement, registerElement, restProps, t0, t1;
	if ($[0] !== props) {
		let { children: t2, focusFirst, focusLast, onClickOutside: t3, onEscape: t4, onItemClick: t5, onItemSelect: t6, onKeyDown: t7, originElement: t8, padding: t9, registerElement: t10, shouldFocus: t11, gap: t12, space: t13, ...t14 } = props;
		children = t2, onClickOutside = t3, onEscape = t4, onItemClick = t5, onItemSelect = t6, onKeyDown = t7, originElement = t8, t0 = t9, registerElement = t10, _shouldFocus = t11, gap = t12, t1 = t13, restProps = t14, $[0] = props, $[1] = _shouldFocus, $[2] = children, $[3] = gap, $[4] = onClickOutside, $[5] = onEscape, $[6] = onItemClick, $[7] = onItemSelect, $[8] = onKeyDown, $[9] = originElement, $[10] = registerElement, $[11] = restProps, $[12] = t0, $[13] = t1;
	} else _shouldFocus = $[1], children = $[2], gap = $[3], onClickOutside = $[4], onEscape = $[5], onItemClick = $[6], onItemSelect = $[7], onKeyDown = $[8], originElement = $[9], registerElement = $[10], restProps = $[11], t0 = $[12], t1 = $[13];
	let padding = t0 === void 0 ? 1 : t0, spacing = gap === void 0 ? t1 === void 0 ? 1 : t1 : gap, shouldFocus = _shouldFocus ?? (props.focusFirst && "first" || props.focusLast && "last" || null), ref = (0, import_react.useRef)(null), t2;
	$[14] === Symbol.for("react.memo_cache_sentinel") ? (t2 = () => ref.current, $[14] = t2) : t2 = $[14], (0, import_react.useImperativeHandle)(forwardedRef, t2);
	let { isTopLayer } = useLayer(), t3;
	$[15] !== onKeyDown || $[16] !== originElement || $[17] !== shouldFocus ? (t3 = {
		onKeyDown,
		originElement,
		shouldFocus,
		rootElementRef: ref
	}, $[15] = onKeyDown, $[16] = originElement, $[17] = shouldFocus, $[18] = t3) : t3 = $[18];
	let { activeElement, activeIndex, handleItemMouseEnter, handleItemMouseLeave, handleKeyDown, mount } = useMenuController(t3), unregisterElementRef = (0, import_react.useRef)(null), t4;
	$[19] === registerElement ? t4 = $[20] : (t4 = (el) => {
		unregisterElementRef.current &&= (unregisterElementRef.current(), null), ref.current = el, ref.current && registerElement && (unregisterElementRef.current = registerElement(ref.current));
	}, $[19] = registerElement, $[20] = t4);
	let handleRefChange = t4, t5, t6;
	$[21] !== activeIndex || $[22] !== onItemSelect ? (t5 = () => {
		onItemSelect && onItemSelect(activeIndex);
	}, t6 = [activeIndex, onItemSelect], $[21] = activeIndex, $[22] = onItemSelect, $[23] = t5, $[24] = t6) : (t5 = $[23], t6 = $[24]), (0, import_react.useEffect)(t5, t6);
	let t7;
	$[25] === Symbol.for("react.memo_cache_sentinel") ? (t7 = () => [ref.current], $[25] = t7) : t7 = $[25], useClickOutsideEvent(isTopLayer && onClickOutside, t7);
	let t8;
	$[26] !== isTopLayer || $[27] !== onEscape ? (t8 = (event) => {
		isTopLayer && event.key === "Escape" && (event.stopPropagation(), onEscape && onEscape());
	}, $[26] = isTopLayer, $[27] = onEscape, $[28] = t8) : t8 = $[28], useGlobalKeyDown(t8);
	let t9;
	$[29] !== activeElement || $[30] !== handleItemMouseEnter || $[31] !== handleItemMouseLeave || $[32] !== mount || $[33] !== onClickOutside || $[34] !== onEscape || $[35] !== onItemClick || $[36] !== registerElement ? (t9 = {
		version: 2,
		activeElement,
		mount,
		onClickOutside,
		onEscape,
		onItemClick,
		onItemMouseEnter: handleItemMouseEnter,
		onItemMouseLeave: handleItemMouseLeave,
		registerElement
	}, $[29] = activeElement, $[30] = handleItemMouseEnter, $[31] = handleItemMouseLeave, $[32] = mount, $[33] = onClickOutside, $[34] = onEscape, $[35] = onItemClick, $[36] = registerElement, $[37] = t9) : t9 = $[37];
	let value = t9, t10;
	$[38] !== children || $[39] !== spacing ? (t10 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stack, {
		gap: spacing,
		children
	}), $[38] = children, $[39] = spacing, $[40] = t10) : t10 = $[40];
	let t11;
	$[41] !== handleKeyDown || $[42] !== handleRefChange || $[43] !== padding || $[44] !== restProps || $[45] !== t10 ? (t11 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledMenu, {
		"data-ui": "Menu",
		...restProps,
		onKeyDown: handleKeyDown,
		padding,
		ref: handleRefChange,
		role: "menu",
		tabIndex: -1,
		children: t10
	}), $[41] = handleKeyDown, $[42] = handleRefChange, $[43] = padding, $[44] = restProps, $[45] = t10, $[46] = t11) : t11 = $[46];
	let t12;
	return $[47] !== t11 || $[48] !== value ? (t12 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuContext.Provider, {
		value,
		children: t11
	}), $[47] = t11, $[48] = value, $[49] = t12) : t12 = $[49], t12;
});
var MenuDivider = Mt.hr.withConfig({
	displayName: "MenuDivider",
	componentId: "sc-sxuath-0"
})`height:1px;border:0;background:var(--card-hairline-soft-color);margin:0;`;
function selectableBaseStyle() {
	return jt`background-color:inherit;color:inherit;&[data-as='button']{-webkit-font-smoothing:inherit;appearance:none;outline:none;font:inherit;text-align:inherit;border:0;width:-moz-available;width:-webkit-fill-available;width:stretch;}&[data-as='a']{text-decoration:none;}`;
}
function selectableColorStyle(props) {
	let { $tone } = props, { color, style } = getTheme_v2(props.theme), tone = color.selectable[$tone];
	return jt`${_cardColorStyle(color, tone.enabled)} background-color:var(--card-bg-color);color:var(--card-fg-color);outline:none;&[data-as='button']{&:disabled{${_cardColorStyle(color, tone.disabled)}}&:not(:disabled){&[aria-pressed='true']{${_cardColorStyle(color, tone.pressed)}}&[data-selected],&[aria-selected='true'] > &{${_cardColorStyle(color, tone.selected)}}@media (hover:hover){&:not([data-selected]){&[data-hovered],&:hover{${_cardColorStyle(color, tone.hovered)}}&:active{${_cardColorStyle(color, tone.pressed)}}}}}}&[data-as='a']{&[data-disabled]{${_cardColorStyle(color, tone.disabled)}}&:not([data-disabled]){&[data-pressed]{${_cardColorStyle(color, tone.pressed)}}&[data-selected]{${_cardColorStyle(color, tone.selected)}}@media (hover:hover){&:not([data-selected]){&[data-hovered],&:hover{${_cardColorStyle(color, tone.hovered)}}&:active{${_cardColorStyle(color, tone.pressed)}}}}}}${style?.card?.root}`;
}
/**
* @internal
*/
var Selectable = /* @__PURE__ */ Mt(Box).withConfig({
	displayName: "Selectable",
	componentId: "sc-njdnrn-0"
})(responsiveRadiusStyle, selectableBaseStyle, selectableColorStyle);
function useMenu() {
	let value = (0, import_react.useContext)(MenuContext);
	if (!value) throw Error("useMenu(): missing context value");
	if (!isRecord$1(value) || value.version !== 2) throw Error("useMenu(): the context value is not compatible");
	return value;
}
/**
* @public
*/
var MenuGroup = function MenuGroup(props) {
	let $ = (0, import_dist.c)(82), IconComponent, children, gap, menuProps, onClick, popover, restProps, t0, t1, t2, t3, t4, t5, text;
	$[0] === props ? (IconComponent = $[1], children = $[2], gap = $[3], menuProps = $[4], onClick = $[5], popover = $[6], restProps = $[7], t0 = $[8], t1 = $[9], t2 = $[10], t3 = $[11], t4 = $[12], t5 = $[13], text = $[14]) : ({as: t0, children, fontSize: t1, icon: IconComponent, menu: menuProps, onClick, padding: t2, popover, radius: t3, gap, space: t4, text, tone: t5, ...restProps} = props, $[0] = props, $[1] = IconComponent, $[2] = children, $[3] = gap, $[4] = menuProps, $[5] = onClick, $[6] = popover, $[7] = restProps, $[8] = t0, $[9] = t1, $[10] = t2, $[11] = t3, $[12] = t4, $[13] = t5, $[14] = text);
	let as = t0 === void 0 ? "button" : t0, fontSize = t1 === void 0 ? 1 : t1, padding = t2 === void 0 ? 3 : t2, radius = t3 === void 0 ? 2 : t3, deprecated_space = t4 === void 0 ? 3 : t4, tone = t5 === void 0 ? "default" : t5, spacing = gap === void 0 ? deprecated_space : gap, menu = useMenu(), { scheme } = useRootTheme(), { activeElement, mount, onClickOutside, onEscape, onItemClick, onItemMouseEnter: _onItemMouseEnter, registerElement } = menu, onItemMouseEnter = _onItemMouseEnter ?? menu.onItemMouseEnter, [rootElement, setRootElement] = (0, import_react.useState)(null), [open, setOpen] = (0, import_react.useState)(!1), [shouldFocus, setShouldFocus] = (0, import_react.useState)(null), active = !!activeElement && activeElement === rootElement, [withinMenu, setWithinMenu] = (0, import_react.useState)(!1), t6;
	$[15] === onItemMouseEnter ? t6 = $[16] : (t6 = (event) => {
		setWithinMenu(!1), onItemMouseEnter(event), setOpen(!0);
	}, $[15] = onItemMouseEnter, $[16] = t6);
	let handleMouseEnter = t6, t7;
	$[17] === rootElement ? t7 = $[18] : (t7 = (event_0) => {
		event_0.key === "ArrowLeft" && (event_0.stopPropagation(), setOpen(!1), requestAnimationFrame(() => {
			rootElement?.focus();
		}));
	}, $[17] = rootElement, $[18] = t7);
	let handleMenuKeyDown = t7, t8;
	$[19] === onClick ? t8 = $[20] : (t8 = (event_1) => {
		onClick?.(event_1), setShouldFocus("first"), setOpen(!0);
	}, $[19] = onClick, $[20] = t8);
	let handleClick = t8, t9;
	$[21] === onItemClick ? t9 = $[22] : (t9 = () => {
		setOpen(!1), onItemClick?.();
	}, $[21] = onItemClick, $[22] = t9);
	let handleChildItemClick = t9, t10;
	$[23] === Symbol.for("react.memo_cache_sentinel") ? (t10 = () => setWithinMenu(!0), $[23] = t10) : t10 = $[23];
	let handleMenuMouseEnter = t10, t11, t12;
	$[24] !== mount || $[25] !== rootElement ? (t11 = () => mount(rootElement), t12 = [mount, rootElement], $[24] = mount, $[25] = rootElement, $[26] = t11, $[27] = t12) : (t11 = $[26], t12 = $[27]), (0, import_react.useEffect)(t11, t12);
	let t13, t14;
	$[28] === active ? (t13 = $[29], t14 = $[30]) : (t13 = () => {
		active || setOpen(!1);
	}, t14 = [active], $[28] = active, $[29] = t13, $[30] = t14), (0, import_react.useEffect)(t13, t14);
	let t15, t16;
	$[31] === open ? (t15 = $[32], t16 = $[33]) : (t15 = () => {
		open || setWithinMenu(!1);
	}, t16 = [open], $[31] = open, $[32] = t15, $[33] = t16), (0, import_react.useEffect)(t15, t16);
	let t17, t18;
	$[34] === shouldFocus ? (t17 = $[35], t18 = $[36]) : (t17 = () => {
		if (!shouldFocus) return;
		let rafId = requestAnimationFrame(() => setShouldFocus(null));
		return () => cancelAnimationFrame(rafId);
	}, t18 = [shouldFocus], $[34] = shouldFocus, $[35] = t17, $[36] = t18), (0, import_react.useEffect)(t17, t18);
	let t19;
	$[37] !== children || $[38] !== handleChildItemClick || $[39] !== handleMenuKeyDown || $[40] !== menuProps || $[41] !== onClickOutside || $[42] !== onEscape || $[43] !== registerElement || $[44] !== shouldFocus ? (t19 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
		...menuProps,
		onClickOutside,
		onEscape,
		onItemClick: handleChildItemClick,
		onKeyDown: handleMenuKeyDown,
		onMouseEnter: handleMenuMouseEnter,
		registerElement,
		shouldFocus,
		children
	}), $[37] = children, $[38] = handleChildItemClick, $[39] = handleMenuKeyDown, $[40] = menuProps, $[41] = onClickOutside, $[42] = onEscape, $[43] = registerElement, $[44] = shouldFocus, $[45] = t19) : t19 = $[45];
	let childMenu = t19, t20;
	$[46] === Symbol.for("react.memo_cache_sentinel") ? (t20 = (event_2) => {
		let target = event_2.currentTarget;
		if (document.activeElement === target && event_2.key === "ArrowRight") {
			setShouldFocus("first"), setOpen(!0), setWithinMenu(!0);
			return;
		}
	}, $[46] = t20) : t20 = $[46];
	let handleKeyDown = t20, t21 = as === "button" ? withinMenu : void 0, t22 = as === "button" ? void 0 : withinMenu, t23 = !withinMenu && active ? "" : void 0, t24;
	$[47] === radius ? t24 = $[48] : (t24 = _getArrayProp(radius), $[47] = radius, $[48] = t24);
	let t25 = as === "button" ? "button" : void 0, t26;
	$[49] !== IconComponent || $[50] !== fontSize ? (t26 = IconComponent && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
		size: fontSize,
		children: [(0, import_react.isValidElement)(IconComponent) && IconComponent, (0, import_react_is$1.isValidElementType)(IconComponent) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconComponent, {})]
	}), $[49] = IconComponent, $[50] = fontSize, $[51] = t26) : t26 = $[51];
	let t27;
	$[52] !== fontSize || $[53] !== text ? (t27 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
		flex: 1,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
			size: fontSize,
			textOverflow: "ellipsis",
			weight: "medium",
			children: text
		})
	}), $[52] = fontSize, $[53] = text, $[54] = t27) : t27 = $[54];
	let t28;
	$[55] === Symbol.for("react.memo_cache_sentinel") ? (t28 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRightIcon, {}), $[55] = t28) : t28 = $[55];
	let t29;
	$[56] === fontSize ? t29 = $[57] : (t29 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
		size: fontSize,
		children: t28
	}), $[56] = fontSize, $[57] = t29);
	let t30;
	$[58] !== padding || $[59] !== spacing || $[60] !== t26 || $[61] !== t27 || $[62] !== t29 ? (t30 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
		gap: spacing,
		padding,
		children: [
			t26,
			t27,
			t29
		]
	}), $[58] = padding, $[59] = spacing, $[60] = t26, $[61] = t27, $[62] = t29, $[63] = t30) : t30 = $[63];
	let t31;
	$[64] !== as || $[65] !== handleClick || $[66] !== handleMouseEnter || $[67] !== restProps || $[68] !== scheme || $[69] !== t21 || $[70] !== t22 || $[71] !== t23 || $[72] !== t24 || $[73] !== t25 || $[74] !== t30 || $[75] !== tone ? (t31 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Selectable, {
		"data-as": as,
		"data-ui": "MenuGroup",
		forwardedAs: as,
		...restProps,
		"aria-pressed": t21,
		"data-pressed": t22,
		"data-selected": t23,
		$radius: t24,
		$tone: tone,
		$scheme: scheme,
		onClick: handleClick,
		onKeyDown: handleKeyDown,
		onMouseEnter: handleMouseEnter,
		ref: setRootElement,
		tabIndex: -1,
		type: t25,
		children: t30
	}), $[64] = as, $[65] = handleClick, $[66] = handleMouseEnter, $[67] = restProps, $[68] = scheme, $[69] = t21, $[70] = t22, $[71] = t23, $[72] = t24, $[73] = t25, $[74] = t30, $[75] = tone, $[76] = t31) : t31 = $[76];
	let t32;
	return $[77] !== childMenu || $[78] !== open || $[79] !== popover || $[80] !== t31 ? (t32 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Popover, {
		...popover,
		content: childMenu,
		"data-ui": "MenuGroup__popover",
		open,
		children: t31
	}), $[77] = childMenu, $[78] = open, $[79] = popover, $[80] = t31, $[81] = t32) : t32 = $[81], t32;
};
var MenuItem = (0, import_react.forwardRef)(function MenuItem(props, forwardedRef) {
	let $ = (0, import_dist.c)(76), IconComponent, IconRightComponent, children, disabled, gap, hotkeys, onClick, paddingBottom, paddingLeft, paddingRight, paddingTop, paddingX, paddingY, pressed, restProps, selectedProp, t0, t1, t2, t3, t4, t5, text;
	$[0] === props ? (IconComponent = $[1], IconRightComponent = $[2], children = $[3], disabled = $[4], gap = $[5], hotkeys = $[6], onClick = $[7], paddingBottom = $[8], paddingLeft = $[9], paddingRight = $[10], paddingTop = $[11], paddingX = $[12], paddingY = $[13], pressed = $[14], restProps = $[15], selectedProp = $[16], t0 = $[17], t1 = $[18], t2 = $[19], t3 = $[20], t4 = $[21], t5 = $[22], text = $[23]) : ({as: t0, children, disabled, fontSize: t1, hotkeys, icon: IconComponent, iconRight: IconRightComponent, onClick, padding: t2, paddingX, paddingY, paddingTop, paddingRight, paddingBottom, paddingLeft, pressed, radius: t3, selected: selectedProp, gap, space: t4, text, tone: t5, ...restProps} = props, $[0] = props, $[1] = IconComponent, $[2] = IconRightComponent, $[3] = children, $[4] = disabled, $[5] = gap, $[6] = hotkeys, $[7] = onClick, $[8] = paddingBottom, $[9] = paddingLeft, $[10] = paddingRight, $[11] = paddingTop, $[12] = paddingX, $[13] = paddingY, $[14] = pressed, $[15] = restProps, $[16] = selectedProp, $[17] = t0, $[18] = t1, $[19] = t2, $[20] = t3, $[21] = t4, $[22] = t5, $[23] = text);
	let as = t0 === void 0 ? "button" : t0, fontSize = t1 === void 0 ? 1 : t1, padding = t2 === void 0 ? 3 : t2, radius = t3 === void 0 ? 2 : t3, deprecated_space = t4 === void 0 ? 3 : t4, tone = t5 === void 0 ? "default" : t5, spacing = gap === void 0 ? deprecated_space : gap, { scheme } = useRootTheme(), menu = useMenu(), { activeElement, mount, onItemClick, onItemMouseEnter: _onItemMouseEnter, onItemMouseLeave: _onItemMouseLeave } = menu, onItemMouseEnter = _onItemMouseEnter ?? menu.onItemMouseEnter, onItemMouseLeave = _onItemMouseLeave ?? menu.onItemMouseLeave, [rootElement, setRootElement] = (0, import_react.useState)(null), active = !!activeElement && activeElement === rootElement, ref = (0, import_react.useRef)(null), t6;
	$[24] === Symbol.for("react.memo_cache_sentinel") ? (t6 = () => ref.current, $[24] = t6) : t6 = $[24], (0, import_react.useImperativeHandle)(forwardedRef, t6);
	let t7, t8;
	$[25] !== mount || $[26] !== rootElement || $[27] !== selectedProp ? (t7 = () => mount(rootElement, selectedProp), t8 = [
		mount,
		rootElement,
		selectedProp
	], $[25] = mount, $[26] = rootElement, $[27] = selectedProp, $[28] = t7, $[29] = t8) : (t7 = $[28], t8 = $[29]), (0, import_react.useEffect)(t7, t8);
	let t9;
	$[30] !== disabled || $[31] !== onClick || $[32] !== onItemClick ? (t9 = (event) => {
		disabled || (onClick && onClick(event), onItemClick && onItemClick());
	}, $[30] = disabled, $[31] = onClick, $[32] = onItemClick, $[33] = t9) : t9 = $[33];
	let handleClick = t9, t10;
	$[34] !== padding || $[35] !== paddingBottom || $[36] !== paddingLeft || $[37] !== paddingRight || $[38] !== paddingTop || $[39] !== paddingX || $[40] !== paddingY ? (t10 = {
		padding,
		paddingX,
		paddingY,
		paddingTop,
		paddingRight,
		paddingBottom,
		paddingLeft
	}, $[34] = padding, $[35] = paddingBottom, $[36] = paddingLeft, $[37] = paddingRight, $[38] = paddingTop, $[39] = paddingX, $[40] = paddingY, $[41] = t10) : t10 = $[41];
	let paddingProps = t10, t11;
	$[42] === fontSize ? t11 = $[43] : (t11 = _getArrayProp(fontSize).map(_temp$2), $[42] = fontSize, $[43] = t11);
	let hotkeysFontSize = t11, t12;
	$[44] === Symbol.for("react.memo_cache_sentinel") ? (t12 = (el) => {
		ref.current = el, setRootElement(el);
	}, $[44] = t12) : t12 = $[44];
	let setRef = t12, t13 = as !== "button" && pressed ? "" : void 0, t14 = active ? "" : void 0, t15 = disabled ? "" : void 0, t16;
	$[45] === radius ? t16 = $[46] : (t16 = _getArrayProp(radius), $[45] = radius, $[46] = t16);
	let t17;
	$[47] === Symbol.for("react.memo_cache_sentinel") ? (t17 = _getArrayProp(0), $[47] = t17) : t17 = $[47];
	let t18 = disabled ? "default" : tone, t19 = as === "button" ? "button" : void 0, t20;
	$[48] !== IconComponent || $[49] !== IconRightComponent || $[50] !== fontSize || $[51] !== hotkeys || $[52] !== hotkeysFontSize || $[53] !== paddingProps || $[54] !== spacing || $[55] !== text ? (t20 = (IconComponent || text || IconRightComponent) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
		as: "span",
		gap: spacing,
		align: "center",
		...paddingProps,
		children: [
			IconComponent && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
				size: fontSize,
				children: [(0, import_react.isValidElement)(IconComponent) && IconComponent, (0, import_react_is$1.isValidElementType)(IconComponent) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconComponent, {})]
			}),
			text && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
				flex: 1,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
					size: fontSize,
					textOverflow: "ellipsis",
					weight: "medium",
					children: text
				})
			}),
			hotkeys && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hotkeys, {
				fontSize: hotkeysFontSize,
				keys: hotkeys,
				style: {
					marginTop: -4,
					marginBottom: -4
				}
			}),
			IconRightComponent && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
				size: fontSize,
				children: [(0, import_react.isValidElement)(IconRightComponent) && IconRightComponent, (0, import_react_is$1.isValidElementType)(IconRightComponent) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconRightComponent, {})]
			})
		]
	}), $[48] = IconComponent, $[49] = IconRightComponent, $[50] = fontSize, $[51] = hotkeys, $[52] = hotkeysFontSize, $[53] = paddingProps, $[54] = spacing, $[55] = text, $[56] = t20) : t20 = $[56];
	let t21;
	$[57] !== children || $[58] !== paddingProps ? (t21 = children && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
		as: "span",
		...paddingProps,
		children
	}), $[57] = children, $[58] = paddingProps, $[59] = t21) : t21 = $[59];
	let t22;
	return $[60] !== as || $[61] !== disabled || $[62] !== handleClick || $[63] !== onItemMouseEnter || $[64] !== onItemMouseLeave || $[65] !== restProps || $[66] !== scheme || $[67] !== t13 || $[68] !== t14 || $[69] !== t15 || $[70] !== t16 || $[71] !== t18 || $[72] !== t19 || $[73] !== t20 || $[74] !== t21 ? (t22 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Selectable, {
		"data-ui": "MenuItem",
		role: "menuitem",
		...restProps,
		"data-pressed": t13,
		"data-selected": t14,
		"data-disabled": t15,
		forwardedAs: as,
		$radius: t16,
		$padding: t17,
		$tone: t18,
		$scheme: scheme,
		disabled,
		onClick: handleClick,
		onMouseEnter: onItemMouseEnter,
		onMouseLeave: onItemMouseLeave,
		ref: setRef,
		tabIndex: -1,
		type: t19,
		children: [t20, t21]
	}), $[60] = as, $[61] = disabled, $[62] = handleClick, $[63] = onItemMouseEnter, $[64] = onItemMouseLeave, $[65] = restProps, $[66] = scheme, $[67] = t13, $[68] = t14, $[69] = t15, $[70] = t16, $[71] = t18, $[72] = t19, $[73] = t20, $[74] = t21, $[75] = t22) : t22 = $[75], t22;
});
function _temp$2(s) {
	return s - 1;
}
var CustomButton = Mt(Button).withConfig({
	displayName: "CustomButton",
	componentId: "sc-whlh6p-0"
})`max-width:100%;`;
var Tab = (0, import_react.forwardRef)(function Tab(props, forwardedRef) {
	let $ = (0, import_dist.c)(30), focused, icon, id, label, onClick, onFocus, restProps, selected, t0, t1;
	$[0] === props ? (focused = $[1], icon = $[2], id = $[3], label = $[4], onClick = $[5], onFocus = $[6], restProps = $[7], selected = $[8], t0 = $[9], t1 = $[10]) : ({icon, id, focused, fontSize: t0, label, onClick, onFocus, padding: t1, selected, ...restProps} = props, $[0] = props, $[1] = focused, $[2] = icon, $[3] = id, $[4] = label, $[5] = onClick, $[6] = onFocus, $[7] = restProps, $[8] = selected, $[9] = t0, $[10] = t1);
	let fontSize = t0 === void 0 ? 1 : t0, padding = t1 === void 0 ? 2 : t1, ref = (0, import_react.useRef)(null), focusedRef = (0, import_react.useRef)(!1), t2;
	$[11] === Symbol.for("react.memo_cache_sentinel") ? (t2 = () => ref.current, $[11] = t2) : t2 = $[11], (0, import_react.useImperativeHandle)(forwardedRef, t2);
	let t3;
	$[12] === Symbol.for("react.memo_cache_sentinel") ? (t3 = () => {
		focusedRef.current = !1;
	}, $[12] = t3) : t3 = $[12];
	let handleBlur = t3, t4;
	$[13] === onFocus ? t4 = $[14] : (t4 = (event) => {
		focusedRef.current = !0, onFocus && onFocus(event);
	}, $[13] = onFocus, $[14] = t4);
	let handleFocus = t4, t5, t6;
	$[15] === focused ? (t5 = $[16], t6 = $[17]) : (t5 = () => {
		focused && !focusedRef.current && (ref.current && ref.current.focus(), focusedRef.current = !0);
	}, t6 = [focused], $[15] = focused, $[16] = t5, $[17] = t6), (0, import_react.useEffect)(t5, t6);
	let t7 = selected ? "true" : "false", t8 = selected ? 0 : -1, t9;
	return $[18] !== fontSize || $[19] !== handleFocus || $[20] !== icon || $[21] !== id || $[22] !== label || $[23] !== onClick || $[24] !== padding || $[25] !== restProps || $[26] !== selected || $[27] !== t7 || $[28] !== t8 ? (t9 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomButton, {
		"data-ui": "Tab",
		...restProps,
		"aria-selected": t7,
		fontSize,
		icon,
		id,
		mode: "bleed",
		onClick,
		onBlur: handleBlur,
		onFocus: handleFocus,
		padding,
		ref,
		role: "tab",
		selected,
		tabIndex: t8,
		text: label,
		type: "button"
	}), $[18] = fontSize, $[19] = handleFocus, $[20] = icon, $[21] = id, $[22] = label, $[23] = onClick, $[24] = padding, $[25] = restProps, $[26] = selected, $[27] = t7, $[28] = t8, $[29] = t9) : t9 = $[29], t9;
});
var CustomInline = Mt(Inline).withConfig({
	displayName: "CustomInline",
	componentId: "sc-tlz8f1-0"
})`& > div{display:inline-block;vertical-align:middle;max-width:100%;box-sizing:border-box;}`;
var TabList = (0, import_react.forwardRef)(function TabList(props, ref) {
	let $ = (0, import_dist.c)(15), childrenProp, restProps;
	$[0] === props ? (childrenProp = $[1], restProps = $[2]) : ({children: childrenProp, ...restProps} = props, $[0] = props, $[1] = childrenProp, $[2] = restProps);
	let [focusedIndex, setFocusedIndex] = (0, import_react.useState)(-1), t0;
	if ($[3] !== childrenProp || $[4] !== focusedIndex) {
		let children = import_react.Children.toArray(childrenProp).filter(import_react.isValidElement), t1;
		$[6] === focusedIndex ? t1 = $[7] : (t1 = (child, childIndex) => (0, import_react.cloneElement)(child, {
			focused: focusedIndex === childIndex,
			key: childIndex,
			onFocus: () => setFocusedIndex(childIndex)
		}), $[6] = focusedIndex, $[7] = t1), t0 = children.map(t1), $[3] = childrenProp, $[4] = focusedIndex, $[5] = t0;
	} else t0 = $[5];
	let tabs = t0, numTabs = tabs.length, t1;
	$[8] === numTabs ? t1 = $[9] : (t1 = (event) => {
		event.key === "ArrowLeft" && setFocusedIndex((prevIndex) => (prevIndex + numTabs - 1) % numTabs), event.key === "ArrowRight" && setFocusedIndex((prevIndex_0) => (prevIndex_0 + 1) % numTabs);
	}, $[8] = numTabs, $[9] = t1);
	let handleKeyDown = t1, t2;
	return $[10] !== handleKeyDown || $[11] !== ref || $[12] !== restProps || $[13] !== tabs ? (t2 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomInline, {
		"data-ui": "TabList",
		...restProps,
		onKeyDown: handleKeyDown,
		ref,
		role: "tablist",
		children: tabs
	}), $[10] = handleKeyDown, $[11] = ref, $[12] = restProps, $[13] = tabs, $[14] = t2) : t2 = $[14], t2;
});
var GRID_CSS = {
	"&&:not([hidden])": { display: "grid" },
	"&[data-as=\"ul\"],&[data-as=\"ol\"]": { listStyle: "none" }
};
var GRID_AUTO_COLUMS = {
	auto: "auto",
	min: "min-content",
	max: "max-content",
	fr: "minmax(0, 1fr)"
};
var GRID_AUTO_ROWS = {
	auto: "auto",
	min: "min-content",
	max: "max-content",
	fr: "minmax(0, 1fr)"
};
function responsiveGridStyle() {
	return [
		GRID_CSS,
		responsiveGridAutoFlowStyle,
		responsiveGridAutoRowsStyle,
		responsiveGridAutoColsStyle,
		responsiveGridColumnsStyle,
		responsiveGridRowsStyle,
		responsiveGridGapStyle,
		responsiveGridGapXStyle,
		responsiveGridGapYStyle
	];
}
function responsiveGridAutoFlowStyle(props) {
	let { media } = getTheme_v2(props.theme);
	return _responsive(media, props.$autoFlow, (autoFlow) => ({ gridAutoFlow: autoFlow }));
}
function responsiveGridAutoRowsStyle(props) {
	let { media } = getTheme_v2(props.theme);
	return _responsive(media, props.$autoRows, (autoRows) => ({ gridAutoRows: autoRows && GRID_AUTO_ROWS[autoRows] }));
}
function responsiveGridAutoColsStyle(props) {
	let { media } = getTheme_v2(props.theme);
	return _responsive(media, props.$autoCols, (autoCols) => ({ gridAutoColumns: autoCols && GRID_AUTO_COLUMS[autoCols] }));
}
function responsiveGridColumnsStyle(props) {
	let { media } = getTheme_v2(props.theme);
	return _responsive(media, props.$columns, (columns) => ({ gridTemplateColumns: columns && `repeat(${columns},minmax(0,1fr));` }));
}
function responsiveGridRowsStyle(props) {
	let { media } = getTheme_v2(props.theme);
	return _responsive(media, props.$rows, (rows) => ({ gridTemplateRows: rows && `repeat(${rows},minmax(0,1fr));` }));
}
function responsiveGridGapStyle(props) {
	let { media, space } = getTheme_v2(props.theme);
	return _responsive(media, props.$gap, (gap) => ({ gridGap: gap ? rem(space[gap]) : void 0 }));
}
function responsiveGridGapXStyle(props) {
	let { media, space } = getTheme_v2(props.theme);
	return _responsive(media, props.$gapX, (gapX) => ({ columnGap: gapX ? rem(space[gapX]) : void 0 }));
}
function responsiveGridGapYStyle(props) {
	let { media, space } = getTheme_v2(props.theme);
	return _responsive(media, props.$gapY, (gapY) => ({ rowGap: gapY ? rem(space[gapY]) : void 0 }));
}
var StyledGrid = /* @__PURE__ */ Mt(Box).withConfig({
	displayName: "StyledGrid",
	componentId: "sc-osmjhz-0"
})(responsiveGridStyle);
var Grid = (0, import_react.forwardRef)(function Grid(props, ref) {
	let $ = (0, import_dist.c)(44), as, autoCols, autoFlow, autoRows, children, columns, gap, gapX, gapY, gridTemplateColumns, gridTemplateRows, restProps, rows;
	$[0] === props ? (as = $[1], autoCols = $[2], autoFlow = $[3], autoRows = $[4], children = $[5], columns = $[6], gap = $[7], gapX = $[8], gapY = $[9], gridTemplateColumns = $[10], gridTemplateRows = $[11], restProps = $[12], rows = $[13]) : ({as, autoRows, autoCols, autoFlow, columns, gridTemplateColumns, gap, gapX, gapY, rows, gridTemplateRows, children, ...restProps} = props, $[0] = props, $[1] = as, $[2] = autoCols, $[3] = autoFlow, $[4] = autoRows, $[5] = children, $[6] = columns, $[7] = gap, $[8] = gapX, $[9] = gapY, $[10] = gridTemplateColumns, $[11] = gridTemplateRows, $[12] = restProps, $[13] = rows);
	let t0 = typeof as == "string" ? as : void 0, t1;
	$[14] === autoRows ? t1 = $[15] : (t1 = _getArrayProp(autoRows), $[14] = autoRows, $[15] = t1);
	let t2;
	$[16] === autoCols ? t2 = $[17] : (t2 = _getArrayProp(autoCols), $[16] = autoCols, $[17] = t2);
	let t3;
	$[18] === autoFlow ? t3 = $[19] : (t3 = _getArrayProp(autoFlow), $[18] = autoFlow, $[19] = t3);
	let t4 = gridTemplateColumns === void 0 ? columns : gridTemplateColumns, t5;
	$[20] === t4 ? t5 = $[21] : (t5 = _getArrayProp(t4), $[20] = t4, $[21] = t5);
	let t6;
	$[22] === gap ? t6 = $[23] : (t6 = _getArrayProp(gap), $[22] = gap, $[23] = t6);
	let t7;
	$[24] === gapX ? t7 = $[25] : (t7 = _getArrayProp(gapX), $[24] = gapX, $[25] = t7);
	let t8;
	$[26] === gapY ? t8 = $[27] : (t8 = _getArrayProp(gapY), $[26] = gapY, $[27] = t8);
	let t9 = gridTemplateRows === void 0 ? rows : gridTemplateRows, t10;
	$[28] === t9 ? t10 = $[29] : (t10 = _getArrayProp(t9), $[28] = t9, $[29] = t10);
	let t11;
	return $[30] !== as || $[31] !== children || $[32] !== ref || $[33] !== restProps || $[34] !== t0 || $[35] !== t1 || $[36] !== t10 || $[37] !== t2 || $[38] !== t3 || $[39] !== t5 || $[40] !== t6 || $[41] !== t7 || $[42] !== t8 ? (t11 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledGrid, {
		"data-as": t0,
		"data-ui": "Grid",
		...restProps,
		$autoRows: t1,
		$autoCols: t2,
		$autoFlow: t3,
		$columns: t5,
		$gap: t6,
		$gapX: t7,
		$gapY: t8,
		$rows: t10,
		forwardedAs: as,
		ref,
		children
	}), $[30] = as, $[31] = children, $[32] = ref, $[33] = restProps, $[34] = t0, $[35] = t1, $[36] = t10, $[37] = t2, $[38] = t3, $[39] = t5, $[40] = t6, $[41] = t7, $[42] = t8, $[43] = t11) : t11 = $[43], t11;
});
/**
* Returns true if a dark color scheme is preferred, false if a light color scheme is preferred or the preference is not known.
*
* @param getServerSnapshot - Only called during server-side rendering, and hydration if using hydrateRoot. Since the server environment doesn't have access to the DOM, we can't determine the current value of the media query and we assume `(prefers-color-scheme: light)` since it's the most common scheme (https://react.dev/reference/react/useSyncExternalStore#adding-support-for-server-rendering)
*
* If you persist the detected preference in a cookie or a header then you may implement your own server snapshot to read it.
* Chrome supports reading the `prefers-color-scheme` media query from a header if the server response: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-Prefers-Color-Scheme
* @example https://gist.github.com/stipsan/13c0cccf8dfc34f4b44bb1b984baf7df
*
* @public
*/
function usePrefersDark(t0) {
	return useMatchMedia("(prefers-color-scheme: dark)", t0 === void 0 ? _temp$1 : t0);
}
function _temp$1() {
	return !1;
}
/**
* @beta
*/
function useDelayedState(initialState) {
	let $ = (0, import_dist.c)(5), [state, setState] = (0, import_react.useState)(initialState), delayedAction = (0, import_react.useRef)(void 0), t0;
	$[0] === Symbol.for("react.memo_cache_sentinel") ? (t0 = (nextState, delay) => {
		let action = () => {
			setState(nextState);
		};
		if (delayedAction.current &&= (clearTimeout(delayedAction.current), void 0), !delay) return action();
		delayedAction.current = setTimeout(action, delay);
	}, $[0] = t0) : t0 = $[0];
	let onStateChange = t0, t1, t2;
	$[1] === Symbol.for("react.memo_cache_sentinel") ? (t1 = () => () => {
		delayedAction.current && clearTimeout(delayedAction.current);
	}, t2 = [], $[1] = t1, $[2] = t2) : (t1 = $[1], t2 = $[2]), (0, import_react.useEffect)(t1, t2);
	let t3;
	return $[3] === state ? t3 = $[4] : (t3 = [state, onStateChange], $[3] = state, $[4] = t3), t3;
}
var DEFAULT_FALLBACK_PLACEMENTS = {
	top: [
		"top-end",
		"top-start",
		"bottom",
		"left",
		"right"
	],
	"top-start": [
		"top",
		"top-end",
		"bottom-start",
		"left-start",
		"right-start"
	],
	"top-end": [
		"top",
		"top-start",
		"bottom-end",
		"left-end",
		"right-end"
	],
	bottom: [
		"bottom-end",
		"bottom-start",
		"top",
		"left",
		"right"
	],
	"bottom-start": [
		"bottom",
		"bottom-end",
		"top-start",
		"left-start",
		"right-start"
	],
	"bottom-end": [
		"bottom",
		"bottom-start",
		"top-end",
		"left-end",
		"right-end"
	],
	left: [
		"left-end",
		"left-start",
		"right",
		"top",
		"bottom"
	],
	"left-start": [
		"left",
		"left-end",
		"right-start",
		"top-start",
		"bottom-start"
	],
	"left-end": [
		"left",
		"left-start",
		"right-end",
		"top-end",
		"bottom-end"
	],
	right: [
		"right-end",
		"right-start",
		"left",
		"top",
		"bottom"
	],
	"right-start": [
		"right",
		"right-end",
		"left-start",
		"top-start",
		"bottom-start"
	],
	"right-end": [
		"right",
		"right-start",
		"left-end",
		"top-end",
		"bottom-end"
	]
};
var MotionCard = Mt(motion.create(Card)).withConfig({
	displayName: "MotionCard",
	componentId: "sc-gv6m6q-0"
})`will-change:transform;`;
var TooltipCard = (0, import_react.forwardRef)(function TooltipCard(props, ref) {
	let $ = (0, import_dist.c)(48), animate, arrow, arrowRef, arrowX, arrowY, children, originX, originY, padding, placement, radius, restProps, scheme, shadow, style;
	$[0] === props ? (animate = $[1], arrow = $[2], arrowRef = $[3], arrowX = $[4], arrowY = $[5], children = $[6], originX = $[7], originY = $[8], padding = $[9], placement = $[10], radius = $[11], restProps = $[12], scheme = $[13], shadow = $[14], style = $[15]) : ({animate, arrow, arrowRef, arrowX, arrowY, children, originX, originY, padding, placement, radius, scheme, shadow, style, ...restProps} = props, $[0] = props, $[1] = animate, $[2] = arrow, $[3] = arrowRef, $[4] = arrowX, $[5] = arrowY, $[6] = children, $[7] = originX, $[8] = originY, $[9] = padding, $[10] = placement, $[11] = radius, $[12] = restProps, $[13] = scheme, $[14] = shadow, $[15] = style);
	let t0 = animate ? "transform" : void 0, t1;
	$[16] !== originX || $[17] !== originY || $[18] !== style || $[19] !== t0 ? (t1 = {
		originX,
		originY,
		willChange: t0,
		...style
	}, $[16] = originX, $[17] = originY, $[18] = style, $[19] = t0, $[20] = t1) : t1 = $[20];
	let rootStyle = t1, t2 = arrowX === null ? void 0 : arrowX, t3 = arrowY === null ? void 0 : arrowY, t4;
	$[21] !== t2 || $[22] !== t3 ? (t4 = {
		left: t2,
		top: t3,
		right: void 0,
		bottom: void 0
	}, $[21] = t2, $[22] = t3, $[23] = t4) : t4 = $[23];
	let arrowStyle = t4, t5;
	$[24] === animate ? t5 = $[25] : (t5 = animate ? ["hidden", "initial"] : void 0, $[24] = animate, $[25] = t5);
	let t6;
	$[26] === animate ? t6 = $[27] : (t6 = animate ? ["visible", "scaleIn"] : void 0, $[26] = animate, $[27] = t6);
	let t7;
	$[28] === animate ? t7 = $[29] : (t7 = animate ? ["hidden", "scaleOut"] : void 0, $[28] = animate, $[29] = t7);
	let t8;
	$[30] !== arrow || $[31] !== arrowRef || $[32] !== arrowStyle ? (t8 = arrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {
		ref: arrowRef,
		style: arrowStyle,
		width: 15,
		height: 6,
		radius: 2
	}), $[30] = arrow, $[31] = arrowRef, $[32] = arrowStyle, $[33] = t8) : t8 = $[33];
	let t9;
	return $[34] !== children || $[35] !== padding || $[36] !== placement || $[37] !== radius || $[38] !== ref || $[39] !== restProps || $[40] !== rootStyle || $[41] !== scheme || $[42] !== shadow || $[43] !== t5 || $[44] !== t6 || $[45] !== t7 || $[46] !== t8 ? (t9 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MotionCard, {
		"data-ui": "Tooltip__card",
		...restProps,
		"data-placement": placement,
		padding,
		radius,
		ref,
		scheme,
		shadow,
		style: rootStyle,
		variants: POPOVER_MOTION_PROPS.card,
		transition: POPOVER_MOTION_PROPS.transition,
		initial: t5,
		animate: t6,
		exit: t7,
		children: [children, t8]
	}), $[34] = children, $[35] = padding, $[36] = placement, $[37] = radius, $[38] = ref, $[39] = restProps, $[40] = rootStyle, $[41] = scheme, $[42] = shadow, $[43] = t5, $[44] = t6, $[45] = t7, $[46] = t8, $[47] = t9) : t9 = $[47], t9;
});
var TooltipDelayGroupContext = createGlobalScopedContext("@sanity/ui/context/tooltipDelayGroup", null);
/**
* @beta
*/
function useTooltipDelayGroup() {
	return (0, import_react.useContext)(TooltipDelayGroupContext);
}
var StyledTooltip = Mt(Layer).withConfig({
	displayName: "StyledTooltip",
	componentId: "sc-4nppkj-0"
})`pointer-events:none;`;
var Tooltip = (0, import_react.forwardRef)(function Tooltip(props, forwardedRef) {
	let $ = (0, import_dist.c)(137), boundaryElementContext = useBoundaryElement(), { layer } = useTheme_v2(), _boundaryElement, _fallbackPlacementsProp, _zOffset, childProp, content, delay, disabled, portalProp, restProps, scheme, t0, t1, t2, t3, t4, t5;
	$[0] === props ? (_boundaryElement = $[1], _fallbackPlacementsProp = $[2], _zOffset = $[3], childProp = $[4], content = $[5], delay = $[6], disabled = $[7], portalProp = $[8], restProps = $[9], scheme = $[10], t0 = $[11], t1 = $[12], t2 = $[13], t3 = $[14], t4 = $[15], t5 = $[16]) : ({animate: t0, arrow: t1, boundaryElement: _boundaryElement, children: childProp, content, disabled, fallbackPlacements: _fallbackPlacementsProp, padding: t2, placement: t3, portal: portalProp, radius: t4, scheme, shadow: t5, zOffset: _zOffset, delay, ...restProps} = props, $[0] = props, $[1] = _boundaryElement, $[2] = _fallbackPlacementsProp, $[3] = _zOffset, $[4] = childProp, $[5] = content, $[6] = delay, $[7] = disabled, $[8] = portalProp, $[9] = restProps, $[10] = scheme, $[11] = t0, $[12] = t1, $[13] = t2, $[14] = t3, $[15] = t4, $[16] = t5);
	let _animate = t0 !== void 0 && t0, arrowProp = t1 !== void 0 && t1, padding = t2 === void 0 ? 2 : t2, placementProp = t3 === void 0 ? "bottom" : t3, radius = t4 === void 0 ? 2 : t4, shadow = t5 === void 0 ? 2 : t5, boundaryElement = _boundaryElement ?? boundaryElementContext?.element, fallbackPlacementsProp = _fallbackPlacementsProp ?? DEFAULT_FALLBACK_PLACEMENTS[props.placement ?? "bottom"], zOffset = _zOffset ?? layer.tooltip.zOffset, animate = !usePrefersReducedMotion() && _animate, t6;
	$[17] === fallbackPlacementsProp ? t6 = $[18] : (t6 = _getArrayProp(fallbackPlacementsProp), $[17] = fallbackPlacementsProp, $[18] = t6);
	let fallbackPlacements = t6, ref = (0, import_react.useRef)(null), [referenceElement, setReferenceElement] = (0, import_react.useState)(null), arrowRef = (0, import_react.useRef)(null), [tooltipMaxWidth, setTooltipMaxWidth] = (0, import_react.useState)(0), t7;
	$[19] === Symbol.for("react.memo_cache_sentinel") ? (t7 = () => ref.current, $[19] = t7) : t7 = $[19], (0, import_react.useImperativeHandle)(forwardedRef, t7);
	let portal = usePortal(), portalElement = typeof portalProp == "string" ? portal.elements?.[portalProp] || null : portal.element, t8;
	$[20] !== animate || $[21] !== arrowProp || $[22] !== boundaryElement || $[23] !== fallbackPlacements ? (t8 = {
		animate,
		arrowProp,
		arrowRef,
		boundaryElement,
		fallbackPlacements,
		rootBoundary: "viewport"
	}, $[20] = animate, $[21] = arrowProp, $[22] = boundaryElement, $[23] = fallbackPlacements, $[24] = t8) : t8 = $[24];
	let middleware = useMiddleware(t8), t9;
	$[25] === referenceElement ? t9 = $[26] : (t9 = { reference: referenceElement }, $[25] = referenceElement, $[26] = t9);
	let t10;
	$[27] !== middleware || $[28] !== placementProp || $[29] !== t9 ? (t10 = {
		middleware,
		placement: placementProp,
		whileElementsMounted: autoUpdate,
		elements: t9
	}, $[27] = middleware, $[28] = placementProp, $[29] = t9, $[30] = t10) : t10 = $[30];
	let { floatingStyles, placement, middlewareData, refs, update } = useFloating(t10), arrowX = middlewareData.arrow?.x, arrowY = middlewareData.arrow?.y, originX = middlewareData["@sanity/ui/origin"]?.originX, originY = middlewareData["@sanity/ui/origin"]?.originY, tooltipId = (0, import_react.useId)(), [isOpen, setIsOpen] = useDelayedState(!1), delayGroupContext = useTooltipDelayGroup(), t11;
	$[31] === delayGroupContext ? t11 = $[32] : (t11 = delayGroupContext || {}, $[31] = delayGroupContext, $[32] = t11);
	let { setIsGroupActive, setOpenTooltipId } = t11, showTooltip = isOpen || delayGroupContext?.openTooltipId === tooltipId, isInsideGroup = delayGroupContext !== null, openDelayProp = typeof delay == "number" ? delay : delay?.open || 0, closeDelayProp = typeof delay == "number" ? delay : delay?.close || 0, openDelay = isInsideGroup ? delayGroupContext.openDelay : openDelayProp, closeDelay = isInsideGroup ? delayGroupContext.closeDelay : closeDelayProp, t12;
	$[33] !== closeDelay || $[34] !== isInsideGroup || $[35] !== openDelay || $[36] !== setIsGroupActive || $[37] !== setIsOpen || $[38] !== setOpenTooltipId || $[39] !== tooltipId ? (t12 = (open, immediate) => {
		if (isInsideGroup) if (open) {
			let groupedOpenDelay = immediate ? 0 : openDelay;
			setIsGroupActive?.(open, groupedOpenDelay), setOpenTooltipId?.(tooltipId, groupedOpenDelay);
		} else setIsGroupActive?.(open, closeDelay > 200 ? closeDelay : 200), setOpenTooltipId?.(null, immediate ? 0 : closeDelay);
		else setIsOpen(open, immediate ? 0 : open ? openDelay : closeDelay);
	}, $[33] = closeDelay, $[34] = isInsideGroup, $[35] = openDelay, $[36] = setIsGroupActive, $[37] = setIsOpen, $[38] = setOpenTooltipId, $[39] = tooltipId, $[40] = t12) : t12 = $[40];
	let handleIsOpenChange = t12, t13;
	$[41] !== childProp?.props || $[42] !== handleIsOpenChange ? (t13 = (e) => {
		handleIsOpenChange(!1), childProp?.props?.onBlur?.(e);
	}, $[41] = childProp?.props, $[42] = handleIsOpenChange, $[43] = t13) : t13 = $[43], childProp?.props;
	let handleBlur = t13, t14;
	$[44] !== childProp?.props || $[45] !== handleIsOpenChange ? (t14 = (e_0) => {
		handleIsOpenChange(!1, !0), childProp?.props.onClick?.(e_0);
	}, $[44] = childProp?.props, $[45] = handleIsOpenChange, $[46] = t14) : t14 = $[46], childProp?.props;
	let handleClick = t14, t15;
	$[47] !== childProp?.props || $[48] !== handleIsOpenChange ? (t15 = (e_1) => {
		handleIsOpenChange(!1, !0), childProp?.props.onContextMenu?.(e_1);
	}, $[47] = childProp?.props, $[48] = handleIsOpenChange, $[49] = t15) : t15 = $[49], childProp?.props;
	let handleContextMenu = t15, t16;
	$[50] !== childProp?.props || $[51] !== handleIsOpenChange ? (t16 = (e_2) => {
		handleIsOpenChange(!0), childProp?.props?.onFocus?.(e_2);
	}, $[50] = childProp?.props, $[51] = handleIsOpenChange, $[52] = t16) : t16 = $[52], childProp?.props;
	let handleFocus = t16, t17;
	$[53] !== childProp?.props || $[54] !== handleIsOpenChange ? (t17 = (e_3) => {
		handleIsOpenChange(!0), childProp?.props?.onMouseEnter?.(e_3);
	}, $[53] = childProp?.props, $[54] = handleIsOpenChange, $[55] = t17) : t17 = $[55], childProp?.props;
	let handleMouseEnter = t17, t18;
	$[56] !== childProp?.props || $[57] !== handleIsOpenChange ? (t18 = (e_4) => {
		handleIsOpenChange(!1), childProp?.props?.onMouseLeave?.(e_4);
	}, $[56] = childProp?.props, $[57] = handleIsOpenChange, $[58] = t18) : t18 = $[58], childProp?.props;
	let handleMouseLeave = t18, t19;
	$[59] !== handleIsOpenChange || $[60] !== isInsideGroup || $[61] !== referenceElement || $[62] !== showTooltip ? (t19 = {
		handleIsOpenChange,
		referenceElement,
		showTooltip,
		isInsideGroup
	}, $[59] = handleIsOpenChange, $[60] = isInsideGroup, $[61] = referenceElement, $[62] = showTooltip, $[63] = t19) : t19 = $[63], useCloseOnMouseLeave(t19);
	let t20, t21;
	$[64] !== disabled || $[65] !== handleIsOpenChange || $[66] !== showTooltip ? (t20 = () => {
		disabled && showTooltip && handleIsOpenChange(!1);
	}, t21 = [
		disabled,
		handleIsOpenChange,
		showTooltip
	], $[64] = disabled, $[65] = handleIsOpenChange, $[66] = showTooltip, $[67] = t20, $[68] = t21) : (t20 = $[67], t21 = $[68]), (0, import_react.useEffect)(t20, t21);
	let t22, t23;
	$[69] !== content || $[70] !== handleIsOpenChange || $[71] !== showTooltip ? (t22 = () => {
		!content && showTooltip && handleIsOpenChange(!1);
	}, t23 = [
		content,
		handleIsOpenChange,
		showTooltip
	], $[69] = content, $[70] = handleIsOpenChange, $[71] = showTooltip, $[72] = t22, $[73] = t23) : (t22 = $[72], t23 = $[73]), (0, import_react.useEffect)(t22, t23);
	let t24, t25;
	$[74] !== handleIsOpenChange || $[75] !== showTooltip ? (t24 = () => {
		if (!showTooltip) return;
		let handleWindowKeyDown = function handleWindowKeyDown(event) {
			event.key === "Escape" && handleIsOpenChange(!1, !0);
		};
		return window.addEventListener("keydown", handleWindowKeyDown), () => {
			window.removeEventListener("keydown", handleWindowKeyDown);
		};
	}, t25 = [handleIsOpenChange, showTooltip], $[74] = handleIsOpenChange, $[75] = showTooltip, $[76] = t24, $[77] = t25) : (t24 = $[76], t25 = $[77]), (0, import_react.useEffect)(t24, t25);
	let t26;
	$[78] !== boundaryElement || $[79] !== portalElement?.offsetWidth ? (t26 = () => {
		let availableWidths = [...boundaryElement ? [boundaryElement.offsetWidth] : [], portalElement?.offsetWidth || document.body.offsetWidth];
		setTooltipMaxWidth(Math.min(...availableWidths) - 8);
	}, $[78] = boundaryElement, $[79] = portalElement?.offsetWidth, $[80] = t26) : t26 = $[80];
	let t27;
	$[81] !== boundaryElement || $[82] !== portalElement ? (t27 = [boundaryElement, portalElement], $[81] = boundaryElement, $[82] = portalElement, $[83] = t27) : t27 = $[83], (0, import_react.useLayoutEffect)(t26, t27);
	let t28;
	$[84] === update ? t28 = $[85] : (t28 = (arrowEl) => {
		arrowRef.current = arrowEl, update();
	}, $[84] = update, $[85] = t28);
	let setArrow = t28, t29;
	$[86] === refs ? t29 = $[87] : (t29 = (node) => {
		ref.current = node, refs.setFloating(node);
	}, $[86] = refs, $[87] = t29);
	let setFloating = t29, t30;
	bb0: {
		if (!childProp) {
			t30 = null;
			break bb0;
		}
		let t31;
		$[88] !== childProp || $[89] !== handleBlur || $[90] !== handleClick || $[91] !== handleContextMenu || $[92] !== handleFocus || $[93] !== handleMouseEnter || $[94] !== handleMouseLeave ? (t31 = (0, import_react.cloneElement)(childProp, {
			onBlur: handleBlur,
			onFocus: handleFocus,
			onMouseEnter: handleMouseEnter,
			onMouseLeave: handleMouseLeave,
			onClick: handleClick,
			onContextMenu: handleContextMenu,
			ref: setReferenceElement
		}), $[88] = childProp, $[89] = handleBlur, $[90] = handleClick, $[91] = handleContextMenu, $[92] = handleFocus, $[93] = handleMouseEnter, $[94] = handleMouseLeave, $[95] = t31) : t31 = $[95], t30 = t31;
	}
	let child = t30, t31;
	$[96] === childProp ? t31 = $[97] : (t31 = childProp ? getElementRef(childProp) : null, $[96] = childProp, $[97] = t31);
	let t32, t33;
	if ($[98] === referenceElement ? (t32 = $[99], t33 = $[100]) : (t32 = () => referenceElement, t33 = [referenceElement], $[98] = referenceElement, $[99] = t32, $[100] = t33), (0, import_react.useImperativeHandle)(t31, t32, t33), !child) {
		let t34;
		return $[101] === Symbol.for("react.memo_cache_sentinel") ? (t34 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {}), $[101] = t34) : t34 = $[101], t34;
	}
	if (disabled) return child;
	let t34 = tooltipMaxWidth > 0 ? `${tooltipMaxWidth}px` : void 0, t35;
	$[102] !== floatingStyles || $[103] !== t34 ? (t35 = {
		...floatingStyles,
		maxWidth: t34
	}, $[102] = floatingStyles, $[103] = t34, $[104] = t35) : t35 = $[104];
	let t36;
	$[105] !== animate || $[106] !== arrowProp || $[107] !== arrowX || $[108] !== arrowY || $[109] !== content || $[110] !== originX || $[111] !== originY || $[112] !== padding || $[113] !== placement || $[114] !== radius || $[115] !== restProps || $[116] !== scheme || $[117] !== setArrow || $[118] !== setFloating || $[119] !== shadow ? (t36 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipCard, {
		...restProps,
		animate,
		arrow: arrowProp,
		arrowRef: setArrow,
		arrowX,
		arrowY,
		originX,
		originY,
		padding,
		placement,
		radius,
		ref: setFloating,
		scheme,
		shadow,
		children: content
	}), $[105] = animate, $[106] = arrowProp, $[107] = arrowX, $[108] = arrowY, $[109] = content, $[110] = originX, $[111] = originY, $[112] = padding, $[113] = placement, $[114] = radius, $[115] = restProps, $[116] = scheme, $[117] = setArrow, $[118] = setFloating, $[119] = shadow, $[120] = t36) : t36 = $[120];
	let t37;
	$[121] !== restProps || $[122] !== setFloating || $[123] !== t35 || $[124] !== t36 || $[125] !== zOffset ? (t37 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledTooltip, {
		"data-ui": "Tooltip",
		...restProps,
		ref: setFloating,
		style: t35,
		zOffset,
		children: t36
	}), $[121] = restProps, $[122] = setFloating, $[123] = t35, $[124] = t36, $[125] = zOffset, $[126] = t37) : t37 = $[126];
	let tooltip = t37, t38;
	$[127] !== portalProp || $[128] !== showTooltip || $[129] !== tooltip ? (t38 = showTooltip && (portalProp ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, {
		__unstable_name: typeof portalProp == "string" ? portalProp : void 0,
		children: tooltip
	}) : tooltip), $[127] = portalProp, $[128] = showTooltip, $[129] = tooltip, $[130] = t38) : t38 = $[130];
	let children = t38, t39;
	$[131] !== animate || $[132] !== children ? (t39 = animate ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children }) : children, $[131] = animate, $[132] = children, $[133] = t39) : t39 = $[133];
	let t40;
	return $[134] !== child || $[135] !== t39 ? (t40 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [t39, child] }), $[134] = child, $[135] = t39, $[136] = t40) : t40 = $[136], t40;
});
function useMiddleware(t0) {
	let $ = (0, import_dist.c)(17), { animate, arrowProp, arrowRef, boundaryElement, fallbackPlacements, rootBoundary } = t0, ret;
	if ($[0] !== animate || $[1] !== arrowProp || $[2] !== arrowRef || $[3] !== boundaryElement || $[4] !== fallbackPlacements || $[5] !== rootBoundary) {
		ret = [];
		let t1 = boundaryElement || void 0, t2;
		$[7] !== fallbackPlacements || $[8] !== rootBoundary || $[9] !== t1 ? (t2 = flip({
			boundary: t1,
			fallbackPlacements,
			padding: 4,
			rootBoundary
		}), $[7] = fallbackPlacements, $[8] = rootBoundary, $[9] = t1, $[10] = t2) : t2 = $[10], ret.push(t2);
		let t3;
		$[11] === Symbol.for("react.memo_cache_sentinel") ? (t3 = offset({ mainAxis: 4 }), $[11] = t3) : t3 = $[11], ret.push(t3);
		let t4 = boundaryElement || void 0, t5;
		if ($[12] !== rootBoundary || $[13] !== t4 ? (t5 = shift({
			boundary: t4,
			rootBoundary,
			padding: 4
		}), $[12] = rootBoundary, $[13] = t4, $[14] = t5) : t5 = $[14], ret.push(t5), arrowProp) {
			let t6;
			$[15] === arrowRef ? t6 = $[16] : (t6 = arrow({
				element: arrowRef,
				padding: 4
			}), $[15] = arrowRef, $[16] = t6), ret.push(t6);
		}
		animate && ret.push(origin), $[0] = animate, $[1] = arrowProp, $[2] = arrowRef, $[3] = boundaryElement, $[4] = fallbackPlacements, $[5] = rootBoundary, $[6] = ret;
	} else ret = $[6];
	return ret;
}
/**
* As `useEffectEvent` should never be passed to other components or hooks, this custom hook groups together the `useEffectEvent` and the `useEffect` hook using it.
* @see https://19.react.dev/learn/separating-events-from-effects#reading-latest-props-and-state-with-effect-events:~:text=Never%20pass%20them%20to%20other%20components%20or%20Hooks
*/
function useCloseOnMouseLeave(t0) {
	let $ = (0, import_dist.c)(10), { handleIsOpenChange, referenceElement, showTooltip, isInsideGroup } = t0, t1;
	$[0] !== handleIsOpenChange || $[1] !== referenceElement ? (t1 = (target, teardown) => {
		referenceElement && (referenceElement === target || target instanceof Node && referenceElement.contains(target) || (handleIsOpenChange(!1), teardown()));
	}, $[0] = handleIsOpenChange, $[1] = referenceElement, $[2] = t1) : t1 = $[2];
	let onMouseMove = useEffectEvent(t1), t2;
	$[3] !== isInsideGroup || $[4] !== onMouseMove || $[5] !== showTooltip ? (t2 = () => {
		if (!showTooltip || isInsideGroup) return;
		let handleMouseMove = (event) => {
			onMouseMove(event.target, () => window.removeEventListener("mousemove", handleMouseMove));
		};
		return window.addEventListener("mousemove", handleMouseMove), () => window.removeEventListener("mousemove", handleMouseMove);
	}, $[3] = isInsideGroup, $[4] = onMouseMove, $[5] = showTooltip, $[6] = t2) : t2 = $[6];
	let t3;
	$[7] !== isInsideGroup || $[8] !== showTooltip ? (t3 = [isInsideGroup, showTooltip], $[7] = isInsideGroup, $[8] = showTooltip, $[9] = t3) : t3 = $[9], (0, import_react.useEffect)(t2, t3);
}
/**
* @public
*/
function PortalProvider(props) {
	let $ = (0, import_dist.c)(7), { boundaryElement, children, element, __unstable_elements: elements } = props, fallbackElement = (0, import_react.useSyncExternalStore)(emptySubscribe, _temp$9, _temp2$3), t0 = boundaryElement || null, t1 = element || fallbackElement, t2;
	$[0] !== elements || $[1] !== t0 || $[2] !== t1 ? (t2 = {
		version: 0,
		boundaryElement: t0,
		element: t1,
		elements
	}, $[0] = elements, $[1] = t0, $[2] = t1, $[3] = t2) : t2 = $[3];
	let value = t2, t3;
	return $[4] !== children || $[5] !== value ? (t3 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalContext.Provider, {
		value,
		children
	}), $[4] = children, $[5] = value, $[6] = t3) : t3 = $[6], t3;
}
function _temp2$3() {
	return null;
}
function _temp$9() {
	return document.body;
}
var emptySubscribe = () => () => {};
//#endregion
//#region node_modules/sanity/node_modules/react-is/cjs/react-is.production.js
/**
* @license React
* react-is.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_is_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
	var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
	var REACT_CONSUMER_TYPE = Symbol.for("react.consumer");
	var REACT_CONTEXT_TYPE = Symbol.for("react.context");
	var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
	var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
	var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
	var REACT_MEMO_TYPE = Symbol.for("react.memo");
	var REACT_LAZY_TYPE = Symbol.for("react.lazy");
	var REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition");
	var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
	exports.isValidElementType = function(type) {
		return "string" === typeof type || "function" === typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_VIEW_TRANSITION_TYPE || "object" === typeof type && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE || void 0 !== type.getModuleId) ? !0 : !1;
	};
}));
//#endregion
//#region node_modules/sanity/node_modules/react-is/index.js
var require_react_is = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_is_production();
}));
//#endregion
//#region node_modules/sanity/node_modules/@sanity/insert-menu/dist/index.js
var import_startCase = /* @__PURE__ */ __toESM(require_startCase(), 1);
var import_react_is = require_react_is();
function getSchemaTypeIcon(schemaType) {
	const referenceIcon = isReferenceSchemaType(schemaType) && (schemaType.to ?? []).length === 1 ? schemaType.to[0].icon : void 0;
	return schemaType.icon ?? schemaType.type?.icon ?? referenceIcon;
}
function isReferenceSchemaType(type) {
	return isRecord(type) && (type.name === "reference" || isReferenceSchemaType(type.type));
}
function isRecord(value) {
	return !!value && (typeof value == "object" || typeof value == "function");
}
function fullInsertMenuReducer(state, event) {
	return {
		query: event.type === "change query" ? event.query : state.query,
		groups: event.type === "select group" ? state.groups.map((group) => ({
			...group,
			selected: event.name === group.name
		})) : state.groups,
		views: event.type === "toggle view" ? state.views.map((view) => ({
			...view,
			selected: event.name === view.name
		})) : state.views
	};
}
var ALL_ITEMS_GROUP_NAME = "all-items";
var gridStyle = {
	gridTemplateColumns: "repeat(auto-fill, minmax(118px, 1fr))",
	alignItems: "start"
};
function InsertMenu(props) {
	const $ = (0, import_dist.c)(54), showIcons = props.showIcons === void 0 ? !0 : props.showIcons, showFilter = props.filter === void 0 || props.filter === "auto" ? props.schemaTypes.length > 5 : props.filter;
	let t0;
	$[0] !== props.groups || $[1] !== props.labels ? (t0 = props.groups ? [{
		name: ALL_ITEMS_GROUP_NAME,
		title: props.labels["insert-menu.filter.all-items"],
		selected: !0
	}, ...props.groups.map(_temp)] : [], $[0] = props.groups, $[1] = props.labels, $[2] = t0) : t0 = $[2];
	let t1;
	$[3] !== props.views ? (t1 = props.views ?? [{ name: "list" }], $[3] = props.views, $[4] = t1) : t1 = $[4];
	let t2;
	$[5] !== t1 ? (t2 = t1.map(_temp2), $[5] = t1, $[6] = t2) : t2 = $[6];
	let t3;
	$[7] !== t0 || $[8] !== t2 ? (t3 = {
		query: "",
		groups: t0,
		views: t2
	}, $[7] = t0, $[8] = t2, $[9] = t3) : t3 = $[9];
	const [state, send] = (0, import_react.useReducer)(fullInsertMenuReducer, t3);
	let T0, T1, T2, t4, t5, t6, t7, t8, t9;
	if ($[10] !== props || $[11] !== showFilter || $[12] !== showIcons || $[13] !== state.groups || $[14] !== state.query || $[15] !== state.views) {
		const filteredSchemaTypes = filterSchemaTypes(props.schemaTypes, state.query, state.groups), selectedView = state.views.find(_temp3), showingFilterOrViews = showFilter || state.views.length > 1, showingTabs = state.groups && state.groups.length > 0, showingAnyOptions = showingFilterOrViews || showingTabs;
		T2 = Menu, t9 = 0, T1 = Flex, t6 = "column", t7 = "fill";
		let t102;
		$[25] !== showingAnyOptions ? (t102 = showingAnyOptions ? {
			style: { borderBottom: "1px solid var(--card-border-color)" },
			paddingBottom: 1
		} : {}, $[25] = showingAnyOptions, $[26] = t102) : t102 = $[26];
		let t112;
		$[27] !== props.labels || $[28] !== showFilter || $[29] !== showingFilterOrViews || $[30] !== state.query || $[31] !== state.views ? (t112 = showingFilterOrViews ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
			flex: "none",
			align: "center",
			paddingTop: 1,
			paddingX: 1,
			gap: 1,
			children: [showFilter ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
				flex: 1,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
					autoFocus: !0,
					border: !1,
					fontSize: 1,
					icon: SearchIcon,
					onChange: (event) => {
						send({
							type: "change query",
							query: event.target.value
						});
					},
					placeholder: props.labels["insert-menu.search.placeholder"],
					value: state.query
				})
			}) : null, state.views.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
				flex: "none",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ViewToggle, {
					views: state.views,
					onToggle: (name) => {
						send({
							type: "toggle view",
							name
						});
					},
					labels: props.labels
				})
			}) : null]
		}) : null, $[27] = props.labels, $[28] = showFilter, $[29] = showingFilterOrViews, $[30] = state.query, $[31] = state.views, $[32] = t112) : t112 = $[32];
		let t122;
		$[33] !== showingTabs || $[34] !== state.groups ? (t122 = showingTabs ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
			paddingTop: 1,
			paddingX: 1,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabList, {
				space: 1,
				children: state.groups.map((group_0) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tab, {
					id: `${group_0.name}-tab`,
					"aria-controls": `${group_0.name}-panel`,
					label: group_0.title ?? (0, import_startCase.default)(group_0.name),
					selected: group_0.selected,
					onClick: () => {
						send({
							type: "select group",
							name: group_0.name
						});
					}
				}, group_0.name))
			})
		}) : null, $[33] = showingTabs, $[34] = state.groups, $[35] = t122) : t122 = $[35], $[36] !== t102 || $[37] !== t112 || $[38] !== t122 ? (t8 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Box, {
			...t102,
			children: [t112, t122]
		}), $[36] = t102, $[37] = t112, $[38] = t122, $[39] = t8) : t8 = $[39], T0 = Box, t4 = 1, t5 = filteredSchemaTypes.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
			padding: 2,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
				muted: !0,
				size: 1,
				children: props.labels["insert-menu.search.no-results"]
			})
		}) : selectedView ? selectedView.name === "grid" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Grid, {
			autoRows: "auto",
			flex: 1,
			gap: 1,
			style: gridStyle,
			children: filteredSchemaTypes.map((schemaType) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GridMenuItem, {
				icon: showIcons ? getSchemaTypeIcon(schemaType) : void 0,
				onClick: () => {
					props.onSelect(schemaType);
				},
				previewImageUrl: selectedView.previewImageUrl?.(schemaType.name),
				schemaType
			}, schemaType.name))
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stack, {
			flex: 1,
			space: 1,
			children: filteredSchemaTypes.map((schemaType_0) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuItem, {
				icon: showIcons ? getSchemaTypeIcon(schemaType_0) : void 0,
				onClick: () => {
					props.onSelect(schemaType_0);
				},
				text: schemaType_0.title ?? (0, import_startCase.default)(schemaType_0.name)
			}, schemaType_0.name))
		}) : null, $[10] = props, $[11] = showFilter, $[12] = showIcons, $[13] = state.groups, $[14] = state.query, $[15] = state.views, $[16] = T0, $[17] = T1, $[18] = T2, $[19] = t4, $[20] = t5, $[21] = t6, $[22] = t7, $[23] = t8, $[24] = t9;
	} else T0 = $[16], T1 = $[17], T2 = $[18], t4 = $[19], t5 = $[20], t6 = $[21], t7 = $[22], t8 = $[23], t9 = $[24];
	let t10;
	$[40] !== T0 || $[41] !== t4 || $[42] !== t5 ? (t10 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(T0, {
		padding: t4,
		children: t5
	}), $[40] = T0, $[41] = t4, $[42] = t5, $[43] = t10) : t10 = $[43];
	let t11;
	$[44] !== T1 || $[45] !== t10 || $[46] !== t6 || $[47] !== t7 || $[48] !== t8 ? (t11 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(T1, {
		direction: t6,
		height: t7,
		children: [t8, t10]
	}), $[44] = T1, $[45] = t10, $[46] = t6, $[47] = t7, $[48] = t8, $[49] = t11) : t11 = $[49];
	let t12;
	return $[50] !== T2 || $[51] !== t11 || $[52] !== t9 ? (t12 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(T2, {
		padding: t9,
		children: t11
	}), $[50] = T2, $[51] = t11, $[52] = t9, $[53] = t12) : t12 = $[53], t12;
}
function _temp3(view_0) {
	return view_0.selected;
}
function _temp2(view, index) {
	return {
		...view,
		selected: index === 0
	};
}
function _temp(group) {
	return {
		...group,
		selected: !1
	};
}
var viewToggleIcon = {
	grid: ThLargeIcon,
	list: UlistIcon
};
var viewToggleTooltip = {
	grid: "insert-menu.toggle-grid-view.tooltip",
	list: "insert-menu.toggle-list-view.tooltip"
};
function ViewToggle(props) {
	const $ = (0, import_dist.c)(11), viewIndex = props.views.findIndex(_temp4), nextView = props.views[viewIndex + 1] ?? props.views[0], t0 = props.labels[viewToggleTooltip[nextView.name]];
	let t1;
	$[0] !== t0 ? (t1 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
		size: 1,
		children: t0
	}), $[0] = t0, $[1] = t1) : t1 = $[1];
	const t2 = viewToggleIcon[nextView.name];
	let t3;
	$[2] !== nextView.name || $[3] !== props ? (t3 = () => {
		props.onToggle(nextView.name);
	}, $[2] = nextView.name, $[3] = props, $[4] = t3) : t3 = $[4];
	let t4;
	$[5] !== t2 || $[6] !== t3 ? (t4 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		mode: "bleed",
		icon: t2,
		onClick: t3
	}), $[5] = t2, $[6] = t3, $[7] = t4) : t4 = $[7];
	let t5;
	return $[8] !== t1 || $[9] !== t4 ? (t5 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
		content: t1,
		placement: "top",
		portal: !0,
		children: t4
	}), $[8] = t1, $[9] = t4, $[10] = t5) : t5 = $[10], t5;
}
function _temp4(view) {
	return view.selected;
}
function GridMenuItem(props) {
	const $ = (0, import_dist.c)(19), [failedToLoad, setFailedToLoad] = (0, import_react.useState)(!1), Icon = props.icon;
	let t0;
	$[0] === Symbol.for("react.memo_cache_sentinel") ? (t0 = { overflow: "hidden" }, $[0] = t0) : t0 = $[0];
	let t1;
	$[1] === Symbol.for("react.memo_cache_sentinel") ? (t1 = {
		backgroundColor: "var(--card-muted-bg-color)",
		paddingBottom: "66.6%",
		position: "relative"
	}, $[1] = t1) : t1 = $[1];
	let t2;
	$[2] !== Icon ? (t2 = (0, import_react_is.isValidElementType)(Icon) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flex, {
		align: "center",
		justify: "center",
		style: {
			position: "absolute",
			top: 0,
			left: 0,
			width: "100%",
			height: "100%"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
			size: 1,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {})
		})
	}) : null, $[2] = Icon, $[3] = t2) : t2 = $[3];
	let t3;
	$[4] !== failedToLoad || $[5] !== props.previewImageUrl ? (t3 = !props.previewImageUrl || failedToLoad ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: props.previewImageUrl,
		style: {
			objectFit: "contain",
			width: "100%",
			height: "100%",
			position: "absolute",
			inset: 0
		},
		onError: () => {
			setFailedToLoad(!0);
		}
	}), $[4] = failedToLoad, $[5] = props.previewImageUrl, $[6] = t3) : t3 = $[6];
	let t4;
	$[7] === Symbol.for("react.memo_cache_sentinel") ? (t4 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		boxShadow: "inset 0 0 0 0.5px var(--card-fg-color)",
		opacity: .1
	} }), $[7] = t4) : t4 = $[7];
	let t5;
	$[8] !== t2 || $[9] !== t3 ? (t5 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Box, {
		flex: "none",
		style: t1,
		children: [
			t2,
			t3,
			t4
		]
	}), $[8] = t2, $[9] = t3, $[10] = t5) : t5 = $[10];
	const t6 = props.schemaType.title ?? props.schemaType.name;
	let t7;
	$[11] !== t6 ? (t7 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
		flex: 1,
		padding: 2,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
			size: 1,
			weight: "medium",
			children: t6
		})
	}), $[11] = t6, $[12] = t7) : t7 = $[12];
	let t8;
	$[13] !== t5 || $[14] !== t7 ? (t8 = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
		direction: "column",
		gap: 1,
		padding: 1,
		children: [t5, t7]
	}), $[13] = t5, $[14] = t7, $[15] = t8) : t8 = $[15];
	let t9;
	return $[16] !== props.onClick || $[17] !== t8 ? (t9 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuItem, {
		padding: 0,
		radius: 2,
		onClick: props.onClick,
		style: t0,
		children: t8
	}), $[16] = props.onClick, $[17] = t8, $[18] = t9) : t9 = $[18], t9;
}
function filterSchemaTypes(schemaTypes, query, groups) {
	return schemaTypes.filter((schemaType) => passesGroupFilter(schemaType, groups) && passesQueryFilter(schemaType, query));
}
function passesQueryFilter(schemaType, query) {
	const sanitizedQuery = query.trim().toLowerCase();
	return schemaType.title ? schemaType.title?.toLowerCase().includes(sanitizedQuery) : schemaType.name.includes(sanitizedQuery);
}
function passesGroupFilter(schemaType, groups) {
	const selectedGroup = groups.find((group) => group.selected);
	return selectedGroup ? selectedGroup.name === ALL_ITEMS_GROUP_NAME ? !0 : selectedGroup.of?.includes(schemaType.name) : !0;
}
//#endregion
export { responsiveRadiusStyle as $, ThemeProvider$1 as A, jt as At, focusRingStyle as B, Spinner as C, AnimatePresence as Ct, Text as D, Ut as Dt, TabList as E, Mt as Et, _isEnterToClickElement as F, multiply as Ft, isHTMLSelectElement as G, isHTMLButtonElement as H, _responsive as I, parseColor as It, rem as J, isHTMLTextAreaElement as K, containsOrEqualsElement as L, rgbToHex as Lt, TooltipDelayGroupContext as M, buildTheme as Mt, _ResizeObserver as N, createColorTheme as Nt, TextInput as O, Zt as Ot, _getArrayProp as P, getTheme_v2 as Pt, responsivePaddingStyle as Q, createGlobalScopedContext as R, rgba$2 as Rt, SpanWithTextOverflow as S, motion as St, Tab as T, require_react_is$1 as Tt, isHTMLElement as U, isHTMLAnchorElement as V, isHTMLInputElement as W, responsiveInputPaddingIconRightStyle as X, responsiveFont as Y, responsiveInputPaddingStyle as Z, MenuGroup as _, usePrefersReducedMotion as _t, Button as a, textInputRepresentationStyle as at, Portal as b, useTheme_v2 as bt, EMPTY_RECORD as c, useClickOutsideEvent as ct, Hotkeys as d, useElementSize as dt, responsiveTextAlignStyle as et, Inline as f, useGlobalKeyDown as ft, MenuDivider as g, usePrefersDark as gt, Menu as h, usePortal as ht, Box as i, textInputFontSizeStyle as it, Tooltip as j, zt as jt, ThemeColorProvider as k, bt as kt, Flex as l, useCustomValidity as lt, LayerProvider as m, useMediaIndex as mt, require_react_is as n, studioTheme as nt, Card as o, textInputRootStyle as ot, Layer as p, useLayer as pt, isRecord$1 as q, BoundaryElementContext as r, textInputBaseStyle as rt, EMPTY_ARRAY as s, useBoundaryElement as st, InsertMenu as t, rgba as tt, Grid as u, useDelayedState as ut, MenuItem as v, useRootTheme as vt, Stack as w, easingDefinitionToFunction as wt, PortalProvider as x, useEffectEvent as xt, Popover as y, useTheme$1 as yt, focusRingBorderStyle as z, screen as zt };
