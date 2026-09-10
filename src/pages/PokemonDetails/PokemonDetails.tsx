import { useParams } from "react-router";

export function PokemonDetails() {
  const { id } = useParams();

  return (
    <div>
      <h1>Pokemon Details</h1>
      <h1>ID: {id}</h1>
    </div>
  );
}
