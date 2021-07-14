import React from 'react';

import styled from 'styled-components';

// ROUTING
import { Link } from 'gatsby';

// ICONS
import { FiHexagon } from 'react-icons/fi';

const InstanceStyles = styled.li`
  height: 53px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0;
  border-bottom: 1px solid --var(bordergray);
  &:hover {
    background-color: #fbfbfd;
  }
  div.inst-wrapper {
    display: flex;
    flex: 1;
    flex-direction: row;
    max-width: 1200px;
  }
  a.inst-id-wrapper {
    align-items: center;
    div {
      align-items: flex-start;
    }
  }
  a {
    height: 100%;
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
    display: flex;
    align-items: center;
  }
  a div {
    font-size: 1.5rem;
  }
  a.inst-settings {
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
    margin: 0;
  }
  li {
    font-size: 1.4rem;
    list-style: none;
    padding-left: 10px;
    display: flex;
  }
`;

export default function Instance({ index }) {
  return (
    <InstanceStyles>
      <div className="inst-wrapper">
        <Link className="inst-id-wrapper" to="/instance">
          <span>
            <FiHexagon color="blue" size={25} />
          </span>
          <div>{`instance-${index}`}</div>
        </Link>
        <Link className="inst-settings" to="/instance/settings">
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
