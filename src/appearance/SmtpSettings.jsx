import { useState } from 'react';
import { FaSave } from "react-icons/fa";
import { TbMailForward } from "react-icons/tb";

function SmtpSettings() {
  const [formData, setFormData] = useState({
    smtpEmail: 'email@gmail.com',
    smtpHost: 'smtp@gmail.com',
    smtpPort: '465',
    smtpPassword: 'password'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('SMTP Settings:', formData);
  };

  const handleCheckSettings = () => {
    console.log('Checking SMTP settings...');
  };

  return (
    <div className="min-h-[50vh] bg-primary-200 w-full">
      <div className="flex items-center justify-start w-full mb-6">
        <div className="flex flex-col items-start gap-4">
          <img
            src='https://png.pngtree.com/png-vector/20220724/ourmid/pngtree-beauty-female-programmer-with-laptop-at-workplace-png-image_6058798.png'
            alt=''
            className='h-28 w-28'
          />
          <div className='space-y-2'>
            <h1 className="text-2xl font-medium text-primary">SMTP Settings</h1>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span>Dashboard</span>
              <span>•</span>
              <span>SMPT settings</span>
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 w-full">
        <div className="rounded-lg w-full space-y-4">
          <div className="relative group">
            <div className="absolute -top-2.5 left-3 bg-primary-200 px-1 
                            transition-all duration-300 
                            text-primary text-[11px]">
              SMTP Email
            </div>
            <input
              type="email"
              name="smtpEmail"
              value={formData.smtpEmail}
              onChange={handleInputChange}
              className="w-full pl-4 bg-primary-200 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
            />
          </div>

          <div className="relative group">
            <div className="absolute -top-2.5 left-3 bg-primary-200 px-1 
                            transition-all duration-300 
                            text-primary text-[11px]">
              SMTP host
            </div>
            <input
              type="text"
              name="smtpHost"
              value={formData.smtpHost}
              onChange={handleInputChange}
              className="w-full pl-4 text-sm bg-primary-200 rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
            />
          </div>

          <div className="relative group">
            <div className="absolute -top-2.5 left-3 bg-primary-200 px-1 
                            transition-all duration-300 
                            text-primary text-[11px]">
              SMTP port
            </div>
            <input
              type="text"
              name="smtpPort"
              value={formData.smtpPort}
              onChange={handleInputChange}
              className="w-full pl-4 text-sm bg-primary-200 rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
            />
          </div>

          <div className="relative group">
            <div className="absolute -top-2.5 left-3 bg-primary-200 px-1 
                            transition-all duration-300 
                            text-primary text-[11px]">
              SMTP password
            </div>
            <input
              type="password"
              name="smtpPassword"
              value={formData.smtpPassword}
              onChange={handleInputChange}
              className="w-full pl-4 text-sm bg-primary-200 rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
            />
          </div>
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="px-4 py-2 text-sm bg-primary-400 text-white rounded-md hover:bg-primary transition-colors flex items-center gap-2"
          >
            <FaSave className='text-white' size={18}/>
            Save
          </button>
          <button
            type="button"
            onClick={handleCheckSettings}
            className="px-4 py-2 text-sm bg-white text-primary border border-primary rounded-md hover:bg-primary-200 transition-colors flex items-center gap-2"
          >
            <TbMailForward className='text-primary' size={18}/>
            Check SMTP Settings
          </button>
        </div>
      </form>
    </div>
  );
}

export default SmtpSettings;