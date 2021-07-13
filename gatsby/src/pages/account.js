import React from 'react';
import styled from 'styled-components';
import { getUser } from '../utils/auth';

const AccountPageStyles = styled.div`
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
    <AccountPageStyles>
      <p>Account Page 👤</p>
      <h1>Your profile</h1>
      <ul>
        <li>Name: {getUser().name}</li>
        <li>E-mail: {getUser().email}</li>
      </ul>
    </AccountPageStyles>
  );
}
