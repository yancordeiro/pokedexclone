import { render } from "@testing-library/react";
import React from "react";
import styled from "styled-components";
import { PokemonListInterface } from "../../pokemon/services/listPokemons";
import { useNavigate } from "react-router-dom";
import { Card, Avatar, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, Box, Chip, Grid, Container } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { red } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import { IconButtonProps } from "@mui/material/IconButton";
import { PokemonDetail } from "../../pokemon/interfaces/pokemonDetail";
import { type } from "os";
import { getColor } from "../../pokemon/services/colorType";

interface PokedexCardProps {
  pokemon: PokemonDetail;
}

const PokedexCard: React.FC<PokedexCardProps> = ({ pokemon }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const navigate = useNavigate();

  // const [primaryTypeName] = pokemon.types.map((type) => type.type.name);
  // const typeColor = getColor(primaryTypeName);

  const [primaryType] = pokemon.types;

  const typeColor = getColor(primaryType.type.name);
  //const colorType = getColor(pokemon.types.map(({ type: { name } }) => name).pop());

  function handleClick() {
    navigate(`/pokemon/${pokemon.name}`);
  }

  return (
    // <Card onClick={handleClick} style={{ minHeight: 130, opacity: 0.6, backgroundColor: typeColor, borderRadius: 16 }}>
    <div>
      <Card onClick={handleClick} style={{ backgroundColor: typeColor, borderRadius: 16 }}>
        <Container>
          <Grid container direction="row" justifyContent="center" alignItems="center" style={{ width: 170, height: 170 }}>
            <Grid>
              <CardHeader
                title={pokemon.name}
                // subheader={pokemon.types.map((type) => (
                //   <Chip label={type.type.name} />
                // ))}
              />
            </Grid>
            <Grid>
              <img src={pokemon.sprites.front_default} alt="teste" />
            </Grid>
          </Grid>
        </Container>
      </Card>
    </div>

    // <div>
    //   <Card onClick={handleClick}>{pokemon.name}</Card>
    // </div>
  );
};

export default PokedexCard;
