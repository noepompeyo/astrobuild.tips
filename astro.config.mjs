import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import react from "@astrojs/react";
import sitemap from '@astrojs/sitemap'
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  site : 'https://astrobuild.tips',
  integrations: [tailwind(), mdx(), react(), vue(), sitemap()]
});