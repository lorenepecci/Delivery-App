const Joi = require('joi');

module.exports = Joi.object().keys({
  name: Joi.string().min(12).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  role: Joi.string().valid('administrator', 'seller', 'customer').required(),
});
