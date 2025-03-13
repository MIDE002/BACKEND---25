const express = require('express');
const router = express.Router();
const {createStudent,getAllstudent,getStudentById} = require('../controllers/studentController'); 


router.get("/", getAllstudent)
router.get("/id", getStudentById) 

router.post("/", createStudent); 




router.put("/", (req, res) => {
  res.send({ data: "hi" });
});

router.delete("/", (req, res) => {
    res.send({ data: "hi" });
});

module.exports = router;
