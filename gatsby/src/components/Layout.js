import React from 'react';
import styled from 'styled-components';

import Nav from './Nav';
import Footer from './Footer';

import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

const LayoutStyles = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export default function Layout({ children }) {
  return (
    <LayoutStyles>
      <GlobalStyles />
      <Typography />

      <Nav />
      {children}
      <Footer />
    </LayoutStyles>
  );
}
