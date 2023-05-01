
const express = require('express');
const modelProducto = require('../../Models/refaccionaria/modelNuevoProducto');

let app = express.Router();

// Obtener productos

app.get('/productos', async (req, res) =>{
    const products = await modelProducto.find({})
    console.log(products)
    res.status(200).json(products)

})

// Obtener productos ID

app.get('/productos/:id', async (req, res) => {
    const product = await modelProducto.findById(req.params.id)
    res.status(200).json(product)

})

// Eliminar productos

app.delete('/productosdel/:id', async (req, res) => {
    try{
        const product = await modelProducto.findById(req.params.id)
        product.deleteOne({ _id: req.params.id })
        res.status(204).json(product)
        console.log("Producto eliminado")

    } catch{
        res.status(404).json(product)
        console.log('test')

    }
    
})

// Actualizar productos

app.put('/productoact/:id', async (req, res) =>{
    try{
        await modelProducto.updateOne({ _id: req.params.id}, {$set: { nombreProducto: req.body.nombreProducto, marcaProducto: req.body.marcaProducto, presentacionProducto: req.body.presentacionProducto, contenidoProducto: req.body.contenidoProducto, precioProducto: req.body.precioProducto, proveedorProducto: req.body.proveedorProducto, cantidadProductos: req.body.cantidadProductos, estatusProducto: req.body.estatusProducto, descripcionProducto: req.body.descripcionProducto}})
        res.status(200).send("Se actualizo correctamente")
    } catch{
        res.status(400).json({ message: err.message });
    }


    const newProduct = await modelProducto.create(req.body)
    if(newProduct){

        res.status(200).json({
            ok: true,
            message: 'Datos guardados',
            data: newProduct
        })
    } else {
        return res.status(500)
                .json({
                    ok: false,
                    message: 'No se guardaron los datos',
                    err
            })
    }
    
})

// Insertar productos

app.post('/producto/nuevo', async (req, res) =>{
    let body = req.body;
    console.log(body);

    // let newSchemaProducto = await modelProducto.create({
    //     nombreProducto: body.marcaProducto,
    //     marcaProducto:   body.marcaProducto,
    //     presentacionProducto:   body.presentacionProducto,
    //     contenidoProducto:   body.contenidoProducto,
    //     precioProducto:  body.precioProducto,
    //     proveedorProducto:   body.proveedorProducto,
    //     cantidadProductos:  body.cantidadProductos,
    //     estatusProducto: body.estatusProducto,
    //     descripcionProducto:  body.descripcionProducto,
    // })

    const newProduct = await modelProducto.create(req.body)
    if(newProduct){

        res.status(200).json({
            ok: true,
            message: 'Datos guardados',
            data: newProduct
        })
    } else {
        return res.status(500)
                .json({
                    ok: false,
                    message: 'No se guardaron los datos',
                    err
            })
    }
    
})



module.exports = app;