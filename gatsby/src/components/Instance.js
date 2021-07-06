import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const InstanceStyles = styled.li`
  padding: 20px 0;
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1200px;
  margin-left: auto !important;
  margin-right: auto !important;
  a {
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
  }
  a span {
    font-size: 3rem;
    padding: 0 15px 0 0;
  }
  a div {
    font-size: 1.5rem;
  }
  a.instance-settings {
    display: flex;
    flex-direction: flex-end;
    align-items: center;
  }
  ul {
    display: flex;
    flex-direction: flex-end;
    align-items: center;
    list-style: none;
    padding: 0;
  }
  li {
    font-size: 1.4rem;
    list-style: none;
    padding-left: 15px;
  }
`;

export default function Instance() {
  return (
    <InstanceStyles>
      <Link to="/dashboard">
        <span>⚙️</span>
        <div>Instance I</div>
      </Link>
      <Link className="instance-settings" to="/instance/settings">
        <ul>
          <li>Describe</li>
          <li>Stop</li>
          <li>United States</li>
        </ul>
      </Link>
    </InstanceStyles>
  );
}
