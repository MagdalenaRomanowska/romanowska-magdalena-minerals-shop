const express = require('express');
const router = express.Router();

const MineralController = require('../controllers/minerals.controller');

router.get('/minerals', MineralController.getAll);
router.get('/minerals/:id', MineralController.getById);

module.exports = router;