import React from "react";
import styled from "styled-components";
import Game from "./Game";
import { Row, Col, Card, Button } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";

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
`;


const trendinggames = [
    {
      id: 1,
      name: "Uncharted 4",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/1/1a/Uncharted_4_box_artwork.jpg",
    },
    {
      id: 2,
      name: "FIFA 23",
      imageUrl:
        "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt6ce962f552812df5/62d6bd83c4f39a1084ff5bef/GettyImages-1409223178.jpg?format=webp",
    },
    {
      id: 3,
      name: "God Of War",
      imageUrl:
        "https://image.api.playstation.com/vulcan/img/rnd/202010/2217/p3pYq0QxntZQREXRVdAzmn1w.png",
    },
    {
      id: 4,
      name: "Dota 2",
      imageUrl:
        "https://www.hdwallpaper.nu/wp-content/uploads/2015/02/dota_2_wallpaper_31.jpg",
    },
    {
      id: 5,
      name: "Fortnite",
      imageUrl:
        "https://i.pinimg.com/564x/9a/34/97/9a349768c6bc553d90ee4585c4a7499b.jpg",
    },
    {
      id: 6,
      name: "Valorant",
      imageUrl:
        "https://i.pinimg.com/564x/93/6b/bc/936bbca6fbe324bffc8b5e9c1a3e739a.jpg",
    },
    {
      id: 7,
      name: "Rocket League",
      imageUrl:
        "https://i.pinimg.com/564x/1c/99/a8/1c99a8c3e84cf0ac74ea919fc2ba4166.jpg",
    },
    {
      id: 8,
      name: "Apex Legends",
      imageUrl:
        "https://i.pinimg.com/564x/8e/fa/d7/8efad7b53c142eee1bea125db3993866.jpg",
    },
    // Add more Game objects with their respective image URLs
];

const TrendingGamesComponent = () => {
    const navigate = useNavigate();

    const handleViewAllGames = () => {
        navigate("/all-games");
    };
    
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
                    {trendinggames.map((game) => (
                    <Game key={game.id} id={game.id} name={game.name} imageUrl={game.imageUrl} />
                    ))}
                </TrendingGames>
            </HorizontalScroll>
        </TrendingGamesContainer>
    );
};

export default TrendingGamesComponent;
