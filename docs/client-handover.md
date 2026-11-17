# Sanity access and editorial handover

This checklist is for the Sanity project owner or administrator. The application cannot grant Sanity membership or dataset permissions. Production project access and publishing must be verified by an authorized client editor.

## Deployment baseline

The public website remains deployable without a live Sanity project or editor invitation. If server configuration is incomplete, Sanity is unavailable, or required published chapters are missing, public visitors receive the local demo content. Studio, preview, and write flows remain authenticated and fail closed.

- Build command: `npm run build`
- Framework: TanStack Start + Vite
- The production build generates its own output; the repository does not define a custom static output directory or hardcoded Vercel configuration.
- Public homepage rendering does not require a live CMS connection.

## Project administrator

The client project owner should:

1. Invite the intended team members to the Discovering Roots Sanity project.
2. Keep the **Administrator** role limited to people responsible for project configuration, member invitations, datasets, and CORS.
3. Assign **Editor** to content editors who need to create and update documents, upload media, save drafts, and publish approved content in the `production` dataset.
4. Assign **Viewer** only to people who need read-only access. The Visual Page Editor intentionally does not load for Viewer accounts.
5. Confirm the role has the required access both at the project level and for the `production` dataset. The Sanity project’s permissions remain authoritative.

The custom Visual Page Editor exposes its editing interface only to signed-in users with Sanity's built-in `administrator` or `editor` role. This is a user-interface guard only. All document reads and writes are still performed through the authenticated Sanity client, and Sanity enforces the actual permissions. Do not rely on this UI check to grant or replace dataset access. No public write API or custom password authentication is provided.

Do not assume project access exists because the application code is present. Studio access depends on actual Sanity membership and dataset permissions, not on the frontend route.

## CORS and Studio connection

In Sanity Manage, add each exact origin that will host the application:

- Local development origin, such as `http://127.0.0.1:8082`
- The exact production Vercel domain
- Any additional production domain that will serve the Studio

Enable credentialed requests for the Studio origins. Do not use wildcard origins with credentials. The Studio uses Sanity's native sign-in; an invited user must sign in with their own account. Never share passwords or use an anonymous browser write token.

## Server-side preview configuration

To enable the Presentation tool's draft preview handshake, configure these values as server-side deployment secrets:

- `SANITY_PROJECT_ID`
- `SANITY_DATASET`
- `SANITY_API_VERSION` (optional; defaults to `2025-02-19`)
- `SANITY_API_READ_TOKEN` (read access required for draft documents and preview URL secrets)
- `SANITY_PREVIEW_SECRET` (long random signing value for the short-lived preview cookie)

Do not commit secret values, set them with a `VITE_` prefix, or place them in client-side environment settings. Keep them in the hosting provider's server-only environment settings. If preview values are absent, preview activation must remain unavailable; the public site continues using published data or demo fallback.

## Public website and private Studio

Public requests use published, verified content only; draft content must never leak through the public site. Draft access requires both a valid signed preview session and the required server-side credentials. A preview cookie by itself does not change a published-scope request into a preview request.

The Studio uses Sanity's native sign-in and the signed-in user's dataset permissions. The `/studio` route is not a substitute for authorization. If project access or CORS is not configured, the Studio should remain at its configuration-pending state while the public website continues to work.

### Preview secret handling and rotation

The Presentation Tool generates a short-lived `sanity-preview-secret` for its one-time activation request. The browser sends it to `/api/preview/enable` as a query parameter because that is Sanity's preview URL handshake. After successful validation, the server redirects to the validated same-origin destination with the preview-secret parameters removed. If activation fails, the server redirects to the published homepage with a non-sensitive notice and no preview cookie, removing the handshake value from the address bar. The secret is not an application environment variable. Do not copy or share the initial activation URL, and configure any deployment request logging or monitoring to redact query strings for this endpoint. The route handler does not directly log the request URL or validation errors. Sanity's one-time handshake secret expires after one hour.

Rotate the application's secrets through the deployment and Sanity consoles; never put their values in Git, tickets, or chat:

1. **`SANITY_PREVIEW_SECRET` (application cookie-signing key):** generate a new high-entropy value using an approved secret manager, replace it in the server-only Vercel Preview and Production environment settings, and redeploy. This invalidates existing signed preview cookies. It does not rotate Sanity-generated URL secrets.
2. **`SANITY_API_READ_TOKEN` (Sanity viewer token):** create a replacement token with only the required dataset read access, update the server-only Vercel settings, verify draft preview with an authorized editor, then revoke the old token in Sanity.
3. **Sanity-generated preview URLs:** these are separate from both environment variables. A one-time Presentation handshake secret expires after one hour. To revoke a longer-lived shared preview link, disable preview sharing in Sanity Presentation; re-enable it only when a new link is required. Do not expose the secret document through a debug plugin or edit Sanity secret documents manually.

## Client verification checklist

After roles, dataset permissions, CORS, and server-side environment are configured, an authorized client editor should verify:

1. Confirm the project and `production` dataset are correct, then sign in at `/studio` with an invited account.
2. Confirm **Homepage and Website Settings**, all eight journey chapters, Artisan Stories, Shawl Collection, Documentary Media, Publishing and Review, Visual Pages, and the Visual Page Editor are available as expected.
3. Confirm the homepage can load published data from the project when valid published content is configured.
4. Save a draft and confirm it is visible only in an authorized preview session.
5. Confirm a Viewer account cannot open the Visual Page Editor's editing interface.
6. Publish an approved change and verify it appears on the public website.
7. Confirm public requests never show unpublished drafts.

These are client-side integration checks. They have not been completed by the developer because authenticated access to the client Sanity project is unavailable.

## Maintenance and handoff

The project owner is responsible for Sanity membership, role assignment, dataset configuration, publishing approvals, and origin/CORS updates when hosting domains change. The developer is responsible for application code, frontend/schema compatibility, and deployment settings for server-side environment values.

Do not bypass the fail-closed design: no public write endpoint, browser write token, CORS bypass, disabled authentication, fake Studio success state, or secret/token committed to the repository. If the required access or CORS configuration is missing, keep the Studio configuration pending and the public site on its safe published/demo path.

## Website preview versus click-to-edit

The Presentation tool's draft preview handshake and the website's server-side draft fetch are implemented independently of Visual Editing overlays. The current frontend does not load `@sanity/visual-editing`, request stega/content source maps, or resolve homepage chapters/settings to editor locations. Editors can review saved draft content in the website preview, but click-to-edit overlays and live overlay refresh are not currently available. A browser WebSocket or QUIC error should be diagnosed separately from the preview data path; confirm the draft banner and displayed draft fields before concluding that content fetching failed.

Sanity's documented React Router integration is not a drop-in TanStack Start integration. Adding overlays requires a compatible Visual Editing package/version, server/client source-map and stega handling, Presentation communication/history and refresh integration, and homepage document-location resolvers. Do not claim click-to-edit support until these are implemented and tested against the deployed Sanity Studio and website origins.
