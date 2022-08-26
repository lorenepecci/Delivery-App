const { Router } = require('express');
const { adminValidation, authValidation } = require('../middlewares');
const adminService = require('../services/admin.service');

const adminRouter = Router();

adminRouter.post('/', authValidation, adminValidation, async (req, res) => {
  const response = await adminService.createUser(req.body);
  return res.status(201).json(response);
});

module.exports = adminRouter;
