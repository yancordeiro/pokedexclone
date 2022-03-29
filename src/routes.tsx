import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pokedex from "./Pokedex";

interface routesProps {}

export const AppRoutes: React.FC<routesProps> = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Pokedex />} />
      </Routes>
    </>
  );
};

export default Routes;
