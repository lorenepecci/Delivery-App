const { Router } = require('express');
const salesService = require('../services/sales.service');
const authenticationMiddleware = require('../middlewares/authValidation');

const saleRoute = Router();

saleRoute.post(
  '/customer/checkout',
  authenticationMiddleware,
  async (req, res) => {
    const { id } = res.locals.payload;
    await salesService.create(req.body, id);

    return res.status(200).json({ success: true });
  },
);

saleRoute.get(
  '/customer/orders',
  authenticationMiddleware,
  async (req, res) => {
    const { id } = res.locals.payload;
    const sales = await salesService.getByUser(id);

    return res.status(200).json(sales);
  },
);

saleRoute.get('/seller/orders', authenticationMiddleware, async (req, res) => {
  const { id } = res.locals.payload;
  const sales = await salesService.getBySeller(id);

  return res.status(200).json(sales);
});

saleRoute.patch('/seller/orders/:id', async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const response = await salesService.updateStatus(Number(id), status);

  return res.status(200).json(response);
});

saleRoute.patch('/customer/orders/:id', async (req, res) => {
  const { id } = req.params;

  const response = await salesService.updateStatus(Number(id));

  return res.status(200).json(response);
});

module.exports = saleRoute;
