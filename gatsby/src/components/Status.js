import React from 'react';
import { Link, navigate } from '@reach/router';

// AUTH
import firebase from 'gatsby-plugin-firebase';
import { getUser, isLoggedIn, logout } from '../utils/auth';

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
      <p>
        Logged in as {displayName} ({email}
        )!
        {` `}
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
            logout(firebase).then(() => navigate(`/app/login`));
          }}
        >
          <u>Log out</u>
        </a>
      </p>
    );
  }

  return <div>{details}</div>;
}
