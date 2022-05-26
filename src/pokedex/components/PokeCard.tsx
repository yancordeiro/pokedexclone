import React from "react";
import { useNavigate } from "react-router-dom";
import { PokemonDetail } from "../../pokemon/interfaces/pokemonDetail";
import { getColor } from "../../pokemon/services/colorType";

interface PokedexCardProps {
  pokemon: PokemonDetail;
}

const PokeCard: React.FC<PokedexCardProps> = ({ pokemon }) => {
  const navigate = useNavigate();

  const [primaryType] = pokemon.types;

  const typeColor = getColor(primaryType.type.name);

  function handleClick() {
    navigate(`/pokemon/${pokemon.name}`);
  }

  return (
    <div className="card__box">
      <div className="card__box-left">
        <h3 className="card__title">{pokemon.name}</h3>
        <p className="card__types">
          {pokemon.types.map((type) => type.type.name)}
        </p>
      </div>
      <div className="card__box-right">
        <span className="card__pokemon-id">
          #${pokemon.id.toString().padStart(3, "000")}
        </span>
        <img src={pokemon.sprites.front_default} alt="teste" />
      </div>
    </div>
  );
};

export default PokeCard;
