const schemaRegister = require('../joi/schemaRegister');

const validateUserMiddleware = (req, res, next) => {
  const { error } = schemaRegister.validate(req.body);
  if (error) {
    const { message } = error.details[0];

    return res.status(400).json({ message });
  }
  next();
};

module.exports = validateUserMiddleware;
