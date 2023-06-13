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
        {/* <li>
          <Link to="/projects" className="text-link" activeClassName="active">projects</Link>
        </li> */}
        <li>
          <Link to="/resume" className="text-link" activeClassName="active">resume</Link>
        </li>
        {/* <li>
          <Link to="/blog" className="text-link" activeClassName="active">blog</Link>
        </li> */}
        <li class="hide-on-small">
          <Link to="/contact" className="text-link" activeClassName="active">contact</Link>
        </li>
      </ul>
    </nav>
    </header>

  );
}
