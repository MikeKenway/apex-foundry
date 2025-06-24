'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiMenu } from 'react-icons/hi';
import { PrimaryButton } from './primary-button';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <nav className='w-full bg-black text-white px-4 py-6 border-b border-zinc-800 font-[ElectronicArtsText] text-md tracking-wider'>
      <div className='px-6 mx-auto flex justify-between items-center'>
        {/* Logo */}
        <Link
          href='/'
          className='flex-shrink-0'
        >
          <Image
            src='/images/logo.png'
            alt='Logo'
            width={175}
            height={100}
            className='object-contain invert'
            priority
          />
        </Link>

        {/* Main Nav Links - Desktop */}
        <div className='hidden md:flex items-center space-x-6'>
          <Link
            href='/'
            className='hover:text-primary transition'
          >
            Home
          </Link>
          <Link
            href='/legends'
            className='hover:text-primary transition'
          >
            Legends
          </Link>
          <Link
            href='/squad-randomizer'
            className='hover:text-primary transition'
          >
            Squad Randomizer
          </Link>
        </div>

        {/* Contact Button - Desktop */}
        <div className='hidden md:block'>
          <PrimaryButton href='/contact'>Contact</PrimaryButton>
        </div>

        {/* Hamburger Button - Mobile */}
        <button
          aria-label='Toggle menu'
          onClick={() => setIsOpen(!isOpen)}
          className='md:hidden ml-4 focus:outline-none'
        >
          <HiMenu className='w-6 h-6' />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden mt-4 px-6 space-y-4'>
          <Link
            href='/'
            onClick={handleClose}
            className='block hover:text-primary'
          >
            Home
          </Link>
          <Link
            href='/legends'
            onClick={handleClose}
            className='block hover:text-primary'
          >
            Legends
          </Link>
          <Link
            href='/squad-randomizer'
            onClick={handleClose}
            className='block hover:text-primary'
          >
            Squad Randomizer
          </Link>

          {/* Contact Button - Mobile*/}
          <div className='pt-4 border-t border-zinc-700'>
            <PrimaryButton href='/contact'>Contact</PrimaryButton>
          </div>
        </div>
      )}
    </nav>
  );
}
