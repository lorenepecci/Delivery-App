const { Sale } = require('../../database/models');
const { SalesProduct } = require('../../database/models');

const create = async (saleData, userId) => {
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

const getBySeller = async (sellerId) => {
  const sales = await Sale.findAll({ where: { sellerId } });
  return sales;
};

const getByUser = async (userId) => {
  const sales = await Sale.findAll({ where: { userId } });
  return sales;
};

module.exports = { 
  create,
  getBySeller,
  getByUser,
};
