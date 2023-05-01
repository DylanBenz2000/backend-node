// Va a contener los metodos GET, POST, PUT, DELETE, UPDATE
const express = require('express');
const app = express();


app.use(require('./test'));
app.use('/', require('./productoNuevo/routeNuevoProducto'));
app.use('/', require('./personalRef/routePersonalAgregar'));
app.use('/', require('./sucursalRef/routeSucursal'));


module.exports = app;