import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FinalizeOrder from '../../components/FinalizeOrders';
import Navbar from '../../components/Navbar';
import { getOrdersCustomer, updateOrdersCustomer } from '../../services/api';
import './OrdersDetails.css';
import formatDate from '../../helper/convertData';

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
      await updateOrdersCustomer({ id, status: 'entregue' });
      setOrderDetails({ ...orderDetails, status: 'entregue' });
    } catch (error) {
      console.error(error);
    }
  };

  const testId = 'customer_order_details__element-order-details-label-delivery-status';

  const size = 4;
  return (
    <div className="container-orders-details">
      <Navbar />
      <h3>Detalhe do pedido</h3>
      <div>
        <span data-testid="customer_order_details__element-order-details-label-order-id">
          PEDIDO:
          {id.padStart(size, '0')}
          ;
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
          {formatDate(orderDetails.saleDate)}
        </span>
        <span
          data-testid={ testId }
        >
          {orderDetails.status}
        </span>
        <button
          data-testid="customer_order_details__button-delivery-check"
          type="button"
          onClick={ handleClick }
        >
          MARCAR COMO ENTREGUE
        </button>
      </div>
      <div className="addressDelivery">
        <FinalizeOrder />
      </div>
    </div>
  );
}
