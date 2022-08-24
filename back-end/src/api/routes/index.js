const express = require('express');
// const { login } = require('../controllers/login.controller');
const  productsController  = require('../controllers/products.controller');

const routers = express.Router();

// routers.get('/login', login);
routers.get("/products", productsController.findAll)

module.exports = routers;
