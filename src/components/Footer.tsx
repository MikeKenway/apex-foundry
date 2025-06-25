import Image from 'next/image';
import Link from 'next/link';
import { FaHeart, FaTwitter } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { SiBluesky } from 'react-icons/si';
import { HiEnvelope } from 'react-icons/hi2';

export default function Footer() {
  return (
    <footer className='w-full bg-black text-white px-4 py-8 border-t border-zinc-800'>
      <div className='max-w-7xl mx-auto px-6'>
        {/* Top section with logo and links */}
        <div className='flex flex-col md:flex-row justify-between items-start mb-8'>
          {/* Logo and description */}
          <div className='mb-6 md:mb-0 md:max-w-sm'>
            <Link
              href='/'
              className='inline-block mb-4'
            >
              <Image
                src='/images/logo.png'
                alt='Apex Foundry Logo'
                width={175}
                height={100}
                className='object-contain invert'
              />
            </Link>
            <p className='text-zinc-400 text-sm'>
              A Hardstuck-Gold-Wattson main couldn&rsquo;t learn to win the 1v3
              so instead he built this app to have fun with his friends. Hope
              you enjoy!
            </p>
          </div>

          {/* Links sections */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
            {/* App Links */}
            <div>
              <h3 className='text-white font-semibold mb-2 text-sm'>Apex Foundry</h3>
              <ul className='space-y-1'>
                <li>
                  <Link
                    href='/'
                    className='text-zinc-400 hover:text-white transition-colors text-sm'
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href='/legends'
                    className='text-zinc-400 hover:text-white transition-colors text-sm'
                  >
                    Legends
                  </Link>
                </li>
                <li>
                  <Link
                    href='/squad-randomizer'
                    className='text-zinc-400 hover:text-white transition-colors text-sm'
                  >
                    Squad Randomizer
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className='text-white font-semibold mb-2 text-sm'>
                Resources
              </h3>
              <ul className='space-y-1'>
                <li>
                  <Link
                    href='/terms'
                    className='text-zinc-400 hover:text-white transition-colors text-sm'
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href='/privacy'
                    className='text-zinc-400 hover:text-white transition-colors text-sm'
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <a
                    href='https://www.ea.com/games/apex-legends/about'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-zinc-400 hover:text-white transition-colors flex items-center gap-1 text-sm'
                  >
                    Official Site
                    <FiExternalLink className='w-3 h-3' />
                  </a>
                </li>
                <li>
                  <a
                    href='https://apexlegends.fandom.com/wiki/Apex_Legends_Wiki'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-zinc-400 hover:text-white transition-colors flex items-center gap-1 text-sm'
                  >
                    Apex Wiki
                    <FiExternalLink className='w-3 h-3' />
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className='text-white font-semibold mb-2 text-sm'>Connect</h3>
              <ul className='space-y-2'>
                <li>
                  <Link
                    href='/contact'
                    className='text-zinc-400 hover:text-white transition-colors flex items-center gap-2 text-sm'
                  >
                    <HiEnvelope className='w-4 h-4' />
                    Contact
                  </Link>
                </li>
                <li>
                  <a
                    href='https://twitter.com/ApexFoundry'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-zinc-400 hover:text-white transition-colors flex items-center gap-2 text-sm'
                  >
                    <FaTwitter className='w-4 h-4' />
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href='https://bsky.app/profile/apexfoundry.bsky.social'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-zinc-400 hover:text-white transition-colors flex items-center gap-2 text-sm'
                  >
                    <SiBluesky className='w-4 h-4' />
                    Bluesky
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section with copyright and disclaimer */}
        <div className='pt-8 border-t border-zinc-800 text-center text-sm text-zinc-500'>
          © {new Date().getFullYear()} Apex Foundry. Not affiliated with
          Respawn or EA. Made with{' '}
          <FaHeart className='text-red-500 inline mx-1' /> by{' '}
          <a
            href='https://twitter.com/ekkolyth'
            target='_blank'
            rel='noopener noreferrer'
            className='text-zinc-400 hover:text-white transition-colors'
          >
            Ekkolyth
          </a>
        </div>
      </div>
    </footer>
  );
}
