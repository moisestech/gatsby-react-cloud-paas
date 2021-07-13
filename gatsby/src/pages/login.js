import React from 'react';

import styled from 'styled-components';

// ROUTIN
import { navigate } from '@reach/router';

// AUTH
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'gatsby-plugin-firebase';
import { setUser, isLoggedIn } from '../utils/auth';

const LoginPageStyles = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-left: 15px;
  flex-direction: column;
  margin-top: 75px;
  z-index: 10;
  background: red;
`;

export default function LoginPage() {
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
    <LoginPageStyles title="Log In">
      <p>Please sign-in to access to the private route:</p>
      {firebase && (
        <StyledFirebaseAuth
          uiConfig={getUiConfig(firebase.auth)}
          firebaseAuth={firebase.auth()}
        />
      )}
    </LoginPageStyles>
  );
}
