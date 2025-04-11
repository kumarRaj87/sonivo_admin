import React, { useEffect, useState } from 'react';
import Table from './Table';
import Loader from '../loader/Loader';
const LayoutOrder = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 300);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="min-h-[50vh] bg-primary-200 p-2 w-full">
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
        </div>
      </div>
        <div className="bg-white rounded-lg overflow-hidden">
          <Table />
      </div>
    </div>
  );
};

export default LayoutOrder;