import React from 'react';
import './FinalizeOrder.css';
import OrderCard from '../OrderCard';

export default function FinalizeOrders() {
  // const [totalPrice, setTotalPrice] = useState();

  const onHandleSubmit = () => {
    //
  };

  // const ordersList = JSON.parse(localStorage.getItem('buyList'));

  const ordersList = [{
    id: 1,
    name: 'Coca Cola',
    price: 10.50,
    quantity: 4,
  }];

  return (
    <div>
      <h2>Finalizar Pedido</h2>
      <div className="container-finalize-order">
        <div>
          <span>Item</span>
          <span>Descrição</span>
          <span>Quantidade</span>
          <span>Valor Unitário</span>
          <span>Sub-total</span>
          <span>Remover Item</span>
        </div>
        {
          ordersList.map((order, i) => (
            <OrderCard
              key={ i }
              index={ i }
              order={ order }
            />
          ))
        }
        <div className="container-button">
          <button
            className="btn-total-value"
            data-testid="customer_checkout__element-order-total-price"
            type="button"
            onClick={ () => onHandleSubmit() }
          >
            totalPrice {/* {`Total: R$${totalPrice}`} */}
          </button>
        </div>
      </div>
    </div>
  );
}
