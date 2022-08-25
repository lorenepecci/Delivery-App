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
        onClick={ history.push('/customer/products') }
      >
        PRODUTOS
      </button>
      <button
        type="button"
        onClick={ history.push('/customer/orders') }
      >
        MEUS PEDIDOS
      </button>
      <div>
        <p>{ name }</p>
      </div>
      <button
        type="button"
        onClick={ localStorage.removeItem('user') }
      >
        Sair
      </button>
    </nav>
  );
}
