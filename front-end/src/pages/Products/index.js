import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import ProductCard from '../../components/ProductCard';
import Context from '../../context/Context';
import { getAllProducts } from '../../services/api';
import './Products.css';

export default function Products() {
  const history = useHistory();

  const [products, setProducts] = useState([]);

  const [user, setUser] = useState({
    name: '',
    email: '',
    role: '',
    token: '',
  });

  const { totalPrice } = useContext(Context);

  useEffect(() => {
    const getProducts = async () => {
      const result = await getAllProducts();
      console.log('products', result.data.products);
      setProducts(result.data.products);
    };
    getProducts();
    const userInfo = JSON.parse(localStorage.getItem('user'));
    if (userInfo) setUser(userInfo);
  }, []);

  const MAX_LENGTH = 11;

  const onHandleClick = () => {
    const userInfo = JSON.parse(localStorage.getItem('user'));
    if (!userInfo) history.push('/login');
    history.push('/customer/checkout');
  };

  // const products = [{
  //   id: 1,
  //   name: 'Skol Lata 250ml',
  //   price: '2.20',
  //   urlImage: 'http://localhost:3001/images/skol_lata_350ml.jpg',
  // }, {
  //   id: 2,
  //   name: 'Skol Lata 250ml',
  //   price: '2.20',
  //   urlImage: 'http://localhost:3001/images/skol_lata_350ml.jpg',
  // }];

  return (
    <div className="products-container">
      <Navbar name={ user.name } />
      {
        products.length > 0
          ? products.filter((_el, i) => i < MAX_LENGTH).map((product, i) => (
            <ProductCard
              key={ i }
              product={ product }
              index={ i + 1 }
            />
          ))
          : null
      }
      <button
        type="button"
        className="button-products"
        onClick={ onHandleClick }
        data-testid="customer_products__button-cart"
      >
        <span data-testid="customer_products__checkout-bottom-value">
          { `Ver Carrinho: R$ ${Number(totalPrice).toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}` }
        </span>
      </button>
    </div>
  );
}
