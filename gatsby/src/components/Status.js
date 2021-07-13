import React from 'react';

import styled from 'styled-components';

// ROUTING
import { Link, navigate } from '@reach/router';

// AUTH
import firebase from 'gatsby-plugin-firebase';
import { getUser, isLoggedIn, logout } from '../utils/auth';

const StatusStyles = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  .status {
    display: flex;
    flex-direction: row;
    align-items: center;
    p {
      font-size: 1.4rem;
    }
  }
  .account-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 20px;
  }
  p {
    margin: 0;
    &:nth-child(2) {
      font-size: 1rem;
    }
  }
`;

export default function Status() {
  let details;

  if (!isLoggedIn()) {
    details = (
      <p>
        <Link to="/app/login">
          <u>Log in</u>
        </Link>
      </p>
    );
  } else {
    const { displayName, email } = getUser();

    details = (
      <div className="status">
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
            logout(firebase).then(() => navigate(`/app/login`));
          }}
        >
          <p>Log out</p>
        </a>
        <span className="account-info">
          <p>Logged in as {displayName}</p>
          <p>({email})</p>
        </span>
      </div>
    );
  }

  return <StatusStyles>{details}</StatusStyles>;
}
