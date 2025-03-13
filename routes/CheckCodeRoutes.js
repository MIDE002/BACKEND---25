// const express = require('express');
// const router = express.Router();
// const checkCodeController = require('../controllers/CheckCodeController');

// router.post('/', checkCodeController.saveCheckCode);
// router.get('/', checkCodeController.getAllCheckCodes);
// router.get('/roomcheck', checkCodeController.checkCheckCode);

// module.exports = router;


// const express = require('express');
// const router = express.Router();
// const roomcheckController = require('../controllers/RoomcheckController');

// router.post('/', roomcheckController.saveRoomcheck);
// router.get('/check', roomcheckController.checkRoomcheck);
// router.get('/', roomcheckController.getAllRoomchecks);

// module.exports = router;


const express = require('express');
const router = express.Router();
const checkCodeController = require('../controllers/CheckCodeController');

router.post('/', checkCodeController.checkCode);

module.exports = router;


