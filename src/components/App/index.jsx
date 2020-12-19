import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../Home';
import Login from '../Login';
import SignIn from '../SignIn';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </Router>
);

export default App;
