import { Legend } from '@/types/legend'
import { LegendCard } from './LegendCard'
import { useState, useRef, useEffect } from 'react'

type LegendClass = 'Assault' | 'Skirmisher' | 'Support' | 'Controller' | 'Recon' | 'Any'

interface RandomizerCardProps {
  legend: Legend | null
  selectedClass: LegendClass
  onClassChange: (legendClass: LegendClass) => void
}

const legendClasses: LegendClass[] = ['Any', 'Assault', 'Skirmisher', 'Support', 'Controller', 'Recon']

export function RandomizerCard({ legend, selectedClass, onClassChange }: RandomizerCardProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="w-[350px] bg-black/50 border-2 border-white/10 rounded-none group hover:border-white/20 transition-colors">
      <div className="relative">
        {legend ? (
          <LegendCard legend={legend} />
        ) : (
          <div className="bg-gradient-to-b from-zinc-900 to-black text-white border-b-2 border-white/10 overflow-hidden flex flex-col">
            <div className="relative w-full aspect-square bg-gradient-to-br from-zinc-900 via-black to-zinc-900 flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-zinc-400 font-[ElectronicArtsText] text-lg group-hover:text-white transition-colors">
                Random {selectedClass !== 'Any' ? selectedClass : 'Legend'}
              </div>
            </div>
            <div className="p-4 text-left space-y-1">
              <h2 className="text-xl font-[ElectronicArtsText] uppercase tracking-wider font-semibold text-white">
                Random {selectedClass !== 'Any' ? selectedClass : 'Legend'}
              </h2>
              <p className="text-sm font-[ElectronicArtsText] tracking-wider text-zinc-400 group-hover:text-zinc-300 transition-colors">
                Click to generate
              </p>
            </div>
          </div>
        )}
      </div>
      
      <div className="relative border-t-2 border-white/10" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full bg-gradient-to-b from-zinc-900 to-black text-white px-4 py-3 text-left font-[ElectronicArtsText] text-sm hover:from-zinc-800 hover:to-zinc-900 transition-all duration-200 flex items-center justify-between group/button"
        >
          <span className="text-zinc-400 group-hover/button:text-white transition-colors">
            {selectedClass === 'Any' ? 'Choose a Class (optional)' : selectedClass}
          </span>
          <svg 
            className={`w-4 h-4 transition-all duration-200 ${isOpen ? 'rotate-180 text-white' : 'text-zinc-400 group-hover/button:text-white'}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        <div className={`absolute left-0 right-0 z-50 ${isOpen ? 'block' : 'hidden'}`}>
          <div className="mt-1 bg-gradient-to-b from-zinc-900 to-black border-2 border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
            {legendClasses.map((legendClass) => (
              <button
                key={legendClass}
                onClick={() => {
                  onClassChange(legendClass)
                  setIsOpen(false)
                }}
                className={`w-full px-4 py-2.5 text-left font-[ElectronicArtsText] text-sm transition-all duration-200 ${
                  selectedClass === legendClass
                    ? 'bg-white text-black'
                    : 'text-zinc-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {legendClass === 'Any' ? 'Any Class' : legendClass}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 