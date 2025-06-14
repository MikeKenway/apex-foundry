import Image from 'next/image';
import { notFound } from 'next/navigation';
import legends from '@/data/legends.json';
import type { Legend } from '@/types/legend';

type Props = {
  params: {
    slug: string;
  };
};

export default function LegendPage({ params }: Props) {
  const legend = (legends as Legend[]).find((l) => l.slug === params.slug);
  if (!legend) return notFound();

  return (
    <main className='p-6 max-w-7xl mx-auto text-white space-y-10 font-[ElectronicArtsText]'>
      {/* HEADER */}
      <section className='bg-gradient-to-b from-zinc-900 to-zinc-800 p-6 shadow-lg border border-zinc-700 overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-8'>
        {/* LEFT: Info */}
        <div className='flex-1 space-y-6'>
          <div>
            <h1 className='text-5xl font-extrabold tracking-tight text-primary drop-shadow-md'>
              {legend.name}
            </h1>
            <p className='text-xl italic text-zinc-300'>{legend.title}</p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-2 text-sm text-zinc-400 w-full max-w-2xl'>
            <p>
              <span className='font-semibold text-white'>Real Name:</span>{' '}
              {legend.real_name}
            </p>
            <p>
              <span className='font-semibold text-white'>Homeworld:</span>{' '}
              {legend.homeworld || 'Unknown'}
            </p>
            <p>
              <span className='font-semibold text-white'>Age:</span>{' '}
              {legend.age || 'Unknown'}
            </p>
            <p>
              <span className='font-semibold text-white'>Class:</span>{' '}
              {legend.class}
            </p>
            <p>
              <span className='font-semibold text-white'>Introduced:</span>{' '}
              {legend.appearance_season}
            </p>
          </div>

          {/* FAMILY */}
          {legend.family && Object.values(legend.family).some((val) => val) && (
            <div className='text-sm text-zinc-300 pt-2 space-y-1 border-t border-zinc-700 mt-4'>
              <h3 className='text-sm uppercase tracking-wide text-primary mb-1'>
                Known Family
              </h3>
              <ul className='grid grid-cols-1 sm:grid-cols-2 gap-x-8 text-sm'>
                {legend.family.mother?.name && (
                  <li>
                    <strong className='text-white'>Mother:</strong>{' '}
                    {legend.family.mother.name}
                    {legend.family.mother.status &&
                      ` (${legend.family.mother.status})`}
                    {legend.family.mother.notes &&
                      ` – ${legend.family.mother.notes}`}
                  </li>
                )}
                {legend.family.father?.name && (
                  <li>
                    <strong className='text-white'>Father:</strong>{' '}
                    {legend.family.father.name}
                    {legend.family.father.status &&
                      ` (${legend.family.father.status})`}
                    {legend.family.father.notes &&
                      ` – ${legend.family.father.notes}`}
                  </li>
                )}
                {Array.isArray(legend.family.brothers) &&
                  legend.family.brothers.length > 0 && (
                    <li>
                      <strong className='text-white'>Brothers:</strong>{' '}
                      {legend.family.brothers
                        .filter((b) => b.name)
                        .map((b) => b.name)
                        .join(', ')}
                    </li>
                  )}
                {Array.isArray(legend.family.sisters) &&
                  legend.family.sisters.length > 0 && (
                    <li>
                      <strong className='text-white'>Sisters:</strong>{' '}
                      {legend.family.sisters
                        .filter((s) => s.name)
                        .map((s) => s.name)
                        .join(', ')}
                    </li>
                  )}
                {Array.isArray(legend.family.others) &&
                  legend.family.others.length > 0 && (
                    <li>
                      <strong className='text-white'>Others:</strong>{' '}
                      {legend.family.others
                        .filter((o) => o.name)
                        .map((o) => o.name)
                        .join(', ')}
                    </li>
                  )}
              </ul>
            </div>
          )}
        </div>

        {/* RIGHT: IMAGE */}
        <div className='relative w-full max-w-[300px] aspect-square md:w-[300px] md:shrink-0'>
          <Image
            src={legend.image}
            alt={`${legend.name} portrait`}
            fill
            style={{ objectFit: 'cover' }}
            className='shadow-lg'
          />
        </div>
      </section>

      {/* GRID LAYOUT */}
      <div className='grid md:grid-cols-3 gap-6'>
        {/* LEFT COLUMN (2/3) */}
        <div className='md:col-span-2 space-y-6'>
          {/* BACKSTORY */}
          <section className='bg-zinc-900 border-l-4 border-primary pl-6 pr-4 py-4 shadow-inner space-y-4'>
            <h2 className='text-2xl font-bold text-primary'>Backstory</h2>
            <div>
              <h3 className='text-sm uppercase tracking-wide text-zinc-400 mb-1'>
                Early Life
              </h3>
              <p className='text-sm text-zinc-300'>
                {legend.backstory?.early_life || 'Unknown'}
              </p>
            </div>
            <div>
              <h3 className='text-sm uppercase tracking-wide text-zinc-400 mb-1'>
                Before Apex
              </h3>
              <p className='text-sm text-zinc-300'>
                {legend.backstory?.career_before_games || 'Unknown'}
              </p>
            </div>
            <div>
              <h3 className='text-sm uppercase tracking-wide text-zinc-400 mb-1'>
                Joining Apex
              </h3>
              <p className='text-sm text-zinc-300'>
                {legend.backstory?.joining_apex || 'Unknown'}
              </p>
            </div>
          </section>

          {/* QUOTES */}
          <section className='bg-zinc-900 border-l-4 border-primary pl-6 pr-4 py-4 shadow-inner'>
            <h2 className='text-xl font-semibold text-primary mb-2'>
              Notable Quotes
            </h2>
            <ul className='list-disc list-inside text-zinc-300 text-sm space-y-1'>
              {(legend.notable_quotes || []).map((quote, i) => (
                <li
                  key={i}
                  className='italic'
                >
                  &quot;{quote}&quot;
                </li>
              ))}
            </ul>
          </section>

          {/* FUN FACTS */}
          <section className='bg-zinc-900 border-l-4 border-primary pl-6 pr-4 py-4 shadow-inner'>
            <h2 className='text-xl font-semibold text-primary mb-2'>
              Fun Facts
            </h2>
            <ul className='list-disc list-inside text-zinc-300 text-sm space-y-1'>
              {(legend.fun_facts || []).map((fact, i) => (
                <li key={i}>{fact}</li>
              ))}
            </ul>
          </section>

          {/* SOURCES */}
          <section className='bg-zinc-800/40 px-6 py-4 shadow-inner'>
            <h2 className='text-sm uppercase tracking-wide text-zinc-400 mb-2'>
              Sources
            </h2>
            <ul className='list-disc list-inside text-zinc-400 space-y-1 text-xs'>
              {(legend.sources || []).map((url, i) => (
                <li key={i}>
                  <a
                    href={url}
                    target='_blank'
                    rel='noreferrer'
                    className='hover:text-primary hover:underline'
                  >
                    {url}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* RIGHT COLUMN (1/3) */}
        <div className='space-y-6'>
          {/* VOICE ACTOR */}
          <section className='bg-zinc-900 p-5 border border-zinc-700 shadow'>
            <h2 className='text-xl font-semibold text-primary mb-2'>
              Voice Actor
            </h2>
            <p className='text-sm text-zinc-300'>
              {legend.voice_actor || 'Unknown'}
            </p>
          </section>

          {/* ABILITIES */}
          <section className='bg-zinc-900 p-5 border border-zinc-700 shadow'>
            <h2 className='text-2xl font-bold text-primary mb-4'>Abilities</h2>
            {(['tactical', 'passive', 'ultimate'] as const).map((type) => {
              const ability = legend.abilities[type];
              return (
                <div
                  key={type}
                  className='mb-4'
                >
                  <h3 className='text-sm uppercase tracking-wide text-zinc-400 mb-1'>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </h3>
                  <div className='p-2'>
                    <span className='font-semibold text-white'>
                      {ability.name}
                    </span>
                    <div className='text-zinc-300 text-xs mt-1'>
                      {ability.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </section>
        </div>
      </div>
    </main>
  );
}
