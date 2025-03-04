

// "use client";
// // Import statements for React and other components

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Dashboard from '../Dashboard/page'; 
// import LodgeComplaint from '../LodgeComplaint/page';
// import ComplaintHistory from '../Complaint History/page';
// import Profileinfo from '../Profileinfo/page';
// import ChangePassword from '../Changepassword/page';
// import Event from '../Events/page';
// import RoomCheck from '../RoomCheck/page'; 
// import RoomBooking from '../RoomBooking/page';
// import RoomBooked from '../RoomBooked/page';
// import HallAdminEvents from '../HallAdminEvents/page';
// import ResidentComplaints from '../ResidentComplaints/page';

// function LandingPage() {
//     const [activeMenuItem, setActiveMenuItem] = useState('Dashboard');
//     const [isEventPageOpen, setIsEventPageOpen] = useState(false);
//     const [isRoomCheckOpen, setIsRoomCheckOpen] = useState(false);
//     const [isRoomBookingOpen, setIsRoomBookingOpen] = useState(false);
//     const [isRoomBookedOpen, setIsRoomBookedOpen] = useState(false);
//     const [isResidentComplaintsOpen, setIsResidentComplaintsOpen] = useState(false);
//     const [isHallAdminEventsOpen, setIsHallAdminEventsOpen] = useState(false);
//     const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);

//     useEffect(() => {
//         setActiveMenuItem('Dashboard');
//     }, []);

//     const handleEventClick = () => {
//         setActiveMenuItem('Event');
//         setIsEventPageOpen(true);
//     };

//     const handleRoomCheckClick = () => {
//         setActiveMenuItem('Room Check');
//         setIsRoomCheckOpen(true);
//     };

//     const handleLogout = () => {
//         window.location.href = 'http://localhost:3000/';
//     };

//     const handleRoomBookingClick = () => {
//         setActiveMenuItem('RoomBooking');
//         setIsRoomBookingOpen(true);
//     };

//     const handleRoomBookedClick = () => {
//         setActiveMenuItem('RoomBooked');
//         setIsRoomBookedOpen(true);
//     };

//     const handleResidentComplaintsClick = () => {
//         setActiveMenuItem('ResidentComplaints');
//         setIsResidentComplaintsOpen(true);
//     };

//     const handleHallAdminEventsClick = () => {
//         setActiveMenuItem('HallAdminEvents');
//         setIsHallAdminEventsOpen(true);
//     };

//     const handleDashboardClick = () => {
//         setActiveMenuItem('Dashboard');
//         setIsEventPageOpen(false);
//         setIsRoomCheckOpen(false);
//         setIsRoomBookingOpen(false);
//         setIsRoomBookedOpen(false);
//         setIsResidentComplaintsOpen(false);
//         setIsHallAdminEventsOpen(false);
//     };

//     const handleAccountSettingsHover = (value) => {
//         setIsAccountDropdownOpen(value);
//     };

//     return (
//         <div className='flex flex-col h-screen'>
//            {/* <img className ="" src="https://th.bing.com/th/id/OIP.IR7ODjpGqvTJBMfgWbJ9-wAAAA?rs=1&pid=ImgDetMain" alt="" /> */}

//             <header className='bg-blue-900 flex justify-between items-center h-20 px-4'>
//                 <img src="./mide.PNG" alt="Profilepicture" className="h-16 w-16 rounded-full" />
//                 <span className="text-xl text-white text-center flex-grow">Hostel Management System</span>
//                 <button onClick={handleLogout} className="text-white font-semibold hover:text-white-500 transition-colors duration-300 border border-transparent rounded-full px-4 py-2 bg-blue-800">Logout</button>
//             </header>

//             <nav className="bg-white text-blue">
//                 <ul className="flex justify-between px-4 py-3">
//                     <li className="mr-2">
//                         <button onClick={handleDashboardClick} className={`hover:text-blue-400 ${activeMenuItem === 'Dashboard' ? 'text-blue-400' : ''}`}>Dashboard</button>
//                     </li>
//                     <li className="mr-6">
//                         <button onClick={handleResidentComplaintsClick} className={`hover:text-blue-400 ${activeMenuItem === 'ResidentComplaints' ? 'text-blue-400' : ''}`}>Resident Complaints</button>
//                     </li>
//                     <li className="mr-6">
//                         <button onClick={() => setActiveMenuItem('Lodge Complaint')} className={`hover:text-blue-400 ${activeMenuItem === 'Lodge Complaint' ? 'text-blue-400' : ''}`}>Lodge Complaint</button>
//                     </li>
//                     <li className="mr-6">
//                         <button onClick={() => setActiveMenuItem('Complaint History')} className={`hover:text-blue-400 ${activeMenuItem === 'Complaint History' ? 'text-blue-400' : ''}`}>Complaint History</button>
//                     </li>
//                     <li className="mr-6">
//                         <button onClick={handleEventClick} className={`hover:text-blue-400 ${activeMenuItem === 'Event' ? 'text-blue-400' : ''}`}>Events</button>
//                     </li>
//                     <li className="mr-6">
//                         <button onClick={handleRoomCheckClick} className={`hover:text-blue-400 ${activeMenuItem === 'Room Check' ? 'text-blue-400' : ''}`}>Room Check</button>
//                     </li>
//                     <li className="mr-6">
//                         <button onClick={handleRoomBookingClick} className={`hover:text-blue-400 ${activeMenuItem === 'RoomBooking' ? 'text-blue-400' : ''}`}>RoomBooking</button>
//                     </li>
//                     <li className="mr-6">
//                         <button onClick={handleRoomBookedClick} className={`hover:text-blue-400 ${activeMenuItem === 'RoomBooked' ? 'text-blue-400' : ''}`}>RoomBooked</button>
//                     </li>
//                     <li className="mr-6">
//                         <button onClick={handleHallAdminEventsClick} className={`hover:text-blue-400 ${activeMenuItem === 'HallAdminEvents' ? 'text-blue-400' : ''}`}>HallEvents</button>
//                     </li>
//                     <li className="relative">
//                         <button onMouseEnter={() => handleAccountSettingsHover(true)} onMouseLeave={() => handleAccountSettingsHover(false)} className={`hover:text-blue-400 ${activeMenuItem === 'Account Settings' ? 'text-blue-400' : ''}`}>Account Settings</button>
//                         {isAccountDropdownOpen && (
//                             <div onMouseEnter={() => handleAccountSettingsHover(true)} onMouseLeave={() => handleAccountSettingsHover(false)} className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1">
//                                 <button onClick={() => setActiveMenuItem('Profile Info')} className={`block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 ${activeMenuItem === 'Profile Info' ? 'text-blue-400' : ''}`}>Profile Info</button>
//                                 <button onClick={() => setActiveMenuItem('Change Password')} className={`block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 ${activeMenuItem === 'Change Password' ? 'text-blue-400' : ''}`}>Change Password</button>
//                             </div>
//                         )}
//                     </li>
//                 </ul>
//             </nav>
            
//             <div className='flex flex-col flex-grow bg-gray-200'>
//                 {(activeMenuItem === 'Dashboard' && !isRoomBookedOpen && !isResidentComplaintsOpen) && <Dashboard />}
//                 {activeMenuItem === 'Lodge Complaint' && <LodgeComplaint />}
//                 {activeMenuItem === 'Complaint History' && <ComplaintHistory />}
//                 {activeMenuItem === 'Profile Info' && <Profileinfo />}
//                 {activeMenuItem === 'Change Password' && <ChangePassword />}
//                 {(activeMenuItem === 'Event' && isEventPageOpen) && <Event />}
//                 {(activeMenuItem === 'Room Check' && isRoomCheckOpen) && <RoomCheck />}
//                 {(activeMenuItem === 'RoomBooking' && isRoomBookingOpen) && <RoomBooking />}
//                 {(activeMenuItem === 'RoomBooked' && isRoomBookedOpen) && <RoomBooked />}
//                 {(activeMenuItem === 'ResidentComplaints' && isResidentComplaintsOpen) && <ResidentComplaints />}
//                 {(activeMenuItem === 'HallAdminEvents' && isHallAdminEventsOpen) && <HallAdminEvents />} 
//             </div>
//         </div>
//     );
// }

// export default LandingPage;










"use client";

import React, { useState, useEffect } from 'react';
import Dashboard from '../Dashboard/page';
import LodgeComplaint from '../LodgeComplaint/page';
import ComplaintHistory from '../Complaint History/page';
import Profileinfo from '../Profileinfo/page';
import ChangePassword from '../Changepassword/page';
import Event from '../Events/page';
import RoomCheck from '../RoomCheck/page';
import RoomBooking from '../RoomBooking/page';
import RoomBooked from '../RoomBooked/page';
import HallAdminEvents from '../HallAdminEvents/page';
import ResidentComplaints from '../ResidentComplaints/page';
import CheckCode from '../CheckCode/page';

const LandingPage = () => {
  const [activeMenuItem, setActiveMenuItem] = useState('Dashboard');
  const [emailDomain, setEmailDomain] = useState('');
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const domain = localStorage.getItem('emailDomain');
    setEmailDomain(domain);
    setActiveMenuItem('Dashboard');
  }, []);

  const handleDashboardClick = () => setActiveMenuItem('Dashboard');
  useEffect(() => {
    const firstName = localStorage.getItem('firstName');
    const lastName = localStorage.getItem('lastName');
    if (firstName && lastName) {
      let storedUsername = lastName  + " " + firstName
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('emailDomain');
    localStorage.removeItem('username');

    window.location.href = 'http://localhost:3000/';
  };

  const toggleAccountDropdown = () => {
    setIsAccountDropdownOpen(!isAccountDropdownOpen);
    // Clear active menu item when closing dropdown
    if (!isAccountDropdownOpen) {
      setActiveMenuItem('');
    }
  };

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
    setIsAccountDropdownOpen(false); // Close dropdown after selecting a menu item
  };

  const renderMenuItems = () => {
    const studentDomain = 'student.babcock.edu.ng';
    const adminDomain = 'admin.babcock.edu.ng';
    const hallAdminDomains = [
      'samuelakandehall.babcock.edu.ng',
      'topazhall.babcock.edu.ng',
      'winslow.babcock.edu.ng',
      'welchhall.babcock.edu.ng',
      'nealwilsonhall.babcock.edu.ng',
      'gideontrooperhall.babcock.edu.ng',
      'nelson_mandela.babcock.edu.ng',
      'bethelhall.babcock.edu.ng',
      'emeraldhall.babcock.edu.ng',
      'gamalielhall.babcock.edu.ng',
      'crystalhall.babcock.edu.ng',
      'justicedeborahhall.babcock.edu.ng',
      'feliciaadebisihall.babcock.edu.ng',
      'nyberghall.babcock.edu.ng',
      'ogdenhall.babcock.edu.ng',
      'queenestherhall.babcock.edu.ng',
      'platinumhall.babcock.edu.ng',
      'diamondhall.babcock.edu.ng',
      'whitehall.babcock.edu.ng',
      'ameyohall.babcock.edu.ng',
      'havillahhall.babcock.edu.ng',
    ];

    if (emailDomain === adminDomain) {
      return (
        <>
          <li><button onClick={handleDashboardClick} className={activeMenuItem === 'Dashboard' ? 'text-blue-400' : ''}>Dashboard</button></li>
          <li><button onClick={() => setActiveMenuItem('ResidentComplaints')} className={activeMenuItem === 'ResidentComplaints' ? 'text-blue-400' : ''}>Resident Complaints</button></li>
          <li><button onClick={() => setActiveMenuItem('Lodge Complaint')} className={activeMenuItem === 'Lodge Complaint' ? 'text-blue-400' : ''}>Lodge Complaint</button></li>
          <li><button onClick={() => setActiveMenuItem('Complaint History')} className={activeMenuItem === 'Complaint History' ? 'text-blue-400' : ''}>Complaint History</button></li>
          <li><button onClick={() => setActiveMenuItem('Event')} className={activeMenuItem === 'Event' ? 'text-blue-400' : ''}>Events</button></li>
          <li><button onClick={() => setActiveMenuItem('Room Check')} className={activeMenuItem === 'Room Check' ? 'text-blue-400' : ''}>Room Check</button></li>
          <li><button onClick={() => setActiveMenuItem('RoomBooking')} className={activeMenuItem === 'RoomBooking' ? 'text-blue-400' : ''}>RoomBooking</button></li>
          <li><button onClick={() => setActiveMenuItem('RoomBooked')} className={activeMenuItem === 'RoomBooked' ? 'text-blue-400' : ''}>RoomBooked</button></li>
          <li><button onClick={() => setActiveMenuItem('HallAdminEvents')} className={activeMenuItem === 'HallAdminEvents' ? 'text-blue-400' : ''}>HallEvents</button></li>
          <li><button onClick={() => setActiveMenuItem('CheckCode')} className={activeMenuItem === 'CheckCode' ? 'text-blue-400' : ''}>CheckCode</button></li>
          <li className="relative">
      <button
        onClick={toggleAccountDropdown}
        className={`hover:text-blue-400 ${activeMenuItem === 'Account Settings' ? 'text-blue-400' : ''}`}
      >
        Account Settings
      </button>
      {isAccountDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1">
          <button
            onClick={() => handleMenuItemClick('Profile Info')}
            className={`block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 ${
              activeMenuItem === 'Profile Info' ? 'text-blue-400' : ''
            }`}
          >
            Profile Info
          </button>
          <button
            onClick={() => handleMenuItemClick('Change Password')}
            className={`block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 ${
              activeMenuItem === 'Change Password' ? 'text-blue-400' : ''
            }`}
          >
            Change Password
          </button>
        </div>
      )}
    </li>
        </>
      );
    }

    if (emailDomain === studentDomain) {
      return (
        <>
          <li><button onClick={handleDashboardClick} className={activeMenuItem === 'Dashboard' ? 'text-blue-400' : ''}>Dashboard</button></li>
          <li><button onClick={() => setActiveMenuItem('Lodge Complaint')} className={activeMenuItem === 'Lodge Complaint' ? 'text-blue-400' : ''}>Lodge Complaint</button></li>
          <li><button onClick={() => setActiveMenuItem('Complaint History')} className={activeMenuItem === 'Complaint History' ? 'text-blue-400' : ''}>Complaint History</button></li>
          <li><button onClick={() => setActiveMenuItem('CheckCode')} className={activeMenuItem === 'CheckCode' ? 'text-blue-400' : ''}>CheckCode</button></li>
          <li><button onClick={() => setActiveMenuItem('Event')} className={activeMenuItem === 'Event' ? 'text-blue-400' : ''}>Events</button></li>
          <li><button onClick={() => setActiveMenuItem('RoomBooking')} className={activeMenuItem === 'RoomBooking' ? 'text-blue-400' : ''}>RoomBooking</button></li>
          <li className="relative">
            <button onClick={toggleAccountDropdown} className={`hover:text-blue-400 ${activeMenuItem === 'Account Settings' ? 'text-blue-400' : ''}`}>Account Settings</button>
            {isAccountDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1">
                <button onClick={() => setActiveMenuItem('Profile Info')} className={`block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 ${activeMenuItem === 'Profile Info' ? 'text-blue-400' : ''}`}>Profile Info</button>
                <button onClick={() => setActiveMenuItem('Change Password')} className={`block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 ${activeMenuItem === 'Change Password' ? 'text-blue-400' : ''}`}>Change Password</button>
              </div>
            )}
          </li>

        </>
      );
    }

    if (hallAdminDomains.includes(emailDomain)) {
      return (
        <>
          <li><button onClick={handleDashboardClick} className={activeMenuItem === 'Dashboard' ? 'text-blue-400' : ''}>Dashboard</button></li>
          <li><button onClick={() => setActiveMenuItem('ResidentComplaints')} className={activeMenuItem === 'ResidentComplaints' ? 'text-blue-400' : ''}>Resident Complaints</button></li>
          <li><button onClick={() => setActiveMenuItem('RoomBooked')} className={activeMenuItem === 'RoomBooked' ? 'text-blue-400' : ''}>RoomBooked</button></li>
          <li><button onClick={() => setActiveMenuItem('Room Check')} className={activeMenuItem === 'Room Check' ? 'text-blue-400' : ''}>Room Check</button></li>
          <li><button onClick={() => setActiveMenuItem('HallAdminEvents')} className={activeMenuItem === 'HallAdminEvents' ? 'text-blue-400' : ''}>HallEvents</button></li>
          <li className="relative">
            <button onClick={toggleAccountDropdown} className={`hover:text-blue-400 ${activeMenuItem === 'Account Settings' ? 'text-blue-400' : ''}`}>Account Settings</button>
            {isAccountDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1">
                <button onClick={() => setActiveMenuItem('Profile Info')} className={`block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 ${activeMenuItem === 'Profile Info' ? 'text-blue-400' : ''}`}>Profile Info</button>
                <button onClick={() => setActiveMenuItem('Change Password')} className={`block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 ${activeMenuItem === 'Change Password' ? 'text-blue-400' : ''}`}>Change Password</button>
              </div>
            )}
          </li>
        </>
      );
    }

    return null;
  };

  return (
    <div className='flex flex-col h-screen'>
      <header className='bg-blue-900 flex justify-between items-center h-20 px-4'>
        <span className="text-xl text-white text-center flex-grow">Hostel Management System</span>
        <span className="text-white mr-4">{username}</span>


<button
  onClick={handleLogout}
  className="text-white font-semibold hover:text-white-500 transition-colors duration-300 border border-transparent rounded-full px-4 py-2 bg-blue-800 flex items-center"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="h-6 w-6 mr-2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
    />
  </svg>
  Log out
</button>

      </header>

      <nav className="bg-white text-blue">
        <ul className="flex justify-between px-4 py-3">
          {renderMenuItems()}
          
        </ul>
      </nav>

      <div className='flex flex-col flex-grow bg-gray-200'>
        {activeMenuItem === 'Dashboard' && <Dashboard />}
        {activeMenuItem === 'Lodge Complaint' && <LodgeComplaint />}
        {activeMenuItem === 'Complaint History' && <ComplaintHistory />}
        {activeMenuItem === 'Profile Info' && <Profileinfo />}
        {activeMenuItem === 'Change Password' && <ChangePassword />}
        {activeMenuItem === 'Event' && <Event />}
        {activeMenuItem === 'Room Check' && <RoomCheck />}
        {activeMenuItem === 'RoomBooking' && <RoomBooking />}
        {activeMenuItem === 'RoomBooked' && <RoomBooked />}
        {activeMenuItem === 'ResidentComplaints' && <ResidentComplaints />}
        {activeMenuItem === 'HallAdminEvents' && <HallAdminEvents />}
        {activeMenuItem === 'CheckCode' && <CheckCode />}

      </div>
    </div>
  );
};

export default LandingPage;
