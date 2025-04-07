import React, { useState, useEffect } from 'react';
import ColorPalette from './ColorPalette';
import Skeleton from './Skeleton';
import { IoMdPhonePortrait } from "react-icons/io";

const WebTheme = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white p-4">
      {/* <header className="bg-gray-50 border-b border-gray-200 py-4 px-6">
        <div className="flex items-center justify-between">
        <div className="flex items-start gap-4 w-full sm:w-auto lg:flex-col" >
          <img
            src='https://sonivo.oneoftheprojects.com/assets/faq.svg'
            alt=''
            className='h-16 w-16 sm:h-24 sm:w-24'
          />
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Web theme</h2>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
              <span>Dashboard</span>
              <span>•</span>
              <span>Web theme</span>
            </div>
          </div>
        </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Save
          </button>
        </div>
      </header> */}


              
<div className="flex flex-col items-center justify-between mb-8">
        <div className="flex justify-start items-center w-full">
          <img
            src='https://sonivo.oneoftheprojects.com/assets/faq.svg'
            alt=''
            className='h-24 w-24'
          />
        </div>
        <div className='w-full justify-between items-center flex'>

          <div className='space-y-2 flex flex-col'>
            <h1 className="text-2xl font-medium text-primary"> Call Force</h1>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span>Dashboard</span>
              <span>•</span>
              <span> Call Force</span>
            </div>
          </div>
          <button
            onClick={() => setIsCreateModalOpen(true)}
            className="text-sm bg-primary-400 text-background mt-4 py-2 px-4 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 flex items-center justify-center gap-2"
          >
            <IoMdPhonePortrait className='text-background' size={20} />
            Save
          </button>
        </div>
      </div>
      
      <main className=" py-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="border-b border-gray-200 px-6 py-4">
            <h2 className="text-xl font-semibold text-gray-800">Text</h2>
          </div>
          {loading ? <Skeleton /> : <ColorPalette />}
        </div>
      </main>
    </div>
  );
};

export default WebTheme;