import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  width: 100vw;
  display: flex;
  flex-direction: row;
  position: relative;
  background: white;
  font-size: 1.2rem;
  background: salmon;
`;

export default function Footer() {
  return (
    <FooterStyles>
      <p>Nevalyashka.com</p>
      <p>Documentation</p>
      <p>Blog</p>
      <p>&copy; {new Date().getFullYear()} Nevalyashka</p>
    </FooterStyles>
  );
}
