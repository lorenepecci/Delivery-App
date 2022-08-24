import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const history = useHistory();
  const [isDisabled, setIsDisabled] = useState(true);
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const validadeForm = () => {
    const { email, password } = user;
    const emailRegex = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/i;
    const minPasswordLenght = 6;
    if (emailRegex.test(email) && password.length > minPasswordLenght) {
      setIsDisabled(false);
    }
  };

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setUser((prevState) => ({
      ...prevState,
      [id]: value,
    }));
    validadeForm();
  };
  const onHandleSubmit = async () => history.push('/customer/products');

  const onHandleSubmitRegister = async () => history.push('/resgister');

  return (
    <form className="form-login">
      <label htmlFor="email">
        <p>Login:</p>
        <input
          data-testid="input-email"
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
          data-testid="input-password"
          id="password"
          type="text"
          value={ user.password }
          onChange={ (e) => handleChange(e) }
          placeholder="***********"
        />
      </label>
      <button
        className="btn-login"
        data-testid="btn-login"
        type="button"
        onClick={ () => onHandleSubmit() }
        disabled={ isDisabled }
      >
        Login

      </button>

      <button
        className="btn-register"
        data-testid="btn-register"
        type="button"
        onClick={ () => onHandleSubmitRegister() }
        disabled={ isDisabled }
      >
        Ainda não tenho conta

      </button>
    </form>
  );
}
