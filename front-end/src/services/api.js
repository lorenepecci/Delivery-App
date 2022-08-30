import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001',
});

// baseURL: `http://${process.env.REACT_APP_HOSTNAME}:${process.env.REACT_APP_BACKEND_PORT}`,

const postRegister = async (body) => {
  const { name, email, password } = body;
  try {
    const r = await instance.post('/register', { name, email, password });
    return r;
  } catch (error) {
    console.log(error, 'erroapi');
  }
};

const postLogin = async (body) => {
  const { email, password } = body;
  try {
    const r = await instance.post('/login', { email, password });
    return r;
  } catch (error) {
    console.log(error, 'erroapi');
  }
};

const getAllProducts = async () => {
  try {
    const r = await instance.get('/products');
    return r;
  } catch (error) {
    console.log(error, 'erroapi');
  }
};

const getUsersSellers = async () => {
  try {
    const r = await instance.get('/users/sellers');
    return r.data;
  } catch (error) {
    console.log(error, 'erroapi');
  }
};

const postSalesCheckout = async (obj) => {
  console.log(obj);
  const user = JSON.parse(localStorage.getItem(('user')));
  const instanceToken = axios.create({
    baseURL: 'http://localhost:3001',
    headers: { authorization: user.token },
  });
  try {
    const r = await instanceToken.post('sales/customer/checkout', obj);
    return r;
  } catch (error) {
    console.log(error, 'erroapi');
  }
};

const getOrdersCustomer = async () => {
  const user = JSON.parse(localStorage.getItem(('user')));
  const instanceToken = axios.create({
    baseURL: 'http://localhost:3001',
    headers: { authorization: user.token },
  });
  try {
    const r = await instanceToken.get('/sales/customer/orders');
    return r.data;
  } catch (error) {
    console.log(error, 'erroapi');
  }
};

export {
  postRegister,
  postLogin,
  getAllProducts,
  getUsersSellers,
  postSalesCheckout,
  getOrdersCustomer,
};
