import type { LegendClass } from '@/types/legend';

export function getLegendClassBadgeVariant(
  legendClass: LegendClass
): Exclude<LegendClass, 'Any'> | 'default' {
  return legendClass === 'Any' ? 'default' : legendClass;
}
