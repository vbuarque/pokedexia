import type { PokemonSummary, PokemonDetail } from "../types/pokemon";
import { getArtworkUrl } from "../utils/format";

export const mockPokemons: PokemonSummary[] = [
  {
    id: 1,
    name: "bulbasaur",
    types: ["grass", "poison"],
    image: getArtworkUrl(1),
  },
  {
    id: 4,
    name: "charmander",
    types: ["fire"],
    image: getArtworkUrl(4),
  },
  {
    id: 7,
    name: "squirtle",
    types: ["water"],
    image: getArtworkUrl(7),
  },
  {
    id: 25,
    name: "pikachu",
    types: ["electric"],
    image: getArtworkUrl(25),
  },
  {
    id: 35,
    name: "clefairy",
    types: ["fairy"],
    image: getArtworkUrl(35),
  },
  {
    id: 39,
    name: "jigglypuff",
    types: ["normal", "fairy"],
    image: getArtworkUrl(39),
  },
  {
    id: 52,
    name: "meowth",
    types: ["normal"],
    image: getArtworkUrl(52),
  },
  {
    id: 63,
    name: "abra",
    types: ["psychic"],
    image: getArtworkUrl(63),
  },
  {
    id: 66,
    name: "machop",
    types: ["fighting"],
    image: getArtworkUrl(66),
  },
  {
    id: 74,
    name: "geodude",
    types: ["rock", "ground"],
    image: getArtworkUrl(74),
  },
  {
    id: 92,
    name: "gastly",
    types: ["ghost", "poison"],
    image: getArtworkUrl(92),
  },
  {
    id: 133,
    name: "eevee",
    types: ["normal"],
    image: getArtworkUrl(133),
  },
];

export const mockPikachuDetail: PokemonDetail = {
  id: 25,
  name: "pikachu",
  types: ["electric"],
  image: getArtworkUrl(25),
  height: 0.4,
  weight: 6,
  ability: "static",
  stats: [
    { name: "hp", value: 35 },
    { name: "attack", value: 55 },
    { name: "defense", value: 40 },
    { name: "special-attack", value: 50 },
    { name: "special-defense", value: 50 },
    { name: "speed", value: 90 },
  ],
};
