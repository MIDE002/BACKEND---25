"use client";
import React, { useState, useEffect } from "react";

function ProfileInfo() {
  const [user, setUser] = useState({
    firstName: "",
    surName: "",
    email: "",
    contactNo: "",
    profileImage: "",
  });
  const [imageChanged, setImageChanged] = useState(false);

  useEffect(() => {
    // Retrieve user information from localStorage upon component mount
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUser((prev) => ({ ...prev, profileImage: e.target.result }));
        setImageChanged(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageDelete = () => {
    setUser((prev) => ({ ...prev, profileImage: "" }));
    setImageChanged(true);
  };

  const handleSaveImage = () => {
    localStorage.setItem("user", JSON.stringify(user));
    setImageChanged(false);
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-blue-800 text-3xl font-bold mb-4 text-center">Profile Information</h1>
        <div className="flex flex-col items-center mb-4">
          {user.profileImage ? (
            <>
              <img
                src={user.profileImage}
                alt="Profile"
                className="w-24 h-24 rounded-full mb-2 object-cover"
              />
              <div className="flex">
                <button
                  onClick={handleImageDelete}
                  className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                >
                  Delete Image
                </button>
                {imageChanged && (
                  <button
                    onClick={handleSaveImage}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    Save Image
                  </button>
                )}
              </div>
            </>
          ) : (
            <input type="file" accept="image/*" onChange={handleImageUpload} />
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 font-semibold">First Name</label>
            <p className="text-gray-900">{user.firstName}</p>
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Surname</label>
            <p className="text-gray-900">{user.surName}</p>
          </div>
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 font-semibold">Email</label>
          <p className="text-gray-900">{user.email}</p>
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">Contact Number</label>
          <p className="text-gray-900">{user.contactNo}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;


