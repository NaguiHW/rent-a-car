import React from 'react';
import NavBar from '../NavBar';

const SignIn = () => (
  <div className="signin">
    <NavBar />
    <div className="content">
      <form>
        <label htmlFor="first_name">
          First Name:
          <input type="text" name="first_name" id="first_name" placeholder="John" required autoComplete="off" />
        </label>
        <label htmlFor="last_name">
          Last Name:
          <input type="text" name="last_name" id="last_name" placeholder="Doe" required autoComplete="off" />
        </label>
        <label htmlFor="email">
          Email:
          <input type="email" name="email" id="email" placeholder="john@doe.com" required autoComplete="off" />
        </label>
        <label htmlFor="password">
          Password:
          <input type="password" name="password" id="password" placeholder="john@doe.com" required />
        </label>
        <label htmlFor="password_confirmation">
          Repeat Password:
          <input type="password" name="password_confirmation" id="password_confirmation" placeholder="john@doe.com" required />
        </label>
        <button type="button">Create Account</button>
      </form>
    </div>
  </div>
);

export default SignIn;
