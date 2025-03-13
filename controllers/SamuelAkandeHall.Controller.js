const SamuelAkandeHall = require('../models/studentModel');


const createSamuelAkandeHall = async (req, res) => {
    console.log(req.body)
    try{
        const newstudent = await SamuelAkandeHall.create(req.body);
        res.json(newstudent);
       } catch (error) {
        res.status(500).json({ error: error.message})
       }
}

const getAllstudent = async (req,res) => {
    try{
        const students = await SamuelAkandeHall.find(); 

        res.status(200).json(students);
    } catch (err){
       res.status(400).json({ error: err.message });
    }
    
}

const getSamuelAkandeHallById = async (req,res) => {
    try{
        const students = await SamuelAkandeHall.findById(req.params.id); 

        if(!students)
        return res.status(400).json({error:'student not found'})
    
        res.status(200).json(students);
    } catch (err){
       res.status(500).json({ error:'problem on server side' });
    }
    
}




module.exports = {
    createSamuelAkandeHall,
    getAllstudent,
    getSamuelAkandeHallById,

}
