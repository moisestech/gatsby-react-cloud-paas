import React from 'react';
import { navigate } from '@reach/router';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'gatsby-plugin-firebase';
import { setUser, isLoggedIn } from '../utils/auth';

export default function Login() {
  if (isLoggedIn()) {
    navigate(`/app/dashboard`);
  }

  function getUiConfig(auth) {
    return {
      signInFlow: 'popup',
      signInOptions: [
        auth.GoogleAuthProvider.PROVIDER_ID,
        auth.EmailAuthProvider.PROVIDER_ID,
      ],
      // signInSuccessUrl: '/app/profile',
      callbacks: {
        signInSuccessWithAuthResult: (result) => {
          setUser(result.user);
          navigate('/app/dashboard');
        },
      },
    };
  }

  return (
    <div title="Log In">
      <p>Please sign-in to access to the private route:</p>
      {firebase && (
        <StyledFirebaseAuth
          uiConfig={getUiConfig(firebase.auth)}
          firebaseAuth={firebase.auth()}
        />
      )}
    </div>
  );
}
