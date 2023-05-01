
const express = require('express');
const modelPersonal = require('../../Models/refaccionaria/modelPersonal');

let app = express.Router();

app.get('/personal', async (req, res) =>{
    const personal = await modelPersonal.find({})
    console.log(personal)
    res.status(200).json(personal)

})

// Obtener productos ID

app.get('/personal/:id', async (req, res) => {
    const personal = await modelPersonal.findById(req.params.id)
    res.status(200).json(personal)

})

// Eliminar productos

app.delete('/personaldel/:id', async (req, res) => {
    try{
        const personal = await modelPersonal.findById(req.params.id)
        personal.deleteOne({ _id: req.params.id })
        res.status(204).json(personal)
        console.log("Personal eliminado")

    } catch{
        res.status(404).json(personal)
        console.log('test')

    }
    
})

// Actualizar productos

app.put('/personalact/:id', async (req, res) =>{
    try{
        await modelPersonal.updateOne({ _id: req.params.id}, {$set: { nombre: req.body.nombre, apPaterno: req.body.apPaterno, apMaterno: req.body.apMaterno, telefono: req.body.telefono, estatus: req.body.estatus,}})
        res.status(200).send("Se actualizo correctamente")
    } catch{
        res.status(400).json({ message: err.message });
    }


    const newPersonal = await modelPersonal.create(req.body)
    if(newPersonal){

        res.status(200).json({
            ok: true,
            message: 'Datos guardados',
            data: newPersonal
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

app.post('/personal/nuevo', async (req, res) =>{
    let body = req.body;
    console.log(body);

    const newPersonal = await modelPersonal.create(req.body)
    if(newPersonal){

        res.status(200).json({
            ok: true,
            message: 'Datos guardados',
            data: newPersonal
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