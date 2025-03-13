const express = require('express');
const router = express.Router();
const ForgotpasswordController = require('../controllers/ForgotpasswordController');

router.post('/forgotpassword', ForgotpasswordController.forgotPassword);

module.exports = router;
