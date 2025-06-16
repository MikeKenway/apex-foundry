'use client';

import { useState } from 'react';

export default function TermsOfServicePage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <main className='container mx-auto px-4 py-8 max-w-3xl'>
      <div className='bg-zinc-900 p-8 border border-zinc-800'>
        <h1 className='text-3xl font-bold mb-6'>Terms of Service</h1>

        <div className='prose prose-invert max-w-none space-y-8'>
          <p className='text-lg'>
            This project is a personal learning experiment — an open-source web
            app built and maintained by one random Apex fan in the community.
            It&apos;s a work in progress, and your patience and feedback
            genuinely help make it better.
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
                  <li>This is a personal learning project</li>
                  <li>Things might break or change as I learn</li>
                  <li>Feel free to use the site however you want</li>
                  <li>Source code is open and available on GitHub</li>
                  <li>No fine print, just good intentions</li>
                </ul>
              </div>
            )}
          </div>

          <section>
            <h2 className='text-2xl font-semibold mb-4'>About This Site</h2>
            <p>
              I&apos;m learning to code, design, and manage a community site —
              all at the same time. That means:
            </p>
            <ul className='list-disc list-inside mt-2 space-y-2'>
              <li>I&apos;ll definitely make mistakes now and then</li>
              <li>Things might break, glitch, or go offline</li>
              <li>Features will improve and evolve as I learn more</li>
              <li>
                If something feels off, it&apos;s not you — it&apos;s probably
                just me still figuring things out.
              </li>
            </ul>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-4'>
              Feedback & Corrections
            </h2>
            <p>
              If you spot a bug, broken link, or inaccurate info — or you just
              have a cool idea — I&apos;d love to hear from you.
            </p>
            <ul className='list-disc list-inside mt-2 space-y-2'>
              <li>Send feedback through the contact form on the site</li>
              <li>I&apos;ll respond and make fixes as I have time</li>
              <li>I appreciate your understanding (and your bug reports!)</li>
            </ul>
          </section>

          <section>
            <h2 className='text-2xl font-semibold mb-4'>Usage & Source Code</h2>
            <p>
              You&apos;re free to use the site however you want. No account
              needed. No restrictions.
            </p>
            <p className='mt-4'>
              The full source code is available on GitHub if you want to:
            </p>
            <ul className='list-disc list-inside mt-2 space-y-2'>
              <li>Learn from it</li>
              <li>Modify it</li>
              <li>Fork it and build something new</li>
            </ul>
            <p className='mt-4'>
              I built this for fun and to practice — and if it helps someone
              else along the way, that&apos;s even better.
            </p>
          </section>

          <section className='text-sm text-zinc-400 italic'>
            <p>
              If you&apos;re a lawyer reading this: thanks for your interest,
              but this isn&apos;t a commercial service and there&apos;s no fine
              print. Just good intentions and a bit of JavaScript.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
