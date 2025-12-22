import type { Metadata } from 'next';
import { Crimson_Pro, Syne } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';

const crimsonPro = Crimson_Pro({
  subsets: ['latin'],
  variable: '--font-crimson-pro',
  display: 'swap',
  style: ['normal', 'italic'],
  weight: ['400', '500'],
});

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://alexismanyrath.com'),
  title: {
    default: 'Alexis Manyrath | AI Engineer',
    template: '%s | Alexis Manyrath',
  },
  description: 'AI Engineer crafting intelligent solutions. Raw paths create spiky perspectives. Physics → Economics → Data Science → AI Engineering.',
  keywords: ['AI Engineer', 'Machine Learning', 'Artificial Intelligence', 'Data Science', 'Software Engineer', 'Alexis Manyrath'],
  authors: [{ name: 'Alexis Manyrath' }],
  creator: 'Alexis Manyrath',
  openGraph: {
    title: 'Alexis Manyrath | AI Engineer',
    description: 'AI Engineer crafting intelligent solutions. Raw paths create spiky perspectives.',
    url: 'https://alexismanyrath.com',
    siteName: 'Alexis Manyrath Portfolio',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alexis Manyrath | AI Engineer',
    description: 'AI Engineer crafting intelligent solutions. Raw paths create spiky perspectives.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${crimsonPro.variable} ${syne.variable}`} style={{ scrollBehavior: 'smooth' }}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

