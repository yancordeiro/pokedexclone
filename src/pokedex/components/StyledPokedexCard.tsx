import styled from "styled-components";

interface CardBoxProps {
  backgroundColor: string;
}

export const container = styled.div`
  display: grid;
  width: 100vw;
  align-content: center;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
`;

export const card = styled.div<{ backgroundColor: string }>`
  position: relative;
  display: flex;
  height: 100%;
  width: 225px;
  padding: 10px;
  border-radius: 1rem;
  background-color: ${(props) => props.backgroundColor};
  color: white;
  cursor: pointer;
  user-select: none;

  .card__box-wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;
    z-index: 1;
  }

  .card-img {
    position: absolute;
    display: flex;
    width: 100px;
    height: 100px;
    z-index: 0;
    opacity: 0.2;
    left: 8rem;
    bottom: 0rem;
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
    display: flex;
    flex-direction: column;
    text-align: center;
    font-weight: bold;
    font-size: larger;

    span {
      opacity: 0.3;
    }
    img {
      max-width: 100px;
      max-height: 100px;
    }
  }
`;
