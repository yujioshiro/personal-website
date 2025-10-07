import React from 'react';
import { Link } from 'gatsby';

export default function NavBar() {
  return (
    <header class="container">
    <nav>
      <ul>
        <li id="main-name">
          <Link to="/" className="text-link" activeClassName="active">home</Link>
        </li>
        <li id="mobile-name">
          <Link to="/" className="text-link" activeClassName="active">home</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/resume" className="text-link" activeClassName="active">resume</Link>
        </li>
      </ul>
    </nav>
    </header>

  );
}
