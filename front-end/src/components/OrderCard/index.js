import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import Context from '../../context/Context';
import './OrderCard.css';

export default function OrderCard({ index, order }) {
  const { setBuyList, buyList, setTotalPrice } = useContext(Context);
  const removeItem = () => {
    const newList = buyList.filter((prod) => prod.id !== order.id);
    setBuyList(newList);
    const newSoma = newList.reduce((acc, cur) => {
      const result = acc + (cur.quantity * Number(cur.price));
      return result;
    }, 0);
    setTotalPrice(newSoma.toFixed(2));
  };

  return (
    <tr className="order-card-container">
      <td
        data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
      >
        { index + 1 }
      </td>
      <td data-testid={ `customer_checkout__element-order-table-name-${index}` }>
        { order.name }
      </td>
      <td data-testid={ `customer_checkout__element-order-table-quantity-${index}` }>
        { order.quantity }
      </td>
      <td data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }>
        {` ${Number(order.price).toLocaleString('pt-BR', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })} `}
      </td>
      <td data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }>
        {` ${Number((order.quantity * order.price).toFixed(2)).toLocaleString('pt-BR', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })} `}
      </td>
      <td>
        <button
          className="button-remove-item"
          type="button"
          onClick={ removeItem }
          data-testid={ `customer_checkout__element-order-table-remove-${index}` }
        >
          Remover
        </button>
      </td>
    </tr>
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
