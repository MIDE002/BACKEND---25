

const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});
 // Create a new user
 const newUser = new User({ email, password: hashedPassword });
 await newUser.save();
 
const User = mongoose.model('Login', LoginSchema);

module.exports = User;


