import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Home from '../Home';
import Login from '../Login';
import ManageCars from '../ManageCars';
import NavBar from '../NavBar';
import SignIn from '../SignIn';

const App = () => {
  const [userStatus, setUserStatus] = useState(false);
  const [admin, setAdmin] = useState(false);

  const updateUserStatus = () => {
    setUserStatus(false);
  };

  useEffect(() => {
    axios.get('https://serene-bayou-97137.herokuapp.com/logged_in', { withCredentials: true })
      .then(res => {
        setUserStatus(res.data.logged_in);
        setAdmin(res.data.user.admin);
        console.log(res.data);
      }).catch(err => {
        console.error(err);
      })
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <>
            <NavBar userStatus={userStatus} admin={admin} updateUserStatus={updateUserStatus} />
            <Home userStatus={userStatus} />
          </>
        </Route>
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/manageCars" component={ManageCars} />
      </Switch>
    </Router>
  );
};

export default App;
