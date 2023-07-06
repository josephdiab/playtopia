import React from 'react';
import styled from 'styled-components';

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

const Header = () => {
  return (
    <HeaderContainer>
      <TabsContainer>
        <HeaderTab>Games</HeaderTab>
        <HeaderTab>Library</HeaderTab>
      </TabsContainer>
      <AppName>
        <Logo src="" alt="Logo" />
        Playtopia
      </AppName>
      <HeaderTab>Profile</HeaderTab>
    </HeaderContainer>
  );
};

export default Header;
