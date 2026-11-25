export function formatId(id: number) {
  return `#${String(id).padStart(3, '0')}`
}

export function capitalize(name: string) {
  return name[0].toUpperCase() + name.slice(1)
}

export function getArtworkUrl(id: number) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
}