"use client";

// import React, { useState } from 'react';
// import axios from 'axios';

// function LodgeComplaint() {
//     // State variables
//     const [complaintDetails, setComplaintDetails] = useState({
//         hostelName: '',
//         level: '',
//         roomNumber: '',
//         issue: '',
//         description: ''
//     });
//     const [date, setDate] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');
//     const [successMessage, setSuccessMessage] = useState('');

//     const hostels = [
//         'Samuel Akande', 'Topaz', 'Welch', 'Winslow','Neal Wilson', 'NelsonMandela','Gideon Bethel', 
//         'Emerald', 'Gamaliel', 'Crystal', 'Justice Deborah', 'Felicia Adebisi', 
//         'Nyberg', 'Ogden', 'Queen Esther', 'Platinum', 'Diamond', 'White', 'Havillah' ,'Ameyo',

//     ];

//     const rooms = [
//         'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10', 'A11', 'A12', 'A13', 'A14', 'A15', 'A16', 
//         'A17', 'A18', 'A19', 'A20', 'A21', 'A22', 'A23', 'A24', 'A25', 'A26', 'A27', 'A28', 'A29', 'A30',
//         'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10', 'B11', 'B12', 'B13', 'B14', 'B15', 'B16', 
//         'B17', 'B18', 'B19', 'B20', 'B21', 'B22', 'B23', 'B24', 'B25', 'B26', 'B27', 'B28', 'B29', 'B30',
//         'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', 'C11', 'C12', 'C13', 'C14', 'C15', 'C16', 
//         'C17', 'C18', 'C19', 'C20', 'C21', 'C22', 'C23', 'C24', 'C25', 'C26', 'C27', 'C28', 'C29', 'C30',
//         'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10', 'D11', 'D12', 'D13', 'D14', 'D15', 'D16',
//          'D17', 'D18', 'D19', 'D20', 'D21', 'D22', 'D23', 'D24', 'D25', 'D26', 'D27', 'D28', 'D29', 'D30',
//         'E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9', 'E10', 'E11', 'E12', 'E13', 'E14', 'E15', 'E16',
//          'E17', 'E18', 'E19', 'E20', 'E21', 'E22', 'E23', 'E24', 'E25', 'E26', 'E27', 'E28', 'E29', 'E30',
//         'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'F13', 'F14', 'F15', 'F16',
//          'F17', 'F18', 'F19', 'F20', 'F21', 'F22', 'F23', 'F24', 'F25', 'F26', 'F27', 'F28', 'F29', 'F30'
//     ];

//     // Event handlers
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setComplaintDetails(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const handleDateChange = (e) => {
//         setDate(e.target.value);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // Check if all fields are filled
//         if (!Object.values(complaintDetails).every(field => field !== '') || date === '') {
//             setErrorMessage('Please fill in all fields.');
//             return;
//         }

//         try {
//             // Send complaint details to server
//             const response = await axios.post('http://localhost:5000/LodgeComplaint', {
//                 ...complaintDetails,
//                 date: date
//             });
//             // Update success message, clear fields, and reset form
//             setSuccessMessage('Submit successful');
//             resetForm();
//         } catch (error) {
//             // Handle errors
//             setErrorMessage('Error submitting complaint');
//             console.error('Error:', error);
//         }
//     };

//     const resetForm = () => {
//         // Reset complaint details and date
//         setComplaintDetails({
//             hostelName: '',
//             level: '',
//             roomNumber: '',
//             issue: '',
//             description: ''
//         });
//         setDate('');
//     };

//     return (
//         <div className="container mx-auto px-4 py-8">
//             <h1 className="text-3xl font-semibold text-gray-800 mb-6">Lodge a Complaint</h1>
//             <div className="bg-white shadow-md rounded-lg px-8 py-6">
//                 {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
//                 {successMessage && (
//                     <div className="mb-4">
//                         <p className="text-blue-400 mb-2">{successMessage}</p>
//                     </div>
//                 )}
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-4">
//                         <label htmlFor="hostelName" className="block text-gray-700 font-semibold mb-2">Hostel Name:</label>
//                         <select id="hostelName" name="hostelName" value={complaintDetails.hostelName} onChange={handleChange} className="w-full border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50">
//                             <option value="">_ _ _</option>
//                             {hostels.map((hostel, index) => (
//                                 <option key={index} value={hostel}>{hostel}</option>
//                             ))}
//                         </select>
//                     </div>

//                     <div className="mb-4">
//                         <label htmlFor="level" className="block text-gray-700 font-semibold mb-2">Level:</label>
//                         <input type="text" id="level" name="level" value={complaintDetails.level} onChange={handleChange} className="w-full border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50" />
//                     </div>

//                     <div className="mb-4">
//     <label htmlFor="roomNumber" className="block text-gray-700 font-semibold mb-2">Room Number:</label>
//     <select id="roomNumber" name="roomNumber" value={complaintDetails.roomNumber} onChange={handleChange} className="w-full border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50">
//         <option value="">_ _ _</option>
//         {rooms.map((room, index) => (
//             <option key={index} value={room}>{room}</option>
//         ))}
//     </select>
// </div>


//                     <div className="mb-4">
//                         <label htmlFor="issue" className="block text-gray-700 font-semibold mb-2">Issue:</label>
//                         <input type="text" id="issue" name="issue" value={complaintDetails.issue} onChange={handleChange} className="w-full border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50" />
//                     </div>

//                     <div className="mb-4">
//                         <label htmlFor="date" className="block text-gray-700 font-semibold mb-2">Date:</label>
//                         <input type="date" id="date" name="date" value={date} onChange={handleDateChange} className="w-full border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50" />
//                     </div>

//                     <div className="mb-4">
//                         <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">Description:</label>
//                         <textarea id="description" name="description" value={complaintDetails.description} onChange={handleChange} className="w-full h-32 border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50"></textarea>
//                     </div>

//                     <button type="submit" className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50">
//                         Submit Complaint
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default LodgeComplaint;

"use client";


import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

interface ComplaintDetails {
    hostelName: string;
    level: string;
    roomNumber: string;
    issue: string;
    description: string;
}

function LodgeComplaint() {
    const [complaintDetails, setComplaintDetails] = useState<ComplaintDetails>({
        hostelName: '',
        level: '',
        roomNumber: '',
        issue: '',
        description: ''
    });
    const [date, setDate] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [successMessage, setSuccessMessage] = useState<string>('');

    const hostels: string[] = [
        'Samuel Akande', 'Topaz', 'Welch', 'Winslow','Neal Wilson', 'NelsonMandela','Gideon Bethel', 
        'Emerald', 'Gamaliel', 'Crystal', 'Justice Deborah', 'Felicia Adebisi', 
        'Nyberg', 'Ogden', 'Queen Esther', 'Platinum', 'Diamond', 'White', 'Havillah' ,'Ameyo',
    ];

    const rooms: string[] = [
        'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10', 'A11', 'A12', 'A13', 'A14', 'A15', 'A16', 
        'A17', 'A18', 'A19', 'A20', 'A21', 'A22', 'A23', 'A24', 'A25', 'A26', 'A27', 'A28', 'A29', 'A30',
        'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10', 'B11', 'B12', 'B13', 'B14', 'B15', 'B16', 
        'B17', 'B18', 'B19', 'B20', 'B21', 'B22', 'B23', 'B24', 'B25', 'B26', 'B27', 'B28', 'B29', 'B30',
        'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', 'C11', 'C12', 'C13', 'C14', 'C15', 'C16', 
        'C17', 'C18', 'C19', 'C20', 'C21', 'C22', 'C23', 'C24', 'C25', 'C26', 'C27', 'C28', 'C29', 'C30',
        'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10', 'D11', 'D12', 'D13', 'D14', 'D15', 'D16',
         'D17', 'D18', 'D19', 'D20', 'D21', 'D22', 'D23', 'D24', 'D25', 'D26', 'D27', 'D28', 'D29', 'D30',
        'E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9', 'E10', 'E11', 'E12', 'E13', 'E14', 'E15', 'E16',
         'E17', 'E18', 'E19', 'E20', 'E21', 'E22', 'E23', 'E24', 'E25', 'E26', 'E27', 'E28', 'E29', 'E30',
        'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'F13', 'F14', 'F15', 'F16',
         'F17', 'F18', 'F19', 'F20', 'F21', 'F22', 'F23', 'F24', 'F25', 'F26', 'F27', 'F28', 'F29', 'F30'
    ];

    const handleChange = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setComplaintDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
        setDate(e.target.value);
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!Object.values(complaintDetails).every(field => field !== '') || date === '') {
            setErrorMessage('Please fill in all fields.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/LodgeComplaint', {
                
                ...complaintDetails,
                date: date
            });
            setSuccessMessage('Submit successful');
            resetForm();
        } catch (error) {
            setErrorMessage('Error submitting complaint');
            console.error('Error:', error);
        }
    };

    const resetForm = () => {
        setComplaintDetails({
            hostelName: '',
            level: '',
            roomNumber: '',
            issue: '',
            description: ''
        });
        setDate('');
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-semibold text-gray-800 mb-6">Lodge a Complaint</h1>
            <div className="bg-white shadow-md rounded-lg px-8 py-6">
                {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
                {successMessage && (
                    <div className="mb-4">
                        <p className="text-blue-400 mb-2">{successMessage}</p>
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="hostelName" className="block text-gray-700 font-semibold mb-2">Hostel Name:</label>
                        <select id="hostelName" name="hostelName" value={complaintDetails.hostelName} onChange={handleChange} className="w-full border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50">
                            <option value="">_ _ _</option>
                            {hostels.map((hostel, index) => (
                                <option key={index} value={hostel}>{hostel}</option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="level" className="block text-gray-700 font-semibold mb-2">Level:</label>
                        <input type="text" id="level" name="level" value={complaintDetails.level} onChange={handleChange} className="w-full border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="roomNumber" className="block text-gray-700 font-semibold mb-2">Room Number:</label>
                        <select id="roomNumber" name="roomNumber" value={complaintDetails.roomNumber} onChange={handleChange} className="w-full border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50">
                            <option value="">_ _ _</option>
                            {rooms.map((room, index) => (
                                <option key={index} value={room}>{room}</option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="issue" className="block text-gray-700 font-semibold mb-2">Issue:</label>
                        <input type="text" id="issue" name="issue" value={complaintDetails.issue} onChange={handleChange} className="w-full border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="date" className="block text-gray-700 font-semibold mb-2">Date:</label>
                        <input type="date" id="date" name="date" value={date} onChange={handleDateChange} className="w-full border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">Description:</label>
                        <textarea id="description" name="description" value={complaintDetails.description} onChange={handleChange} className="w-full h-32 border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50"></textarea>
                    </div>

                    <button type="submit" className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50">
                        Submit Complaint
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LodgeComplaint;





