const { themes } = require('prism-react-renderer');

const config = {
  title: 'IM Shelf Notebook',
  tagline: 'A living reference for internal medicine shelf prep',
  favicon: 'img/favicon.ico',
  url: 'https://im-shelf-notebook.pages.dev',
  baseUrl: '/',
  organizationName: 'your-github-username',
  projectName: 'im-shelf-notebook',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: { defaultLocale: 'en', locales: ['en'] },

  presets: [
    ['classic', {
      docs: {
        sidebarPath: './sidebars.js',
        routeBasePath: '/',
        editUrl: 'https://github.com/your-github-username/im-shelf-notebook/edit/main/',
        showLastUpdateTime: true,
      },
      blog: false,
      theme: { customCss: './src/css/custom.css' },
    }],
  ],

  themeConfig: {
    image: 'img/social-card.png',
    colorMode: { defaultMode: 'light', respectPrefersColorScheme: true },
    navbar: {
      title: 'IM Shelf Notebook',
      items: [
        { type: 'docSidebar', sidebarId: 'mainSidebar', position: 'left', label: 'Notebook' },
        { href: 'https://github.com/your-github-username/im-shelf-notebook', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `For educational use. Last updated ${new Date().getFullYear()}.`,
    },
    prism: { theme: themes.github, darkTheme: themes.dracula },
    docs: { sidebar: { hideable: true, autoCollapseCategories: false } },
  },
};

module.exports = config;
