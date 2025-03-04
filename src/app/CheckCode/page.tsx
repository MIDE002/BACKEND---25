
"use client";


import { useState } from 'react';
import axios from 'axios';

export default function CheckCode() {
  const [codeToCheck, setCodeToCheck] = useState('');
  const [checkResult, setCheckResult] = useState('');
  const [matricNumber, setMatricNumber] = useState('');
  const [showCheckCode, setShowCheckCode] = useState(true); // Initially show the Check Code page

  const checkCode = async () => {
    try {
      const response = await axios.post('http://localhost:5000/CheckCode', { code: codeToCheck });

      if (response.status === 200) {
        setCheckResult(response.data.message);
        if (response.data.message === 'Code is valid!') {
          setShowCheckCode(false); // Close Check Code page
        }
      } else {
        setCheckResult('Failed to check code');
      }
    } catch (error) {
      setCheckResult(`Failed to check code: ${error.message}`);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/EnterMatricNumber', {
        code: codeToCheck,
        matricNumber: matricNumber,
      });

      if (response.status === 200) {
        alert('Matric number entered successfully!');
        // Optionally, you can reset state or redirect to another page here
      } else {
        alert('Failed to submit matric number');
      }
    } catch (error) {
      alert(`Failed to submit matric number: ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {showCheckCode ? ( // Render Check Code page
        <div className="bg-white p-8 rounded shadow-md text-center">
          <h1 className="text-2xl font-bold mb-4">Code Checker</h1>
          <input
            type="text"
            placeholder="Enter code to check"
            value={codeToCheck}
            onChange={(e) => setCodeToCheck(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 mb-4"
          />
          <button
            onClick={checkCode}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Check Code
          </button>
          {checkResult && (
            <div className="mt-4 p-2 bg-gray-100 border border-gray-300 rounded">
              <p className={`text-xl font-mono ${checkResult === 'Code is valid!' ? 'text-green-500' : 'text-red-500'}`}>
                {checkResult}
              </p>
            </div>
          )}
        </div>
      ) : ( // Render Matric Number entry page
        <div className="bg-white p-8 rounded shadow-md text-center">
          <h1 className="text-2xl font-bold mb-4">Log On</h1>
          <form onSubmit={handleSubmit}>
            <label className="block mb-2">
              Enter Matric Number:
              <input
                type="text"
                value={matricNumber}
                onChange={(e) => setMatricNumber(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 mt-1 w-full"
                required
              />
            </label>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-2 transition"
            >
              Submit Matric Number
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
