// const RoomBooking = require('../models/RoomBookingModel');

// const createRoomBooking = async (req, res) => {
//     console.log("Request Body:", req.body);
//     const attachments = req.files.Document; // Access attachment_0 directly

//     const formData = req.body;

//     // Merge formData, photo, and attachments
//     const formDataWithFiles = {
//       ...formData,
//       attachments
//     };

//     try {
//         const newRoomBooking = await RoomBooking.create(formDataWithFiles);
//         console.log("New Room Booking:", newRoomBooking);
//         res.json(newRoomBooking);
//     } catch (error) {
//         console.error("Error creating room booking:", error.message);
//         res.status(500).json({ error: error.message });
//     }
// }

// const getAllroomBooking = async (req, res) => {
//     try {
//         const RoomBookings = await RoomBooking.find();
//         console.log("All Room Bookings:", RoomBookings);
//         res.status(200).json(RoomBookings);
//     } catch (err) {
//         console.error("Error fetching all room bookings:", err.message);
//         res.status(400).json({ error: err.message });
//     }
// }

// const getAllroomBookings = async (req, res) => {
//     try {
//         const roomBookings = await RoomBooking.find();
//         // Map room bookings to include attachment URLs
//         const roomBookingsWithUrls = roomBookings.map(booking => {
//             return {
//                 _id: booking._id,
//                 Date: booking.Date,
//                 Hostel: booking.Hostel,
//                 Semester: booking.Semester,
//                 Room: booking.Room,
//                 attachments: booking.attachments.map(attachment => {
//                     return {
//                         _id: attachment._id,
//                         url: `http://localhost:5000/uploads/${attachment.public_id}`
//                     };
//                 }),
//                 __v: booking.__v
//             };
//         });
//         console.log("All Room Bookings with URLs:", roomBookingsWithUrls);
//         res.status(200).json(roomBookingsWithUrls);
//     } catch (error) {
//         console.error("Error fetching all room bookings with URLs:", error.message);
//         res.status(400).json({ error: error.message });
//     }
// };

// const getRoomBookingById = async (req, res) => {
//     try {
//         const students = await RoomBooking.findById(req.params.id);
//         console.log("Room Booking by ID:", students);

//         if (!RoomBookings)
//             return res.status(400).json({ error: 'student not found' });

//         res.status(200).json(students);
//     } catch (err) {
//         console.error("Error fetching room booking by ID:", err.message);
//         res.status(500).json({ error: 'problem on server side' });
//     }
// }

// module.exports = {
//     createRoomBooking,
//     getAllroomBooking,
//     getAllroomBookings,
//     getRoomBookingById,
// }

// const RoomBooking = require('../models/RoomBookingModel');

// const createRoomBooking = async (req, res) => {
//   console.log("Request Body:", req.body);
//   console.log("Request Files:", req.files);

//   const attachments = req.files.Document.map(file => ({
//     public_id: file.filename,
//     url: `/uploads/${file.filename}`, // Adjust URL as needed
//   }));

//   const formData = req.body;

//   // Merge formData, attachments
//   const formDataWithFiles = {
//     ...formData,
//     attachments,
//   };

//   try {
//     const newRoomBooking = await RoomBooking.create(formDataWithFiles);
//     console.log("New Room Booking:", newRoomBooking);
//     res.json(newRoomBooking);
//   } catch (error) {
//     console.error("Error creating room booking:", error.message);
//     res.status(500).json({ error: error.message });
//   }
// };

// // Other controller methods (getAllroomBooking, getRoomBookingById) remain unchanged

//old code
// const RoomBooking = require('../models/RoomBookingModel');

// const createRoomBooking = async (req, res) => {
//   console.log("Request Body:", req.body);
//   console.log("Request Files:", req.files);

//   const attachments = req.files.Document.map(file => ({
//     public_id: file.filename,
//     url: `/public/${file.filename}`, // Adjust URL as needed
//   }));

//   const formData = req.body;

//   // Merge formData with attachments
//   const formDataWithFiles = {
//     ...formData,
//     attachments,
//   };

//   try {
//     const newRoomBooking = await RoomBooking.create(formDataWithFiles);
//     console.log("New Room Booking:", newRoomBooking);
//     res.json(newRoomBooking);
//   } catch (error) {
//     console.error("Error creating room booking:", error.message);
//     res.status(500).json({ error: error.message });
//   }
// };

// const getAllroomBooking = async (req, res) => {
//   try {
//     const roomBookings = await RoomBooking.find();
//     console.log("All Room Bookings:", roomBookings);
//     res.status(200).json(roomBookings);
//   } catch (error) {
//     console.error("Error fetching all room bookings:", error.message);
//     res.status(500).json({ error: error.message });
//   }
// };

// const getRoomBookingById = async (req, res) => {
//   try {
//     const roomBooking = await RoomBooking.findById(req.params.id);
//     if (!roomBooking) {
//       return res.status(404).json({ error: 'Room booking not found' });
//     }
//     console.log("Room Booking by ID:", roomBooking);
//     res.status(200).json(roomBooking);
//   } catch (error) {
//     console.error("Error fetching room booking by ID:", error.message);
//     res.status(500).json({ error: error.message });
//   }
// };

// module.exports = {
//   createRoomBooking,
//   getAllroomBooking,
//   getRoomBookingById,
// };

//new code
// controllers/RoomBookingController.js
const RoomBooking = require("../models/RoomBookingModel");

const createRoomBooking = async (req, res) => {
  try {
    const attachments = req.files?.Document
      ? req.files.Document.map((file) => ({
          public_id: file.filename,
          url: `/public/${file.filename}`,
        }))
      : [];

    const newRoomBooking = await RoomBooking.create({
      ...req.body,
      attachments,
    });
    res.status(201).json(newRoomBooking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllroomBooking = async (req, res) => {
  try {
    const roomBookings = await RoomBooking.find({ Hostel: req.query.Hostel }); // TODO: PASS DATA HERE TO FIND BY HOSTEL NAME
    res.status(200).json(roomBookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getRoomBookingById = async (req, res) => {
  try {
    const roomBooking = await RoomBooking.findById(req.params.id);
    if (!roomBooking) {
      return res.status(404).json({ error: "Room booking not found" });
    }
    res.status(200).json(roomBooking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateRoomBookingStatus = async (req, res) => {
  try {
    const { id, status } = req.body;
    if (!["pending", "approved", "disapproved"].includes(status)) {
      return res.status(400).json({ error: "Invalid status value" });
    }

    const updatedBooking = await RoomBooking.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updatedBooking) {
      return res.status(404).json({ error: "Room booking not found" });
    }

    res.status(200).json(updatedBooking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createRoomBooking,
  getAllroomBooking,
  getRoomBookingById,
  updateRoomBookingStatus,
};
