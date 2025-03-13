
const express = require('express');
const SignupController = require('../controllers/SignupController');

const router = express.Router();

router.post('/', SignupController.signup);


module.exports = router;




