"use client";

// import React, { useState, useEffect } from 'react';
// import SearchPage from '@/component/SearchPage';
// import axios from 'axios';

// interface Complaint {
//   _id: string;
//   description: string;
//   date: string;
//   hostelName: string;
//   issue: string;
//   level: string;
//   roomNumber: string;
//   status: string;
// }

// function ResidentComplaints() {
  
//   const [residentComplaints, setResidentComplaints] = useState<Complaint[]>([]);

  
//   useEffect(() => {
//     const fetchResidentComplaints = async () => {
//       try {
//         const response = await axios.get<Complaint[]>('http://localhost:5000/LodgeComplaint');
//         if (response.status !== 200) {
//           throw new Error('Failed to fetch resident complaints');
//         }
//         setResidentComplaints(response.data);
//       } catch (error) {
//         console.error('Error fetching resident complaints:', error);
//       }
//     };

//     fetchResidentComplaints();
//   }, []);

//   useEffect(() => {
//     const handleStorageChange = () => {
//       const updatedResidentComplaints = JSON.parse(localStorage.getItem('updatedResidentComplaints') || '');
//       if (updatedResidentComplaints) {
//         setResidentComplaints(updatedResidentComplaints);
//       }
//     };

//     window.addEventListener('storage', handleStorageChange);

//     return () => {
//       window.removeEventListener('storage', handleStorageChange);
//     };
//   }, []);

//   const updateStatus = async (id: string, newStatus: string) => {
//     try {
//       console.log(`Updating status for ID: ${id} to ${newStatus}`);
//       const response = await axios.put('http://localhost:5000/LodgeComplaint/status', { id, status: newStatus });
//       if (response.status === 200) {
//         setResidentComplaints(prevComplaints =>
//           prevComplaints.map(complaint =>
//             complaint._id === id ? { ...complaint, status: newStatus } : complaint
//           )
//         );
//         localStorage.setItem('updatedResidentComplaints', JSON.stringify(
//           residentComplaints.map(complaint =>
//             complaint._id === id ? { ...complaint, status: newStatus } : complaint
//           )
//         ));
//         console.log('Status updated successfully');
//       }
//     } catch (error) {
//       console.error('Error updating status:', error);
//     }
//   };

//   return (
//     <div className='bg-gray-100 min-h-screen'>
//       <div className='container mx-auto py-12 px-4'>
//         <h2 className='text-4xl font-bold mb-8 text-center text-gray-900'>Resident Complaints</h2>
//         <SearchPage />

//         <div>
//           {residentComplaints.map(complaint => (
//             <div key={complaint._id} className='bg-white shadow-lg rounded-lg p-4 md:p-8 mb-8'>
//               <h3 className='text-2xl font-semibold mb-4 text-gray-900'>{complaint.description}</h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <p><strong>Date:</strong> {complaint.date}</p>
//                   <p><strong>Hostel Name:</strong> {complaint.hostelName}</p>
//                   <p><strong>Issue:</strong> {complaint.issue}</p>
//                 </div>
//                 <div>
//                   <p><strong>Level:</strong> {complaint.level}</p>
//                   <p><strong>Room Number:</strong> {complaint.roomNumber}</p>
//                   <p><strong>Status:</strong> {complaint.status}</p>
//                 </div>
//               </div>
//               <div className='mt-4'>
//                 <button
//                   className={`px-4 py-2 mr-2 rounded ${complaint.status === 'Pending' ? 'bg-red-500 text-white' : 'bg-gray-300'}`}
//                   onClick={() => updateStatus(complaint._id, 'Pending')}
//                 >
//                   Pending
//                 </button>
//                 <button
//                   className={`px-4 py-2 mr-2 rounded ${complaint.status === 'In Progress' ? 'bg-yellow-500 text-white' : 'bg-gray-300'}`}
//                   onClick={() => updateStatus(complaint._id, 'In Progress')}
//                 >
//                   In Progress
//                 </button>
//                 <button
//                   className={`px-4 py-2 rounded ${complaint.status === 'Done' ? 'bg-green-500 text-white' : 'bg-gray-300'}`}
//                   onClick={() => updateStatus(complaint._id, 'Done')}
//                 >
//                   Done
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ResidentComplaints;




"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Complaint {
  _id: string;
  description: string;
  date: string;
  hostelName: string;
  issue: string;
  level: string;
  roomNumber: string;
  status: string;
}

function ResidentComplaints() {
  
  const [residentComplaints, setResidentComplaints] = useState<Complaint[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    const fetchResidentComplaints = async () => {
      try {
        const response = await axios.get<Complaint[]>('http://localhost:5000/LodgeComplaint');
        if (response.status !== 200) {
          throw new Error('Failed to fetch resident complaints');
        }
        setResidentComplaints(response.data);
      } catch (error) {
        console.error('Error fetching resident complaints:', error);
      }
    };

    fetchResidentComplaints();
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const updatedResidentComplaints = JSON.parse(localStorage.getItem('updatedResidentComplaints') || '');
      if (updatedResidentComplaints) {
        setResidentComplaints(updatedResidentComplaints);
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      console.log(`Updating status for ID: ${id} to ${newStatus}`);
      const response = await axios.put('http://localhost:5000/LodgeComplaint/status', { id, status: newStatus });
      if (response.status === 200) {
        setResidentComplaints(prevComplaints =>
          prevComplaints.map(complaint =>
            complaint._id === id ? { ...complaint, status: newStatus } : complaint
          )
        );
        localStorage.setItem('updatedResidentComplaints', JSON.stringify(
          residentComplaints.map(complaint =>
            complaint._id === id ? { ...complaint, status: newStatus } : complaint
          )
        ));
        console.log('Status updated successfully');
      }
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const filteredComplaints = residentComplaints.filter(complaint =>
    complaint.hostelName.toLowerCase().includes(searchTerm.toLowerCase()) // Filter by Hostel Name only
  );

  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className='container mx-auto py-12 px-4'>
        <div className='flex justify-between items-center mb-8'>
          <h2 className='text-4xl font-bold text-center text-gray-900'>Resident Complaints</h2>
          <div className='flex items-center'>
            <input
              type="text"
              placeholder="Search..."
              className="p-1 border border-gray-300 rounded-l w-40" // Reduced padding and width
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              className="p-1 bg-blue-500 text-white rounded-r" // Reduced padding
              onClick={() => {/* Optional: Add search button functionality */}}
            >
              Search
            </button>
          </div>
        </div>

        <div>
          {filteredComplaints.map(complaint => (
            <div key={complaint._id} className='bg-white shadow-lg rounded-lg p-4 md:p-8 mb-8'>
              <h3 className='text-2xl font-semibold mb-4 text-gray-900'>{complaint.description}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Date:</strong> {complaint.date}</p>
                  <p><strong>Hostel Name:</strong> {complaint.hostelName}</p>
                  <p><strong>Issue:</strong> {complaint.issue}</p>
                </div>
                <div>
                  <p><strong>Level:</strong> {complaint.level}</p>
                  <p><strong>Room Number:</strong> {complaint.roomNumber}</p>
                  <p><strong>Status:</strong> {complaint.status}</p>
                </div>
              </div>
              <div className='mt-4'>
                <button
                  className={`px-4 py-2 mr-2 rounded ${complaint.status === 'Pending' ? 'bg-red-500 text-white' : 'bg-gray-300'}`}
                  onClick={() => updateStatus(complaint._id, 'Pending')}
                >
                  Pending
                </button>
                <button
                  className={`px-4 py-2 mr-2 rounded ${complaint.status === 'In Progress' ? 'bg-yellow-500 text-white' : 'bg-gray-300'}`}
                  onClick={() => updateStatus(complaint._id, 'In Progress')}
                >
                  In Progress
                </button>
                <button
                  className={`px-4 py-2 rounded ${complaint.status === 'Done' ? 'bg-green-500 text-white' : 'bg-gray-300'}`}
                  onClick={() => updateStatus(complaint._id, 'Done')}
                >
                  Done
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ResidentComplaints;
