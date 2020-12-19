import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import './style.scss';

const NavBar = ({ userStatus, updateUserStatus, admin }) => {
  const history = useHistory();
  
  const logout = () => {
    axios.delete('https://db-car.herokuapp.com/logout', { withCredentials: true })
      .then(res => {
        updateUserStatus(!res.data.logged_out, res.data.logged_out);
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
              <Link to="/myReservations">My Reservations</Link>
              {
                admin && (
                  <>
                    <Link to="/manageCars">Manage Cars</Link>
                  </>
                )
              }
              <button type="button" onClick={logout}>Log Out</button>
            </>
          ) : (
            <>
              <Link to="/login">Log In</Link>
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
  admin: PropTypes.bool.isRequired,
  updateUserStatus: PropTypes.func.isRequired,
};

export default NavBar;
