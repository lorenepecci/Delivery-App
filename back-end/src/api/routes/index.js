const express = require('express');
// const { login } = require('../controllers/login.controller');
const registerController = require('../controllers/register.controller');

const routers = express.Router();

// routers.get('/login', login);
routers.use('/register', registerController);

module.exports = routers;
