// "use client";

// import React, { useState } from 'react';
// import axios from 'axios';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleSubmit = async () => {
//     try {
//       if (!email || !password) {
//         setErrorMessage('Please fill in both email and password fields');
//         return;
//       }
  
//       const response = await axios.post('http://localhost:5000/login', { email, password });
//       const userData = response.data;
  
//       if (userData.token) {
//         localStorage.setItem('token', userData.token); // Store token in localStorage
//         const emailDomain = email.split('@')[1];
//         localStorage.setItem('emailDomain', emailDomain); // Store email domain in localStorage
//         window.location.href = '/landingpage';
//       } else {
//         setErrorMessage('Invalid email or password');
//       }
//     } catch (error) {
//       setErrorMessage('Invalid email or password');
//       console.error('Login error:', error);
//     }
//   };

//   const handleSignup = () => {
//     window.location.href = '/signuppage';
//   };

//   const handleForgotPassword = () => {
//     window.location.href = '/Forgotpassword'; // Navigate to forgot password page
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-blue-900">
//       <div className="bg-white p-8 rounded shadow-md w-full max-w-md md:max-w-lg lg:max-w-xl">
//         <h2 className="text-2xl font-semibold mb-4">Login</h2>
//         {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
//         <form>
//         <div className="mb-4">
//   <label htmlFor="email" className="block text-gray-600">
//     Email
//   </label>
//   <div className="relative mt-1">
//     <span className="absolute inset-y-0 right-0 p-2 flex items-center pl-3">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         strokeWidth="1.5"
//         stroke="currentColor"
//         className="h-6 w-6 text-gray-400"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
//         />
//       </svg>
//     </span>
//     <input
//       type="email"
//       id="email"
//       value={email}
//       onChange={(e) => setEmail(e.target.value)}
//       className="form-input block w-full pl-10 pr-3 py-2 border rounded-lg focus:border-teal-500"
//       required
//     />
//   </div>
// </div>

//           <div className="mb-6">
//         <label htmlFor="password" className="block text-gray-600">
//           Password
//         </label>
//         <div className="relative mt-1">
//           <span className="absolute inset-y-0 right-0 p-2 flex items-center pl-3">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth="1.5"
//               stroke="currentColor"
//               className="h-6 w-6 text-gray-400"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
//               />
//             </svg>
//           </span>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="form-input block w-full pl-10 pr-3 py-2 border rounded-lg focus:border-teal-500"
//             required
//           />
//           </div>
//       </div>

//   <button
//     type="button"
//     onClick={handleSubmit}
//     className="mt-4 w-full py-2 font-bold text-white rounded-lg bg-blue-900 hover:bg-blue-800 focus:outline-none focus:shadow-outline flex items-center justify-center"
//   >
//   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
//   <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
// </svg>

//   Login
// </button>
//         </form>
//         <div className="mt-4 text-center flex flex-col md:flex-row md:justify-between">
//           <div className="mb-4 md:mb-0">
//             <p className="text-gray-600">Don't have an account?</p>
//             <button onClick={handleSignup} className="text-blue-900 hover:underline focus:outline-none">Signup</button>
//           </div>
//           <div>
//             <button onClick={handleForgotPassword} className="text-blue-900 hover:underline focus:outline-none">Forgot your password?</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;













"use client";

import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async () => {
    try {
      if (!email || !password) {
        setErrorMessage('Please fill in both email and password fields');
        return;
      }
  
      const response = await axios.post('http://localhost:5000/login', { email, password });
      const userData = response.data;
  
      if (userData.token) {
        localStorage.setItem('token', userData.token); // Store token in localStorage
        const emailDomain = email.split('@')[1];
        localStorage.setItem('emailDomain', emailDomain); // Store email domain in localStorage
        window.location.href = '/landingpage';
        
        localStorage.setItem('firstName', userData.firstName); // Store username in localStorage
        localStorage.setItem('lastName', userData.lastName); // Store username in localStorage
      } else {
        setErrorMessage('Invalid email or password');
      }
    } catch (error) {
      setErrorMessage('Invalid email or password');
      console.error('Login error:', error);
    }
  };

  const handleSignup = () => {
    window.location.href = '/signuppage';
  };


  const handleForgotPassword = () => {
    window.location.href = '/Forgotpassword'; // Navigate to forgot password page
  };


  return (
    <div className="flex justify-center items-center h-screen bg-blue-900">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md md:max-w-lg lg:max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <div className="flex">
          <div className="w-1/2 pr-8">
            {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-600">
                  Email
                </label>
                <div className="relative mt-1">
                  <span className="absolute inset-y-0 left-0 p-2 flex items-center pl-3">
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
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-input block w-full pl-10 pr-3 py-2 border rounded-lg focus:border-teal-500"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-600">
                  Password
                </label>
                <div className="relative mt-1">
                  <span className="absolute inset-y-0 left-0 p-2 flex items-center pl-3">
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
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-input block w-full pl-10 pr-3 py-2 border rounded-lg focus:border-teal-500"
                    required
                  />
                </div>
              </div>

             <button
              type="button"
              onClick={handleSubmit}
              className="mt-4 w-full py-2 font-bold text-white rounded-lg bg-blue-900 hover:bg-blue-800 focus:outline-none focus:shadow-outline flex items-center justify-center"
            >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                  />
                </svg>
                Login
              </button>

            <div className="text-center mt-2">
              <p className="text-gray-600">Don't have an account?</p>
              <button onClick={handleSignup} className="text-blue-900 hover:underline focus:outline-none">
                Signup
              </button>
            </div>
            <div className="mt-4 text-center">
              <button onClick={handleForgotPassword} className="text-blue-900 hover:underline focus:outline-none">
                Forgot your password?
              </button>
            </div>
          
            </form>
          </div>
          <div className="w-0.5 bg-gray-300 mx-8">

          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Login;




// "use client";

// import React, { useState } from 'react';
// import axios from 'axios';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleSubmit = async () => {
//     try {
//       if (!email || !password) {
//         setErrorMessage('Please fill in both email and password fields');
//         return;
//       }
  
//       const response = await axios.post('http://localhost:5000/login', { email, password });
//       const userData = response.data;
  
//       if (userData.token) {
//         localStorage.setItem('token', userData.token); // Store token in localStorage
//         const emailDomain = email.split('@')[1];
//         localStorage.setItem('emailDomain', emailDomain); // Store email domain in localStorage
//         window.location.href = '/landingpage';
//       } else {
//         setErrorMessage('Invalid email or password');
//       }
//     } catch (error) {
//       setErrorMessage('Invalid email or password');
//       console.error('Login error:', error);
//     }
//   };
  

//   const handleSignup = () => {
//     window.location.href = '/signuppage';
//   };


//   const handleForgotPassword = () => {
//     window.location.href = '/Forgotpassword'; // Navigate to forgot password page
//   };


//   return (
//     <div className="flex justify-center items-center h-screen bg-blue-900">
//       <div className="bg-white p-8 rounded shadow-md w-full max-w-md md:max-w-lg lg:max-w-4xl">
//         <h2 className="text-2xl font-semibold mb-4">Login</h2>
//         <div className="flex">
//           <div className="w-1/2 pr-8">
//             {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
//             <form onSubmit={handleSubmit}>
//               <div className="mb-4">
//                 <label htmlFor="email" className="block text-gray-600">
//                   Email
//                 </label>
//                 <div className="relative mt-1">
//                   <span className="absolute inset-y-0 right-0 p-2 flex items-center pl-3">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       strokeWidth="1.5"
//                       stroke="currentColor"
//                       className="h-6 w-6 text-gray-400"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
//                       />
//                     </svg>
//                   </span>
//                   <input
//                     type="email"
//                     id="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="form-input block w-full pl-10 pr-3 py-2 border rounded-lg focus:border-teal-500"
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="mb-6">
//                 <label htmlFor="password" className="block text-gray-600">
//                   Password
//                 </label>
//                 <div className="relative mt-1">
//                   <span className="absolute inset-y-0 right-0 p-2 flex items-center pl-3">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       strokeWidth="1.5"
//                       stroke="currentColor"
//                       className="h-6 w-6 text-gray-400"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
//                       />
//                     </svg>
//                   </span>
//                   <input
//                     type="password"
//                     id="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     className="form-input block w-full pl-10 pr-3 py-2 border rounded-lg focus:border-teal-500"
//                     required
//                   />
//                 </div>
//               </div>

//              <button
//               type="button"
//               onClick={handleSubmit}
//               className="mt-4 w-full py-2 font-bold text-white rounded-lg bg-blue-900 hover:bg-blue-800 focus:outline-none focus:shadow-outline flex items-center justify-center"
//             >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth="1.5"
//                   stroke="currentColor"
//                   className="size-6 mr-2"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
//                   />
//                 </svg>
//                 Login
//               </button>

//             <div className="text-center mt-2">
//               <p className="text-gray-600">Don't have an account?</p>
//               <button onClick={handleSignup} className="text-blue-900 hover:underline focus:outline-none">
//                 Signup
//               </button>
//             </div>
//             <div className="mt-4 text-center">
//               <button onClick={handleForgotPassword} className="text-blue-900 hover:underline focus:outline-none">
//                  your password?
//               </button>
//             </div>
          
//             </form>
//           </div>
//           <div className="w-0.5 bg-gray-300 mx-8">

//           </div>
          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
