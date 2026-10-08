# Architecture

Astro builds HTML at build time. Cloudflare Workers Static Assets serves the output directly. There is no request-time application server. Astro's client router adds smooth navigation while ordinary links and complete HTML remain useful without JavaScript.

## Ownership

- `src/features/home`: homepage introduction and composition.
- `src/features/projects`: project Markdown, schema, query, card, grid, detail view.
- `src/features/writing`: article Markdown/images, schema, public-content filtering, journal and article views, RSS support.
- `src/features/about`: biographical copy and interests.
- `src/features/contact`: form, interaction state, Web3Forms adapter.
- `src/shared`: site settings, shell, metadata, navigation, theme, buttons, section headings, and common prose styles.
- `src/pages`: route entrypoints that compose those features.

Feature collections are registered in Astro's required content config. This is composition, not a global domain layer. Shared UI has no knowledge of providers. Keep imports simple; this single application does not need a package monorepo.

## Deployment

GitHub Actions validates pull requests. A manual preview workflow builds and deploys to a separate preview Worker, with no contact key and no search indexing. Production deploys on master only when the repository variable CLOUDFLARE_DEPLOY_ENABLED is true; this gate avoids switching infrastructure before account setup is reviewed. Actions uses CLOUDFLARE_API_TOKEN and CLOUDFLARE_ACCOUNT_ID secrets. The public contact key is a repository variable.

Do not simultaneously enable Workers Builds automatic deployment. The old gh-pages branch remains historical and serves the existing site until cutover. No custom domain is declared in Wrangler yet.

## Content

Collection schemas validate metadata at build time. Draft and future-dated articles are filtered at the shared feature query used by pages, cards, and RSS. Stable slugs define URLs. The archived article keeps /google-chrome-dino-hax; /blog redirects to /writing. Retirement of /plex, /donate, and /test1 is intentional; they receive a real 404 rather than an unrelated destination.

Contact stays visibly unavailable until a recipient form key is configured. The key is a public identifier, not a server secret. Preview builds never inject it. Success appears only after an explicit successful provider response; network/provider errors keep the message and offer retry. Provider delivery and spam protection require verification before launch.
