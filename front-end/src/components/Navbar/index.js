import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../../context/Context';
import './style.css';

export default function Navbar({ name }) {
  const history = useHistory();
  const { setUserData } = useContext(Context);

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
          onClick={ () => {
            localStorage.removeItem('user');
            setUserData(null);
            const userInfo = JSON.parse(localStorage.getItem('user'));
            if (!userInfo) history.push('/login');
          } }
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
