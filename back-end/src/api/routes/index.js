const express = require('express');
const registerController = require('../controllers/register.controller');
const loginController = require('../controllers/login.controller');
const productsController = require('../controllers/products.controller');

const routers = express.Router();

routers.use('/register', registerController);
routers.use('/login', loginController);
routers.get('/products', productsController.findAll);

module.exports = routers;
