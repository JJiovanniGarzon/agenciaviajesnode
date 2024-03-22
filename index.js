// del paquete de express instalado lo extraemos y asignamos a la variable
// exportamos express

// const express = require('express')  // como se utilizaba version anterior 

import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

// Conectar a la base de datos
db.authenticate()
    .then( () => console.log('Base de datos conectada'))
    .catch( error => console.log(error) );

// ejecutar como función
const app = express(); 

// definir puerto
const port = process.env.PORT || 3000; 

// Habilitar PUG
app.set('view engine', 'pug');

// Obtener el año actual
app.use( (req, res, next) => {
    const yaer = new Date();
    
    res.locals.actualYear = yaer.getFullYear();
    res.locals.nombreSitio = "Agencia de viajes";
    return next();

});

// Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({extended: true})); 

// Definir la carpeta publica 
app.use(express.static('public'));

// Agregar router
app.use('/', router);

app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`)
})