import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../../context/Context';
import OrderCard from '../OrderCard';
import './FinalizeOrder.css';

export default function FinalizeOrders() {
  const { buyList, totalPrice } = useContext(Context);
  const { location: { pathname } } = useHistory();
  let prefix;

  if (pathname.includes('checkout')) prefix = 'customer_checkout__';
  else if (pathname.includes('customer/orders')) prefix = 'customer_order_details__';
  else if (pathname.includes('seller/orders/')) prefix = 'seller_order_details__';
  return (
    <div>
      <h2>Finalizar Pedido</h2>
      <div className="container-finalize-order">
        <div
          className="container-finalize-order-title"
        >
          <span>Item</span>
          <span>Descrição</span>
          <span>Quantidade</span>
          <span>Valor Unitário</span>
          <span>Sub-total</span>
          {pathname.includes('checkout') ? <span>Remover Item</span> : null}
        </div>
        {
          buyList.map((order, i) => (
            <OrderCard
              key={ i }
              index={ i }
              order={ order }
            />
          ))
        }
        <div className="container-button-total">
          <button
            className="btn-total-value"
            data-testid={ `${prefix}element-order-total-price` }
            type="button"
          >
            {`Total: ${Number(totalPrice).toLocaleString('pt-BR', {
              currency: 'BRL',
              style: 'currency',
            })}`}
          </button>
        </div>
      </div>
    </div>
  );
}
