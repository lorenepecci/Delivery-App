import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../../context/Context';

function ProductCard({ product }) {
  const { setBuyList } = useContext(Context);

  const [productQnt, setProductQnt] = useState(0);

  const handleAddClick = () => {
    const cart = JSON.parse(localStorage.getItem('buyList'));
    const findProduct = cart.find((item) => item.id === product.id);
    if (!findProduct) {
      product.quantity = 1;
      setProductQnt(1);
      cart.push(product);
      localStorage.setItem('buyList', JSON.stringify(cart));
      setBuyList(cart);
    } else {
      findProduct.quantity += 1;
      setProductQnt(findProduct.quantity);
      const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: findProduct.quantity };
        }
        return item;
      });
      localStorage.setItem('buyList', JSON.stringify(updatedCart));
      setBuyList(updatedCart);
    }
  };

  const handleRemoveClick = () => {
    console.log(localStorage.getItem('buyList'));
    const cart = JSON.parse(localStorage.getItem('buyList'));
    const findProduct = cart.find((item) => item.id === product.id);
    console.log(findProduct.quantity, (findProduct.quantity >= 1));
    if (findProduct.quantity >= 1) {
      findProduct.quantity -= 1;
      setProductQnt(findProduct.quantity);
      const updatedCart = cart.reduce((acc, item) => {
        if (item.id === product.id) {
          acc.push({ ...item, quantity: findProduct.quantity });
          return acc;
        }
        acc.push(item);
        return acc;
      }, []);
      console.log(updatedCart);
      localStorage.setItem('buyList', JSON.stringify(updatedCart));
      setBuyList(updatedCart);
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    const cart = JSON.parse(localStorage.getItem('buyList'));
    const findProduct = cart.find((item) => item.id === product.id);
    if (value > 0 && findProduct) {
      findProduct.quantity = value;
      setProductQnt(findProduct.quantity);
      const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: findProduct.quantity };
        }
        return item;
      });
      localStorage.setItem('buyList', JSON.stringify(updatedCart));
      setBuyList(updatedCart);
    }
  };

  return (
    <section>
      { console.log(product, 'product') }
      <div>{ product.price }</div>
      <img src={ product.urlImage } alt={ product.name } />
      <div>{ product.name }</div>
      <button type="button" onClick={ handleAddClick }>+</button>
      <input type="number" onChange={ handleChange } value={ productQnt } />
      <button type="button" onClick={ handleRemoveClick }>-</button>
    </section>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    urlImage: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
