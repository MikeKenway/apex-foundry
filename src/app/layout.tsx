// This file wraps every page in your app — perfect for a shared Navbar and Footer.
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import type { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';

// -------------------------------
// 🔧 Editable site-wide metadata
// -------------------------------
const siteName = 'Apex Foundry';
const siteDescription =
  'An Unofficial Apex Legends Toolkit. Browse detailed info for every Apex Legend, filter by class, and randomize your squad for your next match.';
const siteURL = 'https://apexfoundry.gg';
const ogImage = '/images/og-image.png';

// -------------------------------
// 📦 Global metadata config
// -------------------------------
export const metadata: Metadata = {
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  metadataBase: new URL(siteURL),
  openGraph: {
    title: siteName,
    description: siteDescription,
    url: siteURL,
    siteName,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: siteDescription,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// -------------------------------
// 🧱 Root layout structure
// -------------------------------
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className='min-h-screen flex flex-col bg-gray-900 text-white'>
        <Analytics />
        <Navbar />
        <main className='flex-1 container mx-auto px-4 py-8'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
