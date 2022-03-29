import axios from "axios";
import { PokemonDetail } from "../interfaces/pokemonDetail";

export async function getPokemonDetails(name: string): Promise<PokemonDetail> {
  const endpoint = `https://pokeapi.co/api/v2/pokemon/${name}`; //link da api
  const response = await axios.get<PokemonDetail>(endpoint); //chamada da api
  return response.data; //retorno da api
}
