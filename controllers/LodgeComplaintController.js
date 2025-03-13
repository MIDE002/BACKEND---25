const LodgeComplaint = require('../models/LodgeComplaintModel');

const createLodgeComplaint = async (req, res) => {
    console.log(req.body)
    try {
        const newLodgeComplaint = await LodgeComplaint.create(req.body);
        res.json(newLodgeComplaint);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getAllLodgeComplaint = async (req, res) => {
    try {
        const LodgeComplaints = await LodgeComplaint.find();
        res.status(200).json(LodgeComplaints);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}
// const getAllLodgeComplaintByMatricNumber  = async (req, res) => {
//     try {
//         const { matricNumber } = req.query; // Assuming the matric number is passed as a query parameter

//         // Add a condition to find complaints by the matric number
//         const LodgeComplaints = await LodgeComplaint.find({ matricNumber });

//         res.status(200).json(LodgeComplaints);
//     } catch (err) {
//         res.status(400).json({ error: err.message });
//     }
// }


const getLodgeComplaintById = async (req, res) => {
    try {
        console.log(req.params.id)
        const LodgeComplaints = await LodgeComplaint.findById(req.params.id);
        if (!LodgeComplaints)
            return res.status(400).json({ error: 'LodgeComplaint not found' });

        res.status(200).json(LodgeComplaints);
    } catch (err) {
        res.status(500).json({ error: 'problem on server side' });
    }
}

const updateLodgeComplaintStatus = async (req, res) => {
    try {
        const { id, status } = req.body;
        const updatedComplaint = await LodgeComplaint.findByIdAndUpdate(id, { status }, { new: true });

        if (!updatedComplaint)
            return res.status(400).json({ error: 'LodgeComplaint not found' });

        res.status(200).json(updatedComplaint);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = {
    createLodgeComplaint,
    getAllLodgeComplaint,
    getLodgeComplaintById,
    updateLodgeComplaintStatus
}
