'use client';

import Image from 'next/image';
import { Legend } from '@/app/types/legend';
import styles from '../../styles/legendCard.module.css';

interface Props {
  legend: Legend;
  showFullDetails?: boolean;
}

export default function LegendCard({ legend, showFullDetails = false }: Props) {
  return (
    <div className={styles.legendWrap}>
      <div className={styles.legendImg}>
        <Image
          src={legend.image}
          alt={legend.name}
          fill
          className={styles.imageContain}
          sizes='
            (max-width: 640px) calc(100vw - 32px), 
            (max-width: 1024px) 400px, 
            500px'
          priority
        />
      </div>

      <div className={styles.legendName}>
        <strong>{legend.name}</strong>
      </div>

      {showFullDetails && (
        <ul className={styles.legendDetails}>
          <li>
            <strong>Real Name:</strong> {legend.realName}
          </li>
          <li>
            <strong>Title:</strong> {legend.title}
          </li>
          <li>
            <strong>Class:</strong> {legend.class}
          </li>
          <li>
            <strong>Origin:</strong> {legend.origin}
          </li>
          <li>
            <strong>Release Season:</strong> {legend.releaseSeason}
          </li>
          <li>
            <strong>Difficulty:</strong> {legend.difficulty}
          </li>
          <li>
            <strong>Passive:</strong> {legend.passive}
          </li>
          <li>
            <strong>Tactical:</strong> {legend.tactical}
          </li>
          <li>
            <strong>Ultimate:</strong> {legend.ultimate}
          </li>
        </ul>
      )}
    </div>
  );
}
