'use client'

import Image from 'next/image'
import Link from 'next/link'
import { PrimaryButton } from './PrimaryButton'

export function Navbar() {
  return (
    <nav className="w-full bg-black text-white px-4 py-6 border-b border-zinc-800 font-[ElectronicArtsText] text-md tracking-wider">
      <div className="px-6 mx-auto flex justify-between items-center">
        {/* Left: Logo + nav links */}
        <div className="flex items-center space-x-6 ">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={175}
              height={100}
              className="object-contain invert mr-6"
              priority
            />
          </Link>
          <Link href="/" className="hover:text-red-400 transition">Home</Link>
          <Link href="/squad-randomizer" className="hover:text-red-400 transition">Squad Randomizer</Link>
          <Link href="/legends" className="hover:text-red-400 transition">Legends</Link>
          <Link href="/about" className="hover:text-red-400 transition">About</Link>
        </div>

        {/* Right: Contact button */}
        <div>
<PrimaryButton href="/contact">Contact</PrimaryButton>

        </div>
      </div>
    </nav>
  )
}
