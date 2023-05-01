
const express = require('express');
const modelProveedores = require('../../Models/refaccionaria/modelProveedores');

let app = express.Router();

app.get('/proveedores', async (req, res) =>{
    const proveedores = await modelProveedores.find({})
    console.log(proveedores)
    res.status(200).json(proveedores)

})

// Obtener proveedores ID

app.get('/proveedores/:id', async (req, res) => {
    const proveedores = await modelProveedores.findById(req.params.id)
    res.status(200).json(proveedores)

})

// Eliminar proveedores

app.delete('/proveedoresdel/:id', async (req, res) => {
    try{
        const proveedores = await modelProveedores.findById(req.params.id)
        proveedores.deleteOne({ _id: req.params.id })
        res.status(204).json(proveedores)
        console.log("Proveedor eliminado")

    } catch{
        res.status(404).json(proveedores)
        console.log('test')

    }
    
})

// Actualizar proveedores

app.put('/proveedoract/:id', async (req, res) =>{
    try{
        await modelProveedores.updateOne({ _id: req.params.id}, {$set: { nombreProveedor: req.body.nombreProveedor, apPaterno: req.body.apPaterno, apMaterno: req.body.apMaterno, telefono: req.body.telefono, direccion: req.body.direccion,}})
        res.status(200).send("Se actualizo correctamente")
    } catch{
        res.status(400).json({ message: err.message });
    }


    const newProveedores = await modelProveedores.create(req.body)
    if(newProveedores){

        res.status(200).json({
            ok: true,
            message: 'Datos guardados',
            data: newProveedores
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


// Insertar proveedores

app.post('/proveedores/nuevo', async (req, res) =>{
    let body = req.body;
    console.log(body);

    const newProveedores = await modelProveedores.create(req.body)
    if(newProveedores){

        res.status(200).json({
            ok: true,
            message: 'Datos guardados',
            data: newProveedores
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