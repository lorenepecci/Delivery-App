import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import ProductCard from '../../components/ProductCard';
import { getAllProducts } from '../../services/api';
import './style.css';

export default function Products() {
  const [ products, setProducts ] = useState([]);
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('buyList'));
    if (!cart) localStorage.setItem('buyList', JSON.stringify([]));
    const getProducts = async () => {
      const result = await getAllProducts();
      setProducts(result);
    };
    getProducts();
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
      <Navbar />
      {
        products.filter((_el, i) => i < MAX_LENGTH).map((product, i) => (
          <ProductCard
            key={ i }
            product={ product }
            data-testid={ `customer_products__element-card-price-${i + 1}` }
          />
        ))
      }
    </div>
  );
}
