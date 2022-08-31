import React from 'react';
import AddressDelivery from '../../components/AddressDelivery';
import FinalizeOrder from '../../components/FinalizeOrders';
import Navbar from '../../components/Navbar';
import './Checkout.css';

export default function Checkout() {
  return (
    <div className="container-checkout">
      <Navbar />
      <div className="addressDelivery">
        <FinalizeOrder />
        <AddressDelivery />
      </div>
    </div>
  );
}
