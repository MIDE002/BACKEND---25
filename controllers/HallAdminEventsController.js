
const Event = require('../models/HallAdminEventsModel');


const createEvent = async (req, res) => {
    console.log(req.body)
    try{
        const newEvent = await Event.create(req.body);
        res.json(newEvent);
       } catch (error) {
        res.status(500).json({ error: error.message})
       }
}

const getAllEvent = async (req,res) => {
    try{
        const Events = await Event.find(); 

        res.status(200).json(Events);
    } catch (err){
       res.status(400).json({ error: err.message });
    }
    
}

const getEventById = async (req,res) => {
    try{
        const Events = await Event.findById(req.params.id); 

        if(!Events)
        return res.status(400).json({error:'Event not found'})
    
        res.status(200).json(Events);
    } catch (err){
       res.status(500).json({ error:'problem on server side' });
    }
    
}




module.exports = {
    createEvent,
    getAllEvent,
    getEventById,

}
