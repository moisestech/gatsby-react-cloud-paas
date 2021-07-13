import React from 'react';

import styled from 'styled-components';

// ROUTING
// eslint-disable-next-line import/no-extraneous-dependencies
import { Router } from '@reach/router';

// PAGES
import DashboardPage from './dashboard';
import AccountPage from './account';
import BillingPage from './billing';

// COMPONENTS
import PrivateRoute from '../components/PrivateRoute';
import LoginPage from './login';

const AppStyles = styled.div`
  display: flex;
  flex: 1;
`;

export default function App() {
  return (
    <AppStyles>
      <Router basepath="/app">
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <PrivateRoute path="/account" component={AccountPage} />
        <PrivateRoute path="/billing" component={BillingPage} />
        <LoginPage path="/login" />
      </Router>
    </AppStyles>
  );
}
