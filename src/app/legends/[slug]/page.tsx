import Image from 'next/image'
import { notFound } from 'next/navigation'
import legends from '@/data/legends.json'

export default function LegendPage({ params }: { params: { slug: string } }) {
  const legend = legends.find((l) => l.slug === params.slug)

  if (!legend) return notFound()

  return (
    <main className="p-6 max-w-7xl mx-auto text-white space-y-10 font-[ElectronicArtsText]">
      {/* HEADER */}
      <div className="relative flex flex-col md:flex-row items-center gap-6 bg-gradient-to-r from-zinc-900 to-zinc-800 p-6 shadow-lg border border-zinc-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10 blur-sm">
          <Image
            src={legend.image}
            alt="Background splash"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>

        <Image
          src={legend.image}
          alt={`${legend.name} portrait`}
          width={300}
          height={300}
          className="shadow-lg z-10"
        />

        <div className="z-10 flex-1">
          <h1 className="text-5xl font-extrabold tracking-tight text-primary drop-shadow-md">
            {legend.name}
          </h1>
          <p className="text-xl italic text-zinc-300">{legend.title}</p>
          <div className="mt-4 text-sm text-zinc-400 grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-1">
            <p><span className="font-semibold text-white">Real Name:</span> {legend.real_name}</p>
            <p><span className="font-semibold text-white">Age:</span> {legend.age}</p>
            <p><span className="font-semibold text-white">Homeworld:</span> {legend.homeworld}</p>
            <p><span className="font-semibold text-white">Class:</span> {legend.class}</p>
            <p><span className="font-semibold text-white">Voice Actor:</span> {legend.voice_actor}</p>
            <p><span className="font-semibold text-white">Introduced:</span> {legend.appearance_season}</p>
          </div>
        </div>
      </div>

      {/* GRID LAYOUT: LEFT + RIGHT */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* LEFT COLUMN (2/3) */}
        <div className="md:col-span-2 space-y-6">
          {/* BACKSTORY */}
          <section className="bg-zinc-900 border-l-4 border-primary pl-6 pr-4 py-4 shadow-inner space-y-4">
            <h2 className="text-2xl font-bold text-primary">Backstory</h2>
            <div>
              <h3 className="text-sm uppercase tracking-wide text-zinc-400 mb-1">Early Life</h3>
              <p className="text-sm text-zinc-300">{legend.backstory.early_life}</p>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-wide text-zinc-400 mb-1">Before Apex</h3>
              <p className="text-sm text-zinc-300">{legend.backstory.career_before_games}</p>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-wide text-zinc-400 mb-1">Joining Apex</h3>
              <p className="text-sm text-zinc-300">{legend.backstory.joining_apex}</p>
            </div>
          </section>

          {/* NOTABLE QUOTES */}
          <section className="bg-zinc-900 border-l-4 border-primary pl-6 pr-4 py-4 shadow-inner">
            <h2 className="text-xl font-semibold text-primary mb-2">Notable Quotes</h2>
            <ul className="list-disc list-inside text-zinc-300 text-sm space-y-1">
              {legend.notable_quotes.map((quote, i) => (
                <li key={i} className="italic">&quot;{quote}&quot;</li>
              ))}
            </ul>
          </section>

          {/* FUN FACTS */}
          <section className="bg-zinc-900 border-l-4 border-primary pl-6 pr-4 py-4 shadow-inner">
            <h2 className="text-xl font-semibold text-primary mb-2">Fun Facts</h2>
            <ul className="list-disc list-inside text-zinc-300 text-sm space-y-1">
              {legend.fun_facts.map((fact, i) => (
                <li key={i}>{fact}</li>
              ))}
            </ul>
          </section>

          {/* SOURCES */}
          <section className="text-xs text-zinc-500 pt-2">
            <h2 className="text-sm uppercase tracking-wide text-zinc-400 mb-1">Sources</h2>
            <ul className="list-disc list-inside text-zinc-400 space-y-1">
              {legend.sources.map((url, i) => (
                <li key={i}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-primary hover:underline"
                  >
                    {url}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* RIGHT COLUMN (1/3) */}
        <div className="space-y-6">
          {/* ABILITIES */}
          <section className="bg-zinc-900 p-5 border border-zinc-700 shadow">
            <h2 className="text-2xl font-bold text-primary mb-4">Abilities</h2>
            {(['tactical', 'passive', 'ultimate'] as const).map((type) => {
              const ability = legend.abilities[type]
              return (
                <div key={type} className="mb-4">
                  <h3 className="text-sm uppercase tracking-wide text-zinc-400 mb-1">
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </h3>
                  <div className="p-2">
                    <span className="font-semibold text-white">{ability.name}</span>
                    <div className="text-zinc-300 text-xs mt-1">{ability.description}</div>
                  </div>
                </div>
              )
            })}
          </section>
        </div>
      </div>
    </main>
  )
}
