'use client';

import { useState } from 'react';
import legends from '@/app/data/Legends.json';
import { getRandomLegend } from './components/getRandomLegend';
import { Legend } from './types/legend';
import LegendCard from './components/LegendCard';


export default function Home() {
  const [selected, setSelected] = useState<Legend | null>(null);

  const handleSelection = () => {
    const randomLegend = getRandomLegend(legends);
    console.log('Selected legend:', randomLegend);
    setSelected(randomLegend);
  };

  return (
    <main className='main'>
      <button
        onClick={handleSelection}
        className='legend-button'
      >
        Choose Your Legend!
      </button>
      {selected && <LegendCard legend={selected} />}
    </main>
  );
}
