import styled from "styled-components";

interface CardBoxProps {
  backgroundColor: string;
}

export const PokemonDetail = styled.div<{ backgroundColor: string }>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
  h1 {
    color: white;
    text-transform: capitalize;
    font-size: 4rem;
  }
  img {
    max-width: 20rem;
    max-height: 20rem;
  }

  .detail__table {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 100%;
    height: 100%;
    border-radius: 3rem 3rem 0 0;
  }
  tbody {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
  }
  .table__data-title {
    /* border: 1px solid red;
    text-transform: capitalize;
     */
    align-items: center;
    justify-content: center;
    width: 5rem;
    text-transform: capitalize;
  }
  .table__data-title-stats {
    display: flex;
    justify-content: center;
    width: 100%;
    text-transform: capitalize;
    font-weight: bold;
    padding: 1rem;
  }
  .table__data-cont {
    align-items: center;
    justify-content: center;
    width: 200px;
    text-transform: capitalize;
    font-weight: bold;
  }
  .table__data-cont-stats {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    text-transform: capitalize;
    font-weight: bold;
  }
`;
