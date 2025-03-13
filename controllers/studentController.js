const Student = require('../models/studentModel');


const createStudent = async (req, res) => {
    console.log(req.body)
    try{
        const newstudent = await Student.create(req.body);
        res.json(newstudent);
       } catch (error) {
        res.status(500).json({ error: error.message})
       }
}

const getAllstudent = async (req,res) => {
    try{
        const students = await Student.find(); 

        res.status(200).json(students);
    } catch (err){
       res.status(400).json({ error: err.message });
    }
    
}

const getStudentById = async (req,res) => {
    try{
        const students = await Student.findById(req.params.id); 

        if(!students)
        return res.status(400).json({error:'student not found'})
    
        res.status(200).json(students);
    } catch (err){
       res.status(500).json({ error:'problem on server side' });
    }
    
}




module.exports = {
    createStudent,
    getAllstudent,
    getStudentById,

}
