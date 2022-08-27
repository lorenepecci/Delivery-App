const { Sale } = require('../../database/models');
const { SalesProduct } = require('../../database/models');

const create = async (saleData, userId) => {
  console.log(userId);
  const { totalPrice, deliveryAddress, deliveryNumber, sellerId, products } = saleData;

  const createdSale = await Sale.create({
    userId,
    totalPrice, 
    deliveryAddress,
    deliveryNumber,
    sellerId,
  });

  await SalesProduct.bulkCreate(products.map((product) => ({
    saleId: createdSale.dataValues.id,
    productId: product.id,
    quantity: product.quantity,
  })));
};

module.exports = { create };
