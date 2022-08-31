const SalesSchema = (sequelize, DataTypes) =>{
  const SalesTable = sequelize.define("Sale", {
    id: { 
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true 
    },
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true
    }, 
    sellerId: {
      type: DataTypes.INTEGER,
      foreignKey: true
    }, 
    totalPrice: DataTypes.DECIMAL(9, 2),
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,

    //  TO DO: Verificar formato da data
    saleDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },

    status: {
      type: DataTypes.STRING,
      defaultValue: 'Pendente'
    }, 

  }, {
    timestamps: false,
    underscored: true,
  })

  SalesTable.associate = (models) => {
    SalesTable.belongsTo(models.User, { foreignKey: "userId", as: "user" });
  }

  SalesTable.associate = (models) => {
    SalesTable.belongsTo(models.User, { foreignKey: "sellerId", as: "seller" });
  }

  return SalesTable;
}

module.exports = SalesSchema;
