const mongoose = require('mongoose');

let schema = mongoose.Schema;

let nuevaSucursalRef =  new mongoose.Schema({
    direccionSucursal: { type: String },
    nombreEncargado: { type: String },
    municipioSucursal: { type: String },
    telefono: { type: Number},
    email: { type: String },
})

module.exports = mongoose.model('nuevaSucursal', nuevaSucursalRef);