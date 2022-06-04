import { listPokemons } from "../pokemon/services/listPokemons";
import PokedexCard from "./components/PokedexCard";
import { useQuery } from "react-query";
import { container as StyledContainer } from "./components/StyledPokedexCard";
import LoadingStatus from "./components/LoadingStatus";

interface PokedexProps {}

export const Pokedex: React.FC<PokedexProps> = () => {
  const { data, isLoading } = useQuery(`listPokemons`, listPokemons);

  if (isLoading) {
    return <LoadingStatus />;
  }

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
