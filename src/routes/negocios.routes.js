const express = require('express');
const router = express.Router();
const requireAuth = require('../middleware/requireAuth');
const { getNegocios, getNegocio } = require('../controllers/negocios.controlers');

router.get('/', getNegocios);
router.get('/admin/negocio', requireAuth, getNegocio);
module.exports = router;