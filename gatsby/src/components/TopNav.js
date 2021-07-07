import React from 'react';
import styled from 'styled-components';

// ICONS
import { HiUserCircle } from 'react-icons/hi';

const TopNavStyles = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px 0 0 0;
  padding: 8px 20px;
  max-height: 63px;
  border-bottom: 1px solid #e7ebf3;
  align-items: center;
  background: #f7f8fb;
  flex-shrink: 0;
  div.top-nav-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 1200px;
    flex: 1;
  }
  div.account {
    display: flex;
    align-items: center;
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

export default function TopNav() {
  return (
    <TopNavStyles>
      <div className="top-nav-wrapper">
        <div className="account">
          <HiUserCircle className="account-icon" color="blue" size={30} />
          <p>Personal</p>
        </div>
        <button>Create Instance +</button>
      </div>
    </TopNavStyles>
  );
}
