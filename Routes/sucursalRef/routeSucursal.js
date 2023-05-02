const express = require('express');
const modelSucursal = require('../../Models/refaccionaria/modelSucursal');

let app = express.Router();



app.get('/sucursales', async (req, res) =>{
    const sucursal = await modelSucursal.find({})
    console.log(sucursal)
    res.status(200).json(sucursal)

})

// Obtener sucursales ID

app.get('/sucursales/:id', async (req, res) => {
    const sucursal = await modelSucursal.findById(req.params.id)
    res.status(200).json(sucursal)

})

// Eliminar sucursal

app.delete('/sucursalesdel/:id', async (req, res) => {
    try{
        const sucursal = await modelSucursal.findById(req.params.id)
        sucursal.deleteOne({ _id: req.params.id })
        res.status(204).json(sucursal)
        console.log("Proveedor eliminado")

    } catch{
        res.status(404).json(sucursal)
        console.log('test')

    }
    
})

// Actualizar sucursal

app.put('/sucursalact/:id', async (req, res) =>{
    try{
        await modelSucursal.updateOne({ _id: req.params.id}, {$set: { direccionSucursal: req.body.direccionSucursal, nombreEncargado: req.body.nombreEncargado, municipioSucursal: req.body.municipioSucursal, telefono: req.body.telefono, email: req.body.email,}})
        res.status(200).send("Se actualizo correctamente")
    } catch{
        res.status(400).json({ message: err.message });
    }


    const newSucursal = await modelSucursal.create(req.body)
    if(newSucursal){

        res.status(200).json({
            ok: true,
            message: 'Datos guardados',
            data: newSucursal
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

// Insertar sucursal

app.post('/sucursal/nuevo', async (req, res) =>{
    let body = req.body;
    console.log(body);

    const newSucursal = await modelSucursal.create(req.body)
    if(newSucursal){

        res.status(200).json({
            ok: true,
            message: 'Datos guardados',
            data: newSucursal
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