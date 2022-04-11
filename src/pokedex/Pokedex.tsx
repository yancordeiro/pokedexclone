import axios from "axios";
import React, { useEffect, useState } from "react";
import { PokemonDetail } from "../pokemon/interfaces/pokemonDetail";
import { getPokemonDetails } from "../pokemon/services/getPokemonDetails";
import { listPokemons, PokemonListInterface } from "../pokemon/services/listPokemons";
import MenuIcon from "@mui/icons-material/Menu";
import { Grid, Container, IconButton, Button, Typography, Toolbar, Box, AppBar, CardActions, CardContent, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PokedexCard from "./components/PokedexCard";

interface PokedexProps {}

export const Pokedex: React.FC<PokedexProps> = () => {
  const [pokemons, setPokemons] = useState<PokemonDetail[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonListInterface | undefined>(undefined);

  useEffect(() => {
    listPokemons().then((response) => setPokemons(response.results));
  }, []);

  return (
    <div>
      <Container maxWidth="lg">
        <Box mt={2}>
          <Grid container spacing={2}>
            {pokemons.map((pokemon) => (
              <>
                <Grid item xs={6} lg={3}>
                  <PokedexCard pokemon={pokemon} />
                  {/* <Card variant="outlined">
                    <CardContent>
                      <Typography variant="h5" component="div">
                        {pokemon.name}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button onClick={() => HandleClick(pokemon)} size="small">
                        Learn More
                      </Button>
                    </CardActions>
                  </Card> */}
                </Grid>
              </>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Pokedex;
