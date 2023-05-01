const express = require('express');
const modelSucursal = require('../../Models/refaccionaria/modelSucursal');

let app = express.Router();

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