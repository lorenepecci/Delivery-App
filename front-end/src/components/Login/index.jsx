import React, { useState } from 'react';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  /*   const validateForm = () => {
    const validateEmail = /\S+@\S+\.\S+/;
    const MIN_LENGTH = 2;
    const isValid = validateEmail.test(email) && name.length >= MIN_LENGTH;
    setIsDisabled(!isValid);
  }; */
  const onHandleSubmit = async () => 'ok';
  /* history.push('/'); */
  const onHandleSubmitRegister = async () => 'ok';

  return (
    <div>
      <form className="form-login">
        <label htmlFor="email">
          <p>Login:</p>
          <input
            data-testid="input-email"
            id="email"
            type="text"
            value={ email }
            onChange={ (e) => setEmail(e.value) }
            placeholder="email@trybeer.com.br"
          />
        </label>
        <label htmlFor="password">
          <p>Senha:</p>
          <input
            data-testid="input-password"
            id="password"
            type="text"
            value={ password }
            onChange={ (e) => setPassword(e.value) }
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
    </div>
  );
}
