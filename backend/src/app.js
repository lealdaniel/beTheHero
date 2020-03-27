const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json()); // Estamos falando para nosso backend que estaremos recebendo json nas requisições
app.use(routes);
app.use(errors());

module.exports = app;