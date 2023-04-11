//const catchAsync = require("../utils/catchAsync");
const { getOne, getAll, updateOne, createOne, deleteOne } = require('./handleFactory')
//const { query, collection, doc, getDocs, getDoc, where, updateDoc } = require('firebase/firestore');
//const { db } = require('../config/db')
const Cliente = require('../models/Cliente')
/*
const obtenerClientes = catchAsync(async (req, res, next) => {
    const dbOptions = db();
    if (!dbOptions) {
        res.status(404).json({
            status: "fail",
            data: "Hubo un error al comunicarse con la base de datos"
        })
    }
    const collectionClientes = collection(dbOptions, 'Clientes');
    const clientes = [];
    await getDocs(collectionClientes).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {

            clientes.push({ id: doc.id, ...doc.data() });
        });
    }) // Aquí ya tienes los datos en la variable `data`
    res.status(200).json({
        status: "successful",
        data: clientes
    })
})


const obtenerCliente = catchAsync(async (req, res, next) => {
    const dbOptions = db();
    if (!dbOptions) {
        res.status(404).json({
            status: "fail",
            data: "Hubo un error al comunicarse con la base de datos"
        });
    }

    const idCliente = req.params.id;
    const collectionClientes = collection(dbOptions, "Clientes");
    const clienteRef = doc(collectionClientes, idCliente);

    try {
        const clienteDoc = await getDoc(clienteRef);
        if (clienteDoc.exists()) {
            const cliente = { id: clienteDoc.id, ...clienteDoc.data() };
            res.status(200).json({
                status: "successful",
                data: cliente
            });
        } else {
            res.status(404).json({
                status: "fail",
                data: "No se encontró un cliente con el ID proporcionado"
            });
        }
    } catch (error) {
        res.status(500).json({
            status: "fail",
            data: "Hubo un error al buscar el cliente"
        });
    }
});

const actualizarCliente = catchAsync(async (req, res, next) => {
    const dbOptions = db();
    if (!dbOptions) {
        return res.status(404).json({
            status: "fail",
            data: "Hubo un error al comunicarse con la base de datos"
        });
    }
    const clienteID = req.body.clienteID;
    console.log(clienteID)
  
    const collectionSeccionII = collection(dbOptions, "Clientes");

    // Ejemplo de actualización de campos en la colección SeccionII
    const t =await updateDoc(doc(collectionSeccionII, clienteID.toString()), { 
        cliente: req.body.cliente,
        ciudad: req.body.ciudad
    });
    console.log("ola")
    res.status(200).json({
        status: "successful",
        data: "Cliente actualizado correctamente"
    });
});*/

const obtenerCliente = getOne(Cliente);

const obtenerClientes = getAll(Cliente);

const actualizarCliente = updateOne(Cliente);

const agregarCliente =  createOne(Cliente);

const deleteCliente = deleteOne(Cliente);

module.exports = { obtenerClientes, obtenerCliente , actualizarCliente, agregarCliente, deleteCliente};