import { useNavigate } from "react-router";

export function ButtonPokemon() {
  const navigate = useNavigate();
  const pokemonId: number = 25;

  function handleClick() {
    navigate("/Pokemon/:id");
  }

  return <button onClick={handleClick}>PokeDetails{pokemonId}</button>;
}