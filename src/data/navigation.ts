import { categories } from '@/data/categories';
import type { NavItem } from '@/types/site';

export const ROUTES = {
  home: '/',
  products: '/proizvodi',
  contact: '/kontakt',
} as const;

export function categoryHref(slug: string): string {
  return `${ROUTES.products}/${slug}`;
}

// Navigation is built synchronously at import time, so it reads the category list
// directly rather than through the async lib/catalog layer.
export const navItems: NavItem[] = [
  { label: 'Početna', href: ROUTES.home },
  {
    label: 'Proizvodi',
    href: ROUTES.products,
    children: categories.map((category) => ({ label: category.name, href: categoryHref(category.slug) })),
  },
  { label: 'Kontakt', href: ROUTES.contact },
];

/** Whether `href` is the current page, or (for section roots) one of its sub-pages. */
export function isCurrent(href: string, pathname: string): boolean {
  const path = pathname.replace(/\/+$/, '') || '/';
  return href === ROUTES.home ? path === ROUTES.home : path === href || path.startsWith(`${href}/`);
}
