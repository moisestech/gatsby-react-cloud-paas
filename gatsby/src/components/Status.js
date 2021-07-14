import React from 'react';

import styled from 'styled-components';

// ROUTING
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link, navigate } from '@reach/router';

// AUTH
import firebase from 'gatsby-plugin-firebase';
import { getUser, isLoggedIn, logout } from '../utils/auth';

const StatusStyles = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  .status {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100%;
    p {
      font-size: 1.4rem;
    }
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      vertical-align: middle;
      margin: 0;
      padding: 0 7px;
    }
  }
  .account-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 10px 0 20px;
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
          Log out
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
