import React from "react";
import styled from "styled-components";

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  flex-shrink: 0;
`;

const GameImage = styled.img`
  height: 362px;
  width: 275px;
  object-fit: cover;
`;

const GameName = styled.div`
  margin-top: 10px;
`;

const Game = ({ id, name, imageUrl }) => {
  return (
    <GameContainer>
      <GameImage src={imageUrl} alt={name} />
      <GameName>{name}</GameName>
    </GameContainer>
  );
};

export default Game;
