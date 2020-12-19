import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.scss';

const NavBar = ({ userStatus }) => (
  <nav className="navbar">
    <div className="logo">
      <Link to="/">RentACar</Link>
    </div>
    <div className="options">
      {
        userStatus
        ? (
          <>
            <Link to="/">Make a Reservation</Link>
            <Link to="/">Profile</Link>
          </>
        ) : (
          <>
            <Link to="/">Log In</Link>
            <Link to="/signin">Create Account</Link>
          </>
        )
      }
    </div>
  </nav>
);

NavBar.propTypes = {
  userStatus: PropTypes.bool.isRequired,
};

export default NavBar;
