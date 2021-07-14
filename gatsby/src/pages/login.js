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
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-left: 15px;
  flex-direction: column;
  margin-top: 75px;
  z-index: 10;
  background-image: linear-gradient(to bottom, var(--blue), var(--pastelblue));
  background-color: #534292;
  .panel {
    height: unset;
    max-width: 430px;
    margin: 0 auto 20px;
    border-radius: 8px;
    padding: 50px 0;
    background-color: #fff;
    border: 1px solid transparent;
    -webkit-box-shadow: 0 1px 1px rgb(0 0 0 / 5%);
    box-shadow: 0 1px 1px rgb(0 0 0 / 5%);
  }
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
    <LoginPageStyles>
      <div className="panel">
        <h2>Login in to your account</h2>
        {firebase && (
          <StyledFirebaseAuth
            uiConfig={getUiConfig(firebase.auth)}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    </LoginPageStyles>
  );
}
