import React, { useState, useEffect } from 'react';
import './RegisterUser.css';

export default function RegisterUser({ handleRegisterClick, error }) {
  const [isDisabled, setIsDisabled] = useState(true);
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    role: 'customer',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    const validadeForm = () => {
      const { name, email, password } = user;
      const emailRegex = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/i;
      const minPasswordLenght = 5;
      const minNameLenght = 12;
      if (emailRegex.test(email)
        && password.length > minPasswordLenght
        && name.length >= minNameLenght) {
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }
    };
    validadeForm();
  }, [setUser, user]);

  return (
    <div>
      <h2>Cadastrar novo usuário</h2>
      <div className="container-register-user">
        <form>
          <label htmlFor="username">
            <p>Nome</p>
            <input
              data-testid="admin_manage__input-name"
              id="username"
              type="text"
              name="name"
              onChange={ handleChange }
            />
          </label>
          <label htmlFor="email">
            <p>Email</p>
            <input
              data-testid="admin_manage__input-email"
              id="email"
              type="text"
              name="email"
              onChange={ handleChange }
            />
          </label>
          <label htmlFor="password">
            <p>Senha</p>
            <input
              data-testid="admin_manage__input-password"
              id="password"
              type="text"
              name="password"
              onChange={ handleChange }
            />
          </label>

          <p>Tipo</p>
          <select
            className="role"
            data-testid="admin_manage__select-role"
            id="seller"
            name="role"
            onChange={ handleChange }
          >
            <option value="customer">Cliente</option>
            <option value="seller">Vendedor</option>
            <option value="administrator">Administrador</option>
          </select>

        </form>
        <div className="container-button">
          <button
            data-testid="admin_manage__button-register"
            type="button"
            disabled={ isDisabled }
            onClick={ () => handleRegisterClick(user) }
            className="btn-cadastrar"
          >
            CADASTRAR
          </button>

          { error ? (
            <span data-testid="admin_manage__element-invalid-register">
              Error
            </span>) : null }
        </div>
      </div>
    </div>
  );
}
