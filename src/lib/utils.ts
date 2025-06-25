import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getLegendClassBadgeVariant(
  legendClass: string
): 'assault' | 'controller' | 'recon' | 'skirmisher' | 'support' | 'default' {
  const classMap: Record<
    string,
    'assault' | 'controller' | 'recon' | 'skirmisher' | 'support' | 'default'
  > = {
    Assault: 'assault',
    Controller: 'controller',
    Recon: 'recon',
    Skirmisher: 'skirmisher',
    Support: 'support',
  };

  return classMap[legendClass] || 'default';
}
