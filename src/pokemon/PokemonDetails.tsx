import { Container, Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { getPokemonDetails } from "./services/getPokemonDetails";
import { useQuery } from "react-query";

interface PokemonDetailsProps {}

export const PokemonDetails: React.FC<PokemonDetailsProps> = () => {
  const { name } = useParams();
  const { data } = useQuery(`getPokemonDetails-${name}`, () =>
    getPokemonDetails(name!)
  );
  const selectedPokemonDetails = data;

  return (
    <div>
      <Container maxWidth="lg">
        <Box mt={2}>
          <img
            width="50%"
            height="auto"
            src={selectedPokemonDetails?.sprites.front_default}
            alt=""
          />
        </Box>
        <Typography variant="h2">{name}</Typography>
        {selectedPokemonDetails?.types.map((type) => (
          <Typography>
            <p>{type.type.name}</p>{" "}
          </Typography>
        ))}

        <Box display="flex" flex-direction="row">
          <Typography>Espécie: </Typography>
          <Typography>{selectedPokemonDetails?.species.name}</Typography>
        </Box>

        <Box display="flex" flex-direction="row">
          <Typography>Altura: </Typography>
          <Typography>{selectedPokemonDetails?.height}</Typography>
        </Box>

        <Box display="flex" flex-direction="row">
          <Typography>Peso: </Typography>
          <Typography>{selectedPokemonDetails?.weight}</Typography>
        </Box>

        <Box display="flex" flex-direction="row">
          <Typography>Habilidades: </Typography>
          <Typography>
            {selectedPokemonDetails?.abilities.map((ability) => (
              <Typography>{ability.ability.name}</Typography>
            ))}
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default PokemonDetails;
