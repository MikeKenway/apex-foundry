import type { Legend } from '@/types/legend';

let lastSelectedLegendIndex: number | null = null;

export function getRandomLegend(legends: Legend[]): Legend {
  const legendCount = legends.length;
  const possibleLegendIndices: number[] = [];

  let previousIndex: number | null = null;

  // Step 1: Fill array with random numbers without repeating a number twice in a row
  for (let i = 0; i < legendCount; i++) {
    let nextIndex: number;
    do {
      nextIndex = Math.floor(Math.random() * legendCount);
    } while (nextIndex === previousIndex);
    possibleLegendIndices.push(nextIndex);
    previousIndex = nextIndex;
  }

  // Step 2: Pick one value that isn't the same as last time
  let selectedLegendIndex: number;
  do {
    selectedLegendIndex =
      possibleLegendIndices[
        Math.floor(Math.random() * possibleLegendIndices.length)
      ];
  } while (selectedLegendIndex === lastSelectedLegendIndex && legendCount > 1);

  lastSelectedLegendIndex = selectedLegendIndex;

  return legends[selectedLegendIndex];
}
