import type { NavItem } from '@/types/site';

/** Single source of truth for section anchors, shared by sections and navigation. */
export const SECTION_IDS = {
  home: 'pocetna',
  products: 'proizvodi',
  contact: 'kontakt',
} as const;

export const navItems: NavItem[] = [
  { label: 'Početna', href: `#${SECTION_IDS.home}` },
  { label: 'Proizvodi', href: `#${SECTION_IDS.products}` },
  { label: 'Kontakt', href: `#${SECTION_IDS.contact}` },
];
