import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../../context/Context';
import { postLogin } from '../../services/api';
import './Login.css';

export default function Login() {
  const history = useHistory();
  const [isDisabled, setIsDisabled] = useState(true);
  const [error, setError] = useState(false);
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { setUserData } = useContext(Context);

  const redirectUser = (role) => {
    if (role === 'seller') {
      history.push('/seller/orders');
    } else if (role === 'administrator') {
      history.push('/admin/manage');
    } else {
      history.push('/customer/products');
    }
  };
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('user'));
    if (userInfo) {
      redirectUser(userInfo.role);
    }
  }, []);

  useEffect(() => {
    const validadeForm = () => {
      const { email, password } = user;
      const emailRegex = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/i;
      const minPasswordLenght = 5;
      if (emailRegex.test(email)
        && password.length > minPasswordLenght) {
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }
    };
    validadeForm();
  }, [setUser, user]);

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setUser((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  const onHandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await postLogin(user);
      if (!response) throw Error;
      setUserData(response.data);
      localStorage.setItem('user', JSON.stringify(response.data));
      console.log(response);
      redirectUser(response.data.role);
    } catch (err) {
      setError(true);
      console.log('login error', err);
    }
  };

  const onHandleSubmitRegister = async () => history.push('/register');

  return (
    <form className="form-login">
      <label htmlFor="email" className="login-label">
        <p>Login:</p>
        <input
          data-testid="common_login__input-email"
          id="email"
          type="text"
          value={ user.email }
          onChange={ (e) => handleChange(e) }
          placeholder="email@trybeer.com.br"
        />
      </label>
      <label htmlFor="password" className="login-label">
        <p>Senha:</p>
        <input
          data-testid="common_login__input-password"
          id="password"
          type="text"
          value={ user.password }
          onChange={ (e) => handleChange(e) }
          placeholder="***********"
        />
      </label>
      <button
        className={ `btn-login ${isDisabled ? 'disabled' : 'notDisabled'}` }
        data-testid="common_login__button-login"
        type="button"
        onClick={ (e) => onHandleSubmit(e) }
        disabled={ isDisabled }
      >
        LOGIN
      </button>

      <button
        className="btn-register"
        data-testid="common_login__button-register"
        type="button"
        onClick={ () => onHandleSubmitRegister() }
      >
        Ainda não tenho conta

      </button>
      { error ? (
        <span data-testid="common_login__element-invalid-email">
          Error
        </span>) : null }

    </form>
  );
}
