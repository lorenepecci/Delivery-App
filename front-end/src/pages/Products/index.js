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
  const { totalPrice } = useContext(Context);

  useEffect(() => {
    const getProducts = async () => {
      const result = await getAllProducts();
      setProducts(result.data.products);
    };
    getProducts();
  }, []);

  const MAX_LENGTH = 11;

  const onHandleClick = () => {
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
      <Navbar />
      {
        products.length > 0
          ? products.filter((_el, i) => i < MAX_LENGTH).map((product, i) => (
            <ProductCard
              key={ i }
              product={ product }
              data-testid={ `customer_products__element-card-price-${i + 1}` }
            />
          ))
          : null
      }
      <button
        className="button-products"
        type="button"
        onClick={ onHandleClick }
      >
        { `Ver Carrinho: R$ ${totalPrice}` }
      </button>
    </div>
  );
}
