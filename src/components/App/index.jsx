import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import EditCars from '../EditCars';
import Home from '../Home';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/edit-cars" component={EditCars} />
    </Switch>
  </Router>
);

export default App;
