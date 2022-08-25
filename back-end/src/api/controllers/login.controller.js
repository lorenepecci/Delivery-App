const { Router } = require('express');
const validateLoginMiddleware = require('../middlewares/loginValidation');
const loginService = require('../services/login.service');

const loginRouter = Router();

loginRouter.post('/', validateLoginMiddleware, async (req, res) => {
  const userInfo = await loginService.login(req.body);
  return res.status(200).json(userInfo);
}); 

module.exports = loginRouter;
