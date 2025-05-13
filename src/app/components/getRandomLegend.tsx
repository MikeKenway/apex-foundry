import { Legend } from "@/app/types/legend"

let lastIndex: number | null = null 

export function getRandomLegend(legends: Legend[]): Legend {
    let index: number

    do {
        index = Math.floor(Math.random() * legends.length)
    } while (index === lastIndex && legends.length > 1)
    
    lastIndex = index
    return legends[index] 
}