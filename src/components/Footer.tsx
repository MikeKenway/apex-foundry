import Image from 'next/image';
import Link from 'next/link';
import { FaHeart } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

export function Footer() {
  return (
    <footer className='w-full bg-black border-t border-zinc-800 text-white px-4 pt-12 pb-6 font-sans'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start'>
        {/* Logo + Short Description */}
        <div className='flex flex-col items-start space-y-2'>
          <Link href='/'>
            <Image
              src='/images/logo.png'
              alt='Logo'
              width={80}
              height={80}
              className='invert'
            />
          </Link>
          <p className='text-sm text-zinc-400 max-w-xs'>
            A Hardstuck-Gold-Wattson main couldn&rsquo;t learn to win the 1v3 so
            instead he built this app to have fun with his friends. Hope you
            enjoy!
          </p>
        </div>

        {/* Navigation Links */}
        <div className='flex flex-col space-y-2 text-sm'>
          <p className='uppercase text-zinc-500 font-semibold tracking-wide'>
            Navigation
          </p>
          <Link
            href='/'
            className='hover:text-red-400 transition'
          >
            Home
          </Link>
          <Link
            href='/legends'
            className='hover:text-red-400 transition'
          >
            Legends
          </Link>
          <Link
            href='/squad-randomizer'
            className='hover:text-red-400 transition'
          >
            Squad Randomizer
          </Link>
          <Link
            href='/about'
            className='hover:text-red-400 transition'
          >
            About
          </Link>
          <Link
            href='/contact'
            className='hover:text-red-400 transition'
          >
            Contact
          </Link>
        </div>

        {/* Optional Extras (Socials or Legal) */}
        <div className='flex flex-col space-y-2 text-sm'>
          <p className='uppercase text-zinc-500 font-semibold tracking-wide'>
            More
          </p>
          <Link
            href='/terms'
            className='hover:text-red-400 transition'
          >
            Terms
          </Link>
          <Link
            href='/privacy'
            className='hover:text-red-400 transition'
          >
            Privacy
          </Link>
          <Link
            href='https://ea.com/games/apex-legends'
            target='_blank'
            className='hover:text-red-400 transition flex items-center gap-1'
          >
            Apex Official Site <FiExternalLink size={14} />
          </Link>
        </div>
      </div>

      {/* Bottom Line */}
      <div className='mt-12 text-center text-sm text-zinc-500 flex justify-center items-center gap-1'>
        <span>Made with</span>
        <FaHeart className='text-red-500' />
        <span>by</span>
        <a
          href='https://github.com/MikeKenway'
          target='_blank'
          rel='noopener noreferrer'
          className='text-white font-medium hover:text-primary transition-colors'
        >
          Ekkolyth
        </a>
      </div>
    </footer>
  );
}
