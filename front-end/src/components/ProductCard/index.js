import React, { useState } from 'react';

function ProductCard({ product }) {
  const [productQnt, setProductQnt] = useState(0);

  const handleAddClick = () => {
    const cart = JSON.parse(localStorage.getItem('buyList'));
    const findProduct = cart.find((item) => item.id === product.id);
    if (!findProduct) {
      product.qnt = 1;
      setProductQnt(1);
      cart.push(product);
      localStorage.setItem('buyList', JSON.stringify(cart));
    } else {
      findProduct.qnt += 1;
      setProductQnt(findProduct.qnt);
      const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          return { ...item, qnt: findProduct.qnt };
        }
        return item;
      });
      localStorage.setItem('buyList', JSON.stringify(updatedCart));
    }
  };

  const handleRemoveClick = () => {
    console.log(localStorage.getItem('buyList'));
    const cart = JSON.parse(localStorage.getItem('buyList'));
    const findProduct = cart.find((item) => item.id === product.id);
    console.log(findProduct.qnt, (findProduct.qnt >= 1));
    if (findProduct.qnt >= 1) {
      findProduct.qnt -= 1;
      setProductQnt(findProduct.qnt);
      const updatedCart = cart.reduce((acc, item) => {
        if (item.id === product.id) {
          acc.push({ ...item, qnt: findProduct.qnt });
          return acc;
        }
        acc.push(item);
        return acc;
      }, []);
      console.log(updatedCart);
      localStorage.setItem('buyList', JSON.stringify(updatedCart));
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    const cart = JSON.parse(localStorage.getItem('buyList'));
    const findProduct = cart.find((item) => item.id === product.id);
    if (value > 0 && findProduct) {
      findProduct.qnt = value;
      setProductQnt(findProduct.qnt);
      const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          return { ...item, qnt: findProduct.qnt };
        }
        return item;
      });
/*       const updatedCart = cart.reduce((acc, item) => {
        if (item.qnt > 0) {
          acc.push({ ...item, qnt: findProduct.qnt });
          return acc;
        }
      }, []); */
      localStorage.setItem('buyList', JSON.stringify(updatedCart));
    }
    /* if (!findProduct) {
      product.qnt = value;
      setProductQnt(value);
      cart.push(product);
      localStorage.setItem('buyList', JSON.stringify(cart));
    } else {
      findProduct.qnt = value;
      setProductQnt(findProduct.qnt);
      const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          return { ...item, qnt: findProduct.qnt };
        }
        return item;
      });
      localStorage.setItem('buyList', JSON.stringify(updatedCart));
    } */
  };

  // const { product } = this.props;
  return (
    <section>
      <div>{ product.price }</div>
      <img src={ product.urlImage } alt={ product.name } />
      <div>{ product.name }</div>
      <button type="button" onClick={ handleAddClick }>+</button>
      <input type="number" onChange={ handleChange } value={ productQnt } />
      <button type="button" onClick={ handleRemoveClick }>-</button>
    </section>
  );
}

export default ProductCard;
