import { o as __toESM } from "../_runtime.mjs";
import { i as require_react } from "../_libs/dnd-kit__accessibility+react.mjs";
import { o as require_jsx_runtime } from "../_libs/dnd-kit__react+react.mjs";
import { n as zones, t as chapters } from "./chapters-C_aVntiJ.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { i as PortableText } from "../_libs/@portabletext/react+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Sections-DdgF8k4s.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
/** Clearly-marked placeholder for real photography/video. Renders the asset once `src` is provided. */
function MediaSlot({ label, alt, kind = "image", src, externalUrl, className }) {
	const [failedSrc, setFailedSrc] = (0, import_react.useState)();
	if (!!src && failedSrc !== src) return kind === "video" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
		onError: () => setFailedSrc(src),
		className: cn("h-full w-full object-cover", className),
		src,
		controls: true,
		muted: true,
		playsInline: true,
		"aria-label": alt
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		onError: () => setFailedSrc(src),
		className: cn("h-full w-full object-cover", className),
		src,
		alt,
		loading: "lazy"
	});
	if (kind === "video" && externalUrl) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "group",
		"aria-label": alt,
		className: cn("placeholder-slot flex items-end p-3", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: externalUrl,
			target: "_blank",
			rel: "noopener noreferrer",
			className: "eyebrow bg-paper/80 px-2 py-1 !text-[0.6rem] underline",
			children: "Open documentary clip ↗"
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		role: "img",
		"aria-label": alt,
		className: cn("placeholder-slot flex items-end p-3", className),
		children: [kind === "video" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": true,
			className: "absolute inset-0 m-auto flex h-12 w-12 items-center justify-center rounded-full border border-foreground/30 text-foreground/50",
			children: "▶"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "eyebrow bg-paper/80 px-2 py-1 !text-[0.6rem]",
			children: ["Replace · ", label]
		})]
	});
}
function HeroSection({ hero, shawl, ctaHref = "#craft", includeOrigin = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		"aria-labelledby": "hero-title",
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex min-h-[92vh] items-end overflow-hidden pt-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero.image?.src ?? "/assets/changthang-landscape-6j0OAZmB.jpg",
					alt: hero.image?.alt ?? "Muted dawn over the high Changthang plateau, with a distant herd",
					className: "absolute inset-0 h-full w-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "absolute inset-0",
					style: { background: "var(--hero-veil)" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto w-full max-w-[1440px] px-5 pb-16 md:px-10 md:pb-24",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow !text-paper/80",
							children: hero.eyebrow
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							id: "hero-title",
							className: "mt-5 max-w-4xl text-5xl leading-[0.95] text-paper sm:text-6xl md:text-8xl",
							children: [
								hero.title,
								" ",
								hero.titleEmphasis && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
									className: "italic",
									children: hero.titleEmphasis
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-xl text-base leading-relaxed text-paper/85 md:text-lg",
							children: hero.intro
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: ctaHref,
							className: "mt-9 inline-flex items-center gap-3 border border-paper/60 px-6 py-3 eyebrow !text-paper transition-colors hover:bg-paper hover:!text-slate",
							children: [
								hero.ctaLabel,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": true,
									children: "↓"
								})
							]
						})
					]
				})
			]
		}), includeOrigin && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			id: "story",
			className: "mx-auto grid max-w-[1440px] gap-10 px-5 py-20 md:grid-cols-12 md:px-10 md:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-4 md:pt-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "The Story"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-4xl leading-tight md:text-5xl",
						children: "The shawl is a map of its own making."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 leading-relaxed text-muted-foreground",
						children: "Its embroidery depicts landscape, goats, people, hand processes and the loom. We follow that thread, chapter by chapter, through the hands that make it."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				className: "md:col-span-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaSlot, {
					kind: "shawl",
					src: shawl?.mainImage?.src,
					label: "Full shawl photograph (supplied reference)",
					alt: shawl?.mainImage?.alt ?? "Placeholder for the full embroidered Pashmina shawl laid flat",
					className: "aspect-[4/5] w-full md:aspect-[16/11]"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
					className: "mt-3 eyebrow",
					children: shawl?.mainImage?.caption ?? "Plate I — The complete shawl. Real photograph to be placed here."
				})]
			})]
		})]
	});
}
function ArtisanStory({ portrait }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		"aria-label": "Artisan story",
		className: "mt-8 grid grid-cols-[88px_1fr] gap-5 bg-cashmere/60 p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaSlot, {
			kind: "portrait",
			src: portrait.src,
			alt: portrait.alt,
			label: "Portrait",
			className: "aspect-[3/4] w-full !p-1 [&>span]:hidden"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [portrait.voice && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
			className: "font-display text-xl italic leading-snug",
			children: [
				"“",
				portrait.voice,
				"”"
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 eyebrow",
			children: portrait.role
		})] })]
	});
}
var ProcessChapter = (0, import_react.forwardRef)(function ProcessChapter({ chapter: c, active, index }, ref) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		id: c.id,
		ref,
		"data-index": index,
		tabIndex: -1,
		"aria-labelledby": `${c.id}-title`,
		className: `scroll-mt-32 border-l py-12 pl-6 transition-colors duration-500 md:pl-8 ${active ? "border-thread" : "border-border"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "eyebrow",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-brass",
						children: String(c.number).padStart(2, "0")
					}),
					" · ",
					c.kicker
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
				id: `${c.id}-title`,
				className: "mt-3 text-3xl leading-tight md:text-4xl",
				children: c.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 leading-relaxed text-muted-foreground",
				children: c.story
			}),
			!c.verified && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 eyebrow !text-sky",
				children: "Draft · to be verified with artisans"
			}),
			c.locationLabel && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 eyebrow",
				children: ["Location · ", c.locationLabel]
			}),
			c.body && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 space-y-3 leading-relaxed text-muted-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortableText, { value: c.body })
			}),
			c.toolsAndMaterials && c.toolsAndMaterials.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-sm text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-medium text-foreground",
					children: "Tools & materials: "
				}), c.toolsAndMaterials.join(", ")]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				className: "mt-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaSlot, {
					kind: c.media.kind,
					src: c.media.src,
					externalUrl: c.media.externalUrl,
					alt: c.media.alt,
					label: c.media.kind === "video" ? "Documentary clip" : "Documentary image",
					className: "aspect-[4/3] w-full"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
					className: "mt-2 text-sm text-muted-foreground",
					children: c.caption
				})]
			}),
			c.portrait && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArtisanStory, { portrait: c.portrait }),
			c.audio && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 flex items-center gap-3 border-t border-border pt-4",
				children: c.audio.src ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("audio", {
					controls: true,
					src: c.audio.src,
					className: "w-full",
					"aria-label": c.audio.label
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "eyebrow",
					children: [
						"♪ ",
						c.audio.label,
						" · Replace with recording"
					]
				})
			})
		]
	});
});
/** Subtle stitched boat used as the wayfinding marker on the thread. */
function BoatMarker({ x, y, angle }) {
	const flip = Math.abs(angle) > 90;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		transform: `translate(${x} ${y - 26}) scale(${flip ? -1 : 1} 1)`,
		"aria-hidden": true,
		pointerEvents: "none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M-14 4 L14 4 L9 10 L-9 10 Z",
				fill: "var(--color-slate)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M0 4 L0 -14",
				stroke: "var(--color-slate)",
				strokeWidth: "1.2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M1 -13 L10 2 L1 2 Z",
				fill: "var(--color-paper)",
				stroke: "var(--color-brass)",
				strokeWidth: "1"
			})
		]
	});
}
var ROUTE = "M90 80 C 260 40, 470 90, 500 170 S 330 280, 180 300 S 60 400, 170 450 C 300 500, 520 440, 510 540 S 300 640, 170 650 S 120 740, 300 750 S 500 730, 520 720";
function ShawlCanvas({ chapters, active, onSelect }) {
	const pathRef = (0, import_react.useRef)(null);
	const [points, setPoints] = (0, import_react.useState)([]);
	const [total, setTotal] = (0, import_react.useState)(0);
	const [pos, setPos] = (0, import_react.useState)({
		x: 90,
		y: 80,
		angle: 0,
		len: 0
	});
	const lenRef = (0, import_react.useRef)(0);
	(0, import_react.useEffect)(() => {
		const p = pathRef.current;
		if (!p) return;
		const L = p.getTotalLength();
		setTotal(L);
		setPoints(chapters.map((_, i) => p.getPointAtLength(L * i / Math.max(chapters.length - 1, 1))));
	}, [chapters]);
	(0, import_react.useEffect)(() => {
		const p = pathRef.current;
		if (!p || !total) return;
		const target = total * active / Math.max(chapters.length - 1, 1);
		const from = lenRef.current;
		const dur = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 900;
		const start = performance.now();
		let raf = 0;
		const tick = (now) => {
			const t = dur ? Math.min(1, (now - start) / dur) : 1;
			const e = 1 - Math.pow(1 - t, 3);
			const len = from + (target - from) * e;
			const a = p.getPointAtLength(len);
			const b = p.getPointAtLength(Math.min(total, len + 2));
			lenRef.current = len;
			setPos({
				x: a.x,
				y: a.y,
				len,
				angle: Math.atan2(b.y - a.y, b.x - a.x) * 180 / Math.PI
			});
			if (t < 1) raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [
		active,
		total,
		chapters.length
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "relative flex h-full flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "weave relative flex-1 overflow-hidden border border-border",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow absolute left-4 top-4 bg-paper/80 px-2 py-1 !text-[0.6rem]",
					children: "Replace · Shawl canvas photograph"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": true,
					className: "eyebrow absolute right-4 top-4",
					children: "Before the Loom · 1–5"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "seam absolute inset-x-0 top-[70%]"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": true,
					className: "eyebrow absolute right-4 top-[calc(70%+1.25rem)]",
					children: "At the Loom · 6–8"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					viewBox: "0 0 600 800",
					className: "absolute inset-0 h-full w-full",
					preserveAspectRatio: "xMidYMid meet",
					role: "group",
					"aria-label": `Embroidered journey map, ${chapters.length} of 8 chapters available`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: ROUTE,
							fill: "none",
							stroke: "var(--color-foreground)",
							strokeOpacity: "0.15",
							strokeWidth: "1.5",
							strokeDasharray: "7 6",
							ref: pathRef
						}),
						total > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: ROUTE,
							fill: "none",
							stroke: "var(--color-thread)",
							strokeWidth: "2.2",
							strokeLinecap: "round",
							strokeDasharray: `7 6`,
							style: { clipPath: "none" },
							mask: "url(#progress)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mask", {
							id: "progress",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: ROUTE,
								fill: "none",
								stroke: "white",
								strokeWidth: "8",
								strokeDasharray: `${pos.len} ${total}`
							})
						}) }),
						points.map((pt, i) => {
							const c = chapters[i];
							const isActive = i === active;
							const done = i <= active;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
								transform: `translate(${pt.x} ${pt.y})`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `#${c.id}`,
									onClick: (e) => {
										e.preventDefault();
										onSelect(i);
									},
									"aria-label": `Chapter ${c.number}: ${c.title}`,
									"aria-current": isActive ? "step" : void 0,
									className: "cursor-pointer outline-none [&:focus-visible>circle:first-child]:stroke-sky",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
											r: "22",
											fill: "transparent",
											stroke: "transparent",
											strokeWidth: "3"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
											r: isActive ? 15 : 11,
											fill: done ? "var(--color-paper)" : "var(--color-cashmere)",
											stroke: done ? "var(--color-thread)" : "var(--color-earth)",
											strokeWidth: "1.5",
											className: "transition-all duration-500"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
											textAnchor: "middle",
											dy: "4",
											fontSize: "11",
											fontFamily: "var(--font-sans)",
											fill: "var(--color-foreground)",
											children: c.number
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
											x: pt.x > 300 ? -26 : 26,
											dy: "4",
											textAnchor: pt.x > 300 ? "end" : "start",
											fontSize: "15",
											fontFamily: "var(--font-display)",
											fontStyle: "italic",
											fill: "var(--color-foreground)",
											opacity: isActive ? 1 : .55,
											children: c.title
										})
									]
								})
							}, c.id);
						}),
						total > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BoatMarker, {
							x: pos.x,
							y: pos.y,
							angle: pos.angle
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
			className: "mt-3 eyebrow",
			children: "Plate II — The thread as map. Select a waypoint to open its chapter."
		})]
	});
}
/** Main interactive journey: sticky shawl map (desktop) + chronological chapters. */
function EmbroideredJourney({ chapters, previewNotice }) {
	const [active, setActive] = (0, import_react.useState)(0);
	const refs = (0, import_react.useRef)([]);
	(0, import_react.useEffect)(() => {
		const obs = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) setActive(Number(e.target.dataset["index"]));
			});
		}, { rootMargin: "-45% 0px -50% 0px" });
		refs.current.forEach((el) => el && obs.observe(el));
		return () => obs.disconnect();
	}, []);
	const select = (i) => {
		setActive(i);
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		refs.current[i]?.scrollIntoView({
			behavior: reduce ? "auto" : "smooth",
			block: "center"
		});
		refs.current[i]?.focus({ preventScroll: true });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "craft",
		"aria-labelledby": "craft-title",
		className: "relative border-t border-border",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[1440px] px-5 pt-20 md:px-10 md:pt-28",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "The Craft · Eight chapters"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "craft-title",
						className: "mt-4 max-w-3xl text-4xl leading-tight md:text-6xl",
						children: "Follow the embroidered thread, from pasture to loom."
					}),
					previewNotice && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						role: "status",
						className: "mt-6 max-w-3xl border-l-2 border-sky pl-4 text-sm",
						children: previewNotice
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sticky top-16 z-30 mt-10 border-y border-border bg-paper/95 px-5 py-3 backdrop-blur lg:hidden",
				"aria-live": "polite",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between eyebrow",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: zones[chapters[active].zone].label }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [String(active + 1).padStart(2, "0"), " / 08"] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 flex gap-1",
					children: chapters.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => select(i),
						"aria-label": `Go to chapter ${c.number}: ${c.title}`,
						className: `h-1 flex-1 transition-colors ${i <= active ? "bg-thread" : "bg-foreground/15"} ${i === 5 ? "ml-2" : ""}`
					}, c.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-[1440px] gap-12 px-5 pb-24 md:px-10 lg:mt-14 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden lg:col-span-7 lg:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "sticky top-20 h-[calc(100vh-6rem)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShawlCanvas, {
							chapters,
							active,
							onSelect: select
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "lg:col-span-5",
					children: chapters.map((c, i) => {
						const zoneStart = i === 0 || chapters[i - 1].zone !== c.zone;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [zoneStart && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: i > 0 ? "mt-20" : "mt-4",
							children: [
								i > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "seam mb-8",
									"aria-hidden": true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow !text-earth",
									children: zones[c.zone].range
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 text-3xl italic",
									children: zones[c.zone].label
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessChapter, {
							chapter: c,
							active: i === active,
							ref: (el) => {
								refs.current[i] = el;
							},
							index: i
						})] }, c.id);
					})
				})]
			})
		]
	});
}
function OriginSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "origin",
		"aria-labelledby": "origin-title",
		className: "weave border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1440px] gap-10 px-5 py-20 md:grid-cols-12 md:px-10 md:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Where the story begins"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "origin-title",
					className: "mt-4 text-4xl leading-tight md:text-5xl",
					children: "A rare softness, shaped by life on the high plateau."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-5 leading-relaxed text-muted-foreground md:col-span-6 md:col-start-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Long before a Pashmina rests on your shoulders, its story begins on the Changthang plateau. In the high-altitude cold, Changthangi goats grow a fine undercoat, carefully combed by pastoral communities during the seasonal moult." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "That delicate fibre is the first chapter of a shawl to be treasured—and a way to feel closer to the place and people behind it." })]
			})]
		})
	});
}
function ArtisansSection({ chapters: contentChapters, previewMode = false }) {
	const people = contentChapters.some((chapter) => chapter.portrait) ? contentChapters.filter((chapter) => chapter.portrait) : previewMode ? [] : chapters.filter((chapter) => chapter.portrait);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "artisans",
		"aria-labelledby": "artisans-title",
		className: "border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "The Artisans"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "artisans-title",
					className: "mt-4 max-w-2xl text-4xl leading-tight md:text-5xl",
					children: "Every chapter has hands, and every pair of hands a name."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-xl text-muted-foreground",
					children: "Names, portraits and stories appear only with each person's informed consent."
				}),
				previewMode && people.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					role: "status",
					className: "mt-5 max-w-xl text-sm text-muted-foreground",
					children: "No consented artisan profiles are included in these drafts."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-14 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4",
					children: people.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaSlot, {
							kind: "portrait",
							src: c.portrait.src,
							alt: c.portrait.alt,
							label: "Portrait",
							className: "aspect-[3/4] w-full"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 eyebrow",
							children: [
								"Ch. ",
								String(c.number).padStart(2, "0"),
								" · ",
								c.kicker
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-display text-xl",
							children: c.portrait.role
						})
					] }, c.id))
				})
			]
		})
	});
}
function ShawlDetailGallery({ shawl }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "authenticity",
		"aria-labelledby": "shawl-title",
		className: "border-t border-border bg-cashmere/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 md:grid-cols-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: "Authenticity · The finished shawl"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								id: "shawl-title",
								className: "mt-4 text-4xl leading-tight md:text-5xl",
								children: shawl?.title ?? "The cloth, complete."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 leading-relaxed text-muted-foreground",
								children: shawl?.description ?? shawl?.provenance ?? "Provenance note (draft): each piece documented here will be accompanied by the chapters and people behind it. Verified details to be added per piece."
							}),
							shawl && (shawl.materials.length > 0 || shawl.dimensions || shawl.provenance) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "mt-5 space-y-2 text-sm text-muted-foreground",
								children: [
									shawl.materials.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "inline font-medium text-foreground",
										children: "Materials: "
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "inline",
										children: shawl.materials.join(", ")
									})] }),
									shawl.dimensions && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "inline font-medium text-foreground",
										children: "Dimensions: "
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "inline",
										children: shawl.dimensions
									})] }),
									shawl.provenance && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dt", {
										className: "inline font-medium text-foreground",
										children: [
											"Provenance",
											shawl.provenanceVerified ? " · verified" : "",
											":",
											" "
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "inline",
										children: shawl.provenance
									})] })
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "md:col-span-8 md:row-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaSlot, {
							kind: "shawl",
							src: shawl?.mainImage?.src,
							label: "Full drape photograph",
							alt: shawl?.mainImage?.alt ?? "Placeholder for the finished shawl in full-length drape",
							className: "aspect-[3/4] w-full md:aspect-[4/5]"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
							className: "mt-2 eyebrow",
							children: shawl?.mainImage?.caption ?? "Plate III — Full drape"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-3 gap-3 md:col-span-4 md:grid-cols-1 md:self-end",
						children: [
							["Fringe detail", "Placeholder for macro of hand-finished fringe"],
							["Embroidery macro", "Placeholder for macro of hand embroidery"],
							["Weave texture", "Placeholder for tactile weave texture crop"]
						].map(([l, a], index) => {
							const image = shawl?.gallery[index];
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaSlot, {
								src: image?.src,
								label: l,
								alt: image?.alt ?? a,
								className: "aspect-square w-full md:aspect-[16/9] [&>span]:max-md:hidden"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
								className: "mt-1 eyebrow !text-[0.6rem]",
								children: image?.caption ?? l
							})] }, l);
						})
					})
				]
			})
		})
	});
}
function PreservationSection({ cta }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "support",
		"aria-labelledby": "support-title",
		className: "border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1440px] gap-14 px-5 py-20 md:grid-cols-12 md:px-10 md:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Why this craft matters"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "support-title",
						className: "mt-4 text-4xl leading-tight md:text-5xl",
						children: cta.heading
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 leading-relaxed text-muted-foreground",
						children: cta.body
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t border-foreground/30 pt-8 md:col-span-5 md:col-start-8 md:border-l md:border-t-0 md:pl-10 md:pt-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: cta.eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-display text-3xl leading-snug",
						children: cta.statement
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: cta.buttonHref,
						className: "mt-8 inline-flex items-center gap-3 bg-slate px-6 py-3 eyebrow !text-paper transition-opacity hover:opacity-90",
						children: [
							cta.buttonLabel,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": true,
								children: "→"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed text-muted-foreground",
						children: cta.impactNote
					}),
					cta.isPlaceholderContact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-xs text-muted-foreground",
						children: "Placeholder contact address — to be replaced."
					})
				]
			})]
		})
	});
}
function SiteFooter({ brandName, footerText }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border bg-slate text-paper",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-[1440px] flex-col justify-between gap-6 px-5 py-12 md:flex-row md:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-2xl",
				children: brandName
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm text-paper/70",
				children: footerText
			})]
		})
	});
}
//#endregion
export { MediaSlot as a, ProcessChapter as c, HeroSection as i, ShawlDetailGallery as l, ArtisansSection as n, OriginSection as o, EmbroideredJourney as r, PreservationSection as s, ArtisanStory as t, SiteFooter as u };
