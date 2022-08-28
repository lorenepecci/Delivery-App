import React from 'react';
import './FinalizeOrder.css';

export default function AddressDelivery() {
  const onHandleSubmit = () => {
    //
  };

  return (
    <div>
      <h2>Finalizar Pedido</h2>
      <div className="container-finalize-order">
        <div className="container-button">
          <button
            className="btn-total-value"
            data-testid="customer_checkout__element-order-total-price"
            type="button"
            onClick={ () => onHandleSubmit() }
          >
            Total:
          </button>
        </div>
      </div>
    </div>
  );
}
