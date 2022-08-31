import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import Context from '../../context/Context';
import './OrderCard.css';

export default function OrderCard({ index, order }) {
  const { setBuyList, buyList } = useContext(Context);
  const removeItem = () => {
    const newList = buyList.filter((prod) => prod.id !== order.id);
    console.log(newList);
    setBuyList(newList);
  };

  return (
    <div className="order-card-container">
      <span
        data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
      >
        { index + 1 }
      </span>
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
