import React from 'react';
import { Link } from 'gatsby';

export default function Nav() {
  return (
    <nav>
      <ul>
        <li className="logo-header">
          <Link to="/">
            <span>☃️</span>
            <h1>Nevalyashka</h1>
            <p>Cloud Native PaaS</p>
          </Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/account">Account</Link>
        </li>
        <li>
          <Link to="/billing">Billing</Link>
        </li>
      </ul>
    </nav>
  );
}
