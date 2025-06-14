export type AbilityDetails = {
  name: string;
  description: string | null;
};

export type Abilities = {
  tactical: AbilityDetails;
  passive: AbilityDetails;
  ultimate: AbilityDetails;
};

export type Relative = {
  name: string | null;
  status: string | null;
  notes?: string;
};

export type Family = {
  mother?: Relative | null;
  father?: Relative | null;
  brothers?: Relative[] | null;
  sisters?: Relative[] | null;
  others?: Relative[] | null;
} | null;

export type Backstory = {
  early_life?: string;
  career_before_games?: string;
  joining_apex?: string;
} | null;

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
  family: Family;
  backstory: Backstory;
  personality?: Personality;
  notable_quotes?: string[];
  fun_facts?: string[];
  sources?: string[];
};
