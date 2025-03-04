"use client";
import React, { useState } from 'react';

function RoomBooking() {
    const [selectedDate, setSelectedDate] = useState<string>("");
    const [selectedHostel, setSelectedHostel] = useState<string>("");
    const [selectedSemester, setSelectedSemester] = useState<string>("");
    const [selectedRoom, setSelectedRoom] = useState<string>("");
    const [selectedFile, setSelectedFile] = useState<File | null>(null); 
    const [successMessage, setSuccessMessage] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            if (!selectedDate || !selectedHostel || !selectedSemester || !selectedRoom || !selectedFile) { 
                setErrorMessage('Please fill in all fields and upload a document.');
                return;
            }
            
            const formData = new FormData();
            formData.append('Date', selectedDate);
            formData.append('Hostel', selectedHostel);
            formData.append('Semester', selectedSemester);
            formData.append('Room', selectedRoom);
            if (selectedFile) formData.append('Document', selectedFile); 
    
            const response = await fetch('http://localhost:5000/RoomBooking', {
                method: 'POST',
                body: formData 
            });
    
            if (response.ok) {
                setSuccessMessage('Room booking submitted successfully.');
                setSelectedDate('');
                setSelectedHostel('');
                setSelectedSemester('');
                setSelectedRoom('');
                setSelectedFile(null); 
            } else {
                setErrorMessage('Failed to submit room booking.');
            }
        } catch (error) {
            setErrorMessage('Error submitting room booking: ' + error.message);
        }
    };
    
    return (
        <div className="container mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold mb-4 text-center">Book a Room</h1>
            {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}
            {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg px-8 py-6 max-w-lg mx-auto" enctype='multipart/form-data'>
                <div className="mt-4">
                    <label className="block mb-2 font-semibold">Select Date:</label>
                    <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="border rounded-md py-2 px-4 w-full"
                    />
                </div>

                <div className="mt-4">
                    <label className="block mb-2 font-semibold">Select Hostel:</label>
                    <select
                        value={selectedHostel}
                        onChange={(e) => setSelectedHostel(e.target.value)}
                        className="border rounded-md py-2 px-4 w-full appearance-none"
                    >
                        <option value="" disabled>Select Hostel</option>
                        <option value="samuelakandehall">Samuel Akande hall</option>
                        <option value="topazhall">Topaz hall</option>
                        <option value="welchhall">Welch hall</option>
                        <option value="nealwilsonhall">Neal Wilson hall</option>
                        <option value="gideonbethelhall">Gideon Bethel hall</option>
                        <option value="emeraldhall">Emerald hall</option>
                        <option value="gamalielhall">Gamaliel hall</option>
                        <option value="crystalhall">Crystal hall</option>
                        <option value="justicedeborahhall">Justice Deborah hall</option>
                        <option value="feliciaadebisihall">Felicia Adebisi hall</option>
                        <option value="nyberghall">Nyberg hall</option>
                        <option value="ogdenhall">Ogden hall</option>
                        <option value="queenestherhall">Queen Esther hall</option>
                        <option value="platinumhall">Platinum hall</option>
                        <option value="diamondhall">Diamond hall</option>
                        <option value="whitehall">White Hall</option>
                        <option value="havillahhall">Havillah hall</option>
                    </select>
                </div>

                <div className="mt-4">
                    <label className="block mb-2 font-semibold">Select Semester:</label>
                    <select
                        value={selectedSemester}
                        onChange={(e) => setSelectedSemester(e.target.value)}
                        className="border rounded-md py-2 px-4 w-full appearance-none"
                    >
                        <option value="" disabled>Select Semester</option>
                        <option value="1st">1st Semester</option>
                        <option value="2nd">2nd Semester</option>
                    </select>
                </div>

                <div className="mt-4">
                    <label className="block mb-2 font-semibold">Select Room:</label>
                    <select
                        value={selectedRoom}
                        onChange={(e) => setSelectedRoom(e.target.value)}
                        className="border rounded-md py-2 px-4 w-full appearance-none"
                    >
                        <option value="" disabled>Select Room</option>
                        {['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10', 'A11', 'A12', 'A13', 'A14', 'A15', 'A16', 'A17', 'A18', 'A19', 'A20', 'A21', 'A22', 'A23', 'A24', 'A25', 'A26', 'A27', 'A28', 'A29',
                         'D7', 'D8', 'D9', 'D10', 'D11', 'D12', 'D13', 'D14', 'D15', 'D16', 'D17', 'D18', 'D19', 'D20', 'D21', 'D22', 'D23', 'D24', 'D25', 'D26', 'D27', 'D28', 'D29', 'D30',
                        'E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9', 'E10', 'E11', 'E12', 'E13', 'E14', 'E15', 'E16', 'E17', 'E18', 'E19', 'E20', 'E21', 'E22', 'E23', 'E24', 'E25', 'E26', 'E27', 'E28', 'E29', 'E30',
                        'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'F13', 'F14', 'F15', 'F16', 'F17', 'F18', 'F19', 'F20', 'F21', 'F22', 'F23', 'F24', 'F25', 'F26', 'F27', 'F28', 'F29', 'F30'].map(room => (
                            <option key={room} value={room}>{room}</option>
                        ))}
                    </select>
                </div>

                <div className="mt-4">
                    <label className="block mb-2 font-semibold">Upload Document:</label>
                    <input
                        type="file"
                        onChange={(e) => setSelectedFile(e.target.files ? e.target.files[0] : null)} 
                        className="border rounded-md py-2 px-4 w-full"
                    />
                </div>

                <div className="mt-4 text-center">
                    <button type="submit" className="bg-blue-800 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
export default RoomBooking;


// "use client";
// import React, { useState } from 'react';
// import axios from 'axios';

// function RoomBooking() {
//   const [selectedDate, setSelectedDate] = useState<string>("");
//   const [selectedHostel, setSelectedHostel] = useState<string>("");
//   const [selectedSemester, setSelectedSemester] = useState<string>("");
//   const [selectedRoom, setSelectedRoom] = useState<string>("");
//   const [selectedFile, setSelectedFile] = useState<File | null>(null); 
//   const [successMessage, setSuccessMessage] = useState<string>("");
//   const [errorMessage, setErrorMessage] = useState<string>("");
//   const [status, setStatus] = useState<string>('pending');

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     try {
//       if (!selectedDate || !selectedHostel || !selectedSemester || !selectedRoom || !selectedFile) { 
//         setErrorMessage('Please fill in all fields and upload a document.');
//         return;
//       }

//       const formData = new FormData();
//       formData.append('Date', selectedDate);
//       formData.append('Hostel', selectedHostel);
//       formData.append('Semester', selectedSemester);
//       formData.append('Room', selectedRoom);
//       if (selectedFile) formData.append('Document', selectedFile); 

//       const response = await fetch('http://localhost:5000/RoomBooking', {
//         method: 'POST',
//         body: formData 
//       });

//       if (response.ok) {
//         setSuccessMessage('Room booking submitted successfully.');
//         setSelectedDate('');
//         setSelectedHostel('');
//         setSelectedSemester('');
//         setSelectedRoom('');
//         setSelectedFile(null); 
//         setStatus('pending'); // Set status to pending after submission
//       } else {
//         setErrorMessage('Failed to submit room booking.');
//       }
//     } catch (error) {
//       if (error instanceof Error) {
//         setErrorMessage('Error submitting room booking: ' + error.message);
//       } else {
//         setErrorMessage('Error submitting room booking.');
//       }
//     }
//   };

//   const getStatusClass = (status: string): string => {
//     switch (status) {
//       case 'approved':
//         return 'bg-green-500 text-white px-4 py-2 rounded';
//       case 'disapproved':
//         return 'bg-red-500 text-white px-4 py-2 rounded';
//       default:
//         return 'bg-gray-300 text-black px-4 py-2 rounded';
//     }
//   };

//   return (
//     <div className="container mx-auto py-8 px-4">
//       <h1 className="text-3xl font-bold mb-4 text-center">Book a Room</h1>
//       {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}
//       {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
//       <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg px-8 py-6 max-w-lg mx-auto">
//         <div className="mt-4">
//           <p className={`px-4 py-2 ${getStatusClass(status)}`}>{status}</p> {/* Display status with appropriate styling */}
//         </div>
//         <div className="mt-4">
//           <label className="block mb-2 font-semibold">Select Date:</label>
//           <input
//             type="date"
//             value={selectedDate}
//             onChange={(e) => setSelectedDate(e.target.value)}
//             className="border rounded-md py-2 px-4 w-full"
//           />
//         </div>
//         <div className="mt-4">
//           <label className="block mb-2 font-semibold">Select Hostel:</label>
//           <select
//             value={selectedHostel}
//             onChange={(e) => setSelectedHostel(e.target.value)}
//             className="border rounded-md py-2 px-4 w-full appearance-none"
//           >
//             <option value="" disabled>Select Hostel</option>
//             <option value="samuelakandehall">Samuel Akande hall</option>
//             <option value="topazhall">Topaz hall</option>
//             <option value="welchhall">Welch hall</option>
//             <option value="nealwilsonhall">Neal Wilson hall</option>
//             <option value="gideonbethelhall">Gideon Bethel hall</option>
//             <option value="emeraldhall">Emerald hall</option>
//             <option value="gamalielhall">Gamaliel hall</option>
//             <option value="crystalhall">Crystal hall</option>
//             <option value="justicedeborahhall">Justice Deborah hall</option>
//             <option value="feliciaadebisihall">Felicia Adebisi hall</option>
//             <option value="nyberghall">Nyberg hall</option>
//             <option value="ogdenhall">Ogden hall</option>
//             <option value="queenestherhall">Queen Esther hall</option>
//             <option value="platinumhall">Platinum hall</option>
//             <option value="diamondhall">Diamond hall</option>
//             <option value="whitehall">White Hall</option>
//             <option value="havillahhall">Havillah hall</option>
//           </select>
//         </div>
//         <div className="mt-4">
//           <label className="block mb-2 font-semibold">Select Semester:</label>
//           <select
//             value={selectedSemester}
//             onChange={(e) => setSelectedSemester(e.target.value)}
//             className="border rounded-md py-2 px-4 w-full appearance-none"
//           >
//             <option value="" disabled>Select Semester</option>
//             <option value="1st">1st Semester</option>
//             <option value="2nd">2nd Semester</option>
//           </select>
//         </div>
//         <div className="mt-4">
//           <label className="block mb-2 font-semibold">Select Room:</label>
//           <select
//             value={selectedRoom}
//             onChange={(e) => setSelectedRoom(e.target.value)}
//             className="border rounded-md py-2 px-4 w-full appearance-none"
//           >
//             <option value="" disabled>Select Room</option>
//             {['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10', 'A11', 'A12', 'A13', 'A14', 'A15', 'A16', 'A17', 'A18', 'A19', 'A20', 'A21', 'A22', 'A23', 'A24', 'A25', 'A26', 'A27', 'A28', 'A29',
//               'D7', 'D8', 'D9', 'D10', 'D11', 'D12', 'D13', 'D14', 'D15', 'D16', 'D17', 'D18', 'D19', 'D20', 'D21', 'D22', 'D23', 'D24', 'D25', 'D26', 'D27', 'D28', 'D29', 'D30',
//               'E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9', 'E10', 'E11', 'E12', 'E13', 'E14', 'E15', 'E16', 'E17', 'E18', 'E19', 'E20', 'E21', 'E22', 'E23', 'E24', 'E25', 'E26', 'E27', 'E28', 'E29', 'E30',
//               'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'F13', 'F14', 'F15', 'F16', 'F17', 'F18', 'F19', 'F20', 'F21', 'F22', 'F23', 'F24', 'F25', 'F26', 'F27', 'F28', 'F29', 'F30'].map(room => (
//               <option key={room} value={room}>{room}</option>
//             ))}
//           </select>
//         </div>
//         <div className="mt-4">
//           <label className="block mb-2 font-semibold">Upload Document:</label>
//           <input
//             type="file"
//             onChange={(e) => setSelectedFile(e.target.files ? e.target.files[0] : null)} 
//             className="border rounded-md py-2 px-4 w-full"
//           />
//         </div>
//         <div className="mt-4 text-center">
//           <button type="submit" className="bg-blue-800 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50">
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default RoomBooking;
