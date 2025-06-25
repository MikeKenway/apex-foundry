import Image from 'next/image';
import { notFound } from 'next/navigation';
import legends from '@/data/legends.json';
import type { Legend } from '@/types/legend';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getLegendClassBadgeVariant } from '@/lib/getLegendClassBadge';

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
    <main className='p-2 max-w-7xl mx-auto text-white space-y-10 font-[ElectronicArtsText]'>
      {/* Mobile Layout */}
      <div className='flex flex-col gap-6 md:hidden'>
        {/* Header */}
        <Card className='order-1'>
          <CardContent className='relative'>
            <Badge
              variant={getLegendClassBadgeVariant(legend.class)}
              className='absolute top-4 right-8'
            >
              {legend.class}
            </Badge>
            <h1 className='text-7xl font-bold font-[Duke] tracking-wide text-primary drop-shadow-md'>
              {legend.name}
            </h1>
            <p className='text-lg uppercase text-zinc-400'>{legend.title}</p>
            <p className='text-sm italic text-zinc-300 mt-4'>
              {legend.catchphrase}
            </p>
          </CardContent>
        </Card>

        {/* Portrait */}
        <div className='order-2 border-l-6 border-primary relative w-full aspect-square'>
          <Image
            className='shadow-lg object-cover'
            src={legend.image}
            alt={`${legend.name} portrait`}
            fill
          />
        </div>

        {/* Basic Info */}
        <Card className='order-3'>
          <CardHeader>
            <CardTitle className='text-xl font-bold text-primary'>
              Basic Information
            </CardTitle>
          </CardHeader>
          <CardContent className='space-y-2'>
            <div>
              <div className='subtitle'>Introduced</div>
              <p>{legend.appearance_season}</p>
            </div>
            <div>
              <div className='subtitle'>Real Name</div>
              <p>{legend.real_name}</p>
            </div>
            <div>
              <div className='subtitle'>Homeworld</div>
              <p>{legend.homeworld || 'Unknown'}</p>
            </div>
            <div>
              <div className='subtitle'>Age</div>
              <p>{legend.age || 'Unknown'}</p>
            </div>
          </CardContent>
        </Card>

        {/* Backstory */}
        <Card className='order-4'>
          <CardHeader>
            <CardTitle className='text-2xl font-bold text-primary'>
              Backstory
            </CardTitle>
          </CardHeader>
          <CardContent>
            {legend.backstory?.split('\n\n').map((paragraph, i) => (
              <p
                key={i}
                className='text-md text-zinc-300 mb-4'
              >
                {paragraph}
              </p>
            )) || 'Unknown'}
          </CardContent>
        </Card>

        {/* Abilities */}
        <Card className='order-5'>
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
                  className='mb-8'
                >
                  <h3 className='subtitle'>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </h3>
                  <div>
                    <span className='font-semibold text-white'>
                      {ability.name}
                    </span>
                    <div className='text-zinc-300 text-md mt-1'>
                      {ability.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Voice Actor */}
        <Card className='order-6'>
          <CardHeader>
            <CardTitle className='text-xl font-semibold text-primary'>
              Voice Actor
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className='text-md text-zinc-300'>
              {legend.voice_actor || 'Unknown'}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Desktop Layout */}
      <div className='hidden md:flex md:flex-row gap-6'>
        {/* Left Column */}
        <div className='flex flex-col gap-6 w-full md:w-1/3'>
          {/* Profile Photo */}
          <div className='relative border-l-6 border-primary w-full aspect-square'>
            <Image
              className=' shadow-lg object-cover'
              src={legend.image}
              alt={`${legend.name} portrait`}
              fill
            />
          </div>

          {/* Basic Info */}
          <Card>
            <CardHeader>
              <CardTitle className='text-xl font-bold text-primary'>
                Basic Information
              </CardTitle>
            </CardHeader>
            <CardContent className='space-y-2'>
              <div>
                <div className='subtitle'>Introduced</div>
                <p>{legend.appearance_season}</p>
              </div>
              <div>
                <div className='subtitle'>Real Name</div>
                <p>{legend.real_name}</p>
              </div>
              <div>
                <div className='subtitle'>Homeworld</div>
                <p>{legend.homeworld || 'Unknown'}</p>
              </div>
              <div>
                <div className='subtitle'>Age</div>
                <p>{legend.age || 'Unknown'}</p>
              </div>
            </CardContent>
          </Card>

          {/* Voice Actor */}
          <Card>
            <CardHeader>
              <CardTitle className='text-xl font-semibold text-primary'>
                Voice Actor
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-md text-zinc-300'>
                {legend.voice_actor || 'Unknown'}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className='flex flex-col gap-6 w-full md:flex-1'>
          {/* Header */}
          <Card>
            <CardContent className='relative'>
              <Badge
                variant={getLegendClassBadgeVariant(legend.class)}
                className='absolute top-4 right-8'
              >
                {legend.class}
              </Badge>
              <h1 className='text-7xl font-bold font-[Duke] tracking-wide text-primary drop-shadow-md'>
                {legend.name}
              </h1>
              <p className='text-lg uppercase text-zinc-400'>{legend.title}</p>
              <p className='text-sm italic text-zinc-300 mt-4'>
                {legend.catchphrase}
              </p>
            </CardContent>
          </Card>

          {/* Backstory */}
          <Card>
            <CardHeader>
              <CardTitle className='text-2xl font-bold text-primary'>
                Backstory
              </CardTitle>
            </CardHeader>
            <CardContent>
              {legend.backstory?.split('\n\n').map((paragraph, i) => (
                <p
                  key={i}
                  className='text-sm text-zinc-300 mb-4'
                >
                  {paragraph}
                </p>
              )) || 'Unknown'}
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
                    className='mb-8'
                  >
                    <h3 className='subtitle'>
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </h3>
                    <div>
                      <span className='font-semibold text-white'>
                        {ability.name}
                      </span>
                      <div className='text-zinc-300 text-sm mt-1'>
                        {ability.description}
                      </div>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
