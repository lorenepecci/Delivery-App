'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('SaleProducts', {
      sale_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Sales',
          key: 'id'
        },
      },
      product_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Products',
          key: 'id'
        }
      },
      quantity: {
        type: Sequelize.DECIMAL(4, 2)
      } 
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('SaleProducts')
  }
};