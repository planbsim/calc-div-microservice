'use strict';

var express = require('express');
const bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.post('/', (req, res) => {
    console.log('Request Body:\n', JSON.stringify(req.body, null, 4));
    const dividend = req.body.dividend;
    const divisor = req.body.divisor;
    const ratio = dividend / divisor;
    res.header('Content-Type', 'application/json');
    res.send(JSON.stringify({ result: ratio }));
  });

var port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });

module.exports = app;
