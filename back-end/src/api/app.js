const express = require('express');
require('express-async-errors');
const errorMiddleware = require('./middlewares/error');

const app = express();

app.use(express.json());

app.use(require('./routes'));

app.use(errorMiddleware);

module.exports = app;
