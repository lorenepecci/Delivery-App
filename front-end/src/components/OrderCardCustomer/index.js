import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';
import './OrderCardCustomer.css';

export default function OrderCardCustomer({ order }) {
  const history = useHistory();
  return (
    <button
      className="order-card-customer-container-button"
      type="button"
      onClick={ () => history.push(`orders/${order.id}`) }
    >
      <div className="order-card-customer-container">
        <div className="order-card-customer-middle">
          <div
            data-testid={ `seller_orders__element-order-id-${order.id}` }
            className="order-card-customer-pedido"
          >
            <p>Pedido</p>
            {`000${order.id}`}
          </div>

          <div className="order-card-customer-status">
            <p
              data-testid={ `seller_orders__element-delivery-status-${order.id}` }
              className="p-status"
            >
              {order.status}
            </p>
          </div>
          <div className="order-card-customer-dataTotal">
            <div
              data-testid={ `seller_orders__element-order-date-${order.id}` }
              className="order-card-customer-data"
            >
              { `${new Date(order.saleDate).getUTCDate()}
            / ${new Date(order.saleDate).getMonth()}
            / ${new Date(order.saleDate).getYear()}` }
            </div>
            <div
              data-testid={ `seller_orders__element-card-price-${order.id}` }
              className="order-card-customer-total"
            >
              {order.totalPrice}
            </div>

          </div>
        </div>
        <div
          data-testid={ `seller_orders__element-card-address-${order.id}` }
          className="order-card-address"
        >
          {order.deliveryAddress}
        </div>
      </div>
    </button>
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
