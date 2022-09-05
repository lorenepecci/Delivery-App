import React from 'react';
import AddressDelivery from '../../components/AddressDelivery';
import FinalizeOrders from '../../components/FinalizeOrders';
import Navbar from '../../components/Navbar';
import './Checkout.css';

export default function Checkout() {
  return (
    <div className="container-checkout">
      <Navbar />
      <div className="addressDelivery">
        <FinalizeOrders />
        <AddressDelivery />
      </div>
    </div>
  );
}
