'use client'

import { useState } from 'react'
import legends from '@/data/legends.json'
import type { Legend } from '@/types/legend'
import { getRandomLegend } from '@/app/utils/getRandomLegend'
import { PrimaryButton } from '@/components/PrimaryButton'
import { FiPlus, FiMinus } from 'react-icons/fi'
import { RandomizerCard } from '@/components/RandomizerCard'

type LegendClass = 'Assault' | 'Skirmisher' | 'Support' | 'Controller' | 'Recon' | 'Any'

export default function SquadRandomizerPage() {
  const [squad, setSquad] = useState<Legend[]>([])
  const [squadSize, setSquadSize] = useState(1)
  const [selectedClasses, setSelectedClasses] = useState<LegendClass[]>(['Any'])

  function handleRoll() {
    const newSquad: Legend[] = []
    const usedIndices = new Set<number>()

    // Generate legends based on squad size
    while (newSquad.length < squadSize) {
      const selectedClass = selectedClasses[newSquad.length]
      const filteredLegends = selectedClass === 'Any' 
        ? legends 
        : legends.filter(legend => legend.class === selectedClass)
      
      const legend = getRandomLegend(filteredLegends as Legend[])
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
      setSelectedClasses([...selectedClasses, 'Any'])
      setSquad([]) // Clear current squad when changing size
    }
  }

  function handleRemoveMember() {
    if (squadSize > 1) {
      setSquadSize(squadSize - 1)
      setSelectedClasses(selectedClasses.slice(0, -1))
      setSquad([]) // Clear current squad when changing size
    }
  }

  function handleClassChange(index: number, legendClass: LegendClass) {
    const newClasses = [...selectedClasses]
    newClasses[index] = legendClass
    setSelectedClasses(newClasses)
    setSquad([]) // Clear current squad when changing class
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 text-white text-center">
      <h1 className="text-4xl font-[Duke] mb-12">Squad Randomizer</h1>

      <div className="grid gap-6 mb-8 justify-items-center" style={{ 
        gridTemplateColumns: `repeat(${squadSize}, 350px)`,
        justifyContent: 'center'
      }}>
        {Array.from({ length: squadSize }).map((_, index) => (
          <RandomizerCard
            key={index}
            legend={squad[index] || null}
            selectedClass={selectedClasses[index]}
            onClassChange={(legendClass) => handleClassChange(index, legendClass)}
          />
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
