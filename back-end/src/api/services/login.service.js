const md5 = require('md5');
const { User } = require('../../database/models');
const HttpException = require('../utils/HttpException');
const { generateJWTToken } = require('../utils/JWTToken');

const login = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });
  
  if (!user) throw new HttpException(401, 'Wrong credentials');
  
  const { name, role } = user;
  const crypted = md5(password);
  
  if (crypted !== user.password) {
    throw new HttpException(401, 'Wrong credentials');
  } 

  const token = generateJWTToken({ email, name, role, id: user.id });

  return { name, email, role, token };
};

module.exports = {
  login,
};