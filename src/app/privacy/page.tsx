'use client';

import { useState } from 'react';

export default function PrivacyPolicyPage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <main className='container mx-auto px-4 py-8 max-w-3xl'>
      <div className='bg-zinc-900 p-8 border border-zinc-800'>
        <h1 className='text-3xl font-bold mb-6'>Privacy Policy</h1>

        <div className='prose prose-invert max-w-none space-y-8'>
          <p className='text-lg'>
            I take privacy seriously — and I&apos;ve kept this site clean and
            simple so you don&apos;t have to worry about it.
          </p>

          {/* TL;DR Dropdown */}
          <div>
            <button
              type='button'
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className='w-full px-4 py-2 bg-zinc-800 border border-zinc-700 text-zinc-100 text-left focus:border-zinc-600 focus:outline-none flex justify-between items-center'
            >
              <span className='text-zinc-100'>
                Here&apos;s a tl;dr, if you don&apos;t want to read the whole
                thing:
              </span>
              <svg
                className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className='w-full bg-zinc-800 border-x border-b border-zinc-700'>
                <ul className='list-disc list-inside space-y-2 p-4 text-zinc-300'>
                  <li>No personal data is collected</li>
                  <li>No cookies, no ads, no creepy trackers</li>
                  <li>I use Vercel Analytics for anonymous page view stats</li>
                  <li>
                    I can&apos;t see who you are or what you do on other sites
                  </li>
                  <li>Data is used only to improve this site</li>
                </ul>
              </div>
            )}
          </div>

          <section>
            <h2 className='text-2xl font-semibold mb-4'>
              What Data Is Collected
            </h2>
            <p>
              This site uses{' '}
              <a
                href='https://vercel.com/docs/analytics'
                target='_blank'
                rel='noopener noreferrer'
                className='text-primary hover:underline'
              >
                Vercel Web Analytics
              </a>{' '}
              to help me understand how people use the site — nothing more.
              Here&apos;s what it tracks:
            </p>
            <ul className='list-disc list-inside mt-2 space-y-1'>
              <li>Which pages get visited</li>
              <li>How people found the site (referrer)</li>
              <li>What country visitors are in (based on anonymized IP)</li>
              <li>Device type and browser</li>
            </ul>
            <p className='mt-2'>
              That&apos;s it. There are no cookies, no personal identifiers, and
              no tracking across websites.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-4'>
              What I See (and Don&apos;t)
            </h2>
            <p>
              I can&apos;t see who you are, where you live, or anything
              personally identifiable. I don&apos;t have access to your IP
              address or name, and I don&apos;t want it. I just get anonymized
              stats so I can fix bugs, improve performance, and see which
              features people actually use.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-4'>
              What I Do With That Data
            </h2>
            <p className='font-semibold'>
              The short version: I use anonymous traffic data to make the site
              better — and that&apos;s it.
            </p>

            <p className='mt-4'>Here&apos;s how that actually helps:</p>
            <ul className='list-disc list-inside mt-2 space-y-2'>
              <li>
                <strong>Spot broken or outdated pages</strong>
                <p className='ml-6 mt-1 text-zinc-300'>
                  If a bunch of people visit a page and immediately bounce,
                  that&apos;s a clue something might be wrong — a broken link,
                  missing content, or a confusing layout.
                </p>
              </li>
              <li>
                <strong>Improve performance and design</strong>
                <p className='ml-6 mt-1 text-zinc-300'>
                  Seeing what kind of devices and browsers people use helps me
                  make sure the site loads fast and works well everywhere (not
                  just on my setup).
                </p>
              </li>
              <li>
                <strong>Understand what people care about</strong>
                <p className='ml-6 mt-1 text-zinc-300'>
                  If lots of visitors go to one feature (say, the randomizer), I
                  know to keep improving it. If something gets ignored, I can
                  clean it up or replace it with something better.
                </p>
              </li>
              <li>
                <strong>Keep things lightweight</strong>
                <p className='ml-6 mt-1 text-zinc-300'>
                  I use this info to make smart decisions about what to build
                  next without guessing — no bloated features or unnecessary
                  extras.
                </p>
              </li>
            </ul>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-4'>
              What I don&apos;t do:
            </h2>
            <ul className='list-disc list-inside space-y-2'>
              <li>I don&apos;t sell or share your data with anyone.</li>
              <li>
                I don&apos;t store this data myself — it&apos;s handled entirely
                through Vercel&apos;s secure analytics system.
              </li>
              <li>
                I don&apos;t connect any data to individuals. There&apos;s no
                login, no tracking across sites, and no profiles being built
                behind the scenes.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
