"use client";
import React from 'react';

function Dashboard() {
  // Sample data for each card related to hostel management
  const cardsData = [
    {
      title: "Total Hostels",
      value: "22",
      description: "Number of hostels managed by the system",
    },
    {
      title: "Total Rooms",
      value: "10000+",
      description: "Total number of rooms across all hostels",
    },
    {
      title: "Occupancy Rate",
      value: "74%",
      description: "Average occupancy rate of all rooms",
    },
    {
      title: "Maintenance Requests",
      value: "25",
      description: "Number of pending maintenance requests",
    },
    {
      title: "Pending Payments",
      value: "35%",
      description: "Average pending payments from residents",
    },
    {
      title: "Visitor Log",
      value: "125",
      description: "Total number of visitors recorded in the system",
    },
    {
      title: "Security Alerts",
      value: "",
      description: "Number of security alerts triggered",
    },
    {
      title: "Hostel mangements",
      value: "50",
      description: "Total number of feedbacks received from residents",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {cardsData.map((card, index) => (
          <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 flex flex-col justify-center items-center">
            <h2 className="text-lg font-semibold mb-2">{card.title}</h2>
            <p className="text-2xl font-bold text-blue-600 mb-1">{card.value}</p>
            <p className="text-sm text-gray-600 text-center">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
