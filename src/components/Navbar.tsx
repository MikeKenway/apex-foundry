'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiMenu } from 'react-icons/hi';
import { Button } from './ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from './ui/navigation-menu';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <nav className='w-full bg-black text-white px-4 py-6 border-b border-zinc-800 font-[ElectronicArtsText] text-md tracking-wider'>
      <div className='px-6 mx-auto flex justify-between items-center'>
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

        {/* Right side navigation and contact button */}
        <div className='hidden md:flex items-center space-x-6'>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link
                  href='/'
                  passHref
                >
                  <NavigationMenuLink>Home</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href='/legends'
                  passHref
                >
                  <NavigationMenuLink>Legends</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href='/squad-randomizer'
                  passHref
                >
                  <NavigationMenuLink>Squad Randomizer</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Button
            variant='default'
            asChild
          >
            <Link href='/contact'>Contact</Link>
          </Button>
        </div>

        {/* Hamburger Button */}
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
          <Button
            variant='outline'
            className='w-full'
            asChild
          >
            <Link
              href='/contact'
              onClick={handleClose}
            >
              Contact
            </Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
