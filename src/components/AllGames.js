import React from "react";
import styled from "styled-components";
import Game from "./Game";
import { Row, Col, Card, Button } from "react-bootstrap";

const AllGamesContainer = styled.div`
  // Add your styling for the all games container
`;

const Title = styled.h2`
  text-align: left;
  margin: 50px 0;
`;

const AllGames = () => {
  // Array of all games
  const allGames = [
    // Add all game objects with their respective properties
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
      {
        id: 9,
        name: "Fall Guys",
        imageUrl:
          "https://i.pinimg.com/564x/63/6b/6f/636b6fb101da5efa2e69fa197114c47c.jpg",
      },
      {
        id: 10,
        name: "Battlefield 2042",
        imageUrl:
          "https://i.pinimg.com/564x/12/27/fd/1227fd4338ac0c945097b3f10a8a8ad1.jpg",
      }
  ];

  return (
    <AllGamesContainer>
        <Row className="align-items-center mx-2">
            <Col>
                <Title>All Games</Title>
            </Col>
        </Row>
        <Row className="mx-2">
            {allGames.map((game) => (
            <Col key={game.id} xs={6} md={4} lg={3} xl={2} className="mb-4">
                <Game id={game.id} name={game.name} imageUrl={game.imageUrl} />
            </Col>
            ))}
        </Row>
    </AllGamesContainer>
  );
};

export default AllGames;
