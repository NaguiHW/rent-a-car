import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import './style.scss';

const SignIn = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirmation: '',
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
    const { password, password_confirmation } = formData;
    if (password === password_confirmation) {
      const user = formData;
  
      axios.post('https://serene-bayou-97137.herokuapp.com/registrations', { user }, { withCredentials: true })
        .then(res => {
          history.push('/');
        }).catch(err => {
          console.error(err);
        })
    } else {
      alert('Password and repeat password doesn\'t match.')
    }
  };

  return (
    <div className="signin">
      <form onSubmit={handleSubmit}>
        <label htmlFor="first_name">
          First Name:
          <input type="text" name="first_name" id="first_name" placeholder="John" required autoComplete="off" onChange={handleChange} />
        </label>
        <label htmlFor="last_name">
          Last Name:
          <input type="text" name="last_name" id="last_name" placeholder="Doe" required autoComplete="off" onChange={handleChange} />
        </label>
        <label htmlFor="email">
          Email:
          <input type="email" name="email" id="email" placeholder="john@doe.com" required autoComplete="off" onChange={handleChange} />
        </label>
        <label htmlFor="password">
          Password:
          <input type="password" name="password" id="password" required onChange={handleChange} />
        </label>
        <label htmlFor="password_confirmation">
          Repeat Password:
          <input type="password" name="password_confirmation" id="password_confirmation" required onChange={handleChange} />
        </label>
        <button type="submit">Create Account</button>
      </form>
      <Link to="/">Home</Link>
    </div>
  );
};

export default SignIn;
