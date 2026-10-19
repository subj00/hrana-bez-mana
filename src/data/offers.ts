/**
 * Content of the categories shown as a price card + photo gallery (OfferSection),
 * keyed by category slug. Image fields are file names in src/assets; missing files are
 * skipped (gallery photos) or shown as an empty placeholder (highlight images), and
 * named in the build output.
 */

export interface OfferItem {
  name: string;
  /** Text of the pink price badge, exactly as shown (e.g. "1600 din/kg", "2.800 din"). */
  price: string;
  /** Small line under the name. */
  detail?: string;
}

/**
 * A product group inside the card: a title row (with its own badge when the group has
 * one price), then optionally a varieties list and/or several priced rows.
 */
export interface OfferGroup {
  title: string;
  /** Small line under the title. */
  detail?: string;
  /** Badge text when the whole group has one price. */
  price?: string;
  /** Numbered list of varieties under the title. */
  varieties?: string[];
  /** Small line after the varieties. */
  note?: string;
  /** Several priced products within the group. */
  items?: OfferItem[];
}

export interface Offer {
  /** Bold heading at the top of the card. */
  heading?: string;
  /** Short line at the top of the card. */
  lead?: string;
  /** Numbered list of varieties, shown above the prices. */
  varieties?: string[];
  /** Label above the price rows. */
  pricesTitle?: string;
  items?: OfferItem[];
  /** Separate product groups, shown instead of a single list of price rows. */
  groups?: OfferGroup[];
  /** Small note under the price rows. */
  note?: string;
  /** The two tiles at the bottom of the card. */
  highlights: { image: string; text: string }[];
  /**
   * Gallery photos, in display order. To add one, put the file in src/assets and add
   * its name here; to remove one, delete its line.
   */
  gallery: string[];
  /** Accessible name of the gallery, and the start of each photo's alt text. */
  galleryLabel: string;
  galleryAlt: string;
  /** Background of the whole section; default is the page's own. */
  background?: 'cream' | 'sage';
}

export const offers: Record<string, Offer> = {
  torte: {
    lead: 'Sve torte izrađujemo po dogovoru, sa pažljivo biranim ukusima i dekoracijama.',
    items: [
      { name: 'Oblaganje šlagom', price: '1600 din/kg' },
      { name: 'Oblaganje fondanom', price: '1800 din/kg' },
      { name: 'Oblaganje puter kremom', price: '1700 din/kg' },
    ],
    highlights: [
      { image: 'tastes-icon.png', text: 'Ukusi po dogovoru.' },
      { image: 'cake-figure.png', text: 'Jestive figurice za torte' },
    ],
    gallery: [
      'cake-1.png',
      'cake-2.png',
      'cake-3.png',
      'cake-4.png',
      'cake-5.png',
      'cake-6.png',
      'cake-7.png',
      'cake-8.png',
      'cake-9.png',
    ],
    galleryLabel: 'Primeri naših torti',
    galleryAlt: 'Primer torte',
  },

  'sitni-kolaci': {
    items: [
      { name: 'Mešani sitni kolači', price: '1400 din/kg' },
      { name: 'Šubarice', price: '1000 din/kg' },
      { name: 'Baklave', price: '1500 din/kg' },
      { name: 'Princes krofne', price: '1000 din/kg' },
      { name: 'Orasnice', price: '1500 din/kg' },
    ],
    note: 'Četiri gore navedene vrste mogu se naručivati isključivo na kilogram.',
    highlights: [
      // Images still to come; until then the tiles show an empty placeholder.
      {
        image: '10-cookies-variation.png',
        text: 'Minimum 10 vrsta u kilogramu mešanih sitnih kolača',
      },
      { image: 'vegan-cookies.png', text: 'Pravimo i posne vrste' },
    ],
    gallery: [
      'cookie-1.png',
      'cookie-2.png',
      'cookie-3.png',
      'cookie-4.png',
      'cookie-5.png',
      'cookie-6.png',
      'cookie-7.png',
      'cookie-8.png',
      'cookie-9.png',
      'cookie-10.png',
    ],
    galleryLabel: 'Primeri naših sitnih kolača',
    galleryAlt: 'Primer sitnih kolača',
    background: 'cream',
  },

  kanapei: {
    varieties: [
      'Ruska salata u korpicama',
      'Brusketa šunka i sir',
      'Tortiljice',
      'Brusketa kulen i urnebes',
      'Štapić sa maslinom, čeri paradajzom i fetom',
      'Prolećne rolnice',
      'Filovane projice',
    ],
    pricesTitle: 'Paketi od 30, 50 i 100 kanapea',
    items: [
      { name: '30 komada', price: '2.800 din' },
      { name: '50 komada', price: '4.600 din' },
      { name: '100 komada', price: '8.500 din' },
    ],
    highlights: [
      // Images still to come; until then the tiles show an empty placeholder.
      { image: 'canapes-variation.png', text: '7 vrsta kanapea' },
      { image: 'canapes-party.png', text: 'Idealno za proslave' },
    ],
    gallery: [
      'canapes-1.png',
      'canapes-2.png',
      'canapes-5.png',
      'canapes-6.png',
    ],
    galleryLabel: 'Primeri naših kanapea',
    galleryAlt: 'Primer kanapea',
    background: 'sage',
  },

  predjela: {
    groups: [
      {
        title: 'Slani rolati',
        price: '800 din/kg',
        varieties: ['Žuti rolat', 'Ajvar rolat', 'Spanać rolat'],
        note: 'Sve tri vrste imaju isti fil: pavlaka, šunka i sir.',
      },
      { title: 'Proja', detail: '12 komada', price: '500 din' },
      {
        title: 'Daske sa suhomesnatim proizvodima i sirevima',
        detail: 'Daske su predviđene za oko 5 osoba.',
        items: [
          {
            name: 'Daska sa suhomesnatim proizvodima i sirevima',
            price: '2.700 din',
          },
          { name: 'Daska sireva', price: '2.200 din' },
        ],
      },
      { title: 'Ruska salata', price: '1.200 din/kg' },
    ],
    highlights: [
      // Images still to come; until then the tiles show an empty placeholder.
      { image: 'predjela-rolati.png', text: 'Tri vrste slanih rolata' },
      { image: 'canapes-party.png', text: 'Za svaku proslavu' },
    ],
    gallery: [
      'appetizers-1.png',
      'appetizers-2.png',
      'appetizers-3.png',
      'appetizers-4.png',
      'appetizers-5.png',
      'appetizers-6.png',
      'appetizers-7.png',
      'appetizers-8.png',
    ],
    galleryLabel: 'Primeri naših predjela',
    galleryAlt: 'Primer predjela',
    background: 'cream',
  },
};
