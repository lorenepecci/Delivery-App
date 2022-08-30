import PropTypes from 'prop-types';
import React, { useEffect, useMemo, useState } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [buyList, setBuyList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    localStorage.setItem('buysList', JSON.stringify(buyList));
  }, [setBuyList, buyList]);

  useEffect(() => {
    setBuyList(JSON.parse(localStorage.getItem('buysList')));
  }, []);

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
