import PropTypes from 'prop-types';
import React, { useState, useMemo } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [buyList, setBuyList] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);
  // useEffect(() => {
  //   console.log('useEffect');
  //   console.log('teste', buyList.length);
  //   if (buyList.length > 0) {
  //     console.log('teste2');
  //     const total = buyList.reduce((acc, cur) => {
  //       const result = acc + (cur.quantity * Number(cur.price));
  //       return result;
  //     }, 0);
  //     setTotalPrice(total.toFixed(2));
  //   }
  // }, [buyList]);

  const contextData = useMemo(() => ({
    buyList,
    setBuyList,
    totalPrice,
    setTotalPrice,
  }), [buyList, totalPrice]);

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
