import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #141414;
  color: white;
  padding: 20px;
  text-align: center;
`;

const FooterText = styled.p`
  margin: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>© 2023 Playtopia. All rights reserved.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
