const express = require('express');
const router = express.Router();
const { home, about } = require('../controllers/mainController') /* Declaro las variables para utilizarlas en el controlador */

router.get('/', home);
router.get('/about', about)

module.exports = router;