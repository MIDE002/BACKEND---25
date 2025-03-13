const express = require('express');
const router = express.Router();
const {createSamuelAkandeHall,getAllSamuelAkandeHall,getSamuelAkandeHallById} = require('../controllers/SamuelAkandeHall.Controller'); 


router.get("/", getAllstudent)
router.get("/id", getSamuelAkandeHallById) 

router.post("/", createSamuelAkandeHall); 




router.put("/", (req, res) => {
  res.send({ data: "hi" });
});

router.delete("/", (req, res) => {
    res.send({ data: "hi" });
});

module.exports = router;
