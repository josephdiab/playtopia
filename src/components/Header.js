import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { Dropdown, Button, Col } from 'react-bootstrap';
import logoImage from './logo.jpg';

const HeaderContainer = styled.div`
  background-color: #141414;
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

const ProfileTab = styled(HeaderTab)`
  display: flex;
  align-items: center;
  border: 1px solid #ffffff;
  border-radius: 50px;
  padding: 10px 15px;

  &:hover {
    background-color: #ffffff;
    color: #000000;

    svg {
      color: #000000;
    }
  }
`;

const ProfileIcon = styled(FaUserAlt)`
  font-size: 20px;
  margin-right: 8px;
`;

const ProfileText = styled.span`
  margin-right: 8px;
`;

const AppName = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;

  &:hover {
    cursor: pointer;
  }
`;

const LogoImage = styled.img`
  width: 36px;
  height: 36px;
  margin-right: 10px;
`;

const GameDropdown = styled(Dropdown)`
  display: flex;
  align-items: center;
`;

const DropdownContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DropdownColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;

const DropdownCategory = styled(Dropdown.ItemText)`
  font-weight: bold;
  margin-bottom: 5px;
  cursor: pointer;
`;

const DropdownGame = styled(Dropdown.Item)`
  &:hover {
    background-color: #f2f2f2;
  }
`;

const GoToAllGamesButton = styled(Button)`
  margin-right: 10px;
`;

const Header = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleGoToAllGames = () => {
    setShowDropdown(false); // Close the dropdown before navigating to the all games page
    navigate('/all-games');
  };

  const navigateToCategory = (category) => {
    setShowDropdown(false); // Close the dropdown after clicking on a category
    navigate(`/all-games?type=${category}&console=&rating=`);
  };

  const navigateToGame = (id) => {
    setShowDropdown(false);
    navigate(`/game/${id}`);
  };

  // Function to close the dropdown when the mouse is outside of the dropdown menu
  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <HeaderContainer>
      <TabsContainer>
        <GameDropdown
          show={showDropdown}
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={handleMouseLeave}
        >
          <Dropdown.Toggle
            as={HeaderTab}
            id="games-dropdown"
            onClick={() => setShowDropdown((prevState) => !prevState)}
          >
            Games
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <DropdownContainer>
              <DropdownColumn>
                <DropdownCategory onClick={() => navigateToCategory('Sports')}>Sports</DropdownCategory>
                <DropdownGame onClick={() => navigateToGame('2')}>FIFA 23</DropdownGame>
                <DropdownGame onClick={() => navigateToGame('16')}>NHL 23</DropdownGame>
                <DropdownGame onClick={() => navigateToGame('15')}>NBA 2k23</DropdownGame>
              </DropdownColumn>
              <DropdownColumn>
                <DropdownCategory onClick={() => navigateToCategory('FPS')}>FPS</DropdownCategory>
                <DropdownGame onClick={() => navigateToGame('5')}>Fortnite</DropdownGame>
                <DropdownGame onClick={() => navigateToGame('4')}>Dota 2</DropdownGame>
                <DropdownGame onClick={() => navigateToGame('6')}>Valorant</DropdownGame>
              </DropdownColumn>
              <DropdownColumn>
                <DropdownCategory onClick={() => navigateToCategory('Open World')}>Open World</DropdownCategory>
                <DropdownGame onClick={() => navigateToGame('11')}>Minecraft</DropdownGame>
                <DropdownGame onClick={() => navigateToGame('12')}>Red Dead Redemption 2</DropdownGame>
                <DropdownGame onClick={() => navigateToGame('17')}>The Legend of Zelda</DropdownGame>
              </DropdownColumn>
              <DropdownColumn>
                <DropdownCategory onClick={() => navigateToCategory('Action')}>Action</DropdownCategory>
                <DropdownGame onClick={() => navigateToGame('1')}>Uncharted 4</DropdownGame>
                <DropdownGame onClick={() => navigateToGame('3')}>God of War</DropdownGame>
                <DropdownGame onClick={() => navigateToGame('13')}>Marvels Spider-Man</DropdownGame>
              </DropdownColumn>
            </DropdownContainer>
            <Col className="text-end mt-4">
              <GoToAllGamesButton onClick={handleGoToAllGames} variant="outline-dark">
                Go to All Games
              </GoToAllGamesButton>
            </Col>
          </Dropdown.Menu>
        </GameDropdown>
        <HeaderTab>Library</HeaderTab>
      </TabsContainer>
      <AppName onClick={handleLogoClick}>
        <LogoImage src={logoImage} alt="Playtopia Logo" />
        Playtopia
      </AppName>
      <ProfileTab>
        <ProfileIcon />
        <ProfileText>Profile</ProfileText>
      </ProfileTab>
    </HeaderContainer>
  );
};

export default Header;
