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
    tone: 'blush',
  },
  {
    id: 'sitni-kolaci',
    name: 'Sitni kolači',
    slug: 'sitni-kolaci',
    description: '',
    image: illustration('category-desserts.png', 'Sitni kolači'),
    tone: 'vanilla',
  },
  {
    id: 'kanapei',
    name: 'Kanapei',
    slug: 'kanapei',
    description: '',
    image: illustration('category-canapes.png', 'Kanapei'),
    tone: 'sage',
  },
  {
    id: 'predjela',
    name: 'Predjela',
    slug: 'predjela',
    description: '',
    image: illustration('category-appetizers.png', 'Predjela'),
    tone: 'peach',
  },
];
