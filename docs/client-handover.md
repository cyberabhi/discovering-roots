# Client handover guide

This document captures the minimum setup required to activate the CMS, Studio, preview flow, and publishing workflow for the client after deployment.

## 1. Deployment status

The public website is deployable without a live Sanity project. If the server environment is incomplete or the CMS is unavailable, the homepage falls back to the local demo content and keeps the public experience working. The private Studio route remains a fail-closed configuration state until the client has granted project access.

## 2. Required project access

The client must complete the following in Sanity Manage before live editorial workflows can be used:

- Confirm the project is the intended Discovering Roots project.
- Confirm the dataset is `production`.
- Invite the authorized editor(s) to the project.
- Grant each editor the required dataset access role.
- Confirm the invited users can sign in through the Studio UI.

Do not assume project access exists because the app code is present. Studio visibility is determined by real Sanity membership and dataset permissions, not by the frontend route.

## 3. Exact CORS configuration

Add the exact origins used by the application, not wildcards:

- Local development: `http://127.0.0.1:8082`
- Production site: the exact Vercel or hosting origin used for the public website
- Studio origin: the exact deployment origin that serves `/studio` when the Studio is live

Use credentialed requests for the Studio. Do not set wildcard CORS values when the Studio signs in with user credentials.

## 4. Server environment configuration

Set the following values on the deployment host before enabling preview or live Sanity reads:

- `SANITY_PROJECT_ID`
- `SANITY_DATASET`
- `SANITY_API_VERSION` (optional, defaults to `2025-02-19`)
- `SANITY_API_READ_TOKEN`
- `SANITY_PREVIEW_SECRET`

These values must stay server-side. Do not commit them to Git and do not expose them in browser code or public environment settings.

## 5. Public website vs private Studio

Public visitors should receive only published content. Draft content must never leak through the public site.

The private Studio is for editing content. The preview mechanism validates a server-side signed preview session before showing draft content. The public homepage remains a published-only experience unless the preview cookie is valid and the request is authorized.

## 6. What to verify after configuration

After the project owner completes the membership and CORS steps, verify:

1. `/studio` loads without the configuration-pending message.
2. The signed-in editor can open the Studio.
3. The homepage loads published data from the project.
4. Drafts save correctly without exposing them to public visitors.
5. Preview access works only for authorized sessions.
6. Publishing updates the public site when the content is approved.

## 7. Maintenance and handoff

Keep the project owner responsible for:

- Sanity project access and membership
- Studio permission assignment
- dataset updates and publishing approvals
- origin changes when Vercel or hosting domains change

Keep the developer responsible for:

- application code changes
- front-end compatibility with the CMS schema
- Vercel/deployment settings and server-side environment maintenance

## 8. Do not bypass

This project intentionally keeps the following fail-closed:

- no public write endpoint
- no browser write token
- no CORS bypass
- no disabled auth
- no fake Studio success states
- no secret or token exposure in the repository

If the client cannot provide project access or exact CORS configuration, the correct result is a configuration-pending Studio and a working public website using demo fallback. That is the safe deployment baseline.
