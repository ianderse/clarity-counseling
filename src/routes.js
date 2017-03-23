import React from 'react';
import { Router, Route } from 'react-router';

import App from './App';
import About from './Views/About/about';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <Route path="/about" component={About} />
    </Route>
  </Router>
);

export default Routes;
