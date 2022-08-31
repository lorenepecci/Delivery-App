import React, { useContext, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import OrderCardCustomer from '../../components/OrderCardCustomer';
import Context from '../../context/Context';
import { getOrdersCustomer } from '../../services/api';
import './Orders.css';

export default function Orders() {
  const { listOrders, setListOrders } = useContext(Context);
  useEffect(() => {
    const func = async () => {
      try {
        console.log('try orders');
        const response = await getOrdersCustomer();
        console.log(response);
        setListOrders(response);
      } catch (erro) {
        console.log(erro, 'checkout erro');
      }
    };
    func();
  }, []);

  return (
    <div className="container-orders">
      <Navbar />
      <div className="cards-orders">
        { listOrders.length
          ? listOrders.map((item, i) => (
            <div key={ i }>
              <OrderCardCustomer order={ item } />
            </div>
          ))
          : null }
      </div>
    </div>
  );
}
