
"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Complaint {
  _id: string;
  date: string;
  hostelName: string;
  level: string;
  roomNumber: string;
  issue: string;
  description: string;
  status: string;
}

const ComplaintHistory: React.FC = () => {
  const [complaints, setComplaints] = useState<Complaint[]>([]);

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const response = await axios.get('http://localhost:5000/LodgeComplaint');
        if (response.status !== 200) {
          throw new Error('Failed to fetch complaints');
        }
        setComplaints(response.data);
      } catch (error) {
        console.error('Error fetching complaints:', error);
      }
    };

    fetchComplaints();
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const updatedComplaints = localStorage.getItem('updatedComplaints');
      if (updatedComplaints) {
        setComplaints(JSON.parse(updatedComplaints));
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const getStatusClass = (status: string): string => {
    switch (status) {
      case 'Pending':
        return 'bg-red-500 text-white px-4 py-2 rounded';
      case 'In Progress':
        return 'bg-yellow-500 text-white px-4 py-2 rounded';
      case 'Done':
        return 'bg-green-500 text-white px-4 py-2 rounded';
      default:
        return 'bg-gray-300 text-black px-4 py-2 rounded';
    }
  };

  return (
    <div className='flex flex-col h-screen font-sans'>
      <div className='flex flex-col flex-grow bg-gray-200'>
        <div className="px-4 py-6">
          <h2 className="text-2xl font-semibold mb-4">Complaint History</h2>
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-slate-400">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="px-4 py-2">#</th>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Hostel</th>
                  <th className="px-4 py-2">Level</th>
                  <th className="px-4 py-2">Room Number</th>
                  <th className="px-4 py-2">Issue</th>
                  <th className="px-4 py-2">Description</th>
                  <th className="px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {complaints.map(complaint => (
                  <tr key={complaint._id} className="border-b hover:bg-gray-100">
                    <td className="px-4 py-2">{complaint._id}</td>
                    <td className="px-4 py-2">{complaint.date}</td>
                    <td className="px-4 py-2">{complaint.hostelName}</td>
                    <td className="px-4 py-2">{complaint.level}</td>
                    <td className="px-4 py-2">{complaint.roomNumber}</td>
                    <td className="px-4 py-2">{complaint.issue}</td>
                    <td className="px-4 py-2">{complaint.description}</td>
                    <td className={`px-4 py-2 ${getStatusClass(complaint.status)}`}>{complaint.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComplaintHistory;
