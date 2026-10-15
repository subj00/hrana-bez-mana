import { categories } from '@/data/categories';
import { products } from '@/data/products';
import type { Category, CategoryWithProducts, Product } from '@/types/catalog';

/*
 * The only module that knows where catalog data comes from. Components call
 * these functions instead of importing from `data/` directly, so the source can
 * later become Content Collections or a CMS without touching the UI. They are
 * async for that reason, even though the current source is synchronous.
 */

export async function getCategories(): Promise<Category[]> {
  return categories;
}

export async function getCategoryBySlug(slug: string): Promise<Category | undefined> {
  return categories.find((category) => category.slug === slug);
}

export async function getProductsByCategory(categoryId: Category['id']): Promise<Product[]> {
  return products.filter((product) => product.categoryId === categoryId);
}

export async function getProducts(): Promise<Product[]> {
  return products;
}

export async function getFeaturedProducts(): Promise<Product[]> {
  return products.filter((product) => product.featured);
}

export async function getCatalog(): Promise<CategoryWithProducts[]> {
  return categories.map((category) => ({
    category,
    products: products.filter((product) => product.categoryId === category.id),
  }));
}
