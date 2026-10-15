// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // TODO: set to the production URL once the domain is known.
  // Enables the canonical link and absolute Open Graph URLs in BaseLayout.
  // site: 'https://example.com',

  // The site is a single page; earlier page addresses lead to their sections.
  redirects: {
    '/proizvodi': '/#proizvodi',
    '/proizvodi/torte': '/#torte',
    '/proizvodi/sitni-kolaci': '/#sitni-kolaci',
    '/proizvodi/kanapei': '/#kanapei',
    '/proizvodi/predjela': '/#predjela',
    '/kontakt': '/#kontakt',
  },

  // Downloaded at build time and self-hosted; exposed as a CSS variable in tokens.css.
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Jost',
      cssVariable: '--font-jost',
      weights: ['400 600'],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    // Soft rounded display face for navigation, headings and card labels.
    {
      provider: fontProviders.fontsource(),
      name: 'Nunito',
      cssVariable: '--font-nunito',
      weights: ['500 800'],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
  ],
});
