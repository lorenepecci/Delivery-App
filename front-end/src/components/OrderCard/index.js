import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

export default function OrderCard({ index, order }) {
  const removeItem = () => {
    // const ordersList = JSON.parse(localStorage.getItem('buyList'));
  };

  return (
    <div>
      <span>{ index + 1 }</span>
      <span data-testid={ `customer_checkout__element-order-table-name-${index}` }>
        { order.name }
      </span>
      <span data-testid={ `customer_checkout__element-order-table-quantity-${index}` }>
        { order.quantity }
      </span>
      <span data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }>
        { order.price }
      </span>
      <span data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }>
        { (order.quantity * order.price).toFixed(2) }
      </span>
      <button
        type="button"
        onClick={ removeItem }
        data-testid={ `customer_checkout__element-order-table-remove-${index}` }
      >
        Remover
      </button>
    </div>
  );
}

OrderCard.propTypes = {
  index: PropTypes.number.isRequired,
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};
