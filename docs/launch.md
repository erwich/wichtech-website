# Website launch

Authorized by Eric during the content review on October 8, 2026.

The production static-assets Worker is wichtech-website, serving the route www.wich.tech/* in the wich.tech zone. The separate wichtech-redirect Worker redirects wich.tech/* to HTTPS www, preserving paths and queries. Both existing DNS names are proxied by Cloudflare. Other hostnames and email records are untouched.

The current OAuth login can deploy Workers and routes but cannot read or edit DNS records. Custom-domain attachment was attempted and rejected because externally managed website records already exist. Routes therefore handle production traffic while the underlying legacy DNS targets remain. A future cleanup can replace these records with custom domains after DNS edit access is available.

Build production assets without SITE_PREVIEW, then run npm run deploy. This deploys the site and redirect Workers. Verify HTTPS pages, article, images, indexing, redirects, and 404 responses. Preview has a separate configuration without production routes; always deploy it with wrangler.preview.jsonc.

Recovery: the gh-pages branch and original GitHub Pages configuration are preserved. Removing the two Worker routes returns traffic to the original proxied origin. Previous Worker deployments also provide asset rollback. An archive of origin/gh-pages was prepared locally before cutover.

CI still needs a dedicated Cloudflare API token. Until configured, use the authenticated local Wrangler CLI and leave the GitHub production gate disabled. Web3Forms is configured through the ignored local .env and the PUBLIC_WEB3FORMS_KEY GitHub repository variable. The production form is enabled; recipient inbox delivery still needs an end-to-end submission check. Preview deliberately keeps delivery disabled.
