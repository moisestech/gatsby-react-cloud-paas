import React from 'react';

// ROUTING
import { Router } from '@reach/router';

// PAGES
import DashboardPage from './dashboard';
import AccountPage from './account';
import BillingPage from './billing';

// COMPONENTS
import PrivateRoute from '../components/PrivateRoute';
import Login from '../components/Login';

export default function App() {
  return (
    <Router basepath="/app">
      <PrivateRoute path="/dashboard" component={DashboardPage} />
      <PrivateRoute path="/account" component={AccountPage} />
      <PrivateRoute path="/billing" component={BillingPage} />
      <Login path="/login" />
    </Router>
  );
}
