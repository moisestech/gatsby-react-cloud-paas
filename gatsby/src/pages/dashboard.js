import React from 'react';
import styled from 'styled-components';

// COMPONENTS
import InstanceList from '../components/InstanceList';
import TopNav from '../components/TopNav';

const DashboardPageStyles = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-top: 75px;
  z-index: 10;
`;

export default function DashboardPage() {
  return (
    <DashboardPageStyles>
      <TopNav />
      <InstanceList />
    </DashboardPageStyles>
  );
}
