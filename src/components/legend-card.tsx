'use client';

import Image from 'next/image';
import type { Legend } from '@/types/legend';
import Link from 'next/link';

export function LegendCard({ legend }: { legend: Legend }) {
  return (
    <div className='bg-white text-black border border-zinc-300 rounded-none overflow-hidden transition hover:shadow-lg flex flex-col'>
      {/* Image block */}
      <Link href={`/legends/${legend.slug}`}>
        <div className='relative w-full aspect-square bg-black'>
          <Image
            src={legend.image}
            alt={legend.name}
            fill
            className='object-cover'
            sizes='(max-width: 640px) calc(100vw - 32px), (max-width: 1024px) 400px, 500px'
            priority
          />
        </div>
      </Link>

      {/* Info */}
      <div className='p-4 text-left space-y-2'>
        <h2 className='text-xl font-[ElectronicArtsText] uppercase tracking-wider font-semibold'>
          {legend.name}
        </h2>
        <p className='text-sm font-[ElectronicArtsText] tracking-wider text-zinc-500'>
          {legend.title}
        </p>

      </div>
    </div>
  );
}
