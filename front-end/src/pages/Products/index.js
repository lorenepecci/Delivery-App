import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import ProductCard from '../../components/ProductCard';
import Context from '../../context/Context';
import { getAllProducts } from '../../services/api';

export default function Products() {
  const [products, setProducts] = useState([]);

  const [user, setUser] = useState({
    name: '',
    email: '',
    role: '',
    token: '',
  });

  const { totalPrice } = useContext(Context);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('buyList'));
    if (!cart) localStorage.setItem('buyList', JSON.stringify([]));
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
    <div>
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
      <button type="button">
        { `Ver Carrinho: R$ ${Number(totalPrice).toLocaleString('pt-BR', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}` }
      </button>
    </div>
  );
}
