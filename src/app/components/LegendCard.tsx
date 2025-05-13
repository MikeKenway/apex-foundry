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
      <div className='legend-img'>
        <Image
          src={legend.image}
          alt={legend.name}
          width={500}
          height={500}
        />
      </div>
      <div className={styles.legendName}>
        You have selected <strong>{legend.name}</strong>
      </div>
    </div>
  );
}
