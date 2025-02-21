import React from 'react';
import NavBar from './NavBar';
import './../../static/stylesheets/pico-master/css/pico.css';
import './../../static/stylesheets/my.css';

export default function Layout({ children }) {
  return ( 
      <main class="container">
        <NavBar />
        {children}
      </main>
  );
}
