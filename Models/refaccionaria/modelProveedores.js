const mongoose = require('mongoose');

let schema = mongoose.Schema;

let nuevoProveedorRef =  new mongoose.Schema({
    nombreProveedor: { type: String },
    apPaterno: { type: String },
    apMaterno: { type: String },
    telefono: { type: Number},
    direccion: { type: String },
})

module.exports = mongoose.model('nuevoProveedor', nuevoProveedorRef);