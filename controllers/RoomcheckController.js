


const Roomcheck = require('../models/RoomcheckModel');

// Save generated Roomcheck
exports.saveRoomcheck = async (req, res) => {
  try {
    const { code } = req.body;
    const newRoomcheck = new Roomcheck({ code });
    await newRoomcheck.save();
    res.status(200).json({ message: 'Roomcheck saved successfully!' });
  } catch (error) {
    res.status(500).json({ message: `Failed to save Roomcheck: ${error.message}` });
  }
};

// Optionally: Get all saved Roomchecks (for testing purposes)
exports.getAllRoomchecks = async (req, res) => {
  try {
    const roomchecks = await Roomcheck.find();
    res.status(200).json(roomchecks);
  } catch (error) {
    res.status(500).json({ message: `Failed to get Roomchecks: ${error.message}` });
  }
};
