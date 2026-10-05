// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ecankk.github.io',
  // GitHub Pages needs the repository prefix; local dev should stay at `/`.
  base: process.env.NODE_ENV === 'development' ? '/' : '/JNU-CS-BAOYAN',
  integrations: [mdx(), sitemap()],
});

