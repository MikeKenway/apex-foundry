import type { LegendClass } from '@/types/legend';

export function getLegendClassBadgeVariant(
  legendClass: LegendClass
): 'default' | 'assault' | 'controller' | 'recon' | 'skirmisher' | 'support' {
  return legendClass === 'Any'
    ? 'default'
    : (legendClass.toLowerCase() as
        | 'assault'
        | 'controller'
        | 'recon'
        | 'skirmisher'
        | 'support');
}
