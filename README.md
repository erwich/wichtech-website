# Wich Tech

Eric Wich's personal site: Astro, TypeScript, Markdown, and Cloudflare Workers Static Assets.

## Development

Use Node 24 and npm.

```sh
npm ci
npm run dev
npm run verify
```

`verify` runs Astro diagnostics, a production build, and behavioral tests for publishing, contact delivery responses, and generated routes/assets. `npm run preview` serves the production build locally.

## Content

- Projects: `src/features/projects/content/*.md`.
- Posts: `src/features/writing/content/<slug>/index.md`. Place post images alongside the file.
- About copy: `src/features/about/AboutContent.astro`.
- Homepage intro: `src/features/home/Home.astro`.

New post frontmatter:

```yaml
---
title: Your title
description: A short description for readers and link previews.
slug: your-title
date: 2026-10-07
category: Engineering
draft: true
---
```

Remove `draft: true` to publish on the next deployment. Future-dated posts remain excluded until a build occurs after their publication date. Pages and RSS use the same visibility rules.

## Cloudflare deployment

The site is static HTML and assets; `wrangler.jsonc` points to `dist` and owns the www route. A separate small Worker redirects the bare domain to www. Run a build before a manual deploy. GitHub Actions owns CI/CD; leave Cloudflare Workers Builds automatic deployment disconnected.

1. Authenticate the official Wrangler CLI locally. Keep tokens and authorization codes out of chat and Git. Prefer OS-keychain storage.
2. Add GitHub Actions secrets `CLOUDFLARE_API_TOKEN` (scoped to the intended account's Workers deployment) and `CLOUDFLARE_ACCOUNT_ID` through your trusted secret-management flow.
3. Run the workflow manually with target `preview` to deploy `wichtech-website-preview`. Preview builds are marked noindex and cannot submit contact messages. For local preview deployments use `SITE_PREVIEW=true npm run build` followed by `npx wrangler deploy --config wrangler.preview.jsonc`.
4. Configure contact delivery as below, verify the preview and intended account, then enable repository variable `CLOUDFLARE_DEPLOY_ENABLED=true`. Merges to `master` then deploy production. A manual production run is also supported from `master`.
5. Production routes are declared for `www.wich.tech/*` and `wich.tech/*`. `npm run deploy` deploys both Workers. Existing proxied DNS records remain; see [launch notes](docs/launch.md) for recovery and eventual custom-domain cleanup.
6. Verify HTTPS, the Revelation article, redirects, genuine 404s, social previews, contact delivery, and mobile navigation. Keep the historical GitHub Pages deployment available for recovery.

Account authentication, CI secrets, domain bindings, and email delivery are external setup requirements, not established merely by this configuration.

## Contact

The isolated Web3Forms adapter owns provider requests. The form is deliberately disabled until `PUBLIC_WEB3FORMS_KEY` is configured for Eric's recipient address. For local use copy `.env.example` to `.env`; for production set the GitHub repository variable. This form key is a public identifier; never substitute a private API token. The form has a honeypot; configure and verify provider spam controls before launch. No test messages are sent by automated checks.

## Architecture and intent

See [North Star](docs/north-star.md), [architecture](docs/architecture.md), and [agent guidance](AGENTS.md). Shared layout and UI live under `src/shared`; each feature owns its content, queries, components, and adapters.

The former Gatsby source remains in Git history. The old `gh-pages` branch is not updated by the new workflows.
