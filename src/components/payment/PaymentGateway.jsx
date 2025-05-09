

import React, { useState, useEffect } from 'react';
import { Edit } from 'lucide-react';
import EditModal from './EditModal';
import Loader from '../loader/Loader';

const PaymentGateway = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGateway, setSelectedGateway] = useState('');

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 300);
  }, []);

  if (loading) {
    return <Loader />;
  }

  const handleEdit = (gateway) => {
    setSelectedGateway(gateway);
    setIsModalOpen(true);
  };

  const handleSave = () => {
    // Handle save logic here
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-[50vh] bg-primary-200 p-2 w-full">

      <div className="flex flex-col items-center justify-between mb-8">
        <div className="flex justify-start items-center w-full">
          <img
            src='https://sonivo.oneoftheprojects.com/assets/payment_gateway.svg'
            alt=''
            className='h-24 w-24'
          />
        </div>
        <div className='w-full justify-between items-center flex'>

          <div className='space-y-2 flex flex-col'>
            <h1 className="text-2xl font-medium text-primary"> Payment Gateway</h1>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span>Dashboard</span>
              <span>•</span>
              <span>Payment Gateway</span>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="space-y-6">
          {/* Offline Pay */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium text-gray-900">Offline Pay</h2>
              <div className="flex items-center">
                <button
                  onClick={() => handleEdit('Offline Pay')}
                  className="text-gray-500 hover:text-primary-500"
                >
                  <Edit size={20} />
                </button>
                <label className="relative inline-flex items-center ml-4 cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
                </label>
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative group">
                <div className="absolute -top-2.5 left-3 bg-white px-1 text-primary text-[11px]">
                  Title
                </div>
                <input
                  type="text"
                  value="Pay offline"
                  className="w-full pl-3 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
                />
              </div>
              <div className="relative group">
                <div className="absolute -top-2.5 left-3 bg-white px-1 text-primary text-[11px]">
                  Description
                </div>
                <textarea
                  className="w-full pl-3 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
                  rows="3"
                >Pay offline on this account number xxxxxxxxx and send a screenshot to us on this email xxx@xxx.com</textarea>
              </div>
            </div>
          </div>

          {/* Payment Gateway Sections */}
          {['Stripe Gateway', 'Paypal Gateway', 'Razorpay Gateway'].map((gateway) => (
            <div key={gateway} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium text-gray-900">{gateway}</h2>
                <div className="flex items-center">
                  <button
                    onClick={() => handleEdit(gateway)}
                    className="text-gray-500 hover:text-primary-500"
                  >
                    <Edit size={20} />
                  </button>
                  <label className="relative inline-flex items-center ml-4 cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
                  </label>
                </div>
              </div>
              <div className="space-y-4">
                <div className="relative group">
                  <div className="absolute -top-2.5 left-3 bg-white px-1 text-primary text-[11px]">
                    ID
                  </div>
                  <input
                    type="text"
                    placeholder="Enter ID"
                    className="w-full pl-3 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
                  />
                </div>
                <div className="relative group">
                  <div className="absolute -top-2.5 left-3 bg-white px-1 text-primary text-[11px]">
                    Keys
                  </div>
                  <input
                    type="text"
                    placeholder="Enter Keys"
                    className="w-full pl-3 text-sm rounded-[9px] pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-primary focus:border-primary"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full mt-6 px-4 py-2 bg-primary-400 text-white rounded-md hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
          Update
        </button>
      </div>

      <EditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        gateway={selectedGateway}
        onSave={handleSave}
      />
    </div>
  );
};

export default PaymentGateway;