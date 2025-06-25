export type AbilityDetails = {
  name: string;
  description: string | null;
};

export type Abilities = {
  tactical: AbilityDetails;
  passive: AbilityDetails;
  ultimate: AbilityDetails;
};

export type LegendClass =
  | 'Assault'
  | 'Skirmisher'
  | 'Support'
  | 'Controller'
  | 'Recon'
  | 'Any';

export type Legend = {
  name: string;
  slug: string;
  title: string;
  catchphrase: string;
  real_name: string;
  age: string | null;
  homeworld: string | null;
  class: string;
  voice_actor: string | null;
  appearance_season: string;
  image: string;
  abilities: Abilities;
  backstory: string;
};
