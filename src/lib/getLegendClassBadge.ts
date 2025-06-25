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
