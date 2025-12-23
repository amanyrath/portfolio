// Centralized site configuration and constants

export const SITE_CONFIG = {
  name: 'Alexis Manyrath',
  shortName: 'AM',
  email: 'amanyrath@gmail.com',
  title: 'AI Engineer',
  resumePath: '/Alexis_Manyrath_Resume.pdf',
  url: 'https://alexismanyrath.com',
} as const;

export interface SocialLink {
  name: string;
  url: string;
  label: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/amanyrath', label: 'GitHub' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/alexis-manyrath/', label: 'LinkedIn' },
  { name: 'Twitter', url: 'https://x.com/wow_pal', label: 'Twitter' },
] as const;

export interface NavLink {
  name: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { name: 'Work', href: '#work' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
] as const;

