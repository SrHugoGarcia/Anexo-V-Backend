const express = require('express');
const { obtenerClientes, obtenerCliente, actualizarCliente, agregarCliente, deleteCliente } = require('../controllers/clienteController');

const router = express.Router();

router.route('/').get(obtenerClientes).post(agregarCliente)
router.route('/:id').get(obtenerCliente).patch(actualizarCliente).delete(deleteCliente);


module.exports = router;