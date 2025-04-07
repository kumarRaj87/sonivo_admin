 import React, { useState } from 'react';
 import { FiLogOut, FiMenu } from "react-icons/fi";
 import { IoMdClose } from "react-icons/io";

const Navbar = ({ handleLogout, toggleSidebar }) => {
    const [showProfilePopup, setShowProfilePopup] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleProfileUpdate = (e) => {
      e.preventDefault();
      localStorage.setItem('userEmail', email);
      setShowProfilePopup(false);
    };
  
    return (
      <>
        <header className="h-16 sticky top-0 px-4 justify-between flex w-full bg-primary-200 border-b-[1px] border-gray-200 z-[5000]">
          <div className="flex items-center">
            {/* Mobile menu button - shown only below lg breakpoint */}
            <button
              className="lg:hidden p-2 mr-2 rounded-md text-gray-600 hover:bg-gray-100"
              onClick={toggleSidebar}
            >
              <FiMenu className="h-6 w-6" />
            </button>
          </div>
          
          <div className="h-full flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
                onClick={() => setShowProfilePopup(true)}
              >
                <svg 
                  className="h-6 w-6"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
                  />
                </svg> 
              </button>
  
              <button
                className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
                onClick={handleLogout}
              >
                <FiLogOut className='text-[#808080]' size={24} />
              </button>
            </div>
          </div>
        </header>
  
        {/* Profile Update Popup */}
        {showProfilePopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999999]">
            <div className="bg-white rounded-2xl shadow-lg w-full md:w-[600px]">
              <div className='flex justify-start mb-4 rounded-t-2xl px-6 py-4 items-center w-full gap-6 bg-primary-200'>
                <IoMdClose className='text-gray-600 cursor-pointer' size={20} onClick={() => setShowProfilePopup(false)} />
                <h2 className="text-lg font-semibold text-center">Update Profile</h2>
              </div>
              <form onSubmit={handleProfileUpdate} className='rounded-b-2xl p-6 gap-4 w-full flex flex-col'>
                <div className="relative group">
                  <div className="absolute -top-2.5 left-3 bg-white px-1 text-primary text-[11px]">
                    Email
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-3 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
                    placeholder=""
                  />
                </div>
                <div className="relative group">
                  <div className="absolute -top-2.5 left-3 bg-white px-1 text-primary text-[11px]">
                    Password
                  </div>
                  <input
                    type="password"
                    id="password"
                    className="w-full pl-3 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="flex justify-center w-full">
                  <button
                    type="submit"
                    className="px-4 py-2 w-full text-sm bg-primary-400 text-white rounded-md hover:bg-primary"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </>
    );
  };

 export default Navbar;