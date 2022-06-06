import { useParams } from "react-router-dom";
import { getPokemonDetails } from "./services/getPokemonDetails";
import { useQuery } from "react-query";
import RangeView from "../pokedex/components/rangeview/RangeView";
import { PokemonDetail } from "./StyledPokemonDetails";

import { getColor } from "./services/colorType";

interface PokemonDetailsProps {}

export const PokemonDetails: React.FC<PokemonDetailsProps> = () => {
  const { name } = useParams();
  const { data } = useQuery(`getPokemonDetails-${name}`, () =>
    getPokemonDetails(name!)
  );
  const pokemonDetails = data;
  const pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonDetails?.id}.png`;

  const abilities = pokemonDetails?.abilities
    .map(({ ability }) => {
      return ability.name.replace("-", " ");
    })
    .join(", ");
  const species = pokemonDetails?.types
    .map(({ type }) => {
      return type.name.replace("-", " ");
    })
    .join(", ");

  const height = pokemonDetails?.height ? pokemonDetails.height * 10 : "n/a"; // altura em cm
  const weight = pokemonDetails?.weight ? pokemonDetails.weight * 10 : "n/a"; // peso em kg
  const labels = ["HP", "Attack", "Defense", "Sp. Atk", "Sp. Def", "Speed"];
  const total = pokemonDetails?.stats.reduce(
    (sum, current) => sum + parseInt(current.base_stat),
    0
  );

  const typeColor = pokemonDetails?.types[0].type.name;

  return (
    <PokemonDetail backgroundColor={getColor(typeColor)}>
      <h1>{pokemonDetails?.name}</h1>
      <img src={pokemonImage} alt={pokemonDetails?.name} />
      <table className="detail__table">
        <tbody>
          <tr>
            <td className="table__data-title">Species: </td>
            <td className="table__data-cont">{species}</td>
          </tr>

          <tr>
            <td className="table__data-title">Height: </td>
            <td className="table__data-cont">{height}cm</td>
          </tr>

          <tr>
            <td className="table__data-title">Weight: </td>
            <td className="table__data-cont">{weight}kg</td>
          </tr>

          <tr>
            <td className="table__data-title">Abilities: </td>
            <td className="table__data-cont">{abilities}</td>
          </tr>

          <tr>
            <td className="table__data-title-stats">stats: </td>
            {labels.map((label, i) => (
              <tr key={label}>
                <td className="table__data-title">{label}</td>
                <td className="table__data-cont-stats">
                  {pokemonDetails?.stats[i].base_stat}

                  <RangeView value={pokemonDetails?.stats[i].base_stat} />
                </td>
              </tr>
            ))}

            <tr>
              <td className="table__data-title">Total</td>
              <td className="table__data-cont-stats">
                {total}
                <RangeView value={total} max={600} />
              </td>
            </tr>
          </tr>
        </tbody>
      </table>
    </PokemonDetail>
  );
};

export default PokemonDetails;
