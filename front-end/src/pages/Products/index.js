import React from 'react';
import Navbar from '../../components/Navbar';
import ProductCard from '../../components/ProductCard';
import './style.css';

export default function Products() {
  const productMock = [{
    id: 1,
    name: 'Skol Lata 250ml',
    price: '2.20',
    urlImage: 'http://localhost:3001/images/skol_lata_350ml.jpg',
  }, {
    id: 2,
    name: 'Skol Lata 250ml',
    price: '2.20',
    urlImage: 'http://localhost:3001/images/skol_lata_350ml.jpg',
  }];

  return (
    <div>
      <Navbar />
      { productMock.map((product, i) => <ProductCard key={ i } product={ product } />) }
    </div>
  );
}
