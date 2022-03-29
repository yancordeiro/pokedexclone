import axios from "axios";
import React, { useEffect, useState } from "react";
import { PokemonDetail } from "./pokemon/interfaces/pokemonDetail";
import { getPokemonDetails } from "./pokemon/services/getPokemonDetails";
import { listPokemons, PokemonListInterface } from "./pokemon/services/listPokemons";
import MenuIcon from "@mui/icons-material/Menu";
import { Grid, Container, IconButton, Button, Typography, Toolbar, Box, AppBar, CardActions, CardContent, Card } from "@mui/material";

interface PokedexProps {}

export const Pokedex: React.FC<PokedexProps> = () => {
  const [pokemons, setPokemons] = useState<PokemonListInterface[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonListInterface | undefined>(undefined);
  const [selectedPokemonDetails, setSelectedPokemonDetails] = useState<PokemonDetail | undefined>(undefined);

  useEffect(() => {
    listPokemons().then((response) => setPokemons(response.results));
  }, []);

  useEffect(() => {
    if (!selectedPokemon) return;

    getPokemonDetails(selectedPokemon.name).then((response) => setSelectedPokemonDetails(response));
  }, [selectedPokemon]);

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Button color="inherit">Pokedex</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Container maxWidth="lg">
        <Box mt={2}>
          <Grid container spacing={2}>
            {pokemons.map((pokemon) => (
              <>
                <Grid item xs={6} lg={3}>
                  <Card variant="outlined">
                    <CardContent>
                      <Typography variant="h5" component="div">
                        {pokemon.name}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        onClick={() => {
                          setSelectedPokemon(pokemon);
                        }}
                        size="small"
                      >
                        Learn More
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              </>
            ))}
          </Grid>
          <h1>Pokedex</h1>
          Pokemons:
          {pokemons.map((pokemon) => (
            <button onClick={() => setSelectedPokemon(pokemon)}>{pokemon.name}</button>
          ))}
          <h2>
            Pokemon selecionado:
            {selectedPokemon?.name || "nenhum pokemon selecionado"};
          </h2>
          {JSON.stringify(selectedPokemonDetails, undefined, 2)}
        </Box>
      </Container>
    </div>
  );
};

export default Pokedex;
