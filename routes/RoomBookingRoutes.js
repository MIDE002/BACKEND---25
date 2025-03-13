// const express = require('express');
// const router = express.Router();
// const multer = require('multer');

// const {createRoomBooking, getAllroomBooking,getRoomBookingById} = require('../controllers/RoomBookingController'); 

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './public/uploads/'); // Specify the directory where files will be stored
//   },
//   filename: function (req, file, cb) {
//       const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
//     // Generate a unique filename for each file
//     cb(null, uniqueSuffix+ '-' + file.originalname );
//   }
// });

// // Initialize multer with the storage engine
// const upload = multer({ storage: storage });

// router
//   .route('/')
//   .post(upload.fields([{ name: 'Document', maxCount: 10 }, ]), createRoomBooking)


// router.get("/", getAllroomBooking)
// router.get("/id", getRoomBookingById) 










// router.put("/", (req, res) => {
//   res.send({ data: "hi" });
// });

// router.delete("/", (req, res) => {
//     res.send({ data: "hi" });
// });

// module.exports = router;










//old code

// const express = require('express');
// const router = express.Router();
// const multer = require('multer');
// const { createRoomBooking, getAllroomBooking, getRoomBookingById } = require('../controllers/RoomBookingController');

// // Configure multer storage
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './public/uploads/'); // Directory where files will be stored
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
//     cb(null, uniqueSuffix + '-' + file.originalname);
//   }
// });

// // Initialize multer with the storage engine
// const upload = multer({ storage: storage });

// // POST endpoint for creating a new room booking with attachments
// router.post('/', upload.fields([{ name: 'Document', maxCount: 10 }]), createRoomBooking);

// // GET endpoint for fetching all room bookings
// router.get('/', getAllroomBooking);

// // GET endpoint for fetching a room booking by ID
// router.get('/:id', getRoomBookingById);

// module.exports = router;




//new code 

// routes/RoomBookingRoutes.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const {
  createRoomBooking,
  getAllroomBooking,
  getRoomBookingById,
  updateRoomBookingStatus
} = require('../controllers/RoomBookingController');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

router.post('/', upload.fields([{ name: 'Document', maxCount: 10 }]), createRoomBooking);
router.get('/', getAllroomBooking);
router.get('/:id', getRoomBookingById);
router.put('/status', updateRoomBookingStatus);

module.exports = router;




























// const express = require('express');
// const router = express.Router();
// const multer = require('multer');
// const { createRoomBooking, getAllroomBooking, getRoomBookingById } = require('../controllers/RoomBookingController');

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './public/uploads/');
//     },
//     filename: function (req, file, cb) {
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
//         cb(null, uniqueSuffix + '-' + file.originalname);
//     }
// });

// const upload = multer({ storage: storage });

// router
//     .route('/')
//     .post(upload.fields([{ name: 'Document', maxCount: 10 }]), createRoomBooking)
//     .get(getAllroomBooking);

// router.get("/:id", getRoomBookingById);

// module.exports = router;
