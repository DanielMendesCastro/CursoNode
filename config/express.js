const express = require('express');
const bodyParser = require('body-parser');
const router = require('../layers/routes/pessoa');
const consign = require('consign');
const app = express();

consign().include('middleware').then('layers/controller').into(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/pessoa', router);
module.exports = app;
