"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';

interface EventDetails {
  eventName: string;
  eventDate: string;
  eventTime: string;
  eventLocation: string;
  eventVenue: string;
}

const HallAdminEvents: React.FC = () => {
  const [eventDetails, setEventDetails] = useState<EventDetails>({
    eventName: '',
    eventDate: '',
    eventTime: '',
    eventLocation: '',
    eventVenue: ''
  });

  const [updateSuccess, setUpdateSuccess] = useState<boolean>(false);

  const handleEventDetailsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEventDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const allFieldsFilled = Object.values(eventDetails).every(val => val !== '');
    if (allFieldsFilled) {
      try {
        const response = await fetch('http://localhost:5000/HallAdminEvents', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(eventDetails),
        });
        if (response.ok) {
          setUpdateSuccess(true);
          setTimeout(() => {
            setUpdateSuccess(false);
            setEventDetails({
              eventName: '',
              eventDate: '',
              eventTime: '',
              eventLocation: '',
              eventVenue: ''
            });
          }, 3000);
        } else {
          alert('Failed to save event details.');
        }
      } catch (error) {
        console.error('Error saving event details:', error);
        alert('An error occurred. Please try again later.');
      }
    } else {
      alert("Please fill in all fields!");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-12 px-4">
        <form onSubmit={handleSubmit} className="mb-12">
          <h3 className="text-3xl font-semibold mb-6 text-gray-900 text-center">Update Event Details</h3>
          <div className="bg-white shadow-lg rounded-lg p-8">
            <div className="mb-4">
              <label htmlFor="eventName" className="block text-gray-700 font-semibold mb-2">Event Name</label>
              <input type="text" id="eventName" name="eventName" value={eventDetails.eventName} onChange={handleEventDetailsChange} className="border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm" />
            </div>
            <div className="mb-4">
              <label htmlFor="eventDate" className="block text-gray-700 font-semibold mb-2">Event Date</label>
              <input type="date" id="eventDate" name="eventDate" value={eventDetails.eventDate} onChange={handleEventDetailsChange} className="border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm" />
            </div>
            <div className="mb-4">
              <label htmlFor="eventTime" className="block text-gray-700 font-semibold mb-2">Event Time</label>
              <input type="time" id="eventTime" name="eventTime" value={eventDetails.eventTime} onChange={handleEventDetailsChange} className="border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm" />
            </div>
            <div className="mb-4">
              <label htmlFor="eventLocation" className="block text-gray-700 font-semibold mb-2">Event Location</label>
              <input type="text" id="eventLocation" name="eventLocation" value={eventDetails.eventLocation} onChange={handleEventDetailsChange} className="border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm" />
            </div>
            <div className="mb-4">
              <label htmlFor="eventVenue" className="block text-gray-700 font-semibold mb-2">Event Venue</label>
              <input type="text" id="eventVenue" name="eventVenue" value={eventDetails.eventVenue} onChange={handleEventDetailsChange} className="border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm" />
            </div>
            <button type="submit" className="bg-blue-800 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-2 w-full sm:w-auto">Update Event</button>
            {updateSuccess && <p className="text-green-600 mt-2">Update Successful!</p>}
          </div>
        </form>
      </div>
    </div>
  );
}

export default HallAdminEvents;
