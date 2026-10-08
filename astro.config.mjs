import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.wich.tech',
  output: 'static',
  integrations: [sitemap()],
});
