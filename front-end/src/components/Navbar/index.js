import React from 'react';
import './style.css';

export default function Navbar() {
  const user = JSON.parse(localStorage.getItem('user'));

  const { name } = user;

  return (
    <nav className="products-navbar">
      <button type="button">PRODUTOS</button>
      <button type="button">MEUS PEDIDOS</button>
      <div>
        <p>{ name }</p>
      </div>
      <button type="button">Sair</button>
    </nav>
  );
}
