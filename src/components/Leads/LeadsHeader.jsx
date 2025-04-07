import React from 'react';
import { IoMdPhonePortrait } from "react-icons/io";
const LeadsHeader = () => {
  return (
    // <div className="mb-8">
    //   <div className="flex items-start gap-4 w-full sm:w-auto lg:flex-col" >
    //       <img
    //         src='https://sonivo.oneoftheprojects.com/assets/contact.svg'
    //         alt=''
    //         className='h-16 w-16 sm:h-24 sm:w-24'
    //       />
    //       <div>
    //         <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Leads</h2>
    //         <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
    //           <span>Dashboard</span>
    //           <span>•</span>
    //           <span>Leads</span>
    //         </div>
    //       </div>
    //     </div>
    // </div>

    <div className="flex flex-col items-center justify-between mb-8">
        <div className="flex justify-start items-center w-full">
          <img
            src='https://sonivo.oneoftheprojects.com/assets/contact.svg'
            alt=''
            className='h-24 w-24'
          />
        </div>
        <div className='w-full justify-between items-center flex'>

          <div className='space-y-2 flex flex-col'>
            <h1 className="text-2xl font-medium text-primary"> Leads</h1>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span>Dashboard</span>
              <span>•</span>
              <span>Leads</span>
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
  );
};

export default LeadsHeader;