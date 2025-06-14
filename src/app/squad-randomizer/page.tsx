'use client'

import { useState } from 'react'
import legends from '@/data/legends.json'
import type { Legend } from '@/types/legend'
import { getRandomLegend } from '@/app/utils/getRandomLegend'
import { LegendCard } from '@/components/LegendCard'
import { PrimaryButton } from '@/components/PrimaryButton'
import { FiPlus, FiMinus } from 'react-icons/fi'

export default function SquadRandomizerPage() {
  const [squad, setSquad] = useState<Legend[]>([])
  const [squadSize, setSquadSize] = useState(1)

  function handleRoll() {
    const newSquad: Legend[] = []
    const usedIndices = new Set<number>()

    // Generate legends based on squad size
    while (newSquad.length < squadSize) {
      const legend = getRandomLegend(legends as Legend[])
      const legendIndex = legends.findIndex(l => l.slug === legend.slug)
      
      if (!usedIndices.has(legendIndex)) {
        usedIndices.add(legendIndex)
        newSquad.push(legend)
      }
    }

    setSquad(newSquad)
  }

  function handleAddMember() {
    if (squadSize < 3) {
      setSquadSize(squadSize + 1)
      setSquad([]) // Clear current squad when changing size
    }
  }

  function handleRemoveMember() {
    if (squadSize > 1) {
      setSquadSize(squadSize - 1)
      setSquad([]) // Clear current squad when changing size
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 text-white text-center">
      <h1 className="text-4xl font-[Duke] mb-12">Squad Randomizer</h1>

      <div className="flex justify-center gap-6 mb-8">
        {Array.from({ length: squadSize }).map((_, index) => (
          <div key={index} className="w-[350px] bg-zinc-900/50 border border-zinc-800 rounded-none">
            {squad[index] ? (
              <LegendCard legend={squad[index]} />
            ) : (
              <div className="bg-white text-black border border-zinc-300 rounded-none overflow-hidden flex flex-col">
                <div className="relative w-full aspect-square bg-black flex items-center justify-center">
                  <div className="text-zinc-600 font-[ElectronicArtsText] text-lg">
                    Random Legend
                  </div>
                </div>
                <div className="p-4 text-left space-y-1">
                  <h2 className="text-xl font-[ElectronicArtsText] uppercase tracking-wider font-semibold">Random Legend</h2>
                  <p className="text-sm font-[ElectronicArtsText] tracking-wider text-zinc-500">Click to generate</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="space-x-4">
        <PrimaryButton variant="button" onClick={handleRoll}>
          Get Random Squad
        </PrimaryButton>
        <PrimaryButton variant="button" onClick={handleAddMember} disabled={squadSize >= 3}>
          <FiPlus size={20} />
        </PrimaryButton>
        <PrimaryButton variant="button" onClick={handleRemoveMember} disabled={squadSize <= 1}>
          <FiMinus size={20} />
        </PrimaryButton>
      </div>
    </div>
  )
}
