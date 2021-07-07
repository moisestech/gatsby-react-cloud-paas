import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Logo from './Logo';

const NavStyles = styled.nav`
  background: white;
  height: 50px;
  margin: 25px 0 0 0;
  padding: 0 15px;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 10%);
  border-top: 1px solid #eef1f6;
  width: 100%;
  top: 0;
  z-index: 15;
  position: fixed;
  ul {
    margin: 0;
    padding: 0;
    text-align: center;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  a {
    font-size: 1.4rem;
    text-decoration: none;
    padding: 5px;
    &: hover {
      color: var(--blue);
    }
  }
  ::after {
    background: linear-gradient(to right, blue, #8ECDEA);
    content: '';
    width: 100%;
    position: absolute;
    height: 3px;
    left: 0;
`;

export default function Nav() {
  return (
    <NavStyles>
      <ul>
        <Logo />
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/account">Account</Link>
        </li>
        <li>
          <Link to="/billing">Billing</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
    </NavStyles>
  );
}
