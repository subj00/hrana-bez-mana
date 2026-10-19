export interface NavItem {
  label: string;
  href: string;
  /** Sub-pages, shown in a dropdown (desktop) or an expandable group (mobile). */
  children?: NavItem[];
}

export interface PhoneNumber {
  /** As shown, e.g. "+381 62 147 9457". */
  display: string;
  /** For the tel: link, digits only with the country code, e.g. "+381621479457". */
  tel: string;
}

export interface ContactInfo {
  phones: PhoneNumber[];
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
