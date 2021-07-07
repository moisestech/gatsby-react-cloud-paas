import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const TopNavStyles = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0;
  margin-right: 0;
  padding: 12px 20px 10px;
  max-height: 63px;
  margin-top: 2px;
  border-bottom: 1px solid #e7ebf3;
  align-items: center;
  background: #f7f8fb;
  flex-shrink: 0;
  div.top-nav-wrapper {
    display: flex;
    flex-direction: row;
    max-width: 1200px;
    flex: 1;
  }
  div.account {
    display: flex;
    align-items: center;
    flex: 1;
    font-size: 1.7rem;
  }
  button:hover {
    background: rgba(121, 88, 159, 0.1);
  }
`;

export default function TopNav() {
  return (
    <TopNavStyles>
      <div className="top-nav-wrapper">
        <div className="account">Personal</div>
        <button>Create Instance +</button>
      </div>
    </TopNavStyles>
  );
}
