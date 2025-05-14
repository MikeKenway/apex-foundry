import legends from '@/app/data/Legends.json';
import Link from 'next/link';
import LegendListCard from '../components/LegendListCard';
import styles from '../../styles/legendList.module.css'

export default function LegendsListPage() {
  return (
    <main className='main'>
      <h1>All Legends</h1>
      <div className={styles.listWrap}>
        {legends.map((legend) => (
          <LegendListCard
            key={legend.slug}
            legend={legend}
          />
        ))}
      </div>
    </main>
  );
}
