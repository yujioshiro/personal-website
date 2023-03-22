import React from 'react';
import { Link } from 'gatsby';
import '../../static/stylesheets/navbar.css';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li id="main-name">
          <Link to="/">yuji oshiro</Link>
        </li>
        <li>
          <Link to="/projects">projects</Link>
        </li>
        <li>
          <Link to="/resume">resume</Link>
        </li>
        <li>
          <Link to="/blog">blog</Link>
        </li>
        <li>
          <Link to="/contact">contact</Link>
        </li>
        <li>
          <Link to="/playlists">playlists</Link>
        </li>
      </ul>
    </nav>
  );
}
