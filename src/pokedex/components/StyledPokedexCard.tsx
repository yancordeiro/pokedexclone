import styled from "styled-components";
import { getColor } from "../../pokemon/services/colorType";
import { PokemonDetail } from "../../pokemon/interfaces/pokemonDetail";
// import pokebg from "../assets/img.jpg";
import image from "../assets/img/pokeball.png";

interface CardBoxProps {
  backgroundColor: string;
}

export const container = styled.div`
  display: flex;
  cursor: pointer;
  width: 800px;
  background-color: black;
`;

export const card = styled.section<{ backgroundColor: string }>`
  display: flex;
  width: 300px;
  height: 100%;
  padding: 10px;
  border-radius: 1rem;
  background-color: ${(props) => props.backgroundColor};
  color: white;

  .card__bg-pokeball {
    display: flex;
    background-image: url(${image});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 5rem 2rem;
  }

  .card__box-left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    h3 {
      text-transform: capitalize;
      align-self: flex-start;
    }
  }

  .card__chip {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .card__chip-types {
    border-radius: 1rem;
    display: table;
    background-color: rgba(255, 255, 255, 0.2);
    padding: 0.15rem 0.5rem;
    text-align: center;
    margin-bottom: 0.5rem;
    text-transform: capitalize;
  }

  .card__box-right {
    color: rgba(255, 255, 255, 0.2);
    text-align: center;
    font-weight: bold;
    font-size: larger;
    justify-content: flex-end;
  }
`;
