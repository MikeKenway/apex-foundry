import Image from 'next/image'
import { notFound } from 'next/navigation'
import legends from '@/data/legends.json'
import type { Legend } from '@/types/legend'

export default function LegendPage({ params }: { params: { slug: string } }) {
  const legend = legends.find((l: Legend) => l.slug === params.slug)

  if (!legend) return notFound()

  return (
    <main className="p-6 max-w-5xl mx-auto text-white space-y-16 font-[ElectronicArtsText]">
      {/* HEADER */}
      <div className="relative flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-zinc-900 to-zinc-800 p-6 rounded-2xl shadow-lg border border-zinc-700 overflow-hidden">
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
          className="rounded-2xl shadow-lg z-10"
        />

        <div className="z-10">
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

      {/* ABILITIES */}
      <section>
        <h2 className="text-3xl font-bold text-primary mb-4 drop-shadow">
          Abilities
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(legend.abilities).map(([key, ability]) => (
            <div
              key={key}
              className="bg-zinc-900 border border-zinc-700 rounded-xl p-5 shadow-lg hover:shadow-primary/30 hover:scale-[1.02] transition-transform"
            >
              <h3 className="text-lg font-bold text-white mb-2 capitalize">
                {ability.name}
              </h3>
              <p className="text-sm text-zinc-300">{ability.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BACKSTORY */}
      <section className="bg-zinc-900 border-l-4 border-primary pl-6 pr-4 py-6 rounded-xl shadow-inner">
        <h2 className="text-2xl font-bold text-primary mb-4">Backstory</h2>
        <ul className="space-y-3 text-zinc-300 text-sm">
          <li><strong className="text-white">Early Life:</strong> {legend.backstory.early_life}</li>
          <li><strong className="text-white">Before Apex:</strong> {legend.backstory.career_before_games}</li>
          <li><strong className="text-white">Joining Apex:</strong> {legend.backstory.joining_apex}</li>
        </ul>
      </section>

      {/* PERSONALITY */}
      <section className="bg-zinc-900 p-6 rounded-xl border border-zinc-700 shadow">
        <h2 className="text-2xl font-bold text-primary mb-4">Personality</h2>
        <p className="text-sm text-zinc-300 mb-2">
          <strong>Traits:</strong> {legend.personality.traits.join(', ')}
        </p>
        <p className="text-sm text-zinc-300 mb-2">
          <strong>Insecurities:</strong> {legend.personality.insecurities}
        </p>
        <p className="text-sm text-zinc-300">
          <strong>Hobbies:</strong> {legend.personality.hobbies.join(', ')}
        </p>
      </section>

      {/* QUOTES + FUN FACTS */}
      <section className="grid md:grid-cols-2 gap-6">
        <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-700 shadow">
          <h2 className="text-xl font-semibold text-primary mb-3">Notable Quotes</h2>
          <ul className="list-disc list-inside text-zinc-300 text-sm space-y-1">
            {legend.notable_quotes.map((quote, i) => (
              <li key={i} className="italic">"{quote}"</li>
            ))}
          </ul>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-700 shadow">
          <h2 className="text-xl font-semibold text-primary mb-3">Fun Facts</h2>
          <ul className="list-disc list-inside text-zinc-300 text-sm space-y-1">
            {legend.fun_facts.map((fact, i) => (
              <li key={i}>{fact}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* SOURCES */}
      <section className="text-xs text-gray-500">
        <h2 className="text-sm uppercase tracking-wide text-zinc-400 mb-2">Sources</h2>
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
    </main>
  )
}
