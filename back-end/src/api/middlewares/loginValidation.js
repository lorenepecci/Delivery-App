const schemaLogin = require('../joi/schemaLogin');

const validateLoginMiddleware = (req, res, next) => {
  const { error } = schemaLogin.validate(req.body);
  if (error) {
    const { message } = error.details[0];

    return res.status(400).json({ message });
  }
  next();
};

module.exports = validateLoginMiddleware;
