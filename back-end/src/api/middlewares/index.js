const error = require('./error');
const registerValidation = require('./registerValidation');
const adminValidation = require('./adminValidation');
const authValidation = require('./authValidation');

module.exports = {
  error,
  authValidation,
  adminValidation,
  registerValidation,
};
