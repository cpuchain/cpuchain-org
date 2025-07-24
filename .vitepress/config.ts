import { defineConfig } from 'vitepress'
import pkgJson from '../package.json';

// HTML title
export const TITLE = 'CPUchain';
export const HOMEPAGE = 'https://cpuchain.org';
export const REPO = 'https://github.com/cpuchain';
export const SRC_REPO = 'https://github.com/cpuchain/cpuchain-org';
export const LOGO = '/logo.png';

// https://vitepress.dev/reference/site-config
export const getConfig = defineConfig({
  sitemap: {
    hostname: HOMEPAGE,
  },

  title: TITLE,

  description: pkgJson.description,

  head: [
    ['link', { rel: 'icon', href: LOGO }],

    ['link', { rel: 'canonical', href: HOMEPAGE }],
    ['link', { rel: 'canonical', href: REPO }],
    ['meta', { name: 'description', content: pkgJson.description }],
    ['meta', { name: 'keywords', content: (pkgJson.keywords || []).join(',') || pkgJson.name }],

    // og
    ['meta', { property: 'og:title', content: TITLE }],
    ['meta', { property: 'og:description', content: pkgJson.description }],
    ['meta', { property: 'og:image', content: LOGO }],
    ['meta', { property: 'og:url', content: HOMEPAGE }],

    // seo
    ['meta', { name: 'robots', content: 'index,follow' }],
    ['meta', { name: 'googlebot', content: 'index,follow' }],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: LOGO,

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Migration', link: '/spec/migration.html' },
      { text: 'Explorer', link: 'https://explorer.cpuchain.org' },
      { text: 'Web Wallet', link: 'https://wallet.cpuchain.org' },
    ],

    sidebar: [
      {
        text: 'About',
        items: [
          { text: 'About CPUchain', link: '/about/index.html' },
          { text: 'Blockchain', link: '/about/blockchain.html' },
          { text: 'Mining', link: '/about/mining.html' },
          { text: 'Smart Contracts', link: '/about/smart-contracts.html' },
          { text: 'Interoperability', link: '/about/interoperability.html' },
        ],
        collapsed: false,
      },
      {
        text: 'Specification',
        items: [
          { text: 'EVM Migration', link: '/spec/migration.html' },
          { text: 'Basic Specifications', link: '/spec/index.html' },
          { text: 'CPU supply', link: '/spec/supply.html' },
          { text: 'YespowerEVM', link: '/spec/yespower.html' },
          { text: 'Hardforks', link: '/spec/hardforks.html' },
          { text: 'Contract Addresses', link: '/spec/contracts.html' },
        ],
        collapsed: false,
      },
      {
        text: 'Ecosystem',
        items: [
          { text: 'RPC endpoints', link: '/ecosystem/rpcs.html' },
          { text: 'Nodes', link: '/ecosystem/nodes.html' },
          { text: 'Explorers', link: '/ecosystem/explorers.html' },
          { text: 'Wallets', link: '/ecosystem/wallets.html' },
          { text: 'Exchanges', link: '/ecosystem/exchanges.html' },
          { text: 'Mining Pools', link: '/ecosystem/pools.html' },
          { text: 'Mining Softwares', link: '/ecosystem/miners.html' },
          { text: 'Bridges', link: '/ecosystem/bridges.html' },
          { text: 'SDKs', link: '/ecosystem/sdks.html' },
          { text: 'DApps', link: '/ecosystem/dapps.html' },
        ],
        collapsed: false,
      },
      {
        text: '',
        items: [
          { text: 'Official Links', link: '/links.html' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: REPO },
      { icon: 'bitcoin', link: 'https://bitcointalk.org/index.php?topic=5161183.0' },
      { icon: 'twitter', link: 'https://x.com/cpuchain' },
      { icon: 'telegram', link: 'https://t.me/cpuchainofficial' },
    ],

    footer: {
      message: `
        Released under the 
        <a href="https://opensource.org/licenses/MIT" target="_blank" class="footer-year">MIT License</a>.
      `,
      copyright: 'Copyright © 2025 CPUchain'
    },
  }
})

export default getConfig;
