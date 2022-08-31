import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../../context/Context';

function ProductCard({ product, index }) {
  const { buyList, setBuyList, setTotalPrice } = useContext(Context);
  const [productQnt, setProductQnt] = useState(0);

  const updateTotal = (cart) => {
    const total = cart.reduce((acc, cur) => {
      const result = acc + (cur.quantity * Number(cur.price));
      return result;
    }, 0);
    setTotalPrice(total.toFixed(2));
  };

  const updateCart = (cart, quantity) => cart.map((item) => {
    if (item.id === product.id) {
      return { ...item, quantity };
    }
    return item;
  });

  const handleAddClick = () => {
    const findProduct = buyList.find((item) => item.id === product.id);
    if (!findProduct) {
      product.quantity = 1;
      setProductQnt(1);
      buyList.push(product);
      updateTotal(buyList);
      setBuyList(buyList);
    } else {
      findProduct.quantity += 1;
      setProductQnt(findProduct.quantity);
      const updatedCart = updateCart(buyList, findProduct.quantity);
      updateTotal(updatedCart);
      setBuyList(updatedCart);
    }
  };

  const handleRemoveClick = () => {
    const cart = buyList;
    const findProduct = cart.find((item) => item.id === product.id);
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
      updateTotal(updatedCart);
      setBuyList(updatedCart);
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    const cart = buyList;
    const findProduct = cart.find((item) => item.id === product.id);
    if (!findProduct) {
      product.quantity = Number(value);
      setProductQnt(Number(value));
      cart.push(product);
      updateTotal(cart);
      setBuyList(cart);
    } else if (+value > 0 || findProduct) {
      findProduct.quantity = Number(value);
      setProductQnt(Number(value));
      const updatedCart = updateCart(cart, Number(value));
      updateTotal(updatedCart);
      setBuyList(updatedCart);
    }
  };

  return (
    <section className="product-card">
      <div data-testid={ `customer_products__element-card-price-${index}` }>
        { Number(product.price).toLocaleString('pt-BR', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </div>
      <img
        src={ product.urlImage }
        alt={ product.name }
        data-testid={ `customer_products__img-card-bg-image-${index}` }
      />
      <div data-testid={ `customer_products__element-card-title-${index}` }>
        { product.name }
      </div>
      <button
        type="button"
        onClick={ handleAddClick }
        data-testid={ `customer_products__button-card-add-item-${index}` }
      >
        +
      </button>
      <input
        type="text"
        onChange={ handleChange }
        value={ productQnt }
        data-testid={ `customer_products__input-card-quantity-${index}` }
      />
      <button
        type="button"
        onClick={ handleRemoveClick }
        data-testid={ `customer_products__button-card-rm-item-${index}` }
      >
        -
      </button>
    </section>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    urlImage: PropTypes.string,
    quantity: PropTypes.number,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default ProductCard;
