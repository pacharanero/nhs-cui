import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { buildSidebar } from './s/starlight-sidebar.mjs';

const site = process.env.SITE ?? 'http://localhost:4321';
const base = process.env.BASE;

export default defineConfig({
  site,
  base,
  integrations: [
    starlight({
      title: 'CUI UIG Documentation',
      sidebar: buildSidebar('markdown'),
      customCss: [
        '@fontsource/source-sans-3/400.css',
        '@fontsource/source-sans-3/600.css',
        '@fontsource/source-sans-3/700.css',
        '/src/styles/nhs-theme.css'
      ]
    })
  ]
});
