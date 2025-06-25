import Link from 'next/link';
import Image from 'next/image';
import { FiGithub } from 'react-icons/fi';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  return (
    <div className='relative flex items-center justify-center px-2 py-12 text-white'>
      <div className='relative z-10 w-full max-w-2xl mx-auto'>
        <Card className='bg-zinc-900 border-l-4 border-primary shadow-xl'>
          <CardContent className='px-10 py-12 flex flex-col items-start gap-8 text-left'>
            <div className='flex flex-col gap-8 mb-2'>
              <h1 className='text-4xl md:text-5xl font-medium font-[Duke] text-white tracking-wider uppercase'>
                Welcome to
              </h1>
              <Image
                src='/images/logo.png'
                alt='Apex Foundry Logo'
                width={400}
                height={150}
                className='block align-middle invert'
                priority
              />
            </div>
            <div className='h-1 w-24 bg-gradient-to-r from-primary to-transparent mb-2' />
            <p className='text-lg md:text-xl text-zinc-200 max-w-2xl mb-2 leading-relaxed font-semibold'>
              There isn&apos;t much here yet, but there will (hopefully) be more
              soon!
            </p>
            <p className='text-base md:text-lg text-zinc-400 max-w-xl mb-2 leading-relaxed'>
              I have some ideas that I want to try to do with the home page and
              for more functionality as I learn more about how to code. For now,
              check out the profile pages to learn more about our favorite
              legends, or choose chaos and randomize your squad.
            </p>
          </CardContent>
        </Card>
        <div className='flex justify-end mt-6'>
          <Link
            href='https://github.com/mikekenway/apex-foundry'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 text-zinc-400 hover:text-primary text-sm font-mono border-b border-transparent hover:border-primary transition-colors'
          >
            <FiGithub className='w-5 h-5' />
            Follow the project on GitHub
          </Link>
        </div>
      </div>
    </div>
  );
}
