import Image from 'next/image';
import { notFound } from 'next/navigation';
import legends from '@/data/legends.json';
import type { Legend } from '@/types/legend';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getLegendClassBadgeVariant } from '@/lib/utils';

type Props = {
  params: Promise<Record<string, string>>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function LegendPage({ params }: Props) {
  const resolvedParams = await params;
  const legend = (legends as Legend[]).find(
    (l) => l.slug === resolvedParams.slug
  );
  if (!legend) return notFound();

  return (
    <main className='p-6 max-w-7xl mx-auto text-white space-y-10 font-[ElectronicArtsText]'>
      <div className='flex flex-col md:flex-row gap-8'>
        {/* Left Column*/}
        <div className='flex flex-col gap-6 md:w-1/3 w-full'>
          {/* Profile Photo */}
          <Card className='w-full overflow-hidden'>
            <CardContent className='p-0'>
              <div className='relative w-full aspect-square'>
                <Image
                  className='shadow-lg object-cover'
                  src={legend.image}
                  alt={`${legend.name} portrait`}
                  fill
                />
              </div>
            </CardContent>
          </Card>
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle className='text-xl font-bold text-primary'>
                Basic Information
              </CardTitle>
            </CardHeader>
            <CardContent className='space-y-2'>
              <div>
                <div className='subtitle'>Class</div>
                <Badge variant={getLegendClassBadgeVariant(legend.class)}>{legend.class}</Badge>
              </div>
              <div>
                <div className='subtitle'>Introduced</div>
                <p>{legend.appearance_season}</p>
              </div>
              <div>
                <div className='subtitle'> Real Name </div>
                <p>{legend.real_name}</p>
              </div>
              <div>
                <div className='subtitle'>Homeworld</div>
                <p> {legend.homeworld || 'Unknown'}</p>
              </div>
              <div>
                <div className='subtitle'>Age</div>
                <p>{legend.age || 'Unknown'}</p>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* RIGHT COLUMN: Main Content */}
        <div className='flex-1 flex flex-col gap-6'>
          {/* Name & Title */}
          <div>
            <h1 className='text-7xl font-extrabold font-[Duke] tracking-wide text-primary drop-shadow-md'>
              {legend.name}
            </h1>
            <p className='text-xl italic text-zinc-300'>{legend.title}</p>
          </div>
          {/* Backstory */}
          <Card>
            <CardHeader>
              <CardTitle className='text-2xl font-bold text-primary'>
                Backstory
              </CardTitle>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div>
                <p className='text-sm text-zinc-300'>
                  {legend.backstory?.split('\n\n').map((paragraph, i) => (
                    <p key={i} className='mb-4'>
                      {paragraph}
                    </p>
                  )) || 'Unknown'}
                </p>
              </div>
            </CardContent>
          </Card>
          {/* Abilities */}
          <Card>
            <CardHeader>
              <CardTitle className='text-2xl font-bold text-primary mb-4'>
                Abilities
              </CardTitle>
            </CardHeader>
            <CardContent>
              {(['tactical', 'passive', 'ultimate'] as const).map((type) => {
                const ability = legend.abilities[type];
                return (
                  <div
                    key={type}
                    className='mb-4'
                  >
                    <h3 className='text-sm uppercase tracking-wide text-zinc-400 mb-2'>
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </h3>
                    <div className='p-2'>
                      <span className='font-semibold text-white'>
                        {ability.name}
                      </span>
                      <div className='text-zinc-300 text-xs mt-1'>
                        {ability.description}
                      </div>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>
          {/* Voice Actor */}
          <Card>
            <CardHeader>
              <CardTitle className='text-xl font-semibold text-primary mb-2'>
                Voice Actor
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-sm text-zinc-300'>
                {legend.voice_actor || 'Unknown'}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
