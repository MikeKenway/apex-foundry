import legends from '@/data/legends.json';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default function LegendDetailPage({ params }: { params: { slug: string } }) {
  const legend = legends.find((l) => l.slug === params.slug);

  if (!legend) return notFound();

  const abilities = [
    { name: 'Passive', description: legend.passive },
    { name: 'Tactical', description: legend.tactical },
    { name: 'Ultimate', description: legend.ultimate },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 text-white">
      <Link href="/legends" className="text-[#FF4655] hover:underline text-sm mb-8 inline-block">&larr; Back to Legends</Link>
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start bg-[#18181b] border-l-4 border-[#FF4655] shadow-xl p-8">
        <Image
          src={legend.imageProfile || legend.image}
          alt={legend.name}
          width={220}
          height={220}
          className="rounded-lg border-2 border-[#FF4655] bg-black object-cover"
          priority
        />
        <div className="flex-1">
          <h1 className="text-4xl font-[Duke] font-bold mb-2 tracking-tight uppercase">{legend.name}</h1>
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 bg-[#FF4655] text-white rounded font-bold uppercase text-xs tracking-widest">{legend.class}</span>
            <span className="text-zinc-400 text-sm">{legend.title}</span>
          </div>
          <p className="mb-4 text-zinc-200 text-lg font-semibold">{legend.origin}</p>
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2 text-[#FF4655]">Abilities</h2>
            <ul className="space-y-2">
              {abilities.map((ability) => (
                <li key={ability.name} className="bg-zinc-900/80 p-3 rounded border-l-4 border-[#FF4655]">
                  <span className="font-bold text-white">{ability.name}:</span> <span className="text-zinc-300">{ability.description}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-4 text-sm text-zinc-400 mt-6">
            <span>Release: <span className="text-white font-semibold">Season {legend.releaseSeason}</span></span>
            <span>Difficulty: <span className="text-white font-semibold">{legend.difficulty}</span></span>
          </div>
        </div>
      </div>
    </div>
  );
} 