import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';
import './OrderCardCustomer.css';

export default function OrderCardCustomer({ order }) {
  const history = useHistory();

  const dataAtualFormatada = (dateString) => {
    const data = new Date(dateString);
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    const ano = data.getFullYear(); return `${dia}/${mes}/${ano}`;
  };

  return (
    <div
      className="order-card-customer-container-button"
      onClick={ () => history.push(`orders/${order.id}`) }
      onKeyPress={ () => history.push(`orders/${order.id}`) }
      role="button"
      tabIndex="0"
    >
      <div className="order-card-customer-middle">
        <div
          data-testid={ `customer_orders__element-order-id-${order.id}` }
          className="order-card-customer-pedido"
        >
          <p>Pedido</p>
          {`000${order.id}`}
        </div>
      </div>
      <div className="order-card-customer-status">
        <p
          data-testid={ `customer_orders__element-delivery-status-${order.id}` }
          className={ `p-status ${order.status === 'Preparando' ? 'preparando' : null}
          ${order.status === 'Entregue' ? 'entregue' : null}` }
        >
          {order.status}
        </p>
      </div>

      <div className="order-card-customer-dataTotal">
        <div
          data-testid={ `customer_orders__element-order-date-${order.id}` }
          className="order-card-customer-data"
        >
          {dataAtualFormatada(order.saleDate) }
        </div>
        <div
          data-testid={ `customer_orders__element-card-price-${order.id}` }
          className="order-card-customer-total"
        >
          {` R$ ${Number(order.totalPrice).toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}`}
        </div>

      </div>

      <div
        data-testid={ `customer_orders__element-card-address-${order.id}` }
        className="order-card-address"
      >
        {order.deliveryAddress}
      </div>

    </div>
  );
}

OrderCardCustomer.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    saleDate: PropTypes.string.isRequired,
    totalPrice: PropTypes.number.isRequired,
    deliveryAddress: PropTypes.string.isRequired,
  }).isRequired,
};
