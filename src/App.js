import React, { useState, useEffect } from 'react';
import './App.css';
import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  background-color: #000000;
  color: white;
  display: flex;
  align-items: center;
  padding: 10px;
  position: relative;
  box-shadow: 0 3px 6px 0 #555;
`;

const TabsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderTab = styled.div`
  padding: 10px;
  background-color: transparent;
  color: #ffffff;
  cursor: pointer;
  margin-right: 10px;
`;

const AppName = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

const Logo = styled.img`
  width: 36px;
  height: 36px;
  margin-right: 10px;
`;

const RotatingPicturesContainer = styled.div`
  position: relative;
  margin-top: 0;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  overflow: hidden;
`;

const RotatingPicture = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  &.active {
    opacity: 1;
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  padding: 10px;
  background-color: #fff;
  border-radius: 25px;
`;

const SearchInput = styled.input`
  flex-grow: 1;
  border: none;
  padding: 10px;
  border-radius: 20px;
  font-size: 18px;
`;

const SearchIcon = styled.div`
  font-size: 28px;
  cursor: pointer;
  &:hover {
    color: blue;
  }
`;

const Title = styled.h2`
  text-align: left;
  margin: 50px 0;
  margin-left: 10%;
`;

const GameSelection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GameList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;

const GameImage = styled.img`
  height: 362px;
  width: 275px;
  object-fit: cover;
`;

const GameName = styled.div`
  margin-top: 10px;
`;

const games = [
  { id: 1, name: 'Uncharted 4', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/1/1a/Uncharted_4_box_artwork.jpg' },
  { id: 2, name: 'FIFA 23', imageUrl: 'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt6ce962f552812df5/62d6bd83c4f39a1084ff5bef/GettyImages-1409223178.jpg?format=webp' },
  { id: 3, name: 'God Of War', imageUrl: 'https://image.api.playstation.com/vulcan/img/rnd/202010/2217/p3pYq0QxntZQREXRVdAzmn1w.png' },
  { id: 4, name: 'Dota 2', imageUrl: 'https://www.hdwallpaper.nu/wp-content/uploads/2015/02/dota_2_wallpaper_31.jpg' },
  // Add more game objects with their respective image URLs
];

const headergames = [
  { id: 1, name: "Marvel's Spiderman 2", imageUrl: 'https://i.pinimg.com/originals/b2/14/33/b21433a8faec326b87666d78bb10e31d.jpg' },
  { id: 2, name: 'FIFA 23', imageUrl: 'https://www.stuttgarter-nachrichten.de/media.media.8a496ff5-f6ef-46b6-bdf5-32df2a991e5f.original1024.jpg' },
  { id: 3, name: 'God Of War', imageUrl: 'https://image.api.playstation.com/vulcan/img/rnd/202010/2217/p3pYq0QxntZQREXRVdAzmn1w.png' },
  { id: 4, name: 'Dota 2', imageUrl: 'https://www.hdwallpaper.nu/wp-content/uploads/2015/02/dota_2_wallpaper_31.jpg' },
  // Add more game objects with their respective image URLs
];

const RotatingPictures = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % headergames.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleSearch = () => {
    console.log('Performing search...');
    // Add your search logic here
  };

  return (
    <RotatingPicturesContainer>
      {headergames.map((headergame, index) => (
        <RotatingPicture
          key={headergame.id}
          src={headergame.imageUrl}
          alt={headergame.name}
          className={index === currentImageIndex ? 'active' : ''}
        />
      ))}
      <SearchBar>
        <SearchInput type="text" placeholder="Search" />
        <SearchIcon onClick={handleSearch}>
          <FaSearch />
        </SearchIcon>
      </SearchBar>
    </RotatingPicturesContainer>
  );
};

const App = () => {
  const [isRotatingPicturesVisible, setIsRotatingPicturesVisible] = useState(true);

  const hideRotatingPictures = () => {
    setIsRotatingPicturesVisible(false);
  };

  return (
    <Container>
      <Header>
        <TabsContainer>
          <HeaderTab>Games</HeaderTab>
          <HeaderTab>Library</HeaderTab>
        </TabsContainer>
        <AppName>
          <Logo src="" alt="Logo" />
          Playtopia
        </AppName>
        <HeaderTab>Profile</HeaderTab>
      </Header>

      {isRotatingPicturesVisible && <RotatingPictures />}

      <Title>What Game Next?</Title>

      <GameSelection>
        {games.map((game) => (
          <GameList key={game.id}>
            <GameImage src={game.imageUrl} alt={game.name} />
            <GameName>{game.name}</GameName>
          </GameList>
        ))}
      </GameSelection>

      {/* Render your other components or routes here */}
    </Container>
  );
};

export default App;
