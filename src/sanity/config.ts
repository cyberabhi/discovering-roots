import { defineConfig } from "sanity";
import type { NewDocumentOptionsContext, TemplateItem } from "sanity";
import { structureTool } from "sanity/structure";
import { JOURNEY_STEPS } from "./journey";
import { schemaTypes } from "./schemaTypes";
import { studioStructure } from "./structure";

export const chapterInitialValueTemplates = JOURNEY_STEPS.map((step) => ({
  id: `journeyChapter-${step.number}`,
  title: `Chapter ${step.number}: ${step.title}`,
  schemaType: "journeyChapter",
  value: {
    stepNumber: step.number,
    title: step.title,
    slug: { _type: "slug", current: step.slug },
    phase: step.phase,
    shortLabel: step.kicker,
    artisanReviewStatus: "needsReview",
  },
}));

const fixedDocumentTypes = new Set(["siteSettings", "journeyChapter"]);

export function filterNewDocumentOptions(
  previous: TemplateItem[],
  { creationContext }: Pick<NewDocumentOptionsContext, "creationContext">,
): TemplateItem[] {
  if (creationContext.type === "global") {
    const fixedTemplateIds = new Set([
      "siteSettings",
      "journeyChapter",
      ...chapterInitialValueTemplates.map(({ id }) => id),
    ]);
    return previous.filter((option) => !fixedTemplateIds.has(option.templateId));
  }
  if (creationContext.type === "structure" && fixedDocumentTypes.has(creationContext.schemaType)) {
    return [];
  }
  return previous;
}

export const studioConfig = defineConfig({
  name: "discovering-roots",
  title: "Discovering Roots",
  projectId: "1md6mwa7",
  dataset: "production",
  basePath: "/studio",
  plugins: [structureTool({ structure: studioStructure })],
  schema: {
    types: schemaTypes,
    templates: (previous) => [
      ...previous.filter((template) => template.schemaType !== "journeyChapter"),
      ...chapterInitialValueTemplates,
    ],
  },
  document: {
    newDocumentOptions: filterNewDocumentOptions,
    actions: (previous, { schemaType }) =>
      schemaType === "journeyChapter" || schemaType === "siteSettings"
        ? previous.filter(({ action }) => action !== "delete")
        : previous,
  },
});
