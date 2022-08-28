const md5 = require('md5');
const UsersSchema = (sequelize, DataTypes) => {
  const UsersTable = sequelize.define("User", {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.STRING,
  }, {
    timestamps: false,
    underscored: true,
    tableName: 'users',
    hooks: {
      beforeCreate: async (user) => {
        if (user.password) user.password = md5(user.password);
      },
      beforeUpdate: async (user) => {
        if (user.password) user.password = md5(user.password);
      }
    }
  })

  UsersTable.associate = (models) => {
    UsersTable.hasMany(models.Sale, { foreignKey: "id", as: "userId" });
  }

  return UsersTable;
}

module.exports = UsersSchema;
