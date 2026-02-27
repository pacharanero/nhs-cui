import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { buildSidebar } from './s/starlight-sidebar.mjs';

export default defineConfig({
  site: 'http://localhost:4321',
  integrations: [
    starlight({
      title: 'CUI UIG Documentation',
      sidebar: buildSidebar('markdown')
    })
  ]
});
