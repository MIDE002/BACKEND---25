// models/StudentEntryModel.js
const mongoose = require('mongoose');

const StudentEntrySchema = new mongoose.Schema({
  code: { type: String, required: true },
  matricNumber: { type: String, required: true },
  course: { type: String, required: true },
  date: { type: Date, required: true },
  roomNumber: { type: String, required: true }
});

module.exports = mongoose.model('StudentEntry', StudentEntrySchema);