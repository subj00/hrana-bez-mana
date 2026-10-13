import type { ImageMetadata } from 'astro';

/**
 * `src` is either a local image imported from `src/assets` (optimized by Astro)
 * or a URL string, e.g. coming from a CMS later on.
 */
export interface CatalogImage {
  src: ImageMetadata | string;
  alt: string;
}

export interface Category {
  id: string;
  name: string;
  /** URL-safe identifier; also used as the in-page anchor (`#torte`). */
  slug: string;
  description: string;
  image?: CatalogImage;
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
