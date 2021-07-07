import React from 'react';
import styled from 'styled-components';

import InstanceList from '../components/InstanceList';
import TopNav from '../components/TopNav';

const DashBoardPageStyles = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-top: 75px;
  z-index: 10;
`;

export default function DashBoardPage() {
  return (
    <DashBoardPageStyles>
      <TopNav />
      <InstanceList />
    </DashBoardPageStyles>
  );
}
