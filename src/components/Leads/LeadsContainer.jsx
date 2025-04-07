import React from 'react';
import LeadsHeader from './LeadsHeader';
import LeadsTable from './LeadsTable';

const LeadsContainer = () => {
  return (
    <div className="">
      <LeadsHeader />
      <div className="bg-white rounded-lg shadow-md p-6">
        <LeadsTable />
      </div>
    </div>
  );
};

export default LeadsContainer;