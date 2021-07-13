import React from 'react';
import styled from 'styled-components';

const AboutPageStyles = styled.div`
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

export default function AccountPage() {
  return (
    <AboutPageStyles>
      <p>About Page 👤</p>
      <p>
        Nevalyashka is a platform as a service (PaaS) that enables developers to
        build, run, and operate applications entirely in the cloud.
      </p>
      <p>
        Contributors: Andrei Li, Saurabh Saha, Moises Sanabria, Ankush Singh,
        Enas Samir, Gagan Kalra, Khaled Ben Yahya
      </p>
    </AboutPageStyles>
  );
}
