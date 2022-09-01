import axios from 'axios';

const URL = 'http://localhost:3001';

const instance = axios.create({
  baseURL: URL,
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
  const user = JSON.parse(localStorage.getItem(('user')));
  const instanceToken = axios.create({
    baseURL: URL,
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
    baseURL: URL,
    headers: { authorization: user.token },
  });
  try {
    const r = await instanceToken.get('/sales/customer/orders');
    return r.data;
  } catch (error) {
    console.log(error, 'erroapi');
  }
};

const getOrdersSeller = async () => {
  const user = JSON.parse(localStorage.getItem(('user')));
  const instanceToken = axios.create({
    baseURL: URL,
    headers: { authorization: user.token },
  });
  try {
    const r = await instanceToken.get('/sales/seller/orders');
    return r.data;
  } catch (error) {
    console.log(error, 'erroapi');
  }
};

const postRegisterUserByAdmin = async (body) => {
  const { name, email, password, role } = body;
  try {
    const user = JSON.parse(localStorage.getItem(('user')));
    const instanceToken = axios.create({
      baseURL: URL,
      headers: { authorization: user.token },
    });
    const r = await instanceToken.post('/admin/manage', { name, email, password, role });
    return r;
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
  getOrdersSeller,
  postRegisterUserByAdmin,
};
