import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import './style.scss';

const Login = () => {
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

    axios.post('https://serene-bayou-97137.herokuapp.com/sessions', { user }, { withCredentials: true })
      .then(res => {
        history.push('/');
      }).catch(err => {
        console.error(err);
      })
  };
  
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email:<br />
          <input type="email" name="email" id="email" placeholder="john@doe.com" required autoComplete="off" onChange={handleChange} />
        </label>
        <label htmlFor="password">
          Password:<br />
          <input type="password" name="password" id="password" required onChange={handleChange} />
        </label>
        <button type="submit">Login</button>
      </form>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Login;