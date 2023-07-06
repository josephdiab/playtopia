import React from "react";
import "./App.css";
import styled from "styled-components";
import { Row, Col, Card, Button } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Game from "./components/Game";
import TrendingGames from "./components/TrendingGames";
import Footer from "./components/Footer";
import RotatingPictures from "./components/RotatingPictures";
import AllGames from "./components/AllGames";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  text-align: left;
  margin: 50px 0;
`;

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  

  return (
    <Container>
      <Header />

      {isHomePage && <RotatingPictures />}

      <div className="container-fluid">
        
        <Routes>
          <Route path="/" element={<TrendingGames />} />
          <Route path="/all-games" element={<AllGames />} />
        </Routes>
      </div>

      <Footer />
    </Container>
  );
};

export default App;
