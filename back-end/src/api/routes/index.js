const express = require('express');
const loginController = require('../controllers/login.controller');

const routers = express.Router();

routers.use('/login', loginController);

module.exports = routers;
