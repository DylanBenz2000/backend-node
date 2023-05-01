const mongoose = require('mongoose');

let schema = mongoose.Schema;

let nuevoProductoRefaccionaria =  new mongoose.Schema({
    nombreProducto: { type: String },
    marcaProducto: { type: String },
    presentacionProducto: { type: String },
    contenidoProducto: { type: String },
    precioProducto: { type: Number},
    proveedorProducto: { type: String },
    cantidadProductos: { type: Number},
    estatusProducto: { type: Boolean },
    descripcionProducto: { type: String },
})

module.exports = mongoose.model('nuevoProducto', nuevoProductoRefaccionaria);