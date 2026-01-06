// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Trumpet Central',
  tagline: 'Website dedicated to learning, exploring, and enjoying the art of the trumpet.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://trumpetcentral.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'grpchatdstryr', // Usually your GitHub org/user name.
  projectName: 'trumpetcentral', // Usually your repo name.

  onBrokenLinks: 'throw',

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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //  'https://github.com/grpchatdstryr/trumpetcentral/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //  'https://github.com/grpchatdstryr/trumpetcentral/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/social-card.png',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Trumpet Central',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo-nobg.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Learning',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          { to: "about", label: "About", position: "left" },
          {
            href: 'https://github.com/grpchatdstryr/trumpetcentral',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/welcome',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
                            {
                label: 'Release Notes',
                to: '/release-notes',
              },
            ],
          },
          {
            title: 'Links',
            items: [
              {
                label: 'YouTube Channel',
                href: 'https://youtube.com/@trumpetcentral',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/trumpet_central',
              },
              {
                label: 'Linktree',
                href: 'https://linktr.ee/trumpetcentral',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'About Me',
                to: '/about',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/grpchatdstryr/trumpetcentral',
              },
              {
                label: 'Nerd Stuff',
                href: '/tech-stuff',
              },
            ],
          },
        ],
        copyright: `Nathan Patrick - Trumpet Central - ${new Date().getFullYear()}`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },

    algolia: {
      // The application ID provided by Algolia
      appId: 'BF6LYRHJ6G',

      // Public API key: it is safe to commit it
      apiKey: '26415436e079255c2f36fc8542a6ac8c',

      indexName: 'Website',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      replaceSearchResultPathname: {
        from: '/docs/', // or as RegExp: /\/docs\//
        to: '/',
      },

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      insights: false,

      // Optional: whether you want to use the new Ask AI feature (undefined by default)
      //askAi: 'YOUR_ALGOLIA_ASK_AI_ASSISTANT_ID',

      //... other Algolia params
    },



      

    }),
};

export default config;
