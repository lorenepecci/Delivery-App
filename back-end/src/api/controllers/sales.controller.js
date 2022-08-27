const { Router } = require('express');
const salesService = require('../services/sales.service');
const authenticationMiddleware = require('../middlewares/authValidation');

const saleRoute = Router();

saleRoute.post('/customer/checkout', authenticationMiddleware, async (req, res) => {
  const { id } = res.locals.payload;
  await salesService.create(req.body, id);
  
  return res.status(200).end();
});

saleRoute.get('/customer/orders', authenticationMiddleware, async (req, res) => {
  const { id } = res.locals.payload;
  const sales = await salesService.getByUser(id);

  return res.status(200).json(sales);
});

saleRoute.get('/seller/orders', authenticationMiddleware, async (req, res) => {
  const { id } = res.locals.payload;
  const sales = await salesService.getBySeller(id);

  return res.status(200).json(sales);
});

module.exports = saleRoute;
