import { getAsset } from '@/lib/assets';
import type { CatalogImage, Category } from '@/types/catalog';

function illustration(fileName: string, alt: string): CatalogImage | undefined {
  const src = getAsset(fileName);
  return src ? { src, alt } : undefined;
}

/** Array order is the display order across the site. */
export const categories: Category[] = [
  {
    id: 'torte',
    name: 'Torte',
    slug: 'torte',
    description: '',
    image: illustration('category-cakes.png', 'Torta'),
    titleImage: illustration('torte-title.png', 'Torte'),
    titleTrim: { top: 0.113, bottom: 0.126 },
    tone: 'blush',
  },
  {
    id: 'sitni-kolaci',
    name: 'Sitni kolači',
    slug: 'sitni-kolaci',
    description: '',
    image: illustration('category-desserts.png', 'Sitni kolači'),
    titleImage: illustration('kolaci-title.png', 'Sitni kolači'),
    titleTrim: { top: 0.17, bottom: 0.184 },
    tone: 'vanilla',
  },
  {
    id: 'kanapei',
    name: 'Kanapei',
    slug: 'kanapei',
    description: '',
    image: illustration('category-canapes.png', 'Kanapei'),
    titleImage: illustration('kanapei-title.png', 'Kanapei'),
    titleTrim: { top: 0.163, bottom: 0.157 },
    tone: 'sage',
  },
  {
    id: 'predjela',
    name: 'Predjela',
    slug: 'predjela',
    description: '',
    image: illustration('category-appetizers.png', 'Predjela'),
    titleImage: illustration('predjela-title.png', 'Predjela'),
    titleTrim: { top: 0.141, bottom: 0.175 },
    tone: 'peach',
  },
];
