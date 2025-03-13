// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use('/uploads', express.static('public/uploads'));




// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

const StudentRoutes = require("./routes/studentRoutes")
const LodgeComplaintRoutes = require("./routes/LodgeComplaintRoutes ")
const SignupRoutes = require("./routes/SignupRoutes")
const RoomBookingRoutes = require('./routes/RoomBookingRoutes');
const HallAdminEventsRoutes = require("./routes/HallAdminEventsRoutes");
const loginRoutes = require('./routes/loginRoutes');
const RoomcheckRoutes = require('./routes/RoomcheckRoutes'); // Corrected import statement
const CheckCodeRoutes = require('./routes/CheckCodeRoutes');
const changePasswordRoutes = require('./routes/ChangePasswordRoutes');

const ForgotpasswordRoutes = require('./routes/ForgotpasswordRoutes');
const StudentEntryRoutes = require('./routes/StudentEntryRoutes');




app.use("/student", StudentRoutes);
app.use("/LodgeComplaint", LodgeComplaintRoutes);
app.use("/signup", SignupRoutes);
app.use('/RoomBooking', RoomBookingRoutes);
app.use('/HallAdminEvents', HallAdminEventsRoutes);
app.use('/login', loginRoutes);
app.use('/Roomcheck', RoomcheckRoutes);
app.use('/CheckCode', CheckCodeRoutes);

app.use('/changepassword', changePasswordRoutes);  // Changed route path for clarity

app.use('/Forgotpassword', ForgotpasswordRoutes);
app.use('/StudentEntry', StudentEntryRoutes);





// MongoDB Configuration and name of the db in mongodb
mongoose.connect('mongodb://localhost:27017/KB', { 
                  useNewUrlParser: true, 
                  useUnifiedTopology: true 
                });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});