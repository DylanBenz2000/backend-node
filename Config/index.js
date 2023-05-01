// Va a guardar las clases y constantes de clusters en la nube, entre otras cosas
// Es una carpeta auxiliar
'use strict'

const mongoose = require('mongoose');
const app = require('../Server/index');
const port = 3900;

// Generar promesa global

mongoose.Promise = global.Promise;

// Se hace la conexión a la DB
mongoose.connect('mongodb://localhost:27017/refaccionaria', {useNewUrlParser: true})
.then(() =>{
    console.log("Base de datos corriendo");
    //Escuchar el puerto del server
    app.listen(port, () =>{
        console.log(`Server corriendo en puerto: ${port}`);
    });
});