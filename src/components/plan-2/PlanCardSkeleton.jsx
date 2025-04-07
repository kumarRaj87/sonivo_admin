import React from 'react';

const PlanCardSkeleton = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6 animate-pulse">
      <div className="flex justify-between items-center mb-4">
        <div className="h-8 w-48 bg-gray-200 rounded"></div>
        <div className="h-10 w-24 bg-gray-200 rounded"></div>
      </div>
      
      <div className="h-4 w-3/4 bg-gray-200 rounded mb-6"></div>
      
      <div className="space-y-4 mb-6">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="h-5 w-5 bg-gray-200 rounded-full"></div>
            <div className="h-4 w-24 bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>
      
      <div className="space-y-3">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="h-5 w-5 bg-gray-200 rounded"></div>
            <div className="h-4 w-36 bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanCardSkeleton;