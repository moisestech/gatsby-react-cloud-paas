import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: row;
  max-height: 47px;
  padding: 0 15px;
  font-size: 1.2rem;
  border-top: 1px solid #eef1f6;
  background: white;
  div {
    display: flex;
    flex: 1;
    &:nth-child(2) {
      justify-content: flex-end;
    }
  }
  p {
    padding: 0 15px 0 0;
    color: var(--gray);
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div>
        <p>Nevalyashka.cloud</p>
        <p>Documentation</p>
        <p>Blog</p>
      </div>

      <div>
        <p>&copy; {new Date().getFullYear()} Nevalyashka</p>
      </div>
    </FooterStyles>
  );
}
