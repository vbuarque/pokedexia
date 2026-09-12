import { Route, Routes } from "react-router";

import { Home } from "@/pages/Home/Home";
import { PokemonDetails } from "@/pages/PokemonDetails/PokemonDetails";
import { Favorites } from "@/pages/Favorites/Favorites";
import { NotFound } from "@/pages/NotFound404/NotFound";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Pokemon/:id" element={<PokemonDetails />} />
      <Route path="/Favorites" element={<Favorites />} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
}
