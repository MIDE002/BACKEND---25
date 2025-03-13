
// const mongoose = require('mongoose');

// // Define the schema for the Student model
// const RoomBookingSchema = new mongoose.Schema({
//   Date: {
//     type: String,
//     // required: true
//   },
//   Hostel: {
//     type: String,
//     // required: true
//   },
//   Semester: {
//     type: String,
//     // required: true
//   },
//   Room: {
//     type: String,
//     // required: true
//   },

//   attachments: [
//     {
//       public_id: {
//         type: String,
//         required: false
//       },
//       url: {
//         type: String,
//         required: false
//       }
//     }
//   ],
// });

// // Create and export the Student model using the defined schema
// module.exports = mongoose.model('RoomBooking', RoomBookingSchema);



//new code 
// models/RoomBookingModel.js
const mongoose = require('mongoose');

const RoomBookingSchema = new mongoose.Schema({
  Date: String,
  Hostel: String,
  Semester: String,
  Room: String,
  status: {
    type: String,
    enum: ['pending', 'approved', 'disapproved'],
    default: 'pending',
  },
  attachments: [
    {
      public_id: String,
      url: String,
    }
  ],
});

module.exports = mongoose.model('RoomBooking', RoomBookingSchema);