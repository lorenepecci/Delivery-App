import React, { useContext } from 'react';
import Context from '../../context/Context';
import OrderCard from '../OrderCard';
import './FinalizeOrder.css';

export default function FinalizeOrders() {
  const { buyList, totalPrice } = useContext(Context);

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
          <span>Remover Item</span>
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
            data-testid="customer_checkout__element-order-total-price"
            type="button"
          >
            {`totalPrice ${Number(totalPrice).toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}`}
          </button>
        </div>
      </div>
    </div>
  );
}
