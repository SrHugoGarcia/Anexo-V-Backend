const express = require('express');
const { generarAnexoV, generarInforme } = require('../controllers/anexoVController');

const router = express.Router();

router.route('/').post(generarAnexoV)
router.route('/informe').post(generarInforme);

module.exports = router;