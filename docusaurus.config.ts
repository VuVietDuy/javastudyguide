import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Vũ Viết Duy',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://vuvietduy.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/javastudyguide/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'vuvietduy', // Usually your GitHub org/user name.
  projectName: 'javastudyguide', // Usually your repo name.

  onBrokenLinks: 'warn',
  trailingSlash: false,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'ocp',
        path: 'docs/ocp-java-21',
        routeBasePath: 'ocp-java-21',
        sidebarPath: './sidebars.ocp.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'k8s',
        path: 'docs/k8s',
        routeBasePath: 'k8s',
        sidebarPath: './sidebars.k8s.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docker',
        path: 'docs/docker',
        routeBasePath: 'docker',
        sidebarPath: './sidebars.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'linux',
        path: 'docs/linux',
        routeBasePath: 'linux',
        sidebarPath: './sidebars.ts',
      },
    ]
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Vũ Viết Duy',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          label: 'Java',
          position: 'left',
          items: [
            {
              label: 'OCP Java 21',
              to: '/ocp-java-21/intro',
            }
          ],
        },
        {
          label: 'DevOps',
          position: 'left',
          items: [
            {
              label: 'Linux',
              to: '/linux/intro',
            },
            {
              label: 'Docker',
              to: '/docker/intro',
            },
            {
              label: 'K8s',
              to: '/k8s/intro',
            }
          ]
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'left',
        },
        {
          href: 'https://github.com/VuVietDuy',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
