



const express = require('express');
const router = express.Router();
const {createEvent,getAllEvent,getEventById} = require('../controllers/HallAdminEventsController'); 


router.get("/", getAllEvent)
router.get("/:id", getEventById)

router.post("/", createEvent); 




router.put("/", (req, res) => {
  res.send({ data: "hi" });
});

router.delete("/", (req, res) => {
    res.send({ data: "hi" });
});

module.exports = router;
