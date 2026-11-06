/**
 * Editable chapter content for the eight-step craft journey.
 * All copy is DRAFT and must be verified with artisans before publication.
 * Replace `media.src` / `portrait.src` with real assets when available.
 */
export type Zone = "before" | "at";

export interface Chapter {
  id: string;
  number: number;
  zone: Zone;
  title: string;
  kicker: string;
  story: string;
  caption: string;
  media: { kind: "image" | "video"; src?: string | undefined; alt: string; credit?: string | undefined; externalUrl?: string | undefined; poster?: string | undefined };
  portrait?: { src?: string | undefined; alt: string; role: string; voice?: string | undefined; credit?: string | undefined } | undefined;
  audio?: { src?: string | undefined; label: string } | undefined;
  body?: import("@portabletext/react").PortableTextBlock[] | undefined;
  toolsAndMaterials?: string[] | undefined;
  locationLabel?: string | undefined;
  verified: boolean;
}

export const zones: Record<Zone, { label: string; range: string }> = {
  before: { label: "Before the Loom", range: "Chapters 1–5" },
  at: { label: "At the Loom", range: "Chapters 6–8" },
};

export const chapters: Chapter[] = [
  {
    id: "fibre-collection",
    number: 1,
    zone: "before",
    title: "Combing the Undercoat",
    kicker: "Fibre collection",
    story:
      "As the high-altitude winter loosens, the fine undercoat of Changthangi goats is gently combed by hand during the natural spring moult. The fibre is gathered, not shorn — a seasonal rhythm shaped by the animals and the herders who live alongside them.",
    caption: "Documentary image slot — seasonal hand-combing. Awaiting consented footage.",
    media: { kind: "image", alt: "Placeholder for a photograph of a herder hand-combing a Changthangi goat" },
    portrait: {
      alt: "Placeholder portrait of a pastoral herder",
      role: "Herder — name to be confirmed",
      voice: "Editorial placeholder: a first-person reflection from a herder, to be replaced with a verified, consented quote.",
    },
    audio: { label: "Field recording slot — optional" },
    verified: false,
  },
  {
    id: "journey-gathering",
    number: 2,
    zone: "before",
    title: "The Journey Down",
    kicker: "Journey & gathering",
    story:
      "Raw fibre travels from the pastoral highlands to the community where it will be processed. [Draft — exact route and geography to be confirmed in final editorial content.]",
    caption: "Landscape slot — route from pasture to processing community (location TBC).",
    media: { kind: "video", alt: "Placeholder for a short clip of the journey from pasture to village" },
    verified: false,
  },
  {
    id: "sorting-dehairing",
    number: 3,
    zone: "before",
    title: "Sorting by Hand",
    kicker: "Sorting & dehairing",
    story:
      "Coarse guard hairs are separated from the soft down, strand by strand. It is slow, attentive work that relies on touch and long practice.",
    caption: "Macro image slot — hands separating guard hair from fine down.",
    media: { kind: "image", alt: "Placeholder for a close-up of hands dehairing raw fibre" },
    portrait: {
      alt: "Placeholder portrait of an artisan sorting fibre",
      role: "Artisan — name to be confirmed",
      voice: "Editorial placeholder: first-person story to be recorded with consent.",
    },
    verified: false,
  },
  {
    id: "carding-combing",
    number: 4,
    zone: "before",
    title: "Carding the Cloud",
    kicker: "Carding & combing",
    story:
      "The cleaned fibre is opened and aligned by hand, turning tangled down into a soft, even cloud ready for the wheel.",
    caption: "Image slot — hand carding.",
    media: { kind: "image", alt: "Placeholder for a photograph of hand carding" },
    verified: false,
  },
  {
    id: "hand-spinning",
    number: 5,
    zone: "before",
    title: "Spinning on the Wheel",
    kicker: "Hand spinning & doubling",
    story:
      "On a traditional spinning wheel, fibre becomes yarn — fine, then doubled for strength. The sound of the wheel is part of the household.",
    caption: "Video slot — spinning wheel, with natural sound.",
    media: { kind: "video", alt: "Placeholder for a clip of hand spinning on a traditional wheel" },
    portrait: {
      alt: "Placeholder portrait of a spinner",
      role: "Spinner — name to be confirmed",
      voice: "Editorial placeholder: first-person story to be recorded with consent.",
    },
    audio: { label: "Sound of the wheel — optional" },
    verified: false,
  },
  {
    id: "warping",
    number: 6,
    zone: "at",
    title: "Preparing the Warp",
    kicker: "Starching & warping",
    story:
      "Yarn is starched and measured into the warp, then threaded onto the loom — careful preparation on which the whole weave depends.",
    caption: "Image slot — warp threads stretched out.",
    media: { kind: "image", alt: "Placeholder for a photograph of warp preparation" },
    verified: false,
  },
  {
    id: "weaving",
    number: 7,
    zone: "at",
    title: "At the Handloom",
    kicker: "Weaving",
    story:
      "Pass by pass, the weaver builds the cloth on a handloom. Rhythm, tension and patience give the fabric its quiet, tactile character.",
    caption: "Video slot — shuttle and beater in motion.",
    media: { kind: "video", alt: "Placeholder for a clip of weaving on a handloom" },
    portrait: {
      alt: "Placeholder portrait of a weaver",
      role: "Weaver — name to be confirmed",
      voice: "Editorial placeholder: first-person story to be recorded with consent.",
    },
    audio: { label: "Loom recording — optional" },
    verified: false,
  },
  {
    id: "finishing",
    number: 8,
    zone: "at",
    title: "The Final Touch",
    kicker: "Finishing",
    story:
      "The woven shawl is cleaned and washed, pressed, and finished by hand — including plucking loose fibres where applicable — before it is ready to be worn. [Exact finishing sequence to be verified with artisans.]",
    caption: "Macro image slot — hand finishing and fringe.",
    media: { kind: "image", alt: "Placeholder for a close-up of hand finishing" },
    verified: false,
  },
];
