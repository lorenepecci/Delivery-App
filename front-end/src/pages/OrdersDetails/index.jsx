import React from 'react';
import { useParams } from 'react-router-dom';
import FinalizeOrder from '../../components/FinalizeOrders';
import Navbar from '../../components/Navbar';
import './OrdersDetails.css';

export default function OrdersDetails() {
  const { id } = useParams();
  const size = 4;
  return (
    <div className="container-orders-details">
      <Navbar />
      <h3>Detalhe do pedido</h3>
      <div>
        <span>
          PEDIDO:
          {id.padStart(size, '0')}
          ;
        </span>
        <span>P.Vend: CICRANA</span>
        <span>07/09/2022</span>
        <span>ENTREGUE</span>
        <button type="button">MARCAR COMO ENTREGUE</button>
      </div>
      <div className="addressDelivery">
        <FinalizeOrder />
      </div>
    </div>
  );
}
