import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.css';

export default function Navbar({ name }) {
  const history = useHistory();

  return (
    <header>
      <nav className="navbar">
        <button
          type="button"
          onClick={ () => history.push('/customer/products') }
          data-testid="customer_products__element-navbar-link-products"
        >
          PRODUTOS
        </button>
        <button
          type="button"
          onClick={ () => history.push('/customer/orders') }
          data-testid="customer_products__element-navbar-link-orders"
        >
          MEUS PEDIDOS
        </button>
        <div>
          <p data-testid="customer_products__element-navbar-user-full-name">
            { name }
          </p>
        </div>
        <button
          type="button"
          onClick={ () => localStorage.removeItem('user') }
          data-testid="customer_products__element-navbar-link-logout"
        >
          Sair
        </button>
      </nav>
    </header>
  );
}

Navbar.propTypes = {
  name: PropTypes.string.isRequired,
};
