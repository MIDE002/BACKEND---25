const mongoose = require('mongoose');

const checkCodeSchema = new mongoose.Schema({
  code: { type: String, required: true },
  isValid: { type: Boolean, default: false },
  checkedTime: { type: Date, default: Date.now },
});

module.exports = mongoose.model('CheckCode', checkCodeSchema);
