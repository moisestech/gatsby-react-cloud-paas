import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const LogoStyles = styled.div`
  display: flex;
  flex: 1;
  a {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    color: blue;
    margin: 0;
    padding: 0;
  }
  span {
    font-size: 3rem;
    padding: 5px 5px 5px 0;
  }
`;

export default function Logo() {
  return (
    <LogoStyles>
      <Link to="/">
        <span>☃️</span>
        <h2>NEVALYASHKA</h2>
      </Link>
    </LogoStyles>
  );
}
