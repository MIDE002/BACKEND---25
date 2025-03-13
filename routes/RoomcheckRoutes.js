

const express = require('express');
const router = express.Router();
const roomcheckController = require('../controllers/RoomcheckController');

router.post('/', roomcheckController.saveRoomcheck);

// Optional: route to get all Roomchecks
router.get('/', roomcheckController.getAllRoomchecks);

module.exports = router;
