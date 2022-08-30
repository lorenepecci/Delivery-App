import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Checkout from '../pages/Checkout';
import Login from '../pages/Login';
import Orders from '../pages/Orders';
import Products from '../pages/Products';
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
        <Route exact path="/customer/products" component={ Products } />
        <Route exact path="/customer/checkout" component={ Checkout } />

        <Route exact path="/customer/orders" component={ Orders } />

      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
