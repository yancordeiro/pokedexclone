import { spawn } from "child_process";
import React from "react";
import { useNavigate } from "react-router-dom";
import { PokemonDetail } from "../../pokemon/interfaces/pokemonDetail";
import { getColor } from "../../pokemon/services/colorType";
import { card as StyledCard } from "./StyledPokedexCard";
import { container as StyledContainer } from "./StyledPokedexCard";
import image from "../assets/img/pokeball.png";

interface PokedexCardProps {
  pokemon: PokemonDetail;
}

const PokedexCard: React.FC<PokedexCardProps> = ({ pokemon }) => {
  const navigate = useNavigate();

  const [primaryType] = pokemon.types;

  const typeColor = getColor(primaryType.type.name);

  function handleClick() {
    navigate(`/pokemon/${pokemon.name}`);
  }

  return (
    <StyledCard backgroundColor={typeColor} className="card__box">
      <div className="card__bg-pokeball">
        <div className="card__box-left">
          <h3>{pokemon.name}</h3>
          <div className="card__chip">
            {pokemon.types.map((type) => (
              <span className="card__chip-types">{type.type.name}</span>
            ))}
            {/* {pokemon.types.map((type) => type.type.name)} */}
          </div>
        </div>
        <div className="card__box-right">
          <span>#{pokemon.id.toString().padStart(3, "000")}</span>
          <img src={pokemon.sprites.front_default} alt="Pokemon" />
        </div>
      </div>
    </StyledCard>
  );
};

export default PokedexCard;

{
  /* <Card
        onClick={handleClick}
        style={{ backgroundColor: typeColor, borderRadius: 16 }}
      >
        <Container>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            style={{ width: 170, height: 170 }}
          >
            <Grid>
              <CardHeader title={pokemon.id.toString().padStart(3, "000")} />
            </Grid>
            <Grid>
              <img src={pokemon.sprites.front_default} alt="teste" />
            </Grid>
          </Grid>
        </Container>
      </Card> */
}
