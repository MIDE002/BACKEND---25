// const User = require('../models/SignupModel');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

// exports.login = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Find user by email
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(400).json({ error: 'Invalid email or password' });
//     }

//     // Compare password
//     const isPasswordValid = await bcrypt.compare(password, user.password);

//     if (!isPasswordValid) {
//       return res.status(400).json({ error: 'Invalid email or password' });
//     }

//     // If email and password are correct, generate token
//     const token = jwt.sign({ userId: user._id }, 'w2w3h8b9f', { expiresIn: '1h' });

//        // Log the user information in the terminal
//        console.log('User logged in:', user.email);


//     res.json({ token });
//   } catch (error) {
//     console.error('Login error:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };


const User = require('../models/SignupModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    // Compare password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    // If email and password are correct, generate token
    const token = jwt.sign({ userId: user._id }, 'w2w3h8b9f', { expiresIn: '1h' });

       // Log the user information in the terminal
       console.log('User logged in:', user.email, user.firstName, user.surName);


       res.json({ token, user_email: user.email, firstName: user.firstName, lastName: user.surName });
      } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};







