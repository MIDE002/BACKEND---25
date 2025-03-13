// routes/StudentEntryRoutes.js
const express = require('express');
const router = express.Router();
const studentEntryController = require('../controllers/StudentEntryController');

router.post('/EnterMatricNumber', studentEntryController.enterMatricNumber);

module.exports = router;