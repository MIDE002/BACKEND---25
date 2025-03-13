const mongoose = require('mongoose');

const SignupSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  surName: {
    type: String,
    required: true
  },
  idType: {
    type: String,
    required: true
  },
  matricNumber: {
    type: String,
    required: function () {
      return this.idType !== 'Admin' && this.idType !== 'Hall admin';
    }
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  contactNo: {
    type: String,
    required: function () {
      return this.idType !== 'Admin';
    }
  },
  dob: {
    type: Date,
    required: function () {
      return this.idType !== 'Admin';
    }
  },
  hostel: {
    type: String,
    required: function () {
      return this.idType !== 'Admin' && this.idType !== 'Hall admin';
    }
  },
  gender: {
    type: String,
    required: function () {
      return this.idType !== 'Admin';
    }
  }
});

module.exports = mongoose.model('Signup', SignupSchema);
