// const CheckCode = require('../models/CheckCodeModel');

// // Save generated CheckCode
// exports.saveCheckCode = async (req, res) => {
//   try {
//     const { code } = req.body;
//     const newCheckCode = new CheckCode({ code });
//     await newCheckCode.save();
//     res.status(200).json({ message: 'CheckCode saved successfully!' });
//   } catch (error) {
//     res.status(500).json({ message: `Failed to save CheckCode: ${error.message}` });
//   }
// };

// // Get all saved CheckCodes
// exports.getAllCheckCodes = async (req, res) => {
//   try {
//     const checkCodes = await CheckCode.find();
//     res.status(200).json(checkCodes);
//   } catch (error) {
//     res.status(500).json({ message: `Failed to get CheckCodes: ${error.message}` });
//   }
// };

// // Check if CheckCode exists
// exports.checkCheckCode = async (req, res) => {
//   try {
//     const { code } = req.query;
//     const checkCode = await CheckCode.find({ code });
//     res.status(200).json(checkCode);
//   } catch (error) {
//     res.status(500).json({ message: `Failed to check CheckCode: ${error.message}` });
//   }
// };


const CheckCode = require('../models/CheckCodeModel');
const Roomcheck = require('../models/RoomcheckModel');

// Check if code is valid against Roomcheck
exports.checkCode = async (req, res) => {
  const { code } = req.body;

  try {
    // Check if the code exists in Roomcheck
    const roomcheck = await Roomcheck.findOne({ code });
    if (roomcheck) {
      // If code is found in Roomcheck, save it as valid in CheckCode
      const newCheckCode = new CheckCode({ code, isValid: true });
      await newCheckCode.save();
      res.status(200).json({ message: 'Code is valid!' });
    } else {
      // If code is not found in Roomcheck, save it as invalid in CheckCode
      const newCheckCode = new CheckCode({ code, isValid: false });
      await newCheckCode.save();
      res.status(200).json({ message: 'Code is invalid!' });
    }
  } catch (error) {
    res.status(500).json({ message: `Failed to check code: ${error.message}` });
  }
};
