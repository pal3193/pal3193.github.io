import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import pagefind from "astro-pagefind";

// https://astro.build/config
export default defineConfig({
  site: 'https://pal3193.github.io',
  integrations: [sitemap(), pagefind()],
});
