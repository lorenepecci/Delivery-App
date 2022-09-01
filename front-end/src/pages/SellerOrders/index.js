import React, { useContext, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import OrderCardSeller from '../../components/OrderCardSeller';
import Context from '../../context/Context';
import { getOrdersSeller } from '../../services/api';
import './SellerOrders.css';

export default function SellerOrders() {
  const { salesOrders, setSalesOrders } = useContext(Context);
  useEffect(() => {
    const func = async () => {
      try {
        console.log('try orders');
        const response = await getOrdersSeller(2);
        console.log(response);
        setSalesOrders(response);
      } catch (erro) {
        console.log(erro, 'checkout erro');
      }
    };
    func();
  }, []);

  return (
    <div className="container-orders">
      {console.log(salesOrders)}
      <Navbar />
      <div className="cards-orders">
        { salesOrders.length
          ? salesOrders.map((item, i) => (
            <div key={ i }>
              <OrderCardSeller order={ item } />
            </div>
          ))
          : null }
      </div>
    </div>
  );
}
