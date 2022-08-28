import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001',
});

// baseURL: `http://${process.env.REACT_APP_HOSTNAME}:${process.env.REACT_APP_BACKEND_PORT}`,

const postRegister = async (body) => {
  const { name, email, password } = body;
  try {
    const r = await instance.post('/register', { name, email, password });
    console.log(r, 'register log');
    return r;
  } catch (error) {
    console.log(error, 'erroapi');
  }
};

const postLogin = async (body) => {
  const { email, password } = body;
  try {
    const r = await instance.post('/login', { email, password });
    console.log(r, 'login log');
    return r;
  } catch (error) {
    console.log(error, 'erroapi');
  }
};

export { postRegister, postLogin };
