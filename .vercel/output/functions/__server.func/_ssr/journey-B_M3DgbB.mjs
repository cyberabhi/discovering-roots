import { a as stringType, i as recordType, n as enumType, o as unknownType, r as objectType, t as arrayType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/journey-B_M3DgbB.js
var shortText = stringType().max(500);
var longText = stringType().max(1e4);
var referenceId = stringType().max(128).regex(/^[a-zA-Z0-9._-]*$/);
function safeLink(value) {
	const href = value.trim();
	if (!href) return true;
	if (href.startsWith("#")) return href.length > 1;
	if (href.startsWith("/") && !href.startsWith("//")) return true;
	try {
		return new URL(href).protocol === "https:";
	} catch {
		return false;
	}
}
var href = stringType().max(2048).refine(safeLink, "Use a same-site path, page anchor, or HTTPS link.");
var heading = stringType().trim().min(1).max(180);
var optionalHeading = stringType().max(180);
var media = referenceId;
var propsByType = {
	Hero: objectType({
		eyebrow: shortText,
		title: heading,
		emphasis: optionalHeading,
		body: longText,
		imageId: media,
		imageAlt: shortText,
		ctaLabel: shortText,
		ctaHref: href
	}).strict(),
	TextImage: objectType({
		heading,
		body: longText,
		imageId: media,
		imageAlt: shortText,
		caption: shortText,
		imageSide: enumType(["left", "right"])
	}).strict(),
	EditorialGallery: objectType({
		heading: optionalHeading,
		imageOneId: media,
		imageOneCaption: shortText,
		imageTwoId: media,
		imageTwoCaption: shortText,
		imageThreeId: media,
		imageThreeCaption: shortText
	}).strict(),
	DocumentaryVideo: objectType({
		heading: optionalHeading,
		mediaId: media,
		videoUrl: stringType().max(2048).refine((value) => !value || safeLink(value), "Use an HTTPS video URL."),
		posterId: media,
		caption: shortText,
		credit: shortText
	}).strict().superRefine((props, context) => {
		if (props.videoUrl && !props.mediaId && !props.credit.trim()) context.addIssue({
			code: "custom",
			path: ["credit"],
			message: "Add the documentary video credit."
		});
	}),
	ArtisanProfile: objectType({ artisanId: referenceId }).strict(),
	Quote: objectType({ artisanId: referenceId }).strict(),
	Journey: objectType({ layout: enumType(["map", "chapters"]) }).strict(),
	ChapterContent: objectType({ chapterId: enumType([
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8"
	]) }).strict(),
	ShawlCollection: objectType({ shawlId: referenceId }).strict(),
	Preservation: objectType({
		eyebrow: shortText,
		heading,
		body: longText,
		statement: longText,
		buttonLabel: shortText,
		buttonHref: href,
		impactNote: shortText
	}).strict(),
	CallToAction: objectType({
		heading,
		body: longText,
		buttonLabel: shortText,
		buttonHref: href
	}).strict(),
	Footer: objectType({
		brandName: shortText,
		footerText: shortText
	}).strict()
};
var visualPageBlockTypes = Object.keys(propsByType);
var contentBlock = objectType({
	type: enumType(visualPageBlockTypes),
	id: stringType().min(1).max(128),
	props: recordType(stringType(), unknownType())
}).superRefine((block, context) => {
	const result = propsByType[block.type].safeParse(block.props);
	if (!result.success) for (const issue of result.error.issues) context.addIssue({
		code: "custom",
		path: ["props", ...issue.path],
		message: issue.message
	});
});
var pageDataSchema = objectType({
	root: objectType({ props: objectType({ title: stringType().optional() }) }).strict(),
	content: arrayType(contentBlock).max(80)
}).strict().superRefine((data, context) => {
	const ids = /* @__PURE__ */ new Set();
	data.content.forEach((block, index) => {
		if (ids.has(block.id)) context.addIssue({
			code: "custom",
			path: [
				"content",
				index,
				"id"
			],
			message: "Every page section must have a unique identifier."
		});
		ids.add(block.id);
	});
	if (JSON.stringify(data).length > 2e5) context.addIssue({
		code: "custom",
		message: "Page configuration must be smaller than 200 KB."
	});
});
function validateVisualPageData(input) {
	const result = pageDataSchema.safeParse(input);
	if (!result.success) return {
		success: false,
		issues: result.error.issues.map((issue) => `${issue.path.join(".")}: ${issue.message}`)
	};
	return {
		success: true,
		data: {
			...result.data,
			root: {
				...result.data.root,
				props: {
					...result.data.root.props,
					title: result.data.root.props.title ?? ""
				}
			}
		},
		issues: []
	};
}
function parseVisualPageData(serialized) {
	if (typeof serialized !== "string" || serialized.length > 2e5) return void 0;
	try {
		const result = validateVisualPageData(JSON.parse(serialized));
		return result.success ? result.data : void 0;
	} catch {
		return;
	}
}
function normalizeVisualPageSlug(value) {
	return value.normalize("NFKD").toLowerCase().trim().replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 80);
}
function isValidVisualPageSlug(value) {
	return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value) && !(/* @__PURE__ */ new Set([
		"api",
		"studio",
		"pages"
	])).has(value);
}
var emptyVisualPageData = {
	root: { props: { title: "" } },
	content: []
};
var JOURNEY_STEPS = [
	{
		number: 1,
		title: "Fibre Collection",
		kicker: "Combing the undercoat",
		slug: "fibre-collection",
		phase: "preLoom"
	},
	{
		number: 2,
		title: "Journey and Gathering",
		kicker: "The journey down",
		slug: "journey-gathering",
		phase: "preLoom"
	},
	{
		number: 3,
		title: "Sorting and Dehairing",
		kicker: "Sorting by hand",
		slug: "sorting-dehairing",
		phase: "preLoom"
	},
	{
		number: 4,
		title: "Carding and Combing",
		kicker: "Carding the cloud",
		slug: "carding-combing",
		phase: "preLoom"
	},
	{
		number: 5,
		title: "Hand Spinning and Doubling",
		kicker: "Spinning on the wheel",
		slug: "hand-spinning",
		phase: "preLoom"
	},
	{
		number: 6,
		title: "Starching and Warping",
		kicker: "Preparing the warp",
		slug: "warping",
		phase: "onLoom"
	},
	{
		number: 7,
		title: "Handloom Weaving",
		kicker: "At the handloom",
		slug: "weaving",
		phase: "onLoom"
	},
	{
		number: 8,
		title: "Finishing",
		kicker: "The final touch",
		slug: "finishing",
		phase: "onLoom"
	}
];
function journeyChapterId(stepNumber) {
	return `journeyChapter-${String(stepNumber).padStart(2, "0")}`;
}
function validateJourneyStepNumber(value) {
	return typeof value === "number" && Number.isInteger(value) && value >= 1 && value <= JOURNEY_STEPS.length ? true : "Choose one of the eight fixed journey steps.";
}
function isRecord(value) {
	return value !== null && typeof value === "object" && !Array.isArray(value);
}
function validateArtisanConsent(value) {
	if (!isRecord(value)) return true;
	const document = value;
	if ([
		"displayName",
		"portrait",
		"biography",
		"personalStory",
		"location"
	].some((field) => {
		const value = document[field];
		return typeof value === "string" ? value.trim().length > 0 : value != null;
	}) && document["consentStatus"] !== "granted") return "Identity consent must be granted before adding identifying information or publishing.";
	if (document["quote"] && document["quoteConsent"] !== true) return "Separate quote consent must be granted before adding or publishing a quotation.";
	return true;
}
function validateMediaPublication(value) {
	if (!isRecord(value) || value["publicationStatus"] !== "published") return true;
	if (value["consentStatus"] !== "granted" && value["consentStatus"] !== "notApplicable") return "Media consent must be granted before publication.";
	if (!value["credit"] || typeof value["credit"] !== "string") return "Add an image or media credit before publication.";
	return true;
}
//#endregion
export { journeyChapterId as a, validateArtisanConsent as c, validateVisualPageData as d, isValidVisualPageSlug as i, validateJourneyStepNumber as l, emptyVisualPageData as n, normalizeVisualPageSlug as o, isRecord as r, parseVisualPageData as s, JOURNEY_STEPS as t, validateMediaPublication as u };
