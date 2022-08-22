const express = require('express');
require('express-async-errors');

const app = express();

app.use(require('./routes'));

module.exports = app;
