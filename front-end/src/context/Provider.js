import PropTypes from 'prop-types';
import React from 'react';
import Context from './Context';

function Provider({ children }) {
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
