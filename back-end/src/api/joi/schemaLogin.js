const Joi = require('joi');

module.exports = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});
