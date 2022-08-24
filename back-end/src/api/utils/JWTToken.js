const jwt = require('jsonwebtoken');
const HttpException = require('./HttpException');

const SECRET = process.env.JWT_SECRET;
// https://datatracker.ietf.org/doc/html/rfc7519#section-4.1
const jwtConfig = {
  // expiresIn: '15m',
  algorithm: 'HS256',
};

const generateJWTToken = (payload) => 
  jwt.sign(payload, SECRET, jwtConfig);

const authenticateToken = async (token) => {
  if (!token) {
    throw new HttpException(401, 'Token not found');
  }

  try {
    const introspection = await jwt.verify(token, SECRET, jwtConfig);
    return introspection;
  } catch (e) {
    console.error('error', e.message);
    throw new HttpException(401, 'Expired or invalid token');
  }
};

module.exports = {
  generateJWTToken,
  authenticateToken,
};