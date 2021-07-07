import React from 'react';
import styled from 'styled-components';
import Instance from './Instance';

const InstanceListStyles = styled.ul`
  width: 100vw;
  padding: 0;
  z-index: 5;
`;

export default function InstanceList() {
  const instancesArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  return (
    <InstanceListStyles>
      {instancesArr.map((inst, index) => (
        <Instance index={index} />
      ))}
    </InstanceListStyles>
  );
}
