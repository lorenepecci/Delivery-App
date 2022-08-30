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

  await SalesProduct.bulkCreate(
    products.map((product) => ({
      saleId: createdSale.dataValues.id,
      productId: product.id,
      quantity: product.quantity,
    })),
  );
};

const getBySeller = async (sellerId) => {
  const sales = await Sale.findAll({ where: { sellerId } });
  return sales;
};

const getByUser = async (userId) => {
  const sales = await Sale.findAll({ where: { userId } });
  return sales;
};

const updateStatus = async (id, status = 'Entregue') => {
  const sale = await Sale.findOne({ where: { id } });

  if (!sale) {
    throw new Error('Sale not found');
  }

  sale.status = status;

  await sale.save();

  return sale;
};

module.exports = {
  create,
  getBySeller,
  getByUser,
  updateStatus,
};
