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
  div {
    display: flex;
    flex: 1;
    &:nth-child(2) {
      justify-content: flex-end;
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div>
        <p>Nevalyashka.com</p>
        <p>Documentation</p>
        <p>Blog</p>
      </div>

      <div>
        <p>&copy; {new Date().getFullYear()} Nevalyashka</p>
      </div>
    </FooterStyles>
  );
}
