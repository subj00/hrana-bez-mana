import type { ImageMetadata } from 'astro';

/**
 * `src` is either a local image from `src/assets` (optimized by Astro)
 * or a URL string, e.g. coming from a CMS later on.
 */
export interface CatalogImage {
  src: ImageMetadata | string;
  alt: string;
}

/** Pastel background a category is presented with (see `--tone-*` in tokens.css). */
export type CategoryTone = 'blush' | 'vanilla' | 'sage' | 'peach';

export interface Category {
  id: string;
  name: string;
  /** URL-safe identifier, used as the anchor of the category's section (`/#torte`). */
  slug: string;
  description: string;
  image?: CatalogImage;
  /** Decorative lettering used as the section title. */
  titleImage?: CatalogImage;
  /**
   * Share of the title image's height that is empty above and below the lettering, so
   * spacing can be measured from the letters rather than the image box.
   */
  titleTrim?: { top: number; bottom: number };
  tone: CategoryTone;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  categoryId: Category['id'];
  images: CatalogImage[];
  /** Price in RSD. Omit for "price on request" items. */
  price?: number;
  featured?: boolean;
}

export interface CategoryWithProducts {
  category: Category;
  products: Product[];
}
