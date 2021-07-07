import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const InstanceStyles = styled.li`
  padding: 20px 0;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin: 0;
  border-bottom: 1px solid #eef1f6;
  &:hover {
    background-color: #fbfbfd;
  }
  div {
    display: flex;
    flex: 1;
    flex-direction: row;
    max-width: 1200px;
  }
  a {
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    margin: 0 20px;
    &:nth-child(2) {
      flex: unset;
    }
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
    padding-left: 10px;
    display: block;
  }
`;

export default function Instance({ index }) {
  return (
    <InstanceStyles>
      <div>
        <Link to="/dashboard">
          <span>⚙️</span>
          <div>{`instance-${index}`}</div>
        </Link>
        <Link className="instance-settings" to="/instance/settings">
          <ul>
            <li>Describe</li>
            <li>·</li>
            <li>Stop</li>
            <li>·</li>
            <li>US East</li>
          </ul>
        </Link>
      </div>
    </InstanceStyles>
  );
}
