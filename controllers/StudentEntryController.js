// controllers/StudentEntryController.js
const StudentEntry = require('../models/StudentEntryModel');

exports.enterMatricNumber = async (req, res) => {
  try {
    console.log("Received data:", req.body);

    const { code, matricNumber, course, date, roomNumber } = req.body;

    if (!code || !matricNumber || !course || !date || !roomNumber) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    const newEntry = new StudentEntry({ code, matricNumber, course, date, roomNumber });
    await newEntry.save();

    res.status(200).json({ message: "Details entered successfully!" });
  } catch (error) {
    console.error("Error saving to DB:", error);
    res.status(500).json({ message: "Failed to submit details", error: error.message });
  }
};