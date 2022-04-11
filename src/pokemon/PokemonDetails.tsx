import React, { useEffect, useState } from "react";
import { PokemonDetail } from "./interfaces/pokemonDetail";
import MenuIcon from "@mui/icons-material/Menu";
import { Grid, Container, IconButton, Button, Typography, Toolbar, Box, AppBar, CardActions, CardContent, Card } from "@mui/material";
import { useParams } from "react-router-dom";
import { getPokemonDetails } from "./services/getPokemonDetails";

interface PokemonDetailsProps {}

const PokemonDetails: React.FC<PokemonDetailsProps> = () => {
  const { name } = useParams();

  const [selectedPokemonDetails, setSelectedPokemonDetails] = useState<PokemonDetail | undefined>(undefined);

  useEffect(() => {
    if (!name) return;
    getPokemonDetails(name).then((response) => setSelectedPokemonDetails(response));
  }, []);

  return (
    <div>
      <Container maxWidth="lg">
        <Box mt={2}>
          <img width="50%" height="auto" src={selectedPokemonDetails?.sprites.front_default} alt="" />
          {/* {JSON.stringify(selectedPokemonDetails, undefined, 2)} */}
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
