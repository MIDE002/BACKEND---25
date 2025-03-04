"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Event {
  id: string;
  eventName: string;
  eventDate: string;
  eventTime: string;
  eventLocation: string;
  eventVenue: string;
}

const Events: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/HallAdminEvents');
        if (response.status !== 200) {
          throw new Error('Failed to fetch events');
        }
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const updatedEvents = localStorage.getItem('updatedEvents');
      if (updatedEvents) {
        setEvents(JSON.parse(updatedEvents));
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className='container mx-auto py-12 px-4'>
        <h2 className='text-4xl font-bold mb-8 text-center text-gray-900'>Upcoming Events</h2>

        <div>
          {events.map(event => (
            <div key={event.id} className='bg-white shadow-lg rounded-lg p-8 mb-8'>
              <h3 className='text-2xl font-semibold mb-4 text-gray-900'>{event.eventName}</h3>
              <p><strong>Date:</strong> {event.eventDate}</p>
              <p><strong>Time:</strong> {event.eventTime}</p>
              <p><strong>Location:</strong> {event.eventLocation}</p>
              <p><strong>Venue:</strong> {event.eventVenue}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Events;
