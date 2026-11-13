import type { StructureResolver } from "sanity/structure";
import { JOURNEY_STEPS, journeyChapterId } from "./journey";

export const studioStructure: StructureResolver = (S) =>
  S.list()
    .title("Discovering Roots")
    .items([
      S.listItem()
        .id("websiteSettings")
        .title("Website Settings and Homepage")
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
      S.documentTypeListItem("visualPage").title("Visual Pages (future)"),
    ]);
