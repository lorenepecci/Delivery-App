const { Product } = require('../../database/models');

const productsService = {
  async findAll() {
    const products = await Product.findAll();

    return products;
  },
};

module.exports = productsService;
