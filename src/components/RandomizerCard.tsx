import { Legend } from '@/types/legend'
import { LegendCard } from './LegendCard'

type LegendClass = 'Assault' | 'Skirmisher' | 'Support' | 'Controller' | 'Recon' | 'Any'

interface RandomizerCardProps {
  legend: Legend | null
  selectedClass: LegendClass
  onClassChange: (legendClass: LegendClass) => void
}

const legendClasses: LegendClass[] = ['Any', 'Assault', 'Skirmisher', 'Support', 'Controller', 'Recon']

export function RandomizerCard({ legend, selectedClass, onClassChange }: RandomizerCardProps) {
  return (
    <div className="w-[350px] bg-zinc-900/50 border border-zinc-800 rounded-none">
      {legend ? (
        <LegendCard legend={legend} />
      ) : (
        <div className="bg-white text-black border border-zinc-300 rounded-none overflow-hidden flex flex-col">
          <div className="relative w-full aspect-square bg-black flex items-center justify-center">
            <div className="text-zinc-600 font-[ElectronicArtsText] text-lg">
              Random {selectedClass !== 'Any' ? selectedClass : 'Legend'}
            </div>
          </div>
          <div className="p-4 text-left space-y-1">
            <h2 className="text-xl font-[ElectronicArtsText] uppercase tracking-wider font-semibold">
              Random {selectedClass !== 'Any' ? selectedClass : 'Legend'}
            </h2>
            <p className="text-sm font-[ElectronicArtsText] tracking-wider text-zinc-500">Click to generate</p>
          </div>
        </div>
      )}
      
      <div className="p-4 border-t border-zinc-800">
        <div className="flex flex-col gap-2">
          {legendClasses.map((legendClass) => (
            <label
              key={legendClass}
              className={`px-3 py-1 text-sm cursor-pointer transition-colors ${
                selectedClass === legendClass
                  ? 'bg-white text-black'
                  : 'bg-zinc-800 hover:bg-zinc-700'
              }`}
            >
              <input
                type="radio"
                name="legend-class"
                value={legendClass}
                checked={selectedClass === legendClass}
                onChange={() => onClassChange(legendClass)}
                className="hidden"
              />
              {legendClass}
            </label>
          ))}
        </div>
      </div>
    </div>
  )
} 