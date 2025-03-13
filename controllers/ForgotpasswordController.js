const Signup = require('../models/SignupModel');
const bcrypt = require('bcrypt');

exports.forgotPassword = async (req, res) => {
  console.log('Received forgot password request');
  const { email, oldPassword, newPassword } = req.body;
  console.log('Received request to reset password:', { email, oldPassword, newPassword });

  try {
    const user = await Signup.findOne({ email });

    if (!user) {
      console.log('User not found');
      return res.status(400).json({ error: 'User not found' });
    }

    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      console.log('Old password incorrect');
      return res.status(400).json({ error: 'Old password incorrect' });
    }

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);
    await user.save();

    console.log('Password updated successfully');
    res.status(200).json({ message: 'Password updated successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to reset password' });
  }
};
