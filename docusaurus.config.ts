// cSpell:ignore cncf

import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const title = 'CNCF TechDocs';
const repo = 'https://github.com/cncf/techdocs';

const config: Config = {
  title,
  // tagline: '',
  favicon:
    'https://www.cncf.io/wp-content/themes/cncf-twenty-two/images/favicon.ico', // TODO: localize?

  // Production URL:
  url: 'https://techdocs.netlify.app/', // TODO
  baseUrl: '/',

  // GitHub pages deployment config. TODO: this still useful?
  organizationName: 'cncf',
  projectName: 'techdocs',

  onBrokenLinks: 'warn', // TODO: 'error' or 'throw' once we've fixed all links
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: `${repo}/tree/main`,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
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
