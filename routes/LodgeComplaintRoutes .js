const express = require('express');
const router = express.Router();
const { createLodgeComplaint, getAllLodgeComplaint, getLodgeComplaintById, updateLodgeComplaintStatus } = require('../controllers/LodgeComplaintController');

router.get("/", getAllLodgeComplaint);
router.get("/getComplaintID/:id", getLodgeComplaintById);
router.post("/", createLodgeComplaint);
router.put("/status", updateLodgeComplaintStatus); // New route to update status

module.exports = router;
