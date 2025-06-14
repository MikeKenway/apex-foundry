'use client'

import { useState } from 'react'
import legends from '@/data/legends.json'
import type { Legend } from '@/types/legend'
import { getRandomLegend } from '@/app/utils/getRandomLegend'
import { LegendCard } from '@/components/LegendCard'
import { PrimaryButton } from '@/components/PrimaryButton'

export default function SquadRandomizerPage() {
  const [selectedLegend, setSelectedLegend] = useState<Legend | null>(null)

  function handleRoll() {
    const newLegend = getRandomLegend(legends as Legend[])
    setSelectedLegend(newLegend)
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-12 text-white text-center">
      <h1 className="text-4xl font-[Duke] mb-6">Get Random Legend</h1>

      {selectedLegend && (
        <div className="mb-8">
          <LegendCard legend={selectedLegend} />
        </div>
      )}

      <PrimaryButton variant="button" onClick={handleRoll}>
        {selectedLegend ? 'Roll Again' : 'Get Legend'}
      </PrimaryButton>
    </div>
  )
}
