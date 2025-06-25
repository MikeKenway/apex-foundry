import { Legend, LegendClass } from '@/types/legend';
import { LegendCard } from './legend-card';
import { useState, useRef, useEffect } from 'react';
import { FiPlus, FiMinus, FiRefreshCw } from 'react-icons/fi';
import { OverlayButton } from './overlay-button';
import { getRandomLegend } from '@/lib/getRandomLegend';
import legends from '@/data/legends.json';

interface RandomizerCardProps {
  legend: Legend | null;
  selectedClass: LegendClass;
  onClassChange: (legendClass: LegendClass) => void;
  onAdd?: () => void;
  onRemove?: () => void;
  onReroll?: (newLegend: Legend) => void;
  canAdd?: boolean;
  canRemove?: boolean;
}

const legendClasses: LegendClass[] = [
  'Any',
  'Assault',
  'Skirmisher',
  'Support',
  'Controller',
  'Recon',
];

export function RandomizerCard({
  legend,
  selectedClass,
  onClassChange,
  onAdd,
  onRemove,
  onReroll,
  canAdd = false,
  canRemove = false,
}: RandomizerCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleReroll = () => {
    if (onReroll) {
      const filteredLegends =
        selectedClass === 'Any'
          ? legends
          : legends.filter((l) => l.class === selectedClass);
      const newLegend = getRandomLegend(filteredLegends as Legend[]);
      onReroll(newLegend);
    }
  };

  return (
    <div className='w-[350px] bg-black/50 border-2 border-white/10 rounded-none group hover:border-white/20 transition-colors'>
      <div className='relative'>
        {legend ? (
          <div className='group relative'>
            <LegendCard legend={legend} />
            {onRemove && (
              <OverlayButton
                position='top-left'
                onClick={onRemove}
                disabled={!canRemove}
              >
                <FiMinus size={20} />
              </OverlayButton>
            )}
            {onAdd && (
              <OverlayButton
                position='top-right'
                onClick={onAdd}
                disabled={!canAdd}
              >
                <FiPlus size={20} />
              </OverlayButton>
            )}
            {onReroll && (
              <OverlayButton
                position='bottom-right'
                onClick={handleReroll}
              >
                <FiRefreshCw size={20} />
              </OverlayButton>
            )}
          </div>
        ) : (
          <div className='bg-gradient-to-b from-zinc-900 to-black text-white overflow-hidden flex flex-col group'>
            <div className='relative w-full aspect-square bg-gradient-to-br from-zinc-900 via-black to-zinc-900 flex items-center justify-center'>
              <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity' />
              <div className='text-zinc-400 font-[ElectronicArtsText] text-lg group-hover:text-white transition-colors'>
                Random {selectedClass !== 'Any' ? selectedClass : 'Legend'}
              </div>
              {onRemove && (
                <OverlayButton
                  position='top-left'
                  onClick={onRemove}
                  disabled={!canRemove}
                >
                  <FiMinus size={20} />
                </OverlayButton>
              )}
              {onAdd && (
                <OverlayButton
                  position='top-right'
                  onClick={onAdd}
                  disabled={!canAdd}
                >
                  <FiPlus size={20} />
                </OverlayButton>
              )}
            </div>
            <div className='p-4 text-left space-y-1'>
              <h2 className='text-xl font-[ElectronicArtsText] uppercase tracking-wider font-semibold text-white'>
                Random {selectedClass !== 'Any' ? selectedClass : 'Legend'}
              </h2>
              <p className='text-sm font-[ElectronicArtsText] tracking-wider text-zinc-400 group-hover:text-zinc-300 transition-colors'>
                The Apex Legend
              </p>
            </div>
          </div>
        )}
      </div>

      <div
        className='relative'
        ref={dropdownRef}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='w-full bg-gradient-to-b from-zinc-900 to-black text-white px-4 py-3 text-left font-[ElectronicArtsText] text-sm hover:from-zinc-800 hover:to-zinc-900 transition-all duration-200 flex items-center justify-between group/button'
        >
          <span className='text-zinc-400 group-hover/button:text-white transition-colors'>
            {selectedClass === 'Any'
              ? 'Choose a Class (optional)'
              : selectedClass}
          </span>
          <svg
            className={`w-4 h-4 transition-all duration-200 ${isOpen ? 'rotate-180 text-white' : 'text-zinc-400 group-hover/button:text-white'}`}
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M19 9l-7 7-7-7'
            />
          </svg>
        </button>

        <div
          className={`absolute left-0 right-0 z-50 ${isOpen ? 'block' : 'hidden'}`}
        >
          <div className='mt-1 bg-gradient-to-b from-zinc-900 to-black border-2 border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.5)]'>
            {legendClasses.map((legendClass) => (
              <button
                key={legendClass}
                onClick={() => {
                  onClassChange(legendClass);
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-2.5 text-left font-[ElectronicArtsText] text-sm transition-all duration-200 flex items-center justify-between ${
                  selectedClass === legendClass
                    ? 'bg-white text-black'
                    : 'text-zinc-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>{legendClass === 'Any' ? 'Any Class' : legendClass}</span>
                {legendClass !== 'Any'}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
