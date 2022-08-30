const HttpException = require('../utils/HttpException');
const { authenticateToken } = require('../utils/JWTToken');

const authenticationMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token)
  if (!token) {
    throw new HttpException(401, 'Token not found');
  }

  const payload = await authenticateToken(token);

  if (req.originalUrl.includes('admin') && payload.role !== 'administrator') {
    throw new HttpException(401, 'Permission denied');
  }

  res.locals.payload = payload;

  next();
};

module.exports = authenticationMiddleware;
