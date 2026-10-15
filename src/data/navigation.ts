import { categories } from '@/data/categories';
import type { NavItem } from '@/types/site';

/*
 * The site is one page of stacked sections; navigation scrolls to them by anchor.
 * Links use `/#id` so they also work from any other URL (old addresses redirect home).
 */
export const SECTION_IDS = {
  home: 'pocetna',
  products: 'proizvodi',
  contact: 'kontakt',
} as const;

export function sectionHref(id: string): string {
  return `/#${id}`;
}

/** Each category's section uses its slug as its anchor. */
export function categoryHref(slug: string): string {
  return sectionHref(slug);
}

// Navigation is built synchronously at import time, so it reads the category list
// directly rather than through the async lib/catalog layer.
export const navItems: NavItem[] = [
  { label: 'Početna', href: sectionHref(SECTION_IDS.home) },
  {
    label: 'Proizvodi',
    href: sectionHref(SECTION_IDS.products),
    children: categories.map((category) => ({ label: category.name, href: categoryHref(category.slug) })),
  },
  { label: 'Kontakt', href: sectionHref(SECTION_IDS.contact) },
];
