import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="main-navbar">
      <div className="navbar-container">
        {/* This Link takes the user home when they click the title */}
        <Link to="/" className="navbar-brand">
          {/* You could put a VJTI logo here */}
          Committee Coordinator
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;