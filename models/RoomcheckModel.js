


const mongoose = require('mongoose');

const roomcheckSchema = new mongoose.Schema({
  code: { type: String, required: true },
  generationTime: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Roomcheck', roomcheckSchema);

