import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login" component={ Login } />
        <Route exact path="/register" component={ Register } />
        {/*  <Route exact path="/customer/products" component={ Products } /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
