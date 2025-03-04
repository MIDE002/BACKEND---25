

// "use client";
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// export default function Home() {
//   const [code, setCode] = useState('');
//   const [isExpired, setIsExpired] = useState(false);
//   const [canGenerate, setCanGenerate] = useState(false);
//   const [generationTime, setGenerationTime] = useState(null);
//   const [copySuccess, setCopySuccess] = useState('');

//   const generateCode = () => {
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     let result = '';
//     const length = 10; // Adjust the length of the generated code here
//     for (let i = 0; i < length; i++) {
//       const randomIndex = Math.floor(Math.random() * characters.length);
//       result += characters[randomIndex];
//     }
//     setCode(result);
//     setIsExpired(false);
//     setGenerationTime(new Date());
//   };

//   const saveCode = async (code) => {
//     try {
//       const response = await axios.post('http://localhost:5000/Roomcheck', 
//         { code }, // Sending the generated code
//         {
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         }
//       );

//       if (response.status === 200) {
//         alert('Code saved successfully!');
//       } else {
//         alert('Failed to save code');
//       }
//     } catch (error) {
//       alert(`Failed to save code: ${error.message}`);
//     }
//   };

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(code).then(() => {
//       setCopySuccess('Code copied to clipboard!');
//       setTimeout(() => setCopySuccess(''), 2000);
//     });
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const now = new Date();
//       const expireTime = new Date();
//       expireTime.setHours(23, 30, 0, 0); // Set expiration time to 11:30 PM

//       const generateStartTime = new Date();
//       generateStartTime.setHours(7, 7, 0, 0); // Set start time to 2:27 PM

//       setCanGenerate(now >= generateStartTime);

//       if (generationTime) {
//         if (now >= expireTime) {
//           setIsExpired(true);
//         }
//       }
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [generationTime]);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded shadow-md text-center">
//         <h1 className="text-2xl font-bold mb-4">Code Generator</h1>
//         <button
//           onClick={generateCode}
//           className={`bg-blue-500 text-white px-4 py-2 rounded transition ${
//             canGenerate ? 'hover:bg-blue-600' : 'opacity-50 cursor-not-allowed'
//           }`}
//           disabled={!canGenerate}
//         >
//           Generate Code
//         </button>
//         {code && !isExpired && (
//           <div className="mt-4 p-2 bg-gray-100 border border-gray-300 rounded">
//             <p className="text-xl font-mono">{code}</p>
//             <div className="flex justify-center mt-4">
//               <button
//                 onClick={copyToClipboard}
//                 className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-4 transition"
//               >
//                 Copy Code
//               </button>
//               <button
//                 onClick={() => saveCode(code)}
//                 className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
//               >
//                 Save Code
//               </button>
//             </div>
//             {copySuccess && <p className="mt-2 text-green-600">{copySuccess}</p>}
//           </div>
//         )}
//         {isExpired && (
//           <div className="mt-4 p-2 bg-red-100 border border-red-300 rounded">
//             <p className="text-xl font-mono text-red-500">Code Expired</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
"use client";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [code, setCode] = useState("");
  const [isExpired, setIsExpired] = useState(false);
  const [canGenerate, setCanGenerate] = useState(false);
  const [generationTime, setGenerationTime] = useState(null);
  const [copySuccess, setCopySuccess] = useState("");
  const [locationStatus, setLocationStatus] = useState("");

  // Hall location (latitude and longitude)
  const HALL_LOCATION = { latitude: 32.232528, longitude: -110.961976 };
  const ALLOWED_RADIUS_KM = 0.5; // Allowed distance in km

  // Haversine formula for accurate distance calculation
  const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of Earth in km
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
  };

  const generateCode = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const distance = getDistanceFromLatLonInKm(
          latitude,
          longitude,
          HALL_LOCATION.latitude,
          HALL_LOCATION.longitude
        );

        if (distance <= ALLOWED_RADIUS_KM) {
          const characters =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
          let result = "";
          const length = 10;
          for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters[randomIndex];
          }
          setCode(result);
          setIsExpired(false);
          setGenerationTime(new Date());
          setLocationStatus(""); // Clear any previous error
        } else {
          setLocationStatus("You are not within the allowed location.");
        }
      },
      (error) => {
        setLocationStatus("Unable to retrieve your location.");
      }
    );
  };

  const saveCode = async (code) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/Roomcheck",
        { code },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        alert("Code saved successfully!");
      } else {
        alert("Failed to save code");
      }
    } catch (error) {
      alert(`Failed to save code: ${error.message}`);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopySuccess("Code copied to clipboard!");
      setTimeout(() => setCopySuccess(""), 2000);
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const expireTime = new Date();
      expireTime.setHours(23, 30, 0, 0); // Set expiration time

      const generateStartTime = new Date();
      generateStartTime.setHours(7, 7, 0, 0); // Set start time

      setCanGenerate(now >= generateStartTime);

      if (generationTime && now >= expireTime) {
        setIsExpired(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [generationTime]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4">Code Generator</h1>
        <button
          onClick={generateCode}
          className={`bg-blue-500 text-white px-4 py-2 rounded transition ${
            canGenerate ? "hover:bg-blue-600" : "opacity-50 cursor-not-allowed"
          }`}
          disabled={!canGenerate}
        >
          Generate Code
        </button>
        {locationStatus && <p className="text-red-500 mt-2">{locationStatus}</p>}
        {code && !isExpired && (
          <div className="mt-4 p-2 bg-gray-100 border border-gray-300 rounded">
            <p className="text-xl font-mono">{code}</p>
            <div className="flex justify-center mt-4">
              <button
                onClick={copyToClipboard}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-4 transition"
              >
                Copy Code
              </button>
              <button
                onClick={() => saveCode(code)}
                className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
              >
                Save Code
              </button>
            </div>
            {copySuccess && <p className="mt-2 text-green-600">{copySuccess}</p>}
          </div>
        )}
        {isExpired && (
          <div className="mt-4 p-2 bg-red-100 border border-red-300 rounded">
            <p className="text-xl font-mono text-red-500">Code Expired</p>
          </div>
        )}
      </div>
    </div>
  );
}
