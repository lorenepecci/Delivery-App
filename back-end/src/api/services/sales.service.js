const { Sale, sequelize } = require('../../database/models');
const { SalesProduct, User } = require('../../database/models');

const create = async (saleData, userId) => {
  let createdSale;
  const { totalPrice, deliveryAddress, deliveryNumber, sellerId, products } = saleData;

  await sequelize.transaction(async (t) => {
    createdSale = await Sale.create({
      userId,
      totalPrice, 
      deliveryAddress,
      deliveryNumber,
      sellerId,
    }, { transaction: t });
  
    await SalesProduct.bulkCreate(products.map((product) => ({
      saleId: createdSale.dataValues.id,
      productId: product.id,
      quantity: product.quantity,
    })), { transaction: t });
  });

  return createdSale.dataValues.id;
};

const getBySeller = async (sellerId) => {
  const sales = await Sale.findAll({ where: { sellerId } });
  return sales;
};

const getByUser = async (userId) => {
  const sales = await Sale.findAll({ where: { userId } });
  return sales;
};

const getById = async (id) => {
  const sale = await Sale.findOne({
      include: [
        { model: User, as: 'seller', attributes: { exclude: ['id', 'email', 'password', 'role'] } },
      ],
      where: { id },
    });

  if (!sale) {
    throw new Error('Sale not found');
  }

  return sale;
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
  getById,
};
