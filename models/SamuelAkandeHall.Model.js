// studentModel.js
const mongoose = require('mongoose');

// Define the schema for the SamuelAkandeHall model
const SamuelAkandeHallSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   age: {
//     type: Number,
//     required: true
//   },
//   grade: {
//     type: String,
//     required: true
//   }
});


module.exports = mongoose.model('SamuelAkandeHall', SamuelAkandeHallSchema);
