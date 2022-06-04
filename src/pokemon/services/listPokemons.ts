import axios from "axios";
import { PokemonDetail } from "../interfaces/pokemonDetail";
import { getPokemonDetails } from "./getPokemonDetails";

export interface PokemonListInterface {
  name: string;
  url: string;
}

interface listPokemonsInterface {
  count: number;
  next: null | string;
  previous: null | string;
  results: PokemonDetail[];
}

export async function listPokemons(): Promise<listPokemonsInterface> {
  const endpoint = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"; //link da api
  const response = await axios.get<listPokemonsInterface>(endpoint); //chamada da api
  const promisseArr = response.data.results.map(({ name }) =>
    getPokemonDetails(name)
  ); //carregando as informações que estão na url do pokemon
  const resultsPromise = await Promise.all(promisseArr);
  return {
    ...response.data,
    results: resultsPromise,
  }; //retorno da api
}
