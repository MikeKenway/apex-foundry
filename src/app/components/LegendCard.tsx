'use client';

import Image from 'next/image';
import { Legend } from '@/app/types/legend';
import styles from '../../styles/legendCard.module.css';

interface Props {
  legend: Legend;
}

export default function LegendCard({ legend }: Props) {
  return (
    <div className={styles.legendWrap}>
      <div className={styles.legendImg}>
        <Image
          src={legend.image}
          alt={legend.name}
          fill
          className={styles.imageContain}
          sizes='(max-width: 767px) 343px, (max-width: 1023px) calc(100vw - 64px), 500px'
        />
      </div>
      <div className={styles.legendName}>
        You have selected <strong>{legend.name}</strong>
      </div>
    </div>
  );
}
