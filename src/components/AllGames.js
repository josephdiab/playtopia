import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Game from "./Game";
import { Row, Col, Form, Button } from "react-bootstrap";
import GameDetails from "./GameDetails";
import gamesData from "./games.json";
import "./GameDetails.css"; // Import the custom CSS file
import filterIcon from './filter.png';
import { useNavigate } from 'react-router-dom';

const AllGamesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: 20px;
  margin-right: 20px;
`;

const Title = styled.h2`
  text-align: left;
  margin: 50px 0;
  font-size: 32px;
  font-weight: bold;
  color: #333333;
  padding-bottom: 8px;
`;

const SubTitle = styled.h2`
  text-align: left;
  margin: 20px 0;
  font-size: 24px;
  font-weight: bold;
`;

const UnderlinedSpan = styled.span`
  cursor: pointer;
  color: #949494;
  text-decoration: ${props => props.underline ? 'underline' : 'none'};
`;

const FilterIcon = styled.img`
  width: 28px;
  height: 28x;
`;

const AllGames = () => {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState(gamesData);
  const [filterConsole, setFilterConsole] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterRating, setFilterRating] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setGames(gamesData);
  }, []);

  const handleFilter = () => {
    // Apply filters to the games based on filterConsole, filterRelease, and filterType
    const filtered = games.filter((game) => {
      const matchConsole = filterConsole ? game.console.includes(filterConsole) : true;
      const matchType = filterType ? game.type === filterType : true;
      const matchRating = filterRating ? game.rating >= parseFloat(filterRating) : true;
      return matchConsole && matchType && matchRating;
    });
    setFilteredGames(filtered);

    // Build the query string for the filters
    const queryString = `?type=${filterType}&console=${filterConsole}&rating=${filterRating}`;

    // Navigate to the new URL with the filters
    navigate('/all-games' + queryString);
  };

  const handleResetFilters = () => {
    // Reset the filter states to their default values
    setFilterConsole("");
    setFilterType("");
    setFilterRating("");
    // Set filteredGames back to the initial games list to show all games
    setFilteredGames(gamesData);

    // Navigate back to the original "All Games" page
    navigate('/all-games');
  };

  return (
    <AllGamesContainer>
      <Row className="mx-2">
        <Row className="align-items-center">
          <Col>
            <Title>View all games here</Title>
          </Col>
        </Row>

        <Col md={2}>
          <Row>
            <Col>
              <SubTitle>Filter</SubTitle>
            </Col>
            <Col className="d-flex align-items-center justify-content-end">
              <FilterIcon src={filterIcon} alt="Filter Icon" />
            </Col>
          </Row>

          {/* Filtering Controls */}
          <Form.Group className="my-4">
            <Form.Label>Console</Form.Label>
            <Form.Select  onChange={(e) => setFilterConsole(e.target.value)} value={filterConsole}>
              <option value="">All Consoles</option>
              <option value="ps">PlayStation</option>
              <option value="xbox">Xbox</option>
              <option value="pc">PC</option>
            </Form.Select >
          </Form.Group>

          <Form.Group className="my-4">
            <Form.Label>Type</Form.Label>
            <Form.Select onChange={(e) => setFilterType(e.target.value)} value={filterType}>
              <option value="">All Types</option>
              <option value="Action">Action</option>
              <option value="Sports">Sports</option>
              <option value="FPS">FPS</option>
              <option value="Open World">Open World</option>
              {/* Add other types as needed */}
            </Form.Select >
          </Form.Group>

          <Form.Group className="my-4">
            <Form.Label>Rating</Form.Label>
            <Form.Select onChange={(e) => setFilterRating(e.target.value)} value={filterRating}>
              <option value="">All Ratings</option>
              <option value="1">1 Star</option>
              <option value="2">2 Stars</option>
              <option value="3">3 Stars</option>
              <option value="4">4 Stars</option>
              <option value="5">5 Stars</option>
            </Form.Select>
          </Form.Group>

          <Row>
            <Col className="d-flex align-items-center">
              <UnderlinedSpan onClick={handleResetFilters} underline={true}>
                Reset
              </UnderlinedSpan>
            </Col>
            <Col className="text-end">
              <Button onClick={handleFilter} variant="dark">Filter</Button>
            </Col>
          </Row>
        </Col>

        <Col md={10}>
          <Row className="mx-2">
            {filteredGames.map((game) => (
              <Col key={game.id} xs={12} md={3} className="mb-4">
                <Game id={game.id} name={game.name} imageUrl={game.imageUrl} />
              </Col>
            ))}
          </Row>
          <GameDetails games={games} />
        </Col>
      </Row>
    </AllGamesContainer>
  );
};

export default AllGames;
