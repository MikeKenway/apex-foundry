import type { Legend } from '@/types/legend'

let lastResultIndex: number | null = null

export function getRandomLegend(legends: Legend[]): Legend {
  const legendCount = legends.length
  const randomIndices: number[] = []

  let prev: number | null = null

  // Step 1: Fill array with random numbers without repeating a number twice in a row
  for (let i = 0; i < legendCount; i++) {
    let next: number
    do {
      next = Math.floor(Math.random() * legendCount)
    } while (next === prev)
    randomIndices.push(next)
    prev = next
  }

  // Step 2: Pick one value that isn't the same as last time
  let finalIndex: number
  do {
    finalIndex = randomIndices[Math.floor(Math.random() * randomIndices.length)]
  } while (finalIndex === lastResultIndex && legendCount > 1)

  lastResultIndex = finalIndex

  return legends[finalIndex]
}
