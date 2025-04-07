import React from 'react';
import Header from './Header';
import Table from './Table';
import { IoMdPhonePortrait } from "react-icons/io";
const LayoutOrder = () => {
  return (
    <div className="min-h-screen bg-gray-50">


<div className="flex flex-col items-center justify-between mb-8">
        <div className="flex justify-start items-center w-full">
          <img
            src='https://sonivo.oneoftheprojects.com/assets/order.svg'
            alt=''
            className='h-24 w-24'
          />
        </div>
        <div className='w-full justify-between items-center flex'>

          <div className='space-y-2 flex flex-col'>
            <h1 className="text-2xl font-medium text-primary"> Orders</h1>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span>Dashboard</span>
              <span>•</span>
              <span> Orders</span>
            </div>
          </div>
          {/* <button
            onClick={() => setIsCreateModalOpen(true)}
            className="text-sm bg-primary-400 text-background mt-4 py-2 px-4 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 flex items-center justify-center gap-2"
          >
            <IoMdPhonePortrait className='text-background' size={20} />
            Create Plan
          </button> */}
        </div>
      </div>
      <div className=" pt-4">
        {/* <Header /> */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <Table />
        </div>
      </div>
    </div>
  );
};

export default LayoutOrder;