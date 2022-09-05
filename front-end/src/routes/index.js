import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Checkout from '../pages/Checkout';
import Login from '../pages/Login';
import Orders from '../pages/Orders';
import OrdersDetails from '../pages/OrdersDetails';
import Products from '../pages/Products';
import Register from '../pages/Register';
import SellerOrders from '../pages/SellerOrders';
import AdminManage from '../pages/AdminManage';

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
        <Route exact path="/customer/orders/:id" component={ OrdersDetails } />
        <Route exact path="/seller/orders" component={ SellerOrders } />
        <Route exact path="/admin/manage" component={ AdminManage } />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
