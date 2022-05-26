import { listPokemons } from "../pokemon/services/listPokemons";
import { Grid, Container, Box, CircularProgress } from "@mui/material";
import PokedexCard from "./components/PokedexCard";
import { useQuery } from "react-query";
import { container as StyledContainer } from "./components/StyledPokedexCard";

interface PokedexProps {}

export const Pokedex: React.FC<PokedexProps> = () => {
  const { data, isLoading } = useQuery(`listPokemons`, listPokemons);

  return (
    <div>
      <StyledContainer>
        {data?.results.map((pokemon) => (
          <PokedexCard pokemon={pokemon} />
        ))}
      </StyledContainer>
    </div>
  );
};

export default Pokedex;
