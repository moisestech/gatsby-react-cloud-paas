import React from 'react';
import styled from 'styled-components';

const HomePageStyles = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-left: 15px;
  flex-direction: column;
  margin-top: 75px;
  z-index: 10;
  p {
    max-width: 400px;
    font-size: 3rem;
  }
`;

export default function HomePage() {
  return (
    <HomePageStyles>
      <p>
        Nevalyashka is a platform as a service (PaaS) that enables developers to
        build, run, and operate applications entirely in the cloud.
      </p>
    </HomePageStyles>
  );
}
