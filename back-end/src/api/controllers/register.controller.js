const { Router } = require('express');
const { registerValidation } = require('../middlewares');
const registerService = require('../services/register.service');

const registerRouter = Router();

registerRouter.post('/', registerValidation, async (req, res) => {
  const response = await registerService.createUser(req.body);
  return res.status(201).json(response);
});

module.exports = registerRouter;
