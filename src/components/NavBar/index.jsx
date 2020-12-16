import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const NavBar = () => (
  <nav className="navbar">
    <div className="logo">
      <Link to="/">RentACar</Link>
    </div>
    <div className="options">
      <Link to="/">Make a Reservation</Link>
      <Link to="/">Profile</Link>
    </div>
  </nav>
);

export default NavBar;
