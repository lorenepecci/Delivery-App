const { Router } = require('express');
const loginService = require('../services/login.service');

const loginRouter = Router();

loginRouter.post('/', async (req, res) => {
  const userInfo = await loginService.login(req.body);
  return res.status(200).json(userInfo);
}); 

module.exports = loginRouter;