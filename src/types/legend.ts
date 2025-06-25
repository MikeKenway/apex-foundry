export type AbilityDetails = {
  name: string;
  description: string | null;
};

export type Abilities = {
  tactical: AbilityDetails;
  passive: AbilityDetails;
  ultimate: AbilityDetails;
};


export type Personality = {
  traits?: string[];
  insecurities?: string;
  hobbies?: string[];
} | null;

export type Legend = {
  name: string;
  slug: string;
  real_name: string;
  age: string | null;
  homeworld: string | null;
  class: string;
  voice_actor: string | null;
  appearance_season: string;
  title: string;
  image: string;
  abilities: Abilities;
  backstory: string;
};
