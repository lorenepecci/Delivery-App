import React from 'react';
import RegisterUser from '../../components/RegisterUser';
import NavBar from '../../components/Navbar';
import './Admin.css';

export default function Admin() {
  return (
    <div className="container-admin">
      <div className="addressDelivery">
        <NavBar />
        <RegisterUser />
      </div>
    </div>
  );
}
