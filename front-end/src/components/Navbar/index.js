import React from 'react';
import { useHistory } from 'react-router-dom';
import './style.css';

export default function Navbar() {
  const history = useHistory();

  const user = JSON.parse(localStorage.getItem('user'));

  const { name } = user;

  return (
    <nav className="products-navbar">
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
  );
}
