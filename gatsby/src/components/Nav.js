import React from 'react';
import { Link } from 'gatsby';

import styled from 'styled-components';

// COMPONENTS
import Status from './Status';

// UTILS
import { isLoggedIn } from '../utils/auth';

// DESIGN
import udacity from '../assets/images/udacity.svg';
import Logo from './Logo';

const NavStyles = styled.nav`
  position: fixed;
  top: 0;
  padding: 0 15px;
  height: 77px;
  width: calc(100vw - 27px);
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 10%);
  border-top: 1px solid #eef1f6;
  background: white;
  z-index: 15;
  &::before {
    background: var(--bordergray);
    content: '';
    width: 100vw;
    position: absolute;
    height: 1px;
    top: 25px;
    left: 0;
  }
  &::after {
    background: linear-gradient(to right, blue, #8ecdea);
    content: '';
    width: 100vw;
    position: absolute;
    height: 3px;
    top: 75px;
    left: 0;
  }
  ul {
    margin: 0;
    padding: 0;
    text-align: center;
    list-style: none;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-end;
  }
  li {
    position: relative;
  }
  a {
    font-size: 1.4rem;
    text-decoration: none;
    padding: 7px;
    &:hover {
      color: var(--blue);
    }
  }
  .organization {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 25px;
    width: 100%;
    font-size: 1.2rem;
    color: var(--gray);
    background: white;
    & img {
      width: 15px;
      margin-right: 7px;
    }
  }
`;

function MainNav() {
  return (
    <>
      <li>
        <Link to="/app/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/app/account">Account</Link>
      </li>
      <li>
        <Link to="/app/billing">Billing</Link>
      </li>
    </>
  );
}

export default function Nav() {
  return (
    <NavStyles>
      <div className="organization">
        <img alt="scholarship-logo" src={udacity} />
        <span>Udacity · SUSE Cloud-Native Foundation Scholarship</span>
      </div>

      <ul>
        <Logo />

        {isLoggedIn() ? (
          <>
            <MainNav />
            <Status />
          </>
        ) : null}
      </ul>
    </NavStyles>
  );
}
