import PropTypes from 'prop-types';
import React, { useEffect, useMemo, useState } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [buyList, setBuyList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [listOrders, setListOrders] = useState([]);
  const [salesOrders, setSalesOrders] = useState([]);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    console.log('ativou');
    localStorage.setItem('buysList', JSON.stringify(buyList));
  }, [setBuyList, buyList]);

  const contextData = useMemo(() => ({
    userData,
    setUserData,
    buyList,
    setBuyList,
    totalPrice,
    setTotalPrice,
    listOrders,
    setListOrders,
    salesOrders,
    setSalesOrders,
  }), [buyList, totalPrice, listOrders, salesOrders, userData]);

  return (
    <Context.Provider value={ contextData }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
