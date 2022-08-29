import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001',
});

const postRegister = async (body) => {
  const { name, email, password } = body;
  try {
    const r = await instance.post('/register', { name, email, password });
    console.log(r, 'rrrrrr');
    return r;
  } catch (error) {
    console.log(error, 'erroapi');
  }
};

const postLogin = async (body) => {
  const { email, password } = body;
  try {
    const r = await instance.post('/login', { email, password });
    console.log(r, 'rrrrrr');
    return r;
  } catch (error) {
    console.log(error, 'erroapi');
  }
};

const getAllProducts = async () => {
  try {
    const r = await instance.get('/products');
    console.log(r, 'rrrrrr');
    return r;
  } catch (error) {
    console.log(error, 'erroapi');
  }
};

export { postRegister, postLogin, getAllProducts };
