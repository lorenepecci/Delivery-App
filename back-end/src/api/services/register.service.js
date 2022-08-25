const { User } = require('../../database/models');
const HttpException = require('../utils/HttpException');
const { generateJWTToken } = require('../utils/JWTToken');

const createUser = async ({ name, email, password }) => {
  let newUser;
  const role = 'customer';
  try {
    newUser = await User.create({ name, email, password, role });
  } catch (error) {
    if (error.parent.errno === 1062) throw new HttpException(409, 'User already registered');
    throw new HttpException(500, 'Internal Server Error');
  }

  const token = generateJWTToken(JSON.stringify(newUser));
  return { name, email, role, token };
};

module.exports = {
  createUser,
};
