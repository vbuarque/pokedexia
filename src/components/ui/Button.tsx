import { useNavigate } from "react-router";

export function ButtonPokemon() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/Pokemon/:id");
  }

  return <button onClick={handleClick}>PokeDetails</button>;
}
