import type { StructureResolver } from "sanity/structure";
import { JOURNEY_STEPS, journeyChapterId } from "./journey";

export const PUBLISHING_QUEUE_TYPES = [
  "journeyChapter",
  "artisanProfile",
  "shawl",
  "documentaryMedia",
  "visualPage",
] as const;

export const PUBLISHING_QUEUE_FILTER = `_type in ${JSON.stringify(PUBLISHING_QUEUE_TYPES)} && publicationStatus == "draft"`;

export const studioStructure: StructureResolver = (S) =>
  S.list()
    .title("Editorial Dashboard")
    .items([
      S.listItem()
        .id("websiteSettings")
        .title("Homepage and Website Settings")
        .child(
          S.document()
            .schemaType("siteSettings")
            .documentId("siteSettings")
            .initialValueTemplate("siteSettings"),
        ),
      S.listItem()
        .id("journey")
        .title("Eight-Step Journey")
        .child(
          S.list()
            .id("journeySteps")
            .title("Eight-Step Journey")
            .items(
              JOURNEY_STEPS.map((step) =>
                S.listItem()
                  .id(journeyChapterId(step.number))
                  .title(`${String(step.number).padStart(2, "0")} · ${step.title}`)
                  .child(
                    S.document()
                      .id(journeyChapterId(step.number))
                      .schemaType("journeyChapter")
                      .documentId(journeyChapterId(step.number))
                      .initialValueTemplate(`journeyChapter-${step.number}`),
                  ),
              ),
            ),
        ),
      S.divider(),
      S.documentTypeListItem("artisanProfile").title("Artisan Stories"),
      S.documentTypeListItem("shawl").title("Shawl Collection"),
      S.documentTypeListItem("documentaryMedia").title("Documentary Media"),
      S.listItem()
        .id("publishingQueue")
        .title("Publishing and Review")
        .child(
          S.documentList()
            .id("publishingQueueList")
            .title("Drafts to review")
            .filter(PUBLISHING_QUEUE_FILTER)
            .defaultOrdering([{ field: "_updatedAt", direction: "desc" }]),
        ),
      S.documentTypeListItem("visualPage").title("Visual Pages"),
    ]);
