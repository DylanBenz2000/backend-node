const express = require('express');
const app = express();


app.get('/prueba', (req, res) =>{
    return res.json({
        ok: true,
        message: 'Prueba de server funcionando'
    });
});

module.exports = app;