import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from '../../axios';
import PropTypes from 'prop-types';
import './style.scss';

const Login = ({ updateUserStatus }) => {
  const [buttonState, setButtonState] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const history = useHistory();

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    const user = formData;
    setButtonState(!buttonState);
    setErrorMessage('');
    axios.post('/sessions', { user }, { withCredentials: true })
      .then(res => {
        updateUserStatus(res.data.logged_in, res.data.user.admin);
        history.push('/');
      }).catch(err => {
        setButtonState(false);
        setErrorMessage('Your email and password doen\'t match.');
        console.error(err);
      })
  };
  
  return (
    <div className="login">
      {errorMessage.length > 0 && <h4>{errorMessage}</h4>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email:<br />
          <input type="email" name="email" id="email" placeholder="john@doe.com" required autoComplete="off" onChange={handleChange} />
        </label>
        <label htmlFor="password">
          Password:<br />
          <input type="password" name="password" id="password" required onChange={handleChange} />
        </label>
        <button type="submit" disabled={buttonState && true}>Login</button>
      </form>
      <Link to="/">Home</Link>
    </div>
  );
};

Login.propTypes = {
  updateUserStatus: PropTypes.func.isRequired,
}

export default Login;
