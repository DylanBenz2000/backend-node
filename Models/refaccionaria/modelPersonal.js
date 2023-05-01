const mongoose = require('mongoose');

let schema = mongoose.Schema;

let nuevoPersonalRef =  new mongoose.Schema({
    nombre: { type: String },
    apPaterno: { type: String },
    apMaterno: { type: String },
    telefono: { type: Number},
    estatus: { type: Boolean },
})

module.exports = mongoose.model('nuevoPersonal', nuevoPersonalRef);