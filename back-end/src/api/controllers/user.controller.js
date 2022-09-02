const { Router } = require('express');
const { authValidation } = require('../middlewares');
const userService = require('../services/user.service');

const userRouter = Router();

userRouter.get('/sellers', async (req, res) => {
  const sellers = await userService.getSellers(req.body);
  return res.status(200).json(sellers);
});

userRouter.get('/all', authValidation, async (_req, res) => {
  const users = await userService.getUsers();
  return res.status(200).json(users);
});

module.exports = userRouter;
