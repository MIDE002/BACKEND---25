const mongoose = require('mongoose');

const LodgeComplaintSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true
  },
  hostelName: {
    type: String,
    required: true
  },
  level: {
    type: Number,
    required: true
  },
  roomNumber: {
    type: String,
    required: true
  },
  issue: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: 'Pending'
  }
});

module.exports = mongoose.model('LodgeComplaint', LodgeComplaintSchema);
