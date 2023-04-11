const express = require('express');
const cors = require('cors');
const anexoVRoutes = require("../routes/anexoVRoutes");
const clienteRoutes = require("../routes/clienteRoutes");
const seccionIIRoutes = require("../routes/seccionIIRoutes");
const morgan = require('morgan');
const erroresGlobales = require('../controllers/errorController');
const AppError = require('../utils/AppError')
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});

const app = express();
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

app.use(express.json({limit: '10kb'}));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use((req,res,next) =>{
    req.requestTime = new Date().toISOString();
    next();
})
/*
const whileList = ['http://localhost:6969'];
const corsOptions = {
    origin: function (origin, callback) {
        if (whileList.includes(origin)) {
            callback(null, true);
        } else {
            console.log("ola");
            // Enviar respuesta JSON en caso de que el origen no esté en la lista blanca
            callback(new Error("No permitido por CORS"));
        }
    },
    credentials: true
};

app.use(cors(corsOptions))*/
app.use("/api/v1/anexoV",anexoVRoutes);
app.use("/api/v1/cliente",clienteRoutes);
app.use("/api/v1/seccionII",seccionIIRoutes);

app.all('*',(req,res,next)=>{

    next(new AppError(`No se encuentra ${req.originalUrl} en este servidor`,404))
})

//MANEJO DE ERRORES A NIVEL GLOBAL
app.use(erroresGlobales)
module.exports = app;