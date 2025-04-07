import React from 'react';

const Skeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="h-20 bg-gray-200 rounded-lg mb-4"></div>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="h-40 bg-gray-200 rounded-lg"></div>
        ))}
      </div>
    </div>
  );
};

export default Skeleton;