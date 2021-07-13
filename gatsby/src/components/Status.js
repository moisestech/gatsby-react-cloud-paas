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
      <div>
        <p>
          Logged in as {displayName} ({email})!
        </p>
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
            logout(firebase).then(() => navigate(`/app/login`));
          }}
        >
          <p>Log out</p>
        </a>
      </div>
    );
  }

  return <div>{details}</div>;
}
