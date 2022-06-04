import React from "react";
import { Route, Routes } from "react-router-dom";
import Pokedex from "./pokedex/Pokedex";
import { PokemonDetails } from "./pokemon/PokemonDetails";

interface routesProps {}

const AppRoutes: React.FC<routesProps> = () => {
  return (
    <>
      <Routes>
        <Route
          path="/pokemon/:name"
          element={<PokemonDetails pokemon={undefined} />}
        />
        <Route path="/" element={<Pokedex />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
