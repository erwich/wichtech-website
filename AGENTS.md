# Wich Tech

Read docs/north-star.md and docs/architecture.md before substantial changes.

- Keep feature content, queries, components, and provider adapters together under src/features/<feature>.
- Keep src/pages thin: route parameters, content loading, and composition only.
- Promote genuinely reusable UI into src/shared. Do not duplicate cards, page chrome, metadata, or design tokens.
- Use static Astro and Markdown. No database or CMS. Add client JavaScript only for a concrete interaction.
- Provider-specific contact behavior belongs in features/contact/providers.
- Preserve existing article URLs or add permanent redirects. Drafts must stay out of production routes and feeds.
- Never invent project results, technologies, screenshots, or contributions. Revelation has a private repository; do not expose source or internal details.
- Deploy to Cloudflare Workers Static Assets, never GitHub Pages. GitHub Actions owns deployment; do not also enable automatic Workers Builds deployments.
- Run npm run verify before handoff. Check mobile layout, keyboard navigation, article links, and contact failure behavior for relevant UI changes.
- Cloudflare account changes, domain cutover, and sending test messages need the applicable access and user authorization.
