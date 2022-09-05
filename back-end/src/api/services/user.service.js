const { User } = require('../../database/models');
const HttpException = require('../utils/HttpException');

const getSellers = async () => {
  const sellers = await User.findAll(
    {
      where: { role: 'seller' },
      attributes: { exclude: ['password', 'email'] },
    },
    );
  return sellers;
};

const getUsers = async () => {
  const sellers = await User.findAll(
    {
      attributes: { exclude: ['password'] },
    },
    );
  return sellers;
};

const deleteUser = async (id) => {
  const deletedUser = await User.destroy({ where: { id } });

  if (!deleteUser) {
    throw new HttpException(404, 'User not found');
  }

  return deletedUser;
};

module.exports = {
  getSellers,
  getUsers,
  deleteUser,
};
