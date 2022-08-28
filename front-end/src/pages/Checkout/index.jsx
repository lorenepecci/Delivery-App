import React from 'react';
import AddressDelivery from '../../components/addressDelivery';
import FinalizeOrder from '../../components/finalizeOrders';
import './Checkout.css';

export default function Checkout() {
  return (
    <div className="container-checkout">
      {/*  <Navbar /> */}
      <div className="addressDelivery">
        <FinalizeOrder />
        <AddressDelivery />
      </div>

    </div>
  );
}
