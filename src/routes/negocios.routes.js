const express = require('express');
const router = express.Router();
const { getNegocios } = require('../controllers/negocios.controlers');

router.get('/', getNegocios);

module.exports = router;