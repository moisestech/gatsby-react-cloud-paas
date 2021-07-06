import React from 'react';
import styled from 'styled-components';
import Instance from './Instance';

const InstanceListStyles = styled.ul`
  border-bottom: 1px solid #eef1f6;
  padding: 0;
  &:hover {
    background-color: #fbfbfd;
  }
`;

export default function InstanceList() {
  return (
    <InstanceListStyles>
      <Instance />
    </InstanceListStyles>
  );
}
