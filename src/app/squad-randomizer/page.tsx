'use client'

import { useState } from 'react'
import legends from '@/data/legends.json'
import type { Legend } from '@/types/legend'
import { getRandomLegend } from '@/app/utils/getRandomLegend'
import { PrimaryButton } from '@/components/PrimaryButton'
import { RandomizerCard } from '@/components/RandomizerCard'

// Define the possible legend classes in the game
type LegendClass = 'Assault' | 'Skirmisher' | 'Support' | 'Controller' | 'Recon' | 'Any'

export default function SquadRandomizerPage() {
  // State to track the currently selected legends in the squad
  const [selectedLegends, setSelectedLegends] = useState<Legend[]>([])
  // State to track how many legends are in the squad (1-3)
  const [numberOfLegends, setNumberOfLegends] = useState(1)
  // State to track the selected class for each legend position
  const [legendClassSelections, setLegendClassSelections] = useState<LegendClass[]>(['Any'])

  /**
   * Generates a new random squad based on the current number of legends and class selections
   * Ensures no duplicate legends are selected
   */
  function generateRandomSquad() {
    const newSquad: Legend[] = []
    const usedLegendIndices = new Set<number>()

    // Generate legends based on squad size
    while (newSquad.length < numberOfLegends) {
      const currentPositionClass = legendClassSelections[newSquad.length]
      const availableLegends = currentPositionClass === 'Any' 
        ? legends 
        : legends.filter(legend => legend.class === currentPositionClass)
      
      const randomLegend = getRandomLegend(availableLegends as Legend[])
      const legendIndex = legends.findIndex(l => l.slug === randomLegend.slug)
      
      if (!usedLegendIndices.has(legendIndex)) {
        usedLegendIndices.add(legendIndex)
        newSquad.push(randomLegend)
      }
    }

    setSelectedLegends(newSquad)
  }

  /**
   * Adds a new legend slot to the squad (up to max of 3)
   * Resets the current squad when adding a new slot
   */
  function addLegendSlot() {
    if (numberOfLegends < 3) {
      setNumberOfLegends(numberOfLegends + 1)
      setLegendClassSelections([...legendClassSelections, 'Any'])
      setSelectedLegends([]) // Clear current squad when changing size
    }
  }

  /**
   * Removes the last legend slot from the squad (minimum of 1)
   * Resets the current squad when removing a slot
   */
  function removeLegendSlot() {
    if (numberOfLegends > 1) {
      setNumberOfLegends(numberOfLegends - 1)
      setLegendClassSelections(legendClassSelections.slice(0, -1))
      setSelectedLegends([]) // Clear current squad when changing size
    }
  }

  /**
   * Updates the class selection for a specific legend position
   * Resets the current squad when changing class
   */
  function updateLegendClass(positionIndex: number, selectedClass: LegendClass) {
    const updatedClassSelections = [...legendClassSelections]
    updatedClassSelections[positionIndex] = selectedClass
    setLegendClassSelections(updatedClassSelections)
  }

  /**
   * Re-rolls a single legend in the squad while keeping others the same
   */
  function rerollSingleLegend(positionIndex: number, newLegend: Legend) {
    const updatedSquad = [...selectedLegends]
    updatedSquad[positionIndex] = newLegend
    setSelectedLegends(updatedSquad)
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 text-white">
      {/* Title Section */}
      <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-8 mb-12 text-left relative overflow-hidden" style={{ width: '1098px', margin: '0 auto 3rem auto' }}>
        {/* Industrial/tech decorative elements */}
        <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-[#FF4655] to-transparent"></div>
        <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-[#FF4655] to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1 bg-gradient-to-l from-[#FF4655] to-transparent"></div>
        
        <div className="relative">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-6xl font-[Duke] tracking-tight">
              <span className="text-[#FF4655]">SQUAD</span> RANDOMIZER
            </h1>
            <div className="h-1 flex-1 bg-gradient-to-r from-[#FF4655] to-transparent"></div>
          </div>
          <p className="text-[#CCCCCC] text-lg max-w-2xl font-light tracking-wide">
            Assemble the ultimate trio. Pick your squad one legend at a time, or let chaos take the wheel. Filter by class to build the perfect comp or roll the dice and let fate decide.
          </p>
        </div>
      </div>

      {/* Grid of legend cards */}
      <div className="grid gap-6 mb-8 justify-items-center" style={{ 
        gridTemplateColumns: `repeat(${numberOfLegends}, 350px)`,
        justifyContent: 'center'
      }}>
        {Array.from({ length: numberOfLegends }).map((_, positionIndex) => (
          <RandomizerCard
            key={positionIndex}
            legend={selectedLegends[positionIndex] || null}
            selectedClass={legendClassSelections[positionIndex]}
            onClassChange={(legendClass) => updateLegendClass(positionIndex, legendClass)}
            onAdd={positionIndex === numberOfLegends - 1 ? addLegendSlot : undefined}
            onRemove={removeLegendSlot}
            onReroll={selectedLegends[positionIndex] ? (newLegend) => rerollSingleLegend(positionIndex, newLegend) : undefined}
            canAdd={numberOfLegends < 3}
            canRemove={numberOfLegends > 1}
          />
        ))}
      </div>

      {/* Randomize button */}
      <div className="text-center">
        <PrimaryButton variant="button" onClick={generateRandomSquad}>
          {numberOfLegends === 1 ? 'Randomize Legend' : 'Randomize Squad'}
        </PrimaryButton>
      </div>
    </div>
  )
}
