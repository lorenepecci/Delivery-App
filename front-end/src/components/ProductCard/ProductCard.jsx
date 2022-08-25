import React, { useState } from 'react';

// const productMock = {
//   id: 1,
//   name: 'Skol Lata 250ml',
//   price: '2.20',
//   urlImage: 'http://localhost:3001/images/skol_lata_350ml.jpg',
// };

function ProductCard({ product }) {
  const [productQnt, setProductQnt] = useState(0);

  handleAddClick = () => {
    const cart = JSON.parse(localStorage.getItem('buyList'));
    const findProduct = cart.find((item) => item.id === product.id);
    if (!findProduct) {
      product.qnt = 1;
      setProductQnt(1);
      cart.push(product);
      localStorage.setItem(buyList, cart);
    } else {
      findProduct.qnt += 1;
      setProductQnt(findProduct.qnt);
      const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          return { ...item, qnt: findProduct.qnt };
        }
        return item;
      });
      localStorage.setItem(buyList, updatedCart);
    }
  };

  handleRemoveClick = () => {
    const cart = JSON.parse(localStorage.getItem('buyList'));
    const findProduct = cart.find((item) => item.id === product.id);
    if (findProduct) {
      findProduct.qnt -= 1;
      setProductQnt(findProduct.qnt);
      const updatedCart = cart.reduce((acc, item) => {
        if (item.qnt > 0) {
          acc.push({ ...item, qnt: findProduct.qnt });
          return acc;
        }
      }, []);
      localStorage.setItem(buyList, updatedCart);
    }
  };

  handleChange = (e) => {
    const { value } = e.target;
    const cart = JSON.parse(localStorage.getItem('buyList'));
    const findProduct = cart.find((item) => item.id === product.id);
    if (!findProduct) {
      product.qnt = value;
      setProductQnt(value);
      cart.push(product);
      localStorage.setItem(buyList, cart);
    } else {
      findProduct.qnt = value;
      setProductQnt(findProduct.qnt);
      const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          return { ...item, qnt: findProduct.qnt };
        }
        return item;
      });
      localStorage.setItem(buyList, updatedCart);
    }
  };

  // const { product } = this.props;
  return (
    <section>
      <div>{ product.price }</div>
      <imag src={ product.urlImage } alt={ product.name } />
      <button type="button" onClick={ handleAddClick }>+</button>
      <input type="number" onChange={ handleChange } value={ productQnt } />
      <button type="button" onClick={ handleRemoveClick }>-</button>
    </section>
  );
}

export default ProductCard;
