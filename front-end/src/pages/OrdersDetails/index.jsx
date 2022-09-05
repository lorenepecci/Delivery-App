import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FinalizeOrders from '../../components/FinalizeOrders';
import Navbar from '../../components/Navbar';
import dataAtualFormatada from '../../helper/convertData';
import { getOrdersCustomer, updateOrdersCustomer } from '../../services/api';
import './OrdersDetails.css';

export default function OrdersDetails() {
  const [orderDetails, setOrderDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const response = await getOrdersCustomer(id);
      setOrderDetails(response);
    })();
  }, [id]);

  const handleClick = async () => {
    try {
      await updateOrdersCustomer({ id, status: 'Entregue' });
      setOrderDetails({ ...orderDetails, status: 'Entregue' });
    } catch (error) {
      console.error(error);
    }
  };

  const testId = 'customer_order_details__element-order-details-label-delivery-status';

  const size = 4;
  return (
    <div className="container-orders-details">
      <Navbar />
      <div className="container-middle-orders">
        <h2>Detalhe do pedido</h2>
        <div className="title-order-details">
          <span
            data-testid="customer_order_details__element-order-details-label-order-id"
          >
            PEDIDO:
            {id.padStart(size, '0')}
          </span>
          <span
            data-testid="customer_order_details__element-order-details-label-seller-name"
          >
            P.Vend:
            {' '}
            {orderDetails.seller && orderDetails.seller.name}
          </span>
          <span
            data-testid="customer_order_details__element-order-details-label-order-date"
          >
            {dataAtualFormatada(orderDetails.saleDate)}
          </span>
          <span
            data-testid={ testId }
            className={ `span-status ${
              orderDetails.status === 'Preparando' ? 'preparando' : null
            }
          ${orderDetails.status === 'Entregue' ? 'entregue' : null}` }
          >
            {orderDetails.status}
          </span>
          <button
            data-testid="customer_order_details__button-delivery-check"
            type="button"
            className="button-order-details"
            onClick={ handleClick }
          >
            MARCAR COMO ENTREGUE
          </button>
        </div>
      </div>

      <div className="addressDelivery">
        <FinalizeOrders />
      </div>
    </div>
  );
}
