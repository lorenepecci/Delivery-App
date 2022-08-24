import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/login" component={ Login } />
        <Route exact path="/register" component={ Register } />
        {/* <Route exact path="/customer/products" component={} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
