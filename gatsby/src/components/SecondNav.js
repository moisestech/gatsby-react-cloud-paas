import React from 'react';
import styled from 'styled-components';

// ICONS
import { HiUserCircle } from 'react-icons/hi';

const SecondNavStyles = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 100%;
  max-height: 63px;
  margin: 12px 0 0 0;
  padding: 0;
  border-bottom: 1px solid #e7ebf3;
  background: #f7f8fb;
  div.second-nav-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 1200px;
    flex: 1;
  }
  div.account {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex: 1;
    & p {
      font-size: 1.5rem;
    }
  }
  .account-icon {
    margin-right: 10px;
  }
  button:hover {
    background: rgba(121, 88, 159, 0.1);
  }
`;

export default function SecondNav() {
  return (
    <SecondNavStyles>
      <div className="second-nav-wrapper">
        <div className="account">
          <HiUserCircle className="account-icon" color="blue" size={30} />
          <p>Personal</p>
        </div>
        <button type="button">Create Instance +</button>
      </div>
    </SecondNavStyles>
  );
}
