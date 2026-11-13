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

## Client verification checklist

After roles, dataset permissions, CORS, and server-side environment are configured, an authorized client editor should verify:

1. Sign in at `/studio`.
2. Confirm **Homepage and Website Settings**, all eight journey chapters, Artisan Stories, Shawl Collection, Documentary Media, Publishing and Review, Visual Pages, and the Visual Page Editor are available as expected.
3. Save a draft and confirm it is visible only in an authorized preview session.
4. Confirm a Viewer account cannot open the Visual Page Editor's editing interface.
5. Publish an approved change and verify it appears on the public website.
6. Confirm the public site does not show unpublished drafts.

These are client-side integration checks. They have not been completed by the developer because authenticated access to the client Sanity project is unavailable.
