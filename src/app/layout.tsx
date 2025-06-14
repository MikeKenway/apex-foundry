// This file wraps every page in your app — perfect for a shared Navbar and Footer.
import './globals.css' // Import Tailwind + global styles
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import type { ReactNode } from 'react'

export const metadata = {
  title: 'Apex Legends App',
  description: 'Legend stats, randomizer, and more',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-900 text-white">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
