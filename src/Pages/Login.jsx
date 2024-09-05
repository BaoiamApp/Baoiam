import React from "react";
import googleImage from '../assets/Images/google.svg'; 
import exampleImage from '../assets/Images/image.jpeg';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
    return (
        <>
          <style>
            {`
              @keyframes fadeIn {
                from {
                  opacity: 0;
                }
                to {
                  opacity: 1;
                }
              }
    
              @keyframes slideInLeft {
                from {
                  transform: translateX(-100%);
                  opacity: 0;
                }
                to {
                  transform: translateX(0);
                  opacity: 1;
                }
              }
    
              @keyframes slideInUp {
                from {
                  transform: translateY(100%);
                  opacity: 0;
                }
                to {
                  transform: translateY(0);
                  opacity: 1;
                }
              }
    
              .animation-container {
                animation: fadeIn 0.8s ease-in-out forwards;
              }
    
              .animate-fadeIn {
                animation: fadeIn 1.2s ease-in-out forwards;
              }
    
              .animate-slideInLeft {
                animation: slideInLeft 1s ease-in-out forwards;
              }
    
              .animate-slideInUp {
                animation: slideInUp 1s ease-in-out forwards;
              }
            `}
          </style>
    
          <div className="flex items-center justify-center py-16 bg-gray-100">
          <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-lg lg:shadow-xl rounded-2xl md:flex-row md:space-y-0">
              {/* Left Side */}
              <div className="flex flex-col justify-center p-8 md:p-14 animate-slideInLeft">
                <span className="mb-3 text-4xl font-bold text-blue-500">Welcome back</span>
                <span className="font-light text-gray-400 mb-8 animate-fadeIn">
                  Welcome back! Please enter your details
                </span>
                <div className="py-4 animate-slideInUp">
                  <span className="mb-2 text-md">Email</span>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="py-4 animate-slideInUp">
                  <span className="mb-2 text-md">Password</span>
                  <input
                    type="password"
                    name="pass"
                    id="pass"
                    className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="flex justify-between w-full py-4 animate-fadeIn">
                  <div className="mr-24">
                    <input type="checkbox" name="ch" id="ch" className="mr-2" />
                    <span className="text-md">Remember for 30 days</span>
                  </div>
                  <span className="font-bold text-md cursor-pointer">Forgot password</span>
                </div>
                <button className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300 transform hover:scale-105 transition-all duration-300 animate-slideInUp">
                  Sign in
                </button>
                <button className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white transform hover:scale-105 transition-all duration-300 animate-slideInUp">
                  <img src={googleImage} alt="Google" className="w-6 h-6 inline mr-2" />
                  Sign in with Google
                </button>
                <div className="text-center text-gray-400 animate-fadeIn">
                  Don't have an account?{" "}
                  <span onClick={()=>navigate("/profile")} className="font-bold text-black cursor-pointer hover:underline">
                    Sign up for free
                  </span>
                </div>
              </div>
              {/* Right Side */}
              <div className="relative animate-fadeIn">
                <img
                  src={exampleImage}  // Use the imported image
                  alt="Example"
                  className="w-[600px] h-full hidden rounded-r-2xl md:block object-cover"
                />
              </div>
            </div>
          </div>
        </>
      );
    }
    
    export default Login;