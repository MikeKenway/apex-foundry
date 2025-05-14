'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Legend } from '@/app/types/legend';
import styles from '../../styles/legendList.module.css';

interface Props {
  legend: Legend;
}

export default function LegendListCard({ legend }: Props) {
  return (
    <Link
      href={`/legends/${legend.slug}`}
      className={styles.listWrap}
    >
      <div className={styles.cardWrap}>
        <div className={styles.cardImg}>
          <Image
            className={styles.imageProfile}
            src={legend.imageProfile}
            alt={legend.name}
            fill
            sizes='100vw'
          />
        </div>
        <div className={styles.legendInfo} >
          <div className={styles.legendName}>
            <strong>{legend.name}</strong>
          </div>
          <div className={styles.legendTitle}>
            {legend.title}
          </div>
        </div>
      </div>
    </Link>
  );
}
