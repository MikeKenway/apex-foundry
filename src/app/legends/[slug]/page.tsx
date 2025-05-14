import legends from '@/app/data/Legends.json';
import { notFound } from 'next/navigation';
import LegendCard from '@/app/components/LegendCard';

interface Props {
  params: { slug: string }
}

export default async function LegendPage({ params }: Props) {
  const legend = legends.find(legend => legend.slug === params.slug);

  if (!legend) return notFound();

  return <main className='main'><LegendCard legend={legend} showFullDetails /></main>
  
}