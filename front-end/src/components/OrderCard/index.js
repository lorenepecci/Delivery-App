import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../../context/Context';
import './OrderCard.css';

export default function OrderCard({ index, order }) {
  const { setBuyList, buyList, setTotalPrice } = useContext(Context);
  const { location: { pathname } } = useHistory();
  const removeItem = () => {
    const newList = buyList.filter((prod) => prod.id !== order.id);
    setBuyList(newList);
    const newSoma = newList.reduce((acc, cur) => {
      const result = acc + (cur.quantity * Number(cur.price));
      return result;
    }, 0);
    setTotalPrice(newSoma.toFixed(2));
  };

  let prefix;

  if (pathname.includes('checkout')) prefix = 'customer_checkout__';
  else if (pathname.includes('customer/orders')) prefix = 'customer_order_details__';
  else if (pathname.includes('seller/orders/')) prefix = 'seller_order_details__';

  return (
    <tr className="order-card-container">
      <td
        data-testid={ `${prefix}element-order-table-item-number-${index}` }
      >
        { index + 1 }
      </td>
      <td data-testid={ `${prefix}element-order-table-name-${index}` }>
        { order.name }
      </td>
      <td data-testid={ `${prefix}element-order-table-quantity-${index}` }>
        { order.quantity }
      </td>
      <td data-testid={ `${prefix}element-order-table-unit-price-${index}` }>
        {` ${Number(order.price).toLocaleString('pt-BR', {
          currency: 'BRL',
          style: 'currency',
        })} `}
      </td>
      <td data-testid={ `${prefix}element-order-table-sub-total-${index}` }>
        {` ${Number((order.quantity * order.price).toFixed(2)).toLocaleString('pt-BR', {
          currency: 'BRL',
          style: 'currency',
        })} `}
      </td>
      {pathname.includes('checkout') ? (
        <button
          type="button"
          onClick={ removeItem }
          data-testid={ `${prefix}element-order-table-remove-${index}` }
        >
          Remover
        </button>) : null}
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
