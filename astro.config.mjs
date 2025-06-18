// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { visit } from 'unist-util-visit';
import { rewriteMdLinks } from './src/plugins/rewrite-md-links.mjs';

// https://astro.build/config
export default defineConfig({
  // site: 'https://astro--cncf-techdocs.netlify.app/',
  integrations: [
    starlight({
      title: 'CNCF Techdocs',
      // favicon: 'static/img/cncf-icon-color.svg', // cSpell:disable-line
      customCss: ['./src/css/custom.css'],
      sidebar: [
        {
          label: 'Docs',
          collapsed: true,
          autogenerate: {
            directory: 'docs',
          },
        },
        {
          label: 'Project Analyses',
          collapsed: true,
          autogenerate: {
            directory: 'analyses',
          },
        },
      ],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/withastro/starlight',
        },
      ],
    }),
  ],
  // Configure Astro's markdown handling
  markdown: {
    // Enable smartypants and other markdown features
    // smartypants: true,
    // Configure remark plugins
    remarkPlugins: [rewriteMdLinks],
  },
});
