const express = require('express');
const registerController = require('../controllers/register.controller');
const loginController = require('../controllers/login.controller');

const routers = express.Router();

routers.use('/register', registerController);
routers.use('/login', loginController);

module.exports = routers;
