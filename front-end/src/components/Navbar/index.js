import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../../context/Context';
import './style.css';

export default function Navbar({ name }) {
  const history = useHistory();
  const { setUserData } = useContext(Context);

  const getUser = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return user.role;
  };

  const redirect = () => {
    const role = getUser();
    if (role === 'administrator') return;
    history.push('/customer/products');
  };

  return (
    <header>
      <nav className="navbar">
        <button
          className="navbar-products"
          type="button"
          onClick={ redirect }
          data-testid="customer_products__element-navbar-link-products"
        >
          { getUser() === 'administrator' ? 'GERENCIAR USUÁRIOS' : 'PRODUTOS' }
        </button>
        { getUser() !== 'administrator'
          && (
            <button
              className="navbar-my-products"
              type="button"
              onClick={ () => history.push('/customer/orders') }
              data-testid="customer_products__element-navbar-link-orders"
            >
              MEUS PEDIDOS
            </button>
          )}
        <div className="navbar-name">
          <p data-testid="customer_products__element-navbar-user-full-name">
            { name }
          </p>
        </div>
        <button
          className="navbar-out"
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
