import React, { useEffect, useState } from 'react';
import LeadsHeader from './LeadsHeader';
import LeadsTable from './LeadsTable';
import Loader from '../loader/Loader';

const LeadsContainer = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 300);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="min-h-[50vh] bg-primary-200 p-2 w-full">
      <LeadsHeader />
      <div className="bg-white rounded-xl">
        <LeadsTable />
      </div>
    </div>
  );
};

export default LeadsContainer;