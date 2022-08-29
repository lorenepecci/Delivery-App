const express = require('express');
const registerController = require('../controllers/register.controller');
const loginController = require('../controllers/login.controller');
const productsController = require('../controllers/products.controller');
const saleController = require('../controllers/sales.controller');
const adminController = require('../controllers/admin.controller');
const userController = require('../controllers/user.controller');

const routers = express.Router();

routers.use('/register', registerController);
routers.use('/login', loginController);
routers.get('/products', productsController.findAll);
routers.use('/admin/manage', adminController);
routers.use('/sales', saleController);
routers.use('/users', userController);

module.exports = routers;
