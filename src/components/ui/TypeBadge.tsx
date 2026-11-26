import type { PokemonType } from "../../types/pokemon";
import { TYPE_STYLES } from "../../utils/types";

type Props = { type: PokemonType };

export function TypeBadge({ type }: Props) {
  const style = TYPE_STYLES[type];
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${style.badge}`}
    >
      {style.label}
    </span>
  );
}
