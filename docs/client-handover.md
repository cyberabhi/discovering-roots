# Sanity access and editorial handover

This checklist is for the Sanity project owner or administrator. The application cannot grant Sanity membership or dataset permissions, and live access has not been verified by the developer.

## Project administrator

The client project owner should:

1. Invite the intended team members to the Discovering Roots Sanity project.
2. Keep the **Administrator** role limited to people responsible for project configuration, member invitations, datasets, and CORS.
3. Assign **Editor** to content editors who need to create and update documents, upload media, save drafts, and publish approved content in the `production` dataset.
4. Assign **Viewer** only to people who need read-only access. The Visual Page Editor intentionally does not load for Viewer accounts.
5. Confirm the role has the required access both at the project level and for the `production` dataset. The Sanity project’s permissions remain authoritative.

The custom Visual Page Editor exposes its editing interface only to signed-in users with Sanity's built-in `administrator` or `editor` role. This is a user-interface guard only. All document reads and writes are still performed through the authenticated Sanity client, and Sanity enforces the actual permissions. Do not rely on this UI check to grant or replace dataset access. No public write API or custom password authentication is provided.

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

Do not commit secret values, set them with a `VITE_` prefix, or place them in client-side environment settings. If preview values are absent, preview activation must remain unavailable; the public site continues using published data or demo fallback.

### Preview secret handling and rotation

The Presentation Tool generates a short-lived `sanity-preview-secret` for its one-time activation request. The browser sends it to `/api/preview/enable` as a query parameter because that is Sanity's preview URL handshake. After successful validation, the server redirects to the validated same-origin destination with the preview-secret parameters removed. If activation fails, the server redirects to the published homepage with a non-sensitive notice and no preview cookie, removing the handshake value from the address bar. The secret is not an application environment variable. Do not copy or share the initial activation URL, and configure any deployment request logging or monitoring to redact query strings for this endpoint. The route handler does not directly log the request URL or validation errors. Sanity's one-time handshake secret expires after one hour.

Rotate the application's secrets through the deployment and Sanity consoles; never put their values in Git, tickets, or chat:

1. **`SANITY_PREVIEW_SECRET` (application cookie-signing key):** generate a new high-entropy value using an approved secret manager, replace it in the server-only Vercel Preview and Production environment settings, and redeploy. This invalidates existing signed preview cookies. It does not rotate Sanity-generated URL secrets.
2. **`SANITY_API_READ_TOKEN` (Sanity viewer token):** create a replacement token with only the required dataset read access, update the server-only Vercel settings, verify draft preview with an authorized editor, then revoke the old token in Sanity.
3. **Sanity-generated preview URLs:** these are separate from both environment variables. A one-time Presentation handshake secret expires after one hour. To revoke a longer-lived shared preview link, disable preview sharing in Sanity Presentation; re-enable it only when a new link is required. Do not expose the secret document through a debug plugin or edit Sanity secret documents manually.

## Client verification checklist

After roles, dataset permissions, CORS, and server-side environment are configured, an authorized client editor should verify:

1. Sign in at `/studio`.
2. Confirm **Homepage and Website Settings**, all eight journey chapters, Artisan Stories, Shawl Collection, Documentary Media, Publishing and Review, Visual Pages, and the Visual Page Editor are available as expected.
3. Save a draft and confirm it is visible only in an authorized preview session.
4. Confirm a Viewer account cannot open the Visual Page Editor's editing interface.
5. Publish an approved change and verify it appears on the public website.
6. Confirm the public site does not show unpublished drafts.

These are client-side integration checks. They have not been completed by the developer because authenticated access to the client Sanity project is unavailable.
