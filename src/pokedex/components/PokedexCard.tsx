import React from "react";
import { useNavigate } from "react-router-dom";
import { PokemonDetail } from "../../pokemon/interfaces/pokemonDetail";
import { getColor } from "../../pokemon/services/colorType";
import { card as StyledCard } from "./StyledPokedexCard";
import image from "../assets/img/pokeball.png";

interface PokedexCardProps {
  pokemon: PokemonDetail;
}

const PokedexCard: React.FC<PokedexCardProps> = ({ pokemon }) => {
  const pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

  const navigate = useNavigate();

  const [primaryType] = pokemon.types;

  const typeColor = getColor(primaryType.type.name);

  function handleClick() {
    navigate(`/pokemon/${pokemon.name}`);
  }

  return (
    <StyledCard backgroundColor={typeColor}>
      <div className="card-img">
        <img className="bg-pokeball" src={image} alt={pokemon.name} />
      </div>
      <div className="card__box-wrapper">
        <div className="card__box-left">
          <h3>{pokemon.name}</h3>

          <div className="card__chip">
            {pokemon.types.map((type) => (
              <span className="card__chip-types">{type.type.name}</span>
            ))}
          </div>
        </div>

        <div className="card__box-right">
          <span>#{pokemon.id.toString().padStart(3, "000")}</span>
          <img src={pokemonImage} alt="Pokemon" />
        </div>
      </div>
    </StyledCard>
  );
};

export default PokedexCard;
