import React from 'react';

const Skeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
      {[1, 2, 3, 4].map((item) => (
        <div key={item} className="mb-6">
          <div className="h-6 bg-gray-200 rounded w-1/3 mb-2"></div>
          <div className="h-12 bg-gray-200 rounded w-full"></div>
        </div>
      ))}
    </div>
  );
};

export default Skeleton;