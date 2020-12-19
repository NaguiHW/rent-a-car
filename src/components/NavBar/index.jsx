import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import './style.scss';

const NavBar = ({ userStatus, updateUserStatus }) => {
  const history = useHistory();
  
  const logout = () => {
    axios.delete('https://serene-bayou-97137.herokuapp.com/logout', { withCredentials: true })
      .then(res => {
        updateUserStatus();
        history.push('/');
      }).catch(err => {
        console.error(err);
      });
  };
  return (
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
              <Link to="/">My Rservations</Link>
              <button type="button" onClick={logout}>Log Out</button>
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
};

NavBar.propTypes = {
  userStatus: PropTypes.bool.isRequired,
  updateUserStatus: PropTypes.func.isRequired,
};

export default NavBar;
