"use client";
import React, { useState, useEffect } from 'react';

function Profileinfo() {
  const [firstName, setFirstName] = useState('');
  const [surName, setSurName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [imageChanged, setImageChanged] = useState(false); // Track if image has changed

  useEffect(() => {
    // Retrieve user information from localStorage upon component mount
    const savedFirstName = localStorage.getItem('firstName');
    const savedSurName = localStorage.getItem('surName');
    const savedEmail = localStorage.getItem('email');
    const savedContactNo = localStorage.getItem('contactNo');
    const savedProfileImage = localStorage.getItem('profileImage');

    // Set state with retrieved user information
    if (savedFirstName) setFirstName(savedFirstName);
    if (savedSurName) setSurName(savedSurName);
    if (savedEmail) setEmail(savedEmail);
    if (savedContactNo) setContactNo(savedContactNo);
    if (savedProfileImage) {
      setProfileImage(savedProfileImage);
      setImageChanged(false); // Image initially loaded, so no change
    }
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target.result;
        setProfileImage(imageUrl);
        setImageChanged(true); // Image has been changed
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageDelete = () => {
    setProfileImage('');
    setImageChanged(true); // Image has been deleted
    localStorage.removeItem('profileImage');
  };

  const handleSaveImage = () => {
    localStorage.setItem('profileImage', profileImage);
    setImageChanged(false); // Reset image changed flag
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-md md:max-w-lg lg:max-w-xl">
        <h1 className="text-blue-800 text-3xl font-bold mb-4">Profile Information</h1>
        <div className="mb-4">
          {profileImage ? (
            <div className="flex flex-col items-center mb-4">
              <img src={profileImage} alt="Profile" className="w-24 h-24 rounded-full mb-2" />
              <div className="flex">
                <button 
                  onClick={handleImageDelete} 
                  className="bg-red-500 text-white px-4 py-2 rounded mr-2">
                  Delete Image
                </button>
                {imageChanged && (
                  <button 
                    onClick={handleSaveImage} 
                    className="bg-blue-500 text-white px-4 py-2 rounded">
                    Save Image
                  </button>
                )}
              </div>
            </div>
          ) : (
            <input type="file" accept="image/*" onChange={handleImageUpload} />
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
          <div>
            <label className="block text-gray-700">First Name</label>
            <p className="text-gray-900">{firstName}</p>
          </div>
          <div>
            <label className="block text-gray-700">Surname</label>
            <p className="text-gray-900">{surName}</p>
          </div>
        </div>
        <div className="mb-2">
          <label className="block text-gray-700">Email</label>
          <p className="text-gray-900">{email}</p>
          
        </div>
        <div className="mb-2">
          <label className="block text-gray-700">Contact Number</label>
          <p className="text-gray-900">{contactNo}</p>
        </div>
      </div>
    </div>
  );
}

export default Profileinfo;
