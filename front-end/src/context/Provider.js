import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [buyList, setBuyList] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    console.log('buyList1', buyList);
    if (buyList.length > 0) {
      console.log('buyList2', buyList);
      const total = buyList.reduce((acc, cur) => {
        const result = acc + (cur.quantity * Number(cur.price));
        return result;
      }, 0);
      console.log(total);
      setTotalPrice(total);
    }
  }, [buyList, setBuyList]);

  const contextData = {
    buyList,
    setBuyList,
    totalPrice,
  };

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
