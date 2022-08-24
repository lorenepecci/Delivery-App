const SalesSchema = (sequelize, DataTypes) =>{
  const SalesTable = sequelize.define("Sale", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: DataTypes.INTEGER,
    seller_id: DataTypes.INTEGER,
    total_price: DataTypes.DECIMAL(9, 2),
    delivery_adress: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    sale_date: DataTypes.DATE,
    status: DataTypes.STRING
  }, {
    timestamps: false,
    underscored: true,
  })

  SalesTable.associate = (models) => {
    SalesTable.belongsTo(models.User, { foreignKey: "userId", as: "user" });
  }

  return SalesTable;
}

module.exports = SalesSchema;
