export interface NavItem {
  label: string;
  href: string;
  /** Sub-pages, shown in a dropdown (desktop) or an expandable group (mobile). */
  children?: NavItem[];
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface ContactInfo {
  phone?: string;
  email?: string;
  address?: string;
  social: SocialLink[];
}

export interface SiteConfig {
  name: string;
  /** Default meta description. */
  description: string;
  /** BCP 47 tag for the `lang` attribute. */
  lang: string;
  /** Open Graph locale (`language_TERRITORY`). */
  ogLocale: string;
  instagramUrl: string;
  contact: ContactInfo;
}
