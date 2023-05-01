// Va a mantener la configuración del servidor.
'use strict'

const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(function (req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-Width, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    next();
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(require('../Routes/routes'));

module.exports = app;