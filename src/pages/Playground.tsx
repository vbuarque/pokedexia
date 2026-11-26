import { useState } from "react";
import { Button } from "../components/ui/Button";
import { TypeBadge } from "../components/ui/TypeBadge";
import { SearchInput } from "../components/ui/SearchInput";
import { FilterChip } from "../components/ui/FilterChip";
import { mockPikachuDetail } from "../data/mock";
import { StatBar } from "../components/ui/StatBar";
import { STAT_LABELS } from "../utils/stats";

export function Playground() {
  const [busca, setBusca] = useState("");
  const [tipo, setTipo] = useState("todos");

  return (
    <div className="mx-auto max-w-5xl space-y-10 p-10">
      <h1 className="text-3xl font-extrabold">Playground</h1>
      <div className="flex flex-wrap gap-2">
        <TypeBadge type="grass" />
        <TypeBadge type="fire" />
        <TypeBadge type="electric" />
      </div>
      <div className="flex gap-3">
        <Button>Tentar novamente</Button>
        <Button variant="secondary">Limpar busca</Button>
        <Button disabled>Desabilitado</Button>
      </div>
      <SearchInput value={busca} onChange={setBusca} />
      <p className="text-sm text-slate-500">Digitando: {busca}</p>
      <div className="flex gap-2">
        <FilterChip
          label="Todos"
          active={tipo === "todos"}
          onClick={() => setTipo("todos")}
        />
        <FilterChip
          label="Planta"
          active={tipo === "grass"}
          onClick={() => setTipo("grass")}
        />
        <FilterChip
          label="Fogo"
          active={tipo === "fire"}
          onClick={() => setTipo("fire")}
        />
      </div>
      <div className="max-w-md space-y-3">
        {mockPikachuDetail.stats.map((stat) => (
          <StatBar
            key={stat.name}
            label={STAT_LABELS[stat.name]}
            value={stat.value}
            barClassName="bg-yellow-500"
          />
        ))}
      </div>
    </div>
  );
}
