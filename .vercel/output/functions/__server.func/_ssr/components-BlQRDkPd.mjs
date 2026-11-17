import { o as require_jsx_runtime } from "../_libs/dnd-kit__react+react.mjs";
import { t as chapters } from "./chapters-C_aVntiJ.mjs";
import { n as demoSettings } from "./demo-content-BiMKquFk.mjs";
import { a as MediaSlot, c as ProcessChapter, i as HeroSection, l as ShawlDetailGallery, r as EmbroideredJourney, s as PreservationSection, t as ArtisanStory, u as SiteFooter } from "./Sections-DdgF8k4s.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/components-BlQRDkPd.js
var import_jsx_runtime = require_jsx_runtime();
function getMetadata(metadata) {
	return metadata ?? {};
}
function getAsset(metadata, id) {
	if (!id) return void 0;
	return metadata.assets[id] ?? metadata.assets[id.replace(/^drafts\./, "")];
}
function textImage(image, alt) {
	return image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		className: "h-full w-full object-cover",
		src: image.src,
		alt: alt || image.alt,
		loading: "lazy"
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaSlot, {
		alt: alt || "Documentary image placeholder",
		label: "Documentary image",
		className: "aspect-[4/3] w-full"
	});
}
function createVisualPageConfig(imageOptions, videoOptions, artisanOptions, shawlOptions, chapterOptions = chapters.map((chapter) => ({
	label: `${chapter.number}. ${chapter.title}`,
	value: String(chapter.number)
}))) {
	const imageField = {
		type: "select",
		label: "Choose an image from Documentary Media",
		options: [{
			label: "No image selected",
			value: ""
		}, ...imageOptions]
	};
	const artisanField = {
		type: "select",
		label: "Choose a consented artisan profile",
		options: [{
			label: "Select an artisan",
			value: ""
		}, ...artisanOptions]
	};
	return {
		categories: {
			storytelling: {
				title: "Storytelling",
				components: [
					"Hero",
					"TextImage",
					"EditorialGallery",
					"DocumentaryVideo",
					"Quote"
				]
			},
			craft: {
				title: "Craft and people",
				components: [
					"ArtisanProfile",
					"Journey",
					"ChapterContent",
					"ShawlCollection"
				]
			},
			closing: {
				title: "Closing sections",
				components: [
					"Preservation",
					"CallToAction",
					"Footer"
				]
			}
		},
		components: {
			Hero: {
				label: "Hero",
				fields: {
					eyebrow: {
						type: "text",
						label: "Small introductory label"
					},
					title: {
						type: "text",
						label: "Main heading"
					},
					emphasis: {
						type: "text",
						label: "Italic emphasis"
					},
					body: {
						type: "textarea",
						label: "Supporting text"
					},
					imageId: imageField,
					imageAlt: {
						type: "text",
						label: "Image alternative text"
					},
					ctaLabel: {
						type: "text",
						label: "Button label"
					},
					ctaHref: {
						type: "text",
						label: "Button destination (HTTPS or site path)"
					}
				},
				defaultProps: {
					eyebrow: "Discovering Roots",
					title: "A thread that carries generations",
					emphasis: "generations",
					body: "A documentary journey through the making of handmade Pashmina.",
					imageId: "",
					imageAlt: "Documentary photograph",
					ctaLabel: "Follow the thread",
					ctaHref: "#craft"
				},
				render: (props) => {
					const image = getAsset(getMetadata(props.metadata), props.imageId);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSection, {
						hero: {
							eyebrow: props.eyebrow,
							title: props.title,
							titleEmphasis: props.emphasis,
							intro: props.body,
							ctaLabel: props.ctaLabel,
							image: image ? {
								src: image.src,
								alt: props.imageAlt || image.alt
							} : void 0
						},
						shawl: null,
						ctaHref: props.ctaHref,
						includeOrigin: false
					});
				}
			},
			TextImage: {
				label: "Text and image",
				fields: {
					heading: {
						type: "text",
						label: "Section heading"
					},
					body: {
						type: "textarea",
						label: "Section text"
					},
					imageId: imageField,
					imageAlt: {
						type: "text",
						label: "Image alternative text"
					},
					caption: {
						type: "text",
						label: "Image caption"
					},
					imageSide: {
						type: "select",
						label: "Image position",
						options: [{
							label: "Image on the left",
							value: "left"
						}, {
							label: "Image on the right",
							value: "right"
						}]
					}
				},
				defaultProps: {
					heading: "A story shaped by hand",
					body: "Add verified documentary text for this section.",
					imageId: "",
					imageAlt: "Documentary image",
					caption: "",
					imageSide: "right"
				},
				render: (props) => {
					const image = getAsset(getMetadata(props.metadata), props.imageId);
					const imageFirst = props.imageSide === "left";
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "border-t border-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `mx-auto grid max-w-[1440px] gap-10 px-5 py-20 md:grid-cols-12 md:px-10 md:py-28 ${imageFirst ? "" : ""}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
								className: `md:col-span-6 ${imageFirst ? "md:order-first" : "md:order-last"}`,
								children: [textImage(image, props.imageAlt), props.caption && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
									className: "mt-3 eyebrow",
									children: props.caption
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "md:col-span-5 md:pt-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-4xl leading-tight md:text-5xl",
										children: props.heading
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-6 whitespace-pre-line leading-relaxed text-muted-foreground",
										children: props.body
									}),
									image?.credit && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-3 eyebrow",
										children: ["Image · ", image.credit]
									})
								]
							})]
						})
					});
				}
			},
			EditorialGallery: {
				label: "Editorial gallery",
				fields: {
					heading: {
						type: "text",
						label: "Gallery heading"
					},
					imageOneId: imageField,
					imageOneCaption: {
						type: "text",
						label: "First image caption"
					},
					imageTwoId: imageField,
					imageTwoCaption: {
						type: "text",
						label: "Second image caption"
					},
					imageThreeId: imageField,
					imageThreeCaption: {
						type: "text",
						label: "Third image caption"
					}
				},
				defaultProps: {
					heading: "Details of the cloth",
					imageOneId: "",
					imageOneCaption: "",
					imageTwoId: "",
					imageTwoCaption: "",
					imageThreeId: "",
					imageThreeCaption: ""
				},
				render: (props) => {
					const meta = getMetadata(props.metadata);
					const images = [
						[props.imageOneId, props.imageOneCaption],
						[props.imageTwoId, props.imageTwoCaption],
						[props.imageThreeId, props.imageThreeCaption]
					];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "border-t border-border bg-cashmere/40",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28",
							children: [props.heading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mb-10 text-4xl md:text-5xl",
								children: props.heading
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-5 md:grid-cols-3",
								children: images.map(([id, caption], index) => {
									const image = getAsset(meta, id);
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", { children: [
										textImage(image, image?.alt),
										caption && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
											className: "mt-3 eyebrow",
											children: caption
										}),
										image?.credit && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs text-muted-foreground",
											children: image.credit
										})
									] }, `${id}-${index}`);
								})
							})]
						})
					});
				}
			},
			DocumentaryVideo: {
				label: "Documentary video",
				fields: {
					heading: {
						type: "text",
						label: "Video heading"
					},
					mediaId: {
						type: "select",
						label: "Choose a documentary video",
						options: [{
							label: "Select a video",
							value: ""
						}, ...videoOptions]
					},
					videoUrl: {
						type: "text",
						label: "HTTPS video URL (optional)"
					},
					posterId: imageField,
					caption: {
						type: "text",
						label: "Caption"
					},
					credit: {
						type: "text",
						label: "Media credit"
					}
				},
				defaultProps: {
					heading: "In the workshop",
					mediaId: "",
					videoUrl: "",
					posterId: "",
					caption: "",
					credit: ""
				},
				render: (props) => {
					const meta = getMetadata(props.metadata);
					const source = getAsset(meta, props.mediaId);
					const poster = getAsset(meta, props.posterId);
					const src = source?.fileUrl ?? source?.externalUrl ?? props.videoUrl;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "border-t border-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-5xl px-5 py-16 md:px-10 md:py-20",
							children: [
								props.heading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mb-6 text-4xl md:text-5xl",
									children: props.heading
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaSlot, {
									kind: "video",
									src,
									externalUrl: src,
									alt: poster?.alt ?? "Documentary video",
									label: "Documentary video",
									className: "aspect-video w-full"
								}),
								props.caption && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm text-muted-foreground",
									children: props.caption
								}),
								(props.credit || source?.credit) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 eyebrow",
									children: ["Media · ", props.credit || source?.credit]
								})
							]
						})
					});
				}
			},
			ArtisanProfile: {
				label: "Artisan profile",
				fields: { artisanId: artisanField },
				defaultProps: { artisanId: "" },
				render: ({ artisanId, metadata }) => {
					const artisan = getMetadata(metadata).artisans[artisanId];
					if (!artisan || artisan.consentStatus !== "granted" || artisan.publicationStatus === "withdrawn" || artisan.publicationStatus !== "published" && !getMetadata(metadata).preview) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {});
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mx-auto max-w-5xl px-5 py-10 md:px-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArtisanStory, { portrait: {
							src: artisan.portrait?.src,
							alt: artisan.portrait?.alt ?? "Consented artisan portrait",
							role: [artisan.displayName, artisan.role].filter(Boolean).join(" — ") || "Artisan",
							voice: artisan.quoteConsent ? artisan.quote : void 0,
							credit: artisan.portrait?.credit
						} }), artisan.biography && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-2xl whitespace-pre-line leading-relaxed text-muted-foreground",
							children: artisan.biography
						})]
					});
				}
			},
			Quote: {
				label: "Consented artisan quotation",
				fields: { artisanId: artisanField },
				defaultProps: { artisanId: "" },
				render: ({ artisanId, metadata }) => {
					const artisan = getMetadata(metadata).artisans[artisanId];
					if (!artisan || artisan.consentStatus !== "granted" || !artisan.quoteConsent || !artisan.quote || artisan.publicationStatus === "withdrawn") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {});
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "mx-auto max-w-4xl px-5 py-16 text-center md:px-10 md:py-24",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "font-display text-3xl italic leading-snug md:text-5xl",
							children: [
								"“",
								artisan.quote,
								"”"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
							className: "mt-6 eyebrow",
							children: [artisan.displayName, artisan.role].filter(Boolean).join(" · ")
						})]
					});
				}
			},
			Journey: {
				label: "Eight-step journey",
				fields: { layout: {
					type: "select",
					label: "Journey presentation",
					options: [{
						label: "Thread and chapter map",
						value: "map"
					}, {
						label: "Eight chronological chapters",
						value: "chapters"
					}]
				} },
				defaultProps: { layout: "map" },
				render: ({ layout, metadata }) => {
					const chapters$1 = getMetadata(metadata).chapters ?? chapters;
					return layout === "chapters" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "space-y-12 border-t border-border py-12",
						children: chapters$1.map((chapter, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto max-w-5xl px-5 md:px-10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessChapter, {
								chapter,
								active: true,
								index
							})
						}, chapter.id))
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmbroideredJourney, { chapters: chapters$1 });
				}
			},
			ChapterContent: {
				label: "Journey chapter",
				fields: { chapterId: {
					type: "select",
					label: "Choose a fixed journey chapter",
					options: [{
						label: "Select a chapter",
						value: ""
					}, ...chapterOptions]
				} },
				defaultProps: { chapterId: "1" },
				render: ({ chapterId, metadata }) => {
					const meta = getMetadata(metadata);
					const chapterNumber = Number(chapterId);
					const index = meta.chapters.findIndex((chapter) => chapter.number === chapterNumber);
					const chapter = (index >= 0 ? meta.chapters[index] : void 0) ?? chapters.find((item) => item.number === chapterNumber);
					return chapter ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto max-w-5xl px-5 md:px-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessChapter, {
							chapter,
							active: true,
							index: Math.max(index, 0)
						})
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {});
				}
			},
			ShawlCollection: {
				label: "Shawl collection",
				fields: { shawlId: {
					type: "select",
					label: "Choose a documented shawl",
					options: [{
						label: "Select a shawl",
						value: ""
					}, ...shawlOptions]
				} },
				defaultProps: { shawlId: "" },
				render: ({ shawlId, metadata }) => {
					const shawl = getMetadata(metadata).shawls[shawlId];
					return shawl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShawlDetailGallery, { shawl }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {});
				}
			},
			Preservation: {
				label: "Preservation section",
				fields: {
					eyebrow: {
						type: "text",
						label: "Section label"
					},
					heading: {
						type: "text",
						label: "Heading"
					},
					body: {
						type: "textarea",
						label: "Supporting text"
					},
					statement: {
						type: "textarea",
						label: "Closing statement"
					},
					buttonLabel: {
						type: "text",
						label: "Button label"
					},
					buttonHref: {
						type: "text",
						label: "Button destination (HTTPS or site path)"
					},
					impactNote: {
						type: "text",
						label: "Additional note"
					}
				},
				defaultProps: {
					eyebrow: "Why this craft matters",
					heading: "Keep the craft alive",
					body: "Share a verified account of why this craft matters.",
					statement: "An invitation to learn, listen and support.",
					buttonLabel: "Learn more",
					buttonHref: "#support",
					impactNote: ""
				},
				render: ({ eyebrow, heading, body, statement, buttonLabel, buttonHref, impactNote }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreservationSection, { cta: {
					eyebrow,
					heading,
					body,
					statement,
					buttonLabel,
					buttonHref,
					impactNote,
					isPlaceholderContact: false
				} })
			},
			CallToAction: {
				label: "Invitation / call to action",
				fields: {
					heading: {
						type: "text",
						label: "Heading"
					},
					body: {
						type: "textarea",
						label: "Supporting text"
					},
					buttonLabel: {
						type: "text",
						label: "Button label"
					},
					buttonHref: {
						type: "text",
						label: "Button destination (HTTPS or site path)"
					}
				},
				defaultProps: {
					heading: "Continue the conversation",
					body: "Invite visitors to learn more or make a private enquiry.",
					buttonLabel: "Get in touch",
					buttonHref: "#support"
				},
				render: ({ heading, body, buttonLabel, buttonHref }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "border-t border-border bg-cashmere/40",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-5xl px-5 py-16 md:px-10 md:py-24",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "max-w-3xl text-4xl leading-tight md:text-5xl",
								children: heading
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-2xl whitespace-pre-line leading-relaxed text-muted-foreground",
								children: body
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: buttonHref,
								rel: buttonHref.startsWith("https:") ? "noopener noreferrer" : void 0,
								className: "mt-8 inline-flex items-center gap-3 bg-slate px-6 py-3 eyebrow !text-paper transition-opacity hover:opacity-90",
								children: [
									buttonLabel,
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-hidden": true,
										children: "→"
									})
								]
							})
						]
					})
				})
			},
			Footer: {
				label: "Website footer",
				fields: {
					brandName: {
						type: "text",
						label: "Brand name"
					},
					footerText: {
						type: "text",
						label: "Footer note"
					}
				},
				defaultProps: {
					brandName: demoSettings.brandName,
					footerText: demoSettings.footerText
				},
				render: ({ brandName, footerText }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {
					brandName,
					footerText
				})
			}
		}
	};
}
function createPuckPageMetadata(assets, artisans, chapters, shawls, preview = false) {
	return {
		assets,
		artisans,
		chapters,
		shawls,
		preview
	};
}
//#endregion
export { createVisualPageConfig as n, createPuckPageMetadata as t };
