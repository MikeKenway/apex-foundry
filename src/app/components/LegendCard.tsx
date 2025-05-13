"use client"

import Image from "next/image"
import { Legend } from "@/app/types/legend"

interface Props {
    legend: Legend
}

export default function LegendCard({ legend }: Props) {
    return (
        <div className="list-item">
            <div className="legend-wrap">
                <div className="legend-img">
                    <Image  src={legend.image} alt={legend.name} width={500} height={auto} />
                </div>
                <div className="legend-name">
                    You have selected <strong>{legend.name}</strong>
                </div>
            </div>
        </div>
    )
}