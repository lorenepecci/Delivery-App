const { Router } = require('express');
const { adminValidation, authValidation } = require('../middlewares');
const registerService = require('../services/register.service');

const adminRouter = Router();

adminRouter.post('/', authValidation, adminValidation, async (req, res) => {
  await registerService.createUser(req.body);
  return res.status(201).json({ success: true });
});

module.exports = adminRouter;
