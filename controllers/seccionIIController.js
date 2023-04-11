/*const catchAsync = require("../utils/catchAsync");
const { query, collection, doc, getDocs, getDoc, where, updateDoc } = require('firebase/firestore');
const { db } = require('../config/db');*/
const { createOne, getOne, getAll, updateOne, deleteOne } = require("./handleFactory");

const SeccionII = require('../models/SeccionII');
/*

const obtenerSeccionesII = catchAsync(async (req, res, next) => {
    const dbOptions = db();
    if (!dbOptions) {
        res.status(404).json({
            status: "fail",
            data: "Hubo un error al comunicarse con la base de datos"
        })
    }
   
    const clienteID =parseInt(req.query.clienteID)
    if (req.query.clienteID) {
        const collectionSeccionII = collection(dbOptions, 'SeccionII');
        const seccionesII = [];
        const querySnapshot = await getDocs(
            query(collectionSeccionII, where('clienteID', '==', clienteID),where('clienteID', '==', clienteID))
        );

        querySnapshot.forEach((doc) => {
            seccionesII.push({ id: doc.id, ...doc.data() });
        });
        res.status(200).json({
            status: "success",
            data: seccionesII
        });
    } else {
        const collectionSeccionII = collection(dbOptions, 'SeccionII');
        const secccionesII = [];
        await getDocs(collectionSeccionII).then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                secccionesII.push({ id: doc.id, ...doc.data() });
            });
        }) // Aquí ya tienes los datos en la variable `data`
        res.status(200).json({
            status: "successful",
            data: secccionesII
        })
    }


})

const obtenerSeccionII = catchAsync(async (req, res, next) => {
    const dbOptions = db();
    if (!dbOptions) {
        res.status(404).json({
            status: "fail",
            data: "Hubo un error al comunicarse con la base de datos"
        });
    }
    const anexoID = req.params.id;
    const collectionSeccionII = collection(dbOptions, "SeccionII");
    const seccionIIRef = doc(collectionSeccionII, anexoID);

    try {
        const seccionIIDoc = await getDoc(seccionIIRef);
        if (seccionIIDoc.exists()) {
            const seccionII = { id: seccionIIDoc.id, ...seccionIIDoc.data() };
            res.status(200).json({
                status: "successful",
                data: seccionII
            });
        } else {
            res.status(404).json({
                status: "fail",
                data: "No se encontró un anexoV con el ID proporcionado"
            });
        }
    } catch (error) {
        res.status(500).json({
            status: "fail",
            data: "Hubo un error al buscar el anexoV"
        });
    }
});

const actualizarSeccionII = catchAsync(async (req, res, next) => {
    const dbOptions = db();
    if (!dbOptions) {
        return res.status(404).json({
            status: "fail",
            data: "Hubo un error al comunicarse con la base de datos"
        });
    }
    const anexoID = req.body.anexoID;
    console.log(anexoID)
  
    const collectionSeccionII = collection(dbOptions, "SeccionII");

    // Ejemplo de actualización de campos en la colección SeccionII
    const t =await updateDoc(doc(collectionSeccionII, anexoID.toString()), { 
        velocidadViento: req.body.velocidadViento,
        instrumentoUtilizado: req.body.instrumentoUtilizado,
        horaComprobacionReparacion: req.body.horaComprobacionReparacion,
        reparado: req.body.reparado,
        observacionPersonal: req.body.observacionPersonal,
        fechaInicioInspeccion: req.body.fechaInicioInspeccion,
        fechaComprobacionReparacion: req.body.fechaComprobacionReparacion,
        fechafinalizacionInspeccion: req.body.fechafinalizacionInspeccion,
        volumenMetano: req.body.volumenMetano,
        equipoCritico: req.body.equipoCritico,
        concentracionPosteriorReparacion: req.body.concentracionPosteriorReparacion,
        observacion: req.body.observacion,
        fechaReperacionComponente: req.body.fechaReperacionComponente,
        inspeccionTecnicaRiesgo: req.body.inspeccionTecnicaRiesgo,
        fechaCalibracion: req.body.fechaCalibracion,
        horaReparacion: req.body.horaReparacion,
        justificacionDesviacion: req.body.justificacionDesviacion,
        fuga: req.body.fuga,
        trimestre: req.body.trimestre,
        fechaReparacion: req.body.fechaReparacion,
        horaInicioInspeccion: req.body.horaInicioInspeccion,
        horafinalizacionInspeccion: req.body.horafinalizacionInspeccion,
        desviacionProcedimiento: req.body.desviacionProcedimiento,
        interferenciaDeteccion: req.body.interferenciaDeteccion,
        idComponente: req.body.idComponente,
        fechaRemisionComponente: req.body.fechaRemisionComponente,
        noReparadofaltaComponentes: req.body.noReparadofaltaComponentes,
        concentracionPrevia: req.body.concentracionPrevia,
        fechaRemplazoEquipo: req.body.fechaRemplazoEquipo,
        nombreInstalacion: req.body.nombreInstalacion,
        ubicacionInstalacion: req.body.ubicacionInstalacion,
        nombrePersonal: req.body.nombrePersonal,
        temperatura: req.body.temperatura,
    });
    console.log("ola")
    res.status(200).json({
        status: "successful",
        data: "Sección II actualizada correctamente"
    });
});

*/
const crearSeccionII = createOne(SeccionII);

const actualizarSeccionII = updateOne(SeccionII);

const eliminarSeccionII = deleteOne(SeccionII);

const obtenerSeccionII = getOne(SeccionII);

const obtenerSeccionesII = getAll(SeccionII);

module.exports = { obtenerSeccionII, obtenerSeccionesII, actualizarSeccionII, crearSeccionII, eliminarSeccionII }