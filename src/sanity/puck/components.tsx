import { MediaSlot } from "@/components/site/MediaSlot";
import { ProcessChapter } from "@/components/site/ProcessChapter";
import { PreservationSection, ShawlDetailGallery, SiteFooter } from "@/components/site/Sections";
import { HeroSection } from "@/components/site/HeroSection";
import { EmbroideredJourney } from "@/components/site/EmbroideredJourney";
import { ArtisanStory } from "@/components/site/ArtisanStory";
import { chapters as demoChapters, type Chapter } from "@/data/chapters";
import { demoSettings } from "@/data/demo-content";
import type { ShawlView, ViewImage } from "@/lib/sanity/types";
import type { Config, Metadata } from "@puckeditor/core";

export interface PuckPageAsset extends ViewImage {
  id: string;
  kind: "image" | "video";
  publicationStatus?: "draft" | "published" | undefined;
  assetRef?: string | undefined;
  url?: string | undefined;
  fileUrl?: string | undefined;
  externalUrl?: string | undefined;
  poster?: ViewImage | undefined;
}

export interface PuckPageArtisan {
  id: string;
  displayName?: string | undefined;
  role?: string | undefined;
  biography?: string | undefined;
  portrait?: ViewImage | undefined;
  quote?: string | undefined;
  quoteConsent: boolean;
  consentStatus: "pending" | "granted" | "withdrawn";
  publicationStatus: "draft" | "published" | "withdrawn";
}

export interface PuckPageMetadata {
  assets: Record<string, PuckPageAsset>;
  artisans: Record<string, PuckPageArtisan>;
  chapters: Chapter[];
  shawls: Record<string, ShawlView>;
  preview?: boolean;
}

interface HeroProps {
  eyebrow: string;
  title: string;
  emphasis: string;
  body: string;
  imageId: string;
  imageAlt: string;
  ctaLabel: string;
  ctaHref: string;
}

interface TextImageProps {
  heading: string;
  body: string;
  imageId: string;
  imageAlt: string;
  caption: string;
  imageSide: "left" | "right";
}

interface GalleryProps {
  heading: string;
  imageOneId: string;
  imageOneCaption: string;
  imageTwoId: string;
  imageTwoCaption: string;
  imageThreeId: string;
  imageThreeCaption: string;
}

interface VideoProps {
  heading: string;
  mediaId: string;
  videoUrl: string;
  posterId: string;
  caption: string;
  credit: string;
}

interface ChapterProps {
  chapterId: string;
}

interface JourneyProps {
  layout: "map" | "chapters";
}

interface PreservationProps {
  eyebrow: string;
  heading: string;
  body: string;
  statement: string;
  buttonLabel: string;
  buttonHref: string;
  impactNote: string;
}

interface CtaProps {
  heading: string;
  body: string;
  buttonLabel: string;
  buttonHref: string;
}

interface FooterProps {
  brandName: string;
  footerText: string;
}

interface ShawlProps {
  shawlId: string;
}

export interface VisualPageComponentProps {
  Hero: HeroProps;
  TextImage: TextImageProps;
  EditorialGallery: GalleryProps;
  DocumentaryVideo: VideoProps;
  ArtisanProfile: { artisanId: string };
  Quote: { artisanId: string };
  Journey: JourneyProps;
  ChapterContent: ChapterProps;
  ShawlCollection: ShawlProps;
  Preservation: PreservationProps;
  CallToAction: CtaProps;
  Footer: FooterProps;
}

type PropsWithMetadata<Props> = Props & { metadata?: Metadata };

function getMetadata(metadata?: Metadata): PuckPageMetadata {
  return (metadata ?? {}) as PuckPageMetadata;
}

function getAsset(metadata: PuckPageMetadata, id: string): PuckPageAsset | undefined {
  if (!id) return undefined;
  return metadata.assets[id] ?? metadata.assets[id.replace(/^drafts\./, "")];
}

function textImage(image?: PuckPageAsset, alt?: string) {
  return image ? (
    <img
      className="h-full w-full object-cover"
      src={image.src}
      alt={alt || image.alt}
      loading="lazy"
    />
  ) : (
    <MediaSlot
      alt={alt || "Documentary image placeholder"}
      label="Documentary image"
      className="aspect-[4/3] w-full"
    />
  );
}

export function createVisualPageConfig(
  imageOptions: { label: string; value: string }[],
  videoOptions: { label: string; value: string }[],
  artisanOptions: { label: string; value: string }[],
  shawlOptions: { label: string; value: string }[],
  chapterOptions: { label: string; value: string }[] = demoChapters.map((chapter) => ({
    label: `${chapter.number}. ${chapter.title}`,
    value: String(chapter.number),
  })),
): Config<VisualPageComponentProps> {
  const imageField = {
    type: "select" as const,
    label: "Choose an image from Documentary Media",
    options: [{ label: "No image selected", value: "" }, ...imageOptions],
  };
  const artisanField = {
    type: "select" as const,
    label: "Choose a consented artisan profile",
    options: [{ label: "Select an artisan", value: "" }, ...artisanOptions],
  };

  return {
    categories: {
      storytelling: {
        title: "Storytelling",
        components: ["Hero", "TextImage", "EditorialGallery", "DocumentaryVideo", "Quote"],
      },
      craft: {
        title: "Craft and people",
        components: ["ArtisanProfile", "Journey", "ChapterContent", "ShawlCollection"],
      },
      closing: {
        title: "Closing sections",
        components: ["Preservation", "CallToAction", "Footer"],
      },
    },
    components: {
      Hero: {
        label: "Hero",
        fields: {
          eyebrow: { type: "text", label: "Small introductory label" },
          title: { type: "text", label: "Main heading" },
          emphasis: { type: "text", label: "Italic emphasis" },
          body: { type: "textarea", label: "Supporting text" },
          imageId: imageField,
          imageAlt: { type: "text", label: "Image alternative text" },
          ctaLabel: { type: "text", label: "Button label" },
          ctaHref: { type: "text", label: "Button destination (HTTPS or site path)" },
        },
        defaultProps: {
          eyebrow: "Discovering Roots",
          title: "A thread that carries generations",
          emphasis: "generations",
          body: "A documentary journey through the making of handmade Pashmina.",
          imageId: "",
          imageAlt: "Documentary photograph",
          ctaLabel: "Follow the thread",
          ctaHref: "#craft",
        },
        render: (props: PropsWithMetadata<HeroProps>) => {
          const meta = getMetadata(props.metadata);
          const image = getAsset(meta, props.imageId);
          return (
            <HeroSection
              hero={{
                eyebrow: props.eyebrow,
                title: props.title,
                titleEmphasis: props.emphasis,
                intro: props.body,
                ctaLabel: props.ctaLabel,
                image: image ? { src: image.src, alt: props.imageAlt || image.alt } : undefined,
              }}
              shawl={null}
              ctaHref={props.ctaHref}
              includeOrigin={false}
            />
          );
        },
      },
      TextImage: {
        label: "Text and image",
        fields: {
          heading: { type: "text", label: "Section heading" },
          body: { type: "textarea", label: "Section text" },
          imageId: imageField,
          imageAlt: { type: "text", label: "Image alternative text" },
          caption: { type: "text", label: "Image caption" },
          imageSide: {
            type: "select",
            label: "Image position",
            options: [
              { label: "Image on the left", value: "left" },
              { label: "Image on the right", value: "right" },
            ],
          },
        },
        defaultProps: {
          heading: "A story shaped by hand",
          body: "Add verified documentary text for this section.",
          imageId: "",
          imageAlt: "Documentary image",
          caption: "",
          imageSide: "right",
        },
        render: (props: PropsWithMetadata<TextImageProps>) => {
          const image = getAsset(getMetadata(props.metadata), props.imageId);
          const imageFirst = props.imageSide === "left";
          return (
            <section className="border-t border-border">
              <div
                className={`mx-auto grid max-w-[1440px] gap-10 px-5 py-20 md:grid-cols-12 md:px-10 md:py-28 ${imageFirst ? "" : ""}`}
              >
                <figure
                  className={`md:col-span-6 ${imageFirst ? "md:order-first" : "md:order-last"}`}
                >
                  {textImage(image, props.imageAlt)}
                  {props.caption && (
                    <figcaption className="mt-3 eyebrow">{props.caption}</figcaption>
                  )}
                </figure>
                <div className="md:col-span-5 md:pt-8">
                  <h2 className="text-4xl leading-tight md:text-5xl">{props.heading}</h2>
                  <p className="mt-6 whitespace-pre-line leading-relaxed text-muted-foreground">
                    {props.body}
                  </p>
                  {image?.credit && <p className="mt-3 eyebrow">Image · {image.credit}</p>}
                </div>
              </div>
            </section>
          );
        },
      },
      EditorialGallery: {
        label: "Editorial gallery",
        fields: {
          heading: { type: "text", label: "Gallery heading" },
          imageOneId: imageField,
          imageOneCaption: { type: "text", label: "First image caption" },
          imageTwoId: imageField,
          imageTwoCaption: { type: "text", label: "Second image caption" },
          imageThreeId: imageField,
          imageThreeCaption: { type: "text", label: "Third image caption" },
        },
        defaultProps: {
          heading: "Details of the cloth",
          imageOneId: "",
          imageOneCaption: "",
          imageTwoId: "",
          imageTwoCaption: "",
          imageThreeId: "",
          imageThreeCaption: "",
        },
        render: (props: PropsWithMetadata<GalleryProps>) => {
          const meta = getMetadata(props.metadata);
          const images = [
            [props.imageOneId, props.imageOneCaption],
            [props.imageTwoId, props.imageTwoCaption],
            [props.imageThreeId, props.imageThreeCaption],
          ] as const;
          return (
            <section className="border-t border-border bg-cashmere/40">
              <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28">
                {props.heading && <h2 className="mb-10 text-4xl md:text-5xl">{props.heading}</h2>}
                <div className="grid gap-5 md:grid-cols-3">
                  {images.map(([id, caption], index) => {
                    const image = getAsset(meta, id);
                    return (
                      <figure key={`${id}-${index}`}>
                        {textImage(image, image?.alt)}
                        {caption && <figcaption className="mt-3 eyebrow">{caption}</figcaption>}
                        {image?.credit && (
                          <p className="mt-1 text-xs text-muted-foreground">{image.credit}</p>
                        )}
                      </figure>
                    );
                  })}
                </div>
              </div>
            </section>
          );
        },
      },
      DocumentaryVideo: {
        label: "Documentary video",
        fields: {
          heading: { type: "text", label: "Video heading" },
          mediaId: {
            type: "select",
            label: "Choose a documentary video",
            options: [{ label: "Select a video", value: "" }, ...videoOptions],
          },
          videoUrl: { type: "text", label: "HTTPS video URL (optional)" },
          posterId: imageField,
          caption: { type: "text", label: "Caption" },
          credit: { type: "text", label: "Media credit" },
        },
        defaultProps: {
          heading: "In the workshop",
          mediaId: "",
          videoUrl: "",
          posterId: "",
          caption: "",
          credit: "",
        },
        render: (props: PropsWithMetadata<VideoProps>) => {
          const meta = getMetadata(props.metadata);
          const source = getAsset(meta, props.mediaId);
          const poster = getAsset(meta, props.posterId);
          const src = source?.fileUrl ?? source?.externalUrl ?? props.videoUrl;
          return (
            <section className="border-t border-border">
              <div className="mx-auto max-w-5xl px-5 py-16 md:px-10 md:py-20">
                {props.heading && <h2 className="mb-6 text-4xl md:text-5xl">{props.heading}</h2>}
                <MediaSlot
                  kind="video"
                  src={src}
                  externalUrl={src}
                  alt={poster?.alt ?? "Documentary video"}
                  label="Documentary video"
                  className="aspect-video w-full"
                />
                {props.caption && (
                  <p className="mt-3 text-sm text-muted-foreground">{props.caption}</p>
                )}
                {(props.credit || source?.credit) && (
                  <p className="mt-2 eyebrow">Media · {props.credit || source?.credit}</p>
                )}
              </div>
            </section>
          );
        },
      },
      ArtisanProfile: {
        label: "Artisan profile",
        fields: { artisanId: artisanField },
        defaultProps: { artisanId: "" },
        render: ({ artisanId, metadata }: PropsWithMetadata<{ artisanId: string }>) => {
          const artisan = getMetadata(metadata).artisans[artisanId];
          if (
            !artisan ||
            artisan.consentStatus !== "granted" ||
            artisan.publicationStatus === "withdrawn" ||
            (artisan.publicationStatus !== "published" && !getMetadata(metadata).preview)
          )
            return <></>;
          return (
            <section className="mx-auto max-w-5xl px-5 py-10 md:px-10">
              <ArtisanStory
                portrait={{
                  src: artisan.portrait?.src,
                  alt: artisan.portrait?.alt ?? "Consented artisan portrait",
                  role:
                    [artisan.displayName, artisan.role].filter(Boolean).join(" — ") || "Artisan",
                  voice: artisan.quoteConsent ? artisan.quote : undefined,
                  credit: artisan.portrait?.credit,
                }}
              />
              {artisan.biography && (
                <p className="mt-5 max-w-2xl whitespace-pre-line leading-relaxed text-muted-foreground">
                  {artisan.biography}
                </p>
              )}
            </section>
          );
        },
      },
      Quote: {
        label: "Consented artisan quotation",
        fields: { artisanId: artisanField },
        defaultProps: { artisanId: "" },
        render: ({ artisanId, metadata }: PropsWithMetadata<{ artisanId: string }>) => {
          const artisan = getMetadata(metadata).artisans[artisanId];
          if (
            !artisan ||
            artisan.consentStatus !== "granted" ||
            !artisan.quoteConsent ||
            !artisan.quote ||
            artisan.publicationStatus === "withdrawn"
          )
            return <></>;
          return (
            <figure className="mx-auto max-w-4xl px-5 py-16 text-center md:px-10 md:py-24">
              <blockquote className="font-display text-3xl italic leading-snug md:text-5xl">
                “{artisan.quote}”
              </blockquote>
              <figcaption className="mt-6 eyebrow">
                {[artisan.displayName, artisan.role].filter(Boolean).join(" · ")}
              </figcaption>
            </figure>
          );
        },
      },
      Journey: {
        label: "Eight-step journey",
        fields: {
          layout: {
            type: "select",
            label: "Journey presentation",
            options: [
              { label: "Thread and chapter map", value: "map" },
              { label: "Eight chronological chapters", value: "chapters" },
            ],
          },
        },
        defaultProps: { layout: "map" },
        render: ({ layout, metadata }: PropsWithMetadata<JourneyProps>) => {
          const chapters = getMetadata(metadata).chapters ?? demoChapters;
          return layout === "chapters" ? (
            <section className="space-y-12 border-t border-border py-12">
              {chapters.map((chapter, index) => (
                <div key={chapter.id} className="mx-auto max-w-5xl px-5 md:px-10">
                  <ProcessChapter chapter={chapter} active index={index} />
                </div>
              ))}
            </section>
          ) : (
            <EmbroideredJourney chapters={chapters} />
          );
        },
      },
      ChapterContent: {
        label: "Journey chapter",
        fields: {
          chapterId: {
            type: "select",
            label: "Choose a fixed journey chapter",
            options: [{ label: "Select a chapter", value: "" }, ...chapterOptions],
          },
        },
        defaultProps: { chapterId: "1" },
        render: ({ chapterId, metadata }: PropsWithMetadata<ChapterProps>) => {
          const meta = getMetadata(metadata);
          const chapterNumber = Number(chapterId);
          const index = meta.chapters.findIndex((chapter) => chapter.number === chapterNumber);
          const chapter =
            (index >= 0 ? meta.chapters[index] : undefined) ??
            demoChapters.find((item) => item.number === chapterNumber);
          return chapter ? (
            <div className="mx-auto max-w-5xl px-5 md:px-10">
              <ProcessChapter chapter={chapter} active index={Math.max(index, 0)} />
            </div>
          ) : (
            <></>
          );
        },
      },
      ShawlCollection: {
        label: "Shawl collection",
        fields: {
          shawlId: {
            type: "select",
            label: "Choose a documented shawl",
            options: [{ label: "Select a shawl", value: "" }, ...shawlOptions],
          },
        },
        defaultProps: { shawlId: "" },
        render: ({ shawlId, metadata }: PropsWithMetadata<ShawlProps>) => {
          const shawl = getMetadata(metadata).shawls[shawlId];
          return shawl ? <ShawlDetailGallery shawl={shawl} /> : <></>;
        },
      },
      Preservation: {
        label: "Preservation section",
        fields: {
          eyebrow: { type: "text", label: "Section label" },
          heading: { type: "text", label: "Heading" },
          body: { type: "textarea", label: "Supporting text" },
          statement: { type: "textarea", label: "Closing statement" },
          buttonLabel: { type: "text", label: "Button label" },
          buttonHref: { type: "text", label: "Button destination (HTTPS or site path)" },
          impactNote: { type: "text", label: "Additional note" },
        },
        defaultProps: {
          eyebrow: "Why this craft matters",
          heading: "Keep the craft alive",
          body: "Share a verified account of why this craft matters.",
          statement: "An invitation to learn, listen and support.",
          buttonLabel: "Learn more",
          buttonHref: "#support",
          impactNote: "",
        },
        render: ({
          eyebrow,
          heading,
          body,
          statement,
          buttonLabel,
          buttonHref,
          impactNote,
        }: PropsWithMetadata<PreservationProps>) => (
          <PreservationSection
            cta={{
              eyebrow,
              heading,
              body,
              statement,
              buttonLabel,
              buttonHref,
              impactNote,
              isPlaceholderContact: false,
            }}
          />
        ),
      },
      CallToAction: {
        label: "Invitation / call to action",
        fields: {
          heading: { type: "text", label: "Heading" },
          body: { type: "textarea", label: "Supporting text" },
          buttonLabel: { type: "text", label: "Button label" },
          buttonHref: { type: "text", label: "Button destination (HTTPS or site path)" },
        },
        defaultProps: {
          heading: "Continue the conversation",
          body: "Invite visitors to learn more or make a private enquiry.",
          buttonLabel: "Get in touch",
          buttonHref: "#support",
        },
        render: ({ heading, body, buttonLabel, buttonHref }: PropsWithMetadata<CtaProps>) => (
          <section className="border-t border-border bg-cashmere/40">
            <div className="mx-auto max-w-5xl px-5 py-16 md:px-10 md:py-24">
              <h2 className="max-w-3xl text-4xl leading-tight md:text-5xl">{heading}</h2>
              <p className="mt-5 max-w-2xl whitespace-pre-line leading-relaxed text-muted-foreground">
                {body}
              </p>
              <a
                href={buttonHref}
                rel={buttonHref.startsWith("https:") ? "noopener noreferrer" : undefined}
                className="mt-8 inline-flex items-center gap-3 bg-slate px-6 py-3 eyebrow !text-paper transition-opacity hover:opacity-90"
              >
                {buttonLabel} <span aria-hidden>→</span>
              </a>
            </div>
          </section>
        ),
      },
      Footer: {
        label: "Website footer",
        fields: {
          brandName: { type: "text", label: "Brand name" },
          footerText: { type: "text", label: "Footer note" },
        },
        defaultProps: { brandName: demoSettings.brandName, footerText: demoSettings.footerText },
        render: ({ brandName, footerText }: PropsWithMetadata<FooterProps>) => (
          <SiteFooter brandName={brandName} footerText={footerText} />
        ),
      },
    },
  };
}

export function createPuckPageMetadata(
  assets: Record<string, PuckPageAsset>,
  artisans: Record<string, PuckPageArtisan>,
  chapters: Chapter[],
  shawls: Record<string, ShawlView>,
  preview = false,
): PuckPageMetadata & { preview: boolean } {
  return { assets, artisans, chapters, shawls, preview };
}
