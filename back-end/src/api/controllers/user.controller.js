const { Router } = require('express');
const userService = require('../services/user.service');

const userRouter = Router();

userRouter.get('/sellers', async (req, res) => {
  const sellers = await userService.getSellers(req.body);
  return res.status(200).json(sellers);
});

module.exports = userRouter;
