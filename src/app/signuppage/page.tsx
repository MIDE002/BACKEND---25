"use client";



import React, { useState } from 'react';
import axios from 'axios';
import { assignHallAdmin } from '../Mapping/map'; // Import hall admin matching function


function Page() {
  const [firstName, setFirstName] = useState('');
  const [surName, setSurName] = useState('');
  const [idType, setIdType] = useState('');
  const [matricNumber, setMatricNumber] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [dob, setDob] = useState('');
  const [hostel, setHostel] = useState('');
  const [gender, setGender] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const isFormValid = () => {
    return (
      firstName &&
      surName &&
      idType &&
      ((idType !== 'Hall admin' && matricNumber) || idType === 'Hall admin') &&
      password &&
      email &&
      dob &&
      hostel &&
      gender &&
      contactNo
    );
  };

   const handleRegister = async () => {
      try {
        // Assign hall admin based on selected hostel
        const assignment = assignHallAdmin({
          email,
          hostelName: hostel,
        });
  
        if (!assignment.assignedHallAdmin) {
          console.error("No matching hall admin found for this hostel.");
          setErrorMessage("No hall admin found for the selected hostel.");
          return;
        }
  
        // Send updated signup data to backend
        const response = await axios.post('http://localhost:5000/Signup', {
          firstName,
          surName,
          idType,
          matricNumber,
          password,
          email,
          contactNo,
          dob,
          hostel,
          gender,
          hallAdminEmail: assignment.assignedHallAdmin, // Include assigned hall admin
        });
  
        setRegistrationSuccess(true);
        localStorage.setItem('idType', idType);
        const emailDomain = email.split('@')[1];
        localStorage.setItem('emailDomain', emailDomain);
        window.location.href = '/landingpage';
      } catch (error) {
        setErrorMessage('Error registering user');
        console.error('Error:', error);
      }
    };
  
  return (
    <div className='h-screen flex justify-center items-center bg-blue-900'>
      <form className='bg-white p-4 rounded-lg shadow-md w-full max-w-md md:max-w-lg lg:max-w-xl'>
        <h1 className='text-blue-800 text-3xl font-bold mb-4'>SIGNUP</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-2'>
          <input
            className='w-full p-2 rounded-lg border focus:border-teal-500'
            placeholder='First Name'
            type='text'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            className='w-full p-2 rounded-lg border focus:border-teal-500'
            placeholder='Surname'
            type='text'
            value={surName}
            onChange={(e) => setSurName(e.target.value)}
          />
        </div>

        <div className='mb-2'>
          <select
            className='w-full p-2 rounded-lg border focus:border-teal-500'
            value={idType}
            onChange={(e) => setIdType(e.target.value)}
          >
            <option value=''>Select ID</option>
            <option value='Admin'>Admin</option>
            {/* {ayo remember when you get to school remember to remove
             just the disabled text so you can add an admin but for now 
             you are the only one youremail:ayomide@admin.babcock.edu.ng password:12345pass  remember!!!} */}
            <option value='student'>Student</option>
            <option value='Hall admin' >Hall Admin</option>
          </select>
        </div>

        {idType !== 'Admin' && idType !== 'Hall admin' && (
          <div className='mb-2'>
            <input
              className='w-full p-2 rounded-lg border focus:border-teal-500'
              placeholder='Matric Number'
              type='text'
              value={matricNumber}
              onChange={(e) => setMatricNumber(e.target.value)}
            />
          </div>
        )}

        <>
          <div className='mb-2'>
          <div className="relative mt-1">
          <span className="absolute inset-y-0 right-0 p-2 flex items-center pl-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
          </span>
            <input
              className='w-full p-2 rounded-lg border focus:border-teal-500'
              placeholder='Password'
              type='text'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
           
          </div>

          <div className='mb-2'>
<div  className="relative mt-1">
<span className="absolute inset-y-0 right-0 p-2 flex items-center pl-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-6 w-6 text-gray-400"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
        />
      </svg>
         </span>
            <input
              className={`w-full p-2 rounded-lg border focus:border-teal-500 ${emailError && 'border-red-500'}`}
              placeholder='Email'
              type='email'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError('');
              }}
            />
            {emailError && <p className='text-red-500 text-sm'>{emailError}</p>}
          </div>

</div>
         
        </>

        {idType !== 'Admin' && idType !== 'Hall admin' && (
          <div className='mb-2'>
            <select
              value={hostel}
              onChange={(e) => setHostel(e.target.value)}
              className={`w-full p-2 rounded-lg border focus:border-teal-500 ${emailError && 'border-red-500'}`}
            >
              <option value='' disabled>Select Hostel</option>
              <option value='Samuelakandehall'>Samuel Akande hall</option>
              <option value='Topazhall'>Topaz hall</option>
              <option value='Welchhall'>Welch hall</option>
              <option value='Winslowhall'>Winslow hall</option>
              <option value='Nealwilsonhall'>Neal Wilson hall</option>
              <option value='Gideonbethelhall'>Gideon Bethel hall</option>
              <option value='Emeraldhall'>Emerald hall</option>
              <option value='Gamalielhall'>Gamaliel hall</option>
              <option value='Crystalhall'>Crystal hall</option>
              <option value='Justicedeborahhall'>Justice Deborah hall</option>
              <option value='Feliciaadebisihall'>Felicia Adebisi hall</option>
              <option value='Nyberghall'>Nyberg hall</option>
              <option value='Ogdenhall'>Ogden hall</option>
              <option value='Queenestherhall'>Queen Esther hall</option>
              <option value='platinumhall'>Platinum hall</option>
              <option value='diamondhall'>Diamond hall</option>
              <option value='whitehall'>White Hall</option>
              <option value='havillahhall'>Havillah hall</option>
            </select>
          </div>
        )}

        {idType !== 'Admin' && (
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-2'>
            <input
              className='w-full p-2 rounded-lg border focus:border-teal-500'
              placeholder='Date of Birth'
              type='date'
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
            <select
             className='w-full p-2 rounded-lg border focus:border-teal-500'
             value={gender}
             onChange={(e) => setGender(e.target.value)}
           >
             <option value=''>Select Gender</option>
             <option value='male'>Male</option>
             <option value='female'>Female</option>
           </select>
         </div>
        )}

        {idType !== 'Admin' && (
        <div className='mb-2'>
<div  className="relative mt-1">
<span className="absolute inset-y-0 right-0 p-2 flex items-center pl-3">

  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
 </svg>
</span>
          <input
            className='w-full p-2 rounded-lg border focus:border-teal-500'
            placeholder='Contact no'
            type='text'
            value={contactNo}
            onChange={(e) => setContactNo(e.target.value)}
          />

            </div>

        </div>
        )}

        {registrationSuccess ? (
          <div className="text-green-500 mb-2">Registration Successful!</div>
        ) : (
          <button
            className='w-full py-2 font-bold text-white rounded-lg bg-blue-900 hover:bg-blue-800 focus:outline-none focus:shadow-outline'
            type='button'
            onClick={handleRegister}
          >
            Register
          </button>
        )}

        {errorMessage && <div className="text-red-500">{errorMessage}</div>}
      </form>
    </div>
  );
}

export default Page;

















