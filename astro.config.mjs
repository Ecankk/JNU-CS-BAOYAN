// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ecankk.github.io',
  base: '/JNU-CS-BAOYAN',
  integrations: [mdx(), sitemap()],
});

