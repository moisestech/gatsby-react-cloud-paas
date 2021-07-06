import React from 'react';
import styled from 'styled-components';

import InstanceList from '../components/InstanceList';
import TopNav from '../components/TopNav';

const DashBoardPageStyles = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  background: cyan;
`;

export default function DashBoardPage() {
  return (
    <DashBoardPageStyles>
      <TopNav />
      <InstanceList />
    </DashBoardPageStyles>
  );
}
