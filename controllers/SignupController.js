// const bcrypt = require('bcrypt');
// const User = require('../models/SignupModel');

// exports.signup = async (req, res) => {
//   try {
//     const {
//       firstName,
//       surName,
//       idType,
//       matricNumber,
//       password,
//       email,
//       contactNo,
//       dob,
//       gender
//     } = req.body;

//     // Check if email already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ error: 'Email already exists' });
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Save user data to the database
//     await User.create({
//       firstName,
//       surName,
//       idType,
//       matricNumber,
//       password: hashedPassword,
//       email,
//       contactNo,
//       dob,
//       gender
//     });

//     // Log successful user registration
//     console.log('User registered successfully:', email);

//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     console.error('Error registering user:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

const bcrypt = require("bcrypt");
const User = require("../models/SignupModel");

exports.signup = async (req, res) => {
  try {
    const {
      firstName,
      surName,
      idType,
      matricNumber,
      password,
      email,
      contactNo,
      dob,
      hostel,
      gender,
    } = req.body;

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    // Validate email based on idType
    const studentDomain = "@student.babcock.edu.ng";
    const adminDomain = "@admin.babcock.edu.ng";
    const halladminDomain = {
      samuel_akande_hall: "@samuelakandehall.babcock.edu.ng",
      topaz_hall: "@topazhall.babcock.edu.ng",
      winslow_hall: "@winslow.babcock.edu.ng",
      welch_hall: "@welchhall.babcock.edu.ng",
      neal_wilson_hall: "@nealwilsonhall.babcock.edu.ng",
      gideon_trooper_hall: "@gideontrooperhall.babcock.edu.ng",
      nelson_mandela: "@nelson_mandela.babcock.edu.ng",
      bethel_hall: "@bethelhall.babcock.edu.ng",
      emerald_hall: "@emeraldhall.babcock.edu.ng",
      gamaliel_hall: "@gamalielhall.babcock.edu.ng",
      crystal_hall: "@crystalhall.babcock.edu.ng",
      justice_deborah_hall: "@justicedeborahhall.babcock.edu.ng",
      felicia_adebisi_hall: "@feliciaadebisihall.babcock.edu.ng",
      nyberg_hall: "@nyberghall.babcock.edu.ng",
      ogden_hall: "@ogdenhall.babcock.edu.ng",
      queen_esther_hall: "@queenestherhall.babcock.edu.ng",
      platinum_hall: "@platinumhall.babcock.edu.ng",
      diamond_hall: "@diamondhall.babcock.edu.ng",
      white_hall: "@whitehall.babcock.edu.ng",
      ameyo_hall: "@ameyohall.babcock.edu.ng",
      havillah_hall: "@havillahhall.babcock.edu.ng",
    };

    if (idType === "student" && !email.endsWith(studentDomain)) {
      return res
        .status(400)
        .json({ error: "Invalid email domain for student account" });
    }

    if (idType === "admin" && !email.endsWith(adminDomain)) {
      return res
        .status(400)
        .json({ error: "Invalid email domain for admin account" });
    }

    if (idType === "hall admin" && !email.endsWith(halladminDomain)) {
      return res
        .status(400)
        .json({ error: "Invalid email domain for hall admin account" });
    }
    // // Disable registration for admin accounts
    if (idType === "admin") {
      return res
        .status(400)
        .json({ error: "Registration not allowed for admin accounts" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user data to the database
    await User.create({
      firstName,
      surName,
      idType,
      matricNumber,
      password: hashedPassword,
      email,
      contactNo,
      dob,
      hostel,
      gender,
    });

    // await User({
    //   firstName: firstName,
    //   surName: surName,
    //   idType: idType,
    //   matricNumber: matricNumber,
    //   password: hashedPassword,
    //   email: email,
    //   contactNo: contactNo,
    //   dob: dob,
    //   hostel: hostel,
    //   gender: gender
    // })
    // await User.save();

    // Log successful user registration
    console.log("User registered successfully:", email);

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
