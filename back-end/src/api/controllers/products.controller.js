const { Router } = require('express');
const productsService = require('../services/products.service');

const productsRouter = Router();

productsRouter.get('/', async (req, res) => {
  const products = await productsService.findAll();

  return res.status(200).json({ products });
});

module.exports = productsRouter;
