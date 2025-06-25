'use client';

import { useState } from 'react';
import legends from '@/data/legends.json';
import type { Legend } from '@/types/legend';
import { getRandomLegend } from '@/lib/getRandomLegend';
import { Button } from '@/components/ui/button';
import { RandomizerCard } from '@/components/randomizer-card';

// Define the possible legend classes in the game
type LegendClass =
  | 'Assault'
  | 'Skirmisher'
  | 'Support'
  | 'Controller'
  | 'Recon'
  | 'Any';

interface SquadMember {
  legend: Legend | null;
  class: LegendClass;
}

export default function SquadRandomizerPage() {
  const [squad, setSquad] = useState<SquadMember[]>([
    { legend: null, class: 'Any' },
  ]);

  // Generate a new squad
  function createRandomSquad() {
    const newSquad: SquadMember[] = [];

    for (let i = 0; i < squad.length; i++) {
      const currentClass = squad[i].class;
      const availableLegends =
        currentClass === 'Any'
          ? legends
          : legends.filter((legend) => legend.class === currentClass);

      const randomLegend = getRandomLegend(availableLegends as Legend[]);
      newSquad.push({ legend: randomLegend, class: currentClass });
    }

    setSquad(newSquad);
  }

  // Add/remove squad members
  function updateSquadSize(delta: number) {
    if (delta > 0 && squad.length < 3) {
      setSquad([...squad, { legend: null, class: 'Any' }]);
    } else if (delta < 0 && squad.length > 1) {
      setSquad(squad.slice(0, -1));
    }
  }

  // Update class selection for a slot
  function updateSquadMemberClass(
    positionIndex: number,
    selectedClass: LegendClass
  ) {
    setSquad((prev) =>
      prev.map((member, index) =>
        index === positionIndex ? { ...member, class: selectedClass } : member
      )
    );
  }

  // Reroll a single legend
  function rerollSquadMember(positionIndex: number) {
    const member = squad[positionIndex];
    const availableLegends =
      member.class === 'Any'
        ? legends
        : legends.filter((legend) => legend.class === member.class);

    const newLegend = getRandomLegend(availableLegends as Legend[]);

    setSquad((prev) =>
      prev.map((member, index) =>
        index === positionIndex ? { ...member, legend: newLegend } : member
      )
    );
  }

  return (
    <div className='relative space-y-10 text-white'>
      {/* Header */}
      <div className='relative space-y-10'>
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
          gridTemplateColumns: `repeat(${squad.length}, 350px)`,
          justifyContent: 'center',
        }}
      >
        {squad.map((member, positionIndex) => (
          <RandomizerCard
            key={positionIndex}
            legend={member.legend}
            selectedClass={member.class}
            onClassChange={(legendClass) =>
              updateSquadMemberClass(positionIndex, legendClass)
            }
            onAdd={
              positionIndex === squad.length - 1
                ? () => updateSquadSize(1)
                : undefined
            }
            onRemove={() => updateSquadSize(-1)}
            onReroll={
              member.legend ? () => rerollSquadMember(positionIndex) : undefined
            }
            canAdd={squad.length < 3}
            canRemove={squad.length > 1}
          />
        ))}
      </div>

      {/* Randomize Button */}
      <div className='text-center'>
        <Button
          onClick={createRandomSquad}
          size='lg'
        >
          {squad.length === 1 ? 'Randomize Legend' : 'Randomize Squad'}
        </Button>
      </div>
    </div>
  );
}
