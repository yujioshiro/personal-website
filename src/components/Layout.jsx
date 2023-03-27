import React from 'react';
import NavBar from './NavBar';
import './../../static/stylesheets/pico-master/css/pico.css';
// import './../../static/stylesheets/examples-master/bootstrap-grid/css/pico-bootstrap-grid.css';


export default function Layout({ children }) {
  return (
          
      <main class="container">
        <NavBar />
        {children}
      </main>
  );
}
