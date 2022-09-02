const { User } = require('../../database/models');

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

module.exports = {
  getSellers,
  getUsers,
};
