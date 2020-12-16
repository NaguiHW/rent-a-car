import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Admin from '../Admin';
import Home from '../Home';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" render={Home} />
      <Route exact path="/admin" render={Admin} />
    </Switch>
  </Router>
);

export default App;
