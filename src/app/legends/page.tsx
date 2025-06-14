import legends from '@/data/legends.json'
import { LegendCard } from '@/components/LegendCard'
import type { Legend } from '@/types/legend'

export default function LegendsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="text-6xl font-[Duke] tracking-wider text-white">
          Choose Your Legend
        </h1>
        <p className="text-zinc-400 mt-2 font-[ElectronicArtsText] tracking-wider">Last Updated: Season 25</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {(legends as Legend[]).map((legend) => (
          <LegendCard key={legend.slug} legend={legend} />
        ))}
      </div>
    </div>
  )
}
