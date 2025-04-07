import React from "react";
import { IoMdPhonePortrait } from "react-icons/io";
import AddButton from "./AddButton";
const Header = () => {

  const handleFileSelect = files => {
    // Handle file selection - in a real app, you would process the files here
    console.log("Files selected:", files);
    // Example: Add a new partner for each file
    const newPartners = Array.from(files).map((file, index) => ({
      id: partners.length + index,
      name: file.name.split('.')[0],
      logoUrl: URL.createObjectURL(file)
    }));
    setPartners([...partners, ...newPartners]);
  };
  return <div className="mb-8">
     

<div className="flex flex-col items-center justify-between mb-8">
        <div className="flex justify-start items-center w-full">
          <img
            src='https://sonivo.oneoftheprojects.com/assets/partners.svg'
            alt=''
            className='h-24 w-24'
          />
        </div>
        <div className='w-full justify-between items-center flex'>

          <div className='space-y-2 flex flex-col'>
            <h1 className="text-2xl font-medium text-primary"> Front Partner</h1>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span>Dashboard</span>
              <span>•</span>
              <span> Front Partner</span>
            </div>
          </div>
          <button
            onClick={() => setIsCreateModalOpen(true)}
            className=""
          >
            <IoMdPhonePortrait className='text-background' size={20} />
            <AddButton onFileSelect={handleFileSelect} />
          </button>
        </div>
      </div>
    </div>;
};
export default Header;