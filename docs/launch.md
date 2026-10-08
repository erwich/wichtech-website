# Website launch

Authorized by Eric during the content review on October 8, 2026.

The production static-assets Worker is wichtech-website, serving the custom domain www.wich.tech in the wich.tech zone. The separate wichtech-redirect Worker uses the wich.tech custom domain and redirects requests to HTTPS www, preserving paths and queries. Both existing DNS names are proxied by Cloudflare. Other hostnames and email records are untouched.

DNS cleanup completed: the old www CNAME to erwich.github.io and apex A record to 185.199.108.153 were replaced with Worker-managed custom-domain records. Both Workers use custom_domain routing in Wrangler. Email records and other hostnames were not changed.

Build production assets without SITE_PREVIEW, then run npm run deploy. This deploys the site and redirect Workers. Verify HTTPS pages, article, images, indexing, redirects, and 404 responses. Preview has a separate configuration without production routes; always deploy it with wrangler.preview.jsonc.

Recovery: roll back to a previous Cloudflare Worker deployment for site assets or redirect code. The historical gh-pages branch remains preserved, but is no longer an automatic fallback origin.

GitHub Actions uses the dedicated Wich Tech GitHub Deploy token stored as CLOUDFLARE_API_TOKEN, plus CLOUDFLARE_ACCOUNT_ID. The token grants Workers Scripts Edit in the account and Workers Routes Edit for wich.tech. CLOUDFLARE_DEPLOY_ENABLED enables production deployment after successful verification on master. Local authenticated Wrangler remains available for recovery. Web3Forms is configured through the ignored local .env and the PUBLIC_WEB3FORMS_KEY GitHub repository variable. The production form is enabled; Eric confirmed a test submission reached his inbox on October 8, 2026. Preview deliberately keeps delivery disabled.

Google Analytics uses the WichTech account’s Wich Tech Website property and a web stream for https://www.wich.tech. The public measurement ID is configured locally and in the GitHub repository variable PUBLIC_GA_MEASUREMENT_ID. hCaptcha is enabled in Web3Forms and rendered on the production contact form; missing verification is blocked before submission. A completed CAPTCHA delivery test remains to be performed by Eric.
