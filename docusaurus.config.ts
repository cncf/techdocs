// cSpell:ignore cncf dracula

import path from 'node:path';
import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import getBuildContext from './lib/getBuildContext';
import remarkRewriteLinks from './lib/remarkRewriteLinks';

const title = 'CNCF TechDocs';
const repo = 'https://github.com/cncf/techdocs';

const { buildEnv, isProd, assetBaseUrl } = getBuildContext(repo);
const importedReadmePath = path.resolve('README.md');

// Rewrite GitHub-friendly relative links so they also work on the site:
//  - cross-plugin links (`../../docs|analyses/...`) → site-absolute URLs
//  - data assets the MDX loader can't bundle (e.g. `.csv`) → GitHub blob URL
const rewriteLinks: [
  typeof remarkRewriteLinks,
  Parameters<typeof remarkRewriteLinks>[0],
] = [remarkRewriteLinks, { assetBaseUrl }];

const config: Config = {
  title,
  // tagline: '',
  favicon:
    'https://www.cncf.io/wp-content/themes/cncf-twenty-two/images/favicon.ico', // TODO: localize?

  url: isProd
    ? 'https://cncf-techdocs.netlify.app'
    : process.env.DEPLOY_PRIME_URL || 'http://localhost:3000',
  baseUrl: '/',

  // GitHub pages deployment config. TODO: this still useful?
  organizationName: 'cncf',
  projectName: 'techdocs',

  onBrokenLinks: 'warn', // TODO: 'error' or 'throw' once we've fixed all links

  markdown: {
    // Only needed for imported Markdown partials outside content plugins.
    // In this repo, that's the root README.md imported by src/pages/index.mdx.
    preprocessor: ({ fileContent, filePath }) =>
      path.resolve(filePath) === importedReadmePath
        ? fileContent.replace(
            /(\]\(|\]:\s*)(\/(?:docs|analyses)\/[^\s)#?]+)\.md(?=$|[\s)#?])/g,
            '$1$2/',
          )
        : fileContent,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  trailingSlash: true,

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        // Our remark plugin must run before Docusaurus's own `resolveMarkdownLinks`
        // and `transformImage` so cross-plugin URLs are rewritten first.
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: isProd ? `${repo}/tree/main` : undefined,
          beforeDefaultRemarkPlugins: [rewriteLinks],
        },
        pages: {
          beforeDefaultRemarkPlugins: [rewriteLinks],
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'analyses',
        path: 'analyses',
        routeBasePath: 'analyses',
        sidebarPath: './sidebarsAnalyses.ts',
        editUrl: isProd ? `${repo}/tree/main/analyses` : undefined,
        beforeDefaultRemarkPlugins: [rewriteLinks],
      },
    ],
  ],

  themeConfig: {
    // TODO: Replace with your project's social card
    // image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title,
      logo: {
        alt: 'Logo',
        src: 'img/cncf-icon-color.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'docSidebar',
          docsPluginId: 'analyses',
          sidebarId: 'analysesSidebar',
          position: 'left',
          label: 'Analyses',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          label: 'Licenses',
          href: '/#licenses',
        },
        {
          label: 'Privacy',
          href: 'https://www.linuxfoundation.org/legal/privacy-policy',
        },
        {
          label: 'Trademarks',
          href: 'https://www.linuxfoundation.org/legal/trademark-usage',
        },
        {
          label: 'GitHub',
          href: repo,
        },
      ],
      copyright: `Copyright © ${title} Authors ${new Date().getFullYear()} `,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
