const SalesProductsSchema = (sequelize, DataTypes) =>{
  const SalesProductsTable = sequelize.define("SalesProduct", {
    saleId: {
      type: DataTypes.INTEGER,
      foreignKey: true
    },
    productId: {
      type: DataTypes.INTEGER,
      foreignKey: true
    },
    quantity: {
      type: DataTypes.INTEGER,
    }
  }, {
    timestamps: false,
    underscored: true,
  })

  SalesProductsTable.associate = (models) => {
    models.Sale.belongsToMany(models.Product, {
      through: SalesProductsTable,
      foreignKey: "saleId",
      otherKey: "productId",
      as: "products"
    });

    models.Product.belongsToMany(models.Sale, {
      through: SalesProductsTable,
      foreignKey: "productId",
      otherKey: "saleId",
      as: "sales"
    });
  }

  return SalesProductsTable;
}

module.exports = SalesProductsSchema;