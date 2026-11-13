import { z } from "zod";
import type { Data } from "@puckeditor/core";

const shortText = z.string().max(500);
const longText = z.string().max(10_000);
const referenceId = z
  .string()
  .max(128)
  .regex(/^[a-zA-Z0-9._-]*$/);

function safeLink(value: string): boolean {
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

const href = z
  .string()
  .max(2_048)
  .refine(safeLink, "Use a same-site path, page anchor, or HTTPS link.");
const heading = z.string().trim().min(1).max(180);
const optionalHeading = z.string().max(180);
const media = referenceId;

const propsByType = {
  Hero: z
    .object({
      eyebrow: shortText,
      title: heading,
      emphasis: optionalHeading,
      body: longText,
      imageId: media,
      imageAlt: shortText,
      ctaLabel: shortText,
      ctaHref: href,
    })
    .strict(),
  TextImage: z
    .object({
      heading,
      body: longText,
      imageId: media,
      imageAlt: shortText,
      caption: shortText,
      imageSide: z.enum(["left", "right"]),
    })
    .strict(),
  EditorialGallery: z
    .object({
      heading: optionalHeading,
      imageOneId: media,
      imageOneCaption: shortText,
      imageTwoId: media,
      imageTwoCaption: shortText,
      imageThreeId: media,
      imageThreeCaption: shortText,
    })
    .strict(),
  DocumentaryVideo: z
    .object({
      heading: optionalHeading,
      mediaId: media,
      videoUrl: z
        .string()
        .max(2_048)
        .refine((value) => !value || safeLink(value), "Use an HTTPS video URL."),
      posterId: media,
      caption: shortText,
      credit: shortText,
    })
    .strict()
    .superRefine((props, context) => {
      if (props.videoUrl && !props.mediaId && !props.credit.trim()) {
        context.addIssue({
          code: "custom",
          path: ["credit"],
          message: "Add the documentary video credit.",
        });
      }
    }),
  ArtisanProfile: z.object({ artisanId: referenceId }).strict(),
  Quote: z.object({ artisanId: referenceId }).strict(),
  Journey: z.object({ layout: z.enum(["map", "chapters"]) }).strict(),
  ChapterContent: z
    .object({ chapterId: z.enum(["1", "2", "3", "4", "5", "6", "7", "8"]) })
    .strict(),
  ShawlCollection: z.object({ shawlId: referenceId }).strict(),
  Preservation: z
    .object({
      eyebrow: shortText,
      heading,
      body: longText,
      statement: longText,
      buttonLabel: shortText,
      buttonHref: href,
      impactNote: shortText,
    })
    .strict(),
  CallToAction: z
    .object({
      heading,
      body: longText,
      buttonLabel: shortText,
      buttonHref: href,
    })
    .strict(),
  Footer: z.object({ brandName: shortText, footerText: shortText }).strict(),
} as const;

export type VisualPageBlockType = keyof typeof propsByType;
export const visualPageBlockTypes = Object.keys(propsByType) as VisualPageBlockType[];

const contentBlock = z
  .object({
    type: z.enum(visualPageBlockTypes as [VisualPageBlockType, ...VisualPageBlockType[]]),
    id: z.string().min(1).max(128),
    props: z.record(z.string(), z.unknown()),
  })
  .superRefine((block, context) => {
    const result = propsByType[block.type].safeParse(block.props);
    if (!result.success) {
      for (const issue of result.error.issues) {
        context.addIssue({
          code: "custom",
          path: ["props", ...issue.path],
          message: issue.message,
        });
      }
    }
  });

const pageDataSchema = z
  .object({
    root: z.object({ props: z.object({ title: z.string().optional() }) }).strict(),
    content: z.array(contentBlock).max(80),
  })
  .strict()
  .superRefine((data, context) => {
    const ids = new Set<string>();
    data.content.forEach((block, index) => {
      if (ids.has(block.id)) {
        context.addIssue({
          code: "custom",
          path: ["content", index, "id"],
          message: "Every page section must have a unique identifier.",
        });
      }
      ids.add(block.id);
    });
    if (JSON.stringify(data).length > 200_000) {
      context.addIssue({
        code: "custom",
        message: "Page configuration must be smaller than 200 KB.",
      });
    }
  });

export type VisualPageValidation =
  { success: true; data: Data; issues: [] } | { success: false; issues: string[] };

export function validateVisualPageData(input: unknown): VisualPageValidation {
  const result = pageDataSchema.safeParse(input);
  if (!result.success) {
    return {
      success: false,
      issues: result.error.issues.map((issue) => `${issue.path.join(".")}: ${issue.message}`),
    };
  }
  return {
    success: true,
    data: {
      ...result.data,
      root: {
        ...result.data.root,
        props: { ...result.data.root.props, title: result.data.root.props.title ?? "" },
      },
    },
    issues: [],
  };
}

export function parseVisualPageData(serialized: unknown): Data | undefined {
  if (typeof serialized !== "string" || serialized.length > 200_000) return undefined;
  try {
    const result = validateVisualPageData(JSON.parse(serialized));
    return result.success ? result.data : undefined;
  } catch {
    return undefined;
  }
}

export function normalizeVisualPageSlug(value: string): string {
  return value
    .normalize("NFKD")
    .toLowerCase()
    .trim()
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export function isValidVisualPageSlug(value: string): boolean {
  return (
    /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value) && !new Set(["api", "studio", "pages"]).has(value)
  );
}

export const emptyVisualPageData: Data = { root: { props: { title: "" } }, content: [] };
