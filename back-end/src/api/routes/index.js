const express = require('express');
const registerController = require('../controllers/register.controller');
const loginController = require('../controllers/login.controller');
const productsController = require('../controllers/products.controller');
const adminController = require('../controllers/admin.controller');

const routers = express.Router();

routers.use('/register', registerController);
routers.use('/login', loginController);
routers.get('/products', productsController.findAll);
routers.use('/admin/manage', adminController);

module.exports = routers;
