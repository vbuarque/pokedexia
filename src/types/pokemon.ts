export type PokemonType =
  | "normal"
  | "fire"
  | "water"
  | "electric"
  | "grass"
  | "ice"
  | "fighting"
  | "poison"
  | "ground"
  | "flying"
  | "psychic"
  | "bug"
  | "rock"
  | "ghost"
  | "dragon"
  | "dark"
  | "steel"
  | "fairy";

export type PokemonSummary = {
  id: number;
  name: string;
  types: PokemonType[];
  image: string;
};

export type StatName =
  | "hp"
  | "attack"
  | "defense"
  | "special-attack"
  | "special-defense"
  | "speed";

export type PokemonDetail = PokemonSummary & {
  height: number;
  weight: number;
  ability: string;
  stats: { name: StatName; value: number }[];
};
