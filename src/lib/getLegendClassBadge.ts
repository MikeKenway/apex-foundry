import type { LegendClass } from '@/types/legend';

export function getLegendClassBadgeVariant(
  legendClass: LegendClass
): 'assault' | 'controller' | 'recon' | 'skirmisher' | 'support' | 'default' {
  const classMap: Record<
    LegendClass,
    'assault' | 'controller' | 'recon' | 'skirmisher' | 'support' | 'default'
  > = {
    Assault: 'assault',
    Controller: 'controller',
    Recon: 'recon',
    Skirmisher: 'skirmisher',
    Support: 'support',
    Any: 'default',
  };

  return classMap[legendClass] || 'default';
}
