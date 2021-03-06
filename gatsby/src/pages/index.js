import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

// ICONS
import { FiHexagon } from 'react-icons/fi';

// AUTH
import { isLoggedIn } from '../utils/auth';

const HomePageStyles = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-left: 15px;
  flex-direction: column;
  margin-top: 75px;
  z-index: 10;
  h2 {
    color: blue;
  }
  div {
    max-width: 450px;
    font-size: 3rem;
  }
`;

export default function HomePage() {
  return (
    <HomePageStyles>
      <div>
        <h2>Nevalyashka</h2> is a platform as a service (PaaS) that enables
        developers to build, run, and operate applications entirely in the
        cloud.
      </div>

      <div>
        {isLoggedIn() ? (
          <p>
            You are logged in, so check your{' '}
            <Link to="/app/dashboard">
              Dashboard{' '}
              <span>
                <FiHexagon color="blue" size={25} />
              </span>
            </Link>
          </p>
        ) : (
          <p>
            <Link to="/app/login">Log in</Link> to use our cloud services
          </p>
        )}
      </div>
    </HomePageStyles>
  );
}
