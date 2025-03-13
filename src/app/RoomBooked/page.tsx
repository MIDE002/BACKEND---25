// // RoomBooked.js
// import React, { useState, useEffect } from 'react';

// function RoomBooked() {
//     const [bookings, setBookings] = useState([]);
//     const [errorMessage, setErrorMessage] = useState("");

//     useEffect(() => {
//         fetchBookings();
//     }, []);

//     const fetchBookings = async () => {
//         try {
//             const response = await fetch('http://localhost:5000/RoomBooked');
//             if (response.ok) {
//                 const data = await response.json();
//                 setBookings(data);
//             } else {
//                 setErrorMessage('Failed to fetch bookings.');
//             }
//         } catch (error) {
//             setErrorMessage('Error fetching bookings: ' + error.message);
//         }
//     };

//     const handleDownload = async (url) => {
//         try {
//             const response = await fetch(url);
//             if (response.ok) {
//                 const blob = await response.blob();
//                 const link = document.createElement('a');
//                 link.href = window.URL.createObjectURL(blob);
//                 link.download = url.split('/').pop();
//                 document.body.appendChild(link);
//                 link.click();
//                 document.body.removeChild(link);
//             } else {
//                 setErrorMessage('Failed to download document.');
//             }
//         } catch (error) {
//             setErrorMessage('Error downloading document: ' + error.message);
//         }
//     };

//     return (
//         <div className="container mx-auto py-8">
//             <h1 className="text-3xl font-bold mb-4">Booked Rooms</h1>
//             {errorMessage && <p className="text-red-500">{errorMessage}</p>}
//             <div className="bg-white shadow-md rounded-lg px-8 py-6">
//                 {bookings.map((booking) => (
//                     <div key={booking._id} className="border-b py-4">
//                         <p><strong>Date:</strong> {booking.Date}</p>
//                         <p><strong>Hostel:</strong> {booking.Hostel}</p>
//                         <p><strong>Semester:</strong> {booking.Semester}</p>
//                         <p><strong>Room:</strong> {booking.Room}</p>
//                         {booking.attachments && booking.attachments.length > 0 && (
//                             <div>
//                                 <strong>Document:</strong>
//                                 <button
//                                     onClick={() => handleDownload(booking.attachments[0].url)}
//                                     className="ml-2 text-blue-800 underline"
//                                 >
//                                     Download
//                                 </button>
//                             </div>
//                         )}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default RoomBooked;




// OLD
"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Booking {
  _id: string;
  Date: string;
  Hostel: string;
  Semester: string;
  Room: string;
  attachments: { url: string }[];
  status: string;
}

function RoomBooked() {
  const [roomBookings, setRoomBookings] = useState<Booking[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    fetchRoomBookings();
  }, []);

  const fetchRoomBookings = async () => {
    try {
      const response = await fetch('http://localhost:5000/RoomBooking');
      if (response.ok) {
        const data = await response.json() as Booking[];
        console.log("Room Bookings Data:", data);
        setRoomBookings(data);
      } else {
        setErrorMessage('Failed to fetch room bookings.');
      }
    } catch (error) {
      setErrorMessage('Error fetching room bookings: ' + error.message);
    }
  };

 
  const updateBookingStatus = async (id: string, newStatus: string) => {
    try {
      console.log(`Updating status for ID: ${id} to ${newStatus}`);
      const response = await axios.put('http://localhost:5000/RoomBooking/status', { id, status: newStatus });
      if (response.status === 200) {
        setRoomBookings(prevBookings =>
          prevBookings.map(booking =>
            booking._id === id ? { ...booking, status: newStatus } : booking
          )
        );
        localStorage.setItem('updatedRoomBookings', JSON.stringify(
          roomBookings.map(booking =>
            booking._id === id ? { ...booking, status: newStatus } : booking
          )
        ));
        console.log('Status updated successfully');
      }
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };


  const handleDownload = (attachment) => {
    if (!attachment || !attachment.public_id) {
      console.error('Attachment or attachment.public_id is undefined');
      return;
    }
  
    const attachmentUrl = `http://localhost:5000/uploads/${attachment.public_id}`;
    
    const anchor = document.createElement('a');
    anchor.href = attachmentUrl;
    const filename = attachmentUrl.substring(attachmentUrl.lastIndexOf('/') + 1);
    anchor.download = filename;
    anchor.click();
  };
  

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Room Bookings</h1>
      {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {roomBookings.map((booking, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <p><strong>Date:</strong> {booking.Date}</p>
            <p><strong>Hostel:</strong> {booking.Hostel}</p>
            <p><strong>Semester:</strong> {booking.Semester}</p>
            <p><strong>Room:</strong> {booking.Room}</p>
            <p><strong>Status:</strong> {booking.status}</p>

            <div>
              <strong>Attachments:</strong>
              <ul>
                {booking.attachments.map((attachment, index) => (
                  <li key={index} className="mt-2">
                    <button
          key={index}
          onClick={() => handleDownload(attachment)}
          className="bg-blue-800 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
        >
          Download Attachment 
        </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className='mt-4'>
            <button
                onClick={() => updateBookingStatus(booking._id, 'approved')}
                className={`px-4 py-2 mr-2 rounded ${booking.status === 'approved' ? 'bg-green-500 text-white' : 'bg-gray-300'}`}
              >
                Approve
              </button>
              <button
                onClick={() => updateBookingStatus(booking._id, 'disapproved')}
                className={`px-4 py-2 rounded ${booking.status === 'disapproved' ? 'bg-red-500 text-white' : 'bg-gray-300'}`}
              >
                Disapprove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RoomBooked;




//new code 

// "use client";

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// interface Booking {
//   _id: string;
//   Date: string;
//   Hostel: string;
//   Semester: string;
//   Room: string;
//   attachments: { url: string }[];
//   status: string;
// }

// function RoomBooked() {
//   const [roomBookings, setRoomBookings] = useState<Booking[]>([]);
//   const [errorMessage, setErrorMessage] = useState<string>("");

//   useEffect(() => {
//     const savedBookings = localStorage.getItem('updatedRoomBookings');
//     if (savedBookings) {
//       setRoomBookings(JSON.parse(savedBookings));
//     } else {
//       fetchRoomBookings();
//     }
//   }, []);

//   const fetchRoomBookings = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/RoomBooking');
//       if (response.ok) {
//         const data = await response.json() as Booking[];
//         setRoomBookings(data);
//         localStorage.setItem('updatedRoomBookings', JSON.stringify(data));
//       } else {
//         setErrorMessage('Failed to fetch room bookings.');
//       }
//     } catch (error) {
//       setErrorMessage('Error fetching room bookings: ' + error.message);
//     }
//   };

//   const updateBookingStatus = async (id: string, newStatus: string) => {
//     try {
//       const response = await axios.put('http://localhost:5000/RoomBooking/status', { id, status: newStatus });
//       if (response.status === 200) {
//         const updatedBookings = roomBookings.map(booking =>
//           booking._id === id ? { ...booking, status: newStatus } : booking
//         );
//         setRoomBookings(updatedBookings);
//         localStorage.setItem('updatedRoomBookings', JSON.stringify(updatedBookings));
//       }
//     } catch (error) {
//       console.error('Error updating status:', error);
//     }
//   };

//   return (
//     <div className="container mx-auto py-8 px-4">
//       <h1 className="text-3xl font-bold mb-4 text-center">Room Bookings</h1>
//       {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {roomBookings.map((booking, index) => (
//           <div key={index} className="bg-white shadow-md rounded-lg p-6">
//             <p><strong>Date:</strong> {booking.Date}</p>
//             <p><strong>Hostel:</strong> {booking.Hostel}</p>
//             <p><strong>Semester:</strong> {booking.Semester}</p>
//             <p><strong>Room:</strong> {booking.Room}</p>
//             <p><strong>Status:</strong> {booking.status}</p>
//             <div className='mt-4'>
//               <button
//                 onClick={() => updateBookingStatus(booking._id, 'approved')}
//                 className={`px-4 py-2 mr-2 rounded ${booking.status === 'approved' ? 'bg-green-500 text-white' : 'bg-gray-300'}`}
//               >
//                 Approve
//               </button>
//               <button
//                 onClick={() => updateBookingStatus(booking._id, 'disapproved')}
//                 className={`px-4 py-2 rounded ${booking.status === 'disapproved' ? 'bg-red-500 text-white' : 'bg-gray-300'}`}
//               >
//                 Disapprove
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default RoomBooked;
