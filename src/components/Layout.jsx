import React from 'react';
 import Sidebar from './Sidebar'
 import Navbar from './Navbar'
 import { Outlet } from 'react-router-dom'
import { useState } from 'react';
const Layout = ({ handleLogout }) => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const toggleMobileSidebar = () => {
    setMobileSidebarOpen(!mobileSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-[#F7FAFC]">
      <Sidebar 
        isOpen={mobileSidebarOpen} 
        toggleSidebar={toggleMobileSidebar} 
      />

      <div className="flex flex-col w-full lg:pl-60">
        <Navbar
          handleLogout={handleLogout}
          toggleSidebar={toggleMobileSidebar}
        />
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

 export default Layout