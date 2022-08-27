const { Router } = require('express');
const salesService = require('../services/sales.service');
const authenticationMiddleware = require('../middlewares/authValidation');

const saleRoute = Router();

saleRoute.post('/', authenticationMiddleware, async (req, res) => {
  const { id } = res.locals.payload;

  await salesService.create(req.body, id);

  return res.status(200).end();
});

module.exports = saleRoute;
