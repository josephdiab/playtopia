import React from "react";
import "./App.css";
import styled from "styled-components";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import TrendingGames from "./components/TrendingGames";
import Footer from "./components/Footer";
import RotatingPictures from "./components/RotatingPictures";
import AllGames from "./components/AllGames";
import GameDetails from "./components/GameDetails";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  flex-grow: 1;
`;

const App = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <Container>
      <Header />

      {isHomePage && <RotatingPictures />}

      <Content>
        <Routes>
          <Route path="/" element={<TrendingGames />} />
          <Route path="/all-games" element={<AllGames />} />
          <Route path="/game/:id" element={<GameDetails />} />
        </Routes>
      </Content>

      <Footer />
    </Container>
  );
};

export default App;
