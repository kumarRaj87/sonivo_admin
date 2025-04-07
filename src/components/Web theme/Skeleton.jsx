import React from 'react';

const Skeleton = () => {
  return (
    <div className="animate-pulse p-6">
      {[...Array(6)].map((_, categoryIndex) => (
        <div key={categoryIndex} className="mb-8">
          <div className="h-6 w-32 bg-gray-200 rounded mb-4"></div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[...Array(3)].map((_, boxIndex) => (
              <div key={boxIndex} className="p-4 bg-gray-50 rounded-lg">
                <div className="h-4 w-20 bg-gray-200 rounded mb-2"></div>
                <div className="h-12 w-12 bg-gray-200 rounded-lg"></div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skeleton;