/** Content of the Torte page (/proizvodi/torte). */

export interface CakeCoating {
  name: string;
  /** Price in RSD per kilogram. */
  pricePerKg: number;
}

export const cakeCoatings: CakeCoating[] = [
  { name: 'Oblaganje šlagom', pricePerKg: 1600 },
  { name: 'Oblaganje fondanom', pricePerKg: 1800 },
  { name: 'Oblaganje puter kremom', pricePerKg: 1700 },
];

/** Small highlight cards under the prices. `image` is a file name in src/assets. */
export const cakeHighlights = [
  { image: 'tastes-icon.png', text: 'Ukusi po dogovoru.' },
  { image: 'cake-figure.png', text: 'Jestive figurice za torte' },
];

/**
 * Example cakes for the gallery, in display order. To add a photo, put the file in
 * src/assets and add its name here; to remove one, delete its line. Missing files are
 * skipped (and named in the build output).
 */
export const cakeGallery: string[] = [
  'cake-1.png',
  'cake-2.png',
  'cake-3.png',
  'cake-4.png',
  'cake-5.png',
  'cake-6.png',
  'cake-7.png',
  'cake-8.png',
  'cake-9.png',
];
