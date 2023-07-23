import React from "react";
import styled from "styled-components";
import Game from "./Game";
import { Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import gamesData from "./games.json";

const TrendingGamesContainer = styled.div`

`;

const HorizontalScroll = styled.div`
  overflow-x: auto;
  width: 100%;
`;

const TrendingGames = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  flex-wrap: nowrap;
`;

const Title = styled.h2`
  text-align: left;
  margin: 50px 0;
  font-size: 32px;
  font-weight: bold;
  color: #333333;
  padding-bottom: 8px;
`;

const trendingGameIds = [1, 2, 3, 4, 5, 7]; // Specify the trending game IDs

const TrendingGamesComponent = () => {
  const navigate = useNavigate();

  const handleViewAllGames = () => {
    navigate("/all-games");
  };

  const trendingGames = gamesData.filter(game => trendingGameIds.includes(game.id));

  return (
    <TrendingGamesContainer>
      <Row className="align-items-center mx-2">
        <Col>
          <Title>Trending Now</Title>
        </Col>
        <Col className="text-end">
          <Button variant="secondary" onClick={handleViewAllGames}>
            View All Games
          </Button>
        </Col>
      </Row>

      <HorizontalScroll>
        <TrendingGames className="flex-nowrap">
          {trendingGames.map((game) => (
            <Game key={game.id} id={game.id} name={game.name} imageUrl={game.imageUrl} />
          ))}
        </TrendingGames>
      </HorizontalScroll>
    </TrendingGamesContainer>
  );
};

export default TrendingGamesComponent;
