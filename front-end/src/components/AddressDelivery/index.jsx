import React, { useContext, useEffect, useState } from 'react';
import Context from '../../context/Context';
import { getUsersSellers, postSalesCheckout } from '../../services/api';
import './AddressDelivery.css';

export default function AddressDelivery() {
  const [userAddress, setUserAddress] = useState({
    address: '',
    number: 0,
    seller: 1,
  });
  const [listSellers, setListSellers] = useState([]);
  const { buyList, totalPrice } = useContext(Context);

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setUserAddress((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  useEffect(() => {
    const func = async () => {
      try {
        console.log('try checkout');
        const response = await getUsersSellers();
        console.log(response);
        setListSellers(response);
      } catch (erro) {
        console.log(erro, 'checkout erro');
      }
    };
    func();
  }, []);

  const onHandleSubmit = async () => {
    try {
      await postSalesCheckout({
        totalPrice: Number(totalPrice),
        deliveryAddress: userAddress.address,
        deliveryNumber: userAddress.number,
        sellerId: userAddress.seller,
        products: buyList.map((item) => ({ id: item.id, quantity: item.quantity })),
      });
    } catch (erro) {
      console.log(erro, 'checkout erro');
    }
  };

  return (
    <div>
      <h2>Detalhes e Endereço para Entrega</h2>
      <div className="container-address-delivery">
        <form>
          <label htmlFor="seller">
            <p>P.Vendedora Responsável:</p>
            <select
              className="seller"
              data-testid="customer_checkout__select-seller"
              id="seller"
              onChange={ (e) => handleChange(e) }
            >
              { listSellers.length && listSellers.map((item, index) => (
                <option key={ index } value={ item.id }>{item.name}</option>
              ))}
            </select>
          </label>
          <label htmlFor="address" className="address">
            <p>Endereço</p>
            <input
              data-testid="customer_checkout__input-address"
              id="address"
              type="text"
              value={ userAddress.address }
              onChange={ (e) => handleChange(e) }
              placeholder="Travessa Terceira da Castanheira, Bairro Muruci"
            />
          </label>
          <label htmlFor="number">
            <p>Número</p>
            <input
              data-testid="customer_checkout__input-addressNumber"
              id="number"
              type="number"
              value={ userAddress.number }
              onChange={ (e) => handleChange(e) }
              placeholder="198"
            />
          </label>
        </form>
        <div className="container-button">
          <button
            className="btn-finalizar"
            data-testid="customer_checkout__button-submit-order"
            type="button"
            onClick={ onHandleSubmit }
          >
            FINALIZAR PEDIDO
          </button>
        </div>
      </div>
    </div>
  );
}
