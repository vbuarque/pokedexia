import type { PokemonType } from "../types/pokemon";

type TypeStyle = {
  label: string
  badge: string
  soft: string
}

export const TYPE_STYLES: Record<PokemonType, TypeStyle> = {
  grass:    { label: 'Planta',   badge: 'bg-green-50 text-green-700 border-green-200',    soft: 'bg-green-50' },
  fire:     { label: 'Fogo',     badge: 'bg-orange-50 text-orange-700 border-orange-200', soft: 'bg-orange-50' },
  water:    { label: 'Água',     badge: 'bg-sky-50 text-sky-700 border-sky-200',          soft: 'bg-sky-50' },
  electric: { label: 'Elétrico', badge: 'bg-yellow-50 text-yellow-700 border-yellow-200', soft: 'bg-yellow-50' },
  psychic:  { label: 'Psíquico', badge: 'bg-pink-50 text-pink-700 border-pink-200',       soft: 'bg-pink-50' },
  normal:   { label: 'Normal',   badge: 'bg-gray-50 text-gray-700 border-gray-200',       soft: 'bg-gray-50' },
  poison:   { label: 'Veneno',   badge: 'bg-purple-50 text-purple-700 border-purple-200', soft: 'bg-purple-50' },
  fairy:    { label: 'Fada',     badge: 'bg-rose-50 text-rose-700 border-rose-200',       soft: 'bg-rose-50' },
  fighting: { label: 'Lutador',  badge: 'bg-red-50 text-red-700 border-red-200',          soft: 'bg-red-50' },
  rock:     { label: 'Pedra',    badge: 'bg-stone-50 text-stone-700 border-stone-200',    soft: 'bg-stone-50' },
  ground:   { label: 'Terra',    badge: 'bg-amber-50 text-amber-700 border-amber-200',    soft: 'bg-amber-50' },
  ghost:    { label: 'Fantasma', badge: 'bg-indigo-50 text-indigo-700 border-indigo-200', soft: 'bg-indigo-50' },
  ice:      { label: 'Gelo',     badge: 'bg-cyan-50 text-cyan-700 border-cyan-200',       soft: 'bg-cyan-50' },
  flying:   { label: 'Voador',   badge: 'bg-teal-50 text-teal-700 border-teal-200',       soft: 'bg-teal-50' },
  bug:      { label: 'Inseto',   badge: 'bg-lime-50 text-lime-700 border-lime-200',       soft: 'bg-lime-50' },
  dragon:   { label: 'Dragão',   badge: 'bg-violet-50 text-violet-700 border-violet-200', soft: 'bg-violet-50' },
  dark:     { label: 'Sombrio',  badge: 'bg-neutral-100 text-neutral-700 border-neutral-300', soft: 'bg-neutral-100' },
  steel:    { label: 'Aço',      badge: 'bg-zinc-50 text-zinc-700 border-zinc-200',       soft: 'bg-zinc-50' },
}