import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { postRegister } from '../../services/api';
import './Register.css';

export default function Register() {
  const history = useHistory();
  const [isDisabled, setIsDisabled] = useState(true);
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

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
    console.log(value);
    setUser((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  const onHandleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('try');
      const response = await postRegister(user);
      console.log(response, 'response');
      history.push('/login');
    } catch (error) {
      console.log(error, 'regist erro');
    }
  };

  return (
    <form className="form-login">
      <label htmlFor="name">
        <p>Nome:</p>
        <input
          data-testid="input-name"
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
        className={ `btn-login ${isDisabled ? 'disabled' : 'notDisabled'}` }
        data-testid="btn-login"
        type="button"
        onClick={ (e) => onHandleSubmit(e) }
        disabled={ isDisabled }
      >
        CADASTRAR

      </button>

    </form>
  );
}
