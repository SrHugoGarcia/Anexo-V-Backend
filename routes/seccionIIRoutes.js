const express = require('express');
const { obtenerSeccionesII, obtenerSeccionII,actualizarSeccionII, eliminarSeccionII, crearSeccionII, uploadImgCamara, subirImgCamara } = require('../controllers/seccionIIController');

const router = express.Router();

router.route('/').get(obtenerSeccionesII).post(crearSeccionII)
router.route('/:id').get(obtenerSeccionII).patch(uploadImgCamara,subirImgCamara,actualizarSeccionII).delete(eliminarSeccionII);

module.exports = router;