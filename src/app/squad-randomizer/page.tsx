'use client';

import { useState } from 'react';
import legends from '@/data/legends.json';
import type { Legend } from '@/types/legend';
import { getRandomLegend } from '@/app/utils/getRandomLegend';
import { PrimaryButton } from '@/components/PrimaryButton';
import { RandomizerCard } from '@/components/RandomizerCard';

// Define the possible legend classes in the game
type LegendClass =
  | 'Assault'
  | 'Skirmisher'
  | 'Support'
  | 'Controller'
  | 'Recon'
  | 'Any';

export default function SquadRandomizerPage() {
  const [selectedLegends, setSelectedLegends] = useState<Legend[]>([]);
  const [numberOfLegends, setNumberOfLegends] = useState(1);
  const [legendClassSelections, setLegendClassSelections] = useState<
    LegendClass[]
  >(['Any']);

  // Generate a new squad
  function createRandomSquad() {
    const newSquad: Legend[] = [];
    const usedLegendIndices = new Set<number>();

    while (newSquad.length < numberOfLegends) {
      const currentPositionClass = legendClassSelections[newSquad.length];
      const availableLegends =
        currentPositionClass === 'Any'
          ? legends
          : legends.filter((legend) => legend.class === currentPositionClass);

      const randomLegend = getRandomLegend(availableLegends as Legend[]);
      const legendIndex = legends.findIndex(
        (l) => l.slug === randomLegend.slug
      );

      if (!usedLegendIndices.has(legendIndex)) {
        usedLegendIndices.add(legendIndex);
        newSquad.push(randomLegend);
      }
    }

    setSelectedLegends(newSquad);
  }

  // Add a new legend slot (up to 3)
  function addSquadMember() {
    if (numberOfLegends < 3) {
      setNumberOfLegends(numberOfLegends + 1);
      setLegendClassSelections([...legendClassSelections, 'Any']);
      setSelectedLegends([]);
    }
  }

  // Remove the last legend slot (minimum 1)
  function removeSquadMember() {
    if (numberOfLegends > 1) {
      setNumberOfLegends(numberOfLegends - 1);
      setLegendClassSelections(legendClassSelections.slice(0, -1));
      setSelectedLegends([]);
    }
  }

  // Update the class selection for a slot
  function updateSquadMemberClass(
    positionIndex: number,
    selectedClass: LegendClass
  ) {
    const updatedClassSelections = [...legendClassSelections];
    updatedClassSelections[positionIndex] = selectedClass;
    setLegendClassSelections(updatedClassSelections);
  }

  // Reroll a single legend
  function rerollSquadMember(positionIndex: number, newLegend: Legend) {
    const updatedSquad = [...selectedLegends];
    updatedSquad[positionIndex] = newLegend;
    setSelectedLegends(updatedSquad);
  }

  return (
    <div className='max-w-6xl mx-auto px-4 py-12 text-white'>
      {/* Header */}
      <div className='relative space-y-10 max-w-5xl mx-auto mb-12 px-4'>
        <div>
          <div className='flex items-center gap-4 mb-4'>
            <h1 className='text-6xl font-[Duke] tracking-tight'>
              <span className='text-primary'>SQUAD</span> RANDOMIZER
            </h1>
            <div className='h-1 flex-1 bg-gradient-to-r from-primary to-transparent'></div>
          </div>
          <p className='text-zinc-400 text-lg max-w-2xl font-light tracking-wide'>
            Assemble the ultimate trio. Pick your squad one legend at a time, or
            let chaos take the wheel.
            <span className=' text-primary mx-1'>
              Filter by class to build the perfect comp
            </span>
            or roll the dice and let fate decide.
          </p>
        </div>
      </div>

      {/* Legend cards */}
      <div
        className='grid gap-6 mb-8 justify-items-center'
        style={{
          gridTemplateColumns: `repeat(${numberOfLegends}, 350px)`,
          justifyContent: 'center',
        }}
      >
        {Array.from({ length: numberOfLegends }).map((_, positionIndex) => (
          <RandomizerCard
            key={positionIndex}
            legend={selectedLegends[positionIndex] || null}
            selectedClass={legendClassSelections[positionIndex]}
            onClassChange={(legendClass) =>
              updateSquadMemberClass(positionIndex, legendClass)
            }
            onAdd={
              positionIndex === numberOfLegends - 1 ? addSquadMember : undefined
            }
            onRemove={removeSquadMember}
            onReroll={
              selectedLegends[positionIndex]
                ? (newLegend) => rerollSquadMember(positionIndex, newLegend)
                : undefined
            }
            canAdd={numberOfLegends < 3}
            canRemove={numberOfLegends > 1}
          />
        ))}
      </div>

      {/* Randomize Button */}
      <div className='text-center'>
        <PrimaryButton
          variant='button'
          onClick={createRandomSquad}
        >
          {numberOfLegends === 1 ? 'Randomize Legend' : 'Randomize Squad'}
        </PrimaryButton>
      </div>
    </div>
  );
}
