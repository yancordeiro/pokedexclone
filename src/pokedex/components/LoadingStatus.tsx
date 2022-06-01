import React from "react";
import { loading as StyledLoading } from "./StyledLoadingStatus";

interface LoadingStatusProps {}

const LoadingStatus: React.FC<LoadingStatusProps> = () => {
  return (
    <StyledLoading>
      <span className="progress-bar__text">
        Aguarde enquanto capturamos alguns pokemons!!
      </span>
      <div className="wrapper">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
      </div>
    </StyledLoading>
  );
};

export default LoadingStatus;
