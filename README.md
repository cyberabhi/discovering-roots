# Discovering Roots

Create a brand-new, independent website project named "Discovering Roots" for the heritage storytelling initiative documenting authentic handmade Pashmina. This is a clean new project; do NOT modify, import, remix, or depend on the previous Lovable project or any other project. Build a polished responsive first implementation, not merely a landing-page wireframe.

DESIGN INTENT
The site should feel like a private Himalayan textile archive / collectible heritage exhibition for discerning international collectors, while remaining human, documentary-led, respectful and credible. The central visual idea is that the actual Pashmina shawl is a living map of its own making: use the supplied reference shawl photographs and embroidered illustrations as the visual language. The embroidery depicts landscape, goats, people, hand processes and a loom. The visitor follows a small boat/wayfinding marker along a continuous embroidered thread, moving chronologically through the craft. The real shawl and its tactile weave/texture contrast must remain the hero; UI must not overpower it. Avoid generic ecommerce styling.

PROCESS STRUCTURE — EXACTLY EIGHT CHAPTERS
Pre-Loom (five steps):

1. Fibre collection / combing the fine undercoat from Changthangi goats (only describe seasonal, animal-welfare-respectful practices; do not depict shearing if not accurate).
2. Journey and gathering / movement from pastoral landscape to the processing community (confirm the exact geography in final editorial content; use a location-neutral draft label if uncertain).
3. Sorting and dehairing by hand.
4. Carding and combing by hand to prepare fibre.
5. Hand spinning / doubling yarn on a traditional spinning wheel.
   On-Loom and finishing (three steps):
6. Starching and warping / preparing the loom.
7. Weaving on a handloom.
8. Finishing: cleaning/washing, ironing, hand finishing and hand-plucking loose fibres as applicable. Keep the process steps editable because the exact local workflow must be verified with artisans before publication.

CORE EXPERIENCE

- Opening hero: atmospheric Changthang / Himalayan landscape, restrained brand wordmark "Discovering Roots", editorial headline such as "A thread that carries generations", concise mission copy, CTA "Follow the thread". Include a dedicated generous visual area for the full shawl.
- Main interactive journey: a large shawl-canvas / textile-inspired section where the shawl image or a carefully styled neutral textile placeholder fills a substantial part of the viewport. Overlay an organic embroidered route/thread that connects eight circular waypoints; a small boat marker moves along the path as the visitor scrolls or selects a step. Keep the boat as a subtle navigation metaphor, not a cartoon. Clicking a waypoint opens the corresponding chapter panel with step title, story, artisan/person portrait, documentary image/video slot, caption and optional audio. On desktop use an editorial asymmetric split: shawl/thread map as primary canvas and a chapter story/media panel. On mobile convert to a vertical chronological journey with a persistent compact progress indicator; no horizontal overflow.
- Clearly divide the route into two named zones: "Before the Loom" (steps 1–5) and "At the Loom" (steps 6–8). Use an elegant textile seam / woven divider between regions.
- Human emotional connection: show individual artisan/person portrait slots and short first-person story placeholders at relevant steps. Do NOT invent names, biographies, quotes or claims; label sample copy as editorial placeholders to be replaced with verified consented stories.
- Add a final completed-shawl / full drape showcase with large image slot, fringe and embroidery macro details, tactile texture crop, and short provenance note.
- Add "Why this craft matters" / preservation section and an invitation to support the craft / private enquiry. Avoid fabricated impact metrics, scarcity claims, certifications, or unsupported claims of purity.
- Minimal navigation: The Story, The Origin, The Craft, The Artisans, Authenticity, Support. Use accessible mobile navigation.

VISUAL SYSTEM
Use the project's "Himalayan Archive" palette:
Cashmere #E9E1D2, Handmade Paper #F7F4ED, Himalayan Sky #718B99, Ladakhi Earth #82745F, Himalayan Slate #3B3028, Aged Brass #A88A54. Mostly warm paper/cashmere backgrounds, deep slate typography, earth accents, sky blue sparingly, brass only as a restrained detail. No gold gradients, glossy black, loud luxury tropes or excessive cards.
Typography: elegant display serif similar to Cormorant Garamond / Newsreader for headlines; clean readable sans similar to DM Sans for body and UI. Large editorial headlines, small uppercase captions with tracking, generous whitespace, thin rules, asymmetrical layouts, subtle paper/fibre texture, macro textile details. Use the supplied shawl photographs as reference for natural beige/grey woven texture, hand-embroidered scenes, contrast stitching, fringed edges and full-length drape. Do not fabricate new embroidery motifs as if they were part of the real shawl. Until actual supplied image assets are available in project storage, use restrained neutral placeholders clearly marked for replacement, not stock photos pretending to be the actual shawl.
Responsive breakpoints: desktop 1440, tablet 768, mobile 390. Ensure keyboard access, visible focus, semantic headings, alt text, reduced-motion support, captions and no scroll hijacking. Animation should be subtle and optional; boat movement should follow scroll progress but be fully operable by clicking/selecting steps and should respect prefers-reduced-motion.
TECHNICAL
Use the default Lovable React + TypeScript + Tailwind + shadcn/ui stack. Build clean reusable components and data-driven chapter content. Suggested components: SiteHeader, HeroSection, ShawlCanvas, EmbroideredJourney, BoatMarker, ProcessChapter, ArtisanStory, ShawlDetailGallery, PreservationSection, SiteFooter. Keep all eight chapter content in a typed data structure so it can be edited without changing layout. Use CSS variables for palette and design tokens. Avoid adding external backend/database/auth/payment integration at this stage. No ecommerce checkout; support/private enquiry CTA can be mailto placeholder only if no contact address is supplied. Optimize media slots for later real images and short clips.
FIGMA HANDOFF
Treat the existing Figma design file as the visual reference if it is accessible to the project: https://www.figma.com/design/pVec5jpVkVuF0AAEXDlMEI. Do not invent that automatic sync exists. Keep component names and CSS tokens clear so future Figma design changes can be translated cleanly. Create desktop and mobile responsive behavior from the start.
DELIVERABLE
Create a complete first-pass homepage with the eight-step journey working interactively, coherent visual hierarchy, polished responsive styling, and clearly identifiable placeholders for real shawl photography, artisan portraits, documentary clips and verified copy. Do not publish/deploy.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/8d33cf4a-9568-4cd6-b2f8-b35361ceac37).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## CMS foundation (Sanity)

The homepage loads content through the server-side CMS loader. When Sanity is configured and provides all eight valid journey chapters, mapped settings, chapter details, consented artisan portraits and shawl media populate the existing homepage sections. If configuration, the CMS request, or required chapter content is unavailable or incomplete, the local typed demo experience remains in place. Optional CMS fields and media fall back to the existing editorial copy and placeholders.

### Local setup

1. Copy `.env.example` to `.env` locally. Never commit `.env` or an environment file containing a real token.
2. Set the required server-side values:

   - `SANITY_PROJECT_ID` — Sanity project ID.
   - `SANITY_DATASET` — dataset to read, normally `production`.
   - `SANITY_API_VERSION` — optional; defaults to `2025-02-19`.

3. Configure draft preview only when it is needed:

   - `SANITY_API_READ_TOKEN` — optional viewer-role token, used only by server-side draft preview.
   - `SANITY_PREVIEW_SECRET` — optional long random value used only to sign the short-lived preview cookie.

`SANITY_API_READ_TOKEN` and `SANITY_PREVIEW_SECRET` must never have a `VITE_` prefix, be imported by browser code, or be placed in a public deployment setting. They are read only from server-side modules protected by TanStack Start's server-only import boundary.

### Sanity Studio

The private editorial Studio is integrated at `/studio` and uses the existing Sanity project (`1md6mwa7`, dataset `production`). Start the website with `npm run dev`, then open the local `/studio` URL printed by Vite. Studio sign-in is provided by Sanity; only users invited to the project can access editorial tools. The route itself is not a substitute for Sanity permissions.

On first use, the Studio may show Sanity's **Connect this studio to your project** screen. Choose **Add development host** for local work, or **Register this studio** for the secured production editor-facing Studio, then sign in with an invited Sanity account. Add the exact local and production origins to the project's allowed CORS origins in Sanity Manage and enable credentialed requests for the Studio. In Manage → Members, assign the least-privileged role that matches each person's work (for example, Editor for trusted content editors); do not create or share a browser API token. The production Sanity project must also grant those roles access to the `production` dataset.

The Studio navigation follows the editing workflow:

- **Website Settings and Homepage** — brand, hero, navigation, preservation message, footer, contact and SEO.
- **Eight-Step Journey** — eight stable chapter documents in a fixed order. Step number and process zone are read-only; chapters cannot be deleted from Studio. New chapters default to draft and must be verified before appearing publicly.
- **Artisan Stories** — profile information, related chapters, identity consent, separate quotation consent and publication status.
- **Shawl Collection** — verified descriptions, photographs, materials and provenance.
- **Documentary Media** — reusable image, video and audio records with credits, usage rights and consent.
- **Visual Pages (future)** — reserved page configuration data; this is not a page builder and does not integrate Puck.

To edit, select an item in the Studio navigation, edit its fields, and publish through Sanity when its validation requirements are met. Upload or replace photographs and recordings in the corresponding image/file fields; image alternative text and credit are required, and published media needs rights and consent information. Do not enter personal consent records or sensitive details into public-facing fields or editorial notes.

Sanity account membership and dataset roles are managed in Sanity Manage, not in this website. Do not place write tokens or private credentials in browser environment variables. Studio project and dataset identifiers are public configuration, not secrets.

### Fallback and preview behavior

- The Studio's **Website Preview** tool opens the real homepage in Presentation mode. The preview URL defaults to the current Studio origin, so the embedded Studio and preview use the same site deployment.
- To enable the preview handshake on the server, configure `SANITY_API_READ_TOKEN` with read access to draft/version documents and Sanity's preview URL secret documents, and set a long random `SANITY_PREVIEW_SECRET` used to sign the session cookie. These values belong only in the server deployment's secret settings. If either is missing, preview activation returns an explicit setup error; public content remains available.
- The Presentation Tool validates a short-lived Sanity-generated secret server-side before issuing an HTTP-only, Secure, SameSite=None, Partitioned cookie. The cookie expires after one hour and contains no Sanity token or draft data. The enable route strips preview secrets from its redirect and refuses external redirect targets.
- The homepage content response is marked `private, no-store` and varies by cookie. Sanity requests bypass its CDN so draft edits and newly published content are not held behind application or Sanity CDN response caches.
- While preview is active, a banner identifies the session as a draft preview and provides **Return to published site**. This clears the preview cookie and redirects to the public homepage. The banner is not shown for ordinary public requests.
- In Presentation, select a document and inspect the homepage preview. Save drafts to preview them; publish from the document's Sanity Studio actions when editorial checks are complete. Refresh or refocus the preview if it needs to fetch a newly saved draft or published change. Publishing updates what public requests fetch; it does not grant visitors access to drafts.
- Public homepage queries include only chapters marked published and verified with artisans, published artisan profiles with granted identity consent, and quotations with separate quote consent. Signed preview can include draft chapters and profiles, but withdrawn-consent profiles remain excluded.
- CMS requests time out after five seconds and return the local demo content on network or configuration errors.
- Fewer than eight valid, unique published chapter steps never partially replace the journey. The local eight-step data is used instead.

If Presentation cannot connect, confirm that the Studio deployment origin is allowed in Sanity Manage, the signed-in account has access to the project and dataset, and the server has the two preview settings above. Do not copy tokens or preview secrets into URLs, browser settings, or chat. A locally available Studio or a valid preview endpoint does not by itself prove that production Sanity authentication and publishing are configured.
