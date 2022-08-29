import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { postRegister } from '../../services/api';
import './Register.css';

export default function Register() {
  const history = useHistory();
  const [isDisabled, setIsDisabled] = useState(true);
  const [error, setError] = useState(false);
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    const validadeForm = () => {
      const { name, email, password } = user;
      const emailRegex = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/i;
      const minPasswordLenght = 5;
      const minNameLenght = 12;
      if (emailRegex.test(email)
        && password.length > minPasswordLenght
        && name.length > minNameLenght) {
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }
    };
    validadeForm();
  }, [setUser, user]);

  const handleChange = ({ target }) => {
    const { id, value } = target;
    console.log(value);
    setUser((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  const onHandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await postRegister(user);
      if (!response) throw Error;
      history.push('/customer/products');
    } catch (err) {
      setError(true);
      console.log('register error', err);
    }
  };

  return (
    <form className="form-login">
      <label htmlFor="name">
        <p>Nome:</p>
        <input
          data-testid="common_register__input-name"
          id="name"
          type="text"
          value={ user.name }
          onChange={ (e) => handleChange(e) }
          placeholder="Seu nome"
        />
      </label>
      <label htmlFor="email">
        <p>Email:</p>
        <input
          data-testid="common_register__input-email"
          id="email"
          type="text"
          value={ user.email }
          onChange={ (e) => handleChange(e) }
          placeholder="email@trybeer.com.br"
        />
      </label>
      <label htmlFor="password">
        <p>Senha:</p>
        <input
          data-testid="common_register__input-password"
          id="password"
          type="text"
          value={ user.password }
          onChange={ (e) => handleChange(e) }
          placeholder="***********"
        />
      </label>
      <button
        className={ `btn-login ${isDisabled ? 'disabled' : 'notDisabled'}` }
        data-testid="common_register__button-register"
        type="button"
        onClick={ (e) => onHandleSubmit(e) }
        disabled={ isDisabled }
      >
        CADASTRAR

      </button>
      { error ? (
        <span data-testid="common_register__element-invalid_register">
          Error
        </span>) : null }

    </form>
  );
}
