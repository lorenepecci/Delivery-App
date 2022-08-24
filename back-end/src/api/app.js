const express = require('express');
const cors = require('cors');
require('express-async-errors');
const errorMiddleware = require('./middlewares/error');

const app = express();

app.use(cors());

app.use(express.json());

app.use(require('./routes'));

app.use(errorMiddleware);

module.exports = app;
