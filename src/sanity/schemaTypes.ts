import { defineArrayMember, defineField, defineType } from "sanity";
import {
  validateArtisanConsent,
  validateJourneyStepNumber,
  validateMediaPublication,
  isRecord,
} from "./journey";

const imageFields = [
  defineField({
    name: "alt",
    title: "Alternative text",
    type: "string",
    description: "Describe the image for visitors using screen readers.",
    validation: (Rule) => Rule.required().max(180),
  }),
  defineField({ name: "caption", title: "Caption", type: "string" }),
  defineField({
    name: "credit",
    title: "Image credit",
    type: "string",
    description: "Name the photographer, archive, or agreed source credit.",
    validation: (Rule) => Rule.required(),
  }),
] as const;

const documentaryImage = defineType({
  name: "documentaryImage",
  title: "Documentary image",
  type: "image",
  options: { hotspot: true },
  fields: [...imageFields],
});

const mediaEmbed = defineType({
  name: "mediaEmbed",
  title: "Documentary media",
  type: "object",
  fields: [
    defineField({
      name: "mediaType",
      title: "Media type",
      type: "string",
      options: {
        list: [
          { title: "Video", value: "video" },
          { title: "Audio", value: "audio" },
        ],
      },
    }),
    defineField({
      name: "file",
      title: "Upload a file",
      type: "file",
      options: { accept: "video/mp4,video/webm,audio/mpeg,audio/mp4,audio/wav,audio/ogg" },
      description: "Upload a replacement file here, or provide an external link below.",
    }),
    defineField({
      name: "externalUrl",
      title: "External media URL",
      type: "url",
      description: "Use a public HTTPS link when the media is hosted elsewhere.",
      validation: (Rule) => Rule.uri({ scheme: ["https"] }),
    }),
    defineField({ name: "caption", title: "Caption or player label", type: "string" }),
    defineField({
      name: "credit",
      title: "Media credit",
      type: "string",
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const parent = context.parent;
          if (!isRecord(parent)) return true;
          return (parent["file"] || parent["externalUrl"]) && !value
            ? "Add a credit for this documentary media."
            : true;
        }),
    }),
    defineField({
      name: "transcript",
      title: "Transcript or accessibility notes",
      type: "text",
      rows: 4,
    }),
  ],
});

const portableText = defineType({
  name: "chapterBody",
  title: "Chapter story blocks",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "Heading", value: "h3" },
        { title: "Quote", value: "blockquote" },
      ],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
        ],
        annotations: [
          {
            name: "externalLink",
            title: "External link",
            type: "object",
            fields: [
              defineField({
                name: "href",
                title: "URL",
                type: "url",
                validation: (Rule) => Rule.required().uri({ scheme: ["https"] }),
              }),
            ],
          },
        ],
      },
    }),
  ],
});

export const journeyChapterSchema = defineType({
  name: "journeyChapter",
  title: "Journey chapter",
  type: "document",
  groups: [
    { name: "story", title: "Story", default: true },
    { name: "media", title: "Images and recordings" },
    { name: "people", title: "Artisans" },
    { name: "review", title: "Review and notes" },
  ],
  fields: [
    defineField({
      name: "stepNumber",
      title: "Journey step",
      type: "number",
      group: "story",
      readOnly: true,
      validation: (Rule) =>
        Rule.required()
          .integer()
          .min(1)
          .max(8)
          .custom(async (value, context) => {
            const result = validateJourneyStepNumber(value);
            if (result !== true) return result;
            const id = context.document?._id?.replace(/^drafts\./, "");
            if (!id) return true;
            const isUnique = await context
              .getClient({ apiVersion: "2025-02-19" })
              .fetch<boolean>(
                'count(*[_type == "journeyChapter" && stepNumber == $number && _id != $id && _id != $draftId]) == 0',
                { number: value, id, draftId: `drafts.${id}` },
              );
            return isUnique || "This fixed journey step already has a chapter.";
          }),
      description: "Fixed sequence number. Use the Eight-Step Journey list to open a chapter.",
    }),
    defineField({
      name: "title",
      title: "Chapter title",
      type: "string",
      group: "story",
      validation: (Rule) => Rule.required().min(3).max(100),
    }),
    defineField({
      name: "slug",
      title: "Stable chapter address",
      type: "slug",
      group: "story",
      options: {
        source: "title",
        slugify: (value) =>
          value
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, ""),
        isUnique: async (slug, context) => {
          const id = context.document?._id?.replace(/^drafts\./, "");
          if (!id) return true;
          return context
            .getClient({ apiVersion: "2025-02-19" })
            .fetch(
              'count(*[_type == "journeyChapter" && slug.current == $slug && _id != $id && _id != $draftId]) == 0',
              { slug, id, draftId: `drafts.${id}` },
            );
        },
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "shortLabel",
      title: "Short chapter label",
      type: "string",
      group: "story",
      validation: (Rule) => Rule.required().max(70),
    }),
    defineField({
      name: "phase",
      title: "Journey section",
      type: "string",
      group: "story",
      readOnly: true,
      options: {
        list: [
          { title: "Before the Loom · Chapters 1–5", value: "preLoom" },
          { title: "At the Loom · Chapters 6–8", value: "onLoom" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "eyebrow",
      title: "Eyebrow (optional)",
      type: "string",
      group: "story",
    }),
    defineField({
      name: "intro",
      title: "Short story",
      type: "text",
      rows: 4,
      group: "story",
      validation: (Rule) => Rule.required().min(20).max(700),
      description: "The concise story shown with the chapter.",
    }),
    defineField({
      name: "body",
      title: "Additional story",
      type: "chapterBody",
      group: "story",
    }),
    defineField({
      name: "heroImage",
      title: "Featured documentary image",
      type: "documentaryImage",
      group: "media",
    }),
    defineField({
      name: "documentaryVideo",
      title: "Documentary video",
      type: "mediaEmbed",
      group: "media",
      description: "Upload a clip or add a secure external link.",
    }),
    defineField({
      name: "audio",
      title: "Audio recording",
      type: "mediaEmbed",
      group: "media",
      description: "Upload a field recording or add a secure external link.",
    }),
    defineField({
      name: "artisans",
      title: "Related artisan profiles",
      type: "array",
      group: "people",
      of: [defineArrayMember({ type: "reference", to: [{ type: "artisanProfile" }] })],
    }),
    defineField({
      name: "toolsAndMaterials",
      title: "Tools and materials",
      type: "array",
      group: "story",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({ name: "locationLabel", title: "Location label", type: "string", group: "story" }),
    defineField({
      name: "artisanReviewStatus",
      title: "Artisan review",
      type: "string",
      group: "review",
      initialValue: "needsReview",
      options: {
        list: [
          { title: "Needs review", value: "needsReview" },
          { title: "Verified with artisans", value: "verified" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publicationStatus",
      title: "Website publication",
      type: "string",
      group: "review",
      initialValue: "draft",
      options: {
        list: [
          { title: "Draft — hidden from the website", value: "draft" },
          { title: "Published after review", value: "published" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "editorialNotes",
      title: "Private editorial notes",
      type: "text",
      rows: 4,
      group: "review",
      description: "Notes for editors; do not enter sensitive personal information.",
    }),
  ],
  validation: (Rule) =>
    Rule.custom((document) => {
      if (document?.["publicationStatus"] !== "published") return true;
      if (document["artisanReviewStatus"] !== "verified") {
        return "Mark the chapter as verified with artisans before publishing.";
      }
      if (!document["intro"]) return "Add the reviewed short story before publishing.";
      return true;
    }),
  preview: {
    select: { title: "title", subtitle: "stepNumber", media: "heroImage" },
    prepare({ title, subtitle, media }) {
      return {
        title: `${String(subtitle ?? "").padStart(2, "0")} · ${title ?? "Untitled chapter"}`,
        media,
      };
    },
  },
});

export const siteSettingsSchema = defineType({
  name: "siteSettings",
  title: "Website settings and homepage",
  type: "document",
  groups: [
    { name: "identity", title: "Website identity", default: true },
    { name: "hero", title: "Homepage introduction" },
    { name: "navigation", title: "Navigation" },
    { name: "preservation", title: "Preservation call to action" },
    { name: "footer", title: "Footer and contact" },
    { name: "seo", title: "Search and social sharing" },
  ],
  fields: [
    defineField({
      name: "brandName",
      title: "Website name",
      type: "string",
      group: "identity",
      initialValue: "Discovering Roots",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "documentaryImage",
      group: "identity",
      description: "Optional. Use a credited image with meaningful alternative text.",
    }),
    defineField({
      name: "tagline",
      title: "Short description",
      type: "text",
      rows: 2,
      group: "identity",
    }),
    defineField({
      name: "hero",
      title: "Homepage introduction",
      type: "object",
      group: "hero",
      fields: [
        defineField({ name: "eyebrow", title: "Small introduction", type: "string" }),
        defineField({
          name: "title",
          title: "Main heading",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({ name: "titleEmphasis", title: "Italic heading phrase", type: "string" }),
        defineField({
          name: "intro",
          title: "Short introduction",
          type: "text",
          rows: 3,
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "ctaLabel",
          title: "Journey link label",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({ name: "image", title: "Hero landscape", type: "documentaryImage" }),
      ],
    }),
    defineField({
      name: "navigation",
      title: "Navigation links",
      type: "array",
      group: "navigation",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Link label",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "href",
              title: "Page section or HTTPS link",
              type: "string",
              validation: (Rule) =>
                Rule.required().custom((value) =>
                  typeof value === "string" && (value.startsWith("#") || /^https:\/\//.test(value))
                    ? true
                    : "Use a page section such as #craft or a secure HTTPS link.",
                ),
            }),
          ],
          preview: { select: { title: "label", subtitle: "href" } },
        }),
      ],
    }),
    defineField({
      name: "preservationCta",
      title: "Preservation call to action",
      type: "object",
      group: "preservation",
      fields: [
        defineField({ name: "eyebrow", title: "Section label", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "body", title: "Description", type: "text", rows: 4 }),
        defineField({ name: "statement", title: "Highlighted statement", type: "text", rows: 3 }),
        defineField({ name: "buttonLabel", title: "Button label", type: "string" }),
        defineField({
          name: "buttonHref",
          title: "Button destination",
          type: "url",
          validation: (Rule) => Rule.uri({ scheme: ["https", "mailto"] }),
        }),
        defineField({ name: "impactNote", title: "Impact note", type: "text", rows: 2 }),
      ],
    }),
    defineField({
      name: "footer",
      title: "Footer",
      type: "object",
      group: "footer",
      fields: [defineField({ name: "text", title: "Footer description", type: "text", rows: 3 })],
    }),
    defineField({
      name: "contact",
      title: "Contact details",
      type: "object",
      group: "footer",
      fields: [
        defineField({
          name: "email",
          title: "Public email",
          type: "string",
          validation: (Rule) => Rule.email(),
        }),
        defineField({ name: "phone", title: "Public phone (optional)", type: "string" }),
      ],
    }),
    defineField({
      name: "socialLinks",
      title: "Social links",
      type: "array",
      group: "footer",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "platform",
              title: "Platform name",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "url",
              title: "Secure profile URL",
              type: "url",
              validation: (Rule) => Rule.required().uri({ scheme: ["https"] }),
            }),
          ],
          preview: { select: { title: "platform", subtitle: "url" } },
        }),
      ],
    }),
    defineField({
      name: "seo",
      title: "Search and social sharing",
      type: "object",
      group: "seo",
      fields: [
        defineField({
          name: "title",
          title: "Search title",
          type: "string",
          validation: (Rule) => Rule.max(70),
        }),
        defineField({
          name: "description",
          title: "Search description",
          type: "text",
          rows: 3,
          validation: (Rule) => Rule.max(180),
        }),
        defineField({
          name: "defaultShareImage",
          title: "Default sharing image",
          type: "documentaryImage",
        }),
      ],
    }),
  ],
  preview: {
    select: { title: "brandName" },
    prepare: ({ title }) => ({ title: title ?? "Website settings" }),
  },
});

export const artisanProfileSchema = defineType({
  name: "artisanProfile",
  title: "Artisan profile",
  type: "document",
  groups: [
    { name: "profile", title: "Profile", default: true },
    { name: "stories", title: "Story and quotation" },
    { name: "consent", title: "Consent and publication" },
  ],
  fields: [
    defineField({
      name: "displayName",
      title: "Name to publish",
      type: "string",
      group: "profile",
    }),
    defineField({
      name: "portrait",
      title: "Portrait",
      type: "documentaryImage",
      group: "profile",
    }),
    defineField({ name: "biography", title: "Biography", type: "text", rows: 4, group: "profile" }),
    defineField({ name: "role", title: "Craft specialization", type: "string", group: "profile" }),
    defineField({ name: "location", title: "Location", type: "string", group: "profile" }),
    defineField({
      name: "personalStory",
      title: "Personal story",
      type: "text",
      rows: 6,
      group: "stories",
    }),
    defineField({ name: "quote", title: "Quotation", type: "text", rows: 3, group: "stories" }),
    defineField({
      name: "quoteConsent",
      title: "Separate quote consent granted",
      type: "boolean",
      initialValue: false,
      group: "consent",
      description: "Must be explicitly enabled independently of identity consent.",
    }),
    defineField({
      name: "consentStatus",
      title: "Identity consent",
      type: "string",
      initialValue: "pending",
      group: "consent",
      options: {
        list: [
          { title: "Pending — do not publish identity", value: "pending" },
          { title: "Granted", value: "granted" },
          { title: "Withdrawn — remove identifying material", value: "withdrawn" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publicationStatus",
      title: "Website publication",
      type: "string",
      initialValue: "draft",
      group: "consent",
      options: {
        list: [
          { title: "Draft — hidden from website", value: "draft" },
          { title: "Published on website", value: "published" },
          { title: "Withdrawn — hidden from website", value: "withdrawn" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "credit",
      title: "Portrait / story credit",
      type: "string",
      group: "profile",
    }),
    defineField({
      name: "relatedChapters",
      title: "Related journey chapters",
      type: "array",
      group: "stories",
      of: [defineArrayMember({ type: "reference", to: [{ type: "journeyChapter" }] })],
    }),
    defineField({
      name: "editorialNotes",
      title: "Private consent record or editorial notes",
      type: "text",
      rows: 4,
      group: "consent",
      description:
        "Do not enter sensitive personal data. Keep signed consent records in approved storage.",
    }),
  ],
  validation: (Rule) =>
    Rule.custom((document) => {
      const result = validateArtisanConsent(document);
      if (result !== true) return result;
      if (document?.["publicationStatus"] === "published") {
        if (document["consentStatus"] !== "granted") {
          return "Identity consent must be granted before this profile can be published.";
        }
        if (!document["displayName"])
          return "Add the agreed name or public name before publication.";
      }
      return true;
    }),
  preview: {
    select: { title: "displayName", subtitle: "role", media: "portrait" },
    prepare: ({ title, subtitle, media }) => ({
      title: title ?? "Unidentified artisan",
      subtitle: subtitle ?? "Craft specialization not set",
      media,
    }),
  },
});

export const shawlSchema = defineType({
  name: "shawl",
  title: "Shawl or collection",
  type: "document",
  groups: [
    { name: "details", title: "Collection details", default: true },
    { name: "craft", title: "Craft and provenance" },
    { name: "people", title: "Artisans" },
    { name: "editorial", title: "Publication and notes" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Shawl or collection name",
      type: "string",
      group: "details",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Collection address",
      type: "slug",
      group: "details",
      options: { source: "title" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 5,
      group: "details",
    }),
    defineField({
      name: "mainImage",
      title: "Full shawl photograph",
      type: "documentaryImage",
      group: "details",
    }),
    defineField({
      name: "gallery",
      title: "Detail photographs",
      type: "array",
      group: "details",
      of: [defineArrayMember({ type: "documentaryImage" })],
    }),
    defineField({
      name: "materials",
      title: "Materials (only verified details)",
      type: "array",
      group: "craft",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "craftDetails",
      title: "Craft details (verified)",
      type: "text",
      rows: 4,
      group: "craft",
    }),
    defineField({
      name: "dimensions",
      title: "Dimensions (if documented)",
      type: "string",
      group: "craft",
    }),
    defineField({
      name: "provenance",
      title: "Provenance (verified source only)",
      type: "text",
      rows: 3,
      group: "craft",
    }),
    defineField({
      name: "provenanceVerified",
      title: "Provenance verified with source",
      type: "boolean",
      initialValue: false,
      group: "craft",
    }),
    defineField({
      name: "artisans",
      title: "Associated artisan profiles",
      type: "array",
      group: "people",
      of: [defineArrayMember({ type: "reference", to: [{ type: "artisanProfile" }] })],
    }),
    defineField({
      name: "publicationStatus",
      title: "Collection visibility",
      type: "string",
      initialValue: "draft",
      group: "editorial",
      options: {
        list: [
          { title: "Draft — hidden", value: "draft" },
          { title: "Published", value: "published" },
          { title: "Archived", value: "archived" },
        ],
      },
    }),
    defineField({
      name: "editorialNotes",
      title: "Editorial notes",
      type: "text",
      rows: 4,
      group: "editorial",
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "publicationStatus", media: "mainImage" },
    prepare: ({ title, subtitle, media }) => ({
      title: title ?? "Untitled collection",
      subtitle,
      media,
    }),
  },
});

export const documentaryMediaSchema = defineType({
  name: "documentaryMedia",
  title: "Documentary media",
  type: "document",
  groups: [
    { name: "asset", title: "Media asset", default: true },
    { name: "rights", title: "Credits and usage rights" },
    { name: "consent", title: "Consent and publication" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Media title",
      type: "string",
      group: "asset",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "kind",
      title: "Media type",
      type: "string",
      group: "asset",
      options: {
        list: [
          { title: "Image", value: "image" },
          { title: "Video", value: "video" },
          { title: "Audio", value: "audio" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Upload image",
      type: "documentaryImage",
      group: "asset",
      hidden: ({ document }) => document?.["kind"] !== "image",
    }),
    defineField({
      name: "file",
      title: "Upload video or audio",
      type: "file",
      group: "asset",
      options: { accept: "video/mp4,video/webm,audio/mpeg,audio/mp4,audio/wav,audio/ogg" },
      hidden: ({ document }) => document?.["kind"] !== "video" && document?.["kind"] !== "audio",
    }),
    defineField({ name: "alt", title: "Alternative text", type: "string", group: "asset" }),
    defineField({ name: "caption", title: "Caption", type: "string", group: "asset" }),
    defineField({
      name: "credit",
      title: "Credit / rights holder",
      type: "string",
      group: "rights",
    }),
    defineField({
      name: "usageRights",
      title: "Usage rights or licence",
      type: "text",
      rows: 3,
      group: "rights",
      description: "Record the agreed public-use terms or licence reference.",
    }),
    defineField({
      name: "consentStatus",
      title: "People / location consent",
      type: "string",
      initialValue: "pending",
      group: "consent",
      options: {
        list: [
          { title: "Pending — do not publish", value: "pending" },
          { title: "Granted", value: "granted" },
          { title: "Not applicable", value: "notApplicable" },
          { title: "Withdrawn — remove from website", value: "withdrawn" },
        ],
      },
    }),
    defineField({
      name: "publicationStatus",
      title: "Website publication",
      type: "string",
      initialValue: "draft",
      group: "consent",
      options: {
        list: [
          { title: "Draft — hidden", value: "draft" },
          { title: "Published", value: "published" },
          { title: "Withdrawn — hidden", value: "withdrawn" },
        ],
      },
    }),
    defineField({
      name: "externalUrl",
      title: "External HTTPS media URL",
      type: "url",
      group: "asset",
      validation: (Rule) => Rule.uri({ scheme: ["https"] }),
      hidden: ({ document }) => document?.["kind"] !== "video" && document?.["kind"] !== "audio",
    }),
    defineField({
      name: "editorialNotes",
      title: "Editorial notes",
      type: "text",
      rows: 4,
      group: "consent",
    }),
  ],
  validation: (Rule) =>
    Rule.custom((document) => {
      const result = validateMediaPublication(document);
      if (result !== true) return result;
      if (
        document?.["publicationStatus"] === "published" &&
        document["consentStatus"] !== "granted" &&
        document["consentStatus"] !== "notApplicable"
      ) {
        return "Record granted consent or mark consent as not applicable before publication.";
      }
      if (document?.["publicationStatus"] === "published") {
        const kind = document["kind"];
        const hasAsset =
          kind === "image"
            ? Boolean(document["image"])
            : Boolean(document["file"] || document["externalUrl"]);
        if (!hasAsset) return "Add the media asset before publication.";
        if (kind === "image" && !document["alt"]) {
          return "Add alternative text before publishing an image.";
        }
        if (!document["usageRights"]) {
          return "Record usage rights before publishing media.";
        }
      }
      return true;
    }),
  preview: { select: { title: "title", subtitle: "kind", media: "image" } },
});

export const visualPageSchema = defineType({
  name: "visualPage",
  title: "Visual page configuration",
  type: "document",
  groups: [
    { name: "page", title: "Page", default: true },
    { name: "configuration", title: "Future visual layout" },
    { name: "seo", title: "Search and sharing" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Page title",
      type: "string",
      group: "page",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Page path",
      type: "slug",
      group: "page",
      options: { source: "title" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "pageConfig",
      title: "Page configuration data",
      type: "text",
      rows: 14,
      group: "configuration",
      description:
        "Reserved for a future Puck page builder. Store valid JSON only; this does not render in the current website.",
      validation: (Rule) =>
        Rule.custom((value) => {
          if (!value) return true;
          try {
            JSON.parse(value);
            return true;
          } catch {
            return "Enter valid JSON configuration.";
          }
        }),
    }),
    defineField({
      name: "publicationStatus",
      title: "Website publication",
      type: "string",
      group: "page",
      initialValue: "draft",
      options: {
        list: [
          { title: "Draft — hidden", value: "draft" },
          { title: "Published", value: "published" },
          { title: "Archived", value: "archived" },
        ],
      },
    }),
    defineField({
      name: "seo",
      title: "Search and social sharing",
      type: "object",
      group: "seo",
      fields: [
        defineField({
          name: "title",
          title: "Search title",
          type: "string",
          validation: (Rule) => Rule.max(70),
        }),
        defineField({
          name: "description",
          title: "Search description",
          type: "text",
          rows: 3,
          validation: (Rule) => Rule.max(180),
        }),
        defineField({ name: "shareImage", title: "Sharing image", type: "documentaryImage" }),
      ],
    }),
  ],
  preview: { select: { title: "title", subtitle: "slug.current" } },
});

export const schemaTypes = [
  documentaryImage,
  mediaEmbed,
  portableText,
  siteSettingsSchema,
  journeyChapterSchema,
  artisanProfileSchema,
  shawlSchema,
  documentaryMediaSchema,
  visualPageSchema,
];

export const studioSchemaNames = schemaTypes.map((schema) => schema.name);
