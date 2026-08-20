import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// 'site' es el dominio canónico: se usa para el sitemap, los canonical y el SEO.
export default defineConfig({
  site: 'https://deltaacademiagr.com',
  integrations: [sitemap()],
});
