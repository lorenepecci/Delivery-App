const Joi = require('joi');
const registerSchema = require('./schemaRegister');

const validRole = Joi.object().keys({
  role: Joi.string().valid('customer', 'seller', 'administrator'),
});

const adminSchema = validRole.concat(registerSchema);

module.exports = adminSchema;
