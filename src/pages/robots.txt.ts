import { site } from '../shared/site';
export function GET() {
  return new Response(
    import.meta.env.SITE_PREVIEW === 'true'
      ? 'User-agent: *\nDisallow: /\n'
      : `User-agent: *\nAllow: /\nSitemap: ${site.url}/sitemap-index.xml\n`,
  );
}
