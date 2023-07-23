import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from 'prop-types';

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  flex-shrink: 0;
`;

const GameImage = styled.img`
  height: 375px; /* Set your desired fixed height here */
  width: 275px;
  object-fit: cover;
`;

const GameName = styled.div`
  margin-top: 10px;
`;

const Game = ({ id, name, imageUrl }) => {
  return (
    <Link to={`/game/${id}`}>
      <GameContainer>
        <GameImage src={imageUrl} alt={name} className="img-fluid" />
        <GameName>{name}</GameName>
      </GameContainer>
    </Link>
  );
};

Game.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default Game;
